var t = getApp();

Page({
    data: {
        startAuthPicYinian: "http://oibl5dyji.bkt.clouddn.com/0507_minelogin_yinian.png"
    },
    onLoad: function(n) {
        t.stat.statpv({
            route: this.route,
            options: n
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    userInfoHandler: function(n) {
        "getUserInfo:fail auth deny" == n.detail.errMsg ? wx.switchTab({
            url: "/pages/index/index"
        }) : (wx.showToast({
            title: "正在登录"
        }), t.newAuthfunction(function(t) {
            wx.hideToast(), "新用户" != t.nickName ? wx.switchTab({
                url: "/pages/activitypage/activityindex/activityindex"
            }) : wx.showToast({
                title: "登录失败!"
            });
        }, "", "", "", "", "", n.detail, ""));
    }
});