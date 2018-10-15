var t = require("../../utils/util.js"), e = require("../../utils/api.js"), o = require("../../utils/reg.js"), a = getApp(), i = [ "YinianProject/ep/queryAllGroupEventFirst", "YinianProject/ep/queryAllGroupLikeFirst", "YinianProject/ep/queryAllGroupCommentFirst", "", "YinianProject/ep/queryAllGroupInviteFirst", "YinianProject/ep/queryAllGroupJoinFirst" ];

Page({
    data: {
        userid: null,
        type: "",
        pushId: "",
        groupId: 0,
        typeUrl: "",
        showComInput: !1,
        inputfocus: !1,
        placehold: "对ta说点啥...",
        contentCurrent: !1,
        notifyAlbums: [],
        tipText: "点击查看更多",
        hasloadall: !1,
        loadingImgOrText: !1,
        notifylimit: 0
    },
    onLoad: function(t) {
        console.log(t), a.stat.statpv({
            route: this.route,
            options: t
        }), a.pushId = t.pushId, a.globalData.port = t.port, console.log(a.globalData.port), 
        this.enterLoadPage(t.pushId), this.setData({
            type: t.type,
            pushId: t.pushId
        }), t.groupId && this.setData({
            groupId: t.groupId
        }), this.type = t.type, this.showNotificationtext(t.type), t.version && (this.version = t.version), 
        t.port && (this.port = t.port, this.setData({
            port: t.port
        })), t.fromUserID && (this.fromUserID = t.fromUserID), t.fromSpaceID && (this.fromSpaceID = t.fromSpaceID), 
        t.fromEventID && (this.fromEventID = t.fromEventID), this.eventId = t.eventId, this.triggerUserId = t.triggerUserId;
    },
    onReady: function() {},
    onShow: function() {
        var t = this.version ? this.version : "", e = this.port ? this.port : "", o = this.fromUserID ? this.fromUserID : 0, i = this.fromSpaceID ? this.fromSpaceID : 0, n = this.fromEventID ? this.fromEventID : 0, s = this;
        1 != s.data.fromlast ? a.getUserInfo(function(t) {
            console.log(t), s.setData({
                userid: t.userid,
                showLoadingImg: !0
            }), s.loadNotification();
        }, t, e, o, i, n, "notification", function() {}) : s.timer = setTimeout(function() {
            s.setData({
                fromlast: 0
            });
        }, 100);
    },
    onHide: function() {
        this.setData({
            fromlast: 1
        });
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        if (console.log("onReachBottomtop"), 0 != this.data.notifyAlbums.length && !this.isLoading) if (this.data.hasloadall) wx.showToast({
            title: "没有更多了",
            icon: "none",
            duration: 2e3
        }); else {
            var t = this;
            console.log("onReachBottom"), t.loadNotification();
        }
    },
    loadNotification: function() {
        var e = this;
        e.isLoadingup || (e.isLoadingup = !0, e.setData({
            loadingImgOrText: !0
        }), 0 == e.data.groupId ? t.wxreq({
            pathname: e.data.typeUrl,
            data: {
                userId: e.data.userid,
                limit: e.data.notifylimit
            }
        }).then(function(t) {
            if (console.log(t), e.isLoadingup = !1, 0 != t.code) return e.setData({
                loadingImgOrText: !1,
                hasloadall: !1
            }), void (e.data.notifylimit ? wx.showModal({
                title: "提示",
                content: "获取通知失败",
                showCancel: !1
            }) : wx.showModal({
                title: "提示",
                content: "获取通知失败",
                showCancel: !1,
                success: function(t) {
                    t.confirm ? (console.log("用户点击确定"), e.backtohome()) : t.cancel && console.log("用户点击取消");
                }
            }));
            t.data.length < 10 ? e.setData({
                loadingImgOrText: !1,
                hasloadall: !0
            }) : e.setData({
                loadingImgOrText: !1
            });
            var o = e.data.notifyAlbums.concat(t.data);
            e.setData({
                notifyAlbums: o,
                notifylimit: e.data.notifylimit + 1
            });
        }, function(t) {
            e.isLoadingup = !1, e.setData({
                loadingImgOrText: !1
            }), e.data.notifylimit ? wx.showModal({
                title: "提示",
                content: "获取通知失败",
                showCancel: !1
            }) : wx.showModal({
                title: "提示",
                content: "获取通知失败",
                showCancel: !1,
                success: function(t) {
                    t.confirm ? (console.log("用户点击确定"), e.backtohome()) : t.cancel && console.log("用户点击取消");
                }
            });
        }) : (console.log(e.data.typeUrl), t.wxreq({
            pathname: e.data.typeUrl,
            data: {
                userId: e.data.userid,
                limit: e.data.notifylimit,
                groupId: e.data.groupId
            }
        }).then(function(t) {
            if (console.log(t), e.isLoadingup = !1, 0 != t.code) return e.setData({
                loadingImgOrText: !1,
                hasloadall: !1
            }), void (e.data.notifylimit ? wx.showModal({
                title: "提示",
                content: "获取通知失败",
                showCancel: !1
            }) : wx.showModal({
                title: "提示",
                content: "获取通知失败",
                showCancel: !1,
                success: function(t) {
                    t.confirm ? (console.log("用户点击确定"), e.backtohome()) : t.cancel && console.log("用户点击取消");
                }
            }));
            t.data.length < 10 ? e.setData({
                loadingImgOrText: !1,
                hasloadall: !0
            }) : e.setData({
                loadingImgOrText: !1
            });
            var o = e.data.notifyAlbums.concat(t.data);
            e.setData({
                notifyAlbums: o,
                notifylimit: e.data.notifylimit + 1
            });
        }, function(t) {
            e.isLoadingup = !1, e.setData({
                loadingImgOrText: !1
            }), e.data.notifylimit ? wx.showModal({
                title: "提示",
                content: "获取通知失败",
                showCancel: !1
            }) : wx.showModal({
                title: "提示",
                content: "获取通知失败",
                showCancel: !1,
                success: function(t) {
                    t.confirm ? (console.log("用户点击确定"), e.backtohome()) : t.cancel && console.log("用户点击取消");
                }
            });
        })));
    },
    gotoalbum: function(t) {
        this.setData({
            fromlast: 1
        });
        switch (this.enterAlbum(t.target.dataset.groupnewtype, t.target.dataset.groupid, 1), 
        t.target.dataset.groupnewtype) {
          case 2:
          case 3:
          case 4:
          case 5:
            wx.navigateTo({
                url: "/pages/grouptypescoll/grouptypescoll?from=notification&groupid=" + t.target.dataset.groupid
            });
            break;

          case 11:
            wx.navigateTo({
                url: "/pages/loversalbum/index/index?from=notification&groupid=" + t.target.dataset.groupid
            });
            break;

          default:
            console.log("viewscoll"), wx.navigateTo({
                url: "/pages/viewscoll/viewscoll?from=notification&groupid=" + t.target.dataset.groupid
            });
        }
    },
    gotoactive: function(t) {
        "Invite" != this.type && "Join" != this.type && (this.enterAlbum(t.target.dataset.groupnewtype, t.target.dataset.groupid, 0), 
        this.setData({
            fromlast: 1
        }), wx.navigateTo({
            url: "/pages/eventdetail/eventdetail?lastPage=notification&eid=" + t.currentTarget.dataset.eid + "&efrom=notification"
        }));
    },
    showNotificationtext: function(t, e) {
        var o = this;
        switch (t) {
          case "Event":
            o.setData({
                typeUrl: i[0]
            }), wx.setNavigationBarTitle({
                title: "动态消息"
            });
            break;

          case "Like":
            o.setData({
                typeUrl: i[1]
            }), wx.setNavigationBarTitle({
                title: "点赞消息"
            });
            break;

          case "Comment":
            o.setData({
                typeUrl: i[2]
            }), wx.setNavigationBarTitle({
                title: "评论消息"
            });
            break;

          case "@":
            o.setData({
                typeUrl: i[3]
            }), wx.setNavigationBarTitle({
                title: "@消息"
            });
            break;

          case "Invite":
            o.setData({
                typeUrl: i[4]
            }), wx.setNavigationBarTitle({
                title: "邀请消息"
            });
            break;

          default:
            o.setData({
                typeUrl: i[5]
            }), wx.setNavigationBarTitle({
                title: "加入消息"
            });
        }
    },
    enterLoadPage: function(e) {
        t.wxreq({
            pathname: "YinianProject/ep/intoPage",
            data: {
                pushId: e,
                port: a.globalData.port
            }
        }).then(function(t) {}, function(t) {});
    },
    enterAlbum: function(e, o, i) {
        var n = this;
        t.wxreq({
            pathname: "YinianProject/ep/intoEnterGroup",
            data: {
                userId: n.data.pushId,
                groupId: o,
                groupType: i,
                enterGroupNewType: e,
                port: a.globalData.port
            }
        }).then(function(t) {}, function(t) {});
    },
    stop: function() {},
    like: function(t) {
        if (console.log(t), wx.getStorageSync("userid")) {
            var o = t.detail.formId, i = t.currentTarget.dataset.likecatagry, n = t.currentTarget.dataset.eid, s = t.currentTarget.dataset.eidindex, r = this;
            i && (r.isLikepushId(), console.log(s), console.log(r.data.notifyAlbums[s].likeStatus), 
            r.data.notifyAlbums[s].likeStatus = 1, r.setData({
                notifyAlbums: r.data.notifyAlbums
            }), wx.showToast({
                title: "点赞成功",
                icon: "success",
                duration: 1e3
            }), wx.request({
                url: e.getUrl("YinianProject/yinian/AttachOrRemoveExpressionByLkNew"),
                data: {
                    type: i,
                    userid: a.globalData.userInfo.userid,
                    eid: n,
                    formID: o
                },
                success: function(t) {
                    t = t.data;
                }
            }));
        } else wx.showToast({
            title: "获取用户信息失败"
        });
    },
    isLikepushId: function() {
        "" != a.pushId && void 0 != a.pushId && t.wxreq({
            pathname: "YinianProject/ep/isLike",
            data: {
                pushId: a.pushId,
                port: a.globalData.port
            }
        }).then(function(t) {}, function(t) {});
    },
    isCommentpushId: function() {
        "" != a.pushId && void 0 != a.pushId && t.wxreq({
            pathname: "YinianProject/ep/isComment",
            data: {
                pushId: a.pushId,
                port: a.globalData.port
            }
        }).then(function(t) {}, function(t) {});
    },
    comment: function(t) {
        t.currentTarget.dataset.parentindex, t.currentTarget.dataset.childindex;
        var e = t.currentTarget.dataset.eid;
        this.commentEid = e, this.commentedUserid = 10, this.commentedname = "系统消息", this.setData({
            showComInput: !0,
            inputfocus: !0,
            placehold: "对ta说点啥...",
            contentCurrent: !1
        });
    },
    sendcomment: function(e) {
        var a = e.detail.formId, i = e.detail.value.content, n = this.data.userid, s = this.commentEid, r = this.commentedUserid;
        this.commentedname;
        if (console.log(n, s, r), 0 != i.length) if (o.testStr(i)) wx.showModal({
            title: "包含敏感词",
            content: "请勿输入敏感词汇",
            showCancel: !1
        }); else {
            var l = this;
            l.setData({
                showComInput: !1,
                value: "",
                contentCurrent: !1,
                placehold: "说点什么..."
            }), l.commentedUserid = 10, l.commentedname = "系统消息", wx.showToast({
                title: "发表成功",
                icon: "success",
                duration: 1e3
            }), l.isCommentpushId(), t.wxreq({
                pathname: "YinianProject/yinian/SendComment1",
                data: {
                    commentUserId: n,
                    commentedUserId: r,
                    eventId: s,
                    content: i,
                    formID: a
                }
            }).then(function(t) {
                0 == t.code && console.log(t);
            });
        } else wx.showModal({
            title: "提示",
            content: "请先输入评论内容",
            showCancel: !1
        });
    },
    hiddenWrite: function() {
        this.setData({
            showComInput: !1
        });
    },
    checkchange: function(t) {
        var e = t.detail.value.trim().length > 0;
        this.setData({
            contentCurrent: e
        });
    },
    backtohome: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    }
});