import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// 重制浏览器默认样式
import 'reset-css/less/reset.less'
// ui组件
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
// 路由拦截
import './permission'
// 全局样式文件
import '@/styles/index.less'
// element-plus icon
import * as ElIconModules from '@element-plus/icons-vue'
// 导入转换图标名称的函数
import { transElIconName } from './utils/icon'
const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
app.use(ElementPlus, {
  locale: zhCn
})
// 统一注册el-icon图标 J-edit
for (const iconName in ElIconModules) {
  app.component(transElIconName(iconName), ElIconModules[iconName])
}
