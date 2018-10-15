var t = getApp(), a = require("../../js/global.js");

Page({
    data: {
        money: "",
        kmoney: 0
    },
    onLoad: function() {},
    // onShow: function() {
    //     var o = this;
    //     t.sendRequest({
    //         url: "/index.php?m=Mobile&c=User&a=withdrawals&t=" + Math.random(),
    //         success: function(e) {
    //             if (1 == e.status) {
    //                 var n = a.fomatFloat(e.user.user_money / ((100 + parseFloat(e.sxf)) / 100), 2);
    //                 0 == e.bankinfo && t.showModal({
    //                     content: "您还没有设置提现账户",
    //                     confirm: function() {
    //                         wx.navigateTo({
    //                             url: "/pages/bankinfo/bankinfo"
    //                         });
    //                     }
    //                 }), o.setData({
    //                     user: e.user,
    //                     min_money: e.min_money,
    //                     sxf: e.sxf,
    //                     kmoney: n,
    //                     bankinfo: e.bankinfo
    //                 });
    //             } else -100 == e.status && (t.globalData.tUrl = "/pages/deposit/deposit", wx.redirectTo({
    //                 url: "/pages/login/login"
    //             }));
    //         }
    //     });
    // },
    setAll: function() {
        var t = a.fomatFloat(this.data.kmoney * this.data.sxf / 100, 2);
        this.setData({
            money: this.data.kmoney,
            sxf_money: t
        });
    },
    InputKey: function(t) {
        var o = t.detail.value;
        if (parseFloat(o) > parseFloat(this.data.kmoney)) wx.showToast({
            title: "提现金额不能大于最大可提现金额",
            icon: "none",
            duration: 1e3
        }), this.setAll(); else {
            var e = a.fomatFloat(o * this.data.sxf / 100, 2);
            this.setData({
                money: o,
                sxf_money: e
            });
        }
    },
    InputFocus: function(t) {
        0 == t.detail.value && this.setData({
            money: ""
        });
    },
    InputBlur: function(t) {
        "" == t.detail.value && this.setData({
            money: 0
        });
    },
    GoUrl: function(t) {
        var a = t.currentTarget.dataset.url;
        wx.navigateTo({
            url: a
        });
    },
    // DoSubmit: function(o) {
    //     var e = this, n = e.data.money, s = o.detail.formId, i = a.fomatFloat(n * this.data.sxf / 100, 2);
    //     return parseFloat(i) + parseFloat(n) > parseFloat(this.data.user.user_money) ? (wx.showModal({
    //         content: "剩余余额不足以支付提现手续费￥" + i + "当前最大可提现金额为￥" + e.data.kmoney,
    //         showCancel: !0,
    //         confirmText: "全部提现",
    //         confirm: function() {
    //             e.setAll();
    //         }
    //     }), !1) : parseFloat(n) % 10 != 0 ? (wx.showToast({
    //         title: "提现金额必须为10的倍数",
    //         icon: "none",
    //         duration: 1e3
    //     }), !1) : parseFloat(n) < parseFloat(this.data.min_money) ? (wx.showToast({
    //         title: "提现金额不能小于最小提现金额",
    //         icon: "none",
    //         duration: 1e3
    //     }), !1) : void t.sendRequest({
    //         url: "/index.php?m=Mobile&c=User&a=withdrawals&t=" + Math.random(),
    //         method: "POST",
    //         data: {
    //             money: n,
    //             formId: s
    //         },
    //         success: function(a) {
    //             1 == a.status ? t.showModal({
    //                 content: "" + a.msg,
    //                 confirm: function() {
    //                     wx.redirectTo({
    //                         url: "/pages/wallet/wallet"
    //                     });
    //                 }
    //             }) : -100 == a.status ? (t.globalData.tUrl = "/pages/deposit/deposit", wx.redirectTo({
    //                 url: "/pages/login/login"
    //             })) : t.showModal({
    //                 content: "" + a.msg
    //             });
    //         }
    //     });
    // }
});