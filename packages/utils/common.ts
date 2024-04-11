import type { App } from 'vue'
// import * as Icons from '@element-plus/icons';
// import Icon from '~/components/icon/index.vue'
import * as elIcons from '@element-plus/icons-vue'
import { toLine } from './'

// https://fontawesome.com/docs/web/use-with/vue/
export function registerIcons(app: App) {
  /**
   * 全局注册 Elment-plus Icon
   * 官方使用方式：<Icon name="name" size="size" color="color"/>
   */
  // app.component('Icon',Icon)

  // 全局注册图标，牺牲一点性能
  // for (let i in Icons) {
  //   app.component(`el-icon-${toLine(i)}`, (Icons as any)[i]);
  // }
  /*
   * 全局注册element Plus的icon
   */
  const icons = elIcons as any
  for (const i in icons) {
    app.component(`el-icon-${icons[i].name}`, icons[i])
  }
}

/**
 * 加载网络css文件
 * @param url css资源url
 */
export function loadCss(url: string): void {
  const link = document.createElement('link') // 创建link标签
  link.rel = 'stylesheet'
  link.href = url
  // 是否采用跨域的方式加载。它可以取两个值
  // anonymous（跨域请求时，不发送用户凭证，主要是 Cookie）
  // use-credentials（跨域时发送用户凭证）。
  link.crossOrigin = 'anonmous'
  document.getElementsByTagName('head')[0].appendChild(link)
}

/**
 * 加载网络js文件
 * @param url js资源url
 */
export function loadJs(url: string): void {
  const link = document.createElement('script')
  link.src = url
  document.body.appendChild(link)
}

/**
 * 是否是外部链接
 * @param path
 */
export function isExternal(path: string): boolean {
  return /^(https?|ftp|mailto|tel):/.test(path)
}
