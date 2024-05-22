# 电子签名（LibSignture）
封装的电子签名，可以设置各种签名基本信息
## 组件实现
```vue
<LibSignture />
```
## 组件示例
:::preview
demo-preview=../examples/LibSignatureExample.vue
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
| width | 签名框宽度 | Number | 300 |
| height | 签名框高度 | Number | 300 |
| strokeColor | 绘制颜色 | String | '#000' |
| lineWidth | 文本间距 | Number | 2 |
| confirm | 获取保存签名 | Function | ---- |
