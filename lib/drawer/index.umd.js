;(function (e, o) {
  typeof exports == 'object' && typeof module < 'u'
    ? (module.exports = o(require('vue')))
    : typeof define == 'function' && define.amd
    ? define(['vue'], o)
    : ((e = typeof globalThis < 'u' ? globalThis : e || self), (e.index = o(e.Vue)))
})(this, function (e) {
  'use strict'
  const o = { class: 'formDrawer' },
    a = { class: 'body' },
    r = { class: 'actions' },
    c = e.defineComponent({
      __name: 'index',
      props: {
        title: String,
        size: { type: String, default: '45%' },
        destroyOnClose: { type: Boolean, default: !1 },
        confirmText: { type: String, default: '\u63D0\u4EA4' }
      },
      emits: ['submit'],
      setup(t, { expose: f, emit: u }) {
        const n = e.ref(!1),
          l = e.ref(!1),
          m = () => (l.value = !0),
          p = () => (l.value = !1),
          _ = () => (n.value = !0),
          s = () => (n.value = !1),
          y = () => u('submit')
        return (
          f({ open: _, close: s, showLoading: m, hideLoading: p }),
          (x, i) => {
            const d = e.resolveComponent('el-button'),
              h = e.resolveComponent('el-drawer')
            return (
              e.openBlock(),
              e.createBlock(
                h,
                {
                  modelValue: n.value,
                  'onUpdate:modelValue': i[0] || (i[0] = V => (n.value = V)),
                  title: t.title,
                  size: t.size,
                  'close-on-click-modal': !1,
                  'destroy-on-close': t.destroyOnClose
                },
                {
                  default: e.withCtx(() => [
                    e.createElementVNode('div', o, [
                      e.createElementVNode('div', a, [e.renderSlot(x.$slots, 'default')]),
                      e.createElementVNode('div', r, [
                        e.createVNode(
                          d,
                          { type: 'primary', onClick: y, loading: l.value },
                          {
                            default: e.withCtx(() => [
                              e.createTextVNode(e.toDisplayString(t.confirmText), 1)
                            ]),
                            _: 1
                          },
                          8,
                          ['loading']
                        ),
                        e.createVNode(
                          d,
                          { class: 'ml-2', type: 'default', onClick: s },
                          { default: e.withCtx(() => [e.createTextVNode('\u53D6\u6D88')]), _: 1 }
                        )
                      ])
                    ])
                  ]),
                  _: 3
                },
                8,
                ['modelValue', 'title', 'size', 'destroy-on-close']
              )
            )
          }
        )
      }
    }),
    w = ''
  return {
    install(t) {
      t.component('lib-drawer', c)
    }
  }
})
