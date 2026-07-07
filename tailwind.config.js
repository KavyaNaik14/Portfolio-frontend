/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B1120',
          panel: '#111827',
          border: '#1E293B',
        },
        paper: {
          DEFAULT: '#F7F7F2',
          panel: '#FFFFFF',
          border: '#E5E1D8',
        },
        amber: {
          accent: '#F5B942',
          soft: '#FDE9BE',
        },
        teal: {
          accent: '#4FD1C5',
          soft: '#CFF4EF',
        },
        muted: '#94A3B8',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        blob: 'blob 12s infinite ease-in-out',
        blink: 'blink 1s step-start infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
