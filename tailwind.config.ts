import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--poke-primary)',
        secondary: 'var(--poke-secondary)',
        background: 'var(--poke-background)',
        dark: 'var(--poke-dark)',
        light: 'var(--poke-light)',
        medium: 'var(--poke-medium)',
        white: 'var(--poke-white)',
        wireframe: 'var(--poke-wireframe)',
      },
      fontFamily: {
        poppins: ['Poppins', 'Helvetica'],
      },
    },
  },
  plugins: [],
};
export default config;
