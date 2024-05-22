# 电子盖章（LibStamp）
封装的电子盖章，可以设置各种签章基本信息

## 组件实现
```vue
<LibStamp />
```
## 组件示例
:::preview
demo-preview=../examples/LibStampExample.vue
:::
## 组件属性
### 基础属性
| 参数 | 说明 | 类型 | 默认值 | 
| :--- | :-----------: | :---: | :---: |
| title | 签章信息 | String | '签章信息' |
| btn | 按钮文本 | String | '生成签章' |
| custom | 是否自定义 | Boolean | false |
| innerText | 签章内围文本 | String | 'XXX专用章' |
| outerText | 签章外围 | String | 'XXX科技股份有限公司' |
| width | 签章宽度 | Number | 200 |
| height | 签章高度 | Number | 200 |
| strokeColor | 绘制颜色 | String | '#f00' |
| lineWidth | 文本间距 | Number | 2 |
