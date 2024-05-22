# 表单组件（LibForm）
封装表单业务组件，基于UI组件表单二次封装后台系统常见表单，如下拉选择组件、富文本编辑器、单选框、多选框、输入框等，提高开发效率。
## 组件实现
```vue
<LibForm :options="options"></LibForm>
```
## 组件示例
:::preview
demo-preview=../examples/LibFormExample.vue
:::

## 组件属性
### 基础属性
| 参数 | 说明 | 类型 | 默认值 | 
| :--- | :-----------: | :---: | :---: |
| options | 表单配置项 | FormOptions | ---- |
| httpRequest | 用户自定义上传方法 | Function | ---- |
### FormOptions属性
| 参数 | 说明 | 类型 | 默认值 | 
| :--- | :-----------: | :---: | :---: |
| type | 表单项显示的元素 | ComponentType  | 'row' 'cascader 'checkbox' 'checkbox-group' 'checkbox-button' 'color-picker' 'date-picker' 'input' 'input-number' 'radio' 'radio-group' 'radio-button' 'rate' 'select' 'option' 'slider' 'switch' 'time-picker' 'time-select' 'transfer' 'upload' 'editor' | ---- |
| value | 表单项的值 | any | ---- |
| label | 表单项label | string | ---- |
| prop | 表单项的标识 | string | ---- |
| rules | 表单项的验证规则 | RuleItem[] | ---- |
| placeholder | 表单项的占位符 | string | ---- |
| attrs | 表单元素特有的属性 | Object | ---- |
| children | 表单项的子元素 | FormOptions[] | ---- |
| uploadAttrs | 处理上传组件的属性和方法 | UploadAttrs | ---- |
| rowGutter | 行布局设置 | number | ---- |
| cols | 列布局设置 | FormOptions[] | ---- |
| colOption | 列布局配置 | ColOptions | ---- |
