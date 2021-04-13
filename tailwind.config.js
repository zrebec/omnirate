module.exports = {
  purge: {
    enabled: false,
    content: [
      './dist/**/*.html',
      './src/**/*.js'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        xxs: '17rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
