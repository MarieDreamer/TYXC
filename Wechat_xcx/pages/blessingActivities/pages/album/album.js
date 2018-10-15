function e(e) {
    if (Array.isArray(e)) {
        for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
        return a;
    }
    return Array.from(e);
}

var t = require("../../icon.js"), a = require("../../api.js"), i = getApp(), r = require("../../../../utils/util.js"), n = require("../../../../utils/tripledes.js"), s = (require("../../../../utils/reg.js"), 
void 0);

Page({
    data: {
        userId: wx.getStorageSync("userid"),
        myBlessCount: 0,
        totalMember: 0,
        bannerImage: "",
        shareImage: "",
        nickName: "",
        avatar: "",
        groupId: -1,
        currentTab: "events",
        activityRules: !1,
        loadComplete: !1,
        loading: -1,
        tabsFix: !1,
        blessingModal: {
            show: !1,
            userId: -1,
            eventId: -1,
            selectedIndex: -1
        },
        blessedUsers: [],
        blessingList: [],
        ranking: [],
        myRanking: Object,
        colLeft: [],
        colRight: [],
        reload: !0
    },
    onLoad: function(e) {
        s = this, i.globalData.scene = 0, i.stat.statpv({
            route: this.route,
            options: e
        }), s.rollingTimer = null, s.colLeftHeight = 0, s.colRightHeight = 0, s.pageNumber = 1, 
        s.events = [], s.setData({
            ICON: t.ICON,
            groupId: e.groupId,
            fromPage: e.fromPage
        }), e.version && (this.version = e.version), e.port && (this.port = e.port, i.globalData.port = e.port, 
        this.setData({
            port: e.port
        })), e.fromUserID && (this.fromUserID = e.fromUserID), e.fromSpaceID && (this.fromSpaceID = e.fromSpaceID), 
        e.fromEventID && (this.fromEventID = e.fromEventID), this.na = this.version ? this.version : "", 
        this.nb = this.port ? this.port : "", this.nc = this.fromUserID ? this.fromUserID : 0, 
        this.nd = this.fromSpaceID ? this.fromSpaceID : 0, this.ne = this.fromEventID ? this.fromEventID : 0;
    },
    onReady: function() {},
    onShow: function() {
        s.data.reload && i.getUserInfo(function(e) {
            if ("新用户" != e.nickName) {
                s.setData({
                    userId: wx.getStorageSync("userid")
                });
                var t = n.encryptByDESModeCBC(e.userid), a = n.encryptByDESModeCBC(s.data.groupId);
                r.wxreq({
                    pathname: "YinianProject/newh5/ShowSmallAppAlbumInformationWithEncryption",
                    data: {
                        userid: t,
                        groupid: a,
                        port: s.nb,
                        zj: "",
                        fromUserID: s.data.userId || 0,
                        inviteuserid: s.data.user || 0
                    }
                }).then(function(t) {
                    if (2 != t.code) {
                        if (1012 == t.code) wx.showModal({
                            title: "提示",
                            content: "相册已被解散",
                            showCancel: !1,
                            success: function(e) {
                                wx.reLaunch ? wx.reLaunch({
                                    url: "../index/index"
                                }) : wx.navigateBack({
                                    delta: 10
                                });
                            }
                        }); else if (1037 == t.code) wx.showModal({
                            title: "提示",
                            content: "相册已被封",
                            showCancel: !1,
                            success: function(e) {
                                wx.reLaunch ? wx.reLaunch({
                                    url: "../index/index"
                                }) : wx.navigateBack({
                                    delta: 10
                                });
                            }
                        }); else {
                            if (0 != t.code) return void wx.showModal({
                                title: "提示",
                                content: "网络错误，请重试",
                                showCancel: !1,
                                success: function() {
                                    wx.switchTab({
                                        url: "/pages/index/index"
                                    });
                                }
                            });
                            t.data[0].joinStatus || wx.showToast({
                                title: "加入活动成功"
                            }), s._getInitEvent(), s._getBlessedUser(), s._getRankingList(), s._getMyRanking(), 
                            s.setData({
                                reload: !1
                            });
                        }
                        var a = {
                            userId: e.userid,
                            fromUserId: s.fromUserID ? s.fromUserID : "",
                            operation: "enterBlessingActivitiesAlbum",
                            userLastLoginTime: i.enterTime
                        };
                        i.stat.request(a);
                    } else wx.showModal({
                        title: "提示",
                        content: "网络错误，请重试",
                        showCancel: !1,
                        success: function() {
                            wx.switchTab({
                                url: "/pages/index/index"
                            });
                        }
                    });
                }).catch(function(e) {
                    console.log("加入相册err", e);
                });
            } else wx.navigateTo({
                url: "/pages/creatlogin/creatlogin"
            });
        }, s.na, s.nb, s.nc, s.nd, s.ne, function() {
            s.setData({
                showAuthPic: !1
            });
        });
    },
    onHide: function() {
        clearInterval(s.rollingTimer);
    },
    onUnload: function() {
        clearInterval(s.rollingTimer);
    },
    onPageScroll: function(e) {
        this.fixedTabs(e.scrollTop);
    },
    onPullDownRefresh: function() {
        s._getInitEvent(), s._getBlessedUser(), s._getRankingList(), s._getMyRanking(), 
        wx.stopPullDownRefresh();
    },
    onReachBottom: function() {
        (s.data.currentTab = "events") && s._getOthersEvent();
    },
    onShareAppMessage: function(e) {
        if ("button" === e.from) {
            var t = e.target.id;
            if ("shareDetail" === t) {
                var a = e.target.dataset.eid, r = e.target.dataset.uid;
                s.data.nickName;
                return {
                    title: "我上传了一张宝宝吃相照，进来送颗小心心吧！",
                    path: "/pages/blessingActivities/pages/detail/detail?eventId=" + a + "&userId=" + r + "&groupId=" + s.data.groupId + "&fromUseID=" + s.fromUserID,
                    imageUrl: "http://oibl5dyji.bkt.clouddn.com/sixOne_personalShare.png",
                    withShareTicket: !0,
                    success: function(e) {
                        var t = {
                            userId: s.userid,
                            fromUserId: s.fromUserID ? s.fromUserID : "",
                            operation: "shareBlessingActivitiesDetail_success",
                            userLastLoginTime: i.enterTime,
                            remark: a
                        };
                        i.stat.request(t);
                    },
                    fail: function(e) {
                        var t = {
                            userId: s.userid,
                            fromUserId: s.fromUserID ? s.fromUserID : "",
                            operation: "shareBlessingActivitiesDetail_fail",
                            userLastLoginTime: i.enterTime,
                            remark: a
                        };
                        i.stat.request(t);
                    }
                };
            }
            if ("shareAlbum" === t) {
                s.data.nickName;
                return {
                    title: "这个儿童节活动好好玩喔！你也一起参加吧！",
                    path: "/pages/blessingActivities/pages/album/album?groupId=" + s.data.groupId + "&fromUseID=" + s.fromUserID,
                    withShareTicket: !0,
                    imageUrl: "http://oibl5dyji.bkt.clouddn.com/sixOne_activeShare.png",
                    success: function(e) {
                        var t = {
                            userId: s.userid,
                            fromUserId: s.fromUserID ? s.fromUserID : "",
                            operation: "shareBlessingActivitiesAlbum_success",
                            userLastLoginTime: i.enterTime,
                            groupId: s.data.groupId
                        };
                        i.stat.request(t);
                    },
                    fail: function(e) {
                        var t = {
                            userId: s.userid,
                            fromUserId: s.fromUserID ? s.fromUserID : "",
                            operation: "shareBlessingActivitiesAlbum_fail",
                            userLastLoginTime: i.enterTime,
                            groupId: s.data.groupId
                        };
                        i.stat.request(t);
                    }
                };
            }
        }
        if ("menu" === e.from) {
            s.data.nickName;
            return {
                title: "这个儿童节活动好好玩喔！你也一起参加吧！",
                path: "/pages/blessingActivities/pages/album/album?groupId=" + s.data.groupId + "&fromUseID=" + s.fromUserID,
                withShareTicket: !0,
                imageUrl: "http://oibl5dyji.bkt.clouddn.com/sixOne_activeShare.png",
                success: function(e) {
                    var t = {
                        userId: s.userid,
                        fromUserId: s.fromUserID ? s.fromUserID : "",
                        operation: "shareBlessingActivitiesAlbum_success",
                        userLastLoginTime: i.enterTime,
                        groupId: s.data.groupId
                    };
                    i.stat.request(t);
                },
                fail: function(e) {
                    var t = {
                        userId: s.userid,
                        fromUserId: s.fromUserID ? s.fromUserID : "",
                        operation: "shareBlessingActivitiesAlbum_fail",
                        userLastLoginTime: i.enterTime,
                        groupId: s.data.groupId
                    };
                    i.stat.request(t);
                }
            };
        }
    },
    fixedTabs: function(e) {
        e > 536 / (750 / i.globalData.systemInfo.windowWidth) ? !1 === this.data.tabsFix && this.setData({
            tabsFix: !0
        }) : !0 === this.data.tabsFix && this.setData({
            tabsFix: !1
        });
    },
    generateWaterfall: function(e) {
        var t = [], a = [], i = 0;
        return e.forEach(function(e) {
            var r = e.width, n = e.height;
            if (i = e.blesses.length > 0 ? 5 : 0, s.colLeftHeight <= s.colRightHeight) {
                t.push(e);
                var o = 185 * n / r;
                s.colLeftHeight += o + i;
            } else {
                a.push(e);
                var u = 185 * n / r;
                s.colRightHeight += u + i;
            }
        }), {
            colLeft: t,
            colRight: a
        };
    },
    switchActivityRules: function(e) {
        var t = e.currentTarget.dataset.switch;
        s.setData({
            activityRules: t
        });
    },
    switchTab: function(e) {
        var t = e.currentTarget.dataset.tab;
        s.setData({
            currentTab: t
        });
    },
    rollingAnimation: function(e) {
        var t = wx.createAnimation({
            duration: 2e3 * e,
            timingFunction: "linear"
        }), a = {
            duration: 0
        };
        t.translateX(170 * -e).step().translateX(300).step(a), s.setData({
            animationData: t.export()
        }), s.rollingTimer = setInterval(function() {
            t.translateX(170 * -e).step().translateX(300).step(a), s.setData({
                animationData: t.export()
            });
        }, 2e3 * e + 500);
    },
    openUpload: function() {
        var e = {
            userId: wx.getStorageSync("userid"),
            fromUserId: s.fromUserID ? s.fromUserID : "",
            operation: "uploadBlessPicture",
            userLastLoginTime: i.enterTime
        };
        i.stat.request(e);
        var t = {
            userId: wx.getStorageSync("userid"),
            groupId: s.data.groupId,
            storage: 3e3,
            paths: Array
        };
        wx.chooseImage({
            count: 9,
            sizeType: [ "original" ],
            sourceType: [ "album" ],
            success: function(r) {
                wx.hideLoading(), t.paths = r.tempFilePaths, (0, a.upload)(t).then(function(t) {
                    0 === t.code ? (wx.showToast({
                        title: "发布成功",
                        icon: "none",
                        duration: 2500
                    }), e.operation = "uploadBlessPicture_success", i.stat.request(e), s._getInitEvent()) : -1 === t.code ? wx.showToast({
                        title: "参数不对",
                        image: "/images/toast_warning.png",
                        duration: 2500
                    }) : wx.showToast({
                        title: "发布失败",
                        image: "/images/toast_warning.png",
                        duration: 2e3
                    });
                }).catch(function(e) {
                    console.log("请求失败", e), wx.showToast({
                        title: "发布失败",
                        image: "/images/toast_warning.png",
                        duration: 2e3
                    });
                });
            }
        });
    },
    openSendBlessingModal: function(e) {
        var t = s.data.blessingModal;
        t.show = !0, t.selectedIndex = -1, t.userId = s.data.userId, t.eventId = e.currentTarget.dataset.event_id, 
        s.setData({
            blessingModal: t
        });
    },
    openSendBlessing: function(e) {
        var t = e.currentTarget.dataset.uid, a = e.currentTarget.dataset.eid, r = {
            userId: wx.getStorageSync("userid"),
            fromUserId: s.fromUserID ? s.fromUserID : "",
            operation: "blessalbumhome_like_open",
            userLastLoginTime: e.currentTarget.dataset.uid
        };
        i.stat.request(r), wx.navigateTo({
            url: "../detail/detail?userId=" + t + "&eventId=" + a + "&groupId=" + s.data.groupId + "&action=send"
        });
    },
    reset: function() {
        var e = s.data.colLeft, t = s.data.colRight;
        e.length = 0, t.length = 0, s.events.length = 0, s.pageNumber = 1, s.setData({
            colLeft: e,
            colRight: t,
            loadComplete: !1,
            loading: -1
        });
    },
    _getInitEvent: function() {
        s.reset();
        var t = {
            userId: s.data.userId,
            groupId: s.data.groupId,
            pageNumber: s.pageNumber
        };
        console.log("_getInitEvent_params", t), s.setData({
            loading: 0
        }), wx.showNavigationBarLoading(), (0, a.getMyEvent)(t).then(function(e) {
            console.log("获取我的动态", e), (e.data.midThumbnail || "" == e.data.midThumbnail) && s.events.push(e.data), 
            s.setData({
                myBlessCount: e.data.bless_count,
                totalMember: e.data.memberCount,
                bannerImage: e.data.gpic,
                shareImage: e.data.sharePicUrl,
                nickName: e.data.unickname,
                avatar: e.data.upic
            });
        }).then(function(e) {
            return (0, a.getOthersEvent)(t);
        }).then(function(t) {
            if (wx.hideNavigationBarLoading(), 0 === t.code) {
                var a;
                s.pageNumber++, (a = s.events).push.apply(a, e(t.data));
                var i = s.generateWaterfall(s.events), r = i.colLeft, n = i.colRight;
                s.setData({
                    colLeft: r,
                    colRight: n,
                    loading: 1
                });
            }
        }).catch(function(e) {
            wx.hideNavigationBarLoading(), s.setData({
                loading: 1
            }), wx.showToast({
                title: "加载数据失败",
                image: "/images/toast_warning.png"
            }), console.log("getMyEventErr", e);
        });
    },
    _getOthersEvent: function() {
        if (0 !== s.data.loading && !s.data.loadComplete) {
            var t = {
                userId: s.data.userId,
                groupId: s.data.groupId,
                pageNumber: s.pageNumber
            };
            wx.showNavigationBarLoading(), (0, a.getOthersEvent)(t).then(function(t) {
                if (wx.hideNavigationBarLoading(), s.setData({
                    loading: 0
                }), 0 !== t.data.length) {
                    s.pageNumber++;
                    var a = t.data, i = s.data.colLeft, r = s.data.colRight, n = s.generateWaterfall(a), o = n.colLeft, u = n.colRight;
                    i.push.apply(i, e(o)), r.push.apply(r, e(u)), s.setData({
                        colLeft: i,
                        colRight: r,
                        loading: 1
                    });
                } else s.setData({
                    loadComplete: !0
                });
            }).catch(function(e) {
                wx.hideNavigationBarLoading(), s.setData({
                    loading: 1
                });
            });
        }
    },
    _getBlessedUser: function() {
        (0, a.getBlessedUser)().then(function(e) {
            if (0 === e.code) {
                var t = Array.from(e.data.unicknames);
                t.length > 5 && (t = t.slice(0, 5));
                var a = [];
                t.forEach(function(e) {
                    var t = void 0;
                    t = e.length > 3 ? "恭喜" + e.slice(0, 3) + "...获得小心心" : "恭喜" + e + "获得祝福", a.push(t);
                });
                var i = a.join("   ");
                s.setData({
                    contentText: i
                });
            }
        }).catch(function(e) {
            console.log("祝福姓名获取失败", e);
        });
    },
    _getRankingList: function() {
        var e = {
            pageSize: 100,
            pageNumber: 1
        };
        (0, a.getRankingList)(e).then(function(e) {
            var t = e.data;
            s.setData({
                ranking: t
            });
        }).catch(function(e) {
            console.log("r-err", e);
        });
    },
    _getMyRanking: function() {
        (0, a.getMyRanking)(s.data.userId).then(function(e) {
            var t = e.data;
            s.setData({
                myRanking: t
            });
        }).catch(function(e) {
            console.log("获取我的排行数据出错");
        });
    },
    toDetail: function(e) {
        s.setData({
            reload: !1
        });
        var t = e.currentTarget.dataset.uid, a = e.currentTarget.dataset.eid;
        wx.navigateTo({
            url: "../detail/detail?userId=" + t + "&eventId=" + a + "&groupId=" + s.data.groupId
        });
    },
    copy: function() {
        wx.setClipboardData({
            data: "yiniankefu",
            success: function(e) {
                wx.showToast({
                    title: "已复制到粘贴版",
                    icon: "success",
                    image: "/images/helpcenter_window_ok.png"
                });
            }
        });
    },
    toIndex: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    preventScroll: function() {}
});