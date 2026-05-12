/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        perch: {
          gold:    '#c8922a',
          ember:   '#e07b39',
          smoke:   '#1a1a1a',
          onyx:    '#0d0d0d',
          charcoal:'#1e1e1e',
          fog:     'rgba(255,180,60,0.04)',
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans:    ['"Inter"', 'sans-serif'],
        mono:    ['"DM Mono"', 'monospace'],
      },
      animation: {
        'float':       'float 8s ease-in-out infinite',
        'pulse-glow':  'pulseGlow 3s ease-in-out infinite',
        'grain':       'grain 0.5s steps(1) infinite',
        'slide-up':    'slideUp 1s ease forwards',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%':     { transform: 'translateY(-20px) translateX(10px)' },
          '66%':     { transform: 'translateY(10px) translateX(-10px)' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%':     { opacity: '1',   transform: 'scale(1.05)' },
        },
        grain: {
          '0%,100%': { transform: 'translate(0,0)' },
          '10%':     { transform: 'translate(-5%,-10%)' },
          '20%':     { transform: 'translate(-15%,5%)' },
          '30%':     { transform: 'translate(7%,-25%)' },
          '40%':     { transform: 'translate(-5%,25%)' },
          '50%':     { transform: 'translate(-15%,10%)' },
          '60%':     { transform: 'translate(15%,0%)' },
          '70%':     { transform: 'translate(0%,15%)' },
          '80%':     { transform: 'translate(3%,35%)' },
          '90%':     { transform: 'translate(-10%,10%)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        }
      },
      backgroundImage: {
        'radial-amber': 'radial-gradient(ellipse at center, rgba(200,146,42,0.15) 0%, transparent 70%)',
        'vignette':     'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.85) 100%)',
      },
    },
  },
  plugins: [],
}
