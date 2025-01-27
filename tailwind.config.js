/* eslint-disable import/no-anonymous-default-export */

/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			screens: {
				'2xs': '360px',
				xs: '480px',
				...defaultTheme.screens
			}
		}
	},
	corePlugins: {
		container: false
	},
	plugins: []
}
