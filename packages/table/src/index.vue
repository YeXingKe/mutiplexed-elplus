<template>
  <template v-if="tableOptions.simpleSearchEnable && showAdvSearch">
    <AdvSearchForm
      :advSearchColumn="advSearchColumn"
      ref="advSearchFormRef"
      @adv-search="getAdvFormData"
    ></AdvSearchForm>
  </template>

  <div class="mb-sm" style="display: flex; justify-content: space-between">
    <div>
      <slot name="tablePrefix"></slot>
      <template v-if="importAndExportOption.importEnable">
        <ImportData
          :columnData="tableColumns"
          :modCode="importAndExportOption.modCode"
          @reload="importSuccess"
        />
      </template>
      <template v-if="importAndExportOption.exportEnable">
        <el-button type="default" class="ml-sm" @click="handleExport()">
          <lib-icon name="iconfont icon-export mr-sm" />
          导 出
        </el-button>
      </template>
    </div>
    <!--
    <div style="margin-left: auto;display: flex;">
      <slot name="tableSuffix"></slot>
      <template v-if="tableOptions.simpleSearchEnable && showSimpleSearch">
        <div style="display: flex;">
          <el-dropdown class="mr-sm" @command="more($event)">
            <el-button type="default"><el-icon-morefilled /></el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="refresh">刷新</el-dropdown-item>
                <el-dropdown-item command="tableSetting">
                  列表设置
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <el-input v-model="simpleSearchText" :placeholder="simplePlaceholder" :suffix-icon="Search"
            @keyup.enter="simpleSearch()" />
        </div>
      </template>
      <template v-if="tableOptions.advSearchEnable">
        <el-button type="primary" text @click="showAdvSearch = !showAdvSearch">
          {{ showAdvSearch ? '收起' : '展开' }}
          <el-icon-arrowup v-if="showAdvSearch" />
          <el-icon-arrowdown v-else />
        </el-button>
      </template>
    </div> -->

    <div style="display: flex">
      <template v-if="tableOptions.simpleSearchEnable && showSimpleSearch">
        <el-popover placement="top-start" :width="200" trigger="hover" :content="simplePlaceholder">
          <template #reference>
            <el-input
              v-model="simpleSearchText"
              :placeholder="simplePlaceholder"
              :suffix-icon="Search"
              @keyup.enter="simpleSearch()"
              clearable
            />
          </template>
        </el-popover>
      </template>
      <el-radio-group v-model="radioType" @change="radioTypeChange" class="ml-sm">
        <el-button type="default" size="default" @click="refresh"> <el-icon-refresh /></el-button>
        <!-- <el-radio-button @click="refresh" label="refresh">
          <template #default>
            <el-icon-refresh />
          </template>
        </el-radio-button> -->

        <el-popover placement="bottom" title="列表设置" trigger="click">
          <template #reference>
            <!-- <el-radio-button label="grid">
              <el-icon-grid />
            </el-radio-button> -->
            <el-button type="default" size="default"> <el-icon-grid /></el-button>
          </template>
          <template #default>
            <el-checkbox-group v-model="selectedShowColumns">
              <el-checkbox
                v-for="(item, index) in originColumns"
                v-model="item.visible"
                :label="item.label"
                :checked="item.visible"
              />
            </el-checkbox-group>
          </template>
        </el-popover>

        <el-dropdown
          @command="search($event)"
          trigger="hover"
          v-if="tableOptions.simpleSearchEnable || tableOptions.advSearchEnable"
        >
          <!-- <el-radio-button label="search">
            <el-icon-search />
          </el-radio-button> -->
          <el-button type="default" size="default"><el-icon-search /></el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="simple" v-if="tableOptions.simpleSearchEnable"
                >模糊搜索</el-dropdown-item
              >
              <el-dropdown-item command="adv" v-if="tableOptions.advSearchEnable"
                >高级搜索</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-radio-group>
    </div>
  </div>

  <el-table
    :data="tableData"
    border
    style="width: 100%"
    v-loading="isLoading"
    :element-loading-text="tableOptions?.elementLoadingText"
    :element-loading-spinner="tableOptions?.elementLoadingSpinner"
    :element-loading-background="tableOptions?.elementLoadingBackground"
    :element-loading-svg="tableOptions?.elementLoadingSvg"
    :element-loading-svg-view-box="tableOptions?.elementLoadingSvgViewBox"
    @row-click="rowClick"
    v-bind="$attrs"
  >
    <!-- 默认插槽 -->
    <slot></slot>
    <template v-for="(item, index) in tableColumns" :key="index">
      <!-- 时间项 -->
      <el-table-column
        v-if="tableColumnType(item) === 'datetime'"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :align="item.align"
        :column-key="item.prop"
        v-bind="item"
      >
        <template #header v-if="item.isShowHeader">
          <slot name="header"></slot>
        </template>
      </el-table-column>

      <!-- 操作项 -->
      <el-table-column
        v-else-if="tableColumnType(item) === 'button'"
        :prop="'buttons'"
        :label="item.label"
        :width="item.width"
        :align="item.align"
        :column-key="item.prop"
        v-bind="item"
      >
        <template #header v-if="item.isShowHeader">
          <slot name="header"></slot>
        </template>
        <template #default="scope">
          <slot name="editRow" :scope="scope" v-if="scope.row.rowEdit"></slot>
          <slot name="action" :scope="scope" v-else></slot>
        </template>
      </el-table-column>

      <!-- 数组项 -->
      <el-table-column
        v-else-if="tableColumnType(item) === 'enum'"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :align="item.align"
        :column-key="item.prop"
        v-bind="item"
      >
        <template #header v-if="item.isShowHeader">
          <slot name="header"></slot>
        </template>
      </el-table-column>

      <!-- 其他 -->
      <el-table-column
        v-else
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :align="item.align"
        :column-key="item.prop"
        v-bind="item"
      >
        <template #header v-if="item.isShowHeader">
          <slot name="header"></slot>
        </template>
        <template #default="scope">
          <!-- 存在行编辑 -->
          <template v-if="scope.row.rowEdit">
            <el-input size="small" v-model="scope.row[item.prop!]"></el-input>
          </template>
          <template v-else>
            <!-- 单元格编辑 -->
            <template v-if="scope.$index + scope.column.id === currentEdit">
              <div style="display: flex">
                <el-input size="small" v-model="scope.row[item.prop!]"></el-input>
                <div>
                  <slot name="cellEdit" v-if="$slots.cellEdit" :scope="scope"></slot>
                  <div class="action-icon" v-else>
                    <el-icon-check class="check" @click.stop="check(scope)"></el-icon-check>
                    <el-icon-close class="close" @click.stop="close(scope)"></el-icon-close>
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
              <span v-else>{{ scope.row[item.prop!] }}</span>
              <!-- 单元格编辑图标 -->
              <component
                :is="`el-icon-${toLine(item?.editIcon)}`"
                class="edit"
                v-if="item.editable"
                @click.stop="clickEditIcon(scope)"
              ></component>
            </template>
          </template>
        </template>
      </el-table-column>
    </template>

    <template #append>
      <slot name="append"> </slot>
    </template>

    <template #empty>
      <div class="table-empty">
        <slot name="empty">
          <!-- <img src="../../../assets/images/notData.png" alt="notData" /> -->
          <div>暂无数据</div>
        </slot>
      </div>
    </template>
  </el-table>
  <!-- 列表翻页 -->
  <div v-if="tableOptions.pagination && !isLoading" class="pagination" :style="{ justifyContent }">
    <slot name="pagination">
      <el-pagination
        v-model:current-page="page.currentPage"
        :page-sizes="page.pageSizes"
        :page-size="page.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.total"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </slot>
  </div>
