import { defineStore } from 'pinia'
import { getToken, setToken } from '@/utils/auth'
import { userLoginAPI } from '@/api/user'

export const useUserStore = defineStore('user', {
	state: () => ({
		token: getToken() || '',
		userinfo: {},
	}),
	actions: {
		async Login(data) {
			// 登录
			const res = await userLoginAPI(data)
			console.log(res)
			this.token = res.data.token
			setToken(res.data.token)
		},
		Logout() {},
		getUserinfo() {},
	},
	getters: {
		hasToken: (state) => state.token,
		userId: (state) => state.userinfo.userId,
		name: (state) => state.userinfo.name,
	},
})
