var t = getApp();

Page({
    data: {},
    onLoad: function(a) {
        t.stat.statpv({
            route: this.route,
            options: a
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = this;
        wx.request({
            url: "https://api.zhuiyinanian.com/YinianProject/space/GetActivityMenu",
            data: {
                groupid: wx.getStorageSync("groupid")
            },
            success: function(a) {
                if (0 == a.data.code) {
                    var e = a.data.data[0];
                    console.log(e), t.setData({
                        activeList: e
                    });
                } else wx.showModal({
                    title: "提示",
                    content: "获取数据不成功",
                    showCancel: !1,
                    success: function() {
                        wx.navigateBack({
                            delta: 1
                        });
                    }
                });
            }
        });
    },
    gotourl: function(t) {
        var a = this;
        console.log(t.currentTarget.dataset.url);
        var e = /GetGroupLikeList/;
        1 == /GetPublishList/.test(t.currentTarget.dataset.url) ? wx.navigateTo({
            url: "../photoerlist/photoerlist?searchLimit=" + a.data.activeList.menu[1].searchLimit + "&urlTitle=" + a.data.activeList.menu[1].urlTitle
        }) : 1 == e.test(t.currentTarget.dataset.url) && wx.navigateTo({
            url: "../likelist/likelist?searchLimit=" + a.data.activeList.menu[0].searchLimit + "&urlTitle=" + a.data.activeList.menu[0].urlTitle
        });
    }
});