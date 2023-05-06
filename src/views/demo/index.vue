<template>
  <lib-select :api-fun="getRemoteData" filterable clearable @selectedValue="selectedValue">
    <template #prefix> akjdh </template>
    <template #default="{ scope }">
      <span>{{ '水果: ' + scope.label }}</span>
    </template>
  </lib-select>
</template>
<script lang="ts" setup>
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
</script>
<style lang="scss" scoped></style>
