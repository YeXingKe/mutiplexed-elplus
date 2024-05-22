# 选择组件
通过封装下拉选择框实现业务选择表单组件，如实现民族、城市、时间选取业务


## 组件实现
```vue
<LibSelect />
```

业务组件实现：
```vue
<!--选取民族：-->
<LibNation />
<!--选取时间：-->
<LibChooseTime />
<!--选取城市：-->
<LibChooseCity />
```
## 组件示例
:::preview
demo-preview=../examples/LibSelectExample.vue
:::

## 组件属性

### LibSelect属性
| 参数 | 说明 | 类型 | 默认值 | 
| :--- | :-----------: | :---: | :---: |
| selectedValue | 已选择的值 | String 或 Number | '' |
| options | 下拉列表 | Array&lt;SelectOptions&gt; | ---- |
| apiFun | 后端请求列表 | Function | Promise&lt;any[]&gt; |
### LibNation属性
| 参数 | 说明 | 类型 | 默认值 | 
| :--- | :-----------: | :---: | :---: |
| selectedValue | 已选择的值 | String 或 Number | '' |
### LibChooseTime属性
| 参数 | 说明 | 类型 | 默认值 | 
| :--- | :-----------: | :---: | :---: |
| startPlaceHolder | 开始文本 | String | '请选择开始时间' |
| startTimeStart | 开始最小时间 | String | '08:00' |
| startStep | 开始间隔 | String | '00:30'|
| startTimeEnd | 开始最大时间 | String | '24:00' |
| endPlaceHolder | 结束文本 | String | '请选择结束时间' |
| endTimeStart | 结束最小时间 | String | '08:00' |
| endStep | 结束间隔 | String  | '00:30' |
| endTimeEnd | 结束最大时间 | String | '24:00' |
### LibChooseCity属性
| 参数 | 说明 | 类型 | 默认值 | 
| :--- | :-----------: | :---: | :---: |
| selectedValue | 已选择的值 | String 或 Number | '' |
| options | 下拉列表 | Array&lt;SelectOptions&gt; | ---- |
| apiFun | 后端请求列表 | Function | Promise&lt;any[]&gt; |
