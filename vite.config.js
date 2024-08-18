import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
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
		createSvgIconsPlugin({
			iconDirs: [resolve(process.cwd(), 'src/icons/svg')],
			symbolId: 'icon-[dir]-[name]',
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
})
