var e = getApp();

Page({
    data: {
        order_id: 0,
        Pay_para: {},
        before_request: 1
    },
    onLoad: function(t) {
        var r = t.order_id;
        if (r > 0) {
            var a = this;
            e.sendRequest({
                url: "/index.php?m=Mobile&c=Cart&a=cart4&order_id=" + r,
                success: function(t) {
                    1 == t.status ? a.setData(t.OrderInfo) : -2 == t.status ? (a.setData(t.OrderInfo), 
                    e.showModal({
                        content: " " + t.msg,
                        confirm: function() {
                            wx.redirectTo({
                                url: "/pages/orderdetail/orderdetail?id=" + r
                            });
                        }
                    })) : -3 == t.status ? e.showModal({
                        content: " " + t.msg,
                        confirm: function() {
                            wx.redirectTo({
                                url: "/pages/orderlist/orderlist"
                            });
                        }
                    }) : -100 == t.status ? (e.globalData.tUrl = "/pages/cart4/cart4?id=" + a.data.id, 
                    wx.redirectTo({
                        url: "/pages/login/login"
                    })) : e.showModal({
                        content: " " + t.msg
                    });
                }
            });
        } else e.showModal({
            content: " 参数错误",
            confirm: function() {
                wx.redirectTo({
                    url: "/pages/index/index"
                });
            }
        });
        this.setData({
            order_id: r
        });
    },
    PayOrder: function() {
        var t = this, r = t.data.order_id;
        1 == t.data.before_request && (t.setData({
            before_request: 0
        }), e.sendRequest({
            url: "/index.php?m=Mobile&c=Payment&a=getCode&order_id=" + r,
            data: {
                pay_radio: "pay_code=weixin"
            },
            success: function(a) {
                t.setData({
                    before_request: 1
                }), 1 == a.status ? (t.setData({
                    Pay_para: a.Para
                }), e.Wxpay(r, a.Para, "/pages/orderlist/orderlist")) : -2 == a.status ? e.showModal({
                    content: " " + a.msg,
                    confirm: function() {
                        wx.redirectTo({
                            url: "/pages/orderlist/orderlist"
                        });
                    }
                }) : -3 == a.status ? e.showModal({
                    content: " " + a.msg,
                    confirm: function() {
                        wx.redirectTo({
                            url: "/pages/orderlist/orderlist"
                        });
                    }
                }) : -100 == a.status ? (e.globalData.tUrl = "/pages/cart4/cart4?id=" + t.data.id, 
                wx.redirectTo({
                    url: "/pages/login/login"
                })) : e.showModal({
                    content: " " + a.msg
                });
            }
        }));
    },
    GoOrder: function() {
        wx.reLaunch({
            url: "/pages/orderlist/orderlist"
        });
    }
});