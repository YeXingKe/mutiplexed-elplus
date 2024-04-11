import { Util } from '../../../../utils/util'
import { ButtonsOptions } from './buttons-options'
import { TableColumn } from './table-column'
export class ButtonColumn extends TableColumn {
  /**
   * 是否显示操作列
   * @type {Array<ButtonsOptions>}
   * @memberof TableColumn
   */
  buttons: Array<ButtonsOptions> = []
  /**
   * 只显示文字
   */
  onlyText?: boolean = false
  /**
   * 是否显示更多按钮
   */
  showMenu?: boolean = false
  constructor(init?: ButtonColumn) {
    super()
    if (init) {
      Object.assign(this, init)
    }

    // this.canChangeVisible = false;
    this.sortable = false
    this.action = true // 是操作项
    this.advSearch = false
    this.simpleSearch = false
    // 默认label
    if (Util.isNullOrWhiteSpace(this.label)) {
      this.label = '操作'
    }
    if (Util.isZeroOrWhiteSpace(this.width) && !Util.IsNullOrEmpty(this.buttons)) {
      if (this.onlyText) {
        this.width = 40 * this.buttons.length + 'px'
      } else {
        this.width = 46 * this.buttons.length + 'px'
      }
    }
  }
}
