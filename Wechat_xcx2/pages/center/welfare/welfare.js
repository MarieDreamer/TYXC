var t = getApp(), i = require("../../../utils/util.js");

Page({
    data: {
        userinfoDetail: {},
        showWelSignModel: !0
    },
    onLoad: function(i) {
        t.stat.statpv({
            route: this.route,
            options: i
        });
    },
    onShow: function() {
        var t = this;
        t.userid = wx.getStorageSync("userid"), t.updatePage();
    },
    signBtn: function() {
        var t = this;
        i.wxreq({
            pathname: "YinianProject/activity/DailySignIn2",
            data: {
                userid: t.userid
            }
        }).then(function(i) {
            t.setData({
                showWelSignModel: !1
            }), t.timer = setTimeout(function() {
                t.setData({
                    showWelSignModel: !0
                }), t.updatePage();
            }, 2e3);
        });
    },
    conversion: function(t) {
        return (t / 1024 / 1024).toFixed(2);
    },
    updatePage: function() {
        var t = this;
        i.wxreq({
            pathname: "YinianProject/activity/ShowWelfarePage2",
            data: {
                userid: t.userid
            },
            reqtype: "GET"
        }).then(function(i) {
            var e = i.data[0], a = t.conversion(e.useStorage), n = t.conversion(e.totalStorage), o = {
                totalStorage: n,
                useStorage: a,
                remainStorage: (parseFloat(n) - parseFloat(a)).toFixed(2),
                inviteNum: e.inviteNum,
                isTodaySign: e.isTodaySign,
                picNum: e.picNum,
                signDay: e.signDay,
                signCount: e.signCount,
                isShareMoments: e.isShareMoments,
                isShareWechatGroup: e.isShareWechatGroup,
                showSign: e.showSign
            };
            t.setData({
                userinfoDetail: o
            });
        }).catch(function(t) {
            wx.showToast({
                title: "数据加载错误"
            });
        });
    },
    dialogImg: function() {
        var t = this;
        clearTimeout(t.timer), t.updatePage(), this.setData({
            showWelSignModel: !0
        });
    },
    invitFriend: function() {
        wx.navigateTo({
            url: "/pages/detail/invitation/invitation?num=" + this.data.userinfoDetail.inviteNum
        });
    }
});