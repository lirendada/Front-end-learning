// 导入两个相关函数
// createRouter(): 创建路由实例
// createWebHashHistory(): 创建哈希模式的路由, 路径带 #
import { createRouter, createWebHashHistory } from 'vue-router'

// 导入 3 个页面组件
import Find from '@/views1/Find.vue'
import Friend from '@/views1/Friend.vue'
import My from '@/views1/My.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // 路由表规则, 即 path 与 component 的对应关系
    {
      path: '/find',
      component: Find
    }, {
      path: '/my',
      component: My
    }, {
      path: '/friend',
      component: Friend
    }
  ]
})

// 导出路由实例
export default router