var O1 = Object.defineProperty
var F1 = (e, t, r) =>
  t in e ? O1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)
var xe = (e, t, r) => (F1(e, typeof t != 'symbol' ? t + '' : t, r), r)
import {
  openBlock as ye,
  createElementBlock as gt,
  createElementVNode as Xr,
  defineComponent as Pl,
  reactive as D1,
  ref as Ht,
  resolveComponent as tt,
  unref as de,
  createBlock as vt,
  mergeProps as va,
  withCtx as Ye,
  createVNode as ct,
  Fragment as xr,
  renderList as Fi,
  createCommentVNode as Kr,
  watch as Ls,
  onBeforeMount as C1,
  onMounted as R1,
  resolveDirective as k1,
  createTextVNode as Pn,
  renderSlot as bt,
  isRef as Jo,
  withKeys as N1,
  toDisplayString as Zo,
  withDirectives as P1,
  createSlots as hi,
  withModifiers as Bs,
  resolveDynamicComponent as I1,
  normalizeStyle as M1,
  pushScopeId as b1,
  popScopeId as L1
} from 'vue'
function B1(e, t) {
  const r = /* @__PURE__ */ Object.create(null),
    n = e.split(',')
  for (let a = 0; a < n.length; a++) r[n[a]] = !0
  return t ? a => !!r[a.toLowerCase()] : a => !!r[a]
}
process.env.NODE_ENV !== 'production' && Object.freeze({})
process.env.NODE_ENV !== 'production' && Object.freeze([])
const U1 = () => {},
  W1 = Object.assign,
  H1 = Object.prototype.hasOwnProperty,
  ns = (e, t) => H1.call(e, t),
  en = Array.isArray,
  Aa = e => Il(e) === '[object Map]',
  $1 = e => typeof e == 'function',
  Y1 = e => typeof e == 'string',
  R0 = e => typeof e == 'symbol',
  as = e => e !== null && typeof e == 'object',
  j1 = Object.prototype.toString,
  Il = e => j1.call(e),
  Ml = e => Il(e).slice(8, -1),
  k0 = e => Y1(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  V1 = e => {
    const t = /* @__PURE__ */ Object.create(null)
    return r => t[r] || (t[r] = e(r))
  },
  G1 = V1(e => e.charAt(0).toUpperCase() + e.slice(1)),
  bl = (e, t) => !Object.is(e, t)
function Qo(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t)
}
let z1
function X1(e, t = z1) {
  t && t.active && t.effects.push(e)
}
const Ma = e => {
    const t = new Set(e)
    return (t.w = 0), (t.n = 0), t
  },
  Ll = e => (e.w & nn) > 0,
  Bl = e => (e.n & nn) > 0,
  K1 = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= nn
  },
  q1 = e => {
    const { deps: t } = e
    if (t.length) {
      let r = 0
      for (let n = 0; n < t.length; n++) {
        const a = t[n]
        Ll(a) && !Bl(a) ? a.delete(e) : (t[r++] = a), (a.w &= ~nn), (a.n &= ~nn)
      }
      t.length = r
    }
  },
  a0 = /* @__PURE__ */ new WeakMap()
let wa = 0,
  nn = 1
const i0 = 30
let It
const _n = Symbol(process.env.NODE_ENV !== 'production' ? 'iterate' : ''),
  s0 = Symbol(process.env.NODE_ENV !== 'production' ? 'Map key iterate' : '')
class J1 {
  constructor(t, r = null, n) {
    ;(this.fn = t),
      (this.scheduler = r),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      X1(this, n)
  }
  run() {
    if (!this.active) return this.fn()
    let t = It,
      r = tn
    for (; t; ) {
      if (t === this) return
      t = t.parent
    }
    try {
      return (
        (this.parent = It),
        (It = this),
        (tn = !0),
        (nn = 1 << ++wa),
        wa <= i0 ? K1(this) : ef(this),
        this.fn()
      )
    } finally {
      wa <= i0 && q1(this),
        (nn = 1 << --wa),
        (It = this.parent),
        (tn = r),
        (this.parent = void 0),
        this.deferStop && this.stop()
    }
  }
  stop() {
    It === this
      ? (this.deferStop = !0)
      : this.active && (ef(this), this.onStop && this.onStop(), (this.active = !1))
  }
}
function ef(e) {
  const { deps: t } = e
  if (t.length) {
    for (let r = 0; r < t.length; r++) t[r].delete(e)
    t.length = 0
  }
}
let tn = !0
const Ul = []
function Z1() {
  Ul.push(tn), (tn = !1)
}
function Q1() {
  const e = Ul.pop()
  tn = e === void 0 ? !0 : e
}
function Qt(e, t, r) {
  if (tn && It) {
    let n = a0.get(e)
    n || a0.set(e, (n = /* @__PURE__ */ new Map()))
    let a = n.get(r)
    a || n.set(r, (a = Ma()))
    const i =
      process.env.NODE_ENV !== 'production' ? { effect: It, target: e, type: t, key: r } : void 0
    o0(a, i)
  }
}
function o0(e, t) {
  let r = !1
  wa <= i0 ? Bl(e) || ((e.n |= nn), (r = !Ll(e))) : (r = !e.has(It)),
    r &&
      (e.add(It),
      It.deps.push(e),
      process.env.NODE_ENV !== 'production' &&
        It.onTrack &&
        It.onTrack(Object.assign({ effect: It }, t)))
}
function an(e, t, r, n, a, i) {
  const s = a0.get(e)
  if (!s) return
  let o = []
  if (t === 'clear') o = [...s.values()]
  else if (r === 'length' && en(e)) {
    const f = Number(n)
    s.forEach((c, u) => {
      ;(u === 'length' || u >= f) && o.push(c)
    })
  } else
    switch ((r !== void 0 && o.push(s.get(r)), t)) {
      case 'add':
        en(e) ? k0(r) && o.push(s.get('length')) : (o.push(s.get(_n)), Aa(e) && o.push(s.get(s0)))
        break
      case 'delete':
        en(e) || (o.push(s.get(_n)), Aa(e) && o.push(s.get(s0)))
        break
      case 'set':
        Aa(e) && o.push(s.get(_n))
        break
    }
  const l =
    process.env.NODE_ENV !== 'production'
      ? { target: e, type: t, key: r, newValue: n, oldValue: a, oldTarget: i }
      : void 0
  if (o.length === 1) o[0] && (process.env.NODE_ENV !== 'production' ? Wn(o[0], l) : Wn(o[0]))
  else {
    const f = []
    for (const c of o) c && f.push(...c)
    process.env.NODE_ENV !== 'production' ? Wn(Ma(f), l) : Wn(Ma(f))
  }
}
function Wn(e, t) {
  const r = en(e) ? e : [...e]
  for (const n of r) n.computed && tf(n, t)
  for (const n of r) n.computed || tf(n, t)
}
function tf(e, t) {
  ;(e !== It || e.allowRecurse) &&
    (process.env.NODE_ENV !== 'production' && e.onTrigger && e.onTrigger(W1({ effect: e }, t)),
    e.scheduler ? e.scheduler() : e.run())
}
const ed = /* @__PURE__ */ B1('__proto__,__v_isRef,__isVue'),
  Wl = new Set(
    /* @__PURE__ */ Object.getOwnPropertyNames(Symbol)
      .filter(e => e !== 'arguments' && e !== 'caller')
      .map(e => Symbol[e])
      .filter(R0)
  ),
  td = /* @__PURE__ */ Hl(),
  rd = /* @__PURE__ */ Hl(!0),
  rf = /* @__PURE__ */ nd()
function nd() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach(t => {
      e[t] = function (...r) {
        const n = Ue(this)
        for (let i = 0, s = this.length; i < s; i++) Qt(n, 'get', i + '')
        const a = n[t](...r)
        return a === -1 || a === !1 ? n[t](...r.map(Ue)) : a
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(t => {
      e[t] = function (...r) {
        Z1()
        const n = Ue(this)[t].apply(this, r)
        return Q1(), n
      }
    }),
    e
  )
}
function ad(e) {
  const t = Ue(this)
  return Qt(t, 'has', e), t.hasOwnProperty(e)
}
function Hl(e = !1, t = !1) {
  return function (n, a, i) {
    if (a === '__v_isReactive') return !e
    if (a === '__v_isReadonly') return e
    if (a === '__v_isShallow') return t
    if (a === '__v_raw' && i === (e ? (t ? wd : Vl) : t ? vd : jl).get(n)) return n
    const s = en(n)
    if (!e) {
      if (s && ns(rf, a)) return Reflect.get(rf, a, i)
      if (a === 'hasOwnProperty') return ad
    }
    const o = Reflect.get(n, a, i)
    return (R0(a) ? Wl.has(a) : ed(a)) || (e || Qt(n, 'get', a), t)
      ? o
      : Ta(o)
      ? s && k0(a)
        ? o
        : o.value
      : as(o)
      ? e
        ? Gl(o)
        : P0(o)
      : o
  }
}
const id = /* @__PURE__ */ sd()
function sd(e = !1) {
  return function (r, n, a, i) {
    let s = r[n]
    if (f0(s) && Ta(s) && !Ta(a)) return !1
    if (!e && (!Sd(a) && !f0(a) && ((s = Ue(s)), (a = Ue(a))), !en(r) && Ta(s) && !Ta(a)))
      return (s.value = a), !0
    const o = en(r) && k0(n) ? Number(n) < r.length : ns(r, n),
      l = Reflect.set(r, n, a, i)
    return r === Ue(i) && (o ? bl(a, s) && an(r, 'set', n, a, s) : an(r, 'add', n, a)), l
  }
}
function od(e, t) {
  const r = ns(e, t),
    n = e[t],
    a = Reflect.deleteProperty(e, t)
  return a && r && an(e, 'delete', t, void 0, n), a
}
function fd(e, t) {
  const r = Reflect.has(e, t)
  return (!R0(t) || !Wl.has(t)) && Qt(e, 'has', t), r
}
function ld(e) {
  return Qt(e, 'iterate', en(e) ? 'length' : _n), Reflect.ownKeys(e)
}
const cd = {
    get: td,
    set: id,
    deleteProperty: od,
    has: fd,
    ownKeys: ld
  },
  ud = {
    get: rd,
    set(e, t) {
      return (
        process.env.NODE_ENV !== 'production' &&
          Qo(`Set operation on key "${String(t)}" failed: target is readonly.`, e),
        !0
      )
    },
    deleteProperty(e, t) {
      return (
        process.env.NODE_ENV !== 'production' &&
          Qo(`Delete operation on key "${String(t)}" failed: target is readonly.`, e),
        !0
      )
    }
  },
  N0 = e => e,
  is = e => Reflect.getPrototypeOf(e)
function di(e, t, r = !1, n = !1) {
  e = e.__v_raw
  const a = Ue(e),
    i = Ue(t)
  r || (t !== i && Qt(a, 'get', t), Qt(a, 'get', i))
  const { has: s } = is(a),
    o = n ? N0 : r ? M0 : I0
  if (s.call(a, t)) return o(e.get(t))
  if (s.call(a, i)) return o(e.get(i))
  e !== a && e.get(t)
}
function pi(e, t = !1) {
  const r = this.__v_raw,
    n = Ue(r),
    a = Ue(e)
  return (
    t || (e !== a && Qt(n, 'has', e), Qt(n, 'has', a)), e === a ? r.has(e) : r.has(e) || r.has(a)
  )
}
function xi(e, t = !1) {
  return (e = e.__v_raw), !t && Qt(Ue(e), 'iterate', _n), Reflect.get(e, 'size', e)
}
function nf(e) {
  e = Ue(e)
  const t = Ue(this)
  return is(t).has.call(t, e) || (t.add(e), an(t, 'add', e, e)), this
}
function af(e, t) {
  t = Ue(t)
  const r = Ue(this),
    { has: n, get: a } = is(r)
  let i = n.call(r, e)
  i ? process.env.NODE_ENV !== 'production' && Yl(r, n, e) : ((e = Ue(e)), (i = n.call(r, e)))
  const s = a.call(r, e)
  return r.set(e, t), i ? bl(t, s) && an(r, 'set', e, t, s) : an(r, 'add', e, t), this
}
function sf(e) {
  const t = Ue(this),
    { has: r, get: n } = is(t)
  let a = r.call(t, e)
  a ? process.env.NODE_ENV !== 'production' && Yl(t, r, e) : ((e = Ue(e)), (a = r.call(t, e)))
  const i = n ? n.call(t, e) : void 0,
    s = t.delete(e)
  return a && an(t, 'delete', e, void 0, i), s
}
function of() {
  const e = Ue(this),
    t = e.size !== 0,
    r = process.env.NODE_ENV !== 'production' ? (Aa(e) ? new Map(e) : new Set(e)) : void 0,
    n = e.clear()
  return t && an(e, 'clear', void 0, void 0, r), n
}
function mi(e, t) {
  return function (n, a) {
    const i = this,
      s = i.__v_raw,
      o = Ue(s),
      l = t ? N0 : e ? M0 : I0
    return !e && Qt(o, 'iterate', _n), s.forEach((f, c) => n.call(a, l(f), l(c), i))
  }
}
function _i(e, t, r) {
  return function (...n) {
    const a = this.__v_raw,
      i = Ue(a),
      s = Aa(i),
      o = e === 'entries' || (e === Symbol.iterator && s),
      l = e === 'keys' && s,
      f = a[e](...n),
      c = r ? N0 : t ? M0 : I0
    return (
      !t && Qt(i, 'iterate', l ? s0 : _n),
      {
        next() {
          const { value: u, done: h } = f.next()
          return h
            ? { value: u, done: h }
            : {
                value: o ? [c(u[0]), c(u[1])] : c(u),
                done: h
              }
        },
        [Symbol.iterator]() {
          return this
        }
      }
    )
  }
}
function Vr(e) {
  return function (...t) {
    if (process.env.NODE_ENV !== 'production') {
      const r = t[0] ? `on key "${t[0]}" ` : ''
      console.warn(`${G1(e)} operation ${r}failed: target is readonly.`, Ue(this))
    }
    return e === 'delete' ? !1 : this
  }
}
function hd() {
  const e = {
      get(i) {
        return di(this, i)
      },
      get size() {
        return xi(this)
      },
      has: pi,
      add: nf,
      set: af,
      delete: sf,
      clear: of,
      forEach: mi(!1, !1)
    },
    t = {
      get(i) {
        return di(this, i, !1, !0)
      },
      get size() {
        return xi(this)
      },
      has: pi,
      add: nf,
      set: af,
      delete: sf,
      clear: of,
      forEach: mi(!1, !0)
    },
    r = {
      get(i) {
        return di(this, i, !0)
      },
      get size() {
        return xi(this, !0)
      },
      has(i) {
        return pi.call(this, i, !0)
      },
      add: Vr('add'),
      set: Vr('set'),
      delete: Vr('delete'),
      clear: Vr('clear'),
      forEach: mi(!0, !1)
    },
    n = {
      get(i) {
        return di(this, i, !0, !0)
      },
      get size() {
        return xi(this, !0)
      },
      has(i) {
        return pi.call(this, i, !0)
      },
      add: Vr('add'),
      set: Vr('set'),
      delete: Vr('delete'),
      clear: Vr('clear'),
      forEach: mi(!0, !0)
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach(i => {
      ;(e[i] = _i(i, !1, !1)),
        (r[i] = _i(i, !0, !1)),
        (t[i] = _i(i, !1, !0)),
        (n[i] = _i(i, !0, !0))
    }),
    [e, r, t, n]
  )
}
const [dd, pd, xd, md] = /* @__PURE__ */ hd()
function $l(e, t) {
  const r = t ? (e ? md : xd) : e ? pd : dd
  return (n, a, i) =>
    a === '__v_isReactive'
      ? !e
      : a === '__v_isReadonly'
      ? e
      : a === '__v_raw'
      ? n
      : Reflect.get(ns(r, a) && a in n ? r : n, a, i)
}
const _d = {
    get: /* @__PURE__ */ $l(!1, !1)
  },
  gd = {
    get: /* @__PURE__ */ $l(!0, !1)
  }
function Yl(e, t, r) {
  const n = Ue(r)
  if (n !== r && t.call(e, n)) {
    const a = Ml(e)
    console.warn(
      `Reactive ${a} contains both the raw and reactive versions of the same object${
        a === 'Map' ? ' as keys' : ''
      }, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    )
  }
}
const jl = /* @__PURE__ */ new WeakMap(),
  vd = /* @__PURE__ */ new WeakMap(),
  Vl = /* @__PURE__ */ new WeakMap(),
  wd = /* @__PURE__ */ new WeakMap()
function Td(e) {
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
function Ed(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Td(Ml(e))
}
function P0(e) {
  return f0(e) ? e : zl(e, !1, cd, _d, jl)
}
function Gl(e) {
  return zl(e, !0, ud, gd, Vl)
}
function zl(e, t, r, n, a) {
  if (!as(e))
    return (
      process.env.NODE_ENV !== 'production' &&
        console.warn(`value cannot be made reactive: ${String(e)}`),
      e
    )
  if (e.__v_raw && !(t && e.__v_isReactive)) return e
  const i = a.get(e)
  if (i) return i
  const s = Ed(e)
  if (s === 0) return e
  const o = new Proxy(e, s === 2 ? n : r)
  return a.set(e, o), o
}
function f0(e) {
  return !!(e && e.__v_isReadonly)
}
function Sd(e) {
  return !!(e && e.__v_isShallow)
}
function Ue(e) {
  const t = e && e.__v_raw
  return t ? Ue(t) : e
}
const I0 = e => (as(e) ? P0(e) : e),
  M0 = e => (as(e) ? Gl(e) : e)
function yd(e) {
  tn &&
    It &&
    ((e = Ue(e)),
    process.env.NODE_ENV !== 'production'
      ? o0(e.dep || (e.dep = Ma()), {
          target: e,
          type: 'get',
          key: 'value'
        })
      : o0(e.dep || (e.dep = Ma())))
}
function Ad(e, t) {
  e = Ue(e)
  const r = e.dep
  r &&
    (process.env.NODE_ENV !== 'production'
      ? Wn(r, {
          target: e,
          type: 'set',
          key: 'value',
          newValue: t
        })
      : Wn(r))
}
function Ta(e) {
  return !!(e && e.__v_isRef === !0)
}
var Xl
class Od {
  constructor(t, r, n, a) {
    ;(this._setter = r),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[Xl] = !1),
      (this._dirty = !0),
      (this.effect = new J1(t, () => {
        this._dirty || ((this._dirty = !0), Ad(this))
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !a),
      (this.__v_isReadonly = n)
  }
  get value() {
    const t = Ue(this)
    return (
      yd(t), (t._dirty || !t._cacheable) && ((t._dirty = !1), (t._value = t.effect.run())), t._value
    )
  }
  set value(t) {
    this._setter(t)
  }
}
Xl = '__v_isReadonly'
function Ea(e, t, r = !1) {
  let n, a
  const i = $1(e)
  i
    ? ((n = e),
      (a =
        process.env.NODE_ENV !== 'production'
          ? () => {
              console.warn('Write operation failed: computed value is readonly')
            }
          : U1))
    : ((n = e.get), (a = e.set))
  const s = new Od(n, a, i || !a, r)
  return (
    process.env.NODE_ENV !== 'production' &&
      t &&
      !r &&
      ((s.effect.onTrack = t.onTrack), (s.effect.onTrigger = t.onTrigger)),
    s
  )
}
const Fd = e => {
  if (e) return e.replace(/(A-Z)g/, '-$1').toLocaleLowerCase()
}
function Dd() {
  ;(this.__data__ = []), (this.size = 0)
}
function Kl(e, t) {
  return e === t || (e !== e && t !== t)
}
function ss(e, t) {
  for (var r = e.length; r--; ) if (Kl(e[r][0], t)) return r
  return -1
}
var Cd = Array.prototype,
  Rd = Cd.splice
function kd(e) {
  var t = this.__data__,
    r = ss(t, e)
  if (r < 0) return !1
  var n = t.length - 1
  return r == n ? t.pop() : Rd.call(t, r, 1), --this.size, !0
}
function Nd(e) {
  var t = this.__data__,
    r = ss(t, e)
  return r < 0 ? void 0 : t[r][1]
}
function Pd(e) {
  return ss(this.__data__, e) > -1
}
function Id(e, t) {
  var r = this.__data__,
    n = ss(r, e)
  return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this
}
function Wr(e) {
  var t = -1,
    r = e == null ? 0 : e.length
  for (this.clear(); ++t < r; ) {
    var n = e[t]
    this.set(n[0], n[1])
  }
}
Wr.prototype.clear = Dd
Wr.prototype.delete = kd
Wr.prototype.get = Nd
Wr.prototype.has = Pd
Wr.prototype.set = Id
function Md() {
  ;(this.__data__ = new Wr()), (this.size = 0)
}
function bd(e) {
  var t = this.__data__,
    r = t.delete(e)
  return (this.size = t.size), r
}
function Ld(e) {
  return this.__data__.get(e)
}
function Bd(e) {
  return this.__data__.has(e)
}
var Ud = typeof global == 'object' && global && global.Object === Object && global
const ql = Ud
var Wd = typeof self == 'object' && self && self.Object === Object && self,
  Hd = ql || Wd || Function('return this')()
const wr = Hd
var $d = wr.Symbol
const qn = $d
var Jl = Object.prototype,
  Yd = Jl.hasOwnProperty,
  jd = Jl.toString,
  da = qn ? qn.toStringTag : void 0
function Vd(e) {
  var t = Yd.call(e, da),
    r = e[da]
  try {
    e[da] = void 0
    var n = !0
  } catch {}
  var a = jd.call(e)
  return n && (t ? (e[da] = r) : delete e[da]), a
}
var Gd = Object.prototype,
  zd = Gd.toString
function Xd(e) {
  return zd.call(e)
}
var Kd = '[object Null]',
  qd = '[object Undefined]',
  ff = qn ? qn.toStringTag : void 0
function Xa(e) {
  return e == null ? (e === void 0 ? qd : Kd) : ff && ff in Object(e) ? Vd(e) : Xd(e)
}
function Ka(e) {
  var t = typeof e
  return e != null && (t == 'object' || t == 'function')
}
var Jd = '[object AsyncFunction]',
  Zd = '[object Function]',
  Qd = '[object GeneratorFunction]',
  ep = '[object Proxy]'
function Zl(e) {
  if (!Ka(e)) return !1
  var t = Xa(e)
  return t == Zd || t == Qd || t == Jd || t == ep
}
var tp = wr['__core-js_shared__']
const Us = tp
var lf = (function () {
  var e = /[^.]+$/.exec((Us && Us.keys && Us.keys.IE_PROTO) || '')
  return e ? 'Symbol(src)_1.' + e : ''
})()
function rp(e) {
  return !!lf && lf in e
}
var np = Function.prototype,
  ap = np.toString
function yn(e) {
  if (e != null) {
    try {
      return ap.call(e)
    } catch {}
    try {
      return e + ''
    } catch {}
  }
  return ''
}
var ip = /[\\^$.*+?()[\]{}|]/g,
  sp = /^\[object .+?Constructor\]$/,
  op = Function.prototype,
  fp = Object.prototype,
  lp = op.toString,
  cp = fp.hasOwnProperty,
  up = RegExp(
    '^' +
      lp
        .call(cp)
        .replace(ip, '\\$&')
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
      '$'
  )
function hp(e) {
  if (!Ka(e) || rp(e)) return !1
  var t = Zl(e) ? up : sp
  return t.test(yn(e))
}
function dp(e, t) {
  return e == null ? void 0 : e[t]
}
function An(e, t) {
  var r = dp(e, t)
  return hp(r) ? r : void 0
}
var pp = An(wr, 'Map')
const ba = pp
var xp = An(Object, 'create')
const La = xp
function mp() {
  ;(this.__data__ = La ? La(null) : {}), (this.size = 0)
}
function _p(e) {
  var t = this.has(e) && delete this.__data__[e]
  return (this.size -= t ? 1 : 0), t
}
var gp = '__lodash_hash_undefined__',
  vp = Object.prototype,
  wp = vp.hasOwnProperty
function Tp(e) {
  var t = this.__data__
  if (La) {
    var r = t[e]
    return r === gp ? void 0 : r
  }
  return wp.call(t, e) ? t[e] : void 0
}
var Ep = Object.prototype,
  Sp = Ep.hasOwnProperty
function yp(e) {
  var t = this.__data__
  return La ? t[e] !== void 0 : Sp.call(t, e)
}
var Ap = '__lodash_hash_undefined__'
function Op(e, t) {
  var r = this.__data__
  return (this.size += this.has(e) ? 0 : 1), (r[e] = La && t === void 0 ? Ap : t), this
}
function wn(e) {
  var t = -1,
    r = e == null ? 0 : e.length
  for (this.clear(); ++t < r; ) {
    var n = e[t]
    this.set(n[0], n[1])
  }
}
wn.prototype.clear = mp
wn.prototype.delete = _p
wn.prototype.get = Tp
wn.prototype.has = yp
wn.prototype.set = Op
function Fp() {
  ;(this.size = 0),
    (this.__data__ = {
      hash: new wn(),
      map: new (ba || Wr)(),
      string: new wn()
    })
}
function Dp(e) {
  var t = typeof e
  return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
    ? e !== '__proto__'
    : e === null
}
function os(e, t) {
  var r = e.__data__
  return Dp(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map
}
function Cp(e) {
  var t = os(this, e).delete(e)
  return (this.size -= t ? 1 : 0), t
}
function Rp(e) {
  return os(this, e).get(e)
}
function kp(e) {
  return os(this, e).has(e)
}
function Np(e, t) {
  var r = os(this, e),
    n = r.size
  return r.set(e, t), (this.size += r.size == n ? 0 : 1), this
}
function ea(e) {
  var t = -1,
    r = e == null ? 0 : e.length
  for (this.clear(); ++t < r; ) {
    var n = e[t]
    this.set(n[0], n[1])
  }
}
ea.prototype.clear = Fp
ea.prototype.delete = Cp
ea.prototype.get = Rp
ea.prototype.has = kp
ea.prototype.set = Np
var Pp = 200
function Ip(e, t) {
  var r = this.__data__
  if (r instanceof Wr) {
    var n = r.__data__
    if (!ba || n.length < Pp - 1) return n.push([e, t]), (this.size = ++r.size), this
    r = this.__data__ = new ea(n)
  }
  return r.set(e, t), (this.size = r.size), this
}
function ta(e) {
  var t = (this.__data__ = new Wr(e))
  this.size = t.size
}
ta.prototype.clear = Md
ta.prototype.delete = bd
ta.prototype.get = Ld
ta.prototype.has = Bd
ta.prototype.set = Ip
function Mp(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; );
  return e
}
var bp = (function () {
  try {
    var e = An(Object, 'defineProperty')
    return e({}, '', {}), e
  } catch {}
})()
const cf = bp
function Ql(e, t, r) {
  t == '__proto__' && cf
    ? cf(e, t, {
        configurable: !0,
        enumerable: !0,
        value: r,
        writable: !0
      })
    : (e[t] = r)
}
var Lp = Object.prototype,
  Bp = Lp.hasOwnProperty
function ec(e, t, r) {
  var n = e[t]
  ;(!(Bp.call(e, t) && Kl(n, r)) || (r === void 0 && !(t in e))) && Ql(e, t, r)
}
function fs(e, t, r, n) {
  var a = !r
  r || (r = {})
  for (var i = -1, s = t.length; ++i < s; ) {
    var o = t[i],
      l = n ? n(r[o], e[o], o, r, e) : void 0
    l === void 0 && (l = e[o]), a ? Ql(r, o, l) : ec(r, o, l)
  }
  return r
}
function Up(e, t) {
  for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r)
  return n
}
function qa(e) {
  return e != null && typeof e == 'object'
}
var Wp = '[object Arguments]'
function uf(e) {
  return qa(e) && Xa(e) == Wp
}
var tc = Object.prototype,
  Hp = tc.hasOwnProperty,
  $p = tc.propertyIsEnumerable,
  Yp = uf(
    (function () {
      return arguments
    })()
  )
    ? uf
    : function (e) {
        return qa(e) && Hp.call(e, 'callee') && !$p.call(e, 'callee')
      }
const jp = Yp
var Vp = Array.isArray
const b0 = Vp
function Gp() {
  return !1
}
var rc = typeof exports == 'object' && exports && !exports.nodeType && exports,
  hf = rc && typeof module == 'object' && module && !module.nodeType && module,
  zp = hf && hf.exports === rc,
  df = zp ? wr.Buffer : void 0,
  Xp = df ? df.isBuffer : void 0,
  Kp = Xp || Gp
const nc = Kp
var qp = 9007199254740991,
  Jp = /^(?:0|[1-9]\d*)$/
function Zp(e, t) {
  var r = typeof e
  return (
    (t = t == null ? qp : t),
    !!t && (r == 'number' || (r != 'symbol' && Jp.test(e))) && e > -1 && e % 1 == 0 && e < t
  )
}
var Qp = 9007199254740991
function ac(e) {
  return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= Qp
}
var ex = '[object Arguments]',
  tx = '[object Array]',
  rx = '[object Boolean]',
  nx = '[object Date]',
  ax = '[object Error]',
  ix = '[object Function]',
  sx = '[object Map]',
  ox = '[object Number]',
  fx = '[object Object]',
  lx = '[object RegExp]',
  cx = '[object Set]',
  ux = '[object String]',
  hx = '[object WeakMap]',
  dx = '[object ArrayBuffer]',
  px = '[object DataView]',
  xx = '[object Float32Array]',
  mx = '[object Float64Array]',
  _x = '[object Int8Array]',
  gx = '[object Int16Array]',
  vx = '[object Int32Array]',
  wx = '[object Uint8Array]',
  Tx = '[object Uint8ClampedArray]',
  Ex = '[object Uint16Array]',
  Sx = '[object Uint32Array]',
  je = {}
je[xx] = je[mx] = je[_x] = je[gx] = je[vx] = je[wx] = je[Tx] = je[Ex] = je[Sx] = !0
je[ex] =
  je[tx] =
  je[dx] =
  je[rx] =
  je[px] =
  je[nx] =
  je[ax] =
  je[ix] =
  je[sx] =
  je[ox] =
  je[fx] =
  je[lx] =
  je[cx] =
  je[ux] =
  je[hx] =
    !1
function yx(e) {
  return qa(e) && ac(e.length) && !!je[Xa(e)]
}
function L0(e) {
  return function (t) {
    return e(t)
  }
}
var ic = typeof exports == 'object' && exports && !exports.nodeType && exports,
  Oa = ic && typeof module == 'object' && module && !module.nodeType && module,
  Ax = Oa && Oa.exports === ic,
  Ws = Ax && ql.process,
  Ox = (function () {
    try {
      var e = Oa && Oa.require && Oa.require('util').types
      return e || (Ws && Ws.binding && Ws.binding('util'))
    } catch {}
  })()
const Jn = Ox
var pf = Jn && Jn.isTypedArray,
  Fx = pf ? L0(pf) : yx
const Dx = Fx
var Cx = Object.prototype,
  Rx = Cx.hasOwnProperty
function sc(e, t) {
  var r = b0(e),
    n = !r && jp(e),
    a = !r && !n && nc(e),
    i = !r && !n && !a && Dx(e),
    s = r || n || a || i,
    o = s ? Up(e.length, String) : [],
    l = o.length
  for (var f in e)
    (t || Rx.call(e, f)) &&
      !(
        s &&
        (f == 'length' ||
          (a && (f == 'offset' || f == 'parent')) ||
          (i && (f == 'buffer' || f == 'byteLength' || f == 'byteOffset')) ||
          Zp(f, l))
      ) &&
      o.push(f)
  return o
}
var kx = Object.prototype
function B0(e) {
  var t = e && e.constructor,
    r = (typeof t == 'function' && t.prototype) || kx
  return e === r
}
function oc(e, t) {
  return function (r) {
    return e(t(r))
  }
}
var Nx = oc(Object.keys, Object)
const Px = Nx
var Ix = Object.prototype,
  Mx = Ix.hasOwnProperty
function bx(e) {
  if (!B0(e)) return Px(e)
  var t = []
  for (var r in Object(e)) Mx.call(e, r) && r != 'constructor' && t.push(r)
  return t
}
function fc(e) {
  return e != null && ac(e.length) && !Zl(e)
}
function U0(e) {
  return fc(e) ? sc(e) : bx(e)
}
function Lx(e, t) {
  return e && fs(t, U0(t), e)
}
function Bx(e) {
  var t = []
  if (e != null) for (var r in Object(e)) t.push(r)
  return t
}
var Ux = Object.prototype,
  Wx = Ux.hasOwnProperty
function Hx(e) {
  if (!Ka(e)) return Bx(e)
  var t = B0(e),
    r = []
  for (var n in e) (n == 'constructor' && (t || !Wx.call(e, n))) || r.push(n)
  return r
}
function W0(e) {
  return fc(e) ? sc(e, !0) : Hx(e)
}
function $x(e, t) {
  return e && fs(t, W0(t), e)
}
var lc = typeof exports == 'object' && exports && !exports.nodeType && exports,
  xf = lc && typeof module == 'object' && module && !module.nodeType && module,
  Yx = xf && xf.exports === lc,
  mf = Yx ? wr.Buffer : void 0,
  _f = mf ? mf.allocUnsafe : void 0
function jx(e, t) {
  if (t) return e.slice()
  var r = e.length,
    n = _f ? _f(r) : new e.constructor(r)
  return e.copy(n), n
}
function Vx(e, t) {
  var r = -1,
    n = e.length
  for (t || (t = Array(n)); ++r < n; ) t[r] = e[r]
  return t
}
function Gx(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++r < n; ) {
    var s = e[r]
    t(s, r, e) && (i[a++] = s)
  }
  return i
}
function cc() {
  return []
}
var zx = Object.prototype,
  Xx = zx.propertyIsEnumerable,
  gf = Object.getOwnPropertySymbols,
  Kx = gf
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            Gx(gf(e), function (t) {
              return Xx.call(e, t)
            }))
      }
    : cc
const H0 = Kx
function qx(e, t) {
  return fs(e, H0(e), t)
}
function uc(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; ) e[a + r] = t[r]
  return e
}
var Jx = oc(Object.getPrototypeOf, Object)
const hc = Jx
var Zx = Object.getOwnPropertySymbols,
  Qx = Zx
    ? function (e) {
        for (var t = []; e; ) uc(t, H0(e)), (e = hc(e))
        return t
      }
    : cc
const dc = Qx
function em(e, t) {
  return fs(e, dc(e), t)
}
function pc(e, t, r) {
  var n = t(e)
  return b0(e) ? n : uc(n, r(e))
}
function tm(e) {
  return pc(e, U0, H0)
}
function rm(e) {
  return pc(e, W0, dc)
}
var nm = An(wr, 'DataView')
const l0 = nm
var am = An(wr, 'Promise')
const c0 = am
var im = An(wr, 'Set')
const u0 = im
var sm = An(wr, 'WeakMap')
const h0 = sm
var vf = '[object Map]',
  om = '[object Object]',
  wf = '[object Promise]',
  Tf = '[object Set]',
  Ef = '[object WeakMap]',
  Sf = '[object DataView]',
  fm = yn(l0),
  lm = yn(ba),
  cm = yn(c0),
  um = yn(u0),
  hm = yn(h0),
  dn = Xa
;((l0 && dn(new l0(new ArrayBuffer(1))) != Sf) ||
  (ba && dn(new ba()) != vf) ||
  (c0 && dn(c0.resolve()) != wf) ||
  (u0 && dn(new u0()) != Tf) ||
  (h0 && dn(new h0()) != Ef)) &&
  (dn = function (e) {
    var t = Xa(e),
      r = t == om ? e.constructor : void 0,
      n = r ? yn(r) : ''
    if (n)
      switch (n) {
        case fm:
          return Sf
        case lm:
          return vf
        case cm:
          return wf
        case um:
          return Tf
        case hm:
          return Ef
      }
    return t
  })
const $0 = dn
var dm = Object.prototype,
  pm = dm.hasOwnProperty
function xm(e) {
  var t = e.length,
    r = new e.constructor(t)
  return (
    t &&
      typeof e[0] == 'string' &&
      pm.call(e, 'index') &&
      ((r.index = e.index), (r.input = e.input)),
    r
  )
}
var mm = wr.Uint8Array
const yf = mm
function Y0(e) {
  var t = new e.constructor(e.byteLength)
  return new yf(t).set(new yf(e)), t
}
function _m(e, t) {
  var r = t ? Y0(e.buffer) : e.buffer
  return new e.constructor(r, e.byteOffset, e.byteLength)
}
var gm = /\w*$/
function vm(e) {
  var t = new e.constructor(e.source, gm.exec(e))
  return (t.lastIndex = e.lastIndex), t
}
var Af = qn ? qn.prototype : void 0,
  Of = Af ? Af.valueOf : void 0
function wm(e) {
  return Of ? Object(Of.call(e)) : {}
}
function Tm(e, t) {
  var r = t ? Y0(e.buffer) : e.buffer
  return new e.constructor(r, e.byteOffset, e.length)
}
var Em = '[object Boolean]',
  Sm = '[object Date]',
  ym = '[object Map]',
  Am = '[object Number]',
  Om = '[object RegExp]',
  Fm = '[object Set]',
  Dm = '[object String]',
  Cm = '[object Symbol]',
  Rm = '[object ArrayBuffer]',
  km = '[object DataView]',
  Nm = '[object Float32Array]',
  Pm = '[object Float64Array]',
  Im = '[object Int8Array]',
  Mm = '[object Int16Array]',
  bm = '[object Int32Array]',
  Lm = '[object Uint8Array]',
  Bm = '[object Uint8ClampedArray]',
  Um = '[object Uint16Array]',
  Wm = '[object Uint32Array]'
function Hm(e, t, r) {
  var n = e.constructor
  switch (t) {
    case Rm:
      return Y0(e)
    case Em:
    case Sm:
      return new n(+e)
    case km:
      return _m(e, r)
    case Nm:
    case Pm:
    case Im:
    case Mm:
    case bm:
    case Lm:
    case Bm:
    case Um:
    case Wm:
      return Tm(e, r)
    case ym:
      return new n()
    case Am:
    case Dm:
      return new n(e)
    case Om:
      return vm(e)
    case Fm:
      return new n()
    case Cm:
      return wm(e)
  }
}
var Ff = Object.create,
  $m = (function () {
    function e() {}
    return function (t) {
      if (!Ka(t)) return {}
      if (Ff) return Ff(t)
      e.prototype = t
      var r = new e()
      return (e.prototype = void 0), r
    }
  })()
const Ym = $m
function jm(e) {
  return typeof e.constructor == 'function' && !B0(e) ? Ym(hc(e)) : {}
}
var Vm = '[object Map]'
function Gm(e) {
  return qa(e) && $0(e) == Vm
}
var Df = Jn && Jn.isMap,
  zm = Df ? L0(Df) : Gm
const Xm = zm
var Km = '[object Set]'
function qm(e) {
  return qa(e) && $0(e) == Km
}
var Cf = Jn && Jn.isSet,
  Jm = Cf ? L0(Cf) : qm
const Zm = Jm
var Qm = 1,
  e_ = 2,
  t_ = 4,
  xc = '[object Arguments]',
  r_ = '[object Array]',
  n_ = '[object Boolean]',
  a_ = '[object Date]',
  i_ = '[object Error]',
  mc = '[object Function]',
  s_ = '[object GeneratorFunction]',
  o_ = '[object Map]',
  f_ = '[object Number]',
  _c = '[object Object]',
  l_ = '[object RegExp]',
  c_ = '[object Set]',
  u_ = '[object String]',
  h_ = '[object Symbol]',
  d_ = '[object WeakMap]',
  p_ = '[object ArrayBuffer]',
  x_ = '[object DataView]',
  m_ = '[object Float32Array]',
  __ = '[object Float64Array]',
  g_ = '[object Int8Array]',
  v_ = '[object Int16Array]',
  w_ = '[object Int32Array]',
  T_ = '[object Uint8Array]',
  E_ = '[object Uint8ClampedArray]',
  S_ = '[object Uint16Array]',
  y_ = '[object Uint32Array]',
  He = {}
He[xc] =
  He[r_] =
  He[p_] =
  He[x_] =
  He[n_] =
  He[a_] =
  He[m_] =
  He[__] =
  He[g_] =
  He[v_] =
  He[w_] =
  He[o_] =
  He[f_] =
  He[_c] =
  He[l_] =
  He[c_] =
  He[u_] =
  He[h_] =
  He[T_] =
  He[E_] =
  He[S_] =
  He[y_] =
    !0
He[i_] = He[mc] = He[d_] = !1
function Di(e, t, r, n, a, i) {
  var s,
    o = t & Qm,
    l = t & e_,
    f = t & t_
  if ((r && (s = a ? r(e, n, a, i) : r(e)), s !== void 0)) return s
  if (!Ka(e)) return e
  var c = b0(e)
  if (c) {
    if (((s = xm(e)), !o)) return Vx(e, s)
  } else {
    var u = $0(e),
      h = u == mc || u == s_
    if (nc(e)) return jx(e, o)
    if (u == _c || u == xc || (h && !a)) {
      if (((s = l || h ? {} : jm(e)), !o)) return l ? em(e, $x(s, e)) : qx(e, Lx(s, e))
    } else {
      if (!He[u]) return a ? e : {}
      s = Hm(e, u, o)
    }
  }
  i || (i = new ta())
  var p = i.get(e)
  if (p) return p
  i.set(e, s),
    Zm(e)
      ? e.forEach(function (g) {
          s.add(Di(g, t, r, g, e, i))
        })
      : Xm(e) &&
        e.forEach(function (g, y) {
          s.set(y, Di(g, t, r, y, e, i))
        })
  var m = f ? (l ? rm : tm) : l ? W0 : U0,
    d = c ? void 0 : m(e)
  return (
    Mp(d || e, function (g, y) {
      d && ((y = g), (g = e[y])), ec(s, y, Di(g, t, r, y, e, i))
    }),
    s
  )
}
var A_ = 1,
  O_ = 4
function F_(e) {
  return Di(e, A_ | O_)
}
var pa =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  gc = { exports: {} }
;(function (e, t) {
  ;(function (r, n) {
    n()
  })(pa, function () {
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
          : typeof pa == 'object' && pa.global === pa
          ? pa
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
                var g = new FileReader()
                ;(g.onloadend = function () {
                  var F = g.result
                  ;(F = d ? F : F.replace(/^data:[^;]*;/, 'data:attachment/file;')),
                    h ? (h.location.href = F) : (location = F),
                    (h = null)
                }),
                  g.readAsDataURL(f)
              } else {
                var y = s.URL || s.webkitURL,
                  O = y.createObjectURL(f)
                h ? (h.location = O) : (location.href = O),
                  (h = null),
                  setTimeout(function () {
                    y.revokeObjectURL(O)
                  }, 4e4)
              }
            })
    ;(s.saveAs = l.saveAs = l), (e.exports = l)
  })
})(gc)
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var vc
function q() {
  return vc.apply(null, arguments)
}
function D_(e) {
  vc = e
}
function lr(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === '[object Array]'
}
function gn(e) {
  return e != null && Object.prototype.toString.call(e) === '[object Object]'
}
function Ce(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t)
}
function j0(e) {
  if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(e).length === 0
  var t
  for (t in e) if (Ce(e, t)) return !1
  return !0
}
function Lt(e) {
  return e === void 0
}
function br(e) {
  return typeof e == 'number' || Object.prototype.toString.call(e) === '[object Number]'
}
function Ja(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === '[object Date]'
}
function wc(e, t) {
  var r = [],
    n,
    a = e.length
  for (n = 0; n < a; ++n) r.push(t(e[n], n))
  return r
}
function qr(e, t) {
  for (var r in t) Ce(t, r) && (e[r] = t[r])
  return (
    Ce(t, 'toString') && (e.toString = t.toString), Ce(t, 'valueOf') && (e.valueOf = t.valueOf), e
  )
}
function Tr(e, t, r, n) {
  return jc(e, t, r, n, !0).utc()
}
function C_() {
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
  return e._pf == null && (e._pf = C_()), e._pf
}
var d0
Array.prototype.some
  ? (d0 = Array.prototype.some)
  : (d0 = function (e) {
      var t = Object(this),
        r = t.length >>> 0,
        n
      for (n = 0; n < r; n++) if (n in t && e.call(this, t[n], n, t)) return !0
      return !1
    })
function V0(e) {
  if (e._isValid == null) {
    var t = ge(e),
      r = d0.call(t.parsedDateParts, function (a) {
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
function ls(e) {
  var t = Tr(NaN)
  return e != null ? qr(ge(t), e) : (ge(t).userInvalidated = !0), t
}
var Rf = (q.momentProperties = []),
  Hs = !1
function G0(e, t) {
  var r,
    n,
    a,
    i = Rf.length
  if (
    (Lt(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
    Lt(t._i) || (e._i = t._i),
    Lt(t._f) || (e._f = t._f),
    Lt(t._l) || (e._l = t._l),
    Lt(t._strict) || (e._strict = t._strict),
    Lt(t._tzm) || (e._tzm = t._tzm),
    Lt(t._isUTC) || (e._isUTC = t._isUTC),
    Lt(t._offset) || (e._offset = t._offset),
    Lt(t._pf) || (e._pf = ge(t)),
    Lt(t._locale) || (e._locale = t._locale),
    i > 0)
  )
    for (r = 0; r < i; r++) (n = Rf[r]), (a = t[n]), Lt(a) || (e[n] = a)
  return e
}
function Za(e) {
  G0(this, e),
    (this._d = new Date(e._d != null ? e._d.getTime() : NaN)),
    this.isValid() || (this._d = new Date(NaN)),
    Hs === !1 && ((Hs = !0), q.updateOffset(this), (Hs = !1))
}
function cr(e) {
  return e instanceof Za || (e != null && e._isAMomentObject != null)
}
function Tc(e) {
  q.suppressDeprecationWarnings === !1 &&
    typeof console < 'u' &&
    console.warn &&
    console.warn('Deprecation warning: ' + e)
}
function er(e, t) {
  var r = !0
  return qr(function () {
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
          for (s in arguments[0]) Ce(arguments[0], s) && (a += s + ': ' + arguments[0][s] + ', ')
          a = a.slice(0, -2)
        } else a = arguments[i]
        n.push(a)
      }
      Tc(
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
var kf = {}
function Ec(e, t) {
  q.deprecationHandler != null && q.deprecationHandler(e, t), kf[e] || (Tc(t), (kf[e] = !0))
}
q.suppressDeprecationWarnings = !1
q.deprecationHandler = null
function Er(e) {
  return (
    (typeof Function < 'u' && e instanceof Function) ||
    Object.prototype.toString.call(e) === '[object Function]'
  )
}
function R_(e) {
  var t, r
  for (r in e) Ce(e, r) && ((t = e[r]), Er(t) ? (this[r] = t) : (this['_' + r] = t))
  ;(this._config = e),
    (this._dayOfMonthOrdinalParseLenient = new RegExp(
      (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source
    ))
}
function p0(e, t) {
  var r = qr({}, e),
    n
  for (n in t)
    Ce(t, n) &&
      (gn(e[n]) && gn(t[n])
        ? ((r[n] = {}), qr(r[n], e[n]), qr(r[n], t[n]))
        : t[n] != null
        ? (r[n] = t[n])
        : delete r[n])
  for (n in e) Ce(e, n) && !Ce(t, n) && gn(e[n]) && (r[n] = qr({}, r[n]))
  return r
}
function z0(e) {
  e != null && this.set(e)
}
var x0
Object.keys
  ? (x0 = Object.keys)
  : (x0 = function (e) {
      var t,
        r = []
      for (t in e) Ce(e, t) && r.push(t)
      return r
    })
var k_ = {
  sameDay: '[Today at] LT',
  nextDay: '[Tomorrow at] LT',
  nextWeek: 'dddd [at] LT',
  lastDay: '[Yesterday at] LT',
  lastWeek: '[Last] dddd [at] LT',
  sameElse: 'L'
}
function N_(e, t, r) {
  var n = this._calendar[e] || this._calendar.sameElse
  return Er(n) ? n.call(t, r) : n
}
function gr(e, t, r) {
  var n = '' + Math.abs(e),
    a = t - n.length,
    i = e >= 0
  return (i ? (r ? '+' : '') : '-') + Math.pow(10, Math.max(0, a)).toString().substr(1) + n
}
var X0 =
    /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
  gi = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
  $s = {},
  Yn = {}
function pe(e, t, r, n) {
  var a = n
  typeof n == 'string' &&
    (a = function () {
      return this[n]()
    }),
    e && (Yn[e] = a),
    t &&
      (Yn[t[0]] = function () {
        return gr(a.apply(this, arguments), t[1], t[2])
      }),
    r &&
      (Yn[r] = function () {
        return this.localeData().ordinal(a.apply(this, arguments), e)
      })
}
function P_(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, '') : e.replace(/\\/g, '')
}
function I_(e) {
  var t = e.match(X0),
    r,
    n
  for (r = 0, n = t.length; r < n; r++) Yn[t[r]] ? (t[r] = Yn[t[r]]) : (t[r] = P_(t[r]))
  return function (a) {
    var i = '',
      s
    for (s = 0; s < n; s++) i += Er(t[s]) ? t[s].call(a, e) : t[s]
    return i
  }
}
function Ci(e, t) {
  return e.isValid()
    ? ((t = Sc(t, e.localeData())), ($s[t] = $s[t] || I_(t)), $s[t](e))
    : e.localeData().invalidDate()
}
function Sc(e, t) {
  var r = 5
  function n(a) {
    return t.longDateFormat(a) || a
  }
  for (gi.lastIndex = 0; r >= 0 && gi.test(e); )
    (e = e.replace(gi, n)), (gi.lastIndex = 0), (r -= 1)
  return e
}
var M_ = {
  LTS: 'h:mm:ss A',
  LT: 'h:mm A',
  L: 'MM/DD/YYYY',
  LL: 'MMMM D, YYYY',
  LLL: 'MMMM D, YYYY h:mm A',
  LLLL: 'dddd, MMMM D, YYYY h:mm A'
}
function b_(e) {
  var t = this._longDateFormat[e],
    r = this._longDateFormat[e.toUpperCase()]
  return t || !r
    ? t
    : ((this._longDateFormat[e] = r
        .match(X0)
        .map(function (n) {
          return n === 'MMMM' || n === 'MM' || n === 'DD' || n === 'dddd' ? n.slice(1) : n
        })
        .join('')),
      this._longDateFormat[e])
}
var L_ = 'Invalid date'
function B_() {
  return this._invalidDate
}
var U_ = '%d',
  W_ = /\d{1,2}/
function H_(e) {
  return this._ordinal.replace('%d', e)
}
var $_ = {
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
function Y_(e, t, r, n) {
  var a = this._relativeTime[r]
  return Er(a) ? a(e, t, r, n) : a.replace(/%d/i, e)
}
function j_(e, t) {
  var r = this._relativeTime[e > 0 ? 'future' : 'past']
  return Er(r) ? r(t) : r.replace(/%s/i, t)
}
var Fa = {}
function Ct(e, t) {
  var r = e.toLowerCase()
  Fa[r] = Fa[r + 's'] = Fa[t] = e
}
function tr(e) {
  return typeof e == 'string' ? Fa[e] || Fa[e.toLowerCase()] : void 0
}
function K0(e) {
  var t = {},
    r,
    n
  for (n in e) Ce(e, n) && ((r = tr(n)), r && (t[r] = e[n]))
  return t
}
var yc = {}
function Rt(e, t) {
  yc[e] = t
}
function V_(e) {
  var t = [],
    r
  for (r in e) Ce(e, r) && t.push({ unit: r, priority: yc[r] })
  return (
    t.sort(function (n, a) {
      return n.priority - a.priority
    }),
    t
  )
}
function cs(e) {
  return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0
}
function Zt(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
}
function we(e) {
  var t = +e,
    r = 0
  return t !== 0 && isFinite(t) && (r = Zt(t)), r
}
function ra(e, t) {
  return function (r) {
    return r != null ? (Ac(this, e, r), q.updateOffset(this, t), this) : bi(this, e)
  }
}
function bi(e, t) {
  return e.isValid() ? e._d['get' + (e._isUTC ? 'UTC' : '') + t]() : NaN
}
function Ac(e, t, r) {
  e.isValid() &&
    !isNaN(r) &&
    (t === 'FullYear' && cs(e.year()) && e.month() === 1 && e.date() === 29
      ? ((r = we(r)), e._d['set' + (e._isUTC ? 'UTC' : '') + t](r, e.month(), ms(r, e.month())))
      : e._d['set' + (e._isUTC ? 'UTC' : '') + t](r))
}
function G_(e) {
  return (e = tr(e)), Er(this[e]) ? this[e]() : this
}
function z_(e, t) {
  if (typeof e == 'object') {
    e = K0(e)
    var r = V_(e),
      n,
      a = r.length
    for (n = 0; n < a; n++) this[r[n].unit](e[r[n].unit])
  } else if (((e = tr(e)), Er(this[e]))) return this[e](t)
  return this
}
var Oc = /\d/,
  Xt = /\d\d/,
  Fc = /\d{3}/,
  q0 = /\d{4}/,
  us = /[+-]?\d{6}/,
  ze = /\d\d?/,
  Dc = /\d\d\d\d?/,
  Cc = /\d\d\d\d\d\d?/,
  hs = /\d{1,3}/,
  J0 = /\d{1,4}/,
  ds = /[+-]?\d{1,6}/,
  na = /\d+/,
  ps = /[+-]?\d+/,
  X_ = /Z|[+-]\d\d:?\d\d/gi,
  xs = /Z|[+-]\d\d(?::?\d\d)?/gi,
  K_ = /[+-]?\d+(\.\d{1,3})?/,
  Qa =
    /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
  Li
Li = {}
function oe(e, t, r) {
  Li[e] = Er(t)
    ? t
    : function (n, a) {
        return n && r ? r : t
      }
}
function q_(e, t) {
  return Ce(Li, e) ? Li[e](t._strict, t._locale) : new RegExp(J_(e))
}
function J_(e) {
  return jt(
    e.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, r, n, a, i) {
      return r || n || a || i
    })
  )
}
function jt(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
}
var m0 = {}
function We(e, t) {
  var r,
    n = t,
    a
  for (
    typeof e == 'string' && (e = [e]),
      br(t) &&
        (n = function (i, s) {
          s[t] = we(i)
        }),
      a = e.length,
      r = 0;
    r < a;
    r++
  )
    m0[e[r]] = n
}
function ei(e, t) {
  We(e, function (r, n, a, i) {
    ;(a._w = a._w || {}), t(r, a._w, a, i)
  })
}
function Z_(e, t, r) {
  t != null && Ce(m0, e) && m0[e](t, r._a, r, e)
}
var Ot = 0,
  Dr = 1,
  mr = 2,
  ut = 3,
  sr = 4,
  Cr = 5,
  mn = 6,
  Q_ = 7,
  eg = 8
function tg(e, t) {
  return ((e % t) + t) % t
}
var rt
Array.prototype.indexOf
  ? (rt = Array.prototype.indexOf)
  : (rt = function (e) {
      var t
      for (t = 0; t < this.length; ++t) if (this[t] === e) return t
      return -1
    })
function ms(e, t) {
  if (isNaN(e) || isNaN(t)) return NaN
  var r = tg(t, 12)
  return (e += (t - r) / 12), r === 1 ? (cs(e) ? 29 : 28) : 31 - ((r % 7) % 2)
}
pe('M', ['MM', 2], 'Mo', function () {
  return this.month() + 1
})
pe('MMM', 0, 0, function (e) {
  return this.localeData().monthsShort(this, e)
})
pe('MMMM', 0, 0, function (e) {
  return this.localeData().months(this, e)
})
Ct('month', 'M')
Rt('month', 8)
oe('M', ze)
oe('MM', ze, Xt)
oe('MMM', function (e, t) {
  return t.monthsShortRegex(e)
})
oe('MMMM', function (e, t) {
  return t.monthsRegex(e)
})
We(['M', 'MM'], function (e, t) {
  t[Dr] = we(e) - 1
})
We(['MMM', 'MMMM'], function (e, t, r, n) {
  var a = r._locale.monthsParse(e, n, r._strict)
  a != null ? (t[Dr] = a) : (ge(r).invalidMonth = e)
})
var rg =
    'January_February_March_April_May_June_July_August_September_October_November_December'.split(
      '_'
    ),
  Rc = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
  kc = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
  ng = Qa,
  ag = Qa
function ig(e, t) {
  return e
    ? lr(this._months)
      ? this._months[e.month()]
      : this._months[(this._months.isFormat || kc).test(t) ? 'format' : 'standalone'][e.month()]
    : lr(this._months)
    ? this._months
    : this._months.standalone
}
function sg(e, t) {
  return e
    ? lr(this._monthsShort)
      ? this._monthsShort[e.month()]
      : this._monthsShort[kc.test(t) ? 'format' : 'standalone'][e.month()]
    : lr(this._monthsShort)
    ? this._monthsShort
    : this._monthsShort.standalone
}
function og(e, t, r) {
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
      (i = Tr([2e3, n])),
        (this._shortMonthsParse[n] = this.monthsShort(i, '').toLocaleLowerCase()),
        (this._longMonthsParse[n] = this.months(i, '').toLocaleLowerCase())
  return r
    ? t === 'MMM'
      ? ((a = rt.call(this._shortMonthsParse, s)), a !== -1 ? a : null)
      : ((a = rt.call(this._longMonthsParse, s)), a !== -1 ? a : null)
    : t === 'MMM'
    ? ((a = rt.call(this._shortMonthsParse, s)),
      a !== -1 ? a : ((a = rt.call(this._longMonthsParse, s)), a !== -1 ? a : null))
    : ((a = rt.call(this._longMonthsParse, s)),
      a !== -1 ? a : ((a = rt.call(this._shortMonthsParse, s)), a !== -1 ? a : null))
}
function fg(e, t, r) {
  var n, a, i
  if (this._monthsParseExact) return og.call(this, e, t, r)
  for (
    this._monthsParse ||
      ((this._monthsParse = []), (this._longMonthsParse = []), (this._shortMonthsParse = [])),
      n = 0;
    n < 12;
    n++
  ) {
    if (
      ((a = Tr([2e3, n])),
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
function Nc(e, t) {
  var r
  if (!e.isValid()) return e
  if (typeof t == 'string') {
    if (/^\d+$/.test(t)) t = we(t)
    else if (((t = e.localeData().monthsParse(t)), !br(t))) return e
  }
  return (
    (r = Math.min(e.date(), ms(e.year(), t))),
    e._d['set' + (e._isUTC ? 'UTC' : '') + 'Month'](t, r),
    e
  )
}
function Pc(e) {
  return e != null ? (Nc(this, e), q.updateOffset(this, !0), this) : bi(this, 'Month')
}
function lg() {
  return ms(this.year(), this.month())
}
function cg(e) {
  return this._monthsParseExact
    ? (Ce(this, '_monthsRegex') || Ic.call(this),
      e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    : (Ce(this, '_monthsShortRegex') || (this._monthsShortRegex = ng),
      this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
}
function ug(e) {
  return this._monthsParseExact
    ? (Ce(this, '_monthsRegex') || Ic.call(this), e ? this._monthsStrictRegex : this._monthsRegex)
    : (Ce(this, '_monthsRegex') || (this._monthsRegex = ag),
      this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
}
function Ic() {
  function e(s, o) {
    return o.length - s.length
  }
  var t = [],
    r = [],
    n = [],
    a,
    i
  for (a = 0; a < 12; a++)
    (i = Tr([2e3, a])),
      t.push(this.monthsShort(i, '')),
      r.push(this.months(i, '')),
      n.push(this.months(i, '')),
      n.push(this.monthsShort(i, ''))
  for (t.sort(e), r.sort(e), n.sort(e), a = 0; a < 12; a++) (t[a] = jt(t[a])), (r[a] = jt(r[a]))
  for (a = 0; a < 24; a++) n[a] = jt(n[a])
  ;(this._monthsRegex = new RegExp('^(' + n.join('|') + ')', 'i')),
    (this._monthsShortRegex = this._monthsRegex),
    (this._monthsStrictRegex = new RegExp('^(' + r.join('|') + ')', 'i')),
    (this._monthsShortStrictRegex = new RegExp('^(' + t.join('|') + ')', 'i'))
}
pe('Y', 0, 0, function () {
  var e = this.year()
  return e <= 9999 ? gr(e, 4) : '+' + e
})
pe(0, ['YY', 2], 0, function () {
  return this.year() % 100
})
pe(0, ['YYYY', 4], 0, 'year')
pe(0, ['YYYYY', 5], 0, 'year')
pe(0, ['YYYYYY', 6, !0], 0, 'year')
Ct('year', 'y')
Rt('year', 1)
oe('Y', ps)
oe('YY', ze, Xt)
oe('YYYY', J0, q0)
oe('YYYYY', ds, us)
oe('YYYYYY', ds, us)
We(['YYYYY', 'YYYYYY'], Ot)
We('YYYY', function (e, t) {
  t[Ot] = e.length === 2 ? q.parseTwoDigitYear(e) : we(e)
})
We('YY', function (e, t) {
  t[Ot] = q.parseTwoDigitYear(e)
})
We('Y', function (e, t) {
  t[Ot] = parseInt(e, 10)
})
function Da(e) {
  return cs(e) ? 366 : 365
}
q.parseTwoDigitYear = function (e) {
  return we(e) + (we(e) > 68 ? 1900 : 2e3)
}
var Mc = ra('FullYear', !0)
function hg() {
  return cs(this.year())
}
function dg(e, t, r, n, a, i, s) {
  var o
  return (
    e < 100 && e >= 0
      ? ((o = new Date(e + 400, t, r, n, a, i, s)), isFinite(o.getFullYear()) && o.setFullYear(e))
      : (o = new Date(e, t, r, n, a, i, s)),
    o
  )
}
function Ba(e) {
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
function Bi(e, t, r) {
  var n = 7 + t - r,
    a = (7 + Ba(e, 0, n).getUTCDay() - t) % 7
  return -a + n - 1
}
function bc(e, t, r, n, a) {
  var i = (7 + r - n) % 7,
    s = Bi(e, n, a),
    o = 1 + 7 * (t - 1) + i + s,
    l,
    f
  return (
    o <= 0
      ? ((l = e - 1), (f = Da(l) + o))
      : o > Da(e)
      ? ((l = e + 1), (f = o - Da(e)))
      : ((l = e), (f = o)),
    {
      year: l,
      dayOfYear: f
    }
  )
}
function Ua(e, t, r) {
  var n = Bi(e.year(), t, r),
    a = Math.floor((e.dayOfYear() - n - 1) / 7) + 1,
    i,
    s
  return (
    a < 1
      ? ((s = e.year() - 1), (i = a + kr(s, t, r)))
      : a > kr(e.year(), t, r)
      ? ((i = a - kr(e.year(), t, r)), (s = e.year() + 1))
      : ((s = e.year()), (i = a)),
    {
      week: i,
      year: s
    }
  )
}
function kr(e, t, r) {
  var n = Bi(e, t, r),
    a = Bi(e + 1, t, r)
  return (Da(e) - n + a) / 7
}
pe('w', ['ww', 2], 'wo', 'week')
pe('W', ['WW', 2], 'Wo', 'isoWeek')
Ct('week', 'w')
Ct('isoWeek', 'W')
Rt('week', 5)
Rt('isoWeek', 5)
oe('w', ze)
oe('ww', ze, Xt)
oe('W', ze)
oe('WW', ze, Xt)
ei(['w', 'ww', 'W', 'WW'], function (e, t, r, n) {
  t[n.substr(0, 1)] = we(e)
})
function pg(e) {
  return Ua(e, this._week.dow, this._week.doy).week
}
var xg = {
  dow: 0,
  doy: 6
}
function mg() {
  return this._week.dow
}
function _g() {
  return this._week.doy
}
function gg(e) {
  var t = this.localeData().week(this)
  return e == null ? t : this.add((e - t) * 7, 'd')
}
function vg(e) {
  var t = Ua(this, 1, 4).week
  return e == null ? t : this.add((e - t) * 7, 'd')
}
pe('d', 0, 'do', 'day')
pe('dd', 0, 0, function (e) {
  return this.localeData().weekdaysMin(this, e)
})
pe('ddd', 0, 0, function (e) {
  return this.localeData().weekdaysShort(this, e)
})
pe('dddd', 0, 0, function (e) {
  return this.localeData().weekdays(this, e)
})
pe('e', 0, 0, 'weekday')
pe('E', 0, 0, 'isoWeekday')
Ct('day', 'd')
Ct('weekday', 'e')
Ct('isoWeekday', 'E')
Rt('day', 11)
Rt('weekday', 11)
Rt('isoWeekday', 11)
oe('d', ze)
oe('e', ze)
oe('E', ze)
oe('dd', function (e, t) {
  return t.weekdaysMinRegex(e)
})
oe('ddd', function (e, t) {
  return t.weekdaysShortRegex(e)
})
oe('dddd', function (e, t) {
  return t.weekdaysRegex(e)
})
ei(['dd', 'ddd', 'dddd'], function (e, t, r, n) {
  var a = r._locale.weekdaysParse(e, n, r._strict)
  a != null ? (t.d = a) : (ge(r).invalidWeekday = e)
})
ei(['d', 'e', 'E'], function (e, t, r, n) {
  t[n] = we(e)
})
function wg(e, t) {
  return typeof e != 'string'
    ? e
    : isNaN(e)
    ? ((e = t.weekdaysParse(e)), typeof e == 'number' ? e : null)
    : parseInt(e, 10)
}
function Tg(e, t) {
  return typeof e == 'string' ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
}
function Z0(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t))
}
var Eg = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
  Lc = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
  Sg = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
  yg = Qa,
  Ag = Qa,
  Og = Qa
function Fg(e, t) {
  var r = lr(this._weekdays)
    ? this._weekdays
    : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? 'format' : 'standalone']
  return e === !0 ? Z0(r, this._week.dow) : e ? r[e.day()] : r
}
function Dg(e) {
  return e === !0
    ? Z0(this._weekdaysShort, this._week.dow)
    : e
    ? this._weekdaysShort[e.day()]
    : this._weekdaysShort
}
function Cg(e) {
  return e === !0
    ? Z0(this._weekdaysMin, this._week.dow)
    : e
    ? this._weekdaysMin[e.day()]
    : this._weekdaysMin
}
function Rg(e, t, r) {
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
      (i = Tr([2e3, 1]).day(n)),
        (this._minWeekdaysParse[n] = this.weekdaysMin(i, '').toLocaleLowerCase()),
        (this._shortWeekdaysParse[n] = this.weekdaysShort(i, '').toLocaleLowerCase()),
        (this._weekdaysParse[n] = this.weekdays(i, '').toLocaleLowerCase())
  return r
    ? t === 'dddd'
      ? ((a = rt.call(this._weekdaysParse, s)), a !== -1 ? a : null)
      : t === 'ddd'
      ? ((a = rt.call(this._shortWeekdaysParse, s)), a !== -1 ? a : null)
      : ((a = rt.call(this._minWeekdaysParse, s)), a !== -1 ? a : null)
    : t === 'dddd'
    ? ((a = rt.call(this._weekdaysParse, s)),
      a !== -1 || ((a = rt.call(this._shortWeekdaysParse, s)), a !== -1)
        ? a
        : ((a = rt.call(this._minWeekdaysParse, s)), a !== -1 ? a : null))
    : t === 'ddd'
    ? ((a = rt.call(this._shortWeekdaysParse, s)),
      a !== -1 || ((a = rt.call(this._weekdaysParse, s)), a !== -1)
        ? a
        : ((a = rt.call(this._minWeekdaysParse, s)), a !== -1 ? a : null))
    : ((a = rt.call(this._minWeekdaysParse, s)),
      a !== -1 || ((a = rt.call(this._weekdaysParse, s)), a !== -1)
        ? a
        : ((a = rt.call(this._shortWeekdaysParse, s)), a !== -1 ? a : null))
}
function kg(e, t, r) {
  var n, a, i
  if (this._weekdaysParseExact) return Rg.call(this, e, t, r)
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
      ((a = Tr([2e3, 1]).day(n)),
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
function Ng(e) {
  if (!this.isValid()) return e != null ? this : NaN
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay()
  return e != null ? ((e = wg(e, this.localeData())), this.add(e - t, 'd')) : t
}
function Pg(e) {
  if (!this.isValid()) return e != null ? this : NaN
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7
  return e == null ? t : this.add(e - t, 'd')
}
function Ig(e) {
  if (!this.isValid()) return e != null ? this : NaN
  if (e != null) {
    var t = Tg(e, this.localeData())
    return this.day(this.day() % 7 ? t : t - 7)
  } else return this.day() || 7
}
function Mg(e) {
  return this._weekdaysParseExact
    ? (Ce(this, '_weekdaysRegex') || Q0.call(this),
      e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    : (Ce(this, '_weekdaysRegex') || (this._weekdaysRegex = yg),
      this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
}
function bg(e) {
  return this._weekdaysParseExact
    ? (Ce(this, '_weekdaysRegex') || Q0.call(this),
      e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    : (Ce(this, '_weekdaysShortRegex') || (this._weekdaysShortRegex = Ag),
      this._weekdaysShortStrictRegex && e
        ? this._weekdaysShortStrictRegex
        : this._weekdaysShortRegex)
}
function Lg(e) {
  return this._weekdaysParseExact
    ? (Ce(this, '_weekdaysRegex') || Q0.call(this),
      e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    : (Ce(this, '_weekdaysMinRegex') || (this._weekdaysMinRegex = Og),
      this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
}
function Q0() {
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
    (s = Tr([2e3, 1]).day(i)),
      (o = jt(this.weekdaysMin(s, ''))),
      (l = jt(this.weekdaysShort(s, ''))),
      (f = jt(this.weekdays(s, ''))),
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
function eo() {
  return this.hours() % 12 || 12
}
function Bg() {
  return this.hours() || 24
}
pe('H', ['HH', 2], 0, 'hour')
pe('h', ['hh', 2], 0, eo)
pe('k', ['kk', 2], 0, Bg)
pe('hmm', 0, 0, function () {
  return '' + eo.apply(this) + gr(this.minutes(), 2)
})
pe('hmmss', 0, 0, function () {
  return '' + eo.apply(this) + gr(this.minutes(), 2) + gr(this.seconds(), 2)
})
pe('Hmm', 0, 0, function () {
  return '' + this.hours() + gr(this.minutes(), 2)
})
pe('Hmmss', 0, 0, function () {
  return '' + this.hours() + gr(this.minutes(), 2) + gr(this.seconds(), 2)
})
function Bc(e, t) {
  pe(e, 0, 0, function () {
    return this.localeData().meridiem(this.hours(), this.minutes(), t)
  })
}
Bc('a', !0)
Bc('A', !1)
Ct('hour', 'h')
Rt('hour', 13)
function Uc(e, t) {
  return t._meridiemParse
}
oe('a', Uc)
oe('A', Uc)
oe('H', ze)
oe('h', ze)
oe('k', ze)
oe('HH', ze, Xt)
oe('hh', ze, Xt)
oe('kk', ze, Xt)
oe('hmm', Dc)
oe('hmmss', Cc)
oe('Hmm', Dc)
oe('Hmmss', Cc)
We(['H', 'HH'], ut)
We(['k', 'kk'], function (e, t, r) {
  var n = we(e)
  t[ut] = n === 24 ? 0 : n
})
We(['a', 'A'], function (e, t, r) {
  ;(r._isPm = r._locale.isPM(e)), (r._meridiem = e)
})
We(['h', 'hh'], function (e, t, r) {
  ;(t[ut] = we(e)), (ge(r).bigHour = !0)
})
We('hmm', function (e, t, r) {
  var n = e.length - 2
  ;(t[ut] = we(e.substr(0, n))), (t[sr] = we(e.substr(n))), (ge(r).bigHour = !0)
})
We('hmmss', function (e, t, r) {
  var n = e.length - 4,
    a = e.length - 2
  ;(t[ut] = we(e.substr(0, n))),
    (t[sr] = we(e.substr(n, 2))),
    (t[Cr] = we(e.substr(a))),
    (ge(r).bigHour = !0)
})
We('Hmm', function (e, t, r) {
  var n = e.length - 2
  ;(t[ut] = we(e.substr(0, n))), (t[sr] = we(e.substr(n)))
})
We('Hmmss', function (e, t, r) {
  var n = e.length - 4,
    a = e.length - 2
  ;(t[ut] = we(e.substr(0, n))), (t[sr] = we(e.substr(n, 2))), (t[Cr] = we(e.substr(a)))
})
function Ug(e) {
  return (e + '').toLowerCase().charAt(0) === 'p'
}
var Wg = /[ap]\.?m?\.?/i,
  Hg = ra('Hours', !0)
function $g(e, t, r) {
  return e > 11 ? (r ? 'pm' : 'PM') : r ? 'am' : 'AM'
}
var Wc = {
    calendar: k_,
    longDateFormat: M_,
    invalidDate: L_,
    ordinal: U_,
    dayOfMonthOrdinalParse: W_,
    relativeTime: $_,
    months: rg,
    monthsShort: Rc,
    week: xg,
    weekdays: Eg,
    weekdaysMin: Sg,
    weekdaysShort: Lc,
    meridiemParse: Wg
  },
  Ke = {},
  xa = {},
  Wa
function Yg(e, t) {
  var r,
    n = Math.min(e.length, t.length)
  for (r = 0; r < n; r += 1) if (e[r] !== t[r]) return r
  return n
}
function Nf(e) {
  return e && e.toLowerCase().replace('_', '-')
}
function jg(e) {
  for (var t = 0, r, n, a, i; t < e.length; ) {
    for (
      i = Nf(e[t]).split('-'), r = i.length, n = Nf(e[t + 1]), n = n ? n.split('-') : null;
      r > 0;

    ) {
      if (((a = _s(i.slice(0, r).join('-'))), a)) return a
      if (n && n.length >= r && Yg(i, n) >= r - 1) break
      r--
    }
    t++
  }
  return Wa
}
function Vg(e) {
  return e.match('^[^/\\\\]*$') != null
}
function _s(e) {
  var t = null,
    r
  if (Ke[e] === void 0 && typeof module < 'u' && module && module.exports && Vg(e))
    try {
      ;(t = Wa._abbr), (r = require), r('./locale/' + e), rn(t)
    } catch {
      Ke[e] = null
    }
  return Ke[e]
}
function rn(e, t) {
  var r
  return (
    e &&
      (Lt(t) ? (r = Hr(e)) : (r = to(e, t)),
      r
        ? (Wa = r)
        : typeof console < 'u' &&
          console.warn &&
          console.warn('Locale ' + e + ' not found. Did you forget to load it?')),
    Wa._abbr
  )
}
function to(e, t) {
  if (t !== null) {
    var r,
      n = Wc
    if (((t.abbr = e), Ke[e] != null))
      Ec(
        'defineLocaleOverride',
        'use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
      ),
        (n = Ke[e]._config)
    else if (t.parentLocale != null)
      if (Ke[t.parentLocale] != null) n = Ke[t.parentLocale]._config
      else if (((r = _s(t.parentLocale)), r != null)) n = r._config
      else
        return (
          xa[t.parentLocale] || (xa[t.parentLocale] = []),
          xa[t.parentLocale].push({
            name: e,
            config: t
          }),
          null
        )
    return (
      (Ke[e] = new z0(p0(n, t))),
      xa[e] &&
        xa[e].forEach(function (a) {
          to(a.name, a.config)
        }),
      rn(e),
      Ke[e]
    )
  } else return delete Ke[e], null
}
function Gg(e, t) {
  if (t != null) {
    var r,
      n,
      a = Wc
    Ke[e] != null && Ke[e].parentLocale != null
      ? Ke[e].set(p0(Ke[e]._config, t))
      : ((n = _s(e)),
        n != null && (a = n._config),
        (t = p0(a, t)),
        n == null && (t.abbr = e),
        (r = new z0(t)),
        (r.parentLocale = Ke[e]),
        (Ke[e] = r)),
      rn(e)
  } else
    Ke[e] != null &&
      (Ke[e].parentLocale != null
        ? ((Ke[e] = Ke[e].parentLocale), e === rn() && rn(e))
        : Ke[e] != null && delete Ke[e])
  return Ke[e]
}
function Hr(e) {
  var t
  if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)) return Wa
  if (!lr(e)) {
    if (((t = _s(e)), t)) return t
    e = [e]
  }
  return jg(e)
}
function zg() {
  return x0(Ke)
}
function ro(e) {
  var t,
    r = e._a
  return (
    r &&
      ge(e).overflow === -2 &&
      ((t =
        r[Dr] < 0 || r[Dr] > 11
          ? Dr
          : r[mr] < 1 || r[mr] > ms(r[Ot], r[Dr])
          ? mr
          : r[ut] < 0 || r[ut] > 24 || (r[ut] === 24 && (r[sr] !== 0 || r[Cr] !== 0 || r[mn] !== 0))
          ? ut
          : r[sr] < 0 || r[sr] > 59
          ? sr
          : r[Cr] < 0 || r[Cr] > 59
          ? Cr
          : r[mn] < 0 || r[mn] > 999
          ? mn
          : -1),
      ge(e)._overflowDayOfYear && (t < Ot || t > mr) && (t = mr),
      ge(e)._overflowWeeks && t === -1 && (t = Q_),
      ge(e)._overflowWeekday && t === -1 && (t = eg),
      (ge(e).overflow = t)),
    e
  )
}
var Xg =
    /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
  Kg =
    /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
  qg = /Z|[+-]\d\d(?::?\d\d)?/,
  vi = [
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
  Ys = [
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
  Jg = /^\/?Date\((-?\d+)/i,
  Zg =
    /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
  Qg = {
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
function Hc(e) {
  var t,
    r,
    n = e._i,
    a = Xg.exec(n) || Kg.exec(n),
    i,
    s,
    o,
    l,
    f = vi.length,
    c = Ys.length
  if (a) {
    for (ge(e).iso = !0, t = 0, r = f; t < r; t++)
      if (vi[t][1].exec(a[1])) {
        ;(s = vi[t][0]), (i = vi[t][2] !== !1)
        break
      }
    if (s == null) {
      e._isValid = !1
      return
    }
    if (a[3]) {
      for (t = 0, r = c; t < r; t++)
        if (Ys[t][1].exec(a[3])) {
          o = (a[2] || ' ') + Ys[t][0]
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
      if (qg.exec(a[4])) l = 'Z'
      else {
        e._isValid = !1
        return
      }
    ;(e._f = s + (o || '') + (l || '')), ao(e)
  } else e._isValid = !1
}
function e2(e, t, r, n, a, i) {
  var s = [t2(e), Rc.indexOf(t), parseInt(r, 10), parseInt(n, 10), parseInt(a, 10)]
  return i && s.push(parseInt(i, 10)), s
}
function t2(e) {
  var t = parseInt(e, 10)
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
}
function r2(e) {
  return e
    .replace(/\([^()]*\)|[\n\t]/g, ' ')
    .replace(/(\s\s+)/g, ' ')
    .replace(/^\s\s*/, '')
    .replace(/\s\s*$/, '')
}
function n2(e, t, r) {
  if (e) {
    var n = Lc.indexOf(e),
      a = new Date(t[0], t[1], t[2]).getDay()
    if (n !== a) return (ge(r).weekdayMismatch = !0), (r._isValid = !1), !1
  }
  return !0
}
function a2(e, t, r) {
  if (e) return Qg[e]
  if (t) return 0
  var n = parseInt(r, 10),
    a = n % 100,
    i = (n - a) / 100
  return i * 60 + a
}
function $c(e) {
  var t = Zg.exec(r2(e._i)),
    r
  if (t) {
    if (((r = e2(t[4], t[3], t[2], t[5], t[6], t[7])), !n2(t[1], r, e))) return
    ;(e._a = r),
      (e._tzm = a2(t[8], t[9], t[10])),
      (e._d = Ba.apply(null, e._a)),
      e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
      (ge(e).rfc2822 = !0)
  } else e._isValid = !1
}
function i2(e) {
  var t = Jg.exec(e._i)
  if (t !== null) {
    e._d = new Date(+t[1])
    return
  }
  if ((Hc(e), e._isValid === !1)) delete e._isValid
  else return
  if (($c(e), e._isValid === !1)) delete e._isValid
  else return
  e._strict ? (e._isValid = !1) : q.createFromInputFallback(e)
}
q.createFromInputFallback = er(
  'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
  function (e) {
    e._d = new Date(e._i + (e._useUTC ? ' UTC' : ''))
  }
)
function Bn(e, t, r) {
  return e != null ? e : t != null ? t : r
}
function s2(e) {
  var t = new Date(q.now())
  return e._useUTC
    ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
    : [t.getFullYear(), t.getMonth(), t.getDate()]
}
function no(e) {
  var t,
    r,
    n = [],
    a,
    i,
    s
  if (!e._d) {
    for (
      a = s2(e),
        e._w && e._a[mr] == null && e._a[Dr] == null && o2(e),
        e._dayOfYear != null &&
          ((s = Bn(e._a[Ot], a[Ot])),
          (e._dayOfYear > Da(s) || e._dayOfYear === 0) && (ge(e)._overflowDayOfYear = !0),
          (r = Ba(s, 0, e._dayOfYear)),
          (e._a[Dr] = r.getUTCMonth()),
          (e._a[mr] = r.getUTCDate())),
        t = 0;
      t < 3 && e._a[t] == null;
      ++t
    )
      e._a[t] = n[t] = a[t]
    for (; t < 7; t++) e._a[t] = n[t] = e._a[t] == null ? (t === 2 ? 1 : 0) : e._a[t]
    e._a[ut] === 24 &&
      e._a[sr] === 0 &&
      e._a[Cr] === 0 &&
      e._a[mn] === 0 &&
      ((e._nextDay = !0), (e._a[ut] = 0)),
      (e._d = (e._useUTC ? Ba : dg).apply(null, n)),
      (i = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
      e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
      e._nextDay && (e._a[ut] = 24),
      e._w && typeof e._w.d < 'u' && e._w.d !== i && (ge(e).weekdayMismatch = !0)
  }
}
function o2(e) {
  var t, r, n, a, i, s, o, l, f
  ;(t = e._w),
    t.GG != null || t.W != null || t.E != null
      ? ((i = 1),
        (s = 4),
        (r = Bn(t.GG, e._a[Ot], Ua(Ve(), 1, 4).year)),
        (n = Bn(t.W, 1)),
        (a = Bn(t.E, 1)),
        (a < 1 || a > 7) && (l = !0))
      : ((i = e._locale._week.dow),
        (s = e._locale._week.doy),
        (f = Ua(Ve(), i, s)),
        (r = Bn(t.gg, e._a[Ot], f.year)),
        (n = Bn(t.w, f.week)),
        t.d != null
          ? ((a = t.d), (a < 0 || a > 6) && (l = !0))
          : t.e != null
          ? ((a = t.e + i), (t.e < 0 || t.e > 6) && (l = !0))
          : (a = i)),
    n < 1 || n > kr(r, i, s)
      ? (ge(e)._overflowWeeks = !0)
      : l != null
      ? (ge(e)._overflowWeekday = !0)
      : ((o = bc(r, n, a, i, s)), (e._a[Ot] = o.year), (e._dayOfYear = o.dayOfYear))
}
q.ISO_8601 = function () {}
q.RFC_2822 = function () {}
function ao(e) {
  if (e._f === q.ISO_8601) {
    Hc(e)
    return
  }
  if (e._f === q.RFC_2822) {
    $c(e)
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
  for (a = Sc(e._f, e._locale).match(X0) || [], c = a.length, r = 0; r < c; r++)
    (i = a[r]),
      (n = (t.match(q_(i, e)) || [])[0]),
      n &&
        ((s = t.substr(0, t.indexOf(n))),
        s.length > 0 && ge(e).unusedInput.push(s),
        (t = t.slice(t.indexOf(n) + n.length)),
        (l += n.length)),
      Yn[i]
        ? (n ? (ge(e).empty = !1) : ge(e).unusedTokens.push(i), Z_(i, n, e))
        : e._strict && !n && ge(e).unusedTokens.push(i)
  ;(ge(e).charsLeftOver = o - l),
    t.length > 0 && ge(e).unusedInput.push(t),
    e._a[ut] <= 12 && ge(e).bigHour === !0 && e._a[ut] > 0 && (ge(e).bigHour = void 0),
    (ge(e).parsedDateParts = e._a.slice(0)),
    (ge(e).meridiem = e._meridiem),
    (e._a[ut] = f2(e._locale, e._a[ut], e._meridiem)),
    (f = ge(e).era),
    f !== null && (e._a[Ot] = e._locale.erasConvertYear(f, e._a[Ot])),
    no(e),
    ro(e)
}
function f2(e, t, r) {
  var n
  return r == null
    ? t
    : e.meridiemHour != null
    ? e.meridiemHour(t, r)
    : (e.isPM != null && ((n = e.isPM(r)), n && t < 12 && (t += 12), !n && t === 12 && (t = 0)), t)
}
function l2(e) {
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
      (t = G0({}, e)),
      e._useUTC != null && (t._useUTC = e._useUTC),
      (t._f = e._f[a]),
      ao(t),
      V0(t) && (s = !0),
      (i += ge(t).charsLeftOver),
      (i += ge(t).unusedTokens.length * 10),
      (ge(t).score = i),
      o
        ? i < n && ((n = i), (r = t))
        : (n == null || i < n || s) && ((n = i), (r = t), s && (o = !0))
  qr(e, r || t)
}
function c2(e) {
  if (!e._d) {
    var t = K0(e._i),
      r = t.day === void 0 ? t.date : t.day
    ;(e._a = wc([t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond], function (n) {
      return n && parseInt(n, 10)
    })),
      no(e)
  }
}
function u2(e) {
  var t = new Za(ro(Yc(e)))
  return t._nextDay && (t.add(1, 'd'), (t._nextDay = void 0)), t
}
function Yc(e) {
  var t = e._i,
    r = e._f
  return (
    (e._locale = e._locale || Hr(e._l)),
    t === null || (r === void 0 && t === '')
      ? ls({ nullInput: !0 })
      : (typeof t == 'string' && (e._i = t = e._locale.preparse(t)),
        cr(t)
          ? new Za(ro(t))
          : (Ja(t) ? (e._d = t) : lr(r) ? l2(e) : r ? ao(e) : h2(e), V0(e) || (e._d = null), e))
  )
}
function h2(e) {
  var t = e._i
  Lt(t)
    ? (e._d = new Date(q.now()))
    : Ja(t)
    ? (e._d = new Date(t.valueOf()))
    : typeof t == 'string'
    ? i2(e)
    : lr(t)
    ? ((e._a = wc(t.slice(0), function (r) {
        return parseInt(r, 10)
      })),
      no(e))
    : gn(t)
    ? c2(e)
    : br(t)
    ? (e._d = new Date(t))
    : q.createFromInputFallback(e)
}
function jc(e, t, r, n, a) {
  var i = {}
  return (
    (t === !0 || t === !1) && ((n = t), (t = void 0)),
    (r === !0 || r === !1) && ((n = r), (r = void 0)),
    ((gn(e) && j0(e)) || (lr(e) && e.length === 0)) && (e = void 0),
    (i._isAMomentObject = !0),
    (i._useUTC = i._isUTC = a),
    (i._l = r),
    (i._i = e),
    (i._f = t),
    (i._strict = n),
    u2(i)
  )
}
function Ve(e, t, r, n) {
  return jc(e, t, r, n, !1)
}
var d2 = er(
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
      var e = Ve.apply(null, arguments)
      return this.isValid() && e.isValid() ? (e < this ? this : e) : ls()
    }
  ),
  p2 = er(
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
      var e = Ve.apply(null, arguments)
      return this.isValid() && e.isValid() ? (e > this ? this : e) : ls()
    }
  )
function Vc(e, t) {
  var r, n
  if ((t.length === 1 && lr(t[0]) && (t = t[0]), !t.length)) return Ve()
  for (r = t[0], n = 1; n < t.length; ++n) (!t[n].isValid() || t[n][e](r)) && (r = t[n])
  return r
}
function x2() {
  var e = [].slice.call(arguments, 0)
  return Vc('isBefore', e)
}
function m2() {
  var e = [].slice.call(arguments, 0)
  return Vc('isAfter', e)
}
var _2 = function () {
    return Date.now ? Date.now() : +new Date()
  },
  ma = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond']
function g2(e) {
  var t,
    r = !1,
    n,
    a = ma.length
  for (t in e) if (Ce(e, t) && !(rt.call(ma, t) !== -1 && (e[t] == null || !isNaN(e[t])))) return !1
  for (n = 0; n < a; ++n)
    if (e[ma[n]]) {
      if (r) return !1
      parseFloat(e[ma[n]]) !== we(e[ma[n]]) && (r = !0)
    }
  return !0
}
function v2() {
  return this._isValid
}
function w2() {
  return ur(NaN)
}
function gs(e) {
  var t = K0(e),
    r = t.year || 0,
    n = t.quarter || 0,
    a = t.month || 0,
    i = t.week || t.isoWeek || 0,
    s = t.day || 0,
    o = t.hour || 0,
    l = t.minute || 0,
    f = t.second || 0,
    c = t.millisecond || 0
  ;(this._isValid = g2(t)),
    (this._milliseconds = +c + f * 1e3 + l * 6e4 + o * 1e3 * 60 * 60),
    (this._days = +s + i * 7),
    (this._months = +a + n * 3 + r * 12),
    (this._data = {}),
    (this._locale = Hr()),
    this._bubble()
}
function Ri(e) {
  return e instanceof gs
}
function _0(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e)
}
function T2(e, t, r) {
  var n = Math.min(e.length, t.length),
    a = Math.abs(e.length - t.length),
    i = 0,
    s
  for (s = 0; s < n; s++) ((r && e[s] !== t[s]) || (!r && we(e[s]) !== we(t[s]))) && i++
  return i + a
}
function Gc(e, t) {
  pe(e, 0, 0, function () {
    var r = this.utcOffset(),
      n = '+'
    return r < 0 && ((r = -r), (n = '-')), n + gr(~~(r / 60), 2) + t + gr(~~r % 60, 2)
  })
}
Gc('Z', ':')
Gc('ZZ', '')
oe('Z', xs)
oe('ZZ', xs)
We(['Z', 'ZZ'], function (e, t, r) {
  ;(r._useUTC = !0), (r._tzm = io(xs, e))
})
var E2 = /([\+\-]|\d\d)/gi
function io(e, t) {
  var r = (t || '').match(e),
    n,
    a,
    i
  return r === null
    ? null
    : ((n = r[r.length - 1] || []),
      (a = (n + '').match(E2) || ['-', 0, 0]),
      (i = +(a[1] * 60) + we(a[2])),
      i === 0 ? 0 : a[0] === '+' ? i : -i)
}
function so(e, t) {
  var r, n
  return t._isUTC
    ? ((r = t.clone()),
      (n = (cr(e) || Ja(e) ? e.valueOf() : Ve(e).valueOf()) - r.valueOf()),
      r._d.setTime(r._d.valueOf() + n),
      q.updateOffset(r, !1),
      r)
    : Ve(e).local()
}
function g0(e) {
  return -Math.round(e._d.getTimezoneOffset())
}
q.updateOffset = function () {}
function S2(e, t, r) {
  var n = this._offset || 0,
    a
  if (!this.isValid()) return e != null ? this : NaN
  if (e != null) {
    if (typeof e == 'string') {
      if (((e = io(xs, e)), e === null)) return this
    } else Math.abs(e) < 16 && !r && (e = e * 60)
    return (
      !this._isUTC && t && (a = g0(this)),
      (this._offset = e),
      (this._isUTC = !0),
      a != null && this.add(a, 'm'),
      n !== e &&
        (!t || this._changeInProgress
          ? Kc(this, ur(e - n, 'm'), 1, !1)
          : this._changeInProgress ||
            ((this._changeInProgress = !0),
            q.updateOffset(this, !0),
            (this._changeInProgress = null))),
      this
    )
  } else return this._isUTC ? n : g0(this)
}
function y2(e, t) {
  return e != null
    ? (typeof e != 'string' && (e = -e), this.utcOffset(e, t), this)
    : -this.utcOffset()
}
function A2(e) {
  return this.utcOffset(0, e)
}
function O2(e) {
  return (
    this._isUTC && (this.utcOffset(0, e), (this._isUTC = !1), e && this.subtract(g0(this), 'm')),
    this
  )
}
function F2() {
  if (this._tzm != null) this.utcOffset(this._tzm, !1, !0)
  else if (typeof this._i == 'string') {
    var e = io(X_, this._i)
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0)
  }
  return this
}
function D2(e) {
  return this.isValid() ? ((e = e ? Ve(e).utcOffset() : 0), (this.utcOffset() - e) % 60 === 0) : !1
}
function C2() {
  return (
    this.utcOffset() > this.clone().month(0).utcOffset() ||
    this.utcOffset() > this.clone().month(5).utcOffset()
  )
}
function R2() {
  if (!Lt(this._isDSTShifted)) return this._isDSTShifted
  var e = {},
    t
  return (
    G0(e, this),
    (e = Yc(e)),
    e._a
      ? ((t = e._isUTC ? Tr(e._a) : Ve(e._a)),
        (this._isDSTShifted = this.isValid() && T2(e._a, t.toArray()) > 0))
      : (this._isDSTShifted = !1),
    this._isDSTShifted
  )
}
function k2() {
  return this.isValid() ? !this._isUTC : !1
}
function N2() {
  return this.isValid() ? this._isUTC : !1
}
function zc() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1
}
var P2 = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
  I2 =
    /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/
function ur(e, t) {
  var r = e,
    n = null,
    a,
    i,
    s
  return (
    Ri(e)
      ? (r = {
          ms: e._milliseconds,
          d: e._days,
          M: e._months
        })
      : br(e) || !isNaN(+e)
      ? ((r = {}), t ? (r[t] = +e) : (r.milliseconds = +e))
      : (n = P2.exec(e))
      ? ((a = n[1] === '-' ? -1 : 1),
        (r = {
          y: 0,
          d: we(n[mr]) * a,
          h: we(n[ut]) * a,
          m: we(n[sr]) * a,
          s: we(n[Cr]) * a,
          ms: we(_0(n[mn] * 1e3)) * a
        }))
      : (n = I2.exec(e))
      ? ((a = n[1] === '-' ? -1 : 1),
        (r = {
          y: hn(n[2], a),
          M: hn(n[3], a),
          w: hn(n[4], a),
          d: hn(n[5], a),
          h: hn(n[6], a),
          m: hn(n[7], a),
          s: hn(n[8], a)
        }))
      : r == null
      ? (r = {})
      : typeof r == 'object' &&
        ('from' in r || 'to' in r) &&
        ((s = M2(Ve(r.from), Ve(r.to))), (r = {}), (r.ms = s.milliseconds), (r.M = s.months)),
    (i = new gs(r)),
    Ri(e) && Ce(e, '_locale') && (i._locale = e._locale),
    Ri(e) && Ce(e, '_isValid') && (i._isValid = e._isValid),
    i
  )
}
ur.fn = gs.prototype
ur.invalid = w2
function hn(e, t) {
  var r = e && parseFloat(e.replace(',', '.'))
  return (isNaN(r) ? 0 : r) * t
}
function Pf(e, t) {
  var r = {}
  return (
    (r.months = t.month() - e.month() + (t.year() - e.year()) * 12),
    e.clone().add(r.months, 'M').isAfter(t) && --r.months,
    (r.milliseconds = +t - +e.clone().add(r.months, 'M')),
    r
  )
}
function M2(e, t) {
  var r
  return e.isValid() && t.isValid()
    ? ((t = so(t, e)),
      e.isBefore(t)
        ? (r = Pf(e, t))
        : ((r = Pf(t, e)), (r.milliseconds = -r.milliseconds), (r.months = -r.months)),
      r)
    : { milliseconds: 0, months: 0 }
}
function Xc(e, t) {
  return function (r, n) {
    var a, i
    return (
      n !== null &&
        !isNaN(+n) &&
        (Ec(
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
      (a = ur(r, n)),
      Kc(this, a, e),
      this
    )
  }
}
function Kc(e, t, r, n) {
  var a = t._milliseconds,
    i = _0(t._days),
    s = _0(t._months)
  !e.isValid() ||
    ((n = n == null ? !0 : n),
    s && Nc(e, bi(e, 'Month') + s * r),
    i && Ac(e, 'Date', bi(e, 'Date') + i * r),
    a && e._d.setTime(e._d.valueOf() + a * r),
    n && q.updateOffset(e, i || s))
}
var b2 = Xc(1, 'add'),
  L2 = Xc(-1, 'subtract')
function qc(e) {
  return typeof e == 'string' || e instanceof String
}
function B2(e) {
  return cr(e) || Ja(e) || qc(e) || br(e) || W2(e) || U2(e) || e === null || e === void 0
}
function U2(e) {
  var t = gn(e) && !j0(e),
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
  for (a = 0; a < s; a += 1) (i = n[a]), (r = r || Ce(e, i))
  return t && r
}
function W2(e) {
  var t = lr(e),
    r = !1
  return (
    t &&
      (r =
        e.filter(function (n) {
          return !br(n) && qc(e)
        }).length === 0),
    t && r
  )
}
function H2(e) {
  var t = gn(e) && !j0(e),
    r = !1,
    n = ['sameDay', 'nextDay', 'lastDay', 'nextWeek', 'lastWeek', 'sameElse'],
    a,
    i
  for (a = 0; a < n.length; a += 1) (i = n[a]), (r = r || Ce(e, i))
  return t && r
}
function $2(e, t) {
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
function Y2(e, t) {
  arguments.length === 1 &&
    (arguments[0]
      ? B2(arguments[0])
        ? ((e = arguments[0]), (t = void 0))
        : H2(arguments[0]) && ((t = arguments[0]), (e = void 0))
      : ((e = void 0), (t = void 0)))
  var r = e || Ve(),
    n = so(r, this).startOf('day'),
    a = q.calendarFormat(this, n) || 'sameElse',
    i = t && (Er(t[a]) ? t[a].call(this, r) : t[a])
  return this.format(i || this.localeData().calendar(a, this, Ve(r)))
}
function j2() {
  return new Za(this)
}
function V2(e, t) {
  var r = cr(e) ? e : Ve(e)
  return this.isValid() && r.isValid()
    ? ((t = tr(t) || 'millisecond'),
      t === 'millisecond'
        ? this.valueOf() > r.valueOf()
        : r.valueOf() < this.clone().startOf(t).valueOf())
    : !1
}
function G2(e, t) {
  var r = cr(e) ? e : Ve(e)
  return this.isValid() && r.isValid()
    ? ((t = tr(t) || 'millisecond'),
      t === 'millisecond'
        ? this.valueOf() < r.valueOf()
        : this.clone().endOf(t).valueOf() < r.valueOf())
    : !1
}
function z2(e, t, r, n) {
  var a = cr(e) ? e : Ve(e),
    i = cr(t) ? t : Ve(t)
  return this.isValid() && a.isValid() && i.isValid()
    ? ((n = n || '()'),
      (n[0] === '(' ? this.isAfter(a, r) : !this.isBefore(a, r)) &&
        (n[1] === ')' ? this.isBefore(i, r) : !this.isAfter(i, r)))
    : !1
}
function X2(e, t) {
  var r = cr(e) ? e : Ve(e),
    n
  return this.isValid() && r.isValid()
    ? ((t = tr(t) || 'millisecond'),
      t === 'millisecond'
        ? this.valueOf() === r.valueOf()
        : ((n = r.valueOf()),
          this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
    : !1
}
function K2(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t)
}
function q2(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t)
}
function J2(e, t, r) {
  var n, a, i
  if (!this.isValid()) return NaN
  if (((n = so(e, this)), !n.isValid())) return NaN
  switch (((a = (n.utcOffset() - this.utcOffset()) * 6e4), (t = tr(t)), t)) {
    case 'year':
      i = ki(this, n) / 12
      break
    case 'month':
      i = ki(this, n)
      break
    case 'quarter':
      i = ki(this, n) / 3
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
  return r ? i : Zt(i)
}
function ki(e, t) {
  if (e.date() < t.date()) return -ki(t, e)
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
q.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ'
q.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]'
function Z2() {
  return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ')
}
function Q2(e) {
  if (!this.isValid()) return null
  var t = e !== !0,
    r = t ? this.clone().utc() : this
  return r.year() < 0 || r.year() > 9999
    ? Ci(r, t ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ')
    : Er(Date.prototype.toISOString)
    ? t
      ? this.toDate().toISOString()
      : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3)
          .toISOString()
          .replace('Z', Ci(r, 'Z'))
    : Ci(r, t ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ')
}
function ev() {
  if (!this.isValid()) return 'moment.invalid(/* ' + this._i + ' */)'
  var e = 'moment',
    t = '',
    r,
    n,
    a,
    i
  return (
    this.isLocal() || ((e = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone'), (t = 'Z')),
    (r = '[' + e + '("]'),
    (n = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY'),
    (a = '-MM-DD[T]HH:mm:ss.SSS'),
    (i = t + '[")]'),
    this.format(r + n + a + i)
  )
}
function tv(e) {
  e || (e = this.isUtc() ? q.defaultFormatUtc : q.defaultFormat)
  var t = Ci(this, e)
  return this.localeData().postformat(t)
}
function rv(e, t) {
  return this.isValid() && ((cr(e) && e.isValid()) || Ve(e).isValid())
    ? ur({ to: this, from: e }).locale(this.locale()).humanize(!t)
    : this.localeData().invalidDate()
}
function nv(e) {
  return this.from(Ve(), e)
}
function av(e, t) {
  return this.isValid() && ((cr(e) && e.isValid()) || Ve(e).isValid())
    ? ur({ from: this, to: e }).locale(this.locale()).humanize(!t)
    : this.localeData().invalidDate()
}
function iv(e) {
  return this.to(Ve(), e)
}
function Jc(e) {
  var t
  return e === void 0 ? this._locale._abbr : ((t = Hr(e)), t != null && (this._locale = t), this)
}
var Zc = er(
  'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
  function (e) {
    return e === void 0 ? this.localeData() : this.locale(e)
  }
)
function Qc() {
  return this._locale
}
var Ui = 1e3,
  jn = 60 * Ui,
  Wi = 60 * jn,
  eu = (365 * 400 + 97) * 24 * Wi
function Vn(e, t) {
  return ((e % t) + t) % t
}
function tu(e, t, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, r) - eu : new Date(e, t, r).valueOf()
}
function ru(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - eu : Date.UTC(e, t, r)
}
function sv(e) {
  var t, r
  if (((e = tr(e)), e === void 0 || e === 'millisecond' || !this.isValid())) return this
  switch (((r = this._isUTC ? ru : tu), e)) {
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
      ;(t = this._d.valueOf()), (t -= Vn(t + (this._isUTC ? 0 : this.utcOffset() * jn), Wi))
      break
    case 'minute':
      ;(t = this._d.valueOf()), (t -= Vn(t, jn))
      break
    case 'second':
      ;(t = this._d.valueOf()), (t -= Vn(t, Ui))
      break
  }
  return this._d.setTime(t), q.updateOffset(this, !0), this
}
function ov(e) {
  var t, r
  if (((e = tr(e)), e === void 0 || e === 'millisecond' || !this.isValid())) return this
  switch (((r = this._isUTC ? ru : tu), e)) {
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
        (t += Wi - Vn(t + (this._isUTC ? 0 : this.utcOffset() * jn), Wi) - 1)
      break
    case 'minute':
      ;(t = this._d.valueOf()), (t += jn - Vn(t, jn) - 1)
      break
    case 'second':
      ;(t = this._d.valueOf()), (t += Ui - Vn(t, Ui) - 1)
      break
  }
  return this._d.setTime(t), q.updateOffset(this, !0), this
}
function fv() {
  return this._d.valueOf() - (this._offset || 0) * 6e4
}
function lv() {
  return Math.floor(this.valueOf() / 1e3)
}
function cv() {
  return new Date(this.valueOf())
}
function uv() {
  var e = this
  return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
}
function hv() {
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
function dv() {
  return this.isValid() ? this.toISOString() : null
}
function pv() {
  return V0(this)
}
function xv() {
  return qr({}, ge(this))
}
function mv() {
  return ge(this).overflow
}
function _v() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  }
}
pe('N', 0, 0, 'eraAbbr')
pe('NN', 0, 0, 'eraAbbr')
pe('NNN', 0, 0, 'eraAbbr')
pe('NNNN', 0, 0, 'eraName')
pe('NNNNN', 0, 0, 'eraNarrow')
pe('y', ['y', 1], 'yo', 'eraYear')
pe('y', ['yy', 2], 0, 'eraYear')
pe('y', ['yyy', 3], 0, 'eraYear')
pe('y', ['yyyy', 4], 0, 'eraYear')
oe('N', oo)
oe('NN', oo)
oe('NNN', oo)
oe('NNNN', Dv)
oe('NNNNN', Cv)
We(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (e, t, r, n) {
  var a = r._locale.erasParse(e, n, r._strict)
  a ? (ge(r).era = a) : (ge(r).invalidEra = e)
})
oe('y', na)
oe('yy', na)
oe('yyy', na)
oe('yyyy', na)
oe('yo', Rv)
We(['y', 'yy', 'yyy', 'yyyy'], Ot)
We(['yo'], function (e, t, r, n) {
  var a
  r._locale._eraYearOrdinalRegex && (a = e.match(r._locale._eraYearOrdinalRegex)),
    r._locale.eraYearOrdinalParse
      ? (t[Ot] = r._locale.eraYearOrdinalParse(e, a))
      : (t[Ot] = parseInt(e, 10))
})
function gv(e, t) {
  var r,
    n,
    a,
    i = this._eras || Hr('en')._eras
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
function vv(e, t, r) {
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
function wv(e, t) {
  var r = e.since <= e.until ? 1 : -1
  return t === void 0 ? q(e.since).year() : q(e.since).year() + (t - e.offset) * r
}
function Tv() {
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
function Ev() {
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
function Sv() {
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
function yv() {
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
function Av(e) {
  return Ce(this, '_erasNameRegex') || fo.call(this), e ? this._erasNameRegex : this._erasRegex
}
function Ov(e) {
  return Ce(this, '_erasAbbrRegex') || fo.call(this), e ? this._erasAbbrRegex : this._erasRegex
}
function Fv(e) {
  return Ce(this, '_erasNarrowRegex') || fo.call(this), e ? this._erasNarrowRegex : this._erasRegex
}
function oo(e, t) {
  return t.erasAbbrRegex(e)
}
function Dv(e, t) {
  return t.erasNameRegex(e)
}
function Cv(e, t) {
  return t.erasNarrowRegex(e)
}
function Rv(e, t) {
  return t._eraYearOrdinalRegex || na
}
function fo() {
  var e = [],
    t = [],
    r = [],
    n = [],
    a,
    i,
    s = this.eras()
  for (a = 0, i = s.length; a < i; ++a)
    t.push(jt(s[a].name)),
      e.push(jt(s[a].abbr)),
      r.push(jt(s[a].narrow)),
      n.push(jt(s[a].name)),
      n.push(jt(s[a].abbr)),
      n.push(jt(s[a].narrow))
  ;(this._erasRegex = new RegExp('^(' + n.join('|') + ')', 'i')),
    (this._erasNameRegex = new RegExp('^(' + t.join('|') + ')', 'i')),
    (this._erasAbbrRegex = new RegExp('^(' + e.join('|') + ')', 'i')),
    (this._erasNarrowRegex = new RegExp('^(' + r.join('|') + ')', 'i'))
}
pe(0, ['gg', 2], 0, function () {
  return this.weekYear() % 100
})
pe(0, ['GG', 2], 0, function () {
  return this.isoWeekYear() % 100
})
function vs(e, t) {
  pe(0, [e, e.length], 0, t)
}
vs('gggg', 'weekYear')
vs('ggggg', 'weekYear')
vs('GGGG', 'isoWeekYear')
vs('GGGGG', 'isoWeekYear')
Ct('weekYear', 'gg')
Ct('isoWeekYear', 'GG')
Rt('weekYear', 1)
Rt('isoWeekYear', 1)
oe('G', ps)
oe('g', ps)
oe('GG', ze, Xt)
oe('gg', ze, Xt)
oe('GGGG', J0, q0)
oe('gggg', J0, q0)
oe('GGGGG', ds, us)
oe('ggggg', ds, us)
ei(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (e, t, r, n) {
  t[n.substr(0, 2)] = we(e)
})
ei(['gg', 'GG'], function (e, t, r, n) {
  t[n] = q.parseTwoDigitYear(e)
})
function kv(e) {
  return nu.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  )
}
function Nv(e) {
  return nu.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
}
function Pv() {
  return kr(this.year(), 1, 4)
}
function Iv() {
  return kr(this.isoWeekYear(), 1, 4)
}
function Mv() {
  var e = this.localeData()._week
  return kr(this.year(), e.dow, e.doy)
}
function bv() {
  var e = this.localeData()._week
  return kr(this.weekYear(), e.dow, e.doy)
}
function nu(e, t, r, n, a) {
  var i
  return e == null
    ? Ua(this, n, a).year
    : ((i = kr(e, n, a)), t > i && (t = i), Lv.call(this, e, t, r, n, a))
}
function Lv(e, t, r, n, a) {
  var i = bc(e, t, r, n, a),
    s = Ba(i.year, 0, i.dayOfYear)
  return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
}
pe('Q', 0, 'Qo', 'quarter')
Ct('quarter', 'Q')
Rt('quarter', 7)
oe('Q', Oc)
We('Q', function (e, t) {
  t[Dr] = (we(e) - 1) * 3
})
function Bv(e) {
  return e == null
    ? Math.ceil((this.month() + 1) / 3)
    : this.month((e - 1) * 3 + (this.month() % 3))
}
pe('D', ['DD', 2], 'Do', 'date')
Ct('date', 'D')
Rt('date', 9)
oe('D', ze)
oe('DD', ze, Xt)
oe('Do', function (e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
})
We(['D', 'DD'], mr)
We('Do', function (e, t) {
  t[mr] = we(e.match(ze)[0])
})
var au = ra('Date', !0)
pe('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear')
Ct('dayOfYear', 'DDD')
Rt('dayOfYear', 4)
oe('DDD', hs)
oe('DDDD', Fc)
We(['DDD', 'DDDD'], function (e, t, r) {
  r._dayOfYear = we(e)
})
function Uv(e) {
  var t = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1
  return e == null ? t : this.add(e - t, 'd')
}
pe('m', ['mm', 2], 0, 'minute')
Ct('minute', 'm')
Rt('minute', 14)
oe('m', ze)
oe('mm', ze, Xt)
We(['m', 'mm'], sr)
var Wv = ra('Minutes', !1)
pe('s', ['ss', 2], 0, 'second')
Ct('second', 's')
Rt('second', 15)
oe('s', ze)
oe('ss', ze, Xt)
We(['s', 'ss'], Cr)
var Hv = ra('Seconds', !1)
pe('S', 0, 0, function () {
  return ~~(this.millisecond() / 100)
})
pe(0, ['SS', 2], 0, function () {
  return ~~(this.millisecond() / 10)
})
pe(0, ['SSS', 3], 0, 'millisecond')
pe(0, ['SSSS', 4], 0, function () {
  return this.millisecond() * 10
})
pe(0, ['SSSSS', 5], 0, function () {
  return this.millisecond() * 100
})
pe(0, ['SSSSSS', 6], 0, function () {
  return this.millisecond() * 1e3
})
pe(0, ['SSSSSSS', 7], 0, function () {
  return this.millisecond() * 1e4
})
pe(0, ['SSSSSSSS', 8], 0, function () {
  return this.millisecond() * 1e5
})
pe(0, ['SSSSSSSSS', 9], 0, function () {
  return this.millisecond() * 1e6
})
Ct('millisecond', 'ms')
Rt('millisecond', 16)
oe('S', hs, Oc)
oe('SS', hs, Xt)
oe('SSS', hs, Fc)
var Jr, iu
for (Jr = 'SSSS'; Jr.length <= 9; Jr += 'S') oe(Jr, na)
function $v(e, t) {
  t[mn] = we(('0.' + e) * 1e3)
}
for (Jr = 'S'; Jr.length <= 9; Jr += 'S') We(Jr, $v)
iu = ra('Milliseconds', !1)
pe('z', 0, 0, 'zoneAbbr')
pe('zz', 0, 0, 'zoneName')
function Yv() {
  return this._isUTC ? 'UTC' : ''
}
function jv() {
  return this._isUTC ? 'Coordinated Universal Time' : ''
}
var X = Za.prototype
X.add = b2
X.calendar = Y2
X.clone = j2
X.diff = J2
X.endOf = ov
X.format = tv
X.from = rv
X.fromNow = nv
X.to = av
X.toNow = iv
X.get = G_
X.invalidAt = mv
X.isAfter = V2
X.isBefore = G2
X.isBetween = z2
X.isSame = X2
X.isSameOrAfter = K2
X.isSameOrBefore = q2
X.isValid = pv
X.lang = Zc
X.locale = Jc
X.localeData = Qc
X.max = p2
X.min = d2
X.parsingFlags = xv
X.set = z_
X.startOf = sv
X.subtract = L2
X.toArray = uv
X.toObject = hv
X.toDate = cv
X.toISOString = Q2
X.inspect = ev
typeof Symbol < 'u' &&
  Symbol.for != null &&
  (X[Symbol.for('nodejs.util.inspect.custom')] = function () {
    return 'Moment<' + this.format() + '>'
  })
X.toJSON = dv
X.toString = Z2
X.unix = lv
X.valueOf = fv
X.creationData = _v
X.eraName = Tv
X.eraNarrow = Ev
X.eraAbbr = Sv
X.eraYear = yv
X.year = Mc
X.isLeapYear = hg
X.weekYear = kv
X.isoWeekYear = Nv
X.quarter = X.quarters = Bv
X.month = Pc
X.daysInMonth = lg
X.week = X.weeks = gg
X.isoWeek = X.isoWeeks = vg
X.weeksInYear = Mv
X.weeksInWeekYear = bv
X.isoWeeksInYear = Pv
X.isoWeeksInISOWeekYear = Iv
X.date = au
X.day = X.days = Ng
X.weekday = Pg
X.isoWeekday = Ig
X.dayOfYear = Uv
X.hour = X.hours = Hg
X.minute = X.minutes = Wv
X.second = X.seconds = Hv
X.millisecond = X.milliseconds = iu
X.utcOffset = S2
X.utc = A2
X.local = O2
X.parseZone = F2
X.hasAlignedHourOffset = D2
X.isDST = C2
X.isLocal = k2
X.isUtcOffset = N2
X.isUtc = zc
X.isUTC = zc
X.zoneAbbr = Yv
X.zoneName = jv
X.dates = er('dates accessor is deprecated. Use date instead.', au)
X.months = er('months accessor is deprecated. Use month instead', Pc)
X.years = er('years accessor is deprecated. Use year instead', Mc)
X.zone = er(
  'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
  y2
)
X.isDSTShifted = er(
  'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
  R2
)
function Vv(e) {
  return Ve(e * 1e3)
}
function Gv() {
  return Ve.apply(null, arguments).parseZone()
}
function su(e) {
  return e
}
var Re = z0.prototype
Re.calendar = N_
Re.longDateFormat = b_
Re.invalidDate = B_
Re.ordinal = H_
Re.preparse = su
Re.postformat = su
Re.relativeTime = Y_
Re.pastFuture = j_
Re.set = R_
Re.eras = gv
Re.erasParse = vv
Re.erasConvertYear = wv
Re.erasAbbrRegex = Ov
Re.erasNameRegex = Av
Re.erasNarrowRegex = Fv
Re.months = ig
Re.monthsShort = sg
Re.monthsParse = fg
Re.monthsRegex = ug
Re.monthsShortRegex = cg
Re.week = pg
Re.firstDayOfYear = _g
Re.firstDayOfWeek = mg
Re.weekdays = Fg
Re.weekdaysMin = Cg
Re.weekdaysShort = Dg
Re.weekdaysParse = kg
Re.weekdaysRegex = Mg
Re.weekdaysShortRegex = bg
Re.weekdaysMinRegex = Lg
Re.isPM = Ug
Re.meridiem = $g
function Hi(e, t, r, n) {
  var a = Hr(),
    i = Tr().set(n, t)
  return a[r](i, e)
}
function ou(e, t, r) {
  if ((br(e) && ((t = e), (e = void 0)), (e = e || ''), t != null)) return Hi(e, t, r, 'month')
  var n,
    a = []
  for (n = 0; n < 12; n++) a[n] = Hi(e, n, r, 'month')
  return a
}
function lo(e, t, r, n) {
  typeof e == 'boolean'
    ? (br(t) && ((r = t), (t = void 0)), (t = t || ''))
    : ((t = e), (r = t), (e = !1), br(t) && ((r = t), (t = void 0)), (t = t || ''))
  var a = Hr(),
    i = e ? a._week.dow : 0,
    s,
    o = []
  if (r != null) return Hi(t, (r + i) % 7, n, 'day')
  for (s = 0; s < 7; s++) o[s] = Hi(t, (s + i) % 7, n, 'day')
  return o
}
function zv(e, t) {
  return ou(e, t, 'months')
}
function Xv(e, t) {
  return ou(e, t, 'monthsShort')
}
function Kv(e, t, r) {
  return lo(e, t, r, 'weekdays')
}
function qv(e, t, r) {
  return lo(e, t, r, 'weekdaysShort')
}
function Jv(e, t, r) {
  return lo(e, t, r, 'weekdaysMin')
}
rn('en', {
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
      r = we((e % 100) / 10) === 1 ? 'th' : t === 1 ? 'st' : t === 2 ? 'nd' : t === 3 ? 'rd' : 'th'
    return e + r
  }
})
q.lang = er('moment.lang is deprecated. Use moment.locale instead.', rn)
q.langData = er('moment.langData is deprecated. Use moment.localeData instead.', Hr)
var Or = Math.abs
function Zv() {
  var e = this._data
  return (
    (this._milliseconds = Or(this._milliseconds)),
    (this._days = Or(this._days)),
    (this._months = Or(this._months)),
    (e.milliseconds = Or(e.milliseconds)),
    (e.seconds = Or(e.seconds)),
    (e.minutes = Or(e.minutes)),
    (e.hours = Or(e.hours)),
    (e.months = Or(e.months)),
    (e.years = Or(e.years)),
    this
  )
}
function fu(e, t, r, n) {
  var a = ur(t, r)
  return (
    (e._milliseconds += n * a._milliseconds),
    (e._days += n * a._days),
    (e._months += n * a._months),
    e._bubble()
  )
}
function Qv(e, t) {
  return fu(this, e, t, 1)
}
function ew(e, t) {
  return fu(this, e, t, -1)
}
function If(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e)
}
function tw() {
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
      ((e += If(v0(r) + t) * 864e5), (t = 0), (r = 0)),
    (n.milliseconds = e % 1e3),
    (a = Zt(e / 1e3)),
    (n.seconds = a % 60),
    (i = Zt(a / 60)),
    (n.minutes = i % 60),
    (s = Zt(i / 60)),
    (n.hours = s % 24),
    (t += Zt(s / 24)),
    (l = Zt(lu(t))),
    (r += l),
    (t -= If(v0(l))),
    (o = Zt(r / 12)),
    (r %= 12),
    (n.days = t),
    (n.months = r),
    (n.years = o),
    this
  )
}
function lu(e) {
  return (e * 4800) / 146097
}
function v0(e) {
  return (e * 146097) / 4800
}
function rw(e) {
  if (!this.isValid()) return NaN
  var t,
    r,
    n = this._milliseconds
  if (((e = tr(e)), e === 'month' || e === 'quarter' || e === 'year'))
    switch (((t = this._days + n / 864e5), (r = this._months + lu(t)), e)) {
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
function nw() {
  return this.isValid()
    ? this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        we(this._months / 12) * 31536e6
    : NaN
}
function $r(e) {
  return function () {
    return this.as(e)
  }
}
var aw = $r('ms'),
  iw = $r('s'),
  sw = $r('m'),
  ow = $r('h'),
  fw = $r('d'),
  lw = $r('w'),
  cw = $r('M'),
  uw = $r('Q'),
  hw = $r('y')
function dw() {
  return ur(this)
}
function pw(e) {
  return (e = tr(e)), this.isValid() ? this[e + 's']() : NaN
}
function On(e) {
  return function () {
    return this.isValid() ? this._data[e] : NaN
  }
}
var xw = On('milliseconds'),
  mw = On('seconds'),
  _w = On('minutes'),
  gw = On('hours'),
  vw = On('days'),
  ww = On('months'),
  Tw = On('years')
function Ew() {
  return Zt(this.days() / 7)
}
var Fr = Math.round,
  Hn = {
    ss: 44,
    s: 45,
    m: 45,
    h: 22,
    d: 26,
    w: null,
    M: 11
  }
function Sw(e, t, r, n, a) {
  return a.relativeTime(t || 1, !!r, e, n)
}
function yw(e, t, r, n) {
  var a = ur(e).abs(),
    i = Fr(a.as('s')),
    s = Fr(a.as('m')),
    o = Fr(a.as('h')),
    l = Fr(a.as('d')),
    f = Fr(a.as('M')),
    c = Fr(a.as('w')),
    u = Fr(a.as('y')),
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
    Sw.apply(null, h)
  )
}
function Aw(e) {
  return e === void 0 ? Fr : typeof e == 'function' ? ((Fr = e), !0) : !1
}
function Ow(e, t) {
  return Hn[e] === void 0
    ? !1
    : t === void 0
    ? Hn[e]
    : ((Hn[e] = t), e === 's' && (Hn.ss = t - 1), !0)
}
function Fw(e, t) {
  if (!this.isValid()) return this.localeData().invalidDate()
  var r = !1,
    n = Hn,
    a,
    i
  return (
    typeof e == 'object' && ((t = e), (e = !1)),
    typeof e == 'boolean' && (r = e),
    typeof t == 'object' &&
      ((n = Object.assign({}, Hn, t)), t.s != null && t.ss == null && (n.ss = t.s - 1)),
    (a = this.localeData()),
    (i = yw(this, !r, n, a)),
    r && (i = a.pastFuture(+this, i)),
    a.postformat(i)
  )
}
var js = Math.abs
function In(e) {
  return (e > 0) - (e < 0) || +e
}
function ws() {
  if (!this.isValid()) return this.localeData().invalidDate()
  var e = js(this._milliseconds) / 1e3,
    t = js(this._days),
    r = js(this._months),
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
    ? ((n = Zt(e / 60)),
      (a = Zt(n / 60)),
      (e %= 60),
      (n %= 60),
      (i = Zt(r / 12)),
      (r %= 12),
      (s = e ? e.toFixed(3).replace(/\.?0+$/, '') : ''),
      (l = o < 0 ? '-' : ''),
      (f = In(this._months) !== In(o) ? '-' : ''),
      (c = In(this._days) !== In(o) ? '-' : ''),
      (u = In(this._milliseconds) !== In(o) ? '-' : ''),
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
var Ae = gs.prototype
Ae.isValid = v2
Ae.abs = Zv
Ae.add = Qv
Ae.subtract = ew
Ae.as = rw
Ae.asMilliseconds = aw
Ae.asSeconds = iw
Ae.asMinutes = sw
Ae.asHours = ow
Ae.asDays = fw
Ae.asWeeks = lw
Ae.asMonths = cw
Ae.asQuarters = uw
Ae.asYears = hw
Ae.valueOf = nw
Ae._bubble = tw
Ae.clone = dw
Ae.get = pw
Ae.milliseconds = xw
Ae.seconds = mw
Ae.minutes = _w
Ae.hours = gw
Ae.days = vw
Ae.weeks = Ew
Ae.months = ww
Ae.years = Tw
Ae.humanize = Fw
Ae.toISOString = ws
Ae.toString = ws
Ae.toJSON = ws
Ae.locale = Jc
Ae.localeData = Qc
Ae.toIsoString = er(
  'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
  ws
)
Ae.lang = Zc
pe('X', 0, 0, 'unix')
pe('x', 0, 0, 'valueOf')
oe('x', ps)
oe('X', K_)
We('X', function (e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3)
})
We('x', function (e, t, r) {
  r._d = new Date(we(e))
})
//! moment.js
q.version = '2.29.4'
D_(Ve)
q.fn = X
q.min = x2
q.max = m2
q.now = _2
q.utc = Tr
q.unix = Vv
q.months = zv
q.isDate = Ja
q.locale = rn
q.invalid = ls
q.duration = ur
q.isMoment = cr
q.weekdays = Kv
q.parseZone = Gv
q.localeData = Hr
q.isDuration = Ri
q.monthsShort = Xv
q.weekdaysMin = Jv
q.defineLocale = to
q.updateLocale = Gg
q.locales = zg
q.weekdaysShort = qv
q.normalizeUnits = tr
q.relativeTimeRounding = Aw
q.relativeTimeThreshold = Ow
q.calendarFormat = $2
q.prototype = X
q.HTML5_FMT = {
  DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
  DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
  DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
  DATE: 'YYYY-MM-DD',
  TIME: 'HH:mm',
  TIME_SECONDS: 'HH:mm:ss',
  TIME_MS: 'HH:mm:ss.SSS',
  WEEK: 'GGGG-[W]WW',
  MONTH: 'YYYY-MM'
}
/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */
var $i = {}
$i.version = '0.18.5'
var cu = 1252,
  Dw = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4],
  uu = function (e) {
    Dw.indexOf(e) != -1 && (cu = e)
  }
function Cw() {
  uu(1252)
}
var Ha = function (e) {
  uu(e)
}
function Rw() {
  Ha(1200), Cw()
}
function kw(e) {
  for (var t = [], r = 0; r < e.length >> 1; ++r)
    t[r] = String.fromCharCode(e.charCodeAt(2 * r + 1) + (e.charCodeAt(2 * r) << 8))
  return t.join('')
}
var wi = function (t) {
    return String.fromCharCode(t)
  },
  Mf = function (t) {
    return String.fromCharCode(t)
  },
  pn,
  Zr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
function $a(e) {
  for (var t = '', r = 0, n = 0, a = 0, i = 0, s = 0, o = 0, l = 0, f = 0; f < e.length; )
    (r = e.charCodeAt(f++)),
      (i = r >> 2),
      (n = e.charCodeAt(f++)),
      (s = ((r & 3) << 4) | (n >> 4)),
      (a = e.charCodeAt(f++)),
      (o = ((n & 15) << 2) | (a >> 6)),
      (l = a & 63),
      isNaN(n) ? (o = l = 64) : isNaN(a) && (l = 64),
      (t += Zr.charAt(i) + Zr.charAt(s) + Zr.charAt(o) + Zr.charAt(l))
  return t
}
function Lr(e) {
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
    (i = Zr.indexOf(e.charAt(f++))),
      (s = Zr.indexOf(e.charAt(f++))),
      (r = (i << 2) | (s >> 4)),
      (t += String.fromCharCode(r)),
      (o = Zr.indexOf(e.charAt(f++))),
      (n = ((s & 15) << 4) | (o >> 2)),
      o !== 64 && (t += String.fromCharCode(n)),
      (l = Zr.indexOf(e.charAt(f++))),
      (a = ((o & 3) << 6) | l),
      l !== 64 && (t += String.fromCharCode(a))
  return t
}
var ke = /* @__PURE__ */ (function () {
    return (
      typeof Buffer < 'u' &&
      typeof process < 'u' &&
      typeof process.versions < 'u' &&
      !!process.versions.node
    )
  })(),
  Yr = /* @__PURE__ */ (function () {
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
function Tn(e) {
  return ke
    ? Buffer.alloc
      ? Buffer.alloc(e)
      : new Buffer(e)
    : typeof Uint8Array < 'u'
    ? new Uint8Array(e)
    : new Array(e)
}
function bf(e) {
  return ke
    ? Buffer.allocUnsafe
      ? Buffer.allocUnsafe(e)
      : new Buffer(e)
    : typeof Uint8Array < 'u'
    ? new Uint8Array(e)
    : new Array(e)
}
var ir = function (t) {
  return ke
    ? Yr(t, 'binary')
    : t.split('').map(function (r) {
        return r.charCodeAt(0) & 255
      })
}
function Ts(e) {
  if (typeof ArrayBuffer > 'u') return ir(e)
  for (var t = new ArrayBuffer(e.length), r = new Uint8Array(t), n = 0; n != e.length; ++n)
    r[n] = e.charCodeAt(n) & 255
  return t
}
function ti(e) {
  if (Array.isArray(e))
    return e
      .map(function (n) {
        return String.fromCharCode(n)
      })
      .join('')
  for (var t = [], r = 0; r < e.length; ++r) t[r] = String.fromCharCode(e[r])
  return t.join('')
}
function Nw(e) {
  if (typeof Uint8Array > 'u') throw new Error('Unsupported')
  return new Uint8Array(e)
}
var Tt = ke
  ? function (e) {
      return Buffer.concat(
        e.map(function (t) {
          return Buffer.isBuffer(t) ? t : Yr(t)
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
function Pw(e) {
  for (var t = [], r = 0, n = e.length + 250, a = Tn(e.length + 255), i = 0; i < e.length; ++i) {
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
      (a[r++] = 224 | ((s >> 12) & 15)), (a[r++] = 128 | ((s >> 6) & 63)), (a[r++] = 128 | (s & 63))
    r > n && (t.push(a.slice(0, r)), (r = 0), (a = Tn(65535)), (n = 65530))
  }
  return t.push(a.slice(0, r)), Tt(t)
}
var Ca = /\u0000/g,
  Ti = /[\u0001-\u0006]/g
function Gn(e) {
  for (var t = '', r = e.length - 1; r >= 0; ) t += e.charAt(r--)
  return t
}
function or(e, t) {
  var r = '' + e
  return r.length >= t ? r : et('0', t - r.length) + r
}
function co(e, t) {
  var r = '' + e
  return r.length >= t ? r : et(' ', t - r.length) + r
}
function Yi(e, t) {
  var r = '' + e
  return r.length >= t ? r : r + et(' ', t - r.length)
}
function Iw(e, t) {
  var r = '' + Math.round(e)
  return r.length >= t ? r : et('0', t - r.length) + r
}
function Mw(e, t) {
  var r = '' + e
  return r.length >= t ? r : et('0', t - r.length) + r
}
var Lf = /* @__PURE__ */ Math.pow(2, 32)
function Mn(e, t) {
  if (e > Lf || e < -Lf) return Iw(e, t)
  var r = Math.round(e)
  return Mw(r, t)
}
function ji(e, t) {
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
var Bf = [
    ['Sun', 'Sunday'],
    ['Mon', 'Monday'],
    ['Tue', 'Tuesday'],
    ['Wed', 'Wednesday'],
    ['Thu', 'Thursday'],
    ['Fri', 'Friday'],
    ['Sat', 'Saturday']
  ],
  Vs = [
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
function bw(e) {
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
var Je = {
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
  Uf = {
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
  Lw = {
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
function Vi(e, t, r) {
  for (
    var n = e < 0 ? -1 : 1, a = e * n, i = 0, s = 1, o = 0, l = 1, f = 0, c = 0, u = Math.floor(a);
    f < t && ((u = Math.floor(a)), (o = u * s + i), (c = u * f + l), !(a - u < 5e-8));

  )
    (a = 1 / (a - u)), (i = s), (s = o), (l = f), (f = c)
  if ((c > t && (f > t ? ((c = l), (o = i)) : ((c = f), (o = s))), !r)) return [0, n * o, c]
  var h = Math.floor((n * o) / c)
  return [h, n * o - h * c, c]
}
function Sa(e, t, r) {
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
      r && (i = jw(l, s))
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
var hu = /* @__PURE__ */ new Date(1899, 11, 31, 0, 0, 0),
  Bw = /* @__PURE__ */ hu.getTime(),
  Uw = /* @__PURE__ */ new Date(1900, 2, 1, 0, 0, 0)
function du(e, t) {
  var r = /* @__PURE__ */ e.getTime()
  return (
    t ? (r -= 1461 * 24 * 60 * 60 * 1e3) : e >= Uw && (r += 24 * 60 * 60 * 1e3),
    (r -
      (Bw +
        /* @__PURE__ */ (e.getTimezoneOffset() - /* @__PURE__ */ hu.getTimezoneOffset()) * 6e4)) /
      (24 * 60 * 60 * 1e3)
  )
}
function uo(e) {
  return e.indexOf('.') == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, '$1')
}
function Ww(e) {
  return e.indexOf('E') == -1
    ? e
    : e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, '$1E').replace(/(E[+-])(\d)$/, '$10$2')
}
function Hw(e) {
  var t = e < 0 ? 12 : 11,
    r = uo(e.toFixed(12))
  return r.length <= t || ((r = e.toPrecision(10)), r.length <= t) ? r : e.toExponential(5)
}
function $w(e) {
  var t = uo(e.toFixed(11))
  return t.length > (e < 0 ? 12 : 11) || t === '0' || t === '-0' ? e.toPrecision(6) : t
}
function Yw(e) {
  var t = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E),
    r
  return (
    t >= -4 && t <= -1
      ? (r = e.toPrecision(10 + t))
      : Math.abs(t) <= 9
      ? (r = Hw(e))
      : t === 10
      ? (r = e.toFixed(10).substr(0, 12))
      : (r = $w(e)),
    uo(Ww(r.toUpperCase()))
  )
}
function w0(e, t) {
  switch (typeof e) {
    case 'string':
      return e
    case 'boolean':
      return e ? 'TRUE' : 'FALSE'
    case 'number':
      return (e | 0) === e ? e.toString(10) : Yw(e)
    case 'undefined':
      return ''
    case 'object':
      if (e == null) return ''
      if (e instanceof Date) return Br(14, du(e, t && t.date1904), t)
  }
  throw new Error('unsupported value in General format: ' + e)
}
function jw(e, t) {
  t[0] -= 581
  var r = e.getDay()
  return e < 60 && (r = (r + 6) % 7), r
}
function Vw(e, t, r, n) {
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
          return Vs[r.m - 1][1]
        case 5:
          return Vs[r.m - 1][0]
        default:
          return Vs[r.m - 1][2]
      }
      break
    case 100:
      switch (t.length) {
        case 1:
        case 2:
          ;(l = r.d), (f = t.length)
          break
        case 3:
          return Bf[r.q][0]
        default:
          return Bf[r.q][1]
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
        ? or(r.S, t.length)
        : (n >= 2 ? (s = n === 3 ? 1e3 : 100) : (s = n === 1 ? 10 : 1),
          (i = Math.round(s * (r.S + r.u))),
          i >= 60 * s && (i = 0),
          t === 's'
            ? i === 0
              ? '0'
              : '' + i / s
            : ((a = or(i, 2 + n)), t === 'ss' ? a.substr(0, 2) : '.' + a.substr(2, t.length - 1)))
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
  var c = f > 0 ? or(l, f) : ''
  return c
}
function Qr(e) {
  var t = 3
  if (e.length <= t) return e
  for (var r = e.length % t, n = e.substr(0, r); r != e.length; r += t)
    n += (n.length > 0 ? ',' : '') + e.substr(r, t)
  return n
}
var pu = /%/g
function Gw(e, t, r) {
  var n = t.replace(pu, ''),
    a = t.length - n.length
  return Nr(e, n, r * Math.pow(10, 2 * a)) + et('%', a)
}
function zw(e, t, r) {
  for (var n = t.length - 1; t.charCodeAt(n - 1) === 44; ) --n
  return Nr(e, t.substr(0, n), r / Math.pow(10, 3 * (t.length - n)))
}
function xu(e, t) {
  var r,
    n = e.indexOf('E') - e.indexOf('.') - 1
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0) return '0.0E+0'
    if (t < 0) return '-' + xu(e, -t)
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
var mu = /# (\?+)( ?)\/( ?)(\d+)/
function Xw(e, t, r) {
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
      ? et(' ', e[1].length + 1 + e[4].length)
      : co(s, e[1].length) + e[2] + '/' + e[3] + or(o, e[4].length))
  )
}
function Kw(e, t, r) {
  return r + (t === 0 ? '' : '' + t) + et(' ', e[1].length + 2 + e[4].length)
}
var _u = /^#*0*\.([0#]+)/,
  gu = /\).*[0#]/,
  vu = /\(###\) ###\\?-####/
function Nt(e) {
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
function Wf(e, t) {
  var r = Math.pow(10, t)
  return '' + Math.round(e * r) / r
}
function Hf(e, t) {
  var r = e - Math.floor(e),
    n = Math.pow(10, t)
  return t < ('' + Math.round(r * n)).length ? 0 : Math.round(r * n)
}
function qw(e, t) {
  return t < ('' + Math.round((e - Math.floor(e)) * Math.pow(10, t))).length ? 1 : 0
}
function Jw(e) {
  return e < 2147483647 && e > -2147483648
    ? '' + (e >= 0 ? e | 0 : (e - 1) | 0)
    : '' + Math.floor(e)
}
function qt(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(gu)) {
    var n = t.replace(/\( */, '').replace(/ \)/, '').replace(/\)/, '')
    return r >= 0 ? qt('n', n, r) : '(' + qt('n', n, -r) + ')'
  }
  if (t.charCodeAt(t.length - 1) === 44) return zw(e, t, r)
  if (t.indexOf('%') !== -1) return Gw(e, t, r)
  if (t.indexOf('E') !== -1) return xu(t, r)
  if (t.charCodeAt(0) === 36) return '$' + qt(e, t.substr(t.charAt(1) == ' ' ? 2 : 1), r)
  var a,
    i,
    s,
    o,
    l = Math.abs(r),
    f = r < 0 ? '-' : ''
  if (t.match(/^00+$/)) return f + Mn(l, t.length)
  if (t.match(/^[#?]+$/))
    return (
      (a = Mn(r, 0)),
      a === '0' && (a = ''),
      a.length > t.length ? a : Nt(t.substr(0, t.length - a.length)) + a
    )
  if ((i = t.match(mu))) return Xw(i, l, f)
  if (t.match(/^#+0+$/)) return f + Mn(l, t.length - t.indexOf('0'))
  if ((i = t.match(_u)))
    return (
      (a = Wf(r, i[1].length)
        .replace(/^([^\.]+)$/, '$1.' + Nt(i[1]))
        .replace(/\.$/, '.' + Nt(i[1]))
        .replace(/\.(\d*)$/, function (m, d) {
          return '.' + d + et('0', Nt(i[1]).length - d.length)
        })),
      t.indexOf('0.') !== -1 ? a : a.replace(/^0\./, '.')
    )
  if (((t = t.replace(/^#+([0.])/, '$1')), (i = t.match(/^(0*)\.(#*)$/))))
    return (
      f +
      Wf(l, i[2].length)
        .replace(/\.(\d*[1-9])0*$/, '.$1')
        .replace(/^(-?\d*)$/, '$1.')
        .replace(/^0\./, i[1].length ? '0.' : '.')
    )
  if ((i = t.match(/^#{1,3},##0(\.?)$/))) return f + Qr(Mn(l, 0))
  if ((i = t.match(/^#,##0\.([#0]*0)$/)))
    return r < 0
      ? '-' + qt(e, t, -r)
      : Qr('' + (Math.floor(r) + qw(r, i[1].length))) + '.' + or(Hf(r, i[1].length), i[1].length)
  if ((i = t.match(/^#,#*,#0/))) return qt(e, t.replace(/^#,#*,/, ''), r)
  if ((i = t.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (a = Gn(qt(e, t.replace(/[\\-]/g, ''), r))),
      (s = 0),
      Gn(
        Gn(t.replace(/\\/g, '')).replace(/[0#]/g, function (m) {
          return s < a.length ? a.charAt(s++) : m === '0' ? '0' : ''
        })
      )
    )
  if (t.match(vu))
    return (
      (a = qt(e, '##########', r)), '(' + a.substr(0, 3) + ') ' + a.substr(3, 3) + '-' + a.substr(6)
    )
  var c = ''
  if ((i = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(i[4].length, 7)),
      (o = Vi(l, Math.pow(10, s) - 1, !1)),
      (a = '' + f),
      (c = Nr('n', i[1], o[1])),
      c.charAt(c.length - 1) == ' ' && (c = c.substr(0, c.length - 1) + '0'),
      (a += c + i[2] + '/' + i[3]),
      (c = Yi(o[2], s)),
      c.length < i[4].length && (c = Nt(i[4].substr(i[4].length - c.length)) + c),
      (a += c),
      a
    )
  if ((i = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(Math.max(i[1].length, i[4].length), 7)),
      (o = Vi(l, Math.pow(10, s) - 1, !0)),
      f +
        (o[0] || (o[1] ? '' : '0')) +
        ' ' +
        (o[1]
          ? co(o[1], s) + i[2] + '/' + i[3] + Yi(o[2], s)
          : et(' ', 2 * s + 1 + i[2].length + i[3].length))
    )
  if ((i = t.match(/^[#0?]+$/)))
    return (a = Mn(r, 0)), t.length <= a.length ? a : Nt(t.substr(0, t.length - a.length)) + a
  if ((i = t.match(/^([#0?]+)\.([#0]+)$/))) {
    ;(a = '' + r.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, '$1')),
      (s = a.indexOf('.'))
    var u = t.indexOf('.') - s,
      h = t.length - a.length - u
    return Nt(t.substr(0, u) + a + t.substr(t.length - h))
  }
  if ((i = t.match(/^00,000\.([#0]*0)$/)))
    return (
      (s = Hf(r, i[1].length)),
      r < 0
        ? '-' + qt(e, t, -r)
        : Qr(Jw(r))
            .replace(/^\d,\d{3}$/, '0$&')
            .replace(/^\d*$/, function (m) {
              return '00,' + (m.length < 3 ? or(0, 3 - m.length) : '') + m
            }) +
          '.' +
          or(s, i[1].length)
    )
  switch (t) {
    case '###,##0.00':
      return qt(e, '#,##0.00', r)
    case '###,###':
    case '##,###':
    case '#,###':
      var p = Qr(Mn(l, 0))
      return p !== '0' ? f + p : ''
    case '###,###.00':
      return qt(e, '###,##0.00', r).replace(/^0\./, '.')
    case '#,###.00':
      return qt(e, '#,##0.00', r).replace(/^0\./, '.')
  }
  throw new Error('unsupported format |' + t + '|')
}
function Zw(e, t, r) {
  for (var n = t.length - 1; t.charCodeAt(n - 1) === 44; ) --n
  return Nr(e, t.substr(0, n), r / Math.pow(10, 3 * (t.length - n)))
}
function Qw(e, t, r) {
  var n = t.replace(pu, ''),
    a = t.length - n.length
  return Nr(e, n, r * Math.pow(10, 2 * a)) + et('%', a)
}
function wu(e, t) {
  var r,
    n = e.indexOf('E') - e.indexOf('.') - 1
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0) return '0.0E+0'
    if (t < 0) return '-' + wu(e, -t)
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
function dr(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(gu)) {
    var n = t.replace(/\( */, '').replace(/ \)/, '').replace(/\)/, '')
    return r >= 0 ? dr('n', n, r) : '(' + dr('n', n, -r) + ')'
  }
  if (t.charCodeAt(t.length - 1) === 44) return Zw(e, t, r)
  if (t.indexOf('%') !== -1) return Qw(e, t, r)
  if (t.indexOf('E') !== -1) return wu(t, r)
  if (t.charCodeAt(0) === 36) return '$' + dr(e, t.substr(t.charAt(1) == ' ' ? 2 : 1), r)
  var a,
    i,
    s,
    o,
    l = Math.abs(r),
    f = r < 0 ? '-' : ''
  if (t.match(/^00+$/)) return f + or(l, t.length)
  if (t.match(/^[#?]+$/))
    return (
      (a = '' + r),
      r === 0 && (a = ''),
      a.length > t.length ? a : Nt(t.substr(0, t.length - a.length)) + a
    )
  if ((i = t.match(mu))) return Kw(i, l, f)
  if (t.match(/^#+0+$/)) return f + or(l, t.length - t.indexOf('0'))
  if ((i = t.match(_u)))
    return (
      (a = ('' + r).replace(/^([^\.]+)$/, '$1.' + Nt(i[1])).replace(/\.$/, '.' + Nt(i[1]))),
      (a = a.replace(/\.(\d*)$/, function (m, d) {
        return '.' + d + et('0', Nt(i[1]).length - d.length)
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
  if ((i = t.match(/^#{1,3},##0(\.?)$/))) return f + Qr('' + l)
  if ((i = t.match(/^#,##0\.([#0]*0)$/)))
    return r < 0 ? '-' + dr(e, t, -r) : Qr('' + r) + '.' + et('0', i[1].length)
  if ((i = t.match(/^#,#*,#0/))) return dr(e, t.replace(/^#,#*,/, ''), r)
  if ((i = t.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (a = Gn(dr(e, t.replace(/[\\-]/g, ''), r))),
      (s = 0),
      Gn(
        Gn(t.replace(/\\/g, '')).replace(/[0#]/g, function (m) {
          return s < a.length ? a.charAt(s++) : m === '0' ? '0' : ''
        })
      )
    )
  if (t.match(vu))
    return (
      (a = dr(e, '##########', r)), '(' + a.substr(0, 3) + ') ' + a.substr(3, 3) + '-' + a.substr(6)
    )
  var c = ''
  if ((i = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(i[4].length, 7)),
      (o = Vi(l, Math.pow(10, s) - 1, !1)),
      (a = '' + f),
      (c = Nr('n', i[1], o[1])),
      c.charAt(c.length - 1) == ' ' && (c = c.substr(0, c.length - 1) + '0'),
      (a += c + i[2] + '/' + i[3]),
      (c = Yi(o[2], s)),
      c.length < i[4].length && (c = Nt(i[4].substr(i[4].length - c.length)) + c),
      (a += c),
      a
    )
  if ((i = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(Math.max(i[1].length, i[4].length), 7)),
      (o = Vi(l, Math.pow(10, s) - 1, !0)),
      f +
        (o[0] || (o[1] ? '' : '0')) +
        ' ' +
        (o[1]
          ? co(o[1], s) + i[2] + '/' + i[3] + Yi(o[2], s)
          : et(' ', 2 * s + 1 + i[2].length + i[3].length))
    )
  if ((i = t.match(/^[#0?]+$/)))
    return (a = '' + r), t.length <= a.length ? a : Nt(t.substr(0, t.length - a.length)) + a
  if ((i = t.match(/^([#0]+)\.([#0]+)$/))) {
    ;(a = '' + r.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, '$1')),
      (s = a.indexOf('.'))
    var u = t.indexOf('.') - s,
      h = t.length - a.length - u
    return Nt(t.substr(0, u) + a + t.substr(t.length - h))
  }
  if ((i = t.match(/^00,000\.([#0]*0)$/)))
    return r < 0
      ? '-' + dr(e, t, -r)
      : Qr('' + r)
          .replace(/^\d,\d{3}$/, '0$&')
          .replace(/^\d*$/, function (m) {
            return '00,' + (m.length < 3 ? or(0, 3 - m.length) : '') + m
          }) +
          '.' +
          or(0, i[1].length)
  switch (t) {
    case '###,###':
    case '##,###':
    case '#,###':
      var p = Qr('' + l)
      return p !== '0' ? f + p : ''
    default:
      if (t.match(/\.[0#?]*$/))
        return dr(e, t.slice(0, t.lastIndexOf('.')), r) + Nt(t.slice(t.lastIndexOf('.')))
  }
  throw new Error('unsupported format |' + t + '|')
}
function Nr(e, t, r) {
  return (r | 0) === r ? dr(e, t, r) : qt(e, t, r)
}
function eT(e) {
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
var Tu = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/
function ho(e) {
  for (var t = 0, r = '', n = ''; t < e.length; )
    switch ((r = e.charAt(t))) {
      case 'G':
        ji(e, t) && (t += 6), t++
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
        if (n.match(Tu)) return !0
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
function tT(e, t, r, n) {
  for (var a = [], i = '', s = 0, o = '', l = 't', f, c, u, h = 'H'; s < e.length; )
    switch ((o = e.charAt(s))) {
      case 'G':
        if (!ji(e, s)) throw new Error('unrecognized character ' + o + ' in ' + e)
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
          if (f == null && ((f = Sa(t, r, e.charAt(s + 1) === '2')), f == null)) return ''
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
        if (t < 0 || (f == null && ((f = Sa(t, r)), f == null))) return ''
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
          (f == null && (f = Sa(t, r)),
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
        if (i.match(Tu)) {
          if (f == null && ((f = Sa(t, r)), f == null)) return ''
          ;(a[a.length] = { t: 'Z', v: i.toLowerCase() }), (l = i.charAt(1))
        } else
          i.indexOf('$') > -1 &&
            ((i = (i.match(/\$([^-\[\]]*)/) || [])[1] || '$'),
            ho(e) || (a[a.length] = { t: 't', v: i }))
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
  var g = 0,
    y = 0,
    O
  for (s = a.length - 1, l = 't'; s >= 0; --s)
    switch (a[s].t) {
      case 'h':
      case 'H':
        ;(a[s].t = h), (l = 'h'), g < 1 && (g = 1)
        break
      case 's':
        ;(O = a[s].v.match(/\.0+$/)) && (y = Math.max(y, O[0].length - 1)), g < 3 && (g = 3)
      case 'd':
      case 'y':
      case 'M':
      case 'e':
        l = a[s].t
        break
      case 'm':
        l === 's' && ((a[s].t = 'M'), g < 2 && (g = 2))
        break
      case 'X':
        break
      case 'Z':
        g < 1 && a[s].v.match(/[Hh]/) && (g = 1),
          g < 2 && a[s].v.match(/[Mm]/) && (g = 2),
          g < 3 && a[s].v.match(/[Ss]/) && (g = 3)
    }
  switch (g) {
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
  var F = '',
    b
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
        ;(a[s].v = Vw(a[s].t.charCodeAt(0), a[s].v, f, y)), (a[s].t = 't')
        break
      case 'n':
      case '?':
        for (
          b = s + 1;
          a[b] != null &&
          ((o = a[b].t) === '?' ||
            o === 'D' ||
            ((o === ' ' || o === 't') &&
              a[b + 1] != null &&
              (a[b + 1].t === '?' || (a[b + 1].t === 't' && a[b + 1].v === '/'))) ||
            (a[s].t === '(' && (o === ' ' || o === 'n' || o === ')')) ||
            (o === 't' &&
              (a[b].v === '/' || (a[b].v === ' ' && a[b + 1] != null && a[b + 1].t == '?'))));

        )
          (a[s].v += a[b].v), (a[b] = { v: '', t: ';' }), ++b
        ;(F += a[s].v), (s = b - 1)
        break
      case 'G':
        ;(a[s].t = 't'), (a[s].v = w0(t, r))
        break
    }
  var J = '',
    ae,
    C
  if (F.length > 0) {
    F.charCodeAt(0) == 40
      ? ((ae = t < 0 && F.charCodeAt(0) === 45 ? -t : t), (C = Nr('n', F, ae)))
      : ((ae = t < 0 && n > 1 ? -t : t),
        (C = Nr('n', F, ae)),
        ae < 0 && a[0] && a[0].t == 't' && ((C = C.substr(1)), (a[0].v = '-' + a[0].v))),
      (b = C.length - 1)
    var W = a.length
    for (s = 0; s < a.length; ++s)
      if (a[s] != null && a[s].t != 't' && a[s].v.indexOf('.') > -1) {
        W = s
        break
      }
    var M = a.length
    if (W === a.length && C.indexOf('E') === -1) {
      for (s = a.length - 1; s >= 0; --s)
        a[s] == null ||
          'n?'.indexOf(a[s].t) === -1 ||
          (b >= a[s].v.length - 1
            ? ((b -= a[s].v.length), (a[s].v = C.substr(b + 1, a[s].v.length)))
            : b < 0
            ? (a[s].v = '')
            : ((a[s].v = C.substr(0, b + 1)), (b = -1)),
          (a[s].t = 't'),
          (M = s))
      b >= 0 && M < a.length && (a[M].v = C.substr(0, b + 1) + a[M].v)
    } else if (W !== a.length && C.indexOf('E') === -1) {
      for (b = C.indexOf('.') - 1, s = W; s >= 0; --s)
        if (!(a[s] == null || 'n?'.indexOf(a[s].t) === -1)) {
          for (
            c = a[s].v.indexOf('.') > -1 && s === W ? a[s].v.indexOf('.') - 1 : a[s].v.length - 1,
              J = a[s].v.substr(c + 1);
            c >= 0;
            --c
          )
            b >= 0 &&
              (a[s].v.charAt(c) === '0' || a[s].v.charAt(c) === '#') &&
              (J = C.charAt(b--) + J)
          ;(a[s].v = J), (a[s].t = 't'), (M = s)
        }
      for (
        b >= 0 && M < a.length && (a[M].v = C.substr(0, b + 1) + a[M].v),
          b = C.indexOf('.') + 1,
          s = W;
        s < a.length;
        ++s
      )
        if (!(a[s] == null || ('n?('.indexOf(a[s].t) === -1 && s !== W))) {
          for (
            c = a[s].v.indexOf('.') > -1 && s === W ? a[s].v.indexOf('.') + 1 : 0,
              J = a[s].v.substr(0, c);
            c < a[s].v.length;
            ++c
          )
            b < C.length && (J += C.charAt(b++))
          ;(a[s].v = J), (a[s].t = 't'), (M = s)
        }
    }
  }
  for (s = 0; s < a.length; ++s)
    a[s] != null &&
      'n?'.indexOf(a[s].t) > -1 &&
      ((ae = n > 1 && t < 0 && s > 0 && a[s - 1].v === '-' ? -t : t),
      (a[s].v = Nr(a[s].t, a[s].v, ae)),
      (a[s].t = 't'))
  var j = ''
  for (s = 0; s !== a.length; ++s) a[s] != null && (j += a[s].v)
  return j
}
var $f = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/
function Yf(e, t) {
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
function rT(e, t) {
  var r = eT(e),
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
    var s = r[0].match($f),
      o = r[1].match($f)
    return Yf(t, s) ? [n, r[0]] : Yf(t, o) ? [n, r[1]] : [n, r[s != null && o != null ? 2 : 1]]
  }
  return [n, i]
}
function Br(e, t, r) {
  r == null && (r = {})
  var n = ''
  switch (typeof e) {
    case 'string':
      e == 'm/d/yy' && r.dateNF ? (n = r.dateNF) : (n = e)
      break
    case 'number':
      e == 14 && r.dateNF ? (n = r.dateNF) : (n = (r.table != null ? r.table : Je)[e]),
        n == null && (n = (r.table && r.table[Uf[e]]) || Je[Uf[e]]),
        n == null && (n = Lw[e] || 'General')
      break
  }
  if (ji(n, 0)) return w0(t, r)
  t instanceof Date && (t = du(t, r.date1904))
  var a = rT(n, t)
  if (ji(a[1])) return w0(t, r)
  if (t === !0) t = 'TRUE'
  else if (t === !1) t = 'FALSE'
  else if (t === '' || t == null) return ''
  return tT(a[1], t, r, a[0])
}
function po(e, t) {
  if (typeof t != 'number') {
    t = +t || -1
    for (var r = 0; r < 392; ++r) {
      if (Je[r] == null) {
        t < 0 && (t = r)
        continue
      }
      if (Je[r] == e) {
        t = r
        break
      }
    }
    t < 0 && (t = 391)
  }
  return (Je[t] = e), t
}
function ri(e) {
  for (var t = 0; t != 392; ++t) e[t] !== void 0 && po(e[t], t)
}
function Es() {
  Je = bw()
}
var T0 = {
    format: Br,
    load: po,
    _table: Je,
    load_table: ri,
    parse_date_code: Sa,
    is_date: ho,
    get_table: function () {
      return (T0._table = Je)
    }
  },
  Eu = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g
function nT(e) {
  var t = typeof e == 'number' ? Je[e] : e
  return (t = t.replace(Eu, '(\\d+)')), new RegExp('^' + t + '$')
}
function aT(e, t, r) {
  var n = -1,
    a = -1,
    i = -1,
    s = -1,
    o = -1,
    l = -1
  ;(t.match(Eu) || []).forEach(function (u, h) {
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
var iT = /* @__PURE__ */ (function () {
    var e = {}
    e.version = '1.2.0'
    function t() {
      for (var C = 0, W = new Array(256), M = 0; M != 256; ++M)
        (C = M),
          (C = C & 1 ? -306674912 ^ (C >>> 1) : C >>> 1),
          (C = C & 1 ? -306674912 ^ (C >>> 1) : C >>> 1),
          (C = C & 1 ? -306674912 ^ (C >>> 1) : C >>> 1),
          (C = C & 1 ? -306674912 ^ (C >>> 1) : C >>> 1),
          (C = C & 1 ? -306674912 ^ (C >>> 1) : C >>> 1),
          (C = C & 1 ? -306674912 ^ (C >>> 1) : C >>> 1),
          (C = C & 1 ? -306674912 ^ (C >>> 1) : C >>> 1),
          (C = C & 1 ? -306674912 ^ (C >>> 1) : C >>> 1),
          (W[M] = C)
      return typeof Int32Array < 'u' ? new Int32Array(W) : W
    }
    var r = t()
    function n(C) {
      var W = 0,
        M = 0,
        j = 0,
        V = typeof Int32Array < 'u' ? new Int32Array(4096) : new Array(4096)
      for (j = 0; j != 256; ++j) V[j] = C[j]
      for (j = 0; j != 256; ++j)
        for (M = C[j], W = 256 + j; W < 4096; W += 256) M = V[W] = (M >>> 8) ^ C[M & 255]
      var G = []
      for (j = 1; j != 16; ++j)
        G[j - 1] =
          typeof Int32Array < 'u'
            ? V.subarray(j * 256, j * 256 + 256)
            : V.slice(j * 256, j * 256 + 256)
      return G
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
      g = a[11],
      y = a[12],
      O = a[13],
      F = a[14]
    function b(C, W) {
      for (var M = W ^ -1, j = 0, V = C.length; j < V; )
        M = (M >>> 8) ^ r[(M ^ C.charCodeAt(j++)) & 255]
      return ~M
    }
    function J(C, W) {
      for (var M = W ^ -1, j = C.length - 15, V = 0; V < j; )
        M =
          F[C[V++] ^ (M & 255)] ^
          O[C[V++] ^ ((M >> 8) & 255)] ^
          y[C[V++] ^ ((M >> 16) & 255)] ^
          g[C[V++] ^ (M >>> 24)] ^
          d[C[V++]] ^
          m[C[V++]] ^
          p[C[V++]] ^
          h[C[V++]] ^
          u[C[V++]] ^
          c[C[V++]] ^
          f[C[V++]] ^
          l[C[V++]] ^
          o[C[V++]] ^
          s[C[V++]] ^
          i[C[V++]] ^
          r[C[V++]]
      for (j += 15; V < j; ) M = (M >>> 8) ^ r[(M ^ C[V++]) & 255]
      return ~M
    }
    function ae(C, W) {
      for (var M = W ^ -1, j = 0, V = C.length, G = 0, ne = 0; j < V; )
        (G = C.charCodeAt(j++)),
          G < 128
            ? (M = (M >>> 8) ^ r[(M ^ G) & 255])
            : G < 2048
            ? ((M = (M >>> 8) ^ r[(M ^ (192 | ((G >> 6) & 31))) & 255]),
              (M = (M >>> 8) ^ r[(M ^ (128 | (G & 63))) & 255]))
            : G >= 55296 && G < 57344
            ? ((G = (G & 1023) + 64),
              (ne = C.charCodeAt(j++) & 1023),
              (M = (M >>> 8) ^ r[(M ^ (240 | ((G >> 8) & 7))) & 255]),
              (M = (M >>> 8) ^ r[(M ^ (128 | ((G >> 2) & 63))) & 255]),
              (M = (M >>> 8) ^ r[(M ^ (128 | ((ne >> 6) & 15) | ((G & 3) << 4))) & 255]),
              (M = (M >>> 8) ^ r[(M ^ (128 | (ne & 63))) & 255]))
            : ((M = (M >>> 8) ^ r[(M ^ (224 | ((G >> 12) & 15))) & 255]),
              (M = (M >>> 8) ^ r[(M ^ (128 | ((G >> 6) & 63))) & 255]),
              (M = (M >>> 8) ^ r[(M ^ (128 | (G & 63))) & 255]))
      return ~M
    }
    return (e.table = r), (e.bstr = b), (e.buf = J), (e.str = ae), e
  })(),
  Be = /* @__PURE__ */ (function () {
    var t = {}
    t.version = '1.2.1'
    function r(x, w) {
      for (
        var _ = x.split('/'), v = w.split('/'), T = 0, E = 0, k = Math.min(_.length, v.length);
        T < k;
        ++T
      ) {
        if ((E = _[T].length - v[T].length)) return E
        if (_[T] != v[T]) return _[T] < v[T] ? -1 : 1
      }
      return _.length - v.length
    }
    function n(x) {
      if (x.charAt(x.length - 1) == '/')
        return x.slice(0, -1).indexOf('/') === -1 ? x : n(x.slice(0, -1))
      var w = x.lastIndexOf('/')
      return w === -1 ? x : x.slice(0, w + 1)
    }
    function a(x) {
      if (x.charAt(x.length - 1) == '/') return a(x.slice(0, -1))
      var w = x.lastIndexOf('/')
      return w === -1 ? x : x.slice(w + 1)
    }
    function i(x, w) {
      typeof w == 'string' && (w = new Date(w))
      var _ = w.getHours()
      ;(_ = (_ << 6) | w.getMinutes()), (_ = (_ << 5) | (w.getSeconds() >>> 1)), x.write_shift(2, _)
      var v = w.getFullYear() - 1980
      ;(v = (v << 4) | (w.getMonth() + 1)), (v = (v << 5) | w.getDate()), x.write_shift(2, v)
    }
    function s(x) {
      var w = x.read_shift(2) & 65535,
        _ = x.read_shift(2) & 65535,
        v = new Date(),
        T = _ & 31
      _ >>>= 5
      var E = _ & 15
      ;(_ >>>= 4), v.setMilliseconds(0), v.setFullYear(_ + 1980), v.setMonth(E - 1), v.setDate(T)
      var k = w & 31
      w >>>= 5
      var B = w & 63
      return (w >>>= 6), v.setHours(w), v.setMinutes(B), v.setSeconds(k << 1), v
    }
    function o(x) {
      Yt(x, 0)
      for (var w = {}, _ = 0; x.l <= x.length - 4; ) {
        var v = x.read_shift(2),
          T = x.read_shift(2),
          E = x.l + T,
          k = {}
        switch (v) {
          case 21589:
            ;(_ = x.read_shift(1)),
              _ & 1 && (k.mtime = x.read_shift(4)),
              T > 5 && (_ & 2 && (k.atime = x.read_shift(4)), _ & 4 && (k.ctime = x.read_shift(4))),
              k.mtime && (k.mt = new Date(k.mtime * 1e3))
            break
        }
        ;(x.l = E), (w[v] = k)
      }
      return w
    }
    var l
    function f() {
      return l || (l = {})
    }
    function c(x, w) {
      if (x[0] == 80 && x[1] == 75) return qo(x, w)
      if ((x[0] | 32) == 109 && (x[1] | 32) == 105) return w1(x, w)
      if (x.length < 512) throw new Error('CFB file size ' + x.length + ' < 512')
      var _ = 3,
        v = 512,
        T = 0,
        E = 0,
        k = 0,
        B = 0,
        R = 0,
        N = [],
        P = x.slice(0, 512)
      Yt(P, 0)
      var z = u(P)
      switch (((_ = z[0]), _)) {
        case 3:
          v = 512
          break
        case 4:
          v = 4096
          break
        case 0:
          if (z[1] == 0) return qo(x, w)
        default:
          throw new Error('Major Version: Expected 3 or 4 saw ' + _)
      }
      v !== 512 && ((P = x.slice(0, v)), Yt(P, 28))
      var te = x.slice(0, v)
      h(P, _)
      var se = P.read_shift(4, 'i')
      if (_ === 3 && se !== 0) throw new Error('# Directory Sectors: Expected 0 saw ' + se)
      ;(P.l += 4),
        (k = P.read_shift(4, 'i')),
        (P.l += 4),
        P.chk('00100000', 'Mini Stream Cutoff Size: '),
        (B = P.read_shift(4, 'i')),
        (T = P.read_shift(4, 'i')),
        (R = P.read_shift(4, 'i')),
        (E = P.read_shift(4, 'i'))
      for (var K = -1, ie = 0; ie < 109 && ((K = P.read_shift(4, 'i')), !(K < 0)); ++ie) N[ie] = K
      var _e = p(x, v)
      g(R, E, _e, v, N)
      var Ze = O(_e, k, N, v)
      ;(Ze[k].name = '!Directory'),
        T > 0 && B !== ne && (Ze[B].name = '!MiniFAT'),
        (Ze[N[0]].name = '!FAT'),
        (Ze.fat_addrs = N),
        (Ze.ssz = v)
      var Qe = {},
        At = [],
        ca = [],
        ua = []
      F(k, Ze, _e, At, T, Qe, ca, B), m(ca, ua, At), At.shift()
      var ha = {
        FileIndex: ca,
        FullPaths: ua
      }
      return w && w.raw && (ha.raw = { header: te, sectors: _e }), ha
    }
    function u(x) {
      if (x[x.l] == 80 && x[x.l + 1] == 75) return [0, 0]
      x.chk(Ne, 'Header Signature: '), (x.l += 16)
      var w = x.read_shift(2, 'u')
      return [x.read_shift(2, 'u'), w]
    }
    function h(x, w) {
      var _ = 9
      switch (((x.l += 2), (_ = x.read_shift(2)))) {
        case 9:
          if (w != 3) throw new Error('Sector Shift: Expected 9 saw ' + _)
          break
        case 12:
          if (w != 4) throw new Error('Sector Shift: Expected 12 saw ' + _)
          break
        default:
          throw new Error('Sector Shift: Expected 9 or 12 saw ' + _)
      }
      x.chk('0600', 'Mini Sector Shift: '), x.chk('000000000000', 'Reserved: ')
    }
    function p(x, w) {
      for (var _ = Math.ceil(x.length / w) - 1, v = [], T = 1; T < _; ++T)
        v[T - 1] = x.slice(T * w, (T + 1) * w)
      return (v[_ - 1] = x.slice(_ * w)), v
    }
    function m(x, w, _) {
      for (var v = 0, T = 0, E = 0, k = 0, B = 0, R = _.length, N = [], P = []; v < R; ++v)
        (N[v] = P[v] = v), (w[v] = _[v])
      for (; B < P.length; ++B)
        (v = P[B]),
          (T = x[v].L),
          (E = x[v].R),
          (k = x[v].C),
          N[v] === v &&
            (T !== -1 && N[T] !== T && (N[v] = N[T]), E !== -1 && N[E] !== E && (N[v] = N[E])),
          k !== -1 && (N[k] = v),
          T !== -1 && v != N[v] && ((N[T] = N[v]), P.lastIndexOf(T) < B && P.push(T)),
          E !== -1 && v != N[v] && ((N[E] = N[v]), P.lastIndexOf(E) < B && P.push(E))
      for (v = 1; v < R; ++v)
        N[v] === v &&
          (E !== -1 && N[E] !== E ? (N[v] = N[E]) : T !== -1 && N[T] !== T && (N[v] = N[T]))
      for (v = 1; v < R; ++v)
        if (x[v].type !== 0) {
          if (((B = v), B != N[B]))
            do (B = N[B]), (w[v] = w[B] + '/' + w[v])
            while (B !== 0 && N[B] !== -1 && B != N[B])
          N[v] = -1
        }
      for (w[0] += '/', v = 1; v < R; ++v) x[v].type !== 2 && (w[v] += '/')
    }
    function d(x, w, _) {
      for (var v = x.start, T = x.size, E = [], k = v; _ && T > 0 && k >= 0; )
        E.push(w.slice(k * G, k * G + G)), (T -= G), (k = xn(_, k * 4))
      return E.length === 0 ? L(0) : Tt(E).slice(0, x.size)
    }
    function g(x, w, _, v, T) {
      var E = ne
      if (x === ne) {
        if (w !== 0) throw new Error('DIFAT chain shorter than expected')
      } else if (x !== -1) {
        var k = _[x],
          B = (v >>> 2) - 1
        if (!k) return
        for (var R = 0; R < B && (E = xn(k, R * 4)) !== ne; ++R) T.push(E)
        g(xn(k, v - 4), w - 1, _, v, T)
      }
    }
    function y(x, w, _, v, T) {
      var E = [],
        k = []
      T || (T = [])
      var B = v - 1,
        R = 0,
        N = 0
      for (R = w; R >= 0; ) {
        ;(T[R] = !0), (E[E.length] = R), k.push(x[R])
        var P = _[Math.floor((R * 4) / v)]
        if (((N = (R * 4) & B), v < 4 + N))
          throw new Error('FAT boundary crossed: ' + R + ' 4 ' + v)
        if (!x[P]) break
        R = xn(x[P], N)
      }
      return { nodes: E, data: Jf([k]) }
    }
    function O(x, w, _, v) {
      var T = x.length,
        E = [],
        k = [],
        B = [],
        R = [],
        N = v - 1,
        P = 0,
        z = 0,
        te = 0,
        se = 0
      for (P = 0; P < T; ++P)
        if (((B = []), (te = P + w), te >= T && (te -= T), !k[te])) {
          R = []
          var K = []
          for (z = te; z >= 0; ) {
            ;(K[z] = !0), (k[z] = !0), (B[B.length] = z), R.push(x[z])
            var ie = _[Math.floor((z * 4) / v)]
            if (((se = (z * 4) & N), v < 4 + se))
              throw new Error('FAT boundary crossed: ' + z + ' 4 ' + v)
            if (!x[ie] || ((z = xn(x[ie], se)), K[z])) break
          }
          E[te] = { nodes: B, data: Jf([R]) }
        }
      return E
    }
    function F(x, w, _, v, T, E, k, B) {
      for (
        var R = 0, N = v.length ? 2 : 0, P = w[x].data, z = 0, te = 0, se;
        z < P.length;
        z += 128
      ) {
        var K = P.slice(z, z + 128)
        Yt(K, 64), (te = K.read_shift(2)), (se = vo(K, 0, te - N)), v.push(se)
        var ie = {
            name: se,
            type: K.read_shift(1),
            color: K.read_shift(1),
            L: K.read_shift(4, 'i'),
            R: K.read_shift(4, 'i'),
            C: K.read_shift(4, 'i'),
            clsid: K.read_shift(16),
            state: K.read_shift(4, 'i'),
            start: 0,
            size: 0
          },
          _e = K.read_shift(2) + K.read_shift(2) + K.read_shift(2) + K.read_shift(2)
        _e !== 0 && (ie.ct = b(K, K.l - 8))
        var Ze = K.read_shift(2) + K.read_shift(2) + K.read_shift(2) + K.read_shift(2)
        Ze !== 0 && (ie.mt = b(K, K.l - 8)),
          (ie.start = K.read_shift(4, 'i')),
          (ie.size = K.read_shift(4, 'i')),
          ie.size < 0 && ie.start < 0 && ((ie.size = ie.type = 0), (ie.start = ne), (ie.name = '')),
          ie.type === 5
            ? ((R = ie.start), T > 0 && R !== ne && (w[R].name = '!StreamData'))
            : ie.size >= 4096
            ? ((ie.storage = 'fat'),
              w[ie.start] === void 0 && (w[ie.start] = y(_, ie.start, w.fat_addrs, w.ssz)),
              (w[ie.start].name = ie.name),
              (ie.content = w[ie.start].data.slice(0, ie.size)))
            : ((ie.storage = 'minifat'),
              ie.size < 0
                ? (ie.size = 0)
                : R !== ne &&
                  ie.start !== ne &&
                  w[R] &&
                  (ie.content = d(ie, w[R].data, (w[B] || {}).data))),
          ie.content && Yt(ie.content, 0),
          (E[se] = ie),
          k.push(ie)
      }
    }
    function b(x, w) {
      return new Date(((Gt(x, w + 4) / 1e7) * Math.pow(2, 32) + Gt(x, w) / 1e7 - 11644473600) * 1e3)
    }
    function J(x, w) {
      return f(), c(l.readFileSync(x), w)
    }
    function ae(x, w) {
      var _ = w && w.type
      switch ((_ || (ke && Buffer.isBuffer(x) && (_ = 'buffer')), _ || 'base64')) {
        case 'file':
          return J(x, w)
        case 'base64':
          return c(ir(Lr(x)), w)
        case 'binary':
          return c(ir(x), w)
      }
      return c(x, w)
    }
    function C(x, w) {
      var _ = w || {},
        v = _.root || 'Root Entry'
      if (
        (x.FullPaths || (x.FullPaths = []),
        x.FileIndex || (x.FileIndex = []),
        x.FullPaths.length !== x.FileIndex.length)
      )
        throw new Error('inconsistent CFB structure')
      x.FullPaths.length === 0 &&
        ((x.FullPaths[0] = v + '/'), (x.FileIndex[0] = { name: v, type: 5 })),
        _.CLSID && (x.FileIndex[0].clsid = _.CLSID),
        W(x)
    }
    function W(x) {
      var w = 'Sh33tJ5'
      if (!Be.find(x, '/' + w)) {
        var _ = L(4)
        ;(_[0] = 55),
          (_[1] = _[3] = 50),
          (_[2] = 54),
          x.FileIndex.push({ name: w, type: 2, content: _, size: 4, L: 69, R: 69, C: 69 }),
          x.FullPaths.push(x.FullPaths[0] + w),
          M(x)
      }
    }
    function M(x, w) {
      C(x)
      for (var _ = !1, v = !1, T = x.FullPaths.length - 1; T >= 0; --T) {
        var E = x.FileIndex[T]
        switch (E.type) {
          case 0:
            v ? (_ = !0) : (x.FileIndex.pop(), x.FullPaths.pop())
            break
          case 1:
          case 2:
          case 5:
            ;(v = !0),
              isNaN(E.R * E.L * E.C) && (_ = !0),
              E.R > -1 && E.L > -1 && E.R == E.L && (_ = !0)
            break
          default:
            _ = !0
            break
        }
      }
      if (!(!_ && !w)) {
        var k = new Date(1987, 1, 19),
          B = 0,
          R = Object.create ? /* @__PURE__ */ Object.create(null) : {},
          N = []
        for (T = 0; T < x.FullPaths.length; ++T)
          (R[x.FullPaths[T]] = !0),
            x.FileIndex[T].type !== 0 && N.push([x.FullPaths[T], x.FileIndex[T]])
        for (T = 0; T < N.length; ++T) {
          var P = n(N[T][0])
          ;(v = R[P]),
            v ||
              (N.push([
                P,
                {
                  name: a(P).replace('/', ''),
                  type: 1,
                  clsid: st,
                  ct: k,
                  mt: k,
                  content: null
                }
              ]),
              (R[P] = !0))
        }
        for (
          N.sort(function (se, K) {
            return r(se[0], K[0])
          }),
            x.FullPaths = [],
            x.FileIndex = [],
            T = 0;
          T < N.length;
          ++T
        )
          (x.FullPaths[T] = N[T][0]), (x.FileIndex[T] = N[T][1])
        for (T = 0; T < N.length; ++T) {
          var z = x.FileIndex[T],
            te = x.FullPaths[T]
          if (
            ((z.name = a(te).replace('/', '')),
            (z.L = z.R = z.C = -(z.color = 1)),
            (z.size = z.content ? z.content.length : 0),
            (z.start = 0),
            (z.clsid = z.clsid || st),
            T === 0)
          )
            (z.C = N.length > 1 ? 1 : -1), (z.size = 0), (z.type = 5)
          else if (te.slice(-1) == '/') {
            for (B = T + 1; B < N.length && n(x.FullPaths[B]) != te; ++B);
            for (
              z.C = B >= N.length ? -1 : B, B = T + 1;
              B < N.length && n(x.FullPaths[B]) != n(te);
              ++B
            );
            ;(z.R = B >= N.length ? -1 : B), (z.type = 1)
          } else n(x.FullPaths[T + 1] || '') == n(te) && (z.R = T + 1), (z.type = 2)
        }
      }
    }
    function j(x, w) {
      var _ = w || {}
      if (_.fileType == 'mad') return T1(x, _)
      switch ((M(x), _.fileType)) {
        case 'zip':
          return p1(x, _)
      }
      var v = (function (se) {
          for (var K = 0, ie = 0, _e = 0; _e < se.FileIndex.length; ++_e) {
            var Ze = se.FileIndex[_e]
            if (!!Ze.content) {
              var Qe = Ze.content.length
              Qe > 0 && (Qe < 4096 ? (K += (Qe + 63) >> 6) : (ie += (Qe + 511) >> 9))
            }
          }
          for (
            var At = (se.FullPaths.length + 3) >> 2,
              ca = (K + 7) >> 3,
              ua = (K + 127) >> 7,
              ha = ca + ie + At + ua,
              un = (ha + 127) >> 7,
              bs = un <= 109 ? 0 : Math.ceil((un - 109) / 127);
            (ha + un + bs + 127) >> 7 > un;

          )
            bs = ++un <= 109 ? 0 : Math.ceil((un - 109) / 127)
          var Ar = [1, bs, un, ua, At, ie, K, 0]
          return (
            (se.FileIndex[0].size = K << 6),
            (Ar[7] =
              (se.FileIndex[0].start = Ar[0] + Ar[1] + Ar[2] + Ar[3] + Ar[4] + Ar[5]) +
              ((Ar[6] + 7) >> 3)),
            Ar
          )
        })(x),
        T = L(v[7] << 9),
        E = 0,
        k = 0
      {
        for (E = 0; E < 8; ++E) T.write_shift(1, me[E])
        for (E = 0; E < 8; ++E) T.write_shift(2, 0)
        for (
          T.write_shift(2, 62),
            T.write_shift(2, 3),
            T.write_shift(2, 65534),
            T.write_shift(2, 9),
            T.write_shift(2, 6),
            E = 0;
          E < 3;
          ++E
        )
          T.write_shift(2, 0)
        for (
          T.write_shift(4, 0),
            T.write_shift(4, v[2]),
            T.write_shift(4, v[0] + v[1] + v[2] + v[3] - 1),
            T.write_shift(4, 0),
            T.write_shift(4, 1 << 12),
            T.write_shift(4, v[3] ? v[0] + v[1] + v[2] - 1 : ne),
            T.write_shift(4, v[3]),
            T.write_shift(-4, v[1] ? v[0] - 1 : ne),
            T.write_shift(4, v[1]),
            E = 0;
          E < 109;
          ++E
        )
          T.write_shift(-4, E < v[2] ? v[1] + E : -1)
      }
      if (v[1])
        for (k = 0; k < v[1]; ++k) {
          for (; E < 236 + k * 127; ++E) T.write_shift(-4, E < v[2] ? v[1] + E : -1)
          T.write_shift(-4, k === v[1] - 1 ? ne : k + 1)
        }
      var B = function (se) {
        for (k += se; E < k - 1; ++E) T.write_shift(-4, E + 1)
        se && (++E, T.write_shift(-4, ne))
      }
      for (k = E = 0, k += v[1]; E < k; ++E) T.write_shift(-4, ee.DIFSECT)
      for (k += v[2]; E < k; ++E) T.write_shift(-4, ee.FATSECT)
      B(v[3]), B(v[4])
      for (var R = 0, N = 0, P = x.FileIndex[0]; R < x.FileIndex.length; ++R)
        (P = x.FileIndex[R]),
          P.content && ((N = P.content.length), !(N < 4096) && ((P.start = k), B((N + 511) >> 9)))
      for (B((v[6] + 7) >> 3); T.l & 511; ) T.write_shift(-4, ee.ENDOFCHAIN)
      for (k = E = 0, R = 0; R < x.FileIndex.length; ++R)
        (P = x.FileIndex[R]),
          P.content &&
            ((N = P.content.length), !(!N || N >= 4096) && ((P.start = k), B((N + 63) >> 6)))
      for (; T.l & 511; ) T.write_shift(-4, ee.ENDOFCHAIN)
      for (E = 0; E < v[4] << 2; ++E) {
        var z = x.FullPaths[E]
        if (!z || z.length === 0) {
          for (R = 0; R < 17; ++R) T.write_shift(4, 0)
          for (R = 0; R < 3; ++R) T.write_shift(4, -1)
          for (R = 0; R < 12; ++R) T.write_shift(4, 0)
          continue
        }
        ;(P = x.FileIndex[E]), E === 0 && (P.start = P.size ? P.start - 1 : ne)
        var te = (E === 0 && _.root) || P.name
        if (
          ((N = 2 * (te.length + 1)),
          T.write_shift(64, te, 'utf16le'),
          T.write_shift(2, N),
          T.write_shift(1, P.type),
          T.write_shift(1, P.color),
          T.write_shift(-4, P.L),
          T.write_shift(-4, P.R),
          T.write_shift(-4, P.C),
          P.clsid)
        )
          T.write_shift(16, P.clsid, 'hex')
        else for (R = 0; R < 4; ++R) T.write_shift(4, 0)
        T.write_shift(4, P.state || 0),
          T.write_shift(4, 0),
          T.write_shift(4, 0),
          T.write_shift(4, 0),
          T.write_shift(4, 0),
          T.write_shift(4, P.start),
          T.write_shift(4, P.size),
          T.write_shift(4, 0)
      }
      for (E = 1; E < x.FileIndex.length; ++E)
        if (((P = x.FileIndex[E]), P.size >= 4096))
          if (((T.l = (P.start + 1) << 9), ke && Buffer.isBuffer(P.content)))
            P.content.copy(T, T.l, 0, P.size), (T.l += (P.size + 511) & -512)
          else {
            for (R = 0; R < P.size; ++R) T.write_shift(1, P.content[R])
            for (; R & 511; ++R) T.write_shift(1, 0)
          }
      for (E = 1; E < x.FileIndex.length; ++E)
        if (((P = x.FileIndex[E]), P.size > 0 && P.size < 4096))
          if (ke && Buffer.isBuffer(P.content))
            P.content.copy(T, T.l, 0, P.size), (T.l += (P.size + 63) & -64)
          else {
            for (R = 0; R < P.size; ++R) T.write_shift(1, P.content[R])
            for (; R & 63; ++R) T.write_shift(1, 0)
          }
      if (ke) T.l = T.length
      else for (; T.l < T.length; ) T.write_shift(1, 0)
      return T
    }
    function V(x, w) {
      var _ = x.FullPaths.map(function (R) {
          return R.toUpperCase()
        }),
        v = _.map(function (R) {
          var N = R.split('/')
          return N[N.length - (R.slice(-1) == '/' ? 2 : 1)]
        }),
        T = !1
      w.charCodeAt(0) === 47 ? ((T = !0), (w = _[0].slice(0, -1) + w)) : (T = w.indexOf('/') !== -1)
      var E = w.toUpperCase(),
        k = T === !0 ? _.indexOf(E) : v.indexOf(E)
      if (k !== -1) return x.FileIndex[k]
      var B = !E.match(Ti)
      for (E = E.replace(Ca, ''), B && (E = E.replace(Ti, '!')), k = 0; k < _.length; ++k)
        if (
          (B ? _[k].replace(Ti, '!') : _[k]).replace(Ca, '') == E ||
          (B ? v[k].replace(Ti, '!') : v[k]).replace(Ca, '') == E
        )
          return x.FileIndex[k]
      return null
    }
    var G = 64,
      ne = -2,
      Ne = 'd0cf11e0a1b11ae1',
      me = [208, 207, 17, 224, 161, 177, 26, 225],
      st = '00000000000000000000000000000000',
      ee = {
        MAXREGSECT: -6,
        DIFSECT: -4,
        FATSECT: -3,
        ENDOFCHAIN: ne,
        FREESECT: -1,
        HEADER_SIGNATURE: Ne,
        HEADER_MINOR_VERSION: '3e00',
        MAXREGSID: -6,
        NOSTREAM: -1,
        HEADER_CLSID: st,
        EntryTypes: ['unknown', 'storage', 'stream', 'lockbytes', 'property', 'root']
      }
    function Ee(x, w, _) {
      f()
      var v = j(x, _)
      l.writeFileSync(w, v)
    }
    function Se(x) {
      for (var w = new Array(x.length), _ = 0; _ < x.length; ++_) w[_] = String.fromCharCode(x[_])
      return w.join('')
    }
    function ot(x, w) {
      var _ = j(x, w)
      switch ((w && w.type) || 'buffer') {
        case 'file':
          return f(), l.writeFileSync(w.filename, _), _
        case 'binary':
          return typeof _ == 'string' ? _ : Se(_)
        case 'base64':
          return $a(typeof _ == 'string' ? _ : Se(_))
        case 'buffer':
          if (ke) return Buffer.isBuffer(_) ? _ : Yr(_)
        case 'array':
          return typeof _ == 'string' ? ir(_) : _
      }
      return _
    }
    var ft
    function S(x) {
      try {
        var w = x.InflateRaw,
          _ = new w()
        if ((_._processChunk(new Uint8Array([3, 0]), _._finishFlushFlag), _.bytesRead)) ft = x
        else throw new Error('zlib does not expose bytesRead')
      } catch (v) {
        console.error('cannot use native zlib: ' + (v.message || v))
      }
    }
    function I(x, w) {
      if (!ft) return Xo(x, w)
      var _ = ft.InflateRaw,
        v = new _(),
        T = v._processChunk(x.slice(x.l), v._finishFlushFlag)
      return (x.l += v.bytesRead), T
    }
    function D(x) {
      return ft ? ft.deflateRawSync(x) : $o(x)
    }
    var A = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      Y = [
        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115,
        131, 163, 195, 227, 258
      ],
      ce = [
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537,
        2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577
      ]
    function ue(x) {
      var w = (((x << 1) | (x << 11)) & 139536) | (((x << 5) | (x << 15)) & 558144)
      return ((w >> 16) | (w >> 8) | w) & 255
    }
    for (
      var le = typeof Uint8Array < 'u', re = le ? new Uint8Array(1 << 8) : [], Pe = 0;
      Pe < 1 << 8;
      ++Pe
    )
      re[Pe] = ue(Pe)
    function Te(x, w) {
      var _ = re[x & 255]
      return w <= 8
        ? _ >>> (8 - w)
        : ((_ = (_ << 8) | re[(x >> 8) & 255]),
          w <= 16 ? _ >>> (16 - w) : ((_ = (_ << 8) | re[(x >> 16) & 255]), _ >>> (24 - w)))
    }
    function mt(x, w) {
      var _ = w & 7,
        v = w >>> 3
      return ((x[v] | (_ <= 6 ? 0 : x[v + 1] << 8)) >>> _) & 3
    }
    function Oe(x, w) {
      var _ = w & 7,
        v = w >>> 3
      return ((x[v] | (_ <= 5 ? 0 : x[v + 1] << 8)) >>> _) & 7
    }
    function Kt(x, w) {
      var _ = w & 7,
        v = w >>> 3
      return ((x[v] | (_ <= 4 ? 0 : x[v + 1] << 8)) >>> _) & 15
    }
    function $e(x, w) {
      var _ = w & 7,
        v = w >>> 3
      return ((x[v] | (_ <= 3 ? 0 : x[v + 1] << 8)) >>> _) & 31
    }
    function fe(x, w) {
      var _ = w & 7,
        v = w >>> 3
      return ((x[v] | (_ <= 1 ? 0 : x[v + 1] << 8)) >>> _) & 127
    }
    function kt(x, w, _) {
      var v = w & 7,
        T = w >>> 3,
        E = (1 << _) - 1,
        k = x[T] >>> v
      return (
        _ < 8 - v ||
          ((k |= x[T + 1] << (8 - v)), _ < 16 - v) ||
          ((k |= x[T + 2] << (16 - v)), _ < 24 - v) ||
          (k |= x[T + 3] << (24 - v)),
        k & E
      )
    }
    function he(x, w, _) {
      var v = w & 7,
        T = w >>> 3
      return (
        v <= 5
          ? (x[T] |= (_ & 7) << v)
          : ((x[T] |= (_ << v) & 255), (x[T + 1] = (_ & 7) >> (8 - v))),
        w + 3
      )
    }
    function Sr(x, w, _) {
      var v = w & 7,
        T = w >>> 3
      return (_ = (_ & 1) << v), (x[T] |= _), w + 1
    }
    function Xe(x, w, _) {
      var v = w & 7,
        T = w >>> 3
      return (_ <<= v), (x[T] |= _ & 255), (_ >>>= 8), (x[T + 1] = _), w + 8
    }
    function yr(x, w, _) {
      var v = w & 7,
        T = w >>> 3
      return (
        (_ <<= v), (x[T] |= _ & 255), (_ >>>= 8), (x[T + 1] = _ & 255), (x[T + 2] = _ >>> 8), w + 16
      )
    }
    function Ns(x, w) {
      var _ = x.length,
        v = 2 * _ > w ? 2 * _ : w + 5,
        T = 0
      if (_ >= w) return x
      if (ke) {
        var E = bf(v)
        if (x.copy) x.copy(E)
        else for (; T < x.length; ++T) E[T] = x[T]
        return E
      } else if (le) {
        var k = new Uint8Array(v)
        if (k.set) k.set(x)
        else for (; T < _; ++T) k[T] = x[T]
        return k
      }
      return (x.length = v), x
    }
    function hr(x) {
      for (var w = new Array(x), _ = 0; _ < x; ++_) w[_] = 0
      return w
    }
    function ci(x, w, _) {
      var v = 1,
        T = 0,
        E = 0,
        k = 0,
        B = 0,
        R = x.length,
        N = le ? new Uint16Array(32) : hr(32)
      for (E = 0; E < 32; ++E) N[E] = 0
      for (E = R; E < _; ++E) x[E] = 0
      R = x.length
      var P = le ? new Uint16Array(R) : hr(R)
      for (E = 0; E < R; ++E) N[(T = x[E])]++, v < T && (v = T), (P[E] = 0)
      for (N[0] = 0, E = 1; E <= v; ++E) N[E + 16] = B = (B + N[E - 1]) << 1
      for (E = 0; E < R; ++E) (B = x[E]), B != 0 && (P[E] = N[B + 16]++)
      var z = 0
      for (E = 0; E < R; ++E)
        if (((z = x[E]), z != 0))
          for (B = Te(P[E], v) >> (v - z), k = (1 << (v + 4 - z)) - 1; k >= 0; --k)
            w[B | (k << z)] = (z & 15) | (E << 4)
      return v
    }
    var Ps = le ? new Uint16Array(512) : hr(512),
      Is = le ? new Uint16Array(32) : hr(32)
    if (!le) {
      for (var cn = 0; cn < 512; ++cn) Ps[cn] = 0
      for (cn = 0; cn < 32; ++cn) Is[cn] = 0
    }
    ;(function () {
      for (var x = [], w = 0; w < 32; w++) x.push(5)
      ci(x, Is, 32)
      var _ = []
      for (w = 0; w <= 143; w++) _.push(8)
      for (; w <= 255; w++) _.push(9)
      for (; w <= 279; w++) _.push(7)
      for (; w <= 287; w++) _.push(8)
      ci(_, Ps, 288)
    })()
    var c1 = /* @__PURE__ */ (function () {
      for (var w = le ? new Uint8Array(32768) : [], _ = 0, v = 0; _ < ce.length - 1; ++_)
        for (; v < ce[_ + 1]; ++v) w[v] = _
      for (; v < 32768; ++v) w[v] = 29
      var T = le ? new Uint8Array(259) : []
      for (_ = 0, v = 0; _ < Y.length - 1; ++_) for (; v < Y[_ + 1]; ++v) T[v] = _
      function E(B, R) {
        for (var N = 0; N < B.length; ) {
          var P = Math.min(65535, B.length - N),
            z = N + P == B.length
          for (R.write_shift(1, +z), R.write_shift(2, P), R.write_shift(2, ~P & 65535); P-- > 0; )
            R[R.l++] = B[N++]
        }
        return R.l
      }
      function k(B, R) {
        for (var N = 0, P = 0, z = le ? new Uint16Array(32768) : []; P < B.length; ) {
          var te = Math.min(65535, B.length - P)
          if (te < 10) {
            for (
              N = he(R, N, +(P + te == B.length)),
                N & 7 && (N += 8 - (N & 7)),
                R.l = (N / 8) | 0,
                R.write_shift(2, te),
                R.write_shift(2, ~te & 65535);
              te-- > 0;

            )
              R[R.l++] = B[P++]
            N = R.l * 8
            continue
          }
          N = he(R, N, +(P + te == B.length) + 2)
          for (var se = 0; te-- > 0; ) {
            var K = B[P]
            se = ((se << 5) ^ K) & 32767
            var ie = -1,
              _e = 0
            if ((ie = z[se]) && ((ie |= P & -32768), ie > P && (ie -= 32768), ie < P))
              for (; B[ie + _e] == B[P + _e] && _e < 250; ) ++_e
            if (_e > 2) {
              ;(K = T[_e]),
                K <= 22
                  ? (N = Xe(R, N, re[K + 1] >> 1) - 1)
                  : (Xe(R, N, 3), (N += 5), Xe(R, N, re[K - 23] >> 5), (N += 3))
              var Ze = K < 8 ? 0 : (K - 4) >> 2
              Ze > 0 && (yr(R, N, _e - Y[K]), (N += Ze)),
                (K = w[P - ie]),
                (N = Xe(R, N, re[K] >> 3)),
                (N -= 3)
              var Qe = K < 4 ? 0 : (K - 2) >> 1
              Qe > 0 && (yr(R, N, P - ie - ce[K]), (N += Qe))
              for (var At = 0; At < _e; ++At)
                (z[se] = P & 32767), (se = ((se << 5) ^ B[P]) & 32767), ++P
              te -= _e - 1
            } else
              K <= 143 ? (K = K + 48) : (N = Sr(R, N, 1)),
                (N = Xe(R, N, re[K])),
                (z[se] = P & 32767),
                ++P
          }
          N = Xe(R, N, 0) - 1
        }
        return (R.l = ((N + 7) / 8) | 0), R.l
      }
      return function (R, N) {
        return R.length < 8 ? E(R, N) : k(R, N)
      }
    })()
    function $o(x) {
      var w = L(50 + Math.floor(x.length * 1.1)),
        _ = c1(x, w)
      return w.slice(0, _)
    }
    var Yo = le ? new Uint16Array(32768) : hr(32768),
      jo = le ? new Uint16Array(32768) : hr(32768),
      Vo = le ? new Uint16Array(128) : hr(128),
      Go = 1,
      zo = 1
    function u1(x, w) {
      var _ = $e(x, w) + 257
      w += 5
      var v = $e(x, w) + 1
      w += 5
      var T = Kt(x, w) + 4
      w += 4
      for (
        var E = 0,
          k = le ? new Uint8Array(19) : hr(19),
          B = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          R = 1,
          N = le ? new Uint8Array(8) : hr(8),
          P = le ? new Uint8Array(8) : hr(8),
          z = k.length,
          te = 0;
        te < T;
        ++te
      )
        (k[A[te]] = E = Oe(x, w)), R < E && (R = E), N[E]++, (w += 3)
      var se = 0
      for (N[0] = 0, te = 1; te <= R; ++te) P[te] = se = (se + N[te - 1]) << 1
      for (te = 0; te < z; ++te) (se = k[te]) != 0 && (B[te] = P[se]++)
      var K = 0
      for (te = 0; te < z; ++te)
        if (((K = k[te]), K != 0)) {
          se = re[B[te]] >> (8 - K)
          for (var ie = (1 << (7 - K)) - 1; ie >= 0; --ie) Vo[se | (ie << K)] = (K & 7) | (te << 3)
        }
      var _e = []
      for (R = 1; _e.length < _ + v; )
        switch (((se = Vo[fe(x, w)]), (w += se & 7), (se >>>= 3))) {
          case 16:
            for (E = 3 + mt(x, w), w += 2, se = _e[_e.length - 1]; E-- > 0; ) _e.push(se)
            break
          case 17:
            for (E = 3 + Oe(x, w), w += 3; E-- > 0; ) _e.push(0)
            break
          case 18:
            for (E = 11 + fe(x, w), w += 7; E-- > 0; ) _e.push(0)
            break
          default:
            _e.push(se), R < se && (R = se)
            break
        }
      var Ze = _e.slice(0, _),
        Qe = _e.slice(_)
      for (te = _; te < 286; ++te) Ze[te] = 0
      for (te = v; te < 30; ++te) Qe[te] = 0
      return (Go = ci(Ze, Yo, 286)), (zo = ci(Qe, jo, 30)), w
    }
    function h1(x, w) {
      if (x[0] == 3 && !(x[1] & 3)) return [Tn(w), 2]
      for (
        var _ = 0, v = 0, T = bf(w || 1 << 18), E = 0, k = T.length >>> 0, B = 0, R = 0;
        (v & 1) == 0;

      ) {
        if (((v = Oe(x, _)), (_ += 3), v >>> 1 == 0)) {
          _ & 7 && (_ += 8 - (_ & 7))
          var N = x[_ >>> 3] | (x[(_ >>> 3) + 1] << 8)
          if (((_ += 32), N > 0))
            for (!w && k < E + N && ((T = Ns(T, E + N)), (k = T.length)); N-- > 0; )
              (T[E++] = x[_ >>> 3]), (_ += 8)
          continue
        } else v >> 1 == 1 ? ((B = 9), (R = 5)) : ((_ = u1(x, _)), (B = Go), (R = zo))
        for (;;) {
          !w && k < E + 32767 && ((T = Ns(T, E + 32767)), (k = T.length))
          var P = kt(x, _, B),
            z = v >>> 1 == 1 ? Ps[P] : Yo[P]
          if (((_ += z & 15), (z >>>= 4), ((z >>> 8) & 255) === 0)) T[E++] = z
          else {
            if (z == 256) break
            z -= 257
            var te = z < 8 ? 0 : (z - 4) >> 2
            te > 5 && (te = 0)
            var se = E + Y[z]
            te > 0 && ((se += kt(x, _, te)), (_ += te)),
              (P = kt(x, _, R)),
              (z = v >>> 1 == 1 ? Is[P] : jo[P]),
              (_ += z & 15),
              (z >>>= 4)
            var K = z < 4 ? 0 : (z - 2) >> 1,
              ie = ce[z]
            for (
              K > 0 && ((ie += kt(x, _, K)), (_ += K)),
                !w && k < se && ((T = Ns(T, se + 100)), (k = T.length));
              E < se;

            )
              (T[E] = T[E - ie]), ++E
          }
        }
      }
      return w ? [T, (_ + 7) >>> 3] : [T.slice(0, E), (_ + 7) >>> 3]
    }
    function Xo(x, w) {
      var _ = x.slice(x.l || 0),
        v = h1(_, w)
      return (x.l += v[1]), v[0]
    }
    function Ko(x, w) {
      if (x) typeof console < 'u' && console.error(w)
      else throw new Error(w)
    }
    function qo(x, w) {
      var _ = x
      Yt(_, 0)
      var v = [],
        T = [],
        E = {
          FileIndex: v,
          FullPaths: T
        }
      C(E, { root: w.root })
      for (
        var k = _.length - 4;
        (_[k] != 80 || _[k + 1] != 75 || _[k + 2] != 5 || _[k + 3] != 6) && k >= 0;

      )
        --k
      ;(_.l = k + 4), (_.l += 4)
      var B = _.read_shift(2)
      _.l += 6
      var R = _.read_shift(4)
      for (_.l = R, k = 0; k < B; ++k) {
        _.l += 20
        var N = _.read_shift(4),
          P = _.read_shift(4),
          z = _.read_shift(2),
          te = _.read_shift(2),
          se = _.read_shift(2)
        _.l += 8
        var K = _.read_shift(4),
          ie = o(_.slice(_.l + z, _.l + z + te))
        _.l += z + te + se
        var _e = _.l
        ;(_.l = K + 4), d1(_, N, P, E, ie), (_.l = _e)
      }
      return E
    }
    function d1(x, w, _, v, T) {
      x.l += 2
      var E = x.read_shift(2),
        k = x.read_shift(2),
        B = s(x)
      if (E & 8257) throw new Error('Unsupported ZIP encryption')
      for (
        var R = x.read_shift(4),
          N = x.read_shift(4),
          P = x.read_shift(4),
          z = x.read_shift(2),
          te = x.read_shift(2),
          se = '',
          K = 0;
        K < z;
        ++K
      )
        se += String.fromCharCode(x[x.l++])
      if (te) {
        var ie = o(x.slice(x.l, x.l + te))
        ;(ie[21589] || {}).mt && (B = ie[21589].mt),
          ((T || {})[21589] || {}).mt && (B = T[21589].mt)
      }
      x.l += te
      var _e = x.slice(x.l, x.l + N)
      switch (k) {
        case 8:
          _e = I(x, P)
          break
        case 0:
          break
        default:
          throw new Error('Unsupported ZIP Compression method ' + k)
      }
      var Ze = !1
      E & 8 &&
        ((R = x.read_shift(4)),
        R == 134695760 && ((R = x.read_shift(4)), (Ze = !0)),
        (N = x.read_shift(4)),
        (P = x.read_shift(4))),
        N != w && Ko(Ze, 'Bad compressed size: ' + w + ' != ' + N),
        P != _ && Ko(Ze, 'Bad uncompressed size: ' + _ + ' != ' + P),
        Ms(v, se, _e, { unsafe: !0, mt: B })
    }
    function p1(x, w) {
      var _ = w || {},
        v = [],
        T = [],
        E = L(1),
        k = _.compression ? 8 : 0,
        B = 0,
        R = 0,
        N = 0,
        P = 0,
        z = 0,
        te = x.FullPaths[0],
        se = te,
        K = x.FileIndex[0],
        ie = [],
        _e = 0
      for (R = 1; R < x.FullPaths.length; ++R)
        if (
          ((se = x.FullPaths[R].slice(te.length)),
          (K = x.FileIndex[R]),
          !(!K.size || !K.content || se == 'Sh33tJ5'))
        ) {
          var Ze = P,
            Qe = L(se.length)
          for (N = 0; N < se.length; ++N) Qe.write_shift(1, se.charCodeAt(N) & 127)
          ;(Qe = Qe.slice(0, Qe.l)), (ie[z] = iT.buf(K.content, 0))
          var At = K.content
          k == 8 && (At = D(At)),
            (E = L(30)),
            E.write_shift(4, 67324752),
            E.write_shift(2, 20),
            E.write_shift(2, B),
            E.write_shift(2, k),
            K.mt ? i(E, K.mt) : E.write_shift(4, 0),
            E.write_shift(-4, ie[z]),
            E.write_shift(4, At.length),
            E.write_shift(4, K.content.length),
            E.write_shift(2, Qe.length),
            E.write_shift(2, 0),
            (P += E.length),
            v.push(E),
            (P += Qe.length),
            v.push(Qe),
            (P += At.length),
            v.push(At),
            (E = L(46)),
            E.write_shift(4, 33639248),
            E.write_shift(2, 0),
            E.write_shift(2, 20),
            E.write_shift(2, B),
            E.write_shift(2, k),
            E.write_shift(4, 0),
            E.write_shift(-4, ie[z]),
            E.write_shift(4, At.length),
            E.write_shift(4, K.content.length),
            E.write_shift(2, Qe.length),
            E.write_shift(2, 0),
            E.write_shift(2, 0),
            E.write_shift(2, 0),
            E.write_shift(2, 0),
            E.write_shift(4, 0),
            E.write_shift(4, Ze),
            (_e += E.l),
            T.push(E),
            (_e += Qe.length),
            T.push(Qe),
            ++z
        }
      return (
        (E = L(22)),
        E.write_shift(4, 101010256),
        E.write_shift(2, 0),
        E.write_shift(2, 0),
        E.write_shift(2, z),
        E.write_shift(2, z),
        E.write_shift(4, _e),
        E.write_shift(4, P),
        E.write_shift(2, 0),
        Tt([Tt(v), Tt(T), E])
      )
    }
    var ui = {
      htm: 'text/html',
      xml: 'text/xml',
      gif: 'image/gif',
      jpg: 'image/jpeg',
      png: 'image/png',
      mso: 'application/x-mso',
      thmx: 'application/vnd.ms-officetheme',
      sh33tj5: 'application/octet-stream'
    }
    function x1(x, w) {
      if (x.ctype) return x.ctype
      var _ = x.name || '',
        v = _.match(/\.([^\.]+)$/)
      return (v && ui[v[1]]) || (w && ((v = (_ = w).match(/[\.\\]([^\.\\])+$/)), v && ui[v[1]]))
        ? ui[v[1]]
        : 'application/octet-stream'
    }
    function m1(x) {
      for (var w = $a(x), _ = [], v = 0; v < w.length; v += 76) _.push(w.slice(v, v + 76))
      return (
        _.join(`\r
`) +
        `\r
`
      )
    }
    function _1(x) {
      var w = x.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function (N) {
        var P = N.charCodeAt(0).toString(16).toUpperCase()
        return '=' + (P.length == 1 ? '0' + P : P)
      })
      ;(w = w.replace(/ $/gm, '=20').replace(/\t$/gm, '=09')),
        w.charAt(0) ==
          `
` && (w = '=0D' + w.slice(1)),
        (w = w
          .replace(/\r(?!\n)/gm, '=0D')
          .replace(
            /\n\n/gm,
            `
=0A`
          )
          .replace(/([^\r\n])\n/gm, '$1=0A'))
      for (
        var _ = [],
          v = w.split(`\r
`),
          T = 0;
        T < v.length;
        ++T
      ) {
        var E = v[T]
        if (E.length == 0) {
          _.push('')
          continue
        }
        for (var k = 0; k < E.length; ) {
          var B = 76,
            R = E.slice(k, k + B)
          R.charAt(B - 1) == '='
            ? B--
            : R.charAt(B - 2) == '='
            ? (B -= 2)
            : R.charAt(B - 3) == '=' && (B -= 3),
            (R = E.slice(k, k + B)),
            (k += B),
            k < E.length && (R += '='),
            _.push(R)
        }
      }
      return _.join(`\r
`)
    }
    function g1(x) {
      for (var w = [], _ = 0; _ < x.length; ++_) {
        for (var v = x[_]; _ <= x.length && v.charAt(v.length - 1) == '='; )
          v = v.slice(0, v.length - 1) + x[++_]
        w.push(v)
      }
      for (var T = 0; T < w.length; ++T)
        w[T] = w[T].replace(/[=][0-9A-Fa-f]{2}/g, function (E) {
          return String.fromCharCode(parseInt(E.slice(1), 16))
        })
      return ir(
        w.join(`\r
`)
      )
    }
    function v1(x, w, _) {
      for (var v = '', T = '', E = '', k, B = 0; B < 10; ++B) {
        var R = w[B]
        if (!R || R.match(/^\s*$/)) break
        var N = R.match(/^(.*?):\s*([^\s].*)$/)
        if (N)
          switch (N[1].toLowerCase()) {
            case 'content-location':
              v = N[2].trim()
              break
            case 'content-type':
              E = N[2].trim()
              break
            case 'content-transfer-encoding':
              T = N[2].trim()
              break
          }
      }
      switch ((++B, T.toLowerCase())) {
        case 'base64':
          k = ir(Lr(w.slice(B).join('')))
          break
        case 'quoted-printable':
          k = g1(w.slice(B))
          break
        default:
          throw new Error('Unsupported Content-Transfer-Encoding ' + T)
      }
      var P = Ms(x, v.slice(_.length), k, { unsafe: !0 })
      E && (P.ctype = E)
    }
    function w1(x, w) {
      if (Se(x.slice(0, 13)).toLowerCase() != 'mime-version:')
        throw new Error('Unsupported MAD header')
      var _ = (w && w.root) || '',
        v = (ke && Buffer.isBuffer(x) ? x.toString('binary') : Se(x)).split(`\r
`),
        T = 0,
        E = ''
      for (T = 0; T < v.length; ++T)
        if (
          ((E = v[T]),
          !!/^Content-Location:/i.test(E) &&
            ((E = E.slice(E.indexOf('file'))),
            _ || (_ = E.slice(0, E.lastIndexOf('/') + 1)),
            E.slice(0, _.length) != _))
        )
          for (
            ;
            _.length > 0 &&
            ((_ = _.slice(0, _.length - 1)),
            (_ = _.slice(0, _.lastIndexOf('/') + 1)),
            E.slice(0, _.length) != _);

          );
      var k = (v[1] || '').match(/boundary="(.*?)"/)
      if (!k) throw new Error('MAD cannot find boundary')
      var B = '--' + (k[1] || ''),
        R = [],
        N = [],
        P = {
          FileIndex: R,
          FullPaths: N
        }
      C(P)
      var z,
        te = 0
      for (T = 0; T < v.length; ++T) {
        var se = v[T]
        ;(se !== B && se !== B + '--') || (te++ && v1(P, v.slice(z, T), _), (z = T))
      }
      return P
    }
    function T1(x, w) {
      var _ = w || {},
        v = _.boundary || 'SheetJS'
      v = '------=' + v
      for (
        var T = [
            'MIME-Version: 1.0',
            'Content-Type: multipart/related; boundary="' + v.slice(2) + '"',
            '',
            '',
            ''
          ],
          E = x.FullPaths[0],
          k = E,
          B = x.FileIndex[0],
          R = 1;
        R < x.FullPaths.length;
        ++R
      )
        if (
          ((k = x.FullPaths[R].slice(E.length)),
          (B = x.FileIndex[R]),
          !(!B.size || !B.content || k == 'Sh33tJ5'))
        ) {
          k = k
            .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function (_e) {
              return '_x' + _e.charCodeAt(0).toString(16) + '_'
            })
            .replace(/[\u0080-\uFFFF]/g, function (_e) {
              return '_u' + _e.charCodeAt(0).toString(16) + '_'
            })
          for (
            var N = B.content,
              P = ke && Buffer.isBuffer(N) ? N.toString('binary') : Se(N),
              z = 0,
              te = Math.min(1024, P.length),
              se = 0,
              K = 0;
            K <= te;
            ++K
          )
            (se = P.charCodeAt(K)) >= 32 && se < 128 && ++z
          var ie = z >= (te * 4) / 5
          T.push(v),
            T.push('Content-Location: ' + (_.root || 'file:///C:/SheetJS/') + k),
            T.push('Content-Transfer-Encoding: ' + (ie ? 'quoted-printable' : 'base64')),
            T.push('Content-Type: ' + x1(B, k)),
            T.push(''),
            T.push(ie ? _1(P) : m1(P))
        }
      return (
        T.push(
          v +
            `--\r
`
        ),
        T.join(`\r
`)
      )
    }
    function E1(x) {
      var w = {}
      return C(w, x), w
    }
    function Ms(x, w, _, v) {
      var T = v && v.unsafe
      T || C(x)
      var E = !T && Be.find(x, w)
      if (!E) {
        var k = x.FullPaths[0]
        w.slice(0, k.length) == k
          ? (k = w)
          : (k.slice(-1) != '/' && (k += '/'), (k = (k + w).replace('//', '/'))),
          (E = { name: a(w), type: 2 }),
          x.FileIndex.push(E),
          x.FullPaths.push(k),
          T || Be.utils.cfb_gc(x)
      }
      return (
        (E.content = _),
        (E.size = _ ? _.length : 0),
        v && (v.CLSID && (E.clsid = v.CLSID), v.mt && (E.mt = v.mt), v.ct && (E.ct = v.ct)),
        E
      )
    }
    function S1(x, w) {
      C(x)
      var _ = Be.find(x, w)
      if (_) {
        for (var v = 0; v < x.FileIndex.length; ++v)
          if (x.FileIndex[v] == _) return x.FileIndex.splice(v, 1), x.FullPaths.splice(v, 1), !0
      }
      return !1
    }
    function y1(x, w, _) {
      C(x)
      var v = Be.find(x, w)
      if (v) {
        for (var T = 0; T < x.FileIndex.length; ++T)
          if (x.FileIndex[T] == v) return (x.FileIndex[T].name = a(_)), (x.FullPaths[T] = _), !0
      }
      return !1
    }
    function A1(x) {
      M(x, !0)
    }
    return (
      (t.find = V),
      (t.read = ae),
      (t.parse = c),
      (t.write = ot),
      (t.writeFile = Ee),
      (t.utils = {
        cfb_new: E1,
        cfb_add: Ms,
        cfb_del: S1,
        cfb_mov: y1,
        cfb_gc: A1,
        ReadShift: ka,
        CheckField: Wu,
        prep_blob: Yt,
        bconcat: Tt,
        use_zlib: S,
        _deflateRaw: $o,
        _inflateRaw: Xo,
        consts: ee
      }),
      t
    )
  })()
function sT(e) {
  return typeof e == 'string' ? Ts(e) : Array.isArray(e) ? Nw(e) : e
}
function ni(e, t, r) {
  if (typeof Deno < 'u') {
    if (r && typeof t == 'string')
      switch (r) {
        case 'utf8':
          t = new TextEncoder(r).encode(t)
          break
        case 'binary':
          t = Ts(t)
          break
        default:
          throw new Error('Unsupported encoding ' + r)
      }
    return Deno.writeFileSync(e, t)
  }
  var n = r == 'utf8' ? Rr(t) : t
  if (typeof IE_SaveFile < 'u') return IE_SaveFile(n, e)
  if (typeof Blob < 'u') {
    var a = new Blob([sT(n)], { type: 'application/octet-stream' })
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
        Array.isArray(t) && (t = ti(t)),
        o.write(t),
        o.close(),
        t
      )
    } catch (l) {
      if (!l.message || !l.message.match(/onstruct/)) throw l
    }
  throw new Error('cannot save file ' + e)
}
function yt(e) {
  for (var t = Object.keys(e), r = [], n = 0; n < t.length; ++n)
    Object.prototype.hasOwnProperty.call(e, t[n]) && r.push(t[n])
  return r
}
function jf(e, t) {
  for (var r = [], n = yt(e), a = 0; a !== n.length; ++a)
    r[e[n[a]][t]] == null && (r[e[n[a]][t]] = n[a])
  return r
}
function xo(e) {
  for (var t = [], r = yt(e), n = 0; n !== r.length; ++n) t[e[r[n]]] = r[n]
  return t
}
function Ss(e) {
  for (var t = [], r = yt(e), n = 0; n !== r.length; ++n) t[e[r[n]]] = parseInt(r[n], 10)
  return t
}
function oT(e) {
  for (var t = [], r = yt(e), n = 0; n !== r.length; ++n)
    t[e[r[n]]] == null && (t[e[r[n]]] = []), t[e[r[n]]].push(r[n])
  return t
}
var Gi = /* @__PURE__ */ new Date(1899, 11, 30, 0, 0, 0)
function Ut(e, t) {
  var r = /* @__PURE__ */ e.getTime()
  t && (r -= 1462 * 24 * 60 * 60 * 1e3)
  var n =
    /* @__PURE__ */ Gi.getTime() +
    /* @__PURE__ */ (e.getTimezoneOffset() - /* @__PURE__ */ Gi.getTimezoneOffset()) * 6e4
  return (r - n) / (24 * 60 * 60 * 1e3)
}
var Su = /* @__PURE__ */ new Date(),
  fT =
    /* @__PURE__ */ Gi.getTime() +
    /* @__PURE__ */ (Su.getTimezoneOffset() - /* @__PURE__ */ Gi.getTimezoneOffset()) * 6e4,
  Vf = /* @__PURE__ */ Su.getTimezoneOffset()
function yu(e) {
  var t = new Date()
  return (
    t.setTime(e * 24 * 60 * 60 * 1e3 + fT),
    t.getTimezoneOffset() !== Vf && t.setTime(t.getTime() + (t.getTimezoneOffset() - Vf) * 6e4),
    t
  )
}
var Gf = /* @__PURE__ */ new Date('2017-02-19T19:06:09.000Z'),
  Au = /* @__PURE__ */ isNaN(/* @__PURE__ */ Gf.getFullYear())
    ? /* @__PURE__ */ new Date('2/19/17')
    : Gf,
  lT = /* @__PURE__ */ Au.getFullYear() == 2017
function Mt(e, t) {
  var r = new Date(e)
  if (lT)
    return (
      t > 0
        ? r.setTime(r.getTime() + r.getTimezoneOffset() * 60 * 1e3)
        : t < 0 && r.setTime(r.getTime() - r.getTimezoneOffset() * 60 * 1e3),
      r
    )
  if (e instanceof Date) return e
  if (Au.getFullYear() == 1917 && !isNaN(r.getFullYear())) {
    var n = r.getFullYear()
    return e.indexOf('' + n) > -1 || r.setFullYear(r.getFullYear() + 100), r
  }
  var a = e.match(/\d+/g) || ['2017', '2', '19', '0', '0', '0'],
    i = new Date(+a[0], +a[1] - 1, +a[2], +a[3] || 0, +a[4] || 0, +a[5] || 0)
  return e.indexOf('Z') > -1 && (i = new Date(i.getTime() - i.getTimezoneOffset() * 60 * 1e3)), i
}
function ys(e, t) {
  if (ke && Buffer.isBuffer(e)) {
    if (t) {
      if (e[0] == 255 && e[1] == 254) return Rr(e.slice(2).toString('utf16le'))
      if (e[1] == 254 && e[2] == 255) return Rr(kw(e.slice(2).toString('binary')))
    }
    return e.toString('binary')
  }
  if (typeof TextDecoder < 'u')
    try {
      if (t) {
        if (e[0] == 255 && e[1] == 254) return Rr(new TextDecoder('utf-16le').decode(e.slice(2)))
        if (e[0] == 254 && e[1] == 255) return Rr(new TextDecoder('utf-16be').decode(e.slice(2)))
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
        new TextDecoder('latin1').decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function (i) {
          return r[i] || i
        })
      )
    } catch {}
  for (var n = [], a = 0; a != e.length; ++a) n.push(String.fromCharCode(e[a]))
  return n.join('')
}
function Wt(e) {
  if (typeof JSON < 'u' && !Array.isArray(e)) return JSON.parse(JSON.stringify(e))
  if (typeof e != 'object' || e == null) return e
  if (e instanceof Date) return new Date(e.getTime())
  var t = {}
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = Wt(e[r]))
  return t
}
function et(e, t) {
  for (var r = ''; r.length < t; ) r += e
  return r
}
function Pr(e) {
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
var cT = [
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
function Ya(e) {
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
      s.length > 3 && cT.indexOf(s) == -1)
    )
      return r
  } else if (s.match(/[a-z]/)) return r
  return n < 0 || n > 8099 ? r : (a > 0 || i > 1) && n != 101 ? t : e.match(/[^-0-9:,\/\\]/) ? r : t
}
function ve(e, t, r) {
  if (e.FullPaths) {
    if (typeof r == 'string') {
      var n
      return ke ? (n = Yr(r)) : (n = Pw(r)), Be.utils.cfb_add(e, t, n)
    }
    Be.utils.cfb_add(e, t, r)
  } else e.file(t, r)
}
function mo() {
  return Be.utils.cfb_new()
}
var it = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`,
  uT = {
    '&quot;': '"',
    '&apos;': "'",
    '&gt;': '>',
    '&lt;': '<',
    '&amp;': '&'
  },
  _o = /* @__PURE__ */ xo(uT),
  go = /[&<>'"]/g,
  hT = /[\u0000-\u0008\u000b-\u001f]/g
function be(e) {
  var t = e + ''
  return t
    .replace(go, function (r) {
      return _o[r]
    })
    .replace(hT, function (r) {
      return '_x' + ('000' + r.charCodeAt(0).toString(16)).slice(-4) + '_'
    })
}
function zf(e) {
  return be(e).replace(/ /g, '_x0020_')
}
var Ou = /[\u0000-\u001f]/g
function dT(e) {
  var t = e + ''
  return t
    .replace(go, function (r) {
      return _o[r]
    })
    .replace(/\n/g, '<br/>')
    .replace(Ou, function (r) {
      return '&#x' + ('000' + r.charCodeAt(0).toString(16)).slice(-4) + ';'
    })
}
function pT(e) {
  var t = e + ''
  return t
    .replace(go, function (r) {
      return _o[r]
    })
    .replace(Ou, function (r) {
      return '&#x' + r.charCodeAt(0).toString(16).toUpperCase() + ';'
    })
}
function xT(e) {
  return e.replace(/(\r\n|[\r\n])/g, '&#10;')
}
function mT(e) {
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
function Gs(e) {
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
function Xf(e) {
  var t = Tn(2 * e.length),
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
function Kf(e) {
  return Yr(e, 'binary').toString('utf8')
}
var Ei = 'foo bar baz\xE2\x98\x83\xF0\x9F\x8D\xA3',
  Ra =
    (ke &&
      /* @__PURE__ */ ((Kf(Ei) == /* @__PURE__ */ Gs(Ei) && Kf) ||
        /* @__PURE__ */ (Xf(Ei) == /* @__PURE__ */ Gs(Ei) && Xf))) ||
    Gs,
  Rr = ke
    ? function (e) {
        return Yr(e, 'utf8').toString('binary')
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
  _T = /* @__PURE__ */ (function () {
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
  Fu = /(^\s|\s$|\n)/
function Et(e, t) {
  return '<' + e + (t.match(Fu) ? ' xml:space="preserve"' : '') + '>' + t + '</' + e + '>'
}
function ja(e) {
  return yt(e)
    .map(function (t) {
      return ' ' + t + '="' + e[t] + '"'
    })
    .join('')
}
function Z(e, t, r) {
  return (
    '<' +
    e +
    (r != null ? ja(r) : '') +
    (t != null ? (t.match(Fu) ? ' xml:space="preserve"' : '') + '>' + t + '</' + e : '/') +
    '>'
  )
}
function E0(e, t) {
  try {
    return e.toISOString().replace(/\.\d*/, '')
  } catch (r) {
    if (t) throw r
  }
  return ''
}
function gT(e, t) {
  switch (typeof e) {
    case 'string':
      var r = Z('vt:lpwstr', be(e))
      return t && (r = r.replace(/&quot;/g, '_x0022_')), r
    case 'number':
      return Z((e | 0) == e ? 'vt:i4' : 'vt:r8', be(String(e)))
    case 'boolean':
      return Z('vt:bool', e ? 'true' : 'false')
  }
  if (e instanceof Date) return Z('vt:filetime', E0(e))
  throw new Error('Unable to serialize ' + e)
}
var dt = {
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
  aa = [
    'http://schemas.openxmlformats.org/spreadsheetml/2006/main',
    'http://purl.oclc.org/ooxml/spreadsheetml/main',
    'http://schemas.microsoft.com/office/excel/2006/main',
    'http://schemas.microsoft.com/office/excel/2006/2'
  ],
  Vt = {
    o: 'urn:schemas-microsoft-com:office:office',
    x: 'urn:schemas-microsoft-com:office:excel',
    ss: 'urn:schemas-microsoft-com:office:spreadsheet',
    dt: 'uuid:C2F41010-65B3-11d1-A29F-00AA00C14882',
    mv: 'http://macVmlSchemaUri',
    v: 'urn:schemas-microsoft-com:vml',
    html: 'http://www.w3.org/TR/REC-html40'
  }
function vT(e, t) {
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
function wT(e, t, r) {
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
var qf = function (e) {
    for (var t = [], r = 10240, n = 0; n < e[0].length; ++n)
      if (e[0][n])
        for (var a = 0, i = e[0][n].length; a < i; a += r) t.push.apply(t, e[0][n].slice(a, a + r))
    return t
  },
  Jf = ke
    ? function (e) {
        return e[0].length > 0 && Buffer.isBuffer(e[0][0])
          ? Buffer.concat(
              e[0].map(function (t) {
                return Buffer.isBuffer(t) ? t : Yr(t)
              })
            )
          : qf(e)
      }
    : qf,
  Zf = function (e, t, r) {
    for (var n = [], a = t; a < r; a += 2) n.push(String.fromCharCode(ya(e, a)))
    return n.join('').replace(Ca, '')
  },
  vo = ke
    ? function (e, t, r) {
        return Buffer.isBuffer(e) ? e.toString('utf16le', t, r).replace(Ca, '') : Zf(e, t, r)
      }
    : Zf,
  Qf = function (e, t, r) {
    for (var n = [], a = t; a < t + r; ++a) n.push(('0' + e[a].toString(16)).slice(-2))
    return n.join('')
  },
  Du = ke
    ? function (e, t, r) {
        return Buffer.isBuffer(e) ? e.toString('hex', t, t + r) : Qf(e, t, r)
      }
    : Qf,
  el = function (e, t, r) {
    for (var n = [], a = t; a < r; a++) n.push(String.fromCharCode(Un(e, a)))
    return n.join('')
  },
  ai = ke
    ? function (t, r, n) {
        return Buffer.isBuffer(t) ? t.toString('utf8', r, n) : el(t, r, n)
      }
    : el,
  Cu = function (e, t) {
    var r = Gt(e, t)
    return r > 0 ? ai(e, t + 4, t + 4 + r - 1) : ''
  },
  Ru = Cu,
  ku = function (e, t) {
    var r = Gt(e, t)
    return r > 0 ? ai(e, t + 4, t + 4 + r - 1) : ''
  },
  Nu = ku,
  Pu = function (e, t) {
    var r = 2 * Gt(e, t)
    return r > 0 ? ai(e, t + 4, t + 4 + r - 1) : ''
  },
  Iu = Pu,
  Mu = function (t, r) {
    var n = Gt(t, r)
    return n > 0 ? vo(t, r + 4, r + 4 + n) : ''
  },
  bu = Mu,
  Lu = function (e, t) {
    var r = Gt(e, t)
    return r > 0 ? ai(e, t + 4, t + 4 + r) : ''
  },
  Bu = Lu,
  Uu = function (e, t) {
    return vT(e, t)
  },
  zi = Uu,
  wo = function (t) {
    return Array.isArray(t) || (typeof Uint8Array < 'u' && t instanceof Uint8Array)
  }
ke &&
  ((Ru = function (t, r) {
    if (!Buffer.isBuffer(t)) return Cu(t, r)
    var n = t.readUInt32LE(r)
    return n > 0 ? t.toString('utf8', r + 4, r + 4 + n - 1) : ''
  }),
  (Nu = function (t, r) {
    if (!Buffer.isBuffer(t)) return ku(t, r)
    var n = t.readUInt32LE(r)
    return n > 0 ? t.toString('utf8', r + 4, r + 4 + n - 1) : ''
  }),
  (Iu = function (t, r) {
    if (!Buffer.isBuffer(t)) return Pu(t, r)
    var n = 2 * t.readUInt32LE(r)
    return t.toString('utf16le', r + 4, r + 4 + n - 1)
  }),
  (bu = function (t, r) {
    if (!Buffer.isBuffer(t)) return Mu(t, r)
    var n = t.readUInt32LE(r)
    return t.toString('utf16le', r + 4, r + 4 + n)
  }),
  (Bu = function (t, r) {
    if (!Buffer.isBuffer(t)) return Lu(t, r)
    var n = t.readUInt32LE(r)
    return t.toString('utf8', r + 4, r + 4 + n)
  }),
  (zi = function (t, r) {
    return Buffer.isBuffer(t) ? t.readDoubleLE(r) : Uu(t, r)
  }),
  (wo = function (t) {
    return (
      Buffer.isBuffer(t) || Array.isArray(t) || (typeof Uint8Array < 'u' && t instanceof Uint8Array)
    )
  }))
var Un = function (e, t) {
    return e[t]
  },
  ya = function (e, t) {
    return e[t + 1] * (1 << 8) + e[t]
  },
  TT = function (e, t) {
    var r = e[t + 1] * 256 + e[t]
    return r < 32768 ? r : (65535 - r + 1) * -1
  },
  Gt = function (e, t) {
    return e[t + 3] * (1 << 24) + (e[t + 2] << 16) + (e[t + 1] << 8) + e[t]
  },
  xn = function (e, t) {
    return (e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t]
  },
  ET = function (e, t) {
    return (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]
  }
function ka(e, t) {
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
      else for (l = 0; l < e; ++l) (r += String.fromCharCode(ya(this, f))), (f += 2)
      e *= 2
      break
    case 'utf8':
      r = ai(this, this.l, this.l + e)
      break
    case 'utf16le':
      ;(e *= 2), (r = vo(this, this.l, this.l + e))
      break
    case 'wstr':
      return ka.call(this, e, 'dbcs')
    case 'lpstr-ansi':
      ;(r = Ru(this, this.l)), (e = 4 + Gt(this, this.l))
      break
    case 'lpstr-cp':
      ;(r = Nu(this, this.l)), (e = 4 + Gt(this, this.l))
      break
    case 'lpwstr':
      ;(r = Iu(this, this.l)), (e = 4 + 2 * Gt(this, this.l))
      break
    case 'lpp4':
      ;(e = 4 + Gt(this, this.l)), (r = bu(this, this.l)), e & 2 && (e += 2)
      break
    case '8lpp4':
      ;(e = 4 + Gt(this, this.l)), (r = Bu(this, this.l)), e & 3 && (e += 4 - (e & 3))
      break
    case 'cstr':
      for (e = 0, r = ''; (s = Un(this, this.l + e++)) !== 0; ) i.push(wi(s))
      r = i.join('')
      break
    case '_wstr':
      for (e = 0, r = ''; (s = ya(this, this.l + e)) !== 0; ) i.push(wi(s)), (e += 2)
      ;(e += 2), (r = i.join(''))
      break
    case 'dbcs-cont':
      for (r = '', f = this.l, l = 0; l < e; ++l) {
        if (this.lens && this.lens.indexOf(f) !== -1)
          return (
            (s = Un(this, f)),
            (this.l = f + 1),
            (o = ka.call(this, e - l, s ? 'dbcs-cont' : 'sbcs-cont')),
            i.join('') + o
          )
        i.push(wi(ya(this, f))), (f += 2)
      }
      ;(r = i.join('')), (e *= 2)
      break
    case 'cpstr':
    case 'sbcs-cont':
      for (r = '', f = this.l, l = 0; l != e; ++l) {
        if (this.lens && this.lens.indexOf(f) !== -1)
          return (
            (s = Un(this, f)),
            (this.l = f + 1),
            (o = ka.call(this, e - l, s ? 'dbcs-cont' : 'sbcs-cont')),
            i.join('') + o
          )
        i.push(wi(Un(this, f))), (f += 1)
      }
      r = i.join('')
      break
    default:
      switch (e) {
        case 1:
          return (n = Un(this, this.l)), this.l++, n
        case 2:
          return (n = (t === 'i' ? TT : ya)(this, this.l)), (this.l += 2), n
        case 4:
        case -4:
          return t === 'i' || (this[this.l + 3] & 128) === 0
            ? ((n = (e > 0 ? xn : ET)(this, this.l)), (this.l += 4), n)
            : ((a = Gt(this, this.l)), (this.l += 4), a)
        case 8:
        case -8:
          if (t === 'f')
            return (
              e == 8
                ? (a = zi(this, this.l))
                : (a = zi(
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
          r = Du(this, this.l, e)
          break
      }
  }
  return (this.l += e), r
}
var ST = function (e, t, r) {
    ;(e[r] = t & 255),
      (e[r + 1] = (t >>> 8) & 255),
      (e[r + 2] = (t >>> 16) & 255),
      (e[r + 3] = (t >>> 24) & 255)
  },
  yT = function (e, t, r) {
    ;(e[r] = t & 255),
      (e[r + 1] = (t >> 8) & 255),
      (e[r + 2] = (t >> 16) & 255),
      (e[r + 3] = (t >> 24) & 255)
  },
  AT = function (e, t, r) {
    ;(e[r] = t & 255), (e[r + 1] = (t >>> 8) & 255)
  }
function OT(e, t, r) {
  var n = 0,
    a = 0
  if (r === 'dbcs') {
    for (a = 0; a != t.length; ++a) AT(this, t.charCodeAt(a), this.l + 2 * a)
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
        ;(n = 4), ST(this, t, this.l)
        break
      case 8:
        if (((n = 8), r === 'f')) {
          wT(this, t, this.l)
          break
        }
      case 16:
        break
      case -4:
        ;(n = 4), yT(this, t, this.l)
        break
    }
  return (this.l += n), this
}
function Wu(e, t) {
  var r = Du(this, this.l, e.length >> 1)
  if (r !== e) throw new Error(t + 'Expected ' + e + ' saw ' + r)
  this.l += e.length >> 1
}
function Yt(e, t) {
  ;(e.l = t), (e.read_shift = ka), (e.chk = Wu), (e.write_shift = OT)
}
function vr(e, t) {
  e.l += t
}
function L(e) {
  var t = Tn(e)
  return Yt(t, 0), t
}
function Bt() {
  var e = [],
    t = ke ? 256 : 2048,
    r = function (f) {
      var c = L(f)
      return Yt(c, 0), c
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
      return a(), Tt(e)
    },
    o = function (f) {
      a(), (n = f), n.l == null && (n.l = n.length), i(t)
    }
  return { next: i, push: o, end: s, _bufs: e }
}
function H(e, t, r, n) {
  var a = +t,
    i
  if (!isNaN(a)) {
    n || (n = v3[a].p || (r || []).length || 0),
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
    n > 0 && wo(r) && e.push(r)
  }
}
function Na(e, t, r) {
  var n = Wt(e)
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
function tl(e, t, r) {
  var n = Wt(e)
  return (n.s = Na(n.s, t.s, r)), (n.e = Na(n.e, t.s, r)), n
}
function Pa(e, t) {
  if (e.cRel && e.c < 0) for (e = Wt(e); e.c < 0; ) e.c += t > 8 ? 16384 : 256
  if (e.rRel && e.r < 0) for (e = Wt(e); e.r < 0; ) e.r += t > 8 ? 1048576 : t > 5 ? 65536 : 16384
  var r = Le(e)
  return !e.cRel && e.cRel != null && (r = CT(r)), !e.rRel && e.rRel != null && (r = FT(r)), r
}
function zs(e, t) {
  return e.s.r == 0 &&
    !e.s.rRel &&
    e.e.r == (t.biff >= 12 ? 1048575 : t.biff >= 8 ? 65536 : 16384) &&
    !e.e.rRel
    ? (e.s.cRel ? '' : '$') + Ft(e.s.c) + ':' + (e.e.cRel ? '' : '$') + Ft(e.e.c)
    : e.s.c == 0 && !e.s.cRel && e.e.c == (t.biff >= 12 ? 16383 : 255) && !e.e.cRel
    ? (e.s.rRel ? '' : '$') + St(e.s.r) + ':' + (e.e.rRel ? '' : '$') + St(e.e.r)
    : Pa(e.s, t.biff) + ':' + Pa(e.e, t.biff)
}
function To(e) {
  return parseInt(DT(e), 10) - 1
}
function St(e) {
  return '' + (e + 1)
}
function FT(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, '$1$$$2')
}
function DT(e) {
  return e.replace(/\$(\d+)$/, '$1')
}
function Eo(e) {
  for (var t = RT(e), r = 0, n = 0; n !== t.length; ++n) r = 26 * r + t.charCodeAt(n) - 64
  return r - 1
}
function Ft(e) {
  if (e < 0) throw new Error('invalid column ' + e)
  var t = ''
  for (++e; e; e = Math.floor((e - 1) / 26)) t = String.fromCharCode(((e - 1) % 26) + 65) + t
  return t
}
function CT(e) {
  return e.replace(/^([A-Z])/, '$$$1')
}
function RT(e) {
  return e.replace(/^\$([A-Z])/, '$1')
}
function kT(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, '$1,$2').split(',')
}
function pt(e) {
  for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
    var a = e.charCodeAt(n)
    a >= 48 && a <= 57 ? (t = 10 * t + (a - 48)) : a >= 65 && a <= 90 && (r = 26 * r + (a - 64))
  }
  return { c: r - 1, r: t - 1 }
}
function Le(e) {
  for (var t = e.c + 1, r = ''; t; t = ((t - 1) / 26) | 0)
    r = String.fromCharCode(((t - 1) % 26) + 65) + r
  return r + (e.r + 1)
}
function zt(e) {
  var t = e.indexOf(':')
  return t == -1 ? { s: pt(e), e: pt(e) } : { s: pt(e.slice(0, t)), e: pt(e.slice(t + 1)) }
}
function at(e, t) {
  return typeof t > 'u' || typeof t == 'number'
    ? at(e.s, e.e)
    : (typeof e != 'string' && (e = Le(e)),
      typeof t != 'string' && (t = Le(t)),
      e == t ? e : e + ':' + t)
}
function Ge(e) {
  var t = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } },
    r = 0,
    n = 0,
    a = 0,
    i = e.length
  for (r = 0; n < i && !((a = e.charCodeAt(n) - 64) < 1 || a > 26); ++n) r = 26 * r + a
  for (t.s.c = --r, r = 0; n < i && !((a = e.charCodeAt(n) - 48) < 0 || a > 9); ++n) r = 10 * r + a
  if (((t.s.r = --r), n === i || a != 10)) return (t.e.c = t.s.c), (t.e.r = t.s.r), t
  for (++n, r = 0; n != i && !((a = e.charCodeAt(n) - 64) < 1 || a > 26); ++n) r = 26 * r + a
  for (t.e.c = --r, r = 0; n != i && !((a = e.charCodeAt(n) - 48) < 0 || a > 9); ++n) r = 10 * r + a
  return (t.e.r = --r), t
}
function rl(e, t) {
  var r = e.t == 'd' && t instanceof Date
  if (e.z != null)
    try {
      return (e.w = Br(e.z, r ? Ut(t) : t))
    } catch {}
  try {
    return (e.w = Br((e.XF || {}).numFmtId || (r ? 14 : 0), r ? Ut(t) : t))
  } catch {
    return '' + t
  }
}
function Ur(e, t, r) {
  return e == null || e.t == null || e.t == 'z'
    ? ''
    : e.w !== void 0
    ? e.w
    : (e.t == 'd' && !e.z && r && r.dateNF && (e.z = r.dateNF),
      e.t == 'e' ? ii[e.v] || e.v : t == null ? rl(e, e.v) : rl(e, t))
}
function Fn(e, t) {
  var r = t && t.sheet ? t.sheet : 'Sheet1',
    n = {}
  return (n[r] = e), { SheetNames: [r], Sheets: n }
}
function Hu(e, t, r) {
  var n = r || {},
    a = e ? Array.isArray(e) : n.dense,
    i = e || (a ? [] : {}),
    s = 0,
    o = 0
  if (i && n.origin != null) {
    if (typeof n.origin == 'number') s = n.origin
    else {
      var l = typeof n.origin == 'string' ? pt(n.origin) : n.origin
      ;(s = l.r), (o = l.c)
    }
    i['!ref'] || (i['!ref'] = 'A1:A1')
  }
  var f = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } }
  if (i['!ref']) {
    var c = Ge(i['!ref'])
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
              ? ((p.z = n.dateNF || Je[14]),
                n.cellDates
                  ? ((p.t = 'd'), (p.w = Br(p.z, Ut(p.v))))
                  : ((p.t = 'n'), (p.v = Ut(p.v)), (p.w = Br(p.z, p.v))))
              : (p.t = 's')
          if (a) i[m] || (i[m] = []), i[m][d] && i[m][d].z && (p.z = i[m][d].z), (i[m][d] = p)
          else {
            var g = Le({ c: d, r: m })
            i[g] && i[g].z && (p.z = i[g].z), (i[g] = p)
          }
        }
    }
  return f.s.c < 1e7 && (i['!ref'] = at(f)), i
}
function ia(e, t) {
  return Hu(null, e, t)
}
function NT(e) {
  return e.read_shift(4, 'i')
}
function fr(e, t) {
  return t || (t = L(4)), t.write_shift(4, e), t
}
function Dt(e) {
  var t = e.read_shift(4)
  return t === 0 ? '' : e.read_shift(t, 'dbcs')
}
function xt(e, t) {
  var r = !1
  return (
    t == null && ((r = !0), (t = L(4 + 2 * e.length))),
    t.write_shift(4, e.length),
    e.length > 0 && t.write_shift(0, e, 'dbcs'),
    r ? t.slice(0, t.l) : t
  )
}
function PT(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) }
}
function IT(e, t) {
  return t || (t = L(4)), t.write_shift(2, e.ich || 0), t.write_shift(2, e.ifnt || 0), t
}
function So(e, t) {
  var r = e.l,
    n = e.read_shift(1),
    a = Dt(e),
    i = [],
    s = { t: a, h: a }
  if ((n & 1) !== 0) {
    for (var o = e.read_shift(4), l = 0; l != o; ++l) i.push(PT(e))
    s.r = i
  } else s.r = [{ ich: 0, ifnt: 0 }]
  return (e.l = r + t), s
}
function MT(e, t) {
  var r = !1
  return (
    t == null && ((r = !0), (t = L(15 + 4 * e.t.length))),
    t.write_shift(1, 0),
    xt(e.t, t),
    r ? t.slice(0, t.l) : t
  )
}
var bT = So
function LT(e, t) {
  var r = !1
  return (
    t == null && ((r = !0), (t = L(23 + 4 * e.t.length))),
    t.write_shift(1, 1),
    xt(e.t, t),
    t.write_shift(4, 1),
    IT({ ich: 0, ifnt: 0 }, t),
    r ? t.slice(0, t.l) : t
  )
}
function rr(e) {
  var t = e.read_shift(4),
    r = e.read_shift(2)
  return (r += e.read_shift(1) << 16), e.l++, { c: t, iStyleRef: r }
}
function Dn(e, t) {
  return (
    t == null && (t = L(8)),
    t.write_shift(-4, e.c),
    t.write_shift(3, e.iStyleRef || e.s),
    t.write_shift(1, 0),
    t
  )
}
function Cn(e) {
  var t = e.read_shift(2)
  return (t += e.read_shift(1) << 16), e.l++, { c: -1, iStyleRef: t }
}
function Rn(e, t) {
  return t == null && (t = L(4)), t.write_shift(3, e.iStyleRef || e.s), t.write_shift(1, 0), t
}
var BT = Dt,
  $u = xt
function yo(e) {
  var t = e.read_shift(4)
  return t === 0 || t === 4294967295 ? '' : e.read_shift(t, 'dbcs')
}
function Xi(e, t) {
  var r = !1
  return (
    t == null && ((r = !0), (t = L(127))),
    t.write_shift(4, e.length > 0 ? e.length : 4294967295),
    e.length > 0 && t.write_shift(0, e, 'dbcs'),
    r ? t.slice(0, t.l) : t
  )
}
var UT = Dt,
  S0 = yo,
  Ao = Xi
function Yu(e) {
  var t = e.slice(e.l, e.l + 4),
    r = t[0] & 1,
    n = t[0] & 2
  e.l += 4
  var a = n === 0 ? zi([0, 0, 0, 0, t[0] & 252, t[1], t[2], t[3]], 0) : xn(t, 0) >> 2
  return r ? a / 100 : a
}
function ju(e, t) {
  t == null && (t = L(4))
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
function Vu(e) {
  var t = { s: {}, e: {} }
  return (
    (t.s.r = e.read_shift(4)),
    (t.e.r = e.read_shift(4)),
    (t.s.c = e.read_shift(4)),
    (t.e.c = e.read_shift(4)),
    t
  )
}
function WT(e, t) {
  return (
    t || (t = L(16)),
    t.write_shift(4, e.s.r),
    t.write_shift(4, e.e.r),
    t.write_shift(4, e.s.c),
    t.write_shift(4, e.e.c),
    t
  )
}
var kn = Vu,
  sa = WT
function oa(e) {
  if (e.length - e.l < 8) throw 'XLS Xnum Buffer underflow'
  return e.read_shift(8, 'f')
}
function En(e, t) {
  return (t || L(8)).write_shift(8, e, 'f')
}
function HT(e) {
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
      var f = qT[a]
      f && (t.rgb = dl(f))
      break
    case 2:
      t.rgb = dl([s, o, l])
      break
    case 3:
      t.theme = a
      break
  }
  return i != 0 && (t.tint = i > 0 ? i / 32767 : i / 32768), t
}
function Ki(e, t) {
  if ((t || (t = L(8)), !e || e.auto)) return t.write_shift(4, 0), t.write_shift(4, 0), t
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
function $T(e) {
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
function YT(e, t) {
  t || (t = L(2))
  var r =
    (e.italic ? 2 : 0) |
    (e.strike ? 8 : 0) |
    (e.outline ? 16 : 0) |
    (e.shadow ? 32 : 0) |
    (e.condense ? 64 : 0) |
    (e.extend ? 128 : 0)
  return t.write_shift(1, r), t.write_shift(1, 0), t
}
var Gu = 2,
  $t = 3,
  Si = 11,
  qi = 19,
  yi = 64,
  jT = 65,
  VT = 71,
  GT = 4108,
  zT = 4126,
  wt = 80,
  nl = {
    1: { n: 'CodePage', t: Gu },
    2: { n: 'Category', t: wt },
    3: { n: 'PresentationFormat', t: wt },
    4: { n: 'ByteCount', t: $t },
    5: { n: 'LineCount', t: $t },
    6: { n: 'ParagraphCount', t: $t },
    7: { n: 'SlideCount', t: $t },
    8: { n: 'NoteCount', t: $t },
    9: { n: 'HiddenCount', t: $t },
    10: { n: 'MultimediaClipCount', t: $t },
    11: { n: 'ScaleCrop', t: Si },
    12: { n: 'HeadingPairs', t: GT },
    13: { n: 'TitlesOfParts', t: zT },
    14: { n: 'Manager', t: wt },
    15: { n: 'Company', t: wt },
    16: { n: 'LinksUpToDate', t: Si },
    17: { n: 'CharacterCount', t: $t },
    19: { n: 'SharedDoc', t: Si },
    22: { n: 'HyperlinksChanged', t: Si },
    23: { n: 'AppVersion', t: $t, p: 'version' },
    24: { n: 'DigSig', t: jT },
    26: { n: 'ContentType', t: wt },
    27: { n: 'ContentStatus', t: wt },
    28: { n: 'Language', t: wt },
    29: { n: 'Version', t: wt },
    255: {},
    2147483648: { n: 'Locale', t: qi },
    2147483651: { n: 'Behavior', t: qi },
    1919054434: {}
  },
  al = {
    1: { n: 'CodePage', t: Gu },
    2: { n: 'Title', t: wt },
    3: { n: 'Subject', t: wt },
    4: { n: 'Author', t: wt },
    5: { n: 'Keywords', t: wt },
    6: { n: 'Comments', t: wt },
    7: { n: 'Template', t: wt },
    8: { n: 'LastAuthor', t: wt },
    9: { n: 'RevNumber', t: wt },
    10: { n: 'EditTime', t: yi },
    11: { n: 'LastPrinted', t: yi },
    12: { n: 'CreatedDate', t: yi },
    13: { n: 'ModifiedDate', t: yi },
    14: { n: 'PageCount', t: $t },
    15: { n: 'WordCount', t: $t },
    16: { n: 'CharCount', t: $t },
    17: { n: 'Thumbnail', t: VT },
    18: { n: 'Application', t: wt },
    19: { n: 'DocSecurity', t: $t },
    255: {},
    2147483648: { n: 'Locale', t: qi },
    2147483651: { n: 'Behavior', t: qi },
    1919054434: {}
  }
function XT(e) {
  return e.map(function (t) {
    return [(t >> 16) & 255, (t >> 8) & 255, t & 255]
  })
}
var KT = /* @__PURE__ */ XT([
    0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0, 16777215, 16711680, 65280, 255,
    16776960, 16711935, 65535, 8388608, 32768, 128, 8421376, 8388736, 32896, 12632256, 8421504,
    10066431, 10040166, 16777164, 13434879, 6684774, 16744576, 26316, 13421823, 128, 16711935,
    16776960, 65535, 8388736, 8388608, 32896, 255, 52479, 13434879, 13434828, 16777113, 10079487,
    16751052, 13408767, 16764057, 3368703, 3394764, 10079232, 16763904, 16750848, 16737792, 6710937,
    9868950, 13158, 3381606, 13056, 3355392, 10040064, 10040166, 3355545, 3355443, 16777215, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ]),
  qT = /* @__PURE__ */ Wt(KT),
  ii = {
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
  JT = {
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
    'application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml': 'TODO',
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
    'application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml': 'TODO',
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
  Ai = {
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
function zu() {
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
function Xu(e, t) {
  var r = oT(JT),
    n = [],
    a
  ;(n[n.length] = it),
    (n[n.length] = Z('Types', null, {
      xmlns: dt.CT,
      'xmlns:xsd': dt.xsd,
      'xmlns:xsi': dt.xsi
    })),
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
        return Z('Default', null, { Extension: l[0], ContentType: l[1] })
      })
    ))
  var i = function (l) {
      e[l] &&
        e[l].length > 0 &&
        ((a = e[l][0]),
        (n[n.length] = Z('Override', null, {
          PartName: (a[0] == '/' ? '' : '/') + a,
          ContentType: Ai[l][t.bookType] || Ai[l].xlsx
        })))
    },
    s = function (l) {
      ;(e[l] || []).forEach(function (f) {
        n[n.length] = Z('Override', null, {
          PartName: (f[0] == '/' ? '' : '/') + f,
          ContentType: Ai[l][t.bookType] || Ai[l].xlsx
        })
      })
    },
    o = function (l) {
      ;(e[l] || []).forEach(function (f) {
        n[n.length] = Z('Override', null, {
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
  XMISS: 'http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing',
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
function Ku(e) {
  var t = e.lastIndexOf('/')
  return e.slice(0, t + 1) + '_rels/' + e.slice(t + 1) + '.rels'
}
function zn(e) {
  var t = [
    it,
    Z('Relationships', null, {
      xmlns: dt.RELS
    })
  ]
  return (
    yt(e['!id']).forEach(function (r) {
      t[t.length] = Z('Relationship', null, e['!id'][r])
    }),
    t.length > 2 && ((t[t.length] = '</Relationships>'), (t[1] = t[1].replace('/>', '>'))),
    t.join('')
  )
}
function Me(e, t, r, n, a, i) {
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
function ZT(e) {
  var t = [it]
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
function il(e, t, r) {
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
function QT(e, t) {
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
function eE(e) {
  var t = [it]
  t.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`)
  for (var r = 0; r != e.length; ++r) t.push(il(e[r][0], e[r][1])), t.push(QT('', e[r][0]))
  return t.push(il('', 'Document', 'pkg')), t.push('</rdf:RDF>'), t.join('')
}
function qu() {
  return (
    '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' +
    $i.version +
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
function Xs(e, t, r, n, a) {
  a[e] != null ||
    t == null ||
    t === '' ||
    ((a[e] = t), (t = be(t)), (n[n.length] = r ? Z(e, t, r) : Et(e, t)))
}
function Ju(e, t) {
  var r = t || {},
    n = [
      it,
      Z('cp:coreProperties', null, {
        'xmlns:cp': dt.CORE_PROPS,
        'xmlns:dc': dt.dc,
        'xmlns:dcterms': dt.dcterms,
        'xmlns:dcmitype': dt.dcmitype,
        'xmlns:xsi': dt.xsi
      })
    ],
    a = {}
  if (!e && !r.Props) return n.join('')
  e &&
    (e.CreatedDate != null &&
      Xs(
        'dcterms:created',
        typeof e.CreatedDate == 'string' ? e.CreatedDate : E0(e.CreatedDate, r.WTF),
        { 'xsi:type': 'dcterms:W3CDTF' },
        n,
        a
      ),
    e.ModifiedDate != null &&
      Xs(
        'dcterms:modified',
        typeof e.ModifiedDate == 'string' ? e.ModifiedDate : E0(e.ModifiedDate, r.WTF),
        { 'xsi:type': 'dcterms:W3CDTF' },
        n,
        a
      ))
  for (var i = 0; i != vn.length; ++i) {
    var s = vn[i],
      o = r.Props && r.Props[s[1]] != null ? r.Props[s[1]] : e ? e[s[1]] : null
    o === !0 ? (o = '1') : o === !1 ? (o = '0') : typeof o == 'number' && (o = String(o)),
      o != null && Xs(s[0], o, null, n, a)
  }
  return (
    n.length > 2 && ((n[n.length] = '</cp:coreProperties>'), (n[1] = n[1].replace('/>', '>'))),
    n.join('')
  )
}
var Xn = [
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
  Zu = ['Worksheets', 'SheetNames', 'NamedRanges', 'DefinedNames', 'Chartsheets', 'ChartNames']
function Qu(e) {
  var t = [],
    r = Z
  return (
    e || (e = {}),
    (e.Application = 'SheetJS'),
    (t[t.length] = it),
    (t[t.length] = Z('Properties', null, {
      xmlns: dt.EXT_PROPS,
      'xmlns:vt': dt.vt
    })),
    Xn.forEach(function (n) {
      if (e[n[1]] !== void 0) {
        var a
        switch (n[2]) {
          case 'string':
            a = be(String(e[n[1]]))
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
          return '<vt:lpstr>' + be(n) + '</vt:lpstr>'
        }).join(''),
        { size: e.Worksheets, baseType: 'lpstr' }
      )
    )),
    t.length > 2 && ((t[t.length] = '</Properties>'), (t[1] = t[1].replace('/>', '>'))),
    t.join('')
  )
}
function eh(e) {
  var t = [
    it,
    Z('Properties', null, {
      xmlns: dt.CUST_PROPS,
      'xmlns:vt': dt.vt
    })
  ]
  if (!e) return t.join('')
  var r = 1
  return (
    yt(e).forEach(function (a) {
      ++r,
        (t[t.length] = Z('property', gT(e[a], !0), {
          fmtid: '{D5CDD505-2E9C-101B-9397-08002B2CF9AE}',
          pid: r,
          name: be(a)
        }))
    }),
    t.length > 2 && ((t[t.length] = '</Properties>'), (t[1] = t[1].replace('/>', '>'))),
    t.join('')
  )
}
var sl = {
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
function tE(e, t) {
  var r = []
  return (
    yt(sl)
      .map(function (n) {
        for (var a = 0; a < vn.length; ++a) if (vn[a][1] == n) return vn[a]
        for (a = 0; a < Xn.length; ++a) if (Xn[a][1] == n) return Xn[a]
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
            r.push(Et(sl[n[1]] || n[1], a))
        }
      }),
    Z('DocumentProperties', r.join(''), { xmlns: Vt.o })
  )
}
function rE(e, t) {
  var r = ['Worksheets', 'SheetNames'],
    n = 'CustomDocumentProperties',
    a = []
  return (
    e &&
      yt(e).forEach(function (i) {
        if (!!Object.prototype.hasOwnProperty.call(e, i)) {
          for (var s = 0; s < vn.length; ++s) if (i == vn[s][1]) return
          for (s = 0; s < Xn.length; ++s) if (i == Xn[s][1]) return
          for (s = 0; s < r.length; ++s) if (i == r[s]) return
          var o = e[i],
            l = 'string'
          typeof o == 'number'
            ? ((l = 'float'), (o = String(o)))
            : o === !0 || o === !1
            ? ((l = 'boolean'), (o = o ? '1' : '0'))
            : (o = String(o)),
            a.push(Z(zf(i), o, { 'dt:dt': l }))
        }
      }),
    t &&
      yt(t).forEach(function (i) {
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
            a.push(Z(zf(i), s, { 'dt:dt': o }))
        }
      }),
    '<' + n + ' xmlns="' + Vt.o + '">' + a.join('') + '</' + n + '>'
  )
}
function nE(e) {
  var t = typeof e == 'string' ? new Date(Date.parse(e)) : e,
    r = t.getTime() / 1e3 + 11644473600,
    n = r % Math.pow(2, 32),
    a = (r - n) / Math.pow(2, 32)
  ;(n *= 1e7), (a *= 1e7)
  var i = (n / Math.pow(2, 32)) | 0
  i > 0 && ((n = n % Math.pow(2, 32)), (a += i))
  var s = L(8)
  return s.write_shift(4, n), s.write_shift(4, a), s
}
function ol(e, t) {
  var r = L(4),
    n = L(4)
  switch ((r.write_shift(4, e == 80 ? 31 : e), e)) {
    case 3:
      n.write_shift(-4, t)
      break
    case 5:
      ;(n = L(8)), n.write_shift(8, t, 'f')
      break
    case 11:
      n.write_shift(4, t ? 1 : 0)
      break
    case 64:
      n = nE(t)
      break
    case 31:
    case 80:
      for (
        n = L(4 + 2 * (t.length + 1) + (t.length % 2 ? 0 : 2)),
          n.write_shift(4, t.length + 1),
          n.write_shift(0, t, 'dbcs');
        n.l != n.length;

      )
        n.write_shift(1, 0)
      break
    default:
      throw new Error('TypedPropertyValue unrecognized type ' + e + ' ' + t)
  }
  return Tt([r, n])
}
var th = ['CodePage', 'Thumbnail', '_PID_LINKBASE', '_PID_HLINKS', 'SystemIdentifier', 'FMTID']
function aE(e) {
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
function fl(e, t, r) {
  var n = L(8),
    a = [],
    i = [],
    s = 8,
    o = 0,
    l = L(8),
    f = L(8)
  if (
    (l.write_shift(4, 2),
    l.write_shift(4, 1200),
    f.write_shift(4, 1),
    i.push(l),
    a.push(f),
    (s += 8 + l.length),
    !t)
  ) {
    ;(f = L(8)), f.write_shift(4, 0), a.unshift(f)
    var c = [L(4)]
    for (c[0].write_shift(4, e.length), o = 0; o < e.length; ++o) {
      var u = e[o][0]
      for (
        l = L(4 + 4 + 2 * (u.length + 1) + (u.length % 2 ? 0 : 2)),
          l.write_shift(4, o + 2),
          l.write_shift(4, u.length + 1),
          l.write_shift(0, u, 'dbcs');
        l.l != l.length;

      )
        l.write_shift(1, 0)
      c.push(l)
    }
    ;(l = Tt(c)), i.unshift(l), (s += 8 + l.length)
  }
  for (o = 0; o < e.length; ++o)
    if (
      !(t && !t[e[o][0]]) &&
      !(th.indexOf(e[o][0]) > -1 || Zu.indexOf(e[o][0]) > -1) &&
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
        l = ol(m.t, h)
      } else {
        var g = aE(h)
        g == -1 && ((g = 31), (h = String(h))), (l = ol(g, h))
      }
      i.push(l), (f = L(8)), f.write_shift(4, t ? p : 2 + o), a.push(f), (s += 8 + l.length)
    }
  var y = 8 * (i.length + 1)
  for (o = 0; o < i.length; ++o) a[o].write_shift(4, y), (y += i[o].length)
  return n.write_shift(4, s), n.write_shift(4, i.length), Tt([n].concat(a).concat(i))
}
function ll(e, t, r, n, a, i) {
  var s = L(a ? 68 : 48),
    o = [s]
  s.write_shift(2, 65534),
    s.write_shift(2, 0),
    s.write_shift(4, 842412599),
    s.write_shift(16, Be.utils.consts.HEADER_CLSID, 'hex'),
    s.write_shift(4, a ? 2 : 1),
    s.write_shift(16, t, 'hex'),
    s.write_shift(4, a ? 68 : 48)
  var l = fl(e, r, n)
  if ((o.push(l), a)) {
    var f = fl(a, null, null)
    s.write_shift(16, i, 'hex'), s.write_shift(4, 68 + l.length), o.push(f)
  }
  return Tt(o)
}
function iE(e, t) {
  t || (t = L(e))
  for (var r = 0; r < e; ++r) t.write_shift(1, 0)
  return t
}
function sE(e, t) {
  return e.read_shift(t) === 1
}
function Pt(e, t) {
  return t || (t = L(2)), t.write_shift(2, +!!e), t
}
function rh(e) {
  return e.read_shift(2, 'u')
}
function Jt(e, t) {
  return t || (t = L(2)), t.write_shift(2, e), t
}
function nh(e, t, r) {
  return (
    r || (r = L(2)), r.write_shift(1, t == 'e' ? +e : +!!e), r.write_shift(1, t == 'e' ? 1 : 0), r
  )
}
function ah(e, t, r) {
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
function oE(e) {
  var t = e.t || '',
    r = L(3 + 0)
  r.write_shift(2, t.length), r.write_shift(1, 1)
  var n = L(2 * t.length)
  n.write_shift(2 * t.length, t, 'utf16le')
  var a = [r, n]
  return Tt(a)
}
function fE(e, t, r) {
  var n
  if (r) {
    if (r.biff >= 2 && r.biff <= 5) return e.read_shift(t, 'cpstr')
    if (r.biff >= 12) return e.read_shift(t, 'dbcs-cont')
  }
  var a = e.read_shift(1)
  return a === 0 ? (n = e.read_shift(t, 'sbcs-cont')) : (n = e.read_shift(t, 'dbcs-cont')), n
}
function lE(e, t, r) {
  var n = e.read_shift(r && r.biff == 2 ? 1 : 2)
  return n === 0 ? (e.l++, '') : fE(e, n, r)
}
function cE(e, t, r) {
  if (r.biff > 5) return lE(e, t, r)
  var n = e.read_shift(1)
  return n === 0 ? (e.l++, '') : e.read_shift(n, r.biff <= 4 || !e.lens ? 'cpstr' : 'sbcs-cont')
}
function ih(e, t, r) {
  return (
    r || (r = L(3 + 2 * e.length)),
    r.write_shift(2, e.length),
    r.write_shift(1, 1),
    r.write_shift(31, e, 'utf16le'),
    r
  )
}
function cl(e, t) {
  t || (t = L(6 + e.length * 2)), t.write_shift(4, 1 + e.length)
  for (var r = 0; r < e.length; ++r) t.write_shift(2, e.charCodeAt(r))
  return t.write_shift(2, 0), t
}
function uE(e) {
  var t = L(512),
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
  if (i == 28) (n = n.slice(1)), cl(n, t)
  else if (i & 2) {
    for (s = 'e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b'.split(' '), r = 0; r < s.length; ++r)
      t.write_shift(1, parseInt(s[r], 16))
    var o = a > -1 ? n.slice(0, a) : n
    for (t.write_shift(4, 2 * (o.length + 1)), r = 0; r < o.length; ++r)
      t.write_shift(2, o.charCodeAt(r))
    t.write_shift(2, 0), i & 8 && cl(a > -1 ? n.slice(a + 1) : '', t)
  } else {
    for (s = '03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46'.split(' '), r = 0; r < s.length; ++r)
      t.write_shift(1, parseInt(s[r], 16))
    for (var l = 0; n.slice(l * 3, l * 3 + 3) == '../' || n.slice(l * 3, l * 3 + 3) == '..\\'; ) ++l
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
function Sn(e, t, r, n) {
  return n || (n = L(6)), n.write_shift(2, e), n.write_shift(2, t), n.write_shift(2, r || 0), n
}
function hE(e, t, r) {
  var n = r.biff > 8 ? 4 : 2,
    a = e.read_shift(n),
    i = e.read_shift(n, 'i'),
    s = e.read_shift(n, 'i')
  return [a, i, s]
}
function dE(e) {
  var t = e.read_shift(2),
    r = e.read_shift(2),
    n = e.read_shift(2),
    a = e.read_shift(2)
  return { s: { c: n, r: t }, e: { c: a, r } }
}
function sh(e, t) {
  return (
    t || (t = L(8)),
    t.write_shift(2, e.s.r),
    t.write_shift(2, e.e.r),
    t.write_shift(2, e.s.c),
    t.write_shift(2, e.e.c),
    t
  )
}
function Oo(e, t, r) {
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
  var i = L(a)
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
function pE(e, t) {
  var r = !t || t.biff == 8,
    n = L(r ? 112 : 54)
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
function xE(e, t) {
  var r = !t || t.biff >= 8 ? 2 : 1,
    n = L(8 + r * e.name.length)
  n.write_shift(4, e.pos),
    n.write_shift(1, e.hs || 0),
    n.write_shift(1, e.dt),
    n.write_shift(1, e.name.length),
    t.biff >= 8 && n.write_shift(1, 1),
    n.write_shift(r * e.name.length, e.name, t.biff < 8 ? 'sbcs' : 'utf16le')
  var a = n.slice(0, n.l)
  return (a.l = n.l), a
}
function mE(e, t) {
  var r = L(8)
  r.write_shift(4, e.Count), r.write_shift(4, e.Unique)
  for (var n = [], a = 0; a < e.length; ++a) n[a] = oE(e[a])
  var i = Tt([r].concat(n))
  return (
    (i.parts = [r.length].concat(
      n.map(function (s) {
        return s.length
      })
    )),
    i
  )
}
function _E() {
  var e = L(18)
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
function gE(e) {
  var t = L(18),
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
function vE(e, t) {
  var r = e.name || 'Arial',
    n = t && t.biff == 5,
    a = n ? 15 + r.length : 16 + 2 * r.length,
    i = L(a)
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
function wE(e, t, r, n) {
  var a = L(10)
  return Sn(e, t, n, a), a.write_shift(4, r), a
}
function TE(e, t, r, n, a) {
  var i = !a || a.biff == 8,
    s = L(6 + 2 + +i + (1 + i) * r.length)
  return (
    Sn(e, t, n, s),
    s.write_shift(2, r.length),
    i && s.write_shift(1, 1),
    s.write_shift((1 + i) * r.length, r, i ? 'utf16le' : 'sbcs'),
    s
  )
}
function EE(e, t, r, n) {
  var a = r && r.biff == 5
  n || (n = L(a ? 3 + t.length : 5 + 2 * t.length)),
    n.write_shift(2, e),
    n.write_shift(a ? 1 : 2, t.length),
    a || n.write_shift(1, 1),
    n.write_shift((a ? 1 : 2) * t.length, t, a ? 'sbcs' : 'utf16le')
  var i = n.length > n.l ? n.slice(0, n.l) : n
  return i.l == null && (i.l = i.length), i
}
function SE(e, t) {
  var r = t.biff == 8 || !t.biff ? 4 : 2,
    n = L(2 * r + 6)
  return (
    n.write_shift(r, e.s.r),
    n.write_shift(r, e.e.r + 1),
    n.write_shift(2, e.s.c),
    n.write_shift(2, e.e.c + 1),
    n.write_shift(2, 0),
    n
  )
}
function ul(e, t, r, n) {
  var a = r && r.biff == 5
  n || (n = L(a ? 16 : 20)),
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
function yE(e) {
  var t = L(8)
  return (
    t.write_shift(4, 0),
    t.write_shift(2, e[0] ? e[0] + 1 : 0),
    t.write_shift(2, e[1] ? e[1] + 1 : 0),
    t
  )
}
function AE(e, t, r, n, a, i) {
  var s = L(8)
  return Sn(e, t, n, s), nh(r, i, s), s
}
function OE(e, t, r, n) {
  var a = L(14)
  return Sn(e, t, n, a), En(r, a), a
}
function FE(e, t, r) {
  if (r.biff < 8) return DE(e, t, r)
  for (var n = [], a = e.l + t, i = e.read_shift(r.biff > 8 ? 4 : 2); i-- !== 0; )
    n.push(hE(e, r.biff > 8 ? 12 : 6, r))
  if (e.l != a) throw new Error('Bad ExternSheet: ' + e.l + ' != ' + a)
  return n
}
function DE(e, t, r) {
  e[e.l + 1] == 3 && e[e.l]++
  var n = ah(e, t, r)
  return n.charCodeAt(0) == 3 ? n.slice(1) : n
}
function CE(e) {
  var t = L(2 + e.length * 8)
  t.write_shift(2, e.length)
  for (var r = 0; r < e.length; ++r) sh(e[r], t)
  return t
}
function RE(e) {
  var t = L(24),
    r = pt(e[0])
  t.write_shift(2, r.r), t.write_shift(2, r.r), t.write_shift(2, r.c), t.write_shift(2, r.c)
  for (var n = 'd0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b'.split(' '), a = 0; a < 16; ++a)
    t.write_shift(1, parseInt(n[a], 16))
  return Tt([t, uE(e[1])])
}
function kE(e) {
  var t = e[1].Tooltip,
    r = L(10 + 2 * (t.length + 1))
  r.write_shift(2, 2048)
  var n = pt(e[0])
  r.write_shift(2, n.r), r.write_shift(2, n.r), r.write_shift(2, n.c), r.write_shift(2, n.c)
  for (var a = 0; a < t.length; ++a) r.write_shift(2, t.charCodeAt(a))
  return r.write_shift(2, 0), r
}
function NE(e) {
  return e || (e = L(4)), e.write_shift(2, 1), e.write_shift(2, 1), e
}
function PE(e, t, r) {
  if (!r.cellStyles) return vr(e, t)
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
function IE(e, t) {
  var r = L(12)
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
function ME(e) {
  for (var t = L(2 * e), r = 0; r < e; ++r) t.write_shift(2, r + 1)
  return t
}
function bE(e, t, r) {
  var n = L(15)
  return oi(n, e, t), n.write_shift(8, r, 'f'), n
}
function LE(e, t, r) {
  var n = L(9)
  return oi(n, e, t), n.write_shift(2, r), n
}
var BE = /* @__PURE__ */ (function () {
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
      t = xo({
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
        c = Tn(1)
      switch (l.type) {
        case 'base64':
          c = ir(Lr(o))
          break
        case 'binary':
          c = ir(o)
          break
        case 'buffer':
        case 'array':
          c = o
          break
      }
      Yt(c, 0)
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
        g = 521
      u == 2 && (d = c.read_shift(2)),
        (c.l += 3),
        u != 2 && (d = c.read_shift(4)),
        d > 1048576 && (d = 1e6),
        u != 2 && (g = c.read_shift(2))
      var y = c.read_shift(2),
        O = l.codepage || 1252
      u != 2 &&
        ((c.l += 16), c.read_shift(1), c[c.l] !== 0 && (O = e[c[c.l]]), (c.l += 1), (c.l += 2)),
        m && (c.l += 36)
      for (
        var F = [],
          b = {},
          J = Math.min(c.length, u == 2 ? 521 : g - 10 - (p ? 264 : 0)),
          ae = m ? 32 : 11;
        c.l < J && c[c.l] != 13;

      )
        switch (
          ((b = {}),
          (b.name = pn.utils.decode(O, c.slice(c.l, c.l + ae)).replace(/[\u0000\r\n].*$/g, '')),
          (c.l += ae),
          (b.type = String.fromCharCode(c.read_shift(1))),
          u != 2 && !m && (b.offset = c.read_shift(4)),
          (b.len = c.read_shift(1)),
          u == 2 && (b.offset = c.read_shift(2)),
          (b.dec = c.read_shift(1)),
          b.name.length && F.push(b),
          u != 2 && (c.l += m ? 13 : 14),
          b.type)
        ) {
          case 'B':
            ;(!p || b.len != 8) && l.WTF && console.log('Skipping ' + b.name + ':' + b.type)
            break
          case 'G':
          case 'P':
            l.WTF && console.log('Skipping ' + b.name + ':' + b.type)
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
            throw new Error('Unknown Field Type: ' + b.type)
        }
      if ((c[c.l] !== 13 && (c.l = g - 1), c.read_shift(1) !== 13))
        throw new Error('DBF Terminator not found ' + c.l + ' ' + c[c.l])
      c.l = g
      var C = 0,
        W = 0
      for (f[0] = [], W = 0; W != F.length; ++W) f[0][W] = F[W].name
      for (; d-- > 0; ) {
        if (c[c.l] === 42) {
          c.l += y
          continue
        }
        for (++c.l, f[++C] = [], W = 0, W = 0; W != F.length; ++W) {
          var M = c.slice(c.l, c.l + F[W].len)
          ;(c.l += F[W].len), Yt(M, 0)
          var j = pn.utils.decode(O, M)
          switch (F[W].type) {
            case 'C':
              j.trim().length && (f[C][W] = j.replace(/\s+$/, ''))
              break
            case 'D':
              j.length === 8
                ? (f[C][W] = new Date(+j.slice(0, 4), +j.slice(4, 6) - 1, +j.slice(6, 8)))
                : (f[C][W] = j)
              break
            case 'F':
              f[C][W] = parseFloat(j.trim())
              break
            case '+':
            case 'I':
              f[C][W] = m ? M.read_shift(-4, 'i') ^ 2147483648 : M.read_shift(4, 'i')
              break
            case 'L':
              switch (j.trim().toUpperCase()) {
                case 'Y':
                case 'T':
                  f[C][W] = !0
                  break
                case 'N':
                case 'F':
                  f[C][W] = !1
                  break
                case '':
                case '?':
                  break
                default:
                  throw new Error('DBF Unrecognized L:|' + j + '|')
              }
              break
            case 'M':
              if (!h) throw new Error('DBF Unexpected MEMO for type ' + u.toString(16))
              f[C][W] = '##MEMO##' + (m ? parseInt(j.trim(), 10) : M.read_shift(4))
              break
            case 'N':
              ;(j = j.replace(/\u0000/g, '').trim()), j && j != '.' && (f[C][W] = +j || 0)
              break
            case '@':
              f[C][W] = new Date(M.read_shift(-8, 'f') - 621356832e5)
              break
            case 'T':
              f[C][W] = new Date((M.read_shift(4) - 2440588) * 864e5 + M.read_shift(4))
              break
            case 'Y':
              f[C][W] = M.read_shift(4, 'i') / 1e4 + (M.read_shift(4, 'i') / 1e4) * Math.pow(2, 32)
              break
            case 'O':
              f[C][W] = -M.read_shift(-8, 'f')
              break
            case 'B':
              if (p && F[W].len == 8) {
                f[C][W] = M.read_shift(8, 'f')
                break
              }
            case 'G':
            case 'P':
              M.l += F[W].len
              break
            case '0':
              if (F[W].name === '_NullFlags') break
            default:
              throw new Error('DBF Unsupported data type ' + F[W].type)
          }
        }
      }
      if (u != 2 && c.l < c.length && c[c.l++] != 26)
        throw new Error(
          'DBF EOF Marker missing ' + (c.l - 1) + ' of ' + c.length + ' ' + c[c.l - 1].toString(16)
        )
      return l && l.sheetRows && (f = f.slice(0, l.sheetRows)), (l.DBF = F), f
    }
    function n(o, l) {
      var f = l || {}
      f.dateNF || (f.dateNF = 'yyyymmdd')
      var c = ia(r(o, f), f)
      return (
        (c['!cols'] = f.DBF.map(function (u) {
          return {
            wch: u.len,
            DBF: u
          }
        })),
        delete f.DBF,
        c
      )
    }
    function a(o, l) {
      try {
        return Fn(n(o, l), l)
      } catch (f) {
        if (l && l.WTF) throw f
      }
      return { SheetNames: [], Sheets: {} }
    }
    var i = { B: 8, C: 250, L: 1, D: 8, '?': 0, '': 0 }
    function s(o, l) {
      var f = l || {}
      if ((+f.codepage >= 0 && Ha(+f.codepage), f.type == 'string'))
        throw new Error('Cannot write DBF to JS string')
      var c = Bt(),
        u = ts(o, { header: 1, raw: !0, cellDates: !0 }),
        h = u[0],
        p = u.slice(1),
        m = o['!cols'] || [],
        d = 0,
        g = 0,
        y = 0,
        O = 1
      for (d = 0; d < h.length; ++d) {
        if (((m[d] || {}).DBF || {}).name) {
          ;(h[d] = m[d].DBF.name), ++y
          continue
        }
        if (h[d] != null) {
          if ((++y, typeof h[d] == 'number' && (h[d] = h[d].toString(10)), typeof h[d] != 'string'))
            throw new Error('DBF Invalid column name ' + h[d] + ' |' + typeof h[d] + '|')
          if (h.indexOf(h[d]) !== d) {
            for (g = 0; g < 1024; ++g)
              if (h.indexOf(h[d] + '_' + g) == -1) {
                h[d] += '_' + g
                break
              }
          }
        }
      }
      var F = Ge(o['!ref']),
        b = [],
        J = [],
        ae = []
      for (d = 0; d <= F.e.c - F.s.c; ++d) {
        var C = '',
          W = '',
          M = 0,
          j = []
        for (g = 0; g < p.length; ++g) p[g][d] != null && j.push(p[g][d])
        if (j.length == 0 || h[d] == null) {
          b[d] = '?'
          continue
        }
        for (g = 0; g < j.length; ++g) {
          switch (typeof j[g]) {
            case 'number':
              W = 'B'
              break
            case 'string':
              W = 'C'
              break
            case 'boolean':
              W = 'L'
              break
            case 'object':
              W = j[g] instanceof Date ? 'D' : 'C'
              break
            default:
              W = 'C'
          }
          ;(M = Math.max(M, String(j[g]).length)), (C = C && C != W ? 'C' : W)
        }
        M > 250 && (M = 250),
          (W = ((m[d] || {}).DBF || {}).type),
          W == 'C' && m[d].DBF.len > M && (M = m[d].DBF.len),
          C == 'B' && W == 'N' && ((C = 'N'), (ae[d] = m[d].DBF.dec), (M = m[d].DBF.len)),
          (J[d] = C == 'C' || W == 'N' ? M : i[C] || 0),
          (O += J[d]),
          (b[d] = C)
      }
      var V = c.next(32)
      for (
        V.write_shift(4, 318902576),
          V.write_shift(4, p.length),
          V.write_shift(2, 296 + 32 * y),
          V.write_shift(2, O),
          d = 0;
        d < 4;
        ++d
      )
        V.write_shift(4, 0)
      for (V.write_shift(4, 0 | ((+t[cu] || 3) << 8)), d = 0, g = 0; d < h.length; ++d)
        if (h[d] != null) {
          var G = c.next(32),
            ne = (h[d].slice(-10) + '\0\0\0\0\0\0\0\0\0\0\0').slice(0, 11)
          G.write_shift(1, ne, 'sbcs'),
            G.write_shift(1, b[d] == '?' ? 'C' : b[d], 'sbcs'),
            G.write_shift(4, g),
            G.write_shift(1, J[d] || i[b[d]] || 0),
            G.write_shift(1, ae[d] || 0),
            G.write_shift(1, 2),
            G.write_shift(4, 0),
            G.write_shift(1, 0),
            G.write_shift(4, 0),
            G.write_shift(4, 0),
            (g += J[d] || i[b[d]] || 0)
        }
      var Ne = c.next(264)
      for (Ne.write_shift(4, 13), d = 0; d < 65; ++d) Ne.write_shift(4, 0)
      for (d = 0; d < p.length; ++d) {
        var me = c.next(O)
        for (me.write_shift(1, 0), g = 0; g < h.length; ++g)
          if (h[g] != null)
            switch (b[g]) {
              case 'L':
                me.write_shift(1, p[d][g] == null ? 63 : p[d][g] ? 84 : 70)
                break
              case 'B':
                me.write_shift(8, p[d][g] || 0, 'f')
                break
              case 'N':
                var st = '0'
                for (
                  typeof p[d][g] == 'number' && (st = p[d][g].toFixed(ae[g] || 0)), y = 0;
                  y < J[g] - st.length;
                  ++y
                )
                  me.write_shift(1, 32)
                me.write_shift(1, st, 'sbcs')
                break
              case 'D':
                p[d][g]
                  ? (me.write_shift(4, ('0000' + p[d][g].getFullYear()).slice(-4), 'sbcs'),
                    me.write_shift(2, ('00' + (p[d][g].getMonth() + 1)).slice(-2), 'sbcs'),
                    me.write_shift(2, ('00' + p[d][g].getDate()).slice(-2), 'sbcs'))
                  : me.write_shift(8, '00000000', 'sbcs')
                break
              case 'C':
                var ee = String(p[d][g] != null ? p[d][g] : '').slice(0, J[g])
                for (me.write_shift(1, ee, 'sbcs'), y = 0; y < J[g] - ee.length; ++y)
                  me.write_shift(1, 32)
                break
            }
      }
      return c.next(1).write_shift(1, 26), c.end()
    }
    return {
      to_workbook: a,
      to_sheet: n,
      from_sheet: s
    }
  })(),
  UE = /* @__PURE__ */ (function () {
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
          yt(e)
            .join('|')
            .replace(/\|\|\|/, '|\\||')
            .replace(/([?()+])/g, '\\$1') +
          '|\\|)',
        'gm'
      ),
      r = function (h, p) {
        var m = e[p]
        return typeof m == 'number' ? Mf(m) : m
      },
      n = function (h, p, m) {
        var d = ((p.charCodeAt(0) - 32) << 4) | (m.charCodeAt(0) - 48)
        return d == 59 ? h : Mf(d)
      }
    e['|'] = 254
    function a(h, p) {
      switch (p.type) {
        case 'base64':
          return i(Lr(h), p)
        case 'binary':
          return i(h, p)
        case 'buffer':
          return i(ke && Buffer.isBuffer(h) ? h.toString('binary') : ti(h), p)
        case 'array':
          return i(ys(h), p)
      }
      throw new Error('Unrecognized type ' + p.type)
    }
    function i(h, p) {
      var m = h.split(/[\n\r]+/),
        d = -1,
        g = -1,
        y = 0,
        O = 0,
        F = [],
        b = [],
        J = null,
        ae = {},
        C = [],
        W = [],
        M = [],
        j = 0,
        V
      for (+p.codepage >= 0 && Ha(+p.codepage); y !== m.length; ++y) {
        j = 0
        var G = m[y]
            .trim()
            .replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, n)
            .replace(t, r),
          ne = G.replace(/;;/g, '\0')
            .split(';')
            .map(function (A) {
              return A.replace(/\u0000/g, ';')
            }),
          Ne = ne[0],
          me
        if (G.length > 0)
          switch (Ne) {
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
              ne[1].charAt(0) == 'P' && b.push(G.slice(3).replace(/;;/g, ';'))
              break
            case 'C':
              var st = !1,
                ee = !1,
                Ee = !1,
                Se = !1,
                ot = -1,
                ft = -1
              for (O = 1; O < ne.length; ++O)
                switch (ne[O].charAt(0)) {
                  case 'A':
                    break
                  case 'X':
                    ;(g = parseInt(ne[O].slice(1)) - 1), (ee = !0)
                    break
                  case 'Y':
                    for (d = parseInt(ne[O].slice(1)) - 1, ee || (g = 0), V = F.length; V <= d; ++V)
                      F[V] = []
                    break
                  case 'K':
                    ;(me = ne[O].slice(1)),
                      me.charAt(0) === '"'
                        ? (me = me.slice(1, me.length - 1))
                        : me === 'TRUE'
                        ? (me = !0)
                        : me === 'FALSE'
                        ? (me = !1)
                        : isNaN(Pr(me))
                        ? isNaN(Ya(me).getDate()) || (me = Mt(me))
                        : ((me = Pr(me)), J !== null && ho(J) && (me = yu(me))),
                      (st = !0)
                    break
                  case 'E':
                    Se = !0
                    var S = LS(ne[O].slice(1), { r: d, c: g })
                    F[d][g] = [F[d][g], S]
                    break
                  case 'S':
                    ;(Ee = !0), (F[d][g] = [F[d][g], 'S5S'])
                    break
                  case 'G':
                    break
                  case 'R':
                    ot = parseInt(ne[O].slice(1)) - 1
                    break
                  case 'C':
                    ft = parseInt(ne[O].slice(1)) - 1
                    break
                  default:
                    if (p && p.WTF) throw new Error('SYLK bad record ' + G)
                }
              if (
                (st &&
                  (F[d][g] && F[d][g].length == 2 ? (F[d][g][0] = me) : (F[d][g] = me), (J = null)),
                Ee)
              ) {
                if (Se) throw new Error('SYLK shared formula cannot have own formula')
                var I = ot > -1 && F[ot][ft]
                if (!I || !I[1]) throw new Error('SYLK shared formula cannot find base')
                F[d][g][1] = BS(I[1], { r: d - ot, c: g - ft })
              }
              break
            case 'F':
              var D = 0
              for (O = 1; O < ne.length; ++O)
                switch (ne[O].charAt(0)) {
                  case 'X':
                    ;(g = parseInt(ne[O].slice(1)) - 1), ++D
                    break
                  case 'Y':
                    for (d = parseInt(ne[O].slice(1)) - 1, V = F.length; V <= d; ++V) F[V] = []
                    break
                  case 'M':
                    j = parseInt(ne[O].slice(1)) / 20
                    break
                  case 'F':
                    break
                  case 'G':
                    break
                  case 'P':
                    J = b[parseInt(ne[O].slice(1))]
                    break
                  case 'S':
                    break
                  case 'D':
                    break
                  case 'N':
                    break
                  case 'W':
                    for (
                      M = ne[O].slice(1).split(' '), V = parseInt(M[0], 10);
                      V <= parseInt(M[1], 10);
                      ++V
                    )
                      (j = parseInt(M[2], 10)),
                        (W[V - 1] = j === 0 ? { hidden: !0 } : { wch: j }),
                        Fo(W[V - 1])
                    break
                  case 'C':
                    ;(g = parseInt(ne[O].slice(1)) - 1), W[g] || (W[g] = {})
                    break
                  case 'R':
                    ;(d = parseInt(ne[O].slice(1)) - 1),
                      C[d] || (C[d] = {}),
                      j > 0 ? ((C[d].hpt = j), (C[d].hpx = uh(j))) : j === 0 && (C[d].hidden = !0)
                    break
                  default:
                    if (p && p.WTF) throw new Error('SYLK bad record ' + G)
                }
              D < 1 && (J = null)
              break
            default:
              if (p && p.WTF) throw new Error('SYLK bad record ' + G)
          }
      }
      return (
        C.length > 0 && (ae['!rows'] = C),
        W.length > 0 && (ae['!cols'] = W),
        p && p.sheetRows && (F = F.slice(0, p.sheetRows)),
        [F, ae]
      )
    }
    function s(h, p) {
      var m = a(h, p),
        d = m[0],
        g = m[1],
        y = ia(d, p)
      return (
        yt(g).forEach(function (O) {
          y[O] = g[O]
        }),
        y
      )
    }
    function o(h, p) {
      return Fn(s(h, p), p)
    }
    function l(h, p, m, d) {
      var g = 'C;Y' + (m + 1) + ';X' + (d + 1) + ';K'
      switch (h.t) {
        case 'n':
          ;(g += h.v || 0), h.f && !h.F && (g += ';E' + Co(h.f, { r: m, c: d }))
          break
        case 'b':
          g += h.v ? 'TRUE' : 'FALSE'
          break
        case 'e':
          g += h.w || h.v
          break
        case 'd':
          g += '"' + (h.w || h.v) + '"'
          break
        case 's':
          g += '"' + h.v.replace(/"/g, '').replace(/;/g, ';;') + '"'
          break
      }
      return g
    }
    function f(h, p) {
      p.forEach(function (m, d) {
        var g = 'F;W' + (d + 1) + ' ' + (d + 1) + ' '
        m.hidden
          ? (g += '0')
          : (typeof m.width == 'number' && !m.wpx && (m.wpx = Ji(m.width)),
            typeof m.wpx == 'number' && !m.wch && (m.wch = Zi(m.wpx)),
            typeof m.wch == 'number' && (g += Math.round(m.wch))),
          g.charAt(g.length - 1) != ' ' && h.push(g)
      })
    }
    function c(h, p) {
      p.forEach(function (m, d) {
        var g = 'F;'
        m.hidden
          ? (g += 'M0;')
          : m.hpt
          ? (g += 'M' + 20 * m.hpt + ';')
          : m.hpx && (g += 'M' + 20 * Qi(m.hpx) + ';'),
          g.length > 2 && h.push(g + 'R' + (d + 1))
      })
    }
    function u(h, p) {
      var m = ['ID;PWXL;N;E'],
        d = [],
        g = Ge(h['!ref']),
        y,
        O = Array.isArray(h),
        F = `\r
`
      m.push('P;PGeneral'),
        m.push('F;P0;DG0G8;M255'),
        h['!cols'] && f(m, h['!cols']),
        h['!rows'] && c(m, h['!rows']),
        m.push(
          'B;Y' +
            (g.e.r - g.s.r + 1) +
            ';X' +
            (g.e.c - g.s.c + 1) +
            ';D' +
            [g.s.c, g.s.r, g.e.c, g.e.r].join(' ')
        )
      for (var b = g.s.r; b <= g.e.r; ++b)
        for (var J = g.s.c; J <= g.e.c; ++J) {
          var ae = Le({ r: b, c: J })
          ;(y = O ? (h[b] || [])[J] : h[ae]),
            !(!y || (y.v == null && (!y.f || y.F))) && d.push(l(y, h, b, J))
        }
      return m.join(F) + F + d.join(F) + F + 'E' + F
    }
    return {
      to_workbook: o,
      to_sheet: s,
      from_sheet: u
    }
  })(),
  WE = /* @__PURE__ */ (function () {
    function e(i, s) {
      switch (s.type) {
        case 'base64':
          return t(Lr(i), s)
        case 'binary':
          return t(i, s)
        case 'buffer':
          return t(ke && Buffer.isBuffer(i) ? i.toString('binary') : ti(i), s)
        case 'array':
          return t(ys(i), s)
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
                : isNaN(Pr(m))
                ? isNaN(Ya(m).getDate())
                  ? (u[l][f] = m)
                  : (u[l][f] = Mt(m))
                : (u[l][f] = Pr(m)),
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
      return ia(e(i, s), s)
    }
    function n(i, s) {
      return Fn(r(i, s), s)
    }
    var a = /* @__PURE__ */ (function () {
      var i = function (l, f, c, u, h) {
          l.push(f), l.push(c + ',' + u), l.push('"' + h.replace(/"/g, '""') + '"')
        },
        s = function (l, f, c, u) {
          l.push(f + ',' + c), l.push(f == 1 ? '"' + u.replace(/"/g, '""') + '"' : u)
        }
      return function (l) {
        var f = [],
          c = Ge(l['!ref']),
          u,
          h = Array.isArray(l)
        i(f, 'TABLE', 0, 1, 'sheetjs'),
          i(f, 'VECTORS', 0, c.e.r - c.s.r + 1, ''),
          i(f, 'TUPLES', 0, c.e.c - c.s.c + 1, ''),
          i(f, 'DATA', 0, 0, '')
        for (var p = c.s.r; p <= c.e.r; ++p) {
          s(f, -1, 0, 'BOT')
          for (var m = c.s.c; m <= c.e.c; ++m) {
            var d = Le({ r: p, c: m })
            if (((u = h ? (l[p] || [])[m] : l[d]), !u)) {
              s(f, 1, 0, '')
              continue
            }
            switch (u.t) {
              case 'n':
                var g = u.w
                !g && u.v != null && (g = u.v),
                  g == null
                    ? u.f && !u.F
                      ? s(f, 1, 0, '=' + u.f)
                      : s(f, 1, 0, '')
                    : s(f, 0, g, 'V')
                break
              case 'b':
                s(f, 0, u.v ? 1 : 0, u.v ? 'TRUE' : 'FALSE')
                break
              case 's':
                s(f, 1, 0, isNaN(u.v) ? u.v : '="' + u.v + '"')
                break
              case 'd':
                u.w || (u.w = Br(u.z || Je[14], Ut(Mt(u.v)))), s(f, 0, u.w, 'V')
                break
              default:
                s(f, 1, 0, '')
            }
          }
        }
        s(f, -1, 0, 'EOD')
        var y = `\r
`,
          O = f.join(y)
        return O
      }
    })()
    return {
      to_workbook: n,
      to_sheet: r,
      from_sheet: a
    }
  })(),
  oh = /* @__PURE__ */ (function () {
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
          g = 0,
          y = [];
        g !== p.length;
        ++g
      ) {
        var O = p[g].trim().split(':')
        if (O[0] === 'cell') {
          var F = pt(O[1])
          if (y.length <= F.r) for (m = y.length; m <= F.r; ++m) y[m] || (y[m] = [])
          switch (((m = F.r), (d = F.c), O[2])) {
            case 't':
              y[m][d] = e(O[3])
              break
            case 'v':
              y[m][d] = +O[3]
              break
            case 'vtf':
              var b = O[O.length - 1]
            case 'vtc':
              switch (O[3]) {
                case 'nl':
                  y[m][d] = !!+O[4]
                  break
                default:
                  y[m][d] = +O[4]
                  break
              }
              O[2] == 'vtf' && (y[m][d] = [y[m][d], b])
          }
        }
      }
      return h && h.sheetRows && (y = y.slice(0, h.sheetRows)), y
    }
    function n(u, h) {
      return ia(r(u, h), h)
    }
    function a(u, h) {
      return Fn(n(u, h), h)
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
        var h = [], p = [], m, d = '', g = zt(u['!ref']), y = Array.isArray(u), O = g.s.r;
        O <= g.e.r;
        ++O
      )
        for (var F = g.s.c; F <= g.e.c; ++F)
          if (
            ((d = Le({ r: O, c: F })),
            (m = y ? (u[O] || [])[F] : u[d]),
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
                var b = Ut(Mt(m.v))
                ;(p[2] = 'vtc'),
                  (p[3] = 'nd'),
                  (p[4] = '' + b),
                  (p[5] = m.w || Br(m.z || Je[14], b))
                break
              case 'e':
                continue
            }
            h.push(p.join(':'))
          }
      return (
        h.push('sheet:c:' + (g.e.c - g.s.c + 1) + ':r:' + (g.e.r - g.s.r + 1) + ':tvf:1'),
        h.push('valueformat:1:text-wiki'),
        h.join(`
`)
      )
    }
    function c(u) {
      return [i, s, o, s, f(u), l].join(`
`)
    }
    return {
      to_workbook: a,
      to_sheet: n,
      from_sheet: c
    }
  })(),
  HE = /* @__PURE__ */ (function () {
    function e(c, u, h, p, m) {
      m.raw
        ? (u[h][p] = c)
        : c === '' ||
          (c === 'TRUE'
            ? (u[h][p] = !0)
            : c === 'FALSE'
            ? (u[h][p] = !1)
            : isNaN(Pr(c))
            ? isNaN(Ya(c).getDate())
              ? (u[h][p] = c)
              : (u[h][p] = Mt(c))
            : (u[h][p] = Pr(c)))
    }
    function t(c, u) {
      var h = u || {},
        p = []
      if (!c || c.length === 0) return p
      for (var m = c.split(/[\r\n]/), d = m.length - 1; d >= 0 && m[d].length === 0; ) --d
      for (var g = 10, y = 0, O = 0; O <= d; ++O)
        (y = m[O].indexOf(' ')), y == -1 ? (y = m[O].length) : y++, (g = Math.max(g, y))
      for (O = 0; O <= d; ++O) {
        p[O] = []
        var F = 0
        for (e(m[O].slice(0, g).trim(), p, O, F, h), F = 1; F <= (m[O].length - g) / 10 + 1; ++F)
          e(m[O].slice(g + (F - 1) * 10, g + F * 10).trim(), p, O, F, h)
      }
      return h.sheetRows && (p = p.slice(0, h.sheetRows)), p
    }
    var r = {
        44: ',',
        9: '	',
        59: ';',
        124: '|'
      },
      n = {
        44: 3,
        9: 2,
        59: 1,
        124: 0
      }
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
        m.sort(function (d, g) {
          return d[0] - g[0] || n[d[1]] - n[g[1]]
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
      var g = 0,
        y = 0,
        O = 0,
        F = 0,
        b = 0,
        J = p.charCodeAt(0),
        ae = !1,
        C = 0,
        W = c.charCodeAt(0)
      c = c.replace(
        /\r\n/gm,
        `
`
      )
      var M = h.dateNF != null ? nT(h.dateNF) : null
      function j() {
        var V = c.slice(F, b),
          G = {}
        if (
          (V.charAt(0) == '"' &&
            V.charAt(V.length - 1) == '"' &&
            (V = V.slice(1, -1).replace(/""/g, '"')),
          V.length === 0)
        )
          G.t = 'z'
        else if (h.raw) (G.t = 's'), (G.v = V)
        else if (V.trim().length === 0) (G.t = 's'), (G.v = V)
        else if (V.charCodeAt(0) == 61)
          V.charCodeAt(1) == 34 && V.charCodeAt(V.length - 1) == 34
            ? ((G.t = 's'), (G.v = V.slice(2, -1).replace(/""/g, '"')))
            : US(V)
            ? ((G.t = 'n'), (G.f = V.slice(1)))
            : ((G.t = 's'), (G.v = V))
        else if (V == 'TRUE') (G.t = 'b'), (G.v = !0)
        else if (V == 'FALSE') (G.t = 'b'), (G.v = !1)
        else if (!isNaN((O = Pr(V)))) (G.t = 'n'), h.cellText !== !1 && (G.w = V), (G.v = O)
        else if (!isNaN(Ya(V).getDate()) || (M && V.match(M))) {
          G.z = h.dateNF || Je[14]
          var ne = 0
          M && V.match(M) && ((V = aT(V, h.dateNF, V.match(M) || [])), (ne = 1)),
            h.cellDates ? ((G.t = 'd'), (G.v = Mt(V, ne))) : ((G.t = 'n'), (G.v = Ut(Mt(V, ne)))),
            h.cellText !== !1 && (G.w = Br(G.z, G.v instanceof Date ? Ut(G.v) : G.v)),
            h.cellNF || delete G.z
        } else (G.t = 's'), (G.v = V)
        if (
          (G.t == 'z' ||
            (h.dense ? (m[g] || (m[g] = []), (m[g][y] = G)) : (m[Le({ c: y, r: g })] = G)),
          (F = b + 1),
          (W = c.charCodeAt(F)),
          d.e.c < y && (d.e.c = y),
          d.e.r < g && (d.e.r = g),
          C == J)
        )
          ++y
        else if (((y = 0), ++g, h.sheetRows && h.sheetRows <= g)) return !0
      }
      e: for (; b < c.length; ++b)
        switch ((C = c.charCodeAt(b))) {
          case 34:
            W === 34 && (ae = !ae)
            break
          case J:
          case 10:
          case 13:
            if (!ae && j()) break e
            break
        }
      return b - F > 0 && j(), (m['!ref'] = at(d)), m
    }
    function s(c, u) {
      return !(u && u.PRN) ||
        u.FS ||
        c.slice(0, 4) == 'sep=' ||
        c.indexOf('	') >= 0 ||
        c.indexOf(',') >= 0 ||
        c.indexOf(';') >= 0
        ? i(c, u)
        : ia(t(c, u), u)
    }
    function o(c, u) {
      var h = '',
        p = u.type == 'string' ? [0, 0, 0, 0] : Q3(c, u)
      switch (u.type) {
        case 'base64':
          h = Lr(c)
          break
        case 'binary':
          h = c
          break
        case 'buffer':
          u.codepage == 65001
            ? (h = c.toString('utf8'))
            : u.codepage && typeof pn < 'u'
            ? (h = pn.utils.decode(u.codepage, c))
            : (h = ke && Buffer.isBuffer(c) ? c.toString('binary') : ti(c))
          break
        case 'array':
          h = ys(c)
          break
        case 'string':
          h = c
          break
        default:
          throw new Error('Unrecognized type ' + u.type)
      }
      return (
        p[0] == 239 && p[1] == 187 && p[2] == 191
          ? (h = Ra(h.slice(3)))
          : u.type != 'string' && u.type != 'buffer' && u.codepage == 65001
          ? (h = Ra(h))
          : u.type == 'binary' &&
            typeof pn < 'u' &&
            u.codepage &&
            (h = pn.utils.decode(u.codepage, pn.utils.encode(28591, h))),
        h.slice(0, 19) == 'socialcalc:version:'
          ? oh.to_sheet(u.type == 'string' ? h : Ra(h), u)
          : s(h, u)
      )
    }
    function l(c, u) {
      return Fn(o(c, u), u)
    }
    function f(c) {
      for (var u = [], h = Ge(c['!ref']), p, m = Array.isArray(c), d = h.s.r; d <= h.e.r; ++d) {
        for (var g = [], y = h.s.c; y <= h.e.c; ++y) {
          var O = Le({ r: d, c: y })
          if (((p = m ? (c[d] || [])[y] : c[O]), !p || p.v == null)) {
            g.push('          ')
            continue
          }
          for (var F = (p.w || (Ur(p), p.w) || '').slice(0, 10); F.length < 10; ) F += ' '
          g.push(F + (y === 0 ? ' ' : ''))
        }
        u.push(g.join(''))
      }
      return u.join(`
`)
    }
    return {
      to_workbook: l,
      to_sheet: o,
      from_sheet: f
    }
  })(),
  hl = /* @__PURE__ */ (function () {
    function e(S, I, D) {
      if (!!S) {
        Yt(S, S.l || 0)
        for (var A = D.Enum || ot; S.l < S.length; ) {
          var Y = S.read_shift(2),
            ce = A[Y] || A[65535],
            ue = S.read_shift(2),
            le = S.l + ue,
            re = ce.f && ce.f(S, ue, D)
          if (((S.l = le), I(re, ce, Y))) return
        }
      }
    }
    function t(S, I) {
      switch (I.type) {
        case 'base64':
          return r(ir(Lr(S)), I)
        case 'binary':
          return r(ir(S), I)
        case 'buffer':
        case 'array':
          return r(S, I)
      }
      throw 'Unsupported type ' + I.type
    }
    function r(S, I) {
      if (!S) return S
      var D = I || {},
        A = D.dense ? [] : {},
        Y = 'Sheet1',
        ce = '',
        ue = 0,
        le = {},
        re = [],
        Pe = [],
        Te = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
        mt = D.sheetRows || 0
      if (S[2] == 0 && (S[3] == 8 || S[3] == 9) && S.length >= 16 && S[14] == 5 && S[15] === 108)
        throw new Error('Unsupported Works 3 for Mac file')
      if (S[2] == 2)
        (D.Enum = ot),
          e(
            S,
            function (fe, kt, he) {
              switch (he) {
                case 0:
                  ;(D.vers = fe), fe >= 4096 && (D.qpro = !0)
                  break
                case 6:
                  Te = fe
                  break
                case 204:
                  fe && (ce = fe)
                  break
                case 222:
                  ce = fe
                  break
                case 15:
                case 51:
                  D.qpro || (fe[1].v = fe[1].v.slice(1))
                case 13:
                case 14:
                case 16:
                  he == 14 &&
                    (fe[2] & 112) == 112 &&
                    (fe[2] & 15) > 1 &&
                    (fe[2] & 15) < 15 &&
                    ((fe[1].z = D.dateNF || Je[14]),
                    D.cellDates && ((fe[1].t = 'd'), (fe[1].v = yu(fe[1].v)))),
                    D.qpro &&
                      fe[3] > ue &&
                      ((A['!ref'] = at(Te)),
                      (le[Y] = A),
                      re.push(Y),
                      (A = D.dense ? [] : {}),
                      (Te = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                      (ue = fe[3]),
                      (Y = ce || 'Sheet' + (ue + 1)),
                      (ce = ''))
                  var Sr = D.dense ? (A[fe[0].r] || [])[fe[0].c] : A[Le(fe[0])]
                  if (Sr) {
                    ;(Sr.t = fe[1].t),
                      (Sr.v = fe[1].v),
                      fe[1].z != null && (Sr.z = fe[1].z),
                      fe[1].f != null && (Sr.f = fe[1].f)
                    break
                  }
                  D.dense
                    ? (A[fe[0].r] || (A[fe[0].r] = []), (A[fe[0].r][fe[0].c] = fe[1]))
                    : (A[Le(fe[0])] = fe[1])
                  break
              }
            },
            D
          )
      else if (S[2] == 26 || S[2] == 14)
        (D.Enum = ft),
          S[2] == 14 && ((D.qpro = !0), (S.l = 0)),
          e(
            S,
            function (fe, kt, he) {
              switch (he) {
                case 204:
                  Y = fe
                  break
                case 22:
                  fe[1].v = fe[1].v.slice(1)
                case 23:
                case 24:
                case 25:
                case 37:
                case 39:
                case 40:
                  if (
                    (fe[3] > ue &&
                      ((A['!ref'] = at(Te)),
                      (le[Y] = A),
                      re.push(Y),
                      (A = D.dense ? [] : {}),
                      (Te = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                      (ue = fe[3]),
                      (Y = 'Sheet' + (ue + 1))),
                    mt > 0 && fe[0].r >= mt)
                  )
                    break
                  D.dense
                    ? (A[fe[0].r] || (A[fe[0].r] = []), (A[fe[0].r][fe[0].c] = fe[1]))
                    : (A[Le(fe[0])] = fe[1]),
                    Te.e.c < fe[0].c && (Te.e.c = fe[0].c),
                    Te.e.r < fe[0].r && (Te.e.r = fe[0].r)
                  break
                case 27:
                  fe[14e3] && (Pe[fe[14e3][0]] = fe[14e3][1])
                  break
                case 1537:
                  ;(Pe[fe[0]] = fe[1]), fe[0] == ue && (Y = fe[1])
                  break
              }
            },
            D
          )
      else throw new Error('Unrecognized LOTUS BOF ' + S[2])
      if (((A['!ref'] = at(Te)), (le[ce || Y] = A), re.push(ce || Y), !Pe.length))
        return { SheetNames: re, Sheets: le }
      for (var Oe = {}, Kt = [], $e = 0; $e < Pe.length; ++$e)
        le[re[$e]]
          ? (Kt.push(Pe[$e] || re[$e]), (Oe[Pe[$e]] = le[Pe[$e]] || le[re[$e]]))
          : (Kt.push(Pe[$e]), (Oe[Pe[$e]] = { '!ref': 'A1' }))
      return { SheetNames: Kt, Sheets: Oe }
    }
    function n(S, I) {
      var D = I || {}
      if ((+D.codepage >= 0 && Ha(+D.codepage), D.type == 'string'))
        throw new Error('Cannot write WK1 to JS string')
      var A = Bt(),
        Y = Ge(S['!ref']),
        ce = Array.isArray(S),
        ue = []
      Q(A, 0, i(1030)), Q(A, 6, l(Y))
      for (var le = Math.min(Y.e.r, 8191), re = Y.s.r; re <= le; ++re)
        for (var Pe = St(re), Te = Y.s.c; Te <= Y.e.c; ++Te) {
          re === Y.s.r && (ue[Te] = Ft(Te))
          var mt = ue[Te] + Pe,
            Oe = ce ? (S[re] || [])[Te] : S[mt]
          if (!(!Oe || Oe.t == 'z'))
            if (Oe.t == 'n')
              (Oe.v | 0) == Oe.v && Oe.v >= -32768 && Oe.v <= 32767
                ? Q(A, 13, p(re, Te, Oe.v))
                : Q(A, 14, d(re, Te, Oe.v))
            else {
              var Kt = Ur(Oe)
              Q(A, 15, u(re, Te, Kt.slice(0, 239)))
            }
        }
      return Q(A, 1), A.end()
    }
    function a(S, I) {
      var D = I || {}
      if ((+D.codepage >= 0 && Ha(+D.codepage), D.type == 'string'))
        throw new Error('Cannot write WK3 to JS string')
      var A = Bt()
      Q(A, 0, s(S))
      for (var Y = 0, ce = 0; Y < S.SheetNames.length; ++Y)
        (S.Sheets[S.SheetNames[Y]] || {})['!ref'] && Q(A, 27, Se(S.SheetNames[Y], ce++))
      var ue = 0
      for (Y = 0; Y < S.SheetNames.length; ++Y) {
        var le = S.Sheets[S.SheetNames[Y]]
        if (!(!le || !le['!ref'])) {
          for (
            var re = Ge(le['!ref']),
              Pe = Array.isArray(le),
              Te = [],
              mt = Math.min(re.e.r, 8191),
              Oe = re.s.r;
            Oe <= mt;
            ++Oe
          )
            for (var Kt = St(Oe), $e = re.s.c; $e <= re.e.c; ++$e) {
              Oe === re.s.r && (Te[$e] = Ft($e))
              var fe = Te[$e] + Kt,
                kt = Pe ? (le[Oe] || [])[$e] : le[fe]
              if (!(!kt || kt.t == 'z'))
                if (kt.t == 'n') Q(A, 23, j(Oe, $e, ue, kt.v))
                else {
                  var he = Ur(kt)
                  Q(A, 22, C(Oe, $e, ue, he.slice(0, 239)))
                }
            }
          ++ue
        }
      }
      return Q(A, 1), A.end()
    }
    function i(S) {
      var I = L(2)
      return I.write_shift(2, S), I
    }
    function s(S) {
      var I = L(26)
      I.write_shift(2, 4096), I.write_shift(2, 4), I.write_shift(4, 0)
      for (var D = 0, A = 0, Y = 0, ce = 0; ce < S.SheetNames.length; ++ce) {
        var ue = S.SheetNames[ce],
          le = S.Sheets[ue]
        if (!(!le || !le['!ref'])) {
          ++Y
          var re = zt(le['!ref'])
          D < re.e.r && (D = re.e.r), A < re.e.c && (A = re.e.c)
        }
      }
      return (
        D > 8191 && (D = 8191),
        I.write_shift(2, D),
        I.write_shift(1, Y),
        I.write_shift(1, A),
        I.write_shift(2, 0),
        I.write_shift(2, 0),
        I.write_shift(1, 1),
        I.write_shift(1, 2),
        I.write_shift(4, 0),
        I.write_shift(4, 0),
        I
      )
    }
    function o(S, I, D) {
      var A = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }
      return I == 8 && D.qpro
        ? ((A.s.c = S.read_shift(1)),
          S.l++,
          (A.s.r = S.read_shift(2)),
          (A.e.c = S.read_shift(1)),
          S.l++,
          (A.e.r = S.read_shift(2)),
          A)
        : ((A.s.c = S.read_shift(2)),
          (A.s.r = S.read_shift(2)),
          I == 12 && D.qpro && (S.l += 2),
          (A.e.c = S.read_shift(2)),
          (A.e.r = S.read_shift(2)),
          I == 12 && D.qpro && (S.l += 2),
          A.s.c == 65535 && (A.s.c = A.e.c = A.s.r = A.e.r = 0),
          A)
    }
    function l(S) {
      var I = L(8)
      return (
        I.write_shift(2, S.s.c),
        I.write_shift(2, S.s.r),
        I.write_shift(2, S.e.c),
        I.write_shift(2, S.e.r),
        I
      )
    }
    function f(S, I, D) {
      var A = [{ c: 0, r: 0 }, { t: 'n', v: 0 }, 0, 0]
      return (
        D.qpro && D.vers != 20768
          ? ((A[0].c = S.read_shift(1)),
            (A[3] = S.read_shift(1)),
            (A[0].r = S.read_shift(2)),
            (S.l += 2))
          : ((A[2] = S.read_shift(1)), (A[0].c = S.read_shift(2)), (A[0].r = S.read_shift(2))),
        A
      )
    }
    function c(S, I, D) {
      var A = S.l + I,
        Y = f(S, I, D)
      if (((Y[1].t = 's'), D.vers == 20768)) {
        S.l++
        var ce = S.read_shift(1)
        return (Y[1].v = S.read_shift(ce, 'utf8')), Y
      }
      return D.qpro && S.l++, (Y[1].v = S.read_shift(A - S.l, 'cstr')), Y
    }
    function u(S, I, D) {
      var A = L(7 + D.length)
      A.write_shift(1, 255), A.write_shift(2, I), A.write_shift(2, S), A.write_shift(1, 39)
      for (var Y = 0; Y < A.length; ++Y) {
        var ce = D.charCodeAt(Y)
        A.write_shift(1, ce >= 128 ? 95 : ce)
      }
      return A.write_shift(1, 0), A
    }
    function h(S, I, D) {
      var A = f(S, I, D)
      return (A[1].v = S.read_shift(2, 'i')), A
    }
    function p(S, I, D) {
      var A = L(7)
      return (
        A.write_shift(1, 255), A.write_shift(2, I), A.write_shift(2, S), A.write_shift(2, D, 'i'), A
      )
    }
    function m(S, I, D) {
      var A = f(S, I, D)
      return (A[1].v = S.read_shift(8, 'f')), A
    }
    function d(S, I, D) {
      var A = L(13)
      return (
        A.write_shift(1, 255), A.write_shift(2, I), A.write_shift(2, S), A.write_shift(8, D, 'f'), A
      )
    }
    function g(S, I, D) {
      var A = S.l + I,
        Y = f(S, I, D)
      if (((Y[1].v = S.read_shift(8, 'f')), D.qpro)) S.l = A
      else {
        var ce = S.read_shift(2)
        b(S.slice(S.l, S.l + ce), Y), (S.l += ce)
      }
      return Y
    }
    function y(S, I, D) {
      var A = I & 32768
      return (
        (I &= -32769),
        (I = (A ? S : 0) + (I >= 8192 ? I - 16384 : I)),
        (A ? '' : '$') + (D ? Ft(I) : St(I))
      )
    }
    var O = {
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
      F = [
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
    function b(S, I) {
      Yt(S, 0)
      for (var D = [], A = 0, Y = '', ce = '', ue = '', le = ''; S.l < S.length; ) {
        var re = S[S.l++]
        switch (re) {
          case 0:
            D.push(S.read_shift(8, 'f'))
            break
          case 1:
            ;(ce = y(I[0].c, S.read_shift(2), !0)),
              (Y = y(I[0].r, S.read_shift(2), !1)),
              D.push(ce + Y)
            break
          case 2:
            {
              var Pe = y(I[0].c, S.read_shift(2), !0),
                Te = y(I[0].r, S.read_shift(2), !1)
              ;(ce = y(I[0].c, S.read_shift(2), !0)),
                (Y = y(I[0].r, S.read_shift(2), !1)),
                D.push(Pe + Te + ':' + ce + Y)
            }
            break
          case 3:
            if (S.l < S.length) {
              console.error('WK1 premature formula end')
              return
            }
            break
          case 4:
            D.push('(' + D.pop() + ')')
            break
          case 5:
            D.push(S.read_shift(2))
            break
          case 6:
            {
              for (var mt = ''; (re = S[S.l++]); ) mt += String.fromCharCode(re)
              D.push('"' + mt.replace(/"/g, '""') + '"')
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
            ;(le = D.pop()),
              (ue = D.pop()),
              D.push(['AND', 'OR'][re - 20] + '(' + ue + ',' + le + ')')
            break
          default:
            if (re < 32 && F[re]) (le = D.pop()), (ue = D.pop()), D.push(ue + F[re] + le)
            else if (O[re]) {
              if (((A = O[re][1]), A == 69 && (A = S[S.l++]), A > D.length)) {
                console.error(
                  'WK1 bad formula parse 0x' + re.toString(16) + ':|' + D.join('|') + '|'
                )
                return
              }
              var Oe = D.slice(-A)
              ;(D.length -= A), D.push(O[re][0] + '(' + Oe.join(',') + ')')
            } else
              return re <= 7
                ? console.error('WK1 invalid opcode ' + re.toString(16))
                : re <= 24
                ? console.error('WK1 unsupported op ' + re.toString(16))
                : re <= 30
                ? console.error('WK1 invalid opcode ' + re.toString(16))
                : re <= 115
                ? console.error('WK1 unsupported function opcode ' + re.toString(16))
                : console.error('WK1 unrecognized opcode ' + re.toString(16))
        }
      }
      D.length == 1
        ? (I[1].f = '' + D[0])
        : console.error('WK1 bad formula parse |' + D.join('|') + '|')
    }
    function J(S) {
      var I = [{ c: 0, r: 0 }, { t: 'n', v: 0 }, 0]
      return (I[0].r = S.read_shift(2)), (I[3] = S[S.l++]), (I[0].c = S[S.l++]), I
    }
    function ae(S, I) {
      var D = J(S)
      return (D[1].t = 's'), (D[1].v = S.read_shift(I - 4, 'cstr')), D
    }
    function C(S, I, D, A) {
      var Y = L(6 + A.length)
      Y.write_shift(2, S), Y.write_shift(1, D), Y.write_shift(1, I), Y.write_shift(1, 39)
      for (var ce = 0; ce < A.length; ++ce) {
        var ue = A.charCodeAt(ce)
        Y.write_shift(1, ue >= 128 ? 95 : ue)
      }
      return Y.write_shift(1, 0), Y
    }
    function W(S, I) {
      var D = J(S)
      D[1].v = S.read_shift(2)
      var A = D[1].v >> 1
      if (D[1].v & 1)
        switch (A & 7) {
          case 0:
            A = (A >> 3) * 5e3
            break
          case 1:
            A = (A >> 3) * 500
            break
          case 2:
            A = (A >> 3) / 20
            break
          case 3:
            A = (A >> 3) / 200
            break
          case 4:
            A = (A >> 3) / 2e3
            break
          case 5:
            A = (A >> 3) / 2e4
            break
          case 6:
            A = (A >> 3) / 16
            break
          case 7:
            A = (A >> 3) / 64
            break
        }
      return (D[1].v = A), D
    }
    function M(S, I) {
      var D = J(S),
        A = S.read_shift(4),
        Y = S.read_shift(4),
        ce = S.read_shift(2)
      if (ce == 65535)
        return (
          A === 0 && Y === 3221225472
            ? ((D[1].t = 'e'), (D[1].v = 15))
            : A === 0 && Y === 3489660928
            ? ((D[1].t = 'e'), (D[1].v = 42))
            : (D[1].v = 0),
          D
        )
      var ue = ce & 32768
      return (
        (ce = (ce & 32767) - 16446),
        (D[1].v = (1 - ue * 2) * (Y * Math.pow(2, ce + 32) + A * Math.pow(2, ce))),
        D
      )
    }
    function j(S, I, D, A) {
      var Y = L(14)
      if ((Y.write_shift(2, S), Y.write_shift(1, D), Y.write_shift(1, I), A == 0))
        return Y.write_shift(4, 0), Y.write_shift(4, 0), Y.write_shift(2, 65535), Y
      var ce = 0,
        ue = 0,
        le = 0,
        re = 0
      return (
        A < 0 && ((ce = 1), (A = -A)),
        (ue = Math.log2(A) | 0),
        (A /= Math.pow(2, ue - 31)),
        (re = A >>> 0),
        (re & 2147483648) == 0 && ((A /= 2), ++ue, (re = A >>> 0)),
        (A -= re),
        (re |= 2147483648),
        (re >>>= 0),
        (A *= Math.pow(2, 32)),
        (le = A >>> 0),
        Y.write_shift(4, le),
        Y.write_shift(4, re),
        (ue += 16383 + (ce ? 32768 : 0)),
        Y.write_shift(2, ue),
        Y
      )
    }
    function V(S, I) {
      var D = M(S)
      return (S.l += I - 14), D
    }
    function G(S, I) {
      var D = J(S),
        A = S.read_shift(4)
      return (D[1].v = A >> 6), D
    }
    function ne(S, I) {
      var D = J(S),
        A = S.read_shift(8, 'f')
      return (D[1].v = A), D
    }
    function Ne(S, I) {
      var D = ne(S)
      return (S.l += I - 10), D
    }
    function me(S, I) {
      return S[S.l + I - 1] == 0 ? S.read_shift(I, 'cstr') : ''
    }
    function st(S, I) {
      var D = S[S.l++]
      D > I - 1 && (D = I - 1)
      for (var A = ''; A.length < D; ) A += String.fromCharCode(S[S.l++])
      return A
    }
    function ee(S, I, D) {
      if (!(!D.qpro || I < 21)) {
        var A = S.read_shift(1)
        ;(S.l += 17), (S.l += 1), (S.l += 2)
        var Y = S.read_shift(I - 21, 'cstr')
        return [A, Y]
      }
    }
    function Ee(S, I) {
      for (var D = {}, A = S.l + I; S.l < A; ) {
        var Y = S.read_shift(2)
        if (Y == 14e3) {
          for (D[Y] = [0, ''], D[Y][0] = S.read_shift(2); S[S.l]; )
            (D[Y][1] += String.fromCharCode(S[S.l])), S.l++
          S.l++
        }
      }
      return D
    }
    function Se(S, I) {
      var D = L(5 + S.length)
      D.write_shift(2, 14e3), D.write_shift(2, I)
      for (var A = 0; A < S.length; ++A) {
        var Y = S.charCodeAt(A)
        D[D.l++] = Y > 127 ? 95 : Y
      }
      return (D[D.l++] = 0), D
    }
    var ot = {
        0: { n: 'BOF', f: rh },
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
        16: { n: 'FORMULA', f: g },
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
        22: { n: 'LABEL16', f: ae },
        23: { n: 'NUMBER17', f: M },
        24: { n: 'NUMBER18', f: W },
        25: { n: 'FORMULA19', f: V },
        26: { n: 'FORMULA1A' },
        27: { n: 'XFORMAT', f: Ee },
        28: { n: 'DTLABELMISC' },
        29: { n: 'DTLABELCELL' },
        30: { n: 'GRAPHWINDOW' },
        31: { n: 'CPA' },
        32: { n: 'LPLAUTO' },
        33: { n: 'QUERY' },
        34: { n: 'HIDDENSHEET' },
        35: { n: '??' },
        37: { n: 'NUMBER25', f: G },
        38: { n: '??' },
        39: { n: 'NUMBER27', f: ne },
        40: { n: 'FORMULA28', f: Ne },
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
        1537: { n: 'SHEETINFOQP', f: ee },
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
    return {
      sheet_to_wk1: n,
      book_to_wk3: a,
      to_workbook: t
    }
  })(),
  $E = /^\s|\s$|[\t\n\r]/
function fh(e, t) {
  if (!t.bookSST) return ''
  var r = [it]
  r[r.length] = Z('sst', null, {
    xmlns: aa[0],
    count: e.Count,
    uniqueCount: e.Unique
  })
  for (var n = 0; n != e.length; ++n)
    if (e[n] != null) {
      var a = e[n],
        i = '<si>'
      a.r
        ? (i += a.r)
        : ((i += '<t'),
          a.t || (a.t = ''),
          a.t.match($E) && (i += ' xml:space="preserve"'),
          (i += '>' + be(a.t) + '</t>')),
        (i += '</si>'),
        (r[r.length] = i)
    }
  return r.length > 2 && ((r[r.length] = '</sst>'), (r[1] = r[1].replace('/>', '>'))), r.join('')
}
function YE(e) {
  return [e.read_shift(4), e.read_shift(4)]
}
function jE(e, t) {
  return t || (t = L(8)), t.write_shift(4, e.Count), t.write_shift(4, e.Unique), t
}
var VE = MT
function GE(e) {
  var t = Bt()
  H(t, 159, jE(e))
  for (var r = 0; r < e.length; ++r) H(t, 19, VE(e[r]))
  return H(t, 160), t.end()
}
function zE(e) {
  for (var t = [], r = e.split(''), n = 0; n < r.length; ++n) t[n] = r[n].charCodeAt(0)
  return t
}
function lh(e) {
  var t = 0,
    r,
    n = zE(e),
    a = n.length + 1,
    i,
    s,
    o,
    l,
    f
  for (r = Tn(a), r[0] = n.length, i = 1; i != a; ++i) r[i] = n[i - 1]
  for (i = a - 1; i >= 0; --i)
    (s = r[i]), (o = (t & 16384) === 0 ? 0 : 1), (l = (t << 1) & 32767), (f = o | l), (t = f ^ s)
  return t ^ 52811
}
var XE = /* @__PURE__ */ (function () {
  function e(a, i) {
    switch (i.type) {
      case 'base64':
        return t(Lr(a), i)
      case 'binary':
        return t(a, i)
      case 'buffer':
        return t(ke && Buffer.isBuffer(a) ? a.toString('binary') : ti(a), i)
      case 'array':
        return t(ys(a), i)
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
              var g = c.slice(p, h.lastIndex - m[0].length)
              if ((g[0] == ' ' && (g = g.slice(1)), ++d, g.length)) {
                var y = { v: g, t: 's' }
                Array.isArray(o) ? (o[u][d] = y) : (o[Le({ r: u, c: d })] = y)
              }
              break
          }
          p = h.lastIndex
        }
        d > f.e.c && (f.e.c = d)
      }),
      (o['!ref'] = at(f)),
      o
    )
  }
  function r(a, i) {
    return Fn(e(a, i), i)
  }
  function n(a) {
    for (
      var i = ['{\\rtf1\\ansi'], s = Ge(a['!ref']), o, l = Array.isArray(a), f = s.s.r;
      f <= s.e.r;
      ++f
    ) {
      i.push('\\trowd\\trautofit1')
      for (var c = s.s.c; c <= s.e.c; ++c) i.push('\\cellx' + (c + 1))
      for (i.push('\\pard\\intbl'), c = s.s.c; c <= s.e.c; ++c) {
        var u = Le({ r: f, c })
        ;(o = l ? (a[f] || [])[c] : a[u]),
          !(!o || (o.v == null && (!o.f || o.F))) &&
            (i.push(' ' + (o.w || (Ur(o), o.w))), i.push('\\cell'))
      }
      i.push('\\pard\\intbl\\row')
    }
    return i.join('') + '}'
  }
  return {
    to_workbook: r,
    to_sheet: e,
    from_sheet: n
  }
})()
function dl(e) {
  for (var t = 0, r = 1; t != 3; ++t) r = r * 256 + (e[t] > 255 ? 255 : e[t] < 0 ? 0 : e[t])
  return r.toString(16).toUpperCase().slice(1)
}
var KE = 6,
  Ir = KE
function Ji(e) {
  return Math.floor((e + Math.round(128 / Ir) / 256) * Ir)
}
function Zi(e) {
  return Math.floor(((e - 5) / Ir) * 100 + 0.5) / 100
}
function y0(e) {
  return Math.round(((e * Ir + 5) / Ir) * 256) / 256
}
function Fo(e) {
  e.width
    ? ((e.wpx = Ji(e.width)), (e.wch = Zi(e.wpx)), (e.MDW = Ir))
    : e.wpx
    ? ((e.wch = Zi(e.wpx)), (e.width = y0(e.wch)), (e.MDW = Ir))
    : typeof e.wch == 'number' && ((e.width = y0(e.wch)), (e.wpx = Ji(e.width)), (e.MDW = Ir)),
    e.customWidth && delete e.customWidth
}
var qE = 96,
  ch = qE
function Qi(e) {
  return (e * 96) / ch
}
function uh(e) {
  return (e * ch) / 96
}
function JE(e) {
  var t = ['<numFmts>']
  return (
    [
      [5, 8],
      [23, 26],
      [41, 44],
      [50, 392]
    ].forEach(function (r) {
      for (var n = r[0]; n <= r[1]; ++n)
        e[n] != null && (t[t.length] = Z('numFmt', null, { numFmtId: n, formatCode: be(e[n]) }))
    }),
    t.length === 1
      ? ''
      : ((t[t.length] = '</numFmts>'),
        (t[0] = Z('numFmts', null, { count: t.length - 2 }).replace('/>', '>')),
        t.join(''))
  )
}
function ZE(e) {
  var t = []
  return (
    (t[t.length] = Z('cellXfs', null)),
    e.forEach(function (r) {
      t[t.length] = Z('xf', null, r)
    }),
    (t[t.length] = '</cellXfs>'),
    t.length === 2
      ? ''
      : ((t[0] = Z('cellXfs', null, { count: t.length - 2 }).replace('/>', '>')), t.join(''))
  )
}
function hh(e, t) {
  var r = [
      it,
      Z('styleSheet', null, {
        xmlns: aa[0],
        'xmlns:vt': dt.vt
      })
    ],
    n
  return (
    e.SSF && (n = JE(e.SSF)) != null && (r[r.length] = n),
    (r[r.length] =
      '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>'),
    (r[r.length] =
      '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>'),
    (r[r.length] =
      '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>'),
    (r[r.length] =
      '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>'),
    (n = ZE(t.cellXfs)) && (r[r.length] = n),
    (r[r.length] =
      '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>'),
    (r[r.length] = '<dxfs count="0"/>'),
    (r[r.length] =
      '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>'),
    r.length > 2 && ((r[r.length] = '</styleSheet>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  )
}
function QE(e, t) {
  var r = e.read_shift(2),
    n = Dt(e)
  return [r, n]
}
function eS(e, t, r) {
  r || (r = L(6 + 4 * t.length)), r.write_shift(2, e), xt(t, r)
  var n = r.length > r.l ? r.slice(0, r.l) : r
  return r.l == null && (r.l = r.length), n
}
function tS(e, t, r) {
  var n = {}
  n.sz = e.read_shift(2) / 20
  var a = $T(e)
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
  switch ((l > 0 && (n.charset = l), e.l++, (n.color = HT(e)), e.read_shift(1))) {
    case 1:
      n.scheme = 'major'
      break
    case 2:
      n.scheme = 'minor'
      break
  }
  return (n.name = Dt(e)), n
}
function rS(e, t) {
  t || (t = L(25 + 4 * 32)),
    t.write_shift(2, e.sz * 20),
    YT(e, t),
    t.write_shift(2, e.bold ? 700 : 400)
  var r = 0
  e.vertAlign == 'superscript' ? (r = 1) : e.vertAlign == 'subscript' && (r = 2),
    t.write_shift(2, r),
    t.write_shift(1, e.underline || 0),
    t.write_shift(1, e.family || 0),
    t.write_shift(1, e.charset || 0),
    t.write_shift(1, 0),
    Ki(e.color, t)
  var n = 0
  return (
    e.scheme == 'major' && (n = 1),
    e.scheme == 'minor' && (n = 2),
    t.write_shift(1, n),
    xt(e.name, t),
    t.length > t.l ? t.slice(0, t.l) : t
  )
}
var nS = [
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
  Ks,
  aS = vr
function pl(e, t) {
  t || (t = L(4 * 3 + 8 * 7 + 16 * 1)), Ks || (Ks = xo(nS))
  var r = Ks[e.patternType]
  r == null && (r = 40), t.write_shift(4, r)
  var n = 0
  if (r != 40) for (Ki({ auto: 1 }, t), Ki({ auto: 1 }, t); n < 12; ++n) t.write_shift(4, 0)
  else {
    for (; n < 4; ++n) t.write_shift(4, 0)
    for (; n < 12; ++n) t.write_shift(4, 0)
  }
  return t.length > t.l ? t.slice(0, t.l) : t
}
function iS(e, t) {
  var r = e.l + t,
    n = e.read_shift(2),
    a = e.read_shift(2)
  return (e.l = r), { ixfe: n, numFmtId: a }
}
function dh(e, t, r) {
  r || (r = L(16)),
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
function _a(e, t) {
  return (
    t || (t = L(10)),
    t.write_shift(1, 0),
    t.write_shift(1, 0),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t
  )
}
var sS = vr
function oS(e, t) {
  return (
    t || (t = L(51)),
    t.write_shift(1, 0),
    _a(null, t),
    _a(null, t),
    _a(null, t),
    _a(null, t),
    _a(null, t),
    t.length > t.l ? t.slice(0, t.l) : t
  )
}
function fS(e, t) {
  return (
    t || (t = L(12 + 4 * 10)),
    t.write_shift(4, e.xfId),
    t.write_shift(2, 1),
    t.write_shift(1, +e.builtinId),
    t.write_shift(1, 0),
    Xi(e.name || '', t),
    t.length > t.l ? t.slice(0, t.l) : t
  )
}
function lS(e, t, r) {
  var n = L(2052)
  return n.write_shift(4, e), Xi(t, n), Xi(r, n), n.length > n.l ? n.slice(0, n.l) : n
}
function cS(e, t) {
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
        (H(e, 615, fr(r)),
        [
          [5, 8],
          [23, 26],
          [41, 44],
          [50, 392]
        ].forEach(function (n) {
          for (var a = n[0]; a <= n[1]; ++a) t[a] != null && H(e, 44, eS(a, t[a]))
        }),
        H(e, 616))
  }
}
function uS(e) {
  var t = 1
  H(e, 611, fr(t)),
    H(
      e,
      43,
      rS({
        sz: 12,
        color: { theme: 1 },
        name: 'Calibri',
        family: 2,
        scheme: 'minor'
      })
    ),
    H(e, 612)
}
function hS(e) {
  var t = 2
  H(e, 603, fr(t)),
    H(e, 45, pl({ patternType: 'none' })),
    H(e, 45, pl({ patternType: 'gray125' })),
    H(e, 604)
}
function dS(e) {
  var t = 1
  H(e, 613, fr(t)), H(e, 46, oS()), H(e, 614)
}
function pS(e) {
  var t = 1
  H(e, 626, fr(t)),
    H(
      e,
      47,
      dh(
        {
          numFmtId: 0,
          fontId: 0,
          fillId: 0,
          borderId: 0
        },
        65535
      )
    ),
    H(e, 627)
}
function xS(e, t) {
  H(e, 617, fr(t.length)),
    t.forEach(function (r) {
      H(e, 47, dh(r, 0))
    }),
    H(e, 618)
}
function mS(e) {
  var t = 1
  H(e, 619, fr(t)),
    H(
      e,
      48,
      fS({
        xfId: 0,
        builtinId: 0,
        name: 'Normal'
      })
    ),
    H(e, 620)
}
function _S(e) {
  var t = 0
  H(e, 505, fr(t)), H(e, 506)
}
function gS(e) {
  var t = 0
  H(e, 508, lS(t, 'TableStyleMedium9', 'PivotStyleMedium4')), H(e, 509)
}
function vS(e, t) {
  var r = Bt()
  return (
    H(r, 278),
    cS(r, e.SSF),
    uS(r),
    hS(r),
    dS(r),
    pS(r),
    xS(r, t.cellXfs),
    mS(r),
    _S(r),
    gS(r),
    H(r, 279),
    r.end()
  )
}
function ph(e, t) {
  if (t && t.themeXLSX) return t.themeXLSX
  if (e && typeof e.raw == 'string') return e.raw
  var r = [it]
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
function wS(e, t) {
  return {
    flags: e.read_shift(4),
    version: e.read_shift(4),
    name: Dt(e)
  }
}
function TS(e) {
  var t = L(12 + 2 * e.name.length)
  return t.write_shift(4, e.flags), t.write_shift(4, e.version), xt(e.name, t), t.slice(0, t.l)
}
function ES(e) {
  for (var t = [], r = e.read_shift(4); r-- > 0; ) t.push([e.read_shift(4), e.read_shift(4)])
  return t
}
function SS(e) {
  var t = L(4 + 8 * e.length)
  t.write_shift(4, e.length)
  for (var r = 0; r < e.length; ++r) t.write_shift(4, e[r][0]), t.write_shift(4, e[r][1])
  return t
}
function yS(e, t) {
  var r = L(8 + 2 * t.length)
  return r.write_shift(4, e), xt(t, r), r.slice(0, r.l)
}
function AS(e) {
  return (e.l += 4), e.read_shift(4) != 0
}
function OS(e, t) {
  var r = L(8)
  return r.write_shift(4, e), r.write_shift(4, t ? 1 : 0), r
}
function FS() {
  var e = Bt()
  return (
    H(e, 332),
    H(e, 334, fr(1)),
    H(
      e,
      335,
      TS({
        name: 'XLDAPR',
        version: 12e4,
        flags: 3496657072
      })
    ),
    H(e, 336),
    H(e, 339, yS(1, 'XLDAPR')),
    H(e, 52),
    H(e, 35, fr(514)),
    H(e, 4096, fr(0)),
    H(e, 4097, Jt(1)),
    H(e, 36),
    H(e, 53),
    H(e, 340),
    H(e, 337, OS(1, !0)),
    H(e, 51, SS([[1, 0]])),
    H(e, 338),
    H(e, 333),
    e.end()
  )
}
function xh() {
  var e = [it]
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
function DS(e) {
  var t = {}
  t.i = e.read_shift(4)
  var r = {}
  ;(r.r = e.read_shift(4)), (r.c = e.read_shift(4)), (t.r = Le(r))
  var n = e.read_shift(1)
  return n & 2 && (t.l = '1'), n & 8 && (t.a = '1'), t
}
var $n = 1024
function mh(e, t) {
  for (
    var r = [21600, 21600],
      n = ['m0,0l0', r[1], r[0], r[1], r[0], '0xe'].join(','),
      a = [
        Z('xml', null, {
          'xmlns:v': Vt.v,
          'xmlns:o': Vt.o,
          'xmlns:x': Vt.x,
          'xmlns:mv': Vt.mv
        }).replace(/\/>/, '>'),
        Z('o:shapelayout', Z('o:idmap', null, { 'v:ext': 'edit', data: e }), { 'v:ext': 'edit' }),
        Z(
          'v:shapetype',
          [
            Z('v:stroke', null, { joinstyle: 'miter' }),
            Z('v:path', null, { gradientshapeok: 't', 'o:connecttype': 'rect' })
          ].join(''),
          { id: '_x0000_t202', 'o:spt': 202, coordsize: r.join(','), path: n }
        )
      ];
    $n < e * 1e3;

  )
    $n += 1e3
  return (
    t.forEach(function (i) {
      var s = pt(i[0]),
        o = { color2: '#BEFF82', type: 'gradient' }
      o.type == 'gradient' && (o.angle = '-180')
      var l =
          o.type == 'gradient'
            ? Z('o:fill', null, { type: 'gradientUnscaled', 'v:ext': 'view' })
            : null,
        f = Z('v:fill', l, o),
        c = { on: 't', obscured: 't' }
      ++$n,
        (a = a.concat([
          '<v:shape' +
            ja({
              id: '_x0000_s' + $n,
              type: '#_x0000_t202',
              style:
                'position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10' +
                (i[1].hidden ? ';visibility:hidden' : ''),
              fillcolor: '#ECFAD4',
              strokecolor: '#edeaa1'
            }) +
            '>',
          f,
          Z('v:shadow', null, c),
          Z('v:path', null, { 'o:connecttype': 'none' }),
          '<v:textbox><div style="text-align:left"></div></v:textbox>',
          '<x:ClientData ObjectType="Note">',
          '<x:MoveWithCells/>',
          '<x:SizeWithCells/>',
          Et('x:Anchor', [s.c + 1, 0, s.r + 1, 0, s.c + 3, 20, s.r + 5, 20].join(',')),
          Et('x:AutoFill', 'False'),
          Et('x:Row', String(s.r)),
          Et('x:Column', String(s.c)),
          i[1].hidden ? '' : '<x:Visible/>',
          '</x:ClientData>',
          '</v:shape>'
        ]))
    }),
    a.push('</xml>'),
    a.join('')
  )
}
function _h(e) {
  var t = [it, Z('comments', null, { xmlns: aa[0] })],
    r = []
  return (
    t.push('<authors>'),
    e.forEach(function (n) {
      n[1].forEach(function (a) {
        var i = be(a.a)
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
              l.a && (a = r.indexOf(be(l.a))), i.push(l.t || '')
            }),
        t.push('<comment ref="' + n[0] + '" authorId="' + a + '"><text>'),
        i.length <= 1)
      )
        t.push(Et('t', be(i[0] || '')))
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
        t.push(Et('t', be(s)))
      }
      t.push('</text></comment>')
    }),
    t.push('</commentList>'),
    t.length > 2 && ((t[t.length] = '</comments>'), (t[1] = t[1].replace('/>', '>'))),
    t.join('')
  )
}
function CS(e, t, r) {
  var n = [it, Z('ThreadedComments', null, { xmlns: dt.TCMNT }).replace(/[\/]>/, '>')]
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
          n.push(Z('threadedComment', Et('text', s.t || ''), l))
      })
    }),
    n.push('</ThreadedComments>'),
    n.join('')
  )
}
function RS(e) {
  var t = [
    it,
    Z('personList', null, {
      xmlns: dt.TCMNT,
      'xmlns:x': aa[0]
    }).replace(/[\/]>/, '>')
  ]
  return (
    e.forEach(function (r, n) {
      t.push(
        Z('person', null, {
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
function kS(e) {
  var t = {}
  t.iauthor = e.read_shift(4)
  var r = kn(e)
  return (t.rfx = r.s), (t.ref = Le(r.s)), (e.l += 16), t
}
function NS(e, t) {
  return (
    t == null && (t = L(36)),
    t.write_shift(4, e[1].iauthor),
    sa(e[0], t),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t
  )
}
var PS = Dt
function IS(e) {
  return xt(e.slice(0, 54))
}
function MS(e) {
  var t = Bt(),
    r = []
  return (
    H(t, 628),
    H(t, 630),
    e.forEach(function (n) {
      n[1].forEach(function (a) {
        r.indexOf(a.a) > -1 || (r.push(a.a.slice(0, 54)), H(t, 632, IS(a.a)))
      })
    }),
    H(t, 631),
    H(t, 633),
    e.forEach(function (n) {
      n[1].forEach(function (a) {
        a.iauthor = r.indexOf(a.a)
        var i = { s: pt(n[0]), e: pt(n[0]) }
        H(t, 635, NS([i, a])),
          a.t && a.t.length > 0 && H(t, 637, LT(a)),
          H(t, 636),
          delete a.iauthor
      })
    }),
    H(t, 634),
    H(t, 629),
    t.end()
  )
}
function bS(e, t) {
  t.FullPaths.forEach(function (r, n) {
    if (n != 0) {
      var a = r.replace(/[^\/]*[\/]/, '/_VBA_PROJECT_CUR/')
      a.slice(-1) !== '/' && Be.utils.cfb_add(e, a, t.FileIndex[n].content)
    }
  })
}
var gh = ['xlsb', 'xlsm', 'xlam', 'biff8', 'xla'],
  LS = /* @__PURE__ */ (function () {
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
        a + (o ? '' : '$') + Ft(c) + (l ? '' : '$') + St(f)
      )
    }
    return function (a, i) {
      return (t = i), a.replace(e, r)
    }
  })(),
  Do =
    /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,
  Co = /* @__PURE__ */ (function () {
    return function (t, r) {
      return t.replace(Do, function (n, a, i, s, o, l) {
        var f = Eo(s) - (i ? 0 : r.c),
          c = To(l) - (o ? 0 : r.r),
          u = c == 0 ? '' : o ? c + 1 : '[' + c + ']',
          h = f == 0 ? '' : i ? f + 1 : '[' + f + ']'
        return a + 'R' + u + 'C' + h
      })
    }
  })()
function BS(e, t) {
  return e.replace(Do, function (r, n, a, i, s, o) {
    return n + (a == '$' ? a + i : Ft(Eo(i) + t.c)) + (s == '$' ? s + o : St(To(o) + t.r))
  })
}
function US(e) {
  return e.length != 1
}
function nt(e) {
  e.l += 1
}
function sn(e, t) {
  var r = e.read_shift(t == 1 ? 1 : 2)
  return [r & 16383, (r >> 14) & 1, (r >> 15) & 1]
}
function vh(e, t, r) {
  var n = 2
  if (r) {
    if (r.biff >= 2 && r.biff <= 5) return wh(e)
    r.biff == 12 && (n = 4)
  }
  var a = e.read_shift(n),
    i = e.read_shift(n),
    s = sn(e, 2),
    o = sn(e, 2)
  return {
    s: { r: a, c: s[0], cRel: s[1], rRel: s[2] },
    e: { r: i, c: o[0], cRel: o[1], rRel: o[2] }
  }
}
function wh(e) {
  var t = sn(e, 2),
    r = sn(e, 2),
    n = e.read_shift(1),
    a = e.read_shift(1)
  return {
    s: { r: t[0], c: n, cRel: t[1], rRel: t[2] },
    e: { r: r[0], c: a, cRel: r[1], rRel: r[2] }
  }
}
function WS(e, t, r) {
  if (r.biff < 8) return wh(e)
  var n = e.read_shift(r.biff == 12 ? 4 : 2),
    a = e.read_shift(r.biff == 12 ? 4 : 2),
    i = sn(e, 2),
    s = sn(e, 2)
  return {
    s: { r: n, c: i[0], cRel: i[1], rRel: i[2] },
    e: { r: a, c: s[0], cRel: s[1], rRel: s[2] }
  }
}
function Th(e, t, r) {
  if (r && r.biff >= 2 && r.biff <= 5) return HS(e)
  var n = e.read_shift(r && r.biff == 12 ? 4 : 2),
    a = sn(e, 2)
  return { r: n, c: a[0], cRel: a[1], rRel: a[2] }
}
function HS(e) {
  var t = sn(e, 2),
    r = e.read_shift(1)
  return { r: t[0], c: r, cRel: t[1], rRel: t[2] }
}
function $S(e) {
  var t = e.read_shift(2),
    r = e.read_shift(2)
  return { r: t, c: r & 255, fQuoted: !!(r & 16384), cRel: r >> 15, rRel: r >> 15 }
}
function YS(e, t, r) {
  var n = r && r.biff ? r.biff : 8
  if (n >= 2 && n <= 5) return jS(e)
  var a = e.read_shift(n >= 12 ? 4 : 2),
    i = e.read_shift(2),
    s = (i & 16384) >> 14,
    o = (i & 32768) >> 15
  if (((i &= 16383), o == 1)) for (; a > 524287; ) a -= 1048576
  if (s == 1) for (; i > 8191; ) i = i - 16384
  return { r: a, c: i, cRel: s, rRel: o }
}
function jS(e) {
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
function VS(e, t, r) {
  var n = (e[e.l++] & 96) >> 5,
    a = vh(e, r.biff >= 2 && r.biff <= 5 ? 6 : 8, r)
  return [n, a]
}
function GS(e, t, r) {
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
  var s = vh(e, i, r)
  return [n, a, s]
}
function zS(e, t, r) {
  var n = (e[e.l++] & 96) >> 5
  return (e.l += r && r.biff > 8 ? 12 : r.biff < 8 ? 6 : 8), [n]
}
function XS(e, t, r) {
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
function KS(e, t, r) {
  var n = (e[e.l++] & 96) >> 5,
    a = WS(e, t - 1, r)
  return [n, a]
}
function qS(e, t, r) {
  var n = (e[e.l++] & 96) >> 5
  return (e.l += r.biff == 2 ? 6 : r.biff == 12 ? 14 : 7), [n]
}
function xl(e) {
  var t = e[e.l + 1] & 1,
    r = 1
  return (e.l += 4), [t, r]
}
function JS(e, t, r) {
  e.l += 2
  for (var n = e.read_shift(r && r.biff == 2 ? 1 : 2), a = [], i = 0; i <= n; ++i)
    a.push(e.read_shift(r && r.biff == 2 ? 1 : 2))
  return a
}
function ZS(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0
  return (e.l += 2), [n, e.read_shift(r && r.biff == 2 ? 1 : 2)]
}
function QS(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0
  return (e.l += 2), [n, e.read_shift(r && r.biff == 2 ? 1 : 2)]
}
function ey(e) {
  var t = e[e.l + 1] & 255 ? 1 : 0
  return (e.l += 2), [t, e.read_shift(2)]
}
function ty(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0
  return (e.l += r && r.biff == 2 ? 3 : 4), [n]
}
function Eh(e) {
  var t = e.read_shift(1),
    r = e.read_shift(1)
  return [t, r]
}
function ry(e) {
  return e.read_shift(2), Eh(e)
}
function ny(e) {
  return e.read_shift(2), Eh(e)
}
function ay(e, t, r) {
  var n = (e[e.l] & 96) >> 5
  e.l += 1
  var a = Th(e, 0, r)
  return [n, a]
}
function iy(e, t, r) {
  var n = (e[e.l] & 96) >> 5
  e.l += 1
  var a = YS(e, 0, r)
  return [n, a]
}
function sy(e, t, r) {
  var n = (e[e.l] & 96) >> 5
  e.l += 1
  var a = e.read_shift(2)
  r && r.biff == 5 && (e.l += 12)
  var i = Th(e, 0, r)
  return [n, a, i]
}
function oy(e, t, r) {
  var n = (e[e.l] & 96) >> 5
  e.l += 1
  var a = e.read_shift(r && r.biff <= 3 ? 1 : 2)
  return [o4[a], Ah[a], n]
}
function fy(e, t, r) {
  var n = e[e.l++],
    a = e.read_shift(1),
    i = r && r.biff <= 3 ? [n == 88 ? -1 : 0, e.read_shift(1)] : ly(e)
  return [a, (i[0] === 0 ? Ah : s4)[i[1]]]
}
function ly(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767]
}
function cy(e, t, r) {
  e.l += r && r.biff == 2 ? 3 : 4
}
function uy(e, t, r) {
  if ((e.l++, r && r.biff == 12)) return [e.read_shift(4, 'i'), 0]
  var n = e.read_shift(2),
    a = e.read_shift(r && r.biff == 2 ? 1 : 2)
  return [n, a]
}
function hy(e) {
  return e.l++, ii[e.read_shift(1)]
}
function dy(e) {
  return e.l++, e.read_shift(2)
}
function py(e) {
  return e.l++, e.read_shift(1) !== 0
}
function xy(e) {
  return e.l++, oa(e)
}
function my(e, t, r) {
  return e.l++, ah(e, t - 1, r)
}
function _y(e, t) {
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
      ;(r[1] = sE(e, 1) ? 'TRUE' : 'FALSE'), t != 12 && (e.l += 7)
      break
    case 37:
    case 16:
      ;(r[1] = ii[e[e.l]]), (e.l += t == 12 ? 4 : 8)
      break
    case 0:
      e.l += 8
      break
    case 1:
      r[1] = oa(e)
      break
    case 2:
      r[1] = cE(e, 0, { biff: t > 0 && t < 8 ? 2 : t })
      break
    default:
      throw new Error('Bad SerAr: ' + r[0])
  }
  return r
}
function gy(e, t, r) {
  for (var n = e.read_shift(r.biff == 12 ? 4 : 2), a = [], i = 0; i != n; ++i)
    a.push((r.biff == 12 ? kn : dE)(e))
  return a
}
function vy(e, t, r) {
  var n = 0,
    a = 0
  r.biff == 12
    ? ((n = e.read_shift(4)), (a = e.read_shift(4)))
    : ((a = 1 + e.read_shift(1)), (n = 1 + e.read_shift(2))),
    r.biff >= 2 && r.biff < 8 && (--n, --a == 0 && (a = 256))
  for (var i = 0, s = []; i != n && (s[i] = []); ++i)
    for (var o = 0; o != a; ++o) s[i][o] = _y(e, r.biff)
  return s
}
function wy(e, t, r) {
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
function Ty(e, t, r) {
  if (r.biff == 5) return Ey(e)
  var n = (e.read_shift(1) >>> 5) & 3,
    a = e.read_shift(2),
    i = e.read_shift(4)
  return [n, a, i]
}
function Ey(e) {
  var t = (e.read_shift(1) >>> 5) & 3,
    r = e.read_shift(2, 'i')
  e.l += 8
  var n = e.read_shift(2)
  return (e.l += 12), [t, r, n]
}
function Sy(e, t, r) {
  var n = (e.read_shift(1) >>> 5) & 3
  e.l += r && r.biff == 2 ? 3 : 4
  var a = e.read_shift(r && r.biff == 2 ? 1 : 2)
  return [n, a]
}
function yy(e, t, r) {
  var n = (e.read_shift(1) >>> 5) & 3,
    a = e.read_shift(r && r.biff == 2 ? 1 : 2)
  return [n, a]
}
function Ay(e, t, r) {
  var n = (e.read_shift(1) >>> 5) & 3
  return (e.l += 4), r.biff < 8 && e.l--, r.biff == 12 && (e.l += 2), [n]
}
function Oy(e, t, r) {
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
var Fy = vr,
  Dy = vr,
  Cy = vr
function si(e, t, r) {
  return (e.l += 2), [$S(e)]
}
function Ro(e) {
  return (e.l += 6), []
}
var Ry = si,
  ky = Ro,
  Ny = Ro,
  Py = si
function Sh(e) {
  return (e.l += 2), [rh(e), e.read_shift(2) & 1]
}
var Iy = si,
  My = Sh,
  by = Ro,
  Ly = si,
  By = si,
  Uy = [
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
function Wy(e) {
  e.l += 2
  var t = e.read_shift(2),
    r = e.read_shift(2),
    n = e.read_shift(4),
    a = e.read_shift(2),
    i = e.read_shift(2),
    s = Uy[(r >> 2) & 31]
  return { ixti: t, coltype: r & 3, rt: s, idx: n, c: a, C: i }
}
function Hy(e) {
  return (e.l += 2), [e.read_shift(4)]
}
function $y(e, t, r) {
  return (e.l += 5), (e.l += 2), (e.l += r.biff == 2 ? 1 : 4), ['PTGSHEET']
}
function Yy(e, t, r) {
  return (e.l += r.biff == 2 ? 4 : 5), ['PTGENDSHEET']
}
function jy(e) {
  var t = (e.read_shift(1) >>> 5) & 3,
    r = e.read_shift(2)
  return [t, r]
}
function Vy(e) {
  var t = (e.read_shift(1) >>> 5) & 3,
    r = e.read_shift(2)
  return [t, r]
}
function Gy(e) {
  return (e.l += 4), [0, 0]
}
var ml = {
    1: { n: 'PtgExp', f: uy },
    2: { n: 'PtgTbl', f: Cy },
    3: { n: 'PtgAdd', f: nt },
    4: { n: 'PtgSub', f: nt },
    5: { n: 'PtgMul', f: nt },
    6: { n: 'PtgDiv', f: nt },
    7: { n: 'PtgPower', f: nt },
    8: { n: 'PtgConcat', f: nt },
    9: { n: 'PtgLt', f: nt },
    10: { n: 'PtgLe', f: nt },
    11: { n: 'PtgEq', f: nt },
    12: { n: 'PtgGe', f: nt },
    13: { n: 'PtgGt', f: nt },
    14: { n: 'PtgNe', f: nt },
    15: { n: 'PtgIsect', f: nt },
    16: { n: 'PtgUnion', f: nt },
    17: { n: 'PtgRange', f: nt },
    18: { n: 'PtgUplus', f: nt },
    19: { n: 'PtgUminus', f: nt },
    20: { n: 'PtgPercent', f: nt },
    21: { n: 'PtgParen', f: nt },
    22: { n: 'PtgMissArg', f: nt },
    23: { n: 'PtgStr', f: my },
    26: { n: 'PtgSheet', f: $y },
    27: { n: 'PtgEndSheet', f: Yy },
    28: { n: 'PtgErr', f: hy },
    29: { n: 'PtgBool', f: py },
    30: { n: 'PtgInt', f: dy },
    31: { n: 'PtgNum', f: xy },
    32: { n: 'PtgArray', f: qS },
    33: { n: 'PtgFunc', f: oy },
    34: { n: 'PtgFuncVar', f: fy },
    35: { n: 'PtgName', f: wy },
    36: { n: 'PtgRef', f: ay },
    37: { n: 'PtgArea', f: VS },
    38: { n: 'PtgMemArea', f: Sy },
    39: { n: 'PtgMemErr', f: Fy },
    40: { n: 'PtgMemNoMem', f: Dy },
    41: { n: 'PtgMemFunc', f: yy },
    42: { n: 'PtgRefErr', f: Ay },
    43: { n: 'PtgAreaErr', f: zS },
    44: { n: 'PtgRefN', f: iy },
    45: { n: 'PtgAreaN', f: KS },
    46: { n: 'PtgMemAreaN', f: jy },
    47: { n: 'PtgMemNoMemN', f: Vy },
    57: { n: 'PtgNameX', f: Ty },
    58: { n: 'PtgRef3d', f: sy },
    59: { n: 'PtgArea3d', f: GS },
    60: { n: 'PtgRefErr3d', f: Oy },
    61: { n: 'PtgAreaErr3d', f: XS },
    255: {}
  },
  zy = {
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
  Xy = {
    1: { n: 'PtgElfLel', f: Sh },
    2: { n: 'PtgElfRw', f: Ly },
    3: { n: 'PtgElfCol', f: Ry },
    6: { n: 'PtgElfRwV', f: By },
    7: { n: 'PtgElfColV', f: Py },
    10: { n: 'PtgElfRadical', f: Iy },
    11: { n: 'PtgElfRadicalS', f: by },
    13: { n: 'PtgElfColS', f: ky },
    15: { n: 'PtgElfColSV', f: Ny },
    16: { n: 'PtgElfRadicalLel', f: My },
    25: { n: 'PtgList', f: Wy },
    29: { n: 'PtgSxName', f: Hy },
    255: {}
  },
  Ky = {
    0: { n: 'PtgAttrNoop', f: Gy },
    1: { n: 'PtgAttrSemi', f: ty },
    2: { n: 'PtgAttrIf', f: QS },
    4: { n: 'PtgAttrChoose', f: JS },
    8: { n: 'PtgAttrGoto', f: ZS },
    16: { n: 'PtgAttrSum', f: cy },
    32: { n: 'PtgAttrBaxcel', f: xl },
    33: { n: 'PtgAttrBaxcel', f: xl },
    64: { n: 'PtgAttrSpace', f: ry },
    65: { n: 'PtgAttrSpaceSemi', f: ny },
    128: { n: 'PtgAttrIfError', f: ey },
    255: {}
  }
function qy(e, t, r, n) {
  if (n.biff < 8) return vr(e, t)
  for (var a = e.l + t, i = [], s = 0; s !== r.length; ++s)
    switch (r[s][0]) {
      case 'PtgArray':
        ;(r[s][1] = vy(e, 0, n)), i.push(r[s][1])
        break
      case 'PtgMemArea':
        ;(r[s][2] = gy(e, r[s][1], n)), i.push(r[s][2])
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
  return (t = a - e.l), t !== 0 && i.push(vr(e, t)), i
}
function Jy(e, t, r) {
  for (var n = e.l + t, a, i, s = []; n != e.l; )
    (t = n - e.l),
      (i = e[e.l]),
      (a = ml[i] || ml[zy[i]]),
      (i === 24 || i === 25) && (a = (i === 24 ? Xy : Ky)[e[e.l + 1]]),
      !a || !a.f ? vr(e, t) : s.push([a.n, a.f(e, t, r)])
  return s
}
function Zy(e) {
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
var Qy = {
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
function e4(e, t) {
  if (!e && !(t && t.biff <= 5 && t.biff >= 2)) throw new Error('empty sheet name')
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e + "'" : e
}
function yh(e, t, r) {
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
function _l(e, t, r) {
  var n = yh(e, t, r)
  return n == '#REF' ? n : e4(n, r)
}
function Zn(e, t, r, n, a) {
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
  for (var d = -1, g = '', y = 0, O = e[0].length; y < O; ++y) {
    var F = e[0][y]
    switch (F[0]) {
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
              g = et(' ', e[0][d][1][1])
              break
            case 1:
              g = et('\r', e[0][d][1][1])
              break
            default:
              if (((g = ''), a.WTF)) throw new Error('Unexpected PtgAttrSpaceType ' + e[0][d][1][0])
          }
          ;(f = f + g), (d = -1)
        }
        o.push(f + Qy[F[0]] + l)
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
        ;(c = Na(F[1][1], s, a)), o.push(Pa(c, i))
        break
      case 'PtgRefN':
        ;(c = r ? Na(F[1][1], r, a) : F[1][1]), o.push(Pa(c, i))
        break
      case 'PtgRef3d':
        ;(u = F[1][1]), (c = Na(F[1][2], s, a)), (m = _l(n, u, a)), o.push(m + '!' + Pa(c, i))
        break
      case 'PtgFunc':
      case 'PtgFuncVar':
        var b = F[1][0],
          J = F[1][1]
        b || (b = 0), (b &= 127)
        var ae = b == 0 ? [] : o.slice(-b)
        ;(o.length -= b), J === 'User' && (J = ae.shift()), o.push(J + '(' + ae.join(',') + ')')
        break
      case 'PtgBool':
        o.push(F[1] ? 'TRUE' : 'FALSE')
        break
      case 'PtgInt':
        o.push(F[1])
        break
      case 'PtgNum':
        o.push(String(F[1]))
        break
      case 'PtgStr':
        o.push('"' + F[1].replace(/"/g, '""') + '"')
        break
      case 'PtgErr':
        o.push(F[1])
        break
      case 'PtgAreaN':
        ;(p = tl(F[1][1], r ? { s: r } : s, a)), o.push(zs(p, a))
        break
      case 'PtgArea':
        ;(p = tl(F[1][1], s, a)), o.push(zs(p, a))
        break
      case 'PtgArea3d':
        ;(u = F[1][1]), (p = F[1][2]), (m = _l(n, u, a)), o.push(m + '!' + zs(p, a))
        break
      case 'PtgAttrSum':
        o.push('SUM(' + o.pop() + ')')
        break
      case 'PtgAttrBaxcel':
      case 'PtgAttrSemi':
        break
      case 'PtgName':
        h = F[1][2]
        var C = (n.names || [])[h - 1] || (n[0] || [])[h],
          W = C ? C.Name : 'SH33TJSNAME' + String(h)
        W && W.slice(0, 6) == '_xlfn.' && !a.xlfn && (W = W.slice(6)), o.push(W)
        break
      case 'PtgNameX':
        var M = F[1][1]
        h = F[1][2]
        var j
        if (a.biff <= 5) M < 0 && (M = -M), n[M] && (j = n[M][h])
        else {
          var V = ''
          if (
            (((n[M] || [])[0] || [])[0] == 14849 ||
              (((n[M] || [])[0] || [])[0] == 1025
                ? n[M][h] && n[M][h].itab > 0 && (V = n.SheetNames[n[M][h].itab - 1] + '!')
                : (V = n.SheetNames[h - 1] + '!')),
            n[M] && n[M][h])
          )
            V += n[M][h].Name
          else if (n[0] && n[0][h]) V += n[0][h].Name
          else {
            var G = (yh(n, M, a) || '').split(';;')
            G[h - 1] ? (V = G[h - 1]) : (V += 'SH33TJSERRX')
          }
          o.push(V)
          break
        }
        j || (j = { Name: 'SH33TJSERRY' }), o.push(j.Name)
        break
      case 'PtgParen':
        var ne = '(',
          Ne = ')'
        if (d >= 0) {
          switch (((g = ''), e[0][d][1][0])) {
            case 2:
              ne = et(' ', e[0][d][1][1]) + ne
              break
            case 3:
              ne = et('\r', e[0][d][1][1]) + ne
              break
            case 4:
              Ne = et(' ', e[0][d][1][1]) + Ne
              break
            case 5:
              Ne = et('\r', e[0][d][1][1]) + Ne
              break
            default:
              if (a.WTF) throw new Error('Unexpected PtgAttrSpaceType ' + e[0][d][1][0])
          }
          d = -1
        }
        o.push(ne + o.pop() + Ne)
        break
      case 'PtgRefErr':
        o.push('#REF!')
        break
      case 'PtgRefErr3d':
        o.push('#REF!')
        break
      case 'PtgExp':
        c = { c: F[1][1], r: F[1][0] }
        var me = { c: r.c, r: r.r }
        if (n.sharedf[Le(c)]) {
          var st = n.sharedf[Le(c)]
          o.push(Zn(st, s, me, n, a))
        } else {
          var ee = !1
          for (l = 0; l != n.arrayf.length; ++l)
            if (
              ((f = n.arrayf[l]),
              !(c.c < f[0].s.c || c.c > f[0].e.c) && !(c.r < f[0].s.r || c.r > f[0].e.r))
            ) {
              o.push(Zn(f[1], s, me, n, a)), (ee = !0)
              break
            }
          ee || o.push(F[1])
        }
        break
      case 'PtgArray':
        o.push('{' + Zy(F[1]) + '}')
        break
      case 'PtgMemArea':
        break
      case 'PtgAttrSpace':
      case 'PtgAttrSpaceSemi':
        d = y
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
        o.push('Table' + F[1].idx + '[#' + F[1].rt + ']')
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
        throw new Error('Unrecognized Formula Token: ' + String(F))
      default:
        throw new Error('Unrecognized Formula Token: ' + String(F))
    }
    var Ee = ['PtgAttrSpace', 'PtgAttrSpaceSemi', 'PtgAttrGoto']
    if (a.biff != 3 && d >= 0 && Ee.indexOf(e[0][y][0]) == -1) {
      F = e[0][d]
      var Se = !0
      switch (F[1][0]) {
        case 4:
          Se = !1
        case 0:
          g = et(' ', F[1][1])
          break
        case 5:
          Se = !1
        case 1:
          g = et('\r', F[1][1])
          break
        default:
          if (((g = ''), a.WTF)) throw new Error('Unexpected PtgAttrSpaceType ' + F[1][0])
      }
      o.push((Se ? g : '') + o.pop() + (Se ? '' : g)), (d = -1)
    }
  }
  if (o.length > 1 && a.WTF) throw new Error('bad formula stack')
  return o[0]
}
function t4(e) {
  if (e == null) {
    var t = L(8)
    return (
      t.write_shift(1, 3),
      t.write_shift(1, 0),
      t.write_shift(2, 0),
      t.write_shift(2, 0),
      t.write_shift(2, 65535),
      t
    )
  } else if (typeof e == 'number') return En(e)
  return En(0)
}
function r4(e, t, r, n, a) {
  var i = Sn(t, r, a),
    s = t4(e.v),
    o = L(6),
    l = 33
  o.write_shift(2, l), o.write_shift(4, 0)
  for (var f = L(e.bf.length), c = 0; c < e.bf.length; ++c) f[c] = e.bf[c]
  var u = Tt([i, s, o, f])
  return u
}
function As(e, t, r) {
  var n = e.read_shift(4),
    a = Jy(e, n, r),
    i = e.read_shift(4),
    s = i > 0 ? qy(e, i, a, r) : null
  return [a, s]
}
var n4 = As,
  Os = As,
  a4 = As,
  i4 = As,
  s4 = {
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
  Ah = {
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
  o4 = {
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
function f4(e) {
  var t = 'of:=' + e.replace(Do, '$1[.$2$3$4$5]').replace(/\]:\[/g, ':')
  return t.replace(/;/g, '|').replace(/,/g, ';')
}
function l4(e) {
  return e.replace(/\./, '!')
}
var Ia = typeof Map < 'u'
function ko(e, t, r) {
  var n = 0,
    a = e.length
  if (r) {
    if (Ia ? r.has(t) : Object.prototype.hasOwnProperty.call(r, t)) {
      for (var i = Ia ? r.get(t) : r[t]; n < i.length; ++n)
        if (e[i[n]].t === t) return e.Count++, i[n]
    }
  } else for (; n < a; ++n) if (e[n].t === t) return e.Count++, n
  return (
    (e[a] = { t }),
    e.Count++,
    e.Unique++,
    r &&
      (Ia
        ? (r.has(t) || r.set(t, []), r.get(t).push(a))
        : (Object.prototype.hasOwnProperty.call(r, t) || (r[t] = []), r[t].push(a))),
    a
  )
}
function Fs(e, t) {
  var r = { min: e + 1, max: e + 1 },
    n = -1
  return (
    t.MDW && (Ir = t.MDW),
    t.width != null
      ? (r.customWidth = 1)
      : t.wpx != null
      ? (n = Zi(t.wpx))
      : t.wch != null && (n = t.wch),
    n > -1 ? ((r.width = y0(n)), (r.customWidth = 1)) : t.width != null && (r.width = t.width),
    t.hidden && (r.hidden = !0),
    t.level != null && (r.outlineLevel = r.level = t.level),
    r
  )
}
function Oh(e, t) {
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
function ln(e, t, r) {
  var n = r.revssf[t.z != null ? t.z : 'General'],
    a = 60,
    i = e.length
  if (n == null && r.ssf) {
    for (; a < 392; ++a)
      if (r.ssf[a] == null) {
        po(t.z, a), (r.ssf[a] = t.z), (r.revssf[t.z] = n = a)
        break
      }
  }
  for (a = 0; a != i; ++a) if (e[a].numFmtId === n) return a
  return (
    (e[i] = {
      numFmtId: n,
      fontId: 0,
      fillId: 0,
      borderId: 0,
      xfId: 0,
      applyNumberFormat: 1
    }),
    i
  )
}
function c4(e, t, r) {
  if (e && e['!ref']) {
    var n = Ge(e['!ref'])
    if (n.e.c < n.s.c || n.e.r < n.s.r) throw new Error('Bad range (' + r + '): ' + e['!ref'])
  }
}
function u4(e) {
  if (e.length === 0) return ''
  for (var t = '<mergeCells count="' + e.length + '">', r = 0; r != e.length; ++r)
    t += '<mergeCell ref="' + at(e[r]) + '"/>'
  return t + '</mergeCells>'
}
function h4(e, t, r, n, a) {
  var i = !1,
    s = {},
    o = null
  if (n.bookType !== 'xlsx' && t.vbaraw) {
    var l = t.SheetNames[r]
    try {
      t.Workbook && (l = t.Workbook.Sheets[r].CodeName || l)
    } catch {}
    ;(i = !0), (s.codeName = Rr(be(l)))
  }
  if (e && e['!outline']) {
    var f = { summaryBelow: 1, summaryRight: 1 }
    e['!outline'].above && (f.summaryBelow = 0),
      e['!outline'].left && (f.summaryRight = 0),
      (o = (o || '') + Z('outlinePr', null, f))
  }
  ;(!i && !o) || (a[a.length] = Z('sheetPr', o, s))
}
var d4 = ['objects', 'scenarios', 'selectLockedCells', 'selectUnlockedCells'],
  p4 = [
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
function x4(e) {
  var t = { sheet: 1 }
  return (
    d4.forEach(function (r) {
      e[r] != null && e[r] && (t[r] = '1')
    }),
    p4.forEach(function (r) {
      e[r] != null && !e[r] && (t[r] = '0')
    }),
    e.password && (t.password = lh(e.password).toString(16).toUpperCase()),
    Z('sheetProtection', null, t)
  )
}
function m4(e) {
  return Oh(e), Z('pageMargins', null, e)
}
function _4(e, t) {
  for (var r = ['<cols>'], n, a = 0; a != t.length; ++a)
    !(n = t[a]) || (r[r.length] = Z('col', null, Fs(a, n)))
  return (r[r.length] = '</cols>'), r.join('')
}
function g4(e, t, r, n) {
  var a = typeof e.ref == 'string' ? e.ref : at(e.ref)
  r.Workbook || (r.Workbook = { Sheets: [] }), r.Workbook.Names || (r.Workbook.Names = [])
  var i = r.Workbook.Names,
    s = zt(a)
  s.s.r == s.e.r && ((s.e.r = zt(t['!ref']).e.r), (a = at(s)))
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
    Z('autoFilter', null, { ref: a })
  )
}
function v4(e, t, r, n) {
  var a = { workbookViewId: '0' }
  return (
    (((n || {}).Workbook || {}).Views || [])[0] &&
      (a.rightToLeft = n.Workbook.Views[0].RTL ? '1' : '0'),
    Z('sheetViews', Z('sheetView', null, a), {})
  )
}
function w4(e, t, r, n) {
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
        a = ii[e.v]
        break
      case 'd':
        n && n.cellDates
          ? (a = Mt(e.v, -1).toISOString())
          : ((e = Wt(e)), (e.t = 'n'), (a = '' + (e.v = Ut(Mt(e.v))))),
          typeof e.z > 'u' && (e.z = Je[14])
        break
      default:
        a = e.v
        break
    }
  var o = Et('v', be(a)),
    l = { r: t },
    f = ln(n.cellXfs, e, n)
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
        ;(o = Et('v', '' + ko(n.Strings, e.v, n.revStrings))), (l.t = 's')
        break
      }
      l.t = 'str'
      break
  }
  if ((e.t != i && ((e.t = i), (e.v = s)), typeof e.f == 'string' && e.f)) {
    var c = e.F && e.F.slice(0, t.length) == t ? { t: 'array', ref: e.F } : null
    o = Z('f', be(e.f), c) + (e.v != null ? o : '')
  }
  return e.l && r['!links'].push([t, e.l]), e.D && (l.cm = 1), Z('c', o, l)
}
function T4(e, t, r, n) {
  var a = [],
    i = [],
    s = Ge(e['!ref']),
    o = '',
    l,
    f = '',
    c = [],
    u = 0,
    h = 0,
    p = e['!rows'],
    m = Array.isArray(e),
    d = { r: f },
    g,
    y = -1
  for (h = s.s.c; h <= s.e.c; ++h) c[h] = Ft(h)
  for (u = s.s.r; u <= s.e.r; ++u) {
    for (i = [], f = St(u), h = s.s.c; h <= s.e.c; ++h) {
      l = c[h] + f
      var O = m ? (e[u] || [])[h] : e[l]
      O !== void 0 && (o = w4(O, l, e, t)) != null && i.push(o)
    }
    ;(i.length > 0 || (p && p[u])) &&
      ((d = { r: f }),
      p &&
        p[u] &&
        ((g = p[u]),
        g.hidden && (d.hidden = 1),
        (y = -1),
        g.hpx ? (y = Qi(g.hpx)) : g.hpt && (y = g.hpt),
        y > -1 && ((d.ht = y), (d.customHeight = 1)),
        g.level && (d.outlineLevel = g.level)),
      (a[a.length] = Z('row', i.join(''), d)))
  }
  if (p)
    for (; u < p.length; ++u)
      p &&
        p[u] &&
        ((d = { r: u + 1 }),
        (g = p[u]),
        g.hidden && (d.hidden = 1),
        (y = -1),
        g.hpx ? (y = Qi(g.hpx)) : g.hpt && (y = g.hpt),
        y > -1 && ((d.ht = y), (d.customHeight = 1)),
        g.level && (d.outlineLevel = g.level),
        (a[a.length] = Z('row', '', d)))
  return a.join('')
}
function Fh(e, t, r, n) {
  var a = [
      it,
      Z('worksheet', null, {
        xmlns: aa[0],
        'xmlns:r': dt.r
      })
    ],
    i = r.SheetNames[e],
    s = 0,
    o = '',
    l = r.Sheets[i]
  l == null && (l = {})
  var f = l['!ref'] || 'A1',
    c = Ge(f)
  if (c.e.c > 16383 || c.e.r > 1048575) {
    if (t.WTF) throw new Error('Range ' + f + ' exceeds format limit A1:XFD1048576')
    ;(c.e.c = Math.min(c.e.c, 16383)), (c.e.r = Math.min(c.e.c, 1048575)), (f = at(c))
  }
  n || (n = {}), (l['!comments'] = [])
  var u = []
  h4(l, r, e, t, a),
    (a[a.length] = Z('dimension', null, { ref: f })),
    (a[a.length] = v4(l, t, e, r)),
    t.sheetFormat &&
      (a[a.length] = Z('sheetFormatPr', null, {
        defaultRowHeight: t.sheetFormat.defaultRowHeight || '16',
        baseColWidth: t.sheetFormat.baseColWidth || '10',
        outlineLevelRow: t.sheetFormat.outlineLevelRow || '7'
      })),
    l['!cols'] != null && l['!cols'].length > 0 && (a[a.length] = _4(l, l['!cols'])),
    (a[(s = a.length)] = '<sheetData/>'),
    (l['!links'] = []),
    l['!ref'] != null && ((o = T4(l, t)), o.length > 0 && (a[a.length] = o)),
    a.length > s + 1 && ((a[a.length] = '</sheetData>'), (a[s] = a[s].replace('/>', '>'))),
    l['!protect'] && (a[a.length] = x4(l['!protect'])),
    l['!autofilter'] != null && (a[a.length] = g4(l['!autofilter'], l, r, e)),
    l['!merges'] != null && l['!merges'].length > 0 && (a[a.length] = u4(l['!merges']))
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
            ((m = Me(n, -1, be(d[1].Target).replace(/#.*$/, ''), De.HLINK)),
            (p['r:id'] = 'rId' + m)),
          (h = d[1].Target.indexOf('#')) > -1 && (p.location = be(d[1].Target.slice(h + 1))),
          d[1].Tooltip && (p.tooltip = be(d[1].Tooltip)),
          (a[a.length] = Z('hyperlink', null, p)))
      }),
      (a[a.length] = '</hyperlinks>')),
    delete l['!links'],
    l['!margins'] != null && (a[a.length] = m4(l['!margins'])),
    (!t || t.ignoreEC || t.ignoreEC == null) &&
      (a[a.length] = Et(
        'ignoredErrors',
        Z('ignoredError', null, { numberStoredAsText: 1, sqref: f })
      )),
    u.length > 0 &&
      ((m = Me(n, -1, '../drawings/drawing' + (e + 1) + '.xml', De.DRAW)),
      (a[a.length] = Z('drawing', null, { 'r:id': 'rId' + m })),
      (l['!drawing'] = u)),
    l['!comments'].length > 0 &&
      ((m = Me(n, -1, '../drawings/vmlDrawing' + (e + 1) + '.vml', De.VML)),
      (a[a.length] = Z('legacyDrawing', null, { 'r:id': 'rId' + m })),
      (l['!legacy'] = m)),
    a.length > 1 && ((a[a.length] = '</worksheet>'), (a[1] = a[1].replace('/>', '>'))),
    a.join('')
  )
}
function E4(e, t) {
  var r = {},
    n = e.l + t
  ;(r.r = e.read_shift(4)), (e.l += 4)
  var a = e.read_shift(2)
  e.l += 1
  var i = e.read_shift(1)
  return (
    (e.l = n), i & 7 && (r.level = i & 7), i & 16 && (r.hidden = !0), i & 32 && (r.hpt = a / 20), r
  )
}
function S4(e, t, r) {
  var n = L(145),
    a = (r['!rows'] || [])[e] || {}
  n.write_shift(4, e), n.write_shift(4, 0)
  var i = 320
  a.hpx ? (i = Qi(a.hpx) * 20) : a.hpt && (i = a.hpt * 20), n.write_shift(2, i), n.write_shift(1, 0)
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
        var m = Array.isArray(r) ? (r[f.r] || [])[f.c] : r[Le(f)]
        m && (u < 0 && (u = p), (h = p))
      }
      u < 0 || (++o, n.write_shift(4, u), n.write_shift(4, h))
    }
  var d = n.l
  return (n.l = l), n.write_shift(4, o), (n.l = d), n.length > n.l ? n.slice(0, n.l) : n
}
function y4(e, t, r, n) {
  var a = S4(n, r, t)
  ;(a.length > 17 || (t['!rows'] || [])[n]) && H(e, 0, a)
}
var A4 = kn,
  O4 = sa
function F4() {}
function D4(e, t) {
  var r = {},
    n = e[e.l]
  return ++e.l, (r.above = !(n & 64)), (r.left = !(n & 128)), (e.l += 18), (r.name = BT(e)), r
}
function C4(e, t, r) {
  r == null && (r = L(84 + 4 * e.length))
  var n = 192
  t && (t.above && (n &= -65), t.left && (n &= -129)), r.write_shift(1, n)
  for (var a = 1; a < 3; ++a) r.write_shift(1, 0)
  return Ki({ auto: 1 }, r), r.write_shift(-4, -1), r.write_shift(-4, -1), $u(e, r), r.slice(0, r.l)
}
function R4(e) {
  var t = rr(e)
  return [t]
}
function k4(e, t, r) {
  return r == null && (r = L(8)), Dn(t, r)
}
function N4(e) {
  var t = Cn(e)
  return [t]
}
function P4(e, t, r) {
  return r == null && (r = L(4)), Rn(t, r)
}
function I4(e) {
  var t = rr(e),
    r = e.read_shift(1)
  return [t, r, 'b']
}
function M4(e, t, r) {
  return r == null && (r = L(9)), Dn(t, r), r.write_shift(1, e.v ? 1 : 0), r
}
function b4(e) {
  var t = Cn(e),
    r = e.read_shift(1)
  return [t, r, 'b']
}
function L4(e, t, r) {
  return r == null && (r = L(5)), Rn(t, r), r.write_shift(1, e.v ? 1 : 0), r
}
function B4(e) {
  var t = rr(e),
    r = e.read_shift(1)
  return [t, r, 'e']
}
function U4(e, t, r) {
  return r == null && (r = L(9)), Dn(t, r), r.write_shift(1, e.v), r
}
function W4(e) {
  var t = Cn(e),
    r = e.read_shift(1)
  return [t, r, 'e']
}
function H4(e, t, r) {
  return (
    r == null && (r = L(8)),
    Rn(t, r),
    r.write_shift(1, e.v),
    r.write_shift(2, 0),
    r.write_shift(1, 0),
    r
  )
}
function $4(e) {
  var t = rr(e),
    r = e.read_shift(4)
  return [t, r, 's']
}
function Y4(e, t, r) {
  return r == null && (r = L(12)), Dn(t, r), r.write_shift(4, t.v), r
}
function j4(e) {
  var t = Cn(e),
    r = e.read_shift(4)
  return [t, r, 's']
}
function V4(e, t, r) {
  return r == null && (r = L(8)), Rn(t, r), r.write_shift(4, t.v), r
}
function G4(e) {
  var t = rr(e),
    r = oa(e)
  return [t, r, 'n']
}
function z4(e, t, r) {
  return r == null && (r = L(16)), Dn(t, r), En(e.v, r), r
}
function X4(e) {
  var t = Cn(e),
    r = oa(e)
  return [t, r, 'n']
}
function K4(e, t, r) {
  return r == null && (r = L(12)), Rn(t, r), En(e.v, r), r
}
function q4(e) {
  var t = rr(e),
    r = Yu(e)
  return [t, r, 'n']
}
function J4(e, t, r) {
  return r == null && (r = L(12)), Dn(t, r), ju(e.v, r), r
}
function Z4(e) {
  var t = Cn(e),
    r = Yu(e)
  return [t, r, 'n']
}
function Q4(e, t, r) {
  return r == null && (r = L(8)), Rn(t, r), ju(e.v, r), r
}
function eA(e) {
  var t = rr(e),
    r = So(e)
  return [t, r, 'is']
}
function tA(e) {
  var t = rr(e),
    r = Dt(e)
  return [t, r, 'str']
}
function rA(e, t, r) {
  return (
    r == null && (r = L(12 + 4 * e.v.length)),
    Dn(t, r),
    xt(e.v, r),
    r.length > r.l ? r.slice(0, r.l) : r
  )
}
function nA(e) {
  var t = Cn(e),
    r = Dt(e)
  return [t, r, 'str']
}
function aA(e, t, r) {
  return (
    r == null && (r = L(8 + 4 * e.v.length)),
    Rn(t, r),
    xt(e.v, r),
    r.length > r.l ? r.slice(0, r.l) : r
  )
}
function iA(e, t, r) {
  var n = e.l + t,
    a = rr(e)
  a.r = r['!row']
  var i = e.read_shift(1),
    s = [a, i, 'b']
  if (r.cellFormula) {
    e.l += 2
    var o = Os(e, n - e.l, r)
    s[3] = Zn(o, null, a, r.supbooks, r)
  } else e.l = n
  return s
}
function sA(e, t, r) {
  var n = e.l + t,
    a = rr(e)
  a.r = r['!row']
  var i = e.read_shift(1),
    s = [a, i, 'e']
  if (r.cellFormula) {
    e.l += 2
    var o = Os(e, n - e.l, r)
    s[3] = Zn(o, null, a, r.supbooks, r)
  } else e.l = n
  return s
}
function oA(e, t, r) {
  var n = e.l + t,
    a = rr(e)
  a.r = r['!row']
  var i = oa(e),
    s = [a, i, 'n']
  if (r.cellFormula) {
    e.l += 2
    var o = Os(e, n - e.l, r)
    s[3] = Zn(o, null, a, r.supbooks, r)
  } else e.l = n
  return s
}
function fA(e, t, r) {
  var n = e.l + t,
    a = rr(e)
  a.r = r['!row']
  var i = Dt(e),
    s = [a, i, 'str']
  if (r.cellFormula) {
    e.l += 2
    var o = Os(e, n - e.l, r)
    s[3] = Zn(o, null, a, r.supbooks, r)
  } else e.l = n
  return s
}
var lA = kn,
  cA = sa
function uA(e, t) {
  return t == null && (t = L(4)), t.write_shift(4, e), t
}
function hA(e, t) {
  var r = e.l + t,
    n = kn(e),
    a = yo(e),
    i = Dt(e),
    s = Dt(e),
    o = Dt(e)
  e.l = r
  var l = { rfx: n, relId: a, loc: i, display: o }
  return s && (l.Tooltip = s), l
}
function dA(e, t) {
  var r = L(50 + 4 * (e[1].Target.length + (e[1].Tooltip || '').length))
  sa({ s: pt(e[0]), e: pt(e[0]) }, r), Ao('rId' + t, r)
  var n = e[1].Target.indexOf('#'),
    a = n == -1 ? '' : e[1].Target.slice(n + 1)
  return xt(a || '', r), xt(e[1].Tooltip || '', r), xt('', r), r.slice(0, r.l)
}
function pA() {}
function xA(e, t, r) {
  var n = e.l + t,
    a = Vu(e),
    i = e.read_shift(1),
    s = [a]
  if (((s[2] = i), r.cellFormula)) {
    var o = n4(e, n - e.l, r)
    s[1] = o
  } else e.l = n
  return s
}
function mA(e, t, r) {
  var n = e.l + t,
    a = kn(e),
    i = [a]
  if (r.cellFormula) {
    var s = i4(e, n - e.l, r)
    ;(i[1] = s), (e.l = n)
  } else e.l = n
  return i
}
function _A(e, t, r) {
  r == null && (r = L(18))
  var n = Fs(e, t)
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
var Dh = ['left', 'right', 'top', 'bottom', 'header', 'footer']
function gA(e) {
  var t = {}
  return (
    Dh.forEach(function (r) {
      t[r] = oa(e)
    }),
    t
  )
}
function vA(e, t) {
  return (
    t == null && (t = L(6 * 8)),
    Oh(e),
    Dh.forEach(function (r) {
      En(e[r], t)
    }),
    t
  )
}
function wA(e) {
  var t = e.read_shift(2)
  return (e.l += 28), { RTL: t & 32 }
}
function TA(e, t, r) {
  r == null && (r = L(30))
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
function EA(e) {
  var t = L(24)
  return t.write_shift(4, 4), t.write_shift(4, 1), sa(e, t), t
}
function SA(e, t) {
  return (
    t == null && (t = L(16 * 4 + 2)),
    t.write_shift(2, e.password ? lh(e.password) : 0),
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
function yA() {}
function AA() {}
function OA(e, t, r, n, a, i, s) {
  if (t.v === void 0) return !1
  var o = ''
  switch (t.t) {
    case 'b':
      o = t.v ? '1' : '0'
      break
    case 'd':
      ;(t = Wt(t)), (t.z = t.z || Je[14]), (t.v = Ut(Mt(t.v))), (t.t = 'n')
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
    ((l.s = ln(a.cellXfs, t, a)),
    t.l && i['!links'].push([Le(l), t.l]),
    t.c && i['!comments'].push([Le(l), t.c]),
    t.t)
  ) {
    case 's':
    case 'str':
      return (
        a.bookSST
          ? ((o = ko(a.Strings, t.v, a.revStrings)),
            (l.t = 's'),
            (l.v = o),
            s ? H(e, 18, V4(t, l)) : H(e, 7, Y4(t, l)))
          : ((l.t = 'str'), s ? H(e, 17, aA(t, l)) : H(e, 6, rA(t, l))),
        !0
      )
    case 'n':
      return (
        t.v == (t.v | 0) && t.v > -1e3 && t.v < 1e3
          ? s
            ? H(e, 13, Q4(t, l))
            : H(e, 2, J4(t, l))
          : s
          ? H(e, 16, K4(t, l))
          : H(e, 5, z4(t, l)),
        !0
      )
    case 'b':
      return (l.t = 'b'), s ? H(e, 15, L4(t, l)) : H(e, 4, M4(t, l)), !0
    case 'e':
      return (l.t = 'e'), s ? H(e, 14, H4(t, l)) : H(e, 3, U4(t, l)), !0
  }
  return s ? H(e, 12, P4(t, l)) : H(e, 1, k4(t, l)), !0
}
function FA(e, t, r, n) {
  var a = Ge(t['!ref'] || 'A1'),
    i,
    s = '',
    o = []
  H(e, 145)
  var l = Array.isArray(t),
    f = a.e.r
  t['!rows'] && (f = Math.max(a.e.r, t['!rows'].length - 1))
  for (var c = a.s.r; c <= f; ++c) {
    ;(s = St(c)), y4(e, t, a, c)
    var u = !1
    if (c <= a.e.r)
      for (var h = a.s.c; h <= a.e.c; ++h) {
        c === a.s.r && (o[h] = Ft(h)), (i = o[h] + s)
        var p = l ? (t[c] || [])[h] : t[i]
        if (!p) {
          u = !1
          continue
        }
        u = OA(e, p, c, h, n, t, u)
      }
  }
  H(e, 146)
}
function DA(e, t) {
  !t ||
    !t['!merges'] ||
    (H(e, 177, uA(t['!merges'].length)),
    t['!merges'].forEach(function (r) {
      H(e, 176, cA(r))
    }),
    H(e, 178))
}
function CA(e, t) {
  !t ||
    !t['!cols'] ||
    (H(e, 390),
    t['!cols'].forEach(function (r, n) {
      r && H(e, 60, _A(n, r))
    }),
    H(e, 391))
}
function RA(e, t) {
  !t || !t['!ref'] || (H(e, 648), H(e, 649, EA(Ge(t['!ref']))), H(e, 650))
}
function kA(e, t, r) {
  t['!links'].forEach(function (n) {
    if (!!n[1].Target) {
      var a = Me(r, -1, n[1].Target.replace(/#.*$/, ''), De.HLINK)
      H(e, 494, dA(n, a))
    }
  }),
    delete t['!links']
}
function NA(e, t, r, n) {
  if (t['!comments'].length > 0) {
    var a = Me(n, -1, '../drawings/vmlDrawing' + (r + 1) + '.vml', De.VML)
    H(e, 551, Ao('rId' + a)), (t['!legacy'] = a)
  }
}
function PA(e, t, r, n) {
  if (!!t['!autofilter']) {
    var a = t['!autofilter'],
      i = typeof a.ref == 'string' ? a.ref : at(a.ref)
    r.Workbook || (r.Workbook = { Sheets: [] }), r.Workbook.Names || (r.Workbook.Names = [])
    var s = r.Workbook.Names,
      o = zt(i)
    o.s.r == o.e.r && ((o.e.r = zt(t['!ref']).e.r), (i = at(o)))
    for (var l = 0; l < s.length; ++l) {
      var f = s[l]
      if (f.Name == '_xlnm._FilterDatabase' && f.Sheet == n) {
        f.Ref = "'" + r.SheetNames[n] + "'!" + i
        break
      }
    }
    l == s.length &&
      s.push({ Name: '_xlnm._FilterDatabase', Sheet: n, Ref: "'" + r.SheetNames[n] + "'!" + i }),
      H(e, 161, sa(Ge(i))),
      H(e, 162)
  }
}
function IA(e, t, r) {
  H(e, 133), H(e, 137, TA(t, r)), H(e, 138), H(e, 134)
}
function MA(e, t) {
  !t['!protect'] || H(e, 535, SA(t['!protect']))
}
function bA(e, t, r, n) {
  var a = Bt(),
    i = r.SheetNames[e],
    s = r.Sheets[i] || {},
    o = i
  try {
    r && r.Workbook && (o = r.Workbook.Sheets[e].CodeName || o)
  } catch {}
  var l = Ge(s['!ref'] || 'A1')
  if (l.e.c > 16383 || l.e.r > 1048575) {
    if (t.WTF)
      throw new Error('Range ' + (s['!ref'] || 'A1') + ' exceeds format limit A1:XFD1048576')
    ;(l.e.c = Math.min(l.e.c, 16383)), (l.e.r = Math.min(l.e.c, 1048575))
  }
  return (
    (s['!links'] = []),
    (s['!comments'] = []),
    H(a, 129),
    (r.vbaraw || s['!outline']) && H(a, 147, C4(o, s['!outline'])),
    H(a, 148, O4(l)),
    IA(a, s, r.Workbook),
    CA(a, s),
    FA(a, s, e, t),
    MA(a, s),
    PA(a, s, r, e),
    DA(a, s),
    kA(a, s, n),
    s['!margins'] && H(a, 476, vA(s['!margins'])),
    (!t || t.ignoreEC || t.ignoreEC == null) && RA(a, s),
    NA(a, s, e, n),
    H(a, 130),
    a.end()
  )
}
function LA(e, t) {
  e.l += 10
  var r = Dt(e)
  return { name: r }
}
var BA = [
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
function UA(e) {
  return !e.Workbook || !e.Workbook.WBProps
    ? 'false'
    : mT(e.Workbook.WBProps.date1904)
    ? 'true'
    : 'false'
}
var WA = /* @__PURE__ */ '][*?/\\'.split('')
function Ch(e, t) {
  if (e.length > 31) {
    if (t) return !1
    throw new Error('Sheet names cannot exceed 31 chars')
  }
  var r = !0
  return (
    WA.forEach(function (n) {
      if (e.indexOf(n) != -1) {
        if (!t) throw new Error('Sheet name cannot contain : \\ / ? * [ ]')
        r = !1
      }
    }),
    r
  )
}
function HA(e, t, r) {
  e.forEach(function (n, a) {
    Ch(n)
    for (var i = 0; i < a; ++i) if (n == e[i]) throw new Error('Duplicate Sheet Name: ' + n)
    if (r) {
      var s = (t && t[a] && t[a].CodeName) || n
      if (s.charCodeAt(0) == 95 && s.length > 22) throw new Error('Bad Code Name: Worksheet' + s)
    }
  })
}
function $A(e) {
  if (!e || !e.SheetNames || !e.Sheets) throw new Error('Invalid Workbook')
  if (!e.SheetNames.length) throw new Error('Workbook is empty')
  var t = (e.Workbook && e.Workbook.Sheets) || []
  HA(e.SheetNames, t, !!e.vbaraw)
  for (var r = 0; r < e.SheetNames.length; ++r) c4(e.Sheets[e.SheetNames[r]], e.SheetNames[r], r)
}
function Rh(e) {
  var t = [it]
  t[t.length] = Z('workbook', null, {
    xmlns: aa[0],
    'xmlns:r': dt.r
  })
  var r = e.Workbook && (e.Workbook.Names || []).length > 0,
    n = { codeName: 'ThisWorkbook' }
  e.Workbook &&
    e.Workbook.WBProps &&
    (BA.forEach(function (o) {
      e.Workbook.WBProps[o[0]] != null &&
        e.Workbook.WBProps[o[0]] != o[1] &&
        (n[o[0]] = e.Workbook.WBProps[o[0]])
    }),
    e.Workbook.WBProps.CodeName && ((n.codeName = e.Workbook.WBProps.CodeName), delete n.CodeName)),
    (t[t.length] = Z('workbookPr', null, n))
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
    var s = { name: be(e.SheetNames[i].slice(0, 31)) }
    if (((s.sheetId = '' + (i + 1)), (s['r:id'] = 'rId' + (i + 1)), a[i]))
      switch (a[i].Hidden) {
        case 1:
          s.state = 'hidden'
          break
        case 2:
          s.state = 'veryHidden'
          break
      }
    t[t.length] = Z('sheet', null, s)
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
            o.Ref && (t[t.length] = Z('definedName', be(o.Ref), l))
        }),
      (t[t.length] = '</definedNames>')),
    t.length > 2 && ((t[t.length] = '</workbook>'), (t[1] = t[1].replace('/>', '>'))),
    t.join('')
  )
}
function YA(e, t) {
  var r = {}
  return (
    (r.Hidden = e.read_shift(4)),
    (r.iTabID = e.read_shift(4)),
    (r.strRelID = S0(e)),
    (r.name = Dt(e)),
    r
  )
}
function jA(e, t) {
  return (
    t || (t = L(127)),
    t.write_shift(4, e.Hidden),
    t.write_shift(4, e.iTabID),
    Ao(e.strRelID, t),
    xt(e.name.slice(0, 31), t),
    t.length > t.l ? t.slice(0, t.l) : t
  )
}
function VA(e, t) {
  var r = {},
    n = e.read_shift(4)
  r.defaultThemeVersion = e.read_shift(4)
  var a = t > 8 ? Dt(e) : ''
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
function GA(e, t) {
  t || (t = L(72))
  var r = 0
  return (
    e && e.filterPrivacy && (r |= 8),
    t.write_shift(4, r),
    t.write_shift(4, 0),
    $u((e && e.CodeName) || 'ThisWorkbook', t),
    t.slice(0, t.l)
  )
}
function zA(e, t, r) {
  var n = e.l + t
  ;(e.l += 4), (e.l += 1)
  var a = e.read_shift(4),
    i = UT(e),
    s = a4(e, 0, r),
    o = yo(e)
  e.l = n
  var l = { Name: i, Ptg: s }
  return a < 268435455 && (l.Sheet = a), o && (l.Comment = o), l
}
function XA(e, t) {
  H(e, 143)
  for (var r = 0; r != t.SheetNames.length; ++r) {
    var n =
        (t.Workbook && t.Workbook.Sheets && t.Workbook.Sheets[r] && t.Workbook.Sheets[r].Hidden) ||
        0,
      a = { Hidden: n, iTabID: r + 1, strRelID: 'rId' + (r + 1), name: t.SheetNames[r] }
    H(e, 156, jA(a))
  }
  H(e, 144)
}
function KA(e, t) {
  t || (t = L(127))
  for (var r = 0; r != 4; ++r) t.write_shift(4, 0)
  return (
    xt('SheetJS', t),
    xt($i.version, t),
    xt($i.version, t),
    xt('7262', t),
    t.length > t.l ? t.slice(0, t.l) : t
  )
}
function qA(e, t) {
  t || (t = L(29)),
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
function JA(e, t) {
  if (!(!t.Workbook || !t.Workbook.Sheets)) {
    for (var r = t.Workbook.Sheets, n = 0, a = -1, i = -1; n < r.length; ++n)
      !r[n] || (!r[n].Hidden && a == -1) ? (a = n) : r[n].Hidden == 1 && i == -1 && (i = n)
    i > a || (H(e, 135), H(e, 158, qA(a)), H(e, 136))
  }
}
function ZA(e, t) {
  var r = Bt()
  return (
    H(r, 131),
    H(r, 128, KA()),
    H(r, 153, GA((e.Workbook && e.Workbook.WBProps) || null)),
    JA(r, e),
    XA(r, e),
    H(r, 132),
    r.end()
  )
}
function QA(e, t, r) {
  return (t.slice(-4) === '.bin' ? ZA : Rh)(e)
}
function e3(e, t, r, n, a) {
  return (t.slice(-4) === '.bin' ? bA : Fh)(e, r, n, a)
}
function t3(e, t, r) {
  return (t.slice(-4) === '.bin' ? vS : hh)(e, r)
}
function r3(e, t, r) {
  return (t.slice(-4) === '.bin' ? GE : fh)(e, r)
}
function n3(e, t, r) {
  return (t.slice(-4) === '.bin' ? MS : _h)(e)
}
function a3(e) {
  return (e.slice(-4) === '.bin' ? FS : xh)()
}
function i3(e, t) {
  var r = []
  return (
    e.Props && r.push(tE(e.Props, t)), e.Custprops && r.push(rE(e.Props, e.Custprops)), r.join('')
  )
}
function s3() {
  return ''
}
function o3(e, t) {
  var r = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>']
  return (
    t.cellXfs.forEach(function (n, a) {
      var i = []
      i.push(Z('NumberFormat', null, { 'ss:Format': be(Je[n.numFmtId]) }))
      var s = { 'ss:ID': 's' + (21 + a) }
      r.push(Z('Style', i.join(''), s))
    }),
    Z('Styles', r.join(''))
  )
}
function kh(e) {
  return Z('NamedRange', null, {
    'ss:Name': e.Name,
    'ss:RefersTo': '=' + Co(e.Ref, { r: 0, c: 0 })
  })
}
function f3(e) {
  if (!((e || {}).Workbook || {}).Names) return ''
  for (var t = e.Workbook.Names, r = [], n = 0; n < t.length; ++n) {
    var a = t[n]
    a.Sheet == null && (a.Name.match(/^_xlfn\./) || r.push(kh(a)))
  }
  return Z('Names', r.join(''))
}
function l3(e, t, r, n) {
  if (!e || !((n || {}).Workbook || {}).Names) return ''
  for (var a = n.Workbook.Names, i = [], s = 0; s < a.length; ++s) {
    var o = a[s]
    o.Sheet == r && (o.Name.match(/^_xlfn\./) || i.push(kh(o)))
  }
  return i.join('')
}
function c3(e, t, r, n) {
  if (!e) return ''
  var a = []
  if (
    (e['!margins'] &&
      (a.push('<PageSetup>'),
      e['!margins'].header && a.push(Z('Header', null, { 'x:Margin': e['!margins'].header })),
      e['!margins'].footer && a.push(Z('Footer', null, { 'x:Margin': e['!margins'].footer })),
      a.push(
        Z('PageMargins', null, {
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
      a.push(Z('Visible', n.Workbook.Sheets[r].Hidden == 1 ? 'SheetHidden' : 'SheetVeryHidden', {}))
    else {
      for (var i = 0; i < r && !(n.Workbook.Sheets[i] && !n.Workbook.Sheets[i].Hidden); ++i);
      i == r && a.push('<Selected/>')
    }
  return (
    ((((n || {}).Workbook || {}).Views || [])[0] || {}).RTL && a.push('<DisplayRightToLeft/>'),
    e['!protect'] &&
      (a.push(Et('ProtectContents', 'True')),
      e['!protect'].objects && a.push(Et('ProtectObjects', 'True')),
      e['!protect'].scenarios && a.push(Et('ProtectScenarios', 'True')),
      e['!protect'].selectLockedCells != null && !e['!protect'].selectLockedCells
        ? a.push(Et('EnableSelection', 'NoSelection'))
        : e['!protect'].selectUnlockedCells != null &&
          !e['!protect'].selectUnlockedCells &&
          a.push(Et('EnableSelection', 'UnlockedCells')),
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
    a.length == 0 ? '' : Z('WorksheetOptions', a.join(''), { xmlns: Vt.x })
  )
}
function u3(e) {
  return e
    .map(function (t) {
      var r = xT(t.t || ''),
        n = Z('ss:Data', r, { xmlns: 'http://www.w3.org/TR/REC-html40' })
      return Z('Comment', n, { 'ss:Author': t.a })
    })
    .join('')
}
function h3(e, t, r, n, a, i, s) {
  if (!e || (e.v == null && e.f == null)) return ''
  var o = {}
  if ((e.f && (o['ss:Formula'] = '=' + be(Co(e.f, s))), e.F && e.F.slice(0, t.length) == t)) {
    var l = pt(e.F.slice(t.length + 1))
    o['ss:ArrayRange'] =
      'RC:R' +
      (l.r == s.r ? '' : '[' + (l.r - s.r) + ']') +
      'C' +
      (l.c == s.c ? '' : '[' + (l.c - s.c) + ']')
  }
  if (
    (e.l &&
      e.l.Target &&
      ((o['ss:HRef'] = be(e.l.Target)), e.l.Tooltip && (o['x:HRefScreenTip'] = be(e.l.Tooltip))),
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
      ;(u = 'Error'), (h = ii[e.v])
      break
    case 'd':
      ;(u = 'DateTime'), (h = new Date(e.v).toISOString()), e.z == null && (e.z = e.z || Je[14])
      break
    case 's':
      ;(u = 'String'), (h = pT(e.v || ''))
      break
  }
  var p = ln(n.cellXfs, e, n)
  ;(o['ss:StyleID'] = 's' + (21 + p)), (o['ss:Index'] = s.c + 1)
  var m = e.v != null ? h : '',
    d = e.t == 'z' ? '' : '<Data ss:Type="' + u + '">' + m + '</Data>'
  return (e.c || []).length > 0 && (d += u3(e.c)), Z('Cell', d, o)
}
function d3(e, t) {
  var r = '<Row ss:Index="' + (e + 1) + '"'
  return (
    t &&
      (t.hpt && !t.hpx && (t.hpx = uh(t.hpt)),
      t.hpx && (r += ' ss:AutoFitHeight="0" ss:Height="' + t.hpx + '"'),
      t.hidden && (r += ' ss:Hidden="1"')),
    r + '>'
  )
}
function p3(e, t, r, n) {
  if (!e['!ref']) return ''
  var a = Ge(e['!ref']),
    i = e['!merges'] || [],
    s = 0,
    o = []
  e['!cols'] &&
    e['!cols'].forEach(function (g, y) {
      Fo(g)
      var O = !!g.width,
        F = Fs(y, g),
        b = { 'ss:Index': y + 1 }
      O && (b['ss:Width'] = Ji(F.width)),
        g.hidden && (b['ss:Hidden'] = '1'),
        o.push(Z('Column', null, b))
    })
  for (var l = Array.isArray(e), f = a.s.r; f <= a.e.r; ++f) {
    for (var c = [d3(f, (e['!rows'] || [])[f])], u = a.s.c; u <= a.e.c; ++u) {
      var h = !1
      for (s = 0; s != i.length; ++s)
        if (!(i[s].s.c > u) && !(i[s].s.r > f) && !(i[s].e.c < u) && !(i[s].e.r < f)) {
          ;(i[s].s.c != u || i[s].s.r != f) && (h = !0)
          break
        }
      if (!h) {
        var p = { r: f, c: u },
          m = Le(p),
          d = l ? (e[f] || [])[u] : e[m]
        c.push(h3(d, m, e, t, r, n, p))
      }
    }
    c.push('</Row>'), c.length > 2 && o.push(c.join(''))
  }
  return o.join('')
}
function x3(e, t, r) {
  var n = [],
    a = r.SheetNames[e],
    i = r.Sheets[a],
    s = i ? l3(i, t, e, r) : ''
  return (
    s.length > 0 && n.push('<Names>' + s + '</Names>'),
    (s = i ? p3(i, t, e, r) : ''),
    s.length > 0 && n.push('<Table>' + s + '</Table>'),
    n.push(c3(i, t, e, r)),
    n.join('')
  )
}
function m3(e, t) {
  t || (t = {}),
    e.SSF || (e.SSF = Wt(Je)),
    e.SSF &&
      (Es(),
      ri(e.SSF),
      (t.revssf = Ss(e.SSF)),
      (t.revssf[e.SSF[65535]] = 0),
      (t.ssf = e.SSF),
      (t.cellXfs = []),
      ln(t.cellXfs, {}, { revssf: { General: 0 } }))
  var r = []
  r.push(i3(e, t)), r.push(s3()), r.push(''), r.push('')
  for (var n = 0; n < e.SheetNames.length; ++n)
    r.push(Z('Worksheet', x3(n, t, e), { 'ss:Name': be(e.SheetNames[n]) }))
  return (
    (r[2] = o3(e, t)),
    (r[3] = f3(e)),
    it +
      Z('Workbook', r.join(''), {
        xmlns: Vt.ss,
        'xmlns:o': Vt.o,
        'xmlns:x': Vt.x,
        'xmlns:ss': Vt.ss,
        'xmlns:dt': Vt.dt,
        'xmlns:html': Vt.html
      })
  )
}
var qs = {
  SI: 'e0859ff2f94f6810ab9108002b27b3d9',
  DSI: '02d5cdd59c2e1b10939708002b2cf9ae',
  UDI: '05d5cdd59c2e1b10939708002b2cf9ae'
}
function _3(e, t) {
  var r = [],
    n = [],
    a = [],
    i = 0,
    s,
    o = jf(nl, 'n'),
    l = jf(al, 'n')
  if (e.Props)
    for (s = yt(e.Props), i = 0; i < s.length; ++i)
      (Object.prototype.hasOwnProperty.call(o, s[i])
        ? r
        : Object.prototype.hasOwnProperty.call(l, s[i])
        ? n
        : a
      ).push([s[i], e.Props[s[i]]])
  if (e.Custprops)
    for (s = yt(e.Custprops), i = 0; i < s.length; ++i)
      Object.prototype.hasOwnProperty.call(e.Props || {}, s[i]) ||
        (Object.prototype.hasOwnProperty.call(o, s[i])
          ? r
          : Object.prototype.hasOwnProperty.call(l, s[i])
          ? n
          : a
        ).push([s[i], e.Custprops[s[i]]])
  var f = []
  for (i = 0; i < a.length; ++i)
    th.indexOf(a[i][0]) > -1 || Zu.indexOf(a[i][0]) > -1 || (a[i][1] != null && f.push(a[i]))
  n.length && Be.utils.cfb_add(t, '/SummaryInformation', ll(n, qs.SI, l, al)),
    (r.length || f.length) &&
      Be.utils.cfb_add(
        t,
        '/DocumentSummaryInformation',
        ll(r, qs.DSI, o, nl, f.length ? f : null, qs.UDI)
      )
}
function g3(e, t) {
  var r = t || {},
    n = Be.utils.cfb_new({ root: 'R' }),
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
    Be.utils.cfb_add(n, a, Nh(e, r)),
    r.biff == 8 && (e.Props || e.Custprops) && _3(e, n),
    r.biff == 8 &&
      e.vbaraw &&
      bS(n, Be.read(e.vbaraw, { type: typeof e.vbaraw == 'string' ? 'binary' : 'buffer' })),
    n
  )
}
var v3 = {
  0: { f: E4 },
  1: { f: R4 },
  2: { f: q4 },
  3: { f: B4 },
  4: { f: I4 },
  5: { f: G4 },
  6: { f: tA },
  7: { f: $4 },
  8: { f: fA },
  9: { f: oA },
  10: { f: iA },
  11: { f: sA },
  12: { f: N4 },
  13: { f: Z4 },
  14: { f: W4 },
  15: { f: b4 },
  16: { f: X4 },
  17: { f: nA },
  18: { f: j4 },
  19: { f: So },
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
  39: { f: zA },
  40: {},
  42: {},
  43: { f: tS },
  44: { f: QE },
  45: { f: aS },
  46: { f: sS },
  47: { f: iS },
  48: {},
  49: { f: NT },
  50: {},
  51: { f: ES },
  52: { T: 1 },
  53: { T: -1 },
  54: { T: 1 },
  55: { T: -1 },
  56: { T: 1 },
  57: { T: -1 },
  58: {},
  59: {},
  60: { f: PE },
  62: { f: eA },
  63: { f: DS },
  64: { f: yA },
  65: {},
  66: {},
  67: {},
  68: {},
  69: {},
  70: {},
  128: {},
  129: { T: 1 },
  130: { T: -1 },
  131: { T: 1, f: vr, p: 0 },
  132: { T: -1 },
  133: { T: 1 },
  134: { T: -1 },
  135: { T: 1 },
  136: { T: -1 },
  137: { T: 1, f: wA },
  138: { T: -1 },
  139: { T: 1 },
  140: { T: -1 },
  141: { T: 1 },
  142: { T: -1 },
  143: { T: 1 },
  144: { T: -1 },
  145: { T: 1 },
  146: { T: -1 },
  147: { f: D4 },
  148: { f: A4, p: 16 },
  151: { f: pA },
  152: {},
  153: { f: VA },
  154: {},
  155: {},
  156: { f: YA },
  157: {},
  158: {},
  159: { T: 1, f: YE },
  160: { T: -1 },
  161: { T: 1, f: kn },
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
  176: { f: lA },
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
  335: { f: wS },
  336: { T: -1 },
  337: { f: AS, T: 1 },
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
  355: { f: S0 },
  357: {},
  358: {},
  359: {},
  360: { T: 1 },
  361: {},
  362: { f: FE },
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
  426: { f: xA },
  427: { f: mA },
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
  476: { f: gA },
  477: {},
  478: {},
  479: { T: 1 },
  480: { T: -1 },
  481: { T: 1 },
  482: { T: -1 },
  483: { T: 1 },
  484: { T: -1 },
  485: { f: F4 },
  486: { T: 1 },
  487: { T: -1 },
  488: { T: 1 },
  489: { T: -1 },
  490: { T: 1 },
  491: { T: -1 },
  492: { T: 1 },
  493: { T: -1 },
  494: { f: hA },
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
  550: { f: S0 },
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
  632: { f: PS },
  633: { T: 1 },
  634: { T: -1 },
  635: { T: 1, f: kS },
  636: { T: -1 },
  637: { f: bT },
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
  651: { f: LA },
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
  1053: { f: AA },
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
function Q(e, t, r, n) {
  var a = t
  if (!isNaN(a)) {
    var i = n || (r || []).length || 0,
      s = e.next(4)
    s.write_shift(2, a), s.write_shift(2, i), i > 0 && wo(r) && e.push(r)
  }
}
function w3(e, t, r, n) {
  var a = n || (r || []).length || 0
  if (a <= 8224) return Q(e, t, r, a)
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
function oi(e, t, r) {
  return (
    e || (e = L(7)),
    e.write_shift(2, t),
    e.write_shift(2, r),
    e.write_shift(2, 0),
    e.write_shift(1, 0),
    e
  )
}
function T3(e, t, r, n) {
  var a = L(9)
  return oi(a, e, t), nh(r, n || 'b', a), a
}
function E3(e, t, r) {
  var n = L(8 + 2 * r.length)
  return (
    oi(n, e, t),
    n.write_shift(1, r.length),
    n.write_shift(r.length, r, 'sbcs'),
    n.l < n.length ? n.slice(0, n.l) : n
  )
}
function S3(e, t, r, n) {
  if (t.v != null)
    switch (t.t) {
      case 'd':
      case 'n':
        var a = t.t == 'd' ? Ut(Mt(t.v)) : t.v
        a == (a | 0) && a >= 0 && a < 65536 ? Q(e, 2, LE(r, n, a)) : Q(e, 3, bE(r, n, a))
        return
      case 'b':
      case 'e':
        Q(e, 5, T3(r, n, t.v, t.t))
        return
      case 's':
      case 'str':
        Q(e, 4, E3(r, n, (t.v || '').slice(0, 255)))
        return
    }
  Q(e, 1, oi(null, r, n))
}
function y3(e, t, r, n) {
  var a = Array.isArray(t),
    i = Ge(t['!ref'] || 'A1'),
    s,
    o = '',
    l = []
  if (i.e.c > 255 || i.e.r > 16383) {
    if (n.WTF) throw new Error('Range ' + (t['!ref'] || 'A1') + ' exceeds format limit A1:IV16384')
    ;(i.e.c = Math.min(i.e.c, 255)), (i.e.r = Math.min(i.e.c, 16383)), (s = at(i))
  }
  for (var f = i.s.r; f <= i.e.r; ++f) {
    o = St(f)
    for (var c = i.s.c; c <= i.e.c; ++c) {
      f === i.s.r && (l[c] = Ft(c)), (s = l[c] + o)
      var u = a ? (t[f] || [])[c] : t[s]
      !u || S3(e, u, f, c)
    }
  }
}
function A3(e, t) {
  for (var r = t || {}, n = Bt(), a = 0, i = 0; i < e.SheetNames.length; ++i)
    e.SheetNames[i] == r.sheet && (a = i)
  if (a == 0 && !!r.sheet && e.SheetNames[0] != r.sheet)
    throw new Error('Sheet not found: ' + r.sheet)
  return (
    Q(n, r.biff == 4 ? 1033 : r.biff == 3 ? 521 : 9, Oo(e, 16, r)),
    y3(n, e.Sheets[e.SheetNames[a]], a, r),
    Q(n, 10),
    n.end()
  )
}
function O3(e, t, r) {
  Q(
    e,
    49,
    vE(
      {
        sz: 12,
        color: { theme: 1 },
        name: 'Arial',
        family: 2,
        scheme: 'minor'
      },
      r
    )
  )
}
function F3(e, t, r) {
  !t ||
    [
      [5, 8],
      [23, 26],
      [41, 44],
      [50, 392]
    ].forEach(function (n) {
      for (var a = n[0]; a <= n[1]; ++a) t[a] != null && Q(e, 1054, EE(a, t[a], r))
    })
}
function D3(e, t) {
  var r = L(19)
  r.write_shift(4, 2151),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r.write_shift(2, 3),
    r.write_shift(1, 1),
    r.write_shift(4, 0),
    Q(e, 2151, r),
    (r = L(39)),
    r.write_shift(4, 2152),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r.write_shift(2, 3),
    r.write_shift(1, 0),
    r.write_shift(4, 0),
    r.write_shift(2, 1),
    r.write_shift(4, 4),
    r.write_shift(2, 0),
    sh(Ge(t['!ref'] || 'A1'), r),
    r.write_shift(4, 4),
    Q(e, 2152, r)
}
function C3(e, t) {
  for (var r = 0; r < 16; ++r) Q(e, 224, ul({ numFmtId: 0, style: !0 }, 0, t))
  t.cellXfs.forEach(function (n) {
    Q(e, 224, ul(n, 0, t))
  })
}
function R3(e, t) {
  for (var r = 0; r < t['!links'].length; ++r) {
    var n = t['!links'][r]
    Q(e, 440, RE(n)), n[1].Tooltip && Q(e, 2048, kE(n))
  }
  delete t['!links']
}
function k3(e, t) {
  if (!!t) {
    var r = 0
    t.forEach(function (n, a) {
      ++r <= 256 && n && Q(e, 125, IE(Fs(a, n), a))
    })
  }
}
function N3(e, t, r, n, a) {
  var i = 16 + ln(a.cellXfs, t, a)
  if (t.v == null && !t.bf) {
    Q(e, 513, Sn(r, n, i))
    return
  }
  if (t.bf) Q(e, 6, r4(t, r, n, a, i))
  else
    switch (t.t) {
      case 'd':
      case 'n':
        var s = t.t == 'd' ? Ut(Mt(t.v)) : t.v
        Q(e, 515, OE(r, n, s, i))
        break
      case 'b':
      case 'e':
        Q(e, 517, AE(r, n, t.v, i, a, t.t))
        break
      case 's':
      case 'str':
        if (a.bookSST) {
          var o = ko(a.Strings, t.v, a.revStrings)
          Q(e, 253, wE(r, n, o, i))
        } else Q(e, 516, TE(r, n, (t.v || '').slice(0, 255), i, a))
        break
      default:
        Q(e, 513, Sn(r, n, i))
    }
}
function P3(e, t, r) {
  var n = Bt(),
    a = r.SheetNames[e],
    i = r.Sheets[a] || {},
    s = (r || {}).Workbook || {},
    o = (s.Sheets || [])[e] || {},
    l = Array.isArray(i),
    f = t.biff == 8,
    c,
    u = '',
    h = [],
    p = Ge(i['!ref'] || 'A1'),
    m = f ? 65536 : 16384
  if (p.e.c > 255 || p.e.r >= m) {
    if (t.WTF) throw new Error('Range ' + (i['!ref'] || 'A1') + ' exceeds format limit A1:IV16384')
    ;(p.e.c = Math.min(p.e.c, 255)), (p.e.r = Math.min(p.e.c, m - 1))
  }
  Q(n, 2057, Oo(r, 16, t)),
    Q(n, 13, Jt(1)),
    Q(n, 12, Jt(100)),
    Q(n, 15, Pt(!0)),
    Q(n, 17, Pt(!1)),
    Q(n, 16, En(1e-3)),
    Q(n, 95, Pt(!0)),
    Q(n, 42, Pt(!1)),
    Q(n, 43, Pt(!1)),
    Q(n, 130, Jt(1)),
    Q(n, 128, yE([0, 0])),
    Q(n, 131, Pt(!1)),
    Q(n, 132, Pt(!1)),
    f && k3(n, i['!cols']),
    Q(n, 512, SE(p, t)),
    f && (i['!links'] = [])
  for (var d = p.s.r; d <= p.e.r; ++d) {
    u = St(d)
    for (var g = p.s.c; g <= p.e.c; ++g) {
      d === p.s.r && (h[g] = Ft(g)), (c = h[g] + u)
      var y = l ? (i[d] || [])[g] : i[c]
      !y || (N3(n, y, d, g, t), f && y.l && i['!links'].push([c, y.l]))
    }
  }
  var O = o.CodeName || o.name || a
  return (
    f && Q(n, 574, gE((s.Views || [])[0])),
    f && (i['!merges'] || []).length && Q(n, 229, CE(i['!merges'])),
    f && R3(n, i),
    Q(n, 442, ih(O)),
    f && D3(n, i),
    Q(n, 10),
    n.end()
  )
}
function I3(e, t, r) {
  var n = Bt(),
    a = (e || {}).Workbook || {},
    i = a.Sheets || [],
    s = a.WBProps || {},
    o = r.biff == 8,
    l = r.biff == 5
  if (
    (Q(n, 2057, Oo(e, 5, r)),
    r.bookType == 'xla' && Q(n, 135),
    Q(n, 225, o ? Jt(1200) : null),
    Q(n, 193, iE(2)),
    l && Q(n, 191),
    l && Q(n, 192),
    Q(n, 226),
    Q(n, 92, pE('SheetJS', r)),
    Q(n, 66, Jt(o ? 1200 : 1252)),
    o && Q(n, 353, Jt(0)),
    o && Q(n, 448),
    Q(n, 317, ME(e.SheetNames.length)),
    o && e.vbaraw && Q(n, 211),
    o && e.vbaraw)
  ) {
    var f = s.CodeName || 'ThisWorkbook'
    Q(n, 442, ih(f))
  }
  Q(n, 156, Jt(17)),
    Q(n, 25, Pt(!1)),
    Q(n, 18, Pt(!1)),
    Q(n, 19, Jt(0)),
    o && Q(n, 431, Pt(!1)),
    o && Q(n, 444, Jt(0)),
    Q(n, 61, _E()),
    Q(n, 64, Pt(!1)),
    Q(n, 141, Jt(0)),
    Q(n, 34, Pt(UA(e) == 'true')),
    Q(n, 14, Pt(!0)),
    o && Q(n, 439, Pt(!1)),
    Q(n, 218, Jt(0)),
    O3(n, e, r),
    F3(n, e.SSF, r),
    C3(n, r),
    o && Q(n, 352, Pt(!1))
  var c = n.end(),
    u = Bt()
  o && Q(u, 140, NE()), o && r.Strings && w3(u, 252, mE(r.Strings)), Q(u, 10)
  var h = u.end(),
    p = Bt(),
    m = 0,
    d = 0
  for (d = 0; d < e.SheetNames.length; ++d)
    m += (o ? 12 : 11) + (o ? 2 : 1) * e.SheetNames[d].length
  var g = c.length + m + h.length
  for (d = 0; d < e.SheetNames.length; ++d) {
    var y = i[d] || {}
    Q(p, 133, xE({ pos: g, hs: y.Hidden || 0, dt: 0, name: e.SheetNames[d] }, r)),
      (g += t[d].length)
  }
  var O = p.end()
  if (m != O.length) throw new Error('BS8 ' + m + ' != ' + O.length)
  var F = []
  return c.length && F.push(c), O.length && F.push(O), h.length && F.push(h), Tt(F)
}
function M3(e, t) {
  var r = t || {},
    n = []
  e && !e.SSF && (e.SSF = Wt(Je)),
    e &&
      e.SSF &&
      (Es(), ri(e.SSF), (r.revssf = Ss(e.SSF)), (r.revssf[e.SSF[65535]] = 0), (r.ssf = e.SSF)),
    (r.Strings = []),
    (r.Strings.Count = 0),
    (r.Strings.Unique = 0),
    No(r),
    (r.cellXfs = []),
    ln(r.cellXfs, {}, { revssf: { General: 0 } }),
    e.Props || (e.Props = {})
  for (var a = 0; a < e.SheetNames.length; ++a) n[n.length] = P3(a, r, e)
  return n.unshift(I3(e, n, r)), Tt(n)
}
function Nh(e, t) {
  for (var r = 0; r <= e.SheetNames.length; ++r) {
    var n = e.Sheets[e.SheetNames[r]]
    if (!(!n || !n['!ref'])) {
      var a = zt(n['!ref'])
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
      return M3(e, t)
    case 4:
    case 3:
    case 2:
      return A3(e, t)
  }
  throw new Error('invalid type ' + i.bookType + ' for BIFF')
}
function b3(e, t, r, n) {
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
      var c = Le({ r, c: s }),
        u = n.dense ? (e[r] || [])[s] : e[c],
        h = (u && u.v != null && (u.h || dT(u.w || (Ur(u), u.w) || ''))) || '',
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
        i.push(Z('td', h, p))
    }
  }
  var m = '<tr>'
  return m + i.join('') + '</tr>'
}
var L3 = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',
  B3 = '</body></html>'
function U3(e, t, r) {
  var n = []
  return n.join('') + '<table' + (r && r.id ? ' id="' + r.id + '"' : '') + '>'
}
function Ph(e, t) {
  var r = t || {},
    n = r.header != null ? r.header : L3,
    a = r.footer != null ? r.footer : B3,
    i = [n],
    s = zt(e['!ref'])
  ;(r.dense = Array.isArray(e)), i.push(U3(e, s, r))
  for (var o = s.s.r; o <= s.e.r; ++o) i.push(b3(e, s, o, r))
  return i.push('</table>' + a), i.join('')
}
function Ih(e, t, r) {
  var n = r || {},
    a = 0,
    i = 0
  if (n.origin != null)
    if (typeof n.origin == 'number') a = n.origin
    else {
      var s = typeof n.origin == 'string' ? pt(n.origin) : n.origin
      ;(a = s.r), (i = s.c)
    }
  var o = t.getElementsByTagName('tr'),
    l = Math.min(n.sheetRows || 1e7, o.length),
    f = { s: { r: 0, c: 0 }, e: { r: a, c: i } }
  if (e['!ref']) {
    var c = zt(e['!ref'])
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
    g = 0,
    y = 0,
    O = 0,
    F = 0
  for (e['!cols'] || (e['!cols'] = []); m < o.length && d < l; ++m) {
    var b = o[m]
    if (gl(b)) {
      if (n.display) continue
      p[d] = { hidden: !0 }
    }
    var J = b.children
    for (g = y = 0; g < J.length; ++g) {
      var ae = J[g]
      if (!(n.display && gl(ae))) {
        var C = ae.hasAttribute('data-v')
            ? ae.getAttribute('data-v')
            : ae.hasAttribute('v')
            ? ae.getAttribute('v')
            : _T(ae.innerHTML),
          W = ae.getAttribute('data-z') || ae.getAttribute('z')
        for (h = 0; h < u.length; ++h) {
          var M = u[h]
          M.s.c == y + i && M.s.r < d + a && d + a <= M.e.r && ((y = M.e.c + 1 - i), (h = -1))
        }
        ;(F = +ae.getAttribute('colspan') || 1),
          ((O = +ae.getAttribute('rowspan') || 1) > 1 || F > 1) &&
            u.push({
              s: { r: d + a, c: y + i },
              e: { r: d + a + (O || 1) - 1, c: y + i + (F || 1) - 1 }
            })
        var j = { t: 's', v: C },
          V = ae.getAttribute('data-t') || ae.getAttribute('t') || ''
        C != null &&
          (C.length == 0
            ? (j.t = V || 'z')
            : n.raw ||
              C.trim().length == 0 ||
              V == 's' ||
              (C === 'TRUE'
                ? (j = { t: 'b', v: !0 })
                : C === 'FALSE'
                ? (j = { t: 'b', v: !1 })
                : isNaN(Pr(C))
                ? isNaN(Ya(C).getDate()) ||
                  ((j = { t: 'd', v: Mt(C) }),
                  n.cellDates || (j = { t: 'n', v: Ut(j.v) }),
                  (j.z = n.dateNF || Je[14]))
                : (j = { t: 'n', v: Pr(C) }))),
          j.z === void 0 && W != null && (j.z = W)
        var G = '',
          ne = ae.getElementsByTagName('A')
        if (ne && ne.length)
          for (
            var Ne = 0;
            Ne < ne.length &&
            !(
              ne[Ne].hasAttribute('href') && ((G = ne[Ne].getAttribute('href')), G.charAt(0) != '#')
            );
            ++Ne
          );
        G && G.charAt(0) != '#' && (j.l = { Target: G }),
          n.dense
            ? (e[d + a] || (e[d + a] = []), (e[d + a][y + i] = j))
            : (e[Le({ c: y + i, r: d + a })] = j),
          f.e.c < y + i && (f.e.c = y + i),
          (y += F)
      }
    }
    ++d
  }
  return (
    u.length && (e['!merges'] = (e['!merges'] || []).concat(u)),
    (f.e.r = Math.max(f.e.r, d - 1 + a)),
    (e['!ref'] = at(f)),
    d >= l && (e['!fullref'] = at(((f.e.r = o.length - m + d - 1 + a), f))),
    e
  )
}
function Mh(e, t) {
  var r = t || {},
    n = r.dense ? [] : {}
  return Ih(n, e, t)
}
function W3(e, t) {
  return Fn(Mh(e, t), t)
}
function gl(e) {
  var t = '',
    r = H3(e)
  return (
    r && (t = r(e).getPropertyValue('display')), t || (t = e.style && e.style.display), t === 'none'
  )
}
function H3(e) {
  return e.ownerDocument.defaultView &&
    typeof e.ownerDocument.defaultView.getComputedStyle == 'function'
    ? e.ownerDocument.defaultView.getComputedStyle
    : typeof getComputedStyle == 'function'
    ? getComputedStyle
    : null
}
var $3 = /* @__PURE__ */ (function () {
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
        ja({
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
      return it + t
    }
  })(),
  vl = /* @__PURE__ */ (function () {
    var e = function (i) {
        return be(i)
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
            be(s.SheetNames[o]) +
            `" table:style-name="ta1">
`
        )
        var f = 0,
          c = 0,
          u = zt(i['!ref'] || 'A1'),
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
          g = i['!rows'] || []
        for (f = 0; f < u.s.r; ++f)
          (d = g[f] ? ' table:style-name="ro' + g[f].ods + '"' : ''),
            l.push(
              '        <table:table-row' +
                d +
                `></table:table-row>
`
            )
        for (; f <= u.e.r; ++f) {
          for (
            d = g[f] ? ' table:style-name="ro' + g[f].ods + '"' : '',
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
            var y = !1,
              O = {},
              F = ''
            for (p = 0; p != h.length; ++p)
              if (!(h[p].s.c > c) && !(h[p].s.r > f) && !(h[p].e.c < c) && !(h[p].e.r < f)) {
                ;(h[p].s.c != c || h[p].s.r != f) && (y = !0),
                  (O['table:number-columns-spanned'] = h[p].e.c - h[p].s.c + 1),
                  (O['table:number-rows-spanned'] = h[p].e.r - h[p].s.r + 1)
                break
              }
            if (y) {
              l.push(r)
              continue
            }
            var b = Le({ r: f, c }),
              J = m ? (i[f] || [])[c] : i[b]
            if (
              J &&
              J.f &&
              ((O['table:formula'] = be(f4(J.f))), J.F && J.F.slice(0, b.length) == b)
            ) {
              var ae = zt(J.F)
              ;(O['table:number-matrix-columns-spanned'] = ae.e.c - ae.s.c + 1),
                (O['table:number-matrix-rows-spanned'] = ae.e.r - ae.s.r + 1)
            }
            if (!J) {
              l.push(t)
              continue
            }
            switch (J.t) {
              case 'b':
                ;(F = J.v ? 'TRUE' : 'FALSE'),
                  (O['office:value-type'] = 'boolean'),
                  (O['office:boolean-value'] = J.v ? 'true' : 'false')
                break
              case 'n':
                ;(F = J.w || String(J.v || 0)),
                  (O['office:value-type'] = 'float'),
                  (O['office:value'] = J.v || 0)
                break
              case 's':
              case 'str':
                ;(F = J.v == null ? '' : J.v), (O['office:value-type'] = 'string')
                break
              case 'd':
                ;(F = J.w || Mt(J.v).toISOString()),
                  (O['office:value-type'] = 'date'),
                  (O['office:date-value'] = Mt(J.v).toISOString()),
                  (O['table:style-name'] = 'ce1')
                break
              default:
                l.push(t)
                continue
            }
            var C = e(F)
            if (J.l && J.l.Target) {
              var W = J.l.Target
              ;(W = W.charAt(0) == '#' ? '#' + l4(W.slice(1)) : W),
                W.charAt(0) != '#' && !W.match(/^\w+:/) && (W = '../' + W),
                (C = Z('text:a', C, { 'xlink:href': W.replace(/&/g, '&amp;') }))
            }
            l.push(
              '          ' +
                Z('table:table-cell', Z('text:p', C, {}), O) +
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
                Fo(u), (u.ods = o)
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
      var l = [it],
        f = ja({
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
        c = ja({
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
          l.push(qu().replace(/office:document-meta/g, 'office:meta')))
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
        o.bookType == 'fods' ? l.push('</office:document>') : l.push('</office:document-content>'),
        l.join('')
      )
    }
  })()
function bh(e, t) {
  if (t.bookType == 'fods') return vl(e, t)
  var r = mo(),
    n = '',
    a = [],
    i = []
  return (
    (n = 'mimetype'),
    ve(r, n, 'application/vnd.oasis.opendocument.spreadsheet'),
    (n = 'content.xml'),
    ve(r, n, vl(e, t)),
    a.push([n, 'text/xml']),
    i.push([n, 'ContentFile']),
    (n = 'styles.xml'),
    ve(r, n, $3(e, t)),
    a.push([n, 'text/xml']),
    i.push([n, 'StylesFile']),
    (n = 'meta.xml'),
    ve(r, n, it + qu()),
    a.push([n, 'text/xml']),
    i.push([n, 'MetadataFile']),
    (n = 'manifest.rdf'),
    ve(r, n, eE(i)),
    a.push([n, 'application/rdf+xml']),
    (n = 'META-INF/manifest.xml'),
    ve(r, n, ZT(a)),
    r
  )
}
/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */
function es(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength)
}
function Y3(e) {
  return typeof TextEncoder < 'u' ? new TextEncoder().encode(e) : ir(Rr(e))
}
function j3(e, t) {
  e: for (var r = 0; r <= e.length - t.length; ++r) {
    for (var n = 0; n < t.length; ++n) if (e[r + n] != t[n]) continue e
    return !0
  }
  return !1
}
function on(e) {
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
function V3(e, t, r) {
  var n = Math.floor(r == 0 ? 0 : Math.LOG10E * Math.log(Math.abs(r))) + 6176 - 20,
    a = r / Math.pow(10, n - 6176)
  ;(e[t + 15] |= n >> 7), (e[t + 14] |= (n & 127) << 1)
  for (var i = 0; a >= 1; ++i, a /= 256) e[t + i] = a & 255
  e[t + 15] |= r >= 0 ? 0 : 128
}
function Va(e, t) {
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
function Ie(e) {
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
function Kn(e) {
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
function lt(e) {
  for (var t = [], r = [0]; r[0] < e.length; ) {
    var n = r[0],
      a = Va(e, r),
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
        ;(s = Va(e, r)), (o = e.slice(r[0], r[0] + s)), (r[0] += s)
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
          (t.push(Ie(n * 8 + a.type)), a.type == 2 && t.push(Ie(a.data.length)), t.push(a.data))
      })
    }),
    on(t)
  )
}
function nr(e) {
  for (var t, r = [], n = [0]; n[0] < e.length; ) {
    var a = Va(e, n),
      i = lt(e.slice(n[0], n[0] + a))
    n[0] += a
    var s = {
      id: Kn(i[1][0].data),
      messages: []
    }
    i[2].forEach(function (o) {
      var l = lt(o.data),
        f = Kn(l[3][0].data)
      s.messages.push({
        meta: l,
        data: e.slice(n[0], n[0] + f)
      }),
        (n[0] += f)
    }),
      (t = i[3]) != null && t[0] && (s.merge = Kn(i[3][0].data) >>> 0 > 0),
      r.push(s)
  }
  return r
}
function bn(e) {
  var t = []
  return (
    e.forEach(function (r) {
      var n = []
      ;(n[1] = [{ data: Ie(r.id), type: 0 }]),
        (n[2] = []),
        r.merge != null && (n[3] = [{ data: Ie(+!!r.merge), type: 0 }])
      var a = []
      r.messages.forEach(function (s) {
        a.push(s.data),
          (s.meta[3] = [{ type: 0, data: Ie(s.data.length) }]),
          n[2].push({ data: _t(s.meta), type: 2 })
      })
      var i = _t(n)
      t.push(Ie(i.length)),
        t.push(i),
        a.forEach(function (s) {
          return t.push(s)
        })
    }),
    on(t)
  )
}
function G3(e, t) {
  if (e != 0) throw new Error('Unexpected Snappy chunk type '.concat(e))
  for (var r = [0], n = Va(t, r), a = []; r[0] < t.length; ) {
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
                  (t[r[0]] | (t[r[0] + 1] << 8) | (t[r[0] + 2] << 16) | (t[r[0] + 3] << 24)) >>> 0),
                (r[0] += 4))),
        (a = [on(a)]),
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
  var c = on(a)
  if (c.length != n) throw new Error('Unexpected length: '.concat(c.length, ' != ').concat(n))
  return c
}
function ar(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var n = e[r++],
      a = e[r] | (e[r + 1] << 8) | (e[r + 2] << 16)
    ;(r += 3), t.push(G3(n, e.slice(r, r + a))), (r += a)
  }
  if (r !== e.length) throw new Error('data is not a valid framed stream!')
  return on(t)
}
function Ln(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var n = Math.min(e.length - r, 268435455),
      a = new Uint8Array(4)
    t.push(a)
    var i = Ie(n),
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
          t.push(new Uint8Array([248, (n - 1) & 255, ((n - 1) >> 8) & 255, ((n - 1) >> 16) & 255])))
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
  return on(t)
}
function Js(e, t) {
  var r = new Uint8Array(32),
    n = es(r),
    a = 12,
    i = 0
  switch (((r[0] = 5), e.t)) {
    case 'n':
      ;(r[1] = 2), V3(r, a, e.v), (i |= 1), (a += 16)
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
function Zs(e, t) {
  var r = new Uint8Array(32),
    n = es(r),
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
function Gr(e) {
  var t = lt(e)
  return Va(t[1][0].data)
}
function z3(e, t, r) {
  var n, a, i, s
  if (!((n = e[6]) != null && n[0]) || !((a = e[7]) != null && a[0]))
    throw 'Mutation only works on post-BNC storages!'
  var o =
    (((s = (i = e[8]) == null ? void 0 : i[0]) == null ? void 0 : s.data) &&
      Kn(e[8][0].data) > 0) ||
    !1
  if (o) throw 'Math only works with normal offsets'
  for (
    var l = 0, f = es(e[7][0].data), c = 0, u = [], h = es(e[4][0].data), p = 0, m = [], d = 0;
    d < t.length;
    ++d
  ) {
    if (t[d] == null) {
      f.setUint16(d * 2, 65535, !0), h.setUint16(d * 2, 65535)
      continue
    }
    f.setUint16(d * 2, c, !0), h.setUint16(d * 2, p, !0)
    var g, y
    switch (typeof t[d]) {
      case 'string':
        ;(g = Js({ t: 's', v: t[d] }, r)), (y = Zs({ t: 's', v: t[d] }, r))
        break
      case 'number':
        ;(g = Js({ t: 'n', v: t[d] }, r)), (y = Zs({ t: 'n', v: t[d] }, r))
        break
      case 'boolean':
        ;(g = Js({ t: 'b', v: t[d] }, r)), (y = Zs({ t: 'b', v: t[d] }, r))
        break
      default:
        throw new Error('Unsupported value ' + t[d])
    }
    u.push(g), (c += g.length), m.push(y), (p += y.length), ++l
  }
  for (e[2][0].data = Ie(l); d < e[7][0].data.length / 2; ++d)
    f.setUint16(d * 2, 65535, !0), h.setUint16(d * 2, 65535, !0)
  return (e[6][0].data = on(u)), (e[3][0].data = on(m)), l
}
function X3(e, t) {
  if (!t || !t.numbers) throw new Error('Must pass a `numbers` option -- check the README')
  var r = e.Sheets[e.SheetNames[0]]
  e.SheetNames.length > 1 &&
    console.error('The Numbers writer currently writes only the first table')
  var n = zt(r['!ref'])
  n.s.r = n.s.c = 0
  var a = !1
  n.e.c > 9 && ((a = !0), (n.e.c = 9)),
    n.e.r > 49 && ((a = !0), (n.e.r = 49)),
    a && console.error('The Numbers writer is currently limited to '.concat(at(n)))
  var i = ts(r, { range: n, header: 1 }),
    s = ['~Sh33tJ5~']
  i.forEach(function (I) {
    return I.forEach(function (D) {
      typeof D == 'string' && s.push(D)
    })
  })
  var o = {},
    l = [],
    f = Be.read(t.numbers, { type: 'base64' })
  f.FileIndex.map(function (I, D) {
    return [I, f.FullPaths[D]]
  }).forEach(function (I) {
    var D = I[0],
      A = I[1]
    if (D.type == 2 && !!D.name.match(/\.iwa/)) {
      var Y = D.content,
        ce = ar(Y),
        ue = nr(ce)
      ue.forEach(function (le) {
        l.push(le.id),
          (o[le.id] = { deps: [], location: A, type: Kn(le.messages[0].meta[1][0].data) })
      })
    }
  }),
    l.sort(function (I, D) {
      return I - D
    })
  var c = l
    .filter(function (I) {
      return I > 1
    })
    .map(function (I) {
      return [I, Ie(I)]
    })
  f.FileIndex.map(function (I, D) {
    return [I, f.FullPaths[D]]
  }).forEach(function (I) {
    var D = I[0]
    if ((I[1], !!D.name.match(/\.iwa/))) {
      var A = nr(ar(D.content))
      A.forEach(function (Y) {
        Y.messages.forEach(function (ce) {
          c.forEach(function (ue) {
            Y.messages.some(function (le) {
              return Kn(le.meta[1][0].data) != 11006 && j3(le.data, ue[1])
            }) && o[ue[0]].deps.push(Y.id)
          })
        })
      })
    }
  })
  for (var u = Be.find(f, o[1].location), h = nr(ar(u.content)), p, m = 0; m < h.length; ++m) {
    var d = h[m]
    d.id == 1 && (p = d)
  }
  var g = Gr(lt(p.messages[0].data)[1][0].data)
  for (u = Be.find(f, o[g].location), h = nr(ar(u.content)), m = 0; m < h.length; ++m)
    (d = h[m]), d.id == g && (p = d)
  for (
    g = Gr(lt(p.messages[0].data)[2][0].data),
      u = Be.find(f, o[g].location),
      h = nr(ar(u.content)),
      m = 0;
    m < h.length;
    ++m
  )
    (d = h[m]), d.id == g && (p = d)
  for (
    g = Gr(lt(p.messages[0].data)[2][0].data),
      u = Be.find(f, o[g].location),
      h = nr(ar(u.content)),
      m = 0;
    m < h.length;
    ++m
  )
    (d = h[m]), d.id == g && (p = d)
  var y = lt(p.messages[0].data)
  {
    ;(y[6][0].data = Ie(n.e.r + 1)), (y[7][0].data = Ie(n.e.c + 1))
    var O = Gr(y[46][0].data),
      F = Be.find(f, o[O].location),
      b = nr(ar(F.content))
    {
      for (var J = 0; J < b.length && b[J].id != O; ++J);
      if (b[J].id != O) throw 'Bad ColumnRowUIDMapArchive'
      var ae = lt(b[J].messages[0].data)
      ;(ae[1] = []), (ae[2] = []), (ae[3] = [])
      for (var C = 0; C <= n.e.c; ++C) {
        var W = []
        ;(W[1] = W[2] = [{ type: 0, data: Ie(C + 420690) }]),
          ae[1].push({ type: 2, data: _t(W) }),
          ae[2].push({ type: 0, data: Ie(C) }),
          ae[3].push({ type: 0, data: Ie(C) })
      }
      ;(ae[4] = []), (ae[5] = []), (ae[6] = [])
      for (var M = 0; M <= n.e.r; ++M)
        (W = []),
          (W[1] = W[2] = [{ type: 0, data: Ie(M + 726270) }]),
          ae[4].push({ type: 2, data: _t(W) }),
          ae[5].push({ type: 0, data: Ie(M) }),
          ae[6].push({ type: 0, data: Ie(M) })
      b[J].messages[0].data = _t(ae)
    }
    ;(F.content = Ln(bn(b))), (F.size = F.content.length), delete y[46]
    var j = lt(y[4][0].data)
    {
      j[7][0].data = Ie(n.e.r + 1)
      var V = lt(j[1][0].data),
        G = Gr(V[2][0].data)
      ;(F = Be.find(f, o[G].location)), (b = nr(ar(F.content)))
      {
        if (b[0].id != G) throw 'Bad HeaderStorageBucket'
        var ne = lt(b[0].messages[0].data)
        for (M = 0; M < i.length; ++M) {
          var Ne = lt(ne[2][0].data)
          ;(Ne[1][0].data = Ie(M)),
            (Ne[4][0].data = Ie(i[M].length)),
            (ne[2][M] = { type: ne[2][0].type, data: _t(Ne) })
        }
        b[0].messages[0].data = _t(ne)
      }
      ;(F.content = Ln(bn(b))), (F.size = F.content.length)
      var me = Gr(j[2][0].data)
      ;(F = Be.find(f, o[me].location)), (b = nr(ar(F.content)))
      {
        if (b[0].id != me) throw 'Bad HeaderStorageBucket'
        for (ne = lt(b[0].messages[0].data), C = 0; C <= n.e.c; ++C)
          (Ne = lt(ne[2][0].data)),
            (Ne[1][0].data = Ie(C)),
            (Ne[4][0].data = Ie(n.e.r + 1)),
            (ne[2][C] = { type: ne[2][0].type, data: _t(Ne) })
        b[0].messages[0].data = _t(ne)
      }
      ;(F.content = Ln(bn(b))), (F.size = F.content.length)
      var st = Gr(j[4][0].data)
      ;(function () {
        for (
          var I = Be.find(f, o[st].location), D = nr(ar(I.content)), A, Y = 0;
          Y < D.length;
          ++Y
        ) {
          var ce = D[Y]
          ce.id == st && (A = ce)
        }
        var ue = lt(A.messages[0].data)
        {
          ue[3] = []
          var le = []
          s.forEach(function (Te, mt) {
            ;(le[1] = [{ type: 0, data: Ie(mt) }]),
              (le[2] = [{ type: 0, data: Ie(1) }]),
              (le[3] = [{ type: 2, data: Y3(Te) }]),
              ue[3].push({ type: 2, data: _t(le) })
          })
        }
        A.messages[0].data = _t(ue)
        var re = bn(D),
          Pe = Ln(re)
        ;(I.content = Pe), (I.size = I.content.length)
      })()
      var ee = lt(j[3][0].data)
      {
        var Ee = ee[1][0]
        delete ee[2]
        var Se = lt(Ee.data)
        {
          var ot = Gr(Se[2][0].data)
          ;(function () {
            for (
              var I = Be.find(f, o[ot].location), D = nr(ar(I.content)), A, Y = 0;
              Y < D.length;
              ++Y
            ) {
              var ce = D[Y]
              ce.id == ot && (A = ce)
            }
            var ue = lt(A.messages[0].data)
            {
              delete ue[6], delete ee[7]
              var le = new Uint8Array(ue[5][0].data)
              ue[5] = []
              for (var re = 0, Pe = 0; Pe <= n.e.r; ++Pe) {
                var Te = lt(le)
                ;(re += z3(Te, i[Pe], s)),
                  (Te[1][0].data = Ie(Pe)),
                  ue[5].push({ data: _t(Te), type: 2 })
              }
              ;(ue[1] = [{ type: 0, data: Ie(n.e.c + 1) }]),
                (ue[2] = [{ type: 0, data: Ie(n.e.r + 1) }]),
                (ue[3] = [{ type: 0, data: Ie(re) }]),
                (ue[4] = [{ type: 0, data: Ie(n.e.r + 1) }])
            }
            A.messages[0].data = _t(ue)
            var mt = bn(D),
              Oe = Ln(mt)
            ;(I.content = Oe), (I.size = I.content.length)
          })()
        }
        Ee.data = _t(Se)
      }
      j[3][0].data = _t(ee)
    }
    y[4][0].data = _t(j)
  }
  p.messages[0].data = _t(y)
  var ft = bn(h),
    S = Ln(ft)
  return (u.content = S), (u.size = u.content.length), f
}
function K3(e) {
  return function (r) {
    for (var n = 0; n != e.length; ++n) {
      var a = e[n]
      r[a[0]] === void 0 && (r[a[0]] = a[1]), a[2] === 'n' && (r[a[0]] = Number(r[a[0]]))
    }
  }
}
function No(e) {
  K3([
    ['cellDates', !1],
    ['bookSST', !1],
    ['bookType', 'xlsx'],
    ['compression', !1],
    ['WTF', !1]
  ])(e)
}
function q3(e, t) {
  return t.bookType == 'ods'
    ? bh(e, t)
    : t.bookType == 'numbers'
    ? X3(e, t)
    : t.bookType == 'xlsb'
    ? J3(e, t)
    : Z3(e, t)
}
function J3(e, t) {
  ;($n = 1024),
    e && !e.SSF && (e.SSF = Wt(Je)),
    e &&
      e.SSF &&
      (Es(), ri(e.SSF), (t.revssf = Ss(e.SSF)), (t.revssf[e.SSF[65535]] = 0), (t.ssf = e.SSF)),
    (t.rels = {}),
    (t.wbrels = {}),
    (t.Strings = []),
    (t.Strings.Count = 0),
    (t.Strings.Unique = 0),
    Ia
      ? (t.revStrings = /* @__PURE__ */ new Map())
      : ((t.revStrings = {}), (t.revStrings.foo = []), delete t.revStrings.foo)
  var r = t.bookType == 'xlsb' ? 'bin' : 'xml',
    n = gh.indexOf(t.bookType) > -1,
    a = zu()
  No((t = t || {}))
  var i = mo(),
    s = '',
    o = 0
  if (
    ((t.cellXfs = []),
    ln(t.cellXfs, {}, { revssf: { General: 0 } }),
    e.Props || (e.Props = {}),
    (s = 'docProps/core.xml'),
    ve(i, s, Ju(e.Props, t)),
    a.coreprops.push(s),
    Me(t.rels, 2, s, De.CORE_PROPS),
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
      ve(i, s, Qu(e.Props)),
      a.extprops.push(s),
      Me(t.rels, 3, s, De.EXT_PROPS),
      e.Custprops !== e.Props &&
        yt(e.Custprops || {}).length > 0 &&
        ((s = 'docProps/custom.xml'),
        ve(i, s, eh(e.Custprops)),
        a.custprops.push(s),
        Me(t.rels, 4, s, De.CUST_PROPS)),
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
          ve(i, s, e3(o - 1, s, t, e, c)),
          a.sheets.push(s),
          Me(t.wbrels, -1, 'worksheets/sheet' + o + '.' + r, De.WS[0])
    }
    if (u) {
      var p = u['!comments'],
        m = !1,
        d = ''
      p &&
        p.length > 0 &&
        ((d = 'xl/comments' + o + '.' + r),
        ve(i, d, n3(p, d)),
        a.comments.push(d),
        Me(c, -1, '../comments' + o + '.' + r, De.CMNT),
        (m = !0)),
        u['!legacy'] && m && ve(i, 'xl/drawings/vmlDrawing' + o + '.vml', mh(o, u['!comments'])),
        delete u['!comments'],
        delete u['!legacy']
    }
    c['!id'].rId1 && ve(i, Ku(s), zn(c))
  }
  return (
    t.Strings != null &&
      t.Strings.length > 0 &&
      ((s = 'xl/sharedStrings.' + r),
      ve(i, s, r3(t.Strings, s, t)),
      a.strs.push(s),
      Me(t.wbrels, -1, 'sharedStrings.' + r, De.SST)),
    (s = 'xl/workbook.' + r),
    ve(i, s, QA(e, s)),
    a.workbooks.push(s),
    Me(t.rels, 1, s, De.WB),
    (s = 'xl/theme/theme1.xml'),
    ve(i, s, ph(e.Themes, t)),
    a.themes.push(s),
    Me(t.wbrels, -1, 'theme/theme1.xml', De.THEME),
    (s = 'xl/styles.' + r),
    ve(i, s, t3(e, s, t)),
    a.styles.push(s),
    Me(t.wbrels, -1, 'styles.' + r, De.STY),
    e.vbaraw &&
      n &&
      ((s = 'xl/vbaProject.bin'),
      ve(i, s, e.vbaraw),
      a.vba.push(s),
      Me(t.wbrels, -1, 'vbaProject.bin', De.VBA)),
    (s = 'xl/metadata.' + r),
    ve(i, s, a3(s)),
    a.metadata.push(s),
    Me(t.wbrels, -1, 'metadata.' + r, De.XLMETA),
    ve(i, '[Content_Types].xml', Xu(a, t)),
    ve(i, '_rels/.rels', zn(t.rels)),
    ve(i, 'xl/_rels/workbook.' + r + '.rels', zn(t.wbrels)),
    delete t.revssf,
    delete t.ssf,
    i
  )
}
function Z3(e, t) {
  ;($n = 1024),
    e && !e.SSF && (e.SSF = Wt(Je)),
    e &&
      e.SSF &&
      (Es(), ri(e.SSF), (t.revssf = Ss(e.SSF)), (t.revssf[e.SSF[65535]] = 0), (t.ssf = e.SSF)),
    (t.rels = {}),
    (t.wbrels = {}),
    (t.Strings = []),
    (t.Strings.Count = 0),
    (t.Strings.Unique = 0),
    Ia
      ? (t.revStrings = /* @__PURE__ */ new Map())
      : ((t.revStrings = {}), (t.revStrings.foo = []), delete t.revStrings.foo)
  var r = 'xml',
    n = gh.indexOf(t.bookType) > -1,
    a = zu()
  No((t = t || {}))
  var i = mo(),
    s = '',
    o = 0
  if (
    ((t.cellXfs = []),
    ln(t.cellXfs, {}, { revssf: { General: 0 } }),
    e.Props || (e.Props = {}),
    (s = 'docProps/core.xml'),
    ve(i, s, Ju(e.Props, t)),
    a.coreprops.push(s),
    Me(t.rels, 2, s, De.CORE_PROPS),
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
    ve(i, s, Qu(e.Props)),
    a.extprops.push(s),
    Me(t.rels, 3, s, De.EXT_PROPS),
    e.Custprops !== e.Props &&
      yt(e.Custprops || {}).length > 0 &&
      ((s = 'docProps/custom.xml'),
      ve(i, s, eh(e.Custprops)),
      a.custprops.push(s),
      Me(t.rels, 4, s, De.CUST_PROPS))
  var c = ['SheetJ5']
  for (t.tcid = 0, o = 1; o <= e.SheetNames.length; ++o) {
    var u = { '!id': {} },
      h = e.Sheets[e.SheetNames[o - 1]],
      p = (h || {})['!type'] || 'sheet'
    switch (p) {
      case 'chart':
      default:
        ;(s = 'xl/worksheets/sheet' + o + '.' + r),
          ve(i, s, Fh(o - 1, t, e, u)),
          a.sheets.push(s),
          Me(t.wbrels, -1, 'worksheets/sheet' + o + '.' + r, De.WS[0])
    }
    if (h) {
      var m = h['!comments'],
        d = !1,
        g = ''
      if (m && m.length > 0) {
        var y = !1
        m.forEach(function (O) {
          O[1].forEach(function (F) {
            F.T == !0 && (y = !0)
          })
        }),
          y &&
            ((g = 'xl/threadedComments/threadedComment' + o + '.' + r),
            ve(i, g, CS(m, c, t)),
            a.threadedcomments.push(g),
            Me(u, -1, '../threadedComments/threadedComment' + o + '.' + r, De.TCMNT)),
          (g = 'xl/comments' + o + '.' + r),
          ve(i, g, _h(m)),
          a.comments.push(g),
          Me(u, -1, '../comments' + o + '.' + r, De.CMNT),
          (d = !0)
      }
      h['!legacy'] && d && ve(i, 'xl/drawings/vmlDrawing' + o + '.vml', mh(o, h['!comments'])),
        delete h['!comments'],
        delete h['!legacy']
    }
    u['!id'].rId1 && ve(i, Ku(s), zn(u))
  }
  return (
    t.Strings != null &&
      t.Strings.length > 0 &&
      ((s = 'xl/sharedStrings.' + r),
      ve(i, s, fh(t.Strings, t)),
      a.strs.push(s),
      Me(t.wbrels, -1, 'sharedStrings.' + r, De.SST)),
    (s = 'xl/workbook.' + r),
    ve(i, s, Rh(e)),
    a.workbooks.push(s),
    Me(t.rels, 1, s, De.WB),
    (s = 'xl/theme/theme1.xml'),
    ve(i, s, ph(e.Themes, t)),
    a.themes.push(s),
    Me(t.wbrels, -1, 'theme/theme1.xml', De.THEME),
    (s = 'xl/styles.' + r),
    ve(i, s, hh(e, t)),
    a.styles.push(s),
    Me(t.wbrels, -1, 'styles.' + r, De.STY),
    e.vbaraw &&
      n &&
      ((s = 'xl/vbaProject.bin'),
      ve(i, s, e.vbaraw),
      a.vba.push(s),
      Me(t.wbrels, -1, 'vbaProject.bin', De.VBA)),
    (s = 'xl/metadata.' + r),
    ve(i, s, xh()),
    a.metadata.push(s),
    Me(t.wbrels, -1, 'metadata.' + r, De.XLMETA),
    c.length > 1 &&
      ((s = 'xl/persons/person.xml'),
      ve(i, s, RS(c)),
      a.people.push(s),
      Me(t.wbrels, -1, 'persons/person.xml', De.PEOPLE)),
    ve(i, '[Content_Types].xml', Xu(a, t)),
    ve(i, '_rels/.rels', zn(t.rels)),
    ve(i, 'xl/_rels/workbook.' + r + '.rels', zn(t.wbrels)),
    delete t.revssf,
    delete t.ssf,
    i
  )
}
function Q3(e, t) {
  var r = ''
  switch ((t || {}).type || 'base64') {
    case 'buffer':
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]]
    case 'base64':
      r = Lr(e.slice(0, 12))
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
function Lh(e, t) {
  switch (t.type) {
    case 'base64':
    case 'binary':
      break
    case 'buffer':
    case 'array':
      t.type = ''
      break
    case 'file':
      return ni(t.file, Be.write(e, { type: ke ? 'buffer' : '' }))
    case 'string':
      throw new Error("'string' output type invalid for '" + t.bookType + "' files")
    default:
      throw new Error('Unrecognized type ' + t.type)
  }
  return Be.write(e, t)
}
function eO(e, t) {
  var r = Wt(t || {}),
    n = q3(e, r)
  return tO(n, r)
}
function tO(e, t) {
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
    ? Be.write(e, {
        fileType: 'zip',
        type: { nodebuffer: 'buffer', string: 'binary' }[r.type] || r.type,
        compression: !!t.compression
      })
    : e.generate(r)
  if (typeof Deno < 'u' && typeof a == 'string') {
    if (t.type == 'binary' || t.type == 'base64') return a
    a = new Uint8Array(Ts(a))
  }
  return t.password && typeof encrypt_agile < 'u'
    ? Lh(encrypt_agile(a, t.password), t)
    : t.type === 'file'
    ? ni(t.file, a)
    : t.type == 'string'
    ? Ra(a)
    : a
}
function rO(e, t) {
  var r = t || {},
    n = g3(e, r)
  return Lh(n, r)
}
function pr(e, t, r) {
  r || (r = '')
  var n = r + e
  switch (t.type) {
    case 'base64':
      return $a(Rr(n))
    case 'binary':
      return Rr(n)
    case 'string':
      return e
    case 'file':
      return ni(t.file, n, 'utf8')
    case 'buffer':
      return ke
        ? Yr(n, 'utf8')
        : typeof TextEncoder < 'u'
        ? new TextEncoder().encode(n)
        : pr(n, { type: 'binary' })
            .split('')
            .map(function (a) {
              return a.charCodeAt(0)
            })
  }
  throw new Error('Unrecognized type ' + t.type)
}
function nO(e, t) {
  switch (t.type) {
    case 'base64':
      return $a(e)
    case 'binary':
      return e
    case 'string':
      return e
    case 'file':
      return ni(t.file, e, 'binary')
    case 'buffer':
      return ke
        ? Yr(e, 'binary')
        : e.split('').map(function (r) {
            return r.charCodeAt(0)
          })
  }
  throw new Error('Unrecognized type ' + t.type)
}
function Oi(e, t) {
  switch (t.type) {
    case 'string':
    case 'base64':
    case 'binary':
      for (var r = '', n = 0; n < e.length; ++n) r += String.fromCharCode(e[n])
      return t.type == 'base64' ? $a(r) : t.type == 'string' ? Ra(r) : r
    case 'file':
      return ni(t.file, e)
    case 'buffer':
      return e
    default:
      throw new Error('Unrecognized type ' + t.type)
  }
}
function Bh(e, t) {
  Rw(), $A(e)
  var r = Wt(t || {})
  if ((r.cellStyles && ((r.cellNF = !0), (r.sheetStubs = !0)), r.type == 'array')) {
    r.type = 'binary'
    var n = Bh(e, r)
    return (r.type = 'array'), Ts(n)
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
      return pr(m3(e, r), r)
    case 'slk':
    case 'sylk':
      return pr(UE.from_sheet(e.Sheets[e.SheetNames[a]], r), r)
    case 'htm':
    case 'html':
      return pr(Ph(e.Sheets[e.SheetNames[a]], r), r)
    case 'txt':
      return nO(Uh(e.Sheets[e.SheetNames[a]], r), r)
    case 'csv':
      return pr(Po(e.Sheets[e.SheetNames[a]], r), r, '\uFEFF')
    case 'dif':
      return pr(WE.from_sheet(e.Sheets[e.SheetNames[a]], r), r)
    case 'dbf':
      return Oi(BE.from_sheet(e.Sheets[e.SheetNames[a]], r), r)
    case 'prn':
      return pr(HE.from_sheet(e.Sheets[e.SheetNames[a]], r), r)
    case 'rtf':
      return pr(XE.from_sheet(e.Sheets[e.SheetNames[a]], r), r)
    case 'eth':
      return pr(oh.from_sheet(e.Sheets[e.SheetNames[a]], r), r)
    case 'fods':
      return pr(bh(e, r), r)
    case 'wk1':
      return Oi(hl.sheet_to_wk1(e.Sheets[e.SheetNames[a]], r), r)
    case 'wk3':
      return Oi(hl.book_to_wk3(e, r), r)
    case 'biff2':
      r.biff || (r.biff = 2)
    case 'biff3':
      r.biff || (r.biff = 3)
    case 'biff4':
      return r.biff || (r.biff = 4), Oi(Nh(e, r), r)
    case 'biff5':
      r.biff || (r.biff = 5)
    case 'biff8':
    case 'xla':
    case 'xls':
      return r.biff || (r.biff = 8), rO(e, r)
    case 'xlsx':
    case 'xlsm':
    case 'xlam':
    case 'xlsb':
    case 'numbers':
    case 'ods':
      return eO(e, r)
    default:
      throw new Error('Unrecognized bookType |' + r.bookType + '|')
  }
}
function aO(e, t, r, n, a, i, s, o) {
  var l = St(r),
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
        else h[i[p]] = c && (m.t !== 'n' || (m.t === 'n' && o.rawNumbers !== !1)) ? d : Ur(m, d, o)
        d != null && (u = !1)
      }
    }
  return { row: h, isempty: u }
}
function ts(e, t) {
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
      l = Ge(c)
      break
    case 'number':
      ;(l = Ge(e['!ref'])), (l.s.r = c)
      break
    default:
      l = c
  }
  n > 0 && (a = 0)
  var u = St(l.s.r),
    h = [],
    p = [],
    m = 0,
    d = 0,
    g = Array.isArray(e),
    y = l.s.r,
    O = 0,
    F = {}
  g && !e[y] && (e[y] = [])
  var b = (f.skipHidden && e['!cols']) || [],
    J = (f.skipHidden && e['!rows']) || []
  for (O = l.s.c; O <= l.e.c; ++O)
    if (!(b[O] || {}).hidden)
      switch (((h[O] = Ft(O)), (r = g ? e[y][O] : e[h[O] + u]), n)) {
        case 1:
          i[O] = O - l.s.c
          break
        case 2:
          i[O] = h[O]
          break
        case 3:
          i[O] = f.header[O - l.s.c]
          break
        default:
          if (
            (r == null && (r = { w: '__EMPTY', t: 's' }),
            (o = s = Ur(r, null, f)),
            (d = F[s] || 0),
            !d)
          )
            F[s] = 1
          else {
            do o = s + '_' + d++
            while (F[o])
            ;(F[s] = d), (F[o] = 1)
          }
          i[O] = o
      }
  for (y = l.s.r + a; y <= l.e.r; ++y)
    if (!(J[y] || {}).hidden) {
      var ae = aO(e, l, y, h, n, i, g, f)
      ;(ae.isempty === !1 || (n === 1 ? f.blankrows !== !1 : !!f.blankrows)) && (p[m++] = ae.row)
    }
  return (p.length = m), p
}
var wl = /"/g
function iO(e, t, r, n, a, i, s, o) {
  for (var l = !0, f = [], c = '', u = St(r), h = t.s.c; h <= t.e.c; ++h)
    if (!!n[h]) {
      var p = o.dense ? (e[r] || [])[h] : e[n[h] + u]
      if (p == null) c = ''
      else if (p.v != null) {
        ;(l = !1), (c = '' + (o.rawNumbers && p.t == 'n' ? p.v : Ur(p, null, o)))
        for (var m = 0, d = 0; m !== c.length; ++m)
          if ((d = c.charCodeAt(m)) === a || d === i || d === 34 || o.forceQuotes) {
            c = '"' + c.replace(wl, '""') + '"'
            break
          }
        c == 'ID' && (c = '"ID"')
      } else
        p.f != null && !p.F
          ? ((l = !1),
            (c = '=' + p.f),
            c.indexOf(',') >= 0 && (c = '"' + c.replace(wl, '""') + '"'))
          : (c = '')
      f.push(c)
    }
  return o.blankrows === !1 && l ? null : f.join(s)
}
function Po(e, t) {
  var r = [],
    n = t == null ? {} : t
  if (e == null || e['!ref'] == null) return ''
  var a = Ge(e['!ref']),
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
    (h[m] || {}).hidden || (u[m] = Ft(m))
  for (var d = 0, g = a.s.r; g <= a.e.r; ++g)
    (p[g] || {}).hidden ||
      ((c = iO(e, a, g, u, s, l, i, n)),
      c != null &&
        (n.strip && (c = c.replace(f, '')),
        (c || n.blankrows !== !1) && r.push((d++ ? o : '') + c)))
  return delete n.dense, r.join('')
}
function Uh(e, t) {
  t || (t = {}),
    (t.FS = '	'),
    (t.RS = `
`)
  var r = Po(e, t)
  return r
}
function sO(e) {
  var t = '',
    r,
    n = ''
  if (e == null || e['!ref'] == null) return []
  var a = Ge(e['!ref']),
    i = '',
    s = [],
    o,
    l = [],
    f = Array.isArray(e)
  for (o = a.s.c; o <= a.e.c; ++o) s[o] = Ft(o)
  for (var c = a.s.r; c <= a.e.r; ++c)
    for (i = St(c), o = a.s.c; o <= a.e.c; ++o)
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
function Wh(e, t, r) {
  var n = r || {},
    a = +!n.skipHeader,
    i = e || {},
    s = 0,
    o = 0
  if (i && n.origin != null)
    if (typeof n.origin == 'number') s = n.origin
    else {
      var l = typeof n.origin == 'string' ? pt(n.origin) : n.origin
      ;(s = l.r), (o = l.c)
    }
  var f,
    c = { s: { c: 0, r: 0 }, e: { c: o, r: s + t.length - 1 + a } }
  if (i['!ref']) {
    var u = Ge(i['!ref'])
    ;(c.e.c = Math.max(c.e.c, u.e.c)),
      (c.e.r = Math.max(c.e.r, u.e.r)),
      s == -1 && ((s = u.e.r + 1), (c.e.r = s + t.length - 1 + a))
  } else s == -1 && ((s = 0), (c.e.r = t.length - 1 + a))
  var h = n.header || [],
    p = 0
  t.forEach(function (d, g) {
    yt(d).forEach(function (y) {
      ;(p = h.indexOf(y)) == -1 && (h[(p = h.length)] = y)
      var O = d[y],
        F = 'z',
        b = '',
        J = Le({ c: o + p, r: s + g + a })
      ;(f = Ga(i, J)),
        O && typeof O == 'object' && !(O instanceof Date)
          ? (i[J] = O)
          : (typeof O == 'number'
              ? (F = 'n')
              : typeof O == 'boolean'
              ? (F = 'b')
              : typeof O == 'string'
              ? (F = 's')
              : O instanceof Date
              ? ((F = 'd'), n.cellDates || ((F = 'n'), (O = Ut(O))), (b = n.dateNF || Je[14]))
              : O === null && n.nullError && ((F = 'e'), (O = 0)),
            f
              ? ((f.t = F), (f.v = O), delete f.w, delete f.R, b && (f.z = b))
              : (i[J] = f = { t: F, v: O }),
            b && (f.z = b))
    })
  }),
    (c.e.c = Math.max(c.e.c, o + h.length - 1))
  var m = St(s)
  if (a) for (p = 0; p < h.length; ++p) i[Ft(p + o) + m] = { t: 's', v: h[p] }
  return (i['!ref'] = at(c)), i
}
function oO(e, t) {
  return Wh(null, e, t)
}
function Ga(e, t, r) {
  if (typeof t == 'string') {
    if (Array.isArray(e)) {
      var n = pt(t)
      return e[n.r] || (e[n.r] = []), e[n.r][n.c] || (e[n.r][n.c] = { t: 'z' })
    }
    return e[t] || (e[t] = { t: 'z' })
  }
  return typeof t != 'number' ? Ga(e, Le(t)) : Ga(e, Le({ r: t, c: r || 0 }))
}
function fO(e, t) {
  if (typeof t == 'number') {
    if (t >= 0 && e.SheetNames.length > t) return t
    throw new Error('Cannot find sheet # ' + t)
  } else if (typeof t == 'string') {
    var r = e.SheetNames.indexOf(t)
    if (r > -1) return r
    throw new Error('Cannot find sheet name |' + t + '|')
  } else throw new Error('Cannot find sheet |' + t + '|')
}
function lO() {
  return { SheetNames: [], Sheets: {} }
}
function cO(e, t, r, n) {
  var a = 1
  if (!r) for (; a <= 65535 && e.SheetNames.indexOf((r = 'Sheet' + a)) != -1; ++a, r = void 0);
  if (!r || e.SheetNames.length >= 65535) throw new Error('Too many worksheets')
  if (n && e.SheetNames.indexOf(r) >= 0) {
    var i = r.match(/(^.*?)(\d+)$/)
    a = (i && +i[2]) || 0
    var s = (i && i[1]) || r
    for (++a; a <= 65535 && e.SheetNames.indexOf((r = s + a)) != -1; ++a);
  }
  if ((Ch(r), e.SheetNames.indexOf(r) >= 0))
    throw new Error('Worksheet with name |' + r + '| already exists!')
  return e.SheetNames.push(r), (e.Sheets[r] = t), r
}
function uO(e, t, r) {
  e.Workbook || (e.Workbook = {}), e.Workbook.Sheets || (e.Workbook.Sheets = [])
  var n = fO(e, t)
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
function hO(e, t) {
  return (e.z = t), e
}
function Hh(e, t, r) {
  return t ? ((e.l = { Target: t }), r && (e.l.Tooltip = r)) : delete e.l, e
}
function dO(e, t, r) {
  return Hh(e, '#' + t, r)
}
function pO(e, t, r) {
  e.c || (e.c = []), e.c.push({ t, a: r || 'SheetJS' })
}
function xO(e, t, r, n) {
  for (
    var a = typeof t != 'string' ? t : Ge(t), i = typeof t == 'string' ? t : at(t), s = a.s.r;
    s <= a.e.r;
    ++s
  )
    for (var o = a.s.c; o <= a.e.c; ++o) {
      var l = Ga(e, s, o)
      ;(l.t = 'n'), (l.F = i), delete l.v, s == a.s.r && o == a.s.c && ((l.f = r), n && (l.D = !0))
    }
  return e
}
var A0 = {
  encode_col: Ft,
  encode_row: St,
  encode_cell: Le,
  encode_range: at,
  decode_col: Eo,
  decode_row: To,
  split_cell: kT,
  decode_cell: pt,
  decode_range: zt,
  format_cell: Ur,
  sheet_add_aoa: Hu,
  sheet_add_json: Wh,
  sheet_add_dom: Ih,
  aoa_to_sheet: ia,
  json_to_sheet: oO,
  table_to_sheet: Mh,
  table_to_book: W3,
  sheet_to_csv: Po,
  sheet_to_txt: Uh,
  sheet_to_json: ts,
  sheet_to_html: Ph,
  sheet_to_formulae: sO,
  sheet_to_row_object_array: ts,
  sheet_get_cell: Ga,
  book_new: lO,
  book_append_sheet: cO,
  book_set_sheet_visibility: uO,
  cell_set_number_format: hO,
  cell_set_hyperlink: Hh,
  cell_set_internal_link: dO,
  cell_add_comment: pO,
  sheet_set_array_formula: xO,
  consts: {
    SHEET_VISIBLE: 0,
    SHEET_HIDDEN: 1,
    SHEET_VERY_HIDDEN: 2
  }
}
class mO {
  constructor() {
    xe(this, 'SheetNames', [])
    xe(this, 'Sheets', {})
  }
}
const Tl = e => q(new Date(e)).format('yyyy/MM/DD HH:mm'),
  _O = e => {
    const t = {},
      r = {
        s: {
          r: 1e7,
          c: 1e7
        },
        e: {
          r: 0,
          c: 0
        }
      }
    for (let n = 0; n !== e.length; ++n)
      for (let a = 0; a !== e[n].length; ++a) {
        r.s.r > n && (r.s.r = n),
          r.s.c > a && (r.s.c = a),
          r.e.r < n && (r.e.r = n),
          r.e.c < a && (r.e.c = a)
        const i = {
          v: e[n][a],
          t: '',
          z: ''
        }
        if (i.v === null) continue
        const s = A0.encode_cell({ r: n, c: a })
        typeof i.v == 'number'
          ? (i.t = 'n')
          : typeof i.v == 'boolean'
          ? ((i.t = 's'),
            (i.z = T0.get_table()[14]),
            (i.v = Boolean(i.v).valueOf() ? '\u662F' : '\u5426'))
          : new Date(i.v) instanceof Date && Tl(i.v) !== 'Invalid date'
          ? ((i.t = 's'), (i.z = T0.get_table()[14]), (i.v = Tl(i.v)))
          : (i.t = 's'),
          (t[s] = i)
      }
    return r.s.c < 1e7 && (t['!ref'] = A0.encode_range(r)), t
  },
  gO = e => {
    const t = new ArrayBuffer(e.length),
      r = new Uint8Array(t)
    for (let n = 0; n !== e.length; ++n) r[n] = e.charCodeAt(n) & 255
    return t
  },
  vO = (e, t, r = '\u5217\u8868\u6570\u636E', n = 'xlsx', a, i) => {
    ;(t = [...t]), t.unshift(e)
    const s = 'SheetJs',
      o = new mO(),
      l = _O(t)
    if (
      (i &&
        i.length > 0 &&
        (l['!merges'] || (l['!merges'] = []),
        i.forEach(u => {
          l['!merges'].push(A0.decode_range(u))
        })),
      a)
    ) {
      const u = t.map(p =>
          p.map(m =>
            m === null
              ? {
                  wch: 10
                }
              : (m + '').toString().charCodeAt(0) > 255
              ? {
                  wch: m.toString().length * 2
                }
              : {
                  wch: (m + '').toString().length
                }
          )
        ),
        h = u[0]
      for (let p = 1; p < u.length; p++)
        for (let m = 0; m < u[p].length; m++) h[m].wch < u[p][m].wch && (h[m].wch = u[p][m].wch)
      l['!cols'] = h
    }
    o.SheetNames.push(s), (o.Sheets[s] = l)
    const f = Bh(o, {
        bookType: n,
        bookSST: !1,
        type: 'binary'
      }),
      c = new Blob([gO(f)], { type: 'application/octet-stream' })
    gc.exports.saveAs(c, `${r}.${n}`)
  }
/*! Element Plus Icons Vue v2.0.10 */
var wO = (e, t) => {
    let r = e.__vccOpts || e
    for (let [n, a] of t) r[n] = a
    return r
  },
  TO = {
    name: 'Search'
  },
  EO = {
    viewBox: '0 0 1024 1024',
    xmlns: 'http://www.w3.org/2000/svg'
  },
  SO = /* @__PURE__ */ Xr(
    'path',
    {
      fill: 'currentColor',
      d: 'm795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z'
    },
    null,
    -1
  ),
  yO = [SO]
function AO(e, t, r, n, a, i) {
  return ye(), gt('svg', EO, yO)
}
var OO = /* @__PURE__ */ wO(TO, [
  ['render', AO],
  ['__file', 'search.vue']
])
function $h(e, t) {
  return function () {
    return e.apply(t, arguments)
  }
}
const { toString: Yh } = Object.prototype,
  { getPrototypeOf: Io } = Object,
  Mo = (e => t => {
    const r = Yh.call(t)
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase())
  })(/* @__PURE__ */ Object.create(null)),
  jr = e => ((e = e.toLowerCase()), t => Mo(t) === e),
  Ds = e => t => typeof t === e,
  { isArray: fa } = Array,
  za = Ds('undefined')
function FO(e) {
  return (
    e !== null &&
    !za(e) &&
    e.constructor !== null &&
    !za(e.constructor) &&
    fn(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  )
}
const jh = jr('ArrayBuffer')
function DO(e) {
  let t
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && jh(e.buffer)),
    t
  )
}
const CO = Ds('string'),
  fn = Ds('function'),
  Vh = Ds('number'),
  bo = e => e !== null && typeof e == 'object',
  RO = e => e === !0 || e === !1,
  Ni = e => {
    if (Mo(e) !== 'object') return !1
    const t = Io(e)
    return (
      (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    )
  },
  kO = jr('Date'),
  NO = jr('File'),
  PO = jr('Blob'),
  IO = jr('FileList'),
  MO = e => bo(e) && fn(e.pipe),
  bO = e => {
    const t = '[object FormData]'
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        Yh.call(e) === t ||
        (fn(e.toString) && e.toString() === t))
    )
  },
  LO = jr('URLSearchParams'),
  BO = e => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''))
function fi(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > 'u') return
  let n, a
  if ((typeof e != 'object' && (e = [e]), fa(e)))
    for (n = 0, a = e.length; n < a; n++) t.call(null, e[n], n, e)
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = i.length
    let o
    for (n = 0; n < s; n++) (o = i[n]), t.call(null, e[o], o, e)
  }
}
function Gh(e, t) {
  t = t.toLowerCase()
  const r = Object.keys(e)
  let n = r.length,
    a
  for (; n-- > 0; ) if (((a = r[n]), t === a.toLowerCase())) return a
  return null
}
const zh = (() =>
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : global)(),
  Xh = e => !za(e) && e !== zh
function O0() {
  const { caseless: e } = (Xh(this) && this) || {},
    t = {},
    r = (n, a) => {
      const i = (e && Gh(t, a)) || a
      Ni(t[i]) && Ni(n)
        ? (t[i] = O0(t[i], n))
        : Ni(n)
        ? (t[i] = O0({}, n))
        : fa(n)
        ? (t[i] = n.slice())
        : (t[i] = n)
    }
  for (let n = 0, a = arguments.length; n < a; n++) arguments[n] && fi(arguments[n], r)
  return t
}
const UO = (e, t, r, { allOwnKeys: n } = {}) => (
    fi(
      t,
      (a, i) => {
        r && fn(a) ? (e[i] = $h(a, r)) : (e[i] = a)
      },
      { allOwnKeys: n }
    ),
    e
  ),
  WO = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  HO = (e, t, r, n) => {
    ;(e.prototype = Object.create(t.prototype, n)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', {
        value: t.prototype
      }),
      r && Object.assign(e.prototype, r)
  },
  $O = (e, t, r, n) => {
    let a, i, s
    const o = {}
    if (((t = t || {}), e == null)) return t
    do {
      for (a = Object.getOwnPropertyNames(e), i = a.length; i-- > 0; )
        (s = a[i]), (!n || n(s, e, t)) && !o[s] && ((t[s] = e[s]), (o[s] = !0))
      e = r !== !1 && Io(e)
    } while (e && (!r || r(e, t)) && e !== Object.prototype)
    return t
  },
  YO = (e, t, r) => {
    ;(e = String(e)), (r === void 0 || r > e.length) && (r = e.length), (r -= t.length)
    const n = e.indexOf(t, r)
    return n !== -1 && n === r
  },
  jO = e => {
    if (!e) return null
    if (fa(e)) return e
    let t = e.length
    if (!Vh(t)) return null
    const r = new Array(t)
    for (; t-- > 0; ) r[t] = e[t]
    return r
  },
  VO = (
    e => t =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && Io(Uint8Array)),
  GO = (e, t) => {
    const n = (e && e[Symbol.iterator]).call(e)
    let a
    for (; (a = n.next()) && !a.done; ) {
      const i = a.value
      t.call(e, i[0], i[1])
    }
  },
  zO = (e, t) => {
    let r
    const n = []
    for (; (r = e.exec(t)) !== null; ) n.push(r)
    return n
  },
  XO = jr('HTMLFormElement'),
  KO = e =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, n, a) {
      return n.toUpperCase() + a
    }),
  El = (
    ({ hasOwnProperty: e }) =>
    (t, r) =>
      e.call(t, r)
  )(Object.prototype),
  qO = jr('RegExp'),
  Kh = (e, t) => {
    const r = Object.getOwnPropertyDescriptors(e),
      n = {}
    fi(r, (a, i) => {
      t(a, i, e) !== !1 && (n[i] = a)
    }),
      Object.defineProperties(e, n)
  },
  JO = e => {
    Kh(e, (t, r) => {
      if (fn(e) && ['arguments', 'caller', 'callee'].indexOf(r) !== -1) return !1
      const n = e[r]
      if (!!fn(n)) {
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
  ZO = (e, t) => {
    const r = {},
      n = a => {
        a.forEach(i => {
          r[i] = !0
        })
      }
    return fa(e) ? n(e) : n(String(e).split(t)), r
  },
  QO = () => {},
  eF = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Qs = 'abcdefghijklmnopqrstuvwxyz',
  Sl = '0123456789',
  qh = {
    DIGIT: Sl,
    ALPHA: Qs,
    ALPHA_DIGIT: Qs + Qs.toUpperCase() + Sl
  },
  tF = (e = 16, t = qh.ALPHA_DIGIT) => {
    let r = ''
    const { length: n } = t
    for (; e--; ) r += t[(Math.random() * n) | 0]
    return r
  }
function rF(e) {
  return !!(e && fn(e.append) && e[Symbol.toStringTag] === 'FormData' && e[Symbol.iterator])
}
const nF = e => {
    const t = new Array(10),
      r = (n, a) => {
        if (bo(n)) {
          if (t.indexOf(n) >= 0) return
          if (!('toJSON' in n)) {
            t[a] = n
            const i = fa(n) ? [] : {}
            return (
              fi(n, (s, o) => {
                const l = r(s, a + 1)
                !za(l) && (i[o] = l)
              }),
              (t[a] = void 0),
              i
            )
          }
        }
        return n
      }
    return r(e, 0)
  },
  U = {
    isArray: fa,
    isArrayBuffer: jh,
    isBuffer: FO,
    isFormData: bO,
    isArrayBufferView: DO,
    isString: CO,
    isNumber: Vh,
    isBoolean: RO,
    isObject: bo,
    isPlainObject: Ni,
    isUndefined: za,
    isDate: kO,
    isFile: NO,
    isBlob: PO,
    isRegExp: qO,
    isFunction: fn,
    isStream: MO,
    isURLSearchParams: LO,
    isTypedArray: VO,
    isFileList: IO,
    forEach: fi,
    merge: O0,
    extend: UO,
    trim: BO,
    stripBOM: WO,
    inherits: HO,
    toFlatObject: $O,
    kindOf: Mo,
    kindOfTest: jr,
    endsWith: YO,
    toArray: jO,
    forEachEntry: GO,
    matchAll: zO,
    isHTMLForm: XO,
    hasOwnProperty: El,
    hasOwnProp: El,
    reduceDescriptors: Kh,
    freezeMethods: JO,
    toObjectSet: ZO,
    toCamelCase: KO,
    noop: QO,
    toFiniteNumber: eF,
    findKey: Gh,
    global: zh,
    isContextDefined: Xh,
    ALPHABET: qh,
    generateString: tF,
    isSpecCompliantForm: rF,
    toJSONObject: nF
  }
function Fe(e, t, r, n, a) {
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
U.inherits(Fe, Error, {
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
      config: U.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    }
  }
})
const Jh = Fe.prototype,
  Zh = {}
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
  Zh[e] = { value: e }
})
Object.defineProperties(Fe, Zh)
Object.defineProperty(Jh, 'isAxiosError', { value: !0 })
Fe.from = (e, t, r, n, a, i) => {
  const s = Object.create(Jh)
  return (
    U.toFlatObject(
      e,
      s,
      function (l) {
        return l !== Error.prototype
      },
      o => o !== 'isAxiosError'
    ),
    Fe.call(s, e.message, t, r, n, a),
    (s.cause = e),
    (s.name = e.name),
    i && Object.assign(s, i),
    s
  )
}
const aF = null
function F0(e) {
  return U.isPlainObject(e) || U.isArray(e)
}
function Qh(e) {
  return U.endsWith(e, '[]') ? e.slice(0, -2) : e
}
function yl(e, t, r) {
  return e
    ? e
        .concat(t)
        .map(function (a, i) {
          return (a = Qh(a)), !r && i ? '[' + a + ']' : a
        })
        .join(r ? '.' : '')
    : t
}
function iF(e) {
  return U.isArray(e) && !e.some(F0)
}
const sF = U.toFlatObject(U, {}, null, function (t) {
  return /^is[A-Z]/.test(t)
})
function Cs(e, t, r) {
  if (!U.isObject(e)) throw new TypeError('target must be an object')
  ;(t = t || new FormData()),
    (r = U.toFlatObject(
      r,
      {
        metaTokens: !0,
        dots: !1,
        indexes: !1
      },
      !1,
      function (d, g) {
        return !U.isUndefined(g[d])
      }
    ))
  const n = r.metaTokens,
    a = r.visitor || c,
    i = r.dots,
    s = r.indexes,
    l = (r.Blob || (typeof Blob < 'u' && Blob)) && U.isSpecCompliantForm(t)
  if (!U.isFunction(a)) throw new TypeError('visitor must be a function')
  function f(m) {
    if (m === null) return ''
    if (U.isDate(m)) return m.toISOString()
    if (!l && U.isBlob(m)) throw new Fe('Blob is not supported. Use a Buffer instead.')
    return U.isArrayBuffer(m) || U.isTypedArray(m)
      ? l && typeof Blob == 'function'
        ? new Blob([m])
        : Buffer.from(m)
      : m
  }
  function c(m, d, g) {
    let y = m
    if (m && !g && typeof m == 'object') {
      if (U.endsWith(d, '{}')) (d = n ? d : d.slice(0, -2)), (m = JSON.stringify(m))
      else if (
        (U.isArray(m) && iF(m)) ||
        ((U.isFileList(m) || U.endsWith(d, '[]')) && (y = U.toArray(m)))
      )
        return (
          (d = Qh(d)),
          y.forEach(function (F, b) {
            !(U.isUndefined(F) || F === null) &&
              t.append(s === !0 ? yl([d], b, i) : s === null ? d : d + '[]', f(F))
          }),
          !1
        )
    }
    return F0(m) ? !0 : (t.append(yl(g, d, i), f(m)), !1)
  }
  const u = [],
    h = Object.assign(sF, {
      defaultVisitor: c,
      convertValue: f,
      isVisitable: F0
    })
  function p(m, d) {
    if (!U.isUndefined(m)) {
      if (u.indexOf(m) !== -1) throw Error('Circular reference detected in ' + d.join('.'))
      u.push(m),
        U.forEach(m, function (y, O) {
          ;(!(U.isUndefined(y) || y === null) &&
            a.call(t, y, U.isString(O) ? O.trim() : O, d, h)) === !0 && p(y, d ? d.concat(O) : [O])
        }),
        u.pop()
    }
  }
  if (!U.isObject(e)) throw new TypeError('data must be an object')
  return p(e), t
}
function Al(e) {
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
function Lo(e, t) {
  ;(this._pairs = []), e && Cs(e, this, t)
}
const e1 = Lo.prototype
e1.append = function (t, r) {
  this._pairs.push([t, r])
}
e1.toString = function (t) {
  const r = t
    ? function (n) {
        return t.call(this, n, Al)
      }
    : Al
  return this._pairs
    .map(function (a) {
      return r(a[0]) + '=' + r(a[1])
    }, '')
    .join('&')
}
function oF(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
function t1(e, t, r) {
  if (!t) return e
  const n = (r && r.encode) || oF,
    a = r && r.serialize
  let i
  if (
    (a ? (i = a(t, r)) : (i = U.isURLSearchParams(t) ? t.toString() : new Lo(t, r).toString(n)), i)
  ) {
    const s = e.indexOf('#')
    s !== -1 && (e = e.slice(0, s)), (e += (e.indexOf('?') === -1 ? '?' : '&') + i)
  }
  return e
}
class fF {
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
    U.forEach(this.handlers, function (n) {
      n !== null && t(n)
    })
  }
}
const Ol = fF,
  r1 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
  },
  lF = typeof URLSearchParams < 'u' ? URLSearchParams : Lo,
  cF = typeof FormData < 'u' ? FormData : null,
  uF = typeof Blob < 'u' ? Blob : null,
  hF = (() => {
    let e
    return typeof navigator < 'u' &&
      ((e = navigator.product) === 'ReactNative' || e === 'NativeScript' || e === 'NS')
      ? !1
      : typeof window < 'u' && typeof document < 'u'
  })(),
  dF = (() =>
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function')(),
  _r = {
    isBrowser: !0,
    classes: {
      URLSearchParams: lF,
      FormData: cF,
      Blob: uF
    },
    isStandardBrowserEnv: hF,
    isStandardBrowserWebWorkerEnv: dF,
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
  }
function pF(e, t) {
  return Cs(
    e,
    new _r.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (r, n, a, i) {
          return _r.isNode && U.isBuffer(r)
            ? (this.append(n, r.toString('base64')), !1)
            : i.defaultVisitor.apply(this, arguments)
        }
      },
      t
    )
  )
}
function xF(e) {
  return U.matchAll(/\w+|\[(\w*)]/g, e).map(t => (t[0] === '[]' ? '' : t[1] || t[0]))
}
function mF(e) {
  const t = {},
    r = Object.keys(e)
  let n
  const a = r.length
  let i
  for (n = 0; n < a; n++) (i = r[n]), (t[i] = e[i])
  return t
}
function n1(e) {
  function t(r, n, a, i) {
    let s = r[i++]
    const o = Number.isFinite(+s),
      l = i >= r.length
    return (
      (s = !s && U.isArray(a) ? a.length : s),
      l
        ? (U.hasOwnProp(a, s) ? (a[s] = [a[s], n]) : (a[s] = n), !o)
        : ((!a[s] || !U.isObject(a[s])) && (a[s] = []),
          t(r, n, a[s], i) && U.isArray(a[s]) && (a[s] = mF(a[s])),
          !o)
    )
  }
  if (U.isFormData(e) && U.isFunction(e.entries)) {
    const r = {}
    return (
      U.forEachEntry(e, (n, a) => {
        t(xF(n), a, r, 0)
      }),
      r
    )
  }
  return null
}
const _F = {
  'Content-Type': void 0
}
function gF(e, t, r) {
  if (U.isString(e))
    try {
      return (t || JSON.parse)(e), U.trim(e)
    } catch (n) {
      if (n.name !== 'SyntaxError') throw n
    }
  return (r || JSON.stringify)(e)
}
const Rs = {
  transitional: r1,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, r) {
      const n = r.getContentType() || '',
        a = n.indexOf('application/json') > -1,
        i = U.isObject(t)
      if ((i && U.isHTMLForm(t) && (t = new FormData(t)), U.isFormData(t)))
        return a && a ? JSON.stringify(n1(t)) : t
      if (U.isArrayBuffer(t) || U.isBuffer(t) || U.isStream(t) || U.isFile(t) || U.isBlob(t))
        return t
      if (U.isArrayBufferView(t)) return t.buffer
      if (U.isURLSearchParams(t))
        return r.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), t.toString()
      let o
      if (i) {
        if (n.indexOf('application/x-www-form-urlencoded') > -1)
          return pF(t, this.formSerializer).toString()
        if ((o = U.isFileList(t)) || n.indexOf('multipart/form-data') > -1) {
          const l = this.env && this.env.FormData
          return Cs(o ? { 'files[]': t } : t, l && new l(), this.formSerializer)
        }
      }
      return i || a ? (r.setContentType('application/json', !1), gF(t)) : t
    }
  ],
  transformResponse: [
    function (t) {
      const r = this.transitional || Rs.transitional,
        n = r && r.forcedJSONParsing,
        a = this.responseType === 'json'
      if (t && U.isString(t) && ((n && !this.responseType) || a)) {
        const s = !(r && r.silentJSONParsing) && a
        try {
          return JSON.parse(t)
        } catch (o) {
          if (s)
            throw o.name === 'SyntaxError'
              ? Fe.from(o, Fe.ERR_BAD_RESPONSE, this, null, this.response)
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
  env: {
    FormData: _r.classes.FormData,
    Blob: _r.classes.Blob
  },
  validateStatus: function (t) {
    return t >= 200 && t < 300
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*'
    }
  }
}
U.forEach(['delete', 'get', 'head'], function (t) {
  Rs.headers[t] = {}
})
U.forEach(['post', 'put', 'patch'], function (t) {
  Rs.headers[t] = U.merge(_F)
})
const Bo = Rs,
  vF = U.toObjectSet([
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
  wF = e => {
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
              !(!r || (t[r] && vF[r])) &&
                (r === 'set-cookie'
                  ? t[r]
                    ? t[r].push(n)
                    : (t[r] = [n])
                  : (t[r] = t[r] ? t[r] + ', ' + n : n))
          }),
      t
    )
  },
  Fl = Symbol('internals')
function ga(e) {
  return e && String(e).trim().toLowerCase()
}
function Pi(e) {
  return e === !1 || e == null ? e : U.isArray(e) ? e.map(Pi) : String(e)
}
function TF(e) {
  const t = /* @__PURE__ */ Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
  let n
  for (; (n = r.exec(e)); ) t[n[1]] = n[2]
  return t
}
function EF(e) {
  return /^[-_a-zA-Z]+$/.test(e.trim())
}
function e0(e, t, r, n, a) {
  if (U.isFunction(n)) return n.call(this, t, r)
  if ((a && (t = r), !!U.isString(t))) {
    if (U.isString(n)) return t.indexOf(n) !== -1
    if (U.isRegExp(n)) return n.test(t)
  }
}
function SF(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n)
}
function yF(e, t) {
  const r = U.toCamelCase(' ' + t)
  ;['get', 'set', 'has'].forEach(n => {
    Object.defineProperty(e, n + r, {
      value: function (a, i, s) {
        return this[n].call(this, t, a, i, s)
      },
      configurable: !0
    })
  })
}
class ks {
  constructor(t) {
    t && this.set(t)
  }
  set(t, r, n) {
    const a = this
    function i(o, l, f) {
      const c = ga(l)
      if (!c) throw new Error('header name must be a non-empty string')
      const u = U.findKey(a, c)
      ;(!u || a[u] === void 0 || f === !0 || (f === void 0 && a[u] !== !1)) && (a[u || l] = Pi(o))
    }
    const s = (o, l) => U.forEach(o, (f, c) => i(f, c, l))
    return (
      U.isPlainObject(t) || t instanceof this.constructor
        ? s(t, r)
        : U.isString(t) && (t = t.trim()) && !EF(t)
        ? s(wF(t), r)
        : t != null && i(r, t, n),
      this
    )
  }
  get(t, r) {
    if (((t = ga(t)), t)) {
      const n = U.findKey(this, t)
      if (n) {
        const a = this[n]
        if (!r) return a
        if (r === !0) return TF(a)
        if (U.isFunction(r)) return r.call(this, a, n)
        if (U.isRegExp(r)) return r.exec(a)
        throw new TypeError('parser must be boolean|regexp|function')
      }
    }
  }
  has(t, r) {
    if (((t = ga(t)), t)) {
      const n = U.findKey(this, t)
      return !!(n && this[n] !== void 0 && (!r || e0(this, this[n], n, r)))
    }
    return !1
  }
  delete(t, r) {
    const n = this
    let a = !1
    function i(s) {
      if (((s = ga(s)), s)) {
        const o = U.findKey(n, s)
        o && (!r || e0(n, n[o], o, r)) && (delete n[o], (a = !0))
      }
    }
    return U.isArray(t) ? t.forEach(i) : i(t), a
  }
  clear(t) {
    const r = Object.keys(this)
    let n = r.length,
      a = !1
    for (; n--; ) {
      const i = r[n]
      ;(!t || e0(this, this[i], i, t, !0)) && (delete this[i], (a = !0))
    }
    return a
  }
  normalize(t) {
    const r = this,
      n = {}
    return (
      U.forEach(this, (a, i) => {
        const s = U.findKey(n, i)
        if (s) {
          ;(r[s] = Pi(a)), delete r[i]
          return
        }
        const o = t ? SF(i) : String(i).trim()
        o !== i && delete r[i], (r[o] = Pi(a)), (n[o] = !0)
      }),
      this
    )
  }
  concat(...t) {
    return this.constructor.concat(this, ...t)
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null)
    return (
      U.forEach(this, (n, a) => {
        n != null && n !== !1 && (r[a] = t && U.isArray(n) ? n.join(', ') : n)
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
    const n = (this[Fl] = this[Fl] =
        {
          accessors: {}
        }).accessors,
      a = this.prototype
    function i(s) {
      const o = ga(s)
      n[o] || (yF(a, s), (n[o] = !0))
    }
    return U.isArray(t) ? t.forEach(i) : i(t), this
  }
}
ks.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization'
])
U.freezeMethods(ks.prototype)
U.freezeMethods(ks)
const Mr = ks
function t0(e, t) {
  const r = this || Bo,
    n = t || r,
    a = Mr.from(n.headers)
  let i = n.data
  return (
    U.forEach(e, function (o) {
      i = o.call(r, i, a.normalize(), t ? t.status : void 0)
    }),
    a.normalize(),
    i
  )
}
function a1(e) {
  return !!(e && e.__CANCEL__)
}
function li(e, t, r) {
  Fe.call(this, e == null ? 'canceled' : e, Fe.ERR_CANCELED, t, r), (this.name = 'CanceledError')
}
U.inherits(li, Fe, {
  __CANCEL__: !0
})
function AF(e, t, r) {
  const n = r.config.validateStatus
  !r.status || !n || n(r.status)
    ? e(r)
    : t(
        new Fe(
          'Request failed with status code ' + r.status,
          [Fe.ERR_BAD_REQUEST, Fe.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
          r.config,
          r.request,
          r
        )
      )
}
const OF = _r.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (r, n, a, i, s, o) {
          const l = []
          l.push(r + '=' + encodeURIComponent(n)),
            U.isNumber(a) && l.push('expires=' + new Date(a).toGMTString()),
            U.isString(i) && l.push('path=' + i),
            U.isString(s) && l.push('domain=' + s),
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
function FF(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function DF(e, t) {
  return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e
}
function i1(e, t) {
  return e && !FF(t) ? DF(e, t) : t
}
const CF = _r.isStandardBrowserEnv
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
          const o = U.isString(s) ? a(s) : s
          return o.protocol === n.protocol && o.host === n.host
        }
      )
    })()
  : (function () {
      return function () {
        return !0
      }
    })()
function RF(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
  return (t && t[1]) || ''
}
function kF(e, t) {
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
function Dl(e, t) {
  let r = 0
  const n = kF(50, 250)
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
const NF = typeof XMLHttpRequest < 'u',
  PF =
    NF &&
    function (e) {
      return new Promise(function (r, n) {
        let a = e.data
        const i = Mr.from(e.headers).normalize(),
          s = e.responseType
        let o
        function l() {
          e.cancelToken && e.cancelToken.unsubscribe(o),
            e.signal && e.signal.removeEventListener('abort', o)
        }
        U.isFormData(a) &&
          (_r.isStandardBrowserEnv || _r.isStandardBrowserWebWorkerEnv) &&
          i.setContentType(!1)
        let f = new XMLHttpRequest()
        if (e.auth) {
          const p = e.auth.username || '',
            m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : ''
          i.set('Authorization', 'Basic ' + btoa(p + ':' + m))
        }
        const c = i1(e.baseURL, e.url)
        f.open(e.method.toUpperCase(), t1(c, e.params, e.paramsSerializer), !0),
          (f.timeout = e.timeout)
        function u() {
          if (!f) return
          const p = Mr.from('getAllResponseHeaders' in f && f.getAllResponseHeaders()),
            d = {
              data: !s || s === 'text' || s === 'json' ? f.responseText : f.response,
              status: f.status,
              statusText: f.statusText,
              headers: p,
              config: e,
              request: f
            }
          AF(
            function (y) {
              r(y), l()
            },
            function (y) {
              n(y), l()
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
            !f || (n(new Fe('Request aborted', Fe.ECONNABORTED, e, f)), (f = null))
          }),
          (f.onerror = function () {
            n(new Fe('Network Error', Fe.ERR_NETWORK, e, f)), (f = null)
          }),
          (f.ontimeout = function () {
            let m = e.timeout ? 'timeout of ' + e.timeout + 'ms exceeded' : 'timeout exceeded'
            const d = e.transitional || r1
            e.timeoutErrorMessage && (m = e.timeoutErrorMessage),
              n(new Fe(m, d.clarifyTimeoutError ? Fe.ETIMEDOUT : Fe.ECONNABORTED, e, f)),
              (f = null)
          }),
          _r.isStandardBrowserEnv)
        ) {
          const p = (e.withCredentials || CF(c)) && e.xsrfCookieName && OF.read(e.xsrfCookieName)
          p && i.set(e.xsrfHeaderName, p)
        }
        a === void 0 && i.setContentType(null),
          'setRequestHeader' in f &&
            U.forEach(i.toJSON(), function (m, d) {
              f.setRequestHeader(d, m)
            }),
          U.isUndefined(e.withCredentials) || (f.withCredentials = !!e.withCredentials),
          s && s !== 'json' && (f.responseType = e.responseType),
          typeof e.onDownloadProgress == 'function' &&
            f.addEventListener('progress', Dl(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' &&
            f.upload &&
            f.upload.addEventListener('progress', Dl(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((o = p => {
              !f || (n(!p || p.type ? new li(null, e, f) : p), f.abort(), (f = null))
            }),
            e.cancelToken && e.cancelToken.subscribe(o),
            e.signal && (e.signal.aborted ? o() : e.signal.addEventListener('abort', o)))
        const h = RF(c)
        if (h && _r.protocols.indexOf(h) === -1) {
          n(new Fe('Unsupported protocol ' + h + ':', Fe.ERR_BAD_REQUEST, e))
          return
        }
        f.send(a || null)
      })
    },
  Ii = {
    http: aF,
    xhr: PF
  }
U.forEach(Ii, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t })
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t })
  }
})
const IF = {
  getAdapter: e => {
    e = U.isArray(e) ? e : [e]
    const { length: t } = e
    let r, n
    for (let a = 0; a < t && ((r = e[a]), !(n = U.isString(r) ? Ii[r.toLowerCase()] : r)); a++);
    if (!n)
      throw n === !1
        ? new Fe(`Adapter ${r} is not supported by the environment`, 'ERR_NOT_SUPPORT')
        : new Error(
            U.hasOwnProp(Ii, r)
              ? `Adapter '${r}' is not available in the build`
              : `Unknown adapter '${r}'`
          )
    if (!U.isFunction(n)) throw new TypeError('adapter is not a function')
    return n
  },
  adapters: Ii
}
function r0(e) {
  if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted))
    throw new li(null, e)
}
function Cl(e) {
  return (
    r0(e),
    (e.headers = Mr.from(e.headers)),
    (e.data = t0.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    IF.getAdapter(e.adapter || Bo.adapter)(e).then(
      function (n) {
        return (
          r0(e), (n.data = t0.call(e, e.transformResponse, n)), (n.headers = Mr.from(n.headers)), n
        )
      },
      function (n) {
        return (
          a1(n) ||
            (r0(e),
            n &&
              n.response &&
              ((n.response.data = t0.call(e, e.transformResponse, n.response)),
              (n.response.headers = Mr.from(n.response.headers)))),
          Promise.reject(n)
        )
      }
    )
  )
}
const Rl = e => (e instanceof Mr ? e.toJSON() : e)
function Qn(e, t) {
  t = t || {}
  const r = {}
  function n(f, c, u) {
    return U.isPlainObject(f) && U.isPlainObject(c)
      ? U.merge.call({ caseless: u }, f, c)
      : U.isPlainObject(c)
      ? U.merge({}, c)
      : U.isArray(c)
      ? c.slice()
      : c
  }
  function a(f, c, u) {
    if (U.isUndefined(c)) {
      if (!U.isUndefined(f)) return n(void 0, f, u)
    } else return n(f, c, u)
  }
  function i(f, c) {
    if (!U.isUndefined(c)) return n(void 0, c)
  }
  function s(f, c) {
    if (U.isUndefined(c)) {
      if (!U.isUndefined(f)) return n(void 0, f)
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
    headers: (f, c) => a(Rl(f), Rl(c), !0)
  }
  return (
    U.forEach(Object.keys(e).concat(Object.keys(t)), function (c) {
      const u = l[c] || a,
        h = u(e[c], t[c], c)
      ;(U.isUndefined(h) && u !== o) || (r[c] = h)
    }),
    r
  )
}
const s1 = '1.3.4',
  Uo = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
  Uo[e] = function (n) {
    return typeof n === e || 'a' + (t < 1 ? 'n ' : ' ') + e
  }
})
const kl = {}
Uo.transitional = function (t, r, n) {
  function a(i, s) {
    return '[Axios v' + s1 + "] Transitional option '" + i + "'" + s + (n ? '. ' + n : '')
  }
  return (i, s, o) => {
    if (t === !1) throw new Fe(a(s, ' has been removed' + (r ? ' in ' + r : '')), Fe.ERR_DEPRECATED)
    return (
      r &&
        !kl[s] &&
        ((kl[s] = !0),
        console.warn(
          a(s, ' has been deprecated since v' + r + ' and will be removed in the near future')
        )),
      t ? t(i, s, o) : !0
    )
  }
}
function MF(e, t, r) {
  if (typeof e != 'object') throw new Fe('options must be an object', Fe.ERR_BAD_OPTION_VALUE)
  const n = Object.keys(e)
  let a = n.length
  for (; a-- > 0; ) {
    const i = n[a],
      s = t[i]
    if (s) {
      const o = e[i],
        l = o === void 0 || s(o, i, e)
      if (l !== !0) throw new Fe('option ' + i + ' must be ' + l, Fe.ERR_BAD_OPTION_VALUE)
      continue
    }
    if (r !== !0) throw new Fe('Unknown option ' + i, Fe.ERR_BAD_OPTION)
  }
}
const D0 = {
    assertOptions: MF,
    validators: Uo
  },
  zr = D0.validators
class rs {
  constructor(t) {
    ;(this.defaults = t),
      (this.interceptors = {
        request: new Ol(),
        response: new Ol()
      })
  }
  request(t, r) {
    typeof t == 'string' ? ((r = r || {}), (r.url = t)) : (r = t || {}), (r = Qn(this.defaults, r))
    const { transitional: n, paramsSerializer: a, headers: i } = r
    n !== void 0 &&
      D0.assertOptions(
        n,
        {
          silentJSONParsing: zr.transitional(zr.boolean),
          forcedJSONParsing: zr.transitional(zr.boolean),
          clarifyTimeoutError: zr.transitional(zr.boolean)
        },
        !1
      ),
      a !== void 0 &&
        D0.assertOptions(
          a,
          {
            encode: zr.function,
            serialize: zr.function
          },
          !0
        ),
      (r.method = (r.method || this.defaults.method || 'get').toLowerCase())
    let s
    ;(s = i && U.merge(i.common, i[r.method])),
      s &&
        U.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], m => {
          delete i[m]
        }),
      (r.headers = Mr.concat(s, i))
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
      const m = [Cl.bind(this), void 0]
      for (m.unshift.apply(m, o), m.push.apply(m, f), h = m.length, c = Promise.resolve(r); u < h; )
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
      } catch (g) {
        d.call(this, g)
        break
      }
    }
    try {
      c = Cl.call(this, p)
    } catch (m) {
      return Promise.reject(m)
    }
    for (u = 0, h = f.length; u < h; ) c = c.then(f[u++], f[u++])
    return c
  }
  getUri(t) {
    t = Qn(this.defaults, t)
    const r = i1(t.baseURL, t.url)
    return t1(r, t.params, t.paramsSerializer)
  }
}
U.forEach(['delete', 'get', 'head', 'options'], function (t) {
  rs.prototype[t] = function (r, n) {
    return this.request(
      Qn(n || {}, {
        method: t,
        url: r,
        data: (n || {}).data
      })
    )
  }
})
U.forEach(['post', 'put', 'patch'], function (t) {
  function r(n) {
    return function (i, s, o) {
      return this.request(
        Qn(o || {}, {
          method: t,
          headers: n
            ? {
                'Content-Type': 'multipart/form-data'
              }
            : {},
          url: i,
          data: s
        })
      )
    }
  }
  ;(rs.prototype[t] = r()), (rs.prototype[t + 'Form'] = r(!0))
})
const Mi = rs
class Wo {
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
        n.reason || ((n.reason = new li(i, s, o)), r(n.reason))
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
      token: new Wo(function (a) {
        t = a
      }),
      cancel: t
    }
  }
}
const bF = Wo
function LF(e) {
  return function (r) {
    return e.apply(null, r)
  }
}
function BF(e) {
  return U.isObject(e) && e.isAxiosError === !0
}
const C0 = {
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
Object.entries(C0).forEach(([e, t]) => {
  C0[t] = e
})
const UF = C0
function o1(e) {
  const t = new Mi(e),
    r = $h(Mi.prototype.request, t)
  return (
    U.extend(r, Mi.prototype, t, { allOwnKeys: !0 }),
    U.extend(r, t, null, { allOwnKeys: !0 }),
    (r.create = function (a) {
      return o1(Qn(e, a))
    }),
    r
  )
}
const ht = o1(Bo)
ht.Axios = Mi
ht.CanceledError = li
ht.CancelToken = bF
ht.isCancel = a1
ht.VERSION = s1
ht.toFormData = Cs
ht.AxiosError = Fe
ht.Cancel = ht.CanceledError
ht.all = function (t) {
  return Promise.all(t)
}
ht.spread = LF
ht.isAxiosError = BF
ht.mergeConfig = Qn
ht.AxiosHeaders = Mr
ht.formToJSON = e => n1(U.isHTMLForm(e) ? new FormData(e) : e)
ht.HttpStatusCode = UF
ht.default = ht
const WF = ht,
  Ho = WF.create({
    baseURL: '/api'
  })
Ho.interceptors.request.use(
  function (e) {
    return e
  },
  function (e) {
    return Promise.reject(e)
  }
)
Ho.interceptors.response.use(
  function (e) {
    return e.data
  },
  function (e) {
    return e.response.data.msg, Promise.reject(e)
  }
)
class qe {
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
    return !(!qe.isUndefinedOrNull(t) && t instanceof Array && t.length > 0)
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
    return !qe.isIE() && !!window.StyleMedia
  }
  static toFriendlyString(t) {
    return qe.isNullOrWhiteSpace(t) ||
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
    return (r = qe.escapeRegExp(r)), t.replace(new RegExp(`${r}+$`, 'g'), '')
  }
  static trim(t, r) {
    return (r = qe.escapeRegExp(r)), t.replace(new RegExp(`^${r}+`, 'g'), '')
  }
  static trimStart(t, r) {
    return (r = qe.escapeRegExp(r)), t.replace(new RegExp(`^${r}+|${r}+$`, 'g'), '')
  }
  static isPromise(t) {
    return !!t && typeof t.then == 'function' && typeof t.catch == 'function'
  }
  static prepend(t, r) {
    return t.startsWith(r) ? t : r + t
  }
  static base64Encode(t) {
    return qe.isNullOrWhiteSpace(t) ? null : btoa(encodeURIComponent(t))
  }
  static base64Decode(t) {
    if (qe.isNullOrWhiteSpace(t)) return null
    try {
      return decodeURIComponent(atob(t))
    } catch {
      return null
    }
  }
  static encodeURIComponent(t) {
    return qe.isNullOrWhiteSpace(t) ? null : encodeURIComponent(t)
  }
  static decodeURIComponent(t) {
    return qe.isNullOrWhiteSpace(t) ? null : decodeURIComponent(t)
  }
  static lowerCaseTheFirstLetter(t) {
    return qe.isNullOrWhiteSpace(t) ? null : t[0].toLowerCase() + t.slice(1)
  }
  static getRandomInt(t, r) {
    return Math.floor(Math.random() * (r - t + 1)) + t
  }
  static getHex() {
    let t = 0
    for (let r = 4; r > 0; r--) t = (qe.getRandomInt(0, 1) << (r - 1)) + t
    return t.toString(16)
  }
  static getOTP(t) {
    const r = []
    for (let n = 0; n < t; n++) r.push(qe.getHex())
    return r.join('')
  }
  static getTimeStampInSecond() {
    return Math.round(Date.now() / 1e3)
  }
}
var Nn = /* @__PURE__ */ (e => (
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
))(Nn || {})
class la {
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
    xe(this, 'advSearchType', Nn.string)
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
class HF extends la {
  constructor(r) {
    super()
    xe(this, 'buttons', [])
    xe(this, 'onlyText', !1)
    xe(this, 'showMenu', !1)
    r && Object.assign(this, r),
      (this.sortable = !1),
      (this.action = !0),
      (this.advSearch = !1),
      qe.isNullOrWhiteSpace(this.label) && (this.label = '\u64CD\u4F5C'),
      qe.isZeroOrWhiteSpace(this.width) &&
        !qe.IsNullOrEmpty(this.buttons) &&
        (this.onlyText
          ? (this.width = 40 * this.buttons.length + 'px')
          : (this.width = 46 * this.buttons.length + 'px'))
  }
}
class f1 extends la {
  constructor(r) {
    super()
    xe(this, 'formatString', 'YYYY/MM/DD HH:mm')
    r && Object.assign(this, r),
      (this.advSearchType = Nn.date),
      qe.isZeroOrWhiteSpace(this.width) && (this.width = '145px')
  }
}
class l1 extends la {
  constructor(r) {
    super()
    xe(this, 'enumOptions')
    xe(this, 'multiple', !1)
    r && Object.assign(this, r),
      (this.advSearchType = Nn.enum),
      qe.isZeroOrWhiteSpace(this.width) && (this.width = '142px')
  }
}
class $F extends la {
  constructor(r) {
    super()
    xe(this, 'ellipsisRows', 1)
    xe(this, 'copyable')
    xe(this, 'expandable')
    r && Object.assign(this, r), (this.advSearchType = Nn.float)
  }
}
class YF extends la {
  constructor(r) {
    super()
    xe(this, 'ellipsisRows', 1)
    xe(this, 'copyable')
    xe(this, 'expandable')
    r && Object.assign(this, r), (this.advSearchType = Nn.int)
  }
}
class jF extends la {
  constructor(r) {
    super()
    xe(this, 'ellipsisRows', 1)
    xe(this, 'copyable')
    xe(this, 'expandable')
    ;(this.advSearchType = Nn.string), r && Object.assign(this, r)
  }
}
const n0 = e =>
    e instanceof f1 && qe.isUndefinedOrNull(e.slot)
      ? 'datetime'
      : e instanceof HF && qe.isUndefinedOrNull(e.slot)
      ? 'button'
      : e instanceof l1 && qe.isUndefinedOrNull(e.slot)
      ? 'enum'
      : e.formatter
      ? 'formatter'
      : e.slot
      ? 'slot'
      : 'normal',
  Nl = e => {
    if (e instanceof jF) return 'string'
    if (e instanceof f1) return 'datetime'
    if (e instanceof YF) return 'int'
    if (e instanceof $F) return 'float'
    if (e instanceof l1) return 'enum'
  },
  VF = () => {
    const e = q().subtract(1, 'day'),
      t = q().subtract(1, 'week'),
      r = q().subtract(1, 'month'),
      n = q().subtract(1, 'quarter'),
      a = q().subtract(1, 'year')
    return [
      {
        text: '\u4ECA\u5929',
        value: () => [q().toDate(), q().toDate()]
      },
      {
        text: '\u6628\u5929',
        value: () => [e.toDate(), e.toDate()]
      },
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
  GF = [
    { label: '\u5305\u542B', value: 'contains' },
    { label: '\u4E0D\u5305\u542B', value: 'doesnotcontain' },
    { label: '=', value: 'eq' },
    { label: '!=', value: 'neq' }
  ],
  zF = [
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
  XF = {
    key: 0,
    class: 'flex'
  },
  KF = /* @__PURE__ */ Pl({
    __name: 'AdvSearchForm',
    props: {
      advSearchColumn: {
        type: Array,
        required: !0
      }
    },
    setup(e) {
      const t = e
      let r = Ea(() => t.advSearchColumn),
        n = () => {
          const l = window.innerWidth
          let f = 3
          return l >= 1200 ? (f = 3) : l >= 768 && l < 1200 ? (f = 2) : l < 768 && (f = 1), f
        },
        a = D1({}),
        i = Ht(null),
        s = Ht(),
        o = Ht(VF())
      return (l, f) => {
        const c = tt('el-option'),
          u = tt('el-select'),
          h = tt('el-date-picker'),
          p = tt('el-input'),
          m = tt('el-col'),
          d = tt('el-row'),
          g = tt('el-form')
        return de(a)
          ? (ye(),
            vt(
              g,
              va(
                {
                  key: 0,
                  'validate-on-rule-change': !1
                },
                l.$attrs,
                {
                  model: de(a),
                  rules: de(i),
                  ref_key: 'form',
                  ref: s
                }
              ),
              {
                default: Ye(() => [
                  ct(
                    d,
                    { gutter: 20 },
                    {
                      default: Ye(() => [
                        (ye(!0),
                        gt(
                          xr,
                          null,
                          Fi(
                            de(r),
                            y => (
                              ye(),
                              vt(
                                m,
                                {
                                  span: 24 / de(n)(),
                                  offset: 0
                                },
                                {
                                  default: Ye(() => [
                                    y.prop
                                      ? (ye(),
                                        gt(
                                          xr,
                                          { key: 0 },
                                          [
                                            de(Nl)(y) === 'datetime'
                                              ? (ye(),
                                                gt('div', XF, [
                                                  ct(
                                                    u,
                                                    {
                                                      placeholder: 'Select',
                                                      style: { width: '50px' }
                                                    },
                                                    {
                                                      default: Ye(() => [
                                                        (ye(!0),
                                                        gt(
                                                          xr,
                                                          null,
                                                          Fi(
                                                            de(zF),
                                                            O => (
                                                              ye(),
                                                              vt(
                                                                c,
                                                                {
                                                                  label: O.label,
                                                                  value: O.value
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
                                                  ct(
                                                    h,
                                                    {
                                                      modelValue: de(a)[y.prop],
                                                      'onUpdate:modelValue': O =>
                                                        (de(a)[y.prop] = O),
                                                      type: 'daterange',
                                                      'unlink-panels': '',
                                                      'range-separator': 'To',
                                                      'start-placeholder': 'Start date',
                                                      'end-placeholder': 'End date',
                                                      shortcuts: de(o)
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
                                              : de(Nl)(y) === 'enum'
                                              ? (ye(),
                                                vt(
                                                  u,
                                                  {
                                                    key: 1,
                                                    modelValue: de(a)[y.prop],
                                                    'onUpdate:modelValue': O => (de(a)[y.prop] = O),
                                                    class: 'm-2',
                                                    placeholder: 'Select'
                                                  },
                                                  null,
                                                  8,
                                                  ['modelValue', 'onUpdate:modelValue']
                                                ))
                                              : (ye(),
                                                vt(
                                                  p,
                                                  {
                                                    key: 2,
                                                    modelValue: de(a)[y == null ? void 0 : y.prop],
                                                    'onUpdate:modelValue': O =>
                                                      (de(a)[y == null ? void 0 : y.prop] = O)
                                                  },
                                                  {
                                                    prepend: Ye(() => [
                                                      ct(
                                                        u,
                                                        {
                                                          placeholder: 'Select',
                                                          style: { width: '115px' }
                                                        },
                                                        {
                                                          default: Ye(() => [
                                                            (ye(!0),
                                                            gt(
                                                              xr,
                                                              null,
                                                              Fi(
                                                                de(GF),
                                                                O => (
                                                                  ye(),
                                                                  vt(
                                                                    c,
                                                                    {
                                                                      label: O.label,
                                                                      value: O.value
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
                                      : Kr('', !0)
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
          : Kr('', !0)
      }
    }
  }),
  qF = e => (b1('data-v-23759822'), (e = e()), L1(), e),
  JF = { class: 'flex items-center justify-end mb-2' },
  ZF = { class: 'flex justify-between mb-2' },
  QF = {
    style: { 'margin-left': 'auto' },
    class: 'flex'
  },
  eD = {
    key: 0,
    class: 'flex'
  },
  tD = {
    key: 0,
    style: { display: 'flex' }
  },
  rD = {
    key: 1,
    class: 'action-icon'
  },
  nD = { key: 1 },
  aD = { class: 'table-empty' },
  iD = /* @__PURE__ */ qF(() => /* @__PURE__ */ Xr('div', null, '\u6682\u65E0\u6570\u636E', -1)),
  sD = /* @__PURE__ */ Pl({
    __name: 'index',
    props: {
      columns: {
        type: Array,
        required: !0
      },
      data: {
        type: Array,
        default: []
      },
      reload: {
        type: Boolean,
        default: !1
      },
      options: {
        type: Object,
        required: !0
      },
      editRowIndex: {
        type: String,
        default: ''
      },
      isEditRow: {
        type: Boolean,
        default: !1
      },
      beforeRequest: {
        type: Function,
        default: e => e
      },
      afterRequest: {
        type: Function,
        default: e => e
      }
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
      let n = Ht(!1),
        a = Ht(!1),
        i = Ea(() => r.columns.filter(ee => ee.advSearch)),
        s = Ea(() => r.columns),
        o = Ea(() => r.options),
        l = P0({
          currentPage: o.value.currentPage,
          pageSize: o.value.pageSize,
          pageSizes: o.value.pageSizes,
          total: o.value.total
        }),
        f = Ht(''),
        c = Ht(''),
        u = Ht('\u6A21\u7CCA\u641C\u7D22'),
        h = Ea(() =>
          o.value.paginationAlign === 'left'
            ? 'flex-start'
            : o.value.paginationAlign === 'right'
            ? 'flex-end'
            : 'center'
        ),
        p = Ht(r != null && r.data ? F_(r.data) : []),
        m = Ht(r.editRowIndex),
        d = Ht(!1),
        g = Ls(
          () => r.data,
          ee => {
            if (ee.length > 0 || qe.IsNullOrEmpty(ee)) {
              O()
              return
            }
            ;(n.value = !ee || !ee.length),
              (d.value = !0),
              (p.value = ee),
              (l.total = ee == null ? void 0 : ee.length),
              p.value.map(Ee => {
                Ee.rowEdit = !1
              }),
              d.value && g()
          },
          { deep: !0 }
        )
      Ls(
        () => r.editRowIndex,
        ee => {
          ee && (m.value = ee)
        }
      ),
        Ls(
          () => r.reload,
          ee => {
            ee && O()
          }
        )
      const y = r.beforeRequest()
      function O() {
        n.value = !0
        const ee = y || { currentPage: l.currentPage, pageSize: l.pageSize, filters: '' },
          { url: Ee } = o.value
        Ee
          ? Ho.post(Ee, ee).then(Se => {
              ;(p.value = Se.Data.Data), (l.total = Se.Data.Total), (n.value = !1)
            })
          : (n.value = !1)
      }
      C1(() => {
        qe.IsNullOrEmpty(r.data) && O()
      }),
        R1(() => {
          p.value.map(ee => {
            ee.rowEdit = !1
          })
        })
      let F = ee => {
          t('confirm', ee), (f.value = '')
        },
        b = ee => {
          t('cancel', ee), (f.value = '')
        },
        J = ee => {
          t('size-change', ee), (l.pageSize = ee), C()
        },
        ae = ee => {
          t('current-change', ee), (l.currentPage = ee), C()
        }
      function C() {
        O()
      }
      let W = ee => {
          f.value = ee.$index + ee.column.id
        },
        M = (ee, Ee) => {
          Ee.property === 'buttons' &&
            r.isEditRow &&
            m.value === r.editRowIndex &&
            ((ee.rowEdit = !ee.rowEdit),
            p.value.map(Se => {
              Se !== ee && (Se.rowEdit = !1)
            }),
            ee.rowEdit || t('update:editRowIndex', ''))
        }
      const j = () => {
        var ot
        const ee = s.value.map(ft => ft.label),
          Ee = s.value.map(ft => ft.prop),
          Se = V(Ee)
        vO(ee, Se, (ot = o.value.exportOption) == null ? void 0 : ot.Name, 'xlsx', !0)
      }
      function V(ee) {
        return p.value.map(Se => ee.map(ot => Se[ot]))
      }
      Ht([
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
              attrs: {
                clearable: !0
              },
              colOption: {
                offset: 0,
                span: 12
              }
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
              attrs: {
                clearable: !0
              },
              colOption: {
                offset: 0,
                span: 12
              }
            }
          ]
        }
      ])
      const G = ee => {
        ee === 'refresh' && C()
      }
      let ne = Ht()
      const Ne = () => {
          ne.value && console.log(ne.value.getFormData())
        },
        me = () => {
          console.log(c.value)
        },
        st = () => {
          ne.value && ne.value.resetFields()
        }
      return (ee, Ee) => {
        var Oe, Kt, $e, fe, kt
        const Se = tt('el-button'),
          ot = tt('lib-icon'),
          ft = tt('el-icon-morefilled'),
          S = tt('el-dropdown-item'),
          I = tt('el-dropdown-menu'),
          D = tt('el-dropdown'),
          A = tt('el-input'),
          Y = tt('el-icon-arrowup'),
          ce = tt('el-icon-arrowdown'),
          ue = tt('el-table-column'),
          le = tt('el-icon-check'),
          re = tt('el-icon-close'),
          Pe = tt('el-table'),
          Te = tt('el-pagination'),
          mt = k1('loading')
        return (
          ye(),
          gt(
            xr,
            null,
            [
              de(o).simpleSearchEnable && de(a)
                ? (ye(),
                  gt(
                    xr,
                    { key: 0 },
                    [
                      ct(
                        KF,
                        {
                          advSearchColumn: de(i),
                          ref: 'advSearchFormRef'
                        },
                        null,
                        8,
                        ['advSearchColumn']
                      ),
                      Xr('div', JF, [
                        ct(
                          Se,
                          {
                            type: 'primary',
                            onClick: Ne
                          },
                          {
                            default: Ye(() => [Pn('\u641C\u7D22')]),
                            _: 1
                          }
                        ),
                        ct(
                          Se,
                          {
                            onClick: st,
                            class: 'ml-2'
                          },
                          {
                            default: Ye(() => [Pn('\u91CD\u7F6E')]),
                            _: 1
                          }
                        )
                      ])
                    ],
                    64
                  ))
                : Kr('', !0),
              Xr('div', ZF, [
                Xr('div', null, [
                  bt(ee.$slots, 'tablePrefix', {}, void 0, !0),
                  de(o).exportEnable
                    ? (ye(),
                      vt(
                        Se,
                        {
                          key: 0,
                          type: 'default',
                          class: 'ml-sm',
                          onClick: Ee[0] || (Ee[0] = he => j())
                        },
                        {
                          default: Ye(() => [
                            ct(ot, { name: 'iconfont icon-export mr-sm' }),
                            Pn(' \u5BFC \u51FA ')
                          ]),
                          _: 1
                        }
                      ))
                    : Kr('', !0)
                ]),
                Xr('div', QF, [
                  bt(ee.$slots, 'tableSuffix', {}, void 0, !0),
                  de(o).simpleSearchEnable
                    ? (ye(),
                      gt('div', eD, [
                        ct(
                          D,
                          {
                            class: 'mr-sm',
                            onCommand: Ee[1] || (Ee[1] = he => G(he))
                          },
                          {
                            dropdown: Ye(() => [
                              ct(I, null, {
                                default: Ye(() => [
                                  ct(
                                    S,
                                    { command: 'refresh' },
                                    {
                                      default: Ye(() => [Pn('\u5237\u65B0')]),
                                      _: 1
                                    }
                                  ),
                                  ct(
                                    S,
                                    { command: 'tableSetting' },
                                    {
                                      default: Ye(() => [Pn(' \u5217\u8868\u8BBE\u7F6E ')]),
                                      _: 1
                                    }
                                  )
                                ]),
                                _: 1
                              })
                            ]),
                            default: Ye(() => [
                              ct(
                                Se,
                                { type: 'default' },
                                {
                                  default: Ye(() => [ct(ft)]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        ),
                        ct(
                          A,
                          {
                            modelValue: de(c),
                            'onUpdate:modelValue':
                              Ee[2] || (Ee[2] = he => (Jo(c) ? (c.value = he) : (c = he))),
                            placeholder: de(u),
                            'suffix-icon': de(OO),
                            onKeyup: Ee[3] || (Ee[3] = N1(he => me(), ['enter']))
                          },
                          null,
                          8,
                          ['modelValue', 'placeholder', 'suffix-icon']
                        )
                      ]))
                    : Kr('', !0),
                  de(o).advSearchEnable
                    ? (ye(),
                      vt(
                        Se,
                        {
                          key: 1,
                          type: 'primary',
                          text: '',
                          onClick:
                            Ee[4] || (Ee[4] = he => (Jo(a) ? (a.value = !de(a)) : (a = !de(a))))
                        },
                        {
                          default: Ye(() => [
                            Pn(Zo(de(a) ? '\u6536\u8D77' : '\u5C55\u5F00') + ' ', 1),
                            de(a) ? (ye(), vt(Y, { key: 0 })) : (ye(), vt(ce, { key: 1 }))
                          ]),
                          _: 1
                        }
                      ))
                    : Kr('', !0)
                ])
              ]),
              P1(
                (ye(),
                vt(
                  Pe,
                  va(
                    {
                      data: de(p),
                      border: '',
                      style: { width: '100%' },
                      'element-loading-text': (Oe = de(o)) == null ? void 0 : Oe.elementLoadingText,
                      'element-loading-spinner':
                        (Kt = de(o)) == null ? void 0 : Kt.elementLoadingSpinner,
                      'element-loading-background':
                        ($e = de(o)) == null ? void 0 : $e.elementLoadingBackground,
                      'element-loading-svg': (fe = de(o)) == null ? void 0 : fe.elementLoadingSvg,
                      'element-loading-svg-view-box':
                        (kt = de(o)) == null ? void 0 : kt.elementLoadingSvgViewBox,
                      onRowClick: de(M)
                    },
                    ee.$attrs
                  ),
                  {
                    append: Ye(() => [bt(ee.$slots, 'append', {}, void 0, !0)]),
                    empty: Ye(() => [Xr('div', aD, [bt(ee.$slots, 'empty', {}, () => [iD], !0)])]),
                    default: Ye(() => [
                      bt(ee.$slots, 'default', {}, void 0, !0),
                      (ye(!0),
                      gt(
                        xr,
                        null,
                        Fi(
                          de(s),
                          (he, Sr) => (
                            ye(),
                            gt(
                              xr,
                              { key: Sr },
                              [
                                de(n0)(he) === 'datetime'
                                  ? (ye(),
                                    vt(
                                      ue,
                                      va(
                                        {
                                          key: 0,
                                          prop: he.prop,
                                          label: he.label,
                                          width: he.width,
                                          align: he.align
                                        },
                                        he
                                      ),
                                      hi({ _: 2 }, [
                                        he.isShowHeader
                                          ? {
                                              name: 'header',
                                              fn: Ye(() => [
                                                bt(ee.$slots, 'header', {}, void 0, !0)
                                              ]),
                                              key: '0'
                                            }
                                          : void 0
                                      ]),
                                      1040,
                                      ['prop', 'label', 'width', 'align']
                                    ))
                                  : de(n0)(he) === 'button'
                                  ? (ye(),
                                    vt(
                                      ue,
                                      {
                                        key: 1,
                                        prop: 'buttons',
                                        label: he.label,
                                        width: he.width,
                                        align: he.align
                                      },
                                      hi(
                                        {
                                          default: Ye(Xe => [
                                            Xe.row.rowEdit
                                              ? bt(
                                                  ee.$slots,
                                                  'editRow',
                                                  {
                                                    key: 0,
                                                    scope: Xe
                                                  },
                                                  void 0,
                                                  !0
                                                )
                                              : bt(
                                                  ee.$slots,
                                                  'action',
                                                  {
                                                    key: 1,
                                                    scope: Xe
                                                  },
                                                  void 0,
                                                  !0
                                                )
                                          ]),
                                          _: 2
                                        },
                                        [
                                          he.isShowHeader
                                            ? {
                                                name: 'header',
                                                fn: Ye(() => [
                                                  bt(ee.$slots, 'header', {}, void 0, !0)
                                                ]),
                                                key: '0'
                                              }
                                            : void 0
                                        ]
                                      ),
                                      1032,
                                      ['label', 'width', 'align']
                                    ))
                                  : de(n0)(he) === 'enum'
                                  ? (ye(),
                                    vt(
                                      ue,
                                      va(
                                        {
                                          key: 2,
                                          prop: he.prop,
                                          label: he.label,
                                          width: he.width,
                                          align: he.align
                                        },
                                        he
                                      ),
                                      hi({ _: 2 }, [
                                        he.isShowHeader
                                          ? {
                                              name: 'header',
                                              fn: Ye(() => [
                                                bt(ee.$slots, 'header', {}, void 0, !0)
                                              ]),
                                              key: '0'
                                            }
                                          : void 0
                                      ]),
                                      1040,
                                      ['prop', 'label', 'width', 'align']
                                    ))
                                  : (ye(),
                                    vt(
                                      ue,
                                      va(
                                        {
                                          key: 3,
                                          prop: he.prop,
                                          label: he.label,
                                          width: he.width,
                                          align: he.align
                                        },
                                        he
                                      ),
                                      hi(
                                        {
                                          default: Ye(Xe => [
                                            Xe.row.rowEdit
                                              ? (ye(),
                                                vt(
                                                  A,
                                                  {
                                                    key: 0,
                                                    size: 'small',
                                                    modelValue: Xe.row[he.prop],
                                                    'onUpdate:modelValue': yr =>
                                                      (Xe.row[he.prop] = yr)
                                                  },
                                                  null,
                                                  8,
                                                  ['modelValue', 'onUpdate:modelValue']
                                                ))
                                              : (ye(),
                                                gt(
                                                  xr,
                                                  { key: 1 },
                                                  [
                                                    Xe.$index + Xe.column.id === de(f)
                                                      ? (ye(),
                                                        gt('div', tD, [
                                                          ct(
                                                            A,
                                                            {
                                                              size: 'small',
                                                              modelValue: Xe.row[he.prop],
                                                              'onUpdate:modelValue': yr =>
                                                                (Xe.row[he.prop] = yr)
                                                            },
                                                            null,
                                                            8,
                                                            ['modelValue', 'onUpdate:modelValue']
                                                          ),
                                                          Xr('div', null, [
                                                            ee.$slots.cellEdit
                                                              ? bt(
                                                                  ee.$slots,
                                                                  'cellEdit',
                                                                  {
                                                                    key: 0,
                                                                    scope: Xe
                                                                  },
                                                                  void 0,
                                                                  !0
                                                                )
                                                              : (ye(),
                                                                gt('div', rD, [
                                                                  ct(
                                                                    le,
                                                                    {
                                                                      class: 'check',
                                                                      onClick: Bs(
                                                                        yr => de(F)(Xe),
                                                                        ['stop']
                                                                      )
                                                                    },
                                                                    null,
                                                                    8,
                                                                    ['onClick']
                                                                  ),
                                                                  ct(
                                                                    re,
                                                                    {
                                                                      class: 'close',
                                                                      onClick: Bs(
                                                                        yr => de(b)(Xe),
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
                                                      : (ye(),
                                                        gt(
                                                          xr,
                                                          { key: 1 },
                                                          [
                                                            he.slot
                                                              ? bt(
                                                                  ee.$slots,
                                                                  he.slot,
                                                                  {
                                                                    key: 0,
                                                                    scope: Xe
                                                                  },
                                                                  void 0,
                                                                  !0
                                                                )
                                                              : (ye(),
                                                                gt(
                                                                  'span',
                                                                  nD,
                                                                  Zo(Xe.row[he.prop]),
                                                                  1
                                                                )),
                                                            he.editable
                                                              ? (ye(),
                                                                vt(
                                                                  I1(
                                                                    `el-icon-${de(Fd)(
                                                                      he == null
                                                                        ? void 0
                                                                        : he.editIcon
                                                                    )}`
                                                                  ),
                                                                  {
                                                                    key: 2,
                                                                    class: 'edit',
                                                                    onClick: Bs(
                                                                      yr => de(W)(Xe),
                                                                      ['stop']
                                                                    )
                                                                  },
                                                                  null,
                                                                  8,
                                                                  ['onClick']
                                                                ))
                                                              : Kr('', !0)
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
                                          he.isShowHeader
                                            ? {
                                                name: 'header',
                                                fn: Ye(() => [
                                                  bt(ee.$slots, 'header', {}, void 0, !0)
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
                [[mt, de(n)]]
              ),
              de(o).pagination && !de(n)
                ? (ye(),
                  gt(
                    'div',
                    {
                      key: 1,
                      class: 'pagination',
                      style: M1({ justifyContent: de(h) })
                    },
                    [
                      bt(
                        ee.$slots,
                        'pagination',
                        {},
                        () => [
                          ct(
                            Te,
                            {
                              'current-page': de(l).currentPage,
                              'onUpdate:currentPage':
                                Ee[5] || (Ee[5] = he => (de(l).currentPage = he)),
                              'page-sizes': de(l).pageSizes,
                              'page-size': de(l).pageSize,
                              layout: 'total, sizes, prev, pager, next, jumper',
                              total: de(l).total,
                              background: '',
                              onSizeChange: de(J),
                              onCurrentChange: de(ae)
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
                : Kr('', !0)
            ],
            64
          )
        )
      }
    }
  })
const oD = (e, t) => {
    const r = e.__vccOpts || e
    for (const [n, a] of t) r[n] = a
    return r
  },
  fD = /* @__PURE__ */ oD(sD, [['__scopeId', 'data-v-23759822']]),
  uD = {
    install(e) {
      e.component('lib-table', fD)
    }
  }
export { uD as default }
