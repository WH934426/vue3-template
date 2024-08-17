import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoutes, dynamicRoutes } from './routes'

const router = createRouter({
	history: createWebHashHistory(),
	routes: constantRoutes,
	scrollBehavior(savedPosition) {
		return savedPosition || { top: 0 }
	},
})

/**
 * 动态添加路由到 Layout 的 children 数组中
 */
export const addDynamicRoutesToLayout = () => {
	// 获取 Layout 路由
	const layoutRoute = router.getRoutes().find((route) => route.name === 'Layout')

	if (layoutRoute && layoutRoute.children) {
		// 将动态路由添加到 Layout 的 children 数组中
		layoutRoute.children.push(...dynamicRoutes)
	}
}

addDynamicRoutesToLayout()

/**
 * 添加任意路由
 * @param {*} routerInstance 路由实例
 * @returns 新的路由实例
 */
export const addAnyRoute = async (routerInstance) => {
	const newRouter = createRouter({
		history: createWebHashHistory(),
		routes: routerInstance.options.routes,
	})
	// 添加任意路由作为兜底
	newRouter.addRoute({
		path: '/:pathMatch(.*)*',
		redirect: '/404',
	})
	return newRouter
}

export default router
