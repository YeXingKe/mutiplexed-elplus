;(function (e, c) {
  typeof exports == 'object' && typeof module < 'u'
    ? (module.exports = c(require('vue')))
    : typeof define == 'function' && define.amd
    ? define(['vue'], c)
    : ((e = typeof globalThis < 'u' ? globalThis : e || self), (e.index = c(e.Vue)))
})(this, function (e) {
  'use strict'
  function c(n) {
    return /^(https?|ftp|mailto|tel):/.test(n)
  }
  const a = ['href'],
    d = e.defineComponent({
      __name: 'index',
      props: { name: { default: '' }, size: { default: '18px' }, color: { default: '#000000' } },
      setup(n) {
        const t = n,
          o = `${t.size.replace('px', '')}px`,
          s = e.computed(() => `#${t.name}`),
          i = e.computed(() => ({ color: t.color, fontSize: o })),
          l = e.computed(() => c(t.name)),
          _ = e.computed(() => ({
            width: o,
            height: o,
            mask: `url(${t.name}) no-repeat 50% 50%`,
            '-webkit-mask': `url(${t.name}) no-repeat 50% 50%`
          }))
        return (h, g) =>
          e.unref(l)
            ? (e.openBlock(),
              e.createElementBlock(
                'div',
                { key: 0, style: e.normalizeStyle(e.unref(_)), class: 'url-svg svg-icon icon' },
                null,
                4
              ))
            : (e.openBlock(),
              e.createElementBlock(
                'svg',
                { key: 1, class: 'svg-icon icon', style: e.normalizeStyle(e.unref(i)) },
                [e.createElementVNode('use', { href: e.unref(s) }, null, 8, a)],
                4
              ))
      }
    }),
    x = '',
    r = (n, t) => {
      const o = n.__vccOpts || n
      for (const [s, i] of t) o[s] = i
      return o
    },
    f = r(d, [['__scopeId', 'data-v-5ff91587']]),
    m = e.defineComponent({
      name: 'Icon',
      props: {
        name: { type: String, required: !0 },
        size: { type: String, default: '20px' },
        color: { type: String, default: '#00000' }
      },
      setup(n) {
        const t = e.computed(() => {
          const { size: o, color: s } = n
          return { fontSize: `${o.replace('px', '')}px`, color: s }
        })
        return n.name.indexOf('el-icon-') === 0
          ? () =>
              e.createVNode('el-icon', { class: 'icon el-icon', style: t.value }, [
                e.createVNode(e.resolveComponent(n.name))
              ])
          : n.name.indexOf('local-') === 0 || c(n.name)
          ? () => e.createVNode(f, { name: n.name, size: n.size, color: n.color })
          : () => e.createVNode('i', { class: [n.name, 'icon'], style: t.value })
      }
    })
  function u(n, t, o, s, i, l) {
    return null
  }
  const p = r(m, [['render', u]])
  return {
    install(n) {
      n.component('lib-icon', p)
    }
  }
})
