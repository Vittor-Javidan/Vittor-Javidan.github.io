const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './components_Browser/**/*.{js,ts,jsx,tsx}',
    './components_Mobile/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'md': '601px',
      'lg': '1101px'
    },
    fontFamily: {
      'Roboto': "'Roboto', sans-serif"
    },
    extend: {},
  },
  plugins: [
    plugin(function({ addBase }) {
     addBase({
        'html': { fontSize: "10px" },
      })
    }),
  ]
}
