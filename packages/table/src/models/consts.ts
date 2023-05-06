export class Consts {}
export const cacheModule = 'grid'
export const MaxSearchStrLength = 300
export const stringTypeCondition = [
  { label: '包含', value: '$in' },
  { label: '不包含', value: '$nin' },
  { label: '=', value: '$eq' },
  { label: '!=', value: '$ne' }
]
export const numberTypeCondition = [
  { label: '=', value: '$eq' },
  { label: '!=', value: '$ne' },
  { label: '>', value: '$gt' },
  { label: '>=', value: '$gte' },
  { label: '<', value: '$lt' },
  { label: '<=', value: '$lte' }
]
export const textTypeCondition = [{ label: '包含', value: '$in' }]

export const dateRange = [
  { value: 'day', label: '今天' },
  { value: 'preDay', label: '昨天' },
  { value: 'week', label: '本周' },
  { value: 'preWeek', label: '上周' },
  { value: 'month', label: '本月' },
  { value: 'preMonth', label: '上月' },
  { value: 'quarter', label: '本季度' },
  { value: 'preQuarter', label: '上季度' },
  { value: 'year', label: '本年' },
  { value: 'preYear', label: '上一年' }
]
