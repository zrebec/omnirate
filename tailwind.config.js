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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
