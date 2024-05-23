import { App } from 'vue'
import LibChooseTime from './src/index.vue'

export { LibChooseTime }
export default {
  install(app: App) {
    app.component('lib-choose-time', LibChooseTime)
  }
}
