import router from '@/router'
import { geToKen } from '@/utils/auth'
// 路由白名单
const whilePath = ['/login']
router.beforeEach((to, from, next) => {
  // 获取token
  const token = geToKen()
  if (!token) {
    if (whilePath.indexOf(to.path) > -1) {
      next()
    } else {
      next({ name: 'JLogin' })
    }
  }
})
