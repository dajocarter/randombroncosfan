require('dotenv').config()
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.njk',
      './src/**/*.md'
    ]
  },
  theme: {
    extend: {
      colors: {
        original: {
          primary: 'var(--original--primary)',
          alt: 'var(--original--alt)'
        },
        classic: {
          primary: 'var(--classic--primary)',
          alt: 'var(--classic--alt)'
        },
        current: {
          primary: 'var(--current--primary)',
          alt: 'var(--current--alt)'
        }
      },
      textColor: {
        theme: 'var(--theme--color__text)'
      },
      backgroundColor: {
        theme: 'var(--theme--color__background)'
      }
    }
  },
  variants: {},
  plugins: []
}
