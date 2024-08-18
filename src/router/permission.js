import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })
// 白名单，不需要登录
const whiteList = ['/login', '/404']

/**
 * 全局前置守卫
 */
const beforeEachGuard = async (to, _, next) => {
	NProgress.start()
	const userStore = useUserStore()
	const hasToken = userStore.getters.hasToken
	if (hasToken) {
		if (to.path === '/login') {
			next({ path: '/' })
			NProgress.done()
		} else {
			const hasGetUserinfo = userStore.getters.name
			if (hasGetUserinfo) {
				next()
			} else {
				try {
					await userStore.getUserInfo()
					next()
				} catch (error) {
					await userStore.removeUserinfo()
					ElMessage.error(error || 'Has Error')
					next(`/login?redirect=${to.path}`)
					NProgress.done()
				}
			}
		}
	} else {
		// 无token
		if (whiteList.indexOf(to.path) !== -1) {
			next()
		} else {
			next(`/login?redirect=${to.path}`)
			NProgress.done()
		}
	}
}

/**
 * 添加路由守卫
 */
export const addRouteGuards = (router) => {
	// 添加全局前置守卫
	router.beforeEach(beforeEachGuard)
}
