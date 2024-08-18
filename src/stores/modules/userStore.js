import { defineStore } from 'pinia'
import { getToken } from '@/utils/auth'

export const useUserStore = defineStore('user', {
	state: () => ({
		token: getToken() || '',
		userinfo: {},
	}),
	actions: {
		Login() {},
		Logout() {},
		getUserinfo() {},
		removeUserinfo() {},
	},
	getters: {
		hasToken: (state) => state.token,
		userId: (state) => state.userinfo.userId,
		name: (state) => state.userinfo.name,
	},
})
