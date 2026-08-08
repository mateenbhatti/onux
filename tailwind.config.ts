import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — white dominant, green & gold used very sparingly.
        white: '#FFFFFF',
        charcoal: {
          DEFAULT: '#171717',
          soft: '#3a3a38',
          muted: '#6b6b66',
        },
        rice: {
          green: '#4F6F3A',
          'green-soft': '#6b8a54',
        },
        gold: {
          DEFAULT: '#C8A951',
          soft: '#d8bd73',
          deep: '#a5883b',
        },
        ivory: '#F7F6F1',
        line: '#e9e7df',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        ultra: '0.32em',
        mega: '0.45em',
      },
      maxWidth: {
        edge: '1360px',
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
