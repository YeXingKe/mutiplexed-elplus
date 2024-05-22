<template>
  <div style="display: flex;">
    <el-input v-model="verifyCode" class="mr-lm"></el-input>
    <LibAlphanumericCode @verify-code="getVerifyCode" />
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
import LibAlphanumericCode from '../../../packages/verify-code/src/components/AlphanumericCode.vue';


const verifyCode = ref('')
const getVerifyCode = (val) => {
  verifyCode.value = val
}
</script>
<style lang='scss' scoped></style>
