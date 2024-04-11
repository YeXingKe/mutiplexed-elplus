import { Util } from '../../../../utils/util'
import { ViewType } from '../enums/view-type.enum'

import { TableColumn } from './table-column'

export class DatetimeColumn extends TableColumn {
  /**
   * 格式化字符串
   *
   * @type {string}
   * @memberof DatetimeColumn
   */
  formatString?: string = 'YYYY/MM/DD HH:mm'
  /**
   *
   */
  constructor(init?: DatetimeColumn) {
    super()
    if (init) {
      Object.assign(this, init)
    }

    this.advSearchType = ViewType.date

    if (Util.isZeroOrWhiteSpace(this.width)) {
      //MacOS 默认字体需要142px
      this.width = '145px'
    }
  }
}
