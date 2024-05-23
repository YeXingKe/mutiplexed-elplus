import { App } from 'vue'
import LibIcon from './src/index.vue'

export { LibIcon }
export default {
  install(app: App) {
    app.component('lib-icon', LibIcon)
  }
}
