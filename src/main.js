import 'normalize.css/normalize.css' // 清除默认样式
import '@/styles/index.scss' // 全局样式
import { createApp } from 'vue'
import App from './App.vue'
import router, { addAnyRoute } from './router'
import store from './stores'
import 'virtual:svg-icons-register' // svg-icon 插件

const app = createApp(App)
// 路由配置
// 添加任意路由
const finalRouter = await addAnyRoute(router)
app.use(finalRouter)
app.use(store)
app.mount('#app')
