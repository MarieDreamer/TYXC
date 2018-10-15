var t = getApp(), a = require("../../../utils/util.js");

Page({
    data: {
        allState: !0,
        onlyCreator: !1,
        state: !0
    },
    onLoad: function(a) {
        t.stat.statpv({
            route: this.route,
            options: a
        });
    },
    onShow: function() {
        var t = this, a = wx.getStorageSync("gAuthority");
        0 == a ? t.setData({
            allState: !0,
            onlyCreator: !1,
            state: !0
        }) : 1 == a ? t.setData({
            allState: !1,
            onlyCreator: !0,
            state: !0
        }) : t.setData({
            allState: !1,
            onlyCreator: !1,
            state: !1
        });
    },
    changeAll: function() {
        var t = this;
        2 != wx.getStorageSync("gAuthority") ? this.setData({
            allState: !t.data.allState,
            onlyCreator: !t.data.onlyCreator,
            state: !0
        }) : this.setData({
            allState: !t.data.allState,
            onlyCreator: t.data.allState,
            state: !0
        });
    },
    changeCreator: function() {
        var t = this;
        2 != wx.getStorageSync("gAuthority") ? this.setData({
            allState: !t.data.allState,
            onlyCreator: !t.data.onlyCreator,
            state: !0
        }) : this.setData({
            allState: t.data.onlyCreator,
            onlyCreator: !t.data.onlyCreator,
            state: !0
        });
    },
    release: function() {
        if (this.data.state) {
            var t = this.data.allState ? "all" : "onlyCreator";
            a.wxreq({
                pathname: "YinianProject/space/SetUploadAuthority",
                data: {
                    userid: wx.getStorageSync("userid"),
                    groupid: wx.getStorageSync("groupid"),
                    authorityType: t
                },
                reqtype: "GET"
            }).then(function(t) {
                wx.navigateBack({
                    delta: 1
                });
            });
        } else wx.showModal({
            title: "提示",
            content: "还没有设置...",
            showCancel: !1
        });
    }
});