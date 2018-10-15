function e(e, t) {
    1 == e.data.before_request && (e.setData({
        before_request: 0
    }), a.sendRequest({
        url: "/index.php?m=Mobile&c=Payment&a=getCode&order_id=" + t,
        data: {
            pay_radio: "pay_code=weixin"
        },
        success: function(s) {
            e.setData({
                before_request: 1
            }), 1 == s.status ? (e.setData({
                Pay_para: s.Para
            }), a.Wxpay(t, s.Para, "/pages/payok/payok?id=" + t)) : -2 == s.status ? a.showModal({
                content: " " + s.msg,
                confirm: function() {
                    wx.redirectTo({
                        url: "/pages/orderlist/orderlist"
                    });
                }
            }) : -3 == s.status ? a.showModal({
                content: " " + s.msg,
                confirm: function() {
                    wx.redirectTo({
                        url: "/pages/orderlist/orderlist"
                    });
                }
            }) : -100 == s.status ? (a.globalData.tUrl = "/pages/cart2/cart2", wx.redirectTo({
                url: "/pages/login/login"
            })) : a.showModal({
                content: " " + s.msg
            });
        }
    }));
}

var a = getApp();

require("../../js/global.js");

Page({
    data: {
        address_id: 0,
        Shipping_Name: "",
        shipping_code: "",
        coupon_id: 0,
        coupon_num: 0,
        user_note: "",
        pay_points: 0,
        pay_balance: "",
        postFee: 0,
        couponFee: 0,
        pointsFee: 0,
        before_request: 1,
        is_balace: !1,
        showbonus: "none",
        sid: 0
    },
    onLoad: function() {
        var e = this;
        a.sendRequest({
            url: "/index.php?m=Mobile&c=Cart&a=cart2",
            success: function(t) {
                if (1 == t.status || 2 == t.status) {
                    e.setData(t.OrderDetail);
                    var s = {};
                    t.OrderDetail.shippingList.length > 0 && (s.Shipping_Name = t.OrderDetail.shippingList[0].name, 
                    s.shipping_code = t.OrderDetail.shippingList[0].code), s.payables = t.OrderDetail.total_price.total_fee, 
                    s.coupon_num = t.OrderDetail.couponList.length, 1 == t.status && (s.address_id = t.OrderDetail.address.address_id), 
                    e.setData(s), e.AjaxOrderPrice();
                } else -1 == t.status ? (a.globalData.tUrl = "/pages/cart2/cart2", wx.redirectTo({
                    url: "/pages/login/login"
                })) : -3 == t.status ? a.showModal({
                    content: " " + t.msg,
                    confirm: function(e) {
                        wx.reLaunch({
                            url: "/pages/index/index"
                        });
                    }
                }) : a.showModal({
                    content: " " + t.msg
                });
            }
        });
    },
    ChangeShipping: function() {
        var e = this, a = e.data.shippingList, t = new Array();
        for (var s in a) t.push(a[s].name);
        wx.showActionSheet({
            itemList: t,
            success: function(t) {
                1 != t.cancel && e.setData({
                    shipping_code: a[t.tapIndex].code,
                    Shipping_Name: a[t.tapIndex].name
                }), e.AjaxOrderPrice();
            }
        });
    },
    InputUserNote: function(e) {
        "" == e.detail.value && this.setData({
            user_note: ""
        }), this.setData({
            user_note: e.detail.value
        });
    },
    ChangeBalance: function(e) {
        "" == e.detail.value && this.setData({
            pay_balance: ""
        }), this.setData({
            pay_balance: e.detail.value
        }), this.AjaxOrderPrice();
    },
    AjaxOrderPrice: function() {
        var e = this, t = {
            address_id: e.data.address_id,
            shipping_code: e.data.shipping_code,
            coupon_id: e.data.coupon_id,
            pay_points: e.data.pay_points,
            user_money: e.data.pay_balance,
            user_note: e.data.user_note,
            sid: e.data.sid
        };
        a.sendRequest({
            url: "/index.php?m=Mobile&c=Cart&a=cart3&act=order_price&t=" + Math.random(),
            data: t,
            success: function(s) {
                if (1 == s.status) {
                    var r = {};
                    r.balance = s.result.balance, r.postFee = s.result.postFee, r.couponFee = s.result.couponFee, 
                    r.pointsFee = s.result.pointsFee, r.payables = s.result.payables, r.order_prom_amount = s.result.order_prom_amount, 
                    e.data.user.user_money > s.result.payables ? r.use_balance = s.result.payables : r.use_balance = e.data.user.user_money, 
                    r.bonus_price = s.result.bonus_price, e.setData(r);
                } else -100 == t.status ? (a.globalData.tUrl = "/pages/cart2/cart2", wx.redirectTo({
                    url: "/pages/login/login"
                })) : a.showModal({
                    content: " " + s.msg
                });
            }
        });
    },
    SubmitOrder: function(t) {
        var s = this, r = s.data.before_request, o = t.detail.formId;
        if (console.log(o), 0 == r) return !1;
        s.setData({
            before_request: 0
        });
        var n = {
            address_id: s.data.address_id,
            shipping_code: s.data.shipping_code,
            coupon_id: s.data.coupon_id,
            pay_points: s.data.pay_points,
            user_money: s.data.pay_balance,
            user_note: s.data.user_note,
            sid: s.data.sid,
            formId: o
        };
        a.sendRequest({
            url: "/index.php?m=Mobile&c=Cart&a=cart3&act=submit_order",
            data: n,
            success: function(t) {
                s.setData({
                    before_request: 1
                }), 1 == t.status ? t.order.order_amount > 0 ? e(s, t.result) : wx.redirectTo({
                    url: "/pages/payok/payok?id=" + t.result
                }) : -100 == t.status ? (a.globalData.tUrl = "/pages/cart2/cart2", wx.redirectTo({
                    url: "/pages/login/login"
                })) : a.showModal({
                    content: " " + t.msg
                });
            }
        });
    },
    CheckBalance: function() {
        var e = this;
        1 == e.data.is_balance ? e.setData({
            is_balance: !1,
            pay_balance: 0
        }) : e.setData({
            is_balance: !0,
            pay_balance: e.data.use_balance
        }), this.AjaxOrderPrice();
    },
    showBonus: function() {
        "none" == this.data.showbonus ? this.setData({
            showbonus: ""
        }) : this.setData({
            showbonus: "none"
        });
    },
    SelectCoupon: function(e) {
        var a = e.currentTarget.dataset.index, t = this.data.sharebonus, s = 0;
        for (var r in t) r == a && "" == t[r].selected ? (t[r].selected = "my-thc", s = t[r].id) : t[r].selected = "";
        this.setData({
            sharebonus: t,
            sid: s
        }), this.AjaxOrderPrice();
    }
});