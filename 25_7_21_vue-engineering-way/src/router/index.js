// 导入两个相关函数
// createRouter(): 创建路由实例
// createWebHashHistory(): 创建哈希模式的路由, 路径带 #
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

// 导入 3 个页面组件
import Find from '@/views/Find.vue'
import Friend from '@/views/Friend.vue'
import My from '@/views/My.vue'
import _404 from '@/views/404.vue'

const router = createRouter({
//   history: createWebHashHistory(),
  history: createWebHistory(),
  routes: [
    // 路由表规则, 即 path 与 component 的对应关系
    {
        path: '/',
        redirect: '/find'
    },
    {
      path: '/find',
      component: Find
    }, {
      path: '/my',
      component: My
    }, {
      // path: '/friend',
      name: 'Friend',
      path: '/friend/:fid',
      component: Friend
    },
    {
        path: '/:pathmatch(.*)*',
        component: _404
    }
  ]
})

// 导出路由实例
export default router