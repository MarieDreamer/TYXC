var t = wx.getSystemInfoSync(), e = require("./utils/util.js"), a = require("./utils/stat.js");

App({
    onLaunch: function() {
        this.globalData.userInfo = wx.getStorageSync("userInfo") || null, this.enterTimestamp = new Date().getTime(), 
        this.enterTime = e.formatTimeWithSecond(new Date()), this.getUpState(), this.getCountPeople();
    },
    onHide: function() {},
    onShow: function(t) {
        this.globalData.scene = t.scene;
    },
    stat: a,
    getUpState: function() {
        this.sendValue = 1;
    },
    getshowState: function(t) {
        e.wxreq({
            pathname: "YinianProject/activity/GetMyPhoto",
            data: {
                id: 41
            }
        }).then(function(e) {
            if (0 == e.code) {
                var a = 1 == e.data[0].status;
                "function" == typeof t && t(a);
            }
        });
    },
    newAuthfunction: function(t, a, n, o, i, s, r, u, c) {
        var f = this, l = Date.now(), g = parseInt(wx.getStorageSync("initialDate")), d = !0;
        g ? l && l - g > 6048e5 && (d = !1) : d = !1, this.globalData.userInfo = wx.getStorageSync("userInfo"), 
        this.globalData.userInfo && "新用户" != this.globalData.userInfo.nickName && d ? (f.globalData.userInfo.isnew = "no", 
        "function" == typeof t && t(this.globalData.userInfo)) : e.wxpromise(wx.login)().then(function(e) {
            "function" == typeof c && c(), f.loginfuc(t, {
                iv: r.iv,
                code: e.code,
                encodeData: r.encryptedData,
                source: "小程序",
                version: a,
                port: n,
                fromUserID: o,
                fromSpaceID: i,
                fromEventID: s,
                enterFrom: u
            });
        });
    },
    loginfuc: function(t, a) {
        var n = this;
        e.wxreq({
            pathname: "YinianProject/h5/smallAppLoginAndRegisterRevision",
            data: a
        }).then(function(e) {
            wx.setStorage({
                key: "userid",
                data: e.data[0].userid
            }), n.globalData.userInfo = Object.assign(e.data[0], {
                userid: e.data[0].userid,
                isnew: e.data[0].isNewUser,
                uLockPass: e.data[0].uLockPass,
                openIdFlag: e.data[0].openIdFlag
            }), n.globalData.userInfo.nickName = e.data[0].unickname, wx.setStorage({
                key: "userInfo",
                data: n.globalData.userInfo
            });
            var a = new Date().getTime();
            wx.setStorage({
                key: "initialDate",
                data: a
            }), "function" == typeof t && t(n.globalData.userInfo);
        });
    },
    getUserInfo: function(t, e, a, n, o, i, s, r) {
        var u = this, c = Date.now(), f = parseInt(wx.getStorageSync("initialDate")), l = !0;
        f ? c && c - f > 6048e5 && (l = !1) : l = !1, this.globalData.userInfo = wx.getStorageSync("userInfo"), 
        this.globalData.userInfo && l ? (u.globalData.userInfo.isnew = "no", "function" == typeof t && t(this.globalData.userInfo)) : wx.login({
            success: function(r) {
                var c = {
                    code: r.code,
                    source: "小程序",
                    version: e,
                    port: a,
                    fromUserID: n,
                    fromSpaceID: o,
                    fromEventID: i,
                    enterFrom: s
                };
                wx.getSetting({
                    success: function(e) {
                        e.authSetting["scope.userInfo"] ? wx.getUserInfo({
                            success: function(e) {
                                c.iv = e.iv, c.encodeData = e.encryptedData, u.loginfuc(t, c);
                            }
                        }) : u.loginfuc(t, c);
                    }
                });
            }
        });
    },
    globalData: {
        userInfo: null,
        systemInfo: t,
        pwdState: !0,
        port: "",
        mayDayFromUserid: 0
    },
    getCountPeople: function() {
        e.wxreq({
            pathname: "YinianProject/yinian/getCountPeople",
            data: {}
        }).then(function(t) {
            "success" == t.msg ? wx.setStorage({
                key: "peopleCount",
                data: parseInt(t.data[0].count)
            }) : wx.setStorage({
                key: "peopleCount",
                data: 18e6
            });
        });
    }
});