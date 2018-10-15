var n = getApp();

require("../../utils/util.js");

Page({
    data: {
        startAuthPicYinian: "http://oibl5dyji.bkt.clouddn.com/0507_minelogin_yinian.png"
    },
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {},
    userInfoHandler: function(i) {
        "getUserInfo:fail auth deny" == i.detail.errMsg ? wx.switchTab({
            url: "/pages/index/index"
        }) : (wx.showToast({
            title: "正在登录"
        }), n.newAuthfunction(function(n) {
            wx.hideToast(), wx.navigateBack({});
        }, "", "", "", "", "", i.detail, ""));
    },
    onHide: function() {},
    onUnload: function() {}
});