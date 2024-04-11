<template>
  <div class="container">
    <div class="left-show">
      <template v-if="selected === 'lib-select'">
        <lib-select-nation></lib-select-nation>
        <div style="height: 50px"></div>
        <lib-choose-city></lib-choose-city>
      </template>
      <template v-else-if="selected === 'directives'"></template>
      <template v-else>
        <lib-table v-if="selected === 'table'" />
        <FormComponent v-else-if="selected === 'form'" />
        <component :is="selected" v-else />
      </template>
    </div>
    <div class="right-btn">
      <el-radio-group v-model="selected">
        <el-radio
          v-for="item of components"
          :key="item.key"
          :value="item.name"
          :label="item.component"
          size="large"
          border
          style="margin-right: 10px; margin-bottom: 10px"
        >
          {{ item.name }}
        </el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import FormComponent from './form/index.vue'
import LibTable from './table/index.vue'
import components from './../assets/json/component.json'

const selected = ref('lib-select')
// const currentComponent = ref('lib-select')
// const changeRadio = () => {
//   currentComponent.value = components.filter(item => item.key === selected.value)[0].component
// }
</script>

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
