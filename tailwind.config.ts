import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      colors: {
        gold: 'var(--color-gold)',
        cream: 'var(--color-cream)',
      },
      fontFamily: {
        serif: 'var(--font-serif)',
      },
    },
  },
  plugins: [],
};

export default config;
