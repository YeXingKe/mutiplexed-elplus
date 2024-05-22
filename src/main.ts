import { createApp } from 'vue'
// import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { registerIcons } from '../packages/utils/common'
import lib from '../packages'
import App from './App.vue'
import router from './router'
// 全局引入所有组件
// import lib from '../lib/index.es.js';
// 单独引入组件
// import chooseTime from '../lib/chooseTime/index.mjs';
// import '../lib/style.css';

import 'tippy.js/dist/tippy.css' // tippy.js插件的样式

import init from '../packages/utils/iconfont'

const app = createApp(App)

init()
registerIcons(app)
app.use(ElementPlus, {
  // locale: zhCn
})
lib.install(app)
app.use(router)

app.mount('#app')
