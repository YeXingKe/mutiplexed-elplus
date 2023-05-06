<template>
  <div>
    <canvas ref="canvas" :width="props.width" :height="props.height" @click="refreshCode"></canvas>
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
  operators: {
    type: Array<String>,
    default: ['+', '-', '*', '/']
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

const canvas = ref()
let answer = ref()
let numa = ref(0)
let numb = ref(0)
let op = ref('')

let emits = defineEmits(['verify-code'])
watch(numa, val => {
  if (val && val > 0) {
    const correctAnswer = eval(`${numa.value}${op.value}${numb.value}`)
    emits('verify-code', correctAnswer)
  }
})
function generateCode() {
  const operators = props.operators
  numa.value = Math.floor(Math.random() * 10)
  numb.value = Math.floor(Math.random() * 10)
  op.value = operators[Math.floor(Math.random() * operators.length)] as string
}
function draw() {
  generateCode()
  const ctx = canvas.value.getContext('2d')
  // 清空画布
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

  // 绘制背景
  ctx.fillStyle = '#f5f5f5'
  ctx.fillRect(0, 0, canvas.value.width, canvas.value.height)

  // 绘制文本
  ctx.font = '27px Arial'
  ctx.fillStyle = '#333'
  ctx.fillText(`${numa.value} ${op.value} ${numb.value} = ?`, 10, 30)

  // 绘制干扰线
  for (let i = 0; i < 5; i++) {
    ctx.beginPath()
    ctx.moveTo(Math.random() * canvas.value.width, Math.random() * canvas.value.height)
    ctx.lineTo(Math.random() * canvas.value.width, Math.random() * canvas.value.height)
    ctx.strokeStyle = randomColor()
    ctx.stroke()
  }

  // 绘制干扰点
  for (let i = 0; i < 100; i++) {
    ctx.beginPath()
    ctx.arc(
      Math.random() * canvas.value.width,
      Math.random() * canvas.value.height,
      1,
      0,
      2 * Math.PI
    )
    ctx.fillStyle = randomColor()
    ctx.fill()
  }
}
function randomColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}

function refreshCode() {
  draw()
}

onMounted(() => {
  draw()
})
</script>
<style lang="scss" scoped></style>
