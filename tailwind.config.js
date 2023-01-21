const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      cursive: ['Sofia', ...defaultTheme.fontFamily.serif],
    },
    extend: {},
  },
  plugins: [require('daisyui')],
};
