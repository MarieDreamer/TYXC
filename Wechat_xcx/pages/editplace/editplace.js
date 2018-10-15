var t = getApp();

Page({
    data: {
        buttonactive: !1
    },
    onLoad: function(a) {
        t.stat.statpv({
            route: this.route,
            options: a
        }), wx.setNavigationBarTitle({
            title: "创建位置"
        });
    },
    creategroup: function(t) {
        var a = t.detail.value.groupname;
        0 == a.trim().length ? wx.showModal({
            title: "提示",
            content: "请输入正确的地理位置",
            showCancel: !1,
            confirmColor: "#000"
        }) : (wx.setStorageSync("place", a), wx.navigateBack({
            delta: 2
        }));
    },
    setcolor: function(t) {
        var a = this;
        t.detail.value.trim().length > 0 ? a.setData({
            buttonactive: !0
        }) : a.setData({
            buttonactive: !1
        });
    }
});