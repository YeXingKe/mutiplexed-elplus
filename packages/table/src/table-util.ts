import moment from 'moment'
import { Util } from '../../utils/util'
import { ButtonColumn } from './models/columns/button-column'
import { DatetimeColumn } from './models/columns/datetime-column'
import { EnumColumn } from './models/columns/enum-column'
import { FloatColumn } from './models/columns/float-column'
import { IntColumn } from './models/columns/int-column'
import { StringColumn } from './models/columns/string-column'
import { TableColumn } from './models/columns/table-column'

export const tableColumnType = (column: TableColumn) => {
  if (column instanceof DatetimeColumn && Util.isUndefinedOrNull(column.slot)) {
    return 'datetime'
  } else if (column instanceof ButtonColumn && Util.isUndefinedOrNull(column.slot)) {
    return 'button'
  } else if (column instanceof EnumColumn && Util.isUndefinedOrNull(column.slot)) {
    return 'enum'
  } else if (column.formatter) {
    return 'formatter'
  } else if (column.slot) {
    return 'slot'
  } else {
    return 'normal'
  }
}

export const advSearchColumnType = (column: TableColumn) => {
  if (column instanceof StringColumn) {
    return 'string'
  } else if (column instanceof DatetimeColumn) {
    return 'datetime'
  } else if (column instanceof IntColumn) {
    return 'int'
  } else if (column instanceof FloatColumn) {
    return 'float'
  } else if (column instanceof EnumColumn) {
    return 'enum'
  }
}

export const getDateRanges = () => {
  const preDay = moment().subtract(1, 'day'),
    preWeek = moment().subtract(1, 'week'),
    preMon = moment().subtract(1, 'month'),
    preQua = moment().subtract(1, 'quarter'),
    preYear = moment().subtract(1, 'year')
  return [
    {
      text: '今天',
      value: () => [moment().toDate(), moment().toDate()]
    },
    {
      text: '昨天',
      value: () => [preDay.toDate(), preDay.toDate()]
    },
    {
      text: '本周',
      value: () => [moment().startOf('week').toDate(), moment().endOf('week').toDate()]
    },
    {
      text: '下周',
      value: () => [preWeek.startOf('week').toDate(), preWeek.endOf('week').toDate()]
    },
    {
      text: '本月',
      value: () => [moment().startOf('month').toDate(), moment().endOf('month').toDate()]
    },
    {
      text: '上月',
      value: () => [preMon.startOf('month').toDate(), preMon.endOf('month').toDate()]
    },
    {
      text: '本季',
      value: () => [moment().startOf('quarter').toDate(), moment().endOf('quarter').toDate()]
    },
    {
      text: '上季',
      value: () => [preQua.startOf('quarter').toDate(), preQua.endOf('quarter').toDate()]
    },
    {
      text: '本年',
      value: () => [moment().startOf('year').toDate(), moment().endOf('year').toDate()]
    },
    {
      text: '本年',
      value: () => [preYear.startOf('year').toDate(), preYear.endOf('year').toDate()]
    }
  ]
}
