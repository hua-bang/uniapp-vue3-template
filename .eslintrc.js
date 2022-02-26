module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true
	},
	parserOptions: {
		parser: 'babel-eslint',
		sourceType: 'module'
	},
	parser: 'vue-eslint-parser',
	extends: [  
		'plugin:vue/recommended'
	],  
	rules: {   
		'indent': [2, 'tab'],
		'quotes': [1, 'single'],
		'semi': [2, 'always'],
		'no-empty': 2,
		'eqeqeq': 2,
		'max-depth': [0, 4],
		'max-len': [1, 120]
	}  
};