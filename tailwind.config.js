const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
      },
      fontFamily: {
        'display': ['gilroy-extrabold', ...defaultTheme.fontFamily.sans],
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ]
}