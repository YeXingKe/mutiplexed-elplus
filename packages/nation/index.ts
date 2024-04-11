import { App } from 'vue'
import selectNation from './src/index.vue'

export default {
  install(app: App) {
    app.component('lib-select-nation', selectNation)
  }
}
