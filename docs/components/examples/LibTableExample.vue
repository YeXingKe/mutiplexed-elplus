<template>
  <lib-table v-model:editRowIndex="editRowIndex" :data="testData" :columns="columns" :options="options" is-edit-row
    pagination stripe border @confirm="confirm" @size-change="handleSizeChange" @current-change="handleCurrentChange">
    <template #tablePrefix>
      <el-button type="primary">新 增</el-button>
      <el-button type="danger">删 除</el-button>
    </template>

    <template #IsActive="{ scope }">
      <el-switch v-model="scope.row.IsActive" :active-value="true" :inactive-value="false">
      </el-switch>
    </template>

    <template #editRow="scope">
      <el-button size="small" type="primary" @click="sure(scope.scope)"> 确认 </el-button>
      <el-button size="small" type="danger">取消</el-button>
    </template>

    <template #action="scope">
      <el-button size="small" type="primary" @click="edit(scope.scope)"> 编辑 </el-button>
      <el-button size="small" type="danger">删除</el-button>
    </template>
  </lib-table>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
import { DatetimeColumn, StringColumn, TableOption, TableColumn, ButtonColumn } from 'mutiplexed-elplus';
import { ref, onMounted } from 'vue'

let columns: TableColumn[] = [
  new StringColumn({
    prop: 'Account',
    label: '账号',
    width: '100px',
    fixed: 'left',
    editable: true,
    simpleSearch: true,
    advSearch: true
  }),
  new StringColumn({
    prop: 'UserName',
    label: '用户名',
    width: '100px',
    simpleSearch: true,
    advSearch: true
  }),
  new StringColumn({
    prop: 'Image',
    label: '照片',
    simpleSearch: false,
    advSearch: false
  }),
  new StringColumn({
    prop: 'IsActive',
    label: '是否启用',
    simpleSearch: false,
    advSearch: false
  }),
  new DatetimeColumn({
    prop: 'CreateTime',
    label: '创建时间',
    simpleSearch: false,
    advSearch: false,
    formatter: (row: any, column: any, cellValue: any, index: any) => {
      const value = dayjs(new Date(cellValue)).format('YYYY/MM/DD HH:mm')
      return value
    }
  }),
  new ButtonColumn({
    label: '操作',
    buttons: [],
    onlyText: true,
    simpleSearch: false,
    advSearch: false
  })
]
let options = new TableOption({
  url: '',
  importAndExportOption: {
    ExportEnable: true,
    ImportEnable: true,
    ModCode: 'Snacks$User',
    Name: '用户列表',
    Title: '用户信息表',
  }
})
const testData = ref([
  {
    Account: 'zhangsan',
    UserName: '张三',
    Image: '',
    IsActive: true,
    CreateTime: '2023-04-12',
  },
  {
    Account: 'lisi',
    UserName: '李四',
    Image: '',
    IsActive: false,
    CreateTime: '2020-04-12',
  },
  {
    Account: 'wanger',
    UserName: '王二',
    Image: '',
    IsActive: true,
    CreateTime: '2023-04-12',
  },
  {
    Account: '周如',
    UserName: '周五',
    Image: '',
    IsActive: true,
    CreateTime: '2021-04-12',
  }
])
let editRowIndex = ref<string>('')

let current = ref<number>(1)
let pageSize = ref<number>(10)
let handleSizeChange = (val: number) => {
  pageSize.value = val
  // getData()
}
let handleCurrentChange = (val: number) => {
  current.value = val
  // getData()
}
onMounted(() => {
  // getData()
})

let edit = (scope: any) => {
  // console.log(scope)
  editRowIndex.value = 'edit'
}
let sure = (scope: any) => {
  console.log(scope)
}
let confirm = (scope: any) => {
  // console.log(scope)
}
</script>

<style scoped>
svg,
img {
  display: inline;
  width: 1em;
  height: 1em;
}
</style>
