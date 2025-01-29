/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0d9488', // Teal for main accents
        dark: '#1e293b', // Dark background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Clean font
      },
    },
  },
  plugins: [],
};
