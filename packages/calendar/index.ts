import { App } from 'vue'
import LibCalendar from './src/index.vue'

export { LibCalendar }
export default {
  install(app: App) {
    app.component('lib-calendar', LibCalendar)
  }
}
