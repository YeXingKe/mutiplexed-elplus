import {
  defineComponent as p,
  ref as u,
  watch as m,
  resolveComponent as f,
  openBlock as S,
  createElementBlock as g,
  createVNode as o,
  mergeProps as c
} from 'vue'
const T = { class: 'demo-time-range' },
  v = /* @__PURE__ */ p({
    __name: 'index',
    props: {
      startPlaceHolder: {
        type: String,
        default: '\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4'
      },
      startTimeStart: {
        type: String,
        default: '08:00'
      },
      startStep: {
        type: String,
        default: '00:30'
      },
      startTimeEnd: {
        type: String,
        default: '24:00'
      },
      endPlaceHolder: {
        type: String,
        default: '\u8BF7\u9009\u62E9\u7ED3\u675F\u65F6\u95F4'
      },
      endTimeStart: {
        type: String,
        default: '08:00'
      },
      endStep: {
        type: String,
        default: '00:30'
      },
      endTimeEnd: {
        type: String,
        default: '24:00'
      }
    },
    emits: ['startChange', 'endChange'],
    setup(e, { emit: i }) {
      const a = u(''),
        l = u(''),
        d = u(!0)
      return (
        m(
          () => a.value,
          t => {
            t === '' ? ((l.value = ''), (d.value = !0)) : ((d.value = !1), i('startChange', t))
          }
        ),
        m(
          () => l.value,
          t => {
            t !== '' &&
              i('endChange', {
                startTime: a.value,
                endTime: t
              })
          }
        ),
        (t, n) => {
          const s = f('el-time-select')
          return (
            S(),
            g('div', T, [
              o(
                s,
                c(
                  {
                    modelValue: a.value,
                    'onUpdate:modelValue': n[0] || (n[0] = r => (a.value = r)),
                    placeholder: e.startPlaceHolder,
                    start: e.startTimeStart,
                    step: e.startStep,
                    end: e.startTimeEnd
                  },
                  t.$attrs.startOptions
                ),
                null,
                16,
                ['modelValue', 'placeholder', 'start', 'step', 'end']
              ),
              o(
                s,
                c(
                  {
                    class: 'ml-2',
                    modelValue: l.value,
                    'onUpdate:modelValue': n[1] || (n[1] = r => (l.value = r)),
                    'min-time': a.value,
                    placeholder: e.endPlaceHolder,
                    start: e.endTimeStart,
                    step: e.endStep,
                    end: e.endTimeEnd,
                    disabled: d.value
                  },
                  t.$attrs.startOptions
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
  }),
  y = {
    install(e) {
      e.component('lib-choose-time', v)
    }
  }
export { y as default }
