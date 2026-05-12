import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dot  = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot.current) {
        dot.current.style.left = mouseX + 'px';
        dot.current.style.top  = mouseY + 'px';
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ring.current) {
        ring.current.style.left = ringX + 'px';
        ring.current.style.top  = ringY + 'px';
      }
      raf = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      if (ring.current) {
        ring.current.style.width  = '60px';
        ring.current.style.height = '60px';
        ring.current.style.borderColor = 'rgba(200,146,42,0.8)';
      }
    };
    const onLeave = () => {
      if (ring.current) {
        ring.current.style.width  = '36px';
        ring.current.style.height = '36px';
        ring.current.style.borderColor = 'rgba(200,146,42,0.4)';
      }
    };

    window.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, [data-cursor]')
      .forEach(el => { el.addEventListener('mouseenter', onEnter); el.addEventListener('mouseleave', onLeave); });
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dot}  className="cursor-dot"  />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}
