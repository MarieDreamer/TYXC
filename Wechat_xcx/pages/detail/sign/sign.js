var e = getApp(), t = require("../../../utils/util.js");

Page({
    data: {
        days: 0,
        daysCount: 0,
        rewardSpace: 0,
        prizeDetail: [ {
            dayMin: -1,
            dayMax: 7,
            img: "http://oibl5dyji.bkt.clouddn.com/20171013165321.png"
        }, {
            dayMin: 7,
            dayMax: 14,
            img: "http://oibl5dyji.bkt.clouddn.com/zipaigan3.png"
        }, {
            dayMin: 14,
            dayMax: 30,
            img: "http://oibl5dyji.bkt.clouddn.com/20170611105835pt.png"
        }, {
            dayMin: 30,
            dayMax: 100,
            img: "http://oibl5dyji.bkt.clouddn.com/20170611105835pic.png"
        }, {
            dayMin: 100,
            dayMax: 365,
            img: "http://oibl5dyji.bkt.clouddn.com/20170611105835iphone.png"
        } ],
        prizeState: {},
        showGetPrizeModel: !1,
        levelState: "",
        submitSuccess: !1,
        showDisposeModel: !1,
        usernamefocus: !0,
        userphonefocus: !1,
        useraddressfocus: !1
    },
    onLoad: function(t) {
        e.stat.statpv({
            route: this.route,
            options: t
        }), console.log(t);
        var a = t.days, s = t.signcount;
        console.log(s, 111), a - s > 0 && (s = a);
        var o = (100 / 1024 * a).toFixed(2);
        this.setData({
            days: a,
            daysCount: s,
            rewardSpace: o
        });
    },
    onShow: function() {
        var a = this;
        a.userid = e.globalData.userInfo.userid, t.wxreq({
            pathname: "YinianProject/activity/ShowPrizeReceivePage",
            data: {
                userid: a.userid,
                type: "signIn"
            }
        }).then(function(e) {
            console.log(e);
            var t = e.data[0];
            a.setData({
                prizeState: t
            });
        });
    },
    preventScoll: function() {},
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
        var s = this, o = this;
        o.setData({
            useraddressfocus: !1
        }), o.userid = e.globalData.userInfo.userid, console.log(a.detail.value, this.data.levelState);
        var i = a.detail.value;
        if (0 != i.userName.trim().length && 0 != i.userPhone.trim().length && 0 != i.userAddr.trim().length) {
            switch (console.log("coding...."), o.elTypeName = "", o.data.levelState) {
              case "One":
                o.elTypeName = "忆年专属定制水杯";
                break;

              case "Two":
                o.elTypeName = "定制自拍杆";
                break;

              case "Three":
                o.elTypeName = "个性拼图";
                break;

              case "Four":
                o.elTypeName = "圆钉相纸";
                break;

              default:
                o.elTypeName = "iPhone7";
            }
            t.wxreq({
                pathname: "YinianProject/activity/WriteLogisticsInfo2",
                data: {
                    userid: this.userid,
                    type: "signIn",
                    level: o.data.levelState,
                    name: i.userName,
                    address: i.userAddr,
                    phone: i.userPhone,
                    elTypeName: o.elTypeName
                }
            }).then(function(e) {
                console.log(e), 0 == e.code ? (s.setData({
                    submitSuccess: !0,
                    showGetPrizeModel: !1
                }), t.wxreq({
                    pathname: "YinianProject/activity/ShowPrizeReceivePage",
                    data: {
                        userid: o.userid,
                        type: "signIn"
                    }
                }).then(function(e) {
                    console.log(e);
                    var t = e.data[0];
                    o.setData({
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
    copytext: function(e) {
        wx.setClipboardData({
            data: "yiniankefu",
            success: function(e) {
                console.log(e.data), wx.showToast({
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
                type: "signIn"
            }
        }).then(function(t) {
            var a = t.data[0];
            e.setData({
                prizeState: a
            });
        });
    }
});