/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 👈 SHU YERDA BO'LISHI SHART, 'theme' ichida emas!
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0EA5E9',
        secondary: '#06B6D4',
        accent: '#F97316',
        dark: '#0F172A',
        light: '#F8FAFC',
      },
    },
  },
  plugins: [],
}