module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb-base',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint',
		'unicorn',
	],
	rules: {
		'max-len': [1, 140],
		'linebreak-style': 0,
		'no-multiple-empty-lines': [1, { max: 2 }],
		indent: [1, 'tab'],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'unicorn/prefer-add-event-listener': [
			'error', {
				excludedPackages: [
					'koa',
					'sax',
				],
			},
		],
		'no-undef': [0],
		'lines-between-class-members': [1, 'always', { exceptAfterSingleLine: true }],
	},
};
