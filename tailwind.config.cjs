/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html"
  ],
  theme: {
    extend: {
      boxShadow: {
        'default': '0 35px 60px -15px white'
      }
    },
  },
  plugins: [],
}
