import { RouteRecordRaw } from 'vue-router'
// 静态路由
const staticRouter: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'JLogin',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/J-login/index.vue')
  }
]
export default staticRouter
