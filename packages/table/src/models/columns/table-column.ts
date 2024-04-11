import { ViewType } from '../enums/view-type.enum'

// 前三个值不用处理，element-plus默认处理
type ComponentType =
  | 'selection' // 多选框
  | 'index' // 显示改行索引
  | 'expand' // 一个可展开按钮

export abstract class TableColumn {
  constructor(init?: TableColumn) {
    if (init) {
      Object.assign(this, init)
    }
  }
  /**
   * 组件种类
   */
  type?: ComponentType
  /**
   *  如果设置了 type=index，可以通过传递 index 属性来自定义索引
   *  (index:number)=>void
   */
  index?: number | Function
  /**
   * 显示的标签
   */
  label?: string
  /**
   * column 的 key，
   * 如果需要使用 filter-change 事件，
   * 则需要此属性标识是哪个 column 的筛选条件
   */
  columnKey?: string
  /**
   * 显示的字段名称
   */
  prop?: string
  /**
   * 是否显示当前列
   */
  visible?: boolean = true
  /**
   * 显示的列宽度
   */
  width?: string | number
  /**
   * 对应列的最小宽度，
   * 与 width 的区别是 width 是固定的，
   * min-width 会把剩余宽度按比例分配给设置了 min-width 的列
   */
  minWidth?: string | number
  /**
   * 表头过滤器
   */
  filters?: Array<{ text: string; value: string }>
  /**
   * 过滤弹出框的定位
   */
  filterPlacement?:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'right'
    | 'right-start'
    | 'right-end' = 'bottom'
  /**
   * 数据过滤的选项是否多选
   */
  filterMultiple?: boolean = true
  /**
   * 选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。
   */
  filteredValue?: Array<any>
  /**
   * 显示的对齐方式
   */
  align?: 'left' | 'center' | 'right' = 'left'
  /**
   * 降序还是升序
   */
  sortable?: boolean | string
  /**
   * 对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）
   */
  resizable?: boolean = true
  /**
   * 表头对齐方式
   */
  headerAlign?: 'left' | 'right' | 'center'
  /**
   * 列的className
   */
  className?: string
  /**
   * 当前列标题的自定义类名
   */
  labelClassName?: string
  /**
   * 列表模板名称
   */
  slot?: string
  /**
   * 是否显示表头自定义模板
   */
  isShowHeader?: boolean = false
  /**
   * 是否是操作项
   */
  action?: boolean = false
  /**
   * 是否固定在左侧或者右侧，true为固定左侧
   */
  fixed?: true | 'left' | 'right'
  /**
   * 是否可编辑
   */
  editable?: boolean = false
  /**
   * 是否编辑图标
   */
  editIcon?: string = 'Edit'
  /**
   * 是否支持模糊搜索
   */
  simpleSearch?: boolean = true
  /**
   * 是否支持高级搜索
   */
  advSearch?: boolean = true
  /**
   *
   * 数据类型
   * @type {ViewType}
   */
  advSearchType?: ViewType = ViewType.string
  /**
   * 是否单元格内容根据宽度自动省略
   */
  isEllipsis?: boolean = false
  /**
   * 当内容过长被隐藏时显示 tooltip
   */
  showOverFlowTooltip?: boolean | Object = false // 参考表格的 tooltip-options
  /**
   * 仅当 sortable 为 true 时有效
   * 只有三个值'ascending', 'descending', null
   * ascending 表示升序，descending 表示降序，null 表示还原为原始顺序
   *
   */
  sortOrders?: Array<any> = ['ascending', 'descending', null]
  /**
   * 仅对type=selection 的列有效，请注意，需指定 row-key 来让这个功能生效。
   */
  reserveSelection?: boolean = false
  /**
   * 仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。
   * 如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推
   */
  sortBy?: string | Array<any> | Function // function(row, index)
  /**
   * 格式内容
   * row：这一行的所有数据
   * column： 关于这个列的数据
   * cellValue： 这个单元格里的值
   * index： 这个数据的下标值
   */
  formatter?: (row: any, column: any, cellValue: any, index: any) => void
  /**
   * 列标题 Label 区域渲染使用的 Function
   */
  renderHeader?: ({ column, $index }: any) => void
  /**
   * 仅对 type=selection 的列有效
   */
  selectable?: (row: any, index: any) => void
  /**
   * 仅当sortable设置为true的时候有效
   */
  sortMethod?: (a: any, b: any) => void
  /**
   * 数据过滤使用的方法
   * 如果是多选的筛选项
   * 对每一条数据会执行多次
   * 任意一次返回 true 就会显示
   */
  filterMethod?: (value: any, row: any, column: any) => void
}
