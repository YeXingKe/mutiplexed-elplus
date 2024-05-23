import { App } from 'vue'
import LibSignature from './src/index.vue'

export { LibSignature }
export default {
  install(app: App) {
    app.component('lib-signature', LibSignature)
  }
}
