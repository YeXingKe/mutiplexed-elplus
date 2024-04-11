<h1 align="center" style="margin: 30px 0 30px; font-weight: bold;">mutiplexed-elplus 组件库</h1>
<h4 align="center">基于Vue3+Element-plus二次封装通用组件</h4>
<p align="center">
	  <a href="https://github.com/vuejs/core" target="_blank">
    <img src="https://img.shields.io/badge/vue-%5E3.2.41-blue">
    </a>
	  <a href="https://github.com/vuejs/router">
    <img src="https://img.shields.io/badge/vue--router-%5E4.0.13-blue" target="_blank">
    </a>
    <a href="https://element-plus.gitee.io/zh-CN/component/button.html" target="_blank">
    <img src="https://img.shields.io/badge/element--plus-%5E2.2.26-blue">
    </a>
    <a href="https://www.axios-http.cn/docs/intro" target="_blank">
    <img src="https://img.shields.io/badge/axios-%5E1.3.4-blue">
    </a>
    <a href="https://github.com/tealeg/xlsx" target="_blank">
    <img src="https://img.shields.io/badge/xlsx-%5E0.18.5-blue">
    </a>
    <a href="https://github.com/moment/moment" target="_blank">
    <img src="https://img.shields.io/badge/moment-%5E2.29.4-blue">
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
// 全局引入所有组件
import lib from 'mutiplexed-plus/index.es.js';
// 单独引入组件
// import chooseTime from 'mutiplexed-plus/chooseTime/index.mjs';
import 'mutiplexed-plus/style.css';

import zhCn from 'element-plus/lib/locale/lang/zh-cn'

// 注意要引入对应的UI组件库，这里是基于ElementPlus，所以需要引入ElementPlus组件库
...
const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn
})
lib.install(app)
...
app.mount('#app')
```
