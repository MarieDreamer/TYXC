var t = getApp(), e = require("../../utils/util.js"), o = require("../../utils/albumsjump.js").albumsjump;

Page({
    data: {
        startAuthPic: "http://7xlmtr.com1.z0.glb.clouddn.com/timeAxisBlankPicture_20180412.png"
    },
    onLoad: function(o) {
        t.stat.statpv({
            route: this.route,
            options: o
        });
        var i = this;
        o.version && (this.version = o.version), o.port && (this.port = o.port, t.globalData.port = o.port), 
        o.fromUserID && (this.fromUserID = o.fromUserID), o.fromSpaceID && (this.fromSpaceID = o.fromSpaceID), 
        o.fromEventID && (this.fromEventID = o.fromEventID), e.getAuthPic("loverscloseauth", 0, function(t) {
            i.setData({
                startAuthPic: t.belowImgUrl
            });
        });
    },
    onShow: function() {
        this.isAuth = !1;
    },
    startauth: function(e) {
        var o = this.version ? this.version : "", i = this.port ? this.port : "", r = this.fromUserID ? this.fromUserID : 0, s = this.fromSpaceID ? this.fromSpaceID : 0, a = this.fromEventID ? this.fromEventID : 0, n = this;
        this.isAuth || (this.isAuth = !0, t.getUserInfo(function(u) {
            if ("新用户" != u.nickName) n.makeGroup(u.userid); else {
                if ("getUserInfo:fail auth deny" == e.detail.errMsg) return wx.showModal({
                    title: "提示",
                    content: "只有授权之后才能使用相册哦！",
                    showCancel: !1
                }), void (n.isAuth = !1);
                t.newAuthfunction(function(t) {
                    "新用户" != t.nickName ? n.makeGroup(t.userid) : n.isAuth = !1;
                }, o, i, r, s, a, e.detail, "", function() {});
            }
        }, o, i, r, s, a, "loverscloseauth", function() {}));
    },
    makeGroup: function(i) {
        var r = this;
        r.isMake || (r.isMake = !0, wx.showToast({
            title: "正在获取数据...",
            icon: "loading",
            duration: 15e3,
            mask: !0
        }), e.wxreq({
            pathname: "YinianProject/album/createDefaultLoversAlbum",
            data: {
                userId: i,
                source: "小程序",
                createName: t.globalData.userInfo.nickName
            }
        }).then(function(t) {
            if (wx.hideToast(), 0 == t.code) {
                var e = t.data[0].groupNewType;
                o({
                    groupNewType: e,
                    data: {
                        lastPage: "loverscloseauth",
                        from: "grouplist",
                        groupid: t.data[0].groupid,
                        makeFrom: "newlovers"
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