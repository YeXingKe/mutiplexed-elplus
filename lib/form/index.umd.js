;(function (j, At) {
  typeof exports == 'object' && typeof module < 'u'
    ? (module.exports = At(require('vue')))
    : typeof define == 'function' && define.amd
    ? define(['vue'], At)
    : ((j = typeof globalThis < 'u' ? globalThis : j || self), (j.index = At(j.Vue)))
})(this, function (j) {
  'use strict'
  var At =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {}
  function cn(I) {
    return I && I.__esModule && Object.prototype.hasOwnProperty.call(I, 'default') ? I.default : I
  }
  function dn() {
    ;(this.__data__ = []), (this.size = 0)
  }
  var vn = dn
  function pn(I, L) {
    return I === L || (I !== I && L !== L)
  }
  var me = pn,
    hn = me
  function mn(I, L) {
    for (var o = I.length; o--; ) if (hn(I[o][0], L)) return o
    return -1
  }
  var Yt = mn,
    gn = Yt,
    An = Array.prototype,
    yn = An.splice
  function En(I) {
    var L = this.__data__,
      o = gn(L, I)
    if (o < 0) return !1
    var n = L.length - 1
    return o == n ? L.pop() : yn.call(L, o, 1), --this.size, !0
  }
  var xn = En,
    Sn = Yt
  function Cn(I) {
    var L = this.__data__,
      o = Sn(L, I)
    return o < 0 ? void 0 : L[o][1]
  }
  var Tn = Cn,
    Dn = Yt
  function Pn(I) {
    return Dn(this.__data__, I) > -1
  }
  var In = Pn,
    Rn = Yt
  function Mn(I, L) {
    var o = this.__data__,
      n = Rn(o, I)
    return n < 0 ? (++this.size, o.push([I, L])) : (o[n][1] = L), this
  }
  var Nn = Mn,
    Bn = vn,
    Fn = xn,
    On = Tn,
    Ln = In,
    $n = Nn
  function Tt(I) {
    var L = -1,
      o = I == null ? 0 : I.length
    for (this.clear(); ++L < o; ) {
      var n = I[L]
      this.set(n[0], n[1])
    }
  }
  ;(Tt.prototype.clear = Bn),
    (Tt.prototype.delete = Fn),
    (Tt.prototype.get = On),
    (Tt.prototype.has = Ln),
    (Tt.prototype.set = $n)
  var Vt = Tt,
    Hn = Vt
  function bn() {
    ;(this.__data__ = new Hn()), (this.size = 0)
  }
  var jn = bn
  function Un(I) {
    var L = this.__data__,
      o = L.delete(I)
    return (this.size = L.size), o
  }
  var wn = Un
  function Qn(I) {
    return this.__data__.get(I)
  }
  var Yn = Qn
  function Vn(I) {
    return this.__data__.has(I)
  }
  var zn = Vn,
    Gn = typeof At == 'object' && At && At.Object === Object && At,
    ge = Gn,
    Kn = ge,
    Jn = typeof self == 'object' && self && self.Object === Object && self,
    Wn = Kn || Jn || Function('return this')(),
    vt = Wn,
    Xn = vt,
    Zn = Xn.Symbol,
    qt = Zn,
    Ae = qt,
    ye = Object.prototype,
    kn = ye.hasOwnProperty,
    qn = ye.toString,
    $t = Ae ? Ae.toStringTag : void 0
  function _n(I) {
    var L = kn.call(I, $t),
      o = I[$t]
    try {
      I[$t] = void 0
      var n = !0
    } catch {}
    var t = qn.call(I)
    return n && (L ? (I[$t] = o) : delete I[$t]), t
  }
  var tr = _n,
    er = Object.prototype,
    nr = er.toString
  function rr(I) {
    return nr.call(I)
  }
  var or = rr,
    Ee = qt,
    ar = tr,
    ir = or,
    lr = '[object Null]',
    sr = '[object Undefined]',
    xe = Ee ? Ee.toStringTag : void 0
  function ur(I) {
    return I == null ? (I === void 0 ? sr : lr) : xe && xe in Object(I) ? ar(I) : ir(I)
  }
  var zt = ur
  function fr(I) {
    var L = typeof I
    return I != null && (L == 'object' || L == 'function')
  }
  var Ht = fr,
    cr = zt,
    dr = Ht,
    vr = '[object AsyncFunction]',
    pr = '[object Function]',
    hr = '[object GeneratorFunction]',
    mr = '[object Proxy]'
  function gr(I) {
    if (!dr(I)) return !1
    var L = cr(I)
    return L == pr || L == hr || L == vr || L == mr
  }
  var Se = gr,
    Ar = vt,
    yr = Ar['__core-js_shared__'],
    Er = yr,
    _t = Er,
    Ce = (function () {
      var I = /[^.]+$/.exec((_t && _t.keys && _t.keys.IE_PROTO) || '')
      return I ? 'Symbol(src)_1.' + I : ''
    })()
  function xr(I) {
    return !!Ce && Ce in I
  }
  var Sr = xr,
    Cr = Function.prototype,
    Tr = Cr.toString
  function Dr(I) {
    if (I != null) {
      try {
        return Tr.call(I)
      } catch {}
      try {
        return I + ''
      } catch {}
    }
    return ''
  }
  var Te = Dr,
    Pr = Se,
    Ir = Sr,
    Rr = Ht,
    Mr = Te,
    Nr = /[\\^$.*+?()[\]{}|]/g,
    Br = /^\[object .+?Constructor\]$/,
    Fr = Function.prototype,
    Or = Object.prototype,
    Lr = Fr.toString,
    $r = Or.hasOwnProperty,
    Hr = RegExp(
      '^' +
        Lr.call($r)
          .replace(Nr, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$'
    )
  function br(I) {
    if (!Rr(I) || Ir(I)) return !1
    var L = Pr(I) ? Hr : Br
    return L.test(Mr(I))
  }
  var jr = br
  function Ur(I, L) {
    return I == null ? void 0 : I[L]
  }
  var wr = Ur,
    Qr = jr,
    Yr = wr
  function Vr(I, L) {
    var o = Yr(I, L)
    return Qr(o) ? o : void 0
  }
  var Et = Vr,
    zr = Et,
    Gr = vt,
    Kr = zr(Gr, 'Map'),
    te = Kr,
    Jr = Et,
    Wr = Jr(Object, 'create'),
    Gt = Wr,
    De = Gt
  function Xr() {
    ;(this.__data__ = De ? De(null) : {}), (this.size = 0)
  }
  var Zr = Xr
  function kr(I) {
    var L = this.has(I) && delete this.__data__[I]
    return (this.size -= L ? 1 : 0), L
  }
  var qr = kr,
    _r = Gt,
    to = '__lodash_hash_undefined__',
    eo = Object.prototype,
    no = eo.hasOwnProperty
  function ro(I) {
    var L = this.__data__
    if (_r) {
      var o = L[I]
      return o === to ? void 0 : o
    }
    return no.call(L, I) ? L[I] : void 0
  }
  var oo = ro,
    ao = Gt,
    io = Object.prototype,
    lo = io.hasOwnProperty
  function so(I) {
    var L = this.__data__
    return ao ? L[I] !== void 0 : lo.call(L, I)
  }
  var uo = so,
    fo = Gt,
    co = '__lodash_hash_undefined__'
  function vo(I, L) {
    var o = this.__data__
    return (this.size += this.has(I) ? 0 : 1), (o[I] = fo && L === void 0 ? co : L), this
  }
  var po = vo,
    ho = Zr,
    mo = qr,
    go = oo,
    Ao = uo,
    yo = po
  function Dt(I) {
    var L = -1,
      o = I == null ? 0 : I.length
    for (this.clear(); ++L < o; ) {
      var n = I[L]
      this.set(n[0], n[1])
    }
  }
  ;(Dt.prototype.clear = ho),
    (Dt.prototype.delete = mo),
    (Dt.prototype.get = go),
    (Dt.prototype.has = Ao),
    (Dt.prototype.set = yo)
  var Eo = Dt,
    Pe = Eo,
    xo = Vt,
    So = te
  function Co() {
    ;(this.size = 0), (this.__data__ = { hash: new Pe(), map: new (So || xo)(), string: new Pe() })
  }
  var To = Co
  function Do(I) {
    var L = typeof I
    return L == 'string' || L == 'number' || L == 'symbol' || L == 'boolean'
      ? I !== '__proto__'
      : I === null
  }
  var Po = Do,
    Io = Po
  function Ro(I, L) {
    var o = I.__data__
    return Io(L) ? o[typeof L == 'string' ? 'string' : 'hash'] : o.map
  }
  var Kt = Ro,
    Mo = Kt
  function No(I) {
    var L = Mo(this, I).delete(I)
    return (this.size -= L ? 1 : 0), L
  }
  var Bo = No,
    Fo = Kt
  function Oo(I) {
    return Fo(this, I).get(I)
  }
  var Lo = Oo,
    $o = Kt
  function Ho(I) {
    return $o(this, I).has(I)
  }
  var bo = Ho,
    jo = Kt
  function Uo(I, L) {
    var o = jo(this, I),
      n = o.size
    return o.set(I, L), (this.size += o.size == n ? 0 : 1), this
  }
  var wo = Uo,
    Qo = To,
    Yo = Bo,
    Vo = Lo,
    zo = bo,
    Go = wo
  function Pt(I) {
    var L = -1,
      o = I == null ? 0 : I.length
    for (this.clear(); ++L < o; ) {
      var n = I[L]
      this.set(n[0], n[1])
    }
  }
  ;(Pt.prototype.clear = Qo),
    (Pt.prototype.delete = Yo),
    (Pt.prototype.get = Vo),
    (Pt.prototype.has = zo),
    (Pt.prototype.set = Go)
  var Ko = Pt,
    Jo = Vt,
    Wo = te,
    Xo = Ko,
    Zo = 200
  function ko(I, L) {
    var o = this.__data__
    if (o instanceof Jo) {
      var n = o.__data__
      if (!Wo || n.length < Zo - 1) return n.push([I, L]), (this.size = ++o.size), this
      o = this.__data__ = new Xo(n)
    }
    return o.set(I, L), (this.size = o.size), this
  }
  var qo = ko,
    _o = Vt,
    ta = jn,
    ea = wn,
    na = Yn,
    ra = zn,
    oa = qo
  function It(I) {
    var L = (this.__data__ = new _o(I))
    this.size = L.size
  }
  ;(It.prototype.clear = ta),
    (It.prototype.delete = ea),
    (It.prototype.get = na),
    (It.prototype.has = ra),
    (It.prototype.set = oa)
  var aa = It
  function ia(I, L) {
    for (var o = -1, n = I == null ? 0 : I.length; ++o < n && L(I[o], o, I) !== !1; );
    return I
  }
  var la = ia,
    sa = Et,
    ua = (function () {
      try {
        var I = sa(Object, 'defineProperty')
        return I({}, '', {}), I
      } catch {}
    })(),
    fa = ua,
    Ie = fa
  function ca(I, L, o) {
    L == '__proto__' && Ie
      ? Ie(I, L, { configurable: !0, enumerable: !0, value: o, writable: !0 })
      : (I[L] = o)
  }
  var Re = ca,
    da = Re,
    va = me,
    pa = Object.prototype,
    ha = pa.hasOwnProperty
  function ma(I, L, o) {
    var n = I[L]
    ;(!(ha.call(I, L) && va(n, o)) || (o === void 0 && !(L in I))) && da(I, L, o)
  }
  var Me = ma,
    ga = Me,
    Aa = Re
  function ya(I, L, o, n) {
    var t = !o
    o || (o = {})
    for (var e = -1, i = L.length; ++e < i; ) {
      var r = L[e],
        a = n ? n(o[r], I[r], r, o, I) : void 0
      a === void 0 && (a = I[r]), t ? Aa(o, r, a) : ga(o, r, a)
    }
    return o
  }
  var Jt = ya
  function Ea(I, L) {
    for (var o = -1, n = Array(I); ++o < I; ) n[o] = L(o)
    return n
  }
  var xa = Ea
  function Sa(I) {
    return I != null && typeof I == 'object'
  }
  var bt = Sa,
    Ca = zt,
    Ta = bt,
    Da = '[object Arguments]'
  function Pa(I) {
    return Ta(I) && Ca(I) == Da
  }
  var Ia = Pa,
    Ne = Ia,
    Ra = bt,
    Be = Object.prototype,
    Ma = Be.hasOwnProperty,
    Na = Be.propertyIsEnumerable,
    Ba = Ne(
      (function () {
        return arguments
      })()
    )
      ? Ne
      : function (I) {
          return Ra(I) && Ma.call(I, 'callee') && !Na.call(I, 'callee')
        },
    Fa = Ba,
    Oa = Array.isArray,
    ee = Oa,
    Wt = { exports: {} }
  function La() {
    return !1
  }
  var $a = La
  ;(function (I, L) {
    var o = vt,
      n = $a,
      t = L && !L.nodeType && L,
      e = t && !0 && I && !I.nodeType && I,
      i = e && e.exports === t,
      r = i ? o.Buffer : void 0,
      a = r ? r.isBuffer : void 0,
      c = a || n
    I.exports = c
  })(Wt, Wt.exports)
  var Ha = 9007199254740991,
    ba = /^(?:0|[1-9]\d*)$/
  function ja(I, L) {
    var o = typeof I
    return (
      (L = L == null ? Ha : L),
      !!L && (o == 'number' || (o != 'symbol' && ba.test(I))) && I > -1 && I % 1 == 0 && I < L
    )
  }
  var Ua = ja,
    wa = 9007199254740991
  function Qa(I) {
    return typeof I == 'number' && I > -1 && I % 1 == 0 && I <= wa
  }
  var Fe = Qa,
    Ya = zt,
    Va = Fe,
    za = bt,
    Ga = '[object Arguments]',
    Ka = '[object Array]',
    Ja = '[object Boolean]',
    Wa = '[object Date]',
    Xa = '[object Error]',
    Za = '[object Function]',
    ka = '[object Map]',
    qa = '[object Number]',
    _a = '[object Object]',
    ti = '[object RegExp]',
    ei = '[object Set]',
    ni = '[object String]',
    ri = '[object WeakMap]',
    oi = '[object ArrayBuffer]',
    ai = '[object DataView]',
    ii = '[object Float32Array]',
    li = '[object Float64Array]',
    si = '[object Int8Array]',
    ui = '[object Int16Array]',
    fi = '[object Int32Array]',
    ci = '[object Uint8Array]',
    di = '[object Uint8ClampedArray]',
    vi = '[object Uint16Array]',
    pi = '[object Uint32Array]',
    at = {}
  ;(at[ii] = at[li] = at[si] = at[ui] = at[fi] = at[ci] = at[di] = at[vi] = at[pi] = !0),
    (at[Ga] =
      at[Ka] =
      at[oi] =
      at[Ja] =
      at[ai] =
      at[Wa] =
      at[Xa] =
      at[Za] =
      at[ka] =
      at[qa] =
      at[_a] =
      at[ti] =
      at[ei] =
      at[ni] =
      at[ri] =
        !1)
  function hi(I) {
    return za(I) && Va(I.length) && !!at[Ya(I)]
  }
  var mi = hi
  function gi(I) {
    return function (L) {
      return I(L)
    }
  }
  var ne = gi,
    jt = { exports: {} }
  ;(function (I, L) {
    var o = ge,
      n = L && !L.nodeType && L,
      t = n && !0 && I && !I.nodeType && I,
      e = t && t.exports === n,
      i = e && o.process,
      r = (function () {
        try {
          var a = t && t.require && t.require('util').types
          return a || (i && i.binding && i.binding('util'))
        } catch {}
      })()
    I.exports = r
  })(jt, jt.exports)
  var Ai = mi,
    yi = ne,
    Oe = jt.exports,
    Le = Oe && Oe.isTypedArray,
    Ei = Le ? yi(Le) : Ai,
    xi = Ei,
    Si = xa,
    Ci = Fa,
    Ti = ee,
    Di = Wt.exports,
    Pi = Ua,
    Ii = xi,
    Ri = Object.prototype,
    Mi = Ri.hasOwnProperty
  function Ni(I, L) {
    var o = Ti(I),
      n = !o && Ci(I),
      t = !o && !n && Di(I),
      e = !o && !n && !t && Ii(I),
      i = o || n || t || e,
      r = i ? Si(I.length, String) : [],
      a = r.length
    for (var c in I)
      (L || Mi.call(I, c)) &&
        !(
          i &&
          (c == 'length' ||
            (t && (c == 'offset' || c == 'parent')) ||
            (e && (c == 'buffer' || c == 'byteLength' || c == 'byteOffset')) ||
            Pi(c, a))
        ) &&
        r.push(c)
    return r
  }
  var $e = Ni,
    Bi = Object.prototype
  function Fi(I) {
    var L = I && I.constructor,
      o = (typeof L == 'function' && L.prototype) || Bi
    return I === o
  }
  var re = Fi
  function Oi(I, L) {
    return function (o) {
      return I(L(o))
    }
  }
  var He = Oi,
    Li = He,
    $i = Li(Object.keys, Object),
    Hi = $i,
    bi = re,
    ji = Hi,
    Ui = Object.prototype,
    wi = Ui.hasOwnProperty
  function Qi(I) {
    if (!bi(I)) return ji(I)
    var L = []
    for (var o in Object(I)) wi.call(I, o) && o != 'constructor' && L.push(o)
    return L
  }
  var Yi = Qi,
    Vi = Se,
    zi = Fe
  function Gi(I) {
    return I != null && zi(I.length) && !Vi(I)
  }
  var be = Gi,
    Ki = $e,
    Ji = Yi,
    Wi = be
  function Xi(I) {
    return Wi(I) ? Ki(I) : Ji(I)
  }
  var oe = Xi,
    Zi = Jt,
    ki = oe
  function qi(I, L) {
    return I && Zi(L, ki(L), I)
  }
  var _i = qi
  function tl(I) {
    var L = []
    if (I != null) for (var o in Object(I)) L.push(o)
    return L
  }
  var el = tl,
    nl = Ht,
    rl = re,
    ol = el,
    al = Object.prototype,
    il = al.hasOwnProperty
  function ll(I) {
    if (!nl(I)) return ol(I)
    var L = rl(I),
      o = []
    for (var n in I) (n == 'constructor' && (L || !il.call(I, n))) || o.push(n)
    return o
  }
  var sl = ll,
    ul = $e,
    fl = sl,
    cl = be
  function dl(I) {
    return cl(I) ? ul(I, !0) : fl(I)
  }
  var ae = dl,
    vl = Jt,
    pl = ae
  function hl(I, L) {
    return I && vl(L, pl(L), I)
  }
  var ml = hl,
    ie = { exports: {} }
  ;(function (I, L) {
    var o = vt,
      n = L && !L.nodeType && L,
      t = n && !0 && I && !I.nodeType && I,
      e = t && t.exports === n,
      i = e ? o.Buffer : void 0,
      r = i ? i.allocUnsafe : void 0
    function a(c, A) {
      if (A) return c.slice()
      var d = c.length,
        h = r ? r(d) : new c.constructor(d)
      return c.copy(h), h
    }
    I.exports = a
  })(ie, ie.exports)
  function gl(I, L) {
    var o = -1,
      n = I.length
    for (L || (L = Array(n)); ++o < n; ) L[o] = I[o]
    return L
  }
  var Al = gl
  function yl(I, L) {
    for (var o = -1, n = I == null ? 0 : I.length, t = 0, e = []; ++o < n; ) {
      var i = I[o]
      L(i, o, I) && (e[t++] = i)
    }
    return e
  }
  var El = yl
  function xl() {
    return []
  }
  var je = xl,
    Sl = El,
    Cl = je,
    Tl = Object.prototype,
    Dl = Tl.propertyIsEnumerable,
    Ue = Object.getOwnPropertySymbols,
    Pl = Ue
      ? function (I) {
          return I == null
            ? []
            : ((I = Object(I)),
              Sl(Ue(I), function (L) {
                return Dl.call(I, L)
              }))
        }
      : Cl,
    le = Pl,
    Il = Jt,
    Rl = le
  function Ml(I, L) {
    return Il(I, Rl(I), L)
  }
  var Nl = Ml
  function Bl(I, L) {
    for (var o = -1, n = L.length, t = I.length; ++o < n; ) I[t + o] = L[o]
    return I
  }
  var we = Bl,
    Fl = He,
    Ol = Fl(Object.getPrototypeOf, Object),
    Qe = Ol,
    Ll = we,
    $l = Qe,
    Hl = le,
    bl = je,
    jl = Object.getOwnPropertySymbols,
    Ul = jl
      ? function (I) {
          for (var L = []; I; ) Ll(L, Hl(I)), (I = $l(I))
          return L
        }
      : bl,
    Ye = Ul,
    wl = Jt,
    Ql = Ye
  function Yl(I, L) {
    return wl(I, Ql(I), L)
  }
  var Vl = Yl,
    zl = we,
    Gl = ee
  function Kl(I, L, o) {
    var n = L(I)
    return Gl(I) ? n : zl(n, o(I))
  }
  var Ve = Kl,
    Jl = Ve,
    Wl = le,
    Xl = oe
  function Zl(I) {
    return Jl(I, Xl, Wl)
  }
  var kl = Zl,
    ql = Ve,
    _l = Ye,
    ts = ae
  function es(I) {
    return ql(I, ts, _l)
  }
  var ns = es,
    rs = Et,
    os = vt,
    as = rs(os, 'DataView'),
    is = as,
    ls = Et,
    ss = vt,
    us = ls(ss, 'Promise'),
    fs = us,
    cs = Et,
    ds = vt,
    vs = cs(ds, 'Set'),
    ps = vs,
    hs = Et,
    ms = vt,
    gs = hs(ms, 'WeakMap'),
    As = gs,
    se = is,
    ue = te,
    fe = fs,
    ce = ps,
    de = As,
    ze = zt,
    Rt = Te,
    Ge = '[object Map]',
    ys = '[object Object]',
    Ke = '[object Promise]',
    Je = '[object Set]',
    We = '[object WeakMap]',
    Xe = '[object DataView]',
    Es = Rt(se),
    xs = Rt(ue),
    Ss = Rt(fe),
    Cs = Rt(ce),
    Ts = Rt(de),
    xt = ze
  ;((se && xt(new se(new ArrayBuffer(1))) != Xe) ||
    (ue && xt(new ue()) != Ge) ||
    (fe && xt(fe.resolve()) != Ke) ||
    (ce && xt(new ce()) != Je) ||
    (de && xt(new de()) != We)) &&
    (xt = function (I) {
      var L = ze(I),
        o = L == ys ? I.constructor : void 0,
        n = o ? Rt(o) : ''
      if (n)
        switch (n) {
          case Es:
            return Xe
          case xs:
            return Ge
          case Ss:
            return Ke
          case Cs:
            return Je
          case Ts:
            return We
        }
      return L
    })
  var ve = xt,
    Ds = Object.prototype,
    Ps = Ds.hasOwnProperty
  function Is(I) {
    var L = I.length,
      o = new I.constructor(L)
    return (
      L &&
        typeof I[0] == 'string' &&
        Ps.call(I, 'index') &&
        ((o.index = I.index), (o.input = I.input)),
      o
    )
  }
  var Rs = Is,
    Ms = vt,
    Ns = Ms.Uint8Array,
    Bs = Ns,
    Ze = Bs
  function Fs(I) {
    var L = new I.constructor(I.byteLength)
    return new Ze(L).set(new Ze(I)), L
  }
  var pe = Fs,
    Os = pe
  function Ls(I, L) {
    var o = L ? Os(I.buffer) : I.buffer
    return new I.constructor(o, I.byteOffset, I.byteLength)
  }
  var $s = Ls,
    Hs = /\w*$/
  function bs(I) {
    var L = new I.constructor(I.source, Hs.exec(I))
    return (L.lastIndex = I.lastIndex), L
  }
  var js = bs,
    ke = qt,
    qe = ke ? ke.prototype : void 0,
    _e = qe ? qe.valueOf : void 0
  function Us(I) {
    return _e ? Object(_e.call(I)) : {}
  }
  var ws = Us,
    Qs = pe
  function Ys(I, L) {
    var o = L ? Qs(I.buffer) : I.buffer
    return new I.constructor(o, I.byteOffset, I.length)
  }
  var Vs = Ys,
    zs = pe,
    Gs = $s,
    Ks = js,
    Js = ws,
    Ws = Vs,
    Xs = '[object Boolean]',
    Zs = '[object Date]',
    ks = '[object Map]',
    qs = '[object Number]',
    _s = '[object RegExp]',
    tu = '[object Set]',
    eu = '[object String]',
    nu = '[object Symbol]',
    ru = '[object ArrayBuffer]',
    ou = '[object DataView]',
    au = '[object Float32Array]',
    iu = '[object Float64Array]',
    lu = '[object Int8Array]',
    su = '[object Int16Array]',
    uu = '[object Int32Array]',
    fu = '[object Uint8Array]',
    cu = '[object Uint8ClampedArray]',
    du = '[object Uint16Array]',
    vu = '[object Uint32Array]'
  function pu(I, L, o) {
    var n = I.constructor
    switch (L) {
      case ru:
        return zs(I)
      case Xs:
      case Zs:
        return new n(+I)
      case ou:
        return Gs(I, o)
      case au:
      case iu:
      case lu:
      case su:
      case uu:
      case fu:
      case cu:
      case du:
      case vu:
        return Ws(I, o)
      case ks:
        return new n()
      case qs:
      case eu:
        return new n(I)
      case _s:
        return Ks(I)
      case tu:
        return new n()
      case nu:
        return Js(I)
    }
  }
  var hu = pu,
    mu = Ht,
    tn = Object.create,
    gu = (function () {
      function I() {}
      return function (L) {
        if (!mu(L)) return {}
        if (tn) return tn(L)
        I.prototype = L
        var o = new I()
        return (I.prototype = void 0), o
      }
    })(),
    Au = gu,
    yu = Au,
    Eu = Qe,
    xu = re
  function Su(I) {
    return typeof I.constructor == 'function' && !xu(I) ? yu(Eu(I)) : {}
  }
  var Cu = Su,
    Tu = ve,
    Du = bt,
    Pu = '[object Map]'
  function Iu(I) {
    return Du(I) && Tu(I) == Pu
  }
  var Ru = Iu,
    Mu = Ru,
    Nu = ne,
    en = jt.exports,
    nn = en && en.isMap,
    Bu = nn ? Nu(nn) : Mu,
    Fu = Bu,
    Ou = ve,
    Lu = bt,
    $u = '[object Set]'
  function Hu(I) {
    return Lu(I) && Ou(I) == $u
  }
  var bu = Hu,
    ju = bu,
    Uu = ne,
    rn = jt.exports,
    on = rn && rn.isSet,
    wu = on ? Uu(on) : ju,
    Qu = wu,
    Yu = aa,
    Vu = la,
    zu = Me,
    Gu = _i,
    Ku = ml,
    Ju = ie.exports,
    Wu = Al,
    Xu = Nl,
    Zu = Vl,
    ku = kl,
    qu = ns,
    _u = ve,
    tf = Rs,
    ef = hu,
    nf = Cu,
    rf = ee,
    of = Wt.exports,
    af = Fu,
    lf = Ht,
    sf = Qu,
    uf = oe,
    ff = ae,
    cf = 1,
    df = 2,
    vf = 4,
    an = '[object Arguments]',
    pf = '[object Array]',
    hf = '[object Boolean]',
    mf = '[object Date]',
    gf = '[object Error]',
    ln = '[object Function]',
    Af = '[object GeneratorFunction]',
    yf = '[object Map]',
    Ef = '[object Number]',
    sn = '[object Object]',
    xf = '[object RegExp]',
    Sf = '[object Set]',
    Cf = '[object String]',
    Tf = '[object Symbol]',
    Df = '[object WeakMap]',
    Pf = '[object ArrayBuffer]',
    If = '[object DataView]',
    Rf = '[object Float32Array]',
    Mf = '[object Float64Array]',
    Nf = '[object Int8Array]',
    Bf = '[object Int16Array]',
    Ff = '[object Int32Array]',
    Of = '[object Uint8Array]',
    Lf = '[object Uint8ClampedArray]',
    $f = '[object Uint16Array]',
    Hf = '[object Uint32Array]',
    ot = {}
  ;(ot[an] =
    ot[pf] =
    ot[Pf] =
    ot[If] =
    ot[hf] =
    ot[mf] =
    ot[Rf] =
    ot[Mf] =
    ot[Nf] =
    ot[Bf] =
    ot[Ff] =
    ot[yf] =
    ot[Ef] =
    ot[sn] =
    ot[xf] =
    ot[Sf] =
    ot[Cf] =
    ot[Tf] =
    ot[Of] =
    ot[Lf] =
    ot[$f] =
    ot[Hf] =
      !0),
    (ot[gf] = ot[ln] = ot[Df] = !1)
  function Xt(I, L, o, n, t, e) {
    var i,
      r = L & cf,
      a = L & df,
      c = L & vf
    if ((o && (i = t ? o(I, n, t, e) : o(I)), i !== void 0)) return i
    if (!lf(I)) return I
    var A = rf(I)
    if (A) {
      if (((i = tf(I)), !r)) return Wu(I, i)
    } else {
      var d = _u(I),
        h = d == ln || d == Af
      if (of(I)) return Ju(I, r)
      if (d == sn || d == an || (h && !t)) {
        if (((i = a || h ? {} : nf(I)), !r)) return a ? Zu(I, Ku(i, I)) : Xu(I, Gu(i, I))
      } else {
        if (!ot[d]) return t ? I : {}
        i = ef(I, d, r)
      }
    }
    e || (e = new Yu())
    var f = e.get(I)
    if (f) return f
    e.set(I, i),
      sf(I)
        ? I.forEach(function (s) {
            i.add(Xt(s, L, o, s, I, e))
          })
        : af(I) &&
          I.forEach(function (s, p) {
            i.set(p, Xt(s, L, o, p, I, e))
          })
    var l = c ? (a ? qu : ku) : a ? ff : uf,
      u = A ? void 0 : l(I)
    return (
      Vu(u || I, function (s, p) {
        u && ((p = s), (s = I[p])), zu(i, p, Xt(s, L, o, p, I, e))
      }),
      i
    )
  }
  var bf = Xt,
    jf = bf,
    Uf = 1,
    wf = 4
  function Qf(I) {
    return jf(I, Uf | wf)
  }
  var un = Qf,
    fn = { exports: {} }
  ;(function (I, L) {
    ;(function (n, t) {
      I.exports = t()
    })(window, function () {
      return (function (o) {
        var n = {}
        function t(e) {
          if (n[e]) return n[e].exports
          var i = (n[e] = { i: e, l: !1, exports: {} })
          return o[e].call(i.exports, i, i.exports, t), (i.l = !0), i.exports
        }
        return (
          (t.m = o),
          (t.c = n),
          (t.d = function (e, i, r) {
            t.o(e, i) || Object.defineProperty(e, i, { enumerable: !0, get: r })
          }),
          (t.r = function (e) {
            typeof Symbol < 'u' &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
              Object.defineProperty(e, '__esModule', { value: !0 })
          }),
          (t.t = function (e, i) {
            if (
              (i & 1 && (e = t(e)), i & 8 || (i & 4 && typeof e == 'object' && e && e.__esModule))
            )
              return e
            var r = Object.create(null)
            if (
              (t.r(r),
              Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
              i & 2 && typeof e != 'string')
            )
              for (var a in e)
                t.d(
                  r,
                  a,
                  function (c) {
                    return e[c]
                  }.bind(null, a)
                )
            return r
          }),
          (t.n = function (e) {
            var i =
              e && e.__esModule
                ? function () {
                    return e.default
                  }
                : function () {
                    return e
                  }
            return t.d(i, 'a', i), i
          }),
          (t.o = function (e, i) {
            return Object.prototype.hasOwnProperty.call(e, i)
          }),
          (t.p = ''),
          t((t.s = 141))
        )
      })([
        function (o, n) {
          function t(e) {
            return e && e.__esModule ? e : { default: e }
          }
          o.exports = t
        },
        function (o, n, t) {
          o.exports = t(142)
        },
        function (o, n, t) {
          t.r(n),
            t.d(n, '__extends', function () {
              return i
            }),
            t.d(n, '__assign', function () {
              return r
            }),
            t.d(n, '__rest', function () {
              return a
            }),
            t.d(n, '__decorate', function () {
              return c
            }),
            t.d(n, '__param', function () {
              return A
            }),
            t.d(n, '__metadata', function () {
              return d
            }),
            t.d(n, '__awaiter', function () {
              return h
            }),
            t.d(n, '__generator', function () {
              return f
            }),
            t.d(n, '__createBinding', function () {
              return l
            }),
            t.d(n, '__exportStar', function () {
              return u
            }),
            t.d(n, '__values', function () {
              return s
            }),
            t.d(n, '__read', function () {
              return p
            }),
            t.d(n, '__spread', function () {
              return v
            }),
            t.d(n, '__spreadArrays', function () {
              return m
            }),
            t.d(n, '__spreadArray', function () {
              return g
            }),
            t.d(n, '__await', function () {
              return y
            }),
            t.d(n, '__asyncGenerator', function () {
              return x
            }),
            t.d(n, '__asyncDelegator', function () {
              return S
            }),
            t.d(n, '__asyncValues', function () {
              return D
            }),
            t.d(n, '__makeTemplateObject', function () {
              return P
            }),
            t.d(n, '__importStar', function () {
              return E
            }),
            t.d(n, '__importDefault', function () {
              return T
            }),
            t.d(n, '__classPrivateFieldGet', function () {
              return R
            }),
            t.d(n, '__classPrivateFieldSet', function () {
              return N
            })
          /*! *****************************************************************************
		Copyright (c) Microsoft Corporation.

		Permission to use, copy, modify, and/or distribute this software for any
		purpose with or without fee is hereby granted.

		THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
		REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
		AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
		INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
		LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
		OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
		PERFORMANCE OF THIS SOFTWARE.
		***************************************************************************** */ var e = function (
            M,
            B
          ) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (F, O) {
                    F.__proto__ = O
                  }) ||
                function (F, O) {
                  for (var b in O) Object.prototype.hasOwnProperty.call(O, b) && (F[b] = O[b])
                }),
              e(M, B)
            )
          }
          function i(M, B) {
            if (typeof B != 'function' && B !== null)
              throw new TypeError(
                'Class extends value ' + String(B) + ' is not a constructor or null'
              )
            e(M, B)
            function F() {
              this.constructor = M
            }
            M.prototype = B === null ? Object.create(B) : ((F.prototype = B.prototype), new F())
          }
          var r = function () {
            return (
              (r =
                Object.assign ||
                function (B) {
                  for (var F, O = 1, b = arguments.length; O < b; O++) {
                    F = arguments[O]
                    for (var $ in F) Object.prototype.hasOwnProperty.call(F, $) && (B[$] = F[$])
                  }
                  return B
                }),
              r.apply(this, arguments)
            )
          }
          function a(M, B) {
            var F = {}
            for (var O in M)
              Object.prototype.hasOwnProperty.call(M, O) && B.indexOf(O) < 0 && (F[O] = M[O])
            if (M != null && typeof Object.getOwnPropertySymbols == 'function')
              for (var b = 0, O = Object.getOwnPropertySymbols(M); b < O.length; b++)
                B.indexOf(O[b]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(M, O[b]) &&
                  (F[O[b]] = M[O[b]])
            return F
          }
          function c(M, B, F, O) {
            var b = arguments.length,
              $ = b < 3 ? B : O === null ? (O = Object.getOwnPropertyDescriptor(B, F)) : O,
              H
            if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
              $ = Reflect.decorate(M, B, F, O)
            else
              for (var U = M.length - 1; U >= 0; U--)
                (H = M[U]) && ($ = (b < 3 ? H($) : b > 3 ? H(B, F, $) : H(B, F)) || $)
            return b > 3 && $ && Object.defineProperty(B, F, $), $
          }
          function A(M, B) {
            return function (F, O) {
              B(F, O, M)
            }
          }
          function d(M, B) {
            if (typeof Reflect == 'object' && typeof Reflect.metadata == 'function')
              return Reflect.metadata(M, B)
          }
          function h(M, B, F, O) {
            function b($) {
              return $ instanceof F
                ? $
                : new F(function (H) {
                    H($)
                  })
            }
            return new (F || (F = Promise))(function ($, H) {
              function U(X) {
                try {
                  w(O.next(X))
                } catch (J) {
                  H(J)
                }
              }
              function K(X) {
                try {
                  w(O.throw(X))
                } catch (J) {
                  H(J)
                }
              }
              function w(X) {
                X.done ? $(X.value) : b(X.value).then(U, K)
              }
              w((O = O.apply(M, B || [])).next())
            })
          }
          function f(M, B) {
            var F = {
                label: 0,
                sent: function () {
                  if ($[0] & 1) throw $[1]
                  return $[1]
                },
                trys: [],
                ops: []
              },
              O,
              b,
              $,
              H
            return (
              (H = { next: U(0), throw: U(1), return: U(2) }),
              typeof Symbol == 'function' &&
                (H[Symbol.iterator] = function () {
                  return this
                }),
              H
            )
            function U(w) {
              return function (X) {
                return K([w, X])
              }
            }
            function K(w) {
              if (O) throw new TypeError('Generator is already executing.')
              for (; F; )
                try {
                  if (
                    ((O = 1),
                    b &&
                      ($ =
                        w[0] & 2
                          ? b.return
                          : w[0]
                          ? b.throw || (($ = b.return) && $.call(b), 0)
                          : b.next) &&
                      !($ = $.call(b, w[1])).done)
                  )
                    return $
                  switch (((b = 0), $ && (w = [w[0] & 2, $.value]), w[0])) {
                    case 0:
                    case 1:
                      $ = w
                      break
                    case 4:
                      return F.label++, { value: w[1], done: !1 }
                    case 5:
                      F.label++, (b = w[1]), (w = [0])
                      continue
                    case 7:
                      ;(w = F.ops.pop()), F.trys.pop()
                      continue
                    default:
                      if (
                        (($ = F.trys),
                        !($ = $.length > 0 && $[$.length - 1]) && (w[0] === 6 || w[0] === 2))
                      ) {
                        F = 0
                        continue
                      }
                      if (w[0] === 3 && (!$ || (w[1] > $[0] && w[1] < $[3]))) {
                        F.label = w[1]
                        break
                      }
                      if (w[0] === 6 && F.label < $[1]) {
                        ;(F.label = $[1]), ($ = w)
                        break
                      }
                      if ($ && F.label < $[2]) {
                        ;(F.label = $[2]), F.ops.push(w)
                        break
                      }
                      $[2] && F.ops.pop(), F.trys.pop()
                      continue
                  }
                  w = B.call(M, F)
                } catch (X) {
                  ;(w = [6, X]), (b = 0)
                } finally {
                  O = $ = 0
                }
              if (w[0] & 5) throw w[1]
              return { value: w[0] ? w[1] : void 0, done: !0 }
            }
          }
          var l = Object.create
            ? function (M, B, F, O) {
                O === void 0 && (O = F),
                  Object.defineProperty(M, O, {
                    enumerable: !0,
                    get: function () {
                      return B[F]
                    }
                  })
              }
            : function (M, B, F, O) {
                O === void 0 && (O = F), (M[O] = B[F])
              }
          function u(M, B) {
            for (var F in M)
              F !== 'default' && !Object.prototype.hasOwnProperty.call(B, F) && l(B, M, F)
          }
          function s(M) {
            var B = typeof Symbol == 'function' && Symbol.iterator,
              F = B && M[B],
              O = 0
            if (F) return F.call(M)
            if (M && typeof M.length == 'number')
              return {
                next: function () {
                  return M && O >= M.length && (M = void 0), { value: M && M[O++], done: !M }
                }
              }
            throw new TypeError(B ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
          }
          function p(M, B) {
            var F = typeof Symbol == 'function' && M[Symbol.iterator]
            if (!F) return M
            var O = F.call(M),
              b,
              $ = [],
              H
            try {
              for (; (B === void 0 || B-- > 0) && !(b = O.next()).done; ) $.push(b.value)
            } catch (U) {
              H = { error: U }
            } finally {
              try {
                b && !b.done && (F = O.return) && F.call(O)
              } finally {
                if (H) throw H.error
              }
            }
            return $
          }
          function v() {
            for (var M = [], B = 0; B < arguments.length; B++) M = M.concat(p(arguments[B]))
            return M
          }
          function m() {
            for (var M = 0, B = 0, F = arguments.length; B < F; B++) M += arguments[B].length
            for (var O = Array(M), b = 0, B = 0; B < F; B++)
              for (var $ = arguments[B], H = 0, U = $.length; H < U; H++, b++) O[b] = $[H]
            return O
          }
          function g(M, B) {
            for (var F = 0, O = B.length, b = M.length; F < O; F++, b++) M[b] = B[F]
            return M
          }
          function y(M) {
            return this instanceof y ? ((this.v = M), this) : new y(M)
          }
          function x(M, B, F) {
            if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.')
            var O = F.apply(M, B || []),
              b,
              $ = []
            return (
              (b = {}),
              H('next'),
              H('throw'),
              H('return'),
              (b[Symbol.asyncIterator] = function () {
                return this
              }),
              b
            )
            function H(Q) {
              O[Q] &&
                (b[Q] = function (V) {
                  return new Promise(function (W, q) {
                    $.push([Q, V, W, q]) > 1 || U(Q, V)
                  })
                })
            }
            function U(Q, V) {
              try {
                K(O[Q](V))
              } catch (W) {
                J($[0][3], W)
              }
            }
            function K(Q) {
              Q.value instanceof y ? Promise.resolve(Q.value.v).then(w, X) : J($[0][2], Q)
            }
            function w(Q) {
              U('next', Q)
            }
            function X(Q) {
              U('throw', Q)
            }
            function J(Q, V) {
              Q(V), $.shift(), $.length && U($[0][0], $[0][1])
            }
          }
          function S(M) {
            var B, F
            return (
              (B = {}),
              O('next'),
              O('throw', function (b) {
                throw b
              }),
              O('return'),
              (B[Symbol.iterator] = function () {
                return this
              }),
              B
            )
            function O(b, $) {
              B[b] = M[b]
                ? function (H) {
                    return (F = !F) ? { value: y(M[b](H)), done: b === 'return' } : $ ? $(H) : H
                  }
                : $
            }
          }
          function D(M) {
            if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.')
            var B = M[Symbol.asyncIterator],
              F
            return B
              ? B.call(M)
              : ((M = typeof s == 'function' ? s(M) : M[Symbol.iterator]()),
                (F = {}),
                O('next'),
                O('throw'),
                O('return'),
                (F[Symbol.asyncIterator] = function () {
                  return this
                }),
                F)
            function O($) {
              F[$] =
                M[$] &&
                function (H) {
                  return new Promise(function (U, K) {
                    ;(H = M[$](H)), b(U, K, H.done, H.value)
                  })
                }
            }
            function b($, H, U, K) {
              Promise.resolve(K).then(function (w) {
                $({ value: w, done: U })
              }, H)
            }
          }
          function P(M, B) {
            return (
              Object.defineProperty ? Object.defineProperty(M, 'raw', { value: B }) : (M.raw = B), M
            )
          }
          var C = Object.create
            ? function (M, B) {
                Object.defineProperty(M, 'default', { enumerable: !0, value: B })
              }
            : function (M, B) {
                M.default = B
              }
          function E(M) {
            if (M && M.__esModule) return M
            var B = {}
            if (M != null)
              for (var F in M)
                F !== 'default' && Object.prototype.hasOwnProperty.call(M, F) && l(B, M, F)
            return C(B, M), B
          }
          function T(M) {
            return M && M.__esModule ? M : { default: M }
          }
          function R(M, B) {
            if (!B.has(M)) throw new TypeError('attempted to get private field on non-instance')
            return B.get(M)
          }
          function N(M, B, F) {
            if (!B.has(M)) throw new TypeError('attempted to set private field on non-instance')
            return B.set(M, F), F
          }
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(89)),
            a = e(t(4)),
            c = e(t(26)),
            A = e(t(17)),
            d = e(t(121)),
            h = e(t(27)),
            f = e(t(91)),
            l = e(t(70)),
            u = e(t(28)),
            s = e(t(57))
          ;(0, i.default)(n, '__esModule', { value: !0 }), (n.DomElement = void 0)
          var p = t(2),
            v = t(6),
            m = []
          function g(C) {
            var E = document.createElement('div')
            E.innerHTML = C
            var T = E.children
            return v.toArray(T)
          }
          function y(C) {
            return C ? C instanceof HTMLCollection || C instanceof NodeList : !1
          }
          function x(C) {
            var E = document.querySelectorAll(C)
            return v.toArray(E)
          }
          function S(C) {
            var E = [],
              T = []
            return (
              (0, r.default)(C) ? (E = C) : (E = C.split(';')),
              (0, a.default)(E).call(E, function (R) {
                var N,
                  M = (0, c.default)((N = R.split(':'))).call(N, function (B) {
                    return (0, A.default)(B).call(B)
                  })
                M.length === 2 && T.push(M[0] + ':' + M[1])
              }),
              T
            )
          }
          var D = (function () {
            function C(E) {
              if (
                ((this.elems = []),
                (this.length = this.elems.length),
                (this.dataSource = new d.default()),
                !!E)
              ) {
                if (E instanceof C) return E
                var T = [],
                  R = E instanceof Node ? E.nodeType : -1
                if (((this.selector = E), R === 1 || R === 9)) T = [E]
                else if (y(E)) T = v.toArray(E)
                else if (E instanceof Array) T = E
                else if (typeof E == 'string') {
                  var N,
                    M = (0, A.default)(
                      (N = E.replace(
                        `/
/mg`,
                        ''
                      ))
                    ).call(N)
                  ;(0, h.default)(M).call(M, '<') === 0 ? (T = g(M)) : (T = x(M))
                }
                var B = T.length
                if (!B) return this
                for (var F = 0; F < B; F++) this.elems.push(T[F])
                this.length = B
              }
            }
            return (
              (0, i.default)(C.prototype, 'id', {
                get: function () {
                  return this.elems[0].id
                },
                enumerable: !1,
                configurable: !0
              }),
              (C.prototype.forEach = function (E) {
                for (var T = 0; T < this.length; T++) {
                  var R = this.elems[T],
                    N = E.call(R, R, T)
                  if (N === !1) break
                }
                return this
              }),
              (C.prototype.clone = function (E) {
                var T
                E === void 0 && (E = !1)
                var R = []
                return (
                  (0, a.default)((T = this.elems)).call(T, function (N) {
                    R.push(N.cloneNode(!!E))
                  }),
                  P(R)
                )
              }),
              (C.prototype.get = function (E) {
                E === void 0 && (E = 0)
                var T = this.length
                return E >= T && (E = E % T), P(this.elems[E])
              }),
              (C.prototype.first = function () {
                return this.get(0)
              }),
              (C.prototype.last = function () {
                var E = this.length
                return this.get(E - 1)
              }),
              (C.prototype.on = function (E, T, R) {
                var N
                return E
                  ? (typeof T == 'function' && ((R = T), (T = '')),
                    (0, a.default)((N = this)).call(N, function (M) {
                      if (!T) {
                        M.addEventListener(E, R)
                        return
                      }
                      var B = function (O) {
                        var b = O.target
                        b.matches(T) && R.call(b, O)
                      }
                      M.addEventListener(E, B), m.push({ elem: M, selector: T, fn: R, agentFn: B })
                    }))
                  : this
              }),
              (C.prototype.off = function (E, T, R) {
                var N
                return E
                  ? (typeof T == 'function' && ((R = T), (T = '')),
                    (0, a.default)((N = this)).call(N, function (M) {
                      if (T) {
                        for (var B = -1, F = 0; F < m.length; F++) {
                          var O = m[F]
                          if (O.selector === T && O.fn === R && O.elem === M) {
                            B = F
                            break
                          }
                        }
                        if (B !== -1) {
                          var b = (0, f.default)(m).call(m, B, 1)[0].agentFn
                          M.removeEventListener(E, b)
                        }
                      } else M.removeEventListener(E, R)
                    }))
                  : this
              }),
              (C.prototype.attr = function (E, T) {
                var R
                return T == null
                  ? this.elems[0].getAttribute(E) || ''
                  : (0, a.default)((R = this)).call(R, function (N) {
                      N.setAttribute(E, T)
                    })
              }),
              (C.prototype.removeAttr = function (E) {
                var T
                ;(0, a.default)((T = this)).call(T, function (R) {
                  R.removeAttribute(E)
                })
              }),
              (C.prototype.addClass = function (E) {
                var T
                return E
                  ? (0, a.default)((T = this)).call(T, function (R) {
                      if (R.className) {
                        var N = R.className.split(/\s/)
                        ;(N = (0, l.default)(N).call(N, function (M) {
                          return !!(0, A.default)(M).call(M)
                        })),
                          (0, h.default)(N).call(N, E) < 0 && N.push(E),
                          (R.className = N.join(' '))
                      } else R.className = E
                    })
                  : this
              }),
              (C.prototype.removeClass = function (E) {
                var T
                return E
                  ? (0, a.default)((T = this)).call(T, function (R) {
                      if (!!R.className) {
                        var N = R.className.split(/\s/)
                        ;(N = (0, l.default)(N).call(N, function (M) {
                          return (M = (0, A.default)(M).call(M)), !(!M || M === E)
                        })),
                          (R.className = N.join(' '))
                      }
                    })
                  : this
              }),
              (C.prototype.hasClass = function (E) {
                if (!E) return !1
                var T = this.elems[0]
                if (!T.className) return !1
                var R = T.className.split(/\s/)
                return (0, u.default)(R).call(R, E)
              }),
              (C.prototype.css = function (E, T) {
                var R, N
                return (
                  T == '' ? (N = '') : (N = E + ':' + T + ';'),
                  (0, a.default)((R = this)).call(R, function (M) {
                    var B,
                      F = (0, A.default)((B = M.getAttribute('style') || '')).call(B)
                    if (F) {
                      var O = S(F)
                      ;(O = (0, c.default)(O).call(O, function (b) {
                        return (0, h.default)(b).call(b, E) === 0 ? N : b
                      })),
                        N != '' && (0, h.default)(O).call(O, N) < 0 && O.push(N),
                        N == '' && (O = S(O)),
                        M.setAttribute('style', O.join('; '))
                    } else M.setAttribute('style', N)
                  })
                )
              }),
              (C.prototype.getBoundingClientRect = function () {
                var E = this.elems[0]
                return E.getBoundingClientRect()
              }),
              (C.prototype.show = function () {
                return this.css('display', 'block')
              }),
              (C.prototype.hide = function () {
                return this.css('display', 'none')
              }),
              (C.prototype.children = function () {
                var E = this.elems[0]
                return E ? P(E.children) : null
              }),
              (C.prototype.childNodes = function () {
                var E = this.elems[0]
                return E ? P(E.childNodes) : null
              }),
              (C.prototype.replaceChildAll = function (E) {
                for (var T = this.getNode(), R = this.elems[0]; R.hasChildNodes(); )
                  T.firstChild && R.removeChild(T.firstChild)
                this.append(E)
              }),
              (C.prototype.append = function (E) {
                var T
                return (0, a.default)((T = this)).call(T, function (R) {
                  ;(0, a.default)(E).call(E, function (N) {
                    R.appendChild(N)
                  })
                })
              }),
              (C.prototype.remove = function () {
                var E
                return (0, a.default)((E = this)).call(E, function (T) {
                  if (T.remove) T.remove()
                  else {
                    var R = T.parentElement
                    R && R.removeChild(T)
                  }
                })
              }),
              (C.prototype.isContain = function (E) {
                var T = this.elems[0],
                  R = E.elems[0]
                return T.contains(R)
              }),
              (C.prototype.getNodeName = function () {
                var E = this.elems[0]
                return E.nodeName
              }),
              (C.prototype.getNode = function (E) {
                E === void 0 && (E = 0)
                var T
                return (T = this.elems[E]), T
              }),
              (C.prototype.find = function (E) {
                var T = this.elems[0]
                return P(T.querySelectorAll(E))
              }),
              (C.prototype.text = function (E) {
                if (E) {
                  var R
                  return (0, a.default)((R = this)).call(R, function (N) {
                    N.innerHTML = E
                  })
                } else {
                  var T = this.elems[0]
                  return T.innerHTML.replace(/<[^>]+>/g, function () {
                    return ''
                  })
                }
              }),
              (C.prototype.html = function (E) {
                var T = this.elems[0]
                return E ? ((T.innerHTML = E), this) : T.innerHTML
              }),
              (C.prototype.val = function () {
                var E,
                  T = this.elems[0]
                return (0, A.default)((E = T.value)).call(E)
              }),
              (C.prototype.focus = function () {
                var E
                return (0, a.default)((E = this)).call(E, function (T) {
                  T.focus()
                })
              }),
              (C.prototype.prev = function () {
                var E = this.elems[0]
                return P(E.previousElementSibling)
              }),
              (C.prototype.next = function () {
                var E = this.elems[0]
                return P(E.nextElementSibling)
              }),
              (C.prototype.getNextSibling = function () {
                var E = this.elems[0]
                return P(E.nextSibling)
              }),
              (C.prototype.parent = function () {
                var E = this.elems[0]
                return P(E.parentElement)
              }),
              (C.prototype.parentUntil = function (E, T) {
                var R = T || this.elems[0]
                if (R.nodeName === 'BODY') return null
                var N = R.parentElement
                return N === null ? null : N.matches(E) ? P(N) : this.parentUntil(E, N)
              }),
              (C.prototype.parentUntilEditor = function (E, T, R) {
                var N = R || this.elems[0]
                if (P(N).equal(T.$textContainerElem) || P(N).equal(T.$toolbarElem)) return null
                var M = N.parentElement
                return M === null ? null : M.matches(E) ? P(M) : this.parentUntilEditor(E, T, M)
              }),
              (C.prototype.equal = function (E) {
                return E instanceof C
                  ? this.elems[0] === E.elems[0]
                  : E instanceof HTMLElement
                  ? this.elems[0] === E
                  : !1
              }),
              (C.prototype.insertBefore = function (E) {
                var T,
                  R = P(E),
                  N = R.elems[0]
                return N
                  ? (0, a.default)((T = this)).call(T, function (M) {
                      var B = N.parentNode
                      B == null || B.insertBefore(M, N)
                    })
                  : this
              }),
              (C.prototype.insertAfter = function (E) {
                var T,
                  R = P(E),
                  N = R.elems[0],
                  M = N && N.nextSibling
                return N
                  ? (0, a.default)((T = this)).call(T, function (B) {
                      var F = N.parentNode
                      M ? F.insertBefore(B, M) : F.appendChild(B)
                    })
                  : this
              }),
              (C.prototype.data = function (E, T) {
                if (T != null) this.dataSource.set(E, T)
                else return this.dataSource.get(E)
              }),
              (C.prototype.getNodeTop = function (E) {
                if (this.length < 1) return this
                var T = this.parent()
                return E.$textElem.equal(this) || E.$textElem.equal(T)
                  ? this
                  : ((T.prior = this), T.getNodeTop(E))
              }),
              (C.prototype.getOffsetData = function () {
                var E = this.elems[0]
                return {
                  top: E.offsetTop,
                  left: E.offsetLeft,
                  width: E.offsetWidth,
                  height: E.offsetHeight,
                  parent: E.offsetParent
                }
              }),
              (C.prototype.scrollTop = function (E) {
                var T = this.elems[0]
                T.scrollTo({ top: E })
              }),
              C
            )
          })()
          n.DomElement = D
          function P() {
            for (var C = [], E = 0; E < arguments.length; E++) C[E] = arguments[E]
            return new ((0, s.default)(D).apply(D, p.__spreadArrays([void 0], C)))()
          }
          n.default = P
        },
        function (o, n, t) {
          o.exports = t(180)
        },
        function (o, n, t) {
          var e = t(8),
            i = t(71).f,
            r = t(101),
            a = t(9),
            c = t(40),
            A = t(19),
            d = t(16),
            h = function (f) {
              var l = function (u, s, p) {
                if (this instanceof f) {
                  switch (arguments.length) {
                    case 0:
                      return new f()
                    case 1:
                      return new f(u)
                    case 2:
                      return new f(u, s)
                  }
                  return new f(u, s, p)
                }
                return f.apply(this, arguments)
              }
              return (l.prototype = f.prototype), l
            }
          o.exports = function (f, l) {
            var u = f.target,
              s = f.global,
              p = f.stat,
              v = f.proto,
              m = s ? e : p ? e[u] : (e[u] || {}).prototype,
              g = s ? a : a[u] || (a[u] = {}),
              y = g.prototype,
              x,
              S,
              D,
              P,
              C,
              E,
              T,
              R,
              N
            for (P in l)
              (x = r(s ? P : u + (p ? '.' : '#') + P, f.forced)),
                (S = !x && m && d(m, P)),
                (E = g[P]),
                S && (f.noTargetGet ? ((N = i(m, P)), (T = N && N.value)) : (T = m[P])),
                (C = S && T ? T : l[P]),
                !(S && typeof E == typeof C) &&
                  (f.bind && S
                    ? (R = c(C, e))
                    : f.wrap && S
                    ? (R = h(C))
                    : v && typeof C == 'function'
                    ? (R = c(Function.call, C))
                    : (R = C),
                  (f.sham || (C && C.sham) || (E && E.sham)) && A(R, 'sham', !0),
                  (g[P] = R),
                  v &&
                    ((D = u + 'Prototype'),
                    d(a, D) || A(a, D, {}),
                    (a[D][P] = C),
                    f.real && y && !y[P] && A(y, P, C)))
          }
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(92)),
            r = e(t(1)),
            a = e(t(256)),
            c = e(t(45)),
            A = e(t(46)),
            d = e(t(89)),
            h = e(t(26))
          ;(0, r.default)(n, '__esModule', { value: !0 }),
            (n.hexToRgb =
              n.getRandomCode =
              n.toArray =
              n.deepClone =
              n.isFunction =
              n.debounce =
              n.throttle =
              n.arrForEach =
              n.forEach =
              n.replaceSpecialSymbol =
              n.replaceHtmlSymbol =
              n.getRandom =
              n.UA =
                void 0)
          var f = t(2),
            l = (function () {
              function E() {
                this._ua = navigator.userAgent
                var T = this._ua.match(/(Edge?)\/(\d+)/)
                ;(this.isOldEdge = !!(T && T[1] == 'Edge' && (0, a.default)(T[2]) < 19)),
                  (this.isFirefox = !!(
                    /Firefox\/\d+/.test(this._ua) && !/Seamonkey\/\d+/.test(this._ua)
                  ))
              }
              return (
                (E.prototype.isIE = function () {
                  return 'ActiveXObject' in window
                }),
                (E.prototype.isWebkit = function () {
                  return /webkit/i.test(this._ua)
                }),
                E
              )
            })()
          n.UA = new l()
          function u(E) {
            var T
            return (
              E === void 0 && (E = ''),
              E + (0, c.default)((T = Math.random().toString())).call(T, 2)
            )
          }
          n.getRandom = u
          function s(E) {
            return E.replace(/</gm, '&lt;')
              .replace(/>/gm, '&gt;')
              .replace(/"/gm, '&quot;')
              .replace(/(\r\n|\r|\n)/g, '<br/>')
          }
          n.replaceHtmlSymbol = s
          function p(E) {
            return E.replace(/&lt;/gm, '<')
              .replace(/&gt;/gm, '>')
              .replace(/&quot;/gm, '"')
          }
          n.replaceSpecialSymbol = p
          function v(E, T) {
            for (var R in E)
              if (Object.prototype.hasOwnProperty.call(E, R)) {
                var N = T(R, E[R])
                if (N === !1) break
              }
          }
          n.forEach = v
          function m(E, T) {
            var R,
              N,
              M,
              B = E.length || 0
            for (R = 0; R < B && ((N = E[R]), (M = T.call(E, N, R)), M !== !1); R++);
          }
          n.arrForEach = m
          function g(E, T) {
            T === void 0 && (T = 200)
            var R = !1
            return function () {
              for (var N = this, M = [], B = 0; B < arguments.length; B++) M[B] = arguments[B]
              R ||
                ((R = !0),
                (0, A.default)(function () {
                  ;(R = !1), E.call.apply(E, f.__spreadArrays([N], M))
                }, T))
            }
          }
          n.throttle = g
          function y(E, T) {
            T === void 0 && (T = 200)
            var R = 0
            return function () {
              for (var N = this, M = [], B = 0; B < arguments.length; B++) M[B] = arguments[B]
              R && window.clearTimeout(R),
                (R = (0, A.default)(function () {
                  ;(R = 0), E.call.apply(E, f.__spreadArrays([N], M))
                }, T))
            }
          }
          n.debounce = y
          function x(E) {
            return typeof E == 'function'
          }
          n.isFunction = x
          function S(E) {
            if ((0, i.default)(E) !== 'object' || typeof E == 'function' || E === null) return E
            var T
            ;(0, d.default)(E) && (T = []), (0, d.default)(E) || (T = {})
            for (var R in E) Object.prototype.hasOwnProperty.call(E, R) && (T[R] = S(E[R]))
            return T
          }
          n.deepClone = S
          function D(E) {
            return (0, c.default)(Array.prototype).call(E)
          }
          n.toArray = D
          function P() {
            var E
            return (0, c.default)((E = Math.random().toString(36))).call(E, -5)
          }
          n.getRandomCode = P
          function C(E) {
            var T = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(E)
            if (T == null) return null
            var R = (0, h.default)(T).call(T, function (F) {
                return (0, a.default)(F, 16)
              }),
              N = R[1],
              M = R[2],
              B = R[3]
            return 'rgb(' + N + ', ' + M + ', ' + B + ')'
          }
          n.hexToRgb = C
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 }),
            (n.EMPTY_P_REGEX = n.EMPTY_P_LAST_REGEX = n.EMPTY_P = n.urlRegex = n.EMPTY_FN = void 0)
          function r() {}
          ;(n.EMPTY_FN = r),
            (n.urlRegex =
              /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&amp;:/~+#]*[\w\-@?^=%&amp;/~+#])?/g),
            (n.EMPTY_P = '<p data-we-empty-p=""><br></p>'),
            (n.EMPTY_P_LAST_REGEX = /<p data-we-empty-p=""><br\/?><\/p>$/gim),
            (n.EMPTY_P_REGEX = /<p data-we-empty-p="">/gim)
        },
        function (o, n, t) {
          ;(function (e) {
            var i = function (r) {
              return r && r.Math == Math && r
            }
            o.exports =
              i(typeof globalThis == 'object' && globalThis) ||
              i(typeof window == 'object' && window) ||
              i(typeof self == 'object' && self) ||
              i(typeof e == 'object' && e) ||
              Function('return this')()
          }).call(this, t(145))
        },
        function (o, n) {
          o.exports = {}
        },
        function (o, n, t) {
          var e = t(8),
            i = t(74),
            r = t(16),
            a = t(64),
            c = t(76),
            A = t(106),
            d = i('wks'),
            h = e.Symbol,
            f = A ? h : (h && h.withoutSetter) || a
          o.exports = function (l) {
            return r(d, l) || (c && r(h, l) ? (d[l] = h[l]) : (d[l] = f('Symbol.' + l))), d[l]
          }
        },
        function (o, n) {
          o.exports = function (t) {
            try {
              return !!t()
            } catch {
              return !0
            }
          }
        },
        function (o, n, t) {
          var e = t(9),
            i = t(16),
            r = t(93),
            a = t(18).f
          o.exports = function (c) {
            var A = e.Symbol || (e.Symbol = {})
            i(A, c) || a(A, c, { value: r.f(c) })
          }
        },
        function (o, n) {
          o.exports = function (t) {
            return typeof t == 'object' ? t !== null : typeof t == 'function'
          }
        },
        function (o, n, t) {
          var e = t(11)
          o.exports = !e(function () {
            return (
              Object.defineProperty({}, 1, {
                get: function () {
                  return 7
                }
              })[1] != 7
            )
          })
        },
        function (o, n, t) {
          var e = t(9)
          o.exports = function (i) {
            return e[i + 'Prototype']
          }
        },
        function (o, n) {
          var t = {}.hasOwnProperty
          o.exports = function (e, i) {
            return t.call(e, i)
          }
        },
        function (o, n, t) {
          o.exports = t(192)
        },
        function (o, n, t) {
          var e = t(14),
            i = t(100),
            r = t(25),
            a = t(60),
            c = Object.defineProperty
          n.f = e
            ? c
            : function (d, h, f) {
                if ((r(d), (h = a(h, !0)), r(f), i))
                  try {
                    return c(d, h, f)
                  } catch {}
                if ('get' in f || 'set' in f) throw TypeError('Accessors not supported')
                return 'value' in f && (d[h] = f.value), d
              }
        },
        function (o, n, t) {
          var e = t(14),
            i = t(18),
            r = t(48)
          o.exports = e
            ? function (a, c, A) {
                return i.f(a, c, r(1, A))
              }
            : function (a, c, A) {
                return (a[c] = A), a
              }
        },
        function (o, n, t) {
          var e = (function () {
              var m
              return function () {
                return (
                  typeof m > 'u' &&
                    (m = Boolean(window && document && document.all && !window.atob)),
                  m
                )
              }
            })(),
            i = (function () {
              var m = {}
              return function (y) {
                if (typeof m[y] > 'u') {
                  var x = document.querySelector(y)
                  if (window.HTMLIFrameElement && x instanceof window.HTMLIFrameElement)
                    try {
                      x = x.contentDocument.head
                    } catch {
                      x = null
                    }
                  m[y] = x
                }
                return m[y]
              }
            })(),
            r = []
          function a(v) {
            for (var m = -1, g = 0; g < r.length; g++)
              if (r[g].identifier === v) {
                m = g
                break
              }
            return m
          }
          function c(v, m) {
            for (var g = {}, y = [], x = 0; x < v.length; x++) {
              var S = v[x],
                D = m.base ? S[0] + m.base : S[0],
                P = g[D] || 0,
                C = ''.concat(D, ' ').concat(P)
              g[D] = P + 1
              var E = a(C),
                T = { css: S[1], media: S[2], sourceMap: S[3] }
              E !== -1
                ? (r[E].references++, r[E].updater(T))
                : r.push({ identifier: C, updater: p(T, m), references: 1 }),
                y.push(C)
            }
            return y
          }
          function A(v) {
            var m = document.createElement('style'),
              g = v.attributes || {}
            if (typeof g.nonce > 'u') {
              var y = t.nc
              y && (g.nonce = y)
            }
            if (
              (Object.keys(g).forEach(function (S) {
                m.setAttribute(S, g[S])
              }),
              typeof v.insert == 'function')
            )
              v.insert(m)
            else {
              var x = i(v.insert || 'head')
              if (!x)
                throw new Error(
                  "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                )
              x.appendChild(m)
            }
            return m
          }
          function d(v) {
            if (v.parentNode === null) return !1
            v.parentNode.removeChild(v)
          }
          var h = (function () {
            var m = []
            return function (y, x) {
              return (
                (m[y] = x),
                m.filter(Boolean).join(`
`)
              )
            }
          })()
          function f(v, m, g, y) {
            var x = g ? '' : y.media ? '@media '.concat(y.media, ' {').concat(y.css, '}') : y.css
            if (v.styleSheet) v.styleSheet.cssText = h(m, x)
            else {
              var S = document.createTextNode(x),
                D = v.childNodes
              D[m] && v.removeChild(D[m]), D.length ? v.insertBefore(S, D[m]) : v.appendChild(S)
            }
          }
          function l(v, m, g) {
            var y = g.css,
              x = g.media,
              S = g.sourceMap
            if (
              (x ? v.setAttribute('media', x) : v.removeAttribute('media'),
              S &&
                typeof btoa < 'u' &&
                (y += `
/*# sourceMappingURL=data:application/json;base64,`.concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(S)))),
                  ' */'
                )),
              v.styleSheet)
            )
              v.styleSheet.cssText = y
            else {
              for (; v.firstChild; ) v.removeChild(v.firstChild)
              v.appendChild(document.createTextNode(y))
            }
          }
          var u = null,
            s = 0
          function p(v, m) {
            var g, y, x
            if (m.singleton) {
              var S = s++
              ;(g = u || (u = A(m))), (y = f.bind(null, g, S, !1)), (x = f.bind(null, g, S, !0))
            } else
              (g = A(m)),
                (y = l.bind(null, g, m)),
                (x = function () {
                  d(g)
                })
            return (
              y(v),
              function (P) {
                if (P) {
                  if (P.css === v.css && P.media === v.media && P.sourceMap === v.sourceMap) return
                  y((v = P))
                } else x()
              }
            )
          }
          o.exports = function (v, m) {
            ;(m = m || {}),
              !m.singleton && typeof m.singleton != 'boolean' && (m.singleton = e()),
              (v = v || [])
            var g = c(v, m)
            return function (x) {
              if (((x = x || []), Object.prototype.toString.call(x) === '[object Array]')) {
                for (var S = 0; S < g.length; S++) {
                  var D = g[S],
                    P = a(D)
                  r[P].references--
                }
                for (var C = c(x, m), E = 0; E < g.length; E++) {
                  var T = g[E],
                    R = a(T)
                  r[R].references === 0 && (r[R].updater(), r.splice(R, 1))
                }
                g = C
              }
            }
          }
        },
        function (o, n, t) {
          o.exports = function (r) {
            var a = []
            return (
              (a.toString = function () {
                return this.map(function (A) {
                  var d = e(A, r)
                  return A[2] ? '@media '.concat(A[2], ' {').concat(d, '}') : d
                }).join('')
              }),
              (a.i = function (c, A, d) {
                typeof c == 'string' && (c = [[null, c, '']])
                var h = {}
                if (d)
                  for (var f = 0; f < this.length; f++) {
                    var l = this[f][0]
                    l != null && (h[l] = !0)
                  }
                for (var u = 0; u < c.length; u++) {
                  var s = [].concat(c[u])
                  ;(d && h[s[0]]) ||
                    (A && (s[2] ? (s[2] = ''.concat(A, ' and ').concat(s[2])) : (s[2] = A)),
                    a.push(s))
                }
              }),
              a
            )
          }
          function e(r, a) {
            var c = r[1] || '',
              A = r[3]
            if (!A) return c
            if (a && typeof btoa == 'function') {
              var d = i(A),
                h = A.sources.map(function (f) {
                  return '/*# sourceURL='.concat(A.sourceRoot || '').concat(f, ' */')
                })
              return [c].concat(h).concat([d]).join(`
`)
            }
            return [c].join(`
`)
          }
          function i(r) {
            var a = btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
              c = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(a)
            return '/*# '.concat(c, ' */')
          }
        },
        function (o, n, t) {
          var e = t(14),
            i = t(11),
            r = t(16),
            a = Object.defineProperty,
            c = {},
            A = function (d) {
              throw d
            }
          o.exports = function (d, h) {
            if (r(c, d)) return c[d]
            h || (h = {})
            var f = [][d],
              l = r(h, 'ACCESSORS') ? h.ACCESSORS : !1,
              u = r(h, 0) ? h[0] : A,
              s = r(h, 1) ? h[1] : void 0
            return (c[d] =
              !!f &&
              !i(function () {
                if (l && !e) return !0
                var p = { length: -1 }
                l ? a(p, 1, { enumerable: !0, get: A }) : (p[1] = 1), f.call(p, u, s)
              }))
          }
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(95)),
            c = (function (A) {
              r.__extends(d, A)
              function d(h, f) {
                return A.call(this, h, f) || this
              }
              return d
            })(a.default)
          n.default = c
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(4)),
            a = e(t(46))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var c = t(2),
            A = c.__importDefault(t(3)),
            d = c.__importDefault(t(95)),
            h = c.__importDefault(t(134)),
            f = (function (l) {
              c.__extends(u, l)
              function u(s, p, v) {
                var m = l.call(this, s, p) || this
                v.title = p.i18next.t('menus.dropListMenu.' + v.title)
                var g = p.config.lang === 'zh-CN' ? '' : 'w-e-drop-list-tl'
                if (g !== '' && v.type === 'list') {
                  var y
                  ;(0, r.default)((y = v.list)).call(y, function (S) {
                    var D = S.$elem,
                      P = A.default(D.children())
                    if (P.length > 0) {
                      var C = P == null ? void 0 : P.getNodeName()
                      C && C === 'I' && D.addClass(g)
                    }
                  })
                }
                var x = new h.default(m, v)
                return (
                  (m.dropList = x),
                  s
                    .on('click', function () {
                      var S
                      p.selection.getRange() != null &&
                        (s.css('z-index', p.zIndex.get('menu')),
                        (0, r.default)((S = p.txt.eventHooks.dropListMenuHoverEvents)).call(
                          S,
                          function (D) {
                            return D()
                          }
                        ),
                        x.show())
                    })
                    .on('mouseleave', function () {
                      s.css('z-index', 'auto'),
                        (x.hideTimeoutId = (0, a.default)(function () {
                          x.hide()
                        }))
                    }),
                  m
                )
              }
              return u
            })(d.default)
          n.default = f
        },
        function (o, n, t) {
          var e = t(13)
          o.exports = function (i) {
            if (!e(i)) throw TypeError(String(i) + ' is not an object')
            return i
          }
        },
        function (o, n, t) {
          o.exports = t(188)
        },
        function (o, n, t) {
          o.exports = t(201)
        },
        function (o, n, t) {
          o.exports = t(213)
        },
        function (o, n, t) {
          o.exports = t(283)
        },
        function (o, n, t) {
          var e = t(72),
            i = t(49)
          o.exports = function (r) {
            return e(i(r))
          }
        },
        function (o, n, t) {
          var e = t(49)
          o.exports = function (i) {
            return Object(e(i))
          }
        },
        function (o, n, t) {
          var e = t(40),
            i = t(72),
            r = t(31),
            a = t(35),
            c = t(88),
            A = [].push,
            d = function (h) {
              var f = h == 1,
                l = h == 2,
                u = h == 3,
                s = h == 4,
                p = h == 6,
                v = h == 5 || p
              return function (m, g, y, x) {
                for (
                  var S = r(m),
                    D = i(S),
                    P = e(g, y, 3),
                    C = a(D.length),
                    E = 0,
                    T = x || c,
                    R = f ? T(m, C) : l ? T(m, 0) : void 0,
                    N,
                    M;
                  C > E;
                  E++
                )
                  if ((v || E in D) && ((N = D[E]), (M = P(N, E, S)), h)) {
                    if (f) R[E] = M
                    else if (M)
                      switch (h) {
                        case 3:
                          return !0
                        case 5:
                          return N
                        case 6:
                          return E
                        case 2:
                          A.call(R, N)
                      }
                    else if (s) return !1
                  }
                return p ? -1 : u || s ? s : R
              }
            }
          o.exports = {
            forEach: d(0),
            map: d(1),
            filter: d(2),
            some: d(3),
            every: d(4),
            find: d(5),
            findIndex: d(6)
          }
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(4)),
            a = e(t(29)),
            c = e(t(132))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var A = t(2),
            d = A.__importDefault(t(3)),
            h = t(7),
            f = (function () {
              function l(u, s) {
                ;(this.menu = u),
                  (this.conf = s),
                  (this.$container = d.default('<div class="w-e-panel-container"></div>'))
                var p = u.editor
                p.txt.eventHooks.clickEvents.push(l.hideCurAllPanels),
                  p.txt.eventHooks.toolbarClickEvents.push(l.hideCurAllPanels),
                  p.txt.eventHooks.dropListMenuHoverEvents.push(l.hideCurAllPanels)
              }
              return (
                (l.prototype.create = function () {
                  var u = this,
                    s = this.menu
                  if (!l.createdMenus.has(s)) {
                    var p = this.conf,
                      v = this.$container,
                      m = p.width || 300,
                      g = s.editor.$toolbarElem.getBoundingClientRect(),
                      y = s.$elem.getBoundingClientRect(),
                      x = g.height + g.top - y.top,
                      S = (g.width - m) / 2 + g.left - y.left,
                      D = 300
                    Math.abs(S) > D &&
                      (y.left < document.documentElement.clientWidth / 2
                        ? (S = -y.width / 2)
                        : (S = -m + y.width / 2)),
                      v
                        .css('width', m + 'px')
                        .css('margin-top', x + 'px')
                        .css('margin-left', S + 'px')
                        .css('z-index', s.editor.zIndex.get('panel'))
                    var P = d.default('<i class="w-e-icon-close w-e-panel-close"></i>')
                    v.append(P),
                      P.on('click', function () {
                        u.remove()
                      })
                    var C = d.default('<ul class="w-e-panel-tab-title"></ul>'),
                      E = d.default('<div class="w-e-panel-tab-content"></div>')
                    v.append(C).append(E)
                    var T = p.height
                    T && E.css('height', T + 'px').css('overflow-y', 'auto')
                    var R = p.tabs || [],
                      N = [],
                      M = []
                    ;(0, r.default)(R).call(R, function (F, O) {
                      if (!!F) {
                        var b = F.title || '',
                          $ = F.tpl || '',
                          H = d.default('<li class="w-e-item">' + b + '</li>')
                        C.append(H)
                        var U = d.default($)
                        E.append(U),
                          N.push(H),
                          M.push(U),
                          O === 0 ? (H.data('active', !0), H.addClass('w-e-active')) : U.hide(),
                          H.on('click', function () {
                            H.data('active') ||
                              ((0, r.default)(N).call(N, function (K) {
                                K.data('active', !1), K.removeClass('w-e-active')
                              }),
                              (0, r.default)(M).call(M, function (K) {
                                K.hide()
                              }),
                              H.data('active', !0),
                              H.addClass('w-e-active'),
                              U.show())
                          })
                      }
                    }),
                      v.on('click', function (F) {
                        F.stopPropagation()
                      }),
                      s.$elem.append(v),
                      p.setLinkValue && p.setLinkValue(v, 'text'),
                      p.setLinkValue && p.setLinkValue(v, 'link'),
                      (0, r.default)(R).call(R, function (F, O) {
                        if (!!F) {
                          var b = F.events || []
                          ;(0, r.default)(b).call(b, function ($) {
                            var H,
                              U = $.selector,
                              K = $.type,
                              w = $.fn || h.EMPTY_FN,
                              X = M[O],
                              J = (H = $.bindEnter) !== null && H !== void 0 ? H : !1,
                              Q = function (W) {
                                return A.__awaiter(u, void 0, void 0, function () {
                                  var q
                                  return A.__generator(this, function (rt) {
                                    switch (rt.label) {
                                      case 0:
                                        return W.stopPropagation(), [4, w(W)]
                                      case 1:
                                        return (q = rt.sent()), q && this.remove(), [2]
                                    }
                                  })
                                })
                              }
                            ;(0, a.default)(X).call(X, U).on(K, Q),
                              J &&
                                K === 'click' &&
                                X.on('keyup', function (V) {
                                  V.keyCode == 13 && Q(V)
                                })
                          })
                        }
                      })
                    var B = (0, a.default)(v).call(v, 'input[type=text],textarea')
                    B.length && B.get(0).focus(),
                      l.hideCurAllPanels(),
                      s.setPanel(this),
                      l.createdMenus.add(s)
                  }
                }),
                (l.prototype.remove = function () {
                  var u = this.menu,
                    s = this.$container
                  s && s.remove(), l.createdMenus.delete(u)
                }),
                (l.hideCurAllPanels = function () {
                  var u
                  l.createdMenus.size !== 0 &&
                    (0, r.default)((u = l.createdMenus)).call(u, function (s) {
                      var p = s.panel
                      p && p.remove()
                    })
                }),
                (l.createdMenus = new c.default()),
                l
              )
            })()
          n.default = f
        },
        function (o, n) {
          var t = {}.toString
          o.exports = function (e) {
            return t.call(e).slice(8, -1)
          }
        },
        function (o, n, t) {
          var e = t(62),
            i = Math.min
          o.exports = function (r) {
            return r > 0 ? i(e(r), 9007199254740991) : 0
          }
        },
        function (o, n, t) {
          var e = t(9),
            i = t(8),
            r = function (a) {
              return typeof a == 'function' ? a : void 0
            }
          o.exports = function (a, c) {
            return arguments.length < 2
              ? r(e[a]) || r(i[a])
              : (e[a] && e[a][c]) || (i[a] && i[a][c])
          }
        },
        function (o, n, t) {
          var e = t(81),
            i = t(18).f,
            r = t(19),
            a = t(16),
            c = t(170),
            A = t(10),
            d = A('toStringTag')
          o.exports = function (h, f, l, u) {
            if (h) {
              var s = l ? h : h.prototype
              a(s, d) || i(s, d, { configurable: !0, value: f }), u && !e && r(s, 'toString', c)
            }
          }
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(95)),
            c = (function (A) {
              r.__extends(d, A)
              function d(h, f) {
                return A.call(this, h, f) || this
              }
              return (
                (d.prototype.setPanel = function (h) {
                  this.panel = h
                }),
                d
              )
            })(a.default)
          n.default = c
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(4)),
            a = e(t(57))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var c = t(2),
            A = c.__importDefault(t(3)),
            d = (function () {
              function h(f, l, u) {
                ;(this.editor = f),
                  (this.$targetElem = l),
                  (this.conf = u),
                  (this._show = !1),
                  (this._isInsertTextContainer = !1)
                var s = A.default('<div></div>')
                s.addClass('w-e-tooltip'), (this.$container = s)
              }
              return (
                (h.prototype.getPositionData = function () {
                  var f = this.$container,
                    l = 0,
                    u = 0,
                    s = 20,
                    p = document.documentElement.scrollTop,
                    v = this.$targetElem.getBoundingClientRect(),
                    m = this.editor.$textElem.getBoundingClientRect(),
                    g = this.$targetElem.getOffsetData(),
                    y = A.default(g.parent),
                    x = this.editor.$textElem.elems[0].scrollTop
                  if (
                    ((this._isInsertTextContainer = y.equal(this.editor.$textContainerElem)),
                    this._isInsertTextContainer)
                  ) {
                    var S = y.getBoundingClientRect().height,
                      D = g.top,
                      P = g.left,
                      C = g.height,
                      E = D - x
                    E > s + 5
                      ? ((l = E - s - 15), f.addClass('w-e-tooltip-up'))
                      : E + C + s < S
                      ? ((l = E + C + 10), f.addClass('w-e-tooltip-down'))
                      : ((l = (E > 0 ? E : 0) + s + 10), f.addClass('w-e-tooltip-down')),
                      P < 0 ? (u = 0) : (u = P)
                  } else
                    v.top < s || v.top - m.top < s
                      ? ((l = v.bottom + p + 5), f.addClass('w-e-tooltip-down'))
                      : ((l = v.top + p - s - 15), f.addClass('w-e-tooltip-up')),
                      v.left < 0 ? (u = 0) : (u = v.left)
                  return { top: l, left: u }
                }),
                (h.prototype.appendMenus = function () {
                  var f = this,
                    l = this.conf,
                    u = this.editor,
                    s = this.$targetElem,
                    p = this.$container
                  ;(0, r.default)(l).call(l, function (v, m) {
                    var g = v.$elem,
                      y = A.default('<div></div>')
                    y.addClass('w-e-tooltip-item-wrapper '),
                      y.append(g),
                      p.append(y),
                      g.on('click', function (x) {
                        x.preventDefault()
                        var S = v.onClick(u, s)
                        S && f.remove()
                      })
                  })
                }),
                (h.prototype.create = function () {
                  var f,
                    l,
                    u = this.editor,
                    s = this.$container
                  this.appendMenus()
                  var p = this.getPositionData(),
                    v = p.top,
                    m = p.left
                  s.css('top', v + 'px'),
                    s.css('left', m + 'px'),
                    s.css('z-index', u.zIndex.get('tooltip')),
                    this._isInsertTextContainer
                      ? this.editor.$textContainerElem.append(s)
                      : A.default('body').append(s),
                    (this._show = !0),
                    u.beforeDestroy((0, a.default)((f = this.remove)).call(f, this)),
                    u.txt.eventHooks.onBlurEvents.push(
                      (0, a.default)((l = this.remove)).call(l, this)
                    )
                }),
                (h.prototype.remove = function () {
                  this.$container.remove(), (this._show = !1)
                }),
                (0, i.default)(h.prototype, 'isShow', {
                  get: function () {
                    return this._show
                  },
                  enumerable: !1,
                  configurable: !0
                }),
                h
              )
            })()
          n.default = d
        },
        function (o, n, t) {
          var e = t(41)
          o.exports = function (i, r, a) {
            if ((e(i), r === void 0)) return i
            switch (a) {
              case 0:
                return function () {
                  return i.call(r)
                }
              case 1:
                return function (c) {
                  return i.call(r, c)
                }
              case 2:
                return function (c, A) {
                  return i.call(r, c, A)
                }
              case 3:
                return function (c, A, d) {
                  return i.call(r, c, A, d)
                }
            }
            return function () {
              return i.apply(r, arguments)
            }
          }
        },
        function (o, n) {
          o.exports = function (t) {
            if (typeof t != 'function') throw TypeError(String(t) + ' is not a function')
            return t
          }
        },
        function (o, n, t) {
          var e = t(165),
            i = t(8),
            r = t(13),
            a = t(19),
            c = t(16),
            A = t(63),
            d = t(51),
            h = i.WeakMap,
            f,
            l,
            u,
            s = function (S) {
              return u(S) ? l(S) : f(S, {})
            },
            p = function (S) {
              return function (D) {
                var P
                if (!r(D) || (P = l(D)).type !== S)
                  throw TypeError('Incompatible receiver, ' + S + ' required')
                return P
              }
            }
          if (e) {
            var v = new h(),
              m = v.get,
              g = v.has,
              y = v.set
            ;(f = function (S, D) {
              return y.call(v, S, D), D
            }),
              (l = function (S) {
                return m.call(v, S) || {}
              }),
              (u = function (S) {
                return g.call(v, S)
              })
          } else {
            var x = A('state')
            ;(d[x] = !0),
              (f = function (S, D) {
                return a(S, x, D), D
              }),
              (l = function (S) {
                return c(S, x) ? S[x] : {}
              }),
              (u = function (S) {
                return c(S, x)
              })
          }
          o.exports = { set: f, get: l, has: u, enforce: s, getterFor: p }
        },
        function (o, n) {
          o.exports = !0
        },
        function (o, n) {
          o.exports = {}
        },
        function (o, n, t) {
          o.exports = t(261)
        },
        function (o, n, t) {
          o.exports = t(265)
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(4))
          ;(0, i.default)(n, '__esModule', { value: !0 }),
            (n.createElementFragment =
              n.createDocumentFragment =
              n.createElement =
              n.insertBefore =
              n.getEndPoint =
              n.getStartPoint =
              n.updateRange =
              n.filterSelectionNodes =
                void 0)
          var a = t(2),
            c = t(137),
            A = a.__importDefault(t(3))
          function d(m) {
            var g = []
            return (
              (0, r.default)(m).call(m, function (y) {
                var x = y.getNodeName()
                if (x !== c.ListType.OrderedList && x !== c.ListType.UnorderedList) g.push(y)
                else if (y.prior) g.push(y.prior)
                else {
                  var S = y.children()
                  S == null ||
                    (0, r.default)(S).call(S, function (D) {
                      g.push(A.default(D))
                    })
                }
              }),
              g
            )
          }
          n.filterSelectionNodes = d
          function h(m, g, y) {
            var x = m.selection,
              S = document.createRange()
            g.length > 1
              ? (S.setStart(g.elems[0], 0),
                S.setEnd(g.elems[g.length - 1], g.elems[g.length - 1].childNodes.length))
              : S.selectNodeContents(g.elems[0]),
              y && S.collapse(!1),
              x.saveRange(S),
              x.restoreSelection()
          }
          n.updateRange = h
          function f(m) {
            var g
            return m.prior
              ? m.prior
              : A.default((g = m.children()) === null || g === void 0 ? void 0 : g.elems[0])
          }
          n.getStartPoint = f
          function l(m) {
            var g
            return m.prior
              ? m.prior
              : A.default((g = m.children()) === null || g === void 0 ? void 0 : g.last().elems[0])
          }
          n.getEndPoint = l
          function u(m, g, y) {
            y === void 0 && (y = null), m.parent().elems[0].insertBefore(g, y)
          }
          n.insertBefore = u
          function s(m) {
            return document.createElement(m)
          }
          n.createElement = s
          function p() {
            return document.createDocumentFragment()
          }
          n.createDocumentFragment = p
          function v(m, g, y) {
            return (
              y === void 0 && (y = 'li'),
              (0, r.default)(m).call(m, function (x) {
                var S = s(y)
                ;(S.innerHTML = x.html()), g.appendChild(S), x.remove()
              }),
              g
            )
          }
          n.createElementFragment = v
        },
        function (o, n) {
          o.exports = function (t, e) {
            return { enumerable: !(t & 1), configurable: !(t & 2), writable: !(t & 4), value: e }
          }
        },
        function (o, n) {
          o.exports = function (t) {
            if (t == null) throw TypeError("Can't call method on " + t)
            return t
          }
        },
        function (o, n, t) {
          var e = t(164).charAt,
            i = t(42),
            r = t(75),
            a = 'String Iterator',
            c = i.set,
            A = i.getterFor(a)
          r(
            String,
            'String',
            function (d) {
              c(this, { type: a, string: String(d), index: 0 })
            },
            function () {
              var h = A(this),
                f = h.string,
                l = h.index,
                u
              return l >= f.length
                ? { value: void 0, done: !0 }
                : ((u = e(f, l)), (h.index += u.length), { value: u, done: !1 })
            }
          )
        },
        function (o, n) {
          o.exports = {}
        },
        function (o, n, t) {
          var e = t(107),
            i = t(80)
          o.exports =
            Object.keys ||
            function (a) {
              return e(a, i)
            }
        },
        function (o, n, t) {
          var e = t(19)
          o.exports = function (i, r, a, c) {
            c && c.enumerable ? (i[r] = a) : e(i, r, a)
          }
        },
        function (o, n, t) {
          t(173)
          var e = t(174),
            i = t(8),
            r = t(65),
            a = t(19),
            c = t(44),
            A = t(10),
            d = A('toStringTag')
          for (var h in e) {
            var f = i[h],
              l = f && f.prototype
            l && r(l) !== d && a(l, d, h), (c[h] = c.Array)
          }
        },
        function (o, n, t) {
          var e = t(34)
          o.exports =
            Array.isArray ||
            function (r) {
              return e(r) == 'Array'
            }
        },
        function (o, n, t) {
          var e = t(11),
            i = t(10),
            r = t(86),
            a = i('species')
          o.exports = function (c) {
            return (
              r >= 51 ||
              !e(function () {
                var A = [],
                  d = (A.constructor = {})
                return (
                  (d[a] = function () {
                    return { foo: 1 }
                  }),
                  A[c](Boolean).foo !== 1
                )
              })
            )
          }
        },
        function (o, n, t) {
          o.exports = t(222)
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 }), (n.ListHandle = void 0)
          var r = t(2),
            a = r.__importDefault(t(373)),
            c = (function () {
              function A(d) {
                ;(this.options = d), (this.selectionRangeElem = new a.default())
              }
              return A
            })()
          n.ListHandle = c
        },
        function (o, n, t) {
          var e = {}.propertyIsEnumerable,
            i = Object.getOwnPropertyDescriptor,
            r = i && !e.call({ 1: 2 }, 1)
          n.f = r
            ? function (c) {
                var A = i(this, c)
                return !!A && A.enumerable
              }
            : e
        },
        function (o, n, t) {
          var e = t(13)
          o.exports = function (i, r) {
            if (!e(i)) return i
            var a, c
            if (
              (r && typeof (a = i.toString) == 'function' && !e((c = a.call(i)))) ||
              (typeof (a = i.valueOf) == 'function' && !e((c = a.call(i)))) ||
              (!r && typeof (a = i.toString) == 'function' && !e((c = a.call(i))))
            )
              return c
            throw TypeError("Can't convert object to primitive value")
          }
        },
        function (o, n) {},
        function (o, n) {
          var t = Math.ceil,
            e = Math.floor
          o.exports = function (i) {
            return isNaN((i = +i)) ? 0 : (i > 0 ? e : t)(i)
          }
        },
        function (o, n, t) {
          var e = t(74),
            i = t(64),
            r = e('keys')
          o.exports = function (a) {
            return r[a] || (r[a] = i(a))
          }
        },
        function (o, n) {
          var t = 0,
            e = Math.random()
          o.exports = function (i) {
            return 'Symbol(' + String(i === void 0 ? '' : i) + ')_' + (++t + e).toString(36)
          }
        },
        function (o, n, t) {
          var e = t(81),
            i = t(34),
            r = t(10),
            a = r('toStringTag'),
            c =
              i(
                (function () {
                  return arguments
                })()
              ) == 'Arguments',
            A = function (d, h) {
              try {
                return d[h]
              } catch {}
            }
          o.exports = e
            ? i
            : function (d) {
                var h, f, l
                return d === void 0
                  ? 'Undefined'
                  : d === null
                  ? 'Null'
                  : typeof (f = A((h = Object(d)), a)) == 'string'
                  ? f
                  : c
                  ? i(h)
                  : (l = i(h)) == 'Object' && typeof h.callee == 'function'
                  ? 'Arguments'
                  : l
              }
        },
        function (o, n, t) {
          var e = t(25),
            i = t(112),
            r = t(35),
            a = t(40),
            c = t(113),
            A = t(114),
            d = function (f, l) {
              ;(this.stopped = f), (this.result = l)
            },
            h = (o.exports = function (f, l, u, s, p) {
              var v = a(l, u, s ? 2 : 1),
                m,
                g,
                y,
                x,
                S,
                D,
                P
              if (p) m = f
              else {
                if (((g = c(f)), typeof g != 'function')) throw TypeError('Target is not iterable')
                if (i(g)) {
                  for (y = 0, x = r(f.length); x > y; y++)
                    if (((S = s ? v(e((P = f[y]))[0], P[1]) : v(f[y])), S && S instanceof d))
                      return S
                  return new d(!1)
                }
                m = g.call(f)
              }
              for (D = m.next; !(P = D.call(m)).done; )
                if (((S = A(m, v, P.value, s)), typeof S == 'object' && S && S instanceof d))
                  return S
              return new d(!1)
            })
          h.stop = function (f) {
            return new d(!0, f)
          }
        },
        function (o, n, t) {
          var e = t(11)
          o.exports = function (i, r) {
            var a = [][i]
            return (
              !!a &&
              e(function () {
                a.call(
                  null,
                  r ||
                    function () {
                      throw 1
                    },
                  1
                )
              })
            )
          }
        },
        function (o, n) {
          o.exports = `	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`
        },
        function (o, n, t) {
          var e = t(60),
            i = t(18),
            r = t(48)
          o.exports = function (a, c, A) {
            var d = e(c)
            d in a ? i.f(a, d, r(0, A)) : (a[d] = A)
          }
        },
        function (o, n, t) {
          o.exports = t(209)
        },
        function (o, n, t) {
          var e = t(14),
            i = t(59),
            r = t(48),
            a = t(30),
            c = t(60),
            A = t(16),
            d = t(100),
            h = Object.getOwnPropertyDescriptor
          n.f = e
            ? h
            : function (l, u) {
                if (((l = a(l)), (u = c(u, !0)), d))
                  try {
                    return h(l, u)
                  } catch {}
                if (A(l, u)) return r(!i.f.call(l, u), l[u])
              }
        },
        function (o, n, t) {
          var e = t(11),
            i = t(34),
            r = ''.split
          o.exports = e(function () {
            return !Object('z').propertyIsEnumerable(0)
          })
            ? function (a) {
                return i(a) == 'String' ? r.call(a, '') : Object(a)
              }
            : Object
        },
        function (o, n, t) {
          var e = t(8),
            i = t(13),
            r = e.document,
            a = i(r) && i(r.createElement)
          o.exports = function (c) {
            return a ? r.createElement(c) : {}
          }
        },
        function (o, n, t) {
          var e = t(43),
            i = t(103)
          ;(o.exports = function (r, a) {
            return i[r] || (i[r] = a !== void 0 ? a : {})
          })('versions', []).push({
            version: '3.6.4',
            mode: e ? 'pure' : 'global',
            copyright: '\xA9 2020 Denis Pushkarev (zloirock.ru)'
          })
        },
        function (o, n, t) {
          var e = t(5),
            i = t(167),
            r = t(105),
            a = t(171),
            c = t(37),
            A = t(19),
            d = t(53),
            h = t(10),
            f = t(43),
            l = t(44),
            u = t(104),
            s = u.IteratorPrototype,
            p = u.BUGGY_SAFARI_ITERATORS,
            v = h('iterator'),
            m = 'keys',
            g = 'values',
            y = 'entries',
            x = function () {
              return this
            }
          o.exports = function (S, D, P, C, E, T, R) {
            i(P, D, C)
            var N = function (w) {
                if (w === E && b) return b
                if (!p && w in F) return F[w]
                switch (w) {
                  case m:
                    return function () {
                      return new P(this, w)
                    }
                  case g:
                    return function () {
                      return new P(this, w)
                    }
                  case y:
                    return function () {
                      return new P(this, w)
                    }
                }
                return function () {
                  return new P(this)
                }
              },
              M = D + ' Iterator',
              B = !1,
              F = S.prototype,
              O = F[v] || F['@@iterator'] || (E && F[E]),
              b = (!p && O) || N(E),
              $ = (D == 'Array' && F.entries) || O,
              H,
              U,
              K
            if (
              ($ &&
                ((H = r($.call(new S()))),
                s !== Object.prototype &&
                  H.next &&
                  (!f && r(H) !== s && (a ? a(H, s) : typeof H[v] != 'function' && A(H, v, x)),
                  c(H, M, !0, !0),
                  f && (l[M] = x))),
              E == g &&
                O &&
                O.name !== g &&
                ((B = !0),
                (b = function () {
                  return O.call(this)
                })),
              (!f || R) && F[v] !== b && A(F, v, b),
              (l[D] = b),
              E)
            )
              if (((U = { values: N(g), keys: T ? b : N(m), entries: N(y) }), R))
                for (K in U) (p || B || !(K in F)) && d(F, K, U[K])
              else e({ target: D, proto: !0, forced: p || B }, U)
            return U
          }
        },
        function (o, n, t) {
          var e = t(11)
          o.exports =
            !!Object.getOwnPropertySymbols &&
            !e(function () {
              return !String(Symbol())
            })
        },
        function (o, n, t) {
          var e = t(25),
            i = t(169),
            r = t(80),
            a = t(51),
            c = t(108),
            A = t(73),
            d = t(63),
            h = '>',
            f = '<',
            l = 'prototype',
            u = 'script',
            s = d('IE_PROTO'),
            p = function () {},
            v = function (S) {
              return f + u + h + S + f + '/' + u + h
            },
            m = function (S) {
              S.write(v('')), S.close()
              var D = S.parentWindow.Object
              return (S = null), D
            },
            g = function () {
              var S = A('iframe'),
                D = 'java' + u + ':',
                P
              return (
                (S.style.display = 'none'),
                c.appendChild(S),
                (S.src = String(D)),
                (P = S.contentWindow.document),
                P.open(),
                P.write(v('document.F=Object')),
                P.close(),
                P.F
              )
            },
            y,
            x = function () {
              try {
                y = document.domain && new ActiveXObject('htmlfile')
              } catch {}
              x = y ? m(y) : g()
              for (var S = r.length; S--; ) delete x[l][r[S]]
              return x()
            }
          ;(a[s] = !0),
            (o.exports =
              Object.create ||
              function (D, P) {
                var C
                return (
                  D !== null
                    ? ((p[l] = e(D)), (C = new p()), (p[l] = null), (C[s] = D))
                    : (C = x()),
                  P === void 0 ? C : i(C, P)
                )
              })
        },
        function (o, n, t) {
          var e = t(30),
            i = t(35),
            r = t(79),
            a = function (c) {
              return function (A, d, h) {
                var f = e(A),
                  l = i(f.length),
                  u = r(h, l),
                  s
                if (c && d != d) {
                  for (; l > u; ) if (((s = f[u++]), s != s)) return !0
                } else for (; l > u; u++) if ((c || u in f) && f[u] === d) return c || u || 0
                return !c && -1
              }
            }
          o.exports = { includes: a(!0), indexOf: a(!1) }
        },
        function (o, n, t) {
          var e = t(62),
            i = Math.max,
            r = Math.min
          o.exports = function (a, c) {
            var A = e(a)
            return A < 0 ? i(A + c, 0) : r(A, c)
          }
        },
        function (o, n) {
          o.exports = [
            'constructor',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'toLocaleString',
            'toString',
            'valueOf'
          ]
        },
        function (o, n, t) {
          var e = t(10),
            i = e('toStringTag'),
            r = {}
          ;(r[i] = 'z'), (o.exports = String(r) === '[object z]')
        },
        function (o, n) {
          o.exports = function () {}
        },
        function (o, n) {
          o.exports = function (t, e, i) {
            if (!(t instanceof e)) throw TypeError('Incorrect ' + (i ? i + ' ' : '') + 'invocation')
            return t
          }
        },
        function (o, n, t) {
          var e = t(36)
          o.exports = e('navigator', 'userAgent') || ''
        },
        function (o, n, t) {
          var e = t(41),
            i = function (r) {
              var a, c
              ;(this.promise = new r(function (A, d) {
                if (a !== void 0 || c !== void 0) throw TypeError('Bad Promise constructor')
                ;(a = A), (c = d)
              })),
                (this.resolve = e(a)),
                (this.reject = e(c))
            }
          o.exports.f = function (r) {
            return new i(r)
          }
        },
        function (o, n, t) {
          var e = t(8),
            i = t(84),
            r = e.process,
            a = r && r.versions,
            c = a && a.v8,
            A,
            d
          c
            ? ((A = c.split('.')), (d = A[0] + A[1]))
            : i &&
              ((A = i.match(/Edge\/(\d+)/)),
              (!A || A[1] >= 74) && ((A = i.match(/Chrome\/(\d+)/)), A && (d = A[1]))),
            (o.exports = d && +d)
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(4))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = t(2),
            c = a.__importDefault(t(3)),
            A = t(6),
            d = a.__importDefault(t(267)),
            h = a.__importDefault(t(280)),
            f = a.__importDefault(t(281)),
            l = a.__importDefault(t(282)),
            u = a.__importDefault(t(301)),
            s = a.__importStar(t(416)),
            p = a.__importDefault(t(417)),
            v = a.__importDefault(t(418)),
            m = a.__importDefault(t(419)),
            g = a.__importStar(t(420)),
            y = a.__importDefault(t(423)),
            x = a.__importDefault(t(424)),
            S = a.__importDefault(t(425)),
            D = a.__importDefault(t(427)),
            P = a.__importDefault(t(437)),
            C = a.__importDefault(t(440)),
            E = a.__importStar(t(441)),
            T = a.__importDefault(t(23)),
            R = a.__importDefault(t(134)),
            N = a.__importDefault(t(24)),
            M = a.__importDefault(t(33)),
            B = a.__importDefault(t(38)),
            F = a.__importDefault(t(39)),
            O = 1,
            b = (function () {
              function $(H, U) {
                ;(this.pluginsFunctionList = {}),
                  (this.beforeDestroyHooks = []),
                  (this.id = 'wangEditor-' + O++),
                  (this.toolbarSelector = H),
                  (this.textSelector = U),
                  s.selectorValidator(this),
                  (this.config = A.deepClone(d.default)),
                  (this.$toolbarElem = c.default('<div></div>')),
                  (this.$textContainerElem = c.default('<div></div>')),
                  (this.$textElem = c.default('<div></div>')),
                  (this.toolbarElemId = ''),
                  (this.textElemId = ''),
                  (this.isFocus = !1),
                  (this.isComposing = !1),
                  (this.isCompatibleMode = !1),
                  (this.selection = new h.default(this)),
                  (this.cmd = new f.default(this)),
                  (this.txt = new l.default(this)),
                  (this.menus = new u.default(this)),
                  (this.zIndex = new x.default()),
                  (this.change = new S.default(this)),
                  (this.history = new D.default(this)),
                  (this.onSelectionChange = new C.default(this))
                var K = P.default(this),
                  w = K.disable,
                  X = K.enable
                ;(this.disable = w), (this.enable = X), (this.isEnable = !0)
              }
              return (
                ($.prototype.initSelection = function (H) {
                  p.default(this, H)
                }),
                ($.prototype.create = function () {
                  this.zIndex.init(this),
                    (this.isCompatibleMode = this.config.compatibleMode()),
                    this.isCompatibleMode || (this.config.onchangeTimeout = 30),
                    m.default(this),
                    s.default(this),
                    this.txt.init(),
                    this.menus.init(),
                    g.default(this),
                    this.initSelection(!0),
                    v.default(this),
                    this.change.observe(),
                    this.history.observe(),
                    E.default(this)
                }),
                ($.prototype.beforeDestroy = function (H) {
                  return this.beforeDestroyHooks.push(H), this
                }),
                ($.prototype.destroy = function () {
                  var H,
                    U = this
                  ;(0, r.default)((H = this.beforeDestroyHooks)).call(H, function (K) {
                    return K.call(U)
                  }),
                    this.$toolbarElem.remove(),
                    this.$textContainerElem.remove()
                }),
                ($.prototype.fullScreen = function () {
                  g.setFullScreen(this)
                }),
                ($.prototype.unFullScreen = function () {
                  g.setUnFullScreen(this)
                }),
                ($.prototype.scrollToHead = function (H) {
                  y.default(this, H)
                }),
                ($.registerMenu = function (H, U) {
                  !U || typeof U != 'function' || ($.globalCustomMenuConstructorList[H] = U)
                }),
                ($.prototype.registerPlugin = function (H, U) {
                  E.registerPlugin(H, U, this.pluginsFunctionList)
                }),
                ($.registerPlugin = function (H, U) {
                  E.registerPlugin(H, U, $.globalPluginsFunctionList)
                }),
                ($.$ = c.default),
                ($.BtnMenu = T.default),
                ($.DropList = R.default),
                ($.DropListMenu = N.default),
                ($.Panel = M.default),
                ($.PanelMenu = B.default),
                ($.Tooltip = F.default),
                ($.globalCustomMenuConstructorList = {}),
                ($.globalPluginsFunctionList = {}),
                $
              )
            })()
          n.default = b
        },
        function (o, n, t) {
          var e = t(13),
            i = t(55),
            r = t(10),
            a = r('species')
          o.exports = function (c, A) {
            var d
            return (
              i(c) &&
                ((d = c.constructor),
                typeof d == 'function' && (d === Array || i(d.prototype))
                  ? (d = void 0)
                  : e(d) && ((d = d[a]), d === null && (d = void 0))),
              new (d === void 0 ? Array : d)(A === 0 ? 0 : A)
            )
          }
        },
        function (o, n, t) {
          o.exports = t(185)
        },
        function (o, n, t) {
          var e = t(49),
            i = t(68),
            r = '[' + i + ']',
            a = RegExp('^' + r + r + '*'),
            c = RegExp(r + r + '*$'),
            A = function (d) {
              return function (h) {
                var f = String(e(h))
                return d & 1 && (f = f.replace(a, '')), d & 2 && (f = f.replace(c, '')), f
              }
            }
          o.exports = { start: A(1), end: A(2), trim: A(3) }
        },
        function (o, n, t) {
          o.exports = t(205)
        },
        function (o, n, t) {
          var e = t(227),
            i = t(230)
          function r(a) {
            return (
              typeof i == 'function' && typeof e == 'symbol'
                ? (o.exports = r =
                    function (A) {
                      return typeof A
                    })
                : (o.exports = r =
                    function (A) {
                      return A && typeof i == 'function' && A.constructor === i && A !== i.prototype
                        ? 'symbol'
                        : typeof A
                    }),
              r(a)
            )
          }
          o.exports = r
        },
        function (o, n, t) {
          var e = t(10)
          n.f = e
        },
        function (o, n, t) {
          o.exports = t(306)
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(4))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = t(2),
            c = a.__importDefault(t(33)),
            A = (function () {
              function d(h, f) {
                var l = this
                ;(this.$elem = h),
                  (this.editor = f),
                  (this._active = !1),
                  h.on('click', function (u) {
                    var s
                    c.default.hideCurAllPanels(),
                      (0, r.default)((s = f.txt.eventHooks.menuClickEvents)).call(s, function (p) {
                        return p()
                      }),
                      u.stopPropagation(),
                      f.selection.getRange() != null && l.clickHandler(u)
                  })
              }
              return (
                (d.prototype.clickHandler = function (h) {}),
                (d.prototype.active = function () {
                  ;(this._active = !0), this.$elem.addClass('w-e-active')
                }),
                (d.prototype.unActive = function () {
                  ;(this._active = !1), this.$elem.removeClass('w-e-active')
                }),
                (0, i.default)(d.prototype, 'isActive', {
                  get: function () {
                    return this._active
                  },
                  enumerable: !1,
                  configurable: !0
                }),
                d
              )
            })()
          n.default = A
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(28))
          ;(0, i.default)(n, '__esModule', { value: !0 }),
            (n.getParentNodeA = n.EXTRA_TAG = void 0),
            (n.EXTRA_TAG = ['B', 'FONT', 'I', 'STRIKE'])
          function a(A) {
            for (var d = A.elems[0]; d && (0, r.default)((h = n.EXTRA_TAG)).call(h, d.nodeName); ) {
              var h
              if (((d = d.parentElement), d.nodeName === 'A')) return d
            }
          }
          n.getParentNodeA = a
          function c(A) {
            var d,
              h = A.selection.getSelectionContainerElem()
            if (!(!((d = h == null ? void 0 : h.elems) === null || d === void 0) && d.length))
              return !1
            if (h.getNodeName() === 'A') return !0
            var f = a(h)
            return !!(f && f.nodeName === 'A')
          }
          n.default = c
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(57)),
            a = e(t(4)),
            c = e(t(27))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var A = t(2),
            d = t(6),
            h = A.__importDefault(t(135)),
            f = A.__importDefault(t(136)),
            l = (function () {
              function u(s) {
                this.editor = s
              }
              return (
                (u.prototype.insertImg = function (s, p, v) {
                  var m = this.editor,
                    g = m.config,
                    y = 'validate.',
                    x = function (T, R) {
                      return R === void 0 && (R = y), m.i18next.t(R + T)
                    },
                    S = s.replace(/</g, '&lt;').replace(/>/g, '&gt;')
                  S = S.replace("'", '"')
                  var D = ''
                  v &&
                    ((D = v.replace("'", '"')), (D = "data-href='" + encodeURIComponent(D) + "' "))
                  var P = ''
                  p &&
                    ((P = p.replace(/</g, '&lt;').replace(/>/g, '&gt;')),
                    (P = P.replace("'", '"')),
                    (P = "alt='" + P + "' ")),
                    m.cmd.do(
                      'insertHTML',
                      "<img src='" +
                        S +
                        "' " +
                        P +
                        D +
                        'style="max-width:100%;" contenteditable="false"/>'
                    ),
                    g.linkImgCallback(s, p, v)
                  var C = document.createElement('img')
                  ;(C.onload = function () {
                    C = null
                  }),
                    (C.onerror = function () {
                      g.customAlert(
                        x('\u63D2\u5165\u56FE\u7247\u9519\u8BEF'),
                        'error',
                        'wangEditor: ' +
                          x('\u63D2\u5165\u56FE\u7247\u9519\u8BEF') +
                          '\uFF0C' +
                          x('\u56FE\u7247\u94FE\u63A5') +
                          ' "' +
                          s +
                          '"\uFF0C' +
                          x('\u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25')
                      ),
                        (C = null)
                    }),
                    (C.onabort = function () {
                      return (C = null)
                    }),
                    (C.src = s)
                }),
                (u.prototype.uploadImg = function (s) {
                  var p = this
                  if (!!s.length) {
                    var v = this.editor,
                      m = v.config,
                      g = 'validate.',
                      y = function (Q) {
                        return v.i18next.t(g + Q)
                      },
                      x = m.uploadImgServer,
                      S = m.uploadImgShowBase64,
                      D = m.uploadImgMaxSize,
                      P = D / 1024 / 1024,
                      C = m.uploadImgMaxLength,
                      E = m.uploadFileName,
                      T = m.uploadImgParams,
                      R = m.uploadImgParamsWithUrl,
                      N = m.uploadImgHeaders,
                      M = m.uploadImgHooks,
                      B = m.uploadImgTimeout,
                      F = m.withCredentials,
                      O = m.customUploadImg
                    if (!(!O && !x && !S)) {
                      var b = [],
                        $ = []
                      if (
                        (d.arrForEach(s, function (J) {
                          if (!!J) {
                            var Q = J.name || J.type.replace('/', '.'),
                              V = J.size
                            if (!(!Q || !V)) {
                              var W = v.config.uploadImgAccept.join('|'),
                                q = '.(' + W + ')$',
                                rt = new RegExp(q, 'i')
                              if (rt.test(Q) === !1) {
                                $.push('\u3010' + Q + '\u3011' + y('\u4E0D\u662F\u56FE\u7247'))
                                return
                              }
                              if (D < V) {
                                $.push('\u3010' + Q + '\u3011' + y('\u5927\u4E8E') + ' ' + P + 'M')
                                return
                              }
                              b.push(J)
                            }
                          }
                        }),
                        $.length)
                      ) {
                        m.customAlert(
                          y('\u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7') +
                            `: 
` +
                            $.join(`
`),
                          'warning'
                        )
                        return
                      }
                      if (b.length === 0) {
                        m.customAlert(
                          y('\u4F20\u5165\u7684\u6587\u4EF6\u4E0D\u5408\u6CD5'),
                          'warning'
                        )
                        return
                      }
                      if (b.length > C) {
                        m.customAlert(
                          y('\u4E00\u6B21\u6700\u591A\u4E0A\u4F20') + C + y('\u5F20\u56FE\u7247'),
                          'warning'
                        )
                        return
                      }
                      if (O && typeof O == 'function') {
                        var H
                        O(b, (0, r.default)((H = this.insertImg)).call(H, this))
                        return
                      }
                      var U = new FormData()
                      if (
                        ((0, a.default)(b).call(b, function (J, Q) {
                          var V = E || J.name
                          b.length > 1 && (V = V + (Q + 1)), U.append(V, J)
                        }),
                        x)
                      ) {
                        var K = x.split('#')
                        x = K[0]
                        var w = K[1] || ''
                        ;(0, a.default)(d).call(d, T, function (J, Q) {
                          R &&
                            ((0, c.default)(x).call(x, '?') > 0 ? (x += '&') : (x += '?'),
                            (x = x + J + '=' + Q)),
                            U.append(J, Q)
                        }),
                          w && (x += '#' + w)
                        var X = h.default(x, {
                          timeout: B,
                          formData: U,
                          headers: N,
                          withCredentials: !!F,
                          beforeSend: function (Q) {
                            if (M.before) return M.before(Q, v, b)
                          },
                          onTimeout: function (Q) {
                            m.customAlert(y('\u4E0A\u4F20\u56FE\u7247\u8D85\u65F6'), 'error'),
                              M.timeout && M.timeout(Q, v)
                          },
                          onProgress: function (Q, V) {
                            var W = new f.default(v)
                            V.lengthComputable && ((Q = V.loaded / V.total), W.show(Q))
                          },
                          onError: function (Q) {
                            m.customAlert(
                              y('\u4E0A\u4F20\u56FE\u7247\u9519\u8BEF'),
                              'error',
                              y('\u4E0A\u4F20\u56FE\u7247\u9519\u8BEF') +
                                '\uFF0C' +
                                y('\u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001') +
                                ': ' +
                                Q.status
                            ),
                              M.error && M.error(Q, v)
                          },
                          onFail: function (Q, V) {
                            m.customAlert(
                              y('\u4E0A\u4F20\u56FE\u7247\u5931\u8D25'),
                              'error',
                              y('\u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF') +
                                ('\uFF0C' + y('\u8FD4\u56DE\u7ED3\u679C') + ': ') +
                                V
                            ),
                              M.fail && M.fail(Q, v, V)
                          },
                          onSuccess: function (Q, V) {
                            if (M.customInsert) {
                              var W
                              M.customInsert((0, r.default)((W = p.insertImg)).call(W, p), V, v)
                              return
                            }
                            if (V.errno != '0') {
                              m.customAlert(
                                y('\u4E0A\u4F20\u56FE\u7247\u5931\u8D25'),
                                'error',
                                y('\u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF') +
                                  '\uFF0C' +
                                  y('\u8FD4\u56DE\u7ED3\u679C') +
                                  ' errno=' +
                                  V.errno
                              ),
                                M.fail && M.fail(Q, v, V)
                              return
                            }
                            var q = V.data
                            ;(0, a.default)(q).call(q, function (rt) {
                              typeof rt == 'string'
                                ? p.insertImg(rt)
                                : p.insertImg(rt.url, rt.alt, rt.href)
                            }),
                              M.success && M.success(Q, v, V)
                          }
                        })
                        typeof X == 'string' && m.customAlert(X, 'error')
                        return
                      }
                      S &&
                        d.arrForEach(s, function (J) {
                          var Q = p,
                            V = new FileReader()
                          V.readAsDataURL(J),
                            (V.onload = function () {
                              if (!!this.result) {
                                var W = this.result.toString()
                                Q.insertImg(W, W)
                              }
                            })
                        })
                    }
                  }
                }),
                u
              )
            })()
          n.default = l
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(410)),
            a = e(t(4)),
            c = e(t(45))
          ;(0, i.default)(n, '__esModule', { value: !0 }),
            (n.dealTextNode = n.isAllTodo = n.isTodo = n.getCursorNextNode = void 0)
          function A(u) {
            return u.length ? u.attr('class') === 'w-e-todo' : !1
          }
          n.isTodo = A
          function d(u) {
            var s = u.selection.getSelectionRangeTopNodes()
            if (s.length !== 0)
              return (0, r.default)(s).call(s, function (p) {
                return A(p)
              })
          }
          n.isAllTodo = d
          function h(u, s, p) {
            var v
            if (!!u.hasChildNodes()) {
              var m = u.cloneNode(),
                g = !1
              s.nodeValue === '' && (g = !0)
              var y = []
              return (
                (0, a.default)((v = u.childNodes)).call(v, function (x) {
                  if (
                    (!f(x, s) &&
                      g &&
                      (m.appendChild(x.cloneNode(!0)), x.nodeName !== 'BR' && y.push(x)),
                    f(x, s))
                  ) {
                    if (x.nodeType === 1) {
                      var S = h(x, s, p)
                      S && S.textContent !== '' && (m == null || m.appendChild(S))
                    }
                    if (x.nodeType === 3 && s.isEqualNode(x)) {
                      var D = l(x, p)
                      m.textContent = D
                    }
                    g = !0
                  }
                }),
                (0, a.default)(y).call(y, function (x) {
                  var S = x
                  S.remove()
                }),
                m
              )
            }
          }
          n.getCursorNextNode = h
          function f(u, s) {
            return u.nodeType === 3 ? u.nodeValue === s.nodeValue : u.contains(s)
          }
          function l(u, s, p) {
            p === void 0 && (p = !0)
            var v = u.nodeValue,
              m = v == null ? void 0 : (0, c.default)(v).call(v, 0, s)
            if (((v = v == null ? void 0 : (0, c.default)(v).call(v, s)), !p)) {
              var g = v
              ;(v = m), (m = g)
            }
            return (u.nodeValue = m), v
          }
          n.dealTextNode = l
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(430),
            a = (function () {
              function c(A) {
                ;(this.maxSize = A),
                  (this.isRe = !1),
                  (this.data = new r.CeilStack(A)),
                  (this.revokeData = new r.CeilStack(A))
              }
              return (
                (0, i.default)(c.prototype, 'size', {
                  get: function () {
                    return [this.data.size, this.revokeData.size]
                  },
                  enumerable: !1,
                  configurable: !0
                }),
                (c.prototype.resetMaxSize = function (A) {
                  this.data.resetMax(A), this.revokeData.resetMax(A)
                }),
                (c.prototype.save = function (A) {
                  return (
                    this.isRe && (this.revokeData.clear(), (this.isRe = !1)),
                    this.data.instack(A),
                    this
                  )
                }),
                (c.prototype.revoke = function (A) {
                  !this.isRe && (this.isRe = !0)
                  var d = this.data.outstack()
                  return d ? (this.revokeData.instack(d), A(d), !0) : !1
                }),
                (c.prototype.restore = function (A) {
                  !this.isRe && (this.isRe = !0)
                  var d = this.revokeData.outstack()
                  return d ? (this.data.instack(d), A(d), !0) : !1
                }),
                c
              )
            })()
          n.default = a
        },
        function (o, n, t) {
          var e = t(14),
            i = t(11),
            r = t(73)
          o.exports =
            !e &&
            !i(function () {
              return (
                Object.defineProperty(r('div'), 'a', {
                  get: function () {
                    return 7
                  }
                }).a != 7
              )
            })
        },
        function (o, n, t) {
          var e = t(11),
            i = /#|\.prototype\./,
            r = function (h, f) {
              var l = c[a(h)]
              return l == d ? !0 : l == A ? !1 : typeof f == 'function' ? e(f) : !!f
            },
            a = (r.normalize = function (h) {
              return String(h).replace(i, '.').toLowerCase()
            }),
            c = (r.data = {}),
            A = (r.NATIVE = 'N'),
            d = (r.POLYFILL = 'P')
          o.exports = r
        },
        function (o, n, t) {
          var e = t(103),
            i = Function.toString
          typeof e.inspectSource != 'function' &&
            (e.inspectSource = function (r) {
              return i.call(r)
            }),
            (o.exports = e.inspectSource)
        },
        function (o, n, t) {
          var e = t(8),
            i = t(166),
            r = '__core-js_shared__',
            a = e[r] || i(r, {})
          o.exports = a
        },
        function (o, n, t) {
          var e = t(105),
            i = t(19),
            r = t(16),
            a = t(10),
            c = t(43),
            A = a('iterator'),
            d = !1,
            h = function () {
              return this
            },
            f,
            l,
            u
          ;[].keys &&
            ((u = [].keys()),
            'next' in u ? ((l = e(e(u))), l !== Object.prototype && (f = l)) : (d = !0)),
            f == null && (f = {}),
            !c && !r(f, A) && i(f, A, h),
            (o.exports = { IteratorPrototype: f, BUGGY_SAFARI_ITERATORS: d })
        },
        function (o, n, t) {
          var e = t(16),
            i = t(31),
            r = t(63),
            a = t(168),
            c = r('IE_PROTO'),
            A = Object.prototype
          o.exports = a
            ? Object.getPrototypeOf
            : function (d) {
                return (
                  (d = i(d)),
                  e(d, c)
                    ? d[c]
                    : typeof d.constructor == 'function' && d instanceof d.constructor
                    ? d.constructor.prototype
                    : d instanceof Object
                    ? A
                    : null
                )
              }
        },
        function (o, n, t) {
          var e = t(76)
          o.exports = e && !Symbol.sham && typeof Symbol.iterator == 'symbol'
        },
        function (o, n, t) {
          var e = t(16),
            i = t(30),
            r = t(78).indexOf,
            a = t(51)
          o.exports = function (c, A) {
            var d = i(c),
              h = 0,
              f = [],
              l
            for (l in d) !e(a, l) && e(d, l) && f.push(l)
            for (; A.length > h; ) e(d, (l = A[h++])) && (~r(f, l) || f.push(l))
            return f
          }
        },
        function (o, n, t) {
          var e = t(36)
          o.exports = e('document', 'documentElement')
        },
        function (o, n, t) {
          var e = t(8)
          o.exports = e.Promise
        },
        function (o, n, t) {
          var e = t(53)
          o.exports = function (i, r, a) {
            for (var c in r) a && a.unsafe && i[c] ? (i[c] = r[c]) : e(i, c, r[c], a)
            return i
          }
        },
        function (o, n, t) {
          var e = t(36),
            i = t(18),
            r = t(10),
            a = t(14),
            c = r('species')
          o.exports = function (A) {
            var d = e(A),
              h = i.f
            a &&
              d &&
              !d[c] &&
              h(d, c, {
                configurable: !0,
                get: function () {
                  return this
                }
              })
          }
        },
        function (o, n, t) {
          var e = t(10),
            i = t(44),
            r = e('iterator'),
            a = Array.prototype
          o.exports = function (c) {
            return c !== void 0 && (i.Array === c || a[r] === c)
          }
        },
        function (o, n, t) {
          var e = t(65),
            i = t(44),
            r = t(10),
            a = r('iterator')
          o.exports = function (c) {
            if (c != null) return c[a] || c['@@iterator'] || i[e(c)]
          }
        },
        function (o, n, t) {
          var e = t(25)
          o.exports = function (i, r, a, c) {
            try {
              return c ? r(e(a)[0], a[1]) : r(a)
            } catch (d) {
              var A = i.return
              throw (A !== void 0 && e(A.call(i)), d)
            }
          }
        },
        function (o, n, t) {
          var e = t(10),
            i = e('iterator'),
            r = !1
          try {
            var a = 0,
              c = {
                next: function () {
                  return { done: !!a++ }
                },
                return: function () {
                  r = !0
                }
              }
            ;(c[i] = function () {
              return this
            }),
              Array.from(c, function () {
                throw 2
              })
          } catch {}
          o.exports = function (A, d) {
            if (!d && !r) return !1
            var h = !1
            try {
              var f = {}
              ;(f[i] = function () {
                return {
                  next: function () {
                    return { done: (h = !0) }
                  }
                }
              }),
                A(f)
            } catch {}
            return h
          }
        },
        function (o, n, t) {
          var e = t(25),
            i = t(41),
            r = t(10),
            a = r('species')
          o.exports = function (c, A) {
            var d = e(c).constructor,
              h
            return d === void 0 || (h = e(d)[a]) == null ? A : i(h)
          }
        },
        function (o, n, t) {
          var e = t(8),
            i = t(11),
            r = t(34),
            a = t(40),
            c = t(108),
            A = t(73),
            d = t(118),
            h = e.location,
            f = e.setImmediate,
            l = e.clearImmediate,
            u = e.process,
            s = e.MessageChannel,
            p = e.Dispatch,
            v = 0,
            m = {},
            g = 'onreadystatechange',
            y,
            x,
            S,
            D = function (T) {
              if (m.hasOwnProperty(T)) {
                var R = m[T]
                delete m[T], R()
              }
            },
            P = function (T) {
              return function () {
                D(T)
              }
            },
            C = function (T) {
              D(T.data)
            },
            E = function (T) {
              e.postMessage(T + '', h.protocol + '//' + h.host)
            }
          ;(!f || !l) &&
            ((f = function (R) {
              for (var N = [], M = 1; arguments.length > M; ) N.push(arguments[M++])
              return (
                (m[++v] = function () {
                  ;(typeof R == 'function' ? R : Function(R)).apply(void 0, N)
                }),
                y(v),
                v
              )
            }),
            (l = function (R) {
              delete m[R]
            }),
            r(u) == 'process'
              ? (y = function (T) {
                  u.nextTick(P(T))
                })
              : p && p.now
              ? (y = function (T) {
                  p.now(P(T))
                })
              : s && !d
              ? ((x = new s()),
                (S = x.port2),
                (x.port1.onmessage = C),
                (y = a(S.postMessage, S, 1)))
              : e.addEventListener &&
                typeof postMessage == 'function' &&
                !e.importScripts &&
                !i(E) &&
                h.protocol !== 'file:'
              ? ((y = E), e.addEventListener('message', C, !1))
              : g in A('script')
              ? (y = function (T) {
                  c.appendChild(A('script'))[g] = function () {
                    c.removeChild(this), D(T)
                  }
                })
              : (y = function (T) {
                  setTimeout(P(T), 0)
                })),
            (o.exports = { set: f, clear: l })
        },
        function (o, n, t) {
          var e = t(84)
          o.exports = /(iphone|ipod|ipad).*applewebkit/i.test(e)
        },
        function (o, n, t) {
          var e = t(25),
            i = t(13),
            r = t(85)
          o.exports = function (a, c) {
            if ((e(a), i(c) && c.constructor === a)) return c
            var A = r.f(a),
              d = A.resolve
            return d(c), A.promise
          }
        },
        function (o, n) {
          o.exports = function (t) {
            try {
              return { error: !1, value: t() }
            } catch (e) {
              return { error: !0, value: e }
            }
          }
        },
        function (o, n, t) {
          o.exports = t(197)
        },
        function (o, n, t) {
          var e = t(5),
            i = t(8),
            r = t(123),
            a = t(11),
            c = t(19),
            A = t(66),
            d = t(83),
            h = t(13),
            f = t(37),
            l = t(18).f,
            u = t(32).forEach,
            s = t(14),
            p = t(42),
            v = p.set,
            m = p.getterFor
          o.exports = function (g, y, x) {
            var S = g.indexOf('Map') !== -1,
              D = g.indexOf('Weak') !== -1,
              P = S ? 'set' : 'add',
              C = i[g],
              E = C && C.prototype,
              T = {},
              R
            if (
              !s ||
              typeof C != 'function' ||
              !(
                D ||
                (E.forEach &&
                  !a(function () {
                    new C().entries().next()
                  }))
              )
            )
              (R = x.getConstructor(y, g, S, P)), (r.REQUIRED = !0)
            else {
              R = y(function (M, B) {
                v(d(M, R, g), { type: g, collection: new C() }), B != null && A(B, M[P], M, S)
              })
              var N = m(g)
              u(
                [
                  'add',
                  'clear',
                  'delete',
                  'forEach',
                  'get',
                  'has',
                  'set',
                  'keys',
                  'values',
                  'entries'
                ],
                function (M) {
                  var B = M == 'add' || M == 'set'
                  M in E &&
                    !(D && M == 'clear') &&
                    c(R.prototype, M, function (F, O) {
                      var b = N(this).collection
                      if (!B && D && !h(F)) return M == 'get' ? void 0 : !1
                      var $ = b[M](F === 0 ? 0 : F, O)
                      return B ? this : $
                    })
                }
              ),
                D ||
                  l(R.prototype, 'size', {
                    configurable: !0,
                    get: function () {
                      return N(this).collection.size
                    }
                  })
            }
            return (
              f(R, g, !1, !0),
              (T[g] = R),
              e({ global: !0, forced: !0 }, T),
              D || x.setStrong(R, g, S),
              R
            )
          }
        },
        function (o, n, t) {
          var e = t(51),
            i = t(13),
            r = t(16),
            a = t(18).f,
            c = t(64),
            A = t(200),
            d = c('meta'),
            h = 0,
            f =
              Object.isExtensible ||
              function () {
                return !0
              },
            l = function (m) {
              a(m, d, { value: { objectID: 'O' + ++h, weakData: {} } })
            },
            u = function (m, g) {
              if (!i(m)) return typeof m == 'symbol' ? m : (typeof m == 'string' ? 'S' : 'P') + m
              if (!r(m, d)) {
                if (!f(m)) return 'F'
                if (!g) return 'E'
                l(m)
              }
              return m[d].objectID
            },
            s = function (m, g) {
              if (!r(m, d)) {
                if (!f(m)) return !0
                if (!g) return !1
                l(m)
              }
              return m[d].weakData
            },
            p = function (m) {
              return A && v.REQUIRED && f(m) && !r(m, d) && l(m), m
            },
            v = (o.exports = { REQUIRED: !1, fastKey: u, getWeakData: s, onFreeze: p })
          e[d] = !0
        },
        function (o, n, t) {
          var e = t(18).f,
            i = t(77),
            r = t(110),
            a = t(40),
            c = t(83),
            A = t(66),
            d = t(75),
            h = t(111),
            f = t(14),
            l = t(123).fastKey,
            u = t(42),
            s = u.set,
            p = u.getterFor
          o.exports = {
            getConstructor: function (v, m, g, y) {
              var x = v(function (C, E) {
                  c(C, x, m),
                    s(C, { type: m, index: i(null), first: void 0, last: void 0, size: 0 }),
                    f || (C.size = 0),
                    E != null && A(E, C[y], C, g)
                }),
                S = p(m),
                D = function (C, E, T) {
                  var R = S(C),
                    N = P(C, E),
                    M,
                    B
                  return (
                    N
                      ? (N.value = T)
                      : ((R.last = N =
                          {
                            index: (B = l(E, !0)),
                            key: E,
                            value: T,
                            previous: (M = R.last),
                            next: void 0,
                            removed: !1
                          }),
                        R.first || (R.first = N),
                        M && (M.next = N),
                        f ? R.size++ : C.size++,
                        B !== 'F' && (R.index[B] = N)),
                    C
                  )
                },
                P = function (C, E) {
                  var T = S(C),
                    R = l(E),
                    N
                  if (R !== 'F') return T.index[R]
                  for (N = T.first; N; N = N.next) if (N.key == E) return N
                }
              return (
                r(x.prototype, {
                  clear: function () {
                    for (var E = this, T = S(E), R = T.index, N = T.first; N; )
                      (N.removed = !0),
                        N.previous && (N.previous = N.previous.next = void 0),
                        delete R[N.index],
                        (N = N.next)
                    ;(T.first = T.last = void 0), f ? (T.size = 0) : (E.size = 0)
                  },
                  delete: function (C) {
                    var E = this,
                      T = S(E),
                      R = P(E, C)
                    if (R) {
                      var N = R.next,
                        M = R.previous
                      delete T.index[R.index],
                        (R.removed = !0),
                        M && (M.next = N),
                        N && (N.previous = M),
                        T.first == R && (T.first = N),
                        T.last == R && (T.last = M),
                        f ? T.size-- : E.size--
                    }
                    return !!R
                  },
                  forEach: function (E) {
                    for (
                      var T = S(this), R = a(E, arguments.length > 1 ? arguments[1] : void 0, 3), N;
                      (N = N ? N.next : T.first);

                    )
                      for (R(N.value, N.key, this); N && N.removed; ) N = N.previous
                  },
                  has: function (E) {
                    return !!P(this, E)
                  }
                }),
                r(
                  x.prototype,
                  g
                    ? {
                        get: function (E) {
                          var T = P(this, E)
                          return T && T.value
                        },
                        set: function (E, T) {
                          return D(this, E === 0 ? 0 : E, T)
                        }
                      }
                    : {
                        add: function (E) {
                          return D(this, (E = E === 0 ? 0 : E), E)
                        }
                      }
                ),
                f &&
                  e(x.prototype, 'size', {
                    get: function () {
                      return S(this).size
                    }
                  }),
                x
              )
            },
            setStrong: function (v, m, g) {
              var y = m + ' Iterator',
                x = p(m),
                S = p(y)
              d(
                v,
                m,
                function (D, P) {
                  s(this, { type: y, target: D, state: x(D), kind: P, last: void 0 })
                },
                function () {
                  for (var D = S(this), P = D.kind, C = D.last; C && C.removed; ) C = C.previous
                  return !D.target || !(D.last = C = C ? C.next : D.state.first)
                    ? ((D.target = void 0), { value: void 0, done: !0 })
                    : P == 'keys'
                    ? { value: C.key, done: !1 }
                    : P == 'values'
                    ? { value: C.value, done: !1 }
                    : { value: [C.key, C.value], done: !1 }
                },
                g ? 'entries' : 'values',
                !g,
                !0
              ),
                h(m)
            }
          }
        },
        function (o, n, t) {
          var e = t(12)
          e('iterator')
        },
        function (o, n, t) {
          var e = t(107),
            i = t(80),
            r = i.concat('length', 'prototype')
          n.f =
            Object.getOwnPropertyNames ||
            function (c) {
              return e(c, r)
            }
        },
        function (o, n) {
          n.f = Object.getOwnPropertySymbols
        },
        function (o, n, t) {
          o.exports = t(268)
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 }), (n.default = { zIndex: 1e4 })
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 }),
            (n.default = {
              focus: !0,
              height: 300,
              placeholder: '\u8BF7\u8F93\u5165\u6B63\u6587',
              zIndexFullScreen: 10002,
              showFullScreen: !0
            })
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(4))
          ;(0, i.default)(n, '__esModule', { value: !0 }),
            (n.getPasteImgs = n.getPasteHtml = n.getPasteText = void 0)
          var a = t(2),
            c = t(6),
            A = a.__importDefault(t(292))
          function d(l) {
            var u = l.clipboardData,
              s = ''
            return (
              u == null
                ? (s = window.clipboardData && window.clipboardData.getData('text'))
                : (s = u.getData('text/plain')),
              c.replaceHtmlSymbol(s)
            )
          }
          n.getPasteText = d
          function h(l, u, s) {
            u === void 0 && (u = !0), s === void 0 && (s = !1)
            var p = l.clipboardData,
              v = ''
            if ((p && (v = p.getData('text/html')), !v)) {
              var m = d(l)
              if (!m) return ''
              v = '<p>' + m + '</p>'
            }
            return (
              (v = v.replace(/<(\d)/gm, function (g, y) {
                return '&lt;' + y
              })),
              (v = v.replace(/<(\/?meta.*?)>/gim, '')),
              (v = A.default(v, u, s)),
              v
            )
          }
          n.getPasteHtml = h
          function f(l) {
            var u,
              s = [],
              p = d(l)
            if (p) return s
            var v = (u = l.clipboardData) === null || u === void 0 ? void 0 : u.items
            return (
              v &&
                (0, r.default)(c).call(c, v, function (m, g) {
                  var y = g.type
                  ;/image/i.test(y) && s.push(g.getAsFile())
                }),
              s
            )
          }
          n.getPasteImgs = f
        },
        function (o, n, t) {
          o.exports = t(294)
        },
        function (o, n, t) {
          o.exports = t(310)
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(4)),
            a = e(t(46))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var c = t(2),
            A = c.__importDefault(t(3)),
            d = t(7),
            h = (function () {
              function f(l, u) {
                var s = this
                ;(this.hideTimeoutId = 0), (this.menu = l), (this.conf = u)
                var p = A.default('<div class="w-e-droplist"></div>'),
                  v = A.default('<p>' + u.title + '</p>')
                v.addClass('w-e-dp-title'), p.append(v)
                var m = u.list || [],
                  g = u.type || 'list',
                  y = u.clickHandler || d.EMPTY_FN,
                  x = A.default(
                    '<ul class="' + (g === 'list' ? 'w-e-list' : 'w-e-block') + '"></ul>'
                  )
                ;(0, r.default)(m).call(m, function (S) {
                  var D = S.$elem,
                    P = S.value,
                    C = A.default('<li class="w-e-item"></li>')
                  D &&
                    (C.append(D),
                    x.append(C),
                    C.on('click', function (E) {
                      y(P),
                        E.stopPropagation(),
                        (s.hideTimeoutId = (0, a.default)(function () {
                          s.hide()
                        }))
                    }))
                }),
                  p.append(x),
                  p.on('mouseleave', function () {
                    s.hideTimeoutId = (0, a.default)(function () {
                      s.hide()
                    })
                  }),
                  (this.$container = p),
                  (this.rendered = !1),
                  (this._show = !1)
              }
              return (
                (f.prototype.show = function () {
                  this.hideTimeoutId && clearTimeout(this.hideTimeoutId)
                  var l = this.menu,
                    u = l.$elem,
                    s = this.$container
                  if (!this._show) {
                    if (this.rendered) s.show()
                    else {
                      var p = u.getBoundingClientRect().height || 0,
                        v = this.conf.width || 100
                      s.css('margin-top', p + 'px').css('width', v + 'px'),
                        u.append(s),
                        (this.rendered = !0)
                    }
                    this._show = !0
                  }
                }),
                (f.prototype.hide = function () {
                  var l = this.$container
                  !this._show || (l.hide(), (this._show = !1))
                }),
                (0, i.default)(f.prototype, 'isShow', {
                  get: function () {
                    return this._show
                  },
                  enumerable: !1,
                  configurable: !0
                }),
                f
              )
            })()
          n.default = h
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(92)),
            r = e(t(1)),
            a = e(t(4))
          ;(0, r.default)(n, '__esModule', { value: !0 })
          var c = t(6)
          function A(d, h) {
            var f = new XMLHttpRequest()
            if (
              (f.open('POST', d),
              (f.timeout = h.timeout || 10 * 1e3),
              (f.ontimeout = function () {
                console.error('wangEditor - \u8BF7\u6C42\u8D85\u65F6'),
                  h.onTimeout && h.onTimeout(f)
              }),
              f.upload &&
                (f.upload.onprogress = function (u) {
                  var s = u.loaded / u.total
                  h.onProgress && h.onProgress(s, u)
                }),
              h.headers &&
                (0, a.default)(c).call(c, h.headers, function (u, s) {
                  f.setRequestHeader(u, s)
                }),
              (f.withCredentials = !!h.withCredentials),
              h.beforeSend)
            ) {
              var l = h.beforeSend(f)
              if (l && (0, i.default)(l) === 'object' && l.prevent) return l.msg
            }
            return (
              (f.onreadystatechange = function () {
                if (f.readyState === 4) {
                  var u = f.status
                  if (!(u < 200) && !(u >= 300 && u < 400)) {
                    if (u >= 400) {
                      console.error('wangEditor - XHR \u62A5\u9519\uFF0C\u72B6\u6001\u7801 ' + u),
                        h.onError && h.onError(f)
                      return
                    }
                    var s = f.responseText,
                      p
                    if ((0, i.default)(s) !== 'object')
                      try {
                        p = JSON.parse(s)
                      } catch {
                        console.error(
                          'wangEditor - \u8FD4\u56DE\u7ED3\u679C\u4E0D\u662F JSON \u683C\u5F0F',
                          s
                        ),
                          h.onFail && h.onFail(f, s)
                        return
                      }
                    else p = s
                    h.onSuccess(f, p)
                  }
                }
              }),
              f.send(h.formData || null),
              f
            )
          }
          n.default = A
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(342)),
            a = e(t(46))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var c = t(2),
            A = c.__importDefault(t(3)),
            d = (function () {
              function h(f) {
                ;(this.editor = f),
                  (this.$textContainer = f.$textContainerElem),
                  (this.$bar = A.default('<div class="w-e-progress"></div>')),
                  (this.isShow = !1),
                  (this.time = 0),
                  (this.timeoutId = 0)
              }
              return (
                (h.prototype.show = function (f) {
                  var l = this
                  if (!this.isShow) {
                    this.isShow = !0
                    var u = this.$bar,
                      s = this.$textContainer
                    s.append(u),
                      (0, r.default)() - this.time > 100 &&
                        f <= 1 &&
                        (u.css('width', f * 100 + '%'), (this.time = (0, r.default)()))
                    var p = this.timeoutId
                    p && clearTimeout(p),
                      (this.timeoutId = (0, a.default)(function () {
                        l.hide()
                      }, 500))
                  }
                }),
                (h.prototype.hide = function () {
                  var f = this.$bar
                  f.remove(), (this.isShow = !1), (this.time = 0), (this.timeoutId = 0)
                }),
                h
              )
            })()
          n.default = d
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 }), (n.ListType = void 0)
          var r = t(2),
            a = r.__importDefault(t(3)),
            c = r.__importDefault(t(24)),
            A = t(47),
            d = r.__importStar(t(371)),
            h
          ;(function (l) {
            ;(l.OrderedList = 'OL'), (l.UnorderedList = 'UL')
          })((h = n.ListType || (n.ListType = {})))
          var f = (function (l) {
            r.__extends(u, l)
            function u(s) {
              var p = this,
                v = a.default(`<div class="w-e-menu" data-title="\u5E8F\u5217">
                <i class="w-e-icon-list2"></i>
            </div>`),
                m = {
                  width: 130,
                  title: '\u5E8F\u5217',
                  type: 'list',
                  list: [
                    {
                      $elem: a.default(
                        `
                        <p>
                            <i class="w-e-icon-list2 w-e-drop-list-item"></i>
                            ` +
                          s.i18next.t('menus.dropListMenu.list.\u65E0\u5E8F\u5217\u8868') +
                          `
                        <p>`
                      ),
                      value: h.UnorderedList
                    },
                    {
                      $elem: a.default(
                        `<p>
                            <i class="w-e-icon-list-numbered w-e-drop-list-item"></i>
                            ` +
                          s.i18next.t('menus.dropListMenu.list.\u6709\u5E8F\u5217\u8868') +
                          `
                        <p>`
                      ),
                      value: h.OrderedList
                    }
                  ],
                  clickHandler: function (y) {
                    p.command(y)
                  }
                }
              return (p = l.call(this, v, s, m) || this), p
            }
            return (
              (u.prototype.command = function (s) {
                var p = this.editor,
                  v = p.selection.getSelectionContainerElem()
                v !== void 0 && (this.handleSelectionRangeNodes(s), this.tryChangeActive())
              }),
              (u.prototype.validator = function (s, p, v) {
                return !(!s.length || !p.length || v.equal(s) || v.equal(p))
              }),
              (u.prototype.handleSelectionRangeNodes = function (s) {
                var p = this.editor,
                  v = p.selection,
                  m = s.toLowerCase(),
                  g = v.getSelectionContainerElem(),
                  y = v.getSelectionStartElem().getNodeTop(p),
                  x = v.getSelectionEndElem().getNodeTop(p)
                if (!!this.validator(y, x, p.$textElem)) {
                  var S = v.getRange(),
                    D = S == null ? void 0 : S.collapsed
                  p.$textElem.equal(g) || (g = g.getNodeTop(p))
                  var P = {
                      editor: p,
                      listType: s,
                      listTarget: m,
                      $selectionElem: g,
                      $startElem: y,
                      $endElem: x
                    },
                    C
                  this.isOrderElem(g)
                    ? (C = d.ClassType.Wrap)
                    : this.isOrderElem(y) && this.isOrderElem(x)
                    ? (C = d.ClassType.Join)
                    : this.isOrderElem(y)
                    ? (C = d.ClassType.StartJoin)
                    : this.isOrderElem(x)
                    ? (C = d.ClassType.EndJoin)
                    : (C = d.ClassType.Other)
                  var E = new d.default(d.createListHandle(C, P, S))
                  A.updateRange(p, E.getSelectionRangeElem(), !!D)
                }
              }),
              (u.prototype.isOrderElem = function (s) {
                var p = s.getNodeName()
                return p === h.OrderedList || p === h.UnorderedList
              }),
              (u.prototype.tryChangeActive = function () {}),
              u
            )
          })(c.default)
          n.default = f
        },
        function (o, n, t) {
          o.exports = t(395)
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          function r(a) {
            var c = a.selection.getSelectionContainerElem()
            return c != null && c.length
              ? !!(
                  c.getNodeName() == 'CODE' ||
                  c.getNodeName() == 'PRE' ||
                  c.parent().getNodeName() == 'CODE' ||
                  c.parent().getNodeName() == 'PRE' ||
                  /hljs/.test(c.parent().attr('class'))
                )
              : !1
          }
          n.default = r
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(29))
          ;(0, i.default)(n, '__esModule', { value: !0 }), (n.todo = void 0)
          var a = t(2),
            c = a.__importDefault(t(3)),
            A = (function () {
              function h(f) {
                var l
                ;(this.template =
                  '<ul class="w-e-todo"><li><span contenteditable="false"><input type="checkbox"></span></li></ul>'),
                  (this.checked = !1),
                  (this.$todo = c.default(this.template)),
                  (this.$child =
                    (l = f == null ? void 0 : f.childNodes()) === null || l === void 0
                      ? void 0
                      : l.clone(!0))
              }
              return (
                (h.prototype.init = function () {
                  var f = this.$child,
                    l = this.getInputContainer()
                  f && f.insertAfter(l)
                }),
                (h.prototype.getInput = function () {
                  var f = this.$todo,
                    l = (0, r.default)(f).call(f, 'input')
                  return l
                }),
                (h.prototype.getInputContainer = function () {
                  var f = this.getInput().parent()
                  return f
                }),
                (h.prototype.getTodo = function () {
                  return this.$todo
                }),
                h
              )
            })()
          n.todo = A
          function d(h) {
            var f = new A(h)
            return f.init(), f
          }
          n.default = d
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2)
          t(146), t(148), t(152), t(154), t(156), t(158), t(160)
          var a = r.__importDefault(t(87))
          r.__exportStar(t(442), n)
          try {
          } catch {
            throw new Error('\u8BF7\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B\u8FD0\u884C')
          }
          n.default = a.default
        },
        function (o, n, t) {
          var e = t(143)
          o.exports = e
        },
        function (o, n, t) {
          t(144)
          var e = t(9),
            i = e.Object,
            r = (o.exports = function (c, A, d) {
              return i.defineProperty(c, A, d)
            })
          i.defineProperty.sham && (r.sham = !0)
        },
        function (o, n, t) {
          var e = t(5),
            i = t(14),
            r = t(18)
          e({ target: 'Object', stat: !0, forced: !i, sham: !i }, { defineProperty: r.f })
        },
        function (o, n) {
          var t
          t = (function () {
            return this
          })()
          try {
            t = t || new Function('return this')()
          } catch {
            typeof window == 'object' && (t = window)
          }
          o.exports = t
        },
        function (o, n, t) {
          var e = t(20),
            i = t(147)
          ;(i = i.__esModule ? i.default : i), typeof i == 'string' && (i = [[o.i, i, '']])
          var r = {}
          ;(r.insert = 'head'), (r.singleton = !1), e(i, r), (o.exports = i.locals || {})
        },
        function (o, n, t) {
          var e = t(21)
          ;(n = e(!1)),
            n.push([
              o.i,
              `.w-e-toolbar,
.w-e-text-container,
.w-e-menu-panel {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #fff;
  /*\u8868\u60C5\u83DC\u5355\u6837\u5F0F*/
  /*\u5206\u5272\u7EBF\u6837\u5F0F*/
}
.w-e-toolbar h1,
.w-e-text-container h1,
.w-e-menu-panel h1 {
  font-size: 32px !important;
}
.w-e-toolbar h2,
.w-e-text-container h2,
.w-e-menu-panel h2 {
  font-size: 24px !important;
}
.w-e-toolbar h3,
.w-e-text-container h3,
.w-e-menu-panel h3 {
  font-size: 18.72px !important;
}
.w-e-toolbar h4,
.w-e-text-container h4,
.w-e-menu-panel h4 {
  font-size: 16px !important;
}
.w-e-toolbar h5,
.w-e-text-container h5,
.w-e-menu-panel h5 {
  font-size: 13.28px !important;
}
.w-e-toolbar p,
.w-e-text-container p,
.w-e-menu-panel p {
  font-size: 16px !important;
}
.w-e-toolbar .eleImg,
.w-e-text-container .eleImg,
.w-e-menu-panel .eleImg {
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  padding: 0 3px;
}
.w-e-toolbar *,
.w-e-text-container *,
.w-e-menu-panel * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.w-e-toolbar hr,
.w-e-text-container hr,
.w-e-menu-panel hr {
  cursor: pointer;
  display: block;
  height: 0px;
  border: 0;
  border-top: 3px solid #ccc;
  margin: 20px 0;
}
.w-e-clear-fix:after {
  content: "";
  display: table;
  clear: both;
}
.w-e-drop-list-item {
  position: relative;
  top: 1px;
  padding-right: 7px;
  color: #333 !important;
}
.w-e-drop-list-tl {
  padding-left: 10px;
  text-align: left;
}
`,
              ''
            ]),
            (o.exports = n)
        },
        function (o, n, t) {
          var e = t(20),
            i = t(149)
          ;(i = i.__esModule ? i.default : i), typeof i == 'string' && (i = [[o.i, i, '']])
          var r = {}
          ;(r.insert = 'head'), (r.singleton = !1), e(i, r), (o.exports = i.locals || {})
        },
        function (o, n, t) {
          var e = t(21),
            i = t(150),
            r = t(151)
          n = e(!1)
          var a = i(r)
          n.push([
            o.i,
            `@font-face {
  font-family: 'w-e-icon';
  src: url(` +
              a +
              `) format('truetype');
  font-weight: normal;
  font-style: normal;
}
[class^="w-e-icon-"],
[class*=" w-e-icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'w-e-icon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.w-e-icon-close:before {
  content: "\\f00d";
}
.w-e-icon-upload2:before {
  content: "\\e9c6";
}
.w-e-icon-trash-o:before {
  content: "\\f014";
}
.w-e-icon-header:before {
  content: "\\f1dc";
}
.w-e-icon-pencil2:before {
  content: "\\e906";
}
.w-e-icon-paint-brush:before {
  content: "\\f1fc";
}
.w-e-icon-image:before {
  content: "\\e90d";
}
.w-e-icon-play:before {
  content: "\\e912";
}
.w-e-icon-location:before {
  content: "\\e947";
}
.w-e-icon-undo:before {
  content: "\\e965";
}
.w-e-icon-redo:before {
  content: "\\e966";
}
.w-e-icon-quotes-left:before {
  content: "\\e977";
}
.w-e-icon-list-numbered:before {
  content: "\\e9b9";
}
.w-e-icon-list2:before {
  content: "\\e9bb";
}
.w-e-icon-link:before {
  content: "\\e9cb";
}
.w-e-icon-happy:before {
  content: "\\e9df";
}
.w-e-icon-bold:before {
  content: "\\ea62";
}
.w-e-icon-underline:before {
  content: "\\ea63";
}
.w-e-icon-italic:before {
  content: "\\ea64";
}
.w-e-icon-strikethrough:before {
  content: "\\ea65";
}
.w-e-icon-table2:before {
  content: "\\ea71";
}
.w-e-icon-paragraph-left:before {
  content: "\\ea77";
}
.w-e-icon-paragraph-center:before {
  content: "\\ea78";
}
.w-e-icon-paragraph-right:before {
  content: "\\ea79";
}
.w-e-icon-paragraph-justify:before {
  content: "\\ea7a";
}
.w-e-icon-terminal:before {
  content: "\\f120";
}
.w-e-icon-page-break:before {
  content: "\\ea68";
}
.w-e-icon-cancel-circle:before {
  content: "\\ea0d";
}
.w-e-icon-font:before {
  content: "\\ea5c";
}
.w-e-icon-text-heigh:before {
  content: "\\ea5f";
}
.w-e-icon-paint-format:before {
  content: "\\e90c";
}
.w-e-icon-indent-increase:before {
  content: "\\ea7b";
}
.w-e-icon-indent-decrease:before {
  content: "\\ea7c";
}
.w-e-icon-row-height:before {
  content: "\\e9be";
}
.w-e-icon-fullscreen_exit:before {
  content: "\\e900";
}
.w-e-icon-fullscreen:before {
  content: "\\e901";
}
.w-e-icon-split-line:before {
  content: "\\ea0b";
}
.w-e-icon-checkbox-checked:before {
  content: "\\ea52";
}
`,
            ''
          ]),
            (o.exports = n)
        },
        function (o, n, t) {
          o.exports = function (e, i) {
            return (
              i || (i = {}),
              (e = e && e.__esModule ? e.default : e),
              typeof e != 'string'
                ? e
                : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                  i.hash && (e += i.hash),
                  /["'() \t\n]/.test(e) || i.needQuotes
                    ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"')
                    : e)
            )
          }
        },
        function (o, n, t) {
          t.r(n),
            (n.default =
              'data:font/woff;base64,d09GRgABAAAAABskAAsAAAAAGtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIPFWNtYXAAAAFoAAABHAAAARz2mfAgZ2FzcAAAAoQAAAAIAAAACAAAABBnbHlmAAACjAAAFXwAABV8IH7+mGhlYWQAABgIAAAANgAAADYb6gumaGhlYQAAGEAAAAAkAAAAJAkjBWlobXR4AAAYZAAAAKQAAACkmYcEbmxvY2EAABkIAAAAVAAAAFReAmKYbWF4cAAAGVwAAAAgAAAAIAA0ALZuYW1lAAAZfAAAAYYAAAGGmUoJ+3Bvc3QAABsEAAAAIAAAACAAAwAAAAMD7wGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA8fwDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAQAAAAA8ACAABAAcAAEAIOkB6QbpDekS6UfpZul36bnpu+m+6cbpy+nf6gvqDepS6lzqX+pl6nHqfPAN8BTxIPHc8fz//f//AAAAAAAg6QDpBukM6RLpR+ll6Xfpuem76b7pxunL6d/qC+oN6lLqXOpf6mLqcep38A3wFPEg8dzx/P/9//8AAf/jFwQXABb7FvcWwxamFpYWVRZUFlIWSxZHFjQWCRYIFcQVuxW5FbcVrBWnEBcQEQ8GDksOLAADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAAEAEEAAQO/A38ABQALABEAFwAAATMVIREzAxEhFSMVATUzESE1ETUhESM1Av/A/sJ+fgE+wP4Cfv7CAT5+Ar9+AT78ggE+fsACvsD+wn7+An7+wsAAAAAABABBAAEDvwN/AAUACwARABcAAAEhESM1IxM1MxEhNQERIRUjFREVMxUhEQKBAT5+wMB+/sL9wAE+wMD+wgN//sLA/X7A/sJ+AcIBPn7A/v7AfgE+AAAAAAIAAP/ABAADwAAEABMAAAE3AScBAy4BJxM3ASMBAyUBNQEHAYCAAcBA/kCfFzsyY4ABgMD+gMACgAGA/oBOAUBAAcBA/kD+nTI7FwERTgGA/oD9gMABgMD+gIAAAgAA/8AEAAOAACkALQAAAREjNTQmIyEiBh0BFBYzITI2PQEzESEVIyIGFREUFjsBMjY1ETQmKwE1ASE1IQQAwCYa/UAaJiYaAsAaJoD9wCANExMNgA0TEw0gAUD9QALAAYABgEAaJiYawBomJhpA/wCAEw3+wA0TEw0BQA0TQAGAQAAABAAAAAAEAAOAABAAIQAtADQAAAE4ATEROAExITgBMRE4ATEhNSEiBhURFBYzITI2NRE0JiMHFAYjIiY1NDYzMhYTITUTATM3A8D8gAOA/IAaJiYaA4AaJiYagDgoKDg4KCg4QP0A4AEAQOADQP0AAwBAJhr9ABomJhoDABom4Cg4OCgoODj9uIABgP7AwAAAAgAAAEAEAANAADgAPAAAASYnLgEnJiMiBw4BBwYHBgcOAQcGFRQXHgEXFhcWFx4BFxYzMjc+ATc2NzY3PgE3NjU0Jy4BJyYnARENAQPVNjg5djw9Pz89PHY5ODYLBwgLAwMDAwsIBws2ODl2PD0/Pz08djk4NgsHCAsDAwMDCwgHC/2rAUD+wAMgCAYGCAICAgIIBgYIKSoqWS0uLy8uLVkqKikIBgYIAgICAggGBggpKipZLS4vLy4tWSoqKf3gAYDAwAAAAAACAMD/wANAA8AAGwAnAAABIgcOAQcGFRQXHgEXFjEwNz4BNzY1NCcuAScmAyImNTQ2MzIWFRQGAgBCOzpXGRkyMngyMjIyeDIyGRlXOjtCUHBwUFBwcAPAGRlXOjtCeH19zEFBQUHMfX14Qjs6VxkZ/gBwUFBwcFBQcAAAAQAAAAAEAAOAACsAAAEiBw4BBwYHJxEhJz4BMzIXHgEXFhUUBw4BBwYHFzY3PgE3NjU0Jy4BJyYjAgA1MjJcKSkjlgGAkDWLUFBFRmkeHgkJIhgYHlUoICAtDAwoKIteXWoDgAoLJxscI5b+gJA0PB4eaUZFUCsoKUkgIRpgIysrYjY2OWpdXosoKAABAAAAAAQAA4AAKgAAExQXHgEXFhc3JicuAScmNTQ3PgE3NjMyFhcHIREHJicuAScmIyIHDgEHBgAMDC0gIChVHhgYIgkJHh5pRkVQUIs1kAGAliMpKVwyMjVqXV6LKCgBgDk2NmIrKyNgGiEgSSkoK1BFRmkeHjw0kAGAliMcGycLCigoi15dAAAAAAIAAABABAEDAAAmAE0AABMyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+ASEyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+AeEuKSk9ERISET0pKS4uKSk9ERIBIyN6UlFdQHUtCRAHCBICSS4pKT0REhIRPSkpLi4pKT0REgEjI3pSUV1AdS0JEAcIEgIAEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBAAAGAED/wAQAA8AAAwAHAAsAEQAdACkAACUhFSERIRUhESEVIScRIzUjNRMVMxUjNTc1IzUzFRURIzUzNSM1MzUjNQGAAoD9gAKA/YACgP2AwEBAQIDAgIDAwICAgICAgAIAgAIAgMD/AMBA/fIyQJI8MkCS7v7AQEBAQEAABgAA/8AEAAPAAAMABwALABcAIwAvAAABIRUhESEVIREhFSEBNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYBgAKA/YACgP2AAoD9gP6ASzU1S0s1NUtLNTVLSzU1S0s1NUtLNTVLA4CA/wCA/wCAA0A1S0s1NUtL/rU1S0s1NUtL/rU1S0s1NUtLAAUAAABABWADAAADAAcACwAOABEAABMhFSEVIRUhFSEVIQEXNzUnBwADgPyAA4D8gAOA/IAD4MDAwMADAMBAwEDAAUDAwEDAwAAAAAADAAAAAAQAA6AAAwANABQAADchFSElFSE1EyEVITUhJQkBIxEjEQAEAPwABAD8AIABAAEAAQD9YAEgASDggEBAwEBAAQCAgMABIP7g/wABAAAAAAACAB7/zAPiA7QAMwBkAAABIiYnJicmNDc2PwE+ATMyFhcWFxYUBwYPAQYiJyY0PwE2NCcuASMiBg8BBhQXFhQHDgEjAyImJyYnJjQ3Nj8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFxYUBwYPAQ4BIwG4ChMIIxISEhIjwCNZMTFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PCBMKuDFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PDysQIxISEhIjwCNZMQFECAckLS1eLS0kwCIlJSIkLS1eLS0kVxAQDysPWCl0KRQVFRTAKXQpDysQBwj+iCUiJC0tXi0tJFcQEA8rD1gpdCkUFRUUwCl0KQ8rEA8PJC0tXi0tJMAiJQAAAAAFAAD/wAQAA8AAGwA3AFMAXwBrAAAFMjc+ATc2NTQnLgEnJiMiBw4BBwYVFBceARcWEzIXHgEXFhUUBw4BBwYjIicuAScmNTQ3PgE3NhMyNz4BNzY3BgcOAQcGIyInLgEnJicWFx4BFxYnNDYzMhYVFAYjIiYlNDYzMhYVFAYjIiYCAGpdXosoKCgoi15dampdXosoKCgoi15dalZMTHEgISEgcUxMVlZMTHEgISEgcUxMVisrKlEmJiMFHBtWODc/Pzc4VhscBSMmJlEqK9UlGxslJRsbJQGAJRsbJSUbGyVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoA6AhIHFMTFZWTExxICEhIHFMTFZWTExxICH+CQYGFRAQFEM6OlYYGRkYVjo6QxQQEBUGBvcoODgoKDg4KCg4OCgoODgAAAEAAAFABAACQAAPAAATFRQWMyEyNj0BNCYjISIGABMNA8ANExMN/EANEwIgwA0TEw3ADRMTAAAAAwAA/8AEAAPAABsANwBDAAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmAyInLgEnJjU0Nz4BNzYzMhceARcWFRQHDgEHBhMHJwcXBxc3FzcnNwIAal1eiygoKCiLXl1qal1eiygoKCiLXl1qVkxMcSAhISBxTExWVkxMcSAhISBxTExKoKBgoKBgoKBgoKADwCgoi15dampdXosoKCgoi15dampdXosoKPxgISBxTExWVkxMcSAhISBxTExWVkxMcSAhAqCgoGCgoGCgoGCgoAACAAD/wAQAA8AADwAVAAABISIGFREUFjMhMjY1ETQmASc3FwEXA4D9ADVLSzUDADVLS/4L7VqTATNaA8BLNf0ANUtLNQMANUv85e5akgEyWgAAAAABAGX/wAObA8AAKQAAASImIyIHDgEHBhUUFjMuATU0NjcwBwYCBwYHFSETMzcjNx4BMzI2Nw4BAyBEaEZxU1RtGhtJSAYNZUoQEEs8PFkBPWzGLNc0LVUmLlAYHT0DsBAeHWE+P0FNOwsmN5lvA31+/sWPkCMZAgCA9gkPN2sJBwAAAAACAAAAAAQAA4AACQAXAAAlMwcnMxEjNxcjJREnIxEzFSE1MxEjBxEDgICgoICAoKCA/wBAwID+gIDAQMDAwAIAwMDA/wCA/UBAQALAgAEAAAMAwAAAA0ADgAAWAB8AKAAAAT4BNTQnLgEnJiMhESEyNz4BNzY1NCYBMzIWFRQGKwETIxEzMhYVFAYCxBwgFBRGLi81/sABgDUvLkYUFET+hGUqPDwpZp+fnyw+PgHbIlQvNS8uRhQU/IAUFEYuLzVGdAFGSzU1S/6AAQBLNTVLAAAAAAIAwAAAA0ADgAAfACMAAAEzERQHDgEHBiMiJy4BJyY1ETMRFBYXHgEzMjY3PgE1ASEVIQLAgBkZVzo7QkI7OlcZGYAbGBxJKChJHBgb/gACgP2AA4D+YDw0NU4WFxcWTjU0PAGg/mAeOBcYGxsYFzge/qCAAAAAAAEAgAAAA4ADgAALAAABFSMBMxUhNTMBIzUDgID+wID+QIABQIADgED9AEBAAwBAAAEAAAAABAADgAA9AAABFSMeARUUBgcOASMiJicuATUzFBYzMjY1NCYjITUhLgEnLgE1NDY3PgEzMhYXHgEVIzQmIyIGFRQWMzIWFwQA6xUWNTAscT4+cSwwNYByTk5yck7+AAEsAgQBMDU1MCxxPj5xLDA1gHJOTnJyTjtuKwHAQB1BIjViJCEkJCEkYjU0TEw0NExAAQMBJGI1NWIkISQkISRiNTRMTDQ0TCEfAAAACgAAAAAEAAOAAAMABwALAA8AEwAXABsAHwAjACcAABMRIREBNSEVHQEhNQEVITUjFSE1ESEVISUhFSERNSEVASEVISE1IRUABAD9gAEA/wABAP8AQP8AAQD/AAKAAQD/AAEA/IABAP8AAoABAAOA/IADgP3AwMBAwMACAMDAwMD/AMDAwAEAwMD+wMDAwAAABQAAAAAEAAOAAAMABwALAA8AEwAAEyEVIRUhFSERIRUhESEVIREhFSEABAD8AAKA/YACgP2ABAD8AAQA/AADgIBAgP8AgAFAgP8AgAAAAAAFAAAAAAQAA4AAAwAHAAsADwATAAATIRUhFyEVIREhFSEDIRUhESEVIQAEAPwAwAKA/YACgP2AwAQA/AAEAPwAA4CAQID/AIABQID/AIAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEFIRUhESEVIQEhFSERIRUhAAQA/AABgAKA/YACgP2A/oAEAPwABAD8AAOAgECA/wCAAUCA/wCAAAAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEVIRUhFSEVIRUhFSEVIRUhAAQA/AAEAPwABAD8AAQA/AAEAPwAA4CAQIBAgECAQIAAAAAGAAAAAAQAA4AAAwAHAAsADwATABYAABMhFSEFIRUhFSEVIRUhFSEFIRUhGQEFAAQA/AABgAKA/YACgP2AAoD9gP6ABAD8AAEAA4CAQIBAgECAQIABAAGAwAAAAAYAAAAABAADgAADAAcACwAPABMAFgAAEyEVIQUhFSEVIRUhFSEVIQUhFSEBESUABAD8AAGAAoD9gAKA/YACgP2A/oAEAPwAAQD/AAOAgECAQIBAgECAAoD+gMAAAQA/AD8C5gLmACwAACUUDwEGIyIvAQcGIyIvASY1ND8BJyY1ND8BNjMyHwE3NjMyHwEWFRQPARcWFQLmEE4QFxcQqKgQFxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQwxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQEE4QFxcQqKgQFwAAAAYAAAAAAyUDbgAUACgAPABNAFUAggAAAREUBwYrASInJjURNDc2OwEyFxYVMxEUBwYrASInJjURNDc2OwEyFxYXERQHBisBIicmNRE0NzY7ATIXFhMRIREUFxYXFjMhMjc2NzY1ASEnJicjBgcFFRQHBisBERQHBiMhIicmNREjIicmPQE0NzY7ATc2NzY7ATIXFh8BMzIXFhUBJQYFCCQIBQYGBQgkCAUGkgUFCCUIBQUFBQglCAUFkgUFCCUIBQUFBQglCAUFSf4ABAQFBAIB2wIEBAQE/oABABsEBrUGBAH3BgUINxobJv4lJhsbNwgFBQUFCLEoCBcWF7cXFhYJKLAIBQYCEv63CAUFBQUIAUkIBQYGBQj+twgFBQUFCAFJCAUGBgUI/rcIBQUFBQgBSQgFBgYF/lsCHf3jDQsKBQUFBQoLDQJmQwUCAgVVJAgGBf3jMCIjISIvAiAFBggkCAUFYBUPDw8PFWAFBQgAAgAHAEkDtwKvABoALgAACQEGIyIvASY1ND8BJyY1ND8BNjMyFwEWFRQHARUUBwYjISInJj0BNDc2MyEyFxYBTv72BgcIBR0GBuHhBgYdBQgHBgEKBgYCaQUFCP3bCAUFBQUIAiUIBQUBhf72BgYcBggHBuDhBgcHBh0FBf71BQgHBv77JQgFBQUFCCUIBQUFBQAAAAEAIwAAA90DbgCzAAAlIicmIyIHBiMiJyY1NDc2NzY3Njc2PQE0JyYjISIHBh0BFBcWFxYzFhcWFRQHBiMiJyYjIgcGIyInJjU0NzY3Njc2NzY9ARE0NTQ1NCc0JyYnJicmJyYnJiMiJyY1NDc2MzIXFjMyNzYzMhcWFRQHBiMGBwYHBh0BFBcWMyEyNzY9ATQnJicmJyY1NDc2MzIXFjMyNzYzMhcWFRQHBgciBwYHBhURFBcWFxYXMhcWFRQHBiMDwRkzMhoZMjMZDQgHCQoNDBEQChIBBxX+fhYHARUJEhMODgwLBwcOGzU1GhgxMRgNBwcJCQsMEA8JEgECAQIDBAQFCBIRDQ0KCwcHDho1NRoYMDEYDgcHCQoMDRAQCBQBBw8BkA4HARQKFxcPDgcHDhkzMhkZMTEZDgcHCgoNDRARCBQUCRERDg0KCwcHDgACAgICDAsPEQkJAQEDAwUMROAMBQMDBQzUUQ0GAQIBCAgSDwwNAgICAgwMDhEICQECAwMFDUUhAdACDQ0ICA4OCgoLCwcHAwYBAQgIEg8MDQICAgINDA8RCAgBAgEGDFC2DAcBAQcMtlAMBgEBBgcWDwwNAgICAg0MDxEICAEBAgYNT/3mRAwGAgIBCQgRDwwNAAACAAD/twP/A7cAEwA5AAABMhcWFRQHAgcGIyInJjU0NwE2MwEWFxYfARYHBiMiJyYnJicmNRYXFhcWFxYzMjc2NzY3Njc2NzY3A5soHh4avkw3RUg0NDUBbSEp/fgXJicvAQJMTHtHNjYhIRARBBMUEBASEQkXCA8SExUVHR0eHikDtxsaKCQz/plGNDU0SUkwAUsf/bErHx8NKHpNTBobLi86OkQDDw4LCwoKFiUbGhERCgsEBAIAAQAAAAAAAIWwaoFfDzz1AAsEAAAAAADbteOZAAAAANu145kAAP+3BWADwAAAAAgAAgAAAAAAAAABAAADwP/AAAAFgAAA//8FYAABAAAAAAAAAAAAAAAAAAAAKQQAAAAAAAAAAAAAAAIAAAAEAABBBAAAQQQAAAAEAAAABAAAAAQAAAAEAADABAAAAAQAAAAEAAAABAAAQAQAAAAFgAAABAAAAAQAAB4EAAAABAAAAAQAAAAEAAAABAAAZQQAAAAEAADABAAAwAQAAIAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAMlAD8DJQAAA74ABwQAACMD/wAAAAAAAAAKABQAHgBKAHYApADmAS4BkgHQAhYCXALQAw4DWAN+A6gEPgTeBPoFZAWOBdAF+AY6BnYGjgbmBy4HVgd+B6gHzgf8CCoIbgkmCXAKYgq+AAEAAAApALQACgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
        },
        function (o, n, t) {
          var e = t(20),
            i = t(153)
          ;(i = i.__esModule ? i.default : i), typeof i == 'string' && (i = [[o.i, i, '']])
          var r = {}
          ;(r.insert = 'head'), (r.singleton = !1), e(i, r), (o.exports = i.locals || {})
        },
        function (o, n, t) {
          var e = t(21)
          ;(n = e(!1)),
            n.push([
              o.i,
              `.w-e-toolbar {
  display: flex;
  padding: 0 6px;
  flex-wrap: wrap;
  position: relative;
  /* \u5355\u4E2A\u83DC\u5355 */
}
.w-e-toolbar .w-e-menu {
  position: relative;
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
}
.w-e-toolbar .w-e-menu i {
  color: #999;
}
.w-e-toolbar .w-e-menu:hover {
  background-color: #F6F6F6;
}
.w-e-toolbar .w-e-menu:hover i {
  color: #333;
}
.w-e-toolbar .w-e-active i {
  color: #1e88e5;
}
.w-e-toolbar .w-e-active:hover i {
  color: #1e88e5;
}
.w-e-menu-tooltip {
  position: absolute;
  display: flex;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 5px 6px;
  justify-content: center;
  align-items: center;
}
.w-e-menu-tooltip-up::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0.73);
}
.w-e-menu-tooltip-down::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.73);
}
.w-e-menu-tooltip-item-wrapper {
  font-size: 14px;
  margin: 0 5px;
}
`,
              ''
            ]),
            (o.exports = n)
        },
        function (o, n, t) {
          var e = t(20),
            i = t(155)
          ;(i = i.__esModule ? i.default : i), typeof i == 'string' && (i = [[o.i, i, '']])
          var r = {}
          ;(r.insert = 'head'), (r.singleton = !1), e(i, r), (o.exports = i.locals || {})
        },
        function (o, n, t) {
          var e = t(21)
          ;(n = e(!1)),
            n.push([
              o.i,
              `.w-e-text-container {
  position: relative;
  height: 100%;
}
.w-e-text-container .w-e-progress {
  position: absolute;
  background-color: #1e88e5;
  top: 0;
  left: 0;
  height: 1px;
}
.w-e-text-container .placeholder {
  color: #D4D4D4;
  position: absolute;
  font-size: 11pt;
  line-height: 22px;
  left: 10px;
  top: 10px;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  z-index: -1;
}
.w-e-text {
  padding: 0 10px;
  overflow-y: auto;
}
.w-e-text p,
.w-e-text h1,
.w-e-text h2,
.w-e-text h3,
.w-e-text h4,
.w-e-text h5,
.w-e-text table,
.w-e-text pre {
  margin: 10px 0;
  line-height: 1.5;
}
.w-e-text ul,
.w-e-text ol {
  margin: 10px 0 10px 20px;
}
.w-e-text blockquote {
  display: block;
  border-left: 8px solid #d0e5f2;
  padding: 5px 10px;
  margin: 10px 0;
  line-height: 1.4;
  font-size: 100%;
  background-color: #f1f1f1;
}
.w-e-text code {
  display: inline-block;
  background-color: #f1f1f1;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 0 3px;
}
.w-e-text pre code {
  display: block;
}
.w-e-text table {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
.w-e-text table td,
.w-e-text table th {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 3px 5px;
  min-height: 30px;
  height: 30px;
}
.w-e-text table th {
  border-bottom: 2px solid #ccc;
  text-align: center;
  background-color: #f1f1f1;
}
.w-e-text:focus {
  outline: none;
}
.w-e-text img {
  cursor: pointer;
}
.w-e-text img:hover {
  box-shadow: 0 0 5px #333;
}
.w-e-text .w-e-todo {
  margin: 0 0 0 20px;
}
.w-e-text .w-e-todo li {
  list-style: none;
  font-size: 1em;
}
.w-e-text .w-e-todo li span:nth-child(1) {
  position: relative;
  left: -18px;
}
.w-e-text .w-e-todo li span:nth-child(1) input {
  position: absolute;
  margin-right: 3px;
}
.w-e-text .w-e-todo li span:nth-child(1) input[type=checkbox] {
  top: 50%;
  margin-top: -6px;
}
.w-e-tooltip {
  position: absolute;
  display: flex;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 5px 6px;
  justify-content: center;
  align-items: center;
}
.w-e-tooltip-up::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0.73);
}
.w-e-tooltip-down::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.73);
}
.w-e-tooltip-item-wrapper {
  cursor: pointer;
  font-size: 14px;
  margin: 0 5px;
}
.w-e-tooltip-item-wrapper:hover {
  color: #ccc;
  text-decoration: underline;
}
`,
              ''
            ]),
            (o.exports = n)
        },
        function (o, n, t) {
          var e = t(20),
            i = t(157)
          ;(i = i.__esModule ? i.default : i), typeof i == 'string' && (i = [[o.i, i, '']])
          var r = {}
          ;(r.insert = 'head'), (r.singleton = !1), e(i, r), (o.exports = i.locals || {})
        },
        function (o, n, t) {
          var e = t(21)
          ;(n = e(!1)),
            n.push([
              o.i,
              `.w-e-menu .w-e-panel-container {
  position: absolute;
  top: 0;
  left: 50%;
  border: 1px solid #ccc;
  border-top: 0;
  box-shadow: 1px 1px 2px #ccc;
  color: #333;
  background-color: #fff;
  text-align: left;
  /* \u4E3A emotion panel \u5B9A\u5236\u7684\u6837\u5F0F */
  /* \u4E0A\u4F20\u56FE\u7247\u3001\u4E0A\u4F20\u89C6\u9891\u7684 panel \u5B9A\u5236\u6837\u5F0F */
}
.w-e-menu .w-e-panel-container .w-e-panel-close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px;
  margin: 2px 5px 0 0;
  cursor: pointer;
  color: #999;
}
.w-e-menu .w-e-panel-container .w-e-panel-close:hover {
  color: #333;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title {
  list-style: none;
  display: flex;
  font-size: 14px;
  margin: 2px 10px 0 10px;
  border-bottom: 1px solid #f1f1f1;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-item {
  padding: 3px 5px;
  color: #999;
  cursor: pointer;
  margin: 0 3px;
  position: relative;
  top: 1px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-active {
  color: #333;
  border-bottom: 1px solid #333;
  cursor: default;
  font-weight: 700;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content {
  padding: 10px 15px 10px 15px;
  font-size: 16px;
  /* \u8F93\u5165\u6846\u7684\u6837\u5F0F */
  /* \u6309\u94AE\u7684\u6837\u5F0F */
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input:focus,
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus,
.w-e-menu .w-e-panel-container .w-e-panel-tab-content button:focus {
  outline: none;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea {
  width: 100%;
  border: 1px solid #ccc;
  padding: 5px;
  margin-top: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus {
  border-color: #1e88e5;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text] {
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  height: 20px;
  color: #333;
  text-align: left;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].small {
  width: 30px;
  text-align: center;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].block {
  display: block;
  width: 100%;
  margin: 10px 0;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text]:focus {
  border-bottom: 2px solid #1e88e5;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button {
  font-size: 14px;
  color: #1e88e5;
  border: none;
  padding: 5px 10px;
  background-color: #fff;
  cursor: pointer;
  border-radius: 3px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.left {
  float: left;
  margin-right: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.right {
  float: right;
  margin-left: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.gray {
  color: #999;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.red {
  color: #c24f4a;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button:hover {
  background-color: #f1f1f1;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container:after {
  content: "";
  display: table;
  clear: both;
}
.w-e-menu .w-e-panel-container .w-e-emoticon-container .w-e-item {
  cursor: pointer;
  font-size: 18px;
  padding: 0 3px;
  display: inline-block;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container,
.w-e-menu .w-e-panel-container .w-e-up-video-container {
  text-align: center;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn,
.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn {
  display: inline-block;
  color: #999;
  cursor: pointer;
  font-size: 60px;
  line-height: 1;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn:hover,
.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn:hover {
  color: #333;
}
`,
              ''
            ]),
            (o.exports = n)
        },
        function (o, n, t) {
          var e = t(20),
            i = t(159)
          ;(i = i.__esModule ? i.default : i), typeof i == 'string' && (i = [[o.i, i, '']])
          var r = {}
          ;(r.insert = 'head'), (r.singleton = !1), e(i, r), (o.exports = i.locals || {})
        },
        function (o, n, t) {
          var e = t(21)
          ;(n = e(!1)),
            n.push([
              o.i,
              `.w-e-toolbar .w-e-droplist {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  border-right-color: #ccc;
  border-bottom-color: #ccc;
}
.w-e-toolbar .w-e-droplist .w-e-dp-title {
  text-align: center;
  color: #999;
  line-height: 2;
  border-bottom: 1px solid #f1f1f1;
  font-size: 13px;
}
.w-e-toolbar .w-e-droplist ul.w-e-list {
  list-style: none;
  line-height: 1;
}
.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item {
  color: #333;
  padding: 5px 0;
}
.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item:hover {
  background-color: #f1f1f1;
}
.w-e-toolbar .w-e-droplist ul.w-e-block {
  list-style: none;
  text-align: left;
  padding: 5px;
}
.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item {
  display: inline-block;
  padding: 3px 5px;
}
.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item:hover {
  background-color: #f1f1f1;
}
`,
              ''
            ]),
            (o.exports = n)
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(161))
          Element.prototype.matches ||
            (Element.prototype.matches = function (r) {
              var a = this.ownerDocument.querySelectorAll(r),
                c = a.length
              for (c; c >= 0 && a.item(c) !== this; c--);
              return c > -1
            }),
            i.default || (window.Promise = i.default)
        },
        function (o, n, t) {
          o.exports = t(162)
        },
        function (o, n, t) {
          var e = t(163)
          o.exports = e
        },
        function (o, n, t) {
          t(61), t(50), t(54), t(175), t(178), t(179)
          var e = t(9)
          o.exports = e.Promise
        },
        function (o, n, t) {
          var e = t(62),
            i = t(49),
            r = function (a) {
              return function (c, A) {
                var d = String(i(c)),
                  h = e(A),
                  f = d.length,
                  l,
                  u
                return h < 0 || h >= f
                  ? a
                    ? ''
                    : void 0
                  : ((l = d.charCodeAt(h)),
                    l < 55296 ||
                    l > 56319 ||
                    h + 1 === f ||
                    (u = d.charCodeAt(h + 1)) < 56320 ||
                    u > 57343
                      ? a
                        ? d.charAt(h)
                        : l
                      : a
                      ? d.slice(h, h + 2)
                      : ((l - 55296) << 10) + (u - 56320) + 65536)
              }
            }
          o.exports = { codeAt: r(!1), charAt: r(!0) }
        },
        function (o, n, t) {
          var e = t(8),
            i = t(102),
            r = e.WeakMap
          o.exports = typeof r == 'function' && /native code/.test(i(r))
        },
        function (o, n, t) {
          var e = t(8),
            i = t(19)
          o.exports = function (r, a) {
            try {
              i(e, r, a)
            } catch {
              e[r] = a
            }
            return a
          }
        },
        function (o, n, t) {
          var e = t(104).IteratorPrototype,
            i = t(77),
            r = t(48),
            a = t(37),
            c = t(44),
            A = function () {
              return this
            }
          o.exports = function (d, h, f) {
            var l = h + ' Iterator'
            return (d.prototype = i(e, { next: r(1, f) })), a(d, l, !1, !0), (c[l] = A), d
          }
        },
        function (o, n, t) {
          var e = t(11)
          o.exports = !e(function () {
            function i() {}
            return (i.prototype.constructor = null), Object.getPrototypeOf(new i()) !== i.prototype
          })
        },
        function (o, n, t) {
          var e = t(14),
            i = t(18),
            r = t(25),
            a = t(52)
          o.exports = e
            ? Object.defineProperties
            : function (A, d) {
                r(A)
                for (var h = a(d), f = h.length, l = 0, u; f > l; ) i.f(A, (u = h[l++]), d[u])
                return A
              }
        },
        function (o, n, t) {
          var e = t(81),
            i = t(65)
          o.exports = e
            ? {}.toString
            : function () {
                return '[object ' + i(this) + ']'
              }
        },
        function (o, n, t) {
          var e = t(25),
            i = t(172)
          o.exports =
            Object.setPrototypeOf ||
            ('__proto__' in {}
              ? (function () {
                  var r = !1,
                    a = {},
                    c
                  try {
                    ;(c = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set),
                      c.call(a, []),
                      (r = a instanceof Array)
                  } catch {}
                  return function (d, h) {
                    return e(d), i(h), r ? c.call(d, h) : (d.__proto__ = h), d
                  }
                })()
              : void 0)
        },
        function (o, n, t) {
          var e = t(13)
          o.exports = function (i) {
            if (!e(i) && i !== null) throw TypeError("Can't set " + String(i) + ' as a prototype')
            return i
          }
        },
        function (o, n, t) {
          var e = t(30),
            i = t(82),
            r = t(44),
            a = t(42),
            c = t(75),
            A = 'Array Iterator',
            d = a.set,
            h = a.getterFor(A)
          ;(o.exports = c(
            Array,
            'Array',
            function (f, l) {
              d(this, { type: A, target: e(f), index: 0, kind: l })
            },
            function () {
              var f = h(this),
                l = f.target,
                u = f.kind,
                s = f.index++
              return !l || s >= l.length
                ? ((f.target = void 0), { value: void 0, done: !0 })
                : u == 'keys'
                ? { value: s, done: !1 }
                : u == 'values'
                ? { value: l[s], done: !1 }
                : { value: [s, l[s]], done: !1 }
            },
            'values'
          )),
            (r.Arguments = r.Array),
            i('keys'),
            i('values'),
            i('entries')
        },
        function (o, n) {
          o.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
          }
        },
        function (o, n, t) {
          var e = t(5),
            i = t(43),
            r = t(8),
            a = t(36),
            c = t(109),
            A = t(53),
            d = t(110),
            h = t(37),
            f = t(111),
            l = t(13),
            u = t(41),
            s = t(83),
            p = t(34),
            v = t(102),
            m = t(66),
            g = t(115),
            y = t(116),
            x = t(117).set,
            S = t(176),
            D = t(119),
            P = t(177),
            C = t(85),
            E = t(120),
            T = t(42),
            R = t(101),
            N = t(10),
            M = t(86),
            B = N('species'),
            F = 'Promise',
            O = T.get,
            b = T.set,
            $ = T.getterFor(F),
            H = c,
            U = r.TypeError,
            K = r.document,
            w = r.process,
            X = a('fetch'),
            J = C.f,
            Q = J,
            V = p(w) == 'process',
            W = !!(K && K.createEvent && r.dispatchEvent),
            q = 'unhandledrejection',
            rt = 'rejectionhandled',
            it = 0,
            dt = 1,
            Zt = 2,
            ut = 1,
            Ut = 2,
            Mt,
            ft,
            ht,
            Nt,
            mt = R(F, function () {
              var Z = v(H) !== String(H)
              if (
                (!Z && (M === 66 || (!V && typeof PromiseRejectionEvent != 'function'))) ||
                (i && !H.prototype.finally)
              )
                return !0
              if (M >= 51 && /native code/.test(H)) return !1
              var Y = H.resolve(1),
                _ = function (G) {
                  G(
                    function () {},
                    function () {}
                  )
                },
                et = (Y.constructor = {})
              return (et[B] = _), !(Y.then(function () {}) instanceof _)
            }),
            he =
              mt ||
              !g(function (Z) {
                H.all(Z).catch(function () {})
              }),
            Bt = function (Z) {
              var Y
              return l(Z) && typeof (Y = Z.then) == 'function' ? Y : !1
            },
            St = function (Z, Y, _) {
              if (!Y.notified) {
                Y.notified = !0
                var et = Y.reactions
                S(function () {
                  for (var G = Y.value, z = Y.state == dt, k = 0; et.length > k; ) {
                    var tt = et[k++],
                      nt = z ? tt.ok : tt.fail,
                      lt = tt.resolve,
                      ct = tt.reject,
                      pt = tt.domain,
                      st,
                      Qt,
                      kt
                    try {
                      nt
                        ? (z || (Y.rejection === Ut && Lt(Z, Y), (Y.rejection = ut)),
                          nt === !0
                            ? (st = G)
                            : (pt && pt.enter(), (st = nt(G)), pt && (pt.exit(), (kt = !0))),
                          st === tt.promise
                            ? ct(U('Promise-chain cycle'))
                            : (Qt = Bt(st))
                            ? Qt.call(st, lt, ct)
                            : lt(st))
                        : ct(G)
                    } catch (Gf) {
                      pt && !kt && pt.exit(), ct(Gf)
                    }
                  }
                  ;(Y.reactions = []), (Y.notified = !1), _ && !Y.rejection && wt(Z, Y)
                })
              }
            },
            Ft = function (Z, Y, _) {
              var et, G
              W
                ? ((et = K.createEvent('Event')),
                  (et.promise = Y),
                  (et.reason = _),
                  et.initEvent(Z, !1, !0),
                  r.dispatchEvent(et))
                : (et = { promise: Y, reason: _ }),
                (G = r['on' + Z]) ? G(et) : Z === q && P('Unhandled promise rejection', _)
            },
            wt = function (Z, Y) {
              x.call(r, function () {
                var _ = Y.value,
                  et = Ot(Y),
                  G
                if (
                  et &&
                  ((G = E(function () {
                    V ? w.emit('unhandledRejection', _, Z) : Ft(q, Z, _)
                  })),
                  (Y.rejection = V || Ot(Y) ? Ut : ut),
                  G.error)
                )
                  throw G.value
              })
            },
            Ot = function (Z) {
              return Z.rejection !== ut && !Z.parent
            },
            Lt = function (Z, Y) {
              x.call(r, function () {
                V ? w.emit('rejectionHandled', Z) : Ft(rt, Z, Y.value)
              })
            },
            gt = function (Z, Y, _, et) {
              return function (G) {
                Z(Y, _, G, et)
              }
            },
            yt = function (Z, Y, _, et) {
              Y.done || ((Y.done = !0), et && (Y = et), (Y.value = _), (Y.state = Zt), St(Z, Y, !0))
            },
            Ct = function (Z, Y, _, et) {
              if (!Y.done) {
                ;(Y.done = !0), et && (Y = et)
                try {
                  if (Z === _) throw U("Promise can't be resolved itself")
                  var G = Bt(_)
                  G
                    ? S(function () {
                        var z = { done: !1 }
                        try {
                          G.call(_, gt(Ct, Z, z, Y), gt(yt, Z, z, Y))
                        } catch (k) {
                          yt(Z, z, k, Y)
                        }
                      })
                    : ((Y.value = _), (Y.state = dt), St(Z, Y, !1))
                } catch (z) {
                  yt(Z, { done: !1 }, z, Y)
                }
              }
            }
          mt &&
            ((H = function (Y) {
              s(this, H, F), u(Y), Mt.call(this)
              var _ = O(this)
              try {
                Y(gt(Ct, this, _), gt(yt, this, _))
              } catch (et) {
                yt(this, _, et)
              }
            }),
            (Mt = function (Y) {
              b(this, {
                type: F,
                done: !1,
                notified: !1,
                parent: !1,
                reactions: [],
                rejection: !1,
                state: it,
                value: void 0
              })
            }),
            (Mt.prototype = d(H.prototype, {
              then: function (Y, _) {
                var et = $(this),
                  G = J(y(this, H))
                return (
                  (G.ok = typeof Y == 'function' ? Y : !0),
                  (G.fail = typeof _ == 'function' && _),
                  (G.domain = V ? w.domain : void 0),
                  (et.parent = !0),
                  et.reactions.push(G),
                  et.state != it && St(this, et, !1),
                  G.promise
                )
              },
              catch: function (Z) {
                return this.then(void 0, Z)
              }
            })),
            (ft = function () {
              var Z = new Mt(),
                Y = O(Z)
              ;(this.promise = Z), (this.resolve = gt(Ct, Z, Y)), (this.reject = gt(yt, Z, Y))
            }),
            (C.f = J =
              function (Z) {
                return Z === H || Z === ht ? new ft(Z) : Q(Z)
              }),
            !i &&
              typeof c == 'function' &&
              ((Nt = c.prototype.then),
              A(
                c.prototype,
                'then',
                function (Y, _) {
                  var et = this
                  return new H(function (G, z) {
                    Nt.call(et, G, z)
                  }).then(Y, _)
                },
                { unsafe: !0 }
              ),
              typeof X == 'function' &&
                e(
                  { global: !0, enumerable: !0, forced: !0 },
                  {
                    fetch: function (Y) {
                      return D(H, X.apply(r, arguments))
                    }
                  }
                ))),
            e({ global: !0, wrap: !0, forced: mt }, { Promise: H }),
            h(H, F, !1, !0),
            f(F),
            (ht = a(F)),
            e(
              { target: F, stat: !0, forced: mt },
              {
                reject: function (Y) {
                  var _ = J(this)
                  return _.reject.call(void 0, Y), _.promise
                }
              }
            ),
            e(
              { target: F, stat: !0, forced: i || mt },
              {
                resolve: function (Y) {
                  return D(i && this === ht ? H : this, Y)
                }
              }
            ),
            e(
              { target: F, stat: !0, forced: he },
              {
                all: function (Y) {
                  var _ = this,
                    et = J(_),
                    G = et.resolve,
                    z = et.reject,
                    k = E(function () {
                      var tt = u(_.resolve),
                        nt = [],
                        lt = 0,
                        ct = 1
                      m(Y, function (pt) {
                        var st = lt++,
                          Qt = !1
                        nt.push(void 0),
                          ct++,
                          tt.call(_, pt).then(function (kt) {
                            Qt || ((Qt = !0), (nt[st] = kt), --ct || G(nt))
                          }, z)
                      }),
                        --ct || G(nt)
                    })
                  return k.error && z(k.value), et.promise
                },
                race: function (Y) {
                  var _ = this,
                    et = J(_),
                    G = et.reject,
                    z = E(function () {
                      var k = u(_.resolve)
                      m(Y, function (tt) {
                        k.call(_, tt).then(et.resolve, G)
                      })
                    })
                  return z.error && G(z.value), et.promise
                }
              }
            )
        },
        function (o, n, t) {
          var e = t(8),
            i = t(71).f,
            r = t(34),
            a = t(117).set,
            c = t(118),
            A = e.MutationObserver || e.WebKitMutationObserver,
            d = e.process,
            h = e.Promise,
            f = r(d) == 'process',
            l = i(e, 'queueMicrotask'),
            u = l && l.value,
            s,
            p,
            v,
            m,
            g,
            y,
            x,
            S
          u ||
            ((s = function () {
              var D, P
              for (f && (D = d.domain) && D.exit(); p; ) {
                ;(P = p.fn), (p = p.next)
                try {
                  P()
                } catch (C) {
                  throw (p ? m() : (v = void 0), C)
                }
              }
              ;(v = void 0), D && D.enter()
            }),
            f
              ? (m = function () {
                  d.nextTick(s)
                })
              : A && !c
              ? ((g = !0),
                (y = document.createTextNode('')),
                new A(s).observe(y, { characterData: !0 }),
                (m = function () {
                  y.data = g = !g
                }))
              : h && h.resolve
              ? ((x = h.resolve(void 0)),
                (S = x.then),
                (m = function () {
                  S.call(x, s)
                }))
              : (m = function () {
                  a.call(e, s)
                })),
            (o.exports =
              u ||
              function (D) {
                var P = { fn: D, next: void 0 }
                v && (v.next = P), p || ((p = P), m()), (v = P)
              })
        },
        function (o, n, t) {
          var e = t(8)
          o.exports = function (i, r) {
            var a = e.console
            a && a.error && (arguments.length === 1 ? a.error(i) : a.error(i, r))
          }
        },
        function (o, n, t) {
          var e = t(5),
            i = t(41),
            r = t(85),
            a = t(120),
            c = t(66)
          e(
            { target: 'Promise', stat: !0 },
            {
              allSettled: function (d) {
                var h = this,
                  f = r.f(h),
                  l = f.resolve,
                  u = f.reject,
                  s = a(function () {
                    var p = i(h.resolve),
                      v = [],
                      m = 0,
                      g = 1
                    c(d, function (y) {
                      var x = m++,
                        S = !1
                      v.push(void 0),
                        g++,
                        p.call(h, y).then(
                          function (D) {
                            S || ((S = !0), (v[x] = { status: 'fulfilled', value: D }), --g || l(v))
                          },
                          function (D) {
                            S || ((S = !0), (v[x] = { status: 'rejected', reason: D }), --g || l(v))
                          }
                        )
                    }),
                      --g || l(v)
                  })
                return s.error && u(s.value), f.promise
              }
            }
          )
        },
        function (o, n, t) {
          var e = t(5),
            i = t(43),
            r = t(109),
            a = t(11),
            c = t(36),
            A = t(116),
            d = t(119),
            h = t(53),
            f =
              !!r &&
              a(function () {
                r.prototype.finally.call({ then: function () {} }, function () {})
              })
          e(
            { target: 'Promise', proto: !0, real: !0, forced: f },
            {
              finally: function (l) {
                var u = A(this, c('Promise')),
                  s = typeof l == 'function'
                return this.then(
                  s
                    ? function (p) {
                        return d(u, l()).then(function () {
                          return p
                        })
                      }
                    : l,
                  s
                    ? function (p) {
                        return d(u, l()).then(function () {
                          throw p
                        })
                      }
                    : l
                )
              }
            }
          ),
            !i &&
              typeof r == 'function' &&
              !r.prototype.finally &&
              h(r.prototype, 'finally', c('Promise').prototype.finally)
        },
        function (o, n, t) {
          t(54)
          var e = t(181),
            i = t(65),
            r = Array.prototype,
            a = { DOMTokenList: !0, NodeList: !0 }
          o.exports = function (c) {
            var A = c.forEach
            return c === r || (c instanceof Array && A === r.forEach) || a.hasOwnProperty(i(c))
              ? e
              : A
          }
        },
        function (o, n, t) {
          var e = t(182)
          o.exports = e
        },
        function (o, n, t) {
          t(183)
          var e = t(15)
          o.exports = e('Array').forEach
        },
        function (o, n, t) {
          var e = t(5),
            i = t(184)
          e({ target: 'Array', proto: !0, forced: [].forEach != i }, { forEach: i })
        },
        function (o, n, t) {
          var e = t(32).forEach,
            i = t(67),
            r = t(22),
            a = i('forEach'),
            c = r('forEach')
          o.exports =
            !a || !c
              ? function (d) {
                  return e(this, d, arguments.length > 1 ? arguments[1] : void 0)
                }
              : [].forEach
        },
        function (o, n, t) {
          var e = t(186)
          o.exports = e
        },
        function (o, n, t) {
          t(187)
          var e = t(9)
          o.exports = e.Array.isArray
        },
        function (o, n, t) {
          var e = t(5),
            i = t(55)
          e({ target: 'Array', stat: !0 }, { isArray: i })
        },
        function (o, n, t) {
          var e = t(189)
          o.exports = e
        },
        function (o, n, t) {
          var e = t(190),
            i = Array.prototype
          o.exports = function (r) {
            var a = r.map
            return r === i || (r instanceof Array && a === i.map) ? e : a
          }
        },
        function (o, n, t) {
          t(191)
          var e = t(15)
          o.exports = e('Array').map
        },
        function (o, n, t) {
          var e = t(5),
            i = t(32).map,
            r = t(56),
            a = t(22),
            c = r('map'),
            A = a('map')
          e(
            { target: 'Array', proto: !0, forced: !c || !A },
            {
              map: function (h) {
                return i(this, h, arguments.length > 1 ? arguments[1] : void 0)
              }
            }
          )
        },
        function (o, n, t) {
          var e = t(193)
          o.exports = e
        },
        function (o, n, t) {
          var e = t(194),
            i = String.prototype
          o.exports = function (r) {
            var a = r.trim
            return typeof r == 'string' || r === i || (r instanceof String && a === i.trim) ? e : a
          }
        },
        function (o, n, t) {
          t(195)
          var e = t(15)
          o.exports = e('String').trim
        },
        function (o, n, t) {
          var e = t(5),
            i = t(90).trim,
            r = t(196)
          e(
            { target: 'String', proto: !0, forced: r('trim') },
            {
              trim: function () {
                return i(this)
              }
            }
          )
        },
        function (o, n, t) {
          var e = t(11),
            i = t(68),
            r = '\u200B\x85\u180E'
          o.exports = function (a) {
            return e(function () {
              return !!i[a]() || r[a]() != r || i[a].name !== a
            })
          }
        },
        function (o, n, t) {
          var e = t(198)
          o.exports = e
        },
        function (o, n, t) {
          t(199), t(61), t(50), t(54)
          var e = t(9)
          o.exports = e.Map
        },
        function (o, n, t) {
          var e = t(122),
            i = t(124)
          o.exports = e(
            'Map',
            function (r) {
              return function () {
                return r(this, arguments.length ? arguments[0] : void 0)
              }
            },
            i
          )
        },
        function (o, n, t) {
          var e = t(11)
          o.exports = !e(function () {
            return Object.isExtensible(Object.preventExtensions({}))
          })
        },
        function (o, n, t) {
          var e = t(202)
          o.exports = e
        },
        function (o, n, t) {
          var e = t(203),
            i = Array.prototype
          o.exports = function (r) {
            var a = r.indexOf
            return r === i || (r instanceof Array && a === i.indexOf) ? e : a
          }
        },
        function (o, n, t) {
          t(204)
          var e = t(15)
          o.exports = e('Array').indexOf
        },
        function (o, n, t) {
          var e = t(5),
            i = t(78).indexOf,
            r = t(67),
            a = t(22),
            c = [].indexOf,
            A = !!c && 1 / [1].indexOf(1, -0) < 0,
            d = r('indexOf'),
            h = a('indexOf', { ACCESSORS: !0, 1: 0 })
          e(
            { target: 'Array', proto: !0, forced: A || !d || !h },
            {
              indexOf: function (l) {
                return A
                  ? c.apply(this, arguments) || 0
                  : i(this, l, arguments.length > 1 ? arguments[1] : void 0)
              }
            }
          )
        },
        function (o, n, t) {
          var e = t(206)
          o.exports = e
        },
        function (o, n, t) {
          var e = t(207),
            i = Array.prototype
          o.exports = function (r) {
            var a = r.splice
            return r === i || (r instanceof Array && a === i.splice) ? e : a
          }
        },
        function (o, n, t) {
          t(208)
          var e = t(15)
          o.exports = e('Array').splice
        },
        function (o, n, t) {
          var e = t(5),
            i = t(79),
            r = t(62),
            a = t(35),
            c = t(31),
            A = t(88),
            d = t(69),
            h = t(56),
            f = t(22),
            l = h('splice'),
            u = f('splice', { ACCESSORS: !0, 0: 0, 1: 2 }),
            s = Math.max,
            p = Math.min,
            v = 9007199254740991,
            m = 'Maximum allowed length exceeded'
          e(
            { target: 'Array', proto: !0, forced: !l || !u },
            {
              splice: function (y, x) {
                var S = c(this),
                  D = a(S.length),
                  P = i(y, D),
                  C = arguments.length,
                  E,
                  T,
                  R,
                  N,
                  M,
                  B
                if (
                  (C === 0
                    ? (E = T = 0)
                    : C === 1
                    ? ((E = 0), (T = D - P))
                    : ((E = C - 2), (T = p(s(r(x), 0), D - P))),
                  D + E - T > v)
                )
                  throw TypeError(m)
                for (R = A(S, T), N = 0; N < T; N++) (M = P + N), M in S && d(R, N, S[M])
                if (((R.length = T), E < T)) {
                  for (N = P; N < D - T; N++)
                    (M = N + T), (B = N + E), M in S ? (S[B] = S[M]) : delete S[B]
                  for (N = D; N > D - T + E; N--) delete S[N - 1]
                } else if (E > T)
                  for (N = D - T; N > P; N--)
                    (M = N + T - 1), (B = N + E - 1), M in S ? (S[B] = S[M]) : delete S[B]
                for (N = 0; N < E; N++) S[N + P] = arguments[N + 2]
                return (S.length = D - T + E), R
              }
            }
          )
        },
        function (o, n, t) {
          var e = t(210)
          o.exports = e
        },
        function (o, n, t) {
          var e = t(211),
            i = Array.prototype
          o.exports = function (r) {
            var a = r.filter
            return r === i || (r instanceof Array && a === i.filter) ? e : a
          }
        },
        function (o, n, t) {
          t(212)
          var e = t(15)
          o.exports = e('Array').filter
        },
        function (o, n, t) {
          var e = t(5),
            i = t(32).filter,
            r = t(56),
            a = t(22),
            c = r('filter'),
            A = a('filter')
          e(
            { target: 'Array', proto: !0, forced: !c || !A },
            {
              filter: function (h) {
                return i(this, h, arguments.length > 1 ? arguments[1] : void 0)
              }
            }
          )
        },
        function (o, n, t) {
          var e = t(214)
          o.exports = e
        },
        function (o, n, t) {
          var e = t(215),
            i = t(217),
            r = Array.prototype,
            a = String.prototype
          o.exports = function (c) {
            var A = c.includes
            return c === r || (c instanceof Array && A === r.includes)
              ? e
              : typeof c == 'string' || c === a || (c instanceof String && A === a.includes)
              ? i
              : A
          }
        },
        function (o, n, t) {
          t(216)
          var e = t(15)
          o.exports = e('Array').includes
        },
        function (o, n, t) {
          var e = t(5),
            i = t(78).includes,
            r = t(82),
            a = t(22),
            c = a('indexOf', { ACCESSORS: !0, 1: 0 })
          e(
            { target: 'Array', proto: !0, forced: !c },
            {
              includes: function (d) {
                return i(this, d, arguments.length > 1 ? arguments[1] : void 0)
              }
            }
          ),
            r('includes')
        },
        function (o, n, t) {
          t(218)
          var e = t(15)
          o.exports = e('String').includes
        },
        function (o, n, t) {
          var e = t(5),
            i = t(219),
            r = t(49),
            a = t(221)
          e(
            { target: 'String', proto: !0, forced: !a('includes') },
            {
              includes: function (A) {
                return !!~String(r(this)).indexOf(
                  i(A),
                  arguments.length > 1 ? arguments[1] : void 0
                )
              }
            }
          )
        },
        function (o, n, t) {
          var e = t(220)
          o.exports = function (i) {
            if (e(i)) throw TypeError("The method doesn't accept regular expressions")
            return i
          }
        },
        function (o, n, t) {
          var e = t(13),
            i = t(34),
            r = t(10),
            a = r('match')
          o.exports = function (c) {
            var A
            return e(c) && ((A = c[a]) !== void 0 ? !!A : i(c) == 'RegExp')
          }
        },
        function (o, n, t) {
          var e = t(10),
            i = e('match')
          o.exports = function (r) {
            var a = /./
            try {
              '/./'[r](a)
            } catch {
              try {
                return (a[i] = !1), '/./'[r](a)
              } catch {}
            }
            return !1
          }
        },
        function (o, n, t) {
          var e = t(223)
          o.exports = e
        },
        function (o, n, t) {
          var e = t(224),
            i = Function.prototype
          o.exports = function (r) {
            var a = r.bind
            return r === i || (r instanceof Function && a === i.bind) ? e : a
          }
        },
        function (o, n, t) {
          t(225)
          var e = t(15)
          o.exports = e('Function').bind
        },
        function (o, n, t) {
          var e = t(5),
            i = t(226)
          e({ target: 'Function', proto: !0 }, { bind: i })
        },
        function (o, n, t) {
          var e = t(41),
            i = t(13),
            r = [].slice,
            a = {},
            c = function (A, d, h) {
              if (!(d in a)) {
                for (var f = [], l = 0; l < d; l++) f[l] = 'a[' + l + ']'
                a[d] = Function('C,a', 'return new C(' + f.join(',') + ')')
              }
              return a[d](A, h)
            }
          o.exports =
            Function.bind ||
            function (d) {
              var h = e(this),
                f = r.call(arguments, 1),
                l = function () {
                  var s = f.concat(r.call(arguments))
                  return this instanceof l ? c(h, s.length, s) : h.apply(d, s)
                }
              return i(h.prototype) && (l.prototype = h.prototype), l
            }
        },
        function (o, n, t) {
          o.exports = t(228)
        },
        function (o, n, t) {
          var e = t(229)
          o.exports = e
        },
        function (o, n, t) {
          t(125), t(50), t(54)
          var e = t(93)
          o.exports = e.f('iterator')
        },
        function (o, n, t) {
          o.exports = t(231)
        },
        function (o, n, t) {
          var e = t(232)
          t(251), t(252), t(253), t(254), t(255), (o.exports = e)
        },
        function (o, n, t) {
          t(233),
            t(61),
            t(234),
            t(236),
            t(237),
            t(238),
            t(239),
            t(125),
            t(240),
            t(241),
            t(242),
            t(243),
            t(244),
            t(245),
            t(246),
            t(247),
            t(248),
            t(249),
            t(250)
          var e = t(9)
          o.exports = e.Symbol
        },
        function (o, n, t) {
          var e = t(5),
            i = t(11),
            r = t(55),
            a = t(13),
            c = t(31),
            A = t(35),
            d = t(69),
            h = t(88),
            f = t(56),
            l = t(10),
            u = t(86),
            s = l('isConcatSpreadable'),
            p = 9007199254740991,
            v = 'Maximum allowed index exceeded',
            m =
              u >= 51 ||
              !i(function () {
                var S = []
                return (S[s] = !1), S.concat()[0] !== S
              }),
            g = f('concat'),
            y = function (S) {
              if (!a(S)) return !1
              var D = S[s]
              return D !== void 0 ? !!D : r(S)
            },
            x = !m || !g
          e(
            { target: 'Array', proto: !0, forced: x },
            {
              concat: function (D) {
                var P = c(this),
                  C = h(P, 0),
                  E = 0,
                  T,
                  R,
                  N,
                  M,
                  B
                for (T = -1, N = arguments.length; T < N; T++)
                  if (((B = T === -1 ? P : arguments[T]), y(B))) {
                    if (((M = A(B.length)), E + M > p)) throw TypeError(v)
                    for (R = 0; R < M; R++, E++) R in B && d(C, E, B[R])
                  } else {
                    if (E >= p) throw TypeError(v)
                    d(C, E++, B)
                  }
                return (C.length = E), C
              }
            }
          )
        },
        function (o, n, t) {
          var e = t(5),
            i = t(8),
            r = t(36),
            a = t(43),
            c = t(14),
            A = t(76),
            d = t(106),
            h = t(11),
            f = t(16),
            l = t(55),
            u = t(13),
            s = t(25),
            p = t(31),
            v = t(30),
            m = t(60),
            g = t(48),
            y = t(77),
            x = t(52),
            S = t(126),
            D = t(235),
            P = t(127),
            C = t(71),
            E = t(18),
            T = t(59),
            R = t(19),
            N = t(53),
            M = t(74),
            B = t(63),
            F = t(51),
            O = t(64),
            b = t(10),
            $ = t(93),
            H = t(12),
            U = t(37),
            K = t(42),
            w = t(32).forEach,
            X = B('hidden'),
            J = 'Symbol',
            Q = 'prototype',
            V = b('toPrimitive'),
            W = K.set,
            q = K.getterFor(J),
            rt = Object[Q],
            it = i.Symbol,
            dt = r('JSON', 'stringify'),
            Zt = C.f,
            ut = E.f,
            Ut = D.f,
            Mt = T.f,
            ft = M('symbols'),
            ht = M('op-symbols'),
            Nt = M('string-to-symbol-registry'),
            mt = M('symbol-to-string-registry'),
            he = M('wks'),
            Bt = i.QObject,
            St = !Bt || !Bt[Q] || !Bt[Q].findChild,
            Ft =
              c &&
              h(function () {
                return (
                  y(
                    ut({}, 'a', {
                      get: function () {
                        return ut(this, 'a', { value: 7 }).a
                      }
                    })
                  ).a != 7
                )
              })
                ? function (G, z, k) {
                    var tt = Zt(rt, z)
                    tt && delete rt[z], ut(G, z, k), tt && G !== rt && ut(rt, z, tt)
                  }
                : ut,
            wt = function (G, z) {
              var k = (ft[G] = y(it[Q]))
              return W(k, { type: J, tag: G, description: z }), c || (k.description = z), k
            },
            Ot = d
              ? function (G) {
                  return typeof G == 'symbol'
                }
              : function (G) {
                  return Object(G) instanceof it
                },
            Lt = function (z, k, tt) {
              z === rt && Lt(ht, k, tt), s(z)
              var nt = m(k, !0)
              return (
                s(tt),
                f(ft, nt)
                  ? (tt.enumerable
                      ? (f(z, X) && z[X][nt] && (z[X][nt] = !1),
                        (tt = y(tt, { enumerable: g(0, !1) })))
                      : (f(z, X) || ut(z, X, g(1, {})), (z[X][nt] = !0)),
                    Ft(z, nt, tt))
                  : ut(z, nt, tt)
              )
            },
            gt = function (z, k) {
              s(z)
              var tt = v(k),
                nt = x(tt).concat(_(tt))
              return (
                w(nt, function (lt) {
                  ;(!c || Ct.call(tt, lt)) && Lt(z, lt, tt[lt])
                }),
                z
              )
            },
            yt = function (z, k) {
              return k === void 0 ? y(z) : gt(y(z), k)
            },
            Ct = function (z) {
              var k = m(z, !0),
                tt = Mt.call(this, k)
              return this === rt && f(ft, k) && !f(ht, k)
                ? !1
                : tt || !f(this, k) || !f(ft, k) || (f(this, X) && this[X][k])
                ? tt
                : !0
            },
            Z = function (z, k) {
              var tt = v(z),
                nt = m(k, !0)
              if (!(tt === rt && f(ft, nt) && !f(ht, nt))) {
                var lt = Zt(tt, nt)
                return lt && f(ft, nt) && !(f(tt, X) && tt[X][nt]) && (lt.enumerable = !0), lt
              }
            },
            Y = function (z) {
              var k = Ut(v(z)),
                tt = []
              return (
                w(k, function (nt) {
                  !f(ft, nt) && !f(F, nt) && tt.push(nt)
                }),
                tt
              )
            },
            _ = function (z) {
              var k = z === rt,
                tt = Ut(k ? ht : v(z)),
                nt = []
              return (
                w(tt, function (lt) {
                  f(ft, lt) && (!k || f(rt, lt)) && nt.push(ft[lt])
                }),
                nt
              )
            }
          if (
            (A ||
              ((it = function () {
                if (this instanceof it) throw TypeError('Symbol is not a constructor')
                var z =
                    !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]),
                  k = O(z),
                  tt = function (nt) {
                    this === rt && tt.call(ht, nt),
                      f(this, X) && f(this[X], k) && (this[X][k] = !1),
                      Ft(this, k, g(1, nt))
                  }
                return c && St && Ft(rt, k, { configurable: !0, set: tt }), wt(k, z)
              }),
              N(it[Q], 'toString', function () {
                return q(this).tag
              }),
              N(it, 'withoutSetter', function (G) {
                return wt(O(G), G)
              }),
              (T.f = Ct),
              (E.f = Lt),
              (C.f = Z),
              (S.f = D.f = Y),
              (P.f = _),
              ($.f = function (G) {
                return wt(b(G), G)
              }),
              c &&
                (ut(it[Q], 'description', {
                  configurable: !0,
                  get: function () {
                    return q(this).description
                  }
                }),
                a || N(rt, 'propertyIsEnumerable', Ct, { unsafe: !0 }))),
            e({ global: !0, wrap: !0, forced: !A, sham: !A }, { Symbol: it }),
            w(x(he), function (G) {
              H(G)
            }),
            e(
              { target: J, stat: !0, forced: !A },
              {
                for: function (G) {
                  var z = String(G)
                  if (f(Nt, z)) return Nt[z]
                  var k = it(z)
                  return (Nt[z] = k), (mt[k] = z), k
                },
                keyFor: function (z) {
                  if (!Ot(z)) throw TypeError(z + ' is not a symbol')
                  if (f(mt, z)) return mt[z]
                },
                useSetter: function () {
                  St = !0
                },
                useSimple: function () {
                  St = !1
                }
              }
            ),
            e(
              { target: 'Object', stat: !0, forced: !A, sham: !c },
              { create: yt, defineProperty: Lt, defineProperties: gt, getOwnPropertyDescriptor: Z }
            ),
            e(
              { target: 'Object', stat: !0, forced: !A },
              { getOwnPropertyNames: Y, getOwnPropertySymbols: _ }
            ),
            e(
              {
                target: 'Object',
                stat: !0,
                forced: h(function () {
                  P.f(1)
                })
              },
              {
                getOwnPropertySymbols: function (z) {
                  return P.f(p(z))
                }
              }
            ),
            dt)
          ) {
            var et =
              !A ||
              h(function () {
                var G = it()
                return dt([G]) != '[null]' || dt({ a: G }) != '{}' || dt(Object(G)) != '{}'
              })
            e(
              { target: 'JSON', stat: !0, forced: et },
              {
                stringify: function (z, k, tt) {
                  for (var nt = [z], lt = 1, ct; arguments.length > lt; ) nt.push(arguments[lt++])
                  if (((ct = k), !((!u(k) && z === void 0) || Ot(z))))
                    return (
                      l(k) ||
                        (k = function (pt, st) {
                          if ((typeof ct == 'function' && (st = ct.call(this, pt, st)), !Ot(st)))
                            return st
                        }),
                      (nt[1] = k),
                      dt.apply(null, nt)
                    )
                }
              }
            )
          }
          it[Q][V] || R(it[Q], V, it[Q].valueOf), U(it, J), (F[X] = !0)
        },
        function (o, n, t) {
          var e = t(30),
            i = t(126).f,
            r = {}.toString,
            a =
              typeof window == 'object' && window && Object.getOwnPropertyNames
                ? Object.getOwnPropertyNames(window)
                : [],
            c = function (A) {
              try {
                return i(A)
              } catch {
                return a.slice()
              }
            }
          o.exports.f = function (d) {
            return a && r.call(d) == '[object Window]' ? c(d) : i(e(d))
          }
        },
        function (o, n, t) {
          var e = t(12)
          e('asyncIterator')
        },
        function (o, n) {},
        function (o, n, t) {
          var e = t(12)
          e('hasInstance')
        },
        function (o, n, t) {
          var e = t(12)
          e('isConcatSpreadable')
        },
        function (o, n, t) {
          var e = t(12)
          e('match')
        },
        function (o, n, t) {
          var e = t(12)
          e('matchAll')
        },
        function (o, n, t) {
          var e = t(12)
          e('replace')
        },
        function (o, n, t) {
          var e = t(12)
          e('search')
        },
        function (o, n, t) {
          var e = t(12)
          e('species')
        },
        function (o, n, t) {
          var e = t(12)
          e('split')
        },
        function (o, n, t) {
          var e = t(12)
          e('toPrimitive')
        },
        function (o, n, t) {
          var e = t(12)
          e('toStringTag')
        },
        function (o, n, t) {
          var e = t(12)
          e('unscopables')
        },
        function (o, n, t) {
          var e = t(37)
          e(Math, 'Math', !0)
        },
        function (o, n, t) {
          var e = t(8),
            i = t(37)
          i(e.JSON, 'JSON', !0)
        },
        function (o, n, t) {
          var e = t(12)
          e('asyncDispose')
        },
        function (o, n, t) {
          var e = t(12)
          e('dispose')
        },
        function (o, n, t) {
          var e = t(12)
          e('observable')
        },
        function (o, n, t) {
          var e = t(12)
          e('patternMatch')
        },
        function (o, n, t) {
          var e = t(12)
          e('replaceAll')
        },
        function (o, n, t) {
          o.exports = t(257)
        },
        function (o, n, t) {
          var e = t(258)
          o.exports = e
        },
        function (o, n, t) {
          t(259)
          var e = t(9)
          o.exports = e.parseInt
        },
        function (o, n, t) {
          var e = t(5),
            i = t(260)
          e({ global: !0, forced: parseInt != i }, { parseInt: i })
        },
        function (o, n, t) {
          var e = t(8),
            i = t(90).trim,
            r = t(68),
            a = e.parseInt,
            c = /^[+-]?0[Xx]/,
            A = a(r + '08') !== 8 || a(r + '0x16') !== 22
          o.exports = A
            ? function (h, f) {
                var l = i(String(h))
                return a(l, f >>> 0 || (c.test(l) ? 16 : 10))
              }
            : a
        },
        function (o, n, t) {
          var e = t(262)
          o.exports = e
        },
        function (o, n, t) {
          var e = t(263),
            i = Array.prototype
          o.exports = function (r) {
            var a = r.slice
            return r === i || (r instanceof Array && a === i.slice) ? e : a
          }
        },
        function (o, n, t) {
          t(264)
          var e = t(15)
          o.exports = e('Array').slice
        },
        function (o, n, t) {
          var e = t(5),
            i = t(13),
            r = t(55),
            a = t(79),
            c = t(35),
            A = t(30),
            d = t(69),
            h = t(10),
            f = t(56),
            l = t(22),
            u = f('slice'),
            s = l('slice', { ACCESSORS: !0, 0: 0, 1: 2 }),
            p = h('species'),
            v = [].slice,
            m = Math.max
          e(
            { target: 'Array', proto: !0, forced: !u || !s },
            {
              slice: function (y, x) {
                var S = A(this),
                  D = c(S.length),
                  P = a(y, D),
                  C = a(x === void 0 ? D : x, D),
                  E,
                  T,
                  R
                if (
                  r(S) &&
                  ((E = S.constructor),
                  typeof E == 'function' && (E === Array || r(E.prototype))
                    ? (E = void 0)
                    : i(E) && ((E = E[p]), E === null && (E = void 0)),
                  E === Array || E === void 0)
                )
                  return v.call(S, P, C)
                for (T = new (E === void 0 ? Array : E)(m(C - P, 0)), R = 0; P < C; P++, R++)
                  P in S && d(T, R, S[P])
                return (T.length = R), T
              }
            }
          )
        },
        function (o, n, t) {
          t(266)
          var e = t(9)
          o.exports = e.setTimeout
        },
        function (o, n, t) {
          var e = t(5),
            i = t(8),
            r = t(84),
            a = [].slice,
            c = /MSIE .\./.test(r),
            A = function (d) {
              return function (h, f) {
                var l = arguments.length > 2,
                  u = l ? a.call(arguments, 2) : void 0
                return d(
                  l
                    ? function () {
                        ;(typeof h == 'function' ? h : Function(h)).apply(this, u)
                      }
                    : h,
                  f
                )
              }
            }
          e(
            { global: !0, bind: !0, forced: c },
            { setTimeout: A(i.setTimeout), setInterval: A(i.setInterval) }
          )
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(128))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = t(2),
            c = a.__importDefault(t(272)),
            A = a.__importDefault(t(273)),
            d = a.__importDefault(t(129)),
            h = a.__importDefault(t(274)),
            f = a.__importDefault(t(275)),
            l = a.__importDefault(t(276)),
            u = a.__importDefault(t(130)),
            s = a.__importDefault(t(277)),
            p = a.__importDefault(t(278)),
            v = a.__importDefault(t(279)),
            m = (0, r.default)(
              {},
              c.default,
              A.default,
              d.default,
              f.default,
              h.default,
              l.default,
              u.default,
              s.default,
              p.default,
              v.default,
              {
                linkCheck: function (y, x) {
                  return !0
                }
              }
            )
          n.default = m
        },
        function (o, n, t) {
          var e = t(269)
          o.exports = e
        },
        function (o, n, t) {
          t(270)
          var e = t(9)
          o.exports = e.Object.assign
        },
        function (o, n, t) {
          var e = t(5),
            i = t(271)
          e({ target: 'Object', stat: !0, forced: Object.assign !== i }, { assign: i })
        },
        function (o, n, t) {
          var e = t(14),
            i = t(11),
            r = t(52),
            a = t(127),
            c = t(59),
            A = t(31),
            d = t(72),
            h = Object.assign,
            f = Object.defineProperty
          o.exports =
            !h ||
            i(function () {
              if (
                e &&
                h(
                  { b: 1 },
                  h(
                    f({}, 'a', {
                      enumerable: !0,
                      get: function () {
                        f(this, 'b', { value: 3, enumerable: !1 })
                      }
                    }),
                    { b: 2 }
                  )
                ).b !== 1
              )
                return !0
              var l = {},
                u = {},
                s = Symbol(),
                p = 'abcdefghijklmnopqrst'
              return (
                (l[s] = 7),
                p.split('').forEach(function (v) {
                  u[v] = v
                }),
                h({}, l)[s] != 7 || r(h({}, u)).join('') != p
              )
            })
              ? function (u, s) {
                  for (var p = A(u), v = arguments.length, m = 1, g = a.f, y = c.f; v > m; )
                    for (
                      var x = d(arguments[m++]),
                        S = g ? r(x).concat(g(x)) : r(x),
                        D = S.length,
                        P = 0,
                        C;
                      D > P;

                    )
                      (C = S[P++]), (!e || y.call(x, C)) && (p[C] = x[C])
                  return p
                }
              : h
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 }),
            (n.default = {
              menus: [
                'head',
                'bold',
                'fontSize',
                'fontName',
                'italic',
                'underline',
                'strikeThrough',
                'indent',
                'lineHeight',
                'foreColor',
                'backColor',
                'link',
                'list',
                'todo',
                'justify',
                'quote',
                'emoticon',
                'image',
                'video',
                'table',
                'code',
                'splitLine',
                'undo',
                'redo'
              ],
              fontNames: [
                '\u9ED1\u4F53',
                '\u4EFF\u5B8B',
                '\u6977\u4F53',
                '\u6807\u6977\u4F53',
                '\u534E\u6587\u4EFF\u5B8B',
                '\u534E\u6587\u6977\u4F53',
                '\u5B8B\u4F53',
                '\u5FAE\u8F6F\u96C5\u9ED1',
                'Arial',
                'Tahoma',
                'Verdana',
                'Times New Roman',
                'Courier New'
              ],
              fontSizes: {
                'x-small': { name: '10px', value: '1' },
                small: { name: '13px', value: '2' },
                normal: { name: '16px', value: '3' },
                large: { name: '18px', value: '4' },
                'x-large': { name: '24px', value: '5' },
                'xx-large': { name: '32px', value: '6' },
                'xxx-large': { name: '48px', value: '7' }
              },
              colors: [
                '#000000',
                '#ffffff',
                '#eeece0',
                '#1c487f',
                '#4d80bf',
                '#c24f4a',
                '#8baa4a',
                '#7b5ba1',
                '#46acc8',
                '#f9963b'
              ],
              languageType: [
                'Bash',
                'C',
                'C#',
                'C++',
                'CSS',
                'Java',
                'JavaScript',
                'JSON',
                'TypeScript',
                'Plain text',
                'Html',
                'XML',
                'SQL',
                'Go',
                'Kotlin',
                'Lua',
                'Markdown',
                'PHP',
                'Python',
                'Shell Session',
                'Ruby'
              ],
              languageTab: '\u3000\u3000\u3000\u3000',
              emotions: [
                {
                  title: '\u8868\u60C5',
                  type: 'emoji',
                  content:
                    '\u{1F600} \u{1F603} \u{1F604} \u{1F601} \u{1F606} \u{1F605} \u{1F602} \u{1F923} \u{1F60A} \u{1F607} \u{1F642} \u{1F643} \u{1F609} \u{1F60C} \u{1F60D} \u{1F618} \u{1F617} \u{1F619} \u{1F61A} \u{1F60B} \u{1F61B} \u{1F61D} \u{1F61C} \u{1F913} \u{1F60E} \u{1F60F} \u{1F612} \u{1F61E} \u{1F614} \u{1F61F} \u{1F615} \u{1F641} \u{1F623} \u{1F616} \u{1F62B} \u{1F629} \u{1F622} \u{1F62D} \u{1F624} \u{1F620} \u{1F621} \u{1F633} \u{1F631} \u{1F628} \u{1F917} \u{1F914} \u{1F636} \u{1F611} \u{1F62C} \u{1F644} \u{1F62F} \u{1F634} \u{1F637} \u{1F911} \u{1F608} \u{1F921} \u{1F4A9} \u{1F47B} \u{1F480} \u{1F440} \u{1F463}'.split(
                      /\s/
                    )
                },
                {
                  title: '\u624B\u52BF',
                  type: 'emoji',
                  content:
                    '\u{1F450} \u{1F64C} \u{1F44F} \u{1F91D} \u{1F44D} \u{1F44E} \u{1F44A} \u270A \u{1F91B} \u{1F91C} \u{1F91E} \u270C\uFE0F \u{1F918} \u{1F44C} \u{1F448} \u{1F449} \u{1F446} \u{1F447} \u261D\uFE0F \u270B \u{1F91A} \u{1F590} \u{1F596} \u{1F44B} \u{1F919} \u{1F4AA} \u{1F595} \u270D\uFE0F \u{1F64F}'.split(
                      /\s/
                    )
                }
              ],
              lineHeights: ['1', '1.15', '1.6', '2', '2.5', '3'],
              undoLimit: 20,
              indentation: '2em',
              showMenuTooltips: !0,
              menuTooltipPosition: 'up'
            })
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(7)
          function a(c, A, d) {
            window.alert(c), d && console.error('wangEditor: ' + d)
          }
          n.default = {
            onchangeTimeout: 200,
            onchange: null,
            onfocus: r.EMPTY_FN,
            onblur: r.EMPTY_FN,
            onCatalogChange: null,
            customAlert: a
          }
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 }),
            (n.default = {
              pasteFilterStyle: !0,
              pasteIgnoreImg: !1,
              pasteTextHandle: function (a) {
                return a
              }
            })
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 }), (n.default = { styleWithCSS: !1 })
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(7)
          n.default = {
            linkImgCheck: function (c, A, d) {
              return !0
            },
            showLinkImg: !0,
            showLinkImgAlt: !0,
            showLinkImgHref: !0,
            linkImgCallback: r.EMPTY_FN,
            uploadImgAccept: ['jpg', 'jpeg', 'png', 'gif', 'bmp'],
            uploadImgServer: '',
            uploadImgShowBase64: !1,
            uploadImgMaxSize: 5 * 1024 * 1024,
            uploadImgMaxLength: 100,
            uploadFileName: '',
            uploadImgParams: {},
            uploadImgParamsWithUrl: !1,
            uploadImgHeaders: {},
            uploadImgHooks: {},
            uploadImgTimeout: 10 * 1e3,
            withCredentials: !1,
            customUploadImg: null,
            uploadImgFromMedia: null
          }
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 }),
            (n.default = {
              lang: 'zh-CN',
              languages: {
                'zh-CN': {
                  wangEditor: {
                    重置: '\u91CD\u7F6E',
                    插入: '\u63D2\u5165',
                    默认: '\u9ED8\u8BA4',
                    创建: '\u521B\u5EFA',
                    修改: '\u4FEE\u6539',
                    如: '\u5982',
                    请输入正文: '\u8BF7\u8F93\u5165\u6B63\u6587',
                    menus: {
                      title: {
                        标题: '\u6807\u9898',
                        加粗: '\u52A0\u7C97',
                        字号: '\u5B57\u53F7',
                        字体: '\u5B57\u4F53',
                        斜体: '\u659C\u4F53',
                        下划线: '\u4E0B\u5212\u7EBF',
                        删除线: '\u5220\u9664\u7EBF',
                        缩进: '\u7F29\u8FDB',
                        行高: '\u884C\u9AD8',
                        文字颜色: '\u6587\u5B57\u989C\u8272',
                        背景色: '\u80CC\u666F\u8272',
                        链接: '\u94FE\u63A5',
                        序列: '\u5E8F\u5217',
                        对齐: '\u5BF9\u9F50',
                        引用: '\u5F15\u7528',
                        表情: '\u8868\u60C5',
                        图片: '\u56FE\u7247',
                        视频: '\u89C6\u9891',
                        表格: '\u8868\u683C',
                        代码: '\u4EE3\u7801',
                        分割线: '\u5206\u5272\u7EBF',
                        恢复: '\u6062\u590D',
                        撤销: '\u64A4\u9500',
                        全屏: '\u5168\u5C4F',
                        取消全屏: '\u53D6\u6D88\u5168\u5C4F',
                        待办事项: '\u5F85\u529E\u4E8B\u9879'
                      },
                      dropListMenu: {
                        设置标题: '\u8BBE\u7F6E\u6807\u9898',
                        背景颜色: '\u80CC\u666F\u989C\u8272',
                        文字颜色: '\u6587\u5B57\u989C\u8272',
                        设置字号: '\u8BBE\u7F6E\u5B57\u53F7',
                        设置字体: '\u8BBE\u7F6E\u5B57\u4F53',
                        设置缩进: '\u8BBE\u7F6E\u7F29\u8FDB',
                        对齐方式: '\u5BF9\u9F50\u65B9\u5F0F',
                        设置行高: '\u8BBE\u7F6E\u884C\u9AD8',
                        序列: '\u5E8F\u5217',
                        head: { 正文: '\u6B63\u6587' },
                        indent: {
                          增加缩进: '\u589E\u52A0\u7F29\u8FDB',
                          减少缩进: '\u51CF\u5C11\u7F29\u8FDB'
                        },
                        justify: {
                          靠左: '\u9760\u5DE6',
                          居中: '\u5C45\u4E2D',
                          靠右: '\u9760\u53F3',
                          两端: '\u4E24\u7AEF'
                        },
                        list: {
                          无序列表: '\u65E0\u5E8F\u5217\u8868',
                          有序列表: '\u6709\u5E8F\u5217\u8868'
                        }
                      },
                      panelMenus: {
                        emoticon: {
                          默认: '\u9ED8\u8BA4',
                          新浪: '\u65B0\u6D6A',
                          emoji: 'emoji',
                          手势: '\u624B\u52BF'
                        },
                        image: {
                          上传图片: '\u4E0A\u4F20\u56FE\u7247',
                          网络图片: '\u7F51\u7EDC\u56FE\u7247',
                          图片地址: '\u56FE\u7247\u5730\u5740',
                          图片文字说明: '\u56FE\u7247\u6587\u5B57\u8BF4\u660E',
                          跳转链接: '\u8DF3\u8F6C\u94FE\u63A5'
                        },
                        link: {
                          链接: '\u94FE\u63A5',
                          链接文字: '\u94FE\u63A5\u6587\u5B57',
                          取消链接: '\u53D6\u6D88\u94FE\u63A5',
                          查看链接: '\u67E5\u770B\u94FE\u63A5'
                        },
                        video: {
                          插入视频: '\u63D2\u5165\u89C6\u9891',
                          上传视频: '\u4E0A\u4F20\u89C6\u9891'
                        },
                        table: {
                          行: '\u884C',
                          列: '\u5217',
                          的: '\u7684',
                          表格: '\u8868\u683C',
                          添加行: '\u6DFB\u52A0\u884C',
                          删除行: '\u5220\u9664\u884C',
                          添加列: '\u6DFB\u52A0\u5217',
                          删除列: '\u5220\u9664\u5217',
                          设置表头: '\u8BBE\u7F6E\u8868\u5934',
                          取消表头: '\u53D6\u6D88\u8868\u5934',
                          插入表格: '\u63D2\u5165\u8868\u683C',
                          删除表格: '\u5220\u9664\u8868\u683C'
                        },
                        code: {
                          删除代码: '\u5220\u9664\u4EE3\u7801',
                          修改代码: '\u4FEE\u6539\u4EE3\u7801',
                          插入代码: '\u63D2\u5165\u4EE3\u7801'
                        }
                      }
                    },
                    validate: {
                      张图片: '\u5F20\u56FE\u7247',
                      大于: '\u5927\u4E8E',
                      图片链接: '\u56FE\u7247\u94FE\u63A5',
                      不是图片: '\u4E0D\u662F\u56FE\u7247',
                      返回结果: '\u8FD4\u56DE\u7ED3\u679C',
                      上传图片超时: '\u4E0A\u4F20\u56FE\u7247\u8D85\u65F6',
                      上传图片错误: '\u4E0A\u4F20\u56FE\u7247\u9519\u8BEF',
                      上传图片失败: '\u4E0A\u4F20\u56FE\u7247\u5931\u8D25',
                      插入图片错误: '\u63D2\u5165\u56FE\u7247\u9519\u8BEF',
                      一次最多上传: '\u4E00\u6B21\u6700\u591A\u4E0A\u4F20',
                      下载链接失败: '\u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25',
                      图片验证未通过: '\u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7',
                      服务器返回状态: '\u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001',
                      上传图片返回结果错误:
                        '\u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF',
                      请替换为支持的图片类型:
                        '\u8BF7\u66FF\u6362\u4E3A\u652F\u6301\u7684\u56FE\u7247\u7C7B\u578B',
                      您插入的网络图片无法识别:
                        '\u60A8\u63D2\u5165\u7684\u7F51\u7EDC\u56FE\u7247\u65E0\u6CD5\u8BC6\u522B',
                      您刚才插入的图片链接未通过编辑器校验:
                        '\u60A8\u521A\u624D\u63D2\u5165\u7684\u56FE\u7247\u94FE\u63A5\u672A\u901A\u8FC7\u7F16\u8F91\u5668\u6821\u9A8C',
                      插入视频错误: '\u63D2\u5165\u89C6\u9891\u9519\u8BEF',
                      视频链接: '\u89C6\u9891\u94FE\u63A5',
                      不是视频: '\u4E0D\u662F\u89C6\u9891',
                      视频验证未通过: '\u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7',
                      个视频: '\u4E2A\u89C6\u9891',
                      上传视频超时: '\u4E0A\u4F20\u89C6\u9891\u8D85\u65F6',
                      上传视频错误: '\u4E0A\u4F20\u89C6\u9891\u9519\u8BEF',
                      上传视频失败: '\u4E0A\u4F20\u89C6\u9891\u5931\u8D25',
                      上传视频返回结果错误:
                        '\u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF'
                    }
                  }
                },
                en: {
                  wangEditor: {
                    重置: 'reset',
                    插入: 'insert',
                    默认: 'default',
                    创建: 'create',
                    修改: 'edit',
                    如: 'like',
                    请输入正文: 'please enter the text',
                    menus: {
                      title: {
                        标题: 'head',
                        加粗: 'bold',
                        字号: 'font size',
                        字体: 'font family',
                        斜体: 'italic',
                        下划线: 'underline',
                        删除线: 'strikethrough',
                        缩进: 'indent',
                        行高: 'line heihgt',
                        文字颜色: 'font color',
                        背景色: 'background',
                        链接: 'link',
                        序列: 'numbered list',
                        对齐: 'align',
                        引用: 'quote',
                        表情: 'emoticons',
                        图片: 'image',
                        视频: 'media',
                        表格: 'table',
                        代码: 'code',
                        分割线: 'split line',
                        恢复: 'redo',
                        撤销: 'undo',
                        全屏: 'fullscreen',
                        取消全屏: 'cancel fullscreen',
                        待办事项: 'todo'
                      },
                      dropListMenu: {
                        设置标题: 'title',
                        背景颜色: 'background',
                        文字颜色: 'font color',
                        设置字号: 'font size',
                        设置字体: 'font family',
                        设置缩进: 'indent',
                        对齐方式: 'align',
                        设置行高: 'line heihgt',
                        序列: 'list',
                        head: { 正文: 'text' },
                        indent: { 增加缩进: 'indent', 减少缩进: 'outdent' },
                        justify: { 靠左: 'left', 居中: 'center', 靠右: 'right', 两端: 'justify' },
                        list: { 无序列表: 'unordered', 有序列表: 'ordered' }
                      },
                      panelMenus: {
                        emoticon: { 表情: 'emoji', 手势: 'gesture' },
                        image: {
                          上传图片: 'upload image',
                          网络图片: 'network image',
                          图片地址: 'image link',
                          图片文字说明: 'image alt',
                          跳转链接: 'hyperlink'
                        },
                        link: {
                          链接: 'link',
                          链接文字: 'link text',
                          取消链接: 'unlink',
                          查看链接: 'view links'
                        },
                        video: { 插入视频: 'insert video', 上传视频: 'upload local video' },
                        table: {
                          行: 'rows',
                          列: 'columns',
                          的: ' ',
                          表格: 'table',
                          添加行: 'insert row',
                          删除行: 'delete row',
                          添加列: 'insert column',
                          删除列: 'delete column',
                          设置表头: 'set header',
                          取消表头: 'cancel header',
                          插入表格: 'insert table',
                          删除表格: 'delete table'
                        },
                        code: {
                          删除代码: 'delete code',
                          修改代码: 'edit code',
                          插入代码: 'insert code'
                        }
                      }
                    },
                    validate: {
                      张图片: 'images',
                      大于: 'greater than',
                      图片链接: 'image link',
                      不是图片: 'is not image',
                      返回结果: 'return results',
                      上传图片超时: 'upload image timeout',
                      上传图片错误: 'upload image error',
                      上传图片失败: 'upload image failed',
                      插入图片错误: 'insert image error',
                      一次最多上传: 'once most at upload',
                      下载链接失败: 'download link failed',
                      图片验证未通过: 'image validate failed',
                      服务器返回状态: 'server return status',
                      上传图片返回结果错误: 'upload image return results error',
                      请替换为支持的图片类型: 'please replace with a supported image type',
                      您插入的网络图片无法识别:
                        'the network picture you inserted is not recognized',
                      您刚才插入的图片链接未通过编辑器校验:
                        'the image link you just inserted did not pass the editor verification',
                      插入视频错误: 'insert video error',
                      视频链接: 'video link',
                      不是视频: 'is not video',
                      视频验证未通过: 'video validate failed',
                      个视频: 'videos',
                      上传视频超时: 'upload video timeout',
                      上传视频错误: 'upload video error',
                      上传视频失败: 'upload video failed',
                      上传视频返回结果错误: 'upload video return results error'
                    }
                  }
                }
              }
            })
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(6)
          function a() {
            return !!(r.UA.isIE() || r.UA.isOldEdge)
          }
          n.default = { compatibleMode: a, historyMaxSize: 30 }
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(7)
          n.default = {
            onlineVideoCheck: function (c) {
              return !0
            },
            onlineVideoCallback: r.EMPTY_FN,
            showLinkVideo: !0,
            uploadVideoAccept: ['mp4'],
            uploadVideoServer: '',
            uploadVideoMaxSize: 1 * 1024 * 1024 * 1024,
            uploadVideoName: '',
            uploadVideoParams: {},
            uploadVideoParamsWithUrl: !1,
            uploadVideoHeaders: {},
            uploadVideoHooks: {},
            uploadVideoTimeout: 1e3 * 60 * 60 * 2,
            withVideoCredentials: !1,
            customUploadVideo: null,
            customInsertVideo: null
          }
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(17))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = t(2),
            c = a.__importDefault(t(3)),
            A = t(6),
            d = t(7),
            h = (function () {
              function f(l) {
                ;(this._currentRange = null), (this.editor = l)
              }
              return (
                (f.prototype.getRange = function () {
                  return this._currentRange
                }),
                (f.prototype.saveRange = function (l) {
                  if (l) {
                    this._currentRange = l
                    return
                  }
                  var u = window.getSelection()
                  if (u.rangeCount !== 0) {
                    var s = u.getRangeAt(0),
                      p = this.getSelectionContainerElem(s)
                    if (
                      !!(p != null && p.length) &&
                      !(
                        p.attr('contenteditable') === 'false' ||
                        p.parentUntil('[contenteditable=false]')
                      )
                    ) {
                      var v = this.editor,
                        m = v.$textElem
                      if (m.isContain(p)) {
                        if (m.elems[0] === p.elems[0]) {
                          var g
                          if ((0, r.default)((g = m.html())).call(g) === d.EMPTY_P) {
                            var y = m.children(),
                              x = y == null ? void 0 : y.last()
                            v.selection.createRangeByElem(x, !0, !0), v.selection.restoreSelection()
                          }
                        }
                        this._currentRange = s
                      }
                    }
                  }
                }),
                (f.prototype.collapseRange = function (l) {
                  l === void 0 && (l = !1)
                  var u = this._currentRange
                  u && u.collapse(l)
                }),
                (f.prototype.getSelectionText = function () {
                  var l = this._currentRange
                  return l ? l.toString() : ''
                }),
                (f.prototype.getSelectionContainerElem = function (l) {
                  var u
                  u = l || this._currentRange
                  var s
                  if (u)
                    return (
                      (s = u.commonAncestorContainer),
                      c.default(s.nodeType === 1 ? s : s.parentNode)
                    )
                }),
                (f.prototype.getSelectionStartElem = function (l) {
                  var u
                  u = l || this._currentRange
                  var s
                  if (u)
                    return (s = u.startContainer), c.default(s.nodeType === 1 ? s : s.parentNode)
                }),
                (f.prototype.getSelectionEndElem = function (l) {
                  var u
                  u = l || this._currentRange
                  var s
                  if (u) return (s = u.endContainer), c.default(s.nodeType === 1 ? s : s.parentNode)
                }),
                (f.prototype.isSelectionEmpty = function () {
                  var l = this._currentRange
                  return !!(
                    l &&
                    l.startContainer &&
                    l.startContainer === l.endContainer &&
                    l.startOffset === l.endOffset
                  )
                }),
                (f.prototype.restoreSelection = function () {
                  var l = window.getSelection(),
                    u = this._currentRange
                  l && u && (l.removeAllRanges(), l.addRange(u))
                }),
                (f.prototype.createEmptyRange = function () {
                  var l = this.editor,
                    u = this.getRange(),
                    s
                  if (!!u && !!this.isSelectionEmpty())
                    try {
                      A.UA.isWebkit()
                        ? (l.cmd.do('insertHTML', '&#8203;'),
                          u.setEnd(u.endContainer, u.endOffset + 1),
                          this.saveRange(u))
                        : ((s = c.default('<strong>&#8203;</strong>')),
                          l.cmd.do('insertElem', s),
                          this.createRangeByElem(s, !0))
                    } catch {}
                }),
                (f.prototype.createRangeByElems = function (l, u) {
                  var s = window.getSelection ? window.getSelection() : document.getSelection()
                  s == null || s.removeAllRanges()
                  var p = document.createRange()
                  p.setStart(l, 0),
                    p.setEnd(u, u.childNodes.length || 1),
                    this.saveRange(p),
                    this.restoreSelection()
                }),
                (f.prototype.createRangeByElem = function (l, u, s) {
                  if (!!l.length) {
                    var p = l.elems[0],
                      v = document.createRange()
                    s ? v.selectNodeContents(p) : v.selectNode(p),
                      u != null &&
                        (v.collapse(u),
                        u || (this.saveRange(v), this.editor.selection.moveCursor(p))),
                      this.saveRange(v)
                  }
                }),
                (f.prototype.getSelectionRangeTopNodes = function () {
                  var l,
                    u,
                    s,
                    p =
                      (l = this.getSelectionStartElem()) === null || l === void 0
                        ? void 0
                        : l.getNodeTop(this.editor),
                    v =
                      (u = this.getSelectionEndElem()) === null || u === void 0
                        ? void 0
                        : u.getNodeTop(this.editor)
                  return (s = this.recordSelectionNodes(c.default(p), c.default(v))), s
                }),
                (f.prototype.moveCursor = function (l, u) {
                  var s,
                    p = this.getRange(),
                    v =
                      l.nodeType === 3
                        ? (s = l.nodeValue) === null || s === void 0
                          ? void 0
                          : s.length
                        : l.childNodes.length
                  ;(A.UA.isFirefox || A.UA.isIE()) &&
                    v !== 0 &&
                    (l.nodeType === 3 || l.childNodes[v - 1].nodeName === 'BR') &&
                    (v = v - 1)
                  var m = u != null ? u : v
                  !p || (l && (p.setStart(l, m), p.setEnd(l, m), this.restoreSelection()))
                }),
                (f.prototype.getCursorPos = function () {
                  var l = window.getSelection()
                  return l == null ? void 0 : l.anchorOffset
                }),
                (f.prototype.clearWindowSelectionRange = function () {
                  var l = window.getSelection()
                  l && l.removeAllRanges()
                }),
                (f.prototype.recordSelectionNodes = function (l, u) {
                  var s = [],
                    p = !0
                  try {
                    for (var v = l, m = this.editor.$textElem; p; ) {
                      var g = v == null ? void 0 : v.getNodeTop(this.editor)
                      g.getNodeName() === 'BODY' && (p = !1),
                        g.length > 0 &&
                          (s.push(c.default(v)),
                          (u == null ? void 0 : u.equal(g)) || m.equal(g)
                            ? (p = !1)
                            : (v = g.getNextSibling()))
                    }
                  } catch {
                    p = !1
                  }
                  return s
                }),
                (f.prototype.setRangeToElem = function (l) {
                  var u = this.getRange()
                  u == null || u.setStart(l, 0), u == null || u.setEnd(l, 0)
                }),
                f
              )
            })()
          n.default = h
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(3)),
            c = (function () {
              function A(d) {
                this.editor = d
              }
              return (
                (A.prototype.do = function (d, h) {
                  var f = this.editor
                  f.config.styleWithCSS && document.execCommand('styleWithCSS', !1, 'true')
                  var l = f.selection
                  if (!!l.getRange()) {
                    switch ((l.restoreSelection(), d)) {
                      case 'insertHTML':
                        this.insertHTML(h)
                        break
                      case 'insertElem':
                        this.insertElem(h)
                        break
                      default:
                        this.execCommand(d, h)
                        break
                    }
                    f.menus.changeActive(), l.saveRange(), l.restoreSelection()
                  }
                }),
                (A.prototype.insertHTML = function (d) {
                  var h = this.editor,
                    f = h.selection.getRange()
                  if (f != null) {
                    if (this.queryCommandSupported('insertHTML')) this.execCommand('insertHTML', d)
                    else if (f.insertNode) {
                      if ((f.deleteContents(), a.default(d).elems.length > 0))
                        f.insertNode(a.default(d).elems[0])
                      else {
                        var l = document.createElement('p')
                        l.appendChild(document.createTextNode(d)), f.insertNode(l)
                      }
                      h.selection.collapseRange()
                    }
                  }
                }),
                (A.prototype.insertElem = function (d) {
                  var h = this.editor,
                    f = h.selection.getRange()
                  f != null && f.insertNode && (f.deleteContents(), f.insertNode(d.elems[0]))
                }),
                (A.prototype.execCommand = function (d, h) {
                  document.execCommand(d, !1, h)
                }),
                (A.prototype.queryCommandValue = function (d) {
                  return document.queryCommandValue(d)
                }),
                (A.prototype.queryCommandState = function (d) {
                  return document.queryCommandState(d)
                }),
                (A.prototype.queryCommandSupported = function (d) {
                  return document.queryCommandSupported(d)
                }),
                A
              )
            })()
          n.default = c
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(29)),
            a = e(t(4)),
            c = e(t(17)),
            A = e(t(27)),
            d = e(t(46))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var h = t(2),
            f = h.__importDefault(t(3)),
            l = h.__importDefault(t(287)),
            u = t(6),
            s = h.__importDefault(t(299)),
            p = h.__importDefault(t(300)),
            v = t(7),
            m = (function () {
              function g(y) {
                ;(this.editor = y),
                  (this.eventHooks = {
                    onBlurEvents: [],
                    changeEvents: [],
                    dropEvents: [],
                    clickEvents: [],
                    keydownEvents: [],
                    keyupEvents: [],
                    tabUpEvents: [],
                    tabDownEvents: [],
                    enterUpEvents: [],
                    enterDownEvents: [],
                    deleteUpEvents: [],
                    deleteDownEvents: [],
                    pasteEvents: [],
                    linkClickEvents: [],
                    codeClickEvents: [],
                    textScrollEvents: [],
                    toolbarClickEvents: [],
                    imgClickEvents: [],
                    imgDragBarMouseDownEvents: [],
                    tableClickEvents: [],
                    menuClickEvents: [],
                    dropListMenuHoverEvents: [],
                    splitLineEvents: [],
                    videoClickEvents: []
                  })
              }
              return (
                (g.prototype.init = function () {
                  this._saveRange(), this._bindEventHooks(), l.default(this)
                }),
                (g.prototype.togglePlaceholder = function () {
                  var y,
                    x = this.html(),
                    S = (0, r.default)((y = this.editor.$textContainerElem)).call(y, '.placeholder')
                  S.hide(), !this.editor.isComposing && (!x || x === ' ') && S.show()
                }),
                (g.prototype.clear = function () {
                  this.html(v.EMPTY_P)
                }),
                (g.prototype.html = function (y) {
                  var x = this.editor,
                    S = x.$textElem
                  if (y == null) {
                    var D = S.html()
                    ;(D = D.replace(/\u200b/gm, '')),
                      (D = D.replace(/<p><\/p>/gim, '')),
                      (D = D.replace(v.EMPTY_P_LAST_REGEX, '')),
                      (D = D.replace(v.EMPTY_P_REGEX, '<p>'))
                    var P = D.match(/<(img|br|hr|input)[^>]*>/gi)
                    return (
                      P !== null &&
                        (0, a.default)(P).call(P, function (C) {
                          C.match(/\/>/) || (D = D.replace(C, C.substring(0, C.length - 1) + '/>'))
                        }),
                      D
                    )
                  }
                  ;(y = (0, c.default)(y).call(y)),
                    y === '' && (y = v.EMPTY_P),
                    (0, A.default)(y).call(y, '<') !== 0 && (y = '<p>' + y + '</p>'),
                    S.html(y),
                    x.initSelection()
                }),
                (g.prototype.setJSON = function (y) {
                  var x = p.default(y).children(),
                    S = this.editor,
                    D = S.$textElem
                  !x || D.replaceChildAll(x)
                }),
                (g.prototype.getJSON = function () {
                  var y = this.editor,
                    x = y.$textElem
                  return s.default(x)
                }),
                (g.prototype.text = function (y) {
                  var x = this.editor,
                    S = x.$textElem
                  if (y == null) {
                    var D = S.text()
                    return (D = D.replace(/\u200b/gm, '')), D
                  }
                  S.text('<p>' + y + '</p>'), x.initSelection()
                }),
                (g.prototype.append = function (y) {
                  var x = this.editor
                  ;(0, A.default)(y).call(y, '<') !== 0 && (y = '<p>' + y + '</p>'),
                    this.html(this.html() + y),
                    x.initSelection()
                }),
                (g.prototype._saveRange = function () {
                  var y = this.editor,
                    x = y.$textElem,
                    S = f.default(document)
                  function D() {
                    y.selection.saveRange(), y.menus.changeActive()
                  }
                  x.on('keyup', D)
                  function P() {
                    D(), x.off('click', P)
                  }
                  x.on('click', P)
                  function C() {
                    D(), S.off('mouseup', C)
                  }
                  function E() {
                    S.on('mouseup', C), x.off('mouseleave', E)
                  }
                  x.on('mousedown', function () {
                    x.on('mouseleave', E)
                  }),
                    x.on('mouseup', function (T) {
                      x.off('mouseleave', E),
                        (0, d.default)(function () {
                          var R = y.selection,
                            N = R.getRange()
                          N !== null && D()
                        }, 0)
                    })
                }),
                (g.prototype._bindEventHooks = function () {
                  var y = this.editor,
                    x = y.$textElem,
                    S = this.eventHooks
                  x.on('click', function (P) {
                    var C = S.clickEvents
                    ;(0, a.default)(C).call(C, function (E) {
                      return E(P)
                    })
                  }),
                    x.on('keyup', function (P) {
                      if (P.keyCode === 13) {
                        var C = S.enterUpEvents
                        ;(0, a.default)(C).call(C, function (E) {
                          return E(P)
                        })
                      }
                    }),
                    x.on('keyup', function (P) {
                      var C = S.keyupEvents
                      ;(0, a.default)(C).call(C, function (E) {
                        return E(P)
                      })
                    }),
                    x.on('keydown', function (P) {
                      var C = S.keydownEvents
                      ;(0, a.default)(C).call(C, function (E) {
                        return E(P)
                      })
                    }),
                    x.on('keyup', function (P) {
                      if (!(P.keyCode !== 8 && P.keyCode !== 46)) {
                        var C = S.deleteUpEvents
                        ;(0, a.default)(C).call(C, function (E) {
                          return E(P)
                        })
                      }
                    }),
                    x.on('keydown', function (P) {
                      if (!(P.keyCode !== 8 && P.keyCode !== 46)) {
                        var C = S.deleteDownEvents
                        ;(0, a.default)(C).call(C, function (E) {
                          return E(P)
                        })
                      }
                    }),
                    x.on('paste', function (P) {
                      if (!u.UA.isIE()) {
                        P.preventDefault()
                        var C = S.pasteEvents
                        ;(0, a.default)(C).call(C, function (E) {
                          return E(P)
                        })
                      }
                    }),
                    x.on('keydown', function (P) {
                      ;(y.isFocus || y.isCompatibleMode) &&
                        (P.ctrlKey || P.metaKey) &&
                        P.keyCode === 90 &&
                        (P.preventDefault(), P.shiftKey ? y.history.restore() : y.history.revoke())
                    }),
                    x.on('keyup', function (P) {
                      if (P.keyCode === 9) {
                        P.preventDefault()
                        var C = S.tabUpEvents
                        ;(0, a.default)(C).call(C, function (E) {
                          return E(P)
                        })
                      }
                    }),
                    x.on('keydown', function (P) {
                      if (P.keyCode === 9) {
                        P.preventDefault()
                        var C = S.tabDownEvents
                        ;(0, a.default)(C).call(C, function (E) {
                          return E(P)
                        })
                      }
                    }),
                    x.on(
                      'scroll',
                      u.throttle(function (P) {
                        var C = S.textScrollEvents
                        ;(0, a.default)(C).call(C, function (E) {
                          return E(P)
                        })
                      }, 100)
                    )
                  function D(P) {
                    P.preventDefault()
                  }
                  f
                    .default(document)
                    .on('dragleave', D)
                    .on('drop', D)
                    .on('dragenter', D)
                    .on('dragover', D),
                    y.beforeDestroy(function () {
                      f.default(document)
                        .off('dragleave', D)
                        .off('drop', D)
                        .off('dragenter', D)
                        .off('dragover', D)
                    }),
                    x.on('drop', function (P) {
                      P.preventDefault()
                      var C = S.dropEvents
                      ;(0, a.default)(C).call(C, function (E) {
                        return E(P)
                      })
                    }),
                    x.on('click', function (P) {
                      var C = null,
                        E = P.target,
                        T = f.default(E)
                      if (T.getNodeName() === 'A') C = T
                      else {
                        var R = T.parentUntil('a')
                        R != null && (C = R)
                      }
                      if (!!C) {
                        var N = S.linkClickEvents
                        ;(0, a.default)(N).call(N, function (M) {
                          return M(C)
                        })
                      }
                    }),
                    x.on('click', function (P) {
                      var C = null,
                        E = P.target,
                        T = f.default(E)
                      if (
                        (T.getNodeName() === 'IMG' &&
                          !T.elems[0].getAttribute('data-emoji') &&
                          (P.stopPropagation(), (C = T)),
                        !!C)
                      ) {
                        var R = S.imgClickEvents
                        ;(0, a.default)(R).call(R, function (N) {
                          return N(C)
                        })
                      }
                    }),
                    x.on('click', function (P) {
                      var C = null,
                        E = P.target,
                        T = f.default(E)
                      if (T.getNodeName() === 'PRE') C = T
                      else {
                        var R = T.parentUntil('pre')
                        R !== null && (C = R)
                      }
                      if (!!C) {
                        var N = S.codeClickEvents
                        ;(0, a.default)(N).call(N, function (M) {
                          return M(C)
                        })
                      }
                    }),
                    x.on('click', function (P) {
                      var C = null,
                        E = P.target,
                        T = f.default(E)
                      if ((T.getNodeName() === 'HR' && (C = T), !!C)) {
                        y.selection.createRangeByElem(C), y.selection.restoreSelection()
                        var R = S.splitLineEvents
                        ;(0, a.default)(R).call(R, function (N) {
                          return N(C)
                        })
                      }
                    }),
                    y.$toolbarElem.on('click', function (P) {
                      var C = S.toolbarClickEvents
                      ;(0, a.default)(C).call(C, function (E) {
                        return E(P)
                      })
                    }),
                    y.$textContainerElem.on('mousedown', function (P) {
                      var C = P.target,
                        E = f.default(C)
                      if (E.hasClass('w-e-img-drag-rb')) {
                        var T = S.imgDragBarMouseDownEvents
                        ;(0, a.default)(T).call(T, function (R) {
                          return R()
                        })
                      }
                    }),
                    x.on('click', function (P) {
                      var C = null,
                        E = P.target
                      if (((C = f.default(E).parentUntilEditor('TABLE', y, E)), !!C)) {
                        var T = S.tableClickEvents
                        ;(0, a.default)(T).call(T, function (R) {
                          return R(C, P)
                        })
                      }
                    }),
                    x.on('keydown', function (P) {
                      if (P.keyCode === 13) {
                        var C = S.enterDownEvents
                        ;(0, a.default)(C).call(C, function (E) {
                          return E(P)
                        })
                      }
                    }),
                    x.on('click', function (P) {
                      var C = null,
                        E = P.target,
                        T = f.default(E)
                      if ((T.getNodeName() === 'VIDEO' && (P.stopPropagation(), (C = T)), !!C)) {
                        var R = S.videoClickEvents
                        ;(0, a.default)(R).call(R, function (N) {
                          return N(C)
                        })
                      }
                    })
                }),
                g
              )
            })()
          n.default = m
        },
        function (o, n, t) {
          var e = t(284)
          o.exports = e
        },
        function (o, n, t) {
          var e = t(285),
            i = Array.prototype
          o.exports = function (r) {
            var a = r.find
            return r === i || (r instanceof Array && a === i.find) ? e : a
          }
        },
        function (o, n, t) {
          t(286)
          var e = t(15)
          o.exports = e('Array').find
        },
        function (o, n, t) {
          var e = t(5),
            i = t(32).find,
            r = t(82),
            a = t(22),
            c = 'find',
            A = !0,
            d = a(c)
          c in [] &&
            Array(1)[c](function () {
              A = !1
            }),
            e(
              { target: 'Array', proto: !0, forced: A || !d },
              {
                find: function (f) {
                  return i(this, f, arguments.length > 1 ? arguments[1] : void 0)
                }
              }
            ),
            r(c)
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(288)),
            c = r.__importStar(t(289)),
            A = r.__importDefault(t(290)),
            d = r.__importDefault(t(291)),
            h = r.__importDefault(t(298))
          function f(l) {
            var u = l.editor,
              s = l.eventHooks
            a.default(u, s.enterUpEvents, s.enterDownEvents),
              c.default(u, s.deleteUpEvents, s.deleteDownEvents),
              c.cutToKeepP(u, s.keyupEvents),
              A.default(u, s.tabDownEvents),
              d.default(u, s.pasteEvents),
              h.default(u, s.imgClickEvents)
          }
          n.default = f
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(27))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = t(2),
            c = t(7),
            A = a.__importDefault(t(3))
          function d(h, f, l) {
            function u(v) {
              var m,
                g = A.default(c.EMPTY_P)
              if ((g.insertBefore(v), (0, r.default)((m = v.html())).call(m, '<img') >= 0)) {
                g.remove()
                return
              }
              h.selection.createRangeByElem(g, !0, !0), h.selection.restoreSelection(), v.remove()
            }
            function s() {
              var v = h.$textElem,
                m = h.selection.getSelectionContainerElem(),
                g = m.parent()
              if (g.html() === '<code><br></code>') {
                u(g)
                return
              }
              if (m.getNodeName() === 'FONT' && m.text() === '' && m.attr('face') === 'monospace') {
                u(g)
                return
              }
              if (!!g.equal(v)) {
                var y = m.getNodeName()
                ;(y === 'P' && m.attr('data-we-empty-p') === null) || m.text() || u(m)
              }
            }
            f.push(s)
            function p(v) {
              var m
              h.selection.saveRange(
                (m = getSelection()) === null || m === void 0 ? void 0 : m.getRangeAt(0)
              )
              var g = h.selection.getSelectionContainerElem()
              g.id === h.textElemId && (v.preventDefault(), h.cmd.do('insertHTML', '<p><br></p>'))
            }
            l.push(p)
          }
          n.default = d
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(17)),
            a = e(t(28))
          ;(0, i.default)(n, '__esModule', { value: !0 }), (n.cutToKeepP = void 0)
          var c = t(2),
            A = t(7),
            d = c.__importDefault(t(3))
          function h(l, u, s) {
            function p() {
              var m = l.$textElem,
                g = l.$textElem.html(),
                y = l.$textElem.text(),
                x = (0, r.default)(g).call(g),
                S = ['<p><br></p>', '<br>', '<p data-we-empty-p=""></p>', A.EMPTY_P]
              if (/^\s*$/.test(y) && (!x || (0, a.default)(S).call(S, x))) {
                m.html(A.EMPTY_P)
                var D = m.getNode()
                l.selection.createRangeByElems(D.childNodes[0], D.childNodes[0])
                var P = l.selection.getSelectionContainerElem()
                l.selection.restoreSelection(), l.selection.moveCursor(P.getNode(), 0)
              }
            }
            u.push(p)
            function v(m) {
              var g,
                y = l.$textElem,
                x = (0, r.default)((g = y.html().toLowerCase())).call(g)
              if (x === A.EMPTY_P) {
                m.preventDefault()
                return
              }
            }
            s.push(v)
          }
          function f(l, u) {
            function s(p) {
              var v
              if (p.keyCode === 88) {
                var m = l.$textElem,
                  g = (0, r.default)((v = m.html().toLowerCase())).call(v)
                if (!g || g === '<br>') {
                  var y = d.default(A.EMPTY_P)
                  m.html(' '),
                    m.append(y),
                    l.selection.createRangeByElem(y, !1, !0),
                    l.selection.restoreSelection(),
                    l.selection.moveCursor(y.getNode(), 0)
                }
              }
            }
            u.push(s)
          }
          ;(n.cutToKeepP = f), (n.default = h)
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          function r(a, c) {
            function A() {
              if (!!a.cmd.queryCommandSupported('insertHTML')) {
                var d = a.selection.getSelectionContainerElem()
                if (!!d) {
                  var h = d.parent(),
                    f = d.getNodeName(),
                    l = h.getNodeName()
                  f == 'CODE' || l === 'CODE' || l === 'PRE' || /hljs/.test(l)
                    ? a.cmd.do('insertHTML', a.config.languageTab)
                    : a.cmd.do('insertHTML', '&nbsp;&nbsp;&nbsp;&nbsp;')
                }
              }
            }
            c.push(A)
          }
          n.default = r
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(17)),
            a = e(t(4))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var c = t(131),
            A = t(6),
            d = t(7)
          function h(p) {
            var v,
              m = (0, r.default)(
                (v = p.replace(/<div>/gim, '<p>').replace(/<\/div>/gim, '</p>'))
              ).call(v),
              g = document.createElement('div')
            return (g.innerHTML = m), g.innerHTML.replace(/<p><\/p>/gim, '')
          }
          function f(p) {
            var v = p
              .replace(
                /<br>|<br\/>/gm,
                `
`
              )
              .replace(/<[^>]+>/gm, '')
            return v
          }
          function l(p) {
            var v
            if (p === '') return !1
            var m = document.createElement('div')
            return (
              (m.innerHTML = p),
              ((v = m.firstChild) === null || v === void 0 ? void 0 : v.nodeName) === 'P'
            )
          }
          function u(p) {
            if (!(p != null && p.length)) return !1
            var v = p.elems[0]
            return v.nodeName === 'P' && v.innerHTML === '<br>'
          }
          function s(p, v) {
            function m(g) {
              var y = p.config,
                x = y.pasteFilterStyle,
                S = y.pasteIgnoreImg,
                D = y.pasteTextHandle,
                P = c.getPasteHtml(g, x, S),
                C = c.getPasteText(g)
              C = C.replace(/\n/gm, '<br>')
              var E = p.selection.getSelectionContainerElem()
              if (!!E) {
                var T = E == null ? void 0 : E.getNodeName(),
                  R = E == null ? void 0 : E.getNodeTop(p),
                  N = ''
                if (
                  (R.elems[0] && (N = R == null ? void 0 : R.getNodeName()),
                  T === 'CODE' || N === 'PRE')
                ) {
                  D && A.isFunction(D) && (C = '' + (D(C) || '')), p.cmd.do('insertHTML', f(C))
                  return
                }
                if (d.urlRegex.test(C) && x) {
                  D && A.isFunction(D) && (C = '' + (D(C) || ''))
                  var M = C.replace(d.urlRegex, function (K) {
                      return '<a href="' + K + '" target="_blank">' + K + '</a>'
                    }),
                    B = p.selection.getRange(),
                    F = document.createElement('div'),
                    O = document.createDocumentFragment()
                  if (((F.innerHTML = M), B == null)) return
                  for (; F.childNodes.length; ) O.append(F.childNodes[0])
                  var b = O.querySelectorAll('a')
                  ;(0, a.default)(b).call(b, function (K) {
                    K.innerText = K.href
                  }),
                    B.insertNode && (B.deleteContents(), B.insertNode(O)),
                    p.selection.clearWindowSelectionRange()
                  return
                }
                if (!!P)
                  try {
                    D && A.isFunction(D) && (P = '' + (D(P) || ''))
                    var $ = /[\.\#\@]?\w+[ ]+\{[^}]*\}/.test(P)
                    if ($ && x) p.cmd.do('insertHTML', '' + h(C))
                    else {
                      var H = h(P)
                      if (l(H)) {
                        var U = p.$textElem
                        if ((p.cmd.do('insertHTML', H), U.equal(E))) {
                          p.selection.createEmptyRange()
                          return
                        }
                        u(R) && R.remove()
                      } else p.cmd.do('insertHTML', H)
                    }
                  } catch {
                    D && A.isFunction(D) && (C = '' + (D(C) || '')),
                      p.cmd.do('insertHTML', '' + h(C))
                  }
              }
            }
            v.push(m)
          }
          n.default = s
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(17)),
            a = e(t(4)),
            c = e(t(28))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var A = t(2),
            d = t(293),
            h = A.__importDefault(t(297))
          function f(v) {
            var m = /<span>.*?<\/span>/gi,
              g = /<span>(.*?)<\/span>/
            return v.replace(m, function (y) {
              var x = y.match(g)
              return x == null ? '' : x[1]
            })
          }
          function l(v, m) {
            var g
            return (
              (v = (0, r.default)((g = v.toLowerCase())).call(g)),
              !!(d.IGNORE_TAGS.has(v) || (m && v === 'img'))
            )
          }
          function u(v, m) {
            var g = ''
            g = '<' + v
            var y = []
            ;(0, a.default)(m).call(m, function (S) {
              y.push(S.name + '="' + S.value + '"')
            }),
              y.length > 0 && (g = g + ' ' + y.join(' '))
            var x = d.EMPTY_TAGS.has(v)
            return (g = g + (x ? '/' : '') + '>'), g
          }
          function s(v) {
            return '</' + v + '>'
          }
          function p(v, m, g) {
            m === void 0 && (m = !0), g === void 0 && (g = !1)
            var y = [],
              x = ''
            function S(E) {
              ;(E = (0, r.default)(E).call(E)), E && (d.EMPTY_TAGS.has(E) || (x = E))
            }
            function D() {
              x = ''
            }
            var P = new h.default()
            P.parse(v, {
              startElement: function (T, R) {
                if ((S(T), !l(T, g))) {
                  var N = d.NECESSARY_ATTRS.get(T) || [],
                    M = []
                  ;(0, a.default)(R).call(R, function (F) {
                    var O = F.name
                    if (O === 'style') {
                      m || M.push(F)
                      return
                    }
                    ;(0, c.default)(N).call(N, O) !== !1 && M.push(F)
                  })
                  var B = u(T, M)
                  y.push(B)
                }
              },
              characters: function (T) {
                !T || l(x, g) || y.push(T)
              },
              endElement: function (T) {
                if (!l(T, g)) {
                  var R = s(T)
                  y.push(R), D()
                }
              },
              comment: function (T) {
                S(T)
              }
            })
            var C = y.join('')
            return (C = f(C)), C
          }
          n.default = p
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(132)),
            a = e(t(121))
          ;(0, i.default)(n, '__esModule', { value: !0 }),
            (n.TOP_LEVEL_TAGS = n.EMPTY_TAGS = n.NECESSARY_ATTRS = n.IGNORE_TAGS = void 0),
            (n.IGNORE_TAGS = new r.default([
              'doctype',
              '!doctype',
              'html',
              'head',
              'meta',
              'body',
              'script',
              'style',
              'link',
              'frame',
              'iframe',
              'title',
              'svg',
              'center',
              'o:p'
            ])),
            (n.NECESSARY_ATTRS = new a.default([
              ['img', ['src', 'alt']],
              ['a', ['href', 'target']],
              ['td', ['colspan', 'rowspan']],
              ['th', ['colspan', 'rowspan']]
            ])),
            (n.EMPTY_TAGS = new r.default([
              'area',
              'base',
              'basefont',
              'br',
              'col',
              'hr',
              'img',
              'input',
              'isindex',
              'embed'
            ])),
            (n.TOP_LEVEL_TAGS = new r.default([
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'p',
              'ul',
              'ol',
              'table',
              'blockquote',
              'pre',
              'hr',
              'form'
            ]))
        },
        function (o, n, t) {
          var e = t(295)
          o.exports = e
        },
        function (o, n, t) {
          t(296), t(61), t(50), t(54)
          var e = t(9)
          o.exports = e.Set
        },
        function (o, n, t) {
          var e = t(122),
            i = t(124)
          o.exports = e(
            'Set',
            function (r) {
              return function () {
                return r(this, arguments.length ? arguments[0] : void 0)
              }
            },
            i
          )
        },
        function (o, n) {
          function t() {}
          ;(t.prototype = {
            handler: null,
            startTagRe:
              /^<([^>\s\/]+)((\s+[^=>\s]+(\s*=\s*((\"[^"]*\")|(\'[^']*\')|[^>\s]+))?)*)\s*\/?\s*>/m,
            endTagRe: /^<\/([^>\s]+)[^>]*>/m,
            attrRe: /([^=\s]+)(\s*=\s*((\"([^"]*)\")|(\'([^']*)\')|[^>\s]+))?/gm,
            parse: function (e, i) {
              i && (this.contentHandler = i)
              for (var r, a, c, A = !1, d = this; e.length > 0; )
                e.substring(0, 4) == '<!--'
                  ? ((c = e.indexOf('-->')),
                    c != -1
                      ? (this.contentHandler.comment(e.substring(4, c)),
                        (e = e.substring(c + 3)),
                        (A = !1))
                      : (A = !0))
                  : e.substring(0, 2) == '</'
                  ? this.endTagRe.test(e)
                    ? ((r = RegExp.lastMatch),
                      (a = RegExp.rightContext),
                      r.replace(this.endTagRe, function () {
                        return d.parseEndTag.apply(d, arguments)
                      }),
                      (e = a),
                      (A = !1))
                    : (A = !0)
                  : e.charAt(0) == '<' &&
                    (this.startTagRe.test(e)
                      ? ((r = RegExp.lastMatch),
                        (a = RegExp.rightContext),
                        r.replace(this.startTagRe, function () {
                          return d.parseStartTag.apply(d, arguments)
                        }),
                        (e = a),
                        (A = !1))
                      : (A = !0)),
                  A &&
                    ((c = e.indexOf('<')),
                    c == -1
                      ? (this.contentHandler.characters(e), (e = ''))
                      : (this.contentHandler.characters(e.substring(0, c)), (e = e.substring(c)))),
                  (A = !0)
            },
            parseStartTag: function (e, i, r) {
              var a = this.parseAttributes(i, r)
              this.contentHandler.startElement(i, a)
            },
            parseEndTag: function (e, i) {
              this.contentHandler.endElement(i)
            },
            parseAttributes: function (e, i) {
              var r = this,
                a = []
              return (
                i.replace(this.attrRe, function (c, A, d, h, f, l, u, s) {
                  a.push(r.parseAttribute(e, c, A, d, h, f, l, u, s))
                }),
                a
              )
            },
            parseAttribute: function (e, i, r) {
              var a = ''
              arguments[7]
                ? (a = arguments[8])
                : arguments[5]
                ? (a = arguments[6])
                : arguments[3] && (a = arguments[4])
              var c = !a && !arguments[3]
              return { name: r, value: c ? null : a }
            }
          }),
            (o.exports = t)
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          function r(a, c) {
            function A(d) {
              a.selection.createRangeByElem(d), a.selection.restoreSelection()
            }
            c.push(A)
          }
          n.default = r
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(4))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = t(2),
            c = t(6),
            A = a.__importDefault(t(3))
          function d(h) {
            var f = [],
              l = h.childNodes() || []
            return (
              (0, r.default)(l).call(l, function (u) {
                var s,
                  p = u.nodeType
                if (
                  (p === 3 && ((s = u.textContent || ''), (s = c.replaceHtmlSymbol(s))), p === 1)
                ) {
                  ;(s = {}), (s = s), (s.tag = u.nodeName.toLowerCase())
                  for (var v = [], m = u.attributes, g = m.length || 0, y = 0; y < g; y++) {
                    var x = m[y]
                    v.push({ name: x.name, value: x.value })
                  }
                  ;(s.attrs = v), (s.children = d(A.default(u)))
                }
                s && f.push(s)
              }),
              f
            )
          }
          n.default = d
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(92)),
            r = e(t(1)),
            a = e(t(4))
          ;(0, r.default)(n, '__esModule', { value: !0 })
          var c = t(2),
            A = c.__importDefault(t(3))
          function d(h, f) {
            f === void 0 && (f = document.createElement('div'))
            var l = f
            return (
              (0, a.default)(h).call(h, function (u) {
                var s
                if (
                  (typeof u == 'string' && (s = document.createTextNode(u)),
                  (0, i.default)(u) === 'object')
                ) {
                  var p
                  ;(s = document.createElement(u.tag)),
                    (0, a.default)((p = u.attrs)).call(p, function (v) {
                      A.default(s).attr(v.name, v.value)
                    }),
                    u.children && u.children.length > 0 && d(u.children, s.getRootNode())
                }
                s && l.appendChild(s)
              }),
              A.default(l)
            )
          }
          n.default = d
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(89)),
            a = e(t(70)),
            c = e(t(28)),
            A = e(t(302)),
            d = e(t(4)),
            h = e(t(94)),
            f = e(t(133)),
            l = e(t(46)),
            u = e(t(57))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var s = t(2),
            p = s.__importDefault(t(87)),
            v = s.__importDefault(t(314)),
            m = s.__importDefault(t(3)),
            g = (function () {
              function y(x) {
                ;(this.editor = x), (this.menuList = []), (this.constructorList = v.default)
              }
              return (
                (y.prototype.extend = function (x, S) {
                  !S || typeof S != 'function' || (this.constructorList[x] = S)
                }),
                (y.prototype.init = function () {
                  var x,
                    S,
                    D = this,
                    P = this.editor.config,
                    C = P.excludeMenus
                  ;(0, r.default)(C) === !1 && (C = []),
                    (P.menus = (0, a.default)((x = P.menus)).call(x, function (O) {
                      return (0, c.default)(C).call(C, O) === !1
                    }))
                  var E = (0, A.default)(p.default.globalCustomMenuConstructorList)
                  ;(E = (0, a.default)(E).call(E, function (O) {
                    return (0, c.default)(C).call(C, O)
                  })),
                    (0, d.default)(E).call(E, function (O) {
                      delete p.default.globalCustomMenuConstructorList[O]
                    }),
                    (0, d.default)((S = P.menus)).call(S, function (O) {
                      var b = D.constructorList[O]
                      D._initMenuList(O, b)
                    })
                  for (
                    var T = 0, R = (0, h.default)(p.default.globalCustomMenuConstructorList);
                    T < R.length;
                    T++
                  ) {
                    var N = R[T],
                      M = N[0],
                      B = N[1],
                      F = B
                    this._initMenuList(M, F)
                  }
                  this._addToToolbar(), P.showMenuTooltips && this._bindMenuTooltips()
                }),
                (y.prototype._initMenuList = function (x, S) {
                  var D
                  if (!(S == null || typeof S != 'function'))
                    if (
                      (0, f.default)((D = this.menuList)).call(D, function (C) {
                        return C.key === x
                      })
                    )
                      console.warn('\u83DC\u5355\u540D\u79F0\u91CD\u590D:' + x)
                    else {
                      var P = new S(this.editor)
                      ;(P.key = x), this.menuList.push(P)
                    }
                }),
                (y.prototype._bindMenuTooltips = function () {
                  var x = this.editor,
                    S = x.$toolbarElem,
                    D = x.config,
                    P = D.menuTooltipPosition,
                    C = m.default(
                      '<div class="w-e-menu-tooltip w-e-menu-tooltip-' +
                        P +
                        `">
            <div class="w-e-menu-tooltip-item-wrapper">
              <div></div>
            </div>
          </div>`
                    )
                  C.css('visibility', 'hidden'),
                    S.append(C),
                    C.css('z-index', x.zIndex.get('tooltip'))
                  var E = 0
                  function T() {
                    E && clearTimeout(E)
                  }
                  function R() {
                    T(), C.css('visibility', 'hidden')
                  }
                  S.on('mouseover', function (N) {
                    var M = N.target,
                      B = m.default(M),
                      F,
                      O
                    if (B.isContain(S)) {
                      R()
                      return
                    }
                    if (B.parentUntil('.w-e-droplist') != null) R()
                    else if (B.attr('data-title')) (F = B.attr('data-title')), (O = B)
                    else {
                      var b = B.parentUntil('.w-e-menu')
                      b != null && ((F = b.attr('data-title')), (O = b))
                    }
                    if (F && O) {
                      T()
                      var $ = O.getOffsetData()
                      C.text(x.i18next.t('menus.title.' + F))
                      var H = C.getOffsetData(),
                        U = $.left + $.width / 2 - H.width / 2
                      C.css('left', U + 'px'),
                        P === 'up'
                          ? C.css('top', $.top - H.height - 8 + 'px')
                          : P === 'down' && C.css('top', $.top + $.height + 8 + 'px'),
                        (E = (0, l.default)(function () {
                          C.css('visibility', 'visible')
                        }, 200))
                    } else R()
                  }).on('mouseleave', function () {
                    R()
                  })
                }),
                (y.prototype._addToToolbar = function () {
                  var x,
                    S = this.editor,
                    D = S.$toolbarElem
                  ;(0, d.default)((x = this.menuList)).call(x, function (P) {
                    var C = P.$elem
                    C && D.append(C)
                  })
                }),
                (y.prototype.menuFind = function (x) {
                  for (var S = this.menuList, D = 0, P = S.length; D < P; D++)
                    if (S[D].key === x) return S[D]
                  return S[0]
                }),
                (y.prototype.changeActive = function () {
                  var x
                  ;(0, d.default)((x = this.menuList)).call(x, function (S) {
                    var D
                    ;(0, l.default)((0, u.default)((D = S.tryChangeActive)).call(D, S), 100)
                  })
                }),
                y
              )
            })()
          n.default = g
        },
        function (o, n, t) {
          o.exports = t(303)
        },
        function (o, n, t) {
          var e = t(304)
          o.exports = e
        },
        function (o, n, t) {
          t(305)
          var e = t(9)
          o.exports = e.Object.keys
        },
        function (o, n, t) {
          var e = t(5),
            i = t(31),
            r = t(52),
            a = t(11),
            c = a(function () {
              r(1)
            })
          e(
            { target: 'Object', stat: !0, forced: c },
            {
              keys: function (d) {
                return r(i(d))
              }
            }
          )
        },
        function (o, n, t) {
          var e = t(307)
          o.exports = e
        },
        function (o, n, t) {
          t(308)
          var e = t(9)
          o.exports = e.Object.entries
        },
        function (o, n, t) {
          var e = t(5),
            i = t(309).entries
          e(
            { target: 'Object', stat: !0 },
            {
              entries: function (a) {
                return i(a)
              }
            }
          )
        },
        function (o, n, t) {
          var e = t(14),
            i = t(52),
            r = t(30),
            a = t(59).f,
            c = function (A) {
              return function (d) {
                for (var h = r(d), f = i(h), l = f.length, u = 0, s = [], p; l > u; )
                  (p = f[u++]), (!e || a.call(h, p)) && s.push(A ? [p, h[p]] : h[p])
                return s
              }
            }
          o.exports = { entries: c(!0), values: c(!1) }
        },
        function (o, n, t) {
          var e = t(311)
          o.exports = e
        },
        function (o, n, t) {
          var e = t(312),
            i = Array.prototype
          o.exports = function (r) {
            var a = r.some
            return r === i || (r instanceof Array && a === i.some) ? e : a
          }
        },
        function (o, n, t) {
          t(313)
          var e = t(15)
          o.exports = e('Array').some
        },
        function (o, n, t) {
          var e = t(5),
            i = t(32).some,
            r = t(67),
            a = t(22),
            c = r('some'),
            A = a('some')
          e(
            { target: 'Array', proto: !0, forced: !c || !A },
            {
              some: function (h) {
                return i(this, h, arguments.length > 1 ? arguments[1] : void 0)
              }
            }
          )
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(315)),
            c = r.__importDefault(t(316)),
            A = r.__importDefault(t(321)),
            d = r.__importDefault(t(326)),
            h = r.__importDefault(t(327)),
            f = r.__importDefault(t(328)),
            l = r.__importDefault(t(329)),
            u = r.__importDefault(t(331)),
            s = r.__importDefault(t(333)),
            p = r.__importDefault(t(334)),
            v = r.__importDefault(t(337)),
            m = r.__importDefault(t(338)),
            g = r.__importDefault(t(339)),
            y = r.__importDefault(t(350)),
            x = r.__importDefault(t(365)),
            S = r.__importDefault(t(369)),
            D = r.__importDefault(t(137)),
            P = r.__importDefault(t(378)),
            C = r.__importDefault(t(380)),
            E = r.__importDefault(t(381)),
            T = r.__importDefault(t(382)),
            R = r.__importDefault(t(401)),
            N = r.__importDefault(t(406)),
            M = r.__importDefault(t(409))
          n.default = {
            bold: a.default,
            head: c.default,
            italic: d.default,
            link: A.default,
            underline: h.default,
            strikeThrough: f.default,
            fontName: l.default,
            fontSize: u.default,
            justify: s.default,
            quote: p.default,
            backColor: v.default,
            foreColor: m.default,
            video: g.default,
            image: y.default,
            indent: x.default,
            emoticon: S.default,
            list: D.default,
            lineHeight: P.default,
            undo: C.default,
            redo: E.default,
            table: T.default,
            code: R.default,
            splitLine: N.default,
            todo: M.default
          }
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(23)),
            c = r.__importDefault(t(3)),
            A = (function (d) {
              r.__extends(h, d)
              function h(f) {
                var l = this,
                  u = c.default(`<div class="w-e-menu" data-title="\u52A0\u7C97">
                <i class="w-e-icon-bold"></i>
            </div>`)
                return (l = d.call(this, u, f) || this), l
              }
              return (
                (h.prototype.clickHandler = function () {
                  var f = this.editor,
                    l = f.selection.isSelectionEmpty()
                  l && f.selection.createEmptyRange(),
                    f.cmd.do('bold'),
                    l && (f.selection.collapseRange(), f.selection.restoreSelection())
                }),
                (h.prototype.tryChangeActive = function () {
                  var f = this.editor
                  f.cmd.queryCommandState('bold') ? this.active() : this.unActive()
                }),
                h
              )
            })(a.default)
          n.default = A
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(27)),
            a = e(t(29)),
            c = e(t(4)),
            A = e(t(317)),
            d = e(t(28))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var h = t(2),
            f = h.__importDefault(t(24)),
            l = h.__importDefault(t(3)),
            u = t(6),
            s = t(7),
            p = (function (v) {
              h.__extends(m, v)
              function m(g) {
                var y = this,
                  x = l.default(
                    '<div class="w-e-menu" data-title="\u6807\u9898"><i class="w-e-icon-header"></i></div>'
                  ),
                  S = {
                    width: 100,
                    title: '\u8BBE\u7F6E\u6807\u9898',
                    type: 'list',
                    list: [
                      { $elem: l.default('<h1>H1</h1>'), value: '<h1>' },
                      { $elem: l.default('<h2>H2</h2>'), value: '<h2>' },
                      { $elem: l.default('<h3>H3</h3>'), value: '<h3>' },
                      { $elem: l.default('<h4>H4</h4>'), value: '<h4>' },
                      { $elem: l.default('<h5>H5</h5>'), value: '<h5>' },
                      {
                        $elem: l.default(
                          '<p>' + g.i18next.t('menus.dropListMenu.head.\u6B63\u6587') + '</p>'
                        ),
                        value: '<p>'
                      }
                    ],
                    clickHandler: function (C) {
                      y.command(C)
                    }
                  }
                y = v.call(this, x, g, S) || this
                var D = g.config.onCatalogChange
                return D && ((y.oldCatalogs = []), y.addListenerCatalog(), y.getCatalogs()), y
              }
              return (
                (m.prototype.command = function (g) {
                  var y = this.editor,
                    x = y.selection.getSelectionContainerElem()
                  if (x && y.$textElem.equal(x)) this.setMultilineHead(g)
                  else {
                    var S
                    if (
                      (0, r.default)(
                        (S = ['OL', 'UL', 'LI', 'TABLE', 'TH', 'TR', 'CODE', 'HR'])
                      ).call(S, l.default(x).getNodeName()) > -1
                    )
                      return
                    y.cmd.do('formatBlock', g)
                  }
                  g !== '<p>' && this.addUidForSelectionElem()
                }),
                (m.prototype.addUidForSelectionElem = function () {
                  var g = this.editor,
                    y = g.selection.getSelectionContainerElem(),
                    x = u.getRandomCode()
                  l.default(y).attr('id', x)
                }),
                (m.prototype.addListenerCatalog = function () {
                  var g = this,
                    y = this.editor
                  y.txt.eventHooks.changeEvents.push(function () {
                    g.getCatalogs()
                  })
                }),
                (m.prototype.getCatalogs = function () {
                  var g = this.editor,
                    y = this.editor.$textElem,
                    x = g.config.onCatalogChange,
                    S = (0, a.default)(y).call(y, 'h1,h2,h3,h4,h5'),
                    D = []
                  ;(0, c.default)(S).call(S, function (P, C) {
                    var E = l.default(P),
                      T = E.attr('id'),
                      R = E.getNodeName(),
                      N = E.text()
                    T || ((T = u.getRandomCode()), E.attr('id', T)),
                      N && D.push({ tag: R, id: T, text: N })
                  }),
                    (0, A.default)(this.oldCatalogs) !== (0, A.default)(D) &&
                      ((this.oldCatalogs = D), x && x(D))
                }),
                (m.prototype.setMultilineHead = function (g) {
                  var y = this,
                    x,
                    S,
                    D = this.editor,
                    P = D.selection,
                    C =
                      (x = P.getSelectionContainerElem()) === null || x === void 0
                        ? void 0
                        : x.elems[0],
                    E = [
                      'IMG',
                      'VIDEO',
                      'TABLE',
                      'TH',
                      'TR',
                      'UL',
                      'OL',
                      'PRE',
                      'HR',
                      'BLOCKQUOTE'
                    ],
                    T = l.default(P.getSelectionStartElem()),
                    R = l.default(P.getSelectionEndElem())
                  R.elems[0].outerHTML === l.default(s.EMPTY_P).elems[0].outerHTML &&
                    !R.elems[0].nextSibling &&
                    (R = R.prev())
                  var N = []
                  N.push(T.getNodeTop(D))
                  var M = [],
                    B =
                      (S = P.getRange()) === null || S === void 0
                        ? void 0
                        : S.commonAncestorContainer.childNodes
                  B == null ||
                    (0, c.default)(B).call(B, function (b, $) {
                      b === N[0].getNode() && M.push($),
                        b === R.getNodeTop(D).getNode() && M.push($)
                    })
                  for (var F = 0; N[F].getNode() !== R.getNodeTop(D).getNode(); ) {
                    if (!N[F].elems[0]) return
                    var O = l.default(N[F].next().getNode())
                    N.push(O), F++
                  }
                  N == null ||
                    (0, c.default)(N).call(N, function (b, $) {
                      if (!y.hasTag(b, E)) {
                        var H = l.default(g),
                          U = b.parent().getNode()
                        H.html('' + b.html()), U.insertBefore(H.getNode(), b.getNode()), b.remove()
                      }
                    }),
                    P.createRangeByElems(C.children[M[0]], C.children[M[1]])
                }),
                (m.prototype.hasTag = function (g, y) {
                  var x = this,
                    S
                  if (!g) return !1
                  if ((0, d.default)(y).call(y, g == null ? void 0 : g.getNodeName())) return !0
                  var D = !1
                  return (
                    (S = g.children()) === null ||
                      S === void 0 ||
                      (0, c.default)(S).call(S, function (P) {
                        D = x.hasTag(l.default(P), y)
                      }),
                    D
                  )
                }),
                (m.prototype.tryChangeActive = function () {
                  var g = this.editor,
                    y = /^h/i,
                    x = g.cmd.queryCommandValue('formatBlock')
                  y.test(x) ? this.active() : this.unActive()
                }),
                m
              )
            })(f.default)
          n.default = p
        },
        function (o, n, t) {
          o.exports = t(318)
        },
        function (o, n, t) {
          var e = t(319)
          o.exports = e
        },
        function (o, n, t) {
          t(320)
          var e = t(9)
          e.JSON || (e.JSON = { stringify: JSON.stringify }),
            (o.exports = function (r, a, c) {
              return e.JSON.stringify.apply(null, arguments)
            })
        },
        function (o, n, t) {
          var e = t(5),
            i = t(36),
            r = t(11),
            a = i('JSON', 'stringify'),
            c = /[\uD800-\uDFFF]/g,
            A = /^[\uD800-\uDBFF]$/,
            d = /^[\uDC00-\uDFFF]$/,
            h = function (l, u, s) {
              var p = s.charAt(u - 1),
                v = s.charAt(u + 1)
              return (A.test(l) && !d.test(v)) || (d.test(l) && !A.test(p))
                ? '\\u' + l.charCodeAt(0).toString(16)
                : l
            },
            f = r(function () {
              return a('\uDF06\uD834') !== '"\\udf06\\ud834"' || a('\uDEAD') !== '"\\udead"'
            })
          a &&
            e(
              { target: 'JSON', stat: !0, forced: f },
              {
                stringify: function (u, s, p) {
                  var v = a.apply(null, arguments)
                  return typeof v == 'string' ? v.replace(c, h) : v
                }
              }
            )
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(17))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = t(2),
            c = a.__importDefault(t(38)),
            A = a.__importDefault(t(3)),
            d = a.__importDefault(t(322)),
            h = a.__importStar(t(96)),
            f = a.__importDefault(t(33)),
            l = a.__importDefault(t(324)),
            u = t(7),
            s = (function (p) {
              a.__extends(v, p)
              function v(m) {
                var g = this,
                  y = A.default(
                    '<div class="w-e-menu" data-title="\u94FE\u63A5"><i class="w-e-icon-link"></i></div>'
                  )
                return (g = p.call(this, y, m) || this), l.default(m), g
              }
              return (
                (v.prototype.clickHandler = function () {
                  var m = this.editor,
                    g,
                    y = m.selection.getSelectionContainerElem(),
                    x = m.$textElem,
                    S = x.html(),
                    D = (0, r.default)(S).call(S)
                  if (D === u.EMPTY_P) {
                    var P = x.children()
                    m.selection.createRangeByElem(P, !0, !0),
                      (y = m.selection.getSelectionContainerElem())
                  }
                  if (!(y && m.$textElem.equal(y)))
                    if (this.isActive) {
                      var C = '',
                        E = ''
                      if (((g = m.selection.getSelectionContainerElem()), !g)) return
                      if (g.getNodeName() !== 'A') {
                        var T = h.getParentNodeA(g)
                        g = A.default(T)
                      }
                      ;(C = g.elems[0].innerText), (E = g.attr('href')), this.createPanel(C, E)
                    } else
                      m.selection.isSelectionEmpty()
                        ? this.createPanel('', '')
                        : this.createPanel(m.selection.getSelectionText(), '')
                }),
                (v.prototype.createPanel = function (m, g) {
                  var y = d.default(this.editor, m, g),
                    x = new f.default(this, y)
                  x.create()
                }),
                (v.prototype.tryChangeActive = function () {
                  var m = this.editor
                  h.default(m) ? this.active() : this.unActive()
                }),
                v
              )
            })(c.default)
          n.default = s
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(28)),
            a = e(t(17)),
            c = e(t(29))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var A = t(2),
            d = t(6),
            h = A.__importDefault(t(3)),
            f = A.__importStar(t(96)),
            l = t(323)
          function u(s, p, v) {
            var m = d.getRandom('input-link'),
              g = d.getRandom('input-text'),
              y = d.getRandom('btn-ok'),
              x = d.getRandom('btn-del'),
              S = f.default(s) ? 'inline-block' : 'none',
              D
            function P() {
              if (!!f.default(s)) {
                var N = s.selection.getSelectionContainerElem()
                !N || (s.selection.createRangeByElem(N), s.selection.restoreSelection(), (D = N))
              }
            }
            function C(N, M) {
              var B = N.replace(/</g, '&lt;').replace(/>/g, '&gt;'),
                F = h.default('<a target="_blank">' + B + '</a>'),
                O = F.elems[0]
              ;(O.innerText = N), (O.href = M), f.default(s) && P(), s.cmd.do('insertElem', F)
            }
            function E() {
              if (!!f.default(s))
                if ((P(), D.getNodeName() === 'A')) {
                  var N,
                    M = D.elems[0],
                    B = M.parentElement
                  B && (0, r.default)((N = f.EXTRA_TAG)).call(N, B.nodeName)
                    ? (B.innerHTML = M.innerHTML)
                    : s.cmd.do('insertHTML', '<span>' + M.innerHTML + '</span>')
                } else {
                  var F = f.getParentNodeA(D),
                    O = F.innerHTML
                  s.cmd.do('insertHTML', '<span>' + O + '</span>')
                }
            }
            function T(N, M) {
              var B = s.config.linkCheck(N, M)
              if (B !== void 0) {
                if (B === !0) return !0
                s.config.customAlert(B, 'warning')
              }
              return !1
            }
            var R = {
              width: 300,
              height: 0,
              tabs: [
                {
                  title: s.i18next.t('menus.panelMenus.link.\u94FE\u63A5'),
                  tpl:
                    `<div>
                        <input
                            id="` +
                    g +
                    `"
                            type="text"
                            class="block"
                            placeholder="` +
                    s.i18next.t('menus.panelMenus.link.\u94FE\u63A5\u6587\u5B57') +
                    `"/>
                        </td>
                        <input
                            id="` +
                    m +
                    `"
                            type="text"
                            class="block"
                            placeholder="` +
                    s.i18next.t('\u5982') +
                    ` https://..."/>
                        </td>
                        <div class="w-e-button-container">
                            <button type="button" id="` +
                    y +
                    `" class="right">
                                ` +
                    s.i18next.t('\u63D2\u5165') +
                    `
                            </button>
                            <button type="button" id="` +
                    x +
                    '" class="gray right" style="display:' +
                    S +
                    `">
                                ` +
                    s.i18next.t('menus.panelMenus.link.\u53D6\u6D88\u94FE\u63A5') +
                    `
                            </button>
                        </div>
                    </div>`,
                  events: [
                    {
                      selector: '#' + y,
                      type: 'click',
                      fn: function () {
                        var M,
                          B,
                          F,
                          O,
                          b,
                          $ = s.selection.getSelectionContainerElem(),
                          H = $ == null ? void 0 : $.elems[0]
                        s.selection.restoreSelection()
                        var U = s.selection.getSelectionRangeTopNodes()[0].getNode(),
                          K = window.getSelection(),
                          w = h.default('#' + m),
                          X = h.default('#' + g),
                          J = (0, a.default)((M = w.val())).call(M),
                          Q = (0, a.default)((B = X.val())).call(B),
                          V = ''
                        K &&
                          !(K != null && K.isCollapsed) &&
                          (V =
                            (O = l.insertHtml(K, U)) === null || O === void 0
                              ? void 0
                              : (0, a.default)(O).call(O))
                        var W = V == null ? void 0 : V.replace(/<.*?>/g, ''),
                          q = (b = W == null ? void 0 : W.length) !== null && b !== void 0 ? b : 0
                        if (q <= Q.length) {
                          var rt = Q.substring(0, q),
                            it = Q.substring(q)
                          W === rt && (Q = W + it)
                        }
                        if (!!J && (Q || (Q = J), !!T(Q, J))) {
                          if ((H == null ? void 0 : H.nodeName) === 'A')
                            return H.setAttribute('href', J), (H.innerText = Q), !0
                          if (
                            (H == null ? void 0 : H.nodeName) !== 'A' &&
                            (0, r.default)((F = f.EXTRA_TAG)).call(F, H.nodeName)
                          ) {
                            var dt = f.getParentNodeA($)
                            if (dt) return dt.setAttribute('href', J), (H.innerText = Q), !0
                          }
                          return C(Q, J), !0
                        }
                      },
                      bindEnter: !0
                    },
                    {
                      selector: '#' + x,
                      type: 'click',
                      fn: function () {
                        return E(), !0
                      }
                    }
                  ]
                }
              ],
              setLinkValue: function (M, B) {
                var F = '',
                  O = '',
                  b
                B === 'text' && ((F = '#' + g), (O = p)),
                  B === 'link' && ((F = '#' + m), (O = v)),
                  (b = (0, c.default)(M).call(M, F).elems[0]),
                  (b.value = O)
              }
            }
            return R
          }
          n.default = u
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(4))
          ;(0, i.default)(n, '__esModule', { value: !0 }),
            (n.insertHtml = n.createPartHtml = n.makeHtmlString = n.getTopNode = void 0)
          function a(l, u) {
            var s = l,
              p = l
            do {
              if (s.textContent === u) break
              ;(p = s), s.parentNode && (s = s == null ? void 0 : s.parentNode)
            } while ((s == null ? void 0 : s.nodeName) !== 'P')
            return p
          }
          n.getTopNode = a
          function c(l, u) {
            var s = l.nodeName,
              p = ''
            if (l.nodeType === 3 || /^(h|H)[1-6]$/.test(s)) return u
            if (l.nodeType === 1) {
              var v = l.getAttribute('style'),
                m = l.getAttribute('face'),
                g = l.getAttribute('color')
              v && (p = p + (' style="' + v + '"')),
                m && (p = p + (' face="' + m + '"')),
                g && (p = p + (' color="' + g + '"'))
            }
            return (s = s.toLowerCase()), '<' + s + p + '>' + u + '</' + s + '>'
          }
          n.makeHtmlString = c
          function A(l, u, s, p) {
            var v,
              m = (v = u.textContent) === null || v === void 0 ? void 0 : v.substring(s, p),
              g = u,
              y = ''
            do (y = c(g, m != null ? m : '')), (m = y), (g = g == null ? void 0 : g.parentElement)
            while (g && g.textContent !== l)
            return y
          }
          n.createPartHtml = A
          function d(l, u) {
            var s,
              p,
              v,
              m,
              g,
              y = l.anchorNode,
              x = l.focusNode,
              S = l.anchorOffset,
              D = l.focusOffset,
              P = (s = u.textContent) !== null && s !== void 0 ? s : '',
              C = h(u),
              E = '',
              T = '',
              R = '',
              N = '',
              M = y,
              B = x,
              F = y
            if (y != null && y.isEqualNode(x != null ? x : null)) {
              var O = A(P, y, S, D)
              return (O = f(C, O)), O
            }
            for (
              y && (T = A(P, y, S != null ? S : 0)),
                x && (N = A(P, x, 0, D)),
                y && (M = a(y, P)),
                x && (B = a(x, P)),
                F = (p = M == null ? void 0 : M.nextSibling) !== null && p !== void 0 ? p : y;
              !(F != null && F.isEqualNode(B != null ? B : null));

            ) {
              var b = F == null ? void 0 : F.nodeName
              if (b === '#text') R = R + (F == null ? void 0 : F.textContent)
              else {
                var $ =
                  (m =
                    (v = F == null ? void 0 : F.firstChild) === null || v === void 0
                      ? void 0
                      : v.parentElement) === null || m === void 0
                    ? void 0
                    : m.innerHTML
                F && (R = R + c(F, $ != null ? $ : ''))
              }
              var H = (g = F == null ? void 0 : F.nextSibling) !== null && g !== void 0 ? g : F
              if (H === F) break
              F = H
            }
            return (E = '' + T + R + N), (E = f(C, E)), E
          }
          n.insertHtml = d
          function h(l) {
            for (
              var u, s = (u = l.textContent) !== null && u !== void 0 ? u : '', p = [];
              (l == null ? void 0 : l.textContent) === s;

            )
              l.nodeName !== 'P' && l.nodeName !== 'TABLE' && p.push(l), (l = l.childNodes[0])
            return p
          }
          function f(l, u) {
            return (
              (0, r.default)(l).call(l, function (s) {
                u = c(s, u)
              }),
              u
            )
          }
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(325))
          function c(A) {
            a.default(A)
          }
          n.default = c
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(28))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = t(2),
            c = a.__importDefault(t(3)),
            A = a.__importDefault(t(39)),
            d = t(96)
          function h(l) {
            var u
            function s(v) {
              var m = [
                {
                  $elem: c.default(
                    '<span>' +
                      l.i18next.t('menus.panelMenus.link.\u67E5\u770B\u94FE\u63A5') +
                      '</span>'
                  ),
                  onClick: function (y, x) {
                    var S = x.attr('href')
                    return window.open(S, '_target'), !0
                  }
                },
                {
                  $elem: c.default(
                    '<span>' +
                      l.i18next.t('menus.panelMenus.link.\u53D6\u6D88\u94FE\u63A5') +
                      '</span>'
                  ),
                  onClick: function (y, x) {
                    var S, D
                    y.selection.createRangeByElem(x), y.selection.restoreSelection()
                    var P = x.childNodes()
                    if ((P == null ? void 0 : P.getNodeName()) === 'IMG') {
                      var C =
                        (D =
                          (S = y.selection.getSelectionContainerElem()) === null || S === void 0
                            ? void 0
                            : S.children()) === null || D === void 0
                          ? void 0
                          : D.elems[0].children[0]
                      y.cmd.do(
                        'insertHTML',
                        `<img 
                                src=` +
                          (C == null ? void 0 : C.getAttribute('src')) +
                          ` 
                                style=` +
                          (C == null ? void 0 : C.getAttribute('style')) +
                          '>'
                      )
                    } else {
                      var E,
                        T = x.elems[0],
                        R = T.innerHTML,
                        N = T.parentElement
                      N && (0, r.default)((E = d.EXTRA_TAG)).call(E, N.nodeName)
                        ? (N.innerHTML = R)
                        : y.cmd.do('insertHTML', '<span>' + R + '</span>')
                    }
                    return !0
                  }
                }
              ]
              ;(u = new A.default(l, v, m)), u.create()
            }
            function p() {
              u && (u.remove(), (u = null))
            }
            return { showLinkTooltip: s, hideLinkTooltip: p }
          }
          function f(l) {
            var u = h(l),
              s = u.showLinkTooltip,
              p = u.hideLinkTooltip
            l.txt.eventHooks.linkClickEvents.push(s),
              l.txt.eventHooks.clickEvents.push(p),
              l.txt.eventHooks.keyupEvents.push(p),
              l.txt.eventHooks.toolbarClickEvents.push(p),
              l.txt.eventHooks.menuClickEvents.push(p),
              l.txt.eventHooks.textScrollEvents.push(p)
          }
          n.default = f
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(23)),
            c = r.__importDefault(t(3)),
            A = (function (d) {
              r.__extends(h, d)
              function h(f) {
                var l = this,
                  u = c.default(`<div class="w-e-menu" data-title="\u659C\u4F53">
                <i class="w-e-icon-italic"></i>
            </div>`)
                return (l = d.call(this, u, f) || this), l
              }
              return (
                (h.prototype.clickHandler = function () {
                  var f = this.editor,
                    l = f.selection.isSelectionEmpty()
                  l && f.selection.createEmptyRange(),
                    f.cmd.do('italic'),
                    l && (f.selection.collapseRange(), f.selection.restoreSelection())
                }),
                (h.prototype.tryChangeActive = function () {
                  var f = this.editor
                  f.cmd.queryCommandState('italic') ? this.active() : this.unActive()
                }),
                h
              )
            })(a.default)
          n.default = A
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(23)),
            c = r.__importDefault(t(3)),
            A = (function (d) {
              r.__extends(h, d)
              function h(f) {
                var l = this,
                  u = c.default(`<div class="w-e-menu" data-title="\u4E0B\u5212\u7EBF">
                <i class="w-e-icon-underline"></i>
            </div>`)
                return (l = d.call(this, u, f) || this), l
              }
              return (
                (h.prototype.clickHandler = function () {
                  var f = this.editor,
                    l = f.selection.isSelectionEmpty()
                  l && f.selection.createEmptyRange(),
                    f.cmd.do('underline'),
                    l && (f.selection.collapseRange(), f.selection.restoreSelection())
                }),
                (h.prototype.tryChangeActive = function () {
                  var f = this.editor
                  f.cmd.queryCommandState('underline') ? this.active() : this.unActive()
                }),
                h
              )
            })(a.default)
          n.default = A
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(23)),
            c = r.__importDefault(t(3)),
            A = (function (d) {
              r.__extends(h, d)
              function h(f) {
                var l = this,
                  u = c.default(`<div class="w-e-menu" data-title="\u5220\u9664\u7EBF">
                <i class="w-e-icon-strikethrough"></i>
            </div>`)
                return (l = d.call(this, u, f) || this), l
              }
              return (
                (h.prototype.clickHandler = function () {
                  var f = this.editor,
                    l = f.selection.isSelectionEmpty()
                  l && f.selection.createEmptyRange(),
                    f.cmd.do('strikeThrough'),
                    l && (f.selection.collapseRange(), f.selection.restoreSelection())
                }),
                (h.prototype.tryChangeActive = function () {
                  var f = this.editor
                  f.cmd.queryCommandState('strikeThrough') ? this.active() : this.unActive()
                }),
                h
              )
            })(a.default)
          n.default = A
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(24)),
            c = r.__importDefault(t(3)),
            A = r.__importDefault(t(330)),
            d = (function (h) {
              r.__extends(f, h)
              function f(l) {
                var u = this,
                  s = c.default(`<div class="w-e-menu" data-title="\u5B57\u4F53">
                <i class="w-e-icon-font"></i>
            </div>`),
                  p = new A.default(l.config.fontNames),
                  v = {
                    width: 100,
                    title: '\u8BBE\u7F6E\u5B57\u4F53',
                    type: 'list',
                    list: p.getItemList(),
                    clickHandler: function (g) {
                      u.command(g)
                    }
                  }
                return (u = h.call(this, s, l, v) || this), u
              }
              return (
                (f.prototype.command = function (l) {
                  var u,
                    s = this.editor,
                    p = s.selection.isSelectionEmpty(),
                    v =
                      (u = s.selection.getSelectionContainerElem()) === null || u === void 0
                        ? void 0
                        : u.elems[0]
                  if (v != null) {
                    var m = (v == null ? void 0 : v.nodeName.toLowerCase()) !== 'p',
                      g = (v == null ? void 0 : v.getAttribute('face')) === l
                    if (p) {
                      if (m && !g) {
                        var y = s.selection.getSelectionRangeTopNodes()
                        s.selection.createRangeByElem(y[0]), s.selection.moveCursor(y[0].elems[0])
                      }
                      s.selection.setRangeToElem(v), s.selection.createEmptyRange()
                    }
                    s.cmd.do('fontName', l),
                      p && (s.selection.collapseRange(), s.selection.restoreSelection())
                  }
                }),
                (f.prototype.tryChangeActive = function () {}),
                f
              )
            })(a.default)
          n.default = d
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(4))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = t(2),
            c = a.__importDefault(t(3)),
            A = (function () {
              function d(h) {
                var f = this
                ;(this.itemList = []),
                  (0, r.default)(h).call(h, function (l) {
                    var u = typeof l == 'string' ? l : l.value,
                      s = typeof l == 'string' ? l : l.name
                    f.itemList.push({
                      $elem: c.default(`<p style="font-family:'` + u + `'">` + s + '</p>'),
                      value: s
                    })
                  })
              }
              return (
                (d.prototype.getItemList = function () {
                  return this.itemList
                }),
                d
              )
            })()
          n.default = A
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(24)),
            c = r.__importDefault(t(3)),
            A = r.__importDefault(t(332)),
            d = (function (h) {
              r.__extends(f, h)
              function f(l) {
                var u = this,
                  s = c.default(`<div class="w-e-menu" data-title="\u5B57\u53F7">
                <i class="w-e-icon-text-heigh"></i>
            </div>`),
                  p = new A.default(l.config.fontSizes),
                  v = {
                    width: 160,
                    title: '\u8BBE\u7F6E\u5B57\u53F7',
                    type: 'list',
                    list: p.getItemList(),
                    clickHandler: function (g) {
                      u.command(g)
                    }
                  }
                return (u = h.call(this, s, l, v) || this), u
              }
              return (
                (f.prototype.command = function (l) {
                  var u,
                    s = this.editor,
                    p = s.selection.isSelectionEmpty(),
                    v =
                      (u = s.selection.getSelectionContainerElem()) === null || u === void 0
                        ? void 0
                        : u.elems[0]
                  v != null &&
                    (s.cmd.do('fontSize', l),
                    p && (s.selection.collapseRange(), s.selection.restoreSelection()))
                }),
                (f.prototype.tryChangeActive = function () {}),
                f
              )
            })(a.default)
          n.default = d
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(3)),
            c = (function () {
              function A(d) {
                this.itemList = []
                for (var h in d) {
                  var f = d[h]
                  this.itemList.push({
                    $elem: a.default('<p style="font-size:' + h + '">' + f.name + '</p>'),
                    value: f.value
                  })
                }
              }
              return (
                (A.prototype.getItemList = function () {
                  return this.itemList
                }),
                A
              )
            })()
          n.default = c
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(4)),
            a = e(t(27))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var c = t(2),
            A = c.__importDefault(t(24)),
            d = c.__importDefault(t(3)),
            h = ['LI'],
            f = ['BLOCKQUOTE'],
            l = (function (u) {
              c.__extends(s, u)
              function s(p) {
                var v = this,
                  m = d.default(
                    '<div class="w-e-menu" data-title="\u5BF9\u9F50"><i class="w-e-icon-paragraph-left"></i></div>'
                  ),
                  g = {
                    width: 100,
                    title: '\u5BF9\u9F50\u65B9\u5F0F',
                    type: 'list',
                    list: [
                      {
                        $elem: d.default(
                          `<p>
                            <i class="w-e-icon-paragraph-left w-e-drop-list-item"></i>
                            ` +
                            p.i18next.t('menus.dropListMenu.justify.\u9760\u5DE6') +
                            `
                        </p>`
                        ),
                        value: 'left'
                      },
                      {
                        $elem: d.default(
                          `<p>
                            <i class="w-e-icon-paragraph-center w-e-drop-list-item"></i>
                            ` +
                            p.i18next.t('menus.dropListMenu.justify.\u5C45\u4E2D') +
                            `
                        </p>`
                        ),
                        value: 'center'
                      },
                      {
                        $elem: d.default(
                          `<p>
                            <i class="w-e-icon-paragraph-right w-e-drop-list-item"></i>
                            ` +
                            p.i18next.t('menus.dropListMenu.justify.\u9760\u53F3') +
                            `
                        </p>`
                        ),
                        value: 'right'
                      },
                      {
                        $elem: d.default(
                          `<p>
                            <i class="w-e-icon-paragraph-justify w-e-drop-list-item"></i>
                            ` +
                            p.i18next.t('menus.dropListMenu.justify.\u4E24\u7AEF') +
                            `
                        </p>`
                        ),
                        value: 'justify'
                      }
                    ],
                    clickHandler: function (x) {
                      v.command(x)
                    }
                  }
                return (v = u.call(this, m, p, g) || this), v
              }
              return (
                (s.prototype.command = function (p) {
                  var v = this.editor,
                    m = v.selection,
                    g = m.getSelectionContainerElem()
                  m.saveRange()
                  var y = v.selection.getSelectionRangeTopNodes()
                  if (g != null && g.length)
                    if (this.isSpecialNode(g, y[0]) || this.isSpecialTopNode(y[0])) {
                      var x = this.getSpecialNodeUntilTop(g, y[0])
                      if (x == null) return
                      d.default(x).css('text-align', p)
                    } else
                      (0, r.default)(y).call(y, function (S) {
                        S.css('text-align', p)
                      })
                  m.restoreSelection()
                }),
                (s.prototype.getSpecialNodeUntilTop = function (p, v) {
                  for (var m = p.elems[0], g = v.elems[0]; m != null; ) {
                    if (
                      (0, a.default)(h).call(h, m == null ? void 0 : m.nodeName) !== -1 ||
                      m.parentNode === g
                    )
                      return m
                    m = m.parentNode
                  }
                  return m
                }),
                (s.prototype.isSpecialNode = function (p, v) {
                  var m = this.getSpecialNodeUntilTop(p, v)
                  return m == null ? !1 : (0, a.default)(h).call(h, m.nodeName) !== -1
                }),
                (s.prototype.isSpecialTopNode = function (p) {
                  var v
                  return p == null
                    ? !1
                    : (0, a.default)(f).call(
                        f,
                        (v = p.elems[0]) === null || v === void 0 ? void 0 : v.nodeName
                      ) !== -1
                }),
                (s.prototype.tryChangeActive = function () {}),
                s
              )
            })(A.default)
          n.default = l
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(4))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = t(2),
            c = a.__importDefault(t(3)),
            A = a.__importDefault(t(23)),
            d = a.__importDefault(t(335)),
            h = a.__importDefault(t(336)),
            f = t(7),
            l = (function (u) {
              a.__extends(s, u)
              function s(p) {
                var v = this,
                  m = c.default(`<div class="w-e-menu" data-title="\u5F15\u7528">
                <i class="w-e-icon-quotes-left"></i>
            </div>`)
                return (v = u.call(this, m, p) || this), d.default(p), v
              }
              return (
                (s.prototype.clickHandler = function () {
                  var p,
                    v,
                    m = this.editor,
                    g = m.selection.isSelectionEmpty(),
                    y = m.selection.getSelectionRangeTopNodes(),
                    x = y[y.length - 1],
                    S = this.getTopNodeName()
                  if (S === 'BLOCKQUOTE') {
                    var D = c.default(x.childNodes()),
                      P = D.length,
                      C = x
                    ;(0, r.default)(D).call(D, function (N) {
                      var M = c.default(N)
                      M.insertAfter(C), (C = M)
                    }),
                      x.remove(),
                      m.selection.moveCursor(D.elems[P - 1]),
                      this.tryChangeActive()
                  } else {
                    var E = h.default(y)
                    if (m.$textElem.equal(x)) {
                      var T =
                        (p = m.selection.getSelectionContainerElem()) === null || p === void 0
                          ? void 0
                          : p.elems[0]
                      m.selection.createRangeByElems(T.children[0], T.children[0]),
                        (y = m.selection.getSelectionRangeTopNodes()),
                        (E = h.default(y)),
                        x.append(E)
                    } else E.insertAfter(x)
                    this.delSelectNode(y)
                    var R =
                      (v = E.childNodes()) === null || v === void 0 ? void 0 : v.last().getNode()
                    if (R == null) return
                    R.textContent ? m.selection.moveCursor(R) : m.selection.moveCursor(R, 0),
                      this.tryChangeActive(),
                      c.default(f.EMPTY_P).insertAfter(E)
                    return
                  }
                  g && (m.selection.collapseRange(), m.selection.restoreSelection())
                }),
                (s.prototype.tryChangeActive = function () {
                  var p,
                    v = this.editor,
                    m =
                      (p = v.selection.getSelectionRangeTopNodes()[0]) === null || p === void 0
                        ? void 0
                        : p.getNodeName()
                  m === 'BLOCKQUOTE' ? this.active() : this.unActive()
                }),
                (s.prototype.getTopNodeName = function () {
                  var p = this.editor,
                    v = p.selection.getSelectionRangeTopNodes()[0],
                    m = v == null ? void 0 : v.getNodeName()
                  return m
                }),
                (s.prototype.delSelectNode = function (p) {
                  ;(0, r.default)(p).call(p, function (v) {
                    v.remove()
                  })
                }),
                s
              )
            })(A.default)
          n.default = l
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = t(7),
            c = r.__importDefault(t(3))
          function A(d) {
            function h(f) {
              var l,
                u = d.selection.getSelectionContainerElem(),
                s = d.selection.getSelectionRangeTopNodes()[0]
              if ((s == null ? void 0 : s.getNodeName()) === 'BLOCKQUOTE') {
                if (u.getNodeName() === 'BLOCKQUOTE') {
                  var p = (l = u.childNodes()) === null || l === void 0 ? void 0 : l.getNode()
                  d.selection.moveCursor(p)
                }
                if (u.text() === '') {
                  f.preventDefault(), u.remove()
                  var v = c.default(a.EMPTY_P)
                  v.insertAfter(s), d.selection.moveCursor(v.getNode(), 0)
                }
                s.text() === '' && s.remove()
              }
            }
            d.txt.eventHooks.enterDownEvents.push(h)
          }
          n.default = A
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(4))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = t(2),
            c = a.__importDefault(t(3))
          function A(d) {
            var h = c.default('<blockquote></blockquote>')
            return (
              (0, r.default)(d).call(d, function (f) {
                h.append(f.clone(!0))
              }),
              h
            )
          }
          n.default = A
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(26))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = t(2),
            c = a.__importDefault(t(24)),
            A = a.__importDefault(t(3)),
            d = t(6),
            h = (function (f) {
              a.__extends(l, f)
              function l(u) {
                var s,
                  p = this,
                  v = A.default(`<div class="w-e-menu" data-title="\u80CC\u666F\u8272">
                <i class="w-e-icon-paint-brush"></i>
            </div>`),
                  m = {
                    width: 120,
                    title: '\u80CC\u666F\u989C\u8272',
                    type: 'inline-block',
                    list: (0, r.default)((s = u.config.colors)).call(s, function (g) {
                      return {
                        $elem: A.default(
                          '<i style="color:' + g + ';" class="w-e-icon-paint-brush"></i>'
                        ),
                        value: g
                      }
                    }),
                    clickHandler: function (y) {
                      p.command(y)
                    }
                  }
                return (p = f.call(this, v, u, m) || this), p
              }
              return (
                (l.prototype.command = function (u) {
                  var s,
                    p = this.editor,
                    v = p.selection.isSelectionEmpty(),
                    m =
                      (s = p.selection.getSelectionContainerElem()) === null || s === void 0
                        ? void 0
                        : s.elems[0]
                  if (m != null) {
                    var g = (m == null ? void 0 : m.nodeName.toLowerCase()) !== 'p',
                      y = m == null ? void 0 : m.style.backgroundColor,
                      x = d.hexToRgb(u) === y
                    if (v) {
                      if (g && !x) {
                        var S = p.selection.getSelectionRangeTopNodes()
                        p.selection.createRangeByElem(S[0]), p.selection.moveCursor(S[0].elems[0])
                      }
                      p.selection.createEmptyRange()
                    }
                    p.cmd.do('backColor', u),
                      v && (p.selection.collapseRange(), p.selection.restoreSelection())
                  }
                }),
                (l.prototype.tryChangeActive = function () {}),
                l
              )
            })(c.default)
          n.default = h
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(26))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = t(2),
            c = a.__importDefault(t(24)),
            A = a.__importDefault(t(3)),
            d = (function (h) {
              a.__extends(f, h)
              function f(l) {
                var u,
                  s = this,
                  p = A.default(`<div class="w-e-menu" data-title="\u6587\u5B57\u989C\u8272">
                <i class="w-e-icon-pencil2"></i>
            </div>`),
                  v = {
                    width: 120,
                    title: '\u6587\u5B57\u989C\u8272',
                    type: 'inline-block',
                    list: (0, r.default)((u = l.config.colors)).call(u, function (m) {
                      return {
                        $elem: A.default(
                          '<i style="color:' + m + ';" class="w-e-icon-pencil2"></i>'
                        ),
                        value: m
                      }
                    }),
                    clickHandler: function (g) {
                      s.command(g)
                    }
                  }
                return (s = h.call(this, p, l, v) || this), s
              }
              return (
                (f.prototype.command = function (l) {
                  var u,
                    s = this.editor,
                    p = s.selection.isSelectionEmpty(),
                    v =
                      (u = s.selection.getSelectionContainerElem()) === null || u === void 0
                        ? void 0
                        : u.elems[0]
                  if (v != null) {
                    var m = s.selection.getSelectionText()
                    if (v.nodeName === 'A' && v.textContent === m) {
                      var g = A.default('<span>&#8203;</span>').getNode()
                      v.appendChild(g)
                    }
                    s.cmd.do('foreColor', l),
                      p && (s.selection.collapseRange(), s.selection.restoreSelection())
                  }
                }),
                (f.prototype.tryChangeActive = function () {}),
                f
              )
            })(c.default)
          n.default = d
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(3)),
            c = r.__importDefault(t(33)),
            A = r.__importDefault(t(38)),
            d = r.__importDefault(t(340)),
            h = r.__importDefault(t(346)),
            f = (function (l) {
              r.__extends(u, l)
              function u(s) {
                var p = this,
                  v = a.default(`<div class="w-e-menu" data-title="\u89C6\u9891">
                <i class="w-e-icon-play"></i>
            </div>`)
                return (p = l.call(this, v, s) || this), h.default(s), p
              }
              return (
                (u.prototype.clickHandler = function () {
                  this.createPanel('')
                }),
                (u.prototype.createPanel = function (s) {
                  var p = d.default(this.editor, s),
                    v = new c.default(this, p)
                  v.create()
                }),
                (u.prototype.tryChangeActive = function () {}),
                u
              )
            })(A.default)
          n.default = f
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(17))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = t(2),
            c = t(6),
            A = a.__importDefault(t(3)),
            d = a.__importDefault(t(341)),
            h = t(7)
          function f(l, u) {
            var s = l.config,
              p = new d.default(l),
              v = c.getRandom('input-iframe'),
              m = c.getRandom('btn-ok'),
              g = c.getRandom('input-upload'),
              y = c.getRandom('btn-local-ok')
            function x(C) {
              l.cmd.do('insertHTML', C + h.EMPTY_P), l.config.onlineVideoCallback(C)
            }
            function S(C) {
              var E = l.config.onlineVideoCheck(C)
              return E === !0 ? !0 : (typeof E == 'string' && l.config.customAlert(E, 'error'), !1)
            }
            var D = [
                {
                  title: l.i18next.t('menus.panelMenus.video.\u4E0A\u4F20\u89C6\u9891'),
                  tpl:
                    `<div class="w-e-up-video-container">
                    <div id="` +
                    y +
                    `" class="w-e-up-btn">
                        <i class="w-e-icon-upload2"></i>
                    </div>
                    <div style="display:none;">
                        <input id="` +
                    g +
                    `" type="file" accept="video/*"/>
                    </div>
                 </div>`,
                  events: [
                    {
                      selector: '#' + y,
                      type: 'click',
                      fn: function () {
                        var E = A.default('#' + g),
                          T = E.elems[0]
                        if (T) T.click()
                        else return !0
                      }
                    },
                    {
                      selector: '#' + g,
                      type: 'change',
                      fn: function () {
                        var E = A.default('#' + g),
                          T = E.elems[0]
                        if (!T) return !0
                        var R = T.files
                        return R.length && p.uploadVideo(R), !0
                      }
                    }
                  ]
                },
                {
                  title: l.i18next.t('menus.panelMenus.video.\u63D2\u5165\u89C6\u9891'),
                  tpl:
                    `<div>
                    <input 
                        id="` +
                    v +
                    `" 
                        type="text" 
                        class="block" 
                        placeholder="` +
                    l.i18next.t('\u5982') +
                    `\uFF1A<iframe src=... ></iframe>"/>
                    </td>
                    <div class="w-e-button-container">
                        <button type="button" id="` +
                    m +
                    `" class="right">
                            ` +
                    l.i18next.t('\u63D2\u5165') +
                    `
                        </button>
                    </div>
                </div>`,
                  events: [
                    {
                      selector: '#' + m,
                      type: 'click',
                      fn: function () {
                        var E,
                          T = A.default('#' + v),
                          R = (0, r.default)((E = T.val())).call(E)
                        if (!!R && !!S(R)) return x(R), !0
                      },
                      bindEnter: !0
                    }
                  ]
                }
              ],
              P = { width: 300, height: 0, tabs: [] }
            return (
              window.FileReader &&
                (s.uploadVideoServer || s.customUploadVideo) &&
                P.tabs.push(D[0]),
              s.showLinkVideo && P.tabs.push(D[1]),
              P
            )
          }
          n.default = f
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(133)),
            a = e(t(57)),
            c = e(t(4)),
            A = e(t(27))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var d = t(2),
            h = t(6),
            f = d.__importDefault(t(135)),
            l = d.__importDefault(t(136)),
            u = t(7),
            s = t(6),
            p = (function () {
              function v(m) {
                this.editor = m
              }
              return (
                (v.prototype.uploadVideo = function (m) {
                  var g = this
                  if (!!m.length) {
                    var y = this.editor,
                      x = y.config,
                      S = 'validate.',
                      D = function (W) {
                        return y.i18next.t(S + W)
                      },
                      P = x.uploadVideoServer,
                      C = x.uploadVideoMaxSize,
                      E = C / 1024,
                      T = x.uploadVideoName,
                      R = x.uploadVideoParams,
                      N = x.uploadVideoParamsWithUrl,
                      M = x.uploadVideoHeaders,
                      B = x.uploadVideoHooks,
                      F = x.uploadVideoTimeout,
                      O = x.withVideoCredentials,
                      b = x.customUploadVideo,
                      $ = x.uploadVideoAccept,
                      H = [],
                      U = []
                    if (
                      (h.arrForEach(m, function (V) {
                        var W = V.name,
                          q = V.size / 1024 / 1024
                        if (!(!W || !q)) {
                          if (!($ instanceof Array)) {
                            U.push(
                              '\u3010' + $ + '\u3011' + D('uploadVideoAccept \u4E0D\u662FArray')
                            )
                            return
                          }
                          if (
                            !(0, r.default)($).call($, function (rt) {
                              return rt === W.split('.')[W.split('.').length - 1]
                            })
                          ) {
                            U.push('\u3010' + W + '\u3011' + D('\u4E0D\u662F\u89C6\u9891'))
                            return
                          }
                          if (E < q) {
                            U.push('\u3010' + W + '\u3011' + D('\u5927\u4E8E') + ' ' + E + 'M')
                            return
                          }
                          H.push(V)
                        }
                      }),
                      U.length)
                    ) {
                      x.customAlert(
                        D('\u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7') +
                          `: 
` +
                          U.join(`
`),
                        'warning'
                      )
                      return
                    }
                    if (H.length === 0) {
                      x.customAlert(
                        D('\u4F20\u5165\u7684\u6587\u4EF6\u4E0D\u5408\u6CD5'),
                        'warning'
                      )
                      return
                    }
                    if (b && typeof b == 'function') {
                      var K
                      b(H, (0, a.default)((K = this.insertVideo)).call(K, this))
                      return
                    }
                    var w = new FormData()
                    if (
                      ((0, c.default)(H).call(H, function (V, W) {
                        var q = T || V.name
                        H.length > 1 && (q = q + (W + 1)), w.append(q, V)
                      }),
                      P)
                    ) {
                      var X = P.split('#')
                      P = X[0]
                      var J = X[1] || ''
                      ;(0, c.default)(h).call(h, R, function (V, W) {
                        N &&
                          ((0, A.default)(P).call(P, '?') > 0 ? (P += '&') : (P += '?'),
                          (P = P + V + '=' + W)),
                          w.append(V, W)
                      }),
                        J && (P += '#' + J)
                      var Q = f.default(P, {
                        timeout: F,
                        formData: w,
                        headers: M,
                        withCredentials: !!O,
                        beforeSend: function (W) {
                          if (B.before) return B.before(W, y, H)
                        },
                        onTimeout: function (W) {
                          x.customAlert(D('\u4E0A\u4F20\u89C6\u9891\u8D85\u65F6'), 'error'),
                            B.timeout && B.timeout(W, y)
                        },
                        onProgress: function (W, q) {
                          var rt = new l.default(y)
                          q.lengthComputable && ((W = q.loaded / q.total), rt.show(W))
                        },
                        onError: function (W) {
                          x.customAlert(
                            D('\u4E0A\u4F20\u89C6\u9891\u9519\u8BEF'),
                            'error',
                            D('\u4E0A\u4F20\u89C6\u9891\u9519\u8BEF') +
                              '\uFF0C' +
                              D('\u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001') +
                              ': ' +
                              W.status
                          ),
                            B.error && B.error(W, y)
                        },
                        onFail: function (W, q) {
                          x.customAlert(
                            D('\u4E0A\u4F20\u89C6\u9891\u5931\u8D25'),
                            'error',
                            D('\u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF') +
                              ('\uFF0C' + D('\u8FD4\u56DE\u7ED3\u679C') + ': ') +
                              q
                          ),
                            B.fail && B.fail(W, y, q)
                        },
                        onSuccess: function (W, q) {
                          if (B.customInsert) {
                            var rt
                            B.customInsert((0, a.default)((rt = g.insertVideo)).call(rt, g), q, y)
                            return
                          }
                          if (q.errno != '0') {
                            x.customAlert(
                              D('\u4E0A\u4F20\u89C6\u9891\u5931\u8D25'),
                              'error',
                              D('\u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF') +
                                '\uFF0C' +
                                D('\u8FD4\u56DE\u7ED3\u679C') +
                                ' errno=' +
                                q.errno
                            ),
                              B.fail && B.fail(W, y, q)
                            return
                          }
                          var it = q.data
                          g.insertVideo(it.url), B.success && B.success(W, y, q)
                        }
                      })
                      typeof Q == 'string' && x.customAlert(Q, 'error')
                    }
                  }
                }),
                (v.prototype.insertVideo = function (m) {
                  var g = this.editor,
                    y = g.config,
                    x = 'validate.',
                    S = function (C, E) {
                      return E === void 0 && (E = x), g.i18next.t(E + C)
                    }
                  if (!y.customInsertVideo)
                    s.UA.isFirefox
                      ? g.cmd.do(
                          'insertHTML',
                          '<p data-we-video-p="true"><video src="' +
                            m +
                            '" controls="controls" style="max-width:100%"></video></p><p>&#8203</p>'
                        )
                      : g.cmd.do(
                          'insertHTML',
                          '<video src="' +
                            m +
                            '" controls="controls" style="max-width:100%"></video>' +
                            u.EMPTY_P
                        )
                  else {
                    y.customInsertVideo(m)
                    return
                  }
                  var D = document.createElement('video')
                  ;(D.onload = function () {
                    D = null
                  }),
                    (D.onerror = function () {
                      y.customAlert(
                        S('\u63D2\u5165\u89C6\u9891\u9519\u8BEF'),
                        'error',
                        'wangEditor: ' +
                          S('\u63D2\u5165\u89C6\u9891\u9519\u8BEF') +
                          '\uFF0C' +
                          S('\u89C6\u9891\u94FE\u63A5') +
                          ' "' +
                          m +
                          '"\uFF0C' +
                          S('\u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25')
                      ),
                        (D = null)
                    }),
                    (D.onabort = function () {
                      return (D = null)
                    }),
                    (D.src = m)
                }),
                v
              )
            })()
          n.default = p
        },
        function (o, n, t) {
          o.exports = t(343)
        },
        function (o, n, t) {
          var e = t(344)
          o.exports = e
        },
        function (o, n, t) {
          t(345)
          var e = t(9)
          o.exports = e.Date.now
        },
        function (o, n, t) {
          var e = t(5)
          e(
            { target: 'Date', stat: !0 },
            {
              now: function () {
                return new Date().getTime()
              }
            }
          )
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(347)),
            c = r.__importDefault(t(349))
          function A(d) {
            a.default(d), c.default(d)
          }
          n.default = A
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 }), (n.createShowHideFn = void 0)
          var r = t(2),
            a = r.__importDefault(t(3)),
            c = r.__importDefault(t(39)),
            A = r.__importDefault(t(348))
          function d(f) {
            var l,
              u = function (m, g) {
                return g === void 0 && (g = ''), f.i18next.t(g + m)
              }
            function s(v) {
              var m = [
                {
                  $elem: a.default("<span class='w-e-icon-trash-o'></span>"),
                  onClick: function (y, x) {
                    return x.remove(), !0
                  }
                },
                {
                  $elem: a.default('<span>100%</span>'),
                  onClick: function (y, x) {
                    return x.attr('width', '100%'), x.removeAttr('height'), !0
                  }
                },
                {
                  $elem: a.default('<span>50%</span>'),
                  onClick: function (y, x) {
                    return x.attr('width', '50%'), x.removeAttr('height'), !0
                  }
                },
                {
                  $elem: a.default('<span>30%</span>'),
                  onClick: function (y, x) {
                    return x.attr('width', '30%'), x.removeAttr('height'), !0
                  }
                },
                {
                  $elem: a.default('<span>' + u('\u91CD\u7F6E') + '</span>'),
                  onClick: function (y, x) {
                    return x.removeAttr('width'), x.removeAttr('height'), !0
                  }
                },
                {
                  $elem: a.default('<span>' + u('menus.justify.\u9760\u5DE6') + '</span>'),
                  onClick: function (y, x) {
                    return A.default(x, 'left'), !0
                  }
                },
                {
                  $elem: a.default('<span>' + u('menus.justify.\u5C45\u4E2D') + '</span>'),
                  onClick: function (y, x) {
                    return A.default(x, 'center'), !0
                  }
                },
                {
                  $elem: a.default('<span>' + u('menus.justify.\u9760\u53F3') + '</span>'),
                  onClick: function (y, x) {
                    return A.default(x, 'right'), !0
                  }
                }
              ]
              ;(l = new c.default(f, v, m)), l.create()
            }
            function p() {
              l && (l.remove(), (l = null))
            }
            return { showVideoTooltip: s, hideVideoTooltip: p }
          }
          n.createShowHideFn = d
          function h(f) {
            var l = d(f),
              u = l.showVideoTooltip,
              s = l.hideVideoTooltip
            f.txt.eventHooks.videoClickEvents.push(u),
              f.txt.eventHooks.clickEvents.push(s),
              f.txt.eventHooks.keyupEvents.push(s),
              f.txt.eventHooks.toolbarClickEvents.push(s),
              f.txt.eventHooks.menuClickEvents.push(s),
              f.txt.eventHooks.textScrollEvents.push(s),
              f.txt.eventHooks.changeEvents.push(s)
          }
          n.default = h
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(28))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = t(2),
            c = a.__importDefault(t(3))
          function A(h, f) {
            var l = ['P'],
              u = d(h, l)
            u && c.default(u).css('text-align', f)
          }
          n.default = A
          function d(h, f) {
            for (var l, u = h.elems[0]; u != null; ) {
              if ((0, r.default)(f).call(f, u == null ? void 0 : u.nodeName)) return u
              if (
                ((l = u == null ? void 0 : u.parentNode) === null || l === void 0
                  ? void 0
                  : l.nodeName) === 'BODY'
              )
                return null
              u = u.parentNode
            }
            return u
          }
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(6)
          function a(c) {
            if (!!r.UA.isFirefox) {
              var A = c.txt,
                d = c.selection,
                h = A.eventHooks.keydownEvents
              h.push(function (f) {
                var l = d.getSelectionContainerElem()
                if (l) {
                  var u = l.getNodeTop(c),
                    s = u.length && u.prev().length ? u.prev() : null
                  s &&
                    s.attr('data-we-video-p') &&
                    d.getCursorPos() === 0 &&
                    f.keyCode === 8 &&
                    s.remove()
                }
              })
            }
          }
          n.default = a
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(26))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = t(2),
            c = t(7),
            A = a.__importDefault(t(3)),
            d = a.__importDefault(t(33)),
            h = a.__importDefault(t(38)),
            f = a.__importDefault(t(351)),
            l = a.__importDefault(t(364)),
            u = (function (s) {
              a.__extends(p, s)
              function p(v) {
                var m = this,
                  g = A.default(
                    '<div class="w-e-menu" data-title="\u56FE\u7247"><i class="w-e-icon-image"></i></div>'
                  ),
                  y = l.default(v)
                if (y.onlyUploadConf) {
                  var x
                  ;(g = y.onlyUploadConf.$elem),
                    (0, r.default)((x = y.onlyUploadConf.events)).call(x, function (S) {
                      var D = S.type,
                        P = S.fn || c.EMPTY_FN
                      g.on(D, function (C) {
                        C.stopPropagation(), P(C)
                      })
                    })
                }
                return (m = s.call(this, g, v) || this), (m.imgPanelConfig = y), f.default(v), m
              }
              return (
                (p.prototype.clickHandler = function () {
                  this.imgPanelConfig.onlyUploadConf || this.createPanel()
                }),
                (p.prototype.createPanel = function () {
                  var v = this.imgPanelConfig,
                    m = new d.default(this, v)
                  this.setPanel(m), m.create()
                }),
                (p.prototype.tryChangeActive = function () {}),
                p
              )
            })(h.default)
          n.default = u
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(352)),
            c = r.__importDefault(t(353)),
            A = r.__importDefault(t(354)),
            d = r.__importDefault(t(362)),
            h = r.__importDefault(t(363))
          function f(l) {
            a.default(l), c.default(l), A.default(l), d.default(l), h.default(l)
          }
          n.default = f
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = t(131),
            c = r.__importDefault(t(97))
          function A(l, u) {
            var s = l.config,
              p = s.pasteFilterStyle,
              v = s.pasteIgnoreImg,
              m = a.getPasteHtml(u, p, v)
            if (m) return !0
            var g = a.getPasteText(u)
            return !!g
          }
          function d(l, u) {
            for (
              var s,
                p = ((s = u.clipboardData) === null || s === void 0 ? void 0 : s.types) || [],
                v = 0;
              v < p.length;
              v++
            ) {
              var m = p[v]
              if (m === 'Files') return !0
            }
            return !1
          }
          function h(l, u) {
            if (!(!d(u, l) && A(u, l))) {
              var s = a.getPasteImgs(l)
              if (!!s.length) {
                var p = new c.default(u)
                p.uploadImg(s)
              }
            }
          }
          function f(l) {
            l.txt.eventHooks.pasteEvents.unshift(function (u) {
              h(u, l)
            })
          }
          n.default = f
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(97))
          function c(A) {
            function d(h) {
              var f = h.dataTransfer && h.dataTransfer.files
              if (!(!f || !f.length)) {
                var l = new a.default(A)
                l.uploadImg(f)
              }
            }
            A.txt.eventHooks.dropEvents.push(d)
          }
          n.default = c
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(29)),
            a = e(t(355))
          ;(0, i.default)(n, '__esModule', { value: !0 }), (n.createShowHideFn = void 0)
          var c = t(2),
            A = c.__importDefault(t(3))
          t(360)
          var d = t(6)
          function h(p, v, m, g, y) {
            p.attr(
              'style',
              'width:' + v + 'px; height:' + m + 'px; left:' + g + 'px; top:' + y + 'px;'
            )
          }
          function f(p, v) {
            var m = A.default(`<div class="w-e-img-drag-mask">
            <div class="w-e-img-drag-show-size"></div>
            <div class="w-e-img-drag-rb"></div>
         </div>`)
            return m.hide(), v.append(m), m
          }
          function l(p, v, m) {
            var g = p.getBoundingClientRect(),
              y = m.getBoundingClientRect(),
              x = y.width.toFixed(2),
              S = y.height.toFixed(2)
            ;(0, r.default)(v)
              .call(v, '.w-e-img-drag-show-size')
              .text(x + 'px * ' + S + 'px'),
              h(v, (0, a.default)(x), (0, a.default)(S), y.left - g.left, y.top - g.top),
              v.show()
          }
          function u(p) {
            var v = p.$textContainerElem,
              m,
              g = f(p, v)
            function y(D, P) {
              D.on('click', function (C) {
                C.stopPropagation()
              }),
                D.on('mousedown', '.w-e-img-drag-rb', function (C) {
                  if ((C.preventDefault(), !m)) return
                  var E = C.clientX,
                    T = C.clientY,
                    R = P.getBoundingClientRect(),
                    N = m.getBoundingClientRect(),
                    M = N.width,
                    B = N.height,
                    F = N.left - R.left,
                    O = N.top - R.top,
                    b = M / B,
                    $ = M,
                    H = B,
                    U = A.default(document)
                  function K() {
                    U.off('mousemove', w), U.off('mouseup', X)
                  }
                  function w(J) {
                    J.stopPropagation(),
                      J.preventDefault(),
                      ($ = M + (J.clientX - E)),
                      (H = B + (J.clientY - T)),
                      $ / H != b && (H = $ / b),
                      ($ = (0, a.default)($.toFixed(2))),
                      (H = (0, a.default)(H.toFixed(2))),
                      (0, r.default)(D)
                        .call(D, '.w-e-img-drag-show-size')
                        .text(
                          $.toFixed(2).replace('.00', '') +
                            'px * ' +
                            H.toFixed(2).replace('.00', '') +
                            'px'
                        ),
                      h(D, $, H, F, O)
                  }
                  U.on('mousemove', w)
                  function X() {
                    m.attr('width', $ + ''), m.attr('height', H + '')
                    var J = m.getBoundingClientRect()
                    h(D, $, H, J.left - R.left, J.top - R.top), K()
                  }
                  U.on('mouseup', X), U.on('mouseleave', K)
                })
            }
            function x(D) {
              if (d.UA.isIE()) return !1
              D && ((m = D), l(v, g, m))
            }
            function S() {
              ;(0, r.default)(v).call(v, '.w-e-img-drag-mask').hide()
            }
            return (
              y(g, v),
              A.default(document).on('click', S),
              p.beforeDestroy(function () {
                A.default(document).off('click', S)
              }),
              { showDrag: x, hideDrag: S }
            )
          }
          n.createShowHideFn = u
          function s(p) {
            var v = u(p),
              m = v.showDrag,
              g = v.hideDrag
            p.txt.eventHooks.imgClickEvents.push(m),
              p.txt.eventHooks.textScrollEvents.push(g),
              p.txt.eventHooks.keyupEvents.push(g),
              p.txt.eventHooks.toolbarClickEvents.push(g),
              p.txt.eventHooks.menuClickEvents.push(g),
              p.txt.eventHooks.changeEvents.push(g)
          }
          n.default = s
        },
        function (o, n, t) {
          o.exports = t(356)
        },
        function (o, n, t) {
          var e = t(357)
          o.exports = e
        },
        function (o, n, t) {
          t(358)
          var e = t(9)
          o.exports = e.parseFloat
        },
        function (o, n, t) {
          var e = t(5),
            i = t(359)
          e({ global: !0, forced: parseFloat != i }, { parseFloat: i })
        },
        function (o, n, t) {
          var e = t(8),
            i = t(90).trim,
            r = t(68),
            a = e.parseFloat,
            c = 1 / a(r + '-0') !== -1 / 0
          o.exports = c
            ? function (d) {
                var h = i(String(d)),
                  f = a(h)
                return f === 0 && h.charAt(0) == '-' ? -0 : f
              }
            : a
        },
        function (o, n, t) {
          var e = t(20),
            i = t(361)
          ;(i = i.__esModule ? i.default : i), typeof i == 'string' && (i = [[o.i, i, '']])
          var r = {}
          ;(r.insert = 'head'), (r.singleton = !1), e(i, r), (o.exports = i.locals || {})
        },
        function (o, n, t) {
          var e = t(21)
          ;(n = e(!1)),
            n.push([
              o.i,
              `.w-e-text-container {
  overflow: hidden;
}
.w-e-img-drag-mask {
  position: absolute;
  z-index: 1;
  border: 1px dashed #ccc;
  box-sizing: border-box;
}
.w-e-img-drag-mask .w-e-img-drag-rb {
  position: absolute;
  right: -5px;
  bottom: -5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ccc;
  cursor: se-resize;
}
.w-e-img-drag-mask .w-e-img-drag-show-size {
  min-width: 110px;
  height: 22px;
  line-height: 22px;
  font-size: 14px;
  color: #999;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #999;
  color: #fff;
  border-radius: 2px;
  padding: 0 5px;
}
`,
              ''
            ]),
            (o.exports = n)
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 }), (n.createShowHideFn = void 0)
          var r = t(2),
            a = r.__importDefault(t(3)),
            c = r.__importDefault(t(39))
          function A(h) {
            var f,
              l = function (v, m) {
                return m === void 0 && (m = ''), h.i18next.t(m + v)
              }
            function u(p) {
              var v = [
                {
                  $elem: a.default("<span class='w-e-icon-trash-o'></span>"),
                  onClick: function (g, y) {
                    return (
                      g.selection.createRangeByElem(y),
                      g.selection.restoreSelection(),
                      g.cmd.do('delete'),
                      !0
                    )
                  }
                },
                {
                  $elem: a.default('<span>30%</span>'),
                  onClick: function (g, y) {
                    return y.attr('width', '30%'), y.removeAttr('height'), !0
                  }
                },
                {
                  $elem: a.default('<span>50%</span>'),
                  onClick: function (g, y) {
                    return y.attr('width', '50%'), y.removeAttr('height'), !0
                  }
                },
                {
                  $elem: a.default('<span>100%</span>'),
                  onClick: function (g, y) {
                    return y.attr('width', '100%'), y.removeAttr('height'), !0
                  }
                }
              ]
              v.push({
                $elem: a.default('<span>' + l('\u91CD\u7F6E') + '</span>'),
                onClick: function (g, y) {
                  return y.removeAttr('width'), y.removeAttr('height'), !0
                }
              }),
                p.attr('data-href') &&
                  v.push({
                    $elem: a.default('<span>' + l('\u67E5\u770B\u94FE\u63A5') + '</span>'),
                    onClick: function (g, y) {
                      var x = y.attr('data-href')
                      return x && ((x = decodeURIComponent(x)), window.open(x, '_target')), !0
                    }
                  }),
                (f = new c.default(h, p, v)),
                f.create()
            }
            function s() {
              f && (f.remove(), (f = null))
            }
            return { showImgTooltip: u, hideImgTooltip: s }
          }
          n.createShowHideFn = A
          function d(h) {
            var f = A(h),
              l = f.showImgTooltip,
              u = f.hideImgTooltip
            h.txt.eventHooks.imgClickEvents.push(l),
              h.txt.eventHooks.clickEvents.push(u),
              h.txt.eventHooks.keyupEvents.push(u),
              h.txt.eventHooks.toolbarClickEvents.push(u),
              h.txt.eventHooks.menuClickEvents.push(u),
              h.txt.eventHooks.textScrollEvents.push(u),
              h.txt.eventHooks.imgDragBarMouseDownEvents.push(u),
              h.txt.eventHooks.changeEvents.push(u)
          }
          n.default = d
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          function r(a) {
            var c = a.txt,
              A = a.selection,
              d = c.eventHooks.keydownEvents
            d.push(function (h) {
              var f = A.getSelectionContainerElem(),
                l = A.getRange()
              if (!(!l || !f || h.keyCode !== 8 || !A.isSelectionEmpty())) {
                var u = l.startContainer,
                  s = l.startOffset,
                  p = null
                if (s === 0)
                  for (; u !== f.elems[0] && f.elems[0].contains(u) && u.parentNode && !p; ) {
                    if (u.previousSibling) {
                      p = u.previousSibling
                      break
                    }
                    u = u.parentNode
                  }
                else u.nodeType !== 3 && (p = u.childNodes[s - 1])
                if (!!p) {
                  for (var v = p; v.childNodes.length; ) v = v.childNodes[v.childNodes.length - 1]
                  v instanceof HTMLElement &&
                    v.tagName === 'IMG' &&
                    (v.remove(), h.preventDefault())
                }
              }
            })
          }
          n.default = r
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(26)),
            a = e(t(17))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var c = t(2),
            A = c.__importDefault(t(3)),
            d = t(6),
            h = c.__importDefault(t(97))
          function f(l) {
            var u,
              s = l.config,
              p = new h.default(l),
              v = d.getRandom('up-trigger-id'),
              m = d.getRandom('up-file-id'),
              g = d.getRandom('input-link-url'),
              y = d.getRandom('input-link-url-alt'),
              x = d.getRandom('input-link-url-href'),
              S = d.getRandom('btn-link'),
              D = 'menus.panelMenus.image.',
              P = function (b, $) {
                return $ === void 0 && ($ = D), l.i18next.t($ + b)
              }
            function C(O, b, $) {
              var H = s.linkImgCheck(O)
              return H === !0 ? !0 : (typeof H == 'string' && s.customAlert(H, 'error'), !1)
            }
            var E = s.uploadImgMaxLength === 1 ? '' : 'multiple="multiple"',
              T = (0, r.default)((u = s.uploadImgAccept))
                .call(u, function (O) {
                  return 'image/' + O
                })
                .join(','),
              R = function (b, $, H) {
                return (
                  '<div class="' +
                  b +
                  '" data-title="' +
                  H +
                  `">
            <div id="` +
                  v +
                  `" class="w-e-up-btn">
                <i class="` +
                  $ +
                  `"></i>
            </div>
            <div style="display:none;">
                <input id="` +
                  m +
                  '" type="file" ' +
                  E +
                  ' accept="' +
                  T +
                  `"/>
            </div>
        </div>`
                )
              },
              N = [
                {
                  selector: '#' + v,
                  type: 'click',
                  fn: function () {
                    var b = s.uploadImgFromMedia
                    if (b && typeof b == 'function') return b(), !0
                    var $ = A.default('#' + m),
                      H = $.elems[0]
                    if (H) H.click()
                    else return !0
                  }
                },
                {
                  selector: '#' + m,
                  type: 'change',
                  fn: function () {
                    var b = A.default('#' + m),
                      $ = b.elems[0]
                    if (!$) return !0
                    var H = $.files
                    return H != null && H.length && p.uploadImg(H), $ && ($.value = ''), !0
                  }
                }
              ],
              M = [
                `<input
            id="` +
                  g +
                  `"
            type="text"
            class="block"
            placeholder="` +
                  P('\u56FE\u7247\u5730\u5740') +
                  '"/>'
              ]
            s.showLinkImgAlt &&
              M.push(
                `
        <input
            id="` +
                  y +
                  `"
            type="text"
            class="block"
            placeholder="` +
                  P('\u56FE\u7247\u6587\u5B57\u8BF4\u660E') +
                  '"/>'
              ),
              s.showLinkImgHref &&
                M.push(
                  `
        <input
            id="` +
                    x +
                    `"
            type="text"
            class="block"
            placeholder="` +
                    P('\u8DF3\u8F6C\u94FE\u63A5') +
                    '"/>'
                )
            var B = [
                {
                  title: P('\u4E0A\u4F20\u56FE\u7247'),
                  tpl: R('w-e-up-img-container', 'w-e-icon-upload2', ''),
                  events: N
                },
                {
                  title: P('\u7F51\u7EDC\u56FE\u7247'),
                  tpl:
                    `<div>
                    ` +
                    M.join('') +
                    `
                    <div class="w-e-button-container">
                        <button type="button" id="` +
                    S +
                    '" class="right">' +
                    P('\u63D2\u5165', '') +
                    `</button>
                    </div>
                </div>`,
                  events: [
                    {
                      selector: '#' + S,
                      type: 'click',
                      fn: function () {
                        var b,
                          $ = A.default('#' + g),
                          H = (0, a.default)((b = $.val())).call(b)
                        if (!!H) {
                          var U
                          if (s.showLinkImgAlt) {
                            var K
                            U = (0, a.default)((K = A.default('#' + y).val())).call(K)
                          }
                          var w
                          if (s.showLinkImgHref) {
                            var X
                            w = (0, a.default)((X = A.default('#' + x).val())).call(X)
                          }
                          if (!!C(H)) return p.insertImg(H, U, w), !0
                        }
                      },
                      bindEnter: !0
                    }
                  ]
                }
              ],
              F = {
                width: 300,
                height: 0,
                tabs: [],
                onlyUploadConf: {
                  $elem: A.default(R('w-e-menu', 'w-e-icon-image', '\u56FE\u7247')),
                  events: N
                }
              }
            return (
              window.FileReader &&
                (s.uploadImgShowBase64 ||
                  s.uploadImgServer ||
                  s.customUploadImg ||
                  s.uploadImgFromMedia) &&
                F.tabs.push(B[0]),
              s.showLinkImg && (F.tabs.push(B[1]), (F.onlyUploadConf = void 0)),
              F
            )
          }
          n.default = f
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(4))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = t(2),
            c = a.__importDefault(t(3)),
            A = a.__importDefault(t(24)),
            d = a.__importDefault(t(366)),
            h = (function (f) {
              a.__extends(l, f)
              function l(u) {
                var s = this,
                  p = c.default(`<div class="w-e-menu" data-title="\u7F29\u8FDB">
                <i class="w-e-icon-indent-increase"></i>
            </div>`),
                  v = {
                    width: 130,
                    title: '\u8BBE\u7F6E\u7F29\u8FDB',
                    type: 'list',
                    list: [
                      {
                        $elem: c.default(
                          `<p>
                            <i class="w-e-icon-indent-increase w-e-drop-list-item"></i>
                            ` +
                            u.i18next.t('menus.dropListMenu.indent.\u589E\u52A0\u7F29\u8FDB') +
                            `
                        <p>`
                        ),
                        value: 'increase'
                      },
                      {
                        $elem: c.default(
                          `<p>
                            <i class="w-e-icon-indent-decrease w-e-drop-list-item"></i>
                            ` +
                            u.i18next.t('menus.dropListMenu.indent.\u51CF\u5C11\u7F29\u8FDB') +
                            `
                        <p>`
                        ),
                        value: 'decrease'
                      }
                    ],
                    clickHandler: function (g) {
                      s.command(g)
                    }
                  }
                return (s = f.call(this, p, u, v) || this), s
              }
              return (
                (l.prototype.command = function (u) {
                  var s = this.editor,
                    p = s.selection.getSelectionContainerElem()
                  if (p && s.$textElem.equal(p)) {
                    var v = s.selection.getSelectionRangeTopNodes()
                    v.length > 0 &&
                      (0, r.default)(v).call(v, function (m) {
                        d.default(c.default(m), u, s)
                      })
                  } else
                    p &&
                      p.length > 0 &&
                      (0, r.default)(p).call(p, function (m) {
                        d.default(c.default(m), u, s)
                      })
                  s.selection.restoreSelection(), this.tryChangeActive()
                }),
                (l.prototype.tryChangeActive = function () {
                  var u = this.editor,
                    s = u.selection.getSelectionStartElem(),
                    p = c.default(s).getNodeTop(u)
                  p.length <= 0 ||
                    (p.elems[0].style.paddingLeft != '' ? this.active() : this.unActive())
                }),
                l
              )
            })(A.default)
          n.default = h
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(45)),
            a = e(t(17))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var c = t(2),
            A = c.__importDefault(t(367)),
            d = c.__importDefault(t(368)),
            h = /^(\d+)(\w+)$/,
            f = /^(\d+)%$/
          function l(s) {
            var p = s.config.indentation
            if (typeof p == 'string') {
              if (h.test(p)) {
                var v,
                  m = (0, r.default)((v = (0, a.default)(p).call(p).match(h))).call(v, 1, 3),
                  g = m[0],
                  y = m[1]
                return { value: Number(g), unit: y }
              } else if (f.test(p))
                return { value: Number((0, a.default)(p).call(p).match(f)[1]), unit: '%' }
            } else if (p.value !== void 0 && p.unit) return p
            return { value: 2, unit: 'em' }
          }
          function u(s, p, v) {
            var m = s.getNodeTop(v),
              g = /^(P|H[0-9]*)$/
            g.test(m.getNodeName()) &&
              (p === 'increase' ? A.default(m, l(v)) : p === 'decrease' && d.default(m, l(v)))
          }
          n.default = u
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(45))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          function a(c, A) {
            var d = c.elems[0]
            if (d.style.paddingLeft === '') c.css('padding-left', A.value + A.unit)
            else {
              var h = d.style.paddingLeft,
                f = (0, r.default)(h).call(h, 0, h.length - A.unit.length),
                l = Number(f) + A.value
              c.css('padding-left', '' + l + A.unit)
            }
          }
          n.default = a
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(45))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          function a(c, A) {
            var d = c.elems[0]
            if (d.style.paddingLeft !== '') {
              var h = d.style.paddingLeft,
                f = (0, r.default)(h).call(h, 0, h.length - A.unit.length),
                l = Number(f) - A.value
              l > 0 ? c.css('padding-left', '' + l + A.unit) : c.css('padding-left', '')
            }
          }
          n.default = a
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(3)),
            c = r.__importDefault(t(38)),
            A = r.__importDefault(t(33)),
            d = r.__importDefault(t(370)),
            h = (function (f) {
              r.__extends(l, f)
              function l(u) {
                var s = this,
                  p = a.default(`<div class="w-e-menu" data-title="\u8868\u60C5">
                <i class="w-e-icon-happy"></i>
            </div>`)
                return (s = f.call(this, p, u) || this), s
              }
              return (
                (l.prototype.createPanel = function () {
                  var u = d.default(this.editor),
                    s = new A.default(this, u)
                  s.create()
                }),
                (l.prototype.clickHandler = function () {
                  this.createPanel()
                }),
                (l.prototype.tryChangeActive = function () {}),
                l
              )
            })(c.default)
          n.default = h
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(26)),
            a = e(t(70)),
            c = e(t(17))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var A = t(2),
            d = A.__importDefault(t(3))
          function h(f) {
            var l = f.config.emotions
            function u(v) {
              var m = []
              if (v.type == 'image') {
                var g
                ;(m = (0, r.default)((g = v.content)).call(g, function (x) {
                  return typeof x == 'string'
                    ? ''
                    : '<span  title="' +
                        x.alt +
                        `">
                    <img class="eleImg" data-emoji="` +
                        x.alt +
                        '" style src="' +
                        x.src +
                        '" alt="[' +
                        x.alt +
                        `]">
                </span>`
                })),
                  (m = (0, a.default)(m).call(m, function (x) {
                    return x !== ''
                  }))
              } else {
                var y
                m = (0, r.default)((y = v.content)).call(y, function (x) {
                  return '<span class="eleImg" title="' + x + '">' + x + '</span>'
                })
              }
              return m.join('').replace(/&nbsp;/g, '')
            }
            var s = (0, r.default)(l).call(l, function (v) {
                return {
                  title: f.i18next.t('menus.panelMenus.emoticon.' + v.title),
                  tpl: '<div>' + u(v) + '</div>',
                  events: [
                    {
                      selector: '.eleImg',
                      type: 'click',
                      fn: function (g) {
                        var y = d.default(g.target),
                          x = y.getNodeName(),
                          S
                        if (x === 'IMG') {
                          var D
                          S = (0, c.default)((D = y.parent().html())).call(D)
                        } else S = '<span>' + y.html() + '</span>'
                        return f.cmd.do('insertHTML', S), !0
                      }
                    }
                  ]
                }
              }),
              p = { width: 300, height: 230, tabs: s }
            return p
          }
          n.default = h
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 }),
            (n.createListHandle = n.ClassType = void 0)
          var r = t(2),
            a = r.__importDefault(t(3)),
            c = r.__importDefault(t(372)),
            A = r.__importDefault(t(374)),
            d = r.__importDefault(t(375)),
            h = r.__importDefault(t(376)),
            f = r.__importDefault(t(377)),
            l
          ;(function (v) {
            ;(v.Wrap = 'WrapListHandle'),
              (v.Join = 'JoinListHandle'),
              (v.StartJoin = 'StartJoinListHandle'),
              (v.EndJoin = 'EndJoinListHandle'),
              (v.Other = 'OtherListHandle')
          })((l = n.ClassType || (n.ClassType = {})))
          var u = {
            WrapListHandle: c.default,
            JoinListHandle: A.default,
            StartJoinListHandle: d.default,
            EndJoinListHandle: h.default,
            OtherListHandle: f.default
          }
          function s(v, m, g) {
            if (v === l.Other && g === void 0)
              throw new Error('other \u7C7B\u9700\u8981\u4F20\u5165 range')
            return v !== l.Other ? new u[v](m) : new u[v](m, g)
          }
          n.createListHandle = s
          var p = (function () {
            function v(m) {
              ;(this.handle = m), this.handle.exec()
            }
            return (
              (v.prototype.getSelectionRangeElem = function () {
                return a.default(this.handle.selectionRangeElem.get())
              }),
              v
            )
          })()
          n.default = p
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(4))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = t(2),
            c = a.__importDefault(t(3)),
            A = t(58),
            d = t(47),
            h = (function (f) {
              a.__extends(l, f)
              function l(u) {
                return f.call(this, u) || this
              }
              return (
                (l.prototype.exec = function () {
                  var u = this.options,
                    s = u.listType,
                    p = u.listTarget,
                    v = u.$selectionElem,
                    m = u.$startElem,
                    g = u.$endElem,
                    y,
                    x = [],
                    S = v == null ? void 0 : v.getNodeName(),
                    D = m.prior,
                    P = g.prior
                  if (
                    (!m.prior && !g.prior) ||
                    (!(D != null && D.prev().length) && !(P != null && P.next().length))
                  ) {
                    var C
                    ;(0, r.default)((C = v == null ? void 0 : v.children())).call(C, function (F) {
                      x.push(c.default(F))
                    }),
                      S === s
                        ? (y = d.createElementFragment(x, d.createDocumentFragment(), 'p'))
                        : ((y = d.createElement(p)),
                          (0, r.default)(x).call(x, function (F) {
                            y.appendChild(F.elems[0])
                          })),
                      this.selectionRangeElem.set(y),
                      d.insertBefore(v, y, v.elems[0]),
                      v.remove()
                  } else {
                    for (var E = D; E.length; )
                      x.push(E), P != null && P.equal(E) ? (E = c.default(void 0)) : (E = E.next())
                    var T = D.prev(),
                      R = P.next()
                    if (
                      (S === s
                        ? (y = d.createElementFragment(x, d.createDocumentFragment(), 'p'))
                        : ((y = d.createElement(p)),
                          (0, r.default)(x).call(x, function (F) {
                            y.append(F.elems[0])
                          })),
                      T.length && R.length)
                    ) {
                      for (var N = []; R.length; ) N.push(R), (R = R.next())
                      var M = d.createElement(S)
                      ;(0, r.default)(N).call(N, function (F) {
                        M.append(F.elems[0])
                      }),
                        c.default(M).insertAfter(v),
                        this.selectionRangeElem.set(y)
                      var B = v.next()
                      B.length ? d.insertBefore(v, y, B.elems[0]) : v.parent().elems[0].append(y)
                    } else if (!T.length)
                      this.selectionRangeElem.set(y), d.insertBefore(v, y, v.elems[0])
                    else {
                      this.selectionRangeElem.set(y)
                      var B = v.next()
                      B.length ? d.insertBefore(v, y, B.elems[0]) : v.parent().elems[0].append(y)
                    }
                  }
                }),
                l
              )
            })(A.ListHandle)
          n.default = h
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(4))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = (function () {
            function c() {
              this._element = null
            }
            return (
              (c.prototype.set = function (A) {
                if (A instanceof DocumentFragment) {
                  var d,
                    h = []
                  ;(0, r.default)((d = A.childNodes)).call(d, function (f) {
                    h.push(f)
                  }),
                    (A = h)
                }
                this._element = A
              }),
              (c.prototype.get = function () {
                return this._element
              }),
              (c.prototype.clear = function () {
                this._element = null
              }),
              c
            )
          })()
          n.default = a
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(4))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = t(2),
            c = a.__importDefault(t(3)),
            A = t(58),
            d = t(47),
            h = (function (f) {
              a.__extends(l, f)
              function l(u) {
                return f.call(this, u) || this
              }
              return (
                (l.prototype.exec = function () {
                  var u,
                    s,
                    p,
                    v,
                    m,
                    g,
                    y,
                    x = this.options,
                    S = x.editor,
                    D = x.listType,
                    P = x.listTarget,
                    C = x.$startElem,
                    E = x.$endElem,
                    T,
                    R = S.selection.getSelectionRangeTopNodes(),
                    N = C == null ? void 0 : C.getNodeName(),
                    M = E == null ? void 0 : E.getNodeName()
                  if (N === M)
                    if (R.length > 2)
                      if (
                        (R.shift(),
                        R.pop(),
                        (T = d.createElementFragment(
                          d.filterSelectionNodes(R),
                          d.createDocumentFragment()
                        )),
                        N === D)
                      )
                        (u = E.children()) === null ||
                          u === void 0 ||
                          (0, r.default)(u).call(u, function (J) {
                            T.append(J)
                          }),
                          E.remove(),
                          this.selectionRangeElem.set(T),
                          C.elems[0].append(T)
                      else {
                        for (
                          var B = document.createDocumentFragment(),
                            F = document.createDocumentFragment(),
                            O = d.getStartPoint(C);
                          O.length;

                        ) {
                          var b = O.elems[0]
                          ;(O = O.next()), B.append(b)
                        }
                        for (var $ = d.getEndPoint(E), H = []; $.length; )
                          H.unshift($.elems[0]), ($ = $.prev())
                        ;(0, r.default)(H).call(H, function (J) {
                          F.append(J)
                        })
                        var U = d.createElement(P)
                        U.append(B),
                          U.append(T),
                          U.append(F),
                          (T = U),
                          this.selectionRangeElem.set(T),
                          c.default(U).insertAfter(C),
                          !(!((s = C.children()) === null || s === void 0) && s.length) &&
                            C.remove(),
                          !(!((p = E.children()) === null || p === void 0) && p.length) &&
                            E.remove()
                      }
                    else {
                      R.length = 0
                      for (var O = d.getStartPoint(C); O.length; ) R.push(O), (O = O.next())
                      for (var $ = d.getEndPoint(E), H = []; $.length; )
                        H.unshift($), ($ = $.prev())
                      R.push.apply(R, H),
                        N === D
                          ? ((T = d.createElementFragment(R, d.createDocumentFragment(), 'p')),
                            this.selectionRangeElem.set(T),
                            d.insertBefore(C, T, E.elems[0]))
                          : ((T = d.createElement(P)),
                            (0, r.default)(R).call(R, function (W) {
                              T.append(W.elems[0])
                            }),
                            this.selectionRangeElem.set(T),
                            c.default(T).insertAfter(C)),
                        !(!((v = C.children()) === null || v === void 0) && v.length) && E.remove(),
                        !(!((m = E.children()) === null || m === void 0) && m.length) && E.remove()
                    }
                  else {
                    for (var K = [], $ = d.getEndPoint(E); $.length; ) K.unshift($), ($ = $.prev())
                    for (var w = [], O = d.getStartPoint(C); O.length; ) w.push(O), (O = O.next())
                    if (
                      ((T = d.createDocumentFragment()),
                      R.shift(),
                      R.pop(),
                      (0, r.default)(w).call(w, function (V) {
                        return T.append(V.elems[0])
                      }),
                      (T = d.createElementFragment(d.filterSelectionNodes(R), T)),
                      (0, r.default)(K).call(K, function (V) {
                        return T.append(V.elems[0])
                      }),
                      this.selectionRangeElem.set(T),
                      N === D)
                    )
                      C.elems[0].append(T),
                        !(!((g = E.children()) === null || g === void 0) && g.length) && E.remove()
                    else if (!((y = E.children()) === null || y === void 0) && y.length) {
                      var X = E.children()
                      d.insertBefore(X, T, X.elems[0])
                    } else E.elems[0].append(T)
                  }
                }),
                l
              )
            })(A.ListHandle)
          n.default = h
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(4))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = t(2),
            c = a.__importDefault(t(3)),
            A = t(58),
            d = t(47),
            h = (function (f) {
              a.__extends(l, f)
              function l(u) {
                return f.call(this, u) || this
              }
              return (
                (l.prototype.exec = function () {
                  var u,
                    s = this.options,
                    p = s.editor,
                    v = s.listType,
                    m = s.listTarget,
                    g = s.$startElem,
                    y,
                    x = p.selection.getSelectionRangeTopNodes(),
                    S = g == null ? void 0 : g.getNodeName()
                  x.shift()
                  for (var D = [], P = d.getStartPoint(g); P.length; ) D.push(P), (P = P.next())
                  S === v
                    ? ((y = d.createDocumentFragment()),
                      (0, r.default)(D).call(D, function (C) {
                        return y.append(C.elems[0])
                      }),
                      (y = d.createElementFragment(d.filterSelectionNodes(x), y)),
                      this.selectionRangeElem.set(y),
                      g.elems[0].append(y))
                    : ((y = d.createElement(m)),
                      (0, r.default)(D).call(D, function (C) {
                        return y.append(C.elems[0])
                      }),
                      (y = d.createElementFragment(d.filterSelectionNodes(x), y)),
                      this.selectionRangeElem.set(y),
                      c.default(y).insertAfter(g),
                      !(!((u = g.children()) === null || u === void 0) && u.length) && g.remove())
                }),
                l
              )
            })(A.ListHandle)
          n.default = h
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(4))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = t(2),
            c = a.__importDefault(t(3)),
            A = t(58),
            d = t(47),
            h = (function (f) {
              a.__extends(l, f)
              function l(u) {
                return f.call(this, u) || this
              }
              return (
                (l.prototype.exec = function () {
                  var u,
                    s,
                    p = this.options,
                    v = p.editor,
                    m = p.listType,
                    g = p.listTarget,
                    y = p.$endElem,
                    x,
                    S = v.selection.getSelectionRangeTopNodes(),
                    D = y == null ? void 0 : y.getNodeName()
                  S.pop()
                  for (var P = [], C = d.getEndPoint(y); C.length; ) P.unshift(C), (C = C.prev())
                  if (D === m)
                    if (
                      ((x = d.createElementFragment(
                        d.filterSelectionNodes(S),
                        d.createDocumentFragment()
                      )),
                      (0, r.default)(P).call(P, function (R) {
                        return x.append(R.elems[0])
                      }),
                      this.selectionRangeElem.set(x),
                      !((u = y.children()) === null || u === void 0) && u.length)
                    ) {
                      var E = y.children()
                      d.insertBefore(E, x, E.elems[0])
                    } else y.elems[0].append(x)
                  else {
                    var T = d.filterSelectionNodes(S)
                    T.push.apply(T, P),
                      (x = d.createElementFragment(T, d.createElement(g))),
                      this.selectionRangeElem.set(x),
                      c.default(x).insertBefore(y),
                      !(!((s = y.children()) === null || s === void 0) && s.length) && y.remove()
                  }
                }),
                l
              )
            })(A.ListHandle)
          n.default = h
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = t(58),
            c = t(47),
            A = (function (d) {
              r.__extends(h, d)
              function h(f, l) {
                var u = d.call(this, f) || this
                return (u.range = l), u
              }
              return (
                (h.prototype.exec = function () {
                  var f = this.options,
                    l = f.editor,
                    u = f.listTarget,
                    s = l.selection.getSelectionRangeTopNodes(),
                    p = c.createElementFragment(c.filterSelectionNodes(s), c.createElement(u))
                  this.selectionRangeElem.set(p), this.range.insertNode(p)
                }),
                h
              )
            })(a.ListHandle)
          n.default = A
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(4)),
            a = e(t(27))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var c = t(2),
            A = c.__importDefault(t(24)),
            d = c.__importDefault(t(3)),
            h = c.__importDefault(t(379)),
            f = (function (l) {
              c.__extends(u, l)
              function u(s) {
                var p = this,
                  v = d.default(`<div class="w-e-menu" data-title="\u884C\u9AD8">
                    <i class="w-e-icon-row-height"></i>
                </div>`),
                  m = new h.default(s, s.config.lineHeights),
                  g = {
                    width: 100,
                    title: '\u8BBE\u7F6E\u884C\u9AD8',
                    type: 'list',
                    list: m.getItemList(),
                    clickHandler: function (x) {
                      s.selection.saveRange(), p.command(x)
                    }
                  }
                return (p = l.call(this, v, s, g) || this), p
              }
              return (
                (u.prototype.command = function (s) {
                  var p = this.editor
                  p.selection.restoreSelection()
                  var v = d.default(p.selection.getSelectionContainerElem())
                  if (!!v.elems.length) {
                    if (v && p.$textElem.equal(v)) {
                      for (
                        var m = !1,
                          g = d.default(p.selection.getSelectionStartElem()).elems[0],
                          y = d.default(p.selection.getSelectionEndElem()).elems[0],
                          x = this.getDom(g),
                          S = this.getDom(y),
                          D = v.elems[0].children,
                          P = 0;
                        P < D.length;
                        P++
                      ) {
                        var C = D[P]
                        if (
                          d.default(C).getNodeName() === 'P' &&
                          (C === x && (m = !0), m && (d.default(C).css('line-height', s), C === S))
                        ) {
                          m = !1
                          return
                        }
                      }
                      p.selection.createRangeByElems(g, y)
                      return
                    }
                    var E = v.elems[0],
                      T = this.getDom(E)
                    d.default(T).getNodeName() === 'P' &&
                      (d.default(T).css('line-height', s), p.selection.createRangeByElems(T, T))
                  }
                }),
                (u.prototype.getDom = function (s) {
                  var p = d.default(s).elems[0]
                  if (!p.parentNode) return p
                  function v(m, g) {
                    var y = d.default(m.parentNode)
                    return g.$textElem.equal(y) ? m : v(y.elems[0], g)
                  }
                  return (p = v(p, this.editor)), p
                }),
                (u.prototype.styleProcessing = function (s) {
                  var p = ''
                  return (
                    (0, r.default)(s).call(s, function (v) {
                      v !== '' &&
                        (0, a.default)(v).call(v, 'line-height') === -1 &&
                        (p = p + v + ';')
                    }),
                    p
                  )
                }),
                (u.prototype.setRange = function (s, p) {
                  var v = this.editor,
                    m = window.getSelection ? window.getSelection() : document.getSelection()
                  m == null || m.removeAllRanges()
                  var g = document.createRange(),
                    y = s,
                    x = p
                  g.setStart(y, 0),
                    g.setEnd(x, 1),
                    m == null || m.addRange(g),
                    v.selection.saveRange(),
                    m == null || m.removeAllRanges(),
                    v.selection.restoreSelection()
                }),
                (u.prototype.tryChangeActive = function () {
                  var s = this.editor,
                    p = s.selection.getSelectionContainerElem()
                  if (!(p && s.$textElem.equal(p))) {
                    var v = d.default(s.selection.getSelectionStartElem())
                    if (v.length !== 0) {
                      v = this.getDom(v.elems[0])
                      var m = v.getAttribute('style') ? v.getAttribute('style') : ''
                      m && (0, a.default)(m).call(m, 'line-height') !== -1
                        ? this.active()
                        : this.unActive()
                    }
                  }
                }),
                u
              )
            })(A.default)
          n.default = f
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(4))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = t(2),
            c = a.__importDefault(t(3)),
            A = (function () {
              function d(h, f) {
                var l = this
                ;(this.itemList = [
                  {
                    $elem: c.default('<span>' + h.i18next.t('\u9ED8\u8BA4') + '</span>'),
                    value: ''
                  }
                ]),
                  (0, r.default)(f).call(f, function (u) {
                    l.itemList.push({ $elem: c.default('<span>' + u + '</span>'), value: u })
                  })
              }
              return (
                (d.prototype.getItemList = function () {
                  return this.itemList
                }),
                d
              )
            })()
          n.default = A
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(3)),
            c = r.__importDefault(t(23)),
            A = (function (d) {
              r.__extends(h, d)
              function h(f) {
                var l = this,
                  u = a.default(`<div class="w-e-menu" data-title="\u64A4\u9500">
                <i class="w-e-icon-undo"></i>
            </div>`)
                return (l = d.call(this, u, f) || this), l
              }
              return (
                (h.prototype.clickHandler = function () {
                  var f = this.editor
                  f.history.revoke()
                  var l = f.$textElem.children()
                  if (!!(l != null && l.length)) {
                    var u = l.last()
                    f.selection.createRangeByElem(u, !1, !0), f.selection.restoreSelection()
                  }
                }),
                (h.prototype.tryChangeActive = function () {
                  this.editor.isCompatibleMode ||
                    (this.editor.history.size[0] ? this.active() : this.unActive())
                }),
                h
              )
            })(c.default)
          n.default = A
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(3)),
            c = r.__importDefault(t(23)),
            A = (function (d) {
              r.__extends(h, d)
              function h(f) {
                var l = this,
                  u = a.default(`<div class="w-e-menu" data-title="\u6062\u590D">
                <i class="w-e-icon-redo"></i>
            </div>`)
                return (l = d.call(this, u, f) || this), l
              }
              return (
                (h.prototype.clickHandler = function () {
                  var f = this.editor
                  f.history.restore()
                  var l = f.$textElem.children()
                  if (!!(l != null && l.length)) {
                    var u = l.last()
                    f.selection.createRangeByElem(u, !1, !0), f.selection.restoreSelection()
                  }
                }),
                (h.prototype.tryChangeActive = function () {
                  this.editor.isCompatibleMode ||
                    (this.editor.history.size[1] ? this.active() : this.unActive())
                }),
                h
              )
            })(c.default)
          n.default = A
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(38)),
            c = r.__importDefault(t(3)),
            A = r.__importDefault(t(383)),
            d = r.__importDefault(t(33)),
            h = r.__importDefault(t(392)),
            f = (function (l) {
              r.__extends(u, l)
              function u(s) {
                var p = this,
                  v = c.default(
                    '<div class="w-e-menu" data-title="\u8868\u683C"><i class="w-e-icon-table2"></i></div>'
                  )
                return (p = l.call(this, v, s) || this), h.default(s), p
              }
              return (
                (u.prototype.clickHandler = function () {
                  this.createPanel()
                }),
                (u.prototype.createPanel = function () {
                  var s = A.default(this.editor),
                    p = new d.default(this, s)
                  p.create()
                }),
                (u.prototype.tryChangeActive = function () {}),
                u
              )
            })(a.default)
          n.default = f
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(384))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = t(2),
            c = t(6),
            A = a.__importDefault(t(3))
          t(389)
          var d = a.__importDefault(t(391))
          function h(l) {
            return l > 0 && (0, r.default)(l)
          }
          function f(l) {
            var u = new d.default(l),
              s = c.getRandom('w-col-id'),
              p = c.getRandom('w-row-id'),
              v = c.getRandom('btn-link'),
              m = 'menus.panelMenus.table.',
              g = function (D) {
                return l.i18next.t(D)
              },
              y = [
                {
                  title: g(m + '\u63D2\u5165\u8868\u683C'),
                  tpl:
                    `<div>
                    <div class="w-e-table">
                        <span>` +
                    g('\u521B\u5EFA') +
                    `</span>
                        <input id="` +
                    p +
                    `"  type="text" class="w-e-table-input" value="5"/></td>
                        <span>` +
                    g(m + '\u884C') +
                    `</span>
                        <input id="` +
                    s +
                    `" type="text" class="w-e-table-input" value="5"/></td>
                        <span>` +
                    (g(m + '\u5217') + g(m + '\u7684') + g(m + '\u8868\u683C')) +
                    `</span>
                    </div>
                    <div class="w-e-button-container">
                        <button type="button" id="` +
                    v +
                    '" class="right">' +
                    g('\u63D2\u5165') +
                    `</button>
                    </div>
                </div>`,
                  events: [
                    {
                      selector: '#' + v,
                      type: 'click',
                      fn: function () {
                        var D = Number(A.default('#' + s).val()),
                          P = Number(A.default('#' + p).val())
                        return h(P) && h(D)
                          ? (u.createAction(P, D), !0)
                          : (l.config.customAlert(
                              '\u8868\u683C\u884C\u5217\u8BF7\u8F93\u5165\u6B63\u6574\u6570',
                              'warning'
                            ),
                            !1)
                      },
                      bindEnter: !0
                    }
                  ]
                }
              ],
              x = { width: 330, height: 0, tabs: [] }
            return x.tabs.push(y[0]), x
          }
          n.default = f
        },
        function (o, n, t) {
          o.exports = t(385)
        },
        function (o, n, t) {
          var e = t(386)
          o.exports = e
        },
        function (o, n, t) {
          t(387)
          var e = t(9)
          o.exports = e.Number.isInteger
        },
        function (o, n, t) {
          var e = t(5),
            i = t(388)
          e({ target: 'Number', stat: !0 }, { isInteger: i })
        },
        function (o, n, t) {
          var e = t(13),
            i = Math.floor
          o.exports = function (a) {
            return !e(a) && isFinite(a) && i(a) === a
          }
        },
        function (o, n, t) {
          var e = t(20),
            i = t(390)
          ;(i = i.__esModule ? i.default : i), typeof i == 'string' && (i = [[o.i, i, '']])
          var r = {}
          ;(r.insert = 'head'), (r.singleton = !1), e(i, r), (o.exports = i.locals || {})
        },
        function (o, n, t) {
          var e = t(21)
          ;(n = e(!1)),
            n.push([
              o.i,
              `.w-e-table {
  display: flex;
}
.w-e-table .w-e-table-input {
  width: 40px;
  text-align: center!important;
  margin: 0 5px;
}
`,
              ''
            ]),
            (o.exports = n)
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = t(7),
            c = r.__importDefault(t(3)),
            A = (function () {
              function d(h) {
                this.editor = h
              }
              return (
                (d.prototype.createAction = function (h, f) {
                  var l = this.editor,
                    u = c.default(l.selection.getSelectionContainerElem()),
                    s = c.default(u.elems[0]).parentUntilEditor('UL', l),
                    p = c.default(u.elems[0]).parentUntilEditor('OL', l)
                  if (!(s || p)) {
                    var v = this.createTableHtml(h, f)
                    l.cmd.do('insertHTML', v)
                  }
                }),
                (d.prototype.createTableHtml = function (h, f) {
                  for (var l = '', u = '', s = 0; s < h; s++) {
                    u = ''
                    for (var p = 0; p < f; p++)
                      s === 0 ? (u = u + '<th></th>') : (u = u + '<td></td>')
                    l = l + '<tr>' + u + '</tr>'
                  }
                  var v =
                    '<table border="0" width="100%" cellpadding="0" cellspacing="0"><tbody>' +
                    l +
                    ('</tbody></table>' + a.EMPTY_P)
                  return v
                }),
                d
              )
            })()
          n.default = A
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(393)),
            c = t(400)
          function A(d) {
            a.default(d), c.bindEventKeyboardEvent(d), c.bindClickEvent(d)
          }
          n.default = A
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(3)),
            c = r.__importDefault(t(39)),
            A = r.__importDefault(t(394)),
            d = r.__importDefault(t(399)),
            h = t(7)
          function f(p) {
            var v
            function m(y) {
              var x = new d.default(p),
                S = 'menus.panelMenus.table.',
                D = function (E, T) {
                  return T === void 0 && (T = S), p.i18next.t(T + E)
                },
                P = [
                  {
                    $elem: a.default('<span>' + D('\u5220\u9664\u8868\u683C') + '</span>'),
                    onClick: function (E, T) {
                      return (
                        E.selection.createRangeByElem(T),
                        E.selection.restoreSelection(),
                        E.cmd.do('insertHTML', h.EMPTY_P),
                        !0
                      )
                    }
                  },
                  {
                    $elem: a.default('<span>' + D('\u6DFB\u52A0\u884C') + '</span>'),
                    onClick: function (E, T) {
                      var R = l(E)
                      if (R) return !0
                      var N = a.default(E.selection.getSelectionStartElem()),
                        M = x.getRowNode(N.elems[0])
                      if (!M) return !0
                      var B = Number(x.getCurrentRowIndex(T.elems[0], M)),
                        F = x.getTableHtml(T.elems[0]),
                        O = x.getTableHtml(A.default.ProcessingRow(a.default(F), B).elems[0])
                      return (
                        (O = s(T, O)),
                        E.selection.createRangeByElem(T),
                        E.selection.restoreSelection(),
                        E.cmd.do('insertHTML', O),
                        !0
                      )
                    }
                  },
                  {
                    $elem: a.default('<span>' + D('\u5220\u9664\u884C') + '</span>'),
                    onClick: function (E, T) {
                      var R = l(E)
                      if (R) return !0
                      var N = a.default(E.selection.getSelectionStartElem()),
                        M = x.getRowNode(N.elems[0])
                      if (!M) return !0
                      var B = Number(x.getCurrentRowIndex(T.elems[0], M)),
                        F = x.getTableHtml(T.elems[0]),
                        O = A.default.DeleteRow(a.default(F), B).elems[0].children[0].children
                          .length,
                        b = ''
                      return (
                        E.selection.createRangeByElem(T),
                        E.selection.restoreSelection(),
                        O === 0
                          ? (b = h.EMPTY_P)
                          : (b = x.getTableHtml(A.default.DeleteRow(a.default(F), B).elems[0])),
                        (b = s(T, b)),
                        E.cmd.do('insertHTML', b),
                        !0
                      )
                    }
                  },
                  {
                    $elem: a.default('<span>' + D('\u6DFB\u52A0\u5217') + '</span>'),
                    onClick: function (E, T) {
                      var R = l(E)
                      if (R) return !0
                      var N = a.default(E.selection.getSelectionStartElem()),
                        M = x.getCurrentColIndex(N.elems[0]),
                        B = x.getTableHtml(T.elems[0]),
                        F = x.getTableHtml(A.default.ProcessingCol(a.default(B), M).elems[0])
                      return (
                        (F = s(T, F)),
                        E.selection.createRangeByElem(T),
                        E.selection.restoreSelection(),
                        E.cmd.do('insertHTML', F),
                        !0
                      )
                    }
                  },
                  {
                    $elem: a.default('<span>' + D('\u5220\u9664\u5217') + '</span>'),
                    onClick: function (E, T) {
                      var R = l(E)
                      if (R) return !0
                      var N = a.default(E.selection.getSelectionStartElem()),
                        M = x.getCurrentColIndex(N.elems[0]),
                        B = x.getTableHtml(T.elems[0]),
                        F = A.default.DeleteCol(a.default(B), M),
                        O = F.elems[0].children[0].children[0].children.length,
                        b = ''
                      return (
                        E.selection.createRangeByElem(T),
                        E.selection.restoreSelection(),
                        O === 0 ? (b = h.EMPTY_P) : (b = x.getTableHtml(F.elems[0])),
                        (b = s(T, b)),
                        E.cmd.do('insertHTML', b),
                        !0
                      )
                    }
                  },
                  {
                    $elem: a.default('<span>' + D('\u8BBE\u7F6E\u8868\u5934') + '</span>'),
                    onClick: function (E, T) {
                      var R = l(E)
                      if (R) return !0
                      var N = a.default(E.selection.getSelectionStartElem()),
                        M = x.getRowNode(N.elems[0])
                      if (!M) return !0
                      var B = Number(x.getCurrentRowIndex(T.elems[0], M))
                      B !== 0 && (B = 0)
                      var F = x.getTableHtml(T.elems[0]),
                        O = x.getTableHtml(A.default.setTheHeader(a.default(F), B, 'th').elems[0])
                      return (
                        (O = s(T, O)),
                        E.selection.createRangeByElem(T),
                        E.selection.restoreSelection(),
                        E.cmd.do('insertHTML', O),
                        !0
                      )
                    }
                  },
                  {
                    $elem: a.default('<span>' + D('\u53D6\u6D88\u8868\u5934') + '</span>'),
                    onClick: function (E, T) {
                      var R = a.default(E.selection.getSelectionStartElem()),
                        N = x.getRowNode(R.elems[0])
                      if (!N) return !0
                      var M = Number(x.getCurrentRowIndex(T.elems[0], N))
                      M !== 0 && (M = 0)
                      var B = x.getTableHtml(T.elems[0]),
                        F = x.getTableHtml(A.default.setTheHeader(a.default(B), M, 'td').elems[0])
                      return (
                        (F = s(T, F)),
                        E.selection.createRangeByElem(T),
                        E.selection.restoreSelection(),
                        E.cmd.do('insertHTML', F),
                        !0
                      )
                    }
                  }
                ]
              ;(v = new c.default(p, y, P)), v.create()
            }
            function g() {
              v && (v.remove(), (v = null))
            }
            return { showTableTooltip: m, hideTableTooltip: g }
          }
          function l(p) {
            var v = p.selection.getSelectionStartElem(),
              m = p.selection.getSelectionEndElem()
            return (v == null ? void 0 : v.elems[0]) !== (m == null ? void 0 : m.elems[0])
          }
          function u(p) {
            var v = f(p),
              m = v.showTableTooltip,
              g = v.hideTableTooltip
            p.txt.eventHooks.tableClickEvents.push(m),
              p.txt.eventHooks.clickEvents.push(g),
              p.txt.eventHooks.keyupEvents.push(g),
              p.txt.eventHooks.toolbarClickEvents.push(g),
              p.txt.eventHooks.menuClickEvents.push(g),
              p.txt.eventHooks.textScrollEvents.push(g)
          }
          n.default = u
          function s(p, v) {
            var m = p.elems[0].nextSibling
            return (!m || m.innerHTML === '<br>') && (v += '' + h.EMPTY_P), v
          }
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(45)),
            a = e(t(91)),
            c = e(t(4)),
            A = e(t(138))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var d = t(2),
            h = d.__importDefault(t(3))
          function f(g, y) {
            for (
              var x = m(g),
                S = (0, r.default)(Array.prototype).apply(x.children),
                D = S[0].children.length,
                P = document.createElement('tr'),
                C = 0;
              C < D;
              C++
            ) {
              var E = document.createElement('td')
              P.appendChild(E)
            }
            return (0, a.default)(S).call(S, y + 1, 0, P), v(x, S), h.default(x.parentNode)
          }
          function l(g, y) {
            for (
              var x = m(g),
                S = (0, r.default)(Array.prototype).apply(x.children),
                D = function (E) {
                  var T,
                    R = []
                  for (
                    (0, c.default)((T = (0, A.default)(S[E].children))).call(T, function (B) {
                      R.push(B)
                    });
                    S[E].children.length !== 0;

                  )
                    S[E].removeChild(S[E].children[0])
                  var N =
                    h.default(R[0]).getNodeName() !== 'TH'
                      ? document.createElement('td')
                      : document.createElement('th')
                  ;(0, a.default)(R).call(R, y + 1, 0, N)
                  for (var M = 0; M < R.length; M++) S[E].appendChild(R[M])
                },
                P = 0;
              P < S.length;
              P++
            )
              D(P)
            return v(x, S), h.default(x.parentNode)
          }
          function u(g, y) {
            var x = m(g),
              S = (0, r.default)(Array.prototype).apply(x.children)
            return (0, a.default)(S).call(S, y, 1), v(x, S), h.default(x.parentNode)
          }
          function s(g, y) {
            for (
              var x = m(g),
                S = (0, r.default)(Array.prototype).apply(x.children),
                D = function (E) {
                  var T,
                    R = []
                  for (
                    (0, c.default)((T = (0, A.default)(S[E].children))).call(T, function (M) {
                      R.push(M)
                    });
                    S[E].children.length !== 0;

                  )
                    S[E].removeChild(S[E].children[0])
                  ;(0, a.default)(R).call(R, y, 1)
                  for (var N = 0; N < R.length; N++) S[E].appendChild(R[N])
                },
                P = 0;
              P < S.length;
              P++
            )
              D(P)
            return v(x, S), h.default(x.parentNode)
          }
          function p(g, y, x) {
            for (
              var S = m(g),
                D = (0, r.default)(Array.prototype).apply(S.children),
                P = D[y].children,
                C = document.createElement('tr'),
                E = function (N) {
                  var M,
                    B = document.createElement(x),
                    F = P[N]
                  ;(0, c.default)((M = (0, A.default)(F.childNodes))).call(M, function (O) {
                    B.appendChild(O)
                  }),
                    C.appendChild(B)
                },
                T = 0;
              T < P.length;
              T++
            )
              E(T)
            return (0, a.default)(D).call(D, y, 1, C), v(S, D), h.default(S.parentNode)
          }
          function v(g, y) {
            for (; g.children.length !== 0; ) g.removeChild(g.children[0])
            for (var x = 0; x < y.length; x++) g.appendChild(y[x])
          }
          function m(g) {
            var y = g.elems[0].children[0]
            return (
              y.nodeName === 'COLGROUP' &&
                (y = g.elems[0].children[g.elems[0].children.length - 1]),
              y
            )
          }
          n.default = {
            ProcessingRow: f,
            ProcessingCol: l,
            DeleteRow: u,
            DeleteCol: s,
            setTheHeader: p
          }
        },
        function (o, n, t) {
          var e = t(396)
          o.exports = e
        },
        function (o, n, t) {
          t(50), t(397)
          var e = t(9)
          o.exports = e.Array.from
        },
        function (o, n, t) {
          var e = t(5),
            i = t(398),
            r = t(115),
            a = !r(function (c) {
              Array.from(c)
            })
          e({ target: 'Array', stat: !0, forced: a }, { from: i })
        },
        function (o, n, t) {
          var e = t(40),
            i = t(31),
            r = t(114),
            a = t(112),
            c = t(35),
            A = t(69),
            d = t(113)
          o.exports = function (f) {
            var l = i(f),
              u = typeof this == 'function' ? this : Array,
              s = arguments.length,
              p = s > 1 ? arguments[1] : void 0,
              v = p !== void 0,
              m = d(l),
              g = 0,
              y,
              x,
              S,
              D,
              P,
              C
            if (
              (v && (p = e(p, s > 2 ? arguments[2] : void 0, 2)),
              m != null && !(u == Array && a(m)))
            )
              for (D = m.call(l), P = D.next, x = new u(); !(S = P.call(D)).done; g++)
                (C = v ? r(D, p, [S.value, g], !0) : S.value), A(x, g, C)
            else
              for (y = c(l.length), x = new u(y); y > g; g++)
                (C = v ? p(l[g], g) : l[g]), A(x, g, C)
            return (x.length = g), x
          }
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(4)),
            a = e(t(138))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var c = t(2),
            A = c.__importDefault(t(3)),
            d = (function () {
              function h(f) {
                this.editor = f
              }
              return (
                (h.prototype.getRowNode = function (f) {
                  var l,
                    u = A.default(f).elems[0]
                  return (
                    u.parentNode &&
                      (u =
                        (l = A.default(u).parentUntil('TR', u)) === null || l === void 0
                          ? void 0
                          : l.elems[0]),
                    u
                  )
                }),
                (h.prototype.getCurrentRowIndex = function (f, l) {
                  var u,
                    s = 0,
                    p = f.children[0]
                  return (
                    p.nodeName === 'COLGROUP' && (p = f.children[f.children.length - 1]),
                    (0, r.default)((u = (0, a.default)(p.children))).call(u, function (v, m) {
                      v === l && (s = m)
                    }),
                    s
                  )
                }),
                (h.prototype.getCurrentColIndex = function (f) {
                  var l,
                    u,
                    s = 0,
                    p =
                      A.default(f).getNodeName() === 'TD' || A.default(f).getNodeName() === 'TH'
                        ? f
                        : (u = A.default(f).parentUntil('TD', f)) === null || u === void 0
                        ? void 0
                        : u.elems[0],
                    v = A.default(p).parent()
                  return (
                    (0, r.default)((l = (0, a.default)(v.elems[0].children))).call(
                      l,
                      function (m, g) {
                        m === p && (s = g)
                      }
                    ),
                    s
                  )
                }),
                (h.prototype.getTableHtml = function (f) {
                  var l =
                    '<table border="0" width="100%" cellpadding="0" cellspacing="0">' +
                    A.default(f).html() +
                    '</table>'
                  return l
                }),
                h
              )
            })()
          n.default = d
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 }),
            (n.bindEventKeyboardEvent = n.bindClickEvent = void 0)
          var r = t(2),
            a = r.__importDefault(t(3))
          function c(h) {
            if (!h.length) return !1
            var f = h.elems[0]
            return f.nodeName === 'P' && f.innerHTML === '<br>'
          }
          function A(h) {
            function f(l, u) {
              if (u.detail >= 3) {
                var s = window.getSelection()
                if (s) {
                  var p = s.focusNode,
                    v = s.anchorNode,
                    m = a.default(v == null ? void 0 : v.parentElement)
                  if (!l.isContain(a.default(p))) {
                    var g = m.elems[0].tagName === 'TD' ? m : m.parentUntilEditor('td', h)
                    if (g) {
                      var y = h.selection.getRange()
                      y == null || y.setEnd(g.elems[0], g.elems[0].childNodes.length),
                        h.selection.restoreSelection()
                    }
                  }
                }
              }
            }
            h.txt.eventHooks.tableClickEvents.push(f)
          }
          n.bindClickEvent = A
          function d(h) {
            var f = h.txt,
              l = h.selection,
              u = f.eventHooks.keydownEvents
            u.push(function (s) {
              h.selection.saveRange()
              var p = l.getSelectionContainerElem()
              if (p) {
                var v = p.getNodeTop(h),
                  m = v.length && v.prev().length ? v.prev() : null
                if (
                  m &&
                  m.getNodeName() === 'TABLE' &&
                  l.isSelectionEmpty() &&
                  l.getCursorPos() === 0 &&
                  s.keyCode === 8
                ) {
                  var g = v.next(),
                    y = !!g.length
                  y && c(v) && (v.remove(), h.selection.setRangeToElem(g.elems[0])),
                    s.preventDefault()
                }
              }
            })
          }
          n.bindEventKeyboardEvent = d
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(26))
          ;(0, i.default)(n, '__esModule', { value: !0 }), (n.formatCodeHtml = void 0)
          var a = t(2),
            c = a.__importDefault(t(38)),
            A = a.__importDefault(t(3)),
            d = t(6),
            h = a.__importDefault(t(402)),
            f = a.__importDefault(t(139)),
            l = a.__importDefault(t(33)),
            u = a.__importDefault(t(403))
          function s(v, m) {
            if (!m) return m
            return (m = y(m)), (m = g(m)), (m = d.replaceSpecialSymbol(m)), m
            function g(x) {
              var S = x.match(/<pre[\s|\S]+?\/pre>/g)
              return (
                S === null ||
                  (0, r.default)(S).call(S, function (D) {
                    x = x.replace(
                      D,
                      D.replace(
                        /<\/code><code>/g,
                        `
`
                      ).replace(/<br>/g, '')
                    )
                  }),
                x
              )
            }
            function y(x) {
              var S,
                D = x.match(/<span\sclass="hljs[\s|\S]+?\/span>/gm)
              if (!D || !D.length) return x
              for (
                var P = (0, r.default)((S = d.deepClone(D))).call(S, function (E) {
                    return (
                      (E = E.replace(/<span\sclass="hljs[^>]+>/, '')), E.replace(/<\/span>/, '')
                    )
                  }),
                  C = 0;
                C < D.length;
                C++
              )
                x = x.replace(D[C], P[C])
              return y(x)
            }
          }
          n.formatCodeHtml = s
          var p = (function (v) {
            a.__extends(m, v)
            function m(g) {
              var y = this,
                x = A.default(
                  '<div class="w-e-menu" data-title="\u4EE3\u7801"><i class="w-e-icon-terminal"></i></div>'
                )
              return (y = v.call(this, x, g) || this), u.default(g), y
            }
            return (
              (m.prototype.insertLineCode = function (g) {
                var y = this.editor,
                  x = A.default('<code>' + g + '</code>')
                y.cmd.do('insertElem', x),
                  y.selection.createRangeByElem(x, !1),
                  y.selection.restoreSelection()
              }),
              (m.prototype.clickHandler = function () {
                var g = this.editor,
                  y = g.selection.getSelectionText()
                this.isActive ||
                  (g.selection.isSelectionEmpty()
                    ? this.createPanel('', '')
                    : this.insertLineCode(y))
              }),
              (m.prototype.createPanel = function (g, y) {
                var x = h.default(this.editor, g, y),
                  S = new l.default(this, x)
                S.create()
              }),
              (m.prototype.tryChangeActive = function () {
                var g = this.editor
                f.default(g) ? this.active() : this.unActive()
              }),
              m
            )
          })(c.default)
          n.default = p
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(26))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = t(2),
            c = t(6),
            A = a.__importDefault(t(3)),
            d = a.__importDefault(t(139)),
            h = t(7)
          function f(l, u, s) {
            var p,
              v = c.getRandom('input-iframe'),
              m = c.getRandom('select'),
              g = c.getRandom('btn-ok')
            function y(P, C) {
              var E,
                T = d.default(l)
              T && x()
              var R =
                (E = l.selection.getSelectionStartElem()) === null || E === void 0
                  ? void 0
                  : E.elems[0].innerHTML
              R && l.cmd.do('insertHTML', h.EMPTY_P)
              var N = C.replace(/</g, '&lt;').replace(/>/g, '&gt;')
              l.highlight && (N = l.highlight.highlightAuto(N).value),
                l.cmd.do('insertHTML', '<pre><code class="' + P + '">' + N + '</code></pre>')
              var M = l.selection.getSelectionStartElem(),
                B = M == null ? void 0 : M.getNodeTop(l)
              ;(B == null ? void 0 : B.getNextSibling().elems.length) === 0 &&
                A.default(h.EMPTY_P).insertAfter(B)
            }
            function x() {
              if (!!d.default(l)) {
                var P = l.selection.getSelectionStartElem(),
                  C = P == null ? void 0 : P.getNodeTop(l)
                !C || (l.selection.createRangeByElem(C), l.selection.restoreSelection())
              }
            }
            var S = function (C) {
                return l.i18next.t(C)
              },
              D = {
                width: 500,
                height: 0,
                tabs: [
                  {
                    title: S('menus.panelMenus.code.\u63D2\u5165\u4EE3\u7801'),
                    tpl:
                      `<div>
                        <select name="" id="` +
                      m +
                      `">
                            ` +
                      (0, r.default)((p = l.config.languageType)).call(p, function (P) {
                        return (
                          '<option ' +
                          (s == P ? 'selected' : '') +
                          ' value ="' +
                          P +
                          '">' +
                          P +
                          '</option>'
                        )
                      }) +
                      `
                        </select>
                        <textarea id="` +
                      v +
                      '" type="text" class="wang-code-textarea" placeholder="" style="height: 160px">' +
                      u.replace(/&quot;/g, '"') +
                      `</textarea>
                        <div class="w-e-button-container">
                            <button type="button" id="` +
                      g +
                      '" class="right">' +
                      (d.default(l) ? S('\u4FEE\u6539') : S('\u63D2\u5165')) +
                      `</button>
                        </div>
                    </div>`,
                    events: [
                      {
                        selector: '#' + g,
                        type: 'click',
                        fn: function () {
                          var C = document.getElementById(v),
                            E = A.default('#' + m),
                            T = E.val(),
                            R = C.value
                          if (!!R) return d.default(l) ? !1 : (y(T, R), !0)
                        }
                      }
                    ]
                  }
                ]
              }
            return D
          }
          n.default = f
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(404)),
            c = r.__importDefault(t(405))
          function A(d) {
            a.default(d), c.default(d)
          }
          n.default = A
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 }), (n.createShowHideFn = void 0)
          var r = t(2),
            a = r.__importDefault(t(3)),
            c = r.__importDefault(t(39))
          function A(h) {
            var f
            function l(s) {
              var p = 'menus.panelMenus.code.',
                v = function (y, x) {
                  return x === void 0 && (x = p), h.i18next.t(x + y)
                },
                m = [
                  {
                    $elem: a.default('<span>' + v('\u5220\u9664\u4EE3\u7801') + '</span>'),
                    onClick: function (y, x) {
                      return x.remove(), !0
                    }
                  }
                ]
              ;(f = new c.default(h, s, m)), f.create()
            }
            function u() {
              f && (f.remove(), (f = null))
            }
            return { showCodeTooltip: l, hideCodeTooltip: u }
          }
          n.createShowHideFn = A
          function d(h) {
            var f = A(h),
              l = f.showCodeTooltip,
              u = f.hideCodeTooltip
            h.txt.eventHooks.codeClickEvents.push(l),
              h.txt.eventHooks.clickEvents.push(u),
              h.txt.eventHooks.toolbarClickEvents.push(u),
              h.txt.eventHooks.menuClickEvents.push(u),
              h.txt.eventHooks.textScrollEvents.push(u)
          }
          n.default = d
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = t(7),
            c = r.__importDefault(t(3))
          function A(d) {
            var h = d.$textElem,
              f = d.selection,
              l = d.txt,
              u = l.eventHooks.keydownEvents
            u.push(function (s) {
              var p
              if (s.keyCode === 40) {
                var v = f.getSelectionContainerElem(),
                  m = (p = h.children()) === null || p === void 0 ? void 0 : p.last()
                if (
                  (v == null ? void 0 : v.elems[0].tagName) === 'XMP' &&
                  (m == null ? void 0 : m.elems[0].tagName) === 'PRE'
                ) {
                  var g = c.default(a.EMPTY_P)
                  h.append(g)
                }
              }
            }),
              u.push(function (s) {
                d.selection.saveRange()
                var p = f.getSelectionContainerElem()
                if (p) {
                  var v = p.getNodeTop(d),
                    m = v == null ? void 0 : v.prev(),
                    g = v == null ? void 0 : v.getNextSibling()
                  if (
                    m.length &&
                    (m == null ? void 0 : m.getNodeName()) === 'PRE' &&
                    g.length === 0 &&
                    f.getCursorPos() === 0 &&
                    s.keyCode === 8
                  ) {
                    var y = c.default(a.EMPTY_P)
                    h.append(y)
                  }
                }
              })
          }
          n.default = A
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(23)),
            c = r.__importDefault(t(3)),
            A = r.__importDefault(t(407)),
            d = t(6),
            h = t(7),
            f = (function (l) {
              r.__extends(u, l)
              function u(s) {
                var p = this,
                  v = c.default(
                    '<div class="w-e-menu" data-title="\u5206\u5272\u7EBF"><i class="w-e-icon-split-line"></i></div>'
                  )
                return (p = l.call(this, v, s) || this), A.default(s), p
              }
              return (
                (u.prototype.clickHandler = function () {
                  var s = this.editor,
                    p = s.selection.getRange(),
                    v = s.selection.getSelectionContainerElem()
                  if (!!(v != null && v.length)) {
                    var m = c.default(v.elems[0]),
                      g = m.parentUntil('TABLE', v.elems[0]),
                      y = m.children()
                    m.getNodeName() !== 'CODE' &&
                      ((g && c.default(g.elems[0]).getNodeName() === 'TABLE') ||
                        (y &&
                          y.length !== 0 &&
                          c.default(y.elems[0]).getNodeName() === 'IMG' &&
                          !(p != null && p.collapsed)) ||
                        this.createSplitLine())
                  }
                }),
                (u.prototype.createSplitLine = function () {
                  var s = '<hr/>' + h.EMPTY_P
                  d.UA.isFirefox && (s = '<hr/><p></p>'), this.editor.cmd.do('insertHTML', s)
                }),
                (u.prototype.tryChangeActive = function () {}),
                u
              )
            })(a.default)
          n.default = f
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(408))
          function c(A) {
            a.default(A)
          }
          n.default = c
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(3)),
            c = r.__importDefault(t(39))
          function A(h) {
            var f
            function l(s) {
              var p = [
                {
                  $elem: a.default(
                    '<span>' + h.i18next.t('menus.panelMenus.\u5220\u9664') + '</span>'
                  ),
                  onClick: function (m, g) {
                    return (
                      m.selection.createRangeByElem(g),
                      m.selection.restoreSelection(),
                      m.cmd.do('delete'),
                      !0
                    )
                  }
                }
              ]
              ;(f = new c.default(h, s, p)), f.create()
            }
            function u() {
              f && (f.remove(), (f = null))
            }
            return { showSplitLineTooltip: l, hideSplitLineTooltip: u }
          }
          function d(h) {
            var f = A(h),
              l = f.showSplitLineTooltip,
              u = f.hideSplitLineTooltip
            h.txt.eventHooks.splitLineEvents.push(l),
              h.txt.eventHooks.clickEvents.push(u),
              h.txt.eventHooks.keyupEvents.push(u),
              h.txt.eventHooks.toolbarClickEvents.push(u),
              h.txt.eventHooks.menuClickEvents.push(u),
              h.txt.eventHooks.textScrollEvents.push(u)
          }
          n.default = d
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(4))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = t(2),
            c = a.__importDefault(t(3)),
            A = a.__importDefault(t(23)),
            d = t(98),
            h = a.__importDefault(t(415)),
            f = a.__importDefault(t(140)),
            l = (function (u) {
              a.__extends(s, u)
              function s(p) {
                var v = this,
                  m = c.default(`<div class="w-e-menu" data-title="\u5F85\u529E\u4E8B\u9879">
                    <i class="w-e-icon-checkbox-checked"></i>
                </div>`)
                return (v = u.call(this, m, p) || this), h.default(p), v
              }
              return (
                (s.prototype.clickHandler = function () {
                  var p = this.editor
                  d.isAllTodo(p) ? (this.cancelTodo(), this.tryChangeActive()) : this.setTodo()
                }),
                (s.prototype.tryChangeActive = function () {
                  d.isAllTodo(this.editor) ? this.active() : this.unActive()
                }),
                (s.prototype.setTodo = function () {
                  var p = this.editor,
                    v = p.selection.getSelectionRangeTopNodes()
                  ;(0, r.default)(v).call(v, function (m) {
                    var g,
                      y = m == null ? void 0 : m.getNodeName()
                    if (y === 'P') {
                      var x = f.default(m),
                        S = x.getTodo(),
                        D = (g = S.children()) === null || g === void 0 ? void 0 : g.getNode()
                      S.insertAfter(m), p.selection.moveCursor(D), m.remove()
                    }
                  }),
                    this.tryChangeActive()
                }),
                (s.prototype.cancelTodo = function () {
                  var p = this.editor,
                    v = p.selection.getSelectionRangeTopNodes()
                  ;(0, r.default)(v).call(v, function (m) {
                    var g,
                      y,
                      x,
                      S =
                        (y =
                          (g = m.childNodes()) === null || g === void 0
                            ? void 0
                            : g.childNodes()) === null || y === void 0
                          ? void 0
                          : y.clone(!0),
                      D = c.default('<p></p>')
                    D.append(S),
                      D.insertAfter(m),
                      (x = D.childNodes()) === null || x === void 0 || x.get(0).remove(),
                      p.selection.moveCursor(D.getNode()),
                      m.remove()
                  })
                }),
                s
              )
            })(A.default)
          n.default = l
        },
        function (o, n, t) {
          o.exports = t(411)
        },
        function (o, n, t) {
          var e = t(412)
          o.exports = e
        },
        function (o, n, t) {
          var e = t(413),
            i = Array.prototype
          o.exports = function (r) {
            var a = r.every
            return r === i || (r instanceof Array && a === i.every) ? e : a
          }
        },
        function (o, n, t) {
          t(414)
          var e = t(15)
          o.exports = e('Array').every
        },
        function (o, n, t) {
          var e = t(5),
            i = t(32).every,
            r = t(67),
            a = t(22),
            c = r('every'),
            A = a('every')
          e(
            { target: 'Array', proto: !0, forced: !c || !A },
            {
              every: function (h) {
                return i(this, h, arguments.length > 1 ? arguments[1] : void 0)
              }
            }
          )
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(4))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = t(2),
            c = a.__importDefault(t(3)),
            A = t(98),
            d = a.__importDefault(t(140)),
            h = t(98),
            f = t(7)
          function l(u) {
            function s(g) {
              var y, x
              if (A.isAllTodo(u)) {
                g.preventDefault()
                var S = u.selection,
                  D = S.getSelectionRangeTopNodes()[0],
                  P = (y = D.childNodes()) === null || y === void 0 ? void 0 : y.get(0),
                  C = (x = window.getSelection()) === null || x === void 0 ? void 0 : x.anchorNode,
                  E = S.getRange()
                if (!(E != null && E.collapsed)) {
                  var T = E == null ? void 0 : E.commonAncestorContainer.childNodes,
                    R = E == null ? void 0 : E.startContainer,
                    N = E == null ? void 0 : E.endContainer,
                    M = E == null ? void 0 : E.startOffset,
                    B = E == null ? void 0 : E.endOffset,
                    F = 0,
                    O = 0,
                    b = []
                  T == null ||
                    (0, r.default)(T).call(T, function (W, q) {
                      W.contains(R) && (F = q), W.contains(N) && (O = q)
                    }),
                    O - F > 1 &&
                      (T == null ||
                        (0, r.default)(T).call(T, function (W, q) {
                          q <= F || q >= O || b.push(W)
                        }),
                      (0, r.default)(b).call(b, function (W) {
                        W.remove()
                      })),
                    h.dealTextNode(R, M),
                    h.dealTextNode(N, B, !1),
                    u.selection.moveCursor(N, 0)
                }
                if (D.text() === '') {
                  var $ = c.default(f.EMPTY_P)
                  $.insertAfter(D), S.moveCursor($.getNode()), D.remove()
                  return
                }
                var H = S.getCursorPos(),
                  U = A.getCursorNextNode(P == null ? void 0 : P.getNode(), C, H),
                  K = d.default(c.default(U)),
                  w = K.getInputContainer(),
                  X = w.parent().getNode(),
                  J = K.getTodo(),
                  Q = w.getNode().nextSibling
                if (
                  ((P == null ? void 0 : P.text()) === '' &&
                    (P == null || P.append(c.default('<br>'))),
                  J.insertAfter(D),
                  !Q || (Q == null ? void 0 : Q.textContent) === '')
                ) {
                  if ((Q == null ? void 0 : Q.nodeName) !== 'BR') {
                    var V = c.default('<br>')
                    V.insertAfter(w)
                  }
                  S.moveCursor(X, 1)
                } else S.moveCursor(X)
              }
            }
            function p(g) {
              var y, x
              if (A.isAllTodo(u)) {
                var S = u.selection,
                  D = S.getSelectionRangeTopNodes()[0],
                  P = (y = D.childNodes()) === null || y === void 0 ? void 0 : y.getNode(),
                  C = c.default('<p></p>'),
                  E = C.getNode(),
                  T = (x = window.getSelection()) === null || x === void 0 ? void 0 : x.anchorNode,
                  R = S.getCursorPos(),
                  N = T.previousSibling
                if (D.text() === '') {
                  g.preventDefault()
                  var M = c.default(f.EMPTY_P)
                  M.insertAfter(D), D.remove(), S.moveCursor(M.getNode(), 0)
                  return
                }
                if (
                  (N == null ? void 0 : N.nodeName) === 'SPAN' &&
                  N.childNodes[0].nodeName === 'INPUT' &&
                  R === 0
                ) {
                  var B
                  g.preventDefault(),
                    P == null ||
                      (0, r.default)((B = P.childNodes)).call(B, function (F, O) {
                        O !== 0 && E.appendChild(F.cloneNode(!0))
                      }),
                    C.insertAfter(D),
                    D.remove()
                }
              }
            }
            function v() {
              var g = u.selection,
                y = g.getSelectionRangeTopNodes()[0]
              y &&
                h.isTodo(y) &&
                y.text() === '' &&
                (c.default(f.EMPTY_P).insertAfter(y), y.remove())
            }
            function m(g) {
              g &&
                g.target instanceof HTMLInputElement &&
                g.target.type === 'checkbox' &&
                (g.target.checked
                  ? g.target.setAttribute('checked', 'true')
                  : g.target.removeAttribute('checked'))
            }
            u.txt.eventHooks.enterDownEvents.push(s),
              u.txt.eventHooks.deleteUpEvents.push(v),
              u.txt.eventHooks.deleteDownEvents.push(p),
              u.txt.eventHooks.clickEvents.push(m)
          }
          n.default = l
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 }), (n.selectorValidator = void 0)
          var r = t(2),
            a = r.__importDefault(t(3)),
            c = t(6),
            A = t(7),
            d = r.__importDefault(t(130)),
            h = {
              border: '1px solid #c9d8db',
              toolbarBgColor: '#FFF',
              toolbarBottomBorder: '1px solid #EEE'
            }
          function f(u) {
            var s = u.toolbarSelector,
              p = a.default(s),
              v = u.textSelector,
              m = u.config,
              g = m.height,
              y = u.i18next,
              x = a.default('<div></div>'),
              S = a.default('<div></div>'),
              D,
              P,
              C = null
            v == null
              ? ((P = p.children()),
                p.append(x).append(S),
                x
                  .css('background-color', h.toolbarBgColor)
                  .css('border', h.border)
                  .css('border-bottom', h.toolbarBottomBorder),
                S.css('border', h.border)
                  .css('border-top', 'none')
                  .css('height', g + 'px'))
              : (p.append(x),
                (C = a.default(v).children()),
                a.default(v).append(S),
                (P = S.children())),
              (D = a.default('<div></div>')),
              D.attr('contenteditable', 'true').css('width', '100%').css('height', '100%')
            var E,
              T = u.config.placeholder
            T !== d.default.placeholder
              ? (E = a.default('<div>' + T + '</div>'))
              : (E = a.default('<div>' + y.t(T) + '</div>')),
              E.addClass('placeholder'),
              P && P.length ? (D.append(P), E.hide()) : D.append(a.default(A.EMPTY_P)),
              C && C.length && (D.append(C), E.hide()),
              S.append(D),
              S.append(E),
              x.addClass('w-e-toolbar').css('z-index', u.zIndex.get('toolbar')),
              S.addClass('w-e-text-container'),
              S.css('z-index', u.zIndex.get()),
              D.addClass('w-e-text')
            var R = c.getRandom('toolbar-elem')
            x.attr('id', R)
            var N = c.getRandom('text-elem')
            D.attr('id', N)
            var M = S.getBoundingClientRect().height,
              B = D.getBoundingClientRect().height
            M !== B && D.css('min-height', M + 'px'),
              (u.$toolbarElem = x),
              (u.$textContainerElem = S),
              (u.$textElem = D),
              (u.toolbarElemId = R),
              (u.textElemId = N)
          }
          n.default = f
          function l(u) {
            var s = 'data-we-id',
              p = /^wangEditor-\d+$/,
              v = u.textSelector,
              m = u.toolbarSelector,
              g = { bar: a.default('<div></div>'), text: a.default('<div></div>') }
            if (m == null)
              throw new Error(
                '\u9519\u8BEF\uFF1A\u521D\u59CB\u5316\u7F16\u8F91\u5668\u65F6\u5019\u672A\u4F20\u5165\u4EFB\u4F55\u53C2\u6570\uFF0C\u8BF7\u67E5\u9605\u6587\u6863'
              )
            if (((g.bar = a.default(m)), !g.bar.elems.length))
              throw new Error('\u65E0\u6548\u7684\u8282\u70B9\u9009\u62E9\u5668\uFF1A' + m)
            if (p.test(g.bar.attr(s)))
              throw new Error(
                '\u521D\u59CB\u5316\u8282\u70B9\u5DF2\u5B58\u5728\u7F16\u8F91\u5668\u5B9E\u4F8B\uFF0C\u65E0\u6CD5\u91CD\u590D\u521B\u5EFA\u7F16\u8F91\u5668'
              )
            if (v) {
              if (((g.text = a.default(v)), !g.text.elems.length))
                throw new Error('\u65E0\u6548\u7684\u8282\u70B9\u9009\u62E9\u5668\uFF1A' + v)
              if (p.test(g.text.attr(s)))
                throw new Error(
                  '\u521D\u59CB\u5316\u8282\u70B9\u5DF2\u5B58\u5728\u7F16\u8F91\u5668\u5B9E\u4F8B\uFF0C\u65E0\u6CD5\u91CD\u590D\u521B\u5EFA\u7F16\u8F91\u5668'
                )
            }
            g.bar.attr(s, u.id),
              g.text.attr(s, u.id),
              u.beforeDestroy(function () {
                g.bar.removeAttr(s), g.text.removeAttr(s)
              })
          }
          n.selectorValidator = l
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(3)),
            c = t(7)
          function A(d, h) {
            var f = d.$textElem,
              l = f.children()
            if (!l || !l.length) {
              f.append(a.default(c.EMPTY_P)), A(d)
              return
            }
            var u = l.last()
            if (h) {
              var s = u.html().toLowerCase(),
                p = u.getNodeName()
              if ((s !== '<br>' && s !== '<br/>') || p !== 'P') {
                f.append(a.default(c.EMPTY_P)), A(d)
                return
              }
            }
            d.selection.createRangeByElem(u, !1, !0),
              d.config.focus
                ? d.selection.restoreSelection()
                : d.selection.clearWindowSelectionRange()
          }
          n.default = A
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(4))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = t(2),
            c = a.__importDefault(t(3))
          function A(s) {
            d(s), h(s), f(s)
          }
          function d(s) {
            s.txt.eventHooks.changeEvents.push(function () {
              var p = s.config.onchange
              if (p) {
                var v = s.txt.html() || ''
                ;(s.isFocus = !0), p(v)
              }
              s.txt.togglePlaceholder()
            })
          }
          function h(s) {
            s.isFocus = !1
            function p(v) {
              var m = v.target,
                g = c.default(m),
                y = s.$textElem,
                x = s.$toolbarElem,
                S = y.isContain(g),
                D = x.isContain(g),
                P = x.elems[0] == v.target
              if (S) s.isFocus || u(s), (s.isFocus = !0)
              else {
                if ((D && !P) || !s.isFocus) return
                l(s), (s.isFocus = !1)
              }
            }
            document.activeElement === s.$textElem.elems[0] &&
              s.config.focus &&
              (u(s), (s.isFocus = !0)),
              c.default(document).on('click', p),
              s.beforeDestroy(function () {
                c.default(document).off('click', p)
              })
          }
          function f(s) {
            s.$textElem
              .on('compositionstart', function () {
                ;(s.isComposing = !0), s.txt.togglePlaceholder()
              })
              .on('compositionend', function () {
                ;(s.isComposing = !1), s.txt.togglePlaceholder()
              })
          }
          function l(s) {
            var p,
              v = s.config,
              m = v.onblur,
              g = s.txt.html() || ''
            ;(0, r.default)((p = s.txt.eventHooks.onBlurEvents)).call(p, function (y) {
              return y()
            }),
              m(g)
          }
          function u(s) {
            var p = s.config,
              v = p.onfocus,
              m = s.txt.html() || ''
            v(m)
          }
          n.default = A
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          function r(a) {
            var c = a.config,
              A = c.lang,
              d = c.languages
            if (a.i18next != null) {
              try {
                a.i18next.init({ ns: 'wangEditor', lng: A, defaultNS: 'wangEditor', resources: d })
              } catch (h) {
                throw new Error('i18next:' + h)
              }
              return
            }
            a.i18next = {
              t: function (f) {
                var l = f.split('.')
                return l[l.length - 1]
              }
            }
          }
          n.default = r
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(29))
          ;(0, i.default)(n, '__esModule', { value: !0 }),
            (n.setUnFullScreen = n.setFullScreen = void 0)
          var a = t(2),
            c = a.__importDefault(t(3))
          t(421)
          var A = 'w-e-icon-fullscreen',
            d = 'w-e-icon-fullscreen_exit',
            h = 'w-e-full-screen-editor'
          ;(n.setFullScreen = function (l) {
            var u = c.default(l.toolbarSelector),
              s = l.$textContainerElem,
              p = l.$toolbarElem,
              v = (0, r.default)(p).call(p, 'i.' + A),
              m = l.config
            v.removeClass(A), v.addClass(d), u.addClass(h), u.css('z-index', m.zIndexFullScreen)
            var g = p.getBoundingClientRect()
            s.css('height', 'calc(100% - ' + g.height + 'px)')
          }),
            (n.setUnFullScreen = function (l) {
              var u = c.default(l.toolbarSelector),
                s = l.$textContainerElem,
                p = l.$toolbarElem,
                v = (0, r.default)(p).call(p, 'i.' + d),
                m = l.config
              v.removeClass(d),
                v.addClass(A),
                u.removeClass(h),
                u.css('z-index', 'auto'),
                s.css('height', m.height + 'px')
            })
          var f = function (u) {
            if (!u.textSelector && !!u.config.showFullScreen) {
              var s = u.$toolbarElem,
                p = c.default(
                  `<div class="w-e-menu" data-title="\u5168\u5C4F">
            <i class="` +
                    A +
                    `"></i>
        </div>`
                )
              p.on('click', function (v) {
                var m,
                  g = (0, r.default)((m = c.default(v.currentTarget))).call(m, 'i')
                g.hasClass(A)
                  ? (p.attr('data-title', '\u53D6\u6D88\u5168\u5C4F'), n.setFullScreen(u))
                  : (p.attr('data-title', '\u5168\u5C4F'), n.setUnFullScreen(u))
              }),
                s.append(p)
            }
          }
          n.default = f
        },
        function (o, n, t) {
          var e = t(20),
            i = t(422)
          ;(i = i.__esModule ? i.default : i), typeof i == 'string' && (i = [[o.i, i, '']])
          var r = {}
          ;(r.insert = 'head'), (r.singleton = !1), e(i, r), (o.exports = i.locals || {})
        },
        function (o, n, t) {
          var e = t(21)
          ;(n = e(!1)),
            n.push([
              o.i,
              `.w-e-full-screen-editor {
  position: fixed;
  width: 100%!important;
  height: 100%!important;
  left: 0;
  top: 0;
}
`,
              ''
            ]),
            (o.exports = n)
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(29))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = function (A, d) {
            var h,
              f = A.isEnable
                ? A.$textElem
                : (0, r.default)((h = A.$textContainerElem)).call(h, '.w-e-content-mantle'),
              l = (0, r.default)(f).call(f, "[id='" + d + "']"),
              u = l.getOffsetData().top
            f.scrollTop(u)
          }
          n.default = a
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(129)),
            c = { menu: 2, panel: 2, toolbar: 1, tooltip: 1, textContainer: 1 },
            A = (function () {
              function d() {
                ;(this.tier = c), (this.baseZIndex = a.default.zIndex)
              }
              return (
                (d.prototype.get = function (h) {
                  return h && this.tier[h] ? this.baseZIndex + this.tier[h] : this.baseZIndex
                }),
                (d.prototype.init = function (h) {
                  this.baseZIndex == a.default.zIndex && (this.baseZIndex = h.config.zIndex)
                }),
                d
              )
            })()
          n.default = A
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(70)),
            a = e(t(4))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var c = t(2),
            A = c.__importDefault(t(426)),
            d = t(6),
            h = t(7)
          function f(u, s) {
            return (0, r.default)(u).call(u, function (p) {
              var v = p.type,
                m = p.target,
                g = p.attributeName
              return v != 'attributes' || (v == 'attributes' && (g == 'contenteditable' || m != s))
            })
          }
          var l = (function (u) {
            c.__extends(s, u)
            function s(p) {
              var v =
                u.call(this, function (m, g) {
                  var y
                  if (((m = f(m, g.target)), (y = v.data).push.apply(y, m), p.isCompatibleMode))
                    v.asyncSave()
                  else if (!p.isComposing) return v.asyncSave()
                }) || this
              return (v.editor = p), (v.data = []), (v.asyncSave = h.EMPTY_FN), v
            }
            return (
              (s.prototype.save = function () {
                this.data.length &&
                  (this.editor.history.save(this.data), (this.data.length = 0), this.emit())
              }),
              (s.prototype.emit = function () {
                var p
                ;(0, a.default)((p = this.editor.txt.eventHooks.changeEvents)).call(
                  p,
                  function (v) {
                    return v()
                  }
                )
              }),
              (s.prototype.observe = function () {
                var p = this
                u.prototype.observe.call(this, this.editor.$textElem.elems[0])
                var v = this.editor.config.onchangeTimeout
                ;(this.asyncSave = d.debounce(function () {
                  p.save()
                }, v)),
                  this.editor.isCompatibleMode ||
                    this.editor.$textElem.on('compositionend', function () {
                      p.asyncSave()
                    })
              }),
              s
            )
          })(A.default)
          n.default = l
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = (function () {
            function a(c, A) {
              var d = this
              ;(this.options = {
                subtree: !0,
                childList: !0,
                attributes: !0,
                attributeOldValue: !0,
                characterData: !0,
                characterDataOldValue: !0
              }),
                (this.callback = function (h) {
                  c(h, d)
                }),
                (this.observer = new MutationObserver(this.callback)),
                A && (this.options = A)
            }
            return (
              (0, i.default)(a.prototype, 'target', {
                get: function () {
                  return this.node
                },
                enumerable: !1,
                configurable: !0
              }),
              (a.prototype.observe = function (c) {
                this.node instanceof Node || ((this.node = c), this.connect())
              }),
              (a.prototype.connect = function () {
                if (this.node) return this.observer.observe(this.node, this.options), this
                throw new Error(
                  '\u8FD8\u672A\u521D\u59CB\u5316\u7ED1\u5B9A\uFF0C\u8BF7\u60A8\u5148\u7ED1\u5B9A\u6709\u6548\u7684 Node \u8282\u70B9'
                )
              }),
              (a.prototype.disconnect = function () {
                var c = this.observer.takeRecords()
                c.length && this.callback(c), this.observer.disconnect()
              }),
              a
            )
          })()
          n.default = r
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(428)),
            c = r.__importDefault(t(435)),
            A = r.__importDefault(t(436)),
            d = (function () {
              function h(f) {
                ;(this.editor = f),
                  (this.content = new a.default(f)),
                  (this.scroll = new c.default(f)),
                  (this.range = new A.default(f))
              }
              return (
                (0, i.default)(h.prototype, 'size', {
                  get: function () {
                    return this.scroll.size
                  },
                  enumerable: !1,
                  configurable: !0
                }),
                (h.prototype.observe = function () {
                  this.content.observe(),
                    this.scroll.observe(),
                    !this.editor.isCompatibleMode && this.range.observe()
                }),
                (h.prototype.save = function (f) {
                  f.length &&
                    (this.content.save(f),
                    this.scroll.save(),
                    !this.editor.isCompatibleMode && this.range.save())
                }),
                (h.prototype.revoke = function () {
                  this.editor.change.disconnect()
                  var f = this.content.revoke()
                  f &&
                    (this.scroll.revoke(),
                    this.editor.isCompatibleMode ||
                      (this.range.revoke(), this.editor.$textElem.focus())),
                    this.editor.change.connect(),
                    f && this.editor.change.emit()
                }),
                (h.prototype.restore = function () {
                  this.editor.change.disconnect()
                  var f = this.content.restore()
                  f &&
                    (this.scroll.restore(),
                    this.editor.isCompatibleMode ||
                      (this.range.restore(), this.editor.$textElem.focus())),
                    this.editor.change.connect(),
                    f && this.editor.change.emit()
                }),
                h
              )
            })()
          n.default = d
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(429)),
            c = r.__importDefault(t(433)),
            A = (function () {
              function d(h) {
                this.editor = h
              }
              return (
                (d.prototype.observe = function () {
                  this.editor.isCompatibleMode
                    ? (this.cache = new c.default(this.editor))
                    : (this.cache = new a.default(this.editor)),
                    this.cache.observe()
                }),
                (d.prototype.save = function (h) {
                  this.editor.isCompatibleMode ? this.cache.save() : this.cache.compile(h)
                }),
                (d.prototype.revoke = function () {
                  var h
                  return (h = this.cache) === null || h === void 0 ? void 0 : h.revoke()
                }),
                (d.prototype.restore = function () {
                  var h
                  return (h = this.cache) === null || h === void 0 ? void 0 : h.restore()
                }),
                d
              )
            })()
          n.default = A
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(99)),
            c = r.__importDefault(t(431)),
            A = t(432),
            d = (function (h) {
              r.__extends(f, h)
              function f(l) {
                var u = h.call(this, l.config.historyMaxSize) || this
                return (u.editor = l), u
              }
              return (
                (f.prototype.observe = function () {
                  this.resetMaxSize(this.editor.config.historyMaxSize)
                }),
                (f.prototype.compile = function (l) {
                  return this.save(c.default(l)), this
                }),
                (f.prototype.revoke = function () {
                  return h.prototype.revoke.call(this, function (l) {
                    A.revoke(l)
                  })
                }),
                (f.prototype.restore = function () {
                  return h.prototype.restore.call(this, function (l) {
                    A.restore(l)
                  })
                }),
                f
              )
            })(a.default)
          n.default = d
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 }), (n.CeilStack = void 0)
          var r = (function () {
            function a(c) {
              c === void 0 && (c = 0),
                (this.data = []),
                (this.max = 0),
                (this.reset = !1),
                (c = Math.abs(c)),
                c && (this.max = c)
            }
            return (
              (a.prototype.resetMax = function (c) {
                ;(c = Math.abs(c)), !this.reset && !isNaN(c) && ((this.max = c), (this.reset = !0))
              }),
              (0, i.default)(a.prototype, 'size', {
                get: function () {
                  return this.data.length
                },
                enumerable: !1,
                configurable: !0
              }),
              (a.prototype.instack = function (c) {
                return (
                  this.data.unshift(c),
                  this.max && this.size > this.max && (this.data.length = this.max),
                  this
                )
              }),
              (a.prototype.outstack = function () {
                return this.data.shift()
              }),
              (a.prototype.clear = function () {
                return (this.data.length = 0), this
              }),
              a
            )
          })()
          n.CeilStack = r
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(4)),
            a = e(t(27))
          ;(0, i.default)(n, '__esModule', { value: !0 }),
            (n.compliePosition = n.complieNodes = n.compileValue = n.compileType = void 0)
          var c = t(6)
          function A(p) {
            switch (p) {
              case 'childList':
                return 'node'
              case 'attributes':
                return 'attr'
              default:
                return 'text'
            }
          }
          n.compileType = A
          function d(p) {
            switch (p.type) {
              case 'attributes':
                return p.target.getAttribute(p.attributeName) || ''
              case 'characterData':
                return p.target.textContent
              default:
                return ''
            }
          }
          n.compileValue = d
          function h(p) {
            var v = {}
            return (
              p.addedNodes.length && (v.add = c.toArray(p.addedNodes)),
              p.removedNodes.length && (v.remove = c.toArray(p.removedNodes)),
              v
            )
          }
          n.complieNodes = h
          function f(p) {
            var v
            return (
              p.previousSibling
                ? (v = { type: 'before', target: p.previousSibling })
                : p.nextSibling
                ? (v = { type: 'after', target: p.nextSibling })
                : (v = { type: 'parent', target: p.target }),
              v
            )
          }
          n.compliePosition = f
          var l = ['UL', 'OL', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6']
          function u(p) {
            var v = [],
              m = !1,
              g = []
            return (
              (0, r.default)(p).call(p, function (y, x) {
                var S = {
                  type: A(y.type),
                  target: y.target,
                  attr: y.attributeName || '',
                  value: d(y) || '',
                  oldValue: y.oldValue || '',
                  nodes: h(y),
                  position: f(y)
                }
                if ((v.push(S), !!c.UA.isFirefox)) {
                  if (m && y.addedNodes.length && y.addedNodes[0].nodeType == 1) {
                    var D = y.addedNodes[0],
                      P = {
                        type: 'node',
                        target: D,
                        attr: '',
                        value: '',
                        oldValue: '',
                        nodes: { add: [m] },
                        position: { type: 'parent', target: D }
                      }
                    ;(0, a.default)(l).call(l, D.nodeName) != -1
                      ? ((P.nodes.add = c.toArray(D.childNodes)), v.push(P))
                      : m.nodeType == 3
                      ? (s(D, g) && (P.nodes.add = c.toArray(D.childNodes)), v.push(P))
                      : (0, a.default)(l).call(l, y.target.nodeName) == -1 &&
                        s(D, g) &&
                        ((P.nodes.add = c.toArray(D.childNodes)), v.push(P))
                  }
                  S.type == 'node' && y.removedNodes.length == 1
                    ? ((m = y.removedNodes[0]), g.push(m))
                    : ((m = !1), (g.length = 0))
                }
              }),
              v
            )
          }
          n.default = u
          function s(p, v) {
            for (var m = 0, g = v.length - 1; g > 0 && p.contains(v[g]); g--) m++
            return m
          }
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(4)),
            a = e(t(94))
          ;(0, i.default)(n, '__esModule', { value: !0 }), (n.restore = n.revoke = void 0)
          function c(g, y) {
            var x = g.position.target
            switch (g.position.type) {
              case 'before':
                x.nextSibling
                  ? ((x = x.nextSibling),
                    (0, r.default)(y).call(y, function (S) {
                      g.target.insertBefore(S, x)
                    }))
                  : (0, r.default)(y).call(y, function (S) {
                      g.target.appendChild(S)
                    })
                break
              case 'after':
                ;(0, r.default)(y).call(y, function (S) {
                  g.target.insertBefore(S, x)
                })
                break
              default:
                ;(0, r.default)(y).call(y, function (S) {
                  x.appendChild(S)
                })
                break
            }
          }
          function A(g) {
            for (var y = 0, x = (0, a.default)(g.nodes); y < x.length; y++) {
              var S = x[y],
                D = S[0],
                P = S[1]
              switch (D) {
                case 'add':
                  ;(0, r.default)(P).call(P, function (C) {
                    g.target.removeChild(C)
                  })
                  break
                default: {
                  c(g, P)
                  break
                }
              }
            }
          }
          function d(g) {
            var y = g.target
            g.oldValue == null ? y.removeAttribute(g.attr) : y.setAttribute(g.attr, g.oldValue)
          }
          function h(g) {
            g.target.textContent = g.oldValue
          }
          var f = { node: A, text: h, attr: d }
          function l(g) {
            for (var y = g.length - 1; y > -1; y--) {
              var x = g[y]
              f[x.type](x)
            }
          }
          n.revoke = l
          function u(g) {
            for (var y = 0, x = (0, a.default)(g.nodes); y < x.length; y++) {
              var S = x[y],
                D = S[0],
                P = S[1]
              switch (D) {
                case 'add': {
                  c(g, P)
                  break
                }
                default: {
                  ;(0, r.default)(P).call(P, function (C) {
                    C.parentNode.removeChild(C)
                  })
                  break
                }
              }
            }
          }
          function s(g) {
            g.target.textContent = g.value
          }
          function p(g) {
            g.target.setAttribute(g.attr, g.value)
          }
          var v = { node: u, text: s, attr: p }
          function m(g) {
            for (var y = 0, x = g; y < x.length; y++) {
              var S = x[y]
              v[S.type](S)
            }
          }
          n.restore = m
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(434),
            a = (function () {
              function c(A) {
                ;(this.editor = A), (this.data = new r.TailChain())
              }
              return (
                (c.prototype.observe = function () {
                  this.data.resetMax(this.editor.config.historyMaxSize),
                    this.data.insertLast(this.editor.$textElem.html())
                }),
                (c.prototype.save = function () {
                  return this.data.insertLast(this.editor.$textElem.html()), this
                }),
                (c.prototype.revoke = function () {
                  var A = this.data.prev()
                  return A ? (this.editor.$textElem.html(A), !0) : !1
                }),
                (c.prototype.restore = function () {
                  var A = this.data.next()
                  return A ? (this.editor.$textElem.html(A), !0) : !1
                }),
                c
              )
            })()
          n.default = a
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(91))
          ;(0, i.default)(n, '__esModule', { value: !0 }), (n.TailChain = void 0)
          var a = (function () {
            function c() {
              ;(this.data = []), (this.max = 0), (this.point = 0), (this.isRe = !1)
            }
            return (
              (c.prototype.resetMax = function (A) {
                ;(A = Math.abs(A)), A && (this.max = A)
              }),
              (0, i.default)(c.prototype, 'size', {
                get: function () {
                  return this.data.length
                },
                enumerable: !1,
                configurable: !0
              }),
              (c.prototype.insertLast = function (A) {
                if (this.isRe) {
                  var d
                  ;(0, r.default)((d = this.data)).call(d, this.point + 1), (this.isRe = !1)
                }
                for (this.data.push(A); this.max && this.size > this.max; ) this.data.shift()
                return (this.point = this.size - 1), this
              }),
              (c.prototype.current = function () {
                return this.data[this.point]
              }),
              (c.prototype.prev = function () {
                if ((!this.isRe && (this.isRe = !0), this.point--, this.point < 0)) {
                  this.point = 0
                  return
                }
                return this.current()
              }),
              (c.prototype.next = function () {
                if ((!this.isRe && (this.isRe = !0), this.point++, this.point >= this.size)) {
                  this.point = this.size - 1
                  return
                }
                return this.current()
              }),
              c
            )
          })()
          n.TailChain = a
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(99)),
            c = (function (A) {
              r.__extends(d, A)
              function d(h) {
                var f = A.call(this, h.config.historyMaxSize) || this
                return (f.editor = h), (f.last = 0), (f.target = h.$textElem.elems[0]), f
              }
              return (
                (d.prototype.observe = function () {
                  var h = this
                  ;(this.target = this.editor.$textElem.elems[0]),
                    this.editor.$textElem.on('scroll', function () {
                      h.last = h.target.scrollTop
                    }),
                    this.resetMaxSize(this.editor.config.historyMaxSize)
                }),
                (d.prototype.save = function () {
                  return A.prototype.save.call(this, [this.last, this.target.scrollTop]), this
                }),
                (d.prototype.revoke = function () {
                  var h = this
                  return A.prototype.revoke.call(this, function (f) {
                    h.target.scrollTop = f[0]
                  })
                }),
                (d.prototype.restore = function () {
                  var h = this
                  return A.prototype.restore.call(this, function (f) {
                    h.target.scrollTop = f[1]
                  })
                }),
                d
              )
            })(a.default)
          n.default = c
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = t(2),
            a = r.__importDefault(t(99)),
            c = r.__importDefault(t(3)),
            A = t(6)
          function d(f) {
            return {
              start: [f.startContainer, f.startOffset],
              end: [f.endContainer, f.endOffset],
              root: f.commonAncestorContainer,
              collapsed: f.collapsed
            }
          }
          var h = (function (f) {
            r.__extends(l, f)
            function l(u) {
              var s = f.call(this, u.config.historyMaxSize) || this
              return (
                (s.editor = u),
                (s.lastRange = d(document.createRange())),
                (s.root = u.$textElem.elems[0]),
                (s.updateLastRange = A.debounce(function () {
                  s.lastRange = d(s.rangeHandle)
                }, u.config.onchangeTimeout)),
                s
              )
            }
            return (
              (0, i.default)(l.prototype, 'rangeHandle', {
                get: function () {
                  var s = document.getSelection()
                  return s && s.rangeCount ? s.getRangeAt(0) : document.createRange()
                },
                enumerable: !1,
                configurable: !0
              }),
              (l.prototype.observe = function () {
                var u = this
                ;(this.root = this.editor.$textElem.elems[0]),
                  this.resetMaxSize(this.editor.config.historyMaxSize)
                function s() {
                  var v = u.rangeHandle
                  ;(u.root === v.commonAncestorContainer ||
                    u.root.contains(v.commonAncestorContainer)) &&
                    (u.editor.isComposing || u.updateLastRange())
                }
                function p(v) {
                  ;(v.key == 'Backspace' || v.key == 'Delete') && u.updateLastRange()
                }
                c.default(document).on('selectionchange', s),
                  this.editor.beforeDestroy(function () {
                    c.default(document).off('selectionchange', s)
                  }),
                  u.editor.$textElem.on('keydown', p)
              }),
              (l.prototype.save = function () {
                var u = d(this.rangeHandle)
                return f.prototype.save.call(this, [this.lastRange, u]), (this.lastRange = u), this
              }),
              (l.prototype.set = function (u) {
                try {
                  if (u) {
                    var s = this.rangeHandle
                    return (
                      s.setStart.apply(s, u.start),
                      s.setEnd.apply(s, u.end),
                      this.editor.menus.changeActive(),
                      !0
                    )
                  }
                } catch {
                  return !1
                }
                return !1
              }),
              (l.prototype.revoke = function () {
                var u = this
                return f.prototype.revoke.call(this, function (s) {
                  u.set(s[0])
                })
              }),
              (l.prototype.restore = function () {
                var u = this
                return f.prototype.restore.call(this, function (s) {
                  u.set(s[1])
                })
              }),
              l
            )
          })(a.default)
          n.default = h
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(29))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var a = t(2),
            c = a.__importDefault(t(3))
          t(438)
          function A(d) {
            var h = !1,
              f,
              l
            d.txt.eventHooks.changeEvents.push(function () {
              h && (0, r.default)(f).call(f, '.w-e-content-preview').html(d.$textElem.html())
            })
            function u() {
              if (!h) {
                d.$textElem.hide()
                var p = d.zIndex.get('textContainer'),
                  v = d.txt.html()
                ;(f = c.default(
                  '<div class="w-e-content-mantle" style="z-index:' +
                    p +
                    `">
                <div class="w-e-content-preview w-e-text">` +
                    v +
                    `</div>
            </div>`
                )),
                  d.$textContainerElem.append(f)
                var m = d.zIndex.get('menu')
                ;(l = c.default('<div class="w-e-menue-mantle" style="z-index:' + m + '"></div>')),
                  d.$toolbarElem.append(l),
                  (h = !0),
                  (d.isEnable = !1)
              }
            }
            function s() {
              !h || (f.remove(), l.remove(), d.$textElem.show(), (h = !1), (d.isEnable = !0))
            }
            return { disable: u, enable: s }
          }
          n.default = A
        },
        function (o, n, t) {
          var e = t(20),
            i = t(439)
          ;(i = i.__esModule ? i.default : i), typeof i == 'string' && (i = [[o.i, i, '']])
          var r = {}
          ;(r.insert = 'head'), (r.singleton = !1), e(i, r), (o.exports = i.locals || {})
        },
        function (o, n, t) {
          var e = t(21)
          ;(n = e(!1)),
            n.push([
              o.i,
              `.w-e-content-mantle {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.w-e-content-mantle .w-e-content-preview {
  width: 100%;
  min-height: 100%;
  padding: 0 10px;
  line-height: 1.5;
}
.w-e-content-mantle .w-e-content-preview img {
  cursor: default;
}
.w-e-content-mantle .w-e-content-preview img:hover {
  box-shadow: none;
}
.w-e-menue-mantle {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
`,
              ''
            ]),
            (o.exports = n)
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
          var r = (function () {
            function a(c) {
              var A = this
              this.editor = c
              var d = function () {
                var f = document.activeElement
                f === c.$textElem.elems[0] && A.emit()
              }
              window.document.addEventListener('selectionchange', d),
                this.editor.beforeDestroy(function () {
                  window.document.removeEventListener('selectionchange', d)
                })
            }
            return (
              (a.prototype.emit = function () {
                var c,
                  A = this.editor.config.onSelectionChange
                if (A) {
                  var d = this.editor.selection
                  d.saveRange(),
                    d.isSelectionEmpty() ||
                      A({
                        text: d.getSelectionText(),
                        html:
                          (c = d.getSelectionContainerElem()) === null || c === void 0
                            ? void 0
                            : c.elems[0].innerHTML,
                        selection: d
                      })
                }
              }),
              a
            )
          })()
          n.default = r
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1)),
            r = e(t(128)),
            a = e(t(94)),
            c = e(t(4))
          ;(0, i.default)(n, '__esModule', { value: !0 }), (n.registerPlugin = void 0)
          var A = t(2),
            d = A.__importDefault(t(87)),
            h = t(6)
          function f(u, s, p) {
            if (!u) throw new TypeError('name is not define')
            if (!s) throw new TypeError('options is not define')
            if (!s.intention) throw new TypeError('options.intention is not define')
            if (s.intention && typeof s.intention != 'function')
              throw new TypeError('options.intention is not function')
            p[u] &&
              console.warn('plugin ' + u + ' \u5DF2\u5B58\u5728\uFF0C\u5DF2\u8986\u76D6\u3002'),
              (p[u] = s)
          }
          n.registerPlugin = f
          function l(u) {
            var s = (0, r.default)(
                {},
                h.deepClone(d.default.globalPluginsFunctionList),
                h.deepClone(u.pluginsFunctionList)
              ),
              p = (0, a.default)(s)
            ;(0, c.default)(p).call(p, function (v) {
              var m = v[0],
                g = v[1]
              console.info('plugin ' + m + ' initializing')
              var y = g.intention,
                x = g.config
              y(u, x), console.info('plugin ' + m + ' initialization complete')
            })
          }
          n.default = l
        },
        function (o, n, t) {
          var e = t(0),
            i = e(t(1))
          ;(0, i.default)(n, '__esModule', { value: !0 })
        }
      ]).default
    })
  })(fn)
  const Yf = cn(fn.exports),
    Vf = { key: 1, id: 'editor' },
    zf = j.defineComponent({
      __name: 'index',
      props: { options: { type: Array, required: !0 }, httpRequest: { type: Function } },
      emits: [
        'on-preview',
        'on-remove',
        'on-success',
        'on-error',
        'on-progress',
        'on-change',
        'before-upload',
        'before-remove',
        'on-exceed'
      ],
      setup(I, { expose: L, emit: o }) {
        const n = I
        let t = j.ref(null),
          e = j.ref(null),
          i = j.ref(),
          r = j.ref(),
          a = () => {
            if (n.options && n.options.length) {
              let g = {},
                y = {}
              n.options.map(x => {
                ;(g[x.prop] = x.value),
                  (y[x.prop] = x.rules),
                  x.type === 'editor' &&
                    j.nextTick(() => {
                      if (document.getElementById('editor')) {
                        const S = new Yf('#editor')
                        ;(S.config.placeholder = x.placeholder),
                          S.create(),
                          S.txt.html(x.value),
                          (S.config.onchange = D => {
                            t.value[x.prop] = D
                          }),
                          (r.value = S)
                      }
                    })
              }),
                (t.value = un(g)),
                (e.value = un(y))
            }
          }
        L({
          resetFields: () => {
            if ((i.value.resetFields(), n.options && n.options.length)) {
              let g = n.options.find(y => y.type === 'editor')
              r.value && r.value.txt.html(g.value)
            }
          },
          validate: () => i.value.validate,
          getFormData: () => t.value
        }),
          j.onMounted(() => {
            a()
          }),
          j.watch(
            () => n.options,
            () => {
              a()
            },
            { deep: !0 }
          )
        let h = g => {
            o('on-preview', g)
          },
          f = (g, y) => {
            o('on-remove', { file: g, fileList: y })
          },
          l = (g, y, x) => {
            let S = n.options.find(D => D.type === 'upload')
            ;(t.value[S.prop] = { response: g, file: y, fileList: x }),
              o('on-success', { response: g, file: y, fileList: x })
          },
          u = (g, y, x) => {
            o('on-error', { err: g, file: y, fileList: x })
          },
          s = (g, y, x) => {
            o('on-progress', { event: g, file: y, fileList: x })
          },
          p = (g, y) => {
            o('on-change', { file: g, fileList: y })
          },
          v = g => {
            o('before-upload', g)
          },
          m = (g, y) => {
            o('before-remove', { file: g, fileList: y })
          }
        return (g, y) => {
          const x = j.resolveComponent('el-form-item'),
            S = j.resolveComponent('el-col'),
            D = j.resolveComponent('el-row'),
            P = j.resolveComponent('el-upload'),
            C = j.resolveComponent('el-form')
          return j.unref(t)
            ? (j.openBlock(),
              j.createBlock(
                C,
                j.mergeProps({ key: 0, 'validate-on-rule-change': !1 }, g.$attrs, {
                  model: j.unref(t),
                  rules: j.unref(e),
                  ref_key: 'form',
                  ref: i
                }),
                {
                  default: j.withCtx(() => [
                    (j.openBlock(!0),
                    j.createElementBlock(
                      j.Fragment,
                      null,
                      j.renderList(
                        I.options,
                        (E, T) => (
                          j.openBlock(),
                          j.createElementBlock(
                            j.Fragment,
                            { key: T },
                            [
                              E.type === 'row'
                                ? (j.openBlock(),
                                  j.createBlock(
                                    D,
                                    { key: 0, gutter: E.rowGutter },
                                    {
                                      default: j.withCtx(() => [
                                        (j.openBlock(!0),
                                        j.createElementBlock(
                                          j.Fragment,
                                          null,
                                          j.renderList(
                                            E.cols,
                                            (R, N) => (
                                              j.openBlock(),
                                              j.createBlock(
                                                S,
                                                j.mergeProps(R.colOption, { key: N }),
                                                {
                                                  default: j.withCtx(() => [
                                                    j.createVNode(
                                                      x,
                                                      { label: R.label, prop: R.prop },
                                                      {
                                                        default: j.withCtx(() => [
                                                          (j.openBlock(),
                                                          j.createBlock(
                                                            j.resolveDynamicComponent(
                                                              `el-${R.type}`
                                                            ),
                                                            j.mergeProps(R.attrs, {
                                                              modelValue:
                                                                j.unref(t)[
                                                                  R == null ? void 0 : R.prop
                                                                ],
                                                              'onUpdate:modelValue': M =>
                                                                (j.unref(t)[
                                                                  R == null ? void 0 : R.prop
                                                                ] = M)
                                                            }),
                                                            {
                                                              default: j.withCtx(() => [
                                                                R.children && R.children.length
                                                                  ? (j.openBlock(!0),
                                                                    j.createElementBlock(
                                                                      j.Fragment,
                                                                      { key: 0 },
                                                                      j.renderList(
                                                                        R.children,
                                                                        (M, B) => (
                                                                          j.openBlock(),
                                                                          j.createBlock(
                                                                            j.resolveDynamicComponent(
                                                                              `el-${M.type}`
                                                                            ),
                                                                            {
                                                                              key: B,
                                                                              label: M.label,
                                                                              value: M.value
                                                                            },
                                                                            null,
                                                                            8,
                                                                            ['label', 'value']
                                                                          )
                                                                        )
                                                                      ),
                                                                      128
                                                                    ))
                                                                  : j.createCommentVNode('', !0)
                                                              ]),
                                                              _: 2
                                                            },
                                                            1040,
                                                            ['modelValue', 'onUpdate:modelValue']
                                                          ))
                                                        ]),
                                                        _: 2
                                                      },
                                                      1032,
                                                      ['label', 'prop']
                                                    )
                                                  ]),
                                                  _: 2
                                                },
                                                1040
                                              )
                                            )
                                          ),
                                          128
                                        ))
                                      ]),
                                      _: 2
                                    },
                                    1032,
                                    ['gutter']
                                  ))
                                : (j.openBlock(),
                                  j.createElementBlock(
                                    j.Fragment,
                                    { key: 1 },
                                    [
                                      E.children && E.children.length
                                        ? (j.openBlock(),
                                          j.createBlock(
                                            x,
                                            { key: 0, label: E.label, prop: E.prop },
                                            {
                                              default: j.withCtx(() => [
                                                (j.openBlock(),
                                                j.createBlock(
                                                  j.resolveDynamicComponent(`el-${E.type}`),
                                                  j.mergeProps(E.attrs, {
                                                    modelValue:
                                                      j.unref(t)[E == null ? void 0 : E.prop],
                                                    'onUpdate:modelValue': R =>
                                                      (j.unref(t)[E == null ? void 0 : E.prop] = R)
                                                  }),
                                                  {
                                                    default: j.withCtx(() => [
                                                      (j.openBlock(!0),
                                                      j.createElementBlock(
                                                        j.Fragment,
                                                        null,
                                                        j.renderList(
                                                          E.children,
                                                          (R, N) => (
                                                            j.openBlock(),
                                                            j.createBlock(
                                                              j.resolveDynamicComponent(
                                                                `el-${R.type}`
                                                              ),
                                                              {
                                                                key: N,
                                                                label: R.label,
                                                                value: R.value
                                                              },
                                                              null,
                                                              8,
                                                              ['label', 'value']
                                                            )
                                                          )
                                                        ),
                                                        128
                                                      ))
                                                    ]),
                                                    _: 2
                                                  },
                                                  1040,
                                                  ['modelValue', 'onUpdate:modelValue']
                                                ))
                                              ]),
                                              _: 2
                                            },
                                            1032,
                                            ['label', 'prop']
                                          ))
                                        : (j.openBlock(),
                                          j.createBlock(
                                            x,
                                            { key: 1, label: E.label, prop: E.prop },
                                            {
                                              default: j.withCtx(() => [
                                                E.type === 'upload'
                                                  ? (j.openBlock(),
                                                    j.createBlock(
                                                      P,
                                                      j.mergeProps({ key: 0 }, E.uploadAttrs, {
                                                        'on-preview': j.unref(h),
                                                        'on-remove': j.unref(f),
                                                        'on-success': j.unref(l),
                                                        'on-error': j.unref(u),
                                                        'on-progress': j.unref(s),
                                                        'on-change': j.unref(p),
                                                        'before-upload': j.unref(v),
                                                        'before-remove': j.unref(m),
                                                        'http-request': I.httpRequest
                                                      }),
                                                      {
                                                        default: j.withCtx(() => [
                                                          j.renderSlot(g.$slots, 'uploadArea'),
                                                          j.renderSlot(g.$slots, 'uploadTip')
                                                        ]),
                                                        _: 2
                                                      },
                                                      1040,
                                                      [
                                                        'on-preview',
                                                        'on-remove',
                                                        'on-success',
                                                        'on-error',
                                                        'on-progress',
                                                        'on-change',
                                                        'before-upload',
                                                        'before-remove',
                                                        'http-request'
                                                      ]
                                                    ))
                                                  : E.type === 'editor'
                                                  ? (j.openBlock(), j.createElementBlock('div', Vf))
                                                  : (j.openBlock(),
                                                    j.createBlock(
                                                      j.resolveDynamicComponent(`el-${E.type}`),
                                                      j.mergeProps({ key: 2 }, E.attrs, {
                                                        modelValue:
                                                          j.unref(t)[E == null ? void 0 : E.prop],
                                                        'onUpdate:modelValue': R =>
                                                          (j.unref(t)[E == null ? void 0 : E.prop] =
                                                            R)
                                                      }),
                                                      null,
                                                      16,
                                                      ['modelValue', 'onUpdate:modelValue']
                                                    ))
                                              ]),
                                              _: 2
                                            },
                                            1032,
                                            ['label', 'prop']
                                          ))
                                    ],
                                    64
                                  ))
                            ],
                            64
                          )
                        )
                      ),
                      128
                    )),
                    j.createVNode(x, null, {
                      default: j.withCtx(() => [
                        j.renderSlot(g.$slots, 'action', { form: j.unref(i), model: j.unref(t) })
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                },
                16,
                ['model', 'rules']
              ))
            : j.createCommentVNode('', !0)
        }
      }
    })
  return {
    install(I) {
      I.component('lib-form', zf)
    }
  }
})
