# 表格组件（LibTable）
封装后台表格业务组件，组件可以实现列表数据增删查改，也可以导入导出
## 组件实现
```vue
<LibTable :options="options" :columns="columns"></LibTable>
```
## 组件示例
:::preview
demo-preview=../examples/LibTableExample.vue
:::
## 组件属性
### 基础属性
| 参数 | 说明 | 类型 | 默认值 | 
| :--- | :-----------: | :---: | :---: |
| columns | 表单列配置项 | TableColumn[] | ---- |
| data | 表格数据 | TableColumn[] | ---- |
| reload | 表格加载 | Boolean | false |
| options | 表单配置项 | TableOption | ---- |
| editRowIndex | 编辑行按钮的标识 | String | '' |
| isEditRow | 是否可以编辑行 | Boolean | false |
| beforeRequest | 列表请求前 | Function | (tableRequest: RequestParams) => tableRequest |
| afterRequest | 列表请求后 | Function | (result: any) => result |
### TableColumn属性
| 参数 | 说明 | 类型 | 默认值 | 
| :--- | :-----------: | :---: | :---: |
| type | 组件种类 | ComponentType | ---- |
| index | 列表索引 | number或Function | ---- |
| label | 显示的标签 | string | ---- |
| columnKey | column 的 key | string | ---- |
| prop | 显示的字段名称 | string | ---- |
| visible | 是否显示当前列 | boolean | true |
| width | 显示的列宽度 | string或number | ---- |
| minWidth | 对应列的最小宽度 | string或number | ---- |
| filters | 表头过滤器 | Array &lt;{ text: string; value: string } &gt; | true |
| filterPlacement | 过滤弹出框的定位 | string | 'bottom' |
| filteredValue | 选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性 | Array | --- |
| filterMultiple | 数据过滤的选项是否多选 | boolean | true |
| align | 显示的对齐方式 | 'left'、'center' 、'right' | 'left' |
| sortable | 降序还是升序 | boolean或string | --- |
| resizable | 对应列是否可以通过拖动改变宽度 | boolean | true |
| headerAlign | 降序还是升序 | string | 'left'、'center' 、'right' |
| className | 列的className | string | --- |
| labelClassName | 当前列标题的自定义类名 | string | --- |
| slot | 列表模板名称 | string | --- |
| isShowHeader | 是否显示表头自定义模板 | boolean | false |
| action | 是否是操作项 | boolean | false |
| fixed | 是否固定在左侧或者右侧 | boolean或'left' 'right' | ---- |
| editable | 是否可编辑 | boolean  | false |
| editIcon | 是否编辑图标 | string | 'Edit' |
| simpleSearch | 是否支持模糊搜索 | boolean | true |
| advSearch | 是否支持高级搜索 | boolean | true |
| advSearchType | 数据类型 | ViewType | true |
| isEllipsis | 是否单元格内容根据宽度自动省略 | boolean | false |
| showOverFlowTooltip | 当内容过长被隐藏时显示 tooltip | boolean或Object | false |
| sortOrders | 升降序规则| Array | ['ascending', 'descending', null] |
| formatter | 格式内容 | Function | (row: any, column: any, cellValue: any, index: any) => void |
| renderHeader | 列标题 Label 区域渲染使用的 Function | Function | ({ column, $index }: any) => void |
| selectable | 仅对 type=selection 的列有效 | Function | (row: any, index: any) => void |
### TableOption属性
| 参数 | 说明 | 类型 | 默认值 | 
| :--- | :-----------: | :---: | :---: |
| url | 请求的url | string | '' |
| border | 纵向边框 | boolean | true |
| importAndExportOption | 导入导出配置 | ImportAndExportOption | '' |
| simpleSearchEnable | 是否开启模糊搜索 | boolean | true |
| advSearchEnable | 是否开启高级搜索 | boolean | true |
| size | 列表大小 | string | 'default' |
| fit | 列宽度是否自撑开 | boolean | true |
| pagination | 是否显示分页 | boolean | true |
| paginationAlign | 显示分页的对齐方式 | string | 'right' |
| currentPage | 当前分页数 | number | 1 |
| pageSize | 每页显示多少数据 | number | 10 |
| pageSizes | 分页数量分类 | Array&lt;number&gt; | --- |
| total | 数据总条数 | number | 0 |
| elementLoadingText | 加载状态的文案 | string | '加载中' |
| elementLoadingSpinner | 加载的图标名 | string | '加载中' |
| elementLoadingBackground | 加载的背景颜色 | string | 'rgba(0,0,0,.1)' |
