function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, o = function() {
    function t(t, e) {
        for (var o = 0; o < e.length; o++) {
            var n = e[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, n.key, n);
        }
    }
    return function(e, o, n) {
        return o && t(e.prototype, o), n && t(e, n), e;
    };
}(), n = (require("./util.js"), function() {
    function n() {
        t(this, n), this.host = "https://api.zhuiyinanian.com/";
    }
    return o(n, [ {
        key: "statpv",
        value: function(t) {
            var e = Math.floor(1e15 * Math.random() + 1e15) + Date.now(), o = wx.getStorageSync("uidStr");
            o || (o = "uid_" + e, wx.setStorage({
                key: "uidStr",
                data: o
            }));
            var n = wx.getStorageSync("userid"), r = [];
            Object.keys(t.options).forEach(function(e) {
                r.push(e + "=" + t.options[e]);
            });
            var i = 0 == r.length ? t.route : t.route + "?" + r.join("**"), a = getApp().globalData.port ? getApp().globalData.port : 0, u = t.options.groupid || t.options.groupId ? t.options.groupid ? t.options.groupid : t.options.groupId : 0;
            this.request({
                userId: n,
                createUserId: o,
                groupId: u,
                operation: "pv",
                remark: i,
                port: a,
                userLastLoginTime: getApp().enterTime
            });
        }
    }, {
        key: "stathotmall",
        value: function(t) {
            wx.request({
                url: this.host + "YinianProject/count/countFlashSaleOperation",
                data: t,
                method: "GET",
                success: function(t) {},
                fail: function(t) {}
            });
        }
    }, {
        key: "request",
        value: function(t) {
            "object" === (void 0 === t ? "undefined" : e(t)) && (t.port = getApp().globalData.port, 
            t.fromUserId = getApp().globalData.mayDayFromUserid, t.userLastLoginTime = getApp().enterTime, 
            wx.request({
                url: this.host + "YinianProject/count/countOperation",
                data: t,
                method: "GET",
                success: function(t) {},
                fail: function(t) {}
            }));
        }
    }, {
        key: "requestLove",
        value: function(t) {
            "object" === (void 0 === t ? "undefined" : e(t)) && (t.port = getApp().globalData.port, 
            t.userLastLoginTime = getApp().enterTime, wx.request({
                url: this.host + "YinianProject/count/countOperation",
                data: t,
                method: "GET",
                success: function(t) {},
                fail: function(t) {}
            }));
        }
    } ], [ {
        key: "getstatObj",
        value: function() {
            return this.instance || (this.instance = new n()), this.instance;
        }
    } ]), n;
}());

module.exports = n.getstatObj();