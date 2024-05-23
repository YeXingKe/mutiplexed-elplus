<template>
  <div>
    <canvas
      ref="canvas"
      :width="props.width"
      :height="props.height"
      @click="refreshCode()"
    ></canvas>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

let props = defineProps({
  width: {
    type: Number,
    default: 120
  },
  height: {
    type: Number,
    default: 45
  },
  verifyCode: {
    type: String,
    default: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  },
  codeSum: {
    type: Number,
    default: 4
  },
  fontSizeMin: {
    type: Number,
    default: 16
  },
  fontSizeMax: {
    type: Number,
    default: 40
  }
})

const verifyCode = props.verifyCode
const canvas = ref()
let showCode = ref<Array<any>>([])
let emits = defineEmits(['verify-code'])

// 随机生成一个4位数的验证码
function generateCode() {
  let code: Array<any> = []
  for (let i = 0; i < props.codeSum; i++) {
    code.push(verifyCode.charAt(Math.floor(Math.random() * verifyCode.length)))
  }
  emits('verify-code', code.join(''))
  return code
}

function drawPic() {
  showCode.value = generateCode()
  let ctx = canvas.value.getContext('2d')
  ctx.textBaseline = 'bottom'
  ctx.fillStyle = 'white' // 验证码背景
  ctx.fillRect(0, 0, props.width, props.height)
  for (let i = 0; i < showCode.value.length; i++) {
    // 遍历绘制验证码
    drawText(ctx, showCode.value[i], i)
  }
  drawLine(ctx)
  drawDot(ctx)
}

function drawText(ctx, txt, i) {
  ctx.fillStyle = '#000' // 文字颜色
  ctx.font = 30 + 'px SimHei' // 文字大小+字体
  let x = (i + 1) * (props.width / (showCode.value.length + 1)) // 文字x轴
  let y = randomNum(30, props.height - 5) // 文字y轴
  var deg = randomNum(-45, 45)
  // 修改坐标原点和旋转角度
  ctx.translate(x, y)
  ctx.rotate((deg * Math.PI) / 180)
  ctx.fillText(txt, 0, 0)
  // 恢复坐标原点和旋转角度
  ctx.rotate((-deg * Math.PI) / 180)
  ctx.translate(-x, -y)
}

// 绘制干扰线
function drawLine(ctx) {
  for (let i = 0; i < 8; i++) {
    const x1 = Math.floor(Math.random() * 120)
    const y1 = Math.floor(Math.random() * 40)
    const x2 = Math.floor(Math.random() * 120)
    const y2 = Math.floor(Math.random() * 40)
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = randomColor(40, 180)
    ctx.stroke()
  }
}

function drawDot(ctx) {
  // 绘制干扰点
  for (let i = 0; i < 100; i++) {
    ctx.fillStyle = randomColor(0, 255)
    ctx.beginPath()
    ctx.arc(randomNum(0, props.width), randomNum(0, props.height), 1, 0, 2 * Math.PI)
    ctx.fill()
  }
}

function randomColor(min, max) {
  var r = randomNum(min, max)
  var g = randomNum(min, max)
  var b = randomNum(min, max)
  return 'rgb(' + r + ',' + g + ',' + b + ')'
}

function randomNum(max, min) {
  return Math.random() * (max - min) + min
}

function refreshCode() {
  drawPic()
}

onMounted(() => {
  drawPic()
})
</script>
<style lang="scss" scoped></style>
