<template>
  <LibVerifyCode :componentType="componentType" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import LibVerifyCode, { ComponentsType } from '../../packages/verify-code/index'

const componentType = ref<ComponentsType>('AlphanumericCode')
</script>
