import {
  defineComponent as f,
  computed as s,
  unref as l,
  openBlock as i,
  createElementBlock as u,
  normalizeStyle as m,
  createElementVNode as x,
  createVNode as r,
  resolveComponent as y
} from 'vue'
function _(e) {
  return /^(https?|ftp|mailto|tel):/.test(e)
}
const v = ['href'],
  g = /* @__PURE__ */ f({
    __name: 'index',
    props: {
      name: { default: '' },
      size: { default: '18px' },
      color: { default: '#000000' }
    },
    setup(e) {
      const n = e,
        t = `${n.size.replace('px', '')}px`,
        o = s(() => `#${n.name}`),
        c = s(() => ({
          color: n.color,
          fontSize: t
        })),
        a = s(() => _(n.name)),
        p = s(() => ({
          width: t,
          height: t,
          mask: `url(${n.name}) no-repeat 50% 50%`,
          '-webkit-mask': `url(${n.name}) no-repeat 50% 50%`
        }))
      return (k, I) =>
        l(a)
          ? (i(),
            u(
              'div',
              {
                key: 0,
                style: m(l(p)),
                class: 'url-svg svg-icon icon'
              },
              null,
              4
            ))
          : (i(),
            u(
              'svg',
              {
                key: 1,
                class: 'svg-icon icon',
                style: m(l(c))
              },
              [x('use', { href: l(o) }, null, 8, v)],
              4
            ))
    }
  })
const d = (e, n) => {
    const t = e.__vccOpts || e
    for (const [o, c] of n) t[o] = c
    return t
  },
  $ = /* @__PURE__ */ d(g, [['__scopeId', 'data-v-5ff91587']]),
  h = f({
    name: 'Icon',
    props: {
      name: {
        type: String,
        required: !0
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
    setup(e) {
      const n = s(() => {
        const { size: t, color: o } = e
        return {
          fontSize: `${t.replace('px', '')}px`,
          color: o
        }
      })
      return e.name.indexOf('el-icon-') === 0
        ? () => r('el-icon', { class: 'icon el-icon', style: n.value }, [r(y(e.name))])
        : e.name.indexOf('local-') === 0 || _(e.name)
        ? () =>
            r($, {
              name: e.name,
              size: e.size,
              color: e.color
            })
        : () =>
            r('i', {
              class: [e.name, 'icon'],
              style: n.value
            })
    }
  })
function z(e, n, t, o, c, a) {
  return null
}
const S = /* @__PURE__ */ d(h, [['render', z]]),
  E = {
    install(e) {
      e.component('lib-icon', S)
    }
  }
export { E as default }
