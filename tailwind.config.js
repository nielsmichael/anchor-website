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
      colors: {
	'anchor-blue': '#0567b7',
	'anchor-black': '#404756',
	'anchor-white': '#F5F9FF',
      },
      height: {
        'half-screen': '50vh'
      }
    }
  },
  plugins: []
}
