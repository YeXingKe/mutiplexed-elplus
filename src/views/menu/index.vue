<template>
  <div style="display: flex">
    <div style="flex: 1">
      <lib-menu :data="data1"></lib-menu>
    </div>
    <div style="flex: 1">
      <lib-infinite-menu :data="data2"></lib-infinite-menu>
    </div>
  </div>
</template>
<script lang="ts" setup>
const data1 = [
  {
    name: '导航1',
    index: '1',
    icon: 'document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'document',
    children: [
      {
        name: '导航2-1',
        index: '2-1',
        icon: 'document'
      }
    ]
  }
]

const data2 = [
  {
    name: '导航1',
    index: '1',
    icon: 'document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'document',
    children: [
      {
        name: '导航2-1',
        index: '2-1',
        icon: 'document',
        children: [
          {
            name: '导航2-1-1',
            index: '2-1-1',
            icon: 'document',
            children: [
              {
                name: '导航2-1-1-1',
                index: '2-1-1-1',
                icon: 'document'
              }
            ]
          }
        ]
      },
      {
        name: '导航2-2',
        index: '2-2',
        icon: 'document'
      }
    ]
  }
]
</script>
<style lang="scss" scoped></style>
