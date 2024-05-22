<template>
  <LibSignature :hideFooter="true" @confirm="confirm" />
  <img :src="imgSrc" v-if="imgSrc" style="width: 100%;height: 100%;" />
</template>
<script setup lang='ts'>
import { ref } from 'vue';
import LibSignature from '../../../packages/signature/src/index.vue';

const imgSrc = ref('')
const confirm = (val) => {
  imgSrc.value = val.imageData
}
</script>
