import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import { registerIcons } from '../packages/utils/common'
import lib from '../packages'
// 全局引入所有组件
// import lib from '../lib/index.es.js';
// 单独引入组件
// import chooseTime from '../lib/chooseTime/index.mjs';
// import '../lib/style.css';

import 'tippy.js/dist/tippy.css' // tippy.js插件的样式

import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import directives from '../packages/directives/index'
import init from '../packages/utils/iconfont'

import * as moment from 'moment'
import * as momentTimezone from 'moment-timezone'

/**
 * 强制全局moment使用中国时区
 */
momentTimezone.tz.setDefault('Asia/Shanghai')
moment.locale('zh-cn')

const app = createApp(App)

init()
registerIcons(app)
app.use(ElementPlus, {
  locale: zhCn
})
app.use(directives)
app.use(lib)
app.use(router)

app.mount('#app')
