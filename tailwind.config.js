/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        // Blueprint palette. These map to the CSS variables in index.css so
        // utilities like `hover:text-accent` follow the active theme instead of
        // pinning the light-mode value.
        accent: 'var(--bp-accent)',
        ink: {
          DEFAULT: 'var(--bp-ink)',
          soft: 'var(--bp-ink-soft)',
          muted: 'var(--bp-ink-muted)',
        },
        paper: {
          DEFAULT: 'var(--bp-paper)',
          raised: 'var(--bp-raised)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
