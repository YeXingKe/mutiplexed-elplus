import { ImportAndExportOption } from './export-option'

export class TableOption {
  constructor(init?: TableOption) {
    if (init) {
      Object.assign(this, init)
    }
  }
  /**
   * 请求的url
   */
  url?: string = ''
  /**
   * 纵向边框
   */
  border?: boolean = true
  /**
   * 导入导出配置
   *
   */
  importAndExportOption?: ImportAndExportOption
  // exportName?: string; // 导出名称
  /**
   * 是否开启模糊搜索
   */
  simpleSearchEnable?: boolean = true
  /**
   * 是否开启高级搜索
   */
  advSearchEnable?: boolean = true
  /**
   * 列表大小
   */
  size?: 'large' | 'default' | 'small' | 'medium' = 'default'
  /**
   * 列宽度是否自撑开
   */
  fit?: boolean = true
  /**
   * 是否显示分页
   */
  pagination?: boolean = true
  /**
   * 显示分页的对齐方式
   */
  paginationAlign?: 'left' | 'center' | 'right' = 'right'
  /**
   * 当前分页数
   */
  currentPage?: number = 1
  /**
   * 每页显示多少数据
   */
  pageSize?: number = 10
  /**
   * 分页数量分类
   */
  pageSizes?: Array<number>
  /**
   * 数据总条数
   */
  total?: number = 0
  /**
   * 加载状态的文案
   */
  elementLoadingText?: string = '加载中'
  /**
   * 加载的图标名
   */
  elementLoadingSpinner?: string = ''
  /**
   * 加载的背景颜色
   */
  elementLoadingBackground?: string = 'rgba(0,0,0,.1)'
  /**
   * 加载的svg
   */
  elementLoadingSvg?: string = `
  <path class="path" d="
    M 30 15
    L 28 17
    M 25.61 25.61
    A 15 15, 0, 0, 1, 15 30
    A 15 15, 0, 1, 1, 27.99 7.5
    L 15 15
  " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
`
  /**
   * 加载svg的配置
   */
  elementLoadingSvgViewBox?: string = '-10, -10, 50, 50'
}
