import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const items = [
  { label: 'The Terrace',  span: 'col-span-2' },
  { label: 'The Interior', span: 'col-span-1' },
  { label: 'Golden Hours', span: 'col-span-1' },
  { label: 'The Craft',    span: 'col-span-1' },
  { label: 'The Kitchen',  span: 'col-span-1' },
];

export default function Gallery() {
  const ref     = useRef(null);
  const inView  = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="ambience" className="relative bg-[#0d0d0d] section-padding overflow-hidden">

      {/* Ambient */}
      <div className="ambient-glow w-[700px] h-[500px] bg-amber-900/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="font-mono text-[10px] tracking-[0.4em] text-amber-600 uppercase mb-4"
          >
            Feel the Atmosphere
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl font-light text-stone-100"
          >
            Rooftop{' '}
            <span className="text-gradient italic">Ambience</span>
          </motion.h2>
          <div className="ornament-divider max-w-xs mx-auto mt-4">
            <span className="font-mono text-[8px] text-amber-700 tracking-widest uppercase">Gallery</span>
          </div>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className={`relative group overflow-hidden rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center cursor-default glow-border
                          ${i === 0 ? 'row-span-2 md:' + item.span : ''}
                          ${i === 0 ? 'h-64 md:h-auto' : 'h-52 md:h-64'}`}
              style={{ aspectRatio: i === 0 ? undefined : '4/3' }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,146,42,0.1)_0,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="text-center z-10 transition-transform duration-700 group-hover:scale-105">
                <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-amber-600 mb-2 opacity-50">Atmosphere</p>
                <p className="font-display text-2xl md:text-3xl text-gradient font-light">{item.label}</p>
              </div>

              {/* Corner glow */}
              <div className="absolute top-3 right-3 w-6 h-6 rounded-full
                              bg-amber-500/0 group-hover:bg-amber-500/10
                              blur-xl transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
