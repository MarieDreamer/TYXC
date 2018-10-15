var t = getApp();

require("../../utils/util.js");

Page({
    data: {
        startAuthPicYinian: "http://oibl5dyji.bkt.clouddn.com/0507_minelogin_yinian.png",
        pagetype: "mine"
    },
    onLoad: function(i) {
        t.stat.statpv({
            route: this.route,
            options: i
        }), t.getUseinfo, "loveactive" == i.f && (this.setData({
            pagetype: "activity"
        }), this.f = i.f, i.version && (this.version = i.version), i.port && (this.port = i.port, 
        t.globalData.port = i.port, this.setData({
            port: i.port
        })), i.fromUserID && (this.fromUserID = i.fromUserID), i.fromSpaceID && (this.fromSpaceID = i.fromSpaceID), 
        i.fromEventID && (this.fromEventID = i.fromEventID), this.na = this.version ? this.version : "", 
        this.nb = this.port ? this.port : "", this.nc = this.fromUserID ? this.fromUserID : 0, 
        this.nd = this.fromSpaceID ? this.fromSpaceID : 0, this.ne = this.fromEventID ? this.fromEventID : 0, 
        t.getUserInfo(function(t) {
            "新用户" != t.nickName && wx.redirectTo({
                url: "/pages/loversalbum/loveactive/index"
            });
        }, this.na, this.nb, this.nc, this.nd, this.ne, ""));
    },
    onReady: function() {},
    userInfoHandler: function(i) {
        var e = this;
        "getUserInfo:fail auth deny" == i.detail.errMsg ? wx.switchTab({
            url: "/pages/index/index"
        }) : (wx.showToast({
            title: "正在登录"
        }), t.newAuthfunction(function(t) {
            wx.hideToast(), "新用户" != t.nickName ? (e.f = "loveactive") ? wx.redirectTo({
                url: "/pages/loversalbum/loveactive/index"
            }) : wx.switchTab({
                url: "/pages/myself/myself"
            }) : wx.showToast({
                title: "登录失败!"
            });
        }, "", "", "", "", "", i.detail, ""));
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {}
});