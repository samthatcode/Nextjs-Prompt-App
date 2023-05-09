/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'Sans-Serif'],
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        'primary-orange': '#ff5722',
      }
    },
  },
  plugins: [],
}
