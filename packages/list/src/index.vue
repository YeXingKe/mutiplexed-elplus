<template>
  <div class="list-tabs__item">
    <el-tabs>
      <el-tab-pane v-for="(item, index) in list" :key="index" :label="item.title">
        <el-scrollbar max-height="300px">
          <div class="container" v-for="(jtem, jndex) in item.content" :key="jndex">
            <div class="avatar">
              <el-avatar :size="36" :src="jtem.avatar"></el-avatar>
            </div>
            <div class="content">
              <div>{{ jtem.title }}</div>
              <div class="mt-sm">{{ jtem.time }}</div>
            </div>
          </div>
        </el-scrollbar>
        <div class="actions">
          <el-button size="default" text v-for="(item, index) in actions" :key="index">
            <component :is="`el-icon-${item.icon}`" class="mr-sm"></component>
            <span></span>
            <span>{{ item.text }}</span>
          </el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from 'vue'
import { ListOptions, ActionOptions } from './types'

let props = defineProps({
  // 列表内容
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true
  },
  // 操作内容
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => []
  }
})

console.log(props.list)
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.content {
  font-size: 14px;
  margin-left: 5px;
}

.actions {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #eee;
  background-color: #fff;
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
