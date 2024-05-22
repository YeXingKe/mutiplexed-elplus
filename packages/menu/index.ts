import { App } from 'vue'
import menu from './src/index.vue'
// import infiniteMenu from './src/menu'

// 让这个组件可以通过use的形式使用
export default {
  install(app: App) {
    app.component('lib-menu', menu)
    // app.component('lib-infinite-menu', infiniteMenu)
  }
}
