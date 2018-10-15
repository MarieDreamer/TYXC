var e = getApp(), t = require("../../../utils/util.js");

Page({
    data: {
        inviteNum: 0,
        prizeDetail: [ {
            personMin: -1,
            personMax: 20,
            img: "http://oibl5dyji.bkt.clouddn.com/20171013165321.png"
        }, {
            personMin: 20,
            personMax: 88,
            img: "http://oibl5dyji.bkt.clouddn.com/zipaigan3.png"
        }, {
            personMin: 88,
            personMax: 200,
            img: "http://oibl5dyji.bkt.clouddn.com/20170611105835pt.png"
        }, {
            personMin: 200,
            personMax: 1e3,
            img: "http://oibl5dyji.bkt.clouddn.com/20170611105835pic.png"
        } ],
        prizeState: {},
        rewardSpace: 0,
        usernamefocus: !0,
        userphonefocus: !1,
        useraddressfocus: !1
    },
    onLoad: function(t) {
        e.stat.statpv({
            route: this.route,
            options: t
        });
        var a = t.inviteNum, s = (.5 * a).toFixed(2);
        this.setData({
            inviteNum: a,
            rewardSpace: s
        });
    },
    onShow: function() {
        var a = this;
        a.userid = e.globalData.userInfo.userid, t.wxreq({
            pathname: "YinianProject/activity/ShowPrizeReceivePage",
            data: {
                userid: a.userid,
                type: "inviteFriend"
            }
        }).then(function(e) {
            console.log(e);
            var t = e.data[0];
            a.setData({
                prizeState: t
            });
        });
    },
    getPrize: function(e) {
        var t = this, a = e.currentTarget.dataset.level;
        t.setData({
            levelState: a
        }), t.setData({
            showGetPrizeModel: !0
        });
    },
    nextone: function() {
        console.log("nextone"), this.setData({
            userphonefocus: !0
        });
    },
    nextwo: function() {
        console.log("nextwo"), this.setData({
            useraddressfocus: !0,
            userphonefocus: !1
        });
    },
    submitUserInfo: function(a) {
        var s = this, i = this;
        i.setData({
            useraddressfocus: !1
        }), i.userid = e.globalData.userInfo.userid, console.log(a.detail.value, this.data.levelState);
        var o = a.detail.value;
        if (0 != o.userName.trim().length && 0 != o.userPhone.trim().length && 0 != o.userAddr.trim().length) {
            switch (console.log("coding...."), i.elTypeName = "", i.data.levelState) {
              case "One":
                i.elTypeName = "忆年专属定制水杯";
                break;

              case "Two":
                i.elTypeName = "定制自拍杆";
                break;

              case "Three":
                i.elTypeName = "个性拼图";
                break;

              default:
                i.elTypeName = "圆钉相纸";
            }
            t.wxreq({
                pathname: "YinianProject/activity/WriteLogisticsInfo2",
                data: {
                    userid: this.userid,
                    type: "inviteFriend",
                    level: i.data.levelState,
                    name: o.userName,
                    address: o.userAddr,
                    phone: o.userPhone,
                    elTypeName: i.elTypeName
                }
            }).then(function(e) {
                console.log(e), 0 == e.code ? (s.setData({
                    submitSuccess: !0,
                    showGetPrizeModel: !1
                }), t.wxreq({
                    pathname: "YinianProject/activity/ShowPrizeReceivePage",
                    data: {
                        userid: i.userid,
                        type: "inviteFriend"
                    }
                }).then(function(e) {
                    console.log(e);
                    var t = e.data[0];
                    i.setData({
                        prizeState: t
                    });
                })) : (console.log("res.code", e.code), wx.showModal({
                    title: "提示",
                    content: "网络错误,请重试",
                    showCancel: !1
                }));
            });
        } else wx.showModal({
            title: "提示",
            content: "请填写完整信息",
            showCancel: !1
        });
    },
    closePrizeModel: function() {
        var e = this;
        e.setData({
            showGetPrizeModel: !1,
            usernamefocus: !0,
            userphonefocus: !1,
            useraddressfocus: !1
        }), t.wxreq({
            pathname: "YinianProject/activity/ShowPrizeReceivePage",
            data: {
                userid: e.userid,
                type: "inviteFriend"
            }
        }).then(function(t) {
            var a = t.data[0];
            e.setData({
                prizeState: a
            });
        });
    },
    copytext: function(e) {
        wx.setClipboardData({
            data: "yiniankefu",
            success: function(e) {
                wx.showToast({
                    title: "复制成功!",
                    icon: "success",
                    duration: 2e3
                });
            }
        });
    },
    closeDispose: function() {
        this.setData({
            showDisposeModel: !1
        });
    },
    showDispose: function() {
        this.setData({
            showDisposeModel: !0
        });
    },
    closeSubmitSuccess: function() {
        this.setData({
            submitSuccess: !1
        });
    }
});