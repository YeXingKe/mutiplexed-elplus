import { App } from 'vue'
import chooseTime from './src/index.vue'

export default {
  install(app: App) {
    app.component('lib-choose-time', chooseTime)
  }
}
