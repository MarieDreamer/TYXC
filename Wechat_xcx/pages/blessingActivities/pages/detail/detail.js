function e(e) {
    if (Array.isArray(e)) {
        for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
        return a;
    }
    return Array.from(e);
}

var t = require("../../icon.js"), a = require("../../api.js"), n = require("../../../../utils/util.js"), o = require("../../../../utils/tripledes.js"), s = require("../../../../utils/reg.js"), i = getApp(), r = void 0;

Page({
    data: {
        commentBox: !1,
        groupId: -1,
        userId: -1,
        eventId: -1,
        shareImage: "",
        nickName: "",
        iLike: 0,
        loginUserId: wx.getStorageSync("userid"),
        detail: Object,
        myBlessing: [],
        myBlessingNumber: 0,
        commentsList: [],
        commentLoadComplete: !1,
        loading: -1,
        blessingModal: {
            show: !1,
            userId: -1,
            eventId: -1,
            selectedIndex: -1
        }
    },
    onLoad: function(e) {
        if (console.log("options", e), r = this, r.groupId = e.groupId, r.pageNumber = 1, 
        r.pageSize = 10, r.detailReload = !1, e.action) {
            var a = r.data.blessingModal;
            a.show = !0, a.eventId = e.eventId, a.userId = wx.getStorageSync("userid"), r.setData({
                blessingModal: a
            });
        }
        r.setData({
            ICON: t.ICON,
            eventId: e.eventId,
            userId: e.userId,
            groupId: e.groupId,
            scene: i.globalData.scene
        }), e.version && (this.version = e.version), e.port && (this.port = e.port, i.globalData.port = e.port, 
        this.setData({
            port: e.port
        })), e.fromUserID && (this.fromUserID = e.fromUserID), e.fromSpaceID && (this.fromSpaceID = e.fromSpaceID), 
        e.fromEventID && (this.fromEventID = e.fromEventID), r.na = this.version ? this.version : "", 
        r.nb = this.port ? this.port : "", r.nc = this.fromUserID ? this.fromUserID : 0, 
        r.nd = this.fromSpaceID ? this.fromSpaceID : 0, r.ne = this.fromEventID ? this.fromEventID : 0;
    },
    onReady: function() {},
    onShow: function(e) {
        i.getUserInfo(function(e) {
            if ("新用户" != e.nickName) {
                r.setData({
                    loginUserId: wx.getStorageSync("userid")
                }), r._getDetail(), r.getComment();
                var t = o.encryptByDESModeCBC(e.userid), a = o.encryptByDESModeCBC(r.data.groupId), s = {
                    userId: e.userid,
                    fromUserId: r.fromUserID ? r.fromUserID : "",
                    operation: "enterBlessingActivitiesdetail",
                    userLastLoginTime: i.enterTime
                };
                i.stat.request(s), n.wxreq({
                    pathname: "YinianProject/newh5/ShowSmallAppAlbumInformationWithEncryption",
                    data: {
                        userid: t,
                        groupid: a,
                        port: r.nb,
                        zj: "",
                        fromUserID: r.data.userId,
                        inviteuserid: r.data.userId
                    }
                }).then(function(e) {
                    if (2 != e.code) if (1012 == e.code) wx.showModal({
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
                    }); else if (1037 == e.code) wx.showModal({
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
                        if (0 != e.code) return void wx.showModal({
                            title: "提示",
                            content: "网络错误，请重试",
                            showCancel: !1,
                            success: function() {
                                wx.switchTab({
                                    url: "/pages/index/index"
                                });
                            }
                        });
                        e.data[0].joinStatus || wx.showToast({
                            title: "加入活动成功"
                        });
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
                    console.log("err", e);
                });
            } else wx.navigateTo({
                url: "/pages/creatlogin/creatlogin"
            });
        }, r.na, r.nb, r.nc, r.nd, r.ne, function() {
            r.setData({
                showAuthPic: !1
            });
        }), r.detailReload && (r._getDetail(), r.detailReload = !1);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        r.getComment();
    },
    onShareAppMessage: function(e) {
        var t = r.data.eventId, a = r.data.userId;
        r.data.nickName;
        return {
            title: "我上传了一张宝宝吃相照，进来送颗小心心吧！",
            path: "/pages/blessingActivities/pages/detail/detail?eventId=" + t + "&userId=" + a + "&groupId=" + r.data.groupId + "&fromUseID=" + r.fromUserID,
            imageUrl: "http://oibl5dyji.bkt.clouddn.com/sixOne_personalShare.png",
            withShareTicket: !0,
            success: function(e) {
                var n = {
                    userId: a,
                    fromUserId: r.fromUserID ? r.fromUserID : "",
                    operation: "inBlessingActivities_detail_share_success",
                    userLastLoginTime: i.enterTime,
                    remark: t
                };
                i.stat.request(n);
            },
            fail: function(e) {
                var n = {
                    userId: a,
                    fromUserId: r.fromUserID ? r.fromUserID : "",
                    operation: "inBlessingActivities_detail_share_fail",
                    userLastLoginTime: i.enterTime,
                    remark: t
                };
                i.stat.request(n);
            }
        };
    },
    switchCommentBox: function(e) {
        var t = e.currentTarget.dataset.status;
        r.setData({
            commentBox: t
        });
    },
    openSendBlessingModal: function(e) {
        var t = r.data.blessingModal;
        t.show = !0, t.selectedIndex = -1, t.userId = r.data.loginUserId, t.eventId = r.data.eventId, 
        r.setData({
            blessingModal: t
        });
        var a = {
            userId: wx.getStorageSync("userid"),
            fromUserId: r.fromUserID ? r.fromUserID : "",
            operation: "inBlessingActivities_detail_click_like",
            userLastLoginTime: i.enterTime,
            remark: r.data.userId
        };
        i.stat.request(a);
    },
    blessingTip: function() {
        wx.showToast({
            title: "已赞"
        });
    },
    _getDetail: function() {
        var e = {
            eventId: r.data.eventId,
            userId: wx.getStorageSync("userid")
        };
        (0, a.getDetail)(e).then(function(e) {
            var t = e.data, a = e.data.sharePicUrl, n = e.data.unickname, o = e.data.myBlessCountAtThisUser;
            r.setData({
                detail: t,
                shareImage: a,
                nickName: n,
                iLike: o
            }), r._getMyBlessing();
        }).catch(function(e) {
            console.log("err");
        });
    },
    _getMyBlessing: function() {
        (0, a.getMyBlessing)(r.data.userId).then(function(e) {
            var t = e.data.myBlessCount, a = e.data.mySelfBlesses.splice(0, 200);
            r.setData({
                myBlessingNumber: t,
                myBlessing: a
            });
        }).catch(function(e) {
            console.log("err", e);
        });
    },
    initComment: function() {
        var e = r.data.commentsList;
        e.length = 0, r.pageNumber = 1, r.setData({
            commentsList: e,
            commentLoadComplete: !1
        }), r.getComment();
    },
    sendComment: function(e) {
        var t = {
            formID: e.detail.formId,
            content: e.detail.value.content,
            userId: wx.getStorageSync("userid"),
            eventId: r.data.eventId
        };
        0 != t.content.length ? s.testStr(t.content) ? wx.showModal({
            title: "包含敏感词",
            content: "请勿输入敏感词汇",
            showCancel: !1
        }) : (wx.showLoading({
            title: "正在发送"
        }), (0, a.comment)(t).then(function(e) {
            console.log("params", t), wx.hideLoading(), wx.showToast({
                title: "评论成功"
            }), r.setData({
                commentBox: !1
            }), r.initComment();
        }).catch(function(e) {
            wx.hideLoading(), wx.showToast({
                title: "评论失败"
            }), console.log("评论失败", e);
        })) : wx.showModal({
            title: "提示",
            content: "请先输入评论内容",
            showCancel: !1
        });
    },
    getComment: function() {
        if (0 !== r.data.loading && !r.data.commentLoadComplete) {
            r.setData({
                loading: 0
            });
            var t = {
                eventId: r.data.eventId,
                pageSize: r.pageSize,
                pageNumber: r.pageNumber
            };
            (0, a.getComment)(t).then(function(t) {
                if (0 == t.data.length) r.setData({
                    commentLoadComplete: !0,
                    loading: 1
                }); else {
                    var a = r.data.commentsList;
                    a.push.apply(a, e(t.data)), r.setData({
                        commentsList: a,
                        loading: 1
                    }), r.pageNumber++;
                }
            }).catch(function(e) {
                r.setData({
                    loading: 1
                });
            });
        }
    },
    preventEvent: function() {},
    openImagePreview: function() {
        wx.setStorageSync("lookImgs", r.data.detail.pictureRecords), wx.navigateTo({
            url: "/pages/others/lookmidpic/lookmidpic?current=0"
        });
    },
    openDeleteEvent: function() {
        var e = r.data.detail.pictureRecords;
        e.map(function(e) {
            return e.eid = r.data.eventId, e;
        }), wx.setStorageSync("editPhotoArr", e), wx.navigateTo({
            url: "/pages/others/editphotos/editphotos?photosource=delete&isPicOrVideo=pic&sourcePage=blessActivity"
        });
    },
    toAlbum: function() {
        var e = {
            userId: wx.getStorageSync("userid"),
            fromUserId: r.fromUserID ? r.fromUserID : "",
            operation: "inBlessingActivities_detail_to_album",
            userLastLoginTime: i.enterTime,
            remark: r.data.eventId
        };
        i.stat.request(e);
        var t = i.globalData.scene;
        1007 == t || 1008 == t ? wx.redirectTo({
            url: "/pages/blessingActivities/pages/album/album?groupId=" + r.data.groupId
        }) : wx.navigateBack({
            delta: 1
        });
    },
    blessingModalClose: function(e) {
        var t = r.data.blessingModal;
        t.show = !1, r.setData({
            blessingModal: t
        });
    }
});