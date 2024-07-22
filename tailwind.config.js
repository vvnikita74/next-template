const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {},
		screens: {
			'max-2xs': { max: '320px' },
			xs: '480px',
			...defaultTheme.screens
		}
	},
	plugins: []
}
