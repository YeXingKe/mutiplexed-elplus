<template>
  <el-container>
    <el-aside>
      <nav-side :collapse="isCollapse"></nav-side>
    </el-aside>
    <el-container>
      <el-header>
        <nav-header v-model:collapse="isCollapse"></nav-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import NavHeader from './components/navHeader.vue'
import NavSide from './components/navSide.vue'

let isCollapse = ref(false)
let menuWidth = ref('200px')

watch(isCollapse, val => {
  if (val) {
    menuWidth.value = '64px'
  } else {
    menuWidth.value = '200px'
  }
})
</script>

<style lang="scss" scoped>
:deep(.el-header) {
  position: fixed;
  left: v-bind(menuWidth);
  width: calc(100% - v-bind(menuWidth));
  z-index: 999;
  padding: 0;
  background-color: #fff;
  border-bottom: 1px solid #eee;
}
:deep(.el-aside) {
  position: fixed;
  padding: 0;
  width: v-bind(menuWidth);
  background-color: #fff;
  z-index: 999;
  left: 0;
  top: 0;
  transition: width 0.5 ease;
}
:deep(.el-main) {
  position: relative;
  left: v-bind(menuWidth);
  width: calc(100% - v-bind(menuWidth));
  top: 64px;
}
</style>
