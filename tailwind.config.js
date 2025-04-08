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
        'primary-dark-dark': '#002341',
        'primary-blue': '#1971D8',
        'primary-positive': '#00873D',
        'gray': '#5C5E60',
        'gray-200':'#DBDEE0'
      },
    },
  },
  plugins: [],
}