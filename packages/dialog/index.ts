import { App } from 'vue'
import LibDialog from './src/index.vue'

export { LibDialog }
export default {
  install(app: App) {
    app.component('lib-dialog', LibDialog)
  }
}
