import { App } from 'vue'
import LibIcon from './icon'
import list from './list'
import LibMenu from './menu'
import LibChooseCity from './chooseCity'
import LibForm from './form'
import LibTable from './table'
import LibCalendar from './calendar'
import LibDialog from './dialog'
import LibDrawer from './drawer'
import LibSelect from './select'
import LibIconList from './icon-list'
import LibAttachment from './attachment'
import LibVerifyCode from './verify-code'
import LibStamp from './stamp'
import LibSignature from './signature'

import directives from './directives/index'
import './styles/base.scss'
import './styles/ui.scss'
import { toLine } from './utils/index'

import * as Icons from '@element-plus/icons-vue'

const components = [
  LibSignature,
  LibStamp,
  LibDrawer,
  LibDialog,
  LibForm,
  LibIcon,
  list,
  LibMenu,
  LibChooseCity,
  LibTable,
  LibCalendar,
  LibSelect,
  LibIconList,
  LibAttachment,
  LibVerifyCode,

  directives
]

export default {
  install(app: App) {
    // 图标组件
    for (let i in Icons) {
      app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
    }
    // 声明组件
    components.map(item => {
      app.use(item)
    })
  }
}
