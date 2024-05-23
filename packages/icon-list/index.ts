import { App } from 'vue'
import LibIconList from './src/index.vue'

export { LibIconList }
export default {
  install(app: App) {
    app.component('lib-icon-list', LibIconList)
  }
}
