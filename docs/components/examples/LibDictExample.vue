<template>
  <div>
    <LibDict :dictData="testData" />
  </div>

</template>
<script setup lang='ts'>
import { ref } from 'vue';
import LibDict from '../../../packages/dict/src/index.vue';

const testData = ref<Array<any>>([
  {
    name: '高中',
    value: '高中',
    enable: true
  },
  {
    name: '大专',
    value: '大专',
    enable: true
  },
  {
    name: '本科',
    value: '本科',
    enable: true
  },
  {
    name: '研究生',
    value: '研究生',
    enable: false
  }
])
</script>
<style lang='scss' scoped></style>
