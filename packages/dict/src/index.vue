<template>
  <div class="dict-setting">
    <el-row :gutter="24">
      <el-col :span="24">
        <el-table :data="tableData" max-height="250" :fit="false">
          <el-table-column fixed="left" label="字典名称" width="120">
            <template #default="scope">
              <el-input v-model="scope.row.name" v-if="isEdit[scope.$index]"></el-input>
              <span v-else>{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="字典值" width="300">
            <template #default="scope">
              <el-input v-model="scope.row.value" v-if="isEdit[scope.$index]"></el-input>
              <span v-else>{{ scope.row.value }}</span>
            </template>
          </el-table-column>
          <el-table-column label="启用" width="120">
            <template #default="scope">
              <el-switch v-model="scope.row.enable" :disabled="!isEdit[scope.$index]" />
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="120">
            <template #default="scope">
              <div style="display: felx">
                <template v-if="!isEdit[scope.$index]">
                  <el-button type="primary" text plain @click="editRow(scope)">
                    <el-icon-edit style="width: 1.5em; height: 1.5em"
                  /></el-button>
                  <el-button type="danger" text class="ml-lm" plain @click="deleteRow(scope)">
                    <el-icon-delete style="width: 1.5em; height: 1.5em"
                  /></el-button>
                </template>
                <template v-else>
                  <el-button type="primary" text plain>
                    <el-icon-check style="width: 1.5em; height: 1.5em" @click="saveRow(scope)"
                  /></el-button>
                  <el-button type="danger" text class="ml-lm" plain>
                    <el-icon-close style="width: 1.5em; height: 1.5em" @click="cancelRow(scope)"
                  /></el-button>
                </template>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <el-button class="mt-4" style="width: 100%" @click="onAddItem" v-show="!hasEdit()">
          添 加
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
import { PropType, ref } from 'vue'

interface DictType {
  name: string
  value: string
  enable: boolean
}

const props = defineProps({
  dictData: {
    type: Array as PropType<any>,
    default: []
  }
})
const tableData = ref(props.dictData)
const isEdit = ref<Array<boolean>>(new Array(tableData.value.length).fill(false))
const editRow = scope => {
  isEdit.value[scope.$index] = true
}
const deleteRow = scope => {
  isEdit.value[scope.$index] = false
  tableData.value.splice(scope.$index, 1)
}
const saveRow = scope => {
  isEdit.value[scope.$index] = false
  tableData.value[scope.$index] = scope.row
}
const cancelRow = scope => {
  isEdit.value[scope.$index] = false
}
console.log(isEdit.value, isEdit.value)
const onAddItem = () => {
  isEdit.value[tableData.value.length] = true
  tableData.value.push({
    name: '',
    value: '',
    enable: true
  })
}
const hasEdit = () => {
  return isEdit.value.some(item => item)
}
</script>
<style lang="scss" scoped>
::v-deep .vp-doc table {
  margin: 0 !important;
}

:deep(.el-button) {
  display: inline-block;
  padding: 8px 0 !important;
}
</style>
