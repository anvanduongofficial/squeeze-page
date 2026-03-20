import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:         '#0d0a1a',
        surface:    '#160f2e',
        surface2:   '#1e1540',
        purple:     '#7c3aed',
        purpleLt:   '#a855f7',
        gold:       '#e9b96e',
        textBase:   '#f0eafb',
        textMuted:  '#9d8fbf',
        greenAlt:   '#4ade80',
      },
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        mono:     ['DM Mono', 'monospace'],
        manrope:  ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
