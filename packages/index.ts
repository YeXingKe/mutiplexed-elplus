import { App } from 'vue'
import LibIcon from './icon'
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
export {
  LibStamp,
  LibSignature,
  LibNation,
  LibDrawer,
  LibDialog,
  LibForm,
  LibIcon,
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
}

export default {
  install
}
