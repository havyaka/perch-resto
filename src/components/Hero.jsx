import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

// Generate stable particle data
const PARTICLES = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  left: `${(i * 2.5 + Math.sin(i) * 5 + 50) % 100}%`,
  dur:  `${10 + (i % 8) * 1.5}s`,
  delay:`${-(i * 0.7)}s`,
  drift:`${(i % 2 === 0 ? 1 : -1) * (20 + (i % 5) * 10)}px`,
  size: `${2 + (i % 3)}px`,
}));

export default function Hero({ loaded }) {
  const titleRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (loaded && videoRef.current) {
      // 1. Reset and play video to ensure a clean start after entering
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(e => console.log('Video play error:', e));

      // 2. Smooth video fade-in
      gsap.fromTo(videoRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2.5, ease: 'power2.out' }
      );

      // Subtle cinematic dim for text legibility
      gsap.to(videoRef.current, {
        filter: 'brightness(0.6) contrast(1.1)',
        duration: 2.5,
        ease: 'power2.out',
        delay: 1.0
      });
    }
  }, [loaded]);

  const scrollDown = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-[#0d0d0d]">

      {/* ── Hero Background Video ── */}
      <div className="absolute inset-0 bg-[#0d0d0d] flex items-center justify-center">
        <video
          ref={videoRef}
          src="/perch.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-[100dvh] object-contain opacity-0"
          style={{ objectPosition: 'center' }}
        />
      </div>

      {/* ── Layered overlays ── */}
      {/* Base dark overlay */}
      <div className="absolute inset-0 bg-black/55" />
      {/* Vignette */}
      <div className="absolute inset-0 bg-vignette" />
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64
                      bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/40 to-transparent" />
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-32
                      bg-gradient-to-b from-[#0d0d0d]/60 to-transparent" />

      {/* ── Ambient warm glow orbs ── */}
      <div className="ambient-glow w-96 h-96 bg-amber-600/20 top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2" style={{ animationDuration: '6s', animation: 'pulseGlow 6s ease-in-out infinite' }} />
      <div className="ambient-glow w-64 h-64 bg-orange-700/15 top-1/2 right-1/4" style={{ animation: 'pulseGlow 8s ease-in-out infinite 2s' }} />

      {/* ── Fog overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 60%, rgba(200,140,60,0.06) 0%, transparent 70%)',
          mixBlendMode: 'screen',
        }}
      />

      {/* ── Particles ── */}
      {PARTICLES.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left:    p.left,
            bottom:  0,
            width:   p.size,
            height:  p.size,
            '--dur':   p.dur,
            '--delay': p.delay,
            '--drift': p.drift,
          }}
        />
      ))}

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, letterSpacing: '0.4em' }}
          transition={{ duration: 2, delay: 0.4 }}
          className="font-mono text-[10px] text-amber-500 uppercase mb-8 tracking-[0.4em]"
        >
          Rooftop · Artisan · Experience
        </motion.p>



        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent my-8"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.6 }}
          className="font-display text-xl md:text-3xl italic text-stone-300/80 font-light tracking-widest mb-12"
        >
          Above the noise.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex flex-col sm:flex-row gap-5 items-center mt-6"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('reserve')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-gradient-to-r from-amber-900/40 to-amber-700/40 
                       backdrop-blur-md border border-amber-500/30 overflow-hidden
                       font-mono text-[11px] tracking-[0.3em] uppercase rounded-sm text-amber-100
                       hover:border-amber-400/60 hover:shadow-[0_0_30px_rgba(200,146,42,0.4)]
                       transition-all duration-500 flex items-center justify-center gap-3 w-full sm:w-auto"
          >
            <span className="relative z-10">Reserve Table</span>
            <span className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/0 via-amber-500/20 to-amber-600/0 
                            -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10
                       overflow-hidden font-mono text-[11px] tracking-[0.3em] uppercase rounded-sm text-stone-200
                       hover:bg-white/10 hover:border-white/30 hover:text-white
                       transition-all duration-500 flex items-center justify-center gap-3 w-full sm:w-auto"
          >
            <span className="relative z-10">Explore Menu</span>
            <span className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 
                            -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          </motion.button>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.button
        onClick={scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] tracking-[0.4em] text-stone-500 uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-amber-500 to-transparent animate-pulse" />
      </motion.button>
    </section>
  );
}
