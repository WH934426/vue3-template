import request from '@/utils/request'

/**
 * 登录请求
 * @param {*} data 用户名与密码
 * @returns AxiosResponse
 */
export const userLoginAPI = (data) => request.post('/user/login', data)
