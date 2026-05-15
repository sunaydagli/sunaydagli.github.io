/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rasa', 'Georgia', 'serif'],
        display: ['"Barlow Condensed"', 'system-ui', 'sans-serif'],
        heading: ['"Barlow Condensed"', 'system-ui', 'sans-serif'],
        barlow: ['Barlow', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        body: '300',
      },
      fontSize: {
        xs: ['0.875rem', { lineHeight: '1.2rem' }],
        sm: ['1rem', { lineHeight: '1.45rem' }],
        base: ['1.125rem', { lineHeight: '1.7rem' }],
        lg: ['1.25rem', { lineHeight: '1.9rem' }],
        xl: ['1.375rem', { lineHeight: '1.9rem' }],
        '2xl': ['1.75rem', { lineHeight: '2.25rem' }],
        '3xl': ['2.125rem', { lineHeight: '2.5rem' }],
        '4xl': ['2.5rem', { lineHeight: '2.75rem' }],
        '5xl': ['3.375rem', { lineHeight: '1' }],
        '6xl': ['4.25rem', { lineHeight: '1' }],
      },
      colors: {
        ink: {
          DEFAULT: '#000000',
          soft: '#0a0a0a',
          card: '#111111',
        },
        paper: '#ffffff',
        mist: '#D9E3DA',
        leaf: '#A7BEA9',
        surface: {
          950: '#000000',
          900: '#0a0a0a',
          850: '#111111',
          800: '#161616',
        },
        accent: {
          DEFAULT: '#A7BEA9',
          soft: '#D9E3DA',
          hover: '#95ab97',
        },
        muted: '#D9E3DA',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.92)), radial-gradient(ellipse 80% 50% at 50% -20%, rgba(167,190,169,0.08), transparent)',
      },
      boxShadow: {
        lift: '0 12px 40px rgba(0, 0, 0, 0.45)',
        subtle: '0 1px 0 rgba(217, 227, 218, 0.06)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 18s ease-in-out infinite',
        drift: 'drift 22s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.03)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.98)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-60px, 40px)' },
        },
      },
    },
  },
  plugins: [],
};
