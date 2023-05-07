import { App } from 'vue'
import LibStamp from './src/index.vue'

/**
 * 电子盖章
 */
export default {
  install(app: App) {
    app.component('lib-stamp', LibStamp)
  }
}
