<template>
  <lib-notification :width="300" :num-value="numValue">
    <template #default>
      <div><lib-list :list="list" :actions="actions"></lib-list></div>
    </template>
  </lib-notification>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { list, actions } from './data'

const numValue = ref(0)
list.forEach(item => {
  numValue.value += item.content.length
})
console.log(numValue)
</script>
<style lang="scss" scoped></style>
