<template>
  <div style="width: 200px;height: 100px;" v-water-mask:options="wmOption">
  </div>
</template>
<script setup lang='ts'>
import { WMOptions } from 'mutiplexed-elplus';
import WaterMask from '../../../packages/directives/index'
import { reactive, ref } from 'vue';


const wmOption = reactive<WMOptions>({
  textArr: ['路灯下的光', `2024-5-23`],
  deg: -35,
});
</script>
