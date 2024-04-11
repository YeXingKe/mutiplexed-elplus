<template>
  <el-dialog v-model="dialogVisible" width="15%" :before-close="handleClose">
    <el-image
      :src="imageUrl"
      :style="xuanzhuan"
      class="w-full flex justify-center rounded-full overflow-hidden"
    >
      <template #error>
        <div class="image-slot"><i class="el-icon-picture-outline text-3xl"></i></div>
      </template>
    </el-image>

    <template #footer>
      <div class="w-full mx-1 my-1 h-8 bg-gray-300 relative">
        <i
          @mousedown="rangeMove"
          :style="leftnum"
          class="el-icon-d-arrow-right h-8 w-8 bg-white border absolute top-0 bottom-0 flex justify-center items-center cursor-pointer select-none"
        ></i>
      </div>
      <div class="w-full flex justify-evenly">
        <el-button @click="chongzhi()">重置</el-button>
        <el-button type="primary" @click="tijiao()">确定</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'xuanzhuan',
  components: {},
  setup(prop, content) {
    // 左侧距离和移动距离
    const disX = ref(0)
    const leftnum = computed(() => {
      return `left: ${disX.value}px`
    }) // 角度和 旋转角度
    const jiaodu = ref(0)
    const xuanzhuan = computed(() => {
      return `transform:rotate(${jiaodu.value}deg);`
    })

    const dialogVisible = ref(false)
    const imageUrl = ref(
      'http://1812.img.pp.sohu.com.cn/images/blog/2009/11/18/18/8/125b6560a6ag214.jpg'
    )
    function getimage() {
      console.log('向后台获取图片')
    }
    function init() {
      dialogVisible.value = true
      getimage()
    }
    function handleClose() {
      jiaodu.value = 0
      disX.value = 0
      imageUrl.value = ''
      dialogVisible.value = false
    }
    function rangeMove(e: any) {
      let ele = e.target
      let startX = e.clientX - disX.value
      let eleWidth = ele.offsetWidth
      let parentWidth = ele.parentElement.offsetWidth
      let MaxX = parentWidth - eleWidth
      document.onmousemove = e => {
        let endX = e.clientX
        disX.value = endX - startX
        if (disX.value <= 0) {
          disX.value = 0
        } else if (disX.value >= MaxX) {
          //减去滑块的宽度,体验效果更好
          disX.value = MaxX
        } // 计算滑动距离与全长的比例

        const bili = disX.value / (MaxX - eleWidth) // 用比例乘以360度，就是旋转角度
        jiaodu.value = bili * 360
      }
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }
    } // 逐步减少，看上去好看点
    function jianshao(disbuchang: number, jiaobubuchang: number) {
      jiaodu.value = jiaodu.value - jiaobubuchang
      disX.value = disX.value - disbuchang
      if (disX.value <= 0) {
        jiaodu.value = 0
        disX.value = 0
      }
    } // 点击重置，使用异步方法，逐步回到原点
    function chongzhi() {
      const disbuchang = 50
      const jiaobubuchang = (disbuchang / disX.value) * jiaodu.value
      const mandian = setInterval(() => {
        if (disX.value == 0) {
          clearInterval(mandian)
        } else {
          jianshao(disbuchang, jiaobubuchang)
        }
      }, 10)
    } // 点击确定
    function tijiao() {
      if (disX.value == 0) {
        return
      }
      console.log('后端验证成功') // 成功后，触发父组件方法。
      content.emit('get')
    }
    return {
      handleClose,
      imageUrl,
      dialogVisible,
      init,
      rangeMove,
      leftnum,
      xuanzhuan,
      chongzhi,
      tijiao
    }
  }
})
</script>

<style scoped></style>
