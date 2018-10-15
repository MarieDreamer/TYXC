var t = require("../../../utils/api.js"), e = require("../../../utils/util.js"), a = getApp(), i = /^0?(13|14|15|17|18|19)[0-9]{9}$/;

Page({
    data: {
        showRewardsModalBox: !1
    },
    onLoad: function(t) {
        var e = this;
        t.version && (this.version = t.version), t.port && (this.port = t.port, a.globalData.port = t.port), 
        t.fromUserID && (this.fromUserID = t.fromUserID), t.fromSpaceID && (this.fromSpaceID = t.fromSpaceID), 
        t.fromEventID && (this.fromEventID = t.fromEventID), t.mayDayFromUserid && "undefined" !== t.mayDayFromUserid && (a.globalData.mayDayFromUserid = t.mayDayFromUserid), 
        this.efrom = t.efrom, this.isHasData = !1, this.isUpCountOperation = !1, a.stat.statpv({
            options: t,
            route: e.route
        });
    },
    onShow: function() {
        var t = this, i = this.version ? this.version : "", s = this.port ? this.port : "", o = this.fromUserID ? this.fromUserID : 0, n = this.fromSpaceID ? this.fromSpaceID : 0, r = this.fromEventID ? this.fromEventID : 0;
        a.getUserInfo(function(i) {
            if ("新用户" != i.nickName) {
                if (t.userid = i.userid, !t.isUpCountOperation) {
                    var s = {
                        operation: "first_page_in",
                        userId: i.userid
                    };
                    a.stat.request(s), t.isUpCountOperation = !0;
                }
                t.isHasData ? t.isHasData = !1 : (wx.showToast({
                    title: "加载中...",
                    icon: "loading",
                    duration: 1e5,
                    mask: !0
                }), e.wxreq({
                    pathname: "YinianProject/activitySpacial/joinSpacialActivity",
                    data: {
                        activitySpacialId: 1,
                        userId: i.userid
                    }
                }).then(function(e) {
                    t.selectAllContent();
                }));
            } else wx.navigateTo({
                url: "/pages/creatlogin/creatlogin"
            });
        }, i, s, o, n, r, "mayDayActivity/index", function() {});
    },
    showPrizeIntro: function() {
        wx.showModal({
            title: "提示",
            content: "您已经提交领取，请联系客服微信：yiniankefu ，等待相册发放",
            showCancel: !1
        });
    },
    getHeaderData: function() {
        var t = this;
        e.wxreq({
            pathname: "YinianProject/activitySpacial/selectHasUploadNum",
            data: {
                activitySpacialId: 1,
                userId: t.userid
            }
        }).then(function(e) {
            console.log(e), 0 == e.code && (t.data.contentText.hasUploadPercent = e.data[0].hasUploadPercent, 
            t.data.contentText.hasUploadNumText = e.data[0].hasUploadNumText, t.setData({
                contentText: t.data.contentText
            }));
        });
    },
    selectAllContent: function() {
        var t = this;
        wx.showToast({
            title: "加载中...",
            icon: "loading",
            duration: 1e5,
            mask: !0
        }), e.wxreq({
            pathname: "YinianProject/activitySpacial/selectAllContent",
            data: {
                userId: t.userid,
                activitySpacialId: 1
            }
        }).then(function(e) {
            0 == e.code ? t.setData({
                contentText: e.data[0].contentText,
                allPicList: e.data[0].picList
            }) : wx.showModal({
                title: "提示",
                content: "获取数据失败，请稍后重试",
                showCancel: !1,
                success: function() {
                    "smallApp" === t.efrom ? wx.navigateBack({
                        delta: 1
                    }) : wx.switchTab({
                        url: "/pages/index/index"
                    });
                }
            }), wx.hideToast();
        }).catch(function() {
            wx.hideToast(), wx.showModal({
                title: "提示",
                content: "获取数据失败，请稍后重试",
                showCancel: !1,
                success: function() {
                    "smallApp" === t.efrom ? wx.navigateBack({
                        delta: 1
                    }) : wx.switchTab({
                        url: "/pages/index/index"
                    });
                }
            });
        });
    },
    toSpecialGroupList: function() {
        0 == this.data.contentText.isReceive ? wx.navigateTo({
            url: "/pages/mayDayActivity/upgroup/upgroup"
        }) : wx.showModal({
            title: "提示",
            content: "您已提交打印，请勿重复上传，分享活动邀请好友一起打印成册",
            showCancel: !1
        });
        var t = {
            operation: "first_page_add",
            userId: this.userid || 0
        };
        a.stat.request(t);
    },
    deletePic: function(e) {
        var a = e.currentTarget.dataset.sel, i = this;
        console.log(a), wx.showModal({
            title: "提示",
            content: "是否确定删除这张图片",
            success: function(e) {
                if (e.confirm) {
                    var s = i.data.allPicList, o = i.userid, n = s[a].pid;
                    s.splice(a, 1), i.setData({
                        allPicList: s
                    }), wx.showToast({
                        title: "删除成功"
                    }), wx.request({
                        url: t.getUrl("YinianProject/picture/deletePicById"),
                        data: {
                            userId: o,
                            pid: n
                        },
                        success: function(t) {
                            0 == t.data.code && i.getHeaderData();
                        }
                    });
                }
            }
        });
    },
    showRewardsModal: function() {
        this.setData({
            showRewardsModalBox: !0
        });
        var t = {
            operation: "first_page_reward",
            userId: this.userid || 0
        };
        a.stat.request(t);
    },
    closeRewardsModal: function() {
        this.setData({
            showRewardsModalBox: !1
        });
    },
    formSubmit: function(t) {
        console.log(t);
        var s = this, o = t.detail.value.userName.trim(), n = t.detail.value.userAddr.trim(), r = t.detail.value.userPhones.trim(), c = s.userid || 0;
        if (o) if (n) if (r) if (i.test(r)) {
            var d = {
                operation: "twice_page_sure",
                userId: c
            };
            a.stat.request(d), wx.showModal({
                title: "提示",
                content: "请确保信息正确有效",
                success: function(t) {
                    t.confirm && (wx.showToast({
                        title: "正在登记...",
                        icon: "loading",
                        duration: 1e5,
                        mask: !0
                    }), e.wxreq({
                        pathname: "YinianProject/activitySpacial/saveUserPrintAlbumOrder",
                        data: {
                            userId: c,
                            receiveName: o,
                            receiveAddress: n,
                            receivePhone: r
                        }
                    }).then(function(t) {
                        0 == t.code ? (s.data.contentText.isReceive = 1, s.setData({
                            contentText: s.data.contentText,
                            showRewardsModalBox: !1
                        }), wx.showToast({
                            title: "登记成功"
                        })) : wx.showToast({
                            title: "提交失败"
                        });
                    }).catch(function(t) {
                        wx.showToast({
                            title: "网络错误！"
                        });
                    }));
                }
            });
        } else wx.showToast({
            title: "号码格式不正确",
            image: "/images/toast_warning.png",
            duration: 1e3
        }); else wx.showToast({
            title: "手机号不能为空",
            image: "/images/toast_warning.png",
            duration: 1e3
        }); else wx.showToast({
            title: "地址不能为空",
            image: "/images/toast_warning.png",
            duration: 1e3
        }); else wx.showToast({
            title: "名字不能为空",
            image: "/images/toast_warning.png",
            duration: 1e3
        });
    },
    copytext: function(t) {
        wx.setClipboardData({
            data: "yiniankefu",
            success: function(t) {
                wx.showToast({
                    title: "已复制到粘贴版",
                    icon: "success",
                    image: "/images/helpcenter_window_ok.png"
                });
            }
        });
    },
    haveShare: function() {
        var t = this.userid;
        if (1 != this.data.contentText.isShare) {
            var i = this;
            e.wxreq({
                pathname: "YinianProject/activitySpacial/shareSpacialActivity",
                data: {
                    userId: t
                }
            }).then(function(t) {
                i.getHeaderData();
            });
        }
        var s = {
            operation: "first_page_share",
            userId: t
        };
        a.stat.request(s);
    },
    goHome: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    onShareAppMessage: function() {
        return this.isHasData = !0, {
            title: "这个五一，送你一本相册",
            path: "/pages/mayDayActivity/index/index?port=mayday2&mayDayFromUserid=" + (this.userid || 0),
            imageUrl: "http://oibl5dyji.bkt.clouddn.com/0425_sharepic.png",
            success: function() {
                a.stat.request({
                    operation: "shareCallback"
                });
            }
        };
    }
});