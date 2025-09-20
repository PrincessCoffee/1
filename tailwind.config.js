/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#2d5a5a',
        'brand-gold': '#d4af37',
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'lato': ['Lato', 'sans-serif'],
        'tajawal': ['Tajawal', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'card-entry': 'fadeInUp 1s ease-out forwards',
        'pulse-glow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translate3d(0, 40px, 0)' },
          'to': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        pulse: {
          '0%, 100%': { 'box-shadow': '0 0 15px rgba(224, 179, 99, 0.4)' },
          '50%': { 'box-shadow': '0 0 25px rgba(224, 179, 99, 0.8)' },
        }
      }
    },
  },
  plugins: [],
}