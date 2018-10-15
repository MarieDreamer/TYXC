var t = getApp(), e = require("../../utils/util.js"), o = require("../../utils/albumsjump.js").albumsjump;

Page({
    data: {
        startAuthPic: "http://7xlmtr.com1.z0.glb.clouddn.com/alertAuth_lovers_group_201804111732.png"
    },
    onLoad: function(o) {
        console.log(o);
        var r = this;
        if (o.scene) {
            var i = decodeURIComponent(o.scene);
            if (o = {}, i.length > 0) for (var a = i.split("&"), s = 0; s < a.length; s++) o[a[s].split("=")[0]] = a[s].split("=")[1];
        }
        t.stat.statpv({
            route: this.route,
            options: o
        }), this.zj = o.zj || "", o.version && (this.version = o.version), o.port && (this.port = o.port, 
        t.globalData.port = o.port), o.fromUserID && (this.fromUserID = o.fromUserID), o.fromSpaceID && (this.fromSpaceID = o.fromSpaceID), 
        o.fromEventID && (this.fromEventID = o.fromEventID), e.getAuthPic("lovers_group_auth", 0, function(t) {
            r.setData({
                startAuthPic: t.belowImgUrl
            });
        });
    },
    onShow: function() {
        this.isAuth = !1;
    },
    startauth: function(o) {
        var r = this.version ? this.version : "", i = this.port ? this.port : "", a = this.fromUserID ? this.fromUserID : 0, s = this.fromSpaceID ? this.fromSpaceID : 0, n = this.fromEventID ? this.fromEventID : 0, u = this;
        this.isAuth || (this.isAuth = !0, e.countLoversOperation("loversAuth", 0, 0, 0, i), 
        t.isNoConfirm = "cancel", t.getUserInfo(function(e) {
            if ("新用户" != e.nickName) u.afterAuth(e, i); else {
                if ("getUserInfo:fail auth deny" == o.detail.errMsg) return wx.showModal({
                    title: "提示",
                    content: "只有授权之后才能使用相册哦！",
                    showCancel: !1
                }), void (u.isAuth = !1);
                t.newAuthfunction(function(t) {
                    "新用户" != t.nickName ? u.afterAuth(t, i) : u.isAuth = !1;
                }, r, i, a, s, n, o.detail, "", function() {});
            }
        }, r, i, a, s, n, "loversauth", function() {}));
    },
    afterAuth: function(r, i) {
        var a = this;
        e.countLoversOperation("loversIsConfirm", 0, 0, 0, i), a.makeGroup(r.userid, function(e, r) {
            wx.chooseImage({
                count: 9,
                sizeType: [ "original" ],
                sourceType: [ "album" ],
                success: function(i) {
                    console.log(i);
                    var a = i.tempFilePaths, s = e;
                    t.upState = 2, t.fromUp = "pic", t.upObj = {
                        mainIdStr: s,
                        formID: "",
                        place: "",
                        content: "",
                        picarr: a,
                        attentionMember: "",
                        publishedTime: ""
                    }, o({
                        groupNewType: r,
                        data: {
                            lastPage: "loversauth",
                            from: "grouplist",
                            groupid: s,
                            makeFrom: "newlovers"
                        },
                        navigator: "redirect"
                    });
                },
                fail: function(t) {
                    o({
                        groupNewType: r,
                        data: {
                            lastPage: "loversauth",
                            from: "grouplist",
                            groupid: e,
                            makeFrom: "newlovers",
                            isconfirm: "cancel"
                        },
                        navigator: "redirect"
                    });
                }
            });
        });
    },
    closeAuth: function() {
        var t = this.port ? this.port : "";
        e.countLoversOperation("closeAuth", 0, 0, 0, t), wx.navigateTo({
            url: "/pages/loverscloseauth/loverscloseauth"
        });
    },
    makeGroup: function(o, r) {
        var i = this;
        i.isMake || (i.isMake = !0, wx.showToast({
            title: "正在获取数据...",
            icon: "loading",
            duration: 15e3,
            mask: !0
        }), e.wxreq({
            pathname: "YinianProject/album/createDefaultLoversAlbum",
            data: {
                userId: o,
                source: "小程序",
                createName: t.globalData.userInfo.nickName
            }
        }).then(function(t) {
            wx.hideToast(), 0 == t.code ? (wx.hideToast(), i.sendZjData(o), "function" == typeof r && r(t.data[0].groupid, t.data[0].groupNewType)) : wx.reLaunch({
                url: "/pages/index/index"
            });
        }).catch(function(t) {
            wx.reLaunch({
                url: "/pages/index/index"
            }), console.log(t);
        }));
    },
    sendZjData: function(t) {
        var o = this;
        e.wxreq({
            pathname: "YinianProject/zhiWeiApi/postToApi",
            data: {
                zj: o.zj,
                userId: t
            }
        });
    }
});