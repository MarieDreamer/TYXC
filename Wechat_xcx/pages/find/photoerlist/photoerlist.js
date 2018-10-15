var t = require("../../../utils/api.js"), e = getApp();

Page({
    data: {
        photolist: "",
        myRank: "",
        totalContribution: "",
        userpic: "",
        username: ""
    },
    onLoad: function(t) {
        e.stat.statpv({
            route: this.route,
            options: t
        }), this.searchLimit = t.searchLimit ? t.searchLimit : 100, this.urlTitle = t.urlTitle;
    },
    onReady: function() {},
    onShow: function() {
        var e = this, i = wx.getStorageSync("userInfo").upic;
        wx.getStorageSync("userInfo").nickName;
        console.log(i), wx.setNavigationBarTitle({
            title: e.urlTitle
        }), wx.request({
            url: t.getUrl("YinianProject/space/GetPublishList"),
            data: {
                groupid: wx.getStorageSync("groupid"),
                uid: wx.getStorageSync("userid"),
                searchLimit: e.searchLimit
            },
            success: function(t) {
                var i = t.data.data;
                console.log(i), e.setData({
                    photolist: i,
                    userid: wx.getStorageSync("userid")
                });
            }
        });
    }
});