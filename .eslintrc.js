export default [
	{ parser: '@typescript-eslint/parser' },
	{
		extends: [
			'airbnb',
			'airbnb/hooks',
			'plugin:react/recommended',
			'plugin:jsx-a11y/recommended',
			'plugin:import/errors',
			'plugin:import/warnings',
			'plugin:prettier/recommended',
			'plugin:tailwindcss/recommended',
			'next/core-web-vitals'
		]
	},
	{
		plugins: ['react', 'jsx-a11y', 'import', 'prettier', 'tailwindcss', 'unicorn']
	},
	{
		parserOptions: {
			ecmaFeatures: {
				jsx: true
			}
		}
	},
	{
		rules: {
			'prettier/prettier': ['error', { endOfLine: 'auto' }],
			'react/react-in-jsx-scope': 'off',
			'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
			'tailwindcss/classnames-order': 'warn'
		}
	},
	{
		settings: {
			react: {
				version: 'detect'
			},
			'import/resolver': {
				typescript: {}
			}
		}
	}
]
