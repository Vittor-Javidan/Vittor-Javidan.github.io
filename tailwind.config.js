const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'md': '601px',
      'lg': '1101px'
    },
    boxShadow: {
      'custom': '7px 7px 50px rgb(2, 4, 24)',
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
