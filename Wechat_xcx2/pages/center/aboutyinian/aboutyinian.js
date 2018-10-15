var t = getApp();

Page({
    data: {},
    onLoad: function(o) {
        var a = o.from;
        this.setData({
            from: a
        });
    },
    onShow: function() {
        "security" == this.data.from && wx.setNavigationBarTitle({
            title: "安全保障"
        });
    }
});