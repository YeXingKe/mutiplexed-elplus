import { saveAs } from 'file-saver'
import dayjs from 'dayjs'
import * as XLSX from 'xlsx'
import { WorkBook, WorkSheet } from 'xlsx'

// type: b Boolean, e Error, n Number, d Date, s Text, z Stub
interface Cell {
  v: Date | number | boolean | string // 单元格原始值，无论是否指定类型
  t: string // 导出的数据类型
  z: string // 数字字符串
}

class workBook implements WorkBook {
  SheetNames: string[] = [] // 工作表名
  Sheets: { [sheet: string]: WorkSheet } = {} // 工作表
}
const parseTime = (date: any) => {
  return dayjs(new Date(date)).format('yyyy/MM/DD HH:mm')
}
const sheetFormDataArray = (data: Array<any>) => {
  const ws: { [key: string]: any } = {}
  // 单元格索引范围，为转换A1:B1格式作准备
  const range = {
    s: {
      r: 10000000,
      c: 10000000
    },
    e: {
      r: 0,
      c: 0
    }
  }
  for (let R = 0; R !== data.length; ++R) {
    for (let C = 0; C !== data[R].length; ++C) {
      if (range.s.r > R) range.s.r = R
      if (range.s.c > C) range.s.c = C
      if (range.e.r < R) range.e.r = R
      if (range.e.c < C) range.e.c = C
      const cell: Cell = {
        v: data[R][C],
        t: '',
        z: ''
      }
      if (cell.v === null) continue
      // 将索引为0~index的单元格地址转换为A1格式
      // 暂时不知.0.18.5版本为什么会出现问题;
      const cellRef = XLSX.utils.encode_cell({ r: R, c: C })
      if (typeof cell.v === 'number') cell.t = 'n'
      else if (typeof cell.v === 'boolean') {
        cell.t = 's'
        cell.z = XLSX.SSF.get_table()[14]
        cell.v = Boolean(cell.v).valueOf() ? '是' : '否'
      } else if (new Date(cell.v) instanceof Date && parseTime(cell.v) !== 'Invalid date') {
        cell.t = 's'
        cell.z = XLSX.SSF.get_table()[14]
        cell.v = parseTime(cell.v)
      } else {
        cell.t = 's'
      }
      // 赋值到工作表当前单元格
      ws[cellRef] = cell
    }
  }
  if (range.s.c < 10000000) {
    // 赋值当前工作表为A1格式范围
    ws['!ref'] = XLSX.utils.encode_range(range)
  }
  return ws
}

const s2ab = (s: string) => {
  // ArrayBuffer 构造函数用来创建一个指定字节长度的 ArrayBuffer 对象。
  const buf = new ArrayBuffer(s.length)
  //  位无符号整型数组，创建时内容被初始化为 0。
  // 创建完后，可以以对象的方式或使用数组下标索引的方式引用数组中的元素
  const view = new Uint8Array(buf)
  for (let i = 0; i !== s.length; ++i) {
    view[i] = s.charCodeAt(i) & 0xff
  }
  return buf
}

// 可以考虑一下其他方法
export const exportJson2Excel = (
  header: Array<string>,
  data: any,
  filename = '列表数据',
  bookType = 'xlsx',
  autoWidth: true,
  merges?: Array<any>
) => {
  data = [...data]
  data.unshift(header) // 数组开头添加元素
  const wsName = 'SheetJs' // 工作表名字
  const wb = new workBook() // 创建工作簿
  const ws = sheetFormDataArray(data) // 对导出单元格数据值格式做处理

  if (merges && merges.length > 0) {
    // 单元格合并
    if (!ws['!merges']) {
      ws['!merges'] = []
    }
    merges.forEach(item => {
      ws['!merges'].push(XLSX.utils.decode_range(item))
    })
  }

  if (autoWidth) {
    // 设置worksheet每列的最大宽度
    const colWidth = data.map((row: any) =>
      row.map((val: any) => {
        // 先判断是否为 null/undefined
        if (val === null) {
          return {
            wch: 10
          }
          // 再判断是否为中文
        } else if ((val + '').toString().charCodeAt(0) > 255) {
          return {
            wch: val.toString().length * 2
          }
        } else {
          return {
            wch: (val + '').toString().length
          }
        }
      })
    )

    // 以第一行为初始值
    const result = colWidth[0]
    for (let i = 1; i < colWidth.length; i++) {
      for (let j = 0; j < colWidth[i].length; j++) {
        if (result[j].wch < colWidth[i][j].wch) {
          result[j].wch = colWidth[i][j].wch
        }
      }
    }
    // 为列赋值
    ws['!cols'] = result
  }

  wb.SheetNames.push(wsName)
  wb.Sheets[wsName] = ws

  const wbout = XLSX.write(wb, {
    bookType: bookType as any,
    bookSST: false,
    type: 'binary'
  })

  const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' })
  saveAs(blob, `${filename}.${bookType}`)
}
