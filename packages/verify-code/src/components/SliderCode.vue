<template>
  <div
    class="slider"
    :class="rangeStatus ? 'success' : ''"
    :style="{ width: props.width + 'px', height: props.height + 'px' }"
  >
    <i @mousedown="rangeMove" :class="rangeStatus ? successIcon : startIcon"></i>
    <span class="slider-tip">{{ rangeStatus ? successText : startText }}</span>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

let props = defineProps({
  width: {
    type: Number,
    default: 300
  },
  height: {
    type: Number,
    default: 50
  },
  successText: {
    //成功文字
    type: String,
    default: '验证成功'
  },
  startText: {
    //开始的文字
    type: String,
    default: '请拖住滑块，拖动到最右边'
  },
  startIcon: {
    //开始的图标
    type: String,
    default: 'fa fa-arrow-circle-right'
  },
  successIcon: {
    //成功图标
    type: String,
    default: 'fa fa-check-circle'
  },
  successFun: {
    // 成功之后的函数
    type: Function
  },
  errorFun: {
    //失败之后的函数
    type: Function
  },
  resultFun: {
    // 获取当前验证结果
    type: Function
  }
})

let disX = ref(0) // 移动距离：当前位置距离右边
let rangeStatus = ref(false)
let emits = defineEmits(['resultFun'])
//滑块移动
function rangeMove(e) {
  let ele = e.target
  let startX = e.clientX // 鼠标距离屏幕左侧的位置
  let sliderWidth = ele.offsetWidth // 滑块宽度
  let parentWidth = ele.parentElement.offsetWidth // 父元素的宽度
  let MaxX = parentWidth - sliderWidth
  if (rangeStatus.value) {
    //不运行
    return false
  }
  // 鼠标移动
  document.onmousemove = e => {
    let endX = e.clientX
    disX.value = endX - startX
    if (disX.value <= 0) {
      disX.value = 0
    }
    if (disX.value >= MaxX - sliderWidth) {
      //减去滑块的宽度,体验效果更好
      disX.value = MaxX
    }
    ele.style.transition = '.5s all'
    ele.style.transform = 'translateX(' + disX.value + 'px)'
    e.preventDefault()
  }
  // 鼠标松开
  document.onmouseup = () => {
    if (disX.value !== MaxX) {
      ele.style.transition = '.5s all'
      ele.style.transform = 'translateX(0)'
      emits('resultFun', false)
      //执行成功的函数
      props.errorFun && props.errorFun()
    } else {
      rangeStatus.value = true
      emits('resultFun', true)
      //执行成功的函数
      props.successFun && props.successFun()
    }
    document.onmousemove = null
    document.onmouseup = null
  }
}
</script>
<style lang="scss" scoped>
@mixin jc-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.slider {
  background-color: #e9e9e9;
  position: relative;
  transition: 1s all;
  user-select: none;
  color: #585858;
  border-radius: 8px;

  &-tip {
    width: 100%;
    height: 100%;
    @include jc-flex;
  }

  &.success {
    background-color: #3bc923;
    color: #fff;

    i {
      color: #3bc923;
    }
  }

  i {
    position: absolute;
    width: 50px;
    /*no*/
    height: 100%;
    color: #000;
    border-radius: 8px;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #d8d8d8;
    cursor: move;
    font-size: 24px;
    @include jc-flex;
  }
}
</style>
