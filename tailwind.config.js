/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#9333ea', // purple-600
          dark: '#7e22ce',    // purple-700
          light: '#a855f7',   // purple-500
        },
        dark: {
          DEFAULT: '#03000a',
          card: '#0b0217',
          border: '#1e0836',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      animation: {
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'spin-slow': 'spin-forward 40s linear infinite',
        'spin-slow-reverse': 'spin-backward 40s linear infinite',
        'spin-slower': 'spin-forward 60s linear infinite',
        'spin-slower-reverse': 'spin-backward 60s linear infinite',
      },
      keyframes: {
        'spin-forward': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-backward': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
      }
    },
  },
  plugins: [],
}
