import {
  defineComponent as m,
  resolveComponent as t,
  openBlock as u,
  createBlock as i,
  withCtx as o,
  createVNode as n,
  renderSlot as d
} from 'vue'
const p = /* @__PURE__ */ m({
    __name: 'index',
    props: {
      width: {
        type: Number,
        default: 200
      },
      numValue: {
        type: Number,
        default: 0
      },
      maxValue: {
        type: Number,
        default: 99
      }
    },
    setup(e) {
      return (l, s) => {
        const a = t('el-icon-bell'),
          c = t('el-badge'),
          r = t('el-popover')
        return (
          u(),
          i(
            r,
            {
              placement: 'bottom',
              width: e.width + 'px',
              trigger: 'click'
            },
            {
              reference: o(() => [
                n(
                  c,
                  {
                    value: e.numValue,
                    max: e.maxValue,
                    class: 'item',
                    style: { cursor: 'pointer' }
                  },
                  {
                    default: o(() => [n(a)]),
                    _: 1
                  },
                  8,
                  ['value', 'max']
                )
              ]),
              default: o(() => [d(l.$slots, 'default')]),
              _: 3
            },
            8,
            ['width']
          )
        )
      }
    }
  }),
  f = {
    install(e) {
      e.component('lib-notification', p)
    }
  }
export { f as default }
