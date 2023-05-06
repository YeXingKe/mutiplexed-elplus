<template>
  <div v-water-mask:options="wmOption"></div>
  <lib-choose-time :start-options="startOptions" @startChange="startChange"></lib-choose-time>
</template>
<script setup lang="ts">
import moment from 'moment'
import { reactive } from 'vue'
import { WMOptions } from '~/utils/water-mark-option'

const wmOption = reactive<WMOptions>({
  textArr: ['路灯下的光', `${moment().format('YYYY-MM-DD HH:mm')}`],
  deg: -35
})
interface endValue {
  startTime: string
  endTime: string
}
interface dateEndValue {
  startDate: Date
  endDate: Date
}
let startChange = (val: string) => {
  console.log('startChange', val)
}
let endChange = (val: endValue) => {
  console.log('endChange', val)
}
let dateStartChange = (val: Date) => {
  console.log(val)
}
let dateEndChange = (val: dateEndValue) => {
  console.log(val)
}
let startOptions = {
  // size: 'mini',
  // clearable: false
}
</script>
<style lang="scss" scoped></style>
