import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050608',
          900: '#0a0c0f',
          800: '#101317',
          700: '#171b21',
          600: '#20262e',
          500: '#2c333d',
        },
        steel: {
          400: '#8b94a0',
          300: '#a9b2be',
          200: '#c8cfd8',
          100: '#e6eaef',
        },
        accent: {
          DEFAULT: '#d94f2a',
          soft: '#e8724f',
          glow: 'rgba(217, 79, 42, 0.35)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        ultra: '0.35em',
        mega: '0.5em',
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
        power: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
