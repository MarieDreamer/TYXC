var t = getApp(), e = require("../../utils/util.js"), o = require("../../utils/albumsjump.js").albumsjump;

Page({
    data: {
        startAuthPic: "http://oibl5dyji.bkt.clouddn.com/0408_default.png"
    },
    onLoad: function(o) {
        t.stat.statpv({
            route: this.route,
            options: o
        });
        var i = this;
        o.version && (this.version = o.version), o.port && (this.port = o.port, t.globalData.port = o.port), 
        o.fromUserID && (this.fromUserID = o.fromUserID), o.fromSpaceID && (this.fromSpaceID = o.fromSpaceID), 
        o.fromEventID && (this.fromEventID = o.fromEventID), this.toPage = o.toPage || "home", 
        this.toGroupid = o.groupid || 0, this.groupNewType = o.type, this.setData({
            toPage: this.toPage
        }), "home" === this.toPage ? this.authFrom = "alertAuth_home" : "viewscoll" === this.toPage ? this.authFrom = "alertAuth_createAlbum" : "toGroup" === this.toPage ? this.authFrom = "alertAuth_enterAlbum" : this.authFrom = "alertAuth", 
        e.getAuthPic(i.authFrom, 0, function(t) {
            i.setData({
                startAuthPic: t.belowImgUrl
            });
        });
    },
    onShow: function() {
        this.isAuth = !1;
    },
    startauth: function(o) {
        var i = this.version ? this.version : "", r = this.port ? this.port : "", a = this.fromUserID ? this.fromUserID : 0, s = this.fromSpaceID ? this.fromSpaceID : 0, u = this.fromEventID ? this.fromEventID : 0, h = "newauth_" + this.toPage, n = this;
        this.isAuth || (this.isAuth = !0, e.countOperation(n.authFrom, 0, 0, ""), t.getUserInfo(function(e) {
            if ("新用户" != e.nickName) n.afterAuth(e); else {
                if ("getUserInfo:fail auth deny" == o.detail.errMsg) return wx.showModal({
                    title: "提示",
                    content: "只有授权之后才能使用相册哦！",
                    showCancel: !1
                }), void (n.isAuth = !1);
                t.newAuthfunction(function(t) {
                    "新用户" != t.nickName ? n.afterAuth(t) : n.isAuth = !1;
                }, i, r, a, s, u, o.detail, "", function() {});
            }
        }, i, r, a, s, u, h, function() {}));
    },
    afterAuth: function(t) {
        var e = this;
        if ("home" === e.toPage) wx.reLaunch({
            url: "/pages/index/index"
        }); else if ("viewscoll" === e.toPage) e.makeGroup(t.userid); else if ("toGroup" === e.toPage) if (e.toGroupid) {
            var i = e.groupNewType;
            o({
                groupNewType: i,
                data: {
                    lastPage: "newauth",
                    from: "grouplist",
                    groupid: e.toGroupid
                },
                navigator: "redirect"
            });
        } else wx.reLaunch({
            url: "/pages/index/index"
        });
    },
    makeGroup: function(t) {
        var i = this;
        i.isMake || (i.isMake = !0, wx.showToast({
            title: "正在获取数据...",
            icon: "loading",
            duration: 15e3,
            mask: !0
        }), e.wxreq({
            pathname: "YinianProject/album/createDefaultAlbum",
            data: {
                userId: t,
                source: "小程序"
            }
        }).then(function(t) {
            if (wx.hideToast(), 0 == t.code) {
                var e = t.data[0].groupNewType;
                o({
                    groupNewType: e,
                    data: {
                        lastPage: "newauth",
                        from: "grouplist",
                        groupid: t.data[0].groupid
                    },
                    navigator: "redirect"
                });
            } else wx.reLaunch({
                url: "/pages/index/index"
            });
        }).catch(function(t) {
            wx.reLaunch({
                url: "/pages/index/index"
            }), console.log(t);
        }));
    }
});