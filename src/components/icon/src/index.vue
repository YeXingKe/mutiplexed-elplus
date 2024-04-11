<script lang="ts">
import { computed } from 'vue'
import { isExternal } from '~/utils/common'
import { createVNode, CSSProperties, defineComponent, onMounted, resolveComponent } from 'vue'
import svg from './svg/index.vue'
export default defineComponent({
  name: 'Icon',
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
    if (props.name.indexOf('el-icon-') === 0) {
      return () =>
        createVNode('el-icon', { class: 'icon el-icon', style: iconStyle.value }, [
          createVNode(resolveComponent(props.name))
        ])
    } else if (props.name.indexOf('local-') === 0 || isExternal(props.name)) {
      return () =>
        createVNode(svg, {
          name: props.name,
          size: props.size,
          color: props.color
        })
    }
    return () =>
      createVNode('i', {
        class: [props.name, 'icon'],
        style: iconStyle.value
      })

    onMounted(() => {})
  }
})
</script>
<style lang="scss" scoped></style>
