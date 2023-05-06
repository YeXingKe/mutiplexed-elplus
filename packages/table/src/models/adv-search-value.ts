import { ViewType } from './enums/view-type.enum'

export class AdvSearchValue {
  logic?: 'or' | 'and'
  dataType?: ViewType
  field?: string
  operator?: string
  value?: any
}
