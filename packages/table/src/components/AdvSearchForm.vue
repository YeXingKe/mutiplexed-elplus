<template>
  <el-form
    v-if="model"
    :validate-on-rule-change="false"
    v-bind="$attrs"
    :model="model"
    :rules="rules"
    ref="form"
  >
    <el-row :gutter="22">
      <template v-for="column in columns">
        <el-col
          :span="2"
          class="mt-sm"
          style="display: flex; justify-content: end; align-items: center"
        >
          <label>{{ column.label }}</label>
        </el-col>
        <el-col :span="24 / colCount()" class="mt-sm">
          <template v-if="column.prop">
            <template v-if="advSearchColumnType(column) === 'datetime'">
              <el-date-picker
                v-model="model[column.prop]"
                type="daterange"
                unlink-panels
                range-separator="到"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                :shortcuts="shortcuts"
              />
            </template>
            <template
              v-else-if="
                advSearchColumnType(column) === 'int' || advSearchColumnType(column) === 'float'
              "
            >
              <el-select
                placeholder=""
                style="max-width: 100px"
                v-model="operator[column.prop]"
                filterable
                default-first-option
              >
                <el-option
                  v-for="item in numberTypeCondition"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <el-input v-model="model[column?.prop]"></el-input>
            </template>
            <template v-else-if="advSearchColumnType(column) === 'enum'">
              <div style="display: flex">
                <el-select
                  placeholder=""
                  style="max-width: 100px"
                  v-model="operator[column.prop]"
                  filterable
                  default-first-option
                >
                  <el-option
                    v-for="item in numberTypeCondition"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
                <el-select placeholder="">
                  <el-option
                    v-for="item in numberTypeCondition"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
            </template>
            <template v-else>
              <el-input v-model="model[column?.prop]">
                <template #prepend>
                  <el-select
                    placeholder=""
                    style="max-width: 100px"
                    v-model="operator[column.prop]"
                    filterable
                    default-first-option
                  >
                    <el-option
                      v-for="item in stringTypeCondition"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </template>
              </el-input>
            </template>
          </template>
        </el-col>
      </template>
    </el-row>
  </el-form>
  <div class="mb-sm" style="display: flex; justify-content: flex-end; align-items: center">
    <el-button type="primary" @click="advSearch">搜索</el-button>
    <el-button @click="resetSearch" class="ml-2">重置</el-button>
  </div>
</template>
<script lang="ts" setup>
import { cloneDeep } from 'lodash-es'
import { PropType, ref, onMounted, computed, toRefs } from 'vue'
import { FormInstance } from '../../../form/types/types'
import { TableColumn } from '../models/columns/table-column'
import { stringTypeCondition, numberTypeCondition } from '../models/consts'
import { advSearchColumnType, getDateRanges, tableColumnType } from '../table-util'
import { AdvSearchValue } from '../models/adv-search-value'
import { Util } from '../../../utils/util'
import dayjs from 'dayjs'

interface FormOptions {
  // 表单项的值
  value?: any
  // 表单项label
  label?: string
  // 表单项的标识
  prop?: string
  // 表单项的占位符
  placeholder?: string
}
let props = defineProps({
  advSearchColumn: {
    type: Array as PropType<TableColumn[]>,
    required: true
  }
})
let columns = computed(() => props.advSearchColumn)
let colCount = () => {
  const width = window.innerWidth as number
  let count: number = 3
  if (width >= 1200) {
    count = 3
  } else if (width >= 768 && width < 1200) {
    count = 2
  } else if (width < 768) {
    count = 1
  }
  return count
}

let advSearchForm = ref<Array<AdvSearchValue>>()
let operator = ref<any>()
let model = ref<any>()
let rules = ref<any>(null)
let form = ref<FormInstance | null>()
let shortcuts = ref<Array<{ text: any; value: () => void }>>(getDateRanges())

// 初始化表单
let initForm = () => {
  if (columns.value && columns.value.length) {
    let o: any = {}
    let m: any = {}
    // let r: any = {}
    columns.value.map((item: FormOptions) => {
      if (advSearchColumnType(item) === 'string') {
        o[item.prop!] = '$in'
      } else if (advSearchColumnType(item) === 'int') {
        o[item.prop!] = '$eq'
      } else {
        o[item.prop!] = item?.value
      }
      m[item.prop!] = item?.value
      // r[item.prop!] = item.rules;
    })
    model.value = cloneDeep(m)
    operator.value = cloneDeep(o)
  }
}

onMounted(() => {
  initForm()
})

const emits = defineEmits(['adv-search'])
const advSearch = () => {
  const temp: Array<AdvSearchValue> = []
  for (let item of columns.value) {
    if (item.prop && model.value[item.prop]) {
      if (advSearchColumnType(item) === 'datetime') {
        const val = toRefs(model.value[item.prop])
        const start = dayjs(new Date(val[0].value)).format('YYYY-MM-DD HH:mm')
        const end = dayjs(new Date(val[1].value)).format('YYYY-MM-DD HH:mm')
        temp.push({
          operator: '$eq',
          field: item.prop,
          value: [start, end]
        })
      } else {
        temp.push({
          operator: operator.value[item.prop] ? operator.value[item.prop] : '$in',
          field: item.prop,
          value: model.value[item.prop]
        })
      }
    }
  }
  if (!Util.IsNullOrEmpty(temp)) {
    advSearchForm.value = temp
    emits('adv-search', temp)
  }
}

const resetSearch = () => {
  for (let item of columns.value) {
    if (item.prop) {
      model[item.prop] = null
    }
  }
}
</script>
<style lang="scss" scoped></style>
