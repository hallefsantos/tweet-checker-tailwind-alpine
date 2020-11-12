const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
      }
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
    cursor: ['responsive', 'hover', 'focus', 'disabled'],
  },
  plugins: [],
}
