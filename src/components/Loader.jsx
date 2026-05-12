import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            onComplete?.();
          }, 400);
          return 100;
        }
        return p + Math.random() * 4 + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0d0d0d]"
        >
          {/* Ambient radial */}
          <div className="absolute inset-0 bg-radial-amber opacity-30 pointer-events-none" />

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <p className="font-mono text-[10px] tracking-[0.4em] text-amber-600 mb-4 uppercase">Est. 2024</p>
            <h1 className="font-display text-5xl md:text-7xl font-light text-gradient tracking-widest uppercase">
              The Perch
            </h1>
            <div className="ornament-divider mt-2">
              <span className="font-mono text-[9px] text-amber-700 tracking-[0.3em] uppercase">Cafe</span>
            </div>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 relative">
            <div className="h-px bg-white/10 w-full" />
            <motion.div
              className="absolute inset-y-0 left-0 h-px bg-gradient-to-r from-amber-600 to-amber-400"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <p className="font-mono text-[10px] text-amber-700/50 mt-4 tracking-widest">
            {Math.min(Math.round(progress), 100)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
