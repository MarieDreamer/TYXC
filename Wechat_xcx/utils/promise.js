var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

!function(n, e) {
    "object" === ("undefined" == typeof exports ? "undefined" : t(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : n.ES6Promise = e();
}(void 0, function() {
    function n(n) {
        return "function" == typeof n || "object" === (void 0 === n ? "undefined" : t(n)) && null !== n;
    }
    function e(t) {
        return "function" == typeof t;
    }
    function r() {
        return void 0 !== F ? function() {
            F(i);
        } : o();
    }
    function o() {
        var t = setTimeout;
        return function() {
            return t(i, 1);
        };
    }
    function i() {
        for (var t = 0; t < D; t += 2) (0, G[t])(G[t + 1]), G[t] = void 0, G[t + 1] = void 0;
        D = 0;
    }
    function s(t, n) {
        var e = arguments, r = this, o = new this.constructor(c);
        void 0 === o[I] && x(o);
        var i = r._state;
        return i ? function() {
            var t = e[i - 1];
            L(function() {
                return E(i, o, t, r._result);
            });
        }() : w(r, o, t, n), o;
    }
    function u(n) {
        var e = this;
        if (n && "object" === (void 0 === n ? "undefined" : t(n)) && n.constructor === e) return n;
        var r = new e(c);
        return v(r, n), r;
    }
    function c() {}
    function f() {
        return new TypeError("You cannot resolve a promise with itself");
    }
    function a() {
        return new TypeError("A promises callback cannot return that same promise.");
    }
    function l(t) {
        try {
            return t.then;
        } catch (t) {
            return V.error = t, V;
        }
    }
    function h(t, n, e, r) {
        try {
            t.call(n, e, r);
        } catch (t) {
            return t;
        }
    }
    function p(t, n, e) {
        L(function(t) {
            var r = !1, o = h(e, n, function(e) {
                r || (r = !0, n !== e ? v(t, e) : m(t, e));
            }, function(n) {
                r || (r = !0, b(t, n));
            }, "Settle: " + (t._label || " unknown promise"));
            !r && o && (r = !0, b(t, o));
        }, t);
    }
    function d(t, n) {
        n._state === Q ? m(t, n._result) : n._state === R ? b(t, n._result) : w(n, void 0, function(n) {
            return v(t, n);
        }, function(n) {
            return b(t, n);
        });
    }
    function _(t, n, r) {
        n.constructor === t.constructor && r === s && n.constructor.resolve === u ? d(t, n) : r === V ? b(t, V.error) : void 0 === r ? m(t, n) : e(r) ? p(t, n, r) : m(t, n);
    }
    function v(t, e) {
        t === e ? b(t, f()) : n(e) ? _(t, e, l(e)) : m(t, e);
    }
    function y(t) {
        t._onerror && t._onerror(t._result), g(t);
    }
    function m(t, n) {
        t._state === J && (t._result = n, t._state = Q, 0 !== t._subscribers.length && L(g, t));
    }
    function b(t, n) {
        t._state === J && (t._state = R, t._result = n, L(y, t));
    }
    function w(t, n, e, r) {
        var o = t._subscribers, i = o.length;
        t._onerror = null, o[i] = n, o[i + Q] = e, o[i + R] = r, 0 === i && t._state && L(g, t);
    }
    function g(t) {
        var n = t._subscribers, e = t._state;
        if (0 !== n.length) {
            for (var r = void 0, o = void 0, i = t._result, s = 0; s < n.length; s += 3) r = n[s], 
            o = n[s + e], r ? E(e, r, o, i) : o(i);
            t._subscribers.length = 0;
        }
    }
    function A() {
        this.error = null;
    }
    function S(t, n) {
        try {
            return t(n);
        } catch (t) {
            return X.error = t, X;
        }
    }
    function E(t, n, r, o) {
        var i = e(r), s = void 0, u = void 0, c = void 0, f = void 0;
        if (i) {
            if ((s = S(r, o)) === X ? (f = !0, u = s.error, s = null) : c = !0, n === s) return void b(n, a());
        } else s = o, c = !0;
        n._state !== J || (i && c ? v(n, s) : f ? b(n, u) : t === Q ? m(n, s) : t === R && b(n, s));
    }
    function j(t, n) {
        try {
            n(function(n) {
                v(t, n);
            }, function(n) {
                b(t, n);
            });
        } catch (n) {
            b(t, n);
        }
    }
    function T() {
        return Z++;
    }
    function x(t) {
        t[I] = Z++, t._state = void 0, t._result = void 0, t._subscribers = [];
    }
    function M(t, n) {
        this._instanceConstructor = t, this.promise = new t(c), this.promise[I] || x(this.promise), 
        q(n) ? (this._input = n, this.length = n.length, this._remaining = n.length, this._result = new Array(this.length), 
        0 === this.length ? m(this.promise, this._result) : (this.length = this.length || 0, 
        this._enumerate(), 0 === this._remaining && m(this.promise, this._result))) : b(this.promise, C());
    }
    function C() {
        return new Error("Array Methods must be provided an Array");
    }
    function O() {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
    }
    function P() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    }
    function k(t) {
        this[I] = T(), this._result = this._state = void 0, this._subscribers = [], c !== t && ("function" != typeof t && O(), 
        this instanceof k ? j(this, t) : P());
    }
    var Y = void 0, q = Y = Array.isArray ? Array.isArray : function(t) {
        return "[object Array]" === Object.prototype.toString.call(t);
    }, D = 0, F = void 0, K = void 0, L = function(t, n) {
        G[D] = t, G[D + 1] = n, 2 === (D += 2) && (K ? K(i) : H());
    }, N = "undefined" != typeof window ? window : void 0, U = N || {}, W = U.MutationObserver || U.WebKitMutationObserver, z = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process), B = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, G = new Array(1e3), H = void 0;
    H = z ? function() {
        return process.nextTick(i);
    } : W ? function() {
        var t = 0, n = new W(i), e = document.createTextNode("");
        return n.observe(e, {
            characterData: !0
        }), function() {
            e.data = t = ++t % 2;
        };
    }() : B ? function() {
        var t = new MessageChannel();
        return t.port1.onmessage = i, function() {
            return t.port2.postMessage(0);
        };
    }() : void 0 === N && "function" == typeof require ? function() {
        try {
            var t = require("vertx");
            return F = t.runOnLoop || t.runOnContext, r();
        } catch (t) {
            return o();
        }
    }() : o();
    var I = Math.random().toString(36).substring(16), J = void 0, Q = 1, R = 2, V = new A(), X = new A(), Z = 0;
    return M.prototype._enumerate = function() {
        for (var t = this.length, n = this._input, e = 0; this._state === J && e < t; e++) this._eachEntry(n[e], e);
    }, M.prototype._eachEntry = function(t, n) {
        var e = this._instanceConstructor, r = e.resolve;
        if (r === u) {
            var o = l(t);
            if (o === s && t._state !== J) this._settledAt(t._state, n, t._result); else if ("function" != typeof o) this._remaining--, 
            this._result[n] = t; else if (e === k) {
                var i = new e(c);
                _(i, t, o), this._willSettleAt(i, n);
            } else this._willSettleAt(new e(function(n) {
                return n(t);
            }), n);
        } else this._willSettleAt(r(t), n);
    }, M.prototype._settledAt = function(t, n, e) {
        var r = this.promise;
        r._state === J && (this._remaining--, t === R ? b(r, e) : this._result[n] = e), 
        0 === this._remaining && m(r, this._result);
    }, M.prototype._willSettleAt = function(t, n) {
        var e = this;
        w(t, void 0, function(t) {
            return e._settledAt(Q, n, t);
        }, function(t) {
            return e._settledAt(R, n, t);
        });
    }, k.all = function(t) {
        return new M(this, t).promise;
    }, k.race = function(t) {
        var n = this;
        return new n(q(t) ? function(e, r) {
            for (var o = t.length, i = 0; i < o; i++) n.resolve(t[i]).then(e, r);
        } : function(t, n) {
            return n(new TypeError("You must pass an array to race."));
        });
    }, k.resolve = u, k.reject = function(t) {
        var n = new this(c);
        return b(n, t), n;
    }, k._setScheduler = function(t) {
        K = t;
    }, k._setAsap = function(t) {
        L = t;
    }, k._asap = L, k.prototype = {
        constructor: k,
        then: s,
        catch: function(t) {
            return this.then(null, t);
        }
    }, k.Promise = k, k;
});