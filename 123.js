/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

( () => {
    var jv = Object.create;
    var Dn = Object.defineProperty;
    var Yv = Object.getOwnPropertyDescriptor;
    var Qv = Object.getOwnPropertyNames;
    var $v = Object.getPrototypeOf
      , Zv = Object.prototype.hasOwnProperty;
    var Ee = (e, t) => () => (e && (t = e(e = 0)),
    t);
    var d = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t),
    t.exports)
      , Le = (e, t) => {
        for (var n in t)
            Dn(e, n, {
                get: t[n],
                enumerable: !0
            })
    }
      , pa = (e, t, n, r) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let o of Qv(t))
                !Zv.call(e, o) && o !== n && Dn(e, o, {
                    get: () => t[o],
                    enumerable: !(r = Yv(t, o)) || r.enumerable
                });
        return e
    }
    ;
    var le = (e, t, n) => (n = e != null ? jv($v(e)) : {},
    pa(t || !e || !e.__esModule ? Dn(n, "default", {
        value: e,
        enumerable: !0
    }) : n, e))
      , Qe = e => pa(Dn({}, "__esModule", {
        value: !0
    }), e);
    var Yr = d( () => {
        "use strict";
        window.tram = function(e) {
            function t(l, I) {
                var O = new y.Bare;
                return O.init(l, I)
            }
            function n(l) {
                return l.replace(/[A-Z]/g, function(I) {
                    return "-" + I.toLowerCase()
                })
            }
            function r(l) {
                var I = parseInt(l.slice(1), 16)
                  , O = I >> 16 & 255
                  , P = I >> 8 & 255
                  , A = 255 & I;
                return [O, P, A]
            }
            function o(l, I, O) {
                return "#" + (1 << 24 | l << 16 | I << 8 | O).toString(16).slice(1)
            }
            function i() {}
            function a(l, I) {
                f("Type warning: Expected: [" + l + "] Got: [" + typeof I + "] " + I)
            }
            function u(l, I, O) {
                f("Units do not match [" + l + "]: " + I + ", " + O)
            }
            function s(l, I, O) {
                if (I !== void 0 && (O = I),
                l === void 0)
                    return O;
                var P = O;
                return Ce.test(l) || !Xe.test(l) ? P = parseInt(l, 10) : Xe.test(l) && (P = 1e3 * parseFloat(l)),
                0 > P && (P = 0),
                P === P ? P : O
            }
            function f(l) {
                oe.debug && window && window.console.warn(l)
            }
            function m(l) {
                for (var I = -1, O = l ? l.length : 0, P = []; ++I < O; ) {
                    var A = l[I];
                    A && P.push(A)
                }
                return P
            }
            var v = function(l, I, O) {
                function P(ae) {
                    return typeof ae == "object"
                }
                function A(ae) {
                    return typeof ae == "function"
                }
                function N() {}
                function Z(ae, he) {
                    function K() {
                        var Oe = new se;
                        return A(Oe.init) && Oe.init.apply(Oe, arguments),
                        Oe
                    }
                    function se() {}
                    he === O && (he = ae,
                    ae = Object),
                    K.Bare = se;
                    var ue, _e = N[l] = ae[l], Ye = se[l] = K[l] = new N;
                    return Ye.constructor = K,
                    K.mixin = function(Oe) {
                        return se[l] = K[l] = Z(K, Oe)[l],
                        K
                    }
                    ,
                    K.open = function(Oe) {
                        if (ue = {},
                        A(Oe) ? ue = Oe.call(K, Ye, _e, K, ae) : P(Oe) && (ue = Oe),
                        P(ue))
                            for (var nn in ue)
                                I.call(ue, nn) && (Ye[nn] = ue[nn]);
                        return A(Ye.init) || (Ye.init = ae),
                        K
                    }
                    ,
                    K.open(he)
                }
                return Z
            }("prototype", {}.hasOwnProperty)
              , g = {
                ease: ["ease", function(l, I, O, P) {
                    var A = (l /= P) * l
                      , N = A * l;
                    return I + O * (-2.75 * N * A + 11 * A * A + -15.5 * N + 8 * A + .25 * l)
                }
                ],
                "ease-in": ["ease-in", function(l, I, O, P) {
                    var A = (l /= P) * l
                      , N = A * l;
                    return I + O * (-1 * N * A + 3 * A * A + -3 * N + 2 * A)
                }
                ],
                "ease-out": ["ease-out", function(l, I, O, P) {
                    var A = (l /= P) * l
                      , N = A * l;
                    return I + O * (.3 * N * A + -1.6 * A * A + 2.2 * N + -1.8 * A + 1.9 * l)
                }
                ],
                "ease-in-out": ["ease-in-out", function(l, I, O, P) {
                    var A = (l /= P) * l
                      , N = A * l;
                    return I + O * (2 * N * A + -5 * A * A + 2 * N + 2 * A)
                }
                ],
                linear: ["linear", function(l, I, O, P) {
                    return O * l / P + I
                }
                ],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(l, I, O, P) {
                    return O * (l /= P) * l + I
                }
                ],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(l, I, O, P) {
                    return -O * (l /= P) * (l - 2) + I
                }
                ],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(l, I, O, P) {
                    return (l /= P / 2) < 1 ? O / 2 * l * l + I : -O / 2 * (--l * (l - 2) - 1) + I
                }
                ],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(l, I, O, P) {
                    return O * (l /= P) * l * l + I
                }
                ],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(l, I, O, P) {
                    return O * ((l = l / P - 1) * l * l + 1) + I
                }
                ],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(l, I, O, P) {
                    return (l /= P / 2) < 1 ? O / 2 * l * l * l + I : O / 2 * ((l -= 2) * l * l + 2) + I
                }
                ],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(l, I, O, P) {
                    return O * (l /= P) * l * l * l + I
                }
                ],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(l, I, O, P) {
                    return -O * ((l = l / P - 1) * l * l * l - 1) + I
                }
                ],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(l, I, O, P) {
                    return (l /= P / 2) < 1 ? O / 2 * l * l * l * l + I : -O / 2 * ((l -= 2) * l * l * l - 2) + I
                }
                ],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(l, I, O, P) {
                    return O * (l /= P) * l * l * l * l + I
                }
                ],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(l, I, O, P) {
                    return O * ((l = l / P - 1) * l * l * l * l + 1) + I
                }
                ],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(l, I, O, P) {
                    return (l /= P / 2) < 1 ? O / 2 * l * l * l * l * l + I : O / 2 * ((l -= 2) * l * l * l * l + 2) + I
                }
                ],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(l, I, O, P) {
                    return -O * Math.cos(l / P * (Math.PI / 2)) + O + I
                }
                ],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(l, I, O, P) {
                    return O * Math.sin(l / P * (Math.PI / 2)) + I
                }
                ],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(l, I, O, P) {
                    return -O / 2 * (Math.cos(Math.PI * l / P) - 1) + I
                }
                ],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(l, I, O, P) {
                    return l === 0 ? I : O * Math.pow(2, 10 * (l / P - 1)) + I
                }
                ],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(l, I, O, P) {
                    return l === P ? I + O : O * (-Math.pow(2, -10 * l / P) + 1) + I
                }
                ],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(l, I, O, P) {
                    return l === 0 ? I : l === P ? I + O : (l /= P / 2) < 1 ? O / 2 * Math.pow(2, 10 * (l - 1)) + I : O / 2 * (-Math.pow(2, -10 * --l) + 2) + I
                }
                ],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(l, I, O, P) {
                    return -O * (Math.sqrt(1 - (l /= P) * l) - 1) + I
                }
                ],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(l, I, O, P) {
                    return O * Math.sqrt(1 - (l = l / P - 1) * l) + I
                }
                ],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(l, I, O, P) {
                    return (l /= P / 2) < 1 ? -O / 2 * (Math.sqrt(1 - l * l) - 1) + I : O / 2 * (Math.sqrt(1 - (l -= 2) * l) + 1) + I
                }
                ],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(l, I, O, P, A) {
                    return A === void 0 && (A = 1.70158),
                    O * (l /= P) * l * ((A + 1) * l - A) + I
                }
                ],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(l, I, O, P, A) {
                    return A === void 0 && (A = 1.70158),
                    O * ((l = l / P - 1) * l * ((A + 1) * l + A) + 1) + I
                }
                ],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(l, I, O, P, A) {
                    return A === void 0 && (A = 1.70158),
                    (l /= P / 2) < 1 ? O / 2 * l * l * (((A *= 1.525) + 1) * l - A) + I : O / 2 * ((l -= 2) * l * (((A *= 1.525) + 1) * l + A) + 2) + I
                }
                ]
            }
              , E = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            }
              , T = document
              , w = window
              , R = "bkwld-tram"
              , b = /[\-\.0-9]/g
              , L = /[A-Z]/
              , C = "number"
              , D = /^(rgb|#)/
              , F = /(em|cm|mm|in|pt|pc|px)$/
              , M = /(em|cm|mm|in|pt|pc|px|%)$/
              , H = /(deg|rad|turn)$/
              , j = "unitless"
              , Q = /(all|none) 0s ease 0s/
              , J = /^(width|height)$/
              , ee = " "
              , X = T.createElement("a")
              , S = ["Webkit", "Moz", "O", "ms"]
              , q = ["-webkit-", "-moz-", "-o-", "-ms-"]
              , B = function(l) {
                if (l in X.style)
                    return {
                        dom: l,
                        css: l
                    };
                var I, O, P = "", A = l.split("-");
                for (I = 0; I < A.length; I++)
                    P += A[I].charAt(0).toUpperCase() + A[I].slice(1);
                for (I = 0; I < S.length; I++)
                    if (O = S[I] + P,
                    O in X.style)
                        return {
                            dom: O,
                            css: q[I] + l
                        }
            }
              , V = t.support = {
                bind: Function.prototype.bind,
                transform: B("transform"),
                transition: B("transition"),
                backface: B("backface-visibility"),
                timing: B("transition-timing-function")
            };
            if (V.transition) {
                var te = V.timing.dom;
                if (X.style[te] = g["ease-in-back"][0],
                !X.style[te])
                    for (var ne in E)
                        g[ne][0] = E[ne]
            }
            var G = t.frame = function() {
                var l = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.mozRequestAnimationFrame || w.oRequestAnimationFrame || w.msRequestAnimationFrame;
                return l && V.bind ? l.bind(w) : function(I) {
                    w.setTimeout(I, 16)
                }
            }()
              , Y = t.now = function() {
                var l = w.performance
                  , I = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
                return I && V.bind ? I.bind(l) : Date.now || function() {
                    return +new Date
                }
            }()
              , p = v(function(l) {
                function I(re, ce) {
                    var me = m(("" + re).split(ee))
                      , pe = me[0];
                    ce = ce || {};
                    var Se = z[pe];
                    if (!Se)
                        return f("Unsupported property: " + pe);
                    if (!ce.weak || !this.props[pe]) {
                        var Ue = Se[0]
                          , Pe = this.props[pe];
                        return Pe || (Pe = this.props[pe] = new Ue.Bare),
                        Pe.init(this.$el, me, Se, ce),
                        Pe
                    }
                }
                function O(re, ce, me) {
                    if (re) {
                        var pe = typeof re;
                        if (ce || (this.timer && this.timer.destroy(),
                        this.queue = [],
                        this.active = !1),
                        pe == "number" && ce)
                            return this.timer = new ie({
                                duration: re,
                                context: this,
                                complete: N
                            }),
                            void (this.active = !0);
                        if (pe == "string" && ce) {
                            switch (re) {
                            case "hide":
                                K.call(this);
                                break;
                            case "stop":
                                Z.call(this);
                                break;
                            case "redraw":
                                se.call(this);
                                break;
                            default:
                                I.call(this, re, me && me[1])
                            }
                            return N.call(this)
                        }
                        if (pe == "function")
                            return void re.call(this, this);
                        if (pe == "object") {
                            var Se = 0;
                            Ye.call(this, re, function(Ie, Kv) {
                                Ie.span > Se && (Se = Ie.span),
                                Ie.stop(),
                                Ie.animate(Kv)
                            }, function(Ie) {
                                "wait"in Ie && (Se = s(Ie.wait, 0))
                            }),
                            _e.call(this),
                            Se > 0 && (this.timer = new ie({
                                duration: Se,
                                context: this
                            }),
                            this.active = !0,
                            ce && (this.timer.complete = N));
                            var Ue = this
                              , Pe = !1
                              , Nn = {};
                            G(function() {
                                Ye.call(Ue, re, function(Ie) {
                                    Ie.active && (Pe = !0,
                                    Nn[Ie.name] = Ie.nextStyle)
                                }),
                                Pe && Ue.$el.css(Nn)
                            })
                        }
                    }
                }
                function P(re) {
                    re = s(re, 0),
                    this.active ? this.queue.push({
                        options: re
                    }) : (this.timer = new ie({
                        duration: re,
                        context: this,
                        complete: N
                    }),
                    this.active = !0)
                }
                function A(re) {
                    return this.active ? (this.queue.push({
                        options: re,
                        args: arguments
                    }),
                    void (this.timer.complete = N)) : f("No active transition timer. Use start() or wait() before then().")
                }
                function N() {
                    if (this.timer && this.timer.destroy(),
                    this.active = !1,
                    this.queue.length) {
                        var re = this.queue.shift();
                        O.call(this, re.options, !0, re.args)
                    }
                }
                function Z(re) {
                    this.timer && this.timer.destroy(),
                    this.queue = [],
                    this.active = !1;
                    var ce;
                    typeof re == "string" ? (ce = {},
                    ce[re] = 1) : ce = typeof re == "object" && re != null ? re : this.props,
                    Ye.call(this, ce, Oe),
                    _e.call(this)
                }
                function ae(re) {
                    Z.call(this, re),
                    Ye.call(this, re, nn, Bv)
                }
                function he(re) {
                    typeof re != "string" && (re = "block"),
                    this.el.style.display = re
                }
                function K() {
                    Z.call(this),
                    this.el.style.display = "none"
                }
                function se() {
                    this.el.offsetHeight
                }
                function ue() {
                    Z.call(this),
                    e.removeData(this.el, R),
                    this.$el = this.el = null
                }
                function _e() {
                    var re, ce, me = [];
                    this.upstream && me.push(this.upstream);
                    for (re in this.props)
                        ce = this.props[re],
                        ce.active && me.push(ce.string);
                    me = me.join(","),
                    this.style !== me && (this.style = me,
                    this.el.style[V.transition.dom] = me)
                }
                function Ye(re, ce, me) {
                    var pe, Se, Ue, Pe, Nn = ce !== Oe, Ie = {};
                    for (pe in re)
                        Ue = re[pe],
                        pe in de ? (Ie.transform || (Ie.transform = {}),
                        Ie.transform[pe] = Ue) : (L.test(pe) && (pe = n(pe)),
                        pe in z ? Ie[pe] = Ue : (Pe || (Pe = {}),
                        Pe[pe] = Ue));
                    for (pe in Ie) {
                        if (Ue = Ie[pe],
                        Se = this.props[pe],
                        !Se) {
                            if (!Nn)
                                continue;
                            Se = I.call(this, pe)
                        }
                        ce.call(this, Se, Ue)
                    }
                    me && Pe && me.call(this, Pe)
                }
                function Oe(re) {
                    re.stop()
                }
                function nn(re, ce) {
                    re.set(ce)
                }
                function Bv(re) {
                    this.$el.css(re)
                }
                function Ge(re, ce) {
                    l[re] = function() {
                        return this.children ? zv.call(this, ce, arguments) : (this.el && ce.apply(this, arguments),
                        this)
                    }
                }
                function zv(re, ce) {
                    var me, pe = this.children.length;
                    for (me = 0; pe > me; me++)
                        re.apply(this.children[me], ce);
                    return this
                }
                l.init = function(re) {
                    if (this.$el = e(re),
                    this.el = this.$el[0],
                    this.props = {},
                    this.queue = [],
                    this.style = "",
                    this.active = !1,
                    oe.keepInherited && !oe.fallback) {
                        var ce = W(this.el, "transition");
                        ce && !Q.test(ce) && (this.upstream = ce)
                    }
                    V.backface && oe.hideBackface && h(this.el, V.backface.css, "hidden")
                }
                ,
                Ge("add", I),
                Ge("start", O),
                Ge("wait", P),
                Ge("then", A),
                Ge("next", N),
                Ge("stop", Z),
                Ge("set", ae),
                Ge("show", he),
                Ge("hide", K),
                Ge("redraw", se),
                Ge("destroy", ue)
            })
              , y = v(p, function(l) {
                function I(O, P) {
                    var A = e.data(O, R) || e.data(O, R, new p.Bare);
                    return A.el || A.init(O),
                    P ? A.start(P) : A
                }
                l.init = function(O, P) {
                    var A = e(O);
                    if (!A.length)
                        return this;
                    if (A.length === 1)
                        return I(A[0], P);
                    var N = [];
                    return A.each(function(Z, ae) {
                        N.push(I(ae, P))
                    }),
                    this.children = N,
                    this
                }
            })
              , _ = v(function(l) {
                function I() {
                    var N = this.get();
                    this.update("auto");
                    var Z = this.get();
                    return this.update(N),
                    Z
                }
                function O(N, Z, ae) {
                    return Z !== void 0 && (ae = Z),
                    N in g ? N : ae
                }
                function P(N) {
                    var Z = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(N);
                    return (Z ? o(Z[1], Z[2], Z[3]) : N).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var A = {
                    duration: 500,
                    ease: "ease",
                    delay: 0
                };
                l.init = function(N, Z, ae, he) {
                    this.$el = N,
                    this.el = N[0];
                    var K = Z[0];
                    ae[2] && (K = ae[2]),
                    $[K] && (K = $[K]),
                    this.name = K,
                    this.type = ae[1],
                    this.duration = s(Z[1], this.duration, A.duration),
                    this.ease = O(Z[2], this.ease, A.ease),
                    this.delay = s(Z[3], this.delay, A.delay),
                    this.span = this.duration + this.delay,
                    this.active = !1,
                    this.nextStyle = null,
                    this.auto = J.test(this.name),
                    this.unit = he.unit || this.unit || oe.defaultUnit,
                    this.angle = he.angle || this.angle || oe.defaultAngle,
                    oe.fallback || he.fallback ? this.animate = this.fallback : (this.animate = this.transition,
                    this.string = this.name + ee + this.duration + "ms" + (this.ease != "ease" ? ee + g[this.ease][0] : "") + (this.delay ? ee + this.delay + "ms" : ""))
                }
                ,
                l.set = function(N) {
                    N = this.convert(N, this.type),
                    this.update(N),
                    this.redraw()
                }
                ,
                l.transition = function(N) {
                    this.active = !0,
                    N = this.convert(N, this.type),
                    this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()),
                    this.redraw()),
                    N == "auto" && (N = I.call(this))),
                    this.nextStyle = N
                }
                ,
                l.fallback = function(N) {
                    var Z = this.el.style[this.name] || this.convert(this.get(), this.type);
                    N = this.convert(N, this.type),
                    this.auto && (Z == "auto" && (Z = this.convert(this.get(), this.type)),
                    N == "auto" && (N = I.call(this))),
                    this.tween = new x({
                        from: Z,
                        to: N,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                l.get = function() {
                    return W(this.el, this.name)
                }
                ,
                l.update = function(N) {
                    h(this.el, this.name, N)
                }
                ,
                l.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1,
                    this.nextStyle = null,
                    h(this.el, this.name, this.get()));
                    var N = this.tween;
                    N && N.context && N.destroy()
                }
                ,
                l.convert = function(N, Z) {
                    if (N == "auto" && this.auto)
                        return N;
                    var ae, he = typeof N == "number", K = typeof N == "string";
                    switch (Z) {
                    case C:
                        if (he)
                            return N;
                        if (K && N.replace(b, "") === "")
                            return +N;
                        ae = "number(unitless)";
                        break;
                    case D:
                        if (K) {
                            if (N === "" && this.original)
                                return this.original;
                            if (Z.test(N))
                                return N.charAt(0) == "#" && N.length == 7 ? N : P(N)
                        }
                        ae = "hex or rgb string";
                        break;
                    case F:
                        if (he)
                            return N + this.unit;
                        if (K && Z.test(N))
                            return N;
                        ae = "number(px) or string(unit)";
                        break;
                    case M:
                        if (he)
                            return N + this.unit;
                        if (K && Z.test(N))
                            return N;
                        ae = "number(px) or string(unit or %)";
                        break;
                    case H:
                        if (he)
                            return N + this.angle;
                        if (K && Z.test(N))
                            return N;
                        ae = "number(deg) or string(angle)";
                        break;
                    case j:
                        if (he || K && M.test(N))
                            return N;
                        ae = "number(unitless) or string(unit or %)"
                    }
                    return a(ae, N),
                    N
                }
                ,
                l.redraw = function() {
                    this.el.offsetHeight
                }
            })
              , c = v(_, function(l, I) {
                l.init = function() {
                    I.init.apply(this, arguments),
                    this.original || (this.original = this.convert(this.get(), D))
                }
            })
              , k = v(_, function(l, I) {
                l.init = function() {
                    I.init.apply(this, arguments),
                    this.animate = this.fallback
                }
                ,
                l.get = function() {
                    return this.$el[this.name]()
                }
                ,
                l.update = function(O) {
                    this.$el[this.name](O)
                }
            })
              , U = v(_, function(l, I) {
                function O(P, A) {
                    var N, Z, ae, he, K;
                    for (N in P)
                        he = de[N],
                        ae = he[0],
                        Z = he[1] || N,
                        K = this.convert(P[N], ae),
                        A.call(this, Z, K, ae)
                }
                l.init = function() {
                    I.init.apply(this, arguments),
                    this.current || (this.current = {},
                    de.perspective && oe.perspective && (this.current.perspective = oe.perspective,
                    h(this.el, this.name, this.style(this.current)),
                    this.redraw()))
                }
                ,
                l.set = function(P) {
                    O.call(this, P, function(A, N) {
                        this.current[A] = N
                    }),
                    h(this.el, this.name, this.style(this.current)),
                    this.redraw()
                }
                ,
                l.transition = function(P) {
                    var A = this.values(P);
                    this.tween = new fe({
                        current: this.current,
                        values: A,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var N, Z = {};
                    for (N in this.current)
                        Z[N] = N in A ? A[N] : this.current[N];
                    this.active = !0,
                    this.nextStyle = this.style(Z)
                }
                ,
                l.fallback = function(P) {
                    var A = this.values(P);
                    this.tween = new fe({
                        current: this.current,
                        values: A,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                l.update = function() {
                    h(this.el, this.name, this.style(this.current))
                }
                ,
                l.style = function(P) {
                    var A, N = "";
                    for (A in P)
                        N += A + "(" + P[A] + ") ";
                    return N
                }
                ,
                l.values = function(P) {
                    var A, N = {};
                    return O.call(this, P, function(Z, ae, he) {
                        N[Z] = ae,
                        this.current[Z] === void 0 && (A = 0,
                        ~Z.indexOf("scale") && (A = 1),
                        this.current[Z] = this.convert(A, he))
                    }),
                    N
                }
            })
              , x = v(function(l) {
                function I(K) {
                    ae.push(K) === 1 && G(O)
                }
                function O() {
                    var K, se, ue, _e = ae.length;
                    if (_e)
                        for (G(O),
                        se = Y(),
                        K = _e; K--; )
                            ue = ae[K],
                            ue && ue.render(se)
                }
                function P(K) {
                    var se, ue = e.inArray(K, ae);
                    ue >= 0 && (se = ae.slice(ue + 1),
                    ae.length = ue,
                    se.length && (ae = ae.concat(se)))
                }
                function A(K) {
                    return Math.round(K * he) / he
                }
                function N(K, se, ue) {
                    return o(K[0] + ue * (se[0] - K[0]), K[1] + ue * (se[1] - K[1]), K[2] + ue * (se[2] - K[2]))
                }
                var Z = {
                    ease: g.ease[1],
                    from: 0,
                    to: 1
                };
                l.init = function(K) {
                    this.duration = K.duration || 0,
                    this.delay = K.delay || 0;
                    var se = K.ease || Z.ease;
                    g[se] && (se = g[se][1]),
                    typeof se != "function" && (se = Z.ease),
                    this.ease = se,
                    this.update = K.update || i,
                    this.complete = K.complete || i,
                    this.context = K.context || this,
                    this.name = K.name;
                    var ue = K.from
                      , _e = K.to;
                    ue === void 0 && (ue = Z.from),
                    _e === void 0 && (_e = Z.to),
                    this.unit = K.unit || "",
                    typeof ue == "number" && typeof _e == "number" ? (this.begin = ue,
                    this.change = _e - ue) : this.format(_e, ue),
                    this.value = this.begin + this.unit,
                    this.start = Y(),
                    K.autoplay !== !1 && this.play()
                }
                ,
                l.play = function() {
                    this.active || (this.start || (this.start = Y()),
                    this.active = !0,
                    I(this))
                }
                ,
                l.stop = function() {
                    this.active && (this.active = !1,
                    P(this))
                }
                ,
                l.render = function(K) {
                    var se, ue = K - this.start;
                    if (this.delay) {
                        if (ue <= this.delay)
                            return;
                        ue -= this.delay
                    }
                    if (ue < this.duration) {
                        var _e = this.ease(ue, 0, 1, this.duration);
                        return se = this.startRGB ? N(this.startRGB, this.endRGB, _e) : A(this.begin + _e * this.change),
                        this.value = se + this.unit,
                        void this.update.call(this.context, this.value)
                    }
                    se = this.endHex || this.begin + this.change,
                    this.value = se + this.unit,
                    this.update.call(this.context, this.value),
                    this.complete.call(this.context),
                    this.destroy()
                }
                ,
                l.format = function(K, se) {
                    if (se += "",
                    K += "",
                    K.charAt(0) == "#")
                        return this.startRGB = r(se),
                        this.endRGB = r(K),
                        this.endHex = K,
                        this.begin = 0,
                        void (this.change = 1);
                    if (!this.unit) {
                        var ue = se.replace(b, "")
                          , _e = K.replace(b, "");
                        ue !== _e && u("tween", se, K),
                        this.unit = ue
                    }
                    se = parseFloat(se),
                    K = parseFloat(K),
                    this.begin = this.value = se,
                    this.change = K - se
                }
                ,
                l.destroy = function() {
                    this.stop(),
                    this.context = null,
                    this.ease = this.update = this.complete = i
                }
                ;
                var ae = []
                  , he = 1e3
            })
              , ie = v(x, function(l) {
                l.init = function(I) {
                    this.duration = I.duration || 0,
                    this.complete = I.complete || i,
                    this.context = I.context,
                    this.play()
                }
                ,
                l.render = function(I) {
                    var O = I - this.start;
                    O < this.duration || (this.complete.call(this.context),
                    this.destroy())
                }
            })
              , fe = v(x, function(l, I) {
                l.init = function(O) {
                    this.context = O.context,
                    this.update = O.update,
                    this.tweens = [],
                    this.current = O.current;
                    var P, A;
                    for (P in O.values)
                        A = O.values[P],
                        this.current[P] !== A && this.tweens.push(new x({
                            name: P,
                            from: this.current[P],
                            to: A,
                            duration: O.duration,
                            delay: O.delay,
                            ease: O.ease,
                            autoplay: !1
                        }));
                    this.play()
                }
                ,
                l.render = function(O) {
                    var P, A, N = this.tweens.length, Z = !1;
                    for (P = N; P--; )
                        A = this.tweens[P],
                        A.context && (A.render(O),
                        this.current[A.name] = A.value,
                        Z = !0);
                    return Z ? void (this.update && this.update.call(this.context)) : this.destroy()
                }
                ,
                l.destroy = function() {
                    if (I.destroy.call(this),
                    this.tweens) {
                        var O, P = this.tweens.length;
                        for (O = P; O--; )
                            this.tweens[O].destroy();
                        this.tweens = null,
                        this.current = null
                    }
                }
            })
              , oe = t.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !V.transition,
                agentTests: []
            };
            t.fallback = function(l) {
                if (!V.transition)
                    return oe.fallback = !0;
                oe.agentTests.push("(" + l + ")");
                var I = new RegExp(oe.agentTests.join("|"),"i");
                oe.fallback = I.test(navigator.userAgent)
            }
            ,
            t.fallback("6.0.[2-5] Safari"),
            t.tween = function(l) {
                return new x(l)
            }
            ,
            t.delay = function(l, I, O) {
                return new ie({
                    complete: I,
                    duration: l,
                    context: O
                })
            }
            ,
            e.fn.tram = function(l) {
                return t.call(null, this, l)
            }
            ;
            var h = e.style
              , W = e.css
              , $ = {
                transform: V.transform && V.transform.css
            }
              , z = {
                color: [c, D],
                background: [c, D, "background-color"],
                "outline-color": [c, D],
                "border-color": [c, D],
                "border-top-color": [c, D],
                "border-right-color": [c, D],
                "border-bottom-color": [c, D],
                "border-left-color": [c, D],
                "border-width": [_, F],
                "border-top-width": [_, F],
                "border-right-width": [_, F],
                "border-bottom-width": [_, F],
                "border-left-width": [_, F],
                "border-spacing": [_, F],
                "letter-spacing": [_, F],
                margin: [_, F],
                "margin-top": [_, F],
                "margin-right": [_, F],
                "margin-bottom": [_, F],
                "margin-left": [_, F],
                padding: [_, F],
                "padding-top": [_, F],
                "padding-right": [_, F],
                "padding-bottom": [_, F],
                "padding-left": [_, F],
                "outline-width": [_, F],
                opacity: [_, C],
                top: [_, M],
                right: [_, M],
                bottom: [_, M],
                left: [_, M],
                "font-size": [_, M],
                "text-indent": [_, M],
                "word-spacing": [_, M],
                width: [_, M],
                "min-width": [_, M],
                "max-width": [_, M],
                height: [_, M],
                "min-height": [_, M],
                "max-height": [_, M],
                "line-height": [_, j],
                "scroll-top": [k, C, "scrollTop"],
                "scroll-left": [k, C, "scrollLeft"]
            }
              , de = {};
            V.transform && (z.transform = [U],
            de = {
                x: [M, "translateX"],
                y: [M, "translateY"],
                rotate: [H],
                rotateX: [H],
                rotateY: [H],
                scale: [C],
                scaleX: [C],
                scaleY: [C],
                skew: [H],
                skewX: [H],
                skewY: [H]
            }),
            V.transform && V.backface && (de.z = [M, "translateZ"],
            de.rotateZ = [H],
            de.scaleZ = [C],
            de.perspective = [F]);
            var Ce = /ms/
              , Xe = /s|\./;
            return e.tram = t
        }(window.jQuery)
    }
    );
    var ha = d( (DF, ga) => {
        "use strict";
        var Jv = window.$
          , eE = Yr() && Jv.tram;
        ga.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {}
              , n = Array.prototype
              , r = Object.prototype
              , o = Function.prototype
              , i = n.push
              , a = n.slice
              , u = n.concat
              , s = r.toString
              , f = r.hasOwnProperty
              , m = n.forEach
              , v = n.map
              , g = n.reduce
              , E = n.reduceRight
              , T = n.filter
              , w = n.every
              , R = n.some
              , b = n.indexOf
              , L = n.lastIndexOf
              , C = Array.isArray
              , D = Object.keys
              , F = o.bind
              , M = e.each = e.forEach = function(S, q, B) {
                if (S == null)
                    return S;
                if (m && S.forEach === m)
                    S.forEach(q, B);
                else if (S.length === +S.length) {
                    for (var V = 0, te = S.length; V < te; V++)
                        if (q.call(B, S[V], V, S) === t)
                            return
                } else
                    for (var ne = e.keys(S), V = 0, te = ne.length; V < te; V++)
                        if (q.call(B, S[ne[V]], ne[V], S) === t)
                            return;
                return S
            }
            ;
            e.map = e.collect = function(S, q, B) {
                var V = [];
                return S == null ? V : v && S.map === v ? S.map(q, B) : (M(S, function(te, ne, G) {
                    V.push(q.call(B, te, ne, G))
                }),
                V)
            }
            ,
            e.find = e.detect = function(S, q, B) {
                var V;
                return H(S, function(te, ne, G) {
                    if (q.call(B, te, ne, G))
                        return V = te,
                        !0
                }),
                V
            }
            ,
            e.filter = e.select = function(S, q, B) {
                var V = [];
                return S == null ? V : T && S.filter === T ? S.filter(q, B) : (M(S, function(te, ne, G) {
                    q.call(B, te, ne, G) && V.push(te)
                }),
                V)
            }
            ;
            var H = e.some = e.any = function(S, q, B) {
                q || (q = e.identity);
                var V = !1;
                return S == null ? V : R && S.some === R ? S.some(q, B) : (M(S, function(te, ne, G) {
                    if (V || (V = q.call(B, te, ne, G)))
                        return t
                }),
                !!V)
            }
            ;
            e.contains = e.include = function(S, q) {
                return S == null ? !1 : b && S.indexOf === b ? S.indexOf(q) != -1 : H(S, function(B) {
                    return B === q
                })
            }
            ,
            e.delay = function(S, q) {
                var B = a.call(arguments, 2);
                return setTimeout(function() {
                    return S.apply(null, B)
                }, q)
            }
            ,
            e.defer = function(S) {
                return e.delay.apply(e, [S, 1].concat(a.call(arguments, 1)))
            }
            ,
            e.throttle = function(S) {
                var q, B, V;
                return function() {
                    q || (q = !0,
                    B = arguments,
                    V = this,
                    eE.frame(function() {
                        q = !1,
                        S.apply(V, B)
                    }))
                }
            }
            ,
            e.debounce = function(S, q, B) {
                var V, te, ne, G, Y, p = function() {
                    var y = e.now() - G;
                    y < q ? V = setTimeout(p, q - y) : (V = null,
                    B || (Y = S.apply(ne, te),
                    ne = te = null))
                };
                return function() {
                    ne = this,
                    te = arguments,
                    G = e.now();
                    var y = B && !V;
                    return V || (V = setTimeout(p, q)),
                    y && (Y = S.apply(ne, te),
                    ne = te = null),
                    Y
                }
            }
            ,
            e.defaults = function(S) {
                if (!e.isObject(S))
                    return S;
                for (var q = 1, B = arguments.length; q < B; q++) {
                    var V = arguments[q];
                    for (var te in V)
                        S[te] === void 0 && (S[te] = V[te])
                }
                return S
            }
            ,
            e.keys = function(S) {
                if (!e.isObject(S))
                    return [];
                if (D)
                    return D(S);
                var q = [];
                for (var B in S)
                    e.has(S, B) && q.push(B);
                return q
            }
            ,
            e.has = function(S, q) {
                return f.call(S, q)
            }
            ,
            e.isObject = function(S) {
                return S === Object(S)
            }
            ,
            e.now = Date.now || function() {
                return new Date().getTime()
            }
            ,
            e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var j = /(.)^/
              , Q = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }
              , J = /\\|'|\r|\n|\u2028|\u2029/g
              , ee = function(S) {
                return "\\" + Q[S]
            }
              , X = /^\s*(\w|\$)+\s*$/;
            return e.template = function(S, q, B) {
                !q && B && (q = B),
                q = e.defaults({}, q, e.templateSettings);
                var V = RegExp([(q.escape || j).source, (q.interpolate || j).source, (q.evaluate || j).source].join("|") + "|$", "g")
                  , te = 0
                  , ne = "__p+='";
                S.replace(V, function(y, _, c, k, U) {
                    return ne += S.slice(te, U).replace(J, ee),
                    te = U + y.length,
                    _ ? ne += `'+
((__t=(` + _ + `))==null?'':_.escape(__t))+
'` : c ? ne += `'+
((__t=(` + c + `))==null?'':__t)+
'` : k && (ne += `';
` + k + `
__p+='`),
                    y
                }),
                ne += `';
`;
                var G = q.variable;
                if (G) {
                    if (!X.test(G))
                        throw new Error("variable is not a bare identifier: " + G)
                } else
                    ne = `with(obj||{}){
` + ne + `}
`,
                    G = "obj";
                ne = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + ne + `return __p;
`;
                var Y;
                try {
                    Y = new Function(q.variable || "obj","_",ne)
                } catch (y) {
                    throw y.source = ne,
                    y
                }
                var p = function(y) {
                    return Y.call(this, y, e)
                };
                return p.source = "function(" + G + `){
` + ne + "}",
                p
            }
            ,
            e
        }()
    }
    );
    var Ne = d( (MF, ba) => {
        "use strict";
        var ge = {}
          , St = {}
          , xt = []
          , $r = window.Webflow || []
          , lt = window.jQuery
          , Ve = lt(window)
          , tE = lt(document)
          , $e = lt.isFunction
          , We = ge._ = ha()
          , Ea = ge.tram = Yr() && lt.tram
          , Fn = !1
          , Zr = !1;
        Ea.config.hideBackface = !1;
        Ea.config.keepInherited = !0;
        ge.define = function(e, t, n) {
            St[e] && ya(St[e]);
            var r = St[e] = t(lt, We, n) || {};
            return ma(r),
            r
        }
        ;
        ge.require = function(e) {
            return St[e]
        }
        ;
        function ma(e) {
            ge.env() && ($e(e.design) && Ve.on("__wf_design", e.design),
            $e(e.preview) && Ve.on("__wf_preview", e.preview)),
            $e(e.destroy) && Ve.on("__wf_destroy", e.destroy),
            e.ready && $e(e.ready) && nE(e)
        }
        function nE(e) {
            if (Fn) {
                e.ready();
                return
            }
            We.contains(xt, e.ready) || xt.push(e.ready)
        }
        function ya(e) {
            $e(e.design) && Ve.off("__wf_design", e.design),
            $e(e.preview) && Ve.off("__wf_preview", e.preview),
            $e(e.destroy) && Ve.off("__wf_destroy", e.destroy),
            e.ready && $e(e.ready) && rE(e)
        }
        function rE(e) {
            xt = We.filter(xt, function(t) {
                return t !== e.ready
            })
        }
        ge.push = function(e) {
            if (Fn) {
                $e(e) && e();
                return
            }
            $r.push(e)
        }
        ;
        ge.env = function(e) {
            var t = window.__wf_design
              , n = typeof t < "u";
            if (!e)
                return n;
            if (e === "design")
                return n && t;
            if (e === "preview")
                return n && !t;
            if (e === "slug")
                return n && window.__wf_slug;
            if (e === "editor")
                return window.WebflowEditor;
            if (e === "test")
                return window.__wf_test;
            if (e === "frame")
                return window !== window.top
        }
        ;
        var Mn = navigator.userAgent.toLowerCase()
          , _a = ge.env.touch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch
          , iE = ge.env.chrome = /chrome/.test(Mn) && /Google/.test(navigator.vendor) && parseInt(Mn.match(/chrome\/(\d+)\./)[1], 10)
          , oE = ge.env.ios = /(ipod|iphone|ipad)/.test(Mn);
        ge.env.safari = /safari/.test(Mn) && !iE && !oE;
        var Qr;
        _a && tE.on("touchstart mousedown", function(e) {
            Qr = e.target
        });
        ge.validClick = _a ? function(e) {
            return e === Qr || lt.contains(e, Qr)
        }
        : function() {
            return !0
        }
        ;
        var Ia = "resize.webflow orientationchange.webflow load.webflow"
          , aE = "scroll.webflow " + Ia;
        ge.resize = Jr(Ve, Ia);
        ge.scroll = Jr(Ve, aE);
        ge.redraw = Jr();
        function Jr(e, t) {
            var n = []
              , r = {};
            return r.up = We.throttle(function(o) {
                We.each(n, function(i) {
                    i(o)
                })
            }),
            e && t && e.on(t, r.up),
            r.on = function(o) {
                typeof o == "function" && (We.contains(n, o) || n.push(o))
            }
            ,
            r.off = function(o) {
                if (!arguments.length) {
                    n = [];
                    return
                }
                n = We.filter(n, function(i) {
                    return i !== o
                })
            }
            ,
            r
        }
        ge.location = function(e) {
            window.location = e
        }
        ;
        ge.env() && (ge.location = function() {}
        );
        ge.ready = function() {
            Fn = !0,
            Zr ? sE() : We.each(xt, va),
            We.each($r, va),
            ge.resize.up()
        }
        ;
        function va(e) {
            $e(e) && e()
        }
        function sE() {
            Zr = !1,
            We.each(St, ma)
        }
        var mt;
        ge.load = function(e) {
            mt.then(e)
        }
        ;
        function Ta() {
            mt && (mt.reject(),
            Ve.off("load", mt.resolve)),
            mt = new lt.Deferred,
            Ve.on("load", mt.resolve)
        }
        ge.destroy = function(e) {
            e = e || {},
            Zr = !0,
            Ve.triggerHandler("__wf_destroy"),
            e.domready != null && (Fn = e.domready),
            We.each(St, ya),
            ge.resize.off(),
            ge.scroll.off(),
            ge.redraw.off(),
            xt = [],
            $r = [],
            mt.state() === "pending" && Ta()
        }
        ;
        lt(ge.ready);
        Ta();
        ba.exports = window.Webflow = ge
    }
    );
    var Oa = d( (FF, Aa) => {
        "use strict";
        var wa = Ne();
        wa.define("brand", Aa.exports = function(e) {
            var t = {}, n = document, r = e("html"), o = e("body"), i = ".w-webflow-badge", a = window.location, u = /PhantomJS/i.test(navigator.userAgent), s = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", f;
            t.ready = function() {
                var E = r.attr("data-wf-status")
                  , T = r.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(T) && a.hostname !== T && (E = !0),
                E && !u && (f = f || v(),
                g(),
                setTimeout(g, 500),
                e(n).off(s, m).on(s, m))
            }
            ;
            function m() {
                var E = n.fullScreen || n.mozFullScreen || n.webkitIsFullScreen || n.msFullscreenElement || !!n.webkitFullscreenElement;
                e(f).attr("style", E ? "display: none !important;" : "")
            }
            function v() {
                var E = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs")
                  , T = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                    marginRight: "4px",
                    width: "26px"
                })
                  , w = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return E.append(T, w),
                E[0]
            }
            function g() {
                var E = o.children(i)
                  , T = E.length && E.get(0) === f
                  , w = wa.env("editor");
                if (T) {
                    w && E.remove();
                    return
                }
                E.length && E.remove(),
                w || o.append(f)
            }
            return t
        }
        )
    }
    );
    var xa = d( (qF, Sa) => {
        "use strict";
        var ei = Ne();
        ei.define("edit", Sa.exports = function(e, t, n) {
            if (n = n || {},
            (ei.env("test") || ei.env("frame")) && !n.fixture && !uE())
                return {
                    exit: 1
                };
            var r = {}, o = e(window), i = e(document.documentElement), a = document.location, u = "hashchange", s, f = n.load || g, m = !1;
            try {
                m = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            m ? f() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && f() : o.on(u, v).triggerHandler(u);
            function v() {
                s || /\?edit/.test(a.hash) && f()
            }
            function g() {
                s = !0,
                window.WebflowEditor = !0,
                o.off(u, v),
                L(function(D) {
                    e.ajax({
                        url: b("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: i.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: E(D)
                    })
                })
            }
            function E(D) {
                return function(F) {
                    if (!F) {
                        console.error("Could not load editor data");
                        return
                    }
                    F.thirdPartyCookiesSupported = D,
                    T(R(F.scriptPath), function() {
                        window.WebflowEditor(F)
                    })
                }
            }
            function T(D, F) {
                e.ajax({
                    type: "GET",
                    url: D,
                    dataType: "script",
                    cache: !0
                }).then(F, w)
            }
            function w(D, F, M) {
                throw console.error("Could not load editor script: " + F),
                M
            }
            function R(D) {
                return D.indexOf("//") >= 0 ? D : b("https://editor-api.webflow.com" + D)
            }
            function b(D) {
                return D.replace(/([^:])\/\//g, "$1/")
            }
            function L(D) {
                var F = window.document.createElement("iframe");
                F.src = "https://webflow.com/site/third-party-cookie-check.html",
                F.style.display = "none",
                F.sandbox = "allow-scripts allow-same-origin";
                var M = function(H) {
                    H.data === "WF_third_party_cookies_unsupported" ? (C(F, M),
                    D(!1)) : H.data === "WF_third_party_cookies_supported" && (C(F, M),
                    D(!0))
                };
                F.onerror = function() {
                    C(F, M),
                    D(!1)
                }
                ,
                window.addEventListener("message", M, !1),
                window.document.body.appendChild(F)
            }
            function C(D, F) {
                window.removeEventListener("message", F, !1),
                D.remove()
            }
            return r
        }
        );
        function uE() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    }
    );
    var Ca = d( (kF, Ra) => {
        "use strict";
        var cE = Ne();
        cE.define("focus-visible", Ra.exports = function() {
            function e(n) {
                var r = !0
                  , o = !1
                  , i = null
                  , a = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };
                function u(C) {
                    return !!(C && C !== document && C.nodeName !== "HTML" && C.nodeName !== "BODY" && "classList"in C && "contains"in C.classList)
                }
                function s(C) {
                    var D = C.type
                      , F = C.tagName;
                    return !!(F === "INPUT" && a[D] && !C.readOnly || F === "TEXTAREA" && !C.readOnly || C.isContentEditable)
                }
                function f(C) {
                    C.getAttribute("data-wf-focus-visible") || C.setAttribute("data-wf-focus-visible", "true")
                }
                function m(C) {
                    C.getAttribute("data-wf-focus-visible") && C.removeAttribute("data-wf-focus-visible")
                }
                function v(C) {
                    C.metaKey || C.altKey || C.ctrlKey || (u(n.activeElement) && f(n.activeElement),
                    r = !0)
                }
                function g() {
                    r = !1
                }
                function E(C) {
                    u(C.target) && (r || s(C.target)) && f(C.target)
                }
                function T(C) {
                    u(C.target) && C.target.hasAttribute("data-wf-focus-visible") && (o = !0,
                    window.clearTimeout(i),
                    i = window.setTimeout(function() {
                        o = !1
                    }, 100),
                    m(C.target))
                }
                function w() {
                    document.visibilityState === "hidden" && (o && (r = !0),
                    R())
                }
                function R() {
                    document.addEventListener("mousemove", L),
                    document.addEventListener("mousedown", L),
                    document.addEventListener("mouseup", L),
                    document.addEventListener("pointermove", L),
                    document.addEventListener("pointerdown", L),
                    document.addEventListener("pointerup", L),
                    document.addEventListener("touchmove", L),
                    document.addEventListener("touchstart", L),
                    document.addEventListener("touchend", L)
                }
                function b() {
                    document.removeEventListener("mousemove", L),
                    document.removeEventListener("mousedown", L),
                    document.removeEventListener("mouseup", L),
                    document.removeEventListener("pointermove", L),
                    document.removeEventListener("pointerdown", L),
                    document.removeEventListener("pointerup", L),
                    document.removeEventListener("touchmove", L),
                    document.removeEventListener("touchstart", L),
                    document.removeEventListener("touchend", L)
                }
                function L(C) {
                    C.target.nodeName && C.target.nodeName.toLowerCase() === "html" || (r = !1,
                    b())
                }
                document.addEventListener("keydown", v, !0),
                document.addEventListener("mousedown", g, !0),
                document.addEventListener("pointerdown", g, !0),
                document.addEventListener("touchstart", g, !0),
                document.addEventListener("visibilitychange", w, !0),
                R(),
                n.addEventListener("focus", E, !0),
                n.addEventListener("blur", T, !0)
            }
            function t() {
                if (typeof document < "u")
                    try {
                        document.querySelector(":focus-visible")
                    } catch {
                        e(document)
                    }
            }
            return {
                ready: t
            }
        }
        )
    }
    );
    var Na = d( (XF, La) => {
        "use strict";
        var Pa = Ne();
        Pa.define("focus", La.exports = function() {
            var e = []
              , t = !1;
            function n(a) {
                t && (a.preventDefault(),
                a.stopPropagation(),
                a.stopImmediatePropagation(),
                e.unshift(a))
            }
            function r(a) {
                var u = a.target
                  , s = u.tagName;
                return /^a$/i.test(s) && u.href != null || /^(button|textarea)$/i.test(s) && u.disabled !== !0 || /^input$/i.test(s) && /^(button|reset|submit|radio|checkbox)$/i.test(u.type) && !u.disabled || !/^(button|input|textarea|select|a)$/i.test(s) && !Number.isNaN(Number.parseFloat(u.tabIndex)) || /^audio$/i.test(s) || /^video$/i.test(s) && u.controls === !0
            }
            function o(a) {
                r(a) && (t = !0,
                setTimeout( () => {
                    for (t = !1,
                    a.target.focus(); e.length > 0; ) {
                        var u = e.pop();
                        u.target.dispatchEvent(new MouseEvent(u.type,u))
                    }
                }
                , 0))
            }
            function i() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Pa.env.safari && (document.addEventListener("mousedown", o, !0),
                document.addEventListener("mouseup", n, !0),
                document.addEventListener("click", n, !0))
            }
            return {
                ready: i
            }
        }
        )
    }
    );
    var Fa = d( (GF, Ma) => {
        "use strict";
        var ti = window.jQuery
          , Ze = {}
          , qn = []
          , Da = ".w-ix"
          , kn = {
            reset: function(e, t) {
                t.__wf_intro = null
            },
            intro: function(e, t) {
                t.__wf_intro || (t.__wf_intro = !0,
                ti(t).triggerHandler(Ze.types.INTRO))
            },
            outro: function(e, t) {
                t.__wf_intro && (t.__wf_intro = null,
                ti(t).triggerHandler(Ze.types.OUTRO))
            }
        };
        Ze.triggers = {};
        Ze.types = {
            INTRO: "w-ix-intro" + Da,
            OUTRO: "w-ix-outro" + Da
        };
        Ze.init = function() {
            for (var e = qn.length, t = 0; t < e; t++) {
                var n = qn[t];
                n[0](0, n[1])
            }
            qn = [],
            ti.extend(Ze.triggers, kn)
        }
        ;
        Ze.async = function() {
            for (var e in kn) {
                var t = kn[e];
                kn.hasOwnProperty(e) && (Ze.triggers[e] = function(n, r) {
                    qn.push([t, r])
                }
                )
            }
        }
        ;
        Ze.async();
        Ma.exports = Ze
    }
    );
    var rn = d( (UF, Xa) => {
        "use strict";
        var ni = Fa();
        function qa(e, t) {
            var n = document.createEvent("CustomEvent");
            n.initCustomEvent(t, !0, !0, null),
            e.dispatchEvent(n)
        }
        var lE = window.jQuery
          , Xn = {}
          , ka = ".w-ix"
          , fE = {
            reset: function(e, t) {
                ni.triggers.reset(e, t)
            },
            intro: function(e, t) {
                ni.triggers.intro(e, t),
                qa(t, "COMPONENT_ACTIVE")
            },
            outro: function(e, t) {
                ni.triggers.outro(e, t),
                qa(t, "COMPONENT_INACTIVE")
            }
        };
        Xn.triggers = {};
        Xn.types = {
            INTRO: "w-ix-intro" + ka,
            OUTRO: "w-ix-outro" + ka
        };
        lE.extend(Xn.triggers, fE);
        Xa.exports = Xn
    }
    );
    var ri = d( (WF, Ga) => {
        var dE = typeof global == "object" && global && global.Object === Object && global;
        Ga.exports = dE
    }
    );
    var He = d( (VF, Ua) => {
        var pE = ri()
          , gE = typeof self == "object" && self && self.Object === Object && self
          , hE = pE || gE || Function("return this")();
        Ua.exports = hE
    }
    );
    var Rt = d( (HF, Wa) => {
        var vE = He()
          , EE = vE.Symbol;
        Wa.exports = EE
    }
    );
    var za = d( (BF, Ba) => {
        var Va = Rt()
          , Ha = Object.prototype
          , mE = Ha.hasOwnProperty
          , yE = Ha.toString
          , on = Va ? Va.toStringTag : void 0;
        function _E(e) {
            var t = mE.call(e, on)
              , n = e[on];
            try {
                e[on] = void 0;
                var r = !0
            } catch {}
            var o = yE.call(e);
            return r && (t ? e[on] = n : delete e[on]),
            o
        }
        Ba.exports = _E
    }
    );
    var ja = d( (zF, Ka) => {
        var IE = Object.prototype
          , TE = IE.toString;
        function bE(e) {
            return TE.call(e)
        }
        Ka.exports = bE
    }
    );
    var ft = d( (KF, $a) => {
        var Ya = Rt()
          , wE = za()
          , AE = ja()
          , OE = "[object Null]"
          , SE = "[object Undefined]"
          , Qa = Ya ? Ya.toStringTag : void 0;
        function xE(e) {
            return e == null ? e === void 0 ? SE : OE : Qa && Qa in Object(e) ? wE(e) : AE(e)
        }
        $a.exports = xE
    }
    );
    var ii = d( (jF, Za) => {
        function RE(e, t) {
            return function(n) {
                return e(t(n))
            }
        }
        Za.exports = RE
    }
    );
    var oi = d( (YF, Ja) => {
        var CE = ii()
          , PE = CE(Object.getPrototypeOf, Object);
        Ja.exports = PE
    }
    );
    var ot = d( (QF, es) => {
        function LE(e) {
            return e != null && typeof e == "object"
        }
        es.exports = LE
    }
    );
    var ai = d( ($F, ns) => {
        var NE = ft()
          , DE = oi()
          , ME = ot()
          , FE = "[object Object]"
          , qE = Function.prototype
          , kE = Object.prototype
          , ts = qE.toString
          , XE = kE.hasOwnProperty
          , GE = ts.call(Object);
        function UE(e) {
            if (!ME(e) || NE(e) != FE)
                return !1;
            var t = DE(e);
            if (t === null)
                return !0;
            var n = XE.call(t, "constructor") && t.constructor;
            return typeof n == "function" && n instanceof n && ts.call(n) == GE
        }
        ns.exports = UE
    }
    );
    var rs = d(si => {
        "use strict";
        Object.defineProperty(si, "__esModule", {
            value: !0
        });
        si.default = WE;
        function WE(e) {
            var t, n = e.Symbol;
            return typeof n == "function" ? n.observable ? t = n.observable : (t = n("observable"),
            n.observable = t) : t = "@@observable",
            t
        }
    }
    );
    var is = d( (ci, ui) => {
        "use strict";
        Object.defineProperty(ci, "__esModule", {
            value: !0
        });
        var VE = rs()
          , HE = BE(VE);
        function BE(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Ct;
        typeof self < "u" ? Ct = self : typeof window < "u" ? Ct = window : typeof global < "u" ? Ct = global : typeof ui < "u" ? Ct = ui : Ct = Function("return this")();
        var zE = (0,
        HE.default)(Ct);
        ci.default = zE
    }
    );
    var li = d(an => {
        "use strict";
        an.__esModule = !0;
        an.ActionTypes = void 0;
        an.default = us;
        var KE = ai()
          , jE = ss(KE)
          , YE = is()
          , os = ss(YE);
        function ss(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var as = an.ActionTypes = {
            INIT: "@@redux/INIT"
        };
        function us(e, t, n) {
            var r;
            if (typeof t == "function" && typeof n > "u" && (n = t,
            t = void 0),
            typeof n < "u") {
                if (typeof n != "function")
                    throw new Error("Expected the enhancer to be a function.");
                return n(us)(e, t)
            }
            if (typeof e != "function")
                throw new Error("Expected the reducer to be a function.");
            var o = e
              , i = t
              , a = []
              , u = a
              , s = !1;
            function f() {
                u === a && (u = a.slice())
            }
            function m() {
                return i
            }
            function v(w) {
                if (typeof w != "function")
                    throw new Error("Expected listener to be a function.");
                var R = !0;
                return f(),
                u.push(w),
                function() {
                    if (R) {
                        R = !1,
                        f();
                        var L = u.indexOf(w);
                        u.splice(L, 1)
                    }
                }
            }
            function g(w) {
                if (!(0,
                jE.default)(w))
                    throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof w.type > "u")
                    throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (s)
                    throw new Error("Reducers may not dispatch actions.");
                try {
                    s = !0,
                    i = o(i, w)
                } finally {
                    s = !1
                }
                for (var R = a = u, b = 0; b < R.length; b++)
                    R[b]();
                return w
            }
            function E(w) {
                if (typeof w != "function")
                    throw new Error("Expected the nextReducer to be a function.");
                o = w,
                g({
                    type: as.INIT
                })
            }
            function T() {
                var w, R = v;
                return w = {
                    subscribe: function(L) {
                        if (typeof L != "object")
                            throw new TypeError("Expected the observer to be an object.");
                        function C() {
                            L.next && L.next(m())
                        }
                        C();
                        var D = R(C);
                        return {
                            unsubscribe: D
                        }
                    }
                },
                w[os.default] = function() {
                    return this
                }
                ,
                w
            }
            return g({
                type: as.INIT
            }),
            r = {
                dispatch: g,
                subscribe: v,
                getState: m,
                replaceReducer: E
            },
            r[os.default] = T,
            r
        }
    }
    );
    var di = d(fi => {
        "use strict";
        fi.__esModule = !0;
        fi.default = QE;
        function QE(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    }
    );
    var fs = d(pi => {
        "use strict";
        pi.__esModule = !0;
        pi.default = tm;
        var cs = li()
          , $E = ai()
          , t1 = ls($E)
          , ZE = di()
          , n1 = ls(ZE);
        function ls(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function JE(e, t) {
            var n = t && t.type
              , r = n && '"' + n.toString() + '"' || "an action";
            return "Given action " + r + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }
        function em(e) {
            Object.keys(e).forEach(function(t) {
                var n = e[t]
                  , r = n(void 0, {
                    type: cs.ActionTypes.INIT
                });
                if (typeof r > "u")
                    throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var o = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof n(void 0, {
                    type: o
                }) > "u")
                    throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + cs.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }
        function tm(e) {
            for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                var o = t[r];
                typeof e[o] == "function" && (n[o] = e[o])
            }
            var i = Object.keys(n);
            if (!1)
                var a;
            var u;
            try {
                em(n)
            } catch (s) {
                u = s
            }
            return function() {
                var f = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0]
                  , m = arguments[1];
                if (u)
                    throw u;
                if (!1)
                    var v;
                for (var g = !1, E = {}, T = 0; T < i.length; T++) {
                    var w = i[T]
                      , R = n[w]
                      , b = f[w]
                      , L = R(b, m);
                    if (typeof L > "u") {
                        var C = JE(w, m);
                        throw new Error(C)
                    }
                    E[w] = L,
                    g = g || L !== b
                }
                return g ? E : f
            }
        }
    }
    );
    var ps = d(gi => {
        "use strict";
        gi.__esModule = !0;
        gi.default = nm;
        function ds(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }
        function nm(e, t) {
            if (typeof e == "function")
                return ds(e, t);
            if (typeof e != "object" || e === null)
                throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var n = Object.keys(e), r = {}, o = 0; o < n.length; o++) {
                var i = n[o]
                  , a = e[i];
                typeof a == "function" && (r[i] = ds(a, t))
            }
            return r
        }
    }
    );
    var vi = d(hi => {
        "use strict";
        hi.__esModule = !0;
        hi.default = rm;
        function rm() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            if (t.length === 0)
                return function(i) {
                    return i
                }
                ;
            if (t.length === 1)
                return t[0];
            var r = t[t.length - 1]
              , o = t.slice(0, -1);
            return function() {
                return o.reduceRight(function(i, a) {
                    return a(i)
                }, r.apply(void 0, arguments))
            }
        }
    }
    );
    var gs = d(Ei => {
        "use strict";
        Ei.__esModule = !0;
        var im = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ;
        Ei.default = um;
        var om = vi()
          , am = sm(om);
        function sm(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function um() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return function(r) {
                return function(o, i, a) {
                    var u = r(o, i, a)
                      , s = u.dispatch
                      , f = []
                      , m = {
                        getState: u.getState,
                        dispatch: function(g) {
                            return s(g)
                        }
                    };
                    return f = t.map(function(v) {
                        return v(m)
                    }),
                    s = am.default.apply(void 0, f)(u.dispatch),
                    im({}, u, {
                        dispatch: s
                    })
                }
            }
        }
    }
    );
    var mi = d(ke => {
        "use strict";
        ke.__esModule = !0;
        ke.compose = ke.applyMiddleware = ke.bindActionCreators = ke.combineReducers = ke.createStore = void 0;
        var cm = li()
          , lm = Pt(cm)
          , fm = fs()
          , dm = Pt(fm)
          , pm = ps()
          , gm = Pt(pm)
          , hm = gs()
          , vm = Pt(hm)
          , Em = vi()
          , mm = Pt(Em)
          , ym = di()
          , s1 = Pt(ym);
        function Pt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ke.createStore = lm.default;
        ke.combineReducers = dm.default;
        ke.bindActionCreators = gm.default;
        ke.applyMiddleware = vm.default;
        ke.compose = mm.default
    }
    );
    var Be, yi, Je, _m, Im, Gn, Tm, _i = Ee( () => {
        "use strict";
        Be = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        },
        yi = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        },
        Je = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        },
        _m = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        },
        Im = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        },
        Gn = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        },
        Tm = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    }
    );
    var De, bm, Un = Ee( () => {
        "use strict";
        De = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_RIVE: "PLUGIN_RIVE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        },
        bm = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    }
    );
    var wm, hs = Ee( () => {
        "use strict";
        wm = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    }
    );
    var Am, Om, Sm, xm, Rm, Cm, Pm, Ii, vs = Ee( () => {
        "use strict";
        Un();
        ({TRANSFORM_MOVE: Am, TRANSFORM_SCALE: Om, TRANSFORM_ROTATE: Sm, TRANSFORM_SKEW: xm, STYLE_SIZE: Rm, STYLE_FILTER: Cm, STYLE_FONT_VARIATION: Pm} = De),
        Ii = {
            [Am]: !0,
            [Om]: !0,
            [Sm]: !0,
            [xm]: !0,
            [Rm]: !0,
            [Cm]: !0,
            [Pm]: !0
        }
    }
    );
    var Te = {};
    Le(Te, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => jm,
        IX2_ANIMATION_FRAME_CHANGED: () => Wm,
        IX2_CLEAR_REQUESTED: () => Xm,
        IX2_ELEMENT_STATE_CHANGED: () => Km,
        IX2_EVENT_LISTENER_ADDED: () => Gm,
        IX2_EVENT_STATE_CHANGED: () => Um,
        IX2_INSTANCE_ADDED: () => Hm,
        IX2_INSTANCE_REMOVED: () => zm,
        IX2_INSTANCE_STARTED: () => Bm,
        IX2_MEDIA_QUERIES_DEFINED: () => Qm,
        IX2_PARAMETER_CHANGED: () => Vm,
        IX2_PLAYBACK_REQUESTED: () => qm,
        IX2_PREVIEW_REQUESTED: () => Fm,
        IX2_RAW_DATA_IMPORTED: () => Lm,
        IX2_SESSION_INITIALIZED: () => Nm,
        IX2_SESSION_STARTED: () => Dm,
        IX2_SESSION_STOPPED: () => Mm,
        IX2_STOP_REQUESTED: () => km,
        IX2_TEST_FRAME_RENDERED: () => $m,
        IX2_VIEWPORT_WIDTH_CHANGED: () => Ym
    });
    var Lm, Nm, Dm, Mm, Fm, qm, km, Xm, Gm, Um, Wm, Vm, Hm, Bm, zm, Km, jm, Ym, Qm, $m, Es = Ee( () => {
        "use strict";
        Lm = "IX2_RAW_DATA_IMPORTED",
        Nm = "IX2_SESSION_INITIALIZED",
        Dm = "IX2_SESSION_STARTED",
        Mm = "IX2_SESSION_STOPPED",
        Fm = "IX2_PREVIEW_REQUESTED",
        qm = "IX2_PLAYBACK_REQUESTED",
        km = "IX2_STOP_REQUESTED",
        Xm = "IX2_CLEAR_REQUESTED",
        Gm = "IX2_EVENT_LISTENER_ADDED",
        Um = "IX2_EVENT_STATE_CHANGED",
        Wm = "IX2_ANIMATION_FRAME_CHANGED",
        Vm = "IX2_PARAMETER_CHANGED",
        Hm = "IX2_INSTANCE_ADDED",
        Bm = "IX2_INSTANCE_STARTED",
        zm = "IX2_INSTANCE_REMOVED",
        Km = "IX2_ELEMENT_STATE_CHANGED",
        jm = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        Ym = "IX2_VIEWPORT_WIDTH_CHANGED",
        Qm = "IX2_MEDIA_QUERIES_DEFINED",
        $m = "IX2_TEST_FRAME_RENDERED"
    }
    );
    var Ae = {};
    Le(Ae, {
        ABSTRACT_NODE: () => Yy,
        AUTO: () => ky,
        BACKGROUND: () => Ly,
        BACKGROUND_COLOR: () => Py,
        BAR_DELIMITER: () => Uy,
        BORDER_COLOR: () => Ny,
        BOUNDARY_SELECTOR: () => ny,
        CHILDREN: () => Wy,
        COLON_DELIMITER: () => Gy,
        COLOR: () => Dy,
        COMMA_DELIMITER: () => Xy,
        CONFIG_UNIT: () => ly,
        CONFIG_VALUE: () => ay,
        CONFIG_X_UNIT: () => sy,
        CONFIG_X_VALUE: () => ry,
        CONFIG_Y_UNIT: () => uy,
        CONFIG_Y_VALUE: () => iy,
        CONFIG_Z_UNIT: () => cy,
        CONFIG_Z_VALUE: () => oy,
        DISPLAY: () => My,
        FILTER: () => Sy,
        FLEX: () => Fy,
        FONT_VARIATION_SETTINGS: () => xy,
        HEIGHT: () => Cy,
        HTML_ELEMENT: () => Ky,
        IMMEDIATE_CHILDREN: () => Vy,
        IX2_ID_DELIMITER: () => Zm,
        OPACITY: () => Oy,
        PARENT: () => By,
        PLAIN_OBJECT: () => jy,
        PRESERVE_3D: () => zy,
        RENDER_GENERAL: () => $y,
        RENDER_PLUGIN: () => Jy,
        RENDER_STYLE: () => Zy,
        RENDER_TRANSFORM: () => Qy,
        ROTATE_X: () => _y,
        ROTATE_Y: () => Iy,
        ROTATE_Z: () => Ty,
        SCALE_3D: () => yy,
        SCALE_X: () => vy,
        SCALE_Y: () => Ey,
        SCALE_Z: () => my,
        SIBLINGS: () => Hy,
        SKEW: () => by,
        SKEW_X: () => wy,
        SKEW_Y: () => Ay,
        TRANSFORM: () => fy,
        TRANSLATE_3D: () => hy,
        TRANSLATE_X: () => dy,
        TRANSLATE_Y: () => py,
        TRANSLATE_Z: () => gy,
        WF_PAGE: () => Jm,
        WIDTH: () => Ry,
        WILL_CHANGE: () => qy,
        W_MOD_IX: () => ty,
        W_MOD_JS: () => ey
    });
    var Zm, Jm, ey, ty, ny, ry, iy, oy, ay, sy, uy, cy, ly, fy, dy, py, gy, hy, vy, Ey, my, yy, _y, Iy, Ty, by, wy, Ay, Oy, Sy, xy, Ry, Cy, Py, Ly, Ny, Dy, My, Fy, qy, ky, Xy, Gy, Uy, Wy, Vy, Hy, By, zy, Ky, jy, Yy, Qy, $y, Zy, Jy, ms = Ee( () => {
        "use strict";
        Zm = "|",
        Jm = "data-wf-page",
        ey = "w-mod-js",
        ty = "w-mod-ix",
        ny = ".w-dyn-item",
        ry = "xValue",
        iy = "yValue",
        oy = "zValue",
        ay = "value",
        sy = "xUnit",
        uy = "yUnit",
        cy = "zUnit",
        ly = "unit",
        fy = "transform",
        dy = "translateX",
        py = "translateY",
        gy = "translateZ",
        hy = "translate3d",
        vy = "scaleX",
        Ey = "scaleY",
        my = "scaleZ",
        yy = "scale3d",
        _y = "rotateX",
        Iy = "rotateY",
        Ty = "rotateZ",
        by = "skew",
        wy = "skewX",
        Ay = "skewY",
        Oy = "opacity",
        Sy = "filter",
        xy = "font-variation-settings",
        Ry = "width",
        Cy = "height",
        Py = "backgroundColor",
        Ly = "background",
        Ny = "borderColor",
        Dy = "color",
        My = "display",
        Fy = "flex",
        qy = "willChange",
        ky = "AUTO",
        Xy = ",",
        Gy = ":",
        Uy = "|",
        Wy = "CHILDREN",
        Vy = "IMMEDIATE_CHILDREN",
        Hy = "SIBLINGS",
        By = "PARENT",
        zy = "preserve-3d",
        Ky = "HTML_ELEMENT",
        jy = "PLAIN_OBJECT",
        Yy = "ABSTRACT_NODE",
        Qy = "RENDER_TRANSFORM",
        $y = "RENDER_GENERAL",
        Zy = "RENDER_STYLE",
        Jy = "RENDER_PLUGIN"
    }
    );
    var ys = {};
    Le(ys, {
        ActionAppliesTo: () => bm,
        ActionTypeConsts: () => De,
        EventAppliesTo: () => yi,
        EventBasedOn: () => Je,
        EventContinuousMouseAxes: () => _m,
        EventLimitAffectedElements: () => Im,
        EventTypeConsts: () => Be,
        IX2EngineActionTypes: () => Te,
        IX2EngineConstants: () => Ae,
        InteractionTypeConsts: () => wm,
        QuickEffectDirectionConsts: () => Tm,
        QuickEffectIds: () => Gn,
        ReducedMotionTypes: () => Ii
    });
    var Me = Ee( () => {
        "use strict";
        _i();
        Un();
        hs();
        vs();
        Es();
        ms();
        Un();
        _i()
    }
    );
    var e_, _s, Is = Ee( () => {
        "use strict";
        Me();
        ({IX2_RAW_DATA_IMPORTED: e_} = Te),
        _s = (e=Object.freeze({}), t) => {
            switch (t.type) {
            case e_:
                return t.payload.ixData || Object.freeze({});
            default:
                return e
            }
        }
    }
    );
    var Lt = d(ye => {
        "use strict";
        Object.defineProperty(ye, "__esModule", {
            value: !0
        });
        var t_ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        ye.clone = Vn;
        ye.addLast = ws;
        ye.addFirst = As;
        ye.removeLast = Os;
        ye.removeFirst = Ss;
        ye.insert = xs;
        ye.removeAt = Rs;
        ye.replaceAt = Cs;
        ye.getIn = Hn;
        ye.set = Bn;
        ye.setIn = zn;
        ye.update = Ls;
        ye.updateIn = Ns;
        ye.merge = Ds;
        ye.mergeDeep = Ms;
        ye.mergeIn = Fs;
        ye.omit = qs;
        ye.addDefaults = ks;
        var Ts = "INVALID_ARGS";
        function bs(e) {
            throw new Error(e)
        }
        function Ti(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var n_ = {}.hasOwnProperty;
        function Vn(e) {
            if (Array.isArray(e))
                return e.slice();
            for (var t = Ti(e), n = {}, r = 0; r < t.length; r++) {
                var o = t[r];
                n[o] = e[o]
            }
            return n
        }
        function Fe(e, t, n) {
            var r = n;
            r == null && bs(Ts);
            for (var o = !1, i = arguments.length, a = Array(i > 3 ? i - 3 : 0), u = 3; u < i; u++)
                a[u - 3] = arguments[u];
            for (var s = 0; s < a.length; s++) {
                var f = a[s];
                if (f != null) {
                    var m = Ti(f);
                    if (m.length)
                        for (var v = 0; v <= m.length; v++) {
                            var g = m[v];
                            if (!(e && r[g] !== void 0)) {
                                var E = f[g];
                                t && Wn(r[g]) && Wn(E) && (E = Fe(e, t, r[g], E)),
                                !(E === void 0 || E === r[g]) && (o || (o = !0,
                                r = Vn(r)),
                                r[g] = E)
                            }
                        }
                }
            }
            return r
        }
        function Wn(e) {
            var t = typeof e > "u" ? "undefined" : t_(e);
            return e != null && (t === "object" || t === "function")
        }
        function ws(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }
        function As(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }
        function Os(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }
        function Ss(e) {
            return e.length ? e.slice(1) : e
        }
        function xs(e, t, n) {
            return e.slice(0, t).concat(Array.isArray(n) ? n : [n]).concat(e.slice(t))
        }
        function Rs(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }
        function Cs(e, t, n) {
            if (e[t] === n)
                return e;
            for (var r = e.length, o = Array(r), i = 0; i < r; i++)
                o[i] = e[i];
            return o[t] = n,
            o
        }
        function Hn(e, t) {
            if (!Array.isArray(t) && bs(Ts),
            e != null) {
                for (var n = e, r = 0; r < t.length; r++) {
                    var o = t[r];
                    if (n = n?.[o],
                    n === void 0)
                        return n
                }
                return n
            }
        }
        function Bn(e, t, n) {
            var r = typeof t == "number" ? [] : {}
              , o = e ?? r;
            if (o[t] === n)
                return o;
            var i = Vn(o);
            return i[t] = n,
            i
        }
        function Ps(e, t, n, r) {
            var o = void 0
              , i = t[r];
            if (r === t.length - 1)
                o = n;
            else {
                var a = Wn(e) && Wn(e[i]) ? e[i] : typeof t[r + 1] == "number" ? [] : {};
                o = Ps(a, t, n, r + 1)
            }
            return Bn(e, i, o)
        }
        function zn(e, t, n) {
            return t.length ? Ps(e, t, n, 0) : n
        }
        function Ls(e, t, n) {
            var r = e?.[t]
              , o = n(r);
            return Bn(e, t, o)
        }
        function Ns(e, t, n) {
            var r = Hn(e, t)
              , o = n(r);
            return zn(e, t, o)
        }
        function Ds(e, t, n, r, o, i) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6; s < a; s++)
                u[s - 6] = arguments[s];
            return u.length ? Fe.call.apply(Fe, [null, !1, !1, e, t, n, r, o, i].concat(u)) : Fe(!1, !1, e, t, n, r, o, i)
        }
        function Ms(e, t, n, r, o, i) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6; s < a; s++)
                u[s - 6] = arguments[s];
            return u.length ? Fe.call.apply(Fe, [null, !1, !0, e, t, n, r, o, i].concat(u)) : Fe(!1, !0, e, t, n, r, o, i)
        }
        function Fs(e, t, n, r, o, i, a) {
            var u = Hn(e, t);
            u == null && (u = {});
            for (var s = void 0, f = arguments.length, m = Array(f > 7 ? f - 7 : 0), v = 7; v < f; v++)
                m[v - 7] = arguments[v];
            return m.length ? s = Fe.call.apply(Fe, [null, !1, !1, u, n, r, o, i, a].concat(m)) : s = Fe(!1, !1, u, n, r, o, i, a),
            zn(e, t, s)
        }
        function qs(e, t) {
            for (var n = Array.isArray(t) ? t : [t], r = !1, o = 0; o < n.length; o++)
                if (n_.call(e, n[o])) {
                    r = !0;
                    break
                }
            if (!r)
                return e;
            for (var i = {}, a = Ti(e), u = 0; u < a.length; u++) {
                var s = a[u];
                n.indexOf(s) >= 0 || (i[s] = e[s])
            }
            return i
        }
        function ks(e, t, n, r, o, i) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6; s < a; s++)
                u[s - 6] = arguments[s];
            return u.length ? Fe.call.apply(Fe, [null, !0, !1, e, t, n, r, o, i].concat(u)) : Fe(!0, !1, e, t, n, r, o, i)
        }
        var r_ = {
            clone: Vn,
            addLast: ws,
            addFirst: As,
            removeLast: Os,
            removeFirst: Ss,
            insert: xs,
            removeAt: Rs,
            replaceAt: Cs,
            getIn: Hn,
            set: Bn,
            setIn: zn,
            update: Ls,
            updateIn: Ns,
            merge: Ds,
            mergeDeep: Ms,
            mergeIn: Fs,
            omit: qs,
            addDefaults: ks
        };
        ye.default = r_
    }
    );
    var Gs, i_, o_, a_, s_, u_, Xs, Us, Ws = Ee( () => {
        "use strict";
        Me();
        Gs = le(Lt()),
        {IX2_PREVIEW_REQUESTED: i_, IX2_PLAYBACK_REQUESTED: o_, IX2_STOP_REQUESTED: a_, IX2_CLEAR_REQUESTED: s_} = Te,
        u_ = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        },
        Xs = Object.create(null, {
            [i_]: {
                value: "preview"
            },
            [o_]: {
                value: "playback"
            },
            [a_]: {
                value: "stop"
            },
            [s_]: {
                value: "clear"
            }
        }),
        Us = (e=u_, t) => {
            if (t.type in Xs) {
                let n = [Xs[t.type]];
                return (0,
                Gs.setIn)(e, [n], {
                    ...t.payload
                })
            }
            return e
        }
    }
    );
    var xe, c_, l_, f_, d_, p_, g_, h_, v_, E_, m_, Vs, y_, Hs, Bs = Ee( () => {
        "use strict";
        Me();
        xe = le(Lt()),
        {IX2_SESSION_INITIALIZED: c_, IX2_SESSION_STARTED: l_, IX2_TEST_FRAME_RENDERED: f_, IX2_SESSION_STOPPED: d_, IX2_EVENT_LISTENER_ADDED: p_, IX2_EVENT_STATE_CHANGED: g_, IX2_ANIMATION_FRAME_CHANGED: h_, IX2_ACTION_LIST_PLAYBACK_CHANGED: v_, IX2_VIEWPORT_WIDTH_CHANGED: E_, IX2_MEDIA_QUERIES_DEFINED: m_} = Te,
        Vs = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        },
        y_ = 20,
        Hs = (e=Vs, t) => {
            switch (t.type) {
            case c_:
                {
                    let {hasBoundaryNodes: n, reducedMotion: r} = t.payload;
                    return (0,
                    xe.merge)(e, {
                        hasBoundaryNodes: n,
                        reducedMotion: r
                    })
                }
            case l_:
                return (0,
                xe.set)(e, "active", !0);
            case f_:
                {
                    let {payload: {step: n=y_}} = t;
                    return (0,
                    xe.set)(e, "tick", e.tick + n)
                }
            case d_:
                return Vs;
            case h_:
                {
                    let {payload: {now: n}} = t;
                    return (0,
                    xe.set)(e, "tick", n)
                }
            case p_:
                {
                    let n = (0,
                    xe.addLast)(e.eventListeners, t.payload);
                    return (0,
                    xe.set)(e, "eventListeners", n)
                }
            case g_:
                {
                    let {stateKey: n, newState: r} = t.payload;
                    return (0,
                    xe.setIn)(e, ["eventState", n], r)
                }
            case v_:
                {
                    let {actionListId: n, isPlaying: r} = t.payload;
                    return (0,
                    xe.setIn)(e, ["playbackState", n], r)
                }
            case E_:
                {
                    let {width: n, mediaQueries: r} = t.payload
                      , o = r.length
                      , i = null;
                    for (let a = 0; a < o; a++) {
                        let {key: u, min: s, max: f} = r[a];
                        if (n >= s && n <= f) {
                            i = u;
                            break
                        }
                    }
                    return (0,
                    xe.merge)(e, {
                        viewportWidth: n,
                        mediaQueryKey: i
                    })
                }
            case m_:
                return (0,
                xe.set)(e, "hasDefinedMediaQueries", !0);
            default:
                return e
            }
        }
    }
    );
    var Ks = d( (S1, zs) => {
        function __() {
            this.__data__ = [],
            this.size = 0
        }
        zs.exports = __
    }
    );
    var Kn = d( (x1, js) => {
        function I_(e, t) {
            return e === t || e !== e && t !== t
        }
        js.exports = I_
    }
    );
    var sn = d( (R1, Ys) => {
        var T_ = Kn();
        function b_(e, t) {
            for (var n = e.length; n--; )
                if (T_(e[n][0], t))
                    return n;
            return -1
        }
        Ys.exports = b_
    }
    );
    var $s = d( (C1, Qs) => {
        var w_ = sn()
          , A_ = Array.prototype
          , O_ = A_.splice;
        function S_(e) {
            var t = this.__data__
              , n = w_(t, e);
            if (n < 0)
                return !1;
            var r = t.length - 1;
            return n == r ? t.pop() : O_.call(t, n, 1),
            --this.size,
            !0
        }
        Qs.exports = S_
    }
    );
    var Js = d( (P1, Zs) => {
        var x_ = sn();
        function R_(e) {
            var t = this.__data__
              , n = x_(t, e);
            return n < 0 ? void 0 : t[n][1]
        }
        Zs.exports = R_
    }
    );
    var tu = d( (L1, eu) => {
        var C_ = sn();
        function P_(e) {
            return C_(this.__data__, e) > -1
        }
        eu.exports = P_
    }
    );
    var ru = d( (N1, nu) => {
        var L_ = sn();
        function N_(e, t) {
            var n = this.__data__
              , r = L_(n, e);
            return r < 0 ? (++this.size,
            n.push([e, t])) : n[r][1] = t,
            this
        }
        nu.exports = N_
    }
    );
    var un = d( (D1, iu) => {
        var D_ = Ks()
          , M_ = $s()
          , F_ = Js()
          , q_ = tu()
          , k_ = ru();
        function Nt(e) {
            var t = -1
              , n = e == null ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        Nt.prototype.clear = D_;
        Nt.prototype.delete = M_;
        Nt.prototype.get = F_;
        Nt.prototype.has = q_;
        Nt.prototype.set = k_;
        iu.exports = Nt
    }
    );
    var au = d( (M1, ou) => {
        var X_ = un();
        function G_() {
            this.__data__ = new X_,
            this.size = 0
        }
        ou.exports = G_
    }
    );
    var uu = d( (F1, su) => {
        function U_(e) {
            var t = this.__data__
              , n = t.delete(e);
            return this.size = t.size,
            n
        }
        su.exports = U_
    }
    );
    var lu = d( (q1, cu) => {
        function W_(e) {
            return this.__data__.get(e)
        }
        cu.exports = W_
    }
    );
    var du = d( (k1, fu) => {
        function V_(e) {
            return this.__data__.has(e)
        }
        fu.exports = V_
    }
    );
    var et = d( (X1, pu) => {
        function H_(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        pu.exports = H_
    }
    );
    var bi = d( (G1, gu) => {
        var B_ = ft()
          , z_ = et()
          , K_ = "[object AsyncFunction]"
          , j_ = "[object Function]"
          , Y_ = "[object GeneratorFunction]"
          , Q_ = "[object Proxy]";
        function $_(e) {
            if (!z_(e))
                return !1;
            var t = B_(e);
            return t == j_ || t == Y_ || t == K_ || t == Q_
        }
        gu.exports = $_
    }
    );
    var vu = d( (U1, hu) => {
        var Z_ = He()
          , J_ = Z_["__core-js_shared__"];
        hu.exports = J_
    }
    );
    var yu = d( (W1, mu) => {
        var wi = vu()
          , Eu = function() {
            var e = /[^.]+$/.exec(wi && wi.keys && wi.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();
        function eI(e) {
            return !!Eu && Eu in e
        }
        mu.exports = eI
    }
    );
    var Ai = d( (V1, _u) => {
        var tI = Function.prototype
          , nI = tI.toString;
        function rI(e) {
            if (e != null) {
                try {
                    return nI.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        _u.exports = rI
    }
    );
    var Tu = d( (H1, Iu) => {
        var iI = bi()
          , oI = yu()
          , aI = et()
          , sI = Ai()
          , uI = /[\\^$.*+?()[\]{}|]/g
          , cI = /^\[object .+?Constructor\]$/
          , lI = Function.prototype
          , fI = Object.prototype
          , dI = lI.toString
          , pI = fI.hasOwnProperty
          , gI = RegExp("^" + dI.call(pI).replace(uI, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        function hI(e) {
            if (!aI(e) || oI(e))
                return !1;
            var t = iI(e) ? gI : cI;
            return t.test(sI(e))
        }
        Iu.exports = hI
    }
    );
    var wu = d( (B1, bu) => {
        function vI(e, t) {
            return e?.[t]
        }
        bu.exports = vI
    }
    );
    var dt = d( (z1, Au) => {
        var EI = Tu()
          , mI = wu();
        function yI(e, t) {
            var n = mI(e, t);
            return EI(n) ? n : void 0
        }
        Au.exports = yI
    }
    );
    var jn = d( (K1, Ou) => {
        var _I = dt()
          , II = He()
          , TI = _I(II, "Map");
        Ou.exports = TI
    }
    );
    var cn = d( (j1, Su) => {
        var bI = dt()
          , wI = bI(Object, "create");
        Su.exports = wI
    }
    );
    var Cu = d( (Y1, Ru) => {
        var xu = cn();
        function AI() {
            this.__data__ = xu ? xu(null) : {},
            this.size = 0
        }
        Ru.exports = AI
    }
    );
    var Lu = d( (Q1, Pu) => {
        function OI(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0,
            t
        }
        Pu.exports = OI
    }
    );
    var Du = d( ($1, Nu) => {
        var SI = cn()
          , xI = "__lodash_hash_undefined__"
          , RI = Object.prototype
          , CI = RI.hasOwnProperty;
        function PI(e) {
            var t = this.__data__;
            if (SI) {
                var n = t[e];
                return n === xI ? void 0 : n
            }
            return CI.call(t, e) ? t[e] : void 0
        }
        Nu.exports = PI
    }
    );
    var Fu = d( (Z1, Mu) => {
        var LI = cn()
          , NI = Object.prototype
          , DI = NI.hasOwnProperty;
        function MI(e) {
            var t = this.__data__;
            return LI ? t[e] !== void 0 : DI.call(t, e)
        }
        Mu.exports = MI
    }
    );
    var ku = d( (J1, qu) => {
        var FI = cn()
          , qI = "__lodash_hash_undefined__";
        function kI(e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1,
            n[e] = FI && t === void 0 ? qI : t,
            this
        }
        qu.exports = kI
    }
    );
    var Gu = d( (e2, Xu) => {
        var XI = Cu()
          , GI = Lu()
          , UI = Du()
          , WI = Fu()
          , VI = ku();
        function Dt(e) {
            var t = -1
              , n = e == null ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        Dt.prototype.clear = XI;
        Dt.prototype.delete = GI;
        Dt.prototype.get = UI;
        Dt.prototype.has = WI;
        Dt.prototype.set = VI;
        Xu.exports = Dt
    }
    );
    var Vu = d( (t2, Wu) => {
        var Uu = Gu()
          , HI = un()
          , BI = jn();
        function zI() {
            this.size = 0,
            this.__data__ = {
                hash: new Uu,
                map: new (BI || HI),
                string: new Uu
            }
        }
        Wu.exports = zI
    }
    );
    var Bu = d( (n2, Hu) => {
        function KI(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Hu.exports = KI
    }
    );
    var ln = d( (r2, zu) => {
        var jI = Bu();
        function YI(e, t) {
            var n = e.__data__;
            return jI(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map
        }
        zu.exports = YI
    }
    );
    var ju = d( (i2, Ku) => {
        var QI = ln();
        function $I(e) {
            var t = QI(this, e).delete(e);
            return this.size -= t ? 1 : 0,
            t
        }
        Ku.exports = $I
    }
    );
    var Qu = d( (o2, Yu) => {
        var ZI = ln();
        function JI(e) {
            return ZI(this, e).get(e)
        }
        Yu.exports = JI
    }
    );
    var Zu = d( (a2, $u) => {
        var eT = ln();
        function tT(e) {
            return eT(this, e).has(e)
        }
        $u.exports = tT
    }
    );
    var ec = d( (s2, Ju) => {
        var nT = ln();
        function rT(e, t) {
            var n = nT(this, e)
              , r = n.size;
            return n.set(e, t),
            this.size += n.size == r ? 0 : 1,
            this
        }
        Ju.exports = rT
    }
    );
    var Yn = d( (u2, tc) => {
        var iT = Vu()
          , oT = ju()
          , aT = Qu()
          , sT = Zu()
          , uT = ec();
        function Mt(e) {
            var t = -1
              , n = e == null ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        Mt.prototype.clear = iT;
        Mt.prototype.delete = oT;
        Mt.prototype.get = aT;
        Mt.prototype.has = sT;
        Mt.prototype.set = uT;
        tc.exports = Mt
    }
    );
    var rc = d( (c2, nc) => {
        var cT = un()
          , lT = jn()
          , fT = Yn()
          , dT = 200;
        function pT(e, t) {
            var n = this.__data__;
            if (n instanceof cT) {
                var r = n.__data__;
                if (!lT || r.length < dT - 1)
                    return r.push([e, t]),
                    this.size = ++n.size,
                    this;
                n = this.__data__ = new fT(r)
            }
            return n.set(e, t),
            this.size = n.size,
            this
        }
        nc.exports = pT
    }
    );
    var Oi = d( (l2, ic) => {
        var gT = un()
          , hT = au()
          , vT = uu()
          , ET = lu()
          , mT = du()
          , yT = rc();
        function Ft(e) {
            var t = this.__data__ = new gT(e);
            this.size = t.size
        }
        Ft.prototype.clear = hT;
        Ft.prototype.delete = vT;
        Ft.prototype.get = ET;
        Ft.prototype.has = mT;
        Ft.prototype.set = yT;
        ic.exports = Ft
    }
    );
    var ac = d( (f2, oc) => {
        var _T = "__lodash_hash_undefined__";
        function IT(e) {
            return this.__data__.set(e, _T),
            this
        }
        oc.exports = IT
    }
    );
    var uc = d( (d2, sc) => {
        function TT(e) {
            return this.__data__.has(e)
        }
        sc.exports = TT
    }
    );
    var lc = d( (p2, cc) => {
        var bT = Yn()
          , wT = ac()
          , AT = uc();
        function Qn(e) {
            var t = -1
              , n = e == null ? 0 : e.length;
            for (this.__data__ = new bT; ++t < n; )
                this.add(e[t])
        }
        Qn.prototype.add = Qn.prototype.push = wT;
        Qn.prototype.has = AT;
        cc.exports = Qn
    }
    );
    var dc = d( (g2, fc) => {
        function OT(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
                if (t(e[n], n, e))
                    return !0;
            return !1
        }
        fc.exports = OT
    }
    );
    var gc = d( (h2, pc) => {
        function ST(e, t) {
            return e.has(t)
        }
        pc.exports = ST
    }
    );
    var Si = d( (v2, hc) => {
        var xT = lc()
          , RT = dc()
          , CT = gc()
          , PT = 1
          , LT = 2;
        function NT(e, t, n, r, o, i) {
            var a = n & PT
              , u = e.length
              , s = t.length;
            if (u != s && !(a && s > u))
                return !1;
            var f = i.get(e)
              , m = i.get(t);
            if (f && m)
                return f == t && m == e;
            var v = -1
              , g = !0
              , E = n & LT ? new xT : void 0;
            for (i.set(e, t),
            i.set(t, e); ++v < u; ) {
                var T = e[v]
                  , w = t[v];
                if (r)
                    var R = a ? r(w, T, v, t, e, i) : r(T, w, v, e, t, i);
                if (R !== void 0) {
                    if (R)
                        continue;
                    g = !1;
                    break
                }
                if (E) {
                    if (!RT(t, function(b, L) {
                        if (!CT(E, L) && (T === b || o(T, b, n, r, i)))
                            return E.push(L)
                    })) {
                        g = !1;
                        break
                    }
                } else if (!(T === w || o(T, w, n, r, i))) {
                    g = !1;
                    break
                }
            }
            return i.delete(e),
            i.delete(t),
            g
        }
        hc.exports = NT
    }
    );
    var Ec = d( (E2, vc) => {
        var DT = He()
          , MT = DT.Uint8Array;
        vc.exports = MT
    }
    );
    var yc = d( (m2, mc) => {
        function FT(e) {
            var t = -1
              , n = Array(e.size);
            return e.forEach(function(r, o) {
                n[++t] = [o, r]
            }),
            n
        }
        mc.exports = FT
    }
    );
    var Ic = d( (y2, _c) => {
        function qT(e) {
            var t = -1
              , n = Array(e.size);
            return e.forEach(function(r) {
                n[++t] = r
            }),
            n
        }
        _c.exports = qT
    }
    );
    var Oc = d( (_2, Ac) => {
        var Tc = Rt()
          , bc = Ec()
          , kT = Kn()
          , XT = Si()
          , GT = yc()
          , UT = Ic()
          , WT = 1
          , VT = 2
          , HT = "[object Boolean]"
          , BT = "[object Date]"
          , zT = "[object Error]"
          , KT = "[object Map]"
          , jT = "[object Number]"
          , YT = "[object RegExp]"
          , QT = "[object Set]"
          , $T = "[object String]"
          , ZT = "[object Symbol]"
          , JT = "[object ArrayBuffer]"
          , eb = "[object DataView]"
          , wc = Tc ? Tc.prototype : void 0
          , xi = wc ? wc.valueOf : void 0;
        function tb(e, t, n, r, o, i, a) {
            switch (n) {
            case eb:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                    return !1;
                e = e.buffer,
                t = t.buffer;
            case JT:
                return !(e.byteLength != t.byteLength || !i(new bc(e), new bc(t)));
            case HT:
            case BT:
            case jT:
                return kT(+e, +t);
            case zT:
                return e.name == t.name && e.message == t.message;
            case YT:
            case $T:
                return e == t + "";
            case KT:
                var u = GT;
            case QT:
                var s = r & WT;
                if (u || (u = UT),
                e.size != t.size && !s)
                    return !1;
                var f = a.get(e);
                if (f)
                    return f == t;
                r |= VT,
                a.set(e, t);
                var m = XT(u(e), u(t), r, o, i, a);
                return a.delete(e),
                m;
            case ZT:
                if (xi)
                    return xi.call(e) == xi.call(t)
            }
            return !1
        }
        Ac.exports = tb
    }
    );
    var $n = d( (I2, Sc) => {
        function nb(e, t) {
            for (var n = -1, r = t.length, o = e.length; ++n < r; )
                e[o + n] = t[n];
            return e
        }
        Sc.exports = nb
    }
    );
    var be = d( (T2, xc) => {
        var rb = Array.isArray;
        xc.exports = rb
    }
    );
    var Ri = d( (b2, Rc) => {
        var ib = $n()
          , ob = be();
        function ab(e, t, n) {
            var r = t(e);
            return ob(e) ? r : ib(r, n(e))
        }
        Rc.exports = ab
    }
    );
    var Pc = d( (w2, Cc) => {
        function sb(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r; ) {
                var a = e[n];
                t(a, n, e) && (i[o++] = a)
            }
            return i
        }
        Cc.exports = sb
    }
    );
    var Ci = d( (A2, Lc) => {
        function ub() {
            return []
        }
        Lc.exports = ub
    }
    );
    var Pi = d( (O2, Dc) => {
        var cb = Pc()
          , lb = Ci()
          , fb = Object.prototype
          , db = fb.propertyIsEnumerable
          , Nc = Object.getOwnPropertySymbols
          , pb = Nc ? function(e) {
            return e == null ? [] : (e = Object(e),
            cb(Nc(e), function(t) {
                return db.call(e, t)
            }))
        }
        : lb;
        Dc.exports = pb
    }
    );
    var Fc = d( (S2, Mc) => {
        function gb(e, t) {
            for (var n = -1, r = Array(e); ++n < e; )
                r[n] = t(n);
            return r
        }
        Mc.exports = gb
    }
    );
    var kc = d( (x2, qc) => {
        var hb = ft()
          , vb = ot()
          , Eb = "[object Arguments]";
        function mb(e) {
            return vb(e) && hb(e) == Eb
        }
        qc.exports = mb
    }
    );
    var fn = d( (R2, Uc) => {
        var Xc = kc()
          , yb = ot()
          , Gc = Object.prototype
          , _b = Gc.hasOwnProperty
          , Ib = Gc.propertyIsEnumerable
          , Tb = Xc(function() {
            return arguments
        }()) ? Xc : function(e) {
            return yb(e) && _b.call(e, "callee") && !Ib.call(e, "callee")
        }
        ;
        Uc.exports = Tb
    }
    );
    var Vc = d( (C2, Wc) => {
        function bb() {
            return !1
        }
        Wc.exports = bb
    }
    );
    var Zn = d( (dn, qt) => {
        var wb = He()
          , Ab = Vc()
          , zc = typeof dn == "object" && dn && !dn.nodeType && dn
          , Hc = zc && typeof qt == "object" && qt && !qt.nodeType && qt
          , Ob = Hc && Hc.exports === zc
          , Bc = Ob ? wb.Buffer : void 0
          , Sb = Bc ? Bc.isBuffer : void 0
          , xb = Sb || Ab;
        qt.exports = xb
    }
    );
    var Jn = d( (P2, Kc) => {
        var Rb = 9007199254740991
          , Cb = /^(?:0|[1-9]\d*)$/;
        function Pb(e, t) {
            var n = typeof e;
            return t = t ?? Rb,
            !!t && (n == "number" || n != "symbol" && Cb.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        Kc.exports = Pb
    }
    );
    var er = d( (L2, jc) => {
        var Lb = 9007199254740991;
        function Nb(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Lb
        }
        jc.exports = Nb
    }
    );
    var Qc = d( (N2, Yc) => {
        var Db = ft()
          , Mb = er()
          , Fb = ot()
          , qb = "[object Arguments]"
          , kb = "[object Array]"
          , Xb = "[object Boolean]"
          , Gb = "[object Date]"
          , Ub = "[object Error]"
          , Wb = "[object Function]"
          , Vb = "[object Map]"
          , Hb = "[object Number]"
          , Bb = "[object Object]"
          , zb = "[object RegExp]"
          , Kb = "[object Set]"
          , jb = "[object String]"
          , Yb = "[object WeakMap]"
          , Qb = "[object ArrayBuffer]"
          , $b = "[object DataView]"
          , Zb = "[object Float32Array]"
          , Jb = "[object Float64Array]"
          , ew = "[object Int8Array]"
          , tw = "[object Int16Array]"
          , nw = "[object Int32Array]"
          , rw = "[object Uint8Array]"
          , iw = "[object Uint8ClampedArray]"
          , ow = "[object Uint16Array]"
          , aw = "[object Uint32Array]"
          , ve = {};
        ve[Zb] = ve[Jb] = ve[ew] = ve[tw] = ve[nw] = ve[rw] = ve[iw] = ve[ow] = ve[aw] = !0;
        ve[qb] = ve[kb] = ve[Qb] = ve[Xb] = ve[$b] = ve[Gb] = ve[Ub] = ve[Wb] = ve[Vb] = ve[Hb] = ve[Bb] = ve[zb] = ve[Kb] = ve[jb] = ve[Yb] = !1;
        function sw(e) {
            return Fb(e) && Mb(e.length) && !!ve[Db(e)]
        }
        Yc.exports = sw
    }
    );
    var Zc = d( (D2, $c) => {
        function uw(e) {
            return function(t) {
                return e(t)
            }
        }
        $c.exports = uw
    }
    );
    var el = d( (pn, kt) => {
        var cw = ri()
          , Jc = typeof pn == "object" && pn && !pn.nodeType && pn
          , gn = Jc && typeof kt == "object" && kt && !kt.nodeType && kt
          , lw = gn && gn.exports === Jc
          , Li = lw && cw.process
          , fw = function() {
            try {
                var e = gn && gn.require && gn.require("util").types;
                return e || Li && Li.binding && Li.binding("util")
            } catch {}
        }();
        kt.exports = fw
    }
    );
    var tr = d( (M2, rl) => {
        var dw = Qc()
          , pw = Zc()
          , tl = el()
          , nl = tl && tl.isTypedArray
          , gw = nl ? pw(nl) : dw;
        rl.exports = gw
    }
    );
    var Ni = d( (F2, il) => {
        var hw = Fc()
          , vw = fn()
          , Ew = be()
          , mw = Zn()
          , yw = Jn()
          , _w = tr()
          , Iw = Object.prototype
          , Tw = Iw.hasOwnProperty;
        function bw(e, t) {
            var n = Ew(e)
              , r = !n && vw(e)
              , o = !n && !r && mw(e)
              , i = !n && !r && !o && _w(e)
              , a = n || r || o || i
              , u = a ? hw(e.length, String) : []
              , s = u.length;
            for (var f in e)
                (t || Tw.call(e, f)) && !(a && (f == "length" || o && (f == "offset" || f == "parent") || i && (f == "buffer" || f == "byteLength" || f == "byteOffset") || yw(f, s))) && u.push(f);
            return u
        }
        il.exports = bw
    }
    );
    var nr = d( (q2, ol) => {
        var ww = Object.prototype;
        function Aw(e) {
            var t = e && e.constructor
              , n = typeof t == "function" && t.prototype || ww;
            return e === n
        }
        ol.exports = Aw
    }
    );
    var sl = d( (k2, al) => {
        var Ow = ii()
          , Sw = Ow(Object.keys, Object);
        al.exports = Sw
    }
    );
    var rr = d( (X2, ul) => {
        var xw = nr()
          , Rw = sl()
          , Cw = Object.prototype
          , Pw = Cw.hasOwnProperty;
        function Lw(e) {
            if (!xw(e))
                return Rw(e);
            var t = [];
            for (var n in Object(e))
                Pw.call(e, n) && n != "constructor" && t.push(n);
            return t
        }
        ul.exports = Lw
    }
    );
    var yt = d( (G2, cl) => {
        var Nw = bi()
          , Dw = er();
        function Mw(e) {
            return e != null && Dw(e.length) && !Nw(e)
        }
        cl.exports = Mw
    }
    );
    var hn = d( (U2, ll) => {
        var Fw = Ni()
          , qw = rr()
          , kw = yt();
        function Xw(e) {
            return kw(e) ? Fw(e) : qw(e)
        }
        ll.exports = Xw
    }
    );
    var dl = d( (W2, fl) => {
        var Gw = Ri()
          , Uw = Pi()
          , Ww = hn();
        function Vw(e) {
            return Gw(e, Ww, Uw)
        }
        fl.exports = Vw
    }
    );
    var hl = d( (V2, gl) => {
        var pl = dl()
          , Hw = 1
          , Bw = Object.prototype
          , zw = Bw.hasOwnProperty;
        function Kw(e, t, n, r, o, i) {
            var a = n & Hw
              , u = pl(e)
              , s = u.length
              , f = pl(t)
              , m = f.length;
            if (s != m && !a)
                return !1;
            for (var v = s; v--; ) {
                var g = u[v];
                if (!(a ? g in t : zw.call(t, g)))
                    return !1
            }
            var E = i.get(e)
              , T = i.get(t);
            if (E && T)
                return E == t && T == e;
            var w = !0;
            i.set(e, t),
            i.set(t, e);
            for (var R = a; ++v < s; ) {
                g = u[v];
                var b = e[g]
                  , L = t[g];
                if (r)
                    var C = a ? r(L, b, g, t, e, i) : r(b, L, g, e, t, i);
                if (!(C === void 0 ? b === L || o(b, L, n, r, i) : C)) {
                    w = !1;
                    break
                }
                R || (R = g == "constructor")
            }
            if (w && !R) {
                var D = e.constructor
                  , F = t.constructor;
                D != F && "constructor"in e && "constructor"in t && !(typeof D == "function" && D instanceof D && typeof F == "function" && F instanceof F) && (w = !1)
            }
            return i.delete(e),
            i.delete(t),
            w
        }
        gl.exports = Kw
    }
    );
    var El = d( (H2, vl) => {
        var jw = dt()
          , Yw = He()
          , Qw = jw(Yw, "DataView");
        vl.exports = Qw
    }
    );
    var yl = d( (B2, ml) => {
        var $w = dt()
          , Zw = He()
          , Jw = $w(Zw, "Promise");
        ml.exports = Jw
    }
    );
    var Il = d( (z2, _l) => {
        var eA = dt()
          , tA = He()
          , nA = eA(tA, "Set");
        _l.exports = nA
    }
    );
    var Di = d( (K2, Tl) => {
        var rA = dt()
          , iA = He()
          , oA = rA(iA, "WeakMap");
        Tl.exports = oA
    }
    );
    var ir = d( (j2, Rl) => {
        var Mi = El()
          , Fi = jn()
          , qi = yl()
          , ki = Il()
          , Xi = Di()
          , xl = ft()
          , Xt = Ai()
          , bl = "[object Map]"
          , aA = "[object Object]"
          , wl = "[object Promise]"
          , Al = "[object Set]"
          , Ol = "[object WeakMap]"
          , Sl = "[object DataView]"
          , sA = Xt(Mi)
          , uA = Xt(Fi)
          , cA = Xt(qi)
          , lA = Xt(ki)
          , fA = Xt(Xi)
          , _t = xl;
        (Mi && _t(new Mi(new ArrayBuffer(1))) != Sl || Fi && _t(new Fi) != bl || qi && _t(qi.resolve()) != wl || ki && _t(new ki) != Al || Xi && _t(new Xi) != Ol) && (_t = function(e) {
            var t = xl(e)
              , n = t == aA ? e.constructor : void 0
              , r = n ? Xt(n) : "";
            if (r)
                switch (r) {
                case sA:
                    return Sl;
                case uA:
                    return bl;
                case cA:
                    return wl;
                case lA:
                    return Al;
                case fA:
                    return Ol
                }
            return t
        }
        );
        Rl.exports = _t
    }
    );
    var ql = d( (Y2, Fl) => {
        var Gi = Oi()
          , dA = Si()
          , pA = Oc()
          , gA = hl()
          , Cl = ir()
          , Pl = be()
          , Ll = Zn()
          , hA = tr()
          , vA = 1
          , Nl = "[object Arguments]"
          , Dl = "[object Array]"
          , or = "[object Object]"
          , EA = Object.prototype
          , Ml = EA.hasOwnProperty;
        function mA(e, t, n, r, o, i) {
            var a = Pl(e)
              , u = Pl(t)
              , s = a ? Dl : Cl(e)
              , f = u ? Dl : Cl(t);
            s = s == Nl ? or : s,
            f = f == Nl ? or : f;
            var m = s == or
              , v = f == or
              , g = s == f;
            if (g && Ll(e)) {
                if (!Ll(t))
                    return !1;
                a = !0,
                m = !1
            }
            if (g && !m)
                return i || (i = new Gi),
                a || hA(e) ? dA(e, t, n, r, o, i) : pA(e, t, s, n, r, o, i);
            if (!(n & vA)) {
                var E = m && Ml.call(e, "__wrapped__")
                  , T = v && Ml.call(t, "__wrapped__");
                if (E || T) {
                    var w = E ? e.value() : e
                      , R = T ? t.value() : t;
                    return i || (i = new Gi),
                    o(w, R, n, r, i)
                }
            }
            return g ? (i || (i = new Gi),
            gA(e, t, n, r, o, i)) : !1
        }
        Fl.exports = mA
    }
    );
    var Ui = d( (Q2, Gl) => {
        var yA = ql()
          , kl = ot();
        function Xl(e, t, n, r, o) {
            return e === t ? !0 : e == null || t == null || !kl(e) && !kl(t) ? e !== e && t !== t : yA(e, t, n, r, Xl, o)
        }
        Gl.exports = Xl
    }
    );
    var Wl = d( ($2, Ul) => {
        var _A = Oi()
          , IA = Ui()
          , TA = 1
          , bA = 2;
        function wA(e, t, n, r) {
            var o = n.length
              , i = o
              , a = !r;
            if (e == null)
                return !i;
            for (e = Object(e); o--; ) {
                var u = n[o];
                if (a && u[2] ? u[1] !== e[u[0]] : !(u[0]in e))
                    return !1
            }
            for (; ++o < i; ) {
                u = n[o];
                var s = u[0]
                  , f = e[s]
                  , m = u[1];
                if (a && u[2]) {
                    if (f === void 0 && !(s in e))
                        return !1
                } else {
                    var v = new _A;
                    if (r)
                        var g = r(f, m, s, e, t, v);
                    if (!(g === void 0 ? IA(m, f, TA | bA, r, v) : g))
                        return !1
                }
            }
            return !0
        }
        Ul.exports = wA
    }
    );
    var Wi = d( (Z2, Vl) => {
        var AA = et();
        function OA(e) {
            return e === e && !AA(e)
        }
        Vl.exports = OA
    }
    );
    var Bl = d( (J2, Hl) => {
        var SA = Wi()
          , xA = hn();
        function RA(e) {
            for (var t = xA(e), n = t.length; n--; ) {
                var r = t[n]
                  , o = e[r];
                t[n] = [r, o, SA(o)]
            }
            return t
        }
        Hl.exports = RA
    }
    );
    var Vi = d( (eq, zl) => {
        function CA(e, t) {
            return function(n) {
                return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n))
            }
        }
        zl.exports = CA
    }
    );
    var jl = d( (tq, Kl) => {
        var PA = Wl()
          , LA = Bl()
          , NA = Vi();
        function DA(e) {
            var t = LA(e);
            return t.length == 1 && t[0][2] ? NA(t[0][0], t[0][1]) : function(n) {
                return n === e || PA(n, e, t)
            }
        }
        Kl.exports = DA
    }
    );
    var vn = d( (nq, Yl) => {
        var MA = ft()
          , FA = ot()
          , qA = "[object Symbol]";
        function kA(e) {
            return typeof e == "symbol" || FA(e) && MA(e) == qA
        }
        Yl.exports = kA
    }
    );
    var ar = d( (rq, Ql) => {
        var XA = be()
          , GA = vn()
          , UA = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
          , WA = /^\w*$/;
        function VA(e, t) {
            if (XA(e))
                return !1;
            var n = typeof e;
            return n == "number" || n == "symbol" || n == "boolean" || e == null || GA(e) ? !0 : WA.test(e) || !UA.test(e) || t != null && e in Object(t)
        }
        Ql.exports = VA
    }
    );
    var Jl = d( (iq, Zl) => {
        var $l = Yn()
          , HA = "Expected a function";
        function Hi(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function")
                throw new TypeError(HA);
            var n = function() {
                var r = arguments
                  , o = t ? t.apply(this, r) : r[0]
                  , i = n.cache;
                if (i.has(o))
                    return i.get(o);
                var a = e.apply(this, r);
                return n.cache = i.set(o, a) || i,
                a
            };
            return n.cache = new (Hi.Cache || $l),
            n
        }
        Hi.Cache = $l;
        Zl.exports = Hi
    }
    );
    var tf = d( (oq, ef) => {
        var BA = Jl()
          , zA = 500;
        function KA(e) {
            var t = BA(e, function(r) {
                return n.size === zA && n.clear(),
                r
            })
              , n = t.cache;
            return t
        }
        ef.exports = KA
    }
    );
    var rf = d( (aq, nf) => {
        var jA = tf()
          , YA = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
          , QA = /\\(\\)?/g
          , $A = jA(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""),
            e.replace(YA, function(n, r, o, i) {
                t.push(o ? i.replace(QA, "$1") : r || n)
            }),
            t
        });
        nf.exports = $A
    }
    );
    var Bi = d( (sq, of) => {
        function ZA(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
                o[n] = t(e[n], n, e);
            return o
        }
        of.exports = ZA
    }
    );
    var ff = d( (uq, lf) => {
        var af = Rt()
          , JA = Bi()
          , e0 = be()
          , t0 = vn()
          , n0 = 1 / 0
          , sf = af ? af.prototype : void 0
          , uf = sf ? sf.toString : void 0;
        function cf(e) {
            if (typeof e == "string")
                return e;
            if (e0(e))
                return JA(e, cf) + "";
            if (t0(e))
                return uf ? uf.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -n0 ? "-0" : t
        }
        lf.exports = cf
    }
    );
    var pf = d( (cq, df) => {
        var r0 = ff();
        function i0(e) {
            return e == null ? "" : r0(e)
        }
        df.exports = i0
    }
    );
    var En = d( (lq, gf) => {
        var o0 = be()
          , a0 = ar()
          , s0 = rf()
          , u0 = pf();
        function c0(e, t) {
            return o0(e) ? e : a0(e, t) ? [e] : s0(u0(e))
        }
        gf.exports = c0
    }
    );
    var Gt = d( (fq, hf) => {
        var l0 = vn()
          , f0 = 1 / 0;
        function d0(e) {
            if (typeof e == "string" || l0(e))
                return e;
            var t = e + "";
            return t == "0" && 1 / e == -f0 ? "-0" : t
        }
        hf.exports = d0
    }
    );
    var sr = d( (dq, vf) => {
        var p0 = En()
          , g0 = Gt();
        function h0(e, t) {
            t = p0(t, e);
            for (var n = 0, r = t.length; e != null && n < r; )
                e = e[g0(t[n++])];
            return n && n == r ? e : void 0
        }
        vf.exports = h0
    }
    );
    var ur = d( (pq, Ef) => {
        var v0 = sr();
        function E0(e, t, n) {
            var r = e == null ? void 0 : v0(e, t);
            return r === void 0 ? n : r
        }
        Ef.exports = E0
    }
    );
    var yf = d( (gq, mf) => {
        function m0(e, t) {
            return e != null && t in Object(e)
        }
        mf.exports = m0
    }
    );
    var If = d( (hq, _f) => {
        var y0 = En()
          , _0 = fn()
          , I0 = be()
          , T0 = Jn()
          , b0 = er()
          , w0 = Gt();
        function A0(e, t, n) {
            t = y0(t, e);
            for (var r = -1, o = t.length, i = !1; ++r < o; ) {
                var a = w0(t[r]);
                if (!(i = e != null && n(e, a)))
                    break;
                e = e[a]
            }
            return i || ++r != o ? i : (o = e == null ? 0 : e.length,
            !!o && b0(o) && T0(a, o) && (I0(e) || _0(e)))
        }
        _f.exports = A0
    }
    );
    var bf = d( (vq, Tf) => {
        var O0 = yf()
          , S0 = If();
        function x0(e, t) {
            return e != null && S0(e, t, O0)
        }
        Tf.exports = x0
    }
    );
    var Af = d( (Eq, wf) => {
        var R0 = Ui()
          , C0 = ur()
          , P0 = bf()
          , L0 = ar()
          , N0 = Wi()
          , D0 = Vi()
          , M0 = Gt()
          , F0 = 1
          , q0 = 2;
        function k0(e, t) {
            return L0(e) && N0(t) ? D0(M0(e), t) : function(n) {
                var r = C0(n, e);
                return r === void 0 && r === t ? P0(n, e) : R0(t, r, F0 | q0)
            }
        }
        wf.exports = k0
    }
    );
    var cr = d( (mq, Of) => {
        function X0(e) {
            return e
        }
        Of.exports = X0
    }
    );
    var zi = d( (yq, Sf) => {
        function G0(e) {
            return function(t) {
                return t?.[e]
            }
        }
        Sf.exports = G0
    }
    );
    var Rf = d( (_q, xf) => {
        var U0 = sr();
        function W0(e) {
            return function(t) {
                return U0(t, e)
            }
        }
        xf.exports = W0
    }
    );
    var Pf = d( (Iq, Cf) => {
        var V0 = zi()
          , H0 = Rf()
          , B0 = ar()
          , z0 = Gt();
        function K0(e) {
            return B0(e) ? V0(z0(e)) : H0(e)
        }
        Cf.exports = K0
    }
    );
    var pt = d( (Tq, Lf) => {
        var j0 = jl()
          , Y0 = Af()
          , Q0 = cr()
          , $0 = be()
          , Z0 = Pf();
        function J0(e) {
            return typeof e == "function" ? e : e == null ? Q0 : typeof e == "object" ? $0(e) ? Y0(e[0], e[1]) : j0(e) : Z0(e)
        }
        Lf.exports = J0
    }
    );
    var Ki = d( (bq, Nf) => {
        var eO = pt()
          , tO = yt()
          , nO = hn();
        function rO(e) {
            return function(t, n, r) {
                var o = Object(t);
                if (!tO(t)) {
                    var i = eO(n, 3);
                    t = nO(t),
                    n = function(u) {
                        return i(o[u], u, o)
                    }
                }
                var a = e(t, n, r);
                return a > -1 ? o[i ? t[a] : a] : void 0
            }
        }
        Nf.exports = rO
    }
    );
    var ji = d( (wq, Df) => {
        function iO(e, t, n, r) {
            for (var o = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o; )
                if (t(e[i], i, e))
                    return i;
            return -1
        }
        Df.exports = iO
    }
    );
    var Ff = d( (Aq, Mf) => {
        var oO = /\s/;
        function aO(e) {
            for (var t = e.length; t-- && oO.test(e.charAt(t)); )
                ;
            return t
        }
        Mf.exports = aO
    }
    );
    var kf = d( (Oq, qf) => {
        var sO = Ff()
          , uO = /^\s+/;
        function cO(e) {
            return e && e.slice(0, sO(e) + 1).replace(uO, "")
        }
        qf.exports = cO
    }
    );
    var lr = d( (Sq, Uf) => {
        var lO = kf()
          , Xf = et()
          , fO = vn()
          , Gf = 0 / 0
          , dO = /^[-+]0x[0-9a-f]+$/i
          , pO = /^0b[01]+$/i
          , gO = /^0o[0-7]+$/i
          , hO = parseInt;
        function vO(e) {
            if (typeof e == "number")
                return e;
            if (fO(e))
                return Gf;
            if (Xf(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Xf(t) ? t + "" : t
            }
            if (typeof e != "string")
                return e === 0 ? e : +e;
            e = lO(e);
            var n = pO.test(e);
            return n || gO.test(e) ? hO(e.slice(2), n ? 2 : 8) : dO.test(e) ? Gf : +e
        }
        Uf.exports = vO
    }
    );
    var Hf = d( (xq, Vf) => {
        var EO = lr()
          , Wf = 1 / 0
          , mO = 17976931348623157e292;
        function yO(e) {
            if (!e)
                return e === 0 ? e : 0;
            if (e = EO(e),
            e === Wf || e === -Wf) {
                var t = e < 0 ? -1 : 1;
                return t * mO
            }
            return e === e ? e : 0
        }
        Vf.exports = yO
    }
    );
    var Yi = d( (Rq, Bf) => {
        var _O = Hf();
        function IO(e) {
            var t = _O(e)
              , n = t % 1;
            return t === t ? n ? t - n : t : 0
        }
        Bf.exports = IO
    }
    );
    var Kf = d( (Cq, zf) => {
        var TO = ji()
          , bO = pt()
          , wO = Yi()
          , AO = Math.max;
        function OO(e, t, n) {
            var r = e == null ? 0 : e.length;
            if (!r)
                return -1;
            var o = n == null ? 0 : wO(n);
            return o < 0 && (o = AO(r + o, 0)),
            TO(e, bO(t, 3), o)
        }
        zf.exports = OO
    }
    );
    var Qi = d( (Pq, jf) => {
        var SO = Ki()
          , xO = Kf()
          , RO = SO(xO);
        jf.exports = RO
    }
    );
    var $f = {};
    Le($f, {
        ELEMENT_MATCHES: () => CO,
        FLEX_PREFIXED: () => $i,
        IS_BROWSER_ENV: () => ze,
        TRANSFORM_PREFIXED: () => gt,
        TRANSFORM_STYLE_PREFIXED: () => dr,
        withBrowser: () => fr
    });
    var Qf, ze, fr, CO, $i, gt, Yf, dr, pr = Ee( () => {
        "use strict";
        Qf = le(Qi()),
        ze = typeof window < "u",
        fr = (e, t) => ze ? e() : t,
        CO = fr( () => (0,
        Qf.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)),
        $i = fr( () => {
            let e = document.createElement("i")
              , t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"]
              , n = "";
            try {
                let {length: r} = t;
                for (let o = 0; o < r; o++) {
                    let i = t[o];
                    if (e.style.display = i,
                    e.style.display === i)
                        return i
                }
                return n
            } catch {
                return n
            }
        }
        , "flex"),
        gt = fr( () => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"]
                  , n = "Transform"
                  , {length: r} = t;
                for (let o = 0; o < r; o++) {
                    let i = t[o] + n;
                    if (e.style[i] !== void 0)
                        return i
                }
            }
            return "transform"
        }
        , "transform"),
        Yf = gt.split("transform")[0],
        dr = Yf ? Yf + "TransformStyle" : "transformStyle"
    }
    );
    var Zi = d( (Lq, nd) => {
        var PO = 4
          , LO = .001
          , NO = 1e-7
          , DO = 10
          , mn = 11
          , gr = 1 / (mn - 1)
          , MO = typeof Float32Array == "function";
        function Zf(e, t) {
            return 1 - 3 * t + 3 * e
        }
        function Jf(e, t) {
            return 3 * t - 6 * e
        }
        function ed(e) {
            return 3 * e
        }
        function hr(e, t, n) {
            return ((Zf(t, n) * e + Jf(t, n)) * e + ed(t)) * e
        }
        function td(e, t, n) {
            return 3 * Zf(t, n) * e * e + 2 * Jf(t, n) * e + ed(t)
        }
        function FO(e, t, n, r, o) {
            var i, a, u = 0;
            do
                a = t + (n - t) / 2,
                i = hr(a, r, o) - e,
                i > 0 ? n = a : t = a;
            while (Math.abs(i) > NO && ++u < DO);
            return a
        }
        function qO(e, t, n, r) {
            for (var o = 0; o < PO; ++o) {
                var i = td(t, n, r);
                if (i === 0)
                    return t;
                var a = hr(t, n, r) - e;
                t -= a / i
            }
            return t
        }
        nd.exports = function(t, n, r, o) {
            if (!(0 <= t && t <= 1 && 0 <= r && r <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            var i = MO ? new Float32Array(mn) : new Array(mn);
            if (t !== n || r !== o)
                for (var a = 0; a < mn; ++a)
                    i[a] = hr(a * gr, t, r);
            function u(s) {
                for (var f = 0, m = 1, v = mn - 1; m !== v && i[m] <= s; ++m)
                    f += gr;
                --m;
                var g = (s - i[m]) / (i[m + 1] - i[m])
                  , E = f + g * gr
                  , T = td(E, t, r);
                return T >= LO ? qO(s, E, t, r) : T === 0 ? E : FO(s, f, f + gr, t, r)
            }
            return function(f) {
                return t === n && r === o ? f : f === 0 ? 0 : f === 1 ? 1 : hr(u(f), n, o)
            }
        }
    }
    );
    var _n = {};
    Le(_n, {
        bounce: () => yS,
        bouncePast: () => _S,
        ease: () => kO,
        easeIn: () => XO,
        easeInOut: () => UO,
        easeOut: () => GO,
        inBack: () => lS,
        inCirc: () => aS,
        inCubic: () => BO,
        inElastic: () => pS,
        inExpo: () => rS,
        inOutBack: () => dS,
        inOutCirc: () => uS,
        inOutCubic: () => KO,
        inOutElastic: () => hS,
        inOutExpo: () => oS,
        inOutQuad: () => HO,
        inOutQuart: () => QO,
        inOutQuint: () => JO,
        inOutSine: () => nS,
        inQuad: () => WO,
        inQuart: () => jO,
        inQuint: () => $O,
        inSine: () => eS,
        outBack: () => fS,
        outBounce: () => cS,
        outCirc: () => sS,
        outCubic: () => zO,
        outElastic: () => gS,
        outExpo: () => iS,
        outQuad: () => VO,
        outQuart: () => YO,
        outQuint: () => ZO,
        outSine: () => tS,
        swingFrom: () => ES,
        swingFromTo: () => vS,
        swingTo: () => mS
    });
    function WO(e) {
        return Math.pow(e, 2)
    }
    function VO(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }
    function HO(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }
    function BO(e) {
        return Math.pow(e, 3)
    }
    function zO(e) {
        return Math.pow(e - 1, 3) + 1
    }
    function KO(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }
    function jO(e) {
        return Math.pow(e, 4)
    }
    function YO(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }
    function QO(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }
    function $O(e) {
        return Math.pow(e, 5)
    }
    function ZO(e) {
        return Math.pow(e - 1, 5) + 1
    }
    function JO(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }
    function eS(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }
    function tS(e) {
        return Math.sin(e * (Math.PI / 2))
    }
    function nS(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }
    function rS(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }
    function iS(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }
    function oS(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }
    function aS(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }
    function sS(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }
    function uS(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }
    function cS(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function lS(e) {
        let t = at;
        return e * e * ((t + 1) * e - t)
    }
    function fS(e) {
        let t = at;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }
    function dS(e) {
        let t = at;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }
    function pS(e) {
        let t = at
          , n = 0
          , r = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (n || (n = .3),
        r < 1 ? (r = 1,
        t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r),
        -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)))
    }
    function gS(e) {
        let t = at
          , n = 0
          , r = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (n || (n = .3),
        r < 1 ? (r = 1,
        t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r),
        r * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1)
    }
    function hS(e) {
        let t = at
          , n = 0
          , r = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (n || (n = .3 * 1.5),
        r < 1 ? (r = 1,
        t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r),
        e < 1 ? -.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)) : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1)
    }
    function vS(e) {
        let t = at;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }
    function ES(e) {
        let t = at;
        return e * e * ((t + 1) * e - t)
    }
    function mS(e) {
        let t = at;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }
    function yS(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function _S(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var yn, at, kO, XO, GO, UO, Ji = Ee( () => {
        "use strict";
        yn = le(Zi()),
        at = 1.70158,
        kO = (0,
        yn.default)(.25, .1, .25, 1),
        XO = (0,
        yn.default)(.42, 0, 1, 1),
        GO = (0,
        yn.default)(0, 0, .58, 1),
        UO = (0,
        yn.default)(.42, 0, .58, 1)
    }
    );
    var id = {};
    Le(id, {
        applyEasing: () => TS,
        createBezierEasing: () => IS,
        optimizeFloat: () => In
    });
    function In(e, t=5, n=10) {
        let r = Math.pow(n, t)
          , o = Number(Math.round(e * r) / r);
        return Math.abs(o) > 1e-4 ? o : 0
    }
    function IS(e) {
        return (0,
        rd.default)(...e)
    }
    function TS(e, t, n) {
        return t === 0 ? 0 : t === 1 ? 1 : In(n ? t > 0 ? n(t) : t : t > 0 && e && _n[e] ? _n[e](t) : t)
    }
    var rd, eo = Ee( () => {
        "use strict";
        Ji();
        rd = le(Zi())
    }
    );
    var sd = {};
    Le(sd, {
        createElementState: () => ad,
        ixElements: () => FS,
        mergeActionState: () => to
    });
    function ad(e, t, n, r, o) {
        let i = n === bS ? (0,
        Ut.getIn)(o, ["config", "target", "objectId"]) : null;
        return (0,
        Ut.mergeIn)(e, [r], {
            id: r,
            ref: t,
            refId: i,
            refType: n
        })
    }
    function to(e, t, n, r, o) {
        let i = kS(o);
        return (0,
        Ut.mergeIn)(e, [t, MS, n], r, i)
    }
    function kS(e) {
        let {config: t} = e;
        return qS.reduce( (n, r) => {
            let o = r[0]
              , i = r[1]
              , a = t[o]
              , u = t[i];
            return a != null && u != null && (n[i] = u),
            n
        }
        , {})
    }
    var Ut, Dq, bS, Mq, wS, AS, OS, SS, xS, RS, CS, PS, LS, NS, DS, od, MS, FS, qS, ud = Ee( () => {
        "use strict";
        Ut = le(Lt());
        Me();
        ({HTML_ELEMENT: Dq, PLAIN_OBJECT: bS, ABSTRACT_NODE: Mq, CONFIG_X_VALUE: wS, CONFIG_Y_VALUE: AS, CONFIG_Z_VALUE: OS, CONFIG_VALUE: SS, CONFIG_X_UNIT: xS, CONFIG_Y_UNIT: RS, CONFIG_Z_UNIT: CS, CONFIG_UNIT: PS} = Ae),
        {IX2_SESSION_STOPPED: LS, IX2_INSTANCE_ADDED: NS, IX2_ELEMENT_STATE_CHANGED: DS} = Te,
        od = {},
        MS = "refState",
        FS = (e=od, t={}) => {
            switch (t.type) {
            case LS:
                return od;
            case NS:
                {
                    let {elementId: n, element: r, origin: o, actionItem: i, refType: a} = t.payload
                      , {actionTypeId: u} = i
                      , s = e;
                    return (0,
                    Ut.getIn)(s, [n, r]) !== r && (s = ad(s, r, a, n, i)),
                    to(s, n, u, o, i)
                }
            case DS:
                {
                    let {elementId: n, actionTypeId: r, current: o, actionItem: i} = t.payload;
                    return to(e, n, r, o, i)
                }
            default:
                return e
            }
        }
        ;
        qS = [[wS, xS], [AS, RS], [OS, CS], [SS, PS]]
    }
    );
    var cd = d(no => {
        "use strict";
        Object.defineProperty(no, "__esModule", {
            value: !0
        });
        function XS(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        XS(no, {
            clearPlugin: function() {
                return zS
            },
            createPluginInstance: function() {
                return HS
            },
            getPluginConfig: function() {
                return GS
            },
            getPluginDestination: function() {
                return VS
            },
            getPluginDuration: function() {
                return US
            },
            getPluginOrigin: function() {
                return WS
            },
            renderPlugin: function() {
                return BS
            }
        });
        var GS = e => e.value
          , US = (e, t) => {
            if (t.config.duration !== "auto")
                return null;
            let n = parseFloat(e.getAttribute("data-duration"));
            return n > 0 ? n * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        }
          , WS = e => e || {
            value: 0
        }
          , VS = e => ({
            value: e.value
        })
          , HS = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(),
            t.setSubframe(!0),
            t
        }
          , BS = (e, t, n) => {
            if (!e)
                return;
            let r = t[n.actionTypeId].value / 100;
            e.goToFrame(e.frames * r)
        }
          , zS = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        }
    }
    );
    var fd = d(ro => {
        "use strict";
        Object.defineProperty(ro, "__esModule", {
            value: !0
        });
        function KS(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        KS(ro, {
            clearPlugin: function() {
                return rx
            },
            createPluginInstance: function() {
                return tx
            },
            getPluginConfig: function() {
                return $S
            },
            getPluginDestination: function() {
                return ex
            },
            getPluginDuration: function() {
                return ZS
            },
            getPluginOrigin: function() {
                return JS
            },
            renderPlugin: function() {
                return nx
            }
        });
        var jS = e => document.querySelector(`[data-w-id="${e}"]`)
          , YS = () => window.Webflow.require("spline")
          , QS = (e, t) => e.filter(n => !t.includes(n))
          , $S = (e, t) => e.value[t]
          , ZS = () => null
          , ld = Object.freeze({
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1
        })
          , JS = (e, t) => {
            let n = t.config.value
              , r = Object.keys(n);
            if (e) {
                let i = Object.keys(e)
                  , a = QS(r, i);
                return a.length ? a.reduce( (s, f) => (s[f] = ld[f],
                s), e) : e
            }
            return r.reduce( (i, a) => (i[a] = ld[a],
            i), {})
        }
          , ex = e => e.value
          , tx = (e, t) => {
            let n = t?.config?.target?.pluginElement;
            return n ? jS(n) : null
        }
          , nx = (e, t, n) => {
            let r = YS()
              , o = r.getInstance(e)
              , i = n.config.target.objectId
              , a = u => {
                if (!u)
                    throw new Error("Invalid spline app passed to renderSpline");
                let s = i && u.findObjectById(i);
                if (!s)
                    return;
                let {PLUGIN_SPLINE: f} = t;
                f.positionX != null && (s.position.x = f.positionX),
                f.positionY != null && (s.position.y = f.positionY),
                f.positionZ != null && (s.position.z = f.positionZ),
                f.rotationX != null && (s.rotation.x = f.rotationX),
                f.rotationY != null && (s.rotation.y = f.rotationY),
                f.rotationZ != null && (s.rotation.z = f.rotationZ),
                f.scaleX != null && (s.scale.x = f.scaleX),
                f.scaleY != null && (s.scale.y = f.scaleY),
                f.scaleZ != null && (s.scale.z = f.scaleZ)
            }
            ;
            o ? a(o.spline) : r.setLoadHandler(e, a)
        }
          , rx = () => null
    }
    );
    var dd = d(ao => {
        "use strict";
        Object.defineProperty(ao, "__esModule", {
            value: !0
        });
        function ix(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        ix(ao, {
            clearPlugin: function() {
                return px
            },
            createPluginInstance: function() {
                return fx
            },
            getPluginConfig: function() {
                return sx
            },
            getPluginDestination: function() {
                return lx
            },
            getPluginDuration: function() {
                return ux
            },
            getPluginOrigin: function() {
                return cx
            },
            renderPlugin: function() {
                return dx
            }
        });
        var io = "--wf-rive-fit"
          , oo = "--wf-rive-alignment"
          , ox = e => document.querySelector(`[data-w-id="${e}"]`)
          , ax = () => window.Webflow.require("rive")
          , sx = (e, t) => e.value.inputs[t]
          , ux = () => null
          , cx = (e, t) => {
            if (e)
                return e;
            let n = {}
              , {inputs: r={}} = t.config.value;
            for (let o in r)
                r[o] == null && (n[o] = 0);
            return n
        }
          , lx = e => e.value.inputs ?? {}
          , fx = (e, t) => {
            let n = t?.config?.target?.pluginElement;
            return n ? ox(n) : null
        }
          , dx = (e, {PLUGIN_RIVE: t}, n) => {
            let r = ax()
              , o = r.getInstance(e)
              , i = r.rive.StateMachineInputType
              , {name: a, inputs: u={}} = n.config.value || {};
            function s(f) {
                if (f.loaded)
                    m();
                else {
                    let v = () => {
                        m(),
                        f?.off("load", v)
                    }
                    ;
                    f?.on("load", v)
                }
                function m() {
                    let v = f.stateMachineInputs(a);
                    if (v != null) {
                        if (f.isPlaying || f.play(a, !1),
                        io in u || oo in u) {
                            let g = f.layout
                              , E = u[io] ?? g.fit
                              , T = u[oo] ?? g.alignment;
                            (E !== g.fit || T !== g.alignment) && (f.layout = g.copyWith({
                                fit: E,
                                alignment: T
                            }))
                        }
                        for (let g in u) {
                            if (g === io || g === oo)
                                continue;
                            let E = v.find(T => T.name === g);
                            if (E != null)
                                switch (E.type) {
                                case i.Boolean:
                                    {
                                        if (u[g] != null) {
                                            let T = !!u[g];
                                            E.value = T
                                        }
                                        break
                                    }
                                case i.Number:
                                    {
                                        let T = t[g];
                                        T != null && (E.value = T);
                                        break
                                    }
                                case i.Trigger:
                                    {
                                        u[g] && E.fire();
                                        break
                                    }
                                }
                        }
                    }
                }
            }
            o?.rive ? s(o.rive) : r.setLoadHandler(e, s)
        }
          , px = (e, t) => null
    }
    );
    var uo = d(so => {
        "use strict";
        Object.defineProperty(so, "__esModule", {
            value: !0
        });
        Object.defineProperty(so, "normalizeColor", {
            enumerable: !0,
            get: function() {
                return gx
            }
        });
        var pd = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };
        function gx(e) {
            let t, n, r, o = 1, i = e.replace(/\s/g, "").toLowerCase(), u = (typeof pd[i] == "string" ? pd[i].toLowerCase() : null) || i;
            if (u.startsWith("#")) {
                let s = u.substring(1);
                s.length === 3 || s.length === 4 ? (t = parseInt(s[0] + s[0], 16),
                n = parseInt(s[1] + s[1], 16),
                r = parseInt(s[2] + s[2], 16),
                s.length === 4 && (o = parseInt(s[3] + s[3], 16) / 255)) : (s.length === 6 || s.length === 8) && (t = parseInt(s.substring(0, 2), 16),
                n = parseInt(s.substring(2, 4), 16),
                r = parseInt(s.substring(4, 6), 16),
                s.length === 8 && (o = parseInt(s.substring(6, 8), 16) / 255))
            } else if (u.startsWith("rgba")) {
                let s = u.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(s[0], 10),
                n = parseInt(s[1], 10),
                r = parseInt(s[2], 10),
                o = parseFloat(s[3])
            } else if (u.startsWith("rgb")) {
                let s = u.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(s[0], 10),
                n = parseInt(s[1], 10),
                r = parseInt(s[2], 10)
            } else if (u.startsWith("hsla")) {
                let s = u.match(/hsla\(([^)]+)\)/)[1].split(",")
                  , f = parseFloat(s[0])
                  , m = parseFloat(s[1].replace("%", "")) / 100
                  , v = parseFloat(s[2].replace("%", "")) / 100;
                o = parseFloat(s[3]);
                let g = (1 - Math.abs(2 * v - 1)) * m, E = g * (1 - Math.abs(f / 60 % 2 - 1)), T = v - g / 2, w, R, b;
                f >= 0 && f < 60 ? (w = g,
                R = E,
                b = 0) : f >= 60 && f < 120 ? (w = E,
                R = g,
                b = 0) : f >= 120 && f < 180 ? (w = 0,
                R = g,
                b = E) : f >= 180 && f < 240 ? (w = 0,
                R = E,
                b = g) : f >= 240 && f < 300 ? (w = E,
                R = 0,
                b = g) : (w = g,
                R = 0,
                b = E),
                t = Math.round((w + T) * 255),
                n = Math.round((R + T) * 255),
                r = Math.round((b + T) * 255)
            } else if (u.startsWith("hsl")) {
                let s = u.match(/hsl\(([^)]+)\)/)[1].split(","), f = parseFloat(s[0]), m = parseFloat(s[1].replace("%", "")) / 100, v = parseFloat(s[2].replace("%", "")) / 100, g = (1 - Math.abs(2 * v - 1)) * m, E = g * (1 - Math.abs(f / 60 % 2 - 1)), T = v - g / 2, w, R, b;
                f >= 0 && f < 60 ? (w = g,
                R = E,
                b = 0) : f >= 60 && f < 120 ? (w = E,
                R = g,
                b = 0) : f >= 120 && f < 180 ? (w = 0,
                R = g,
                b = E) : f >= 180 && f < 240 ? (w = 0,
                R = E,
                b = g) : f >= 240 && f < 300 ? (w = E,
                R = 0,
                b = g) : (w = g,
                R = 0,
                b = E),
                t = Math.round((w + T) * 255),
                n = Math.round((R + T) * 255),
                r = Math.round((b + T) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(r))
                throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
            return {
                red: t,
                green: n,
                blue: r,
                alpha: o
            }
        }
    }
    );
    var gd = d(co => {
        "use strict";
        Object.defineProperty(co, "__esModule", {
            value: !0
        });
        function hx(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        hx(co, {
            clearPlugin: function() {
                return bx
            },
            createPluginInstance: function() {
                return Ix
            },
            getPluginConfig: function() {
                return Ex
            },
            getPluginDestination: function() {
                return _x
            },
            getPluginDuration: function() {
                return mx
            },
            getPluginOrigin: function() {
                return yx
            },
            renderPlugin: function() {
                return Tx
            }
        });
        var vx = uo()
          , Ex = (e, t) => e.value[t]
          , mx = () => null
          , yx = (e, t) => {
            if (e)
                return e;
            let n = t.config.value
              , r = t.config.target.objectId
              , o = getComputedStyle(document.documentElement).getPropertyValue(r);
            if (n.size != null)
                return {
                    size: parseInt(o, 10)
                };
            if (n.red != null && n.green != null && n.blue != null)
                return (0,
                vx.normalizeColor)(o)
        }
          , _x = e => e.value
          , Ix = () => null
          , Tx = (e, t, n) => {
            let r = n.config.target.objectId, o = n.config.value.unit, {PLUGIN_VARIABLE: i} = t, {size: a, red: u, green: s, blue: f, alpha: m} = i, v;
            a != null && (v = a + o),
            u != null && f != null && s != null && m != null && (v = `rgba(${u}, ${s}, ${f}, ${m})`),
            v != null && document.documentElement.style.setProperty(r, v)
        }
          , bx = (e, t) => {
            let n = t.config.target.objectId;
            document.documentElement.style.removeProperty(n)
        }
    }
    );
    var vd = d(lo => {
        "use strict";
        Object.defineProperty(lo, "__esModule", {
            value: !0
        });
        Object.defineProperty(lo, "pluginMethodMap", {
            enumerable: !0,
            get: function() {
                return xx
            }
        });
        var vr = (Me(),
        Qe(ys))
          , wx = Er(cd())
          , Ax = Er(fd())
          , Ox = Er(dd())
          , Sx = Er(gd());
        function hd(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (hd = function(r) {
                return r ? n : t
            }
            )(e)
        }
        function Er(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || typeof e != "object" && typeof e != "function")
                return {
                    default: e
                };
            var n = hd(t);
            if (n && n.has(e))
                return n.get(e);
            var r = {
                __proto__: null
            }
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
                    var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i]
                }
            return r.default = e,
            n && n.set(e, r),
            r
        }
        var xx = new Map([[vr.ActionTypeConsts.PLUGIN_LOTTIE, {
            ...wx
        }], [vr.ActionTypeConsts.PLUGIN_SPLINE, {
            ...Ax
        }], [vr.ActionTypeConsts.PLUGIN_RIVE, {
            ...Ox
        }], [vr.ActionTypeConsts.PLUGIN_VARIABLE, {
            ...Sx
        }]])
    }
    );
    var Ed = {};
    Le(Ed, {
        clearPlugin: () => Eo,
        createPluginInstance: () => Cx,
        getPluginConfig: () => po,
        getPluginDestination: () => ho,
        getPluginDuration: () => Rx,
        getPluginOrigin: () => go,
        isPluginType: () => It,
        renderPlugin: () => vo
    });
    function It(e) {
        return fo.pluginMethodMap.has(e)
    }
    var fo, Tt, po, go, Rx, ho, Cx, vo, Eo, mo = Ee( () => {
        "use strict";
        pr();
        fo = le(vd());
        Tt = e => t => {
            if (!ze)
                return () => null;
            let n = fo.pluginMethodMap.get(t);
            if (!n)
                throw new Error(`IX2 no plugin configured for: ${t}`);
            let r = n[e];
            if (!r)
                throw new Error(`IX2 invalid plugin method: ${e}`);
            return r
        }
        ,
        po = Tt("getPluginConfig"),
        go = Tt("getPluginOrigin"),
        Rx = Tt("getPluginDuration"),
        ho = Tt("getPluginDestination"),
        Cx = Tt("createPluginInstance"),
        vo = Tt("renderPlugin"),
        Eo = Tt("clearPlugin")
    }
    );
    var yd = d( (Vq, md) => {
        function Px(e, t) {
            return e == null || e !== e ? t : e
        }
        md.exports = Px
    }
    );
    var Id = d( (Hq, _d) => {
        function Lx(e, t, n, r) {
            var o = -1
              , i = e == null ? 0 : e.length;
            for (r && i && (n = e[++o]); ++o < i; )
                n = t(n, e[o], o, e);
            return n
        }
        _d.exports = Lx
    }
    );
    var bd = d( (Bq, Td) => {
        function Nx(e) {
            return function(t, n, r) {
                for (var o = -1, i = Object(t), a = r(t), u = a.length; u--; ) {
                    var s = a[e ? u : ++o];
                    if (n(i[s], s, i) === !1)
                        break
                }
                return t
            }
        }
        Td.exports = Nx
    }
    );
    var Ad = d( (zq, wd) => {
        var Dx = bd()
          , Mx = Dx();
        wd.exports = Mx
    }
    );
    var yo = d( (Kq, Od) => {
        var Fx = Ad()
          , qx = hn();
        function kx(e, t) {
            return e && Fx(e, t, qx)
        }
        Od.exports = kx
    }
    );
    var xd = d( (jq, Sd) => {
        var Xx = yt();
        function Gx(e, t) {
            return function(n, r) {
                if (n == null)
                    return n;
                if (!Xx(n))
                    return e(n, r);
                for (var o = n.length, i = t ? o : -1, a = Object(n); (t ? i-- : ++i < o) && r(a[i], i, a) !== !1; )
                    ;
                return n
            }
        }
        Sd.exports = Gx
    }
    );
    var _o = d( (Yq, Rd) => {
        var Ux = yo()
          , Wx = xd()
          , Vx = Wx(Ux);
        Rd.exports = Vx
    }
    );
    var Pd = d( (Qq, Cd) => {
        function Hx(e, t, n, r, o) {
            return o(e, function(i, a, u) {
                n = r ? (r = !1,
                i) : t(n, i, a, u)
            }),
            n
        }
        Cd.exports = Hx
    }
    );
    var Nd = d( ($q, Ld) => {
        var Bx = Id()
          , zx = _o()
          , Kx = pt()
          , jx = Pd()
          , Yx = be();
        function Qx(e, t, n) {
            var r = Yx(e) ? Bx : jx
              , o = arguments.length < 3;
            return r(e, Kx(t, 4), n, o, zx)
        }
        Ld.exports = Qx
    }
    );
    var Md = d( (Zq, Dd) => {
        var $x = ji()
          , Zx = pt()
          , Jx = Yi()
          , eR = Math.max
          , tR = Math.min;
        function nR(e, t, n) {
            var r = e == null ? 0 : e.length;
            if (!r)
                return -1;
            var o = r - 1;
            return n !== void 0 && (o = Jx(n),
            o = n < 0 ? eR(r + o, 0) : tR(o, r - 1)),
            $x(e, Zx(t, 3), o, !0)
        }
        Dd.exports = nR
    }
    );
    var qd = d( (Jq, Fd) => {
        var rR = Ki()
          , iR = Md()
          , oR = rR(iR);
        Fd.exports = oR
    }
    );
    function kd(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }
    function aR(e, t) {
        if (kd(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        let n = Object.keys(e)
          , r = Object.keys(t);
        if (n.length !== r.length)
            return !1;
        for (let o = 0; o < n.length; o++)
            if (!Object.hasOwn(t, n[o]) || !kd(e[n[o]], t[n[o]]))
                return !1;
        return !0
    }
    var Io, Xd = Ee( () => {
        "use strict";
        Io = aR
    }
    );
    var rp = {};
    Le(rp, {
        cleanupHTMLElement: () => rC,
        clearAllStyles: () => nC,
        clearObjectCache: () => bR,
        getActionListProgress: () => oC,
        getAffectedElements: () => Oo,
        getComputedStyle: () => PR,
        getDestinationValues: () => kR,
        getElementId: () => SR,
        getInstanceId: () => AR,
        getInstanceOrigin: () => DR,
        getItemConfigByKey: () => qR,
        getMaxDurationItemIndex: () => np,
        getNamespacedParameterId: () => uC,
        getRenderType: () => Jd,
        getStyleProp: () => XR,
        mediaQueriesEqual: () => lC,
        observeStore: () => CR,
        reduceListToGroup: () => aC,
        reifyState: () => xR,
        renderHTMLElement: () => GR,
        shallowEqual: () => Io,
        shouldAllowMediaQuery: () => cC,
        shouldNamespaceEventParameter: () => sC,
        stringifyTarget: () => fC
    });
    function bR() {
        mr.clear()
    }
    function AR() {
        return "i" + wR++
    }
    function SR(e, t) {
        for (let n in e) {
            let r = e[n];
            if (r && r.ref === t)
                return r.id
        }
        return "e" + OR++
    }
    function xR({events: e, actionLists: t, site: n}={}) {
        let r = (0,
        Tr.default)(e, (a, u) => {
            let {eventTypeId: s} = u;
            return a[s] || (a[s] = {}),
            a[s][u.id] = u,
            a
        }
        , {})
          , o = n && n.mediaQueries
          , i = [];
        return o ? i = o.map(a => a.key) : (o = [],
        console.warn("IX2 missing mediaQueries in site data")),
        {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: r,
                mediaQueries: o,
                mediaQueryKeys: i
            }
        }
    }
    function CR({store: e, select: t, onChange: n, comparator: r=RR}) {
        let {getState: o, subscribe: i} = e
          , a = i(s)
          , u = t(o());
        function s() {
            let f = t(o());
            if (f == null) {
                a();
                return
            }
            r(f, u) || (u = f,
            n(u, e))
        }
        return a
    }
    function Wd(e) {
        let t = typeof e;
        if (t === "string")
            return {
                id: e
            };
        if (e != null && t === "object") {
            let {id: n, objectId: r, selector: o, selectorGuids: i, appliesTo: a, useEventTarget: u} = e;
            return {
                id: n,
                objectId: r,
                selector: o,
                selectorGuids: i,
                appliesTo: a,
                useEventTarget: u
            }
        }
        return {}
    }
    function Oo({config: e, event: t, eventTarget: n, elementRoot: r, elementApi: o}) {
        if (!o)
            throw new Error("IX2 missing elementApi");
        let {targets: i} = e;
        if (Array.isArray(i) && i.length > 0)
            return i.reduce( (X, S) => X.concat(Oo({
                config: {
                    target: S
                },
                event: t,
                eventTarget: n,
                elementRoot: r,
                elementApi: o
            })), []);
        let {getValidDocument: a, getQuerySelector: u, queryDocument: s, getChildElements: f, getSiblingElements: m, matchSelector: v, elementContains: g, isSiblingNode: E} = o
          , {target: T} = e;
        if (!T)
            return [];
        let {id: w, objectId: R, selector: b, selectorGuids: L, appliesTo: C, useEventTarget: D} = Wd(T);
        if (R)
            return [mr.has(R) ? mr.get(R) : mr.set(R, {}).get(R)];
        if (C === yi.PAGE) {
            let X = a(w);
            return X ? [X] : []
        }
        let M = (t?.action?.config?.affectedElements ?? {})[w || b] || {}, H = !!(M.id || M.selector), j, Q, J, ee = t && u(Wd(t.target));
        if (H ? (j = M.limitAffectedElements,
        Q = ee,
        J = u(M)) : Q = J = u({
            id: w,
            selector: b,
            selectorGuids: L
        }),
        t && D) {
            let X = n && (J || D === !0) ? [n] : s(ee);
            if (J) {
                if (D === _R)
                    return s(J).filter(S => X.some(q => g(S, q)));
                if (D === Gd)
                    return s(J).filter(S => X.some(q => g(q, S)));
                if (D === Ud)
                    return s(J).filter(S => X.some(q => E(q, S)))
            }
            return X
        }
        return Q == null || J == null ? [] : ze && r ? s(J).filter(X => r.contains(X)) : j === Gd ? s(Q, J) : j === yR ? f(s(Q)).filter(v(J)) : j === Ud ? m(s(Q)).filter(v(J)) : s(J)
    }
    function PR({element: e, actionItem: t}) {
        if (!ze)
            return {};
        let {actionTypeId: n} = t;
        switch (n) {
        case zt:
        case Kt:
        case jt:
        case Yt:
        case wr:
            return window.getComputedStyle(e);
        default:
            return {}
        }
    }
    function DR(e, t={}, n={}, r, o) {
        let {getStyle: i} = o
          , {actionTypeId: a} = r;
        if (It(a))
            return go(a)(t[a], r);
        switch (r.actionTypeId) {
        case Vt:
        case Ht:
        case Bt:
        case An:
            return t[r.actionTypeId] || So[r.actionTypeId];
        case On:
            return LR(t[r.actionTypeId], r.config.filters);
        case Sn:
            return NR(t[r.actionTypeId], r.config.fontVariations);
        case Qd:
            return {
                value: (0,
                st.default)(parseFloat(i(e, _r)), 1)
            };
        case zt:
            {
                let u = i(e, tt), s = i(e, nt), f, m;
                return r.config.widthUnit === ht ? f = Vd.test(u) ? parseFloat(u) : parseFloat(n.width) : f = (0,
                st.default)(parseFloat(u), parseFloat(n.width)),
                r.config.heightUnit === ht ? m = Vd.test(s) ? parseFloat(s) : parseFloat(n.height) : m = (0,
                st.default)(parseFloat(s), parseFloat(n.height)),
                {
                    widthValue: f,
                    heightValue: m
                }
            }
        case Kt:
        case jt:
        case Yt:
            return JR({
                element: e,
                actionTypeId: r.actionTypeId,
                computedStyle: n,
                getStyle: i
            });
        case wr:
            return {
                value: (0,
                st.default)(i(e, Ir), n.display)
            };
        case TR:
            return t[r.actionTypeId] || {
                value: 0
            };
        default:
            return
        }
    }
    function kR({element: e, actionItem: t, elementApi: n}) {
        if (It(t.actionTypeId))
            return ho(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
        case Vt:
        case Ht:
        case Bt:
        case An:
            {
                let {xValue: r, yValue: o, zValue: i} = t.config;
                return {
                    xValue: r,
                    yValue: o,
                    zValue: i
                }
            }
        case zt:
            {
                let {getStyle: r, setStyle: o, getProperty: i} = n
                  , {widthUnit: a, heightUnit: u} = t.config
                  , {widthValue: s, heightValue: f} = t.config;
                if (!ze)
                    return {
                        widthValue: s,
                        heightValue: f
                    };
                if (a === ht) {
                    let m = r(e, tt);
                    o(e, tt, ""),
                    s = i(e, "offsetWidth"),
                    o(e, tt, m)
                }
                if (u === ht) {
                    let m = r(e, nt);
                    o(e, nt, ""),
                    f = i(e, "offsetHeight"),
                    o(e, nt, m)
                }
                return {
                    widthValue: s,
                    heightValue: f
                }
            }
        case Kt:
        case jt:
        case Yt:
            {
                let {rValue: r, gValue: o, bValue: i, aValue: a, globalSwatchId: u} = t.config;
                if (u && u.startsWith("--")) {
                    let {getStyle: s} = n
                      , f = s(e, u)
                      , m = (0,
                    zd.normalizeColor)(f);
                    return {
                        rValue: m.red,
                        gValue: m.green,
                        bValue: m.blue,
                        aValue: m.alpha
                    }
                }
                return {
                    rValue: r,
                    gValue: o,
                    bValue: i,
                    aValue: a
                }
            }
        case On:
            return t.config.filters.reduce(MR, {});
        case Sn:
            return t.config.fontVariations.reduce(FR, {});
        default:
            {
                let {value: r} = t.config;
                return {
                    value: r
                }
            }
        }
    }
    function Jd(e) {
        if (/^TRANSFORM_/.test(e))
            return jd;
        if (/^STYLE_/.test(e))
            return wo;
        if (/^GENERAL_/.test(e))
            return bo;
        if (/^PLUGIN_/.test(e))
            return Yd
    }
    function XR(e, t) {
        return e === wo ? t.replace("STYLE_", "").toLowerCase() : null
    }
    function GR(e, t, n, r, o, i, a, u, s) {
        switch (u) {
        case jd:
            return BR(e, t, n, o, a);
        case wo:
            return eC(e, t, n, o, i, a);
        case bo:
            return tC(e, o, a);
        case Yd:
            {
                let {actionTypeId: f} = o;
                if (It(f))
                    return vo(f)(s, t, o)
            }
        }
    }
    function BR(e, t, n, r, o) {
        let i = HR.map(u => {
            let s = So[u]
              , {xValue: f=s.xValue, yValue: m=s.yValue, zValue: v=s.zValue, xUnit: g="", yUnit: E="", zUnit: T=""} = t[u] || {};
            switch (u) {
            case Vt:
                return `${cR}(${f}${g}, ${m}${E}, ${v}${T})`;
            case Ht:
                return `${lR}(${f}${g}, ${m}${E}, ${v}${T})`;
            case Bt:
                return `${fR}(${f}${g}) ${dR}(${m}${E}) ${pR}(${v}${T})`;
            case An:
                return `${gR}(${f}${g}, ${m}${E})`;
            default:
                return ""
            }
        }
        ).join(" ")
          , {setStyle: a} = o;
        bt(e, gt, o),
        a(e, gt, i),
        jR(r, n) && a(e, dr, hR)
    }
    function zR(e, t, n, r) {
        let o = (0,
        Tr.default)(t, (a, u, s) => `${a} ${s}(${u}${VR(s, n)})`, "")
          , {setStyle: i} = r;
        bt(e, Tn, r),
        i(e, Tn, o)
    }
    function KR(e, t, n, r) {
        let o = (0,
        Tr.default)(t, (a, u, s) => (a.push(`"${s}" ${u}`),
        a), []).join(", ")
          , {setStyle: i} = r;
        bt(e, bn, r),
        i(e, bn, o)
    }
    function jR({actionTypeId: e}, {xValue: t, yValue: n, zValue: r}) {
        return e === Vt && r !== void 0 || e === Ht && r !== void 0 || e === Bt && (t !== void 0 || n !== void 0)
    }
    function ZR(e, t) {
        let n = e.exec(t);
        return n ? n[1] : ""
    }
    function JR({element: e, actionTypeId: t, computedStyle: n, getStyle: r}) {
        let o = Ao[t]
          , i = r(e, o)
          , a = QR.test(i) ? i : n[o]
          , u = ZR($R, a).split(wn);
        return {
            rValue: (0,
            st.default)(parseInt(u[0], 10), 255),
            gValue: (0,
            st.default)(parseInt(u[1], 10), 255),
            bValue: (0,
            st.default)(parseInt(u[2], 10), 255),
            aValue: (0,
            st.default)(parseFloat(u[3]), 1)
        }
    }
    function eC(e, t, n, r, o, i) {
        let {setStyle: a} = i;
        switch (r.actionTypeId) {
        case zt:
            {
                let {widthUnit: u="", heightUnit: s=""} = r.config
                  , {widthValue: f, heightValue: m} = n;
                f !== void 0 && (u === ht && (u = "px"),
                bt(e, tt, i),
                a(e, tt, f + u)),
                m !== void 0 && (s === ht && (s = "px"),
                bt(e, nt, i),
                a(e, nt, m + s));
                break
            }
        case On:
            {
                zR(e, n, r.config, i);
                break
            }
        case Sn:
            {
                KR(e, n, r.config, i);
                break
            }
        case Kt:
        case jt:
        case Yt:
            {
                let u = Ao[r.actionTypeId]
                  , s = Math.round(n.rValue)
                  , f = Math.round(n.gValue)
                  , m = Math.round(n.bValue)
                  , v = n.aValue;
                bt(e, u, i),
                a(e, u, v >= 1 ? `rgb(${s},${f},${m})` : `rgba(${s},${f},${m},${v})`);
                break
            }
        default:
            {
                let {unit: u=""} = r.config;
                bt(e, o, i),
                a(e, o, n.value + u);
                break
            }
        }
    }
    function tC(e, t, n) {
        let {setStyle: r} = n;
        switch (t.actionTypeId) {
        case wr:
            {
                let {value: o} = t.config;
                o === vR && ze ? r(e, Ir, $i) : r(e, Ir, o);
                return
            }
        }
    }
    function bt(e, t, n) {
        if (!ze)
            return;
        let r = Zd[t];
        if (!r)
            return;
        let {getStyle: o, setStyle: i} = n
          , a = o(e, Wt);
        if (!a) {
            i(e, Wt, r);
            return
        }
        let u = a.split(wn).map($d);
        u.indexOf(r) === -1 && i(e, Wt, u.concat(r).join(wn))
    }
    function ep(e, t, n) {
        if (!ze)
            return;
        let r = Zd[t];
        if (!r)
            return;
        let {getStyle: o, setStyle: i} = n
          , a = o(e, Wt);
        !a || a.indexOf(r) === -1 || i(e, Wt, a.split(wn).map($d).filter(u => u !== r).join(wn))
    }
    function nC({store: e, elementApi: t}) {
        let {ixData: n} = e.getState()
          , {events: r={}, actionLists: o={}} = n;
        Object.keys(r).forEach(i => {
            let a = r[i]
              , {config: u} = a.action
              , {actionListId: s} = u
              , f = o[s];
            f && Hd({
                actionList: f,
                event: a,
                elementApi: t
            })
        }
        ),
        Object.keys(o).forEach(i => {
            Hd({
                actionList: o[i],
                elementApi: t
            })
        }
        )
    }
    function Hd({actionList: e={}, event: t, elementApi: n}) {
        let {actionItemGroups: r, continuousParameterGroups: o} = e;
        r && r.forEach(i => {
            Bd({
                actionGroup: i,
                event: t,
                elementApi: n
            })
        }
        ),
        o && o.forEach(i => {
            let {continuousActionGroups: a} = i;
            a.forEach(u => {
                Bd({
                    actionGroup: u,
                    event: t,
                    elementApi: n
                })
            }
            )
        }
        )
    }
    function Bd({actionGroup: e, event: t, elementApi: n}) {
        let {actionItems: r} = e;
        r.forEach(o => {
            let {actionTypeId: i, config: a} = o, u;
            It(i) ? u = s => Eo(i)(s, o) : u = tp({
                effect: iC,
                actionTypeId: i,
                elementApi: n
            }),
            Oo({
                config: a,
                event: t,
                elementApi: n
            }).forEach(u)
        }
        )
    }
    function rC(e, t, n) {
        let {setStyle: r, getStyle: o} = n
          , {actionTypeId: i} = t;
        if (i === zt) {
            let {config: a} = t;
            a.widthUnit === ht && r(e, tt, ""),
            a.heightUnit === ht && r(e, nt, "")
        }
        o(e, Wt) && tp({
            effect: ep,
            actionTypeId: i,
            elementApi: n
        })(e)
    }
    function iC(e, t, n) {
        let {setStyle: r} = n;
        ep(e, t, n),
        r(e, t, ""),
        t === gt && r(e, dr, "")
    }
    function np(e) {
        let t = 0
          , n = 0;
        return e.forEach( (r, o) => {
            let {config: i} = r
              , a = i.delay + i.duration;
            a >= t && (t = a,
            n = o)
        }
        ),
        n
    }
    function oC(e, t) {
        let {actionItemGroups: n, useFirstGroupAsInitialState: r} = e
          , {actionItem: o, verboseTimeElapsed: i=0} = t
          , a = 0
          , u = 0;
        return n.forEach( (s, f) => {
            if (r && f === 0)
                return;
            let {actionItems: m} = s
              , v = m[np(m)]
              , {config: g, actionTypeId: E} = v;
            o.id === v.id && (u = a + i);
            let T = Jd(E) === bo ? 0 : g.duration;
            a += g.delay + T
        }
        ),
        a > 0 ? In(u / a) : 0
    }
    function aC({actionList: e, actionItemId: t, rawData: n}) {
        let {actionItemGroups: r, continuousParameterGroups: o} = e
          , i = []
          , a = u => (i.push((0,
        br.mergeIn)(u, ["config"], {
            delay: 0,
            duration: 0
        })),
        u.id === t);
        return r && r.some( ({actionItems: u}) => u.some(a)),
        o && o.some(u => {
            let {continuousActionGroups: s} = u;
            return s.some( ({actionItems: f}) => f.some(a))
        }
        ),
        (0,
        br.setIn)(n, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: i
                }]
            }
        })
    }
    function sC(e, {basedOn: t}) {
        return e === Be.SCROLLING_IN_VIEW && (t === Je.ELEMENT || t == null) || e === Be.MOUSE_MOVE && t === Je.ELEMENT
    }
    function uC(e, t) {
        return e + IR + t
    }
    function cC(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }
    function lC(e, t) {
        return Io(e && e.sort(), t && t.sort())
    }
    function fC(e) {
        if (typeof e == "string")
            return e;
        if (e.pluginElement && e.objectId)
            return e.pluginElement + To + e.objectId;
        if (e.objectId)
            return e.objectId;
        let {id: t="", selector: n="", useEventTarget: r=""} = e;
        return t + To + n + To + r
    }
    var st, Tr, yr, br, zd, sR, uR, cR, lR, fR, dR, pR, gR, hR, vR, _r, Tn, bn, tt, nt, Kd, ER, mR, Gd, yR, Ud, _R, Ir, Wt, ht, wn, IR, To, jd, bo, wo, Yd, Vt, Ht, Bt, An, Qd, On, Sn, zt, Kt, jt, Yt, wr, TR, $d, Ao, Zd, mr, wR, OR, RR, Vd, LR, NR, MR, FR, qR, So, UR, WR, VR, HR, YR, QR, $R, tp, ip = Ee( () => {
        "use strict";
        st = le(yd()),
        Tr = le(Nd()),
        yr = le(qd()),
        br = le(Lt());
        Me();
        Xd();
        eo();
        zd = le(uo());
        mo();
        pr();
        ({BACKGROUND: sR, TRANSFORM: uR, TRANSLATE_3D: cR, SCALE_3D: lR, ROTATE_X: fR, ROTATE_Y: dR, ROTATE_Z: pR, SKEW: gR, PRESERVE_3D: hR, FLEX: vR, OPACITY: _r, FILTER: Tn, FONT_VARIATION_SETTINGS: bn, WIDTH: tt, HEIGHT: nt, BACKGROUND_COLOR: Kd, BORDER_COLOR: ER, COLOR: mR, CHILDREN: Gd, IMMEDIATE_CHILDREN: yR, SIBLINGS: Ud, PARENT: _R, DISPLAY: Ir, WILL_CHANGE: Wt, AUTO: ht, COMMA_DELIMITER: wn, COLON_DELIMITER: IR, BAR_DELIMITER: To, RENDER_TRANSFORM: jd, RENDER_GENERAL: bo, RENDER_STYLE: wo, RENDER_PLUGIN: Yd} = Ae),
        {TRANSFORM_MOVE: Vt, TRANSFORM_SCALE: Ht, TRANSFORM_ROTATE: Bt, TRANSFORM_SKEW: An, STYLE_OPACITY: Qd, STYLE_FILTER: On, STYLE_FONT_VARIATION: Sn, STYLE_SIZE: zt, STYLE_BACKGROUND_COLOR: Kt, STYLE_BORDER: jt, STYLE_TEXT_COLOR: Yt, GENERAL_DISPLAY: wr, OBJECT_VALUE: TR} = De,
        $d = e => e.trim(),
        Ao = Object.freeze({
            [Kt]: Kd,
            [jt]: ER,
            [Yt]: mR
        }),
        Zd = Object.freeze({
            [gt]: uR,
            [Kd]: sR,
            [_r]: _r,
            [Tn]: Tn,
            [tt]: tt,
            [nt]: nt,
            [bn]: bn
        }),
        mr = new Map;
        wR = 1;
        OR = 1;
        RR = (e, t) => e === t;
        Vd = /px/,
        LR = (e, t) => t.reduce( (n, r) => (n[r.type] == null && (n[r.type] = UR[r.type]),
        n), e || {}),
        NR = (e, t) => t.reduce( (n, r) => (n[r.type] == null && (n[r.type] = WR[r.type] || r.defaultValue || 0),
        n), e || {});
        MR = (e, t) => (t && (e[t.type] = t.value || 0),
        e),
        FR = (e, t) => (t && (e[t.type] = t.value || 0),
        e),
        qR = (e, t, n) => {
            if (It(e))
                return po(e)(n, t);
            switch (e) {
            case On:
                {
                    let r = (0,
                    yr.default)(n.filters, ({type: o}) => o === t);
                    return r ? r.value : 0
                }
            case Sn:
                {
                    let r = (0,
                    yr.default)(n.fontVariations, ({type: o}) => o === t);
                    return r ? r.value : 0
                }
            default:
                return n[t]
            }
        }
        ;
        So = {
            [Vt]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Ht]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [Bt]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [An]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        },
        UR = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }),
        WR = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }),
        VR = (e, t) => {
            let n = (0,
            yr.default)(t.filters, ({type: r}) => r === e);
            if (n && n.unit)
                return n.unit;
            switch (e) {
            case "blur":
                return "px";
            case "hue-rotate":
                return "deg";
            default:
                return "%"
            }
        }
        ,
        HR = Object.keys(So);
        YR = "\\(([^)]+)\\)",
        QR = /^rgb/,
        $R = RegExp(`rgba?${YR}`);
        tp = ({effect: e, actionTypeId: t, elementApi: n}) => r => {
            switch (t) {
            case Vt:
            case Ht:
            case Bt:
            case An:
                e(r, gt, n);
                break;
            case On:
                e(r, Tn, n);
                break;
            case Sn:
                e(r, bn, n);
                break;
            case Qd:
                e(r, _r, n);
                break;
            case zt:
                e(r, tt, n),
                e(r, nt, n);
                break;
            case Kt:
            case jt:
            case Yt:
                e(r, Ao[t], n);
                break;
            case wr:
                e(r, Ir, n);
                break
            }
        }
    }
    );
    var wt = d(xo => {
        "use strict";
        Object.defineProperty(xo, "__esModule", {
            value: !0
        });
        function dC(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        dC(xo, {
            IX2BrowserSupport: function() {
                return pC
            },
            IX2EasingUtils: function() {
                return hC
            },
            IX2Easings: function() {
                return gC
            },
            IX2ElementsReducer: function() {
                return vC
            },
            IX2VanillaPlugins: function() {
                return EC
            },
            IX2VanillaUtils: function() {
                return mC
            }
        });
        var pC = Qt((pr(),
        Qe($f)))
          , gC = Qt((Ji(),
        Qe(_n)))
          , hC = Qt((eo(),
        Qe(id)))
          , vC = Qt((ud(),
        Qe(sd)))
          , EC = Qt((mo(),
        Qe(Ed)))
          , mC = Qt((ip(),
        Qe(rp)));
        function op(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (op = function(r) {
                return r ? n : t
            }
            )(e)
        }
        function Qt(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || typeof e != "object" && typeof e != "function")
                return {
                    default: e
                };
            var n = op(t);
            if (n && n.has(e))
                return n.get(e);
            var r = {
                __proto__: null
            }
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
                    var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i]
                }
            return r.default = e,
            n && n.set(e, r),
            r
        }
    }
    );
    var Or, ut, yC, _C, IC, TC, bC, wC, Ar, ap, AC, OC, Ro, SC, xC, RC, CC, sp, up = Ee( () => {
        "use strict";
        Me();
        Or = le(wt()),
        ut = le(Lt()),
        {IX2_RAW_DATA_IMPORTED: yC, IX2_SESSION_STOPPED: _C, IX2_INSTANCE_ADDED: IC, IX2_INSTANCE_STARTED: TC, IX2_INSTANCE_REMOVED: bC, IX2_ANIMATION_FRAME_CHANGED: wC} = Te,
        {optimizeFloat: Ar, applyEasing: ap, createBezierEasing: AC} = Or.IX2EasingUtils,
        {RENDER_GENERAL: OC} = Ae,
        {getItemConfigByKey: Ro, getRenderType: SC, getStyleProp: xC} = Or.IX2VanillaUtils,
        RC = (e, t) => {
            let {position: n, parameterId: r, actionGroups: o, destinationKeys: i, smoothing: a, restingValue: u, actionTypeId: s, customEasingFn: f, skipMotion: m, skipToValue: v} = e
              , {parameters: g} = t.payload
              , E = Math.max(1 - a, .01)
              , T = g[r];
            T == null && (E = 1,
            T = u);
            let w = Math.max(T, 0) || 0
              , R = Ar(w - n)
              , b = m ? v : Ar(n + R * E)
              , L = b * 100;
            if (b === n && e.current)
                return e;
            let C, D, F, M;
            for (let j = 0, {length: Q} = o; j < Q; j++) {
                let {keyframe: J, actionItems: ee} = o[j];
                if (j === 0 && (C = ee[0]),
                L >= J) {
                    C = ee[0];
                    let X = o[j + 1]
                      , S = X && L !== J;
                    D = S ? X.actionItems[0] : null,
                    S && (F = J / 100,
                    M = (X.keyframe - J) / 100)
                }
            }
            let H = {};
            if (C && !D)
                for (let j = 0, {length: Q} = i; j < Q; j++) {
                    let J = i[j];
                    H[J] = Ro(s, J, C.config)
                }
            else if (C && D && F !== void 0 && M !== void 0) {
                let j = (b - F) / M
                  , Q = C.config.easing
                  , J = ap(Q, j, f);
                for (let ee = 0, {length: X} = i; ee < X; ee++) {
                    let S = i[ee]
                      , q = Ro(s, S, C.config)
                      , te = (Ro(s, S, D.config) - q) * J + q;
                    H[S] = te
                }
            }
            return (0,
            ut.merge)(e, {
                position: b,
                current: H
            })
        }
        ,
        CC = (e, t) => {
            let {active: n, origin: r, start: o, immediate: i, renderType: a, verbose: u, actionItem: s, destination: f, destinationKeys: m, pluginDuration: v, instanceDelay: g, customEasingFn: E, skipMotion: T} = e
              , w = s.config.easing
              , {duration: R, delay: b} = s.config;
            v != null && (R = v),
            b = g ?? b,
            a === OC ? R = 0 : (i || T) && (R = b = 0);
            let {now: L} = t.payload;
            if (n && r) {
                let C = L - (o + b);
                if (u) {
                    let j = L - o
                      , Q = R + b
                      , J = Ar(Math.min(Math.max(0, j / Q), 1));
                    e = (0,
                    ut.set)(e, "verboseTimeElapsed", Q * J)
                }
                if (C < 0)
                    return e;
                let D = Ar(Math.min(Math.max(0, C / R), 1))
                  , F = ap(w, D, E)
                  , M = {}
                  , H = null;
                return m.length && (H = m.reduce( (j, Q) => {
                    let J = f[Q]
                      , ee = parseFloat(r[Q]) || 0
                      , S = (parseFloat(J) - ee) * F + ee;
                    return j[Q] = S,
                    j
                }
                , {})),
                M.current = H,
                M.position = D,
                D === 1 && (M.active = !1,
                M.complete = !0),
                (0,
                ut.merge)(e, M)
            }
            return e
        }
        ,
        sp = (e=Object.freeze({}), t) => {
            switch (t.type) {
            case yC:
                return t.payload.ixInstances || Object.freeze({});
            case _C:
                return Object.freeze({});
            case IC:
                {
                    let {instanceId: n, elementId: r, actionItem: o, eventId: i, eventTarget: a, eventStateKey: u, actionListId: s, groupIndex: f, isCarrier: m, origin: v, destination: g, immediate: E, verbose: T, continuous: w, parameterId: R, actionGroups: b, smoothing: L, restingValue: C, pluginInstance: D, pluginDuration: F, instanceDelay: M, skipMotion: H, skipToValue: j} = t.payload
                      , {actionTypeId: Q} = o
                      , J = SC(Q)
                      , ee = xC(J, Q)
                      , X = Object.keys(g).filter(q => g[q] != null && typeof g[q] != "string")
                      , {easing: S} = o.config;
                    return (0,
                    ut.set)(e, n, {
                        id: n,
                        elementId: r,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: v,
                        destination: g,
                        destinationKeys: X,
                        immediate: E,
                        verbose: T,
                        current: null,
                        actionItem: o,
                        actionTypeId: Q,
                        eventId: i,
                        eventTarget: a,
                        eventStateKey: u,
                        actionListId: s,
                        groupIndex: f,
                        renderType: J,
                        isCarrier: m,
                        styleProp: ee,
                        continuous: w,
                        parameterId: R,
                        actionGroups: b,
                        smoothing: L,
                        restingValue: C,
                        pluginInstance: D,
                        pluginDuration: F,
                        instanceDelay: M,
                        skipMotion: H,
                        skipToValue: j,
                        customEasingFn: Array.isArray(S) && S.length === 4 ? AC(S) : void 0
                    })
                }
            case TC:
                {
                    let {instanceId: n, time: r} = t.payload;
                    return (0,
                    ut.mergeIn)(e, [n], {
                        active: !0,
                        complete: !1,
                        start: r
                    })
                }
            case bC:
                {
                    let {instanceId: n} = t.payload;
                    if (!e[n])
                        return e;
                    let r = {}
                      , o = Object.keys(e)
                      , {length: i} = o;
                    for (let a = 0; a < i; a++) {
                        let u = o[a];
                        u !== n && (r[u] = e[u])
                    }
                    return r
                }
            case wC:
                {
                    let n = e
                      , r = Object.keys(e)
                      , {length: o} = r;
                    for (let i = 0; i < o; i++) {
                        let a = r[i]
                          , u = e[a]
                          , s = u.continuous ? RC : CC;
                        n = (0,
                        ut.set)(n, a, s(u, t))
                    }
                    return n
                }
            default:
                return e
            }
        }
    }
    );
    var PC, LC, NC, cp, lp = Ee( () => {
        "use strict";
        Me();
        ({IX2_RAW_DATA_IMPORTED: PC, IX2_SESSION_STOPPED: LC, IX2_PARAMETER_CHANGED: NC} = Te),
        cp = (e={}, t) => {
            switch (t.type) {
            case PC:
                return t.payload.ixParameters || {};
            case LC:
                return {};
            case NC:
                {
                    let {key: n, value: r} = t.payload;
                    return e[n] = r,
                    e
                }
            default:
                return e
            }
        }
    }
    );
    var pp = {};
    Le(pp, {
        default: () => MC
    });
    var fp, dp, DC, MC, gp = Ee( () => {
        "use strict";
        fp = le(mi());
        Is();
        Ws();
        Bs();
        dp = le(wt());
        up();
        lp();
        ({ixElements: DC} = dp.IX2ElementsReducer),
        MC = (0,
        fp.combineReducers)({
            ixData: _s,
            ixRequest: Us,
            ixSession: Hs,
            ixElements: DC,
            ixInstances: sp,
            ixParameters: cp
        })
    }
    );
    var vp = d( (Ek, hp) => {
        var FC = ft()
          , qC = be()
          , kC = ot()
          , XC = "[object String]";
        function GC(e) {
            return typeof e == "string" || !qC(e) && kC(e) && FC(e) == XC
        }
        hp.exports = GC
    }
    );
    var mp = d( (mk, Ep) => {
        var UC = zi()
          , WC = UC("length");
        Ep.exports = WC
    }
    );
    var _p = d( (yk, yp) => {
        var VC = "\\ud800-\\udfff"
          , HC = "\\u0300-\\u036f"
          , BC = "\\ufe20-\\ufe2f"
          , zC = "\\u20d0-\\u20ff"
          , KC = HC + BC + zC
          , jC = "\\ufe0e\\ufe0f"
          , YC = "\\u200d"
          , QC = RegExp("[" + YC + VC + KC + jC + "]");
        function $C(e) {
            return QC.test(e)
        }
        yp.exports = $C
    }
    );
    var Rp = d( (_k, xp) => {
        var Tp = "\\ud800-\\udfff"
          , ZC = "\\u0300-\\u036f"
          , JC = "\\ufe20-\\ufe2f"
          , eP = "\\u20d0-\\u20ff"
          , tP = ZC + JC + eP
          , nP = "\\ufe0e\\ufe0f"
          , rP = "[" + Tp + "]"
          , Co = "[" + tP + "]"
          , Po = "\\ud83c[\\udffb-\\udfff]"
          , iP = "(?:" + Co + "|" + Po + ")"
          , bp = "[^" + Tp + "]"
          , wp = "(?:\\ud83c[\\udde6-\\uddff]){2}"
          , Ap = "[\\ud800-\\udbff][\\udc00-\\udfff]"
          , oP = "\\u200d"
          , Op = iP + "?"
          , Sp = "[" + nP + "]?"
          , aP = "(?:" + oP + "(?:" + [bp, wp, Ap].join("|") + ")" + Sp + Op + ")*"
          , sP = Sp + Op + aP
          , uP = "(?:" + [bp + Co + "?", Co, wp, Ap, rP].join("|") + ")"
          , Ip = RegExp(Po + "(?=" + Po + ")|" + uP + sP, "g");
        function cP(e) {
            for (var t = Ip.lastIndex = 0; Ip.test(e); )
                ++t;
            return t
        }
        xp.exports = cP
    }
    );
    var Pp = d( (Ik, Cp) => {
        var lP = mp()
          , fP = _p()
          , dP = Rp();
        function pP(e) {
            return fP(e) ? dP(e) : lP(e)
        }
        Cp.exports = pP
    }
    );
    var Np = d( (Tk, Lp) => {
        var gP = rr()
          , hP = ir()
          , vP = yt()
          , EP = vp()
          , mP = Pp()
          , yP = "[object Map]"
          , _P = "[object Set]";
        function IP(e) {
            if (e == null)
                return 0;
            if (vP(e))
                return EP(e) ? mP(e) : e.length;
            var t = hP(e);
            return t == yP || t == _P ? e.size : gP(e).length
        }
        Lp.exports = IP
    }
    );
    var Mp = d( (bk, Dp) => {
        var TP = "Expected a function";
        function bP(e) {
            if (typeof e != "function")
                throw new TypeError(TP);
            return function() {
                var t = arguments;
                switch (t.length) {
                case 0:
                    return !e.call(this);
                case 1:
                    return !e.call(this, t[0]);
                case 2:
                    return !e.call(this, t[0], t[1]);
                case 3:
                    return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        Dp.exports = bP
    }
    );
    var Lo = d( (wk, Fp) => {
        var wP = dt()
          , AP = function() {
            try {
                var e = wP(Object, "defineProperty");
                return e({}, "", {}),
                e
            } catch {}
        }();
        Fp.exports = AP
    }
    );
    var No = d( (Ak, kp) => {
        var qp = Lo();
        function OP(e, t, n) {
            t == "__proto__" && qp ? qp(e, t, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0
            }) : e[t] = n
        }
        kp.exports = OP
    }
    );
    var Gp = d( (Ok, Xp) => {
        var SP = No()
          , xP = Kn()
          , RP = Object.prototype
          , CP = RP.hasOwnProperty;
        function PP(e, t, n) {
            var r = e[t];
            (!(CP.call(e, t) && xP(r, n)) || n === void 0 && !(t in e)) && SP(e, t, n)
        }
        Xp.exports = PP
    }
    );
    var Vp = d( (Sk, Wp) => {
        var LP = Gp()
          , NP = En()
          , DP = Jn()
          , Up = et()
          , MP = Gt();
        function FP(e, t, n, r) {
            if (!Up(e))
                return e;
            t = NP(t, e);
            for (var o = -1, i = t.length, a = i - 1, u = e; u != null && ++o < i; ) {
                var s = MP(t[o])
                  , f = n;
                if (s === "__proto__" || s === "constructor" || s === "prototype")
                    return e;
                if (o != a) {
                    var m = u[s];
                    f = r ? r(m, s, u) : void 0,
                    f === void 0 && (f = Up(m) ? m : DP(t[o + 1]) ? [] : {})
                }
                LP(u, s, f),
                u = u[s]
            }
            return e
        }
        Wp.exports = FP
    }
    );
    var Bp = d( (xk, Hp) => {
        var qP = sr()
          , kP = Vp()
          , XP = En();
        function GP(e, t, n) {
            for (var r = -1, o = t.length, i = {}; ++r < o; ) {
                var a = t[r]
                  , u = qP(e, a);
                n(u, a) && kP(i, XP(a, e), u)
            }
            return i
        }
        Hp.exports = GP
    }
    );
    var Kp = d( (Rk, zp) => {
        var UP = $n()
          , WP = oi()
          , VP = Pi()
          , HP = Ci()
          , BP = Object.getOwnPropertySymbols
          , zP = BP ? function(e) {
            for (var t = []; e; )
                UP(t, VP(e)),
                e = WP(e);
            return t
        }
        : HP;
        zp.exports = zP
    }
    );
    var Yp = d( (Ck, jp) => {
        function KP(e) {
            var t = [];
            if (e != null)
                for (var n in Object(e))
                    t.push(n);
            return t
        }
        jp.exports = KP
    }
    );
    var $p = d( (Pk, Qp) => {
        var jP = et()
          , YP = nr()
          , QP = Yp()
          , $P = Object.prototype
          , ZP = $P.hasOwnProperty;
        function JP(e) {
            if (!jP(e))
                return QP(e);
            var t = YP(e)
              , n = [];
            for (var r in e)
                r == "constructor" && (t || !ZP.call(e, r)) || n.push(r);
            return n
        }
        Qp.exports = JP
    }
    );
    var Jp = d( (Lk, Zp) => {
        var eL = Ni()
          , tL = $p()
          , nL = yt();
        function rL(e) {
            return nL(e) ? eL(e, !0) : tL(e)
        }
        Zp.exports = rL
    }
    );
    var tg = d( (Nk, eg) => {
        var iL = Ri()
          , oL = Kp()
          , aL = Jp();
        function sL(e) {
            return iL(e, aL, oL)
        }
        eg.exports = sL
    }
    );
    var rg = d( (Dk, ng) => {
        var uL = Bi()
          , cL = pt()
          , lL = Bp()
          , fL = tg();
        function dL(e, t) {
            if (e == null)
                return {};
            var n = uL(fL(e), function(r) {
                return [r]
            });
            return t = cL(t),
            lL(e, n, function(r, o) {
                return t(r, o[0])
            })
        }
        ng.exports = dL
    }
    );
    var og = d( (Mk, ig) => {
        var pL = pt()
          , gL = Mp()
          , hL = rg();
        function vL(e, t) {
            return hL(e, gL(pL(t)))
        }
        ig.exports = vL
    }
    );
    var sg = d( (Fk, ag) => {
        var EL = rr()
          , mL = ir()
          , yL = fn()
          , _L = be()
          , IL = yt()
          , TL = Zn()
          , bL = nr()
          , wL = tr()
          , AL = "[object Map]"
          , OL = "[object Set]"
          , SL = Object.prototype
          , xL = SL.hasOwnProperty;
        function RL(e) {
            if (e == null)
                return !0;
            if (IL(e) && (_L(e) || typeof e == "string" || typeof e.splice == "function" || TL(e) || wL(e) || yL(e)))
                return !e.length;
            var t = mL(e);
            if (t == AL || t == OL)
                return !e.size;
            if (bL(e))
                return !EL(e).length;
            for (var n in e)
                if (xL.call(e, n))
                    return !1;
            return !0
        }
        ag.exports = RL
    }
    );
    var cg = d( (qk, ug) => {
        var CL = No()
          , PL = yo()
          , LL = pt();
        function NL(e, t) {
            var n = {};
            return t = LL(t, 3),
            PL(e, function(r, o, i) {
                CL(n, o, t(r, o, i))
            }),
            n
        }
        ug.exports = NL
    }
    );
    var fg = d( (kk, lg) => {
        function DL(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
                ;
            return e
        }
        lg.exports = DL
    }
    );
    var pg = d( (Xk, dg) => {
        var ML = cr();
        function FL(e) {
            return typeof e == "function" ? e : ML
        }
        dg.exports = FL
    }
    );
    var hg = d( (Gk, gg) => {
        var qL = fg()
          , kL = _o()
          , XL = pg()
          , GL = be();
        function UL(e, t) {
            var n = GL(e) ? qL : kL;
            return n(e, XL(t))
        }
        gg.exports = UL
    }
    );
    var Eg = d( (Uk, vg) => {
        var WL = He()
          , VL = function() {
            return WL.Date.now()
        };
        vg.exports = VL
    }
    );
    var _g = d( (Wk, yg) => {
        var HL = et()
          , Do = Eg()
          , mg = lr()
          , BL = "Expected a function"
          , zL = Math.max
          , KL = Math.min;
        function jL(e, t, n) {
            var r, o, i, a, u, s, f = 0, m = !1, v = !1, g = !0;
            if (typeof e != "function")
                throw new TypeError(BL);
            t = mg(t) || 0,
            HL(n) && (m = !!n.leading,
            v = "maxWait"in n,
            i = v ? zL(mg(n.maxWait) || 0, t) : i,
            g = "trailing"in n ? !!n.trailing : g);
            function E(M) {
                var H = r
                  , j = o;
                return r = o = void 0,
                f = M,
                a = e.apply(j, H),
                a
            }
            function T(M) {
                return f = M,
                u = setTimeout(b, t),
                m ? E(M) : a
            }
            function w(M) {
                var H = M - s
                  , j = M - f
                  , Q = t - H;
                return v ? KL(Q, i - j) : Q
            }
            function R(M) {
                var H = M - s
                  , j = M - f;
                return s === void 0 || H >= t || H < 0 || v && j >= i
            }
            function b() {
                var M = Do();
                if (R(M))
                    return L(M);
                u = setTimeout(b, w(M))
            }
            function L(M) {
                return u = void 0,
                g && r ? E(M) : (r = o = void 0,
                a)
            }
            function C() {
                u !== void 0 && clearTimeout(u),
                f = 0,
                r = s = o = u = void 0
            }
            function D() {
                return u === void 0 ? a : L(Do())
            }
            function F() {
                var M = Do()
                  , H = R(M);
                if (r = arguments,
                o = this,
                s = M,
                H) {
                    if (u === void 0)
                        return T(s);
                    if (v)
                        return clearTimeout(u),
                        u = setTimeout(b, t),
                        E(s)
                }
                return u === void 0 && (u = setTimeout(b, t)),
                a
            }
            return F.cancel = C,
            F.flush = D,
            F
        }
        yg.exports = jL
    }
    );
    var Tg = d( (Vk, Ig) => {
        var YL = _g()
          , QL = et()
          , $L = "Expected a function";
        function ZL(e, t, n) {
            var r = !0
              , o = !0;
            if (typeof e != "function")
                throw new TypeError($L);
            return QL(n) && (r = "leading"in n ? !!n.leading : r,
            o = "trailing"in n ? !!n.trailing : o),
            YL(e, t, {
                leading: r,
                maxWait: t,
                trailing: o
            })
        }
        Ig.exports = ZL
    }
    );
    var wg = {};
    Le(wg, {
        actionListPlaybackChanged: () => Zt,
        animationFrameChanged: () => xr,
        clearRequested: () => bN,
        elementStateChanged: () => Wo,
        eventListenerAdded: () => Sr,
        eventStateChanged: () => Xo,
        instanceAdded: () => Go,
        instanceRemoved: () => Uo,
        instanceStarted: () => Rr,
        mediaQueriesDefined: () => Ho,
        parameterChanged: () => $t,
        playbackRequested: () => IN,
        previewRequested: () => _N,
        rawDataImported: () => Mo,
        sessionInitialized: () => Fo,
        sessionStarted: () => qo,
        sessionStopped: () => ko,
        stopRequested: () => TN,
        testFrameRendered: () => wN,
        viewportWidthChanged: () => Vo
    });
    var bg, JL, eN, tN, nN, rN, iN, oN, aN, sN, uN, cN, lN, fN, dN, pN, gN, hN, vN, EN, mN, yN, Mo, Fo, qo, ko, _N, IN, TN, bN, Sr, wN, Xo, xr, $t, Go, Rr, Uo, Wo, Zt, Vo, Ho, Cr = Ee( () => {
        "use strict";
        Me();
        bg = le(wt()),
        {IX2_RAW_DATA_IMPORTED: JL, IX2_SESSION_INITIALIZED: eN, IX2_SESSION_STARTED: tN, IX2_SESSION_STOPPED: nN, IX2_PREVIEW_REQUESTED: rN, IX2_PLAYBACK_REQUESTED: iN, IX2_STOP_REQUESTED: oN, IX2_CLEAR_REQUESTED: aN, IX2_EVENT_LISTENER_ADDED: sN, IX2_TEST_FRAME_RENDERED: uN, IX2_EVENT_STATE_CHANGED: cN, IX2_ANIMATION_FRAME_CHANGED: lN, IX2_PARAMETER_CHANGED: fN, IX2_INSTANCE_ADDED: dN, IX2_INSTANCE_STARTED: pN, IX2_INSTANCE_REMOVED: gN, IX2_ELEMENT_STATE_CHANGED: hN, IX2_ACTION_LIST_PLAYBACK_CHANGED: vN, IX2_VIEWPORT_WIDTH_CHANGED: EN, IX2_MEDIA_QUERIES_DEFINED: mN} = Te,
        {reifyState: yN} = bg.IX2VanillaUtils,
        Mo = e => ({
            type: JL,
            payload: {
                ...yN(e)
            }
        }),
        Fo = ({hasBoundaryNodes: e, reducedMotion: t}) => ({
            type: eN,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }),
        qo = () => ({
            type: tN
        }),
        ko = () => ({
            type: nN
        }),
        _N = ({rawData: e, defer: t}) => ({
            type: rN,
            payload: {
                defer: t,
                rawData: e
            }
        }),
        IN = ({actionTypeId: e=De.GENERAL_START_ACTION, actionListId: t, actionItemId: n, eventId: r, allowEvents: o, immediate: i, testManual: a, verbose: u, rawData: s}) => ({
            type: iN,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: n,
                testManual: a,
                eventId: r,
                allowEvents: o,
                immediate: i,
                verbose: u,
                rawData: s
            }
        }),
        TN = e => ({
            type: oN,
            payload: {
                actionListId: e
            }
        }),
        bN = () => ({
            type: aN
        }),
        Sr = (e, t) => ({
            type: sN,
            payload: {
                target: e,
                listenerParams: t
            }
        }),
        wN = (e=1) => ({
            type: uN,
            payload: {
                step: e
            }
        }),
        Xo = (e, t) => ({
            type: cN,
            payload: {
                stateKey: e,
                newState: t
            }
        }),
        xr = (e, t) => ({
            type: lN,
            payload: {
                now: e,
                parameters: t
            }
        }),
        $t = (e, t) => ({
            type: fN,
            payload: {
                key: e,
                value: t
            }
        }),
        Go = e => ({
            type: dN,
            payload: {
                ...e
            }
        }),
        Rr = (e, t) => ({
            type: pN,
            payload: {
                instanceId: e,
                time: t
            }
        }),
        Uo = e => ({
            type: gN,
            payload: {
                instanceId: e
            }
        }),
        Wo = (e, t, n, r) => ({
            type: hN,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: n,
                actionItem: r
            }
        }),
        Zt = ({actionListId: e, isPlaying: t}) => ({
            type: vN,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }),
        Vo = ({width: e, mediaQueries: t}) => ({
            type: EN,
            payload: {
                width: e,
                mediaQueries: t
            }
        }),
        Ho = () => ({
            type: mN
        })
    }
    );
    var Re = {};
    Le(Re, {
        elementContains: () => Ko,
        getChildElements: () => DN,
        getClosestElement: () => xn,
        getProperty: () => RN,
        getQuerySelector: () => zo,
        getRefType: () => jo,
        getSiblingElements: () => MN,
        getStyle: () => xN,
        getValidDocument: () => PN,
        isSiblingNode: () => NN,
        matchSelector: () => CN,
        queryDocument: () => LN,
        setStyle: () => SN
    });
    function SN(e, t, n) {
        e.style[t] = n
    }
    function xN(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
    }
    function RN(e, t) {
        return e[t]
    }
    function CN(e) {
        return t => t[Bo](e)
    }
    function zo({id: e, selector: t}) {
        if (e) {
            let n = e;
            if (e.indexOf(Ag) !== -1) {
                let r = e.split(Ag)
                  , o = r[0];
                if (n = r[1],
                o !== document.documentElement.getAttribute(Sg))
                    return null
            }
            return `[data-w-id="${n}"], [data-w-id^="${n}_instance"]`
        }
        return t
    }
    function PN(e) {
        return e == null || e === document.documentElement.getAttribute(Sg) ? document : null
    }
    function LN(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }
    function Ko(e, t) {
        return e.contains(t)
    }
    function NN(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }
    function DN(e) {
        let t = [];
        for (let n = 0, {length: r} = e || []; n < r; n++) {
            let {children: o} = e[n]
              , {length: i} = o;
            if (i)
                for (let a = 0; a < i; a++)
                    t.push(o[a])
        }
        return t
    }
    function MN(e=[]) {
        let t = []
          , n = [];
        for (let r = 0, {length: o} = e; r < o; r++) {
            let {parentNode: i} = e[r];
            if (!i || !i.children || !i.children.length || n.indexOf(i) !== -1)
                continue;
            n.push(i);
            let a = i.firstElementChild;
            for (; a != null; )
                e.indexOf(a) === -1 && t.push(a),
                a = a.nextElementSibling
        }
        return t
    }
    function jo(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? AN : ON : null
    }
    var Og, Bo, Ag, AN, ON, Sg, xn, xg = Ee( () => {
        "use strict";
        Og = le(wt());
        Me();
        ({ELEMENT_MATCHES: Bo} = Og.IX2BrowserSupport),
        {IX2_ID_DELIMITER: Ag, HTML_ELEMENT: AN, PLAIN_OBJECT: ON, WF_PAGE: Sg} = Ae;
        xn = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e))
                return null;
            let n = e;
            do {
                if (n[Bo] && n[Bo](t))
                    return n;
                n = n.parentNode
            } while (n != null);
            return null
        }
    }
    );
    var Yo = d( (zk, Cg) => {
        var FN = et()
          , Rg = Object.create
          , qN = function() {
            function e() {}
            return function(t) {
                if (!FN(t))
                    return {};
                if (Rg)
                    return Rg(t);
                e.prototype = t;
                var n = new e;
                return e.prototype = void 0,
                n
            }
        }();
        Cg.exports = qN
    }
    );
    var Pr = d( (Kk, Pg) => {
        function kN() {}
        Pg.exports = kN
    }
    );
    var Nr = d( (jk, Lg) => {
        var XN = Yo()
          , GN = Pr();
        function Lr(e, t) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__chain__ = !!t,
            this.__index__ = 0,
            this.__values__ = void 0
        }
        Lr.prototype = XN(GN.prototype);
        Lr.prototype.constructor = Lr;
        Lg.exports = Lr
    }
    );
    var Fg = d( (Yk, Mg) => {
        var Ng = Rt()
          , UN = fn()
          , WN = be()
          , Dg = Ng ? Ng.isConcatSpreadable : void 0;
        function VN(e) {
            return WN(e) || UN(e) || !!(Dg && e && e[Dg])
        }
        Mg.exports = VN
    }
    );
    var Xg = d( (Qk, kg) => {
        var HN = $n()
          , BN = Fg();
        function qg(e, t, n, r, o) {
            var i = -1
              , a = e.length;
            for (n || (n = BN),
            o || (o = []); ++i < a; ) {
                var u = e[i];
                t > 0 && n(u) ? t > 1 ? qg(u, t - 1, n, r, o) : HN(o, u) : r || (o[o.length] = u)
            }
            return o
        }
        kg.exports = qg
    }
    );
    var Ug = d( ($k, Gg) => {
        var zN = Xg();
        function KN(e) {
            var t = e == null ? 0 : e.length;
            return t ? zN(e, 1) : []
        }
        Gg.exports = KN
    }
    );
    var Vg = d( (Zk, Wg) => {
        function jN(e, t, n) {
            switch (n.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, n[0]);
            case 2:
                return e.call(t, n[0], n[1]);
            case 3:
                return e.call(t, n[0], n[1], n[2])
            }
            return e.apply(t, n)
        }
        Wg.exports = jN
    }
    );
    var zg = d( (Jk, Bg) => {
        var YN = Vg()
          , Hg = Math.max;
        function QN(e, t, n) {
            return t = Hg(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var r = arguments, o = -1, i = Hg(r.length - t, 0), a = Array(i); ++o < i; )
                    a[o] = r[t + o];
                o = -1;
                for (var u = Array(t + 1); ++o < t; )
                    u[o] = r[o];
                return u[t] = n(a),
                YN(e, this, u)
            }
        }
        Bg.exports = QN
    }
    );
    var jg = d( (eX, Kg) => {
        function $N(e) {
            return function() {
                return e
            }
        }
        Kg.exports = $N
    }
    );
    var $g = d( (tX, Qg) => {
        var ZN = jg()
          , Yg = Lo()
          , JN = cr()
          , eD = Yg ? function(e, t) {
            return Yg(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: ZN(t),
                writable: !0
            })
        }
        : JN;
        Qg.exports = eD
    }
    );
    var Jg = d( (nX, Zg) => {
        var tD = 800
          , nD = 16
          , rD = Date.now;
        function iD(e) {
            var t = 0
              , n = 0;
            return function() {
                var r = rD()
                  , o = nD - (r - n);
                if (n = r,
                o > 0) {
                    if (++t >= tD)
                        return arguments[0]
                } else
                    t = 0;
                return e.apply(void 0, arguments)
            }
        }
        Zg.exports = iD
    }
    );
    var th = d( (rX, eh) => {
        var oD = $g()
          , aD = Jg()
          , sD = aD(oD);
        eh.exports = sD
    }
    );
    var rh = d( (iX, nh) => {
        var uD = Ug()
          , cD = zg()
          , lD = th();
        function fD(e) {
            return lD(cD(e, void 0, uD), e + "")
        }
        nh.exports = fD
    }
    );
    var ah = d( (oX, oh) => {
        var ih = Di()
          , dD = ih && new ih;
        oh.exports = dD
    }
    );
    var uh = d( (aX, sh) => {
        function pD() {}
        sh.exports = pD
    }
    );
    var Qo = d( (sX, lh) => {
        var ch = ah()
          , gD = uh()
          , hD = ch ? function(e) {
            return ch.get(e)
        }
        : gD;
        lh.exports = hD
    }
    );
    var dh = d( (uX, fh) => {
        var vD = {};
        fh.exports = vD
    }
    );
    var $o = d( (cX, gh) => {
        var ph = dh()
          , ED = Object.prototype
          , mD = ED.hasOwnProperty;
        function yD(e) {
            for (var t = e.name + "", n = ph[t], r = mD.call(ph, t) ? n.length : 0; r--; ) {
                var o = n[r]
                  , i = o.func;
                if (i == null || i == e)
                    return o.name
            }
            return t
        }
        gh.exports = yD
    }
    );
    var Mr = d( (lX, hh) => {
        var _D = Yo()
          , ID = Pr()
          , TD = 4294967295;
        function Dr(e) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__dir__ = 1,
            this.__filtered__ = !1,
            this.__iteratees__ = [],
            this.__takeCount__ = TD,
            this.__views__ = []
        }
        Dr.prototype = _D(ID.prototype);
        Dr.prototype.constructor = Dr;
        hh.exports = Dr
    }
    );
    var Eh = d( (fX, vh) => {
        function bD(e, t) {
            var n = -1
              , r = e.length;
            for (t || (t = Array(r)); ++n < r; )
                t[n] = e[n];
            return t
        }
        vh.exports = bD
    }
    );
    var yh = d( (dX, mh) => {
        var wD = Mr()
          , AD = Nr()
          , OD = Eh();
        function SD(e) {
            if (e instanceof wD)
                return e.clone();
            var t = new AD(e.__wrapped__,e.__chain__);
            return t.__actions__ = OD(e.__actions__),
            t.__index__ = e.__index__,
            t.__values__ = e.__values__,
            t
        }
        mh.exports = SD
    }
    );
    var Th = d( (pX, Ih) => {
        var xD = Mr()
          , _h = Nr()
          , RD = Pr()
          , CD = be()
          , PD = ot()
          , LD = yh()
          , ND = Object.prototype
          , DD = ND.hasOwnProperty;
        function Fr(e) {
            if (PD(e) && !CD(e) && !(e instanceof xD)) {
                if (e instanceof _h)
                    return e;
                if (DD.call(e, "__wrapped__"))
                    return LD(e)
            }
            return new _h(e)
        }
        Fr.prototype = RD.prototype;
        Fr.prototype.constructor = Fr;
        Ih.exports = Fr
    }
    );
    var wh = d( (gX, bh) => {
        var MD = Mr()
          , FD = Qo()
          , qD = $o()
          , kD = Th();
        function XD(e) {
            var t = qD(e)
              , n = kD[t];
            if (typeof n != "function" || !(t in MD.prototype))
                return !1;
            if (e === n)
                return !0;
            var r = FD(n);
            return !!r && e === r[0]
        }
        bh.exports = XD
    }
    );
    var xh = d( (hX, Sh) => {
        var Ah = Nr()
          , GD = rh()
          , UD = Qo()
          , Zo = $o()
          , WD = be()
          , Oh = wh()
          , VD = "Expected a function"
          , HD = 8
          , BD = 32
          , zD = 128
          , KD = 256;
        function jD(e) {
            return GD(function(t) {
                var n = t.length
                  , r = n
                  , o = Ah.prototype.thru;
                for (e && t.reverse(); r--; ) {
                    var i = t[r];
                    if (typeof i != "function")
                        throw new TypeError(VD);
                    if (o && !a && Zo(i) == "wrapper")
                        var a = new Ah([],!0)
                }
                for (r = a ? r : n; ++r < n; ) {
                    i = t[r];
                    var u = Zo(i)
                      , s = u == "wrapper" ? UD(i) : void 0;
                    s && Oh(s[0]) && s[1] == (zD | HD | BD | KD) && !s[4].length && s[9] == 1 ? a = a[Zo(s[0])].apply(a, s[3]) : a = i.length == 1 && Oh(i) ? a[u]() : a.thru(i)
                }
                return function() {
                    var f = arguments
                      , m = f[0];
                    if (a && f.length == 1 && WD(m))
                        return a.plant(m).value();
                    for (var v = 0, g = n ? t[v].apply(this, f) : m; ++v < n; )
                        g = t[v].call(this, g);
                    return g
                }
            })
        }
        Sh.exports = jD
    }
    );
    var Ch = d( (vX, Rh) => {
        var YD = xh()
          , QD = YD();
        Rh.exports = QD
    }
    );
    var Lh = d( (EX, Ph) => {
        function $D(e, t, n) {
            return e === e && (n !== void 0 && (e = e <= n ? e : n),
            t !== void 0 && (e = e >= t ? e : t)),
            e
        }
        Ph.exports = $D
    }
    );
    var Dh = d( (mX, Nh) => {
        var ZD = Lh()
          , Jo = lr();
        function JD(e, t, n) {
            return n === void 0 && (n = t,
            t = void 0),
            n !== void 0 && (n = Jo(n),
            n = n === n ? n : 0),
            t !== void 0 && (t = Jo(t),
            t = t === t ? t : 0),
            ZD(Jo(e), t, n)
        }
        Nh.exports = JD
    }
    );
    var Vh, Hh, Bh, zh, eM, tM, nM, rM, iM, oM, aM, sM, uM, cM, lM, fM, dM, pM, gM, Kh, jh, hM, vM, EM, Yh, mM, yM, Qh, _M, ea, $h, Mh, Fh, Zh, Cn, IM, rt, Jh, TM, qe, Ke, Pn, ev, ta, qh, na, bM, Rn, wM, AM, OM, tv, kh, SM, Xh, xM, RM, CM, Gh, qr, kr, Uh, Wh, nv, rv = Ee( () => {
        "use strict";
        Vh = le(Ch()),
        Hh = le(ur()),
        Bh = le(Dh());
        Me();
        ra();
        Cr();
        zh = le(wt()),
        {MOUSE_CLICK: eM, MOUSE_SECOND_CLICK: tM, MOUSE_DOWN: nM, MOUSE_UP: rM, MOUSE_OVER: iM, MOUSE_OUT: oM, DROPDOWN_CLOSE: aM, DROPDOWN_OPEN: sM, SLIDER_ACTIVE: uM, SLIDER_INACTIVE: cM, TAB_ACTIVE: lM, TAB_INACTIVE: fM, NAVBAR_CLOSE: dM, NAVBAR_OPEN: pM, MOUSE_MOVE: gM, PAGE_SCROLL_DOWN: Kh, SCROLL_INTO_VIEW: jh, SCROLL_OUT_OF_VIEW: hM, PAGE_SCROLL_UP: vM, SCROLLING_IN_VIEW: EM, PAGE_FINISH: Yh, ECOMMERCE_CART_CLOSE: mM, ECOMMERCE_CART_OPEN: yM, PAGE_START: Qh, PAGE_SCROLL: _M} = Be,
        ea = "COMPONENT_ACTIVE",
        $h = "COMPONENT_INACTIVE",
        {COLON_DELIMITER: Mh} = Ae,
        {getNamespacedParameterId: Fh} = zh.IX2VanillaUtils,
        Zh = e => t => typeof t == "object" && e(t) ? !0 : t,
        Cn = Zh( ({element: e, nativeEvent: t}) => e === t.target),
        IM = Zh( ({element: e, nativeEvent: t}) => e.contains(t.target)),
        rt = (0,
        Vh.default)([Cn, IM]),
        Jh = (e, t) => {
            if (t) {
                let {ixData: n} = e.getState()
                  , {events: r} = n
                  , o = r[t];
                if (o && !bM[o.eventTypeId])
                    return o
            }
            return null
        }
        ,
        TM = ({store: e, event: t}) => {
            let {action: n} = t
              , {autoStopEventId: r} = n.config;
            return !!Jh(e, r)
        }
        ,
        qe = ({store: e, event: t, element: n, eventStateKey: r}, o) => {
            let {action: i, id: a} = t
              , {actionListId: u, autoStopEventId: s} = i.config
              , f = Jh(e, s);
            return f && Jt({
                store: e,
                eventId: s,
                eventTarget: n,
                eventStateKey: s + Mh + r.split(Mh)[1],
                actionListId: (0,
                Hh.default)(f, "action.config.actionListId")
            }),
            Jt({
                store: e,
                eventId: a,
                eventTarget: n,
                eventStateKey: r,
                actionListId: u
            }),
            Ln({
                store: e,
                eventId: a,
                eventTarget: n,
                eventStateKey: r,
                actionListId: u
            }),
            o
        }
        ,
        Ke = (e, t) => (n, r) => e(n, r) === !0 ? t(n, r) : r,
        Pn = {
            handler: Ke(rt, qe)
        },
        ev = {
            ...Pn,
            types: [ea, $h].join(" ")
        },
        ta = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }],
        qh = "mouseover mouseout",
        na = {
            types: ta
        },
        bM = {
            PAGE_START: Qh,
            PAGE_FINISH: Yh
        },
        Rn = ( () => {
            let e = window.pageXOffset !== void 0
              , n = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : n.scrollLeft,
                scrollTop: e ? window.pageYOffset : n.scrollTop,
                stiffScrollTop: (0,
                Bh.default)(e ? window.pageYOffset : n.scrollTop, 0, n.scrollHeight - window.innerHeight),
                scrollWidth: n.scrollWidth,
                scrollHeight: n.scrollHeight,
                clientWidth: n.clientWidth,
                clientHeight: n.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        }
        )(),
        wM = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
        AM = ({element: e, nativeEvent: t}) => {
            let {type: n, target: r, relatedTarget: o} = t
              , i = e.contains(r);
            if (n === "mouseover" && i)
                return !0;
            let a = e.contains(o);
            return !!(n === "mouseout" && i && a)
        }
        ,
        OM = e => {
            let {element: t, event: {config: n}} = e
              , {clientWidth: r, clientHeight: o} = Rn()
              , i = n.scrollOffsetValue
              , s = n.scrollOffsetUnit === "PX" ? i : o * (i || 0) / 100;
            return wM(t.getBoundingClientRect(), {
                left: 0,
                top: s,
                right: r,
                bottom: o - s
            })
        }
        ,
        tv = e => (t, n) => {
            let {type: r} = t.nativeEvent
              , o = [ea, $h].indexOf(r) !== -1 ? r === ea : n.isActive
              , i = {
                ...n,
                isActive: o
            };
            return (!n || i.isActive !== n.isActive) && e(t, i) || i
        }
        ,
        kh = e => (t, n) => {
            let r = {
                elementHovered: AM(t)
            };
            return (n ? r.elementHovered !== n.elementHovered : r.elementHovered) && e(t, r) || r
        }
        ,
        SM = e => (t, n) => {
            let r = {
                ...n,
                elementVisible: OM(t)
            };
            return (n ? r.elementVisible !== n.elementVisible : r.elementVisible) && e(t, r) || r
        }
        ,
        Xh = e => (t, n={}) => {
            let {stiffScrollTop: r, scrollHeight: o, innerHeight: i} = Rn()
              , {event: {config: a, eventTypeId: u}} = t
              , {scrollOffsetValue: s, scrollOffsetUnit: f} = a
              , m = f === "PX"
              , v = o - i
              , g = Number((r / v).toFixed(2));
            if (n && n.percentTop === g)
                return n;
            let E = (m ? s : i * (s || 0) / 100) / v, T, w, R = 0;
            n && (T = g > n.percentTop,
            w = n.scrollingDown !== T,
            R = w ? g : n.anchorTop);
            let b = u === Kh ? g >= R + E : g <= R - E
              , L = {
                ...n,
                percentTop: g,
                inBounds: b,
                anchorTop: R,
                scrollingDown: T
            };
            return n && b && (w || L.inBounds !== n.inBounds) && e(t, L) || L
        }
        ,
        xM = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
        RM = e => (t, n) => {
            let r = {
                finished: document.readyState === "complete"
            };
            return r.finished && !(n && n.finshed) && e(t),
            r
        }
        ,
        CM = e => (t, n) => {
            let r = {
                started: !0
            };
            return n || e(t),
            r
        }
        ,
        Gh = e => (t, n={
            clickCount: 0
        }) => {
            let r = {
                clickCount: n.clickCount % 2 + 1
            };
            return r.clickCount !== n.clickCount && e(t, r) || r
        }
        ,
        qr = (e=!0) => ({
            ...ev,
            handler: Ke(e ? rt : Cn, tv( (t, n) => n.isActive ? Pn.handler(t, n) : n))
        }),
        kr = (e=!0) => ({
            ...ev,
            handler: Ke(e ? rt : Cn, tv( (t, n) => n.isActive ? n : Pn.handler(t, n)))
        }),
        Uh = {
            ...na,
            handler: SM( (e, t) => {
                let {elementVisible: n} = t
                  , {event: r, store: o} = e
                  , {ixData: i} = o.getState()
                  , {events: a} = i;
                return !a[r.action.config.autoStopEventId] && t.triggered ? t : r.eventTypeId === jh === n ? (qe(e),
                {
                    ...t,
                    triggered: !0
                }) : t
            }
            )
        },
        Wh = .05,
        nv = {
            [uM]: qr(),
            [cM]: kr(),
            [sM]: qr(),
            [aM]: kr(),
            [pM]: qr(!1),
            [dM]: kr(!1),
            [lM]: qr(),
            [fM]: kr(),
            [yM]: {
                types: "ecommerce-cart-open",
                handler: Ke(rt, qe)
            },
            [mM]: {
                types: "ecommerce-cart-close",
                handler: Ke(rt, qe)
            },
            [eM]: {
                types: "click",
                handler: Ke(rt, Gh( (e, {clickCount: t}) => {
                    TM(e) ? t === 1 && qe(e) : qe(e)
                }
                ))
            },
            [tM]: {
                types: "click",
                handler: Ke(rt, Gh( (e, {clickCount: t}) => {
                    t === 2 && qe(e)
                }
                ))
            },
            [nM]: {
                ...Pn,
                types: "mousedown"
            },
            [rM]: {
                ...Pn,
                types: "mouseup"
            },
            [iM]: {
                types: qh,
                handler: Ke(rt, kh( (e, t) => {
                    t.elementHovered && qe(e)
                }
                ))
            },
            [oM]: {
                types: qh,
                handler: Ke(rt, kh( (e, t) => {
                    t.elementHovered || qe(e)
                }
                ))
            },
            [gM]: {
                types: "mousemove mouseout scroll",
                handler: ({store: e, element: t, eventConfig: n, nativeEvent: r, eventStateKey: o}, i={
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {basedOn: a, selectedAxis: u, continuousParameterGroupId: s, reverse: f, restingState: m=0} = n
                      , {clientX: v=i.clientX, clientY: g=i.clientY, pageX: E=i.pageX, pageY: T=i.pageY} = r
                      , w = u === "X_AXIS"
                      , R = r.type === "mouseout"
                      , b = m / 100
                      , L = s
                      , C = !1;
                    switch (a) {
                    case Je.VIEWPORT:
                        {
                            b = w ? Math.min(v, window.innerWidth) / window.innerWidth : Math.min(g, window.innerHeight) / window.innerHeight;
                            break
                        }
                    case Je.PAGE:
                        {
                            let {scrollLeft: D, scrollTop: F, scrollWidth: M, scrollHeight: H} = Rn();
                            b = w ? Math.min(D + E, M) / M : Math.min(F + T, H) / H;
                            break
                        }
                    case Je.ELEMENT:
                    default:
                        {
                            L = Fh(o, s);
                            let D = r.type.indexOf("mouse") === 0;
                            if (D && rt({
                                element: t,
                                nativeEvent: r
                            }) !== !0)
                                break;
                            let F = t.getBoundingClientRect()
                              , {left: M, top: H, width: j, height: Q} = F;
                            if (!D && !xM({
                                left: v,
                                top: g
                            }, F))
                                break;
                            C = !0,
                            b = w ? (v - M) / j : (g - H) / Q;
                            break
                        }
                    }
                    return R && (b > 1 - Wh || b < Wh) && (b = Math.round(b)),
                    (a !== Je.ELEMENT || C || C !== i.elementHovered) && (b = f ? 1 - b : b,
                    e.dispatch($t(L, b))),
                    {
                        elementHovered: C,
                        clientX: v,
                        clientY: g,
                        pageX: E,
                        pageY: T
                    }
                }
            },
            [_M]: {
                types: ta,
                handler: ({store: e, eventConfig: t}) => {
                    let {continuousParameterGroupId: n, reverse: r} = t
                      , {scrollTop: o, scrollHeight: i, clientHeight: a} = Rn()
                      , u = o / (i - a);
                    u = r ? 1 - u : u,
                    e.dispatch($t(n, u))
                }
            },
            [EM]: {
                types: ta,
                handler: ({element: e, store: t, eventConfig: n, eventStateKey: r}, o={
                    scrollPercent: 0
                }) => {
                    let {scrollLeft: i, scrollTop: a, scrollWidth: u, scrollHeight: s, clientHeight: f} = Rn()
                      , {basedOn: m, selectedAxis: v, continuousParameterGroupId: g, startsEntering: E, startsExiting: T, addEndOffset: w, addStartOffset: R, addOffsetValue: b=0, endOffsetValue: L=0} = n
                      , C = v === "X_AXIS";
                    if (m === Je.VIEWPORT) {
                        let D = C ? i / u : a / s;
                        return D !== o.scrollPercent && t.dispatch($t(g, D)),
                        {
                            scrollPercent: D
                        }
                    } else {
                        let D = Fh(r, g)
                          , F = e.getBoundingClientRect()
                          , M = (R ? b : 0) / 100
                          , H = (w ? L : 0) / 100;
                        M = E ? M : 1 - M,
                        H = T ? H : 1 - H;
                        let j = F.top + Math.min(F.height * M, f)
                          , J = F.top + F.height * H - j
                          , ee = Math.min(f + J, s)
                          , S = Math.min(Math.max(0, f - j), ee) / ee;
                        return S !== o.scrollPercent && t.dispatch($t(D, S)),
                        {
                            scrollPercent: S
                        }
                    }
                }
            },
            [jh]: Uh,
            [hM]: Uh,
            [Kh]: {
                ...na,
                handler: Xh( (e, t) => {
                    t.scrollingDown && qe(e)
                }
                )
            },
            [vM]: {
                ...na,
                handler: Xh( (e, t) => {
                    t.scrollingDown || qe(e)
                }
                )
            },
            [Yh]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Ke(Cn, RM(qe))
            },
            [Qh]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Ke(Cn, CM(qe))
            }
        }
    }
    );
    var _v = {};
    Le(_v, {
        observeRequests: () => QM,
        startActionGroup: () => Ln,
        startEngine: () => Hr,
        stopActionGroup: () => Jt,
        stopAllActionGroups: () => Ev,
        stopEngine: () => Br
    });
    function QM(e) {
        At({
            store: e,
            select: ({ixRequest: t}) => t.preview,
            onChange: JM
        }),
        At({
            store: e,
            select: ({ixRequest: t}) => t.playback,
            onChange: eF
        }),
        At({
            store: e,
            select: ({ixRequest: t}) => t.stop,
            onChange: tF
        }),
        At({
            store: e,
            select: ({ixRequest: t}) => t.clear,
            onChange: nF
        })
    }
    function $M(e) {
        At({
            store: e,
            select: ({ixSession: t}) => t.mediaQueryKey,
            onChange: () => {
                Br(e),
                pv({
                    store: e,
                    elementApi: Re
                }),
                Hr({
                    store: e,
                    allowEvents: !0
                }),
                gv()
            }
        })
    }
    function ZM(e, t) {
        let n = At({
            store: e,
            select: ({ixSession: r}) => r.tick,
            onChange: r => {
                t(r),
                n()
            }
        })
    }
    function JM({rawData: e, defer: t}, n) {
        let r = () => {
            Hr({
                store: n,
                rawData: e,
                allowEvents: !0
            }),
            gv()
        }
        ;
        t ? setTimeout(r, 0) : r()
    }
    function gv() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }
    function eF(e, t) {
        let {actionTypeId: n, actionListId: r, actionItemId: o, eventId: i, allowEvents: a, immediate: u, testManual: s, verbose: f=!0} = e
          , {rawData: m} = e;
        if (r && o && m && u) {
            let v = m.actionLists[r];
            v && (m = XM({
                actionList: v,
                actionItemId: o,
                rawData: m
            }))
        }
        if (Hr({
            store: t,
            rawData: m,
            allowEvents: a,
            testManual: s
        }),
        r && n === De.GENERAL_START_ACTION || ia(n)) {
            Jt({
                store: t,
                actionListId: r
            }),
            vv({
                store: t,
                actionListId: r,
                eventId: i
            });
            let v = Ln({
                store: t,
                eventId: i,
                actionListId: r,
                immediate: u,
                verbose: f
            });
            f && v && t.dispatch(Zt({
                actionListId: r,
                isPlaying: !u
            }))
        }
    }
    function tF({actionListId: e}, t) {
        e ? Jt({
            store: t,
            actionListId: e
        }) : Ev({
            store: t
        }),
        Br(t)
    }
    function nF(e, t) {
        Br(t),
        pv({
            store: t,
            elementApi: Re
        })
    }
    function Hr({store: e, rawData: t, allowEvents: n, testManual: r}) {
        let {ixSession: o} = e.getState();
        t && e.dispatch(Mo(t)),
        o.active || (e.dispatch(Fo({
            hasBoundaryNodes: !!document.querySelector(Gr),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })),
        n && (uF(e),
        rF(),
        e.getState().ixSession.hasDefinedMediaQueries && $M(e)),
        e.dispatch(qo()),
        iF(e, r))
    }
    function rF() {
        let {documentElement: e} = document;
        e.className.indexOf(iv) === -1 && (e.className += ` ${iv}`)
    }
    function iF(e, t) {
        let n = r => {
            let {ixSession: o, ixParameters: i} = e.getState();
            o.active && (e.dispatch(xr(r, i)),
            t ? ZM(e, n) : requestAnimationFrame(n))
        }
        ;
        n(window.performance.now())
    }
    function Br(e) {
        let {ixSession: t} = e.getState();
        if (t.active) {
            let {eventListeners: n} = t;
            n.forEach(oF),
            VM(),
            e.dispatch(ko())
        }
    }
    function oF({target: e, listenerParams: t}) {
        e.removeEventListener.apply(e, t)
    }
    function aF({store: e, eventStateKey: t, eventTarget: n, eventId: r, eventConfig: o, actionListId: i, parameterGroup: a, smoothing: u, restingValue: s}) {
        let {ixData: f, ixSession: m} = e.getState()
          , {events: v} = f
          , g = v[r]
          , {eventTypeId: E} = g
          , T = {}
          , w = {}
          , R = []
          , {continuousActionGroups: b} = a
          , {id: L} = a;
        GM(E, o) && (L = UM(t, L));
        let C = m.hasBoundaryNodes && n ? xn(n, Gr) : null;
        b.forEach(D => {
            let {keyframe: F, actionItems: M} = D;
            M.forEach(H => {
                let {actionTypeId: j} = H
                  , {target: Q} = H.config;
                if (!Q)
                    return;
                let J = Q.boundaryMode ? C : null
                  , ee = HM(Q) + oa + j;
                if (w[ee] = sF(w[ee], F, H),
                !T[ee]) {
                    T[ee] = !0;
                    let {config: X} = H;
                    Ur({
                        config: X,
                        event: g,
                        eventTarget: n,
                        elementRoot: J,
                        elementApi: Re
                    }).forEach(S => {
                        R.push({
                            element: S,
                            key: ee
                        })
                    }
                    )
                }
            }
            )
        }
        ),
        R.forEach( ({element: D, key: F}) => {
            let M = w[F]
              , H = (0,
            ct.default)(M, "[0].actionItems[0]", {})
              , {actionTypeId: j} = H
              , Q = Vr(j) ? sa(j)(D, H) : null
              , J = aa({
                element: D,
                actionItem: H,
                elementApi: Re
            }, Q);
            ua({
                store: e,
                element: D,
                eventId: r,
                actionListId: i,
                actionItem: H,
                destination: J,
                continuous: !0,
                parameterId: L,
                actionGroups: M,
                smoothing: u,
                restingValue: s,
                pluginInstance: Q
            })
        }
        )
    }
    function sF(e=[], t, n) {
        let r = [...e], o;
        return r.some( (i, a) => i.keyframe === t ? (o = a,
        !0) : !1),
        o == null && (o = r.length,
        r.push({
            keyframe: t,
            actionItems: []
        })),
        r[o].actionItems.push(n),
        r
    }
    function uF(e) {
        let {ixData: t} = e.getState()
          , {eventTypeMap: n} = t;
        hv(e),
        (0,
        en.default)(n, (o, i) => {
            let a = nv[i];
            if (!a) {
                console.warn(`IX2 event type not configured: ${i}`);
                return
            }
            gF({
                logic: a,
                store: e,
                events: o
            })
        }
        );
        let {ixSession: r} = e.getState();
        r.eventListeners.length && lF(e)
    }
    function lF(e) {
        let t = () => {
            hv(e)
        }
        ;
        cF.forEach(n => {
            window.addEventListener(n, t),
            e.dispatch(Sr(window, [n, t]))
        }
        ),
        t()
    }
    function hv(e) {
        let {ixSession: t, ixData: n} = e.getState()
          , r = window.innerWidth;
        if (r !== t.viewportWidth) {
            let {mediaQueries: o} = n;
            e.dispatch(Vo({
                width: r,
                mediaQueries: o
            }))
        }
    }
    function gF({logic: e, store: t, events: n}) {
        hF(n);
        let {types: r, handler: o} = e
          , {ixData: i} = t.getState()
          , {actionLists: a} = i
          , u = fF(n, pF);
        if (!(0,
        sv.default)(u))
            return;
        (0,
        en.default)(u, (v, g) => {
            let E = n[g]
              , {action: T, id: w, mediaQueries: R=i.mediaQueryKeys} = E
              , {actionListId: b} = T.config;
            BM(R, i.mediaQueryKeys) || t.dispatch(Ho()),
            T.actionTypeId === De.GENERAL_CONTINUOUS_ACTION && (Array.isArray(E.config) ? E.config : [E.config]).forEach(C => {
                let {continuousParameterGroupId: D} = C
                  , F = (0,
                ct.default)(a, `${b}.continuousParameterGroups`, [])
                  , M = (0,
                av.default)(F, ({id: Q}) => Q === D)
                  , H = (C.smoothing || 0) / 100
                  , j = (C.restingState || 0) / 100;
                M && v.forEach( (Q, J) => {
                    let ee = w + oa + J;
                    aF({
                        store: t,
                        eventStateKey: ee,
                        eventTarget: Q,
                        eventId: w,
                        eventConfig: C,
                        actionListId: b,
                        parameterGroup: M,
                        smoothing: H,
                        restingValue: j
                    })
                }
                )
            }
            ),
            (T.actionTypeId === De.GENERAL_START_ACTION || ia(T.actionTypeId)) && vv({
                store: t,
                actionListId: b,
                eventId: w
            })
        }
        );
        let s = v => {
            let {ixSession: g} = t.getState();
            dF(u, (E, T, w) => {
                let R = n[T]
                  , b = g.eventState[w]
                  , {action: L, mediaQueries: C=i.mediaQueryKeys} = R;
                if (!Wr(C, g.mediaQueryKey))
                    return;
                let D = (F={}) => {
                    let M = o({
                        store: t,
                        element: E,
                        event: R,
                        eventConfig: F,
                        nativeEvent: v,
                        eventStateKey: w
                    }, b);
                    zM(M, b) || t.dispatch(Xo(w, M))
                }
                ;
                L.actionTypeId === De.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(R.config) ? R.config : [R.config]).forEach(D) : D()
            }
            )
        }
          , f = (0,
        fv.default)(s, YM)
          , m = ({target: v=document, types: g, throttle: E}) => {
            g.split(" ").filter(Boolean).forEach(T => {
                let w = E ? f : s;
                v.addEventListener(T, w),
                t.dispatch(Sr(v, [T, w]))
            }
            )
        }
        ;
        Array.isArray(r) ? r.forEach(m) : typeof r == "string" && m(e)
    }
    function hF(e) {
        if (!jM)
            return;
        let t = {}
          , n = "";
        for (let r in e) {
            let {eventTypeId: o, target: i} = e[r]
              , a = zo(i);
            t[a] || (o === Be.MOUSE_CLICK || o === Be.MOUSE_SECOND_CLICK) && (t[a] = !0,
            n += a + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (n) {
            let r = document.createElement("style");
            r.textContent = n,
            document.body.appendChild(r)
        }
    }
    function vv({store: e, actionListId: t, eventId: n}) {
        let {ixData: r, ixSession: o} = e.getState()
          , {actionLists: i, events: a} = r
          , u = a[n]
          , s = i[t];
        if (s && s.useFirstGroupAsInitialState) {
            let f = (0,
            ct.default)(s, "actionItemGroups[0].actionItems", [])
              , m = (0,
            ct.default)(u, "mediaQueries", r.mediaQueryKeys);
            if (!Wr(m, o.mediaQueryKey))
                return;
            f.forEach(v => {
                let {config: g, actionTypeId: E} = v
                  , T = g?.target?.useEventTarget === !0 && g?.target?.objectId == null ? {
                    target: u.target,
                    targets: u.targets
                } : g
                  , w = Ur({
                    config: T,
                    event: u,
                    elementApi: Re
                })
                  , R = Vr(E);
                w.forEach(b => {
                    let L = R ? sa(E)(b, v) : null;
                    ua({
                        destination: aa({
                            element: b,
                            actionItem: v,
                            elementApi: Re
                        }, L),
                        immediate: !0,
                        store: e,
                        element: b,
                        eventId: n,
                        actionItem: v,
                        actionListId: t,
                        pluginInstance: L
                    })
                }
                )
            }
            )
        }
    }
    function Ev({store: e}) {
        let {ixInstances: t} = e.getState();
        (0,
        en.default)(t, n => {
            if (!n.continuous) {
                let {actionListId: r, verbose: o} = n;
                ca(n, e),
                o && e.dispatch(Zt({
                    actionListId: r,
                    isPlaying: !1
                }))
            }
        }
        )
    }
    function Jt({store: e, eventId: t, eventTarget: n, eventStateKey: r, actionListId: o}) {
        let {ixInstances: i, ixSession: a} = e.getState()
          , u = a.hasBoundaryNodes && n ? xn(n, Gr) : null;
        (0,
        en.default)(i, s => {
            let f = (0,
            ct.default)(s, "actionItem.config.target.boundaryMode")
              , m = r ? s.eventStateKey === r : !0;
            if (s.actionListId === o && s.eventId === t && m) {
                if (u && f && !Ko(u, s.element))
                    return;
                ca(s, e),
                s.verbose && e.dispatch(Zt({
                    actionListId: o,
                    isPlaying: !1
                }))
            }
        }
        )
    }
    function Ln({store: e, eventId: t, eventTarget: n, eventStateKey: r, actionListId: o, groupIndex: i=0, immediate: a, verbose: u}) {
        let {ixData: s, ixSession: f} = e.getState()
          , {events: m} = s
          , v = m[t] || {}
          , {mediaQueries: g=s.mediaQueryKeys} = v
          , E = (0,
        ct.default)(s, `actionLists.${o}`, {})
          , {actionItemGroups: T, useFirstGroupAsInitialState: w} = E;
        if (!T || !T.length)
            return !1;
        i >= T.length && (0,
        ct.default)(v, "config.loop") && (i = 0),
        i === 0 && w && i++;
        let b = (i === 0 || i === 1 && w) && ia(v.action?.actionTypeId) ? v.config.delay : void 0
          , L = (0,
        ct.default)(T, [i, "actionItems"], []);
        if (!L.length || !Wr(g, f.mediaQueryKey))
            return !1;
        let C = f.hasBoundaryNodes && n ? xn(n, Gr) : null
          , D = FM(L)
          , F = !1;
        return L.forEach( (M, H) => {
            let {config: j, actionTypeId: Q} = M
              , J = Vr(Q)
              , {target: ee} = j;
            if (!ee)
                return;
            let X = ee.boundaryMode ? C : null;
            Ur({
                config: j,
                event: v,
                eventTarget: n,
                elementRoot: X,
                elementApi: Re
            }).forEach( (q, B) => {
                let V = J ? sa(Q)(q, M) : null
                  , te = J ? KM(Q)(q, M) : null;
                F = !0;
                let ne = D === H && B === 0
                  , G = qM({
                    element: q,
                    actionItem: M
                })
                  , Y = aa({
                    element: q,
                    actionItem: M,
                    elementApi: Re
                }, V);
                ua({
                    store: e,
                    element: q,
                    actionItem: M,
                    eventId: t,
                    eventTarget: n,
                    eventStateKey: r,
                    actionListId: o,
                    groupIndex: i,
                    isCarrier: ne,
                    computedStyle: G,
                    destination: Y,
                    immediate: a,
                    verbose: u,
                    pluginInstance: V,
                    pluginDuration: te,
                    instanceDelay: b
                })
            }
            )
        }
        ),
        F
    }
    function ua(e) {
        let {store: t, computedStyle: n, ...r} = e, {element: o, actionItem: i, immediate: a, pluginInstance: u, continuous: s, restingValue: f, eventId: m} = r, v = !s, g = DM(), {ixElements: E, ixSession: T, ixData: w} = t.getState(), R = NM(E, o), {refState: b} = E[R] || {}, L = jo(o), C = T.reducedMotion && Ii[i.actionTypeId], D;
        if (C && s)
            switch (w.events[m]?.eventTypeId) {
            case Be.MOUSE_MOVE:
            case Be.MOUSE_MOVE_IN_VIEWPORT:
                D = f;
                break;
            default:
                D = .5;
                break
            }
        let F = kM(o, b, n, i, Re, u);
        if (t.dispatch(Go({
            instanceId: g,
            elementId: R,
            origin: F,
            refType: L,
            skipMotion: C,
            skipToValue: D,
            ...r
        })),
        mv(document.body, "ix2-animation-started", g),
        a) {
            vF(t, g);
            return
        }
        At({
            store: t,
            select: ({ixInstances: M}) => M[g],
            onChange: yv
        }),
        v && t.dispatch(Rr(g, T.tick))
    }
    function ca(e, t) {
        mv(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {elementId: n, actionItem: r} = e
          , {ixElements: o} = t.getState()
          , {ref: i, refType: a} = o[n] || {};
        a === dv && WM(i, r, Re),
        t.dispatch(Uo(e.id))
    }
    function mv(e, t, n) {
        let r = document.createEvent("CustomEvent");
        r.initCustomEvent(t, !0, !0, n),
        e.dispatchEvent(r)
    }
    function vF(e, t) {
        let {ixParameters: n} = e.getState();
        e.dispatch(Rr(t, 0)),
        e.dispatch(xr(performance.now(), n));
        let {ixInstances: r} = e.getState();
        yv(r[t], e)
    }
    function yv(e, t) {
        let {active: n, continuous: r, complete: o, elementId: i, actionItem: a, actionTypeId: u, renderType: s, current: f, groupIndex: m, eventId: v, eventTarget: g, eventStateKey: E, actionListId: T, isCarrier: w, styleProp: R, verbose: b, pluginInstance: L} = e
          , {ixData: C, ixSession: D} = t.getState()
          , {events: F} = C
          , M = F && F[v] ? F[v] : {}
          , {mediaQueries: H=C.mediaQueryKeys} = M;
        if (Wr(H, D.mediaQueryKey) && (r || n || o)) {
            if (f || s === LM && o) {
                t.dispatch(Wo(i, u, f, a));
                let {ixElements: j} = t.getState()
                  , {ref: Q, refType: J, refState: ee} = j[i] || {}
                  , X = ee && ee[u];
                (J === dv || Vr(u)) && MM(Q, ee, X, v, a, R, Re, s, L)
            }
            if (o) {
                if (w) {
                    let j = Ln({
                        store: t,
                        eventId: v,
                        eventTarget: g,
                        eventStateKey: E,
                        actionListId: T,
                        groupIndex: m + 1,
                        verbose: b
                    });
                    b && !j && t.dispatch(Zt({
                        actionListId: T,
                        isPlaying: !1
                    }))
                }
                ca(e, t)
            }
        }
    }
    var av, ct, sv, uv, cv, lv, en, fv, Xr, PM, ia, oa, Gr, dv, LM, iv, Ur, NM, aa, At, DM, MM, pv, FM, qM, kM, XM, GM, UM, Wr, WM, VM, HM, BM, zM, Vr, sa, KM, ov, jM, YM, cF, fF, dF, pF, ra = Ee( () => {
        "use strict";
        av = le(Qi()),
        ct = le(ur()),
        sv = le(Np()),
        uv = le(og()),
        cv = le(sg()),
        lv = le(cg()),
        en = le(hg()),
        fv = le(Tg());
        Me();
        Xr = le(wt());
        Cr();
        xg();
        rv();
        PM = Object.keys(Gn),
        ia = e => PM.includes(e),
        {COLON_DELIMITER: oa, BOUNDARY_SELECTOR: Gr, HTML_ELEMENT: dv, RENDER_GENERAL: LM, W_MOD_IX: iv} = Ae,
        {getAffectedElements: Ur, getElementId: NM, getDestinationValues: aa, observeStore: At, getInstanceId: DM, renderHTMLElement: MM, clearAllStyles: pv, getMaxDurationItemIndex: FM, getComputedStyle: qM, getInstanceOrigin: kM, reduceListToGroup: XM, shouldNamespaceEventParameter: GM, getNamespacedParameterId: UM, shouldAllowMediaQuery: Wr, cleanupHTMLElement: WM, clearObjectCache: VM, stringifyTarget: HM, mediaQueriesEqual: BM, shallowEqual: zM} = Xr.IX2VanillaUtils,
        {isPluginType: Vr, createPluginInstance: sa, getPluginDuration: KM} = Xr.IX2VanillaPlugins,
        ov = navigator.userAgent,
        jM = ov.match(/iPad/i) || ov.match(/iPhone/),
        YM = 12;
        cF = ["resize", "orientationchange"];
        fF = (e, t) => (0,
        uv.default)((0,
        lv.default)(e, t), cv.default),
        dF = (e, t) => {
            (0,
            en.default)(e, (n, r) => {
                n.forEach( (o, i) => {
                    let a = r + oa + i;
                    t(o, r, a)
                }
                )
            }
            )
        }
        ,
        pF = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return Ur({
                config: t,
                elementApi: Re
            })
        }
    }
    );
    var bv = d(fa => {
        "use strict";
        Object.defineProperty(fa, "__esModule", {
            value: !0
        });
        function EF(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        EF(fa, {
            actions: function() {
                return _F
            },
            destroy: function() {
                return Tv
            },
            init: function() {
                return wF
            },
            setEnv: function() {
                return bF
            },
            store: function() {
                return zr
            }
        });
        var mF = mi()
          , yF = IF((gp(),
        Qe(pp)))
          , la = (ra(),
        Qe(_v))
          , _F = TF((Cr(),
        Qe(wg)));
        function IF(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function Iv(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (Iv = function(r) {
                return r ? n : t
            }
            )(e)
        }
        function TF(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || typeof e != "object" && typeof e != "function")
                return {
                    default: e
                };
            var n = Iv(t);
            if (n && n.has(e))
                return n.get(e);
            var r = {
                __proto__: null
            }
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
                    var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i]
                }
            return r.default = e,
            n && n.set(e, r),
            r
        }
        var zr = (0,
        mF.createStore)(yF.default);
        function bF(e) {
            e() && (0,
            la.observeRequests)(zr)
        }
        function wF(e) {
            Tv(),
            (0,
            la.startEngine)({
                store: zr,
                rawData: e,
                allowEvents: !0
            })
        }
        function Tv() {
            (0,
            la.stopEngine)(zr)
        }
    }
    );
    var Sv = d( (xX, Ov) => {
        "use strict";
        var wv = Ne()
          , Av = bv();
        Av.setEnv(wv.env);
        wv.define("ix2", Ov.exports = function() {
            return Av
        }
        )
    }
    );
    var Rv = d( (RX, xv) => {
        "use strict";
        var tn = Ne();
        tn.define("links", xv.exports = function(e, t) {
            var n = {}, r = e(window), o, i = tn.env(), a = window.location, u = document.createElement("a"), s = "w--current", f = /index\.(html|php)$/, m = /\/$/, v, g;
            n.ready = n.design = n.preview = E;
            function E() {
                o = i && tn.env("design"),
                g = tn.env("slug") || a.pathname || "",
                tn.scroll.off(w),
                v = [];
                for (var b = document.links, L = 0; L < b.length; ++L)
                    T(b[L]);
                v.length && (tn.scroll.on(w),
                w())
            }
            function T(b) {
                if (!b.getAttribute("hreflang")) {
                    var L = o && b.getAttribute("href-disabled") || b.getAttribute("href");
                    if (u.href = L,
                    !(L.indexOf(":") >= 0)) {
                        var C = e(b);
                        if (u.hash.length > 1 && u.host + u.pathname === a.host + a.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(u.hash))
                                return;
                            var D = e(u.hash);
                            D.length && v.push({
                                link: C,
                                sec: D,
                                active: !1
                            });
                            return
                        }
                        if (!(L === "#" || L === "")) {
                            var F = u.href === a.href || L === g || f.test(L) && m.test(g);
                            R(C, s, F)
                        }
                    }
                }
            }
            function w() {
                var b = r.scrollTop()
                  , L = r.height();
                t.each(v, function(C) {
                    if (!C.link.attr("hreflang")) {
                        var D = C.link
                          , F = C.sec
                          , M = F.offset().top
                          , H = F.outerHeight()
                          , j = L * .5
                          , Q = F.is(":visible") && M + H - j >= b && M + j <= b + L;
                        C.active !== Q && (C.active = Q,
                        R(D, s, Q))
                    }
                })
            }
            function R(b, L, C) {
                var D = b.hasClass(L);
                C && D || !C && !D || (C ? b.addClass(L) : b.removeClass(L))
            }
            return n
        }
        )
    }
    );
    var Pv = d( (CX, Cv) => {
        "use strict";
        var Kr = Ne();
        Kr.define("scroll", Cv.exports = function(e) {
            var t = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            }
              , n = window.location
              , r = T() ? null : window.history
              , o = e(window)
              , i = e(document)
              , a = e(document.body)
              , u = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(X) {
                window.setTimeout(X, 15)
            }
              , s = Kr.env("editor") ? ".w-editor-body" : "body"
              , f = "header, " + s + " > .header, " + s + " > .w-nav:not([data-no-scroll])"
              , m = 'a[href="#"]'
              , v = 'a[href*="#"]:not(.w-tab-link):not(' + m + ")"
              , g = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
              , E = document.createElement("style");
            E.appendChild(document.createTextNode(g));
            function T() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var w = /^#[a-zA-Z0-9][\w:.-]*$/;
            function R(X) {
                return w.test(X.hash) && X.host + X.pathname === n.host + n.pathname
            }
            let b = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
            function L() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || b.matches
            }
            function C(X, S) {
                var q;
                switch (S) {
                case "add":
                    q = X.attr("tabindex"),
                    q ? X.attr("data-wf-tabindex-swap", q) : X.attr("tabindex", "-1");
                    break;
                case "remove":
                    q = X.attr("data-wf-tabindex-swap"),
                    q ? (X.attr("tabindex", q),
                    X.removeAttr("data-wf-tabindex-swap")) : X.removeAttr("tabindex");
                    break
                }
                X.toggleClass("wf-force-outline-none", S === "add")
            }
            function D(X) {
                var S = X.currentTarget;
                if (!(Kr.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(S.className))) {
                    var q = R(S) ? S.hash : "";
                    if (q !== "") {
                        var B = e(q);
                        B.length && (X && (X.preventDefault(),
                        X.stopPropagation()),
                        F(q, X),
                        window.setTimeout(function() {
                            M(B, function() {
                                C(B, "add"),
                                B.get(0).focus({
                                    preventScroll: !0
                                }),
                                C(B, "remove")
                            })
                        }, X ? 0 : 300))
                    }
                }
            }
            function F(X) {
                if (n.hash !== X && r && r.pushState && !(Kr.env.chrome && n.protocol === "file:")) {
                    var S = r.state && r.state.hash;
                    S !== X && r.pushState({
                        hash: X
                    }, "", X)
                }
            }
            function M(X, S) {
                var q = o.scrollTop()
                  , B = H(X);
                if (q !== B) {
                    var V = j(X, q, B)
                      , te = Date.now()
                      , ne = function() {
                        var G = Date.now() - te;
                        window.scroll(0, Q(q, B, G, V)),
                        G <= V ? u(ne) : typeof S == "function" && S()
                    };
                    u(ne)
                }
            }
            function H(X) {
                var S = e(f)
                  , q = S.css("position") === "fixed" ? S.outerHeight() : 0
                  , B = X.offset().top - q;
                if (X.data("scroll") === "mid") {
                    var V = o.height() - q
                      , te = X.outerHeight();
                    te < V && (B -= Math.round((V - te) / 2))
                }
                return B
            }
            function j(X, S, q) {
                if (L())
                    return 0;
                var B = 1;
                return a.add(X).each(function(V, te) {
                    var ne = parseFloat(te.getAttribute("data-scroll-time"));
                    !isNaN(ne) && ne >= 0 && (B = ne)
                }),
                (472.143 * Math.log(Math.abs(S - q) + 125) - 2e3) * B
            }
            function Q(X, S, q, B) {
                return q > B ? S : X + (S - X) * J(q / B)
            }
            function J(X) {
                return X < .5 ? 4 * X * X * X : (X - 1) * (2 * X - 2) * (2 * X - 2) + 1
            }
            function ee() {
                var {WF_CLICK_EMPTY: X, WF_CLICK_SCROLL: S} = t;
                i.on(S, v, D),
                i.on(X, m, function(q) {
                    q.preventDefault()
                }),
                document.head.insertBefore(E, document.head.firstChild)
            }
            return {
                ready: ee
            }
        }
        )
    }
    );
    var Nv = d( (PX, Lv) => {
        "use strict";
        var AF = Ne();
        AF.define("touch", Lv.exports = function(e) {
            var t = {}
              , n = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            },
            t.init = function(i) {
                return i = typeof i == "string" ? e(i).get(0) : i,
                i ? new r(i) : null
            }
            ;
            function r(i) {
                var a = !1, u = !1, s = Math.min(Math.round(window.innerWidth * .04), 40), f, m;
                i.addEventListener("touchstart", v, !1),
                i.addEventListener("touchmove", g, !1),
                i.addEventListener("touchend", E, !1),
                i.addEventListener("touchcancel", T, !1),
                i.addEventListener("mousedown", v, !1),
                i.addEventListener("mousemove", g, !1),
                i.addEventListener("mouseup", E, !1),
                i.addEventListener("mouseout", T, !1);
                function v(R) {
                    var b = R.touches;
                    b && b.length > 1 || (a = !0,
                    b ? (u = !0,
                    f = b[0].clientX) : f = R.clientX,
                    m = f)
                }
                function g(R) {
                    if (a) {
                        if (u && R.type === "mousemove") {
                            R.preventDefault(),
                            R.stopPropagation();
                            return
                        }
                        var b = R.touches
                          , L = b ? b[0].clientX : R.clientX
                          , C = L - m;
                        m = L,
                        Math.abs(C) > s && n && String(n()) === "" && (o("swipe", R, {
                            direction: C > 0 ? "right" : "left"
                        }),
                        T())
                    }
                }
                function E(R) {
                    if (a && (a = !1,
                    u && R.type === "mouseup")) {
                        R.preventDefault(),
                        R.stopPropagation(),
                        u = !1;
                        return
                    }
                }
                function T() {
                    a = !1
                }
                function w() {
                    i.removeEventListener("touchstart", v, !1),
                    i.removeEventListener("touchmove", g, !1),
                    i.removeEventListener("touchend", E, !1),
                    i.removeEventListener("touchcancel", T, !1),
                    i.removeEventListener("mousedown", v, !1),
                    i.removeEventListener("mousemove", g, !1),
                    i.removeEventListener("mouseup", E, !1),
                    i.removeEventListener("mouseout", T, !1),
                    i = null
                }
                this.destroy = w
            }
            function o(i, a, u) {
                var s = e.Event(i, {
                    originalEvent: a
                });
                e(a.target).trigger(s, u)
            }
            return t.instance = t.init(document),
            t
        }
        )
    }
    );
    var Fv = d( (LX, Mv) => {
        "use strict";
        var Ot = Ne()
          , OF = rn()
          , je = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        }
          , Dv = !0
          , SF = /^#[a-zA-Z0-9\-_]+$/;
        Ot.define("dropdown", Mv.exports = function(e, t) {
            var n = t.debounce, r = {}, o = Ot.env(), i = !1, a, u = Ot.env.touch, s = ".w-dropdown", f = "w--open", m = OF.triggers, v = 900, g = "focusout" + s, E = "keydown" + s, T = "mouseenter" + s, w = "mousemove" + s, R = "mouseleave" + s, b = (u ? "click" : "mouseup") + s, L = "w-close" + s, C = "setting" + s, D = e(document), F;
            r.ready = M,
            r.design = function() {
                i && S(),
                i = !1,
                M()
            }
            ,
            r.preview = function() {
                i = !0,
                M()
            }
            ;
            function M() {
                a = o && Ot.env("design"),
                F = D.find(s),
                F.each(H)
            }
            function H(c, k) {
                var U = e(k)
                  , x = e.data(k, s);
                x || (x = e.data(k, s, {
                    open: !1,
                    el: U,
                    config: {},
                    selectedIdx: -1
                })),
                x.toggle = x.el.children(".w-dropdown-toggle"),
                x.list = x.el.children(".w-dropdown-list"),
                x.links = x.list.find("a:not(.w-dropdown .w-dropdown a)"),
                x.complete = V(x),
                x.mouseLeave = ne(x),
                x.mouseUpOutside = B(x),
                x.mouseMoveOutside = G(x),
                j(x);
                var ie = x.toggle.attr("id")
                  , fe = x.list.attr("id");
                ie || (ie = "w-dropdown-toggle-" + c),
                fe || (fe = "w-dropdown-list-" + c),
                x.toggle.attr("id", ie),
                x.toggle.attr("aria-controls", fe),
                x.toggle.attr("aria-haspopup", "menu"),
                x.toggle.attr("aria-expanded", "false"),
                x.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"),
                x.toggle.prop("tagName") !== "BUTTON" && (x.toggle.attr("role", "button"),
                x.toggle.attr("tabindex") || x.toggle.attr("tabindex", "0")),
                x.list.attr("id", fe),
                x.list.attr("aria-labelledby", ie),
                x.links.each(function(h, W) {
                    W.hasAttribute("tabindex") || W.setAttribute("tabindex", "0"),
                    SF.test(W.hash) && W.addEventListener("click", X.bind(null, x))
                }),
                x.el.off(s),
                x.toggle.off(s),
                x.nav && x.nav.off(s);
                var oe = J(x, Dv);
                a && x.el.on(C, Q(x)),
                a || (o && (x.hovering = !1,
                X(x)),
                x.config.hover && x.toggle.on(T, te(x)),
                x.el.on(L, oe),
                x.el.on(E, Y(x)),
                x.el.on(g, _(x)),
                x.toggle.on(b, oe),
                x.toggle.on(E, y(x)),
                x.nav = x.el.closest(".w-nav"),
                x.nav.on(L, oe))
            }
            function j(c) {
                var k = Number(c.el.css("z-index"));
                c.manageZ = k === v || k === v + 1,
                c.config = {
                    hover: c.el.attr("data-hover") === "true" && !u,
                    delay: c.el.attr("data-delay")
                }
            }
            function Q(c) {
                return function(k, U) {
                    U = U || {},
                    j(c),
                    U.open === !0 && ee(c, !0),
                    U.open === !1 && X(c, {
                        immediate: !0
                    })
                }
            }
            function J(c, k) {
                return n(function(U) {
                    if (c.open || U && U.type === "w-close")
                        return X(c, {
                            forceClose: k
                        });
                    ee(c)
                })
            }
            function ee(c) {
                if (!c.open) {
                    q(c),
                    c.open = !0,
                    c.list.addClass(f),
                    c.toggle.addClass(f),
                    c.toggle.attr("aria-expanded", "true"),
                    m.intro(0, c.el[0]),
                    Ot.redraw.up(),
                    c.manageZ && c.el.css("z-index", v + 1);
                    var k = Ot.env("editor");
                    a || D.on(b, c.mouseUpOutside),
                    c.hovering && !k && c.el.on(R, c.mouseLeave),
                    c.hovering && k && D.on(w, c.mouseMoveOutside),
                    window.clearTimeout(c.delayId)
                }
            }
            function X(c, {immediate: k, forceClose: U}={}) {
                if (c.open && !(c.config.hover && c.hovering && !U)) {
                    c.toggle.attr("aria-expanded", "false"),
                    c.open = !1;
                    var x = c.config;
                    if (m.outro(0, c.el[0]),
                    D.off(b, c.mouseUpOutside),
                    D.off(w, c.mouseMoveOutside),
                    c.el.off(R, c.mouseLeave),
                    window.clearTimeout(c.delayId),
                    !x.delay || k)
                        return c.complete();
                    c.delayId = window.setTimeout(c.complete, x.delay)
                }
            }
            function S() {
                D.find(s).each(function(c, k) {
                    e(k).triggerHandler(L)
                })
            }
            function q(c) {
                var k = c.el[0];
                F.each(function(U, x) {
                    var ie = e(x);
                    ie.is(k) || ie.has(k).length || ie.triggerHandler(L)
                })
            }
            function B(c) {
                return c.mouseUpOutside && D.off(b, c.mouseUpOutside),
                n(function(k) {
                    if (c.open) {
                        var U = e(k.target);
                        if (!U.closest(".w-dropdown-toggle").length) {
                            var x = e.inArray(c.el[0], U.parents(s)) === -1
                              , ie = Ot.env("editor");
                            if (x) {
                                if (ie) {
                                    var fe = U.parents().length === 1 && U.parents("svg").length === 1
                                      , oe = U.parents(".w-editor-bem-EditorHoverControls").length;
                                    if (fe || oe)
                                        return
                                }
                                X(c)
                            }
                        }
                    }
                })
            }
            function V(c) {
                return function() {
                    c.list.removeClass(f),
                    c.toggle.removeClass(f),
                    c.manageZ && c.el.css("z-index", "")
                }
            }
            function te(c) {
                return function() {
                    c.hovering = !0,
                    ee(c)
                }
            }
            function ne(c) {
                return function() {
                    c.hovering = !1,
                    c.links.is(":focus") || X(c)
                }
            }
            function G(c) {
                return n(function(k) {
                    if (c.open) {
                        var U = e(k.target)
                          , x = e.inArray(c.el[0], U.parents(s)) === -1;
                        if (x) {
                            var ie = U.parents(".w-editor-bem-EditorHoverControls").length
                              , fe = U.parents(".w-editor-bem-RTToolbar").length
                              , oe = e(".w-editor-bem-EditorOverlay")
                              , h = oe.find(".w-editor-edit-outline").length || oe.find(".w-editor-bem-RTToolbar").length;
                            if (ie || fe || h)
                                return;
                            c.hovering = !1,
                            X(c)
                        }
                    }
                })
            }
            function Y(c) {
                return function(k) {
                    if (!(a || !c.open))
                        switch (c.selectedIdx = c.links.index(document.activeElement),
                        k.keyCode) {
                        case je.HOME:
                            return c.open ? (c.selectedIdx = 0,
                            p(c),
                            k.preventDefault()) : void 0;
                        case je.END:
                            return c.open ? (c.selectedIdx = c.links.length - 1,
                            p(c),
                            k.preventDefault()) : void 0;
                        case je.ESCAPE:
                            return X(c),
                            c.toggle.focus(),
                            k.stopPropagation();
                        case je.ARROW_RIGHT:
                        case je.ARROW_DOWN:
                            return c.selectedIdx = Math.min(c.links.length - 1, c.selectedIdx + 1),
                            p(c),
                            k.preventDefault();
                        case je.ARROW_LEFT:
                        case je.ARROW_UP:
                            return c.selectedIdx = Math.max(-1, c.selectedIdx - 1),
                            p(c),
                            k.preventDefault()
                        }
                }
            }
            function p(c) {
                c.links[c.selectedIdx] && c.links[c.selectedIdx].focus()
            }
            function y(c) {
                var k = J(c, Dv);
                return function(U) {
                    if (!a) {
                        if (!c.open)
                            switch (U.keyCode) {
                            case je.ARROW_UP:
                            case je.ARROW_DOWN:
                                return U.stopPropagation()
                            }
                        switch (U.keyCode) {
                        case je.SPACE:
                        case je.ENTER:
                            return k(),
                            U.stopPropagation(),
                            U.preventDefault()
                        }
                    }
                }
            }
            function _(c) {
                return n(function(k) {
                    var {relatedTarget: U, target: x} = k
                      , ie = c.el[0]
                      , fe = ie.contains(U) || ie.contains(x);
                    return fe || X(c),
                    k.stopPropagation()
                })
            }
            return r
        }
        )
    }
    );
    var qv = d(da => {
        "use strict";
        Object.defineProperty(da, "__esModule", {
            value: !0
        });
        Object.defineProperty(da, "default", {
            enumerable: !0,
            get: function() {
                return xF
            }
        });
        function xF(e, t, n, r, o, i, a, u, s, f, m, v, g) {
            return function(E) {
                e(E);
                var T = E.form
                  , w = {
                    name: T.attr("data-name") || T.attr("name") || "Untitled Form",
                    pageId: T.attr("data-wf-page-id") || "",
                    elementId: T.attr("data-wf-element-id") || "",
                    source: t.href,
                    test: n.env(),
                    fields: {},
                    fileUploads: {},
                    dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(T.html()),
                    trackingCookies: r()
                };
                let R = T.attr("data-wf-flow");
                R && (w.wfFlow = R),
                o(E);
                var b = i(T, w.fields);
                if (b)
                    return a(b);
                if (w.fileUploads = u(T),
                s(E),
                !f) {
                    m(E);
                    return
                }
                v.ajax({
                    url: g,
                    type: "POST",
                    data: w,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(L) {
                    L && L.code === 200 && (E.success = !0),
                    m(E)
                }).fail(function() {
                    m(E)
                })
            }
        }
    }
    );
    var Xv = d( (DX, kv) => {
        "use strict";
        var jr = Ne();
        jr.define("forms", kv.exports = function(e, t) {
            var n = {}, r = e(document), o, i = window.location, a = window.XDomainRequest && !window.atob, u = ".w-form", s, f = /e(-)?mail/i, m = /^\S+@\S+$/, v = window.alert, g = jr.env(), E, T, w, R = /list-manage[1-9]?.com/i, b = t.debounce(function() {
                v("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);
            n.ready = n.design = n.preview = function() {
                L(),
                !g && !E && D()
            }
            ;
            function L() {
                s = e("html").attr("data-wf-site"),
                T = "https://webflow.com/api/v1/form/" + s,
                a && T.indexOf("https://webflow.com") >= 0 && (T = T.replace("https://webflow.com", "https://formdata.webflow.com")),
                w = `${T}/signFile`,
                o = e(u + " form"),
                o.length && o.each(C)
            }
            function C(G, Y) {
                var p = e(Y)
                  , y = e.data(Y, u);
                y || (y = e.data(Y, u, {
                    form: p
                })),
                F(y);
                var _ = p.closest("div.w-form");
                y.done = _.find("> .w-form-done"),
                y.fail = _.find("> .w-form-fail"),
                y.fileUploads = _.find(".w-file-upload"),
                y.fileUploads.each(function(U) {
                    V(U, y)
                });
                var c = y.form.attr("aria-label") || y.form.attr("data-name") || "Form";
                y.done.attr("aria-label") || y.form.attr("aria-label", c),
                y.done.attr("tabindex", "-1"),
                y.done.attr("role", "region"),
                y.done.attr("aria-label") || y.done.attr("aria-label", c + " success"),
                y.fail.attr("tabindex", "-1"),
                y.fail.attr("role", "region"),
                y.fail.attr("aria-label") || y.fail.attr("aria-label", c + " failure");
                var k = y.action = p.attr("action");
                if (y.handler = null,
                y.redirect = p.attr("data-redirect"),
                R.test(k)) {
                    y.handler = S;
                    return
                }
                if (!k) {
                    if (s) {
                        y.handler = ( () => {
                            let U = qv().default;
                            return U(F, i, jr, J, B, H, v, j, M, s, q, e, T)
                        }
                        )();
                        return
                    }
                    b()
                }
            }
            function D() {
                E = !0,
                r.on("submit", u + " form", function(U) {
                    var x = e.data(this, u);
                    x.handler && (x.evt = U,
                    x.handler(x))
                });
                let G = ".w-checkbox-input"
                  , Y = ".w-radio-input"
                  , p = "w--redirected-checked"
                  , y = "w--redirected-focus"
                  , _ = "w--redirected-focus-visible"
                  , c = ":focus-visible, [data-wf-focus-visible]"
                  , k = [["checkbox", G], ["radio", Y]];
                r.on("change", u + ' form input[type="checkbox"]:not(' + G + ")", U => {
                    e(U.target).siblings(G).toggleClass(p)
                }
                ),
                r.on("change", u + ' form input[type="radio"]', U => {
                    e(`input[name="${U.target.name}"]:not(${G})`).map( (ie, fe) => e(fe).siblings(Y).removeClass(p));
                    let x = e(U.target);
                    x.hasClass("w-radio-input") || x.siblings(Y).addClass(p)
                }
                ),
                k.forEach( ([U,x]) => {
                    r.on("focus", u + ` form input[type="${U}"]:not(` + x + ")", ie => {
                        e(ie.target).siblings(x).addClass(y),
                        e(ie.target).filter(c).siblings(x).addClass(_)
                    }
                    ),
                    r.on("blur", u + ` form input[type="${U}"]:not(` + x + ")", ie => {
                        e(ie.target).siblings(x).removeClass(`${y} ${_}`)
                    }
                    )
                }
                )
            }
            function F(G) {
                var Y = G.btn = G.form.find(':input[type="submit"]');
                G.wait = G.btn.attr("data-wait") || null,
                G.success = !1,
                Y.prop("disabled", !1),
                G.label && Y.val(G.label)
            }
            function M(G) {
                var Y = G.btn
                  , p = G.wait;
                Y.prop("disabled", !0),
                p && (G.label = Y.val(),
                Y.val(p))
            }
            function H(G, Y) {
                var p = null;
                return Y = Y || {},
                G.find(':input:not([type="submit"]):not([type="file"])').each(function(y, _) {
                    var c = e(_)
                      , k = c.attr("type")
                      , U = c.attr("data-name") || c.attr("name") || "Field " + (y + 1);
                    U = encodeURIComponent(U);
                    var x = c.val();
                    if (k === "checkbox")
                        x = c.is(":checked");
                    else if (k === "radio") {
                        if (Y[U] === null || typeof Y[U] == "string")
                            return;
                        x = G.find('input[name="' + c.attr("name") + '"]:checked').val() || null
                    }
                    typeof x == "string" && (x = e.trim(x)),
                    Y[U] = x,
                    p = p || ee(c, k, U, x)
                }),
                p
            }
            function j(G) {
                var Y = {};
                return G.find(':input[type="file"]').each(function(p, y) {
                    var _ = e(y)
                      , c = _.attr("data-name") || _.attr("name") || "File " + (p + 1)
                      , k = _.attr("data-value");
                    typeof k == "string" && (k = e.trim(k)),
                    Y[c] = k
                }),
                Y
            }
            let Q = {
                _mkto_trk: "marketo"
            };
            function J() {
                return document.cookie.split("; ").reduce(function(Y, p) {
                    let y = p.split("=")
                      , _ = y[0];
                    if (_ in Q) {
                        let c = Q[_]
                          , k = y.slice(1).join("=");
                        Y[c] = k
                    }
                    return Y
                }, {})
            }
            function ee(G, Y, p, y) {
                var _ = null;
                return Y === "password" ? _ = "Passwords cannot be submitted." : G.attr("required") ? y ? f.test(G.attr("type")) && (m.test(y) || (_ = "Please enter a valid email address for: " + p)) : _ = "Please fill out the required field: " + p : p === "g-recaptcha-response" && !y && (_ = "Please confirm you\u2019re not a robot."),
                _
            }
            function X(G) {
                B(G),
                q(G)
            }
            function S(G) {
                F(G);
                var Y = G.form
                  , p = {};
                if (/^https/.test(i.href) && !/^https/.test(G.action)) {
                    Y.attr("method", "post");
                    return
                }
                B(G);
                var y = H(Y, p);
                if (y)
                    return v(y);
                M(G);
                var _;
                t.each(p, function(x, ie) {
                    f.test(ie) && (p.EMAIL = x),
                    /^((full[ _-]?)?name)$/i.test(ie) && (_ = x),
                    /^(first[ _-]?name)$/i.test(ie) && (p.FNAME = x),
                    /^(last[ _-]?name)$/i.test(ie) && (p.LNAME = x)
                }),
                _ && !p.FNAME && (_ = _.split(" "),
                p.FNAME = _[0],
                p.LNAME = p.LNAME || _[1]);
                var c = G.action.replace("/post?", "/post-json?") + "&c=?"
                  , k = c.indexOf("u=") + 2;
                k = c.substring(k, c.indexOf("&", k));
                var U = c.indexOf("id=") + 3;
                U = c.substring(U, c.indexOf("&", U)),
                p["b_" + k + "_" + U] = "",
                e.ajax({
                    url: c,
                    data: p,
                    dataType: "jsonp"
                }).done(function(x) {
                    G.success = x.result === "success" || /already/.test(x.msg),
                    G.success || console.info("MailChimp error: " + x.msg),
                    q(G)
                }).fail(function() {
                    q(G)
                })
            }
            function q(G) {
                var Y = G.form
                  , p = G.redirect
                  , y = G.success;
                if (y && p) {
                    jr.location(p);
                    return
                }
                G.done.toggle(y),
                G.fail.toggle(!y),
                y ? G.done.focus() : G.fail.focus(),
                Y.toggle(!y),
                F(G)
            }
            function B(G) {
                G.evt && G.evt.preventDefault(),
                G.evt = null
            }
            function V(G, Y) {
                if (!Y.fileUploads || !Y.fileUploads[G])
                    return;
                var p, y = e(Y.fileUploads[G]), _ = y.find("> .w-file-upload-default"), c = y.find("> .w-file-upload-uploading"), k = y.find("> .w-file-upload-success"), U = y.find("> .w-file-upload-error"), x = _.find(".w-file-upload-input"), ie = _.find(".w-file-upload-label"), fe = ie.children(), oe = U.find(".w-file-upload-error-msg"), h = k.find(".w-file-upload-file"), W = k.find(".w-file-remove-link"), $ = h.find(".w-file-upload-file-name"), z = oe.attr("data-w-size-error"), de = oe.attr("data-w-type-error"), Ce = oe.attr("data-w-generic-error");
                if (g || ie.on("click keydown", function(A) {
                    A.type === "keydown" && A.which !== 13 && A.which !== 32 || (A.preventDefault(),
                    x.click())
                }),
                ie.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
                W.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
                g)
                    x.on("click", function(A) {
                        A.preventDefault()
                    }),
                    ie.on("click", function(A) {
                        A.preventDefault()
                    }),
                    fe.on("click", function(A) {
                        A.preventDefault()
                    });
                else {
                    W.on("click keydown", function(A) {
                        if (A.type === "keydown") {
                            if (A.which !== 13 && A.which !== 32)
                                return;
                            A.preventDefault()
                        }
                        x.removeAttr("data-value"),
                        x.val(""),
                        $.html(""),
                        _.toggle(!0),
                        k.toggle(!1),
                        ie.focus()
                    }),
                    x.on("change", function(A) {
                        p = A.target && A.target.files && A.target.files[0],
                        p && (_.toggle(!1),
                        U.toggle(!1),
                        c.toggle(!0),
                        c.focus(),
                        $.text(p.name),
                        P() || M(Y),
                        Y.fileUploads[G].uploading = !0,
                        te(p, I))
                    });
                    var Xe = ie.outerHeight();
                    x.height(Xe),
                    x.width(1)
                }
                function l(A) {
                    var N = A.responseJSON && A.responseJSON.msg
                      , Z = Ce;
                    typeof N == "string" && N.indexOf("InvalidFileTypeError") === 0 ? Z = de : typeof N == "string" && N.indexOf("MaxFileSizeError") === 0 && (Z = z),
                    oe.text(Z),
                    x.removeAttr("data-value"),
                    x.val(""),
                    c.toggle(!1),
                    _.toggle(!0),
                    U.toggle(!0),
                    U.focus(),
                    Y.fileUploads[G].uploading = !1,
                    P() || F(Y)
                }
                function I(A, N) {
                    if (A)
                        return l(A);
                    var Z = N.fileName
                      , ae = N.postData
                      , he = N.fileId
                      , K = N.s3Url;
                    x.attr("data-value", he),
                    ne(K, ae, p, Z, O)
                }
                function O(A) {
                    if (A)
                        return l(A);
                    c.toggle(!1),
                    k.css("display", "inline-block"),
                    k.focus(),
                    Y.fileUploads[G].uploading = !1,
                    P() || F(Y)
                }
                function P() {
                    var A = Y.fileUploads && Y.fileUploads.toArray() || [];
                    return A.some(function(N) {
                        return N.uploading
                    })
                }
            }
            function te(G, Y) {
                var p = new URLSearchParams({
                    name: G.name,
                    size: G.size
                });
                e.ajax({
                    type: "GET",
                    url: `${w}?${p}`,
                    crossDomain: !0
                }).done(function(y) {
                    Y(null, y)
                }).fail(function(y) {
                    Y(y)
                })
            }
            function ne(G, Y, p, y, _) {
                var c = new FormData;
                for (var k in Y)
                    c.append(k, Y[k]);
                c.append("file", p, y),
                e.ajax({
                    type: "POST",
                    url: G,
                    data: c,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    _(null)
                }).fail(function(U) {
                    _(U)
                })
            }
            return n
        }
        )
    }
    );
    var Uv = d( (MX, Gv) => {
        "use strict";
        var vt = Ne()
          , RF = rn()
          , we = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        };
        vt.define("navbar", Gv.exports = function(e, t) {
            var n = {}, r = e.tram, o = e(window), i = e(document), a = t.debounce, u, s, f, m, v = vt.env(), g = '<div class="w-nav-overlay" data-wf-ignore />', E = ".w-nav", T = "w--open", w = "w--nav-dropdown-open", R = "w--nav-dropdown-toggle-open", b = "w--nav-dropdown-list-open", L = "w--nav-link-open", C = RF.triggers, D = e();
            n.ready = n.design = n.preview = F,
            n.destroy = function() {
                D = e(),
                M(),
                s && s.length && s.each(J)
            }
            ;
            function F() {
                f = v && vt.env("design"),
                m = vt.env("editor"),
                u = e(document.body),
                s = i.find(E),
                s.length && (s.each(Q),
                M(),
                H())
            }
            function M() {
                vt.resize.off(j)
            }
            function H() {
                vt.resize.on(j)
            }
            function j() {
                s.each(_)
            }
            function Q(h, W) {
                var $ = e(W)
                  , z = e.data(W, E);
                z || (z = e.data(W, E, {
                    open: !1,
                    el: $,
                    config: {},
                    selectedIdx: -1
                })),
                z.menu = $.find(".w-nav-menu"),
                z.links = z.menu.find(".w-nav-link"),
                z.dropdowns = z.menu.find(".w-dropdown"),
                z.dropdownToggle = z.menu.find(".w-dropdown-toggle"),
                z.dropdownList = z.menu.find(".w-dropdown-list"),
                z.button = $.find(".w-nav-button"),
                z.container = $.find(".w-container"),
                z.overlayContainerId = "w-nav-overlay-" + h,
                z.outside = p(z);
                var de = $.find(".w-nav-brand");
                de && de.attr("href") === "/" && de.attr("aria-label") == null && de.attr("aria-label", "home"),
                z.button.attr("style", "-webkit-user-select: text;"),
                z.button.attr("aria-label") == null && z.button.attr("aria-label", "menu"),
                z.button.attr("role", "button"),
                z.button.attr("tabindex", "0"),
                z.button.attr("aria-controls", z.overlayContainerId),
                z.button.attr("aria-haspopup", "menu"),
                z.button.attr("aria-expanded", "false"),
                z.el.off(E),
                z.button.off(E),
                z.menu.off(E),
                S(z),
                f ? (ee(z),
                z.el.on("setting" + E, q(z))) : (X(z),
                z.button.on("click" + E, G(z)),
                z.menu.on("click" + E, "a", Y(z)),
                z.button.on("keydown" + E, B(z)),
                z.el.on("keydown" + E, V(z))),
                _(h, W)
            }
            function J(h, W) {
                var $ = e.data(W, E);
                $ && (ee($),
                e.removeData(W, E))
            }
            function ee(h) {
                h.overlay && (oe(h, !0),
                h.overlay.remove(),
                h.overlay = null)
            }
            function X(h) {
                h.overlay || (h.overlay = e(g).appendTo(h.el),
                h.overlay.attr("id", h.overlayContainerId),
                h.parent = h.menu.parent(),
                oe(h, !0))
            }
            function S(h) {
                var W = {}
                  , $ = h.config || {}
                  , z = W.animation = h.el.attr("data-animation") || "default";
                W.animOver = /^over/.test(z),
                W.animDirect = /left$/.test(z) ? -1 : 1,
                $.animation !== z && h.open && t.defer(ne, h),
                W.easing = h.el.attr("data-easing") || "ease",
                W.easing2 = h.el.attr("data-easing2") || "ease";
                var de = h.el.attr("data-duration");
                W.duration = de != null ? Number(de) : 400,
                W.docHeight = h.el.attr("data-doc-height"),
                h.config = W
            }
            function q(h) {
                return function(W, $) {
                    $ = $ || {};
                    var z = o.width();
                    S(h),
                    $.open === !0 && ie(h, !0),
                    $.open === !1 && oe(h, !0),
                    h.open && t.defer(function() {
                        z !== o.width() && ne(h)
                    })
                }
            }
            function B(h) {
                return function(W) {
                    switch (W.keyCode) {
                    case we.SPACE:
                    case we.ENTER:
                        return G(h)(),
                        W.preventDefault(),
                        W.stopPropagation();
                    case we.ESCAPE:
                        return oe(h),
                        W.preventDefault(),
                        W.stopPropagation();
                    case we.ARROW_RIGHT:
                    case we.ARROW_DOWN:
                    case we.HOME:
                    case we.END:
                        return h.open ? (W.keyCode === we.END ? h.selectedIdx = h.links.length - 1 : h.selectedIdx = 0,
                        te(h),
                        W.preventDefault(),
                        W.stopPropagation()) : (W.preventDefault(),
                        W.stopPropagation())
                    }
                }
            }
            function V(h) {
                return function(W) {
                    if (h.open)
                        switch (h.selectedIdx = h.links.index(document.activeElement),
                        W.keyCode) {
                        case we.HOME:
                        case we.END:
                            return W.keyCode === we.END ? h.selectedIdx = h.links.length - 1 : h.selectedIdx = 0,
                            te(h),
                            W.preventDefault(),
                            W.stopPropagation();
                        case we.ESCAPE:
                            return oe(h),
                            h.button.focus(),
                            W.preventDefault(),
                            W.stopPropagation();
                        case we.ARROW_LEFT:
                        case we.ARROW_UP:
                            return h.selectedIdx = Math.max(-1, h.selectedIdx - 1),
                            te(h),
                            W.preventDefault(),
                            W.stopPropagation();
                        case we.ARROW_RIGHT:
                        case we.ARROW_DOWN:
                            return h.selectedIdx = Math.min(h.links.length - 1, h.selectedIdx + 1),
                            te(h),
                            W.preventDefault(),
                            W.stopPropagation()
                        }
                }
            }
            function te(h) {
                if (h.links[h.selectedIdx]) {
                    var W = h.links[h.selectedIdx];
                    W.focus(),
                    Y(W)
                }
            }
            function ne(h) {
                h.open && (oe(h, !0),
                ie(h, !0))
            }
            function G(h) {
                return a(function() {
                    h.open ? oe(h) : ie(h)
                })
            }
            function Y(h) {
                return function(W) {
                    var $ = e(this)
                      , z = $.attr("href");
                    if (!vt.validClick(W.currentTarget)) {
                        W.preventDefault();
                        return
                    }
                    z && z.indexOf("#") === 0 && h.open && oe(h)
                }
            }
            function p(h) {
                return h.outside && i.off("click" + E, h.outside),
                function(W) {
                    var $ = e(W.target);
                    m && $.closest(".w-editor-bem-EditorOverlay").length || y(h, $)
                }
            }
            var y = a(function(h, W) {
                if (h.open) {
                    var $ = W.closest(".w-nav-menu");
                    h.menu.is($) || oe(h)
                }
            });
            function _(h, W) {
                var $ = e.data(W, E)
                  , z = $.collapsed = $.button.css("display") !== "none";
                if ($.open && !z && !f && oe($, !0),
                $.container.length) {
                    var de = k($);
                    $.links.each(de),
                    $.dropdowns.each(de)
                }
                $.open && fe($)
            }
            var c = "max-width";
            function k(h) {
                var W = h.container.css(c);
                return W === "none" && (W = ""),
                function($, z) {
                    z = e(z),
                    z.css(c, ""),
                    z.css(c) === "none" && z.css(c, W)
                }
            }
            function U(h, W) {
                W.setAttribute("data-nav-menu-open", "")
            }
            function x(h, W) {
                W.removeAttribute("data-nav-menu-open")
            }
            function ie(h, W) {
                if (h.open)
                    return;
                h.open = !0,
                h.menu.each(U),
                h.links.addClass(L),
                h.dropdowns.addClass(w),
                h.dropdownToggle.addClass(R),
                h.dropdownList.addClass(b),
                h.button.addClass(T);
                var $ = h.config
                  , z = $.animation;
                (z === "none" || !r.support.transform || $.duration <= 0) && (W = !0);
                var de = fe(h)
                  , Ce = h.menu.outerHeight(!0)
                  , Xe = h.menu.outerWidth(!0)
                  , l = h.el.height()
                  , I = h.el[0];
                if (_(0, I),
                C.intro(0, I),
                vt.redraw.up(),
                f || i.on("click" + E, h.outside),
                W) {
                    A();
                    return
                }
                var O = "transform " + $.duration + "ms " + $.easing;
                if (h.overlay && (D = h.menu.prev(),
                h.overlay.show().append(h.menu)),
                $.animOver) {
                    r(h.menu).add(O).set({
                        x: $.animDirect * Xe,
                        height: de
                    }).start({
                        x: 0
                    }).then(A),
                    h.overlay && h.overlay.width(Xe);
                    return
                }
                var P = l + Ce;
                r(h.menu).add(O).set({
                    y: -P
                }).start({
                    y: 0
                }).then(A);
                function A() {
                    h.button.attr("aria-expanded", "true")
                }
            }
            function fe(h) {
                var W = h.config
                  , $ = W.docHeight ? i.height() : u.height();
                return W.animOver ? h.menu.height($) : h.el.css("position") !== "fixed" && ($ -= h.el.outerHeight(!0)),
                h.overlay && h.overlay.height($),
                $
            }
            function oe(h, W) {
                if (!h.open)
                    return;
                h.open = !1,
                h.button.removeClass(T);
                var $ = h.config;
                if (($.animation === "none" || !r.support.transform || $.duration <= 0) && (W = !0),
                C.outro(0, h.el[0]),
                i.off("click" + E, h.outside),
                W) {
                    r(h.menu).stop(),
                    I();
                    return
                }
                var z = "transform " + $.duration + "ms " + $.easing2
                  , de = h.menu.outerHeight(!0)
                  , Ce = h.menu.outerWidth(!0)
                  , Xe = h.el.height();
                if ($.animOver) {
                    r(h.menu).add(z).start({
                        x: Ce * $.animDirect
                    }).then(I);
                    return
                }
                var l = Xe + de;
                r(h.menu).add(z).start({
                    y: -l
                }).then(I);
                function I() {
                    h.menu.height(""),
                    r(h.menu).set({
                        x: 0,
                        y: 0
                    }),
                    h.menu.each(x),
                    h.links.removeClass(L),
                    h.dropdowns.removeClass(w),
                    h.dropdownToggle.removeClass(R),
                    h.dropdownList.removeClass(b),
                    h.overlay && h.overlay.children().length && (D.length ? h.menu.insertAfter(D) : h.menu.prependTo(h.parent),
                    h.overlay.attr("style", "").hide()),
                    h.el.triggerHandler("w-close"),
                    h.button.attr("aria-expanded", "false")
                }
            }
            return n
        }
        )
    }
    );
    var Hv = d( (FX, Vv) => {
        "use strict";
        var Et = Ne()
          , CF = rn()
          , it = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        }
          , Wv = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        Et.define("slider", Vv.exports = function(e, t) {
            var n = {}, r = e.tram, o = e(document), i, a, u = Et.env(), s = ".w-slider", f = '<div class="w-slider-dot" data-wf-ignore />', m = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />', v = "w-slider-force-show", g = CF.triggers, E, T = !1;
            n.ready = function() {
                a = Et.env("design"),
                w()
            }
            ,
            n.design = function() {
                a = !0,
                setTimeout(w, 1e3)
            }
            ,
            n.preview = function() {
                a = !1,
                w()
            }
            ,
            n.redraw = function() {
                T = !0,
                w(),
                T = !1
            }
            ,
            n.destroy = R;
            function w() {
                i = o.find(s),
                i.length && (i.each(C),
                !E && (R(),
                b()))
            }
            function R() {
                Et.resize.off(L),
                Et.redraw.off(n.redraw)
            }
            function b() {
                Et.resize.on(L),
                Et.redraw.on(n.redraw)
            }
            function L() {
                i.filter(":visible").each(V)
            }
            function C(p, y) {
                var _ = e(y)
                  , c = e.data(y, s);
                c || (c = e.data(y, s, {
                    index: 0,
                    depth: 1,
                    hasFocus: {
                        keyboard: !1,
                        mouse: !1
                    },
                    el: _,
                    config: {}
                })),
                c.mask = _.children(".w-slider-mask"),
                c.left = _.children(".w-slider-arrow-left"),
                c.right = _.children(".w-slider-arrow-right"),
                c.nav = _.children(".w-slider-nav"),
                c.slides = c.mask.children(".w-slide"),
                c.slides.each(g.reset),
                T && (c.maskWidth = 0),
                _.attr("role") === void 0 && _.attr("role", "region"),
                _.attr("aria-label") === void 0 && _.attr("aria-label", "carousel");
                var k = c.mask.attr("id");
                if (k || (k = "w-slider-mask-" + p,
                c.mask.attr("id", k)),
                !a && !c.ariaLiveLabel && (c.ariaLiveLabel = e(m).appendTo(c.mask)),
                c.left.attr("role", "button"),
                c.left.attr("tabindex", "0"),
                c.left.attr("aria-controls", k),
                c.left.attr("aria-label") === void 0 && c.left.attr("aria-label", "previous slide"),
                c.right.attr("role", "button"),
                c.right.attr("tabindex", "0"),
                c.right.attr("aria-controls", k),
                c.right.attr("aria-label") === void 0 && c.right.attr("aria-label", "next slide"),
                !r.support.transform) {
                    c.left.hide(),
                    c.right.hide(),
                    c.nav.hide(),
                    E = !0;
                    return
                }
                c.el.off(s),
                c.left.off(s),
                c.right.off(s),
                c.nav.off(s),
                D(c),
                a ? (c.el.on("setting" + s, S(c)),
                X(c),
                c.hasTimer = !1) : (c.el.on("swipe" + s, S(c)),
                c.left.on("click" + s, j(c)),
                c.right.on("click" + s, Q(c)),
                c.left.on("keydown" + s, H(c, j)),
                c.right.on("keydown" + s, H(c, Q)),
                c.nav.on("keydown" + s, "> div", S(c)),
                c.config.autoplay && !c.hasTimer && (c.hasTimer = !0,
                c.timerCount = 1,
                ee(c)),
                c.el.on("mouseenter" + s, M(c, !0, "mouse")),
                c.el.on("focusin" + s, M(c, !0, "keyboard")),
                c.el.on("mouseleave" + s, M(c, !1, "mouse")),
                c.el.on("focusout" + s, M(c, !1, "keyboard"))),
                c.nav.on("click" + s, "> div", S(c)),
                u || c.mask.contents().filter(function() {
                    return this.nodeType === 3
                }).remove();
                var U = _.filter(":hidden");
                U.addClass(v);
                var x = _.parents(":hidden");
                x.addClass(v),
                T || V(p, y),
                U.removeClass(v),
                x.removeClass(v)
            }
            function D(p) {
                var y = {};
                y.crossOver = 0,
                y.animation = p.el.attr("data-animation") || "slide",
                y.animation === "outin" && (y.animation = "cross",
                y.crossOver = .5),
                y.easing = p.el.attr("data-easing") || "ease";
                var _ = p.el.attr("data-duration");
                if (y.duration = _ != null ? parseInt(_, 10) : 500,
                F(p.el.attr("data-infinite")) && (y.infinite = !0),
                F(p.el.attr("data-disable-swipe")) && (y.disableSwipe = !0),
                F(p.el.attr("data-hide-arrows")) ? y.hideArrows = !0 : p.config.hideArrows && (p.left.show(),
                p.right.show()),
                F(p.el.attr("data-autoplay"))) {
                    y.autoplay = !0,
                    y.delay = parseInt(p.el.attr("data-delay"), 10) || 2e3,
                    y.timerMax = parseInt(p.el.attr("data-autoplay-limit"), 10);
                    var c = "mousedown" + s + " touchstart" + s;
                    a || p.el.off(c).one(c, function() {
                        X(p)
                    })
                }
                var k = p.right.width();
                y.edge = k ? k + 40 : 100,
                p.config = y
            }
            function F(p) {
                return p === "1" || p === "true"
            }
            function M(p, y, _) {
                return function(c) {
                    if (y)
                        p.hasFocus[_] = y;
                    else if (e.contains(p.el.get(0), c.relatedTarget) || (p.hasFocus[_] = y,
                    p.hasFocus.mouse && _ === "keyboard" || p.hasFocus.keyboard && _ === "mouse"))
                        return;
                    y ? (p.ariaLiveLabel.attr("aria-live", "polite"),
                    p.hasTimer && X(p)) : (p.ariaLiveLabel.attr("aria-live", "off"),
                    p.hasTimer && ee(p))
                }
            }
            function H(p, y) {
                return function(_) {
                    switch (_.keyCode) {
                    case it.SPACE:
                    case it.ENTER:
                        return y(p)(),
                        _.preventDefault(),
                        _.stopPropagation()
                    }
                }
            }
            function j(p) {
                return function() {
                    B(p, {
                        index: p.index - 1,
                        vector: -1
                    })
                }
            }
            function Q(p) {
                return function() {
                    B(p, {
                        index: p.index + 1,
                        vector: 1
                    })
                }
            }
            function J(p, y) {
                var _ = null;
                y === p.slides.length && (w(),
                te(p)),
                t.each(p.anchors, function(c, k) {
                    e(c.els).each(function(U, x) {
                        e(x).index() === y && (_ = k)
                    })
                }),
                _ != null && B(p, {
                    index: _,
                    immediate: !0
                })
            }
            function ee(p) {
                X(p);
                var y = p.config
                  , _ = y.timerMax;
                _ && p.timerCount++ > _ || (p.timerId = window.setTimeout(function() {
                    p.timerId == null || a || (Q(p)(),
                    ee(p))
                }, y.delay))
            }
            function X(p) {
                window.clearTimeout(p.timerId),
                p.timerId = null
            }
            function S(p) {
                return function(y, _) {
                    _ = _ || {};
                    var c = p.config;
                    if (a && y.type === "setting") {
                        if (_.select === "prev")
                            return j(p)();
                        if (_.select === "next")
                            return Q(p)();
                        if (D(p),
                        te(p),
                        _.select == null)
                            return;
                        J(p, _.select);
                        return
                    }
                    if (y.type === "swipe")
                        return c.disableSwipe || Et.env("editor") ? void 0 : _.direction === "left" ? Q(p)() : _.direction === "right" ? j(p)() : void 0;
                    if (p.nav.has(y.target).length) {
                        var k = e(y.target).index();
                        if (y.type === "click" && B(p, {
                            index: k
                        }),
                        y.type === "keydown")
                            switch (y.keyCode) {
                            case it.ENTER:
                            case it.SPACE:
                                {
                                    B(p, {
                                        index: k
                                    }),
                                    y.preventDefault();
                                    break
                                }
                            case it.ARROW_LEFT:
                            case it.ARROW_UP:
                                {
                                    q(p.nav, Math.max(k - 1, 0)),
                                    y.preventDefault();
                                    break
                                }
                            case it.ARROW_RIGHT:
                            case it.ARROW_DOWN:
                                {
                                    q(p.nav, Math.min(k + 1, p.pages)),
                                    y.preventDefault();
                                    break
                                }
                            case it.HOME:
                                {
                                    q(p.nav, 0),
                                    y.preventDefault();
                                    break
                                }
                            case it.END:
                                {
                                    q(p.nav, p.pages),
                                    y.preventDefault();
                                    break
                                }
                            default:
                                return
                            }
                    }
                }
            }
            function q(p, y) {
                var _ = p.children().eq(y).focus();
                p.children().not(_)
            }
            function B(p, y) {
                y = y || {};
                var _ = p.config
                  , c = p.anchors;
                p.previous = p.index;
                var k = y.index
                  , U = {};
                k < 0 ? (k = c.length - 1,
                _.infinite && (U.x = -p.endX,
                U.from = 0,
                U.to = c[0].width)) : k >= c.length && (k = 0,
                _.infinite && (U.x = c[c.length - 1].width,
                U.from = -c[c.length - 1].x,
                U.to = U.from - U.x)),
                p.index = k;
                var x = p.nav.children().eq(k).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
                p.nav.children().not(x).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"),
                _.hideArrows && (p.index === c.length - 1 ? p.right.hide() : p.right.show(),
                p.index === 0 ? p.left.hide() : p.left.show());
                var ie = p.offsetX || 0
                  , fe = p.offsetX = -c[p.index].x
                  , oe = {
                    x: fe,
                    opacity: 1,
                    visibility: ""
                }
                  , h = e(c[p.index].els)
                  , W = e(c[p.previous] && c[p.previous].els)
                  , $ = p.slides.not(h)
                  , z = _.animation
                  , de = _.easing
                  , Ce = Math.round(_.duration)
                  , Xe = y.vector || (p.index > p.previous ? 1 : -1)
                  , l = "opacity " + Ce + "ms " + de
                  , I = "transform " + Ce + "ms " + de;
                if (h.find(Wv).removeAttr("tabindex"),
                h.removeAttr("aria-hidden"),
                h.find("*").removeAttr("aria-hidden"),
                $.find(Wv).attr("tabindex", "-1"),
                $.attr("aria-hidden", "true"),
                $.find("*").attr("aria-hidden", "true"),
                a || (h.each(g.intro),
                $.each(g.outro)),
                y.immediate && !T) {
                    r(h).set(oe),
                    A();
                    return
                }
                if (p.index === p.previous)
                    return;
                if (a || p.ariaLiveLabel.text(`Slide ${k + 1} of ${c.length}.`),
                z === "cross") {
                    var O = Math.round(Ce - Ce * _.crossOver)
                      , P = Math.round(Ce - O);
                    l = "opacity " + O + "ms " + de,
                    r(W).set({
                        visibility: ""
                    }).add(l).start({
                        opacity: 0
                    }),
                    r(h).set({
                        visibility: "",
                        x: fe,
                        opacity: 0,
                        zIndex: p.depth++
                    }).add(l).wait(P).then({
                        opacity: 1
                    }).then(A);
                    return
                }
                if (z === "fade") {
                    r(W).set({
                        visibility: ""
                    }).stop(),
                    r(h).set({
                        visibility: "",
                        x: fe,
                        opacity: 0,
                        zIndex: p.depth++
                    }).add(l).start({
                        opacity: 1
                    }).then(A);
                    return
                }
                if (z === "over") {
                    oe = {
                        x: p.endX
                    },
                    r(W).set({
                        visibility: ""
                    }).stop(),
                    r(h).set({
                        visibility: "",
                        zIndex: p.depth++,
                        x: fe + c[p.index].width * Xe
                    }).add(I).start({
                        x: fe
                    }).then(A);
                    return
                }
                _.infinite && U.x ? (r(p.slides.not(W)).set({
                    visibility: "",
                    x: U.x
                }).add(I).start({
                    x: fe
                }),
                r(W).set({
                    visibility: "",
                    x: U.from
                }).add(I).start({
                    x: U.to
                }),
                p.shifted = W) : (_.infinite && p.shifted && (r(p.shifted).set({
                    visibility: "",
                    x: ie
                }),
                p.shifted = null),
                r(p.slides).set({
                    visibility: ""
                }).add(I).start({
                    x: fe
                }));
                function A() {
                    h = e(c[p.index].els),
                    $ = p.slides.not(h),
                    z !== "slide" && (oe.visibility = "hidden"),
                    r($).set(oe)
                }
            }
            function V(p, y) {
                var _ = e.data(y, s);
                if (_) {
                    if (G(_))
                        return te(_);
                    a && Y(_) && te(_)
                }
            }
            function te(p) {
                var y = 1
                  , _ = 0
                  , c = 0
                  , k = 0
                  , U = p.maskWidth
                  , x = U - p.config.edge;
                x < 0 && (x = 0),
                p.anchors = [{
                    els: [],
                    x: 0,
                    width: 0
                }],
                p.slides.each(function(fe, oe) {
                    c - _ > x && (y++,
                    _ += U,
                    p.anchors[y - 1] = {
                        els: [],
                        x: c,
                        width: 0
                    }),
                    k = e(oe).outerWidth(!0),
                    c += k,
                    p.anchors[y - 1].width += k,
                    p.anchors[y - 1].els.push(oe);
                    var h = fe + 1 + " of " + p.slides.length;
                    e(oe).attr("aria-label", h),
                    e(oe).attr("role", "group")
                }),
                p.endX = c,
                a && (p.pages = null),
                p.nav.length && p.pages !== y && (p.pages = y,
                ne(p));
                var ie = p.index;
                ie >= y && (ie = y - 1),
                B(p, {
                    immediate: !0,
                    index: ie
                })
            }
            function ne(p) {
                var y = [], _, c = p.el.attr("data-nav-spacing");
                c && (c = parseFloat(c) + "px");
                for (var k = 0, U = p.pages; k < U; k++)
                    _ = e(f),
                    _.attr("aria-label", "Show slide " + (k + 1) + " of " + U).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"),
                    p.nav.hasClass("w-num") && _.text(k + 1),
                    c != null && _.css({
                        "margin-left": c,
                        "margin-right": c
                    }),
                    y.push(_);
                p.nav.empty().append(y)
            }
            function G(p) {
                var y = p.mask.width();
                return p.maskWidth !== y ? (p.maskWidth = y,
                !0) : !1
            }
            function Y(p) {
                var y = 0;
                return p.slides.each(function(_, c) {
                    y += e(c).outerWidth(!0)
                }),
                p.slidesWidth !== y ? (p.slidesWidth = y,
                !0) : !1
            }
            return n
        }
        )
    }
    );
    Oa();
    xa();
    Ca();
    Na();
    rn();
    Sv();
    Rv();
    Pv();
    Nv();
    Fv();
    Xv();
    Uv();
    Hv();
}
)();
/*!
* tram.js v0.8.2-global
* Cross-browser CSS3 transitions in JavaScript
* https://github.com/bkwld/tram
* MIT License
*/
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e-23": {
            "id": "e-23",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-24"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".dropdown-link",
                "originalId": "e7a8e1d7-8b20-df98-3d17-617ef62dd79a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".dropdown-link",
                "originalId": "e7a8e1d7-8b20-df98-3d17-617ef62dd79a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678101572833
        },
        "e-24": {
            "id": "e-24",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-48"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".dropdown-link",
                "originalId": "e7a8e1d7-8b20-df98-3d17-617ef62dd79a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".dropdown-link",
                "originalId": "e7a8e1d7-8b20-df98-3d17-617ef62dd79a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678101572833
        },
        "e-25": {
            "id": "e-25",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-26"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".dropdown_link2",
                "originalId": "0199a2e1-0909-fe78-b4f6-0b269ed4eaa1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".dropdown_link2",
                "originalId": "0199a2e1-0909-fe78-b4f6-0b269ed4eaa1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678101630469
        },
        "e-26": {
            "id": "e-26",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-25"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".dropdown_link2",
                "originalId": "0199a2e1-0909-fe78-b4f6-0b269ed4eaa1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".dropdown_link2",
                "originalId": "0199a2e1-0909-fe78-b4f6-0b269ed4eaa1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678101630470
        },
        "e-27": {
            "id": "e-27",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-28"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8cee97d47b7c8",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8cee97d47b7c8",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678108761740
        },
        "e-28": {
            "id": "e-28",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-27"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8cee97d47b7c8",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8cee97d47b7c8",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678108761740
        },
        "e-29": {
            "id": "e-29",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-30"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "642c0c56b9a8cee97d47b7c8",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8cee97d47b7c8",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678113801370
        },
        "e-31": {
            "id": "e-31",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-32"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".link_scrolldown",
                "originalId": "642c0c56b9a8cee97d47b7c8|85540e62-19b6-0a23-068c-158d47048bd9",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".link_scrolldown",
                "originalId": "642c0c56b9a8cee97d47b7c8|85540e62-19b6-0a23-068c-158d47048bd9",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678114159004
        },
        "e-32": {
            "id": "e-32",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-31"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".link_scrolldown",
                "originalId": "642c0c56b9a8cee97d47b7c8|85540e62-19b6-0a23-068c-158d47048bd9",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".link_scrolldown",
                "originalId": "642c0c56b9a8cee97d47b7c8|85540e62-19b6-0a23-068c-158d47048bd9",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678114159005
        },
        "e-33": {
            "id": "e-33",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-34"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ce1f0047b7dd",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ce1f0047b7dd",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678114282228
        },
        "e-39": {
            "id": "e-39",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-40"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".button-main",
                "originalId": "642c0c56b9a8cee97d47b7c8|5690d75a-7462-62d6-e4a8-23517947663e",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button-main",
                "originalId": "642c0c56b9a8cee97d47b7c8|5690d75a-7462-62d6-e4a8-23517947663e",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678117996585
        },
        "e-40": {
            "id": "e-40",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-39"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".button-main",
                "originalId": "642c0c56b9a8cee97d47b7c8|5690d75a-7462-62d6-e4a8-23517947663e",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button-main",
                "originalId": "642c0c56b9a8cee97d47b7c8|5690d75a-7462-62d6-e4a8-23517947663e",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678117996585
        },
        "e-41": {
            "id": "e-41",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-130"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ce959247b7ce",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ce959247b7ce",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678121680477
        },
        "e-43": {
            "id": "e-43",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-44"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".is-slide",
                "originalId": "642c0c56b9a8cee97d47b7c8|2bfee669-ab3d-1ec6-b0c3-395aa881efc9",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".is-slide",
                "originalId": "642c0c56b9a8cee97d47b7c8|2bfee669-ab3d-1ec6-b0c3-395aa881efc9",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1678205532369
        },
        "e-45": {
            "id": "e-45",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-46"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ceeab747b7dc",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ceeab747b7dc",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678206582650
        },
        "e-49": {
            "id": "e-49",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-50"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "642c0c56b9a8ced56b47b7d0|4ce0aa84-3490-2d13-6a05-252707fc4af8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ced56b47b7d0|4ce0aa84-3490-2d13-6a05-252707fc4af8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678465250310
        },
        "e-50": {
            "id": "e-50",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-49"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "642c0c56b9a8ced56b47b7d0|4ce0aa84-3490-2d13-6a05-252707fc4af8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ced56b47b7d0|4ce0aa84-3490-2d13-6a05-252707fc4af8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678465250311
        },
        "e-51": {
            "id": "e-51",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-52"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "642c0c56b9a8ce355247b7d2|4ce0aa84-3490-2d13-6a05-252707fc4af8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ce355247b7d2|4ce0aa84-3490-2d13-6a05-252707fc4af8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678466568490
        },
        "e-52": {
            "id": "e-52",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-51"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "642c0c56b9a8ce355247b7d2|4ce0aa84-3490-2d13-6a05-252707fc4af8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ce355247b7d2|4ce0aa84-3490-2d13-6a05-252707fc4af8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678466568490
        },
        "e-57": {
            "id": "e-57",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-58"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "selector": ".nav_dropdown",
                "originalId": "e7a8e1d7-8b20-df98-3d17-617ef62dd77c",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".nav_dropdown",
                "originalId": "e7a8e1d7-8b20-df98-3d17-617ef62dd77c",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678801197815
        },
        "e-58": {
            "id": "e-58",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-57"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "selector": ".nav_dropdown",
                "originalId": "e7a8e1d7-8b20-df98-3d17-617ef62dd77c",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".nav_dropdown",
                "originalId": "e7a8e1d7-8b20-df98-3d17-617ef62dd77c",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678801197816
        },
        "e-73": {
            "id": "e-73",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-74"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ce1e0c47b7d5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ce1e0c47b7d5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678806568575
        },
        "e-74": {
            "id": "e-74",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-73"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ce1e0c47b7d5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ce1e0c47b7d5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678806568628
        },
        "e-75": {
            "id": "e-75",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-76"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ce1f0047b7dd",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ce1f0047b7dd",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678806606754
        },
        "e-76": {
            "id": "e-76",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-75"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ce1f0047b7dd",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ce1f0047b7dd",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678806606755
        },
        "e-77": {
            "id": "e-77",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-78"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ceeab747b7dc",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ceeab747b7dc",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678806630802
        },
        "e-78": {
            "id": "e-78",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-77"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ceeab747b7dc",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ceeab747b7dc",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678806630854
        },
        "e-79": {
            "id": "e-79",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-80"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ce959247b7ce",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ce959247b7ce",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678807434155
        },
        "e-80": {
            "id": "e-80",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-79"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ce959247b7ce",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ce959247b7ce",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678807434156
        },
        "e-83": {
            "id": "e-83",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-84"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ce433e47b7cc",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ce433e47b7cc",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678807606720
        },
        "e-84": {
            "id": "e-84",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-83"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ce433e47b7cc",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ce433e47b7cc",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678807606776
        },
        "e-87": {
            "id": "e-87",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-88"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ce322747b7d7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ce322747b7d7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678807718218
        },
        "e-88": {
            "id": "e-88",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-87"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ce322747b7d7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ce322747b7d7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678807718219
        },
        "e-91": {
            "id": "e-91",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-92"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ce0fe647b7d8",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ce0fe647b7d8",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678807761303
        },
        "e-92": {
            "id": "e-92",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-91"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ce0fe647b7d8",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ce0fe647b7d8",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678807761304
        },
        "e-95": {
            "id": "e-95",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-96"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ced56b47b7d0",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ced56b47b7d0",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678807783387
        },
        "e-96": {
            "id": "e-96",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-95"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ced56b47b7d0",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ced56b47b7d0",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678807783388
        },
        "e-99": {
            "id": "e-99",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-100"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ce167f47b7cd",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ce167f47b7cd",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678807935729
        },
        "e-100": {
            "id": "e-100",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-99"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ce167f47b7cd",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ce167f47b7cd",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678807935778
        },
        "e-103": {
            "id": "e-103",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-104"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ce542947b7ca",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ce542947b7ca",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678807968166
        },
        "e-104": {
            "id": "e-104",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-103"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ce542947b7ca",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ce542947b7ca",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678807968167
        },
        "e-113": {
            "id": "e-113",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-114"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".press-divider",
                "originalId": "642c0c56b9a8ced56b47b7d0|6f485243-fa56-1dd8-5f41-6c60e45f749f",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".press-divider",
                "originalId": "642c0c56b9a8ced56b47b7d0|6f485243-fa56-1dd8-5f41-6c60e45f749f",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678868011154
        },
        "e-115": {
            "id": "e-115",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-116"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ce433e47b7cc|af0dfa56-a048-c763-bcfc-e7ce910f38c9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ce433e47b7cc|af0dfa56-a048-c763-bcfc-e7ce910f38c9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678887403738
        },
        "e-116": {
            "id": "e-116",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-115"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ce433e47b7cc|af0dfa56-a048-c763-bcfc-e7ce910f38c9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ce433e47b7cc|af0dfa56-a048-c763-bcfc-e7ce910f38c9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678887403740
        },
        "e-117": {
            "id": "e-117",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "NAVBAR_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-118"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "e7a8e1d7-8b20-df98-3d17-617ef62dd776",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "e7a8e1d7-8b20-df98-3d17-617ef62dd776",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678888418308
        },
        "e-118": {
            "id": "e-118",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "NAVBAR_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-117"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "e7a8e1d7-8b20-df98-3d17-617ef62dd776",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "e7a8e1d7-8b20-df98-3d17-617ef62dd776",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678888418309
        },
        "e-119": {
            "id": "e-119",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-120"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "642c0c56b9a8ceb97847b7d1|4ce0aa84-3490-2d13-6a05-252707fc4af8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ceb97847b7d1|4ce0aa84-3490-2d13-6a05-252707fc4af8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678888895113
        },
        "e-120": {
            "id": "e-120",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-119"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "642c0c56b9a8ceb97847b7d1|4ce0aa84-3490-2d13-6a05-252707fc4af8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ceb97847b7d1|4ce0aa84-3490-2d13-6a05-252707fc4af8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678888895113
        },
        "e-121": {
            "id": "e-121",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-122"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "642c0c56b9a8ceb97847b7d1|4e3d48be-732c-d50e-8ed2-d42b0ad99599",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ceb97847b7d1|4e3d48be-732c-d50e-8ed2-d42b0ad99599",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678888895113
        },
        "e-122": {
            "id": "e-122",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-121"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "642c0c56b9a8ceb97847b7d1|4e3d48be-732c-d50e-8ed2-d42b0ad99599",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ceb97847b7d1|4e3d48be-732c-d50e-8ed2-d42b0ad99599",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678888895113
        },
        "e-123": {
            "id": "e-123",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-124"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ceb97847b7d1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ceb97847b7d1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678888895113
        },
        "e-124": {
            "id": "e-124",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-123"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ceb97847b7d1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ceb97847b7d1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678888895113
        },
        "e-125": {
            "id": "e-125",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-126"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ce1e0c47b7d5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ce1e0c47b7d5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1679662207271
        },
        "e-127": {
            "id": "e-127",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-128"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ced56b47b7d0",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ced56b47b7d0",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1679662961371
        },
        "e-129": {
            "id": "e-129",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-130"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ce433e47b7cc|38459866-27b5-2a24-89a6-864c107c7a06",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ce433e47b7cc|38459866-27b5-2a24-89a6-864c107c7a06",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1639561158377
        },
        "e-130": {
            "id": "e-130",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-129"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ce433e47b7cc|38459866-27b5-2a24-89a6-864c107c7a06",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ce433e47b7cc|38459866-27b5-2a24-89a6-864c107c7a06",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1639561158378
        },
        "e-131": {
            "id": "e-131",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-132"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ce433e47b7cc|30962797-0a55-01a0-3569-7d114dee9075",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ce433e47b7cc|30962797-0a55-01a0-3569-7d114dee9075",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1679928767103
        },
        "e-132": {
            "id": "e-132",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-131"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ce433e47b7cc|30962797-0a55-01a0-3569-7d114dee9075",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ce433e47b7cc|30962797-0a55-01a0-3569-7d114dee9075",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1679928767103
        },
        "e-133": {
            "id": "e-133",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-134"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ce4e6e47b7d4",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ce4e6e47b7d4",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1679934685760
        },
        "e-134": {
            "id": "e-134",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-133"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "642c0c56b9a8ce4e6e47b7d4",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "642c0c56b9a8ce4e6e47b7d4",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1679934685760
        },
        "e-135": {
            "id": "e-135",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-136"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".nav_dropdown",
                "originalId": "e7a8e1d7-8b20-df98-3d17-617ef62dd77c",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".nav_dropdown",
                "originalId": "e7a8e1d7-8b20-df98-3d17-617ef62dd77c",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680096368509
        },
        "e-136": {
            "id": "e-136",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-135"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".nav_dropdown",
                "originalId": "e7a8e1d7-8b20-df98-3d17-617ef62dd77c",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".nav_dropdown",
                "originalId": "e7a8e1d7-8b20-df98-3d17-617ef62dd77c",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680096368510
        },
        "e-137": {
            "id": "e-137",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-138"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66329982b47b00ab613f2698",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66329982b47b00ab613f2698",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1714592130538
        },
        "e-139": {
            "id": "e-139",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-140"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66329982b47b00ab613f2698",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66329982b47b00ab613f2698",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1714592130538
        },
        "e-140": {
            "id": "e-140",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-139"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66329982b47b00ab613f2698",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66329982b47b00ab613f2698",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1714592130538
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "Dropdown - Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-n",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdwotn-link_wrapper",
                            "selectorGuids": ["42248db7-b7e8-b11d-a8f2-070930d5b573"]
                        },
                        "globalSwatchId": "fc122657",
                        "rValue": 7,
                        "bValue": 45,
                        "gValue": 176,
                        "aValue": 1
                    }
                }, {
                    "id": "a-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown_arrow",
                            "selectorGuids": ["41fb7573-0048-caf2-200f-4e74aa09a503"]
                        },
                        "xValue": 0.2,
                        "xUnit": "rem",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1677255855845
        },
        "a-2": {
            "id": "a-2",
            "title": "Dropdown - Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdwotn-link_wrapper",
                            "selectorGuids": ["42248db7-b7e8-b11d-a8f2-070930d5b573"]
                        },
                        "globalSwatchId": "10751532",
                        "rValue": 4,
                        "bValue": 37,
                        "gValue": 24,
                        "aValue": 1
                    }
                }, {
                    "id": "a-2-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown_arrow",
                            "selectorGuids": ["41fb7573-0048-caf2-200f-4e74aa09a503"]
                        },
                        "xValue": 0,
                        "xUnit": "rem",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1677255855845
        },
        "a-5": {
            "id": "a-5",
            "title": "Nav-Show",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-5-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "id": "e7a8e1d7-8b20-df98-3d17-617ef62dd776"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1678108769472
        },
        "a-6": {
            "id": "a-6",
            "title": "Nav-Hide",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-6-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "id": "e7a8e1d7-8b20-df98-3d17-617ef62dd776"
                        },
                        "yValue": -5,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1678108769472
        },
        "a-7": {
            "id": "a-7",
            "title": "Scroll Down-Loop",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-7-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 700,
                        "target": {
                            "selector": ".icon-scroll",
                            "selectorGuids": ["0ac5f9e6-0848-adfe-3136-f1421d90d75f"]
                        },
                        "yValue": 0.5,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 100,
                        "easing": "ease",
                        "duration": 700,
                        "target": {
                            "selector": ".icon-scroll",
                            "selectorGuids": ["0ac5f9e6-0848-adfe-3136-f1421d90d75f"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1678113866266
        },
        "a-8": {
            "id": "a-8",
            "title": "Scroll Down-Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-8-n",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-scrolldown",
                            "selectorGuids": ["85e5ccbb-b3f4-ff74-cb83-d7838e052bf5"]
                        },
                        "globalSwatchId": "fc122657",
                        "rValue": 7,
                        "bValue": 45,
                        "gValue": 176,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1678114161911
        },
        "a-9": {
            "id": "a-9",
            "title": "Scroll Down-Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-scrolldown",
                            "selectorGuids": ["85e5ccbb-b3f4-ff74-cb83-d7838e052bf5"]
                        },
                        "globalSwatchId": "1c02d552",
                        "rValue": 229,
                        "bValue": 238,
                        "gValue": 234,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1678114161911
        },
        "a-12": {
            "id": "a-12",
            "title": "Button Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-12-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-wrapper",
                            "selectorGuids": ["a4a7dc9e-e892-e761-d23a-ac2b859613d1"]
                        },
                        "globalSwatchId": "4b45bea2",
                        "rValue": 3,
                        "bValue": 34,
                        "gValue": 143,
                        "aValue": 1
                    }
                }, {
                    "id": "a-12-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-arrow",
                            "selectorGuids": ["47770e3c-d50b-ea10-db32-cdc651229c92"]
                        },
                        "globalSwatchId": "4b45bea2",
                        "rValue": 3,
                        "bValue": 34,
                        "gValue": 143,
                        "aValue": 1
                    }
                }, {
                    "id": "a-12-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-icon",
                            "selectorGuids": ["33651cc9-cefe-dfe1-c864-bc29d68b068b"]
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1678117853701
        },
        "a-13": {
            "id": "a-13",
            "title": "Button Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-13-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-wrapper",
                            "selectorGuids": ["a4a7dc9e-e892-e761-d23a-ac2b859613d1"]
                        },
                        "globalSwatchId": "fc122657",
                        "rValue": 7,
                        "bValue": 45,
                        "gValue": 176,
                        "aValue": 1
                    }
                }, {
                    "id": "a-13-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-arrow",
                            "selectorGuids": ["47770e3c-d50b-ea10-db32-cdc651229c92"]
                        },
                        "globalSwatchId": "fc122657",
                        "rValue": 7,
                        "bValue": 45,
                        "gValue": 176,
                        "aValue": 1
                    }
                }, {
                    "id": "a-13-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-icon",
                            "selectorGuids": ["33651cc9-cefe-dfe1-c864-bc29d68b068b"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1678117853701
        },
        "a-16": {
            "id": "a-16",
            "title": "Press Item - Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-16-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-blog",
                            "selectorGuids": ["e9f20c1d-5d4e-6513-6cf9-9511248fb837"]
                        },
                        "xValue": 1.08,
                        "yValue": 1.08,
                        "locked": true
                    }
                }, {
                    "id": "a-16-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".press-link",
                            "selectorGuids": ["9dc3e984-73c4-381a-baa4-1331c6dc2632"]
                        },
                        "globalSwatchId": "4b45bea2",
                        "rValue": 3,
                        "bValue": 34,
                        "gValue": 143,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1678465257050
        },
        "a-17": {
            "id": "a-17",
            "title": "Press Item - Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-17-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-blog",
                            "selectorGuids": ["e9f20c1d-5d4e-6513-6cf9-9511248fb837"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-17-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".press-link",
                            "selectorGuids": ["9dc3e984-73c4-381a-baa4-1331c6dc2632"]
                        },
                        "globalSwatchId": "fc122657",
                        "rValue": 7,
                        "bValue": 45,
                        "gValue": 176,
                        "aValue": 1
                    }
                }, {
                    "id": "a-17-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-1x1-small",
                            "selectorGuids": ["07815991-952a-8d98-0e00-e4c25af270ec"]
                        },
                        "xValue": 0,
                        "xUnit": "rem",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1678465257050
        },
        "a-20": {
            "id": "a-20",
            "title": "Dropdown - Open Tab-Mob",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-20-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-dropwdown_list",
                            "selectorGuids": ["42248db7-b7e8-b11d-a8f2-070930d5b56c"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-20-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-1x1-small",
                            "selectorGuids": ["07815991-952a-8d98-0e00-e4c25af270ec"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-dropwdown_list",
                            "selectorGuids": ["42248db7-b7e8-b11d-a8f2-070930d5b56c"]
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-10",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-1x1-small",
                            "selectorGuids": ["07815991-952a-8d98-0e00-e4c25af270ec"]
                        },
                        "zValue": 180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1677256150467
        },
        "a-21": {
            "id": "a-21",
            "title": "Dropdown - Close Yab-Mob",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-21-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-dropwdown_list",
                            "selectorGuids": ["42248db7-b7e8-b11d-a8f2-070930d5b56c"]
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-1x1-small",
                            "selectorGuids": ["07815991-952a-8d98-0e00-e4c25af270ec"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1677256150467
        },
        "a-29": {
            "id": "a-29",
            "title": "Press Divider-Apperas",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-29-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "642c0c56b9a8ced56b47b7d0|6f485243-fa56-1dd8-5f41-6c60e45f749f"
                        },
                        "widthValue": 0,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-29-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "642c0c56b9a8ced56b47b7d0|6f485243-fa56-1dd8-5f41-6c60e45f749f"
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1678868016537
        },
        "a-27": {
            "id": "a-27",
            "title": "Menu-1 Click",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-27-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".top-bar-hm10",
                            "selectorGuids": ["90d79ae0-937f-9047-d131-6544694ad131"]
                        },
                        "zValue": 135,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-27-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".bottom-bar-hm10",
                            "selectorGuids": ["90d79ae0-937f-9047-d131-6544694ad132"]
                        },
                        "yValue": 5,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".top-bar-hm10",
                            "selectorGuids": ["90d79ae0-937f-9047-d131-6544694ad131"]
                        },
                        "yValue": -1.5,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".bottom-bar-hm10",
                            "selectorGuids": ["90d79ae0-937f-9047-d131-6544694ad132"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1581473756789
        },
        "a-28": {
            "id": "a-28",
            "title": "Menu-2 Click",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-28-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".top-bar-hm10",
                            "selectorGuids": ["90d79ae0-937f-9047-d131-6544694ad131"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-28-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".bottom-bar-hm10",
                            "selectorGuids": ["90d79ae0-937f-9047-d131-6544694ad132"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-28-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".bottom-bar-hm10",
                            "selectorGuids": ["90d79ae0-937f-9047-d131-6544694ad132"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".top-bar-hm10",
                            "selectorGuids": ["90d79ae0-937f-9047-d131-6544694ad131"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1581473756789
        },
        "a-18": {
            "id": "a-18",
            "title": "Press Featured - Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-18-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".bg-photo",
                            "selectorGuids": ["e340311b-879e-9594-1611-85900cc298af"]
                        },
                        "xValue": 1.08,
                        "yValue": 1.08,
                        "locked": true
                    }
                }, {
                    "id": "a-18-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".press-link",
                            "selectorGuids": ["9dc3e984-73c4-381a-baa4-1331c6dc2632"]
                        },
                        "globalSwatchId": "4b45bea2",
                        "rValue": 3,
                        "bValue": 34,
                        "gValue": 143,
                        "aValue": 1
                    }
                }, {
                    "id": "a-18-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-1x1-small",
                            "selectorGuids": ["07815991-952a-8d98-0e00-e4c25af270ec"]
                        },
                        "xValue": 0.25,
                        "xUnit": "rem",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1678725546447
        },
        "a-19": {
            "id": "a-19",
            "title": "Press Featured - HoverOut",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-19-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".bg-photo",
                            "selectorGuids": ["e340311b-879e-9594-1611-85900cc298af"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-19-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".press-link",
                            "selectorGuids": ["9dc3e984-73c4-381a-baa4-1331c6dc2632"]
                        },
                        "globalSwatchId": "fc122657",
                        "rValue": 7,
                        "bValue": 45,
                        "gValue": 176,
                        "aValue": 1
                    }
                }, {
                    "id": "a-19-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-1x1-small",
                            "selectorGuids": ["07815991-952a-8d98-0e00-e4c25af270ec"]
                        },
                        "xValue": 0,
                        "xUnit": "rem",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1678725546447
        },
        "a-30": {
            "id": "a-30",
            "title": "Nav-Show 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-30-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "id": "642c0c56b9a8ceb97847b7d1|e7a8e1d7-8b20-df98-3d17-617ef62dd776"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1678108769472
        },
        "a-31": {
            "id": "a-31",
            "title": "Nav-Hide 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-31-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "id": "642c0c56b9a8ceb97847b7d1|e7a8e1d7-8b20-df98-3d17-617ef62dd776"
                        },
                        "yValue": -5,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1678108769472
        },
        "a-32": {
            "id": "a-32",
            "title": "Select 1 - Rotate Arrow Up",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-32-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".fs-select_icon-1",
                            "selectorGuids": ["83b2d1e0-f889-96c7-f0d9-28e90cbc7d59"]
                        },
                        "zValue": 180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1639561386738
        },
        "a-33": {
            "id": "a-33",
            "title": "Select 1 - Rotate Arrow Back",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-33-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".fs-select_icon-1",
                            "selectorGuids": ["83b2d1e0-f889-96c7-f0d9-28e90cbc7d59"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1639561386738
        },
        "a-34": {
            "id": "a-34",
            "title": "Nav-Show 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-34-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "id": "642c0c56b9a8ce4e6e47b7d4|e7a8e1d7-8b20-df98-3d17-617ef62dd776"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1678108769472
        },
        "a-35": {
            "id": "a-35",
            "title": "Nav-Hide 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-35-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "id": "642c0c56b9a8ce4e6e47b7d4|e7a8e1d7-8b20-df98-3d17-617ef62dd776"
                        },
                        "yValue": -5,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1678108769472
        },
        "a-3": {
            "id": "a-3",
            "title": "Dropdown - Open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-3-n-10",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-1x1-small",
                            "selectorGuids": ["07815991-952a-8d98-0e00-e4c25af270ec"]
                        },
                        "zValue": 180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1677256150467
        },
        "a-4": {
            "id": "a-4",
            "title": "Dropdown - Close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n-10",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-1x1-small",
                            "selectorGuids": ["07815991-952a-8d98-0e00-e4c25af270ec"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1677256150467
        },
        "a-36": {
            "id": "a-36",
            "title": "Nav-Show 4",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-36-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "id": "66329982b47b00ab613f2698|e7a8e1d7-8b20-df98-3d17-617ef62dd776"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1678108769472
        },
        "a-37": {
            "id": "a-37",
            "title": "Nav-Hide 4",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-37-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "id": "66329982b47b00ab613f2698|e7a8e1d7-8b20-df98-3d17-617ef62dd776"
                        },
                        "yValue": -5,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1678108769472
        },
        "slideInRight": {
            "id": "slideInRight",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 100,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,    
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});
