import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from 'node:path'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default ({ command }) => {
	return {
		plugins: [
			vue(),
			vueJsx(),
			// 自动导入
			AutoImport({
				resolvers: [
					ElementPlusResolver(),
					IconsResolver({
						enabledCollections: ['ep'],
					}),
				],
				include: [
					/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
					/\.vue$/,
					/\.vue\?vue/, // .vue
				],
				imports: ['vue', 'vue-router'],
			}),
			// 自动导组件
			Components({
				resolvers: [
					ElementPlusResolver(),
					IconsResolver({
						enabledCollections: ['ep'],
					}),
				],
			}),
			// 自动导入icon
			Icons({
				autoInstall: true,
			}),
			// 生成svg-icon
			createSvgIconsPlugin({
				iconDirs: [resolve(process.cwd(), 'src/icons/svg')],
				symbolId: 'icon-[dir]-[name]',
			}),
			// mock服务
			viteMockServe({
				mockPath: 'mock',
				enable: true,
			}),
		],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
			},
		},
	}
}
