import { App } from 'vue'
import LibStamp from './src/index.vue'

export { LibStamp }
export default {
  install(app: App) {
    app.component('lib-stamp', LibStamp)
  }
}
