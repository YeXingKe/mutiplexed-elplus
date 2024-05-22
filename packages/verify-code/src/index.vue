<template>
  <component :is="components[codeType]"></component>
</template>
<script setup lang="ts">
import AlphanumericCode from './components/AlphanumericCode.vue' // 字母数字混合验证码
import ArithmeticCode from './components/ArithmeticCode.vue' // 算术验证码
import RotateImgCode from './components/RotateImgCode.vue' // 滑块验证码
import SliderCode from './components/SliderCode.vue' // 旋转图片验证码
import FixPictureCode from './components/FixPictureCode.vue' // 拼图验证码
import { reactive } from 'vue'

defineProps({
  codeType: {
    type: String,
    default: 'AlphanumericCode'
  }
})

const components = reactive<Record<string, any>>({
  AlphanumericCode: AlphanumericCode,
  ArithmeticCode: ArithmeticCode,
  RotateImgCode: RotateImgCode,
  SliderCode: SliderCode,
  FixPictureCode: FixPictureCode
})
</script>
<style lang="scss" scoped></style>
