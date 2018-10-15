function e(e, t, o) {
    return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = o, e;
}

var t;

require("/js/global.js");

App({
    onLaunch: function() {
        this.getSystemInfo(), this.setGlobal(), setInterval(this.GetSsc, 2e4);
    },
    getSystemInfo: function() {
        var e = this;
        wx.getSystemInfo({
            success: function(t) {
                e.systemInfo = t;
            }
        });
    },
    checkSession: function(e) {
        var t = this;
        return new Promise(function(o, n) {
            wx.checkSession({
                success: function(e) {
                    o();
                },
                fail: function(n) {
                    t.globalData.userInfo.user_id = "", t.login().then(function(t) {
                        "function" == typeof e && e();
                    }), o();
                },
                complete: function() {}
            });
        });
    },
    login: function() {
        var e, t, o, n = this;
        return new Promise(function(i, s) {
            "" == n.globalData.userInfo.user_id || null == n.globalData.userInfo.user_id ? wx.login({
                success: function(s) {
                    wx.getUserInfo({
                        success: function(a) {
                            e = a.userInfo.nickName, t = a.userInfo.gender, o = a.userInfo.avatarUrl, s.code && n.sendNoRequest({
                                url: "/index.php?m=Mobile&c=LoginApi&a=login&oauth=weixin",
                                data: {
                                    code: s.code,
                                    nickName: e,
                                    gender: t,
                                    avatarUrl: o
                                },
                                success: function(e) {
                                    n.setSessionid(e.session_id), 1 == e.status ? (n.setSessionKey(e.session_key), n.setUserInfoStorage(e.user)) : 2 == e.status ? n.setUserInfoStorage(e.user) : wx.showToast({
                                        title: "获取您的用户信息授权失败",
                                        icon: "none",
                                        duration: 3e3
                                    }), i();
                                },
                                complete: function(e) {}
                            });
                        },
                        fail: function(e) {
                            n.globalData.tUrl = "/pages/index/index", wx.redirectTo({
                                url: "/pages/login/login"
                            });
                        },
                        complete: function(e) {
                            i();
                        }
                    });
                }
            }) : i();
        });
    },
    loginBindParent: function(e) {
        this.sendNoRequest({
            url: "/index.php?m=Mobile&c=Index&a=usbind&t=" + Math.random(),
            data: {
                uid: e
            },
            method: "POST",
            success: function(e) {
                console.log(e);
            },
            complete: function(e) {
                console.log(e);
            }
        });
    },
    ShareBonus: function(e) {
        this.sendNoRequest({
            url: "/index.php?m=Mobile&c=Index&a=sharebonus&t=" + Math.random(),
            data: {
                uid: e
            },
            method: "POST"
        });
    },
    sendRequest: function(e, t) {
        var o, n = this, i = e.data || {}, s = e.header;
        o = t ? t + e.url : this.globalData.siteBaseUrl + e.url;
        var a = n.getSessionid();
        e.method && ("post" == e.method.toLowerCase() && (i = this.modifyPostParam(i), s = "" != a && null != a ? s || {
            "content-type": "application/x-www-form-urlencoded;",
            Cookie: "PHPSESSID=" + a
        } : s || {
            "content-type": "application/x-www-form-urlencoded"
        }), e.method = e.method.toUpperCase()), e.hideLoading || this.showToast({
            title: "请求中...",
            icon: "loading",
            duration: 5e3
        }), s = "" != a && null != a ? s || {
            "content-type": "application/json",
            Cookie: "PHPSESSID=" + a
        } : s || {
            "content-type": "application/json"
        }, wx.request({
            url: o,
            data: i,
            method: e.method || "GET",
            header: s,
            success: function(t) {
                t.statusCode && 200 != t.statusCode ? n.showModal({
                    content: "" + t.errMsg
                }) : "function" == typeof e.success && e.success(t.data);
            },
            fail: function(t) {
                "function" == typeof e.fail && e.fail(t.data);
            },
            complete: function(t) {
                n.hideToast(), "" != a && null != a || n.setSessionid(t.data.session_id), "function" == typeof e.complete && e.complete(t.data);
            }
        });
    },
    sendNoRequest: function(e, t) {
        var o, n = this, i = e.data || {}, s = e.header;
        o = t ? t + e.url : this.globalData.siteBaseUrl + e.url;
        var a = n.getSessionid();
        e.method && ("post" == e.method.toLowerCase() && (i = this.modifyPostParam(i), s = "" != a && null != a ? s || {
            "content-type": "application/x-www-form-urlencoded;",
            Cookie: "PHPSESSID=" + a
        } : s || {
            "content-type": "application/x-www-form-urlencoded"
        }), e.method = e.method.toUpperCase()), s = "" != a && null != a ? s || {
            "content-type": "application/json",
            Cookie: "PHPSESSID=" + a
        } : s || {
            "content-type": "application/json"
        }, wx.request({
            url: o,
            data: i,
            method: e.method || "GET",
            header: s,
            success: function(t) {
                t.statusCode && 200 != t.statusCode || "function" == typeof e.success && e.success(t.data);
            },
            fail: function(t) {
                "function" == typeof e.fail && e.fail(t.data);
            },
            complete: function(t) {
                "" != a && null != a || n.setSessionid(t.data.session_id), "function" == typeof e.complete && e.complete(t.data);
            }
        });
    },
    modifyPostParam: function(e) {
        var t = "", o = void 0, n = void 0, i = void 0, s = void 0, a = void 0, c = void 0;
        for (o in e) if ((n = e[o]) instanceof Array) for (c = 0; c < n.length; ++c) s = n[c], 
        (a = {})[o + "[" + c + "]"] = s, t += this.modifyPostParam(a) + "&"; else if (n instanceof Object) for (i in n) s = n[i], 
        (a = {})[o + "[" + i + "]"] = s, t += this.modifyPostParam(a) + "&"; else void 0 !== n && null !== n && (t += encodeURIComponent(o) + "=" + encodeURIComponent(n) + "&");
        return t.length ? t.substr(0, t.length - 1) : t;
    },
    showToast: function(e) {
        wx.showToast({
            title: e.title,
            icon: e.icon,
            duration: e.duration || 500,
            success: function(t) {
                "function" == typeof e.success && e.success(t);
            },
            fail: function(t) {
                "function" == typeof e.fail && e.fail(t);
            },
            complete: function(t) {
                "function" == typeof e.complete && e.complete(t);
            }
        });
    },
    hideToast: function() {
        wx.hideToast();
    },
    showModal: function(e) {
        wx.showModal({
            title: e.title || "温馨提示",
            content: e.content,
            showCancel: e.showCancel || !1,
            cancelText: e.cancelText || "取消",
            cancelColor: e.cancelColor || "#000000",
            confirmText: e.confirmText || "确定",
            confirmColor: e.confirmColor || "#3CC51F",
            success: function(t) {
                t.confirm ? "function" == typeof e.confirm && e.confirm(t) : "function" == typeof e.cancel && e.cancel(t);
            },
            fail: function(t) {
                "function" == typeof e.fail && e.fail(t);
            },
            complete: function(t) {
                "function" == typeof e.complete && e.complete(t);
            }
        });
    },
    Wxpay: function(e, t, o, n) {
        var i = this;
        wx.requestPayment({
            timeStamp: t.timeStamp,
            nonceStr: t.nonceStr,
            package: t.package,
            signType: "MD5",
            paySign: t.paySign,
            success: function(e) {
                i.showToast({
                    title: "支付成功",
                    icon: "success",
                    duration: 3e3,
                    success: function() {
                        "nav" == n ? wx.navigateTo({
                            url: o
                        }) : wx.redirectTo({
                            url: o
                        });
                    }
                });
            },
            fail: function(e) {
                wx.redirectTo({
                    url: "/pages/orderlist/orderlist"
                });
            }
        });
    },
    GetSsc: function() {
        this.sendNoRequest({
            url: "/index.php?m=Mobile&c=Index&a=getSsc&t=" + Math.random()
        });
    },
    setUserInfoStorage: function(e) {
        for (var t in e) this.globalData.userInfo[t] = e[t];
        wx.setStorageSync("userInfo", this.globalData.userInfo);
    },
    getUserInfo: function() {
        return this.globalData.userInfo;
    },
    getAppTitle: function() {
        return this.globalData.appTitle;
    },
    getAppDescription: function() {
        return this.globalData.appDescription;
    },
    setLocationInfo: function(e) {
        this.globalData.locationInfo = e;
    },
    getLocationInfo: function() {
        return this.globalData.locationInfo;
    },
    getSiteBaseUrl: function() {
        return this.globalData.siteBaseUrl;
    },
    getSessionKey: function() {
        return wx.getStorageSync("session_key");
    },
    setSessionKey: function(e) {
        this.globalData.sessionKey = e, wx.setStorageSync("session_key", e);
    },
    setSessionid: function(e) {
        wx.setStorageSync("session_id", e);
    },
    getSessionid: function() {
        return wx.getStorageSync("session_id");
    },
    getConfig: function() {
        return this.globalData.config;
    },
    setUid: function(e) {
        this.globalData.uid = e, wx.setStorageSync("uid", e);
    },
    getUid: function() {
        return this.globalData.uid;
    },
    setGlobal: function(e) {
        var t = this;
        t.sendNoRequest({
            url: "/index.php?m=Mobile&c=Index&a=getConfig",
            success: function(e) {
                if (1 == e.status) {
                    for (var o in e.config) t.globalData.config[o] = e.config[o];
                    wx.setStorageSync("config", t.globalData.config);
                }
            }
        });
        var o = wx.getStorageSync("userInfo");
        t.setUserInfoStorage(o);
    },
    globalData: (t = {
        tUrl: "",
        isIphoneX: !1,
        userInfo: null,
        config: {}
    }, e(t, "userInfo", {
        cartnum: 0
    }), e(t, "loc", {}), e(t, "address", {}), e(t, "user_id", ""), e(t, "sessionKey", ""), 
    e(t, "siteBaseUrl", "https://cc.hohiw.com"), e(t, "appTitle", "去猜吧"), e(t, "appDescription", "去猜吧"), 
    e(t, "cache_time", 10), e(t, "MapKey", "DBCBZ-MRZR4-I36UM-DG7H5-HRGT3-AOFT6"), t),
    onShow: function() {
        var e = this;
        wx.getSystemInfo({
            success: function(t) {
                -1 != t.model.search("iPhone X") && (e.globalData.isIphoneX = !0);
            }
        });
    }
});