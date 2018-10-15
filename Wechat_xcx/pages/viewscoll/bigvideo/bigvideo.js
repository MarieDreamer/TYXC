var t = getApp();

Page({
    data: {
        videourl: ""
    },
    onLoad: function(o) {
        t.stat.statpv({
            route: this.route,
            options: o
        });
        var a = wx.getStorageSync("videourl");
        this.setData({
            videourl: a
        });
    },
    onShow: function() {
        t.fromS = 1;
    }
});