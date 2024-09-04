const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				red: {
					100: '#edd0d6',
					200: '#dba1ad',
					300: '#c97184',
					400: '#b7425b',
					500: '#a51332',
					600: '#840f28',
					700: '#630b1e',
					800: '#420814',
					900: '#21040a'
				}
			}
		}
	},
	plugins: [
		plugin(function extend({ addVariant }) {
			addVariant('from-second', '&:nth-child(n+2)')
		})
	]
}
