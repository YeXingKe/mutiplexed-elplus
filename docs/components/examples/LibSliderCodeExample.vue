<template>
  <div style="display: flex;">
    <LibSliderCode :successFun="successFn" />
  </div>
</template>
<script setup lang='ts'>
// import LibSliderCode from '../../../packages/verify-code/src/components/SliderCode.vue';
// import LibSliderCode from 'mutiplexed-elplus/dist/verify-code/src/components/SliderCode.vue';
const successFn = () => {
  console.log('验证成功了吗')
}
</script>
<style lang='scss' scoped></style>
