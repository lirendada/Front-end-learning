import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// 导入
import { createPinia } from 'pinia'

// 创建 pinia 实例
const pinia = createPinia()

// 注册实例
app.use(pinia)

app.mount('#app')