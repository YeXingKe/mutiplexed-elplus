<template>
  <!-- <FontAwesomeIcon :icon="iconName" v-if="isFontAweIcon" /> -->
</template>
<script lang="ts">
import { computed, ref } from 'vue'
import { isExternal } from '../../utils/common'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createVNode, CSSProperties, defineComponent, resolveComponent } from 'vue'
import svg from './svg/index.vue'
export default defineComponent({
  name: 'lib-icon',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    FontAwesomeIcon // https://docs.fontawesome.com/web/use-with/vue
  },
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: '20px'
    },
    color: {
      type: String,
      default: '#00000'
    }
  },
  setup(props) {
    const iconStyle = computed((): CSSProperties => {
      const { size, color } = props
      let s = `${size.replace('px', '')}px`
      return {
        fontSize: s,
        color: color
      }
    })
    const isFontAweIcon = ref(false)
    const isString = typeof props.name === 'string'
    if (isString && props.name.indexOf('el-icon-') === 0) {
      return () =>
        createVNode('el-icon', { class: 'icon el-icon', style: iconStyle.value }, [
          createVNode(resolveComponent(props.name))
        ])
    } else if (
      (isString && props.name.toString().indexOf('local-') === 0) ||
      isExternal(props.name)
    ) {
      return () =>
        createVNode(svg, {
          name: props.name,
          size: props.size,
          color: props.color
        })
    } else if (isString && props.name.indexOf('iconfont') === 0) {
      // 5.o版本以下的fontawe适用
      // 阿里巴巴iconfont适用
      return () =>
        createVNode('i', {
          class: [props.name, 'icon'],
          style: iconStyle.value
        })
    } else {
      isFontAweIcon.value = true
    }
    // 引入FontAwesomeIcon方式一
    // return {
    //   isFontAweIcon,
    //   iconName: props.name
    // }
    // 引入FontAwesomeIcon方式二
    return () =>
      createVNode(FontAwesomeIcon, {
        icon: props.name
      })
  }
})
</script>
