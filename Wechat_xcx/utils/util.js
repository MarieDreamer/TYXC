function t(t) {
    var e = t.pathname, n = t.data, i = t.reqtype, u = new Date().getTime() + 6e5 + "", c = 0, s = getApp();
    s && s.globalData.userInfo && s.globalData.userInfo.userid && (c = s.globalData.userInfo.userid);
    var p = r.Base64.encode(e + "_" + u + "_" + c);
    return new a(function(t, a) {
        wx.request({
            url: o.host + "/" + e,
            data: n,
            header: {
                "content-type": "application/json",
                token: p,
                source: "YiNianXiaoChengXu"
            },
            method: i || "GET",
            success: function(e) {
                t(e.data);
            },
            fail: function(t) {
                a(t);
            }
        });
    });
}

function e(t) {
    return (t = t.toString())[1] ? t : "0" + t;
}

function n(t, e) {
    return Math.floor(Math.random() * (e - t + 1) + t);
}

var a = require("./promise.js"), o = require("./api.js"), r = require("./base64.js");

module.exports = {
    formatTimeWithSecond: function(t) {
        var n = t.getFullYear(), a = t.getMonth() + 1, o = t.getDate(), r = t.getHours(), i = t.getMinutes(), u = t.getSeconds();
        return [ n, a, o ].map(e).join("-") + " " + [ r, i, u ].map(e).join(":");
    },
    formatTime: function(t) {
        var n = t.getFullYear(), a = t.getMonth() + 1, o = t.getDate();
        t.getHours(), t.getMinutes(), t.getSeconds();
        return [ n, a, o ].map(e).join("-");
    },
    wxpromise: function(t) {
        return function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return new a(function(n, a) {
                e.success = function(t) {
                    n(t);
                }, e.fail = function(t) {
                    a(t);
                }, t(e);
            });
        };
    },
    wxreq: t,
    wxRequest: function(t) {
        var e = t.pathname, n = t.data, r = t.reqtype;
        return new a(function(t, a) {
            wx.request({
                url: o.host + e,
                data: n,
                method: r || "GET",
                success: function(e) {
                    t(e.data);
                },
                fail: function(t) {
                    a(t);
                }
            });
        });
    },
    wxreq_test: function(t) {
        var e = t.pathname, n = t.data, r = t.reqtype;
        return new a(function(t, a) {
            wx.request({
                url: o.host_test + "/" + e,
                data: n,
                method: r || "GET",
                success: function(e) {
                    t(e.data);
                },
                fail: function(t) {
                    a(t);
                }
            });
        });
    },
    sendData: function(t, e) {
        wx.request({
            url: "https://api.zhuiyinanian.cn/md.php",
            data: {
                uid: t,
                value: e
            }
        });
    },
    sendFormId: function(t, e) {
        wx.request({
            url: o.host + "/YinianProject/formId/saveFormId",
            data: {
                userId: t,
                formId: e
            }
        });
    },
    unique1: function(t) {
        return Array.from(new Set(t));
    },
    randomNum: n,
    timeRest: function(t) {
        var t = t.replace(/-/g, "/"), e = Date.parse(new Date(t));
        e /= 1e3;
        var n = new Date().getTime(), a = parseInt(n / 1e3) - parseInt(e);
        return 0 == a ? "刚刚" : a > 0 && a < 3600 ? Math.ceil(a / 60) + "分钟前" : a >= 3600 && a < 86400 ? Math.floor(a / 3600) + "小时前" : a >= 86400 && a < 259200 ? Math.floor(a / 86400) + "天前" : t.slice(0, 4) + "." + t.slice(5, 7) + "." + t.slice(8, 10);
    },
    isInArray: function(t, e) {
        for (var n = 0; n < e.length; n++) if (t == e[n]) return !0;
        return !1;
    },
    getAuthPic: function(e, n, a) {
        t({
            pathname: "YinianProject/count/getAllImg",
            data: {
                groupId: n,
                pageCode: e,
                port: getApp().globalData.port
            }
        }).then(function(t) {
            0 == t.code && "function" == typeof a && a(t.data[0]);
        });
    },
    getQrCodeMakeAuth: function(e) {
        t({
            pathname: "YinianProject/album/getQrCodeMakeAuth",
            data: {}
        }).then(function(t) {
            0 == t.code && "function" == typeof e && e(t.data[0]);
        });
    },
    countOperation: function(e, n, a, o, r) {
        t({
            pathname: "YinianProject/count/countOperation",
            data: {
                operation: e,
                groupId: n = n || 0,
                imgUrl: o,
                userId: a = a || 0,
                remark: r = r || "",
                port: getApp().globalData.port
            }
        });
    },
    countLoversOperation: function(e, a, o, r, i) {
        var u = wx.getStorageSync("uidStr");
        if (o) ; else if (u) o = u; else {
            var c = "uid_" + n(1e15, 2e15);
            o = c, wx.setStorageSync("uidStr", c);
        }
        a = a || 0, i = i || 0, t({
            pathname: "YinianProject/count/countLoversOperation",
            data: {
                operation: e,
                groupId: a,
                userId: o,
                admin: r,
                port: getApp().globalData.port
            }
        });
    },
    joinSpacialActivity: function(e) {
        e.activitySpacialId = 1, t({
            pathname: "YinianProject/activitySpacial/joinSpacialActivity",
            data: e
        });
    },
    formatNumber: e
};