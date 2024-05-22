<template>
  <div style="display: flex;">
    <el-input v-model="verifyCode" class="mr-lm"></el-input>
    <LibArithmeticCode @verify-code="getVerifyCode" />
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
import LibArithmeticCode from '../../../packages/verify-code/src/components/ArithmeticCode.vue';


const verifyCode = ref('')
const getVerifyCode = (val) => {
  verifyCode.value = val
}
</script>
<style lang='scss' scoped></style>
