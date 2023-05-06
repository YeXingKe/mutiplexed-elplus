;(function (e, s) {
  typeof exports == 'object' && typeof module < 'u'
    ? (module.exports = s(require('vue')))
    : typeof define == 'function' && define.amd
    ? define(['vue'], s)
    : ((e = typeof globalThis < 'u' ? globalThis : e || self), (e.index = s(e.Vue)))
})(this, function (e) {
  'use strict'
  const s = { class: 'demo-progress' },
    c = e.defineComponent({
      __name: 'index',
      props: {
        percentage: { type: Number, default: 0 },
        isAnimation: { type: Boolean, default: !1 },
        time: { type: Number, default: 3e3 }
      },
      setup(t) {
        const n = t
        let o = e.ref(0)
        return (
          e.onMounted(() => {
            if (n.isAnimation) {
              let r = Math.ceil(n.time / n.percentage),
                i = setInterval(() => {
                  o.value++, o.value >= n.percentage && ((o.value = n.percentage), clearInterval(i))
                }, r)
            }
          }),
          (r, i) => {
            const a = e.resolveComponent('el-progress')
            return (
              e.openBlock(),
              e.createElementBlock('div', s, [
                e.createVNode(a, e.mergeProps({ percentage: t.percentage }, r.$attrs), null, 16, [
                  'percentage'
                ])
              ])
            )
          }
        )
      }
    }),
    l = '',
    p = ((t, n) => {
      const o = t.__vccOpts || t
      for (const [r, i] of n) o[r] = i
      return o
    })(c, [['__scopeId', 'data-v-0e492584']])
  return {
    install(t) {
      t.component('lib-progress', p)
    }
  }
})
