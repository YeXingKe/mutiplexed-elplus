import { Util } from '../../../../utils/util'
import { ViewType } from '../enums/view-type.enum'
import { EnumOptions } from './enum-options'
import { TableColumn } from './table-column'

export class EnumColumn extends TableColumn {
  enumOptions?: () => Promise<EnumOptions>

  multiple?: boolean = false
  constructor(init?: EnumColumn) {
    super()
    if (init) {
      Object.assign(this, init)
    }

    this.simpleSearch = false
    this.advSearch = false
    this.advSearchType = ViewType.enum

    if (Util.isZeroOrWhiteSpace(this.width)) {
      //MacOS 默认字体需要142px
      this.width = '142px'
    }
  }
}