</template>
<script lang="ts" setup>
import { computed, reactive } from '@vue/reactivity'
import { onMounted, PropType, ref, watch, onBeforeMount, nextTick } from 'vue'
import { toast, toLine } from '../../utils'
import cloneDeep from 'lodash-es/cloneDeep'
import { exportJson2Excel } from './export2Excel'
import { Search } from '@element-plus/icons-vue'
import http from '../../utils/http'
import { TableColumn } from './models/columns/table-column'
import { TableOption } from './models/table-options'
import { RequestParams } from './models/request-params'
import { Util } from '../../utils/util'
import { tableColumnType } from './table-util'
import AdvSearchForm from './components/AdvSearchForm.vue'
import { AdvSearchValue } from './models/adv-search-value'
import ImportData from './components/ImportData.vue'
import moment from 'moment'

let props = defineProps({
  // 表格配置
  columns: {
    type: Array as PropType<TableColumn[]>,
    required: true
  },
  // 表格数据
  data: {
    type: Array as PropType<TableColumn[]>,
    default: []
  },
  reload: {
    type: Boolean,
    default: false
  },
  options: {
    type: Object as PropType<TableOption>,
    required: true
  },
  // 编辑行按钮的标识
  editRowIndex: {
    type: String,
    default: ''
  },
  // 是否可以编辑行
  isEditRow: {
    type: Boolean,
    default: false
  },
  beforeRequest: {
    type: Function,
    default: (tableRequest: RequestParams) => tableRequest
  },
  afterRequest: {
    type: Function,
    default: (result: any) => result
  }
})

