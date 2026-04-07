/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Primary accent - strategic orange */
        primary: '#ff9062',
        'primary-dim': '#fe5f00',

        /* Neutrals - refined grayscale */
        'surface': '#0e0e0e',
        'surface-subtle': '#0f0f0f',
        'surface-container': '#1a1919',
        'surface-container-low': '#131313',
        'surface-container-high': '#201f1f',
        'surface-container-highest': '#262626',
        'text-primary': '#ffffff',
        'text-secondary': '#d0cdcd',
        'text-tertiary': '#adaaaa',
        'border-soft': '#2a2a2a',
        'border-softer': 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        display: ['Instrument Serif', 'Georgia', 'serif'],
        body: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      spacing: {
        /* 8px modular scale */
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '2.5rem',
        '3xl': '3rem',
        '4xl': '4rem',
        '5xl': '5rem',
        '6xl': '6rem',
      },
      borderRadius: {
        none: '0',
        sm: '0.375rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-subtle': {
          '0%': { transform: 'scale(0.98)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'scale-subtle': 'scale-subtle 0.4s ease-out',
      },
    },
  },
  plugins: [],
};
