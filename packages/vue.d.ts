declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
// 声明Element Plus的全局组件
declare module 'element-plus/components' {
  import type { Component } from 'vue'
  const ElMenu: Component
  const ElMenuItem: Component
  // 添加更多Element Plus组件声明...
  export { ElMenu, ElMenuItem /*, ... */ }
}
