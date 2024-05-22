// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import ElementPlus from 'element-plus'
import MutiplexedElplus from 'mutiplexed-elplus'
// import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import DefaultTheme from 'vitepress/theme'
import {
  AntDesignContainer,
  ElementPlusContainer,
  NaiveUIContainer
} from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import 'element-plus/dist/index.css'
// import 'virtual:windi.css'
import 'mutiplexed-elplus/dist/style.css';
import './style.css'
import init from '../../../packages/utils/iconfont'

init()
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('demo-preview', AntDesignContainer)
    app.use(ElementPlus)
    // app.use(ElementPlus, {
    //   locale: zhCn
    // })
    app.use(MutiplexedElplus)
    // import('mutiplexed-elplus').then((module) => {
    //   app.use(module);
    // })
  }
} satisfies Theme
