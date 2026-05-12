import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.9, ease: 'easeOut', delay: i * 0.15 }
  }),
};

export default function About() {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative bg-[#0d0d0d] section-padding overflow-hidden">

      {/* Ambient glow */}
      <div className="ambient-glow w-[600px] h-[400px] bg-amber-900/20 -left-40 top-0 pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Image side */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden glow-border h-[500px] flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
            {/* Elegant typographic element instead of image */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,146,42,0.15)_0,transparent_60%)]" />
            <div className="text-center z-10 p-8">
              <p className="font-mono text-[14px] tracking-[0.5em] text-amber-700 uppercase mb-4">Est. 2024</p>
              <h3 className="font-display text-6xl text-gradient uppercase tracking-widest font-light mb-2">The Perch</h3>
              <div className="w-16 h-px bg-amber-600/50 mx-auto mb-4" />
              <p className="font-display text-2xl italic text-stone-400">Artisan Roasters</p>
            </div>
            {/* Warm overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" />
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute -bottom-6 -right-6 glass-card p-5 text-center"
          >
            <p className="font-display text-5xl text-gradient font-semibold">12+</p>
            <p className="font-mono text-[9px] tracking-[0.25em] text-stone-400 uppercase mt-1">
              Signature Blends
            </p>
          </motion.div>
        </motion.div>

        {/* Text side */}
        <div className="flex flex-col gap-6 md:pl-8">
          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="font-mono text-[10px] tracking-[0.4em] text-amber-600 uppercase"
          >
            Our Story
          </motion.p>

          <motion.h2
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="font-display text-4xl md:text-5xl font-light leading-tight text-stone-100"
          >
            Brewed with intention.{' '}
            <span className="text-gradient italic">Served with soul.</span>
          </motion.h2>

          <div className="ornament-divider">
            <span className="font-mono text-[8px] text-amber-700 tracking-widest uppercase">The Perch</span>
          </div>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="text-stone-400 leading-relaxed font-light text-sm md:text-base"
          >
            Perched above the city's relentless rhythm, we created a sanctuary where time slows,
            coffee is crafted with devotion, and every sunset feels like a private showing.
            The Perch isn't just a cafe — it's the pause between the noise.
          </motion.p>

          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="text-stone-500 leading-relaxed font-light text-sm"
          >
            Our beans are single-origin, our roasts are slow, and our baristas are artists.
            Every cup is a conversation. Every visit, a memory.
          </motion.p>

          {/* Stats */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-3 gap-4 pt-4"
          >
            {[
              { n: '4.9★', label: 'Rated' },
              { n: '5K+', label: 'Guests' },
              { n: '3rd', label: 'Floor Rooftop' },
            ].map(({ n, label }) => (
              <div key={label} className="glass-card p-4 text-center">
                <p className="font-display text-2xl text-gradient font-semibold">{n}</p>
                <p className="font-mono text-[9px] tracking-widest text-stone-500 uppercase mt-1">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
