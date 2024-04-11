import { App } from 'vue'
import LibAttachment from './src/index.vue'

export default {
  install(app: App) {
    app.component('lib-attachment', LibAttachment)
  }
}
