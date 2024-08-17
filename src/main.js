import 'normalize.css/normalize.css' // 清除默认样式
import { createApp } from 'vue'
import App from './App.vue'
import router, { addDynamicRoutesToLayout, addAnyRoute } from './router'

const app = createApp(App)
// 路由配置
// 确保动态路由被添加到 Layout 的 children 数组中
addDynamicRoutesToLayout()
// 添加任意路由
const finalRouter = await addAnyRoute(router)
app.use(finalRouter)
app.mount('#app')
