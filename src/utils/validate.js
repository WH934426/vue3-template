/**
 * 校验用户名
 * @param {*} username 用户名
 * @returns true or false
 */
export const validUsername = (username) => {
	const validUsernames = new Set(['admin', 'system'])
	return validUsernames.has(username.trim())
}
