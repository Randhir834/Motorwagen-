/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black:         '#050505',
          dark:          '#0D0D0D',
          card:          '#141414',
          'card-hover':  '#1C1C1C',
          border:        '#242424',
          'border-hover':'#3A3A3A',
          red:           '#C80000',
          'red-dark':    '#8C0000',
          'red-light':   '#E03030',
          'red-glow':    'rgba(200,0,0,0.15)',
          silver:        '#9CA3AF',
          'silver-light':'#D1D5DB',
          white:         '#F9FAFB',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
      },
      backgroundImage: {
        'gradient-red':    'linear-gradient(135deg, #C80000 0%, #E03030 50%, #8C0000 100%)',
        'gradient-red-h':  'linear-gradient(90deg,  #C80000 0%, #E03030 100%)',
        'gradient-dark':   'linear-gradient(180deg, #050505 0%, #141414 100%)',
        'gradient-glass':  'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
      },
      animation: {
        'fade-up':      'fadeUp 0.65s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':      'fadeIn 0.5s ease forwards',
        'slide-left':   'slideLeft 0.65s cubic-bezier(0.16,1,0.3,1) forwards',
        'slide-right':  'slideRight 0.65s cubic-bezier(0.16,1,0.3,1) forwards',
        'pulse-red':    'pulseRed 2.4s ease-in-out infinite',
        'float':        'float 4s ease-in-out infinite',
        'spin-slow':    'spin 8s linear infinite',
        'shimmer':      'shimmer 2s linear infinite',
        'line-grow':    'lineGrow 0.8s ease forwards',
        'count-up':     'fadeUp 0.5s ease forwards',
      },
      keyframes: {
        fadeUp:     { '0%': { opacity: '0', transform: 'translateY(28px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:     { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideLeft:  { '0%': { opacity: '0', transform: 'translateX(40px)' },  '100%': { opacity: '1', transform: 'translateX(0)' } },
        slideRight: { '0%': { opacity: '0', transform: 'translateX(-40px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        pulseRed:   { '0%,100%': { boxShadow: '0 0 0 0 rgba(200,0,0,0.5)' }, '50%': { boxShadow: '0 0 0 16px rgba(200,0,0,0)' } },
        float:      { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-10px)' } },
        shimmer:    { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        lineGrow:   { '0%': { width: '0' }, '100%': { width: '4rem' } },
      },
      boxShadow: {
        'red-xs': '0 0 8px rgba(200,0,0,0.25)',
        'red-sm': '0 0 16px rgba(200,0,0,0.35)',
        'red-md': '0 0 28px rgba(200,0,0,0.45)',
        'red-lg': '0 0 48px rgba(200,0,0,0.55)',
        'card':   '0 8px 32px rgba(0,0,0,0.6)',
        'card-lg':'0 20px 60px rgba(0,0,0,0.7)',
        'inner-red': 'inset 0 0 20px rgba(200,0,0,0.08)',
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        'xxs': '320px',
        'xs': '480px',
        '3xl': '1920px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
