import { App } from 'vue'
import LibDrawer from './src/index.vue'

export { LibDrawer }
export default {
  install(app: App) {
    app.component('lib-drawer', LibDrawer)
  }
}
