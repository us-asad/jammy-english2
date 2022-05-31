module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/*.{js,jsx}",
    "./containers/*.{js,jsx}",
    "./subcomponents/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    color: {
      "white-color": "#fff",
      "black-color": "#000"
    },
    extend: {
      colors: {
        "main": "#525FE1",
        "light": "#fff",
        "dark": "#000"
      },
      typography: {
        DEFAULT: {
          css: {
            pre: null
          },
        },
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
