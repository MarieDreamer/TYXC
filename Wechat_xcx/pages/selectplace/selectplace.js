var a = require("../../utils/amap-wx.js"), t = getApp();

Page({
    data: {},
    onLoad: function(e) {
        t.stat.statpv({
            route: this.route,
            options: e
        });
        var n = this;
        new a.AMapWX({
            key: "ebc8ad3ccdb6bfe66a1e3b1170074bcd",
            fail: function() {}
        }).getPoiAround({
            success: function(a) {
                n.setData({
                    posi: a.poisData
                });
            },
            fail: function() {}
        });
    },
    onShow: function() {},
    donshowplace: function() {
        wx.setStorageSync("place", "不显示位置"), wx.navigateBack();
    },
    selectplace: function(a) {
        var t = a.currentTarget.dataset.placeid, e = this.data.posi[t].name;
        wx.setStorageSync("place", e), wx.navigateBack({});
    }
});