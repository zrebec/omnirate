module.exports = {
  purge: {
    enabled: true,
    content: [
      './dist/**/*.html',
      './src/**/*.js'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        xxs: '18rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
