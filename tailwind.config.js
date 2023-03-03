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
      'custom': '7px 7px 30px 10px',
      'customToggle': '0px 0px 10px 1px'
    },
    borderRadius: {
      'toggleClosed': '50%',
      'toggleOpen': '5px 50% 50% 5px',
      'navItemSidebarOpen': '10px 40px 40px 10px'
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
