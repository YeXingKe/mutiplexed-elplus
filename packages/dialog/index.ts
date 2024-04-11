import { App } from 'vue'
import dialog from './src/index.vue'

export default {
  install(app: App) {
    app.component('lib-dialog', dialog)
  }
}
