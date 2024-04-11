import {
  defineComponent as b,
  ref as d,
  resolveComponent as c,
  openBlock as C,
  createBlock as h,
  withCtx as l,
  createElementVNode as n,
  renderSlot as D,
  createVNode as r,
  createTextVNode as u,
  toDisplayString as V
} from 'vue'
const k = { class: 'formDrawer' },
  S = { class: 'body' },
  z = { class: 'actions' },
  B = /* @__PURE__ */ b({
    __name: 'index',
    props: {
      title: String,
      size: {
        type: String,
        default: '45%'
      },
      destroyOnClose: {
        type: Boolean,
        default: !1
      },
      confirmText: {
        type: String,
        default: '\u63D0\u4EA4'
      }
    },
    emits: ['submit'],
    setup(e, { expose: m, emit: f }) {
      const t = d(!1),
        o = d(!1),
        _ = () => (o.value = !0),
        p = () => (o.value = !1),
        y = () => (t.value = !0),
        s = () => (t.value = !1),
        v = () => f('submit')
      return (
        m({
          open: y,
          close: s,
          showLoading: _,
          hideLoading: p
        }),
        (g, a) => {
          const i = c('el-button'),
            x = c('el-drawer')
          return (
            C(),
            h(
              x,
              {
                modelValue: t.value,
                'onUpdate:modelValue': a[0] || (a[0] = w => (t.value = w)),
                title: e.title,
                size: e.size,
                'close-on-click-modal': !1,
                'destroy-on-close': e.destroyOnClose
              },
              {
                default: l(() => [
                  n('div', k, [
                    n('div', S, [D(g.$slots, 'default')]),
                    n('div', z, [
                      r(
                        i,
                        {
                          type: 'primary',
                          onClick: v,
                          loading: o.value
                        },
                        {
                          default: l(() => [u(V(e.confirmText), 1)]),
                          _: 1
                        },
                        8,
                        ['loading']
                      ),
                      r(
                        i,
                        {
                          class: 'ml-2',
                          type: 'default',
                          onClick: s
                        },
                        {
                          default: l(() => [u('\u53D6\u6D88')]),
                          _: 1
                        }
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
  })
const T = {
  install(e) {
    e.component('lib-drawer', B)
  }
}
export { T as default }
