import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const coffeeItems = [
  {
    name: 'The Perch Black',
    desc: 'Cold-brewed for 24 hours. Obsidian dark. Dangerously smooth.',
    price: '₹320',
    tag: 'Signature',
    img: '/coffee_pour.png',
  },
  {
    name: 'Golden Hour',
    desc: 'Turmeric latte with oat milk, raw honey, and cardamom smoke.',
    price: '₹280',
    tag: 'Specialty',
    img: '/coffee_pour.png',
  },
  {
    name: 'Above Cloud Espresso',
    desc: 'Triple-shot espresso with a whisper of vanilla and sea salt crema.',
    price: '₹350',
    tag: 'House Favourite',
    img: '/coffee_pour.png',
  },
];

const foodItems = [
  {
    name: 'Truffle Bruschetta',
    desc: 'Charcoal sourdough, whipped ricotta, black truffle oil, microgreens.',
    price: '₹490',
    tag: "Chef's Pick",
    img: '/food_plate.png',
  },
  {
    name: 'Rooftop Mezze Board',
    desc: 'Artisan cheeses, dried fruits, smoked nuts, and warm flatbreads.',
    price: '₹780',
    tag: 'To Share',
    img: '/food_plate.png',
  },
  {
    name: 'Dark Chocolate Tart',
    desc: '72% Valrhona ganache, sea salt caramel, edible gold leaf.',
    price: '₹380',
    tag: 'Dessert',
    img: '/food_plate.png',
  },
];

function MenuCard({ item, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
      className="menu-item-card group glass-card overflow-hidden cursor-pointer"
    >
      {/* Visual Header Instead of Image */}
      <div className="h-40 overflow-hidden relative flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,146,42,0.15)_0,transparent_70%)]" />
        <span className="absolute top-3 left-3 font-mono text-[9px] tracking-widest uppercase
                         px-2 py-1 bg-amber-700/80 text-amber-100 rounded-sm z-10">
          {item.tag}
        </span>
        <div className="text-center z-10 menu-img transition-transform duration-700">
           <p className="font-display text-6xl text-gradient italic opacity-40">{item.name.charAt(0)}</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display text-lg text-stone-100 font-medium">{item.name}</h3>
          <span className="font-mono text-amber-500 text-sm font-medium">{item.price}</span>
        </div>
        <p className="font-light text-stone-500 text-sm leading-relaxed">{item.desc}</p>

        <div className="mt-4 pt-4 border-t border-white/5">
          <button className="font-mono text-[9px] tracking-[0.25em] uppercase text-amber-600
                             hover:text-amber-400 transition-colors duration-300 flex items-center gap-2">
            Add to Order
            <span className="w-4 h-px bg-amber-600 group-hover:w-8 transition-all duration-300" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="menu" className="relative bg-[#0f0f0f] section-padding overflow-hidden">
      {/* Ambient */}
      <div className="ambient-glow w-[500px] h-[300px] bg-amber-800/15 right-0 top-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="font-mono text-[10px] tracking-[0.4em] text-amber-600 uppercase mb-4"
          >
            Crafted with Intention
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl font-light text-stone-100"
          >
            Signature Coffee{' '}
            <span className="text-gradient italic">&amp; Food</span>
          </motion.h2>
          <div className="ornament-divider max-w-xs mx-auto mt-4">
            <span className="font-mono text-[8px] text-amber-700 tracking-widest uppercase">The Menu</span>
          </div>
        </div>

        {/* Coffee */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-mono text-[11px] tracking-[0.35em] uppercase text-amber-600 mb-8 flex items-center gap-4"
          >
            <span className="w-8 h-px bg-amber-600" /> Coffee &amp; Drinks
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coffeeItems.map((item, i) => <MenuCard key={item.name} item={item} index={i} />)}
          </div>
        </div>

        {/* Food */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="font-mono text-[11px] tracking-[0.35em] uppercase text-amber-600 mb-8 flex items-center gap-4"
          >
            <span className="w-8 h-px bg-amber-600" /> Bites &amp; Plates
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {foodItems.map((item, i) => <MenuCard key={item.name} item={item} index={i} />)}
          </div>
        </div>

        {/* Full menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center mt-14"
        >
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative font-mono text-[11px] tracking-[0.3em] uppercase px-10 py-4
                       bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden
                       text-stone-200 hover:bg-white/10 hover:border-white/30
                       hover:text-white transition-all duration-500 rounded-sm inline-flex items-center gap-3">
            <span className="relative z-10">View Full Menu</span>
            <span className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 
                            -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
