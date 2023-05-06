import {
  defineComponent as a,
  ref as c,
  onMounted as l,
  resolveComponent as p,
  openBlock as i,
  createElementBlock as _,
  createVNode as m,
  mergeProps as d
} from 'vue'
const u = { class: 'demo-progress' },
  g = /* @__PURE__ */ a({
    __name: 'index',
    props: {
      percentage: {
        type: Number,
        default: 0
      },
      isAnimation: {
        type: Boolean,
        default: !1
      },
      time: {
        type: Number,
        default: 3e3
      }
    },
    setup(e) {
      const t = e
      let n = c(0)
      return (
        l(() => {
          if (t.isAnimation) {
            let o = Math.ceil(t.time / t.percentage),
              r = setInterval(() => {
                n.value++, n.value >= t.percentage && ((n.value = t.percentage), clearInterval(r))
              }, o)
          }
        }),
        (o, r) => {
          const s = p('el-progress')
          return (
            i(),
            _('div', u, [m(s, d({ percentage: e.percentage }, o.$attrs), null, 16, ['percentage'])])
          )
        }
      )
    }
  })
const f = (e, t) => {
    const n = e.__vccOpts || e
    for (const [o, r] of t) n[o] = r
    return n
  },
  v = /* @__PURE__ */ f(g, [['__scopeId', 'data-v-0e492584']]),
  y = {
    install(e) {
      e.component('lib-progress', v)
    }
  }
export { y as default }
