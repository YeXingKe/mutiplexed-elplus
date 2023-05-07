<template>
  <lib-select :api-fun="getRemoteData" filterable clearable @selectedValue="selectedValue">
    <template #prefix> akjdh </template>
    <template #default="{ scope }">
      <span>{{ '水果: ' + scope.label }}</span>
    </template>
  </lib-select>
  <div>
    <img v-if="signImg" :src="signImg" alt="" sizes="" />
  </div>
  <!-- <lib-signature @confirm="getInfo"></lib-signature> -->
  <!-- <lib-stamp></lib-stamp> -->
  <div v-stamp="stampOption" style="width: 400px; height: 400px"></div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import http from '../../../packages/utils/http'
import { StampOptions } from '../../../packages/utils/stamp-option'
let stampOption = new StampOptions({ position: 'absolute' })
//   模拟调用接口
function getRemoteData() {
  return new Promise<any[]>((resolve, reject) => {
    setTimeout(() => {
      // 模拟接口调用有概率出错
      // if (Math.random() > 0.5) {
      resolve([
        {
          key: 1,
          label: '苹果',
          value: '苹果'
        },
        {
          key: 2,
          label: '香蕉',
          value: '香蕉'
        },
        {
          key: 3,
          label: '橘子',
          value: '橘子'
        }
      ])
      // } else {
      //   reject(new Error('不小心出错了！'));
      // }
    }, 3000)
  })
}

const selectedValue = (value: any) => {
  console.log(value)
}

let signImg = ref('')
function getInfo(info: any) {
  console.log(info)
  http({
    url: '/api/File/Image/Upload',
    method: 'post',
    data: { imageData: info?.imageData, imageName: info?.fileInfo?.name }
  }).then((r: any) => {
    signImg.value = r?.Data
  })
}
</script>
<style lang="scss" scoped></style>
