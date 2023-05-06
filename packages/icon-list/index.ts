import { App } from 'vue'
import LibIconList from './src/index.vue'

export default {
  install(app: App) {
    app.component('lib-icon-list', LibIconList)
  }
}
