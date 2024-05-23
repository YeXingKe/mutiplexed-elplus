import { App } from 'vue'
import LibChooseCity from './src/index.vue'

export { LibChooseCity }
export default {
  install(app: App) {
    app.component('lib-choose-city', LibChooseCity)
  }
}
