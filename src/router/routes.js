import Layout from '@/layout/index.vue'

/**
 * 静态路由，即无需登录即可访问的路由
 */
export const constantRoutes = [
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/views/login/index.vue'),
		meta: {
			title: '登录',
			hidden: true,
		},
	},
	{
		path: '/404',
		name: '404',
		component: () => import('@/views/404.vue'),
		meta: {
			title: '404',
			hidden: true,
		},
	},
	{
		path: '/',
		name: 'Layout',
		component: Layout,
		redirect: '/dashboard',
		children: [
			{
				path: 'dashboard',
				name: 'Dashboard',
				component: () => import('@/views/dashboard/index.vue'),
				meta: {
					title: '首页',
				},
			},
		],
	},
]

/**
 * 动态路由，即需要登录后才能访问的路由
 */
export const dynamicRoutes = []
