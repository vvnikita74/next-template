const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {},
	},
	plugins: [
		plugin(function ({ addVariant }) {
			addVariant('from-second', '&:nth-child(n+2)')
			addVariant('from-third', '&:nth-child(n+3)')
			addVariant('from-fourth', '&:nth-child(n+4)')
			addVariant('second-col-el', '&:nth-child(3n+2)')
		})
	]
}
