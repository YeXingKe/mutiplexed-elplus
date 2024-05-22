import { App } from 'vue'
import table from './src/index.vue'

export * from './src/models'
export * from './src/table-util'

export default {
  install(app: App) {
    app.component('lib-table', table)
  }
}
