/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dosis': ['Dosis'],
        'esteban': ['Esteban']
      },
      colors: {
        'kuning': '#FFDC00',
        'cokelat': '#473400',
        'hijauMuda': '#F2FEDC',
        'hijauTua': '#006E5E'
      },
      dropShadow: {
        'title': '0 35px 35px rgba(0, 0, 0, 0.60)'
      }
    }
  },
  plugins: [],
}