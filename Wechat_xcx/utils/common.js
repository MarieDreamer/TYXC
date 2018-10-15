module.exports = {
    host: "http://192.168.0.111:8080",
    hasUserId: function() {
        wx.getStorageSync("userInfo").userid || wx.showModal({
            title: "错误",
            content: "获取用户ID失败",
            showCancel: !1,
            success: function(t) {
                t.confirm && wx.switchTab({
                    url: "/pages/index/index"
                });
            }
        });
    },
    getCurrentPageUrlWithArgs: function() {
        var t = getCurrentPages(), e = t[t.length - 1], n = e.route, r = e.options, s = n + "?";
        for (var o in r) s += o + "=" + r[o] + "&";
        return s = s.substring(0, s.length - 1);
    }
};