<template>
  <input
    type="file"
    ref="excelRef"
    title=" "
    :accept="props.accept"
    @change="getFileData"
    class="input-file"
  />
  <el-button type="default" class="ml-sm" style="position: relative" @click.prevent="uploadFile()">
    <lib-icon name="iconfont icon-import mr-sm" />
    导 入
    <input
      type="file"
      ref="excelRef"
      title=" "
      :accept="props.accept"
      @change="getFileData"
      class="input-file"
    />
  </el-button>
</template>
<script lang="ts" setup>
import { reactive, ref, watch, onMounted } from 'vue'
import * as XLSX from 'xlsx'
import moment from 'moment'
import { TableColumn } from '../models/columns/table-column'
import { Util } from '../../../utils/util'
import { tableColumnType } from '../table-util'
import http from '../../../utils/http'
import { toast } from '../../../utils/index'

interface Props {
  accept?: string
  columnData: Array<TableColumn>
  modCode: string // 格式如 Snack$User
}

const props = withDefaults(defineProps<Props>(), {
  accept:
    '.csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  modCode: ''
})
const timeList = ref<Array<any>>([])
let excelNameToKey = {}

watch(
  () => props.columnData,
  val => {
    getTimeList(val)
  }
)

/**
 * 获取时间属性
 * 获取excelNameToKey对象，也就是对象属性格式为 中文属性名:英文属性
 * @param val
 */
function getTimeList(val: Array<any>) {
  timeList.value = []
  if (val.length > 0 || !Util.IsNullOrEmpty(val)) {
    val.forEach(item => {
      if (tableColumnType(item) === 'datetime') {
        timeList.value.push(item.prop)
      }
      if (item.label !== '操作') {
        excelNameToKey[item.label] = item.prop + ''
      }
    })
    return
  }
}

onMounted(() => {
  // 如果没监听到改变，只要为空就调用一次
  if (Util.IsNullOrEmpty(timeList.value) || !excelNameToKey) {
    getTimeList(props.columnData)
  }
})

let excelRef = ref()
const excelData: any[] = reactive([])
const clearFile = () => {
  excelRef.value.value = ''
}

function uploadFile() {
  excelRef.value.dispatchEvent(new MouseEvent('click'))
}

// 处理列表分两种，一种是带表头说明，一种是不带表头说明，这里主要考虑表头说明
const getFileData = ev => {
  const file = ev.target.files[0]
  readerExcel(file)
  clearFile()
}

/**
 * 读取表格文件
 * @param file 上传的excel文件
 */
function readerExcel(file: File) {
  const fileReader = new FileReader()
  fileReader.readAsBinaryString(file) // 以二进制的方法读取表格内容
  fileReader.onload = (event: any) => {
    // 表格内容读取完成
    try {
      const fileData = event.target.result
      const workbook = XLSX.read(fileData, {
        type: 'binary'
      })
      const wsname = workbook.SheetNames[0] // 取excel中的第一个Sheet
      const sheetJson = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]) // 将表格内容生成json数据
      // 此时格式 账号:'zws'
      excelDataToJson(sheetJson) // 标准化JSON数据
    } catch (e) {
      console.log(e)
      return false
    }
  }
}

const emits = defineEmits(['reload'])

/**
 * 作用：去掉excel表头，转为后端真正的数据存储对象
 * @param sheetJson 标准化JSON数据
 */
function excelDataToJson(sheetJson: any[]) {
  if (!sheetJson.length) return
  let result = sheetJson
  const hasExcelHead = !!sheetJson[0].__EMPTY
  if (hasExcelHead) {
    // 带表头说明
    const header = sheetJson.shift() // 删除数组头元素，也就是表格头文字行
    const data: any[] = []
    Object.keys(header).forEach(key => {
      sheetJson.forEach((item, index) => {
        const obj = data[index] || {}
        obj[header[key]] = item[key]
        data[index] = obj
      })
    })
    result = data
  }
  // 将表格对应的文字转换为 key
  result.forEach(item => {
    const newItem: any = {}
    Object.keys(item).forEach(zhkey => {
      newItem.title = zhkey
      const enkey = excelNameToKey[zhkey]
      if (timeList.value.includes(enkey)) {
        newItem[enkey] = formatExcelDate(item[zhkey])
      } else {
        newItem[enkey] = item[zhkey]
      }
    })
    excelData.push(newItem) // 真正传给后端的表单对象数据，还没处理时间
  })
  let urlStr = props.modCode.split('$').join('/')
  const url = `/api/${urlStr}/Save`
  excelData.forEach(item => {
    http.post(url, item).then(
      () => {
        toast('导入成功！')
        emits('reload', true)
      },
      err => {
        toast('导入失败！', 'error')
      }
    )
  })
}

/**
 * excel默认存储的是从1900-01-01作为开始计算日期
 * JavaScript中默认从1970-01-01 08:00:00作为开始计算日期，两者之间相差70年，共25569天，所以用excel的数字减去25569天
 * @param num excel存储的天数
 * @param format 日期格式
 */

function formatExcelDate(num: number, format: string = 'YYYY-MM-DD HH:mm:ss') {
  let utc_days = Math.floor(num - 25569) // 从1970到现在的天数
  let date_info = new Date(utc_days * 86400 * 1000) // 转换成微秒
  let surplus = num - Math.floor(num) + 0.0000001 // 天数误差就是多余小数天
  let total_seconds = Math.floor(86400 * surplus) // 转化为单位秒
  let seconds = total_seconds % 60 // 获取多余秒
  total_seconds -= seconds // 得到的都是能被分整除的秒
  let hours = Math.floor(total_seconds / (60 * 60)) // 获取小时
  let minutes = Math.floor(total_seconds / 60) % 60 // 获取分
  const date = new Date(
    date_info.getFullYear(),
    date_info.getMonth(),
    date_info.getDate(),
    hours,
    minutes,
    seconds
  )
  const result = moment(date).format(format)
  return result
}
</script>
<style lang="scss" scoped>
.input-file {
  width: 0;
  height: 0;
  overflow: hidden;
}
</style>
