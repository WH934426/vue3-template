import { createPinia } from 'pinia'

const store = createPinia()

export default store
export * from './modules/userStore'
export * from './modules/appStore'
