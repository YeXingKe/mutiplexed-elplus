;(function (g, It) {
  typeof exports == 'object' && typeof module < 'u'
    ? (module.exports = It(require('vue')))
    : typeof define == 'function' && define.amd
    ? define(['vue'], It)
    : ((g = typeof globalThis < 'u' ? globalThis : g || self), (g.index = It(g.Vue)))
})(this, function (g) {
  'use strict'
  var AF = Object.defineProperty
  var OF = (g, It, Qr) =>
    It in g
      ? AF(g, It, { enumerable: !0, configurable: !0, writable: !0, value: Qr })
      : (g[It] = Qr)
  var xe = (g, It, Qr) => (OF(g, typeof It != 'symbol' ? It + '' : It, Qr), Qr)
  function It(e, t) {
    const r = Object.create(null),
      n = e.split(',')
    for (let a = 0; a < n.length; a++) r[n[a]] = !0
    return t ? a => !!r[a.toLowerCase()] : a => !!r[a]
  }
  process.env.NODE_ENV !== 'production' && Object.freeze({}),
    process.env.NODE_ENV !== 'production' && Object.freeze([])
  const Qr = () => {},
    Gh = Object.assign,
    zh = Object.prototype.hasOwnProperty,
    Qa = (e, t) => zh.call(e, t),
    Lr = Array.isArray,
    ea = e => Fo(e) === '[object Map]',
    Xh = e => typeof e == 'function',
    Kh = e => typeof e == 'string',
    vs = e => typeof e == 'symbol',
    ei = e => e !== null && typeof e == 'object',
    qh = Object.prototype.toString,
    Fo = e => qh.call(e),
    Co = e => Fo(e).slice(8, -1),
    ws = e => Kh(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
    Jh = (e => {
      const t = Object.create(null)
      return r => t[r] || (t[r] = e(r))
    })(e => e.charAt(0).toUpperCase() + e.slice(1)),
    Do = (e, t) => !Object.is(e, t)
  function ko(e, ...t) {
    console.warn(`[Vue warn] ${e}`, ...t)
  }
  let Zh
  function Qh(e, t = Zh) {
    t && t.active && t.effects.push(e)
  }
  const ta = e => {
      const t = new Set(e)
      return (t.w = 0), (t.n = 0), t
    },
    Ro = e => (e.w & Br) > 0,
    No = e => (e.n & Br) > 0,
    e1 = ({ deps: e }) => {
      if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Br
    },
    t1 = e => {
      const { deps: t } = e
      if (t.length) {
        let r = 0
        for (let n = 0; n < t.length; n++) {
          const a = t[n]
          Ro(a) && !No(a) ? a.delete(e) : (t[r++] = a), (a.w &= ~Br), (a.n &= ~Br)
        }
        t.length = r
      }
    },
    Ts = new WeakMap()
  let ra = 0,
    Br = 1
  const Es = 30
  let At
  const en = Symbol(process.env.NODE_ENV !== 'production' ? 'iterate' : ''),
    Ss = Symbol(process.env.NODE_ENV !== 'production' ? 'Map key iterate' : '')
  class r1 {
    constructor(t, r = null, n) {
      ;(this.fn = t),
        (this.scheduler = r),
        (this.active = !0),
        (this.deps = []),
        (this.parent = void 0),
        Qh(this, n)
    }
    run() {
      if (!this.active) return this.fn()
      let t = At,
        r = Ur
      for (; t; ) {
        if (t === this) return
        t = t.parent
      }
      try {
        return (
          (this.parent = At),
          (At = this),
          (Ur = !0),
          (Br = 1 << ++ra),
          ra <= Es ? e1(this) : Po(this),
          this.fn()
        )
      } finally {
        ra <= Es && t1(this),
          (Br = 1 << --ra),
          (At = this.parent),
          (Ur = r),
          (this.parent = void 0),
          this.deferStop && this.stop()
      }
    }
    stop() {
      At === this
        ? (this.deferStop = !0)
        : this.active && (Po(this), this.onStop && this.onStop(), (this.active = !1))
    }
  }
  function Po(e) {
    const { deps: t } = e
    if (t.length) {
      for (let r = 0; r < t.length; r++) t[r].delete(e)
      t.length = 0
    }
  }
  let Ur = !0
  const Io = []
  function n1() {
    Io.push(Ur), (Ur = !1)
  }
  function a1() {
    const e = Io.pop()
    Ur = e === void 0 ? !0 : e
  }
  function Yt(e, t, r) {
    if (Ur && At) {
      let n = Ts.get(e)
      n || Ts.set(e, (n = new Map()))
      let a = n.get(r)
      a || n.set(r, (a = ta()))
      const i =
        process.env.NODE_ENV !== 'production' ? { effect: At, target: e, type: t, key: r } : void 0
      ys(a, i)
    }
  }
  function ys(e, t) {
    let r = !1
    ra <= Es ? No(e) || ((e.n |= Br), (r = !Ro(e))) : (r = !e.has(At)),
      r &&
        (e.add(At),
        At.deps.push(e),
        process.env.NODE_ENV !== 'production' &&
          At.onTrack &&
          At.onTrack(Object.assign({ effect: At }, t)))
  }
  function Wr(e, t, r, n, a, i) {
    const s = Ts.get(e)
    if (!s) return
    let o = []
    if (t === 'clear') o = [...s.values()]
    else if (r === 'length' && Lr(e)) {
      const f = Number(n)
      s.forEach((c, u) => {
        ;(u === 'length' || u >= f) && o.push(c)
      })
    } else
      switch ((r !== void 0 && o.push(s.get(r)), t)) {
        case 'add':
          Lr(e) ? ws(r) && o.push(s.get('length')) : (o.push(s.get(en)), ea(e) && o.push(s.get(Ss)))
          break
        case 'delete':
          Lr(e) || (o.push(s.get(en)), ea(e) && o.push(s.get(Ss)))
          break
        case 'set':
          ea(e) && o.push(s.get(en))
          break
      }
    const l =
      process.env.NODE_ENV !== 'production'
        ? { target: e, type: t, key: r, newValue: n, oldValue: a, oldTarget: i }
        : void 0
    if (o.length === 1) o[0] && (process.env.NODE_ENV !== 'production' ? yn(o[0], l) : yn(o[0]))
    else {
      const f = []
      for (const c of o) c && f.push(...c)
      process.env.NODE_ENV !== 'production' ? yn(ta(f), l) : yn(ta(f))
    }
  }
  function yn(e, t) {
    const r = Lr(e) ? e : [...e]
    for (const n of r) n.computed && Mo(n, t)
    for (const n of r) n.computed || Mo(n, t)
  }
  function Mo(e, t) {
    ;(e !== At || e.allowRecurse) &&
      (process.env.NODE_ENV !== 'production' && e.onTrigger && e.onTrigger(Gh({ effect: e }, t)),
      e.scheduler ? e.scheduler() : e.run())
  }
  const i1 = It('__proto__,__v_isRef,__isVue'),
    bo = new Set(
      Object.getOwnPropertyNames(Symbol)
        .filter(e => e !== 'arguments' && e !== 'caller')
        .map(e => Symbol[e])
        .filter(vs)
    ),
    s1 = Bo(),
    o1 = Bo(!0),
    Lo = f1()
  function f1() {
    const e = {}
    return (
      ['includes', 'indexOf', 'lastIndexOf'].forEach(t => {
        e[t] = function (...r) {
          const n = Le(this)
          for (let i = 0, s = this.length; i < s; i++) Yt(n, 'get', i + '')
          const a = n[t](...r)
          return a === -1 || a === !1 ? n[t](...r.map(Le)) : a
        }
      }),
      ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(t => {
        e[t] = function (...r) {
          n1()
          const n = Le(this)[t].apply(this, r)
          return a1(), n
        }
      }),
      e
    )
  }
  function l1(e) {
    const t = Le(this)
    return Yt(t, 'has', e), t.hasOwnProperty(e)
  }
  function Bo(e = !1, t = !1) {
    return function (n, a, i) {
      if (a === '__v_isReactive') return !e
      if (a === '__v_isReadonly') return e
      if (a === '__v_isShallow') return t
      if (a === '__v_raw' && i === (e ? (t ? A1 : Go) : t ? y1 : Vo).get(n)) return n
      const s = Lr(n)
      if (!e) {
        if (s && Qa(Lo, a)) return Reflect.get(Lo, a, i)
        if (a === 'hasOwnProperty') return l1
      }
      const o = Reflect.get(n, a, i)
      return (vs(a) ? bo.has(a) : i1(a)) || (e || Yt(n, 'get', a), t)
        ? o
        : na(o)
        ? s && ws(a)
          ? o
          : o.value
        : ei(o)
        ? e
          ? zo(o)
          : Os(o)
        : o
    }
  }
  const c1 = u1()
  function u1(e = !1) {
    return function (r, n, a, i) {
      let s = r[n]
      if (Fs(s) && na(s) && !na(a)) return !1
      if (!e && (!C1(a) && !Fs(a) && ((s = Le(s)), (a = Le(a))), !Lr(r) && na(s) && !na(a)))
        return (s.value = a), !0
      const o = Lr(r) && ws(n) ? Number(n) < r.length : Qa(r, n),
        l = Reflect.set(r, n, a, i)
      return r === Le(i) && (o ? Do(a, s) && Wr(r, 'set', n, a, s) : Wr(r, 'add', n, a)), l
    }
  }
  function h1(e, t) {
    const r = Qa(e, t),
      n = e[t],
      a = Reflect.deleteProperty(e, t)
    return a && r && Wr(e, 'delete', t, void 0, n), a
  }
  function d1(e, t) {
    const r = Reflect.has(e, t)
    return (!vs(t) || !bo.has(t)) && Yt(e, 'has', t), r
  }
  function p1(e) {
    return Yt(e, 'iterate', Lr(e) ? 'length' : en), Reflect.ownKeys(e)
  }
  const x1 = { get: s1, set: c1, deleteProperty: h1, has: d1, ownKeys: p1 },
    m1 = {
      get: o1,
      set(e, t) {
        return (
          process.env.NODE_ENV !== 'production' &&
            ko(`Set operation on key "${String(t)}" failed: target is readonly.`, e),
          !0
        )
      },
      deleteProperty(e, t) {
        return (
          process.env.NODE_ENV !== 'production' &&
            ko(`Delete operation on key "${String(t)}" failed: target is readonly.`, e),
          !0
        )
      }
    },
    As = e => e,
    ti = e => Reflect.getPrototypeOf(e)
  function ri(e, t, r = !1, n = !1) {
    e = e.__v_raw
    const a = Le(e),
      i = Le(t)
    r || (t !== i && Yt(a, 'get', t), Yt(a, 'get', i))
    const { has: s } = ti(a),
      o = n ? As : r ? Ds : Cs
    if (s.call(a, t)) return o(e.get(t))
    if (s.call(a, i)) return o(e.get(i))
    e !== a && e.get(t)
  }
  function ni(e, t = !1) {
    const r = this.__v_raw,
      n = Le(r),
      a = Le(e)
    return (
      t || (e !== a && Yt(n, 'has', e), Yt(n, 'has', a)), e === a ? r.has(e) : r.has(e) || r.has(a)
    )
  }
  function ai(e, t = !1) {
    return (e = e.__v_raw), !t && Yt(Le(e), 'iterate', en), Reflect.get(e, 'size', e)
  }
  function Uo(e) {
    e = Le(e)
    const t = Le(this)
    return ti(t).has.call(t, e) || (t.add(e), Wr(t, 'add', e, e)), this
  }
  function Wo(e, t) {
    t = Le(t)
    const r = Le(this),
      { has: n, get: a } = ti(r)
    let i = n.call(r, e)
    i ? process.env.NODE_ENV !== 'production' && jo(r, n, e) : ((e = Le(e)), (i = n.call(r, e)))
    const s = a.call(r, e)
    return r.set(e, t), i ? Do(t, s) && Wr(r, 'set', e, t, s) : Wr(r, 'add', e, t), this
  }
  function Ho(e) {
    const t = Le(this),
      { has: r, get: n } = ti(t)
    let a = r.call(t, e)
    a ? process.env.NODE_ENV !== 'production' && jo(t, r, e) : ((e = Le(e)), (a = r.call(t, e)))
    const i = n ? n.call(t, e) : void 0,
      s = t.delete(e)
    return a && Wr(t, 'delete', e, void 0, i), s
  }
  function Yo() {
    const e = Le(this),
      t = e.size !== 0,
      r = process.env.NODE_ENV !== 'production' ? (ea(e) ? new Map(e) : new Set(e)) : void 0,
      n = e.clear()
    return t && Wr(e, 'clear', void 0, void 0, r), n
  }
  function ii(e, t) {
    return function (n, a) {
      const i = this,
        s = i.__v_raw,
        o = Le(s),
        l = t ? As : e ? Ds : Cs
      return !e && Yt(o, 'iterate', en), s.forEach((f, c) => n.call(a, l(f), l(c), i))
    }
  }
  function si(e, t, r) {
    return function (...n) {
      const a = this.__v_raw,
        i = Le(a),
        s = ea(i),
        o = e === 'entries' || (e === Symbol.iterator && s),
        l = e === 'keys' && s,
        f = a[e](...n),
        c = r ? As : t ? Ds : Cs
      return (
        !t && Yt(i, 'iterate', l ? Ss : en),
        {
          next() {
            const { value: u, done: h } = f.next()
            return h ? { value: u, done: h } : { value: o ? [c(u[0]), c(u[1])] : c(u), done: h }
          },
          [Symbol.iterator]() {
            return this
          }
        }
      )
    }
  }
  function Hr(e) {
    return function (...t) {
      if (process.env.NODE_ENV !== 'production') {
        const r = t[0] ? `on key "${t[0]}" ` : ''
        console.warn(`${Jh(e)} operation ${r}failed: target is readonly.`, Le(this))
      }
      return e === 'delete' ? !1 : this
    }
  }
  function _1() {
    const e = {
        get(i) {
          return ri(this, i)
        },
        get size() {
          return ai(this)
        },
        has: ni,
        add: Uo,
        set: Wo,
        delete: Ho,
        clear: Yo,
        forEach: ii(!1, !1)
      },
      t = {
        get(i) {
          return ri(this, i, !1, !0)
        },
        get size() {
          return ai(this)
        },
        has: ni,
        add: Uo,
        set: Wo,
        delete: Ho,
        clear: Yo,
        forEach: ii(!1, !0)
      },
      r = {
        get(i) {
          return ri(this, i, !0)
        },
        get size() {
          return ai(this, !0)
        },
        has(i) {
          return ni.call(this, i, !0)
        },
        add: Hr('add'),
        set: Hr('set'),
        delete: Hr('delete'),
        clear: Hr('clear'),
        forEach: ii(!0, !1)
      },
      n = {
        get(i) {
          return ri(this, i, !0, !0)
        },
        get size() {
          return ai(this, !0)
        },
        has(i) {
          return ni.call(this, i, !0)
        },
        add: Hr('add'),
        set: Hr('set'),
        delete: Hr('delete'),
        clear: Hr('clear'),
        forEach: ii(!0, !0)
      }
    return (
      ['keys', 'values', 'entries', Symbol.iterator].forEach(i => {
        ;(e[i] = si(i, !1, !1)),
          (r[i] = si(i, !0, !1)),
          (t[i] = si(i, !1, !0)),
          (n[i] = si(i, !0, !0))
      }),
      [e, r, t, n]
    )
  }
  const [g1, v1, w1, T1] = _1()
  function $o(e, t) {
    const r = t ? (e ? T1 : w1) : e ? v1 : g1
    return (n, a, i) =>
      a === '__v_isReactive'
        ? !e
        : a === '__v_isReadonly'
        ? e
        : a === '__v_raw'
        ? n
        : Reflect.get(Qa(r, a) && a in n ? r : n, a, i)
  }
  const E1 = { get: $o(!1, !1) },
    S1 = { get: $o(!0, !1) }
  function jo(e, t, r) {
    const n = Le(r)
    if (n !== r && t.call(e, n)) {
      const a = Co(e)
      console.warn(
        `Reactive ${a} contains both the raw and reactive versions of the same object${
          a === 'Map' ? ' as keys' : ''
        }, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
      )
    }
  }
  const Vo = new WeakMap(),
    y1 = new WeakMap(),
    Go = new WeakMap(),
    A1 = new WeakMap()
  function O1(e) {
    switch (e) {
      case 'Object':
      case 'Array':
        return 1
      case 'Map':
      case 'Set':
      case 'WeakMap':
      case 'WeakSet':
        return 2
      default:
        return 0
    }
  }
  function F1(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : O1(Co(e))
  }
  function Os(e) {
    return Fs(e) ? e : Xo(e, !1, x1, E1, Vo)
  }
  function zo(e) {
    return Xo(e, !0, m1, S1, Go)
  }
  function Xo(e, t, r, n, a) {
    if (!ei(e))
      return (
        process.env.NODE_ENV !== 'production' &&
          console.warn(`value cannot be made reactive: ${String(e)}`),
        e
      )
    if (e.__v_raw && !(t && e.__v_isReactive)) return e
    const i = a.get(e)
    if (i) return i
    const s = F1(e)
    if (s === 0) return e
    const o = new Proxy(e, s === 2 ? n : r)
    return a.set(e, o), o
  }
  function Fs(e) {
    return !!(e && e.__v_isReadonly)
  }
  function C1(e) {
    return !!(e && e.__v_isShallow)
  }
  function Le(e) {
    const t = e && e.__v_raw
    return t ? Le(t) : e
  }
  const Cs = e => (ei(e) ? Os(e) : e),
    Ds = e => (ei(e) ? zo(e) : e)
  function D1(e) {
    Ur &&
      At &&
      ((e = Le(e)),
      process.env.NODE_ENV !== 'production'
        ? ys(e.dep || (e.dep = ta()), { target: e, type: 'get', key: 'value' })
        : ys(e.dep || (e.dep = ta())))
  }
  function k1(e, t) {
    e = Le(e)
    const r = e.dep
    r &&
      (process.env.NODE_ENV !== 'production'
        ? yn(r, { target: e, type: 'set', key: 'value', newValue: t })
        : yn(r))
  }
  function na(e) {
    return !!(e && e.__v_isRef === !0)
  }
  var Ko
  class R1 {
    constructor(t, r, n, a) {
      ;(this._setter = r),
        (this.dep = void 0),
        (this.__v_isRef = !0),
        (this[Ko] = !1),
        (this._dirty = !0),
        (this.effect = new r1(t, () => {
          this._dirty || ((this._dirty = !0), k1(this))
        })),
        (this.effect.computed = this),
        (this.effect.active = this._cacheable = !a),
        (this.__v_isReadonly = n)
    }
    get value() {
      const t = Le(this)
      return (
        D1(t),
        (t._dirty || !t._cacheable) && ((t._dirty = !1), (t._value = t.effect.run())),
        t._value
      )
    }
    set value(t) {
      this._setter(t)
    }
  }
  Ko = '__v_isReadonly'
  function aa(e, t, r = !1) {
    let n, a
    const i = Xh(e)
    i
      ? ((n = e),
        (a =
          process.env.NODE_ENV !== 'production'
            ? () => {
                console.warn('Write operation failed: computed value is readonly')
              }
            : Qr))
      : ((n = e.get), (a = e.set))
    const s = new R1(n, a, i || !a, r)
    return (
      process.env.NODE_ENV !== 'production' &&
        t &&
        !r &&
        ((s.effect.onTrack = t.onTrack), (s.effect.onTrigger = t.onTrigger)),
      s
    )
  }
  const N1 = e => {
    if (e) return e.replace(/(A-Z)g/, '-$1').toLocaleLowerCase()
  }
  function P1() {
    ;(this.__data__ = []), (this.size = 0)
  }
  function qo(e, t) {
    return e === t || (e !== e && t !== t)
  }
  function oi(e, t) {
    for (var r = e.length; r--; ) if (qo(e[r][0], t)) return r
    return -1
  }
  var I1 = Array.prototype,
    M1 = I1.splice
  function b1(e) {
    var t = this.__data__,
      r = oi(t, e)
    if (r < 0) return !1
    var n = t.length - 1
    return r == n ? t.pop() : M1.call(t, r, 1), --this.size, !0
  }
  function L1(e) {
    var t = this.__data__,
      r = oi(t, e)
    return r < 0 ? void 0 : t[r][1]
  }
  function B1(e) {
    return oi(this.__data__, e) > -1
  }
  function U1(e, t) {
    var r = this.__data__,
      n = oi(r, e)
    return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this
  }
  function xr(e) {
    var t = -1,
      r = e == null ? 0 : e.length
    for (this.clear(); ++t < r; ) {
      var n = e[t]
      this.set(n[0], n[1])
    }
  }
  ;(xr.prototype.clear = P1),
    (xr.prototype.delete = b1),
    (xr.prototype.get = L1),
    (xr.prototype.has = B1),
    (xr.prototype.set = U1)
  function W1() {
    ;(this.__data__ = new xr()), (this.size = 0)
  }
  function H1(e) {
    var t = this.__data__,
      r = t.delete(e)
    return (this.size = t.size), r
  }
  function Y1(e) {
    return this.__data__.get(e)
  }
  function $1(e) {
    return this.__data__.has(e)
  }
  var j1 = typeof global == 'object' && global && global.Object === Object && global
  const Jo = j1
  var V1 = typeof self == 'object' && self && self.Object === Object && self,
    G1 = Jo || V1 || Function('return this')()
  const ir = G1
  var z1 = ir.Symbol
  const An = z1
  var Zo = Object.prototype,
    X1 = Zo.hasOwnProperty,
    K1 = Zo.toString,
    ia = An ? An.toStringTag : void 0
  function q1(e) {
    var t = X1.call(e, ia),
      r = e[ia]
    try {
      e[ia] = void 0
      var n = !0
    } catch {}
    var a = K1.call(e)
    return n && (t ? (e[ia] = r) : delete e[ia]), a
  }
  var J1 = Object.prototype,
    Z1 = J1.toString
  function Q1(e) {
    return Z1.call(e)
  }
  var ed = '[object Null]',
    td = '[object Undefined]',
    Qo = An ? An.toStringTag : void 0
  function sa(e) {
    return e == null ? (e === void 0 ? td : ed) : Qo && Qo in Object(e) ? q1(e) : Q1(e)
  }
  function oa(e) {
    var t = typeof e
    return e != null && (t == 'object' || t == 'function')
  }
  var rd = '[object AsyncFunction]',
    nd = '[object Function]',
    ad = '[object GeneratorFunction]',
    id = '[object Proxy]'
  function ef(e) {
    if (!oa(e)) return !1
    var t = sa(e)
    return t == nd || t == ad || t == rd || t == id
  }
  var sd = ir['__core-js_shared__']
  const ks = sd
  var tf = (function () {
    var e = /[^.]+$/.exec((ks && ks.keys && ks.keys.IE_PROTO) || '')
    return e ? 'Symbol(src)_1.' + e : ''
  })()
  function od(e) {
    return !!tf && tf in e
  }
  var fd = Function.prototype,
    ld = fd.toString
  function tn(e) {
    if (e != null) {
      try {
        return ld.call(e)
      } catch {}
      try {
        return e + ''
      } catch {}
    }
    return ''
  }
  var cd = /[\\^$.*+?()[\]{}|]/g,
    ud = /^\[object .+?Constructor\]$/,
    hd = Function.prototype,
    dd = Object.prototype,
    pd = hd.toString,
    xd = dd.hasOwnProperty,
    md = RegExp(
      '^' +
        pd
          .call(xd)
          .replace(cd, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$'
    )
  function _d(e) {
    if (!oa(e) || od(e)) return !1
    var t = ef(e) ? md : ud
    return t.test(tn(e))
  }
  function gd(e, t) {
    return e == null ? void 0 : e[t]
  }
  function rn(e, t) {
    var r = gd(e, t)
    return _d(r) ? r : void 0
  }
  var vd = rn(ir, 'Map')
  const fa = vd
  var wd = rn(Object, 'create')
  const la = wd
  function Td() {
    ;(this.__data__ = la ? la(null) : {}), (this.size = 0)
  }
  function Ed(e) {
    var t = this.has(e) && delete this.__data__[e]
    return (this.size -= t ? 1 : 0), t
  }
  var Sd = '__lodash_hash_undefined__',
    yd = Object.prototype,
    Ad = yd.hasOwnProperty
  function Od(e) {
    var t = this.__data__
    if (la) {
      var r = t[e]
      return r === Sd ? void 0 : r
    }
    return Ad.call(t, e) ? t[e] : void 0
  }
  var Fd = Object.prototype,
    Cd = Fd.hasOwnProperty
  function Dd(e) {
    var t = this.__data__
    return la ? t[e] !== void 0 : Cd.call(t, e)
  }
  var kd = '__lodash_hash_undefined__'
  function Rd(e, t) {
    var r = this.__data__
    return (this.size += this.has(e) ? 0 : 1), (r[e] = la && t === void 0 ? kd : t), this
  }
  function nn(e) {
    var t = -1,
      r = e == null ? 0 : e.length
    for (this.clear(); ++t < r; ) {
      var n = e[t]
      this.set(n[0], n[1])
    }
  }
  ;(nn.prototype.clear = Td),
    (nn.prototype.delete = Ed),
    (nn.prototype.get = Od),
    (nn.prototype.has = Dd),
    (nn.prototype.set = Rd)
  function Nd() {
    ;(this.size = 0), (this.__data__ = { hash: new nn(), map: new (fa || xr)(), string: new nn() })
  }
  function Pd(e) {
    var t = typeof e
    return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
      ? e !== '__proto__'
      : e === null
  }
  function fi(e, t) {
    var r = e.__data__
    return Pd(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map
  }
  function Id(e) {
    var t = fi(this, e).delete(e)
    return (this.size -= t ? 1 : 0), t
  }
  function Md(e) {
    return fi(this, e).get(e)
  }
  function bd(e) {
    return fi(this, e).has(e)
  }
  function Ld(e, t) {
    var r = fi(this, e),
      n = r.size
    return r.set(e, t), (this.size += r.size == n ? 0 : 1), this
  }
  function On(e) {
    var t = -1,
      r = e == null ? 0 : e.length
    for (this.clear(); ++t < r; ) {
      var n = e[t]
      this.set(n[0], n[1])
    }
  }
  ;(On.prototype.clear = Nd),
    (On.prototype.delete = Id),
    (On.prototype.get = Md),
    (On.prototype.has = bd),
    (On.prototype.set = Ld)
  var Bd = 200
  function Ud(e, t) {
    var r = this.__data__
    if (r instanceof xr) {
      var n = r.__data__
      if (!fa || n.length < Bd - 1) return n.push([e, t]), (this.size = ++r.size), this
      r = this.__data__ = new On(n)
    }
    return r.set(e, t), (this.size = r.size), this
  }
  function Fn(e) {
    var t = (this.__data__ = new xr(e))
    this.size = t.size
  }
  ;(Fn.prototype.clear = W1),
    (Fn.prototype.delete = H1),
    (Fn.prototype.get = Y1),
    (Fn.prototype.has = $1),
    (Fn.prototype.set = Ud)
  function Wd(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; );
    return e
  }
  var Hd = (function () {
    try {
      var e = rn(Object, 'defineProperty')
      return e({}, '', {}), e
    } catch {}
  })()
  const rf = Hd
  function nf(e, t, r) {
    t == '__proto__' && rf
      ? rf(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
      : (e[t] = r)
  }
  var Yd = Object.prototype,
    $d = Yd.hasOwnProperty
  function af(e, t, r) {
    var n = e[t]
    ;(!($d.call(e, t) && qo(n, r)) || (r === void 0 && !(t in e))) && nf(e, t, r)
  }
  function li(e, t, r, n) {
    var a = !r
    r || (r = {})
    for (var i = -1, s = t.length; ++i < s; ) {
      var o = t[i],
        l = n ? n(r[o], e[o], o, r, e) : void 0
      l === void 0 && (l = e[o]), a ? nf(r, o, l) : af(r, o, l)
    }
    return r
  }
  function jd(e, t) {
    for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r)
    return n
  }
  function ca(e) {
    return e != null && typeof e == 'object'
  }
  var Vd = '[object Arguments]'
  function sf(e) {
    return ca(e) && sa(e) == Vd
  }
  var of = Object.prototype,
    Gd = of.hasOwnProperty,
    zd = of.propertyIsEnumerable,
    Xd = sf(
      (function () {
        return arguments
      })()
    )
      ? sf
      : function (e) {
          return ca(e) && Gd.call(e, 'callee') && !zd.call(e, 'callee')
        }
  const Kd = Xd
  var qd = Array.isArray
  const Rs = qd
  function Jd() {
    return !1
  }
  var ff = typeof exports == 'object' && exports && !exports.nodeType && exports,
    lf = ff && typeof module == 'object' && module && !module.nodeType && module,
    Zd = lf && lf.exports === ff,
    cf = Zd ? ir.Buffer : void 0,
    Qd = cf ? cf.isBuffer : void 0,
    ep = Qd || Jd
  const uf = ep
  var tp = 9007199254740991,
    rp = /^(?:0|[1-9]\d*)$/
  function np(e, t) {
    var r = typeof e
    return (
      (t = t == null ? tp : t),
      !!t && (r == 'number' || (r != 'symbol' && rp.test(e))) && e > -1 && e % 1 == 0 && e < t
    )
  }
  var ap = 9007199254740991
  function hf(e) {
    return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= ap
  }
  var ip = '[object Arguments]',
    sp = '[object Array]',
    op = '[object Boolean]',
    fp = '[object Date]',
    lp = '[object Error]',
    cp = '[object Function]',
    up = '[object Map]',
    hp = '[object Number]',
    dp = '[object Object]',
    pp = '[object RegExp]',
    xp = '[object Set]',
    mp = '[object String]',
    _p = '[object WeakMap]',
    gp = '[object ArrayBuffer]',
    vp = '[object DataView]',
    wp = '[object Float32Array]',
    Tp = '[object Float64Array]',
    Ep = '[object Int8Array]',
    Sp = '[object Int16Array]',
    yp = '[object Int32Array]',
    Ap = '[object Uint8Array]',
    Op = '[object Uint8ClampedArray]',
    Fp = '[object Uint16Array]',
    Cp = '[object Uint32Array]',
    He = {}
  ;(He[wp] = He[Tp] = He[Ep] = He[Sp] = He[yp] = He[Ap] = He[Op] = He[Fp] = He[Cp] = !0),
    (He[ip] =
      He[sp] =
      He[gp] =
      He[op] =
      He[vp] =
      He[fp] =
      He[lp] =
      He[cp] =
      He[up] =
      He[hp] =
      He[dp] =
      He[pp] =
      He[xp] =
      He[mp] =
      He[_p] =
        !1)
  function Dp(e) {
    return ca(e) && hf(e.length) && !!He[sa(e)]
  }
  function Ns(e) {
    return function (t) {
      return e(t)
    }
  }
  var df = typeof exports == 'object' && exports && !exports.nodeType && exports,
    ua = df && typeof module == 'object' && module && !module.nodeType && module,
    kp = ua && ua.exports === df,
    Ps = kp && Jo.process,
    Rp = (function () {
      try {
        var e = ua && ua.require && ua.require('util').types
        return e || (Ps && Ps.binding && Ps.binding('util'))
      } catch {}
    })()
  const Cn = Rp
  var pf = Cn && Cn.isTypedArray,
    Np = pf ? Ns(pf) : Dp
  const Pp = Np
  var Ip = Object.prototype,
    Mp = Ip.hasOwnProperty
  function xf(e, t) {
    var r = Rs(e),
      n = !r && Kd(e),
      a = !r && !n && uf(e),
      i = !r && !n && !a && Pp(e),
      s = r || n || a || i,
      o = s ? jd(e.length, String) : [],
      l = o.length
    for (var f in e)
      (t || Mp.call(e, f)) &&
        !(
          s &&
          (f == 'length' ||
            (a && (f == 'offset' || f == 'parent')) ||
            (i && (f == 'buffer' || f == 'byteLength' || f == 'byteOffset')) ||
            np(f, l))
        ) &&
        o.push(f)
    return o
  }
  var bp = Object.prototype
  function Is(e) {
    var t = e && e.constructor,
      r = (typeof t == 'function' && t.prototype) || bp
    return e === r
  }
  function mf(e, t) {
    return function (r) {
      return e(t(r))
    }
  }
  var Lp = mf(Object.keys, Object)
  const Bp = Lp
  var Up = Object.prototype,
    Wp = Up.hasOwnProperty
  function Hp(e) {
    if (!Is(e)) return Bp(e)
    var t = []
    for (var r in Object(e)) Wp.call(e, r) && r != 'constructor' && t.push(r)
    return t
  }
  function _f(e) {
    return e != null && hf(e.length) && !ef(e)
  }
  function Ms(e) {
    return _f(e) ? xf(e) : Hp(e)
  }
  function Yp(e, t) {
    return e && li(t, Ms(t), e)
  }
  function $p(e) {
    var t = []
    if (e != null) for (var r in Object(e)) t.push(r)
    return t
  }
  var jp = Object.prototype,
    Vp = jp.hasOwnProperty
  function Gp(e) {
    if (!oa(e)) return $p(e)
    var t = Is(e),
      r = []
    for (var n in e) (n == 'constructor' && (t || !Vp.call(e, n))) || r.push(n)
    return r
  }
  function bs(e) {
    return _f(e) ? xf(e, !0) : Gp(e)
  }
  function zp(e, t) {
    return e && li(t, bs(t), e)
  }
  var gf = typeof exports == 'object' && exports && !exports.nodeType && exports,
    vf = gf && typeof module == 'object' && module && !module.nodeType && module,
    Xp = vf && vf.exports === gf,
    wf = Xp ? ir.Buffer : void 0,
    Tf = wf ? wf.allocUnsafe : void 0
  function Kp(e, t) {
    if (t) return e.slice()
    var r = e.length,
      n = Tf ? Tf(r) : new e.constructor(r)
    return e.copy(n), n
  }
  function qp(e, t) {
    var r = -1,
      n = e.length
    for (t || (t = Array(n)); ++r < n; ) t[r] = e[r]
    return t
  }
  function Jp(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++r < n; ) {
      var s = e[r]
      t(s, r, e) && (i[a++] = s)
    }
    return i
  }
  function Ef() {
    return []
  }
  var Zp = Object.prototype,
    Qp = Zp.propertyIsEnumerable,
    Sf = Object.getOwnPropertySymbols,
    ex = Sf
      ? function (e) {
          return e == null
            ? []
            : ((e = Object(e)),
              Jp(Sf(e), function (t) {
                return Qp.call(e, t)
              }))
        }
      : Ef
  const Ls = ex
  function tx(e, t) {
    return li(e, Ls(e), t)
  }
  function yf(e, t) {
    for (var r = -1, n = t.length, a = e.length; ++r < n; ) e[a + r] = t[r]
    return e
  }
  var rx = mf(Object.getPrototypeOf, Object)
  const Af = rx
  var nx = Object.getOwnPropertySymbols,
    ax = nx
      ? function (e) {
          for (var t = []; e; ) yf(t, Ls(e)), (e = Af(e))
          return t
        }
      : Ef
  const Of = ax
  function ix(e, t) {
    return li(e, Of(e), t)
  }
  function Ff(e, t, r) {
    var n = t(e)
    return Rs(e) ? n : yf(n, r(e))
  }
  function sx(e) {
    return Ff(e, Ms, Ls)
  }
  function ox(e) {
    return Ff(e, bs, Of)
  }
  var fx = rn(ir, 'DataView')
  const Bs = fx
  var lx = rn(ir, 'Promise')
  const Us = lx
  var cx = rn(ir, 'Set')
  const Ws = cx
  var ux = rn(ir, 'WeakMap')
  const Hs = ux
  var Cf = '[object Map]',
    hx = '[object Object]',
    Df = '[object Promise]',
    kf = '[object Set]',
    Rf = '[object WeakMap]',
    Nf = '[object DataView]',
    dx = tn(Bs),
    px = tn(fa),
    xx = tn(Us),
    mx = tn(Ws),
    _x = tn(Hs),
    an = sa
  ;((Bs && an(new Bs(new ArrayBuffer(1))) != Nf) ||
    (fa && an(new fa()) != Cf) ||
    (Us && an(Us.resolve()) != Df) ||
    (Ws && an(new Ws()) != kf) ||
    (Hs && an(new Hs()) != Rf)) &&
    (an = function (e) {
      var t = sa(e),
        r = t == hx ? e.constructor : void 0,
        n = r ? tn(r) : ''
      if (n)
        switch (n) {
          case dx:
            return Nf
          case px:
            return Cf
          case xx:
            return Df
          case mx:
            return kf
          case _x:
            return Rf
        }
      return t
    })
  const Ys = an
  var gx = Object.prototype,
    vx = gx.hasOwnProperty
  function wx(e) {
    var t = e.length,
      r = new e.constructor(t)
    return (
      t &&
        typeof e[0] == 'string' &&
        vx.call(e, 'index') &&
        ((r.index = e.index), (r.input = e.input)),
      r
    )
  }
  var Tx = ir.Uint8Array
  const Pf = Tx
  function $s(e) {
    var t = new e.constructor(e.byteLength)
    return new Pf(t).set(new Pf(e)), t
  }
  function Ex(e, t) {
    var r = t ? $s(e.buffer) : e.buffer
    return new e.constructor(r, e.byteOffset, e.byteLength)
  }
  var Sx = /\w*$/
  function yx(e) {
    var t = new e.constructor(e.source, Sx.exec(e))
    return (t.lastIndex = e.lastIndex), t
  }
  var If = An ? An.prototype : void 0,
    Mf = If ? If.valueOf : void 0
  function Ax(e) {
    return Mf ? Object(Mf.call(e)) : {}
  }
  function Ox(e, t) {
    var r = t ? $s(e.buffer) : e.buffer
    return new e.constructor(r, e.byteOffset, e.length)
  }
  var Fx = '[object Boolean]',
    Cx = '[object Date]',
    Dx = '[object Map]',
    kx = '[object Number]',
    Rx = '[object RegExp]',
    Nx = '[object Set]',
    Px = '[object String]',
    Ix = '[object Symbol]',
    Mx = '[object ArrayBuffer]',
    bx = '[object DataView]',
    Lx = '[object Float32Array]',
    Bx = '[object Float64Array]',
    Ux = '[object Int8Array]',
    Wx = '[object Int16Array]',
    Hx = '[object Int32Array]',
    Yx = '[object Uint8Array]',
    $x = '[object Uint8ClampedArray]',
    jx = '[object Uint16Array]',
    Vx = '[object Uint32Array]'
  function Gx(e, t, r) {
    var n = e.constructor
    switch (t) {
      case Mx:
        return $s(e)
      case Fx:
      case Cx:
        return new n(+e)
      case bx:
        return Ex(e, r)
      case Lx:
      case Bx:
      case Ux:
      case Wx:
      case Hx:
      case Yx:
      case $x:
      case jx:
      case Vx:
        return Ox(e, r)
      case Dx:
        return new n()
      case kx:
      case Px:
        return new n(e)
      case Rx:
        return yx(e)
      case Nx:
        return new n()
      case Ix:
        return Ax(e)
    }
  }
  var bf = Object.create,
    zx = (function () {
      function e() {}
      return function (t) {
        if (!oa(t)) return {}
        if (bf) return bf(t)
        e.prototype = t
        var r = new e()
        return (e.prototype = void 0), r
      }
    })()
  const Xx = zx
  function Kx(e) {
    return typeof e.constructor == 'function' && !Is(e) ? Xx(Af(e)) : {}
  }
  var qx = '[object Map]'
  function Jx(e) {
    return ca(e) && Ys(e) == qx
  }
  var Lf = Cn && Cn.isMap,
    Zx = Lf ? Ns(Lf) : Jx
  const Qx = Zx
  var em = '[object Set]'
  function tm(e) {
    return ca(e) && Ys(e) == em
  }
  var Bf = Cn && Cn.isSet,
    rm = Bf ? Ns(Bf) : tm
  const nm = rm
  var am = 1,
    im = 2,
    sm = 4,
    Uf = '[object Arguments]',
    om = '[object Array]',
    fm = '[object Boolean]',
    lm = '[object Date]',
    cm = '[object Error]',
    Wf = '[object Function]',
    um = '[object GeneratorFunction]',
    hm = '[object Map]',
    dm = '[object Number]',
    Hf = '[object Object]',
    pm = '[object RegExp]',
    xm = '[object Set]',
    mm = '[object String]',
    _m = '[object Symbol]',
    gm = '[object WeakMap]',
    vm = '[object ArrayBuffer]',
    wm = '[object DataView]',
    Tm = '[object Float32Array]',
    Em = '[object Float64Array]',
    Sm = '[object Int8Array]',
    ym = '[object Int16Array]',
    Am = '[object Int32Array]',
    Om = '[object Uint8Array]',
    Fm = '[object Uint8ClampedArray]',
    Cm = '[object Uint16Array]',
    Dm = '[object Uint32Array]',
    We = {}
  ;(We[Uf] =
    We[om] =
    We[vm] =
    We[wm] =
    We[fm] =
    We[lm] =
    We[Tm] =
    We[Em] =
    We[Sm] =
    We[ym] =
    We[Am] =
    We[hm] =
    We[dm] =
    We[Hf] =
    We[pm] =
    We[xm] =
    We[mm] =
    We[_m] =
    We[Om] =
    We[Fm] =
    We[Cm] =
    We[Dm] =
      !0),
    (We[cm] = We[Wf] = We[gm] = !1)
  function ci(e, t, r, n, a, i) {
    var s,
      o = t & am,
      l = t & im,
      f = t & sm
    if ((r && (s = a ? r(e, n, a, i) : r(e)), s !== void 0)) return s
    if (!oa(e)) return e
    var c = Rs(e)
    if (c) {
      if (((s = wx(e)), !o)) return qp(e, s)
    } else {
      var u = Ys(e),
        h = u == Wf || u == um
      if (uf(e)) return Kp(e, o)
      if (u == Hf || u == Uf || (h && !a)) {
        if (((s = l || h ? {} : Kx(e)), !o)) return l ? ix(e, zp(s, e)) : tx(e, Yp(s, e))
      } else {
        if (!We[u]) return a ? e : {}
        s = Gx(e, u, o)
      }
    }
    i || (i = new Fn())
    var p = i.get(e)
    if (p) return p
    i.set(e, s),
      nm(e)
        ? e.forEach(function (v) {
            s.add(ci(v, t, r, v, e, i))
          })
        : Qx(e) &&
          e.forEach(function (v, A) {
            s.set(A, ci(v, t, r, A, e, i))
          })
    var m = f ? (l ? ox : sx) : l ? bs : Ms,
      d = c ? void 0 : m(e)
    return (
      Wd(d || e, function (v, A) {
        d && ((A = v), (v = e[A])), af(s, A, ci(v, t, r, A, e, i))
      }),
      s
    )
  }
  var km = 1,
    Rm = 4
  function Nm(e) {
    return ci(e, km | Rm)
  }
  var ha =
      typeof globalThis < 'u'
        ? globalThis
        : typeof window < 'u'
        ? window
        : typeof global < 'u'
        ? global
        : typeof self < 'u'
        ? self
        : {},
    Yf = { exports: {} }
  ;(function (e, t) {
    ;(function (r, n) {
      n()
    })(ha, function () {
      function r(f, c) {
        return (
          typeof c > 'u'
            ? (c = { autoBom: !1 })
            : typeof c != 'object' &&
              (console.warn('Deprecated: Expected third argument to be a object'),
              (c = { autoBom: !c })),
          c.autoBom &&
          /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(f.type)
            ? new Blob(['\uFEFF', f], { type: f.type })
            : f
        )
      }
      function n(f, c, u) {
        var h = new XMLHttpRequest()
        h.open('GET', f),
          (h.responseType = 'blob'),
          (h.onload = function () {
            l(h.response, c, u)
          }),
          (h.onerror = function () {
            console.error('could not download file')
          }),
          h.send()
      }
      function a(f) {
        var c = new XMLHttpRequest()
        c.open('HEAD', f, !1)
        try {
          c.send()
        } catch {}
        return 200 <= c.status && 299 >= c.status
      }
      function i(f) {
        try {
          f.dispatchEvent(new MouseEvent('click'))
        } catch {
          var c = document.createEvent('MouseEvents')
          c.initMouseEvent('click', !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null),
            f.dispatchEvent(c)
        }
      }
      var s =
          typeof window == 'object' && window.window === window
            ? window
            : typeof self == 'object' && self.self === self
            ? self
            : typeof ha == 'object' && ha.global === ha
            ? ha
            : void 0,
        o =
          s.navigator &&
          /Macintosh/.test(navigator.userAgent) &&
          /AppleWebKit/.test(navigator.userAgent) &&
          !/Safari/.test(navigator.userAgent),
        l =
          s.saveAs ||
          (typeof window != 'object' || window !== s
            ? function () {}
            : 'download' in HTMLAnchorElement.prototype && !o
            ? function (f, c, u) {
                var h = s.URL || s.webkitURL,
                  p = document.createElement('a')
                ;(c = c || f.name || 'download'),
                  (p.download = c),
                  (p.rel = 'noopener'),
                  typeof f == 'string'
                    ? ((p.href = f),
                      p.origin === location.origin
                        ? i(p)
                        : a(p.href)
                        ? n(f, c, u)
                        : i(p, (p.target = '_blank')))
                    : ((p.href = h.createObjectURL(f)),
                      setTimeout(function () {
                        h.revokeObjectURL(p.href)
                      }, 4e4),
                      setTimeout(function () {
                        i(p)
                      }, 0))
              }
            : 'msSaveOrOpenBlob' in navigator
            ? function (f, c, u) {
                if (((c = c || f.name || 'download'), typeof f != 'string'))
                  navigator.msSaveOrOpenBlob(r(f, u), c)
                else if (a(f)) n(f, c, u)
                else {
                  var h = document.createElement('a')
                  ;(h.href = f),
                    (h.target = '_blank'),
                    setTimeout(function () {
                      i(h)
                    })
                }
              }
            : function (f, c, u, h) {
                if (
                  ((h = h || open('', '_blank')),
                  h && (h.document.title = h.document.body.innerText = 'downloading...'),
                  typeof f == 'string')
                )
                  return n(f, c, u)
                var p = f.type === 'application/octet-stream',
                  m = /constructor/i.test(s.HTMLElement) || s.safari,
                  d = /CriOS\/[\d]+/.test(navigator.userAgent)
                if ((d || (p && m) || o) && typeof FileReader < 'u') {
                  var v = new FileReader()
                  ;(v.onloadend = function () {
                    var C = v.result
                    ;(C = d ? C : C.replace(/^data:[^;]*;/, 'data:attachment/file;')),
                      h ? (h.location.href = C) : (location = C),
                      (h = null)
                  }),
                    v.readAsDataURL(f)
                } else {
                  var A = s.URL || s.webkitURL,
                    F = A.createObjectURL(f)
                  h ? (h.location = F) : (location.href = F),
                    (h = null),
                    setTimeout(function () {
                      A.revokeObjectURL(F)
                    }, 4e4)
                }
              })
      ;(s.saveAs = l.saveAs = l), (e.exports = l)
    })
  })(Yf) //! moment.js
  //! version : 2.29.4
  //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
  //! license : MIT
  //! momentjs.com
  var $f
  function q() {
    return $f.apply(null, arguments)
  }
  function Pm(e) {
    $f = e
  }
  function qt(e) {
    return e instanceof Array || Object.prototype.toString.call(e) === '[object Array]'
  }
  function sn(e) {
    return e != null && Object.prototype.toString.call(e) === '[object Object]'
  }
  function Fe(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }
  function js(e) {
    if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(e).length === 0
    var t
    for (t in e) if (Fe(e, t)) return !1
    return !0
  }
  function kt(e) {
    return e === void 0
  }
  function mr(e) {
    return typeof e == 'number' || Object.prototype.toString.call(e) === '[object Number]'
  }
  function da(e) {
    return e instanceof Date || Object.prototype.toString.call(e) === '[object Date]'
  }
  function jf(e, t) {
    var r = [],
      n,
      a = e.length
    for (n = 0; n < a; ++n) r.push(t(e[n], n))
    return r
  }
  function Yr(e, t) {
    for (var r in t) Fe(t, r) && (e[r] = t[r])
    return (
      Fe(t, 'toString') && (e.toString = t.toString), Fe(t, 'valueOf') && (e.valueOf = t.valueOf), e
    )
  }
  function sr(e, t, r, n) {
    return _l(e, t, r, n, !0).utc()
  }
  function Im() {
    return {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidEra: null,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1,
      parsedDateParts: [],
      era: null,
      meridiem: null,
      rfc2822: !1,
      weekdayMismatch: !1
    }
  }
  function ge(e) {
    return e._pf == null && (e._pf = Im()), e._pf
  }
  var Vs
  Array.prototype.some
    ? (Vs = Array.prototype.some)
    : (Vs = function (e) {
        var t = Object(this),
          r = t.length >>> 0,
          n
        for (n = 0; n < r; n++) if (n in t && e.call(this, t[n], n, t)) return !0
        return !1
      })
  function Gs(e) {
    if (e._isValid == null) {
      var t = ge(e),
        r = Vs.call(t.parsedDateParts, function (a) {
          return a != null
        }),
        n =
          !isNaN(e._d.getTime()) &&
          t.overflow < 0 &&
          !t.empty &&
          !t.invalidEra &&
          !t.invalidMonth &&
          !t.invalidWeekday &&
          !t.weekdayMismatch &&
          !t.nullInput &&
          !t.invalidFormat &&
          !t.userInvalidated &&
          (!t.meridiem || (t.meridiem && r))
      if (
        (e._strict &&
          (n = n && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0),
        Object.isFrozen == null || !Object.isFrozen(e))
      )
        e._isValid = n
      else return n
    }
    return e._isValid
  }
  function ui(e) {
    var t = sr(NaN)
    return e != null ? Yr(ge(t), e) : (ge(t).userInvalidated = !0), t
  }
  var Vf = (q.momentProperties = []),
    zs = !1
  function Xs(e, t) {
    var r,
      n,
      a,
      i = Vf.length
    if (
      (kt(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
      kt(t._i) || (e._i = t._i),
      kt(t._f) || (e._f = t._f),
      kt(t._l) || (e._l = t._l),
      kt(t._strict) || (e._strict = t._strict),
      kt(t._tzm) || (e._tzm = t._tzm),
      kt(t._isUTC) || (e._isUTC = t._isUTC),
      kt(t._offset) || (e._offset = t._offset),
      kt(t._pf) || (e._pf = ge(t)),
      kt(t._locale) || (e._locale = t._locale),
      i > 0)
    )
      for (r = 0; r < i; r++) (n = Vf[r]), (a = t[n]), kt(a) || (e[n] = a)
    return e
  }
  function pa(e) {
    Xs(this, e),
      (this._d = new Date(e._d != null ? e._d.getTime() : NaN)),
      this.isValid() || (this._d = new Date(NaN)),
      zs === !1 && ((zs = !0), q.updateOffset(this), (zs = !1))
  }
  function Jt(e) {
    return e instanceof pa || (e != null && e._isAMomentObject != null)
  }
  function Gf(e) {
    q.suppressDeprecationWarnings === !1 &&
      typeof console < 'u' &&
      console.warn &&
      console.warn('Deprecation warning: ' + e)
  }
  function $t(e, t) {
    var r = !0
    return Yr(function () {
      if ((q.deprecationHandler != null && q.deprecationHandler(null, e), r)) {
        var n = [],
          a,
          i,
          s,
          o = arguments.length
        for (i = 0; i < o; i++) {
          if (((a = ''), typeof arguments[i] == 'object')) {
            a +=
              `
[` +
              i +
              '] '
            for (s in arguments[0]) Fe(arguments[0], s) && (a += s + ': ' + arguments[0][s] + ', ')
            a = a.slice(0, -2)
          } else a = arguments[i]
          n.push(a)
        }
        Gf(
          e +
            `
Arguments: ` +
            Array.prototype.slice.call(n).join('') +
            `
` +
            new Error().stack
        ),
          (r = !1)
      }
      return t.apply(this, arguments)
    }, t)
  }
  var zf = {}
  function Xf(e, t) {
    q.deprecationHandler != null && q.deprecationHandler(e, t), zf[e] || (Gf(t), (zf[e] = !0))
  }
  ;(q.suppressDeprecationWarnings = !1), (q.deprecationHandler = null)
  function or(e) {
    return (
      (typeof Function < 'u' && e instanceof Function) ||
      Object.prototype.toString.call(e) === '[object Function]'
    )
  }
  function Mm(e) {
    var t, r
    for (r in e) Fe(e, r) && ((t = e[r]), or(t) ? (this[r] = t) : (this['_' + r] = t))
    ;(this._config = e),
      (this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source
      ))
  }
  function Ks(e, t) {
    var r = Yr({}, e),
      n
    for (n in t)
      Fe(t, n) &&
        (sn(e[n]) && sn(t[n])
          ? ((r[n] = {}), Yr(r[n], e[n]), Yr(r[n], t[n]))
          : t[n] != null
          ? (r[n] = t[n])
          : delete r[n])
    for (n in e) Fe(e, n) && !Fe(t, n) && sn(e[n]) && (r[n] = Yr({}, r[n]))
    return r
  }
  function qs(e) {
    e != null && this.set(e)
  }
  var Js
  Object.keys
    ? (Js = Object.keys)
    : (Js = function (e) {
        var t,
          r = []
        for (t in e) Fe(e, t) && r.push(t)
        return r
      })
  var bm = {
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    nextWeek: 'dddd [at] LT',
    lastDay: '[Yesterday at] LT',
    lastWeek: '[Last] dddd [at] LT',
    sameElse: 'L'
  }
  function Lm(e, t, r) {
    var n = this._calendar[e] || this._calendar.sameElse
    return or(n) ? n.call(t, r) : n
  }
  function fr(e, t, r) {
    var n = '' + Math.abs(e),
      a = t - n.length,
      i = e >= 0
    return (i ? (r ? '+' : '') : '-') + Math.pow(10, Math.max(0, a)).toString().substr(1) + n
  }
  var Zs =
      /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    hi = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    Qs = {},
    Dn = {}
  function pe(e, t, r, n) {
    var a = n
    typeof n == 'string' &&
      (a = function () {
        return this[n]()
      }),
      e && (Dn[e] = a),
      t &&
        (Dn[t[0]] = function () {
          return fr(a.apply(this, arguments), t[1], t[2])
        }),
      r &&
        (Dn[r] = function () {
          return this.localeData().ordinal(a.apply(this, arguments), e)
        })
  }
  function Bm(e) {
    return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, '') : e.replace(/\\/g, '')
  }
  function Um(e) {
    var t = e.match(Zs),
      r,
      n
    for (r = 0, n = t.length; r < n; r++) Dn[t[r]] ? (t[r] = Dn[t[r]]) : (t[r] = Bm(t[r]))
    return function (a) {
      var i = '',
        s
      for (s = 0; s < n; s++) i += or(t[s]) ? t[s].call(a, e) : t[s]
      return i
    }
  }
  function di(e, t) {
    return e.isValid()
      ? ((t = Kf(t, e.localeData())), (Qs[t] = Qs[t] || Um(t)), Qs[t](e))
      : e.localeData().invalidDate()
  }
  function Kf(e, t) {
    var r = 5
    function n(a) {
      return t.longDateFormat(a) || a
    }
    for (hi.lastIndex = 0; r >= 0 && hi.test(e); )
      (e = e.replace(hi, n)), (hi.lastIndex = 0), (r -= 1)
    return e
  }
  var Wm = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A'
  }
  function Hm(e) {
    var t = this._longDateFormat[e],
      r = this._longDateFormat[e.toUpperCase()]
    return t || !r
      ? t
      : ((this._longDateFormat[e] = r
          .match(Zs)
          .map(function (n) {
            return n === 'MMMM' || n === 'MM' || n === 'DD' || n === 'dddd' ? n.slice(1) : n
          })
          .join('')),
        this._longDateFormat[e])
  }
  var Ym = 'Invalid date'
  function $m() {
    return this._invalidDate
  }
  var jm = '%d',
    Vm = /\d{1,2}/
  function Gm(e) {
    return this._ordinal.replace('%d', e)
  }
  var zm = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    ss: '%d seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    w: 'a week',
    ww: '%d weeks',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
  }
  function Xm(e, t, r, n) {
    var a = this._relativeTime[r]
    return or(a) ? a(e, t, r, n) : a.replace(/%d/i, e)
  }
  function Km(e, t) {
    var r = this._relativeTime[e > 0 ? 'future' : 'past']
    return or(r) ? r(t) : r.replace(/%s/i, t)
  }
  var xa = {}
  function vt(e, t) {
    var r = e.toLowerCase()
    xa[r] = xa[r + 's'] = xa[t] = e
  }
  function jt(e) {
    return typeof e == 'string' ? xa[e] || xa[e.toLowerCase()] : void 0
  }
  function e0(e) {
    var t = {},
      r,
      n
    for (n in e) Fe(e, n) && ((r = jt(n)), r && (t[r] = e[n]))
    return t
  }
  var qf = {}
  function wt(e, t) {
    qf[e] = t
  }
  function qm(e) {
    var t = [],
      r
    for (r in e) Fe(e, r) && t.push({ unit: r, priority: qf[r] })
    return (
      t.sort(function (n, a) {
        return n.priority - a.priority
      }),
      t
    )
  }
  function pi(e) {
    return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0
  }
  function Vt(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
  }
  function we(e) {
    var t = +e,
      r = 0
    return t !== 0 && isFinite(t) && (r = Vt(t)), r
  }
  function kn(e, t) {
    return function (r) {
      return r != null ? (Jf(this, e, r), q.updateOffset(this, t), this) : xi(this, e)
    }
  }
  function xi(e, t) {
    return e.isValid() ? e._d['get' + (e._isUTC ? 'UTC' : '') + t]() : NaN
  }
  function Jf(e, t, r) {
    e.isValid() &&
      !isNaN(r) &&
      (t === 'FullYear' && pi(e.year()) && e.month() === 1 && e.date() === 29
        ? ((r = we(r)), e._d['set' + (e._isUTC ? 'UTC' : '') + t](r, e.month(), Ei(r, e.month())))
        : e._d['set' + (e._isUTC ? 'UTC' : '') + t](r))
  }
  function Jm(e) {
    return (e = jt(e)), or(this[e]) ? this[e]() : this
  }
  function Zm(e, t) {
    if (typeof e == 'object') {
      e = e0(e)
      var r = qm(e),
        n,
        a = r.length
      for (n = 0; n < a; n++) this[r[n].unit](e[r[n].unit])
    } else if (((e = jt(e)), or(this[e]))) return this[e](t)
    return this
  }
  var Zf = /\d/,
    Mt = /\d\d/,
    Qf = /\d{3}/,
    t0 = /\d{4}/,
    mi = /[+-]?\d{6}/,
    Ye = /\d\d?/,
    el = /\d\d\d\d?/,
    tl = /\d\d\d\d\d\d?/,
    _i = /\d{1,3}/,
    r0 = /\d{1,4}/,
    gi = /[+-]?\d{1,6}/,
    Rn = /\d+/,
    vi = /[+-]?\d+/,
    Qm = /Z|[+-]\d\d:?\d\d/gi,
    wi = /Z|[+-]\d\d(?::?\d\d)?/gi,
    e_ = /[+-]?\d+(\.\d{1,3})?/,
    ma =
      /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    Ti
  Ti = {}
  function oe(e, t, r) {
    Ti[e] = or(t)
      ? t
      : function (n, a) {
          return n && r ? r : t
        }
  }
  function t_(e, t) {
    return Fe(Ti, e) ? Ti[e](t._strict, t._locale) : new RegExp(r_(e))
  }
  function r_(e) {
    return bt(
      e.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, r, n, a, i) {
        return r || n || a || i
      })
    )
  }
  function bt(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
  }
  var n0 = {}
  function Be(e, t) {
    var r,
      n = t,
      a
    for (
      typeof e == 'string' && (e = [e]),
        mr(t) &&
          (n = function (i, s) {
            s[t] = we(i)
          }),
        a = e.length,
        r = 0;
      r < a;
      r++
    )
      n0[e[r]] = n
  }
  function _a(e, t) {
    Be(e, function (r, n, a, i) {
      ;(a._w = a._w || {}), t(r, a._w, a, i)
    })
  }
  function n_(e, t, r) {
    t != null && Fe(n0, e) && n0[e](t, r._a, r, e)
  }
  var Tt = 0,
    _r = 1,
    lr = 2,
    nt = 3,
    Zt = 4,
    gr = 5,
    on = 6,
    a_ = 7,
    i_ = 8
  function s_(e, t) {
    return ((e % t) + t) % t
  }
  var Qe
  Array.prototype.indexOf
    ? (Qe = Array.prototype.indexOf)
    : (Qe = function (e) {
        var t
        for (t = 0; t < this.length; ++t) if (this[t] === e) return t
        return -1
      })
  function Ei(e, t) {
    if (isNaN(e) || isNaN(t)) return NaN
    var r = s_(t, 12)
    return (e += (t - r) / 12), r === 1 ? (pi(e) ? 29 : 28) : 31 - ((r % 7) % 2)
  }
  pe('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1
  }),
    pe('MMM', 0, 0, function (e) {
      return this.localeData().monthsShort(this, e)
    }),
    pe('MMMM', 0, 0, function (e) {
      return this.localeData().months(this, e)
    }),
    vt('month', 'M'),
    wt('month', 8),
    oe('M', Ye),
    oe('MM', Ye, Mt),
    oe('MMM', function (e, t) {
      return t.monthsShortRegex(e)
    }),
    oe('MMMM', function (e, t) {
      return t.monthsRegex(e)
    }),
    Be(['M', 'MM'], function (e, t) {
      t[_r] = we(e) - 1
    }),
    Be(['MMM', 'MMMM'], function (e, t, r, n) {
      var a = r._locale.monthsParse(e, n, r._strict)
      a != null ? (t[_r] = a) : (ge(r).invalidMonth = e)
    })
  var o_ =
      'January_February_March_April_May_June_July_August_September_October_November_December'.split(
        '_'
      ),
    rl = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    nl = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    f_ = ma,
    l_ = ma
  function c_(e, t) {
    return e
      ? qt(this._months)
        ? this._months[e.month()]
        : this._months[(this._months.isFormat || nl).test(t) ? 'format' : 'standalone'][e.month()]
      : qt(this._months)
      ? this._months
      : this._months.standalone
  }
  function u_(e, t) {
    return e
      ? qt(this._monthsShort)
        ? this._monthsShort[e.month()]
        : this._monthsShort[nl.test(t) ? 'format' : 'standalone'][e.month()]
      : qt(this._monthsShort)
      ? this._monthsShort
      : this._monthsShort.standalone
  }
  function h_(e, t, r) {
    var n,
      a,
      i,
      s = e.toLocaleLowerCase()
    if (!this._monthsParse)
      for (
        this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0;
        n < 12;
        ++n
      )
        (i = sr([2e3, n])),
          (this._shortMonthsParse[n] = this.monthsShort(i, '').toLocaleLowerCase()),
          (this._longMonthsParse[n] = this.months(i, '').toLocaleLowerCase())
    return r
      ? t === 'MMM'
        ? ((a = Qe.call(this._shortMonthsParse, s)), a !== -1 ? a : null)
        : ((a = Qe.call(this._longMonthsParse, s)), a !== -1 ? a : null)
      : t === 'MMM'
      ? ((a = Qe.call(this._shortMonthsParse, s)),
        a !== -1 ? a : ((a = Qe.call(this._longMonthsParse, s)), a !== -1 ? a : null))
      : ((a = Qe.call(this._longMonthsParse, s)),
        a !== -1 ? a : ((a = Qe.call(this._shortMonthsParse, s)), a !== -1 ? a : null))
  }
  function d_(e, t, r) {
    var n, a, i
    if (this._monthsParseExact) return h_.call(this, e, t, r)
    for (
      this._monthsParse ||
        ((this._monthsParse = []), (this._longMonthsParse = []), (this._shortMonthsParse = [])),
        n = 0;
      n < 12;
      n++
    ) {
      if (
        ((a = sr([2e3, n])),
        r &&
          !this._longMonthsParse[n] &&
          ((this._longMonthsParse[n] = new RegExp(
            '^' + this.months(a, '').replace('.', '') + '$',
            'i'
          )),
          (this._shortMonthsParse[n] = new RegExp(
            '^' + this.monthsShort(a, '').replace('.', '') + '$',
            'i'
          ))),
        !r &&
          !this._monthsParse[n] &&
          ((i = '^' + this.months(a, '') + '|^' + this.monthsShort(a, '')),
          (this._monthsParse[n] = new RegExp(i.replace('.', ''), 'i'))),
        r && t === 'MMMM' && this._longMonthsParse[n].test(e))
      )
        return n
      if (r && t === 'MMM' && this._shortMonthsParse[n].test(e)) return n
      if (!r && this._monthsParse[n].test(e)) return n
    }
  }
  function al(e, t) {
    var r
    if (!e.isValid()) return e
    if (typeof t == 'string') {
      if (/^\d+$/.test(t)) t = we(t)
      else if (((t = e.localeData().monthsParse(t)), !mr(t))) return e
    }
    return (
      (r = Math.min(e.date(), Ei(e.year(), t))),
      e._d['set' + (e._isUTC ? 'UTC' : '') + 'Month'](t, r),
      e
    )
  }
  function il(e) {
    return e != null ? (al(this, e), q.updateOffset(this, !0), this) : xi(this, 'Month')
  }
  function p_() {
    return Ei(this.year(), this.month())
  }
  function x_(e) {
    return this._monthsParseExact
      ? (Fe(this, '_monthsRegex') || sl.call(this),
        e ? this._monthsShortStrictRegex : this._monthsShortRegex)
      : (Fe(this, '_monthsShortRegex') || (this._monthsShortRegex = f_),
        this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
  }
  function m_(e) {
    return this._monthsParseExact
      ? (Fe(this, '_monthsRegex') || sl.call(this), e ? this._monthsStrictRegex : this._monthsRegex)
      : (Fe(this, '_monthsRegex') || (this._monthsRegex = l_),
        this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
  }
  function sl() {
    function e(s, o) {
      return o.length - s.length
    }
    var t = [],
      r = [],
      n = [],
      a,
      i
    for (a = 0; a < 12; a++)
      (i = sr([2e3, a])),
        t.push(this.monthsShort(i, '')),
        r.push(this.months(i, '')),
        n.push(this.months(i, '')),
        n.push(this.monthsShort(i, ''))
    for (t.sort(e), r.sort(e), n.sort(e), a = 0; a < 12; a++) (t[a] = bt(t[a])), (r[a] = bt(r[a]))
    for (a = 0; a < 24; a++) n[a] = bt(n[a])
    ;(this._monthsRegex = new RegExp('^(' + n.join('|') + ')', 'i')),
      (this._monthsShortRegex = this._monthsRegex),
      (this._monthsStrictRegex = new RegExp('^(' + r.join('|') + ')', 'i')),
      (this._monthsShortStrictRegex = new RegExp('^(' + t.join('|') + ')', 'i'))
  }
  pe('Y', 0, 0, function () {
    var e = this.year()
    return e <= 9999 ? fr(e, 4) : '+' + e
  }),
    pe(0, ['YY', 2], 0, function () {
      return this.year() % 100
    }),
    pe(0, ['YYYY', 4], 0, 'year'),
    pe(0, ['YYYYY', 5], 0, 'year'),
    pe(0, ['YYYYYY', 6, !0], 0, 'year'),
    vt('year', 'y'),
    wt('year', 1),
    oe('Y', vi),
    oe('YY', Ye, Mt),
    oe('YYYY', r0, t0),
    oe('YYYYY', gi, mi),
    oe('YYYYYY', gi, mi),
    Be(['YYYYY', 'YYYYYY'], Tt),
    Be('YYYY', function (e, t) {
      t[Tt] = e.length === 2 ? q.parseTwoDigitYear(e) : we(e)
    }),
    Be('YY', function (e, t) {
      t[Tt] = q.parseTwoDigitYear(e)
    }),
    Be('Y', function (e, t) {
      t[Tt] = parseInt(e, 10)
    })
  function ga(e) {
    return pi(e) ? 366 : 365
  }
  q.parseTwoDigitYear = function (e) {
    return we(e) + (we(e) > 68 ? 1900 : 2e3)
  }
  var ol = kn('FullYear', !0)
  function __() {
    return pi(this.year())
  }
  function g_(e, t, r, n, a, i, s) {
    var o
    return (
      e < 100 && e >= 0
        ? ((o = new Date(e + 400, t, r, n, a, i, s)), isFinite(o.getFullYear()) && o.setFullYear(e))
        : (o = new Date(e, t, r, n, a, i, s)),
      o
    )
  }
  function va(e) {
    var t, r
    return (
      e < 100 && e >= 0
        ? ((r = Array.prototype.slice.call(arguments)),
          (r[0] = e + 400),
          (t = new Date(Date.UTC.apply(null, r))),
          isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
        : (t = new Date(Date.UTC.apply(null, arguments))),
      t
    )
  }
  function Si(e, t, r) {
    var n = 7 + t - r,
      a = (7 + va(e, 0, n).getUTCDay() - t) % 7
    return -a + n - 1
  }
  function fl(e, t, r, n, a) {
    var i = (7 + r - n) % 7,
      s = Si(e, n, a),
      o = 1 + 7 * (t - 1) + i + s,
      l,
      f
    return (
      o <= 0
        ? ((l = e - 1), (f = ga(l) + o))
        : o > ga(e)
        ? ((l = e + 1), (f = o - ga(e)))
        : ((l = e), (f = o)),
      { year: l, dayOfYear: f }
    )
  }
  function wa(e, t, r) {
    var n = Si(e.year(), t, r),
      a = Math.floor((e.dayOfYear() - n - 1) / 7) + 1,
      i,
      s
    return (
      a < 1
        ? ((s = e.year() - 1), (i = a + vr(s, t, r)))
        : a > vr(e.year(), t, r)
        ? ((i = a - vr(e.year(), t, r)), (s = e.year() + 1))
        : ((s = e.year()), (i = a)),
      { week: i, year: s }
    )
  }
  function vr(e, t, r) {
    var n = Si(e, t, r),
      a = Si(e + 1, t, r)
    return (ga(e) - n + a) / 7
  }
  pe('w', ['ww', 2], 'wo', 'week'),
    pe('W', ['WW', 2], 'Wo', 'isoWeek'),
    vt('week', 'w'),
    vt('isoWeek', 'W'),
    wt('week', 5),
    wt('isoWeek', 5),
    oe('w', Ye),
    oe('ww', Ye, Mt),
    oe('W', Ye),
    oe('WW', Ye, Mt),
    _a(['w', 'ww', 'W', 'WW'], function (e, t, r, n) {
      t[n.substr(0, 1)] = we(e)
    })
  function v_(e) {
    return wa(e, this._week.dow, this._week.doy).week
  }
  var w_ = { dow: 0, doy: 6 }
  function T_() {
    return this._week.dow
  }
  function E_() {
    return this._week.doy
  }
  function S_(e) {
    var t = this.localeData().week(this)
    return e == null ? t : this.add((e - t) * 7, 'd')
  }
  function y_(e) {
    var t = wa(this, 1, 4).week
    return e == null ? t : this.add((e - t) * 7, 'd')
  }
  pe('d', 0, 'do', 'day'),
    pe('dd', 0, 0, function (e) {
      return this.localeData().weekdaysMin(this, e)
    }),
    pe('ddd', 0, 0, function (e) {
      return this.localeData().weekdaysShort(this, e)
    }),
    pe('dddd', 0, 0, function (e) {
      return this.localeData().weekdays(this, e)
    }),
    pe('e', 0, 0, 'weekday'),
    pe('E', 0, 0, 'isoWeekday'),
    vt('day', 'd'),
    vt('weekday', 'e'),
    vt('isoWeekday', 'E'),
    wt('day', 11),
    wt('weekday', 11),
    wt('isoWeekday', 11),
    oe('d', Ye),
    oe('e', Ye),
    oe('E', Ye),
    oe('dd', function (e, t) {
      return t.weekdaysMinRegex(e)
    }),
    oe('ddd', function (e, t) {
      return t.weekdaysShortRegex(e)
    }),
    oe('dddd', function (e, t) {
      return t.weekdaysRegex(e)
    }),
    _a(['dd', 'ddd', 'dddd'], function (e, t, r, n) {
      var a = r._locale.weekdaysParse(e, n, r._strict)
      a != null ? (t.d = a) : (ge(r).invalidWeekday = e)
    }),
    _a(['d', 'e', 'E'], function (e, t, r, n) {
      t[n] = we(e)
    })
  function A_(e, t) {
    return typeof e != 'string'
      ? e
      : isNaN(e)
      ? ((e = t.weekdaysParse(e)), typeof e == 'number' ? e : null)
      : parseInt(e, 10)
  }
  function O_(e, t) {
    return typeof e == 'string' ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
  }
  function a0(e, t) {
    return e.slice(t, 7).concat(e.slice(0, t))
  }
  var F_ = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    ll = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    C_ = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    D_ = ma,
    k_ = ma,
    R_ = ma
  function N_(e, t) {
    var r = qt(this._weekdays)
      ? this._weekdays
      : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? 'format' : 'standalone']
    return e === !0 ? a0(r, this._week.dow) : e ? r[e.day()] : r
  }
  function P_(e) {
    return e === !0
      ? a0(this._weekdaysShort, this._week.dow)
      : e
      ? this._weekdaysShort[e.day()]
      : this._weekdaysShort
  }
  function I_(e) {
    return e === !0
      ? a0(this._weekdaysMin, this._week.dow)
      : e
      ? this._weekdaysMin[e.day()]
      : this._weekdaysMin
  }
  function M_(e, t, r) {
    var n,
      a,
      i,
      s = e.toLocaleLowerCase()
    if (!this._weekdaysParse)
      for (
        this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0;
        n < 7;
        ++n
      )
        (i = sr([2e3, 1]).day(n)),
          (this._minWeekdaysParse[n] = this.weekdaysMin(i, '').toLocaleLowerCase()),
          (this._shortWeekdaysParse[n] = this.weekdaysShort(i, '').toLocaleLowerCase()),
          (this._weekdaysParse[n] = this.weekdays(i, '').toLocaleLowerCase())
    return r
      ? t === 'dddd'
        ? ((a = Qe.call(this._weekdaysParse, s)), a !== -1 ? a : null)
        : t === 'ddd'
        ? ((a = Qe.call(this._shortWeekdaysParse, s)), a !== -1 ? a : null)
        : ((a = Qe.call(this._minWeekdaysParse, s)), a !== -1 ? a : null)
      : t === 'dddd'
      ? ((a = Qe.call(this._weekdaysParse, s)),
        a !== -1 || ((a = Qe.call(this._shortWeekdaysParse, s)), a !== -1)
          ? a
          : ((a = Qe.call(this._minWeekdaysParse, s)), a !== -1 ? a : null))
      : t === 'ddd'
      ? ((a = Qe.call(this._shortWeekdaysParse, s)),
        a !== -1 || ((a = Qe.call(this._weekdaysParse, s)), a !== -1)
          ? a
          : ((a = Qe.call(this._minWeekdaysParse, s)), a !== -1 ? a : null))
      : ((a = Qe.call(this._minWeekdaysParse, s)),
        a !== -1 || ((a = Qe.call(this._weekdaysParse, s)), a !== -1)
          ? a
          : ((a = Qe.call(this._shortWeekdaysParse, s)), a !== -1 ? a : null))
  }
  function b_(e, t, r) {
    var n, a, i
    if (this._weekdaysParseExact) return M_.call(this, e, t, r)
    for (
      this._weekdaysParse ||
        ((this._weekdaysParse = []),
        (this._minWeekdaysParse = []),
        (this._shortWeekdaysParse = []),
        (this._fullWeekdaysParse = [])),
        n = 0;
      n < 7;
      n++
    ) {
      if (
        ((a = sr([2e3, 1]).day(n)),
        r &&
          !this._fullWeekdaysParse[n] &&
          ((this._fullWeekdaysParse[n] = new RegExp(
            '^' + this.weekdays(a, '').replace('.', '\\.?') + '$',
            'i'
          )),
          (this._shortWeekdaysParse[n] = new RegExp(
            '^' + this.weekdaysShort(a, '').replace('.', '\\.?') + '$',
            'i'
          )),
          (this._minWeekdaysParse[n] = new RegExp(
            '^' + this.weekdaysMin(a, '').replace('.', '\\.?') + '$',
            'i'
          ))),
        this._weekdaysParse[n] ||
          ((i =
            '^' +
            this.weekdays(a, '') +
            '|^' +
            this.weekdaysShort(a, '') +
            '|^' +
            this.weekdaysMin(a, '')),
          (this._weekdaysParse[n] = new RegExp(i.replace('.', ''), 'i'))),
        r && t === 'dddd' && this._fullWeekdaysParse[n].test(e))
      )
        return n
      if (r && t === 'ddd' && this._shortWeekdaysParse[n].test(e)) return n
      if (r && t === 'dd' && this._minWeekdaysParse[n].test(e)) return n
      if (!r && this._weekdaysParse[n].test(e)) return n
    }
  }
  function L_(e) {
    if (!this.isValid()) return e != null ? this : NaN
    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay()
    return e != null ? ((e = A_(e, this.localeData())), this.add(e - t, 'd')) : t
  }
  function B_(e) {
    if (!this.isValid()) return e != null ? this : NaN
    var t = (this.day() + 7 - this.localeData()._week.dow) % 7
    return e == null ? t : this.add(e - t, 'd')
  }
  function U_(e) {
    if (!this.isValid()) return e != null ? this : NaN
    if (e != null) {
      var t = O_(e, this.localeData())
      return this.day(this.day() % 7 ? t : t - 7)
    } else return this.day() || 7
  }
  function W_(e) {
    return this._weekdaysParseExact
      ? (Fe(this, '_weekdaysRegex') || i0.call(this),
        e ? this._weekdaysStrictRegex : this._weekdaysRegex)
      : (Fe(this, '_weekdaysRegex') || (this._weekdaysRegex = D_),
        this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
  }
  function H_(e) {
    return this._weekdaysParseExact
      ? (Fe(this, '_weekdaysRegex') || i0.call(this),
        e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
      : (Fe(this, '_weekdaysShortRegex') || (this._weekdaysShortRegex = k_),
        this._weekdaysShortStrictRegex && e
          ? this._weekdaysShortStrictRegex
          : this._weekdaysShortRegex)
  }
  function Y_(e) {
    return this._weekdaysParseExact
      ? (Fe(this, '_weekdaysRegex') || i0.call(this),
        e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
      : (Fe(this, '_weekdaysMinRegex') || (this._weekdaysMinRegex = R_),
        this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
  }
  function i0() {
    function e(c, u) {
      return u.length - c.length
    }
    var t = [],
      r = [],
      n = [],
      a = [],
      i,
      s,
      o,
      l,
      f
    for (i = 0; i < 7; i++)
      (s = sr([2e3, 1]).day(i)),
        (o = bt(this.weekdaysMin(s, ''))),
        (l = bt(this.weekdaysShort(s, ''))),
        (f = bt(this.weekdays(s, ''))),
        t.push(o),
        r.push(l),
        n.push(f),
        a.push(o),
        a.push(l),
        a.push(f)
    t.sort(e),
      r.sort(e),
      n.sort(e),
      a.sort(e),
      (this._weekdaysRegex = new RegExp('^(' + a.join('|') + ')', 'i')),
      (this._weekdaysShortRegex = this._weekdaysRegex),
      (this._weekdaysMinRegex = this._weekdaysRegex),
      (this._weekdaysStrictRegex = new RegExp('^(' + n.join('|') + ')', 'i')),
      (this._weekdaysShortStrictRegex = new RegExp('^(' + r.join('|') + ')', 'i')),
      (this._weekdaysMinStrictRegex = new RegExp('^(' + t.join('|') + ')', 'i'))
  }
  function s0() {
    return this.hours() % 12 || 12
  }
  function $_() {
    return this.hours() || 24
  }
  pe('H', ['HH', 2], 0, 'hour'),
    pe('h', ['hh', 2], 0, s0),
    pe('k', ['kk', 2], 0, $_),
    pe('hmm', 0, 0, function () {
      return '' + s0.apply(this) + fr(this.minutes(), 2)
    }),
    pe('hmmss', 0, 0, function () {
      return '' + s0.apply(this) + fr(this.minutes(), 2) + fr(this.seconds(), 2)
    }),
    pe('Hmm', 0, 0, function () {
      return '' + this.hours() + fr(this.minutes(), 2)
    }),
    pe('Hmmss', 0, 0, function () {
      return '' + this.hours() + fr(this.minutes(), 2) + fr(this.seconds(), 2)
    })
  function cl(e, t) {
    pe(e, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), t)
    })
  }
  cl('a', !0), cl('A', !1), vt('hour', 'h'), wt('hour', 13)
  function ul(e, t) {
    return t._meridiemParse
  }
  oe('a', ul),
    oe('A', ul),
    oe('H', Ye),
    oe('h', Ye),
    oe('k', Ye),
    oe('HH', Ye, Mt),
    oe('hh', Ye, Mt),
    oe('kk', Ye, Mt),
    oe('hmm', el),
    oe('hmmss', tl),
    oe('Hmm', el),
    oe('Hmmss', tl),
    Be(['H', 'HH'], nt),
    Be(['k', 'kk'], function (e, t, r) {
      var n = we(e)
      t[nt] = n === 24 ? 0 : n
    }),
    Be(['a', 'A'], function (e, t, r) {
      ;(r._isPm = r._locale.isPM(e)), (r._meridiem = e)
    }),
    Be(['h', 'hh'], function (e, t, r) {
      ;(t[nt] = we(e)), (ge(r).bigHour = !0)
    }),
    Be('hmm', function (e, t, r) {
      var n = e.length - 2
      ;(t[nt] = we(e.substr(0, n))), (t[Zt] = we(e.substr(n))), (ge(r).bigHour = !0)
    }),
    Be('hmmss', function (e, t, r) {
      var n = e.length - 4,
        a = e.length - 2
      ;(t[nt] = we(e.substr(0, n))),
        (t[Zt] = we(e.substr(n, 2))),
        (t[gr] = we(e.substr(a))),
        (ge(r).bigHour = !0)
    }),
    Be('Hmm', function (e, t, r) {
      var n = e.length - 2
      ;(t[nt] = we(e.substr(0, n))), (t[Zt] = we(e.substr(n)))
    }),
    Be('Hmmss', function (e, t, r) {
      var n = e.length - 4,
        a = e.length - 2
      ;(t[nt] = we(e.substr(0, n))), (t[Zt] = we(e.substr(n, 2))), (t[gr] = we(e.substr(a)))
    })
  function j_(e) {
    return (e + '').toLowerCase().charAt(0) === 'p'
  }
  var V_ = /[ap]\.?m?\.?/i,
    G_ = kn('Hours', !0)
  function z_(e, t, r) {
    return e > 11 ? (r ? 'pm' : 'PM') : r ? 'am' : 'AM'
  }
  var hl = {
      calendar: bm,
      longDateFormat: Wm,
      invalidDate: Ym,
      ordinal: jm,
      dayOfMonthOrdinalParse: Vm,
      relativeTime: zm,
      months: o_,
      monthsShort: rl,
      week: w_,
      weekdays: F_,
      weekdaysMin: C_,
      weekdaysShort: ll,
      meridiemParse: V_
    },
    Ge = {},
    Ta = {},
    Ea
  function X_(e, t) {
    var r,
      n = Math.min(e.length, t.length)
    for (r = 0; r < n; r += 1) if (e[r] !== t[r]) return r
    return n
  }
  function dl(e) {
    return e && e.toLowerCase().replace('_', '-')
  }
  function K_(e) {
    for (var t = 0, r, n, a, i; t < e.length; ) {
      for (
        i = dl(e[t]).split('-'), r = i.length, n = dl(e[t + 1]), n = n ? n.split('-') : null;
        r > 0;

      ) {
        if (((a = yi(i.slice(0, r).join('-'))), a)) return a
        if (n && n.length >= r && X_(i, n) >= r - 1) break
        r--
      }
      t++
    }
    return Ea
  }
  function q_(e) {
    return e.match('^[^/\\\\]*$') != null
  }
  function yi(e) {
    var t = null,
      r
    if (Ge[e] === void 0 && typeof module < 'u' && module && module.exports && q_(e))
      try {
        ;(t = Ea._abbr), (r = require), r('./locale/' + e), $r(t)
      } catch {
        Ge[e] = null
      }
    return Ge[e]
  }
  function $r(e, t) {
    var r
    return (
      e &&
        (kt(t) ? (r = wr(e)) : (r = o0(e, t)),
        r
          ? (Ea = r)
          : typeof console < 'u' &&
            console.warn &&
            console.warn('Locale ' + e + ' not found. Did you forget to load it?')),
      Ea._abbr
    )
  }
  function o0(e, t) {
    if (t !== null) {
      var r,
        n = hl
      if (((t.abbr = e), Ge[e] != null))
        Xf(
          'defineLocaleOverride',
          'use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
        ),
          (n = Ge[e]._config)
      else if (t.parentLocale != null)
        if (Ge[t.parentLocale] != null) n = Ge[t.parentLocale]._config
        else if (((r = yi(t.parentLocale)), r != null)) n = r._config
        else
          return (
            Ta[t.parentLocale] || (Ta[t.parentLocale] = []),
            Ta[t.parentLocale].push({ name: e, config: t }),
            null
          )
      return (
        (Ge[e] = new qs(Ks(n, t))),
        Ta[e] &&
          Ta[e].forEach(function (a) {
            o0(a.name, a.config)
          }),
        $r(e),
        Ge[e]
      )
    } else return delete Ge[e], null
  }
  function J_(e, t) {
    if (t != null) {
      var r,
        n,
        a = hl
      Ge[e] != null && Ge[e].parentLocale != null
        ? Ge[e].set(Ks(Ge[e]._config, t))
        : ((n = yi(e)),
          n != null && (a = n._config),
          (t = Ks(a, t)),
          n == null && (t.abbr = e),
          (r = new qs(t)),
          (r.parentLocale = Ge[e]),
          (Ge[e] = r)),
        $r(e)
    } else Ge[e] != null && (Ge[e].parentLocale != null ? ((Ge[e] = Ge[e].parentLocale), e === $r() && $r(e)) : Ge[e] != null && delete Ge[e])
    return Ge[e]
  }
  function wr(e) {
    var t
    if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)) return Ea
    if (!qt(e)) {
      if (((t = yi(e)), t)) return t
      e = [e]
    }
    return K_(e)
  }
  function Z_() {
    return Js(Ge)
  }
  function f0(e) {
    var t,
      r = e._a
    return (
      r &&
        ge(e).overflow === -2 &&
        ((t =
          r[_r] < 0 || r[_r] > 11
            ? _r
            : r[lr] < 1 || r[lr] > Ei(r[Tt], r[_r])
            ? lr
            : r[nt] < 0 ||
              r[nt] > 24 ||
              (r[nt] === 24 && (r[Zt] !== 0 || r[gr] !== 0 || r[on] !== 0))
            ? nt
            : r[Zt] < 0 || r[Zt] > 59
            ? Zt
            : r[gr] < 0 || r[gr] > 59
            ? gr
            : r[on] < 0 || r[on] > 999
            ? on
            : -1),
        ge(e)._overflowDayOfYear && (t < Tt || t > lr) && (t = lr),
        ge(e)._overflowWeeks && t === -1 && (t = a_),
        ge(e)._overflowWeekday && t === -1 && (t = i_),
        (ge(e).overflow = t)),
      e
    )
  }
  var Q_ =
      /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    eg =
      /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    tg = /Z|[+-]\d\d(?::?\d\d)?/,
    Ai = [
      ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
      ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
      ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
      ['GGGG-[W]WW', /\d{4}-W\d\d/, !1],
      ['YYYY-DDD', /\d{4}-\d{3}/],
      ['YYYY-MM', /\d{4}-\d\d/, !1],
      ['YYYYYYMMDD', /[+-]\d{10}/],
      ['YYYYMMDD', /\d{8}/],
      ['GGGG[W]WWE', /\d{4}W\d{3}/],
      ['GGGG[W]WW', /\d{4}W\d{2}/, !1],
      ['YYYYDDD', /\d{7}/],
      ['YYYYMM', /\d{6}/, !1],
      ['YYYY', /\d{4}/, !1]
    ],
    l0 = [
      ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
      ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
      ['HH:mm:ss', /\d\d:\d\d:\d\d/],
      ['HH:mm', /\d\d:\d\d/],
      ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
      ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
      ['HHmmss', /\d\d\d\d\d\d/],
      ['HHmm', /\d\d\d\d/],
      ['HH', /\d\d/]
    ],
    rg = /^\/?Date\((-?\d+)/i,
    ng =
      /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    ag = {
      UT: 0,
      GMT: 0,
      EDT: -4 * 60,
      EST: -5 * 60,
      CDT: -5 * 60,
      CST: -6 * 60,
      MDT: -6 * 60,
      MST: -7 * 60,
      PDT: -7 * 60,
      PST: -8 * 60
    }
  function pl(e) {
    var t,
      r,
      n = e._i,
      a = Q_.exec(n) || eg.exec(n),
      i,
      s,
      o,
      l,
      f = Ai.length,
      c = l0.length
    if (a) {
      for (ge(e).iso = !0, t = 0, r = f; t < r; t++)
        if (Ai[t][1].exec(a[1])) {
          ;(s = Ai[t][0]), (i = Ai[t][2] !== !1)
          break
        }
      if (s == null) {
        e._isValid = !1
        return
      }
      if (a[3]) {
        for (t = 0, r = c; t < r; t++)
          if (l0[t][1].exec(a[3])) {
            o = (a[2] || ' ') + l0[t][0]
            break
          }
        if (o == null) {
          e._isValid = !1
          return
        }
      }
      if (!i && o != null) {
        e._isValid = !1
        return
      }
      if (a[4])
        if (tg.exec(a[4])) l = 'Z'
        else {
          e._isValid = !1
          return
        }
      ;(e._f = s + (o || '') + (l || '')), u0(e)
    } else e._isValid = !1
  }
  function ig(e, t, r, n, a, i) {
    var s = [sg(e), rl.indexOf(t), parseInt(r, 10), parseInt(n, 10), parseInt(a, 10)]
    return i && s.push(parseInt(i, 10)), s
  }
  function sg(e) {
    var t = parseInt(e, 10)
    return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
  }
  function og(e) {
    return e
      .replace(/\([^()]*\)|[\n\t]/g, ' ')
      .replace(/(\s\s+)/g, ' ')
      .replace(/^\s\s*/, '')
      .replace(/\s\s*$/, '')
  }
  function fg(e, t, r) {
    if (e) {
      var n = ll.indexOf(e),
        a = new Date(t[0], t[1], t[2]).getDay()
      if (n !== a) return (ge(r).weekdayMismatch = !0), (r._isValid = !1), !1
    }
    return !0
  }
  function lg(e, t, r) {
    if (e) return ag[e]
    if (t) return 0
    var n = parseInt(r, 10),
      a = n % 100,
      i = (n - a) / 100
    return i * 60 + a
  }
  function xl(e) {
    var t = ng.exec(og(e._i)),
      r
    if (t) {
      if (((r = ig(t[4], t[3], t[2], t[5], t[6], t[7])), !fg(t[1], r, e))) return
      ;(e._a = r),
        (e._tzm = lg(t[8], t[9], t[10])),
        (e._d = va.apply(null, e._a)),
        e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
        (ge(e).rfc2822 = !0)
    } else e._isValid = !1
  }
  function cg(e) {
    var t = rg.exec(e._i)
    if (t !== null) {
      e._d = new Date(+t[1])
      return
    }
    if ((pl(e), e._isValid === !1)) delete e._isValid
    else return
    if ((xl(e), e._isValid === !1)) delete e._isValid
    else return
    e._strict ? (e._isValid = !1) : q.createFromInputFallback(e)
  }
  q.createFromInputFallback = $t(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (e) {
      e._d = new Date(e._i + (e._useUTC ? ' UTC' : ''))
    }
  )
  function Nn(e, t, r) {
    return e != null ? e : t != null ? t : r
  }
  function ug(e) {
    var t = new Date(q.now())
    return e._useUTC
      ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
      : [t.getFullYear(), t.getMonth(), t.getDate()]
  }
  function c0(e) {
    var t,
      r,
      n = [],
      a,
      i,
      s
    if (!e._d) {
      for (
        a = ug(e),
          e._w && e._a[lr] == null && e._a[_r] == null && hg(e),
          e._dayOfYear != null &&
            ((s = Nn(e._a[Tt], a[Tt])),
            (e._dayOfYear > ga(s) || e._dayOfYear === 0) && (ge(e)._overflowDayOfYear = !0),
            (r = va(s, 0, e._dayOfYear)),
            (e._a[_r] = r.getUTCMonth()),
            (e._a[lr] = r.getUTCDate())),
          t = 0;
        t < 3 && e._a[t] == null;
        ++t
      )
        e._a[t] = n[t] = a[t]
      for (; t < 7; t++) e._a[t] = n[t] = e._a[t] == null ? (t === 2 ? 1 : 0) : e._a[t]
      e._a[nt] === 24 &&
        e._a[Zt] === 0 &&
        e._a[gr] === 0 &&
        e._a[on] === 0 &&
        ((e._nextDay = !0), (e._a[nt] = 0)),
        (e._d = (e._useUTC ? va : g_).apply(null, n)),
        (i = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
        e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
        e._nextDay && (e._a[nt] = 24),
        e._w && typeof e._w.d < 'u' && e._w.d !== i && (ge(e).weekdayMismatch = !0)
    }
  }
  function hg(e) {
    var t, r, n, a, i, s, o, l, f
    ;(t = e._w),
      t.GG != null || t.W != null || t.E != null
        ? ((i = 1),
          (s = 4),
          (r = Nn(t.GG, e._a[Tt], wa($e(), 1, 4).year)),
          (n = Nn(t.W, 1)),
          (a = Nn(t.E, 1)),
          (a < 1 || a > 7) && (l = !0))
        : ((i = e._locale._week.dow),
          (s = e._locale._week.doy),
          (f = wa($e(), i, s)),
          (r = Nn(t.gg, e._a[Tt], f.year)),
          (n = Nn(t.w, f.week)),
          t.d != null
            ? ((a = t.d), (a < 0 || a > 6) && (l = !0))
            : t.e != null
            ? ((a = t.e + i), (t.e < 0 || t.e > 6) && (l = !0))
            : (a = i)),
      n < 1 || n > vr(r, i, s)
        ? (ge(e)._overflowWeeks = !0)
        : l != null
        ? (ge(e)._overflowWeekday = !0)
        : ((o = fl(r, n, a, i, s)), (e._a[Tt] = o.year), (e._dayOfYear = o.dayOfYear))
  }
  ;(q.ISO_8601 = function () {}), (q.RFC_2822 = function () {})
  function u0(e) {
    if (e._f === q.ISO_8601) {
      pl(e)
      return
    }
    if (e._f === q.RFC_2822) {
      xl(e)
      return
    }
    ;(e._a = []), (ge(e).empty = !0)
    var t = '' + e._i,
      r,
      n,
      a,
      i,
      s,
      o = t.length,
      l = 0,
      f,
      c
    for (a = Kf(e._f, e._locale).match(Zs) || [], c = a.length, r = 0; r < c; r++)
      (i = a[r]),
        (n = (t.match(t_(i, e)) || [])[0]),
        n &&
          ((s = t.substr(0, t.indexOf(n))),
          s.length > 0 && ge(e).unusedInput.push(s),
          (t = t.slice(t.indexOf(n) + n.length)),
          (l += n.length)),
        Dn[i]
          ? (n ? (ge(e).empty = !1) : ge(e).unusedTokens.push(i), n_(i, n, e))
          : e._strict && !n && ge(e).unusedTokens.push(i)
    ;(ge(e).charsLeftOver = o - l),
      t.length > 0 && ge(e).unusedInput.push(t),
      e._a[nt] <= 12 && ge(e).bigHour === !0 && e._a[nt] > 0 && (ge(e).bigHour = void 0),
      (ge(e).parsedDateParts = e._a.slice(0)),
      (ge(e).meridiem = e._meridiem),
      (e._a[nt] = dg(e._locale, e._a[nt], e._meridiem)),
      (f = ge(e).era),
      f !== null && (e._a[Tt] = e._locale.erasConvertYear(f, e._a[Tt])),
      c0(e),
      f0(e)
  }
  function dg(e, t, r) {
    var n
    return r == null
      ? t
      : e.meridiemHour != null
      ? e.meridiemHour(t, r)
      : (e.isPM != null && ((n = e.isPM(r)), n && t < 12 && (t += 12), !n && t === 12 && (t = 0)),
        t)
  }
  function pg(e) {
    var t,
      r,
      n,
      a,
      i,
      s,
      o = !1,
      l = e._f.length
    if (l === 0) {
      ;(ge(e).invalidFormat = !0), (e._d = new Date(NaN))
      return
    }
    for (a = 0; a < l; a++)
      (i = 0),
        (s = !1),
        (t = Xs({}, e)),
        e._useUTC != null && (t._useUTC = e._useUTC),
        (t._f = e._f[a]),
        u0(t),
        Gs(t) && (s = !0),
        (i += ge(t).charsLeftOver),
        (i += ge(t).unusedTokens.length * 10),
        (ge(t).score = i),
        o
          ? i < n && ((n = i), (r = t))
          : (n == null || i < n || s) && ((n = i), (r = t), s && (o = !0))
    Yr(e, r || t)
  }
  function xg(e) {
    if (!e._d) {
      var t = e0(e._i),
        r = t.day === void 0 ? t.date : t.day
      ;(e._a = jf([t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond], function (n) {
        return n && parseInt(n, 10)
      })),
        c0(e)
    }
  }
  function mg(e) {
    var t = new pa(f0(ml(e)))
    return t._nextDay && (t.add(1, 'd'), (t._nextDay = void 0)), t
  }
  function ml(e) {
    var t = e._i,
      r = e._f
    return (
      (e._locale = e._locale || wr(e._l)),
      t === null || (r === void 0 && t === '')
        ? ui({ nullInput: !0 })
        : (typeof t == 'string' && (e._i = t = e._locale.preparse(t)),
          Jt(t)
            ? new pa(f0(t))
            : (da(t) ? (e._d = t) : qt(r) ? pg(e) : r ? u0(e) : _g(e), Gs(e) || (e._d = null), e))
    )
  }
  function _g(e) {
    var t = e._i
    kt(t)
      ? (e._d = new Date(q.now()))
      : da(t)
      ? (e._d = new Date(t.valueOf()))
      : typeof t == 'string'
      ? cg(e)
      : qt(t)
      ? ((e._a = jf(t.slice(0), function (r) {
          return parseInt(r, 10)
        })),
        c0(e))
      : sn(t)
      ? xg(e)
      : mr(t)
      ? (e._d = new Date(t))
      : q.createFromInputFallback(e)
  }
  function _l(e, t, r, n, a) {
    var i = {}
    return (
      (t === !0 || t === !1) && ((n = t), (t = void 0)),
      (r === !0 || r === !1) && ((n = r), (r = void 0)),
      ((sn(e) && js(e)) || (qt(e) && e.length === 0)) && (e = void 0),
      (i._isAMomentObject = !0),
      (i._useUTC = i._isUTC = a),
      (i._l = r),
      (i._i = e),
      (i._f = t),
      (i._strict = n),
      mg(i)
    )
  }
  function $e(e, t, r, n) {
    return _l(e, t, r, n, !1)
  }
  var gg = $t(
      'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
      function () {
        var e = $e.apply(null, arguments)
        return this.isValid() && e.isValid() ? (e < this ? this : e) : ui()
      }
    ),
    vg = $t(
      'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
      function () {
        var e = $e.apply(null, arguments)
        return this.isValid() && e.isValid() ? (e > this ? this : e) : ui()
      }
    )
  function gl(e, t) {
    var r, n
    if ((t.length === 1 && qt(t[0]) && (t = t[0]), !t.length)) return $e()
    for (r = t[0], n = 1; n < t.length; ++n) (!t[n].isValid() || t[n][e](r)) && (r = t[n])
    return r
  }
  function wg() {
    var e = [].slice.call(arguments, 0)
    return gl('isBefore', e)
  }
  function Tg() {
    var e = [].slice.call(arguments, 0)
    return gl('isAfter', e)
  }
  var Eg = function () {
      return Date.now ? Date.now() : +new Date()
    },
    Sa = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond']
  function Sg(e) {
    var t,
      r = !1,
      n,
      a = Sa.length
    for (t in e)
      if (Fe(e, t) && !(Qe.call(Sa, t) !== -1 && (e[t] == null || !isNaN(e[t])))) return !1
    for (n = 0; n < a; ++n)
      if (e[Sa[n]]) {
        if (r) return !1
        parseFloat(e[Sa[n]]) !== we(e[Sa[n]]) && (r = !0)
      }
    return !0
  }
  function yg() {
    return this._isValid
  }
  function Ag() {
    return Qt(NaN)
  }
  function Oi(e) {
    var t = e0(e),
      r = t.year || 0,
      n = t.quarter || 0,
      a = t.month || 0,
      i = t.week || t.isoWeek || 0,
      s = t.day || 0,
      o = t.hour || 0,
      l = t.minute || 0,
      f = t.second || 0,
      c = t.millisecond || 0
    ;(this._isValid = Sg(t)),
      (this._milliseconds = +c + f * 1e3 + l * 6e4 + o * 1e3 * 60 * 60),
      (this._days = +s + i * 7),
      (this._months = +a + n * 3 + r * 12),
      (this._data = {}),
      (this._locale = wr()),
      this._bubble()
  }
  function Fi(e) {
    return e instanceof Oi
  }
  function h0(e) {
    return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e)
  }
  function Og(e, t, r) {
    var n = Math.min(e.length, t.length),
      a = Math.abs(e.length - t.length),
      i = 0,
      s
    for (s = 0; s < n; s++) ((r && e[s] !== t[s]) || (!r && we(e[s]) !== we(t[s]))) && i++
    return i + a
  }
  function vl(e, t) {
    pe(e, 0, 0, function () {
      var r = this.utcOffset(),
        n = '+'
      return r < 0 && ((r = -r), (n = '-')), n + fr(~~(r / 60), 2) + t + fr(~~r % 60, 2)
    })
  }
  vl('Z', ':'),
    vl('ZZ', ''),
    oe('Z', wi),
    oe('ZZ', wi),
    Be(['Z', 'ZZ'], function (e, t, r) {
      ;(r._useUTC = !0), (r._tzm = d0(wi, e))
    })
  var Fg = /([\+\-]|\d\d)/gi
  function d0(e, t) {
    var r = (t || '').match(e),
      n,
      a,
      i
    return r === null
      ? null
      : ((n = r[r.length - 1] || []),
        (a = (n + '').match(Fg) || ['-', 0, 0]),
        (i = +(a[1] * 60) + we(a[2])),
        i === 0 ? 0 : a[0] === '+' ? i : -i)
  }
  function p0(e, t) {
    var r, n
    return t._isUTC
      ? ((r = t.clone()),
        (n = (Jt(e) || da(e) ? e.valueOf() : $e(e).valueOf()) - r.valueOf()),
        r._d.setTime(r._d.valueOf() + n),
        q.updateOffset(r, !1),
        r)
      : $e(e).local()
  }
  function x0(e) {
    return -Math.round(e._d.getTimezoneOffset())
  }
  q.updateOffset = function () {}
  function Cg(e, t, r) {
    var n = this._offset || 0,
      a
    if (!this.isValid()) return e != null ? this : NaN
    if (e != null) {
      if (typeof e == 'string') {
        if (((e = d0(wi, e)), e === null)) return this
      } else Math.abs(e) < 16 && !r && (e = e * 60)
      return (
        !this._isUTC && t && (a = x0(this)),
        (this._offset = e),
        (this._isUTC = !0),
        a != null && this.add(a, 'm'),
        n !== e &&
          (!t || this._changeInProgress
            ? Sl(this, Qt(e - n, 'm'), 1, !1)
            : this._changeInProgress ||
              ((this._changeInProgress = !0),
              q.updateOffset(this, !0),
              (this._changeInProgress = null))),
        this
      )
    } else return this._isUTC ? n : x0(this)
  }
  function Dg(e, t) {
    return e != null
      ? (typeof e != 'string' && (e = -e), this.utcOffset(e, t), this)
      : -this.utcOffset()
  }
  function kg(e) {
    return this.utcOffset(0, e)
  }
  function Rg(e) {
    return (
      this._isUTC && (this.utcOffset(0, e), (this._isUTC = !1), e && this.subtract(x0(this), 'm')),
      this
    )
  }
  function Ng() {
    if (this._tzm != null) this.utcOffset(this._tzm, !1, !0)
    else if (typeof this._i == 'string') {
      var e = d0(Qm, this._i)
      e != null ? this.utcOffset(e) : this.utcOffset(0, !0)
    }
    return this
  }
  function Pg(e) {
    return this.isValid()
      ? ((e = e ? $e(e).utcOffset() : 0), (this.utcOffset() - e) % 60 === 0)
      : !1
  }
  function Ig() {
    return (
      this.utcOffset() > this.clone().month(0).utcOffset() ||
      this.utcOffset() > this.clone().month(5).utcOffset()
    )
  }
  function Mg() {
    if (!kt(this._isDSTShifted)) return this._isDSTShifted
    var e = {},
      t
    return (
      Xs(e, this),
      (e = ml(e)),
      e._a
        ? ((t = e._isUTC ? sr(e._a) : $e(e._a)),
          (this._isDSTShifted = this.isValid() && Og(e._a, t.toArray()) > 0))
        : (this._isDSTShifted = !1),
      this._isDSTShifted
    )
  }
  function bg() {
    return this.isValid() ? !this._isUTC : !1
  }
  function Lg() {
    return this.isValid() ? this._isUTC : !1
  }
  function wl() {
    return this.isValid() ? this._isUTC && this._offset === 0 : !1
  }
  var Bg = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
    Ug =
      /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/
  function Qt(e, t) {
    var r = e,
      n = null,
      a,
      i,
      s
    return (
      Fi(e)
        ? (r = { ms: e._milliseconds, d: e._days, M: e._months })
        : mr(e) || !isNaN(+e)
        ? ((r = {}), t ? (r[t] = +e) : (r.milliseconds = +e))
        : (n = Bg.exec(e))
        ? ((a = n[1] === '-' ? -1 : 1),
          (r = {
            y: 0,
            d: we(n[lr]) * a,
            h: we(n[nt]) * a,
            m: we(n[Zt]) * a,
            s: we(n[gr]) * a,
            ms: we(h0(n[on] * 1e3)) * a
          }))
        : (n = Ug.exec(e))
        ? ((a = n[1] === '-' ? -1 : 1),
          (r = {
            y: fn(n[2], a),
            M: fn(n[3], a),
            w: fn(n[4], a),
            d: fn(n[5], a),
            h: fn(n[6], a),
            m: fn(n[7], a),
            s: fn(n[8], a)
          }))
        : r == null
        ? (r = {})
        : typeof r == 'object' &&
          ('from' in r || 'to' in r) &&
          ((s = Wg($e(r.from), $e(r.to))), (r = {}), (r.ms = s.milliseconds), (r.M = s.months)),
      (i = new Oi(r)),
      Fi(e) && Fe(e, '_locale') && (i._locale = e._locale),
      Fi(e) && Fe(e, '_isValid') && (i._isValid = e._isValid),
      i
    )
  }
  ;(Qt.fn = Oi.prototype), (Qt.invalid = Ag)
  function fn(e, t) {
    var r = e && parseFloat(e.replace(',', '.'))
    return (isNaN(r) ? 0 : r) * t
  }
  function Tl(e, t) {
    var r = {}
    return (
      (r.months = t.month() - e.month() + (t.year() - e.year()) * 12),
      e.clone().add(r.months, 'M').isAfter(t) && --r.months,
      (r.milliseconds = +t - +e.clone().add(r.months, 'M')),
      r
    )
  }
  function Wg(e, t) {
    var r
    return e.isValid() && t.isValid()
      ? ((t = p0(t, e)),
        e.isBefore(t)
          ? (r = Tl(e, t))
          : ((r = Tl(t, e)), (r.milliseconds = -r.milliseconds), (r.months = -r.months)),
        r)
      : { milliseconds: 0, months: 0 }
  }
  function El(e, t) {
    return function (r, n) {
      var a, i
      return (
        n !== null &&
          !isNaN(+n) &&
          (Xf(
            t,
            'moment().' +
              t +
              '(period, number) is deprecated. Please use moment().' +
              t +
              '(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
          ),
          (i = r),
          (r = n),
          (n = i)),
        (a = Qt(r, n)),
        Sl(this, a, e),
        this
      )
    }
  }
  function Sl(e, t, r, n) {
    var a = t._milliseconds,
      i = h0(t._days),
      s = h0(t._months)
    !e.isValid() ||
      ((n = n == null ? !0 : n),
      s && al(e, xi(e, 'Month') + s * r),
      i && Jf(e, 'Date', xi(e, 'Date') + i * r),
      a && e._d.setTime(e._d.valueOf() + a * r),
      n && q.updateOffset(e, i || s))
  }
  var Hg = El(1, 'add'),
    Yg = El(-1, 'subtract')
  function yl(e) {
    return typeof e == 'string' || e instanceof String
  }
  function $g(e) {
    return Jt(e) || da(e) || yl(e) || mr(e) || Vg(e) || jg(e) || e === null || e === void 0
  }
  function jg(e) {
    var t = sn(e) && !js(e),
      r = !1,
      n = [
        'years',
        'year',
        'y',
        'months',
        'month',
        'M',
        'days',
        'day',
        'd',
        'dates',
        'date',
        'D',
        'hours',
        'hour',
        'h',
        'minutes',
        'minute',
        'm',
        'seconds',
        'second',
        's',
        'milliseconds',
        'millisecond',
        'ms'
      ],
      a,
      i,
      s = n.length
    for (a = 0; a < s; a += 1) (i = n[a]), (r = r || Fe(e, i))
    return t && r
  }
  function Vg(e) {
    var t = qt(e),
      r = !1
    return (
      t &&
        (r =
          e.filter(function (n) {
            return !mr(n) && yl(e)
          }).length === 0),
      t && r
    )
  }
  function Gg(e) {
    var t = sn(e) && !js(e),
      r = !1,
      n = ['sameDay', 'nextDay', 'lastDay', 'nextWeek', 'lastWeek', 'sameElse'],
      a,
      i
    for (a = 0; a < n.length; a += 1) (i = n[a]), (r = r || Fe(e, i))
    return t && r
  }
  function zg(e, t) {
    var r = e.diff(t, 'days', !0)
    return r < -6
      ? 'sameElse'
      : r < -1
      ? 'lastWeek'
      : r < 0
      ? 'lastDay'
      : r < 1
      ? 'sameDay'
      : r < 2
      ? 'nextDay'
      : r < 7
      ? 'nextWeek'
      : 'sameElse'
  }
  function Xg(e, t) {
    arguments.length === 1 &&
      (arguments[0]
        ? $g(arguments[0])
          ? ((e = arguments[0]), (t = void 0))
          : Gg(arguments[0]) && ((t = arguments[0]), (e = void 0))
        : ((e = void 0), (t = void 0)))
    var r = e || $e(),
      n = p0(r, this).startOf('day'),
      a = q.calendarFormat(this, n) || 'sameElse',
      i = t && (or(t[a]) ? t[a].call(this, r) : t[a])
    return this.format(i || this.localeData().calendar(a, this, $e(r)))
  }
  function Kg() {
    return new pa(this)
  }
  function qg(e, t) {
    var r = Jt(e) ? e : $e(e)
    return this.isValid() && r.isValid()
      ? ((t = jt(t) || 'millisecond'),
        t === 'millisecond'
          ? this.valueOf() > r.valueOf()
          : r.valueOf() < this.clone().startOf(t).valueOf())
      : !1
  }
  function Jg(e, t) {
    var r = Jt(e) ? e : $e(e)
    return this.isValid() && r.isValid()
      ? ((t = jt(t) || 'millisecond'),
        t === 'millisecond'
          ? this.valueOf() < r.valueOf()
          : this.clone().endOf(t).valueOf() < r.valueOf())
      : !1
  }
  function Zg(e, t, r, n) {
    var a = Jt(e) ? e : $e(e),
      i = Jt(t) ? t : $e(t)
    return this.isValid() && a.isValid() && i.isValid()
      ? ((n = n || '()'),
        (n[0] === '(' ? this.isAfter(a, r) : !this.isBefore(a, r)) &&
          (n[1] === ')' ? this.isBefore(i, r) : !this.isAfter(i, r)))
      : !1
  }
  function Qg(e, t) {
    var r = Jt(e) ? e : $e(e),
      n
    return this.isValid() && r.isValid()
      ? ((t = jt(t) || 'millisecond'),
        t === 'millisecond'
          ? this.valueOf() === r.valueOf()
          : ((n = r.valueOf()),
            this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
      : !1
  }
  function e2(e, t) {
    return this.isSame(e, t) || this.isAfter(e, t)
  }
  function t2(e, t) {
    return this.isSame(e, t) || this.isBefore(e, t)
  }
  function r2(e, t, r) {
    var n, a, i
    if (!this.isValid()) return NaN
    if (((n = p0(e, this)), !n.isValid())) return NaN
    switch (((a = (n.utcOffset() - this.utcOffset()) * 6e4), (t = jt(t)), t)) {
      case 'year':
        i = Ci(this, n) / 12
        break
      case 'month':
        i = Ci(this, n)
        break
      case 'quarter':
        i = Ci(this, n) / 3
        break
      case 'second':
        i = (this - n) / 1e3
        break
      case 'minute':
        i = (this - n) / 6e4
        break
      case 'hour':
        i = (this - n) / 36e5
        break
      case 'day':
        i = (this - n - a) / 864e5
        break
      case 'week':
        i = (this - n - a) / 6048e5
        break
      default:
        i = this - n
    }
    return r ? i : Vt(i)
  }
  function Ci(e, t) {
    if (e.date() < t.date()) return -Ci(t, e)
    var r = (t.year() - e.year()) * 12 + (t.month() - e.month()),
      n = e.clone().add(r, 'months'),
      a,
      i
    return (
      t - n < 0
        ? ((a = e.clone().add(r - 1, 'months')), (i = (t - n) / (n - a)))
        : ((a = e.clone().add(r + 1, 'months')), (i = (t - n) / (a - n))),
      -(r + i) || 0
    )
  }
  ;(q.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ'), (q.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]')
  function n2() {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ')
  }
  function a2(e) {
    if (!this.isValid()) return null
    var t = e !== !0,
      r = t ? this.clone().utc() : this
    return r.year() < 0 || r.year() > 9999
      ? di(r, t ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ')
      : or(Date.prototype.toISOString)
      ? t
        ? this.toDate().toISOString()
        : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3)
            .toISOString()
            .replace('Z', di(r, 'Z'))
      : di(r, t ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ')
  }
  function i2() {
    if (!this.isValid()) return 'moment.invalid(/* ' + this._i + ' */)'
    var e = 'moment',
      t = '',
      r,
      n,
      a,
      i
    return (
      this.isLocal() ||
        ((e = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone'), (t = 'Z')),
      (r = '[' + e + '("]'),
      (n = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY'),
      (a = '-MM-DD[T]HH:mm:ss.SSS'),
      (i = t + '[")]'),
      this.format(r + n + a + i)
    )
  }
  function s2(e) {
    e || (e = this.isUtc() ? q.defaultFormatUtc : q.defaultFormat)
    var t = di(this, e)
    return this.localeData().postformat(t)
  }
  function o2(e, t) {
    return this.isValid() && ((Jt(e) && e.isValid()) || $e(e).isValid())
      ? Qt({ to: this, from: e }).locale(this.locale()).humanize(!t)
      : this.localeData().invalidDate()
  }
  function f2(e) {
    return this.from($e(), e)
  }
  function l2(e, t) {
    return this.isValid() && ((Jt(e) && e.isValid()) || $e(e).isValid())
      ? Qt({ from: this, to: e }).locale(this.locale()).humanize(!t)
      : this.localeData().invalidDate()
  }
  function c2(e) {
    return this.to($e(), e)
  }
  function Al(e) {
    var t
    return e === void 0 ? this._locale._abbr : ((t = wr(e)), t != null && (this._locale = t), this)
  }
  var Ol = $t(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (e) {
      return e === void 0 ? this.localeData() : this.locale(e)
    }
  )
  function Fl() {
    return this._locale
  }
  var Di = 1e3,
    Pn = 60 * Di,
    ki = 60 * Pn,
    Cl = (365 * 400 + 97) * 24 * ki
  function In(e, t) {
    return ((e % t) + t) % t
  }
  function Dl(e, t, r) {
    return e < 100 && e >= 0 ? new Date(e + 400, t, r) - Cl : new Date(e, t, r).valueOf()
  }
  function kl(e, t, r) {
    return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - Cl : Date.UTC(e, t, r)
  }
  function u2(e) {
    var t, r
    if (((e = jt(e)), e === void 0 || e === 'millisecond' || !this.isValid())) return this
    switch (((r = this._isUTC ? kl : Dl), e)) {
      case 'year':
        t = r(this.year(), 0, 1)
        break
      case 'quarter':
        t = r(this.year(), this.month() - (this.month() % 3), 1)
        break
      case 'month':
        t = r(this.year(), this.month(), 1)
        break
      case 'week':
        t = r(this.year(), this.month(), this.date() - this.weekday())
        break
      case 'isoWeek':
        t = r(this.year(), this.month(), this.date() - (this.isoWeekday() - 1))
        break
      case 'day':
      case 'date':
        t = r(this.year(), this.month(), this.date())
        break
      case 'hour':
        ;(t = this._d.valueOf()), (t -= In(t + (this._isUTC ? 0 : this.utcOffset() * Pn), ki))
        break
      case 'minute':
        ;(t = this._d.valueOf()), (t -= In(t, Pn))
        break
      case 'second':
        ;(t = this._d.valueOf()), (t -= In(t, Di))
        break
    }
    return this._d.setTime(t), q.updateOffset(this, !0), this
  }
  function h2(e) {
    var t, r
    if (((e = jt(e)), e === void 0 || e === 'millisecond' || !this.isValid())) return this
    switch (((r = this._isUTC ? kl : Dl), e)) {
      case 'year':
        t = r(this.year() + 1, 0, 1) - 1
        break
      case 'quarter':
        t = r(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1
        break
      case 'month':
        t = r(this.year(), this.month() + 1, 1) - 1
        break
      case 'week':
        t = r(this.year(), this.month(), this.date() - this.weekday() + 7) - 1
        break
      case 'isoWeek':
        t = r(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1
        break
      case 'day':
      case 'date':
        t = r(this.year(), this.month(), this.date() + 1) - 1
        break
      case 'hour':
        ;(t = this._d.valueOf()),
          (t += ki - In(t + (this._isUTC ? 0 : this.utcOffset() * Pn), ki) - 1)
        break
      case 'minute':
        ;(t = this._d.valueOf()), (t += Pn - In(t, Pn) - 1)
        break
      case 'second':
        ;(t = this._d.valueOf()), (t += Di - In(t, Di) - 1)
        break
    }
    return this._d.setTime(t), q.updateOffset(this, !0), this
  }
  function d2() {
    return this._d.valueOf() - (this._offset || 0) * 6e4
  }
  function p2() {
    return Math.floor(this.valueOf() / 1e3)
  }
  function x2() {
    return new Date(this.valueOf())
  }
  function m2() {
    var e = this
    return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
  }
  function _2() {
    var e = this
    return {
      years: e.year(),
      months: e.month(),
      date: e.date(),
      hours: e.hours(),
      minutes: e.minutes(),
      seconds: e.seconds(),
      milliseconds: e.milliseconds()
    }
  }
  function g2() {
    return this.isValid() ? this.toISOString() : null
  }
  function v2() {
    return Gs(this)
  }
  function w2() {
    return Yr({}, ge(this))
  }
  function T2() {
    return ge(this).overflow
  }
  function E2() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    }
  }
  pe('N', 0, 0, 'eraAbbr'),
    pe('NN', 0, 0, 'eraAbbr'),
    pe('NNN', 0, 0, 'eraAbbr'),
    pe('NNNN', 0, 0, 'eraName'),
    pe('NNNNN', 0, 0, 'eraNarrow'),
    pe('y', ['y', 1], 'yo', 'eraYear'),
    pe('y', ['yy', 2], 0, 'eraYear'),
    pe('y', ['yyy', 3], 0, 'eraYear'),
    pe('y', ['yyyy', 4], 0, 'eraYear'),
    oe('N', m0),
    oe('NN', m0),
    oe('NNN', m0),
    oe('NNNN', P2),
    oe('NNNNN', I2),
    Be(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (e, t, r, n) {
      var a = r._locale.erasParse(e, n, r._strict)
      a ? (ge(r).era = a) : (ge(r).invalidEra = e)
    }),
    oe('y', Rn),
    oe('yy', Rn),
    oe('yyy', Rn),
    oe('yyyy', Rn),
    oe('yo', M2),
    Be(['y', 'yy', 'yyy', 'yyyy'], Tt),
    Be(['yo'], function (e, t, r, n) {
      var a
      r._locale._eraYearOrdinalRegex && (a = e.match(r._locale._eraYearOrdinalRegex)),
        r._locale.eraYearOrdinalParse
          ? (t[Tt] = r._locale.eraYearOrdinalParse(e, a))
          : (t[Tt] = parseInt(e, 10))
    })
  function S2(e, t) {
    var r,
      n,
      a,
      i = this._eras || wr('en')._eras
    for (r = 0, n = i.length; r < n; ++r) {
      switch (typeof i[r].since) {
        case 'string':
          ;(a = q(i[r].since).startOf('day')), (i[r].since = a.valueOf())
          break
      }
      switch (typeof i[r].until) {
        case 'undefined':
          i[r].until = 1 / 0
          break
        case 'string':
          ;(a = q(i[r].until).startOf('day').valueOf()), (i[r].until = a.valueOf())
          break
      }
    }
    return i
  }
  function y2(e, t, r) {
    var n,
      a,
      i = this.eras(),
      s,
      o,
      l
    for (e = e.toUpperCase(), n = 0, a = i.length; n < a; ++n)
      if (
        ((s = i[n].name.toUpperCase()),
        (o = i[n].abbr.toUpperCase()),
        (l = i[n].narrow.toUpperCase()),
        r)
      )
        switch (t) {
          case 'N':
          case 'NN':
          case 'NNN':
            if (o === e) return i[n]
            break
          case 'NNNN':
            if (s === e) return i[n]
            break
          case 'NNNNN':
            if (l === e) return i[n]
            break
        }
      else if ([s, o, l].indexOf(e) >= 0) return i[n]
  }
  function A2(e, t) {
    var r = e.since <= e.until ? 1 : -1
    return t === void 0 ? q(e.since).year() : q(e.since).year() + (t - e.offset) * r
  }
  function O2() {
    var e,
      t,
      r,
      n = this.localeData().eras()
    for (e = 0, t = n.length; e < t; ++e)
      if (
        ((r = this.clone().startOf('day').valueOf()),
        (n[e].since <= r && r <= n[e].until) || (n[e].until <= r && r <= n[e].since))
      )
        return n[e].name
    return ''
  }
  function F2() {
    var e,
      t,
      r,
      n = this.localeData().eras()
    for (e = 0, t = n.length; e < t; ++e)
      if (
        ((r = this.clone().startOf('day').valueOf()),
        (n[e].since <= r && r <= n[e].until) || (n[e].until <= r && r <= n[e].since))
      )
        return n[e].narrow
    return ''
  }
  function C2() {
    var e,
      t,
      r,
      n = this.localeData().eras()
    for (e = 0, t = n.length; e < t; ++e)
      if (
        ((r = this.clone().startOf('day').valueOf()),
        (n[e].since <= r && r <= n[e].until) || (n[e].until <= r && r <= n[e].since))
      )
        return n[e].abbr
    return ''
  }
  function D2() {
    var e,
      t,
      r,
      n,
      a = this.localeData().eras()
    for (e = 0, t = a.length; e < t; ++e)
      if (
        ((r = a[e].since <= a[e].until ? 1 : -1),
        (n = this.clone().startOf('day').valueOf()),
        (a[e].since <= n && n <= a[e].until) || (a[e].until <= n && n <= a[e].since))
      )
        return (this.year() - q(a[e].since).year()) * r + a[e].offset
    return this.year()
  }
  function k2(e) {
    return Fe(this, '_erasNameRegex') || _0.call(this), e ? this._erasNameRegex : this._erasRegex
  }
  function R2(e) {
    return Fe(this, '_erasAbbrRegex') || _0.call(this), e ? this._erasAbbrRegex : this._erasRegex
  }
  function N2(e) {
    return (
      Fe(this, '_erasNarrowRegex') || _0.call(this), e ? this._erasNarrowRegex : this._erasRegex
    )
  }
  function m0(e, t) {
    return t.erasAbbrRegex(e)
  }
  function P2(e, t) {
    return t.erasNameRegex(e)
  }
  function I2(e, t) {
    return t.erasNarrowRegex(e)
  }
  function M2(e, t) {
    return t._eraYearOrdinalRegex || Rn
  }
  function _0() {
    var e = [],
      t = [],
      r = [],
      n = [],
      a,
      i,
      s = this.eras()
    for (a = 0, i = s.length; a < i; ++a)
      t.push(bt(s[a].name)),
        e.push(bt(s[a].abbr)),
        r.push(bt(s[a].narrow)),
        n.push(bt(s[a].name)),
        n.push(bt(s[a].abbr)),
        n.push(bt(s[a].narrow))
    ;(this._erasRegex = new RegExp('^(' + n.join('|') + ')', 'i')),
      (this._erasNameRegex = new RegExp('^(' + t.join('|') + ')', 'i')),
      (this._erasAbbrRegex = new RegExp('^(' + e.join('|') + ')', 'i')),
      (this._erasNarrowRegex = new RegExp('^(' + r.join('|') + ')', 'i'))
  }
  pe(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100
  }),
    pe(0, ['GG', 2], 0, function () {
      return this.isoWeekYear() % 100
    })
  function Ri(e, t) {
    pe(0, [e, e.length], 0, t)
  }
  Ri('gggg', 'weekYear'),
    Ri('ggggg', 'weekYear'),
    Ri('GGGG', 'isoWeekYear'),
    Ri('GGGGG', 'isoWeekYear'),
    vt('weekYear', 'gg'),
    vt('isoWeekYear', 'GG'),
    wt('weekYear', 1),
    wt('isoWeekYear', 1),
    oe('G', vi),
    oe('g', vi),
    oe('GG', Ye, Mt),
    oe('gg', Ye, Mt),
    oe('GGGG', r0, t0),
    oe('gggg', r0, t0),
    oe('GGGGG', gi, mi),
    oe('ggggg', gi, mi),
    _a(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (e, t, r, n) {
      t[n.substr(0, 2)] = we(e)
    }),
    _a(['gg', 'GG'], function (e, t, r, n) {
      t[n] = q.parseTwoDigitYear(e)
    })
  function b2(e) {
    return Rl.call(
      this,
      e,
      this.week(),
      this.weekday(),
      this.localeData()._week.dow,
      this.localeData()._week.doy
    )
  }
  function L2(e) {
    return Rl.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
  }
  function B2() {
    return vr(this.year(), 1, 4)
  }
  function U2() {
    return vr(this.isoWeekYear(), 1, 4)
  }
  function W2() {
    var e = this.localeData()._week
    return vr(this.year(), e.dow, e.doy)
  }
  function H2() {
    var e = this.localeData()._week
    return vr(this.weekYear(), e.dow, e.doy)
  }
  function Rl(e, t, r, n, a) {
    var i
    return e == null
      ? wa(this, n, a).year
      : ((i = vr(e, n, a)), t > i && (t = i), Y2.call(this, e, t, r, n, a))
  }
  function Y2(e, t, r, n, a) {
    var i = fl(e, t, r, n, a),
      s = va(i.year, 0, i.dayOfYear)
    return (
      this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
    )
  }
  pe('Q', 0, 'Qo', 'quarter'),
    vt('quarter', 'Q'),
    wt('quarter', 7),
    oe('Q', Zf),
    Be('Q', function (e, t) {
      t[_r] = (we(e) - 1) * 3
    })
  function $2(e) {
    return e == null
      ? Math.ceil((this.month() + 1) / 3)
      : this.month((e - 1) * 3 + (this.month() % 3))
  }
  pe('D', ['DD', 2], 'Do', 'date'),
    vt('date', 'D'),
    wt('date', 9),
    oe('D', Ye),
    oe('DD', Ye, Mt),
    oe('Do', function (e, t) {
      return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
    }),
    Be(['D', 'DD'], lr),
    Be('Do', function (e, t) {
      t[lr] = we(e.match(Ye)[0])
    })
  var Nl = kn('Date', !0)
  pe('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'),
    vt('dayOfYear', 'DDD'),
    wt('dayOfYear', 4),
    oe('DDD', _i),
    oe('DDDD', Qf),
    Be(['DDD', 'DDDD'], function (e, t, r) {
      r._dayOfYear = we(e)
    })
  function j2(e) {
    var t = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1
    return e == null ? t : this.add(e - t, 'd')
  }
  pe('m', ['mm', 2], 0, 'minute'),
    vt('minute', 'm'),
    wt('minute', 14),
    oe('m', Ye),
    oe('mm', Ye, Mt),
    Be(['m', 'mm'], Zt)
  var V2 = kn('Minutes', !1)
  pe('s', ['ss', 2], 0, 'second'),
    vt('second', 's'),
    wt('second', 15),
    oe('s', Ye),
    oe('ss', Ye, Mt),
    Be(['s', 'ss'], gr)
  var G2 = kn('Seconds', !1)
  pe('S', 0, 0, function () {
    return ~~(this.millisecond() / 100)
  }),
    pe(0, ['SS', 2], 0, function () {
      return ~~(this.millisecond() / 10)
    }),
    pe(0, ['SSS', 3], 0, 'millisecond'),
    pe(0, ['SSSS', 4], 0, function () {
      return this.millisecond() * 10
    }),
    pe(0, ['SSSSS', 5], 0, function () {
      return this.millisecond() * 100
    }),
    pe(0, ['SSSSSS', 6], 0, function () {
      return this.millisecond() * 1e3
    }),
    pe(0, ['SSSSSSS', 7], 0, function () {
      return this.millisecond() * 1e4
    }),
    pe(0, ['SSSSSSSS', 8], 0, function () {
      return this.millisecond() * 1e5
    }),
    pe(0, ['SSSSSSSSS', 9], 0, function () {
      return this.millisecond() * 1e6
    }),
    vt('millisecond', 'ms'),
    wt('millisecond', 16),
    oe('S', _i, Zf),
    oe('SS', _i, Mt),
    oe('SSS', _i, Qf)
  var jr, Pl
  for (jr = 'SSSS'; jr.length <= 9; jr += 'S') oe(jr, Rn)
  function z2(e, t) {
    t[on] = we(('0.' + e) * 1e3)
  }
  for (jr = 'S'; jr.length <= 9; jr += 'S') Be(jr, z2)
  ;(Pl = kn('Milliseconds', !1)), pe('z', 0, 0, 'zoneAbbr'), pe('zz', 0, 0, 'zoneName')
  function X2() {
    return this._isUTC ? 'UTC' : ''
  }
  function K2() {
    return this._isUTC ? 'Coordinated Universal Time' : ''
  }
  var K = pa.prototype
  ;(K.add = Hg),
    (K.calendar = Xg),
    (K.clone = Kg),
    (K.diff = r2),
    (K.endOf = h2),
    (K.format = s2),
    (K.from = o2),
    (K.fromNow = f2),
    (K.to = l2),
    (K.toNow = c2),
    (K.get = Jm),
    (K.invalidAt = T2),
    (K.isAfter = qg),
    (K.isBefore = Jg),
    (K.isBetween = Zg),
    (K.isSame = Qg),
    (K.isSameOrAfter = e2),
    (K.isSameOrBefore = t2),
    (K.isValid = v2),
    (K.lang = Ol),
    (K.locale = Al),
    (K.localeData = Fl),
    (K.max = vg),
    (K.min = gg),
    (K.parsingFlags = w2),
    (K.set = Zm),
    (K.startOf = u2),
    (K.subtract = Yg),
    (K.toArray = m2),
    (K.toObject = _2),
    (K.toDate = x2),
    (K.toISOString = a2),
    (K.inspect = i2),
    typeof Symbol < 'u' &&
      Symbol.for != null &&
      (K[Symbol.for('nodejs.util.inspect.custom')] = function () {
        return 'Moment<' + this.format() + '>'
      }),
    (K.toJSON = g2),
    (K.toString = n2),
    (K.unix = p2),
    (K.valueOf = d2),
    (K.creationData = E2),
    (K.eraName = O2),
    (K.eraNarrow = F2),
    (K.eraAbbr = C2),
    (K.eraYear = D2),
    (K.year = ol),
    (K.isLeapYear = __),
    (K.weekYear = b2),
    (K.isoWeekYear = L2),
    (K.quarter = K.quarters = $2),
    (K.month = il),
    (K.daysInMonth = p_),
    (K.week = K.weeks = S_),
    (K.isoWeek = K.isoWeeks = y_),
    (K.weeksInYear = W2),
    (K.weeksInWeekYear = H2),
    (K.isoWeeksInYear = B2),
    (K.isoWeeksInISOWeekYear = U2),
    (K.date = Nl),
    (K.day = K.days = L_),
    (K.weekday = B_),
    (K.isoWeekday = U_),
    (K.dayOfYear = j2),
    (K.hour = K.hours = G_),
    (K.minute = K.minutes = V2),
    (K.second = K.seconds = G2),
    (K.millisecond = K.milliseconds = Pl),
    (K.utcOffset = Cg),
    (K.utc = kg),
    (K.local = Rg),
    (K.parseZone = Ng),
    (K.hasAlignedHourOffset = Pg),
    (K.isDST = Ig),
    (K.isLocal = bg),
    (K.isUtcOffset = Lg),
    (K.isUtc = wl),
    (K.isUTC = wl),
    (K.zoneAbbr = X2),
    (K.zoneName = K2),
    (K.dates = $t('dates accessor is deprecated. Use date instead.', Nl)),
    (K.months = $t('months accessor is deprecated. Use month instead', il)),
    (K.years = $t('years accessor is deprecated. Use year instead', ol)),
    (K.zone = $t(
      'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
      Dg
    )),
    (K.isDSTShifted = $t(
      'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
      Mg
    ))
  function q2(e) {
    return $e(e * 1e3)
  }
  function J2() {
    return $e.apply(null, arguments).parseZone()
  }
  function Il(e) {
    return e
  }
  var Ce = qs.prototype
  ;(Ce.calendar = Lm),
    (Ce.longDateFormat = Hm),
    (Ce.invalidDate = $m),
    (Ce.ordinal = Gm),
    (Ce.preparse = Il),
    (Ce.postformat = Il),
    (Ce.relativeTime = Xm),
    (Ce.pastFuture = Km),
    (Ce.set = Mm),
    (Ce.eras = S2),
    (Ce.erasParse = y2),
    (Ce.erasConvertYear = A2),
    (Ce.erasAbbrRegex = R2),
    (Ce.erasNameRegex = k2),
    (Ce.erasNarrowRegex = N2),
    (Ce.months = c_),
    (Ce.monthsShort = u_),
    (Ce.monthsParse = d_),
    (Ce.monthsRegex = m_),
    (Ce.monthsShortRegex = x_),
    (Ce.week = v_),
    (Ce.firstDayOfYear = E_),
    (Ce.firstDayOfWeek = T_),
    (Ce.weekdays = N_),
    (Ce.weekdaysMin = I_),
    (Ce.weekdaysShort = P_),
    (Ce.weekdaysParse = b_),
    (Ce.weekdaysRegex = W_),
    (Ce.weekdaysShortRegex = H_),
    (Ce.weekdaysMinRegex = Y_),
    (Ce.isPM = j_),
    (Ce.meridiem = z_)
  function Ni(e, t, r, n) {
    var a = wr(),
      i = sr().set(n, t)
    return a[r](i, e)
  }
  function Ml(e, t, r) {
    if ((mr(e) && ((t = e), (e = void 0)), (e = e || ''), t != null)) return Ni(e, t, r, 'month')
    var n,
      a = []
    for (n = 0; n < 12; n++) a[n] = Ni(e, n, r, 'month')
    return a
  }
  function g0(e, t, r, n) {
    typeof e == 'boolean'
      ? (mr(t) && ((r = t), (t = void 0)), (t = t || ''))
      : ((t = e), (r = t), (e = !1), mr(t) && ((r = t), (t = void 0)), (t = t || ''))
    var a = wr(),
      i = e ? a._week.dow : 0,
      s,
      o = []
    if (r != null) return Ni(t, (r + i) % 7, n, 'day')
    for (s = 0; s < 7; s++) o[s] = Ni(t, (s + i) % 7, n, 'day')
    return o
  }
  function Z2(e, t) {
    return Ml(e, t, 'months')
  }
  function Q2(e, t) {
    return Ml(e, t, 'monthsShort')
  }
  function ev(e, t, r) {
    return g0(e, t, r, 'weekdays')
  }
  function tv(e, t, r) {
    return g0(e, t, r, 'weekdaysShort')
  }
  function rv(e, t, r) {
    return g0(e, t, r, 'weekdaysMin')
  }
  $r('en', {
    eras: [
      {
        since: '0001-01-01',
        until: 1 / 0,
        offset: 1,
        name: 'Anno Domini',
        narrow: 'AD',
        abbr: 'AD'
      },
      {
        since: '0000-12-31',
        until: -1 / 0,
        offset: 1,
        name: 'Before Christ',
        narrow: 'BC',
        abbr: 'BC'
      }
    ],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function (e) {
      var t = e % 10,
        r =
          we((e % 100) / 10) === 1 ? 'th' : t === 1 ? 'st' : t === 2 ? 'nd' : t === 3 ? 'rd' : 'th'
      return e + r
    }
  }),
    (q.lang = $t('moment.lang is deprecated. Use moment.locale instead.', $r)),
    (q.langData = $t('moment.langData is deprecated. Use moment.localeData instead.', wr))
  var Tr = Math.abs
  function nv() {
    var e = this._data
    return (
      (this._milliseconds = Tr(this._milliseconds)),
      (this._days = Tr(this._days)),
      (this._months = Tr(this._months)),
      (e.milliseconds = Tr(e.milliseconds)),
      (e.seconds = Tr(e.seconds)),
      (e.minutes = Tr(e.minutes)),
      (e.hours = Tr(e.hours)),
      (e.months = Tr(e.months)),
      (e.years = Tr(e.years)),
      this
    )
  }
  function bl(e, t, r, n) {
    var a = Qt(t, r)
    return (
      (e._milliseconds += n * a._milliseconds),
      (e._days += n * a._days),
      (e._months += n * a._months),
      e._bubble()
    )
  }
  function av(e, t) {
    return bl(this, e, t, 1)
  }
  function iv(e, t) {
    return bl(this, e, t, -1)
  }
  function Ll(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e)
  }
  function sv() {
    var e = this._milliseconds,
      t = this._days,
      r = this._months,
      n = this._data,
      a,
      i,
      s,
      o,
      l
    return (
      (e >= 0 && t >= 0 && r >= 0) ||
        (e <= 0 && t <= 0 && r <= 0) ||
        ((e += Ll(v0(r) + t) * 864e5), (t = 0), (r = 0)),
      (n.milliseconds = e % 1e3),
      (a = Vt(e / 1e3)),
      (n.seconds = a % 60),
      (i = Vt(a / 60)),
      (n.minutes = i % 60),
      (s = Vt(i / 60)),
      (n.hours = s % 24),
      (t += Vt(s / 24)),
      (l = Vt(Bl(t))),
      (r += l),
      (t -= Ll(v0(l))),
      (o = Vt(r / 12)),
      (r %= 12),
      (n.days = t),
      (n.months = r),
      (n.years = o),
      this
    )
  }
  function Bl(e) {
    return (e * 4800) / 146097
  }
  function v0(e) {
    return (e * 146097) / 4800
  }
  function ov(e) {
    if (!this.isValid()) return NaN
    var t,
      r,
      n = this._milliseconds
    if (((e = jt(e)), e === 'month' || e === 'quarter' || e === 'year'))
      switch (((t = this._days + n / 864e5), (r = this._months + Bl(t)), e)) {
        case 'month':
          return r
        case 'quarter':
          return r / 3
        case 'year':
          return r / 12
      }
    else
      switch (((t = this._days + Math.round(v0(this._months))), e)) {
        case 'week':
          return t / 7 + n / 6048e5
        case 'day':
          return t + n / 864e5
        case 'hour':
          return t * 24 + n / 36e5
        case 'minute':
          return t * 1440 + n / 6e4
        case 'second':
          return t * 86400 + n / 1e3
        case 'millisecond':
          return Math.floor(t * 864e5) + n
        default:
          throw new Error('Unknown unit ' + e)
      }
  }
  function fv() {
    return this.isValid()
      ? this._milliseconds +
          this._days * 864e5 +
          (this._months % 12) * 2592e6 +
          we(this._months / 12) * 31536e6
      : NaN
  }
  function Er(e) {
    return function () {
      return this.as(e)
    }
  }
  var lv = Er('ms'),
    cv = Er('s'),
    uv = Er('m'),
    hv = Er('h'),
    dv = Er('d'),
    pv = Er('w'),
    xv = Er('M'),
    mv = Er('Q'),
    _v = Er('y')
  function gv() {
    return Qt(this)
  }
  function vv(e) {
    return (e = jt(e)), this.isValid() ? this[e + 's']() : NaN
  }
  function ln(e) {
    return function () {
      return this.isValid() ? this._data[e] : NaN
    }
  }
  var wv = ln('milliseconds'),
    Tv = ln('seconds'),
    Ev = ln('minutes'),
    Sv = ln('hours'),
    yv = ln('days'),
    Av = ln('months'),
    Ov = ln('years')
  function Fv() {
    return Vt(this.days() / 7)
  }
  var Sr = Math.round,
    Mn = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 }
  function Cv(e, t, r, n, a) {
    return a.relativeTime(t || 1, !!r, e, n)
  }
  function Dv(e, t, r, n) {
    var a = Qt(e).abs(),
      i = Sr(a.as('s')),
      s = Sr(a.as('m')),
      o = Sr(a.as('h')),
      l = Sr(a.as('d')),
      f = Sr(a.as('M')),
      c = Sr(a.as('w')),
      u = Sr(a.as('y')),
      h =
        (i <= r.ss && ['s', i]) ||
        (i < r.s && ['ss', i]) ||
        (s <= 1 && ['m']) ||
        (s < r.m && ['mm', s]) ||
        (o <= 1 && ['h']) ||
        (o < r.h && ['hh', o]) ||
        (l <= 1 && ['d']) ||
        (l < r.d && ['dd', l])
    return (
      r.w != null && (h = h || (c <= 1 && ['w']) || (c < r.w && ['ww', c])),
      (h = h || (f <= 1 && ['M']) || (f < r.M && ['MM', f]) || (u <= 1 && ['y']) || ['yy', u]),
      (h[2] = t),
      (h[3] = +e > 0),
      (h[4] = n),
      Cv.apply(null, h)
    )
  }
  function kv(e) {
    return e === void 0 ? Sr : typeof e == 'function' ? ((Sr = e), !0) : !1
  }
  function Rv(e, t) {
    return Mn[e] === void 0
      ? !1
      : t === void 0
      ? Mn[e]
      : ((Mn[e] = t), e === 's' && (Mn.ss = t - 1), !0)
  }
  function Nv(e, t) {
    if (!this.isValid()) return this.localeData().invalidDate()
    var r = !1,
      n = Mn,
      a,
      i
    return (
      typeof e == 'object' && ((t = e), (e = !1)),
      typeof e == 'boolean' && (r = e),
      typeof t == 'object' &&
        ((n = Object.assign({}, Mn, t)), t.s != null && t.ss == null && (n.ss = t.s - 1)),
      (a = this.localeData()),
      (i = Dv(this, !r, n, a)),
      r && (i = a.pastFuture(+this, i)),
      a.postformat(i)
    )
  }
  var w0 = Math.abs
  function bn(e) {
    return (e > 0) - (e < 0) || +e
  }
  function Pi() {
    if (!this.isValid()) return this.localeData().invalidDate()
    var e = w0(this._milliseconds) / 1e3,
      t = w0(this._days),
      r = w0(this._months),
      n,
      a,
      i,
      s,
      o = this.asSeconds(),
      l,
      f,
      c,
      u
    return o
      ? ((n = Vt(e / 60)),
        (a = Vt(n / 60)),
        (e %= 60),
        (n %= 60),
        (i = Vt(r / 12)),
        (r %= 12),
        (s = e ? e.toFixed(3).replace(/\.?0+$/, '') : ''),
        (l = o < 0 ? '-' : ''),
        (f = bn(this._months) !== bn(o) ? '-' : ''),
        (c = bn(this._days) !== bn(o) ? '-' : ''),
        (u = bn(this._milliseconds) !== bn(o) ? '-' : ''),
        l +
          'P' +
          (i ? f + i + 'Y' : '') +
          (r ? f + r + 'M' : '') +
          (t ? c + t + 'D' : '') +
          (a || n || e ? 'T' : '') +
          (a ? u + a + 'H' : '') +
          (n ? u + n + 'M' : '') +
          (e ? u + s + 'S' : ''))
      : 'P0D'
  }
  var Ee = Oi.prototype
  ;(Ee.isValid = yg),
    (Ee.abs = nv),
    (Ee.add = av),
    (Ee.subtract = iv),
    (Ee.as = ov),
    (Ee.asMilliseconds = lv),
    (Ee.asSeconds = cv),
    (Ee.asMinutes = uv),
    (Ee.asHours = hv),
    (Ee.asDays = dv),
    (Ee.asWeeks = pv),
    (Ee.asMonths = xv),
    (Ee.asQuarters = mv),
    (Ee.asYears = _v),
    (Ee.valueOf = fv),
    (Ee._bubble = sv),
    (Ee.clone = gv),
    (Ee.get = vv),
    (Ee.milliseconds = wv),
    (Ee.seconds = Tv),
    (Ee.minutes = Ev),
    (Ee.hours = Sv),
    (Ee.days = yv),
    (Ee.weeks = Fv),
    (Ee.months = Av),
    (Ee.years = Ov),
    (Ee.humanize = Nv),
    (Ee.toISOString = Pi),
    (Ee.toString = Pi),
    (Ee.toJSON = Pi),
    (Ee.locale = Al),
    (Ee.localeData = Fl),
    (Ee.toIsoString = $t(
      'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
      Pi
    )),
    (Ee.lang = Ol),
    pe('X', 0, 0, 'unix'),
    pe('x', 0, 0, 'valueOf'),
    oe('x', vi),
    oe('X', e_),
    Be('X', function (e, t, r) {
      r._d = new Date(parseFloat(e) * 1e3)
    }),
    Be('x', function (e, t, r) {
      r._d = new Date(we(e))
    }) //! moment.js
  ;(q.version = '2.29.4'),
    Pm($e),
    (q.fn = K),
    (q.min = wg),
    (q.max = Tg),
    (q.now = Eg),
    (q.utc = sr),
    (q.unix = q2),
    (q.months = Z2),
    (q.isDate = da),
    (q.locale = $r),
    (q.invalid = ui),
    (q.duration = Qt),
    (q.isMoment = Jt),
    (q.weekdays = ev),
    (q.parseZone = J2),
    (q.localeData = wr),
    (q.isDuration = Fi),
    (q.monthsShort = Q2),
    (q.weekdaysMin = rv),
    (q.defineLocale = o0),
    (q.updateLocale = J_),
    (q.locales = Z_),
    (q.weekdaysShort = tv),
    (q.normalizeUnits = jt),
    (q.relativeTimeRounding = kv),
    (q.relativeTimeThreshold = Rv),
    (q.calendarFormat = zg),
    (q.prototype = K),
    (q.HTML5_FMT = {
      DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
      DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
      DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
      DATE: 'YYYY-MM-DD',
      TIME: 'HH:mm',
      TIME_SECONDS: 'HH:mm:ss',
      TIME_MS: 'HH:mm:ss.SSS',
      WEEK: 'GGGG-[W]WW',
      MONTH: 'YYYY-MM'
    })
  /*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */ var Ii = {}
  Ii.version = '0.18.5'
  var Ul = 1252,
    Pv = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4],
    Wl = function (e) {
      Pv.indexOf(e) != -1 && (Ul = e)
    }
  function Iv() {
    Wl(1252)
  }
  var ya = function (e) {
    Wl(e)
  }
  function Mv() {
    ya(1200), Iv()
  }
  function bv(e) {
    for (var t = [], r = 0; r < e.length >> 1; ++r)
      t[r] = String.fromCharCode(e.charCodeAt(2 * r + 1) + (e.charCodeAt(2 * r) << 8))
    return t.join('')
  }
  var Mi = function (t) {
      return String.fromCharCode(t)
    },
    Hl = function (t) {
      return String.fromCharCode(t)
    },
    cn,
    Vr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
  function Aa(e) {
    for (var t = '', r = 0, n = 0, a = 0, i = 0, s = 0, o = 0, l = 0, f = 0; f < e.length; )
      (r = e.charCodeAt(f++)),
        (i = r >> 2),
        (n = e.charCodeAt(f++)),
        (s = ((r & 3) << 4) | (n >> 4)),
        (a = e.charCodeAt(f++)),
        (o = ((n & 15) << 2) | (a >> 6)),
        (l = a & 63),
        isNaN(n) ? (o = l = 64) : isNaN(a) && (l = 64),
        (t += Vr.charAt(i) + Vr.charAt(s) + Vr.charAt(o) + Vr.charAt(l))
    return t
  }
  function yr(e) {
    var t = '',
      r = 0,
      n = 0,
      a = 0,
      i = 0,
      s = 0,
      o = 0,
      l = 0
    e = e.replace(/[^\w\+\/\=]/g, '')
    for (var f = 0; f < e.length; )
      (i = Vr.indexOf(e.charAt(f++))),
        (s = Vr.indexOf(e.charAt(f++))),
        (r = (i << 2) | (s >> 4)),
        (t += String.fromCharCode(r)),
        (o = Vr.indexOf(e.charAt(f++))),
        (n = ((s & 15) << 4) | (o >> 2)),
        o !== 64 && (t += String.fromCharCode(n)),
        (l = Vr.indexOf(e.charAt(f++))),
        (a = ((o & 3) << 6) | l),
        l !== 64 && (t += String.fromCharCode(a))
    return t
  }
  var ke = (function () {
      return (
        typeof Buffer < 'u' &&
        typeof process < 'u' &&
        typeof process.versions < 'u' &&
        !!process.versions.node
      )
    })(),
    Ar = (function () {
      if (typeof Buffer < 'u') {
        var e = !Buffer.from
        if (!e)
          try {
            Buffer.from('foo', 'utf8')
          } catch {
            e = !0
          }
        return e
          ? function (t, r) {
              return r ? new Buffer(t, r) : new Buffer(t)
            }
          : Buffer.from.bind(Buffer)
      }
      return function () {}
    })()
  function un(e) {
    return ke
      ? Buffer.alloc
        ? Buffer.alloc(e)
        : new Buffer(e)
      : typeof Uint8Array < 'u'
      ? new Uint8Array(e)
      : new Array(e)
  }
  function Yl(e) {
    return ke
      ? Buffer.allocUnsafe
        ? Buffer.allocUnsafe(e)
        : new Buffer(e)
      : typeof Uint8Array < 'u'
      ? new Uint8Array(e)
      : new Array(e)
  }
  var er = function (t) {
    return ke
      ? Ar(t, 'binary')
      : t.split('').map(function (r) {
          return r.charCodeAt(0) & 255
        })
  }
  function bi(e) {
    if (typeof ArrayBuffer > 'u') return er(e)
    for (var t = new ArrayBuffer(e.length), r = new Uint8Array(t), n = 0; n != e.length; ++n)
      r[n] = e.charCodeAt(n) & 255
    return t
  }
  function Oa(e) {
    if (Array.isArray(e))
      return e
        .map(function (n) {
          return String.fromCharCode(n)
        })
        .join('')
    for (var t = [], r = 0; r < e.length; ++r) t[r] = String.fromCharCode(e[r])
    return t.join('')
  }
  function Lv(e) {
    if (typeof Uint8Array > 'u') throw new Error('Unsupported')
    return new Uint8Array(e)
  }
  var ht = ke
    ? function (e) {
        return Buffer.concat(
          e.map(function (t) {
            return Buffer.isBuffer(t) ? t : Ar(t)
          })
        )
      }
    : function (e) {
        if (typeof Uint8Array < 'u') {
          var t = 0,
            r = 0
          for (t = 0; t < e.length; ++t) r += e[t].length
          var n = new Uint8Array(r),
            a = 0
          for (t = 0, r = 0; t < e.length; r += a, ++t)
            if (((a = e[t].length), e[t] instanceof Uint8Array)) n.set(e[t], r)
            else {
              if (typeof e[t] == 'string') throw 'wtf'
              n.set(new Uint8Array(e[t]), r)
            }
          return n
        }
        return [].concat.apply(
          [],
          e.map(function (i) {
            return Array.isArray(i) ? i : [].slice.call(i)
          })
        )
      }
  function Bv(e) {
    for (var t = [], r = 0, n = e.length + 250, a = un(e.length + 255), i = 0; i < e.length; ++i) {
      var s = e.charCodeAt(i)
      if (s < 128) a[r++] = s
      else if (s < 2048) (a[r++] = 192 | ((s >> 6) & 31)), (a[r++] = 128 | (s & 63))
      else if (s >= 55296 && s < 57344) {
        s = (s & 1023) + 64
        var o = e.charCodeAt(++i) & 1023
        ;(a[r++] = 240 | ((s >> 8) & 7)),
          (a[r++] = 128 | ((s >> 2) & 63)),
          (a[r++] = 128 | ((o >> 6) & 15) | ((s & 3) << 4)),
          (a[r++] = 128 | (o & 63))
      } else
        (a[r++] = 224 | ((s >> 12) & 15)),
          (a[r++] = 128 | ((s >> 6) & 63)),
          (a[r++] = 128 | (s & 63))
      r > n && (t.push(a.slice(0, r)), (r = 0), (a = un(65535)), (n = 65530))
    }
    return t.push(a.slice(0, r)), ht(t)
  }
  var Fa = /\u0000/g,
    Li = /[\u0001-\u0006]/g
  function Ln(e) {
    for (var t = '', r = e.length - 1; r >= 0; ) t += e.charAt(r--)
    return t
  }
  function tr(e, t) {
    var r = '' + e
    return r.length >= t ? r : Ze('0', t - r.length) + r
  }
  function T0(e, t) {
    var r = '' + e
    return r.length >= t ? r : Ze(' ', t - r.length) + r
  }
  function Bi(e, t) {
    var r = '' + e
    return r.length >= t ? r : r + Ze(' ', t - r.length)
  }
  function Uv(e, t) {
    var r = '' + Math.round(e)
    return r.length >= t ? r : Ze('0', t - r.length) + r
  }
  function Wv(e, t) {
    var r = '' + e
    return r.length >= t ? r : Ze('0', t - r.length) + r
  }
  var $l = Math.pow(2, 32)
  function Bn(e, t) {
    if (e > $l || e < -$l) return Uv(e, t)
    var r = Math.round(e)
    return Wv(r, t)
  }
  function Ui(e, t) {
    return (
      (t = t || 0),
      e.length >= 7 + t &&
        (e.charCodeAt(t) | 32) === 103 &&
        (e.charCodeAt(t + 1) | 32) === 101 &&
        (e.charCodeAt(t + 2) | 32) === 110 &&
        (e.charCodeAt(t + 3) | 32) === 101 &&
        (e.charCodeAt(t + 4) | 32) === 114 &&
        (e.charCodeAt(t + 5) | 32) === 97 &&
        (e.charCodeAt(t + 6) | 32) === 108
    )
  }
  var jl = [
      ['Sun', 'Sunday'],
      ['Mon', 'Monday'],
      ['Tue', 'Tuesday'],
      ['Wed', 'Wednesday'],
      ['Thu', 'Thursday'],
      ['Fri', 'Friday'],
      ['Sat', 'Saturday']
    ],
    E0 = [
      ['J', 'Jan', 'January'],
      ['F', 'Feb', 'February'],
      ['M', 'Mar', 'March'],
      ['A', 'Apr', 'April'],
      ['M', 'May', 'May'],
      ['J', 'Jun', 'June'],
      ['J', 'Jul', 'July'],
      ['A', 'Aug', 'August'],
      ['S', 'Sep', 'September'],
      ['O', 'Oct', 'October'],
      ['N', 'Nov', 'November'],
      ['D', 'Dec', 'December']
    ]
  function Hv(e) {
    return (
      e || (e = {}),
      (e[0] = 'General'),
      (e[1] = '0'),
      (e[2] = '0.00'),
      (e[3] = '#,##0'),
      (e[4] = '#,##0.00'),
      (e[9] = '0%'),
      (e[10] = '0.00%'),
      (e[11] = '0.00E+00'),
      (e[12] = '# ?/?'),
      (e[13] = '# ??/??'),
      (e[14] = 'm/d/yy'),
      (e[15] = 'd-mmm-yy'),
      (e[16] = 'd-mmm'),
      (e[17] = 'mmm-yy'),
      (e[18] = 'h:mm AM/PM'),
      (e[19] = 'h:mm:ss AM/PM'),
      (e[20] = 'h:mm'),
      (e[21] = 'h:mm:ss'),
      (e[22] = 'm/d/yy h:mm'),
      (e[37] = '#,##0 ;(#,##0)'),
      (e[38] = '#,##0 ;[Red](#,##0)'),
      (e[39] = '#,##0.00;(#,##0.00)'),
      (e[40] = '#,##0.00;[Red](#,##0.00)'),
      (e[45] = 'mm:ss'),
      (e[46] = '[h]:mm:ss'),
      (e[47] = 'mmss.0'),
      (e[48] = '##0.0E+0'),
      (e[49] = '@'),
      (e[56] = '"\u4E0A\u5348/\u4E0B\u5348 "hh"\u6642"mm"\u5206"ss"\u79D2 "'),
      e
    )
  }
  var ze = {
      0: 'General',
      1: '0',
      2: '0.00',
      3: '#,##0',
      4: '#,##0.00',
      9: '0%',
      10: '0.00%',
      11: '0.00E+00',
      12: '# ?/?',
      13: '# ??/??',
      14: 'm/d/yy',
      15: 'd-mmm-yy',
      16: 'd-mmm',
      17: 'mmm-yy',
      18: 'h:mm AM/PM',
      19: 'h:mm:ss AM/PM',
      20: 'h:mm',
      21: 'h:mm:ss',
      22: 'm/d/yy h:mm',
      37: '#,##0 ;(#,##0)',
      38: '#,##0 ;[Red](#,##0)',
      39: '#,##0.00;(#,##0.00)',
      40: '#,##0.00;[Red](#,##0.00)',
      45: 'mm:ss',
      46: '[h]:mm:ss',
      47: 'mmss.0',
      48: '##0.0E+0',
      49: '@',
      56: '"\u4E0A\u5348/\u4E0B\u5348 "hh"\u6642"mm"\u5206"ss"\u79D2 "'
    },
    Vl = {
      5: 37,
      6: 38,
      7: 39,
      8: 40,
      23: 0,
      24: 0,
      25: 0,
      26: 0,
      27: 14,
      28: 14,
      29: 14,
      30: 14,
      31: 14,
      50: 14,
      51: 14,
      52: 14,
      53: 14,
      54: 14,
      55: 14,
      56: 14,
      57: 14,
      58: 14,
      59: 1,
      60: 2,
      61: 3,
      62: 4,
      67: 9,
      68: 10,
      69: 12,
      70: 13,
      71: 14,
      72: 14,
      73: 15,
      74: 16,
      75: 17,
      76: 20,
      77: 21,
      78: 22,
      79: 45,
      80: 46,
      81: 47,
      82: 0
    },
    Yv = {
      5: '"$"#,##0_);\\("$"#,##0\\)',
      63: '"$"#,##0_);\\("$"#,##0\\)',
      6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
      64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
      7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
      65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
      8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
      66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
      41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',
      42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',
      43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',
      44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'
    }
  function Wi(e, t, r) {
    for (
      var n = e < 0 ? -1 : 1,
        a = e * n,
        i = 0,
        s = 1,
        o = 0,
        l = 1,
        f = 0,
        c = 0,
        u = Math.floor(a);
      f < t && ((u = Math.floor(a)), (o = u * s + i), (c = u * f + l), !(a - u < 5e-8));

    )
      (a = 1 / (a - u)), (i = s), (s = o), (l = f), (f = c)
    if ((c > t && (f > t ? ((c = l), (o = i)) : ((c = f), (o = s))), !r)) return [0, n * o, c]
    var h = Math.floor((n * o) / c)
    return [h, n * o - h * c, c]
  }
  function Ca(e, t, r) {
    if (e > 2958465 || e < 0) return null
    var n = e | 0,
      a = Math.floor(86400 * (e - n)),
      i = 0,
      s = [],
      o = { D: n, T: a, u: 86400 * (e - n) - a, y: 0, m: 0, d: 0, H: 0, M: 0, S: 0, q: 0 }
    if (
      (Math.abs(o.u) < 1e-6 && (o.u = 0),
      t && t.date1904 && (n += 1462),
      o.u > 0.9999 && ((o.u = 0), ++a == 86400 && ((o.T = a = 0), ++n, ++o.D)),
      n === 60)
    )
      (s = r ? [1317, 10, 29] : [1900, 2, 29]), (i = 3)
    else if (n === 0) (s = r ? [1317, 8, 29] : [1900, 1, 0]), (i = 6)
    else {
      n > 60 && --n
      var l = new Date(1900, 0, 1)
      l.setDate(l.getDate() + n - 1),
        (s = [l.getFullYear(), l.getMonth() + 1, l.getDate()]),
        (i = l.getDay()),
        n < 60 && (i = (i + 6) % 7),
        r && (i = Kv(l, s))
    }
    return (
      (o.y = s[0]),
      (o.m = s[1]),
      (o.d = s[2]),
      (o.S = a % 60),
      (a = Math.floor(a / 60)),
      (o.M = a % 60),
      (a = Math.floor(a / 60)),
      (o.H = a),
      (o.q = i),
      o
    )
  }
  var Gl = new Date(1899, 11, 31, 0, 0, 0),
    $v = Gl.getTime(),
    jv = new Date(1900, 2, 1, 0, 0, 0)
  function zl(e, t) {
    var r = e.getTime()
    return (
      t ? (r -= 1461 * 24 * 60 * 60 * 1e3) : e >= jv && (r += 24 * 60 * 60 * 1e3),
      (r - ($v + (e.getTimezoneOffset() - Gl.getTimezoneOffset()) * 6e4)) / (24 * 60 * 60 * 1e3)
    )
  }
  function S0(e) {
    return e.indexOf('.') == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, '$1')
  }
  function Vv(e) {
    return e.indexOf('E') == -1
      ? e
      : e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, '$1E').replace(/(E[+-])(\d)$/, '$10$2')
  }
  function Gv(e) {
    var t = e < 0 ? 12 : 11,
      r = S0(e.toFixed(12))
    return r.length <= t || ((r = e.toPrecision(10)), r.length <= t) ? r : e.toExponential(5)
  }
  function zv(e) {
    var t = S0(e.toFixed(11))
    return t.length > (e < 0 ? 12 : 11) || t === '0' || t === '-0' ? e.toPrecision(6) : t
  }
  function Xv(e) {
    var t = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E),
      r
    return (
      t >= -4 && t <= -1
        ? (r = e.toPrecision(10 + t))
        : Math.abs(t) <= 9
        ? (r = Gv(e))
        : t === 10
        ? (r = e.toFixed(10).substr(0, 12))
        : (r = zv(e)),
      S0(Vv(r.toUpperCase()))
    )
  }
  function y0(e, t) {
    switch (typeof e) {
      case 'string':
        return e
      case 'boolean':
        return e ? 'TRUE' : 'FALSE'
      case 'number':
        return (e | 0) === e ? e.toString(10) : Xv(e)
      case 'undefined':
        return ''
      case 'object':
        if (e == null) return ''
        if (e instanceof Date) return Fr(14, zl(e, t && t.date1904), t)
    }
    throw new Error('unsupported value in General format: ' + e)
  }
  function Kv(e, t) {
    t[0] -= 581
    var r = e.getDay()
    return e < 60 && (r = (r + 6) % 7), r
  }
  function qv(e, t, r, n) {
    var a = '',
      i = 0,
      s = 0,
      o = r.y,
      l,
      f = 0
    switch (e) {
      case 98:
        o = r.y + 543
      case 121:
        switch (t.length) {
          case 1:
          case 2:
            ;(l = o % 100), (f = 2)
            break
          default:
            ;(l = o % 1e4), (f = 4)
            break
        }
        break
      case 109:
        switch (t.length) {
          case 1:
          case 2:
            ;(l = r.m), (f = t.length)
            break
          case 3:
            return E0[r.m - 1][1]
          case 5:
            return E0[r.m - 1][0]
          default:
            return E0[r.m - 1][2]
        }
        break
      case 100:
        switch (t.length) {
          case 1:
          case 2:
            ;(l = r.d), (f = t.length)
            break
          case 3:
            return jl[r.q][0]
          default:
            return jl[r.q][1]
        }
        break
      case 104:
        switch (t.length) {
          case 1:
          case 2:
            ;(l = 1 + ((r.H + 11) % 12)), (f = t.length)
            break
          default:
            throw 'bad hour format: ' + t
        }
        break
      case 72:
        switch (t.length) {
          case 1:
          case 2:
            ;(l = r.H), (f = t.length)
            break
          default:
            throw 'bad hour format: ' + t
        }
        break
      case 77:
        switch (t.length) {
          case 1:
          case 2:
            ;(l = r.M), (f = t.length)
            break
          default:
            throw 'bad minute format: ' + t
        }
        break
      case 115:
        if (t != 's' && t != 'ss' && t != '.0' && t != '.00' && t != '.000')
          throw 'bad second format: ' + t
        return r.u === 0 && (t == 's' || t == 'ss')
          ? tr(r.S, t.length)
          : (n >= 2 ? (s = n === 3 ? 1e3 : 100) : (s = n === 1 ? 10 : 1),
            (i = Math.round(s * (r.S + r.u))),
            i >= 60 * s && (i = 0),
            t === 's'
              ? i === 0
                ? '0'
                : '' + i / s
              : ((a = tr(i, 2 + n)), t === 'ss' ? a.substr(0, 2) : '.' + a.substr(2, t.length - 1)))
      case 90:
        switch (t) {
          case '[h]':
          case '[hh]':
            l = r.D * 24 + r.H
            break
          case '[m]':
          case '[mm]':
            l = (r.D * 24 + r.H) * 60 + r.M
            break
          case '[s]':
          case '[ss]':
            l = ((r.D * 24 + r.H) * 60 + r.M) * 60 + Math.round(r.S + r.u)
            break
          default:
            throw 'bad abstime format: ' + t
        }
        f = t.length === 3 ? 1 : 2
        break
      case 101:
        ;(l = o), (f = 1)
        break
    }
    var c = f > 0 ? tr(l, f) : ''
    return c
  }
  function Gr(e) {
    var t = 3
    if (e.length <= t) return e
    for (var r = e.length % t, n = e.substr(0, r); r != e.length; r += t)
      n += (n.length > 0 ? ',' : '') + e.substr(r, t)
    return n
  }
  var Xl = /%/g
  function Jv(e, t, r) {
    var n = t.replace(Xl, ''),
      a = t.length - n.length
    return Or(e, n, r * Math.pow(10, 2 * a)) + Ze('%', a)
  }
  function Zv(e, t, r) {
    for (var n = t.length - 1; t.charCodeAt(n - 1) === 44; ) --n
    return Or(e, t.substr(0, n), r / Math.pow(10, 3 * (t.length - n)))
  }
  function Kl(e, t) {
    var r,
      n = e.indexOf('E') - e.indexOf('.') - 1
    if (e.match(/^#+0.0E\+0$/)) {
      if (t == 0) return '0.0E+0'
      if (t < 0) return '-' + Kl(e, -t)
      var a = e.indexOf('.')
      a === -1 && (a = e.indexOf('E'))
      var i = Math.floor(Math.log(t) * Math.LOG10E) % a
      if (
        (i < 0 && (i += a),
        (r = (t / Math.pow(10, i)).toPrecision(n + 1 + ((a + i) % a))),
        r.indexOf('e') === -1)
      ) {
        var s = Math.floor(Math.log(t) * Math.LOG10E)
        for (
          r.indexOf('.') === -1
            ? (r = r.charAt(0) + '.' + r.substr(1) + 'E+' + (s - r.length + i))
            : (r += 'E+' + (s - i));
          r.substr(0, 2) === '0.';

        )
          (r = r.charAt(0) + r.substr(2, a) + '.' + r.substr(2 + a)),
            (r = r.replace(/^0+([1-9])/, '$1').replace(/^0+\./, '0.'))
        r = r.replace(/\+-/, '-')
      }
      r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (o, l, f, c) {
        return l + f + c.substr(0, (a + i) % a) + '.' + c.substr(i) + 'E'
      })
    } else r = t.toExponential(n)
    return (
      e.match(/E\+00$/) &&
        r.match(/e[+-]\d$/) &&
        (r = r.substr(0, r.length - 1) + '0' + r.charAt(r.length - 1)),
      e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, 'e')),
      r.replace('e', 'E')
    )
  }
  var ql = /# (\?+)( ?)\/( ?)(\d+)/
  function Qv(e, t, r) {
    var n = parseInt(e[4], 10),
      a = Math.round(t * n),
      i = Math.floor(a / n),
      s = a - i * n,
      o = n
    return (
      r +
      (i === 0 ? '' : '' + i) +
      ' ' +
      (s === 0
        ? Ze(' ', e[1].length + 1 + e[4].length)
        : T0(s, e[1].length) + e[2] + '/' + e[3] + tr(o, e[4].length))
    )
  }
  function ew(e, t, r) {
    return r + (t === 0 ? '' : '' + t) + Ze(' ', e[1].length + 2 + e[4].length)
  }
  var Jl = /^#*0*\.([0#]+)/,
    Zl = /\).*[0#]/,
    Ql = /\(###\) ###\\?-####/
  function Ot(e) {
    for (var t = '', r, n = 0; n != e.length; ++n)
      switch ((r = e.charCodeAt(n))) {
        case 35:
          break
        case 63:
          t += ' '
          break
        case 48:
          t += '0'
          break
        default:
          t += String.fromCharCode(r)
      }
    return t
  }
  function ec(e, t) {
    var r = Math.pow(10, t)
    return '' + Math.round(e * r) / r
  }
  function tc(e, t) {
    var r = e - Math.floor(e),
      n = Math.pow(10, t)
    return t < ('' + Math.round(r * n)).length ? 0 : Math.round(r * n)
  }
  function tw(e, t) {
    return t < ('' + Math.round((e - Math.floor(e)) * Math.pow(10, t))).length ? 1 : 0
  }
  function rw(e) {
    return e < 2147483647 && e > -2147483648
      ? '' + (e >= 0 ? e | 0 : (e - 1) | 0)
      : '' + Math.floor(e)
  }
  function Gt(e, t, r) {
    if (e.charCodeAt(0) === 40 && !t.match(Zl)) {
      var n = t.replace(/\( */, '').replace(/ \)/, '').replace(/\)/, '')
      return r >= 0 ? Gt('n', n, r) : '(' + Gt('n', n, -r) + ')'
    }
    if (t.charCodeAt(t.length - 1) === 44) return Zv(e, t, r)
    if (t.indexOf('%') !== -1) return Jv(e, t, r)
    if (t.indexOf('E') !== -1) return Kl(t, r)
    if (t.charCodeAt(0) === 36) return '$' + Gt(e, t.substr(t.charAt(1) == ' ' ? 2 : 1), r)
    var a,
      i,
      s,
      o,
      l = Math.abs(r),
      f = r < 0 ? '-' : ''
    if (t.match(/^00+$/)) return f + Bn(l, t.length)
    if (t.match(/^[#?]+$/))
      return (
        (a = Bn(r, 0)),
        a === '0' && (a = ''),
        a.length > t.length ? a : Ot(t.substr(0, t.length - a.length)) + a
      )
    if ((i = t.match(ql))) return Qv(i, l, f)
    if (t.match(/^#+0+$/)) return f + Bn(l, t.length - t.indexOf('0'))
    if ((i = t.match(Jl)))
      return (
        (a = ec(r, i[1].length)
          .replace(/^([^\.]+)$/, '$1.' + Ot(i[1]))
          .replace(/\.$/, '.' + Ot(i[1]))
          .replace(/\.(\d*)$/, function (m, d) {
            return '.' + d + Ze('0', Ot(i[1]).length - d.length)
          })),
        t.indexOf('0.') !== -1 ? a : a.replace(/^0\./, '.')
      )
    if (((t = t.replace(/^#+([0.])/, '$1')), (i = t.match(/^(0*)\.(#*)$/))))
      return (
        f +
        ec(l, i[2].length)
          .replace(/\.(\d*[1-9])0*$/, '.$1')
          .replace(/^(-?\d*)$/, '$1.')
          .replace(/^0\./, i[1].length ? '0.' : '.')
      )
    if ((i = t.match(/^#{1,3},##0(\.?)$/))) return f + Gr(Bn(l, 0))
    if ((i = t.match(/^#,##0\.([#0]*0)$/)))
      return r < 0
        ? '-' + Gt(e, t, -r)
        : Gr('' + (Math.floor(r) + tw(r, i[1].length))) + '.' + tr(tc(r, i[1].length), i[1].length)
    if ((i = t.match(/^#,#*,#0/))) return Gt(e, t.replace(/^#,#*,/, ''), r)
    if ((i = t.match(/^([0#]+)(\\?-([0#]+))+$/)))
      return (
        (a = Ln(Gt(e, t.replace(/[\\-]/g, ''), r))),
        (s = 0),
        Ln(
          Ln(t.replace(/\\/g, '')).replace(/[0#]/g, function (m) {
            return s < a.length ? a.charAt(s++) : m === '0' ? '0' : ''
          })
        )
      )
    if (t.match(Ql))
      return (
        (a = Gt(e, '##########', r)),
        '(' + a.substr(0, 3) + ') ' + a.substr(3, 3) + '-' + a.substr(6)
      )
    var c = ''
    if ((i = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
      return (
        (s = Math.min(i[4].length, 7)),
        (o = Wi(l, Math.pow(10, s) - 1, !1)),
        (a = '' + f),
        (c = Or('n', i[1], o[1])),
        c.charAt(c.length - 1) == ' ' && (c = c.substr(0, c.length - 1) + '0'),
        (a += c + i[2] + '/' + i[3]),
        (c = Bi(o[2], s)),
        c.length < i[4].length && (c = Ot(i[4].substr(i[4].length - c.length)) + c),
        (a += c),
        a
      )
    if ((i = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
      return (
        (s = Math.min(Math.max(i[1].length, i[4].length), 7)),
        (o = Wi(l, Math.pow(10, s) - 1, !0)),
        f +
          (o[0] || (o[1] ? '' : '0')) +
          ' ' +
          (o[1]
            ? T0(o[1], s) + i[2] + '/' + i[3] + Bi(o[2], s)
            : Ze(' ', 2 * s + 1 + i[2].length + i[3].length))
      )
    if ((i = t.match(/^[#0?]+$/)))
      return (a = Bn(r, 0)), t.length <= a.length ? a : Ot(t.substr(0, t.length - a.length)) + a
    if ((i = t.match(/^([#0?]+)\.([#0]+)$/))) {
      ;(a = '' + r.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, '$1')),
        (s = a.indexOf('.'))
      var u = t.indexOf('.') - s,
        h = t.length - a.length - u
      return Ot(t.substr(0, u) + a + t.substr(t.length - h))
    }
    if ((i = t.match(/^00,000\.([#0]*0)$/)))
      return (
        (s = tc(r, i[1].length)),
        r < 0
          ? '-' + Gt(e, t, -r)
          : Gr(rw(r))
              .replace(/^\d,\d{3}$/, '0$&')
              .replace(/^\d*$/, function (m) {
                return '00,' + (m.length < 3 ? tr(0, 3 - m.length) : '') + m
              }) +
            '.' +
            tr(s, i[1].length)
      )
    switch (t) {
      case '###,##0.00':
        return Gt(e, '#,##0.00', r)
      case '###,###':
      case '##,###':
      case '#,###':
        var p = Gr(Bn(l, 0))
        return p !== '0' ? f + p : ''
      case '###,###.00':
        return Gt(e, '###,##0.00', r).replace(/^0\./, '.')
      case '#,###.00':
        return Gt(e, '#,##0.00', r).replace(/^0\./, '.')
    }
    throw new Error('unsupported format |' + t + '|')
  }
  function nw(e, t, r) {
    for (var n = t.length - 1; t.charCodeAt(n - 1) === 44; ) --n
    return Or(e, t.substr(0, n), r / Math.pow(10, 3 * (t.length - n)))
  }
  function aw(e, t, r) {
    var n = t.replace(Xl, ''),
      a = t.length - n.length
    return Or(e, n, r * Math.pow(10, 2 * a)) + Ze('%', a)
  }
  function rc(e, t) {
    var r,
      n = e.indexOf('E') - e.indexOf('.') - 1
    if (e.match(/^#+0.0E\+0$/)) {
      if (t == 0) return '0.0E+0'
      if (t < 0) return '-' + rc(e, -t)
      var a = e.indexOf('.')
      a === -1 && (a = e.indexOf('E'))
      var i = Math.floor(Math.log(t) * Math.LOG10E) % a
      if (
        (i < 0 && (i += a),
        (r = (t / Math.pow(10, i)).toPrecision(n + 1 + ((a + i) % a))),
        !r.match(/[Ee]/))
      ) {
        var s = Math.floor(Math.log(t) * Math.LOG10E)
        r.indexOf('.') === -1
          ? (r = r.charAt(0) + '.' + r.substr(1) + 'E+' + (s - r.length + i))
          : (r += 'E+' + (s - i)),
          (r = r.replace(/\+-/, '-'))
      }
      r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (o, l, f, c) {
        return l + f + c.substr(0, (a + i) % a) + '.' + c.substr(i) + 'E'
      })
    } else r = t.toExponential(n)
    return (
      e.match(/E\+00$/) &&
        r.match(/e[+-]\d$/) &&
        (r = r.substr(0, r.length - 1) + '0' + r.charAt(r.length - 1)),
      e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, 'e')),
      r.replace('e', 'E')
    )
  }
  function cr(e, t, r) {
    if (e.charCodeAt(0) === 40 && !t.match(Zl)) {
      var n = t.replace(/\( */, '').replace(/ \)/, '').replace(/\)/, '')
      return r >= 0 ? cr('n', n, r) : '(' + cr('n', n, -r) + ')'
    }
    if (t.charCodeAt(t.length - 1) === 44) return nw(e, t, r)
    if (t.indexOf('%') !== -1) return aw(e, t, r)
    if (t.indexOf('E') !== -1) return rc(t, r)
    if (t.charCodeAt(0) === 36) return '$' + cr(e, t.substr(t.charAt(1) == ' ' ? 2 : 1), r)
    var a,
      i,
      s,
      o,
      l = Math.abs(r),
      f = r < 0 ? '-' : ''
    if (t.match(/^00+$/)) return f + tr(l, t.length)
    if (t.match(/^[#?]+$/))
      return (
        (a = '' + r),
        r === 0 && (a = ''),
        a.length > t.length ? a : Ot(t.substr(0, t.length - a.length)) + a
      )
    if ((i = t.match(ql))) return ew(i, l, f)
    if (t.match(/^#+0+$/)) return f + tr(l, t.length - t.indexOf('0'))
    if ((i = t.match(Jl)))
      return (
        (a = ('' + r).replace(/^([^\.]+)$/, '$1.' + Ot(i[1])).replace(/\.$/, '.' + Ot(i[1]))),
        (a = a.replace(/\.(\d*)$/, function (m, d) {
          return '.' + d + Ze('0', Ot(i[1]).length - d.length)
        })),
        t.indexOf('0.') !== -1 ? a : a.replace(/^0\./, '.')
      )
    if (((t = t.replace(/^#+([0.])/, '$1')), (i = t.match(/^(0*)\.(#*)$/))))
      return (
        f +
        ('' + l)
          .replace(/\.(\d*[1-9])0*$/, '.$1')
          .replace(/^(-?\d*)$/, '$1.')
          .replace(/^0\./, i[1].length ? '0.' : '.')
      )
    if ((i = t.match(/^#{1,3},##0(\.?)$/))) return f + Gr('' + l)
    if ((i = t.match(/^#,##0\.([#0]*0)$/)))
      return r < 0 ? '-' + cr(e, t, -r) : Gr('' + r) + '.' + Ze('0', i[1].length)
    if ((i = t.match(/^#,#*,#0/))) return cr(e, t.replace(/^#,#*,/, ''), r)
    if ((i = t.match(/^([0#]+)(\\?-([0#]+))+$/)))
      return (
        (a = Ln(cr(e, t.replace(/[\\-]/g, ''), r))),
        (s = 0),
        Ln(
          Ln(t.replace(/\\/g, '')).replace(/[0#]/g, function (m) {
            return s < a.length ? a.charAt(s++) : m === '0' ? '0' : ''
          })
        )
      )
    if (t.match(Ql))
      return (
        (a = cr(e, '##########', r)),
        '(' + a.substr(0, 3) + ') ' + a.substr(3, 3) + '-' + a.substr(6)
      )
    var c = ''
    if ((i = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
      return (
        (s = Math.min(i[4].length, 7)),
        (o = Wi(l, Math.pow(10, s) - 1, !1)),
        (a = '' + f),
        (c = Or('n', i[1], o[1])),
        c.charAt(c.length - 1) == ' ' && (c = c.substr(0, c.length - 1) + '0'),
        (a += c + i[2] + '/' + i[3]),
        (c = Bi(o[2], s)),
        c.length < i[4].length && (c = Ot(i[4].substr(i[4].length - c.length)) + c),
        (a += c),
        a
      )
    if ((i = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
      return (
        (s = Math.min(Math.max(i[1].length, i[4].length), 7)),
        (o = Wi(l, Math.pow(10, s) - 1, !0)),
        f +
          (o[0] || (o[1] ? '' : '0')) +
          ' ' +
          (o[1]
            ? T0(o[1], s) + i[2] + '/' + i[3] + Bi(o[2], s)
            : Ze(' ', 2 * s + 1 + i[2].length + i[3].length))
      )
    if ((i = t.match(/^[#0?]+$/)))
      return (a = '' + r), t.length <= a.length ? a : Ot(t.substr(0, t.length - a.length)) + a
    if ((i = t.match(/^([#0]+)\.([#0]+)$/))) {
      ;(a = '' + r.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, '$1')),
        (s = a.indexOf('.'))
      var u = t.indexOf('.') - s,
        h = t.length - a.length - u
      return Ot(t.substr(0, u) + a + t.substr(t.length - h))
    }
    if ((i = t.match(/^00,000\.([#0]*0)$/)))
      return r < 0
        ? '-' + cr(e, t, -r)
        : Gr('' + r)
            .replace(/^\d,\d{3}$/, '0$&')
            .replace(/^\d*$/, function (m) {
              return '00,' + (m.length < 3 ? tr(0, 3 - m.length) : '') + m
            }) +
            '.' +
            tr(0, i[1].length)
    switch (t) {
      case '###,###':
      case '##,###':
      case '#,###':
        var p = Gr('' + l)
        return p !== '0' ? f + p : ''
      default:
        if (t.match(/\.[0#?]*$/))
          return cr(e, t.slice(0, t.lastIndexOf('.')), r) + Ot(t.slice(t.lastIndexOf('.')))
    }
    throw new Error('unsupported format |' + t + '|')
  }
  function Or(e, t, r) {
    return (r | 0) === r ? cr(e, t, r) : Gt(e, t, r)
  }
  function iw(e) {
    for (var t = [], r = !1, n = 0, a = 0; n < e.length; ++n)
      switch (e.charCodeAt(n)) {
        case 34:
          r = !r
          break
        case 95:
        case 42:
        case 92:
          ++n
          break
        case 59:
          ;(t[t.length] = e.substr(a, n - a)), (a = n + 1)
      }
    if (((t[t.length] = e.substr(a)), r === !0))
      throw new Error('Format |' + e + '| unterminated string ')
    return t
  }
  var nc = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/
  function A0(e) {
    for (var t = 0, r = '', n = ''; t < e.length; )
      switch ((r = e.charAt(t))) {
        case 'G':
          Ui(e, t) && (t += 6), t++
          break
        case '"':
          for (; e.charCodeAt(++t) !== 34 && t < e.length; );
          ++t
          break
        case '\\':
          t += 2
          break
        case '_':
          t += 2
          break
        case '@':
          ++t
          break
        case 'B':
        case 'b':
          if (e.charAt(t + 1) === '1' || e.charAt(t + 1) === '2') return !0
        case 'M':
        case 'D':
        case 'Y':
        case 'H':
        case 'S':
        case 'E':
        case 'm':
        case 'd':
        case 'y':
        case 'h':
        case 's':
        case 'e':
        case 'g':
          return !0
        case 'A':
        case 'a':
        case '\u4E0A':
          if (
            e.substr(t, 3).toUpperCase() === 'A/P' ||
            e.substr(t, 5).toUpperCase() === 'AM/PM' ||
            e.substr(t, 5).toUpperCase() === '\u4E0A\u5348/\u4E0B\u5348'
          )
            return !0
          ++t
          break
        case '[':
          for (n = r; e.charAt(t++) !== ']' && t < e.length; ) n += e.charAt(t)
          if (n.match(nc)) return !0
          break
        case '.':
        case '0':
        case '#':
          for (
            ;
            t < e.length &&
            ('0#?.,E+-%'.indexOf((r = e.charAt(++t))) > -1 ||
              (r == '\\' && e.charAt(t + 1) == '-' && '0#'.indexOf(e.charAt(t + 2)) > -1));

          );
          break
        case '?':
          for (; e.charAt(++t) === r; );
          break
        case '*':
          ++t, (e.charAt(t) == ' ' || e.charAt(t) == '*') && ++t
          break
        case '(':
        case ')':
          ++t
          break
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          for (; t < e.length && '0123456789'.indexOf(e.charAt(++t)) > -1; );
          break
        case ' ':
          ++t
          break
        default:
          ++t
          break
      }
    return !1
  }
  function sw(e, t, r, n) {
    for (var a = [], i = '', s = 0, o = '', l = 't', f, c, u, h = 'H'; s < e.length; )
      switch ((o = e.charAt(s))) {
        case 'G':
          if (!Ui(e, s)) throw new Error('unrecognized character ' + o + ' in ' + e)
          ;(a[a.length] = { t: 'G', v: 'General' }), (s += 7)
          break
        case '"':
          for (i = ''; (u = e.charCodeAt(++s)) !== 34 && s < e.length; ) i += String.fromCharCode(u)
          ;(a[a.length] = { t: 't', v: i }), ++s
          break
        case '\\':
          var p = e.charAt(++s),
            m = p === '(' || p === ')' ? p : 't'
          ;(a[a.length] = { t: m, v: p }), ++s
          break
        case '_':
          ;(a[a.length] = { t: 't', v: ' ' }), (s += 2)
          break
        case '@':
          ;(a[a.length] = { t: 'T', v: t }), ++s
          break
        case 'B':
        case 'b':
          if (e.charAt(s + 1) === '1' || e.charAt(s + 1) === '2') {
            if (f == null && ((f = Ca(t, r, e.charAt(s + 1) === '2')), f == null)) return ''
            ;(a[a.length] = { t: 'X', v: e.substr(s, 2) }), (l = o), (s += 2)
            break
          }
        case 'M':
        case 'D':
        case 'Y':
        case 'H':
        case 'S':
        case 'E':
          o = o.toLowerCase()
        case 'm':
        case 'd':
        case 'y':
        case 'h':
        case 's':
        case 'e':
        case 'g':
          if (t < 0 || (f == null && ((f = Ca(t, r)), f == null))) return ''
          for (i = o; ++s < e.length && e.charAt(s).toLowerCase() === o; ) i += o
          o === 'm' && l.toLowerCase() === 'h' && (o = 'M'),
            o === 'h' && (o = h),
            (a[a.length] = { t: o, v: i }),
            (l = o)
          break
        case 'A':
        case 'a':
        case '\u4E0A':
          var d = { t: o, v: o }
          if (
            (f == null && (f = Ca(t, r)),
            e.substr(s, 3).toUpperCase() === 'A/P'
              ? (f != null && (d.v = f.H >= 12 ? 'P' : 'A'), (d.t = 'T'), (h = 'h'), (s += 3))
              : e.substr(s, 5).toUpperCase() === 'AM/PM'
              ? (f != null && (d.v = f.H >= 12 ? 'PM' : 'AM'), (d.t = 'T'), (s += 5), (h = 'h'))
              : e.substr(s, 5).toUpperCase() === '\u4E0A\u5348/\u4E0B\u5348'
              ? (f != null && (d.v = f.H >= 12 ? '\u4E0B\u5348' : '\u4E0A\u5348'),
                (d.t = 'T'),
                (s += 5),
                (h = 'h'))
              : ((d.t = 't'), ++s),
            f == null && d.t === 'T')
          )
            return ''
          ;(a[a.length] = d), (l = o)
          break
        case '[':
          for (i = o; e.charAt(s++) !== ']' && s < e.length; ) i += e.charAt(s)
          if (i.slice(-1) !== ']') throw 'unterminated "[" block: |' + i + '|'
          if (i.match(nc)) {
            if (f == null && ((f = Ca(t, r)), f == null)) return ''
            ;(a[a.length] = { t: 'Z', v: i.toLowerCase() }), (l = i.charAt(1))
          } else
            i.indexOf('$') > -1 &&
              ((i = (i.match(/\$([^-\[\]]*)/) || [])[1] || '$'),
              A0(e) || (a[a.length] = { t: 't', v: i }))
          break
        case '.':
          if (f != null) {
            for (i = o; ++s < e.length && (o = e.charAt(s)) === '0'; ) i += o
            a[a.length] = { t: 's', v: i }
            break
          }
        case '0':
        case '#':
          for (i = o; ++s < e.length && '0#?.,E+-%'.indexOf((o = e.charAt(s))) > -1; ) i += o
          a[a.length] = { t: 'n', v: i }
          break
        case '?':
          for (i = o; e.charAt(++s) === o; ) i += o
          ;(a[a.length] = { t: o, v: i }), (l = o)
          break
        case '*':
          ++s, (e.charAt(s) == ' ' || e.charAt(s) == '*') && ++s
          break
        case '(':
        case ')':
          ;(a[a.length] = { t: n === 1 ? 't' : o, v: o }), ++s
          break
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          for (i = o; s < e.length && '0123456789'.indexOf(e.charAt(++s)) > -1; ) i += e.charAt(s)
          a[a.length] = { t: 'D', v: i }
          break
        case ' ':
          ;(a[a.length] = { t: o, v: o }), ++s
          break
        case '$':
          ;(a[a.length] = { t: 't', v: '$' }), ++s
          break
        default:
          if (",$-+/():!^&'~{}<>=\u20ACacfijklopqrtuvwxzP".indexOf(o) === -1)
            throw new Error('unrecognized character ' + o + ' in ' + e)
          ;(a[a.length] = { t: 't', v: o }), ++s
          break
      }
    var v = 0,
      A = 0,
      F
    for (s = a.length - 1, l = 't'; s >= 0; --s)
      switch (a[s].t) {
        case 'h':
        case 'H':
          ;(a[s].t = h), (l = 'h'), v < 1 && (v = 1)
          break
        case 's':
          ;(F = a[s].v.match(/\.0+$/)) && (A = Math.max(A, F[0].length - 1)), v < 3 && (v = 3)
        case 'd':
        case 'y':
        case 'M':
        case 'e':
          l = a[s].t
          break
        case 'm':
          l === 's' && ((a[s].t = 'M'), v < 2 && (v = 2))
          break
        case 'X':
          break
        case 'Z':
          v < 1 && a[s].v.match(/[Hh]/) && (v = 1),
            v < 2 && a[s].v.match(/[Mm]/) && (v = 2),
            v < 3 && a[s].v.match(/[Ss]/) && (v = 3)
      }
    switch (v) {
      case 0:
        break
      case 1:
        f.u >= 0.5 && ((f.u = 0), ++f.S),
          f.S >= 60 && ((f.S = 0), ++f.M),
          f.M >= 60 && ((f.M = 0), ++f.H)
        break
      case 2:
        f.u >= 0.5 && ((f.u = 0), ++f.S), f.S >= 60 && ((f.S = 0), ++f.M)
        break
    }
    var C = '',
      L
    for (s = 0; s < a.length; ++s)
      switch (a[s].t) {
        case 't':
        case 'T':
        case ' ':
        case 'D':
          break
        case 'X':
          ;(a[s].v = ''), (a[s].t = ';')
          break
        case 'd':
        case 'm':
        case 'y':
        case 'h':
        case 'H':
        case 'M':
        case 's':
        case 'e':
        case 'b':
        case 'Z':
          ;(a[s].v = qv(a[s].t.charCodeAt(0), a[s].v, f, A)), (a[s].t = 't')
          break
        case 'n':
        case '?':
          for (
            L = s + 1;
            a[L] != null &&
            ((o = a[L].t) === '?' ||
              o === 'D' ||
              ((o === ' ' || o === 't') &&
                a[L + 1] != null &&
                (a[L + 1].t === '?' || (a[L + 1].t === 't' && a[L + 1].v === '/'))) ||
              (a[s].t === '(' && (o === ' ' || o === 'n' || o === ')')) ||
              (o === 't' &&
                (a[L].v === '/' || (a[L].v === ' ' && a[L + 1] != null && a[L + 1].t == '?'))));

          )
            (a[s].v += a[L].v), (a[L] = { v: '', t: ';' }), ++L
          ;(C += a[s].v), (s = L - 1)
          break
        case 'G':
          ;(a[s].t = 't'), (a[s].v = y0(t, r))
          break
      }
    var Z = '',
      ie,
      k
    if (C.length > 0) {
      C.charCodeAt(0) == 40
        ? ((ie = t < 0 && C.charCodeAt(0) === 45 ? -t : t), (k = Or('n', C, ie)))
        : ((ie = t < 0 && n > 1 ? -t : t),
          (k = Or('n', C, ie)),
          ie < 0 && a[0] && a[0].t == 't' && ((k = k.substr(1)), (a[0].v = '-' + a[0].v))),
        (L = k.length - 1)
      var H = a.length
      for (s = 0; s < a.length; ++s)
        if (a[s] != null && a[s].t != 't' && a[s].v.indexOf('.') > -1) {
          H = s
          break
        }
      var b = a.length
      if (H === a.length && k.indexOf('E') === -1) {
        for (s = a.length - 1; s >= 0; --s)
          a[s] == null ||
            'n?'.indexOf(a[s].t) === -1 ||
            (L >= a[s].v.length - 1
              ? ((L -= a[s].v.length), (a[s].v = k.substr(L + 1, a[s].v.length)))
              : L < 0
              ? (a[s].v = '')
              : ((a[s].v = k.substr(0, L + 1)), (L = -1)),
            (a[s].t = 't'),
            (b = s))
        L >= 0 && b < a.length && (a[b].v = k.substr(0, L + 1) + a[b].v)
      } else if (H !== a.length && k.indexOf('E') === -1) {
        for (L = k.indexOf('.') - 1, s = H; s >= 0; --s)
          if (!(a[s] == null || 'n?'.indexOf(a[s].t) === -1)) {
            for (
              c = a[s].v.indexOf('.') > -1 && s === H ? a[s].v.indexOf('.') - 1 : a[s].v.length - 1,
                Z = a[s].v.substr(c + 1);
              c >= 0;
              --c
            )
              L >= 0 &&
                (a[s].v.charAt(c) === '0' || a[s].v.charAt(c) === '#') &&
                (Z = k.charAt(L--) + Z)
            ;(a[s].v = Z), (a[s].t = 't'), (b = s)
          }
        for (
          L >= 0 && b < a.length && (a[b].v = k.substr(0, L + 1) + a[b].v),
            L = k.indexOf('.') + 1,
            s = H;
          s < a.length;
          ++s
        )
          if (!(a[s] == null || ('n?('.indexOf(a[s].t) === -1 && s !== H))) {
            for (
              c = a[s].v.indexOf('.') > -1 && s === H ? a[s].v.indexOf('.') + 1 : 0,
                Z = a[s].v.substr(0, c);
              c < a[s].v.length;
              ++c
            )
              L < k.length && (Z += k.charAt(L++))
            ;(a[s].v = Z), (a[s].t = 't'), (b = s)
          }
      }
    }
    for (s = 0; s < a.length; ++s)
      a[s] != null &&
        'n?'.indexOf(a[s].t) > -1 &&
        ((ie = n > 1 && t < 0 && s > 0 && a[s - 1].v === '-' ? -t : t),
        (a[s].v = Or(a[s].t, a[s].v, ie)),
        (a[s].t = 't'))
    var V = ''
    for (s = 0; s !== a.length; ++s) a[s] != null && (V += a[s].v)
    return V
  }
  var ac = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/
  function ic(e, t) {
    if (t == null) return !1
    var r = parseFloat(t[2])
    switch (t[1]) {
      case '=':
        if (e == r) return !0
        break
      case '>':
        if (e > r) return !0
        break
      case '<':
        if (e < r) return !0
        break
      case '<>':
        if (e != r) return !0
        break
      case '>=':
        if (e >= r) return !0
        break
      case '<=':
        if (e <= r) return !0
        break
    }
    return !1
  }
  function ow(e, t) {
    var r = iw(e),
      n = r.length,
      a = r[n - 1].indexOf('@')
    if ((n < 4 && a > -1 && --n, r.length > 4))
      throw new Error('cannot find right format for |' + r.join('|') + '|')
    if (typeof t != 'number') return [4, r.length === 4 || a > -1 ? r[r.length - 1] : '@']
    switch (r.length) {
      case 1:
        r = a > -1 ? ['General', 'General', 'General', r[0]] : [r[0], r[0], r[0], '@']
        break
      case 2:
        r = a > -1 ? [r[0], r[0], r[0], r[1]] : [r[0], r[1], r[0], '@']
        break
      case 3:
        r = a > -1 ? [r[0], r[1], r[0], r[2]] : [r[0], r[1], r[2], '@']
        break
    }
    var i = t > 0 ? r[0] : t < 0 ? r[1] : r[2]
    if (r[0].indexOf('[') === -1 && r[1].indexOf('[') === -1) return [n, i]
    if (r[0].match(/\[[=<>]/) != null || r[1].match(/\[[=<>]/) != null) {
      var s = r[0].match(ac),
        o = r[1].match(ac)
      return ic(t, s) ? [n, r[0]] : ic(t, o) ? [n, r[1]] : [n, r[s != null && o != null ? 2 : 1]]
    }
    return [n, i]
  }
  function Fr(e, t, r) {
    r == null && (r = {})
    var n = ''
    switch (typeof e) {
      case 'string':
        e == 'm/d/yy' && r.dateNF ? (n = r.dateNF) : (n = e)
        break
      case 'number':
        e == 14 && r.dateNF ? (n = r.dateNF) : (n = (r.table != null ? r.table : ze)[e]),
          n == null && (n = (r.table && r.table[Vl[e]]) || ze[Vl[e]]),
          n == null && (n = Yv[e] || 'General')
        break
    }
    if (Ui(n, 0)) return y0(t, r)
    t instanceof Date && (t = zl(t, r.date1904))
    var a = ow(n, t)
    if (Ui(a[1])) return y0(t, r)
    if (t === !0) t = 'TRUE'
    else if (t === !1) t = 'FALSE'
    else if (t === '' || t == null) return ''
    return sw(a[1], t, r, a[0])
  }
  function O0(e, t) {
    if (typeof t != 'number') {
      t = +t || -1
      for (var r = 0; r < 392; ++r) {
        if (ze[r] == null) {
          t < 0 && (t = r)
          continue
        }
        if (ze[r] == e) {
          t = r
          break
        }
      }
      t < 0 && (t = 391)
    }
    return (ze[t] = e), t
  }
  function Da(e) {
    for (var t = 0; t != 392; ++t) e[t] !== void 0 && O0(e[t], t)
  }
  function Hi() {
    ze = Hv()
  }
  var F0 = {
      format: Fr,
      load: O0,
      _table: ze,
      load_table: Da,
      parse_date_code: Ca,
      is_date: A0,
      get_table: function () {
        return (F0._table = ze)
      }
    },
    sc = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g
  function fw(e) {
    var t = typeof e == 'number' ? ze[e] : e
    return (t = t.replace(sc, '(\\d+)')), new RegExp('^' + t + '$')
  }
  function lw(e, t, r) {
    var n = -1,
      a = -1,
      i = -1,
      s = -1,
      o = -1,
      l = -1
    ;(t.match(sc) || []).forEach(function (u, h) {
      var p = parseInt(r[h + 1], 10)
      switch (u.toLowerCase().charAt(0)) {
        case 'y':
          n = p
          break
        case 'd':
          i = p
          break
        case 'h':
          s = p
          break
        case 's':
          l = p
          break
        case 'm':
          s >= 0 ? (o = p) : (a = p)
          break
      }
    }),
      l >= 0 && o == -1 && a >= 0 && ((o = a), (a = -1))
    var f =
      ('' + (n >= 0 ? n : new Date().getFullYear())).slice(-4) +
      '-' +
      ('00' + (a >= 1 ? a : 1)).slice(-2) +
      '-' +
      ('00' + (i >= 1 ? i : 1)).slice(-2)
    f.length == 7 && (f = '0' + f), f.length == 8 && (f = '20' + f)
    var c =
      ('00' + (s >= 0 ? s : 0)).slice(-2) +
      ':' +
      ('00' + (o >= 0 ? o : 0)).slice(-2) +
      ':' +
      ('00' + (l >= 0 ? l : 0)).slice(-2)
    return s == -1 && o == -1 && l == -1 ? f : n == -1 && a == -1 && i == -1 ? c : f + 'T' + c
  }
  var cw = (function () {
      var e = {}
      e.version = '1.2.0'
      function t() {
        for (var k = 0, H = new Array(256), b = 0; b != 256; ++b)
          (k = b),
            (k = k & 1 ? -306674912 ^ (k >>> 1) : k >>> 1),
            (k = k & 1 ? -306674912 ^ (k >>> 1) : k >>> 1),
            (k = k & 1 ? -306674912 ^ (k >>> 1) : k >>> 1),
            (k = k & 1 ? -306674912 ^ (k >>> 1) : k >>> 1),
            (k = k & 1 ? -306674912 ^ (k >>> 1) : k >>> 1),
            (k = k & 1 ? -306674912 ^ (k >>> 1) : k >>> 1),
            (k = k & 1 ? -306674912 ^ (k >>> 1) : k >>> 1),
            (k = k & 1 ? -306674912 ^ (k >>> 1) : k >>> 1),
            (H[b] = k)
        return typeof Int32Array < 'u' ? new Int32Array(H) : H
      }
      var r = t()
      function n(k) {
        var H = 0,
          b = 0,
          V = 0,
          G = typeof Int32Array < 'u' ? new Int32Array(4096) : new Array(4096)
        for (V = 0; V != 256; ++V) G[V] = k[V]
        for (V = 0; V != 256; ++V)
          for (b = k[V], H = 256 + V; H < 4096; H += 256) b = G[H] = (b >>> 8) ^ k[b & 255]
        var z = []
        for (V = 1; V != 16; ++V)
          z[V - 1] =
            typeof Int32Array < 'u'
              ? G.subarray(V * 256, V * 256 + 256)
              : G.slice(V * 256, V * 256 + 256)
        return z
      }
      var a = n(r),
        i = a[0],
        s = a[1],
        o = a[2],
        l = a[3],
        f = a[4],
        c = a[5],
        u = a[6],
        h = a[7],
        p = a[8],
        m = a[9],
        d = a[10],
        v = a[11],
        A = a[12],
        F = a[13],
        C = a[14]
      function L(k, H) {
        for (var b = H ^ -1, V = 0, G = k.length; V < G; )
          b = (b >>> 8) ^ r[(b ^ k.charCodeAt(V++)) & 255]
        return ~b
      }
      function Z(k, H) {
        for (var b = H ^ -1, V = k.length - 15, G = 0; G < V; )
          b =
            C[k[G++] ^ (b & 255)] ^
            F[k[G++] ^ ((b >> 8) & 255)] ^
            A[k[G++] ^ ((b >> 16) & 255)] ^
            v[k[G++] ^ (b >>> 24)] ^
            d[k[G++]] ^
            m[k[G++]] ^
            p[k[G++]] ^
            h[k[G++]] ^
            u[k[G++]] ^
            c[k[G++]] ^
            f[k[G++]] ^
            l[k[G++]] ^
            o[k[G++]] ^
            s[k[G++]] ^
            i[k[G++]] ^
            r[k[G++]]
        for (V += 15; G < V; ) b = (b >>> 8) ^ r[(b ^ k[G++]) & 255]
        return ~b
      }
      function ie(k, H) {
        for (var b = H ^ -1, V = 0, G = k.length, z = 0, ae = 0; V < G; )
          (z = k.charCodeAt(V++)),
            z < 128
              ? (b = (b >>> 8) ^ r[(b ^ z) & 255])
              : z < 2048
              ? ((b = (b >>> 8) ^ r[(b ^ (192 | ((z >> 6) & 31))) & 255]),
                (b = (b >>> 8) ^ r[(b ^ (128 | (z & 63))) & 255]))
              : z >= 55296 && z < 57344
              ? ((z = (z & 1023) + 64),
                (ae = k.charCodeAt(V++) & 1023),
                (b = (b >>> 8) ^ r[(b ^ (240 | ((z >> 8) & 7))) & 255]),
                (b = (b >>> 8) ^ r[(b ^ (128 | ((z >> 2) & 63))) & 255]),
                (b = (b >>> 8) ^ r[(b ^ (128 | ((ae >> 6) & 15) | ((z & 3) << 4))) & 255]),
                (b = (b >>> 8) ^ r[(b ^ (128 | (ae & 63))) & 255]))
              : ((b = (b >>> 8) ^ r[(b ^ (224 | ((z >> 12) & 15))) & 255]),
                (b = (b >>> 8) ^ r[(b ^ (128 | ((z >> 6) & 63))) & 255]),
                (b = (b >>> 8) ^ r[(b ^ (128 | (z & 63))) & 255]))
        return ~b
      }
      return (e.table = r), (e.bstr = L), (e.buf = Z), (e.str = ie), e
    })(),
    Ue = (function () {
      var t = {}
      t.version = '1.2.1'
      function r(x, T) {
        for (
          var _ = x.split('/'), w = T.split('/'), E = 0, S = 0, N = Math.min(_.length, w.length);
          E < N;
          ++E
        ) {
          if ((S = _[E].length - w[E].length)) return S
          if (_[E] != w[E]) return _[E] < w[E] ? -1 : 1
        }
        return _.length - w.length
      }
      function n(x) {
        if (x.charAt(x.length - 1) == '/')
          return x.slice(0, -1).indexOf('/') === -1 ? x : n(x.slice(0, -1))
        var T = x.lastIndexOf('/')
        return T === -1 ? x : x.slice(0, T + 1)
      }
      function a(x) {
        if (x.charAt(x.length - 1) == '/') return a(x.slice(0, -1))
        var T = x.lastIndexOf('/')
        return T === -1 ? x : x.slice(T + 1)
      }
      function i(x, T) {
        typeof T == 'string' && (T = new Date(T))
        var _ = T.getHours()
        ;(_ = (_ << 6) | T.getMinutes()),
          (_ = (_ << 5) | (T.getSeconds() >>> 1)),
          x.write_shift(2, _)
        var w = T.getFullYear() - 1980
        ;(w = (w << 4) | (T.getMonth() + 1)), (w = (w << 5) | T.getDate()), x.write_shift(2, w)
      }
      function s(x) {
        var T = x.read_shift(2) & 65535,
          _ = x.read_shift(2) & 65535,
          w = new Date(),
          E = _ & 31
        _ >>>= 5
        var S = _ & 15
        ;(_ >>>= 4), w.setMilliseconds(0), w.setFullYear(_ + 1980), w.setMonth(S - 1), w.setDate(E)
        var N = T & 31
        T >>>= 5
        var U = T & 63
        return (T >>>= 6), w.setHours(T), w.setMinutes(U), w.setSeconds(N << 1), w
      }
      function o(x) {
        Ut(x, 0)
        for (var T = {}, _ = 0; x.l <= x.length - 4; ) {
          var w = x.read_shift(2),
            E = x.read_shift(2),
            S = x.l + E,
            N = {}
          switch (w) {
            case 21589:
              ;(_ = x.read_shift(1)),
                _ & 1 && (N.mtime = x.read_shift(4)),
                E > 5 &&
                  (_ & 2 && (N.atime = x.read_shift(4)), _ & 4 && (N.ctime = x.read_shift(4))),
                N.mtime && (N.mt = new Date(N.mtime * 1e3))
              break
          }
          ;(x.l = S), (T[w] = N)
        }
        return T
      }
      var l
      function f() {
        return l || (l = {})
      }
      function c(x, T) {
        if (x[0] == 80 && x[1] == 75) return Vh(x, T)
        if ((x[0] | 32) == 109 && (x[1] | 32) == 105) return vF(x, T)
        if (x.length < 512) throw new Error('CFB file size ' + x.length + ' < 512')
        var _ = 3,
          w = 512,
          E = 0,
          S = 0,
          N = 0,
          U = 0,
          R = 0,
          P = [],
          I = x.slice(0, 512)
        Ut(I, 0)
        var X = u(I)
        switch (((_ = X[0]), _)) {
          case 3:
            w = 512
            break
          case 4:
            w = 4096
            break
          case 0:
            if (X[1] == 0) return Vh(x, T)
          default:
            throw new Error('Major Version: Expected 3 or 4 saw ' + _)
        }
        w !== 512 && ((I = x.slice(0, w)), Ut(I, 28))
        var re = x.slice(0, w)
        h(I, _)
        var fe = I.read_shift(4, 'i')
        if (_ === 3 && fe !== 0) throw new Error('# Directory Sectors: Expected 0 saw ' + fe)
        ;(I.l += 4),
          (N = I.read_shift(4, 'i')),
          (I.l += 4),
          I.chk('00100000', 'Mini Stream Cutoff Size: '),
          (U = I.read_shift(4, 'i')),
          (E = I.read_shift(4, 'i')),
          (R = I.read_shift(4, 'i')),
          (S = I.read_shift(4, 'i'))
        for (var J = -1, se = 0; se < 109 && ((J = I.read_shift(4, 'i')), !(J < 0)); ++se) P[se] = J
        var _e = p(x, w)
        v(R, S, _e, w, P)
        var qe = F(_e, N, P, w)
        ;(qe[N].name = '!Directory'),
          E > 0 && U !== ae && (qe[U].name = '!MiniFAT'),
          (qe[P[0]].name = '!FAT'),
          (qe.fat_addrs = P),
          (qe.ssz = w)
        var Je = {},
          yt = [],
          qa = [],
          Ja = []
        C(N, qe, _e, yt, E, Je, qa, U), m(qa, Ja, yt), yt.shift()
        var Za = { FileIndex: qa, FullPaths: Ja }
        return T && T.raw && (Za.raw = { header: re, sectors: _e }), Za
      }
      function u(x) {
        if (x[x.l] == 80 && x[x.l + 1] == 75) return [0, 0]
        x.chk(Re, 'Header Signature: '), (x.l += 16)
        var T = x.read_shift(2, 'u')
        return [x.read_shift(2, 'u'), T]
      }
      function h(x, T) {
        var _ = 9
        switch (((x.l += 2), (_ = x.read_shift(2)))) {
          case 9:
            if (T != 3) throw new Error('Sector Shift: Expected 9 saw ' + _)
            break
          case 12:
            if (T != 4) throw new Error('Sector Shift: Expected 12 saw ' + _)
            break
          default:
            throw new Error('Sector Shift: Expected 9 or 12 saw ' + _)
        }
        x.chk('0600', 'Mini Sector Shift: '), x.chk('000000000000', 'Reserved: ')
      }
      function p(x, T) {
        for (var _ = Math.ceil(x.length / T) - 1, w = [], E = 1; E < _; ++E)
          w[E - 1] = x.slice(E * T, (E + 1) * T)
        return (w[_ - 1] = x.slice(_ * T)), w
      }
      function m(x, T, _) {
        for (var w = 0, E = 0, S = 0, N = 0, U = 0, R = _.length, P = [], I = []; w < R; ++w)
          (P[w] = I[w] = w), (T[w] = _[w])
        for (; U < I.length; ++U)
          (w = I[U]),
            (E = x[w].L),
            (S = x[w].R),
            (N = x[w].C),
            P[w] === w &&
              (E !== -1 && P[E] !== E && (P[w] = P[E]), S !== -1 && P[S] !== S && (P[w] = P[S])),
            N !== -1 && (P[N] = w),
            E !== -1 && w != P[w] && ((P[E] = P[w]), I.lastIndexOf(E) < U && I.push(E)),
            S !== -1 && w != P[w] && ((P[S] = P[w]), I.lastIndexOf(S) < U && I.push(S))
        for (w = 1; w < R; ++w)
          P[w] === w &&
            (S !== -1 && P[S] !== S ? (P[w] = P[S]) : E !== -1 && P[E] !== E && (P[w] = P[E]))
        for (w = 1; w < R; ++w)
          if (x[w].type !== 0) {
            if (((U = w), U != P[U]))
              do (U = P[U]), (T[w] = T[U] + '/' + T[w])
              while (U !== 0 && P[U] !== -1 && U != P[U])
            P[w] = -1
          }
        for (T[0] += '/', w = 1; w < R; ++w) x[w].type !== 2 && (T[w] += '/')
      }
      function d(x, T, _) {
        for (var w = x.start, E = x.size, S = [], N = w; _ && E > 0 && N >= 0; )
          S.push(T.slice(N * z, N * z + z)), (E -= z), (N = hn(_, N * 4))
        return S.length === 0 ? B(0) : ht(S).slice(0, x.size)
      }
      function v(x, T, _, w, E) {
        var S = ae
        if (x === ae) {
          if (T !== 0) throw new Error('DIFAT chain shorter than expected')
        } else if (x !== -1) {
          var N = _[x],
            U = (w >>> 2) - 1
          if (!N) return
          for (var R = 0; R < U && (S = hn(N, R * 4)) !== ae; ++R) E.push(S)
          v(hn(N, w - 4), T - 1, _, w, E)
        }
      }
      function A(x, T, _, w, E) {
        var S = [],
          N = []
        E || (E = [])
        var U = w - 1,
          R = 0,
          P = 0
        for (R = T; R >= 0; ) {
          ;(E[R] = !0), (S[S.length] = R), N.push(x[R])
          var I = _[Math.floor((R * 4) / w)]
          if (((P = (R * 4) & U), w < 4 + P))
            throw new Error('FAT boundary crossed: ' + R + ' 4 ' + w)
          if (!x[I]) break
          R = hn(x[I], P)
        }
        return { nodes: S, data: vc([N]) }
      }
      function F(x, T, _, w) {
        var E = x.length,
          S = [],
          N = [],
          U = [],
          R = [],
          P = w - 1,
          I = 0,
          X = 0,
          re = 0,
          fe = 0
        for (I = 0; I < E; ++I)
          if (((U = []), (re = I + T), re >= E && (re -= E), !N[re])) {
            R = []
            var J = []
            for (X = re; X >= 0; ) {
              ;(J[X] = !0), (N[X] = !0), (U[U.length] = X), R.push(x[X])
              var se = _[Math.floor((X * 4) / w)]
              if (((fe = (X * 4) & P), w < 4 + fe))
                throw new Error('FAT boundary crossed: ' + X + ' 4 ' + w)
              if (!x[se] || ((X = hn(x[se], fe)), J[X])) break
            }
            S[re] = { nodes: U, data: vc([R]) }
          }
        return S
      }
      function C(x, T, _, w, E, S, N, U) {
        for (
          var R = 0, P = w.length ? 2 : 0, I = T[x].data, X = 0, re = 0, fe;
          X < I.length;
          X += 128
        ) {
          var J = I.slice(X, X + 128)
          Ut(J, 64), (re = J.read_shift(2)), (fe = I0(J, 0, re - P)), w.push(fe)
          var se = {
              name: fe,
              type: J.read_shift(1),
              color: J.read_shift(1),
              L: J.read_shift(4, 'i'),
              R: J.read_shift(4, 'i'),
              C: J.read_shift(4, 'i'),
              clsid: J.read_shift(16),
              state: J.read_shift(4, 'i'),
              start: 0,
              size: 0
            },
            _e = J.read_shift(2) + J.read_shift(2) + J.read_shift(2) + J.read_shift(2)
          _e !== 0 && (se.ct = L(J, J.l - 8))
          var qe = J.read_shift(2) + J.read_shift(2) + J.read_shift(2) + J.read_shift(2)
          qe !== 0 && (se.mt = L(J, J.l - 8)),
            (se.start = J.read_shift(4, 'i')),
            (se.size = J.read_shift(4, 'i')),
            se.size < 0 &&
              se.start < 0 &&
              ((se.size = se.type = 0), (se.start = ae), (se.name = '')),
            se.type === 5
              ? ((R = se.start), E > 0 && R !== ae && (T[R].name = '!StreamData'))
              : se.size >= 4096
              ? ((se.storage = 'fat'),
                T[se.start] === void 0 && (T[se.start] = A(_, se.start, T.fat_addrs, T.ssz)),
                (T[se.start].name = se.name),
                (se.content = T[se.start].data.slice(0, se.size)))
              : ((se.storage = 'minifat'),
                se.size < 0
                  ? (se.size = 0)
                  : R !== ae &&
                    se.start !== ae &&
                    T[R] &&
                    (se.content = d(se, T[R].data, (T[U] || {}).data))),
            se.content && Ut(se.content, 0),
            (S[fe] = se),
            N.push(se)
        }
      }
      function L(x, T) {
        return new Date(
          ((Bt(x, T + 4) / 1e7) * Math.pow(2, 32) + Bt(x, T) / 1e7 - 11644473600) * 1e3
        )
      }
      function Z(x, T) {
        return f(), c(l.readFileSync(x), T)
      }
      function ie(x, T) {
        var _ = T && T.type
        switch ((_ || (ke && Buffer.isBuffer(x) && (_ = 'buffer')), _ || 'base64')) {
          case 'file':
            return Z(x, T)
          case 'base64':
            return c(er(yr(x)), T)
          case 'binary':
            return c(er(x), T)
        }
        return c(x, T)
      }
      function k(x, T) {
        var _ = T || {},
          w = _.root || 'Root Entry'
        if (
          (x.FullPaths || (x.FullPaths = []),
          x.FileIndex || (x.FileIndex = []),
          x.FullPaths.length !== x.FileIndex.length)
        )
          throw new Error('inconsistent CFB structure')
        x.FullPaths.length === 0 &&
          ((x.FullPaths[0] = w + '/'), (x.FileIndex[0] = { name: w, type: 5 })),
          _.CLSID && (x.FileIndex[0].clsid = _.CLSID),
          H(x)
      }
      function H(x) {
        var T = 'Sh33tJ5'
        if (!Ue.find(x, '/' + T)) {
          var _ = B(4)
          ;(_[0] = 55),
            (_[1] = _[3] = 50),
            (_[2] = 54),
            x.FileIndex.push({ name: T, type: 2, content: _, size: 4, L: 69, R: 69, C: 69 }),
            x.FullPaths.push(x.FullPaths[0] + T),
            b(x)
        }
      }
      function b(x, T) {
        k(x)
        for (var _ = !1, w = !1, E = x.FullPaths.length - 1; E >= 0; --E) {
          var S = x.FileIndex[E]
          switch (S.type) {
            case 0:
              w ? (_ = !0) : (x.FileIndex.pop(), x.FullPaths.pop())
              break
            case 1:
            case 2:
            case 5:
              ;(w = !0),
                isNaN(S.R * S.L * S.C) && (_ = !0),
                S.R > -1 && S.L > -1 && S.R == S.L && (_ = !0)
              break
            default:
              _ = !0
              break
          }
        }
        if (!(!_ && !T)) {
          var N = new Date(1987, 1, 19),
            U = 0,
            R = Object.create ? Object.create(null) : {},
            P = []
          for (E = 0; E < x.FullPaths.length; ++E)
            (R[x.FullPaths[E]] = !0),
              x.FileIndex[E].type !== 0 && P.push([x.FullPaths[E], x.FileIndex[E]])
          for (E = 0; E < P.length; ++E) {
            var I = n(P[E][0])
            ;(w = R[I]),
              w ||
                (P.push([
                  I,
                  { name: a(I).replace('/', ''), type: 1, clsid: st, ct: N, mt: N, content: null }
                ]),
                (R[I] = !0))
          }
          for (
            P.sort(function (fe, J) {
              return r(fe[0], J[0])
            }),
              x.FullPaths = [],
              x.FileIndex = [],
              E = 0;
            E < P.length;
            ++E
          )
            (x.FullPaths[E] = P[E][0]), (x.FileIndex[E] = P[E][1])
          for (E = 0; E < P.length; ++E) {
            var X = x.FileIndex[E],
              re = x.FullPaths[E]
            if (
              ((X.name = a(re).replace('/', '')),
              (X.L = X.R = X.C = -(X.color = 1)),
              (X.size = X.content ? X.content.length : 0),
              (X.start = 0),
              (X.clsid = X.clsid || st),
              E === 0)
            )
              (X.C = P.length > 1 ? 1 : -1), (X.size = 0), (X.type = 5)
            else if (re.slice(-1) == '/') {
              for (U = E + 1; U < P.length && n(x.FullPaths[U]) != re; ++U);
              for (
                X.C = U >= P.length ? -1 : U, U = E + 1;
                U < P.length && n(x.FullPaths[U]) != n(re);
                ++U
              );
              ;(X.R = U >= P.length ? -1 : U), (X.type = 1)
            } else n(x.FullPaths[E + 1] || '') == n(re) && (X.R = E + 1), (X.type = 2)
          }
        }
      }
      function V(x, T) {
        var _ = T || {}
        if (_.fileType == 'mad') return wF(x, _)
        switch ((b(x), _.fileType)) {
          case 'zip':
            return dF(x, _)
        }
        var w = (function (fe) {
            for (var J = 0, se = 0, _e = 0; _e < fe.FileIndex.length; ++_e) {
              var qe = fe.FileIndex[_e]
              if (!!qe.content) {
                var Je = qe.content.length
                Je > 0 && (Je < 4096 ? (J += (Je + 63) >> 6) : (se += (Je + 511) >> 9))
              }
            }
            for (
              var yt = (fe.FullPaths.length + 3) >> 2,
                qa = (J + 7) >> 3,
                Ja = (J + 127) >> 7,
                Za = qa + se + yt + Ja,
                Sn = (Za + 127) >> 7,
                Oo = Sn <= 109 ? 0 : Math.ceil((Sn - 109) / 127);
              (Za + Sn + Oo + 127) >> 7 > Sn;

            )
              Oo = ++Sn <= 109 ? 0 : Math.ceil((Sn - 109) / 127)
            var br = [1, Oo, Sn, Ja, yt, se, J, 0]
            return (
              (fe.FileIndex[0].size = J << 6),
              (br[7] =
                (fe.FileIndex[0].start = br[0] + br[1] + br[2] + br[3] + br[4] + br[5]) +
                ((br[6] + 7) >> 3)),
              br
            )
          })(x),
          E = B(w[7] << 9),
          S = 0,
          N = 0
        {
          for (S = 0; S < 8; ++S) E.write_shift(1, me[S])
          for (S = 0; S < 8; ++S) E.write_shift(2, 0)
          for (
            E.write_shift(2, 62),
              E.write_shift(2, 3),
              E.write_shift(2, 65534),
              E.write_shift(2, 9),
              E.write_shift(2, 6),
              S = 0;
            S < 3;
            ++S
          )
            E.write_shift(2, 0)
          for (
            E.write_shift(4, 0),
              E.write_shift(4, w[2]),
              E.write_shift(4, w[0] + w[1] + w[2] + w[3] - 1),
              E.write_shift(4, 0),
              E.write_shift(4, 1 << 12),
              E.write_shift(4, w[3] ? w[0] + w[1] + w[2] - 1 : ae),
              E.write_shift(4, w[3]),
              E.write_shift(-4, w[1] ? w[0] - 1 : ae),
              E.write_shift(4, w[1]),
              S = 0;
            S < 109;
            ++S
          )
            E.write_shift(-4, S < w[2] ? w[1] + S : -1)
        }
        if (w[1])
          for (N = 0; N < w[1]; ++N) {
            for (; S < 236 + N * 127; ++S) E.write_shift(-4, S < w[2] ? w[1] + S : -1)
            E.write_shift(-4, N === w[1] - 1 ? ae : N + 1)
          }
        var U = function (fe) {
          for (N += fe; S < N - 1; ++S) E.write_shift(-4, S + 1)
          fe && (++S, E.write_shift(-4, ae))
        }
        for (N = S = 0, N += w[1]; S < N; ++S) E.write_shift(-4, te.DIFSECT)
        for (N += w[2]; S < N; ++S) E.write_shift(-4, te.FATSECT)
        U(w[3]), U(w[4])
        for (var R = 0, P = 0, I = x.FileIndex[0]; R < x.FileIndex.length; ++R)
          (I = x.FileIndex[R]),
            I.content && ((P = I.content.length), !(P < 4096) && ((I.start = N), U((P + 511) >> 9)))
        for (U((w[6] + 7) >> 3); E.l & 511; ) E.write_shift(-4, te.ENDOFCHAIN)
        for (N = S = 0, R = 0; R < x.FileIndex.length; ++R)
          (I = x.FileIndex[R]),
            I.content &&
              ((P = I.content.length), !(!P || P >= 4096) && ((I.start = N), U((P + 63) >> 6)))
        for (; E.l & 511; ) E.write_shift(-4, te.ENDOFCHAIN)
        for (S = 0; S < w[4] << 2; ++S) {
          var X = x.FullPaths[S]
          if (!X || X.length === 0) {
            for (R = 0; R < 17; ++R) E.write_shift(4, 0)
            for (R = 0; R < 3; ++R) E.write_shift(4, -1)
            for (R = 0; R < 12; ++R) E.write_shift(4, 0)
            continue
          }
          ;(I = x.FileIndex[S]), S === 0 && (I.start = I.size ? I.start - 1 : ae)
          var re = (S === 0 && _.root) || I.name
          if (
            ((P = 2 * (re.length + 1)),
            E.write_shift(64, re, 'utf16le'),
            E.write_shift(2, P),
            E.write_shift(1, I.type),
            E.write_shift(1, I.color),
            E.write_shift(-4, I.L),
            E.write_shift(-4, I.R),
            E.write_shift(-4, I.C),
            I.clsid)
          )
            E.write_shift(16, I.clsid, 'hex')
          else for (R = 0; R < 4; ++R) E.write_shift(4, 0)
          E.write_shift(4, I.state || 0),
            E.write_shift(4, 0),
            E.write_shift(4, 0),
            E.write_shift(4, 0),
            E.write_shift(4, 0),
            E.write_shift(4, I.start),
            E.write_shift(4, I.size),
            E.write_shift(4, 0)
        }
        for (S = 1; S < x.FileIndex.length; ++S)
          if (((I = x.FileIndex[S]), I.size >= 4096))
            if (((E.l = (I.start + 1) << 9), ke && Buffer.isBuffer(I.content)))
              I.content.copy(E, E.l, 0, I.size), (E.l += (I.size + 511) & -512)
            else {
              for (R = 0; R < I.size; ++R) E.write_shift(1, I.content[R])
              for (; R & 511; ++R) E.write_shift(1, 0)
            }
        for (S = 1; S < x.FileIndex.length; ++S)
          if (((I = x.FileIndex[S]), I.size > 0 && I.size < 4096))
            if (ke && Buffer.isBuffer(I.content))
              I.content.copy(E, E.l, 0, I.size), (E.l += (I.size + 63) & -64)
            else {
              for (R = 0; R < I.size; ++R) E.write_shift(1, I.content[R])
              for (; R & 63; ++R) E.write_shift(1, 0)
            }
        if (ke) E.l = E.length
        else for (; E.l < E.length; ) E.write_shift(1, 0)
        return E
      }
      function G(x, T) {
        var _ = x.FullPaths.map(function (R) {
            return R.toUpperCase()
          }),
          w = _.map(function (R) {
            var P = R.split('/')
            return P[P.length - (R.slice(-1) == '/' ? 2 : 1)]
          }),
          E = !1
        T.charCodeAt(0) === 47
          ? ((E = !0), (T = _[0].slice(0, -1) + T))
          : (E = T.indexOf('/') !== -1)
        var S = T.toUpperCase(),
          N = E === !0 ? _.indexOf(S) : w.indexOf(S)
        if (N !== -1) return x.FileIndex[N]
        var U = !S.match(Li)
        for (S = S.replace(Fa, ''), U && (S = S.replace(Li, '!')), N = 0; N < _.length; ++N)
          if (
            (U ? _[N].replace(Li, '!') : _[N]).replace(Fa, '') == S ||
            (U ? w[N].replace(Li, '!') : w[N]).replace(Fa, '') == S
          )
            return x.FileIndex[N]
        return null
      }
      var z = 64,
        ae = -2,
        Re = 'd0cf11e0a1b11ae1',
        me = [208, 207, 17, 224, 161, 177, 26, 225],
        st = '00000000000000000000000000000000',
        te = {
          MAXREGSECT: -6,
          DIFSECT: -4,
          FATSECT: -3,
          ENDOFCHAIN: ae,
          FREESECT: -1,
          HEADER_SIGNATURE: Re,
          HEADER_MINOR_VERSION: '3e00',
          MAXREGSID: -6,
          NOSTREAM: -1,
          HEADER_CLSID: st,
          EntryTypes: ['unknown', 'storage', 'stream', 'lockbytes', 'property', 'root']
        }
      function Se(x, T, _) {
        f()
        var w = V(x, _)
        l.writeFileSync(T, w)
      }
      function ye(x) {
        for (var T = new Array(x.length), _ = 0; _ < x.length; ++_) T[_] = String.fromCharCode(x[_])
        return T.join('')
      }
      function ot(x, T) {
        var _ = V(x, T)
        switch ((T && T.type) || 'buffer') {
          case 'file':
            return f(), l.writeFileSync(T.filename, _), _
          case 'binary':
            return typeof _ == 'string' ? _ : ye(_)
          case 'base64':
            return Aa(typeof _ == 'string' ? _ : ye(_))
          case 'buffer':
            if (ke) return Buffer.isBuffer(_) ? _ : Ar(_)
          case 'array':
            return typeof _ == 'string' ? er(_) : _
        }
        return _
      }
      var ft
      function y(x) {
        try {
          var T = x.InflateRaw,
            _ = new T()
          if ((_._processChunk(new Uint8Array([3, 0]), _._finishFlushFlag), _.bytesRead)) ft = x
          else throw new Error('zlib does not expose bytesRead')
        } catch (w) {
          console.error('cannot use native zlib: ' + (w.message || w))
        }
      }
      function M(x, T) {
        if (!ft) return $h(x, T)
        var _ = ft.InflateRaw,
          w = new _(),
          E = w._processChunk(x.slice(x.l), w._finishFlushFlag)
        return (x.l += w.bytesRead), E
      }
      function D(x) {
        return ft ? ft.deflateRawSync(x) : Lh(x)
      }
      var O = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        j = [
          3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115,
          131, 163, 195, 227, 258
        ],
        ue = [
          1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537,
          2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577
        ]
      function he(x) {
        var T = (((x << 1) | (x << 11)) & 139536) | (((x << 5) | (x << 15)) & 558144)
        return ((T >> 16) | (T >> 8) | T) & 255
      }
      for (
        var ce = typeof Uint8Array < 'u', ne = ce ? new Uint8Array(1 << 8) : [], be = 0;
        be < 1 << 8;
        ++be
      )
        ne[be] = he(be)
      function Te(x, T) {
        var _ = ne[x & 255]
        return T <= 8
          ? _ >>> (8 - T)
          : ((_ = (_ << 8) | ne[(x >> 8) & 255]),
            T <= 16 ? _ >>> (16 - T) : ((_ = (_ << 8) | ne[(x >> 16) & 255]), _ >>> (24 - T)))
      }
      function gt(x, T) {
        var _ = T & 7,
          w = T >>> 3
        return ((x[w] | (_ <= 6 ? 0 : x[w + 1] << 8)) >>> _) & 3
      }
      function Oe(x, T) {
        var _ = T & 7,
          w = T >>> 3
        return ((x[w] | (_ <= 5 ? 0 : x[w + 1] << 8)) >>> _) & 7
      }
      function Kt(x, T) {
        var _ = T & 7,
          w = T >>> 3
        return ((x[w] | (_ <= 4 ? 0 : x[w + 1] << 8)) >>> _) & 15
      }
      function Ve(x, T) {
        var _ = T & 7,
          w = T >>> 3
        return ((x[w] | (_ <= 3 ? 0 : x[w + 1] << 8)) >>> _) & 31
      }
      function le(x, T) {
        var _ = T & 7,
          w = T >>> 3
        return ((x[w] | (_ <= 1 ? 0 : x[w + 1] << 8)) >>> _) & 127
      }
      function Dt(x, T, _) {
        var w = T & 7,
          E = T >>> 3,
          S = (1 << _) - 1,
          N = x[E] >>> w
        return (
          _ < 8 - w ||
            ((N |= x[E + 1] << (8 - w)), _ < 16 - w) ||
            ((N |= x[E + 2] << (16 - w)), _ < 24 - w) ||
            (N |= x[E + 3] << (24 - w)),
          N & S
        )
      }
      function de(x, T, _) {
        var w = T & 7,
          E = T >>> 3
        return (
          w <= 5
            ? (x[E] |= (_ & 7) << w)
            : ((x[E] |= (_ << w) & 255), (x[E + 1] = (_ & 7) >> (8 - w))),
          T + 3
        )
      }
      function Ir(x, T, _) {
        var w = T & 7,
          E = T >>> 3
        return (_ = (_ & 1) << w), (x[E] |= _), T + 1
      }
      function Ke(x, T, _) {
        var w = T & 7,
          E = T >>> 3
        return (_ <<= w), (x[E] |= _ & 255), (_ >>>= 8), (x[E + 1] = _), T + 8
      }
      function Mr(x, T, _) {
        var w = T & 7,
          E = T >>> 3
        return (
          (_ <<= w),
          (x[E] |= _ & 255),
          (_ >>>= 8),
          (x[E + 1] = _ & 255),
          (x[E + 2] = _ >>> 8),
          T + 16
        )
      }
      function Eo(x, T) {
        var _ = x.length,
          w = 2 * _ > T ? 2 * _ : T + 5,
          E = 0
        if (_ >= T) return x
        if (ke) {
          var S = Yl(w)
          if (x.copy) x.copy(S)
          else for (; E < x.length; ++E) S[E] = x[E]
          return S
        } else if (ce) {
          var N = new Uint8Array(w)
          if (N.set) N.set(x)
          else for (; E < _; ++E) N[E] = x[E]
          return N
        }
        return (x.length = w), x
      }
      function pr(x) {
        for (var T = new Array(x), _ = 0; _ < x; ++_) T[_] = 0
        return T
      }
      function _s(x, T, _) {
        var w = 1,
          E = 0,
          S = 0,
          N = 0,
          U = 0,
          R = x.length,
          P = ce ? new Uint16Array(32) : pr(32)
        for (S = 0; S < 32; ++S) P[S] = 0
        for (S = R; S < _; ++S) x[S] = 0
        R = x.length
        var I = ce ? new Uint16Array(R) : pr(R)
        for (S = 0; S < R; ++S) P[(E = x[S])]++, w < E && (w = E), (I[S] = 0)
        for (P[0] = 0, S = 1; S <= w; ++S) P[S + 16] = U = (U + P[S - 1]) << 1
        for (S = 0; S < R; ++S) (U = x[S]), U != 0 && (I[S] = P[U + 16]++)
        var X = 0
        for (S = 0; S < R; ++S)
          if (((X = x[S]), X != 0))
            for (U = Te(I[S], w) >> (w - X), N = (1 << (w + 4 - X)) - 1; N >= 0; --N)
              T[U | (N << X)] = (X & 15) | (S << 4)
        return w
      }
      var So = ce ? new Uint16Array(512) : pr(512),
        yo = ce ? new Uint16Array(32) : pr(32)
      if (!ce) {
        for (var En = 0; En < 512; ++En) So[En] = 0
        for (En = 0; En < 32; ++En) yo[En] = 0
      }
      ;(function () {
        for (var x = [], T = 0; T < 32; T++) x.push(5)
        _s(x, yo, 32)
        var _ = []
        for (T = 0; T <= 143; T++) _.push(8)
        for (; T <= 255; T++) _.push(9)
        for (; T <= 279; T++) _.push(7)
        for (; T <= 287; T++) _.push(8)
        _s(_, So, 288)
      })()
      var lF = (function () {
        for (var T = ce ? new Uint8Array(32768) : [], _ = 0, w = 0; _ < ue.length - 1; ++_)
          for (; w < ue[_ + 1]; ++w) T[w] = _
        for (; w < 32768; ++w) T[w] = 29
        var E = ce ? new Uint8Array(259) : []
        for (_ = 0, w = 0; _ < j.length - 1; ++_) for (; w < j[_ + 1]; ++w) E[w] = _
        function S(U, R) {
          for (var P = 0; P < U.length; ) {
            var I = Math.min(65535, U.length - P),
              X = P + I == U.length
            for (R.write_shift(1, +X), R.write_shift(2, I), R.write_shift(2, ~I & 65535); I-- > 0; )
              R[R.l++] = U[P++]
          }
          return R.l
        }
        function N(U, R) {
          for (var P = 0, I = 0, X = ce ? new Uint16Array(32768) : []; I < U.length; ) {
            var re = Math.min(65535, U.length - I)
            if (re < 10) {
              for (
                P = de(R, P, +(I + re == U.length)),
                  P & 7 && (P += 8 - (P & 7)),
                  R.l = (P / 8) | 0,
                  R.write_shift(2, re),
                  R.write_shift(2, ~re & 65535);
                re-- > 0;

              )
                R[R.l++] = U[I++]
              P = R.l * 8
              continue
            }
            P = de(R, P, +(I + re == U.length) + 2)
            for (var fe = 0; re-- > 0; ) {
              var J = U[I]
              fe = ((fe << 5) ^ J) & 32767
              var se = -1,
                _e = 0
              if ((se = X[fe]) && ((se |= I & -32768), se > I && (se -= 32768), se < I))
                for (; U[se + _e] == U[I + _e] && _e < 250; ) ++_e
              if (_e > 2) {
                ;(J = E[_e]),
                  J <= 22
                    ? (P = Ke(R, P, ne[J + 1] >> 1) - 1)
                    : (Ke(R, P, 3), (P += 5), Ke(R, P, ne[J - 23] >> 5), (P += 3))
                var qe = J < 8 ? 0 : (J - 4) >> 2
                qe > 0 && (Mr(R, P, _e - j[J]), (P += qe)),
                  (J = T[I - se]),
                  (P = Ke(R, P, ne[J] >> 3)),
                  (P -= 3)
                var Je = J < 4 ? 0 : (J - 2) >> 1
                Je > 0 && (Mr(R, P, I - se - ue[J]), (P += Je))
                for (var yt = 0; yt < _e; ++yt)
                  (X[fe] = I & 32767), (fe = ((fe << 5) ^ U[I]) & 32767), ++I
                re -= _e - 1
              } else
                J <= 143 ? (J = J + 48) : (P = Ir(R, P, 1)),
                  (P = Ke(R, P, ne[J])),
                  (X[fe] = I & 32767),
                  ++I
            }
            P = Ke(R, P, 0) - 1
          }
          return (R.l = ((P + 7) / 8) | 0), R.l
        }
        return function (R, P) {
          return R.length < 8 ? S(R, P) : N(R, P)
        }
      })()
      function Lh(x) {
        var T = B(50 + Math.floor(x.length * 1.1)),
          _ = lF(x, T)
        return T.slice(0, _)
      }
      var Bh = ce ? new Uint16Array(32768) : pr(32768),
        Uh = ce ? new Uint16Array(32768) : pr(32768),
        Wh = ce ? new Uint16Array(128) : pr(128),
        Hh = 1,
        Yh = 1
      function cF(x, T) {
        var _ = Ve(x, T) + 257
        T += 5
        var w = Ve(x, T) + 1
        T += 5
        var E = Kt(x, T) + 4
        T += 4
        for (
          var S = 0,
            N = ce ? new Uint8Array(19) : pr(19),
            U = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            R = 1,
            P = ce ? new Uint8Array(8) : pr(8),
            I = ce ? new Uint8Array(8) : pr(8),
            X = N.length,
            re = 0;
          re < E;
          ++re
        )
          (N[O[re]] = S = Oe(x, T)), R < S && (R = S), P[S]++, (T += 3)
        var fe = 0
        for (P[0] = 0, re = 1; re <= R; ++re) I[re] = fe = (fe + P[re - 1]) << 1
        for (re = 0; re < X; ++re) (fe = N[re]) != 0 && (U[re] = I[fe]++)
        var J = 0
        for (re = 0; re < X; ++re)
          if (((J = N[re]), J != 0)) {
            fe = ne[U[re]] >> (8 - J)
            for (var se = (1 << (7 - J)) - 1; se >= 0; --se)
              Wh[fe | (se << J)] = (J & 7) | (re << 3)
          }
        var _e = []
        for (R = 1; _e.length < _ + w; )
          switch (((fe = Wh[le(x, T)]), (T += fe & 7), (fe >>>= 3))) {
            case 16:
              for (S = 3 + gt(x, T), T += 2, fe = _e[_e.length - 1]; S-- > 0; ) _e.push(fe)
              break
            case 17:
              for (S = 3 + Oe(x, T), T += 3; S-- > 0; ) _e.push(0)
              break
            case 18:
              for (S = 11 + le(x, T), T += 7; S-- > 0; ) _e.push(0)
              break
            default:
              _e.push(fe), R < fe && (R = fe)
              break
          }
        var qe = _e.slice(0, _),
          Je = _e.slice(_)
        for (re = _; re < 286; ++re) qe[re] = 0
        for (re = w; re < 30; ++re) Je[re] = 0
        return (Hh = _s(qe, Bh, 286)), (Yh = _s(Je, Uh, 30)), T
      }
      function uF(x, T) {
        if (x[0] == 3 && !(x[1] & 3)) return [un(T), 2]
        for (
          var _ = 0, w = 0, E = Yl(T || 1 << 18), S = 0, N = E.length >>> 0, U = 0, R = 0;
          (w & 1) == 0;

        ) {
          if (((w = Oe(x, _)), (_ += 3), w >>> 1 == 0)) {
            _ & 7 && (_ += 8 - (_ & 7))
            var P = x[_ >>> 3] | (x[(_ >>> 3) + 1] << 8)
            if (((_ += 32), P > 0))
              for (!T && N < S + P && ((E = Eo(E, S + P)), (N = E.length)); P-- > 0; )
                (E[S++] = x[_ >>> 3]), (_ += 8)
            continue
          } else w >> 1 == 1 ? ((U = 9), (R = 5)) : ((_ = cF(x, _)), (U = Hh), (R = Yh))
          for (;;) {
            !T && N < S + 32767 && ((E = Eo(E, S + 32767)), (N = E.length))
            var I = Dt(x, _, U),
              X = w >>> 1 == 1 ? So[I] : Bh[I]
            if (((_ += X & 15), (X >>>= 4), ((X >>> 8) & 255) === 0)) E[S++] = X
            else {
              if (X == 256) break
              X -= 257
              var re = X < 8 ? 0 : (X - 4) >> 2
              re > 5 && (re = 0)
              var fe = S + j[X]
              re > 0 && ((fe += Dt(x, _, re)), (_ += re)),
                (I = Dt(x, _, R)),
                (X = w >>> 1 == 1 ? yo[I] : Uh[I]),
                (_ += X & 15),
                (X >>>= 4)
              var J = X < 4 ? 0 : (X - 2) >> 1,
                se = ue[X]
              for (
                J > 0 && ((se += Dt(x, _, J)), (_ += J)),
                  !T && N < fe && ((E = Eo(E, fe + 100)), (N = E.length));
                S < fe;

              )
                (E[S] = E[S - se]), ++S
            }
          }
        }
        return T ? [E, (_ + 7) >>> 3] : [E.slice(0, S), (_ + 7) >>> 3]
      }
      function $h(x, T) {
        var _ = x.slice(x.l || 0),
          w = uF(_, T)
        return (x.l += w[1]), w[0]
      }
      function jh(x, T) {
        if (x) typeof console < 'u' && console.error(T)
        else throw new Error(T)
      }
      function Vh(x, T) {
        var _ = x
        Ut(_, 0)
        var w = [],
          E = [],
          S = { FileIndex: w, FullPaths: E }
        k(S, { root: T.root })
        for (
          var N = _.length - 4;
          (_[N] != 80 || _[N + 1] != 75 || _[N + 2] != 5 || _[N + 3] != 6) && N >= 0;

        )
          --N
        ;(_.l = N + 4), (_.l += 4)
        var U = _.read_shift(2)
        _.l += 6
        var R = _.read_shift(4)
        for (_.l = R, N = 0; N < U; ++N) {
          _.l += 20
          var P = _.read_shift(4),
            I = _.read_shift(4),
            X = _.read_shift(2),
            re = _.read_shift(2),
            fe = _.read_shift(2)
          _.l += 8
          var J = _.read_shift(4),
            se = o(_.slice(_.l + X, _.l + X + re))
          _.l += X + re + fe
          var _e = _.l
          ;(_.l = J + 4), hF(_, P, I, S, se), (_.l = _e)
        }
        return S
      }
      function hF(x, T, _, w, E) {
        x.l += 2
        var S = x.read_shift(2),
          N = x.read_shift(2),
          U = s(x)
        if (S & 8257) throw new Error('Unsupported ZIP encryption')
        for (
          var R = x.read_shift(4),
            P = x.read_shift(4),
            I = x.read_shift(4),
            X = x.read_shift(2),
            re = x.read_shift(2),
            fe = '',
            J = 0;
          J < X;
          ++J
        )
          fe += String.fromCharCode(x[x.l++])
        if (re) {
          var se = o(x.slice(x.l, x.l + re))
          ;(se[21589] || {}).mt && (U = se[21589].mt),
            ((E || {})[21589] || {}).mt && (U = E[21589].mt)
        }
        x.l += re
        var _e = x.slice(x.l, x.l + P)
        switch (N) {
          case 8:
            _e = M(x, I)
            break
          case 0:
            break
          default:
            throw new Error('Unsupported ZIP Compression method ' + N)
        }
        var qe = !1
        S & 8 &&
          ((R = x.read_shift(4)),
          R == 134695760 && ((R = x.read_shift(4)), (qe = !0)),
          (P = x.read_shift(4)),
          (I = x.read_shift(4))),
          P != T && jh(qe, 'Bad compressed size: ' + T + ' != ' + P),
          I != _ && jh(qe, 'Bad uncompressed size: ' + _ + ' != ' + I),
          Ao(w, fe, _e, { unsafe: !0, mt: U })
      }
      function dF(x, T) {
        var _ = T || {},
          w = [],
          E = [],
          S = B(1),
          N = _.compression ? 8 : 0,
          U = 0,
          R = 0,
          P = 0,
          I = 0,
          X = 0,
          re = x.FullPaths[0],
          fe = re,
          J = x.FileIndex[0],
          se = [],
          _e = 0
        for (R = 1; R < x.FullPaths.length; ++R)
          if (
            ((fe = x.FullPaths[R].slice(re.length)),
            (J = x.FileIndex[R]),
            !(!J.size || !J.content || fe == 'Sh33tJ5'))
          ) {
            var qe = I,
              Je = B(fe.length)
            for (P = 0; P < fe.length; ++P) Je.write_shift(1, fe.charCodeAt(P) & 127)
            ;(Je = Je.slice(0, Je.l)), (se[X] = cw.buf(J.content, 0))
            var yt = J.content
            N == 8 && (yt = D(yt)),
              (S = B(30)),
              S.write_shift(4, 67324752),
              S.write_shift(2, 20),
              S.write_shift(2, U),
              S.write_shift(2, N),
              J.mt ? i(S, J.mt) : S.write_shift(4, 0),
              S.write_shift(-4, se[X]),
              S.write_shift(4, yt.length),
              S.write_shift(4, J.content.length),
              S.write_shift(2, Je.length),
              S.write_shift(2, 0),
              (I += S.length),
              w.push(S),
              (I += Je.length),
              w.push(Je),
              (I += yt.length),
              w.push(yt),
              (S = B(46)),
              S.write_shift(4, 33639248),
              S.write_shift(2, 0),
              S.write_shift(2, 20),
              S.write_shift(2, U),
              S.write_shift(2, N),
              S.write_shift(4, 0),
              S.write_shift(-4, se[X]),
              S.write_shift(4, yt.length),
              S.write_shift(4, J.content.length),
              S.write_shift(2, Je.length),
              S.write_shift(2, 0),
              S.write_shift(2, 0),
              S.write_shift(2, 0),
              S.write_shift(2, 0),
              S.write_shift(4, 0),
              S.write_shift(4, qe),
              (_e += S.l),
              E.push(S),
              (_e += Je.length),
              E.push(Je),
              ++X
          }
        return (
          (S = B(22)),
          S.write_shift(4, 101010256),
          S.write_shift(2, 0),
          S.write_shift(2, 0),
          S.write_shift(2, X),
          S.write_shift(2, X),
          S.write_shift(4, _e),
          S.write_shift(4, I),
          S.write_shift(2, 0),
          ht([ht(w), ht(E), S])
        )
      }
      var gs = {
        htm: 'text/html',
        xml: 'text/xml',
        gif: 'image/gif',
        jpg: 'image/jpeg',
        png: 'image/png',
        mso: 'application/x-mso',
        thmx: 'application/vnd.ms-officetheme',
        sh33tj5: 'application/octet-stream'
      }
      function pF(x, T) {
        if (x.ctype) return x.ctype
        var _ = x.name || '',
          w = _.match(/\.([^\.]+)$/)
        return (w && gs[w[1]]) || (T && ((w = (_ = T).match(/[\.\\]([^\.\\])+$/)), w && gs[w[1]]))
          ? gs[w[1]]
          : 'application/octet-stream'
      }
      function xF(x) {
        for (var T = Aa(x), _ = [], w = 0; w < T.length; w += 76) _.push(T.slice(w, w + 76))
        return (
          _.join(`\r
`) +
          `\r
`
        )
      }
      function mF(x) {
        var T = x.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function (P) {
          var I = P.charCodeAt(0).toString(16).toUpperCase()
          return '=' + (I.length == 1 ? '0' + I : I)
        })
        ;(T = T.replace(/ $/gm, '=20').replace(/\t$/gm, '=09')),
          T.charAt(0) ==
            `
` && (T = '=0D' + T.slice(1)),
          (T = T.replace(/\r(?!\n)/gm, '=0D')
            .replace(
              /\n\n/gm,
              `
=0A`
            )
            .replace(/([^\r\n])\n/gm, '$1=0A'))
        for (
          var _ = [],
            w = T.split(`\r
`),
            E = 0;
          E < w.length;
          ++E
        ) {
          var S = w[E]
          if (S.length == 0) {
            _.push('')
            continue
          }
          for (var N = 0; N < S.length; ) {
            var U = 76,
              R = S.slice(N, N + U)
            R.charAt(U - 1) == '='
              ? U--
              : R.charAt(U - 2) == '='
              ? (U -= 2)
              : R.charAt(U - 3) == '=' && (U -= 3),
              (R = S.slice(N, N + U)),
              (N += U),
              N < S.length && (R += '='),
              _.push(R)
          }
        }
        return _.join(`\r
`)
      }
      function _F(x) {
        for (var T = [], _ = 0; _ < x.length; ++_) {
          for (var w = x[_]; _ <= x.length && w.charAt(w.length - 1) == '='; )
            w = w.slice(0, w.length - 1) + x[++_]
          T.push(w)
        }
        for (var E = 0; E < T.length; ++E)
          T[E] = T[E].replace(/[=][0-9A-Fa-f]{2}/g, function (S) {
            return String.fromCharCode(parseInt(S.slice(1), 16))
          })
        return er(
          T.join(`\r
`)
        )
      }
      function gF(x, T, _) {
        for (var w = '', E = '', S = '', N, U = 0; U < 10; ++U) {
          var R = T[U]
          if (!R || R.match(/^\s*$/)) break
          var P = R.match(/^(.*?):\s*([^\s].*)$/)
          if (P)
            switch (P[1].toLowerCase()) {
              case 'content-location':
                w = P[2].trim()
                break
              case 'content-type':
                S = P[2].trim()
                break
              case 'content-transfer-encoding':
                E = P[2].trim()
                break
            }
        }
        switch ((++U, E.toLowerCase())) {
          case 'base64':
            N = er(yr(T.slice(U).join('')))
            break
          case 'quoted-printable':
            N = _F(T.slice(U))
            break
          default:
            throw new Error('Unsupported Content-Transfer-Encoding ' + E)
        }
        var I = Ao(x, w.slice(_.length), N, { unsafe: !0 })
        S && (I.ctype = S)
      }
      function vF(x, T) {
        if (ye(x.slice(0, 13)).toLowerCase() != 'mime-version:')
          throw new Error('Unsupported MAD header')
        var _ = (T && T.root) || '',
          w = (ke && Buffer.isBuffer(x) ? x.toString('binary') : ye(x)).split(`\r
`),
          E = 0,
          S = ''
        for (E = 0; E < w.length; ++E)
          if (
            ((S = w[E]),
            !!/^Content-Location:/i.test(S) &&
              ((S = S.slice(S.indexOf('file'))),
              _ || (_ = S.slice(0, S.lastIndexOf('/') + 1)),
              S.slice(0, _.length) != _))
          )
            for (
              ;
              _.length > 0 &&
              ((_ = _.slice(0, _.length - 1)),
              (_ = _.slice(0, _.lastIndexOf('/') + 1)),
              S.slice(0, _.length) != _);

            );
        var N = (w[1] || '').match(/boundary="(.*?)"/)
        if (!N) throw new Error('MAD cannot find boundary')
        var U = '--' + (N[1] || ''),
          R = [],
          P = [],
          I = { FileIndex: R, FullPaths: P }
        k(I)
        var X,
          re = 0
        for (E = 0; E < w.length; ++E) {
          var fe = w[E]
          ;(fe !== U && fe !== U + '--') || (re++ && gF(I, w.slice(X, E), _), (X = E))
        }
        return I
      }
      function wF(x, T) {
        var _ = T || {},
          w = _.boundary || 'SheetJS'
        w = '------=' + w
        for (
          var E = [
              'MIME-Version: 1.0',
              'Content-Type: multipart/related; boundary="' + w.slice(2) + '"',
              '',
              '',
              ''
            ],
            S = x.FullPaths[0],
            N = S,
            U = x.FileIndex[0],
            R = 1;
          R < x.FullPaths.length;
          ++R
        )
          if (
            ((N = x.FullPaths[R].slice(S.length)),
            (U = x.FileIndex[R]),
            !(!U.size || !U.content || N == 'Sh33tJ5'))
          ) {
            N = N.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function (_e) {
              return '_x' + _e.charCodeAt(0).toString(16) + '_'
            }).replace(/[\u0080-\uFFFF]/g, function (_e) {
              return '_u' + _e.charCodeAt(0).toString(16) + '_'
            })
            for (
              var P = U.content,
                I = ke && Buffer.isBuffer(P) ? P.toString('binary') : ye(P),
                X = 0,
                re = Math.min(1024, I.length),
                fe = 0,
                J = 0;
              J <= re;
              ++J
            )
              (fe = I.charCodeAt(J)) >= 32 && fe < 128 && ++X
            var se = X >= (re * 4) / 5
            E.push(w),
              E.push('Content-Location: ' + (_.root || 'file:///C:/SheetJS/') + N),
              E.push('Content-Transfer-Encoding: ' + (se ? 'quoted-printable' : 'base64')),
              E.push('Content-Type: ' + pF(U, N)),
              E.push(''),
              E.push(se ? mF(I) : xF(I))
          }
        return (
          E.push(
            w +
              `--\r
`
          ),
          E.join(`\r
`)
        )
      }
      function TF(x) {
        var T = {}
        return k(T, x), T
      }
      function Ao(x, T, _, w) {
        var E = w && w.unsafe
        E || k(x)
        var S = !E && Ue.find(x, T)
        if (!S) {
          var N = x.FullPaths[0]
          T.slice(0, N.length) == N
            ? (N = T)
            : (N.slice(-1) != '/' && (N += '/'), (N = (N + T).replace('//', '/'))),
            (S = { name: a(T), type: 2 }),
            x.FileIndex.push(S),
            x.FullPaths.push(N),
            E || Ue.utils.cfb_gc(x)
        }
        return (
          (S.content = _),
          (S.size = _ ? _.length : 0),
          w && (w.CLSID && (S.clsid = w.CLSID), w.mt && (S.mt = w.mt), w.ct && (S.ct = w.ct)),
          S
        )
      }
      function EF(x, T) {
        k(x)
        var _ = Ue.find(x, T)
        if (_) {
          for (var w = 0; w < x.FileIndex.length; ++w)
            if (x.FileIndex[w] == _) return x.FileIndex.splice(w, 1), x.FullPaths.splice(w, 1), !0
        }
        return !1
      }
      function SF(x, T, _) {
        k(x)
        var w = Ue.find(x, T)
        if (w) {
          for (var E = 0; E < x.FileIndex.length; ++E)
            if (x.FileIndex[E] == w) return (x.FileIndex[E].name = a(_)), (x.FullPaths[E] = _), !0
        }
        return !1
      }
      function yF(x) {
        b(x, !0)
      }
      return (
        (t.find = G),
        (t.read = ie),
        (t.parse = c),
        (t.write = ot),
        (t.writeFile = Se),
        (t.utils = {
          cfb_new: TF,
          cfb_add: Ao,
          cfb_del: EF,
          cfb_mov: SF,
          cfb_gc: yF,
          ReadShift: ba,
          CheckField: Mc,
          prep_blob: Ut,
          bconcat: ht,
          use_zlib: y,
          _deflateRaw: Lh,
          _inflateRaw: $h,
          consts: te
        }),
        t
      )
    })()
  function uw(e) {
    return typeof e == 'string' ? bi(e) : Array.isArray(e) ? Lv(e) : e
  }
  function ka(e, t, r) {
    if (typeof Deno < 'u') {
      if (r && typeof t == 'string')
        switch (r) {
          case 'utf8':
            t = new TextEncoder(r).encode(t)
            break
          case 'binary':
            t = bi(t)
            break
          default:
            throw new Error('Unsupported encoding ' + r)
        }
      return Deno.writeFileSync(e, t)
    }
    var n = r == 'utf8' ? Dr(t) : t
    if (typeof IE_SaveFile < 'u') return IE_SaveFile(n, e)
    if (typeof Blob < 'u') {
      var a = new Blob([uw(n)], { type: 'application/octet-stream' })
      if (typeof navigator < 'u' && navigator.msSaveBlob) return navigator.msSaveBlob(a, e)
      if (typeof saveAs < 'u') return saveAs(a, e)
      if (
        typeof URL < 'u' &&
        typeof document < 'u' &&
        document.createElement &&
        URL.createObjectURL
      ) {
        var i = URL.createObjectURL(a)
        if (typeof chrome == 'object' && typeof (chrome.downloads || {}).download == 'function')
          return (
            URL.revokeObjectURL &&
              typeof setTimeout < 'u' &&
              setTimeout(function () {
                URL.revokeObjectURL(i)
              }, 6e4),
            chrome.downloads.download({ url: i, filename: e, saveAs: !0 })
          )
        var s = document.createElement('a')
        if (s.download != null)
          return (
            (s.download = e),
            (s.href = i),
            document.body.appendChild(s),
            s.click(),
            document.body.removeChild(s),
            URL.revokeObjectURL &&
              typeof setTimeout < 'u' &&
              setTimeout(function () {
                URL.revokeObjectURL(i)
              }, 6e4),
            i
          )
      }
    }
    if (typeof $ < 'u' && typeof File < 'u' && typeof Folder < 'u')
      try {
        var o = File(e)
        return (
          o.open('w'),
          (o.encoding = 'binary'),
          Array.isArray(t) && (t = Oa(t)),
          o.write(t),
          o.close(),
          t
        )
      } catch (l) {
        if (!l.message || !l.message.match(/onstruct/)) throw l
      }
    throw new Error('cannot save file ' + e)
  }
  function dt(e) {
    for (var t = Object.keys(e), r = [], n = 0; n < t.length; ++n)
      Object.prototype.hasOwnProperty.call(e, t[n]) && r.push(t[n])
    return r
  }
  function oc(e, t) {
    for (var r = [], n = dt(e), a = 0; a !== n.length; ++a)
      r[e[n[a]][t]] == null && (r[e[n[a]][t]] = n[a])
    return r
  }
  function C0(e) {
    for (var t = [], r = dt(e), n = 0; n !== r.length; ++n) t[e[r[n]]] = r[n]
    return t
  }
  function Yi(e) {
    for (var t = [], r = dt(e), n = 0; n !== r.length; ++n) t[e[r[n]]] = parseInt(r[n], 10)
    return t
  }
  function hw(e) {
    for (var t = [], r = dt(e), n = 0; n !== r.length; ++n)
      t[e[r[n]]] == null && (t[e[r[n]]] = []), t[e[r[n]]].push(r[n])
    return t
  }
  var $i = new Date(1899, 11, 30, 0, 0, 0)
  function Rt(e, t) {
    var r = e.getTime()
    t && (r -= 1462 * 24 * 60 * 60 * 1e3)
    var n = $i.getTime() + (e.getTimezoneOffset() - $i.getTimezoneOffset()) * 6e4
    return (r - n) / (24 * 60 * 60 * 1e3)
  }
  var fc = new Date(),
    dw = $i.getTime() + (fc.getTimezoneOffset() - $i.getTimezoneOffset()) * 6e4,
    lc = fc.getTimezoneOffset()
  function cc(e) {
    var t = new Date()
    return (
      t.setTime(e * 24 * 60 * 60 * 1e3 + dw),
      t.getTimezoneOffset() !== lc && t.setTime(t.getTime() + (t.getTimezoneOffset() - lc) * 6e4),
      t
    )
  }
  var uc = new Date('2017-02-19T19:06:09.000Z'),
    hc = isNaN(uc.getFullYear()) ? new Date('2/19/17') : uc,
    pw = hc.getFullYear() == 2017
  function Ft(e, t) {
    var r = new Date(e)
    if (pw)
      return (
        t > 0
          ? r.setTime(r.getTime() + r.getTimezoneOffset() * 60 * 1e3)
          : t < 0 && r.setTime(r.getTime() - r.getTimezoneOffset() * 60 * 1e3),
        r
      )
    if (e instanceof Date) return e
    if (hc.getFullYear() == 1917 && !isNaN(r.getFullYear())) {
      var n = r.getFullYear()
      return e.indexOf('' + n) > -1 || r.setFullYear(r.getFullYear() + 100), r
    }
    var a = e.match(/\d+/g) || ['2017', '2', '19', '0', '0', '0'],
      i = new Date(+a[0], +a[1] - 1, +a[2], +a[3] || 0, +a[4] || 0, +a[5] || 0)
    return e.indexOf('Z') > -1 && (i = new Date(i.getTime() - i.getTimezoneOffset() * 60 * 1e3)), i
  }
  function ji(e, t) {
    if (ke && Buffer.isBuffer(e)) {
      if (t) {
        if (e[0] == 255 && e[1] == 254) return Dr(e.slice(2).toString('utf16le'))
        if (e[1] == 254 && e[2] == 255) return Dr(bv(e.slice(2).toString('binary')))
      }
      return e.toString('binary')
    }
    if (typeof TextDecoder < 'u')
      try {
        if (t) {
          if (e[0] == 255 && e[1] == 254) return Dr(new TextDecoder('utf-16le').decode(e.slice(2)))
          if (e[0] == 254 && e[1] == 255) return Dr(new TextDecoder('utf-16be').decode(e.slice(2)))
        }
        var r = {
          '\u20AC': '\x80',
          '\u201A': '\x82',
          ƒ: '\x83',
          '\u201E': '\x84',
          '\u2026': '\x85',
          '\u2020': '\x86',
          '\u2021': '\x87',
          '\u02C6': '\x88',
          '\u2030': '\x89',
          Š: '\x8A',
          '\u2039': '\x8B',
          Œ: '\x8C',
          Ž: '\x8E',
          '\u2018': '\x91',
          '\u2019': '\x92',
          '\u201C': '\x93',
          '\u201D': '\x94',
          '\u2022': '\x95',
          '\u2013': '\x96',
          '\u2014': '\x97',
          '\u02DC': '\x98',
          '\u2122': '\x99',
          š: '\x9A',
          '\u203A': '\x9B',
          œ: '\x9C',
          ž: '\x9E',
          Ÿ: '\x9F'
        }
        return (
          Array.isArray(e) && (e = new Uint8Array(e)),
          new TextDecoder('latin1')
            .decode(e)
            .replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function (i) {
              return r[i] || i
            })
        )
      } catch {}
    for (var n = [], a = 0; a != e.length; ++a) n.push(String.fromCharCode(e[a]))
    return n.join('')
  }
  function Nt(e) {
    if (typeof JSON < 'u' && !Array.isArray(e)) return JSON.parse(JSON.stringify(e))
    if (typeof e != 'object' || e == null) return e
    if (e instanceof Date) return new Date(e.getTime())
    var t = {}
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = Nt(e[r]))
    return t
  }
  function Ze(e, t) {
    for (var r = ''; r.length < t; ) r += e
    return r
  }
  function Cr(e) {
    var t = Number(e)
    if (!isNaN(t)) return isFinite(t) ? t : NaN
    if (!/\d/.test(e)) return t
    var r = 1,
      n = e
        .replace(/([\d]),([\d])/g, '$1$2')
        .replace(/[$]/g, '')
        .replace(/[%]/g, function () {
          return (r *= 100), ''
        })
    return !isNaN((t = Number(n))) ||
      ((n = n.replace(/[(](.*)[)]/, function (a, i) {
        return (r = -r), i
      })),
      !isNaN((t = Number(n))))
      ? t / r
      : t
  }
  var xw = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
  ]
  function Ra(e) {
    var t = new Date(e),
      r = new Date(NaN),
      n = t.getYear(),
      a = t.getMonth(),
      i = t.getDate()
    if (isNaN(i)) return r
    var s = e.toLowerCase()
    if (s.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
      if (
        ((s = s.replace(/[^a-z]/g, '').replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, '')),
        s.length > 3 && xw.indexOf(s) == -1)
      )
        return r
    } else if (s.match(/[a-z]/)) return r
    return n < 0 || n > 8099
      ? r
      : (a > 0 || i > 1) && n != 101
      ? t
      : e.match(/[^-0-9:,\/\\]/)
      ? r
      : t
  }
  function ve(e, t, r) {
    if (e.FullPaths) {
      if (typeof r == 'string') {
        var n
        return ke ? (n = Ar(r)) : (n = Bv(r)), Ue.utils.cfb_add(e, t, n)
      }
      Ue.utils.cfb_add(e, t, r)
    } else e.file(t, r)
  }
  function D0() {
    return Ue.utils.cfb_new()
  }
  var et = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`,
    mw = { '&quot;': '"', '&apos;': "'", '&gt;': '>', '&lt;': '<', '&amp;': '&' },
    k0 = C0(mw),
    R0 = /[&<>'"]/g,
    _w = /[\u0000-\u0008\u000b-\u001f]/g
  function Ne(e) {
    var t = e + ''
    return t
      .replace(R0, function (r) {
        return k0[r]
      })
      .replace(_w, function (r) {
        return '_x' + ('000' + r.charCodeAt(0).toString(16)).slice(-4) + '_'
      })
  }
  function dc(e) {
    return Ne(e).replace(/ /g, '_x0020_')
  }
  var pc = /[\u0000-\u001f]/g
  function gw(e) {
    var t = e + ''
    return t
      .replace(R0, function (r) {
        return k0[r]
      })
      .replace(/\n/g, '<br/>')
      .replace(pc, function (r) {
        return '&#x' + ('000' + r.charCodeAt(0).toString(16)).slice(-4) + ';'
      })
  }
  function vw(e) {
    var t = e + ''
    return t
      .replace(R0, function (r) {
        return k0[r]
      })
      .replace(pc, function (r) {
        return '&#x' + r.charCodeAt(0).toString(16).toUpperCase() + ';'
      })
  }
  function ww(e) {
    return e.replace(/(\r\n|[\r\n])/g, '&#10;')
  }
  function Tw(e) {
    switch (e) {
      case 1:
      case !0:
      case '1':
      case 'true':
      case 'TRUE':
        return !0
      default:
        return !1
    }
  }
  function N0(e) {
    for (var t = '', r = 0, n = 0, a = 0, i = 0, s = 0, o = 0; r < e.length; ) {
      if (((n = e.charCodeAt(r++)), n < 128)) {
        t += String.fromCharCode(n)
        continue
      }
      if (((a = e.charCodeAt(r++)), n > 191 && n < 224)) {
        ;(s = (n & 31) << 6), (s |= a & 63), (t += String.fromCharCode(s))
        continue
      }
      if (((i = e.charCodeAt(r++)), n < 240)) {
        t += String.fromCharCode(((n & 15) << 12) | ((a & 63) << 6) | (i & 63))
        continue
      }
      ;(s = e.charCodeAt(r++)),
        (o = (((n & 7) << 18) | ((a & 63) << 12) | ((i & 63) << 6) | (s & 63)) - 65536),
        (t += String.fromCharCode(55296 + ((o >>> 10) & 1023))),
        (t += String.fromCharCode(56320 + (o & 1023)))
    }
    return t
  }
  function xc(e) {
    var t = un(2 * e.length),
      r,
      n,
      a = 1,
      i = 0,
      s = 0,
      o
    for (n = 0; n < e.length; n += a)
      (a = 1),
        (o = e.charCodeAt(n)) < 128
          ? (r = o)
          : o < 224
          ? ((r = (o & 31) * 64 + (e.charCodeAt(n + 1) & 63)), (a = 2))
          : o < 240
          ? ((r = (o & 15) * 4096 + (e.charCodeAt(n + 1) & 63) * 64 + (e.charCodeAt(n + 2) & 63)),
            (a = 3))
          : ((a = 4),
            (r =
              (o & 7) * 262144 +
              (e.charCodeAt(n + 1) & 63) * 4096 +
              (e.charCodeAt(n + 2) & 63) * 64 +
              (e.charCodeAt(n + 3) & 63)),
            (r -= 65536),
            (s = 55296 + ((r >>> 10) & 1023)),
            (r = 56320 + (r & 1023))),
        s !== 0 && ((t[i++] = s & 255), (t[i++] = s >>> 8), (s = 0)),
        (t[i++] = r % 256),
        (t[i++] = r >>> 8)
    return t.slice(0, i).toString('ucs2')
  }
  function mc(e) {
    return Ar(e, 'binary').toString('utf8')
  }
  var Vi = 'foo bar baz\xE2\x98\x83\xF0\x9F\x8D\xA3',
    Na = (ke && ((mc(Vi) == N0(Vi) && mc) || (xc(Vi) == N0(Vi) && xc))) || N0,
    Dr = ke
      ? function (e) {
          return Ar(e, 'utf8').toString('binary')
        }
      : function (e) {
          for (var t = [], r = 0, n = 0, a = 0; r < e.length; )
            switch (((n = e.charCodeAt(r++)), !0)) {
              case n < 128:
                t.push(String.fromCharCode(n))
                break
              case n < 2048:
                t.push(String.fromCharCode(192 + (n >> 6))),
                  t.push(String.fromCharCode(128 + (n & 63)))
                break
              case n >= 55296 && n < 57344:
                ;(n -= 55296),
                  (a = e.charCodeAt(r++) - 56320 + (n << 10)),
                  t.push(String.fromCharCode(240 + ((a >> 18) & 7))),
                  t.push(String.fromCharCode(144 + ((a >> 12) & 63))),
                  t.push(String.fromCharCode(128 + ((a >> 6) & 63))),
                  t.push(String.fromCharCode(128 + (a & 63)))
                break
              default:
                t.push(String.fromCharCode(224 + (n >> 12))),
                  t.push(String.fromCharCode(128 + ((n >> 6) & 63))),
                  t.push(String.fromCharCode(128 + (n & 63)))
            }
          return t.join('')
        },
    Ew = (function () {
      var e = [
        ['nbsp', ' '],
        ['middot', '\xB7'],
        ['quot', '"'],
        ['apos', "'"],
        ['gt', '>'],
        ['lt', '<'],
        ['amp', '&']
      ].map(function (t) {
        return [new RegExp('&' + t[0] + ';', 'ig'), t[1]]
      })
      return function (r) {
        for (
          var n = r
              .replace(/^[\t\n\r ]+/, '')
              .replace(/[\t\n\r ]+$/, '')
              .replace(/>\s+/g, '>')
              .replace(/\s+</g, '<')
              .replace(/[\t\n\r ]+/g, ' ')
              .replace(
                /<\s*[bB][rR]\s*\/?>/g,
                `
`
              )
              .replace(/<[^>]*>/g, ''),
            a = 0;
          a < e.length;
          ++a
        )
          n = n.replace(e[a][0], e[a][1])
        return n
      }
    })(),
    _c = /(^\s|\s$|\n)/
  function pt(e, t) {
    return '<' + e + (t.match(_c) ? ' xml:space="preserve"' : '') + '>' + t + '</' + e + '>'
  }
  function Pa(e) {
    return dt(e)
      .map(function (t) {
        return ' ' + t + '="' + e[t] + '"'
      })
      .join('')
  }
  function Q(e, t, r) {
    return (
      '<' +
      e +
      (r != null ? Pa(r) : '') +
      (t != null ? (t.match(_c) ? ' xml:space="preserve"' : '') + '>' + t + '</' + e : '/') +
      '>'
    )
  }
  function P0(e, t) {
    try {
      return e.toISOString().replace(/\.\d*/, '')
    } catch (r) {
      if (t) throw r
    }
    return ''
  }
  function Sw(e, t) {
    switch (typeof e) {
      case 'string':
        var r = Q('vt:lpwstr', Ne(e))
        return t && (r = r.replace(/&quot;/g, '_x0022_')), r
      case 'number':
        return Q((e | 0) == e ? 'vt:i4' : 'vt:r8', Ne(String(e)))
      case 'boolean':
        return Q('vt:bool', e ? 'true' : 'false')
    }
    if (e instanceof Date) return Q('vt:filetime', P0(e))
    throw new Error('Unable to serialize ' + e)
  }
  var lt = {
      CORE_PROPS: 'http://schemas.openxmlformats.org/package/2006/metadata/core-properties',
      CUST_PROPS: 'http://schemas.openxmlformats.org/officeDocument/2006/custom-properties',
      EXT_PROPS: 'http://schemas.openxmlformats.org/officeDocument/2006/extended-properties',
      CT: 'http://schemas.openxmlformats.org/package/2006/content-types',
      RELS: 'http://schemas.openxmlformats.org/package/2006/relationships',
      TCMNT: 'http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments',
      dc: 'http://purl.org/dc/elements/1.1/',
      dcterms: 'http://purl.org/dc/terms/',
      dcmitype: 'http://purl.org/dc/dcmitype/',
      mx: 'http://schemas.microsoft.com/office/mac/excel/2008/main',
      r: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
      sjs: 'http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties',
      vt: 'http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes',
      xsi: 'http://www.w3.org/2001/XMLSchema-instance',
      xsd: 'http://www.w3.org/2001/XMLSchema'
    },
    Un = [
      'http://schemas.openxmlformats.org/spreadsheetml/2006/main',
      'http://purl.oclc.org/ooxml/spreadsheetml/main',
      'http://schemas.microsoft.com/office/excel/2006/main',
      'http://schemas.microsoft.com/office/excel/2006/2'
    ],
    Lt = {
      o: 'urn:schemas-microsoft-com:office:office',
      x: 'urn:schemas-microsoft-com:office:excel',
      ss: 'urn:schemas-microsoft-com:office:spreadsheet',
      dt: 'uuid:C2F41010-65B3-11d1-A29F-00AA00C14882',
      mv: 'http://macVmlSchemaUri',
      v: 'urn:schemas-microsoft-com:vml',
      html: 'http://www.w3.org/TR/REC-html40'
    }
  function yw(e, t) {
    for (
      var r = 1 - 2 * (e[t + 7] >>> 7),
        n = ((e[t + 7] & 127) << 4) + ((e[t + 6] >>> 4) & 15),
        a = e[t + 6] & 15,
        i = 5;
      i >= 0;
      --i
    )
      a = a * 256 + e[t + i]
    return n == 2047
      ? a == 0
        ? r * (1 / 0)
        : NaN
      : (n == 0 ? (n = -1022) : ((n -= 1023), (a += Math.pow(2, 52))), r * Math.pow(2, n - 52) * a)
  }
  function Aw(e, t, r) {
    var n = (t < 0 || 1 / t == -1 / 0 ? 1 : 0) << 7,
      a = 0,
      i = 0,
      s = n ? -t : t
    isFinite(s)
      ? s == 0
        ? (a = i = 0)
        : ((a = Math.floor(Math.log(s) / Math.LN2)),
          (i = s * Math.pow(2, 52 - a)),
          a <= -1023 && (!isFinite(i) || i < Math.pow(2, 52))
            ? (a = -1022)
            : ((i -= Math.pow(2, 52)), (a += 1023)))
      : ((a = 2047), (i = isNaN(t) ? 26985 : 0))
    for (var o = 0; o <= 5; ++o, i /= 256) e[r + o] = i & 255
    ;(e[r + 6] = ((a & 15) << 4) | (i & 15)), (e[r + 7] = (a >> 4) | n)
  }
  var gc = function (e) {
      for (var t = [], r = 10240, n = 0; n < e[0].length; ++n)
        if (e[0][n])
          for (var a = 0, i = e[0][n].length; a < i; a += r)
            t.push.apply(t, e[0][n].slice(a, a + r))
      return t
    },
    vc = ke
      ? function (e) {
          return e[0].length > 0 && Buffer.isBuffer(e[0][0])
            ? Buffer.concat(
                e[0].map(function (t) {
                  return Buffer.isBuffer(t) ? t : Ar(t)
                })
              )
            : gc(e)
        }
      : gc,
    wc = function (e, t, r) {
      for (var n = [], a = t; a < r; a += 2) n.push(String.fromCharCode(Ma(e, a)))
      return n.join('').replace(Fa, '')
    },
    I0 = ke
      ? function (e, t, r) {
          return Buffer.isBuffer(e) ? e.toString('utf16le', t, r).replace(Fa, '') : wc(e, t, r)
        }
      : wc,
    Tc = function (e, t, r) {
      for (var n = [], a = t; a < t + r; ++a) n.push(('0' + e[a].toString(16)).slice(-2))
      return n.join('')
    },
    Ec = ke
      ? function (e, t, r) {
          return Buffer.isBuffer(e) ? e.toString('hex', t, t + r) : Tc(e, t, r)
        }
      : Tc,
    Sc = function (e, t, r) {
      for (var n = [], a = t; a < r; a++) n.push(String.fromCharCode(Wn(e, a)))
      return n.join('')
    },
    Ia = ke
      ? function (t, r, n) {
          return Buffer.isBuffer(t) ? t.toString('utf8', r, n) : Sc(t, r, n)
        }
      : Sc,
    yc = function (e, t) {
      var r = Bt(e, t)
      return r > 0 ? Ia(e, t + 4, t + 4 + r - 1) : ''
    },
    Ac = yc,
    Oc = function (e, t) {
      var r = Bt(e, t)
      return r > 0 ? Ia(e, t + 4, t + 4 + r - 1) : ''
    },
    Fc = Oc,
    Cc = function (e, t) {
      var r = 2 * Bt(e, t)
      return r > 0 ? Ia(e, t + 4, t + 4 + r - 1) : ''
    },
    Dc = Cc,
    kc = function (t, r) {
      var n = Bt(t, r)
      return n > 0 ? I0(t, r + 4, r + 4 + n) : ''
    },
    Rc = kc,
    Nc = function (e, t) {
      var r = Bt(e, t)
      return r > 0 ? Ia(e, t + 4, t + 4 + r) : ''
    },
    Pc = Nc,
    Ic = function (e, t) {
      return yw(e, t)
    },
    Gi = Ic,
    M0 = function (t) {
      return Array.isArray(t) || (typeof Uint8Array < 'u' && t instanceof Uint8Array)
    }
  ke &&
    ((Ac = function (t, r) {
      if (!Buffer.isBuffer(t)) return yc(t, r)
      var n = t.readUInt32LE(r)
      return n > 0 ? t.toString('utf8', r + 4, r + 4 + n - 1) : ''
    }),
    (Fc = function (t, r) {
      if (!Buffer.isBuffer(t)) return Oc(t, r)
      var n = t.readUInt32LE(r)
      return n > 0 ? t.toString('utf8', r + 4, r + 4 + n - 1) : ''
    }),
    (Dc = function (t, r) {
      if (!Buffer.isBuffer(t)) return Cc(t, r)
      var n = 2 * t.readUInt32LE(r)
      return t.toString('utf16le', r + 4, r + 4 + n - 1)
    }),
    (Rc = function (t, r) {
      if (!Buffer.isBuffer(t)) return kc(t, r)
      var n = t.readUInt32LE(r)
      return t.toString('utf16le', r + 4, r + 4 + n)
    }),
    (Pc = function (t, r) {
      if (!Buffer.isBuffer(t)) return Nc(t, r)
      var n = t.readUInt32LE(r)
      return t.toString('utf8', r + 4, r + 4 + n)
    }),
    (Gi = function (t, r) {
      return Buffer.isBuffer(t) ? t.readDoubleLE(r) : Ic(t, r)
    }),
    (M0 = function (t) {
      return (
        Buffer.isBuffer(t) ||
        Array.isArray(t) ||
        (typeof Uint8Array < 'u' && t instanceof Uint8Array)
      )
    }))
  var Wn = function (e, t) {
      return e[t]
    },
    Ma = function (e, t) {
      return e[t + 1] * (1 << 8) + e[t]
    },
    Ow = function (e, t) {
      var r = e[t + 1] * 256 + e[t]
      return r < 32768 ? r : (65535 - r + 1) * -1
    },
    Bt = function (e, t) {
      return e[t + 3] * (1 << 24) + (e[t + 2] << 16) + (e[t + 1] << 8) + e[t]
    },
    hn = function (e, t) {
      return (e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t]
    },
    Fw = function (e, t) {
      return (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]
    }
  function ba(e, t) {
    var r = '',
      n,
      a,
      i = [],
      s,
      o,
      l,
      f
    switch (t) {
      case 'dbcs':
        if (((f = this.l), ke && Buffer.isBuffer(this)))
          r = this.slice(this.l, this.l + 2 * e).toString('utf16le')
        else for (l = 0; l < e; ++l) (r += String.fromCharCode(Ma(this, f))), (f += 2)
        e *= 2
        break
      case 'utf8':
        r = Ia(this, this.l, this.l + e)
        break
      case 'utf16le':
        ;(e *= 2), (r = I0(this, this.l, this.l + e))
        break
      case 'wstr':
        return ba.call(this, e, 'dbcs')
      case 'lpstr-ansi':
        ;(r = Ac(this, this.l)), (e = 4 + Bt(this, this.l))
        break
      case 'lpstr-cp':
        ;(r = Fc(this, this.l)), (e = 4 + Bt(this, this.l))
        break
      case 'lpwstr':
        ;(r = Dc(this, this.l)), (e = 4 + 2 * Bt(this, this.l))
        break
      case 'lpp4':
        ;(e = 4 + Bt(this, this.l)), (r = Rc(this, this.l)), e & 2 && (e += 2)
        break
      case '8lpp4':
        ;(e = 4 + Bt(this, this.l)), (r = Pc(this, this.l)), e & 3 && (e += 4 - (e & 3))
        break
      case 'cstr':
        for (e = 0, r = ''; (s = Wn(this, this.l + e++)) !== 0; ) i.push(Mi(s))
        r = i.join('')
        break
      case '_wstr':
        for (e = 0, r = ''; (s = Ma(this, this.l + e)) !== 0; ) i.push(Mi(s)), (e += 2)
        ;(e += 2), (r = i.join(''))
        break
      case 'dbcs-cont':
        for (r = '', f = this.l, l = 0; l < e; ++l) {
          if (this.lens && this.lens.indexOf(f) !== -1)
            return (
              (s = Wn(this, f)),
              (this.l = f + 1),
              (o = ba.call(this, e - l, s ? 'dbcs-cont' : 'sbcs-cont')),
              i.join('') + o
            )
          i.push(Mi(Ma(this, f))), (f += 2)
        }
        ;(r = i.join('')), (e *= 2)
        break
      case 'cpstr':
      case 'sbcs-cont':
        for (r = '', f = this.l, l = 0; l != e; ++l) {
          if (this.lens && this.lens.indexOf(f) !== -1)
            return (
              (s = Wn(this, f)),
              (this.l = f + 1),
              (o = ba.call(this, e - l, s ? 'dbcs-cont' : 'sbcs-cont')),
              i.join('') + o
            )
          i.push(Mi(Wn(this, f))), (f += 1)
        }
        r = i.join('')
        break
      default:
        switch (e) {
          case 1:
            return (n = Wn(this, this.l)), this.l++, n
          case 2:
            return (n = (t === 'i' ? Ow : Ma)(this, this.l)), (this.l += 2), n
          case 4:
          case -4:
            return t === 'i' || (this[this.l + 3] & 128) === 0
              ? ((n = (e > 0 ? hn : Fw)(this, this.l)), (this.l += 4), n)
              : ((a = Bt(this, this.l)), (this.l += 4), a)
          case 8:
          case -8:
            if (t === 'f')
              return (
                e == 8
                  ? (a = Gi(this, this.l))
                  : (a = Gi(
                      [
                        this[this.l + 7],
                        this[this.l + 6],
                        this[this.l + 5],
                        this[this.l + 4],
                        this[this.l + 3],
                        this[this.l + 2],
                        this[this.l + 1],
                        this[this.l + 0]
                      ],
                      0
                    )),
                (this.l += 8),
                a
              )
            e = 8
          case 16:
            r = Ec(this, this.l, e)
            break
        }
    }
    return (this.l += e), r
  }
  var Cw = function (e, t, r) {
      ;(e[r] = t & 255),
        (e[r + 1] = (t >>> 8) & 255),
        (e[r + 2] = (t >>> 16) & 255),
        (e[r + 3] = (t >>> 24) & 255)
    },
    Dw = function (e, t, r) {
      ;(e[r] = t & 255),
        (e[r + 1] = (t >> 8) & 255),
        (e[r + 2] = (t >> 16) & 255),
        (e[r + 3] = (t >> 24) & 255)
    },
    kw = function (e, t, r) {
      ;(e[r] = t & 255), (e[r + 1] = (t >>> 8) & 255)
    }
  function Rw(e, t, r) {
    var n = 0,
      a = 0
    if (r === 'dbcs') {
      for (a = 0; a != t.length; ++a) kw(this, t.charCodeAt(a), this.l + 2 * a)
      n = 2 * t.length
    } else if (r === 'sbcs') {
      for (t = t.replace(/[^\x00-\x7F]/g, '_'), a = 0; a != t.length; ++a)
        this[this.l + a] = t.charCodeAt(a) & 255
      n = t.length
    } else if (r === 'hex') {
      for (; a < e; ++a) this[this.l++] = parseInt(t.slice(2 * a, 2 * a + 2), 16) || 0
      return this
    } else if (r === 'utf16le') {
      var i = Math.min(this.l + e, this.length)
      for (a = 0; a < Math.min(t.length, e); ++a) {
        var s = t.charCodeAt(a)
        ;(this[this.l++] = s & 255), (this[this.l++] = s >> 8)
      }
      for (; this.l < i; ) this[this.l++] = 0
      return this
    } else
      switch (e) {
        case 1:
          ;(n = 1), (this[this.l] = t & 255)
          break
        case 2:
          ;(n = 2), (this[this.l] = t & 255), (t >>>= 8), (this[this.l + 1] = t & 255)
          break
        case 3:
          ;(n = 3),
            (this[this.l] = t & 255),
            (t >>>= 8),
            (this[this.l + 1] = t & 255),
            (t >>>= 8),
            (this[this.l + 2] = t & 255)
          break
        case 4:
          ;(n = 4), Cw(this, t, this.l)
          break
        case 8:
          if (((n = 8), r === 'f')) {
            Aw(this, t, this.l)
            break
          }
        case 16:
          break
        case -4:
          ;(n = 4), Dw(this, t, this.l)
          break
      }
    return (this.l += n), this
  }
  function Mc(e, t) {
    var r = Ec(this, this.l, e.length >> 1)
    if (r !== e) throw new Error(t + 'Expected ' + e + ' saw ' + r)
    this.l += e.length >> 1
  }
  function Ut(e, t) {
    ;(e.l = t), (e.read_shift = ba), (e.chk = Mc), (e.write_shift = Rw)
  }
  function ur(e, t) {
    e.l += t
  }
  function B(e) {
    var t = un(e)
    return Ut(t, 0), t
  }
  function Pt() {
    var e = [],
      t = ke ? 256 : 2048,
      r = function (f) {
        var c = B(f)
        return Ut(c, 0), c
      },
      n = r(t),
      a = function () {
        !n ||
          (n.length > n.l && ((n = n.slice(0, n.l)), (n.l = n.length)),
          n.length > 0 && e.push(n),
          (n = null))
      },
      i = function (f) {
        return n && f < n.length - n.l ? n : (a(), (n = r(Math.max(f + 1, t))))
      },
      s = function () {
        return a(), ht(e)
      },
      o = function (f) {
        a(), (n = f), n.l == null && (n.l = n.length), i(t)
      }
    return { next: i, push: o, end: s, _bufs: e }
  }
  function Y(e, t, r, n) {
    var a = +t,
      i
    if (!isNaN(a)) {
      n || (n = yA[a].p || (r || []).length || 0),
        (i = 1 + (a >= 128 ? 1 : 0) + 1),
        n >= 128 && ++i,
        n >= 16384 && ++i,
        n >= 2097152 && ++i
      var s = e.next(i)
      a <= 127 ? s.write_shift(1, a) : (s.write_shift(1, (a & 127) + 128), s.write_shift(1, a >> 7))
      for (var o = 0; o != 4; ++o)
        if (n >= 128) s.write_shift(1, (n & 127) + 128), (n >>= 7)
        else {
          s.write_shift(1, n)
          break
        }
      n > 0 && M0(r) && e.push(r)
    }
  }
  function La(e, t, r) {
    var n = Nt(e)
    if (
      (t.s
        ? (n.cRel && (n.c += t.s.c), n.rRel && (n.r += t.s.r))
        : (n.cRel && (n.c += t.c), n.rRel && (n.r += t.r)),
      !r || r.biff < 12)
    ) {
      for (; n.c >= 256; ) n.c -= 256
      for (; n.r >= 65536; ) n.r -= 65536
    }
    return n
  }
  function bc(e, t, r) {
    var n = Nt(e)
    return (n.s = La(n.s, t.s, r)), (n.e = La(n.e, t.s, r)), n
  }
  function Ba(e, t) {
    if (e.cRel && e.c < 0) for (e = Nt(e); e.c < 0; ) e.c += t > 8 ? 16384 : 256
    if (e.rRel && e.r < 0) for (e = Nt(e); e.r < 0; ) e.r += t > 8 ? 1048576 : t > 5 ? 65536 : 16384
    var r = Pe(e)
    return !e.cRel && e.cRel != null && (r = Iw(r)), !e.rRel && e.rRel != null && (r = Nw(r)), r
  }
  function b0(e, t) {
    return e.s.r == 0 &&
      !e.s.rRel &&
      e.e.r == (t.biff >= 12 ? 1048575 : t.biff >= 8 ? 65536 : 16384) &&
      !e.e.rRel
      ? (e.s.cRel ? '' : '$') + Et(e.s.c) + ':' + (e.e.cRel ? '' : '$') + Et(e.e.c)
      : e.s.c == 0 && !e.s.cRel && e.e.c == (t.biff >= 12 ? 16383 : 255) && !e.e.cRel
      ? (e.s.rRel ? '' : '$') + xt(e.s.r) + ':' + (e.e.rRel ? '' : '$') + xt(e.e.r)
      : Ba(e.s, t.biff) + ':' + Ba(e.e, t.biff)
  }
  function L0(e) {
    return parseInt(Pw(e), 10) - 1
  }
  function xt(e) {
    return '' + (e + 1)
  }
  function Nw(e) {
    return e.replace(/([A-Z]|^)(\d+)$/, '$1$$$2')
  }
  function Pw(e) {
    return e.replace(/\$(\d+)$/, '$1')
  }
  function B0(e) {
    for (var t = Mw(e), r = 0, n = 0; n !== t.length; ++n) r = 26 * r + t.charCodeAt(n) - 64
    return r - 1
  }
  function Et(e) {
    if (e < 0) throw new Error('invalid column ' + e)
    var t = ''
    for (++e; e; e = Math.floor((e - 1) / 26)) t = String.fromCharCode(((e - 1) % 26) + 65) + t
    return t
  }
  function Iw(e) {
    return e.replace(/^([A-Z])/, '$$$1')
  }
  function Mw(e) {
    return e.replace(/^\$([A-Z])/, '$1')
  }
  function bw(e) {
    return e.replace(/(\$?[A-Z]*)(\$?\d*)/, '$1,$2').split(',')
  }
  function ct(e) {
    for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
      var a = e.charCodeAt(n)
      a >= 48 && a <= 57 ? (t = 10 * t + (a - 48)) : a >= 65 && a <= 90 && (r = 26 * r + (a - 64))
    }
    return { c: r - 1, r: t - 1 }
  }
  function Pe(e) {
    for (var t = e.c + 1, r = ''; t; t = ((t - 1) / 26) | 0)
      r = String.fromCharCode(((t - 1) % 26) + 65) + r
    return r + (e.r + 1)
  }
  function Wt(e) {
    var t = e.indexOf(':')
    return t == -1 ? { s: ct(e), e: ct(e) } : { s: ct(e.slice(0, t)), e: ct(e.slice(t + 1)) }
  }
  function tt(e, t) {
    return typeof t > 'u' || typeof t == 'number'
      ? tt(e.s, e.e)
      : (typeof e != 'string' && (e = Pe(e)),
        typeof t != 'string' && (t = Pe(t)),
        e == t ? e : e + ':' + t)
  }
  function je(e) {
    var t = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } },
      r = 0,
      n = 0,
      a = 0,
      i = e.length
    for (r = 0; n < i && !((a = e.charCodeAt(n) - 64) < 1 || a > 26); ++n) r = 26 * r + a
    for (t.s.c = --r, r = 0; n < i && !((a = e.charCodeAt(n) - 48) < 0 || a > 9); ++n)
      r = 10 * r + a
    if (((t.s.r = --r), n === i || a != 10)) return (t.e.c = t.s.c), (t.e.r = t.s.r), t
    for (++n, r = 0; n != i && !((a = e.charCodeAt(n) - 64) < 1 || a > 26); ++n) r = 26 * r + a
    for (t.e.c = --r, r = 0; n != i && !((a = e.charCodeAt(n) - 48) < 0 || a > 9); ++n)
      r = 10 * r + a
    return (t.e.r = --r), t
  }
  function Lc(e, t) {
    var r = e.t == 'd' && t instanceof Date
    if (e.z != null)
      try {
        return (e.w = Fr(e.z, r ? Rt(t) : t))
      } catch {}
    try {
      return (e.w = Fr((e.XF || {}).numFmtId || (r ? 14 : 0), r ? Rt(t) : t))
    } catch {
      return '' + t
    }
  }
  function kr(e, t, r) {
    return e == null || e.t == null || e.t == 'z'
      ? ''
      : e.w !== void 0
      ? e.w
      : (e.t == 'd' && !e.z && r && r.dateNF && (e.z = r.dateNF),
        e.t == 'e' ? Ua[e.v] || e.v : t == null ? Lc(e, e.v) : Lc(e, t))
  }
  function dn(e, t) {
    var r = t && t.sheet ? t.sheet : 'Sheet1',
      n = {}
    return (n[r] = e), { SheetNames: [r], Sheets: n }
  }
  function Bc(e, t, r) {
    var n = r || {},
      a = e ? Array.isArray(e) : n.dense,
      i = e || (a ? [] : {}),
      s = 0,
      o = 0
    if (i && n.origin != null) {
      if (typeof n.origin == 'number') s = n.origin
      else {
        var l = typeof n.origin == 'string' ? ct(n.origin) : n.origin
        ;(s = l.r), (o = l.c)
      }
      i['!ref'] || (i['!ref'] = 'A1:A1')
    }
    var f = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } }
    if (i['!ref']) {
      var c = je(i['!ref'])
      ;(f.s.c = c.s.c),
        (f.s.r = c.s.r),
        (f.e.c = Math.max(f.e.c, c.e.c)),
        (f.e.r = Math.max(f.e.r, c.e.r)),
        s == -1 && (f.e.r = s = c.e.r + 1)
    }
    for (var u = 0; u != t.length; ++u)
      if (!!t[u]) {
        if (!Array.isArray(t[u])) throw new Error('aoa_to_sheet expects an array of arrays')
        for (var h = 0; h != t[u].length; ++h)
          if (!(typeof t[u][h] > 'u')) {
            var p = { v: t[u][h] },
              m = s + u,
              d = o + h
            if (
              (f.s.r > m && (f.s.r = m),
              f.s.c > d && (f.s.c = d),
              f.e.r < m && (f.e.r = m),
              f.e.c < d && (f.e.c = d),
              t[u][h] &&
                typeof t[u][h] == 'object' &&
                !Array.isArray(t[u][h]) &&
                !(t[u][h] instanceof Date))
            )
              p = t[u][h]
            else if ((Array.isArray(p.v) && ((p.f = t[u][h][1]), (p.v = p.v[0])), p.v === null))
              if (p.f) p.t = 'n'
              else if (n.nullError) (p.t = 'e'), (p.v = 0)
              else if (n.sheetStubs) p.t = 'z'
              else continue
            else
              typeof p.v == 'number'
                ? (p.t = 'n')
                : typeof p.v == 'boolean'
                ? (p.t = 'b')
                : p.v instanceof Date
                ? ((p.z = n.dateNF || ze[14]),
                  n.cellDates
                    ? ((p.t = 'd'), (p.w = Fr(p.z, Rt(p.v))))
                    : ((p.t = 'n'), (p.v = Rt(p.v)), (p.w = Fr(p.z, p.v))))
                : (p.t = 's')
            if (a) i[m] || (i[m] = []), i[m][d] && i[m][d].z && (p.z = i[m][d].z), (i[m][d] = p)
            else {
              var v = Pe({ c: d, r: m })
              i[v] && i[v].z && (p.z = i[v].z), (i[v] = p)
            }
          }
      }
    return f.s.c < 1e7 && (i['!ref'] = tt(f)), i
  }
  function Hn(e, t) {
    return Bc(null, e, t)
  }
  function Lw(e) {
    return e.read_shift(4, 'i')
  }
  function rr(e, t) {
    return t || (t = B(4)), t.write_shift(4, e), t
  }
  function St(e) {
    var t = e.read_shift(4)
    return t === 0 ? '' : e.read_shift(t, 'dbcs')
  }
  function ut(e, t) {
    var r = !1
    return (
      t == null && ((r = !0), (t = B(4 + 2 * e.length))),
      t.write_shift(4, e.length),
      e.length > 0 && t.write_shift(0, e, 'dbcs'),
      r ? t.slice(0, t.l) : t
    )
  }
  function Bw(e) {
    return { ich: e.read_shift(2), ifnt: e.read_shift(2) }
  }
  function Uw(e, t) {
    return t || (t = B(4)), t.write_shift(2, e.ich || 0), t.write_shift(2, e.ifnt || 0), t
  }
  function U0(e, t) {
    var r = e.l,
      n = e.read_shift(1),
      a = St(e),
      i = [],
      s = { t: a, h: a }
    if ((n & 1) !== 0) {
      for (var o = e.read_shift(4), l = 0; l != o; ++l) i.push(Bw(e))
      s.r = i
    } else s.r = [{ ich: 0, ifnt: 0 }]
    return (e.l = r + t), s
  }
  function Ww(e, t) {
    var r = !1
    return (
      t == null && ((r = !0), (t = B(15 + 4 * e.t.length))),
      t.write_shift(1, 0),
      ut(e.t, t),
      r ? t.slice(0, t.l) : t
    )
  }
  var Hw = U0
  function Yw(e, t) {
    var r = !1
    return (
      t == null && ((r = !0), (t = B(23 + 4 * e.t.length))),
      t.write_shift(1, 1),
      ut(e.t, t),
      t.write_shift(4, 1),
      Uw({ ich: 0, ifnt: 0 }, t),
      r ? t.slice(0, t.l) : t
    )
  }
  function zt(e) {
    var t = e.read_shift(4),
      r = e.read_shift(2)
    return (r += e.read_shift(1) << 16), e.l++, { c: t, iStyleRef: r }
  }
  function pn(e, t) {
    return (
      t == null && (t = B(8)),
      t.write_shift(-4, e.c),
      t.write_shift(3, e.iStyleRef || e.s),
      t.write_shift(1, 0),
      t
    )
  }
  function xn(e) {
    var t = e.read_shift(2)
    return (t += e.read_shift(1) << 16), e.l++, { c: -1, iStyleRef: t }
  }
  function mn(e, t) {
    return t == null && (t = B(4)), t.write_shift(3, e.iStyleRef || e.s), t.write_shift(1, 0), t
  }
  var $w = St,
    Uc = ut
  function W0(e) {
    var t = e.read_shift(4)
    return t === 0 || t === 4294967295 ? '' : e.read_shift(t, 'dbcs')
  }
  function zi(e, t) {
    var r = !1
    return (
      t == null && ((r = !0), (t = B(127))),
      t.write_shift(4, e.length > 0 ? e.length : 4294967295),
      e.length > 0 && t.write_shift(0, e, 'dbcs'),
      r ? t.slice(0, t.l) : t
    )
  }
  var jw = St,
    H0 = W0,
    Y0 = zi
  function Wc(e) {
    var t = e.slice(e.l, e.l + 4),
      r = t[0] & 1,
      n = t[0] & 2
    e.l += 4
    var a = n === 0 ? Gi([0, 0, 0, 0, t[0] & 252, t[1], t[2], t[3]], 0) : hn(t, 0) >> 2
    return r ? a / 100 : a
  }
  function Hc(e, t) {
    t == null && (t = B(4))
    var r = 0,
      n = 0,
      a = e * 100
    if (
      (e == (e | 0) && e >= -(1 << 29) && e < 1 << 29
        ? (n = 1)
        : a == (a | 0) && a >= -(1 << 29) && a < 1 << 29 && ((n = 1), (r = 1)),
      n)
    )
      t.write_shift(-4, ((r ? a : e) << 2) + (r + 2))
    else throw new Error('unsupported RkNumber ' + e)
  }
  function Yc(e) {
    var t = { s: {}, e: {} }
    return (
      (t.s.r = e.read_shift(4)),
      (t.e.r = e.read_shift(4)),
      (t.s.c = e.read_shift(4)),
      (t.e.c = e.read_shift(4)),
      t
    )
  }
  function Vw(e, t) {
    return (
      t || (t = B(16)),
      t.write_shift(4, e.s.r),
      t.write_shift(4, e.e.r),
      t.write_shift(4, e.s.c),
      t.write_shift(4, e.e.c),
      t
    )
  }
  var _n = Yc,
    Yn = Vw
  function $n(e) {
    if (e.length - e.l < 8) throw 'XLS Xnum Buffer underflow'
    return e.read_shift(8, 'f')
  }
  function gn(e, t) {
    return (t || B(8)).write_shift(8, e, 'f')
  }
  function Gw(e) {
    var t = {},
      r = e.read_shift(1),
      n = r >>> 1,
      a = e.read_shift(1),
      i = e.read_shift(2, 'i'),
      s = e.read_shift(1),
      o = e.read_shift(1),
      l = e.read_shift(1)
    switch ((e.l++, n)) {
      case 0:
        t.auto = 1
        break
      case 1:
        t.index = a
        var f = tT[a]
        f && (t.rgb = _u(f))
        break
      case 2:
        t.rgb = _u([s, o, l])
        break
      case 3:
        t.theme = a
        break
    }
    return i != 0 && (t.tint = i > 0 ? i / 32767 : i / 32768), t
  }
  function Xi(e, t) {
    if ((t || (t = B(8)), !e || e.auto)) return t.write_shift(4, 0), t.write_shift(4, 0), t
    e.index != null
      ? (t.write_shift(1, 2), t.write_shift(1, e.index))
      : e.theme != null
      ? (t.write_shift(1, 6), t.write_shift(1, e.theme))
      : (t.write_shift(1, 5), t.write_shift(1, 0))
    var r = e.tint || 0
    if (
      (r > 0 ? (r *= 32767) : r < 0 && (r *= 32768), t.write_shift(2, r), !e.rgb || e.theme != null)
    )
      t.write_shift(2, 0), t.write_shift(1, 0), t.write_shift(1, 0)
    else {
      var n = e.rgb || 'FFFFFF'
      typeof n == 'number' && (n = ('000000' + n.toString(16)).slice(-6)),
        t.write_shift(1, parseInt(n.slice(0, 2), 16)),
        t.write_shift(1, parseInt(n.slice(2, 4), 16)),
        t.write_shift(1, parseInt(n.slice(4, 6), 16)),
        t.write_shift(1, 255)
    }
    return t
  }
  function zw(e) {
    var t = e.read_shift(1)
    e.l++
    var r = {
      fBold: t & 1,
      fItalic: t & 2,
      fUnderline: t & 4,
      fStrikeout: t & 8,
      fOutline: t & 16,
      fShadow: t & 32,
      fCondense: t & 64,
      fExtend: t & 128
    }
    return r
  }
  function Xw(e, t) {
    t || (t = B(2))
    var r =
      (e.italic ? 2 : 0) |
      (e.strike ? 8 : 0) |
      (e.outline ? 16 : 0) |
      (e.shadow ? 32 : 0) |
      (e.condense ? 64 : 0) |
      (e.extend ? 128 : 0)
    return t.write_shift(1, r), t.write_shift(1, 0), t
  }
  var $c = 2,
    Ht = 3,
    Ki = 11,
    qi = 19,
    Ji = 64,
    Kw = 65,
    qw = 71,
    Jw = 4108,
    Zw = 4126,
    mt = 80,
    jc = {
      1: { n: 'CodePage', t: $c },
      2: { n: 'Category', t: mt },
      3: { n: 'PresentationFormat', t: mt },
      4: { n: 'ByteCount', t: Ht },
      5: { n: 'LineCount', t: Ht },
      6: { n: 'ParagraphCount', t: Ht },
      7: { n: 'SlideCount', t: Ht },
      8: { n: 'NoteCount', t: Ht },
      9: { n: 'HiddenCount', t: Ht },
      10: { n: 'MultimediaClipCount', t: Ht },
      11: { n: 'ScaleCrop', t: Ki },
      12: { n: 'HeadingPairs', t: Jw },
      13: { n: 'TitlesOfParts', t: Zw },
      14: { n: 'Manager', t: mt },
      15: { n: 'Company', t: mt },
      16: { n: 'LinksUpToDate', t: Ki },
      17: { n: 'CharacterCount', t: Ht },
      19: { n: 'SharedDoc', t: Ki },
      22: { n: 'HyperlinksChanged', t: Ki },
      23: { n: 'AppVersion', t: Ht, p: 'version' },
      24: { n: 'DigSig', t: Kw },
      26: { n: 'ContentType', t: mt },
      27: { n: 'ContentStatus', t: mt },
      28: { n: 'Language', t: mt },
      29: { n: 'Version', t: mt },
      255: {},
      2147483648: { n: 'Locale', t: qi },
      2147483651: { n: 'Behavior', t: qi },
      1919054434: {}
    },
    Vc = {
      1: { n: 'CodePage', t: $c },
      2: { n: 'Title', t: mt },
      3: { n: 'Subject', t: mt },
      4: { n: 'Author', t: mt },
      5: { n: 'Keywords', t: mt },
      6: { n: 'Comments', t: mt },
      7: { n: 'Template', t: mt },
      8: { n: 'LastAuthor', t: mt },
      9: { n: 'RevNumber', t: mt },
      10: { n: 'EditTime', t: Ji },
      11: { n: 'LastPrinted', t: Ji },
      12: { n: 'CreatedDate', t: Ji },
      13: { n: 'ModifiedDate', t: Ji },
      14: { n: 'PageCount', t: Ht },
      15: { n: 'WordCount', t: Ht },
      16: { n: 'CharCount', t: Ht },
      17: { n: 'Thumbnail', t: qw },
      18: { n: 'Application', t: mt },
      19: { n: 'DocSecurity', t: Ht },
      255: {},
      2147483648: { n: 'Locale', t: qi },
      2147483651: { n: 'Behavior', t: qi },
      1919054434: {}
    }
  function Qw(e) {
    return e.map(function (t) {
      return [(t >> 16) & 255, (t >> 8) & 255, t & 255]
    })
  }
  var eT = Qw([
      0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0, 16777215, 16711680, 65280,
      255, 16776960, 16711935, 65535, 8388608, 32768, 128, 8421376, 8388736, 32896, 12632256,
      8421504, 10066431, 10040166, 16777164, 13434879, 6684774, 16744576, 26316, 13421823, 128,
      16711935, 16776960, 65535, 8388736, 8388608, 32896, 255, 52479, 13434879, 13434828, 16777113,
      10079487, 16751052, 13408767, 16764057, 3368703, 3394764, 10079232, 16763904, 16750848,
      16737792, 6710937, 9868950, 13158, 3381606, 13056, 3355392, 10040064, 10040166, 3355545,
      3355443, 16777215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]),
    tT = Nt(eT),
    Ua = {
      0: '#NULL!',
      7: '#DIV/0!',
      15: '#VALUE!',
      23: '#REF!',
      29: '#NAME?',
      36: '#NUM!',
      42: '#N/A',
      43: '#GETTING_DATA',
      255: '#WTF?'
    },
    rT = {
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml': 'workbooks',
      'application/vnd.ms-excel.sheet.macroEnabled.main+xml': 'workbooks',
      'application/vnd.ms-excel.sheet.binary.macroEnabled.main': 'workbooks',
      'application/vnd.ms-excel.addin.macroEnabled.main+xml': 'workbooks',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml': 'workbooks',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml': 'sheets',
      'application/vnd.ms-excel.worksheet': 'sheets',
      'application/vnd.ms-excel.binIndexWs': 'TODO',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml': 'charts',
      'application/vnd.ms-excel.chartsheet': 'charts',
      'application/vnd.ms-excel.macrosheet+xml': 'macros',
      'application/vnd.ms-excel.macrosheet': 'macros',
      'application/vnd.ms-excel.intlmacrosheet': 'TODO',
      'application/vnd.ms-excel.binIndexMs': 'TODO',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml': 'dialogs',
      'application/vnd.ms-excel.dialogsheet': 'dialogs',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml': 'strs',
      'application/vnd.ms-excel.sharedStrings': 'strs',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml': 'styles',
      'application/vnd.ms-excel.styles': 'styles',
      'application/vnd.openxmlformats-package.core-properties+xml': 'coreprops',
      'application/vnd.openxmlformats-officedocument.custom-properties+xml': 'custprops',
      'application/vnd.openxmlformats-officedocument.extended-properties+xml': 'extprops',
      'application/vnd.openxmlformats-officedocument.customXmlProperties+xml': 'TODO',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty': 'TODO',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml': 'comments',
      'application/vnd.ms-excel.comments': 'comments',
      'application/vnd.ms-excel.threadedcomments+xml': 'threadedcomments',
      'application/vnd.ms-excel.person+xml': 'people',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml': 'metadata',
      'application/vnd.ms-excel.sheetMetadata': 'metadata',
      'application/vnd.ms-excel.pivotTable': 'TODO',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml': 'TODO',
      'application/vnd.openxmlformats-officedocument.drawingml.chart+xml': 'TODO',
      'application/vnd.ms-office.chartcolorstyle+xml': 'TODO',
      'application/vnd.ms-office.chartstyle+xml': 'TODO',
      'application/vnd.ms-office.chartex+xml': 'TODO',
      'application/vnd.ms-excel.calcChain': 'calcchains',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml': 'calcchains',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings': 'TODO',
      'application/vnd.ms-office.activeX': 'TODO',
      'application/vnd.ms-office.activeX+xml': 'TODO',
      'application/vnd.ms-excel.attachedToolbars': 'TODO',
      'application/vnd.ms-excel.connections': 'TODO',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml': 'TODO',
      'application/vnd.ms-excel.externalLink': 'links',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml': 'links',
      'application/vnd.ms-excel.pivotCacheDefinition': 'TODO',
      'application/vnd.ms-excel.pivotCacheRecords': 'TODO',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml':
        'TODO',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml': 'TODO',
      'application/vnd.ms-excel.queryTable': 'TODO',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml': 'TODO',
      'application/vnd.ms-excel.userNames': 'TODO',
      'application/vnd.ms-excel.revisionHeaders': 'TODO',
      'application/vnd.ms-excel.revisionLog': 'TODO',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml': 'TODO',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml': 'TODO',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml': 'TODO',
      'application/vnd.ms-excel.tableSingleCells': 'TODO',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml': 'TODO',
      'application/vnd.ms-excel.slicer': 'TODO',
      'application/vnd.ms-excel.slicerCache': 'TODO',
      'application/vnd.ms-excel.slicer+xml': 'TODO',
      'application/vnd.ms-excel.slicerCache+xml': 'TODO',
      'application/vnd.ms-excel.wsSortMap': 'TODO',
      'application/vnd.ms-excel.table': 'TODO',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml': 'TODO',
      'application/vnd.openxmlformats-officedocument.theme+xml': 'themes',
      'application/vnd.openxmlformats-officedocument.themeOverride+xml': 'TODO',
      'application/vnd.ms-excel.Timeline+xml': 'TODO',
      'application/vnd.ms-excel.TimelineCache+xml': 'TODO',
      'application/vnd.ms-office.vbaProject': 'vba',
      'application/vnd.ms-office.vbaProjectSignature': 'TODO',
      'application/vnd.ms-office.volatileDependencies': 'TODO',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml':
        'TODO',
      'application/vnd.ms-excel.controlproperties+xml': 'TODO',
      'application/vnd.openxmlformats-officedocument.model+data': 'TODO',
      'application/vnd.ms-excel.Survey+xml': 'TODO',
      'application/vnd.openxmlformats-officedocument.drawing+xml': 'drawings',
      'application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml': 'TODO',
      'application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml': 'TODO',
      'application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml': 'TODO',
      'application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml': 'TODO',
      'application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml': 'TODO',
      'application/vnd.openxmlformats-officedocument.vmlDrawing': 'TODO',
      'application/vnd.openxmlformats-package.relationships+xml': 'rels',
      'application/vnd.openxmlformats-officedocument.oleObject': 'TODO',
      'image/png': 'TODO',
      sheet: 'js'
    },
    Zi = {
      workbooks: {
        xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml',
        xlsm: 'application/vnd.ms-excel.sheet.macroEnabled.main+xml',
        xlsb: 'application/vnd.ms-excel.sheet.binary.macroEnabled.main',
        xlam: 'application/vnd.ms-excel.addin.macroEnabled.main+xml',
        xltx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml'
      },
      strs: {
        xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml',
        xlsb: 'application/vnd.ms-excel.sharedStrings'
      },
      comments: {
        xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml',
        xlsb: 'application/vnd.ms-excel.comments'
      },
      sheets: {
        xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml',
        xlsb: 'application/vnd.ms-excel.worksheet'
      },
      charts: {
        xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml',
        xlsb: 'application/vnd.ms-excel.chartsheet'
      },
      dialogs: {
        xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml',
        xlsb: 'application/vnd.ms-excel.dialogsheet'
      },
      macros: {
        xlsx: 'application/vnd.ms-excel.macrosheet+xml',
        xlsb: 'application/vnd.ms-excel.macrosheet'
      },
      metadata: {
        xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml',
        xlsb: 'application/vnd.ms-excel.sheetMetadata'
      },
      styles: {
        xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml',
        xlsb: 'application/vnd.ms-excel.styles'
      }
    }
  function Gc() {
    return {
      workbooks: [],
      sheets: [],
      charts: [],
      dialogs: [],
      macros: [],
      rels: [],
      strs: [],
      comments: [],
      threadedcomments: [],
      links: [],
      coreprops: [],
      extprops: [],
      custprops: [],
      themes: [],
      styles: [],
      calcchains: [],
      vba: [],
      drawings: [],
      metadata: [],
      people: [],
      TODO: [],
      xmlns: ''
    }
  }
  function zc(e, t) {
    var r = hw(rT),
      n = [],
      a
    ;(n[n.length] = et),
      (n[n.length] = Q('Types', null, { xmlns: lt.CT, 'xmlns:xsd': lt.xsd, 'xmlns:xsi': lt.xsi })),
      (n = n.concat(
        [
          ['xml', 'application/xml'],
          ['bin', 'application/vnd.ms-excel.sheet.binary.macroEnabled.main'],
          ['vml', 'application/vnd.openxmlformats-officedocument.vmlDrawing'],
          ['data', 'application/vnd.openxmlformats-officedocument.model+data'],
          ['bmp', 'image/bmp'],
          ['png', 'image/png'],
          ['gif', 'image/gif'],
          ['emf', 'image/x-emf'],
          ['wmf', 'image/x-wmf'],
          ['jpg', 'image/jpeg'],
          ['jpeg', 'image/jpeg'],
          ['tif', 'image/tiff'],
          ['tiff', 'image/tiff'],
          ['pdf', 'application/pdf'],
          ['rels', 'application/vnd.openxmlformats-package.relationships+xml']
        ].map(function (l) {
          return Q('Default', null, { Extension: l[0], ContentType: l[1] })
        })
      ))
    var i = function (l) {
        e[l] &&
          e[l].length > 0 &&
          ((a = e[l][0]),
          (n[n.length] = Q('Override', null, {
            PartName: (a[0] == '/' ? '' : '/') + a,
            ContentType: Zi[l][t.bookType] || Zi[l].xlsx
          })))
      },
      s = function (l) {
        ;(e[l] || []).forEach(function (f) {
          n[n.length] = Q('Override', null, {
            PartName: (f[0] == '/' ? '' : '/') + f,
            ContentType: Zi[l][t.bookType] || Zi[l].xlsx
          })
        })
      },
      o = function (l) {
        ;(e[l] || []).forEach(function (f) {
          n[n.length] = Q('Override', null, {
            PartName: (f[0] == '/' ? '' : '/') + f,
            ContentType: r[l][0]
          })
        })
      }
    return (
      i('workbooks'),
      s('sheets'),
      s('charts'),
      o('themes'),
      ['strs', 'styles'].forEach(i),
      ['coreprops', 'extprops', 'custprops'].forEach(o),
      o('vba'),
      o('comments'),
      o('threadedcomments'),
      o('drawings'),
      s('metadata'),
      o('people'),
      n.length > 2 && ((n[n.length] = '</Types>'), (n[1] = n[1].replace('/>', '>'))),
      n.join('')
    )
  }
  var De = {
    WB: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument',
    SHEET: 'http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument',
    HLINK: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink',
    VML: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing',
    XPATH: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath',
    XMISS:
      'http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing',
    XLINK: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink',
    CXML: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml',
    CXMLP: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps',
    CMNT: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments',
    CORE_PROPS:
      'http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties',
    EXT_PROPS:
      'http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties',
    CUST_PROPS:
      'http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties',
    SST: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings',
    STY: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles',
    THEME: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme',
    CHART: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart',
    CHARTEX: 'http://schemas.microsoft.com/office/2014/relationships/chartEx',
    CS: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet',
    WS: [
      'http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet',
      'http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet'
    ],
    DS: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet',
    MS: 'http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet',
    IMG: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/image',
    DRAW: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing',
    XLMETA: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata',
    TCMNT: 'http://schemas.microsoft.com/office/2017/10/relationships/threadedComment',
    PEOPLE: 'http://schemas.microsoft.com/office/2017/10/relationships/person',
    VBA: 'http://schemas.microsoft.com/office/2006/relationships/vbaProject'
  }
  function Xc(e) {
    var t = e.lastIndexOf('/')
    return e.slice(0, t + 1) + '_rels/' + e.slice(t + 1) + '.rels'
  }
  function jn(e) {
    var t = [et, Q('Relationships', null, { xmlns: lt.RELS })]
    return (
      dt(e['!id']).forEach(function (r) {
        t[t.length] = Q('Relationship', null, e['!id'][r])
      }),
      t.length > 2 && ((t[t.length] = '</Relationships>'), (t[1] = t[1].replace('/>', '>'))),
      t.join('')
    )
  }
  function Ie(e, t, r, n, a, i) {
    if ((a || (a = {}), e['!id'] || (e['!id'] = {}), e['!idx'] || (e['!idx'] = 1), t < 0))
      for (t = e['!idx']; e['!id']['rId' + t]; ++t);
    if (
      ((e['!idx'] = t + 1),
      (a.Id = 'rId' + t),
      (a.Type = n),
      (a.Target = r),
      i
        ? (a.TargetMode = i)
        : [De.HLINK, De.XPATH, De.XMISS].indexOf(a.Type) > -1 && (a.TargetMode = 'External'),
      e['!id'][a.Id])
    )
      throw new Error('Cannot rewrite rId ' + t)
    return (e['!id'][a.Id] = a), (e[('/' + a.Target).replace('//', '/')] = a), t
  }
  function nT(e) {
    var t = [et]
    t.push(`<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">
`),
      t.push(`  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>
`)
    for (var r = 0; r < e.length; ++r)
      t.push(
        '  <manifest:file-entry manifest:full-path="' +
          e[r][0] +
          '" manifest:media-type="' +
          e[r][1] +
          `"/>
`
      )
    return t.push('</manifest:manifest>'), t.join('')
  }
  function Kc(e, t, r) {
    return [
      '  <rdf:Description rdf:about="' +
        e +
        `">
`,
      '    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' +
        (r || 'odf') +
        '#' +
        t +
        `"/>
`,
      `  </rdf:Description>
`
    ].join('')
  }
  function aT(e, t) {
    return [
      '  <rdf:Description rdf:about="' +
        e +
        `">
`,
      '    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="' +
        t +
        `"/>
`,
      `  </rdf:Description>
`
    ].join('')
  }
  function iT(e) {
    var t = [et]
    t.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`)
    for (var r = 0; r != e.length; ++r) t.push(Kc(e[r][0], e[r][1])), t.push(aT('', e[r][0]))
    return t.push(Kc('', 'Document', 'pkg')), t.push('</rdf:RDF>'), t.join('')
  }
  function qc() {
    return (
      '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' +
      Ii.version +
      '</meta:generator></office:meta></office:document-meta>'
    )
  }
  var vn = [
    ['cp:category', 'Category'],
    ['cp:contentStatus', 'ContentStatus'],
    ['cp:keywords', 'Keywords'],
    ['cp:lastModifiedBy', 'LastAuthor'],
    ['cp:lastPrinted', 'LastPrinted'],
    ['cp:revision', 'RevNumber'],
    ['cp:version', 'Version'],
    ['dc:creator', 'Author'],
    ['dc:description', 'Comments'],
    ['dc:identifier', 'Identifier'],
    ['dc:language', 'Language'],
    ['dc:subject', 'Subject'],
    ['dc:title', 'Title'],
    ['dcterms:created', 'CreatedDate', 'date'],
    ['dcterms:modified', 'ModifiedDate', 'date']
  ]
  function $0(e, t, r, n, a) {
    a[e] != null ||
      t == null ||
      t === '' ||
      ((a[e] = t), (t = Ne(t)), (n[n.length] = r ? Q(e, t, r) : pt(e, t)))
  }
  function Jc(e, t) {
    var r = t || {},
      n = [
        et,
        Q('cp:coreProperties', null, {
          'xmlns:cp': lt.CORE_PROPS,
          'xmlns:dc': lt.dc,
          'xmlns:dcterms': lt.dcterms,
          'xmlns:dcmitype': lt.dcmitype,
          'xmlns:xsi': lt.xsi
        })
      ],
      a = {}
    if (!e && !r.Props) return n.join('')
    e &&
      (e.CreatedDate != null &&
        $0(
          'dcterms:created',
          typeof e.CreatedDate == 'string' ? e.CreatedDate : P0(e.CreatedDate, r.WTF),
          { 'xsi:type': 'dcterms:W3CDTF' },
          n,
          a
        ),
      e.ModifiedDate != null &&
        $0(
          'dcterms:modified',
          typeof e.ModifiedDate == 'string' ? e.ModifiedDate : P0(e.ModifiedDate, r.WTF),
          { 'xsi:type': 'dcterms:W3CDTF' },
          n,
          a
        ))
    for (var i = 0; i != vn.length; ++i) {
      var s = vn[i],
        o = r.Props && r.Props[s[1]] != null ? r.Props[s[1]] : e ? e[s[1]] : null
      o === !0 ? (o = '1') : o === !1 ? (o = '0') : typeof o == 'number' && (o = String(o)),
        o != null && $0(s[0], o, null, n, a)
    }
    return (
      n.length > 2 && ((n[n.length] = '</cp:coreProperties>'), (n[1] = n[1].replace('/>', '>'))),
      n.join('')
    )
  }
  var Vn = [
      ['Application', 'Application', 'string'],
      ['AppVersion', 'AppVersion', 'string'],
      ['Company', 'Company', 'string'],
      ['DocSecurity', 'DocSecurity', 'string'],
      ['Manager', 'Manager', 'string'],
      ['HyperlinksChanged', 'HyperlinksChanged', 'bool'],
      ['SharedDoc', 'SharedDoc', 'bool'],
      ['LinksUpToDate', 'LinksUpToDate', 'bool'],
      ['ScaleCrop', 'ScaleCrop', 'bool'],
      ['HeadingPairs', 'HeadingPairs', 'raw'],
      ['TitlesOfParts', 'TitlesOfParts', 'raw']
    ],
    Zc = ['Worksheets', 'SheetNames', 'NamedRanges', 'DefinedNames', 'Chartsheets', 'ChartNames']
  function Qc(e) {
    var t = [],
      r = Q
    return (
      e || (e = {}),
      (e.Application = 'SheetJS'),
      (t[t.length] = et),
      (t[t.length] = Q('Properties', null, { xmlns: lt.EXT_PROPS, 'xmlns:vt': lt.vt })),
      Vn.forEach(function (n) {
        if (e[n[1]] !== void 0) {
          var a
          switch (n[2]) {
            case 'string':
              a = Ne(String(e[n[1]]))
              break
            case 'bool':
              a = e[n[1]] ? 'true' : 'false'
              break
          }
          a !== void 0 && (t[t.length] = r(n[0], a))
        }
      }),
      (t[t.length] = r(
        'HeadingPairs',
        r(
          'vt:vector',
          r('vt:variant', '<vt:lpstr>Worksheets</vt:lpstr>') +
            r('vt:variant', r('vt:i4', String(e.Worksheets))),
          { size: 2, baseType: 'variant' }
        )
      )),
      (t[t.length] = r(
        'TitlesOfParts',
        r(
          'vt:vector',
          e.SheetNames.map(function (n) {
            return '<vt:lpstr>' + Ne(n) + '</vt:lpstr>'
          }).join(''),
          { size: e.Worksheets, baseType: 'lpstr' }
        )
      )),
      t.length > 2 && ((t[t.length] = '</Properties>'), (t[1] = t[1].replace('/>', '>'))),
      t.join('')
    )
  }
  function eu(e) {
    var t = [et, Q('Properties', null, { xmlns: lt.CUST_PROPS, 'xmlns:vt': lt.vt })]
    if (!e) return t.join('')
    var r = 1
    return (
      dt(e).forEach(function (a) {
        ++r,
          (t[t.length] = Q('property', Sw(e[a], !0), {
            fmtid: '{D5CDD505-2E9C-101B-9397-08002B2CF9AE}',
            pid: r,
            name: Ne(a)
          }))
      }),
      t.length > 2 && ((t[t.length] = '</Properties>'), (t[1] = t[1].replace('/>', '>'))),
      t.join('')
    )
  }
  var tu = {
    Title: 'Title',
    Subject: 'Subject',
    Author: 'Author',
    Keywords: 'Keywords',
    Comments: 'Description',
    LastAuthor: 'LastAuthor',
    RevNumber: 'Revision',
    Application: 'AppName',
    LastPrinted: 'LastPrinted',
    CreatedDate: 'Created',
    ModifiedDate: 'LastSaved',
    Category: 'Category',
    Manager: 'Manager',
    Company: 'Company',
    AppVersion: 'Version',
    ContentStatus: 'ContentStatus',
    Identifier: 'Identifier',
    Language: 'Language'
  }
  function sT(e, t) {
    var r = []
    return (
      dt(tu)
        .map(function (n) {
          for (var a = 0; a < vn.length; ++a) if (vn[a][1] == n) return vn[a]
          for (a = 0; a < Vn.length; ++a) if (Vn[a][1] == n) return Vn[a]
          throw n
        })
        .forEach(function (n) {
          if (e[n[1]] != null) {
            var a = t && t.Props && t.Props[n[1]] != null ? t.Props[n[1]] : e[n[1]]
            switch (n[2]) {
              case 'date':
                a = new Date(a).toISOString().replace(/\.\d*Z/, 'Z')
                break
            }
            typeof a == 'number'
              ? (a = String(a))
              : a === !0 || a === !1
              ? (a = a ? '1' : '0')
              : a instanceof Date && (a = new Date(a).toISOString().replace(/\.\d*Z/, '')),
              r.push(pt(tu[n[1]] || n[1], a))
          }
        }),
      Q('DocumentProperties', r.join(''), { xmlns: Lt.o })
    )
  }
  function oT(e, t) {
    var r = ['Worksheets', 'SheetNames'],
      n = 'CustomDocumentProperties',
      a = []
    return (
      e &&
        dt(e).forEach(function (i) {
          if (!!Object.prototype.hasOwnProperty.call(e, i)) {
            for (var s = 0; s < vn.length; ++s) if (i == vn[s][1]) return
            for (s = 0; s < Vn.length; ++s) if (i == Vn[s][1]) return
            for (s = 0; s < r.length; ++s) if (i == r[s]) return
            var o = e[i],
              l = 'string'
            typeof o == 'number'
              ? ((l = 'float'), (o = String(o)))
              : o === !0 || o === !1
              ? ((l = 'boolean'), (o = o ? '1' : '0'))
              : (o = String(o)),
              a.push(Q(dc(i), o, { 'dt:dt': l }))
          }
        }),
      t &&
        dt(t).forEach(function (i) {
          if (
            !!Object.prototype.hasOwnProperty.call(t, i) &&
            !(e && Object.prototype.hasOwnProperty.call(e, i))
          ) {
            var s = t[i],
              o = 'string'
            typeof s == 'number'
              ? ((o = 'float'), (s = String(s)))
              : s === !0 || s === !1
              ? ((o = 'boolean'), (s = s ? '1' : '0'))
              : s instanceof Date
              ? ((o = 'dateTime.tz'), (s = s.toISOString()))
              : (s = String(s)),
              a.push(Q(dc(i), s, { 'dt:dt': o }))
          }
        }),
      '<' + n + ' xmlns="' + Lt.o + '">' + a.join('') + '</' + n + '>'
    )
  }
  function fT(e) {
    var t = typeof e == 'string' ? new Date(Date.parse(e)) : e,
      r = t.getTime() / 1e3 + 11644473600,
      n = r % Math.pow(2, 32),
      a = (r - n) / Math.pow(2, 32)
    ;(n *= 1e7), (a *= 1e7)
    var i = (n / Math.pow(2, 32)) | 0
    i > 0 && ((n = n % Math.pow(2, 32)), (a += i))
    var s = B(8)
    return s.write_shift(4, n), s.write_shift(4, a), s
  }
  function ru(e, t) {
    var r = B(4),
      n = B(4)
    switch ((r.write_shift(4, e == 80 ? 31 : e), e)) {
      case 3:
        n.write_shift(-4, t)
        break
      case 5:
        ;(n = B(8)), n.write_shift(8, t, 'f')
        break
      case 11:
        n.write_shift(4, t ? 1 : 0)
        break
      case 64:
        n = fT(t)
        break
      case 31:
      case 80:
        for (
          n = B(4 + 2 * (t.length + 1) + (t.length % 2 ? 0 : 2)),
            n.write_shift(4, t.length + 1),
            n.write_shift(0, t, 'dbcs');
          n.l != n.length;

        )
          n.write_shift(1, 0)
        break
      default:
        throw new Error('TypedPropertyValue unrecognized type ' + e + ' ' + t)
    }
    return ht([r, n])
  }
  var nu = ['CodePage', 'Thumbnail', '_PID_LINKBASE', '_PID_HLINKS', 'SystemIdentifier', 'FMTID']
  function lT(e) {
    switch (typeof e) {
      case 'boolean':
        return 11
      case 'number':
        return (e | 0) == e ? 3 : 5
      case 'string':
        return 31
      case 'object':
        if (e instanceof Date) return 64
        break
    }
    return -1
  }
  function au(e, t, r) {
    var n = B(8),
      a = [],
      i = [],
      s = 8,
      o = 0,
      l = B(8),
      f = B(8)
    if (
      (l.write_shift(4, 2),
      l.write_shift(4, 1200),
      f.write_shift(4, 1),
      i.push(l),
      a.push(f),
      (s += 8 + l.length),
      !t)
    ) {
      ;(f = B(8)), f.write_shift(4, 0), a.unshift(f)
      var c = [B(4)]
      for (c[0].write_shift(4, e.length), o = 0; o < e.length; ++o) {
        var u = e[o][0]
        for (
          l = B(4 + 4 + 2 * (u.length + 1) + (u.length % 2 ? 0 : 2)),
            l.write_shift(4, o + 2),
            l.write_shift(4, u.length + 1),
            l.write_shift(0, u, 'dbcs');
          l.l != l.length;

        )
          l.write_shift(1, 0)
        c.push(l)
      }
      ;(l = ht(c)), i.unshift(l), (s += 8 + l.length)
    }
    for (o = 0; o < e.length; ++o)
      if (
        !(t && !t[e[o][0]]) &&
        !(nu.indexOf(e[o][0]) > -1 || Zc.indexOf(e[o][0]) > -1) &&
        e[o][1] != null
      ) {
        var h = e[o][1],
          p = 0
        if (t) {
          p = +t[e[o][0]]
          var m = r[p]
          if (m.p == 'version' && typeof h == 'string') {
            var d = h.split('.')
            h = (+d[0] << 16) + (+d[1] || 0)
          }
          l = ru(m.t, h)
        } else {
          var v = lT(h)
          v == -1 && ((v = 31), (h = String(h))), (l = ru(v, h))
        }
        i.push(l), (f = B(8)), f.write_shift(4, t ? p : 2 + o), a.push(f), (s += 8 + l.length)
      }
    var A = 8 * (i.length + 1)
    for (o = 0; o < i.length; ++o) a[o].write_shift(4, A), (A += i[o].length)
    return n.write_shift(4, s), n.write_shift(4, i.length), ht([n].concat(a).concat(i))
  }
  function iu(e, t, r, n, a, i) {
    var s = B(a ? 68 : 48),
      o = [s]
    s.write_shift(2, 65534),
      s.write_shift(2, 0),
      s.write_shift(4, 842412599),
      s.write_shift(16, Ue.utils.consts.HEADER_CLSID, 'hex'),
      s.write_shift(4, a ? 2 : 1),
      s.write_shift(16, t, 'hex'),
      s.write_shift(4, a ? 68 : 48)
    var l = au(e, r, n)
    if ((o.push(l), a)) {
      var f = au(a, null, null)
      s.write_shift(16, i, 'hex'), s.write_shift(4, 68 + l.length), o.push(f)
    }
    return ht(o)
  }
  function cT(e, t) {
    t || (t = B(e))
    for (var r = 0; r < e; ++r) t.write_shift(1, 0)
    return t
  }
  function uT(e, t) {
    return e.read_shift(t) === 1
  }
  function Ct(e, t) {
    return t || (t = B(2)), t.write_shift(2, +!!e), t
  }
  function su(e) {
    return e.read_shift(2, 'u')
  }
  function Xt(e, t) {
    return t || (t = B(2)), t.write_shift(2, e), t
  }
  function ou(e, t, r) {
    return (
      r || (r = B(2)), r.write_shift(1, t == 'e' ? +e : +!!e), r.write_shift(1, t == 'e' ? 1 : 0), r
    )
  }
  function fu(e, t, r) {
    var n = e.read_shift(r && r.biff >= 12 ? 2 : 1),
      a = 'sbcs-cont'
    if ((r && r.biff >= 8, !r || r.biff == 8)) {
      var i = e.read_shift(1)
      i && (a = 'dbcs-cont')
    } else r.biff == 12 && (a = 'wstr')
    r.biff >= 2 && r.biff <= 5 && (a = 'cpstr')
    var s = n ? e.read_shift(n, a) : ''
    return s
  }
  function hT(e) {
    var t = e.t || '',
      r = B(3 + 0)
    r.write_shift(2, t.length), r.write_shift(1, 1)
    var n = B(2 * t.length)
    n.write_shift(2 * t.length, t, 'utf16le')
    var a = [r, n]
    return ht(a)
  }
  function dT(e, t, r) {
    var n
    if (r) {
      if (r.biff >= 2 && r.biff <= 5) return e.read_shift(t, 'cpstr')
      if (r.biff >= 12) return e.read_shift(t, 'dbcs-cont')
    }
    var a = e.read_shift(1)
    return a === 0 ? (n = e.read_shift(t, 'sbcs-cont')) : (n = e.read_shift(t, 'dbcs-cont')), n
  }
  function pT(e, t, r) {
    var n = e.read_shift(r && r.biff == 2 ? 1 : 2)
    return n === 0 ? (e.l++, '') : dT(e, n, r)
  }
  function xT(e, t, r) {
    if (r.biff > 5) return pT(e, t, r)
    var n = e.read_shift(1)
    return n === 0 ? (e.l++, '') : e.read_shift(n, r.biff <= 4 || !e.lens ? 'cpstr' : 'sbcs-cont')
  }
  function lu(e, t, r) {
    return (
      r || (r = B(3 + 2 * e.length)),
      r.write_shift(2, e.length),
      r.write_shift(1, 1),
      r.write_shift(31, e, 'utf16le'),
      r
    )
  }
  function cu(e, t) {
    t || (t = B(6 + e.length * 2)), t.write_shift(4, 1 + e.length)
    for (var r = 0; r < e.length; ++r) t.write_shift(2, e.charCodeAt(r))
    return t.write_shift(2, 0), t
  }
  function mT(e) {
    var t = B(512),
      r = 0,
      n = e.Target
    n.slice(0, 7) == 'file://' && (n = n.slice(7))
    var a = n.indexOf('#'),
      i = a > -1 ? 31 : 23
    switch (n.charAt(0)) {
      case '#':
        i = 28
        break
      case '.':
        i &= -3
        break
    }
    t.write_shift(4, 2), t.write_shift(4, i)
    var s = [8, 6815827, 6619237, 4849780, 83]
    for (r = 0; r < s.length; ++r) t.write_shift(4, s[r])
    if (i == 28) (n = n.slice(1)), cu(n, t)
    else if (i & 2) {
      for (
        s = 'e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b'.split(' '), r = 0;
        r < s.length;
        ++r
      )
        t.write_shift(1, parseInt(s[r], 16))
      var o = a > -1 ? n.slice(0, a) : n
      for (t.write_shift(4, 2 * (o.length + 1)), r = 0; r < o.length; ++r)
        t.write_shift(2, o.charCodeAt(r))
      t.write_shift(2, 0), i & 8 && cu(a > -1 ? n.slice(a + 1) : '', t)
    } else {
      for (
        s = '03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46'.split(' '), r = 0;
        r < s.length;
        ++r
      )
        t.write_shift(1, parseInt(s[r], 16))
      for (var l = 0; n.slice(l * 3, l * 3 + 3) == '../' || n.slice(l * 3, l * 3 + 3) == '..\\'; )
        ++l
      for (
        t.write_shift(2, l), t.write_shift(4, n.length - 3 * l + 1), r = 0;
        r < n.length - 3 * l;
        ++r
      )
        t.write_shift(1, n.charCodeAt(r + 3 * l) & 255)
      for (t.write_shift(1, 0), t.write_shift(2, 65535), t.write_shift(2, 57005), r = 0; r < 6; ++r)
        t.write_shift(4, 0)
    }
    return t.slice(0, t.l)
  }
  function wn(e, t, r, n) {
    return n || (n = B(6)), n.write_shift(2, e), n.write_shift(2, t), n.write_shift(2, r || 0), n
  }
  function _T(e, t, r) {
    var n = r.biff > 8 ? 4 : 2,
      a = e.read_shift(n),
      i = e.read_shift(n, 'i'),
      s = e.read_shift(n, 'i')
    return [a, i, s]
  }
  function gT(e) {
    var t = e.read_shift(2),
      r = e.read_shift(2),
      n = e.read_shift(2),
      a = e.read_shift(2)
    return { s: { c: n, r: t }, e: { c: a, r } }
  }
  function uu(e, t) {
    return (
      t || (t = B(8)),
      t.write_shift(2, e.s.r),
      t.write_shift(2, e.e.r),
      t.write_shift(2, e.s.c),
      t.write_shift(2, e.e.c),
      t
    )
  }
  function j0(e, t, r) {
    var n = 1536,
      a = 16
    switch (r.bookType) {
      case 'biff8':
        break
      case 'biff5':
        ;(n = 1280), (a = 8)
        break
      case 'biff4':
        ;(n = 4), (a = 6)
        break
      case 'biff3':
        ;(n = 3), (a = 6)
        break
      case 'biff2':
        ;(n = 2), (a = 4)
        break
      case 'xla':
        break
      default:
        throw new Error('unsupported BIFF version')
    }
    var i = B(a)
    return (
      i.write_shift(2, n),
      i.write_shift(2, t),
      a > 4 && i.write_shift(2, 29282),
      a > 6 && i.write_shift(2, 1997),
      a > 8 &&
        (i.write_shift(2, 49161), i.write_shift(2, 1), i.write_shift(2, 1798), i.write_shift(2, 0)),
      i
    )
  }
  function vT(e, t) {
    var r = !t || t.biff == 8,
      n = B(r ? 112 : 54)
    for (
      n.write_shift(t.biff == 8 ? 2 : 1, 7),
        r && n.write_shift(1, 0),
        n.write_shift(4, 859007059),
        n.write_shift(4, 5458548 | (r ? 0 : 536870912));
      n.l < n.length;

    )
      n.write_shift(1, r ? 0 : 32)
    return n
  }
  function wT(e, t) {
    var r = !t || t.biff >= 8 ? 2 : 1,
      n = B(8 + r * e.name.length)
    n.write_shift(4, e.pos),
      n.write_shift(1, e.hs || 0),
      n.write_shift(1, e.dt),
      n.write_shift(1, e.name.length),
      t.biff >= 8 && n.write_shift(1, 1),
      n.write_shift(r * e.name.length, e.name, t.biff < 8 ? 'sbcs' : 'utf16le')
    var a = n.slice(0, n.l)
    return (a.l = n.l), a
  }
  function TT(e, t) {
    var r = B(8)
    r.write_shift(4, e.Count), r.write_shift(4, e.Unique)
    for (var n = [], a = 0; a < e.length; ++a) n[a] = hT(e[a])
    var i = ht([r].concat(n))
    return (
      (i.parts = [r.length].concat(
        n.map(function (s) {
          return s.length
        })
      )),
      i
    )
  }
  function ET() {
    var e = B(18)
    return (
      e.write_shift(2, 0),
      e.write_shift(2, 0),
      e.write_shift(2, 29280),
      e.write_shift(2, 17600),
      e.write_shift(2, 56),
      e.write_shift(2, 0),
      e.write_shift(2, 0),
      e.write_shift(2, 1),
      e.write_shift(2, 500),
      e
    )
  }
  function ST(e) {
    var t = B(18),
      r = 1718
    return (
      e && e.RTL && (r |= 64),
      t.write_shift(2, r),
      t.write_shift(4, 0),
      t.write_shift(4, 64),
      t.write_shift(4, 0),
      t.write_shift(4, 0),
      t
    )
  }
  function yT(e, t) {
    var r = e.name || 'Arial',
      n = t && t.biff == 5,
      a = n ? 15 + r.length : 16 + 2 * r.length,
      i = B(a)
    return (
      i.write_shift(2, (e.sz || 12) * 20),
      i.write_shift(4, 0),
      i.write_shift(2, 400),
      i.write_shift(4, 0),
      i.write_shift(2, 0),
      i.write_shift(1, r.length),
      n || i.write_shift(1, 1),
      i.write_shift((n ? 1 : 2) * r.length, r, n ? 'sbcs' : 'utf16le'),
      i
    )
  }
  function AT(e, t, r, n) {
    var a = B(10)
    return wn(e, t, n, a), a.write_shift(4, r), a
  }
  function OT(e, t, r, n, a) {
    var i = !a || a.biff == 8,
      s = B(6 + 2 + +i + (1 + i) * r.length)
    return (
      wn(e, t, n, s),
      s.write_shift(2, r.length),
      i && s.write_shift(1, 1),
      s.write_shift((1 + i) * r.length, r, i ? 'utf16le' : 'sbcs'),
      s
    )
  }
  function FT(e, t, r, n) {
    var a = r && r.biff == 5
    n || (n = B(a ? 3 + t.length : 5 + 2 * t.length)),
      n.write_shift(2, e),
      n.write_shift(a ? 1 : 2, t.length),
      a || n.write_shift(1, 1),
      n.write_shift((a ? 1 : 2) * t.length, t, a ? 'sbcs' : 'utf16le')
    var i = n.length > n.l ? n.slice(0, n.l) : n
    return i.l == null && (i.l = i.length), i
  }
  function CT(e, t) {
    var r = t.biff == 8 || !t.biff ? 4 : 2,
      n = B(2 * r + 6)
    return (
      n.write_shift(r, e.s.r),
      n.write_shift(r, e.e.r + 1),
      n.write_shift(2, e.s.c),
      n.write_shift(2, e.e.c + 1),
      n.write_shift(2, 0),
      n
    )
  }
  function hu(e, t, r, n) {
    var a = r && r.biff == 5
    n || (n = B(a ? 16 : 20)),
      n.write_shift(2, 0),
      e.style
        ? (n.write_shift(2, e.numFmtId || 0), n.write_shift(2, 65524))
        : (n.write_shift(2, e.numFmtId || 0), n.write_shift(2, t << 4))
    var i = 0
    return (
      e.numFmtId > 0 && a && (i |= 1024),
      n.write_shift(4, i),
      n.write_shift(4, 0),
      a || n.write_shift(4, 0),
      n.write_shift(2, 0),
      n
    )
  }
  function DT(e) {
    var t = B(8)
    return (
      t.write_shift(4, 0),
      t.write_shift(2, e[0] ? e[0] + 1 : 0),
      t.write_shift(2, e[1] ? e[1] + 1 : 0),
      t
    )
  }
  function kT(e, t, r, n, a, i) {
    var s = B(8)
    return wn(e, t, n, s), ou(r, i, s), s
  }
  function RT(e, t, r, n) {
    var a = B(14)
    return wn(e, t, n, a), gn(r, a), a
  }
  function NT(e, t, r) {
    if (r.biff < 8) return PT(e, t, r)
    for (var n = [], a = e.l + t, i = e.read_shift(r.biff > 8 ? 4 : 2); i-- !== 0; )
      n.push(_T(e, r.biff > 8 ? 12 : 6, r))
    if (e.l != a) throw new Error('Bad ExternSheet: ' + e.l + ' != ' + a)
    return n
  }
  function PT(e, t, r) {
    e[e.l + 1] == 3 && e[e.l]++
    var n = fu(e, t, r)
    return n.charCodeAt(0) == 3 ? n.slice(1) : n
  }
  function IT(e) {
    var t = B(2 + e.length * 8)
    t.write_shift(2, e.length)
    for (var r = 0; r < e.length; ++r) uu(e[r], t)
    return t
  }
  function MT(e) {
    var t = B(24),
      r = ct(e[0])
    t.write_shift(2, r.r), t.write_shift(2, r.r), t.write_shift(2, r.c), t.write_shift(2, r.c)
    for (var n = 'd0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b'.split(' '), a = 0; a < 16; ++a)
      t.write_shift(1, parseInt(n[a], 16))
    return ht([t, mT(e[1])])
  }
  function bT(e) {
    var t = e[1].Tooltip,
      r = B(10 + 2 * (t.length + 1))
    r.write_shift(2, 2048)
    var n = ct(e[0])
    r.write_shift(2, n.r), r.write_shift(2, n.r), r.write_shift(2, n.c), r.write_shift(2, n.c)
    for (var a = 0; a < t.length; ++a) r.write_shift(2, t.charCodeAt(a))
    return r.write_shift(2, 0), r
  }
  function LT(e) {
    return e || (e = B(4)), e.write_shift(2, 1), e.write_shift(2, 1), e
  }
  function BT(e, t, r) {
    if (!r.cellStyles) return ur(e, t)
    var n = r && r.biff >= 12 ? 4 : 2,
      a = e.read_shift(n),
      i = e.read_shift(n),
      s = e.read_shift(n),
      o = e.read_shift(n),
      l = e.read_shift(2)
    n == 2 && (e.l += 2)
    var f = { s: a, e: i, w: s, ixfe: o, flags: l }
    return (r.biff >= 5 || !r.biff) && (f.level = (l >> 8) & 7), f
  }
  function UT(e, t) {
    var r = B(12)
    r.write_shift(2, t), r.write_shift(2, t), r.write_shift(2, e.width * 256), r.write_shift(2, 0)
    var n = 0
    return (
      e.hidden && (n |= 1),
      r.write_shift(1, n),
      (n = e.level || 0),
      r.write_shift(1, n),
      r.write_shift(2, 0),
      r
    )
  }
  function WT(e) {
    for (var t = B(2 * e), r = 0; r < e; ++r) t.write_shift(2, r + 1)
    return t
  }
  function HT(e, t, r) {
    var n = B(15)
    return $a(n, e, t), n.write_shift(8, r, 'f'), n
  }
  function YT(e, t, r) {
    var n = B(9)
    return $a(n, e, t), n.write_shift(2, r), n
  }
  var $T = (function () {
      var e = {
          1: 437,
          2: 850,
          3: 1252,
          4: 1e4,
          100: 852,
          101: 866,
          102: 865,
          103: 861,
          104: 895,
          105: 620,
          106: 737,
          107: 857,
          120: 950,
          121: 949,
          122: 936,
          123: 932,
          124: 874,
          125: 1255,
          126: 1256,
          150: 10007,
          151: 10029,
          152: 10006,
          200: 1250,
          201: 1251,
          202: 1254,
          203: 1253,
          0: 20127,
          8: 865,
          9: 437,
          10: 850,
          11: 437,
          13: 437,
          14: 850,
          15: 437,
          16: 850,
          17: 437,
          18: 850,
          19: 932,
          20: 850,
          21: 437,
          22: 850,
          23: 865,
          24: 437,
          25: 437,
          26: 850,
          27: 437,
          28: 863,
          29: 850,
          31: 852,
          34: 852,
          35: 852,
          36: 860,
          37: 850,
          38: 866,
          55: 850,
          64: 852,
          77: 936,
          78: 949,
          79: 950,
          80: 874,
          87: 1252,
          88: 1252,
          89: 1252,
          108: 863,
          134: 737,
          135: 852,
          136: 857,
          204: 1257,
          255: 16969
        },
        t = C0({
          1: 437,
          2: 850,
          3: 1252,
          4: 1e4,
          100: 852,
          101: 866,
          102: 865,
          103: 861,
          104: 895,
          105: 620,
          106: 737,
          107: 857,
          120: 950,
          121: 949,
          122: 936,
          123: 932,
          124: 874,
          125: 1255,
          126: 1256,
          150: 10007,
          151: 10029,
          152: 10006,
          200: 1250,
          201: 1251,
          202: 1254,
          203: 1253,
          0: 20127
        })
      function r(o, l) {
        var f = [],
          c = un(1)
        switch (l.type) {
          case 'base64':
            c = er(yr(o))
            break
          case 'binary':
            c = er(o)
            break
          case 'buffer':
          case 'array':
            c = o
            break
        }
        Ut(c, 0)
        var u = c.read_shift(1),
          h = !!(u & 136),
          p = !1,
          m = !1
        switch (u) {
          case 2:
            break
          case 3:
            break
          case 48:
            ;(p = !0), (h = !0)
            break
          case 49:
            ;(p = !0), (h = !0)
            break
          case 131:
            break
          case 139:
            break
          case 140:
            m = !0
            break
          case 245:
            break
          default:
            throw new Error('DBF Unsupported Version: ' + u.toString(16))
        }
        var d = 0,
          v = 521
        u == 2 && (d = c.read_shift(2)),
          (c.l += 3),
          u != 2 && (d = c.read_shift(4)),
          d > 1048576 && (d = 1e6),
          u != 2 && (v = c.read_shift(2))
        var A = c.read_shift(2),
          F = l.codepage || 1252
        u != 2 &&
          ((c.l += 16), c.read_shift(1), c[c.l] !== 0 && (F = e[c[c.l]]), (c.l += 1), (c.l += 2)),
          m && (c.l += 36)
        for (
          var C = [],
            L = {},
            Z = Math.min(c.length, u == 2 ? 521 : v - 10 - (p ? 264 : 0)),
            ie = m ? 32 : 11;
          c.l < Z && c[c.l] != 13;

        )
          switch (
            ((L = {}),
            (L.name = cn.utils.decode(F, c.slice(c.l, c.l + ie)).replace(/[\u0000\r\n].*$/g, '')),
            (c.l += ie),
            (L.type = String.fromCharCode(c.read_shift(1))),
            u != 2 && !m && (L.offset = c.read_shift(4)),
            (L.len = c.read_shift(1)),
            u == 2 && (L.offset = c.read_shift(2)),
            (L.dec = c.read_shift(1)),
            L.name.length && C.push(L),
            u != 2 && (c.l += m ? 13 : 14),
            L.type)
          ) {
            case 'B':
              ;(!p || L.len != 8) && l.WTF && console.log('Skipping ' + L.name + ':' + L.type)
              break
            case 'G':
            case 'P':
              l.WTF && console.log('Skipping ' + L.name + ':' + L.type)
              break
            case '+':
            case '0':
            case '@':
            case 'C':
            case 'D':
            case 'F':
            case 'I':
            case 'L':
            case 'M':
            case 'N':
            case 'O':
            case 'T':
            case 'Y':
              break
            default:
              throw new Error('Unknown Field Type: ' + L.type)
          }
        if ((c[c.l] !== 13 && (c.l = v - 1), c.read_shift(1) !== 13))
          throw new Error('DBF Terminator not found ' + c.l + ' ' + c[c.l])
        c.l = v
        var k = 0,
          H = 0
        for (f[0] = [], H = 0; H != C.length; ++H) f[0][H] = C[H].name
        for (; d-- > 0; ) {
          if (c[c.l] === 42) {
            c.l += A
            continue
          }
          for (++c.l, f[++k] = [], H = 0, H = 0; H != C.length; ++H) {
            var b = c.slice(c.l, c.l + C[H].len)
            ;(c.l += C[H].len), Ut(b, 0)
            var V = cn.utils.decode(F, b)
            switch (C[H].type) {
              case 'C':
                V.trim().length && (f[k][H] = V.replace(/\s+$/, ''))
                break
              case 'D':
                V.length === 8
                  ? (f[k][H] = new Date(+V.slice(0, 4), +V.slice(4, 6) - 1, +V.slice(6, 8)))
                  : (f[k][H] = V)
                break
              case 'F':
                f[k][H] = parseFloat(V.trim())
                break
              case '+':
              case 'I':
                f[k][H] = m ? b.read_shift(-4, 'i') ^ 2147483648 : b.read_shift(4, 'i')
                break
              case 'L':
                switch (V.trim().toUpperCase()) {
                  case 'Y':
                  case 'T':
                    f[k][H] = !0
                    break
                  case 'N':
                  case 'F':
                    f[k][H] = !1
                    break
                  case '':
                  case '?':
                    break
                  default:
                    throw new Error('DBF Unrecognized L:|' + V + '|')
                }
                break
              case 'M':
                if (!h) throw new Error('DBF Unexpected MEMO for type ' + u.toString(16))
                f[k][H] = '##MEMO##' + (m ? parseInt(V.trim(), 10) : b.read_shift(4))
                break
              case 'N':
                ;(V = V.replace(/\u0000/g, '').trim()), V && V != '.' && (f[k][H] = +V || 0)
                break
              case '@':
                f[k][H] = new Date(b.read_shift(-8, 'f') - 621356832e5)
                break
              case 'T':
                f[k][H] = new Date((b.read_shift(4) - 2440588) * 864e5 + b.read_shift(4))
                break
              case 'Y':
                f[k][H] =
                  b.read_shift(4, 'i') / 1e4 + (b.read_shift(4, 'i') / 1e4) * Math.pow(2, 32)
                break
              case 'O':
                f[k][H] = -b.read_shift(-8, 'f')
                break
              case 'B':
                if (p && C[H].len == 8) {
                  f[k][H] = b.read_shift(8, 'f')
                  break
                }
              case 'G':
              case 'P':
                b.l += C[H].len
                break
              case '0':
                if (C[H].name === '_NullFlags') break
              default:
                throw new Error('DBF Unsupported data type ' + C[H].type)
            }
          }
        }
        if (u != 2 && c.l < c.length && c[c.l++] != 26)
          throw new Error(
            'DBF EOF Marker missing ' +
              (c.l - 1) +
              ' of ' +
              c.length +
              ' ' +
              c[c.l - 1].toString(16)
          )
        return l && l.sheetRows && (f = f.slice(0, l.sheetRows)), (l.DBF = C), f
      }
      function n(o, l) {
        var f = l || {}
        f.dateNF || (f.dateNF = 'yyyymmdd')
        var c = Hn(r(o, f), f)
        return (
          (c['!cols'] = f.DBF.map(function (u) {
            return { wch: u.len, DBF: u }
          })),
          delete f.DBF,
          c
        )
      }
      function a(o, l) {
        try {
          return dn(n(o, l), l)
        } catch (f) {
          if (l && l.WTF) throw f
        }
        return { SheetNames: [], Sheets: {} }
      }
      var i = { B: 8, C: 250, L: 1, D: 8, '?': 0, '': 0 }
      function s(o, l) {
        var f = l || {}
        if ((+f.codepage >= 0 && ya(+f.codepage), f.type == 'string'))
          throw new Error('Cannot write DBF to JS string')
        var c = Pt(),
          u = os(o, { header: 1, raw: !0, cellDates: !0 }),
          h = u[0],
          p = u.slice(1),
          m = o['!cols'] || [],
          d = 0,
          v = 0,
          A = 0,
          F = 1
        for (d = 0; d < h.length; ++d) {
          if (((m[d] || {}).DBF || {}).name) {
            ;(h[d] = m[d].DBF.name), ++A
            continue
          }
          if (h[d] != null) {
            if (
              (++A, typeof h[d] == 'number' && (h[d] = h[d].toString(10)), typeof h[d] != 'string')
            )
              throw new Error('DBF Invalid column name ' + h[d] + ' |' + typeof h[d] + '|')
            if (h.indexOf(h[d]) !== d) {
              for (v = 0; v < 1024; ++v)
                if (h.indexOf(h[d] + '_' + v) == -1) {
                  h[d] += '_' + v
                  break
                }
            }
          }
        }
        var C = je(o['!ref']),
          L = [],
          Z = [],
          ie = []
        for (d = 0; d <= C.e.c - C.s.c; ++d) {
          var k = '',
            H = '',
            b = 0,
            V = []
          for (v = 0; v < p.length; ++v) p[v][d] != null && V.push(p[v][d])
          if (V.length == 0 || h[d] == null) {
            L[d] = '?'
            continue
          }
          for (v = 0; v < V.length; ++v) {
            switch (typeof V[v]) {
              case 'number':
                H = 'B'
                break
              case 'string':
                H = 'C'
                break
              case 'boolean':
                H = 'L'
                break
              case 'object':
                H = V[v] instanceof Date ? 'D' : 'C'
                break
              default:
                H = 'C'
            }
            ;(b = Math.max(b, String(V[v]).length)), (k = k && k != H ? 'C' : H)
          }
          b > 250 && (b = 250),
            (H = ((m[d] || {}).DBF || {}).type),
            H == 'C' && m[d].DBF.len > b && (b = m[d].DBF.len),
            k == 'B' && H == 'N' && ((k = 'N'), (ie[d] = m[d].DBF.dec), (b = m[d].DBF.len)),
            (Z[d] = k == 'C' || H == 'N' ? b : i[k] || 0),
            (F += Z[d]),
            (L[d] = k)
        }
        var G = c.next(32)
        for (
          G.write_shift(4, 318902576),
            G.write_shift(4, p.length),
            G.write_shift(2, 296 + 32 * A),
            G.write_shift(2, F),
            d = 0;
          d < 4;
          ++d
        )
          G.write_shift(4, 0)
        for (G.write_shift(4, 0 | ((+t[Ul] || 3) << 8)), d = 0, v = 0; d < h.length; ++d)
          if (h[d] != null) {
            var z = c.next(32),
              ae = (h[d].slice(-10) + '\0\0\0\0\0\0\0\0\0\0\0').slice(0, 11)
            z.write_shift(1, ae, 'sbcs'),
              z.write_shift(1, L[d] == '?' ? 'C' : L[d], 'sbcs'),
              z.write_shift(4, v),
              z.write_shift(1, Z[d] || i[L[d]] || 0),
              z.write_shift(1, ie[d] || 0),
              z.write_shift(1, 2),
              z.write_shift(4, 0),
              z.write_shift(1, 0),
              z.write_shift(4, 0),
              z.write_shift(4, 0),
              (v += Z[d] || i[L[d]] || 0)
          }
        var Re = c.next(264)
        for (Re.write_shift(4, 13), d = 0; d < 65; ++d) Re.write_shift(4, 0)
        for (d = 0; d < p.length; ++d) {
          var me = c.next(F)
          for (me.write_shift(1, 0), v = 0; v < h.length; ++v)
            if (h[v] != null)
              switch (L[v]) {
                case 'L':
                  me.write_shift(1, p[d][v] == null ? 63 : p[d][v] ? 84 : 70)
                  break
                case 'B':
                  me.write_shift(8, p[d][v] || 0, 'f')
                  break
                case 'N':
                  var st = '0'
                  for (
                    typeof p[d][v] == 'number' && (st = p[d][v].toFixed(ie[v] || 0)), A = 0;
                    A < Z[v] - st.length;
                    ++A
                  )
                    me.write_shift(1, 32)
                  me.write_shift(1, st, 'sbcs')
                  break
                case 'D':
                  p[d][v]
                    ? (me.write_shift(4, ('0000' + p[d][v].getFullYear()).slice(-4), 'sbcs'),
                      me.write_shift(2, ('00' + (p[d][v].getMonth() + 1)).slice(-2), 'sbcs'),
                      me.write_shift(2, ('00' + p[d][v].getDate()).slice(-2), 'sbcs'))
                    : me.write_shift(8, '00000000', 'sbcs')
                  break
                case 'C':
                  var te = String(p[d][v] != null ? p[d][v] : '').slice(0, Z[v])
                  for (me.write_shift(1, te, 'sbcs'), A = 0; A < Z[v] - te.length; ++A)
                    me.write_shift(1, 32)
                  break
              }
        }
        return c.next(1).write_shift(1, 26), c.end()
      }
      return { to_workbook: a, to_sheet: n, from_sheet: s }
    })(),
    jT = (function () {
      var e = {
          AA: '\xC0',
          BA: '\xC1',
          CA: '\xC2',
          DA: 195,
          HA: '\xC4',
          JA: 197,
          AE: '\xC8',
          BE: '\xC9',
          CE: '\xCA',
          HE: '\xCB',
          AI: '\xCC',
          BI: '\xCD',
          CI: '\xCE',
          HI: '\xCF',
          AO: '\xD2',
          BO: '\xD3',
          CO: '\xD4',
          DO: 213,
          HO: '\xD6',
          AU: '\xD9',
          BU: '\xDA',
          CU: '\xDB',
          HU: '\xDC',
          Aa: '\xE0',
          Ba: '\xE1',
          Ca: '\xE2',
          Da: 227,
          Ha: '\xE4',
          Ja: 229,
          Ae: '\xE8',
          Be: '\xE9',
          Ce: '\xEA',
          He: '\xEB',
          Ai: '\xEC',
          Bi: '\xED',
          Ci: '\xEE',
          Hi: '\xEF',
          Ao: '\xF2',
          Bo: '\xF3',
          Co: '\xF4',
          Do: 245,
          Ho: '\xF6',
          Au: '\xF9',
          Bu: '\xFA',
          Cu: '\xFB',
          Hu: '\xFC',
          KC: '\xC7',
          Kc: '\xE7',
          q: '\xE6',
          z: '\u0153',
          a: '\xC6',
          j: '\u0152',
          DN: 209,
          Dn: 241,
          Hy: 255,
          S: 169,
          c: 170,
          R: 174,
          'B ': 180,
          0: 176,
          1: 177,
          2: 178,
          3: 179,
          5: 181,
          6: 182,
          7: 183,
          Q: 185,
          k: 186,
          b: 208,
          i: 216,
          l: 222,
          s: 240,
          y: 248,
          '!': 161,
          '"': 162,
          '#': 163,
          '(': 164,
          '%': 165,
          "'": 167,
          'H ': 168,
          '+': 171,
          ';': 187,
          '<': 188,
          '=': 189,
          '>': 190,
          '?': 191,
          '{': 223
        },
        t = new RegExp(
          '\x1BN(' +
            dt(e)
              .join('|')
              .replace(/\|\|\|/, '|\\||')
              .replace(/([?()+])/g, '\\$1') +
            '|\\|)',
          'gm'
        ),
        r = function (h, p) {
          var m = e[p]
          return typeof m == 'number' ? Hl(m) : m
        },
        n = function (h, p, m) {
          var d = ((p.charCodeAt(0) - 32) << 4) | (m.charCodeAt(0) - 48)
          return d == 59 ? h : Hl(d)
        }
      e['|'] = 254
      function a(h, p) {
        switch (p.type) {
          case 'base64':
            return i(yr(h), p)
          case 'binary':
            return i(h, p)
          case 'buffer':
            return i(ke && Buffer.isBuffer(h) ? h.toString('binary') : Oa(h), p)
          case 'array':
            return i(ji(h), p)
        }
        throw new Error('Unrecognized type ' + p.type)
      }
      function i(h, p) {
        var m = h.split(/[\n\r]+/),
          d = -1,
          v = -1,
          A = 0,
          F = 0,
          C = [],
          L = [],
          Z = null,
          ie = {},
          k = [],
          H = [],
          b = [],
          V = 0,
          G
        for (+p.codepage >= 0 && ya(+p.codepage); A !== m.length; ++A) {
          V = 0
          var z = m[A].trim()
              .replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, n)
              .replace(t, r),
            ae = z
              .replace(/;;/g, '\0')
              .split(';')
              .map(function (O) {
                return O.replace(/\u0000/g, ';')
              }),
            Re = ae[0],
            me
          if (z.length > 0)
            switch (Re) {
              case 'ID':
                break
              case 'E':
                break
              case 'B':
                break
              case 'O':
                break
              case 'W':
                break
              case 'P':
                ae[1].charAt(0) == 'P' && L.push(z.slice(3).replace(/;;/g, ';'))
                break
              case 'C':
                var st = !1,
                  te = !1,
                  Se = !1,
                  ye = !1,
                  ot = -1,
                  ft = -1
                for (F = 1; F < ae.length; ++F)
                  switch (ae[F].charAt(0)) {
                    case 'A':
                      break
                    case 'X':
                      ;(v = parseInt(ae[F].slice(1)) - 1), (te = !0)
                      break
                    case 'Y':
                      for (
                        d = parseInt(ae[F].slice(1)) - 1, te || (v = 0), G = C.length;
                        G <= d;
                        ++G
                      )
                        C[G] = []
                      break
                    case 'K':
                      ;(me = ae[F].slice(1)),
                        me.charAt(0) === '"'
                          ? (me = me.slice(1, me.length - 1))
                          : me === 'TRUE'
                          ? (me = !0)
                          : me === 'FALSE'
                          ? (me = !1)
                          : isNaN(Cr(me))
                          ? isNaN(Ra(me).getDate()) || (me = Ft(me))
                          : ((me = Cr(me)), Z !== null && A0(Z) && (me = cc(me))),
                        (st = !0)
                      break
                    case 'E':
                      ye = !0
                      var y = YE(ae[F].slice(1), { r: d, c: v })
                      C[d][v] = [C[d][v], y]
                      break
                    case 'S':
                      ;(Se = !0), (C[d][v] = [C[d][v], 'S5S'])
                      break
                    case 'G':
                      break
                    case 'R':
                      ot = parseInt(ae[F].slice(1)) - 1
                      break
                    case 'C':
                      ft = parseInt(ae[F].slice(1)) - 1
                      break
                    default:
                      if (p && p.WTF) throw new Error('SYLK bad record ' + z)
                  }
                if (
                  (st &&
                    (C[d][v] && C[d][v].length == 2 ? (C[d][v][0] = me) : (C[d][v] = me),
                    (Z = null)),
                  Se)
                ) {
                  if (ye) throw new Error('SYLK shared formula cannot have own formula')
                  var M = ot > -1 && C[ot][ft]
                  if (!M || !M[1]) throw new Error('SYLK shared formula cannot find base')
                  C[d][v][1] = $E(M[1], { r: d - ot, c: v - ft })
                }
                break
              case 'F':
                var D = 0
                for (F = 1; F < ae.length; ++F)
                  switch (ae[F].charAt(0)) {
                    case 'X':
                      ;(v = parseInt(ae[F].slice(1)) - 1), ++D
                      break
                    case 'Y':
                      for (d = parseInt(ae[F].slice(1)) - 1, G = C.length; G <= d; ++G) C[G] = []
                      break
                    case 'M':
                      V = parseInt(ae[F].slice(1)) / 20
                      break
                    case 'F':
                      break
                    case 'G':
                      break
                    case 'P':
                      Z = L[parseInt(ae[F].slice(1))]
                      break
                    case 'S':
                      break
                    case 'D':
                      break
                    case 'N':
                      break
                    case 'W':
                      for (
                        b = ae[F].slice(1).split(' '), G = parseInt(b[0], 10);
                        G <= parseInt(b[1], 10);
                        ++G
                      )
                        (V = parseInt(b[2], 10)),
                          (H[G - 1] = V === 0 ? { hidden: !0 } : { wch: V }),
                          G0(H[G - 1])
                      break
                    case 'C':
                      ;(v = parseInt(ae[F].slice(1)) - 1), H[v] || (H[v] = {})
                      break
                    case 'R':
                      ;(d = parseInt(ae[F].slice(1)) - 1),
                        k[d] || (k[d] = {}),
                        V > 0 ? ((k[d].hpt = V), (k[d].hpx = vu(V))) : V === 0 && (k[d].hidden = !0)
                      break
                    default:
                      if (p && p.WTF) throw new Error('SYLK bad record ' + z)
                  }
                D < 1 && (Z = null)
                break
              default:
                if (p && p.WTF) throw new Error('SYLK bad record ' + z)
            }
        }
        return (
          k.length > 0 && (ie['!rows'] = k),
          H.length > 0 && (ie['!cols'] = H),
          p && p.sheetRows && (C = C.slice(0, p.sheetRows)),
          [C, ie]
        )
      }
      function s(h, p) {
        var m = a(h, p),
          d = m[0],
          v = m[1],
          A = Hn(d, p)
        return (
          dt(v).forEach(function (F) {
            A[F] = v[F]
          }),
          A
        )
      }
      function o(h, p) {
        return dn(s(h, p), p)
      }
      function l(h, p, m, d) {
        var v = 'C;Y' + (m + 1) + ';X' + (d + 1) + ';K'
        switch (h.t) {
          case 'n':
            ;(v += h.v || 0), h.f && !h.F && (v += ';E' + K0(h.f, { r: m, c: d }))
            break
          case 'b':
            v += h.v ? 'TRUE' : 'FALSE'
            break
          case 'e':
            v += h.w || h.v
            break
          case 'd':
            v += '"' + (h.w || h.v) + '"'
            break
          case 's':
            v += '"' + h.v.replace(/"/g, '').replace(/;/g, ';;') + '"'
            break
        }
        return v
      }
      function f(h, p) {
        p.forEach(function (m, d) {
          var v = 'F;W' + (d + 1) + ' ' + (d + 1) + ' '
          m.hidden
            ? (v += '0')
            : (typeof m.width == 'number' && !m.wpx && (m.wpx = Qi(m.width)),
              typeof m.wpx == 'number' && !m.wch && (m.wch = es(m.wpx)),
              typeof m.wch == 'number' && (v += Math.round(m.wch))),
            v.charAt(v.length - 1) != ' ' && h.push(v)
        })
      }
      function c(h, p) {
        p.forEach(function (m, d) {
          var v = 'F;'
          m.hidden
            ? (v += 'M0;')
            : m.hpt
            ? (v += 'M' + 20 * m.hpt + ';')
            : m.hpx && (v += 'M' + 20 * ts(m.hpx) + ';'),
            v.length > 2 && h.push(v + 'R' + (d + 1))
        })
      }
      function u(h, p) {
        var m = ['ID;PWXL;N;E'],
          d = [],
          v = je(h['!ref']),
          A,
          F = Array.isArray(h),
          C = `\r
`
        m.push('P;PGeneral'),
          m.push('F;P0;DG0G8;M255'),
          h['!cols'] && f(m, h['!cols']),
          h['!rows'] && c(m, h['!rows']),
          m.push(
            'B;Y' +
              (v.e.r - v.s.r + 1) +
              ';X' +
              (v.e.c - v.s.c + 1) +
              ';D' +
              [v.s.c, v.s.r, v.e.c, v.e.r].join(' ')
          )
        for (var L = v.s.r; L <= v.e.r; ++L)
          for (var Z = v.s.c; Z <= v.e.c; ++Z) {
            var ie = Pe({ r: L, c: Z })
            ;(A = F ? (h[L] || [])[Z] : h[ie]),
              !(!A || (A.v == null && (!A.f || A.F))) && d.push(l(A, h, L, Z))
          }
        return m.join(C) + C + d.join(C) + C + 'E' + C
      }
      return { to_workbook: o, to_sheet: s, from_sheet: u }
    })(),
    VT = (function () {
      function e(i, s) {
        switch (s.type) {
          case 'base64':
            return t(yr(i), s)
          case 'binary':
            return t(i, s)
          case 'buffer':
            return t(ke && Buffer.isBuffer(i) ? i.toString('binary') : Oa(i), s)
          case 'array':
            return t(ji(i), s)
        }
        throw new Error('Unrecognized type ' + s.type)
      }
      function t(i, s) {
        for (
          var o = i.split(`
`),
            l = -1,
            f = -1,
            c = 0,
            u = [];
          c !== o.length;
          ++c
        ) {
          if (o[c].trim() === 'BOT') {
            ;(u[++l] = []), (f = 0)
            continue
          }
          if (!(l < 0)) {
            var h = o[c].trim().split(','),
              p = h[0],
              m = h[1]
            ++c
            for (var d = o[c] || ''; (d.match(/["]/g) || []).length & 1 && c < o.length - 1; )
              d +=
                `
` + o[++c]
            switch (((d = d.trim()), +p)) {
              case -1:
                if (d === 'BOT') {
                  ;(u[++l] = []), (f = 0)
                  continue
                } else if (d !== 'EOD') throw new Error('Unrecognized DIF special command ' + d)
                break
              case 0:
                d === 'TRUE'
                  ? (u[l][f] = !0)
                  : d === 'FALSE'
                  ? (u[l][f] = !1)
                  : isNaN(Cr(m))
                  ? isNaN(Ra(m).getDate())
                    ? (u[l][f] = m)
                    : (u[l][f] = Ft(m))
                  : (u[l][f] = Cr(m)),
                  ++f
                break
              case 1:
                ;(d = d.slice(1, d.length - 1)),
                  (d = d.replace(/""/g, '"')),
                  d && d.match(/^=".*"$/) && (d = d.slice(2, -1)),
                  (u[l][f++] = d !== '' ? d : null)
                break
            }
            if (d === 'EOD') break
          }
        }
        return s && s.sheetRows && (u = u.slice(0, s.sheetRows)), u
      }
      function r(i, s) {
        return Hn(e(i, s), s)
      }
      function n(i, s) {
        return dn(r(i, s), s)
      }
      var a = (function () {
        var i = function (l, f, c, u, h) {
            l.push(f), l.push(c + ',' + u), l.push('"' + h.replace(/"/g, '""') + '"')
          },
          s = function (l, f, c, u) {
            l.push(f + ',' + c), l.push(f == 1 ? '"' + u.replace(/"/g, '""') + '"' : u)
          }
        return function (l) {
          var f = [],
            c = je(l['!ref']),
            u,
            h = Array.isArray(l)
          i(f, 'TABLE', 0, 1, 'sheetjs'),
            i(f, 'VECTORS', 0, c.e.r - c.s.r + 1, ''),
            i(f, 'TUPLES', 0, c.e.c - c.s.c + 1, ''),
            i(f, 'DATA', 0, 0, '')
          for (var p = c.s.r; p <= c.e.r; ++p) {
            s(f, -1, 0, 'BOT')
            for (var m = c.s.c; m <= c.e.c; ++m) {
              var d = Pe({ r: p, c: m })
              if (((u = h ? (l[p] || [])[m] : l[d]), !u)) {
                s(f, 1, 0, '')
                continue
              }
              switch (u.t) {
                case 'n':
                  var v = u.w
                  !v && u.v != null && (v = u.v),
                    v == null
                      ? u.f && !u.F
                        ? s(f, 1, 0, '=' + u.f)
                        : s(f, 1, 0, '')
                      : s(f, 0, v, 'V')
                  break
                case 'b':
                  s(f, 0, u.v ? 1 : 0, u.v ? 'TRUE' : 'FALSE')
                  break
                case 's':
                  s(f, 1, 0, isNaN(u.v) ? u.v : '="' + u.v + '"')
                  break
                case 'd':
                  u.w || (u.w = Fr(u.z || ze[14], Rt(Ft(u.v)))), s(f, 0, u.w, 'V')
                  break
                default:
                  s(f, 1, 0, '')
              }
            }
          }
          s(f, -1, 0, 'EOD')
          var A = `\r
`,
            F = f.join(A)
          return F
        }
      })()
      return { to_workbook: n, to_sheet: r, from_sheet: a }
    })(),
    du = (function () {
      function e(u) {
        return u
          .replace(/\\b/g, '\\')
          .replace(/\\c/g, ':')
          .replace(
            /\\n/g,
            `
`
          )
      }
      function t(u) {
        return u.replace(/\\/g, '\\b').replace(/:/g, '\\c').replace(/\n/g, '\\n')
      }
      function r(u, h) {
        for (
          var p = u.split(`
`),
            m = -1,
            d = -1,
            v = 0,
            A = [];
          v !== p.length;
          ++v
        ) {
          var F = p[v].trim().split(':')
          if (F[0] === 'cell') {
            var C = ct(F[1])
            if (A.length <= C.r) for (m = A.length; m <= C.r; ++m) A[m] || (A[m] = [])
            switch (((m = C.r), (d = C.c), F[2])) {
              case 't':
                A[m][d] = e(F[3])
                break
              case 'v':
                A[m][d] = +F[3]
                break
              case 'vtf':
                var L = F[F.length - 1]
              case 'vtc':
                switch (F[3]) {
                  case 'nl':
                    A[m][d] = !!+F[4]
                    break
                  default:
                    A[m][d] = +F[4]
                    break
                }
                F[2] == 'vtf' && (A[m][d] = [A[m][d], L])
            }
          }
        }
        return h && h.sheetRows && (A = A.slice(0, h.sheetRows)), A
      }
      function n(u, h) {
        return Hn(r(u, h), h)
      }
      function a(u, h) {
        return dn(n(u, h), h)
      }
      var i = [
          'socialcalc:version:1.5',
          'MIME-Version: 1.0',
          'Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave'
        ].join(`
`),
        s =
          ['--SocialCalcSpreadsheetControlSave', 'Content-type: text/plain; charset=UTF-8'].join(`
`) +
          `
`,
        o = ['# SocialCalc Spreadsheet Control Save', 'part:sheet'].join(`
`),
        l = '--SocialCalcSpreadsheetControlSave--'
      function f(u) {
        if (!u || !u['!ref']) return ''
        for (
          var h = [], p = [], m, d = '', v = Wt(u['!ref']), A = Array.isArray(u), F = v.s.r;
          F <= v.e.r;
          ++F
        )
          for (var C = v.s.c; C <= v.e.c; ++C)
            if (
              ((d = Pe({ r: F, c: C })),
              (m = A ? (u[F] || [])[C] : u[d]),
              !(!m || m.v == null || m.t === 'z'))
            ) {
              switch (((p = ['cell', d, 't']), m.t)) {
                case 's':
                case 'str':
                  p.push(t(m.v))
                  break
                case 'n':
                  m.f
                    ? ((p[2] = 'vtf'), (p[3] = 'n'), (p[4] = m.v), (p[5] = t(m.f)))
                    : ((p[2] = 'v'), (p[3] = m.v))
                  break
                case 'b':
                  ;(p[2] = 'vt' + (m.f ? 'f' : 'c')),
                    (p[3] = 'nl'),
                    (p[4] = m.v ? '1' : '0'),
                    (p[5] = t(m.f || (m.v ? 'TRUE' : 'FALSE')))
                  break
                case 'd':
                  var L = Rt(Ft(m.v))
                  ;(p[2] = 'vtc'),
                    (p[3] = 'nd'),
                    (p[4] = '' + L),
                    (p[5] = m.w || Fr(m.z || ze[14], L))
                  break
                case 'e':
                  continue
              }
              h.push(p.join(':'))
            }
        return (
          h.push('sheet:c:' + (v.e.c - v.s.c + 1) + ':r:' + (v.e.r - v.s.r + 1) + ':tvf:1'),
          h.push('valueformat:1:text-wiki'),
          h.join(`
`)
        )
      }
      function c(u) {
        return [i, s, o, s, f(u), l].join(`
`)
      }
      return { to_workbook: a, to_sheet: n, from_sheet: c }
    })(),
    GT = (function () {
      function e(c, u, h, p, m) {
        m.raw
          ? (u[h][p] = c)
          : c === '' ||
            (c === 'TRUE'
              ? (u[h][p] = !0)
              : c === 'FALSE'
              ? (u[h][p] = !1)
              : isNaN(Cr(c))
              ? isNaN(Ra(c).getDate())
                ? (u[h][p] = c)
                : (u[h][p] = Ft(c))
              : (u[h][p] = Cr(c)))
      }
      function t(c, u) {
        var h = u || {},
          p = []
        if (!c || c.length === 0) return p
        for (var m = c.split(/[\r\n]/), d = m.length - 1; d >= 0 && m[d].length === 0; ) --d
        for (var v = 10, A = 0, F = 0; F <= d; ++F)
          (A = m[F].indexOf(' ')), A == -1 ? (A = m[F].length) : A++, (v = Math.max(v, A))
        for (F = 0; F <= d; ++F) {
          p[F] = []
          var C = 0
          for (e(m[F].slice(0, v).trim(), p, F, C, h), C = 1; C <= (m[F].length - v) / 10 + 1; ++C)
            e(m[F].slice(v + (C - 1) * 10, v + C * 10).trim(), p, F, C, h)
        }
        return h.sheetRows && (p = p.slice(0, h.sheetRows)), p
      }
      var r = { 44: ',', 9: '	', 59: ';', 124: '|' },
        n = { 44: 3, 9: 2, 59: 1, 124: 0 }
      function a(c) {
        for (var u = {}, h = !1, p = 0, m = 0; p < c.length; ++p)
          (m = c.charCodeAt(p)) == 34 ? (h = !h) : !h && m in r && (u[m] = (u[m] || 0) + 1)
        m = []
        for (p in u) Object.prototype.hasOwnProperty.call(u, p) && m.push([u[p], p])
        if (!m.length) {
          u = n
          for (p in u) Object.prototype.hasOwnProperty.call(u, p) && m.push([u[p], p])
        }
        return (
          m.sort(function (d, v) {
            return d[0] - v[0] || n[d[1]] - n[v[1]]
          }),
          r[m.pop()[1]] || 44
        )
      }
      function i(c, u) {
        var h = u || {},
          p = '',
          m = h.dense ? [] : {},
          d = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }
        c.slice(0, 4) == 'sep='
          ? c.charCodeAt(5) == 13 && c.charCodeAt(6) == 10
            ? ((p = c.charAt(4)), (c = c.slice(7)))
            : c.charCodeAt(5) == 13 || c.charCodeAt(5) == 10
            ? ((p = c.charAt(4)), (c = c.slice(6)))
            : (p = a(c.slice(0, 1024)))
          : h && h.FS
          ? (p = h.FS)
          : (p = a(c.slice(0, 1024)))
        var v = 0,
          A = 0,
          F = 0,
          C = 0,
          L = 0,
          Z = p.charCodeAt(0),
          ie = !1,
          k = 0,
          H = c.charCodeAt(0)
        c = c.replace(
          /\r\n/gm,
          `
`
        )
        var b = h.dateNF != null ? fw(h.dateNF) : null
        function V() {
          var G = c.slice(C, L),
            z = {}
          if (
            (G.charAt(0) == '"' &&
              G.charAt(G.length - 1) == '"' &&
              (G = G.slice(1, -1).replace(/""/g, '"')),
            G.length === 0)
          )
            z.t = 'z'
          else if (h.raw) (z.t = 's'), (z.v = G)
          else if (G.trim().length === 0) (z.t = 's'), (z.v = G)
          else if (G.charCodeAt(0) == 61)
            G.charCodeAt(1) == 34 && G.charCodeAt(G.length - 1) == 34
              ? ((z.t = 's'), (z.v = G.slice(2, -1).replace(/""/g, '"')))
              : jE(G)
              ? ((z.t = 'n'), (z.f = G.slice(1)))
              : ((z.t = 's'), (z.v = G))
          else if (G == 'TRUE') (z.t = 'b'), (z.v = !0)
          else if (G == 'FALSE') (z.t = 'b'), (z.v = !1)
          else if (!isNaN((F = Cr(G)))) (z.t = 'n'), h.cellText !== !1 && (z.w = G), (z.v = F)
          else if (!isNaN(Ra(G).getDate()) || (b && G.match(b))) {
            z.z = h.dateNF || ze[14]
            var ae = 0
            b && G.match(b) && ((G = lw(G, h.dateNF, G.match(b) || [])), (ae = 1)),
              h.cellDates ? ((z.t = 'd'), (z.v = Ft(G, ae))) : ((z.t = 'n'), (z.v = Rt(Ft(G, ae)))),
              h.cellText !== !1 && (z.w = Fr(z.z, z.v instanceof Date ? Rt(z.v) : z.v)),
              h.cellNF || delete z.z
          } else (z.t = 's'), (z.v = G)
          if (
            (z.t == 'z' ||
              (h.dense ? (m[v] || (m[v] = []), (m[v][A] = z)) : (m[Pe({ c: A, r: v })] = z)),
            (C = L + 1),
            (H = c.charCodeAt(C)),
            d.e.c < A && (d.e.c = A),
            d.e.r < v && (d.e.r = v),
            k == Z)
          )
            ++A
          else if (((A = 0), ++v, h.sheetRows && h.sheetRows <= v)) return !0
        }
        e: for (; L < c.length; ++L)
          switch ((k = c.charCodeAt(L))) {
            case 34:
              H === 34 && (ie = !ie)
              break
            case Z:
            case 10:
            case 13:
              if (!ie && V()) break e
              break
          }
        return L - C > 0 && V(), (m['!ref'] = tt(d)), m
      }
      function s(c, u) {
        return !(u && u.PRN) ||
          u.FS ||
          c.slice(0, 4) == 'sep=' ||
          c.indexOf('	') >= 0 ||
          c.indexOf(',') >= 0 ||
          c.indexOf(';') >= 0
          ? i(c, u)
          : Hn(t(c, u), u)
      }
      function o(c, u) {
        var h = '',
          p = u.type == 'string' ? [0, 0, 0, 0] : a3(c, u)
        switch (u.type) {
          case 'base64':
            h = yr(c)
            break
          case 'binary':
            h = c
            break
          case 'buffer':
            u.codepage == 65001
              ? (h = c.toString('utf8'))
              : u.codepage && typeof cn < 'u'
              ? (h = cn.utils.decode(u.codepage, c))
              : (h = ke && Buffer.isBuffer(c) ? c.toString('binary') : Oa(c))
            break
          case 'array':
            h = ji(c)
            break
          case 'string':
            h = c
            break
          default:
            throw new Error('Unrecognized type ' + u.type)
        }
        return (
          p[0] == 239 && p[1] == 187 && p[2] == 191
            ? (h = Na(h.slice(3)))
            : u.type != 'string' && u.type != 'buffer' && u.codepage == 65001
            ? (h = Na(h))
            : u.type == 'binary' &&
              typeof cn < 'u' &&
              u.codepage &&
              (h = cn.utils.decode(u.codepage, cn.utils.encode(28591, h))),
          h.slice(0, 19) == 'socialcalc:version:'
            ? du.to_sheet(u.type == 'string' ? h : Na(h), u)
            : s(h, u)
        )
      }
      function l(c, u) {
        return dn(o(c, u), u)
      }
      function f(c) {
        for (var u = [], h = je(c['!ref']), p, m = Array.isArray(c), d = h.s.r; d <= h.e.r; ++d) {
          for (var v = [], A = h.s.c; A <= h.e.c; ++A) {
            var F = Pe({ r: d, c: A })
            if (((p = m ? (c[d] || [])[A] : c[F]), !p || p.v == null)) {
              v.push('          ')
              continue
            }
            for (var C = (p.w || (kr(p), p.w) || '').slice(0, 10); C.length < 10; ) C += ' '
            v.push(C + (A === 0 ? ' ' : ''))
          }
          u.push(v.join(''))
        }
        return u.join(`
`)
      }
      return { to_workbook: l, to_sheet: o, from_sheet: f }
    })(),
    pu = (function () {
      function e(y, M, D) {
        if (!!y) {
          Ut(y, y.l || 0)
          for (var O = D.Enum || ot; y.l < y.length; ) {
            var j = y.read_shift(2),
              ue = O[j] || O[65535],
              he = y.read_shift(2),
              ce = y.l + he,
              ne = ue.f && ue.f(y, he, D)
            if (((y.l = ce), M(ne, ue, j))) return
          }
        }
      }
      function t(y, M) {
        switch (M.type) {
          case 'base64':
            return r(er(yr(y)), M)
          case 'binary':
            return r(er(y), M)
          case 'buffer':
          case 'array':
            return r(y, M)
        }
        throw 'Unsupported type ' + M.type
      }
      function r(y, M) {
        if (!y) return y
        var D = M || {},
          O = D.dense ? [] : {},
          j = 'Sheet1',
          ue = '',
          he = 0,
          ce = {},
          ne = [],
          be = [],
          Te = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
          gt = D.sheetRows || 0
        if (y[2] == 0 && (y[3] == 8 || y[3] == 9) && y.length >= 16 && y[14] == 5 && y[15] === 108)
          throw new Error('Unsupported Works 3 for Mac file')
        if (y[2] == 2)
          (D.Enum = ot),
            e(
              y,
              function (le, Dt, de) {
                switch (de) {
                  case 0:
                    ;(D.vers = le), le >= 4096 && (D.qpro = !0)
                    break
                  case 6:
                    Te = le
                    break
                  case 204:
                    le && (ue = le)
                    break
                  case 222:
                    ue = le
                    break
                  case 15:
                  case 51:
                    D.qpro || (le[1].v = le[1].v.slice(1))
                  case 13:
                  case 14:
                  case 16:
                    de == 14 &&
                      (le[2] & 112) == 112 &&
                      (le[2] & 15) > 1 &&
                      (le[2] & 15) < 15 &&
                      ((le[1].z = D.dateNF || ze[14]),
                      D.cellDates && ((le[1].t = 'd'), (le[1].v = cc(le[1].v)))),
                      D.qpro &&
                        le[3] > he &&
                        ((O['!ref'] = tt(Te)),
                        (ce[j] = O),
                        ne.push(j),
                        (O = D.dense ? [] : {}),
                        (Te = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                        (he = le[3]),
                        (j = ue || 'Sheet' + (he + 1)),
                        (ue = ''))
                    var Ir = D.dense ? (O[le[0].r] || [])[le[0].c] : O[Pe(le[0])]
                    if (Ir) {
                      ;(Ir.t = le[1].t),
                        (Ir.v = le[1].v),
                        le[1].z != null && (Ir.z = le[1].z),
                        le[1].f != null && (Ir.f = le[1].f)
                      break
                    }
                    D.dense
                      ? (O[le[0].r] || (O[le[0].r] = []), (O[le[0].r][le[0].c] = le[1]))
                      : (O[Pe(le[0])] = le[1])
                    break
                }
              },
              D
            )
        else if (y[2] == 26 || y[2] == 14)
          (D.Enum = ft),
            y[2] == 14 && ((D.qpro = !0), (y.l = 0)),
            e(
              y,
              function (le, Dt, de) {
                switch (de) {
                  case 204:
                    j = le
                    break
                  case 22:
                    le[1].v = le[1].v.slice(1)
                  case 23:
                  case 24:
                  case 25:
                  case 37:
                  case 39:
                  case 40:
                    if (
                      (le[3] > he &&
                        ((O['!ref'] = tt(Te)),
                        (ce[j] = O),
                        ne.push(j),
                        (O = D.dense ? [] : {}),
                        (Te = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                        (he = le[3]),
                        (j = 'Sheet' + (he + 1))),
                      gt > 0 && le[0].r >= gt)
                    )
                      break
                    D.dense
                      ? (O[le[0].r] || (O[le[0].r] = []), (O[le[0].r][le[0].c] = le[1]))
                      : (O[Pe(le[0])] = le[1]),
                      Te.e.c < le[0].c && (Te.e.c = le[0].c),
                      Te.e.r < le[0].r && (Te.e.r = le[0].r)
                    break
                  case 27:
                    le[14e3] && (be[le[14e3][0]] = le[14e3][1])
                    break
                  case 1537:
                    ;(be[le[0]] = le[1]), le[0] == he && (j = le[1])
                    break
                }
              },
              D
            )
        else throw new Error('Unrecognized LOTUS BOF ' + y[2])
        if (((O['!ref'] = tt(Te)), (ce[ue || j] = O), ne.push(ue || j), !be.length))
          return { SheetNames: ne, Sheets: ce }
        for (var Oe = {}, Kt = [], Ve = 0; Ve < be.length; ++Ve)
          ce[ne[Ve]]
            ? (Kt.push(be[Ve] || ne[Ve]), (Oe[be[Ve]] = ce[be[Ve]] || ce[ne[Ve]]))
            : (Kt.push(be[Ve]), (Oe[be[Ve]] = { '!ref': 'A1' }))
        return { SheetNames: Kt, Sheets: Oe }
      }
      function n(y, M) {
        var D = M || {}
        if ((+D.codepage >= 0 && ya(+D.codepage), D.type == 'string'))
          throw new Error('Cannot write WK1 to JS string')
        var O = Pt(),
          j = je(y['!ref']),
          ue = Array.isArray(y),
          he = []
        ee(O, 0, i(1030)), ee(O, 6, l(j))
        for (var ce = Math.min(j.e.r, 8191), ne = j.s.r; ne <= ce; ++ne)
          for (var be = xt(ne), Te = j.s.c; Te <= j.e.c; ++Te) {
            ne === j.s.r && (he[Te] = Et(Te))
            var gt = he[Te] + be,
              Oe = ue ? (y[ne] || [])[Te] : y[gt]
            if (!(!Oe || Oe.t == 'z'))
              if (Oe.t == 'n')
                (Oe.v | 0) == Oe.v && Oe.v >= -32768 && Oe.v <= 32767
                  ? ee(O, 13, p(ne, Te, Oe.v))
                  : ee(O, 14, d(ne, Te, Oe.v))
              else {
                var Kt = kr(Oe)
                ee(O, 15, u(ne, Te, Kt.slice(0, 239)))
              }
          }
        return ee(O, 1), O.end()
      }
      function a(y, M) {
        var D = M || {}
        if ((+D.codepage >= 0 && ya(+D.codepage), D.type == 'string'))
          throw new Error('Cannot write WK3 to JS string')
        var O = Pt()
        ee(O, 0, s(y))
        for (var j = 0, ue = 0; j < y.SheetNames.length; ++j)
          (y.Sheets[y.SheetNames[j]] || {})['!ref'] && ee(O, 27, ye(y.SheetNames[j], ue++))
        var he = 0
        for (j = 0; j < y.SheetNames.length; ++j) {
          var ce = y.Sheets[y.SheetNames[j]]
          if (!(!ce || !ce['!ref'])) {
            for (
              var ne = je(ce['!ref']),
                be = Array.isArray(ce),
                Te = [],
                gt = Math.min(ne.e.r, 8191),
                Oe = ne.s.r;
              Oe <= gt;
              ++Oe
            )
              for (var Kt = xt(Oe), Ve = ne.s.c; Ve <= ne.e.c; ++Ve) {
                Oe === ne.s.r && (Te[Ve] = Et(Ve))
                var le = Te[Ve] + Kt,
                  Dt = be ? (ce[Oe] || [])[Ve] : ce[le]
                if (!(!Dt || Dt.t == 'z'))
                  if (Dt.t == 'n') ee(O, 23, V(Oe, Ve, he, Dt.v))
                  else {
                    var de = kr(Dt)
                    ee(O, 22, k(Oe, Ve, he, de.slice(0, 239)))
                  }
              }
            ++he
          }
        }
        return ee(O, 1), O.end()
      }
      function i(y) {
        var M = B(2)
        return M.write_shift(2, y), M
      }
      function s(y) {
        var M = B(26)
        M.write_shift(2, 4096), M.write_shift(2, 4), M.write_shift(4, 0)
        for (var D = 0, O = 0, j = 0, ue = 0; ue < y.SheetNames.length; ++ue) {
          var he = y.SheetNames[ue],
            ce = y.Sheets[he]
          if (!(!ce || !ce['!ref'])) {
            ++j
            var ne = Wt(ce['!ref'])
            D < ne.e.r && (D = ne.e.r), O < ne.e.c && (O = ne.e.c)
          }
        }
        return (
          D > 8191 && (D = 8191),
          M.write_shift(2, D),
          M.write_shift(1, j),
          M.write_shift(1, O),
          M.write_shift(2, 0),
          M.write_shift(2, 0),
          M.write_shift(1, 1),
          M.write_shift(1, 2),
          M.write_shift(4, 0),
          M.write_shift(4, 0),
          M
        )
      }
      function o(y, M, D) {
        var O = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }
        return M == 8 && D.qpro
          ? ((O.s.c = y.read_shift(1)),
            y.l++,
            (O.s.r = y.read_shift(2)),
            (O.e.c = y.read_shift(1)),
            y.l++,
            (O.e.r = y.read_shift(2)),
            O)
          : ((O.s.c = y.read_shift(2)),
            (O.s.r = y.read_shift(2)),
            M == 12 && D.qpro && (y.l += 2),
            (O.e.c = y.read_shift(2)),
            (O.e.r = y.read_shift(2)),
            M == 12 && D.qpro && (y.l += 2),
            O.s.c == 65535 && (O.s.c = O.e.c = O.s.r = O.e.r = 0),
            O)
      }
      function l(y) {
        var M = B(8)
        return (
          M.write_shift(2, y.s.c),
          M.write_shift(2, y.s.r),
          M.write_shift(2, y.e.c),
          M.write_shift(2, y.e.r),
          M
        )
      }
      function f(y, M, D) {
        var O = [{ c: 0, r: 0 }, { t: 'n', v: 0 }, 0, 0]
        return (
          D.qpro && D.vers != 20768
            ? ((O[0].c = y.read_shift(1)),
              (O[3] = y.read_shift(1)),
              (O[0].r = y.read_shift(2)),
              (y.l += 2))
            : ((O[2] = y.read_shift(1)), (O[0].c = y.read_shift(2)), (O[0].r = y.read_shift(2))),
          O
        )
      }
      function c(y, M, D) {
        var O = y.l + M,
          j = f(y, M, D)
        if (((j[1].t = 's'), D.vers == 20768)) {
          y.l++
          var ue = y.read_shift(1)
          return (j[1].v = y.read_shift(ue, 'utf8')), j
        }
        return D.qpro && y.l++, (j[1].v = y.read_shift(O - y.l, 'cstr')), j
      }
      function u(y, M, D) {
        var O = B(7 + D.length)
        O.write_shift(1, 255), O.write_shift(2, M), O.write_shift(2, y), O.write_shift(1, 39)
        for (var j = 0; j < O.length; ++j) {
          var ue = D.charCodeAt(j)
          O.write_shift(1, ue >= 128 ? 95 : ue)
        }
        return O.write_shift(1, 0), O
      }
      function h(y, M, D) {
        var O = f(y, M, D)
        return (O[1].v = y.read_shift(2, 'i')), O
      }
      function p(y, M, D) {
        var O = B(7)
        return (
          O.write_shift(1, 255),
          O.write_shift(2, M),
          O.write_shift(2, y),
          O.write_shift(2, D, 'i'),
          O
        )
      }
      function m(y, M, D) {
        var O = f(y, M, D)
        return (O[1].v = y.read_shift(8, 'f')), O
      }
      function d(y, M, D) {
        var O = B(13)
        return (
          O.write_shift(1, 255),
          O.write_shift(2, M),
          O.write_shift(2, y),
          O.write_shift(8, D, 'f'),
          O
        )
      }
      function v(y, M, D) {
        var O = y.l + M,
          j = f(y, M, D)
        if (((j[1].v = y.read_shift(8, 'f')), D.qpro)) y.l = O
        else {
          var ue = y.read_shift(2)
          L(y.slice(y.l, y.l + ue), j), (y.l += ue)
        }
        return j
      }
      function A(y, M, D) {
        var O = M & 32768
        return (
          (M &= -32769),
          (M = (O ? y : 0) + (M >= 8192 ? M - 16384 : M)),
          (O ? '' : '$') + (D ? Et(M) : xt(M))
        )
      }
      var F = {
          51: ['FALSE', 0],
          52: ['TRUE', 0],
          70: ['LEN', 1],
          80: ['SUM', 69],
          81: ['AVERAGEA', 69],
          82: ['COUNTA', 69],
          83: ['MINA', 69],
          84: ['MAXA', 69],
          111: ['T', 1]
        },
        C = [
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '+',
          '-',
          '*',
          '/',
          '^',
          '=',
          '<>',
          '<=',
          '>=',
          '<',
          '>',
          '',
          '',
          '',
          '',
          '&',
          '',
          '',
          '',
          '',
          '',
          '',
          ''
        ]
      function L(y, M) {
        Ut(y, 0)
        for (var D = [], O = 0, j = '', ue = '', he = '', ce = ''; y.l < y.length; ) {
          var ne = y[y.l++]
          switch (ne) {
            case 0:
              D.push(y.read_shift(8, 'f'))
              break
            case 1:
              ;(ue = A(M[0].c, y.read_shift(2), !0)),
                (j = A(M[0].r, y.read_shift(2), !1)),
                D.push(ue + j)
              break
            case 2:
              {
                var be = A(M[0].c, y.read_shift(2), !0),
                  Te = A(M[0].r, y.read_shift(2), !1)
                ;(ue = A(M[0].c, y.read_shift(2), !0)),
                  (j = A(M[0].r, y.read_shift(2), !1)),
                  D.push(be + Te + ':' + ue + j)
              }
              break
            case 3:
              if (y.l < y.length) {
                console.error('WK1 premature formula end')
                return
              }
              break
            case 4:
              D.push('(' + D.pop() + ')')
              break
            case 5:
              D.push(y.read_shift(2))
              break
            case 6:
              {
                for (var gt = ''; (ne = y[y.l++]); ) gt += String.fromCharCode(ne)
                D.push('"' + gt.replace(/"/g, '""') + '"')
              }
              break
            case 8:
              D.push('-' + D.pop())
              break
            case 23:
              D.push('+' + D.pop())
              break
            case 22:
              D.push('NOT(' + D.pop() + ')')
              break
            case 20:
            case 21:
              ;(ce = D.pop()),
                (he = D.pop()),
                D.push(['AND', 'OR'][ne - 20] + '(' + he + ',' + ce + ')')
              break
            default:
              if (ne < 32 && C[ne]) (ce = D.pop()), (he = D.pop()), D.push(he + C[ne] + ce)
              else if (F[ne]) {
                if (((O = F[ne][1]), O == 69 && (O = y[y.l++]), O > D.length)) {
                  console.error(
                    'WK1 bad formula parse 0x' + ne.toString(16) + ':|' + D.join('|') + '|'
                  )
                  return
                }
                var Oe = D.slice(-O)
                ;(D.length -= O), D.push(F[ne][0] + '(' + Oe.join(',') + ')')
              } else
                return ne <= 7
                  ? console.error('WK1 invalid opcode ' + ne.toString(16))
                  : ne <= 24
                  ? console.error('WK1 unsupported op ' + ne.toString(16))
                  : ne <= 30
                  ? console.error('WK1 invalid opcode ' + ne.toString(16))
                  : ne <= 115
                  ? console.error('WK1 unsupported function opcode ' + ne.toString(16))
                  : console.error('WK1 unrecognized opcode ' + ne.toString(16))
          }
        }
        D.length == 1
          ? (M[1].f = '' + D[0])
          : console.error('WK1 bad formula parse |' + D.join('|') + '|')
      }
      function Z(y) {
        var M = [{ c: 0, r: 0 }, { t: 'n', v: 0 }, 0]
        return (M[0].r = y.read_shift(2)), (M[3] = y[y.l++]), (M[0].c = y[y.l++]), M
      }
      function ie(y, M) {
        var D = Z(y)
        return (D[1].t = 's'), (D[1].v = y.read_shift(M - 4, 'cstr')), D
      }
      function k(y, M, D, O) {
        var j = B(6 + O.length)
        j.write_shift(2, y), j.write_shift(1, D), j.write_shift(1, M), j.write_shift(1, 39)
        for (var ue = 0; ue < O.length; ++ue) {
          var he = O.charCodeAt(ue)
          j.write_shift(1, he >= 128 ? 95 : he)
        }
        return j.write_shift(1, 0), j
      }
      function H(y, M) {
        var D = Z(y)
        D[1].v = y.read_shift(2)
        var O = D[1].v >> 1
        if (D[1].v & 1)
          switch (O & 7) {
            case 0:
              O = (O >> 3) * 5e3
              break
            case 1:
              O = (O >> 3) * 500
              break
            case 2:
              O = (O >> 3) / 20
              break
            case 3:
              O = (O >> 3) / 200
              break
            case 4:
              O = (O >> 3) / 2e3
              break
            case 5:
              O = (O >> 3) / 2e4
              break
            case 6:
              O = (O >> 3) / 16
              break
            case 7:
              O = (O >> 3) / 64
              break
          }
        return (D[1].v = O), D
      }
      function b(y, M) {
        var D = Z(y),
          O = y.read_shift(4),
          j = y.read_shift(4),
          ue = y.read_shift(2)
        if (ue == 65535)
          return (
            O === 0 && j === 3221225472
              ? ((D[1].t = 'e'), (D[1].v = 15))
              : O === 0 && j === 3489660928
              ? ((D[1].t = 'e'), (D[1].v = 42))
              : (D[1].v = 0),
            D
          )
        var he = ue & 32768
        return (
          (ue = (ue & 32767) - 16446),
          (D[1].v = (1 - he * 2) * (j * Math.pow(2, ue + 32) + O * Math.pow(2, ue))),
          D
        )
      }
      function V(y, M, D, O) {
        var j = B(14)
        if ((j.write_shift(2, y), j.write_shift(1, D), j.write_shift(1, M), O == 0))
          return j.write_shift(4, 0), j.write_shift(4, 0), j.write_shift(2, 65535), j
        var ue = 0,
          he = 0,
          ce = 0,
          ne = 0
        return (
          O < 0 && ((ue = 1), (O = -O)),
          (he = Math.log2(O) | 0),
          (O /= Math.pow(2, he - 31)),
          (ne = O >>> 0),
          (ne & 2147483648) == 0 && ((O /= 2), ++he, (ne = O >>> 0)),
          (O -= ne),
          (ne |= 2147483648),
          (ne >>>= 0),
          (O *= Math.pow(2, 32)),
          (ce = O >>> 0),
          j.write_shift(4, ce),
          j.write_shift(4, ne),
          (he += 16383 + (ue ? 32768 : 0)),
          j.write_shift(2, he),
          j
        )
      }
      function G(y, M) {
        var D = b(y)
        return (y.l += M - 14), D
      }
      function z(y, M) {
        var D = Z(y),
          O = y.read_shift(4)
        return (D[1].v = O >> 6), D
      }
      function ae(y, M) {
        var D = Z(y),
          O = y.read_shift(8, 'f')
        return (D[1].v = O), D
      }
      function Re(y, M) {
        var D = ae(y)
        return (y.l += M - 10), D
      }
      function me(y, M) {
        return y[y.l + M - 1] == 0 ? y.read_shift(M, 'cstr') : ''
      }
      function st(y, M) {
        var D = y[y.l++]
        D > M - 1 && (D = M - 1)
        for (var O = ''; O.length < D; ) O += String.fromCharCode(y[y.l++])
        return O
      }
      function te(y, M, D) {
        if (!(!D.qpro || M < 21)) {
          var O = y.read_shift(1)
          ;(y.l += 17), (y.l += 1), (y.l += 2)
          var j = y.read_shift(M - 21, 'cstr')
          return [O, j]
        }
      }
      function Se(y, M) {
        for (var D = {}, O = y.l + M; y.l < O; ) {
          var j = y.read_shift(2)
          if (j == 14e3) {
            for (D[j] = [0, ''], D[j][0] = y.read_shift(2); y[y.l]; )
              (D[j][1] += String.fromCharCode(y[y.l])), y.l++
            y.l++
          }
        }
        return D
      }
      function ye(y, M) {
        var D = B(5 + y.length)
        D.write_shift(2, 14e3), D.write_shift(2, M)
        for (var O = 0; O < y.length; ++O) {
          var j = y.charCodeAt(O)
          D[D.l++] = j > 127 ? 95 : j
        }
        return (D[D.l++] = 0), D
      }
      var ot = {
          0: { n: 'BOF', f: su },
          1: { n: 'EOF' },
          2: { n: 'CALCMODE' },
          3: { n: 'CALCORDER' },
          4: { n: 'SPLIT' },
          5: { n: 'SYNC' },
          6: { n: 'RANGE', f: o },
          7: { n: 'WINDOW1' },
          8: { n: 'COLW1' },
          9: { n: 'WINTWO' },
          10: { n: 'COLW2' },
          11: { n: 'NAME' },
          12: { n: 'BLANK' },
          13: { n: 'INTEGER', f: h },
          14: { n: 'NUMBER', f: m },
          15: { n: 'LABEL', f: c },
          16: { n: 'FORMULA', f: v },
          24: { n: 'TABLE' },
          25: { n: 'ORANGE' },
          26: { n: 'PRANGE' },
          27: { n: 'SRANGE' },
          28: { n: 'FRANGE' },
          29: { n: 'KRANGE1' },
          32: { n: 'HRANGE' },
          35: { n: 'KRANGE2' },
          36: { n: 'PROTEC' },
          37: { n: 'FOOTER' },
          38: { n: 'HEADER' },
          39: { n: 'SETUP' },
          40: { n: 'MARGINS' },
          41: { n: 'LABELFMT' },
          42: { n: 'TITLES' },
          43: { n: 'SHEETJS' },
          45: { n: 'GRAPH' },
          46: { n: 'NGRAPH' },
          47: { n: 'CALCCOUNT' },
          48: { n: 'UNFORMATTED' },
          49: { n: 'CURSORW12' },
          50: { n: 'WINDOW' },
          51: { n: 'STRING', f: c },
          55: { n: 'PASSWORD' },
          56: { n: 'LOCKED' },
          60: { n: 'QUERY' },
          61: { n: 'QUERYNAME' },
          62: { n: 'PRINT' },
          63: { n: 'PRINTNAME' },
          64: { n: 'GRAPH2' },
          65: { n: 'GRAPHNAME' },
          66: { n: 'ZOOM' },
          67: { n: 'SYMSPLIT' },
          68: { n: 'NSROWS' },
          69: { n: 'NSCOLS' },
          70: { n: 'RULER' },
          71: { n: 'NNAME' },
          72: { n: 'ACOMM' },
          73: { n: 'AMACRO' },
          74: { n: 'PARSE' },
          102: { n: 'PRANGES??' },
          103: { n: 'RRANGES??' },
          104: { n: 'FNAME??' },
          105: { n: 'MRANGES??' },
          204: { n: 'SHEETNAMECS', f: me },
          222: { n: 'SHEETNAMELP', f: st },
          65535: { n: '' }
        },
        ft = {
          0: { n: 'BOF' },
          1: { n: 'EOF' },
          2: { n: 'PASSWORD' },
          3: { n: 'CALCSET' },
          4: { n: 'WINDOWSET' },
          5: { n: 'SHEETCELLPTR' },
          6: { n: 'SHEETLAYOUT' },
          7: { n: 'COLUMNWIDTH' },
          8: { n: 'HIDDENCOLUMN' },
          9: { n: 'USERRANGE' },
          10: { n: 'SYSTEMRANGE' },
          11: { n: 'ZEROFORCE' },
          12: { n: 'SORTKEYDIR' },
          13: { n: 'FILESEAL' },
          14: { n: 'DATAFILLNUMS' },
          15: { n: 'PRINTMAIN' },
          16: { n: 'PRINTSTRING' },
          17: { n: 'GRAPHMAIN' },
          18: { n: 'GRAPHSTRING' },
          19: { n: '??' },
          20: { n: 'ERRCELL' },
          21: { n: 'NACELL' },
          22: { n: 'LABEL16', f: ie },
          23: { n: 'NUMBER17', f: b },
          24: { n: 'NUMBER18', f: H },
          25: { n: 'FORMULA19', f: G },
          26: { n: 'FORMULA1A' },
          27: { n: 'XFORMAT', f: Se },
          28: { n: 'DTLABELMISC' },
          29: { n: 'DTLABELCELL' },
          30: { n: 'GRAPHWINDOW' },
          31: { n: 'CPA' },
          32: { n: 'LPLAUTO' },
          33: { n: 'QUERY' },
          34: { n: 'HIDDENSHEET' },
          35: { n: '??' },
          37: { n: 'NUMBER25', f: z },
          38: { n: '??' },
          39: { n: 'NUMBER27', f: ae },
          40: { n: 'FORMULA28', f: Re },
          142: { n: '??' },
          147: { n: '??' },
          150: { n: '??' },
          151: { n: '??' },
          152: { n: '??' },
          153: { n: '??' },
          154: { n: '??' },
          155: { n: '??' },
          156: { n: '??' },
          163: { n: '??' },
          174: { n: '??' },
          175: { n: '??' },
          176: { n: '??' },
          177: { n: '??' },
          184: { n: '??' },
          185: { n: '??' },
          186: { n: '??' },
          187: { n: '??' },
          188: { n: '??' },
          195: { n: '??' },
          201: { n: '??' },
          204: { n: 'SHEETNAMECS', f: me },
          205: { n: '??' },
          206: { n: '??' },
          207: { n: '??' },
          208: { n: '??' },
          256: { n: '??' },
          259: { n: '??' },
          260: { n: '??' },
          261: { n: '??' },
          262: { n: '??' },
          263: { n: '??' },
          265: { n: '??' },
          266: { n: '??' },
          267: { n: '??' },
          268: { n: '??' },
          270: { n: '??' },
          271: { n: '??' },
          384: { n: '??' },
          389: { n: '??' },
          390: { n: '??' },
          393: { n: '??' },
          396: { n: '??' },
          512: { n: '??' },
          514: { n: '??' },
          513: { n: '??' },
          516: { n: '??' },
          517: { n: '??' },
          640: { n: '??' },
          641: { n: '??' },
          642: { n: '??' },
          643: { n: '??' },
          644: { n: '??' },
          645: { n: '??' },
          646: { n: '??' },
          647: { n: '??' },
          648: { n: '??' },
          658: { n: '??' },
          659: { n: '??' },
          660: { n: '??' },
          661: { n: '??' },
          662: { n: '??' },
          665: { n: '??' },
          666: { n: '??' },
          768: { n: '??' },
          772: { n: '??' },
          1537: { n: 'SHEETINFOQP', f: te },
          1600: { n: '??' },
          1602: { n: '??' },
          1793: { n: '??' },
          1794: { n: '??' },
          1795: { n: '??' },
          1796: { n: '??' },
          1920: { n: '??' },
          2048: { n: '??' },
          2049: { n: '??' },
          2052: { n: '??' },
          2688: { n: '??' },
          10998: { n: '??' },
          12849: { n: '??' },
          28233: { n: '??' },
          28484: { n: '??' },
          65535: { n: '' }
        }
      return { sheet_to_wk1: n, book_to_wk3: a, to_workbook: t }
    })(),
    zT = /^\s|\s$|[\t\n\r]/
  function xu(e, t) {
    if (!t.bookSST) return ''
    var r = [et]
    r[r.length] = Q('sst', null, { xmlns: Un[0], count: e.Count, uniqueCount: e.Unique })
    for (var n = 0; n != e.length; ++n)
      if (e[n] != null) {
        var a = e[n],
          i = '<si>'
        a.r
          ? (i += a.r)
          : ((i += '<t'),
            a.t || (a.t = ''),
            a.t.match(zT) && (i += ' xml:space="preserve"'),
            (i += '>' + Ne(a.t) + '</t>')),
          (i += '</si>'),
          (r[r.length] = i)
      }
    return r.length > 2 && ((r[r.length] = '</sst>'), (r[1] = r[1].replace('/>', '>'))), r.join('')
  }
  function XT(e) {
    return [e.read_shift(4), e.read_shift(4)]
  }
  function KT(e, t) {
    return t || (t = B(8)), t.write_shift(4, e.Count), t.write_shift(4, e.Unique), t
  }
  var qT = Ww
  function JT(e) {
    var t = Pt()
    Y(t, 159, KT(e))
    for (var r = 0; r < e.length; ++r) Y(t, 19, qT(e[r]))
    return Y(t, 160), t.end()
  }
  function ZT(e) {
    for (var t = [], r = e.split(''), n = 0; n < r.length; ++n) t[n] = r[n].charCodeAt(0)
    return t
  }
  function mu(e) {
    var t = 0,
      r,
      n = ZT(e),
      a = n.length + 1,
      i,
      s,
      o,
      l,
      f
    for (r = un(a), r[0] = n.length, i = 1; i != a; ++i) r[i] = n[i - 1]
    for (i = a - 1; i >= 0; --i)
      (s = r[i]), (o = (t & 16384) === 0 ? 0 : 1), (l = (t << 1) & 32767), (f = o | l), (t = f ^ s)
    return t ^ 52811
  }
  var QT = (function () {
    function e(a, i) {
      switch (i.type) {
        case 'base64':
          return t(yr(a), i)
        case 'binary':
          return t(a, i)
        case 'buffer':
          return t(ke && Buffer.isBuffer(a) ? a.toString('binary') : Oa(a), i)
        case 'array':
          return t(ji(a), i)
      }
      throw new Error('Unrecognized type ' + i.type)
    }
    function t(a, i) {
      var s = i || {},
        o = s.dense ? [] : {},
        l = a.match(/\\trowd.*?\\row\b/g)
      if (!l.length) throw new Error('RTF missing table')
      var f = { s: { c: 0, r: 0 }, e: { c: 0, r: l.length - 1 } }
      return (
        l.forEach(function (c, u) {
          Array.isArray(o) && (o[u] = [])
          for (var h = /\\\w+\b/g, p = 0, m, d = -1; (m = h.exec(c)); ) {
            switch (m[0]) {
              case '\\cell':
                var v = c.slice(p, h.lastIndex - m[0].length)
                if ((v[0] == ' ' && (v = v.slice(1)), ++d, v.length)) {
                  var A = { v, t: 's' }
                  Array.isArray(o) ? (o[u][d] = A) : (o[Pe({ r: u, c: d })] = A)
                }
                break
            }
            p = h.lastIndex
          }
          d > f.e.c && (f.e.c = d)
        }),
        (o['!ref'] = tt(f)),
        o
      )
    }
    function r(a, i) {
      return dn(e(a, i), i)
    }
    function n(a) {
      for (
        var i = ['{\\rtf1\\ansi'], s = je(a['!ref']), o, l = Array.isArray(a), f = s.s.r;
        f <= s.e.r;
        ++f
      ) {
        i.push('\\trowd\\trautofit1')
        for (var c = s.s.c; c <= s.e.c; ++c) i.push('\\cellx' + (c + 1))
        for (i.push('\\pard\\intbl'), c = s.s.c; c <= s.e.c; ++c) {
          var u = Pe({ r: f, c })
          ;(o = l ? (a[f] || [])[c] : a[u]),
            !(!o || (o.v == null && (!o.f || o.F))) &&
              (i.push(' ' + (o.w || (kr(o), o.w))), i.push('\\cell'))
        }
        i.push('\\pard\\intbl\\row')
      }
      return i.join('') + '}'
    }
    return { to_workbook: r, to_sheet: e, from_sheet: n }
  })()
  function _u(e) {
    for (var t = 0, r = 1; t != 3; ++t) r = r * 256 + (e[t] > 255 ? 255 : e[t] < 0 ? 0 : e[t])
    return r.toString(16).toUpperCase().slice(1)
  }
  var eE = 6,
    Rr = eE
  function Qi(e) {
    return Math.floor((e + Math.round(128 / Rr) / 256) * Rr)
  }
  function es(e) {
    return Math.floor(((e - 5) / Rr) * 100 + 0.5) / 100
  }
  function V0(e) {
    return Math.round(((e * Rr + 5) / Rr) * 256) / 256
  }
  function G0(e) {
    e.width
      ? ((e.wpx = Qi(e.width)), (e.wch = es(e.wpx)), (e.MDW = Rr))
      : e.wpx
      ? ((e.wch = es(e.wpx)), (e.width = V0(e.wch)), (e.MDW = Rr))
      : typeof e.wch == 'number' && ((e.width = V0(e.wch)), (e.wpx = Qi(e.width)), (e.MDW = Rr)),
      e.customWidth && delete e.customWidth
  }
  var tE = 96,
    gu = tE
  function ts(e) {
    return (e * 96) / gu
  }
  function vu(e) {
    return (e * gu) / 96
  }
  function rE(e) {
    var t = ['<numFmts>']
    return (
      [
        [5, 8],
        [23, 26],
        [41, 44],
        [50, 392]
      ].forEach(function (r) {
        for (var n = r[0]; n <= r[1]; ++n)
          e[n] != null && (t[t.length] = Q('numFmt', null, { numFmtId: n, formatCode: Ne(e[n]) }))
      }),
      t.length === 1
        ? ''
        : ((t[t.length] = '</numFmts>'),
          (t[0] = Q('numFmts', null, { count: t.length - 2 }).replace('/>', '>')),
          t.join(''))
    )
  }
  function nE(e) {
    var t = []
    return (
      (t[t.length] = Q('cellXfs', null)),
      e.forEach(function (r) {
        t[t.length] = Q('xf', null, r)
      }),
      (t[t.length] = '</cellXfs>'),
      t.length === 2
        ? ''
        : ((t[0] = Q('cellXfs', null, { count: t.length - 2 }).replace('/>', '>')), t.join(''))
    )
  }
  function wu(e, t) {
    var r = [et, Q('styleSheet', null, { xmlns: Un[0], 'xmlns:vt': lt.vt })],
      n
    return (
      e.SSF && (n = rE(e.SSF)) != null && (r[r.length] = n),
      (r[r.length] =
        '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>'),
      (r[r.length] =
        '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>'),
      (r[r.length] =
        '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>'),
      (r[r.length] =
        '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>'),
      (n = nE(t.cellXfs)) && (r[r.length] = n),
      (r[r.length] =
        '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>'),
      (r[r.length] = '<dxfs count="0"/>'),
      (r[r.length] =
        '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>'),
      r.length > 2 && ((r[r.length] = '</styleSheet>'), (r[1] = r[1].replace('/>', '>'))),
      r.join('')
    )
  }
  function aE(e, t) {
    var r = e.read_shift(2),
      n = St(e)
    return [r, n]
  }
  function iE(e, t, r) {
    r || (r = B(6 + 4 * t.length)), r.write_shift(2, e), ut(t, r)
    var n = r.length > r.l ? r.slice(0, r.l) : r
    return r.l == null && (r.l = r.length), n
  }
  function sE(e, t, r) {
    var n = {}
    n.sz = e.read_shift(2) / 20
    var a = zw(e)
    a.fItalic && (n.italic = 1),
      a.fCondense && (n.condense = 1),
      a.fExtend && (n.extend = 1),
      a.fShadow && (n.shadow = 1),
      a.fOutline && (n.outline = 1),
      a.fStrikeout && (n.strike = 1)
    var i = e.read_shift(2)
    switch ((i === 700 && (n.bold = 1), e.read_shift(2))) {
      case 1:
        n.vertAlign = 'superscript'
        break
      case 2:
        n.vertAlign = 'subscript'
        break
    }
    var s = e.read_shift(1)
    s != 0 && (n.underline = s)
    var o = e.read_shift(1)
    o > 0 && (n.family = o)
    var l = e.read_shift(1)
    switch ((l > 0 && (n.charset = l), e.l++, (n.color = Gw(e)), e.read_shift(1))) {
      case 1:
        n.scheme = 'major'
        break
      case 2:
        n.scheme = 'minor'
        break
    }
    return (n.name = St(e)), n
  }
  function oE(e, t) {
    t || (t = B(25 + 4 * 32)),
      t.write_shift(2, e.sz * 20),
      Xw(e, t),
      t.write_shift(2, e.bold ? 700 : 400)
    var r = 0
    e.vertAlign == 'superscript' ? (r = 1) : e.vertAlign == 'subscript' && (r = 2),
      t.write_shift(2, r),
      t.write_shift(1, e.underline || 0),
      t.write_shift(1, e.family || 0),
      t.write_shift(1, e.charset || 0),
      t.write_shift(1, 0),
      Xi(e.color, t)
    var n = 0
    return (
      e.scheme == 'major' && (n = 1),
      e.scheme == 'minor' && (n = 2),
      t.write_shift(1, n),
      ut(e.name, t),
      t.length > t.l ? t.slice(0, t.l) : t
    )
  }
  var fE = [
      'none',
      'solid',
      'mediumGray',
      'darkGray',
      'lightGray',
      'darkHorizontal',
      'darkVertical',
      'darkDown',
      'darkUp',
      'darkGrid',
      'darkTrellis',
      'lightHorizontal',
      'lightVertical',
      'lightDown',
      'lightUp',
      'lightGrid',
      'lightTrellis',
      'gray125',
      'gray0625'
    ],
    z0,
    lE = ur
  function Tu(e, t) {
    t || (t = B(4 * 3 + 8 * 7 + 16 * 1)), z0 || (z0 = C0(fE))
    var r = z0[e.patternType]
    r == null && (r = 40), t.write_shift(4, r)
    var n = 0
    if (r != 40) for (Xi({ auto: 1 }, t), Xi({ auto: 1 }, t); n < 12; ++n) t.write_shift(4, 0)
    else {
      for (; n < 4; ++n) t.write_shift(4, 0)
      for (; n < 12; ++n) t.write_shift(4, 0)
    }
    return t.length > t.l ? t.slice(0, t.l) : t
  }
  function cE(e, t) {
    var r = e.l + t,
      n = e.read_shift(2),
      a = e.read_shift(2)
    return (e.l = r), { ixfe: n, numFmtId: a }
  }
  function Eu(e, t, r) {
    r || (r = B(16)),
      r.write_shift(2, t || 0),
      r.write_shift(2, e.numFmtId || 0),
      r.write_shift(2, 0),
      r.write_shift(2, 0),
      r.write_shift(2, 0),
      r.write_shift(1, 0),
      r.write_shift(1, 0)
    var n = 0
    return r.write_shift(1, n), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(1, 0), r
  }
  function Wa(e, t) {
    return (
      t || (t = B(10)),
      t.write_shift(1, 0),
      t.write_shift(1, 0),
      t.write_shift(4, 0),
      t.write_shift(4, 0),
      t
    )
  }
  var uE = ur
  function hE(e, t) {
    return (
      t || (t = B(51)),
      t.write_shift(1, 0),
      Wa(null, t),
      Wa(null, t),
      Wa(null, t),
      Wa(null, t),
      Wa(null, t),
      t.length > t.l ? t.slice(0, t.l) : t
    )
  }
  function dE(e, t) {
    return (
      t || (t = B(12 + 4 * 10)),
      t.write_shift(4, e.xfId),
      t.write_shift(2, 1),
      t.write_shift(1, +e.builtinId),
      t.write_shift(1, 0),
      zi(e.name || '', t),
      t.length > t.l ? t.slice(0, t.l) : t
    )
  }
  function pE(e, t, r) {
    var n = B(2052)
    return n.write_shift(4, e), zi(t, n), zi(r, n), n.length > n.l ? n.slice(0, n.l) : n
  }
  function xE(e, t) {
    if (!!t) {
      var r = 0
      ;[
        [5, 8],
        [23, 26],
        [41, 44],
        [50, 392]
      ].forEach(function (n) {
        for (var a = n[0]; a <= n[1]; ++a) t[a] != null && ++r
      }),
        r != 0 &&
          (Y(e, 615, rr(r)),
          [
            [5, 8],
            [23, 26],
            [41, 44],
            [50, 392]
          ].forEach(function (n) {
            for (var a = n[0]; a <= n[1]; ++a) t[a] != null && Y(e, 44, iE(a, t[a]))
          }),
          Y(e, 616))
    }
  }
  function mE(e) {
    var t = 1
    Y(e, 611, rr(t)),
      Y(e, 43, oE({ sz: 12, color: { theme: 1 }, name: 'Calibri', family: 2, scheme: 'minor' })),
      Y(e, 612)
  }
  function _E(e) {
    var t = 2
    Y(e, 603, rr(t)),
      Y(e, 45, Tu({ patternType: 'none' })),
      Y(e, 45, Tu({ patternType: 'gray125' })),
      Y(e, 604)
  }
  function gE(e) {
    var t = 1
    Y(e, 613, rr(t)), Y(e, 46, hE()), Y(e, 614)
  }
  function vE(e) {
    var t = 1
    Y(e, 626, rr(t)),
      Y(e, 47, Eu({ numFmtId: 0, fontId: 0, fillId: 0, borderId: 0 }, 65535)),
      Y(e, 627)
  }
  function wE(e, t) {
    Y(e, 617, rr(t.length)),
      t.forEach(function (r) {
        Y(e, 47, Eu(r, 0))
      }),
      Y(e, 618)
  }
  function TE(e) {
    var t = 1
    Y(e, 619, rr(t)), Y(e, 48, dE({ xfId: 0, builtinId: 0, name: 'Normal' })), Y(e, 620)
  }
  function EE(e) {
    var t = 0
    Y(e, 505, rr(t)), Y(e, 506)
  }
  function SE(e) {
    var t = 0
    Y(e, 508, pE(t, 'TableStyleMedium9', 'PivotStyleMedium4')), Y(e, 509)
  }
  function yE(e, t) {
    var r = Pt()
    return (
      Y(r, 278),
      xE(r, e.SSF),
      mE(r),
      _E(r),
      gE(r),
      vE(r),
      wE(r, t.cellXfs),
      TE(r),
      EE(r),
      SE(r),
      Y(r, 279),
      r.end()
    )
  }
  function Su(e, t) {
    if (t && t.themeXLSX) return t.themeXLSX
    if (e && typeof e.raw == 'string') return e.raw
    var r = [et]
    return (
      (r[r.length] =
        '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">'),
      (r[r.length] = '<a:themeElements>'),
      (r[r.length] = '<a:clrScheme name="Office">'),
      (r[r.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>'),
      (r[r.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>'),
      (r[r.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>'),
      (r[r.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>'),
      (r[r.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>'),
      (r[r.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>'),
      (r[r.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>'),
      (r[r.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>'),
      (r[r.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>'),
      (r[r.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>'),
      (r[r.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>'),
      (r[r.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>'),
      (r[r.length] = '</a:clrScheme>'),
      (r[r.length] = '<a:fontScheme name="Office">'),
      (r[r.length] = '<a:majorFont>'),
      (r[r.length] = '<a:latin typeface="Cambria"/>'),
      (r[r.length] = '<a:ea typeface=""/>'),
      (r[r.length] = '<a:cs typeface=""/>'),
      (r[r.length] =
        '<a:font script="Jpan" typeface="\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF"/>'),
      (r[r.length] = '<a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515"/>'),
      (r[r.length] = '<a:font script="Hans" typeface="\u5B8B\u4F53"/>'),
      (r[r.length] = '<a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4"/>'),
      (r[r.length] = '<a:font script="Arab" typeface="Times New Roman"/>'),
      (r[r.length] = '<a:font script="Hebr" typeface="Times New Roman"/>'),
      (r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>'),
      (r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>'),
      (r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>'),
      (r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>'),
      (r[r.length] = '<a:font script="Khmr" typeface="MoolBoran"/>'),
      (r[r.length] = '<a:font script="Knda" typeface="Tunga"/>'),
      (r[r.length] = '<a:font script="Guru" typeface="Raavi"/>'),
      (r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>'),
      (r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>'),
      (r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>'),
      (r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>'),
      (r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>'),
      (r[r.length] = '<a:font script="Deva" typeface="Mangal"/>'),
      (r[r.length] = '<a:font script="Telu" typeface="Gautami"/>'),
      (r[r.length] = '<a:font script="Taml" typeface="Latha"/>'),
      (r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>'),
      (r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>'),
      (r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>'),
      (r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>'),
      (r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>'),
      (r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>'),
      (r[r.length] = '<a:font script="Viet" typeface="Times New Roman"/>'),
      (r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>'),
      (r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>'),
      (r[r.length] = '</a:majorFont>'),
      (r[r.length] = '<a:minorFont>'),
      (r[r.length] = '<a:latin typeface="Calibri"/>'),
      (r[r.length] = '<a:ea typeface=""/>'),
      (r[r.length] = '<a:cs typeface=""/>'),
      (r[r.length] =
        '<a:font script="Jpan" typeface="\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF"/>'),
      (r[r.length] = '<a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515"/>'),
      (r[r.length] = '<a:font script="Hans" typeface="\u5B8B\u4F53"/>'),
      (r[r.length] = '<a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4"/>'),
      (r[r.length] = '<a:font script="Arab" typeface="Arial"/>'),
      (r[r.length] = '<a:font script="Hebr" typeface="Arial"/>'),
      (r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>'),
      (r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>'),
      (r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>'),
      (r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>'),
      (r[r.length] = '<a:font script="Khmr" typeface="DaunPenh"/>'),
      (r[r.length] = '<a:font script="Knda" typeface="Tunga"/>'),
      (r[r.length] = '<a:font script="Guru" typeface="Raavi"/>'),
      (r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>'),
      (r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>'),
      (r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>'),
      (r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>'),
      (r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>'),
      (r[r.length] = '<a:font script="Deva" typeface="Mangal"/>'),
      (r[r.length] = '<a:font script="Telu" typeface="Gautami"/>'),
      (r[r.length] = '<a:font script="Taml" typeface="Latha"/>'),
      (r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>'),
      (r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>'),
      (r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>'),
      (r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>'),
      (r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>'),
      (r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>'),
      (r[r.length] = '<a:font script="Viet" typeface="Arial"/>'),
      (r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>'),
      (r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>'),
      (r[r.length] = '</a:minorFont>'),
      (r[r.length] = '</a:fontScheme>'),
      (r[r.length] = '<a:fmtScheme name="Office">'),
      (r[r.length] = '<a:fillStyleLst>'),
      (r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>'),
      (r[r.length] = '<a:gradFill rotWithShape="1">'),
      (r[r.length] = '<a:gsLst>'),
      (r[r.length] =
        '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
      (r[r.length] =
        '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
      (r[r.length] =
        '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
      (r[r.length] = '</a:gsLst>'),
      (r[r.length] = '<a:lin ang="16200000" scaled="1"/>'),
      (r[r.length] = '</a:gradFill>'),
      (r[r.length] = '<a:gradFill rotWithShape="1">'),
      (r[r.length] = '<a:gsLst>'),
      (r[r.length] =
        '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>'),
      (r[r.length] =
        '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
      (r[r.length] = '</a:gsLst>'),
      (r[r.length] = '<a:lin ang="16200000" scaled="0"/>'),
      (r[r.length] = '</a:gradFill>'),
      (r[r.length] = '</a:fillStyleLst>'),
      (r[r.length] = '<a:lnStyleLst>'),
      (r[r.length] =
        '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>'),
      (r[r.length] =
        '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>'),
      (r[r.length] =
        '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>'),
      (r[r.length] = '</a:lnStyleLst>'),
      (r[r.length] = '<a:effectStyleLst>'),
      (r[r.length] = '<a:effectStyle>'),
      (r[r.length] = '<a:effectLst>'),
      (r[r.length] =
        '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>'),
      (r[r.length] = '</a:effectLst>'),
      (r[r.length] = '</a:effectStyle>'),
      (r[r.length] = '<a:effectStyle>'),
      (r[r.length] = '<a:effectLst>'),
      (r[r.length] =
        '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>'),
      (r[r.length] = '</a:effectLst>'),
      (r[r.length] = '</a:effectStyle>'),
      (r[r.length] = '<a:effectStyle>'),
      (r[r.length] = '<a:effectLst>'),
      (r[r.length] =
        '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>'),
      (r[r.length] = '</a:effectLst>'),
      (r[r.length] =
        '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>'),
      (r[r.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>'),
      (r[r.length] = '</a:effectStyle>'),
      (r[r.length] = '</a:effectStyleLst>'),
      (r[r.length] = '<a:bgFillStyleLst>'),
      (r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>'),
      (r[r.length] = '<a:gradFill rotWithShape="1">'),
      (r[r.length] = '<a:gsLst>'),
      (r[r.length] =
        '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
      (r[r.length] =
        '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
      (r[r.length] =
        '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>'),
      (r[r.length] = '</a:gsLst>'),
      (r[r.length] =
        '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>'),
      (r[r.length] = '</a:gradFill>'),
      (r[r.length] = '<a:gradFill rotWithShape="1">'),
      (r[r.length] = '<a:gsLst>'),
      (r[r.length] =
        '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
      (r[r.length] =
        '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>'),
      (r[r.length] = '</a:gsLst>'),
      (r[r.length] =
        '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>'),
      (r[r.length] = '</a:gradFill>'),
      (r[r.length] = '</a:bgFillStyleLst>'),
      (r[r.length] = '</a:fmtScheme>'),
      (r[r.length] = '</a:themeElements>'),
      (r[r.length] = '<a:objectDefaults>'),
      (r[r.length] = '<a:spDef>'),
      (r[r.length] =
        '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>'),
      (r[r.length] = '</a:spDef>'),
      (r[r.length] = '<a:lnDef>'),
      (r[r.length] =
        '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>'),
      (r[r.length] = '</a:lnDef>'),
      (r[r.length] = '</a:objectDefaults>'),
      (r[r.length] = '<a:extraClrSchemeLst/>'),
      (r[r.length] = '</a:theme>'),
      r.join('')
    )
  }
  function AE(e, t) {
    return { flags: e.read_shift(4), version: e.read_shift(4), name: St(e) }
  }
  function OE(e) {
    var t = B(12 + 2 * e.name.length)
    return t.write_shift(4, e.flags), t.write_shift(4, e.version), ut(e.name, t), t.slice(0, t.l)
  }
  function FE(e) {
    for (var t = [], r = e.read_shift(4); r-- > 0; ) t.push([e.read_shift(4), e.read_shift(4)])
    return t
  }
  function CE(e) {
    var t = B(4 + 8 * e.length)
    t.write_shift(4, e.length)
    for (var r = 0; r < e.length; ++r) t.write_shift(4, e[r][0]), t.write_shift(4, e[r][1])
    return t
  }
  function DE(e, t) {
    var r = B(8 + 2 * t.length)
    return r.write_shift(4, e), ut(t, r), r.slice(0, r.l)
  }
  function kE(e) {
    return (e.l += 4), e.read_shift(4) != 0
  }
  function RE(e, t) {
    var r = B(8)
    return r.write_shift(4, e), r.write_shift(4, t ? 1 : 0), r
  }
  function NE() {
    var e = Pt()
    return (
      Y(e, 332),
      Y(e, 334, rr(1)),
      Y(e, 335, OE({ name: 'XLDAPR', version: 12e4, flags: 3496657072 })),
      Y(e, 336),
      Y(e, 339, DE(1, 'XLDAPR')),
      Y(e, 52),
      Y(e, 35, rr(514)),
      Y(e, 4096, rr(0)),
      Y(e, 4097, Xt(1)),
      Y(e, 36),
      Y(e, 53),
      Y(e, 340),
      Y(e, 337, RE(1, !0)),
      Y(e, 51, CE([[1, 0]])),
      Y(e, 338),
      Y(e, 333),
      e.end()
    )
  }
  function yu() {
    var e = [et]
    return (
      e.push(`<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">
  <metadataTypes count="1">
    <metadataType name="XLDAPR" minSupportedVersion="120000" copy="1" pasteAll="1" pasteValues="1" merge="1" splitFirst="1" rowColShift="1" clearFormats="1" clearComments="1" assign="1" coerce="1" cellMeta="1"/>
  </metadataTypes>
  <futureMetadata name="XLDAPR" count="1">
    <bk>
      <extLst>
        <ext uri="{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}">
          <xda:dynamicArrayProperties fDynamic="1" fCollapsed="0"/>
        </ext>
      </extLst>
    </bk>
  </futureMetadata>
  <cellMetadata count="1">
    <bk>
      <rc t="1" v="0"/>
    </bk>
  </cellMetadata>
</metadata>`),
      e.join('')
    )
  }
  function PE(e) {
    var t = {}
    t.i = e.read_shift(4)
    var r = {}
    ;(r.r = e.read_shift(4)), (r.c = e.read_shift(4)), (t.r = Pe(r))
    var n = e.read_shift(1)
    return n & 2 && (t.l = '1'), n & 8 && (t.a = '1'), t
  }
  var Gn = 1024
  function Au(e, t) {
    for (
      var r = [21600, 21600],
        n = ['m0,0l0', r[1], r[0], r[1], r[0], '0xe'].join(','),
        a = [
          Q('xml', null, {
            'xmlns:v': Lt.v,
            'xmlns:o': Lt.o,
            'xmlns:x': Lt.x,
            'xmlns:mv': Lt.mv
          }).replace(/\/>/, '>'),
          Q('o:shapelayout', Q('o:idmap', null, { 'v:ext': 'edit', data: e }), { 'v:ext': 'edit' }),
          Q(
            'v:shapetype',
            [
              Q('v:stroke', null, { joinstyle: 'miter' }),
              Q('v:path', null, { gradientshapeok: 't', 'o:connecttype': 'rect' })
            ].join(''),
            { id: '_x0000_t202', 'o:spt': 202, coordsize: r.join(','), path: n }
          )
        ];
      Gn < e * 1e3;

    )
      Gn += 1e3
    return (
      t.forEach(function (i) {
        var s = ct(i[0]),
          o = { color2: '#BEFF82', type: 'gradient' }
        o.type == 'gradient' && (o.angle = '-180')
        var l =
            o.type == 'gradient'
              ? Q('o:fill', null, { type: 'gradientUnscaled', 'v:ext': 'view' })
              : null,
          f = Q('v:fill', l, o),
          c = { on: 't', obscured: 't' }
        ++Gn,
          (a = a.concat([
            '<v:shape' +
              Pa({
                id: '_x0000_s' + Gn,
                type: '#_x0000_t202',
                style:
                  'position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10' +
                  (i[1].hidden ? ';visibility:hidden' : ''),
                fillcolor: '#ECFAD4',
                strokecolor: '#edeaa1'
              }) +
              '>',
            f,
            Q('v:shadow', null, c),
            Q('v:path', null, { 'o:connecttype': 'none' }),
            '<v:textbox><div style="text-align:left"></div></v:textbox>',
            '<x:ClientData ObjectType="Note">',
            '<x:MoveWithCells/>',
            '<x:SizeWithCells/>',
            pt('x:Anchor', [s.c + 1, 0, s.r + 1, 0, s.c + 3, 20, s.r + 5, 20].join(',')),
            pt('x:AutoFill', 'False'),
            pt('x:Row', String(s.r)),
            pt('x:Column', String(s.c)),
            i[1].hidden ? '' : '<x:Visible/>',
            '</x:ClientData>',
            '</v:shape>'
          ]))
      }),
      a.push('</xml>'),
      a.join('')
    )
  }
  function Ou(e) {
    var t = [et, Q('comments', null, { xmlns: Un[0] })],
      r = []
    return (
      t.push('<authors>'),
      e.forEach(function (n) {
        n[1].forEach(function (a) {
          var i = Ne(a.a)
          r.indexOf(i) == -1 && (r.push(i), t.push('<author>' + i + '</author>')),
            a.T &&
              a.ID &&
              r.indexOf('tc=' + a.ID) == -1 &&
              (r.push('tc=' + a.ID), t.push('<author>tc=' + a.ID + '</author>'))
        })
      }),
      r.length == 0 && (r.push('SheetJ5'), t.push('<author>SheetJ5</author>')),
      t.push('</authors>'),
      t.push('<commentList>'),
      e.forEach(function (n) {
        var a = 0,
          i = []
        if (
          (n[1][0] && n[1][0].T && n[1][0].ID
            ? (a = r.indexOf('tc=' + n[1][0].ID))
            : n[1].forEach(function (l) {
                l.a && (a = r.indexOf(Ne(l.a))), i.push(l.t || '')
              }),
          t.push('<comment ref="' + n[0] + '" authorId="' + a + '"><text>'),
          i.length <= 1)
        )
          t.push(pt('t', Ne(i[0] || '')))
        else {
          for (
            var s =
                `Comment:
    ` +
                i[0] +
                `
`,
              o = 1;
            o < i.length;
            ++o
          )
            s +=
              `Reply:
    ` +
              i[o] +
              `
`
          t.push(pt('t', Ne(s)))
        }
        t.push('</text></comment>')
      }),
      t.push('</commentList>'),
      t.length > 2 && ((t[t.length] = '</comments>'), (t[1] = t[1].replace('/>', '>'))),
      t.join('')
    )
  }
  function IE(e, t, r) {
    var n = [et, Q('ThreadedComments', null, { xmlns: lt.TCMNT }).replace(/[\/]>/, '>')]
    return (
      e.forEach(function (a) {
        var i = ''
        ;(a[1] || []).forEach(function (s, o) {
          if (!s.T) {
            delete s.ID
            return
          }
          s.a && t.indexOf(s.a) == -1 && t.push(s.a)
          var l = {
            ref: a[0],
            id: '{54EE7951-7262-4200-6969-' + ('000000000000' + r.tcid++).slice(-12) + '}'
          }
          o == 0 ? (i = l.id) : (l.parentId = i),
            (s.ID = l.id),
            s.a &&
              (l.personId =
                '{54EE7950-7262-4200-6969-' + ('000000000000' + t.indexOf(s.a)).slice(-12) + '}'),
            n.push(Q('threadedComment', pt('text', s.t || ''), l))
        })
      }),
      n.push('</ThreadedComments>'),
      n.join('')
    )
  }
  function ME(e) {
    var t = [et, Q('personList', null, { xmlns: lt.TCMNT, 'xmlns:x': Un[0] }).replace(/[\/]>/, '>')]
    return (
      e.forEach(function (r, n) {
        t.push(
          Q('person', null, {
            displayName: r,
            id: '{54EE7950-7262-4200-6969-' + ('000000000000' + n).slice(-12) + '}',
            userId: r,
            providerId: 'None'
          })
        )
      }),
      t.push('</personList>'),
      t.join('')
    )
  }
  function bE(e) {
    var t = {}
    t.iauthor = e.read_shift(4)
    var r = _n(e)
    return (t.rfx = r.s), (t.ref = Pe(r.s)), (e.l += 16), t
  }
  function LE(e, t) {
    return (
      t == null && (t = B(36)),
      t.write_shift(4, e[1].iauthor),
      Yn(e[0], t),
      t.write_shift(4, 0),
      t.write_shift(4, 0),
      t.write_shift(4, 0),
      t.write_shift(4, 0),
      t
    )
  }
  var BE = St
  function UE(e) {
    return ut(e.slice(0, 54))
  }
  function WE(e) {
    var t = Pt(),
      r = []
    return (
      Y(t, 628),
      Y(t, 630),
      e.forEach(function (n) {
        n[1].forEach(function (a) {
          r.indexOf(a.a) > -1 || (r.push(a.a.slice(0, 54)), Y(t, 632, UE(a.a)))
        })
      }),
      Y(t, 631),
      Y(t, 633),
      e.forEach(function (n) {
        n[1].forEach(function (a) {
          a.iauthor = r.indexOf(a.a)
          var i = { s: ct(n[0]), e: ct(n[0]) }
          Y(t, 635, LE([i, a])),
            a.t && a.t.length > 0 && Y(t, 637, Yw(a)),
            Y(t, 636),
            delete a.iauthor
        })
      }),
      Y(t, 634),
      Y(t, 629),
      t.end()
    )
  }
  function HE(e, t) {
    t.FullPaths.forEach(function (r, n) {
      if (n != 0) {
        var a = r.replace(/[^\/]*[\/]/, '/_VBA_PROJECT_CUR/')
        a.slice(-1) !== '/' && Ue.utils.cfb_add(e, a, t.FileIndex[n].content)
      }
    })
  }
  var Fu = ['xlsb', 'xlsm', 'xlam', 'biff8', 'xla'],
    YE = (function () {
      var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g,
        t = { r: 0, c: 0 }
      function r(n, a, i, s) {
        var o = !1,
          l = !1
        i.length == 0 ? (l = !0) : i.charAt(0) == '[' && ((l = !0), (i = i.slice(1, -1))),
          s.length == 0 ? (o = !0) : s.charAt(0) == '[' && ((o = !0), (s = s.slice(1, -1)))
        var f = i.length > 0 ? parseInt(i, 10) | 0 : 0,
          c = s.length > 0 ? parseInt(s, 10) | 0 : 0
        return (
          o ? (c += t.c) : --c,
          l ? (f += t.r) : --f,
          a + (o ? '' : '$') + Et(c) + (l ? '' : '$') + xt(f)
        )
      }
      return function (a, i) {
        return (t = i), a.replace(e, r)
      }
    })(),
    X0 =
      /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,
    K0 = (function () {
      return function (t, r) {
        return t.replace(X0, function (n, a, i, s, o, l) {
          var f = B0(s) - (i ? 0 : r.c),
            c = L0(l) - (o ? 0 : r.r),
            u = c == 0 ? '' : o ? c + 1 : '[' + c + ']',
            h = f == 0 ? '' : i ? f + 1 : '[' + f + ']'
          return a + 'R' + u + 'C' + h
        })
      }
    })()
  function $E(e, t) {
    return e.replace(X0, function (r, n, a, i, s, o) {
      return n + (a == '$' ? a + i : Et(B0(i) + t.c)) + (s == '$' ? s + o : xt(L0(o) + t.r))
    })
  }
  function jE(e) {
    return e.length != 1
  }
  function rt(e) {
    e.l += 1
  }
  function zr(e, t) {
    var r = e.read_shift(t == 1 ? 1 : 2)
    return [r & 16383, (r >> 14) & 1, (r >> 15) & 1]
  }
  function Cu(e, t, r) {
    var n = 2
    if (r) {
      if (r.biff >= 2 && r.biff <= 5) return Du(e)
      r.biff == 12 && (n = 4)
    }
    var a = e.read_shift(n),
      i = e.read_shift(n),
      s = zr(e, 2),
      o = zr(e, 2)
    return {
      s: { r: a, c: s[0], cRel: s[1], rRel: s[2] },
      e: { r: i, c: o[0], cRel: o[1], rRel: o[2] }
    }
  }
  function Du(e) {
    var t = zr(e, 2),
      r = zr(e, 2),
      n = e.read_shift(1),
      a = e.read_shift(1)
    return {
      s: { r: t[0], c: n, cRel: t[1], rRel: t[2] },
      e: { r: r[0], c: a, cRel: r[1], rRel: r[2] }
    }
  }
  function VE(e, t, r) {
    if (r.biff < 8) return Du(e)
    var n = e.read_shift(r.biff == 12 ? 4 : 2),
      a = e.read_shift(r.biff == 12 ? 4 : 2),
      i = zr(e, 2),
      s = zr(e, 2)
    return {
      s: { r: n, c: i[0], cRel: i[1], rRel: i[2] },
      e: { r: a, c: s[0], cRel: s[1], rRel: s[2] }
    }
  }
  function ku(e, t, r) {
    if (r && r.biff >= 2 && r.biff <= 5) return GE(e)
    var n = e.read_shift(r && r.biff == 12 ? 4 : 2),
      a = zr(e, 2)
    return { r: n, c: a[0], cRel: a[1], rRel: a[2] }
  }
  function GE(e) {
    var t = zr(e, 2),
      r = e.read_shift(1)
    return { r: t[0], c: r, cRel: t[1], rRel: t[2] }
  }
  function zE(e) {
    var t = e.read_shift(2),
      r = e.read_shift(2)
    return { r: t, c: r & 255, fQuoted: !!(r & 16384), cRel: r >> 15, rRel: r >> 15 }
  }
  function XE(e, t, r) {
    var n = r && r.biff ? r.biff : 8
    if (n >= 2 && n <= 5) return KE(e)
    var a = e.read_shift(n >= 12 ? 4 : 2),
      i = e.read_shift(2),
      s = (i & 16384) >> 14,
      o = (i & 32768) >> 15
    if (((i &= 16383), o == 1)) for (; a > 524287; ) a -= 1048576
    if (s == 1) for (; i > 8191; ) i = i - 16384
    return { r: a, c: i, cRel: s, rRel: o }
  }
  function KE(e) {
    var t = e.read_shift(2),
      r = e.read_shift(1),
      n = (t & 32768) >> 15,
      a = (t & 16384) >> 14
    return (
      (t &= 16383),
      n == 1 && t >= 8192 && (t = t - 16384),
      a == 1 && r >= 128 && (r = r - 256),
      { r: t, c: r, cRel: a, rRel: n }
    )
  }
  function qE(e, t, r) {
    var n = (e[e.l++] & 96) >> 5,
      a = Cu(e, r.biff >= 2 && r.biff <= 5 ? 6 : 8, r)
    return [n, a]
  }
  function JE(e, t, r) {
    var n = (e[e.l++] & 96) >> 5,
      a = e.read_shift(2, 'i'),
      i = 8
    if (r)
      switch (r.biff) {
        case 5:
          ;(e.l += 12), (i = 6)
          break
        case 12:
          i = 12
          break
      }
    var s = Cu(e, i, r)
    return [n, a, s]
  }
  function ZE(e, t, r) {
    var n = (e[e.l++] & 96) >> 5
    return (e.l += r && r.biff > 8 ? 12 : r.biff < 8 ? 6 : 8), [n]
  }
  function QE(e, t, r) {
    var n = (e[e.l++] & 96) >> 5,
      a = e.read_shift(2),
      i = 8
    if (r)
      switch (r.biff) {
        case 5:
          ;(e.l += 12), (i = 6)
          break
        case 12:
          i = 12
          break
      }
    return (e.l += i), [n, a]
  }
  function eS(e, t, r) {
    var n = (e[e.l++] & 96) >> 5,
      a = VE(e, t - 1, r)
    return [n, a]
  }
  function tS(e, t, r) {
    var n = (e[e.l++] & 96) >> 5
    return (e.l += r.biff == 2 ? 6 : r.biff == 12 ? 14 : 7), [n]
  }
  function Ru(e) {
    var t = e[e.l + 1] & 1,
      r = 1
    return (e.l += 4), [t, r]
  }
  function rS(e, t, r) {
    e.l += 2
    for (var n = e.read_shift(r && r.biff == 2 ? 1 : 2), a = [], i = 0; i <= n; ++i)
      a.push(e.read_shift(r && r.biff == 2 ? 1 : 2))
    return a
  }
  function nS(e, t, r) {
    var n = e[e.l + 1] & 255 ? 1 : 0
    return (e.l += 2), [n, e.read_shift(r && r.biff == 2 ? 1 : 2)]
  }
  function aS(e, t, r) {
    var n = e[e.l + 1] & 255 ? 1 : 0
    return (e.l += 2), [n, e.read_shift(r && r.biff == 2 ? 1 : 2)]
  }
  function iS(e) {
    var t = e[e.l + 1] & 255 ? 1 : 0
    return (e.l += 2), [t, e.read_shift(2)]
  }
  function sS(e, t, r) {
    var n = e[e.l + 1] & 255 ? 1 : 0
    return (e.l += r && r.biff == 2 ? 3 : 4), [n]
  }
  function Nu(e) {
    var t = e.read_shift(1),
      r = e.read_shift(1)
    return [t, r]
  }
  function oS(e) {
    return e.read_shift(2), Nu(e)
  }
  function fS(e) {
    return e.read_shift(2), Nu(e)
  }
  function lS(e, t, r) {
    var n = (e[e.l] & 96) >> 5
    e.l += 1
    var a = ku(e, 0, r)
    return [n, a]
  }
  function cS(e, t, r) {
    var n = (e[e.l] & 96) >> 5
    e.l += 1
    var a = XE(e, 0, r)
    return [n, a]
  }
  function uS(e, t, r) {
    var n = (e[e.l] & 96) >> 5
    e.l += 1
    var a = e.read_shift(2)
    r && r.biff == 5 && (e.l += 12)
    var i = ku(e, 0, r)
    return [n, a, i]
  }
  function hS(e, t, r) {
    var n = (e[e.l] & 96) >> 5
    e.l += 1
    var a = e.read_shift(r && r.biff <= 3 ? 1 : 2)
    return [hy[a], Lu[a], n]
  }
  function dS(e, t, r) {
    var n = e[e.l++],
      a = e.read_shift(1),
      i = r && r.biff <= 3 ? [n == 88 ? -1 : 0, e.read_shift(1)] : pS(e)
    return [a, (i[0] === 0 ? Lu : uy)[i[1]]]
  }
  function pS(e) {
    return [e[e.l + 1] >> 7, e.read_shift(2) & 32767]
  }
  function xS(e, t, r) {
    e.l += r && r.biff == 2 ? 3 : 4
  }
  function mS(e, t, r) {
    if ((e.l++, r && r.biff == 12)) return [e.read_shift(4, 'i'), 0]
    var n = e.read_shift(2),
      a = e.read_shift(r && r.biff == 2 ? 1 : 2)
    return [n, a]
  }
  function _S(e) {
    return e.l++, Ua[e.read_shift(1)]
  }
  function gS(e) {
    return e.l++, e.read_shift(2)
  }
  function vS(e) {
    return e.l++, e.read_shift(1) !== 0
  }
  function wS(e) {
    return e.l++, $n(e)
  }
  function TS(e, t, r) {
    return e.l++, fu(e, t - 1, r)
  }
  function ES(e, t) {
    var r = [e.read_shift(1)]
    if (t == 12)
      switch (r[0]) {
        case 2:
          r[0] = 4
          break
        case 4:
          r[0] = 16
          break
        case 0:
          r[0] = 1
          break
        case 1:
          r[0] = 2
          break
      }
    switch (r[0]) {
      case 4:
        ;(r[1] = uT(e, 1) ? 'TRUE' : 'FALSE'), t != 12 && (e.l += 7)
        break
      case 37:
      case 16:
        ;(r[1] = Ua[e[e.l]]), (e.l += t == 12 ? 4 : 8)
        break
      case 0:
        e.l += 8
        break
      case 1:
        r[1] = $n(e)
        break
      case 2:
        r[1] = xT(e, 0, { biff: t > 0 && t < 8 ? 2 : t })
        break
      default:
        throw new Error('Bad SerAr: ' + r[0])
    }
    return r
  }
  function SS(e, t, r) {
    for (var n = e.read_shift(r.biff == 12 ? 4 : 2), a = [], i = 0; i != n; ++i)
      a.push((r.biff == 12 ? _n : gT)(e))
    return a
  }
  function yS(e, t, r) {
    var n = 0,
      a = 0
    r.biff == 12
      ? ((n = e.read_shift(4)), (a = e.read_shift(4)))
      : ((a = 1 + e.read_shift(1)), (n = 1 + e.read_shift(2))),
      r.biff >= 2 && r.biff < 8 && (--n, --a == 0 && (a = 256))
    for (var i = 0, s = []; i != n && (s[i] = []); ++i)
      for (var o = 0; o != a; ++o) s[i][o] = ES(e, r.biff)
    return s
  }
  function AS(e, t, r) {
    var n = (e.read_shift(1) >>> 5) & 3,
      a = !r || r.biff >= 8 ? 4 : 2,
      i = e.read_shift(a)
    switch (r.biff) {
      case 2:
        e.l += 5
        break
      case 3:
      case 4:
        e.l += 8
        break
      case 5:
        e.l += 12
        break
    }
    return [n, 0, i]
  }
  function OS(e, t, r) {
    if (r.biff == 5) return FS(e)
    var n = (e.read_shift(1) >>> 5) & 3,
      a = e.read_shift(2),
      i = e.read_shift(4)
    return [n, a, i]
  }
  function FS(e) {
    var t = (e.read_shift(1) >>> 5) & 3,
      r = e.read_shift(2, 'i')
    e.l += 8
    var n = e.read_shift(2)
    return (e.l += 12), [t, r, n]
  }
  function CS(e, t, r) {
    var n = (e.read_shift(1) >>> 5) & 3
    e.l += r && r.biff == 2 ? 3 : 4
    var a = e.read_shift(r && r.biff == 2 ? 1 : 2)
    return [n, a]
  }
  function DS(e, t, r) {
    var n = (e.read_shift(1) >>> 5) & 3,
      a = e.read_shift(r && r.biff == 2 ? 1 : 2)
    return [n, a]
  }
  function kS(e, t, r) {
    var n = (e.read_shift(1) >>> 5) & 3
    return (e.l += 4), r.biff < 8 && e.l--, r.biff == 12 && (e.l += 2), [n]
  }
  function RS(e, t, r) {
    var n = (e[e.l++] & 96) >> 5,
      a = e.read_shift(2),
      i = 4
    if (r)
      switch (r.biff) {
        case 5:
          i = 15
          break
        case 12:
          i = 6
          break
      }
    return (e.l += i), [n, a]
  }
  var NS = ur,
    PS = ur,
    IS = ur
  function Ha(e, t, r) {
    return (e.l += 2), [zE(e)]
  }
  function q0(e) {
    return (e.l += 6), []
  }
  var MS = Ha,
    bS = q0,
    LS = q0,
    BS = Ha
  function Pu(e) {
    return (e.l += 2), [su(e), e.read_shift(2) & 1]
  }
  var US = Ha,
    WS = Pu,
    HS = q0,
    YS = Ha,
    $S = Ha,
    jS = [
      'Data',
      'All',
      'Headers',
      '??',
      '?Data2',
      '??',
      '?DataHeaders',
      '??',
      'Totals',
      '??',
      '??',
      '??',
      '?DataTotals',
      '??',
      '??',
      '??',
      '?Current'
    ]
  function VS(e) {
    e.l += 2
    var t = e.read_shift(2),
      r = e.read_shift(2),
      n = e.read_shift(4),
      a = e.read_shift(2),
      i = e.read_shift(2),
      s = jS[(r >> 2) & 31]
    return { ixti: t, coltype: r & 3, rt: s, idx: n, c: a, C: i }
  }
  function GS(e) {
    return (e.l += 2), [e.read_shift(4)]
  }
  function zS(e, t, r) {
    return (e.l += 5), (e.l += 2), (e.l += r.biff == 2 ? 1 : 4), ['PTGSHEET']
  }
  function XS(e, t, r) {
    return (e.l += r.biff == 2 ? 4 : 5), ['PTGENDSHEET']
  }
  function KS(e) {
    var t = (e.read_shift(1) >>> 5) & 3,
      r = e.read_shift(2)
    return [t, r]
  }
  function qS(e) {
    var t = (e.read_shift(1) >>> 5) & 3,
      r = e.read_shift(2)
    return [t, r]
  }
  function JS(e) {
    return (e.l += 4), [0, 0]
  }
  var Iu = {
      1: { n: 'PtgExp', f: mS },
      2: { n: 'PtgTbl', f: IS },
      3: { n: 'PtgAdd', f: rt },
      4: { n: 'PtgSub', f: rt },
      5: { n: 'PtgMul', f: rt },
      6: { n: 'PtgDiv', f: rt },
      7: { n: 'PtgPower', f: rt },
      8: { n: 'PtgConcat', f: rt },
      9: { n: 'PtgLt', f: rt },
      10: { n: 'PtgLe', f: rt },
      11: { n: 'PtgEq', f: rt },
      12: { n: 'PtgGe', f: rt },
      13: { n: 'PtgGt', f: rt },
      14: { n: 'PtgNe', f: rt },
      15: { n: 'PtgIsect', f: rt },
      16: { n: 'PtgUnion', f: rt },
      17: { n: 'PtgRange', f: rt },
      18: { n: 'PtgUplus', f: rt },
      19: { n: 'PtgUminus', f: rt },
      20: { n: 'PtgPercent', f: rt },
      21: { n: 'PtgParen', f: rt },
      22: { n: 'PtgMissArg', f: rt },
      23: { n: 'PtgStr', f: TS },
      26: { n: 'PtgSheet', f: zS },
      27: { n: 'PtgEndSheet', f: XS },
      28: { n: 'PtgErr', f: _S },
      29: { n: 'PtgBool', f: vS },
      30: { n: 'PtgInt', f: gS },
      31: { n: 'PtgNum', f: wS },
      32: { n: 'PtgArray', f: tS },
      33: { n: 'PtgFunc', f: hS },
      34: { n: 'PtgFuncVar', f: dS },
      35: { n: 'PtgName', f: AS },
      36: { n: 'PtgRef', f: lS },
      37: { n: 'PtgArea', f: qE },
      38: { n: 'PtgMemArea', f: CS },
      39: { n: 'PtgMemErr', f: NS },
      40: { n: 'PtgMemNoMem', f: PS },
      41: { n: 'PtgMemFunc', f: DS },
      42: { n: 'PtgRefErr', f: kS },
      43: { n: 'PtgAreaErr', f: ZE },
      44: { n: 'PtgRefN', f: cS },
      45: { n: 'PtgAreaN', f: eS },
      46: { n: 'PtgMemAreaN', f: KS },
      47: { n: 'PtgMemNoMemN', f: qS },
      57: { n: 'PtgNameX', f: OS },
      58: { n: 'PtgRef3d', f: uS },
      59: { n: 'PtgArea3d', f: JE },
      60: { n: 'PtgRefErr3d', f: RS },
      61: { n: 'PtgAreaErr3d', f: QE },
      255: {}
    },
    ZS = {
      64: 32,
      96: 32,
      65: 33,
      97: 33,
      66: 34,
      98: 34,
      67: 35,
      99: 35,
      68: 36,
      100: 36,
      69: 37,
      101: 37,
      70: 38,
      102: 38,
      71: 39,
      103: 39,
      72: 40,
      104: 40,
      73: 41,
      105: 41,
      74: 42,
      106: 42,
      75: 43,
      107: 43,
      76: 44,
      108: 44,
      77: 45,
      109: 45,
      78: 46,
      110: 46,
      79: 47,
      111: 47,
      88: 34,
      120: 34,
      89: 57,
      121: 57,
      90: 58,
      122: 58,
      91: 59,
      123: 59,
      92: 60,
      124: 60,
      93: 61,
      125: 61
    },
    QS = {
      1: { n: 'PtgElfLel', f: Pu },
      2: { n: 'PtgElfRw', f: YS },
      3: { n: 'PtgElfCol', f: MS },
      6: { n: 'PtgElfRwV', f: $S },
      7: { n: 'PtgElfColV', f: BS },
      10: { n: 'PtgElfRadical', f: US },
      11: { n: 'PtgElfRadicalS', f: HS },
      13: { n: 'PtgElfColS', f: bS },
      15: { n: 'PtgElfColSV', f: LS },
      16: { n: 'PtgElfRadicalLel', f: WS },
      25: { n: 'PtgList', f: VS },
      29: { n: 'PtgSxName', f: GS },
      255: {}
    },
    ey = {
      0: { n: 'PtgAttrNoop', f: JS },
      1: { n: 'PtgAttrSemi', f: sS },
      2: { n: 'PtgAttrIf', f: aS },
      4: { n: 'PtgAttrChoose', f: rS },
      8: { n: 'PtgAttrGoto', f: nS },
      16: { n: 'PtgAttrSum', f: xS },
      32: { n: 'PtgAttrBaxcel', f: Ru },
      33: { n: 'PtgAttrBaxcel', f: Ru },
      64: { n: 'PtgAttrSpace', f: oS },
      65: { n: 'PtgAttrSpaceSemi', f: fS },
      128: { n: 'PtgAttrIfError', f: iS },
      255: {}
    }
  function ty(e, t, r, n) {
    if (n.biff < 8) return ur(e, t)
    for (var a = e.l + t, i = [], s = 0; s !== r.length; ++s)
      switch (r[s][0]) {
        case 'PtgArray':
          ;(r[s][1] = yS(e, 0, n)), i.push(r[s][1])
          break
        case 'PtgMemArea':
          ;(r[s][2] = SS(e, r[s][1], n)), i.push(r[s][2])
          break
        case 'PtgExp':
          n && n.biff == 12 && ((r[s][1][1] = e.read_shift(4)), i.push(r[s][1]))
          break
        case 'PtgList':
        case 'PtgElfRadicalS':
        case 'PtgElfColS':
        case 'PtgElfColSV':
          throw 'Unsupported ' + r[s][0]
      }
    return (t = a - e.l), t !== 0 && i.push(ur(e, t)), i
  }
  function ry(e, t, r) {
    for (var n = e.l + t, a, i, s = []; n != e.l; )
      (t = n - e.l),
        (i = e[e.l]),
        (a = Iu[i] || Iu[ZS[i]]),
        (i === 24 || i === 25) && (a = (i === 24 ? QS : ey)[e[e.l + 1]]),
        !a || !a.f ? ur(e, t) : s.push([a.n, a.f(e, t, r)])
    return s
  }
  function ny(e) {
    for (var t = [], r = 0; r < e.length; ++r) {
      for (var n = e[r], a = [], i = 0; i < n.length; ++i) {
        var s = n[i]
        if (s)
          switch (s[0]) {
            case 2:
              a.push('"' + s[1].replace(/"/g, '""') + '"')
              break
            default:
              a.push(s[1])
          }
        else a.push('')
      }
      t.push(a.join(','))
    }
    return t.join(';')
  }
  var ay = {
    PtgAdd: '+',
    PtgConcat: '&',
    PtgDiv: '/',
    PtgEq: '=',
    PtgGe: '>=',
    PtgGt: '>',
    PtgLe: '<=',
    PtgLt: '<',
    PtgMul: '*',
    PtgNe: '<>',
    PtgPower: '^',
    PtgSub: '-'
  }
  function iy(e, t) {
    if (!e && !(t && t.biff <= 5 && t.biff >= 2)) throw new Error('empty sheet name')
    return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e + "'" : e
  }
  function Mu(e, t, r) {
    if (!e) return 'SH33TJSERR0'
    if (r.biff > 8 && (!e.XTI || !e.XTI[t])) return e.SheetNames[t]
    if (!e.XTI) return 'SH33TJSERR6'
    var n = e.XTI[t]
    if (r.biff < 8) return t > 1e4 && (t -= 65536), t < 0 && (t = -t), t == 0 ? '' : e.XTI[t - 1]
    if (!n) return 'SH33TJSERR1'
    var a = ''
    if (r.biff > 8)
      switch (e[n[0]][0]) {
        case 357:
          return (
            (a = n[1] == -1 ? '#REF' : e.SheetNames[n[1]]),
            n[1] == n[2] ? a : a + ':' + e.SheetNames[n[2]]
          )
        case 358:
          return r.SID != null ? e.SheetNames[r.SID] : 'SH33TJSSAME' + e[n[0]][0]
        case 355:
        default:
          return 'SH33TJSSRC' + e[n[0]][0]
      }
    switch (e[n[0]][0][0]) {
      case 1025:
        return (
          (a = n[1] == -1 ? '#REF' : e.SheetNames[n[1]] || 'SH33TJSERR3'),
          n[1] == n[2] ? a : a + ':' + e.SheetNames[n[2]]
        )
      case 14849:
        return e[n[0]]
          .slice(1)
          .map(function (i) {
            return i.Name
          })
          .join(';;')
      default:
        return e[n[0]][0][3]
          ? ((a = n[1] == -1 ? '#REF' : e[n[0]][0][3][n[1]] || 'SH33TJSERR4'),
            n[1] == n[2] ? a : a + ':' + e[n[0]][0][3][n[2]])
          : 'SH33TJSERR2'
    }
  }
  function bu(e, t, r) {
    var n = Mu(e, t, r)
    return n == '#REF' ? n : iy(n, r)
  }
  function zn(e, t, r, n, a) {
    var i = (a && a.biff) || 8,
      s = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } },
      o = [],
      l,
      f,
      c,
      u = 0,
      h = 0,
      p,
      m = ''
    if (!e[0] || !e[0][0]) return ''
    for (var d = -1, v = '', A = 0, F = e[0].length; A < F; ++A) {
      var C = e[0][A]
      switch (C[0]) {
        case 'PtgUminus':
          o.push('-' + o.pop())
          break
        case 'PtgUplus':
          o.push('+' + o.pop())
          break
        case 'PtgPercent':
          o.push(o.pop() + '%')
          break
        case 'PtgAdd':
        case 'PtgConcat':
        case 'PtgDiv':
        case 'PtgEq':
        case 'PtgGe':
        case 'PtgGt':
        case 'PtgLe':
        case 'PtgLt':
        case 'PtgMul':
        case 'PtgNe':
        case 'PtgPower':
        case 'PtgSub':
          if (((l = o.pop()), (f = o.pop()), d >= 0)) {
            switch (e[0][d][1][0]) {
              case 0:
                v = Ze(' ', e[0][d][1][1])
                break
              case 1:
                v = Ze('\r', e[0][d][1][1])
                break
              default:
                if (((v = ''), a.WTF))
                  throw new Error('Unexpected PtgAttrSpaceType ' + e[0][d][1][0])
            }
            ;(f = f + v), (d = -1)
          }
          o.push(f + ay[C[0]] + l)
          break
        case 'PtgIsect':
          ;(l = o.pop()), (f = o.pop()), o.push(f + ' ' + l)
          break
        case 'PtgUnion':
          ;(l = o.pop()), (f = o.pop()), o.push(f + ',' + l)
          break
        case 'PtgRange':
          ;(l = o.pop()), (f = o.pop()), o.push(f + ':' + l)
          break
        case 'PtgAttrChoose':
          break
        case 'PtgAttrGoto':
          break
        case 'PtgAttrIf':
          break
        case 'PtgAttrIfError':
          break
        case 'PtgRef':
          ;(c = La(C[1][1], s, a)), o.push(Ba(c, i))
          break
        case 'PtgRefN':
          ;(c = r ? La(C[1][1], r, a) : C[1][1]), o.push(Ba(c, i))
          break
        case 'PtgRef3d':
          ;(u = C[1][1]), (c = La(C[1][2], s, a)), (m = bu(n, u, a)), o.push(m + '!' + Ba(c, i))
          break
        case 'PtgFunc':
        case 'PtgFuncVar':
          var L = C[1][0],
            Z = C[1][1]
          L || (L = 0), (L &= 127)
          var ie = L == 0 ? [] : o.slice(-L)
          ;(o.length -= L), Z === 'User' && (Z = ie.shift()), o.push(Z + '(' + ie.join(',') + ')')
          break
        case 'PtgBool':
          o.push(C[1] ? 'TRUE' : 'FALSE')
          break
        case 'PtgInt':
          o.push(C[1])
          break
        case 'PtgNum':
          o.push(String(C[1]))
          break
        case 'PtgStr':
          o.push('"' + C[1].replace(/"/g, '""') + '"')
          break
        case 'PtgErr':
          o.push(C[1])
          break
        case 'PtgAreaN':
          ;(p = bc(C[1][1], r ? { s: r } : s, a)), o.push(b0(p, a))
          break
        case 'PtgArea':
          ;(p = bc(C[1][1], s, a)), o.push(b0(p, a))
          break
        case 'PtgArea3d':
          ;(u = C[1][1]), (p = C[1][2]), (m = bu(n, u, a)), o.push(m + '!' + b0(p, a))
          break
        case 'PtgAttrSum':
          o.push('SUM(' + o.pop() + ')')
          break
        case 'PtgAttrBaxcel':
        case 'PtgAttrSemi':
          break
        case 'PtgName':
          h = C[1][2]
          var k = (n.names || [])[h - 1] || (n[0] || [])[h],
            H = k ? k.Name : 'SH33TJSNAME' + String(h)
          H && H.slice(0, 6) == '_xlfn.' && !a.xlfn && (H = H.slice(6)), o.push(H)
          break
        case 'PtgNameX':
          var b = C[1][1]
          h = C[1][2]
          var V
          if (a.biff <= 5) b < 0 && (b = -b), n[b] && (V = n[b][h])
          else {
            var G = ''
            if (
              (((n[b] || [])[0] || [])[0] == 14849 ||
                (((n[b] || [])[0] || [])[0] == 1025
                  ? n[b][h] && n[b][h].itab > 0 && (G = n.SheetNames[n[b][h].itab - 1] + '!')
                  : (G = n.SheetNames[h - 1] + '!')),
              n[b] && n[b][h])
            )
              G += n[b][h].Name
            else if (n[0] && n[0][h]) G += n[0][h].Name
            else {
              var z = (Mu(n, b, a) || '').split(';;')
              z[h - 1] ? (G = z[h - 1]) : (G += 'SH33TJSERRX')
            }
            o.push(G)
            break
          }
          V || (V = { Name: 'SH33TJSERRY' }), o.push(V.Name)
          break
        case 'PtgParen':
          var ae = '(',
            Re = ')'
          if (d >= 0) {
            switch (((v = ''), e[0][d][1][0])) {
              case 2:
                ae = Ze(' ', e[0][d][1][1]) + ae
                break
              case 3:
                ae = Ze('\r', e[0][d][1][1]) + ae
                break
              case 4:
                Re = Ze(' ', e[0][d][1][1]) + Re
                break
              case 5:
                Re = Ze('\r', e[0][d][1][1]) + Re
                break
              default:
                if (a.WTF) throw new Error('Unexpected PtgAttrSpaceType ' + e[0][d][1][0])
            }
            d = -1
          }
          o.push(ae + o.pop() + Re)
          break
        case 'PtgRefErr':
          o.push('#REF!')
          break
        case 'PtgRefErr3d':
          o.push('#REF!')
          break
        case 'PtgExp':
          c = { c: C[1][1], r: C[1][0] }
          var me = { c: r.c, r: r.r }
          if (n.sharedf[Pe(c)]) {
            var st = n.sharedf[Pe(c)]
            o.push(zn(st, s, me, n, a))
          } else {
            var te = !1
            for (l = 0; l != n.arrayf.length; ++l)
              if (
                ((f = n.arrayf[l]),
                !(c.c < f[0].s.c || c.c > f[0].e.c) && !(c.r < f[0].s.r || c.r > f[0].e.r))
              ) {
                o.push(zn(f[1], s, me, n, a)), (te = !0)
                break
              }
            te || o.push(C[1])
          }
          break
        case 'PtgArray':
          o.push('{' + ny(C[1]) + '}')
          break
        case 'PtgMemArea':
          break
        case 'PtgAttrSpace':
        case 'PtgAttrSpaceSemi':
          d = A
          break
        case 'PtgTbl':
          break
        case 'PtgMemErr':
          break
        case 'PtgMissArg':
          o.push('')
          break
        case 'PtgAreaErr':
          o.push('#REF!')
          break
        case 'PtgAreaErr3d':
          o.push('#REF!')
          break
        case 'PtgList':
          o.push('Table' + C[1].idx + '[#' + C[1].rt + ']')
          break
        case 'PtgMemAreaN':
        case 'PtgMemNoMemN':
        case 'PtgAttrNoop':
        case 'PtgSheet':
        case 'PtgEndSheet':
          break
        case 'PtgMemFunc':
          break
        case 'PtgMemNoMem':
          break
        case 'PtgElfCol':
        case 'PtgElfColS':
        case 'PtgElfColSV':
        case 'PtgElfColV':
        case 'PtgElfLel':
        case 'PtgElfRadical':
        case 'PtgElfRadicalLel':
        case 'PtgElfRadicalS':
        case 'PtgElfRw':
        case 'PtgElfRwV':
          throw new Error('Unsupported ELFs')
        case 'PtgSxName':
          throw new Error('Unrecognized Formula Token: ' + String(C))
        default:
          throw new Error('Unrecognized Formula Token: ' + String(C))
      }
      var Se = ['PtgAttrSpace', 'PtgAttrSpaceSemi', 'PtgAttrGoto']
      if (a.biff != 3 && d >= 0 && Se.indexOf(e[0][A][0]) == -1) {
        C = e[0][d]
        var ye = !0
        switch (C[1][0]) {
          case 4:
            ye = !1
          case 0:
            v = Ze(' ', C[1][1])
            break
          case 5:
            ye = !1
          case 1:
            v = Ze('\r', C[1][1])
            break
          default:
            if (((v = ''), a.WTF)) throw new Error('Unexpected PtgAttrSpaceType ' + C[1][0])
        }
        o.push((ye ? v : '') + o.pop() + (ye ? '' : v)), (d = -1)
      }
    }
    if (o.length > 1 && a.WTF) throw new Error('bad formula stack')
    return o[0]
  }
  function sy(e) {
    if (e == null) {
      var t = B(8)
      return (
        t.write_shift(1, 3),
        t.write_shift(1, 0),
        t.write_shift(2, 0),
        t.write_shift(2, 0),
        t.write_shift(2, 65535),
        t
      )
    } else if (typeof e == 'number') return gn(e)
    return gn(0)
  }
  function oy(e, t, r, n, a) {
    var i = wn(t, r, a),
      s = sy(e.v),
      o = B(6),
      l = 33
    o.write_shift(2, l), o.write_shift(4, 0)
    for (var f = B(e.bf.length), c = 0; c < e.bf.length; ++c) f[c] = e.bf[c]
    var u = ht([i, s, o, f])
    return u
  }
  function rs(e, t, r) {
    var n = e.read_shift(4),
      a = ry(e, n, r),
      i = e.read_shift(4),
      s = i > 0 ? ty(e, i, a, r) : null
    return [a, s]
  }
  var fy = rs,
    ns = rs,
    ly = rs,
    cy = rs,
    uy = {
      0: 'BEEP',
      1: 'OPEN',
      2: 'OPEN.LINKS',
      3: 'CLOSE.ALL',
      4: 'SAVE',
      5: 'SAVE.AS',
      6: 'FILE.DELETE',
      7: 'PAGE.SETUP',
      8: 'PRINT',
      9: 'PRINTER.SETUP',
      10: 'QUIT',
      11: 'NEW.WINDOW',
      12: 'ARRANGE.ALL',
      13: 'WINDOW.SIZE',
      14: 'WINDOW.MOVE',
      15: 'FULL',
      16: 'CLOSE',
      17: 'RUN',
      22: 'SET.PRINT.AREA',
      23: 'SET.PRINT.TITLES',
      24: 'SET.PAGE.BREAK',
      25: 'REMOVE.PAGE.BREAK',
      26: 'FONT',
      27: 'DISPLAY',
      28: 'PROTECT.DOCUMENT',
      29: 'PRECISION',
      30: 'A1.R1C1',
      31: 'CALCULATE.NOW',
      32: 'CALCULATION',
      34: 'DATA.FIND',
      35: 'EXTRACT',
      36: 'DATA.DELETE',
      37: 'SET.DATABASE',
      38: 'SET.CRITERIA',
      39: 'SORT',
      40: 'DATA.SERIES',
      41: 'TABLE',
      42: 'FORMAT.NUMBER',
      43: 'ALIGNMENT',
      44: 'STYLE',
      45: 'BORDER',
      46: 'CELL.PROTECTION',
      47: 'COLUMN.WIDTH',
      48: 'UNDO',
      49: 'CUT',
      50: 'COPY',
      51: 'PASTE',
      52: 'CLEAR',
      53: 'PASTE.SPECIAL',
      54: 'EDIT.DELETE',
      55: 'INSERT',
      56: 'FILL.RIGHT',
      57: 'FILL.DOWN',
      61: 'DEFINE.NAME',
      62: 'CREATE.NAMES',
      63: 'FORMULA.GOTO',
      64: 'FORMULA.FIND',
      65: 'SELECT.LAST.CELL',
      66: 'SHOW.ACTIVE.CELL',
      67: 'GALLERY.AREA',
      68: 'GALLERY.BAR',
      69: 'GALLERY.COLUMN',
      70: 'GALLERY.LINE',
      71: 'GALLERY.PIE',
      72: 'GALLERY.SCATTER',
      73: 'COMBINATION',
      74: 'PREFERRED',
      75: 'ADD.OVERLAY',
      76: 'GRIDLINES',
      77: 'SET.PREFERRED',
      78: 'AXES',
      79: 'LEGEND',
      80: 'ATTACH.TEXT',
      81: 'ADD.ARROW',
      82: 'SELECT.CHART',
      83: 'SELECT.PLOT.AREA',
      84: 'PATTERNS',
      85: 'MAIN.CHART',
      86: 'OVERLAY',
      87: 'SCALE',
      88: 'FORMAT.LEGEND',
      89: 'FORMAT.TEXT',
      90: 'EDIT.REPEAT',
      91: 'PARSE',
      92: 'JUSTIFY',
      93: 'HIDE',
      94: 'UNHIDE',
      95: 'WORKSPACE',
      96: 'FORMULA',
      97: 'FORMULA.FILL',
      98: 'FORMULA.ARRAY',
      99: 'DATA.FIND.NEXT',
      100: 'DATA.FIND.PREV',
      101: 'FORMULA.FIND.NEXT',
      102: 'FORMULA.FIND.PREV',
      103: 'ACTIVATE',
      104: 'ACTIVATE.NEXT',
      105: 'ACTIVATE.PREV',
      106: 'UNLOCKED.NEXT',
      107: 'UNLOCKED.PREV',
      108: 'COPY.PICTURE',
      109: 'SELECT',
      110: 'DELETE.NAME',
      111: 'DELETE.FORMAT',
      112: 'VLINE',
      113: 'HLINE',
      114: 'VPAGE',
      115: 'HPAGE',
      116: 'VSCROLL',
      117: 'HSCROLL',
      118: 'ALERT',
      119: 'NEW',
      120: 'CANCEL.COPY',
      121: 'SHOW.CLIPBOARD',
      122: 'MESSAGE',
      124: 'PASTE.LINK',
      125: 'APP.ACTIVATE',
      126: 'DELETE.ARROW',
      127: 'ROW.HEIGHT',
      128: 'FORMAT.MOVE',
      129: 'FORMAT.SIZE',
      130: 'FORMULA.REPLACE',
      131: 'SEND.KEYS',
      132: 'SELECT.SPECIAL',
      133: 'APPLY.NAMES',
      134: 'REPLACE.FONT',
      135: 'FREEZE.PANES',
      136: 'SHOW.INFO',
      137: 'SPLIT',
      138: 'ON.WINDOW',
      139: 'ON.DATA',
      140: 'DISABLE.INPUT',
      142: 'OUTLINE',
      143: 'LIST.NAMES',
      144: 'FILE.CLOSE',
      145: 'SAVE.WORKBOOK',
      146: 'DATA.FORM',
      147: 'COPY.CHART',
      148: 'ON.TIME',
      149: 'WAIT',
      150: 'FORMAT.FONT',
      151: 'FILL.UP',
      152: 'FILL.LEFT',
      153: 'DELETE.OVERLAY',
      155: 'SHORT.MENUS',
      159: 'SET.UPDATE.STATUS',
      161: 'COLOR.PALETTE',
      162: 'DELETE.STYLE',
      163: 'WINDOW.RESTORE',
      164: 'WINDOW.MAXIMIZE',
      166: 'CHANGE.LINK',
      167: 'CALCULATE.DOCUMENT',
      168: 'ON.KEY',
      169: 'APP.RESTORE',
      170: 'APP.MOVE',
      171: 'APP.SIZE',
      172: 'APP.MINIMIZE',
      173: 'APP.MAXIMIZE',
      174: 'BRING.TO.FRONT',
      175: 'SEND.TO.BACK',
      185: 'MAIN.CHART.TYPE',
      186: 'OVERLAY.CHART.TYPE',
      187: 'SELECT.END',
      188: 'OPEN.MAIL',
      189: 'SEND.MAIL',
      190: 'STANDARD.FONT',
      191: 'CONSOLIDATE',
      192: 'SORT.SPECIAL',
      193: 'GALLERY.3D.AREA',
      194: 'GALLERY.3D.COLUMN',
      195: 'GALLERY.3D.LINE',
      196: 'GALLERY.3D.PIE',
      197: 'VIEW.3D',
      198: 'GOAL.SEEK',
      199: 'WORKGROUP',
      200: 'FILL.GROUP',
      201: 'UPDATE.LINK',
      202: 'PROMOTE',
      203: 'DEMOTE',
      204: 'SHOW.DETAIL',
      206: 'UNGROUP',
      207: 'OBJECT.PROPERTIES',
      208: 'SAVE.NEW.OBJECT',
      209: 'SHARE',
      210: 'SHARE.NAME',
      211: 'DUPLICATE',
      212: 'APPLY.STYLE',
      213: 'ASSIGN.TO.OBJECT',
      214: 'OBJECT.PROTECTION',
      215: 'HIDE.OBJECT',
      216: 'SET.EXTRACT',
      217: 'CREATE.PUBLISHER',
      218: 'SUBSCRIBE.TO',
      219: 'ATTRIBUTES',
      220: 'SHOW.TOOLBAR',
      222: 'PRINT.PREVIEW',
      223: 'EDIT.COLOR',
      224: 'SHOW.LEVELS',
      225: 'FORMAT.MAIN',
      226: 'FORMAT.OVERLAY',
      227: 'ON.RECALC',
      228: 'EDIT.SERIES',
      229: 'DEFINE.STYLE',
      240: 'LINE.PRINT',
      243: 'ENTER.DATA',
      249: 'GALLERY.RADAR',
      250: 'MERGE.STYLES',
      251: 'EDITION.OPTIONS',
      252: 'PASTE.PICTURE',
      253: 'PASTE.PICTURE.LINK',
      254: 'SPELLING',
      256: 'ZOOM',
      259: 'INSERT.OBJECT',
      260: 'WINDOW.MINIMIZE',
      265: 'SOUND.NOTE',
      266: 'SOUND.PLAY',
      267: 'FORMAT.SHAPE',
      268: 'EXTEND.POLYGON',
      269: 'FORMAT.AUTO',
      272: 'GALLERY.3D.BAR',
      273: 'GALLERY.3D.SURFACE',
      274: 'FILL.AUTO',
      276: 'CUSTOMIZE.TOOLBAR',
      277: 'ADD.TOOL',
      278: 'EDIT.OBJECT',
      279: 'ON.DOUBLECLICK',
      280: 'ON.ENTRY',
      281: 'WORKBOOK.ADD',
      282: 'WORKBOOK.MOVE',
      283: 'WORKBOOK.COPY',
      284: 'WORKBOOK.OPTIONS',
      285: 'SAVE.WORKSPACE',
      288: 'CHART.WIZARD',
      289: 'DELETE.TOOL',
      290: 'MOVE.TOOL',
      291: 'WORKBOOK.SELECT',
      292: 'WORKBOOK.ACTIVATE',
      293: 'ASSIGN.TO.TOOL',
      295: 'COPY.TOOL',
      296: 'RESET.TOOL',
      297: 'CONSTRAIN.NUMERIC',
      298: 'PASTE.TOOL',
      302: 'WORKBOOK.NEW',
      305: 'SCENARIO.CELLS',
      306: 'SCENARIO.DELETE',
      307: 'SCENARIO.ADD',
      308: 'SCENARIO.EDIT',
      309: 'SCENARIO.SHOW',
      310: 'SCENARIO.SHOW.NEXT',
      311: 'SCENARIO.SUMMARY',
      312: 'PIVOT.TABLE.WIZARD',
      313: 'PIVOT.FIELD.PROPERTIES',
      314: 'PIVOT.FIELD',
      315: 'PIVOT.ITEM',
      316: 'PIVOT.ADD.FIELDS',
      318: 'OPTIONS.CALCULATION',
      319: 'OPTIONS.EDIT',
      320: 'OPTIONS.VIEW',
      321: 'ADDIN.MANAGER',
      322: 'MENU.EDITOR',
      323: 'ATTACH.TOOLBARS',
      324: 'VBAActivate',
      325: 'OPTIONS.CHART',
      328: 'VBA.INSERT.FILE',
      330: 'VBA.PROCEDURE.DEFINITION',
      336: 'ROUTING.SLIP',
      338: 'ROUTE.DOCUMENT',
      339: 'MAIL.LOGON',
      342: 'INSERT.PICTURE',
      343: 'EDIT.TOOL',
      344: 'GALLERY.DOUGHNUT',
      350: 'CHART.TREND',
      352: 'PIVOT.ITEM.PROPERTIES',
      354: 'WORKBOOK.INSERT',
      355: 'OPTIONS.TRANSITION',
      356: 'OPTIONS.GENERAL',
      370: 'FILTER.ADVANCED',
      373: 'MAIL.ADD.MAILER',
      374: 'MAIL.DELETE.MAILER',
      375: 'MAIL.REPLY',
      376: 'MAIL.REPLY.ALL',
      377: 'MAIL.FORWARD',
      378: 'MAIL.NEXT.LETTER',
      379: 'DATA.LABEL',
      380: 'INSERT.TITLE',
      381: 'FONT.PROPERTIES',
      382: 'MACRO.OPTIONS',
      383: 'WORKBOOK.HIDE',
      384: 'WORKBOOK.UNHIDE',
      385: 'WORKBOOK.DELETE',
      386: 'WORKBOOK.NAME',
      388: 'GALLERY.CUSTOM',
      390: 'ADD.CHART.AUTOFORMAT',
      391: 'DELETE.CHART.AUTOFORMAT',
      392: 'CHART.ADD.DATA',
      393: 'AUTO.OUTLINE',
      394: 'TAB.ORDER',
      395: 'SHOW.DIALOG',
      396: 'SELECT.ALL',
      397: 'UNGROUP.SHEETS',
      398: 'SUBTOTAL.CREATE',
      399: 'SUBTOTAL.REMOVE',
      400: 'RENAME.OBJECT',
      412: 'WORKBOOK.SCROLL',
      413: 'WORKBOOK.NEXT',
      414: 'WORKBOOK.PREV',
      415: 'WORKBOOK.TAB.SPLIT',
      416: 'FULL.SCREEN',
      417: 'WORKBOOK.PROTECT',
      420: 'SCROLLBAR.PROPERTIES',
      421: 'PIVOT.SHOW.PAGES',
      422: 'TEXT.TO.COLUMNS',
      423: 'FORMAT.CHARTTYPE',
      424: 'LINK.FORMAT',
      425: 'TRACER.DISPLAY',
      430: 'TRACER.NAVIGATE',
      431: 'TRACER.CLEAR',
      432: 'TRACER.ERROR',
      433: 'PIVOT.FIELD.GROUP',
      434: 'PIVOT.FIELD.UNGROUP',
      435: 'CHECKBOX.PROPERTIES',
      436: 'LABEL.PROPERTIES',
      437: 'LISTBOX.PROPERTIES',
      438: 'EDITBOX.PROPERTIES',
      439: 'PIVOT.REFRESH',
      440: 'LINK.COMBO',
      441: 'OPEN.TEXT',
      442: 'HIDE.DIALOG',
      443: 'SET.DIALOG.FOCUS',
      444: 'ENABLE.OBJECT',
      445: 'PUSHBUTTON.PROPERTIES',
      446: 'SET.DIALOG.DEFAULT',
      447: 'FILTER',
      448: 'FILTER.SHOW.ALL',
      449: 'CLEAR.OUTLINE',
      450: 'FUNCTION.WIZARD',
      451: 'ADD.LIST.ITEM',
      452: 'SET.LIST.ITEM',
      453: 'REMOVE.LIST.ITEM',
      454: 'SELECT.LIST.ITEM',
      455: 'SET.CONTROL.VALUE',
      456: 'SAVE.COPY.AS',
      458: 'OPTIONS.LISTS.ADD',
      459: 'OPTIONS.LISTS.DELETE',
      460: 'SERIES.AXES',
      461: 'SERIES.X',
      462: 'SERIES.Y',
      463: 'ERRORBAR.X',
      464: 'ERRORBAR.Y',
      465: 'FORMAT.CHART',
      466: 'SERIES.ORDER',
      467: 'MAIL.LOGOFF',
      468: 'CLEAR.ROUTING.SLIP',
      469: 'APP.ACTIVATE.MICROSOFT',
      470: 'MAIL.EDIT.MAILER',
      471: 'ON.SHEET',
      472: 'STANDARD.WIDTH',
      473: 'SCENARIO.MERGE',
      474: 'SUMMARY.INFO',
      475: 'FIND.FILE',
      476: 'ACTIVE.CELL.FONT',
      477: 'ENABLE.TIPWIZARD',
      478: 'VBA.MAKE.ADDIN',
      480: 'INSERTDATATABLE',
      481: 'WORKGROUP.OPTIONS',
      482: 'MAIL.SEND.MAILER',
      485: 'AUTOCORRECT',
      489: 'POST.DOCUMENT',
      491: 'PICKLIST',
      493: 'VIEW.SHOW',
      494: 'VIEW.DEFINE',
      495: 'VIEW.DELETE',
      509: 'SHEET.BACKGROUND',
      510: 'INSERT.MAP.OBJECT',
      511: 'OPTIONS.MENONO',
      517: 'MSOCHECKS',
      518: 'NORMAL',
      519: 'LAYOUT',
      520: 'RM.PRINT.AREA',
      521: 'CLEAR.PRINT.AREA',
      522: 'ADD.PRINT.AREA',
      523: 'MOVE.BRK',
      545: 'HIDECURR.NOTE',
      546: 'HIDEALL.NOTES',
      547: 'DELETE.NOTE',
      548: 'TRAVERSE.NOTES',
      549: 'ACTIVATE.NOTES',
      620: 'PROTECT.REVISIONS',
      621: 'UNPROTECT.REVISIONS',
      647: 'OPTIONS.ME',
      653: 'WEB.PUBLISH',
      667: 'NEWWEBQUERY',
      673: 'PIVOT.TABLE.CHART',
      753: 'OPTIONS.SAVE',
      755: 'OPTIONS.SPELL',
      808: 'HIDEALL.INKANNOTS'
    },
    Lu = {
      0: 'COUNT',
      1: 'IF',
      2: 'ISNA',
      3: 'ISERROR',
      4: 'SUM',
      5: 'AVERAGE',
      6: 'MIN',
      7: 'MAX',
      8: 'ROW',
      9: 'COLUMN',
      10: 'NA',
      11: 'NPV',
      12: 'STDEV',
      13: 'DOLLAR',
      14: 'FIXED',
      15: 'SIN',
      16: 'COS',
      17: 'TAN',
      18: 'ATAN',
      19: 'PI',
      20: 'SQRT',
      21: 'EXP',
      22: 'LN',
      23: 'LOG10',
      24: 'ABS',
      25: 'INT',
      26: 'SIGN',
      27: 'ROUND',
      28: 'LOOKUP',
      29: 'INDEX',
      30: 'REPT',
      31: 'MID',
      32: 'LEN',
      33: 'VALUE',
      34: 'TRUE',
      35: 'FALSE',
      36: 'AND',
      37: 'OR',
      38: 'NOT',
      39: 'MOD',
      40: 'DCOUNT',
      41: 'DSUM',
      42: 'DAVERAGE',
      43: 'DMIN',
      44: 'DMAX',
      45: 'DSTDEV',
      46: 'VAR',
      47: 'DVAR',
      48: 'TEXT',
      49: 'LINEST',
      50: 'TREND',
      51: 'LOGEST',
      52: 'GROWTH',
      53: 'GOTO',
      54: 'HALT',
      55: 'RETURN',
      56: 'PV',
      57: 'FV',
      58: 'NPER',
      59: 'PMT',
      60: 'RATE',
      61: 'MIRR',
      62: 'IRR',
      63: 'RAND',
      64: 'MATCH',
      65: 'DATE',
      66: 'TIME',
      67: 'DAY',
      68: 'MONTH',
      69: 'YEAR',
      70: 'WEEKDAY',
      71: 'HOUR',
      72: 'MINUTE',
      73: 'SECOND',
      74: 'NOW',
      75: 'AREAS',
      76: 'ROWS',
      77: 'COLUMNS',
      78: 'OFFSET',
      79: 'ABSREF',
      80: 'RELREF',
      81: 'ARGUMENT',
      82: 'SEARCH',
      83: 'TRANSPOSE',
      84: 'ERROR',
      85: 'STEP',
      86: 'TYPE',
      87: 'ECHO',
      88: 'SET.NAME',
      89: 'CALLER',
      90: 'DEREF',
      91: 'WINDOWS',
      92: 'SERIES',
      93: 'DOCUMENTS',
      94: 'ACTIVE.CELL',
      95: 'SELECTION',
      96: 'RESULT',
      97: 'ATAN2',
      98: 'ASIN',
      99: 'ACOS',
      100: 'CHOOSE',
      101: 'HLOOKUP',
      102: 'VLOOKUP',
      103: 'LINKS',
      104: 'INPUT',
      105: 'ISREF',
      106: 'GET.FORMULA',
      107: 'GET.NAME',
      108: 'SET.VALUE',
      109: 'LOG',
      110: 'EXEC',
      111: 'CHAR',
      112: 'LOWER',
      113: 'UPPER',
      114: 'PROPER',
      115: 'LEFT',
      116: 'RIGHT',
      117: 'EXACT',
      118: 'TRIM',
      119: 'REPLACE',
      120: 'SUBSTITUTE',
      121: 'CODE',
      122: 'NAMES',
      123: 'DIRECTORY',
      124: 'FIND',
      125: 'CELL',
      126: 'ISERR',
      127: 'ISTEXT',
      128: 'ISNUMBER',
      129: 'ISBLANK',
      130: 'T',
      131: 'N',
      132: 'FOPEN',
      133: 'FCLOSE',
      134: 'FSIZE',
      135: 'FREADLN',
      136: 'FREAD',
      137: 'FWRITELN',
      138: 'FWRITE',
      139: 'FPOS',
      140: 'DATEVALUE',
      141: 'TIMEVALUE',
      142: 'SLN',
      143: 'SYD',
      144: 'DDB',
      145: 'GET.DEF',
      146: 'REFTEXT',
      147: 'TEXTREF',
      148: 'INDIRECT',
      149: 'REGISTER',
      150: 'CALL',
      151: 'ADD.BAR',
      152: 'ADD.MENU',
      153: 'ADD.COMMAND',
      154: 'ENABLE.COMMAND',
      155: 'CHECK.COMMAND',
      156: 'RENAME.COMMAND',
      157: 'SHOW.BAR',
      158: 'DELETE.MENU',
      159: 'DELETE.COMMAND',
      160: 'GET.CHART.ITEM',
      161: 'DIALOG.BOX',
      162: 'CLEAN',
      163: 'MDETERM',
      164: 'MINVERSE',
      165: 'MMULT',
      166: 'FILES',
      167: 'IPMT',
      168: 'PPMT',
      169: 'COUNTA',
      170: 'CANCEL.KEY',
      171: 'FOR',
      172: 'WHILE',
      173: 'BREAK',
      174: 'NEXT',
      175: 'INITIATE',
      176: 'REQUEST',
      177: 'POKE',
      178: 'EXECUTE',
      179: 'TERMINATE',
      180: 'RESTART',
      181: 'HELP',
      182: 'GET.BAR',
      183: 'PRODUCT',
      184: 'FACT',
      185: 'GET.CELL',
      186: 'GET.WORKSPACE',
      187: 'GET.WINDOW',
      188: 'GET.DOCUMENT',
      189: 'DPRODUCT',
      190: 'ISNONTEXT',
      191: 'GET.NOTE',
      192: 'NOTE',
      193: 'STDEVP',
      194: 'VARP',
      195: 'DSTDEVP',
      196: 'DVARP',
      197: 'TRUNC',
      198: 'ISLOGICAL',
      199: 'DCOUNTA',
      200: 'DELETE.BAR',
      201: 'UNREGISTER',
      204: 'USDOLLAR',
      205: 'FINDB',
      206: 'SEARCHB',
      207: 'REPLACEB',
      208: 'LEFTB',
      209: 'RIGHTB',
      210: 'MIDB',
      211: 'LENB',
      212: 'ROUNDUP',
      213: 'ROUNDDOWN',
      214: 'ASC',
      215: 'DBCS',
      216: 'RANK',
      219: 'ADDRESS',
      220: 'DAYS360',
      221: 'TODAY',
      222: 'VDB',
      223: 'ELSE',
      224: 'ELSE.IF',
      225: 'END.IF',
      226: 'FOR.CELL',
      227: 'MEDIAN',
      228: 'SUMPRODUCT',
      229: 'SINH',
      230: 'COSH',
      231: 'TANH',
      232: 'ASINH',
      233: 'ACOSH',
      234: 'ATANH',
      235: 'DGET',
      236: 'CREATE.OBJECT',
      237: 'VOLATILE',
      238: 'LAST.ERROR',
      239: 'CUSTOM.UNDO',
      240: 'CUSTOM.REPEAT',
      241: 'FORMULA.CONVERT',
      242: 'GET.LINK.INFO',
      243: 'TEXT.BOX',
      244: 'INFO',
      245: 'GROUP',
      246: 'GET.OBJECT',
      247: 'DB',
      248: 'PAUSE',
      251: 'RESUME',
      252: 'FREQUENCY',
      253: 'ADD.TOOLBAR',
      254: 'DELETE.TOOLBAR',
      255: 'User',
      256: 'RESET.TOOLBAR',
      257: 'EVALUATE',
      258: 'GET.TOOLBAR',
      259: 'GET.TOOL',
      260: 'SPELLING.CHECK',
      261: 'ERROR.TYPE',
      262: 'APP.TITLE',
      263: 'WINDOW.TITLE',
      264: 'SAVE.TOOLBAR',
      265: 'ENABLE.TOOL',
      266: 'PRESS.TOOL',
      267: 'REGISTER.ID',
      268: 'GET.WORKBOOK',
      269: 'AVEDEV',
      270: 'BETADIST',
      271: 'GAMMALN',
      272: 'BETAINV',
      273: 'BINOMDIST',
      274: 'CHIDIST',
      275: 'CHIINV',
      276: 'COMBIN',
      277: 'CONFIDENCE',
      278: 'CRITBINOM',
      279: 'EVEN',
      280: 'EXPONDIST',
      281: 'FDIST',
      282: 'FINV',
      283: 'FISHER',
      284: 'FISHERINV',
      285: 'FLOOR',
      286: 'GAMMADIST',
      287: 'GAMMAINV',
      288: 'CEILING',
      289: 'HYPGEOMDIST',
      290: 'LOGNORMDIST',
      291: 'LOGINV',
      292: 'NEGBINOMDIST',
      293: 'NORMDIST',
      294: 'NORMSDIST',
      295: 'NORMINV',
      296: 'NORMSINV',
      297: 'STANDARDIZE',
      298: 'ODD',
      299: 'PERMUT',
      300: 'POISSON',
      301: 'TDIST',
      302: 'WEIBULL',
      303: 'SUMXMY2',
      304: 'SUMX2MY2',
      305: 'SUMX2PY2',
      306: 'CHITEST',
      307: 'CORREL',
      308: 'COVAR',
      309: 'FORECAST',
      310: 'FTEST',
      311: 'INTERCEPT',
      312: 'PEARSON',
      313: 'RSQ',
      314: 'STEYX',
      315: 'SLOPE',
      316: 'TTEST',
      317: 'PROB',
      318: 'DEVSQ',
      319: 'GEOMEAN',
      320: 'HARMEAN',
      321: 'SUMSQ',
      322: 'KURT',
      323: 'SKEW',
      324: 'ZTEST',
      325: 'LARGE',
      326: 'SMALL',
      327: 'QUARTILE',
      328: 'PERCENTILE',
      329: 'PERCENTRANK',
      330: 'MODE',
      331: 'TRIMMEAN',
      332: 'TINV',
      334: 'MOVIE.COMMAND',
      335: 'GET.MOVIE',
      336: 'CONCATENATE',
      337: 'POWER',
      338: 'PIVOT.ADD.DATA',
      339: 'GET.PIVOT.TABLE',
      340: 'GET.PIVOT.FIELD',
      341: 'GET.PIVOT.ITEM',
      342: 'RADIANS',
      343: 'DEGREES',
      344: 'SUBTOTAL',
      345: 'SUMIF',
      346: 'COUNTIF',
      347: 'COUNTBLANK',
      348: 'SCENARIO.GET',
      349: 'OPTIONS.LISTS.GET',
      350: 'ISPMT',
      351: 'DATEDIF',
      352: 'DATESTRING',
      353: 'NUMBERSTRING',
      354: 'ROMAN',
      355: 'OPEN.DIALOG',
      356: 'SAVE.DIALOG',
      357: 'VIEW.GET',
      358: 'GETPIVOTDATA',
      359: 'HYPERLINK',
      360: 'PHONETIC',
      361: 'AVERAGEA',
      362: 'MAXA',
      363: 'MINA',
      364: 'STDEVPA',
      365: 'VARPA',
      366: 'STDEVA',
      367: 'VARA',
      368: 'BAHTTEXT',
      369: 'THAIDAYOFWEEK',
      370: 'THAIDIGIT',
      371: 'THAIMONTHOFYEAR',
      372: 'THAINUMSOUND',
      373: 'THAINUMSTRING',
      374: 'THAISTRINGLENGTH',
      375: 'ISTHAIDIGIT',
      376: 'ROUNDBAHTDOWN',
      377: 'ROUNDBAHTUP',
      378: 'THAIYEAR',
      379: 'RTD',
      380: 'CUBEVALUE',
      381: 'CUBEMEMBER',
      382: 'CUBEMEMBERPROPERTY',
      383: 'CUBERANKEDMEMBER',
      384: 'HEX2BIN',
      385: 'HEX2DEC',
      386: 'HEX2OCT',
      387: 'DEC2BIN',
      388: 'DEC2HEX',
      389: 'DEC2OCT',
      390: 'OCT2BIN',
      391: 'OCT2HEX',
      392: 'OCT2DEC',
      393: 'BIN2DEC',
      394: 'BIN2OCT',
      395: 'BIN2HEX',
      396: 'IMSUB',
      397: 'IMDIV',
      398: 'IMPOWER',
      399: 'IMABS',
      400: 'IMSQRT',
      401: 'IMLN',
      402: 'IMLOG2',
      403: 'IMLOG10',
      404: 'IMSIN',
      405: 'IMCOS',
      406: 'IMEXP',
      407: 'IMARGUMENT',
      408: 'IMCONJUGATE',
      409: 'IMAGINARY',
      410: 'IMREAL',
      411: 'COMPLEX',
      412: 'IMSUM',
      413: 'IMPRODUCT',
      414: 'SERIESSUM',
      415: 'FACTDOUBLE',
      416: 'SQRTPI',
      417: 'QUOTIENT',
      418: 'DELTA',
      419: 'GESTEP',
      420: 'ISEVEN',
      421: 'ISODD',
      422: 'MROUND',
      423: 'ERF',
      424: 'ERFC',
      425: 'BESSELJ',
      426: 'BESSELK',
      427: 'BESSELY',
      428: 'BESSELI',
      429: 'XIRR',
      430: 'XNPV',
      431: 'PRICEMAT',
      432: 'YIELDMAT',
      433: 'INTRATE',
      434: 'RECEIVED',
      435: 'DISC',
      436: 'PRICEDISC',
      437: 'YIELDDISC',
      438: 'TBILLEQ',
      439: 'TBILLPRICE',
      440: 'TBILLYIELD',
      441: 'PRICE',
      442: 'YIELD',
      443: 'DOLLARDE',
      444: 'DOLLARFR',
      445: 'NOMINAL',
      446: 'EFFECT',
      447: 'CUMPRINC',
      448: 'CUMIPMT',
      449: 'EDATE',
      450: 'EOMONTH',
      451: 'YEARFRAC',
      452: 'COUPDAYBS',
      453: 'COUPDAYS',
      454: 'COUPDAYSNC',
      455: 'COUPNCD',
      456: 'COUPNUM',
      457: 'COUPPCD',
      458: 'DURATION',
      459: 'MDURATION',
      460: 'ODDLPRICE',
      461: 'ODDLYIELD',
      462: 'ODDFPRICE',
      463: 'ODDFYIELD',
      464: 'RANDBETWEEN',
      465: 'WEEKNUM',
      466: 'AMORDEGRC',
      467: 'AMORLINC',
      468: 'CONVERT',
      724: 'SHEETJS',
      469: 'ACCRINT',
      470: 'ACCRINTM',
      471: 'WORKDAY',
      472: 'NETWORKDAYS',
      473: 'GCD',
      474: 'MULTINOMIAL',
      475: 'LCM',
      476: 'FVSCHEDULE',
      477: 'CUBEKPIMEMBER',
      478: 'CUBESET',
      479: 'CUBESETCOUNT',
      480: 'IFERROR',
      481: 'COUNTIFS',
      482: 'SUMIFS',
      483: 'AVERAGEIF',
      484: 'AVERAGEIFS'
    },
    hy = {
      2: 1,
      3: 1,
      10: 0,
      15: 1,
      16: 1,
      17: 1,
      18: 1,
      19: 0,
      20: 1,
      21: 1,
      22: 1,
      23: 1,
      24: 1,
      25: 1,
      26: 1,
      27: 2,
      30: 2,
      31: 3,
      32: 1,
      33: 1,
      34: 0,
      35: 0,
      38: 1,
      39: 2,
      40: 3,
      41: 3,
      42: 3,
      43: 3,
      44: 3,
      45: 3,
      47: 3,
      48: 2,
      53: 1,
      61: 3,
      63: 0,
      65: 3,
      66: 3,
      67: 1,
      68: 1,
      69: 1,
      70: 1,
      71: 1,
      72: 1,
      73: 1,
      74: 0,
      75: 1,
      76: 1,
      77: 1,
      79: 2,
      80: 2,
      83: 1,
      85: 0,
      86: 1,
      89: 0,
      90: 1,
      94: 0,
      95: 0,
      97: 2,
      98: 1,
      99: 1,
      101: 3,
      102: 3,
      105: 1,
      106: 1,
      108: 2,
      111: 1,
      112: 1,
      113: 1,
      114: 1,
      117: 2,
      118: 1,
      119: 4,
      121: 1,
      126: 1,
      127: 1,
      128: 1,
      129: 1,
      130: 1,
      131: 1,
      133: 1,
      134: 1,
      135: 1,
      136: 2,
      137: 2,
      138: 2,
      140: 1,
      141: 1,
      142: 3,
      143: 4,
      144: 4,
      161: 1,
      162: 1,
      163: 1,
      164: 1,
      165: 2,
      172: 1,
      175: 2,
      176: 2,
      177: 3,
      178: 2,
      179: 1,
      184: 1,
      186: 1,
      189: 3,
      190: 1,
      195: 3,
      196: 3,
      197: 1,
      198: 1,
      199: 3,
      201: 1,
      207: 4,
      210: 3,
      211: 1,
      212: 2,
      213: 2,
      214: 1,
      215: 1,
      225: 0,
      229: 1,
      230: 1,
      231: 1,
      232: 1,
      233: 1,
      234: 1,
      235: 3,
      244: 1,
      247: 4,
      252: 2,
      257: 1,
      261: 1,
      271: 1,
      273: 4,
      274: 2,
      275: 2,
      276: 2,
      277: 3,
      278: 3,
      279: 1,
      280: 3,
      281: 3,
      282: 3,
      283: 1,
      284: 1,
      285: 2,
      286: 4,
      287: 3,
      288: 2,
      289: 4,
      290: 3,
      291: 3,
      292: 3,
      293: 4,
      294: 1,
      295: 3,
      296: 1,
      297: 3,
      298: 1,
      299: 2,
      300: 3,
      301: 3,
      302: 4,
      303: 2,
      304: 2,
      305: 2,
      306: 2,
      307: 2,
      308: 2,
      309: 3,
      310: 2,
      311: 2,
      312: 2,
      313: 2,
      314: 2,
      315: 2,
      316: 4,
      325: 2,
      326: 2,
      327: 2,
      328: 2,
      331: 2,
      332: 2,
      337: 2,
      342: 1,
      343: 1,
      346: 2,
      347: 1,
      350: 4,
      351: 3,
      352: 1,
      353: 2,
      360: 1,
      368: 1,
      369: 1,
      370: 1,
      371: 1,
      372: 1,
      373: 1,
      374: 1,
      375: 1,
      376: 1,
      377: 1,
      378: 1,
      382: 3,
      385: 1,
      392: 1,
      393: 1,
      396: 2,
      397: 2,
      398: 2,
      399: 1,
      400: 1,
      401: 1,
      402: 1,
      403: 1,
      404: 1,
      405: 1,
      406: 1,
      407: 1,
      408: 1,
      409: 1,
      410: 1,
      414: 4,
      415: 1,
      416: 1,
      417: 2,
      420: 1,
      421: 1,
      422: 2,
      424: 1,
      425: 2,
      426: 2,
      427: 2,
      428: 2,
      430: 3,
      438: 3,
      439: 3,
      440: 3,
      443: 2,
      444: 2,
      445: 2,
      446: 2,
      447: 6,
      448: 6,
      449: 2,
      450: 2,
      464: 2,
      468: 3,
      476: 2,
      479: 1,
      480: 2,
      65535: 0
    }
  function dy(e) {
    var t = 'of:=' + e.replace(X0, '$1[.$2$3$4$5]').replace(/\]:\[/g, ':')
    return t.replace(/;/g, '|').replace(/,/g, ';')
  }
  function py(e) {
    return e.replace(/\./, '!')
  }
  var Ya = typeof Map < 'u'
  function J0(e, t, r) {
    var n = 0,
      a = e.length
    if (r) {
      if (Ya ? r.has(t) : Object.prototype.hasOwnProperty.call(r, t)) {
        for (var i = Ya ? r.get(t) : r[t]; n < i.length; ++n)
          if (e[i[n]].t === t) return e.Count++, i[n]
      }
    } else for (; n < a; ++n) if (e[n].t === t) return e.Count++, n
    return (
      (e[a] = { t }),
      e.Count++,
      e.Unique++,
      r &&
        (Ya
          ? (r.has(t) || r.set(t, []), r.get(t).push(a))
          : (Object.prototype.hasOwnProperty.call(r, t) || (r[t] = []), r[t].push(a))),
      a
    )
  }
  function as(e, t) {
    var r = { min: e + 1, max: e + 1 },
      n = -1
    return (
      t.MDW && (Rr = t.MDW),
      t.width != null
        ? (r.customWidth = 1)
        : t.wpx != null
        ? (n = es(t.wpx))
        : t.wch != null && (n = t.wch),
      n > -1 ? ((r.width = V0(n)), (r.customWidth = 1)) : t.width != null && (r.width = t.width),
      t.hidden && (r.hidden = !0),
      t.level != null && (r.outlineLevel = r.level = t.level),
      r
    )
  }
  function Bu(e, t) {
    if (!!e) {
      var r = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3]
      t == 'xlml' && (r = [1, 1, 1, 1, 0.5, 0.5]),
        e.left == null && (e.left = r[0]),
        e.right == null && (e.right = r[1]),
        e.top == null && (e.top = r[2]),
        e.bottom == null && (e.bottom = r[3]),
        e.header == null && (e.header = r[4]),
        e.footer == null && (e.footer = r[5])
    }
  }
  function Xr(e, t, r) {
    var n = r.revssf[t.z != null ? t.z : 'General'],
      a = 60,
      i = e.length
    if (n == null && r.ssf) {
      for (; a < 392; ++a)
        if (r.ssf[a] == null) {
          O0(t.z, a), (r.ssf[a] = t.z), (r.revssf[t.z] = n = a)
          break
        }
    }
    for (a = 0; a != i; ++a) if (e[a].numFmtId === n) return a
    return (
      (e[i] = { numFmtId: n, fontId: 0, fillId: 0, borderId: 0, xfId: 0, applyNumberFormat: 1 }), i
    )
  }
  function xy(e, t, r) {
    if (e && e['!ref']) {
      var n = je(e['!ref'])
      if (n.e.c < n.s.c || n.e.r < n.s.r) throw new Error('Bad range (' + r + '): ' + e['!ref'])
    }
  }
  function my(e) {
    if (e.length === 0) return ''
    for (var t = '<mergeCells count="' + e.length + '">', r = 0; r != e.length; ++r)
      t += '<mergeCell ref="' + tt(e[r]) + '"/>'
    return t + '</mergeCells>'
  }
  function _y(e, t, r, n, a) {
    var i = !1,
      s = {},
      o = null
    if (n.bookType !== 'xlsx' && t.vbaraw) {
      var l = t.SheetNames[r]
      try {
        t.Workbook && (l = t.Workbook.Sheets[r].CodeName || l)
      } catch {}
      ;(i = !0), (s.codeName = Dr(Ne(l)))
    }
    if (e && e['!outline']) {
      var f = { summaryBelow: 1, summaryRight: 1 }
      e['!outline'].above && (f.summaryBelow = 0),
        e['!outline'].left && (f.summaryRight = 0),
        (o = (o || '') + Q('outlinePr', null, f))
    }
    ;(!i && !o) || (a[a.length] = Q('sheetPr', o, s))
  }
  var gy = ['objects', 'scenarios', 'selectLockedCells', 'selectUnlockedCells'],
    vy = [
      'formatColumns',
      'formatRows',
      'formatCells',
      'insertColumns',
      'insertRows',
      'insertHyperlinks',
      'deleteColumns',
      'deleteRows',
      'sort',
      'autoFilter',
      'pivotTables'
    ]
  function wy(e) {
    var t = { sheet: 1 }
    return (
      gy.forEach(function (r) {
        e[r] != null && e[r] && (t[r] = '1')
      }),
      vy.forEach(function (r) {
        e[r] != null && !e[r] && (t[r] = '0')
      }),
      e.password && (t.password = mu(e.password).toString(16).toUpperCase()),
      Q('sheetProtection', null, t)
    )
  }
  function Ty(e) {
    return Bu(e), Q('pageMargins', null, e)
  }
  function Ey(e, t) {
    for (var r = ['<cols>'], n, a = 0; a != t.length; ++a)
      !(n = t[a]) || (r[r.length] = Q('col', null, as(a, n)))
    return (r[r.length] = '</cols>'), r.join('')
  }
  function Sy(e, t, r, n) {
    var a = typeof e.ref == 'string' ? e.ref : tt(e.ref)
    r.Workbook || (r.Workbook = { Sheets: [] }), r.Workbook.Names || (r.Workbook.Names = [])
    var i = r.Workbook.Names,
      s = Wt(a)
    s.s.r == s.e.r && ((s.e.r = Wt(t['!ref']).e.r), (a = tt(s)))
    for (var o = 0; o < i.length; ++o) {
      var l = i[o]
      if (l.Name == '_xlnm._FilterDatabase' && l.Sheet == n) {
        l.Ref = "'" + r.SheetNames[n] + "'!" + a
        break
      }
    }
    return (
      o == i.length &&
        i.push({ Name: '_xlnm._FilterDatabase', Sheet: n, Ref: "'" + r.SheetNames[n] + "'!" + a }),
      Q('autoFilter', null, { ref: a })
    )
  }
  function yy(e, t, r, n) {
    var a = { workbookViewId: '0' }
    return (
      (((n || {}).Workbook || {}).Views || [])[0] &&
        (a.rightToLeft = n.Workbook.Views[0].RTL ? '1' : '0'),
      Q('sheetViews', Q('sheetView', null, a), {})
    )
  }
  function Ay(e, t, r, n) {
    if (
      (e.c && r['!comments'].push([t, e.c]),
      (e.v === void 0 && typeof e.f != 'string') || (e.t === 'z' && !e.f))
    )
      return ''
    var a = '',
      i = e.t,
      s = e.v
    if (e.t !== 'z')
      switch (e.t) {
        case 'b':
          a = e.v ? '1' : '0'
          break
        case 'n':
          a = '' + e.v
          break
        case 'e':
          a = Ua[e.v]
          break
        case 'd':
          n && n.cellDates
            ? (a = Ft(e.v, -1).toISOString())
            : ((e = Nt(e)), (e.t = 'n'), (a = '' + (e.v = Rt(Ft(e.v))))),
            typeof e.z > 'u' && (e.z = ze[14])
          break
        default:
          a = e.v
          break
      }
    var o = pt('v', Ne(a)),
      l = { r: t },
      f = Xr(n.cellXfs, e, n)
    switch ((f !== 0 && (l.s = f), e.t)) {
      case 'n':
        break
      case 'd':
        l.t = 'd'
        break
      case 'b':
        l.t = 'b'
        break
      case 'e':
        l.t = 'e'
        break
      case 'z':
        break
      default:
        if (e.v == null) {
          delete e.t
          break
        }
        if (e.v.length > 32767) throw new Error('Text length must not exceed 32767 characters')
        if (n && n.bookSST) {
          ;(o = pt('v', '' + J0(n.Strings, e.v, n.revStrings))), (l.t = 's')
          break
        }
        l.t = 'str'
        break
    }
    if ((e.t != i && ((e.t = i), (e.v = s)), typeof e.f == 'string' && e.f)) {
      var c = e.F && e.F.slice(0, t.length) == t ? { t: 'array', ref: e.F } : null
      o = Q('f', Ne(e.f), c) + (e.v != null ? o : '')
    }
    return e.l && r['!links'].push([t, e.l]), e.D && (l.cm = 1), Q('c', o, l)
  }
  function Oy(e, t, r, n) {
    var a = [],
      i = [],
      s = je(e['!ref']),
      o = '',
      l,
      f = '',
      c = [],
      u = 0,
      h = 0,
      p = e['!rows'],
      m = Array.isArray(e),
      d = { r: f },
      v,
      A = -1
    for (h = s.s.c; h <= s.e.c; ++h) c[h] = Et(h)
    for (u = s.s.r; u <= s.e.r; ++u) {
      for (i = [], f = xt(u), h = s.s.c; h <= s.e.c; ++h) {
        l = c[h] + f
        var F = m ? (e[u] || [])[h] : e[l]
        F !== void 0 && (o = Ay(F, l, e, t)) != null && i.push(o)
      }
      ;(i.length > 0 || (p && p[u])) &&
        ((d = { r: f }),
        p &&
          p[u] &&
          ((v = p[u]),
          v.hidden && (d.hidden = 1),
          (A = -1),
          v.hpx ? (A = ts(v.hpx)) : v.hpt && (A = v.hpt),
          A > -1 && ((d.ht = A), (d.customHeight = 1)),
          v.level && (d.outlineLevel = v.level)),
        (a[a.length] = Q('row', i.join(''), d)))
    }
    if (p)
      for (; u < p.length; ++u)
        p &&
          p[u] &&
          ((d = { r: u + 1 }),
          (v = p[u]),
          v.hidden && (d.hidden = 1),
          (A = -1),
          v.hpx ? (A = ts(v.hpx)) : v.hpt && (A = v.hpt),
          A > -1 && ((d.ht = A), (d.customHeight = 1)),
          v.level && (d.outlineLevel = v.level),
          (a[a.length] = Q('row', '', d)))
    return a.join('')
  }
  function Uu(e, t, r, n) {
    var a = [et, Q('worksheet', null, { xmlns: Un[0], 'xmlns:r': lt.r })],
      i = r.SheetNames[e],
      s = 0,
      o = '',
      l = r.Sheets[i]
    l == null && (l = {})
    var f = l['!ref'] || 'A1',
      c = je(f)
    if (c.e.c > 16383 || c.e.r > 1048575) {
      if (t.WTF) throw new Error('Range ' + f + ' exceeds format limit A1:XFD1048576')
      ;(c.e.c = Math.min(c.e.c, 16383)), (c.e.r = Math.min(c.e.c, 1048575)), (f = tt(c))
    }
    n || (n = {}), (l['!comments'] = [])
    var u = []
    _y(l, r, e, t, a),
      (a[a.length] = Q('dimension', null, { ref: f })),
      (a[a.length] = yy(l, t, e, r)),
      t.sheetFormat &&
        (a[a.length] = Q('sheetFormatPr', null, {
          defaultRowHeight: t.sheetFormat.defaultRowHeight || '16',
          baseColWidth: t.sheetFormat.baseColWidth || '10',
          outlineLevelRow: t.sheetFormat.outlineLevelRow || '7'
        })),
      l['!cols'] != null && l['!cols'].length > 0 && (a[a.length] = Ey(l, l['!cols'])),
      (a[(s = a.length)] = '<sheetData/>'),
      (l['!links'] = []),
      l['!ref'] != null && ((o = Oy(l, t)), o.length > 0 && (a[a.length] = o)),
      a.length > s + 1 && ((a[a.length] = '</sheetData>'), (a[s] = a[s].replace('/>', '>'))),
      l['!protect'] && (a[a.length] = wy(l['!protect'])),
      l['!autofilter'] != null && (a[a.length] = Sy(l['!autofilter'], l, r, e)),
      l['!merges'] != null && l['!merges'].length > 0 && (a[a.length] = my(l['!merges']))
    var h = -1,
      p,
      m = -1
    return (
      l['!links'].length > 0 &&
        ((a[a.length] = '<hyperlinks>'),
        l['!links'].forEach(function (d) {
          !d[1].Target ||
            ((p = { ref: d[0] }),
            d[1].Target.charAt(0) != '#' &&
              ((m = Ie(n, -1, Ne(d[1].Target).replace(/#.*$/, ''), De.HLINK)),
              (p['r:id'] = 'rId' + m)),
            (h = d[1].Target.indexOf('#')) > -1 && (p.location = Ne(d[1].Target.slice(h + 1))),
            d[1].Tooltip && (p.tooltip = Ne(d[1].Tooltip)),
            (a[a.length] = Q('hyperlink', null, p)))
        }),
        (a[a.length] = '</hyperlinks>')),
      delete l['!links'],
      l['!margins'] != null && (a[a.length] = Ty(l['!margins'])),
      (!t || t.ignoreEC || t.ignoreEC == null) &&
        (a[a.length] = pt(
          'ignoredErrors',
          Q('ignoredError', null, { numberStoredAsText: 1, sqref: f })
        )),
      u.length > 0 &&
        ((m = Ie(n, -1, '../drawings/drawing' + (e + 1) + '.xml', De.DRAW)),
        (a[a.length] = Q('drawing', null, { 'r:id': 'rId' + m })),
        (l['!drawing'] = u)),
      l['!comments'].length > 0 &&
        ((m = Ie(n, -1, '../drawings/vmlDrawing' + (e + 1) + '.vml', De.VML)),
        (a[a.length] = Q('legacyDrawing', null, { 'r:id': 'rId' + m })),
        (l['!legacy'] = m)),
      a.length > 1 && ((a[a.length] = '</worksheet>'), (a[1] = a[1].replace('/>', '>'))),
      a.join('')
    )
  }
  function Fy(e, t) {
    var r = {},
      n = e.l + t
    ;(r.r = e.read_shift(4)), (e.l += 4)
    var a = e.read_shift(2)
    e.l += 1
    var i = e.read_shift(1)
    return (
      (e.l = n),
      i & 7 && (r.level = i & 7),
      i & 16 && (r.hidden = !0),
      i & 32 && (r.hpt = a / 20),
      r
    )
  }
  function Cy(e, t, r) {
    var n = B(145),
      a = (r['!rows'] || [])[e] || {}
    n.write_shift(4, e), n.write_shift(4, 0)
    var i = 320
    a.hpx ? (i = ts(a.hpx) * 20) : a.hpt && (i = a.hpt * 20),
      n.write_shift(2, i),
      n.write_shift(1, 0)
    var s = 0
    a.level && (s |= a.level),
      a.hidden && (s |= 16),
      (a.hpx || a.hpt) && (s |= 32),
      n.write_shift(1, s),
      n.write_shift(1, 0)
    var o = 0,
      l = n.l
    n.l += 4
    for (var f = { r: e, c: 0 }, c = 0; c < 16; ++c)
      if (!(t.s.c > (c + 1) << 10 || t.e.c < c << 10)) {
        for (var u = -1, h = -1, p = c << 10; p < (c + 1) << 10; ++p) {
          f.c = p
          var m = Array.isArray(r) ? (r[f.r] || [])[f.c] : r[Pe(f)]
          m && (u < 0 && (u = p), (h = p))
        }
        u < 0 || (++o, n.write_shift(4, u), n.write_shift(4, h))
      }
    var d = n.l
    return (n.l = l), n.write_shift(4, o), (n.l = d), n.length > n.l ? n.slice(0, n.l) : n
  }
  function Dy(e, t, r, n) {
    var a = Cy(n, r, t)
    ;(a.length > 17 || (t['!rows'] || [])[n]) && Y(e, 0, a)
  }
  var ky = _n,
    Ry = Yn
  function Ny() {}
  function Py(e, t) {
    var r = {},
      n = e[e.l]
    return ++e.l, (r.above = !(n & 64)), (r.left = !(n & 128)), (e.l += 18), (r.name = $w(e)), r
  }
  function Iy(e, t, r) {
    r == null && (r = B(84 + 4 * e.length))
    var n = 192
    t && (t.above && (n &= -65), t.left && (n &= -129)), r.write_shift(1, n)
    for (var a = 1; a < 3; ++a) r.write_shift(1, 0)
    return (
      Xi({ auto: 1 }, r), r.write_shift(-4, -1), r.write_shift(-4, -1), Uc(e, r), r.slice(0, r.l)
    )
  }
  function My(e) {
    var t = zt(e)
    return [t]
  }
  function by(e, t, r) {
    return r == null && (r = B(8)), pn(t, r)
  }
  function Ly(e) {
    var t = xn(e)
    return [t]
  }
  function By(e, t, r) {
    return r == null && (r = B(4)), mn(t, r)
  }
  function Uy(e) {
    var t = zt(e),
      r = e.read_shift(1)
    return [t, r, 'b']
  }
  function Wy(e, t, r) {
    return r == null && (r = B(9)), pn(t, r), r.write_shift(1, e.v ? 1 : 0), r
  }
  function Hy(e) {
    var t = xn(e),
      r = e.read_shift(1)
    return [t, r, 'b']
  }
  function Yy(e, t, r) {
    return r == null && (r = B(5)), mn(t, r), r.write_shift(1, e.v ? 1 : 0), r
  }
  function $y(e) {
    var t = zt(e),
      r = e.read_shift(1)
    return [t, r, 'e']
  }
  function jy(e, t, r) {
    return r == null && (r = B(9)), pn(t, r), r.write_shift(1, e.v), r
  }
  function Vy(e) {
    var t = xn(e),
      r = e.read_shift(1)
    return [t, r, 'e']
  }
  function Gy(e, t, r) {
    return (
      r == null && (r = B(8)),
      mn(t, r),
      r.write_shift(1, e.v),
      r.write_shift(2, 0),
      r.write_shift(1, 0),
      r
    )
  }
  function zy(e) {
    var t = zt(e),
      r = e.read_shift(4)
    return [t, r, 's']
  }
  function Xy(e, t, r) {
    return r == null && (r = B(12)), pn(t, r), r.write_shift(4, t.v), r
  }
  function Ky(e) {
    var t = xn(e),
      r = e.read_shift(4)
    return [t, r, 's']
  }
  function qy(e, t, r) {
    return r == null && (r = B(8)), mn(t, r), r.write_shift(4, t.v), r
  }
  function Jy(e) {
    var t = zt(e),
      r = $n(e)
    return [t, r, 'n']
  }
  function Zy(e, t, r) {
    return r == null && (r = B(16)), pn(t, r), gn(e.v, r), r
  }
  function Qy(e) {
    var t = xn(e),
      r = $n(e)
    return [t, r, 'n']
  }
  function e4(e, t, r) {
    return r == null && (r = B(12)), mn(t, r), gn(e.v, r), r
  }
  function t4(e) {
    var t = zt(e),
      r = Wc(e)
    return [t, r, 'n']
  }
  function r4(e, t, r) {
    return r == null && (r = B(12)), pn(t, r), Hc(e.v, r), r
  }
  function n4(e) {
    var t = xn(e),
      r = Wc(e)
    return [t, r, 'n']
  }
  function a4(e, t, r) {
    return r == null && (r = B(8)), mn(t, r), Hc(e.v, r), r
  }
  function i4(e) {
    var t = zt(e),
      r = U0(e)
    return [t, r, 'is']
  }
  function s4(e) {
    var t = zt(e),
      r = St(e)
    return [t, r, 'str']
  }
  function o4(e, t, r) {
    return (
      r == null && (r = B(12 + 4 * e.v.length)),
      pn(t, r),
      ut(e.v, r),
      r.length > r.l ? r.slice(0, r.l) : r
    )
  }
  function f4(e) {
    var t = xn(e),
      r = St(e)
    return [t, r, 'str']
  }
  function l4(e, t, r) {
    return (
      r == null && (r = B(8 + 4 * e.v.length)),
      mn(t, r),
      ut(e.v, r),
      r.length > r.l ? r.slice(0, r.l) : r
    )
  }
  function c4(e, t, r) {
    var n = e.l + t,
      a = zt(e)
    a.r = r['!row']
    var i = e.read_shift(1),
      s = [a, i, 'b']
    if (r.cellFormula) {
      e.l += 2
      var o = ns(e, n - e.l, r)
      s[3] = zn(o, null, a, r.supbooks, r)
    } else e.l = n
    return s
  }
  function u4(e, t, r) {
    var n = e.l + t,
      a = zt(e)
    a.r = r['!row']
    var i = e.read_shift(1),
      s = [a, i, 'e']
    if (r.cellFormula) {
      e.l += 2
      var o = ns(e, n - e.l, r)
      s[3] = zn(o, null, a, r.supbooks, r)
    } else e.l = n
    return s
  }
  function h4(e, t, r) {
    var n = e.l + t,
      a = zt(e)
    a.r = r['!row']
    var i = $n(e),
      s = [a, i, 'n']
    if (r.cellFormula) {
      e.l += 2
      var o = ns(e, n - e.l, r)
      s[3] = zn(o, null, a, r.supbooks, r)
    } else e.l = n
    return s
  }
  function d4(e, t, r) {
    var n = e.l + t,
      a = zt(e)
    a.r = r['!row']
    var i = St(e),
      s = [a, i, 'str']
    if (r.cellFormula) {
      e.l += 2
      var o = ns(e, n - e.l, r)
      s[3] = zn(o, null, a, r.supbooks, r)
    } else e.l = n
    return s
  }
  var p4 = _n,
    x4 = Yn
  function m4(e, t) {
    return t == null && (t = B(4)), t.write_shift(4, e), t
  }
  function _4(e, t) {
    var r = e.l + t,
      n = _n(e),
      a = W0(e),
      i = St(e),
      s = St(e),
      o = St(e)
    e.l = r
    var l = { rfx: n, relId: a, loc: i, display: o }
    return s && (l.Tooltip = s), l
  }
  function g4(e, t) {
    var r = B(50 + 4 * (e[1].Target.length + (e[1].Tooltip || '').length))
    Yn({ s: ct(e[0]), e: ct(e[0]) }, r), Y0('rId' + t, r)
    var n = e[1].Target.indexOf('#'),
      a = n == -1 ? '' : e[1].Target.slice(n + 1)
    return ut(a || '', r), ut(e[1].Tooltip || '', r), ut('', r), r.slice(0, r.l)
  }
  function v4() {}
  function w4(e, t, r) {
    var n = e.l + t,
      a = Yc(e),
      i = e.read_shift(1),
      s = [a]
    if (((s[2] = i), r.cellFormula)) {
      var o = fy(e, n - e.l, r)
      s[1] = o
    } else e.l = n
    return s
  }
  function T4(e, t, r) {
    var n = e.l + t,
      a = _n(e),
      i = [a]
    if (r.cellFormula) {
      var s = cy(e, n - e.l, r)
      ;(i[1] = s), (e.l = n)
    } else e.l = n
    return i
  }
  function E4(e, t, r) {
    r == null && (r = B(18))
    var n = as(e, t)
    r.write_shift(-4, e),
      r.write_shift(-4, e),
      r.write_shift(4, (n.width || 10) * 256),
      r.write_shift(4, 0)
    var a = 0
    return (
      t.hidden && (a |= 1),
      typeof n.width == 'number' && (a |= 2),
      t.level && (a |= t.level << 8),
      r.write_shift(2, a),
      r
    )
  }
  var Wu = ['left', 'right', 'top', 'bottom', 'header', 'footer']
  function S4(e) {
    var t = {}
    return (
      Wu.forEach(function (r) {
        t[r] = $n(e)
      }),
      t
    )
  }
  function y4(e, t) {
    return (
      t == null && (t = B(6 * 8)),
      Bu(e),
      Wu.forEach(function (r) {
        gn(e[r], t)
      }),
      t
    )
  }
  function A4(e) {
    var t = e.read_shift(2)
    return (e.l += 28), { RTL: t & 32 }
  }
  function O4(e, t, r) {
    r == null && (r = B(30))
    var n = 924
    return (
      (((t || {}).Views || [])[0] || {}).RTL && (n |= 32),
      r.write_shift(2, n),
      r.write_shift(4, 0),
      r.write_shift(4, 0),
      r.write_shift(4, 0),
      r.write_shift(1, 0),
      r.write_shift(1, 0),
      r.write_shift(2, 0),
      r.write_shift(2, 100),
      r.write_shift(2, 0),
      r.write_shift(2, 0),
      r.write_shift(2, 0),
      r.write_shift(4, 0),
      r
    )
  }
  function F4(e) {
    var t = B(24)
    return t.write_shift(4, 4), t.write_shift(4, 1), Yn(e, t), t
  }
  function C4(e, t) {
    return (
      t == null && (t = B(16 * 4 + 2)),
      t.write_shift(2, e.password ? mu(e.password) : 0),
      t.write_shift(4, 1),
      [
        ['objects', !1],
        ['scenarios', !1],
        ['formatCells', !0],
        ['formatColumns', !0],
        ['formatRows', !0],
        ['insertColumns', !0],
        ['insertRows', !0],
        ['insertHyperlinks', !0],
        ['deleteColumns', !0],
        ['deleteRows', !0],
        ['selectLockedCells', !1],
        ['sort', !0],
        ['autoFilter', !0],
        ['pivotTables', !0],
        ['selectUnlockedCells', !1]
      ].forEach(function (r) {
        r[1]
          ? t.write_shift(4, e[r[0]] != null && !e[r[0]] ? 1 : 0)
          : t.write_shift(4, e[r[0]] != null && e[r[0]] ? 0 : 1)
      }),
      t
    )
  }
  function D4() {}
  function k4() {}
  function R4(e, t, r, n, a, i, s) {
    if (t.v === void 0) return !1
    var o = ''
    switch (t.t) {
      case 'b':
        o = t.v ? '1' : '0'
        break
      case 'd':
        ;(t = Nt(t)), (t.z = t.z || ze[14]), (t.v = Rt(Ft(t.v))), (t.t = 'n')
        break
      case 'n':
      case 'e':
        o = '' + t.v
        break
      default:
        o = t.v
        break
    }
    var l = { r, c: n }
    switch (
      ((l.s = Xr(a.cellXfs, t, a)),
      t.l && i['!links'].push([Pe(l), t.l]),
      t.c && i['!comments'].push([Pe(l), t.c]),
      t.t)
    ) {
      case 's':
      case 'str':
        return (
          a.bookSST
            ? ((o = J0(a.Strings, t.v, a.revStrings)),
              (l.t = 's'),
              (l.v = o),
              s ? Y(e, 18, qy(t, l)) : Y(e, 7, Xy(t, l)))
            : ((l.t = 'str'), s ? Y(e, 17, l4(t, l)) : Y(e, 6, o4(t, l))),
          !0
        )
      case 'n':
        return (
          t.v == (t.v | 0) && t.v > -1e3 && t.v < 1e3
            ? s
              ? Y(e, 13, a4(t, l))
              : Y(e, 2, r4(t, l))
            : s
            ? Y(e, 16, e4(t, l))
            : Y(e, 5, Zy(t, l)),
          !0
        )
      case 'b':
        return (l.t = 'b'), s ? Y(e, 15, Yy(t, l)) : Y(e, 4, Wy(t, l)), !0
      case 'e':
        return (l.t = 'e'), s ? Y(e, 14, Gy(t, l)) : Y(e, 3, jy(t, l)), !0
    }
    return s ? Y(e, 12, By(t, l)) : Y(e, 1, by(t, l)), !0
  }
  function N4(e, t, r, n) {
    var a = je(t['!ref'] || 'A1'),
      i,
      s = '',
      o = []
    Y(e, 145)
    var l = Array.isArray(t),
      f = a.e.r
    t['!rows'] && (f = Math.max(a.e.r, t['!rows'].length - 1))
    for (var c = a.s.r; c <= f; ++c) {
      ;(s = xt(c)), Dy(e, t, a, c)
      var u = !1
      if (c <= a.e.r)
        for (var h = a.s.c; h <= a.e.c; ++h) {
          c === a.s.r && (o[h] = Et(h)), (i = o[h] + s)
          var p = l ? (t[c] || [])[h] : t[i]
          if (!p) {
            u = !1
            continue
          }
          u = R4(e, p, c, h, n, t, u)
        }
    }
    Y(e, 146)
  }
  function P4(e, t) {
    !t ||
      !t['!merges'] ||
      (Y(e, 177, m4(t['!merges'].length)),
      t['!merges'].forEach(function (r) {
        Y(e, 176, x4(r))
      }),
      Y(e, 178))
  }
  function I4(e, t) {
    !t ||
      !t['!cols'] ||
      (Y(e, 390),
      t['!cols'].forEach(function (r, n) {
        r && Y(e, 60, E4(n, r))
      }),
      Y(e, 391))
  }
  function M4(e, t) {
    !t || !t['!ref'] || (Y(e, 648), Y(e, 649, F4(je(t['!ref']))), Y(e, 650))
  }
  function b4(e, t, r) {
    t['!links'].forEach(function (n) {
      if (!!n[1].Target) {
        var a = Ie(r, -1, n[1].Target.replace(/#.*$/, ''), De.HLINK)
        Y(e, 494, g4(n, a))
      }
    }),
      delete t['!links']
  }
  function L4(e, t, r, n) {
    if (t['!comments'].length > 0) {
      var a = Ie(n, -1, '../drawings/vmlDrawing' + (r + 1) + '.vml', De.VML)
      Y(e, 551, Y0('rId' + a)), (t['!legacy'] = a)
    }
  }
  function B4(e, t, r, n) {
    if (!!t['!autofilter']) {
      var a = t['!autofilter'],
        i = typeof a.ref == 'string' ? a.ref : tt(a.ref)
      r.Workbook || (r.Workbook = { Sheets: [] }), r.Workbook.Names || (r.Workbook.Names = [])
      var s = r.Workbook.Names,
        o = Wt(i)
      o.s.r == o.e.r && ((o.e.r = Wt(t['!ref']).e.r), (i = tt(o)))
      for (var l = 0; l < s.length; ++l) {
        var f = s[l]
        if (f.Name == '_xlnm._FilterDatabase' && f.Sheet == n) {
          f.Ref = "'" + r.SheetNames[n] + "'!" + i
          break
        }
      }
      l == s.length &&
        s.push({ Name: '_xlnm._FilterDatabase', Sheet: n, Ref: "'" + r.SheetNames[n] + "'!" + i }),
        Y(e, 161, Yn(je(i))),
        Y(e, 162)
    }
  }
  function U4(e, t, r) {
    Y(e, 133), Y(e, 137, O4(t, r)), Y(e, 138), Y(e, 134)
  }
  function W4(e, t) {
    !t['!protect'] || Y(e, 535, C4(t['!protect']))
  }
  function H4(e, t, r, n) {
    var a = Pt(),
      i = r.SheetNames[e],
      s = r.Sheets[i] || {},
      o = i
    try {
      r && r.Workbook && (o = r.Workbook.Sheets[e].CodeName || o)
    } catch {}
    var l = je(s['!ref'] || 'A1')
    if (l.e.c > 16383 || l.e.r > 1048575) {
      if (t.WTF)
        throw new Error('Range ' + (s['!ref'] || 'A1') + ' exceeds format limit A1:XFD1048576')
      ;(l.e.c = Math.min(l.e.c, 16383)), (l.e.r = Math.min(l.e.c, 1048575))
    }
    return (
      (s['!links'] = []),
      (s['!comments'] = []),
      Y(a, 129),
      (r.vbaraw || s['!outline']) && Y(a, 147, Iy(o, s['!outline'])),
      Y(a, 148, Ry(l)),
      U4(a, s, r.Workbook),
      I4(a, s),
      N4(a, s, e, t),
      W4(a, s),
      B4(a, s, r, e),
      P4(a, s),
      b4(a, s, n),
      s['!margins'] && Y(a, 476, y4(s['!margins'])),
      (!t || t.ignoreEC || t.ignoreEC == null) && M4(a, s),
      L4(a, s, e, n),
      Y(a, 130),
      a.end()
    )
  }
  function Y4(e, t) {
    e.l += 10
    var r = St(e)
    return { name: r }
  }
  var $4 = [
    ['allowRefreshQuery', !1, 'bool'],
    ['autoCompressPictures', !0, 'bool'],
    ['backupFile', !1, 'bool'],
    ['checkCompatibility', !1, 'bool'],
    ['CodeName', ''],
    ['date1904', !1, 'bool'],
    ['defaultThemeVersion', 0, 'int'],
    ['filterPrivacy', !1, 'bool'],
    ['hidePivotFieldList', !1, 'bool'],
    ['promptedSolutions', !1, 'bool'],
    ['publishItems', !1, 'bool'],
    ['refreshAllConnections', !1, 'bool'],
    ['saveExternalLinkValues', !0, 'bool'],
    ['showBorderUnselectedTables', !0, 'bool'],
    ['showInkAnnotation', !0, 'bool'],
    ['showObjects', 'all'],
    ['showPivotChartFilter', !1, 'bool'],
    ['updateLinks', 'userSet']
  ]
  function j4(e) {
    return !e.Workbook || !e.Workbook.WBProps
      ? 'false'
      : Tw(e.Workbook.WBProps.date1904)
      ? 'true'
      : 'false'
  }
  var V4 = '][*?/\\'.split('')
  function Hu(e, t) {
    if (e.length > 31) {
      if (t) return !1
      throw new Error('Sheet names cannot exceed 31 chars')
    }
    var r = !0
    return (
      V4.forEach(function (n) {
        if (e.indexOf(n) != -1) {
          if (!t) throw new Error('Sheet name cannot contain : \\ / ? * [ ]')
          r = !1
        }
      }),
      r
    )
  }
  function G4(e, t, r) {
    e.forEach(function (n, a) {
      Hu(n)
      for (var i = 0; i < a; ++i) if (n == e[i]) throw new Error('Duplicate Sheet Name: ' + n)
      if (r) {
        var s = (t && t[a] && t[a].CodeName) || n
        if (s.charCodeAt(0) == 95 && s.length > 22) throw new Error('Bad Code Name: Worksheet' + s)
      }
    })
  }
  function z4(e) {
    if (!e || !e.SheetNames || !e.Sheets) throw new Error('Invalid Workbook')
    if (!e.SheetNames.length) throw new Error('Workbook is empty')
    var t = (e.Workbook && e.Workbook.Sheets) || []
    G4(e.SheetNames, t, !!e.vbaraw)
    for (var r = 0; r < e.SheetNames.length; ++r) xy(e.Sheets[e.SheetNames[r]], e.SheetNames[r], r)
  }
  function Yu(e) {
    var t = [et]
    t[t.length] = Q('workbook', null, { xmlns: Un[0], 'xmlns:r': lt.r })
    var r = e.Workbook && (e.Workbook.Names || []).length > 0,
      n = { codeName: 'ThisWorkbook' }
    e.Workbook &&
      e.Workbook.WBProps &&
      ($4.forEach(function (o) {
        e.Workbook.WBProps[o[0]] != null &&
          e.Workbook.WBProps[o[0]] != o[1] &&
          (n[o[0]] = e.Workbook.WBProps[o[0]])
      }),
      e.Workbook.WBProps.CodeName &&
        ((n.codeName = e.Workbook.WBProps.CodeName), delete n.CodeName)),
      (t[t.length] = Q('workbookPr', null, n))
    var a = (e.Workbook && e.Workbook.Sheets) || [],
      i = 0
    if (a && a[0] && !!a[0].Hidden) {
      for (
        t[t.length] = '<bookViews>', i = 0;
        i != e.SheetNames.length && !(!a[i] || !a[i].Hidden);
        ++i
      );
      i == e.SheetNames.length && (i = 0),
        (t[t.length] = '<workbookView firstSheet="' + i + '" activeTab="' + i + '"/>'),
        (t[t.length] = '</bookViews>')
    }
    for (t[t.length] = '<sheets>', i = 0; i != e.SheetNames.length; ++i) {
      var s = { name: Ne(e.SheetNames[i].slice(0, 31)) }
      if (((s.sheetId = '' + (i + 1)), (s['r:id'] = 'rId' + (i + 1)), a[i]))
        switch (a[i].Hidden) {
          case 1:
            s.state = 'hidden'
            break
          case 2:
            s.state = 'veryHidden'
            break
        }
      t[t.length] = Q('sheet', null, s)
    }
    return (
      (t[t.length] = '</sheets>'),
      r &&
        ((t[t.length] = '<definedNames>'),
        e.Workbook &&
          e.Workbook.Names &&
          e.Workbook.Names.forEach(function (o) {
            var l = { name: o.Name }
            o.Comment && (l.comment = o.Comment),
              o.Sheet != null && (l.localSheetId = '' + o.Sheet),
              o.Hidden && (l.hidden = '1'),
              o.Ref && (t[t.length] = Q('definedName', Ne(o.Ref), l))
          }),
        (t[t.length] = '</definedNames>')),
      t.length > 2 && ((t[t.length] = '</workbook>'), (t[1] = t[1].replace('/>', '>'))),
      t.join('')
    )
  }
  function X4(e, t) {
    var r = {}
    return (
      (r.Hidden = e.read_shift(4)),
      (r.iTabID = e.read_shift(4)),
      (r.strRelID = H0(e)),
      (r.name = St(e)),
      r
    )
  }
  function K4(e, t) {
    return (
      t || (t = B(127)),
      t.write_shift(4, e.Hidden),
      t.write_shift(4, e.iTabID),
      Y0(e.strRelID, t),
      ut(e.name.slice(0, 31), t),
      t.length > t.l ? t.slice(0, t.l) : t
    )
  }
  function q4(e, t) {
    var r = {},
      n = e.read_shift(4)
    r.defaultThemeVersion = e.read_shift(4)
    var a = t > 8 ? St(e) : ''
    return (
      a.length > 0 && (r.CodeName = a),
      (r.autoCompressPictures = !!(n & 65536)),
      (r.backupFile = !!(n & 64)),
      (r.checkCompatibility = !!(n & 4096)),
      (r.date1904 = !!(n & 1)),
      (r.filterPrivacy = !!(n & 8)),
      (r.hidePivotFieldList = !!(n & 1024)),
      (r.promptedSolutions = !!(n & 16)),
      (r.publishItems = !!(n & 2048)),
      (r.refreshAllConnections = !!(n & 262144)),
      (r.saveExternalLinkValues = !!(n & 128)),
      (r.showBorderUnselectedTables = !!(n & 4)),
      (r.showInkAnnotation = !!(n & 32)),
      (r.showObjects = ['all', 'placeholders', 'none'][(n >> 13) & 3]),
      (r.showPivotChartFilter = !!(n & 32768)),
      (r.updateLinks = ['userSet', 'never', 'always'][(n >> 8) & 3]),
      r
    )
  }
  function J4(e, t) {
    t || (t = B(72))
    var r = 0
    return (
      e && e.filterPrivacy && (r |= 8),
      t.write_shift(4, r),
      t.write_shift(4, 0),
      Uc((e && e.CodeName) || 'ThisWorkbook', t),
      t.slice(0, t.l)
    )
  }
  function Z4(e, t, r) {
    var n = e.l + t
    ;(e.l += 4), (e.l += 1)
    var a = e.read_shift(4),
      i = jw(e),
      s = ly(e, 0, r),
      o = W0(e)
    e.l = n
    var l = { Name: i, Ptg: s }
    return a < 268435455 && (l.Sheet = a), o && (l.Comment = o), l
  }
  function Q4(e, t) {
    Y(e, 143)
    for (var r = 0; r != t.SheetNames.length; ++r) {
      var n =
          (t.Workbook &&
            t.Workbook.Sheets &&
            t.Workbook.Sheets[r] &&
            t.Workbook.Sheets[r].Hidden) ||
          0,
        a = { Hidden: n, iTabID: r + 1, strRelID: 'rId' + (r + 1), name: t.SheetNames[r] }
      Y(e, 156, K4(a))
    }
    Y(e, 144)
  }
  function eA(e, t) {
    t || (t = B(127))
    for (var r = 0; r != 4; ++r) t.write_shift(4, 0)
    return (
      ut('SheetJS', t),
      ut(Ii.version, t),
      ut(Ii.version, t),
      ut('7262', t),
      t.length > t.l ? t.slice(0, t.l) : t
    )
  }
  function tA(e, t) {
    t || (t = B(29)),
      t.write_shift(-4, 0),
      t.write_shift(-4, 460),
      t.write_shift(4, 28800),
      t.write_shift(4, 17600),
      t.write_shift(4, 500),
      t.write_shift(4, e),
      t.write_shift(4, e)
    var r = 120
    return t.write_shift(1, r), t.length > t.l ? t.slice(0, t.l) : t
  }
  function rA(e, t) {
    if (!(!t.Workbook || !t.Workbook.Sheets)) {
      for (var r = t.Workbook.Sheets, n = 0, a = -1, i = -1; n < r.length; ++n)
        !r[n] || (!r[n].Hidden && a == -1) ? (a = n) : r[n].Hidden == 1 && i == -1 && (i = n)
      i > a || (Y(e, 135), Y(e, 158, tA(a)), Y(e, 136))
    }
  }
  function nA(e, t) {
    var r = Pt()
    return (
      Y(r, 131),
      Y(r, 128, eA()),
      Y(r, 153, J4((e.Workbook && e.Workbook.WBProps) || null)),
      rA(r, e),
      Q4(r, e),
      Y(r, 132),
      r.end()
    )
  }
  function aA(e, t, r) {
    return (t.slice(-4) === '.bin' ? nA : Yu)(e)
  }
  function iA(e, t, r, n, a) {
    return (t.slice(-4) === '.bin' ? H4 : Uu)(e, r, n, a)
  }
  function sA(e, t, r) {
    return (t.slice(-4) === '.bin' ? yE : wu)(e, r)
  }
  function oA(e, t, r) {
    return (t.slice(-4) === '.bin' ? JT : xu)(e, r)
  }
  function fA(e, t, r) {
    return (t.slice(-4) === '.bin' ? WE : Ou)(e)
  }
  function lA(e) {
    return (e.slice(-4) === '.bin' ? NE : yu)()
  }
  function cA(e, t) {
    var r = []
    return (
      e.Props && r.push(sT(e.Props, t)), e.Custprops && r.push(oT(e.Props, e.Custprops)), r.join('')
    )
  }
  function uA() {
    return ''
  }
  function hA(e, t) {
    var r = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>']
    return (
      t.cellXfs.forEach(function (n, a) {
        var i = []
        i.push(Q('NumberFormat', null, { 'ss:Format': Ne(ze[n.numFmtId]) }))
        var s = { 'ss:ID': 's' + (21 + a) }
        r.push(Q('Style', i.join(''), s))
      }),
      Q('Styles', r.join(''))
    )
  }
  function $u(e) {
    return Q('NamedRange', null, {
      'ss:Name': e.Name,
      'ss:RefersTo': '=' + K0(e.Ref, { r: 0, c: 0 })
    })
  }
  function dA(e) {
    if (!((e || {}).Workbook || {}).Names) return ''
    for (var t = e.Workbook.Names, r = [], n = 0; n < t.length; ++n) {
      var a = t[n]
      a.Sheet == null && (a.Name.match(/^_xlfn\./) || r.push($u(a)))
    }
    return Q('Names', r.join(''))
  }
  function pA(e, t, r, n) {
    if (!e || !((n || {}).Workbook || {}).Names) return ''
    for (var a = n.Workbook.Names, i = [], s = 0; s < a.length; ++s) {
      var o = a[s]
      o.Sheet == r && (o.Name.match(/^_xlfn\./) || i.push($u(o)))
    }
    return i.join('')
  }
  function xA(e, t, r, n) {
    if (!e) return ''
    var a = []
    if (
      (e['!margins'] &&
        (a.push('<PageSetup>'),
        e['!margins'].header && a.push(Q('Header', null, { 'x:Margin': e['!margins'].header })),
        e['!margins'].footer && a.push(Q('Footer', null, { 'x:Margin': e['!margins'].footer })),
        a.push(
          Q('PageMargins', null, {
            'x:Bottom': e['!margins'].bottom || '0.75',
            'x:Left': e['!margins'].left || '0.7',
            'x:Right': e['!margins'].right || '0.7',
            'x:Top': e['!margins'].top || '0.75'
          })
        ),
        a.push('</PageSetup>')),
      n && n.Workbook && n.Workbook.Sheets && n.Workbook.Sheets[r])
    )
      if (n.Workbook.Sheets[r].Hidden)
        a.push(
          Q('Visible', n.Workbook.Sheets[r].Hidden == 1 ? 'SheetHidden' : 'SheetVeryHidden', {})
        )
      else {
        for (var i = 0; i < r && !(n.Workbook.Sheets[i] && !n.Workbook.Sheets[i].Hidden); ++i);
        i == r && a.push('<Selected/>')
      }
    return (
      ((((n || {}).Workbook || {}).Views || [])[0] || {}).RTL && a.push('<DisplayRightToLeft/>'),
      e['!protect'] &&
        (a.push(pt('ProtectContents', 'True')),
        e['!protect'].objects && a.push(pt('ProtectObjects', 'True')),
        e['!protect'].scenarios && a.push(pt('ProtectScenarios', 'True')),
        e['!protect'].selectLockedCells != null && !e['!protect'].selectLockedCells
          ? a.push(pt('EnableSelection', 'NoSelection'))
          : e['!protect'].selectUnlockedCells != null &&
            !e['!protect'].selectUnlockedCells &&
            a.push(pt('EnableSelection', 'UnlockedCells')),
        [
          ['formatCells', 'AllowFormatCells'],
          ['formatColumns', 'AllowSizeCols'],
          ['formatRows', 'AllowSizeRows'],
          ['insertColumns', 'AllowInsertCols'],
          ['insertRows', 'AllowInsertRows'],
          ['insertHyperlinks', 'AllowInsertHyperlinks'],
          ['deleteColumns', 'AllowDeleteCols'],
          ['deleteRows', 'AllowDeleteRows'],
          ['sort', 'AllowSort'],
          ['autoFilter', 'AllowFilter'],
          ['pivotTables', 'AllowUsePivotTables']
        ].forEach(function (s) {
          e['!protect'][s[0]] && a.push('<' + s[1] + '/>')
        })),
      a.length == 0 ? '' : Q('WorksheetOptions', a.join(''), { xmlns: Lt.x })
    )
  }
  function mA(e) {
    return e
      .map(function (t) {
        var r = ww(t.t || ''),
          n = Q('ss:Data', r, { xmlns: 'http://www.w3.org/TR/REC-html40' })
        return Q('Comment', n, { 'ss:Author': t.a })
      })
      .join('')
  }
  function _A(e, t, r, n, a, i, s) {
    if (!e || (e.v == null && e.f == null)) return ''
    var o = {}
    if ((e.f && (o['ss:Formula'] = '=' + Ne(K0(e.f, s))), e.F && e.F.slice(0, t.length) == t)) {
      var l = ct(e.F.slice(t.length + 1))
      o['ss:ArrayRange'] =
        'RC:R' +
        (l.r == s.r ? '' : '[' + (l.r - s.r) + ']') +
        'C' +
        (l.c == s.c ? '' : '[' + (l.c - s.c) + ']')
    }
    if (
      (e.l &&
        e.l.Target &&
        ((o['ss:HRef'] = Ne(e.l.Target)), e.l.Tooltip && (o['x:HRefScreenTip'] = Ne(e.l.Tooltip))),
      r['!merges'])
    )
      for (var f = r['!merges'], c = 0; c != f.length; ++c)
        f[c].s.c != s.c ||
          f[c].s.r != s.r ||
          (f[c].e.c > f[c].s.c && (o['ss:MergeAcross'] = f[c].e.c - f[c].s.c),
          f[c].e.r > f[c].s.r && (o['ss:MergeDown'] = f[c].e.r - f[c].s.r))
    var u = '',
      h = ''
    switch (e.t) {
      case 'z':
        if (!n.sheetStubs) return ''
        break
      case 'n':
        ;(u = 'Number'), (h = String(e.v))
        break
      case 'b':
        ;(u = 'Boolean'), (h = e.v ? '1' : '0')
        break
      case 'e':
        ;(u = 'Error'), (h = Ua[e.v])
        break
      case 'd':
        ;(u = 'DateTime'), (h = new Date(e.v).toISOString()), e.z == null && (e.z = e.z || ze[14])
        break
      case 's':
        ;(u = 'String'), (h = vw(e.v || ''))
        break
    }
    var p = Xr(n.cellXfs, e, n)
    ;(o['ss:StyleID'] = 's' + (21 + p)), (o['ss:Index'] = s.c + 1)
    var m = e.v != null ? h : '',
      d = e.t == 'z' ? '' : '<Data ss:Type="' + u + '">' + m + '</Data>'
    return (e.c || []).length > 0 && (d += mA(e.c)), Q('Cell', d, o)
  }
  function gA(e, t) {
    var r = '<Row ss:Index="' + (e + 1) + '"'
    return (
      t &&
        (t.hpt && !t.hpx && (t.hpx = vu(t.hpt)),
        t.hpx && (r += ' ss:AutoFitHeight="0" ss:Height="' + t.hpx + '"'),
        t.hidden && (r += ' ss:Hidden="1"')),
      r + '>'
    )
  }
  function vA(e, t, r, n) {
    if (!e['!ref']) return ''
    var a = je(e['!ref']),
      i = e['!merges'] || [],
      s = 0,
      o = []
    e['!cols'] &&
      e['!cols'].forEach(function (v, A) {
        G0(v)
        var F = !!v.width,
          C = as(A, v),
          L = { 'ss:Index': A + 1 }
        F && (L['ss:Width'] = Qi(C.width)),
          v.hidden && (L['ss:Hidden'] = '1'),
          o.push(Q('Column', null, L))
      })
    for (var l = Array.isArray(e), f = a.s.r; f <= a.e.r; ++f) {
      for (var c = [gA(f, (e['!rows'] || [])[f])], u = a.s.c; u <= a.e.c; ++u) {
        var h = !1
        for (s = 0; s != i.length; ++s)
          if (!(i[s].s.c > u) && !(i[s].s.r > f) && !(i[s].e.c < u) && !(i[s].e.r < f)) {
            ;(i[s].s.c != u || i[s].s.r != f) && (h = !0)
            break
          }
        if (!h) {
          var p = { r: f, c: u },
            m = Pe(p),
            d = l ? (e[f] || [])[u] : e[m]
          c.push(_A(d, m, e, t, r, n, p))
        }
      }
      c.push('</Row>'), c.length > 2 && o.push(c.join(''))
    }
    return o.join('')
  }
  function wA(e, t, r) {
    var n = [],
      a = r.SheetNames[e],
      i = r.Sheets[a],
      s = i ? pA(i, t, e, r) : ''
    return (
      s.length > 0 && n.push('<Names>' + s + '</Names>'),
      (s = i ? vA(i, t, e, r) : ''),
      s.length > 0 && n.push('<Table>' + s + '</Table>'),
      n.push(xA(i, t, e, r)),
      n.join('')
    )
  }
  function TA(e, t) {
    t || (t = {}),
      e.SSF || (e.SSF = Nt(ze)),
      e.SSF &&
        (Hi(),
        Da(e.SSF),
        (t.revssf = Yi(e.SSF)),
        (t.revssf[e.SSF[65535]] = 0),
        (t.ssf = e.SSF),
        (t.cellXfs = []),
        Xr(t.cellXfs, {}, { revssf: { General: 0 } }))
    var r = []
    r.push(cA(e, t)), r.push(uA()), r.push(''), r.push('')
    for (var n = 0; n < e.SheetNames.length; ++n)
      r.push(Q('Worksheet', wA(n, t, e), { 'ss:Name': Ne(e.SheetNames[n]) }))
    return (
      (r[2] = hA(e, t)),
      (r[3] = dA(e)),
      et +
        Q('Workbook', r.join(''), {
          xmlns: Lt.ss,
          'xmlns:o': Lt.o,
          'xmlns:x': Lt.x,
          'xmlns:ss': Lt.ss,
          'xmlns:dt': Lt.dt,
          'xmlns:html': Lt.html
        })
    )
  }
  var Z0 = {
    SI: 'e0859ff2f94f6810ab9108002b27b3d9',
    DSI: '02d5cdd59c2e1b10939708002b2cf9ae',
    UDI: '05d5cdd59c2e1b10939708002b2cf9ae'
  }
  function EA(e, t) {
    var r = [],
      n = [],
      a = [],
      i = 0,
      s,
      o = oc(jc, 'n'),
      l = oc(Vc, 'n')
    if (e.Props)
      for (s = dt(e.Props), i = 0; i < s.length; ++i)
        (Object.prototype.hasOwnProperty.call(o, s[i])
          ? r
          : Object.prototype.hasOwnProperty.call(l, s[i])
          ? n
          : a
        ).push([s[i], e.Props[s[i]]])
    if (e.Custprops)
      for (s = dt(e.Custprops), i = 0; i < s.length; ++i)
        Object.prototype.hasOwnProperty.call(e.Props || {}, s[i]) ||
          (Object.prototype.hasOwnProperty.call(o, s[i])
            ? r
            : Object.prototype.hasOwnProperty.call(l, s[i])
            ? n
            : a
          ).push([s[i], e.Custprops[s[i]]])
    var f = []
    for (i = 0; i < a.length; ++i)
      nu.indexOf(a[i][0]) > -1 || Zc.indexOf(a[i][0]) > -1 || (a[i][1] != null && f.push(a[i]))
    n.length && Ue.utils.cfb_add(t, '/SummaryInformation', iu(n, Z0.SI, l, Vc)),
      (r.length || f.length) &&
        Ue.utils.cfb_add(
          t,
          '/DocumentSummaryInformation',
          iu(r, Z0.DSI, o, jc, f.length ? f : null, Z0.UDI)
        )
  }
  function SA(e, t) {
    var r = t || {},
      n = Ue.utils.cfb_new({ root: 'R' }),
      a = '/Workbook'
    switch (r.bookType || 'xls') {
      case 'xls':
        r.bookType = 'biff8'
      case 'xla':
        r.bookType || (r.bookType = 'xla')
      case 'biff8':
        ;(a = '/Workbook'), (r.biff = 8)
        break
      case 'biff5':
        ;(a = '/Book'), (r.biff = 5)
        break
      default:
        throw new Error('invalid type ' + r.bookType + ' for XLS CFB')
    }
    return (
      Ue.utils.cfb_add(n, a, ju(e, r)),
      r.biff == 8 && (e.Props || e.Custprops) && EA(e, n),
      r.biff == 8 &&
        e.vbaraw &&
        HE(n, Ue.read(e.vbaraw, { type: typeof e.vbaraw == 'string' ? 'binary' : 'buffer' })),
      n
    )
  }
  var yA = {
    0: { f: Fy },
    1: { f: My },
    2: { f: t4 },
    3: { f: $y },
    4: { f: Uy },
    5: { f: Jy },
    6: { f: s4 },
    7: { f: zy },
    8: { f: d4 },
    9: { f: h4 },
    10: { f: c4 },
    11: { f: u4 },
    12: { f: Ly },
    13: { f: n4 },
    14: { f: Vy },
    15: { f: Hy },
    16: { f: Qy },
    17: { f: f4 },
    18: { f: Ky },
    19: { f: U0 },
    20: {},
    21: {},
    22: {},
    23: {},
    24: {},
    25: {},
    26: {},
    27: {},
    28: {},
    29: {},
    30: {},
    31: {},
    32: {},
    33: {},
    34: {},
    35: { T: 1 },
    36: { T: -1 },
    37: { T: 1 },
    38: { T: -1 },
    39: { f: Z4 },
    40: {},
    42: {},
    43: { f: sE },
    44: { f: aE },
    45: { f: lE },
    46: { f: uE },
    47: { f: cE },
    48: {},
    49: { f: Lw },
    50: {},
    51: { f: FE },
    52: { T: 1 },
    53: { T: -1 },
    54: { T: 1 },
    55: { T: -1 },
    56: { T: 1 },
    57: { T: -1 },
    58: {},
    59: {},
    60: { f: BT },
    62: { f: i4 },
    63: { f: PE },
    64: { f: D4 },
    65: {},
    66: {},
    67: {},
    68: {},
    69: {},
    70: {},
    128: {},
    129: { T: 1 },
    130: { T: -1 },
    131: { T: 1, f: ur, p: 0 },
    132: { T: -1 },
    133: { T: 1 },
    134: { T: -1 },
    135: { T: 1 },
    136: { T: -1 },
    137: { T: 1, f: A4 },
    138: { T: -1 },
    139: { T: 1 },
    140: { T: -1 },
    141: { T: 1 },
    142: { T: -1 },
    143: { T: 1 },
    144: { T: -1 },
    145: { T: 1 },
    146: { T: -1 },
    147: { f: Py },
    148: { f: ky, p: 16 },
    151: { f: v4 },
    152: {},
    153: { f: q4 },
    154: {},
    155: {},
    156: { f: X4 },
    157: {},
    158: {},
    159: { T: 1, f: XT },
    160: { T: -1 },
    161: { T: 1, f: _n },
    162: { T: -1 },
    163: { T: 1 },
    164: { T: -1 },
    165: { T: 1 },
    166: { T: -1 },
    167: {},
    168: {},
    169: {},
    170: {},
    171: {},
    172: { T: 1 },
    173: { T: -1 },
    174: {},
    175: {},
    176: { f: p4 },
    177: { T: 1 },
    178: { T: -1 },
    179: { T: 1 },
    180: { T: -1 },
    181: { T: 1 },
    182: { T: -1 },
    183: { T: 1 },
    184: { T: -1 },
    185: { T: 1 },
    186: { T: -1 },
    187: { T: 1 },
    188: { T: -1 },
    189: { T: 1 },
    190: { T: -1 },
    191: { T: 1 },
    192: { T: -1 },
    193: { T: 1 },
    194: { T: -1 },
    195: { T: 1 },
    196: { T: -1 },
    197: { T: 1 },
    198: { T: -1 },
    199: { T: 1 },
    200: { T: -1 },
    201: { T: 1 },
    202: { T: -1 },
    203: { T: 1 },
    204: { T: -1 },
    205: { T: 1 },
    206: { T: -1 },
    207: { T: 1 },
    208: { T: -1 },
    209: { T: 1 },
    210: { T: -1 },
    211: { T: 1 },
    212: { T: -1 },
    213: { T: 1 },
    214: { T: -1 },
    215: { T: 1 },
    216: { T: -1 },
    217: { T: 1 },
    218: { T: -1 },
    219: { T: 1 },
    220: { T: -1 },
    221: { T: 1 },
    222: { T: -1 },
    223: { T: 1 },
    224: { T: -1 },
    225: { T: 1 },
    226: { T: -1 },
    227: { T: 1 },
    228: { T: -1 },
    229: { T: 1 },
    230: { T: -1 },
    231: { T: 1 },
    232: { T: -1 },
    233: { T: 1 },
    234: { T: -1 },
    235: { T: 1 },
    236: { T: -1 },
    237: { T: 1 },
    238: { T: -1 },
    239: { T: 1 },
    240: { T: -1 },
    241: { T: 1 },
    242: { T: -1 },
    243: { T: 1 },
    244: { T: -1 },
    245: { T: 1 },
    246: { T: -1 },
    247: { T: 1 },
    248: { T: -1 },
    249: { T: 1 },
    250: { T: -1 },
    251: { T: 1 },
    252: { T: -1 },
    253: { T: 1 },
    254: { T: -1 },
    255: { T: 1 },
    256: { T: -1 },
    257: { T: 1 },
    258: { T: -1 },
    259: { T: 1 },
    260: { T: -1 },
    261: { T: 1 },
    262: { T: -1 },
    263: { T: 1 },
    264: { T: -1 },
    265: { T: 1 },
    266: { T: -1 },
    267: { T: 1 },
    268: { T: -1 },
    269: { T: 1 },
    270: { T: -1 },
    271: { T: 1 },
    272: { T: -1 },
    273: { T: 1 },
    274: { T: -1 },
    275: { T: 1 },
    276: { T: -1 },
    277: {},
    278: { T: 1 },
    279: { T: -1 },
    280: { T: 1 },
    281: { T: -1 },
    282: { T: 1 },
    283: { T: 1 },
    284: { T: -1 },
    285: { T: 1 },
    286: { T: -1 },
    287: { T: 1 },
    288: { T: -1 },
    289: { T: 1 },
    290: { T: -1 },
    291: { T: 1 },
    292: { T: -1 },
    293: { T: 1 },
    294: { T: -1 },
    295: { T: 1 },
    296: { T: -1 },
    297: { T: 1 },
    298: { T: -1 },
    299: { T: 1 },
    300: { T: -1 },
    301: { T: 1 },
    302: { T: -1 },
    303: { T: 1 },
    304: { T: -1 },
    305: { T: 1 },
    306: { T: -1 },
    307: { T: 1 },
    308: { T: -1 },
    309: { T: 1 },
    310: { T: -1 },
    311: { T: 1 },
    312: { T: -1 },
    313: { T: -1 },
    314: { T: 1 },
    315: { T: -1 },
    316: { T: 1 },
    317: { T: -1 },
    318: { T: 1 },
    319: { T: -1 },
    320: { T: 1 },
    321: { T: -1 },
    322: { T: 1 },
    323: { T: -1 },
    324: { T: 1 },
    325: { T: -1 },
    326: { T: 1 },
    327: { T: -1 },
    328: { T: 1 },
    329: { T: -1 },
    330: { T: 1 },
    331: { T: -1 },
    332: { T: 1 },
    333: { T: -1 },
    334: { T: 1 },
    335: { f: AE },
    336: { T: -1 },
    337: { f: kE, T: 1 },
    338: { T: -1 },
    339: { T: 1 },
    340: { T: -1 },
    341: { T: 1 },
    342: { T: -1 },
    343: { T: 1 },
    344: { T: -1 },
    345: { T: 1 },
    346: { T: -1 },
    347: { T: 1 },
    348: { T: -1 },
    349: { T: 1 },
    350: { T: -1 },
    351: {},
    352: {},
    353: { T: 1 },
    354: { T: -1 },
    355: { f: H0 },
    357: {},
    358: {},
    359: {},
    360: { T: 1 },
    361: {},
    362: { f: NT },
    363: {},
    364: {},
    366: {},
    367: {},
    368: {},
    369: {},
    370: {},
    371: {},
    372: { T: 1 },
    373: { T: -1 },
    374: { T: 1 },
    375: { T: -1 },
    376: { T: 1 },
    377: { T: -1 },
    378: { T: 1 },
    379: { T: -1 },
    380: { T: 1 },
    381: { T: -1 },
    382: { T: 1 },
    383: { T: -1 },
    384: { T: 1 },
    385: { T: -1 },
    386: { T: 1 },
    387: { T: -1 },
    388: { T: 1 },
    389: { T: -1 },
    390: { T: 1 },
    391: { T: -1 },
    392: { T: 1 },
    393: { T: -1 },
    394: { T: 1 },
    395: { T: -1 },
    396: {},
    397: {},
    398: {},
    399: {},
    400: {},
    401: { T: 1 },
    403: {},
    404: {},
    405: {},
    406: {},
    407: {},
    408: {},
    409: {},
    410: {},
    411: {},
    412: {},
    413: {},
    414: {},
    415: {},
    416: {},
    417: {},
    418: {},
    419: {},
    420: {},
    421: {},
    422: { T: 1 },
    423: { T: 1 },
    424: { T: -1 },
    425: { T: -1 },
    426: { f: w4 },
    427: { f: T4 },
    428: {},
    429: { T: 1 },
    430: { T: -1 },
    431: { T: 1 },
    432: { T: -1 },
    433: { T: 1 },
    434: { T: -1 },
    435: { T: 1 },
    436: { T: -1 },
    437: { T: 1 },
    438: { T: -1 },
    439: { T: 1 },
    440: { T: -1 },
    441: { T: 1 },
    442: { T: -1 },
    443: { T: 1 },
    444: { T: -1 },
    445: { T: 1 },
    446: { T: -1 },
    447: { T: 1 },
    448: { T: -1 },
    449: { T: 1 },
    450: { T: -1 },
    451: { T: 1 },
    452: { T: -1 },
    453: { T: 1 },
    454: { T: -1 },
    455: { T: 1 },
    456: { T: -1 },
    457: { T: 1 },
    458: { T: -1 },
    459: { T: 1 },
    460: { T: -1 },
    461: { T: 1 },
    462: { T: -1 },
    463: { T: 1 },
    464: { T: -1 },
    465: { T: 1 },
    466: { T: -1 },
    467: { T: 1 },
    468: { T: -1 },
    469: { T: 1 },
    470: { T: -1 },
    471: {},
    472: {},
    473: { T: 1 },
    474: { T: -1 },
    475: {},
    476: { f: S4 },
    477: {},
    478: {},
    479: { T: 1 },
    480: { T: -1 },
    481: { T: 1 },
    482: { T: -1 },
    483: { T: 1 },
    484: { T: -1 },
    485: { f: Ny },
    486: { T: 1 },
    487: { T: -1 },
    488: { T: 1 },
    489: { T: -1 },
    490: { T: 1 },
    491: { T: -1 },
    492: { T: 1 },
    493: { T: -1 },
    494: { f: _4 },
    495: { T: 1 },
    496: { T: -1 },
    497: { T: 1 },
    498: { T: -1 },
    499: {},
    500: { T: 1 },
    501: { T: -1 },
    502: { T: 1 },
    503: { T: -1 },
    504: {},
    505: { T: 1 },
    506: { T: -1 },
    507: {},
    508: { T: 1 },
    509: { T: -1 },
    510: { T: 1 },
    511: { T: -1 },
    512: {},
    513: {},
    514: { T: 1 },
    515: { T: -1 },
    516: { T: 1 },
    517: { T: -1 },
    518: { T: 1 },
    519: { T: -1 },
    520: { T: 1 },
    521: { T: -1 },
    522: {},
    523: {},
    524: {},
    525: {},
    526: {},
    527: {},
    528: { T: 1 },
    529: { T: -1 },
    530: { T: 1 },
    531: { T: -1 },
    532: { T: 1 },
    533: { T: -1 },
    534: {},
    535: {},
    536: {},
    537: {},
    538: { T: 1 },
    539: { T: -1 },
    540: { T: 1 },
    541: { T: -1 },
    542: { T: 1 },
    548: {},
    549: {},
    550: { f: H0 },
    551: {},
    552: {},
    553: {},
    554: { T: 1 },
    555: { T: -1 },
    556: { T: 1 },
    557: { T: -1 },
    558: { T: 1 },
    559: { T: -1 },
    560: { T: 1 },
    561: { T: -1 },
    562: {},
    564: {},
    565: { T: 1 },
    566: { T: -1 },
    569: { T: 1 },
    570: { T: -1 },
    572: {},
    573: { T: 1 },
    574: { T: -1 },
    577: {},
    578: {},
    579: {},
    580: {},
    581: {},
    582: {},
    583: {},
    584: {},
    585: {},
    586: {},
    587: {},
    588: { T: -1 },
    589: {},
    590: { T: 1 },
    591: { T: -1 },
    592: { T: 1 },
    593: { T: -1 },
    594: { T: 1 },
    595: { T: -1 },
    596: {},
    597: { T: 1 },
    598: { T: -1 },
    599: { T: 1 },
    600: { T: -1 },
    601: { T: 1 },
    602: { T: -1 },
    603: { T: 1 },
    604: { T: -1 },
    605: { T: 1 },
    606: { T: -1 },
    607: {},
    608: { T: 1 },
    609: { T: -1 },
    610: {},
    611: { T: 1 },
    612: { T: -1 },
    613: { T: 1 },
    614: { T: -1 },
    615: { T: 1 },
    616: { T: -1 },
    617: { T: 1 },
    618: { T: -1 },
    619: { T: 1 },
    620: { T: -1 },
    625: {},
    626: { T: 1 },
    627: { T: -1 },
    628: { T: 1 },
    629: { T: -1 },
    630: { T: 1 },
    631: { T: -1 },
    632: { f: BE },
    633: { T: 1 },
    634: { T: -1 },
    635: { T: 1, f: bE },
    636: { T: -1 },
    637: { f: Hw },
    638: { T: 1 },
    639: {},
    640: { T: -1 },
    641: { T: 1 },
    642: { T: -1 },
    643: { T: 1 },
    644: {},
    645: { T: -1 },
    646: { T: 1 },
    648: { T: 1 },
    649: {},
    650: { T: -1 },
    651: { f: Y4 },
    652: {},
    653: { T: 1 },
    654: { T: -1 },
    655: { T: 1 },
    656: { T: -1 },
    657: { T: 1 },
    658: { T: -1 },
    659: {},
    660: { T: 1 },
    661: {},
    662: { T: -1 },
    663: {},
    664: { T: 1 },
    665: {},
    666: { T: -1 },
    667: {},
    668: {},
    669: {},
    671: { T: 1 },
    672: { T: -1 },
    673: { T: 1 },
    674: { T: -1 },
    675: {},
    676: {},
    677: {},
    678: {},
    679: {},
    680: {},
    681: {},
    1024: {},
    1025: {},
    1026: { T: 1 },
    1027: { T: -1 },
    1028: { T: 1 },
    1029: { T: -1 },
    1030: {},
    1031: { T: 1 },
    1032: { T: -1 },
    1033: { T: 1 },
    1034: { T: -1 },
    1035: {},
    1036: {},
    1037: {},
    1038: { T: 1 },
    1039: { T: -1 },
    1040: {},
    1041: { T: 1 },
    1042: { T: -1 },
    1043: {},
    1044: {},
    1045: {},
    1046: { T: 1 },
    1047: { T: -1 },
    1048: { T: 1 },
    1049: { T: -1 },
    1050: {},
    1051: { T: 1 },
    1052: { T: 1 },
    1053: { f: k4 },
    1054: { T: 1 },
    1055: {},
    1056: { T: 1 },
    1057: { T: -1 },
    1058: { T: 1 },
    1059: { T: -1 },
    1061: {},
    1062: { T: 1 },
    1063: { T: -1 },
    1064: { T: 1 },
    1065: { T: -1 },
    1066: { T: 1 },
    1067: { T: -1 },
    1068: { T: 1 },
    1069: { T: -1 },
    1070: { T: 1 },
    1071: { T: -1 },
    1072: { T: 1 },
    1073: { T: -1 },
    1075: { T: 1 },
    1076: { T: -1 },
    1077: { T: 1 },
    1078: { T: -1 },
    1079: { T: 1 },
    1080: { T: -1 },
    1081: { T: 1 },
    1082: { T: -1 },
    1083: { T: 1 },
    1084: { T: -1 },
    1085: {},
    1086: { T: 1 },
    1087: { T: -1 },
    1088: { T: 1 },
    1089: { T: -1 },
    1090: { T: 1 },
    1091: { T: -1 },
    1092: { T: 1 },
    1093: { T: -1 },
    1094: { T: 1 },
    1095: { T: -1 },
    1096: {},
    1097: { T: 1 },
    1098: {},
    1099: { T: -1 },
    1100: { T: 1 },
    1101: { T: -1 },
    1102: {},
    1103: {},
    1104: {},
    1105: {},
    1111: {},
    1112: {},
    1113: { T: 1 },
    1114: { T: -1 },
    1115: { T: 1 },
    1116: { T: -1 },
    1117: {},
    1118: { T: 1 },
    1119: { T: -1 },
    1120: { T: 1 },
    1121: { T: -1 },
    1122: { T: 1 },
    1123: { T: -1 },
    1124: { T: 1 },
    1125: { T: -1 },
    1126: {},
    1128: { T: 1 },
    1129: { T: -1 },
    1130: {},
    1131: { T: 1 },
    1132: { T: -1 },
    1133: { T: 1 },
    1134: { T: -1 },
    1135: { T: 1 },
    1136: { T: -1 },
    1137: { T: 1 },
    1138: { T: -1 },
    1139: { T: 1 },
    1140: { T: -1 },
    1141: {},
    1142: { T: 1 },
    1143: { T: -1 },
    1144: { T: 1 },
    1145: { T: -1 },
    1146: {},
    1147: { T: 1 },
    1148: { T: -1 },
    1149: { T: 1 },
    1150: { T: -1 },
    1152: { T: 1 },
    1153: { T: -1 },
    1154: { T: -1 },
    1155: { T: -1 },
    1156: { T: -1 },
    1157: { T: 1 },
    1158: { T: -1 },
    1159: { T: 1 },
    1160: { T: -1 },
    1161: { T: 1 },
    1162: { T: -1 },
    1163: { T: 1 },
    1164: { T: -1 },
    1165: { T: 1 },
    1166: { T: -1 },
    1167: { T: 1 },
    1168: { T: -1 },
    1169: { T: 1 },
    1170: { T: -1 },
    1171: {},
    1172: { T: 1 },
    1173: { T: -1 },
    1177: {},
    1178: { T: 1 },
    1180: {},
    1181: {},
    1182: {},
    2048: { T: 1 },
    2049: { T: -1 },
    2050: {},
    2051: { T: 1 },
    2052: { T: -1 },
    2053: {},
    2054: {},
    2055: { T: 1 },
    2056: { T: -1 },
    2057: { T: 1 },
    2058: { T: -1 },
    2060: {},
    2067: {},
    2068: { T: 1 },
    2069: { T: -1 },
    2070: {},
    2071: {},
    2072: { T: 1 },
    2073: { T: -1 },
    2075: {},
    2076: {},
    2077: { T: 1 },
    2078: { T: -1 },
    2079: {},
    2080: { T: 1 },
    2081: { T: -1 },
    2082: {},
    2083: { T: 1 },
    2084: { T: -1 },
    2085: { T: 1 },
    2086: { T: -1 },
    2087: { T: 1 },
    2088: { T: -1 },
    2089: { T: 1 },
    2090: { T: -1 },
    2091: {},
    2092: {},
    2093: { T: 1 },
    2094: { T: -1 },
    2095: {},
    2096: { T: 1 },
    2097: { T: -1 },
    2098: { T: 1 },
    2099: { T: -1 },
    2100: { T: 1 },
    2101: { T: -1 },
    2102: {},
    2103: { T: 1 },
    2104: { T: -1 },
    2105: {},
    2106: { T: 1 },
    2107: { T: -1 },
    2108: {},
    2109: { T: 1 },
    2110: { T: -1 },
    2111: { T: 1 },
    2112: { T: -1 },
    2113: { T: 1 },
    2114: { T: -1 },
    2115: {},
    2116: {},
    2117: {},
    2118: { T: 1 },
    2119: { T: -1 },
    2120: {},
    2121: { T: 1 },
    2122: { T: -1 },
    2123: { T: 1 },
    2124: { T: -1 },
    2125: {},
    2126: { T: 1 },
    2127: { T: -1 },
    2128: {},
    2129: { T: 1 },
    2130: { T: -1 },
    2131: { T: 1 },
    2132: { T: -1 },
    2133: { T: 1 },
    2134: {},
    2135: {},
    2136: {},
    2137: { T: 1 },
    2138: { T: -1 },
    2139: { T: 1 },
    2140: { T: -1 },
    2141: {},
    3072: {},
    3073: {},
    4096: { T: 1 },
    4097: { T: -1 },
    5002: { T: 1 },
    5003: { T: -1 },
    5081: { T: 1 },
    5082: { T: -1 },
    5083: {},
    5084: { T: 1 },
    5085: { T: -1 },
    5086: { T: 1 },
    5087: { T: -1 },
    5088: {},
    5089: {},
    5090: {},
    5092: { T: 1 },
    5093: { T: -1 },
    5094: {},
    5095: { T: 1 },
    5096: { T: -1 },
    5097: {},
    5099: {},
    65535: { n: '' }
  }
  function ee(e, t, r, n) {
    var a = t
    if (!isNaN(a)) {
      var i = n || (r || []).length || 0,
        s = e.next(4)
      s.write_shift(2, a), s.write_shift(2, i), i > 0 && M0(r) && e.push(r)
    }
  }
  function AA(e, t, r, n) {
    var a = n || (r || []).length || 0
    if (a <= 8224) return ee(e, t, r, a)
    var i = t
    if (!isNaN(i)) {
      for (var s = r.parts || [], o = 0, l = 0, f = 0; f + (s[o] || 8224) <= 8224; )
        (f += s[o] || 8224), o++
      var c = e.next(4)
      for (c.write_shift(2, i), c.write_shift(2, f), e.push(r.slice(l, l + f)), l += f; l < a; ) {
        for (c = e.next(4), c.write_shift(2, 60), f = 0; f + (s[o] || 8224) <= 8224; )
          (f += s[o] || 8224), o++
        c.write_shift(2, f), e.push(r.slice(l, l + f)), (l += f)
      }
    }
  }
  function $a(e, t, r) {
    return (
      e || (e = B(7)),
      e.write_shift(2, t),
      e.write_shift(2, r),
      e.write_shift(2, 0),
      e.write_shift(1, 0),
      e
    )
  }
  function OA(e, t, r, n) {
    var a = B(9)
    return $a(a, e, t), ou(r, n || 'b', a), a
  }
  function FA(e, t, r) {
    var n = B(8 + 2 * r.length)
    return (
      $a(n, e, t),
      n.write_shift(1, r.length),
      n.write_shift(r.length, r, 'sbcs'),
      n.l < n.length ? n.slice(0, n.l) : n
    )
  }
  function CA(e, t, r, n) {
    if (t.v != null)
      switch (t.t) {
        case 'd':
        case 'n':
          var a = t.t == 'd' ? Rt(Ft(t.v)) : t.v
          a == (a | 0) && a >= 0 && a < 65536 ? ee(e, 2, YT(r, n, a)) : ee(e, 3, HT(r, n, a))
          return
        case 'b':
        case 'e':
          ee(e, 5, OA(r, n, t.v, t.t))
          return
        case 's':
        case 'str':
          ee(e, 4, FA(r, n, (t.v || '').slice(0, 255)))
          return
      }
    ee(e, 1, $a(null, r, n))
  }
  function DA(e, t, r, n) {
    var a = Array.isArray(t),
      i = je(t['!ref'] || 'A1'),
      s,
      o = '',
      l = []
    if (i.e.c > 255 || i.e.r > 16383) {
      if (n.WTF)
        throw new Error('Range ' + (t['!ref'] || 'A1') + ' exceeds format limit A1:IV16384')
      ;(i.e.c = Math.min(i.e.c, 255)), (i.e.r = Math.min(i.e.c, 16383)), (s = tt(i))
    }
    for (var f = i.s.r; f <= i.e.r; ++f) {
      o = xt(f)
      for (var c = i.s.c; c <= i.e.c; ++c) {
        f === i.s.r && (l[c] = Et(c)), (s = l[c] + o)
        var u = a ? (t[f] || [])[c] : t[s]
        !u || CA(e, u, f, c)
      }
    }
  }
  function kA(e, t) {
    for (var r = t || {}, n = Pt(), a = 0, i = 0; i < e.SheetNames.length; ++i)
      e.SheetNames[i] == r.sheet && (a = i)
    if (a == 0 && !!r.sheet && e.SheetNames[0] != r.sheet)
      throw new Error('Sheet not found: ' + r.sheet)
    return (
      ee(n, r.biff == 4 ? 1033 : r.biff == 3 ? 521 : 9, j0(e, 16, r)),
      DA(n, e.Sheets[e.SheetNames[a]], a, r),
      ee(n, 10),
      n.end()
    )
  }
  function RA(e, t, r) {
    ee(e, 49, yT({ sz: 12, color: { theme: 1 }, name: 'Arial', family: 2, scheme: 'minor' }, r))
  }
  function NA(e, t, r) {
    !t ||
      [
        [5, 8],
        [23, 26],
        [41, 44],
        [50, 392]
      ].forEach(function (n) {
        for (var a = n[0]; a <= n[1]; ++a) t[a] != null && ee(e, 1054, FT(a, t[a], r))
      })
  }
  function PA(e, t) {
    var r = B(19)
    r.write_shift(4, 2151),
      r.write_shift(4, 0),
      r.write_shift(4, 0),
      r.write_shift(2, 3),
      r.write_shift(1, 1),
      r.write_shift(4, 0),
      ee(e, 2151, r),
      (r = B(39)),
      r.write_shift(4, 2152),
      r.write_shift(4, 0),
      r.write_shift(4, 0),
      r.write_shift(2, 3),
      r.write_shift(1, 0),
      r.write_shift(4, 0),
      r.write_shift(2, 1),
      r.write_shift(4, 4),
      r.write_shift(2, 0),
      uu(je(t['!ref'] || 'A1'), r),
      r.write_shift(4, 4),
      ee(e, 2152, r)
  }
  function IA(e, t) {
    for (var r = 0; r < 16; ++r) ee(e, 224, hu({ numFmtId: 0, style: !0 }, 0, t))
    t.cellXfs.forEach(function (n) {
      ee(e, 224, hu(n, 0, t))
    })
  }
  function MA(e, t) {
    for (var r = 0; r < t['!links'].length; ++r) {
      var n = t['!links'][r]
      ee(e, 440, MT(n)), n[1].Tooltip && ee(e, 2048, bT(n))
    }
    delete t['!links']
  }
  function bA(e, t) {
    if (!!t) {
      var r = 0
      t.forEach(function (n, a) {
        ++r <= 256 && n && ee(e, 125, UT(as(a, n), a))
      })
    }
  }
  function LA(e, t, r, n, a) {
    var i = 16 + Xr(a.cellXfs, t, a)
    if (t.v == null && !t.bf) {
      ee(e, 513, wn(r, n, i))
      return
    }
    if (t.bf) ee(e, 6, oy(t, r, n, a, i))
    else
      switch (t.t) {
        case 'd':
        case 'n':
          var s = t.t == 'd' ? Rt(Ft(t.v)) : t.v
          ee(e, 515, RT(r, n, s, i))
          break
        case 'b':
        case 'e':
          ee(e, 517, kT(r, n, t.v, i, a, t.t))
          break
        case 's':
        case 'str':
          if (a.bookSST) {
            var o = J0(a.Strings, t.v, a.revStrings)
            ee(e, 253, AT(r, n, o, i))
          } else ee(e, 516, OT(r, n, (t.v || '').slice(0, 255), i, a))
          break
        default:
          ee(e, 513, wn(r, n, i))
      }
  }
  function BA(e, t, r) {
    var n = Pt(),
      a = r.SheetNames[e],
      i = r.Sheets[a] || {},
      s = (r || {}).Workbook || {},
      o = (s.Sheets || [])[e] || {},
      l = Array.isArray(i),
      f = t.biff == 8,
      c,
      u = '',
      h = [],
      p = je(i['!ref'] || 'A1'),
      m = f ? 65536 : 16384
    if (p.e.c > 255 || p.e.r >= m) {
      if (t.WTF)
        throw new Error('Range ' + (i['!ref'] || 'A1') + ' exceeds format limit A1:IV16384')
      ;(p.e.c = Math.min(p.e.c, 255)), (p.e.r = Math.min(p.e.c, m - 1))
    }
    ee(n, 2057, j0(r, 16, t)),
      ee(n, 13, Xt(1)),
      ee(n, 12, Xt(100)),
      ee(n, 15, Ct(!0)),
      ee(n, 17, Ct(!1)),
      ee(n, 16, gn(0.001)),
      ee(n, 95, Ct(!0)),
      ee(n, 42, Ct(!1)),
      ee(n, 43, Ct(!1)),
      ee(n, 130, Xt(1)),
      ee(n, 128, DT([0, 0])),
      ee(n, 131, Ct(!1)),
      ee(n, 132, Ct(!1)),
      f && bA(n, i['!cols']),
      ee(n, 512, CT(p, t)),
      f && (i['!links'] = [])
    for (var d = p.s.r; d <= p.e.r; ++d) {
      u = xt(d)
      for (var v = p.s.c; v <= p.e.c; ++v) {
        d === p.s.r && (h[v] = Et(v)), (c = h[v] + u)
        var A = l ? (i[d] || [])[v] : i[c]
        !A || (LA(n, A, d, v, t), f && A.l && i['!links'].push([c, A.l]))
      }
    }
    var F = o.CodeName || o.name || a
    return (
      f && ee(n, 574, ST((s.Views || [])[0])),
      f && (i['!merges'] || []).length && ee(n, 229, IT(i['!merges'])),
      f && MA(n, i),
      ee(n, 442, lu(F)),
      f && PA(n, i),
      ee(n, 10),
      n.end()
    )
  }
  function UA(e, t, r) {
    var n = Pt(),
      a = (e || {}).Workbook || {},
      i = a.Sheets || [],
      s = a.WBProps || {},
      o = r.biff == 8,
      l = r.biff == 5
    if (
      (ee(n, 2057, j0(e, 5, r)),
      r.bookType == 'xla' && ee(n, 135),
      ee(n, 225, o ? Xt(1200) : null),
      ee(n, 193, cT(2)),
      l && ee(n, 191),
      l && ee(n, 192),
      ee(n, 226),
      ee(n, 92, vT('SheetJS', r)),
      ee(n, 66, Xt(o ? 1200 : 1252)),
      o && ee(n, 353, Xt(0)),
      o && ee(n, 448),
      ee(n, 317, WT(e.SheetNames.length)),
      o && e.vbaraw && ee(n, 211),
      o && e.vbaraw)
    ) {
      var f = s.CodeName || 'ThisWorkbook'
      ee(n, 442, lu(f))
    }
    ee(n, 156, Xt(17)),
      ee(n, 25, Ct(!1)),
      ee(n, 18, Ct(!1)),
      ee(n, 19, Xt(0)),
      o && ee(n, 431, Ct(!1)),
      o && ee(n, 444, Xt(0)),
      ee(n, 61, ET()),
      ee(n, 64, Ct(!1)),
      ee(n, 141, Xt(0)),
      ee(n, 34, Ct(j4(e) == 'true')),
      ee(n, 14, Ct(!0)),
      o && ee(n, 439, Ct(!1)),
      ee(n, 218, Xt(0)),
      RA(n, e, r),
      NA(n, e.SSF, r),
      IA(n, r),
      o && ee(n, 352, Ct(!1))
    var c = n.end(),
      u = Pt()
    o && ee(u, 140, LT()), o && r.Strings && AA(u, 252, TT(r.Strings)), ee(u, 10)
    var h = u.end(),
      p = Pt(),
      m = 0,
      d = 0
    for (d = 0; d < e.SheetNames.length; ++d)
      m += (o ? 12 : 11) + (o ? 2 : 1) * e.SheetNames[d].length
    var v = c.length + m + h.length
    for (d = 0; d < e.SheetNames.length; ++d) {
      var A = i[d] || {}
      ee(p, 133, wT({ pos: v, hs: A.Hidden || 0, dt: 0, name: e.SheetNames[d] }, r)),
        (v += t[d].length)
    }
    var F = p.end()
    if (m != F.length) throw new Error('BS8 ' + m + ' != ' + F.length)
    var C = []
    return c.length && C.push(c), F.length && C.push(F), h.length && C.push(h), ht(C)
  }
  function WA(e, t) {
    var r = t || {},
      n = []
    e && !e.SSF && (e.SSF = Nt(ze)),
      e &&
        e.SSF &&
        (Hi(), Da(e.SSF), (r.revssf = Yi(e.SSF)), (r.revssf[e.SSF[65535]] = 0), (r.ssf = e.SSF)),
      (r.Strings = []),
      (r.Strings.Count = 0),
      (r.Strings.Unique = 0),
      to(r),
      (r.cellXfs = []),
      Xr(r.cellXfs, {}, { revssf: { General: 0 } }),
      e.Props || (e.Props = {})
    for (var a = 0; a < e.SheetNames.length; ++a) n[n.length] = BA(a, r, e)
    return n.unshift(UA(e, n, r)), ht(n)
  }
  function ju(e, t) {
    for (var r = 0; r <= e.SheetNames.length; ++r) {
      var n = e.Sheets[e.SheetNames[r]]
      if (!(!n || !n['!ref'])) {
        var a = Wt(n['!ref'])
        a.e.c > 255 &&
          typeof console < 'u' &&
          console.error &&
          console.error(
            "Worksheet '" + e.SheetNames[r] + "' extends beyond column IV (255).  Data may be lost."
          )
      }
    }
    var i = t || {}
    switch (i.biff || 2) {
      case 8:
      case 5:
        return WA(e, t)
      case 4:
      case 3:
      case 2:
        return kA(e, t)
    }
    throw new Error('invalid type ' + i.bookType + ' for BIFF')
  }
  function HA(e, t, r, n) {
    for (var a = e['!merges'] || [], i = [], s = t.s.c; s <= t.e.c; ++s) {
      for (var o = 0, l = 0, f = 0; f < a.length; ++f)
        if (!(a[f].s.r > r || a[f].s.c > s) && !(a[f].e.r < r || a[f].e.c < s)) {
          if (a[f].s.r < r || a[f].s.c < s) {
            o = -1
            break
          }
          ;(o = a[f].e.r - a[f].s.r + 1), (l = a[f].e.c - a[f].s.c + 1)
          break
        }
      if (!(o < 0)) {
        var c = Pe({ r, c: s }),
          u = n.dense ? (e[r] || [])[s] : e[c],
          h = (u && u.v != null && (u.h || gw(u.w || (kr(u), u.w) || ''))) || '',
          p = {}
        o > 1 && (p.rowspan = o),
          l > 1 && (p.colspan = l),
          n.editable
            ? (h = '<span contenteditable="true">' + h + '</span>')
            : u &&
              ((p['data-t'] = (u && u.t) || 'z'),
              u.v != null && (p['data-v'] = u.v),
              u.z != null && (p['data-z'] = u.z),
              u.l &&
                (u.l.Target || '#').charAt(0) != '#' &&
                (h = '<a href="' + u.l.Target + '">' + h + '</a>')),
          (p.id = (n.id || 'sjs') + '-' + c),
          i.push(Q('td', h, p))
      }
    }
    var m = '<tr>'
    return m + i.join('') + '</tr>'
  }
  var YA = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',
    $A = '</body></html>'
  function jA(e, t, r) {
    var n = []
    return n.join('') + '<table' + (r && r.id ? ' id="' + r.id + '"' : '') + '>'
  }
  function Vu(e, t) {
    var r = t || {},
      n = r.header != null ? r.header : YA,
      a = r.footer != null ? r.footer : $A,
      i = [n],
      s = Wt(e['!ref'])
    ;(r.dense = Array.isArray(e)), i.push(jA(e, s, r))
    for (var o = s.s.r; o <= s.e.r; ++o) i.push(HA(e, s, o, r))
    return i.push('</table>' + a), i.join('')
  }
  function Gu(e, t, r) {
    var n = r || {},
      a = 0,
      i = 0
    if (n.origin != null)
      if (typeof n.origin == 'number') a = n.origin
      else {
        var s = typeof n.origin == 'string' ? ct(n.origin) : n.origin
        ;(a = s.r), (i = s.c)
      }
    var o = t.getElementsByTagName('tr'),
      l = Math.min(n.sheetRows || 1e7, o.length),
      f = { s: { r: 0, c: 0 }, e: { r: a, c: i } }
    if (e['!ref']) {
      var c = Wt(e['!ref'])
      ;(f.s.r = Math.min(f.s.r, c.s.r)),
        (f.s.c = Math.min(f.s.c, c.s.c)),
        (f.e.r = Math.max(f.e.r, c.e.r)),
        (f.e.c = Math.max(f.e.c, c.e.c)),
        a == -1 && (f.e.r = a = c.e.r + 1)
    }
    var u = [],
      h = 0,
      p = e['!rows'] || (e['!rows'] = []),
      m = 0,
      d = 0,
      v = 0,
      A = 0,
      F = 0,
      C = 0
    for (e['!cols'] || (e['!cols'] = []); m < o.length && d < l; ++m) {
      var L = o[m]
      if (Xu(L)) {
        if (n.display) continue
        p[d] = { hidden: !0 }
      }
      var Z = L.children
      for (v = A = 0; v < Z.length; ++v) {
        var ie = Z[v]
        if (!(n.display && Xu(ie))) {
          var k = ie.hasAttribute('data-v')
              ? ie.getAttribute('data-v')
              : ie.hasAttribute('v')
              ? ie.getAttribute('v')
              : Ew(ie.innerHTML),
            H = ie.getAttribute('data-z') || ie.getAttribute('z')
          for (h = 0; h < u.length; ++h) {
            var b = u[h]
            b.s.c == A + i && b.s.r < d + a && d + a <= b.e.r && ((A = b.e.c + 1 - i), (h = -1))
          }
          ;(C = +ie.getAttribute('colspan') || 1),
            ((F = +ie.getAttribute('rowspan') || 1) > 1 || C > 1) &&
              u.push({
                s: { r: d + a, c: A + i },
                e: { r: d + a + (F || 1) - 1, c: A + i + (C || 1) - 1 }
              })
          var V = { t: 's', v: k },
            G = ie.getAttribute('data-t') || ie.getAttribute('t') || ''
          k != null &&
            (k.length == 0
              ? (V.t = G || 'z')
              : n.raw ||
                k.trim().length == 0 ||
                G == 's' ||
                (k === 'TRUE'
                  ? (V = { t: 'b', v: !0 })
                  : k === 'FALSE'
                  ? (V = { t: 'b', v: !1 })
                  : isNaN(Cr(k))
                  ? isNaN(Ra(k).getDate()) ||
                    ((V = { t: 'd', v: Ft(k) }),
                    n.cellDates || (V = { t: 'n', v: Rt(V.v) }),
                    (V.z = n.dateNF || ze[14]))
                  : (V = { t: 'n', v: Cr(k) }))),
            V.z === void 0 && H != null && (V.z = H)
          var z = '',
            ae = ie.getElementsByTagName('A')
          if (ae && ae.length)
            for (
              var Re = 0;
              Re < ae.length &&
              !(
                ae[Re].hasAttribute('href') &&
                ((z = ae[Re].getAttribute('href')), z.charAt(0) != '#')
              );
              ++Re
            );
          z && z.charAt(0) != '#' && (V.l = { Target: z }),
            n.dense
              ? (e[d + a] || (e[d + a] = []), (e[d + a][A + i] = V))
              : (e[Pe({ c: A + i, r: d + a })] = V),
            f.e.c < A + i && (f.e.c = A + i),
            (A += C)
        }
      }
      ++d
    }
    return (
      u.length && (e['!merges'] = (e['!merges'] || []).concat(u)),
      (f.e.r = Math.max(f.e.r, d - 1 + a)),
      (e['!ref'] = tt(f)),
      d >= l && (e['!fullref'] = tt(((f.e.r = o.length - m + d - 1 + a), f))),
      e
    )
  }
  function zu(e, t) {
    var r = t || {},
      n = r.dense ? [] : {}
    return Gu(n, e, t)
  }
  function VA(e, t) {
    return dn(zu(e, t), t)
  }
  function Xu(e) {
    var t = '',
      r = GA(e)
    return (
      r && (t = r(e).getPropertyValue('display')),
      t || (t = e.style && e.style.display),
      t === 'none'
    )
  }
  function GA(e) {
    return e.ownerDocument.defaultView &&
      typeof e.ownerDocument.defaultView.getComputedStyle == 'function'
      ? e.ownerDocument.defaultView.getComputedStyle
      : typeof getComputedStyle == 'function'
      ? getComputedStyle
      : null
  }
  var zA = (function () {
      var e = [
          '<office:master-styles>',
          '<style:master-page style:name="mp1" style:page-layout-name="mp1">',
          '<style:header/>',
          '<style:header-left style:display="false"/>',
          '<style:footer/>',
          '<style:footer-left style:display="false"/>',
          '</style:master-page>',
          '</office:master-styles>'
        ].join(''),
        t =
          '<office:document-styles ' +
          Pa({
            'xmlns:office': 'urn:oasis:names:tc:opendocument:xmlns:office:1.0',
            'xmlns:table': 'urn:oasis:names:tc:opendocument:xmlns:table:1.0',
            'xmlns:style': 'urn:oasis:names:tc:opendocument:xmlns:style:1.0',
            'xmlns:text': 'urn:oasis:names:tc:opendocument:xmlns:text:1.0',
            'xmlns:draw': 'urn:oasis:names:tc:opendocument:xmlns:drawing:1.0',
            'xmlns:fo': 'urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0',
            'xmlns:xlink': 'http://www.w3.org/1999/xlink',
            'xmlns:dc': 'http://purl.org/dc/elements/1.1/',
            'xmlns:number': 'urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0',
            'xmlns:svg': 'urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0',
            'xmlns:of': 'urn:oasis:names:tc:opendocument:xmlns:of:1.2',
            'office:version': '1.2'
          }) +
          '>' +
          e +
          '</office:document-styles>'
      return function () {
        return et + t
      }
    })(),
    Ku = (function () {
      var e = function (i) {
          return Ne(i)
            .replace(/  +/g, function (s) {
              return '<text:s text:c="' + s.length + '"/>'
            })
            .replace(/\t/g, '<text:tab/>')
            .replace(/\n/g, '</text:p><text:p>')
            .replace(/^ /, '<text:s/>')
            .replace(/ $/, '<text:s/>')
        },
        t = `          <table:table-cell />
`,
        r = `          <table:covered-table-cell/>
`,
        n = function (i, s, o) {
          var l = []
          l.push(
            '      <table:table table:name="' +
              Ne(s.SheetNames[o]) +
              `" table:style-name="ta1">
`
          )
          var f = 0,
            c = 0,
            u = Wt(i['!ref'] || 'A1'),
            h = i['!merges'] || [],
            p = 0,
            m = Array.isArray(i)
          if (i['!cols'])
            for (c = 0; c <= u.e.c; ++c)
              l.push(
                '        <table:table-column' +
                  (i['!cols'][c] ? ' table:style-name="co' + i['!cols'][c].ods + '"' : '') +
                  `></table:table-column>
`
              )
          var d = '',
            v = i['!rows'] || []
          for (f = 0; f < u.s.r; ++f)
            (d = v[f] ? ' table:style-name="ro' + v[f].ods + '"' : ''),
              l.push(
                '        <table:table-row' +
                  d +
                  `></table:table-row>
`
              )
          for (; f <= u.e.r; ++f) {
            for (
              d = v[f] ? ' table:style-name="ro' + v[f].ods + '"' : '',
                l.push(
                  '        <table:table-row' +
                    d +
                    `>
`
                ),
                c = 0;
              c < u.s.c;
              ++c
            )
              l.push(t)
            for (; c <= u.e.c; ++c) {
              var A = !1,
                F = {},
                C = ''
              for (p = 0; p != h.length; ++p)
                if (!(h[p].s.c > c) && !(h[p].s.r > f) && !(h[p].e.c < c) && !(h[p].e.r < f)) {
                  ;(h[p].s.c != c || h[p].s.r != f) && (A = !0),
                    (F['table:number-columns-spanned'] = h[p].e.c - h[p].s.c + 1),
                    (F['table:number-rows-spanned'] = h[p].e.r - h[p].s.r + 1)
                  break
                }
              if (A) {
                l.push(r)
                continue
              }
              var L = Pe({ r: f, c }),
                Z = m ? (i[f] || [])[c] : i[L]
              if (
                Z &&
                Z.f &&
                ((F['table:formula'] = Ne(dy(Z.f))), Z.F && Z.F.slice(0, L.length) == L)
              ) {
                var ie = Wt(Z.F)
                ;(F['table:number-matrix-columns-spanned'] = ie.e.c - ie.s.c + 1),
                  (F['table:number-matrix-rows-spanned'] = ie.e.r - ie.s.r + 1)
              }
              if (!Z) {
                l.push(t)
                continue
              }
              switch (Z.t) {
                case 'b':
                  ;(C = Z.v ? 'TRUE' : 'FALSE'),
                    (F['office:value-type'] = 'boolean'),
                    (F['office:boolean-value'] = Z.v ? 'true' : 'false')
                  break
                case 'n':
                  ;(C = Z.w || String(Z.v || 0)),
                    (F['office:value-type'] = 'float'),
                    (F['office:value'] = Z.v || 0)
                  break
                case 's':
                case 'str':
                  ;(C = Z.v == null ? '' : Z.v), (F['office:value-type'] = 'string')
                  break
                case 'd':
                  ;(C = Z.w || Ft(Z.v).toISOString()),
                    (F['office:value-type'] = 'date'),
                    (F['office:date-value'] = Ft(Z.v).toISOString()),
                    (F['table:style-name'] = 'ce1')
                  break
                default:
                  l.push(t)
                  continue
              }
              var k = e(C)
              if (Z.l && Z.l.Target) {
                var H = Z.l.Target
                ;(H = H.charAt(0) == '#' ? '#' + py(H.slice(1)) : H),
                  H.charAt(0) != '#' && !H.match(/^\w+:/) && (H = '../' + H),
                  (k = Q('text:a', k, { 'xlink:href': H.replace(/&/g, '&amp;') }))
              }
              l.push(
                '          ' +
                  Q('table:table-cell', Q('text:p', k, {}), F) +
                  `
`
              )
            }
            l.push(`        </table:table-row>
`)
          }
          return (
            l.push(`      </table:table>
`),
            l.join('')
          )
        },
        a = function (i, s) {
          i.push(` <office:automatic-styles>
`),
            i.push(`  <number:date-style style:name="N37" number:automatic-order="true">
`),
            i.push(`   <number:month number:style="long"/>
`),
            i.push(`   <number:text>/</number:text>
`),
            i.push(`   <number:day number:style="long"/>
`),
            i.push(`   <number:text>/</number:text>
`),
            i.push(`   <number:year/>
`),
            i.push(`  </number:date-style>
`)
          var o = 0
          s.SheetNames.map(function (f) {
            return s.Sheets[f]
          }).forEach(function (f) {
            if (!!f && f['!cols']) {
              for (var c = 0; c < f['!cols'].length; ++c)
                if (f['!cols'][c]) {
                  var u = f['!cols'][c]
                  if (u.width == null && u.wpx == null && u.wch == null) continue
                  G0(u), (u.ods = o)
                  var h = f['!cols'][c].wpx + 'px'
                  i.push(
                    '  <style:style style:name="co' +
                      o +
                      `" style:family="table-column">
`
                  ),
                    i.push(
                      '   <style:table-column-properties fo:break-before="auto" style:column-width="' +
                        h +
                        `"/>
`
                    ),
                    i.push(`  </style:style>
`),
                    ++o
                }
            }
          })
          var l = 0
          s.SheetNames.map(function (f) {
            return s.Sheets[f]
          }).forEach(function (f) {
            if (!!f && f['!rows']) {
              for (var c = 0; c < f['!rows'].length; ++c)
                if (f['!rows'][c]) {
                  f['!rows'][c].ods = l
                  var u = f['!rows'][c].hpx + 'px'
                  i.push(
                    '  <style:style style:name="ro' +
                      l +
                      `" style:family="table-row">
`
                  ),
                    i.push(
                      '   <style:table-row-properties fo:break-before="auto" style:row-height="' +
                        u +
                        `"/>
`
                    ),
                    i.push(`  </style:style>
`),
                    ++l
                }
            }
          }),
            i.push(`  <style:style style:name="ta1" style:family="table" style:master-page-name="mp1">
`),
            i.push(`   <style:table-properties table:display="true" style:writing-mode="lr-tb"/>
`),
            i.push(`  </style:style>
`),
            i.push(`  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>
`),
            i.push(` </office:automatic-styles>
`)
        }
      return function (s, o) {
        var l = [et],
          f = Pa({
            'xmlns:office': 'urn:oasis:names:tc:opendocument:xmlns:office:1.0',
            'xmlns:table': 'urn:oasis:names:tc:opendocument:xmlns:table:1.0',
            'xmlns:style': 'urn:oasis:names:tc:opendocument:xmlns:style:1.0',
            'xmlns:text': 'urn:oasis:names:tc:opendocument:xmlns:text:1.0',
            'xmlns:draw': 'urn:oasis:names:tc:opendocument:xmlns:drawing:1.0',
            'xmlns:fo': 'urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0',
            'xmlns:xlink': 'http://www.w3.org/1999/xlink',
            'xmlns:dc': 'http://purl.org/dc/elements/1.1/',
            'xmlns:meta': 'urn:oasis:names:tc:opendocument:xmlns:meta:1.0',
            'xmlns:number': 'urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0',
            'xmlns:presentation': 'urn:oasis:names:tc:opendocument:xmlns:presentation:1.0',
            'xmlns:svg': 'urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0',
            'xmlns:chart': 'urn:oasis:names:tc:opendocument:xmlns:chart:1.0',
            'xmlns:dr3d': 'urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0',
            'xmlns:math': 'http://www.w3.org/1998/Math/MathML',
            'xmlns:form': 'urn:oasis:names:tc:opendocument:xmlns:form:1.0',
            'xmlns:script': 'urn:oasis:names:tc:opendocument:xmlns:script:1.0',
            'xmlns:ooo': 'http://openoffice.org/2004/office',
            'xmlns:ooow': 'http://openoffice.org/2004/writer',
            'xmlns:oooc': 'http://openoffice.org/2004/calc',
            'xmlns:dom': 'http://www.w3.org/2001/xml-events',
            'xmlns:xforms': 'http://www.w3.org/2002/xforms',
            'xmlns:xsd': 'http://www.w3.org/2001/XMLSchema',
            'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
            'xmlns:sheet': 'urn:oasis:names:tc:opendocument:sh33tjs:1.0',
            'xmlns:rpt': 'http://openoffice.org/2005/report',
            'xmlns:of': 'urn:oasis:names:tc:opendocument:xmlns:of:1.2',
            'xmlns:xhtml': 'http://www.w3.org/1999/xhtml',
            'xmlns:grddl': 'http://www.w3.org/2003/g/data-view#',
            'xmlns:tableooo': 'http://openoffice.org/2009/table',
            'xmlns:drawooo': 'http://openoffice.org/2010/draw',
            'xmlns:calcext': 'urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0',
            'xmlns:loext': 'urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0',
            'xmlns:field': 'urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0',
            'xmlns:formx': 'urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0',
            'xmlns:css3t': 'http://www.w3.org/TR/css3-text/',
            'office:version': '1.2'
          }),
          c = Pa({
            'xmlns:config': 'urn:oasis:names:tc:opendocument:xmlns:config:1.0',
            'office:mimetype': 'application/vnd.oasis.opendocument.spreadsheet'
          })
        o.bookType == 'fods'
          ? (l.push(
              '<office:document' +
                f +
                c +
                `>
`
            ),
            l.push(qc().replace(/office:document-meta/g, 'office:meta')))
          : l.push(
              '<office:document-content' +
                f +
                `>
`
            ),
          a(l, s),
          l.push(`  <office:body>
`),
          l.push(`    <office:spreadsheet>
`)
        for (var u = 0; u != s.SheetNames.length; ++u) l.push(n(s.Sheets[s.SheetNames[u]], s, u))
        return (
          l.push(`    </office:spreadsheet>
`),
          l.push(`  </office:body>
`),
          o.bookType == 'fods'
            ? l.push('</office:document>')
            : l.push('</office:document-content>'),
          l.join('')
        )
      }
    })()
  function qu(e, t) {
    if (t.bookType == 'fods') return Ku(e, t)
    var r = D0(),
      n = '',
      a = [],
      i = []
    return (
      (n = 'mimetype'),
      ve(r, n, 'application/vnd.oasis.opendocument.spreadsheet'),
      (n = 'content.xml'),
      ve(r, n, Ku(e, t)),
      a.push([n, 'text/xml']),
      i.push([n, 'ContentFile']),
      (n = 'styles.xml'),
      ve(r, n, zA(e, t)),
      a.push([n, 'text/xml']),
      i.push([n, 'StylesFile']),
      (n = 'meta.xml'),
      ve(r, n, et + qc()),
      a.push([n, 'text/xml']),
      i.push([n, 'MetadataFile']),
      (n = 'manifest.rdf'),
      ve(r, n, iT(i)),
      a.push([n, 'application/rdf+xml']),
      (n = 'META-INF/manifest.xml'),
      ve(r, n, nT(a)),
      r
    )
  }
  /*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */ function is(e) {
    return new DataView(e.buffer, e.byteOffset, e.byteLength)
  }
  function XA(e) {
    return typeof TextEncoder < 'u' ? new TextEncoder().encode(e) : er(Dr(e))
  }
  function KA(e, t) {
    e: for (var r = 0; r <= e.length - t.length; ++r) {
      for (var n = 0; n < t.length; ++n) if (e[r + n] != t[n]) continue e
      return !0
    }
    return !1
  }
  function Kr(e) {
    var t = e.reduce(function (a, i) {
        return a + i.length
      }, 0),
      r = new Uint8Array(t),
      n = 0
    return (
      e.forEach(function (a) {
        r.set(a, n), (n += a.length)
      }),
      r
    )
  }
  function qA(e, t, r) {
    var n = Math.floor(r == 0 ? 0 : Math.LOG10E * Math.log(Math.abs(r))) + 6176 - 20,
      a = r / Math.pow(10, n - 6176)
    ;(e[t + 15] |= n >> 7), (e[t + 14] |= (n & 127) << 1)
    for (var i = 0; a >= 1; ++i, a /= 256) e[t + i] = a & 255
    e[t + 15] |= r >= 0 ? 0 : 128
  }
  function ja(e, t) {
    var r = t ? t[0] : 0,
      n = e[r] & 127
    e: if (
      e[r++] >= 128 &&
      ((n |= (e[r] & 127) << 7),
      e[r++] < 128 ||
        ((n |= (e[r] & 127) << 14), e[r++] < 128) ||
        ((n |= (e[r] & 127) << 21), e[r++] < 128) ||
        ((n += (e[r] & 127) * Math.pow(2, 28)), ++r, e[r++] < 128) ||
        ((n += (e[r] & 127) * Math.pow(2, 35)), ++r, e[r++] < 128) ||
        ((n += (e[r] & 127) * Math.pow(2, 42)), ++r, e[r++] < 128))
    )
      break e
    return t && (t[0] = r), n
  }
  function Me(e) {
    var t = new Uint8Array(7)
    t[0] = e & 127
    var r = 1
    e: if (e > 127) {
      if (
        ((t[r - 1] |= 128),
        (t[r] = (e >> 7) & 127),
        ++r,
        e <= 16383 ||
          ((t[r - 1] |= 128), (t[r] = (e >> 14) & 127), ++r, e <= 2097151) ||
          ((t[r - 1] |= 128), (t[r] = (e >> 21) & 127), ++r, e <= 268435455) ||
          ((t[r - 1] |= 128), (t[r] = ((e / 256) >>> 21) & 127), ++r, e <= 34359738367) ||
          ((t[r - 1] |= 128), (t[r] = ((e / 65536) >>> 21) & 127), ++r, e <= 4398046511103))
      )
        break e
      ;(t[r - 1] |= 128), (t[r] = ((e / 16777216) >>> 21) & 127), ++r
    }
    return t.slice(0, r)
  }
  function Xn(e) {
    var t = 0,
      r = e[t] & 127
    e: if (e[t++] >= 128) {
      if (
        ((r |= (e[t] & 127) << 7),
        e[t++] < 128 ||
          ((r |= (e[t] & 127) << 14), e[t++] < 128) ||
          ((r |= (e[t] & 127) << 21), e[t++] < 128))
      )
        break e
      r |= (e[t] & 127) << 28
    }
    return r
  }
  function at(e) {
    for (var t = [], r = [0]; r[0] < e.length; ) {
      var n = r[0],
        a = ja(e, r),
        i = a & 7
      a = Math.floor(a / 8)
      var s = 0,
        o
      if (a == 0) break
      switch (i) {
        case 0:
          {
            for (var l = r[0]; e[r[0]++] >= 128; );
            o = e.slice(l, r[0])
          }
          break
        case 5:
          ;(s = 4), (o = e.slice(r[0], r[0] + s)), (r[0] += s)
          break
        case 1:
          ;(s = 8), (o = e.slice(r[0], r[0] + s)), (r[0] += s)
          break
        case 2:
          ;(s = ja(e, r)), (o = e.slice(r[0], r[0] + s)), (r[0] += s)
          break
        case 3:
        case 4:
        default:
          throw new Error('PB Type '.concat(i, ' for Field ').concat(a, ' at offset ').concat(n))
      }
      var f = { data: o, type: i }
      t[a] == null ? (t[a] = [f]) : t[a].push(f)
    }
    return t
  }
  function _t(e) {
    var t = []
    return (
      e.forEach(function (r, n) {
        r.forEach(function (a) {
          !a.data ||
            (t.push(Me(n * 8 + a.type)), a.type == 2 && t.push(Me(a.data.length)), t.push(a.data))
        })
      }),
      Kr(t)
    )
  }
  function nr(e) {
    for (var t, r = [], n = [0]; n[0] < e.length; ) {
      var a = ja(e, n),
        i = at(e.slice(n[0], n[0] + a))
      n[0] += a
      var s = { id: Xn(i[1][0].data), messages: [] }
      i[2].forEach(function (o) {
        var l = at(o.data),
          f = Xn(l[3][0].data)
        s.messages.push({ meta: l, data: e.slice(n[0], n[0] + f) }), (n[0] += f)
      }),
        (t = i[3]) != null && t[0] && (s.merge = Xn(i[3][0].data) >>> 0 > 0),
        r.push(s)
    }
    return r
  }
  function Kn(e) {
    var t = []
    return (
      e.forEach(function (r) {
        var n = []
        ;(n[1] = [{ data: Me(r.id), type: 0 }]),
          (n[2] = []),
          r.merge != null && (n[3] = [{ data: Me(+!!r.merge), type: 0 }])
        var a = []
        r.messages.forEach(function (s) {
          a.push(s.data),
            (s.meta[3] = [{ type: 0, data: Me(s.data.length) }]),
            n[2].push({ data: _t(s.meta), type: 2 })
        })
        var i = _t(n)
        t.push(Me(i.length)),
          t.push(i),
          a.forEach(function (s) {
            return t.push(s)
          })
      }),
      Kr(t)
    )
  }
  function JA(e, t) {
    if (e != 0) throw new Error('Unexpected Snappy chunk type '.concat(e))
    for (var r = [0], n = ja(t, r), a = []; r[0] < t.length; ) {
      var i = t[r[0]] & 3
      if (i == 0) {
        var s = t[r[0]++] >> 2
        if (s < 60) ++s
        else {
          var o = s - 59
          ;(s = t[r[0]]),
            o > 1 && (s |= t[r[0] + 1] << 8),
            o > 2 && (s |= t[r[0] + 2] << 16),
            o > 3 && (s |= t[r[0] + 3] << 24),
            (s >>>= 0),
            s++,
            (r[0] += o)
        }
        a.push(t.slice(r[0], r[0] + s)), (r[0] += s)
        continue
      } else {
        var l = 0,
          f = 0
        if (
          (i == 1
            ? ((f = ((t[r[0]] >> 2) & 7) + 4), (l = (t[r[0]++] & 224) << 3), (l |= t[r[0]++]))
            : ((f = (t[r[0]++] >> 2) + 1),
              i == 2
                ? ((l = t[r[0]] | (t[r[0] + 1] << 8)), (r[0] += 2))
                : ((l =
                    (t[r[0]] | (t[r[0] + 1] << 8) | (t[r[0] + 2] << 16) | (t[r[0] + 3] << 24)) >>>
                    0),
                  (r[0] += 4))),
          (a = [Kr(a)]),
          l == 0)
        )
          throw new Error('Invalid offset 0')
        if (l > a[0].length) throw new Error('Invalid offset beyond length')
        if (f >= l)
          for (a.push(a[0].slice(-l)), f -= l; f >= a[a.length - 1].length; )
            a.push(a[a.length - 1]), (f -= a[a.length - 1].length)
        a.push(a[0].slice(-l, -l + f))
      }
    }
    var c = Kr(a)
    if (c.length != n) throw new Error('Unexpected length: '.concat(c.length, ' != ').concat(n))
    return c
  }
  function ar(e) {
    for (var t = [], r = 0; r < e.length; ) {
      var n = e[r++],
        a = e[r] | (e[r + 1] << 8) | (e[r + 2] << 16)
      ;(r += 3), t.push(JA(n, e.slice(r, r + a))), (r += a)
    }
    if (r !== e.length) throw new Error('data is not a valid framed stream!')
    return Kr(t)
  }
  function qn(e) {
    for (var t = [], r = 0; r < e.length; ) {
      var n = Math.min(e.length - r, 268435455),
        a = new Uint8Array(4)
      t.push(a)
      var i = Me(n),
        s = i.length
      t.push(i),
        n <= 60
          ? (s++, t.push(new Uint8Array([(n - 1) << 2])))
          : n <= 256
          ? ((s += 2), t.push(new Uint8Array([240, (n - 1) & 255])))
          : n <= 65536
          ? ((s += 3), t.push(new Uint8Array([244, (n - 1) & 255, ((n - 1) >> 8) & 255])))
          : n <= 16777216
          ? ((s += 4),
            t.push(
              new Uint8Array([248, (n - 1) & 255, ((n - 1) >> 8) & 255, ((n - 1) >> 16) & 255])
            ))
          : n <= 4294967296 &&
            ((s += 5),
            t.push(
              new Uint8Array([
                252,
                (n - 1) & 255,
                ((n - 1) >> 8) & 255,
                ((n - 1) >> 16) & 255,
                ((n - 1) >>> 24) & 255
              ])
            )),
        t.push(e.slice(r, r + n)),
        (s += n),
        (a[0] = 0),
        (a[1] = s & 255),
        (a[2] = (s >> 8) & 255),
        (a[3] = (s >> 16) & 255),
        (r += n)
    }
    return Kr(t)
  }
  function Q0(e, t) {
    var r = new Uint8Array(32),
      n = is(r),
      a = 12,
      i = 0
    switch (((r[0] = 5), e.t)) {
      case 'n':
        ;(r[1] = 2), qA(r, a, e.v), (i |= 1), (a += 16)
        break
      case 'b':
        ;(r[1] = 6), n.setFloat64(a, e.v ? 1 : 0, !0), (i |= 2), (a += 8)
        break
      case 's':
        if (t.indexOf(e.v) == -1) throw new Error('Value '.concat(e.v, ' missing from SST!'))
        ;(r[1] = 3), n.setUint32(a, t.indexOf(e.v), !0), (i |= 8), (a += 4)
        break
      default:
        throw 'unsupported cell type ' + e.t
    }
    return n.setUint32(8, i, !0), r.slice(0, a)
  }
  function eo(e, t) {
    var r = new Uint8Array(32),
      n = is(r),
      a = 12,
      i = 0
    switch (((r[0] = 3), e.t)) {
      case 'n':
        ;(r[2] = 2), n.setFloat64(a, e.v, !0), (i |= 32), (a += 8)
        break
      case 'b':
        ;(r[2] = 6), n.setFloat64(a, e.v ? 1 : 0, !0), (i |= 32), (a += 8)
        break
      case 's':
        if (t.indexOf(e.v) == -1) throw new Error('Value '.concat(e.v, ' missing from SST!'))
        ;(r[2] = 3), n.setUint32(a, t.indexOf(e.v), !0), (i |= 16), (a += 4)
        break
      default:
        throw 'unsupported cell type ' + e.t
    }
    return n.setUint32(4, i, !0), r.slice(0, a)
  }
  function qr(e) {
    var t = at(e)
    return ja(t[1][0].data)
  }
  function ZA(e, t, r) {
    var n, a, i, s
    if (!((n = e[6]) != null && n[0]) || !((a = e[7]) != null && a[0]))
      throw 'Mutation only works on post-BNC storages!'
    var o =
      (((s = (i = e[8]) == null ? void 0 : i[0]) == null ? void 0 : s.data) &&
        Xn(e[8][0].data) > 0) ||
      !1
    if (o) throw 'Math only works with normal offsets'
    for (
      var l = 0, f = is(e[7][0].data), c = 0, u = [], h = is(e[4][0].data), p = 0, m = [], d = 0;
      d < t.length;
      ++d
    ) {
      if (t[d] == null) {
        f.setUint16(d * 2, 65535, !0), h.setUint16(d * 2, 65535)
        continue
      }
      f.setUint16(d * 2, c, !0), h.setUint16(d * 2, p, !0)
      var v, A
      switch (typeof t[d]) {
        case 'string':
          ;(v = Q0({ t: 's', v: t[d] }, r)), (A = eo({ t: 's', v: t[d] }, r))
          break
        case 'number':
          ;(v = Q0({ t: 'n', v: t[d] }, r)), (A = eo({ t: 'n', v: t[d] }, r))
          break
        case 'boolean':
          ;(v = Q0({ t: 'b', v: t[d] }, r)), (A = eo({ t: 'b', v: t[d] }, r))
          break
        default:
          throw new Error('Unsupported value ' + t[d])
      }
      u.push(v), (c += v.length), m.push(A), (p += A.length), ++l
    }
    for (e[2][0].data = Me(l); d < e[7][0].data.length / 2; ++d)
      f.setUint16(d * 2, 65535, !0), h.setUint16(d * 2, 65535, !0)
    return (e[6][0].data = Kr(u)), (e[3][0].data = Kr(m)), l
  }
  function QA(e, t) {
    if (!t || !t.numbers) throw new Error('Must pass a `numbers` option -- check the README')
    var r = e.Sheets[e.SheetNames[0]]
    e.SheetNames.length > 1 &&
      console.error('The Numbers writer currently writes only the first table')
    var n = Wt(r['!ref'])
    n.s.r = n.s.c = 0
    var a = !1
    n.e.c > 9 && ((a = !0), (n.e.c = 9)),
      n.e.r > 49 && ((a = !0), (n.e.r = 49)),
      a && console.error('The Numbers writer is currently limited to '.concat(tt(n)))
    var i = os(r, { range: n, header: 1 }),
      s = ['~Sh33tJ5~']
    i.forEach(function (M) {
      return M.forEach(function (D) {
        typeof D == 'string' && s.push(D)
      })
    })
    var o = {},
      l = [],
      f = Ue.read(t.numbers, { type: 'base64' })
    f.FileIndex.map(function (M, D) {
      return [M, f.FullPaths[D]]
    }).forEach(function (M) {
      var D = M[0],
        O = M[1]
      if (D.type == 2 && !!D.name.match(/\.iwa/)) {
        var j = D.content,
          ue = ar(j),
          he = nr(ue)
        he.forEach(function (ce) {
          l.push(ce.id),
            (o[ce.id] = { deps: [], location: O, type: Xn(ce.messages[0].meta[1][0].data) })
        })
      }
    }),
      l.sort(function (M, D) {
        return M - D
      })
    var c = l
      .filter(function (M) {
        return M > 1
      })
      .map(function (M) {
        return [M, Me(M)]
      })
    f.FileIndex.map(function (M, D) {
      return [M, f.FullPaths[D]]
    }).forEach(function (M) {
      var D = M[0]
      if ((M[1], !!D.name.match(/\.iwa/))) {
        var O = nr(ar(D.content))
        O.forEach(function (j) {
          j.messages.forEach(function (ue) {
            c.forEach(function (he) {
              j.messages.some(function (ce) {
                return Xn(ce.meta[1][0].data) != 11006 && KA(ce.data, he[1])
              }) && o[he[0]].deps.push(j.id)
            })
          })
        })
      }
    })
    for (var u = Ue.find(f, o[1].location), h = nr(ar(u.content)), p, m = 0; m < h.length; ++m) {
      var d = h[m]
      d.id == 1 && (p = d)
    }
    var v = qr(at(p.messages[0].data)[1][0].data)
    for (u = Ue.find(f, o[v].location), h = nr(ar(u.content)), m = 0; m < h.length; ++m)
      (d = h[m]), d.id == v && (p = d)
    for (
      v = qr(at(p.messages[0].data)[2][0].data),
        u = Ue.find(f, o[v].location),
        h = nr(ar(u.content)),
        m = 0;
      m < h.length;
      ++m
    )
      (d = h[m]), d.id == v && (p = d)
    for (
      v = qr(at(p.messages[0].data)[2][0].data),
        u = Ue.find(f, o[v].location),
        h = nr(ar(u.content)),
        m = 0;
      m < h.length;
      ++m
    )
      (d = h[m]), d.id == v && (p = d)
    var A = at(p.messages[0].data)
    {
      ;(A[6][0].data = Me(n.e.r + 1)), (A[7][0].data = Me(n.e.c + 1))
      var F = qr(A[46][0].data),
        C = Ue.find(f, o[F].location),
        L = nr(ar(C.content))
      {
        for (var Z = 0; Z < L.length && L[Z].id != F; ++Z);
        if (L[Z].id != F) throw 'Bad ColumnRowUIDMapArchive'
        var ie = at(L[Z].messages[0].data)
        ;(ie[1] = []), (ie[2] = []), (ie[3] = [])
        for (var k = 0; k <= n.e.c; ++k) {
          var H = []
          ;(H[1] = H[2] = [{ type: 0, data: Me(k + 420690) }]),
            ie[1].push({ type: 2, data: _t(H) }),
            ie[2].push({ type: 0, data: Me(k) }),
            ie[3].push({ type: 0, data: Me(k) })
        }
        ;(ie[4] = []), (ie[5] = []), (ie[6] = [])
        for (var b = 0; b <= n.e.r; ++b)
          (H = []),
            (H[1] = H[2] = [{ type: 0, data: Me(b + 726270) }]),
            ie[4].push({ type: 2, data: _t(H) }),
            ie[5].push({ type: 0, data: Me(b) }),
            ie[6].push({ type: 0, data: Me(b) })
        L[Z].messages[0].data = _t(ie)
      }
      ;(C.content = qn(Kn(L))), (C.size = C.content.length), delete A[46]
      var V = at(A[4][0].data)
      {
        V[7][0].data = Me(n.e.r + 1)
        var G = at(V[1][0].data),
          z = qr(G[2][0].data)
        ;(C = Ue.find(f, o[z].location)), (L = nr(ar(C.content)))
        {
          if (L[0].id != z) throw 'Bad HeaderStorageBucket'
          var ae = at(L[0].messages[0].data)
          for (b = 0; b < i.length; ++b) {
            var Re = at(ae[2][0].data)
            ;(Re[1][0].data = Me(b)),
              (Re[4][0].data = Me(i[b].length)),
              (ae[2][b] = { type: ae[2][0].type, data: _t(Re) })
          }
          L[0].messages[0].data = _t(ae)
        }
        ;(C.content = qn(Kn(L))), (C.size = C.content.length)
        var me = qr(V[2][0].data)
        ;(C = Ue.find(f, o[me].location)), (L = nr(ar(C.content)))
        {
          if (L[0].id != me) throw 'Bad HeaderStorageBucket'
          for (ae = at(L[0].messages[0].data), k = 0; k <= n.e.c; ++k)
            (Re = at(ae[2][0].data)),
              (Re[1][0].data = Me(k)),
              (Re[4][0].data = Me(n.e.r + 1)),
              (ae[2][k] = { type: ae[2][0].type, data: _t(Re) })
          L[0].messages[0].data = _t(ae)
        }
        ;(C.content = qn(Kn(L))), (C.size = C.content.length)
        var st = qr(V[4][0].data)
        ;(function () {
          for (
            var M = Ue.find(f, o[st].location), D = nr(ar(M.content)), O, j = 0;
            j < D.length;
            ++j
          ) {
            var ue = D[j]
            ue.id == st && (O = ue)
          }
          var he = at(O.messages[0].data)
          {
            he[3] = []
            var ce = []
            s.forEach(function (Te, gt) {
              ;(ce[1] = [{ type: 0, data: Me(gt) }]),
                (ce[2] = [{ type: 0, data: Me(1) }]),
                (ce[3] = [{ type: 2, data: XA(Te) }]),
                he[3].push({ type: 2, data: _t(ce) })
            })
          }
          O.messages[0].data = _t(he)
          var ne = Kn(D),
            be = qn(ne)
          ;(M.content = be), (M.size = M.content.length)
        })()
        var te = at(V[3][0].data)
        {
          var Se = te[1][0]
          delete te[2]
          var ye = at(Se.data)
          {
            var ot = qr(ye[2][0].data)
            ;(function () {
              for (
                var M = Ue.find(f, o[ot].location), D = nr(ar(M.content)), O, j = 0;
                j < D.length;
                ++j
              ) {
                var ue = D[j]
                ue.id == ot && (O = ue)
              }
              var he = at(O.messages[0].data)
              {
                delete he[6], delete te[7]
                var ce = new Uint8Array(he[5][0].data)
                he[5] = []
                for (var ne = 0, be = 0; be <= n.e.r; ++be) {
                  var Te = at(ce)
                  ;(ne += ZA(Te, i[be], s)),
                    (Te[1][0].data = Me(be)),
                    he[5].push({ data: _t(Te), type: 2 })
                }
                ;(he[1] = [{ type: 0, data: Me(n.e.c + 1) }]),
                  (he[2] = [{ type: 0, data: Me(n.e.r + 1) }]),
                  (he[3] = [{ type: 0, data: Me(ne) }]),
                  (he[4] = [{ type: 0, data: Me(n.e.r + 1) }])
              }
              O.messages[0].data = _t(he)
              var gt = Kn(D),
                Oe = qn(gt)
              ;(M.content = Oe), (M.size = M.content.length)
            })()
          }
          Se.data = _t(ye)
        }
        V[3][0].data = _t(te)
      }
      A[4][0].data = _t(V)
    }
    p.messages[0].data = _t(A)
    var ft = Kn(h),
      y = qn(ft)
    return (u.content = y), (u.size = u.content.length), f
  }
  function e3(e) {
    return function (r) {
      for (var n = 0; n != e.length; ++n) {
        var a = e[n]
        r[a[0]] === void 0 && (r[a[0]] = a[1]), a[2] === 'n' && (r[a[0]] = Number(r[a[0]]))
      }
    }
  }
  function to(e) {
    e3([
      ['cellDates', !1],
      ['bookSST', !1],
      ['bookType', 'xlsx'],
      ['compression', !1],
      ['WTF', !1]
    ])(e)
  }
  function t3(e, t) {
    return t.bookType == 'ods'
      ? qu(e, t)
      : t.bookType == 'numbers'
      ? QA(e, t)
      : t.bookType == 'xlsb'
      ? r3(e, t)
      : n3(e, t)
  }
  function r3(e, t) {
    ;(Gn = 1024),
      e && !e.SSF && (e.SSF = Nt(ze)),
      e &&
        e.SSF &&
        (Hi(), Da(e.SSF), (t.revssf = Yi(e.SSF)), (t.revssf[e.SSF[65535]] = 0), (t.ssf = e.SSF)),
      (t.rels = {}),
      (t.wbrels = {}),
      (t.Strings = []),
      (t.Strings.Count = 0),
      (t.Strings.Unique = 0),
      Ya
        ? (t.revStrings = new Map())
        : ((t.revStrings = {}), (t.revStrings.foo = []), delete t.revStrings.foo)
    var r = t.bookType == 'xlsb' ? 'bin' : 'xml',
      n = Fu.indexOf(t.bookType) > -1,
      a = Gc()
    to((t = t || {}))
    var i = D0(),
      s = '',
      o = 0
    if (
      ((t.cellXfs = []),
      Xr(t.cellXfs, {}, { revssf: { General: 0 } }),
      e.Props || (e.Props = {}),
      (s = 'docProps/core.xml'),
      ve(i, s, Jc(e.Props, t)),
      a.coreprops.push(s),
      Ie(t.rels, 2, s, De.CORE_PROPS),
      (s = 'docProps/app.xml'),
      !(e.Props && e.Props.SheetNames))
    )
      if (!e.Workbook || !e.Workbook.Sheets) e.Props.SheetNames = e.SheetNames
      else {
        for (var l = [], f = 0; f < e.SheetNames.length; ++f)
          (e.Workbook.Sheets[f] || {}).Hidden != 2 && l.push(e.SheetNames[f])
        e.Props.SheetNames = l
      }
    for (
      e.Props.Worksheets = e.Props.SheetNames.length,
        ve(i, s, Qc(e.Props)),
        a.extprops.push(s),
        Ie(t.rels, 3, s, De.EXT_PROPS),
        e.Custprops !== e.Props &&
          dt(e.Custprops || {}).length > 0 &&
          ((s = 'docProps/custom.xml'),
          ve(i, s, eu(e.Custprops)),
          a.custprops.push(s),
          Ie(t.rels, 4, s, De.CUST_PROPS)),
        o = 1;
      o <= e.SheetNames.length;
      ++o
    ) {
      var c = { '!id': {} },
        u = e.Sheets[e.SheetNames[o - 1]],
        h = (u || {})['!type'] || 'sheet'
      switch (h) {
        case 'chart':
        default:
          ;(s = 'xl/worksheets/sheet' + o + '.' + r),
            ve(i, s, iA(o - 1, s, t, e, c)),
            a.sheets.push(s),
            Ie(t.wbrels, -1, 'worksheets/sheet' + o + '.' + r, De.WS[0])
      }
      if (u) {
        var p = u['!comments'],
          m = !1,
          d = ''
        p &&
          p.length > 0 &&
          ((d = 'xl/comments' + o + '.' + r),
          ve(i, d, fA(p, d)),
          a.comments.push(d),
          Ie(c, -1, '../comments' + o + '.' + r, De.CMNT),
          (m = !0)),
          u['!legacy'] && m && ve(i, 'xl/drawings/vmlDrawing' + o + '.vml', Au(o, u['!comments'])),
          delete u['!comments'],
          delete u['!legacy']
      }
      c['!id'].rId1 && ve(i, Xc(s), jn(c))
    }
    return (
      t.Strings != null &&
        t.Strings.length > 0 &&
        ((s = 'xl/sharedStrings.' + r),
        ve(i, s, oA(t.Strings, s, t)),
        a.strs.push(s),
        Ie(t.wbrels, -1, 'sharedStrings.' + r, De.SST)),
      (s = 'xl/workbook.' + r),
      ve(i, s, aA(e, s)),
      a.workbooks.push(s),
      Ie(t.rels, 1, s, De.WB),
      (s = 'xl/theme/theme1.xml'),
      ve(i, s, Su(e.Themes, t)),
      a.themes.push(s),
      Ie(t.wbrels, -1, 'theme/theme1.xml', De.THEME),
      (s = 'xl/styles.' + r),
      ve(i, s, sA(e, s, t)),
      a.styles.push(s),
      Ie(t.wbrels, -1, 'styles.' + r, De.STY),
      e.vbaraw &&
        n &&
        ((s = 'xl/vbaProject.bin'),
        ve(i, s, e.vbaraw),
        a.vba.push(s),
        Ie(t.wbrels, -1, 'vbaProject.bin', De.VBA)),
      (s = 'xl/metadata.' + r),
      ve(i, s, lA(s)),
      a.metadata.push(s),
      Ie(t.wbrels, -1, 'metadata.' + r, De.XLMETA),
      ve(i, '[Content_Types].xml', zc(a, t)),
      ve(i, '_rels/.rels', jn(t.rels)),
      ve(i, 'xl/_rels/workbook.' + r + '.rels', jn(t.wbrels)),
      delete t.revssf,
      delete t.ssf,
      i
    )
  }
  function n3(e, t) {
    ;(Gn = 1024),
      e && !e.SSF && (e.SSF = Nt(ze)),
      e &&
        e.SSF &&
        (Hi(), Da(e.SSF), (t.revssf = Yi(e.SSF)), (t.revssf[e.SSF[65535]] = 0), (t.ssf = e.SSF)),
      (t.rels = {}),
      (t.wbrels = {}),
      (t.Strings = []),
      (t.Strings.Count = 0),
      (t.Strings.Unique = 0),
      Ya
        ? (t.revStrings = new Map())
        : ((t.revStrings = {}), (t.revStrings.foo = []), delete t.revStrings.foo)
    var r = 'xml',
      n = Fu.indexOf(t.bookType) > -1,
      a = Gc()
    to((t = t || {}))
    var i = D0(),
      s = '',
      o = 0
    if (
      ((t.cellXfs = []),
      Xr(t.cellXfs, {}, { revssf: { General: 0 } }),
      e.Props || (e.Props = {}),
      (s = 'docProps/core.xml'),
      ve(i, s, Jc(e.Props, t)),
      a.coreprops.push(s),
      Ie(t.rels, 2, s, De.CORE_PROPS),
      (s = 'docProps/app.xml'),
      !(e.Props && e.Props.SheetNames))
    )
      if (!e.Workbook || !e.Workbook.Sheets) e.Props.SheetNames = e.SheetNames
      else {
        for (var l = [], f = 0; f < e.SheetNames.length; ++f)
          (e.Workbook.Sheets[f] || {}).Hidden != 2 && l.push(e.SheetNames[f])
        e.Props.SheetNames = l
      }
    ;(e.Props.Worksheets = e.Props.SheetNames.length),
      ve(i, s, Qc(e.Props)),
      a.extprops.push(s),
      Ie(t.rels, 3, s, De.EXT_PROPS),
      e.Custprops !== e.Props &&
        dt(e.Custprops || {}).length > 0 &&
        ((s = 'docProps/custom.xml'),
        ve(i, s, eu(e.Custprops)),
        a.custprops.push(s),
        Ie(t.rels, 4, s, De.CUST_PROPS))
    var c = ['SheetJ5']
    for (t.tcid = 0, o = 1; o <= e.SheetNames.length; ++o) {
      var u = { '!id': {} },
        h = e.Sheets[e.SheetNames[o - 1]],
        p = (h || {})['!type'] || 'sheet'
      switch (p) {
        case 'chart':
        default:
          ;(s = 'xl/worksheets/sheet' + o + '.' + r),
            ve(i, s, Uu(o - 1, t, e, u)),
            a.sheets.push(s),
            Ie(t.wbrels, -1, 'worksheets/sheet' + o + '.' + r, De.WS[0])
      }
      if (h) {
        var m = h['!comments'],
          d = !1,
          v = ''
        if (m && m.length > 0) {
          var A = !1
          m.forEach(function (F) {
            F[1].forEach(function (C) {
              C.T == !0 && (A = !0)
            })
          }),
            A &&
              ((v = 'xl/threadedComments/threadedComment' + o + '.' + r),
              ve(i, v, IE(m, c, t)),
              a.threadedcomments.push(v),
              Ie(u, -1, '../threadedComments/threadedComment' + o + '.' + r, De.TCMNT)),
            (v = 'xl/comments' + o + '.' + r),
            ve(i, v, Ou(m)),
            a.comments.push(v),
            Ie(u, -1, '../comments' + o + '.' + r, De.CMNT),
            (d = !0)
        }
        h['!legacy'] && d && ve(i, 'xl/drawings/vmlDrawing' + o + '.vml', Au(o, h['!comments'])),
          delete h['!comments'],
          delete h['!legacy']
      }
      u['!id'].rId1 && ve(i, Xc(s), jn(u))
    }
    return (
      t.Strings != null &&
        t.Strings.length > 0 &&
        ((s = 'xl/sharedStrings.' + r),
        ve(i, s, xu(t.Strings, t)),
        a.strs.push(s),
        Ie(t.wbrels, -1, 'sharedStrings.' + r, De.SST)),
      (s = 'xl/workbook.' + r),
      ve(i, s, Yu(e)),
      a.workbooks.push(s),
      Ie(t.rels, 1, s, De.WB),
      (s = 'xl/theme/theme1.xml'),
      ve(i, s, Su(e.Themes, t)),
      a.themes.push(s),
      Ie(t.wbrels, -1, 'theme/theme1.xml', De.THEME),
      (s = 'xl/styles.' + r),
      ve(i, s, wu(e, t)),
      a.styles.push(s),
      Ie(t.wbrels, -1, 'styles.' + r, De.STY),
      e.vbaraw &&
        n &&
        ((s = 'xl/vbaProject.bin'),
        ve(i, s, e.vbaraw),
        a.vba.push(s),
        Ie(t.wbrels, -1, 'vbaProject.bin', De.VBA)),
      (s = 'xl/metadata.' + r),
      ve(i, s, yu()),
      a.metadata.push(s),
      Ie(t.wbrels, -1, 'metadata.' + r, De.XLMETA),
      c.length > 1 &&
        ((s = 'xl/persons/person.xml'),
        ve(i, s, ME(c)),
        a.people.push(s),
        Ie(t.wbrels, -1, 'persons/person.xml', De.PEOPLE)),
      ve(i, '[Content_Types].xml', zc(a, t)),
      ve(i, '_rels/.rels', jn(t.rels)),
      ve(i, 'xl/_rels/workbook.' + r + '.rels', jn(t.wbrels)),
      delete t.revssf,
      delete t.ssf,
      i
    )
  }
  function a3(e, t) {
    var r = ''
    switch ((t || {}).type || 'base64') {
      case 'buffer':
        return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]]
      case 'base64':
        r = yr(e.slice(0, 12))
        break
      case 'binary':
        r = e
        break
      case 'array':
        return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]]
      default:
        throw new Error('Unrecognized type ' + ((t && t.type) || 'undefined'))
    }
    return [
      r.charCodeAt(0),
      r.charCodeAt(1),
      r.charCodeAt(2),
      r.charCodeAt(3),
      r.charCodeAt(4),
      r.charCodeAt(5),
      r.charCodeAt(6),
      r.charCodeAt(7)
    ]
  }
  function Ju(e, t) {
    switch (t.type) {
      case 'base64':
      case 'binary':
        break
      case 'buffer':
      case 'array':
        t.type = ''
        break
      case 'file':
        return ka(t.file, Ue.write(e, { type: ke ? 'buffer' : '' }))
      case 'string':
        throw new Error("'string' output type invalid for '" + t.bookType + "' files")
      default:
        throw new Error('Unrecognized type ' + t.type)
    }
    return Ue.write(e, t)
  }
  function i3(e, t) {
    var r = Nt(t || {}),
      n = t3(e, r)
    return s3(n, r)
  }
  function s3(e, t) {
    var r = {},
      n = ke ? 'nodebuffer' : typeof Uint8Array < 'u' ? 'array' : 'string'
    if ((t.compression && (r.compression = 'DEFLATE'), t.password)) r.type = n
    else
      switch (t.type) {
        case 'base64':
          r.type = 'base64'
          break
        case 'binary':
          r.type = 'string'
          break
        case 'string':
          throw new Error("'string' output type invalid for '" + t.bookType + "' files")
        case 'buffer':
        case 'file':
          r.type = n
          break
        default:
          throw new Error('Unrecognized type ' + t.type)
      }
    var a = e.FullPaths
      ? Ue.write(e, {
          fileType: 'zip',
          type: { nodebuffer: 'buffer', string: 'binary' }[r.type] || r.type,
          compression: !!t.compression
        })
      : e.generate(r)
    if (typeof Deno < 'u' && typeof a == 'string') {
      if (t.type == 'binary' || t.type == 'base64') return a
      a = new Uint8Array(bi(a))
    }
    return t.password && typeof encrypt_agile < 'u'
      ? Ju(encrypt_agile(a, t.password), t)
      : t.type === 'file'
      ? ka(t.file, a)
      : t.type == 'string'
      ? Na(a)
      : a
  }
  function o3(e, t) {
    var r = t || {},
      n = SA(e, r)
    return Ju(n, r)
  }
  function hr(e, t, r) {
    r || (r = '')
    var n = r + e
    switch (t.type) {
      case 'base64':
        return Aa(Dr(n))
      case 'binary':
        return Dr(n)
      case 'string':
        return e
      case 'file':
        return ka(t.file, n, 'utf8')
      case 'buffer':
        return ke
          ? Ar(n, 'utf8')
          : typeof TextEncoder < 'u'
          ? new TextEncoder().encode(n)
          : hr(n, { type: 'binary' })
              .split('')
              .map(function (a) {
                return a.charCodeAt(0)
              })
    }
    throw new Error('Unrecognized type ' + t.type)
  }
  function f3(e, t) {
    switch (t.type) {
      case 'base64':
        return Aa(e)
      case 'binary':
        return e
      case 'string':
        return e
      case 'file':
        return ka(t.file, e, 'binary')
      case 'buffer':
        return ke
          ? Ar(e, 'binary')
          : e.split('').map(function (r) {
              return r.charCodeAt(0)
            })
    }
    throw new Error('Unrecognized type ' + t.type)
  }
  function ss(e, t) {
    switch (t.type) {
      case 'string':
      case 'base64':
      case 'binary':
        for (var r = '', n = 0; n < e.length; ++n) r += String.fromCharCode(e[n])
        return t.type == 'base64' ? Aa(r) : t.type == 'string' ? Na(r) : r
      case 'file':
        return ka(t.file, e)
      case 'buffer':
        return e
      default:
        throw new Error('Unrecognized type ' + t.type)
    }
  }
  function Zu(e, t) {
    Mv(), z4(e)
    var r = Nt(t || {})
    if ((r.cellStyles && ((r.cellNF = !0), (r.sheetStubs = !0)), r.type == 'array')) {
      r.type = 'binary'
      var n = Zu(e, r)
      return (r.type = 'array'), bi(n)
    }
    var a = 0
    if (
      r.sheet &&
      (typeof r.sheet == 'number' ? (a = r.sheet) : (a = e.SheetNames.indexOf(r.sheet)),
      !e.SheetNames[a])
    )
      throw new Error('Sheet not found: ' + r.sheet + ' : ' + typeof r.sheet)
    switch (r.bookType || 'xlsb') {
      case 'xml':
      case 'xlml':
        return hr(TA(e, r), r)
      case 'slk':
      case 'sylk':
        return hr(jT.from_sheet(e.Sheets[e.SheetNames[a]], r), r)
      case 'htm':
      case 'html':
        return hr(Vu(e.Sheets[e.SheetNames[a]], r), r)
      case 'txt':
        return f3(eh(e.Sheets[e.SheetNames[a]], r), r)
      case 'csv':
        return hr(ro(e.Sheets[e.SheetNames[a]], r), r, '\uFEFF')
      case 'dif':
        return hr(VT.from_sheet(e.Sheets[e.SheetNames[a]], r), r)
      case 'dbf':
        return ss($T.from_sheet(e.Sheets[e.SheetNames[a]], r), r)
      case 'prn':
        return hr(GT.from_sheet(e.Sheets[e.SheetNames[a]], r), r)
      case 'rtf':
        return hr(QT.from_sheet(e.Sheets[e.SheetNames[a]], r), r)
      case 'eth':
        return hr(du.from_sheet(e.Sheets[e.SheetNames[a]], r), r)
      case 'fods':
        return hr(qu(e, r), r)
      case 'wk1':
        return ss(pu.sheet_to_wk1(e.Sheets[e.SheetNames[a]], r), r)
      case 'wk3':
        return ss(pu.book_to_wk3(e, r), r)
      case 'biff2':
        r.biff || (r.biff = 2)
      case 'biff3':
        r.biff || (r.biff = 3)
      case 'biff4':
        return r.biff || (r.biff = 4), ss(ju(e, r), r)
      case 'biff5':
        r.biff || (r.biff = 5)
      case 'biff8':
      case 'xla':
      case 'xls':
        return r.biff || (r.biff = 8), o3(e, r)
      case 'xlsx':
      case 'xlsm':
      case 'xlam':
      case 'xlsb':
      case 'numbers':
      case 'ods':
        return i3(e, r)
      default:
        throw new Error('Unrecognized bookType |' + r.bookType + '|')
    }
  }
  function l3(e, t, r, n, a, i, s, o) {
    var l = xt(r),
      f = o.defval,
      c = o.raw || !Object.prototype.hasOwnProperty.call(o, 'raw'),
      u = !0,
      h = a === 1 ? [] : {}
    if (a !== 1)
      if (Object.defineProperty)
        try {
          Object.defineProperty(h, '__rowNum__', { value: r, enumerable: !1 })
        } catch {
          h.__rowNum__ = r
        }
      else h.__rowNum__ = r
    if (!s || e[r])
      for (var p = t.s.c; p <= t.e.c; ++p) {
        var m = s ? e[r][p] : e[n[p] + l]
        if (m === void 0 || m.t === void 0) {
          if (f === void 0) continue
          i[p] != null && (h[i[p]] = f)
          continue
        }
        var d = m.v
        switch (m.t) {
          case 'z':
            if (d == null) break
            continue
          case 'e':
            d = d == 0 ? null : void 0
            break
          case 's':
          case 'd':
          case 'b':
          case 'n':
            break
          default:
            throw new Error('unrecognized type ' + m.t)
        }
        if (i[p] != null) {
          if (d == null)
            if (m.t == 'e' && d === null) h[i[p]] = null
            else if (f !== void 0) h[i[p]] = f
            else if (c && d === null) h[i[p]] = null
            else continue
          else
            h[i[p]] = c && (m.t !== 'n' || (m.t === 'n' && o.rawNumbers !== !1)) ? d : kr(m, d, o)
          d != null && (u = !1)
        }
      }
    return { row: h, isempty: u }
  }
  function os(e, t) {
    if (e == null || e['!ref'] == null) return []
    var r = { t: 'n', v: 0 },
      n = 0,
      a = 1,
      i = [],
      s = 0,
      o = '',
      l = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
      f = t || {},
      c = f.range != null ? f.range : e['!ref']
    switch (
      (f.header === 1
        ? (n = 1)
        : f.header === 'A'
        ? (n = 2)
        : Array.isArray(f.header)
        ? (n = 3)
        : f.header == null && (n = 0),
      typeof c)
    ) {
      case 'string':
        l = je(c)
        break
      case 'number':
        ;(l = je(e['!ref'])), (l.s.r = c)
        break
      default:
        l = c
    }
    n > 0 && (a = 0)
    var u = xt(l.s.r),
      h = [],
      p = [],
      m = 0,
      d = 0,
      v = Array.isArray(e),
      A = l.s.r,
      F = 0,
      C = {}
    v && !e[A] && (e[A] = [])
    var L = (f.skipHidden && e['!cols']) || [],
      Z = (f.skipHidden && e['!rows']) || []
    for (F = l.s.c; F <= l.e.c; ++F)
      if (!(L[F] || {}).hidden)
        switch (((h[F] = Et(F)), (r = v ? e[A][F] : e[h[F] + u]), n)) {
          case 1:
            i[F] = F - l.s.c
            break
          case 2:
            i[F] = h[F]
            break
          case 3:
            i[F] = f.header[F - l.s.c]
            break
          default:
            if (
              (r == null && (r = { w: '__EMPTY', t: 's' }),
              (o = s = kr(r, null, f)),
              (d = C[s] || 0),
              !d)
            )
              C[s] = 1
            else {
              do o = s + '_' + d++
              while (C[o])
              ;(C[s] = d), (C[o] = 1)
            }
            i[F] = o
        }
    for (A = l.s.r + a; A <= l.e.r; ++A)
      if (!(Z[A] || {}).hidden) {
        var ie = l3(e, l, A, h, n, i, v, f)
        ;(ie.isempty === !1 || (n === 1 ? f.blankrows !== !1 : !!f.blankrows)) && (p[m++] = ie.row)
      }
    return (p.length = m), p
  }
  var Qu = /"/g
  function c3(e, t, r, n, a, i, s, o) {
    for (var l = !0, f = [], c = '', u = xt(r), h = t.s.c; h <= t.e.c; ++h)
      if (!!n[h]) {
        var p = o.dense ? (e[r] || [])[h] : e[n[h] + u]
        if (p == null) c = ''
        else if (p.v != null) {
          ;(l = !1), (c = '' + (o.rawNumbers && p.t == 'n' ? p.v : kr(p, null, o)))
          for (var m = 0, d = 0; m !== c.length; ++m)
            if ((d = c.charCodeAt(m)) === a || d === i || d === 34 || o.forceQuotes) {
              c = '"' + c.replace(Qu, '""') + '"'
              break
            }
          c == 'ID' && (c = '"ID"')
        } else
          p.f != null && !p.F
            ? ((l = !1),
              (c = '=' + p.f),
              c.indexOf(',') >= 0 && (c = '"' + c.replace(Qu, '""') + '"'))
            : (c = '')
        f.push(c)
      }
    return o.blankrows === !1 && l ? null : f.join(s)
  }
  function ro(e, t) {
    var r = [],
      n = t == null ? {} : t
    if (e == null || e['!ref'] == null) return ''
    var a = je(e['!ref']),
      i = n.FS !== void 0 ? n.FS : ',',
      s = i.charCodeAt(0),
      o =
        n.RS !== void 0
          ? n.RS
          : `
`,
      l = o.charCodeAt(0),
      f = new RegExp((i == '|' ? '\\|' : i) + '+$'),
      c = '',
      u = []
    n.dense = Array.isArray(e)
    for (
      var h = (n.skipHidden && e['!cols']) || [], p = (n.skipHidden && e['!rows']) || [], m = a.s.c;
      m <= a.e.c;
      ++m
    )
      (h[m] || {}).hidden || (u[m] = Et(m))
    for (var d = 0, v = a.s.r; v <= a.e.r; ++v)
      (p[v] || {}).hidden ||
        ((c = c3(e, a, v, u, s, l, i, n)),
        c != null &&
          (n.strip && (c = c.replace(f, '')),
          (c || n.blankrows !== !1) && r.push((d++ ? o : '') + c)))
    return delete n.dense, r.join('')
  }
  function eh(e, t) {
    t || (t = {}),
      (t.FS = '	'),
      (t.RS = `
`)
    var r = ro(e, t)
    return r
  }
  function u3(e) {
    var t = '',
      r,
      n = ''
    if (e == null || e['!ref'] == null) return []
    var a = je(e['!ref']),
      i = '',
      s = [],
      o,
      l = [],
      f = Array.isArray(e)
    for (o = a.s.c; o <= a.e.c; ++o) s[o] = Et(o)
    for (var c = a.s.r; c <= a.e.r; ++c)
      for (i = xt(c), o = a.s.c; o <= a.e.c; ++o)
        if (((t = s[o] + i), (r = f ? (e[c] || [])[o] : e[t]), (n = ''), r !== void 0)) {
          if (r.F != null) {
            if (((t = r.F), !r.f)) continue
            ;(n = r.f), t.indexOf(':') == -1 && (t = t + ':' + t)
          }
          if (r.f != null) n = r.f
          else {
            if (r.t == 'z') continue
            if (r.t == 'n' && r.v != null) n = '' + r.v
            else if (r.t == 'b') n = r.v ? 'TRUE' : 'FALSE'
            else if (r.w !== void 0) n = "'" + r.w
            else {
              if (r.v === void 0) continue
              r.t == 's' ? (n = "'" + r.v) : (n = '' + r.v)
            }
          }
          l[l.length] = t + '=' + n
        }
    return l
  }
  function th(e, t, r) {
    var n = r || {},
      a = +!n.skipHeader,
      i = e || {},
      s = 0,
      o = 0
    if (i && n.origin != null)
      if (typeof n.origin == 'number') s = n.origin
      else {
        var l = typeof n.origin == 'string' ? ct(n.origin) : n.origin
        ;(s = l.r), (o = l.c)
      }
    var f,
      c = { s: { c: 0, r: 0 }, e: { c: o, r: s + t.length - 1 + a } }
    if (i['!ref']) {
      var u = je(i['!ref'])
      ;(c.e.c = Math.max(c.e.c, u.e.c)),
        (c.e.r = Math.max(c.e.r, u.e.r)),
        s == -1 && ((s = u.e.r + 1), (c.e.r = s + t.length - 1 + a))
    } else s == -1 && ((s = 0), (c.e.r = t.length - 1 + a))
    var h = n.header || [],
      p = 0
    t.forEach(function (d, v) {
      dt(d).forEach(function (A) {
        ;(p = h.indexOf(A)) == -1 && (h[(p = h.length)] = A)
        var F = d[A],
          C = 'z',
          L = '',
          Z = Pe({ c: o + p, r: s + v + a })
        ;(f = Va(i, Z)),
          F && typeof F == 'object' && !(F instanceof Date)
            ? (i[Z] = F)
            : (typeof F == 'number'
                ? (C = 'n')
                : typeof F == 'boolean'
                ? (C = 'b')
                : typeof F == 'string'
                ? (C = 's')
                : F instanceof Date
                ? ((C = 'd'), n.cellDates || ((C = 'n'), (F = Rt(F))), (L = n.dateNF || ze[14]))
                : F === null && n.nullError && ((C = 'e'), (F = 0)),
              f
                ? ((f.t = C), (f.v = F), delete f.w, delete f.R, L && (f.z = L))
                : (i[Z] = f = { t: C, v: F }),
              L && (f.z = L))
      })
    }),
      (c.e.c = Math.max(c.e.c, o + h.length - 1))
    var m = xt(s)
    if (a) for (p = 0; p < h.length; ++p) i[Et(p + o) + m] = { t: 's', v: h[p] }
    return (i['!ref'] = tt(c)), i
  }
  function h3(e, t) {
    return th(null, e, t)
  }
  function Va(e, t, r) {
    if (typeof t == 'string') {
      if (Array.isArray(e)) {
        var n = ct(t)
        return e[n.r] || (e[n.r] = []), e[n.r][n.c] || (e[n.r][n.c] = { t: 'z' })
      }
      return e[t] || (e[t] = { t: 'z' })
    }
    return typeof t != 'number' ? Va(e, Pe(t)) : Va(e, Pe({ r: t, c: r || 0 }))
  }
  function d3(e, t) {
    if (typeof t == 'number') {
      if (t >= 0 && e.SheetNames.length > t) return t
      throw new Error('Cannot find sheet # ' + t)
    } else if (typeof t == 'string') {
      var r = e.SheetNames.indexOf(t)
      if (r > -1) return r
      throw new Error('Cannot find sheet name |' + t + '|')
    } else throw new Error('Cannot find sheet |' + t + '|')
  }
  function p3() {
    return { SheetNames: [], Sheets: {} }
  }
  function x3(e, t, r, n) {
    var a = 1
    if (!r) for (; a <= 65535 && e.SheetNames.indexOf((r = 'Sheet' + a)) != -1; ++a, r = void 0);
    if (!r || e.SheetNames.length >= 65535) throw new Error('Too many worksheets')
    if (n && e.SheetNames.indexOf(r) >= 0) {
      var i = r.match(/(^.*?)(\d+)$/)
      a = (i && +i[2]) || 0
      var s = (i && i[1]) || r
      for (++a; a <= 65535 && e.SheetNames.indexOf((r = s + a)) != -1; ++a);
    }
    if ((Hu(r), e.SheetNames.indexOf(r) >= 0))
      throw new Error('Worksheet with name |' + r + '| already exists!')
    return e.SheetNames.push(r), (e.Sheets[r] = t), r
  }
  function m3(e, t, r) {
    e.Workbook || (e.Workbook = {}), e.Workbook.Sheets || (e.Workbook.Sheets = [])
    var n = d3(e, t)
    switch ((e.Workbook.Sheets[n] || (e.Workbook.Sheets[n] = {}), r)) {
      case 0:
      case 1:
      case 2:
        break
      default:
        throw new Error('Bad sheet visibility setting ' + r)
    }
    e.Workbook.Sheets[n].Hidden = r
  }
  function _3(e, t) {
    return (e.z = t), e
  }
  function rh(e, t, r) {
    return t ? ((e.l = { Target: t }), r && (e.l.Tooltip = r)) : delete e.l, e
  }
  function g3(e, t, r) {
    return rh(e, '#' + t, r)
  }
  function v3(e, t, r) {
    e.c || (e.c = []), e.c.push({ t, a: r || 'SheetJS' })
  }
  function w3(e, t, r, n) {
    for (
      var a = typeof t != 'string' ? t : je(t), i = typeof t == 'string' ? t : tt(t), s = a.s.r;
      s <= a.e.r;
      ++s
    )
      for (var o = a.s.c; o <= a.e.c; ++o) {
        var l = Va(e, s, o)
        ;(l.t = 'n'),
          (l.F = i),
          delete l.v,
          s == a.s.r && o == a.s.c && ((l.f = r), n && (l.D = !0))
      }
    return e
  }
  var no = {
    encode_col: Et,
    encode_row: xt,
    encode_cell: Pe,
    encode_range: tt,
    decode_col: B0,
    decode_row: L0,
    split_cell: bw,
    decode_cell: ct,
    decode_range: Wt,
    format_cell: kr,
    sheet_add_aoa: Bc,
    sheet_add_json: th,
    sheet_add_dom: Gu,
    aoa_to_sheet: Hn,
    json_to_sheet: h3,
    table_to_sheet: zu,
    table_to_book: VA,
    sheet_to_csv: ro,
    sheet_to_txt: eh,
    sheet_to_json: os,
    sheet_to_html: Vu,
    sheet_to_formulae: u3,
    sheet_to_row_object_array: os,
    sheet_get_cell: Va,
    book_new: p3,
    book_append_sheet: x3,
    book_set_sheet_visibility: m3,
    cell_set_number_format: _3,
    cell_set_hyperlink: rh,
    cell_set_internal_link: g3,
    cell_add_comment: v3,
    sheet_set_array_formula: w3,
    consts: { SHEET_VISIBLE: 0, SHEET_HIDDEN: 1, SHEET_VERY_HIDDEN: 2 }
  }
  class T3 {
    constructor() {
      xe(this, 'SheetNames', [])
      xe(this, 'Sheets', {})
    }
  }
  const nh = e => q(new Date(e)).format('yyyy/MM/DD HH:mm'),
    E3 = e => {
      const t = {},
        r = { s: { r: 1e7, c: 1e7 }, e: { r: 0, c: 0 } }
      for (let n = 0; n !== e.length; ++n)
        for (let a = 0; a !== e[n].length; ++a) {
          r.s.r > n && (r.s.r = n),
            r.s.c > a && (r.s.c = a),
            r.e.r < n && (r.e.r = n),
            r.e.c < a && (r.e.c = a)
          const i = { v: e[n][a], t: '', z: '' }
          if (i.v === null) continue
          const s = no.encode_cell({ r: n, c: a })
          typeof i.v == 'number'
            ? (i.t = 'n')
            : typeof i.v == 'boolean'
            ? ((i.t = 's'),
              (i.z = F0.get_table()[14]),
              (i.v = Boolean(i.v).valueOf() ? '\u662F' : '\u5426'))
            : new Date(i.v) instanceof Date && nh(i.v) !== 'Invalid date'
            ? ((i.t = 's'), (i.z = F0.get_table()[14]), (i.v = nh(i.v)))
            : (i.t = 's'),
            (t[s] = i)
        }
      return r.s.c < 1e7 && (t['!ref'] = no.encode_range(r)), t
    },
    S3 = e => {
      const t = new ArrayBuffer(e.length),
        r = new Uint8Array(t)
      for (let n = 0; n !== e.length; ++n) r[n] = e.charCodeAt(n) & 255
      return t
    },
    y3 = (e, t, r = '\u5217\u8868\u6570\u636E', n = 'xlsx', a, i) => {
      ;(t = [...t]), t.unshift(e)
      const s = 'SheetJs',
        o = new T3(),
        l = E3(t)
      if (
        (i &&
          i.length > 0 &&
          (l['!merges'] || (l['!merges'] = []),
          i.forEach(u => {
            l['!merges'].push(no.decode_range(u))
          })),
        a)
      ) {
        const u = t.map(p =>
            p.map(m =>
              m === null
                ? { wch: 10 }
                : (m + '').toString().charCodeAt(0) > 255
                ? { wch: m.toString().length * 2 }
                : { wch: (m + '').toString().length }
            )
          ),
          h = u[0]
        for (let p = 1; p < u.length; p++)
          for (let m = 0; m < u[p].length; m++) h[m].wch < u[p][m].wch && (h[m].wch = u[p][m].wch)
        l['!cols'] = h
      }
      o.SheetNames.push(s), (o.Sheets[s] = l)
      const f = Zu(o, { bookType: n, bookSST: !1, type: 'binary' }),
        c = new Blob([S3(f)], { type: 'application/octet-stream' })
      Yf.exports.saveAs(c, `${r}.${n}`)
    }
  /*! Element Plus Icons Vue v2.0.10 */ var A3 = (e, t) => {
      let r = e.__vccOpts || e
      for (let [n, a] of t) r[n] = a
      return r
    },
    O3 = { name: 'Search' },
    F3 = { viewBox: '0 0 1024 1024', xmlns: 'http://www.w3.org/2000/svg' },
    C3 = g.createElementVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z'
      },
      null,
      -1
    ),
    D3 = [C3]
  function k3(e, t, r, n, a, i) {
    return g.openBlock(), g.createElementBlock('svg', F3, D3)
  }
  var R3 = A3(O3, [
    ['render', k3],
    ['__file', 'search.vue']
  ])
  function ah(e, t) {
    return function () {
      return e.apply(t, arguments)
    }
  }
  const { toString: ih } = Object.prototype,
    { getPrototypeOf: ao } = Object,
    io = (e => t => {
      const r = ih.call(t)
      return e[r] || (e[r] = r.slice(8, -1).toLowerCase())
    })(Object.create(null)),
    Nr = e => ((e = e.toLowerCase()), t => io(t) === e),
    fs = e => t => typeof t === e,
    { isArray: Jn } = Array,
    Ga = fs('undefined')
  function N3(e) {
    return (
      e !== null &&
      !Ga(e) &&
      e.constructor !== null &&
      !Ga(e.constructor) &&
      Jr(e.constructor.isBuffer) &&
      e.constructor.isBuffer(e)
    )
  }
  const sh = Nr('ArrayBuffer')
  function P3(e) {
    let t
    return (
      typeof ArrayBuffer < 'u' && ArrayBuffer.isView
        ? (t = ArrayBuffer.isView(e))
        : (t = e && e.buffer && sh(e.buffer)),
      t
    )
  }
  const I3 = fs('string'),
    Jr = fs('function'),
    oh = fs('number'),
    so = e => e !== null && typeof e == 'object',
    M3 = e => e === !0 || e === !1,
    ls = e => {
      if (io(e) !== 'object') return !1
      const t = ao(e)
      return (
        (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
        !(Symbol.toStringTag in e) &&
        !(Symbol.iterator in e)
      )
    },
    b3 = Nr('Date'),
    L3 = Nr('File'),
    B3 = Nr('Blob'),
    U3 = Nr('FileList'),
    W3 = e => so(e) && Jr(e.pipe),
    H3 = e => {
      const t = '[object FormData]'
      return (
        e &&
        ((typeof FormData == 'function' && e instanceof FormData) ||
          ih.call(e) === t ||
          (Jr(e.toString) && e.toString() === t))
      )
    },
    Y3 = Nr('URLSearchParams'),
    $3 = e => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''))
  function za(e, t, { allOwnKeys: r = !1 } = {}) {
    if (e === null || typeof e > 'u') return
    let n, a
    if ((typeof e != 'object' && (e = [e]), Jn(e)))
      for (n = 0, a = e.length; n < a; n++) t.call(null, e[n], n, e)
    else {
      const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
        s = i.length
      let o
      for (n = 0; n < s; n++) (o = i[n]), t.call(null, e[o], o, e)
    }
  }
  function fh(e, t) {
    t = t.toLowerCase()
    const r = Object.keys(e)
    let n = r.length,
      a
    for (; n-- > 0; ) if (((a = r[n]), t === a.toLowerCase())) return a
    return null
  }
  const lh = (() =>
      typeof globalThis < 'u'
        ? globalThis
        : typeof self < 'u'
        ? self
        : typeof window < 'u'
        ? window
        : global)(),
    ch = e => !Ga(e) && e !== lh
  function oo() {
    const { caseless: e } = (ch(this) && this) || {},
      t = {},
      r = (n, a) => {
        const i = (e && fh(t, a)) || a
        ls(t[i]) && ls(n)
          ? (t[i] = oo(t[i], n))
          : ls(n)
          ? (t[i] = oo({}, n))
          : Jn(n)
          ? (t[i] = n.slice())
          : (t[i] = n)
      }
    for (let n = 0, a = arguments.length; n < a; n++) arguments[n] && za(arguments[n], r)
    return t
  }
  const j3 = (e, t, r, { allOwnKeys: n } = {}) => (
      za(
        t,
        (a, i) => {
          r && Jr(a) ? (e[i] = ah(a, r)) : (e[i] = a)
        },
        { allOwnKeys: n }
      ),
      e
    ),
    V3 = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    G3 = (e, t, r, n) => {
      ;(e.prototype = Object.create(t.prototype, n)),
        (e.prototype.constructor = e),
        Object.defineProperty(e, 'super', { value: t.prototype }),
        r && Object.assign(e.prototype, r)
    },
    z3 = (e, t, r, n) => {
      let a, i, s
      const o = {}
      if (((t = t || {}), e == null)) return t
      do {
        for (a = Object.getOwnPropertyNames(e), i = a.length; i-- > 0; )
          (s = a[i]), (!n || n(s, e, t)) && !o[s] && ((t[s] = e[s]), (o[s] = !0))
        e = r !== !1 && ao(e)
      } while (e && (!r || r(e, t)) && e !== Object.prototype)
      return t
    },
    X3 = (e, t, r) => {
      ;(e = String(e)), (r === void 0 || r > e.length) && (r = e.length), (r -= t.length)
      const n = e.indexOf(t, r)
      return n !== -1 && n === r
    },
    K3 = e => {
      if (!e) return null
      if (Jn(e)) return e
      let t = e.length
      if (!oh(t)) return null
      const r = new Array(t)
      for (; t-- > 0; ) r[t] = e[t]
      return r
    },
    q3 = (
      e => t =>
        e && t instanceof e
    )(typeof Uint8Array < 'u' && ao(Uint8Array)),
    J3 = (e, t) => {
      const n = (e && e[Symbol.iterator]).call(e)
      let a
      for (; (a = n.next()) && !a.done; ) {
        const i = a.value
        t.call(e, i[0], i[1])
      }
    },
    Z3 = (e, t) => {
      let r
      const n = []
      for (; (r = e.exec(t)) !== null; ) n.push(r)
      return n
    },
    Q3 = Nr('HTMLFormElement'),
    eO = e =>
      e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, n, a) {
        return n.toUpperCase() + a
      }),
    uh = (
      ({ hasOwnProperty: e }) =>
      (t, r) =>
        e.call(t, r)
    )(Object.prototype),
    tO = Nr('RegExp'),
    hh = (e, t) => {
      const r = Object.getOwnPropertyDescriptors(e),
        n = {}
      za(r, (a, i) => {
        t(a, i, e) !== !1 && (n[i] = a)
      }),
        Object.defineProperties(e, n)
    },
    rO = e => {
      hh(e, (t, r) => {
        if (Jr(e) && ['arguments', 'caller', 'callee'].indexOf(r) !== -1) return !1
        const n = e[r]
        if (!!Jr(n)) {
          if (((t.enumerable = !1), 'writable' in t)) {
            t.writable = !1
            return
          }
          t.set ||
            (t.set = () => {
              throw Error("Can not rewrite read-only method '" + r + "'")
            })
        }
      })
    },
    nO = (e, t) => {
      const r = {},
        n = a => {
          a.forEach(i => {
            r[i] = !0
          })
        }
      return Jn(e) ? n(e) : n(String(e).split(t)), r
    },
    aO = () => {},
    iO = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
    fo = 'abcdefghijklmnopqrstuvwxyz',
    dh = '0123456789',
    ph = { DIGIT: dh, ALPHA: fo, ALPHA_DIGIT: fo + fo.toUpperCase() + dh },
    sO = (e = 16, t = ph.ALPHA_DIGIT) => {
      let r = ''
      const { length: n } = t
      for (; e--; ) r += t[(Math.random() * n) | 0]
      return r
    }
  function oO(e) {
    return !!(e && Jr(e.append) && e[Symbol.toStringTag] === 'FormData' && e[Symbol.iterator])
  }
  const W = {
    isArray: Jn,
    isArrayBuffer: sh,
    isBuffer: N3,
    isFormData: H3,
    isArrayBufferView: P3,
    isString: I3,
    isNumber: oh,
    isBoolean: M3,
    isObject: so,
    isPlainObject: ls,
    isUndefined: Ga,
    isDate: b3,
    isFile: L3,
    isBlob: B3,
    isRegExp: tO,
    isFunction: Jr,
    isStream: W3,
    isURLSearchParams: Y3,
    isTypedArray: q3,
    isFileList: U3,
    forEach: za,
    merge: oo,
    extend: j3,
    trim: $3,
    stripBOM: V3,
    inherits: G3,
    toFlatObject: z3,
    kindOf: io,
    kindOfTest: Nr,
    endsWith: X3,
    toArray: K3,
    forEachEntry: J3,
    matchAll: Z3,
    isHTMLForm: Q3,
    hasOwnProperty: uh,
    hasOwnProp: uh,
    reduceDescriptors: hh,
    freezeMethods: rO,
    toObjectSet: nO,
    toCamelCase: eO,
    noop: aO,
    toFiniteNumber: iO,
    findKey: fh,
    global: lh,
    isContextDefined: ch,
    ALPHABET: ph,
    generateString: sO,
    isSpecCompliantForm: oO,
    toJSONObject: e => {
      const t = new Array(10),
        r = (n, a) => {
          if (so(n)) {
            if (t.indexOf(n) >= 0) return
            if (!('toJSON' in n)) {
              t[a] = n
              const i = Jn(n) ? [] : {}
              return (
                za(n, (s, o) => {
                  const l = r(s, a + 1)
                  !Ga(l) && (i[o] = l)
                }),
                (t[a] = void 0),
                i
              )
            }
          }
          return n
        }
      return r(e, 0)
    }
  }
  function Ae(e, t, r, n, a) {
    Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack),
      (this.message = e),
      (this.name = 'AxiosError'),
      t && (this.code = t),
      r && (this.config = r),
      n && (this.request = n),
      a && (this.response = a)
  }
  W.inherits(Ae, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: W.toJSONObject(this.config),
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      }
    }
  })
  const xh = Ae.prototype,
    mh = {}
  ;[
    'ERR_BAD_OPTION_VALUE',
    'ERR_BAD_OPTION',
    'ECONNABORTED',
    'ETIMEDOUT',
    'ERR_NETWORK',
    'ERR_FR_TOO_MANY_REDIRECTS',
    'ERR_DEPRECATED',
    'ERR_BAD_RESPONSE',
    'ERR_BAD_REQUEST',
    'ERR_CANCELED',
    'ERR_NOT_SUPPORT',
    'ERR_INVALID_URL'
  ].forEach(e => {
    mh[e] = { value: e }
  }),
    Object.defineProperties(Ae, mh),
    Object.defineProperty(xh, 'isAxiosError', { value: !0 }),
    (Ae.from = (e, t, r, n, a, i) => {
      const s = Object.create(xh)
      return (
        W.toFlatObject(
          e,
          s,
          function (l) {
            return l !== Error.prototype
          },
          o => o !== 'isAxiosError'
        ),
        Ae.call(s, e.message, t, r, n, a),
        (s.cause = e),
        (s.name = e.name),
        i && Object.assign(s, i),
        s
      )
    })
  const fO = null
  function lo(e) {
    return W.isPlainObject(e) || W.isArray(e)
  }
  function _h(e) {
    return W.endsWith(e, '[]') ? e.slice(0, -2) : e
  }
  function gh(e, t, r) {
    return e
      ? e
          .concat(t)
          .map(function (a, i) {
            return (a = _h(a)), !r && i ? '[' + a + ']' : a
          })
          .join(r ? '.' : '')
      : t
  }
  function lO(e) {
    return W.isArray(e) && !e.some(lo)
  }
  const cO = W.toFlatObject(W, {}, null, function (t) {
    return /^is[A-Z]/.test(t)
  })
  function cs(e, t, r) {
    if (!W.isObject(e)) throw new TypeError('target must be an object')
    ;(t = t || new FormData()),
      (r = W.toFlatObject(r, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (d, v) {
        return !W.isUndefined(v[d])
      }))
    const n = r.metaTokens,
      a = r.visitor || c,
      i = r.dots,
      s = r.indexes,
      l = (r.Blob || (typeof Blob < 'u' && Blob)) && W.isSpecCompliantForm(t)
    if (!W.isFunction(a)) throw new TypeError('visitor must be a function')
    function f(m) {
      if (m === null) return ''
      if (W.isDate(m)) return m.toISOString()
      if (!l && W.isBlob(m)) throw new Ae('Blob is not supported. Use a Buffer instead.')
      return W.isArrayBuffer(m) || W.isTypedArray(m)
        ? l && typeof Blob == 'function'
          ? new Blob([m])
          : Buffer.from(m)
        : m
    }
    function c(m, d, v) {
      let A = m
      if (m && !v && typeof m == 'object') {
        if (W.endsWith(d, '{}')) (d = n ? d : d.slice(0, -2)), (m = JSON.stringify(m))
        else if (
          (W.isArray(m) && lO(m)) ||
          ((W.isFileList(m) || W.endsWith(d, '[]')) && (A = W.toArray(m)))
        )
          return (
            (d = _h(d)),
            A.forEach(function (C, L) {
              !(W.isUndefined(C) || C === null) &&
                t.append(s === !0 ? gh([d], L, i) : s === null ? d : d + '[]', f(C))
            }),
            !1
          )
      }
      return lo(m) ? !0 : (t.append(gh(v, d, i), f(m)), !1)
    }
    const u = [],
      h = Object.assign(cO, { defaultVisitor: c, convertValue: f, isVisitable: lo })
    function p(m, d) {
      if (!W.isUndefined(m)) {
        if (u.indexOf(m) !== -1) throw Error('Circular reference detected in ' + d.join('.'))
        u.push(m),
          W.forEach(m, function (A, F) {
            ;(!(W.isUndefined(A) || A === null) &&
              a.call(t, A, W.isString(F) ? F.trim() : F, d, h)) === !0 &&
              p(A, d ? d.concat(F) : [F])
          }),
          u.pop()
      }
    }
    if (!W.isObject(e)) throw new TypeError('data must be an object')
    return p(e), t
  }
  function vh(e) {
    const t = {
      '!': '%21',
      "'": '%27',
      '(': '%28',
      ')': '%29',
      '~': '%7E',
      '%20': '+',
      '%00': '\0'
    }
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (n) {
      return t[n]
    })
  }
  function co(e, t) {
    ;(this._pairs = []), e && cs(e, this, t)
  }
  const wh = co.prototype
  ;(wh.append = function (t, r) {
    this._pairs.push([t, r])
  }),
    (wh.toString = function (t) {
      const r = t
        ? function (n) {
            return t.call(this, n, vh)
          }
        : vh
      return this._pairs
        .map(function (a) {
          return r(a[0]) + '=' + r(a[1])
        }, '')
        .join('&')
    })
  function uO(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ':')
      .replace(/%24/g, '$')
      .replace(/%2C/gi, ',')
      .replace(/%20/g, '+')
      .replace(/%5B/gi, '[')
      .replace(/%5D/gi, ']')
  }
  function Th(e, t, r) {
    if (!t) return e
    const n = (r && r.encode) || uO,
      a = r && r.serialize
    let i
    if (
      (a ? (i = a(t, r)) : (i = W.isURLSearchParams(t) ? t.toString() : new co(t, r).toString(n)),
      i)
    ) {
      const s = e.indexOf('#')
      s !== -1 && (e = e.slice(0, s)), (e += (e.indexOf('?') === -1 ? '?' : '&') + i)
    }
    return e
  }
  class hO {
    constructor() {
      this.handlers = []
    }
    use(t, r, n) {
      return (
        this.handlers.push({
          fulfilled: t,
          rejected: r,
          synchronous: n ? n.synchronous : !1,
          runWhen: n ? n.runWhen : null
        }),
        this.handlers.length - 1
      )
    }
    eject(t) {
      this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
      this.handlers && (this.handlers = [])
    }
    forEach(t) {
      W.forEach(this.handlers, function (n) {
        n !== null && t(n)
      })
    }
  }
  const Eh = hO,
    Sh = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
    dO = typeof URLSearchParams < 'u' ? URLSearchParams : co,
    pO = typeof FormData < 'u' ? FormData : null,
    xO = typeof Blob < 'u' ? Blob : null,
    mO = (() => {
      let e
      return typeof navigator < 'u' &&
        ((e = navigator.product) === 'ReactNative' || e === 'NativeScript' || e === 'NS')
        ? !1
        : typeof window < 'u' && typeof document < 'u'
    })(),
    _O = (() =>
      typeof WorkerGlobalScope < 'u' &&
      self instanceof WorkerGlobalScope &&
      typeof self.importScripts == 'function')(),
    dr = {
      isBrowser: !0,
      classes: { URLSearchParams: dO, FormData: pO, Blob: xO },
      isStandardBrowserEnv: mO,
      isStandardBrowserWebWorkerEnv: _O,
      protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
    }
  function gO(e, t) {
    return cs(
      e,
      new dr.classes.URLSearchParams(),
      Object.assign(
        {
          visitor: function (r, n, a, i) {
            return dr.isNode && W.isBuffer(r)
              ? (this.append(n, r.toString('base64')), !1)
              : i.defaultVisitor.apply(this, arguments)
          }
        },
        t
      )
    )
  }
  function vO(e) {
    return W.matchAll(/\w+|\[(\w*)]/g, e).map(t => (t[0] === '[]' ? '' : t[1] || t[0]))
  }
  function wO(e) {
    const t = {},
      r = Object.keys(e)
    let n
    const a = r.length
    let i
    for (n = 0; n < a; n++) (i = r[n]), (t[i] = e[i])
    return t
  }
  function yh(e) {
    function t(r, n, a, i) {
      let s = r[i++]
      const o = Number.isFinite(+s),
        l = i >= r.length
      return (
        (s = !s && W.isArray(a) ? a.length : s),
        l
          ? (W.hasOwnProp(a, s) ? (a[s] = [a[s], n]) : (a[s] = n), !o)
          : ((!a[s] || !W.isObject(a[s])) && (a[s] = []),
            t(r, n, a[s], i) && W.isArray(a[s]) && (a[s] = wO(a[s])),
            !o)
      )
    }
    if (W.isFormData(e) && W.isFunction(e.entries)) {
      const r = {}
      return (
        W.forEachEntry(e, (n, a) => {
          t(vO(n), a, r, 0)
        }),
        r
      )
    }
    return null
  }
  const TO = { 'Content-Type': void 0 }
  function EO(e, t, r) {
    if (W.isString(e))
      try {
        return (t || JSON.parse)(e), W.trim(e)
      } catch (n) {
        if (n.name !== 'SyntaxError') throw n
      }
    return (r || JSON.stringify)(e)
  }
  const us = {
    transitional: Sh,
    adapter: ['xhr', 'http'],
    transformRequest: [
      function (t, r) {
        const n = r.getContentType() || '',
          a = n.indexOf('application/json') > -1,
          i = W.isObject(t)
        if ((i && W.isHTMLForm(t) && (t = new FormData(t)), W.isFormData(t)))
          return a && a ? JSON.stringify(yh(t)) : t
        if (W.isArrayBuffer(t) || W.isBuffer(t) || W.isStream(t) || W.isFile(t) || W.isBlob(t))
          return t
        if (W.isArrayBufferView(t)) return t.buffer
        if (W.isURLSearchParams(t))
          return (
            r.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), t.toString()
          )
        let o
        if (i) {
          if (n.indexOf('application/x-www-form-urlencoded') > -1)
            return gO(t, this.formSerializer).toString()
          if ((o = W.isFileList(t)) || n.indexOf('multipart/form-data') > -1) {
            const l = this.env && this.env.FormData
            return cs(o ? { 'files[]': t } : t, l && new l(), this.formSerializer)
          }
        }
        return i || a ? (r.setContentType('application/json', !1), EO(t)) : t
      }
    ],
    transformResponse: [
      function (t) {
        const r = this.transitional || us.transitional,
          n = r && r.forcedJSONParsing,
          a = this.responseType === 'json'
        if (t && W.isString(t) && ((n && !this.responseType) || a)) {
          const s = !(r && r.silentJSONParsing) && a
          try {
            return JSON.parse(t)
          } catch (o) {
            if (s)
              throw o.name === 'SyntaxError'
                ? Ae.from(o, Ae.ERR_BAD_RESPONSE, this, null, this.response)
                : o
          }
        }
        return t
      }
    ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: dr.classes.FormData, Blob: dr.classes.Blob },
    validateStatus: function (t) {
      return t >= 200 && t < 300
    },
    headers: { common: { Accept: 'application/json, text/plain, */*' } }
  }
  W.forEach(['delete', 'get', 'head'], function (t) {
    us.headers[t] = {}
  }),
    W.forEach(['post', 'put', 'patch'], function (t) {
      us.headers[t] = W.merge(TO)
    })
  const uo = us,
    SO = W.toObjectSet([
      'age',
      'authorization',
      'content-length',
      'content-type',
      'etag',
      'expires',
      'from',
      'host',
      'if-modified-since',
      'if-unmodified-since',
      'last-modified',
      'location',
      'max-forwards',
      'proxy-authorization',
      'referer',
      'retry-after',
      'user-agent'
    ]),
    yO = e => {
      const t = {}
      let r, n, a
      return (
        e &&
          e
            .split(
              `
`
            )
            .forEach(function (s) {
              ;(a = s.indexOf(':')),
                (r = s.substring(0, a).trim().toLowerCase()),
                (n = s.substring(a + 1).trim()),
                !(!r || (t[r] && SO[r])) &&
                  (r === 'set-cookie'
                    ? t[r]
                      ? t[r].push(n)
                      : (t[r] = [n])
                    : (t[r] = t[r] ? t[r] + ', ' + n : n))
            }),
        t
      )
    },
    Ah = Symbol('internals')
  function Xa(e) {
    return e && String(e).trim().toLowerCase()
  }
  function hs(e) {
    return e === !1 || e == null ? e : W.isArray(e) ? e.map(hs) : String(e)
  }
  function AO(e) {
    const t = Object.create(null),
      r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
    let n
    for (; (n = r.exec(e)); ) t[n[1]] = n[2]
    return t
  }
  function OO(e) {
    return /^[-_a-zA-Z]+$/.test(e.trim())
  }
  function ho(e, t, r, n, a) {
    if (W.isFunction(n)) return n.call(this, t, r)
    if ((a && (t = r), !!W.isString(t))) {
      if (W.isString(n)) return t.indexOf(n) !== -1
      if (W.isRegExp(n)) return n.test(t)
    }
  }
  function FO(e) {
    return e
      .trim()
      .toLowerCase()
      .replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n)
  }
  function CO(e, t) {
    const r = W.toCamelCase(' ' + t)
    ;['get', 'set', 'has'].forEach(n => {
      Object.defineProperty(e, n + r, {
        value: function (a, i, s) {
          return this[n].call(this, t, a, i, s)
        },
        configurable: !0
      })
    })
  }
  class ds {
    constructor(t) {
      t && this.set(t)
    }
    set(t, r, n) {
      const a = this
      function i(o, l, f) {
        const c = Xa(l)
        if (!c) throw new Error('header name must be a non-empty string')
        const u = W.findKey(a, c)
        ;(!u || a[u] === void 0 || f === !0 || (f === void 0 && a[u] !== !1)) && (a[u || l] = hs(o))
      }
      const s = (o, l) => W.forEach(o, (f, c) => i(f, c, l))
      return (
        W.isPlainObject(t) || t instanceof this.constructor
          ? s(t, r)
          : W.isString(t) && (t = t.trim()) && !OO(t)
          ? s(yO(t), r)
          : t != null && i(r, t, n),
        this
      )
    }
    get(t, r) {
      if (((t = Xa(t)), t)) {
        const n = W.findKey(this, t)
        if (n) {
          const a = this[n]
          if (!r) return a
          if (r === !0) return AO(a)
          if (W.isFunction(r)) return r.call(this, a, n)
          if (W.isRegExp(r)) return r.exec(a)
          throw new TypeError('parser must be boolean|regexp|function')
        }
      }
    }
    has(t, r) {
      if (((t = Xa(t)), t)) {
        const n = W.findKey(this, t)
        return !!(n && this[n] !== void 0 && (!r || ho(this, this[n], n, r)))
      }
      return !1
    }
    delete(t, r) {
      const n = this
      let a = !1
      function i(s) {
        if (((s = Xa(s)), s)) {
          const o = W.findKey(n, s)
          o && (!r || ho(n, n[o], o, r)) && (delete n[o], (a = !0))
        }
      }
      return W.isArray(t) ? t.forEach(i) : i(t), a
    }
    clear(t) {
      const r = Object.keys(this)
      let n = r.length,
        a = !1
      for (; n--; ) {
        const i = r[n]
        ;(!t || ho(this, this[i], i, t, !0)) && (delete this[i], (a = !0))
      }
      return a
    }
    normalize(t) {
      const r = this,
        n = {}
      return (
        W.forEach(this, (a, i) => {
          const s = W.findKey(n, i)
          if (s) {
            ;(r[s] = hs(a)), delete r[i]
            return
          }
          const o = t ? FO(i) : String(i).trim()
          o !== i && delete r[i], (r[o] = hs(a)), (n[o] = !0)
        }),
        this
      )
    }
    concat(...t) {
      return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
      const r = Object.create(null)
      return (
        W.forEach(this, (n, a) => {
          n != null && n !== !1 && (r[a] = t && W.isArray(n) ? n.join(', ') : n)
        }),
        r
      )
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
      return Object.entries(this.toJSON()).map(([t, r]) => t + ': ' + r).join(`
`)
    }
    get [Symbol.toStringTag]() {
      return 'AxiosHeaders'
    }
    static from(t) {
      return t instanceof this ? t : new this(t)
    }
    static concat(t, ...r) {
      const n = new this(t)
      return r.forEach(a => n.set(a)), n
    }
    static accessor(t) {
      const n = (this[Ah] = this[Ah] = { accessors: {} }).accessors,
        a = this.prototype
      function i(s) {
        const o = Xa(s)
        n[o] || (CO(a, s), (n[o] = !0))
      }
      return W.isArray(t) ? t.forEach(i) : i(t), this
    }
  }
  ds.accessor([
    'Content-Type',
    'Content-Length',
    'Accept',
    'Accept-Encoding',
    'User-Agent',
    'Authorization'
  ]),
    W.freezeMethods(ds.prototype),
    W.freezeMethods(ds)
  const Pr = ds
  function po(e, t) {
    const r = this || uo,
      n = t || r,
      a = Pr.from(n.headers)
    let i = n.data
    return (
      W.forEach(e, function (o) {
        i = o.call(r, i, a.normalize(), t ? t.status : void 0)
      }),
      a.normalize(),
      i
    )
  }
  function Oh(e) {
    return !!(e && e.__CANCEL__)
  }
  function Ka(e, t, r) {
    Ae.call(this, e == null ? 'canceled' : e, Ae.ERR_CANCELED, t, r), (this.name = 'CanceledError')
  }
  W.inherits(Ka, Ae, { __CANCEL__: !0 })
  function DO(e, t, r) {
    const n = r.config.validateStatus
    !r.status || !n || n(r.status)
      ? e(r)
      : t(
          new Ae(
            'Request failed with status code ' + r.status,
            [Ae.ERR_BAD_REQUEST, Ae.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
            r.config,
            r.request,
            r
          )
        )
  }
  const kO = dr.isStandardBrowserEnv
    ? (function () {
        return {
          write: function (r, n, a, i, s, o) {
            const l = []
            l.push(r + '=' + encodeURIComponent(n)),
              W.isNumber(a) && l.push('expires=' + new Date(a).toGMTString()),
              W.isString(i) && l.push('path=' + i),
              W.isString(s) && l.push('domain=' + s),
              o === !0 && l.push('secure'),
              (document.cookie = l.join('; '))
          },
          read: function (r) {
            const n = document.cookie.match(new RegExp('(^|;\\s*)(' + r + ')=([^;]*)'))
            return n ? decodeURIComponent(n[3]) : null
          },
          remove: function (r) {
            this.write(r, '', Date.now() - 864e5)
          }
        }
      })()
    : (function () {
        return {
          write: function () {},
          read: function () {
            return null
          },
          remove: function () {}
        }
      })()
  function RO(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
  }
  function NO(e, t) {
    return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e
  }
  function Fh(e, t) {
    return e && !RO(t) ? NO(e, t) : t
  }
  const PO = dr.isStandardBrowserEnv
    ? (function () {
        const t = /(msie|trident)/i.test(navigator.userAgent),
          r = document.createElement('a')
        let n
        function a(i) {
          let s = i
          return (
            t && (r.setAttribute('href', s), (s = r.href)),
            r.setAttribute('href', s),
            {
              href: r.href,
              protocol: r.protocol ? r.protocol.replace(/:$/, '') : '',
              host: r.host,
              search: r.search ? r.search.replace(/^\?/, '') : '',
              hash: r.hash ? r.hash.replace(/^#/, '') : '',
              hostname: r.hostname,
              port: r.port,
              pathname: r.pathname.charAt(0) === '/' ? r.pathname : '/' + r.pathname
            }
          )
        }
        return (
          (n = a(window.location.href)),
          function (s) {
            const o = W.isString(s) ? a(s) : s
            return o.protocol === n.protocol && o.host === n.host
          }
        )
      })()
    : (function () {
        return function () {
          return !0
        }
      })()
  function IO(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
    return (t && t[1]) || ''
  }
  function MO(e, t) {
    e = e || 10
    const r = new Array(e),
      n = new Array(e)
    let a = 0,
      i = 0,
      s
    return (
      (t = t !== void 0 ? t : 1e3),
      function (l) {
        const f = Date.now(),
          c = n[i]
        s || (s = f), (r[a] = l), (n[a] = f)
        let u = i,
          h = 0
        for (; u !== a; ) (h += r[u++]), (u = u % e)
        if (((a = (a + 1) % e), a === i && (i = (i + 1) % e), f - s < t)) return
        const p = c && f - c
        return p ? Math.round((h * 1e3) / p) : void 0
      }
    )
  }
  function Ch(e, t) {
    let r = 0
    const n = MO(50, 250)
    return a => {
      const i = a.loaded,
        s = a.lengthComputable ? a.total : void 0,
        o = i - r,
        l = n(o),
        f = i <= s
      r = i
      const c = {
        loaded: i,
        total: s,
        progress: s ? i / s : void 0,
        bytes: o,
        rate: l || void 0,
        estimated: l && s && f ? (s - i) / l : void 0,
        event: a
      }
      ;(c[t ? 'download' : 'upload'] = !0), e(c)
    }
  }
  const ps = {
    http: fO,
    xhr:
      typeof XMLHttpRequest < 'u' &&
      function (e) {
        return new Promise(function (r, n) {
          let a = e.data
          const i = Pr.from(e.headers).normalize(),
            s = e.responseType
          let o
          function l() {
            e.cancelToken && e.cancelToken.unsubscribe(o),
              e.signal && e.signal.removeEventListener('abort', o)
          }
          W.isFormData(a) &&
            (dr.isStandardBrowserEnv || dr.isStandardBrowserWebWorkerEnv) &&
            i.setContentType(!1)
          let f = new XMLHttpRequest()
          if (e.auth) {
            const p = e.auth.username || '',
              m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : ''
            i.set('Authorization', 'Basic ' + btoa(p + ':' + m))
          }
          const c = Fh(e.baseURL, e.url)
          f.open(e.method.toUpperCase(), Th(c, e.params, e.paramsSerializer), !0),
            (f.timeout = e.timeout)
          function u() {
            if (!f) return
            const p = Pr.from('getAllResponseHeaders' in f && f.getAllResponseHeaders()),
              d = {
                data: !s || s === 'text' || s === 'json' ? f.responseText : f.response,
                status: f.status,
                statusText: f.statusText,
                headers: p,
                config: e,
                request: f
              }
            DO(
              function (A) {
                r(A), l()
              },
              function (A) {
                n(A), l()
              },
              d
            ),
              (f = null)
          }
          if (
            ('onloadend' in f
              ? (f.onloadend = u)
              : (f.onreadystatechange = function () {
                  !f ||
                    f.readyState !== 4 ||
                    (f.status === 0 && !(f.responseURL && f.responseURL.indexOf('file:') === 0)) ||
                    setTimeout(u)
                }),
            (f.onabort = function () {
              !f || (n(new Ae('Request aborted', Ae.ECONNABORTED, e, f)), (f = null))
            }),
            (f.onerror = function () {
              n(new Ae('Network Error', Ae.ERR_NETWORK, e, f)), (f = null)
            }),
            (f.ontimeout = function () {
              let m = e.timeout ? 'timeout of ' + e.timeout + 'ms exceeded' : 'timeout exceeded'
              const d = e.transitional || Sh
              e.timeoutErrorMessage && (m = e.timeoutErrorMessage),
                n(new Ae(m, d.clarifyTimeoutError ? Ae.ETIMEDOUT : Ae.ECONNABORTED, e, f)),
                (f = null)
            }),
            dr.isStandardBrowserEnv)
          ) {
            const p = (e.withCredentials || PO(c)) && e.xsrfCookieName && kO.read(e.xsrfCookieName)
            p && i.set(e.xsrfHeaderName, p)
          }
          a === void 0 && i.setContentType(null),
            'setRequestHeader' in f &&
              W.forEach(i.toJSON(), function (m, d) {
                f.setRequestHeader(d, m)
              }),
            W.isUndefined(e.withCredentials) || (f.withCredentials = !!e.withCredentials),
            s && s !== 'json' && (f.responseType = e.responseType),
            typeof e.onDownloadProgress == 'function' &&
              f.addEventListener('progress', Ch(e.onDownloadProgress, !0)),
            typeof e.onUploadProgress == 'function' &&
              f.upload &&
              f.upload.addEventListener('progress', Ch(e.onUploadProgress)),
            (e.cancelToken || e.signal) &&
              ((o = p => {
                !f || (n(!p || p.type ? new Ka(null, e, f) : p), f.abort(), (f = null))
              }),
              e.cancelToken && e.cancelToken.subscribe(o),
              e.signal && (e.signal.aborted ? o() : e.signal.addEventListener('abort', o)))
          const h = IO(c)
          if (h && dr.protocols.indexOf(h) === -1) {
            n(new Ae('Unsupported protocol ' + h + ':', Ae.ERR_BAD_REQUEST, e))
            return
          }
          f.send(a || null)
        })
      }
  }
  W.forEach(ps, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, 'name', { value: t })
      } catch {}
      Object.defineProperty(e, 'adapterName', { value: t })
    }
  })
  const bO = {
    getAdapter: e => {
      e = W.isArray(e) ? e : [e]
      const { length: t } = e
      let r, n
      for (let a = 0; a < t && ((r = e[a]), !(n = W.isString(r) ? ps[r.toLowerCase()] : r)); a++);
      if (!n)
        throw n === !1
          ? new Ae(`Adapter ${r} is not supported by the environment`, 'ERR_NOT_SUPPORT')
          : new Error(
              W.hasOwnProp(ps, r)
                ? `Adapter '${r}' is not available in the build`
                : `Unknown adapter '${r}'`
            )
      if (!W.isFunction(n)) throw new TypeError('adapter is not a function')
      return n
    },
    adapters: ps
  }
  function xo(e) {
    if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted))
      throw new Ka(null, e)
  }
  function Dh(e) {
    return (
      xo(e),
      (e.headers = Pr.from(e.headers)),
      (e.data = po.call(e, e.transformRequest)),
      ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
        e.headers.setContentType('application/x-www-form-urlencoded', !1),
      bO
        .getAdapter(e.adapter || uo.adapter)(e)
        .then(
          function (n) {
            return (
              xo(e),
              (n.data = po.call(e, e.transformResponse, n)),
              (n.headers = Pr.from(n.headers)),
              n
            )
          },
          function (n) {
            return (
              Oh(n) ||
                (xo(e),
                n &&
                  n.response &&
                  ((n.response.data = po.call(e, e.transformResponse, n.response)),
                  (n.response.headers = Pr.from(n.response.headers)))),
              Promise.reject(n)
            )
          }
        )
    )
  }
  const kh = e => (e instanceof Pr ? e.toJSON() : e)
  function Zn(e, t) {
    t = t || {}
    const r = {}
    function n(f, c, u) {
      return W.isPlainObject(f) && W.isPlainObject(c)
        ? W.merge.call({ caseless: u }, f, c)
        : W.isPlainObject(c)
        ? W.merge({}, c)
        : W.isArray(c)
        ? c.slice()
        : c
    }
    function a(f, c, u) {
      if (W.isUndefined(c)) {
        if (!W.isUndefined(f)) return n(void 0, f, u)
      } else return n(f, c, u)
    }
    function i(f, c) {
      if (!W.isUndefined(c)) return n(void 0, c)
    }
    function s(f, c) {
      if (W.isUndefined(c)) {
        if (!W.isUndefined(f)) return n(void 0, f)
      } else return n(void 0, c)
    }
    function o(f, c, u) {
      if (u in t) return n(f, c)
      if (u in e) return n(void 0, f)
    }
    const l = {
      url: i,
      method: i,
      data: i,
      baseURL: s,
      transformRequest: s,
      transformResponse: s,
      paramsSerializer: s,
      timeout: s,
      timeoutMessage: s,
      withCredentials: s,
      adapter: s,
      responseType: s,
      xsrfCookieName: s,
      xsrfHeaderName: s,
      onUploadProgress: s,
      onDownloadProgress: s,
      decompress: s,
      maxContentLength: s,
      maxBodyLength: s,
      beforeRedirect: s,
      transport: s,
      httpAgent: s,
      httpsAgent: s,
      cancelToken: s,
      socketPath: s,
      responseEncoding: s,
      validateStatus: o,
      headers: (f, c) => a(kh(f), kh(c), !0)
    }
    return (
      W.forEach(Object.keys(e).concat(Object.keys(t)), function (c) {
        const u = l[c] || a,
          h = u(e[c], t[c], c)
        ;(W.isUndefined(h) && u !== o) || (r[c] = h)
      }),
      r
    )
  }
  const Rh = '1.3.4',
    mo = {}
  ;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
    mo[e] = function (n) {
      return typeof n === e || 'a' + (t < 1 ? 'n ' : ' ') + e
    }
  })
  const Nh = {}
  mo.transitional = function (t, r, n) {
    function a(i, s) {
      return '[Axios v' + Rh + "] Transitional option '" + i + "'" + s + (n ? '. ' + n : '')
    }
    return (i, s, o) => {
      if (t === !1)
        throw new Ae(a(s, ' has been removed' + (r ? ' in ' + r : '')), Ae.ERR_DEPRECATED)
      return (
        r &&
          !Nh[s] &&
          ((Nh[s] = !0),
          console.warn(
            a(s, ' has been deprecated since v' + r + ' and will be removed in the near future')
          )),
        t ? t(i, s, o) : !0
      )
    }
  }
  function LO(e, t, r) {
    if (typeof e != 'object') throw new Ae('options must be an object', Ae.ERR_BAD_OPTION_VALUE)
    const n = Object.keys(e)
    let a = n.length
    for (; a-- > 0; ) {
      const i = n[a],
        s = t[i]
      if (s) {
        const o = e[i],
          l = o === void 0 || s(o, i, e)
        if (l !== !0) throw new Ae('option ' + i + ' must be ' + l, Ae.ERR_BAD_OPTION_VALUE)
        continue
      }
      if (r !== !0) throw new Ae('Unknown option ' + i, Ae.ERR_BAD_OPTION)
    }
  }
  const _o = { assertOptions: LO, validators: mo },
    Zr = _o.validators
  class xs {
    constructor(t) {
      ;(this.defaults = t), (this.interceptors = { request: new Eh(), response: new Eh() })
    }
    request(t, r) {
      typeof t == 'string' ? ((r = r || {}), (r.url = t)) : (r = t || {}),
        (r = Zn(this.defaults, r))
      const { transitional: n, paramsSerializer: a, headers: i } = r
      n !== void 0 &&
        _o.assertOptions(
          n,
          {
            silentJSONParsing: Zr.transitional(Zr.boolean),
            forcedJSONParsing: Zr.transitional(Zr.boolean),
            clarifyTimeoutError: Zr.transitional(Zr.boolean)
          },
          !1
        ),
        a !== void 0 && _o.assertOptions(a, { encode: Zr.function, serialize: Zr.function }, !0),
        (r.method = (r.method || this.defaults.method || 'get').toLowerCase())
      let s
      ;(s = i && W.merge(i.common, i[r.method])),
        s &&
          W.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], m => {
            delete i[m]
          }),
        (r.headers = Pr.concat(s, i))
      const o = []
      let l = !0
      this.interceptors.request.forEach(function (d) {
        ;(typeof d.runWhen == 'function' && d.runWhen(r) === !1) ||
          ((l = l && d.synchronous), o.unshift(d.fulfilled, d.rejected))
      })
      const f = []
      this.interceptors.response.forEach(function (d) {
        f.push(d.fulfilled, d.rejected)
      })
      let c,
        u = 0,
        h
      if (!l) {
        const m = [Dh.bind(this), void 0]
        for (
          m.unshift.apply(m, o), m.push.apply(m, f), h = m.length, c = Promise.resolve(r);
          u < h;

        )
          c = c.then(m[u++], m[u++])
        return c
      }
      h = o.length
      let p = r
      for (u = 0; u < h; ) {
        const m = o[u++],
          d = o[u++]
        try {
          p = m(p)
        } catch (v) {
          d.call(this, v)
          break
        }
      }
      try {
        c = Dh.call(this, p)
      } catch (m) {
        return Promise.reject(m)
      }
      for (u = 0, h = f.length; u < h; ) c = c.then(f[u++], f[u++])
      return c
    }
    getUri(t) {
      t = Zn(this.defaults, t)
      const r = Fh(t.baseURL, t.url)
      return Th(r, t.params, t.paramsSerializer)
    }
  }
  W.forEach(['delete', 'get', 'head', 'options'], function (t) {
    xs.prototype[t] = function (r, n) {
      return this.request(Zn(n || {}, { method: t, url: r, data: (n || {}).data }))
    }
  }),
    W.forEach(['post', 'put', 'patch'], function (t) {
      function r(n) {
        return function (i, s, o) {
          return this.request(
            Zn(o || {}, {
              method: t,
              headers: n ? { 'Content-Type': 'multipart/form-data' } : {},
              url: i,
              data: s
            })
          )
        }
      }
      ;(xs.prototype[t] = r()), (xs.prototype[t + 'Form'] = r(!0))
    })
  const ms = xs
  class go {
    constructor(t) {
      if (typeof t != 'function') throw new TypeError('executor must be a function.')
      let r
      this.promise = new Promise(function (i) {
        r = i
      })
      const n = this
      this.promise.then(a => {
        if (!n._listeners) return
        let i = n._listeners.length
        for (; i-- > 0; ) n._listeners[i](a)
        n._listeners = null
      }),
        (this.promise.then = a => {
          let i
          const s = new Promise(o => {
            n.subscribe(o), (i = o)
          }).then(a)
          return (
            (s.cancel = function () {
              n.unsubscribe(i)
            }),
            s
          )
        }),
        t(function (i, s, o) {
          n.reason || ((n.reason = new Ka(i, s, o)), r(n.reason))
        })
    }
    throwIfRequested() {
      if (this.reason) throw this.reason
    }
    subscribe(t) {
      if (this.reason) {
        t(this.reason)
        return
      }
      this._listeners ? this._listeners.push(t) : (this._listeners = [t])
    }
    unsubscribe(t) {
      if (!this._listeners) return
      const r = this._listeners.indexOf(t)
      r !== -1 && this._listeners.splice(r, 1)
    }
    static source() {
      let t
      return {
        token: new go(function (a) {
          t = a
        }),
        cancel: t
      }
    }
  }
  const BO = go
  function UO(e) {
    return function (r) {
      return e.apply(null, r)
    }
  }
  function WO(e) {
    return W.isObject(e) && e.isAxiosError === !0
  }
  const vo = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
  }
  Object.entries(vo).forEach(([e, t]) => {
    vo[t] = e
  })
  const HO = vo
  function Ph(e) {
    const t = new ms(e),
      r = ah(ms.prototype.request, t)
    return (
      W.extend(r, ms.prototype, t, { allOwnKeys: !0 }),
      W.extend(r, t, null, { allOwnKeys: !0 }),
      (r.create = function (a) {
        return Ph(Zn(e, a))
      }),
      r
    )
  }
  const it = Ph(uo)
  ;(it.Axios = ms),
    (it.CanceledError = Ka),
    (it.CancelToken = BO),
    (it.isCancel = Oh),
    (it.VERSION = Rh),
    (it.toFormData = cs),
    (it.AxiosError = Ae),
    (it.Cancel = it.CanceledError),
    (it.all = function (t) {
      return Promise.all(t)
    }),
    (it.spread = UO),
    (it.isAxiosError = WO),
    (it.mergeConfig = Zn),
    (it.AxiosHeaders = Pr),
    (it.formToJSON = e => yh(W.isHTMLForm(e) ? new FormData(e) : e)),
    (it.HttpStatusCode = HO),
    (it.default = it)
  const wo = it.create({ baseURL: '/api' })
  wo.interceptors.request.use(
    function (e) {
      return e
    },
    function (e) {
      return Promise.reject(e)
    }
  ),
    wo.interceptors.response.use(
      function (e) {
        return e.data
      },
      function (e) {
        return e.response.data.msg, Promise.reject(e)
      }
    )
  class Xe {
    static isUndefinedOrNull(t) {
      return typeof t > 'u' || t === null
    }
    static isNullOrWhiteSpace(t) {
      return typeof t > 'u' || t === null || /^\s*$/.test(t)
    }
    static isZeroOrWhiteSpace(t) {
      return typeof t > 'u' || t === null
        ? !0
        : typeof t == 'string'
        ? /^\s*$/.test(t) || t === '0'
        : typeof t == 'number'
        ? t === 0
        : !1
    }
    static isGreaterOrEqualOne(t) {
      if (typeof t > 'u' || t === null) return !0
      if (typeof t == 'string') {
        if (((t = t.trim()), !/^(-?\d+\.\d+)$|^(-?\d+)$/.test(t) || t[0] === '-')) return !1
        let r
        if (t.length > 1) {
          const n = t.indexOf('.')
          n !== -1 ? (t = t.substring(n - 2 < 0 ? 0 : n - 2, n)) : (t = t.substring(t.length - 2)),
            t === '00' && (t = '10')
        }
        return (r = parseInt(t, 10)), isNaN(r) ? !1 : r >= 1
      } else return typeof t == 'number' ? t > 0 : !1
    }
    static isBoolean(t) {
      return t === !0 || t === !1
    }
    static isInt(t) {
      return Number(t) === t && t % 1 === 0
    }
    static isFloat(t) {
      return t === Number(t) && t % 1 !== 0
    }
    static isNumber(t) {
      return !isNaN(Number(t))
    }
    static isArray(t) {
      return Array.isArray(t)
    }
    static padLeft(t, r, n = '0') {
      return (Array(r).join(n) + t).substr(-r)
    }
    static objectLength(t) {
      return Reflect.ownKeys(t).length
    }
    static isDateStr(t) {
      return !!/((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0?[13578])([-\/\._])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0?[469])([-\/\._])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2 - 9]\d{3}))([-\/\._])(0?2)([-\/\._])(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2 - 9][0 - 9][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(0 ? 2)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(0?2)([-\/\._])(29)$))/gi.test(
        t
      )
    }
    static ConvertToBoolean(t) {
      return t == null ? !1 : t.toLowerCase() === 'true'
    }
    static IsNullOrEmpty(t) {
      return !(!Xe.isUndefinedOrNull(t) && t instanceof Array && t.length > 0)
    }
    static isTruth(t) {
      return typeof t < 'u' && t !== !1
    }
    static fixedZero(t) {
      return t * 1 < 10 ? `0${t}` : t
    }
    static isMobile(t, r = !1) {
      let n
      return (
        r
          ? (n = new RegExp(
              /^((13[0-9])|(14[5-9])|(15[0-3,5-9])|(16[2,5-7])|(17[0-8])|(18[0-9])|(19[0-3])|(19[5-9]))\d{8}$/
            ))
          : (n = new RegExp(
              /^((0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$|^((13[0-9])|(14[5-9])|(15[0-3,5-9])|(16[2,5-7])|(17[0-8])|(18[0-9])|(19[0-3])|(19[5-9]))\d{8}$|[1-9]\d{5}$/
            )),
        n.test(t)
      )
    }
    static isFunction(t) {
      return typeof t == 'function'
    }
    static intersection(t, r) {
      const n = []
      for (let a = 0; a < t.length; a++)
        for (let i = 0; i < r.length; i++)
          if (t[a] === r[i] && n.indexOf(t[a]) === -1) {
            n.push(t[a])
            break
          }
      return n
    }
    static union(t, r) {
      return [...t, ...r]
    }
    static distinct(t, r) {
      const n = t.concat(r),
        a = [],
        i = {}
      for (const s of n) i[s] || (a.push(s), (i[s] = 1))
      return a
    }
    static unique(t) {
      return Array.from(new Set(t))
    }
    static isIE() {
      return (
        window.ActiveXObject !== void 0 || window.ActiveXObject != null || 'ActiveXObject' in window
      )
    }
    static isEdge() {
      return !Xe.isIE() && !!window.StyleMedia
    }
    static toFriendlyString(t) {
      return Xe.isNullOrWhiteSpace(t) ||
        t.toString() === 'NaN' ||
        t.toString() === 'Infinity' ||
        t.toString() === 'Invalid Date' ||
        t.toString() === 'Invalid date'
        ? ''
        : t
    }
    static getUUID() {
      let t = new Date().getTime()
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (n) {
        const a = (t + Math.random() * 16) % 16 | 0
        return (t = Math.floor(t / 16)), (n === 'x' ? a : (a & 3) | 8).toString(16)
      })
    }
    static getOrigin() {
      return window.location.origin
        ? window.location.origin
        : window.location.protocol +
            '//' +
            window.location.hostname +
            (window.location.port ? ':' + window.location.port : '')
    }
    static getBaseHref() {
      const t = document.querySelector('base')
      return t ? t.getAttribute('href') : '/'
    }
    static getBaseUri() {
      return document.baseURI ? document.baseURI : this.getOrigin() + this.getBaseHref()
    }
    static inIframe() {
      try {
        return window.self !== window.top
      } catch {
        return !0
      }
    }
    static addIfNotExist(t, r) {
      return t.indexOf(r) === -1 && t.push(r), t
    }
    static escapeRegExp(t) {
      const n = RegExp(
        '[' +
          ['-', '[', ']', '/', '{', '}', '(', ')', '*', '+', '?', '.', '\\', '^', '$', '|'].join(
            '\\'
          ) +
          ']',
        'g'
      )
      return t.replace(n, '\\$&')
    }
    static trimEnd(t, r) {
      return (r = Xe.escapeRegExp(r)), t.replace(new RegExp(`${r}+$`, 'g'), '')
    }
    static trim(t, r) {
      return (r = Xe.escapeRegExp(r)), t.replace(new RegExp(`^${r}+`, 'g'), '')
    }
    static trimStart(t, r) {
      return (r = Xe.escapeRegExp(r)), t.replace(new RegExp(`^${r}+|${r}+$`, 'g'), '')
    }
    static isPromise(t) {
      return !!t && typeof t.then == 'function' && typeof t.catch == 'function'
    }
    static prepend(t, r) {
      return t.startsWith(r) ? t : r + t
    }
    static base64Encode(t) {
      return Xe.isNullOrWhiteSpace(t) ? null : btoa(encodeURIComponent(t))
    }
    static base64Decode(t) {
      if (Xe.isNullOrWhiteSpace(t)) return null
      try {
        return decodeURIComponent(atob(t))
      } catch {
        return null
      }
    }
    static encodeURIComponent(t) {
      return Xe.isNullOrWhiteSpace(t) ? null : encodeURIComponent(t)
    }
    static decodeURIComponent(t) {
      return Xe.isNullOrWhiteSpace(t) ? null : decodeURIComponent(t)
    }
    static lowerCaseTheFirstLetter(t) {
      return Xe.isNullOrWhiteSpace(t) ? null : t[0].toLowerCase() + t.slice(1)
    }
    static getRandomInt(t, r) {
      return Math.floor(Math.random() * (r - t + 1)) + t
    }
    static getHex() {
      let t = 0
      for (let r = 4; r > 0; r--) t = (Xe.getRandomInt(0, 1) << (r - 1)) + t
      return t.toString(16)
    }
    static getOTP(t) {
      const r = []
      for (let n = 0; n < t; n++) r.push(Xe.getHex())
      return r.join('')
    }
    static getTimeStampInSecond() {
      return Math.round(Date.now() / 1e3)
    }
  }
  var Tn = (e => (
    (e[(e.string = 0)] = 'string'),
    (e[(e.text = 1)] = 'text'),
    (e[(e.boolean = 2)] = 'boolean'),
    (e[(e.int = 3)] = 'int'),
    (e[(e.long = 4)] = 'long'),
    (e[(e.float = 5)] = 'float'),
    (e[(e.enum = 6)] = 'enum'),
    (e[(e.date = 7)] = 'date'),
    (e[(e.static = 8)] = 'static'),
    (e[(e.checkbox = 9)] = 'checkbox'),
    (e[(e.radio = 10)] = 'radio'),
    (e[(e.button = 11)] = 'button'),
    (e[(e.group = 12)] = 'group'),
    (e[(e.template = 13)] = 'template'),
    (e[(e.file = 14)] = 'file'),
    (e[(e.right = 15)] = 'right'),
    (e[(e.singleUser = 16)] = 'singleUser'),
    (e[(e.multiUser = 17)] = 'multiUser'),
    (e[(e.singleOrganize = 18)] = 'singleOrganize'),
    (e[(e.multiOrganize = 19)] = 'multiOrganize'),
    e
  ))(Tn || {})
  class Qn {
    constructor(t) {
      xe(this, 'type')
      xe(this, 'index')
      xe(this, 'label')
      xe(this, 'columnKey')
      xe(this, 'prop')
      xe(this, 'width')
      xe(this, 'minWidth')
      xe(this, 'filters')
      xe(this, 'filterPlacement', 'bottom')
      xe(this, 'filterMultiple', !0)
      xe(this, 'filteredValue')
      xe(this, 'align', 'left')
      xe(this, 'sortable')
      xe(this, 'resizable', !0)
      xe(this, 'headerAlign')
      xe(this, 'className')
      xe(this, 'labelClassName')
      xe(this, 'slot')
      xe(this, 'isShowHeader', !1)
      xe(this, 'action', !1)
      xe(this, 'fixed')
      xe(this, 'editable', !1)
      xe(this, 'editIcon', 'Edit')
      xe(this, 'simpleSearch', !0)
      xe(this, 'advSearch', !0)
      xe(this, 'advSearchType', Tn.string)
      xe(this, 'isEllipsis', !1)
      xe(this, 'showOverFlowTooltip', !1)
      xe(this, 'sortOrders', ['ascending', 'descending', null])
      xe(this, 'reserveSelection', !1)
      xe(this, 'sortBy')
      xe(this, 'formatter')
      xe(this, 'renderHeader')
      xe(this, 'selectable')
      xe(this, 'sortMethod')
      xe(this, 'filterMethod')
      t && Object.assign(this, t)
    }
  }
  class YO extends Qn {
    constructor(r) {
      super()
      xe(this, 'buttons', [])
      xe(this, 'onlyText', !1)
      xe(this, 'showMenu', !1)
      r && Object.assign(this, r),
        (this.sortable = !1),
        (this.action = !0),
        (this.advSearch = !1),
        Xe.isNullOrWhiteSpace(this.label) && (this.label = '\u64CD\u4F5C'),
        Xe.isZeroOrWhiteSpace(this.width) &&
          !Xe.IsNullOrEmpty(this.buttons) &&
          (this.onlyText
            ? (this.width = 40 * this.buttons.length + 'px')
            : (this.width = 46 * this.buttons.length + 'px'))
    }
  }
  class Ih extends Qn {
    constructor(r) {
      super()
      xe(this, 'formatString', 'YYYY/MM/DD HH:mm')
      r && Object.assign(this, r),
        (this.advSearchType = Tn.date),
        Xe.isZeroOrWhiteSpace(this.width) && (this.width = '145px')
    }
  }
  class Mh extends Qn {
    constructor(r) {
      super()
      xe(this, 'enumOptions')
      xe(this, 'multiple', !1)
      r && Object.assign(this, r),
        (this.advSearchType = Tn.enum),
        Xe.isZeroOrWhiteSpace(this.width) && (this.width = '142px')
    }
  }
  class $O extends Qn {
    constructor(r) {
      super()
      xe(this, 'ellipsisRows', 1)
      xe(this, 'copyable')
      xe(this, 'expandable')
      r && Object.assign(this, r), (this.advSearchType = Tn.float)
    }
  }
  class jO extends Qn {
    constructor(r) {
      super()
      xe(this, 'ellipsisRows', 1)
      xe(this, 'copyable')
      xe(this, 'expandable')
      r && Object.assign(this, r), (this.advSearchType = Tn.int)
    }
  }
  class VO extends Qn {
    constructor(r) {
      super()
      xe(this, 'ellipsisRows', 1)
      xe(this, 'copyable')
      xe(this, 'expandable')
      ;(this.advSearchType = Tn.string), r && Object.assign(this, r)
    }
  }
  const To = e =>
      e instanceof Ih && Xe.isUndefinedOrNull(e.slot)
        ? 'datetime'
        : e instanceof YO && Xe.isUndefinedOrNull(e.slot)
        ? 'button'
        : e instanceof Mh && Xe.isUndefinedOrNull(e.slot)
        ? 'enum'
        : e.formatter
        ? 'formatter'
        : e.slot
        ? 'slot'
        : 'normal',
    bh = e => {
      if (e instanceof VO) return 'string'
      if (e instanceof Ih) return 'datetime'
      if (e instanceof jO) return 'int'
      if (e instanceof $O) return 'float'
      if (e instanceof Mh) return 'enum'
    },
    GO = () => {
      const e = q().subtract(1, 'day'),
        t = q().subtract(1, 'week'),
        r = q().subtract(1, 'month'),
        n = q().subtract(1, 'quarter'),
        a = q().subtract(1, 'year')
      return [
        { text: '\u4ECA\u5929', value: () => [q().toDate(), q().toDate()] },
        { text: '\u6628\u5929', value: () => [e.toDate(), e.toDate()] },
        {
          text: '\u672C\u5468',
          value: () => [q().startOf('week').toDate(), q().endOf('week').toDate()]
        },
        {
          text: '\u4E0B\u5468',
          value: () => [t.startOf('week').toDate(), t.endOf('week').toDate()]
        },
        {
          text: '\u672C\u6708',
          value: () => [q().startOf('month').toDate(), q().endOf('month').toDate()]
        },
        {
          text: '\u4E0A\u6708',
          value: () => [r.startOf('month').toDate(), r.endOf('month').toDate()]
        },
        {
          text: '\u672C\u5B63',
          value: () => [q().startOf('quarter').toDate(), q().endOf('quarter').toDate()]
        },
        {
          text: '\u4E0A\u5B63',
          value: () => [n.startOf('quarter').toDate(), n.endOf('quarter').toDate()]
        },
        {
          text: '\u672C\u5E74',
          value: () => [q().startOf('year').toDate(), q().endOf('year').toDate()]
        },
        {
          text: '\u672C\u5E74',
          value: () => [a.startOf('year').toDate(), a.endOf('year').toDate()]
        }
      ]
    },
    zO = [
      { label: '\u5305\u542B', value: 'contains' },
      { label: '\u4E0D\u5305\u542B', value: 'doesnotcontain' },
      { label: '=', value: 'eq' },
      { label: '!=', value: 'neq' }
    ],
    XO = [
      { value: 'day', label: '\u4ECA\u5929' },
      { value: 'preDay', label: '\u6628\u5929' },
      { value: 'week', label: '\u672C\u5468' },
      { value: 'preWeek', label: '\u4E0A\u5468' },
      { value: 'month', label: '\u672C\u6708' },
      { value: 'preMonth', label: '\u4E0A\u6708' },
      { value: 'quarter', label: '\u672C\u5B63\u5EA6' },
      { value: 'preQuarter', label: '\u4E0A\u5B63\u5EA6' },
      { value: 'year', label: '\u672C\u5E74' },
      { value: 'preYear', label: '\u4E0A\u4E00\u5E74' }
    ],
    KO = { key: 0, class: 'flex' },
    qO = g.defineComponent({
      __name: 'AdvSearchForm',
      props: { advSearchColumn: { type: Array, required: !0 } },
      setup(e) {
        const t = e
        let r = aa(() => t.advSearchColumn),
          n = () => {
            const l = window.innerWidth
            let f = 3
            return l >= 1200 ? (f = 3) : l >= 768 && l < 1200 ? (f = 2) : l < 768 && (f = 1), f
          },
          a = g.reactive({}),
          i = g.ref(null),
          s = g.ref(),
          o = g.ref(GO())
        return (l, f) => {
          const c = g.resolveComponent('el-option'),
            u = g.resolveComponent('el-select'),
            h = g.resolveComponent('el-date-picker'),
            p = g.resolveComponent('el-input'),
            m = g.resolveComponent('el-col'),
            d = g.resolveComponent('el-row'),
            v = g.resolveComponent('el-form')
          return g.unref(a)
            ? (g.openBlock(),
              g.createBlock(
                v,
                g.mergeProps({ key: 0, 'validate-on-rule-change': !1 }, l.$attrs, {
                  model: g.unref(a),
                  rules: g.unref(i),
                  ref_key: 'form',
                  ref: s
                }),
                {
                  default: g.withCtx(() => [
                    g.createVNode(
                      d,
                      { gutter: 20 },
                      {
                        default: g.withCtx(() => [
                          (g.openBlock(!0),
                          g.createElementBlock(
                            g.Fragment,
                            null,
                            g.renderList(
                              g.unref(r),
                              A => (
                                g.openBlock(),
                                g.createBlock(
                                  m,
                                  { span: 24 / g.unref(n)(), offset: 0 },
                                  {
                                    default: g.withCtx(() => [
                                      A.prop
                                        ? (g.openBlock(),
                                          g.createElementBlock(
                                            g.Fragment,
                                            { key: 0 },
                                            [
                                              g.unref(bh)(A) === 'datetime'
                                                ? (g.openBlock(),
                                                  g.createElementBlock('div', KO, [
                                                    g.createVNode(
                                                      u,
                                                      {
                                                        placeholder: 'Select',
                                                        style: { width: '50px' }
                                                      },
                                                      {
                                                        default: g.withCtx(() => [
                                                          (g.openBlock(!0),
                                                          g.createElementBlock(
                                                            g.Fragment,
                                                            null,
                                                            g.renderList(
                                                              g.unref(XO),
                                                              F => (
                                                                g.openBlock(),
                                                                g.createBlock(
                                                                  c,
                                                                  {
                                                                    label: F.label,
                                                                    value: F.value
                                                                  },
                                                                  null,
                                                                  8,
                                                                  ['label', 'value']
                                                                )
                                                              )
                                                            ),
                                                            256
                                                          ))
                                                        ]),
                                                        _: 1
                                                      }
                                                    ),
                                                    g.createVNode(
                                                      h,
                                                      {
                                                        modelValue: g.unref(a)[A.prop],
                                                        'onUpdate:modelValue': F =>
                                                          (g.unref(a)[A.prop] = F),
                                                        type: 'daterange',
                                                        'unlink-panels': '',
                                                        'range-separator': 'To',
                                                        'start-placeholder': 'Start date',
                                                        'end-placeholder': 'End date',
                                                        shortcuts: g.unref(o)
                                                      },
                                                      null,
                                                      8,
                                                      [
                                                        'modelValue',
                                                        'onUpdate:modelValue',
                                                        'shortcuts'
                                                      ]
                                                    )
                                                  ]))
                                                : g.unref(bh)(A) === 'enum'
                                                ? (g.openBlock(),
                                                  g.createBlock(
                                                    u,
                                                    {
                                                      key: 1,
                                                      modelValue: g.unref(a)[A.prop],
                                                      'onUpdate:modelValue': F =>
                                                        (g.unref(a)[A.prop] = F),
                                                      class: 'm-2',
                                                      placeholder: 'Select'
                                                    },
                                                    null,
                                                    8,
                                                    ['modelValue', 'onUpdate:modelValue']
                                                  ))
                                                : (g.openBlock(),
                                                  g.createBlock(
                                                    p,
                                                    {
                                                      key: 2,
                                                      modelValue:
                                                        g.unref(a)[A == null ? void 0 : A.prop],
                                                      'onUpdate:modelValue': F =>
                                                        (g.unref(a)[A == null ? void 0 : A.prop] =
                                                          F)
                                                    },
                                                    {
                                                      prepend: g.withCtx(() => [
                                                        g.createVNode(
                                                          u,
                                                          {
                                                            placeholder: 'Select',
                                                            style: { width: '115px' }
                                                          },
                                                          {
                                                            default: g.withCtx(() => [
                                                              (g.openBlock(!0),
                                                              g.createElementBlock(
                                                                g.Fragment,
                                                                null,
                                                                g.renderList(
                                                                  g.unref(zO),
                                                                  F => (
                                                                    g.openBlock(),
                                                                    g.createBlock(
                                                                      c,
                                                                      {
                                                                        label: F.label,
                                                                        value: F.value
                                                                      },
                                                                      null,
                                                                      8,
                                                                      ['label', 'value']
                                                                    )
                                                                  )
                                                                ),
                                                                256
                                                              ))
                                                            ]),
                                                            _: 1
                                                          }
                                                        )
                                                      ]),
                                                      _: 2
                                                    },
                                                    1032,
                                                    ['modelValue', 'onUpdate:modelValue']
                                                  ))
                                            ],
                                            64
                                          ))
                                        : g.createCommentVNode('', !0)
                                    ]),
                                    _: 2
                                  },
                                  1032,
                                  ['span']
                                )
                              )
                            ),
                            256
                          ))
                        ]),
                        _: 1
                      }
                    )
                  ]),
                  _: 1
                },
                16,
                ['model', 'rules']
              ))
            : g.createCommentVNode('', !0)
        }
      }
    }),
    JO = e => (g.pushScopeId('data-v-23759822'), (e = e()), g.popScopeId(), e),
    ZO = { class: 'flex items-center justify-end mb-2' },
    QO = { class: 'flex justify-between mb-2' },
    eF = { style: { 'margin-left': 'auto' }, class: 'flex' },
    tF = { key: 0, class: 'flex' },
    rF = { key: 0, style: { display: 'flex' } },
    nF = { key: 1, class: 'action-icon' },
    aF = { key: 1 },
    iF = { class: 'table-empty' },
    sF = JO(() => g.createElementVNode('div', null, '\u6682\u65E0\u6570\u636E', -1)),
    oF = g.defineComponent({
      __name: 'index',
      props: {
        columns: { type: Array, required: !0 },
        data: { type: Array, default: [] },
        reload: { type: Boolean, default: !1 },
        options: { type: Object, required: !0 },
        editRowIndex: { type: String, default: '' },
        isEditRow: { type: Boolean, default: !1 },
        beforeRequest: { type: Function, default: e => e },
        afterRequest: { type: Function, default: e => e }
      },
      emits: [
        'confirm',
        'cancel',
        'update:editRowIndex',
        'size-change',
        'refresh',
        'current-change',
        'before-request',
        'after-request'
      ],
      setup(e, { emit: t }) {
        const r = e
        let n = g.ref(!1),
          a = g.ref(!1),
          i = aa(() => r.columns.filter(te => te.advSearch)),
          s = aa(() => r.columns),
          o = aa(() => r.options),
          l = Os({
            currentPage: o.value.currentPage,
            pageSize: o.value.pageSize,
            pageSizes: o.value.pageSizes,
            total: o.value.total
          }),
          f = g.ref(''),
          c = g.ref(''),
          u = g.ref('\u6A21\u7CCA\u641C\u7D22'),
          h = aa(() =>
            o.value.paginationAlign === 'left'
              ? 'flex-start'
              : o.value.paginationAlign === 'right'
              ? 'flex-end'
              : 'center'
          ),
          p = g.ref(r != null && r.data ? Nm(r.data) : []),
          m = g.ref(r.editRowIndex),
          d = g.ref(!1),
          v = g.watch(
            () => r.data,
            te => {
              if (te.length > 0 || Xe.IsNullOrEmpty(te)) {
                F()
                return
              }
              ;(n.value = !te || !te.length),
                (d.value = !0),
                (p.value = te),
                (l.total = te == null ? void 0 : te.length),
                p.value.map(Se => {
                  Se.rowEdit = !1
                }),
                d.value && v()
            },
            { deep: !0 }
          )
        g.watch(
          () => r.editRowIndex,
          te => {
            te && (m.value = te)
          }
        ),
          g.watch(
            () => r.reload,
            te => {
              te && F()
            }
          )
        const A = r.beforeRequest()
        function F() {
          n.value = !0
          const te = A || { currentPage: l.currentPage, pageSize: l.pageSize, filters: '' },
            { url: Se } = o.value
          Se
            ? wo.post(Se, te).then(ye => {
                ;(p.value = ye.Data.Data), (l.total = ye.Data.Total), (n.value = !1)
              })
            : (n.value = !1)
        }
        g.onBeforeMount(() => {
          Xe.IsNullOrEmpty(r.data) && F()
        }),
          g.onMounted(() => {
            p.value.map(te => {
              te.rowEdit = !1
            })
          })
        let C = te => {
            t('confirm', te), (f.value = '')
          },
          L = te => {
            t('cancel', te), (f.value = '')
          },
          Z = te => {
            t('size-change', te), (l.pageSize = te), k()
          },
          ie = te => {
            t('current-change', te), (l.currentPage = te), k()
          }
        function k() {
          F()
        }
        let H = te => {
            f.value = te.$index + te.column.id
          },
          b = (te, Se) => {
            Se.property === 'buttons' &&
              r.isEditRow &&
              m.value === r.editRowIndex &&
              ((te.rowEdit = !te.rowEdit),
              p.value.map(ye => {
                ye !== te && (ye.rowEdit = !1)
              }),
              te.rowEdit || t('update:editRowIndex', ''))
          }
        const V = () => {
          var ot
          const te = s.value.map(ft => ft.label),
            Se = s.value.map(ft => ft.prop),
            ye = G(Se)
          y3(te, ye, (ot = o.value.exportOption) == null ? void 0 : ot.Name, 'xlsx', !0)
        }
        function G(te) {
          return p.value.map(ye => te.map(ot => ye[ot]))
        }
        g.ref([
          {
            type: 'row',
            rowGutter: 20,
            cols: [
              {
                type: 'input',
                value: '',
                label: '\u7528\u6237\u540D',
                prop: 'username',
                placeholder: '\u8BF7\u8F93\u5165\u7528\u6237\u540D',
                rules: [
                  {
                    required: !0,
                    message: '\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A',
                    trigger: 'blur'
                  },
                  {
                    min: 2,
                    max: 6,
                    message: '\u7528\u6237\u540D\u57282-6\u4F4D\u4E4B\u95F4',
                    trigger: 'blur'
                  }
                ],
                attrs: { clearable: !0 },
                colOption: { offset: 0, span: 12 }
              },
              {
                type: 'input',
                value: '',
                label: '\u7528\u6237\u540D',
                prop: 'username',
                placeholder: '\u8BF7\u8F93\u5165\u7528\u6237\u540D',
                rules: [
                  {
                    required: !0,
                    message: '\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A',
                    trigger: 'blur'
                  },
                  {
                    min: 2,
                    max: 6,
                    message: '\u7528\u6237\u540D\u57282-6\u4F4D\u4E4B\u95F4',
                    trigger: 'blur'
                  }
                ],
                attrs: { clearable: !0 },
                colOption: { offset: 0, span: 12 }
              }
            ]
          }
        ])
        const z = te => {
          te === 'refresh' && k()
        }
        let ae = g.ref()
        const Re = () => {
            ae.value && console.log(ae.value.getFormData())
          },
          me = () => {
            console.log(c.value)
          },
          st = () => {
            ae.value && ae.value.resetFields()
          }
        return (te, Se) => {
          var Oe, Kt, Ve, le, Dt
          const ye = g.resolveComponent('el-button'),
            ot = g.resolveComponent('lib-icon'),
            ft = g.resolveComponent('el-icon-morefilled'),
            y = g.resolveComponent('el-dropdown-item'),
            M = g.resolveComponent('el-dropdown-menu'),
            D = g.resolveComponent('el-dropdown'),
            O = g.resolveComponent('el-input'),
            j = g.resolveComponent('el-icon-arrowup'),
            ue = g.resolveComponent('el-icon-arrowdown'),
            he = g.resolveComponent('el-table-column'),
            ce = g.resolveComponent('el-icon-check'),
            ne = g.resolveComponent('el-icon-close'),
            be = g.resolveComponent('el-table'),
            Te = g.resolveComponent('el-pagination'),
            gt = g.resolveDirective('loading')
          return (
            g.openBlock(),
            g.createElementBlock(
              g.Fragment,
              null,
              [
                g.unref(o).simpleSearchEnable && g.unref(a)
                  ? (g.openBlock(),
                    g.createElementBlock(
                      g.Fragment,
                      { key: 0 },
                      [
                        g.createVNode(
                          qO,
                          { advSearchColumn: g.unref(i), ref: 'advSearchFormRef' },
                          null,
                          8,
                          ['advSearchColumn']
                        ),
                        g.createElementVNode('div', ZO, [
                          g.createVNode(
                            ye,
                            { type: 'primary', onClick: Re },
                            { default: g.withCtx(() => [g.createTextVNode('\u641C\u7D22')]), _: 1 }
                          ),
                          g.createVNode(
                            ye,
                            { onClick: st, class: 'ml-2' },
                            { default: g.withCtx(() => [g.createTextVNode('\u91CD\u7F6E')]), _: 1 }
                          )
                        ])
                      ],
                      64
                    ))
                  : g.createCommentVNode('', !0),
                g.createElementVNode('div', QO, [
                  g.createElementVNode('div', null, [
                    g.renderSlot(te.$slots, 'tablePrefix', {}, void 0, !0),
                    g.unref(o).exportEnable
                      ? (g.openBlock(),
                        g.createBlock(
                          ye,
                          {
                            key: 0,
                            type: 'default',
                            class: 'ml-sm',
                            onClick: Se[0] || (Se[0] = de => V())
                          },
                          {
                            default: g.withCtx(() => [
                              g.createVNode(ot, { name: 'iconfont icon-export mr-sm' }),
                              g.createTextVNode(' \u5BFC \u51FA ')
                            ]),
                            _: 1
                          }
                        ))
                      : g.createCommentVNode('', !0)
                  ]),
                  g.createElementVNode('div', eF, [
                    g.renderSlot(te.$slots, 'tableSuffix', {}, void 0, !0),
                    g.unref(o).simpleSearchEnable
                      ? (g.openBlock(),
                        g.createElementBlock('div', tF, [
                          g.createVNode(
                            D,
                            { class: 'mr-sm', onCommand: Se[1] || (Se[1] = de => z(de)) },
                            {
                              dropdown: g.withCtx(() => [
                                g.createVNode(M, null, {
                                  default: g.withCtx(() => [
                                    g.createVNode(
                                      y,
                                      { command: 'refresh' },
                                      {
                                        default: g.withCtx(() => [
                                          g.createTextVNode('\u5237\u65B0')
                                        ]),
                                        _: 1
                                      }
                                    ),
                                    g.createVNode(
                                      y,
                                      { command: 'tableSetting' },
                                      {
                                        default: g.withCtx(() => [
                                          g.createTextVNode(' \u5217\u8868\u8BBE\u7F6E ')
                                        ]),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  _: 1
                                })
                              ]),
                              default: g.withCtx(() => [
                                g.createVNode(
                                  ye,
                                  { type: 'default' },
                                  { default: g.withCtx(() => [g.createVNode(ft)]), _: 1 }
                                )
                              ]),
                              _: 1
                            }
                          ),
                          g.createVNode(
                            O,
                            {
                              modelValue: g.unref(c),
                              'onUpdate:modelValue':
                                Se[2] || (Se[2] = de => (g.isRef(c) ? (c.value = de) : (c = de))),
                              placeholder: g.unref(u),
                              'suffix-icon': g.unref(R3),
                              onKeyup: Se[3] || (Se[3] = g.withKeys(de => me(), ['enter']))
                            },
                            null,
                            8,
                            ['modelValue', 'placeholder', 'suffix-icon']
                          )
                        ]))
                      : g.createCommentVNode('', !0),
                    g.unref(o).advSearchEnable
                      ? (g.openBlock(),
                        g.createBlock(
                          ye,
                          {
                            key: 1,
                            type: 'primary',
                            text: '',
                            onClick:
                              Se[4] ||
                              (Se[4] = de =>
                                g.isRef(a) ? (a.value = !g.unref(a)) : (a = !g.unref(a)))
                          },
                          {
                            default: g.withCtx(() => [
                              g.createTextVNode(
                                g.toDisplayString(g.unref(a) ? '\u6536\u8D77' : '\u5C55\u5F00') +
                                  ' ',
                                1
                              ),
                              g.unref(a)
                                ? (g.openBlock(), g.createBlock(j, { key: 0 }))
                                : (g.openBlock(), g.createBlock(ue, { key: 1 }))
                            ]),
                            _: 1
                          }
                        ))
                      : g.createCommentVNode('', !0)
                  ])
                ]),
                g.withDirectives(
                  (g.openBlock(),
                  g.createBlock(
                    be,
                    g.mergeProps(
                      {
                        data: g.unref(p),
                        border: '',
                        style: { width: '100%' },
                        'element-loading-text':
                          (Oe = g.unref(o)) == null ? void 0 : Oe.elementLoadingText,
                        'element-loading-spinner':
                          (Kt = g.unref(o)) == null ? void 0 : Kt.elementLoadingSpinner,
                        'element-loading-background':
                          (Ve = g.unref(o)) == null ? void 0 : Ve.elementLoadingBackground,
                        'element-loading-svg':
                          (le = g.unref(o)) == null ? void 0 : le.elementLoadingSvg,
                        'element-loading-svg-view-box':
                          (Dt = g.unref(o)) == null ? void 0 : Dt.elementLoadingSvgViewBox,
                        onRowClick: g.unref(b)
                      },
                      te.$attrs
                    ),
                    {
                      append: g.withCtx(() => [g.renderSlot(te.$slots, 'append', {}, void 0, !0)]),
                      empty: g.withCtx(() => [
                        g.createElementVNode('div', iF, [
                          g.renderSlot(te.$slots, 'empty', {}, () => [sF], !0)
                        ])
                      ]),
                      default: g.withCtx(() => [
                        g.renderSlot(te.$slots, 'default', {}, void 0, !0),
                        (g.openBlock(!0),
                        g.createElementBlock(
                          g.Fragment,
                          null,
                          g.renderList(
                            g.unref(s),
                            (de, Ir) => (
                              g.openBlock(),
                              g.createElementBlock(
                                g.Fragment,
                                { key: Ir },
                                [
                                  g.unref(To)(de) === 'datetime'
                                    ? (g.openBlock(),
                                      g.createBlock(
                                        he,
                                        g.mergeProps(
                                          {
                                            key: 0,
                                            prop: de.prop,
                                            label: de.label,
                                            width: de.width,
                                            align: de.align
                                          },
                                          de
                                        ),
                                        g.createSlots({ _: 2 }, [
                                          de.isShowHeader
                                            ? {
                                                name: 'header',
                                                fn: g.withCtx(() => [
                                                  g.renderSlot(te.$slots, 'header', {}, void 0, !0)
                                                ]),
                                                key: '0'
                                              }
                                            : void 0
                                        ]),
                                        1040,
                                        ['prop', 'label', 'width', 'align']
                                      ))
                                    : g.unref(To)(de) === 'button'
                                    ? (g.openBlock(),
                                      g.createBlock(
                                        he,
                                        {
                                          key: 1,
                                          prop: 'buttons',
                                          label: de.label,
                                          width: de.width,
                                          align: de.align
                                        },
                                        g.createSlots(
                                          {
                                            default: g.withCtx(Ke => [
                                              Ke.row.rowEdit
                                                ? g.renderSlot(
                                                    te.$slots,
                                                    'editRow',
                                                    { key: 0, scope: Ke },
                                                    void 0,
                                                    !0
                                                  )
                                                : g.renderSlot(
                                                    te.$slots,
                                                    'action',
                                                    { key: 1, scope: Ke },
                                                    void 0,
                                                    !0
                                                  )
                                            ]),
                                            _: 2
                                          },
                                          [
                                            de.isShowHeader
                                              ? {
                                                  name: 'header',
                                                  fn: g.withCtx(() => [
                                                    g.renderSlot(
                                                      te.$slots,
                                                      'header',
                                                      {},
                                                      void 0,
                                                      !0
                                                    )
                                                  ]),
                                                  key: '0'
                                                }
                                              : void 0
                                          ]
                                        ),
                                        1032,
                                        ['label', 'width', 'align']
                                      ))
                                    : g.unref(To)(de) === 'enum'
                                    ? (g.openBlock(),
                                      g.createBlock(
                                        he,
                                        g.mergeProps(
                                          {
                                            key: 2,
                                            prop: de.prop,
                                            label: de.label,
                                            width: de.width,
                                            align: de.align
                                          },
                                          de
                                        ),
                                        g.createSlots({ _: 2 }, [
                                          de.isShowHeader
                                            ? {
                                                name: 'header',
                                                fn: g.withCtx(() => [
                                                  g.renderSlot(te.$slots, 'header', {}, void 0, !0)
                                                ]),
                                                key: '0'
                                              }
                                            : void 0
                                        ]),
                                        1040,
                                        ['prop', 'label', 'width', 'align']
                                      ))
                                    : (g.openBlock(),
                                      g.createBlock(
                                        he,
                                        g.mergeProps(
                                          {
                                            key: 3,
                                            prop: de.prop,
                                            label: de.label,
                                            width: de.width,
                                            align: de.align
                                          },
                                          de
                                        ),
                                        g.createSlots(
                                          {
                                            default: g.withCtx(Ke => [
                                              Ke.row.rowEdit
                                                ? (g.openBlock(),
                                                  g.createBlock(
                                                    O,
                                                    {
                                                      key: 0,
                                                      size: 'small',
                                                      modelValue: Ke.row[de.prop],
                                                      'onUpdate:modelValue': Mr =>
                                                        (Ke.row[de.prop] = Mr)
                                                    },
                                                    null,
                                                    8,
                                                    ['modelValue', 'onUpdate:modelValue']
                                                  ))
                                                : (g.openBlock(),
                                                  g.createElementBlock(
                                                    g.Fragment,
                                                    { key: 1 },
                                                    [
                                                      Ke.$index + Ke.column.id === g.unref(f)
                                                        ? (g.openBlock(),
                                                          g.createElementBlock('div', rF, [
                                                            g.createVNode(
                                                              O,
                                                              {
                                                                size: 'small',
                                                                modelValue: Ke.row[de.prop],
                                                                'onUpdate:modelValue': Mr =>
                                                                  (Ke.row[de.prop] = Mr)
                                                              },
                                                              null,
                                                              8,
                                                              ['modelValue', 'onUpdate:modelValue']
                                                            ),
                                                            g.createElementVNode('div', null, [
                                                              te.$slots.cellEdit
                                                                ? g.renderSlot(
                                                                    te.$slots,
                                                                    'cellEdit',
                                                                    { key: 0, scope: Ke },
                                                                    void 0,
                                                                    !0
                                                                  )
                                                                : (g.openBlock(),
                                                                  g.createElementBlock('div', nF, [
                                                                    g.createVNode(
                                                                      ce,
                                                                      {
                                                                        class: 'check',
                                                                        onClick: g.withModifiers(
                                                                          Mr => g.unref(C)(Ke),
                                                                          ['stop']
                                                                        )
                                                                      },
                                                                      null,
                                                                      8,
                                                                      ['onClick']
                                                                    ),
                                                                    g.createVNode(
                                                                      ne,
                                                                      {
                                                                        class: 'close',
                                                                        onClick: g.withModifiers(
                                                                          Mr => g.unref(L)(Ke),
                                                                          ['stop']
                                                                        )
                                                                      },
                                                                      null,
                                                                      8,
                                                                      ['onClick']
                                                                    )
                                                                  ]))
                                                            ])
                                                          ]))
                                                        : (g.openBlock(),
                                                          g.createElementBlock(
                                                            g.Fragment,
                                                            { key: 1 },
                                                            [
                                                              de.slot
                                                                ? g.renderSlot(
                                                                    te.$slots,
                                                                    de.slot,
                                                                    { key: 0, scope: Ke },
                                                                    void 0,
                                                                    !0
                                                                  )
                                                                : (g.openBlock(),
                                                                  g.createElementBlock(
                                                                    'span',
                                                                    aF,
                                                                    g.toDisplayString(
                                                                      Ke.row[de.prop]
                                                                    ),
                                                                    1
                                                                  )),
                                                              de.editable
                                                                ? (g.openBlock(),
                                                                  g.createBlock(
                                                                    g.resolveDynamicComponent(
                                                                      `el-icon-${g.unref(N1)(
                                                                        de == null
                                                                          ? void 0
                                                                          : de.editIcon
                                                                      )}`
                                                                    ),
                                                                    {
                                                                      key: 2,
                                                                      class: 'edit',
                                                                      onClick: g.withModifiers(
                                                                        Mr => g.unref(H)(Ke),
                                                                        ['stop']
                                                                      )
                                                                    },
                                                                    null,
                                                                    8,
                                                                    ['onClick']
                                                                  ))
                                                                : g.createCommentVNode('', !0)
                                                            ],
                                                            64
                                                          ))
                                                    ],
                                                    64
                                                  ))
                                            ]),
                                            _: 2
                                          },
                                          [
                                            de.isShowHeader
                                              ? {
                                                  name: 'header',
                                                  fn: g.withCtx(() => [
                                                    g.renderSlot(
                                                      te.$slots,
                                                      'header',
                                                      {},
                                                      void 0,
                                                      !0
                                                    )
                                                  ]),
                                                  key: '0'
                                                }
                                              : void 0
                                          ]
                                        ),
                                        1040,
                                        ['prop', 'label', 'width', 'align']
                                      ))
                                ],
                                64
                              )
                            )
                          ),
                          128
                        ))
                      ]),
                      _: 3
                    },
                    16,
                    [
                      'data',
                      'element-loading-text',
                      'element-loading-spinner',
                      'element-loading-background',
                      'element-loading-svg',
                      'element-loading-svg-view-box',
                      'onRowClick'
                    ]
                  )),
                  [[gt, g.unref(n)]]
                ),
                g.unref(o).pagination && !g.unref(n)
                  ? (g.openBlock(),
                    g.createElementBlock(
                      'div',
                      {
                        key: 1,
                        class: 'pagination',
                        style: g.normalizeStyle({ justifyContent: g.unref(h) })
                      },
                      [
                        g.renderSlot(
                          te.$slots,
                          'pagination',
                          {},
                          () => [
                            g.createVNode(
                              Te,
                              {
                                'current-page': g.unref(l).currentPage,
                                'onUpdate:currentPage':
                                  Se[5] || (Se[5] = de => (g.unref(l).currentPage = de)),
                                'page-sizes': g.unref(l).pageSizes,
                                'page-size': g.unref(l).pageSize,
                                layout: 'total, sizes, prev, pager, next, jumper',
                                total: g.unref(l).total,
                                background: '',
                                onSizeChange: g.unref(Z),
                                onCurrentChange: g.unref(ie)
                              },
                              null,
                              8,
                              [
                                'current-page',
                                'page-sizes',
                                'page-size',
                                'total',
                                'onSizeChange',
                                'onCurrentChange'
                              ]
                            )
                          ],
                          !0
                        )
                      ],
                      4
                    ))
                  : g.createCommentVNode('', !0)
              ],
              64
            )
          )
        }
      }
    }),
    NF = '',
    fF = ((e, t) => {
      const r = e.__vccOpts || e
      for (const [n, a] of t) r[n] = a
      return r
    })(oF, [['__scopeId', 'data-v-23759822']])
  return {
    install(e) {
      e.component('lib-table', fF)
    }
  }
})
