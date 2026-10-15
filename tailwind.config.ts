import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  // Preflight is off: the Ayla design-system tokens/CSS own the base styles.
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: { sky: '#99d1dc', aqua: '#3ab0c8', ayla: '#007cba', deep: '#005f9b', slate: '#98a3ad' },
      fontFamily: { sans: ['"F37 Ginger"', 'Urbanist', 'system-ui', 'sans-serif'], serif: ['"Meno Banner"', '"Cormorant Garamond"', 'Georgia', 'serif'] },
    },
  },
}
export default config
