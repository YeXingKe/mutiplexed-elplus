;(function (e, t) {
  typeof exports == 'object' && typeof module < 'u'
    ? (module.exports = t(require('vue')))
    : typeof define == 'function' && define.amd
    ? define(['vue'], t)
    : ((e = typeof globalThis < 'u' ? globalThis : e || self), (e.index = t(e.Vue)))
})(this, function (e) {
  'use strict'
  const t = e.defineComponent({
    __name: 'index',
    props: {
      width: { type: Number, default: 200 },
      numValue: { type: Number, default: 0 },
      maxValue: { type: Number, default: 99 }
    },
    setup(n) {
      return (o, r) => {
        const i = e.resolveComponent('el-icon-bell'),
          l = e.resolveComponent('el-badge'),
          d = e.resolveComponent('el-popover')
        return (
          e.openBlock(),
          e.createBlock(
            d,
            { placement: 'bottom', width: n.width + 'px', trigger: 'click' },
            {
              reference: e.withCtx(() => [
                e.createVNode(
                  l,
                  {
                    value: n.numValue,
                    max: n.maxValue,
                    class: 'item',
                    style: { cursor: 'pointer' }
                  },
                  { default: e.withCtx(() => [e.createVNode(i)]), _: 1 },
                  8,
                  ['value', 'max']
                )
              ]),
              default: e.withCtx(() => [e.renderSlot(o.$slots, 'default')]),
              _: 3
            },
            8,
            ['width']
          )
        )
      }
    }
  })
  return {
    install(n) {
      n.component('lib-notification', t)
    }
  }
})
