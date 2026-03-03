// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a5f',
        'primary-light': '#2b4c7c',
        'primary-dark': '#0f2a44',
        secondary: '#8b6b4d',
        'secondary-light': '#b0916f',
        accent: '#c49a6c',
        'accent-light': '#d4b08c',
        'bg-light': '#faf7f2',
        'bg-dark': '#1a1e24',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        inter: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}

export default config