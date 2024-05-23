import { App } from 'vue'
import LibTable from './src/index.vue'

export * from './src/models'
export * from './src/table-util'

export { LibTable }
export default {
  install(app: App) {
    app.component('lib-table', LibTable)
  }
}
