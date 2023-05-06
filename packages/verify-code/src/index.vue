<template>
  <!-- 字母数字混合验证码 -->
  <AlphanumericCode />
  <!-- 算术验证码 -->
  <ArithmeticCode />
  <!-- 滑块验证码 -->
  <SliderCode />
  <!-- 旋转图片验证码 -->
  <RotateImgCode />
  <!-- 拼图验证码 -->
  <FixPictureCode />
</template>
<script setup lang="ts">
import AlphanumericCode from './components/AlphanumericCode.vue'
import ArithmeticCode from './components/ArithmeticCode.vue'
import RotateImgCode from './components/RotateImgCode.vue'
import SliderCode from './components/SliderCode.vue'
import FixPictureCode from './components/FixPictureCode.vue'
</script>
<style lang="scss" scoped></style>
