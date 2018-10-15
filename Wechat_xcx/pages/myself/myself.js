var e = getApp(), t = require("../../utils/util.js"), n = require("../../utils/api.js"), i = !1;

Page({
    data: {
        userId: "",
        signText: "点击签到",
        userInfo: {
            loadSignIn: -1,
            isSignIn: !1,
            showSign: 1
        }
    },
    onLoad: function(t) {
        e.stat.statpv({
            route: this.route,
            options: t
        }), this.isLoadUserInfo = -1;
    },
    onShow: function() {
        var t = this, n = this;
        e.getUserInfo(function(e) {
            "新用户" != e.nickName ? n.getUserInfo() : wx.redirectTo({
                url: "/pages/minelogin/minelogin"
            });
        }), wx.getStorageSync("userid") ? (n.setData({
            userId: wx.getStorageSync("userid")
        }), n.setData({
            switchState: null != wx.getStorageSync("userInfo").uLockPass
        }), 0 !== this.isLoadUserInfo || setTimeout(function() {
            t.isLoadUserInfo = -1;
        }, 100)) 
        // : wx.showModal({
        //     title: "错误",
        //     content: "获取用户ID失败，查看详情失败",
        //     showCancel: !1,
        //     success: function(e) {
        //         e.confirm && wx.switchTab({
        //             // url: "/pages/index/index"
        //         });
        //     }
        // });
    },
    toXiaoYingXiang: function() {
        var e = this;
        wx.navigateToMiniProgram({
            appId: "wx73ef5bcc7a858a68",
            path: "pages/index/index",
            success: function(t) {
                e.isLoadUserInfo = 0, console.log("EE");
            }
        });
    },
    toTenSeconds: function(e) {
        var t = this;
        e.detail.formId;
        wx.navigateToMiniProgram({
            appId: "wx44ad13e0063a526d",
            path: "pages/index/index",
            success: function(e) {
                t.isLoadUserInfo = 0, console.log(e);
            }
        });
    },
    toCalc: function(e) {
        var t = this;
        console.log(e);
        e.detail.formId;
        wx.navigateToMiniProgram({
            appId: "wxae8c385faaf97033",
            path: "pages/index/index",
            success: function(e) {
                t.isLoadUserInfo = 0, console.log(e);
            }
        });
    },
    conversion: function(e) {
        return e / 1024 / 1024 < 1 ? (e / 1024).toFixed(2) + "M" : (e / 1024 / 1024).toFixed(1) + "M";
    },
    prevent: function() {},
    changeAvatarPic: function() {
        var e = this;
        wx.getStorageSync("userid") ? wx.request({
            url: n.getUrl("YinianProject/yinian/GetUploadToken"),
            data: {},
            method: "GET",
            success: function(t) {
                var i = t.data.data[0].token;
                wx.chooseImage({
                    count: 1,
                    sizeType: [ "compressed" ],
                    sourceType: [ "album", "camera" ],
                    success: function(t) {
                        wx.showToast({
                            title: "正在上传",
                            icon: "loading",
                            duration: 2e3
                        }), wx.uploadFile({
                            url: "https://upload.qiniup.com",
                            filePath: t.tempFilePaths[0],
                            name: "file",
                            formData: {
                                key: t.tempFilePaths[0].split("//")[1],
                                token: i
                            },
                            success: function(t) {
                                var i = JSON.parse(t.data);
                                new Date();
                                wx.request({
                                    url: n.getUrl("YinianProject/yinian/ModifySingleInfo"),
                                    data: {
                                        data: i.key,
                                        userid: wx.getStorageSync("userid"),
                                        type: "pic"
                                    },
                                    success: function(t) {
                                        0 == t.data.code && wx.showToast({
                                            title: "修改成功",
                                            icon: "success",
                                            duration: 2e3,
                                            success: function() {
                                                setTimeout(function() {
                                                    wx.hideToast(), e.getUserInfo();
                                                }, 1500);
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }) : wx.showModal({
            title: "错误",
            content: "获取用户授权信息失败！请稍后再试",
            showCancel: !1
        });
    },
    switchChange: function(e) {
        this.isLoadUserInfo = 0, e.detail.value ? wx.navigateTo({
            url: "/pages/others/password/password?setPwd=set"
        }) : wx.navigateTo({
            url: "/pages/others/password/password?setPwd=cancel"
        });
    },
    getUserInfo: function() {
        var e = wx.getStorageSync("userid"), t = -1, i = this;
        setTimeout(function() {
            -1 === t && wx.showNavigationBarLoading();
        }, 500), wx.request({
            url: n.host + "/YinianProject/points/showPersonInfo",
            method: "GET",
            data: {
                userid: e + ""
            },
            success: function(e) {
                if (0 == e.data.code) {
                    var t = e.data.data[0];
                    i.setData({
                        userInfo: {
                            avatar: t.upic,
                            nick: t.unickname,
                            integral: t.useablePoints,
                            isSignIn: t.isTodaySign,
                            signDay: t.signDay,
                            usedSpace: i.conversion(t.uusespace),
                            loadSignIn: 1,
                            showSign: t.showSign
                        }
                    }), i.data.userInfo.isSignIn && i.setData({
                        signText: "已连续签到" + i.data.userInfo.signDay + "天"
                    });
                } else wx.showToast({
                    title: "数据加载失败",
                    image: "/images/toast_warning.png",
                    duration: 2e3
                });
            },
            error: function(e) {
                wx.showToast({
                    title: "数据加载失败",
                    image: "/images/toast_warning.png",
                    duration: 2e3
                });
            },
            fail: function() {
                wx.showToast({
                    title: "数据加载失败",
                    image: "/images/toast_warning.png",
                    duration: 2e3
                });
            },
            complete: function() {
                wx.hideNavigationBarLoading(), t = 0;
            }
        });
    },
    signIn: function(e) {
        var a = e.detail.formId;
        if (t.sendFormId(this.data.userId, a), -1 !== this.data.userInfo.loadSignIn) if (this.data.userInfo.isSignIn) wx.showToast({
            title: "今天已签到",
            icon: "success",
            duration: 2e3
        }); else if (i) wx.showToast({
            title: "操作过于频繁",
            image: "/images/toast_warning.png",
            duration: 2e3
        }); else {
            i = !0;
            var s = -1, o = this;
            setTimeout(function() {
                -1 === s && wx.showLoading({
                    title: "处理中"
                });
            }, 500), wx.request({
                url: n.host + "/YinianProject/points/DailySignInNew",
                method: "GET",
                data: {
                    userid: o.data.userId + "",
                    signType: 0
                },
                success: function(e) {
                    0 === e.data.code ? o.getUserInfo() : wx.showToast({
                        title: "签到失败",
                        image: "/images/toast_warning.png",
                        duration: 2e3
                    });
                },
                error: function(e) {
                    wx.showToast({
                        title: "签到失败",
                        image: "/images/toast_warning.png",
                        duration: 2e3
                    });
                },
                fail: function() {
                    wx.showToast({
                        title: "签到失败",
                        image: "/images/toast_warning.png",
                        duration: 2e3
                    });
                },
                complete: function() {
                    wx.hideLoading(), s = 0, i = !1;
                }
            });
        } else wx.showToast({
            title: "网络不好请稍后",
            image: "/images/toast_warning.png",
            duration: 2e3
        });
    },
    changeLoadUserInfo: function() {
        this.isLoadUserInfo = 0;
    }
});