var e = getApp(), t = require("../../js/global.js");

Page({
    data: {
        order_id: 0,
        show: ""
    },
    onLoad: function(r) {
        var a = 0;
        t.isBlank(r.id) || (a = r.id), this.setData({
            order_id: a
        });
        var s = this;
        e.sendRequest({
            url: "/index.php?m=Mobile&c=User&a=getOrder&id=" + a + "&t=" + Math.random(),
            success: function(e) {
                s.setData(e.order);
            }
        });
    },
    GoUrl: function(e) {
        var t = e.currentTarget.dataset.nav, r = e.currentTarget.dataset.url;
        "nav" == t ? wx.navigateTo({
            url: r
        }) : wx.redirectTo({
            url: r
        });
    },
    CloseShow: function() {
        this.setData({
            show: "none"
        });
    }
});