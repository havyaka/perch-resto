import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Reserve() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm]       = useState({ name: '', email: '', date: '', time: '', guests: '2', note: '' });
  const [submitted, setSubmit] = useState(false);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); setSubmit(true); };

  const inputClass = `w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3
    font-mono text-sm text-stone-300 placeholder-stone-600 outline-none
    focus:border-amber-600/50 focus:shadow-[0_0_20px_rgba(200,146,42,0.1)]
    transition-all duration-300`;

  return (
    <section id="reserve" className="relative bg-[#0f0f0f] section-padding overflow-hidden">

      {/* Ambient glow */}
      <div className="ambient-glow w-[800px] h-[600px] bg-amber-900/15 left-1/2 top-1/2
                      -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Background elegant gradient */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_bottom_left,rgba(200,146,42,0.15)_0,transparent_80%)]" />

      <div ref={ref} className="relative max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="font-mono text-[10px] tracking-[0.4em] text-amber-600 uppercase mb-4"
          >
            Come Visit Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl font-light text-stone-100"
          >
            Reserve Your{' '}
            <span className="text-gradient italic">Perch</span>
          </motion.h2>
          <div className="ornament-divider max-w-xs mx-auto mt-4">
            <span className="font-mono text-[8px] text-amber-700 tracking-widest uppercase">Reservations</span>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-stone-500 font-light mt-4 max-w-md mx-auto text-sm"
          >
            Secure your spot above the city. We'll send a confirmation within 2 hours.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-2 flex flex-col gap-5"
          >
            {[
              { icon: '⏰', title: 'Hours', lines: ['Mon–Fri: 8AM – 11PM', 'Sat–Sun: 9AM – Midnight'] },
              { icon: '📍', title: 'Location', lines: ['3rd Floor, Skyline Block', 'Koramangala, Bengaluru'] },
              { icon: '📞', title: 'Phone', lines: ['+91 98765 43210', 'reservations@theperchcafe.in'] },
            ].map(({ icon, title, lines }) => (
              <div key={title} className="glass-card p-5 flex gap-4 items-start">
                <span className="text-2xl">{icon}</span>
                <div>
                  <p className="font-mono text-[10px] tracking-widest text-amber-500 uppercase mb-2">{title}</p>
                  {lines.map(l => (
                    <p key={l} className="text-stone-400 text-sm font-light">{l}</p>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-3 glass-card p-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-amber-700/20 border border-amber-600/30
                                flex items-center justify-center mx-auto mb-6 text-3xl">
                  ✓
                </div>
                <h3 className="font-display text-3xl text-gradient mb-3">Reservation Received</h3>
                <p className="text-stone-500 text-sm font-light">
                  We'll confirm your table shortly. See you above the noise.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[9px] tracking-widest text-stone-500 uppercase block mb-2">Name</label>
                    <input name="name" value={form.name} onChange={handleChange}
                      placeholder="Your full name" required className={inputClass} />
                  </div>
                  <div>
                    <label className="font-mono text-[9px] tracking-widest text-stone-500 uppercase block mb-2">Email</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange}
                      placeholder="you@email.com" required className={inputClass} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="font-mono text-[9px] tracking-widest text-stone-500 uppercase block mb-2">Date</label>
                    <input name="date" type="date" value={form.date} onChange={handleChange}
                      required className={inputClass} />
                  </div>
                  <div>
                    <label className="font-mono text-[9px] tracking-widest text-stone-500 uppercase block mb-2">Time</label>
                    <select name="time" value={form.time} onChange={handleChange}
                      required className={inputClass}>
                      <option value="">Select</option>
                      {['8:00 AM','10:00 AM','12:00 PM','2:00 PM','4:00 PM','6:00 PM','8:00 PM','10:00 PM'].map(t => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-mono text-[9px] tracking-widest text-stone-500 uppercase block mb-2">Guests</label>
                    <select name="guests" value={form.guests} onChange={handleChange}
                      className={inputClass}>
                      {[1,2,3,4,5,6,'7+'].map(n => <option key={n}>{n}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="font-mono text-[9px] tracking-widest text-stone-500 uppercase block mb-2">
                    Special Requests <span className="text-stone-700">(optional)</span>
                  </label>
                  <textarea name="note" value={form.note} onChange={handleChange}
                    rows={3} placeholder="Anniversary, dietary needs, occasion..."
                    className={inputClass + ' resize-none'} />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="group relative mt-2 w-full py-4 bg-gradient-to-r from-amber-900/40 to-amber-700/40
                             backdrop-blur-md border border-amber-500/30 overflow-hidden
                             text-amber-100 font-mono text-[11px] tracking-[0.3em] uppercase
                             hover:border-amber-400/60 hover:shadow-[0_0_30px_rgba(200,146,42,0.4)]
                             transition-all duration-500 rounded-sm flex justify-center items-center gap-3"
                >
                  <span className="relative z-10">Confirm Reservation</span>
                  <span className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600/0 via-amber-500/20 to-amber-600/0 
                                  -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
