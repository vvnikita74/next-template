module.exports = {
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
	],
	plugins: ['react', 'jsx-a11y', 'import', 'prettier', 'tailwindcss', 'unicorn'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'react/react-in-jsx-scope': 'off',
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'tailwindcss/classnames-order': 'warn',
		'jsx-a11y/alt-text': [
			'error',
			{
				elements: ['img', 'object', 'area', 'input[type="image"]'],
				img: ['Image'],
				object: ['Object'],
				area: ['Area'],
				'input[type="image"]': ['InputImage']
			}
		]
	},
	settings: {
		react: {
			version: 'detect'
		},
		'import/resolver': {
			alias: {
				map: [['@', './src']],
				extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
			}
		}
	}
}

// TS
// module.exports = {
//   parser: '@typescript-eslint/parser',
//   extends: [
//     'airbnb',
//     'airbnb/hooks',
//     'plugin:react/recommended',
//     'plugin:jsx-a11y/recommended',
//     'plugin:import/errors',
//     'plugin:import/warnings',
//     'plugin:prettier/recommended',
//     'plugin:tailwindcss/recommended',
//     'next/core-web-vitals',
//     'plugin:@typescript-eslint/recommended'
//   ],
//   plugins: [
//     'react',
//     'jsx-a11y',
//     'import',
//     'prettier',
//     'tailwindcss',
//     'unicorn',
//     '@typescript-eslint'
//   ],
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true
//     }
//   },
//   rules: {
//     'prettier/prettier': ['error', { endOfLine: 'auto' }],
//     'react/react-in-jsx-scope': 'off',
//     'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
//     'tailwindcss/classnames-order': 'warn',
//     'jsx-a11y/alt-text': [
//       'error',
//       {
//         elements: ['img', 'object', 'area', 'input[type="image"]'],
//         img: ['Image'],
//         object: ['Object'],
//         area: ['Area'],
//         'input[type="image"]': ['InputImage']
//       }
//     ],
//     '@typescript-eslint/no-unused-vars': ['error']
//   },
//   settings: {
//     react: {
//       version: 'detect'
//     }
//   }
// };
