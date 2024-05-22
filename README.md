<h1 align="center" style="margin: 30px 0 30px; font-weight: bold;">mutiplexed-elplus 组件库</h1>
<h4 align="center">基于Vue3+Element-plus二次封装通用组件</h4>
<p align="center">
	  <a href="https://github.com/vuejs/core" target="_blank">
    <img src="https://img.shields.io/badge/vue-%5E3.2.41-blue">
    </a>
    <a href="https://element-plus.gitee.io/zh-CN/component/button.html" target="_blank">
    <img src="https://img.shields.io/badge/element--plus-%5E2.2.26-blue">
    </a>
</p>

### 快速开始

#### 1.安装组件库

```bash
npm i mutiplexed-elplus
yarn add mutiplexed-elplus
pnpm i mutiplexed-elplus
```

#### 2.引用组件库

```javascript
// 在main.ts中引入
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import MutiplexedElplus from 'mutiplexed-elplus';
import 'mutiplexed-plus/style.css';
...
const app = createApp(App)

app.use(ElementPlus)
MutiplexedElplus.install(app) // 或app.use(MutiplexedElplus)
...
app.mount('#app')
```
