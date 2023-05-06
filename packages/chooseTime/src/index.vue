<template>
  <div class="demo-time-range">
    <el-time-select
      v-model="startTime"
      :placeholder="startPlaceHolder"
      :start="startTimeStart"
      :step="startStep"
      :end="startTimeEnd"
      v-bind="$attrs.startOptions"
    />
    <el-time-select
      class="ml-2"
      v-model="endTime"
      :min-time="startTime"
      :placeholder="endPlaceHolder"
      :start="endTimeStart"
      :step="endStep"
      :end="endTimeEnd"
      :disabled="endTimeDisabled"
      v-bind="$attrs.startOptions"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

let props = defineProps({
  // 开始时间的占位符
  startPlaceHolder: {
    type: String,
    default: '请选择开始时间'
  },
  // 开始时间初始化
  startTimeStart: {
    type: String,
    default: '08:00'
  },
  startStep: {
    type: String,
    default: '00:30'
  },
  startTimeEnd: {
    type: String,
    default: '24:00'
  },
  endPlaceHolder: {
    type: String,
    default: '请选择结束时间'
  },
  // 开始时间初始化
  endTimeStart: {
    type: String,
    default: '08:00'
  },
  endStep: {
    type: String,
    default: '00:30'
  },
  endTimeEnd: {
    type: String,
    default: '24:00'
  }
})
const startTime = ref<string>('')
const endTime = ref<string>('')
const endTimeDisabled = ref<boolean>(true)
const emits = defineEmits(['startChange', 'endChange'])

watch(
  () => startTime.value,
  val => {
    if (val === '') {
      endTime.value = ''
      endTimeDisabled.value = true
    } else {
      endTimeDisabled.value = false
      emits('startChange', val)
    }
  }
)
watch(
  () => endTime.value,
  val => {
    if (val !== '') {
      emits('endChange', {
        startTime: startTime.value,
        endTime: val
      })
    }
  }
)
</script>
<style lang="scss" scoped></style>
