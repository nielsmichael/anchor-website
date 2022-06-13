const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{html,js,ts,tsx,jsx}", 
    "./components/**/*.{html,js,ts,tsx,jsx}"
  ],
  theme: {
    fontFamily: {
	'serif': ['Libre Bodoni', ...defaultTheme.fontFamily.serif],
	},
    extend: {
      height: {
        'half-screen': '50vh'
      }
    }
  },
  plugins: []
}
