var e = getApp();

Page({
    data: {
        id: 0,
        before_request: 1
    },
    onLoad: function(t) {
        var r = t.id, a = this;
        // r > 0 ? (e.sendRequest({
        //     url: "/index.php?m=Mobile&c=User&a=order_detail&id=" + r + "&t=" + Math.random(),
        //     success: function(t) {
        //         1 == t.status ? a.setData(t.OrderInfo) : -100 == t.status ? (e.globalData.tUrl = "/pages/orderdetail/orderdetail?id=" + r, 
        //         wx.redirectTo({
        //             url: "/pages/login/login"
        //         })) : e.showModal({
        //             content: "" + t.msg
        //         });
        //     }
        // }), 
        a.setData({
            id: r
        })) : e.showModal({
            content: "参数错误",
            confirm: function() {
                wx.redirectTo({
                    url: "/pages/orderlist/orderlist"
                });
            }
        });
    },
    CancelOrder: function(t) {
        var r = this, a = r.data.id, o = r.data.before_request;
        e.showModal({
            content: "请确定您要取消该订单？",
            showCancel: !0,
            confirmText: "继续",
            duration: 3e3,
            confirm: function() {
                1 == o && (r.setData({
                    before_request: 0
                }), e.sendRequest({
                    url: "/index.php?m=Mobile&c=User&a=cancel_order&id=" + a + "&t=" + Math.random(),
                    success: function(t) {
                        r.setData({
                            before_request: 1
                        }), 1 == t.status ? e.showToast({
                            title: t.msg,
                            icon: "success",
                            success: function() {
                                wx.redirectTo({
                                    url: "/pages/orderlist/orderlist"
                                });
                            }
                        }) : -100 == t.status ? (e.globalData.tUrl = "/pages/orderdetail/orderdetail?id=" + a, 
                        wx.redirectTo({
                            url: "/pages/login/login"
                        })) : e.showModal({
                            content: "" + t.msg
                        });
                    }
                }));
            }
        });
    },
    ReciveOrder: function() {
        var t = this.data.id;
        e.showModal({
            content: "请确定您是否收到货物？",
            showCancel: !0,
            confirmText: "继续",
            confirm: function() {
                e.sendRequest({
                    url: "/index.php?m=Mobile&c=User&a=order_confirm&id=" + t + "&t=" + Math.random(),
                    success: function(r) {
                        1 == r.status ? wx.redirectTo({
                            url: "/pages/orderconfirm/orderconfirm?id=" + t
                        }) : -100 == r.status ? (e.globalData.tUrl = "/pages/orderdetail/orderdetail?id=" + t, 
                        wx.redirectTo({
                            url: "/pages/login/login"
                        })) : e.showModal({
                            content: "" + r.msg
                        });
                    }
                });
            }
        });
    },
    HandleOrder: function(e) {
        var t = e.currentTarget.dataset.url;
        wx.redirectTo({
            url: t
        });
    },
    GoUrl: function(e) {
        var t = e.currentTarget.dataset.url;
        "redirect" == e.currentTarget.dataset.type ? wx.redirectTo({
            url: t
        }) : wx.navigateTo({
            url: t
        });
    },
    PayOrder: function() {
        var t = this, r = t.data.id;
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
                }), e.Wxpay(r, a.Para, "/pages/orderdetail/orderdetail?id=" + r)) : -2 == a.status ? e.showModal({
                    content: " " + a.msg,
                    confirm: function() {
                        wx.redirectTo({
                            url: "/pages/orderdetail/orderdetail?id=" + r
                        });
                    }
                }) : -3 == a.status ? e.showModal({
                    content: " " + a.msg,
                    confirm: function() {
                        wx.redirectTo({
                            url: "/pages/orderlist/orderlist"
                        });
                    }
                }) : -100 == a.status ? (e.globalData.tUrl = "/pages/orderdetail/orderdetail?id=" + id, 
                wx.redirectTo({
                    url: "/pages/login/login"
                })) : e.showModal({
                    content: " " + a.msg
                });
            }
        }));
    }
});