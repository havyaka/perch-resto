import { motion } from 'framer-motion';

const socials = [
  { name: 'Instagram', handle: '@theperchcafe', href: '#' },
  { name: 'Facebook',  handle: 'The Perch Cafe', href: '#' },
  { name: 'Twitter',   handle: '@theperchcafe',  href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5 overflow-hidden">

      {/* Ambient */}
      <div className="ambient-glow w-[600px] h-[200px] bg-amber-900/10 left-1/2 -top-10
                      -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-3 gap-16 mb-16">

          {/* Brand */}
          <div>
            <div className="mb-6">
              <p className="font-mono text-[8px] tracking-[0.4em] text-amber-700 uppercase mb-1">Est. 2024</p>
              <h2 className="font-display text-3xl text-gradient uppercase tracking-widest font-light">
                The Perch Cafe
              </h2>
            </div>
            <p className="font-display text-lg italic text-stone-500 mb-6">Above the noise.</p>
            <p className="text-stone-600 text-sm font-light leading-relaxed max-w-xs">
              A dark luxury rooftop sanctuary where artisan coffee meets the city's skyline.
              Your elevated escape awaits.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.35em] text-amber-600 uppercase mb-6">Navigate</p>
            <ul className="flex flex-col gap-4">
              {['About', 'Menu', 'Ambience', 'Reserve'].map(link => (
                <li key={link}>
                  <button
                    onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="font-mono text-xs tracking-widest text-stone-500 hover:text-amber-400
                               uppercase transition-colors duration-300 flex items-center gap-3 group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-amber-500 transition-all duration-300" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.35em] text-amber-600 uppercase mb-6">Connect</p>
            <ul className="flex flex-col gap-5">
              {socials.map(({ name, handle, href }) => (
                <li key={name}>
                  <a href={href}
                     className="group flex items-center gap-4 text-stone-500 hover:text-amber-400 transition-colors duration-300">
                    <div className="w-8 h-8 rounded-full glass-card flex items-center justify-center
                                    group-hover:border-amber-600/40 transition-colors duration-300">
                      <span className="font-mono text-[8px]">{name[0]}</span>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] tracking-widest uppercase text-stone-600">{name}</p>
                      <p className="font-mono text-[11px] text-stone-400 group-hover:text-amber-400
                                    transition-colors duration-300">{handle}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[9px] tracking-widest text-stone-700 uppercase">
            © 2024 The Perch Cafe · All rights reserved
          </p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Cookies'].map(l => (
              <a key={l} href="#"
                 className="font-mono text-[9px] tracking-widest text-stone-700 hover:text-amber-600
                            uppercase transition-colors duration-300">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
