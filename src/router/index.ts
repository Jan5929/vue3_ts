import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import staticRouter from './modules/static'
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: staticRouter
})

export default router
