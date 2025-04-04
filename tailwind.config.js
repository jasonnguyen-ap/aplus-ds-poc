/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './projects/components/src/**/*.{html,ts}',
    './**/*.{html,ts}'
  ],
  theme: {
    fontFamily: {
      'sans': ['Roboto', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        'primary-blue': '#1971D8',
        'primary-positive': '#00873D',
      },
    },
  },
  plugins: [],
}