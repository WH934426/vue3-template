import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

// https://eslint.org/docs/latest/use/getting-started
export default [
	// 校验文件
	{
		files: ['**/*.{js,jsx,mjs,cjs,vue}'],
	},
	{
		languageOptions: {
			// 指定在代码检查期间应添加到全局作用域的其他对象的对象。
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2021,
			},
		},
	},
	// 共享插件
	pluginJs.configs.recommended,
	...pluginVue.configs['flat/essential'],
	eslintConfigPrettier,
	eslintPluginPrettierRecommended,
	// 忽略文件
	{
		ignores: ['src/assets', 'public', 'dist'],
	},
	// 规则
	{
		rules: {
			'prettier/prettier': 'error',
			// https://eslint.vuejs.org/rules/
			'vue/max-attributes-per-line': [
				'error',
				{
					singleline: 10,
					multiline: {
						max: 1,
					},
				},
			],
			'vue/component-definition-name-casing': ['error', 'PascalCase'],
			'vue/no-v-html': 'error',
			'vue/multi-word-component-names': 'off',
			// https://eslint.org/docs/latest/rules/
			'accessor-pairs': 0,
			camelcase: [0, { properties: 'always' }],
			'constructor-super': 2,
			curly: [2, 'multi-line'],
			eqeqeq: [2, 'always', { null: 'ignore' }],
			'new-cap': [2, { newIsCap: true, capIsNew: false }],
			'no-array-constructor': 2,
			'no-caller': 2,
			'no-console': 0,
			'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
			'no-class-assign': 2,
			'no-cond-assign': 2,
			'no-const-assign': 2,
			'no-control-regex': 0,
			'no-delete-var': 2,
			'no-dupe-args': 2,
			'no-dupe-class-members': 2,
			'no-dupe-keys': 2,
			'no-duplicate-case': 2,
			'no-empty-character-class': 2,
			'no-empty-pattern': 2,
			'no-eval': 'error',
			'no-ex-assign': 'error',
			'no-extend-native': 2,
			'no-extra-bind': 2,
			'no-extra-boolean-cast': 2,
			'no-fallthrough': 2,
			'no-func-assign': 2,
			'no-implied-eval': 2,
			'no-inner-declarations': [2, 'functions'],
			'no-invalid-regexp': 2,
			'no-irregular-whitespace': 2,
			'no-iterator': 2,
			'no-label-var': 2,
			'no-labels': [2, { allowLoop: false, allowSwitch: false }],
			'no-lone-blocks': 2,
			'no-multi-str': 2,
			'no-new-wrappers': 2,
			'no-obj-calls': 2,
			'no-octal': 2,
			'no-octal-escape': 2,
			'no-proto': 2,
			'no-redeclare': 2,
			'no-regex-spaces': 2,
			'no-return-assign': [2, 'except-parens'],
			'no-self-assign': 2,
			'no-self-compare': 2,
			'no-sequences': 2,
			'no-shadow-restricted-names': 2,
			'no-sparse-arrays': 2,
			'no-this-before-super': 2,
			'no-throw-literal': 2,
			'no-undef': 0, // auto-import
			'no-undef-init': 2,
			'no-unexpected-multiline': 2,
			'no-unmodified-loop-condition': 2,
			'no-unneeded-ternary': [2, { defaultAssignment: false }],
			'no-unreachable': 2,
			'no-unsafe-finally': 2,
			'no-unused-vars': [2, { vars: 'all', args: 'none' }],
			'no-useless-call': 2,
			'no-useless-computed-key': 2,
			'no-useless-constructor': 2,
			'no-useless-escape': 2,
			'no-with': 2,
			'one-var': [2, { initialized: 'never' }],
			'use-isnan': 2,
			'valid-typeof': 2,
			yoda: [2, 'never'],
			'prefer-const': 2,
		},
	},
]
