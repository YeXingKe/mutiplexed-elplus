import { App } from 'vue'
import drawer from './src/index.vue'

export default {
  install(app: App) {
    app.component('lib-drawer', drawer)
  }
}
