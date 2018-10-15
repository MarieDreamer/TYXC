var e = getApp(), t = require("../../js/global.js"), a = require("../template/tabbar.js");

Page({
    data: {
        page: 1,
        before_request: 1,
        listend: 0,
        type: "",
        more: "none"
    },
    onLoad: function(r) {
        var s = "";
        t.isBlank(r.type) || (s = r.type), this.setData({
            type: s,
            is_comment: e.globalData.config.is_comment
        }), a.tabbar("tabBar", 3, this);
    },
    // onShow: function() {
    //     var t = this, a = t.data.type;
    //     t.setData({
    //         page: 1
    //     }), e.sendRequest({
    //         url: "/index.php?m=Mobile&c=User&a=order_list&type=" + a + "&t=" + Math.random(),
    //         success: function(a) {
    //             1 == a.status ? t.setData(a.List) : -100 == a.status ? (e.globalData.tUrl = "/pages/orderlist/orderlist", 
    //             wx.redirectTo({
    //                 url: "/pages/login/login"
    //             })) : t.setData({
    //                 listend: 1
    //             });
    //         }
    //     });
    // },
    GoUrl: function(e) {
        var t = e.currentTarget.dataset.url;
        "redirect" == e.currentTarget.dataset.type ? wx.redirectTo({
            url: t
        }) : wx.navigateTo({
            url: t
        });
    },
    onReachBottom: function() {
        this.AjaxOrderList();
    },
    HandleOrder: function(e) {
        var t = e.currentTarget.dataset.url;
        wx.navigateTo({
            url: t
        });
    },
    ReciveOrder: function(t) {
        var a = t.currentTarget.dataset.id;
        e.showModal({
            content: "请确定您是否收到货物？",
            showCancel: !0,
            confirmText: "继续",
            confirm: function() {
                e.sendRequest({
                    url: "/index.php?m=Mobile&c=User&a=order_confirm&id=" + a + "&t=" + Math.random(),
                    success: function(t) {
                        1 == t.status ? wx.redirectTo({
                            url: "/pages/orderconfirm/orderconfirm?id=" + a
                        }) : -100 == t.status ? (e.globalData.tUrl = "/pages/orderlist/orderlist", wx.redirectTo({
                            url: "/pages/login/login"
                        })) : e.showModal({
                            content: "" + t.msg
                        });
                    }
                });
            }
        });
    },
    CancelOrder: function(t) {
        var a = this, r = t.currentTarget.dataset.id, s = a.data.before_request;
        e.showModal({
            content: "请确定您要取消该订单？",
            showCancel: !0,
            confirmText: "继续",
            duration: 3e3,
            confirm: function() {
                1 == s && (a.setData({
                    before_request: 0
                }), e.sendRequest({
                    url: "/index.php?m=Mobile&c=User&a=cancel_order&id=" + r + "&t=" + Math.random(),
                    success: function(t) {
                        a.setData({
                            before_request: 1
                        }), 1 == t.status ? e.showToast({
                            title: t.msg,
                            icon: "success",
                            success: function() {
                                a.onShow();
                            }
                        }) : -100 == t.status ? (e.globalData.tUrl = "/pages/orderlist/orderlist", wx.redirectTo({
                            url: "/pages/login/login"
                        })) : e.showModal({
                            content: "" + t.msg
                        });
                    }
                }));
            }
        });
    },
    PayOrder: function(t) {
        var a = this, r = t.currentTarget.dataset.id;
        1 == a.data.before_request && (a.setData({
            before_request: 0
        }), e.sendRequest({
            url: "/index.php?m=Mobile&c=Payment&a=getCode&order_id=" + r,
            data: {
                pay_radio: "pay_code=weixin"
            },
            success: function(t) {
                a.setData({
                    before_request: 1
                }), 1 == t.status ? (a.setData({
                    Pay_para: t.Para
                }), e.Wxpay(r, t.Para, "/pages/orderdetail/orderdetail?id=" + r, "navi")) : -2 == t.status ? e.showModal({
                    content: " " + t.msg,
                    confirm: function() {
                        wx.navigateTo({
                            url: "/pages/orderdetail/orderdetail?id=" + r
                        });
                    }
                }) : -3 == t.status ? e.showModal({
                    content: " " + t.msg,
                    confirm: function() {
                        wx.redirectTo({
                            url: "/pages/orderlist/orderlist"
                        });
                    }
                }) : -100 == t.status ? (e.globalData.tUrl = "/pages/orderlist/orderlist", wx.redirectTo({
                    url: "/pages/login/login"
                })) : e.showModal({
                    content: " " + t.msg
                });
            }
        }));
    },
    AjaxOrderList: function() {
        var t = this, a = t.data.page, r = t.data.type, s = t.data.listend, o = t.data.before_request;
        0 == s && 1 == o && (t.setData({
            before_request: 0,
            more: ""
        }), a += 1, e.sendRequest({
            url: "/index.php?m=Mobile&c=User&a=order_list&type=" + r + "&t=" + Math.random(),
            data: {
                p: a
            },
            success: function(r) {
                if (1 == r.status) {
                    var s = t.data.lists.concat(r.List.lists);
                    t.setData({
                        lists: s,
                        page: a
                    });
                } else -100 == r.status ? (e.globalData.tUrl = "/pages/orderlist/orderlist", wx.redirectTo({
                    url: "/pages/login/login"
                })) : t.setData({
                    listend: 1
                });
            },
            complete: function() {
                t.setData({
                    before_request: 1,
                    more: "none"
                });
            }
        }));
    }
});