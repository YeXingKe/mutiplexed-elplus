<template>
  <div class="demo">
    <el-card shadow="never" :body-style="{ padding: '20px' }">
      <router-view></router-view>
    </el-card>
  </div>
</template>
<script lang="ts" setup></script>

<style>
.demo {
  height: 100%;
  width: 100%;
}
</style>
