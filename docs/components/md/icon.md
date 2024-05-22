# 图标组件（LibIcon）
基于本地图片、超链接svg图标、element-elplus图标库、iconfont图标库、fontawesome图标库封装实现的组件
## 组件实现

```vue
<LibIcon :name="'el-icon-edit'" />
<LibIcon :name="'iconfont icon-save'" />
<LibIcon :name="faHome"/>
```
## 组件示例
:::preview
demo-preview=../examples/LibIconExample.vue
:::
## 组件属性
### 基础属性
| 参数 | 说明 | 类型 | 默认值 | 
| :--- | :-----------: | :---: | :---: |
| name | 图标名称 | String |---- |
| size | 图标大小 | String | '20px' |
| color | 图标颜色 | String | '#00000' |
