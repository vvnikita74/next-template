const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {}
	},
	plugins: [
		plugin(function extend({ addVariant }) {
			addVariant('from-second', '&:nth-child(n+2)')
		})
	]
}
