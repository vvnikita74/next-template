/* eslint-disable import/no-anonymous-default-export */
import {
	fixupConfigRules,
	fixupPluginRules
} from '@eslint/compat'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import prettier from 'eslint-plugin-prettier'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
})

export default [
	{
		ignores: ['!src/**/*']
	},
	...fixupConfigRules(
		compat.extends(
			'next/core-web-vitals',
			'plugin:react/recommended',
			'plugin:react-hooks/recommended',
			'plugin:prettier/recommended'
		)
	),
	{
		plugins: {
			react: fixupPluginRules(react),
			'react-hooks': fixupPluginRules(reactHooks),
			prettier: fixupPluginRules(prettier)
		},

		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			},

			ecmaVersion: 'latest',
			sourceType: 'module',

			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			}
		},

		settings: {
			react: {
				version: '19'
			}
		},

		rules: {
			'import/no-anonymous-default-export': [
				'error',
				{
					allowArray: true,
					allowArrowFunction: false,
					allowAnonymousClass: false,
					allowAnonymousFunction: false,
					allowCallExpression: true,
					allowNew: false,
					allowLiteral: false,
					allowObject: true
				}
			],

			'react/react-in-jsx-scope': 'off',
			'react/jsx-uses-react': 'off',
			'react/prop-types': 'off',
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',

			'react/self-closing-comp': [
				'error',
				{
					component: true,
					html: true
				}
			],

			'prettier/prettier': [
				'warn',
				{
					tabWidth: 2,
					useTabs: true,
					semi: false,
					jsxSingleQuote: true,
					singleQuote: true,
					arrowParens: 'avoid',
					trailingComma: 'none',
					endOfLine: 'auto',
					jsxBracketSameLine: true,
					bracketSpacing: true,
					bracketSameLine: false,
					printWidth: 65,
					plugins: ['prettier-plugin-tailwindcss']
				}
			]
		}
	},
	{
		files: ['src/**/*.{js,jsx,ts,tsx}'],
		ignores: ['**/*.config.js']
	}
]
