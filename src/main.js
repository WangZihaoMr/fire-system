import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局重置样式表
import './stylesheet/reset.css'

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 1.全局图标注册
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 页面鉴权
import './permission'

const app = createApp(App)

// 2.全局图标注册
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus).use(store).use(router).mount('#app')
