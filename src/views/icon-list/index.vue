<template>
  <el-button type="primary" @click="dialogVisible = true">选择图标</el-button>
  <svg name="../../assets/icons/logo.svg"></svg>
  <div class="m-choose-icon-dialog-body-height">
    <el-dialog v-model="dialogVisible" width="40%">
      <el-scrollbar>
        <div class="icon-container">
          <div
            v-for="(item, index) in icons"
            :key="index"
            class="icon-item"
            @click="clickIcon(item)"
          >
            <div class="icon">
              <template v-if="iconType === 'Element'">
                <!-- <component :is="`el-icon-${toLine(item)}`"></component> -->
                <Icon :name="`el-icon-${toLine(item)}`" />
              </template>
              <template v-else-if="iconType === 'Iconfont'">
                <!-- <i :class="`iconfont ${item}`" style="font-size: 30px"></i> -->
                <Icon :name="`iconfont ${item}`" />
              </template>
              <template v-else-if="iconType === 'FontAwesome'">
                <!-- <i :class="`fa ${item}`" style="font-size: 30px"></i> -->
                <Icon :name="`fa ${item}`" />
              </template>
              <template v-else-if="iconType === 'Local'">
                <Icon :name="item" />
              </template>
            </div>
            <div class="text">{{ item }}</div>
          </div>
        </div>
      </el-scrollbar>
      <template #header>
        <div class="dialog-title">
          <span style="color: #606266; font-size: 16px">选择图标</span>
          <el-radio-group
            v-model="iconType"
            size="small"
            style="margin-left: 10px"
            @change="iconTypeChange($event)"
          >
            <el-radio-button label="Element" />
            <el-radio-button label="Iconfont" />
            <el-radio-button label="FontAwesome" />
            <el-radio-button label="Local" />
          </el-radio-group>
        </div>
      </template>
      <template #footer>
        <span class="filter-footer">
          <el-input
            v-model="filterInput"
            class="w-50 m-2"
            placeholder="Please Input"
            :suffix-icon="Search"
          />
        </span>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
// import { useCopy } from '~/hooks/useCopy';
import { toLine } from '~/utils'
import {
  getAwesomeIconfontName,
  getElementPlusIconfontNames,
  getIconfontNames,
  getLocalIconfontNames
} from '~/utils/iconfont'
import Icon from '~/components/icon/src/index.vue'
import svg from '~/components/icon/src/svg/index.vue'
import { Search } from '@element-plus/icons-vue'

const iconfonts = ref([])
const fontAwesomes = ref([])
const elementIcons = ref([])
const localIcons = ref([])
const icons = ref([]) // 默认element
const dialogVisible = ref(false)
const iconType = ref('Element')
const filterInput = ref('')

const iconfont = async () => {
  await getElementPlusIconfontNames().then((data: any) => {
    elementIcons.value = data
    icons.value = data // 默认值
  })
  await getIconfontNames().then((data: any) => {
    iconfonts.value = data
  })
  await getAwesomeIconfontName().then((data: any) => {
    fontAwesomes.value = data
  })
  await getLocalIconfontNames().then((data: any) => {
    localIcons.value = data
  })
}
onMounted(() => {
  iconfont()
})

const setIconsInfo = (type: string = iconType.value, item: string = '') => {
  let text = `<el-icon-${item} />`
  switch (type) {
    case 'Iconfont':
      icons.value = iconfonts.value
      text = `<i class="iconfont ${item}"></i>`
      break
    case 'FontAwesome':
      icons.value = fontAwesomes.value
      text = `<i class="fa ${item}"></i>`
      break
    case 'Local':
      icons.value = localIcons.value
      text = `<Icon :name="${item}" />`
      break
    default:
      icons.value = elementIcons.value
      break
  }
  return text
}

const clickIcon = (item: string) => {
  let text = setIconsInfo(item)
  // useCopy(text); // 复制文本
  dialogVisible.value = false // 隐藏dialog
}

const iconTypeChange = (type: string) => {
  setIconsInfo(type)
}
</script>
<style lang="scss" scoped>
.icon-container {
  // height: 360px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.icon-item {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 15px;
}

.icon {
  height: 70px;
  line-height: 60px;
}

.text {
  height: 20px;
}

svg {
  width: 2em;
  height: 2em;
}

.dialog-title {
  display: flex;
  align-items: center;
}
</style>
