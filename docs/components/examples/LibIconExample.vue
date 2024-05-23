<template>
  <div>
    <!-- element-plus -->
    <div>
      element-plus图标库：
      <LibIcon :name="'el-icon-edit'" class="ml-lm" />
    </div>
    <div>
      阿里巴巴图标库：
      <LibIcon :name="'iconfont icon-save'" class="ml-lm" />
      <LibIcon :name="'iconfont icon-adduser'" class="ml-lm" />
      <LibIcon :name="'iconfont icon-import'" class="ml-lm" />
      <LibIcon :name="'iconfont icon-export'" class="ml-lm" />
    </div>
    <div>
      fontawesome（6.0）：
      <LibIcon :name="faHome" class="ml-lm" />
      <LibIcon :name="faEnvelope" class="ml-lm" />
      <LibIcon :name="faTable" class="ml-lm" />
      <LibIcon :name="faHouse" class="ml-lm" />
    </div>
    <!-- <div>
      本地svg图标：
      <LibIcon :name="'local-vue'" class="ml-lm" />
      <LibIcon :name="'local-logo'" class="ml-lm" />
    </div>
    <div>
      超链接svg图标：
      <LibIcon :name="'http://element-plus.org/images/element-plus-logo.svg'" />
    </div> -->
    <div>
      图标列表：
      <LibIconList />
    </div>
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue';
import { faHome, faEnvelope, faTable, faHouse } from '@fortawesome/free-solid-svg-icons'
// import LibIcon from '../../../packages/icon/src/index.vue';
// import LibIconList from '../../../packages/icon-list/src/index.vue'
// import LibIcon from 'mutiplexed-elplus/dist/icon/src/index.vue';
// import LibIconList from 'mutiplexed-elplus/dist/icon-list/src/index.vue';
</script>
<style lang='scss' scoped></style>
