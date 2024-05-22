<template>
  <LibVerifyCode />
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;

  .left-show {
    flex: 3;
    background-color: #fff;
    box-sizing: border-box;
    padding: 20px 20px 0;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }

  .right-btn {
    flex: 1;
    box-sizing: border-box;
    padding: 20px 20px 0;
    // background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
