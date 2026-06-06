import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0B1120',
          card: '#111827',
          line: '#1F2937',
          blue: '#3B82F6',
          cyan: '#06B6D4'
        }
      }
    }
  },
  plugins: []
}
export default config
