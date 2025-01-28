/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

const config = {
	theme: {
		extend: {
			screens: {
				'2xs': '360px',
				xs: '480px',
				...defaultTheme.screens
			}
		}
	},
	plugins: []
}

export default config
