var t = getApp(), e = require("../../utils/util.js");

Page({
    data: {
        resetPic: "http://oibl5dyji.bkt.clouddn.com/0408_default.png"
    },
    onLoad: function(o) {
        t.stat.statpv({
            route: this.route,
            options: o
        });
        var n = this;
        e.getAuthPic("cancelAuth", 0, function(t) {
            n.setData({
                resetPic: t.belowImgUrl
            });
        }), "cancel" === t.isNoConfirm && (e.countLoversOperation("loversNoConfirm", 0, 0, 0), 
        t.isNoConfirm = "");
    },
    onReady: function() {
        wx.reportAnalytics("resetau", {
            clicktime: e.formatTimeWithSecond(new Date())
        });
    },
    onShow: function() {
        wx.getSetting ? wx.getSetting({
            success: function(t) {
                t.authSetting["scope.userInfo"] && wx.navigateBack({
                    delta: 1
                });
            }
        }) : wx.showModal({
            title: "提示",
            content: "忆年小程序需要授权才可使用，请从小程序列表移除本小程序，再重新搜索登录."
        });
    },
    resetau: function() {
        e.countOperation("resetau", 0, 0, ""), wx.openSetting ? wx.openSetting() : wx.showModal({
            title: "提示",
            content: "忆年小程序需要授权才可使用，请从小程序列表移除本小程序，再重新搜索登录."
        });
    }
});