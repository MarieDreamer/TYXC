function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t, a = getApp(), i = require("../../../utils/util.js");

Page((t = {
    data: {
        picNum: 0,
        prizeDetail: [ {
            picMin: -1,
            picMax: 1e3,
            img: "http://oibl5dyji.bkt.clouddn.com/20171013165321.png"
        }, {
            picMin: 1e3,
            picMax: 2333,
            img: "http://oibl5dyji.bkt.clouddn.com/zipaigan3.png"
        }, {
            picMin: 2333,
            picMax: 6666,
            img: "http://oibl5dyji.bkt.clouddn.com/20170611105835pt.png"
        }, {
            picMin: 6666,
            picMax: 15e3,
            img: "http://oibl5dyji.bkt.clouddn.com/20170611105835pic.png"
        } ],
        prizeState: {},
        usernamefocus: !0,
        userphonefocus: !1,
        useraddressfocus: !1
    },
    onLoad: function(e) {
        a.stat.statpv({
            route: this.route,
            options: e
        });
        var t = e.picNum;
        this.setData({
            picNum: t
        });
    },
    onShow: function() {
        var e = this;
        e.userid = a.globalData.userInfo.userid, i.wxreq({
            pathname: "YinianProject/activity/ShowPrizeReceivePage",
            data: {
                userid: e.userid,
                type: "uploadPicture"
            }
        }).then(function(t) {
            var a = t.data[0];
            console.log(a), e.setData({
                prizeState: a
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
    closePrizeModel: function() {
        var e = this;
        e.setData({
            showGetPrizeModel: !1
        }), i.wxreq({
            pathname: "YinianProject/activity/ShowPrizeReceivePage",
            data: {
                userid: e.userid,
                type: "uploadPicture"
            }
        }).then(function(t) {
            var a = t.data[0];
            e.setData({
                prizeState: a
            });
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
    submitUserInfo: function(e) {
        var t = this, o = this;
        o.setData({
            useraddressfocus: !1
        }), o.userid = a.globalData.userInfo.userid, console.log(e.detail.value, this.data.levelState);
        var s = e.detail.value;
        if (0 != s.userName.trim().length && 0 != s.userPhone.trim().length && 0 != s.userAddr.trim().length) {
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

              default:
                o.elTypeName = "圆钉相纸";
            }
            i.wxreq({
                pathname: "YinianProject/activity/WriteLogisticsInfo2",
                data: {
                    userid: this.userid,
                    type: "uploadPicture",
                    level: o.data.levelState,
                    name: s.userName,
                    address: s.userAddr,
                    phone: s.userPhone,
                    elTypeName: o.elTypeName
                }
            }).then(function(e) {
                console.log(e), 0 == e.code ? (t.setData({
                    submitSuccess: !0,
                    showGetPrizeModel: !1
                }), i.wxreq({
                    pathname: "YinianProject/activity/ShowPrizeReceivePage",
                    data: {
                        userid: o.userid,
                        type: "uploadPicture"
                    }
                }).then(function(e) {
                    var t = e.data[0];
                    console.log(t), o.setData({
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
    }
}, e(t, "closePrizeModel", function() {
    var e = this;
    e.setData({
        showGetPrizeModel: !1,
        usernamefocus: !0,
        userphonefocus: !1,
        useraddressfocus: !1
    }), i.wxreq({
        pathname: "YinianProject/activity/ShowPrizeReceivePage",
        data: {
            userid: e.userid,
            type: "uploadPicture"
        }
    }).then(function(t) {
        var a = t.data[0];
        e.setData({
            prizeState: a
        });
    });
}), e(t, "copytext", function(e) {
    wx.setClipboardData({
        data: "yiniankefu",
        success: function(e) {
            console.log(e), wx.showToast({
                title: "复制成功!",
                icon: "success",
                duration: 2e3
            });
        }
    });
}), e(t, "closeDispose", function() {
    this.setData({
        showDisposeModel: !1
    });
}), e(t, "showDispose", function() {
    this.setData({
        showDisposeModel: !0
    });
}), e(t, "closeSubmitSuccess", function() {
    this.setData({
        submitSuccess: !1
    });
}), t));