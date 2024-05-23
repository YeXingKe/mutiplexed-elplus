import { App } from 'vue'
import LibSelect from './src/index.vue'
import { SelectOptions } from './src/types'

export { LibSelect, SelectOptions }
export default {
  install(app: App) {
    app.component('lib-select', LibSelect)
  }
}
