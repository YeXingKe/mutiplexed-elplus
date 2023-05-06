;(function (e, a) {
  typeof exports == 'object' && typeof module < 'u'
    ? (module.exports = a(require('vue')))
    : typeof define == 'function' && define.amd
    ? define(['vue'], a)
    : ((e = typeof globalThis < 'u' ? globalThis : e || self), (e.index = a(e.Vue)))
})(this, function (e) {
  'use strict'
  const a = { class: 'demo-time-range' },
    m = e.defineComponent({
      __name: 'index',
      props: {
        startPlaceHolder: { type: String, default: '\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4' },
        startTimeStart: { type: String, default: '08:00' },
        startStep: { type: String, default: '00:30' },
        startTimeEnd: { type: String, default: '24:00' },
        endPlaceHolder: { type: String, default: '\u8BF7\u9009\u62E9\u7ED3\u675F\u65F6\u95F4' },
        endTimeStart: { type: String, default: '08:00' },
        endStep: { type: String, default: '00:30' },
        endTimeEnd: { type: String, default: '24:00' }
      },
      emits: ['startChange', 'endChange'],
      setup(t, { emit: o }) {
        const d = e.ref(''),
          l = e.ref(''),
          r = e.ref(!0)
        return (
          e.watch(
            () => d.value,
            n => {
              n === '' ? ((l.value = ''), (r.value = !0)) : ((r.value = !1), o('startChange', n))
            }
          ),
          e.watch(
            () => l.value,
            n => {
              n !== '' && o('endChange', { startTime: d.value, endTime: n })
            }
          ),
          (n, i) => {
            const u = e.resolveComponent('el-time-select')
            return (
              e.openBlock(),
              e.createElementBlock('div', a, [
                e.createVNode(
                  u,
                  e.mergeProps(
                    {
                      modelValue: d.value,
                      'onUpdate:modelValue': i[0] || (i[0] = s => (d.value = s)),
                      placeholder: t.startPlaceHolder,
                      start: t.startTimeStart,
                      step: t.startStep,
                      end: t.startTimeEnd
                    },
                    n.$attrs.startOptions
                  ),
                  null,
                  16,
                  ['modelValue', 'placeholder', 'start', 'step', 'end']
                ),
                e.createVNode(
                  u,
                  e.mergeProps(
                    {
                      class: 'ml-2',
                      modelValue: l.value,
                      'onUpdate:modelValue': i[1] || (i[1] = s => (l.value = s)),
                      'min-time': d.value,
                      placeholder: t.endPlaceHolder,
                      start: t.endTimeStart,
                      step: t.endStep,
                      end: t.endTimeEnd,
                      disabled: r.value
                    },
                    n.$attrs.startOptions
                  ),
                  null,
                  16,
                  ['modelValue', 'min-time', 'placeholder', 'start', 'step', 'end', 'disabled']
                )
              ])
            )
          }
        )
      }
    })
  return {
    install(t) {
      t.component('lib-choose-time', m)
    }
  }
})
