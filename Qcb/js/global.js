function t(t, e) {
    return (Array(e).join("0") + t).slice(-e);
}

function e(t, e) {
    wx.showNavigationBarLoading(), new o({
        key: t.globalData.MapKey
    }).reverseGeocoder({
        location: {
            latitude: e.latitude,
            longitude: e.longitude
        },
        success: function(e) {
            t.globalData.address = e.result.address_component, t.globalData.address.address = e.result.address;
        },
        complete: function() {
            wx.hideNavigationBarLoading();
        }
    });
}

var o = require("qqmap-wx-jssdk.js"), n = require("es6-promise.js");

module.exports = {
    checkMobile: function(t) {
        return !!/(^1[3|4|5|7|8][0-9]{9}$)/.test(t);
    },
    GetRTime: function(e) {
        e = e.replace(/-/g, "/");
        var o = new Date(e), n = new Date(), r = o.getTime() - n.getTime();
        if (r < 0) return 0;
        var a = t(Math.floor(r / 1e3 / 60 / 60 / 24), 2), i = t(Math.floor(r / 1e3 / 60 / 60 % 24), 2), u = t(Math.floor(r / 1e3 / 60 % 60), 2), l = t(Math.floor(r / 1e3 % 60), 2);
        return l >= 0 ? new Array(a, i, u, l) : void 0;
    },
    GetRTs: function(e) {
        if ((e *= 1e3) < 0) return 0;
        var o = t(Math.floor(e / 1e3 / 60 / 60 / 24), 2), n = t(Math.floor(e / 1e3 / 60 / 60 % 24), 2), r = t(Math.floor(e / 1e3 / 60 % 60), 2), a = t(Math.floor(e / 1e3 % 60), 2);
        return a >= 0 ? new Array(o, n, r, a) : void 0;
    },
    fomatFloat: function(t, e) {
        return Math.round(t * Math.pow(10, e)) / Math.pow(10, e);
    },
    MathRand: function(t) {
        for (var e = "", o = 0; o < t; o++) e += Math.floor(10 * Math.random());
        return e;
    },
    CurentTime: function(t) {
        var e = new Date(), o = e.getFullYear(), n = e.getMonth() + 1, r = e.getDate(), a = e.getHours(), i = (e.getMinutes() + t) % 60;
        (e.getMinutes() + t) / 60 > 1 && (a += Math.floor((e.getMinutes() + t) / 60));
        var u = o + "-";
        return n < 10 && (u += "0"), u += n + "-", r < 10 && (u += "0"), u += r + " ", a < 10 && (u += "0"), 
        u += a + ":", i < 10 && (u += "0"), u += i;
    },
    getgps: function(t) {
        var o = {};
        return wx.showToast({
            title: "加载地址中...",
            mask: !1,
            icon: "loading",
            duration: 1e6
        }), wx.getLocation({
            type: "wgs84",
            success: function(n) {
                wx.hideToast(), o.latitude = n.latitude, o.longitude = n.longitude, t.globalData.loc = o, 
                e(t, o);
            }
        }), o;
    },
    isBlank: function(t) {
        return "[object Undefined]" === Object.prototype.toString.call(t) || ("[object String]" === Object.prototype.toString.call(t) || "[object Array]" === Object.prototype.toString.call(t) ? 0 == t.length : "[object Object]" !== Object.prototype.toString.call(t) || "{}" == JSON.stringify(t));
    },
    wxPromisify: function(t) {
        return function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return new n(function(o, n) {
                e.success = function(t) {
                    o(t);
                }, e.fail = function(t) {
                    n(t);
                }, t(e);
            });
        };
    }
};