// import { DataSourceRequestState } from '@progress/kendo-data-query';

// // 前三个值不用处理，element-plus默认处理
// type ComponentType =
//   | 'selection' // 多选框
//   | 'index' // 显示改行索引
//   | 'expand'; // 一个可展开按钮

// export interface TableColumn {
//   type?: ComponentType;
//   label: string; // 显示标题
//   prop?: string; // 字段名称
//   width?: string | number; // 列宽度
//   align?: 'left' | 'center' | 'right'; // 对齐方式
//   slot?: string; // 自定义列表模板名称
//   action?: boolean; // 是否代表操作项
//   fixed?: true | 'left' | 'right'; // 是否固定在左侧或者右侧，true为固定左侧
//   editable?: boolean; // 是否可编辑
//   editIcon?: string; // 编辑图标
//   simpleSearch?: boolean; // 是否是模糊搜索
//   advSearch?: boolean; // 是否是高级搜索
//   selectable?: (row: any, index: any) => void; // 是否可勾选，仅多选有效
//   formatter?: (row: any, column: any, cellValue: any, index: any) => void; // 格式内容
// }

// export interface TableOption {
//   url?: string;
//   border?: boolean; // 是否带有纵向边框
//   exportEnable?: boolean; // 是否导出
//   exportName?: string; // 导出名称
//   simpleSearchEnable?: boolean; // 模糊搜索
//   advSearchEnable?: boolean; // 高级搜索
//   size?: 'large' | 'default' | 'small' | 'medium'; // 列表大小
//   fit?: boolean; // 列宽度是否自撑开
//   pagination?: boolean; // 是否显示分页
//   paginationAlign?: 'left' | 'center' | 'right'; // 显示分页的对齐方式
//   currentPage?: number; // 当前是第几页
//   pageSize?: number; // 每页多少条数据
//   pageSizes?: Array<number>; // 显示分页数据多少条的选项
//   total?: number; // // 数据总条数
//   elementLoadingText?: string; // 加载文案
//   elementLoadingSpinner?: string; // 加载图标名
//   elementLoadingBackground?: string; // 加载背景颜色
//   elementLoadingSvg?: string; // 加载svg
//   elementLoadingSvgViewBox?: string; // 加载svg的配置
// }

// export class TableRequest {
//   /**
//    * 请求的url
//    *
//    * @type {string}
//    * @memberof TableRequest
//    */
//   url?: string;
//   /**
//    *
//    * 请求数据
//    * @type {DataSourceRequestState}
//    * @memberof TableRequest
//    */
//   requestData?: DataSourceRequestState;
//   /**
//    * 额外附加的请求数据，开发者可以设置此项，发送请求时会添加到请求参数中
//    *
//    * @type {{}}
//    * @memberof TableRequest
//    */
//   extraPara?: {};
// }

export class TableRequest {
  /**
   *
   * 请求数据
   */
  requestData?: {}
  /**
   * 额外附加的请求数据，开发者可以设置此项，发送请求时会添加到请求参数中
   *
   * @type {{}}
   * @memberof TableRequest
   */
  extraPara?: {}
}
