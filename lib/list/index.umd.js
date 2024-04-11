;(function (e, o) {
  typeof exports == 'object' && typeof module < 'u'
    ? (module.exports = o(require('vue')))
    : typeof define == 'function' && define.amd
    ? define(['vue'], o)
    : ((e = typeof globalThis < 'u' ? globalThis : e || self), (e.index = o(e.Vue)))
})(this, function (e) {
  'use strict'
  const o = t => (e.pushScopeId('data-v-0275db09'), (t = t()), e.popScopeId(), t),
    d = { class: 'list-tabs__item' },
    _ = { class: 'avatar' },
    p = { class: 'content' },
    m = { class: 'mt-sm' },
    f = { class: 'actions' },
    k = o(() => e.createElementVNode('span', null, null, -1)),
    x = e.defineComponent({
      __name: 'index',
      props: { list: { type: Array, required: !0 }, actions: { type: Array, default: () => [] } },
      setup(t) {
        return (
          console.log(t.list),
          (l, a) => {
            const c = e.resolveComponent('el-avatar'),
              y = e.resolveComponent('el-scrollbar'),
              B = e.resolveComponent('el-button'),
              b = e.resolveComponent('el-tab-pane'),
              E = e.resolveComponent('el-tabs')
            return (
              e.openBlock(),
              e.createElementBlock('div', d, [
                e.createVNode(E, null, {
                  default: e.withCtx(() => [
                    (e.openBlock(!0),
                    e.createElementBlock(
                      e.Fragment,
                      null,
                      e.renderList(
                        t.list,
                        (i, C) => (
                          e.openBlock(),
                          e.createBlock(
                            b,
                            { key: C, label: i.title },
                            {
                              default: e.withCtx(() => [
                                e.createVNode(
                                  y,
                                  { 'max-height': '300px' },
                                  {
                                    default: e.withCtx(() => [
                                      (e.openBlock(!0),
                                      e.createElementBlock(
                                        e.Fragment,
                                        null,
                                        e.renderList(
                                          i.content,
                                          (n, s) => (
                                            e.openBlock(),
                                            e.createElementBlock(
                                              'div',
                                              { class: 'container', key: s },
                                              [
                                                e.createElementVNode('div', _, [
                                                  e.createVNode(
                                                    c,
                                                    { size: 36, src: n.avatar },
                                                    null,
                                                    8,
                                                    ['src']
                                                  )
                                                ]),
                                                e.createElementVNode('div', p, [
                                                  e.createElementVNode(
                                                    'div',
                                                    null,
                                                    e.toDisplayString(n.title),
                                                    1
                                                  ),
                                                  e.createElementVNode(
                                                    'div',
                                                    m,
                                                    e.toDisplayString(n.time),
                                                    1
                                                  )
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
                                e.createElementVNode('div', f, [
                                  (e.openBlock(!0),
                                  e.createElementBlock(
                                    e.Fragment,
                                    null,
                                    e.renderList(
                                      t.actions,
                                      (n, s) => (
                                        e.openBlock(),
                                        e.createBlock(
                                          B,
                                          { size: 'default', text: '', key: s },
                                          {
                                            default: e.withCtx(() => [
                                              (e.openBlock(),
                                              e.createBlock(
                                                e.resolveDynamicComponent(`el-icon-${n.icon}`),
                                                { class: 'mr-sm' }
                                              )),
                                              k,
                                              e.createElementVNode(
                                                'span',
                                                null,
                                                e.toDisplayString(n.text),
                                                1
                                              )
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
    }),
    V = '',
    h = ((t, r) => {
      const l = t.__vccOpts || t
      for (const [a, c] of r) l[a] = c
      return l
    })(x, [['__scopeId', 'data-v-0275db09']])
  return {
    install(t) {
      t.component('lib-list', h)
    }
  }
})
