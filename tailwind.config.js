module.exports = {
  purge: {
    enabled: false,
    content: [
      './dist/**/*.html',
      './src/**/*.js'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [],
}
