var rw = Object.defineProperty;
var iw = (e, t, n) => (t in e ? rw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n));
var S = (e, t, n) => (iw(e, typeof t != "symbol" ? t + "" : t, n), n);
import { r as A, j as x, g as pg, R as qo, W as ow, q as Qr, L as sw, X as aw } from "./main-202xyIyu.js";
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver((i) => {
        for (const o of i) if (o.type === "childList") for (const s of o.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(i) {
        const o = {};
        return (
            i.integrity && (o.integrity = i.integrity),
            i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
            i.crossOrigin === "use-credentials" ? (o.credentials = "include") : i.crossOrigin === "anonymous" ? (o.credentials = "omit") : (o.credentials = "same-origin"),
            o
        );
    }
    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o);
    }
})();
function oe(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    throw new Error(
        typeof e == "number" ? "[MobX] minified error nr: " + e + (n.length ? " " + n.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + e
    );
}
var lw = {};
function Bd() {
    return typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : lw;
}
var hg = Object.assign,
    Na = Object.getOwnPropertyDescriptor,
    dn = Object.defineProperty,
    Ol = Object.prototype,
    tc = [];
Object.freeze(tc);
var jd = {};
Object.freeze(jd);
var uw = typeof Proxy < "u",
    cw = Object.toString();
function vg() {
    uw || oe("Proxy not available");
}
function gg(e) {
    var t = !1;
    return function () {
        if (!t) return (t = !0), e.apply(this, arguments);
    };
}
var li = function () {};
function Mt(e) {
    return typeof e == "function";
}
function $r(e) {
    var t = typeof e;
    switch (t) {
        case "string":
        case "symbol":
        case "number":
            return !0;
    }
    return !1;
}
function Al(e) {
    return e !== null && typeof e == "object";
}
function Ln(e) {
    if (!Al(e)) return !1;
    var t = Object.getPrototypeOf(e);
    if (t == null) return !0;
    var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n.toString() === cw;
}
function _g(e) {
    var t = e == null ? void 0 : e.constructor;
    return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function Ps(e, t, n) {
    dn(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
}
function mg(e, t, n) {
    dn(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
}
function Yr(e, t) {
    var n = "isMobX" + e;
    return (
        (t.prototype[n] = !0),
        function (r) {
            return Al(r) && r[n] === !0;
        }
    );
}
function Ji(e) {
    return e instanceof Map;
}
function Os(e) {
    return e instanceof Set;
}
var yg = typeof Object.getOwnPropertySymbols < "u";
function dw(e) {
    var t = Object.keys(e);
    if (!yg) return t;
    var n = Object.getOwnPropertySymbols(e);
    return n.length
        ? [].concat(
              t,
              n.filter(function (r) {
                  return Ol.propertyIsEnumerable.call(e, r);
              })
          )
        : t;
}
var Li =
    typeof Reflect < "u" && Reflect.ownKeys
        ? Reflect.ownKeys
        : yg
        ? function (e) {
              return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
          }
        : Object.getOwnPropertyNames;
function wg(e) {
    return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Rn(e, t) {
    return Ol.hasOwnProperty.call(e, t);
}
var fw =
    Object.getOwnPropertyDescriptors ||
    function (t) {
        var n = {};
        return (
            Li(t).forEach(function (r) {
                n[r] = Na(t, r);
            }),
            n
        );
    };
function gp(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, vw(r.key), r);
    }
}
function Vd(e, t, n) {
    return t && gp(e.prototype, t), n && gp(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ur() {
    return (
        (Ur = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Ur.apply(this, arguments)
    );
}
function Sg(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), nc(e, t);
}
function nc(e, t) {
    return (
        (nc = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (r, i) {
                  return (r.__proto__ = i), r;
              }),
        nc(e, t)
    );
}
function au(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function pw(e, t) {
    if (e) {
        if (typeof e == "string") return _p(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if ((n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")) return Array.from(e);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _p(e, t);
    }
}
function _p(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function ui(e, t) {
    var n = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
    if (n) return (n = n.call(e)).next.bind(n);
    if (Array.isArray(e) || (n = pw(e)) || (t && e && typeof e.length == "number")) {
        n && (e = n);
        var r = 0;
        return function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
        };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hw(e, t) {
    if (typeof e != "object" || e === null) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
}
function vw(e) {
    var t = hw(e, "string");
    return typeof t == "symbol" ? t : String(t);
}
var un = Symbol("mobx-stored-annotations");
function fn(e) {
    function t(n, r) {
        if (As(r)) return e.decorate_20223_(n, r);
        Zi(n, r, e);
    }
    return Object.assign(t, e);
}
function Zi(e, t, n) {
    Rn(e, un) || Ps(e, un, Ur({}, e[un])), kw(n) || (e[un][t] = n);
}
function gw(e) {
    return Rn(e, un) || Ps(e, un, Ur({}, e[un])), e[un];
}
function As(e) {
    return typeof e == "object" && typeof e.kind == "string";
}
var ee = Symbol("mobx administration"),
    Cs = (function () {
        function e(n) {
            n === void 0 && (n = "Atom"),
                (this.name_ = void 0),
                (this.isPendingUnobservation_ = !1),
                (this.isBeingObserved_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = ue.NOT_TRACKING_),
                (this.onBOL = void 0),
                (this.onBUOL = void 0),
                (this.name_ = n);
        }
        var t = e.prototype;
        return (
            (t.onBO = function () {
                this.onBOL &&
                    this.onBOL.forEach(function (r) {
                        return r();
                    });
            }),
            (t.onBUO = function () {
                this.onBUOL &&
                    this.onBUOL.forEach(function (r) {
                        return r();
                    });
            }),
            (t.reportObserved = function () {
                return Bg(this);
            }),
            (t.reportChanged = function () {
                Tt(), jg(this), It();
            }),
            (t.toString = function () {
                return this.name_;
            }),
            e
        );
    })(),
    zd = Yr("Atom", Cs);
function Eg(e, t, n) {
    t === void 0 && (t = li), n === void 0 && (n = li);
    var r = new Cs(e);
    return t !== li && A1(r, t), n !== li && Yg(r, n), r;
}
function _w(e, t) {
    return e === t;
}
function mw(e, t) {
    return Qd(e, t);
}
function yw(e, t) {
    return Qd(e, t, 1);
}
function ww(e, t) {
    return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Mi = { identity: _w, structural: mw, default: ww, shallow: yw };
function Br(e, t, n) {
    return t_(e)
        ? e
        : Array.isArray(e)
        ? V.array(e, { name: n })
        : Ln(e)
        ? V.object(e, void 0, { name: n })
        : Ji(e)
        ? V.map(e, { name: n })
        : Os(e)
        ? V.set(e, { name: n })
        : typeof e == "function" && !Dl(e) && !Ko(e)
        ? _g(e)
            ? $i(e)
            : Yo(n, e)
        : e;
}
function Sw(e, t, n) {
    if (e == null || Xo(e) || Nl(e) || Xr(e) || to(e)) return e;
    if (Array.isArray(e)) return V.array(e, { name: n, deep: !1 });
    if (Ln(e)) return V.object(e, void 0, { name: n, deep: !1 });
    if (Ji(e)) return V.map(e, { name: n, deep: !1 });
    if (Os(e)) return V.set(e, { name: n, deep: !1 });
}
function Cl(e) {
    return e;
}
function Ew(e, t) {
    return Qd(e, t) ? t : e;
}
var bw = "override";
function kw(e) {
    return e.annotationType_ === bw;
}
function Rs(e, t) {
    return { annotationType_: e, options_: t, make_: Pw, extend_: Ow, decorate_20223_: Aw };
}
function Pw(e, t, n, r) {
    var i;
    if ((i = this.options_) != null && i.bound) return this.extend_(e, t, n, !1) === null ? 0 : 1;
    if (r === e.target_) return this.extend_(e, t, n, !1) === null ? 0 : 2;
    if (Dl(n.value)) return 1;
    var o = bg(e, this, t, n, !1);
    return dn(r, t, o), 2;
}
function Ow(e, t, n, r) {
    var i = bg(e, this, t, n);
    return e.defineProperty_(t, i, r);
}
function Aw(e, t) {
    var n = t.kind,
        r = t.name,
        i = t.addInitializer,
        o = this,
        s = function (u) {
            var c, d, f, p;
            return jr((c = (d = o.options_) == null ? void 0 : d.name) != null ? c : r.toString(), u, (f = (p = o.options_) == null ? void 0 : p.autoAction) != null ? f : !1);
        };
    if (n == "field") {
        i(function () {
            Zi(this, r, o);
        });
        return;
    }
    if (n == "method") {
        var a;
        return (
            Dl(e) || (e = s(e)),
            (a = this.options_) != null &&
                a.bound &&
                i(function () {
                    var l = this,
                        u = l[r].bind(l);
                    (u.isMobxAction = !0), (l[r] = u);
                }),
            e
        );
    }
    oe(
        "Cannot apply '" +
            o.annotationType_ +
            "' to '" +
            String(r) +
            "' (kind: " +
            n +
            "):" +
            (`
'` +
                o.annotationType_ +
                "' can only be used on properties with a function value.")
    );
}
function Cw(e, t, n, r) {
    t.annotationType_, r.value;
}
function bg(e, t, n, r, i) {
    var o, s, a, l, u, c, d;
    i === void 0 && (i = U.safeDescriptors), Cw(e, t, n, r);
    var f = r.value;
    if ((o = t.options_) != null && o.bound) {
        var p;
        f = f.bind((p = e.proxy_) != null ? p : e.target_);
    }
    return {
        value: jr(
            (s = (a = t.options_) == null ? void 0 : a.name) != null ? s : n.toString(),
            f,
            (l = (u = t.options_) == null ? void 0 : u.autoAction) != null ? l : !1,
            (c = t.options_) != null && c.bound ? ((d = e.proxy_) != null ? d : e.target_) : void 0
        ),
        configurable: i ? e.isPlainObject_ : !0,
        enumerable: !1,
        writable: !i,
    };
}
function kg(e, t) {
    return { annotationType_: e, options_: t, make_: Rw, extend_: Tw, decorate_20223_: Iw };
}
function Rw(e, t, n, r) {
    var i;
    if (r === e.target_) return this.extend_(e, t, n, !1) === null ? 0 : 2;
    if ((i = this.options_) != null && i.bound && (!Rn(e.target_, t) || !Ko(e.target_[t])) && this.extend_(e, t, n, !1) === null) return 0;
    if (Ko(n.value)) return 1;
    var o = Pg(e, this, t, n, !1, !1);
    return dn(r, t, o), 2;
}
function Tw(e, t, n, r) {
    var i,
        o = Pg(e, this, t, n, (i = this.options_) == null ? void 0 : i.bound);
    return e.defineProperty_(t, o, r);
}
function Iw(e, t) {
    var n,
        r = t.name,
        i = t.addInitializer;
    return (
        Ko(e) || (e = $i(e)),
        (n = this.options_) != null &&
            n.bound &&
            i(function () {
                var o = this,
                    s = o[r].bind(o);
                (s.isMobXFlow = !0), (o[r] = s);
            }),
        e
    );
}
function xw(e, t, n, r) {
    t.annotationType_, r.value;
}
function Pg(e, t, n, r, i, o) {
    o === void 0 && (o = U.safeDescriptors), xw(e, t, n, r);
    var s = r.value;
    if ((Ko(s) || (s = $i(s)), i)) {
        var a;
        (s = s.bind((a = e.proxy_) != null ? a : e.target_)), (s.isMobXFlow = !0);
    }
    return { value: s, configurable: o ? e.isPlainObject_ : !0, enumerable: !1, writable: !o };
}
function Hd(e, t) {
    return { annotationType_: e, options_: t, make_: Dw, extend_: Nw, decorate_20223_: Lw };
}
function Dw(e, t, n) {
    return this.extend_(e, t, n, !1) === null ? 0 : 1;
}
function Nw(e, t, n, r) {
    return Mw(e, this, t, n), e.defineComputedProperty_(t, Ur({}, this.options_, { get: n.get, set: n.set }), r);
}
function Lw(e, t) {
    var n = this,
        r = t.name,
        i = t.addInitializer;
    return (
        i(function () {
            var o = Jr(this)[ee],
                s = Ur({}, n.options_, { get: e, context: this });
            s.name || (s.name = "ObservableObject." + r.toString()), o.values_.set(r, new Fi(s));
        }),
        function () {
            return this[ee].getObservablePropValue_(r);
        }
    );
}
function Mw(e, t, n, r) {
    t.annotationType_, r.get;
}
function Rl(e, t) {
    return { annotationType_: e, options_: t, make_: Fw, extend_: $w, decorate_20223_: Uw };
}
function Fw(e, t, n) {
    return this.extend_(e, t, n, !1) === null ? 0 : 1;
}
function $w(e, t, n, r) {
    var i, o;
    return Bw(e, this), e.defineObservableProperty_(t, n.value, (i = (o = this.options_) == null ? void 0 : o.enhancer) != null ? i : Br, r);
}
function Uw(e, t) {
    var n = this,
        r = t.kind,
        i = t.name,
        o = new WeakSet();
    function s(a, l) {
        var u,
            c,
            d = Jr(a)[ee],
            f = new xr(l, (u = (c = n.options_) == null ? void 0 : c.enhancer) != null ? u : Br, "ObservableObject." + i.toString(), !1);
        d.values_.set(i, f), o.add(a);
    }
    if (r == "accessor")
        return {
            get: function () {
                return o.has(this) || s(this, e.get.call(this)), this[ee].getObservablePropValue_(i);
            },
            set: function (l) {
                return o.has(this) || s(this, l), this[ee].setObservablePropValue_(i, l);
            },
            init: function (l) {
                return o.has(this) || s(this, l), l;
            },
        };
}
function Bw(e, t, n, r) {
    t.annotationType_;
}
var jw = "true",
    Vw = Og();
function Og(e) {
    return { annotationType_: jw, options_: e, make_: zw, extend_: Hw, decorate_20223_: Ww };
}
function zw(e, t, n, r) {
    var i, o;
    if (n.get) return ce.make_(e, t, n, r);
    if (n.set) {
        var s = jr(t.toString(), n.set);
        return r === e.target_ ? (e.defineProperty_(t, { configurable: U.safeDescriptors ? e.isPlainObject_ : !0, set: s }) === null ? 0 : 2) : (dn(r, t, { configurable: !0, set: s }), 2);
    }
    if (r !== e.target_ && typeof n.value == "function") {
        var a;
        if (_g(n.value)) {
            var l,
                u = (l = this.options_) != null && l.autoBind ? $i.bound : $i;
            return u.make_(e, t, n, r);
        }
        var c = (a = this.options_) != null && a.autoBind ? Yo.bound : Yo;
        return c.make_(e, t, n, r);
    }
    var d = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? V.ref : V;
    if (typeof n.value == "function" && (o = this.options_) != null && o.autoBind) {
        var f;
        n.value = n.value.bind((f = e.proxy_) != null ? f : e.target_);
    }
    return d.make_(e, t, n, r);
}
function Hw(e, t, n, r) {
    var i, o;
    if (n.get) return ce.extend_(e, t, n, r);
    if (n.set) return e.defineProperty_(t, { configurable: U.safeDescriptors ? e.isPlainObject_ : !0, set: jr(t.toString(), n.set) }, r);
    if (typeof n.value == "function" && (i = this.options_) != null && i.autoBind) {
        var s;
        n.value = n.value.bind((s = e.proxy_) != null ? s : e.target_);
    }
    var a = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? V.ref : V;
    return a.extend_(e, t, n, r);
}
function Ww(e, t) {
    oe("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var Gw = "observable",
    qw = "observable.ref",
    Qw = "observable.shallow",
    Yw = "observable.struct",
    Ag = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(Ag);
function js(e) {
    return e || Ag;
}
var rc = Rl(Gw),
    Kw = Rl(qw, { enhancer: Cl }),
    Xw = Rl(Qw, { enhancer: Sw }),
    Jw = Rl(Yw, { enhancer: Ew }),
    Cg = fn(rc);
function Vs(e) {
    return e.deep === !0 ? Br : e.deep === !1 ? Cl : e1(e.defaultDecorator);
}
function Zw(e) {
    var t;
    return e ? ((t = e.defaultDecorator) != null ? t : Og(e)) : void 0;
}
function e1(e) {
    var t, n;
    return e && (t = (n = e.options_) == null ? void 0 : n.enhancer) != null ? t : Br;
}
function Rg(e, t, n) {
    if (As(t)) return rc.decorate_20223_(e, t);
    if ($r(t)) {
        Zi(e, t, rc);
        return;
    }
    return t_(e) ? e : Ln(e) ? V.object(e, t, n) : Array.isArray(e) ? V.array(e, t) : Ji(e) ? V.map(e, t) : Os(e) ? V.set(e, t) : typeof e == "object" && e !== null ? e : V.box(e, t);
}
hg(Rg, Cg);
var t1 = {
        box: function (t, n) {
            var r = js(n);
            return new xr(t, Vs(r), r.name, !0, r.equals);
        },
        array: function (t, n) {
            var r = js(n);
            return (U.useProxies === !1 || r.proxy === !1 ? Z1 : z1)(t, Vs(r), r.name);
        },
        map: function (t, n) {
            var r = js(n);
            return new o_(t, Vs(r), r.name);
        },
        set: function (t, n) {
            var r = js(n);
            return new l_(t, Vs(r), r.name);
        },
        object: function (t, n, r) {
            return hr(function () {
                return Jg(U.useProxies === !1 || (r == null ? void 0 : r.proxy) === !1 ? Jr({}, r) : U1({}, r), t, n);
            });
        },
        ref: fn(Kw),
        shallow: fn(Xw),
        deep: Cg,
        struct: fn(Jw),
    },
    V = hg(Rg, t1),
    Tg = "computed",
    n1 = "computed.struct",
    ic = Hd(Tg),
    r1 = Hd(n1, { equals: Mi.structural }),
    ce = function (t, n) {
        if (As(n)) return ic.decorate_20223_(t, n);
        if ($r(n)) return Zi(t, n, ic);
        if (Ln(t)) return fn(Hd(Tg, t));
        var r = Ln(n) ? n : {};
        return (r.get = t), r.name || (r.name = t.name || ""), new Fi(r);
    };
Object.assign(ce, ic);
ce.struct = fn(r1);
var mp,
    yp,
    La = 0,
    i1 = 1,
    o1 = (mp = (yp = Na(function () {}, "name")) == null ? void 0 : yp.configurable) != null ? mp : !1,
    wp = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function jr(e, t, n, r) {
    n === void 0 && (n = !1);
    function i() {
        return Ig(e, n, t, r || this, arguments);
    }
    return (
        (i.isMobxAction = !0),
        (i.toString = function () {
            return t.toString();
        }),
        o1 && ((wp.value = e), dn(i, "name", wp)),
        i
    );
}
function Ig(e, t, n, r, i) {
    var o = s1(e, t);
    try {
        return n.apply(r, i);
    } catch (s) {
        throw ((o.error_ = s), s);
    } finally {
        a1(o);
    }
}
function s1(e, t, n, r) {
    var i = !1,
        o = 0,
        s = U.trackingDerivation,
        a = !t || !s;
    Tt();
    var l = U.allowStateChanges;
    a && (Kr(), (l = Tl(!0)));
    var u = Wd(!0),
        c = { runAsAction_: a, prevDerivation_: s, prevAllowStateChanges_: l, prevAllowStateReads_: u, notifySpy_: i, startTime_: o, actionId_: i1++, parentActionId_: La };
    return (La = c.actionId_), c;
}
function a1(e) {
    La !== e.actionId_ && oe(30),
        (La = e.parentActionId_),
        e.error_ !== void 0 && (U.suppressReactionErrors = !0),
        Il(e.prevAllowStateChanges_),
        To(e.prevAllowStateReads_),
        It(),
        e.runAsAction_ && Tn(e.prevDerivation_),
        (U.suppressReactionErrors = !1);
}
function l1(e, t) {
    var n = Tl(e);
    try {
        return t();
    } finally {
        Il(n);
    }
}
function Tl(e) {
    var t = U.allowStateChanges;
    return (U.allowStateChanges = e), t;
}
function Il(e) {
    U.allowStateChanges = e;
}
var xg;
xg = Symbol.toPrimitive;
var xr = (function (e) {
        Sg(t, e);
        function t(r, i, o, s, a) {
            var l;
            return (
                o === void 0 && (o = "ObservableValue"),
                a === void 0 && (a = Mi.default),
                (l = e.call(this, o) || this),
                (l.enhancer = void 0),
                (l.name_ = void 0),
                (l.equals = void 0),
                (l.hasUnreportedChange_ = !1),
                (l.interceptors_ = void 0),
                (l.changeListeners_ = void 0),
                (l.value_ = void 0),
                (l.dehancer = void 0),
                (l.enhancer = i),
                (l.name_ = o),
                (l.equals = a),
                (l.value_ = i(r, void 0, o)),
                l
            );
        }
        var n = t.prototype;
        return (
            (n.dehanceValue = function (i) {
                return this.dehancer !== void 0 ? this.dehancer(i) : i;
            }),
            (n.set = function (i) {
                this.value_, (i = this.prepareNewValue_(i)), i !== U.UNCHANGED && this.setNewValue_(i);
            }),
            (n.prepareNewValue_ = function (i) {
                if (Ct(this)) {
                    var o = Rt(this, { object: this, type: pn, newValue: i });
                    if (!o) return U.UNCHANGED;
                    i = o.newValue;
                }
                return (i = this.enhancer(i, this.value_, this.name_)), this.equals(this.value_, i) ? U.UNCHANGED : i;
            }),
            (n.setNewValue_ = function (i) {
                var o = this.value_;
                (this.value_ = i), this.reportChanged(), Xt(this) && Jt(this, { type: pn, object: this, newValue: i, oldValue: o });
            }),
            (n.get = function () {
                return this.reportObserved(), this.dehanceValue(this.value_);
            }),
            (n.intercept_ = function (i) {
                return Ts(this, i);
            }),
            (n.observe_ = function (i, o) {
                return o && i({ observableKind: "value", debugObjectName: this.name_, object: this, type: pn, newValue: this.value_, oldValue: void 0 }), Is(this, i);
            }),
            (n.raw = function () {
                return this.value_;
            }),
            (n.toJSON = function () {
                return this.get();
            }),
            (n.toString = function () {
                return this.name_ + "[" + this.value_ + "]";
            }),
            (n.valueOf = function () {
                return wg(this.get());
            }),
            (n[xg] = function () {
                return this.valueOf();
            }),
            t
        );
    })(Cs),
    Dg;
Dg = Symbol.toPrimitive;
var Fi = (function () {
        function e(n) {
            (this.dependenciesState_ = ue.NOT_TRACKING_),
                (this.observing_ = []),
                (this.newObserving_ = null),
                (this.isBeingObserved_ = !1),
                (this.isPendingUnobservation_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = ue.UP_TO_DATE_),
                (this.unboundDepsCount_ = 0),
                (this.value_ = new Fa(null)),
                (this.name_ = void 0),
                (this.triggeredBy_ = void 0),
                (this.isComputing_ = !1),
                (this.isRunningSetter_ = !1),
                (this.derivation = void 0),
                (this.setter_ = void 0),
                (this.isTracing_ = Ma.NONE),
                (this.scope_ = void 0),
                (this.equals_ = void 0),
                (this.requiresReaction_ = void 0),
                (this.keepAlive_ = void 0),
                (this.onBOL = void 0),
                (this.onBUOL = void 0),
                n.get || oe(31),
                (this.derivation = n.get),
                (this.name_ = n.name || "ComputedValue"),
                n.set && (this.setter_ = jr("ComputedValue-setter", n.set)),
                (this.equals_ = n.equals || (n.compareStructural || n.struct ? Mi.structural : Mi.default)),
                (this.scope_ = n.context),
                (this.requiresReaction_ = n.requiresReaction),
                (this.keepAlive_ = !!n.keepAlive);
        }
        var t = e.prototype;
        return (
            (t.onBecomeStale_ = function () {
                p1(this);
            }),
            (t.onBO = function () {
                this.onBOL &&
                    this.onBOL.forEach(function (r) {
                        return r();
                    });
            }),
            (t.onBUO = function () {
                this.onBUOL &&
                    this.onBUOL.forEach(function (r) {
                        return r();
                    });
            }),
            (t.get = function () {
                if ((this.isComputing_ && oe(32, this.name_, this.derivation), U.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_))
                    oc(this) && (this.warnAboutUntrackedRead_(), Tt(), (this.value_ = this.computeValue_(!1)), It());
                else if ((Bg(this), oc(this))) {
                    var r = U.trackingContext;
                    this.keepAlive_ && !r && (U.trackingContext = this), this.trackAndCompute() && f1(this), (U.trackingContext = r);
                }
                var i = this.value_;
                if (_a(i)) throw i.cause;
                return i;
            }),
            (t.set = function (r) {
                if (this.setter_) {
                    this.isRunningSetter_ && oe(33, this.name_), (this.isRunningSetter_ = !0);
                    try {
                        this.setter_.call(this.scope_, r);
                    } finally {
                        this.isRunningSetter_ = !1;
                    }
                } else oe(34, this.name_);
            }),
            (t.trackAndCompute = function () {
                var r = this.value_,
                    i = this.dependenciesState_ === ue.NOT_TRACKING_,
                    o = this.computeValue_(!0),
                    s = i || _a(r) || _a(o) || !this.equals_(r, o);
                return s && (this.value_ = o), s;
            }),
            (t.computeValue_ = function (r) {
                this.isComputing_ = !0;
                var i = Tl(!1),
                    o;
                if (r) o = Ng(this, this.derivation, this.scope_);
                else if (U.disableErrorBoundaries === !0) o = this.derivation.call(this.scope_);
                else
                    try {
                        o = this.derivation.call(this.scope_);
                    } catch (s) {
                        o = new Fa(s);
                    }
                return Il(i), (this.isComputing_ = !1), o;
            }),
            (t.suspend_ = function () {
                this.keepAlive_ || (sc(this), (this.value_ = void 0));
            }),
            (t.observe_ = function (r, i) {
                var o = this,
                    s = !0,
                    a = void 0;
                return E1(function () {
                    var l = o.get();
                    if (!s || i) {
                        var u = Kr();
                        r({ observableKind: "computed", debugObjectName: o.name_, type: pn, object: o, newValue: l, oldValue: a }), Tn(u);
                    }
                    (s = !1), (a = l);
                });
            }),
            (t.warnAboutUntrackedRead_ = function () {}),
            (t.toString = function () {
                return this.name_ + "[" + this.derivation.toString() + "]";
            }),
            (t.valueOf = function () {
                return wg(this.get());
            }),
            (t[Dg] = function () {
                return this.valueOf();
            }),
            e
        );
    })(),
    xl = Yr("ComputedValue", Fi),
    ue;
(function (e) {
    (e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"), (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"), (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"), (e[(e.STALE_ = 2)] = "STALE_");
})(ue || (ue = {}));
var Ma;
(function (e) {
    (e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK");
})(Ma || (Ma = {}));
var Fa = function (t) {
    (this.cause = void 0), (this.cause = t);
};
function _a(e) {
    return e instanceof Fa;
}
function oc(e) {
    switch (e.dependenciesState_) {
        case ue.UP_TO_DATE_:
            return !1;
        case ue.NOT_TRACKING_:
        case ue.STALE_:
            return !0;
        case ue.POSSIBLY_STALE_: {
            for (var t = Wd(!0), n = Kr(), r = e.observing_, i = r.length, o = 0; o < i; o++) {
                var s = r[o];
                if (xl(s)) {
                    if (U.disableErrorBoundaries) s.get();
                    else
                        try {
                            s.get();
                        } catch {
                            return Tn(n), To(t), !0;
                        }
                    if (e.dependenciesState_ === ue.STALE_) return Tn(n), To(t), !0;
                }
            }
            return Mg(e), Tn(n), To(t), !1;
        }
    }
}
function Ng(e, t, n) {
    var r = Wd(!0);
    Mg(e), (e.newObserving_ = new Array(e.observing_.length + 100)), (e.unboundDepsCount_ = 0), (e.runId_ = ++U.runId);
    var i = U.trackingDerivation;
    (U.trackingDerivation = e), U.inBatch++;
    var o;
    if (U.disableErrorBoundaries === !0) o = t.call(n);
    else
        try {
            o = t.call(n);
        } catch (s) {
            o = new Fa(s);
        }
    return U.inBatch--, (U.trackingDerivation = i), u1(e), To(r), o;
}
function u1(e) {
    for (var t = e.observing_, n = (e.observing_ = e.newObserving_), r = ue.UP_TO_DATE_, i = 0, o = e.unboundDepsCount_, s = 0; s < o; s++) {
        var a = n[s];
        a.diffValue_ === 0 && ((a.diffValue_ = 1), i !== s && (n[i] = a), i++), a.dependenciesState_ > r && (r = a.dependenciesState_);
    }
    for (n.length = i, e.newObserving_ = null, o = t.length; o--; ) {
        var l = t[o];
        l.diffValue_ === 0 && $g(l, e), (l.diffValue_ = 0);
    }
    for (; i--; ) {
        var u = n[i];
        u.diffValue_ === 1 && ((u.diffValue_ = 0), d1(u, e));
    }
    r !== ue.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
}
function sc(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var n = t.length; n--; ) $g(t[n], e);
    e.dependenciesState_ = ue.NOT_TRACKING_;
}
function Lg(e) {
    var t = Kr();
    try {
        return e();
    } finally {
        Tn(t);
    }
}
function Kr() {
    var e = U.trackingDerivation;
    return (U.trackingDerivation = null), e;
}
function Tn(e) {
    U.trackingDerivation = e;
}
function Wd(e) {
    var t = U.allowStateReads;
    return (U.allowStateReads = e), t;
}
function To(e) {
    U.allowStateReads = e;
}
function Mg(e) {
    if (e.dependenciesState_ !== ue.UP_TO_DATE_) {
        e.dependenciesState_ = ue.UP_TO_DATE_;
        for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = ue.UP_TO_DATE_;
    }
}
var ma = function () {
        (this.version = 6),
            (this.UNCHANGED = {}),
            (this.trackingDerivation = null),
            (this.trackingContext = null),
            (this.runId = 0),
            (this.mobxGuid = 0),
            (this.inBatch = 0),
            (this.pendingUnobservations = []),
            (this.pendingReactions = []),
            (this.isRunningReactions = !1),
            (this.allowStateChanges = !1),
            (this.allowStateReads = !0),
            (this.enforceActions = !0),
            (this.spyListeners = []),
            (this.globalReactionErrorHandlers = []),
            (this.computedRequiresReaction = !1),
            (this.reactionRequiresObservable = !1),
            (this.observableRequiresReaction = !1),
            (this.disableErrorBoundaries = !1),
            (this.suppressReactionErrors = !1),
            (this.useProxies = !0),
            (this.verifyProxies = !1),
            (this.safeDescriptors = !0);
    },
    ya = !0,
    Fg = !1,
    U = (function () {
        var e = Bd();
        return (
            e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (ya = !1),
            e.__mobxGlobals && e.__mobxGlobals.version !== new ma().version && (ya = !1),
            ya
                ? e.__mobxGlobals
                    ? ((e.__mobxInstanceCount += 1), e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals)
                    : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new ma()))
                : (setTimeout(function () {
                      Fg || oe(35);
                  }, 1),
                  new ma())
        );
    })();
function c1() {
    if (((U.pendingReactions.length || U.inBatch || U.isRunningReactions) && oe(36), (Fg = !0), ya)) {
        var e = Bd();
        --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (U = new ma());
    }
}
function d1(e, t) {
    e.observers_.add(t), e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_);
}
function $g(e, t) {
    e.observers_.delete(t), e.observers_.size === 0 && Ug(e);
}
function Ug(e) {
    e.isPendingUnobservation_ === !1 && ((e.isPendingUnobservation_ = !0), U.pendingUnobservations.push(e));
}
function Tt() {
    U.inBatch++;
}
function It() {
    if (--U.inBatch === 0) {
        Vg();
        for (var e = U.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            (n.isPendingUnobservation_ = !1), n.observers_.size === 0 && (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()), n instanceof Fi && n.suspend_());
        }
        U.pendingUnobservations = [];
    }
}
function Bg(e) {
    var t = U.trackingDerivation;
    return t !== null
        ? (t.runId_ !== e.lastAccessedBy_ && ((e.lastAccessedBy_ = t.runId_), (t.newObserving_[t.unboundDepsCount_++] = e), !e.isBeingObserved_ && U.trackingContext && ((e.isBeingObserved_ = !0), e.onBO())), e.isBeingObserved_)
        : (e.observers_.size === 0 && U.inBatch > 0 && Ug(e), !1);
}
function jg(e) {
    e.lowestObserverState_ !== ue.STALE_ &&
        ((e.lowestObserverState_ = ue.STALE_),
        e.observers_.forEach(function (t) {
            t.dependenciesState_ === ue.UP_TO_DATE_ && t.onBecomeStale_(), (t.dependenciesState_ = ue.STALE_);
        }));
}
function f1(e) {
    e.lowestObserverState_ !== ue.STALE_ &&
        ((e.lowestObserverState_ = ue.STALE_),
        e.observers_.forEach(function (t) {
            t.dependenciesState_ === ue.POSSIBLY_STALE_ ? (t.dependenciesState_ = ue.STALE_) : t.dependenciesState_ === ue.UP_TO_DATE_ && (e.lowestObserverState_ = ue.UP_TO_DATE_);
        }));
}
function p1(e) {
    e.lowestObserverState_ === ue.UP_TO_DATE_ &&
        ((e.lowestObserverState_ = ue.POSSIBLY_STALE_),
        e.observers_.forEach(function (t) {
            t.dependenciesState_ === ue.UP_TO_DATE_ && ((t.dependenciesState_ = ue.POSSIBLY_STALE_), t.onBecomeStale_());
        }));
}
var Qo = (function () {
        function e(n, r, i, o) {
            n === void 0 && (n = "Reaction"),
                (this.name_ = void 0),
                (this.onInvalidate_ = void 0),
                (this.errorHandler_ = void 0),
                (this.requiresObservable_ = void 0),
                (this.observing_ = []),
                (this.newObserving_ = []),
                (this.dependenciesState_ = ue.NOT_TRACKING_),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.unboundDepsCount_ = 0),
                (this.isDisposed_ = !1),
                (this.isScheduled_ = !1),
                (this.isTrackPending_ = !1),
                (this.isRunning_ = !1),
                (this.isTracing_ = Ma.NONE),
                (this.name_ = n),
                (this.onInvalidate_ = r),
                (this.errorHandler_ = i),
                (this.requiresObservable_ = o);
        }
        var t = e.prototype;
        return (
            (t.onBecomeStale_ = function () {
                this.schedule_();
            }),
            (t.schedule_ = function () {
                this.isScheduled_ || ((this.isScheduled_ = !0), U.pendingReactions.push(this), Vg());
            }),
            (t.isScheduled = function () {
                return this.isScheduled_;
            }),
            (t.runReaction_ = function () {
                if (!this.isDisposed_) {
                    Tt(), (this.isScheduled_ = !1);
                    var r = U.trackingContext;
                    if (((U.trackingContext = this), oc(this))) {
                        this.isTrackPending_ = !0;
                        try {
                            this.onInvalidate_();
                        } catch (i) {
                            this.reportExceptionInDerivation_(i);
                        }
                    }
                    (U.trackingContext = r), It();
                }
            }),
            (t.track = function (r) {
                if (!this.isDisposed_) {
                    Tt(), (this.isRunning_ = !0);
                    var i = U.trackingContext;
                    U.trackingContext = this;
                    var o = Ng(this, r, void 0);
                    (U.trackingContext = i), (this.isRunning_ = !1), (this.isTrackPending_ = !1), this.isDisposed_ && sc(this), _a(o) && this.reportExceptionInDerivation_(o.cause), It();
                }
            }),
            (t.reportExceptionInDerivation_ = function (r) {
                var i = this;
                if (this.errorHandler_) {
                    this.errorHandler_(r, this);
                    return;
                }
                if (U.disableErrorBoundaries) throw r;
                var o = "[mobx] uncaught error in '" + this + "'";
                U.suppressReactionErrors || console.error(o, r),
                    U.globalReactionErrorHandlers.forEach(function (s) {
                        return s(r, i);
                    });
            }),
            (t.dispose = function () {
                this.isDisposed_ || ((this.isDisposed_ = !0), this.isRunning_ || (Tt(), sc(this), It()));
            }),
            (t.getDisposer_ = function (r) {
                var i = this,
                    o = function s() {
                        i.dispose(), r == null || r.removeEventListener == null || r.removeEventListener("abort", s);
                    };
                return r == null || r.addEventListener == null || r.addEventListener("abort", o), (o[ee] = this), o;
            }),
            (t.toString = function () {
                return "Reaction[" + this.name_ + "]";
            }),
            (t.trace = function (r) {}),
            e
        );
    })(),
    h1 = 100,
    ac = function (t) {
        return t();
    };
function Vg() {
    U.inBatch > 0 || U.isRunningReactions || ac(v1);
}
function v1() {
    U.isRunningReactions = !0;
    for (var e = U.pendingReactions, t = 0; e.length > 0; ) {
        ++t === h1 && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
        for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction_();
    }
    U.isRunningReactions = !1;
}
var $a = Yr("Reaction", Qo);
function g1(e) {
    var t = ac;
    ac = function (r) {
        return e(function () {
            return t(r);
        });
    };
}
function Io() {
    return !1;
}
function _1(e) {
    return console.warn("[mobx.spy] Is a no-op in production builds"), function () {};
}
var zg = "action",
    m1 = "action.bound",
    Hg = "autoAction",
    y1 = "autoAction.bound",
    Wg = "<unnamed action>",
    lc = Rs(zg),
    w1 = Rs(m1, { bound: !0 }),
    uc = Rs(Hg, { autoAction: !0 }),
    S1 = Rs(y1, { autoAction: !0, bound: !0 });
function Gg(e) {
    var t = function (r, i) {
        if (Mt(r)) return jr(r.name || Wg, r, e);
        if (Mt(i)) return jr(r, i, e);
        if (As(i)) return (e ? uc : lc).decorate_20223_(r, i);
        if ($r(i)) return Zi(r, i, e ? uc : lc);
        if ($r(r)) return fn(Rs(e ? Hg : zg, { name: r, autoAction: e }));
    };
    return t;
}
var X = Gg(!1);
Object.assign(X, lc);
var Yo = Gg(!0);
Object.assign(Yo, uc);
X.bound = fn(w1);
Yo.bound = fn(S1);
function eo(e) {
    return Ig(e.name || Wg, !1, e, this, void 0);
}
function Dl(e) {
    return Mt(e) && e.isMobxAction === !0;
}
function E1(e, t) {
    var n, r, i, o, s;
    t === void 0 && (t = jd);
    var a = (n = (r = t) == null ? void 0 : r.name) != null ? n : "Autorun",
        l = !t.scheduler && !t.delay,
        u;
    if (l)
        u = new Qo(
            a,
            function () {
                this.track(f);
            },
            t.onError,
            t.requiresObservable
        );
    else {
        var c = qg(t),
            d = !1;
        u = new Qo(
            a,
            function () {
                d ||
                    ((d = !0),
                    c(function () {
                        (d = !1), u.isDisposed_ || u.track(f);
                    }));
            },
            t.onError,
            t.requiresObservable
        );
    }
    function f() {
        e(u);
    }
    return ((i = t) != null && (o = i.signal) != null && o.aborted) || u.schedule_(), u.getDisposer_((s = t) == null ? void 0 : s.signal);
}
var b1 = function (t) {
    return t();
};
function qg(e) {
    return e.scheduler
        ? e.scheduler
        : e.delay
        ? function (t) {
              return setTimeout(t, e.delay);
          }
        : b1;
}
function Qg(e, t, n) {
    var r, i, o, s;
    n === void 0 && (n = jd);
    var a = (r = n.name) != null ? r : "Reaction",
        l = X(a, n.onError ? k1(n.onError, t) : t),
        u = !n.scheduler && !n.delay,
        c = qg(n),
        d = !0,
        f = !1,
        p,
        m,
        v = n.compareStructural ? Mi.structural : n.equals || Mi.default,
        O = new Qo(
            a,
            function () {
                d || u ? g() : f || ((f = !0), c(g));
            },
            n.onError,
            n.requiresObservable
        );
    function g() {
        if (((f = !1), !O.isDisposed_)) {
            var h = !1;
            O.track(function () {
                var _ = l1(!1, function () {
                    return e(O);
                });
                (h = d || !v(p, _)), (m = p), (p = _);
            }),
                ((d && n.fireImmediately) || (!d && h)) && l(p, m, O),
                (d = !1);
        }
    }
    return ((i = n) != null && (o = i.signal) != null && o.aborted) || O.schedule_(), O.getDisposer_((s = n) == null ? void 0 : s.signal);
}
function k1(e, t) {
    return function () {
        try {
            return t.apply(this, arguments);
        } catch (n) {
            e.call(this, n);
        }
    };
}
var P1 = "onBO",
    O1 = "onBUO";
function A1(e, t, n) {
    return Kg(P1, e, t, n);
}
function Yg(e, t, n) {
    return Kg(O1, e, t, n);
}
function Kg(e, t, n, r) {
    var i = typeof r == "function" ? Ui(t, n) : Ui(t),
        o = Mt(r) ? r : n,
        s = e + "L";
    return (
        i[s] ? i[s].add(o) : (i[s] = new Set([o])),
        function () {
            var a = i[s];
            a && (a.delete(o), a.size === 0 && delete i[s]);
        }
    );
}
var C1 = "never",
    zs = "always",
    R1 = "observed";
function Xg(e) {
    e.isolateGlobalState === !0 && c1();
    var t = e.useProxies,
        n = e.enforceActions;
    if ((t !== void 0 && (U.useProxies = t === zs ? !0 : t === C1 ? !1 : typeof Proxy < "u"), t === "ifavailable" && (U.verifyProxies = !0), n !== void 0)) {
        var r = n === zs ? zs : n === R1;
        (U.enforceActions = r), (U.allowStateChanges = !(r === !0 || r === zs));
    }
    ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function (i) {
        i in e && (U[i] = !!e[i]);
    }),
        (U.allowStateReads = !U.observableRequiresReaction),
        e.reactionScheduler && g1(e.reactionScheduler);
}
function Jg(e, t, n, r) {
    var i = fw(t);
    return (
        hr(function () {
            var o = Jr(e, r)[ee];
            Li(i).forEach(function (s) {
                o.extend_(s, i[s], n && s in n ? n[s] : !0);
            });
        }),
        e
    );
}
function T1(e, t) {
    return Zg(Ui(e, t));
}
function Zg(e) {
    var t = { name: e.name_ };
    return e.observing_ && e.observing_.length > 0 && (t.dependencies = I1(e.observing_).map(Zg)), t;
}
function I1(e) {
    return Array.from(new Set(e));
}
var x1 = 0;
function e_() {
    this.message = "FLOW_CANCELLED";
}
e_.prototype = Object.create(Error.prototype);
var lu = kg("flow"),
    D1 = kg("flow.bound", { bound: !0 }),
    $i = Object.assign(function (t, n) {
        if (As(n)) return lu.decorate_20223_(t, n);
        if ($r(n)) return Zi(t, n, lu);
        var r = t,
            i = r.name || "<unnamed flow>",
            o = function () {
                var a = this,
                    l = arguments,
                    u = ++x1,
                    c = X(i + " - runid: " + u + " - init", r).apply(a, l),
                    d,
                    f = void 0,
                    p = new Promise(function (m, v) {
                        var O = 0;
                        d = v;
                        function g(y) {
                            f = void 0;
                            var P;
                            try {
                                P = X(i + " - runid: " + u + " - yield " + O++, c.next).call(c, y);
                            } catch (N) {
                                return v(N);
                            }
                            _(P);
                        }
                        function h(y) {
                            f = void 0;
                            var P;
                            try {
                                P = X(i + " - runid: " + u + " - yield " + O++, c.throw).call(c, y);
                            } catch (N) {
                                return v(N);
                            }
                            _(P);
                        }
                        function _(y) {
                            if (Mt(y == null ? void 0 : y.then)) {
                                y.then(_, v);
                                return;
                            }
                            return y.done ? m(y.value) : ((f = Promise.resolve(y.value)), f.then(g, h));
                        }
                        g(void 0);
                    });
                return (
                    (p.cancel = X(i + " - runid: " + u + " - cancel", function () {
                        try {
                            f && Sp(f);
                            var m = c.return(void 0),
                                v = Promise.resolve(m.value);
                            v.then(li, li), Sp(v), d(new e_());
                        } catch (O) {
                            d(O);
                        }
                    })),
                    p
                );
            };
        return (o.isMobXFlow = !0), o;
    }, lu);
$i.bound = fn(D1);
function Sp(e) {
    Mt(e.cancel) && e.cancel();
}
function Ko(e) {
    return (e == null ? void 0 : e.isMobXFlow) === !0;
}
function N1(e, t) {
    return e ? (t !== void 0 ? (Xo(e) ? e[ee].values_.has(t) : !1) : Xo(e) || !!e[ee] || zd(e) || $a(e) || xl(e)) : !1;
}
function t_(e) {
    return N1(e);
}
function L1(e, t, n, r) {
    return Mt(n) ? F1(e, t, n, r) : M1(e, t, n);
}
function M1(e, t, n) {
    return Ll(e).observe_(t, n);
}
function F1(e, t, n, r) {
    return Ll(e, t).observe_(n, r);
}
function Pn(e, t) {
    t === void 0 && (t = void 0), Tt();
    try {
        return e.apply(t);
    } finally {
        It();
    }
}
function ii(e) {
    return e[ee];
}
var $1 = {
    has: function (t, n) {
        return ii(t).has_(n);
    },
    get: function (t, n) {
        return ii(t).get_(n);
    },
    set: function (t, n, r) {
        var i;
        return $r(n) ? ((i = ii(t).set_(n, r, !0)) != null ? i : !0) : !1;
    },
    deleteProperty: function (t, n) {
        var r;
        return $r(n) ? ((r = ii(t).delete_(n, !0)) != null ? r : !0) : !1;
    },
    defineProperty: function (t, n, r) {
        var i;
        return (i = ii(t).defineProperty_(n, r)) != null ? i : !0;
    },
    ownKeys: function (t) {
        return ii(t).ownKeys_();
    },
    preventExtensions: function (t) {
        oe(13);
    },
};
function U1(e, t) {
    var n, r;
    return vg(), (e = Jr(e, t)), (r = (n = e[ee]).proxy_) != null ? r : (n.proxy_ = new Proxy(e, $1));
}
function Ct(e) {
    return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Ts(e, t) {
    var n = e.interceptors_ || (e.interceptors_ = []);
    return (
        n.push(t),
        gg(function () {
            var r = n.indexOf(t);
            r !== -1 && n.splice(r, 1);
        })
    );
}
function Rt(e, t) {
    var n = Kr();
    try {
        for (var r = [].concat(e.interceptors_ || []), i = 0, o = r.length; i < o && ((t = r[i](t)), t && !t.type && oe(14), !!t); i++);
        return t;
    } finally {
        Tn(n);
    }
}
function Xt(e) {
    return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Is(e, t) {
    var n = e.changeListeners_ || (e.changeListeners_ = []);
    return (
        n.push(t),
        gg(function () {
            var r = n.indexOf(t);
            r !== -1 && n.splice(r, 1);
        })
    );
}
function Jt(e, t) {
    var n = Kr(),
        r = e.changeListeners_;
    if (r) {
        r = r.slice();
        for (var i = 0, o = r.length; i < o; i++) r[i](t);
        Tn(n);
    }
}
function ge(e, t, n) {
    return (
        hr(function () {
            var r,
                i = Jr(e, n)[ee];
            (r = t) != null || (t = gw(e)),
                Li(t).forEach(function (o) {
                    return i.make_(o, t[o]);
                });
        }),
        e
    );
}
var uu = Symbol("mobx-keys");
function B1(e, t, n) {
    return Ln(e)
        ? Jg(e, e, t, n)
        : (hr(function () {
              var r = Jr(e, n)[ee];
              if (!e[uu]) {
                  var i = Object.getPrototypeOf(e),
                      o = new Set([].concat(Li(e), Li(i)));
                  o.delete("constructor"), o.delete(ee), Ps(i, uu, o);
              }
              e[uu].forEach(function (s) {
                  return r.make_(s, t && s in t ? t[s] : !0);
              });
          }),
          e);
}
var Ep = "splice",
    pn = "update",
    j1 = 1e4,
    V1 = {
        get: function (t, n) {
            var r = t[ee];
            return n === ee ? r : n === "length" ? r.getArrayLength_() : typeof n == "string" && !isNaN(n) ? r.get_(parseInt(n)) : Rn(Ua, n) ? Ua[n] : t[n];
        },
        set: function (t, n, r) {
            var i = t[ee];
            return n === "length" && i.setArrayLength_(r), typeof n == "symbol" || isNaN(n) ? (t[n] = r) : i.set_(parseInt(n), r), !0;
        },
        preventExtensions: function () {
            oe(15);
        },
    },
    Gd = (function () {
        function e(n, r, i, o) {
            n === void 0 && (n = "ObservableArray"),
                (this.owned_ = void 0),
                (this.legacyMode_ = void 0),
                (this.atom_ = void 0),
                (this.values_ = []),
                (this.interceptors_ = void 0),
                (this.changeListeners_ = void 0),
                (this.enhancer_ = void 0),
                (this.dehancer = void 0),
                (this.proxy_ = void 0),
                (this.lastKnownLength_ = 0),
                (this.owned_ = i),
                (this.legacyMode_ = o),
                (this.atom_ = new Cs(n)),
                (this.enhancer_ = function (s, a) {
                    return r(s, a, "ObservableArray[..]");
                });
        }
        var t = e.prototype;
        return (
            (t.dehanceValue_ = function (r) {
                return this.dehancer !== void 0 ? this.dehancer(r) : r;
            }),
            (t.dehanceValues_ = function (r) {
                return this.dehancer !== void 0 && r.length > 0 ? r.map(this.dehancer) : r;
            }),
            (t.intercept_ = function (r) {
                return Ts(this, r);
            }),
            (t.observe_ = function (r, i) {
                return (
                    i === void 0 && (i = !1),
                    i && r({ observableKind: "array", object: this.proxy_, debugObjectName: this.atom_.name_, type: "splice", index: 0, added: this.values_.slice(), addedCount: this.values_.length, removed: [], removedCount: 0 }),
                    Is(this, r)
                );
            }),
            (t.getArrayLength_ = function () {
                return this.atom_.reportObserved(), this.values_.length;
            }),
            (t.setArrayLength_ = function (r) {
                (typeof r != "number" || isNaN(r) || r < 0) && oe("Out of range: " + r);
                var i = this.values_.length;
                if (r !== i)
                    if (r > i) {
                        for (var o = new Array(r - i), s = 0; s < r - i; s++) o[s] = void 0;
                        this.spliceWithArray_(i, 0, o);
                    } else this.spliceWithArray_(r, i - r);
            }),
            (t.updateArrayLength_ = function (r, i) {
                r !== this.lastKnownLength_ && oe(16), (this.lastKnownLength_ += i), this.legacyMode_ && i > 0 && f_(r + i + 1);
            }),
            (t.spliceWithArray_ = function (r, i, o) {
                var s = this;
                this.atom_;
                var a = this.values_.length;
                if ((r === void 0 ? (r = 0) : r > a ? (r = a) : r < 0 && (r = Math.max(0, a + r)), arguments.length === 1 ? (i = a - r) : i == null ? (i = 0) : (i = Math.max(0, Math.min(i, a - r))), o === void 0 && (o = tc), Ct(this))) {
                    var l = Rt(this, { object: this.proxy_, type: Ep, index: r, removedCount: i, added: o });
                    if (!l) return tc;
                    (i = l.removedCount), (o = l.added);
                }
                if (
                    ((o =
                        o.length === 0
                            ? o
                            : o.map(function (d) {
                                  return s.enhancer_(d, void 0);
                              })),
                    this.legacyMode_)
                ) {
                    var u = o.length - i;
                    this.updateArrayLength_(a, u);
                }
                var c = this.spliceItemsIntoValues_(r, i, o);
                return (i !== 0 || o.length !== 0) && this.notifyArraySplice_(r, o, c), this.dehanceValues_(c);
            }),
            (t.spliceItemsIntoValues_ = function (r, i, o) {
                if (o.length < j1) {
                    var s;
                    return (s = this.values_).splice.apply(s, [r, i].concat(o));
                } else {
                    var a = this.values_.slice(r, r + i),
                        l = this.values_.slice(r + i);
                    this.values_.length += o.length - i;
                    for (var u = 0; u < o.length; u++) this.values_[r + u] = o[u];
                    for (var c = 0; c < l.length; c++) this.values_[r + o.length + c] = l[c];
                    return a;
                }
            }),
            (t.notifyArrayChildUpdate_ = function (r, i, o) {
                var s = !this.owned_ && Io(),
                    a = Xt(this),
                    l = a || s ? { observableKind: "array", object: this.proxy_, type: pn, debugObjectName: this.atom_.name_, index: r, newValue: i, oldValue: o } : null;
                this.atom_.reportChanged(), a && Jt(this, l);
            }),
            (t.notifyArraySplice_ = function (r, i, o) {
                var s = !this.owned_ && Io(),
                    a = Xt(this),
                    l = a || s ? { observableKind: "array", object: this.proxy_, debugObjectName: this.atom_.name_, type: Ep, index: r, removed: o, added: i, removedCount: o.length, addedCount: i.length } : null;
                this.atom_.reportChanged(), a && Jt(this, l);
            }),
            (t.get_ = function (r) {
                if (this.legacyMode_ && r >= this.values_.length) {
                    console.warn("[mobx] Out of bounds read: " + r);
                    return;
                }
                return this.atom_.reportObserved(), this.dehanceValue_(this.values_[r]);
            }),
            (t.set_ = function (r, i) {
                var o = this.values_;
                if ((this.legacyMode_ && r > o.length && oe(17, r, o.length), r < o.length)) {
                    this.atom_;
                    var s = o[r];
                    if (Ct(this)) {
                        var a = Rt(this, { type: pn, object: this.proxy_, index: r, newValue: i });
                        if (!a) return;
                        i = a.newValue;
                    }
                    i = this.enhancer_(i, s);
                    var l = i !== s;
                    l && ((o[r] = i), this.notifyArrayChildUpdate_(r, i, s));
                } else {
                    for (var u = new Array(r + 1 - o.length), c = 0; c < u.length - 1; c++) u[c] = void 0;
                    (u[u.length - 1] = i), this.spliceWithArray_(o.length, 0, u);
                }
            }),
            e
        );
    })();
function z1(e, t, n, r) {
    return (
        n === void 0 && (n = "ObservableArray"),
        r === void 0 && (r = !1),
        vg(),
        hr(function () {
            var i = new Gd(n, t, r, !1);
            mg(i.values_, ee, i);
            var o = new Proxy(i.values_, V1);
            return (i.proxy_ = o), e && e.length && i.spliceWithArray_(0, 0, e), o;
        })
    );
}
var Ua = {
    clear: function () {
        return this.splice(0);
    },
    replace: function (t) {
        var n = this[ee];
        return n.spliceWithArray_(0, n.values_.length, t);
    },
    toJSON: function () {
        return this.slice();
    },
    splice: function (t, n) {
        for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) i[o - 2] = arguments[o];
        var s = this[ee];
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return s.spliceWithArray_(t);
            case 2:
                return s.spliceWithArray_(t, n);
        }
        return s.spliceWithArray_(t, n, i);
    },
    spliceWithArray: function (t, n, r) {
        return this[ee].spliceWithArray_(t, n, r);
    },
    push: function () {
        for (var t = this[ee], n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        return t.spliceWithArray_(t.values_.length, 0, r), t.values_.length;
    },
    pop: function () {
        return this.splice(Math.max(this[ee].values_.length - 1, 0), 1)[0];
    },
    shift: function () {
        return this.splice(0, 1)[0];
    },
    unshift: function () {
        for (var t = this[ee], n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        return t.spliceWithArray_(0, 0, r), t.values_.length;
    },
    reverse: function () {
        return U.trackingDerivation && oe(37, "reverse"), this.replace(this.slice().reverse()), this;
    },
    sort: function () {
        U.trackingDerivation && oe(37, "sort");
        var t = this.slice();
        return t.sort.apply(t, arguments), this.replace(t), this;
    },
    remove: function (t) {
        var n = this[ee],
            r = n.dehanceValues_(n.values_).indexOf(t);
        return r > -1 ? (this.splice(r, 1), !0) : !1;
    },
};
_e("at", Et);
_e("concat", Et);
_e("flat", Et);
_e("includes", Et);
_e("indexOf", Et);
_e("join", Et);
_e("lastIndexOf", Et);
_e("slice", Et);
_e("toString", Et);
_e("toLocaleString", Et);
_e("toSorted", Et);
_e("toSpliced", Et);
_e("with", Et);
_e("every", rn);
_e("filter", rn);
_e("find", rn);
_e("findIndex", rn);
_e("findLast", rn);
_e("findLastIndex", rn);
_e("flatMap", rn);
_e("forEach", rn);
_e("map", rn);
_e("some", rn);
_e("toReversed", rn);
_e("reduce", n_);
_e("reduceRight", n_);
function _e(e, t) {
    typeof Array.prototype[e] == "function" && (Ua[e] = t(e));
}
function Et(e) {
    return function () {
        var t = this[ee];
        t.atom_.reportObserved();
        var n = t.dehanceValues_(t.values_);
        return n[e].apply(n, arguments);
    };
}
function rn(e) {
    return function (t, n) {
        var r = this,
            i = this[ee];
        i.atom_.reportObserved();
        var o = i.dehanceValues_(i.values_);
        return o[e](function (s, a) {
            return t.call(n, s, a, r);
        });
    };
}
function n_(e) {
    return function () {
        var t = this,
            n = this[ee];
        n.atom_.reportObserved();
        var r = n.dehanceValues_(n.values_),
            i = arguments[0];
        return (
            (arguments[0] = function (o, s, a) {
                return i(o, s, a, t);
            }),
            r[e].apply(r, arguments)
        );
    };
}
var H1 = Yr("ObservableArrayAdministration", Gd);
function Nl(e) {
    return Al(e) && H1(e[ee]);
}
var r_,
    i_,
    W1 = {},
    Xn = "add",
    Ba = "delete";
r_ = Symbol.iterator;
i_ = Symbol.toStringTag;
var o_ = (function () {
        function e(n, r, i) {
            var o = this;
            r === void 0 && (r = Br),
                i === void 0 && (i = "ObservableMap"),
                (this.enhancer_ = void 0),
                (this.name_ = void 0),
                (this[ee] = W1),
                (this.data_ = void 0),
                (this.hasMap_ = void 0),
                (this.keysAtom_ = void 0),
                (this.interceptors_ = void 0),
                (this.changeListeners_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = r),
                (this.name_ = i),
                Mt(Map) || oe(18),
                hr(function () {
                    (o.keysAtom_ = Eg("ObservableMap.keys()")), (o.data_ = new Map()), (o.hasMap_ = new Map()), n && o.merge(n);
                });
        }
        var t = e.prototype;
        return (
            (t.has_ = function (r) {
                return this.data_.has(r);
            }),
            (t.has = function (r) {
                var i = this;
                if (!U.trackingDerivation) return this.has_(r);
                var o = this.hasMap_.get(r);
                if (!o) {
                    var s = (o = new xr(this.has_(r), Cl, "ObservableMap.key?", !1));
                    this.hasMap_.set(r, s),
                        Yg(s, function () {
                            return i.hasMap_.delete(r);
                        });
                }
                return o.get();
            }),
            (t.set = function (r, i) {
                var o = this.has_(r);
                if (Ct(this)) {
                    var s = Rt(this, { type: o ? pn : Xn, object: this, newValue: i, name: r });
                    if (!s) return this;
                    i = s.newValue;
                }
                return o ? this.updateValue_(r, i) : this.addValue_(r, i), this;
            }),
            (t.delete = function (r) {
                var i = this;
                if ((this.keysAtom_, Ct(this))) {
                    var o = Rt(this, { type: Ba, object: this, name: r });
                    if (!o) return !1;
                }
                if (this.has_(r)) {
                    var s = Io(),
                        a = Xt(this),
                        l = a || s ? { observableKind: "map", debugObjectName: this.name_, type: Ba, object: this, oldValue: this.data_.get(r).value_, name: r } : null;
                    return (
                        Pn(function () {
                            var u;
                            i.keysAtom_.reportChanged(), (u = i.hasMap_.get(r)) == null || u.setNewValue_(!1);
                            var c = i.data_.get(r);
                            c.setNewValue_(void 0), i.data_.delete(r);
                        }),
                        a && Jt(this, l),
                        !0
                    );
                }
                return !1;
            }),
            (t.updateValue_ = function (r, i) {
                var o = this.data_.get(r);
                if (((i = o.prepareNewValue_(i)), i !== U.UNCHANGED)) {
                    var s = Io(),
                        a = Xt(this),
                        l = a || s ? { observableKind: "map", debugObjectName: this.name_, type: pn, object: this, oldValue: o.value_, name: r, newValue: i } : null;
                    o.setNewValue_(i), a && Jt(this, l);
                }
            }),
            (t.addValue_ = function (r, i) {
                var o = this;
                this.keysAtom_,
                    Pn(function () {
                        var u,
                            c = new xr(i, o.enhancer_, "ObservableMap.key", !1);
                        o.data_.set(r, c), (i = c.value_), (u = o.hasMap_.get(r)) == null || u.setNewValue_(!0), o.keysAtom_.reportChanged();
                    });
                var s = Io(),
                    a = Xt(this),
                    l = a || s ? { observableKind: "map", debugObjectName: this.name_, type: Xn, object: this, name: r, newValue: i } : null;
                a && Jt(this, l);
            }),
            (t.get = function (r) {
                return this.has(r) ? this.dehanceValue_(this.data_.get(r).get()) : this.dehanceValue_(void 0);
            }),
            (t.dehanceValue_ = function (r) {
                return this.dehancer !== void 0 ? this.dehancer(r) : r;
            }),
            (t.keys = function () {
                return this.keysAtom_.reportObserved(), this.data_.keys();
            }),
            (t.values = function () {
                var r = this,
                    i = this.keys();
                return Jo({
                    next: function () {
                        var s = i.next(),
                            a = s.done,
                            l = s.value;
                        return { done: a, value: a ? void 0 : r.get(l) };
                    },
                });
            }),
            (t.entries = function () {
                var r = this,
                    i = this.keys();
                return Jo({
                    next: function () {
                        var s = i.next(),
                            a = s.done,
                            l = s.value;
                        return { done: a, value: a ? void 0 : [l, r.get(l)] };
                    },
                });
            }),
            (t[r_] = function () {
                return this.entries();
            }),
            (t.forEach = function (r, i) {
                for (var o = ui(this), s; !(s = o()).done; ) {
                    var a = s.value,
                        l = a[0],
                        u = a[1];
                    r.call(i, u, l, this);
                }
            }),
            (t.merge = function (r) {
                var i = this;
                return (
                    Xr(r) && (r = new Map(r)),
                    Pn(function () {
                        Ln(r)
                            ? dw(r).forEach(function (o) {
                                  return i.set(o, r[o]);
                              })
                            : Array.isArray(r)
                            ? r.forEach(function (o) {
                                  var s = o[0],
                                      a = o[1];
                                  return i.set(s, a);
                              })
                            : Ji(r)
                            ? (r.constructor !== Map && oe(19, r),
                              r.forEach(function (o, s) {
                                  return i.set(s, o);
                              }))
                            : r != null && oe(20, r);
                    }),
                    this
                );
            }),
            (t.clear = function () {
                var r = this;
                Pn(function () {
                    Lg(function () {
                        for (var i = ui(r.keys()), o; !(o = i()).done; ) {
                            var s = o.value;
                            r.delete(s);
                        }
                    });
                });
            }),
            (t.replace = function (r) {
                var i = this;
                return (
                    Pn(function () {
                        for (var o = G1(r), s = new Map(), a = !1, l = ui(i.data_.keys()), u; !(u = l()).done; ) {
                            var c = u.value;
                            if (!o.has(c)) {
                                var d = i.delete(c);
                                if (d) a = !0;
                                else {
                                    var f = i.data_.get(c);
                                    s.set(c, f);
                                }
                            }
                        }
                        for (var p = ui(o.entries()), m; !(m = p()).done; ) {
                            var v = m.value,
                                O = v[0],
                                g = v[1],
                                h = i.data_.has(O);
                            if ((i.set(O, g), i.data_.has(O))) {
                                var _ = i.data_.get(O);
                                s.set(O, _), h || (a = !0);
                            }
                        }
                        if (!a)
                            if (i.data_.size !== s.size) i.keysAtom_.reportChanged();
                            else
                                for (var y = i.data_.keys(), P = s.keys(), N = y.next(), $ = P.next(); !N.done; ) {
                                    if (N.value !== $.value) {
                                        i.keysAtom_.reportChanged();
                                        break;
                                    }
                                    (N = y.next()), ($ = P.next());
                                }
                        i.data_ = s;
                    }),
                    this
                );
            }),
            (t.toString = function () {
                return "[object ObservableMap]";
            }),
            (t.toJSON = function () {
                return Array.from(this);
            }),
            (t.observe_ = function (r, i) {
                return Is(this, r);
            }),
            (t.intercept_ = function (r) {
                return Ts(this, r);
            }),
            Vd(e, [
                {
                    key: "size",
                    get: function () {
                        return this.keysAtom_.reportObserved(), this.data_.size;
                    },
                },
                {
                    key: i_,
                    get: function () {
                        return "Map";
                    },
                },
            ]),
            e
        );
    })(),
    Xr = Yr("ObservableMap", o_);
function G1(e) {
    if (Ji(e) || Xr(e)) return e;
    if (Array.isArray(e)) return new Map(e);
    if (Ln(e)) {
        var t = new Map();
        for (var n in e) t.set(n, e[n]);
        return t;
    } else return oe(21, e);
}
var s_,
    a_,
    q1 = {};
s_ = Symbol.iterator;
a_ = Symbol.toStringTag;
var l_ = (function () {
        function e(n, r, i) {
            var o = this;
            r === void 0 && (r = Br),
                i === void 0 && (i = "ObservableSet"),
                (this.name_ = void 0),
                (this[ee] = q1),
                (this.data_ = new Set()),
                (this.atom_ = void 0),
                (this.changeListeners_ = void 0),
                (this.interceptors_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = void 0),
                (this.name_ = i),
                Mt(Set) || oe(22),
                (this.enhancer_ = function (s, a) {
                    return r(s, a, i);
                }),
                hr(function () {
                    (o.atom_ = Eg(o.name_)), n && o.replace(n);
                });
        }
        var t = e.prototype;
        return (
            (t.dehanceValue_ = function (r) {
                return this.dehancer !== void 0 ? this.dehancer(r) : r;
            }),
            (t.clear = function () {
                var r = this;
                Pn(function () {
                    Lg(function () {
                        for (var i = ui(r.data_.values()), o; !(o = i()).done; ) {
                            var s = o.value;
                            r.delete(s);
                        }
                    });
                });
            }),
            (t.forEach = function (r, i) {
                for (var o = ui(this), s; !(s = o()).done; ) {
                    var a = s.value;
                    r.call(i, a, a, this);
                }
            }),
            (t.add = function (r) {
                var i = this;
                if ((this.atom_, Ct(this))) {
                    var o = Rt(this, { type: Xn, object: this, newValue: r });
                    if (!o) return this;
                }
                if (!this.has(r)) {
                    Pn(function () {
                        i.data_.add(i.enhancer_(r, void 0)), i.atom_.reportChanged();
                    });
                    var s = !1,
                        a = Xt(this),
                        l = a || s ? { observableKind: "set", debugObjectName: this.name_, type: Xn, object: this, newValue: r } : null;
                    a && Jt(this, l);
                }
                return this;
            }),
            (t.delete = function (r) {
                var i = this;
                if (Ct(this)) {
                    var o = Rt(this, { type: Ba, object: this, oldValue: r });
                    if (!o) return !1;
                }
                if (this.has(r)) {
                    var s = !1,
                        a = Xt(this),
                        l = a || s ? { observableKind: "set", debugObjectName: this.name_, type: Ba, object: this, oldValue: r } : null;
                    return (
                        Pn(function () {
                            i.atom_.reportChanged(), i.data_.delete(r);
                        }),
                        a && Jt(this, l),
                        !0
                    );
                }
                return !1;
            }),
            (t.has = function (r) {
                return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(r));
            }),
            (t.entries = function () {
                var r = 0,
                    i = Array.from(this.keys()),
                    o = Array.from(this.values());
                return Jo({
                    next: function () {
                        var a = r;
                        return (r += 1), a < o.length ? { value: [i[a], o[a]], done: !1 } : { done: !0 };
                    },
                });
            }),
            (t.keys = function () {
                return this.values();
            }),
            (t.values = function () {
                this.atom_.reportObserved();
                var r = this,
                    i = 0,
                    o = Array.from(this.data_.values());
                return Jo({
                    next: function () {
                        return i < o.length ? { value: r.dehanceValue_(o[i++]), done: !1 } : { done: !0 };
                    },
                });
            }),
            (t.replace = function (r) {
                var i = this;
                return (
                    to(r) && (r = new Set(r)),
                    Pn(function () {
                        Array.isArray(r)
                            ? (i.clear(),
                              r.forEach(function (o) {
                                  return i.add(o);
                              }))
                            : Os(r)
                            ? (i.clear(),
                              r.forEach(function (o) {
                                  return i.add(o);
                              }))
                            : r != null && oe("Cannot initialize set from " + r);
                    }),
                    this
                );
            }),
            (t.observe_ = function (r, i) {
                return Is(this, r);
            }),
            (t.intercept_ = function (r) {
                return Ts(this, r);
            }),
            (t.toJSON = function () {
                return Array.from(this);
            }),
            (t.toString = function () {
                return "[object ObservableSet]";
            }),
            (t[s_] = function () {
                return this.values();
            }),
            Vd(e, [
                {
                    key: "size",
                    get: function () {
                        return this.atom_.reportObserved(), this.data_.size;
                    },
                },
                {
                    key: a_,
                    get: function () {
                        return "Set";
                    },
                },
            ]),
            e
        );
    })(),
    to = Yr("ObservableSet", l_),
    bp = Object.create(null),
    kp = "remove",
    u_ = (function () {
        function e(n, r, i, o) {
            r === void 0 && (r = new Map()),
                o === void 0 && (o = Vw),
                (this.target_ = void 0),
                (this.values_ = void 0),
                (this.name_ = void 0),
                (this.defaultAnnotation_ = void 0),
                (this.keysAtom_ = void 0),
                (this.changeListeners_ = void 0),
                (this.interceptors_ = void 0),
                (this.proxy_ = void 0),
                (this.isPlainObject_ = void 0),
                (this.appliedAnnotations_ = void 0),
                (this.pendingKeys_ = void 0),
                (this.target_ = n),
                (this.values_ = r),
                (this.name_ = i),
                (this.defaultAnnotation_ = o),
                (this.keysAtom_ = new Cs("ObservableObject.keys")),
                (this.isPlainObject_ = Ln(this.target_));
        }
        var t = e.prototype;
        return (
            (t.getObservablePropValue_ = function (r) {
                return this.values_.get(r).get();
            }),
            (t.setObservablePropValue_ = function (r, i) {
                var o = this.values_.get(r);
                if (o instanceof Fi) return o.set(i), !0;
                if (Ct(this)) {
                    var s = Rt(this, { type: pn, object: this.proxy_ || this.target_, name: r, newValue: i });
                    if (!s) return null;
                    i = s.newValue;
                }
                if (((i = o.prepareNewValue_(i)), i !== U.UNCHANGED)) {
                    var a = Xt(this),
                        l = !1,
                        u = a || l ? { type: pn, observableKind: "object", debugObjectName: this.name_, object: this.proxy_ || this.target_, oldValue: o.value_, name: r, newValue: i } : null;
                    o.setNewValue_(i), a && Jt(this, u);
                }
                return !0;
            }),
            (t.get_ = function (r) {
                return U.trackingDerivation && !Rn(this.target_, r) && this.has_(r), this.target_[r];
            }),
            (t.set_ = function (r, i, o) {
                return (
                    o === void 0 && (o = !1),
                    Rn(this.target_, r)
                        ? this.values_.has(r)
                            ? this.setObservablePropValue_(r, i)
                            : o
                            ? Reflect.set(this.target_, r, i)
                            : ((this.target_[r] = i), !0)
                        : this.extend_(r, { value: i, enumerable: !0, writable: !0, configurable: !0 }, this.defaultAnnotation_, o)
                );
            }),
            (t.has_ = function (r) {
                if (!U.trackingDerivation) return r in this.target_;
                this.pendingKeys_ || (this.pendingKeys_ = new Map());
                var i = this.pendingKeys_.get(r);
                return i || ((i = new xr(r in this.target_, Cl, "ObservableObject.key?", !1)), this.pendingKeys_.set(r, i)), i.get();
            }),
            (t.make_ = function (r, i) {
                if ((i === !0 && (i = this.defaultAnnotation_), i !== !1)) {
                    if (!(r in this.target_)) {
                        var o;
                        if ((o = this.target_[un]) != null && o[r]) return;
                        oe(1, i.annotationType_, this.name_ + "." + r.toString());
                    }
                    for (var s = this.target_; s && s !== Ol; ) {
                        var a = Na(s, r);
                        if (a) {
                            var l = i.make_(this, r, a, s);
                            if (l === 0) return;
                            if (l === 1) break;
                        }
                        s = Object.getPrototypeOf(s);
                    }
                    Op(this, i, r);
                }
            }),
            (t.extend_ = function (r, i, o, s) {
                if ((s === void 0 && (s = !1), o === !0 && (o = this.defaultAnnotation_), o === !1)) return this.defineProperty_(r, i, s);
                var a = o.extend_(this, r, i, s);
                return a && Op(this, o, r), a;
            }),
            (t.defineProperty_ = function (r, i, o) {
                o === void 0 && (o = !1), this.keysAtom_;
                try {
                    Tt();
                    var s = this.delete_(r);
                    if (!s) return s;
                    if (Ct(this)) {
                        var a = Rt(this, { object: this.proxy_ || this.target_, name: r, type: Xn, newValue: i.value });
                        if (!a) return null;
                        var l = a.newValue;
                        i.value !== l && (i = Ur({}, i, { value: l }));
                    }
                    if (o) {
                        if (!Reflect.defineProperty(this.target_, r, i)) return !1;
                    } else dn(this.target_, r, i);
                    this.notifyPropertyAddition_(r, i.value);
                } finally {
                    It();
                }
                return !0;
            }),
            (t.defineObservableProperty_ = function (r, i, o, s) {
                s === void 0 && (s = !1), this.keysAtom_;
                try {
                    Tt();
                    var a = this.delete_(r);
                    if (!a) return a;
                    if (Ct(this)) {
                        var l = Rt(this, { object: this.proxy_ || this.target_, name: r, type: Xn, newValue: i });
                        if (!l) return null;
                        i = l.newValue;
                    }
                    var u = Pp(r),
                        c = { configurable: U.safeDescriptors ? this.isPlainObject_ : !0, enumerable: !0, get: u.get, set: u.set };
                    if (s) {
                        if (!Reflect.defineProperty(this.target_, r, c)) return !1;
                    } else dn(this.target_, r, c);
                    var d = new xr(i, o, "ObservableObject.key", !1);
                    this.values_.set(r, d), this.notifyPropertyAddition_(r, d.value_);
                } finally {
                    It();
                }
                return !0;
            }),
            (t.defineComputedProperty_ = function (r, i, o) {
                o === void 0 && (o = !1), this.keysAtom_;
                try {
                    Tt();
                    var s = this.delete_(r);
                    if (!s) return s;
                    if (Ct(this)) {
                        var a = Rt(this, { object: this.proxy_ || this.target_, name: r, type: Xn, newValue: void 0 });
                        if (!a) return null;
                    }
                    i.name || (i.name = "ObservableObject.key"), (i.context = this.proxy_ || this.target_);
                    var l = Pp(r),
                        u = { configurable: U.safeDescriptors ? this.isPlainObject_ : !0, enumerable: !1, get: l.get, set: l.set };
                    if (o) {
                        if (!Reflect.defineProperty(this.target_, r, u)) return !1;
                    } else dn(this.target_, r, u);
                    this.values_.set(r, new Fi(i)), this.notifyPropertyAddition_(r, void 0);
                } finally {
                    It();
                }
                return !0;
            }),
            (t.delete_ = function (r, i) {
                if ((i === void 0 && (i = !1), this.keysAtom_, !Rn(this.target_, r))) return !0;
                if (Ct(this)) {
                    var o = Rt(this, { object: this.proxy_ || this.target_, name: r, type: kp });
                    if (!o) return null;
                }
                try {
                    var s, a;
                    Tt();
                    var l = Xt(this),
                        u = !1,
                        c = this.values_.get(r),
                        d = void 0;
                    if (!c && (l || u)) {
                        var f;
                        d = (f = Na(this.target_, r)) == null ? void 0 : f.value;
                    }
                    if (i) {
                        if (!Reflect.deleteProperty(this.target_, r)) return !1;
                    } else delete this.target_[r];
                    if ((c && (this.values_.delete(r), c instanceof xr && (d = c.value_), jg(c)), this.keysAtom_.reportChanged(), (s = this.pendingKeys_) == null || (a = s.get(r)) == null || a.set(r in this.target_), l || u)) {
                        var p = { type: kp, observableKind: "object", object: this.proxy_ || this.target_, debugObjectName: this.name_, oldValue: d, name: r };
                        l && Jt(this, p);
                    }
                } finally {
                    It();
                }
                return !0;
            }),
            (t.observe_ = function (r, i) {
                return Is(this, r);
            }),
            (t.intercept_ = function (r) {
                return Ts(this, r);
            }),
            (t.notifyPropertyAddition_ = function (r, i) {
                var o,
                    s,
                    a = Xt(this),
                    l = !1;
                if (a || l) {
                    var u = a || l ? { type: Xn, observableKind: "object", debugObjectName: this.name_, object: this.proxy_ || this.target_, name: r, newValue: i } : null;
                    a && Jt(this, u);
                }
                (o = this.pendingKeys_) == null || (s = o.get(r)) == null || s.set(!0), this.keysAtom_.reportChanged();
            }),
            (t.ownKeys_ = function () {
                return this.keysAtom_.reportObserved(), Li(this.target_);
            }),
            (t.keys_ = function () {
                return this.keysAtom_.reportObserved(), Object.keys(this.target_);
            }),
            e
        );
    })();
function Jr(e, t) {
    var n;
    if (Rn(e, ee)) return e;
    var r = (n = t == null ? void 0 : t.name) != null ? n : "ObservableObject",
        i = new u_(e, new Map(), String(r), Zw(t));
    return Ps(e, ee, i), e;
}
var Q1 = Yr("ObservableObjectAdministration", u_);
function Pp(e) {
    return (
        bp[e] ||
        (bp[e] = {
            get: function () {
                return this[ee].getObservablePropValue_(e);
            },
            set: function (n) {
                return this[ee].setObservablePropValue_(e, n);
            },
        })
    );
}
function Xo(e) {
    return Al(e) ? Q1(e[ee]) : !1;
}
function Op(e, t, n) {
    var r;
    (r = e.target_[un]) == null || delete r[n];
}
var Y1 = d_(0),
    K1 = (function () {
        var e = !1,
            t = {};
        return (
            Object.defineProperty(t, "0", {
                set: function () {
                    e = !0;
                },
            }),
            (Object.create(t)[0] = 1),
            e === !1
        );
    })(),
    cu = 0,
    c_ = function () {};
function X1(e, t) {
    Object.setPrototypeOf ? Object.setPrototypeOf(e.prototype, t) : e.prototype.__proto__ !== void 0 ? (e.prototype.__proto__ = t) : (e.prototype = t);
}
X1(c_, Array.prototype);
var qd = (function (e, t, n) {
    Sg(r, e);
    function r(o, s, a, l) {
        var u;
        return (
            a === void 0 && (a = "ObservableArray"),
            l === void 0 && (l = !1),
            (u = e.call(this) || this),
            hr(function () {
                var c = new Gd(a, s, l, !0);
                (c.proxy_ = au(u)), mg(au(u), ee, c), o && o.length && u.spliceWithArray(0, 0, o), K1 && Object.defineProperty(au(u), "0", Y1);
            }),
            u
        );
    }
    var i = r.prototype;
    return (
        (i.concat = function () {
            this[ee].atom_.reportObserved();
            for (var s = arguments.length, a = new Array(s), l = 0; l < s; l++) a[l] = arguments[l];
            return Array.prototype.concat.apply(
                this.slice(),
                a.map(function (u) {
                    return Nl(u) ? u.slice() : u;
                })
            );
        }),
        (i[n] = function () {
            var o = this,
                s = 0;
            return Jo({
                next: function () {
                    return s < o.length ? { value: o[s++], done: !1 } : { done: !0, value: void 0 };
                },
            });
        }),
        Vd(r, [
            {
                key: "length",
                get: function () {
                    return this[ee].getArrayLength_();
                },
                set: function (s) {
                    this[ee].setArrayLength_(s);
                },
            },
            {
                key: t,
                get: function () {
                    return "Array";
                },
            },
        ]),
        r
    );
})(c_, Symbol.toStringTag, Symbol.iterator);
Object.entries(Ua).forEach(function (e) {
    var t = e[0],
        n = e[1];
    t !== "concat" && Ps(qd.prototype, t, n);
});
function d_(e) {
    return {
        enumerable: !1,
        configurable: !0,
        get: function () {
            return this[ee].get_(e);
        },
        set: function (n) {
            this[ee].set_(e, n);
        },
    };
}
function J1(e) {
    dn(qd.prototype, "" + e, d_(e));
}
function f_(e) {
    if (e > cu) {
        for (var t = cu; t < e + 100; t++) J1(t);
        cu = e;
    }
}
f_(1e3);
function Z1(e, t, n) {
    return new qd(e, t, n);
}
function Ui(e, t) {
    if (typeof e == "object" && e !== null) {
        if (Nl(e)) return t !== void 0 && oe(23), e[ee].atom_;
        if (to(e)) return e.atom_;
        if (Xr(e)) {
            if (t === void 0) return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return n || oe(25, t, cc(e)), n;
        }
        if (Xo(e)) {
            if (!t) return oe(26);
            var r = e[ee].values_.get(t);
            return r || oe(27, t, cc(e)), r;
        }
        if (zd(e) || xl(e) || $a(e)) return e;
    } else if (Mt(e) && $a(e[ee])) return e[ee];
    oe(28);
}
function Ll(e, t) {
    if ((e || oe(29), t !== void 0)) return Ll(Ui(e, t));
    if (zd(e) || xl(e) || $a(e) || Xr(e) || to(e)) return e;
    if (e[ee]) return e[ee];
    oe(24, e);
}
function cc(e, t) {
    var n;
    if (t !== void 0) n = Ui(e, t);
    else {
        if (Dl(e)) return e.name;
        Xo(e) || Xr(e) || to(e) ? (n = Ll(e)) : (n = Ui(e));
    }
    return n.name_;
}
function hr(e) {
    var t = Kr(),
        n = Tl(!0);
    Tt();
    try {
        return e();
    } finally {
        It(), Il(n), Tn(t);
    }
}
var Ap = Ol.toString;
function Qd(e, t, n) {
    return n === void 0 && (n = -1), dc(e, t, n);
}
function dc(e, t, n, r, i) {
    if (e === t) return e !== 0 || 1 / e === 1 / t;
    if (e == null || t == null) return !1;
    if (e !== e) return t !== t;
    var o = typeof e;
    if (o !== "function" && o !== "object" && typeof t != "object") return !1;
    var s = Ap.call(e);
    if (s !== Ap.call(t)) return !1;
    switch (s) {
        case "[object RegExp]":
        case "[object String]":
            return "" + e == "" + t;
        case "[object Number]":
            return +e != +e ? +t != +t : +e == 0 ? 1 / +e === 1 / t : +e == +t;
        case "[object Date]":
        case "[object Boolean]":
            return +e == +t;
        case "[object Symbol]":
            return typeof Symbol < "u" && Symbol.valueOf.call(e) === Symbol.valueOf.call(t);
        case "[object Map]":
        case "[object Set]":
            n >= 0 && n++;
            break;
    }
    (e = Cp(e)), (t = Cp(t));
    var a = s === "[object Array]";
    if (!a) {
        if (typeof e != "object" || typeof t != "object") return !1;
        var l = e.constructor,
            u = t.constructor;
        if (l !== u && !(Mt(l) && l instanceof l && Mt(u) && u instanceof u) && "constructor" in e && "constructor" in t) return !1;
    }
    if (n === 0) return !1;
    n < 0 && (n = -1), (r = r || []), (i = i || []);
    for (var c = r.length; c--; ) if (r[c] === e) return i[c] === t;
    if ((r.push(e), i.push(t), a)) {
        if (((c = e.length), c !== t.length)) return !1;
        for (; c--; ) if (!dc(e[c], t[c], n - 1, r, i)) return !1;
    } else {
        var d = Object.keys(e),
            f;
        if (((c = d.length), Object.keys(t).length !== c)) return !1;
        for (; c--; ) if (((f = d[c]), !(Rn(t, f) && dc(e[f], t[f], n - 1, r, i)))) return !1;
    }
    return r.pop(), i.pop(), !0;
}
function Cp(e) {
    return Nl(e) ? e.slice() : Ji(e) || Xr(e) || Os(e) || to(e) ? Array.from(e.entries()) : e;
}
function Jo(e) {
    return (e[Symbol.iterator] = eS), e;
}
function eS() {
    return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
    var t = Bd();
    typeof t[e] > "u" && oe("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: _1, extras: { getDebugName: cc }, $mobx: ee });
var p_ = { exports: {} },
    bt = {},
    h_ = { exports: {} },
    v_ = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(b, T) {
        var B = b.length;
        b.push(T);
        e: for (; 0 < B; ) {
            var J = (B - 1) >>> 1,
                Q = b[J];
            if (0 < i(Q, T)) (b[J] = T), (b[B] = Q), (B = J);
            else break e;
        }
    }
    function n(b) {
        return b.length === 0 ? null : b[0];
    }
    function r(b) {
        if (b.length === 0) return null;
        var T = b[0],
            B = b.pop();
        if (B !== T) {
            b[0] = B;
            e: for (var J = 0, Q = b.length, re = Q >>> 1; J < re; ) {
                var te = 2 * (J + 1) - 1,
                    vt = b[te],
                    Ie = te + 1,
                    jt = b[Ie];
                if (0 > i(vt, B)) Ie < Q && 0 > i(jt, vt) ? ((b[J] = jt), (b[Ie] = B), (J = Ie)) : ((b[J] = vt), (b[te] = B), (J = te));
                else if (Ie < Q && 0 > i(jt, B)) (b[J] = jt), (b[Ie] = B), (J = Ie);
                else break e;
            }
        }
        return T;
    }
    function i(b, T) {
        var B = b.sortIndex - T.sortIndex;
        return B !== 0 ? B : b.id - T.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function () {
            return o.now();
        };
    } else {
        var s = Date,
            a = s.now();
        e.unstable_now = function () {
            return s.now() - a;
        };
    }
    var l = [],
        u = [],
        c = 1,
        d = null,
        f = 3,
        p = !1,
        m = !1,
        v = !1,
        O = typeof setTimeout == "function" ? setTimeout : null,
        g = typeof clearTimeout == "function" ? clearTimeout : null,
        h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function _(b) {
        for (var T = n(u); T !== null; ) {
            if (T.callback === null) r(u);
            else if (T.startTime <= b) r(u), (T.sortIndex = T.expirationTime), t(l, T);
            else break;
            T = n(u);
        }
    }
    function y(b) {
        if (((v = !1), _(b), !m))
            if (n(l) !== null) (m = !0), C(P);
            else {
                var T = n(u);
                T !== null && R(y, T.startTime - b);
            }
    }
    function P(b, T) {
        (m = !1), v && ((v = !1), g(F), (F = -1)), (p = !0);
        var B = f;
        try {
            for (_(T), d = n(l); d !== null && (!(d.expirationTime > T) || (b && !Ee())); ) {
                var J = d.callback;
                if (typeof J == "function") {
                    (d.callback = null), (f = d.priorityLevel);
                    var Q = J(d.expirationTime <= T);
                    (T = e.unstable_now()), typeof Q == "function" ? (d.callback = Q) : d === n(l) && r(l), _(T);
                } else r(l);
                d = n(l);
            }
            if (d !== null) var re = !0;
            else {
                var te = n(u);
                te !== null && R(y, te.startTime - T), (re = !1);
            }
            return re;
        } finally {
            (d = null), (f = B), (p = !1);
        }
    }
    var N = !1,
        $ = null,
        F = -1,
        G = 5,
        K = -1;
    function Ee() {
        return !(e.unstable_now() - K < G);
    }
    function Ce() {
        if ($ !== null) {
            var b = e.unstable_now();
            K = b;
            var T = !0;
            try {
                T = $(!0, b);
            } finally {
                T ? je() : ((N = !1), ($ = null));
            }
        } else N = !1;
    }
    var je;
    if (typeof h == "function")
        je = function () {
            h(Ce);
        };
    else if (typeof MessageChannel < "u") {
        var D = new MessageChannel(),
            E = D.port2;
        (D.port1.onmessage = Ce),
            (je = function () {
                E.postMessage(null);
            });
    } else
        je = function () {
            O(Ce, 0);
        };
    function C(b) {
        ($ = b), N || ((N = !0), je());
    }
    function R(b, T) {
        F = O(function () {
            b(e.unstable_now());
        }, T);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (b) {
            b.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            m || p || ((m = !0), C(P));
        }),
        (e.unstable_forceFrameRate = function (b) {
            0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : (G = 0 < b ? Math.floor(1e3 / b) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return f;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(l);
        }),
        (e.unstable_next = function (b) {
            switch (f) {
                case 1:
                case 2:
                case 3:
                    var T = 3;
                    break;
                default:
                    T = f;
            }
            var B = f;
            f = T;
            try {
                return b();
            } finally {
                f = B;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (b, T) {
            switch (b) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    b = 3;
            }
            var B = f;
            f = b;
            try {
                return T();
            } finally {
                f = B;
            }
        }),
        (e.unstable_scheduleCallback = function (b, T, B) {
            var J = e.unstable_now();
            switch ((typeof B == "object" && B !== null ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? J + B : J)) : (B = J), b)) {
                case 1:
                    var Q = -1;
                    break;
                case 2:
                    Q = 250;
                    break;
                case 5:
                    Q = 1073741823;
                    break;
                case 4:
                    Q = 1e4;
                    break;
                default:
                    Q = 5e3;
            }
            return (
                (Q = B + Q),
                (b = { id: c++, callback: T, priorityLevel: b, startTime: B, expirationTime: Q, sortIndex: -1 }),
                B > J ? ((b.sortIndex = B), t(u, b), n(l) === null && b === n(u) && (v ? (g(F), (F = -1)) : (v = !0), R(y, B - J))) : ((b.sortIndex = Q), t(l, b), m || p || ((m = !0), C(P))),
                b
            );
        }),
        (e.unstable_shouldYield = Ee),
        (e.unstable_wrapCallback = function (b) {
            var T = f;
            return function () {
                var B = f;
                f = T;
                try {
                    return b.apply(this, arguments);
                } finally {
                    f = B;
                }
            };
        });
})(v_);
h_.exports = v_;
var tS = h_.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var g_ = A,
    St = tS;
function M(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var __ = new Set(),
    Zo = {};
function Zr(e, t) {
    Bi(e, t), Bi(e + "Capture", t);
}
function Bi(e, t) {
    for (Zo[e] = t, e = 0; e < t.length; e++) __.add(t[e]);
}
var Mn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    fc = Object.prototype.hasOwnProperty,
    nS = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Rp = {},
    Tp = {};
function rS(e) {
    return fc.call(Tp, e) ? !0 : fc.call(Rp, e) ? !1 : nS.test(e) ? (Tp[e] = !0) : ((Rp[e] = !0), !1);
}
function iS(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function oS(e, t, n, r) {
    if (t === null || typeof t > "u" || iS(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function st(e, t, n, r, i, o, s) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4), (this.attributeName = r), (this.attributeNamespace = i), (this.mustUseProperty = n), (this.propertyName = e), (this.type = t), (this.sanitizeURL = o), (this.removeEmptyString = s);
}
var Qe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    Qe[e] = new st(e, 0, !1, e, null, !1, !1);
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0];
    Qe[t] = new st(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    Qe[e] = new st(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    Qe[e] = new st(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        Qe[e] = new st(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    Qe[e] = new st(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    Qe[e] = new st(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    Qe[e] = new st(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    Qe[e] = new st(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yd = /[\-:]([a-z])/g;
function Kd(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Yd, Kd);
        Qe[t] = new st(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(Yd, Kd);
    Qe[t] = new st(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Yd, Kd);
    Qe[t] = new st(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    Qe[e] = new st(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Qe.xlinkHref = new st("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    Qe[e] = new st(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xd(e, t, n, r) {
    var i = Qe.hasOwnProperty(t) ? Qe[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
        (oS(t, n, i, r) && (n = null),
        r || i === null
            ? rS(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : i.mustUseProperty
            ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
            : ((t = i.attributeName), (r = i.attributeNamespace), n === null ? e.removeAttribute(t) : ((i = i.type), (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var jn = g_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Hs = Symbol.for("react.element"),
    ci = Symbol.for("react.portal"),
    di = Symbol.for("react.fragment"),
    Jd = Symbol.for("react.strict_mode"),
    pc = Symbol.for("react.profiler"),
    m_ = Symbol.for("react.provider"),
    y_ = Symbol.for("react.context"),
    Zd = Symbol.for("react.forward_ref"),
    hc = Symbol.for("react.suspense"),
    vc = Symbol.for("react.suspense_list"),
    ef = Symbol.for("react.memo"),
    Hn = Symbol.for("react.lazy"),
    w_ = Symbol.for("react.offscreen"),
    Ip = Symbol.iterator;
function ao(e) {
    return e === null || typeof e != "object" ? null : ((e = (Ip && e[Ip]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Pe = Object.assign,
    du;
function So(e) {
    if (du === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            du = (t && t[1]) || "";
        }
    return (
        `
` +
        du +
        e
    );
}
var fu = !1;
function pu(e, t) {
    if (!e || fu) return "";
    fu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (u) {
                    var r = u;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (u) {
                    r = u;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (u) {
                r = u;
            }
            e();
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (
                var i = u.stack.split(`
`),
                    o = r.stack.split(`
`),
                    s = i.length - 1,
                    a = o.length - 1;
                1 <= s && 0 <= a && i[s] !== o[a];

            )
                a--;
            for (; 1 <= s && 0 <= a; s--, a--)
                if (i[s] !== o[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if ((s--, a--, 0 > a || i[s] !== o[a])) {
                                var l =
                                    `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
                            }
                        while (1 <= s && 0 <= a);
                    break;
                }
        }
    } finally {
        (fu = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? So(e) : "";
}
function sS(e) {
    switch (e.tag) {
        case 5:
            return So(e.type);
        case 16:
            return So("Lazy");
        case 13:
            return So("Suspense");
        case 19:
            return So("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = pu(e.type, !1)), e;
        case 11:
            return (e = pu(e.type.render, !1)), e;
        case 1:
            return (e = pu(e.type, !0)), e;
        default:
            return "";
    }
}
function gc(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case di:
            return "Fragment";
        case ci:
            return "Portal";
        case pc:
            return "Profiler";
        case Jd:
            return "StrictMode";
        case hc:
            return "Suspense";
        case vc:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case y_:
                return (e.displayName || "Context") + ".Consumer";
            case m_:
                return (e._context.displayName || "Context") + ".Provider";
            case Zd:
                var t = e.render;
                return (e = e.displayName), e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")), e;
            case ef:
                return (t = e.displayName || null), t !== null ? t : gc(e.type) || "Memo";
            case Hn:
                (t = e._payload), (e = e._init);
                try {
                    return gc(e(t));
                } catch {}
        }
    return null;
}
function aS(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (e = t.render), (e = e.displayName || e.name || ""), t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return gc(t);
        case 8:
            return t === Jd ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
    }
    return null;
}
function dr(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function S_(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function lS(e) {
    var t = S_(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            o = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return i.call(this);
                },
                set: function (s) {
                    (r = "" + s), o.call(this, s);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (s) {
                    r = "" + s;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function Ws(e) {
    e._valueTracker || (e._valueTracker = lS(e));
}
function E_(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = S_(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function ja(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function _c(e, t) {
    var n = t.checked;
    return Pe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function xp(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = dr(t.value != null ? t.value : n)), (e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null });
}
function b_(e, t) {
    (t = t.checked), t != null && Xd(e, "checked", t, !1);
}
function mc(e, t) {
    b_(e, t);
    var n = dr(t.value),
        r = t.type;
    if (n != null) r === "number" ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    t.hasOwnProperty("value") ? yc(e, t.type, n) : t.hasOwnProperty("defaultValue") && yc(e, t.type, dr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Dp(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
        (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
    }
    (n = e.name), n !== "" && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), n !== "" && (e.name = n);
}
function yc(e, t, n) {
    (t !== "number" || ja(e.ownerDocument) !== e) && (n == null ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Eo = Array.isArray;
function ki(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) (i = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + dr(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                (e[i].selected = !0), r && (e[i].defaultSelected = !0);
                return;
            }
            t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
    }
}
function wc(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
    return Pe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Np(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(M(92));
            if (Eo(n)) {
                if (1 < n.length) throw Error(M(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: dr(n) };
}
function k_(e, t) {
    var n = dr(t.value),
        r = dr(t.defaultValue);
    n != null && ((n = "" + n), n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Lp(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function P_(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function Sc(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? P_(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Gs,
    O_ = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, i) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, i);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for (Gs = Gs || document.createElement("div"), Gs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Gs.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function es(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var xo = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    uS = ["Webkit", "ms", "Moz", "O"];
Object.keys(xo).forEach(function (e) {
    uS.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xo[t] = xo[e]);
    });
});
function A_(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || (xo.hasOwnProperty(e) && xo[e]) ? ("" + t).trim() : t + "px";
}
function C_(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = A_(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
        }
}
var cS = Pe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ec(e, t) {
    if (t) {
        if (cS[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(M(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(M(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(M(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(M(62));
    }
}
function bc(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var kc = null;
function tf(e) {
    return (e = e.target || e.srcElement || window), e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Pc = null,
    Pi = null,
    Oi = null;
function Mp(e) {
    if ((e = Ns(e))) {
        if (typeof Pc != "function") throw Error(M(280));
        var t = e.stateNode;
        t && ((t = Bl(t)), Pc(e.stateNode, e.type, t));
    }
}
function R_(e) {
    Pi ? (Oi ? Oi.push(e) : (Oi = [e])) : (Pi = e);
}
function T_() {
    if (Pi) {
        var e = Pi,
            t = Oi;
        if (((Oi = Pi = null), Mp(e), t)) for (e = 0; e < t.length; e++) Mp(t[e]);
    }
}
function I_(e, t) {
    return e(t);
}
function x_() {}
var hu = !1;
function D_(e, t, n) {
    if (hu) return e(t, n);
    hu = !0;
    try {
        return I_(e, t, n);
    } finally {
        (hu = !1), (Pi !== null || Oi !== null) && (x_(), T_());
    }
}
function ts(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Bl(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))), (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(M(231, t, typeof n));
    return n;
}
var Oc = !1;
if (Mn)
    try {
        var lo = {};
        Object.defineProperty(lo, "passive", {
            get: function () {
                Oc = !0;
            },
        }),
            window.addEventListener("test", lo, lo),
            window.removeEventListener("test", lo, lo);
    } catch {
        Oc = !1;
    }
function dS(e, t, n, r, i, o, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u);
    } catch (c) {
        this.onError(c);
    }
}
var Do = !1,
    Va = null,
    za = !1,
    Ac = null,
    fS = {
        onError: function (e) {
            (Do = !0), (Va = e);
        },
    };
function pS(e, t, n, r, i, o, s, a, l) {
    (Do = !1), (Va = null), dS.apply(fS, arguments);
}
function hS(e, t, n, r, i, o, s, a, l) {
    if ((pS.apply(this, arguments), Do)) {
        if (Do) {
            var u = Va;
            (Do = !1), (Va = null);
        } else throw Error(M(198));
        za || ((za = !0), (Ac = u));
    }
}
function ei(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function N_(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
}
function Fp(e) {
    if (ei(e) !== e) throw Error(M(188));
}
function vS(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = ei(e)), t === null)) throw Error(M(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null) break;
        var o = i.alternate;
        if (o === null) {
            if (((r = i.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n) return Fp(i), e;
                if (o === r) return Fp(i), t;
                o = o.sibling;
            }
            throw Error(M(188));
        }
        if (n.return !== r.return) (n = i), (r = o);
        else {
            for (var s = !1, a = i.child; a; ) {
                if (a === n) {
                    (s = !0), (n = i), (r = o);
                    break;
                }
                if (a === r) {
                    (s = !0), (r = i), (n = o);
                    break;
                }
                a = a.sibling;
            }
            if (!s) {
                for (a = o.child; a; ) {
                    if (a === n) {
                        (s = !0), (n = o), (r = i);
                        break;
                    }
                    if (a === r) {
                        (s = !0), (r = o), (n = i);
                        break;
                    }
                    a = a.sibling;
                }
                if (!s) throw Error(M(189));
            }
        }
        if (n.alternate !== r) throw Error(M(190));
    }
    if (n.tag !== 3) throw Error(M(188));
    return n.stateNode.current === n ? e : t;
}
function L_(e) {
    return (e = vS(e)), e !== null ? M_(e) : null;
}
function M_(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = M_(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var F_ = St.unstable_scheduleCallback,
    $p = St.unstable_cancelCallback,
    gS = St.unstable_shouldYield,
    _S = St.unstable_requestPaint,
    Re = St.unstable_now,
    mS = St.unstable_getCurrentPriorityLevel,
    nf = St.unstable_ImmediatePriority,
    $_ = St.unstable_UserBlockingPriority,
    Ha = St.unstable_NormalPriority,
    yS = St.unstable_LowPriority,
    U_ = St.unstable_IdlePriority,
    Ml = null,
    hn = null;
function wS(e) {
    if (hn && typeof hn.onCommitFiberRoot == "function")
        try {
            hn.onCommitFiberRoot(Ml, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
}
var Zt = Math.clz32 ? Math.clz32 : bS,
    SS = Math.log,
    ES = Math.LN2;
function bS(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((SS(e) / ES) | 0)) | 0;
}
var qs = 64,
    Qs = 4194304;
function bo(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function Wa(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        o = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var a = s & ~i;
        a !== 0 ? (r = bo(a)) : ((o &= s), o !== 0 && (r = bo(o)));
    } else (s = n & ~i), s !== 0 ? (r = bo(s)) : o !== 0 && (r = bo(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))) return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0)) for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - Zt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
    return r;
}
function kS(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function PS(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var s = 31 - Zt(o),
            a = 1 << s,
            l = i[s];
        l === -1 ? (!(a & n) || a & r) && (i[s] = kS(a, t)) : l <= t && (e.expiredLanes |= a), (o &= ~a);
    }
}
function Cc(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function B_() {
    var e = qs;
    return (qs <<= 1), !(qs & 4194240) && (qs = 64), e;
}
function vu(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function xs(e, t, n) {
    (e.pendingLanes |= t), t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), (e = e.eventTimes), (t = 31 - Zt(t)), (e[t] = n);
}
function OS(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t), (e.suspendedLanes = 0), (e.pingedLanes = 0), (e.expiredLanes &= t), (e.mutableReadLanes &= t), (e.entangledLanes &= t), (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - Zt(n),
            o = 1 << i;
        (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
    }
}
function rf(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - Zt(n),
            i = 1 << r;
        (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
}
var pe = 0;
function j_(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var V_,
    of,
    z_,
    H_,
    W_,
    Rc = !1,
    Ys = [],
    tr = null,
    nr = null,
    rr = null,
    ns = new Map(),
    rs = new Map(),
    Yn = [],
    AS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
    );
function Up(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            tr = null;
            break;
        case "dragenter":
        case "dragleave":
            nr = null;
            break;
        case "mouseover":
        case "mouseout":
            rr = null;
            break;
        case "pointerover":
        case "pointerout":
            ns.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            rs.delete(t.pointerId);
    }
}
function uo(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }), t !== null && ((t = Ns(t)), t !== null && of(t)), e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function CS(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return (tr = uo(tr, e, t, n, r, i)), !0;
        case "dragenter":
            return (nr = uo(nr, e, t, n, r, i)), !0;
        case "mouseover":
            return (rr = uo(rr, e, t, n, r, i)), !0;
        case "pointerover":
            var o = i.pointerId;
            return ns.set(o, uo(ns.get(o) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return (o = i.pointerId), rs.set(o, uo(rs.get(o) || null, e, t, n, r, i)), !0;
    }
    return !1;
}
function G_(e) {
    var t = Ar(e.target);
    if (t !== null) {
        var n = ei(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = N_(n)), t !== null)) {
                    (e.blockedOn = t),
                        W_(e.priority, function () {
                            z_(n);
                        });
                    return;
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function wa(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Tc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (kc = r), n.target.dispatchEvent(r), (kc = null);
        } else return (t = Ns(n)), t !== null && of(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function Bp(e, t, n) {
    wa(e) && n.delete(t);
}
function RS() {
    (Rc = !1), tr !== null && wa(tr) && (tr = null), nr !== null && wa(nr) && (nr = null), rr !== null && wa(rr) && (rr = null), ns.forEach(Bp), rs.forEach(Bp);
}
function co(e, t) {
    e.blockedOn === t && ((e.blockedOn = null), Rc || ((Rc = !0), St.unstable_scheduleCallback(St.unstable_NormalPriority, RS)));
}
function is(e) {
    function t(i) {
        return co(i, e);
    }
    if (0 < Ys.length) {
        co(Ys[0], e);
        for (var n = 1; n < Ys.length; n++) {
            var r = Ys[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (tr !== null && co(tr, e), nr !== null && co(nr, e), rr !== null && co(rr, e), ns.forEach(t), rs.forEach(t), n = 0; n < Yn.length; n++) (r = Yn[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Yn.length && ((n = Yn[0]), n.blockedOn === null); ) G_(n), n.blockedOn === null && Yn.shift();
}
var Ai = jn.ReactCurrentBatchConfig,
    Ga = !0;
function TS(e, t, n, r) {
    var i = pe,
        o = Ai.transition;
    Ai.transition = null;
    try {
        (pe = 1), sf(e, t, n, r);
    } finally {
        (pe = i), (Ai.transition = o);
    }
}
function IS(e, t, n, r) {
    var i = pe,
        o = Ai.transition;
    Ai.transition = null;
    try {
        (pe = 4), sf(e, t, n, r);
    } finally {
        (pe = i), (Ai.transition = o);
    }
}
function sf(e, t, n, r) {
    if (Ga) {
        var i = Tc(e, t, n, r);
        if (i === null) Pu(e, t, r, qa, n), Up(e, r);
        else if (CS(i, e, t, n, r)) r.stopPropagation();
        else if ((Up(e, r), t & 4 && -1 < AS.indexOf(e))) {
            for (; i !== null; ) {
                var o = Ns(i);
                if ((o !== null && V_(o), (o = Tc(e, t, n, r)), o === null && Pu(e, t, r, qa, n), o === i)) break;
                i = o;
            }
            i !== null && r.stopPropagation();
        } else Pu(e, t, r, null, n);
    }
}
var qa = null;
function Tc(e, t, n, r) {
    if (((qa = null), (e = tf(r)), (e = Ar(e)), e !== null))
        if (((t = ei(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = N_(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (qa = e), null;
}
function q_(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (mS()) {
                case nf:
                    return 1;
                case $_:
                    return 4;
                case Ha:
                case yS:
                    return 16;
                case U_:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var Jn = null,
    af = null,
    Sa = null;
function Q_() {
    if (Sa) return Sa;
    var e,
        t = af,
        n = t.length,
        r,
        i = "value" in Jn ? Jn.value : Jn.textContent,
        o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
    return (Sa = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ea(e) {
    var t = e.keyCode;
    return "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ks() {
    return !0;
}
function jp() {
    return !1;
}
function kt(e) {
    function t(n, r, i, o, s) {
        (this._reactName = n), (this._targetInst = i), (this.type = r), (this.nativeEvent = o), (this.target = s), (this.currentTarget = null);
        for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
        return (this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Ks : jp), (this.isPropagationStopped = jp), this;
    }
    return (
        Pe(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), (this.isDefaultPrevented = Ks));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), (this.isPropagationStopped = Ks));
            },
            persist: function () {},
            isPersistent: Ks,
        }),
        t
    );
}
var no = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    lf = kt(no),
    Ds = Pe({}, no, { view: 0, detail: 0 }),
    xS = kt(Ds),
    gu,
    _u,
    fo,
    Fl = Pe({}, Ds, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: uf,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== fo && (fo && e.type === "mousemove" ? ((gu = e.screenX - fo.screenX), (_u = e.screenY - fo.screenY)) : (_u = gu = 0), (fo = e)), gu);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : _u;
        },
    }),
    Vp = kt(Fl),
    DS = Pe({}, Fl, { dataTransfer: 0 }),
    NS = kt(DS),
    LS = Pe({}, Ds, { relatedTarget: 0 }),
    mu = kt(LS),
    MS = Pe({}, no, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    FS = kt(MS),
    $S = Pe({}, no, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
    }),
    US = kt($S),
    BS = Pe({}, no, { data: 0 }),
    zp = kt(BS),
    jS = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
    VS = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    zS = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function HS(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = zS[e]) ? !!t[e] : !1;
}
function uf() {
    return HS;
}
var WS = Pe({}, Ds, {
        key: function (e) {
            if (e.key) {
                var t = jS[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress" ? ((e = Ea(e)), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? VS[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: uf,
        charCode: function (e) {
            return e.type === "keypress" ? Ea(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress" ? Ea(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
    }),
    GS = kt(WS),
    qS = Pe({}, Fl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
    Hp = kt(qS),
    QS = Pe({}, Ds, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: uf }),
    YS = kt(QS),
    KS = Pe({}, no, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    XS = kt(KS),
    JS = Pe({}, Fl, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    ZS = kt(JS),
    eE = [9, 13, 27, 32],
    cf = Mn && "CompositionEvent" in window,
    No = null;
Mn && "documentMode" in document && (No = document.documentMode);
var tE = Mn && "TextEvent" in window && !No,
    Y_ = Mn && (!cf || (No && 8 < No && 11 >= No)),
    Wp = " ",
    Gp = !1;
function K_(e, t) {
    switch (e) {
        case "keyup":
            return eE.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function X_(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var fi = !1;
function nE(e, t) {
    switch (e) {
        case "compositionend":
            return X_(t);
        case "keypress":
            return t.which !== 32 ? null : ((Gp = !0), Wp);
        case "textInput":
            return (e = t.data), e === Wp && Gp ? null : e;
        default:
            return null;
    }
}
function rE(e, t) {
    if (fi) return e === "compositionend" || (!cf && K_(e, t)) ? ((e = Q_()), (Sa = af = Jn = null), (fi = !1), e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return Y_ && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var iE = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function qp(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!iE[e.type] : t === "textarea";
}
function J_(e, t, n, r) {
    R_(r), (t = Qa(t, "onChange")), 0 < t.length && ((n = new lf("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var Lo = null,
    os = null;
function oE(e) {
    um(e, 0);
}
function $l(e) {
    var t = vi(e);
    if (E_(t)) return e;
}
function sE(e, t) {
    if (e === "change") return t;
}
var Z_ = !1;
if (Mn) {
    var yu;
    if (Mn) {
        var wu = "oninput" in document;
        if (!wu) {
            var Qp = document.createElement("div");
            Qp.setAttribute("oninput", "return;"), (wu = typeof Qp.oninput == "function");
        }
        yu = wu;
    } else yu = !1;
    Z_ = yu && (!document.documentMode || 9 < document.documentMode);
}
function Yp() {
    Lo && (Lo.detachEvent("onpropertychange", em), (os = Lo = null));
}
function em(e) {
    if (e.propertyName === "value" && $l(os)) {
        var t = [];
        J_(t, os, e, tf(e)), D_(oE, t);
    }
}
function aE(e, t, n) {
    e === "focusin" ? (Yp(), (Lo = t), (os = n), Lo.attachEvent("onpropertychange", em)) : e === "focusout" && Yp();
}
function lE(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return $l(os);
}
function uE(e, t) {
    if (e === "click") return $l(t);
}
function cE(e, t) {
    if (e === "input" || e === "change") return $l(t);
}
function dE(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var tn = typeof Object.is == "function" ? Object.is : dE;
function ss(e, t) {
    if (tn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!fc.call(t, i) || !tn(e[i], t[i])) return !1;
    }
    return !0;
}
function Kp(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function Xp(e, t) {
    var n = Kp(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = Kp(n);
    }
}
function tm(e, t) {
    return e && t ? (e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? tm(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1) : !1;
}
function nm() {
    for (var e = window, t = ja(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = ja(e.document);
    }
    return t;
}
function df(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && ((t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) || t === "textarea" || e.contentEditable === "true");
}
function fE(e) {
    var t = nm(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && tm(n.ownerDocument.documentElement, n)) {
        if (r !== null && df(n)) {
            if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n)) (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
            else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
                e = e.getSelection();
                var i = n.textContent.length,
                    o = Math.min(r.start, i);
                (r = r.end === void 0 ? o : Math.min(r.end, i)), !e.extend && o > r && ((i = r), (r = o), (o = i)), (i = Xp(n, o));
                var s = Xp(n, r);
                i &&
                    s &&
                    (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) &&
                    ((t = t.createRange()), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
}
var pE = Mn && "documentMode" in document && 11 >= document.documentMode,
    pi = null,
    Ic = null,
    Mo = null,
    xc = !1;
function Jp(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    xc ||
        pi == null ||
        pi !== ja(r) ||
        ((r = pi),
        "selectionStart" in r && df(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()), (r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset })),
        (Mo && ss(Mo, r)) || ((Mo = r), (r = Qa(Ic, "onSelect")), 0 < r.length && ((t = new lf("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = pi))));
}
function Xs(e, t) {
    var n = {};
    return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var hi = { animationend: Xs("Animation", "AnimationEnd"), animationiteration: Xs("Animation", "AnimationIteration"), animationstart: Xs("Animation", "AnimationStart"), transitionend: Xs("Transition", "TransitionEnd") },
    Su = {},
    rm = {};
Mn &&
    ((rm = document.createElement("div").style),
    "AnimationEvent" in window || (delete hi.animationend.animation, delete hi.animationiteration.animation, delete hi.animationstart.animation),
    "TransitionEvent" in window || delete hi.transitionend.transition);
function Ul(e) {
    if (Su[e]) return Su[e];
    if (!hi[e]) return e;
    var t = hi[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in rm) return (Su[e] = t[n]);
    return e;
}
var im = Ul("animationend"),
    om = Ul("animationiteration"),
    sm = Ul("animationstart"),
    am = Ul("transitionend"),
    lm = new Map(),
    Zp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
    );
function vr(e, t) {
    lm.set(e, t), Zr(t, [e]);
}
for (var Eu = 0; Eu < Zp.length; Eu++) {
    var bu = Zp[Eu],
        hE = bu.toLowerCase(),
        vE = bu[0].toUpperCase() + bu.slice(1);
    vr(hE, "on" + vE);
}
vr(im, "onAnimationEnd");
vr(om, "onAnimationIteration");
vr(sm, "onAnimationStart");
vr("dblclick", "onDoubleClick");
vr("focusin", "onFocus");
vr("focusout", "onBlur");
vr(am, "onTransitionEnd");
Bi("onMouseEnter", ["mouseout", "mouseover"]);
Bi("onMouseLeave", ["mouseout", "mouseover"]);
Bi("onPointerEnter", ["pointerout", "pointerover"]);
Bi("onPointerLeave", ["pointerout", "pointerover"]);
Zr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Zr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Zr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Zr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Zr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Zr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ko = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
    ),
    gE = new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));
function eh(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), hS(r, t, void 0, e), (e.currentTarget = null);
}
function um(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s],
                        l = a.instance,
                        u = a.currentTarget;
                    if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
                    eh(i, a, u), (o = l);
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (((a = r[s]), (l = a.instance), (u = a.currentTarget), (a = a.listener), l !== o && i.isPropagationStopped())) break e;
                    eh(i, a, u), (o = l);
                }
        }
    }
    if (za) throw ((e = Ac), (za = !1), (Ac = null), e);
}
function me(e, t) {
    var n = t[Fc];
    n === void 0 && (n = t[Fc] = new Set());
    var r = e + "__bubble";
    n.has(r) || (cm(t, e, 2, !1), n.add(r));
}
function ku(e, t, n) {
    var r = 0;
    t && (r |= 4), cm(n, e, r, t);
}
var Js = "_reactListening" + Math.random().toString(36).slice(2);
function as(e) {
    if (!e[Js]) {
        (e[Js] = !0),
            __.forEach(function (n) {
                n !== "selectionchange" && (gE.has(n) || ku(n, !1, e), ku(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Js] || ((t[Js] = !0), ku("selectionchange", !1, t));
    }
}
function cm(e, t, n, r) {
    switch (q_(t)) {
        case 1:
            var i = TS;
            break;
        case 4:
            i = IS;
            break;
        default:
            i = sf;
    }
    (n = i.bind(null, t, n, e)),
        (i = void 0),
        !Oc || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (i = !0),
        r ? (i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0)) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function Pu(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var l = s.tag;
                        if ((l === 3 || l === 4) && ((l = s.stateNode.containerInfo), l === i || (l.nodeType === 8 && l.parentNode === i))) return;
                        s = s.return;
                    }
                for (; a !== null; ) {
                    if (((s = Ar(a)), s === null)) return;
                    if (((l = s.tag), l === 5 || l === 6)) {
                        r = o = s;
                        continue e;
                    }
                    a = a.parentNode;
                }
            }
            r = r.return;
        }
    D_(function () {
        var u = o,
            c = tf(n),
            d = [];
        e: {
            var f = lm.get(e);
            if (f !== void 0) {
                var p = lf,
                    m = e;
                switch (e) {
                    case "keypress":
                        if (Ea(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        p = GS;
                        break;
                    case "focusin":
                        (m = "focus"), (p = mu);
                        break;
                    case "focusout":
                        (m = "blur"), (p = mu);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        p = mu;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        p = Vp;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        p = NS;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        p = YS;
                        break;
                    case im:
                    case om:
                    case sm:
                        p = FS;
                        break;
                    case am:
                        p = XS;
                        break;
                    case "scroll":
                        p = xS;
                        break;
                    case "wheel":
                        p = ZS;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        p = US;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        p = Hp;
                }
                var v = (t & 4) !== 0,
                    O = !v && e === "scroll",
                    g = v ? (f !== null ? f + "Capture" : null) : f;
                v = [];
                for (var h = u, _; h !== null; ) {
                    _ = h;
                    var y = _.stateNode;
                    if ((_.tag === 5 && y !== null && ((_ = y), g !== null && ((y = ts(h, g)), y != null && v.push(ls(h, y, _)))), O)) break;
                    h = h.return;
                }
                0 < v.length && ((f = new p(f, m, null, n, c)), d.push({ event: f, listeners: v }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (((f = e === "mouseover" || e === "pointerover"), (p = e === "mouseout" || e === "pointerout"), f && n !== kc && (m = n.relatedTarget || n.fromElement) && (Ar(m) || m[Fn]))) break e;
                if (
                    (p || f) &&
                    ((f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window),
                    p ? ((m = n.relatedTarget || n.toElement), (p = u), (m = m ? Ar(m) : null), m !== null && ((O = ei(m)), m !== O || (m.tag !== 5 && m.tag !== 6)) && (m = null)) : ((p = null), (m = u)),
                    p !== m)
                ) {
                    if (
                        ((v = Vp),
                        (y = "onMouseLeave"),
                        (g = "onMouseEnter"),
                        (h = "mouse"),
                        (e === "pointerout" || e === "pointerover") && ((v = Hp), (y = "onPointerLeave"), (g = "onPointerEnter"), (h = "pointer")),
                        (O = p == null ? f : vi(p)),
                        (_ = m == null ? f : vi(m)),
                        (f = new v(y, h + "leave", p, n, c)),
                        (f.target = O),
                        (f.relatedTarget = _),
                        (y = null),
                        Ar(c) === u && ((v = new v(g, h + "enter", m, n, c)), (v.target = _), (v.relatedTarget = O), (y = v)),
                        (O = y),
                        p && m)
                    )
                        t: {
                            for (v = p, g = m, h = 0, _ = v; _; _ = oi(_)) h++;
                            for (_ = 0, y = g; y; y = oi(y)) _++;
                            for (; 0 < h - _; ) (v = oi(v)), h--;
                            for (; 0 < _ - h; ) (g = oi(g)), _--;
                            for (; h--; ) {
                                if (v === g || (g !== null && v === g.alternate)) break t;
                                (v = oi(v)), (g = oi(g));
                            }
                            v = null;
                        }
                    else v = null;
                    p !== null && th(d, f, p, v, !1), m !== null && O !== null && th(d, O, m, v, !0);
                }
            }
            e: {
                if (((f = u ? vi(u) : window), (p = f.nodeName && f.nodeName.toLowerCase()), p === "select" || (p === "input" && f.type === "file"))) var P = sE;
                else if (qp(f))
                    if (Z_) P = cE;
                    else {
                        P = lE;
                        var N = aE;
                    }
                else (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (P = uE);
                if (P && (P = P(e, u))) {
                    J_(d, P, n, c);
                    break e;
                }
                N && N(e, f, u), e === "focusout" && (N = f._wrapperState) && N.controlled && f.type === "number" && yc(f, "number", f.value);
            }
            switch (((N = u ? vi(u) : window), e)) {
                case "focusin":
                    (qp(N) || N.contentEditable === "true") && ((pi = N), (Ic = u), (Mo = null));
                    break;
                case "focusout":
                    Mo = Ic = pi = null;
                    break;
                case "mousedown":
                    xc = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (xc = !1), Jp(d, n, c);
                    break;
                case "selectionchange":
                    if (pE) break;
                case "keydown":
                case "keyup":
                    Jp(d, n, c);
            }
            var $;
            if (cf)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var F = "onCompositionStart";
                            break e;
                        case "compositionend":
                            F = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            F = "onCompositionUpdate";
                            break e;
                    }
                    F = void 0;
                }
            else fi ? K_(e, n) && (F = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (F = "onCompositionStart");
            F &&
                (Y_ && n.locale !== "ko" && (fi || F !== "onCompositionStart" ? F === "onCompositionEnd" && fi && ($ = Q_()) : ((Jn = c), (af = "value" in Jn ? Jn.value : Jn.textContent), (fi = !0))),
                (N = Qa(u, F)),
                0 < N.length && ((F = new zp(F, e, null, n, c)), d.push({ event: F, listeners: N }), $ ? (F.data = $) : (($ = X_(n)), $ !== null && (F.data = $)))),
                ($ = tE ? nE(e, n) : rE(e, n)) && ((u = Qa(u, "onBeforeInput")), 0 < u.length && ((c = new zp("onBeforeInput", "beforeinput", null, n, c)), d.push({ event: c, listeners: u }), (c.data = $)));
        }
        um(d, t);
    });
}
function ls(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Qa(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e,
            o = i.stateNode;
        i.tag === 5 && o !== null && ((i = o), (o = ts(e, n)), o != null && r.unshift(ls(e, o, i)), (o = ts(e, t)), o != null && r.push(ls(e, o, i))), (e = e.return);
    }
    return r;
}
function oi(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function th(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
        var a = n,
            l = a.alternate,
            u = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 && u !== null && ((a = u), i ? ((l = ts(n, o)), l != null && s.unshift(ls(n, l, a))) : i || ((l = ts(n, o)), l != null && s.push(ls(n, l, a)))), (n = n.return);
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
}
var _E = /\r\n?/g,
    mE = /\u0000|\uFFFD/g;
function nh(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            _E,
            `
`
        )
        .replace(mE, "");
}
function Zs(e, t, n) {
    if (((t = nh(t)), nh(e) !== t && n)) throw Error(M(425));
}
function Ya() {}
var fsv = document.getElementsByClassName("fullscreen-view") 
var fsvm = document.getElementsByClassName("fullscreen-view__media") 
var fragment = document.createDocumentFragment(); 
fragment.appendChild(fsvm.item(0));
fsv.item(0).appendChild(fragment);
var Dc = null,
    Nc = null;
function Lc(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
    );
}
var Mc = typeof setTimeout == "function" ? setTimeout : void 0,
    yE = typeof clearTimeout == "function" ? clearTimeout : void 0,
    rh = typeof Promise == "function" ? Promise : void 0,
    wE =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof rh < "u"
            ? function (e) {
                  return rh.resolve(null).then(e).catch(SE);
              }
            : Mc;
function SE(e) {
    setTimeout(function () {
        throw e;
    });
}
function Ou(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
            if (((n = i.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(i), is(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = i;
    } while (n);
    is(t);
}
function ir(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
            if (t === "/$") return null;
        }
    }
    return e;
}
function ih(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
            } else n === "/$" && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var ro = Math.random().toString(36).slice(2),
    ln = "__reactFiber$" + ro,
    us = "__reactProps$" + ro,
    Fn = "__reactContainer$" + ro,
    Fc = "__reactEvents$" + ro,
    EE = "__reactListeners$" + ro,
    bE = "__reactHandles$" + ro;
function Ar(e) {
    var t = e[ln];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[Fn] || n[ln])) {
            if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
                for (e = ih(e); e !== null; ) {
                    if ((n = e[ln])) return n;
                    e = ih(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function Ns(e) {
    return (e = e[ln] || e[Fn]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function vi(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(M(33));
}
function Bl(e) {
    return e[us] || null;
}
var $c = [],
    gi = -1;
function gr(e) {
    return { current: e };
}
function we(e) {
    0 > gi || ((e.current = $c[gi]), ($c[gi] = null), gi--);
}
function ve(e, t) {
    gi++, ($c[gi] = e.current), (e.current = t);
}
var fr = {},
    Ze = gr(fr),
    dt = gr(!1),
    Vr = fr;
function ji(e, t) {
    var n = e.type.contextTypes;
    if (!n) return fr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        o;
    for (o in n) i[o] = t[o];
    return r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = i)), i;
}
function ft(e) {
    return (e = e.childContextTypes), e != null;
}
function Ka() {
    we(dt), we(Ze);
}
function oh(e, t, n) {
    if (Ze.current !== fr) throw Error(M(168));
    ve(Ze, t), ve(dt, n);
}
function dm(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(M(108, aS(e) || "Unknown", i));
    return Pe({}, n, r);
}
function Xa(e) {
    return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || fr), (Vr = Ze.current), ve(Ze, e), ve(dt, dt.current), !0;
}
function sh(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(M(169));
    n ? ((e = dm(e, t, Vr)), (r.__reactInternalMemoizedMergedChildContext = e), we(dt), we(Ze), ve(Ze, e)) : we(dt), ve(dt, n);
}
var kn = null,
    jl = !1,
    Au = !1;
function fm(e) {
    kn === null ? (kn = [e]) : kn.push(e);
}
function kE(e) {
    (jl = !0), fm(e);
}
function _r() {
    if (!Au && kn !== null) {
        Au = !0;
        var e = 0,
            t = pe;
        try {
            var n = kn;
            for (pe = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (kn = null), (jl = !1);
        } catch (i) {
            throw (kn !== null && (kn = kn.slice(e + 1)), F_(nf, _r), i);
        } finally {
            (pe = t), (Au = !1);
        }
    }
    return null;
}
var _i = [],
    mi = 0,
    Ja = null,
    Za = 0,
    Ot = [],
    At = 0,
    zr = null,
    An = 1,
    Cn = "";
function Er(e, t) {
    (_i[mi++] = Za), (_i[mi++] = Ja), (Ja = e), (Za = t);
}
function pm(e, t, n) {
    (Ot[At++] = An), (Ot[At++] = Cn), (Ot[At++] = zr), (zr = e);
    var r = An;
    e = Cn;
    var i = 32 - Zt(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var o = 32 - Zt(t) + i;
    if (30 < o) {
        var s = i - (i % 5);
        (o = (r & ((1 << s) - 1)).toString(32)), (r >>= s), (i -= s), (An = (1 << (32 - Zt(t) + i)) | (n << i) | r), (Cn = o + e);
    } else (An = (1 << o) | (n << i) | r), (Cn = e);
}
function ff(e) {
    e.return !== null && (Er(e, 1), pm(e, 1, 0));
}
function pf(e) {
    for (; e === Ja; ) (Ja = _i[--mi]), (_i[mi] = null), (Za = _i[--mi]), (_i[mi] = null);
    for (; e === zr; ) (zr = Ot[--At]), (Ot[At] = null), (Cn = Ot[--At]), (Ot[At] = null), (An = Ot[--At]), (Ot[At] = null);
}
var yt = null,
    mt = null,
    Se = !1,
    qt = null;
function hm(e, t) {
    var n = xt(5, null, null, 0);
    (n.elementType = "DELETED"), (n.stateNode = t), (n.return = e), (t = e.deletions), t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ah(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t), t !== null ? ((e.stateNode = t), (yt = e), (mt = ir(t.firstChild)), !0) : !1;
        case 6:
            return (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (yt = e), (mt = null), !0) : !1;
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = zr !== null ? { id: An, overflow: Cn } : null),
                      (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                      (n = xt(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (yt = e),
                      (mt = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function Uc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Bc(e) {
    if (Se) {
        var t = mt;
        if (t) {
            var n = t;
            if (!ah(e, t)) {
                if (Uc(e)) throw Error(M(418));
                t = ir(n.nextSibling);
                var r = yt;
                t && ah(e, t) ? hm(r, n) : ((e.flags = (e.flags & -4097) | 2), (Se = !1), (yt = e));
            }
        } else {
            if (Uc(e)) throw Error(M(418));
            (e.flags = (e.flags & -4097) | 2), (Se = !1), (yt = e);
        }
    }
}
function lh(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    yt = e;
}
function ea(e) {
    if (e !== yt) return !1;
    if (!Se) return lh(e), (Se = !0), !1;
    var t;
    if (((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== "head" && t !== "body" && !Lc(e.type, e.memoizedProps))), t && (t = mt))) {
        if (Uc(e)) throw (vm(), Error(M(418)));
        for (; t; ) hm(e, t), (t = ir(t.nextSibling));
    }
    if ((lh(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(M(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            mt = ir(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            mt = null;
        }
    } else mt = yt ? ir(e.stateNode.nextSibling) : null;
    return !0;
}
function vm() {
    for (var e = mt; e; ) e = ir(e.nextSibling);
}
function Vi() {
    (mt = yt = null), (Se = !1);
}
function hf(e) {
    qt === null ? (qt = [e]) : qt.push(e);
}
var PE = jn.ReactCurrentBatchConfig;
function Wt(e, t) {
    if (e && e.defaultProps) {
        (t = Pe({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
var el = gr(null),
    tl = null,
    yi = null,
    vf = null;
function gf() {
    vf = yi = tl = null;
}
function _f(e) {
    var t = el.current;
    we(el), (e._currentValue = t);
}
function jc(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (((e.childLanes & t) !== t ? ((e.childLanes |= t), r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)) break;
        e = e.return;
    }
}
function Ci(e, t) {
    (tl = e), (vf = yi = null), (e = e.dependencies), e !== null && e.firstContext !== null && (e.lanes & t && (ut = !0), (e.firstContext = null));
}
function Ft(e) {
    var t = e._currentValue;
    if (vf !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), yi === null)) {
            if (tl === null) throw Error(M(308));
            (yi = e), (tl.dependencies = { lanes: 0, firstContext: e });
        } else yi = yi.next = e;
    return t;
}
var Cr = null;
function mf(e) {
    Cr === null ? (Cr = [e]) : Cr.push(e);
}
function gm(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? ((n.next = n), mf(t)) : ((n.next = i.next), (i.next = n)), (t.interleaved = n), $n(e, r);
}
function $n(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var Wn = !1;
function yf(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function _m(e, t) {
    (e = e.updateQueue), t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function In(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function or(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), se & 2)) {
        var i = r.pending;
        return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), $n(e, n);
    }
    return (i = r.interleaved), i === null ? ((t.next = t), mf(r)) : ((t.next = i.next), (i.next = t)), (r.interleaved = t), $n(e, n);
}
function ba(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), rf(e, n);
    }
}
function uh(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
            o = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
                o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
            } while (n !== null);
            o === null ? (i = o = t) : (o = o.next = t);
        } else i = o = t;
        (n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }), (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function nl(e, t, n, r) {
    var i = e.updateQueue;
    Wn = !1;
    var o = i.firstBaseUpdate,
        s = i.lastBaseUpdate,
        a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a,
            u = l.next;
        (l.next = null), s === null ? (o = u) : (s.next = u), (s = l);
        var c = e.alternate;
        c !== null && ((c = c.updateQueue), (a = c.lastBaseUpdate), a !== s && (a === null ? (c.firstBaseUpdate = u) : (a.next = u), (c.lastBaseUpdate = l)));
    }
    if (o !== null) {
        var d = i.baseState;
        (s = 0), (c = u = l = null), (a = o);
        do {
            var f = a.lane,
                p = a.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = { eventTime: p, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
                e: {
                    var m = e,
                        v = a;
                    switch (((f = t), (p = n), v.tag)) {
                        case 1:
                            if (((m = v.payload), typeof m == "function")) {
                                d = m.call(p, d, f);
                                break e;
                            }
                            d = m;
                            break e;
                        case 3:
                            m.flags = (m.flags & -65537) | 128;
                        case 0:
                            if (((m = v.payload), (f = typeof m == "function" ? m.call(p, d, f) : m), f == null)) break e;
                            d = Pe({}, d, f);
                            break e;
                        case 2:
                            Wn = !0;
                    }
                }
                a.callback !== null && a.lane !== 0 && ((e.flags |= 64), (f = i.effects), f === null ? (i.effects = [a]) : f.push(a));
            } else (p = { eventTime: p, lane: f, tag: a.tag, payload: a.payload, callback: a.callback, next: null }), c === null ? ((u = c = p), (l = d)) : (c = c.next = p), (s |= f);
            if (((a = a.next), a === null)) {
                if (((a = i.shared.pending), a === null)) break;
                (f = a), (a = f.next), (f.next = null), (i.lastBaseUpdate = f), (i.shared.pending = null);
            }
        } while (!0);
        if ((c === null && (l = d), (i.baseState = l), (i.firstBaseUpdate = u), (i.lastBaseUpdate = c), (t = i.shared.interleaved), t !== null)) {
            i = t;
            do (s |= i.lane), (i = i.next);
            while (i !== t);
        } else o === null && (i.shared.lanes = 0);
        (Wr |= s), (e.lanes = s), (e.memoizedState = d);
    }
}
function ch(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (((r.callback = null), (r = n), typeof i != "function")) throw Error(M(191, i));
                i.call(r);
            }
        }
}
var mm = new g_.Component().refs;
function Vc(e, t, n, r) {
    (t = e.memoizedState), (n = n(r, t)), (n = n == null ? t : Pe({}, t, n)), (e.memoizedState = n), e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Vl = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? ei(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = ot(),
            i = ar(e),
            o = In(r, i);
        (o.payload = t), n != null && (o.callback = n), (t = or(e, o, i)), t !== null && (en(t, e, i, r), ba(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = ot(),
            i = ar(e),
            o = In(r, i);
        (o.tag = 1), (o.payload = t), n != null && (o.callback = n), (t = or(e, o, i)), t !== null && (en(t, e, i, r), ba(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = ot(),
            r = ar(e),
            i = In(n, r);
        (i.tag = 2), t != null && (i.callback = t), (t = or(e, i, r)), t !== null && (en(t, e, r, n), ba(t, e, r));
    },
};
function dh(e, t, n, r, i, o, s) {
    return (e = e.stateNode), typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !ss(n, r) || !ss(i, o) : !0;
}
function ym(e, t, n) {
    var r = !1,
        i = fr,
        o = t.contextType;
    return (
        typeof o == "object" && o !== null ? (o = Ft(o)) : ((i = ft(t) ? Vr : Ze.current), (r = t.contextTypes), (o = (r = r != null) ? ji(e, i) : fr)),
        (t = new t(n, o)),
        (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Vl),
        (e.stateNode = t),
        (t._reactInternals = e),
        r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = i), (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
    );
}
function fh(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Vl.enqueueReplaceState(t, t.state, null);
}
function zc(e, t, n, r) {
    var i = e.stateNode;
    (i.props = n), (i.state = e.memoizedState), (i.refs = mm), yf(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? (i.context = Ft(o)) : ((o = ft(t) ? Vr : Ze.current), (i.context = ji(e, o))),
        (i.state = e.memoizedState),
        (o = t.getDerivedStateFromProps),
        typeof o == "function" && (Vc(e, t, o, n), (i.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof i.getSnapshotBeforeUpdate == "function" ||
            (typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function") ||
            ((t = i.state),
            typeof i.componentWillMount == "function" && i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
            t !== i.state && Vl.enqueueReplaceState(i, i.state, null),
            nl(e, n, i, r),
            (i.state = e.memoizedState)),
        typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function po(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(M(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(M(147, e));
            var i = r,
                o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o
                ? t.ref
                : ((t = function (s) {
                      var a = i.refs;
                      a === mm && (a = i.refs = {}), s === null ? delete a[o] : (a[o] = s);
                  }),
                  (t._stringRef = o),
                  t);
        }
        if (typeof e != "string") throw Error(M(284));
        if (!n._owner) throw Error(M(290, e));
    }
    return e;
}
function ta(e, t) {
    throw ((e = Object.prototype.toString.call(t)), Error(M(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
}
function ph(e) {
    var t = e._init;
    return t(e._payload);
}
function wm(e) {
    function t(g, h) {
        if (e) {
            var _ = g.deletions;
            _ === null ? ((g.deletions = [h]), (g.flags |= 16)) : _.push(h);
        }
    }
    function n(g, h) {
        if (!e) return null;
        for (; h !== null; ) t(g, h), (h = h.sibling);
        return null;
    }
    function r(g, h) {
        for (g = new Map(); h !== null; ) h.key !== null ? g.set(h.key, h) : g.set(h.index, h), (h = h.sibling);
        return g;
    }
    function i(g, h) {
        return (g = lr(g, h)), (g.index = 0), (g.sibling = null), g;
    }
    function o(g, h, _) {
        return (g.index = _), e ? ((_ = g.alternate), _ !== null ? ((_ = _.index), _ < h ? ((g.flags |= 2), h) : _) : ((g.flags |= 2), h)) : ((g.flags |= 1048576), h);
    }
    function s(g) {
        return e && g.alternate === null && (g.flags |= 2), g;
    }
    function a(g, h, _, y) {
        return h === null || h.tag !== 6 ? ((h = Nu(_, g.mode, y)), (h.return = g), h) : ((h = i(h, _)), (h.return = g), h);
    }
    function l(g, h, _, y) {
        var P = _.type;
        return P === di
            ? c(g, h, _.props.children, y, _.key)
            : h !== null && (h.elementType === P || (typeof P == "object" && P !== null && P.$$typeof === Hn && ph(P) === h.type))
            ? ((y = i(h, _.props)), (y.ref = po(g, h, _)), (y.return = g), y)
            : ((y = Ra(_.type, _.key, _.props, null, g.mode, y)), (y.ref = po(g, h, _)), (y.return = g), y);
    }
    function u(g, h, _, y) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== _.containerInfo || h.stateNode.implementation !== _.implementation ? ((h = Lu(_, g.mode, y)), (h.return = g), h) : ((h = i(h, _.children || [])), (h.return = g), h);
    }
    function c(g, h, _, y, P) {
        return h === null || h.tag !== 7 ? ((h = Nr(_, g.mode, y, P)), (h.return = g), h) : ((h = i(h, _)), (h.return = g), h);
    }
    function d(g, h, _) {
        if ((typeof h == "string" && h !== "") || typeof h == "number") return (h = Nu("" + h, g.mode, _)), (h.return = g), h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case Hs:
                    return (_ = Ra(h.type, h.key, h.props, null, g.mode, _)), (_.ref = po(g, null, h)), (_.return = g), _;
                case ci:
                    return (h = Lu(h, g.mode, _)), (h.return = g), h;
                case Hn:
                    var y = h._init;
                    return d(g, y(h._payload), _);
            }
            if (Eo(h) || ao(h)) return (h = Nr(h, g.mode, _, null)), (h.return = g), h;
            ta(g, h);
        }
        return null;
    }
    function f(g, h, _, y) {
        var P = h !== null ? h.key : null;
        if ((typeof _ == "string" && _ !== "") || typeof _ == "number") return P !== null ? null : a(g, h, "" + _, y);
        if (typeof _ == "object" && _ !== null) {
            switch (_.$$typeof) {
                case Hs:
                    return _.key === P ? l(g, h, _, y) : null;
                case ci:
                    return _.key === P ? u(g, h, _, y) : null;
                case Hn:
                    return (P = _._init), f(g, h, P(_._payload), y);
            }
            if (Eo(_) || ao(_)) return P !== null ? null : c(g, h, _, y, null);
            ta(g, _);
        }
        return null;
    }
    function p(g, h, _, y, P) {
        if ((typeof y == "string" && y !== "") || typeof y == "number") return (g = g.get(_) || null), a(h, g, "" + y, P);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case Hs:
                    return (g = g.get(y.key === null ? _ : y.key) || null), l(h, g, y, P);
                case ci:
                    return (g = g.get(y.key === null ? _ : y.key) || null), u(h, g, y, P);
                case Hn:
                    var N = y._init;
                    return p(g, h, _, N(y._payload), P);
            }
            if (Eo(y) || ao(y)) return (g = g.get(_) || null), c(h, g, y, P, null);
            ta(h, y);
        }
        return null;
    }
    function m(g, h, _, y) {
        for (var P = null, N = null, $ = h, F = (h = 0), G = null; $ !== null && F < _.length; F++) {
            $.index > F ? ((G = $), ($ = null)) : (G = $.sibling);
            var K = f(g, $, _[F], y);
            if (K === null) {
                $ === null && ($ = G);
                break;
            }
            e && $ && K.alternate === null && t(g, $), (h = o(K, h, F)), N === null ? (P = K) : (N.sibling = K), (N = K), ($ = G);
        }
        if (F === _.length) return n(g, $), Se && Er(g, F), P;
        if ($ === null) {
            for (; F < _.length; F++) ($ = d(g, _[F], y)), $ !== null && ((h = o($, h, F)), N === null ? (P = $) : (N.sibling = $), (N = $));
            return Se && Er(g, F), P;
        }
        for ($ = r(g, $); F < _.length; F++) (G = p($, g, F, _[F], y)), G !== null && (e && G.alternate !== null && $.delete(G.key === null ? F : G.key), (h = o(G, h, F)), N === null ? (P = G) : (N.sibling = G), (N = G));
        return (
            e &&
                $.forEach(function (Ee) {
                    return t(g, Ee);
                }),
            Se && Er(g, F),
            P
        );
    }
    function v(g, h, _, y) {
        var P = ao(_);
        if (typeof P != "function") throw Error(M(150));
        if (((_ = P.call(_)), _ == null)) throw Error(M(151));
        for (var N = (P = null), $ = h, F = (h = 0), G = null, K = _.next(); $ !== null && !K.done; F++, K = _.next()) {
            $.index > F ? ((G = $), ($ = null)) : (G = $.sibling);
            var Ee = f(g, $, K.value, y);
            if (Ee === null) {
                $ === null && ($ = G);
                break;
            }
            e && $ && Ee.alternate === null && t(g, $), (h = o(Ee, h, F)), N === null ? (P = Ee) : (N.sibling = Ee), (N = Ee), ($ = G);
        }
        if (K.done) return n(g, $), Se && Er(g, F), P;
        if ($ === null) {
            for (; !K.done; F++, K = _.next()) (K = d(g, K.value, y)), K !== null && ((h = o(K, h, F)), N === null ? (P = K) : (N.sibling = K), (N = K));
            return Se && Er(g, F), P;
        }
        for ($ = r(g, $); !K.done; F++, K = _.next()) (K = p($, g, F, K.value, y)), K !== null && (e && K.alternate !== null && $.delete(K.key === null ? F : K.key), (h = o(K, h, F)), N === null ? (P = K) : (N.sibling = K), (N = K));
        return (
            e &&
                $.forEach(function (Ce) {
                    return t(g, Ce);
                }),
            Se && Er(g, F),
            P
        );
    }
    function O(g, h, _, y) {
        if ((typeof _ == "object" && _ !== null && _.type === di && _.key === null && (_ = _.props.children), typeof _ == "object" && _ !== null)) {
            switch (_.$$typeof) {
                case Hs:
                    e: {
                        for (var P = _.key, N = h; N !== null; ) {
                            if (N.key === P) {
                                if (((P = _.type), P === di)) {
                                    if (N.tag === 7) {
                                        n(g, N.sibling), (h = i(N, _.props.children)), (h.return = g), (g = h);
                                        break e;
                                    }
                                } else if (N.elementType === P || (typeof P == "object" && P !== null && P.$$typeof === Hn && ph(P) === N.type)) {
                                    n(g, N.sibling), (h = i(N, _.props)), (h.ref = po(g, N, _)), (h.return = g), (g = h);
                                    break e;
                                }
                                n(g, N);
                                break;
                            } else t(g, N);
                            N = N.sibling;
                        }
                        _.type === di ? ((h = Nr(_.props.children, g.mode, y, _.key)), (h.return = g), (g = h)) : ((y = Ra(_.type, _.key, _.props, null, g.mode, y)), (y.ref = po(g, h, _)), (y.return = g), (g = y));
                    }
                    return s(g);
                case ci:
                    e: {
                        for (N = _.key; h !== null; ) {
                            if (h.key === N)
                                if (h.tag === 4 && h.stateNode.containerInfo === _.containerInfo && h.stateNode.implementation === _.implementation) {
                                    n(g, h.sibling), (h = i(h, _.children || [])), (h.return = g), (g = h);
                                    break e;
                                } else {
                                    n(g, h);
                                    break;
                                }
                            else t(g, h);
                            h = h.sibling;
                        }
                        (h = Lu(_, g.mode, y)), (h.return = g), (g = h);
                    }
                    return s(g);
                case Hn:
                    return (N = _._init), O(g, h, N(_._payload), y);
            }
            if (Eo(_)) return m(g, h, _, y);
            if (ao(_)) return v(g, h, _, y);
            ta(g, _);
        }
        return (typeof _ == "string" && _ !== "") || typeof _ == "number"
            ? ((_ = "" + _), h !== null && h.tag === 6 ? (n(g, h.sibling), (h = i(h, _)), (h.return = g), (g = h)) : (n(g, h), (h = Nu(_, g.mode, y)), (h.return = g), (g = h)), s(g))
            : n(g, h);
    }
    return O;
}
var zi = wm(!0),
    Sm = wm(!1),
    Ls = {},
    vn = gr(Ls),
    cs = gr(Ls),
    ds = gr(Ls);
function Rr(e) {
    if (e === Ls) throw Error(M(174));
    return e;
}
function wf(e, t) {
    switch ((ve(ds, t), ve(cs, e), ve(vn, Ls), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Sc(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Sc(t, e));
    }
    we(vn), ve(vn, t);
}
function Hi() {
    we(vn), we(cs), we(ds);
}
function Em(e) {
    Rr(ds.current);
    var t = Rr(vn.current),
        n = Sc(t, e.type);
    t !== n && (ve(cs, e), ve(vn, n));
}
function Sf(e) {
    cs.current === e && (we(vn), we(cs));
}
var be = gr(0);
function rl(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var Cu = [];
function Ef() {
    for (var e = 0; e < Cu.length; e++) Cu[e]._workInProgressVersionPrimary = null;
    Cu.length = 0;
}
var ka = jn.ReactCurrentDispatcher,
    Ru = jn.ReactCurrentBatchConfig,
    Hr = 0,
    ke = null,
    De = null,
    Ue = null,
    il = !1,
    Fo = !1,
    fs = 0,
    OE = 0;
function Ye() {
    throw Error(M(321));
}
function bf(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!tn(e[n], t[n])) return !1;
    return !0;
}
function kf(e, t, n, r, i, o) {
    if (((Hr = o), (ke = t), (t.memoizedState = null), (t.updateQueue = null), (t.lanes = 0), (ka.current = e === null || e.memoizedState === null ? TE : IE), (e = n(r, i)), Fo)) {
        o = 0;
        do {
            if (((Fo = !1), (fs = 0), 25 <= o)) throw Error(M(301));
            (o += 1), (Ue = De = null), (t.updateQueue = null), (ka.current = xE), (e = n(r, i));
        } while (Fo);
    }
    if (((ka.current = ol), (t = De !== null && De.next !== null), (Hr = 0), (Ue = De = ke = null), (il = !1), t)) throw Error(M(300));
    return e;
}
function Pf() {
    var e = fs !== 0;
    return (fs = 0), e;
}
function an() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ue === null ? (ke.memoizedState = Ue = e) : (Ue = Ue.next = e), Ue;
}
function $t() {
    if (De === null) {
        var e = ke.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = De.next;
    var t = Ue === null ? ke.memoizedState : Ue.next;
    if (t !== null) (Ue = t), (De = e);
    else {
        if (e === null) throw Error(M(310));
        (De = e), (e = { memoizedState: De.memoizedState, baseState: De.baseState, baseQueue: De.baseQueue, queue: De.queue, next: null }), Ue === null ? (ke.memoizedState = Ue = e) : (Ue = Ue.next = e);
    }
    return Ue;
}
function ps(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function Tu(e) {
    var t = $t(),
        n = t.queue;
    if (n === null) throw Error(M(311));
    n.lastRenderedReducer = e;
    var r = De,
        i = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            (i.next = o.next), (o.next = s);
        }
        (r.baseQueue = i = o), (n.pending = null);
    }
    if (i !== null) {
        (o = i.next), (r = r.baseState);
        var a = (s = null),
            l = null,
            u = o;
        do {
            var c = u.lane;
            if ((Hr & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), (r = u.hasEagerState ? u.eagerState : e(r, u.action));
            else {
                var d = { lane: c, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
                l === null ? ((a = l = d), (s = r)) : (l = l.next = d), (ke.lanes |= c), (Wr |= c);
            }
            u = u.next;
        } while (u !== null && u !== o);
        l === null ? (s = r) : (l.next = a), tn(r, t.memoizedState) || (ut = !0), (t.memoizedState = r), (t.baseState = s), (t.baseQueue = l), (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        i = e;
        do (o = i.lane), (ke.lanes |= o), (Wr |= o), (i = i.next);
        while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function Iu(e) {
    var t = $t(),
        n = t.queue;
    if (n === null) throw Error(M(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = (i = i.next);
        do (o = e(o, s.action)), (s = s.next);
        while (s !== i);
        tn(o, t.memoizedState) || (ut = !0), (t.memoizedState = o), t.baseQueue === null && (t.baseState = o), (n.lastRenderedState = o);
    }
    return [o, r];
}
function bm() {}
function km(e, t) {
    var n = ke,
        r = $t(),
        i = t(),
        o = !tn(r.memoizedState, i);
    if ((o && ((r.memoizedState = i), (ut = !0)), (r = r.queue), Of(Am.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || (Ue !== null && Ue.memoizedState.tag & 1))) {
        if (((n.flags |= 2048), hs(9, Om.bind(null, n, r, i, t), void 0, null), Be === null)) throw Error(M(349));
        Hr & 30 || Pm(n, t, i);
    }
    return i;
}
function Pm(e, t, n) {
    (e.flags |= 16384), (e = { getSnapshot: t, value: n }), (t = ke.updateQueue), t === null ? ((t = { lastEffect: null, stores: null }), (ke.updateQueue = t), (t.stores = [e])) : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Om(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Cm(t) && Rm(e);
}
function Am(e, t, n) {
    return n(function () {
        Cm(t) && Rm(e);
    });
}
function Cm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !tn(e, n);
    } catch {
        return !0;
    }
}
function Rm(e) {
    var t = $n(e, 1);
    t !== null && en(t, e, 1, -1);
}
function hh(e) {
    var t = an();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ps, lastRenderedState: e }),
        (t.queue = e),
        (e = e.dispatch = RE.bind(null, ke, e)),
        [t.memoizedState, e]
    );
}
function hs(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = ke.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }), (ke.updateQueue = t), (t.lastEffect = e.next = e))
            : ((n = t.lastEffect), n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
        e
    );
}
function Tm() {
    return $t().memoizedState;
}
function Pa(e, t, n, r) {
    var i = an();
    (ke.flags |= e), (i.memoizedState = hs(1 | t, n, void 0, r === void 0 ? null : r));
}
function zl(e, t, n, r) {
    var i = $t();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (De !== null) {
        var s = De.memoizedState;
        if (((o = s.destroy), r !== null && bf(r, s.deps))) {
            i.memoizedState = hs(t, n, o, r);
            return;
        }
    }
    (ke.flags |= e), (i.memoizedState = hs(1 | t, n, o, r));
}
function vh(e, t) {
    return Pa(8390656, 8, e, t);
}
function Of(e, t) {
    return zl(2048, 8, e, t);
}
function Im(e, t) {
    return zl(4, 2, e, t);
}
function xm(e, t) {
    return zl(4, 4, e, t);
}
function Dm(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function Nm(e, t, n) {
    return (n = n != null ? n.concat([e]) : null), zl(4, 4, Dm.bind(null, t, e), n);
}
function Af() {}
function Lm(e, t) {
    var n = $t();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && bf(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Mm(e, t) {
    var n = $t();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && bf(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Fm(e, t, n) {
    return Hr & 21 ? (tn(n, t) || ((n = B_()), (ke.lanes |= n), (Wr |= n), (e.baseState = !0)), t) : (e.baseState && ((e.baseState = !1), (ut = !0)), (e.memoizedState = n));
}
function AE(e, t) {
    var n = pe;
    (pe = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Ru.transition;
    Ru.transition = {};
    try {
        e(!1), t();
    } finally {
        (pe = n), (Ru.transition = r);
    }
}
function $m() {
    return $t().memoizedState;
}
function CE(e, t, n) {
    var r = ar(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Um(e))) Bm(t, n);
    else if (((n = gm(e, t, n, r)), n !== null)) {
        var i = ot();
        en(n, e, r, i), jm(n, t, r);
    }
}
function RE(e, t, n) {
    var r = ar(e),
        i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Um(e)) Bm(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && ((o = t.lastRenderedReducer), o !== null))
            try {
                var s = t.lastRenderedState,
                    a = o(s, n);
                if (((i.hasEagerState = !0), (i.eagerState = a), tn(a, s))) {
                    var l = t.interleaved;
                    l === null ? ((i.next = i), mf(t)) : ((i.next = l.next), (l.next = i)), (t.interleaved = i);
                    return;
                }
            } catch {
            } finally {
            }
        (n = gm(e, t, i, r)), n !== null && ((i = ot()), en(n, e, r, i), jm(n, t, r));
    }
}
function Um(e) {
    var t = e.alternate;
    return e === ke || (t !== null && t === ke);
}
function Bm(e, t) {
    Fo = il = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function jm(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), rf(e, n);
    }
}
var ol = {
        readContext: Ft,
        useCallback: Ye,
        useContext: Ye,
        useEffect: Ye,
        useImperativeHandle: Ye,
        useInsertionEffect: Ye,
        useLayoutEffect: Ye,
        useMemo: Ye,
        useReducer: Ye,
        useRef: Ye,
        useState: Ye,
        useDebugValue: Ye,
        useDeferredValue: Ye,
        useTransition: Ye,
        useMutableSource: Ye,
        useSyncExternalStore: Ye,
        useId: Ye,
        unstable_isNewReconciler: !1,
    },
    TE = {
        readContext: Ft,
        useCallback: function (e, t) {
            return (an().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: Ft,
        useEffect: vh,
        useImperativeHandle: function (e, t, n) {
            return (n = n != null ? n.concat([e]) : null), Pa(4194308, 4, Dm.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
            return Pa(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return Pa(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = an();
            return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
        },
        useReducer: function (e, t, n) {
            var r = an();
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }),
                (r.queue = e),
                (e = e.dispatch = CE.bind(null, ke, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = an();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: hh,
        useDebugValue: Af,
        useDeferredValue: function (e) {
            return (an().memoizedState = e);
        },
        useTransition: function () {
            var e = hh(!1),
                t = e[0];
            return (e = AE.bind(null, e[1])), (an().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = ke,
                i = an();
            if (Se) {
                if (n === void 0) throw Error(M(407));
                n = n();
            } else {
                if (((n = t()), Be === null)) throw Error(M(349));
                Hr & 30 || Pm(r, t, n);
            }
            i.memoizedState = n;
            var o = { value: n, getSnapshot: t };
            return (i.queue = o), vh(Am.bind(null, r, o, e), [e]), (r.flags |= 2048), hs(9, Om.bind(null, r, o, n, t), void 0, null), n;
        },
        useId: function () {
            var e = an(),
                t = Be.identifierPrefix;
            if (Se) {
                var n = Cn,
                    r = An;
                (n = (r & ~(1 << (32 - Zt(r) - 1))).toString(32) + n), (t = ":" + t + "R" + n), (n = fs++), 0 < n && (t += "H" + n.toString(32)), (t += ":");
            } else (n = OE++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    IE = {
        readContext: Ft,
        useCallback: Lm,
        useContext: Ft,
        useEffect: Of,
        useImperativeHandle: Nm,
        useInsertionEffect: Im,
        useLayoutEffect: xm,
        useMemo: Mm,
        useReducer: Tu,
        useRef: Tm,
        useState: function () {
            return Tu(ps);
        },
        useDebugValue: Af,
        useDeferredValue: function (e) {
            var t = $t();
            return Fm(t, De.memoizedState, e);
        },
        useTransition: function () {
            var e = Tu(ps)[0],
                t = $t().memoizedState;
            return [e, t];
        },
        useMutableSource: bm,
        useSyncExternalStore: km,
        useId: $m,
        unstable_isNewReconciler: !1,
    },
    xE = {
        readContext: Ft,
        useCallback: Lm,
        useContext: Ft,
        useEffect: Of,
        useImperativeHandle: Nm,
        useInsertionEffect: Im,
        useLayoutEffect: xm,
        useMemo: Mm,
        useReducer: Iu,
        useRef: Tm,
        useState: function () {
            return Iu(ps);
        },
        useDebugValue: Af,
        useDeferredValue: function (e) {
            var t = $t();
            return De === null ? (t.memoizedState = e) : Fm(t, De.memoizedState, e);
        },
        useTransition: function () {
            var e = Iu(ps)[0],
                t = $t().memoizedState;
            return [e, t];
        },
        useMutableSource: bm,
        useSyncExternalStore: km,
        useId: $m,
        unstable_isNewReconciler: !1,
    };
function Wi(e, t) {
    try {
        var n = "",
            r = t;
        do (n += sS(r)), (r = r.return);
        while (r);
        var i = n;
    } catch (o) {
        i =
            `
Error generating stack: ` +
            o.message +
            `
` +
            o.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
}
function xu(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Hc(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var DE = typeof WeakMap == "function" ? WeakMap : Map;
function Vm(e, t, n) {
    (n = In(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            al || ((al = !0), (ed = r)), Hc(e, t);
        }),
        n
    );
}
function zm(e, t, n) {
    (n = In(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        (n.payload = function () {
            return r(i);
        }),
            (n.callback = function () {
                Hc(e, t);
            });
    }
    var o = e.stateNode;
    return (
        o !== null &&
            typeof o.componentDidCatch == "function" &&
            (n.callback = function () {
                Hc(e, t), typeof r != "function" && (sr === null ? (sr = new Set([this])) : sr.add(this));
                var s = t.stack;
                this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
            }),
        n
    );
}
function gh(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new DE();
        var i = new Set();
        r.set(t, i);
    } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = qE.bind(null, e, t, n)), t.then(e, e));
}
function _h(e) {
    do {
        var t;
        if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function mh(e, t, n, r, i) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = i), e)
        : (e === t ? (e.flags |= 65536) : ((e.flags |= 128), (n.flags |= 131072), (n.flags &= -52805), n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = In(-1, 1)), (t.tag = 2), or(n, t, 1))), (n.lanes |= 1)), e);
}
var NE = jn.ReactCurrentOwner,
    ut = !1;
function tt(e, t, n, r) {
    t.child = e === null ? Sm(t, null, n, r) : zi(t, e.child, n, r);
}
function yh(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return Ci(t, i), (r = kf(e, t, n, r, o, i)), (n = Pf()), e !== null && !ut ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Un(e, t, i)) : (Se && n && ff(t), (t.flags |= 1), tt(e, t, r, i), t.child);
}
function wh(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !Lf(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = o), Hm(e, t, o, r, i))
            : ((e = Ra(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((o = e.child), !(e.lanes & i))) {
        var s = o.memoizedProps;
        if (((n = n.compare), (n = n !== null ? n : ss), n(s, r) && e.ref === t.ref)) return Un(e, t, i);
    }
    return (t.flags |= 1), (e = lr(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Hm(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (ss(o, r) && e.ref === t.ref)
            if (((ut = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0)) e.flags & 131072 && (ut = !0);
            else return (t.lanes = e.lanes), Un(e, t, i);
    }
    return Wc(e, t, n, r, i);
}
function Wm(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), ve(Si, gt), (gt |= n);
        else {
            if (!(n & 1073741824))
                return (e = o !== null ? o.baseLanes | n : n), (t.lanes = t.childLanes = 1073741824), (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }), (t.updateQueue = null), ve(Si, gt), (gt |= e), null;
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (r = o !== null ? o.baseLanes : n), ve(Si, gt), (gt |= r);
        }
    else o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n), ve(Si, gt), (gt |= r);
    return tt(e, t, i, n), t.child;
}
function Gm(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function Wc(e, t, n, r, i) {
    var o = ft(n) ? Vr : Ze.current;
    return (
        (o = ji(t, o)), Ci(t, i), (n = kf(e, t, n, r, o, i)), (r = Pf()), e !== null && !ut ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Un(e, t, i)) : (Se && r && ff(t), (t.flags |= 1), tt(e, t, n, i), t.child)
    );
}
function Sh(e, t, n, r, i) {
    if (ft(n)) {
        var o = !0;
        Xa(t);
    } else o = !1;
    if ((Ci(t, i), t.stateNode === null)) Oa(e, t), ym(t, n, r), zc(t, n, r, i), (r = !0);
    else if (e === null) {
        var s = t.stateNode,
            a = t.memoizedProps;
        s.props = a;
        var l = s.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? (u = Ft(u)) : ((u = ft(n) ? Vr : Ze.current), (u = ji(t, u)));
        var c = n.getDerivedStateFromProps,
            d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        d || (typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function") || ((a !== r || l !== u) && fh(t, s, r, u)), (Wn = !1);
        var f = t.memoizedState;
        (s.state = f),
            nl(t, r, s, i),
            (l = t.memoizedState),
            a !== r || f !== l || dt.current || Wn
                ? (typeof c == "function" && (Vc(t, n, c, r), (l = t.memoizedState)),
                  (a = Wn || dh(t, n, a, r, f, l, u))
                      ? (d ||
                            (typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function") ||
                            (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
                        typeof s.componentDidMount == "function" && (t.flags |= 4194308))
                      : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = l)),
                  (s.props = r),
                  (s.state = l),
                  (s.context = u),
                  (r = a))
                : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
    } else {
        (s = t.stateNode),
            _m(e, t),
            (a = t.memoizedProps),
            (u = t.type === t.elementType ? a : Wt(t.type, a)),
            (s.props = u),
            (d = t.pendingProps),
            (f = s.context),
            (l = n.contextType),
            typeof l == "object" && l !== null ? (l = Ft(l)) : ((l = ft(n) ? Vr : Ze.current), (l = ji(t, l)));
        var p = n.getDerivedStateFromProps;
        (c = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function") ||
            (typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function") ||
            ((a !== d || f !== l) && fh(t, s, r, l)),
            (Wn = !1),
            (f = t.memoizedState),
            (s.state = f),
            nl(t, r, s, i);
        var m = t.memoizedState;
        a !== d || f !== m || dt.current || Wn
            ? (typeof p == "function" && (Vc(t, n, p, r), (m = t.memoizedState)),
              (u = Wn || dh(t, n, u, r, f, m, l) || !1)
                  ? (c ||
                        (typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function") ||
                        (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, m, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, m, l)),
                    typeof s.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
                  : (typeof s.componentDidUpdate != "function" || (a === e.memoizedProps && f === e.memoizedState) || (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate != "function" || (a === e.memoizedProps && f === e.memoizedState) || (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = m)),
              (s.props = r),
              (s.state = m),
              (s.context = l),
              (r = u))
            : (typeof s.componentDidUpdate != "function" || (a === e.memoizedProps && f === e.memoizedState) || (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" || (a === e.memoizedProps && f === e.memoizedState) || (t.flags |= 1024),
              (r = !1));
    }
    return Gc(e, t, n, r, o, i);
}
function Gc(e, t, n, r, i, o) {
    Gm(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && sh(t, n, !1), Un(e, t, o);
    (r = t.stateNode), (NE.current = t);
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (t.flags |= 1), e !== null && s ? ((t.child = zi(t, e.child, null, o)), (t.child = zi(t, null, a, o))) : tt(e, t, a, o), (t.memoizedState = r.state), i && sh(t, n, !0), t.child;
}
function qm(e) {
    var t = e.stateNode;
    t.pendingContext ? oh(e, t.pendingContext, t.pendingContext !== t.context) : t.context && oh(e, t.context, !1), wf(e, t.containerInfo);
}
function Eh(e, t, n, r, i) {
    return Vi(), hf(i), (t.flags |= 256), tt(e, t, n, r), t.child;
}
var qc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Qc(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function Qm(e, t, n) {
    var r = t.pendingProps,
        i = be.current,
        o = !1,
        s = (t.flags & 128) !== 0,
        a;
    if (((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1), ve(be, i & 1), e === null))
        return (
            Bc(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
                : ((s = r.children),
                  (e = r.fallback),
                  o
                      ? ((r = t.mode),
                        (o = t.child),
                        (s = { mode: "hidden", children: s }),
                        !(r & 1) && o !== null ? ((o.childLanes = 0), (o.pendingProps = s)) : (o = Gl(s, r, 0, null)),
                        (e = Nr(e, r, n, null)),
                        (o.return = t),
                        (e.return = t),
                        (o.sibling = e),
                        (t.child = o),
                        (t.child.memoizedState = Qc(n)),
                        (t.memoizedState = qc),
                        e)
                      : Cf(t, s))
        );
    if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null))) return LE(e, t, s, r, a, i, n);
    if (o) {
        (o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
        var l = { mode: "hidden", children: r.children };
        return (
            !(s & 1) && t.child !== i ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = l), (t.deletions = null)) : ((r = lr(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
            a !== null ? (o = lr(a, o)) : ((o = Nr(o, s, n, null)), (o.flags |= 2)),
            (o.return = t),
            (r.return = t),
            (r.sibling = o),
            (t.child = r),
            (r = o),
            (o = t.child),
            (s = e.child.memoizedState),
            (s = s === null ? Qc(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
            (o.memoizedState = s),
            (o.childLanes = e.childLanes & ~n),
            (t.memoizedState = qc),
            r
        );
    }
    return (
        (o = e.child),
        (e = o.sibling),
        (r = lr(o, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function Cf(e, t) {
    return (t = Gl({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function na(e, t, n, r) {
    return r !== null && hf(r), zi(t, e.child, null, n), (e = Cf(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
}
function LE(e, t, n, r, i, o, s) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = xu(Error(M(422)))), na(e, t, s, r))
            : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((o = r.fallback),
              (i = t.mode),
              (r = Gl({ mode: "visible", children: r.children }, i, 0, null)),
              (o = Nr(o, i, s, null)),
              (o.flags |= 2),
              (r.return = t),
              (o.return = t),
              (r.sibling = o),
              (t.child = r),
              t.mode & 1 && zi(t, e.child, null, s),
              (t.child.memoizedState = Qc(s)),
              (t.memoizedState = qc),
              o);
    if (!(t.mode & 1)) return na(e, t, s, null);
    if (i.data === "$!") {
        if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
        return (r = a), (o = Error(M(419))), (r = xu(o, r, void 0)), na(e, t, s, r);
    }
    if (((a = (s & e.childLanes) !== 0), ut || a)) {
        if (((r = Be), r !== null)) {
            switch (s & -s) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0;
            }
            (i = i & (r.suspendedLanes | s) ? 0 : i), i !== 0 && i !== o.retryLane && ((o.retryLane = i), $n(e, i), en(r, e, i, -1));
        }
        return Nf(), (r = xu(Error(M(421)))), na(e, t, s, r);
    }
    return i.data === "$?"
        ? ((t.flags |= 128), (t.child = e.child), (t = QE.bind(null, e)), (i._reactRetry = t), null)
        : ((e = o.treeContext),
          (mt = ir(i.nextSibling)),
          (yt = t),
          (Se = !0),
          (qt = null),
          e !== null && ((Ot[At++] = An), (Ot[At++] = Cn), (Ot[At++] = zr), (An = e.id), (Cn = e.overflow), (zr = t)),
          (t = Cf(t, r.children)),
          (t.flags |= 4096),
          t);
}
function bh(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), jc(e.return, t, n);
}
function Du(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null
        ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i })
        : ((o.isBackwards = t), (o.rendering = null), (o.renderingStartTime = 0), (o.last = r), (o.tail = n), (o.tailMode = i));
}
function Ym(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        o = r.tail;
    if ((tt(e, t, r.children, n), (r = be.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && bh(e, n, t);
                else if (e.tag === 19) bh(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((ve(be, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (i) {
            case "forwards":
                for (n = t.child, i = null; n !== null; ) (e = n.alternate), e !== null && rl(e) === null && (i = n), (n = n.sibling);
                (n = i), n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)), Du(t, !1, i, n, o);
                break;
            case "backwards":
                for (n = null, i = t.child, t.child = null; i !== null; ) {
                    if (((e = i.alternate), e !== null && rl(e) === null)) {
                        t.child = i;
                        break;
                    }
                    (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                Du(t, !0, n, null, o);
                break;
            case "together":
                Du(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function Oa(e, t) {
    !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Un(e, t, n) {
    if ((e !== null && (t.dependencies = e.dependencies), (Wr |= t.lanes), !(n & t.childLanes))) return null;
    if (e !== null && t.child !== e.child) throw Error(M(153));
    if (t.child !== null) {
        for (e = t.child, n = lr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) (e = e.sibling), (n = n.sibling = lr(e, e.pendingProps)), (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function ME(e, t, n) {
    switch (t.tag) {
        case 3:
            qm(t), Vi();
            break;
        case 5:
            Em(t);
            break;
        case 1:
            ft(t.type) && Xa(t);
            break;
        case 4:
            wf(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            ve(el, r._currentValue), (r._currentValue = i);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null ? (ve(be, be.current & 1), (t.flags |= 128), null) : n & t.child.childLanes ? Qm(e, t, n) : (ve(be, be.current & 1), (e = Un(e, t, n)), e !== null ? e.sibling : null);
            ve(be, be.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return Ym(e, t, n);
                t.flags |= 128;
            }
            if (((i = t.memoizedState), i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)), ve(be, be.current), r)) break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), Wm(e, t, n);
    }
    return Un(e, t, n);
}
var Km, Yc, Xm, Jm;
Km = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
Yc = function () {};
Xm = function (e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        (e = t.stateNode), Rr(vn.current);
        var o = null;
        switch (n) {
            case "input":
                (i = _c(e, i)), (r = _c(e, r)), (o = []);
                break;
            case "select":
                (i = Pe({}, i, { value: void 0 })), (r = Pe({}, r, { value: void 0 })), (o = []);
                break;
            case "textarea":
                (i = wc(e, i)), (r = wc(e, r)), (o = []);
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ya);
        }
        Ec(n, r);
        var s;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var a = i[u];
                    for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
                } else
                    u !== "dangerouslySetInnerHTML" &&
                        u !== "children" &&
                        u !== "suppressContentEditableWarning" &&
                        u !== "suppressHydrationWarning" &&
                        u !== "autoFocus" &&
                        (Zo.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (((a = i != null ? i[u] : void 0), r.hasOwnProperty(u) && l !== a && (l != null || a != null)))
                if (u === "style")
                    if (a) {
                        for (s in a) !a.hasOwnProperty(s) || (l && l.hasOwnProperty(s)) || (n || (n = {}), (n[s] = ""));
                        for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), (n[s] = l[s]));
                    } else n || (o || (o = []), o.push(u, n)), (n = l);
                else
                    u === "dangerouslySetInnerHTML"
                        ? ((l = l ? l.__html : void 0), (a = a ? a.__html : void 0), l != null && a !== l && (o = o || []).push(u, l))
                        : u === "children"
                        ? (typeof l != "string" && typeof l != "number") || (o = o || []).push(u, "" + l)
                        : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Zo.hasOwnProperty(u) ? (l != null && u === "onScroll" && me("scroll", e), o || a === l || (o = [])) : (o = o || []).push(u, l));
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4);
    }
};
Jm = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function ho(e, t) {
    if (!Se)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
                r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
        }
}
function Ke(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t) for (var i = e.child; i !== null; ) (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags & 14680064), (r |= i.flags & 14680064), (i.return = e), (i = i.sibling);
    else for (i = e.child; i !== null; ) (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags), (r |= i.flags), (i.return = e), (i = i.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function FE(e, t, n) {
    var r = t.pendingProps;
    switch ((pf(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Ke(t), null;
        case 1:
            return ft(t.type) && Ka(), Ke(t), null;
        case 3:
            return (
                (r = t.stateNode),
                Hi(),
                we(dt),
                we(Ze),
                Ef(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) && (ea(t) ? (t.flags |= 4) : e === null || (e.memoizedState.isDehydrated && !(t.flags & 256)) || ((t.flags |= 1024), qt !== null && (rd(qt), (qt = null)))),
                Yc(e, t),
                Ke(t),
                null
            );
        case 5:
            Sf(t);
            var i = Rr(ds.current);
            if (((n = t.type), e !== null && t.stateNode != null)) Xm(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(M(166));
                    return Ke(t), null;
                }
                if (((e = Rr(vn.current)), ea(t))) {
                    (r = t.stateNode), (n = t.type);
                    var o = t.memoizedProps;
                    switch (((r[ln] = t), (r[us] = o), (e = (t.mode & 1) !== 0), n)) {
                        case "dialog":
                            me("cancel", r), me("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            me("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < ko.length; i++) me(ko[i], r);
                            break;
                        case "source":
                            me("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            me("error", r), me("load", r);
                            break;
                        case "details":
                            me("toggle", r);
                            break;
                        case "input":
                            xp(r, o), me("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!o.multiple }), me("invalid", r);
                            break;
                        case "textarea":
                            Np(r, o), me("invalid", r);
                    }
                    Ec(n, o), (i = null);
                    for (var s in o)
                        if (o.hasOwnProperty(s)) {
                            var a = o[s];
                            s === "children"
                                ? typeof a == "string"
                                    ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && Zs(r.textContent, a, e), (i = ["children", a]))
                                    : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Zs(r.textContent, a, e), (i = ["children", "" + a]))
                                : Zo.hasOwnProperty(s) && a != null && s === "onScroll" && me("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            Ws(r), Dp(r, o, !0);
                            break;
                        case "textarea":
                            Ws(r), Lp(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = Ya);
                    }
                    (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (s = i.nodeType === 9 ? i : i.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = P_(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = s.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                ? (e = s.createElement(n, { is: r.is }))
                                : ((e = s.createElement(n)), n === "select" && ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
                            : (e = s.createElementNS(e, n)),
                        (e[ln] = t),
                        (e[us] = r),
                        Km(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((s = bc(n, r)), n)) {
                            case "dialog":
                                me("cancel", e), me("close", e), (i = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                me("load", e), (i = r);
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < ko.length; i++) me(ko[i], e);
                                i = r;
                                break;
                            case "source":
                                me("error", e), (i = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                me("error", e), me("load", e), (i = r);
                                break;
                            case "details":
                                me("toggle", e), (i = r);
                                break;
                            case "input":
                                xp(e, r), (i = _c(e, r)), me("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                (e._wrapperState = { wasMultiple: !!r.multiple }), (i = Pe({}, r, { value: void 0 })), me("invalid", e);
                                break;
                            case "textarea":
                                Np(e, r), (i = wc(e, r)), me("invalid", e);
                                break;
                            default:
                                i = r;
                        }
                        Ec(n, i), (a = i);
                        for (o in a)
                            if (a.hasOwnProperty(o)) {
                                var l = a[o];
                                o === "style"
                                    ? C_(e, l)
                                    : o === "dangerouslySetInnerHTML"
                                    ? ((l = l ? l.__html : void 0), l != null && O_(e, l))
                                    : o === "children"
                                    ? typeof l == "string"
                                        ? (n !== "textarea" || l !== "") && es(e, l)
                                        : typeof l == "number" && es(e, "" + l)
                                    : o !== "suppressContentEditableWarning" &&
                                      o !== "suppressHydrationWarning" &&
                                      o !== "autoFocus" &&
                                      (Zo.hasOwnProperty(o) ? l != null && o === "onScroll" && me("scroll", e) : l != null && Xd(e, o, l, s));
                            }
                        switch (n) {
                            case "input":
                                Ws(e), Dp(e, r, !1);
                                break;
                            case "textarea":
                                Ws(e), Lp(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + dr(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple), (o = r.value), o != null ? ki(e, !!r.multiple, o, !1) : r.defaultValue != null && ki(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = Ya);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return Ke(t), null;
        case 6:
            if (e && t.stateNode != null) Jm(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
                if (((n = Rr(ds.current)), Rr(vn.current), ea(t))) {
                    if (((r = t.stateNode), (n = t.memoizedProps), (r[ln] = t), (o = r.nodeValue !== n) && ((e = yt), e !== null)))
                        switch (e.tag) {
                            case 3:
                                Zs(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Zs(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    o && (t.flags |= 4);
                } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[ln] = t), (t.stateNode = r);
            }
            return Ke(t), null;
        case 13:
            if ((we(be), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
                if (Se && mt !== null && t.mode & 1 && !(t.flags & 128)) vm(), Vi(), (t.flags |= 98560), (o = !1);
                else if (((o = ea(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!o) throw Error(M(318));
                        if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o)) throw Error(M(317));
                        o[ln] = t;
                    } else Vi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
                    Ke(t), (o = !1);
                } else qt !== null && (rd(qt), (qt = null)), (o = !0);
                if (!o) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) && r && ((t.child.flags |= 8192), t.mode & 1 && (e === null || be.current & 1 ? Fe === 0 && (Fe = 3) : Nf())),
                  t.updateQueue !== null && (t.flags |= 4),
                  Ke(t),
                  null);
        case 4:
            return Hi(), Yc(e, t), e === null && as(t.stateNode.containerInfo), Ke(t), null;
        case 10:
            return _f(t.type._context), Ke(t), null;
        case 17:
            return ft(t.type) && Ka(), Ke(t), null;
        case 19:
            if ((we(be), (o = t.memoizedState), o === null)) return Ke(t), null;
            if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
                if (r) ho(o, !1);
                else {
                    if (Fe !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((s = rl(e)), s !== null)) {
                                for (t.flags |= 128, ho(o, !1), r = s.updateQueue, r !== null && ((t.updateQueue = r), (t.flags |= 4)), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                                    (o = n),
                                        (e = r),
                                        (o.flags &= 14680066),
                                        (s = o.alternate),
                                        s === null
                                            ? ((o.childLanes = 0),
                                              (o.lanes = e),
                                              (o.child = null),
                                              (o.subtreeFlags = 0),
                                              (o.memoizedProps = null),
                                              (o.memoizedState = null),
                                              (o.updateQueue = null),
                                              (o.dependencies = null),
                                              (o.stateNode = null))
                                            : ((o.childLanes = s.childLanes),
                                              (o.lanes = s.lanes),
                                              (o.child = s.child),
                                              (o.subtreeFlags = 0),
                                              (o.deletions = null),
                                              (o.memoizedProps = s.memoizedProps),
                                              (o.memoizedState = s.memoizedState),
                                              (o.updateQueue = s.updateQueue),
                                              (o.type = s.type),
                                              (e = s.dependencies),
                                              (o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                                        (n = n.sibling);
                                return ve(be, (be.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    o.tail !== null && Re() > Gi && ((t.flags |= 128), (r = !0), ho(o, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = rl(s)), e !== null)) {
                        if (((t.flags |= 128), (r = !0), (n = e.updateQueue), n !== null && ((t.updateQueue = n), (t.flags |= 4)), ho(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !Se)) return Ke(t), null;
                    } else 2 * Re() - o.renderingStartTime > Gi && n !== 1073741824 && ((t.flags |= 128), (r = !0), ho(o, !1), (t.lanes = 4194304));
                o.isBackwards ? ((s.sibling = t.child), (t.child = s)) : ((n = o.last), n !== null ? (n.sibling = s) : (t.child = s), (o.last = s));
            }
            return o.tail !== null ? ((t = o.tail), (o.rendering = t), (o.tail = t.sibling), (o.renderingStartTime = Re()), (t.sibling = null), (n = be.current), ve(be, r ? (n & 1) | 2 : n & 1), t) : (Ke(t), null);
        case 22:
        case 23:
            return Df(), (r = t.memoizedState !== null), e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192), r && t.mode & 1 ? gt & 1073741824 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t), null;
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(M(156, t.tag));
}
function $E(e, t) {
    switch ((pf(t), t.tag)) {
        case 1:
            return ft(t.type) && Ka(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 3:
            return Hi(), we(dt), we(Ze), Ef(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null;
        case 5:
            return Sf(t), null;
        case 13:
            if ((we(be), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
                if (t.alternate === null) throw Error(M(340));
                Vi();
            }
            return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 19:
            return we(be), null;
        case 4:
            return Hi(), null;
        case 10:
            return _f(t.type._context), null;
        case 22:
        case 23:
            return Df(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var ra = !1,
    Xe = !1,
    UE = typeof WeakSet == "function" ? WeakSet : Set,
    z = null;
function wi(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                Oe(e, t, r);
            }
        else n.current = null;
}
function Kc(e, t, n) {
    try {
        n();
    } catch (r) {
        Oe(e, t, r);
    }
}
var kh = !1;
function BE(e, t) {
    if (((Dc = Ga), (e = nm()), df(e))) {
        if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset,
                        o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, o.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var s = 0,
                        a = -1,
                        l = -1,
                        u = 0,
                        c = 0,
                        d = e,
                        f = null;
                    t: for (;;) {
                        for (var p; d !== n || (i !== 0 && d.nodeType !== 3) || (a = s + i), d !== o || (r !== 0 && d.nodeType !== 3) || (l = s + r), d.nodeType === 3 && (s += d.nodeValue.length), (p = d.firstChild) !== null; )
                            (f = d), (d = p);
                        for (;;) {
                            if (d === e) break t;
                            if ((f === n && ++u === i && (a = s), f === o && ++c === r && (l = s), (p = d.nextSibling) !== null)) break;
                            (d = f), (f = d.parentNode);
                        }
                        d = p;
                    }
                    n = a === -1 || l === -1 ? null : { start: a, end: l };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (Nc = { focusedElem: e, selectionRange: n }, Ga = !1, z = t; z !== null; )
        if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (z = e);
        else
            for (; z !== null; ) {
                t = z;
                try {
                    var m = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (m !== null) {
                                    var v = m.memoizedProps,
                                        O = m.memoizedState,
                                        g = t.stateNode,
                                        h = g.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Wt(t.type, v), O);
                                    g.__reactInternalSnapshotBeforeUpdate = h;
                                }
                                break;
                            case 3:
                                var _ = t.stateNode.containerInfo;
                                _.nodeType === 1 ? (_.textContent = "") : _.nodeType === 9 && _.documentElement && _.removeChild(_.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(M(163));
                        }
                } catch (y) {
                    Oe(t, t.return, y);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (z = e);
                    break;
                }
                z = t.return;
            }
    return (m = kh), (kh = !1), m;
}
function $o(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var i = (r = r.next);
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                (i.destroy = void 0), o !== void 0 && Kc(t, n, o);
            }
            i = i.next;
        } while (i !== r);
    }
}
function Hl(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function Xc(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == "function" ? t(e) : (t.current = e);
    }
}
function Zm(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Zm(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[ln], delete t[us], delete t[Fc], delete t[EE], delete t[bE])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function ey(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ph(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || ey(e.return)) return null;
            e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function Jc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)), (n = n._reactRootContainer), n != null || t.onclick !== null || (t.onclick = Ya));
    else if (r !== 4 && ((e = e.child), e !== null)) for (Jc(e, t, n), e = e.sibling; e !== null; ) Jc(e, t, n), (e = e.sibling);
}
function Zc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null)) for (Zc(e, t, n), e = e.sibling; e !== null; ) Zc(e, t, n), (e = e.sibling);
}
var ze = null,
    Gt = !1;
function zn(e, t, n) {
    for (n = n.child; n !== null; ) ty(e, t, n), (n = n.sibling);
}
function ty(e, t, n) {
    if (hn && typeof hn.onCommitFiberUnmount == "function")
        try {
            hn.onCommitFiberUnmount(Ml, n);
        } catch {}
    switch (n.tag) {
        case 5:
            Xe || wi(n, t);
        case 6:
            var r = ze,
                i = Gt;
            (ze = null), zn(e, t, n), (ze = r), (Gt = i), ze !== null && (Gt ? ((e = ze), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ze.removeChild(n.stateNode));
            break;
        case 18:
            ze !== null && (Gt ? ((e = ze), (n = n.stateNode), e.nodeType === 8 ? Ou(e.parentNode, n) : e.nodeType === 1 && Ou(e, n), is(e)) : Ou(ze, n.stateNode));
            break;
        case 4:
            (r = ze), (i = Gt), (ze = n.stateNode.containerInfo), (Gt = !0), zn(e, t, n), (ze = r), (Gt = i);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Xe && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
                i = r = r.next;
                do {
                    var o = i,
                        s = o.destroy;
                    (o = o.tag), s !== void 0 && (o & 2 || o & 4) && Kc(n, t, s), (i = i.next);
                } while (i !== r);
            }
            zn(e, t, n);
            break;
        case 1:
            if (!Xe && (wi(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
                try {
                    (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
                } catch (a) {
                    Oe(n, t, a);
                }
            zn(e, t, n);
            break;
        case 21:
            zn(e, t, n);
            break;
        case 22:
            n.mode & 1 ? ((Xe = (r = Xe) || n.memoizedState !== null), zn(e, t, n), (Xe = r)) : zn(e, t, n);
            break;
        default:
            zn(e, t, n);
    }
}
function Oh(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new UE()),
            t.forEach(function (r) {
                var i = YE.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(i, i));
            });
    }
}
function Vt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e,
                    s = t,
                    a = s;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                        case 5:
                            (ze = a.stateNode), (Gt = !1);
                            break e;
                        case 3:
                            (ze = a.stateNode.containerInfo), (Gt = !0);
                            break e;
                        case 4:
                            (ze = a.stateNode.containerInfo), (Gt = !0);
                            break e;
                    }
                    a = a.return;
                }
                if (ze === null) throw Error(M(160));
                ty(o, s, i), (ze = null), (Gt = !1);
                var l = i.alternate;
                l !== null && (l.return = null), (i.return = null);
            } catch (u) {
                Oe(i, t, u);
            }
        }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ny(t, e), (t = t.sibling);
}
function ny(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((Vt(t, e), sn(e), r & 4)) {
                try {
                    $o(3, e, e.return), Hl(3, e);
                } catch (v) {
                    Oe(e, e.return, v);
                }
                try {
                    $o(5, e, e.return);
                } catch (v) {
                    Oe(e, e.return, v);
                }
            }
            break;
        case 1:
            Vt(t, e), sn(e), r & 512 && n !== null && wi(n, n.return);
            break;
        case 5:
            if ((Vt(t, e), sn(e), r & 512 && n !== null && wi(n, n.return), e.flags & 32)) {
                var i = e.stateNode;
                try {
                    es(i, "");
                } catch (v) {
                    Oe(e, e.return, v);
                }
            }
            if (r & 4 && ((i = e.stateNode), i != null)) {
                var o = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : o,
                    a = e.type,
                    l = e.updateQueue;
                if (((e.updateQueue = null), l !== null))
                    try {
                        a === "input" && o.type === "radio" && o.name != null && b_(i, o), bc(a, s);
                        var u = bc(a, o);
                        for (s = 0; s < l.length; s += 2) {
                            var c = l[s],
                                d = l[s + 1];
                            c === "style" ? C_(i, d) : c === "dangerouslySetInnerHTML" ? O_(i, d) : c === "children" ? es(i, d) : Xd(i, c, d, u);
                        }
                        switch (a) {
                            case "input":
                                mc(i, o);
                                break;
                            case "textarea":
                                k_(i, o);
                                break;
                            case "select":
                                var f = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!o.multiple;
                                var p = o.value;
                                p != null ? ki(i, !!o.multiple, p, !1) : f !== !!o.multiple && (o.defaultValue != null ? ki(i, !!o.multiple, o.defaultValue, !0) : ki(i, !!o.multiple, o.multiple ? [] : "", !1));
                        }
                        i[us] = o;
                    } catch (v) {
                        Oe(e, e.return, v);
                    }
            }
            break;
        case 6:
            if ((Vt(t, e), sn(e), r & 4)) {
                if (e.stateNode === null) throw Error(M(162));
                (i = e.stateNode), (o = e.memoizedProps);
                try {
                    i.nodeValue = o;
                } catch (v) {
                    Oe(e, e.return, v);
                }
            }
            break;
        case 3:
            if ((Vt(t, e), sn(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
                try {
                    is(t.containerInfo);
                } catch (v) {
                    Oe(e, e.return, v);
                }
            break;
        case 4:
            Vt(t, e), sn(e);
            break;
        case 13:
            Vt(t, e), sn(e), (i = e.child), i.flags & 8192 && ((o = i.memoizedState !== null), (i.stateNode.isHidden = o), !o || (i.alternate !== null && i.alternate.memoizedState !== null) || (If = Re())), r & 4 && Oh(e);
            break;
        case 22:
            if (((c = n !== null && n.memoizedState !== null), e.mode & 1 ? ((Xe = (u = Xe) || c), Vt(t, e), (Xe = u)) : Vt(t, e), sn(e), r & 8192)) {
                if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
                    for (z = e, c = e.child; c !== null; ) {
                        for (d = z = c; z !== null; ) {
                            switch (((f = z), (p = f.child), f.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    $o(4, f, f.return);
                                    break;
                                case 1:
                                    wi(f, f.return);
                                    var m = f.stateNode;
                                    if (typeof m.componentWillUnmount == "function") {
                                        (r = f), (n = f.return);
                                        try {
                                            (t = r), (m.props = t.memoizedProps), (m.state = t.memoizedState), m.componentWillUnmount();
                                        } catch (v) {
                                            Oe(r, n, v);
                                        }
                                    }
                                    break;
                                case 5:
                                    wi(f, f.return);
                                    break;
                                case 22:
                                    if (f.memoizedState !== null) {
                                        Ch(d);
                                        continue;
                                    }
                            }
                            p !== null ? ((p.return = f), (z = p)) : Ch(d);
                        }
                        c = c.sibling;
                    }
                e: for (c = null, d = e; ; ) {
                    if (d.tag === 5) {
                        if (c === null) {
                            c = d;
                            try {
                                (i = d.stateNode),
                                    u
                                        ? ((o = i.style), typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : (o.display = "none"))
                                        : ((a = d.stateNode), (l = d.memoizedProps.style), (s = l != null && l.hasOwnProperty("display") ? l.display : null), (a.style.display = A_("display", s)));
                            } catch (v) {
                                Oe(e, e.return, v);
                            }
                        }
                    } else if (d.tag === 6) {
                        if (c === null)
                            try {
                                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                            } catch (v) {
                                Oe(e, e.return, v);
                            }
                    } else if (((d.tag !== 22 && d.tag !== 23) || d.memoizedState === null || d === e) && d.child !== null) {
                        (d.child.return = d), (d = d.child);
                        continue;
                    }
                    if (d === e) break e;
                    for (; d.sibling === null; ) {
                        if (d.return === null || d.return === e) break e;
                        c === d && (c = null), (d = d.return);
                    }
                    c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
                }
            }
            break;
        case 19:
            Vt(t, e), sn(e), r & 4 && Oh(e);
            break;
        case 21:
            break;
        default:
            Vt(t, e), sn(e);
    }
}
function sn(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (ey(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(M(160));
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (es(i, ""), (r.flags &= -33));
                    var o = Ph(e);
                    Zc(e, o, i);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        a = Ph(e);
                    Jc(e, a, s);
                    break;
                default:
                    throw Error(M(161));
            }
        } catch (l) {
            Oe(e, e.return, l);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function jE(e, t, n) {
    (z = e), ry(e);
}
function ry(e, t, n) {
    for (var r = (e.mode & 1) !== 0; z !== null; ) {
        var i = z,
            o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || ra;
            if (!s) {
                var a = i.alternate,
                    l = (a !== null && a.memoizedState !== null) || Xe;
                a = ra;
                var u = Xe;
                if (((ra = s), (Xe = l) && !u)) for (z = i; z !== null; ) (s = z), (l = s.child), s.tag === 22 && s.memoizedState !== null ? Rh(i) : l !== null ? ((l.return = s), (z = l)) : Rh(i);
                for (; o !== null; ) (z = o), ry(o), (o = o.sibling);
                (z = i), (ra = a), (Xe = u);
            }
            Ah(e);
        } else i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (z = o)) : Ah(e);
    }
}
function Ah(e) {
    for (; z !== null; ) {
        var t = z;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Xe || Hl(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Xe)
                                if (n === null) r.componentDidMount();
                                else {
                                    var i = t.elementType === t.type ? n.memoizedProps : Wt(t.type, n.memoizedProps);
                                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var o = t.updateQueue;
                            o !== null && ch(t, o, r);
                            break;
                        case 3:
                            var s = t.updateQueue;
                            if (s !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                ch(t, s, n);
                            }
                            break;
                        case 5:
                            var a = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = a;
                                var l = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        l.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        l.src && (n.src = l.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var u = t.alternate;
                                if (u !== null) {
                                    var c = u.memoizedState;
                                    if (c !== null) {
                                        var d = c.dehydrated;
                                        d !== null && is(d);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(M(163));
                    }
                Xe || (t.flags & 512 && Xc(t));
            } catch (f) {
                Oe(t, t.return, f);
            }
        }
        if (t === e) {
            z = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (z = n);
            break;
        }
        z = t.return;
    }
}
function Ch(e) {
    for (; z !== null; ) {
        var t = z;
        if (t === e) {
            z = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (z = n);
            break;
        }
        z = t.return;
    }
}
function Rh(e) {
    for (; z !== null; ) {
        var t = z;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Hl(4, t);
                    } catch (l) {
                        Oe(t, n, l);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount();
                        } catch (l) {
                            Oe(t, i, l);
                        }
                    }
                    var o = t.return;
                    try {
                        Xc(t);
                    } catch (l) {
                        Oe(t, o, l);
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        Xc(t);
                    } catch (l) {
                        Oe(t, s, l);
                    }
            }
        } catch (l) {
            Oe(t, t.return, l);
        }
        if (t === e) {
            z = null;
            break;
        }
        var a = t.sibling;
        if (a !== null) {
            (a.return = t.return), (z = a);
            break;
        }
        z = t.return;
    }
}
var VE = Math.ceil,
    sl = jn.ReactCurrentDispatcher,
    Rf = jn.ReactCurrentOwner,
    Nt = jn.ReactCurrentBatchConfig,
    se = 0,
    Be = null,
    Te = null,
    Ge = 0,
    gt = 0,
    Si = gr(0),
    Fe = 0,
    vs = null,
    Wr = 0,
    Wl = 0,
    Tf = 0,
    Uo = null,
    lt = null,
    If = 0,
    Gi = 1 / 0,
    Sn = null,
    al = !1,
    ed = null,
    sr = null,
    ia = !1,
    Zn = null,
    ll = 0,
    Bo = 0,
    td = null,
    Aa = -1,
    Ca = 0;
function ot() {
    return se & 6 ? Re() : Aa !== -1 ? Aa : (Aa = Re());
}
function ar(e) {
    return e.mode & 1 ? (se & 2 && Ge !== 0 ? Ge & -Ge : PE.transition !== null ? (Ca === 0 && (Ca = B_()), Ca) : ((e = pe), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : q_(e.type))), e)) : 1;
}
function en(e, t, n, r) {
    if (50 < Bo) throw ((Bo = 0), (td = null), Error(M(185)));
    xs(e, n, r), (!(se & 2) || e !== Be) && (e === Be && (!(se & 2) && (Wl |= n), Fe === 4 && Kn(e, Ge)), pt(e, r), n === 1 && se === 0 && !(t.mode & 1) && ((Gi = Re() + 500), jl && _r()));
}
function pt(e, t) {
    var n = e.callbackNode;
    PS(e, t);
    var r = Wa(e, e === Be ? Ge : 0);
    if (r === 0) n !== null && $p(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && $p(n), t === 1))
            e.tag === 0 ? kE(Th.bind(null, e)) : fm(Th.bind(null, e)),
                wE(function () {
                    !(se & 6) && _r();
                }),
                (n = null);
        else {
            switch (j_(r)) {
                case 1:
                    n = nf;
                    break;
                case 4:
                    n = $_;
                    break;
                case 16:
                    n = Ha;
                    break;
                case 536870912:
                    n = U_;
                    break;
                default:
                    n = Ha;
            }
            n = dy(n, iy.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function iy(e, t) {
    if (((Aa = -1), (Ca = 0), se & 6)) throw Error(M(327));
    var n = e.callbackNode;
    if (Ri() && e.callbackNode !== n) return null;
    var r = Wa(e, e === Be ? Ge : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ul(e, r);
    else {
        t = r;
        var i = se;
        se |= 2;
        var o = sy();
        (Be !== e || Ge !== t) && ((Sn = null), (Gi = Re() + 500), Dr(e, t));
        do
            try {
                WE();
                break;
            } catch (a) {
                oy(e, a);
            }
        while (!0);
        gf(), (sl.current = o), (se = i), Te !== null ? (t = 0) : ((Be = null), (Ge = 0), (t = Fe));
    }
    if (t !== 0) {
        if ((t === 2 && ((i = Cc(e)), i !== 0 && ((r = i), (t = nd(e, i)))), t === 1)) throw ((n = vs), Dr(e, 0), Kn(e, r), pt(e, Re()), n);
        if (t === 6) Kn(e, r);
        else {
            if (((i = e.current.alternate), !(r & 30) && !zE(i) && ((t = ul(e, r)), t === 2 && ((o = Cc(e)), o !== 0 && ((r = o), (t = nd(e, o)))), t === 1))) throw ((n = vs), Dr(e, 0), Kn(e, r), pt(e, Re()), n);
            switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(M(345));
                case 2:
                    br(e, lt, Sn);
                    break;
                case 3:
                    if ((Kn(e, r), (r & 130023424) === r && ((t = If + 500 - Re()), 10 < t))) {
                        if (Wa(e, 0) !== 0) break;
                        if (((i = e.suspendedLanes), (i & r) !== r)) {
                            ot(), (e.pingedLanes |= e.suspendedLanes & i);
                            break;
                        }
                        e.timeoutHandle = Mc(br.bind(null, e, lt, Sn), t);
                        break;
                    }
                    br(e, lt, Sn);
                    break;
                case 4:
                    if ((Kn(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, i = -1; 0 < r; ) {
                        var s = 31 - Zt(r);
                        (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
                    }
                    if (((r = i), (r = Re() - r), (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * VE(r / 1960)) - r), 10 < r)) {
                        e.timeoutHandle = Mc(br.bind(null, e, lt, Sn), r);
                        break;
                    }
                    br(e, lt, Sn);
                    break;
                case 5:
                    br(e, lt, Sn);
                    break;
                default:
                    throw Error(M(329));
            }
        }
    }
    return pt(e, Re()), e.callbackNode === n ? iy.bind(null, e) : null;
}
function nd(e, t) {
    var n = Uo;
    return e.current.memoizedState.isDehydrated && (Dr(e, t).flags |= 256), (e = ul(e, t)), e !== 2 && ((t = lt), (lt = n), t !== null && rd(t)), e;
}
function rd(e) {
    lt === null ? (lt = e) : lt.push.apply(lt, e);
}
function zE(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!tn(o(), i)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function Kn(e, t) {
    for (t &= ~Tf, t &= ~Wl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Zt(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function Th(e) {
    if (se & 6) throw Error(M(327));
    Ri();
    var t = Wa(e, 0);
    if (!(t & 1)) return pt(e, Re()), null;
    var n = ul(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Cc(e);
        r !== 0 && ((t = r), (n = nd(e, r)));
    }
    if (n === 1) throw ((n = vs), Dr(e, 0), Kn(e, t), pt(e, Re()), n);
    if (n === 6) throw Error(M(345));
    return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), br(e, lt, Sn), pt(e, Re()), null;
}
function xf(e, t) {
    var n = se;
    se |= 1;
    try {
        return e(t);
    } finally {
        (se = n), se === 0 && ((Gi = Re() + 500), jl && _r());
    }
}
function Gr(e) {
    Zn !== null && Zn.tag === 0 && !(se & 6) && Ri();
    var t = se;
    se |= 1;
    var n = Nt.transition,
        r = pe;
    try {
        if (((Nt.transition = null), (pe = 1), e)) return e();
    } finally {
        (pe = r), (Nt.transition = n), (se = t), !(se & 6) && _r();
    }
}
function Df() {
    (gt = Si.current), we(Si);
}
function Dr(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), yE(n)), Te !== null))
        for (n = Te.return; n !== null; ) {
            var r = n;
            switch ((pf(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && Ka();
                    break;
                case 3:
                    Hi(), we(dt), we(Ze), Ef();
                    break;
                case 5:
                    Sf(r);
                    break;
                case 4:
                    Hi();
                    break;
                case 13:
                    we(be);
                    break;
                case 19:
                    we(be);
                    break;
                case 10:
                    _f(r.type._context);
                    break;
                case 22:
                case 23:
                    Df();
            }
            n = n.return;
        }
    if (((Be = e), (Te = e = lr(e.current, null)), (Ge = gt = t), (Fe = 0), (vs = null), (Tf = Wl = Wr = 0), (lt = Uo = null), Cr !== null)) {
        for (t = 0; t < Cr.length; t++)
            if (((n = Cr[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var i = r.next,
                    o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    (o.next = i), (r.next = s);
                }
                n.pending = r;
            }
        Cr = null;
    }
    return e;
}
function oy(e, t) {
    do {
        var n = Te;
        try {
            if ((gf(), (ka.current = ol), il)) {
                for (var r = ke.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null), (r = r.next);
                }
                il = !1;
            }
            if (((Hr = 0), (Ue = De = ke = null), (Fo = !1), (fs = 0), (Rf.current = null), n === null || n.return === null)) {
                (Fe = 1), (vs = t), (Te = null);
                break;
            }
            e: {
                var o = e,
                    s = n.return,
                    a = n,
                    l = t;
                if (((t = Ge), (a.flags |= 32768), l !== null && typeof l == "object" && typeof l.then == "function")) {
                    var u = l,
                        c = a,
                        d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate;
                        f ? ((c.updateQueue = f.updateQueue), (c.memoizedState = f.memoizedState), (c.lanes = f.lanes)) : ((c.updateQueue = null), (c.memoizedState = null));
                    }
                    var p = _h(s);
                    if (p !== null) {
                        (p.flags &= -257), mh(p, s, a, o, t), p.mode & 1 && gh(o, u, t), (t = p), (l = u);
                        var m = t.updateQueue;
                        if (m === null) {
                            var v = new Set();
                            v.add(l), (t.updateQueue = v);
                        } else m.add(l);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            gh(o, u, t), Nf();
                            break e;
                        }
                        l = Error(M(426));
                    }
                } else if (Se && a.mode & 1) {
                    var O = _h(s);
                    if (O !== null) {
                        !(O.flags & 65536) && (O.flags |= 256), mh(O, s, a, o, t), hf(Wi(l, a));
                        break e;
                    }
                }
                (o = l = Wi(l, a)), Fe !== 4 && (Fe = 2), Uo === null ? (Uo = [o]) : Uo.push(o), (o = s);
                do {
                    switch (o.tag) {
                        case 3:
                            (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                            var g = Vm(o, l, t);
                            uh(o, g);
                            break e;
                        case 1:
                            a = l;
                            var h = o.type,
                                _ = o.stateNode;
                            if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || (_ !== null && typeof _.componentDidCatch == "function" && (sr === null || !sr.has(_))))) {
                                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                                var y = zm(o, a, t);
                                uh(o, y);
                                break e;
                            }
                    }
                    o = o.return;
                } while (o !== null);
            }
            ly(n);
        } catch (P) {
            (t = P), Te === n && n !== null && (Te = n = n.return);
            continue;
        }
        break;
    } while (!0);
}
function sy() {
    var e = sl.current;
    return (sl.current = ol), e === null ? ol : e;
}
function Nf() {
    (Fe === 0 || Fe === 3 || Fe === 2) && (Fe = 4), Be === null || (!(Wr & 268435455) && !(Wl & 268435455)) || Kn(Be, Ge);
}
function ul(e, t) {
    var n = se;
    se |= 2;
    var r = sy();
    (Be !== e || Ge !== t) && ((Sn = null), Dr(e, t));
    do
        try {
            HE();
            break;
        } catch (i) {
            oy(e, i);
        }
    while (!0);
    if ((gf(), (se = n), (sl.current = r), Te !== null)) throw Error(M(261));
    return (Be = null), (Ge = 0), Fe;
}
function HE() {
    for (; Te !== null; ) ay(Te);
}
function WE() {
    for (; Te !== null && !gS(); ) ay(Te);
}
function ay(e) {
    var t = cy(e.alternate, e, gt);
    (e.memoizedProps = e.pendingProps), t === null ? ly(e) : (Te = t), (Rf.current = null);
}
function ly(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = $E(n, t)), n !== null)) {
                (n.flags &= 32767), (Te = n);
                return;
            }
            if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (Fe = 6), (Te = null);
                return;
            }
        } else if (((n = FE(n, t, gt)), n !== null)) {
            Te = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            Te = t;
            return;
        }
        Te = t = e;
    } while (t !== null);
    Fe === 0 && (Fe = 5);
}
function br(e, t, n) {
    var r = pe,
        i = Nt.transition;
    try {
        (Nt.transition = null), (pe = 1), GE(e, t, n, r);
    } finally {
        (Nt.transition = i), (pe = r);
    }
    return null;
}
function GE(e, t, n, r) {
    do Ri();
    while (Zn !== null);
    if (se & 6) throw Error(M(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(M(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
        (OS(e, o),
        e === Be && ((Te = Be = null), (Ge = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            ia ||
            ((ia = !0),
            dy(Ha, function () {
                return Ri(), null;
            })),
        (o = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || o)
    ) {
        (o = Nt.transition), (Nt.transition = null);
        var s = pe;
        pe = 1;
        var a = se;
        (se |= 4), (Rf.current = null), BE(e, n), ny(n, e), fE(Nc), (Ga = !!Dc), (Nc = Dc = null), (e.current = n), jE(n), _S(), (se = a), (pe = s), (Nt.transition = o);
    } else e.current = n;
    if ((ia && ((ia = !1), (Zn = e), (ll = i)), (o = e.pendingLanes), o === 0 && (sr = null), wS(n.stateNode), pt(e, Re()), t !== null))
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
    if (al) throw ((al = !1), (e = ed), (ed = null), e);
    return ll & 1 && e.tag !== 0 && Ri(), (o = e.pendingLanes), o & 1 ? (e === td ? Bo++ : ((Bo = 0), (td = e))) : (Bo = 0), _r(), null;
}
function Ri() {
    if (Zn !== null) {
        var e = j_(ll),
            t = Nt.transition,
            n = pe;
        try {
            if (((Nt.transition = null), (pe = 16 > e ? 16 : e), Zn === null)) var r = !1;
            else {
                if (((e = Zn), (Zn = null), (ll = 0), se & 6)) throw Error(M(331));
                var i = se;
                for (se |= 4, z = e.current; z !== null; ) {
                    var o = z,
                        s = o.child;
                    if (z.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (z = u; z !== null; ) {
                                    var c = z;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            $o(8, c, o);
                                    }
                                    var d = c.child;
                                    if (d !== null) (d.return = c), (z = d);
                                    else
                                        for (; z !== null; ) {
                                            c = z;
                                            var f = c.sibling,
                                                p = c.return;
                                            if ((Zm(c), c === u)) {
                                                z = null;
                                                break;
                                            }
                                            if (f !== null) {
                                                (f.return = p), (z = f);
                                                break;
                                            }
                                            z = p;
                                        }
                                }
                            }
                            var m = o.alternate;
                            if (m !== null) {
                                var v = m.child;
                                if (v !== null) {
                                    m.child = null;
                                    do {
                                        var O = v.sibling;
                                        (v.sibling = null), (v = O);
                                    } while (v !== null);
                                }
                            }
                            z = o;
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (z = s);
                    else
                        e: for (; z !== null; ) {
                            if (((o = z), o.flags & 2048))
                                switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        $o(9, o, o.return);
                                }
                            var g = o.sibling;
                            if (g !== null) {
                                (g.return = o.return), (z = g);
                                break e;
                            }
                            z = o.return;
                        }
                }
                var h = e.current;
                for (z = h; z !== null; ) {
                    s = z;
                    var _ = s.child;
                    if (s.subtreeFlags & 2064 && _ !== null) (_.return = s), (z = _);
                    else
                        e: for (s = h; z !== null; ) {
                            if (((a = z), a.flags & 2048))
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Hl(9, a);
                                    }
                                } catch (P) {
                                    Oe(a, a.return, P);
                                }
                            if (a === s) {
                                z = null;
                                break e;
                            }
                            var y = a.sibling;
                            if (y !== null) {
                                (y.return = a.return), (z = y);
                                break e;
                            }
                            z = a.return;
                        }
                }
                if (((se = i), _r(), hn && typeof hn.onPostCommitFiberRoot == "function"))
                    try {
                        hn.onPostCommitFiberRoot(Ml, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (pe = n), (Nt.transition = t);
        }
    }
    return !1;
}
function Ih(e, t, n) {
    (t = Wi(n, t)), (t = Vm(e, t, 1)), (e = or(e, t, 1)), (t = ot()), e !== null && (xs(e, 1, t), pt(e, t));
}
function Oe(e, t, n) {
    if (e.tag === 3) Ih(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Ih(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || (typeof r.componentDidCatch == "function" && (sr === null || !sr.has(r)))) {
                    (e = Wi(n, e)), (e = zm(t, e, 1)), (t = or(t, e, 1)), (e = ot()), t !== null && (xs(t, 1, e), pt(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function qE(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), (t = ot()), (e.pingedLanes |= e.suspendedLanes & n), Be === e && (Ge & n) === n && (Fe === 4 || (Fe === 3 && (Ge & 130023424) === Ge && 500 > Re() - If) ? Dr(e, 0) : (Tf |= n)), pt(e, t);
}
function uy(e, t) {
    t === 0 && (e.mode & 1 ? ((t = Qs), (Qs <<= 1), !(Qs & 130023424) && (Qs = 4194304)) : (t = 1));
    var n = ot();
    (e = $n(e, t)), e !== null && (xs(e, t, n), pt(e, n));
}
function QE(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), uy(e, n);
}
function YE(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(M(314));
    }
    r !== null && r.delete(t), uy(e, n);
}
var cy;
cy = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || dt.current) ut = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return (ut = !1), ME(e, t, n);
            ut = !!(e.flags & 131072);
        }
    else (ut = !1), Se && t.flags & 1048576 && pm(t, Za, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            Oa(e, t), (e = t.pendingProps);
            var i = ji(t, Ze.current);
            Ci(t, n), (i = kf(null, t, r, e, i, n));
            var o = Pf();
            return (
                (t.flags |= 1),
                typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      ft(r) ? ((o = !0), Xa(t)) : (o = !1),
                      (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
                      yf(t),
                      (i.updater = Vl),
                      (t.stateNode = i),
                      (i._reactInternals = t),
                      zc(t, r, e, n),
                      (t = Gc(null, t, r, !0, o, n)))
                    : ((t.tag = 0), Se && o && ff(t), tt(null, t, i, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch ((Oa(e, t), (e = t.pendingProps), (i = r._init), (r = i(r._payload)), (t.type = r), (i = t.tag = XE(r)), (e = Wt(r, e)), i)) {
                    case 0:
                        t = Wc(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Sh(null, t, r, e, n);
                        break e;
                    case 11:
                        t = yh(null, t, r, e, n);
                        break e;
                    case 14:
                        t = wh(null, t, r, Wt(r.type, e), n);
                        break e;
                }
                throw Error(M(306, r, ""));
            }
            return t;
        case 0:
            return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Wt(r, i)), Wc(e, t, r, i, n);
        case 1:
            return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Wt(r, i)), Sh(e, t, r, i, n);
        case 3:
            e: {
                if ((qm(t), e === null)) throw Error(M(387));
                (r = t.pendingProps), (o = t.memoizedState), (i = o.element), _m(e, t), nl(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), o.isDehydrated))
                    if (((o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }), (t.updateQueue.baseState = o), (t.memoizedState = o), t.flags & 256)) {
                        (i = Wi(Error(M(423)), t)), (t = Eh(e, t, r, n, i));
                        break e;
                    } else if (r !== i) {
                        (i = Wi(Error(M(424)), t)), (t = Eh(e, t, r, n, i));
                        break e;
                    } else for (mt = ir(t.stateNode.containerInfo.firstChild), yt = t, Se = !0, qt = null, n = Sm(t, null, r, n), t.child = n; n; ) (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((Vi(), r === i)) {
                        t = Un(e, t, n);
                        break e;
                    }
                    tt(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                Em(t),
                e === null && Bc(t),
                (r = t.type),
                (i = t.pendingProps),
                (o = e !== null ? e.memoizedProps : null),
                (s = i.children),
                Lc(r, i) ? (s = null) : o !== null && Lc(r, o) && (t.flags |= 32),
                Gm(e, t),
                tt(e, t, s, n),
                t.child
            );
        case 6:
            return e === null && Bc(t), null;
        case 13:
            return Qm(e, t, n);
        case 4:
            return wf(t, t.stateNode.containerInfo), (r = t.pendingProps), e === null ? (t.child = zi(t, null, r, n)) : tt(e, t, r, n), t.child;
        case 11:
            return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Wt(r, i)), yh(e, t, r, i, n);
        case 7:
            return tt(e, t, t.pendingProps, n), t.child;
        case 8:
            return tt(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return tt(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (((r = t.type._context), (i = t.pendingProps), (o = t.memoizedProps), (s = i.value), ve(el, r._currentValue), (r._currentValue = s), o !== null))
                    if (tn(o.value, s)) {
                        if (o.children === i.children && !dt.current) {
                            t = Un(e, t, n);
                            break e;
                        }
                    } else
                        for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                            var a = o.dependencies;
                            if (a !== null) {
                                s = o.child;
                                for (var l = a.firstContext; l !== null; ) {
                                    if (l.context === r) {
                                        if (o.tag === 1) {
                                            (l = In(-1, n & -n)), (l.tag = 2);
                                            var u = o.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? (l.next = l) : ((l.next = c.next), (c.next = l)), (u.pending = l);
                                            }
                                        }
                                        (o.lanes |= n), (l = o.alternate), l !== null && (l.lanes |= n), jc(o.return, n, t), (a.lanes |= n);
                                        break;
                                    }
                                    l = l.next;
                                }
                            } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (((s = o.return), s === null)) throw Error(M(341));
                                (s.lanes |= n), (a = s.alternate), a !== null && (a.lanes |= n), jc(s, n, t), (s = o.sibling);
                            } else s = o.child;
                            if (s !== null) s.return = o;
                            else
                                for (s = o; s !== null; ) {
                                    if (s === t) {
                                        s = null;
                                        break;
                                    }
                                    if (((o = s.sibling), o !== null)) {
                                        (o.return = s.return), (s = o);
                                        break;
                                    }
                                    s = s.return;
                                }
                            o = s;
                        }
                tt(e, t, i.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (i = t.type), (r = t.pendingProps.children), Ci(t, n), (i = Ft(i)), (r = r(i)), (t.flags |= 1), tt(e, t, r, n), t.child;
        case 14:
            return (r = t.type), (i = Wt(r, t.pendingProps)), (i = Wt(r.type, i)), wh(e, t, r, i, n);
        case 15:
            return Hm(e, t, t.type, t.pendingProps, n);
        case 17:
            return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Wt(r, i)), Oa(e, t), (t.tag = 1), ft(r) ? ((e = !0), Xa(t)) : (e = !1), Ci(t, n), ym(t, r, i), zc(t, r, i, n), Gc(null, t, r, !0, e, n);
        case 19:
            return Ym(e, t, n);
        case 22:
            return Wm(e, t, n);
    }
    throw Error(M(156, t.tag));
};
function dy(e, t) {
    return F_(e, t);
}
function KE(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function xt(e, t, n, r) {
    return new KE(e, t, n, r);
}
function Lf(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function XE(e) {
    if (typeof e == "function") return Lf(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === Zd)) return 11;
        if (e === ef) return 14;
    }
    return 2;
}
function lr(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = xt(e.tag, t, e.key, e.mode)), (n.elementType = e.elementType), (n.type = e.type), (n.stateNode = e.stateNode), (n.alternate = e), (e.alternate = n))
            : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function Ra(e, t, n, r, i, o) {
    var s = 2;
    if (((r = e), typeof e == "function")) Lf(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else
        e: switch (e) {
            case di:
                return Nr(n.children, i, o, t);
            case Jd:
                (s = 8), (i |= 8);
                break;
            case pc:
                return (e = xt(12, n, t, i | 2)), (e.elementType = pc), (e.lanes = o), e;
            case hc:
                return (e = xt(13, n, t, i)), (e.elementType = hc), (e.lanes = o), e;
            case vc:
                return (e = xt(19, n, t, i)), (e.elementType = vc), (e.lanes = o), e;
            case w_:
                return Gl(n, i, o, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case m_:
                            s = 10;
                            break e;
                        case y_:
                            s = 9;
                            break e;
                        case Zd:
                            s = 11;
                            break e;
                        case ef:
                            s = 14;
                            break e;
                        case Hn:
                            (s = 16), (r = null);
                            break e;
                    }
                throw Error(M(130, e == null ? e : typeof e, ""));
        }
    return (t = xt(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t;
}
function Nr(e, t, n, r) {
    return (e = xt(7, e, r, t)), (e.lanes = n), e;
}
function Gl(e, t, n, r) {
    return (e = xt(22, e, r, t)), (e.elementType = w_), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function Nu(e, t, n) {
    return (e = xt(6, e, null, t)), (e.lanes = n), e;
}
function Lu(e, t, n) {
    return (t = xt(4, e.children !== null ? e.children : [], e.key, t)), (t.lanes = n), (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }), t;
}
function JE(e, t, n, r, i) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = vu(0)),
        (this.expirationTimes = vu(-1)),
        (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
        (this.entanglements = vu(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = i),
        (this.mutableSourceEagerHydrationData = null);
}
function Mf(e, t, n, r, i, o, s, a, l) {
    return (
        (e = new JE(e, t, n, a, l)),
        t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
        (o = xt(3, null, null, t)),
        (e.current = o),
        (o.stateNode = e),
        (o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }),
        yf(o),
        e
    );
}
function ZE(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ci, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function fy(e) {
    if (!e) return fr;
    e = e._reactInternals;
    e: {
        if (ei(e) !== e || e.tag !== 1) throw Error(M(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (ft(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(M(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (ft(n)) return dm(e, n, t);
    }
    return t;
}
function py(e, t, n, r, i, o, s, a, l) {
    return (e = Mf(n, r, !0, e, i, o, s, a, l)), (e.context = fy(null)), (n = e.current), (r = ot()), (i = ar(n)), (o = In(r, i)), (o.callback = t ?? null), or(n, o, i), (e.current.lanes = i), xs(e, i, r), pt(e, r), e;
}
function ql(e, t, n, r) {
    var i = t.current,
        o = ot(),
        s = ar(i);
    return (
        (n = fy(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = In(o, s)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = or(i, t, s)),
        e !== null && (en(e, i, s, o), ba(e, i, s)),
        s
    );
}
function cl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function xh(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function Ff(e, t) {
    xh(e, t), (e = e.alternate) && xh(e, t);
}
function eb() {
    return null;
}
var hy =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function $f(e) {
    this._internalRoot = e;
}
Ql.prototype.render = $f.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(M(409));
    ql(e, t, null, null);
};
Ql.prototype.unmount = $f.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Gr(function () {
            ql(null, e, null, null);
        }),
            (t[Fn] = null);
    }
};
function Ql(e) {
    this._internalRoot = e;
}
Ql.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = H_();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Yn.length && t !== 0 && t < Yn[n].priority; n++);
        Yn.splice(n, 0, e), n === 0 && G_(e);
    }
};
function Uf(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Yl(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")));
}
function Dh() {}
function tb(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function () {
                var u = cl(s);
                o.call(u);
            };
        }
        var s = py(t, r, e, 0, null, !1, !1, "", Dh);
        return (e._reactRootContainer = s), (e[Fn] = s.current), as(e.nodeType === 8 ? e.parentNode : e), Gr(), s;
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var u = cl(l);
            a.call(u);
        };
    }
    var l = Mf(e, 0, !1, null, null, !1, !1, "", Dh);
    return (
        (e._reactRootContainer = l),
        (e[Fn] = l.current),
        as(e.nodeType === 8 ? e.parentNode : e),
        Gr(function () {
            ql(t, l, n, r);
        }),
        l
    );
}
function Kl(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var a = i;
            i = function () {
                var l = cl(s);
                a.call(l);
            };
        }
        ql(t, s, e, i);
    } else s = tb(n, t, e, i, r);
    return cl(s);
}
V_ = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = bo(t.pendingLanes);
                n !== 0 && (rf(t, n | 1), pt(t, Re()), !(se & 6) && ((Gi = Re() + 500), _r()));
            }
            break;
        case 13:
            Gr(function () {
                var r = $n(e, 1);
                if (r !== null) {
                    var i = ot();
                    en(r, e, 1, i);
                }
            }),
                Ff(e, 1);
    }
};
of = function (e) {
    if (e.tag === 13) {
        var t = $n(e, 134217728);
        if (t !== null) {
            var n = ot();
            en(t, e, 134217728, n);
        }
        Ff(e, 134217728);
    }
};
z_ = function (e) {
    if (e.tag === 13) {
        var t = ar(e),
            n = $n(e, t);
        if (n !== null) {
            var r = ot();
            en(n, e, t, r);
        }
        Ff(e, t);
    }
};
H_ = function () {
    return pe;
};
W_ = function (e, t) {
    var n = pe;
    try {
        return (pe = e), t();
    } finally {
        pe = n;
    }
};
Pc = function (e, t, n) {
    switch (t) {
        case "input":
            if ((mc(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = Bl(r);
                        if (!i) throw Error(M(90));
                        E_(r), mc(r, i);
                    }
                }
            }
            break;
        case "textarea":
            k_(e, n);
            break;
        case "select":
            (t = n.value), t != null && ki(e, !!n.multiple, t, !1);
    }
};
I_ = xf;
x_ = Gr;
var nb = { usingClientEntryPoint: !1, Events: [Ns, vi, Bl, R_, T_, xf] },
    vo = { findFiberByHostInstance: Ar, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
    rb = {
        bundleType: vo.bundleType,
        version: vo.version,
        rendererPackageName: vo.rendererPackageName,
        rendererConfig: vo.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: jn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = L_(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: vo.findFiberByHostInstance || eb,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var oa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!oa.isDisabled && oa.supportsFiber)
        try {
            (Ml = oa.inject(rb)), (hn = oa);
        } catch {}
}
bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nb;
bt.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Uf(t)) throw Error(M(200));
    return ZE(e, t, null, n);
};
bt.createRoot = function (e, t) {
    if (!Uf(e)) throw Error(M(299));
    var n = !1,
        r = "",
        i = hy;
    return (
        t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = Mf(e, 1, !1, null, null, n, !1, r, i)),
        (e[Fn] = t.current),
        as(e.nodeType === 8 ? e.parentNode : e),
        new $f(t)
    );
};
bt.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(M(188)) : ((e = Object.keys(e).join(",")), Error(M(268, e)));
    return (e = L_(t)), (e = e === null ? null : e.stateNode), e;
};
bt.flushSync = function (e) {
    return Gr(e);
};
bt.hydrate = function (e, t, n) {
    if (!Yl(t)) throw Error(M(200));
    return Kl(null, e, t, !0, n);
};
bt.hydrateRoot = function (e, t, n) {
    if (!Uf(e)) throw Error(M(405));
    var r = (n != null && n.hydratedSources) || null,
        i = !1,
        o = "",
        s = hy;
    if (
        (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        (t = py(t, null, e, 1, n ?? null, i, !1, o, s)),
        (e[Fn] = t.current),
        as(e),
        r)
    )
        for (e = 0; e < r.length; e++) (n = r[e]), (i = n._getVersion), (i = i(n._source)), t.mutableSourceEagerHydrationData == null ? (t.mutableSourceEagerHydrationData = [n, i]) : t.mutableSourceEagerHydrationData.push(n, i);
    return new Ql(t);
};
bt.render = function (e, t, n) {
    if (!Yl(t)) throw Error(M(200));
    return Kl(null, e, t, !1, n);
};
bt.unmountComponentAtNode = function (e) {
    if (!Yl(e)) throw Error(M(40));
    return e._reactRootContainer
        ? (Gr(function () {
              Kl(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[Fn] = null);
              });
          }),
          !0)
        : !1;
};
bt.unstable_batchedUpdates = xf;
bt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Yl(n)) throw Error(M(200));
    if (e == null || e._reactInternals === void 0) throw Error(M(38));
    return Kl(e, t, n, !1, r);
};
bt.version = "18.2.0-next-9e3b772b8-20220608";
function vy() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vy);
        } catch (e) {
            console.error(e);
        }
}
vy(), (p_.exports = bt);
var gy = p_.exports,
    _y,
    Nh = gy;
(_y = Nh.createRoot), Nh.hydrateRoot;
function ib(e) {
    return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
}
function my(e) {
    return e.charAt(0).toUpperCase() + e.substr(1);
}
function _I(e, t) {
    return e.length > t ? e.slice(0, t) + "..." : e;
}
function ob(e) {
    const t = {};
    return new Intl.NumberFormat("en-US", t).format(e);
}
const sb = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function mI(e) {
    return sb.test(e);
}
const ab = (e) => new Date(e * 1e3).toISOString().substr(11, 8),
    yI = (e) => {
        const i = ab(e);
        let o = 4;
        return e >= 36e3 ? (o = 0) : e >= 3600 ? (o = 1) : e >= 600 && (o = 3), i.substring(o);
    };
var Ut = ((e) => ((e.CATEGORY = "CATEGORY"), (e.SUBREDDIT = "SUBREDDIT"), (e.ALBUM = "ALBUM"), (e.VIDEO = "VIDEO"), (e.PICTURE = "PICTURE"), (e.SOUND = "SOUND"), e))(Ut || {});
function Bf(e) {
    return e.toLowerCase();
}
function lb(e) {
    return Bf(e) + "s";
}
function wI(e) {
    return ib(Bf(e));
}
function SI(e) {
    return e === "SOUND" ? `videos with ${Bf(e)}` : lb(e);
}
function ub(e) {
    return e === "SOUND" ? "VIDEO" : e;
}
var We = ((e) => (
    (e.CREATOR = "Creator"),
    (e.CATEGORY = "Category"),
    (e.SUBREDDIT = "Subreddit"),
    (e.COLLECTION = "Collection"),
    (e.ALBUM = "Album"),
    (e.SUBREDDIT_POST = "SubredditPost"),
    (e.NATIVE_AD = "NativeAd"),
    (e.ALBUM_SOURCE = "AlbumSource"),
    (e.IFRAME_AD = "IframeAd"),
    e
))(We || {});
function cb(e, t) {
    let n;
    return function (...r) {
        const i = this,
            o = function () {
                (n = null), e.apply(i, r);
            };
        clearTimeout(n), (n = setTimeout(o, t));
    };
}
const dl = { height: window.innerHeight, width: window.innerWidth, aspectRatio: window.innerWidth / window.innerHeight };
var id = ((e) => ((e[(e.ENTIRE_VIEWPORT = 0)] = "ENTIRE_VIEWPORT"), (e[(e.ONLY_VISIBLE = 1)] = "ONLY_VISIBLE"), e))(id || {});
const gs = { ref: A.createRef(), state: dl, observable: V.box(dl, { deep: !1 }) },
    _s = { ref: A.createRef(), state: dl, observable: V.box(dl, { deep: !1 }) },
    db = () => (
        A.useEffect(() => {
            const e = (r) => {
                    const i = r.state,
                        o = od(r.ref);
                    i.height !== o.height && ((r.state = o), r.observable.set(r.state));
                },
                t = () => {
                    eo(() => {
                        e(gs), e(_s);
                    });
                };
            t();
            const n = cb(t, 25);
            return window.addEventListener("resize", n), () => window.removeEventListener("resize", n);
        }, []),
        x.jsxs(x.Fragment, { children: [x.jsx("div", { className: "measure-viewport measure-viewport--entire-viewport", ref: gs.ref }), x.jsx("div", { className: "measure-viewport measure-viewport--only-visible", ref: _s.ref })] })
    ),
    fb = db;
function od(e) {
    const { current: t } = e;
    if (t === null) throw new Error("Ref is null! WTF!");
    const n = t.getBoundingClientRect().height,
        r = document.body.getBoundingClientRect().width,
        i = n === 0 ? 0 : r / n;
    return { height: n, width: r, aspectRatio: i };
}
function EI(e = 1) {
    return od(e === 0 ? gs.ref : _s.ref);
}
function pb(e = 1) {
    return e === 0 ? gs.observable.get() : _s.observable.get();
}
function yy(e = 1) {
    return e === 0 ? gs.state : _s.state;
}
function hb(e, t) {
    let n = [];
    for (let r = e; r < t; r++) n.push(r);
    return n;
}
function bI(e, t) {
    let n = [];
    for (const r of e) for (const i of t(r)) n.push(i);
    return n;
}
function kI(e, t) {
    return e.slice().sort((n, r) => Number(t(n)) - Number(t(r)));
}
function jf(e, t) {
    let n, r;
    for (const i of e) {
        const o = t(i);
        (n === void 0 || o > r) && ((n = i), (r = o));
    }
    return n;
}
function Lh(e, t) {
    return jf(e, (n) => -t(n));
}
function vb(e) {
    return e.filter((t) => t != null);
}
function Mu(...e) {
    return vb(e).find((n) => n.length > 0) ?? [];
}
function PI(e, t = e.length) {
    let n = hb(0, e.length),
        r = [];
    for (; r.length < Math.min(t, e.length); ) {
        const i = Math.floor(Math.random() * n.length),
            o = n[i];
        r.push(e[o]), n.splice(i, 1);
    }
    return r;
}
var wy = ((e) => ((e[(e.Base = 0)] = "Base"), (e[(e.IPhone = 1)] = "IPhone"), (e[(e.Tiny = 2)] = "Tiny"), (e[(e.Small = 3)] = "Small"), (e[(e.Medium = 4)] = "Medium"), (e[(e.Big = 5)] = "Big"), (e[(e.Huge = 6)] = "Huge"), e))(wy || {});
const gb = [
    [0, 399, 0],
    [400, 599, 1],
    [600, 899, 2],
    [900, 1199, 3],
    [1200, 1799, 4],
    [1800, 2199, 5],
    [2200, 1 / 0, 6],
];
class _b {
    constructor() {
        S(this, "width", 0);
        S(this, "height", 0);
        S(this, "updateDisplaySize", (t) => {
            this.updateDimensions();
        });
        S(this, "dispose", () => {
            window.removeEventListener("resize", this.updateDisplaySize);
        });
        ge(this, { width: V, height: V, updateDimensions: X, size: ce }), window.addEventListener("resize", this.updateDisplaySize), this.updateDimensions();
    }
    get size() {
        return gb.find((t) => this.width >= t[0] && this.width <= t[1])[2];
    }
    updateDimensions() {
        const { width: t, height: n } = this.getDimensions();
        (this.width = t), (this.height = n);
    }
    getDimensions() {
        const t = window,
            n = document,
            r = n.documentElement,
            i = n.getElementsByTagName("body")[0],
            o = t.innerWidth || r.clientWidth || i.clientWidth,
            s = t.innerHeight || r.clientHeight || i.clientHeight;
        return { width: o, height: s };
    }
}
const mb = new _b(),
    yb = 100;
class Xl {
    constructor(t = 0) {
        S(this, "dynamicList", []);
        S(this, "backupList", []);
        S(this, "endObservation");
        S(this, "_coverMedia");
        S(this, "targetAspectRatio", this.calculateTargetAspectRatio(yy(id.ENTIRE_VIEWPORT)));
        S(this, "previousAspectRatio", this.targetAspectRatio);
        S(this, "delayUntil");
        ge(this, { dynamicList: V.ref, backupList: V.ref, targetAspectRatio: V, coverMedia: ce, delayUntil: V, finishedLoading: X, add: X.bound }), (this.delayUntil = t);
    }
    calculateTargetAspectRatio({ width: t, height: n }) {
        const r = mb.size >= wy.Small ? 0.5 : 0.7;
        return t / (n * r);
    }
    get coverMedia() {
        if (this.dynamicList.length < this.delayUntil && this.backupList.length < this.delayUntil) return;
        const t = Math.abs(this.targetAspectRatio - this.previousAspectRatio) > 0.2,
            n = this._coverMedia === void 0;
        if (t || n) {
            const r = ({ aspectRatio: i }) => Math.abs(this.targetAspectRatio - i);
            (this._coverMedia = Lh(this.dynamicList, r) ?? Lh(this.backupList, r)), (this.previousAspectRatio = this.targetAspectRatio);
        }
        return this._coverMedia;
    }
    finishedLoading() {
        this.delayUntil !== 0 && (this.delayUntil = 0);
    }
    observe() {
        const t = (n) => {
            eo(() => {
                this.targetAspectRatio = this.calculateTargetAspectRatio(n);
            });
        };
        this.endObservation = Qg(() => pb(id.ENTIRE_VIEWPORT), t);
    }
    unobserve() {
        this.endObservation && (this.endObservation(), (this.endObservation = void 0));
    }
    add(t) {
        const n = yb - this.dynamicList.length;
        if (n > 0 && t.length > 0) {
            const r = t.slice(0, n).filter((o) => o.isPicture);
            this.dynamicList = this.dynamicList.concat(r);
            const i = t.slice(0, n).filter((o) => o.hasPictureSources);
            this.backupList = this.backupList.concat(i);
        }
    }
}
class wb {
    constructor(t) {
        S(this, "url");
        S(this, "title");
        S(this, "isComplete");
        S(this, "isNsfw");
        S(this, "sourceUrl");
        S(this, "itemType", We.ALBUM);
        S(this, "displayType", Ut.ALBUM);
        S(this, "coverMediaState", new Xl(5));
        S(this, "needsRefresh");
        ge(this, { needsRefresh: V, merge: X }),
            (this.url = t.url),
            (this.title = t.title),
            (this.isNsfw = t.isNsfw),
            (this.needsRefresh = t.needsRefresh),
            (this.isComplete = t.isComplete),
            (this.sourceUrl = "https://www.reddit.com" + t.redditPath);
    }
    merge(t) {
        (this.needsRefresh = t.needsRefresh), (this.isComplete = t.isComplete);
    }
}
class Sb {
    constructor(t) {
        S(this, "url");
        S(this, "title");
        S(this, "isNsfw");
        S(this, "itemType", We.CATEGORY);
        S(this, "displayType", Ut.CATEGORY);
        S(this, "coverMediaState", new Xl());
        S(this, "needsRefresh");
        ge(this, { needsRefresh: V, merge: X }), (this.url = t.url), (this.title = t.title), (this.isNsfw = t.isNsfw), (this.needsRefresh = t.needsRefresh);
    }
    merge(t) {
        t.title !== void 0 && (this.needsRefresh = t.needsRefresh);
    }
}
var Bn = ((e) => ((e.VIDEO = "VIDEO"), (e.PICTURE = "PICTURE"), e))(Bn || {}),
    Qt = ((e) => ((e.WEBM = "WEBM"), (e.MP4 = "MP4"), (e.JPEG = "JPEG"), (e.WEBP = "WEBP"), (e.PNG = "PNG"), (e.GIF = "GIF"), e))(Qt || {});
function Eb(e) {
    const n = (() => {
        try {
            return new URL(e).pathname;
        } catch {
            return e;
        }
    })().match(/\.([^.]+)$/);
    if (n === null) throw new Error("File type is not supported for " + e);
    let r = n[1];
    return r.includes("/") && ((r = r.split("/")[0]), r === "img" && (r = "jpg")), kb(r);
}
function bb(e) {
    switch (e) {
        case "WEBM":
        case "MP4":
            return Bn.VIDEO;
        case "JPEG":
        case "WEBP":
        case "PNG":
        case "GIF":
            return Bn.PICTURE;
        default:
            return;
    }
}
function kb(e) {
    switch (e.toLocaleLowerCase()) {
        case "webm":
            return "WEBM";
        case "webp":
            return "WEBP";
        case "mp4":
            return "MP4";
        case "jpg":
        case "jpeg":
            return "JPEG";
        case "png":
            return "PNG";
        case "gif":
            return "GIF";
        default:
            throw new Error("File type is not supported for " + e);
    }
}
function Pb(e) {
    if (e.startsWith("/category")) return e;
    const t = Ob(e),
        n = /-(gifs|pics|pictures|videos)$/i,
        r = t.match(n),
        i = t.replace(n, ""),
        o = r !== null,
        s = i.startsWith("/r/"),
        a = "/r" + i.replace("/r/", "/");
    return s || o ? a : i;
}
function Ob(e) {
    return e.match(/^((\/r)?\/[^/]*)/i)[1];
}
var Ab = ((e) => ((e.CAMPAIGN = "campaign"), e))(Ab || {});
const OI = (e, t) => {
        switch (e) {
            case "campaign":
                return `https://campaigns.scrolller.com/${t}`;
            default:
                return `https://scrolller.com/${t}`;
        }
    },
    AI = (e) => {
        const t = e.match(/(c\/)[0-9]*/);
        if (!t) return;
        const n = t[0].split("/");
        return Number(n[1]);
    },
    CI = (e) => {
        const t = e.match(/[:/#?&@%+~\s,]/);
        return new RegExp("\\p{Extended_Pictographic}", "gu").test(e) ? !1 : !(t || e.length === 0);
    },
    Cb = (e) => {
        var t;
        if (e.endsWith(".jpg") || e.endsWith(".png") || e.endsWith(".webp")) {
            const n = (t = e.match(/\/\/(.*)\.scrolller.com\//)) == null ? void 0 : t[1];
            if (n !== "photon")
                return e.includes("redgifs.")
                    ? e.replace(/\/.*redgifs.com\//, "//images.scrolller.com/proton/")
                    : e.includes("gfycat.")
                    ? e.replace(/\/.*gfycat.com\//, "//images.scrolller.com/proton/")
                    : n === "static"
                    ? e.replace("static.scrolller.com", "images.scrolller.com")
                    : e.replace(`${n}.scrolller.com/`, `images.scrolller.com/${n}/`);
        }
        return e.includes("neutron.scrolller")
            ? e.replace("neutron.scrolller.com/", "static.scrolller.com/neutron/")
            : e.includes("redgifs.")
            ? e.replace(/\/.*redgifs.com\//, "//static.scrolller.com/proton/")
            : e.includes("gfycat.")
            ? e.replace(/\/.*gfycat.com\//, "//static.scrolller.com/proton/")
            : e;
    },
    RI = (e) => {
        const t = e.toUpperCase();
        return t.endsWith(Qt.WEBM) || t.endsWith(Qt.MP4);
    };
function Rb(e) {
    const t = jf(e, ({ width: n }) => n);
    if (t !== void 0) return t.width / t.height;
}
function Vf(e) {
    return { ...e, url: Cb(e.url), fileType: e.fileType || Eb(e.url) };
}
function Tb(e, t) {
    if (t) {
        for (let n of t) if (e.url.includes(`${n.toLowerCase()}.scrolller`)) return !1;
    }
    return !0;
}
function Sy(e) {
    return bb(e == null ? void 0 : e.fileType);
}
function mn(e) {
    return Sy(e) === Bn.PICTURE;
}
function Ey(e) {
    return Sy(e) === Bn.VIDEO;
}
function by(e) {
    return e.some(Ey) ? Bn.VIDEO : Bn.PICTURE;
}
const { userAgent: ms, vendor: Ib } = window.navigator,
    xb = !!navigator.userAgent.match(/mobi/i),
    zf = qi(ms, "bot") || qi(ms, "inspectiontool");
qi(ms, "lighthouse");
const Db = qi(ms, "safari") && qi(Ib, "apple"),
    ky = Db && qi(ms, "iphone"),
    Nb = matchMedia("(pointer:coarse)").matches,
    Py = xb || Nb;
ky && (document.body.style.cursor = "pointer");
const Lb = (e) => {
        e.key === "Tab" && window.document.body.classList.add("show-outlines");
    },
    Mb = () => {
        window.document.body.classList.remove("show-outlines");
    };
window.addEventListener("keydown", Lb);
window.addEventListener("click", Mb);
function Fb() {
    return window.navigator.share !== void 0;
}
async function $b(e) {
    try {
        await window.navigator.share(e);
    } catch {}
}
function qi(e, t) {
    return e.toLowerCase().includes(t);
}
function Ub(e, t, n) {
    if (e > t) throw Error(`minMax: ${e} is bigger than ${t}. That makes no sense`);
    return Math.max(e, Math.min(t, n));
}
function Hf(e) {
    return e != null;
}
function TI(e) {
    return e ? JSON.parse(e.message) : null;
}
function II(e) {
    const t = e ? new Date(e).getTime() : 0;
    return Date.now() - t > 3 * 24 * 60 * 60 * 1e3;
}
const xI = () =>
    Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substr(0, 5);
var Mh = {
    npm_package_devDependencies_vite_tsconfig_paths: "^4.3.1",
    npm_package_devDependencies__types_node: "^14.14.31",
    npm_package_devDependencies__types_compression: "^1.7.0",
    npm_package_dependencies_zod: "^3.21.4",
    npm_package_devDependencies_chalk: "^3.0.0",
    npm_package_dependencies_vite_plugin_require: "^1.1.14",
    npm_package_devDependencies_webpack_bundle_analyzer: "^3.6.0",
    npm_package_devDependencies__types_react_tabs: "^2.3.2",
    npm_config_version_commit_hooks: "true",
    npm_config_user_agent: "yarn/1.22.19 npm/? node/v18.20.4 linux x64",
    NODE_VERSION: "18.20.4",
    npm_config_bin_links: "true",
    HOSTNAME: "300e572ecaea",
    YARN_VERSION: "1.22.19",
    npm_node_execpath: "/usr/local/bin/node",
    npm_package_dependencies_mobx_react_lite: "^4.0.7",
    npm_package_dependencies_heic_convert: "^2.1.0",
    npm_package_dependencies__headlessui_react: "^1.2.0",
    npm_config_init_version: "1.0.0",
    npm_package_devDependencies__types_express: "^4.17.21",
    npm_package_dependencies_react_tsparticles: "^2.10.1",
    npm_package_dependencies_react_hook_form: "^7.44.2",
    HOME: "/root",
    npm_package_scripts_build_server: "tsc --project ./server --outDir server-build",
    npm_package_devDependencies_eslint_config_prettier: "^8.1.0",
    npm_package_dependencies_tsparticles: "^2.10.1",
    npm_package_dependencies__hookform_resolvers: "^3.0.0",
    npm_package_scripts_build_and_deploy: "npm run docker-build && npm run docker-push && npm run ssh-deploy",
    npm_config_init_license: "MIT",
    NODE_OPTIONS: "--max-old-space-size=7168",
    YARN_WRAP_OUTPUT: "false",
    npm_config_version_tag_prefix: "v",
    npm_package_scripts_lint_fix: "eslint src --ext .tsx,.ts --fix",
    npm_package_dependencies_webpack: "^5.89.0",
    npm_package_dependencies_react_icons: "^4.2.0",
    npm_package_dependencies_react_google_recaptcha: "^2.1.0",
    npm_package_dependencies_eslint: "^8.56.0",
    npm_package_devDependencies_husky: "^7.0.4",
    npm_package_dependencies_react_switch: "^6.0.0",
    npm_package_description: "This repo is the front-end to scrolller.com. It is a single-page-application built with React and TypeScript",
    npm_package_scripts_docker_push: "docker push gcr.io/scrolller/client:master",
    npm_package_dependencies_react_scripts: "^5.0.1",
    npm_package_readmeFilename: "README.md",
    npm_package_devDependencies_progress_bar_webpack_plugin: "^2.1.0",
    npm_package_devDependencies__types_react_dom: "^18.2.18",
    npm_package_dependencies_react_tabs: "^6.0.1",
    npm_package_scripts_docker_build: "docker build -t gcr.io/scrolller/client:master .",
    npm_package_devDependencies_prettier: "^2.2.1",
    npm_package_dependencies_posthog_js: "^1.160.0",
    npm_package_devDependencies__vitejs_plugin_react: "^4.2.1",
    npm_package_dependencies__stripe_react_stripe_js: "^2.4.0",
    npm_package_devDependencies__svgr_rollup: "^8.1.0",
    npm_package_devDependencies__commitlint_config_conventional: "^12.0.1",
    npm_package_private: "true",
    npm_package_scripts_prepare: "husky install",
    npm_package_dependencies_csstype: "^3.1.1",
    npm_package_dependencies__stripe_stripe_js: "^2.4.0",
    npm_config_registry: "https://registry.yarnpkg.com",
    npm_package_devDependencies__babel_plugin_proposal_private_property_in_object: "^7.21.11",
    npm_package_devDependencies__anatine_zod_mock: "^3.13.3",
    npm_package_scripts_build_visualize: "export VISUALIZER=true  && vite build",
    npm_package_scripts_start: "vite",
    npm_config_ignore_scripts: "",
    npm_config_version: "1.22.19",
    npm_package_devDependencies__types_react_helmet: "^6.1.11",
    npm_package_devDependencies__faker_js_faker: "^8.4.0",
    npm_package_dependencies_react_stripe_js: "^1.1.5",
    npm_package_dependencies_axios: "^1.6.5",
    PATH:
        "/tmp/yarn--1727184289322-0.7355232994871119:/home/yarn/node_modules/.bin:/usr/local/share/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
    NODE: "/usr/local/bin/node",
    npm_package_devDependencies__types_react_avatar_editor: "^12.0.0",
    npm_package_dependencies_adblock_detect_react: "^1.3.1",
    npm_package_name: "scrolller-frontend",
    npm_package_scripts_analyze: "source-map-explorer 'build/static/js/*.js'",
    npm_package_devDependencies__types_dompurify: "^3.0.5",
    npm_package_devDependencies__commitlint_cli: "^12.0.1",
    npm_package_resolutions__stripe_stripe_js: "1.15.0",
    npm_package_devDependencies_ts_node_dev: "^1.0.0-pre.44",
    npm_package_devDependencies__types_styled_components: "^5.1.34",
    npm_package_dependencies_react_intersection_observer: "^8.32.1",
    npm_package_dependencies_react_dom: "^18.0.1",
    npm_lifecycle_script: "vite build",
    npm_package_browserslist_0: ">0.2%",
    npm_package_eslintConfig_extends_0: "react-app",
    npm_package_browserslist_1: "not dead",
    npm_package_eslintConfig_extends_1: "prettier",
    npm_package_dependencies_credit_card_type: "^9.1.0",
    npm_config_version_git_message: "v%s",
    npm_lifecycle_event: "build",
    npm_package_version: "",
    npm_package_browserslist_2: "not op_mini all",
    npm_package_scripts_production_server: "node ./server-build/server/server.js",
    npm_package_devDependencies__types_react: "^18.2.7",
    npm_package_dependencies_mobx: "^6.12.0",
    npm_package_sideEffects: "false",
    npm_config_argv: '{"remain":[],"cooked":["run","build"],"original":["build"]}',
    npm_package_browserslist_3: "not ie 11",
    npm_package_scripts_build: "vite build",
    npm_package_devDependencies_lint_staged: "^10.5.4",
    npm_package_lint_staged____ts_tsx_md__0: "prettier --write",
    npm_package_devDependencies_cypress: "^13.3.1",
    npm_package_dependencies_vite: "^5.0.12",
    npm_config_version_git_tag: "true",
    npm_config_version_git_sign: "",
    npm_package_scripts_dev_server: "ts-node-dev --project server/tsconfig.json --respawn --transpileOnly ./server/server.ts",
    npm_package_devDependencies_babel_plugin_styled_components: "^2.0.7",
    npm_package_dependencies_sass: "^1.69.5",
    npm_package_dependencies_react_helmet: "^6.1.0",
    npm_package_dependencies_classnames: "^2.3.1",
    npm_config_strict_ssl: "true",
    npm_package_devDependencies__types_heic_convert: "^1.2.0",
    npm_package_dependencies_react_avatar_editor: "^13.0.0",
    PWD: "/home/yarn",
    npm_execpath: "/opt/yarn-v1.22.19/bin/yarn.js",
    npm_package_prettier_semi: "true",
    npm_package_devDependencies__types_base_64: "^1.0.0",
    npm_package_dependencies_vite_plugin_purgecss: "^0.2.12",
    npm_package_dependencies_react_ga4: "^2.1.0",
    npm_package_dependencies_dompurify: "^3.0.1",
    npm_package_dependencies_date_and_time: "^2.4.0",
    npm_package_dependencies_styled_components: "^5.3.11",
    npm_package_dependencies_react_notifications_component: "4.0.0",
    npm_config_save_prefix: "^",
    npm_config_ignore_optional: "",
    npm_package_scripts_ssh_deploy: "ssh debian@api1.scrolller.com sudo ./scrolller-deploy/client.prod.sh",
    npm_package_scripts_preview: "vite preview",
    npm_package_devDependencies_rollup_plugin_visualizer: "^5.12.0",
    npm_package_dependencies_typescript: "^4.2.3",
    INIT_CWD: "/home/yarn",
    npm_package_scripts_production_server2: "pm2 start --no-daemon -i 2 ./server-build/server/server.js",
    npm_package_devDependencies__types_react_google_recaptcha: "^2.1.5",
    npm_package_dependencies_react: "^18.0.1",
    NODE_ENV: "production",
};
const { height: ti, width: Jl } = yy(),
    DI = 4,
    NI = 1e3,
    LI = 5e3,
    Bb = ti / 3,
    MI = Bb,
    FI = 4,
    $I = 0,
    UI = 30,
    BI = Math.max(3e3, Jl * 2),
    jI = Math.max(3e3, Jl * 2),
    jb = Ub(500, 1e3, Jl / 3),
    VI = jb,
    zI = 10,
    HI = 5,
    WI = Jl / 3,
    GI = ti * 2,
    qI = ti * 3,
    Vb = ti,
    QI = Vb,
    YI = 3,
    KI = 20,
    XI = 20,
    JI = 0,
    ZI = ti * 3,
    ex = ti * 3,
    tx = 2,
    zb = ti,
    nx = zb,
    rx = 6,
    ix = 20,
    ox = 0,
    sx = 0,
    ax = 10,
    lx = 0.2,
    ux = 2,
    cx = Mh.MINIMUM_USER_PASSWORD_LENGTH ? parseInt(Mh.MINIMUM_USER_PASSWORD_LENGTH) : 8,
    Hb = 60 * 60,
    Wb = 1.26,
    dx = 0.75,
    fx = 0.35,
    Gb = !Py,
    Fh = "affid",
    $h = "sid",
    Uh = "click_id",
    qb = "premium_audience",
    px = 5,
    hx = 100,
    vx = "https://scrolller.com/assets/apple-touch-icon-180x180.png",
    gx = "support@scrolller.com",
    _x = "contact@scrolller.com",
    mx = "https://discord.gg/yA5SWPDcjf";
var pr = ((e) => ((e.PRODUCTION = "production"), (e.DEVELOPMENT = "development"), (e.LOCAL = "local"), e))(pr || {}),
    Oy = {
        npm_package_devDependencies_vite_tsconfig_paths: "^4.3.1",
        npm_package_devDependencies__types_node: "^14.14.31",
        npm_package_devDependencies__types_compression: "^1.7.0",
        npm_package_dependencies_zod: "^3.21.4",
        npm_package_devDependencies_chalk: "^3.0.0",
        npm_package_dependencies_vite_plugin_require: "^1.1.14",
        npm_package_devDependencies_webpack_bundle_analyzer: "^3.6.0",
        npm_package_devDependencies__types_react_tabs: "^2.3.2",
        npm_config_version_commit_hooks: "true",
        npm_config_user_agent: "yarn/1.22.19 npm/? node/v18.20.4 linux x64",
        NODE_VERSION: "18.20.4",
        npm_config_bin_links: "true",
        HOSTNAME: "300e572ecaea",
        YARN_VERSION: "1.22.19",
        npm_node_execpath: "/usr/local/bin/node",
        npm_package_dependencies_mobx_react_lite: "^4.0.7",
        npm_package_dependencies_heic_convert: "^2.1.0",
        npm_package_dependencies__headlessui_react: "^1.2.0",
        npm_config_init_version: "1.0.0",
        npm_package_devDependencies__types_express: "^4.17.21",
        npm_package_dependencies_react_tsparticles: "^2.10.1",
        npm_package_dependencies_react_hook_form: "^7.44.2",
        HOME: "/root",
        npm_package_scripts_build_server: "tsc --project ./server --outDir server-build",
        npm_package_devDependencies_eslint_config_prettier: "^8.1.0",
        npm_package_dependencies_tsparticles: "^2.10.1",
        npm_package_dependencies__hookform_resolvers: "^3.0.0",
        npm_package_scripts_build_and_deploy: "npm run docker-build && npm run docker-push && npm run ssh-deploy",
        npm_config_init_license: "MIT",
        NODE_OPTIONS: "--max-old-space-size=7168",
        YARN_WRAP_OUTPUT: "false",
        npm_config_version_tag_prefix: "v",
        npm_package_scripts_lint_fix: "eslint src --ext .tsx,.ts --fix",
        npm_package_dependencies_webpack: "^5.89.0",
        npm_package_dependencies_react_icons: "^4.2.0",
        npm_package_dependencies_react_google_recaptcha: "^2.1.0",
        npm_package_dependencies_eslint: "^8.56.0",
        npm_package_devDependencies_husky: "^7.0.4",
        npm_package_dependencies_react_switch: "^6.0.0",
        npm_package_description: "This repo is the front-end to scrolller.com. It is a single-page-application built with React and TypeScript",
        npm_package_scripts_docker_push: "docker push gcr.io/scrolller/client:master",
        npm_package_dependencies_react_scripts: "^5.0.1",
        npm_package_readmeFilename: "README.md",
        npm_package_devDependencies_progress_bar_webpack_plugin: "^2.1.0",
        npm_package_devDependencies__types_react_dom: "^18.2.18",
        npm_package_dependencies_react_tabs: "^6.0.1",
        npm_package_scripts_docker_build: "docker build -t gcr.io/scrolller/client:master .",
        npm_package_devDependencies_prettier: "^2.2.1",
        npm_package_dependencies_posthog_js: "^1.160.0",
        npm_package_devDependencies__vitejs_plugin_react: "^4.2.1",
        npm_package_dependencies__stripe_react_stripe_js: "^2.4.0",
        npm_package_devDependencies__svgr_rollup: "^8.1.0",
        npm_package_devDependencies__commitlint_config_conventional: "^12.0.1",
        npm_package_private: "true",
        npm_package_scripts_prepare: "husky install",
        npm_package_dependencies_csstype: "^3.1.1",
        npm_package_dependencies__stripe_stripe_js: "^2.4.0",
        npm_config_registry: "https://registry.yarnpkg.com",
        npm_package_devDependencies__babel_plugin_proposal_private_property_in_object: "^7.21.11",
        npm_package_devDependencies__anatine_zod_mock: "^3.13.3",
        npm_package_scripts_build_visualize: "export VISUALIZER=true  && vite build",
        npm_package_scripts_start: "vite",
        npm_config_ignore_scripts: "",
        npm_config_version: "1.22.19",
        npm_package_devDependencies__types_react_helmet: "^6.1.11",
        npm_package_devDependencies__faker_js_faker: "^8.4.0",
        npm_package_dependencies_react_stripe_js: "^1.1.5",
        npm_package_dependencies_axios: "^1.6.5",
        PATH:
            "/tmp/yarn--1727184289322-0.7355232994871119:/home/yarn/node_modules/.bin:/usr/local/share/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
        NODE: "/usr/local/bin/node",
        npm_package_devDependencies__types_react_avatar_editor: "^12.0.0",
        npm_package_dependencies_adblock_detect_react: "^1.3.1",
        npm_package_name: "scrolller-frontend",
        npm_package_scripts_analyze: "source-map-explorer 'build/static/js/*.js'",
        npm_package_devDependencies__types_dompurify: "^3.0.5",
        npm_package_devDependencies__commitlint_cli: "^12.0.1",
        npm_package_resolutions__stripe_stripe_js: "1.15.0",
        npm_package_devDependencies_ts_node_dev: "^1.0.0-pre.44",
        npm_package_devDependencies__types_styled_components: "^5.1.34",
        npm_package_dependencies_react_intersection_observer: "^8.32.1",
        npm_package_dependencies_react_dom: "^18.0.1",
        npm_lifecycle_script: "vite build",
        npm_package_browserslist_0: ">0.2%",
        npm_package_eslintConfig_extends_0: "react-app",
        npm_package_browserslist_1: "not dead",
        npm_package_eslintConfig_extends_1: "prettier",
        npm_package_dependencies_credit_card_type: "^9.1.0",
        npm_config_version_git_message: "v%s",
        npm_lifecycle_event: "build",
        npm_package_version: "",
        npm_package_browserslist_2: "not op_mini all",
        npm_package_scripts_production_server: "node ./server-build/server/server.js",
        npm_package_devDependencies__types_react: "^18.2.7",
        npm_package_dependencies_mobx: "^6.12.0",
        npm_package_sideEffects: "false",
        npm_config_argv: '{"remain":[],"cooked":["run","build"],"original":["build"]}',
        npm_package_browserslist_3: "not ie 11",
        npm_package_scripts_build: "vite build",
        npm_package_devDependencies_lint_staged: "^10.5.4",
        npm_package_lint_staged____ts_tsx_md__0: "prettier --write",
        npm_package_devDependencies_cypress: "^13.3.1",
        npm_package_dependencies_vite: "^5.0.12",
        npm_config_version_git_tag: "true",
        npm_config_version_git_sign: "",
        npm_package_scripts_dev_server: "ts-node-dev --project server/tsconfig.json --respawn --transpileOnly ./server/server.ts",
        npm_package_devDependencies_babel_plugin_styled_components: "^2.0.7",
        npm_package_dependencies_sass: "^1.69.5",
        npm_package_dependencies_react_helmet: "^6.1.0",
        npm_package_dependencies_classnames: "^2.3.1",
        npm_config_strict_ssl: "true",
        npm_package_devDependencies__types_heic_convert: "^1.2.0",
        npm_package_dependencies_react_avatar_editor: "^13.0.0",
        PWD: "/home/yarn",
        npm_execpath: "/opt/yarn-v1.22.19/bin/yarn.js",
        npm_package_prettier_semi: "true",
        npm_package_devDependencies__types_base_64: "^1.0.0",
        npm_package_dependencies_vite_plugin_purgecss: "^0.2.12",
        npm_package_dependencies_react_ga4: "^2.1.0",
        npm_package_dependencies_dompurify: "^3.0.1",
        npm_package_dependencies_date_and_time: "^2.4.0",
        npm_package_dependencies_styled_components: "^5.3.11",
        npm_package_dependencies_react_notifications_component: "4.0.0",
        npm_config_save_prefix: "^",
        npm_config_ignore_optional: "",
        npm_package_scripts_ssh_deploy: "ssh debian@api1.scrolller.com sudo ./scrolller-deploy/client.prod.sh",
        npm_package_scripts_preview: "vite preview",
        npm_package_devDependencies_rollup_plugin_visualizer: "^5.12.0",
        npm_package_dependencies_typescript: "^4.2.3",
        INIT_CWD: "/home/yarn",
        npm_package_scripts_production_server2: "pm2 start --no-daemon -i 2 ./server-build/server/server.js",
        npm_package_devDependencies__types_react_google_recaptcha: "^2.1.5",
        npm_package_dependencies_react: "^18.0.1",
        NODE_ENV: "production",
    };
const {
        REACT_APP_HTTP_API: yx,
        REACT_APP_WS_API: Qb,
        REACT_APP_TS_API: wx,
        REACT_APP_METRICS_API: Sx,
        REACT_APP_FACEBOOK_APP_ID: Yb,
        REACT_APP_GOOGLE_CLIENT_ID: Kb,
        REACT_APP_ENVIRONMENT: Xb,
        REACT_APP_ADMIN_URL: Jb,
        REACT_APP_SENTRY_DSN: Ex,
        REACT_APP_DISABLED_HOSTS: Fu,
        REACT_APP_HTTP_ADMIN_API: bx,
        REACT_APP_COLLECTION_CONTENT: Zb,
        STRIPE_KEY: ek,
        SCRAPPER_DISABLED: tk,
        TEST_AUDIENCE: kx,
        NSFW_AD_ZONES: nk,
        DEV_PASSWORD: rk,
        NODE_ENV: ik,
    } = Oy,
    ht = window.scrolllerConfig ? JSON.parse(window.scrolllerConfig) : {},
    ok = ht.webSocketApi ?? Qb ?? "wss://dev.scrolller.com/api/v2/graphql",
    io = ht.environment ?? Xb ?? (ik === "development" ? pr.LOCAL : pr.DEVELOPMENT),
    Ay = io === pr.PRODUCTION,
    Cy = "https://api.scrolller.com/api/v2/graphql",
    sk = Ay ? "https://api.scrolller.com/admin" : "https://dev.scrolller.com/admin",
    ak = Ay ? "https://api.scrolller.com/metrics" : "https://dev.scrolller.com/metrics",
    Px = ht.collectionContent ?? Zb ?? 15,
    lk = ht.item;
ht.facebookAppId;
ht.googleClientId;
ht.adminUrl;
const Ox = ht.stripeKey ?? ek ?? "";
var fg;
const Bh = ((fg = ht.disabledHosts) == null ? void 0 : fg.split(",")) ?? (Fu == null ? void 0 : Fu.split(",")) ?? "".split(","),
    Ax = (ht.scrapperDisabled ?? tk ?? "false") === "true";
ht.nsfwAdZones;
const sd = ht.devPassword ?? rk,
    uk = ht.ga4MeasurementId ?? Oy.GA4_MEASUREMENT_ID ?? "G-YKV7EWM1XX",
    Cx = "https://host3.scrolller.com/upload",
    Rx = io === pr.PRODUCTION ? "6LeJvwAiAAAAAKsG0MNtphyMm1sDjC0CcGopiowd" : "6Ld5kwAiAAAAAEaRJOeAWbCE75jakdfuOm4cVGY0";
pr.PRODUCTION;
const Tx = (ht.enableTopBanner ?? "false") === "true",
    ck = "phc_3RxDWA7ZSRhLbDUBas83ZTBvWznvoSuLX3GHnbsChIX";
var kr = ((e) => (
        (e.NATIVE_AD = "NativeAd"),
        (e.SUBREDDIT = "Subreddit"),
        (e.COLLECTION = "Collection"),
        (e.CATEGORY = "Category"),
        (e.SUBREDDIT_POST = "SubredditPost"),
        (e.ALBUM = "Album"),
        (e.ALBUM_SOURCE = "AlbumSource"),
        (e.ITERATOR = "Iterator"),
        (e.ERROR = "Error"),
        e
    ))(kr || {}),
    yn = ((e) => ((e.YOCTO = "YOCTO"), (e.ZEPTO = "ZEPTO"), (e.ATTO = "ATTO"), (e.FEMTO = "FEMTO"), (e.NANO = "NANO"), (e.PICO = "PICO"), (e.NEUTRON = "NEUTRON"), (e.PROTON = "PROTON"), e))(yn || {});
const dk = { yocto: yn.YOCTO, zepto: yn.ZEPTO, atto: yn.ATTO, femto: yn.FEMTO, nano: yn.NANO, pico: yn.PICO, proton: yn.PROTON, neutron: yn.NEUTRON },
    sa = V.box({ yocto: 0, zepto: 0, atto: 0, femto: 0, nano: 0, pico: 0, proton: 0, neutron: 0 });
var ys;
((e) => {
    e.getHostCounts = () => sa.get();
    const t = (n, r) => {
        const i = n[1];
        typeof r[i] == "number" && (r[i] > 10 || r[i]++);
    };
    (e.detectDisabledHostByRegex = (n, r, i) => {
        let o = n.match(r);
        return o ? (t(o, i), !0) : !1;
    }),
        (e.incrementHostCount = (n) => {
            const r = sa.get();
            let i = [/images.scrolller.com\/(.*)\//, /\/\/(.*)\.scrolller/, /static.scrolller.com\/(.*)\//];
            for (let o of i) if ((0, e.detectDisabledHostByRegex)(n, o, r)) return;
        }),
        (e.getDisabledHosts = () => {
            const n = sa.get(),
                r = Object.entries(n).filter(([s, a]) => a >= 10),
                i = Bh.filter((s) => s !== "");
            return r.length === 0 && i.length === 0 ? null : [...r.map(([s, a]) => dk[s]), ...i];
        }),
        (e.shouldCheckHosts = () => {
            const n = sa.get(),
                r = Object.entries(n).filter(([o, s]) => s >= 10),
                i = Bh.filter((o) => o !== "");
            return !(r.length === 0 && i.length === 0);
        });
})(ys || (ys = {}));
class fk {
    constructor() {
        S(this, "hideNsfw", !1);
        ge(this, { hideNsfw: V });
    }
    setHideNsfw(t) {
        this.hideNsfw = t;
    }
}
const pk = new fk(),
    hk = () => pk.hideNsfw;
class Ry {
    constructor(t = [], n, r) {
        S(this, "_sources");
        S(this, "aspectRatio");
        S(this, "mediaRenderType");
        S(this, "hasAudio");
        S(this, "isBlurred");
        S(this, "isNsfw");
        S(this, "sourceIndex", 0);
        S(this, "subredditState");
        S(this, "currentVideoTime");
        ge(this, {
            _sources: V.ref,
            hasAudio: V,
            sourceIndex: V,
            setSourceIndex: X.bound,
            scrolllerSources: ce,
            externalSources: ce,
            gfycatSources: ce,
            redgifsSources: ce,
            scrolllerOptimizedSources: ce,
            sources: ce,
            isEmpty: ce,
            pictureSources: ce,
            videoSources: ce,
            hasScrolllerSources: ce,
            hasRedgifsSources: ce,
            hasVideoSources: ce,
            hasPictureSources: ce,
            isVideo: ce,
            isPicture: ce,
        }),
            (this.subredditState = r),
            (this.hasAudio = n == null ? void 0 : n.hasAudio),
            (this.isNsfw = n == null ? void 0 : n.isNsfw),
            (this.isBlurred = !!(n != null && n.isPaid) && n.mediaSources === null);
        let i = t;
        t.length == 0 && this.isBlurred && i.push({ fileType: Qt.PNG, url: "/assets/android-chrome-512x512.png", width: 512, height: 512 }),
            n != null && n.isNsfw && hk() && (i = [{ fileType: Qt.PNG, url: "/assets/social-media-icon-840x840.png", width: 840, height: 840 }]),
            (this._sources = i.filter((o) => Tb(o, ys.getDisabledHosts())).map(Vf)),
            (this.aspectRatio = Rb(this._sources) ?? Wb),
            (this.mediaRenderType = by(this._sources)),
            io === pr.LOCAL && (this._sources = yk(this._sources));
    }
    setSourceIndex(t) {
        this.sourceIndex = t;
    }
    get scrolllerSources() {
        return this._sources.filter(jh);
    }
    get externalSources() {
        return this._sources.filter((t) => !jh(t));
    }
    get gfycatSources() {
        return this._sources.filter(vk);
    }
    get redgifsSources() {
        return this._sources.filter(gk);
    }
    get scrolllerOptimizedSources() {
        return this.scrolllerSources.filter(_k);
    }
    get sources() {
        return Mu(this.scrolllerOptimizedSources, this.scrolllerSources, this._sources);
    }
    get isEmpty() {
        return this._sources.length === 0;
    }
    get pictureSources() {
        return Mu(this.scrolllerOptimizedSources.filter(mn), this.externalSources.filter(mn), this.scrolllerSources.filter(mn), this._sources.filter(mn));
    }
    get highResPictureSources() {
        return Mu(this.externalSources.filter(mn), this.scrolllerSources.filter(mn), this._sources.filter(mn));
    }
    get videoSources() {
        return this._sources.filter(Ey);
    }
    get hasScrolllerSources() {
        return this.scrolllerSources.length > 0;
    }
    get hasRedgifsSources() {
        return this.redgifsSources.length > 0;
    }
    get hasGfycatSources() {
        return this.gfycatSources.length > 0;
    }
    get hasVideoSources() {
        return this.videoSources.length > 0;
    }
    get hasPictureSources() {
        return this.pictureSources.length > 0;
    }
    get isVideo() {
        return this.hasVideoSources;
    }
    get isPicture() {
        return this._sources.every(mn);
    }
}
function jh({ url: e }) {
    return Ty(e) || e.includes("scrolller.com");
}
function vk({ url: e }) {
    return e.includes("gfycat.com");
}
function gk({ url: e }) {
    return e.includes("redgifs.com");
}
function _k({ isOptimized: e = !0 }) {
    return e;
}
function mk(e) {
    return e.replace("https://yocto.scrolller.com", "http://localhost:5000");
}
function yk(e) {
    return Ty(Cy) ? e.map((t) => ({ ...t, url: mk(t.url) })) : e;
}
function Ty(e) {
    return e.match(/^https?:\/\/(192.168|localhost)/) !== null;
}
var L = ((e) => (
    (e.HOME = "/"),
    (e.CREATOR_ONBOARDING_LANDING = "/creator-onboarding"),
    (e.CREATOR_ONBOARDING_LANDING_NSFW = "/creator-onboarding-nsfw"),
    (e.CREATOR_ONBOARDING_CONNECT = "/creator-onboarding-connect"),
    (e.CREATOR_ONBOARDING_CONNECT_NSFW = "/creator-onboarding-connect-nsfw"),
    (e.CREATOR_ONBOARDING_CONFIRM_PHONE = "/creator-onboarding-confirm-phone"),
    (e.CREATOR_ONBOARDING_CONFIRM_PHONE_NSFW = "/creator-onboarding-confirm-phone-nsfw"),
    (e.CREATOR_ONBOARDING_ADULT_SOCIAL = "/creator-onboarding-adult-social"),
    (e.CREATOR_ONBOARDING_SOCIAL = "/creator-onboarding-social"),
    (e.CREATOR_ONBOARDING_SOCIAL_NSFW = "/creator-onboarding-social-nsfw"),
    (e.CREATOR_ONBOARDING_GOALS = "/creator-onboarding-goals"),
    (e.CREATOR_ONBOARDING_GOALS_NSFW = "/creator-onboarding-goals-nsfw"),
    (e.CREATOR_ONBOARDING_SUBMITED = "/creator-onboarding-submited"),
    (e.EMBED = "/embed/*"),
    (e.UPLOAD = "/upload-content"),
    (e.UPLOAD_NSFW = "/upload-content-nsfw"),
    (e.MY_COLLECTIONS = "/my-collections"),
    (e.DISCOVER = "/discover"),
    (e.FOLLOWING = "/following"),
    (e.RECOMMENDATIONS = "/recommendations"),
    (e.FAVORITES = "/favorites"),
    (e.ABOUT = "/about"),
    (e.ACCOUNT = "/account"),
    (e.ACCOUNT_SUBPAGE = "/account/*"),
    (e.RESET_PASSWORD = "/reset-password"),
    (e.VERIFY_EMAIL = "/verify-email"),
    (e.VERIFY_PAYMENT = "/verify-payment"),
    (e.PREMIUM = "/premium"),
    (e.PREMIUM_CHECKOUT = "/premium-checkout/*"),
    (e.RESUME_PREMIUM = "/resume-premium"),
    (e.COLLECTION_CHECKOUT = "/collection-checkout"),
    (e.DONATE = "/donate"),
    (e.TERMS = "/terms"),
    (e.LEADERBOARD = "/leaderboard"),
    (e.CATEGORIES = "/categories"),
    (e.CREATOR_PROFILE = "/u/*"),
    (e.COLLECTIONS = "/c/*"),
    (e.SUBREDDIT = "/r/*"),
    (e.CATEGORY = "/category/*"),
    (e.REFUND_POLICY = "/refund-policy"),
    (e.PRIVACY_POLICY = "/privacy-policy"),
    e
))(L || {});
async function wk(e) {
    return new Promise((t) => {
        setTimeout(() => t({}), e);
    });
}
const Sk = { kotlin: Cy, typescript: sk, metrics: ak },
    Vh = (e) => {
        const t = JSON.parse(e.message);
        return t.name === "API_ERROR" ? t : { message: "Unable to connect to the server." };
    },
    Ix = (e) => {
        try {
            const t = JSON.parse(e.message);
            return t.message ? t.message : null;
        } catch {
            return null;
        }
    },
    de = async (e, t, n = {}) => {
        const r = { useGlobalErrorHandler: !0, showContactSupportButtonOnError: !1, disablePopup: !1, apiHost: "kotlin", keepalive: !1, withRetry: !1, ...n },
            i = Xf(),
            o = { method: "POST", body: JSON.stringify({ query: Iy(e), variables: t, authorization: i }), ...(r.apiHost === "kotlin" ? {} : { headers: { accept: "*/*", "content-type": "application/json" } }) };
        try {
            const s = Sk[r.apiHost],
                a = await fetch(s, o);
            if (a.status === 401) {
                if (on()) return $y(), de(e, t);
                if (!r.disablePopup) return await Us(), de(e, t);
            }
            const l = await a.json(),
                { data: u, errors: c } = l;
            if (c && c.length > 0) {
                const d = { ...c[0], name: "API_ERROR" };
                throw new Error(JSON.stringify(d));
            }
            return u;
        } catch (s) {
            if (r.withRetry) return await wk(5e3), de(e, t, { withRetry: r.withRetry });
            throw (r.useGlobalErrorHandler && jo({ ...Vh(s), showContactSupportButton: r.showContactSupportButtonOnError }), new Error(JSON.stringify(Vh(s))));
        }
    };
async function xx(e, t = {}, n) {
    const r = Xf(),
        i = JSON.stringify({ query: Iy(e), variables: t, authorization: r }),
        o = new WebSocket(ok),
        s = () => o.close();
    return new Promise((a, l) => {
        (o.onclose = () => a()),
            (o.onerror = () => {
                const u = { message: "Websocket connection failed" };
                e.includes("subscription SubredditSubscription") && qe.track("collection-sort-analytics", { label: `${t.sortBy}-failed` }), jo(u), l(u);
            }),
            (o.onopen = () => {
                o.send(i);
            }),
            (o.onmessage = async (u) => {
                try {
                    const c = await JSON.parse(u.data),
                        { data: d, errors: f } = c;
                    f && f.length > 0 ? (jo(f[0]), l(f[0])) : (n(d, s), e.includes("subscription SubredditSubscription") && qe.track("collection-sort-analytics", { label: `${t.sortBy}-worked` }));
                } catch (c) {
                    jo(c), l(c);
                }
            });
    });
}
const Iy = (e) => e.replace(/\s+/g, " ");
function Wf(e) {
    return `
    mediaSources {
      url
      width
      height
      isOptimized
    }
    ${
        e
            ? `blurredMediaSources {
      url
      width
      height
      isOptimized
    }`
            : ""
    }
  `;
}
function Gf({ withUserData: e = !0, isSubreddit: t = !1 } = {}) {
    return `
    __typename
    id
    url
    title
    subredditId
    subredditTitle
    subredditUrl
    redditPath
    isNsfw
    albumUrl
    hasAudio
    fullLengthSource
    gfycatSource
    redgifsSource
    ownerAvatar
    username
    displayName
    isPaid
    tags
    ${e ? "isFavorite" : ""}
    ${Wf(!0)}
  `;
}
function xy() {
    return `
    displayMedia {
      isNsfw
      ${Wf()}
    }
  `;
}
function Dx({ iterator: e = null, withParent: t = !0, withChildren: n = !1, expand: r = !1, limit: i = 10, filter: o = null, childLimit: s = 15 } = {}) {
    const a = () => `
    __typename
    url
    title
    isNsfw
  `,
        l = () => `
    children(
      iterator: ${e}
      limit: ${i}
      filter: ${ub(o)}
    ) {
      iterator
      items {
        ... on Subreddit {
          ${Ek({ withChildren: r, filter: o, limit: s })}
        }
      }
    }
  `;
    return `
    ${t ? a() : ""}
    ${n ? l() : ""}
  `;
}
function Nx({ iterator: e = null, withParent: t = !0, withChildren: n = !1, withDisplayMedia: r = !1, limit: i = 10, filter: o = null } = {}) {
    const s = () => `
    __typename
    url
    title
    isComplete
    isNsfw
    redditPath
    ${r ? xy() : ""}
  `,
        a = () => `
    children(
      iterator: ${e}
      limit: ${i}
    ) {
      iterator
      items {
        __typename
        ${Wf()}
      }
    }
  `;
    return `
    ${t ? s() : ""}
    ${n ? a() : ""}
  `;
}
function Ek({ withParent: e = !0, withChildren: t = !1, limit: n = 10, iterator: r = null, filter: i = null, withDisplayMedia: o = !1, withUserData: s = !0, checkHosts: a = !1, isSubreddit: l = !0, isHomePage: u = !1 } = {}) {
    const c = () => `
    __typename
    id
    url
    title
    secondaryTitle
    description
    createdAt
    isNsfw    
    subscribers
    isComplete
    itemCount
    videoCount
    pictureCount
    albumCount

    ${
        l
            ? `isPaid
      username
      tags
      banner {
        url
      width
      height
      isOptimized
    }`
            : ""
    }
    ${o ? xy() : ""}
    ${s ? "isFollowing" : ""}
  `,
        d = () => `
    children(
      limit: ${n}
      iterator: ${r}
      filter: ${i}
      disabledHosts:${a ? " $hostsDown" : " null"}
      ${u ? "homePage: true" : ""}
    ) {
      iterator
      items {
        ${Gf({ isSubreddit: l })}
      }
    }
  `;
    return `
    ${e ? c() : ""}
    ${t ? d() : ""}
  `;
}
function zh() {
    return `
    id
    status
    planName
    interval
    next_recurring
    ends_at
    product_id
    payment_method
    price
  `;
}
function Lx() {
    return `
    $action: String!,
    $captchaToken: String!,
    $offers: [Offer!]!,
    $tags: TagsInput
  `;
}
function Mx() {
    return `
    $donationTo: String,
    $collectionTitle: String,
  `;
}
function Fx() {
    return `
    action: $action,
    captchaToken: $captchaToken,
    offers: $offers,
    tags: $tags,
  `;
}
function $x() {
    return `
    donationTo: $donationTo,
    collectionTitle: $collectionTitle,
  `;
}
function Ux() {
    return `
    response_code
    order_id
    error_message
  `;
}
async function Bx() {
    return (
        await de(
            `
    query PlanQuery {
      getPlans {
            id
            name
            interval
            amount
          }
    }
  `,
            {},
            { apiHost: "typescript" }
        )
    ).getPlans;
}
async function jx() {
    return (
        await de(
            `
    query PlanQuery {
      subscription_plans(orderBy:{id:asc}) {
          id
          offer_id
          product_id
          name
          billing_model_id
          interval
          amount
        }
    }
  `,
            {},
            { apiHost: "typescript" }
        )
    ).subscription_plans;
}
async function bk() {
    return (
        await de(
            `
    query Account {
        myAccount{
          card_last4
          card_type  
          card_exp_month
          card_exp_year 
        }
    }
  `,
            {},
            { apiHost: "typescript" }
        )
    ).myAccount;
}
async function kk() {
    const e = `
    query Subscription {
        mySubscription{
          ${zh()}
          collectionSubscriptions {
            ${zh()}
            creatorName
          }
        }
    }
  `;
    return (await de(e, {}, { apiHost: "typescript" })).mySubscription;
}
class Pk {
    constructor() {
        S(this, "accountCreditCard", null);
        S(this, "subscription", null);
        S(this, "loading", !1);
        ge(this, { accountCreditCard: V, subscription: V, loading: V, getAndSetFreshData: X.bound, getAndSetAccount: X.bound, getAndSetSubscriptions: X.bound });
    }
    clearStates() {
        (this.accountCreditCard = null), (this.subscription = null), (this.loading = !1);
    }
    get allSubscriptions() {
        var n, r;
        return [...(((n = this.subscription) == null ? void 0 : n.collectionSubscriptions) || []), ...((r = this.subscription) != null && r.id ? [this.subscription] : [])];
    }
    async getAndSetSubscriptions() {
        var t;
        this.loading = !0;
        try {
            const n = await kk();
            ((n != null && n.id) || ((t = n == null ? void 0 : n.collectionSubscriptions) != null && t.length)) && (this.subscription = n);
        } catch {}
        this.loading = !1;
    }
    async getAndSetAccount() {
        if (((this.loading = !0), !on())) return (this.loading = !1);
        const t = await bk();
        (this.accountCreditCard = t), (this.loading = !1);
    }
    async getAndSetFreshData() {
        try {
            (this.loading = !0), await this.getAndSetAccount(), await this.getAndSetSubscriptions();
        } catch {
        } finally {
            this.loading = !1;
        }
    }
}
const Ok = new Pk(),
    Ak = "SCROLLLER_BETA_1:",
    Vx = qf(sessionStorage),
    Ck = Qf(sessionStorage),
    Rk = Ny(sessionStorage),
    xn = qf(localStorage),
    gn = Qf(localStorage),
    zx = Tk(localStorage),
    Dy = Ny(localStorage);
function qf(e) {
    return (t, n) => {
        try {
            e.setItem(Yf(t), JSON.stringify(n));
        } catch {}
    };
}
function Qf(e) {
    return (t) => {
        try {
            const n = e.getItem(Yf(t));
            return n === null ? null : JSON.parse(n);
        } catch {
            return null;
        }
    };
}
function Tk(e) {
    return (t, n) => {
        const r = Qf(e)(t),
            i = n(r);
        return qf(e)(t, i), i;
    };
}
function Ny(e) {
    return (t) => {
        try {
            e.removeItem(Yf(t));
        } catch {}
    };
}
function Yf(e) {
    return (Ak + e).toUpperCase();
}
const Ti = "SCROLLLER_LOGIN_DEV";
var fl = ((e) => ((e.DAILY = "DAILY"), (e.WEEKLY = "WEEKLY"), (e.MONTHLY = "MONTHLY"), (e.EVERY_TWO_WEEKS = "EVERY_TWO_WEEKS"), e))(fl || {});
class Ik {
    constructor() {
        S(this, "loginDetails", null);
        S(this, "loggedInUserAccount", null);
        S(this, "isUserLoading", !1);
        ge(this, { loginDetails: V, loggedInUserAccount: V, isUserLoading: V, setIsUserLoading: X.bound, isLoggedIn: ce, loggedInUser: ce, hasRecommendations: ce, setLoginDetails: X.bound, setLoggedInUser: X.bound, clearLogin: X.bound });
        const t = gn(Ti);
        t && this.setLoginDetails(t);
    }
    get isLoggedIn() {
        return this.loginDetails !== null;
    }
    get loggedInUser() {
        return this.loggedInUserAccount;
    }
    get hasRecommendations() {
        var t, n;
        return ((t = this.loggedInUserAccount) == null ? void 0 : t.recommendations_found) || ((n = this.loginDetails) == null ? void 0 : n.recommendations_found) || !1;
    }
    isTokenExpired(t) {
        const n = Date.now() / 1e3;
        return t.expiresAt - n - Hb <= 0;
    }
    setLoginDetails(t) {
        this.isTokenExpired(t) ? this.clearLogin() : ((this.loginDetails = t), xn(Ti, t));
    }
    setLoggedInUser(t) {
        this.loggedInUserAccount = t;
    }
    clearLogin() {
        (this.loginDetails = null), (this.loggedInUserAccount = null), Dy(Ti);
    }
    setIsUserLoading(t) {
        this.isUserLoading = t;
    }
}
async function xk(e) {
    return (
        await de(
            `
    mutation updateUserSettings(
      $videoAutoplay: Boolean!, 
      $softDelete: Boolean!, 
      $sendSfw: Boolean!, 
      $sendNsfw: Boolean!, 
      $preference: String!, 
      $sendRecommendations: Boolean!,
    ) {
      updateUserSettings(
        data: {
          video_autoplay: $videoAutoplay,
          soft_delete: $softDelete,
          send_sfw: $sendSfw,
          send_nsfw: $sendNsfw,
          preference: $preference,
          send_recommendations: $sendRecommendations,
        }
      )
    }
  `,
            e,
            { apiHost: "typescript" }
        )
    ).updateUserSettings;
}
class Dk {
    constructor() {
        S(this, "loading", !1);
        S(this, "videoAutoplay", Gb);
        S(this, "softDelete", !0);
        S(this, "sendRecommendations", !1);
        S(this, "sendSFW", !1);
        S(this, "sendNSFW", !1);
        S(this, "preference", fl.DAILY);
        ge(this, { loading: V, settingsEnabled: ce, videoAutoplay: V, softDelete: V, sendRecommendations: V, sendSFW: V, sendNSFW: V, preference: V, updateUserSettings: X.bound });
    }
    updateUserSettings() {
        (this.loading = !0),
            xk({ videoAutoplay: this.videoAutoplay, softDelete: this.softDelete, sendSfw: this.sendSFW, sendNsfw: this.sendNSFW, preference: this.preference, sendRecommendations: this.sendRecommendations }).finally(() => {
                this.loading = !1;
            });
    }
    refreshSettings() {
        const t = Xk();
        if (!t) {
            this.clearSettings();
            return;
        }
        (this.videoAutoplay = t.video_autoplay), (this.softDelete = t.soft_delete), (this.sendRecommendations = t.send_recommendations), (this.sendSFW = t.send_sfw), (this.sendNSFW = t.send_nsfw), (this.preference = t.preference);
    }
    clearSettings() {
        (this.videoAutoplay = !1), (this.softDelete = !0), (this.sendRecommendations = !1), (this.sendSFW = !1), (this.sendNSFW = !1), (this.preference = fl.DAILY);
    }
    get settingsEnabled() {
        return on();
    }
}
const Po = new Dk();
var Nk = ((e) => ((e.NEW_PREMIUM_USER = "NEW_PREMIUM_USER"), (e.EXPIRED_PREMIUM_USER = "EXPIRED_PREMIUM_USER"), (e.RESUME_PREMIUM_USER = "RESUME_PREMIUM_USER"), e))(Nk || {}),
    Lk = ((e) => ((e.ACCOUNT = "ACCOUNT"), (e.COLLECTION = "COLLECTION"), e))(Lk || {}),
    Mk = ((e) => ((e.AUDIENCE_A = "AUDIENCE_A"), (e.AUDIENCE_B = "AUDIENCE_B"), e))(Mk || {}),
    Fk = ((e) => (
        (e.CUSTOM_CHARGE_CODE = "CUSTOM_CHARGE_CODE"),
        (e.DATA_SAVER = "DATA_SAVER"),
        (e.EDIT_PREFERENCES = "EDIT_PREFERENCES"),
        (e.EXCLUDED_CONTENT = "EXCLUDED_CONTENT"),
        (e.CHANGE_LANGUAGE = "CHANGE_LANGUAGE"),
        (e.PIN_PROTECT = "PIN_PROTECT"),
        e
    ))(Fk || {}),
    $k = ((e) => (
        (e.AD_LIVE_CIRCLE = "AD_LIVE_CIRCLE"),
        (e.AD_TAB_LIVE_MODELS = "AD_TAB_LIVE_MODELS"),
        (e.AD_TAB_SEX_GAMES = "AD_TAB_SEX_GAMES"),
        (e.CAMS_URL = "CAMS_URL"),
        (e.EXTERNAL_HEADER_FUNNEL_PREMIUM_ADBLOCK = "EXTERNAL_HEADER_FUNNEL_PREMIUM_ADBLOCK"),
        (e.FULLSCREEN_SEX_GAMES = "FULLSCREEN_SEX_GAMES"),
        (e.LATEST_CONTENT = "LATEST_CONTENT"),
        (e.SLOW_LOADING = "SLOW_LOADING"),
        (e.SEARCH_RESULT_BANNER_PREMIUM = "SEARCH_RESULT_BANNER_PREMIUM"),
        (e.SEARCH_RESULT_BANNER_SEX_GAMES = "SEARCH_RESULT_BANNER_SEX_GAMES"),
        (e.SUBSCRIPTION = "SUBSCRIPTION"),
        e
    ))($k || {}),
    Ly = ((e) => (
        (e.AD_ACTIVE_USERS = "AD_ACTIVE_USERS"),
        (e.ADBLOCK_POPUP_CTA = "ADBLOCK_POPUP_CTA"),
        (e.DISCORD_BUTTON = "DISCORD_BUTTON"),
        (e.DOWNLOAD = "DOWNLOAD"),
        (e.NOTIFICATIONS_BUTTON = "NOTIFICATIONS_BUTTON"),
        (e.RECOMENDATION_POPUP = "RECOMENDATION_POPUP"),
        (e.VIDEO_AUTOPLAY = "VIDEO_AUTOPLAY"),
        e
    ))(Ly || {});
function Uk(e) {
    return e.includes("scrolller") ? e : "https://yotta.scrolller.com/" + e;
}
function Bk(e) {
    return (t, n) => (e === "VIDEO" ? (t.fileType === n.fileType ? 0 : t.fileType === "MP4" ? -1 : 1) : n.width - t.width);
}
async function jk(e) {
    if (!on()) {
        Us({ onSuccess: () => jk(e) });
        return;
    }
    if (!ni()) {
        Yy({ feature: Ly.DOWNLOAD });
        return;
    }
    Hk(e).catch((t) => {
        jo({ message: t.message || "Error while downloading." });
    });
}
async function Vk(e) {
    const t = `This content is being served from one of our content partner website.
Unfortunately, they don't allow downloading data at this moment.`;
    if (!e) throw new Error(t);
    if (!!e.username) throw new Error("The Creator of this content has disabled downloading to protect their rights.");
    const r = e.displayMedia,
        i = r.mediaRenderType,
        s = (i === "VIDEO" ? r.videoSources : r.highResPictureSources).sort(Bk(i));
    let a;
    for (let p of s) {
        try {
            a = await fetch(Uk(p.url) + "?no-cache");
        } catch {}
        if (a) break;
    }
    if (!a) throw new Error(t);
    const u = s[0].url.split("/").pop(),
        c = await a.blob(),
        d = URL.createObjectURL(c),
        f = document.createElement("a");
    (f.href = d), (f.download = "" + u), document.body.appendChild(f), f.click(), document.body.removeChild(f);
}
class zk {
    constructor() {
        S(this, "numberOfUserDownloadsToday", 0);
        S(this, "inProgressDownloads", []);
        ge(this, { handleDonwloadContent: X.bound, setDownloadInProgress: X.bound, clearState: X.bound, addCountToTodayDownloads: X.bound, inProgressDownloads: V, numberOfUserDownloadsToday: V });
    }
    addCountToTodayDownloads(t) {
        this.numberOfUserDownloadsToday += t;
    }
    setDownloadInProgress(t) {
        const n = this.inProgressDownloads;
        this.inProgressDownloads = [t, ...n];
    }
    removeDownloadInProgress(t) {
        const n = this.inProgressDownloads.findIndex((i) => i.id === t.id),
            r = this.inProgressDownloads;
        this.inProgressDownloads.splice(n, n + 1), (this.inProgressDownloads = [...r]);
    }
    async handleDonwloadContent(t) {
        try {
            this.setDownloadInProgress(t), await Vk(t), this.onDownloadSuccess(t);
        } catch (n) {
            throw (qe.track("content-download", { label: "content-download-error" }), new Error(n.message));
        } finally {
            this.removeDownloadInProgress(t);
        }
    }
    onDownloadSuccess(t) {
        try {
            this.numberOfUserDownloadsToday++, qe.track("content-download", { label: "content-download-success" });
        } catch {}
    }
    clearState() {
        (this.inProgressDownloads = []), (this.numberOfUserDownloadsToday = 0);
    }
}
const Zl = new zk(),
    Hk = async (e) => Zl.handleDonwloadContent(e),
    Hx = () => Zl.inProgressDownloads,
    Wk = () => Zl.clearState(),
    Gk = (e) => Zl.addCountToTodayDownloads(e),
    My = "NSFW_FILTER",
    Kf = V.box(gn(My) ?? !1);
function Ms() {
    return Kf.get();
}
function Fy(e, t) {
    eo(() => {
        Kf.set(e);
    }),
        !t && xn(My, e);
}
function Wx() {
    const e = !Kf.get();
    Fy(e);
}
async function qk() {
    return (
        await de(
            `
    query GetLoggedInUserQuery {
      getLoggedInUser {
        id
        username
        email
        premium_ends
        last_active_at
        isPremium
        socialType
        status
        hasLeaderboardEntry
        cta_closed_at
        leaderboard_visited_at
        settings{
          id
          video_autoplay
          send_recommendations
          send_sfw
          send_nsfw
          preference
          soft_delete
        }
        first_name
        last_name
        phone_number
        bio
        birthday
        display_name
        location
        banner_image
        avatar
        wishlist
        is_creator
        video_intro
        social_media {
          instagram
          twitter
          tiktok
          snapchat
          personal_website
        }
      }
    }
  `,
            {},
            { useGlobalErrorHandler: !1, disablePopup: !0, apiHost: "typescript" }
        )
    ).getLoggedInUser;
}
async function Qk(e, t, n) {
    return (
        await de(
            `
    mutation RegisterQuery($username: String!, $password: String!, $email: String!) {
      registerUser(username: $username, password: $password, email: $email) {
        username
        token
        expiresAt
        isAdmin
      }
    }
  `,
            { username: e, password: t, email: n },
            { useGlobalErrorHandler: !1, apiHost: "typescript" }
        )
    ).registerUser;
}
async function Yk({ email: e, username: t }) {
    return (
        await de(
            `
    mutation UpdateUserMain($email: String, $username: String) {
      updateUserMain(email: $email, username: $username)
    }
  `,
            { email: e, username: t },
            { useGlobalErrorHandler: !1 }
        )
    ).updateUserMain;
}
const fe = new Ik(),
    Kk = () => fe.loginDetails,
    on = () => fe.isLoggedIn,
    Gx = () => {
        var e;
        return ((e = fe.loginDetails) == null ? void 0 : e.isAdmin) === !0;
    },
    $y = () => {
        Fy(!1), Dy("CONFIRMED_NSFW"), Ok.clearStates(), fe.clearLogin(), Wk();
    },
    nn = () => fe.loggedInUser,
    Xk = () => {
        var e;
        return (e = fe.loggedInUser) == null ? void 0 : e.settings;
    },
    ni = () => {
        var e, t;
        return ((e = fe.loggedInUser) == null ? void 0 : e.isPremium) ?? ((t = fe.loginDetails) == null ? void 0 : t.isPremium);
    },
    qx = () => fe.hasRecommendations,
    Jk = () => {
        var e;
        return (e = fe.loggedInUser) == null ? void 0 : e.is_creator;
    },
    Qx = () => {
        var e;
        return (e = fe.loginDetails) == null ? void 0 : e.token;
    },
    Zk = () => {
        var e, t;
        return ((e = fe == null ? void 0 : fe.loggedInUser) == null ? void 0 : e.status) || ((t = fe == null ? void 0 : fe.loginDetails) == null ? void 0 : t.status);
    },
    Yx = () => fe.clearLogin(),
    Hh = (e) => fe.setIsUserLoading(e),
    Kx = () => fe.isUserLoading;
function Xf() {
    const e = gn(Ti),
        t = e == null ? void 0 : e.token;
    return t || null;
}
function eP() {
    return Xf() !== null ? fe.isTokenExpired(fe.loginDetails) : !0;
}
function Xx() {
    var t;
    const e = (t = nn()) == null ? void 0 : t.premium_ends;
    return e ? new Date(e).getTime() < Date.now() : !1;
}
const Uy = () => {
    const e = Zk();
    return e === "RESTORATION" || e === "DELETED";
};
function Jf(e) {
    fe.setLoginDetails(e);
}
async function Jx(e) {
    await Yk(e);
    const t = nn();
    fe.setLoggedInUser({ ...t, ...e });
}
async function Zx(e, t, n, r) {
    const i = await Qk(e, t, n);
    Jf(i), xn("PREMIUM_CTA_STORAGE", Date.now() - 2 * 24 * 60 * 60 * 1e3), await Zf(), r && new Promise((o) => setTimeout(tP, 1e3)), qe.track("register-user-success");
}
function tP() {
    (Po.sendRecommendations = !0), (Po.sendSFW = !0), (Po.preference = fl.WEEKLY), Po.updateUserSettings();
}
async function Zf() {
    try {
        Hh(!0);
        const e = gn(Ti);
        if (!(e != null && e.token)) throw new Error("No authorization token found");
        const t = await qk();
        nP(t);
        const { username: n, isPremium: r, is_creator: i, status: o } = t;
        Jf({ ...e, username: n, status: o, isPremium: r, isCreator: i });
        const s = t.settings;
        (t.settings = s), fe.setLoggedInUser(t), qe.identify(String(t.id), { email: t.email, username: t.username, isPremium: t.isPremium });
    } catch {
    } finally {
        Hh(!1);
    }
}
function nP(e) {
    var t;
    Uy() && e.status === "ACTIVE" && qe.track("Restore account funnel", { label: "automatic-account-recover" }), ((t = fe == null ? void 0 : fe.loginDetails) == null ? void 0 : t.status) !== e.status && rP(e.status);
}
function rP(e) {
    const t = fe.loginDetails;
    t != null && t.status && ((t.status = e), Jf(t));
}
const iP = function (e) {
    var t = "Unknown";
    function n(y) {
        e({ isPrivate: y, browserName: t });
    }
    function r() {
        var y = navigator.userAgent;
        return y.match(/Edg/) ? "Edge" : y.match(/Chrome/) ? (navigator.brave !== void 0 ? "Brave" : "Chrome") : "Chromium";
    }
    function i(y) {
        return y === eval.toString().length;
    }
    function o() {
        var y = navigator.vendor;
        return y !== void 0 && y.indexOf("Apple") === 0 && i(37);
    }
    function s() {
        var y = navigator.vendor;
        return y !== void 0 && y.indexOf("Google") === 0 && i(33);
    }
    function a() {
        return document.documentElement !== void 0 && document.documentElement.style.MozAppearance !== void 0 && i(37);
    }
    function l() {
        return navigator.msSaveBlob !== void 0 && i(39);
    }
    function u() {
        try {
            window.safari.pushNotification.requestPermission("https://example.com", "private", {}, function () {});
        } catch (y) {
            return n(!new RegExp("gesture").test(y));
        }
        return n(!1);
    }
    function c() {
        var y = !1,
            P = document.createElement("iframe");
        (P.style.display = "none"),
            document.body.appendChild(P),
            P.contentWindow.applicationCache.addEventListener("error", function () {
                return (y = !0), n(!0);
            }),
            setTimeout(function () {
                y || n(!1);
            }, 100);
    }
    function d() {
        var y = window.openDatabase,
            P = window.localStorage;
        try {
            y(null, null, null, null);
        } catch {
            return n(!0);
        }
        try {
            P.setItem("test", "1"), P.removeItem("test");
        } catch {
            return n(!0);
        }
        return n(!1);
    }
    function f() {
        var y = window;
        if (navigator.maxTouchPoints !== void 0)
            if (y.safari !== void 0 && y.DeviceMotionEvent === void 0) (t = "Safari for macOS"), u();
            else if (y.DeviceMotionEvent !== void 0) (t = "Safari for iOS"), c();
            else throw new Error("Could not identify this version of Safari");
        else d();
    }
    function p() {
        var y = window;
        return y.performance !== void 0 && y.performance.memory !== void 0 && y.performance.memory.jsHeapSizeLimit !== void 0 ? performance.memory.jsHeapSizeLimit : 1073741824;
    }
    function m() {
        navigator.webkitTemporaryStorage.queryUsageAndQuota(
            function (y, P) {
                n(P < p());
            },
            function (y) {
                throw new Error("detectIncognito somehow failed to query storage quota: " + y.message);
            }
        );
    }
    function v() {
        var y = window.webkitRequestFileSystem,
            P = function () {
                n(!1);
            },
            N = function () {
                n(!0);
            };
        y(0, 1, P, N);
    }
    function O() {
        Promise !== void 0 && Promise.allSettled !== void 0 ? m() : v();
    }
    function g() {
        n(navigator.serviceWorker === void 0);
    }
    function h() {
        n(window.indexedDB === void 0);
    }
    function _() {
        if (o()) f();
        else if (s()) (t = r()), O();
        else if (a()) (t = "Firefox"), g();
        else if (l()) (t = "Internet Explorer"), h();
        else throw new Error("detectIncognito cannot determine the browser");
    }
    _();
};
var By = {},
    jy = {},
    Vy = {};
(function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
    var t = function () {
            for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
            if (typeof window < "u") {
                var a;
                typeof window.gtag > "u" &&
                    ((window.dataLayer = window.dataLayer || []),
                    (window.gtag = function () {
                        window.dataLayer.push(arguments);
                    })),
                    (a = window).gtag.apply(a, o);
            }
        },
        n = t;
    e.default = n;
})(Vy);
var zy = {};
(function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = s);
    var t = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
    function n(a) {
        return a
            .toString()
            .trim()
            .replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (l, u, c) {
                return u > 0 && u + l.length !== c.length && l.search(t) > -1 && c.charAt(u - 2) !== ":" && (c.charAt(u + l.length) !== "-" || c.charAt(u - 1) === "-") && c.charAt(u - 1).search(/[^\s-]/) < 0
                    ? l.toLowerCase()
                    : l.substr(1).search(/[A-Z]|\../) > -1
                    ? l
                    : l.charAt(0).toUpperCase() + l.substr(1);
            });
    }
    function r(a) {
        return typeof a == "string" && a.indexOf("@") !== -1;
    }
    var i = "REDACTED (Potential Email Address)";
    function o(a) {
        return r(a) ? (console.warn("This arg looks like an email address, redacting."), i) : a;
    }
    function s() {
        var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "",
            l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
            u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
            c = a || "";
        return l && (c = n(a)), u && (c = o(c)), c;
    }
})(zy);
(function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = e.GA4 = void 0);
    var t = s(Vy),
        n = s(zy),
        r = ["eventCategory", "eventAction", "eventLabel", "eventValue", "hitType"],
        i = ["title", "location"],
        o = ["page", "hitType"];
    function s(D) {
        return D && D.__esModule ? D : { default: D };
    }
    function a(D, E) {
        if (D == null) return {};
        var C = l(D, E),
            R,
            b;
        if (Object.getOwnPropertySymbols) {
            var T = Object.getOwnPropertySymbols(D);
            for (b = 0; b < T.length; b++) (R = T[b]), !(E.indexOf(R) >= 0) && Object.prototype.propertyIsEnumerable.call(D, R) && (C[R] = D[R]);
        }
        return C;
    }
    function l(D, E) {
        if (D == null) return {};
        var C = {},
            R = Object.keys(D),
            b,
            T;
        for (T = 0; T < R.length; T++) (b = R[T]), !(E.indexOf(b) >= 0) && (C[b] = D[b]);
        return C;
    }
    function u(D) {
        "@babel/helpers - typeof";
        return (
            (u =
                typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                    ? function (E) {
                          return typeof E;
                      }
                    : function (E) {
                          return E && typeof Symbol == "function" && E.constructor === Symbol && E !== Symbol.prototype ? "symbol" : typeof E;
                      }),
            u(D)
        );
    }
    function c(D) {
        return p(D) || f(D) || h(D) || d();
    }
    function d() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function f(D) {
        if ((typeof Symbol < "u" && D[Symbol.iterator] != null) || D["@@iterator"] != null) return Array.from(D);
    }
    function p(D) {
        if (Array.isArray(D)) return _(D);
    }
    function m(D, E) {
        var C = Object.keys(D);
        if (Object.getOwnPropertySymbols) {
            var R = Object.getOwnPropertySymbols(D);
            E &&
                (R = R.filter(function (b) {
                    return Object.getOwnPropertyDescriptor(D, b).enumerable;
                })),
                C.push.apply(C, R);
        }
        return C;
    }
    function v(D) {
        for (var E = 1; E < arguments.length; E++) {
            var C = arguments[E] != null ? arguments[E] : {};
            E % 2
                ? m(Object(C), !0).forEach(function (R) {
                      G(D, R, C[R]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(D, Object.getOwnPropertyDescriptors(C))
                : m(Object(C)).forEach(function (R) {
                      Object.defineProperty(D, R, Object.getOwnPropertyDescriptor(C, R));
                  });
        }
        return D;
    }
    function O(D, E) {
        return P(D) || y(D, E) || h(D, E) || g();
    }
    function g() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function h(D, E) {
        if (D) {
            if (typeof D == "string") return _(D, E);
            var C = Object.prototype.toString.call(D).slice(8, -1);
            if ((C === "Object" && D.constructor && (C = D.constructor.name), C === "Map" || C === "Set")) return Array.from(D);
            if (C === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C)) return _(D, E);
        }
    }
    function _(D, E) {
        (E == null || E > D.length) && (E = D.length);
        for (var C = 0, R = new Array(E); C < E; C++) R[C] = D[C];
        return R;
    }
    function y(D, E) {
        var C = D == null ? null : (typeof Symbol < "u" && D[Symbol.iterator]) || D["@@iterator"];
        if (C != null) {
            var R,
                b,
                T,
                B,
                J = [],
                Q = !0,
                re = !1;
            try {
                if (((T = (C = C.call(D)).next), E === 0)) {
                    if (Object(C) !== C) return;
                    Q = !1;
                } else for (; !(Q = (R = T.call(C)).done) && (J.push(R.value), J.length !== E); Q = !0);
            } catch (te) {
                (re = !0), (b = te);
            } finally {
                try {
                    if (!Q && C.return != null && ((B = C.return()), Object(B) !== B)) return;
                } finally {
                    if (re) throw b;
                }
            }
            return J;
        }
    }
    function P(D) {
        if (Array.isArray(D)) return D;
    }
    function N(D, E) {
        if (!(D instanceof E)) throw new TypeError("Cannot call a class as a function");
    }
    function $(D, E) {
        for (var C = 0; C < E.length; C++) {
            var R = E[C];
            (R.enumerable = R.enumerable || !1), (R.configurable = !0), "value" in R && (R.writable = !0), Object.defineProperty(D, K(R.key), R);
        }
    }
    function F(D, E, C) {
        return E && $(D.prototype, E), C && $(D, C), Object.defineProperty(D, "prototype", { writable: !1 }), D;
    }
    function G(D, E, C) {
        return (E = K(E)), E in D ? Object.defineProperty(D, E, { value: C, enumerable: !0, configurable: !0, writable: !0 }) : (D[E] = C), D;
    }
    function K(D) {
        var E = Ee(D, "string");
        return u(E) === "symbol" ? E : String(E);
    }
    function Ee(D, E) {
        if (u(D) !== "object" || D === null) return D;
        var C = D[Symbol.toPrimitive];
        if (C !== void 0) {
            var R = C.call(D, E || "default");
            if (u(R) !== "object") return R;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (E === "string" ? String : Number)(D);
    }
    var Ce = (function () {
        function D() {
            var E = this;
            N(this, D),
                G(this, "reset", function () {
                    (E.isInitialized = !1), (E._testMode = !1), E._currentMeasurementId, (E._hasLoadedGA = !1), (E._isQueuing = !1), (E._queueGtag = []);
                }),
                G(this, "_gtag", function () {
                    for (var C = arguments.length, R = new Array(C), b = 0; b < C; b++) R[b] = arguments[b];
                    E._testMode || E._isQueuing ? E._queueGtag.push(R) : t.default.apply(void 0, R);
                }),
                G(this, "_loadGA", function (C, R) {
                    var b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "https://www.googletagmanager.com/gtag/js";
                    if (!(typeof window > "u" || typeof document > "u") && !E._hasLoadedGA) {
                        var T = document.createElement("script");
                        (T.async = !0),
                            (T.src = "".concat(b, "?id=").concat(C)),
                            R && T.setAttribute("nonce", R),
                            document.body.appendChild(T),
                            (window.dataLayer = window.dataLayer || []),
                            (window.gtag = function () {
                                window.dataLayer.push(arguments);
                            }),
                            (E._hasLoadedGA = !0);
                    }
                }),
                G(this, "_toGtagOptions", function (C) {
                    if (C) {
                        var R = {
                                cookieUpdate: "cookie_update",
                                cookieExpires: "cookie_expires",
                                cookieDomain: "cookie_domain",
                                cookieFlags: "cookie_flags",
                                userId: "user_id",
                                clientId: "client_id",
                                anonymizeIp: "anonymize_ip",
                                contentGroup1: "content_group1",
                                contentGroup2: "content_group2",
                                contentGroup3: "content_group3",
                                contentGroup4: "content_group4",
                                contentGroup5: "content_group5",
                                allowAdFeatures: "allow_google_signals",
                                allowAdPersonalizationSignals: "allow_ad_personalization_signals",
                                nonInteraction: "non_interaction",
                                page: "page_path",
                                hitCallback: "event_callback",
                            },
                            b = Object.entries(C).reduce(function (T, B) {
                                var J = O(B, 2),
                                    Q = J[0],
                                    re = J[1];
                                return R[Q] ? (T[R[Q]] = re) : (T[Q] = re), T;
                            }, {});
                        return b;
                    }
                }),
                G(this, "initialize", function (C) {
                    var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                    if (!C) throw new Error("Require GA_MEASUREMENT_ID");
                    var b = typeof C == "string" ? [{ trackingId: C }] : C;
                    E._currentMeasurementId = b[0].trackingId;
                    var T = R.gaOptions,
                        B = R.gtagOptions,
                        J = R.nonce,
                        Q = R.testMode,
                        re = Q === void 0 ? !1 : Q,
                        te = R.gtagUrl;
                    if (
                        ((E._testMode = re),
                        re || E._loadGA(E._currentMeasurementId, J, te),
                        E.isInitialized ||
                            (E._gtag("js", new Date()),
                            b.forEach(function (jt) {
                                var Bs = v(v(v({}, E._toGtagOptions(v(v({}, T), jt.gaOptions))), B), jt.gtagOptions);
                                Object.keys(Bs).length ? E._gtag("config", jt.trackingId, Bs) : E._gtag("config", jt.trackingId);
                            })),
                        (E.isInitialized = !0),
                        !re)
                    ) {
                        var vt = c(E._queueGtag);
                        for (E._queueGtag = [], E._isQueuing = !1; vt.length; ) {
                            var Ie = vt.shift();
                            E._gtag.apply(E, c(Ie)), Ie[0] === "get" && (E._isQueuing = !0);
                        }
                    }
                }),
                G(this, "set", function (C) {
                    if (!C) {
                        console.warn("`fieldsObject` is required in .set()");
                        return;
                    }
                    if (u(C) !== "object") {
                        console.warn("Expected `fieldsObject` arg to be an Object");
                        return;
                    }
                    Object.keys(C).length === 0 && console.warn("empty `fieldsObject` given to .set()"), E._gaCommand("set", C);
                }),
                G(this, "_gaCommandSendEvent", function (C, R, b, T, B) {
                    E._gtag("event", R, v(v({ event_category: C, event_label: b, value: T }, B && { non_interaction: B.nonInteraction }), E._toGtagOptions(B)));
                }),
                G(this, "_gaCommandSendEventParameters", function () {
                    for (var C = arguments.length, R = new Array(C), b = 0; b < C; b++) R[b] = arguments[b];
                    if (typeof R[0] == "string") E._gaCommandSendEvent.apply(E, c(R.slice(1)));
                    else {
                        var T = R[0],
                            B = T.eventCategory,
                            J = T.eventAction,
                            Q = T.eventLabel,
                            re = T.eventValue;
                        T.hitType;
                        var te = a(T, r);
                        E._gaCommandSendEvent(B, J, Q, re, te);
                    }
                }),
                G(this, "_gaCommandSendTiming", function (C, R, b, T) {
                    E._gtag("event", "timing_complete", { name: R, value: b, event_category: C, event_label: T });
                }),
                G(this, "_gaCommandSendPageview", function (C, R) {
                    if (R && Object.keys(R).length) {
                        var b = E._toGtagOptions(R),
                            T = b.title,
                            B = b.location,
                            J = a(b, i);
                        E._gtag("event", "page_view", v(v(v(v({}, C && { page_path: C }), T && { page_title: T }), B && { page_location: B }), J));
                    } else C ? E._gtag("event", "page_view", { page_path: C }) : E._gtag("event", "page_view");
                }),
                G(this, "_gaCommandSendPageviewParameters", function () {
                    for (var C = arguments.length, R = new Array(C), b = 0; b < C; b++) R[b] = arguments[b];
                    if (typeof R[0] == "string") E._gaCommandSendPageview.apply(E, c(R.slice(1)));
                    else {
                        var T = R[0],
                            B = T.page;
                        T.hitType;
                        var J = a(T, o);
                        E._gaCommandSendPageview(B, J);
                    }
                }),
                G(this, "_gaCommandSend", function () {
                    for (var C = arguments.length, R = new Array(C), b = 0; b < C; b++) R[b] = arguments[b];
                    var T = typeof R[0] == "string" ? R[0] : R[0].hitType;
                    switch (T) {
                        case "event":
                            E._gaCommandSendEventParameters.apply(E, R);
                            break;
                        case "pageview":
                            E._gaCommandSendPageviewParameters.apply(E, R);
                            break;
                        case "timing":
                            E._gaCommandSendTiming.apply(E, c(R.slice(1)));
                            break;
                        case "screenview":
                        case "transaction":
                        case "item":
                        case "social":
                        case "exception":
                            console.warn("Unsupported send command: ".concat(T));
                            break;
                        default:
                            console.warn("Send command doesn't exist: ".concat(T));
                    }
                }),
                G(this, "_gaCommandSet", function () {
                    for (var C = arguments.length, R = new Array(C), b = 0; b < C; b++) R[b] = arguments[b];
                    typeof R[0] == "string" && (R[0] = G({}, R[0], R[1])), E._gtag("set", E._toGtagOptions(R[0]));
                }),
                G(this, "_gaCommand", function (C) {
                    for (var R = arguments.length, b = new Array(R > 1 ? R - 1 : 0), T = 1; T < R; T++) b[T - 1] = arguments[T];
                    switch (C) {
                        case "send":
                            E._gaCommandSend.apply(E, b);
                            break;
                        case "set":
                            E._gaCommandSet.apply(E, b);
                            break;
                        default:
                            console.warn("Command doesn't exist: ".concat(C));
                    }
                }),
                G(this, "ga", function () {
                    for (var C = arguments.length, R = new Array(C), b = 0; b < C; b++) R[b] = arguments[b];
                    if (typeof R[0] == "string") E._gaCommand.apply(E, R);
                    else {
                        var T = R[0];
                        E._gtag("get", E._currentMeasurementId, "client_id", function (B) {
                            E._isQueuing = !1;
                            var J = E._queueGtag;
                            for (
                                T({
                                    get: function (te) {
                                        return te === "clientId" ? B : te === "trackingId" ? E._currentMeasurementId : te === "apiVersion" ? "1" : void 0;
                                    },
                                });
                                J.length;

                            ) {
                                var Q = J.shift();
                                E._gtag.apply(E, c(Q));
                            }
                        }),
                            (E._isQueuing = !0);
                    }
                    return E.ga;
                }),
                G(this, "event", function (C, R) {
                    if (typeof C == "string") E._gtag("event", C, E._toGtagOptions(R));
                    else {
                        var b = C.action,
                            T = C.category,
                            B = C.label,
                            J = C.value,
                            Q = C.nonInteraction,
                            re = C.transport;
                        if (!T || !b) {
                            console.warn("args.category AND args.action are required in event()");
                            return;
                        }
                        var te = { hitType: "event", eventCategory: (0, n.default)(T), eventAction: (0, n.default)(b) };
                        B && (te.eventLabel = (0, n.default)(B)),
                            typeof J < "u" && (typeof J != "number" ? console.warn("Expected `args.value` arg to be a Number.") : (te.eventValue = J)),
                            typeof Q < "u" && (typeof Q != "boolean" ? console.warn("`args.nonInteraction` must be a boolean.") : (te.nonInteraction = Q)),
                            typeof re < "u" &&
                                (typeof re != "string"
                                    ? console.warn("`args.transport` must be a string.")
                                    : (["beacon", "xhr", "image"].indexOf(re) === -1 && console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"), (te.transport = re))),
                            E._gaCommand("send", te);
                    }
                }),
                G(this, "send", function (C) {
                    E._gaCommand("send", C);
                }),
                this.reset();
        }
        return (
            F(D, [
                {
                    key: "gtag",
                    value: function () {
                        this._gtag.apply(this, arguments);
                    },
                },
            ]),
            D
        );
    })();
    e.GA4 = Ce;
    var je = new Ce();
    e.default = je;
})(jy);
(function (e) {
    function t(a) {
        "@babel/helpers - typeof";
        return (
            (t =
                typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                    ? function (l) {
                          return typeof l;
                      }
                    : function (l) {
                          return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
                      }),
            t(a)
        );
    }
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = e.ReactGAImplementation = void 0);
    var n = i(jy);
    function r(a) {
        if (typeof WeakMap != "function") return null;
        var l = new WeakMap(),
            u = new WeakMap();
        return (r = function (d) {
            return d ? u : l;
        })(a);
    }
    function i(a, l) {
        if (!l && a && a.__esModule) return a;
        if (a === null || (t(a) !== "object" && typeof a != "function")) return { default: a };
        var u = r(l);
        if (u && u.has(a)) return u.get(a);
        var c = {},
            d = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var f in a)
            if (f !== "default" && Object.prototype.hasOwnProperty.call(a, f)) {
                var p = d ? Object.getOwnPropertyDescriptor(a, f) : null;
                p && (p.get || p.set) ? Object.defineProperty(c, f, p) : (c[f] = a[f]);
            }
        return (c.default = a), u && u.set(a, c), c;
    }
    var o = n.GA4;
    e.ReactGAImplementation = o;
    var s = n.default;
    e.default = s;
})(By);
const ad = pg(By);
ad.initialize(uk);
const qe = {
        track: (e, t) => {
            ad.event(e, t);
        },
        identify: (e, t) => {
            ad.set({ userId: e, ...t });
        },
    },
    eD = () => {
        const e = on(),
            t = ni();
        return e ? (t ? "premium-user" : "logged-in-user") : "not-logged-in-user";
    },
    oP = () => {
        iP((e) => {
            e.isPrivate && qe.track("detected_incognito");
        });
    };
class eu {
    constructor(t, n = Date.now().toString()) {
        S(this, "id");
        S(this, "urlString");
        S(this, "isActive", !1);
        S(this, "isFirstEntry", !1);
        S(this, "temporaryState");
        S(this, "getQueryParameter", (t) => {
            const n = new URL(this.urlString).searchParams.get(t);
            return n === "" ? "true" : n !== null ? n.toLowerCase() : null;
        });
        ge(this, { urlString: V, itemUrl: ce, hash: ce, setUrl: X, url: ce, setQueryParameter: X.bound }), (this.id = n), (this.urlString = t.href), aP(t);
    }
    get itemUrl() {
        return Pb(this.url.pathname);
    }
    get hash() {
        const { hash: t } = new URL(this.urlString);
        if (t !== "") return t.slice(1);
    }
    setUrl(t) {
        this.urlString = t.href;
    }
    get url() {
        return new URL(this.urlString);
    }
    setQueryParameter(t, n, r, i = !1) {
        const o = new URL(this.urlString);
        n === r ? o.searchParams.delete(t) : o.searchParams.set(t, n), this.setUrl(o), i ? this.pushHistoryState() : this.replaceHistoryState();
    }
    getHistoryPayload() {
        return { id: this.id };
    }
    pushHistoryState() {
        const t = this.getHistoryPayload();
        window.history.pushState(t, "", this.urlString);
    }
    replaceHistoryState() {
        const t = this.getHistoryPayload();
        window.history.replaceState(t, "", this.urlString);
    }
    setIsFirstEntry(t) {
        this.isFirstEntry = t;
    }
    setTemporaryState(t) {
        this.temporaryState = t;
    }
}
const Wh = "sm",
    sP = "share",
    aP = async (e) => {
        const t = e.searchParams.get(Wh),
            n = e.searchParams.get(sP);
        e.searchParams.delete(Wh), t && (t === "true" ? await qe.track("Outreach-Funnel", { label: e.pathname }) : await qe.track(`Outreach-Funnel-${t}`, { label: e.pathname })), n && (await qe.track("User-Traffic", { label: e.search }));
    };
class lP {
    constructor(t) {
        S(this, "historyStatesById", new Map());
        S(this, "currentHistoryId");
        S(this, "paymentHistoryEntry");
        ge(this, { currentHistoryId: V, currentHistoryEntry: ce, updateCurrentHistoryEntry: X.bound, replaceCurrentHistoryEntry: X.bound });
        const { id: n } = t;
        (this.currentHistoryId = n), (this.paymentHistoryEntry = t), this.historyStatesById.set(n, t), (t.isActive = !0);
    }
    get currentHistoryEntry() {
        return this.historyStatesById.get(this.currentHistoryId);
    }
    get paymentHistoryEntryFunc() {
        return this.paymentHistoryEntry;
    }
    updateCurrentHistoryEntry(t) {
        this.replaceCurrentHistoryEntry(t), (this.currentHistoryId = t.id);
    }
    replaceCurrentHistoryEntry(t) {
        this.currentHistoryEntry !== void 0 && (this.currentHistoryEntry.isActive = !1);
        const { id: n } = t,
            r = this.historyStatesById.get(n);
        r !== void 0 ? (r.isActive = !0) : ((t.isActive = !0), this.historyStatesById.set(n, t));
    }
    getEntry(t) {
        return this.historyStatesById.get(t);
    }
    setPaymentHistoryEntry(t) {
        this.paymentHistoryEntry = t;
    }
}
const Hy = cP(),
    Lr = new lP(Hy);
Hy.replaceHistoryState();
window.onpopstate = (e) => {
    if (e.state === null) return;
    const { id: t } = e.state,
        n = Wy(),
        r = Lr.getEntry(t);
    if (r !== void 0) r.setUrl(n), Lr.updateCurrentHistoryEntry(r);
    else {
        const i = new eu(n, t);
        Lr.updateCurrentHistoryEntry(i);
    }
};
window.history.scrollRestoration && (window.history.scrollRestoration = "auto");
function uP() {
    window.history.back();
}
function tD(e) {
    const { isFirstEntry: t } = oo();
    t ? Fs(e) : uP();
}
function Fs(e, t) {
    const n = new URL(e, window.location.origin);
    (e === L.PREMIUM || e === L.PREMIUM_CHECKOUT) && Lr.setPaymentHistoryEntry(oo());
    const r = new eu(n);
    r.setTemporaryState(t), Lr.updateCurrentHistoryEntry(r), r.pushHistoryState();
}
function oo() {
    return Lr.currentHistoryEntry;
}
function nD(e, t) {
    const n = new URL(window.location.origin + e),
        r = new eu(n);
    r.setTemporaryState(t), Lr.replaceCurrentHistoryEntry(r), r.replaceHistoryState();
}
function cP() {
    const e = new eu(Wy());
    return e.setIsFirstEntry(!0), e;
}
function Wy() {
    return new URL(window.location.href);
}
let Gy = new Map();
function Gh({ isActive: e, id: t }) {
    e && Gy.set(t, window.scrollY);
}
function qy(e) {
    return Gy.get(e.id);
}
async function rD({ filter: e = null, sortBy: t = "NEW", iterator: n = null, limit: r = 50 }) {
    const i = `
    query FavoritesQuery(
      $iterator: String
      $filter: MediaFilter
      $sortBy: FavoriteSortBy
      $hostsDown: [HostDisk]
    ) {
      getFavorites(
        isNsfw: ${Ms()}
        limit: ${r}
        iterator: $iterator
        filter: $filter
        sortBy: $sortBy
        disabledHosts: $hostsDown
      ) {
        iterator
        items {
          ${Gf({ isSubreddit: !0 })}
        }
      }
    }
  `,
        o = ys.getDisabledHosts(),
        s = { iterator: n, filter: e === Ut.SOUND ? Ut.VIDEO : e, sortBy: t, hostsDown: o };
    return (await de(i, s)).getFavorites;
}
async function iD(e) {
    const t = `
    query FavoritesQuery($userId: Int, $iterator: String, $seed: String, $ratio: String, $filter: String, $recommendationType: String!  $includeFilters: [Int!]) {
      getUsersSimilarToYouRecommendations(
        isNsfw: ${Ms()}
        userId: $userId
        filter: $filter
        iterator: $iterator
        seed: $seed
        ratio: $ratio
        recommendationType: $recommendationType
        includeFilters: $includeFilters
      ) {
        iterator
        seed
        items {
          ${Gf({ isSubreddit: !0 })}
        }
      }
    }
  `;
    ys.getDisabledHosts();
    let n;
    try {
        n = (await de(t, e, { apiHost: "typescript" })).getUsersSimilarToYouRecommendations;
    } catch (r) {
        if ((r == null ? void 0 : r.message) === "User not loaded in Weaviate") debugger;
    }
    return n;
}
async function dP() {
    return (
        await de(
            `
    query countFavorites {
      countFavorites
    }
  `,
            {},
            { apiHost: "typescript" }
        )
    ).countFavorites;
}
async function fP(e) {
    return (
        await de(
            `
    query MyCollectionQuery($type:String!, $isNsfw:Boolean!) {
      getMyCollection(type: $type, isNsfw: $isNsfw) {
        id
        title
        type
        rank
        url
        likes
        description
        user_account_id
      }
    }
  `,
            e,
            { apiHost: "typescript" }
        )
    ).getMyCollection;
}
async function pP() {
    return (
        await de(
            `
      mutation setUserLeaderBoardLastClosed {
        setUserLeaderBoardLastClosed
      }
    `,
            {},
            { useGlobalErrorHandler: !1, disablePopup: !0, apiHost: "typescript" }
        )
    ).user_account;
}
async function hP() {
    return (
        await de(
            `
      mutation setUserCTALastClosed {
          setUserCTALastClosed
        }
      }
    `,
            {},
            { useGlobalErrorHandler: !1, disablePopup: !0, apiHost: "typescript" }
        )
    ).setUserCTALastClosed;
}
const zt = V.box(null);
Qg(
    () => nn(),
    async (e) => {
        if (!e) {
            zt.set(null);
            return;
        }
        const t = await dP(),
            n = e.cta_closed_at,
            r = n ? new Date(n).getTime() : 0,
            i = async () => (Uy() ? [] : await fP({ type: "favorite", isNsfw: Ms() })),
            o = Date.now() - r > 3 * 24 * 60 * 60 * 1e3,
            s = !i && o;
        zt.set({ favoritesCount: t, shouldShowPopup: o, shouldShowCollectionCTA: s });
    }
);
var Mr;
((e) => {
    (e.getFavoriteCount = () => {
        const t = zt.get();
        return t && t.favoritesCount;
    }),
        (e.incrementFavoriteCount = () => {
            const t = zt.get();
            t && t.favoritesCount++;
        }),
        (e.decrementFavoriteCount = () => {
            const t = zt.get();
            t && t.favoritesCount--;
        }),
        (e.getShouldShowPopup = () => {
            const t = zt.get();
            return !!(t != null && t.shouldShowPopup);
        }),
        (e.getShouldShowCollectionCTAPopup = () => {
            const t = zt.get();
            return t && t.shouldShowCollectionCTA;
        }),
        (e.disablePopup = () => {
            const t = zt.get();
            t && zt.set({ favoritesCount: t.favoritesCount, shouldShowPopup: !1, shouldShowCollectionCTA: !1 }), nn() && hP();
        }),
        (e.disableLeaderboardPopup = () => {
            const t = zt.get();
            t && zt.set({ favoritesCount: t.favoritesCount, shouldShowPopup: t.shouldShowPopup, shouldShowCollectionCTA: t.shouldShowCollectionCTA }), nn() && pP();
        });
})(Mr || (Mr = {}));
class Y {
    constructor() {
        S(this, "isVisible", !1);
        S(this, "props", null);
        S(this, "animate", !1);
        S(this, "topPosition", 0);
        S(this, "resolve");
        S(this, "reject");
        ge(this, { isVisible: V, props: V.ref, showPopup: X.bound, closePopup: X.bound, disableAnimation: X.bound, clearProps: X.bound });
    }
    showPopup(t) {
        return (
            (this.animate = !0),
            (this.topPosition = qy(oo()) ?? 0),
            (this.props = t),
            (this.isVisible = !0),
            new Promise((n, r) => {
                (this.resolve = n), (this.reject = r);
            })
        );
    }
    closePopup() {
        (this.props = null), (this.isVisible = !1);
    }
    disableAnimation() {
        this.animate = !1;
    }
    clearProps() {
        this.props = null;
    }
}
class $s extends Y {
    constructor(n) {
        super();
        S(this, "knownTime");
        S(this, "known");
        S(this, "knownStorage");
        (this.knownTime = gn(n) ?? 0), (this.known = Date.now() - this.knownTime < 3 * 24 * 60 * 60 * 1e3), (this.knownStorage = n), ge(this, { knownTime: V, known: V, setKnown: X.bound });
    }
    setKnown() {
        (this.known = !0), xn(this.knownStorage, Date.now());
    }
    closePopup() {
        this.knownStorage === "PREMIUM_CTA_STORAGE" || this.knownStorage === "LATEST_CONTENT_PREMIUM_CTA_STORAGE" ? Mr.disablePopup() : this.knownStorage === "LEADERBOARD_POPUP" && Mr.disableLeaderboardPopup(),
            this.setKnown(),
            (this.props = null),
            (this.isVisible = !1);
    }
}
var Pr = ((e) => (
        (e.CATEGORY = "CATEGORY"), (e.SUBREDDIT = "SUBREDDIT"), (e.COLLECTION = "COLLECTION"), (e.MULTIPLE_SUBREDDITS = "MULTIPLE_SUBREDDITS"), (e.ALBUM = "ALBUM"), (e.SUBREDDIT_POST = "SUBREDDIT_POST"), (e.CREATOR = "CREATOR"), e
    ))(Pr || {}),
    vP = ((e) => ((e[(e.CONTAIN = 0)] = "CONTAIN"), (e[(e.COVER = 1)] = "COVER"), e))(vP || {});
function oD(e) {
    switch (e == null ? void 0 : e.fileType) {
        case Qt.WEBM:
            return "video/webm";
        case Qt.MP4:
            return "video/mp4";
        case Qt.JPEG:
            return "image/jpeg";
        case Qt.PNG:
            return "image/png";
        case Qt.GIF:
            return "image/gif";
        case Qt.WEBP:
            return "image/webp";
        default:
            return;
    }
}
const gP = 2;
function sD(e, t, n, r) {
    const i = (u) => {
            if (u !== void 0) return u * devicePixelRatio;
        },
        o = i(t),
        s = i(n);
    return Math.round(
        ((u) => (u < 0 ? Math.abs(u * gP) : u))(
            (() => {
                const { width: u, height: c } = e;
                if (o === void 0 && s === void 0) return 0;
                if (o === void 0) return c - s;
                if (s === void 0) return u - o;
                const d = c - s,
                    f = u - o;
                return r === 0 ? Math.max(d, f) : Math.min(d, f);
            })()
        )
    );
}
function _P(e) {
    return e.filter(mn);
}
function Qy(e) {
    var n;
    const t = e == null ? void 0 : e.map(Vf);
    return (n = jf(_P(t ?? []), (r) => r.height)) == null ? void 0 : n.url;
}
const ep = "Go on to discover millions of awesome videos and pictures in thousands of other categories.";
var Fr = ((e) => ((e.GIFS = "gifs"), (e.VIDEOS = "videos"), (e.PICTURES = "pictures"), e))(Fr || {});
function mP(e) {
    const t = e.match(/-(gifs|pics|pictures|videos)$/i);
    switch (t == null ? void 0 : t[1]) {
        case "gifs":
            return "gifs";
        case "videos":
            return "videos";
        case "pics":
        case "pictures":
            return "pictures";
        default:
            return null;
    }
}
function qh(e, t) {
    const { url: n, title: r, displayMedia: i, isNsfw: o } = e,
        s = EP(e),
        a = yP(e, t, s),
        l = wP(e, t, s),
        u = my(r);
    return { title: `${a} | ${si("Scrolller", o)}`, description: `View ${l} and enjoy ${u} with the endless random gallery on Scrolller.com. ${ep}`, imageUrl: Qy(i == null ? void 0 : i.mediaSources), canonical: n };
}
function yP({ title: e }, t, { isMostlyPictures: n, isMostlyVideos: r, isOverHalfVideos: i }) {
    const o = my(e);
    return t !== null && SP(e)
        ? o
        : t === Fr.VIDEOS
        ? `${o} Videos`
        : t === Fr.GIFS
        ? `${o} Gifs`
        : t === Fr.PICTURES
        ? `${o} Pictures`
        : r
        ? `${o} | Videos`
        : n
        ? `${o} | Pictures`
        : i
        ? `${o} | Videos and Pictures`
        : `${o} | Pictures and Videos`;
}
function wP({ isNsfw: e }, t, { videoCount: n, pictureCount: r, itemCount: i, isMostlyPictures: o, isMostlyVideos: s, isOverHalfVideos: a }) {
    const l = $u(n),
        u = $u(r),
        c = $u(i),
        d = `${si(l, e)} gifs`,
        f = `${si(l, e)} videos`,
        p = `${si(u, e)} pictures`;
    return t === Fr.GIFS ? d : t === Fr.VIDEOS ? f : t === Fr.PICTURES ? p : s ? f : o ? p : a ? `${si(c, e)} videos and pictures` : `${si(c, e)} pictures and videos`;
}
function SP(e) {
    return /gif|pics|picture|video|vids|album/i.test(e);
}
function EP(e) {
    const { itemCount: t, videoCount: n, pictureCount: r, albumCount: i } = e,
        o = t > 0 && n / t >= 0.9,
        s = t > 0 && r / t >= 0.9,
        a = t > 0 && n / t > 0.5,
        l = t > 0 && r / t > 0.5,
        u = n >= 20,
        c = r >= 20;
    return { itemCount: t, videoCount: n, pictureCount: r, albumCount: i, isMostlyVideos: o, isMostlyPictures: s, isOverHalfVideos: a, isOverHalfPictures: l, hasEnoughVideos: u, hasEnoughPictures: c };
}
function si(e, t) {
    return !/nsfw/i.test(e) && t ? `${e} NSFW` : e;
}
function $u(e) {
    return ob(e).replace(/,/g, " ");
}
function bP(e, t, n = null, r = null) {
    switch (e) {
        case L.HOME:
            return kP();
        case L.DISCOVER:
            return PP();
        case L.FAVORITES:
            return OP();
        case L.FOLLOWING:
            return AP();
        case L.LEADERBOARD:
            return CP();
        case L.RESET_PASSWORD:
            return RP();
        case L.ABOUT:
            return TP();
        case L.CATEGORIES:
            return DP();
        case L.MY_COLLECTIONS:
            return xP();
        case L.ACCOUNT:
            return IP();
        case L.PREMIUM:
            return $P();
        case L.PREMIUM_CHECKOUT:
            return BP();
        case L.COLLECTION_CHECKOUT:
            return jP();
        case L.RESUME_PREMIUM:
            return VP();
        case L.DONATE:
            return UP();
    }
    if (n === null) return {};
    switch (t) {
        case Pr.SUBREDDIT:
            return qh(n, r);
        case Pr.COLLECTION:
            return qh(n, r);
        case Pr.SUBREDDIT_POST:
            return MP(n);
        case Pr.ALBUM:
            return LP(n);
        case Pr.CATEGORY:
            return NP(n);
        case Pr.CREATOR:
            return FP(n);
    }
    return {};
}
function kP() {
    return { title: "Home | Scrolller", description: "Explore millions of awesome videos and pictures in an endless random gallery on Scrolller.com." };
}
function PP() {
    return { title: "Discover | Scrolller", description: "Discover millions of awesome videos and pictures in an endless random gallery on Scrolller.com." };
}
function OP() {
    return { title: "Favorites | Scrolller" };
}
function AP() {
    return { title: "Following | Scrolller" };
}
function CP() {
    return { title: "Leaderboard | Scrolller" };
}
function RP() {
    return { title: "Reset Password | Scrolller" };
}
function TP() {
    return { title: "About | Scrolller" };
}
function IP() {
    return { title: "Account | Scrolller" };
}
function xP() {
    return { title: "My Collections | Scrolller" };
}
function DP() {
    return { title: "Categories | Scrolller", description: ep };
}
function NP({ title: e }) {
    return { title: `${e} | Category | Scrolller`, description: `Browse videos and pictures in the ${e} category. ${ep}` };
}
function LP({ title: e }) {
    return { title: `${e} | Album | Scrolller`, description: `${e}` };
}
function MP({ title: e, mediaSources: t }) {
    return { title: `${e} | Scrolller`, description: e, imageUrl: Qy(t) };
}
function FP({ display_name: e, username: t }) {
    let n = "";
    return e && (n += `${e} `), (n += `(@${t}) | Scrolller`), { title: n };
}
function $P() {
    return { title: "Premium | Scrolller" };
}
function UP() {
    return { title: "Donate | Scrolller" };
}
function BP() {
    return { title: "Checkout | Scrolller" };
}
function jP() {
    return { title: "Checkout | Scrolller" };
}
function VP() {
    return { title: "Resume Premium | Scrolller" };
}
async function Uu(e, t) {
    await de(
        `
    mutation MarkPostWithSound($postId: Int!, $hasAudio: Boolean!) {
      addWithSound(postId: $postId, hasAudio: $hasAudio)
    }
    
  `,
        { postId: e, hasAudio: t },
        { useGlobalErrorHandler: !1 }
    );
}
function aD(e) {
    const t = e.getBoundingClientRect(),
        { width: n, height: r } = t,
        i = r === 0 ? 0 : n / r;
    return { width: n, height: r, aspectRatio: i };
}
function Bu(e) {
    window.scrollY !== e && window.scrollTo(0, e);
}
function zP(e) {
    const t = parseFloat(getComputedStyle(document.documentElement).fontSize);
    return e * t;
}
function lD(e) {
    return e / zP(1);
}
function HP(e) {
    e !== void 0 && (window.document.title = e);
}
function uD(e, t) {
    const { webkitAudioDecodedByteCount: n, mozHasAudio: r, audioTracks: i } = e;
    let o = !1;
    return i !== void 0 ? ((o = i.length > 0), t && Uu(t, o), o) : n !== void 0 ? ((o = n > 0), t && Uu(t, o), o) : r !== void 0 ? ((o = r), t && Uu(t, o), o) : !0;
}
const WP = { [L.PREMIUM]: "P" };
var Or = ((e) => (
        (e.SPACE_BAR = " "),
        (e.ARROW_DOWN = "ArrowDown"),
        (e.ARROW_UP = "ArrowUp"),
        (e.ARROW_LEFT = "ArrowLeft"),
        (e.ARROW_RIGHT = "ArrowRight"),
        (e.W = "w"),
        (e.A = "a"),
        (e.S = "s"),
        (e.D = "d"),
        (e.I = "i"),
        (e.L = "l"),
        (e.M = "m"),
        (e.O = "o"),
        (e.P = "p"),
        (e.K = "k"),
        (e.ESC = "Escape"),
        e
    ))(Or || {}),
    GP = ((e) => (
        (e.CLOSE = "Escape"),
        (e.ALBUM_NEXT_1 = "d"),
        (e.ALBUM_NEXT_2 = "ArrowRight"),
        (e.ALBUM_PREVIOUS_1 = "a"),
        (e.ALBUM_PREVIOUS_2 = "ArrowLeft"),
        (e.NEXT_1 = "s"),
        (e.NEXT_2 = "ArrowDown"),
        (e.PREVIOUS_1 = "w"),
        (e.PREVIOUS_2 = "ArrowUp"),
        (e.OPEN_SOURCE = "i"),
        (e.OPEN_SUBREDDIT = "o"),
        (e.FAVORITE = "l"),
        (e.PLAY_PAUSE_AUTOSCROLL = "p"),
        (e.PLAY_PAUSE_VIDEO = " "),
        (e.MORE_LIKE_THIS = "k"),
        e
    ))(GP || {}),
    qP = ((e) => ((e.PLAY_PAUSE = " "), (e.MUTE_UNMUTE = "m"), e))(qP || {});
async function QP() {
    return (
        await de(
            `
    mutation updateUserLastActive {
      updateUserLastActive
    }
  `,
            {},
            { apiHost: "typescript", useGlobalErrorHandler: !1 }
        )
    ).updateUserLastActive;
}
function cD(e) {
    A.useEffect(() => {
        const t = (n) => {
            n.key === Or.ESC && (n.stopImmediatePropagation(), e());
        };
        return (
            document.addEventListener("keydown", t, !0),
            () => {
                document.removeEventListener("keydown", t, !0);
            }
        );
    }, [e]);
}
function dD(e, t = []) {
    const n = A.useRef(),
        r = A.useRef([]),
        i = t.some((o, s) => r.current[s] !== o);
    return (r.current = t), (i || n.current === void 0) && (n.current = e()), n.current;
}
function fD(e) {
    const t = A.useRef(null),
        n = A.useRef(null);
    return (
        A.useEffect(() => {
            const r = (i) => {
                const { current: o } = t,
                    { current: s } = n;
                !(() => {
                    const l = i.target;
                    return o === null ? !1 : s === null ? o.contains(l) : o.contains(l) || s.contains(l);
                })() &&
                    e &&
                    e();
            };
            return document.addEventListener("click", r, !0), () => document.removeEventListener("click", r, !0);
        }, [e]),
        { contentRef: t, buttonRef: n }
    );
}
function W(e) {
    let t = new Map();
    return (n = oo()) => {
        const r = n.id;
        if (t.get(r) === void 0) {
            const i = e(n);
            t.set(r, i);
        }
        return t.get(r);
    };
}
function tp() {
    let e = new Map();
    return (t, n) => {
        if (e.get(t) === void 0) {
            const r = n();
            r !== void 0 && e.set(t, r);
        }
        return e.get(t);
    };
}
const YP = tp();
function pD(e, t) {
    return YP(e.id, t);
}
function hD({ itemUrl: e, url: t }, n, r) {
    const i = mP(t.pathname),
        { title: o } = bP(e, n, r, i);
    A.useEffect(() => {
        HP(o);
    }, [o]);
}
function vD({ dependencies: e = [] }) {
    A.useEffect(() => {
        window.scrollTo(0, 0);
    }, [...e]);
}
function KP() {
    A.useEffect(() => {
        try {
            const e = new URL(window.location.href),
                t = e.searchParams,
                n = t.get(Fh),
                r = t.get($h),
                i = t.get(Uh),
                o = WP[e.pathname];
            n && sessionStorage.setItem(Fh, n), r && sessionStorage.setItem($h, r), i && sessionStorage.setItem(Uh, i), o && sessionStorage.setItem(qb, o);
        } catch {}
    }, []);
}
function gD() {
    A.useEffect(() => {
        [!on(), eP()].every(Boolean) && Fs("/");
    }, []);
}
function XP() {
    const e = nn();
    A.useEffect(() => {
        if (!e) return;
        const t = e.last_active_at,
            n = t ? new Date(t).getTime() : 0,
            r = 5 * 60 * 60 * 1e3;
        Date.now() > n + r && QP();
    }, [e]);
}
const JP = W(() => new Y()),
    ZP = W(() => new Y()),
    eO = W(() => new Y()),
    tO = W(() => new Y()),
    _D = W(() => new Y()),
    nO = W(() => new Y()),
    rO = W(() => new $s("RECOMMENDATION_LIKE_STORAGE")),
    mD = W(() => new Y()),
    iO = W(() => new Y()),
    oO = W(() => new Y()),
    yD = W(() => new Y()),
    sO = W(() => new Y()),
    aO = W(() => new Y()),
    lO = W(() => new Y()),
    uO = W(() => new Y()),
    cO = W(() => new Y()),
    dO = W(() => new Y()),
    fO = W(() => new Y()),
    pO = W(() => new Y()),
    hO = W(() => new Y()),
    vO = W(() => new Y()),
    gO = W(() => new Y()),
    _O = W(() => new Y()),
    mO = W(() => new Y()),
    yO = W(() => new Y()),
    wO = W(() => new Y()),
    wD = W(() => new $s("PREMIUM_CTA_STORAGE")),
    SD = W(() => new $s("SLOW_LOADING_PREMIUM_CTA_STORAGE")),
    ED = W(() => new $s("LATEST_CONTENT_PREMIUM_CTA_STORAGE")),
    SO = W(() => new Y()),
    EO = W(() => new Y()),
    bO = W(() => new Y()),
    kO = W(() => new Y()),
    PO = W(() => new Y()),
    OO = W(() => new Y()),
    bD = W(() => new Y()),
    kD = W(() => new Y()),
    AO = W(() => new Y()),
    CO = W(() => new Y()),
    RO = W(() => new Y()),
    TO = W(() => new Y()),
    IO = W(() => new Y()),
    xO = W(() => new Y()),
    DO = W(() => new Y()),
    NO = W(() => new Y()),
    LO = W(() => new Y()),
    MO = W(() => new Y()),
    FO = W(() => new Y()),
    $O = W(() => new Y()),
    UO = W(() => new Y()),
    BO = W(() => new Y()),
    jO = W(() => new Y()),
    PD = W(() => new Y()),
    OD = W(() => new $s("LEADERBOARD_POPUP")),
    AD = W(() => new Y()),
    VO = W(() => new Y()),
    zO = W(() => new Y()),
    HO = W(() => new Y());
async function CD(e) {
    if (Fb()) {
        const { url: t, title: n } = e.itemState;
        t !== void 0 && n !== void 0 && (await $b({ url: `${t}?share=u`, title: n }));
    } else return ZP().showPopup(e);
}
function RD() {
    return JP().showPopup(null);
}
function TD(e) {
    return aO().showPopup(e);
}
function ID(e) {
    return uO().showPopup(e);
}
function xD(e) {
    return lO().showPopup(e);
}
function DD(e) {
    return cO().showPopup(e);
}
function Us(e) {
    return nO().showPopup(e);
}
function WO() {
    return wO().showPopup(null);
}
function ND(e) {
    return Promise.resolve();
}
function LD(e) {
    return iO().showPopup(e);
}
function MD(e) {
    return dO().showPopup(e);
}
function GO() {
    return mO().showPopup(null);
}
function qO() {
    return yO().showPopup(null);
}
const QO = async () => {
        nn() || new URL(window.location.toString()).searchParams.get("show_login") === null || (await Us());
    },
    YO = async () => {
        const e = new URL(window.location.toString()).searchParams;
        if (e.get("filter") === "disabled") {
            const t = e.get("title");
            await ZO({ title: t });
        } else e.get("filter") === "unsubscribe" && (await JO());
    };
function FD(e) {
    return fO().showPopup(e);
}
function $D() {
    return oO().showPopup(null);
}
function UD() {
    return pO().showPopup(null);
}
async function jo(e) {
    return hO().showPopup(e);
}
async function BD() {
    return bO().showPopup(null);
}
async function jD() {
    return $O().showPopup(null);
}
async function VD() {
    return UO().showPopup(null);
}
async function zD() {
    return BO().showPopup(null);
}
async function HD() {
    return jO().showPopup(null);
}
async function WD(e) {
    return vO().showPopup(e);
}
function Yy(e) {
    return kO().showPopup(e);
}
function GD() {
    return SO().showPopup(null);
}
function qD() {
    return gO().showPopup(null);
}
function KO() {
    return EO().showPopup(null);
}
function QD(e) {
    return VO().showPopup(e);
}
function YD(e) {
    return HO().showPopup(e);
}
function KD() {
    return PO().showPopup(null);
}
function XD(e) {
    return OO().showPopup(e);
}
function JD() {
    return _O().showPopup(null);
}
function ZD(e) {
    return AO().showPopup(e);
}
function eN() {
    return CO().showPopup(null);
}
function tN() {
    return RO().showPopup(null);
}
function nN(e) {
    return TO().showPopup(e);
}
function rN(e) {
    return IO().showPopup(e);
}
function iN(e) {
    return xO().showPopup(e);
}
function oN() {
    return NO().showPopup(null);
}
function sN() {
    return DO().showPopup(null);
}
function XO() {
    return LO().showPopup(null);
}
function JO() {
    return MO().showPopup(null);
}
async function ZO(e) {
    return FO().showPopup(e);
}
function aN(e) {
    return eO().showPopup(e);
}
function lN(e) {
    return tO().showPopup(e);
}
function uN() {
    return zO().showPopup(null);
}
function cN(e) {
    return sO().showPopup(e);
}
async function eA(e) {
    await de(
        `
    mutation AddFavorite($url: String!) {
      addFavorite(url: $url)
    }
    
  `,
        { url: e }
    );
}
async function tA(e) {
    await de(
        `
    mutation RemoveFavorite($url: String!) {
      removeFavorite(url: $url)
    }
    
  `,
        { url: e }
    );
}
class nA {
    constructor({ isFavorite: t, url: n }) {
        S(this, "isFavorite");
        S(this, "url");
        S(this, "processFavorite", async () => {
            if (((this.isFavorite = !this.isFavorite), !this.isFavorite)) {
                await tA(this.url), Mr.decrementFavoriteCount(), qe.track("unfavorited-post", { label: this.url });
                return;
            }
            qe.track("favorited-post", { label: this.url }), await eA(this.url), Mr.incrementFavoriteCount();
        });
        ge(this, { isFavorite: V, merge: X.bound, toggleFavorite: X.bound }), (this.isFavorite = t ?? !1), (this.url = n);
    }
    merge(t) {
        const { isFavorite: n } = t.isFavoriteState;
        if (!Hf(n)) throw new Error("isFavorite is missing");
        this.isFavorite = n;
    }
    async toggleFavorite() {
        if (!on()) {
            Us({ onSuccess: this.processFavorite });
            return;
        }
        const t = rO(),
            { known: n, showPopup: r } = t;
        n || r(null), this.processFavorite();
    }
}
const rA = async (e) =>
        (
            await de(
                `query getCollectionSetup ($collectionId:Int!) {
      getCollectionSetup(collectionId:$collectionId){
        collection{
          id
          title
          description
          secondary_title
          is_paid
          user_account_id
        } 
        offer{
          amount
          product_id
          campaign_id
          is_active
          type
          billing_model_id
        }
        hasAccess
        status
      }
    }`,
                { collectionId: e },
                { apiHost: "typescript", withRetry: !1, useGlobalErrorHandler: !1 }
            )
        ).getCollectionSetup,
    dN = async () =>
        (
            await de(
                `query getCreatorReport {
        getCreatorReport{
            revenueByDay{
              amount
              day
            }
            revenueTotal
            revenueAvailable
            subscribersByDay{
              amount
              day
            }
            subscribersTotal
            impressionsTotal
            impressionsByDay{
              day
              amount
            }
          }
      }`,
                {},
                { apiHost: "typescript", withRetry: !1 }
            )
        ).getCreatorReport;
class iA {
    constructor(t) {
        S(this, "isLoading", !1);
        S(this, "fetched", !1);
        S(this, "price");
        S(this, "options");
        S(this, "collection");
        ge(this, { isLoading: V, fetched: V, price: V, options: V, collection: V, getAndSetPaymentOptions: X.bound }), (this.collection = t);
    }
    shouldFetch() {
        var t, n, r, i;
        return (
            !!((t = this.collection) != null && t.id) &&
            ((n = this.collection) == null ? void 0 : n.isPaid) &&
            ((r = this.collection) == null ? void 0 : r.username) !== ((i = Kk()) == null ? void 0 : i.username) &&
            !this.fetched &&
            !this.isLoading
        );
    }
    get billingPlan() {
        var r, i;
        const t = (r = this.options) == null ? void 0 : r.offer;
        return { offer_id: 3, product_id: t.product_id, name: (i = this.collection) == null ? void 0 : i.title, billing_model_id: t.billing_model_id, interval: t.type, amount: t.amount };
    }
    getFormatedPriceInfoWithInterval() {
        const t = `$${this.price}`,
            n = this.billingPlan.interval.toUpperCase();
        return n == "MONTHLY" ? `${t}/month` : n == "ONE_TIME" ? `${t} once` : t;
    }
    redirectToCollection() {
        window.location.href = L.SUBREDDIT.replace("*", this.options.collection.title);
    }
    async getAndSetPaymentOptions() {
        var t;
        (this.isLoading = !0),
            rA((t = this.collection) == null ? void 0 : t.id)
                .then((n) => {
                    var r;
                    n && ((this.options = n), (this.price = (r = n.offer) == null ? void 0 : r.amount));
                })
                .finally(() => {
                    (this.fetched = !0), (this.isLoading = !1);
                });
    }
}
async function oA(e) {
    await de(
        `
    mutation Follow($url: String!) {
      follow(url: $url)
    }
    
  `,
        { url: e }
    );
}
async function sA(e) {
    await de(
        `
    mutation Follow($url: String!) {
      unfollow(url: $url)
    }
    
  `,
        { url: e }
    );
}
async function aA(e) {
    await de(
        `
    mutation RemoveLikeCollection($collectionId: Int!) {
      removeLikeCollection(collectionId: $collectionId)
    }
  `,
        { collectionId: e },
        { apiHost: "typescript" }
    );
}
async function lA(e) {
    await de(
        `
  mutation LikeCollection($collectionId: Int!) {
    likeCollection(collectionId: $collectionId)
  }
  `,
        { collectionId: e },
        { apiHost: "typescript" }
    );
}
class Ky {
    constructor({ isFollowing: t, url: n }, r) {
        S(this, "isFollowing");
        S(this, "url");
        S(this, "collectionId");
        ge(this, { isFollowing: V, merge: X.bound, toggleFollow: X.bound }), (this.isFollowing = t ?? !1), (this.url = n), (this.collectionId = r);
    }
    merge(t) {
        const { isFollowing: n } = t.isFollowingState;
        if (!Hf(n)) throw new Error("isFollowing is missing");
        this.isFollowing = n;
    }
    async toggleFollow() {
        on() || (await Us()),
            eo(() => {
                (this.isFollowing = !this.isFollowing),
                    this.isFollowing
                        ? (this.collectionId ? lA(this.collectionId) : oA(this.url),
                          Ck("home-pagevisit-collection") == this.url.split("/")[2] && (qe.track("follow-collection", { category: "creators-home-page", label: this.url }), Rk("home-pagevisit-collection")))
                        : this.collectionId
                        ? aA(this.collectionId)
                        : sA(this.url);
            });
    }
}
class Xy {
    constructor(t) {
        S(this, "id");
        S(this, "url");
        S(this, "title");
        S(this, "username");
        S(this, "tags");
        S(this, "secondaryTitle");
        S(this, "description");
        S(this, "createdAt");
        S(this, "isNsfw");
        S(this, "subscribers");
        S(this, "isComplete");
        S(this, "sourceUrl");
        S(this, "isPaid");
        S(this, "paymentOptions");
        S(this, "videoCount");
        S(this, "itemCount");
        S(this, "albumCount");
        S(this, "pictureCount");
        S(this, "itemType", We.SUBREDDIT);
        S(this, "displayType", Ut.SUBREDDIT);
        S(this, "coverMediaState", new Xl());
        S(this, "isFollowingState");
        S(this, "needsRefresh");
        S(this, "isUnknown");
        ge(this, { displayMedia: ce, needsRefresh: V, paymentOptions: V, merge: X }),
            (this.id = t.id),
            (this.url = t.url),
            (this.title = t.title),
            (this.sourceUrl = "https://www.reddit.com/r/" + t.title),
            (this.username = t.username),
            (this.isNsfw = t.isNsfw),
            (this.subscribers = t.subscribers),
            (this.needsRefresh = t.needsRefresh),
            (this.isUnknown = t.isUnknown ?? !1),
            (this.description = t.description),
            (this.secondaryTitle = t.secondaryTitle),
            (this.createdAt = t.createdAt ? new Date(t.createdAt) : void 0),
            (this.isComplete = t.isComplete),
            (this.videoCount = t.videoCount ?? 0),
            (this.pictureCount = t.pictureCount ?? 0),
            (this.itemCount = t.itemCount ?? 0),
            (this.albumCount = t.albumCount ?? 0),
            (this.isFollowingState = new Ky(t)),
            (this.isPaid = t.isPaid),
            (this.paymentOptions = new iA(this));
    }
    get displayMedia() {
        return this.coverMediaState.coverMedia;
    }
    merge(t) {
        t.isComplete !== void 0 &&
            ((this.needsRefresh = t.needsRefresh),
            (this.isUnknown = t.isUnknown),
            (this.isComplete = t.isComplete),
            this.isFollowingState.merge(t),
            (this.videoCount = t.videoCount),
            (this.pictureCount = t.pictureCount),
            (this.itemCount = t.itemCount),
            (this.albumCount = t.albumCount));
    }
}
class uA {
    constructor(t) {
        S(this, "id");
        S(this, "url");
        S(this, "title");
        S(this, "isNsfw");
        S(this, "sourceUrl");
        S(this, "sourceUrls");
        S(this, "albumUrl");
        S(this, "subredditState");
        S(this, "itemType", We.SUBREDDIT_POST);
        S(this, "displayType");
        S(this, "displayMedia");
        S(this, "isFavoriteState");
        S(this, "needsRefresh");
        S(this, "ownerAvatar");
        S(this, "username");
        S(this, "displayName");
        S(this, "isPaid");
        ge(this, { needsRefresh: V, merge: X });
        const { subredditId: n, subredditUrl: r, subredditTitle: i, id: o, url: s, title: a, isNsfw: l, mediaSources: u, blurredMediaSources: c, needsRefresh: d, albumUrl: f, ownerAvatar: p, username: m, displayName: v, isPaid: O } = t,
            g = { id: n, url: r, title: i, username: m, isPaid: O };
        (this.subredditState = tu(r, () => new Xy(g))),
            !this.subredditState.id && n && (this.subredditState.id = n),
            (this.id = o),
            (this.url = s),
            (this.title = a),
            (this.isNsfw = l),
            (this.displayMedia = new Ry(u || c || [], t, this.subredditState)),
            (this.isFavoriteState = new nA(t)),
            (this.needsRefresh = d),
            (this.albumUrl = f),
            (this.ownerAvatar = p),
            (this.username = m),
            (this.displayName = v),
            (this.isPaid = O),
            by((u || c || []).map(Vf)) === Bn.VIDEO ? (this.displayType = Ut.VIDEO) : (this.displayType = Ut.PICTURE),
            (this.sourceUrls = this.getSource(t, this.displayMedia)),
            (this.sourceUrl = this.sourceUrls.redgifs || this.sourceUrls.reddit || "blank");
    }
    merge(t) {
        this.isFavoriteState.merge(t), (this.needsRefresh = t.needsRefresh);
    }
    getSource(t, n) {
        const r = {};
        return (r.redgifs = t.redgifsSource), (r.gfycat = t.gfycatSource), (r.reddit = "https://www.reddit.com" + t.redditPath), (r.fullLengthSource = t.fullLengthSource), r;
    }
}
class cA {
    constructor(t) {
        S(this, "itemType", We.ALBUM_SOURCE);
        S(this, "displayType");
        S(this, "displayMedia");
        ge(this, { merge: X }), (this.displayMedia = new Ry(t.mediaSources)), this.displayMedia.mediaRenderType === Bn.VIDEO ? (this.displayType = Ut.VIDEO) : (this.displayType = Ut.PICTURE);
    }
    merge(t) {}
}
class dA {
    constructor(t, n = []) {
        S(this, "collectionId");
        S(this, "url");
        S(this, "title");
        S(this, "description");
        S(this, "createdAt");
        S(this, "isNsfw");
        S(this, "type");
        S(this, "creatorId");
        S(this, "followCount");
        S(this, "rank");
        S(this, "isFollowingState");
        S(this, "itemType", We.COLLECTION);
        S(this, "displayType", Ut.SUBREDDIT);
        S(this, "coverMediaState", new Xl(5));
        ge(this, { displayMedia: ce, merge: X }), (this.collectionId = t.id);
        const r = `/c/${t.url}`;
        (this.url = r),
            (this.title = t.title),
            (this.isNsfw = t.is_nsfw),
            (this.description = t.description),
            (this.type = t.type),
            (this.creatorId = t.user_account_id),
            (this.followCount = t.likes ?? 0),
            (this.rank = t.rank ?? 0),
            (this.isFollowingState = new Ky({ isFollowing: t.liked ?? !1, url: "" }, t.id));
    }
    get displayMedia() {
        return this.coverMediaState.coverMedia;
    }
    merge(t) {}
}
function fA(e) {
    const t = () => {
            switch (e.__typename) {
                case kr.SUBREDDIT_POST:
                    return new uA(e);
                case kr.SUBREDDIT:
                    return new Xy(e);
                case kr.COLLECTION:
                    return new dA(e);
                case kr.CATEGORY:
                    return new Sb(e);
                case kr.ALBUM:
                    return new wb(e);
                case kr.ALBUM_SOURCE:
                    return new cA(e);
            }
            throw (console.log("Invalid typename", e), new Error("Invalid typename: " + e.__typename));
        },
        n = e.url;
    return n !== void 0 ? tu(n, t) : t();
}
let ld = new Map();
function pA(e) {
    ((e == null ? void 0 : e.__typename) === "SubredditPost" && e.username) || (e && ld.set(window.location.pathname, fA({ ...e, needsRefresh: on() })));
}
function tu(e, t) {
    const n = ld.get(e);
    if (t !== void 0) {
        const r = t();
        return n !== void 0 ? (n.merge(r), n) : (ld.set(e, r), r);
    } else return n !== void 0 ? n : void 0;
}
function fN(e, t) {
    return e.map((n) => tu(n.url, () => t(n)));
}
const hA = "modulepreload",
    vA = function (e) {
        return "/" + e;
    },
    Qh = {},
    Z = function (t, n, r) {
        let i = Promise.resolve();
        if (n && n.length > 0) {
            const o = document.getElementsByTagName("link");
            i = Promise.all(
                n.map((s) => {
                    if (((s = vA(s)), s in Qh)) return;
                    Qh[s] = !0;
                    const a = s.endsWith(".css"),
                        l = a ? '[rel="stylesheet"]' : "";
                    if (!!r)
                        for (let d = o.length - 1; d >= 0; d--) {
                            const f = o[d];
                            if (f.href === s && (!a || f.rel === "stylesheet")) return;
                        }
                    else if (document.querySelector(`link[href="${s}"]${l}`)) return;
                    const c = document.createElement("link");
                    if (((c.rel = a ? "stylesheet" : hA), a || ((c.as = "script"), (c.crossOrigin = "")), (c.href = s), document.head.appendChild(c), a))
                        return new Promise((d, f) => {
                            c.addEventListener("load", d), c.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${s}`)));
                        });
                })
            );
        }
        return i
            .then(() => t())
            .catch((o) => {
                const s = new Event("vite:preloadError", { cancelable: !0 });
                if (((s.payload = o), window.dispatchEvent(s), !s.defaultPrevented)) throw o;
            });
    };
if (!A.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!ge) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function gA(e) {
    e();
}
function _A(e) {
    e || (e = gA), Xg({ reactionScheduler: e });
}
function mA(e) {
    return T1(e);
}
var yA = 1e4,
    wA = 1e4,
    SA = (function () {
        function e(t) {
            var n = this;
            Object.defineProperty(this, "finalize", { enumerable: !0, configurable: !0, writable: !0, value: t }),
                Object.defineProperty(this, "registrations", { enumerable: !0, configurable: !0, writable: !0, value: new Map() }),
                Object.defineProperty(this, "sweepTimeout", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                Object.defineProperty(this, "sweep", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: function (r) {
                        r === void 0 && (r = yA), clearTimeout(n.sweepTimeout), (n.sweepTimeout = void 0);
                        var i = Date.now();
                        n.registrations.forEach(function (o, s) {
                            i - o.registeredAt >= r && (n.finalize(o.value), n.registrations.delete(s));
                        }),
                            n.registrations.size > 0 && n.scheduleSweep();
                    },
                }),
                Object.defineProperty(this, "finalizeAllImmediately", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: function () {
                        n.sweep(0);
                    },
                });
        }
        return (
            Object.defineProperty(e.prototype, "register", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (t, n, r) {
                    this.registrations.set(r, { value: n, registeredAt: Date.now() }), this.scheduleSweep();
                },
            }),
            Object.defineProperty(e.prototype, "unregister", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (t) {
                    this.registrations.delete(t);
                },
            }),
            Object.defineProperty(e.prototype, "scheduleSweep", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, wA));
                },
            }),
            e
        );
    })(),
    EA = typeof FinalizationRegistry < "u" ? FinalizationRegistry : SA,
    ud = new EA(function (e) {
        var t;
        (t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null);
    }),
    Jy = { exports: {} },
    Zy = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qi = A;
function bA(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var kA = typeof Object.is == "function" ? Object.is : bA,
    PA = Qi.useState,
    OA = Qi.useEffect,
    AA = Qi.useLayoutEffect,
    CA = Qi.useDebugValue;
function RA(e, t) {
    var n = t(),
        r = PA({ inst: { value: n, getSnapshot: t } }),
        i = r[0].inst,
        o = r[1];
    return (
        AA(
            function () {
                (i.value = n), (i.getSnapshot = t), ju(i) && o({ inst: i });
            },
            [e, n, t]
        ),
        OA(
            function () {
                return (
                    ju(i) && o({ inst: i }),
                    e(function () {
                        ju(i) && o({ inst: i });
                    })
                );
            },
            [e]
        ),
        CA(n),
        n
    );
}
function ju(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !kA(e, n);
    } catch {
        return !0;
    }
}
function TA(e, t) {
    return t();
}
var IA = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? TA : RA;
Zy.useSyncExternalStore = Qi.useSyncExternalStore !== void 0 ? Qi.useSyncExternalStore : IA;
Jy.exports = Zy;
var xA = Jy.exports;
function Yh(e) {
    e.reaction = new Qo("observer".concat(e.name), function () {
        var t;
        (e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e);
    });
}
function DA(e, t) {
    t === void 0 && (t = "observed");
    var n = qo.useRef(null);
    if (!n.current) {
        var r = {
            reaction: null,
            onStoreChange: null,
            stateVersion: Symbol(),
            name: t,
            subscribe: function (a) {
                return (
                    ud.unregister(r),
                    (r.onStoreChange = a),
                    r.reaction || (Yh(r), (r.stateVersion = Symbol())),
                    function () {
                        var l;
                        (r.onStoreChange = null), (l = r.reaction) === null || l === void 0 || l.dispose(), (r.reaction = null);
                    }
                );
            },
            getSnapshot: function () {
                return r.stateVersion;
            },
        };
        n.current = r;
    }
    var i = n.current;
    i.reaction || (Yh(i), ud.register(n, i, i)), qo.useDebugValue(i.reaction, mA), xA.useSyncExternalStore(i.subscribe, i.getSnapshot, i.getSnapshot);
    var o, s;
    if (
        (i.reaction.track(function () {
            try {
                o = e();
            } catch (a) {
                s = a;
            }
        }),
        s)
    )
        throw s;
    return o;
}
var Vu,
    zu,
    e0 = typeof Symbol == "function" && Symbol.for,
    NA = (zu = (Vu = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || Vu === void 0 ? void 0 : Vu.configurable) !== null && zu !== void 0 ? zu : !1,
    Kh = e0
        ? Symbol.for("react.forward_ref")
        : typeof A.forwardRef == "function" &&
          A.forwardRef(function (e) {
              return null;
          }).$$typeof,
    Xh = e0
        ? Symbol.for("react.memo")
        : typeof A.memo == "function" &&
          A.memo(function (e) {
              return null;
          }).$$typeof;
function ri(e, t) {
    var n;
    if (Xh && e.$$typeof === Xh) throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
    var r = (n = t == null ? void 0 : t.forwardRef) !== null && n !== void 0 ? n : !1,
        i = e,
        o = e.displayName || e.name;
    if (Kh && e.$$typeof === Kh && ((r = !0), (i = e.render), typeof i != "function")) throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
    var s = function (a, l) {
        return DA(function () {
            return i(a, l);
        }, o);
    };
    return (
        (s.displayName = e.displayName),
        NA && Object.defineProperty(s, "name", { value: e.name, writable: !0, configurable: !0 }),
        e.contextTypes && (s.contextTypes = e.contextTypes),
        r && (s = A.forwardRef(s)),
        (s = A.memo(s)),
        MA(e, s),
        s
    );
}
var LA = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function MA(e, t) {
    Object.keys(e).forEach(function (n) {
        LA[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
    });
}
var Hu;
_A(gy.unstable_batchedUpdates);
Hu = ud.finalizeAllImmediately;
async function FA(e) {
    return (
        await de(
            `
    query ItemTypeQuery(
      $url: String! 
    ) {
      getItemType(url: $url)
    }
  `,
            { url: e }
        )
    ).getItemType;
}
function pN(e) {
    return e.tagName !== "INPUT";
}
function $A(e) {
    return e.altKey || e.ctrlKey || e.shiftKey || e.metaKey;
}
function hN(e) {
    return e === Or.ARROW_DOWN ? "↓" : e === Or.ARROW_UP ? "↑" : e === Or.ARROW_LEFT ? "←" : e === Or.ARROW_RIGHT ? "→" : e === Or.SPACE_BAR ? "␣" : e.toUpperCase();
}
const UA = A.memo((e) => {
        const { href: t, children: n, temporaryState: r, params: i, noFollow: o = !1, onClick: s, label: a, collection: l, ...u } = e,
            c = t + jA(i),
            d = A.useCallback(
                (p) => {
                    $A(p) || (p.preventDefault(), p.stopPropagation(), s && s(p), Fs(c, r), a && qe.track("internal-link-opened", { label: a }));
                },
                [c, r, s, a]
            ),
            f = o ? "nofollow" : "";
        return x.jsx(x.Fragment, { children: l ? x.jsx("a", { ...u, target: "_blank", href: c, rel: "noreferrer", children: n }) : x.jsx("a", { ...u, href: c, onClick: d, rel: f, children: n }) });
    }),
    BA = UA;
function jA(e) {
    if (e === void 0) return "";
    {
        let t = "?";
        for (let n in e) {
            const r = e[n];
            r === !1 || (r === !0 ? (t += n) : (t += n + "=" + e[n]));
        }
        return t;
    }
}
const VA = ({ text: e = "This page does not exist" }) =>
    x.jsxs("div", { className: "not-found", children: [x.jsx("div", { className: "not-found__text", children: e }), x.jsx(BA, { className: "not-found__link", href: L.HOME, children: "Go home" })] });
var t0 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
    (function () {
        var t = {}.hasOwnProperty;
        function n() {
            for (var o = "", s = 0; s < arguments.length; s++) {
                var a = arguments[s];
                a && (o = i(o, r(a)));
            }
            return o;
        }
        function r(o) {
            if (typeof o == "string" || typeof o == "number") return o;
            if (typeof o != "object") return "";
            if (Array.isArray(o)) return n.apply(null, o);
            if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) return o.toString();
            var s = "";
            for (var a in o) t.call(o, a) && o[a] && (s = i(s, a));
            return s;
        }
        function i(o, s) {
            return s ? (o ? o + " " + s : o + s) : o;
        }
        e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
    })();
})(t0);
var zA = t0.exports;
const HA = pg(zA);
function n0(...e) {
    return HA(e);
}
function vN(e, t) {
    return t
        ? t
              .split(" ")
              .map((n) => e + "--" + n)
              .join(" ")
        : "";
}
const WA = ri(({ isVisible: e = !0, fillScreen: t = !1, fillHeight: n = !1, className: r, small: i }) => {
        const o = n0("spinning-loader", r, { "spinning-loader--fill-screen": t, "spinning-loader--fill-height": n, "spinning-loader--loading": e, "spinning-loader--small": i });
        return x.jsx("div", { className: o, children: x.jsx("div", { className: "spinning-loader__spinner", "data-test-id": "spinning-loader" }) });
    }),
    r0 = WA,
    GA = ri((e) => {
        const { pathname: t } = e.historyEntry.url;
        return Fs(`/u${t}`), x.jsx(x.Fragment, {});
    }),
    qA = GA,
    Jh = ow`
  from {
      transform: rotate(0turn);
  }
  to {
      transform: rotate(1turn);
  }
`,
    QA = Qr.div`
  display: inline-block;
  width: ${({ size: e }) => (e ? `${e}px` : "30px")};
  height: ${({ size: e }) => (e ? `${e}px` : "30px")};
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: ${({ theme: e }) => e.palette.pink};
  animation: ${Jh} 1s ease-in-out infinite;
  -webkit-animation: ${Jh} 1s ease-in-out infinite;
`,
    pl = (e) => x.jsx(QA, { ...e }),
    YA = A.lazy(() => Z(() => import("./SubredditPostPageRouter-QroEzaZo.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]))),
    KA = A.lazy(() =>
        Z(
            () => import("./SubredditPage-KwORp7jQ.js").then((e) => e.b),
            __vite__mapDeps([
                33,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                34,
                35,
                36,
                37,
                38,
                39,
                40,
                41,
                42,
                43,
                19,
                44,
                45,
                46,
                47,
                29,
                27,
                30,
                28,
                48,
                49,
                50,
                51,
                23,
                52,
                53,
                26,
                54,
                55,
                56,
                57,
                58,
                59,
                60,
                61,
                62,
                63,
                64,
                65,
                66,
                67,
                68,
                69,
                70,
                71,
                72,
                73,
                74,
                75,
                76,
                77,
                78,
                79,
                80,
                81,
                82,
                24,
                83,
                84,
                85,
                86,
                87,
                88,
                89,
            ])
        )
    ),
    XA = A.lazy(() => Z(() => import("./AlbumPageRouter-MNJIAinZ.js"), __vite__mapDeps([90, 1, 5, 6, 3, 35, 7, 8, 2, 9, 10, 11, 4, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 38, 41, 42, 43, 19]))),
    JA = tp(),
    ZA = ri((e) => {
        const { historyEntry: t } = e,
            { itemType: n } = JA(t.id, () => new np(t));
        if (n === void 0) return x.jsx(r0, { fillScreen: !0 });
        switch (n) {
            case We.SUBREDDIT:
            case We.COLLECTION:
                return x.jsx(A.Suspense, { fallback: x.jsx(pl, {}), children: x.jsx(KA, { ...e }) });
            case We.SUBREDDIT_POST:
                return x.jsx(A.Suspense, { fallback: x.jsx(pl, {}), children: x.jsx(YA, { ...e }) });
            case We.ALBUM:
                return x.jsx(XA, { ...e });
            case We.CREATOR:
                return x.jsx(qA, { ...e });
        }
        return x.jsx(VA, {});
    });
class np {
    constructor(t) {
        S(this, "itemType");
        (this.historyEntry = t), ge(this, { itemType: V });
        const n = tu(this.historyEntry.itemUrl);
        n !== void 0 ? (this.itemType = n.itemType) : this.fetchItemType();
    }
    async fetchItemType() {
        const t = await FA(this.historyEntry.itemUrl);
        eo(() => {
            this.itemType = t;
        });
    }
}
const eC = Object.freeze(Object.defineProperty({ __proto__: null, DynamicPageRouterState: np, default: ZA }, Symbol.toStringTag, { value: "Module" })),
    tC = {
        [L.HOME]: A.lazy(() => Z(() => import("./index-tBx9leu1.js"), __vite__mapDeps([91, 1, 7, 8, 2, 3, 9, 10, 11, 92, 4, 5, 6, 12, 13, 14, 15, 16, 17, 18, 37, 87, 19, 93, 94, 95]))),
        [L.FOLLOWING]: A.lazy(() => Z(() => import("./index-tmf4ZRxg.js"), __vite__mapDeps([96, 1, 7, 8, 2, 3, 9, 10, 11, 97, 5, 6, 4, 12, 13, 14, 15, 16, 17, 18, 36, 98, 19, 93, 94, 95]))),
        [L.RECOMMENDATIONS]: A.lazy(() =>
            Z(() => import("./index-UgDoHn7R.js"), __vite__mapDeps([99, 1, 4, 5, 6, 3, 7, 8, 2, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 44, 100, 58, 59, 29, 27, 30, 45, 46, 62, 63, 98, 101, 23, 54, 102, 36, 93, 94, 95]))
        ),
        [L.EMBED]: A.lazy(() => Z(() => import("./index-_Ddo2aVk.js"), __vite__mapDeps([103, 1, 10, 11, 16, 22, 3, 2, 8]))),
        [L.CREATOR_ONBOARDING_LANDING]: A.lazy(() => Z(() => import("./sfw-ccpVCxHf.js"), __vite__mapDeps([104, 1, 105, 15, 16]))),
        [L.CREATOR_ONBOARDING_LANDING_NSFW]: A.lazy(() => Z(() => import("./nsfw-PeAo4GDz.js"), __vite__mapDeps([106, 1, 105, 15, 16]))),
        [L.CREATOR_ONBOARDING_CONNECT]: A.lazy(() => Z(() => import("./sfw-1U_QGWBc.js"), __vite__mapDeps([107, 1, 108, 109, 84, 110, 111, 112, 113, 16, 114, 87]))),
        [L.CREATOR_ONBOARDING_CONNECT_NSFW]: A.lazy(() => Z(() => import("./nsfw-q_yO7Iu7.js"), __vite__mapDeps([115, 1, 108, 109, 84, 110, 111, 112, 113, 16, 114, 87]))),
        [L.CREATOR_ONBOARDING_CONFIRM_PHONE]: A.lazy(() => Z(() => import("./sfw-5YUiYQ8Z.js"), __vite__mapDeps([116, 1, 117, 111, 110, 118, 113, 16]))),
        [L.CREATOR_ONBOARDING_CONFIRM_PHONE_NSFW]: A.lazy(() => Z(() => import("./nsfw-SHfnory-.js"), __vite__mapDeps([119, 1, 117, 111, 110, 118, 113, 16]))),
        [L.CREATOR_ONBOARDING_ADULT_SOCIAL]: A.lazy(() => Z(() => import("./index-IoakL3kh.js"), __vite__mapDeps([120, 1, 109, 111, 118, 84, 112, 113, 16, 87, 110]))),
        [L.CREATOR_ONBOARDING_SOCIAL]: A.lazy(() => Z(() => import("./sfw-Ndf0KGar.js"), __vite__mapDeps([121, 1, 122, 112, 87, 84, 111, 113, 16, 110, 109]))),
        [L.CREATOR_ONBOARDING_SOCIAL_NSFW]: A.lazy(() => Z(() => import("./nsfw-A4nVC_Rw.js"), __vite__mapDeps([123, 1, 122, 112, 87, 84, 111, 113, 16, 110, 109]))),
        [L.CREATOR_ONBOARDING_GOALS]: A.lazy(() => Z(() => import("./sfw-JkZ0fdRn.js"), __vite__mapDeps([124, 1, 125, 111, 29, 27, 3, 30, 32, 126, 31, 113, 16, 112, 110, 87, 84, 109]))),
        [L.CREATOR_ONBOARDING_GOALS_NSFW]: A.lazy(() => Z(() => import("./nsfw-JCI9FOYU.js"), __vite__mapDeps([127, 1, 125, 111, 29, 27, 3, 30, 32, 126, 31, 113, 16, 112, 110, 87, 84, 109]))),
        [L.CREATOR_ONBOARDING_SUBMITED]: A.lazy(() => Z(() => import("./index-FICCIfmF.js"), __vite__mapDeps([128, 1, 113, 16]))),
        [L.UPLOAD]: A.lazy(() => Z(() => import("./sfw-D64HzUjo.js"), __vite__mapDeps([129, 1, 130, 68, 113, 16]))),
        [L.UPLOAD_NSFW]: A.lazy(() => Z(() => import("./nsfw-E4-km9bo.js"), __vite__mapDeps([131, 1, 130, 68, 113, 16]))),
        [L.MY_COLLECTIONS]: A.lazy(() =>
            Z(
                () => import("./MyCollectionsPage-DgO5ZFKc.js"),
                __vite__mapDeps([
                    132,
                    1,
                    72,
                    133,
                    5,
                    6,
                    3,
                    4,
                    7,
                    8,
                    2,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    36,
                    98,
                    19,
                    44,
                    100,
                    58,
                    59,
                    29,
                    27,
                    30,
                    45,
                    46,
                    62,
                    63,
                    101,
                    23,
                    54,
                    102,
                    97,
                    33,
                    34,
                    35,
                    37,
                    38,
                    39,
                    40,
                    41,
                    42,
                    43,
                    47,
                    28,
                    48,
                    49,
                    50,
                    51,
                    52,
                    53,
                    26,
                    55,
                    56,
                    57,
                    60,
                    61,
                    64,
                    65,
                    66,
                    67,
                    68,
                    69,
                    70,
                    71,
                    73,
                    74,
                    75,
                    76,
                    77,
                    78,
                    79,
                    80,
                    81,
                    82,
                    24,
                    83,
                    84,
                    85,
                    86,
                    87,
                    88,
                    89,
                    134,
                ])
            )
        ),
        [L.DISCOVER]: A.lazy(() => Z(() => import("./DiscoverPage-giXhr8ez.js"), __vite__mapDeps([135, 1, 7, 8, 2, 3, 9, 10, 11, 92, 4, 5, 6, 12, 13, 14, 15, 16, 17, 18, 37, 87, 19, 44, 136, 94, 95, 32]))),
        [L.RESET_PASSWORD]: A.lazy(() => Z(() => import("./ResetPasswordPage-EJ1-yOLE.js"), __vite__mapDeps([137, 1, 2, 3, 138, 53, 44]))),
        [L.VERIFY_EMAIL]: A.lazy(() => Z(() => import("./VerifyEmailPage-_pexoIK7.js"), __vite__mapDeps([139, 1, 2, 3, 44, 14]))),
        [L.VERIFY_PAYMENT]: A.lazy(() => Z(() => import("./VerifyPaymentPage-YolJM2jc.js"), __vite__mapDeps([140, 1, 110, 76, 141]))),
        [L.FAVORITES]: A.lazy(() =>
            Z(() => import("./FavoritesPage-O-CKqUks.js").then((e) => e.b), __vite__mapDeps([133, 1, 5, 6, 3, 4, 7, 8, 2, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 36, 98, 19, 44, 100, 58, 59, 29, 27, 30, 45, 46, 62, 63, 101, 23, 54, 102]))
        ),
        [L.ABOUT]: A.lazy(() => Z(() => import("./AboutPage-5RmfyZ5S.js"), __vite__mapDeps([142, 1, 143]))),
        [L.ACCOUNT]: A.lazy(() =>
            Z(
                () => import("./AccountPage--XQddtnD.js").then((e) => e.a),
                __vite__mapDeps([
                    48,
                    1,
                    19,
                    13,
                    49,
                    12,
                    50,
                    51,
                    23,
                    3,
                    8,
                    6,
                    52,
                    53,
                    26,
                    14,
                    44,
                    54,
                    28,
                    55,
                    56,
                    2,
                    57,
                    58,
                    59,
                    60,
                    61,
                    62,
                    63,
                    64,
                    65,
                    66,
                    67,
                    68,
                    69,
                    5,
                    70,
                    71,
                    72,
                    73,
                    74,
                    75,
                    76,
                    77,
                    78,
                    79,
                    80,
                    81,
                    82,
                    24,
                    27,
                    83,
                    84,
                    85,
                    86,
                    87,
                    39,
                    88,
                ])
            )
        ),
        [L.ACCOUNT_SUBPAGE]: A.lazy(() =>
            Z(
                () => import("./AccountPage--XQddtnD.js").then((e) => e.a),
                __vite__mapDeps([
                    48,
                    1,
                    19,
                    13,
                    49,
                    12,
                    50,
                    51,
                    23,
                    3,
                    8,
                    6,
                    52,
                    53,
                    26,
                    14,
                    44,
                    54,
                    28,
                    55,
                    56,
                    2,
                    57,
                    58,
                    59,
                    60,
                    61,
                    62,
                    63,
                    64,
                    65,
                    66,
                    67,
                    68,
                    69,
                    5,
                    70,
                    71,
                    72,
                    73,
                    74,
                    75,
                    76,
                    77,
                    78,
                    79,
                    80,
                    81,
                    82,
                    24,
                    27,
                    83,
                    84,
                    85,
                    86,
                    87,
                    39,
                    88,
                ])
            )
        ),
        [L.PREMIUM]: A.lazy(() => Z(() => import("./index-GZuKvRvF.js"), __vite__mapDeps([144, 1, 145, 3, 146, 147, 113, 16, 77, 78, 79, 80, 81, 76]))),
        [L.PREMIUM_CHECKOUT]: A.lazy(() => Z(() => import("./index-m0bLRJob.js"), __vite__mapDeps([148, 1, 86, 87, 76, 147, 113, 16, 85, 55, 74, 78, 79, 80, 81, 149, 84]))),
        [L.RESUME_PREMIUM]: A.lazy(() => Z(() => import("./index-3-I7Efq7.js"), __vite__mapDeps([150, 1, 73, 26, 3, 74, 75, 76, 50, 13]))),
        [L.COLLECTION_CHECKOUT]: A.lazy(() => Z(() => import("./index-QMIgS1oh.js"), __vite__mapDeps([151, 1, 85, 55, 76, 74, 84, 86, 87, 149, 15, 16, 81]))),
        [L.TERMS]: A.lazy(() => Z(() => import("./index-GF9vJyMp.js"), __vite__mapDeps([152, 1, 153, 143]))),
        [L.PRIVACY_POLICY]: A.lazy(() => Z(() => import("./PrivacyPage-f3BvdJyh.js"), __vite__mapDeps([154, 1, 143]))),
        [L.REFUND_POLICY]: A.lazy(() => Z(() => import("./index-ZjbbcQBa.js"), __vite__mapDeps([155, 1, 156, 143]))),
        [L.DONATE]: A.lazy(() => Z(() => import("./index-XOd-UZMp.js"), __vite__mapDeps([157, 1, 28, 3, 27, 13, 145, 146, 158, 79, 85, 55, 76, 74, 82, 24, 83, 84, 86, 87, 149, 159, 160]))),
        [L.LEADERBOARD]: A.lazy(() => Z(() => import("./LeaderboardPage-pXspYyzz.js"), __vite__mapDeps([161, 1, 19, 13, 45, 46, 29, 27, 3, 30, 136, 94, 95, 14, 44, 18, 162]))),
        [L.CATEGORIES]: A.lazy(() => Z(() => import("./index-0z7FPiTO.js"), __vite__mapDeps([163, 1, 136, 94, 95, 14, 44, 18, 6, 29, 27, 3, 30]))),
        [L.CREATOR_PROFILE]: A.lazy(() => Z(() => import("./CreatorProfile-5OV358oD.js"), __vite__mapDeps([164, 1, 28, 3, 2, 110, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 72, 34, 35, 36, 20, 39, 19, 94, 95, 165]))),
        [L.COLLECTIONS]: A.lazy(() => Z(() => import("./CollectionsPage-OGMQ5RcF.js"), __vite__mapDeps([166, 1, 2, 3, 5, 6, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 36, 38, 39, 40, 42, 43, 44, 167]))),
        [L.SUBREDDIT]: A.lazy(() =>
            Z(
                () => import("./SubredditPage-KwORp7jQ.js").then((e) => e.b),
                __vite__mapDeps([
                    33,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    34,
                    35,
                    36,
                    37,
                    38,
                    39,
                    40,
                    41,
                    42,
                    43,
                    19,
                    44,
                    45,
                    46,
                    47,
                    29,
                    27,
                    30,
                    28,
                    48,
                    49,
                    50,
                    51,
                    23,
                    52,
                    53,
                    26,
                    54,
                    55,
                    56,
                    57,
                    58,
                    59,
                    60,
                    61,
                    62,
                    63,
                    64,
                    65,
                    66,
                    67,
                    68,
                    69,
                    70,
                    71,
                    72,
                    73,
                    74,
                    75,
                    76,
                    77,
                    78,
                    79,
                    80,
                    81,
                    82,
                    24,
                    83,
                    84,
                    85,
                    86,
                    87,
                    88,
                    89,
                ])
            )
        ),
        [L.CATEGORY]: A.lazy(() => Z(() => import("./CategoryPage-sfxoTljg.js"), __vite__mapDeps([168, 1, 6, 5, 3, 7, 8, 2, 9, 10, 11, 4, 12, 13, 14, 15, 16, 17, 18, 42, 43, 19, 44]))),
        "/*": A.lazy(() => Z(() => Promise.resolve().then(() => eC), void 0)),
    },
    Zh = tC,
    nC = tp(),
    rC = (e) => {
        const { itemType: t } = nC(e.id, () => new np(e));
        switch (t) {
            case We.SUBREDDIT:
            case We.COLLECTION:
                return !0;
            case We.ALBUM:
                return !e.url.pathname.endsWith("/fullscreen");
            default:
                return !1;
        }
    },
    iC = (e, t) => {
        const { pathname: n } = t.url,
            r = n.includes("+");
        switch (e) {
            case L.COLLECTIONS:
            case L.SUBREDDIT:
                return !r;
            case "/*":
                return rC(t);
            default:
                return !1;
        }
    };
class oC {
    constructor() {
        S(this, "hideMainHeader", !1);
        ge(this, { hideMainHeader: V });
    }
    setHideMainHeader(t) {
        this.hideMainHeader = t;
    }
}
const i0 = new oC(),
    sC = () => i0.hideMainHeader,
    gN = (e) => i0.setHideMainHeader(e),
    aC = Qr.div`
  display: flex;
  justify-content: center;
  width: 100%;

  z-index: ${({ theme: e }) => e.layout.zIndex.headerNotification};

  ${({ sticky: e }) =>
      e
          ? `
    position: sticky;
    top: 0;
  `
          : ""}
`;
function lC() {
    var t;
    return ((t = nn()) == null ? void 0 : t.status) === "VERIFICATION" && o0();
}
function uC() {
    return !ni() && o0();
}
function o0() {
    const { pathname: e } = oo().url;
    return !e.startsWith(L.SUBREDDIT.replace("*", "")) && !e.startsWith(L.PREMIUM_CHECKOUT.replace("*", "")) && ![L.PREMIUM, L.UPLOAD, L.UPLOAD_NSFW, L.COLLECTION_CHECKOUT].includes(e);
}
const s0 = () => {
        const [e, t] = A.useState(!1);
        return (
            A.useEffect(() => {
                fetch("https://www3.doubleclick.net", { method: "HEAD", mode: "no-cors", cache: "no-store" })
                    .then(({ redirected: r }) => {
                        r && t(!0);
                    })
                    .catch(() => {
                        t(!0);
                    });
            }, []),
            e
        );
    },
    cC = A.lazy(() => Z(() => import("./index-AyiGOXM2.js"), __vite__mapDeps([169, 1]))),
    dC = A.lazy(() => Z(() => import("./index-hIbfvhmU.js"), __vite__mapDeps([170, 1, 14]))),
    fC = () => {
        const e = s0(),
            n = (() => {
                if (lC()) return x.jsx(A.Suspense, { children: x.jsx(cC, {}) });
                if (uC() && e) return x.jsx(A.Suspense, { children: x.jsx(dC, {}) });
            })();
        return n ? x.jsx(aC, { sticky: !0, children: n }) : x.jsx(x.Fragment, {});
    },
    pC = ri(fC),
    hC = Qr.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  z-index: 1000;

  pointer-events: none;
`;
function vC() {
    return x.jsx(hC, { children: x.jsx(pl, {}) });
}
A.createContext(null);
const gC = ri(() => {
        const e = oo();
        return PC(e), x.jsx(A.Suspense, { fallback: x.jsx(r0, { fillScreen: !0 }), children: x.jsx("div", { className: "app-page", children: SC(e) }) });
    }),
    _C = gC;
function mC(e) {
    e == L.FAVORITES && Fs(`${L.MY_COLLECTIONS}?page=favorites`);
}
const yC = A.lazy(() => Z(() => import("./index-svO2__F_.js"), __vite__mapDeps([171, 1, 29, 27, 3, 30, 32, 25, 15, 16, 31, 172]))),
    wC = A.lazy(() => Z(() => import("./index-WZn6_w-2.js"), __vite__mapDeps([173, 1, 16, 95])));
function SC(e) {
    const { pathname: t } = e.url;
    mC(t);
    for (let n in Zh)
        if (bC(t, n) || kC(t, n)) {
            const r = Zh[n],
                i = L.UPLOAD || L.CREATOR_ONBOARDING_LANDING;
            return x.jsxs(x.Fragment, {
                children: [
                    x.jsx(A.Suspense, { children: !sC() && x.jsx(yC, { useOverlay: iC(n, e) }) }),
                    x.jsx(pC, {}),
                    x.jsx(A.Suspense, { fallback: x.jsx(vC, {}), children: x.jsx("div", { className: i ? "" : "page-wrapper", children: x.jsx(r, { historyEntry: e }) }) }),
                    x.jsx(A.Suspense, { children: x.jsx(wC, {}) }),
                ],
            });
        }
    return x.jsx(EC, {});
}
const EC = () => x.jsx("h2", { style: { textAlign: "center" }, children: "404" });
function bC(e, t) {
    return e === t;
}
function kC(e, t) {
    const n = t.match(/([^*]+)\*/);
    return n !== null && e.startsWith(n[1]);
}
function PC(e) {
    A.useLayoutEffect(() => {
        const t = qy(e);
        if (t !== void 0) Bu(t);
        else if (e.hash !== void 0) {
            const n = window.document.getElementById(e.hash);
            n !== null ? (n.scrollIntoView(), Gh(e)) : Bu(0);
        } else Bu(0);
    }, [e]),
        A.useEffect(() => {
            const t = () => Gh(e);
            return window.addEventListener("scroll", t), () => window.removeEventListener("scroll", t);
        }, [e]);
}
var OC = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
    AC = qo.createContext && qo.createContext(OC);
const aa = { mobile: "375px", tablet: "768px", laptop: "1024px", desktop: "1440px" },
    go = {
        black: "#2c3843",
        blue: "#019cde",
        blueGray: "#1b252f",
        darkBlue: "#212a33",
        darkGreen: "#0be36180",
        darkPink: "#ed2543",
        darkPinkMid: "#D00A54",
        lightPink: "#FF9FCA",
        midRed: "#B11733",
        darkRed: "#B11833",
        darkOrange: "#F99400",
        gray: "#2F3A4",
        green: "#0be361",
        darkGray: "#2e3842",
        lightGray: "#adbfcf",
        lightGreen: "#adcfad",
        midGreen: "#00c700",
        midBlack: "#0F151B",
        midGray: "#adadad",
        orange: "orange",
        lightOrange: "#FFC5A6",
        indigo: "#3a4772",
        pink: "#bf2b55",
        yellow: "#fda700",
        white: "#ffffff",
    },
    CC = {
        breakpoints: { mobile: `(min-width: ${aa.mobile})`, tablet: `(min-width: ${aa.tablet})`, laptop: `(min-width: ${aa.laptop})`, desktop: `(min-width: ${aa.desktop})` },
        layout: {
            header: { height: { mobile: "48px", tablet: "80px" } },
            headerNotification: { height: { mobile: "35px", tablet: "41px" } },
            mainNavbar: { height: "65px" },
            selectedCategoriesMenu: { height: "175px" },
            scroll: {
                brand: `
      scrollbar-color: ${go.pink}${go.darkGray} !important;
      scrollbar-width: thin !important;
      ::-webkit-scrollbar {
        width: 5px;
      }
      ::-webkit-scrollbar-track {
        background: ${go.darkGray};
      }
      ::-webkit-scrollbar-thumb {
        background: ${go.pink};
      }`,
            },
            zIndex: { fullscreenMenu: 110, fullscreenGlobalUI: 100, headerNotification: 20, mainNavbar: 60, notificationsPopup: 65, selectedCategoriesMenu: 25, quickAccessButtons: 20, tabsManager: 20 },
            fullscreen: { topBanner: { height: "36px" }, videoTimeRangeControl: { range: { height: { desktop: "4px" } } } },
        },
        palette: go,
    };
var w = typeof window < "u" ? window : void 0,
    ct = typeof globalThis < "u" ? globalThis : w,
    a0 = Array.prototype,
    ev = a0.forEach,
    tv = a0.indexOf,
    Kt = ct == null ? void 0 : ct.navigator,
    H = ct == null ? void 0 : ct.document,
    at = ct == null ? void 0 : ct.location,
    cd = ct == null ? void 0 : ct.fetch,
    dd = ct != null && ct.XMLHttpRequest && "withCredentials" in new ct.XMLHttpRequest() ? ct.XMLHttpRequest : void 0,
    nv = ct == null ? void 0 : ct.AbortController,
    $e = Kt == null ? void 0 : Kt.userAgent,
    ne = w ?? {},
    Gn = { DEBUG: !1, LIB_VERSION: "1.164.2" },
    RC = Array.isArray,
    l0 = Object.prototype,
    u0 = l0.hasOwnProperty,
    nu = l0.toString,
    Le =
        RC ||
        function (e) {
            return nu.call(e) === "[object Array]";
        },
    Dt = function (e) {
        return typeof e == "function";
    },
    Me = function (e) {
        return e === Object(e) && !Le(e);
    },
    Ta = function (e) {
        if (Me(e)) {
            for (var t in e) if (u0.call(e, t)) return !1;
            return !0;
        }
        return !1;
    },
    q = function (e) {
        return e === void 0;
    },
    Je = function (e) {
        return nu.call(e) == "[object String]";
    },
    rv = function (e) {
        return Je(e) && e.trim().length === 0;
    },
    mr = function (e) {
        return e === null;
    },
    Ae = function (e) {
        return q(e) || mr(e);
    },
    _t = function (e) {
        return nu.call(e) == "[object Number]";
    },
    Tr = function (e) {
        return nu.call(e) === "[object Boolean]";
    },
    TC = function (e) {
        return e instanceof FormData;
    },
    iv = "[PostHog.js]",
    I = {
        _log: function (e) {
            if (w && (Gn.DEBUG || ne.POSTHOG_DEBUG) && !q(w.console) && w.console) {
                for (var t = ("__rrweb_original__" in w.console[e]) ? w.console[e].__rrweb_original__ : w.console[e], n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                t.apply(void 0, [iv].concat(r));
            }
        },
        info: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            I._log.apply(I, ["log"].concat(t));
        },
        warn: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            I._log.apply(I, ["warn"].concat(t));
        },
        error: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            I._log.apply(I, ["error"].concat(t));
        },
        critical: function () {
            for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            (e = console).error.apply(e, [iv].concat(n));
        },
        uninitializedWarning: function (e) {
            I.error("You must initialize PostHog before calling ".concat(e));
        },
    },
    ov = function (e, t, n) {
        if (e.config.disable_external_dependency_loading) return I.warn("".concat(t, " was requested but loading of external scripts is disabled.")), n("Loading of external scripts is disabled");
        var r = function () {
            if (!H) return n("document not found");
            var i = H.createElement("script");
            (i.type = "text/javascript"),
                (i.src = t),
                (i.onload = function (a) {
                    return n(void 0, a);
                }),
                (i.onerror = function (a) {
                    return n(a);
                });
            var o,
                s = H.querySelectorAll("body > script");
            s.length > 0 ? (o = s[0].parentNode) === null || o === void 0 || o.insertBefore(i, s[0]) : H.body.appendChild(i);
        };
        H != null && H.body ? r() : H == null || H.addEventListener("DOMContentLoaded", r);
    };
function sv(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? sv(Object(n), !0).forEach(function (r) {
                  k(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : sv(Object(n)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
              });
    }
    return e;
}
function ws(e) {
    return (
        (ws =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                  }),
        ws(e)
    );
}
function ae(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function av(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
}
function le(e, t, n) {
    return t && av(e.prototype, t), n && av(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function k(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
}
function IC(e, t) {
    if (e == null) return {};
    var n,
        r,
        i = (function (s, a) {
            if (s == null) return {};
            var l,
                u,
                c = {},
                d = Object.keys(s);
            for (u = 0; u < d.length; u++) (l = d[u]), a.indexOf(l) >= 0 || (c[l] = s[l]);
            return c;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function nt(e, t) {
    return (
        (function (n) {
            if (Array.isArray(n)) return n;
        })(e) ||
        (function (n, r) {
            var i = n == null ? null : (typeof Symbol < "u" && n[Symbol.iterator]) || n["@@iterator"];
            if (i != null) {
                var o,
                    s,
                    a = [],
                    l = !0,
                    u = !1;
                try {
                    for (i = i.call(n); !(l = (o = i.next()).done) && (a.push(o.value), !r || a.length !== r); l = !0);
                } catch (c) {
                    (u = !0), (s = c);
                } finally {
                    try {
                        l || i.return == null || i.return();
                    } finally {
                        if (u) throw s;
                    }
                }
                return a;
            }
        })(e, t) ||
        rp(e, t) ||
        (function () {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        })()
    );
}
function Dn(e) {
    return (
        (function (t) {
            if (Array.isArray(t)) return fd(t);
        })(e) ||
        (function (t) {
            if ((typeof Symbol < "u" && t[Symbol.iterator] != null) || t["@@iterator"] != null) return Array.from(t);
        })(e) ||
        rp(e) ||
        (function () {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        })()
    );
}
function rp(e, t) {
    if (e) {
        if (typeof e == "string") return fd(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? fd(e, t) : void 0;
    }
}
function fd(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function Bt(e, t) {
    var n = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
    if (!n) {
        if (Array.isArray(e) || (n = rp(e)) || (t && e && typeof e.length == "number")) {
            n && (e = n);
            var r = 0,
                i = function () {};
            return {
                s: i,
                n: function () {
                    return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                },
                e: function (l) {
                    throw l;
                },
                f: i,
            };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var o,
        s = !0,
        a = !1;
    return {
        s: function () {
            n = n.call(e);
        },
        n: function () {
            var l = n.next();
            return (s = l.done), l;
        },
        e: function (l) {
            (a = !0), (o = l);
        },
        f: function () {
            try {
                s || n.return == null || n.return();
            } finally {
                if (a) throw o;
            }
        },
    };
}
(ne.__PosthogExtensions__ = ne.__PosthogExtensions__ || {}),
    (ne.__PosthogExtensions__.loadExternalDependency = function (e, t, n) {
        var r = "/static/".concat(t, ".js") + "?v=".concat(e.version);
        if (t === "toolbar") {
            var i = 3e5,
                o = Math.floor(Date.now() / i) * i;
            r = "".concat(r, "?&=").concat(o);
        }
        var s = e.requestRouter.endpointFor("assets", r);
        ov(e, s, n);
    }),
    (ne.__PosthogExtensions__.loadSiteApp = function (e, t, n) {
        var r = e.requestRouter.endpointFor("api", t);
        ov(e, r, n);
    });
var hl = {},
    ru = function (e) {
        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    };
function Ii(e, t, n) {
    if (Le(e)) {
        if (ev && e.forEach === ev) e.forEach(t, n);
        else if ("length" in e && e.length === +e.length) {
            for (var r = 0, i = e.length; r < i; r++) if (r in e && t.call(n, e[r], r) === hl) return;
        }
    }
}
function he(e, t, n) {
    if (!Ae(e)) {
        if (Le(e)) return Ii(e, t, n);
        if (TC(e)) {
            var r,
                i = Bt(e.entries());
            try {
                for (i.s(); !(r = i.n()).done; ) {
                    var o = r.value;
                    if (t.call(n, o[1], o[0]) === hl) return;
                }
            } catch (a) {
                i.e(a);
            } finally {
                i.f();
            }
        } else for (var s in e) if (u0.call(e, s) && t.call(n, e[s], s) === hl) return;
    }
}
var rt = function (e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return (
        Ii(n, function (i) {
            for (var o in i) i[o] !== void 0 && (e[o] = i[o]);
        }),
        e
    );
};
function ie(e, t) {
    return e.indexOf(t) !== -1;
}
function Ia(e) {
    for (var t = Object.keys(e), n = t.length, r = new Array(n); n--; ) r[n] = [t[n], e[t[n]]];
    return r;
}
var c0 = function () {
        return (
            (Date.now =
                Date.now ||
                function () {
                    return +new Date();
                }),
            Date.now()
        );
    },
    lv = function (e) {
        try {
            return e();
        } catch {
            return;
        }
    },
    xC = function (e) {
        return function () {
            try {
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return e.apply(this, n);
            } catch (i) {
                I.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), I.critical(i);
            }
        };
    },
    pd = function (e) {
        var t = {};
        return (
            he(e, function (n, r) {
                Je(n) && n.length > 0 && (t[r] = n);
            }),
            t
        );
    },
    hd = function (e) {
        return e.replace(/^\$/, "");
    };
function DC(e, t) {
    return (
        (n = e),
        (r = function (o) {
            return Je(o) && !mr(t) ? o.slice(0, t) : o;
        }),
        (i = new Set()),
        (function o(s, a) {
            return s !== Object(s)
                ? r
                    ? r(s, a)
                    : s
                : i.has(s)
                ? void 0
                : (i.add(s),
                  Le(s)
                      ? ((l = []),
                        Ii(s, function (u) {
                            l.push(o(u));
                        }))
                      : ((l = {}),
                        he(s, function (u, c) {
                            i.has(u) || (l[c] = o(u, c));
                        })),
                  l);
            var l;
        })(n)
    );
    var n, r, i;
}
var Yt,
    NC = function (e) {
        var t,
            n,
            r,
            i,
            o = "";
        for (
            t = n = 0,
                r = (e = (e + "")
                    .replace(
                        /\r\n/g,
                        `
`
                    )
                    .replace(
                        /\r/g,
                        `
`
                    )).length,
                i = 0;
            i < r;
            i++
        ) {
            var s = e.charCodeAt(i),
                a = null;
            s < 128 ? n++ : (a = s > 127 && s < 2048 ? String.fromCharCode((s >> 6) | 192, (63 & s) | 128) : String.fromCharCode((s >> 12) | 224, ((s >> 6) & 63) | 128, (63 & s) | 128)),
                mr(a) || (n > t && (o += e.substring(t, n)), (o += a), (t = n = i + 1));
        }
        return n > t && (o += e.substring(t, e.length)), o;
    },
    On = (function () {
        function e(t) {
            return t && ((t.preventDefault = e.preventDefault), (t.stopPropagation = e.stopPropagation)), t;
        }
        return (
            (e.preventDefault = function () {
                this.returnValue = !1;
            }),
            (e.stopPropagation = function () {
                this.cancelBubble = !0;
            }),
            function (t, n, r, i, o) {
                if (t)
                    if (t.addEventListener && !i) t.addEventListener(n, r, !!o);
                    else {
                        var s = "on" + n,
                            a = t[s];
                        t[s] = (function (l, u, c) {
                            return function (d) {
                                if ((d = d || e(w == null ? void 0 : w.event))) {
                                    var f,
                                        p = !0;
                                    Dt(c) && (f = c(d));
                                    var m = u.call(l, d);
                                    return (f !== !1 && m !== !1) || (p = !1), p;
                                }
                            };
                        })(t, r, a);
                    }
                else I.error("No valid element provided to register_event");
            }
        );
    })();
function d0(e, t) {
    for (var n = 0; n < e.length; n++) if (t(e[n])) return e[n];
}
(function (e) {
    (e.GZipJS = "gzip-js"), (e.Base64 = "base64");
})(Yt || (Yt = {}));
var f0 = "$people_distinct_id",
    Oo = "__alias",
    Ao = "__timers",
    uv = "$autocapture_disabled_server_side",
    vd = "$heatmaps_enabled_server_side",
    cv = "$exception_capture_enabled_server_side",
    dv = "$exception_capture_endpoint_suffix",
    fv = "$web_vitals_enabled_server_side",
    pv = "$web_vitals_allowed_metrics",
    gd = "$session_recording_enabled_server_side",
    hv = "$console_log_recording_enabled_server_side",
    vv = "$session_recording_network_payload_capture",
    gv = "$session_recording_canvas_recording",
    _v = "$replay_sample_rate",
    mv = "$replay_minimum_duration",
    vl = "$sesid",
    Vo = "$session_is_sampled",
    Ei = "$enabled_feature_flags",
    _d = "$early_access_features",
    bi = "$stored_person_properties",
    qn = "$stored_group_properties",
    md = "$surveys",
    la = "$surveys_activated",
    gl = "$flag_call_reported",
    En = "$user_state",
    yd = "$client_session_props",
    wd = "$capture_rate_limit",
    Sd = "$initial_campaign_params",
    Ed = "$initial_referrer_info",
    yv = "$initial_person_info",
    _l = "$epp",
    bd = "__POSTHOG_TOOLBAR__",
    LC = [f0, Oo, "__cmpns", Ao, gd, vd, vl, Ei, En, _d, qn, bi, md, gl, yd, wd, Sd, Ed, _l],
    Wu = "$active_feature_flags",
    ua = "$override_feature_flags",
    wv = "$feature_flag_payloads",
    Sv = function (e) {
        var t,
            n = {},
            r = Bt(Ia(e || {}));
        try {
            for (r.s(); !(t = r.n()).done; ) {
                var i = nt(t.value, 2),
                    o = i[0],
                    s = i[1];
                s && (n[o] = s);
            }
        } catch (a) {
            r.e(a);
        } finally {
            r.f();
        }
        return n;
    },
    MC = (function () {
        function e(t) {
            ae(this, e), (this.instance = t), (this._override_warning = !1), (this.featureFlagEventHandlers = []), (this.reloadFeatureFlagsQueued = !1), (this.reloadFeatureFlagsInAction = !1);
        }
        return (
            le(e, [
                {
                    key: "getFlags",
                    value: function () {
                        return Object.keys(this.getFlagVariants());
                    },
                },
                {
                    key: "getFlagVariants",
                    value: function () {
                        var t = this.instance.get_property(Ei),
                            n = this.instance.get_property(ua);
                        if (!n) return t || {};
                        for (var r = rt({}, t), i = Object.keys(n), o = 0; o < i.length; o++) r[i[o]] = n[i[o]];
                        return this._override_warning || (I.warn(" Overriding feature flags!", { enabledFlags: t, overriddenFlags: n, finalFlags: r }), (this._override_warning = !0)), r;
                    },
                },
                {
                    key: "getFlagPayloads",
                    value: function () {
                        return this.instance.get_property(wv) || {};
                    },
                },
                {
                    key: "reloadFeatureFlags",
                    value: function () {
                        this.reloadFeatureFlagsQueued || ((this.reloadFeatureFlagsQueued = !0), this._startReloadTimer());
                    },
                },
                {
                    key: "setAnonymousDistinctId",
                    value: function (t) {
                        this.$anon_distinct_id = t;
                    },
                },
                {
                    key: "setReloadingPaused",
                    value: function (t) {
                        this.reloadFeatureFlagsInAction = t;
                    },
                },
                {
                    key: "resetRequestQueue",
                    value: function () {
                        this.reloadFeatureFlagsQueued = !1;
                    },
                },
                {
                    key: "_startReloadTimer",
                    value: function () {
                        var t = this;
                        this.reloadFeatureFlagsQueued &&
                            !this.reloadFeatureFlagsInAction &&
                            setTimeout(function () {
                                !t.reloadFeatureFlagsInAction && t.reloadFeatureFlagsQueued && ((t.reloadFeatureFlagsQueued = !1), t._reloadFeatureFlagsRequest());
                            }, 5);
                    },
                },
                {
                    key: "_reloadFeatureFlagsRequest",
                    value: function () {
                        var t = this;
                        if (!this.instance.config.advanced_disable_feature_flags) {
                            this.setReloadingPaused(!0);
                            var n = this.instance.config.token,
                                r = this.instance.get_property(bi),
                                i = this.instance.get_property(qn),
                                o = {
                                    token: n,
                                    distinct_id: this.instance.get_distinct_id(),
                                    groups: this.instance.getGroups(),
                                    $anon_distinct_id: this.$anon_distinct_id,
                                    person_properties: r,
                                    group_properties: i,
                                    disable_flags: this.instance.config.advanced_disable_feature_flags || void 0,
                                };
                            this.instance._send_request({
                                method: "POST",
                                url: this.instance.requestRouter.endpointFor("api", "/decide/?v=3"),
                                data: o,
                                compression: this.instance.config.disable_compression ? void 0 : Yt.Base64,
                                timeout: this.instance.config.feature_flag_request_timeout_ms,
                                callback: function (s) {
                                    var a;
                                    t.setReloadingPaused(!1);
                                    var l = !0;
                                    s.statusCode === 200 && ((t.$anon_distinct_id = void 0), (l = !1)), t.receivedFeatureFlags((a = s.json) !== null && a !== void 0 ? a : {}, l), t._startReloadTimer();
                                },
                            });
                        }
                    },
                },
                {
                    key: "getFeatureFlag",
                    value: function (t) {
                        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                        if (this.instance.decideEndpointWasHit || (this.getFlags() && this.getFlags().length > 0)) {
                            var r,
                                i = this.getFlagVariants()[t],
                                o = "".concat(i),
                                s = this.instance.get_property(gl) || {};
                            return (
                                (n.send_event || !("send_event" in n)) &&
                                    (!(t in s) || !s[t].includes(o)) &&
                                    (Le(s[t]) ? s[t].push(o) : (s[t] = [o]),
                                    (r = this.instance.persistence) === null || r === void 0 || r.register(k({}, gl, s)),
                                    this.instance.capture("$feature_flag_called", { $feature_flag: t, $feature_flag_response: i })),
                                i
                            );
                        }
                        I.warn('getFeatureFlag for key "' + t + `" failed. Feature flags didn't load in time.`);
                    },
                },
                {
                    key: "getFeatureFlagPayload",
                    value: function (t) {
                        return this.getFlagPayloads()[t];
                    },
                },
                {
                    key: "isFeatureEnabled",
                    value: function (t) {
                        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                        if (this.instance.decideEndpointWasHit || (this.getFlags() && this.getFlags().length > 0)) return !!this.getFeatureFlag(t, n);
                        I.warn('isFeatureEnabled for key "' + t + `" failed. Feature flags didn't load in time.`);
                    },
                },
                {
                    key: "addFeatureFlagsHandler",
                    value: function (t) {
                        this.featureFlagEventHandlers.push(t);
                    },
                },
                {
                    key: "removeFeatureFlagsHandler",
                    value: function (t) {
                        this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter(function (n) {
                            return n !== t;
                        });
                    },
                },
                {
                    key: "receivedFeatureFlags",
                    value: function (t, n) {
                        if (this.instance.persistence) {
                            this.instance.decideEndpointWasHit = !0;
                            var r = this.getFlagVariants(),
                                i = this.getFlagPayloads();
                            (function (o, s) {
                                var a,
                                    l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                                    u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
                                    c = o.featureFlags,
                                    d = o.featureFlagPayloads;
                                if (c)
                                    if (Le(c)) {
                                        var f,
                                            p = {};
                                        if (c) for (var m = 0; m < c.length; m++) p[c[m]] = !0;
                                        s && s.register((k((f = {}), Wu, c), k(f, Ei, p), f));
                                    } else {
                                        var v = c,
                                            O = d;
                                        o.errorsWhileComputingFlags && ((v = j(j({}, l), v)), (O = j(j({}, u), O))), s && s.register((k((a = {}), Wu, Object.keys(Sv(v))), k(a, Ei, v || {}), k(a, wv, O || {}), a));
                                    }
                            })(t, this.instance.persistence, r, i),
                                this._fireFeatureFlagsCallbacks(n);
                        }
                    },
                },
                {
                    key: "override",
                    value: function (t) {
                        var n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
                        if (!this.instance.__loaded || !this.instance.persistence) return I.uninitializedWarning("posthog.feature_flags.override");
                        if (((this._override_warning = n), t === !1)) this.instance.persistence.unregister(ua);
                        else if (Le(t)) {
                            for (var r = {}, i = 0; i < t.length; i++) r[t[i]] = !0;
                            this.instance.persistence.register(k({}, ua, r));
                        } else this.instance.persistence.register(k({}, ua, t));
                    },
                },
                {
                    key: "onFeatureFlags",
                    value: function (t) {
                        var n = this;
                        if ((this.addFeatureFlagsHandler(t), this.instance.decideEndpointWasHit)) {
                            var r = this._prepareFeatureFlagsForCallbacks(),
                                i = r.flags,
                                o = r.flagVariants;
                            t(i, o);
                        }
                        return function () {
                            return n.removeFeatureFlagsHandler(t);
                        };
                    },
                },
                {
                    key: "updateEarlyAccessFeatureEnrollment",
                    value: function (t, n) {
                        var r,
                            i,
                            o = k({}, "$feature_enrollment/".concat(t), n);
                        this.instance.capture("$feature_enrollment_update", { $feature_flag: t, $feature_enrollment: n, $set: o }), this.setPersonPropertiesForFlags(o, !1);
                        var s = j(j({}, this.getFlagVariants()), {}, k({}, t, n));
                        (r = this.instance.persistence) === null || r === void 0 || r.register((k((i = {}), Wu, Object.keys(Sv(s))), k(i, Ei, s), i)), this._fireFeatureFlagsCallbacks();
                    },
                },
                {
                    key: "getEarlyAccessFeatures",
                    value: function (t) {
                        var n = this,
                            r = arguments.length > 1 && arguments[1] !== void 0 && arguments[1],
                            i = this.instance.get_property(_d);
                        if (i && !r) return t(i);
                        this.instance._send_request({
                            transport: "XHR",
                            url: this.instance.requestRouter.endpointFor("api", "/api/early_access_features/?token=".concat(this.instance.config.token)),
                            method: "GET",
                            callback: function (o) {
                                var s;
                                if (o.json) {
                                    var a = o.json.earlyAccessFeatures;
                                    return (s = n.instance.persistence) === null || s === void 0 || s.register(k({}, _d, a)), t(a);
                                }
                            },
                        });
                    },
                },
                {
                    key: "_prepareFeatureFlagsForCallbacks",
                    value: function () {
                        var t = this.getFlags(),
                            n = this.getFlagVariants();
                        return {
                            flags: t.filter(function (r) {
                                return n[r];
                            }),
                            flagVariants: Object.keys(n)
                                .filter(function (r) {
                                    return n[r];
                                })
                                .reduce(function (r, i) {
                                    return (r[i] = n[i]), r;
                                }, {}),
                        };
                    },
                },
                {
                    key: "_fireFeatureFlagsCallbacks",
                    value: function (t) {
                        var n = this._prepareFeatureFlagsForCallbacks(),
                            r = n.flags,
                            i = n.flagVariants;
                        this.featureFlagEventHandlers.forEach(function (o) {
                            return o(r, i, { errorsLoading: t });
                        });
                    },
                },
                {
                    key: "setPersonPropertiesForFlags",
                    value: function (t) {
                        var n = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1],
                            r = this.instance.get_property(bi) || {};
                        this.instance.register(k({}, bi, j(j({}, r), t))), n && this.instance.reloadFeatureFlags();
                    },
                },
                {
                    key: "resetPersonPropertiesForFlags",
                    value: function () {
                        this.instance.unregister(bi);
                    },
                },
                {
                    key: "setGroupPropertiesForFlags",
                    value: function (t) {
                        var n = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1],
                            r = this.instance.get_property(qn) || {};
                        Object.keys(r).length !== 0 &&
                            Object.keys(r).forEach(function (i) {
                                (r[i] = j(j({}, r[i]), t[i])), delete t[i];
                            }),
                            this.instance.register(k({}, qn, j(j({}, r), t))),
                            n && this.instance.reloadFeatureFlags();
                    },
                },
                {
                    key: "resetGroupPropertiesForFlags",
                    value: function (t) {
                        if (t) {
                            var n = this.instance.get_property(qn) || {};
                            this.instance.register(k({}, qn, j(j({}, n), {}, k({}, t, {}))));
                        } else this.instance.unregister(qn);
                    },
                },
            ]),
            e
        );
    })();
Math.trunc ||
    (Math.trunc = function (e) {
        return e < 0 ? Math.ceil(e) : Math.floor(e);
    }),
    Number.isInteger ||
        (Number.isInteger = function (e) {
            return _t(e) && isFinite(e) && Math.floor(e) === e;
        });
var Ev = "0123456789abcdef",
    FC = (function () {
        function e(t) {
            if ((ae(this, e), (this.bytes = t), t.length !== 16)) throw new TypeError("not 128-bit length");
        }
        return (
            le(
                e,
                [
                    {
                        key: "toString",
                        value: function () {
                            for (var t = "", n = 0; n < this.bytes.length; n++) (t = t + Ev.charAt(this.bytes[n] >>> 4) + Ev.charAt(15 & this.bytes[n])), (n !== 3 && n !== 5 && n !== 7 && n !== 9) || (t += "-");
                            if (t.length !== 36) throw new Error("Invalid UUIDv7 was generated");
                            return t;
                        },
                    },
                    {
                        key: "clone",
                        value: function () {
                            return new e(this.bytes.slice(0));
                        },
                    },
                    {
                        key: "equals",
                        value: function (t) {
                            return this.compareTo(t) === 0;
                        },
                    },
                    {
                        key: "compareTo",
                        value: function (t) {
                            for (var n = 0; n < 16; n++) {
                                var r = this.bytes[n] - t.bytes[n];
                                if (r !== 0) return Math.sign(r);
                            }
                            return 0;
                        },
                    },
                ],
                [
                    {
                        key: "fromFieldsV7",
                        value: function (t, n, r, i) {
                            if (!Number.isInteger(t) || !Number.isInteger(n) || !Number.isInteger(r) || !Number.isInteger(i) || t < 0 || n < 0 || r < 0 || i < 0 || t > 0xffffffffffff || n > 4095 || r > 1073741823 || i > 4294967295)
                                throw new RangeError("invalid field value");
                            var o = new Uint8Array(16);
                            return (
                                (o[0] = t / Math.pow(2, 40)),
                                (o[1] = t / Math.pow(2, 32)),
                                (o[2] = t / Math.pow(2, 24)),
                                (o[3] = t / Math.pow(2, 16)),
                                (o[4] = t / Math.pow(2, 8)),
                                (o[5] = t),
                                (o[6] = 112 | (n >>> 8)),
                                (o[7] = n),
                                (o[8] = 128 | (r >>> 24)),
                                (o[9] = r >>> 16),
                                (o[10] = r >>> 8),
                                (o[11] = r),
                                (o[12] = i >>> 24),
                                (o[13] = i >>> 16),
                                (o[14] = i >>> 8),
                                (o[15] = i),
                                new e(o)
                            );
                        },
                    },
                ]
            ),
            e
        );
    })(),
    $C = (function () {
        function e() {
            ae(this, e), k(this, "timestamp", 0), k(this, "counter", 0), k(this, "random", new UC());
        }
        return (
            le(e, [
                {
                    key: "generate",
                    value: function () {
                        var t = this.generateOrAbort();
                        if (q(t)) {
                            this.timestamp = 0;
                            var n = this.generateOrAbort();
                            if (q(n)) throw new Error("Could not generate UUID after timestamp reset");
                            return n;
                        }
                        return t;
                    },
                },
                {
                    key: "generateOrAbort",
                    value: function () {
                        var t = Date.now();
                        if (t > this.timestamp) (this.timestamp = t), this.resetCounter();
                        else {
                            if (!(t + 1e4 > this.timestamp)) return;
                            this.counter++, this.counter > 4398046511103 && (this.timestamp++, this.resetCounter());
                        }
                        return FC.fromFieldsV7(this.timestamp, Math.trunc(this.counter / Math.pow(2, 30)), this.counter & (Math.pow(2, 30) - 1), this.random.nextUint32());
                    },
                },
                {
                    key: "resetCounter",
                    value: function () {
                        this.counter = 1024 * this.random.nextUint32() + (1023 & this.random.nextUint32());
                    },
                },
            ]),
            e
        );
    })(),
    p0 = function (e) {
        if (typeof UUIDV7_DENY_WEAK_RNG < "u" && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
        for (var t = 0; t < e.length; t++) e[t] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
        return e;
    };
w &&
    !q(w.crypto) &&
    crypto.getRandomValues &&
    (p0 = function (e) {
        return crypto.getRandomValues(e);
    });
var bv,
    UC = (function () {
        function e() {
            ae(this, e), k(this, "buffer", new Uint32Array(8)), k(this, "cursor", 1 / 0);
        }
        return (
            le(e, [
                {
                    key: "nextUint32",
                    value: function () {
                        return this.cursor >= this.buffer.length && (p0(this.buffer), (this.cursor = 0)), this.buffer[this.cursor++];
                    },
                },
            ]),
            e
        );
    })(),
    er = function () {
        return BC().toString();
    },
    BC = function () {
        return (bv || (bv = new $C())).generate();
    },
    jC = "Thu, 01 Jan 1970 00:00:00 GMT",
    _o = "",
    VC = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
function zC(e, t) {
    if (t) {
        var n = (function (i) {
            var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : H;
            if (_o) return _o;
            if (!o || ["localhost", "127.0.0.1"].includes(i)) return "";
            for (var s = i.split("."), a = Math.min(s.length, 8), l = "dmn_chk_" + er(), u = new RegExp("(^|;)\\s*" + l + "=1"); !_o && a--; ) {
                var c = s.slice(a).join("."),
                    d = l + "=1;domain=." + c;
                (o.cookie = d), u.test(o.cookie) && ((o.cookie = d + ";expires=" + jC), (_o = c));
            }
            return _o;
        })(e);
        if (!n) {
            var r = (function (i) {
                var o = i.match(VC);
                return o ? o[0] : "";
            })(e);
            r !== n && I.info("Warning: cookie subdomain discovery mismatch", r, n), (n = r);
        }
        return n ? "; domain=." + n : "";
    }
    return "";
}
var Ve,
    Nn = {
        is_supported: function () {
            return !!H;
        },
        error: function (e) {
            I.error("cookieStore error: " + e);
        },
        get: function (e) {
            if (H) {
                try {
                    for (
                        var t = e + "=",
                            n = H.cookie.split(";").filter(function (o) {
                                return o.length;
                            }),
                            r = 0;
                        r < n.length;
                        r++
                    ) {
                        for (var i = n[r]; i.charAt(0) == " "; ) i = i.substring(1, i.length);
                        if (i.indexOf(t) === 0) return decodeURIComponent(i.substring(t.length, i.length));
                    }
                } catch {}
                return null;
            }
        },
        parse: function (e) {
            var t;
            try {
                t = JSON.parse(Nn.get(e)) || {};
            } catch {}
            return t;
        },
        set: function (e, t, n, r, i) {
            if (H)
                try {
                    var o = "",
                        s = "",
                        a = zC(H.location.hostname, r);
                    if (n) {
                        var l = new Date();
                        l.setTime(l.getTime() + 24 * n * 60 * 60 * 1e3), (o = "; expires=" + l.toUTCString());
                    }
                    i && (s = "; secure");
                    var u = e + "=" + encodeURIComponent(JSON.stringify(t)) + o + "; SameSite=Lax; path=/" + a + s;
                    return u.length > 3686.4 && I.warn("cookieStore warning: large cookie, len=" + u.length), (H.cookie = u), u;
                } catch {
                    return;
                }
        },
        remove: function (e, t) {
            try {
                Nn.set(e, "", -1, t);
            } catch {
                return;
            }
        },
    },
    Gu = null,
    Ne = {
        is_supported: function () {
            if (!mr(Gu)) return Gu;
            var e = !0;
            if (q(w)) e = !1;
            else
                try {
                    var t = "__mplssupport__";
                    Ne.set(t, "xyz"), Ne.get(t) !== '"xyz"' && (e = !1), Ne.remove(t);
                } catch {
                    e = !1;
                }
            return e || I.error("localStorage unsupported; falling back to cookie store"), (Gu = e), e;
        },
        error: function (e) {
            I.error("localStorage error: " + e);
        },
        get: function (e) {
            try {
                return w == null ? void 0 : w.localStorage.getItem(e);
            } catch (t) {
                Ne.error(t);
            }
            return null;
        },
        parse: function (e) {
            try {
                return JSON.parse(Ne.get(e)) || {};
            } catch {}
            return null;
        },
        set: function (e, t) {
            try {
                w == null || w.localStorage.setItem(e, JSON.stringify(t));
            } catch (n) {
                Ne.error(n);
            }
        },
        remove: function (e) {
            try {
                w == null || w.localStorage.removeItem(e);
            } catch (t) {
                Ne.error(t);
            }
        },
    },
    HC = ["distinct_id", vl, Vo, _l],
    ca = j(
        j({}, Ne),
        {},
        {
            parse: function (e) {
                try {
                    var t = {};
                    try {
                        t = Nn.parse(e) || {};
                    } catch {}
                    var n = rt(t, JSON.parse(Ne.get(e) || "{}"));
                    return Ne.set(e, n), n;
                } catch {}
                return null;
            },
            set: function (e, t, n, r, i, o) {
                try {
                    Ne.set(e, t, void 0, void 0, o);
                    var s = {};
                    HC.forEach(function (a) {
                        t[a] && (s[a] = t[a]);
                    }),
                        Object.keys(s).length && Nn.set(e, s, n, r, i, o);
                } catch (a) {
                    Ne.error(a);
                }
            },
            remove: function (e, t) {
                try {
                    w == null || w.localStorage.removeItem(e), Nn.remove(e, t);
                } catch (n) {
                    Ne.error(n);
                }
            },
        }
    ),
    da = {},
    WC = {
        is_supported: function () {
            return !0;
        },
        error: function (e) {
            I.error("memoryStorage error: " + e);
        },
        get: function (e) {
            return da[e] || null;
        },
        parse: function (e) {
            return da[e] || null;
        },
        set: function (e, t) {
            da[e] = t;
        },
        remove: function (e) {
            delete da[e];
        },
    },
    yr = null,
    He = {
        is_supported: function () {
            if (!mr(yr)) return yr;
            if (((yr = !0), q(w))) yr = !1;
            else
                try {
                    var e = "__support__";
                    He.set(e, "xyz"), He.get(e) !== '"xyz"' && (yr = !1), He.remove(e);
                } catch {
                    yr = !1;
                }
            return yr;
        },
        error: function (e) {
            I.error("sessionStorage error: ", e);
        },
        get: function (e) {
            try {
                return w == null ? void 0 : w.sessionStorage.getItem(e);
            } catch (t) {
                He.error(t);
            }
            return null;
        },
        parse: function (e) {
            try {
                return JSON.parse(He.get(e)) || null;
            } catch {}
            return null;
        },
        set: function (e, t) {
            try {
                w == null || w.sessionStorage.setItem(e, JSON.stringify(t));
            } catch (n) {
                He.error(n);
            }
        },
        remove: function (e) {
            try {
                w == null || w.sessionStorage.removeItem(e);
            } catch (t) {
                He.error(t);
            }
        },
    },
    GC = ["localhost", "127.0.0.1"],
    zo = function (e) {
        var t = H == null ? void 0 : H.createElement("a");
        return q(t) ? null : ((t.href = e), t);
    },
    Yi = function (e, t) {
        return (
            !!(function (n) {
                try {
                    new RegExp(n);
                } catch {
                    return !1;
                }
                return !0;
            })(t) && new RegExp(t).test(e)
        );
    },
    qC = function (e) {
        var t,
            n,
            r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "&",
            i = [];
        return (
            he(e, function (o, s) {
                q(o) ||
                    q(s) ||
                    s === "undefined" ||
                    ((t = encodeURIComponent(
                        (function (a) {
                            return a instanceof File;
                        })(o)
                            ? o.name
                            : o.toString()
                    )),
                    (n = encodeURIComponent(s)),
                    (i[i.length] = n + "=" + t));
            }),
            i.join(r)
        );
    },
    kv = function (e, t) {
        for (var n, r = ((e.split("#")[0] || "").split("?")[1] || "").split("&"), i = 0; i < r.length; i++) {
            var o = r[i].split("=");
            if (o[0] === t) {
                n = o;
                break;
            }
        }
        if (!Le(n) || n.length < 2) return "";
        var s = n[1];
        try {
            s = decodeURIComponent(s);
        } catch {
            I.error("Skipping decoding for malformed query param: " + s);
        }
        return s.replace(/\+/g, " ");
    },
    ml = function (e, t) {
        var n = e.match(new RegExp(t + "=([^&]*)"));
        return n ? n[1] : null;
    },
    Lt = "Mobile",
    yl = "iOS",
    cn = "Android",
    Ss = "Tablet",
    h0 = cn + " " + Ss,
    v0 = "iPad",
    g0 = "Apple",
    _0 = g0 + " Watch",
    Es = "Safari",
    Ki = "BlackBerry",
    m0 = "Samsung",
    y0 = m0 + "Browser",
    w0 = m0 + " Internet",
    ur = "Chrome",
    QC = ur + " OS",
    S0 = ur + " " + yl,
    ip = "Internet Explorer",
    E0 = ip + " " + Lt,
    op = "Opera",
    YC = op + " Mini",
    sp = "Edge",
    b0 = "Microsoft " + sp,
    xi = "Firefox",
    k0 = xi + " " + yl,
    bs = "Nintendo",
    ks = "PlayStation",
    Di = "Xbox",
    P0 = cn + " " + Lt,
    O0 = Lt + " " + Es,
    Co = "Windows",
    kd = Co + " Phone",
    Pv = "Nokia",
    Pd = "Ouya",
    A0 = "Generic",
    KC = A0 + " " + Lt.toLowerCase(),
    C0 = A0 + " " + Ss.toLowerCase(),
    Od = "Konqueror",
    et = "(\\d+(\\.\\d+)?)",
    qu = new RegExp("Version/" + et),
    XC = new RegExp(Di, "i"),
    JC = new RegExp(ks + " \\w+", "i"),
    ZC = new RegExp(bs + " \\w+", "i"),
    ap = new RegExp(Ki + "|PlayBook|BB10", "i"),
    eR = { "NT3.51": "NT 3.11", "NT4.0": "NT 4.0", "5.0": "2000", 5.1: "XP", 5.2: "XP", "6.0": "Vista", 6.1: "7", 6.2: "8", 6.3: "8.1", 6.4: "10", "10.0": "10" },
    tR = function (e, t) {
        return (
            (t && ie(t, g0)) ||
            (function (n) {
                return ie(n, Es) && !ie(n, ur) && !ie(n, cn);
            })(e)
        );
    },
    Ov = function (e, t) {
        return (
            (t = t || ""),
            ie(e, " OPR/") && ie(e, "Mini")
                ? YC
                : ie(e, " OPR/")
                ? op
                : ap.test(e)
                ? Ki
                : ie(e, "IE" + Lt) || ie(e, "WPDesktop")
                ? E0
                : ie(e, y0)
                ? w0
                : ie(e, sp) || ie(e, "Edg/")
                ? b0
                : ie(e, "FBIOS")
                ? "Facebook " + Lt
                : ie(e, "UCWEB") || ie(e, "UCBrowser")
                ? "UC Browser"
                : ie(e, "CriOS")
                ? S0
                : ie(e, "CrMo")
                ? ur
                : ie(e, cn) && ie(e, Es)
                ? P0
                : ie(e, ur)
                ? ur
                : ie(e, "FxiOS")
                ? k0
                : ie(e.toLowerCase(), Od.toLowerCase())
                ? Od
                : tR(e, t)
                ? ie(e, Lt)
                    ? O0
                    : Es
                : ie(e, xi)
                ? xi
                : ie(e, "MSIE") || ie(e, "Trident/")
                ? ip
                : ie(e, "Gecko")
                ? xi
                : ""
        );
    },
    nR =
        (k((Ve = {}), E0, [new RegExp("rv:" + et)]),
        k(Ve, b0, [new RegExp(sp + "?\\/" + et)]),
        k(Ve, ur, [new RegExp("(" + ur + "|CrMo)\\/" + et)]),
        k(Ve, S0, [new RegExp("CriOS\\/" + et)]),
        k(Ve, "UC Browser", [new RegExp("(UCBrowser|UCWEB)\\/" + et)]),
        k(Ve, Es, [qu]),
        k(Ve, O0, [qu]),
        k(Ve, op, [new RegExp("(Opera|OPR)\\/" + et)]),
        k(Ve, xi, [new RegExp(xi + "\\/" + et)]),
        k(Ve, k0, [new RegExp("FxiOS\\/" + et)]),
        k(Ve, Od, [new RegExp("Konqueror[:/]?" + et, "i")]),
        k(Ve, Ki, [new RegExp(Ki + " " + et), qu]),
        k(Ve, P0, [new RegExp("android\\s" + et, "i")]),
        k(Ve, w0, [new RegExp(y0 + "\\/" + et)]),
        k(Ve, ip, [new RegExp("(rv:|MSIE )" + et)]),
        k(Ve, "Mozilla", [new RegExp("rv:" + et)]),
        Ve),
    Av = [
        [
            new RegExp(Di + "; " + Di + " (.*?)[);]", "i"),
            function (e) {
                return [Di, (e && e[1]) || ""];
            },
        ],
        [new RegExp(bs, "i"), [bs, ""]],
        [new RegExp(ks, "i"), [ks, ""]],
        [ap, [Ki, ""]],
        [
            new RegExp(Co, "i"),
            function (e, t) {
                if (/Phone/.test(t) || /WPDesktop/.test(t)) return [kd, ""];
                if (new RegExp(Lt).test(t) && !/IEMobile\b/.test(t)) return [Co + " " + Lt, ""];
                var n = /Windows NT ([0-9.]+)/i.exec(t);
                if (n && n[1]) {
                    var r = n[1],
                        i = eR[r] || "";
                    return /arm/i.test(t) && (i = "RT"), [Co, i];
                }
                return [Co, ""];
            },
        ],
        [
            /((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,
            function (e) {
                if (e && e[3]) {
                    var t = [e[3], e[4], e[5] || "0"];
                    return [yl, t.join(".")];
                }
                return [yl, ""];
            },
        ],
        [
            /(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,
            function (e) {
                var t = "";
                return e && e.length >= 3 && (t = q(e[2]) ? e[3] : e[2]), ["watchOS", t];
            },
        ],
        [
            new RegExp("(" + cn + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + cn + ")", "i"),
            function (e) {
                if (e && e[2]) {
                    var t = [e[2], e[3], e[4] || "0"];
                    return [cn, t.join(".")];
                }
                return [cn, ""];
            },
        ],
        [
            /Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,
            function (e) {
                var t = ["Mac OS X", ""];
                if (e && e[1]) {
                    var n = [e[1], e[2], e[3] || "0"];
                    t[1] = n.join(".");
                }
                return t;
            },
        ],
        [/Mac/i, ["Mac OS X", ""]],
        [/CrOS/, [QC, ""]],
        [/Linux|debian/i, ["Linux", ""]],
    ],
    Cv = function (e) {
        return ZC.test(e)
            ? bs
            : JC.test(e)
            ? ks
            : XC.test(e)
            ? Di
            : new RegExp(Pd, "i").test(e)
            ? Pd
            : new RegExp("(" + kd + "|WPDesktop)", "i").test(e)
            ? kd
            : /iPad/.test(e)
            ? v0
            : /iPod/.test(e)
            ? "iPod Touch"
            : /iPhone/.test(e)
            ? "iPhone"
            : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e)
            ? _0
            : ap.test(e)
            ? Ki
            : /(kobo)\s(ereader|touch)/i.test(e)
            ? "Kobo"
            : new RegExp(Pv, "i").test(e)
            ? Pv
            : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e) || /(kf[a-z]+)( bui|\)).+silk\//i.test(e)
            ? "Kindle Fire"
            : /(Android|ZTE)/i.test(e)
            ? !new RegExp(Lt).test(e) || /(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e)
                ? (/pixel[\daxl ]{1,6}/i.test(e) && !/pixel c/i.test(e)) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e) || (/lmy47v/i.test(e) && !/QTAQZ3/i.test(e))
                    ? cn
                    : h0
                : cn
            : new RegExp("(pda|" + Lt + ")", "i").test(e)
            ? KC
            : new RegExp(Ss, "i").test(e) && !new RegExp(Ss + " pc", "i").test(e)
            ? C0
            : "";
    },
    fa = "https?://(.*)",
    rR = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "gad_source", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "mc_cid", "igshid", "ttclid", "rdt_cid"],
    xe = {
        campaignParams: function (e) {
            return H ? this._campaignParamsFromUrl(H.URL, e) : {};
        },
        _campaignParamsFromUrl: function (e, t) {
            var n = rR.concat(t || []),
                r = {};
            return (
                he(n, function (i) {
                    var o = kv(e, i);
                    o && (r[i] = o);
                }),
                r
            );
        },
        _searchEngine: function (e) {
            return e ? (e.search(fa + "google.([^/?]*)") === 0 ? "google" : e.search(fa + "bing.com") === 0 ? "bing" : e.search(fa + "yahoo.com") === 0 ? "yahoo" : e.search(fa + "duckduckgo.com") === 0 ? "duckduckgo" : null) : null;
        },
        _searchInfoFromReferrer: function (e) {
            var t = xe._searchEngine(e),
                n = t != "yahoo" ? "q" : "p",
                r = {};
            if (!mr(t)) {
                r.$search_engine = t;
                var i = H ? kv(H.referrer, n) : "";
                i.length && (r.ph_keyword = i);
            }
            return r;
        },
        searchInfo: function () {
            var e = H == null ? void 0 : H.referrer;
            return e ? this._searchInfoFromReferrer(e) : {};
        },
        browser: Ov,
        browserVersion: function (e, t) {
            var n = Ov(e, t),
                r = nR[n];
            if (q(r)) return null;
            for (var i = 0; i < r.length; i++) {
                var o = r[i],
                    s = e.match(o);
                if (s) return parseFloat(s[s.length - 2]);
            }
            return null;
        },
        browserLanguage: function () {
            return navigator.language || navigator.userLanguage;
        },
        os: function (e) {
            for (var t = 0; t < Av.length; t++) {
                var n = nt(Av[t], 2),
                    r = n[0],
                    i = n[1],
                    o = r.exec(e),
                    s = o && (Dt(i) ? i(o, e) : i);
                if (s) return s;
            }
            return ["", ""];
        },
        device: Cv,
        deviceType: function (e) {
            var t = Cv(e);
            return t === v0 || t === h0 || t === "Kobo" || t === "Kindle Fire" || t === C0 ? Ss : t === bs || t === Di || t === ks || t === Pd ? "Console" : t === _0 ? "Wearable" : t ? Lt : "Desktop";
        },
        referrer: function () {
            return (H == null ? void 0 : H.referrer) || "$direct";
        },
        referringDomain: function () {
            var e;
            return (H != null && H.referrer && ((e = zo(H.referrer)) === null || e === void 0 ? void 0 : e.host)) || "$direct";
        },
        referrerInfo: function () {
            return { $referrer: this.referrer(), $referring_domain: this.referringDomain() };
        },
        initialPersonInfo: function () {
            return { r: this.referrer(), u: at == null ? void 0 : at.href };
        },
        initialPersonPropsFromInfo: function (e) {
            var t,
                n = e.r,
                r = e.u,
                i = { $initial_referrer: n, $initial_referring_domain: n == null ? void 0 : n == "$direct" ? "$direct" : (t = zo(n)) === null || t === void 0 ? void 0 : t.host };
            if (r) {
                i.$initial_current_url = r;
                var o = zo(r);
                (i.$initial_host = o == null ? void 0 : o.host),
                    (i.$initial_pathname = o == null ? void 0 : o.pathname),
                    he(this._campaignParamsFromUrl(r), function (s, a) {
                        i["$initial_" + hd(a)] = s;
                    });
            }
            return (
                n &&
                    he(this._searchInfoFromReferrer(n), function (s, a) {
                        i["$initial_" + hd(a)] = s;
                    }),
                i
            );
        },
        properties: function () {
            if (!$e) return {};
            var e = nt(xe.os($e), 2),
                t = e[0],
                n = e[1];
            return rt(pd({ $os: t, $os_version: n, $browser: xe.browser($e, navigator.vendor), $device: xe.device($e), $device_type: xe.deviceType($e) }), {
                $current_url: at == null ? void 0 : at.href,
                $host: at == null ? void 0 : at.host,
                $pathname: at == null ? void 0 : at.pathname,
                $raw_user_agent: $e.length > 1e3 ? $e.substring(0, 997) + "..." : $e,
                $browser_version: xe.browserVersion($e, navigator.vendor),
                $browser_language: xe.browserLanguage(),
                $screen_height: w == null ? void 0 : w.screen.height,
                $screen_width: w == null ? void 0 : w.screen.width,
                $viewport_height: w == null ? void 0 : w.innerHeight,
                $viewport_width: w == null ? void 0 : w.innerWidth,
                $lib: "web",
                $lib_version: Gn.LIB_VERSION,
                $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
                $time: c0() / 1e3,
            });
        },
        people_properties: function () {
            if (!$e) return {};
            var e = nt(xe.os($e), 2),
                t = e[0],
                n = e[1];
            return rt(pd({ $os: t, $os_version: n, $browser: xe.browser($e, navigator.vendor) }), { $browser_version: xe.browserVersion($e, navigator.vendor) });
        },
    },
    iR = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"],
    Qu = (function () {
        function e(t) {
            ae(this, e),
                (this.config = t),
                (this.props = {}),
                (this.campaign_params_saved = !1),
                (this.name = (function (n) {
                    var r = "";
                    return n.token && (r = n.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), n.persistence_name ? "ph_" + n.persistence_name : "ph_" + r + "_posthog";
                })(t)),
                (this.storage = this.buildStorage(t)),
                this.load(),
                t.debug && I.info("Persistence loaded", t.persistence, j({}, this.props)),
                this.update_config(t, t),
                this.save();
        }
        return (
            le(e, [
                {
                    key: "buildStorage",
                    value: function (t) {
                        iR.indexOf(t.persistence.toLowerCase()) === -1 && (I.critical("Unknown persistence type " + t.persistence + "; falling back to localStorage+cookie"), (t.persistence = "localStorage+cookie"));
                        var n = t.persistence.toLowerCase();
                        return n === "localstorage" && Ne.is_supported()
                            ? Ne
                            : n === "localstorage+cookie" && ca.is_supported()
                            ? ca
                            : n === "sessionstorage" && He.is_supported()
                            ? He
                            : n === "memory"
                            ? WC
                            : n === "cookie"
                            ? Nn
                            : ca.is_supported()
                            ? ca
                            : Nn;
                    },
                },
                {
                    key: "properties",
                    value: function () {
                        var t = {};
                        return (
                            he(this.props, function (n, r) {
                                if (r === Ei && Me(n)) for (var i = Object.keys(n), o = 0; o < i.length; o++) t["$feature/".concat(i[o])] = n[i[o]];
                                else
                                    (a = r),
                                        (l = !1),
                                        (mr((s = LC))
                                            ? l
                                            : tv && s.indexOf === tv
                                            ? s.indexOf(a) != -1
                                            : (he(s, function (u) {
                                                  if (l || (l = u === a)) return hl;
                                              }),
                                              l)) || (t[r] = n);
                                var s, a, l;
                            }),
                            t
                        );
                    },
                },
                {
                    key: "load",
                    value: function () {
                        if (!this.disabled) {
                            var t = this.storage.parse(this.name);
                            t && (this.props = rt({}, t));
                        }
                    },
                },
                {
                    key: "save",
                    value: function () {
                        this.disabled || this.storage.set(this.name, this.props, this.expire_days, this.cross_subdomain, this.secure, this.config.debug);
                    },
                },
                {
                    key: "remove",
                    value: function () {
                        this.storage.remove(this.name, !1), this.storage.remove(this.name, !0);
                    },
                },
                {
                    key: "clear",
                    value: function () {
                        this.remove(), (this.props = {});
                    },
                },
                {
                    key: "register_once",
                    value: function (t, n, r) {
                        var i = this;
                        if (Me(t)) {
                            q(n) && (n = "None"), (this.expire_days = q(r) ? this.default_expiry : r);
                            var o = !1;
                            if (
                                (he(t, function (s, a) {
                                    (i.props.hasOwnProperty(a) && i.props[a] !== n) || ((i.props[a] = s), (o = !0));
                                }),
                                o)
                            )
                                return this.save(), !0;
                        }
                        return !1;
                    },
                },
                {
                    key: "register",
                    value: function (t, n) {
                        var r = this;
                        if (Me(t)) {
                            this.expire_days = q(n) ? this.default_expiry : n;
                            var i = !1;
                            if (
                                (he(t, function (o, s) {
                                    t.hasOwnProperty(s) && r.props[s] !== o && ((r.props[s] = o), (i = !0));
                                }),
                                i)
                            )
                                return this.save(), !0;
                        }
                        return !1;
                    },
                },
                {
                    key: "unregister",
                    value: function (t) {
                        t in this.props && (delete this.props[t], this.save());
                    },
                },
                {
                    key: "update_campaign_params",
                    value: function () {
                        this.campaign_params_saved || (this.register(xe.campaignParams(this.config.custom_campaign_params)), (this.campaign_params_saved = !0));
                    },
                },
                {
                    key: "update_search_keyword",
                    value: function () {
                        this.register(xe.searchInfo());
                    },
                },
                {
                    key: "update_referrer_info",
                    value: function () {
                        this.register_once(xe.referrerInfo(), void 0);
                    },
                },
                {
                    key: "set_initial_person_info",
                    value: function () {
                        this.props[Sd] || this.props[Ed] || this.register_once(k({}, yv, xe.initialPersonInfo()), void 0);
                    },
                },
                {
                    key: "get_referrer_info",
                    value: function () {
                        return pd({ $referrer: this.props.$referrer, $referring_domain: this.props.$referring_domain });
                    },
                },
                {
                    key: "get_initial_props",
                    value: function () {
                        var t = this,
                            n = {};
                        he([Ed, Sd], function (o) {
                            var s = t.props[o];
                            s &&
                                he(s, function (a, l) {
                                    n["$initial_" + hd(l)] = a;
                                });
                        });
                        var r = this.props[yv];
                        if (r) {
                            var i = xe.initialPersonPropsFromInfo(r);
                            rt(n, i);
                        }
                        return n;
                    },
                },
                {
                    key: "safe_merge",
                    value: function (t) {
                        return (
                            he(this.props, function (n, r) {
                                r in t || (t[r] = n);
                            }),
                            t
                        );
                    },
                },
                {
                    key: "update_config",
                    value: function (t, n) {
                        if (
                            ((this.default_expiry = this.expire_days = t.cookie_expiration),
                            this.set_disabled(t.disable_persistence),
                            this.set_cross_subdomain(t.cross_subdomain_cookie),
                            this.set_secure(t.secure_cookie),
                            t.persistence !== n.persistence)
                        ) {
                            var r = this.buildStorage(t),
                                i = this.props;
                            this.clear(), (this.storage = r), (this.props = i), this.save();
                        }
                    },
                },
                {
                    key: "set_disabled",
                    value: function (t) {
                        (this.disabled = t), this.disabled ? this.remove() : this.save();
                    },
                },
                {
                    key: "set_cross_subdomain",
                    value: function (t) {
                        t !== this.cross_subdomain && ((this.cross_subdomain = t), this.remove(), this.save());
                    },
                },
                {
                    key: "get_cross_subdomain",
                    value: function () {
                        return !!this.cross_subdomain;
                    },
                },
                {
                    key: "set_secure",
                    value: function (t) {
                        t !== this.secure && ((this.secure = t), this.remove(), this.save());
                    },
                },
                {
                    key: "set_event_timer",
                    value: function (t, n) {
                        var r = this.props[Ao] || {};
                        (r[t] = n), (this.props[Ao] = r), this.save();
                    },
                },
                {
                    key: "remove_event_timer",
                    value: function (t) {
                        var n = (this.props[Ao] || {})[t];
                        return q(n) || (delete this.props[Ao][t], this.save()), n;
                    },
                },
                {
                    key: "get_property",
                    value: function (t) {
                        return this.props[t];
                    },
                },
                {
                    key: "set_property",
                    value: function (t, n) {
                        (this.props[t] = n), this.save();
                    },
                },
            ]),
            e
        );
    })();
function Ad(e) {
    return JSON.stringify(
        e,
        ((t = []),
        function (n, r) {
            if (Me(r)) {
                for (; t.length > 0 && t.at(-1) !== this; ) t.pop();
                return t.includes(r) ? "[Circular]" : (t.push(r), r);
            }
            return r;
        })
    ).length;
    var t;
}
function Cd(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66060288e-1;
    if (e.size >= t && e.data.length > 1) {
        var n = Math.floor(e.data.length / 2),
            r = e.data.slice(0, n),
            i = e.data.slice(n);
        return [Cd({ size: Ad(r), data: r, sessionId: e.sessionId, windowId: e.windowId }), Cd({ size: Ad(i), data: i, sessionId: e.sessionId, windowId: e.windowId })].flatMap(function (o) {
            return o;
        });
    }
    return [e];
}
var Ro = (function (e) {
        return (
            (e[(e.DomContentLoaded = 0)] = "DomContentLoaded"),
            (e[(e.Load = 1)] = "Load"),
            (e[(e.FullSnapshot = 2)] = "FullSnapshot"),
            (e[(e.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
            (e[(e.Meta = 4)] = "Meta"),
            (e[(e.Custom = 5)] = "Custom"),
            (e[(e.Plugin = 6)] = "Plugin"),
            e
        );
    })(Ro || {}),
    wn = (function (e) {
        return (
            (e[(e.Mutation = 0)] = "Mutation"),
            (e[(e.MouseMove = 1)] = "MouseMove"),
            (e[(e.MouseInteraction = 2)] = "MouseInteraction"),
            (e[(e.Scroll = 3)] = "Scroll"),
            (e[(e.ViewportResize = 4)] = "ViewportResize"),
            (e[(e.Input = 5)] = "Input"),
            (e[(e.TouchMove = 6)] = "TouchMove"),
            (e[(e.MediaInteraction = 7)] = "MediaInteraction"),
            (e[(e.StyleSheetRule = 8)] = "StyleSheetRule"),
            (e[(e.CanvasMutation = 9)] = "CanvasMutation"),
            (e[(e.Font = 10)] = "Font"),
            (e[(e.Log = 11)] = "Log"),
            (e[(e.Drag = 12)] = "Drag"),
            (e[(e.StyleDeclaration = 13)] = "StyleDeclaration"),
            (e[(e.Selection = 14)] = "Selection"),
            (e[(e.AdoptedStyleSheet = 15)] = "AdoptedStyleSheet"),
            (e[(e.CustomElement = 16)] = "CustomElement"),
            e
        );
    })(wn || {});
function lp(e) {
    return e ? ru(e).split(/\s+/) : [];
}
function Rv(e) {
    var t = w == null ? void 0 : w.location.href;
    return !!(
        t &&
        e &&
        e.some(function (n) {
            return t.match(n);
        })
    );
}
function wl(e) {
    var t = "";
    switch (ws(e.className)) {
        case "string":
            t = e.className;
            break;
        case "object":
            t = (e.className && "baseVal" in e.className ? e.className.baseVal : null) || e.getAttribute("class") || "";
            break;
        default:
            t = "";
    }
    return lp(t);
}
function R0(e) {
    return Ae(e)
        ? null
        : ru(e)
              .split(/(\s+)/)
              .filter(function (t) {
                  return Ni(t);
              })
              .join("")
              .replace(/[\r\n]/g, " ")
              .replace(/[ ]+/g, " ")
              .substring(0, 255);
}
function Sl(e) {
    var t = "";
    return (
        Td(e) &&
            !N0(e) &&
            e.childNodes &&
            e.childNodes.length &&
            he(e.childNodes, function (n) {
                var r;
                I0(n) && n.textContent && (t += (r = R0(n.textContent)) !== null && r !== void 0 ? r : "");
            }),
        ru(t)
    );
}
function T0(e) {
    return q(e.target) ? e.srcElement || null : (t = e.target) !== null && t !== void 0 && t.shadowRoot ? e.composedPath()[0] || null : e.target || null;
    var t;
}
function iu(e) {
    return !!e && e.nodeType === 1;
}
function cr(e, t) {
    return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase();
}
function I0(e) {
    return !!e && e.nodeType === 3;
}
function x0(e) {
    return !!e && e.nodeType === 11;
}
var Rd = ["a", "button", "form", "input", "select", "textarea", "label"];
function D0(e) {
    var t = e.parentNode;
    return !(!t || !iu(t)) && t;
}
function oR(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0,
        r = arguments.length > 3 ? arguments[3] : void 0,
        i = arguments.length > 4 ? arguments[4] : void 0;
    if (!w || !e || cr(e, "html") || !iu(e) || (n != null && n.url_allowlist && !Rv(n.url_allowlist)) || (n != null && n.url_ignorelist && Rv(n.url_ignorelist))) return !1;
    if (n != null && n.dom_event_allowlist) {
        var o = n.dom_event_allowlist;
        if (
            o &&
            !o.some(function (p) {
                return t.type === p;
            })
        )
            return !1;
    }
    for (var s = !1, a = [e], l = !0, u = e; u.parentNode && !cr(u, "body"); )
        if (x0(u.parentNode)) a.push(u.parentNode.host), (u = u.parentNode.host);
        else {
            if (!(l = D0(u))) break;
            if (r || Rd.indexOf(l.tagName.toLowerCase()) > -1) s = !0;
            else {
                var c = w.getComputedStyle(l);
                c && c.getPropertyValue("cursor") === "pointer" && (s = !0);
            }
            a.push(l), (u = l);
        }
    if (
        !(function (p, m) {
            var v = m == null ? void 0 : m.element_allowlist;
            if (q(v)) return !0;
            var O,
                g = Bt(p);
            try {
                var h = function () {
                    var y = O.value;
                    if (
                        v.some(function (P) {
                            return y.tagName.toLowerCase() === P;
                        })
                    )
                        return { v: !0 };
                };
                for (g.s(); !(O = g.n()).done; ) {
                    var _ = h();
                    if (ws(_) === "object") return _.v;
                }
            } catch (y) {
                g.e(y);
            } finally {
                g.f();
            }
            return !1;
        })(a, n) ||
        !(function (p, m) {
            var v = m == null ? void 0 : m.css_selector_allowlist;
            if (q(v)) return !0;
            var O,
                g = Bt(p);
            try {
                var h = function () {
                    var y = O.value;
                    if (
                        v.some(function (P) {
                            return y.matches(P);
                        })
                    )
                        return { v: !0 };
                };
                for (g.s(); !(O = g.n()).done; ) {
                    var _ = h();
                    if (ws(_) === "object") return _.v;
                }
            } catch (y) {
                g.e(y);
            } finally {
                g.f();
            }
            return !1;
        })(a, n)
    )
        return !1;
    var d = w.getComputedStyle(e);
    if (d && d.getPropertyValue("cursor") === "pointer" && t.type === "click") return !0;
    var f = e.tagName.toLowerCase();
    switch (f) {
        case "html":
            return !1;
        case "form":
            return (i || ["submit"]).indexOf(t.type) >= 0;
        case "input":
        case "select":
        case "textarea":
            return (i || ["change", "click"]).indexOf(t.type) >= 0;
        default:
            return s ? (i || ["click"]).indexOf(t.type) >= 0 : (i || ["click"]).indexOf(t.type) >= 0 && (Rd.indexOf(f) > -1 || e.getAttribute("contenteditable") === "true");
    }
}
function Td(e) {
    for (var t = e; t.parentNode && !cr(t, "body"); t = t.parentNode) {
        var n = wl(t);
        if (ie(n, "ph-sensitive") || ie(n, "ph-no-capture")) return !1;
    }
    if (ie(wl(e), "ph-include")) return !0;
    var r = e.type || "";
    if (Je(r))
        switch (r.toLowerCase()) {
            case "hidden":
            case "password":
                return !1;
        }
    var i = e.name || e.id || "";
    return !(Je(i) && /^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(i.replace(/[^a-zA-Z0-9]/g, "")));
}
function N0(e) {
    return !!((cr(e, "input") && !["button", "checkbox", "submit", "reset"].includes(e.type)) || cr(e, "select") || cr(e, "textarea") || e.getAttribute("contenteditable") === "true");
}
var L0 = "(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",
    sR = new RegExp("^(?:".concat(L0, ")$")),
    aR = new RegExp(L0),
    M0 = "\\d{3}-?\\d{2}-?\\d{4}",
    lR = new RegExp("^(".concat(M0, ")$")),
    uR = new RegExp("(".concat(M0, ")"));
function Ni(e) {
    var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
    return !(Ae(e) || (Je(e) && ((e = ru(e)), (t ? sR : aR).test((e || "").replace(/[- ]/g, "")) || (t ? lR : uR).test(e))));
}
function Tv(e) {
    var t = Sl(e);
    return Ni((t = "".concat(t, " ").concat(F0(e)).trim())) ? t : "";
}
function F0(e) {
    var t = "";
    return (
        e &&
            e.childNodes &&
            e.childNodes.length &&
            he(e.childNodes, function (n) {
                var r;
                if (n && ((r = n.tagName) === null || r === void 0 ? void 0 : r.toLowerCase()) === "span")
                    try {
                        var i = Sl(n);
                        (t = "".concat(t, " ").concat(i).trim()), n.childNodes && n.childNodes.length && (t = "".concat(t, " ").concat(F0(n)).trim());
                    } catch (o) {
                        I.error(o);
                    }
            }),
        t
    );
}
function cR(e) {
    return (function (t) {
        var n = t.map(function (r) {
            var i,
                o,
                s = "";
            if ((r.tag_name && (s += r.tag_name), r.attr_class)) {
                r.attr_class.sort();
                var a,
                    l = Bt(r.attr_class);
                try {
                    for (l.s(); !(a = l.n()).done; ) {
                        var u = a.value;
                        s += ".".concat(u.replace(/"/g, ""));
                    }
                } catch (f) {
                    l.e(f);
                } finally {
                    l.f();
                }
            }
            var c = j(
                    j(
                        j(j({}, r.text ? { text: r.text } : {}), {}, { "nth-child": (i = r.nth_child) !== null && i !== void 0 ? i : 0, "nth-of-type": (o = r.nth_of_type) !== null && o !== void 0 ? o : 0 }, r.href ? { href: r.href } : {}),
                        r.attr_id ? { attr_id: r.attr_id } : {}
                    ),
                    r.attributes
                ),
                d = {};
            return (
                Ia(c)
                    .sort(function (f, p) {
                        var m = nt(f, 1)[0],
                            v = nt(p, 1)[0];
                        return m.localeCompare(v);
                    })
                    .forEach(function (f) {
                        var p = nt(f, 2),
                            m = p[0],
                            v = p[1];
                        return (d[Iv(m.toString())] = Iv(v.toString()));
                    }),
                (s += ":"),
                (s += Ia(c)
                    .map(function (f) {
                        var p = nt(f, 2),
                            m = p[0],
                            v = p[1];
                        return "".concat(m, '="').concat(v, '"');
                    })
                    .join(""))
            );
        });
        return n.join(";");
    })(
        (function (t) {
            return t.map(function (n) {
                var r,
                    i,
                    o = {
                        text: (r = n.$el_text) === null || r === void 0 ? void 0 : r.slice(0, 400),
                        tag_name: n.tag_name,
                        href: (i = n.attr__href) === null || i === void 0 ? void 0 : i.slice(0, 2048),
                        attr_class: dR(n),
                        attr_id: n.attr__id,
                        nth_child: n.nth_child,
                        nth_of_type: n.nth_of_type,
                        attributes: {},
                    };
                return (
                    Ia(n)
                        .filter(function (s) {
                            return nt(s, 1)[0].indexOf("attr__") === 0;
                        })
                        .forEach(function (s) {
                            var a = nt(s, 2),
                                l = a[0],
                                u = a[1];
                            return (o.attributes[l] = u);
                        }),
                    o
                );
            });
        })(e)
    );
}
function Iv(e) {
    return e.replace(/"|\\"/g, '\\"');
}
function dR(e) {
    var t = e.attr__class;
    return t ? (Le(t) ? t : lp(t)) : void 0;
}
var Id = "[SessionRecording]",
    xd = "redacted",
    pa = {
        initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"],
        maskRequestFn: function (e) {
            return e;
        },
        recordHeaders: !1,
        recordBody: !1,
        recordInitialRequests: !1,
        recordPerformance: !1,
        performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"],
        payloadSizeLimitBytes: 1e6,
        payloadHostDenyList: [".lr-ingest.io", ".ingest.sentry.io"],
    },
    fR = ["authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token"],
    pR = ["password", "secret", "passwd", "api_key", "apikey", "auth", "credentials", "mysql_pwd", "privatekey", "private_key", "token"],
    hR = ["/s/", "/e/", "/i/"];
function xv(e, t, n, r) {
    if (Ae(e)) return e;
    var i =
        (t == null ? void 0 : t["content-length"]) ||
        (function (o) {
            return new Blob([o]).size;
        })(e);
    return Je(i) && (i = parseInt(i)), i > n ? Id + " ".concat(r, " body too large to record (").concat(i, " bytes)") : e;
}
function Dv(e, t) {
    if (Ae(e)) return e;
    var n = e;
    return (
        Ni(n, !1) || (n = Id + " " + t + " body " + xd),
        he(pR, function (r) {
            var i, o;
            (i = n) !== null && i !== void 0 && i.length && ((o = n) === null || o === void 0 ? void 0 : o.indexOf(r)) !== -1 && (n = Id + " " + t + " body " + xd + " as might contain: " + r);
        }),
        n
    );
}
var bn,
    vR = function (e, t) {
        var n,
            r,
            i,
            o = { payloadSizeLimitBytes: pa.payloadSizeLimitBytes, performanceEntryTypeToObserve: Dn(pa.performanceEntryTypeToObserve), payloadHostDenyList: [].concat(Dn(t.payloadHostDenyList || []), Dn(pa.payloadHostDenyList)) },
            s = e.session_recording.recordHeaders !== !1 && t.recordHeaders,
            a = e.session_recording.recordBody !== !1 && t.recordBody,
            l = e.capture_performance !== !1 && t.recordPerformance,
            u =
                ((n = o),
                (i = Math.min(1e6, (r = n.payloadSizeLimitBytes) !== null && r !== void 0 ? r : 1e6)),
                function (f) {
                    return f != null && f.requestBody && (f.requestBody = xv(f.requestBody, f.requestHeaders, i, "Request")), f != null && f.responseBody && (f.responseBody = xv(f.responseBody, f.responseHeaders, i, "Response")), f;
                }),
            c = function (f) {
                return u(
                    (function (v) {
                        var O = zo(v.name);
                        if (
                            !(
                                O &&
                                O.pathname &&
                                hR.some(function (g) {
                                    return O.pathname.indexOf(g) === 0;
                                })
                            )
                        )
                            return v;
                    })(
                        ((m = (p = f).requestHeaders),
                        Ae(m) ||
                            he(Object.keys(m ?? {}), function (v) {
                                fR.includes(v.toLowerCase()) && (m[v] = xd);
                            }),
                        p)
                    )
                );
                var p, m;
            },
            d = Dt(e.session_recording.maskNetworkRequestFn);
        return (
            d && Dt(e.session_recording.maskCapturedNetworkRequestFn) && I.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."),
            d &&
                (e.session_recording.maskCapturedNetworkRequestFn = function (f) {
                    var p = e.session_recording.maskNetworkRequestFn({ url: f.name });
                    return j(j({}, f), {}, { name: p == null ? void 0 : p.url });
                }),
            (o.maskRequestFn = Dt(e.session_recording.maskCapturedNetworkRequestFn)
                ? function (f) {
                      var p,
                          m,
                          v,
                          O = c(f);
                      return O && (p = (m = (v = e.session_recording).maskCapturedNetworkRequestFn) === null || m === void 0 ? void 0 : m.call(v, O)) !== null && p !== void 0 ? p : void 0;
                  }
                : function (f) {
                      return (function (p) {
                          if (!q(p)) return (p.requestBody = Dv(p.requestBody, "Request")), (p.responseBody = Dv(p.responseBody, "Response")), p;
                      })(c(f));
                  }),
            j(j(j({}, pa), o), {}, { recordHeaders: s, recordBody: a, recordPerformance: l, recordInitialRequests: l })
        );
    },
    gR = le(function e(t) {
        var n,
            r,
            i = this,
            o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        ae(this, e),
            k(this, "bucketSize", 100),
            k(this, "refillRate", 10),
            k(this, "mutationBuckets", {}),
            k(this, "loggedTracker", {}),
            k(this, "refillBuckets", function () {
                Object.keys(i.mutationBuckets).forEach(function (s) {
                    (i.mutationBuckets[s] = i.mutationBuckets[s] + i.refillRate), i.mutationBuckets[s] >= i.bucketSize && delete i.mutationBuckets[s];
                });
            }),
            k(this, "getNodeOrRelevantParent", function (s) {
                var a = i.rrweb.mirror.getNode(s);
                if ((a == null ? void 0 : a.nodeName) !== "svg" && a instanceof Element) {
                    var l = a.closest("svg");
                    if (l) return [i.rrweb.mirror.getId(l), l];
                }
                return [s, a];
            }),
            k(this, "numberOfChanges", function (s) {
                var a, l, u, c, d, f, p, m;
                return (
                    ((a = (l = s.removes) === null || l === void 0 ? void 0 : l.length) !== null && a !== void 0 ? a : 0) +
                    ((u = (c = s.attributes) === null || c === void 0 ? void 0 : c.length) !== null && u !== void 0 ? u : 0) +
                    ((d = (f = s.texts) === null || f === void 0 ? void 0 : f.length) !== null && d !== void 0 ? d : 0) +
                    ((p = (m = s.adds) === null || m === void 0 ? void 0 : m.length) !== null && p !== void 0 ? p : 0)
                );
            }),
            k(this, "throttleMutations", function (s) {
                if (s.type !== 3 || s.data.source !== 0) return s;
                var a = s.data,
                    l = i.numberOfChanges(a);
                a.attributes &&
                    (a.attributes = a.attributes.filter(function (c) {
                        var d,
                            f,
                            p,
                            m = nt(i.getNodeOrRelevantParent(c.id), 2),
                            v = m[0],
                            O = m[1];
                        return i.mutationBuckets[v] === 0
                            ? !1
                            : ((i.mutationBuckets[v] = (d = i.mutationBuckets[v]) !== null && d !== void 0 ? d : i.bucketSize),
                              (i.mutationBuckets[v] = Math.max(i.mutationBuckets[v] - 1, 0)),
                              i.mutationBuckets[v] === 0 && (i.loggedTracker[v] || ((i.loggedTracker[v] = !0), (f = (p = i.options).onBlockedNode) === null || f === void 0 || f.call(p, v, O))),
                              c);
                    }));
                var u = i.numberOfChanges(a);
                return u !== 0 || l === u ? s : void 0;
            }),
            (this.rrweb = t),
            (this.options = o),
            (this.refillRate = (n = this.options.refillRate) !== null && n !== void 0 ? n : this.refillRate),
            (this.bucketSize = (r = this.options.bucketSize) !== null && r !== void 0 ? r : this.bucketSize),
            setInterval(function () {
                i.refillBuckets();
            }, 1e3);
    }),
    $0 = 3e5,
    Nv = $0,
    _R = [wn.MouseMove, wn.MouseInteraction, wn.Scroll, wn.ViewportResize, wn.Input, wn.TouchMove, wn.MediaInteraction, wn.Drag],
    Lv = function (e) {
        return { rrwebMethod: e, enqueuedAt: Date.now(), attempt: 1 };
    },
    Pt = "[SessionRecording]",
    mR = (function () {
        function e(t) {
            var n = this;
            if (
                (ae(this, e),
                k(this, "queuedRRWebEvents", []),
                k(this, "isIdle", !1),
                k(this, "_linkedFlagSeen", !1),
                k(this, "_lastActivityTimestamp", Date.now()),
                k(this, "_linkedFlag", null),
                k(this, "_removePageViewCaptureHook", void 0),
                k(this, "_onSessionIdListener", void 0),
                k(this, "_persistDecideOnSessionListener", void 0),
                k(this, "_samplingSessionListener", void 0),
                k(this, "_forceAllowLocalhostNetworkCapture", !1),
                k(this, "_onBeforeUnload", function () {
                    n._flushBuffer();
                }),
                k(this, "_onOffline", function () {
                    n._tryAddCustomEvent("browser offline", {});
                }),
                k(this, "_onOnline", function () {
                    n._tryAddCustomEvent("browser online", {});
                }),
                k(this, "_onVisibilityChange", function () {
                    if (H != null && H.visibilityState) {
                        var s = "window " + H.visibilityState;
                        n._tryAddCustomEvent(s, {});
                    }
                }),
                (this.instance = t),
                (this._captureStarted = !1),
                (this._endpoint = "/s/"),
                (this.stopRrweb = void 0),
                (this.receivedDecide = !1),
                !this.instance.sessionManager)
            )
                throw (I.error(Pt + " started without valid sessionManager"), new Error(Pt + " started without valid sessionManager. This is a bug."));
            var r = this.sessionManager.checkAndGetSessionAndWindowId(),
                i = r.sessionId,
                o = r.windowId;
            (this.sessionId = i), (this.windowId = o), (this.buffer = this.clearBuffer());
        }
        return (
            le(e, [
                {
                    key: "rrwebRecord",
                    get: function () {
                        var t, n;
                        return ne == null || (t = ne.__PosthogExtensions__) === null || t === void 0 || (n = t.rrweb) === null || n === void 0 ? void 0 : n.record;
                    },
                },
                {
                    key: "started",
                    get: function () {
                        return this._captureStarted;
                    },
                },
                {
                    key: "sessionManager",
                    get: function () {
                        if (!this.instance.sessionManager) throw new Error(Pt + " must be started with a valid sessionManager.");
                        return this.instance.sessionManager;
                    },
                },
                {
                    key: "fullSnapshotIntervalMillis",
                    get: function () {
                        var t;
                        return ((t = this.instance.config.session_recording) === null || t === void 0 ? void 0 : t.full_snapshot_interval_millis) || $0;
                    },
                },
                {
                    key: "isSampled",
                    get: function () {
                        var t = this.instance.get_property(Vo);
                        return Tr(t) ? t : null;
                    },
                },
                {
                    key: "sessionDuration",
                    get: function () {
                        var t,
                            n,
                            r = (t = this.buffer) === null || t === void 0 ? void 0 : t.data[((n = this.buffer) === null || n === void 0 ? void 0 : n.data.length) - 1],
                            i = this.sessionManager.checkAndGetSessionAndWindowId(!0).sessionStartTimestamp;
                        return r ? r.timestamp - i : null;
                    },
                },
                {
                    key: "isRecordingEnabled",
                    get: function () {
                        var t = !!this.instance.get_property(gd),
                            n = !this.instance.config.disable_session_recording;
                        return w && t && n;
                    },
                },
                {
                    key: "isConsoleLogCaptureEnabled",
                    get: function () {
                        var t = !!this.instance.get_property(hv),
                            n = this.instance.config.enable_recording_console_log;
                        return n ?? t;
                    },
                },
                {
                    key: "canvasRecording",
                    get: function () {
                        var t = this.instance.get_property(gv);
                        return t && t.fps && t.quality ? { enabled: t.enabled, fps: t.fps, quality: t.quality } : void 0;
                    },
                },
                {
                    key: "networkPayloadCapture",
                    get: function () {
                        var t,
                            n,
                            r = this.instance.get_property(vv),
                            i = {
                                recordHeaders: (t = this.instance.config.session_recording) === null || t === void 0 ? void 0 : t.recordHeaders,
                                recordBody: (n = this.instance.config.session_recording) === null || n === void 0 ? void 0 : n.recordBody,
                            },
                            o = (i == null ? void 0 : i.recordHeaders) || (r == null ? void 0 : r.recordHeaders),
                            s = (i == null ? void 0 : i.recordBody) || (r == null ? void 0 : r.recordBody),
                            a = Me(this.instance.config.capture_performance) ? this.instance.config.capture_performance.network_timing : this.instance.config.capture_performance,
                            l = !!(Tr(a) ? a : r != null && r.capturePerformance);
                        return o || s || l ? { recordHeaders: o, recordBody: s, recordPerformance: l } : void 0;
                    },
                },
                {
                    key: "sampleRate",
                    get: function () {
                        var t = this.instance.get_property(_v);
                        return _t(t) ? t : null;
                    },
                },
                {
                    key: "minimumDuration",
                    get: function () {
                        var t = this.instance.get_property(mv);
                        return _t(t) ? t : null;
                    },
                },
                {
                    key: "status",
                    get: function () {
                        return this.receivedDecide
                            ? this.isRecordingEnabled
                                ? Ae(this._linkedFlag) || this._linkedFlagSeen
                                    ? Tr(this.isSampled)
                                        ? this.isSampled
                                            ? "sampled"
                                            : "disabled"
                                        : "active"
                                    : "buffering"
                                : "disabled"
                            : "buffering";
                    },
                },
                {
                    key: "startIfEnabledOrStop",
                    value: function () {
                        var t = this;
                        this.isRecordingEnabled
                            ? (this._startCapture(),
                              w == null || w.addEventListener("beforeunload", this._onBeforeUnload),
                              w == null || w.addEventListener("offline", this._onOffline),
                              w == null || w.addEventListener("online", this._onOnline),
                              w == null || w.addEventListener("visibilitychange", this._onVisibilityChange),
                              this._setupSampling(),
                              Ae(this._removePageViewCaptureHook) &&
                                  (this._removePageViewCaptureHook = this.instance._addCaptureHook(function (n) {
                                      try {
                                          if (n === "$pageview") {
                                              var r = w ? t._maskUrl(w.location.href) : "";
                                              if (!r) return;
                                              t._tryAddCustomEvent("$pageview", { href: r });
                                          }
                                      } catch (i) {
                                          I.error("Could not add $pageview to rrweb session", i);
                                      }
                                  })),
                              this._onSessionIdListener ||
                                  (this._onSessionIdListener = this.sessionManager.onSessionId(function (n, r, i) {
                                      i && t._tryAddCustomEvent("$session_id_change", { sessionId: n, windowId: r, changeReason: i });
                                  })),
                              I.info(Pt + " started"))
                            : this.stopRecording();
                    },
                },
                {
                    key: "stopRecording",
                    value: function () {
                        var t, n, r;
                        this._captureStarted &&
                            this.stopRrweb &&
                            (this.stopRrweb(),
                            (this.stopRrweb = void 0),
                            (this._captureStarted = !1),
                            w == null || w.removeEventListener("beforeunload", this._onBeforeUnload),
                            w == null || w.removeEventListener("offline", this._onOffline),
                            w == null || w.removeEventListener("online", this._onOnline),
                            w == null || w.removeEventListener("visibilitychange", this._onVisibilityChange),
                            this.clearBuffer(),
                            clearInterval(this._fullSnapshotTimer),
                            (t = this._removePageViewCaptureHook) === null || t === void 0 || t.call(this),
                            (this._removePageViewCaptureHook = void 0),
                            (n = this._onSessionIdListener) === null || n === void 0 || n.call(this),
                            (this._onSessionIdListener = void 0),
                            (r = this._samplingSessionListener) === null || r === void 0 || r.call(this),
                            (this._samplingSessionListener = void 0),
                            I.info(Pt + " stopped"));
                    },
                },
                {
                    key: "makeSamplingDecision",
                    value: function (t) {
                        var n,
                            r = this.sessionId !== t,
                            i = this.sampleRate;
                        if (_t(i)) {
                            var o,
                                s = this.isSampled,
                                a = r || !Tr(s);
                            a ? (o = Math.random() < i) : (o = s),
                                !o && a && I.warn(Pt + " Sample rate (".concat(i, ") has determined that this sessionId (").concat(t, ") will not be sent to the server.")),
                                this._tryAddCustomEvent("samplingDecisionMade", { sampleRate: i }),
                                (n = this.instance.persistence) === null || n === void 0 || n.register(k({}, Vo, o));
                        } else {
                            var l;
                            (l = this.instance.persistence) === null || l === void 0 || l.register(k({}, Vo, null));
                        }
                    },
                },
                {
                    key: "afterDecideResponse",
                    value: function (t) {
                        var n,
                            r,
                            i,
                            o = this;
                        if (
                            (this._persistDecideResponse(t),
                            (this._linkedFlag = ((n = t.sessionRecording) === null || n === void 0 ? void 0 : n.linkedFlag) || null),
                            (r = t.sessionRecording) !== null && r !== void 0 && r.endpoint && (this._endpoint = (i = t.sessionRecording) === null || i === void 0 ? void 0 : i.endpoint),
                            this._setupSampling(),
                            !Ae(this._linkedFlag) && !this._linkedFlagSeen)
                        ) {
                            var s = Je(this._linkedFlag) ? this._linkedFlag : this._linkedFlag.flag,
                                a = Je(this._linkedFlag) ? null : this._linkedFlag.variant;
                            this.instance.onFeatureFlags(function (l, u) {
                                var c = Me(u) && s in u,
                                    d = a ? u[s] === a : c;
                                if (d) {
                                    var f = { linkedFlag: s, linkedVariant: a },
                                        p = "linked flag matched";
                                    I.info(Pt + " " + p, f), o._tryAddCustomEvent(p, f);
                                }
                                o._linkedFlagSeen = d;
                            });
                        }
                        (this.receivedDecide = !0), this.startIfEnabledOrStop();
                    },
                },
                {
                    key: "_setupSampling",
                    value: function () {
                        var t = this;
                        _t(this.sampleRate) &&
                            Ae(this._samplingSessionListener) &&
                            (this._samplingSessionListener = this.sessionManager.onSessionId(function (n) {
                                t.makeSamplingDecision(n);
                            }));
                    },
                },
                {
                    key: "_persistDecideResponse",
                    value: function (t) {
                        if (this.instance.persistence) {
                            var n,
                                r = this.instance.persistence,
                                i = function () {
                                    var o,
                                        s,
                                        a,
                                        l,
                                        u,
                                        c,
                                        d,
                                        f,
                                        p = (o = t.sessionRecording) === null || o === void 0 ? void 0 : o.sampleRate,
                                        m = Ae(p) ? null : parseFloat(p),
                                        v = (s = t.sessionRecording) === null || s === void 0 ? void 0 : s.minimumDurationMilliseconds;
                                    r.register(
                                        (k((f = {}), gd, !!t.sessionRecording),
                                        k(f, hv, (a = t.sessionRecording) === null || a === void 0 ? void 0 : a.consoleLogRecordingEnabled),
                                        k(f, vv, j({ capturePerformance: t.capturePerformance }, (l = t.sessionRecording) === null || l === void 0 ? void 0 : l.networkPayloadCapture)),
                                        k(f, gv, {
                                            enabled: (u = t.sessionRecording) === null || u === void 0 ? void 0 : u.recordCanvas,
                                            fps: (c = t.sessionRecording) === null || c === void 0 ? void 0 : c.canvasFps,
                                            quality: (d = t.sessionRecording) === null || d === void 0 ? void 0 : d.canvasQuality,
                                        }),
                                        k(f, _v, m),
                                        k(f, mv, q(v) ? null : v),
                                        f)
                                    );
                                };
                            i(), (n = this._persistDecideOnSessionListener) === null || n === void 0 || n.call(this), (this._persistDecideOnSessionListener = this.sessionManager.onSessionId(i));
                        }
                    },
                },
                {
                    key: "log",
                    value: function (t) {
                        var n,
                            r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "log";
                        (n = this.instance.sessionRecording) === null || n === void 0 || n.onRRwebEmit({ type: 6, data: { plugin: "rrweb/console@1", payload: { level: r, trace: [], payload: [JSON.stringify(t)] } }, timestamp: c0() });
                    },
                },
                {
                    key: "_startCapture",
                    value: function () {
                        var t,
                            n,
                            r = this;
                        q(Object.assign) ||
                            this._captureStarted ||
                            this.instance.config.disable_session_recording ||
                            this.instance.consent.isOptedOut() ||
                            ((this._captureStarted = !0),
                            this.sessionManager.checkAndGetSessionAndWindowId(),
                            this.rrwebRecord
                                ? this._onScriptLoaded()
                                : (t = ne.__PosthogExtensions__) === null ||
                                  t === void 0 ||
                                  (n = t.loadExternalDependency) === null ||
                                  n === void 0 ||
                                  n.call(t, this.instance, "recorder", function (i) {
                                      if (i) return I.error(Pt + " could not load recorder", i);
                                      r._onScriptLoaded();
                                  }));
                    },
                },
                {
                    key: "isInteractiveEvent",
                    value: function (t) {
                        var n;
                        return t.type === 3 && _R.indexOf((n = t.data) === null || n === void 0 ? void 0 : n.source) !== -1;
                    },
                },
                {
                    key: "_updateWindowAndSessionIds",
                    value: function (t) {
                        var n = this.isInteractiveEvent(t);
                        n ||
                            this.isIdle ||
                            (t.timestamp - this._lastActivityTimestamp > Nv &&
                                ((this.isIdle = !0),
                                clearInterval(this._fullSnapshotTimer),
                                this._tryAddCustomEvent("sessionIdle", { eventTimestamp: t.timestamp, lastActivityTimestamp: this._lastActivityTimestamp, threshold: Nv, bufferLength: this.buffer.data.length, bufferSize: this.buffer.size }),
                                this._flushBuffer()));
                        var r = !1;
                        if ((n && ((this._lastActivityTimestamp = t.timestamp), this.isIdle && ((this.isIdle = !1), this._tryAddCustomEvent("sessionNoLongerIdle", { reason: "user activity", type: t.type }), (r = !0))), !this.isIdle)) {
                            var i = this.sessionManager.checkAndGetSessionAndWindowId(!n, t.timestamp),
                                o = i.windowId,
                                s = i.sessionId,
                                a = this.sessionId !== s,
                                l = this.windowId !== o;
                            (this.windowId = o), (this.sessionId = s), a || l ? (this.stopRecording(), this.startIfEnabledOrStop()) : r && this._scheduleFullSnapshot();
                        }
                    },
                },
                {
                    key: "_tryRRWebMethod",
                    value: function (t) {
                        try {
                            return t.rrwebMethod(), !0;
                        } catch (n) {
                            return (
                                this.queuedRRWebEvents.length < 10
                                    ? this.queuedRRWebEvents.push({ enqueuedAt: t.enqueuedAt || Date.now(), attempt: t.attempt++, rrwebMethod: t.rrwebMethod })
                                    : I.warn(Pt + " could not emit queued rrweb event.", n, t),
                                !1
                            );
                        }
                    },
                },
                {
                    key: "_tryAddCustomEvent",
                    value: function (t, n) {
                        var r = this;
                        return this._tryRRWebMethod(
                            Lv(function () {
                                return r.rrwebRecord.addCustomEvent(t, n);
                            })
                        );
                    },
                },
                {
                    key: "_tryTakeFullSnapshot",
                    value: function () {
                        var t = this;
                        return this._tryRRWebMethod(
                            Lv(function () {
                                return t.rrwebRecord.takeFullSnapshot();
                            })
                        );
                    },
                },
                {
                    key: "_onScriptLoaded",
                    value: function () {
                        for (
                            var t,
                                n = this,
                                r = {
                                    blockClass: "ph-no-capture",
                                    blockSelector: void 0,
                                    ignoreClass: "ph-ignore-input",
                                    maskTextClass: "ph-mask",
                                    maskTextSelector: void 0,
                                    maskTextFn: void 0,
                                    maskAllInputs: !0,
                                    maskInputOptions: { password: !0 },
                                    maskInputFn: void 0,
                                    slimDOMOptions: {},
                                    collectFonts: !1,
                                    inlineStylesheet: !0,
                                    recordCrossOriginIframes: !1,
                                },
                                i = this.instance.config.session_recording,
                                o = 0,
                                s = Object.entries(i || {});
                            o < s.length;
                            o++
                        ) {
                            var a = nt(s[o], 2),
                                l = a[0],
                                u = a[1];
                            l in r && (l === "maskInputOptions" ? (r.maskInputOptions = j({ password: !0 }, u)) : (r[l] = u));
                        }
                        if (
                            (this.canvasRecording &&
                                this.canvasRecording.enabled &&
                                ((r.recordCanvas = !0), (r.sampling = { canvas: this.canvasRecording.fps }), (r.dataURLOptions = { type: "image/webp", quality: this.canvasRecording.quality })),
                            this.rrwebRecord)
                        ) {
                            this.mutationRateLimiter =
                                (t = this.mutationRateLimiter) !== null && t !== void 0
                                    ? t
                                    : new gR(this.rrwebRecord, {
                                          onBlockedNode: function (d, f) {
                                              var p = "Too many mutations on node '".concat(d, "'. Rate limiting. This could be due to SVG animations or something similar");
                                              I.info(p, { node: f }), n.log(Pt + " " + p, "warn");
                                          },
                                      });
                            var c = this._gatherRRWebPlugins();
                            (this.stopRrweb = this.rrwebRecord(
                                j(
                                    {
                                        emit: function (d) {
                                            n.onRRwebEmit(d);
                                        },
                                        plugins: c,
                                    },
                                    r
                                )
                            )),
                                (this._lastActivityTimestamp = Date.now()),
                                (this.isIdle = !1),
                                this._tryAddCustomEvent("$session_options", {
                                    sessionRecordingOptions: r,
                                    activePlugins: c.map(function (d) {
                                        return d == null ? void 0 : d.name;
                                    }),
                                }),
                                this._tryAddCustomEvent("$posthog_config", { config: this.instance.config });
                        } else I.error(Pt + "onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.");
                    },
                },
                {
                    key: "_scheduleFullSnapshot",
                    value: function () {
                        var t = this;
                        if ((this._fullSnapshotTimer && clearInterval(this._fullSnapshotTimer), !this.isIdle)) {
                            var n = this.fullSnapshotIntervalMillis;
                            n &&
                                (this._fullSnapshotTimer = setInterval(function () {
                                    t._tryTakeFullSnapshot();
                                }, n));
                        }
                    },
                },
                {
                    key: "_gatherRRWebPlugins",
                    value: function () {
                        var t,
                            n,
                            r,
                            i,
                            o = [],
                            s = (t = ne.__PosthogExtensions__) === null || t === void 0 || (n = t.rrwebPlugins) === null || n === void 0 ? void 0 : n.getRecordConsolePlugin;
                        s && this.isConsoleLogCaptureEnabled && o.push(s());
                        var a = (r = ne.__PosthogExtensions__) === null || r === void 0 || (i = r.rrwebPlugins) === null || i === void 0 ? void 0 : i.getRecordNetworkPlugin;
                        return (
                            this.networkPayloadCapture &&
                                Dt(a) &&
                                (!GC.includes(location.hostname) || this._forceAllowLocalhostNetworkCapture
                                    ? o.push(a(vR(this.instance.config, this.networkPayloadCapture)))
                                    : I.info(Pt + " NetworkCapture not started because we are on localhost.")),
                            o
                        );
                    },
                },
                {
                    key: "onRRwebEmit",
                    value: function (t) {
                        if ((this._processQueuedEvents(), t && Me(t))) {
                            if (t.type === Ro.Meta) {
                                var n = this._maskUrl(t.data.href);
                                if (((this._lastHref = n), !n)) return;
                                t.data.href = n;
                            } else this._pageViewFallBack();
                            t.type === Ro.FullSnapshot && this._scheduleFullSnapshot();
                            var r = this.mutationRateLimiter ? this.mutationRateLimiter.throttleMutations(t) : t;
                            if (r) {
                                var i = (function (c) {
                                        var d = c;
                                        if (d && Me(d) && d.type === 6 && Me(d.data) && d.data.plugin === "rrweb/console@1") {
                                            d.data.payload.payload.length > 10 && ((d.data.payload.payload = d.data.payload.payload.slice(0, 10)), d.data.payload.payload.push("...[truncated]"));
                                            for (var f = [], p = 0; p < d.data.payload.payload.length; p++)
                                                d.data.payload.payload[p] && d.data.payload.payload[p].length > 2e3 ? f.push(d.data.payload.payload[p].slice(0, 2e3) + "...[truncated]") : f.push(d.data.payload.payload[p]);
                                            return (d.data.payload.payload = f), c;
                                        }
                                        return c;
                                    })(r),
                                    o = Ad(i);
                                if ((this._updateWindowAndSessionIds(i), !this.isIdle || i.type === Ro.Custom)) {
                                    if (i.type === Ro.Custom && i.data.tag === "sessionIdle") {
                                        var s = i.data.payload;
                                        if (s) {
                                            var a = s.lastActivityTimestamp,
                                                l = s.threshold;
                                            i.timestamp = a + l;
                                        }
                                    }
                                    var u = { $snapshot_bytes: o, $snapshot_data: i, $session_id: this.sessionId, $window_id: this.windowId };
                                    this.status !== "disabled" ? this._captureSnapshotBuffered(u) : this.clearBuffer();
                                }
                            }
                        }
                    },
                },
                {
                    key: "_pageViewFallBack",
                    value: function () {
                        if (!this.instance.config.capture_pageview && w) {
                            var t = this._maskUrl(w.location.href);
                            this._lastHref !== t && (this._tryAddCustomEvent("$url_changed", { href: t }), (this._lastHref = t));
                        }
                    },
                },
                {
                    key: "_processQueuedEvents",
                    value: function () {
                        var t = this;
                        if (this.queuedRRWebEvents.length) {
                            var n = Dn(this.queuedRRWebEvents);
                            (this.queuedRRWebEvents = []),
                                n.forEach(function (r) {
                                    Date.now() - r.enqueuedAt <= 2e3 && t._tryRRWebMethod(r);
                                });
                        }
                    },
                },
                {
                    key: "_maskUrl",
                    value: function (t) {
                        var n = this.instance.config.session_recording;
                        if (n.maskNetworkRequestFn) {
                            var r,
                                i = { url: t };
                            return (r = i = n.maskNetworkRequestFn(i)) === null || r === void 0 ? void 0 : r.url;
                        }
                        return t;
                    },
                },
                {
                    key: "clearBuffer",
                    value: function () {
                        return (this.buffer = { size: 0, data: [], sessionId: this.sessionId, windowId: this.windowId }), this.buffer;
                    },
                },
                {
                    key: "_flushBuffer",
                    value: function () {
                        var t = this;
                        this.flushBufferTimer && (clearTimeout(this.flushBufferTimer), (this.flushBufferTimer = void 0));
                        var n = this.minimumDuration,
                            r = this.sessionDuration,
                            i = _t(r) && r >= 0,
                            o = _t(n) && i && r < n;
                        return this.status === "buffering" || o
                            ? ((this.flushBufferTimer = setTimeout(function () {
                                  t._flushBuffer();
                              }, 2e3)),
                              this.buffer)
                            : (this.buffer.data.length > 0 &&
                                  Cd(this.buffer).forEach(function (s) {
                                      t._captureSnapshot({ $snapshot_bytes: s.size, $snapshot_data: s.data, $session_id: s.sessionId, $window_id: s.windowId });
                                  }),
                              this.clearBuffer());
                    },
                },
                {
                    key: "_captureSnapshotBuffered",
                    value: function (t) {
                        var n,
                            r = this,
                            i = 2 + (((n = this.buffer) === null || n === void 0 ? void 0 : n.data.length) || 0);
                        !this.isIdle && (this.buffer.size + t.$snapshot_bytes + i > 943718.4 || this.buffer.sessionId !== this.sessionId) && (this.buffer = this._flushBuffer()),
                            (this.buffer.size += t.$snapshot_bytes),
                            this.buffer.data.push(t.$snapshot_data),
                            this.flushBufferTimer ||
                                this.isIdle ||
                                (this.flushBufferTimer = setTimeout(function () {
                                    r._flushBuffer();
                                }, 2e3));
                    },
                },
                {
                    key: "_captureSnapshot",
                    value: function (t) {
                        this.instance.capture("$snapshot", t, { _url: this.instance.requestRouter.endpointFor("api", this._endpoint), _noTruncate: !0, _batchKey: "recordings", skip_client_rate_limiting: !0 });
                    },
                },
                {
                    key: "overrideLinkedFlag",
                    value: function () {
                        this._linkedFlagSeen = !0;
                    },
                },
            ]),
            e
        );
    })(),
    yR = (function () {
        function e(t) {
            ae(this, e), (this.instance = t), (this.instance.decideEndpointWasHit = this.instance._hasBootstrappedFeatureFlags());
        }
        return (
            le(e, [
                {
                    key: "call",
                    value: function () {
                        var t = this,
                            n = {
                                token: this.instance.config.token,
                                distinct_id: this.instance.get_distinct_id(),
                                groups: this.instance.getGroups(),
                                person_properties: this.instance.get_property(bi),
                                group_properties: this.instance.get_property(qn),
                                disable_flags: this.instance.config.advanced_disable_feature_flags || this.instance.config.advanced_disable_feature_flags_on_first_load || void 0,
                            };
                        this.instance._send_request({
                            method: "POST",
                            url: this.instance.requestRouter.endpointFor("api", "/decide/?v=3"),
                            data: n,
                            compression: this.instance.config.disable_compression ? void 0 : Yt.Base64,
                            timeout: this.instance.config.feature_flag_request_timeout_ms,
                            callback: function (r) {
                                return t.parseDecideResponse(r.json);
                            },
                        });
                    },
                },
                {
                    key: "parseDecideResponse",
                    value: function (t) {
                        var n = this;
                        this.instance.featureFlags.setReloadingPaused(!1), this.instance.featureFlags._startReloadTimer();
                        var r = !t;
                        if ((this.instance.config.advanced_disable_feature_flags_on_first_load || this.instance.config.advanced_disable_feature_flags || this.instance.featureFlags.receivedFeatureFlags(t ?? {}, r), r))
                            I.error("Failed to fetch feature flags from PostHog.");
                        else {
                            if (!H || !H.body)
                                return (
                                    I.info("document not ready yet, trying again in 500 milliseconds..."),
                                    void setTimeout(function () {
                                        n.parseDecideResponse(t);
                                    }, 500)
                                );
                            if ((this.instance._afterDecideResponse(t), t.siteApps))
                                if (this.instance.config.opt_in_site_apps) {
                                    var i,
                                        o = Bt(t.siteApps);
                                    try {
                                        var s = function () {
                                            var a,
                                                l,
                                                u = i.value,
                                                c = u.id,
                                                d = u.url;
                                            (ne["__$$ph_site_app_".concat(c)] = n.instance),
                                                (a = ne.__PosthogExtensions__) === null ||
                                                    a === void 0 ||
                                                    (l = a.loadSiteApp) === null ||
                                                    l === void 0 ||
                                                    l.call(a, n.instance, d, function (f) {
                                                        if (f) return I.error("Error while initializing PostHog app with config id ".concat(c), f);
                                                    });
                                        };
                                        for (o.s(); !(i = o.n()).done; ) s();
                                    } catch (a) {
                                        o.e(a);
                                    } finally {
                                        o.f();
                                    }
                                } else t.siteApps.length > 0 && I.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
                        }
                    },
                },
            ]),
            e
        );
    })(),
    wR = w != null && w.location ? ml(w.location.hash, "__posthog") || ml(location.hash, "state") : null,
    Mv = "_postHogToolbarParams";
(function (e) {
    (e[(e.UNINITIALIZED = 0)] = "UNINITIALIZED"), (e[(e.LOADING = 1)] = "LOADING"), (e[(e.LOADED = 2)] = "LOADED");
})(bn || (bn = {}));
var SR = (function () {
        function e(t) {
            ae(this, e), (this.instance = t);
        }
        return (
            le(e, [
                {
                    key: "setToolbarState",
                    value: function (t) {
                        ne.ph_toolbar_state = t;
                    },
                },
                {
                    key: "getToolbarState",
                    value: function () {
                        var t;
                        return (t = ne.ph_toolbar_state) !== null && t !== void 0 ? t : bn.UNINITIALIZED;
                    },
                },
                {
                    key: "maybeLoadToolbar",
                    value: function () {
                        var t,
                            n,
                            r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0,
                            i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0,
                            o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
                        if (!w || !H) return !1;
                        (r = (t = r) !== null && t !== void 0 ? t : w.location), (o = (n = o) !== null && n !== void 0 ? n : w.history);
                        try {
                            if (!i) {
                                try {
                                    w.localStorage.setItem("test", "test"), w.localStorage.removeItem("test");
                                } catch {
                                    return !1;
                                }
                                i = w == null ? void 0 : w.localStorage;
                            }
                            var s,
                                a = wR || ml(r.hash, "__posthog") || ml(r.hash, "state"),
                                l = a
                                    ? lv(function () {
                                          return JSON.parse(atob(decodeURIComponent(a)));
                                      }) ||
                                      lv(function () {
                                          return JSON.parse(decodeURIComponent(a));
                                      })
                                    : null;
                            return (
                                l && l.action === "ph_authorize"
                                    ? (((s = l).source = "url"), s && Object.keys(s).length > 0 && (l.desiredHash ? (r.hash = l.desiredHash) : o ? o.replaceState(o.state, "", r.pathname + r.search) : (r.hash = "")))
                                    : (((s = JSON.parse(i.getItem(Mv) || "{}")).source = "localstorage"), delete s.userIntent),
                                !(!s.token || this.instance.config.token !== s.token) && (this.loadToolbar(s), !0)
                            );
                        } catch {
                            return !1;
                        }
                    },
                },
                {
                    key: "_callLoadToolbar",
                    value: function (t) {
                        (ne.ph_load_toolbar || ne.ph_load_editor)(t, this.instance);
                    },
                },
                {
                    key: "loadToolbar",
                    value: function (t) {
                        var n = this,
                            r = !(H == null || !H.getElementById(bd));
                        if (!w || r) return !1;
                        var i = this.instance.requestRouter.region === "custom" && this.instance.config.advanced_disable_toolbar_metrics,
                            o = j(j({ token: this.instance.config.token }, t), {}, { apiURL: this.instance.requestRouter.endpointFor("ui") }, i ? { instrument: !1 } : {});
                        if ((w.localStorage.setItem(Mv, JSON.stringify(j(j({}, o), {}, { source: void 0 }))), this.getToolbarState() === bn.LOADED)) this._callLoadToolbar(o);
                        else if (this.getToolbarState() === bn.UNINITIALIZED) {
                            var s, a;
                            this.setToolbarState(bn.LOADING),
                                (s = ne.__PosthogExtensions__) === null ||
                                    s === void 0 ||
                                    (a = s.loadExternalDependency) === null ||
                                    a === void 0 ||
                                    a.call(s, this.instance, "toolbar", function (l) {
                                        if (l) return I.error("Failed to load toolbar", l), void n.setToolbarState(bn.UNINITIALIZED);
                                        n.setToolbarState(bn.LOADED), n._callLoadToolbar(o);
                                    }),
                                On(w, "turbolinks:load", function () {
                                    n.setToolbarState(bn.UNINITIALIZED), n.loadToolbar(o);
                                });
                        }
                        return !0;
                    },
                },
                {
                    key: "_loadEditor",
                    value: function (t) {
                        return this.loadToolbar(t);
                    },
                },
                {
                    key: "maybeLoadEditor",
                    value: function () {
                        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0,
                            n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0,
                            r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
                        return this.maybeLoadToolbar(t, n, r);
                    },
                },
            ]),
            e
        );
    })(),
    ER = (function () {
        function e(t) {
            ae(this, e), k(this, "isPaused", !0), k(this, "queue", []), k(this, "flushTimeoutMs", 3e3), (this.sendRequest = t);
        }
        return (
            le(e, [
                {
                    key: "enqueue",
                    value: function (t) {
                        this.queue.push(t), this.flushTimeout || this.setFlushTimeout();
                    },
                },
                {
                    key: "unload",
                    value: function () {
                        var t = this;
                        this.clearFlushTimeout();
                        var n = this.queue.length > 0 ? this.formatQueue() : {},
                            r = Object.values(n);
                        []
                            .concat(
                                Dn(
                                    r.filter(function (i) {
                                        return i.url.indexOf("/e") === 0;
                                    })
                                ),
                                Dn(
                                    r.filter(function (i) {
                                        return i.url.indexOf("/e") !== 0;
                                    })
                                )
                            )
                            .map(function (i) {
                                t.sendRequest(j(j({}, i), {}, { transport: "sendBeacon" }));
                            });
                    },
                },
                {
                    key: "enable",
                    value: function () {
                        (this.isPaused = !1), this.setFlushTimeout();
                    },
                },
                {
                    key: "setFlushTimeout",
                    value: function () {
                        var t = this;
                        this.isPaused ||
                            (this.flushTimeout = setTimeout(function () {
                                if ((t.clearFlushTimeout(), t.queue.length > 0)) {
                                    var n = t.formatQueue(),
                                        r = function (o) {
                                            var s = n[o],
                                                a = new Date().getTime();
                                            s.data &&
                                                Le(s.data) &&
                                                he(s.data, function (l) {
                                                    (l.offset = Math.abs(l.timestamp - a)), delete l.timestamp;
                                                }),
                                                t.sendRequest(s);
                                        };
                                    for (var i in n) r(i);
                                }
                            }, this.flushTimeoutMs));
                    },
                },
                {
                    key: "clearFlushTimeout",
                    value: function () {
                        clearTimeout(this.flushTimeout), (this.flushTimeout = void 0);
                    },
                },
                {
                    key: "formatQueue",
                    value: function () {
                        var t = {};
                        return (
                            he(this.queue, function (n) {
                                var r,
                                    i = n,
                                    o = (i ? i.batchKey : null) || i.url;
                                q(t[o]) && (t[o] = j(j({}, i), {}, { data: [] })), (r = t[o].data) === null || r === void 0 || r.push(i.data);
                            }),
                            (this.queue = []),
                            t
                        );
                    },
                },
            ]),
            e
        );
    })(),
    wt = Uint8Array,
    it = Uint16Array,
    Xi = Uint32Array,
    up = new wt([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
    cp = new wt([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
    Fv = new wt([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
    U0 = function (e, t) {
        for (var n = new it(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
        var i = new Xi(n[30]);
        for (r = 1; r < 30; ++r) for (var o = n[r]; o < n[r + 1]; ++o) i[o] = ((o - n[r]) << 5) | r;
        return [n, i];
    },
    B0 = U0(up, 2),
    bR = B0[0],
    Dd = B0[1];
(bR[28] = 258), (Dd[258] = 28);
for (var $v = U0(cp, 0)[1], Nd = new it(32768), ye = 0; ye < 32768; ++ye) {
    var wr = ((43690 & ye) >>> 1) | ((21845 & ye) << 1);
    (wr = ((61680 & (wr = ((52428 & wr) >>> 2) | ((13107 & wr) << 2))) >>> 4) | ((3855 & wr) << 4)), (Nd[ye] = (((65280 & wr) >>> 8) | ((255 & wr) << 8)) >>> 1);
}
var Ho = function (e, t, n) {
        for (var r = e.length, i = 0, o = new it(t); i < r; ++i) ++o[e[i] - 1];
        var s,
            a = new it(t);
        for (i = 0; i < t; ++i) a[i] = (a[i - 1] + o[i - 1]) << 1;
        if (n) {
            s = new it(1 << t);
            var l = 15 - t;
            for (i = 0; i < r; ++i) if (e[i]) for (var u = (i << 4) | e[i], c = t - e[i], d = a[e[i] - 1]++ << c, f = d | ((1 << c) - 1); d <= f; ++d) s[Nd[d] >>> l] = u;
        } else for (s = new it(r), i = 0; i < r; ++i) s[i] = Nd[a[e[i] - 1]++] >>> (15 - e[i]);
        return s;
    },
    qr = new wt(288);
for (ye = 0; ye < 144; ++ye) qr[ye] = 8;
for (ye = 144; ye < 256; ++ye) qr[ye] = 9;
for (ye = 256; ye < 280; ++ye) qr[ye] = 7;
for (ye = 280; ye < 288; ++ye) qr[ye] = 8;
var El = new wt(32);
for (ye = 0; ye < 32; ++ye) El[ye] = 5;
var kR = Ho(qr, 9, 0),
    PR = Ho(El, 5, 0),
    j0 = function (e) {
        return ((e / 8) >> 0) + (7 & e && 1);
    },
    V0 = function (e, t, n) {
        (t == null || t < 0) && (t = 0), (n == null || n > e.length) && (n = e.length);
        var r = new (e instanceof it ? it : e instanceof Xi ? Xi : wt)(n - t);
        return r.set(e.subarray(t, n)), r;
    },
    _n = function (e, t, n) {
        n <<= 7 & t;
        var r = (t / 8) >> 0;
        (e[r] |= n), (e[r + 1] |= n >>> 8);
    },
    mo = function (e, t, n) {
        n <<= 7 & t;
        var r = (t / 8) >> 0;
        (e[r] |= n), (e[r + 1] |= n >>> 8), (e[r + 2] |= n >>> 16);
    },
    Yu = function (e, t) {
        for (var n = [], r = 0; r < e.length; ++r) e[r] && n.push({ s: r, f: e[r] });
        var i = n.length,
            o = n.slice();
        if (!i) return [new wt(0), 0];
        if (i == 1) {
            var s = new wt(n[0].s + 1);
            return (s[n[0].s] = 1), [s, 1];
        }
        n.sort(function (P, N) {
            return P.f - N.f;
        }),
            n.push({ s: -1, f: 25001 });
        var a = n[0],
            l = n[1],
            u = 0,
            c = 1,
            d = 2;
        for (n[0] = { s: -1, f: a.f + l.f, l: a, r: l }; c != i - 1; ) (a = n[n[u].f < n[d].f ? u++ : d++]), (l = n[u != c && n[u].f < n[d].f ? u++ : d++]), (n[c++] = { s: -1, f: a.f + l.f, l: a, r: l });
        var f = o[0].s;
        for (r = 1; r < i; ++r) o[r].s > f && (f = o[r].s);
        var p = new it(f + 1),
            m = OR(n[c - 1], p, 0);
        if (m > t) {
            r = 0;
            var v = 0,
                O = m - t,
                g = 1 << O;
            for (
                o.sort(function (P, N) {
                    return p[N.s] - p[P.s] || P.f - N.f;
                });
                r < i;
                ++r
            ) {
                var h = o[r].s;
                if (!(p[h] > t)) break;
                (v += g - (1 << (m - p[h]))), (p[h] = t);
            }
            for (v >>>= O; v > 0; ) {
                var _ = o[r].s;
                p[_] < t ? (v -= 1 << (t - p[_]++ - 1)) : ++r;
            }
            for (; r >= 0 && v; --r) {
                var y = o[r].s;
                p[y] == t && (--p[y], ++v);
            }
            m = t;
        }
        return [new wt(p), m];
    },
    OR = function e(t, n, r) {
        return t.s == -1 ? Math.max(e(t.l, n, r + 1), e(t.r, n, r + 1)) : (n[t.s] = r);
    },
    Uv = function (e) {
        for (var t = e.length; t && !e[--t]; );
        for (
            var n = new it(++t),
                r = 0,
                i = e[0],
                o = 1,
                s = function (l) {
                    n[r++] = l;
                },
                a = 1;
            a <= t;
            ++a
        )
            if (e[a] == i && a != t) ++o;
            else {
                if (!i && o > 2) {
                    for (; o > 138; o -= 138) s(32754);
                    o > 2 && (s(o > 10 ? ((o - 11) << 5) | 28690 : ((o - 3) << 5) | 12305), (o = 0));
                } else if (o > 3) {
                    for (s(i), --o; o > 6; o -= 6) s(8304);
                    o > 2 && (s(((o - 3) << 5) | 8208), (o = 0));
                }
                for (; o--; ) s(i);
                (o = 1), (i = e[a]);
            }
        return [n.subarray(0, r), t];
    },
    yo = function (e, t) {
        for (var n = 0, r = 0; r < t.length; ++r) n += e[r] * t[r];
        return n;
    },
    xa = function (e, t, n) {
        var r = n.length,
            i = j0(t + 2);
        (e[i] = 255 & r), (e[i + 1] = r >>> 8), (e[i + 2] = 255 ^ e[i]), (e[i + 3] = 255 ^ e[i + 1]);
        for (var o = 0; o < r; ++o) e[i + o + 4] = n[o];
        return 8 * (i + 4 + r);
    },
    Bv = function (e, t, n, r, i, o, s, a, l, u, c) {
        _n(t, c++, n), ++i[256];
        for (var d = Yu(i, 15), f = d[0], p = d[1], m = Yu(o, 15), v = m[0], O = m[1], g = Uv(f), h = g[0], _ = g[1], y = Uv(v), P = y[0], N = y[1], $ = new it(19), F = 0; F < h.length; ++F) $[31 & h[F]]++;
        for (F = 0; F < P.length; ++F) $[31 & P[F]]++;
        for (var G = Yu($, 7), K = G[0], Ee = G[1], Ce = 19; Ce > 4 && !K[Fv[Ce - 1]]; --Ce);
        var je,
            D,
            E,
            C,
            R = (u + 5) << 3,
            b = yo(i, qr) + yo(o, El) + s,
            T = yo(i, f) + yo(o, v) + s + 14 + 3 * Ce + yo($, K) + (2 * $[16] + 3 * $[17] + 7 * $[18]);
        if (R <= b && R <= T) return xa(t, c, e.subarray(l, l + u));
        if ((_n(t, c, 1 + (T < b)), (c += 2), T < b)) {
            (je = Ho(f, p, 0)), (D = f), (E = Ho(v, O, 0)), (C = v);
            var B = Ho(K, Ee, 0);
            for (_n(t, c, _ - 257), _n(t, c + 5, N - 1), _n(t, c + 10, Ce - 4), c += 14, F = 0; F < Ce; ++F) _n(t, c + 3 * F, K[Fv[F]]);
            c += 3 * Ce;
            for (var J = [h, P], Q = 0; Q < 2; ++Q) {
                var re = J[Q];
                for (F = 0; F < re.length; ++F) {
                    var te = 31 & re[F];
                    _n(t, c, B[te]), (c += K[te]), te > 15 && (_n(t, c, (re[F] >>> 5) & 127), (c += re[F] >>> 12));
                }
            }
        } else (je = kR), (D = qr), (E = PR), (C = El);
        for (F = 0; F < a; ++F)
            if (r[F] > 255) {
                (te = (r[F] >>> 18) & 31), mo(t, c, je[te + 257]), (c += D[te + 257]), te > 7 && (_n(t, c, (r[F] >>> 23) & 31), (c += up[te]));
                var vt = 31 & r[F];
                mo(t, c, E[vt]), (c += C[vt]), vt > 3 && (mo(t, c, (r[F] >>> 5) & 8191), (c += cp[vt]));
            } else mo(t, c, je[r[F]]), (c += D[r[F]]);
        return mo(t, c, je[256]), c + D[256];
    },
    AR = new Xi([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
    CR = new wt(0),
    RR = (function () {
        for (var e = new Xi(256), t = 0; t < 256; ++t) {
            for (var n = t, r = 9; --r; ) n = (1 & n && 3988292384) ^ (n >>> 1);
            e[t] = n;
        }
        return e;
    })(),
    TR = function (e, t, n, r, i) {
        return (function (o, s, a, l, u, c) {
            var d = o.length,
                f = new wt(l + d + 5 * (1 + Math.floor(d / 7e3)) + u),
                p = f.subarray(l, f.length - u),
                m = 0;
            if (!s || d < 8)
                for (var v = 0; v <= d; v += 65535) {
                    var O = v + 65535;
                    O < d ? (m = xa(p, m, o.subarray(v, O))) : ((p[v] = c), (m = xa(p, m, o.subarray(v, d))));
                }
            else {
                for (
                    var g = AR[s - 1],
                        h = g >>> 13,
                        _ = 8191 & g,
                        y = (1 << a) - 1,
                        P = new it(32768),
                        N = new it(y + 1),
                        $ = Math.ceil(a / 3),
                        F = 2 * $,
                        G = function (su) {
                            return (o[su] ^ (o[su + 1] << $) ^ (o[su + 2] << F)) & y;
                        },
                        K = new Xi(25e3),
                        Ee = new it(288),
                        Ce = new it(32),
                        je = 0,
                        D = 0,
                        E = ((v = 0), 0),
                        C = 0,
                        R = 0;
                    v < d;
                    ++v
                ) {
                    var b = G(v),
                        T = 32767 & v,
                        B = N[b];
                    if (((P[T] = B), (N[b] = T), C <= v)) {
                        var J = d - v;
                        if ((je > 7e3 || E > 24576) && J > 423) {
                            (m = Bv(o, p, 0, K, Ee, Ce, D, E, R, v - R, m)), (E = je = D = 0), (R = v);
                            for (var Q = 0; Q < 286; ++Q) Ee[Q] = 0;
                            for (Q = 0; Q < 30; ++Q) Ce[Q] = 0;
                        }
                        var re = 2,
                            te = 0,
                            vt = _,
                            Ie = (T - B) & 32767;
                        if (J > 2 && b == G(v - Ie))
                            for (var jt = Math.min(h, J) - 1, Bs = Math.min(32767, v), tw = Math.min(258, J); Ie <= Bs && --vt && T != B; ) {
                                if (o[v + re] == o[v + re - Ie]) {
                                    for (var Vn = 0; Vn < tw && o[v + Vn] == o[v + Vn - Ie]; ++Vn);
                                    if (Vn > re) {
                                        if (((re = Vn), (te = Ie), Vn > jt)) break;
                                        var nw = Math.min(Ie, Vn - 2),
                                            fp = 0;
                                        for (Q = 0; Q < nw; ++Q) {
                                            var ou = (v - Ie + Q + 32768) & 32767,
                                                pp = (ou - P[ou] + 32768) & 32767;
                                            pp > fp && ((fp = pp), (B = ou));
                                        }
                                    }
                                }
                                Ie += ((T = B) - (B = P[T]) + 32768) & 32767;
                            }
                        if (te) {
                            K[E++] = 268435456 | (Dd[re] << 18) | $v[te];
                            var hp = 31 & Dd[re],
                                vp = 31 & $v[te];
                            (D += up[hp] + cp[vp]), ++Ee[257 + hp], ++Ce[vp], (C = v + re), ++je;
                        } else (K[E++] = o[v]), ++Ee[o[v]];
                    }
                }
                (m = Bv(o, p, c, K, Ee, Ce, D, E, R, v - R, m)), c || (m = xa(p, m, CR));
            }
            return V0(f, 0, l + j0(m) + u);
        })(e, t.level == null ? 6 : t.level, t.mem == null ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 12 + t.mem, n, r, !i);
    },
    Ku = function (e, t, n) {
        for (; n; ++t) (e[t] = n), (n >>>= 8);
    };
function IR(e, t) {
    t === void 0 && (t = {});
    var n = (function () {
            var a = 4294967295;
            return {
                p: function (l) {
                    for (var u = a, c = 0; c < l.length; ++c) u = RR[(255 & u) ^ l[c]] ^ (u >>> 8);
                    a = u;
                },
                d: function () {
                    return 4294967295 ^ a;
                },
            };
        })(),
        r = e.length;
    n.p(e);
    var i,
        o = TR(e, t, 10 + (((i = t).filename && i.filename.length + 1) || 0), 8),
        s = o.length;
    return (
        (function (a, l) {
            var u = l.filename;
            if (((a[0] = 31), (a[1] = 139), (a[2] = 8), (a[8] = l.level < 2 ? 4 : l.level == 9 ? 2 : 0), (a[9] = 3), l.mtime != 0 && Ku(a, 4, Math.floor(new Date(l.mtime || Date.now()) / 1e3)), u)) {
                a[3] = 8;
                for (var c = 0; c <= u.length; ++c) a[c + 10] = u.charCodeAt(c);
            }
        })(o, t),
        Ku(o, s - 8, n.d()),
        Ku(o, s - 4, r),
        o
    );
}
var xR = !!dd || !!cd,
    jv = "text/plain",
    bl = function (e, t) {
        var n = nt(e.split("?"), 2),
            r = n[0],
            i = n[1],
            o = j({}, t);
        i == null ||
            i.split("&").forEach(function (a) {
                var l = nt(a.split("="), 1)[0];
                delete o[l];
            });
        var s = qC(o);
        return (s = s ? (i ? i + "&" : "") + s : i), "".concat(r, "?").concat(s);
    },
    Xu = function (e) {
        var t = e.data,
            n = e.compression;
        if (t) {
            if (n === Yt.GZipJS) {
                var r = IR(
                        (function (l, u) {
                            var c = l.length;
                            if (!u && typeof TextEncoder < "u") return new TextEncoder().encode(l);
                            for (
                                var d = new wt(l.length + (l.length >>> 1)),
                                    f = 0,
                                    p = function (g) {
                                        d[f++] = g;
                                    },
                                    m = 0;
                                m < c;
                                ++m
                            ) {
                                if (f + 5 > d.length) {
                                    var v = new wt(f + 8 + ((c - m) << 1));
                                    v.set(d), (d = v);
                                }
                                var O = l.charCodeAt(m);
                                O < 128 || u
                                    ? p(O)
                                    : O < 2048
                                    ? (p(192 | (O >>> 6)), p(128 | (63 & O)))
                                    : O > 55295 && O < 57344
                                    ? (p(240 | ((O = (65536 + (1047552 & O)) | (1023 & l.charCodeAt(++m))) >>> 18)), p(128 | ((O >>> 12) & 63)), p(128 | ((O >>> 6) & 63)), p(128 | (63 & O)))
                                    : (p(224 | (O >>> 12)), p(128 | ((O >>> 6) & 63)), p(128 | (63 & O)));
                            }
                            return V0(d, 0, f);
                        })(JSON.stringify(t)),
                        { mtime: 0 }
                    ),
                    i = new Blob([r], { type: jv });
                return { contentType: jv, body: i, estimatedSize: i.size };
            }
            if (n === Yt.Base64) {
                var o = (function (l) {
                        var u,
                            c,
                            d,
                            f,
                            p,
                            m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                            v = 0,
                            O = 0,
                            g = "",
                            h = [];
                        if (!l) return l;
                        l = NC(l);
                        do
                            (u = ((p = (l.charCodeAt(v++) << 16) | (l.charCodeAt(v++) << 8) | l.charCodeAt(v++)) >> 18) & 63),
                                (c = (p >> 12) & 63),
                                (d = (p >> 6) & 63),
                                (f = 63 & p),
                                (h[O++] = m.charAt(u) + m.charAt(c) + m.charAt(d) + m.charAt(f));
                        while (v < l.length);
                        switch (((g = h.join("")), l.length % 3)) {
                            case 1:
                                g = g.slice(0, -2) + "==";
                                break;
                            case 2:
                                g = g.slice(0, -1) + "=";
                        }
                        return g;
                    })(JSON.stringify(t)),
                    s = (function (l) {
                        return "data=" + encodeURIComponent(typeof l == "string" ? l : JSON.stringify(l));
                    })(o);
                return { contentType: "application/x-www-form-urlencoded", body: s, estimatedSize: new Blob([s]).size };
            }
            var a = JSON.stringify(t);
            return { contentType: "application/json", body: a, estimatedSize: new Blob([a]).size };
        }
    },
    Wo = [];
dd &&
    Wo.push({
        transport: "XHR",
        method: function (e) {
            var t,
                n = new dd();
            n.open(e.method || "GET", e.url, !0);
            var r = (t = Xu(e)) !== null && t !== void 0 ? t : {},
                i = r.contentType,
                o = r.body;
            he(e.headers, function (s, a) {
                n.setRequestHeader(a, s);
            }),
                i && n.setRequestHeader("Content-Type", i),
                e.timeout && (n.timeout = e.timeout),
                (n.withCredentials = !0),
                (n.onreadystatechange = function () {
                    if (n.readyState === 4) {
                        var s,
                            a = { statusCode: n.status, text: n.responseText };
                        if (n.status === 200)
                            try {
                                a.json = JSON.parse(n.responseText);
                            } catch {}
                        (s = e.callback) === null || s === void 0 || s.call(e, a);
                    }
                }),
                n.send(o);
        },
    }),
    cd &&
        Wo.push({
            transport: "fetch",
            method: function (e) {
                var t,
                    n,
                    r = (t = Xu(e)) !== null && t !== void 0 ? t : {},
                    i = r.contentType,
                    o = r.body,
                    s = r.estimatedSize,
                    a = new Headers();
                he(e.headers, function (d, f) {
                    a.append(f, d);
                }),
                    i && a.append("Content-Type", i);
                var l = e.url,
                    u = null;
                if (nv) {
                    var c = new nv();
                    u = {
                        signal: c.signal,
                        timeout: setTimeout(function () {
                            return c.abort();
                        }, e.timeout),
                    };
                }
                cd(l, { method: (e == null ? void 0 : e.method) || "GET", headers: a, keepalive: e.method === "POST" && (s || 0) < 65536, body: o, signal: (n = u) === null || n === void 0 ? void 0 : n.signal })
                    .then(function (d) {
                        return d.text().then(function (f) {
                            var p,
                                m = { statusCode: d.status, text: f };
                            if (d.status === 200)
                                try {
                                    m.json = JSON.parse(f);
                                } catch (v) {
                                    I.error(v);
                                }
                            (p = e.callback) === null || p === void 0 || p.call(e, m);
                        });
                    })
                    .catch(function (d) {
                        var f;
                        I.error(d), (f = e.callback) === null || f === void 0 || f.call(e, { statusCode: 0, text: d });
                    })
                    .finally(function () {
                        return u ? clearTimeout(u.timeout) : null;
                    });
            },
        }),
    Kt != null &&
        Kt.sendBeacon &&
        Wo.push({
            transport: "sendBeacon",
            method: function (e) {
                var t = bl(e.url, { beacon: "1" });
                try {
                    var n,
                        r = (n = Xu(e)) !== null && n !== void 0 ? n : {},
                        i = r.contentType,
                        o = r.body,
                        s = typeof o == "string" ? new Blob([o], { type: i }) : o;
                    Kt.sendBeacon(t, s);
                } catch {}
            },
        });
var DR = ["retriesPerformedSoFar"],
    Ir,
    NR = (function () {
        function e(t) {
            var n = this;
            ae(this, e),
                k(this, "isPolling", !1),
                k(this, "pollIntervalMs", 3e3),
                k(this, "queue", []),
                (this.instance = t),
                (this.queue = []),
                (this.areWeOnline = !0),
                !q(w) &&
                    "onLine" in w.navigator &&
                    ((this.areWeOnline = w.navigator.onLine),
                    w.addEventListener("online", function () {
                        (n.areWeOnline = !0), n.flush();
                    }),
                    w.addEventListener("offline", function () {
                        n.areWeOnline = !1;
                    }));
        }
        return (
            le(e, [
                {
                    key: "retriableRequest",
                    value: function (t) {
                        var n = this,
                            r = t.retriesPerformedSoFar,
                            i = IC(t, DR);
                        _t(r) && r > 0 && (i.url = bl(i.url, { retry_count: r })),
                            this.instance._send_request(
                                j(
                                    j({}, i),
                                    {},
                                    {
                                        callback: function (o) {
                                            var s;
                                            o.statusCode !== 200 && (o.statusCode < 400 || o.statusCode >= 500) && (r ?? 0) < 10 ? n.enqueue(j({ retriesPerformedSoFar: r }, i)) : (s = i.callback) === null || s === void 0 || s.call(i, o);
                                        },
                                    }
                                )
                            );
                    },
                },
                {
                    key: "enqueue",
                    value: function (t) {
                        var n = t.retriesPerformedSoFar || 0;
                        t.retriesPerformedSoFar = n + 1;
                        var r = (function (s) {
                                var a = 3e3 * Math.pow(2, s),
                                    l = a / 2,
                                    u = Math.min(18e5, a),
                                    c = (Math.random() - 0.5) * (u - l);
                                return Math.ceil(u + c);
                            })(n),
                            i = Date.now() + r;
                        this.queue.push({ retryAt: i, requestOptions: t });
                        var o = "Enqueued failed request for retry in ".concat(r);
                        navigator.onLine || (o += " (Browser is offline)"), I.warn(o), this.isPolling || ((this.isPolling = !0), this.poll());
                    },
                },
                {
                    key: "poll",
                    value: function () {
                        var t = this;
                        this.poller && clearTimeout(this.poller),
                            (this.poller = setTimeout(function () {
                                t.areWeOnline && t.queue.length > 0 && t.flush(), t.poll();
                            }, this.pollIntervalMs));
                    },
                },
                {
                    key: "flush",
                    value: function () {
                        var t = Date.now(),
                            n = [],
                            r = this.queue.filter(function (a) {
                                return a.retryAt < t || (n.push(a), !1);
                            });
                        if (((this.queue = n), r.length > 0)) {
                            var i,
                                o = Bt(r);
                            try {
                                for (o.s(); !(i = o.n()).done; ) {
                                    var s = i.value.requestOptions;
                                    this.retriableRequest(s);
                                }
                            } catch (a) {
                                o.e(a);
                            } finally {
                                o.f();
                            }
                        }
                    },
                },
                {
                    key: "unload",
                    value: function () {
                        this.poller && (clearTimeout(this.poller), (this.poller = void 0));
                        var t,
                            n = Bt(this.queue);
                        try {
                            for (n.s(); !(t = n.n()).done; ) {
                                var r = t.value.requestOptions;
                                try {
                                    this.instance._send_request(j(j({}, r), {}, { transport: "sendBeacon" }));
                                } catch (i) {
                                    I.error(i);
                                }
                            }
                        } catch (i) {
                            n.e(i);
                        } finally {
                            n.f();
                        }
                        this.queue = [];
                    },
                },
            ]),
            e
        );
    })(),
    ha = 1800,
    LR = (function () {
        function e(t, n, r, i) {
            var o;
            ae(this, e),
                k(this, "_sessionIdChangedHandlers", []),
                (this.config = t),
                (this.persistence = n),
                (this._windowId = void 0),
                (this._sessionId = void 0),
                (this._sessionStartTimestamp = null),
                (this._sessionActivityTimestamp = null),
                (this._sessionIdGenerator = r || er),
                (this._windowIdGenerator = i || er);
            var s = t.persistence_name || t.token,
                a = t.session_idle_timeout_seconds || ha;
            if (
                (_t(a)
                    ? a > ha
                        ? I.warn("session_idle_timeout_seconds cannot be  greater than 30 minutes. Using 30 minutes instead.")
                        : a < 60 && I.warn("session_idle_timeout_seconds cannot be less than 60 seconds. Using 60 seconds instead.")
                    : (I.warn("session_idle_timeout_seconds must be a number. Defaulting to 30 minutes."), (a = ha)),
                (this._sessionTimeoutMs = 1e3 * Math.min(Math.max(a, 60), ha)),
                (this._window_id_storage_key = "ph_" + s + "_window_id"),
                (this._primary_window_exists_storage_key = "ph_" + s + "_primary_window_exists"),
                this._canUseSessionStorage())
            ) {
                var l = He.parse(this._window_id_storage_key),
                    u = He.parse(this._primary_window_exists_storage_key);
                l && !u ? (this._windowId = l) : He.remove(this._window_id_storage_key), He.set(this._primary_window_exists_storage_key, !0);
            }
            if ((o = this.config.bootstrap) !== null && o !== void 0 && o.sessionID)
                try {
                    var c = (function (d) {
                        var f = d.replace(/-/g, "");
                        if (f.length !== 32) throw new Error("Not a valid UUID");
                        if (f[12] !== "7") throw new Error("Not a UUIDv7");
                        return parseInt(f.substring(0, 12), 16);
                    })(this.config.bootstrap.sessionID);
                    this._setSessionId(this.config.bootstrap.sessionID, new Date().getTime(), c);
                } catch (d) {
                    I.error("Invalid sessionID in bootstrap", d);
                }
            this._listenToReloadWindow();
        }
        return (
            le(e, [
                {
                    key: "onSessionId",
                    value: function (t) {
                        var n = this;
                        return (
                            q(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []),
                            this._sessionIdChangedHandlers.push(t),
                            this._sessionId && t(this._sessionId, this._windowId),
                            function () {
                                n._sessionIdChangedHandlers = n._sessionIdChangedHandlers.filter(function (r) {
                                    return r !== t;
                                });
                            }
                        );
                    },
                },
                {
                    key: "_canUseSessionStorage",
                    value: function () {
                        return this.config.persistence !== "memory" && !this.persistence.disabled && He.is_supported();
                    },
                },
                {
                    key: "_setWindowId",
                    value: function (t) {
                        t !== this._windowId && ((this._windowId = t), this._canUseSessionStorage() && He.set(this._window_id_storage_key, t));
                    },
                },
                {
                    key: "_getWindowId",
                    value: function () {
                        return this._windowId ? this._windowId : this._canUseSessionStorage() ? He.parse(this._window_id_storage_key) : null;
                    },
                },
                {
                    key: "_setSessionId",
                    value: function (t, n, r) {
                        (t === this._sessionId && n === this._sessionActivityTimestamp && r === this._sessionStartTimestamp) ||
                            ((this._sessionStartTimestamp = r), (this._sessionActivityTimestamp = n), (this._sessionId = t), this.persistence.register(k({}, vl, [n, t, r])));
                    },
                },
                {
                    key: "_getSessionId",
                    value: function () {
                        if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp) return [this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp];
                        var t = this.persistence.props[vl];
                        return Le(t) && t.length === 2 && t.push(t[0]), t || [0, null, 0];
                    },
                },
                {
                    key: "resetSessionId",
                    value: function () {
                        this._setSessionId(null, null, null);
                    },
                },
                {
                    key: "_listenToReloadWindow",
                    value: function () {
                        var t = this;
                        w == null ||
                            w.addEventListener("beforeunload", function () {
                                t._canUseSessionStorage() && He.remove(t._primary_window_exists_storage_key);
                            });
                    },
                },
                {
                    key: "checkAndGetSessionAndWindowId",
                    value: function () {
                        var t = arguments.length > 0 && arguments[0] !== void 0 && arguments[0],
                            n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null) || new Date().getTime(),
                            r = nt(this._getSessionId(), 3),
                            i = r[0],
                            o = r[1],
                            s = r[2],
                            a = this._getWindowId(),
                            l = _t(s) && s > 0 && Math.abs(n - s) > 864e5,
                            u = !1,
                            c = !o,
                            d = !t && Math.abs(n - i) > this._sessionTimeoutMs;
                        c || d || l
                            ? ((o = this._sessionIdGenerator()),
                              (a = this._windowIdGenerator()),
                              I.info("[SessionId] new session ID generated", { sessionId: o, windowId: a, changeReason: { noSessionId: c, activityTimeout: d, sessionPastMaximumLength: l } }),
                              (s = n),
                              (u = !0))
                            : a || ((a = this._windowIdGenerator()), (u = !0));
                        var f = i === 0 || !t || l ? n : i,
                            p = s === 0 ? new Date().getTime() : s;
                        return (
                            this._setWindowId(a),
                            this._setSessionId(o, f, p),
                            u &&
                                this._sessionIdChangedHandlers.forEach(function (m) {
                                    return m(o, a, u ? { noSessionId: c, activityTimeout: d, sessionPastMaximumLength: l } : void 0);
                                }),
                            { sessionId: o, windowId: a, sessionStartTimestamp: p, changeReason: u ? { noSessionId: c, activityTimeout: d, sessionPastMaximumLength: l } : void 0 }
                        );
                    },
                },
            ]),
            e
        );
    })();
(function (e) {
    (e.US = "us"), (e.EU = "eu"), (e.CUSTOM = "custom");
})(Ir || (Ir = {}));
var Vv = "i.posthog.com",
    MR = (function () {
        function e(t) {
            ae(this, e), k(this, "_regionCache", {}), (this.instance = t);
        }
        return (
            le(e, [
                {
                    key: "apiHost",
                    get: function () {
                        var t = this.instance.config.api_host.trim().replace(/\/$/, "");
                        return t === "https://app.posthog.com" ? "https://us.i.posthog.com" : t;
                    },
                },
                {
                    key: "uiHost",
                    get: function () {
                        var t,
                            n = (t = this.instance.config.ui_host) === null || t === void 0 ? void 0 : t.replace(/\/$/, "");
                        return n || (n = this.apiHost.replace(".".concat(Vv), ".posthog.com")), n === "https://app.posthog.com" ? "https://us.posthog.com" : n;
                    },
                },
                {
                    key: "region",
                    get: function () {
                        return (
                            this._regionCache[this.apiHost] ||
                                (/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)
                                    ? (this._regionCache[this.apiHost] = Ir.US)
                                    : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)
                                    ? (this._regionCache[this.apiHost] = Ir.EU)
                                    : (this._regionCache[this.apiHost] = Ir.CUSTOM)),
                            this._regionCache[this.apiHost]
                        );
                    },
                },
                {
                    key: "endpointFor",
                    value: function (t) {
                        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
                        if ((n && (n = n[0] === "/" ? n : "/".concat(n)), t === "ui")) return this.uiHost + n;
                        if (this.region === Ir.CUSTOM) return this.apiHost + n;
                        var r = Vv + n;
                        switch (t) {
                            case "assets":
                                return "https://".concat(this.region, "-assets.").concat(r);
                            case "api":
                                return "https://".concat(this.region, ".").concat(r);
                        }
                    },
                },
            ]),
            e
        );
    })(),
    z0 = "posthog-js";
function H0(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        n = t.organization,
        r = t.projectId,
        i = t.prefix,
        o = t.severityAllowList,
        s = o === void 0 ? ["error"] : o;
    return function (a) {
        var l, u, c, d, f;
        if (!(s === "*" || s.includes(a.level)) || !e.__loaded) return a;
        a.tags || (a.tags = {});
        var p = e.requestRouter.endpointFor("ui", "/project/".concat(e.config.token, "/person/").concat(e.get_distinct_id()));
        (a.tags["PostHog Person URL"] = p), e.sessionRecordingStarted() && (a.tags["PostHog Recording URL"] = e.get_session_replay_url({ withTimestamp: !0 }));
        var m = ((l = a.exception) === null || l === void 0 ? void 0 : l.values) || [],
            v = {
                $exception_message: ((u = m[0]) === null || u === void 0 ? void 0 : u.value) || a.message,
                $exception_type: (c = m[0]) === null || c === void 0 ? void 0 : c.type,
                $exception_personURL: p,
                $exception_level: a.level,
                $sentry_event_id: a.event_id,
                $sentry_exception: a.exception,
                $sentry_exception_message: ((d = m[0]) === null || d === void 0 ? void 0 : d.value) || a.message,
                $sentry_exception_type: (f = m[0]) === null || f === void 0 ? void 0 : f.type,
                $sentry_tags: a.tags,
                $level: a.level,
            };
        return n && r && (v.$sentry_url = (i || "https://sentry.io/organizations/") + n + "/issues/?project=" + r + "&query=" + a.event_id), e.exceptions.sendExceptionEvent(v), a;
    };
}
var FR = le(function e(t, n, r, i, o) {
    ae(this, e),
        (this.name = z0),
        (this.setupOnce = function (s) {
            s(H0(t, { organization: n, projectId: r, prefix: i, severityAllowList: o }));
        });
});
function $R(e, t) {
    var n = e.config.segment;
    if (!n) return t();
    (function (r, i) {
        var o = r.config.segment;
        if (!o) return i();
        var s = function (l) {
                var u = function () {
                    return l.anonymousId() || er();
                };
                (r.config.get_device_id = u), l.id() && (r.register({ distinct_id: l.id(), $device_id: u() }), r.persistence.set_property(En, "identified")), i();
            },
            a = o.user();
        "then" in a && Dt(a.then)
            ? a.then(function (l) {
                  return s(l);
              })
            : s(a);
    })(e, function () {
        n.register(
            (function (r) {
                (Promise && Promise.resolve) || I.warn("This browser does not have Promise support, and can not use the segment integration");
                var i = function (o, s) {
                    var a;
                    if (!s) return o;
                    o.event.userId || o.event.anonymousId === r.get_distinct_id() || (I.info("Segment integration does not have a userId set, resetting PostHog"), r.reset()),
                        o.event.userId && o.event.userId !== r.get_distinct_id() && (I.info("Segment integration has a userId set, identifying with PostHog"), r.identify(o.event.userId));
                    var l = r._calculate_event_properties(s, (a = o.event.properties) !== null && a !== void 0 ? a : {}, new Date());
                    return (o.event.properties = Object.assign({}, l, o.event.properties)), o;
                };
                return {
                    name: "PostHog JS",
                    type: "enrichment",
                    version: "1.0.0",
                    isLoaded: function () {
                        return !0;
                    },
                    load: function () {
                        return Promise.resolve();
                    },
                    track: function (o) {
                        return i(o, o.event.event);
                    },
                    page: function (o) {
                        return i(o, "$pageview");
                    },
                    identify: function (o) {
                        return i(o, "$identify");
                    },
                    screen: function (o) {
                        return i(o, "$screen");
                    },
                };
            })(e)
        ).then(function () {
            t();
        });
    });
}
var zv,
    kl,
    Ht,
    UR = (function () {
        function e(t) {
            ae(this, e), (this._instance = t);
        }
        return (
            le(e, [
                {
                    key: "doPageView",
                    value: function (t) {
                        var n,
                            r = this._previousPageViewProperties(t);
                        return (this._currentPath = (n = w == null ? void 0 : w.location.pathname) !== null && n !== void 0 ? n : ""), this._instance.scrollManager.resetContext(), (this._prevPageviewTimestamp = t), r;
                    },
                },
                {
                    key: "doPageLeave",
                    value: function (t) {
                        return this._previousPageViewProperties(t);
                    },
                },
                {
                    key: "_previousPageViewProperties",
                    value: function (t) {
                        var n = this._currentPath,
                            r = this._prevPageviewTimestamp,
                            i = this._instance.scrollManager.getContext();
                        if (!r) return {};
                        var o = {};
                        if (i) {
                            var s = i.maxScrollHeight,
                                a = i.lastScrollY,
                                l = i.maxScrollY,
                                u = i.maxContentHeight,
                                c = i.lastContentY,
                                d = i.maxContentY;
                            q(s) ||
                                q(a) ||
                                q(l) ||
                                q(u) ||
                                q(c) ||
                                q(d) ||
                                ((s = Math.ceil(s)),
                                (a = Math.ceil(a)),
                                (l = Math.ceil(l)),
                                (u = Math.ceil(u)),
                                (c = Math.ceil(c)),
                                (d = Math.ceil(d)),
                                (o = {
                                    $prev_pageview_last_scroll: a,
                                    $prev_pageview_last_scroll_percentage: s <= 1 ? 1 : va(a / s, 0, 1),
                                    $prev_pageview_max_scroll: l,
                                    $prev_pageview_max_scroll_percentage: s <= 1 ? 1 : va(l / s, 0, 1),
                                    $prev_pageview_last_content: c,
                                    $prev_pageview_last_content_percentage: u <= 1 ? 1 : va(c / u, 0, 1),
                                    $prev_pageview_max_content: d,
                                    $prev_pageview_max_content_percentage: u <= 1 ? 1 : va(d / u, 0, 1),
                                }));
                        }
                        return n && (o.$prev_pageview_pathname = n), r && (o.$prev_pageview_duration = (t.getTime() - r.getTime()) / 1e3), o;
                    },
                },
            ]),
            e
        );
    })();
function va(e, t, n) {
    return Math.max(t, Math.min(e, n));
}
(function (e) {
    (e.Popover = "popover"), (e.API = "api"), (e.Widget = "widget");
})(zv || (zv = {})),
    (function (e) {
        (e.Open = "open"), (e.MultipleChoice = "multiple_choice"), (e.SingleChoice = "single_choice"), (e.Rating = "rating"), (e.Link = "link");
    })(kl || (kl = {})),
    (function (e) {
        (e.NextQuestion = "next_question"), (e.End = "end"), (e.ResponseBased = "response_based"), (e.SpecificQuestion = "specific_question");
    })(Ht || (Ht = {}));
var W0 = (function () {
        function e() {
            ae(this, e), k(this, "events", {}), (this.events = {});
        }
        return (
            le(e, [
                {
                    key: "on",
                    value: function (t, n) {
                        var r = this;
                        return (
                            this.events[t] || (this.events[t] = []),
                            this.events[t].push(n),
                            function () {
                                r.events[t] = r.events[t].filter(function (i) {
                                    return i !== n;
                                });
                            }
                        );
                    },
                },
                {
                    key: "emit",
                    value: function (t, n) {
                        var r,
                            i = Bt(this.events[t] || []);
                        try {
                            for (i.s(); !(r = i.n()).done; ) (0, r.value)(n);
                        } catch (a) {
                            i.e(a);
                        } finally {
                            i.f();
                        }
                        var o,
                            s = Bt(this.events["*"] || []);
                        try {
                            for (s.s(); !(o = s.n()).done; ) (0, o.value)(t, n);
                        } catch (a) {
                            s.e(a);
                        } finally {
                            s.f();
                        }
                    },
                },
            ]),
            e
        );
    })(),
    BR = (function () {
        function e(t) {
            var n = this;
            ae(this, e),
                k(this, "_debugEventEmitter", new W0()),
                k(this, "checkStep", function (r, i) {
                    return n.checkStepEvent(r, i) && n.checkStepUrl(r, i) && n.checkStepElement(r, i);
                }),
                k(this, "checkStepEvent", function (r, i) {
                    return i == null || !i.event || (r == null ? void 0 : r.event) === (i == null ? void 0 : i.event);
                }),
                (this.instance = t),
                (this.actionEvents = new Set()),
                (this.actionRegistry = new Set());
        }
        return (
            le(
                e,
                [
                    {
                        key: "init",
                        value: function () {
                            var t,
                                n = this;
                            if (!q((t = this.instance) === null || t === void 0 ? void 0 : t._addCaptureHook)) {
                                var r;
                                (r = this.instance) === null ||
                                    r === void 0 ||
                                    r._addCaptureHook(function (i, o) {
                                        n.on(i, o);
                                    });
                            }
                        },
                    },
                    {
                        key: "register",
                        value: function (t) {
                            var n,
                                r,
                                i = this;
                            if (
                                !q((n = this.instance) === null || n === void 0 ? void 0 : n._addCaptureHook) &&
                                (t.forEach(function (a) {
                                    var l, u;
                                    (l = i.actionRegistry) === null || l === void 0 || l.add(a),
                                        (u = a.steps) === null ||
                                            u === void 0 ||
                                            u.forEach(function (c) {
                                                var d;
                                                (d = i.actionEvents) === null || d === void 0 || d.add((c == null ? void 0 : c.event) || "");
                                            });
                                }),
                                (r = this.instance) !== null && r !== void 0 && r.autocapture)
                            ) {
                                var o,
                                    s = new Set();
                                t.forEach(function (a) {
                                    var l;
                                    (l = a.steps) === null ||
                                        l === void 0 ||
                                        l.forEach(function (u) {
                                            u != null && u.selector && s.add(u == null ? void 0 : u.selector);
                                        });
                                }),
                                    (o = this.instance) === null || o === void 0 || o.autocapture.setElementSelectors(s);
                            }
                        },
                    },
                    {
                        key: "on",
                        value: function (t, n) {
                            var r,
                                i = this;
                            n != null &&
                                t.length != 0 &&
                                (this.actionEvents.has(t) || this.actionEvents.has(n == null ? void 0 : n.event)) &&
                                this.actionRegistry &&
                                ((r = this.actionRegistry) === null || r === void 0 ? void 0 : r.size) > 0 &&
                                this.actionRegistry.forEach(function (o) {
                                    i.checkAction(n, o) && i._debugEventEmitter.emit("actionCaptured", o.name);
                                });
                        },
                    },
                    {
                        key: "_addActionHook",
                        value: function (t) {
                            this.onAction("actionCaptured", function (n) {
                                return t(n);
                            });
                        },
                    },
                    {
                        key: "checkAction",
                        value: function (t, n) {
                            if ((n == null ? void 0 : n.steps) == null) return !1;
                            var r,
                                i = Bt(n.steps);
                            try {
                                for (i.s(); !(r = i.n()).done; ) {
                                    var o = r.value;
                                    if (this.checkStep(t, o)) return !0;
                                }
                            } catch (s) {
                                i.e(s);
                            } finally {
                                i.f();
                            }
                            return !1;
                        },
                    },
                    {
                        key: "onAction",
                        value: function (t, n) {
                            return this._debugEventEmitter.on(t, n);
                        },
                    },
                    {
                        key: "checkStepUrl",
                        value: function (t, n) {
                            if (n != null && n.url) {
                                var r,
                                    i = t == null || (r = t.properties) === null || r === void 0 ? void 0 : r.$current_url;
                                if (!i || typeof i != "string" || !e.matchString(i, n == null ? void 0 : n.url, (n == null ? void 0 : n.url_matching) || "contains")) return !1;
                            }
                            return !0;
                        },
                    },
                    {
                        key: "checkStepElement",
                        value: function (t, n) {
                            if (
                                ((n != null && n.href) || (n != null && n.tag_name) || (n != null && n.text)) &&
                                !this.getElementsList(t).some(function (o) {
                                    return (
                                        !(n != null && n.href && !e.matchString(o.href || "", n == null ? void 0 : n.href, (n == null ? void 0 : n.href_matching) || "exact")) &&
                                        (n == null || !n.tag_name || o.tag_name === (n == null ? void 0 : n.tag_name)) &&
                                        !(
                                            n != null &&
                                            n.text &&
                                            !e.matchString(o.text || "", n == null ? void 0 : n.text, (n == null ? void 0 : n.text_matching) || "exact") &&
                                            !e.matchString(o.$el_text || "", n == null ? void 0 : n.text, (n == null ? void 0 : n.text_matching) || "exact")
                                        )
                                    );
                                })
                            )
                                return !1;
                            if (n != null && n.selector) {
                                var r,
                                    i = t == null || (r = t.properties) === null || r === void 0 ? void 0 : r.$element_selectors;
                                if (!i || !i.includes(n == null ? void 0 : n.selector)) return !1;
                            }
                            return !0;
                        },
                    },
                    {
                        key: "getElementsList",
                        value: function (t) {
                            return (t == null ? void 0 : t.properties.$elements) == null ? [] : t == null ? void 0 : t.properties.$elements;
                        },
                    },
                ],
                [
                    {
                        key: "matchString",
                        value: function (t, n, r) {
                            switch (r) {
                                case "regex":
                                    return !!w && Yi(t, n);
                                case "exact":
                                    return n === t;
                                case "contains":
                                    var i = e.escapeStringRegexp(n).replace(/_/g, ".").replace(/%/g, ".*");
                                    return Yi(t, i);
                                default:
                                    return !1;
                            }
                        },
                    },
                    {
                        key: "escapeStringRegexp",
                        value: function (t) {
                            return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
                        },
                    },
                ]
            ),
            e
        );
    })(),
    Ld = (function () {
        function e(t) {
            ae(this, e), (this.instance = t), (this.eventToSurveys = new Map()), (this.actionToSurveys = new Map());
        }
        return (
            le(e, [
                {
                    key: "register",
                    value: function (t) {
                        var n;
                        q((n = this.instance) === null || n === void 0 ? void 0 : n._addCaptureHook) || (this.setupEventBasedSurveys(t), this.setupActionBasedSurveys(t));
                    },
                },
                {
                    key: "setupActionBasedSurveys",
                    value: function (t) {
                        var n = this,
                            r = t.filter(function (i) {
                                var o, s, a, l;
                                return (
                                    ((o = i.conditions) === null || o === void 0 ? void 0 : o.actions) &&
                                    ((s = i.conditions) === null || s === void 0 || (a = s.actions) === null || a === void 0 || (l = a.values) === null || l === void 0 ? void 0 : l.length) > 0
                                );
                            });
                        r.length !== 0 &&
                            (this.actionMatcher == null &&
                                ((this.actionMatcher = new BR(this.instance)),
                                this.actionMatcher.init(),
                                this.actionMatcher._addActionHook(function (i) {
                                    n.onAction(i);
                                })),
                            r.forEach(function (i) {
                                var o, s, a, l, u, c, d, f, p, m;
                                i.conditions &&
                                    (o = i.conditions) !== null &&
                                    o !== void 0 &&
                                    o.actions &&
                                    (s = i.conditions) !== null &&
                                    s !== void 0 &&
                                    (a = s.actions) !== null &&
                                    a !== void 0 &&
                                    a.values &&
                                    ((l = i.conditions) === null || l === void 0 || (u = l.actions) === null || u === void 0 || (c = u.values) === null || c === void 0 ? void 0 : c.length) > 0 &&
                                    ((d = n.actionMatcher) === null || d === void 0 || d.register(i.conditions.actions.values),
                                    (f = i.conditions) === null ||
                                        f === void 0 ||
                                        (p = f.actions) === null ||
                                        p === void 0 ||
                                        (m = p.values) === null ||
                                        m === void 0 ||
                                        m.forEach(function (v) {
                                            if (v && v.name) {
                                                var O = n.actionToSurveys.get(v.name);
                                                O && O.push(i.id), n.actionToSurveys.set(v.name, O || [i.id]);
                                            }
                                        }));
                            }));
                    },
                },
                {
                    key: "setupEventBasedSurveys",
                    value: function (t) {
                        var n,
                            r = this;
                        t.filter(function (i) {
                            var o, s, a, l;
                            return (
                                ((o = i.conditions) === null || o === void 0 ? void 0 : o.events) &&
                                ((s = i.conditions) === null || s === void 0 || (a = s.events) === null || a === void 0 || (l = a.values) === null || l === void 0 ? void 0 : l.length) > 0
                            );
                        }).length !== 0 &&
                            ((n = this.instance) === null ||
                                n === void 0 ||
                                n._addCaptureHook(function (i, o) {
                                    r.onEvent(i, o);
                                }),
                            t.forEach(function (i) {
                                var o, s, a;
                                (o = i.conditions) === null ||
                                    o === void 0 ||
                                    (s = o.events) === null ||
                                    s === void 0 ||
                                    (a = s.values) === null ||
                                    a === void 0 ||
                                    a.forEach(function (l) {
                                        if (l && l.name) {
                                            var u = r.eventToSurveys.get(l.name);
                                            u && u.push(i.id), r.eventToSurveys.set(l.name, u || [i.id]);
                                        }
                                    });
                            }));
                    },
                },
                {
                    key: "onEvent",
                    value: function (t, n) {
                        var r,
                            i,
                            o = ((r = this.instance) === null || r === void 0 || (i = r.persistence) === null || i === void 0 ? void 0 : i.props[la]) || [];
                        if (e.SURVEY_SHOWN_EVENT_NAME == t && n && o.length > 0) {
                            var s,
                                a = n == null || (s = n.properties) === null || s === void 0 ? void 0 : s.$survey_id;
                            if (a) {
                                var l = o.indexOf(a);
                                l >= 0 && (o.splice(l, 1), this._updateActivatedSurveys(o));
                            }
                        } else this.eventToSurveys.has(t) && this._updateActivatedSurveys(o.concat(this.eventToSurveys.get(t) || []));
                    },
                },
                {
                    key: "onAction",
                    value: function (t) {
                        var n,
                            r,
                            i = ((n = this.instance) === null || n === void 0 || (r = n.persistence) === null || r === void 0 ? void 0 : r.props[la]) || [];
                        this.actionToSurveys.has(t) && this._updateActivatedSurveys(i.concat(this.actionToSurveys.get(t) || []));
                    },
                },
                {
                    key: "_updateActivatedSurveys",
                    value: function (t) {
                        var n, r;
                        (n = this.instance) === null || n === void 0 || (r = n.persistence) === null || r === void 0 || r.register(k({}, la, Dn(new Set(t))));
                    },
                },
                {
                    key: "getSurveys",
                    value: function () {
                        var t,
                            n,
                            r = (t = this.instance) === null || t === void 0 || (n = t.persistence) === null || n === void 0 ? void 0 : n.props[la];
                        return r || [];
                    },
                },
                {
                    key: "getEventToSurveys",
                    value: function () {
                        return this.eventToSurveys;
                    },
                },
                {
                    key: "_getActionMatcher",
                    value: function () {
                        return this.actionMatcher;
                    },
                },
            ]),
            e
        );
    })();
k(Ld, "SURVEY_SHOWN_EVENT_NAME", "survey shown");
var wo = "[Surveys]",
    jR = {
        icontains: function (e) {
            return !!w && w.location.href.toLowerCase().indexOf(e.toLowerCase()) > -1;
        },
        not_icontains: function (e) {
            return !!w && w.location.href.toLowerCase().indexOf(e.toLowerCase()) === -1;
        },
        regex: function (e) {
            return !!w && Yi(w.location.href, e);
        },
        not_regex: function (e) {
            return !!w && !Yi(w.location.href, e);
        },
        exact: function (e) {
            return (w == null ? void 0 : w.location.href) === e;
        },
        is_not: function (e) {
            return (w == null ? void 0 : w.location.href) !== e;
        },
    },
    VR = (function () {
        function e(t) {
            ae(this, e), (this.instance = t), (this._surveyEventReceiver = null);
        }
        return (
            le(e, [
                {
                    key: "afterDecideResponse",
                    value: function (t) {
                        (this._decideServerResponse = !!t.surveys), this.loadIfEnabled();
                    },
                },
                {
                    key: "loadIfEnabled",
                    value: function () {
                        var t,
                            n,
                            r,
                            i = this,
                            o = ne == null || (t = ne.__PosthogExtensions__) === null || t === void 0 ? void 0 : t.generateSurveys;
                        this.instance.config.disable_surveys ||
                            !this._decideServerResponse ||
                            o ||
                            (this._surveyEventReceiver == null && (this._surveyEventReceiver = new Ld(this.instance)),
                            (n = ne.__PosthogExtensions__) === null ||
                                n === void 0 ||
                                (r = n.loadExternalDependency) === null ||
                                r === void 0 ||
                                r.call(n, this.instance, "surveys", function (s) {
                                    var a, l;
                                    if (s) return I.error(wo, "Could not load surveys script", s);
                                    i._surveyManager = (a = ne.__PosthogExtensions__) === null || a === void 0 || (l = a.generateSurveys) === null || l === void 0 ? void 0 : l.call(a, i.instance);
                                }));
                    },
                },
                {
                    key: "getSurveys",
                    value: function (t) {
                        var n = this,
                            r = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
                        if (this.instance.config.disable_surveys) return t([]);
                        this._surveyEventReceiver == null && (this._surveyEventReceiver = new Ld(this.instance));
                        var i = this.instance.get_property(md);
                        if (i && !r) return t(i);
                        this.instance._send_request({
                            url: this.instance.requestRouter.endpointFor("api", "/api/surveys/?token=".concat(this.instance.config.token)),
                            method: "GET",
                            transport: "XHR",
                            callback: function (o) {
                                var s;
                                if (o.statusCode !== 200 || !o.json) return t([]);
                                var a,
                                    l = o.json.surveys || [],
                                    u = l.filter(function (c) {
                                        var d, f, p, m, v, O, g, h, _, y, P, N;
                                        return (
                                            (((d = c.conditions) === null || d === void 0 ? void 0 : d.events) &&
                                                ((f = c.conditions) === null || f === void 0 || (p = f.events) === null || p === void 0 ? void 0 : p.values) &&
                                                ((m = c.conditions) === null || m === void 0 || (v = m.events) === null || v === void 0 || (O = v.values) === null || O === void 0 ? void 0 : O.length) > 0) ||
                                            (((g = c.conditions) === null || g === void 0 ? void 0 : g.actions) &&
                                                ((h = c.conditions) === null || h === void 0 || (_ = h.actions) === null || _ === void 0 ? void 0 : _.values) &&
                                                ((y = c.conditions) === null || y === void 0 || (P = y.actions) === null || P === void 0 || (N = P.values) === null || N === void 0 ? void 0 : N.length) > 0)
                                        );
                                    });
                                return u.length > 0 && ((a = n._surveyEventReceiver) === null || a === void 0 || a.register(u)), (s = n.instance.persistence) === null || s === void 0 || s.register(k({}, md, l)), t(l);
                            },
                        });
                    },
                },
                {
                    key: "getActiveMatchingSurveys",
                    value: function (t) {
                        var n = this,
                            r = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
                        this.getSurveys(function (i) {
                            var o,
                                s = i
                                    .filter(function (u) {
                                        return !(!u.start_date || u.end_date);
                                    })
                                    .filter(function (u) {
                                        var c, d, f, p;
                                        if (!u.conditions) return !0;
                                        var m =
                                                (c = u.conditions) === null ||
                                                c === void 0 ||
                                                !c.url ||
                                                jR[(d = (f = u.conditions) === null || f === void 0 ? void 0 : f.urlMatchType) !== null && d !== void 0 ? d : "icontains"](u.conditions.url),
                                            v = (p = u.conditions) === null || p === void 0 || !p.selector || (H == null ? void 0 : H.querySelector(u.conditions.selector));
                                        return m && v;
                                    }),
                                a = (o = n._surveyEventReceiver) === null || o === void 0 ? void 0 : o.getSurveys(),
                                l = s.filter(function (u) {
                                    var c, d, f, p, m, v, O, g, h, _;
                                    if (!u.linked_flag_key && !u.targeting_flag_key && !u.internal_targeting_flag_key) return !0;
                                    var y = !u.linked_flag_key || n.instance.featureFlags.isFeatureEnabled(u.linked_flag_key),
                                        P = !u.targeting_flag_key || n.instance.featureFlags.isFeatureEnabled(u.targeting_flag_key),
                                        N =
                                            ((c = u.conditions) === null || c === void 0 ? void 0 : c.events) &&
                                            ((d = u.conditions) === null || d === void 0 || (f = d.events) === null || f === void 0 ? void 0 : f.values) &&
                                            ((p = u.conditions) === null || p === void 0 || (m = p.events) === null || m === void 0 ? void 0 : m.values.length) > 0,
                                        $ =
                                            ((v = u.conditions) === null || v === void 0 ? void 0 : v.actions) &&
                                            ((O = u.conditions) === null || O === void 0 || (g = O.actions) === null || g === void 0 ? void 0 : g.values) &&
                                            ((h = u.conditions) === null || h === void 0 || (_ = h.actions) === null || _ === void 0 ? void 0 : _.values.length) > 0,
                                        F = (!N && !$) || (a == null ? void 0 : a.includes(u.id)),
                                        G = n._canActivateRepeatedly(u),
                                        K = !(u.internal_targeting_flag_key && !G) || n.instance.featureFlags.isFeatureEnabled(u.internal_targeting_flag_key);
                                    return y && P && K && F;
                                });
                            return t(l);
                        }, r);
                    },
                },
                {
                    key: "getNextSurveyStep",
                    value: function (t, n, r) {
                        var i,
                            o = t.questions[n],
                            s = n + 1;
                        if ((i = o.branching) === null || i === void 0 || !i.type) return n === t.questions.length - 1 ? Ht.End : s;
                        if (o.branching.type === Ht.End) return Ht.End;
                        if (o.branching.type === Ht.SpecificQuestion) {
                            if (Number.isInteger(o.branching.index)) return o.branching.index;
                        } else if (o.branching.type === Ht.ResponseBased) {
                            if (o.type === kl.SingleChoice) {
                                var a,
                                    l,
                                    u = o.choices.indexOf("".concat(r));
                                if ((a = o.branching) !== null && a !== void 0 && (l = a.responseValues) !== null && l !== void 0 && l.hasOwnProperty(u)) {
                                    var c = o.branching.responseValues[u];
                                    return Number.isInteger(c) ? c : c === Ht.End ? Ht.End : s;
                                }
                            } else if (o.type === kl.Rating) {
                                var d, f;
                                if (typeof r != "number" || !Number.isInteger(r)) throw new Error("The response type must be an integer");
                                var p = (function (v, O) {
                                    if (O === 3) {
                                        if (v < 1 || v > 3) throw new Error("The response must be in range 1-3");
                                        return v === 1 ? "negative" : v === 2 ? "neutral" : "positive";
                                    }
                                    if (O === 5) {
                                        if (v < 1 || v > 5) throw new Error("The response must be in range 1-5");
                                        return v <= 2 ? "negative" : v === 3 ? "neutral" : "positive";
                                    }
                                    if (O === 7) {
                                        if (v < 1 || v > 7) throw new Error("The response must be in range 1-7");
                                        return v <= 3 ? "negative" : v === 4 ? "neutral" : "positive";
                                    }
                                    if (O === 10) {
                                        if (v < 0 || v > 10) throw new Error("The response must be in range 0-10");
                                        return v <= 6 ? "detractors" : v <= 8 ? "passives" : "promoters";
                                    }
                                    throw new Error("The scale must be one of: 3, 5, 7, 10");
                                })(r, o.scale);
                                if ((d = o.branching) !== null && d !== void 0 && (f = d.responseValues) !== null && f !== void 0 && f.hasOwnProperty(p)) {
                                    var m = o.branching.responseValues[p];
                                    return Number.isInteger(m) ? m : m === Ht.End ? Ht.End : s;
                                }
                            }
                            return s;
                        }
                        return I.warn(wo, "Falling back to next question index due to unexpected branching type"), s;
                    },
                },
                {
                    key: "_canActivateRepeatedly",
                    value: function (t) {
                        var n;
                        return Ae((n = ne.__PosthogExtensions__) === null || n === void 0 ? void 0 : n.canActivateRepeatedly)
                            ? (I.warn(wo, "canActivateRepeatedly is not defined, must init before calling"), !1)
                            : ne.__PosthogExtensions__.canActivateRepeatedly(t);
                    },
                },
                {
                    key: "canRenderSurvey",
                    value: function (t) {
                        var n = this;
                        Ae(this._surveyManager)
                            ? I.warn(wo, "canActivateRepeatedly is not defined, must init before calling")
                            : this.getSurveys(function (r) {
                                  var i = r.filter(function (o) {
                                      return o.id === t;
                                  })[0];
                                  n._surveyManager.canRenderSurvey(i);
                              });
                    },
                },
                {
                    key: "renderSurvey",
                    value: function (t, n) {
                        var r = this;
                        Ae(this._surveyManager)
                            ? I.warn(wo, "canActivateRepeatedly is not defined, must init before calling")
                            : this.getSurveys(function (i) {
                                  var o = i.filter(function (s) {
                                      return s.id === t;
                                  })[0];
                                  r._surveyManager.renderSurvey(o, H == null ? void 0 : H.querySelector(n));
                              });
                    },
                },
            ]),
            e
        );
    })(),
    zR = (function () {
        function e(t) {
            var n,
                r,
                i = this;
            ae(this, e),
                k(this, "serverLimits", {}),
                k(this, "lastEventRateLimited", !1),
                k(this, "checkForLimiting", function (o) {
                    var s = o.text;
                    if (s && s.length)
                        try {
                            (JSON.parse(s).quota_limited || []).forEach(function (a) {
                                I.info("[RateLimiter] ".concat(a || "events", " is quota limited.")), (i.serverLimits[a] = new Date().getTime() + 6e4);
                            });
                        } catch (a) {
                            return void I.warn('[RateLimiter] could not rate limit - continuing. Error: "'.concat(a == null ? void 0 : a.message, '"'), { text: s });
                        }
                }),
                (this.instance = t),
                (this.captureEventsPerSecond = ((n = t.config.rate_limiting) === null || n === void 0 ? void 0 : n.events_per_second) || 10),
                (this.captureEventsBurstLimit = Math.max(((r = t.config.rate_limiting) === null || r === void 0 ? void 0 : r.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond)),
                (this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited);
        }
        return (
            le(e, [
                {
                    key: "clientRateLimitContext",
                    value: function () {
                        var t,
                            n,
                            r,
                            i = arguments.length > 0 && arguments[0] !== void 0 && arguments[0],
                            o = new Date().getTime(),
                            s = (t = (n = this.instance.persistence) === null || n === void 0 ? void 0 : n.get_property(wd)) !== null && t !== void 0 ? t : { tokens: this.captureEventsBurstLimit, last: o };
                        (s.tokens += ((o - s.last) / 1e3) * this.captureEventsPerSecond), (s.last = o), s.tokens > this.captureEventsBurstLimit && (s.tokens = this.captureEventsBurstLimit);
                        var a = s.tokens < 1;
                        return (
                            a || i || (s.tokens = Math.max(0, s.tokens - 1)),
                            !a ||
                                this.lastEventRateLimited ||
                                i ||
                                this.instance.capture(
                                    "$$client_ingestion_warning",
                                    {
                                        $$client_ingestion_warning_message: "posthog-js client rate limited. Config is set to "
                                            .concat(this.captureEventsPerSecond, " events per second and ")
                                            .concat(this.captureEventsBurstLimit, " events burst limit."),
                                    },
                                    { skip_client_rate_limiting: !0 }
                                ),
                            (this.lastEventRateLimited = a),
                            (r = this.instance.persistence) === null || r === void 0 || r.set_property(wd, s),
                            { isRateLimited: a, remainingTokens: s.tokens }
                        );
                    },
                },
                {
                    key: "isServerRateLimited",
                    value: function (t) {
                        var n = this.serverLimits[t || "events"] || !1;
                        return n !== !1 && new Date().getTime() < n;
                    },
                },
            ]),
            e
        );
    })(),
    HR = function () {
        return j({ initialPathName: (at == null ? void 0 : at.pathname) || "", referringDomain: xe.referringDomain() }, xe.campaignParams());
    },
    WR = (function () {
        function e(t, n, r) {
            var i = this;
            ae(this, e),
                k(this, "_onSessionIdCallback", function (o) {
                    var s = i._getStoredProps();
                    if (!s || s.sessionId !== o) {
                        var a = { sessionId: o, props: i._sessionSourceParamGenerator() };
                        i._persistence.register(k({}, yd, a));
                    }
                }),
                (this._sessionIdManager = t),
                (this._persistence = n),
                (this._sessionSourceParamGenerator = r || HR),
                this._sessionIdManager.onSessionId(this._onSessionIdCallback);
        }
        return (
            le(e, [
                {
                    key: "_getStoredProps",
                    value: function () {
                        return this._persistence.props[yd];
                    },
                },
                {
                    key: "getSessionProps",
                    value: function () {
                        var t,
                            n = (t = this._getStoredProps()) === null || t === void 0 ? void 0 : t.props;
                        return n
                            ? {
                                  $client_session_initial_referring_host: n.referringDomain,
                                  $client_session_initial_pathname: n.initialPathName,
                                  $client_session_initial_utm_source: n.utm_source,
                                  $client_session_initial_utm_campaign: n.utm_campaign,
                                  $client_session_initial_utm_medium: n.utm_medium,
                                  $client_session_initial_utm_content: n.utm_content,
                                  $client_session_initial_utm_term: n.utm_term,
                              }
                            : {};
                    },
                },
            ]),
            e
        );
    })(),
    GR = [
        "ahrefsbot",
        "ahrefssiteaudit",
        "applebot",
        "baiduspider",
        "bingbot",
        "bingpreview",
        "bot.htm",
        "bot.php",
        "crawler",
        "deepscan",
        "duckduckbot",
        "facebookexternal",
        "facebookcatalog",
        "gptbot",
        "http://yandex.com/bots",
        "hubspot",
        "ia_archiver",
        "linkedinbot",
        "mj12bot",
        "msnbot",
        "nessus",
        "petalbot",
        "pinterest",
        "prerender",
        "rogerbot",
        "screaming frog",
        "semrushbot",
        "sitebulb",
        "slurp",
        "turnitin",
        "twitterbot",
        "vercelbot",
        "yahoo! slurp",
        "yandexbot",
        "headlesschrome",
        "cypress",
        "Google-HotelAdsVerifier",
        "adsbot-google",
        "apis-google",
        "duplexweb-google",
        "feedfetcher-google",
        "google favicon",
        "google web preview",
        "google-read-aloud",
        "googlebot",
        "googleweblight",
        "mediapartners-google",
        "storebot-google",
        "Bytespider;",
    ],
    Hv = function (e, t) {
        if (!e) return !1;
        var n = e.toLowerCase();
        return GR.concat(t || []).some(function (r) {
            var i = r.toLowerCase();
            return n.indexOf(i) !== -1;
        });
    },
    G0 = (function () {
        function e() {
            ae(this, e), (this.clicks = []);
        }
        return (
            le(e, [
                {
                    key: "isRageClick",
                    value: function (t, n, r) {
                        var i = this.clicks[this.clicks.length - 1];
                        if (i && Math.abs(t - i.x) + Math.abs(n - i.y) < 30 && r - i.timestamp < 1e3) {
                            if ((this.clicks.push({ x: t, y: n, timestamp: r }), this.clicks.length === 3)) return !0;
                        } else this.clicks = [{ x: t, y: n, timestamp: r }];
                        return !1;
                    },
                },
            ]),
            e
        );
    })();
function Wv(e) {
    var t;
    return e.id === bd || !((t = e.closest) === null || t === void 0 || !t.call(e, "#" + bd));
}
var qR = (function () {
        function e(t) {
            var n,
                r = this;
            ae(this, e),
                k(this, "rageclicks", new G0()),
                k(this, "_enabledServerSide", !1),
                k(this, "_initialized", !1),
                k(this, "_flushInterval", null),
                (this.instance = t),
                (this._enabledServerSide = !((n = this.instance.persistence) === null || n === void 0 || !n.props[vd])),
                w == null ||
                    w.addEventListener("beforeunload", function () {
                        r.flush();
                    });
        }
        return (
            le(e, [
                {
                    key: "flushIntervalMilliseconds",
                    get: function () {
                        var t = 5e3;
                        return Me(this.instance.config.capture_heatmaps) && this.instance.config.capture_heatmaps.flush_interval_milliseconds && (t = this.instance.config.capture_heatmaps.flush_interval_milliseconds), t;
                    },
                },
                {
                    key: "isEnabled",
                    get: function () {
                        return q(this.instance.config.capture_heatmaps) ? (q(this.instance.config.enable_heatmaps) ? this._enabledServerSide : this.instance.config.enable_heatmaps) : this.instance.config.capture_heatmaps !== !1;
                    },
                },
                {
                    key: "startIfEnabled",
                    value: function () {
                        if (this.isEnabled) {
                            if (this._initialized) return;
                            I.info("[heatmaps] starting..."), this._setupListeners(), (this._flushInterval = setInterval(this.flush.bind(this), this.flushIntervalMilliseconds));
                        } else {
                            var t;
                            clearInterval((t = this._flushInterval) !== null && t !== void 0 ? t : void 0), this.getAndClearBuffer();
                        }
                    },
                },
                {
                    key: "afterDecideResponse",
                    value: function (t) {
                        var n = !!t.heatmaps;
                        this.instance.persistence && this.instance.persistence.register(k({}, vd, n)), (this._enabledServerSide = n), this.startIfEnabled();
                    },
                },
                {
                    key: "getAndClearBuffer",
                    value: function () {
                        var t = this.buffer;
                        return (this.buffer = void 0), t;
                    },
                },
                {
                    key: "_setupListeners",
                    value: function () {
                        var t = this;
                        w &&
                            H &&
                            (On(
                                H,
                                "click",
                                function (n) {
                                    return t._onClick(n || (w == null ? void 0 : w.event));
                                },
                                !1,
                                !0
                            ),
                            On(
                                H,
                                "mousemove",
                                function (n) {
                                    return t._onMouseMove(n || (w == null ? void 0 : w.event));
                                },
                                !1,
                                !0
                            ),
                            (this._initialized = !0));
                    },
                },
                {
                    key: "_getProperties",
                    value: function (t, n) {
                        var r = this.instance.scrollManager.scrollY(),
                            i = this.instance.scrollManager.scrollX(),
                            o = this.instance.scrollManager.scrollElement(),
                            s = (function (a, l, u) {
                                for (var c = a; c && iu(c) && !cr(c, "body"); ) {
                                    if (c === u) return !1;
                                    if (ie(l, w == null ? void 0 : w.getComputedStyle(c).position)) return !0;
                                    c = D0(c);
                                }
                                return !1;
                            })(T0(t), ["fixed", "sticky"], o);
                        return { x: t.clientX + (s ? 0 : i), y: t.clientY + (s ? 0 : r), target_fixed: s, type: n };
                    },
                },
                {
                    key: "_onClick",
                    value: function (t) {
                        var n;
                        if (!Wv(t.target)) {
                            var r = this._getProperties(t, "click");
                            (n = this.rageclicks) !== null && n !== void 0 && n.isRageClick(t.clientX, t.clientY, new Date().getTime()) && this._capture(j(j({}, r), {}, { type: "rageclick" })), this._capture(r);
                        }
                    },
                },
                {
                    key: "_onMouseMove",
                    value: function (t) {
                        var n = this;
                        Wv(t.target) ||
                            (clearTimeout(this._mouseMoveTimeout),
                            (this._mouseMoveTimeout = setTimeout(function () {
                                n._capture(n._getProperties(t, "mousemove"));
                            }, 500)));
                    },
                },
                {
                    key: "_capture",
                    value: function (t) {
                        if (w) {
                            var n = w.location.href;
                            (this.buffer = this.buffer || {}), this.buffer[n] || (this.buffer[n] = []), this.buffer[n].push(t);
                        }
                    },
                },
                {
                    key: "flush",
                    value: function () {
                        this.buffer && !Ta(this.buffer) && this.instance.capture("$$heatmap", { $heatmap_data: this.getAndClearBuffer() });
                    },
                },
            ]),
            e
        );
    })(),
    QR = (function () {
        function e(t) {
            var n = this;
            ae(this, e),
                k(this, "_updateScrollData", function () {
                    var r, i, o, s;
                    n.context || (n.context = {});
                    var a = n.scrollElement(),
                        l = n.scrollY(),
                        u = a ? Math.max(0, a.scrollHeight - a.clientHeight) : 0,
                        c = l + ((a == null ? void 0 : a.clientHeight) || 0),
                        d = (a == null ? void 0 : a.scrollHeight) || 0;
                    (n.context.lastScrollY = Math.ceil(l)),
                        (n.context.maxScrollY = Math.max(l, (r = n.context.maxScrollY) !== null && r !== void 0 ? r : 0)),
                        (n.context.maxScrollHeight = Math.max(u, (i = n.context.maxScrollHeight) !== null && i !== void 0 ? i : 0)),
                        (n.context.lastContentY = c),
                        (n.context.maxContentY = Math.max(c, (o = n.context.maxContentY) !== null && o !== void 0 ? o : 0)),
                        (n.context.maxContentHeight = Math.max(d, (s = n.context.maxContentHeight) !== null && s !== void 0 ? s : 0));
                }),
                (this.instance = t);
        }
        return (
            le(e, [
                {
                    key: "getContext",
                    value: function () {
                        return this.context;
                    },
                },
                {
                    key: "resetContext",
                    value: function () {
                        var t = this.context;
                        return setTimeout(this._updateScrollData, 0), t;
                    },
                },
                {
                    key: "startMeasuringScrollPosition",
                    value: function () {
                        w == null || w.addEventListener("scroll", this._updateScrollData, !0), w == null || w.addEventListener("scrollend", this._updateScrollData, !0), w == null || w.addEventListener("resize", this._updateScrollData);
                    },
                },
                {
                    key: "scrollElement",
                    value: function () {
                        if (!this.instance.config.scroll_root_selector) return w == null ? void 0 : w.document.documentElement;
                        var t,
                            n = Bt(Le(this.instance.config.scroll_root_selector) ? this.instance.config.scroll_root_selector : [this.instance.config.scroll_root_selector]);
                        try {
                            for (n.s(); !(t = n.n()).done; ) {
                                var r = t.value,
                                    i = w == null ? void 0 : w.document.querySelector(r);
                                if (i) return i;
                            }
                        } catch (o) {
                            n.e(o);
                        } finally {
                            n.f();
                        }
                    },
                },
                {
                    key: "scrollY",
                    value: function () {
                        if (this.instance.config.scroll_root_selector) {
                            var t = this.scrollElement();
                            return (t && t.scrollTop) || 0;
                        }
                        return (w && (w.scrollY || w.pageYOffset || w.document.documentElement.scrollTop)) || 0;
                    },
                },
                {
                    key: "scrollX",
                    value: function () {
                        if (this.instance.config.scroll_root_selector) {
                            var t = this.scrollElement();
                            return (t && t.scrollLeft) || 0;
                        }
                        return (w && (w.scrollX || w.pageXOffset || w.document.documentElement.scrollLeft)) || 0;
                    },
                },
            ]),
            e
        );
    })(),
    Ju = "$copy_autocapture";
function Zu(e, t) {
    return t.length > e ? t.slice(0, e) + "..." : t;
}
var Qn,
    YR = (function () {
        function e(t) {
            ae(this, e), k(this, "_initialized", !1), k(this, "_isDisabledServerSide", null), k(this, "rageclicks", new G0()), k(this, "_elementsChainAsString", !1), (this.instance = t), (this._elementSelectors = null);
        }
        return (
            le(e, [
                {
                    key: "config",
                    get: function () {
                        var t,
                            n,
                            r = Me(this.instance.config.autocapture) ? this.instance.config.autocapture : {};
                        return (
                            (r.url_allowlist =
                                (t = r.url_allowlist) === null || t === void 0
                                    ? void 0
                                    : t.map(function (i) {
                                          return new RegExp(i);
                                      })),
                            (r.url_ignorelist =
                                (n = r.url_ignorelist) === null || n === void 0
                                    ? void 0
                                    : n.map(function (i) {
                                          return new RegExp(i);
                                      })),
                            r
                        );
                    },
                },
                {
                    key: "_addDomEventHandlers",
                    value: function () {
                        var t = this;
                        if (this.isBrowserSupported()) {
                            if (w && H) {
                                var n = function (i) {
                                        i = i || (w == null ? void 0 : w.event);
                                        try {
                                            t._captureEvent(i);
                                        } catch (o) {
                                            I.error("Failed to capture event", o);
                                        }
                                    },
                                    r = function (i) {
                                        (i = i || (w == null ? void 0 : w.event)), t._captureEvent(i, Ju);
                                    };
                                On(H, "submit", n, !1, !0), On(H, "change", n, !1, !0), On(H, "click", n, !1, !0), this.config.capture_copied_text && (On(H, "copy", r, !1, !0), On(H, "cut", r, !1, !0));
                            }
                        } else I.info("Disabling Automatic Event Collection because this browser is not supported");
                    },
                },
                {
                    key: "startIfEnabled",
                    value: function () {
                        this.isEnabled && !this._initialized && (this._addDomEventHandlers(), (this._initialized = !0));
                    },
                },
                {
                    key: "afterDecideResponse",
                    value: function (t) {
                        t.elementsChainAsString && (this._elementsChainAsString = t.elementsChainAsString),
                            this.instance.persistence && this.instance.persistence.register(k({}, uv, !!t.autocapture_opt_out)),
                            (this._isDisabledServerSide = !!t.autocapture_opt_out),
                            this.startIfEnabled();
                    },
                },
                {
                    key: "setElementSelectors",
                    value: function (t) {
                        this._elementSelectors = t;
                    },
                },
                {
                    key: "getElementSelectors",
                    value: function (t) {
                        var n,
                            r = [];
                        return (
                            (n = this._elementSelectors) === null ||
                                n === void 0 ||
                                n.forEach(function (i) {
                                    var o = H == null ? void 0 : H.querySelectorAll(i);
                                    o == null ||
                                        o.forEach(function (s) {
                                            t === s && r.push(i);
                                        });
                                }),
                            r
                        );
                    },
                },
                {
                    key: "isEnabled",
                    get: function () {
                        var t,
                            n,
                            r = (t = this.instance.persistence) === null || t === void 0 ? void 0 : t.props[uv],
                            i = this._isDisabledServerSide;
                        if (mr(i) && !Tr(r) && !this.instance.config.advanced_disable_decide) return !1;
                        var o = (n = this._isDisabledServerSide) !== null && n !== void 0 ? n : !!r;
                        return !!this.instance.config.autocapture && !o;
                    },
                },
                {
                    key: "_previousElementSibling",
                    value: function (t) {
                        if (t.previousElementSibling) return t.previousElementSibling;
                        var n = t;
                        do n = n.previousSibling;
                        while (n && !iu(n));
                        return n;
                    },
                },
                {
                    key: "_getAugmentPropertiesFromElement",
                    value: function (t) {
                        if (!Td(t)) return {};
                        var n = {};
                        return (
                            he(t.attributes, function (r) {
                                if (r.name && r.name.indexOf("data-ph-capture-attribute") === 0) {
                                    var i = r.name.replace("data-ph-capture-attribute-", ""),
                                        o = r.value;
                                    i && o && Ni(o) && (n[i] = o);
                                }
                            }),
                            n
                        );
                    },
                },
                {
                    key: "_getPropertiesFromElement",
                    value: function (t, n, r) {
                        var i,
                            o = t.tagName.toLowerCase(),
                            s = { tag_name: o };
                        Rd.indexOf(o) > -1 && !r && (o.toLowerCase() === "a" || o.toLowerCase() === "button" ? (s.$el_text = Zu(1024, Tv(t))) : (s.$el_text = Zu(1024, Sl(t))));
                        var a = wl(t);
                        a.length > 0 &&
                            (s.classes = a.filter(function (f) {
                                return f !== "";
                            }));
                        var l = (i = this.config) === null || i === void 0 ? void 0 : i.element_attribute_ignorelist;
                        he(t.attributes, function (f) {
                            var p;
                            if (
                                (!N0(t) || ["name", "id", "class", "aria-label"].indexOf(f.name) !== -1) &&
                                (l == null || !l.includes(f.name)) &&
                                !n &&
                                Ni(f.value) &&
                                ((p = f.name), !Je(p) || (p.substring(0, 10) !== "_ngcontent" && p.substring(0, 7) !== "_nghost"))
                            ) {
                                var m = f.value;
                                f.name === "class" && (m = lp(m).join(" ")), (s["attr__" + f.name] = Zu(1024, m));
                            }
                        });
                        for (var u = 1, c = 1, d = t; (d = this._previousElementSibling(d)); ) u++, d.tagName === t.tagName && c++;
                        return (s.nth_child = u), (s.nth_of_type = c), s;
                    },
                },
                {
                    key: "_getDefaultProperties",
                    value: function (t) {
                        return { $event_type: t, $ce_version: 1 };
                    },
                },
                {
                    key: "_captureEvent",
                    value: function (t) {
                        var n = this,
                            r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "$autocapture";
                        if (this.isEnabled) {
                            var i,
                                o = T0(t);
                            I0(o) && (o = o.parentNode || null),
                                r === "$autocapture" &&
                                    t.type === "click" &&
                                    t instanceof MouseEvent &&
                                    this.instance.config.rageclick &&
                                    (i = this.rageclicks) !== null &&
                                    i !== void 0 &&
                                    i.isRageClick(t.clientX, t.clientY, new Date().getTime()) &&
                                    this._captureEvent(t, "$rageclick");
                            var s = r === Ju;
                            if (o && oR(o, t, this.config, s, s ? ["copy", "cut"] : void 0)) {
                                for (var a, l, u = [o], c = o; c.parentNode && !cr(c, "body"); ) x0(c.parentNode) ? (u.push(c.parentNode.host), (c = c.parentNode.host)) : (u.push(c.parentNode), (c = c.parentNode));
                                var d,
                                    f,
                                    p = [],
                                    m = {},
                                    v = !1;
                                if (
                                    (he(u, function (G) {
                                        var K = Td(G);
                                        G.tagName.toLowerCase() === "a" && ((d = G.getAttribute("href")), (d = K && Ni(d) && d)),
                                            ie(wl(G), "ph-no-capture") && (v = !0),
                                            p.push(n._getPropertiesFromElement(G, n.instance.config.mask_all_element_attributes, n.instance.config.mask_all_text));
                                        var Ee = n._getAugmentPropertiesFromElement(G);
                                        rt(m, Ee);
                                    }),
                                    this.instance.config.mask_all_text || (o.tagName.toLowerCase() === "a" || o.tagName.toLowerCase() === "button" ? (p[0].$el_text = Tv(o)) : (p[0].$el_text = Sl(o))),
                                    d)
                                ) {
                                    var O, g;
                                    p[0].attr__href = d;
                                    var h = (O = zo(d)) === null || O === void 0 ? void 0 : O.host,
                                        _ = w == null || (g = w.location) === null || g === void 0 ? void 0 : g.host;
                                    h && _ && h !== _ && (f = d);
                                }
                                if (v) return !1;
                                var y = rt(
                                        this._getDefaultProperties(t.type),
                                        this._elementsChainAsString ? { $elements_chain: cR(p) } : { $elements: p },
                                        (a = p[0]) !== null && a !== void 0 && a.$el_text ? { $el_text: (l = p[0]) === null || l === void 0 ? void 0 : l.$el_text } : {},
                                        f && t.type === "click" ? { $external_click_url: f } : {},
                                        m
                                    ),
                                    P = this.getElementSelectors(o);
                                if ((P && P.length > 0 && (y.$element_selectors = P), r === Ju)) {
                                    var N,
                                        $ = R0(w == null || (N = w.getSelection()) === null || N === void 0 ? void 0 : N.toString()),
                                        F = t.type || "clipboard";
                                    if (!$) return !1;
                                    (y.$selected_content = $), (y.$copy_type = F);
                                }
                                return this.instance.capture(r, y), !0;
                            }
                        }
                    },
                },
                {
                    key: "isBrowserSupported",
                    value: function () {
                        return Dt(H == null ? void 0 : H.querySelectorAll);
                    },
                },
            ]),
            e
        );
    })(),
    KR = (function () {
        function e(t) {
            var n = this;
            ae(this, e),
                k(this, "_restoreXHRPatch", void 0),
                k(this, "_restoreFetchPatch", void 0),
                k(this, "_startCapturing", function () {
                    var r, i, o, s;
                    q(n._restoreXHRPatch) && ((r = ne.__PosthogExtensions__) === null || r === void 0 || (i = r.tracingHeadersPatchFns) === null || i === void 0 || i._patchXHR(n.instance.sessionManager)),
                        q(n._restoreFetchPatch) && ((o = ne.__PosthogExtensions__) === null || o === void 0 || (s = o.tracingHeadersPatchFns) === null || s === void 0 || s._patchFetch(n.instance.sessionManager));
                }),
                (this.instance = t);
        }
        return (
            le(e, [
                {
                    key: "_loadScript",
                    value: function (t) {
                        var n, r, i;
                        (n = ne.__PosthogExtensions__) !== null && n !== void 0 && n.tracingHeadersPatchFns && t(),
                            (r = ne.__PosthogExtensions__) === null ||
                                r === void 0 ||
                                (i = r.loadExternalDependency) === null ||
                                i === void 0 ||
                                i.call(r, this.instance, "tracing-headers", function (o) {
                                    if (o) return I.error("[TRACING-HEADERS] failed to load script", o);
                                    t();
                                });
                    },
                },
                {
                    key: "startIfEnabledOrStop",
                    value: function () {
                        var t, n;
                        this.instance.config.__add_tracing_headers
                            ? this._loadScript(this._startCapturing)
                            : ((t = this._restoreXHRPatch) === null || t === void 0 || t.call(this),
                              (n = this._restoreFetchPatch) === null || n === void 0 || n.call(this),
                              (this._restoreXHRPatch = void 0),
                              (this._restoreFetchPatch = void 0));
                    },
                },
            ]),
            e
        );
    })();
(function (e) {
    (e[(e.PENDING = -1)] = "PENDING"), (e[(e.DENIED = 0)] = "DENIED"), (e[(e.GRANTED = 1)] = "GRANTED");
})(Qn || (Qn = {}));
var XR = (function () {
        function e(t) {
            ae(this, e), (this.instance = t);
        }
        return (
            le(e, [
                {
                    key: "config",
                    get: function () {
                        return this.instance.config;
                    },
                },
                {
                    key: "consent",
                    get: function () {
                        return this.getDnt() ? Qn.DENIED : this.storedConsent;
                    },
                },
                {
                    key: "isOptedOut",
                    value: function () {
                        return this.consent === Qn.DENIED || (this.consent === Qn.PENDING && this.config.opt_out_capturing_by_default);
                    },
                },
                {
                    key: "isOptedIn",
                    value: function () {
                        return !this.isOptedOut();
                    },
                },
                {
                    key: "optInOut",
                    value: function (t) {
                        this.storage.set(this.storageKey, t ? 1 : 0, this.config.cookie_expiration, this.config.cross_subdomain_cookie, this.config.secure_cookie);
                    },
                },
                {
                    key: "reset",
                    value: function () {
                        this.storage.remove(this.storageKey, this.config.cross_subdomain_cookie);
                    },
                },
                {
                    key: "storageKey",
                    get: function () {
                        var t = this.instance.config,
                            n = t.token;
                        return (t.opt_out_capturing_cookie_prefix || "__ph_opt_in_out_") + n;
                    },
                },
                {
                    key: "storedConsent",
                    get: function () {
                        var t = this.storage.get(this.storageKey);
                        return t === "1" ? Qn.GRANTED : t === "0" ? Qn.DENIED : Qn.PENDING;
                    },
                },
                {
                    key: "storage",
                    get: function () {
                        if (!this._storage) {
                            var t = this.config.opt_out_capturing_persistence_type;
                            this._storage = t === "localStorage" ? Ne : Nn;
                            var n = t === "localStorage" ? Nn : Ne;
                            n.get(this.storageKey) && (this._storage.get(this.storageKey) || this.optInOut(n.get(this.storageKey) === "1"), n.remove(this.storageKey, this.config.cross_subdomain_cookie));
                        }
                        return this._storage;
                    },
                },
                {
                    key: "getDnt",
                    value: function () {
                        return (
                            !!this.config.respect_dnt &&
                            !!d0([Kt == null ? void 0 : Kt.doNotTrack, Kt == null ? void 0 : Kt.msDoNotTrack, ne.doNotTrack], function (t) {
                                return ie([!0, 1, "1", "yes"], t);
                            })
                        );
                    },
                },
            ]),
            e
        );
    })(),
    ga = "[Exception Autocapture]",
    JR = (function () {
        function e(t) {
            var n,
                r = this;
            ae(this, e),
                k(this, "originalOnUnhandledRejectionHandler", void 0),
                k(this, "startCapturing", function () {
                    var i, o, s, a;
                    if (w && r.isEnabled && !r.hasHandlers && !r.isCapturing) {
                        var l = (i = ne.__PosthogExtensions__) === null || i === void 0 || (o = i.errorWrappingFunctions) === null || o === void 0 ? void 0 : o.wrapOnError,
                            u = (s = ne.__PosthogExtensions__) === null || s === void 0 || (a = s.errorWrappingFunctions) === null || a === void 0 ? void 0 : a.wrapUnhandledRejection;
                        if (l && u)
                            try {
                                (r.unwrapOnError = l(r.captureException.bind(r))), (r.unwrapUnhandledRejection = u(r.captureException.bind(r)));
                            } catch (c) {
                                I.error(ga + " failed to start", c), r.stopCapturing();
                            }
                        else I.error(ga + " failed to load error wrapping functions - cannot start");
                    }
                }),
                (this.instance = t),
                (this.remoteEnabled = !((n = this.instance.persistence) === null || n === void 0 || !n.props[cv])),
                this.startIfEnabled();
        }
        return (
            le(e, [
                {
                    key: "isEnabled",
                    get: function () {
                        var t;
                        return (t = this.remoteEnabled) !== null && t !== void 0 && t;
                    },
                },
                {
                    key: "isCapturing",
                    get: function () {
                        var t;
                        return !(w == null || (t = w.onerror) === null || t === void 0 || !t.__POSTHOG_INSTRUMENTED__);
                    },
                },
                {
                    key: "hasHandlers",
                    get: function () {
                        return this.originalOnUnhandledRejectionHandler || this.unwrapOnError;
                    },
                },
                {
                    key: "startIfEnabled",
                    value: function () {
                        this.isEnabled && !this.isCapturing && (I.info(ga + " enabled, starting..."), this.loadScript(this.startCapturing));
                    },
                },
                {
                    key: "loadScript",
                    value: function (t) {
                        var n, r;
                        this.hasHandlers && t(),
                            (n = ne.__PosthogExtensions__) === null ||
                                n === void 0 ||
                                (r = n.loadExternalDependency) === null ||
                                r === void 0 ||
                                r.call(n, this.instance, "exception-autocapture", function (i) {
                                    if (i) return I.error(ga + " failed to load script", i);
                                    t();
                                });
                    },
                },
                {
                    key: "stopCapturing",
                    value: function () {
                        var t, n;
                        (t = this.unwrapOnError) === null || t === void 0 || t.call(this), (n = this.unwrapUnhandledRejection) === null || n === void 0 || n.call(this);
                    },
                },
                {
                    key: "afterDecideResponse",
                    value: function (t) {
                        var n = t.autocaptureExceptions;
                        (this.remoteEnabled = !!n || !1), this.instance.persistence && this.instance.persistence.register(k({}, cv, this.remoteEnabled)), this.startIfEnabled();
                    },
                },
                {
                    key: "captureException",
                    value: function (t) {
                        var n = this.instance.requestRouter.endpointFor("ui");
                        (t.$exception_personURL = "".concat(n, "/project/").concat(this.instance.config.token, "/person/").concat(this.instance.get_distinct_id())), this.instance.exceptions.sendExceptionEvent(t);
                    },
                },
            ]),
            e
        );
    })(),
    Gv = 9e5,
    Sr = "[Web Vitals]",
    ZR = (function () {
        function e(t) {
            var n,
                r = this;
            ae(this, e),
                k(this, "_enabledServerSide", !1),
                k(this, "_initialized", !1),
                k(this, "buffer", { url: void 0, metrics: [], firstMetricTimestamp: void 0 }),
                k(this, "_flushToCapture", function () {
                    clearTimeout(r._delayedFlushTimer),
                        r.buffer.metrics.length !== 0 &&
                            (r.instance.capture(
                                "$web_vitals",
                                r.buffer.metrics.reduce(function (i, o) {
                                    var s;
                                    return j(j({}, i), {}, (k((s = {}), "$web_vitals_".concat(o.name, "_event"), j({}, o)), k(s, "$web_vitals_".concat(o.name, "_value"), o.value), s));
                                }, {})
                            ),
                            (r.buffer = { url: void 0, metrics: [], firstMetricTimestamp: void 0 }));
                }),
                k(this, "_addToBuffer", function (i) {
                    var o,
                        s = (o = r.instance.sessionManager) === null || o === void 0 ? void 0 : o.checkAndGetSessionAndWindowId(!0);
                    if (q(s)) I.error(Sr + "Could not read session ID. Dropping metrics!");
                    else {
                        r.buffer = r.buffer || { url: void 0, metrics: [], firstMetricTimestamp: void 0 };
                        var a = r._currentURL();
                        q(a) ||
                            (Ae(i == null ? void 0 : i.name) || Ae(i == null ? void 0 : i.value)
                                ? I.error(Sr + "Invalid metric received", i)
                                : r._maxAllowedValue && i.value >= r._maxAllowedValue
                                ? I.error(Sr + "Ignoring metric with value >= " + r._maxAllowedValue, i)
                                : (r.buffer.url !== a && (r._flushToCapture(), (r._delayedFlushTimer = setTimeout(r._flushToCapture, 8e3))),
                                  q(r.buffer.url) && (r.buffer.url = a),
                                  (r.buffer.firstMetricTimestamp = q(r.buffer.firstMetricTimestamp) ? Date.now() : r.buffer.firstMetricTimestamp),
                                  r.buffer.metrics.push(j(j({}, i), {}, { $current_url: a, $session_id: s.sessionId, $window_id: s.windowId, timestamp: Date.now() })),
                                  r.buffer.metrics.length === r.allowedMetrics.length && r._flushToCapture()));
                    }
                }),
                k(this, "_startCapturing", function () {
                    var i,
                        o,
                        s,
                        a,
                        l = ne.__PosthogExtensions__;
                    if (!q(l) && !q(l.postHogWebVitalsCallbacks)) {
                        var u = l.postHogWebVitalsCallbacks;
                        (i = u.onLCP), (o = u.onCLS), (s = u.onFCP), (a = u.onINP);
                    }
                    i && o && s && a
                        ? (r.allowedMetrics.indexOf("LCP") > -1 && i(r._addToBuffer.bind(r)),
                          r.allowedMetrics.indexOf("CLS") > -1 && o(r._addToBuffer.bind(r)),
                          r.allowedMetrics.indexOf("FCP") > -1 && s(r._addToBuffer.bind(r)),
                          r.allowedMetrics.indexOf("INP") > -1 && a(r._addToBuffer.bind(r)),
                          (r._initialized = !0))
                        : I.error(Sr + "web vitals callbacks not loaded - not starting");
                }),
                (this.instance = t),
                (this._enabledServerSide = !((n = this.instance.persistence) === null || n === void 0 || !n.props[fv])),
                this.startIfEnabled();
        }
        return (
            le(e, [
                {
                    key: "allowedMetrics",
                    get: function () {
                        var t,
                            n,
                            r = Me(this.instance.config.capture_performance) ? ((t = this.instance.config.capture_performance) === null || t === void 0 ? void 0 : t.web_vitals_allowed_metrics) : void 0;
                        return q(r) ? ((n = this.instance.persistence) === null || n === void 0 ? void 0 : n.props[pv]) || ["CLS", "FCP", "INP", "LCP"] : r;
                    },
                },
                {
                    key: "_maxAllowedValue",
                    get: function () {
                        var t = Me(this.instance.config.capture_performance) && _t(this.instance.config.capture_performance.__web_vitals_max_value) ? this.instance.config.capture_performance.__web_vitals_max_value : Gv;
                        return 0 < t && t <= 6e4 ? Gv : t;
                    },
                },
                {
                    key: "isEnabled",
                    get: function () {
                        var t = Me(this.instance.config.capture_performance) ? this.instance.config.capture_performance.web_vitals : void 0;
                        return Tr(t) ? t : this._enabledServerSide;
                    },
                },
                {
                    key: "startIfEnabled",
                    value: function () {
                        this.isEnabled && !this._initialized && (I.info(Sr + " enabled, starting..."), this.loadScript(this._startCapturing));
                    },
                },
                {
                    key: "afterDecideResponse",
                    value: function (t) {
                        var n = Me(t.capturePerformance) && !!t.capturePerformance.web_vitals,
                            r = Me(t.capturePerformance) ? t.capturePerformance.web_vitals_allowed_metrics : void 0;
                        this.instance.persistence && (this.instance.persistence.register(k({}, fv, n)), this.instance.persistence.register(k({}, pv, r))), (this._enabledServerSide = n), this.startIfEnabled();
                    },
                },
                {
                    key: "loadScript",
                    value: function (t) {
                        var n, r, i;
                        (n = ne.__PosthogExtensions__) !== null && n !== void 0 && n.postHogWebVitalsCallbacks && t(),
                            (r = ne.__PosthogExtensions__) === null ||
                                r === void 0 ||
                                (i = r.loadExternalDependency) === null ||
                                i === void 0 ||
                                i.call(r, this.instance, "web-vitals", function (o) {
                                    o ? I.error(Sr + " failed to load script", o) : t();
                                });
                    },
                },
                {
                    key: "_currentURL",
                    value: function () {
                        var t = w ? w.location.href : void 0;
                        return t || I.error(Sr + "Could not determine current URL"), t;
                    },
                },
            ]),
            e
        );
    })(),
    eT = {
        icontains: function (e, t) {
            return !!w && t.href.toLowerCase().indexOf(e.toLowerCase()) > -1;
        },
        not_icontains: function (e, t) {
            return !!w && t.href.toLowerCase().indexOf(e.toLowerCase()) === -1;
        },
        regex: function (e, t) {
            return !!w && Yi(t.href, e);
        },
        not_regex: function (e, t) {
            return !!w && !Yi(t.href, e);
        },
        exact: function (e, t) {
            return t.href === e;
        },
        is_not: function (e, t) {
            return t.href !== e;
        },
    },
    tT = (function () {
        function e(t) {
            var n = this;
            ae(this, e),
                k(this, "getWebExperimentsAndEvaluateDisplayLogic", function () {
                    var r = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
                    n.getWebExperiments(function (i) {
                        e.logInfo("retrieved web experiments from the server"),
                            (n._flagToExperiments = new Map()),
                            i.forEach(function (o) {
                                if (o.feature_flag_key && n._featureFlags && n._featureFlags[o.feature_flag_key]) {
                                    var s;
                                    n._flagToExperiments && (e.logInfo("setting flag key ", o.feature_flag_key, " to web experiment ", o), (s = n._flagToExperiments) === null || s === void 0 || s.set(o.feature_flag_key, o));
                                    var a = n._featureFlags[o.feature_flag_key];
                                    a && o.variants[a] && e.applyTransforms(o.name, a, o.variants[a].transforms);
                                } else if (o.variants)
                                    for (var l in o.variants) {
                                        var u = o.variants[l];
                                        e.matchesTestVariant(u) && e.applyTransforms(o.name, l, u.transforms);
                                    }
                            });
                    }, r);
                }),
                (this.instance = t),
                this.instance.onFeatureFlags &&
                    this.instance.onFeatureFlags(function (r) {
                        n.applyFeatureFlagChanges(r);
                    }),
                (this._flagToExperiments = new Map());
        }
        return (
            le(
                e,
                [
                    {
                        key: "applyFeatureFlagChanges",
                        value: function (t) {
                            var n = this;
                            e.logInfo("applying feature flags", t),
                                Ae(this._flagToExperiments) ||
                                    this.instance.config.disable_web_experiments ||
                                    t.forEach(function (r) {
                                        var i;
                                        if (n._flagToExperiments && (i = n._flagToExperiments) !== null && i !== void 0 && i.has(r)) {
                                            var o,
                                                s = n.instance.getFeatureFlag(r),
                                                a = (o = n._flagToExperiments) === null || o === void 0 ? void 0 : o.get(r);
                                            s && a != null && a.variants[s] && e.applyTransforms(a.name, s, a.variants[s].transforms);
                                        }
                                    });
                        },
                    },
                    {
                        key: "afterDecideResponse",
                        value: function (t) {
                            (this._featureFlags = t.featureFlags), this.loadIfEnabled();
                        },
                    },
                    {
                        key: "loadIfEnabled",
                        value: function () {
                            this.instance.config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic();
                        },
                    },
                    {
                        key: "getWebExperiments",
                        value: function (t, n) {
                            if (this.instance.config.disable_web_experiments) return t([]);
                            var r = this.instance.get_property("$web_experiments");
                            if (r && !n) return t(r);
                            this.instance._send_request({
                                url: this.instance.requestRouter.endpointFor("api", "/api/web_experiments/?token=".concat(this.instance.config.token)),
                                method: "GET",
                                transport: "XHR",
                                callback: function (i) {
                                    if (i.statusCode !== 200 || !i.json) return t([]);
                                    var o = i.json.experiments || [];
                                    return t(o);
                                },
                            });
                        },
                    },
                ],
                [
                    {
                        key: "matchesTestVariant",
                        value: function (t) {
                            return !Ae(t.conditions) && e.matchUrlConditions(t) && e.matchUTMConditions(t);
                        },
                    },
                    {
                        key: "matchUrlConditions",
                        value: function (t) {
                            var n;
                            if (Ae(t.conditions) || Ae((n = t.conditions) === null || n === void 0 ? void 0 : n.url)) return !0;
                            var r,
                                i,
                                o,
                                s = e.getWindowLocation();
                            return (
                                !!s &&
                                ((r = t.conditions) === null || r === void 0 || !r.url || eT[(i = (o = t.conditions) === null || o === void 0 ? void 0 : o.urlMatchType) !== null && i !== void 0 ? i : "icontains"](t.conditions.url, s))
                            );
                        },
                    },
                    {
                        key: "getWindowLocation",
                        value: function () {
                            return w == null ? void 0 : w.location;
                        },
                    },
                    {
                        key: "matchUTMConditions",
                        value: function (t) {
                            var n;
                            if (Ae(t.conditions) || Ae((n = t.conditions) === null || n === void 0 ? void 0 : n.utm)) return !0;
                            var r = xe.campaignParams();
                            if (r.utm_source) {
                                var i,
                                    o,
                                    s,
                                    a,
                                    l,
                                    u,
                                    c,
                                    d,
                                    f,
                                    p,
                                    m,
                                    v,
                                    O,
                                    g,
                                    h,
                                    _,
                                    y =
                                        (i = t.conditions) === null ||
                                        i === void 0 ||
                                        (o = i.utm) === null ||
                                        o === void 0 ||
                                        !o.utm_campaign ||
                                        ((s = t.conditions) === null || s === void 0 || (a = s.utm) === null || a === void 0 ? void 0 : a.utm_campaign) == r.utm_campaign,
                                    P =
                                        (l = t.conditions) === null ||
                                        l === void 0 ||
                                        (u = l.utm) === null ||
                                        u === void 0 ||
                                        !u.utm_source ||
                                        ((c = t.conditions) === null || c === void 0 || (d = c.utm) === null || d === void 0 ? void 0 : d.utm_source) == r.utm_source,
                                    N =
                                        (f = t.conditions) === null ||
                                        f === void 0 ||
                                        (p = f.utm) === null ||
                                        p === void 0 ||
                                        !p.utm_medium ||
                                        ((m = t.conditions) === null || m === void 0 || (v = m.utm) === null || v === void 0 ? void 0 : v.utm_medium) == r.utm_medium,
                                    $ =
                                        (O = t.conditions) === null ||
                                        O === void 0 ||
                                        (g = O.utm) === null ||
                                        g === void 0 ||
                                        !g.utm_term ||
                                        ((h = t.conditions) === null || h === void 0 || (_ = h.utm) === null || _ === void 0 ? void 0 : _.utm_term) == r.utm_term;
                                return y && N && $ && P;
                            }
                            return !1;
                        },
                    },
                    {
                        key: "logInfo",
                        value: function (t) {
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                            I.info("[WebExperiments] ".concat(t), r);
                        },
                    },
                    {
                        key: "applyTransforms",
                        value: function (t, n, r) {
                            r.forEach(function (i) {
                                if (i.selector) {
                                    var o;
                                    e.logInfo("applying transform of variant ".concat(n, " for experiment ").concat(t, " "), i);
                                    var s = (o = document) === null || o === void 0 ? void 0 : o.querySelectorAll(i.selector);
                                    s == null ||
                                        s.forEach(function (a) {
                                            var l = a;
                                            i.attributes &&
                                                i.attributes.forEach(function (u) {
                                                    switch (u.name) {
                                                        case "text":
                                                            l.innerText = u.value;
                                                            break;
                                                        case "html":
                                                            l.innerHTML = u.value;
                                                            break;
                                                        case "cssClass":
                                                            l.className = u.value;
                                                            break;
                                                        default:
                                                            l.setAttribute(u.name, u.value);
                                                    }
                                                }),
                                                i.text && (l.innerText = i.text),
                                                i.html && (l.innerHTML = i.html),
                                                i.className && (l.className = i.className);
                                        });
                                }
                            });
                        },
                    },
                ]
            ),
            e
        );
    })(),
    qv = "/e/",
    nT = (function () {
        function e(t) {
            var n;
            ae(this, e), (this.instance = t), (this._endpointSuffix = ((n = this.instance.persistence) === null || n === void 0 ? void 0 : n.props[dv]) || qv);
        }
        return (
            le(e, [
                {
                    key: "endpoint",
                    get: function () {
                        return this.instance.requestRouter.endpointFor("api", this._endpointSuffix);
                    },
                },
                {
                    key: "afterDecideResponse",
                    value: function (t) {
                        var n = t.autocaptureExceptions;
                        (this._endpointSuffix = (Me(n) && n.endpoint) || qv), this.instance.persistence && this.instance.persistence.register(k({}, dv, this._endpointSuffix));
                    },
                },
                {
                    key: "sendExceptionEvent",
                    value: function (t) {
                        this.instance.capture("$exception", t, { _noTruncate: !0, _batchKey: "exceptionEvent", _url: this.endpoint });
                    },
                },
            ]),
            e
        );
    })(),
    Go = {},
    Qv = function () {},
    ai = "posthog",
    q0 = !xR && ($e == null ? void 0 : $e.indexOf("MSIE")) === -1 && ($e == null ? void 0 : $e.indexOf("Mozilla")) === -1,
    Yv = function () {
        var e, t, n;
        return {
            api_host: "https://us.i.posthog.com",
            ui_host: null,
            token: "",
            autocapture: !0,
            rageclick: !0,
            cross_subdomain_cookie: ((t = H == null ? void 0 : H.location), (n = t == null ? void 0 : t.hostname), !!Je(n) && n.split(".").slice(-2).join(".") !== "herokuapp.com"),
            persistence: "localStorage+cookie",
            persistence_name: "",
            loaded: Qv,
            store_google: !0,
            custom_campaign_params: [],
            custom_blocked_useragents: [],
            save_referrer: !0,
            capture_pageview: !0,
            capture_pageleave: "if_capture_pageview",
            debug: (at && Je(at == null ? void 0 : at.search) && at.search.indexOf("__posthog_debug=true") !== -1) || !1,
            verbose: !1,
            cookie_expiration: 365,
            upgrade: !1,
            disable_session_recording: !1,
            disable_persistence: !1,
            disable_web_experiments: !0,
            disable_surveys: !1,
            enable_recording_console_log: void 0,
            secure_cookie: (w == null || (e = w.location) === null || e === void 0 ? void 0 : e.protocol) === "https:",
            ip: !0,
            opt_out_capturing_by_default: !1,
            opt_out_persistence_by_default: !1,
            opt_out_useragent_filter: !1,
            opt_out_capturing_persistence_type: "localStorage",
            opt_out_capturing_cookie_prefix: null,
            opt_in_site_apps: !1,
            property_denylist: [],
            respect_dnt: !1,
            sanitize_properties: null,
            request_headers: {},
            inapp_protocol: "//",
            inapp_link_new_window: !1,
            request_batching: !0,
            properties_string_max_length: 65535,
            session_recording: {},
            mask_all_element_attributes: !1,
            mask_all_text: !1,
            advanced_disable_decide: !1,
            advanced_disable_feature_flags: !1,
            advanced_disable_feature_flags_on_first_load: !1,
            advanced_disable_toolbar_metrics: !1,
            feature_flag_request_timeout_ms: 3e3,
            on_request_error: function (r) {
                var i = "Bad HTTP status: " + r.statusCode + " " + r.text;
                I.error(i);
            },
            get_device_id: function (r) {
                return r;
            },
            _onCapture: Qv,
            capture_performance: void 0,
            name: "posthog",
            bootstrap: {},
            disable_compression: !1,
            session_idle_timeout_seconds: 1800,
            person_profiles: "always",
            __add_tracing_headers: !1,
        };
    },
    Kv = function (e) {
        var t = {};
        q(e.process_person) || (t.person_profiles = e.process_person),
            q(e.xhr_headers) || (t.request_headers = e.xhr_headers),
            q(e.cookie_name) || (t.persistence_name = e.cookie_name),
            q(e.disable_cookie) || (t.disable_persistence = e.disable_cookie);
        var n = rt({}, t, e);
        return (
            Le(e.property_blacklist) &&
                (q(e.property_denylist)
                    ? (n.property_denylist = e.property_blacklist)
                    : Le(e.property_denylist)
                    ? (n.property_denylist = [].concat(Dn(e.property_blacklist), Dn(e.property_denylist)))
                    : I.error("Invalid value for property_denylist config: " + e.property_denylist)),
            n
        );
    },
    rT = (function () {
        function e() {
            ae(this, e), k(this, "__forceAllowLocalhost", !1);
        }
        return (
            le(e, [
                {
                    key: "_forceAllowLocalhost",
                    get: function () {
                        return this.__forceAllowLocalhost;
                    },
                    set: function (t) {
                        I.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), (this.__forceAllowLocalhost = t);
                    },
                },
            ]),
            e
        );
    })(),
    Q0 = (function () {
        function e() {
            var t = this;
            ae(this, e),
                k(this, "webPerformance", new rT()),
                k(this, "version", Gn.LIB_VERSION),
                k(this, "_internalEventEmitter", new W0()),
                (this.config = Yv()),
                (this.decideEndpointWasHit = !1),
                (this.SentryIntegration = FR),
                (this.sentryIntegration = function (n) {
                    return (function (r, i) {
                        var o = H0(r, i);
                        return {
                            name: z0,
                            processEvent: function (s) {
                                return o(s);
                            },
                        };
                    })(t, n);
                }),
                (this.__request_queue = []),
                (this.__loaded = !1),
                (this.analyticsDefaultEndpoint = "/e/"),
                (this._initialPageviewCaptured = !1),
                (this.featureFlags = new MC(this)),
                (this.toolbar = new SR(this)),
                (this.scrollManager = new QR(this)),
                (this.pageViewManager = new UR(this)),
                (this.surveys = new VR(this)),
                (this.experiments = new tT(this)),
                (this.exceptions = new nT(this)),
                (this.rateLimiter = new zR(this)),
                (this.requestRouter = new MR(this)),
                (this.consent = new XR(this)),
                (this.people = {
                    set: function (n, r, i) {
                        var o = Je(n) ? k({}, n, r) : n;
                        t.setPersonProperties(o), i == null || i({});
                    },
                    set_once: function (n, r, i) {
                        var o = Je(n) ? k({}, n, r) : n;
                        t.setPersonProperties(void 0, o), i == null || i({});
                    },
                }),
                this.on("eventCaptured", function (n) {
                    return I.info("send", n);
                });
        }
        return (
            le(e, [
                {
                    key: "init",
                    value: function (t, n, r) {
                        if (r && r !== ai) {
                            var i,
                                o = (i = Go[r]) !== null && i !== void 0 ? i : new e();
                            return o._init(t, n, r), (Go[r] = o), (Go[ai][r] = o), o;
                        }
                        return this._init(t, n, r);
                    },
                },
                {
                    key: "_init",
                    value: function (t) {
                        var n,
                            r,
                            i = this,
                            o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                            s = arguments.length > 2 ? arguments[2] : void 0;
                        if (q(t) || rv(t)) return I.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
                        if (this.__loaded) return I.warn("You have already initialized PostHog! Re-initializing is a no-op"), this;
                        (this.__loaded = !0),
                            (this.config = {}),
                            (this._triggered_notifs = []),
                            this.set_config(rt({}, Yv(), Kv(o), { name: s, token: t })),
                            this.config.on_xhr_error && I.error("[posthog] on_xhr_error is deprecated. Use on_request_error instead"),
                            (this.compression = o.disable_compression ? void 0 : Yt.GZipJS),
                            (this.persistence = new Qu(this.config)),
                            (this.sessionPersistence = this.config.persistence === "sessionStorage" ? this.persistence : new Qu(j(j({}, this.config), {}, { persistence: "sessionStorage" })));
                        var a = j({}, this.persistence.props),
                            l = j({}, this.sessionPersistence.props);
                        if (
                            ((this._requestQueue = new ER(function (h) {
                                return i._send_retriable_request(h);
                            })),
                            (this._retryQueue = new NR(this)),
                            (this.__request_queue = []),
                            (this.sessionManager = new LR(this.config, this.persistence)),
                            (this.sessionPropsManager = new WR(this.sessionManager, this.persistence)),
                            new KR(this).startIfEnabledOrStop(),
                            (this.sessionRecording = new mR(this)),
                            this.sessionRecording.startIfEnabledOrStop(),
                            this.config.disable_scroll_properties || this.scrollManager.startMeasuringScrollPosition(),
                            (this.autocapture = new YR(this)),
                            this.autocapture.startIfEnabled(),
                            this.surveys.loadIfEnabled(),
                            (this.heatmaps = new qR(this)),
                            this.heatmaps.startIfEnabled(),
                            (this.webVitalsAutocapture = new ZR(this)),
                            (this.exceptionObserver = new JR(this)),
                            this.exceptionObserver.startIfEnabled(),
                            (Gn.DEBUG = Gn.DEBUG || this.config.debug),
                            Gn.DEBUG && I.info("Starting in debug mode", { this: this, config: o, thisC: j({}, this.config), p: a, s: l }),
                            this._sync_opt_out_with_persistence(),
                            ((n = o.bootstrap) === null || n === void 0 ? void 0 : n.distinctID) !== void 0)
                        ) {
                            var u,
                                c,
                                d = this.config.get_device_id(er()),
                                f = (u = o.bootstrap) !== null && u !== void 0 && u.isIdentifiedID ? d : o.bootstrap.distinctID;
                            this.persistence.set_property(En, (c = o.bootstrap) !== null && c !== void 0 && c.isIdentifiedID ? "identified" : "anonymous"), this.register({ distinct_id: o.bootstrap.distinctID, $device_id: f });
                        }
                        if (this._hasBootstrappedFeatureFlags()) {
                            var p,
                                m,
                                v = Object.keys(((p = o.bootstrap) === null || p === void 0 ? void 0 : p.featureFlags) || {})
                                    .filter(function (h) {
                                        var _, y;
                                        return !((_ = o.bootstrap) === null || _ === void 0 || (y = _.featureFlags) === null || y === void 0 || !y[h]);
                                    })
                                    .reduce(function (h, _) {
                                        var y, P;
                                        return (h[_] = ((y = o.bootstrap) === null || y === void 0 || (P = y.featureFlags) === null || P === void 0 ? void 0 : P[_]) || !1), h;
                                    }, {}),
                                O = Object.keys(((m = o.bootstrap) === null || m === void 0 ? void 0 : m.featureFlagPayloads) || {})
                                    .filter(function (h) {
                                        return v[h];
                                    })
                                    .reduce(function (h, _) {
                                        var y, P, N, $;
                                        return (
                                            (y = o.bootstrap) !== null &&
                                                y !== void 0 &&
                                                (P = y.featureFlagPayloads) !== null &&
                                                P !== void 0 &&
                                                P[_] &&
                                                (h[_] = (N = o.bootstrap) === null || N === void 0 || ($ = N.featureFlagPayloads) === null || $ === void 0 ? void 0 : $[_]),
                                            h
                                        );
                                    }, {});
                            this.featureFlags.receivedFeatureFlags({ featureFlags: v, featureFlagPayloads: O });
                        }
                        if (!this.get_distinct_id()) {
                            var g = this.config.get_device_id(er());
                            this.register_once({ distinct_id: g, $device_id: g }, ""), this.persistence.set_property(En, "anonymous");
                        }
                        return (
                            w == null || (r = w.addEventListener) === null || r === void 0 || r.call(w, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this)),
                            this.toolbar.maybeLoadToolbar(),
                            o.segment
                                ? $R(this, function () {
                                      return i._loaded();
                                  })
                                : this._loaded(),
                            Dt(this.config._onCapture) &&
                                this.on("eventCaptured", function (h) {
                                    return i.config._onCapture(h.event, h);
                                }),
                            this
                        );
                    },
                },
                {
                    key: "_afterDecideResponse",
                    value: function (t) {
                        var n, r, i, o, s, a, l, u, c;
                        (this.compression = void 0),
                            t.supportedCompression && !this.config.disable_compression && (this.compression = ie(t.supportedCompression, Yt.GZipJS) ? Yt.GZipJS : ie(t.supportedCompression, Yt.Base64) ? Yt.Base64 : void 0),
                            (n = t.analytics) !== null && n !== void 0 && n.endpoint && (this.analyticsDefaultEndpoint = t.analytics.endpoint),
                            (r = this.sessionRecording) === null || r === void 0 || r.afterDecideResponse(t),
                            (i = this.autocapture) === null || i === void 0 || i.afterDecideResponse(t),
                            (o = this.heatmaps) === null || o === void 0 || o.afterDecideResponse(t),
                            (s = this.experiments) === null || s === void 0 || s.afterDecideResponse(t),
                            (a = this.surveys) === null || a === void 0 || a.afterDecideResponse(t),
                            (l = this.webVitalsAutocapture) === null || l === void 0 || l.afterDecideResponse(t),
                            (u = this.exceptions) === null || u === void 0 || u.afterDecideResponse(t),
                            (c = this.exceptionObserver) === null || c === void 0 || c.afterDecideResponse(t);
                    },
                },
                {
                    key: "_loaded",
                    value: function () {
                        var t = this,
                            n = this.config.advanced_disable_decide;
                        n || this.featureFlags.setReloadingPaused(!0);
                        try {
                            this.config.loaded(this);
                        } catch (r) {
                            I.critical("`loaded` function failed", r);
                        }
                        this._start_queue_if_opted_in(),
                            this.config.capture_pageview &&
                                setTimeout(function () {
                                    t.consent.isOptedIn() && t._captureInitialPageview();
                                }, 1),
                            n || (new yR(this).call(), this.featureFlags.resetRequestQueue());
                    },
                },
                {
                    key: "_start_queue_if_opted_in",
                    value: function () {
                        var t;
                        this.has_opted_out_capturing() || (this.config.request_batching && ((t = this._requestQueue) === null || t === void 0 || t.enable()));
                    },
                },
                {
                    key: "_dom_loaded",
                    value: function () {
                        var t = this;
                        this.has_opted_out_capturing() ||
                            Ii(this.__request_queue, function (n) {
                                return t._send_retriable_request(n);
                            }),
                            (this.__request_queue = []),
                            this._start_queue_if_opted_in();
                    },
                },
                {
                    key: "_handle_unload",
                    value: function () {
                        var t, n;
                        this.config.request_batching
                            ? (this._shouldCapturePageleave() && this.capture("$pageleave"), (t = this._requestQueue) === null || t === void 0 || t.unload(), (n = this._retryQueue) === null || n === void 0 || n.unload())
                            : this._shouldCapturePageleave() && this.capture("$pageleave", null, { transport: "sendBeacon" });
                    },
                },
                {
                    key: "_send_request",
                    value: function (t) {
                        var n = this;
                        this.__loaded &&
                            (q0
                                ? this.__request_queue.push(t)
                                : this.rateLimiter.isServerRateLimited(t.batchKey) ||
                                  ((t.transport = t.transport || this.config.api_transport),
                                  (t.url = bl(t.url, { ip: this.config.ip ? 1 : 0 })),
                                  (t.headers = j({}, this.config.request_headers)),
                                  (t.compression = t.compression === "best-available" ? this.compression : t.compression),
                                  (function (r) {
                                      var i,
                                          o,
                                          s,
                                          a = j({}, r);
                                      (a.timeout = a.timeout || 6e4), (a.url = bl(a.url, { _: new Date().getTime().toString(), ver: Gn.LIB_VERSION, compression: a.compression }));
                                      var l = (i = a.transport) !== null && i !== void 0 ? i : "XHR",
                                          u =
                                              (o =
                                                  (s = d0(Wo, function (c) {
                                                      return c.transport === l;
                                                  })) === null || s === void 0
                                                      ? void 0
                                                      : s.method) !== null && o !== void 0
                                                  ? o
                                                  : Wo[0].method;
                                      if (!u) throw new Error("No available transport method");
                                      u(a);
                                  })(
                                      j(
                                          j({}, t),
                                          {},
                                          {
                                              callback: function (r) {
                                                  var i, o, s;
                                                  n.rateLimiter.checkForLimiting(r),
                                                      r.statusCode >= 400 && ((o = (s = n.config).on_request_error) === null || o === void 0 || o.call(s, r)),
                                                      (i = t.callback) === null || i === void 0 || i.call(t, r);
                                              },
                                          }
                                      )
                                  )));
                    },
                },
                {
                    key: "_send_retriable_request",
                    value: function (t) {
                        this._retryQueue ? this._retryQueue.retriableRequest(t) : this._send_request(t);
                    },
                },
                {
                    key: "_execute_array",
                    value: function (t) {
                        var n,
                            r = this,
                            i = [],
                            o = [],
                            s = [];
                        Ii(t, function (l) {
                            l && ((n = l[0]), Le(n) ? s.push(l) : Dt(l) ? l.call(r) : Le(l) && n === "alias" ? i.push(l) : Le(l) && n.indexOf("capture") !== -1 && Dt(r[n]) ? s.push(l) : o.push(l));
                        });
                        var a = function (l, u) {
                            Ii(
                                l,
                                function (c) {
                                    if (Le(c[0])) {
                                        var d = u;
                                        he(c, function (f) {
                                            d = d[f[0]].apply(d, f.slice(1));
                                        });
                                    } else this[c[0]].apply(this, c.slice(1));
                                },
                                u
                            );
                        };
                        a(i, this), a(o, this), a(s, this);
                    },
                },
                {
                    key: "_hasBootstrappedFeatureFlags",
                    value: function () {
                        var t, n;
                        return (((t = this.config.bootstrap) === null || t === void 0 ? void 0 : t.featureFlags) && Object.keys((n = this.config.bootstrap) === null || n === void 0 ? void 0 : n.featureFlags).length > 0) || !1;
                    },
                },
                {
                    key: "push",
                    value: function (t) {
                        this._execute_array([t]);
                    },
                },
                {
                    key: "capture",
                    value: function (t, n, r) {
                        var i;
                        if (this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue) {
                            if (!this.consent.isOptedOut())
                                if (!q(t) && Je(t)) {
                                    if (this.config.opt_out_useragent_filter || !this._is_bot()) {
                                        var o = r != null && r.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
                                        if (o == null || !o.isRateLimited) {
                                            this.sessionPersistence.update_search_keyword(),
                                                this.config.store_google && this.sessionPersistence.update_campaign_params(),
                                                this.config.save_referrer && this.sessionPersistence.update_referrer_info(),
                                                (this.config.store_google || this.config.save_referrer) && this.persistence.set_initial_person_info();
                                            var s = new Date(),
                                                a = (r == null ? void 0 : r.timestamp) || s,
                                                l = { uuid: er(), event: t, properties: this._calculate_event_properties(t, n || {}, a) };
                                            o && (l.properties.$lib_rate_limit_remaining_tokens = o.remainingTokens), r != null && r.$set && (l.$set = r == null ? void 0 : r.$set);
                                            var u = this._calculate_set_once_properties(r == null ? void 0 : r.$set_once);
                                            u && (l.$set_once = u),
                                                ((l = DC(l, r != null && r._noTruncate ? null : this.config.properties_string_max_length)).timestamp = a),
                                                q(r == null ? void 0 : r.timestamp) || ((l.properties.$event_time_override_provided = !0), (l.properties.$event_time_override_system_time = s));
                                            var c = j(j({}, l.properties.$set), l.$set);
                                            Ta(c) || this.setPersonPropertiesForFlags(c), this._internalEventEmitter.emit("eventCaptured", l);
                                            var d = {
                                                method: "POST",
                                                url: (i = r == null ? void 0 : r._url) !== null && i !== void 0 ? i : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
                                                data: l,
                                                compression: "best-available",
                                                batchKey: r == null ? void 0 : r._batchKey,
                                            };
                                            return !this.config.request_batching || (r && (r == null || !r._batchKey)) || (r != null && r.send_instantly) ? this._send_retriable_request(d) : this._requestQueue.enqueue(d), l;
                                        }
                                        I.critical("This capture call is ignored due to client rate limiting.");
                                    }
                                } else I.error("No event name provided to posthog.capture");
                        } else I.uninitializedWarning("posthog.capture");
                    },
                },
                {
                    key: "_addCaptureHook",
                    value: function (t) {
                        return this.on("eventCaptured", function (n) {
                            return t(n.event, n);
                        });
                    },
                },
                {
                    key: "_calculate_event_properties",
                    value: function (t, n, r) {
                        if (((r = r || new Date()), !this.persistence || !this.sessionPersistence)) return n;
                        var i = this.persistence.remove_event_timer(t),
                            o = j({}, n);
                        if (((o.token = this.config.token), t === "$snapshot")) {
                            var s = j(j({}, this.persistence.properties()), this.sessionPersistence.properties());
                            return (o.distinct_id = s.distinct_id), ((!Je(o.distinct_id) && !_t(o.distinct_id)) || rv(o.distinct_id)) && I.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), o;
                        }
                        var a = xe.properties();
                        if (this.sessionManager) {
                            var l = this.sessionManager.checkAndGetSessionAndWindowId(),
                                u = l.sessionId,
                                c = l.windowId;
                            (o.$session_id = u), (o.$window_id = c);
                        }
                        if (
                            (this.requestRouter.region === Ir.CUSTOM && (o.$lib_custom_api_host = this.config.api_host),
                            this.sessionPropsManager && this.config.__preview_send_client_session_params && (t === "$pageview" || t === "$pageleave" || t === "$autocapture"))
                        ) {
                            var d = this.sessionPropsManager.getSessionProps();
                            o = rt(o, d);
                        }
                        if (!this.config.disable_scroll_properties) {
                            var f = {};
                            t === "$pageview" ? (f = this.pageViewManager.doPageView(r)) : t === "$pageleave" && (f = this.pageViewManager.doPageLeave(r)), (o = rt(o, f));
                        }
                        if ((t === "$pageview" && H && (o.title = H.title), !q(i))) {
                            var p = r.getTime() - i;
                            o.$duration = parseFloat((p / 1e3).toFixed(3));
                        }
                        $e && this.config.opt_out_useragent_filter && (o.$browser_type = this._is_bot() ? "bot" : "browser"),
                            ((o = rt({}, a, this.persistence.properties(), this.sessionPersistence.properties(), o)).$is_identified = this._isIdentified()),
                            Le(this.config.property_denylist)
                                ? he(this.config.property_denylist, function (v) {
                                      delete o[v];
                                  })
                                : I.error("Invalid value for property_denylist config: " + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
                        var m = this.config.sanitize_properties;
                        return m && (o = m(o, t)), (o.$process_person_profile = this._hasPersonProcessing()), o;
                    },
                },
                {
                    key: "_calculate_set_once_properties",
                    value: function (t) {
                        if (!this.persistence || !this._hasPersonProcessing()) return t;
                        var n = rt({}, this.persistence.get_initial_props(), t || {});
                        return Ta(n) ? void 0 : n;
                    },
                },
                {
                    key: "register",
                    value: function (t, n) {
                        var r;
                        (r = this.persistence) === null || r === void 0 || r.register(t, n);
                    },
                },
                {
                    key: "register_once",
                    value: function (t, n, r) {
                        var i;
                        (i = this.persistence) === null || i === void 0 || i.register_once(t, n, r);
                    },
                },
                {
                    key: "register_for_session",
                    value: function (t) {
                        var n;
                        (n = this.sessionPersistence) === null || n === void 0 || n.register(t);
                    },
                },
                {
                    key: "unregister",
                    value: function (t) {
                        var n;
                        (n = this.persistence) === null || n === void 0 || n.unregister(t);
                    },
                },
                {
                    key: "unregister_for_session",
                    value: function (t) {
                        var n;
                        (n = this.sessionPersistence) === null || n === void 0 || n.unregister(t);
                    },
                },
                {
                    key: "_register_single",
                    value: function (t, n) {
                        this.register(k({}, t, n));
                    },
                },
                {
                    key: "getFeatureFlag",
                    value: function (t, n) {
                        return this.featureFlags.getFeatureFlag(t, n);
                    },
                },
                {
                    key: "getFeatureFlagPayload",
                    value: function (t) {
                        var n = this.featureFlags.getFeatureFlagPayload(t);
                        try {
                            return JSON.parse(n);
                        } catch {
                            return n;
                        }
                    },
                },
                {
                    key: "isFeatureEnabled",
                    value: function (t, n) {
                        return this.featureFlags.isFeatureEnabled(t, n);
                    },
                },
                {
                    key: "reloadFeatureFlags",
                    value: function () {
                        this.featureFlags.reloadFeatureFlags();
                    },
                },
                {
                    key: "updateEarlyAccessFeatureEnrollment",
                    value: function (t, n) {
                        this.featureFlags.updateEarlyAccessFeatureEnrollment(t, n);
                    },
                },
                {
                    key: "getEarlyAccessFeatures",
                    value: function (t) {
                        var n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
                        return this.featureFlags.getEarlyAccessFeatures(t, n);
                    },
                },
                {
                    key: "on",
                    value: function (t, n) {
                        return this._internalEventEmitter.on(t, n);
                    },
                },
                {
                    key: "onFeatureFlags",
                    value: function (t) {
                        return this.featureFlags.onFeatureFlags(t);
                    },
                },
                {
                    key: "onSessionId",
                    value: function (t) {
                        var n, r;
                        return (n = (r = this.sessionManager) === null || r === void 0 ? void 0 : r.onSessionId(t)) !== null && n !== void 0 ? n : function () {};
                    },
                },
                {
                    key: "getSurveys",
                    value: function (t) {
                        var n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
                        this.surveys.getSurveys(t, n);
                    },
                },
                {
                    key: "getActiveMatchingSurveys",
                    value: function (t) {
                        var n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
                        this.surveys.getActiveMatchingSurveys(t, n);
                    },
                },
                {
                    key: "renderSurvey",
                    value: function (t, n) {
                        this.surveys.renderSurvey(t, n);
                    },
                },
                {
                    key: "canRenderSurvey",
                    value: function (t) {
                        this.surveys.canRenderSurvey(t);
                    },
                },
                {
                    key: "getNextSurveyStep",
                    value: function (t, n, r) {
                        return this.surveys.getNextSurveyStep(t, n, r);
                    },
                },
                {
                    key: "identify",
                    value: function (t, n, r) {
                        if (!this.__loaded || !this.persistence) return I.uninitializedWarning("posthog.identify");
                        if ((_t(t) && ((t = t.toString()), I.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), t)) {
                            if (["distinct_id", "distinctid"].includes(t.toLowerCase()))
                                I.critical('The string "'.concat(t, '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'));
                            else if (this._requirePersonProcessing("posthog.identify")) {
                                var i = this.get_distinct_id();
                                if ((this.register({ $user_id: t }), !this.get_property("$device_id"))) {
                                    var o = i;
                                    this.register_once({ $had_persisted_distinct_id: !0, $device_id: o }, "");
                                }
                                t !== i && t !== this.get_property(Oo) && (this.unregister(Oo), this.register({ distinct_id: t }));
                                var s = (this.persistence.get_property(En) || "anonymous") === "anonymous";
                                t !== i && s
                                    ? (this.persistence.set_property(En, "identified"),
                                      this.setPersonPropertiesForFlags(n || {}, !1),
                                      this.capture("$identify", { distinct_id: t, $anon_distinct_id: i }, { $set: n || {}, $set_once: r || {} }),
                                      this.featureFlags.setAnonymousDistinctId(i))
                                    : (n || r) && this.setPersonProperties(n, r),
                                    t !== i && (this.reloadFeatureFlags(), this.unregister(gl));
                            }
                        } else I.error("Unique user id has not been set in posthog.identify");
                    },
                },
                {
                    key: "setPersonProperties",
                    value: function (t, n) {
                        (t || n) && this._requirePersonProcessing("posthog.setPersonProperties") && (this.setPersonPropertiesForFlags(t || {}), this.capture("$set", { $set: t || {}, $set_once: n || {} }));
                    },
                },
                {
                    key: "group",
                    value: function (t, n, r) {
                        if (t && n) {
                            if (this._requirePersonProcessing("posthog.group")) {
                                var i = this.getGroups();
                                i[t] !== n && this.resetGroupPropertiesForFlags(t),
                                    this.register({ $groups: j(j({}, i), {}, k({}, t, n)) }),
                                    r && (this.capture("$groupidentify", { $group_type: t, $group_key: n, $group_set: r }), this.setGroupPropertiesForFlags(k({}, t, r))),
                                    i[t] === n || r || this.reloadFeatureFlags();
                            }
                        } else I.error("posthog.group requires a group type and group key");
                    },
                },
                {
                    key: "resetGroups",
                    value: function () {
                        this.register({ $groups: {} }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags();
                    },
                },
                {
                    key: "setPersonPropertiesForFlags",
                    value: function (t) {
                        var n = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
                        this._requirePersonProcessing("posthog.setPersonPropertiesForFlags") && this.featureFlags.setPersonPropertiesForFlags(t, n);
                    },
                },
                {
                    key: "resetPersonPropertiesForFlags",
                    value: function () {
                        this.featureFlags.resetPersonPropertiesForFlags();
                    },
                },
                {
                    key: "setGroupPropertiesForFlags",
                    value: function (t) {
                        var n = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
                        this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") && this.featureFlags.setGroupPropertiesForFlags(t, n);
                    },
                },
                {
                    key: "resetGroupPropertiesForFlags",
                    value: function (t) {
                        this.featureFlags.resetGroupPropertiesForFlags(t);
                    },
                },
                {
                    key: "reset",
                    value: function (t) {
                        var n, r, i, o;
                        if ((I.info("reset"), !this.__loaded)) return I.uninitializedWarning("posthog.reset");
                        var s = this.get_property("$device_id");
                        this.consent.reset(),
                            (n = this.persistence) === null || n === void 0 || n.clear(),
                            (r = this.sessionPersistence) === null || r === void 0 || r.clear(),
                            (i = this.persistence) === null || i === void 0 || i.set_property(En, "anonymous"),
                            (o = this.sessionManager) === null || o === void 0 || o.resetSessionId();
                        var a = this.config.get_device_id(er());
                        this.register_once({ distinct_id: a, $device_id: t ? a : s }, "");
                    },
                },
                {
                    key: "get_distinct_id",
                    value: function () {
                        return this.get_property("distinct_id");
                    },
                },
                {
                    key: "getGroups",
                    value: function () {
                        return this.get_property("$groups") || {};
                    },
                },
                {
                    key: "get_session_id",
                    value: function () {
                        var t, n;
                        return (t = (n = this.sessionManager) === null || n === void 0 ? void 0 : n.checkAndGetSessionAndWindowId(!0).sessionId) !== null && t !== void 0 ? t : "";
                    },
                },
                {
                    key: "get_session_replay_url",
                    value: function (t) {
                        if (!this.sessionManager) return "";
                        var n = this.sessionManager.checkAndGetSessionAndWindowId(!0),
                            r = n.sessionId,
                            i = n.sessionStartTimestamp,
                            o = this.requestRouter.endpointFor("ui", "/project/".concat(this.config.token, "/replay/").concat(r));
                        if (t != null && t.withTimestamp && i) {
                            var s,
                                a = (s = t.timestampLookBack) !== null && s !== void 0 ? s : 10;
                            if (!i) return o;
                            var l = Math.max(Math.floor((new Date().getTime() - i) / 1e3) - a, 0);
                            o += "?t=".concat(l);
                        }
                        return o;
                    },
                },
                {
                    key: "alias",
                    value: function (t, n) {
                        return t === this.get_property(f0)
                            ? (I.critical("Attempting to create alias for existing People user - aborting."), -2)
                            : this._requirePersonProcessing("posthog.alias")
                            ? (q(n) && (n = this.get_distinct_id()),
                              t !== n ? (this._register_single(Oo, t), this.capture("$create_alias", { alias: t, distinct_id: n })) : (I.warn("alias matches current distinct_id - skipping api call."), this.identify(t), -1))
                            : void 0;
                    },
                },
                {
                    key: "set_config",
                    value: function (t) {
                        var n,
                            r,
                            i,
                            o,
                            s = j({}, this.config);
                        Me(t) &&
                            (rt(this.config, Kv(t)),
                            (n = this.persistence) === null || n === void 0 || n.update_config(this.config, s),
                            (this.sessionPersistence = this.config.persistence === "sessionStorage" ? this.persistence : new Qu(j(j({}, this.config), {}, { persistence: "sessionStorage" }))),
                            Ne.is_supported() && Ne.get("ph_debug") === "true" && (this.config.debug = !0),
                            this.config.debug && ((Gn.DEBUG = !0), I.info("set_config", { config: t, oldConfig: s, newConfig: j({}, this.config) })),
                            (r = this.sessionRecording) === null || r === void 0 || r.startIfEnabledOrStop(),
                            (i = this.autocapture) === null || i === void 0 || i.startIfEnabled(),
                            (o = this.heatmaps) === null || o === void 0 || o.startIfEnabled(),
                            this.surveys.loadIfEnabled(),
                            this._sync_opt_out_with_persistence());
                    },
                },
                {
                    key: "startSessionRecording",
                    value: function (t) {
                        var n,
                            r = Tr(t) && t;
                        if (r || (t != null && t.sampling)) {
                            var i,
                                o,
                                s = (i = this.sessionManager) === null || i === void 0 ? void 0 : i.checkAndGetSessionAndWindowId();
                            (o = this.persistence) === null || o === void 0 || o.register(k({}, Vo, !0)), I.info("Session recording started with sampling override for session: ", s == null ? void 0 : s.sessionId);
                        }
                        (r || (t != null && t.linked_flag)) && ((n = this.sessionRecording) === null || n === void 0 || n.overrideLinkedFlag(), I.info("Session recording started with linked_flags override")),
                            this.set_config({ disable_session_recording: !1 });
                    },
                },
                {
                    key: "stopSessionRecording",
                    value: function () {
                        this.set_config({ disable_session_recording: !0 });
                    },
                },
                {
                    key: "sessionRecordingStarted",
                    value: function () {
                        var t;
                        return !((t = this.sessionRecording) === null || t === void 0 || !t.started);
                    },
                },
                {
                    key: "captureException",
                    value: function (t, n) {
                        var r,
                            i = Dt((r = ne.__PosthogExtensions__) === null || r === void 0 ? void 0 : r.parseErrorAsProperties)
                                ? ne.__PosthogExtensions__.parseErrorAsProperties([t.message, void 0, void 0, void 0, t])
                                : j({ $exception_type: t.name, $exception_message: t.message, $exception_level: "error" }, n);
                        this.exceptions.sendExceptionEvent(i);
                    },
                },
                {
                    key: "loadToolbar",
                    value: function (t) {
                        return this.toolbar.loadToolbar(t);
                    },
                },
                {
                    key: "get_property",
                    value: function (t) {
                        var n;
                        return (n = this.persistence) === null || n === void 0 ? void 0 : n.props[t];
                    },
                },
                {
                    key: "getSessionProperty",
                    value: function (t) {
                        var n;
                        return (n = this.sessionPersistence) === null || n === void 0 ? void 0 : n.props[t];
                    },
                },
                {
                    key: "toString",
                    value: function () {
                        var t,
                            n = (t = this.config.name) !== null && t !== void 0 ? t : ai;
                        return n !== ai && (n = ai + "." + n), n;
                    },
                },
                {
                    key: "_isIdentified",
                    value: function () {
                        var t, n;
                        return ((t = this.persistence) === null || t === void 0 ? void 0 : t.get_property(En)) === "identified" || ((n = this.sessionPersistence) === null || n === void 0 ? void 0 : n.get_property(En)) === "identified";
                    },
                },
                {
                    key: "_hasPersonProcessing",
                    value: function () {
                        var t, n, r, i;
                        return !(
                            this.config.person_profiles === "never" ||
                            (this.config.person_profiles === "identified_only" &&
                                !this._isIdentified() &&
                                Ta(this.getGroups()) &&
                                ((t = this.persistence) === null || t === void 0 || (n = t.props) === null || n === void 0 || !n[Oo]) &&
                                ((r = this.persistence) === null || r === void 0 || (i = r.props) === null || i === void 0 || !i[_l]))
                        );
                    },
                },
                {
                    key: "_shouldCapturePageleave",
                    value: function () {
                        return this.config.capture_pageleave === !0 || (this.config.capture_pageleave === "if_capture_pageview" && this.config.capture_pageview);
                    },
                },
                {
                    key: "createPersonProfile",
                    value: function () {
                        this._hasPersonProcessing() || (this._requirePersonProcessing("posthog.createPersonProfile") && this.setPersonProperties({}, {}));
                    },
                },
                {
                    key: "_requirePersonProcessing",
                    value: function (t) {
                        return this.config.person_profiles === "never" ? (I.error(t + ' was called, but process_person is set to "never". This call will be ignored.'), !1) : (this._register_single(_l, !0), !0);
                    },
                },
                {
                    key: "_sync_opt_out_with_persistence",
                    value: function () {
                        var t,
                            n,
                            r,
                            i,
                            o = this.consent.isOptedOut(),
                            s = this.config.opt_out_persistence_by_default,
                            a = this.config.disable_persistence || (o && !!s);
                        ((t = this.persistence) === null || t === void 0 ? void 0 : t.disabled) !== a && ((r = this.persistence) === null || r === void 0 || r.set_disabled(a)),
                            ((n = this.sessionPersistence) === null || n === void 0 ? void 0 : n.disabled) !== a && ((i = this.sessionPersistence) === null || i === void 0 || i.set_disabled(a));
                    },
                },
                {
                    key: "opt_in_capturing",
                    value: function (t) {
                        var n;
                        this.consent.optInOut(!0),
                            this._sync_opt_out_with_persistence(),
                            (q(t == null ? void 0 : t.captureEventName) || (t != null && t.captureEventName)) &&
                                this.capture((n = t == null ? void 0 : t.captureEventName) !== null && n !== void 0 ? n : "$opt_in", t == null ? void 0 : t.captureProperties, { send_instantly: !0 }),
                            this.config.capture_pageview && this._captureInitialPageview();
                    },
                },
                {
                    key: "opt_out_capturing",
                    value: function () {
                        this.consent.optInOut(!1), this._sync_opt_out_with_persistence();
                    },
                },
                {
                    key: "has_opted_in_capturing",
                    value: function () {
                        return this.consent.isOptedIn();
                    },
                },
                {
                    key: "has_opted_out_capturing",
                    value: function () {
                        return this.consent.isOptedOut();
                    },
                },
                {
                    key: "clear_opt_in_out_capturing",
                    value: function () {
                        this.consent.reset(), this._sync_opt_out_with_persistence();
                    },
                },
                {
                    key: "_is_bot",
                    value: function () {
                        return Kt
                            ? (function (t, n) {
                                  if (!t) return !1;
                                  var r = t.userAgent;
                                  if (r && Hv(r, n)) return !0;
                                  try {
                                      var i = t == null ? void 0 : t.userAgentData;
                                      if (
                                          i != null &&
                                          i.brands &&
                                          i.brands.some(function (o) {
                                              return Hv(o == null ? void 0 : o.brand, n);
                                          })
                                      )
                                          return !0;
                                  } catch {}
                                  return !!t.webdriver;
                              })(Kt, this.config.custom_blocked_useragents)
                            : void 0;
                    },
                },
                {
                    key: "_captureInitialPageview",
                    value: function () {
                        H && !this._initialPageviewCaptured && ((this._initialPageviewCaptured = !0), this.capture("$pageview", { title: H.title }, { send_instantly: !0 }));
                    },
                },
                {
                    key: "debug",
                    value: function (t) {
                        t === !1
                            ? (w == null || w.console.log("You've disabled debug mode."), localStorage && localStorage.removeItem("ph_debug"), this.set_config({ debug: !1 }))
                            : (w == null || w.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."),
                              localStorage && localStorage.setItem("ph_debug", "true"),
                              this.set_config({ debug: !0 }));
                    },
                },
            ]),
            e
        );
    })();
(function (e, t) {
    for (var n = 0; n < t.length; n++) e.prototype[t[n]] = xC(e.prototype[t[n]]);
})(Q0, ["identify"]);
var Xv,
    Da =
        ((Xv = Go[ai] = new Q0()),
        (function () {
            function e() {
                e.done ||
                    ((e.done = !0),
                    (q0 = !1),
                    he(Go, function (t) {
                        t._dom_loaded();
                    }));
            }
            H != null && H.addEventListener && (H.readyState === "complete" ? e() : H.addEventListener("DOMContentLoaded", e, !1)), w && On(w, "load", e, !0);
        })(),
        Xv),
    Y0 = A.createContext({ client: Da });
function iT(e) {
    var t = e.children,
        n = e.client,
        r = e.apiKey,
        i = e.options,
        o = A.useMemo(
            function () {
                return (
                    n && r && console.warn("[PostHog.js] You have provided both a client and an apiKey to PostHogProvider. The apiKey will be ignored in favour of the client."),
                    n && i && console.warn("[PostHog.js] You have provided both a client and options to PostHogProvider. The options will be ignored in favour of the client."),
                    n || (r && (Da.__loaded && console.warn("[PostHog.js] was already loaded elsewhere. This may cause issues."), Da.init(r, i)), Da)
                );
            },
            [n, r]
        );
    return qo.createElement(Y0.Provider, { value: { client: o } }, t);
}
var oT = function () {
    var e = A.useContext(Y0).client;
    return e;
};
function _N(e) {
    var t = oT(),
        n = A.useState(),
        r = n[0],
        i = n[1];
    return (
        A.useEffect(
            function () {
                return t.onFeatureFlags(function () {
                    i(t.getFeatureFlag(e));
                });
            },
            [t, e]
        ),
        r
    );
}
function sT({ children: e }) {
    return x.jsx(iT, { apiKey: ck, options: { api_host: "https://posthog.scrolller.com" }, children: e });
}
const Jv = ({ children: e }) => x.jsx(sT, { children: x.jsx(sw, { theme: CC, children: x.jsx(AC.Provider, { value: { size: "2em" }, children: e }) }) });
async function aT(e) {
    await de(
        `
  mutation sendSpeed ( $device: String!, $mean: Float!, $timeZone: String!, $userId: Int, $results: JSON!, $languages: JSON!, $videoMean:Float) {
    createLoading_speed(
      data: {
        device: $device
        mean: $mean
        time_zone: $timeZone
        user_id: $userId
        results: $results
        languages: $languages
        video_mean: $videoMean
      }
    ) {
      device
    }
  }
  `,
        e,
        { apiHost: "metrics" }
    );
}
const lT = window.navigator.platform,
    uT = Intl.DateTimeFormat().resolvedOptions().timeZone,
    cT = window.navigator.languages;
function dT() {
    return window.performance
        .getEntriesByType("resource")
        .filter((e) => (e.initiatorType === "video" || e.initiatorType === "img") && !e.name.includes("google-"))
        .map((e) => ({ type: e.initiatorType, loadingTime: Number(((e.responseEnd - e.startTime) / 1e3).toFixed(4)), url: e.name }));
}
function Zv(e) {
    return e.reduce((t, n) => t + Number(n.loadingTime), 0) / e.length;
}
function fT() {
    const e = dT(),
        t = e.filter((n) => n.type === "video");
    return { mean: Zv(e), videoMean: Zv(t), results: e };
}
function eg() {
    var e;
    return { device: lT, timeZone: uT, languages: cT, userId: (e = nn()) == null ? void 0 : e.id, ...fT() };
}
const pT = () => {
        Math.random() * 100 <= 1 && eg().results.length && setTimeout(async () => await aT(eg()), 2e4);
    },
    hT = A.memo(() =>
        x.jsxs("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 2891.85 869.89",
            className: "svg-logo",
            children: [
                x.jsx("title", { children: "Scrolller logo" }),
                x.jsx("text", { transform: "translate(16.01 749.31)", children: "s" }),
                x.jsx("text", { transform: "translate(406.86 749.63)", children: "c" }),
                x.jsx("text", { transform: "translate(804.31 749.48)", children: "r" }),
                x.jsx("text", { transform: "translate(1156.24 748.84)", children: "o" }),
                x.jsx("path", { d: "M1914.13,690.47V610.38h106V756.52a13.93,13.93,0,0,1-13.91,14h-78.17a13.93,13.93,0,0,1-13.92-14Z" }),
                x.jsx("path", { d: "M1914.13,171.63V105.57a13.93,13.93,0,0,1,13.92-13.94h78.17a13.93,13.93,0,0,1,13.91,13.94V593.15h-106Z" }),
                x.jsx("path", { d: "M1791.09,690.63V440.33h106V756.68a13.94,13.94,0,0,1-13.92,14H1805a13.93,13.93,0,0,1-13.91-14Z" }),
                x.jsx("path", { d: "M1791.09,171.78v-66a13.93,13.93,0,0,1,13.91-14h78.17a13.93,13.93,0,0,1,13.92,14V423.25h-106Z" }),
                x.jsx("path", { d: "M1668,690.63V268.89h106V756.68a13.93,13.93,0,0,1-13.91,14H1682a13.94,13.94,0,0,1-13.92-14Z" }),
                x.jsx("path", { d: "M1668,171.78v-66a13.93,13.93,0,0,1,13.92-14h78.17a13.93,13.93,0,0,1,13.91,14V251.78H1668Z" }),
                x.jsx("text", { transform: "translate(2100.43 751.32)", children: "e" }),
                x.jsx("text", { transform: "translate(2553.79 750.86)", children: "r" }),
            ],
        })
    ),
    K0 = hT,
    mN = Object.freeze(Object.defineProperty({ __proto__: null, default: K0 }, Symbol.toStringTag, { value: "Module" })),
    vT = ({ href: e, rel: t = "noopener nofollow", onClick: n, target: r = "_blank", children: i, ...o }) => {
        const s = (a) => {
            a.preventDefault(), a.stopPropagation(), window.open(e, r), qe.track("external-link-opened", { label: e }), n == null || n(a);
        };
        return x.jsx("a", { ...o, href: e, target: r, rel: t, onClick: s, children: i });
    },
    gT = vT,
    _T = Qr.button`
  display: flex;
  justify-content: center;
  background: ${({ bgColor: e, invert: t }) => (t ? "#fff" : e)};
  border-color: ${({ bgColor: e, invert: t }) => (t ? e : "#fff")};
  border-width: ${({ invert: e }) => (e ? "2px" : 0)};
  border-style: solid;
  align-items: center;
  transition-property: background-color, border-color, color, fill, stroke;
  transition-duration: 300ms;
  border-radius: 0.375rem;
  cursor: pointer;
  padding-right: clamp(15px, 5%, 50px);
  padding-left: clamp(15px, 5%, 50px);
  padding-bottom: clamp(5px, 1%, 5px);
  padding-top: clamp(5px, 1%, 5px);
  font-weight: 500;
  width: ${({ fullWidth: e }) => (e ? "100%" : "auto")};
  color: ${({ bgColor: e, invert: t }) => (t ? e : "#fff")};
  margin-bottom: 5px;
`,
    mT = (e) => {
        if (e.loading) return x.jsx(pl, {});
        if (e.iconAlign === "left" && e.icon) {
            const t = e.icon;
            return x.jsx(t, {});
        }
        return null;
    },
    yT = (e) => {
        if (e.iconAlign === "right" && e.icon) {
            const t = e.icon;
            return x.jsx(t, {});
        }
        return null;
    },
    wT = "_content_zj11r_1",
    ST = { content: wT },
    ET = ({ additionalStyles: e, variant: t = "primary", loading: n = !1, invert: r = !1, fullWidth: i = !1, bgColor: o, icon: s, iconAlign: a, ...l }) => {
        const u = A.useMemo(() => s, [s]),
            c = aw(),
            d = { primary: c.palette.pink, secondary: c.palette.green, tertiary: c.palette.indigo, blank: c.palette.midGray },
            f = { loading: n, icon: s, iconAlign: a };
        return x.jsxs(_T, {
            ...l,
            className: `${e}`,
            bgColor: o || d[t],
            invert: r,
            fullWidth: i,
            children: [
                t === "blank" && u ? x.jsx(u, {}) : x.jsxs(x.Fragment, { children: [x.jsx(mT, { ...f }), x.jsx("span", { className: ST.content, children: l.text }), x.jsx(yT, { ...f })] }),
                (l == null ? void 0 : l.additionalText) && x.jsx("p", { style: { margin: "0 10px" }, children: l.additionalText }),
            ],
        });
    },
    tg = (e) => {
        sd === e && (xn("dev_password", e), window.location.reload());
    },
    bT = gn("dev_password"),
    kT = () => {
        const [e, t] = A.useState("");
        return (
            A.useEffect(() => {
                const r = new URLSearchParams(window.location.search).get("dev_password") || "";
                tg(r);
            }, []),
            x.jsxs("div", {
                className: "not-found",
                children: [
                    x.jsx("div", { className: "not-found__text", children: "This page is for development and testing" }),
                    x.jsxs(gT, {
                        className: "not-found__link",
                        style: { height: "50px", display: "flex", flexDirection: "row", width: "500px", alignItems: "center", justifyContent: "center", fontSize: "30px", whiteSpace: "nowrap" },
                        href: "https://www.scrolller.com",
                        children: ["Visit main ", x.jsx(K0, {}), " page"],
                    }),
                    "If you're Scrolller developer - enter password",
                    x.jsx("input", { "data-test-id": "dev-password-input", onChange: (n) => t(n.target.value) }),
                    x.jsx(ET, { "data-test-id": "dev-password-submit", text: "Submit", onClick: () => tg(e) }),
                ],
            })
        );
    };
class PT {
    constructor() {
        S(this, "Files", {});
        S(this, "cancelFileUpload", (t) => {
            this.Files[t].xhr.abort(), this.removeFileUploadFromState(t);
        });
        S(this, "removeFileUploadFromState", (t) => {
            delete this.Files[t];
        });
        S(this, "uploadFile", async (t) => {
            const { fileKey: n, fileName: r, filePreviewSrc: i } = t,
                { requestData: o, uploadLink: s } = t.requestOptions,
                a = new XMLHttpRequest();
            return (
                (this.Files[n] = { key: n, name: r, progress: 0, totalSizeMB: "0", xhr: a, previewSrc: i }),
                new Promise((l, u) => {
                    a.upload.addEventListener("progress", (c) => {
                        const { loaded: d, total: f = 0 } = c,
                            p = Math.floor((d * 100) / f),
                            m = (f / 1024 / 1024).toFixed(2);
                        this.setProgress(n, p), this.setTotalSizeMB(n, m);
                    }),
                        a.addEventListener("load", () => l({ status: a.status, body: JSON.parse(a.responseText) })),
                        a.addEventListener("error", () => u(new Error("File upload failed"))),
                        a.addEventListener("abort", () => u(new Error("File upload aborted"))),
                        a.open("PUT", s, !0),
                        a.send(o);
                })
            );
        });
        S(this, "setProgress", (t, n) => {
            this.Files[t].progress = n;
        });
        S(this, "setTotalSizeMB", (t, n) => {
            this.Files[t].totalSizeMB = n;
        });
        S(this, "clearAllFiles", () => {
            this.Files = {};
        });
        ge(this, { Files: V, uploadFile: X.bound, clearAllFiles: X, cancelFileUpload: X, removeFileUploadFromState: X, getHasUploadingFiles: X.bound });
    }
    getHasUploadingFiles() {
        const t = this.Files;
        return Object.values(t).length >= 1;
    }
}
const so = new PT(),
    OT = () => so.Files,
    yN = (e) => so.Files[e],
    wN = (e) => so.uploadFile(e),
    SN = (e) => so.cancelFileUpload(e),
    EN = (e) => so.removeFileUploadFromState(e),
    AT = () => so.getHasUploadingFiles(),
    CT = Qr.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: e, isActive: t }) => (t ? e.palette.darkPinkMid : e.palette.blueGray)};
  border: ${({ theme: e, isActive: t }) => `1px solid ${t ? e.palette.darkRed : e.palette.darkGray}`};
  width: 42px;
  height: 42px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px -3.1496713161468506px 12.598685264587402px 0px #0000004d;

  ${({ theme: e }) => `
    @media ${e.breakpoints.tablet} {
      width: 62px;
      height: 62px;
      border-radius: 15px;
    }
  `}
`,
    RT = Qr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  ${({ theme: e }) => `
    @media ${e.breakpoints.tablet} {
      width: 34px;
      height: 34px;
    }
  `}
`;
function TT({ icon: e, isActive: t, name: n, onClick: r }) {
    return x.jsx(CT, { "aria-label": n, isActive: t, onClick: r, children: x.jsx(RT, { children: e }) });
}
const IT = Qr.div`
  z-index: ${({ theme: e }) => e.layout.zIndex.quickAccessButtons};
  display: flex;
  flex-direction: column;
  position: fixed;
  > * + * {
    margin-top: 8px;
  }
  right: 0;
  padding-right: 16px;
  padding-bottom: 16px;
  bottom: ${({ theme: e }) => e.layout.mainNavbar.height};

  ${({ theme: e }) => `
    @media ${e.breakpoints.tablet} {
      padding-bottom: 32px;
      padding-right: 40px;

      > * + * {
        margin-top: 12px;
      }
    }
  `}
`;
var ng, rg;
function Md() {
    return (
        (Md = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Md.apply(this, arguments)
    );
}
const xT = (e) =>
    A.createElement(
        "svg",
        Md({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", stroke: "currentColor", strokeWidth: 0, viewBox: "0 0 1024 1024" }, e),
        ng || (ng = A.createElement("path", { stroke: "none", d: "M518.3 459a8 8 0 0 0-12.6 0l-112 141.7a7.98 7.98 0 0 0 6.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9z" })),
        rg ||
            (rg = A.createElement("path", {
                stroke: "none",
                d:
                    "M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 0 1-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3",
            }))
    );
var ig, og, sg;
function Fd() {
    return (
        (Fd = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Fd.apply(this, arguments)
    );
}
const DT = (e) =>
    A.createElement(
        "svg",
        Fd({ xmlns: "http://www.w3.org/2000/svg", width: 34, height: 34, fill: "none", viewBox: "0 0 36 34" }, e),
        ig ||
            (ig = A.createElement("path", {
                fill: "#fff",
                d: "M27.55 14.524c.508-.07.867-.541.758-1.043a12.58 12.58 0 1 0-8.92 14.769c.494-.138.743-.674.57-1.157-.174-.482-.706-.729-1.202-.597a10.72 10.72 0 1 1 7.706-12.757c.115.5.58.856 1.088.785",
            })),
        og || (og = A.createElement("path", { stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.43, d: "m21.157 23.755 2.86 2.86 2.859-2.86m0-3.812-2.86-2.859-2.859 2.86" })),
        sg ||
            (sg = A.createElement("path", {
                fill: "#fff",
                d:
                    "M15.567 11.81v4.735l-2.838 2.795a1.03 1.03 0 0 0-.32.734 1.02 1.02 0 0 0 .307.739 1.05 1.05 0 0 0 .75.302 1.06 1.06 0 0 0 .745-.315l3.145-3.097c.197-.194.307-.456.307-.73V11.81c0-.274-.11-.536-.307-.73a1.057 1.057 0 0 0-1.482 0 1.02 1.02 0 0 0-.307.73",
            }))
    );
var ag;
function $d() {
    return (
        ($d = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        $d.apply(this, arguments)
    );
}
const NT = (e) =>
        A.createElement(
            "svg",
            $d({ xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "-4 -4 32 32" }, e),
            ag ||
                (ag = A.createElement("path", {
                    stroke: "#fff",
                    strokeLinecap: "round",
                    strokeWidth: 1.5,
                    d: "M4 5h6m0 0a2 2 0 1 0 4 0m-4 0a2 2 0 1 1 4 0m0 0h6M4 12h12m0 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm-8 7h12M8 19a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z",
                }))
        ),
    lg = ["touchmove"],
    LT = 2e3,
    ug = 50,
    MT = 250,
    cg = 1,
    FT = 30,
    dg = "SLIDESHOW_SPEED",
    ec = "SLIDESHOW_PLAY_ENTIRE_VIDEOS",
    $T = () => {
        const e = V({
                isPlaying: !1,
                speed: gn(dg) ?? 0.5,
                playEntireVideos: gn(ec) ?? !0,
                fullscreenState: null,
                lastStepTime: Date.now(),
                accumulatedScroll: 0,
                isSuspended: !1,
                slideshowHandle: null,
                scrollHandle: null,
                fadeHandle: null,
                suspenseHandler: null,
                isSlideshowSatisfied: !1,
                onSlideshowSatisfied: null,
            }),
            t = X(() => {
                if (
                    (window.clearTimeout(e.slideshowHandle ?? -1),
                    window.cancelAnimationFrame(e.scrollHandle ?? -1),
                    setTimeout(() => {
                        e.isSuspended = !1;
                    }),
                    (e.onSlideshowSatisfied = null),
                    (e.lastStepTime = Date.now()),
                    (e.accumulatedScroll = 0),
                    !e.isPlaying)
                )
                    return;
                const o = e.fullscreenState ? n : r,
                    s = (l) => {
                        if (e.fullscreenState) {
                            const u = cg + (1 - e.speed) * (FT - cg);
                            e.slideshowHandle = window.setTimeout(l, u * 1e3);
                            return;
                        }
                        e.scrollHandle = window.requestAnimationFrame(l);
                    },
                    a = () => {
                        const l = o();
                        switch (((e.lastStepTime = Date.now()), l)) {
                            case "continue":
                                s(a);
                                break;
                            case "reset":
                                t();
                                break;
                            case "break":
                                break;
                            case "stop":
                                (e.isPlaying = !1), t();
                                break;
                        }
                    };
                s(a);
            });
        L1(e, "fullscreenState", () => {
            t();
        });
        const n = () => {
                var o;
                return !e.isPlaying || !e.fullscreenState
                    ? "reset"
                    : e.fullscreenState && !e.fullscreenState.isNextPossible
                    ? "stop"
                    : e.playEntireVideos && !e.isSlideshowSatisfied && e.fullscreenState.activeEntry.itemState.displayType === Ut.VIDEO
                    ? ((e.onSlideshowSatisfied = X(() => {
                          var s;
                          (e.isSlideshowSatisfied = !1), (e.onSlideshowSatisfied = null), (s = e.fullscreenState) == null || s.next(), t();
                      })),
                      "break")
                    : ((e.isSlideshowSatisfied = !1), (e.onSlideshowSatisfied = null), (o = e.fullscreenState) == null || o.next(), "continue");
            },
            r = () => {
                if (!e.isPlaying || e.fullscreenState) return "reset";
                if (e.isSuspended || window.scrollY + window.innerHeight >= document.body.scrollHeight) return "continue";
                const s = (Date.now() - e.lastStepTime) / 1e3,
                    a = e.speed * (MT - ug) + ug;
                if (((e.accumulatedScroll += a * s), e.accumulatedScroll > 1)) {
                    const l = Math.floor(e.accumulatedScroll);
                    window.scrollBy(0, l), (e.accumulatedScroll -= l);
                }
                return "continue";
            },
            i = X(() => {
                console.log("suspend scrolling"),
                    e.suspenseHandler !== null && clearTimeout(e.suspenseHandler),
                    (e.isSuspended = !0),
                    (e.suspenseHandler = window.setTimeout(() => {
                        (e.isSuspended = !1), (e.suspenseHandler = null);
                    }, LT));
            });
        return B1({
            get isSlideshowMode() {
                return !!e.fullscreenState;
            },
            get isPlaying() {
                return e.isPlaying;
            },
            get speed() {
                return e.speed;
            },
            get playEntireVideos() {
                return e.playEntireVideos;
            },
            setSpeed: (o) => {
                (e.speed = o), xn(dg, e.speed), t();
            },
            setPlayEntireVideos: (o) => {
                (e.playEntireVideos = o), xn(ec, o), t();
            },
            togglePlayEntireVideos: () => {
                (e.playEntireVideos = !e.playEntireVideos), xn(ec, e.playEntireVideos), t();
            },
            setFullscreenState: (o) => {
                e.fullscreenState = o;
            },
            start: () => {
                (e.isPlaying = !0), t();
            },
            stop: () => {
                (e.isPlaying = !1), t();
            },
            slideshowSatisfied: () => {
                var o;
                if (!e.onSlideshowSatisfied) {
                    (e.isSlideshowSatisfied = !0), e.isPlaying && ((o = e.fullscreenState) == null || o.next());
                    return;
                }
                e.onSlideshowSatisfied(), (e.onSlideshowSatisfied = null);
            },
            handleKeyboardTrigger: () => {
                if (!(e.fullscreenState && !e.fullscreenState.isNextPossible)) {
                    if (e.isPlaying) {
                        (e.isPlaying = !1), t();
                        return;
                    }
                    (e.isPlaying = !0), t();
                }
            },
            addSuspenseListeners: () => {
                lg.forEach((o) => window.addEventListener(o, i, { capture: !0 }));
            },
            removeSuspenseListeners: () => {
                lg.forEach((o) => window.removeEventListener(o, i, { capture: !0 }));
            },
        });
    },
    UT = $T();
function X0() {
    return UT;
}
const BT = ri(() => {
        const e = X0(),
            t = { width: "100%", height: "100%" },
            i = [
                ...(AT() ? [{ icon: x.jsx(xT, { ...t }), isActive: !1, onClick: XO }] : []),
                { icon: x.jsx(DT, { ...t }), name: "autoscroll", isActive: e.isPlaying, onClick: GO },
                { icon: x.jsx(NT, { ...t }), name: "filters", isActive: !1, onClick: qO },
            ];
        return x.jsx(IT, { children: i.map((o, s) => x.jsx(TT, { ...o }, s)) });
    }),
    jT = BT;
function VT() {
    const e = X0();
    A.useEffect(() => {
        if (e.isPlaying)
            return (
                e.addSuspenseListeners(),
                () => {
                    e.removeSuspenseListeners();
                }
            );
    }, [e]);
}
class zT {
    constructor() {
        S(this, "isShowing", !1);
        ge(this, { isShowing: V, setIsShowing: X });
    }
    setIsShowing(t) {
        this.isShowing = t;
    }
}
const J0 = new zT(),
    bN = (e) => J0.setIsShowing(e),
    HT = () => J0.isShowing;
function WT() {
    A.useEffect(() => {
        const e = () => {
            if (!document.visibilityState) return;
            const t = !!gn(Ti),
                n = nn();
            if (n && !t) {
                $y();
                return;
            }
            if (!n && t) {
                Zf();
                return;
            }
        };
        return (
            window.addEventListener("visibilitychange", e),
            () => {
                window.removeEventListener("visibilitychange", e);
            }
        );
    }, []);
}
function GT() {
    const e = nn();
    A.useEffect(() => {
        Po.refreshSettings();
    }, [e == null ? void 0 : e.id]);
}
async function qT() {
    return (
        await de(
            `
    query countTodayContentDownloads {
      countTodayContentDownloads
    }
  `,
            {},
            { apiHost: "typescript", useGlobalErrorHandler: !1 }
        )
    ).countTodayContentDownloads;
}
function QT() {
    const e = on();
    A.useEffect(() => {
        e && (ni() || qT().then((t) => Gk(t)));
    }, [e]);
}
function YT() {
    A.useEffect(() => {
        document.addEventListener("contextmenu", (e) => {
            if (ni() || Jk() || io !== "production") return;
            e.preventDefault();
            const n = e.target.tagName;
            (n === "IMG" || n === "VIDEO") && Yy({});
        });
    }, []);
}
const Z0 = "CONFIRMED_NSFW",
    KT = new URL(window.location.href).searchParams.get("allow_nsfw"),
    dp = V.box(XT(KT) ?? gn(Z0) ?? !1);
function ew() {
    return dp.get();
}
function kN(e) {
    return zf || dp.get() ? !1 : e ?? !1;
}
async function PN() {
    eo(() => {
        dp.set(!0), xn(Z0, !0);
    });
}
function XT(e) {
    if (Hf(e)) return e === "true";
}
var Ud = ((e) => ((e.LIVE = "LIVE"), (e.ZONE = "ZONE"), (e.PRIMIS = "PRIMIS"), e))(Ud || {});
const ON = "https://s.cant3am.com/d.php?z=192",
    JT = "https://wmptengate.com/pu/?target=pulfc&psid=scrolller&pstool=300_62&psprogram=cbrnd&campaign_id=&categoryName=girl&cobrandId=258376&filters=&site=wl3&width=1100&height=764&cap=24&ms_notrack=1&subAffId=poptraffic",
    ZT = 600,
    eI = [
        {
            id: "live-3",
            itemType: We.IFRAME_AD,
            type: Ud.LIVE,
            width: 400,
            height: 300,
            scriptSrc:
                "https://ttwmed.com/embed/fk?c=object_container&site=wl3&cobrandId=258376&psid=scrolller&pstool=319_1&psprogram=cbrnd&campaign_id=&category=girl&vp[showChat]=false&vp[chatAutoHide]=false&vp[showCallToAction]=false&vp[showPerformerName]=false&vp[showPerformerStatus]=false&ms_notrack=1&subAffId=squarenochat",
        },
        {
            id: "live-4",
            itemType: We.IFRAME_AD,
            type: Ud.LIVE,
            width: 400,
            height: 540,
            scriptSrc:
                "https://ttwmed.com/embed/fk?c=object_container&site=wl3&cobrandId=258376&psid=scrolller&pstool=319_1&psprogram=cbrnd&campaign_id=&category=girl&vp[showChat]=false&vp[chatAutoHide]=false&vp[showCallToAction]=false&vp[showPerformerName]=false&vp[showPerformerStatus]=false&ms_notrack=1&subAffId=tallnochat",
        },
    ],
    tI = [],
    AN = () => [...eI, ...tI],
    CN = (e, t) => {
        const n = window.innerWidth / e;
        return t * n < window.innerHeight ? n : window.innerHeight / t;
    },
    RN = (e, t) => {
        var n;
        return ((n = e.columnStates[0]) == null ? void 0 : n.columnWidth) / t;
    },
    TN = (e, t) => e.contentHeight / t,
    nI = [
        L.CREATOR_ONBOARDING_LANDING,
        L.CREATOR_ONBOARDING_LANDING_NSFW,
        L.CREATOR_ONBOARDING_CONNECT,
        L.CREATOR_ONBOARDING_CONNECT_NSFW,
        L.CREATOR_ONBOARDING_CONFIRM_PHONE,
        L.CREATOR_ONBOARDING_CONFIRM_PHONE_NSFW,
        L.CREATOR_ONBOARDING_ADULT_SOCIAL,
        L.CREATOR_ONBOARDING_SOCIAL,
        L.CREATOR_ONBOARDING_SOCIAL_NSFW,
        L.CREATOR_ONBOARDING_GOALS,
        L.CREATOR_ONBOARDING_GOALS_NSFW,
        L.CREATOR_ONBOARDING_SUBMITED,
        L.EMBED,
        L.UPLOAD,
        L.UPLOAD_NSFW,
        L.PREMIUM,
        L.PREMIUM_CHECKOUT,
        L.TERMS,
    ],
    rI = (e) => !nI.some((t) => e.startsWith(t) || e === t);
function iI() {
    const [e, t] = A.useState(!1),
        [n, r] = A.useState(0),
        i = !on() && Ms() && ew() && !zf,
        o = n >= 1 && i && e;
    A.useEffect(() => {
        if (!i || e) return;
        (() => {
            const a = document.createElement("script");
            (a.src = "/popunderjs/combined.js"), document.getElementsByTagName("head")[0].appendChild(a);
        })(),
            setTimeout(() => {
                t(!0);
            }, 2e3);
    }, [i, e]),
        A.useEffect(() => {
            if (!e) return;
            const s = window.BetterJsPop;
            return (
                s == null || s.config({ safe: !0 }),
                s == null ||
                    s.add(JT, {
                        under: !1,
                        newTab: !0,
                        shouldFire: () => {
                            if ((r((c) => c + 1), !rI(window.location.pathname))) return !1;
                            const a = s == null ? void 0 : s.getClickedElement();
                            return ["Favorite", "Share", "Album", "Download"].includes(a.ariaLabel || "") ? !1 : o;
                        },
                        afterOpen: () => {
                            r(0), qe.track("new-tab-ad-showed"), KO();
                        },
                        cookieExpires: ZT,
                    }),
                () => {
                    s == null || s.emptyStack(), s == null || s.reset();
                }
            );
        }, [o, e, n]);
}
function oI() {
    const [e, t] = A.useState(!1),
        n = Ms() && ew() && !ni() && !e && !zf;
    A.useEffect(() => {
        if (!n) return;
        (() => {
            const i = document.createElement("script");
            (i.type = "application/javascript"), (i.async = !0), (i.src = "https://a.cant3am.com/ad-provider.js"), document.getElementsByTagName("head")[0].appendChild(i);
        })(),
            t(!0);
    }, [n]);
}
async function sI() {
    await de(
        `
    mutation updateInfo {
        updateInfo
      }
  `,
        {},
        { useGlobalErrorHandler: !1, disablePopup: !0, apiHost: "typescript" }
    );
}
function aI() {
    const e = s0();
    A.useEffect(() => {
        if (!e || ni()) return;
        const t = window.location.pathname;
        [L.PREMIUM].includes(t) || t.startsWith(L.PREMIUM_CHECKOUT.replace("*", "")) || t.startsWith(L.COLLECTION_CHECKOUT.replace("*", "")) || (sI(), WO());
    }, [e]);
}
const lI = A.lazy(() => Z(() => import("./Popups-Iev9OgdR.js"), __vite__mapDeps([174, 1, 11]))),
    uI = () => {
        const e = n0({ "app--iphone": ky, "app--desktop": !Py });
        return (
            A.useEffect(() => {
                window.addEventListener("beforeunload", (t) => {
                    const n = OT();
                    Object.keys({ ...n }).length && (t.preventDefault(), (t.returnValue = ""));
                });
            }, []),
            KP(),
            XP(),
            GT(),
            QT(),
            VT(),
            YT(),
            iI(),
            oI(),
            A.useEffect(() => {
                (async () => (await Zf(), await QO(), await YO(), pT(), oP()))();
            }, []),
            aI(),
            WT(),
            sd && sd !== bT ? x.jsx(Jv, { children: x.jsx(kT, {}) }) : x.jsx(Jv, { children: x.jsxs("div", { className: e, children: [x.jsx(A.Suspense, { children: x.jsx(lI, {}) }), HT() && x.jsx(jT, {}), x.jsx(_C, {}), x.jsx(fb, {})] }) })
        );
    },
    cI = ri(uI),
    Pl = navigator.serviceWorker;
async function dI() {
    Pl !== void 0 && (await pI(), await Pl.register("/sw.js"));
}
async function fI() {
    Pl !== void 0 && (await Pl.ready).unregister();
}
function pI() {
    if (document.readyState !== "complete")
        return new Promise((e) => {
            window.addEventListener("load", () => e({}));
        });
}
io === pr.PRODUCTION ? dI() : fI();
Xg({ enforceActions: "never" });
pA(lk);
const hI = _y(document.getElementById("root"));
hI.render(x.jsx(cI, {}));
export {
    _O as $,
    TO as A,
    IO as B,
    xO as C,
    NO as D,
    tO as E,
    eO as F,
    vC as G,
    kD as H,
    AO as I,
    CO as J,
    RO as K,
    LO as L,
    DO as M,
    cO as N,
    bD as O,
    uO as P,
    lO as Q,
    zO as R,
    sO as S,
    mD as T,
    rO as U,
    iO as V,
    yD as W,
    SO as X,
    yO as Y,
    mO as Z,
    Z as _,
    bO as a,
    BA as a$,
    HO as a0,
    EO as a1,
    oO as a2,
    UO as a3,
    gO as a4,
    on as a5,
    cD as a6,
    pl as a7,
    de as a8,
    CC as a9,
    yI as aA,
    _N as aB,
    pN as aC,
    qP as aD,
    eo as aE,
    uD as aF,
    oD as aG,
    Qt as aH,
    dD as aI,
    gN as aJ,
    Ry as aK,
    xn as aL,
    xD as aM,
    gn as aN,
    jo as aO,
    ys as aP,
    Xy as aQ,
    Qg as aR,
    HA as aS,
    n0 as aT,
    vN as aU,
    Lk as aV,
    Ek as aW,
    Ut as aX,
    ce as aY,
    cb as aZ,
    fN as a_,
    Ms as aa,
    Fs as ab,
    L as ac,
    mx as ad,
    GD as ae,
    oo as af,
    Kk as ag,
    oN as ah,
    Us as ai,
    pD as aj,
    lb as ak,
    hD as al,
    Uy as am,
    Zk as an,
    zD as ao,
    HD as ap,
    ge as aq,
    V as ar,
    X as as,
    LD as at,
    nn as au,
    iD as av,
    qx as aw,
    mb as ax,
    wy as ay,
    $k as az,
    hO as b,
    Bb as b$,
    ON as b0,
    kN as b1,
    W as b2,
    Pr as b3,
    ub as b4,
    kr as b5,
    r0 as b6,
    cx as b7,
    TI as b8,
    _x as b9,
    CN as bA,
    RN as bB,
    TN as bC,
    eI as bD,
    Ud as bE,
    Ub as bF,
    pb as bG,
    EI as bH,
    Wb as bI,
    BI as bJ,
    jI as bK,
    WI as bL,
    jb as bM,
    zI as bN,
    hx as bO,
    HI as bP,
    zP as bQ,
    yy as bR,
    PI as bS,
    fA as bT,
    Wf as bU,
    DI as bV,
    bI as bW,
    UI as bX,
    NI as bY,
    LI as bZ,
    $I as b_,
    jx as ba,
    ET as bb,
    rD as bc,
    $O as bd,
    Vh as be,
    CI as bf,
    jD as bg,
    _D as bh,
    dA as bi,
    fP as bj,
    Ox as bk,
    mI as bl,
    II as bm,
    gT as bn,
    AC as bo,
    OC as bp,
    zx as bq,
    JD as br,
    ND as bs,
    eD as bt,
    aN as bu,
    tD as bv,
    Fy as bw,
    fx as bx,
    Xk as by,
    dx as bz,
    vO as c,
    tu as c$,
    FI as c0,
    lD as c1,
    rx as c2,
    ZI as c3,
    ex as c4,
    ox as c5,
    zb as c6,
    tx as c7,
    ix as c8,
    We as c9,
    Ck as cA,
    Rk as cB,
    Vx as cC,
    QI as cD,
    mP as cE,
    Nk as cF,
    Mk as cG,
    Fk as cH,
    Ly as cI,
    io as cJ,
    pr as cK,
    Xx as cL,
    s0 as cM,
    lC as cN,
    uC as cO,
    xx as cP,
    Nx as cQ,
    AI as cR,
    Dx as cS,
    Tx as cT,
    B1 as cU,
    PN as cV,
    bN as cW,
    sD as cX,
    vP as cY,
    aD as cZ,
    gx as c_,
    by as ca,
    Vf as cb,
    Bn as cc,
    E1 as cd,
    Wx as ce,
    AN as cf,
    GI as cg,
    qI as ch,
    JI as ci,
    Vb as cj,
    YI as ck,
    Gf as cl,
    KI as cm,
    hb as cn,
    XI as co,
    zf as cp,
    kI as cq,
    jf as cr,
    VI as cs,
    Py as ct,
    MI as cu,
    nx as cv,
    wI as cw,
    Hx as cx,
    jk as cy,
    FD as cz,
    ZP as d,
    Ab as d$,
    Px as d0,
    ED as d1,
    VA as d2,
    Gx as d3,
    SI as d4,
    rN as d5,
    XD as d6,
    iN as d7,
    Po as d8,
    Yy as d9,
    CD as dA,
    fD as dB,
    _I as dC,
    id as dD,
    dN as dE,
    BD as dF,
    sN as dG,
    ID as dH,
    rA as dI,
    RI as dJ,
    vD as dK,
    nN as dL,
    Lx as dM,
    Mx as dN,
    Fx as dO,
    $x as dP,
    Ux as dQ,
    Rx as dR,
    Fh as dS,
    $h as dT,
    Uh as dU,
    qb as dV,
    DD as dW,
    uN as dX,
    cN as dY,
    px as dZ,
    OI as d_,
    MD as da,
    QD as db,
    UD as dc,
    KD as dd,
    Jx as de,
    fl as df,
    ib as dg,
    xI as dh,
    yN as di,
    SN as dj,
    Qx as dk,
    wN as dl,
    Cx as dm,
    EN as dn,
    eN as dp,
    TD as dq,
    ZD as dr,
    Ix as ds,
    Ok as dt,
    Kx as du,
    Jk as dv,
    RD as dw,
    tN as dx,
    $y as dy,
    WD as dz,
    pO as e,
    gD as e0,
    OD as e1,
    pP as e2,
    lN as e3,
    sx as e4,
    lx as e5,
    ax as e6,
    ux as e7,
    Sb as e8,
    uA as e9,
    hN as eA,
    uP as eB,
    mN as eC,
    X0 as ea,
    oT as eb,
    GO as ec,
    ew as ed,
    Bf as ee,
    nD as ef,
    bP as eg,
    HP as eh,
    $D as ei,
    $A as ej,
    GP as ek,
    Ax as el,
    wb as em,
    Bx as en,
    vx as eo,
    Lh as ep,
    Jf as eq,
    Zf as er,
    Zx as es,
    qD as et,
    VD as eu,
    Yx as ev,
    kk as ew,
    OT as ex,
    tP as ey,
    YD as ez,
    nO as f,
    wO as g,
    wD as h,
    ni as i,
    aO as j,
    SD as k,
    qe as l,
    dO as m,
    fO as n,
    ri as o,
    kO as p,
    MO as q,
    FO as r,
    AD as s,
    VO as t,
    PO as u,
    jO as v,
    BO as w,
    PD as x,
    JP as y,
    OO as z,
};
function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = [
            "assets/SubredditPostPageRouter-QroEzaZo.js",
            "assets/main-202xyIyu.js",
            "assets/index.esm-vpgjDIc3.js",
            "assets/iconBase-Qpa98uhl.js",
            "assets/DisplayTypeFilter-AVYNZn52.js",
            "assets/index.esm-HeYjyHzT.js",
            "assets/categoryQueries-KNTtAECe.js",
            "assets/GalleryMediaComponent-fBRZu7nS.js",
            "assets/array-4mkrMY1O.js",
            "assets/NsfwWarning-5DFvw7p9.js",
            "assets/LoadingState-jaZZKflo.js",
            "assets/DataCounterState-crwkHamZ.js",
            "assets/IconButton-psk2L7-j.js",
            "assets/ShowIf-5XHSlq4p.js",
            "assets/clickTracking-ueGUAe69.js",
            "assets/index-6Upee7ID.js",
            "assets/mainNavbarActions-tZI993oA.js",
            "assets/filtersActions-WMnkmKB9.js",
            "assets/useHideQuickAccessButtons-Z2R-Rxcl.js",
            "assets/InfoMessage-rOambPz7.js",
            "assets/FullscreenState-pNchnM1k.js",
            "assets/index-oAl5CcAR.js",
            "assets/VolumeMute-YSn9fZ2u.js",
            "assets/index.esm--Ikk0hSN.js",
            "assets/index.esm-ob5Y9iEN.js",
            "assets/index-83JZECiI.js",
            "assets/index.esm-iw4BnFGi.js",
            "assets/index.esm-3oJ6kuv3.js",
            "assets/index.esm-FMo_lYDO.js",
            "assets/index-_rZ5MSZH.js",
            "assets/index-JAnpJXnl.css",
            "assets/index-xse12AvQ.js",
            "assets/useOnClickOutside-YPF5BT9G.js",
            "assets/SubredditPage-KwORp7jQ.js",
            "assets/TimespanFilter-uN37Y_6X.js",
            "assets/DiscoverFilter-m3nK27EG.js",
            "assets/SortByFilter-_ChhYDAj.js",
            "assets/TopBannerState-bwhXR_F0.js",
            "assets/ShareButton-_je5QL7G.js",
            "assets/ContextMenu-uw7kEqC_.js",
            "assets/FilterContextMenu-1TZ040_7.js",
            "assets/SourceLink-FCDCDRk6.js",
            "assets/index-MSxYhzgY.js",
            "assets/index-y4nukxEG.css",
            "assets/Margin-F0tNl6Fg.js",
            "assets/Popup-A5k8Bb5d.js",
            "assets/Popup--fbBvGRG.css",
            "assets/index-W7x6IvFZ.js",
            "assets/AccountPage--XQddtnD.js",
            "assets/index-I5-r9SDk.js",
            "assets/AcceptButton-vAsshB_S.js",
            "assets/TagsState-b5CBGdB_.js",
            "assets/TagsState-2IJXAIlW.css",
            "assets/Common-TCncf1Eq.js",
            "assets/ArrowIcon-LUncUGD6.js",
            "assets/index-3FlU48KK.js",
            "assets/UploadFileItemPreview-Kea6HsOI.js",
            "assets/UploadFileItemPreview-wn2TqCSj.css",
            "assets/index-Uk1fD5yT.js",
            "assets/index-W_nGhRlq.css",
            "assets/index-qdvxBq4d.js",
            "assets/index-AYuLm4ps.css",
            "assets/index-aJqjl1jV.js",
            "assets/index-vSeQU21o.css",
            "assets/EditCollection-a_UdrJgV.js",
            "assets/AccountNavButton-gZjah3WK.js",
            "assets/AccountNavButton-3lmHUB6b.css",
            "assets/EditCollection-aNJUbviY.css",
            "assets/index-Qn3GUlm6.js",
            "assets/DashboardState-nblFHiaz.js",
            "assets/CollectionSelectPosts-Yepdc-d7.js",
            "assets/CollectionSelectPosts-Yk3UPzsi.css",
            "assets/creatorQueries-jRlJQW6v.js",
            "assets/index-gsQFyue_.js",
            "assets/paymentMutations-v539O16e.js",
            "assets/PremiumLogo-THsc61dy.js",
            "assets/SubscriptionTypes-P406TGaq.js",
            "assets/index-8oJENd9B.js",
            "assets/index-Eto_2I64.js",
            "assets/PayPalIcon-avulH5gW.js",
            "assets/Discover-IL-LRinf.js",
            "assets/index-01_XU-5H.js",
            "assets/CreditCardComponent-ROge-9ml.js",
            "assets/CreditCardComponent-aOJDz-8p.css",
            "assets/zod-8pYlpvz6.js",
            "assets/utils-7hI__6hB.js",
            "assets/index-j9yyKUg7.js",
            "assets/index-tuk3A0xz.js",
            "assets/AccountPage-iAuBe99W.css",
            "assets/SubredditPage-8hojgk0H.css",
            "assets/AlbumPageRouter-MNJIAinZ.js",
            "assets/index-tBx9leu1.js",
            "assets/DiscoverPageState-RU2P5KTl.js",
            "assets/index-lLSsPYsM.js",
            "assets/index-24g-t8wg.js",
            "assets/onScroll-wV3JalQw.js",
            "assets/index-tmf4ZRxg.js",
            "assets/FollowingPageState-V6MNk342.js",
            "assets/SharedCollectionState-vv_48Pse.js",
            "assets/index-UgDoHn7R.js",
            "assets/ShareFavoritesPopup-8gJQrmet.js",
            "assets/ItemState-DcurKpEy.js",
            "assets/ShareFavoritesPopup-_Of8-Eam.css",
            "assets/index-_Ddo2aVk.js",
            "assets/sfw-ccpVCxHf.js",
            "assets/index-v0IaAFad.js",
            "assets/nsfw-PeAo4GDz.js",
            "assets/sfw-1U_QGWBc.js",
            "assets/index-h2JTWOwD.js",
            "assets/styles-rV6b38EY.js",
            "assets/creatorMutations-zq2nHmgc.js",
            "assets/utils-7-eWsai7.js",
            "assets/styles-y1f9yTcP.js",
            "assets/useHideUI-WMs0Fouq.js",
            "assets/utils-JWquH9C6.js",
            "assets/nsfw-q_yO7Iu7.js",
            "assets/sfw-5YUiYQ8Z.js",
            "assets/index-ohiQW-6z.js",
            "assets/loadingManagement-2HEAGbmO.js",
            "assets/nsfw-SHfnory-.js",
            "assets/index-IoakL3kh.js",
            "assets/sfw-Ndf0KGar.js",
            "assets/index-WwZpBnEH.js",
            "assets/nsfw-A4nVC_Rw.js",
            "assets/sfw-JkZ0fdRn.js",
            "assets/index-aXLZxT_a.js",
            "assets/index-nDwZ9P6Q.js",
            "assets/nsfw-JCI9FOYU.js",
            "assets/index-FICCIfmF.js",
            "assets/sfw-D64HzUjo.js",
            "assets/UploadLanding-CguhkzW4.js",
            "assets/nsfw-E4-km9bo.js",
            "assets/MyCollectionsPage-DgO5ZFKc.js",
            "assets/FavoritesPage-O-CKqUks.js",
            "assets/MyCollectionsPage-TktSjGTr.css",
            "assets/DiscoverPage-giXhr8ez.js",
            "assets/index-NL8_UNcD.js",
            "assets/ResetPasswordPage-EJ1-yOLE.js",
            "assets/PasswordInput-eSXzgoP0.js",
            "assets/VerifyEmailPage-_pexoIK7.js",
            "assets/VerifyPaymentPage-YolJM2jc.js",
            "assets/VerifyPaymentPage-ZLBukz_O.css",
            "assets/AboutPage-5RmfyZ5S.js",
            "assets/AboutPage-sJxuvWZs.css",
            "assets/index-GZuKvRvF.js",
            "assets/ThankYouPage-q6bw1Wkl.js",
            "assets/ThankYouPage-evE3sbpY.css",
            "assets/useResumePremiumVerification-BnwDGpWZ.js",
            "assets/index-m0bLRJob.js",
            "assets/index-WcSwCgdC.js",
            "assets/index-3-I7Efq7.js",
            "assets/index-QMIgS1oh.js",
            "assets/index-GF9vJyMp.js",
            "assets/content-TeOCgupY.js",
            "assets/PrivacyPage-f3BvdJyh.js",
            "assets/index-ZjbbcQBa.js",
            "assets/content-pCyaC04c.js",
            "assets/index-XOd-UZMp.js",
            "assets/ChoosePaymentMethod-WVGyVeIy.js",
            "assets/ChoosePaymentMethod-BiC35Mpu.css",
            "assets/index-kHX_b9w6.css",
            "assets/LeaderboardPage-pXspYyzz.js",
            "assets/LeaderboardPage-eWHo6eQ1.css",
            "assets/index-0z7FPiTO.js",
            "assets/CreatorProfile-5OV358oD.js",
            "assets/CreatorProfile-Wj7Hp-RH.css",
            "assets/CollectionsPage-OGMQ5RcF.js",
            "assets/CollectionsPage-vxeV3Qza.css",
            "assets/CategoryPage-sfxoTljg.js",
            "assets/index-AyiGOXM2.js",
            "assets/index-hIbfvhmU.js",
            "assets/index-svO2__F_.js",
            "assets/Discord-TylR7kj7.js",
            "assets/index-WZn6_w-2.js",
            "assets/Popups-Iev9OgdR.js",
        ];
    }
    return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}

