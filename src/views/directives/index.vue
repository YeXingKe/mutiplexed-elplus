<template>
  <div>
    <label style="margin-right: 5px">水印指令：</label>
    <el-input v-model="data" placeholder="请输入内容" style="width: 500px">
      <template #append>
        <el-button v-copy="data">复制</el-button>
      </template>
    </el-input>
    <el-divider />
    <label style="margin-right: 5px">拖拽指令：</label>
    <div class="bgbox">
      <div v-draggable class="box"></div>
    </div>
    <el-divider />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

let data = ref(null)
</script>
<style lang="scss" scoped>
.bgbox {
  width: 100%;
  height: 200px;
}
.box {
  width: 100px;
  height: 100px;
  background-color: aqua;
}
</style>
