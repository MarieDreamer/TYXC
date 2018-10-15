var e = require("../../icon.js"), t = require("../../api.js"), s = void 0, n = getApp();

Component({
    properties: {
        show: {
            type: Boolean,
            value: !1,
            observer: function(e, t) {
                console.log("show", e, t);
            }
        },
        userId: {
            type: Number,
            value: -1
        },
        eventId: {
            type: Number,
            value: -1,
            observer: function(e, t) {
                console.log("newValue", e);
            }
        },
        selectedIndex: {
            type: Number,
            value: -1,
            observer: function(e, t) {
                console.log("newValue", e), -2 != e && s.setData({
                    value: ""
                });
            }
        },
        scene: {
            type: Number,
            value: -1
        },
        groupId: {
            type: Number,
            value: -1
        }
    },
    data: {
        image: "https://pic.qqtn.com/up/2018-4/15241069988679136.jpg",
        value: "",
        selectedIndex: -1,
        defaultBlessing: [],
        loading: -1
    },
    created: function() {
        s = this;
    },
    attached: function() {
        s.setData({
            ICON: e.ICON
        }), s._getBlessingList();
    },
    ready: function() {
        console.log("ready");
    },
    methods: {
        close: function() {
            s.setData({
                show: !1
            }), s.triggerEvent("close", !1);
        },
        selectBlessing: function(e) {
            var t = e.currentTarget.dataset.index;
            s.setData({
                selectedIndex: t
            });
        },
        onFocus: function(e) {
            s.setData({
                selectedIndex: -2
            });
        },
        onInput: function(e) {
            var t = e.detail.value;
            s.setData({
                value: t
            });
        },
        _sendBlessing: function() {
            if (0 !== s.data.loading) {
                if (s.setData({
                    loading: 0
                }), s.data.userId < 0) return s.setData({
                    loading: 1
                }), void wx.showToast({
                    title: "用户ID不正确",
                    image: "/images/toast_warning.png"
                });
                if (s.data.eventId < 0) return s.setData({
                    loading: 1
                }), void wx.showToast({
                    title: "动态ID不正确",
                    image: "/images/toast_warning.png"
                });
                var e = s.data.selectedIndex, a = {
                    userId: s.data.userId,
                    eventId: s.data.eventId,
                    blessContent: ""
                };
                if (-2 == e && (a.blessContent = s.data.value), e >= 0 && (a.blessContent = s.data.defaultBlessing[e]), 
                a.blessContent = a.blessContent.trim(), a.blessContent.length < 1) return s.setData({
                    loading: 1
                }), void wx.showToast({
                    title: "没有祝福语",
                    image: "/images/toast_warning.png"
                });
                (0, t.sendBlessing)(a).then(function(e) {
                    if (s.setData({
                        loading: 1
                    }), 0 === e.code) {
                        wx.getStorageSync("firstSendBlessing") ? (wx.showToast({
                            title: "赠送成功"
                        }), wx.setStorageSync("firstSendBlessing", !0)) : wx.showModal({
                            title: "赠送成功",
                            content: "别人家的孩子都有小心心了",
                            confirmText: "我要参与",
                            success: function(e) {
                                e.confirm ? (console.log("用户点击确定"), 1007 == s.data.scene || 1008 == s.data.scene ? wx.redirectTo({
                                    url: "/pages/blessingActivities/pages/album/album?groupId=" + s.data.groupId
                                }) : wx.navigateBack({
                                    delta: 1
                                })) : e.cancel && console.log("用户点击取消");
                            }
                        });
                        var t = {
                            userId: wx.getStorageSync("userid"),
                            fromUserId: n.fromUserID ? n.fromUserID : "",
                            operation: "BlessingActivities_like",
                            userLastLoginTime: n.enterTime,
                            remark: s.data.userId
                        };
                        n.stat.request(t), s.triggerEvent("returnResult", {});
                    } else wx.showModal({
                        title: "赠送失败",
                        content: e.msg,
                        showCancel: !1
                    });
                    s.close();
                }).catch(function(e) {
                    s.setData({
                        loading: 1
                    }), wx.showModal({
                        title: "赠送失败",
                        content: e.msg,
                        showCancel: !1
                    }), s.close();
                });
            }
        },
        _getBlessingList: function() {
            console.log("_getBlessingList"), (0, t.getBlessingList)().then(function(e) {
                if (0 === e.code) {
                    var t = e.data.blessContents;
                    s.setData({
                        defaultBlessing: t
                    });
                } else console.log("祝福列表获取失败");
            }).catch(function(e) {
                console.log("祝福列表获取失败", e);
            });
        }
    }
});