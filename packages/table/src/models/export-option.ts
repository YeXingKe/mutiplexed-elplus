export class ImportAndExportOption {
  constructor(init?: ImportAndExportOption) {
    if (init) {
      Object.assign(this, init)
    }
  }
  /**
   * 是否可导出
   */
  ExportEnable?: boolean = false
  /**
   * 是否可导导入
   */
  ImportEnable?: boolean = false
  /**
   * 导出文件名称
   */
  Title?: string = '列表数据'
  /**
   * 导出按钮名称
   */
  Name?: string = '导出'
  /**
   * 模块编码
   */
  ModCode?: string = ''
}
