<template>
  <div>
    <span class="mr-sm">
      附件分片长度（MB）：
      <el-input-number v-model="chunkSize"></el-input-number>
    </span>
  </div>
  <el-divider />
  <lib-table :columns="columns" :options="options" ref="tableList">
    <template #tablePrefix>
      <input
        type="file"
        :multiple="true"
        class="upload-input"
        @change="handleFileChange"
        ref="uploadFileRef"
      />
      <el-button type="primary" class="mr-sm" @click.prevent="uploadFile()">
        <el-icon class="mr-sm">
          <Upload />
        </el-icon>
        上传附件
      </el-button>
      <el-button type="default" @click="downloadMore()" class="mr-sm">
        <el-icon class="mr-sm">
          <Download />
        </el-icon>
        批量下载
      </el-button>
      <el-button type="danger" @click="deleteMore()" danger>
        <el-icon class="mr-sm">
          <Delete />
        </el-icon>
        批量删除
      </el-button>
    </template>
  </lib-table>
</template>
<script setup lang="ts">
import moment from 'moment'
import { computed, reactive, ref, watch } from 'vue'
import { Download, Upload, Delete } from '@element-plus/icons-vue'
import { ButtonColumn } from '../../table/src/models/columns/button-column'
import { DatetimeColumn } from '../../table/src/models/columns/datetime-column'
import { StringColumn } from '../../table/src/models/columns/string-column'
import { TableColumn } from '../../table/src/models/columns/table-column'
import { TableOption } from '../../table/src/models/table-options'
import { toast } from '../../utils'

let chunkSize = ref(2)
const CHUNK_SIZE = chunkSize.value * 1024 * 1024
let columns: TableColumn[] = [
  new StringColumn({
    prop: 'OriginName',
    label: '文件名',
    editable: true,
    simpleSearch: false,
    advSearch: false
  }),
  new StringColumn({
    prop: 'FileByteLength',
    label: '文件大小',
    width: '100px',
    simpleSearch: false,
    advSearch: false
  }),
  new DatetimeColumn({
    prop: 'CreateTime',
    label: '上传时间',
    simpleSearch: false,
    advSearch: false,
    formatter: (row: any, column: any, cellValue: any, index: any) => {
      const value = moment(new Date(cellValue)).format('YYYY/MM/DD HH:mm')
      return value
    }
  }),
  new ButtonColumn({
    label: '操作',
    buttons: [],
    width: '110px',
    fixed: 'right',
    simpleSearch: false,
    advSearch: false
  })
]
let options = new TableOption({
  url: '/api/File/Attachment/GetList',
  pagination: false,
  simpleSearchEnable: false,
  advSearchEnable: false
})

const container = reactive({
  file: {},
  hash: '',
  fileChunks: []
})
let curPercent = ref(0)
curPercent = computed(() => {
  if (!container.file || container.fileChunks.length <= 0) return 0
  const list = container.fileChunks.map((item: any) => {
    // 防止中断的时候会出现NAN
    const result = item.size * item.progress
    if (isNaN(result)) {
      return 0
    } else {
      return result
    }
  })
  const loaded = list.reduce((acc, cur) => {
    return acc + cur
  }, 0)
  return parseInt((loaded / container.file.size).toFixed(2))
})

watch(curPercent, now => {
  if (curPercent.value < now) {
    curPercent.value = now
  }
})

let uploadFileRef = ref()
function uploadFile() {
  // 隐藏input本身标签的触发，通过额外点击触发
  uploadFileRef.value.dispatchEvent(new MouseEvent('click'))
}
const handleFileChange = event => {
  // 浅复制了原数组中的元素的一个新数组
  const file = Array.prototype.slice.call(event.target.files)
  if (file.length === 0) return
  file.forEach(item => {
    container.file = item
    curPercent.value = 0
    handleUpload()
  })
}
const downloadMore = () => {}
const deleteMore = () => {}

async function handleUpload() {
  if (!container.file) {
    toast('请上传文件', 'error')
  }
  // curStatus.value = UploadStatus.uploading;
  // container.hash = await getFileHash(container.file, CHUNK_SIZE);
  // 不同hash消耗时间
  // await moreHashType();
  const chunks = createFileChunk(container.file)
  // const { uploaded, uploadedList } = await verifyFileChunk(container.file.name, container.hash);
  if (uploaded) {
    toast('文件已存在！', 'error')
  }
  container.fileChunks = chunks.map((chunk: any, index) => {
    const chunkName = container.hash + '-' + index
    return {
      chunk: chunk.file,
      index,
      chunkName: chunkName,
      fileHash: container.hash,
      progress: 0,
      size: chunk.file.size
    }
  })
  // 存入已经存在的切片清单
  // await uploadChunks(uploadedList);
}

// 创建文件分片
function createFileChunk(file: any, size = CHUNK_SIZE) {
  const chunks = []
  let cur = 0
  while (cur < file.size) {
    const data = { file: file.slice(cur, cur + size) } as never
    chunks.push(data)
    cur += size
  }
  return chunks
}

function getFileByteFormat(num) {
  if (num > 1024 * 1024 * 1024) {
    return (num / (1024 * 1024 * 1024)).toFixed(2) + 'GB'
  }
  if (num > 1024 * 1024) {
    return (num / (1024 * 1024)).toFixed(2) + 'MB'
  }
  if (num > 1024) {
    return (num / 1024).toFixed(2) + 'KB'
  }
  return num + 'B'
}
</script>
<style lang="scss" scoped>
.upload-input {
  width: 0;
  height: 0;
  overflow: hidden;
}
</style>
