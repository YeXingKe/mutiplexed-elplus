import { App } from 'vue'
import waterMarker from './modules/water-mask'
import copy from './modules/copy'
import draggable from './modules/draggable'
import throttle from './modules/throttle'
import debounce from './modules/debounce'
import longpress from './modules/longpress'
import stamp from './modules/stamp'

const directivesList: any = {
  // Custom directives
  waterMarker,
  copy,
  draggable,
  throttle,
  debounce,
  longpress,
  stamp
}

const directives = {
  install: function (app: App<Element>) {
    Object.keys(directivesList).forEach(key => {
      // 注册所有自定义指令
      app.directive(key, directivesList[key])
    })
  }
}

export default directives
