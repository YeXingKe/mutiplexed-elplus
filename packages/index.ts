import { App } from 'vue'
import LibIcon from './icon'
import LibList from './list'
// import LibMenu from './menu'
import LibChooseTime from './choose-time'
import LibChooseCity from './choose-city'
import LibForm from './form'
import LibTable from './table'
import LibCalendar from './calendar'
import LibDialog from './dialog'
import LibDrawer from './drawer'
import LibSelect from './select'
import LibIconList from './icon-list'
import LibAttachment from './attachment'
import LibVerifyCode from './verify-code'
import LibNation from './nation'
import LibStamp from './stamp'
import LibSignature from './signature'
import LibDict from './dict'
import directives from './directives/index'

import './styles/base.scss'
import './styles/ui.scss'
import { toLine } from './utils/index'
import * as Icons from '@element-plus/icons-vue'
import quarterOfYear from 'dayjs/plugin/quarterOfYear'
import dayjs from 'dayjs'
import init from './utils/iconfont'
dayjs.extend(quarterOfYear)

init()
const components = [
  LibStamp,
  LibSignature,
  LibNation,
  LibDrawer,
  LibDialog,
  LibForm,
  LibIcon,
  LibList,
  // LibMenu,
  LibChooseTime,
  LibChooseCity,
  LibTable,
  LibCalendar,
  LibSelect,
  LibIconList,
  LibDict,
  LibAttachment,
  LibVerifyCode,
  directives
]

const install = (app: App) => {
  // 图标组件
  for (let i in Icons) {
    app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
  }
  // 声明组件
  components.map(item => {
    app.use(item)
  })
}

export * from './defaultOptions'
export * from './choose-time'
export * from './choose-city'
export * from './form'
export * from './table'
export * from './calendar'
export * from './dialog'
export * from './drawer'
export * from './select'
export * from './icon-list'
export * from './attachment'
export * from './verify-code'
export * from './nation'
export * from './stamp'
export * from './signature'
export * from './dict'
export * from './directives'

export default {
  install
}
