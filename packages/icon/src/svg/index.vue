<template>
  <div v-if="isUrl" :style="urlIconStyle" class="url-svg svg-icon icon" />
  <svg v-else class="svg-icon icon" :style="iconStyle">
    <use :href="iconName" />
  </svg>
</template>
<script lang="ts" setup>
import { computed, CSSProperties } from 'vue'
import { isExternal } from '../../../utils/common'

interface Props {
  name: string
  size: string
  color: string
}
// withDefaults 辅助函数提供了对默认值的类型检查，并确保返回的 props 的类型删除了已声明默认值的属性的可选标志。
const props = withDefaults(defineProps<Props>(), {
  name: '',
  size: '18px',
  color: '#000000'
})
const s = `${props.size.replace('px', '')}px`
const iconName = computed(() => `#${props.name}`)
const iconStyle = computed((): CSSProperties => {
  return {
    color: props.color,
    fontSize: s
  }
})
const isUrl = computed(() => isExternal(props.name))
const urlIconStyle = computed(() => {
  return {
    width: s,
    height: s,
    mask: `url(${props.name}) no-repeat 50% 50%`,
    '-webkit-mask': `url(${props.name}) no-repeat 50% 50%`
  }
})
</script>
<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor; // 用于设置SVG形状的颜色
  overflow: hidden;
}
</style>
<!-- currentColor -->
<!-- 在css中，currentColor是一个变量，这个变量的值是当前元素的color值。 -->
<!-- 如果当前元素没有在CSS里显示地指定一个color值，那它的颜色值就遵从CSS规则，从父元素继承而来。 -->
