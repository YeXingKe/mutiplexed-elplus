import { App } from 'vue'
import LibDict from './src/index.vue'

export { LibDict }
export interface DictType {
  name: string
  value: string
  enable: boolean
}

export default {
  install(app: App) {
    app.component('lib-dict', LibDict)
  }
}
