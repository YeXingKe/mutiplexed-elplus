import { App } from 'vue'
import WaterMarker from './modules/water-mask'
import copy from './modules/copy'
import draggable from './modules/draggable'
import throttle from './modules/throttle'
import debounce from './modules/debounce'
import longpress from './modules/longpress'

const directivesList: any = {
  // Custom directives
  WaterMarker,
  copy,
  draggable,
  throttle,
  debounce,
  longpress
}

const directives = {
  install: function (app: App<Element>) {
    Object.keys(directivesList).forEach(key => {
      // 注册所有自定义指令
      app.directive(key, directivesList[key])
    })
  }
}

export { WaterMarker, copy, draggable, throttle, debounce, longpress }

export default directives