// let tableKey = ref('table');// 定义key为了重新刷表格
let radioType = ref(0)
let isLoading = ref(false)
let showAdvSearch = ref(false)
let showSimpleSearch = ref(false)
let advSearchColumn = computed(() => props.columns.filter(item => item.advSearch))
let originColumns = computed(() => props.columns)
let tableColumns = ref(props.columns.filter(item => item.visible))
let selectedShowColumns = ref<Array<any>>([])
let tableOptions = computed(
  () => props.options as TableOption // props.options中没有传的参数，按默认处理
)

const importAndExportOption = reactive({
  exportEnable: tableOptions.value?.importAndExportOption?.ExportEnable,
  importEnable: tableOptions.value?.importAndExportOption?.ImportEnable,
  modCode: tableOptions.value?.importAndExportOption?.ModCode
})
let page = reactive({
  currentPage: tableOptions.value.currentPage,
  pageSize: tableOptions.value.pageSize,
  pageSizes: tableOptions.value.pageSizes,
  total: tableOptions.value.total,
  filters: [] as AdvSearchValue[]
})

let currentEdit = ref<string>('')
let simpleSearchText = ref<string>('')
let tempPlaceholder = computed(() =>
  props.columns.filter(item => item.simpleSearch && item.label).map(item => item.label)
)
let simplePlaceholder = ref<string>(tempPlaceholder.value.join('，'))

// 表格分页的排列方式
let justifyContent = computed(() => {
  if (tableOptions.value.paginationAlign === 'left') return 'flex-start'
  else if (tableOptions.value.paginationAlign === 'right') return 'flex-end'
  else return 'center'
})

let emits = defineEmits([
  'confirm',
  'cancel',
  'update:editRowIndex',
  'size-change',
  'refresh',
  'current-change',
  'before-request',
  'after-request'
])

// 拷贝一份表格的数据，表格数据可传可不传
let tableData = ref<any[]>(props?.data ? cloneDeep(props.data) : [])
// 拷贝一份按钮的标识
let cloneEditRowIndex = ref<string>(props.editRowIndex)
// 监听的标识
let watchData = ref<boolean>(false)

// 如果data的数据变了 要重新给tableData赋值
// 只需要监听一次就可以了
let stopWatchData = watch(
  () => props.data,
  val => {
    if (val.length > 0 || !Util.IsNullOrEmpty(val)) {
      getData()
      return
    }
    isLoading.value = !val || !val.length
    watchData.value = true
    tableData.value = val as any
    page.total = val?.length
    tableData.value.map(item => {
      item.rowEdit = false
    })
    if (watchData.value) stopWatchData()
  },
  { deep: true }
)

// 监听
watch(
  () => props.editRowIndex,
  val => {
    if (val) cloneEditRowIndex.value = val
  }
)

// 监听
watch(selectedShowColumns, val => {
  if (val) {
    nextTick(() => {
      let temp = originColumns.value.map(item => {
        if (val.includes(item.label)) {
          item.visible = true
        } else {
          item.visible = false
        }
        return item
      })
      tableColumns.value = temp.filter(item => item.visible)
      // tableKey.value = 'new-table';
    })
  }
})

// 监听
watch(
  () => props.reload,
  val => {
    if (val) getData()
  }
)

const bRequest = props.beforeRequest()
function getData() {
  isLoading.value = true
  const params = bRequest
    ? bRequest
    : { currentPage: page.currentPage, pageSize: page.pageSize, filters: page.filters }
  const { url } = tableOptions.value
  if (url) {
    http.post(url, params).then(
      (data: any) => {
        tableData.value = data.Data.Data
        page.total = data.Data.Total
        isLoading.value = false
      },
      err => {
        isLoading.value = false
      }
    )
  } else {
    isLoading.value = false
  }
}

