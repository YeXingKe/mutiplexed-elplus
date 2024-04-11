;(function (e, t) {
  typeof exports == 'object' && typeof module < 'u'
    ? t(exports)
    : typeof define == 'function' && define.amd
    ? define(['exports'], t)
    : ((e = typeof globalThis < 'u' ? globalThis : e || self), t((e.index = {})))
})(this, function (e) {
  'use strict'
  const t = n => {
    if (n) return n.replace(/(A-Z)g/, '-$1').toLocaleLowerCase()
  }
  ;(e.toLine = t),
    Object.defineProperties(e, {
      __esModule: { value: !0 },
      [Symbol.toStringTag]: { value: 'Module' }
    })
})
