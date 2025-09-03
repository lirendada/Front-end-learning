import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import ElementPlus from 'element-plus'
import {User, Lock, Edit, Delete} from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
app.use(ElementPlus)
app.component(User.name, User)
app.component(Lock.name, Lock)
app.component(Edit.name, Edit)
app.component(Delete.name, Delete)
app.mount('#app')