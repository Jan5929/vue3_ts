import { RouteRecordRaw } from 'vue-router'

// 权限路由
const permissionsRouter: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/J-home/index.vue')
  }
]
export default permissionsRouter
