import {
  defineComponent as C,
  resolveComponent as s,
  openBlock as e,
  createElementBlock as l,
  createVNode as i,
  withCtx as a,
  Fragment as d,
  renderList as p,
  createBlock as u,
  createElementVNode as n,
  toDisplayString as m,
  resolveDynamicComponent as I,
  pushScopeId as S,
  popScopeId as B
} from 'vue'
const w = t => (S('data-v-0275db09'), (t = t()), B(), t),
  z = { class: 'list-tabs__item' },
  A = { class: 'avatar' },
  D = { class: 'content' },
  E = { class: 'mt-sm' },
  N = { class: 'actions' },
  V = /* @__PURE__ */ w(() => /* @__PURE__ */ n('span', null, null, -1)),
  q = /* @__PURE__ */ C({
    __name: 'index',
    props: {
      list: {
        type: Array,
        required: !0
      },
      actions: {
        type: Array,
        default: () => []
      }
    },
    setup(t) {
      return (
        console.log(t.list),
        (c, b) => {
          const _ = s('el-avatar'),
            h = s('el-scrollbar'),
            x = s('el-button'),
            y = s('el-tab-pane'),
            k = s('el-tabs')
          return (
            e(),
            l('div', z, [
              i(k, null, {
                default: a(() => [
                  (e(!0),
                  l(
                    d,
                    null,
                    p(
                      t.list,
                      (f, g) => (
                        e(),
                        u(
                          y,
                          {
                            key: g,
                            label: f.title
                          },
                          {
                            default: a(() => [
                              i(
                                h,
                                { 'max-height': '300px' },
                                {
                                  default: a(() => [
                                    (e(!0),
                                    l(
                                      d,
                                      null,
                                      p(
                                        f.content,
                                        (o, r) => (
                                          e(),
                                          l(
                                            'div',
                                            {
                                              class: 'container',
                                              key: r
                                            },
                                            [
                                              n('div', A, [
                                                i(
                                                  _,
                                                  {
                                                    size: 36,
                                                    src: o.avatar
                                                  },
                                                  null,
                                                  8,
                                                  ['src']
                                                )
                                              ]),
                                              n('div', D, [
                                                n('div', null, m(o.title), 1),
                                                n('div', E, m(o.time), 1)
                                              ])
                                            ]
                                          )
                                        )
                                      ),
                                      128
                                    ))
                                  ]),
                                  _: 2
                                },
                                1024
                              ),
                              n('div', N, [
                                (e(!0),
                                l(
                                  d,
                                  null,
                                  p(
                                    t.actions,
                                    (o, r) => (
                                      e(),
                                      u(
                                        x,
                                        {
                                          size: 'default',
                                          text: '',
                                          key: r
                                        },
                                        {
                                          default: a(() => [
                                            (e(), u(I(`el-icon-${o.icon}`), { class: 'mr-sm' })),
                                            V,
                                            n('span', null, m(o.text), 1)
                                          ]),
                                          _: 2
                                        },
                                        1024
                                      )
                                    )
                                  ),
                                  128
                                ))
                              ])
                            ]),
                            _: 2
                          },
                          1032,
                          ['label']
                        )
                      )
                    ),
                    128
                  ))
                ]),
                _: 1
              })
            ])
          )
        }
      )
    }
  })
const F = (t, v) => {
    const c = t.__vccOpts || t
    for (const [b, _] of v) c[b] = _
    return c
  },
  L = /* @__PURE__ */ F(q, [['__scopeId', 'data-v-0275db09']]),
  $ = {
    install(t) {
      t.component('lib-list', L)
    }
  }
export { $ as default }
