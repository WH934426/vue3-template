module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [
			2,
			'always',
			[
				'build', // 编译相关修改
				'chore', // 其他修改
				'ci', // CI/CD相关修改
				'docs', // 文档修改
				'feat', // 新功能
				'fix', // 修复bug
				'perf', // 性能优化
				'refactor', // 重构
				'revert', // 回滚
				'style', // 样式修改
				'test', // 测试
			],
		],
		'type-case': [0],
		'type-empty': [0],
		'scope-empty': [0],
		'scope-case': [0],
		'subject-full-stop': [0, 'never'],
		'subject-case': [0, 'never'],
		'header-max-length': [0, 'always', 72],
	},
}
