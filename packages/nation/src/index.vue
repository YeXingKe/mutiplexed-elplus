<template>
  <el-select v-model="selectedValue" placeholder="请选择" clearable filterable v-bind="$attrs">
    <slot name="prefix"></slot>
    <slot name="empty"></slot>
    <el-option v-for="item in nations" :key="item.value" :label="item.label" :value="item.label">
      <slot :scope="item"></slot>
    </el-option>
  </el-select>
</template>

<script lang="ts" setup>
import nations from './nation.json'

import { ref, watch } from 'vue'

let props = defineProps({
  selectedValue: {
    type: String || Number,
    default: ''
  }
})

const selectedValue = ref(props.selectedValue)
</script>
<style lang="scss" scoped></style>
