var e = getApp(), t = require("../../js/global.js");

Page({
    data: {
        bgimg: "https://cc.hohiw.com/xcximg/cue-bg.png",
        show: "",
        Tshow: "none",
        id: 0
    },
    onLoad: function(s) {
        var a = 0;
        t.isBlank(s.id) || (a = s.id), this.setData({
            id: a
        });
        var i = this;
        e.sendRequest({
            url: "/index.php?m=Mobile&c=User&a=getOrder&id=" + a + "&t=" + Math.random(),
            success: function(t) {
                if (1 == t.status) {
                    if (i.setData(t.order), 0 == i.data.get_status) return wx.redirectTo({
                        url: "/pages/guess/guess?id=" + a
                    }), !1;
                    1 == i.data.get_status ? i.setData({
                        show: ""
                    }) : 2 == i.data.get_status && i.setData({
                        bgimg: "https://cc.hohiw.com/xcximg/bg2.png",
                        show: ""
                    });
                } else t.status < 1 && (e.globalData.tUrl = "/pages/cue/cue?id=" + a, wx.redirectTo({
                    url: "/pages/login/login"
                }));
            }
        }), wx.showShareMenu({
            withShareTicket: !0
        });
    },
    GoUrl: function(e) {
        var t = e.currentTarget.dataset.url;
        "nav" == e.currentTarget.dataset.nav ? wx.navigateTo({
            url: t
        }) : wx.redirectTo({
            url: t
        });
    },
    onShareAppMessage: function() {
        var s = this;
        return {
            title: "购物猜单双   猜中能免单",
            path: "/pages/index/index?uid=" + e.globalData.userInfo.user_id,
            success: function(a) {
                console.log(!t.isBlank(a.shareTickets)), t.isBlank(a.shareTickets) ? e.showModal({
                    content: "请分享到群，未分享到群不能获得返利"
                }) : wx.getShareInfo({
                    shareTicket: a.shareTickets[0],
                    success: function(t) {
                        console.log(a.shareTickets[0]), 1 == s.data.get_status && e.checkSession().then(function(a) {
                            e.sendNoRequest({
                                url: "/index.php?m=Mobile&c=User&a=checkGid&t=" + Math.random(),
                                data: {
                                    sessionkey: e.getSessionKey(),
                                    encryptedData: t.encryptedData,
                                    iv: t.iv,
                                    id: s.data.id
                                },
                                success: function(t) {
                                    1 == t.status ? s.setData({
                                        Tshow: "",
                                        is_back: 2,
                                        back_money: t.back_money
                                    }) : 2 == t.status && e.showModal({
                                        content: "请分享到群，未分享到群不能获得返利"
                                    });
                                }
                            });
                        });
                    },
                    complete: function(e) {}
                });
            }
        };
    },
    CloseShow: function() {
        this.setData({
            Tshow: "none"
        });
    }
});