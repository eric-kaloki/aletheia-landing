/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        charcoal: {
          900: '#050608',
          800: '#0F1115',
          700: '#131720',
        },
        brandCyan: {
          DEFAULT: '#00BFA5',
          glow: 'rgba(0, 191, 165, 0.4)',
        },
        brandRed: {
          DEFAULT: '#FF5252',
          glow: 'rgba(255, 82, 82, 0.4)',
        }
      },
      boxShadow: {
        'cyan-glow': '0 0 20px rgba(0, 191, 165, 0.25)',
        'cyan-glow-intense': '0 0 40px rgba(0, 191, 165, 0.5)',
        'red-glow': '0 0 20px rgba(255, 82, 82, 0.25)',
      }
    },
  },
  plugins: [],
}
