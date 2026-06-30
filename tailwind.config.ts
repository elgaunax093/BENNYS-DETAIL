import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: '#141414',
        'surface-light': '#1C1C1C',
        gold: '#C9A86A',
        'gold-light': '#E4CC9F',
        'gold-dark': '#8C7340',
        foreground: '#F5F3EF',
        muted: '#8A8A8A',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, #E4CC9F, #C9A86A)',
        'gold-gradient-b': 'linear-gradient(to bottom, #F5F3EF, #8A8A8A)',
      },
    },
  },
  plugins: [],
}

export default config
