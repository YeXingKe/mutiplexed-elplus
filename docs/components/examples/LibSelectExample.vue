<template>
  <div>
    选取民族：
    <LibNation />
  </div>
  <div class="mt-lm">
    选取时间：
    <LibChooseTime />
  </div>
  <div style="display: flex;" class="mt-lm">
    选取城市：
    <LibChooseCity />
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue';
// import LibSelect from '../../../packages/select/src/index.vue';
// import LibNation from '../../../packages/nation/src/index.vue';
// import LibChooseTime from '../../../packages/choose-time/src/index.vue';
// import LibChooseCity from '../../../packages/choose-city/src/index.vue';
// import LibSelect from 'mutiplexed-elplus/dist/select/src/index.vue';
// import LibNation from 'mutiplexed-elplus/dist/nation/src/index.vue';
// import LibChooseTime from 'mutiplexed-elplus/dist/choose-time/src/index.vue';
// import LibChooseCity from 'mutiplexed-elplus/dist/choose-city/src/index.vue';

const imgSrc = ref('')
const confirm = (val) => {
  imgSrc.value = val.imageData
}
</script>
