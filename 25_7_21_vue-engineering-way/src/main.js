import { createApp } from 'vue'
import App from './App.vue'
import router from './router1/index.js'
const app = createApp(App)

// 注册
app.use(router)

app.mount('#app')