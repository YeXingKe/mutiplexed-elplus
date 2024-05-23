<template>
  <div style="display: flex;">
    <el-button type="primary" @click="confirm">点击验证</el-button>
    <LibRotateImgCode v-if="isShow" />
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
// import LibRotateImgCode from '../../../packages/verify-code/src/components/RotateImgCode.vue';
// import LibRotateImgCode from 'mutiplexed-elplus/dist/verify-code/src/components/RotateImgCode.vue';
const isShow = ref(false)
const confirm = () => {
  isShow.value = true
}
</script>
<style lang='scss' scoped></style>
