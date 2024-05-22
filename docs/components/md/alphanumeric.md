# 字母数字混合验证码（LibAlphanumericCode）
字母数字混合封装的图形验证码，通过输入指定长度验证码实现验证，可以控制验证字符串、图形框宽高

## 组件实现

```vue
<LibAlphanumericCode />
```
## 组件示例
:::preview
demo-preview=../examples/LibAlphanumericCodeExample.vue
:::

## 组件属性
### 基础属性
| 参数 | 说明 | 类型 | 默认值 | 
| :--- | :-----------: | :---: | :---: |
| width | 图形框宽度 | Number | 120 |
| height | 图形框高度 | Number | 45 |
| verifyCode | 验证码随机字符串 | String | 数字字母大小写字符串 |
| codeSum | 验证码长度 | Number | 4 |
| fontSizeMin | 验证码字体最小型 | Number | 16 |
| fontSizeMax | 验证码字体最大型 | Number | 40 |
| verify-code | 获取当前验证码值 | Function | ---- |
