import { App } from 'vue'
import LibSignature from './src/index.vue'

/**
 * 电子签名
 */
export default {
  install(app: App) {
    app.component('lib-signature', LibSignature)
  }
}
