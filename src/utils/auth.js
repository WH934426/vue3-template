import Cookies from 'js-cookie'

// user token
const TOKEN_KEY = 'vue3_template_token'

export const getToken = () => Cookies.get(TOKEN_KEY)
export const setToken = (token) => Cookies.set(TOKEN_KEY, token)
export const removeToken = () => Cookies.remove(TOKEN_KEY)
