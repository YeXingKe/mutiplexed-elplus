<template>
  <lib-calendar
    :events="events"
    :event-content="eventContent"
    @date-click="dateClick"
  ></lib-calendar>
</template>

<script lang="ts" setup>
import { EventItem } from '../../components/calendar/src/types'
import { ref } from 'vue'

let events = ref<EventItem[]>([
  {
    title: '购物',
    start: '2021-11-11 10:00:00',
    end: '2021-11-11 12:00:00'
  },
  {
    title: '学习',
    start: '2021-11-15 08:00:00',
    end: '2021-11-15 16:00:00'
  }
])
let dateClick = (info: any) => {
  console.log('info', info)
  let event = {
    start: `${info.dateStr} 12:00:00`,
    end: `${info.dateStr} 13:00:00`,
    title: '吃饭'
  }
  events.value.push(event)
}

let eventContent = (arg: any) => {
  console.log(arg)
  let el = document.createElement('div')
  let timeTextArr = arg.timeText.split(' - ')
  let start = timeTextArr[0].replace('上午', '').replace('下午', '').replace('时', '')
  let end = timeTextArr[1].replace('上午', '').replace('下午', '').replace('时', '')
  el.innerHTML = `
         <div>开始时间: ${start}</div>
         <div>结束时间: ${end}</div>
         <div>标题: ${arg.event._def.title}</div>
        `
  return {
    domNodes: [el]
  }
}
</script>

<style lang="scss" scoped></style>
