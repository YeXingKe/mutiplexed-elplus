import { App } from 'vue'
import VerifyCode from './src/index.vue'

export default {
  install(app: App) {
    app.component('lib-verify-code', VerifyCode)
  }
}
