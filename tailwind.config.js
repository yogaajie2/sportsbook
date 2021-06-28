module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        '6': '6px'
      },

      flex: {
        '2': '2 1 0%'
      },

      boxShadow: {
        't-lg': '0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)'
      }
    },

    colors: {
      'alabaster': '#fbfbfb',
      'boulder': '#7c7c7c',
      'chathams-blue': '#184c8b',
      'dodger-blue': '#2699fb',
      'rhino': '#26304C',
      'white': '#fff',
      'wild-sand': '#f5f5f5',
      'zircon': '#f6faff'
    }
  },
  variants: {
    extend: {
      outline: ['focus-visible']
    },
  },
  plugins: [],
}
