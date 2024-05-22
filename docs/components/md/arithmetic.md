# 算术验证码（LibArithmeticCode）
算术验证码封装的图形验证码，通过计算算术值实现验证，可以控制验证字符串、图形框宽高

## 组件实现

```vue
<LibArithmeticCode />
```
## 组件示例
:::preview
demo-preview=../examples/LibArithmeticCodeExample.vue
:::

## 组件属性
### 基础属性
| 参数 | 说明 | 类型 | 默认值 | 
| :--- | :-----------: | :---: | :---: |
| width | 图形框宽度 | Number | 120 |
| height | 图形框高度 | Number | 45 |
| operators | 验证码算术操作符数组 | Array&lt;String&gt; | ['+', '-', '*', '/'] |
| codeSum | 验证码长度 | Number | 4 |
| fontSizeMin | 验证码字体最小型 | Number | 16 |
| fontSizeMax | 验证码字体最大型 | Number | 40 |
| verify-code | 获取当前验证码值 | Function | ---- |