const importSuccess = val => {
  if (val) {
    refresh()
  }
}

onBeforeMount(() => {
  if (Util.IsNullOrEmpty(props.data)) {
    getData()
  }
})

onMounted(() => {
  tableData.value.map(item => {
    item.rowEdit = false
  })
})

// 点击确认
let check = (scope: any) => {
  emits('confirm', scope)
  currentEdit.value = ''
}
// 点击取消
let close = (scope: any) => {
  emits('cancel', scope)
  currentEdit.value = ''
}

// 分页的每一页数据变化
let handleSizeChange = (val: number) => {
  emits('size-change', val)
  page.pageSize = val
  refresh()
}
// 分页页数改变
let handleCurrentChange = (val: number) => {
  emits('current-change', val)
  page.currentPage = val
  refresh()
}

function refresh() {
  getData()
}

// 点击编辑图标
let clickEditIcon = (scope: any) => {
  // 会做一个判断 判断是否当前单元格被点击了
  // 拼接$index和column的id
  currentEdit.value = scope.$index + scope.column.id
}

// 点击行的事件
let rowClick = (row: any, column: any) => {
  // 判断是否是点击的操作项
  if (column.property === 'buttons') {
    if (props.isEditRow && cloneEditRowIndex.value === props.editRowIndex) {
      // 编辑行的操作
      row.rowEdit = !row.rowEdit
      // 重置其他数据的rowEdit
      tableData.value.map(item => {
        if (item !== row) item.rowEdit = false
      })
      // 重置按钮的标识
      if (!row.rowEdit) emits('update:editRowIndex', '')
    }
  }
}

const handleExport = () => {
  const headers = tableColumns.value.map((item: any) => item.label)
  const fields = tableColumns.value.map((item: any) => item.prop)
  const data = filterFields(fields)
  if (data.length > 0) {
    exportJson2Excel(headers, data, tableOptions.value.importAndExportOption?.Name, 'xlsx', true)
  } else {
    toast('没有数据导出！', 'error')
  }
}

function filterFields(fields: Array<any>) {
  const data = tableData.value.map((data: any) => fields.map((key: string) => data[key]))
  return data
}

/**
 * 列表配置布局方案一：下拉框
 */
const search = (ev: any) => {
  // if (ev === 'refresh') {
  //   refresh();
  // } else {
  //   tableSetting();
  // }
  if (ev === 'simple') {
    showSimpleSearch.value = !showSimpleSearch.value
  } else {
    showAdvSearch.value = !showAdvSearch.value
  }
}

/**
 * 列表配置布局方案二：radio
 */
const radioTypeChange = ev => {
  if (ev === 'refresh') {
    refresh()
  }
}

const formatter = (row: any, column: any, cellValue: any, index: any) => {
  const value = moment(new Date(cellValue)).format('YYYY/MM/DD HH:mm')
  return value
}

const getAdvFormData = ev => {
  page.filters = ev
  refresh()
}

const simpleSearch = () => {
  const simpleSearchList = tableColumns.value.filter((item: TableColumn) => item.simpleSearch)
  let temp: Array<AdvSearchValue> = []
  if (!Util.IsNullOrEmpty(simpleSearchList)) {
    for (let item of simpleSearchList) {
      if (item.prop && item.simpleSearch && simpleSearchText.value) {
        temp.push({
          operator: '$regex',
          field: item.prop,
          value: simpleSearchText.value
        })
      }
    }
  }
  if (!Util.IsNullOrEmpty(temp)) {
    page.filters = temp
    refresh()
  }
}
</script>

<style lang="scss" scoped>
.edit {
  width: 1em;
  height: 1em;
  position: relative;
  top: 2px;
  left: 12px;
  cursor: pointer;
}

.action-icon {
  display: flex;

  svg {
    width: 1em;
    height: 1em;
    margin-left: 8px;
    position: relative;
    top: 8px;
    cursor: pointer;
  }

  .check {
    color: red;
  }

  .close {
    color: green;
  }
}

.pagination {
  margin-top: 16px;
  display: flex;
}

svg,
img {
  display: inline;
  width: 1em;
  height: 1em;
}

:deep(.el-radio-group) {
  flex-wrap: nowrap;
}

:deep(.el-radio-button:first-child:last-child .el-radio-button__inner) {
  border-radius: 0;
}
</style>
