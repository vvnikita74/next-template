/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable import/no-extraneous-dependencies */

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
	plugins: []
}
