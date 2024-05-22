# 滑块验证码（LibSliderCode）
滑块验证码封装的图形验证码，通过拉动滑块实现验证

## 组件实现
```vue
<LibSliderCode />
```
## 组件示例
:::preview
demo-preview=../examples/LibSliderCodeExample.vue
:::

## 组件属性
### 基础属性
| 参数 | 说明 | 类型 | 默认值 | 
| :--- | :-----------: | :---: | :---: |
| width | 图形框宽度 | Number | 300 |
| height | 图形框高度 | Number | 50 |
| startText | 验证前文字 | String |  '请拖住滑块，拖动到最右边' |
| startIcon | 验证前图标 | 只支持fontawe字体图标，String | ---- |
| successText | 验证后文字 | String | '验证成功' |
| successIcon | 验证后图标 | 只支持fontawe字体图标，String |  |
| successFun | 验证成功时执行函数 | Function | ---- |
| errorFun | 验证失败时执行函数 | Function | ---- |
| resultFun | 获取当前验证码结果 | Function | ---- |
