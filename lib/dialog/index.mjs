import {
  defineComponent as S,
  ref as d,
  resolveComponent as c,
  openBlock as V,
  createBlock as k,
  withCtx as t,
  renderSlot as r,
  createVNode as u,
  createTextVNode as f,
  toDisplayString as m
} from 'vue'
const T = /* @__PURE__ */ S({
    __name: 'index',
    props: {
      title: String,
      width: {
        type: String,
        default: '45%'
      },
      destroyOnClose: {
        type: Boolean,
        default: !1
      },
      confirmText: {
        type: String,
        default: '\u786E\u5B9A'
      },
      closeText: {
        type: String,
        default: '\u5173\u95ED'
      }
    },
    emits: ['confirm'],
    setup(e, { expose: g, emit: p }) {
      const l = d(!1),
        y = () => (l.value = !0),
        h = () => (l.value = !1),
        o = d(!1),
        v = () => (o.value = !0),
        n = () => (o.value = !1),
        x = () => p('confirm')
      return (
        g({
          open: v,
          close: n,
          showLoading: y,
          hideLoading: h
        }),
        (a, i) => {
          const s = c('el-button'),
            C = c('el-dialog')
          return (
            V(),
            k(
              C,
              {
                modelValue: o.value,
                'onUpdate:modelValue': i[0] || (i[0] = w => (o.value = w)),
                title: e.title,
                width: e.width,
                'close-on-click-modal': !1,
                'destroy-on-close': e.destroyOnClose
              },
              {
                header: t(() => [r(a.$slots, 'header')]),
                footer: t(() => [
                  u(
                    s,
                    { onClick: n },
                    {
                      default: t(() => [f(m(e.closeText), 1)]),
                      _: 1
                    }
                  ),
                  u(
                    s,
                    {
                      class: 'ml-2',
                      type: 'primary',
                      onClick: x,
                      loading: l.value
                    },
                    {
                      default: t(() => [f(m(e.confirmText), 1)]),
                      _: 1
                    },
                    8,
                    ['loading']
                  )
                ]),
                default: t(() => [r(a.$slots, 'default')]),
                _: 3
              },
              8,
              ['modelValue', 'title', 'width', 'destroy-on-close']
            )
          )
        }
      )
    }
  }),
  B = {
    install(e) {
      e.component('lib-dialog', T)
    }
  }
export { B as default }
