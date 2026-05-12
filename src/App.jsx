import { useState, useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';

import Loader       from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar       from './components/Navbar';
import Hero         from './components/Hero';

// Lazy loaded components for below the fold
const About   = lazy(() => import('./components/About'));
const Menu    = lazy(() => import('./components/Menu'));
const Gallery = lazy(() => import('./components/Gallery'));
const Reserve = lazy(() => import('./components/Reserve'));
const Footer  = lazy(() => import('./components/Footer'));

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="film-grain bg-[#0d0d0d]">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Loading screen */}
      <Loader onComplete={() => setLoaded(true)} />

      {/* Page content — mounts immediately but fades in after loader */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className={`relative ${!loaded ? 'pointer-events-none' : ''}`}
      >
        <Navbar />
        <main>
          <Hero loaded={loaded} />
          {loaded && (
            <Suspense fallback={<div className="h-32 bg-[#0d0d0d]" />}>
              <About />
              <Menu />
              <Gallery />
              <Reserve />
            </Suspense>
          )}
        </main>
        {loaded && (
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        )}
      </motion.div>
    </div>
  );
}
