import { App } from 'vue'
import LibForm from './src/index.vue'

export * from './types/rules'
export * from './types/types'

export default {
  install(app: App) {
    app.component('lib-form', LibForm)
  }
}
