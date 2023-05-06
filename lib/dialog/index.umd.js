;(function (e, o) {
  typeof exports == 'object' && typeof module < 'u'
    ? (module.exports = o(require('vue')))
    : typeof define == 'function' && define.amd
    ? define(['vue'], o)
    : ((e = typeof globalThis < 'u' ? globalThis : e || self), (e.index = o(e.Vue)))
})(this, function (e) {
  'use strict'
  const o = e.defineComponent({
    __name: 'index',
    props: {
      title: String,
      width: { type: String, default: '45%' },
      destroyOnClose: { type: Boolean, default: !1 },
      confirmText: { type: String, default: '\u786E\u5B9A' },
      closeText: { type: String, default: '\u5173\u95ED' }
    },
    emits: ['confirm'],
    setup(t, { expose: r, emit: c }) {
      const l = e.ref(!1),
        f = () => (l.value = !0),
        m = () => (l.value = !1),
        n = e.ref(!1),
        u = () => (n.value = !0),
        i = () => (n.value = !1),
        p = () => c('confirm')
      return (
        r({ open: u, close: i, showLoading: f, hideLoading: m }),
        (d, s) => {
          const a = e.resolveComponent('el-button'),
            x = e.resolveComponent('el-dialog')
          return (
            e.openBlock(),
            e.createBlock(
              x,
              {
                modelValue: n.value,
                'onUpdate:modelValue': s[0] || (s[0] = h => (n.value = h)),
                title: t.title,
                width: t.width,
                'close-on-click-modal': !1,
                'destroy-on-close': t.destroyOnClose
              },
              {
                header: e.withCtx(() => [e.renderSlot(d.$slots, 'header')]),
                footer: e.withCtx(() => [
                  e.createVNode(
                    a,
                    { onClick: i },
                    {
                      default: e.withCtx(() => [
                        e.createTextVNode(e.toDisplayString(t.closeText), 1)
                      ]),
                      _: 1
                    }
                  ),
                  e.createVNode(
                    a,
                    { class: 'ml-2', type: 'primary', onClick: p, loading: l.value },
                    {
                      default: e.withCtx(() => [
                        e.createTextVNode(e.toDisplayString(t.confirmText), 1)
                      ]),
                      _: 1
                    },
                    8,
                    ['loading']
                  )
                ]),
                default: e.withCtx(() => [e.renderSlot(d.$slots, 'default')]),
                _: 3
              },
              8,
              ['modelValue', 'title', 'width', 'destroy-on-close']
            )
          )
        }
      )
    }
  })
  return {
    install(t) {
      t.component('lib-dialog', o)
    }
  }
})
