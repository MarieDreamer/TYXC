var e = require("../../utils/api.js"), t = require("../../utils/reg.js"), a = require("../../utils/util.js"), i = getApp(), n = require("../../utils/hotActive.js").hotActive, o = void 0, s = null, r = wx.createInnerAudioContext();

r.onPlay(function() {
    clearInterval(s), console.log("开始播放");
    var e = o.data.events, t = o.currentPlayAudioIndex, a = e[t].audioDuration;
    e[t].audioPlayStatus = "play", o.setData({
        events: e,
        playTime: a
    }), s = setInterval(function() {
        a <= 0 ? clearInterval(s) : (a--, o.setData({
            playTime: a
        }));
    }, 1e3);
}), r.onPause(function() {
    clearInterval(s), console.log("暂停");
}), r.onStop(function() {
    clearInterval(s), console.log("停止");
    var e = o.data.events;
    e[o.currentPlayAudioIndex].audioPlayStatus = "ready", o.setData({
        events: e
    });
}), r.onEnded(function() {
    clearInterval(s), console.log("自然结束");
    var e = o.data.events;
    e[o.currentPlayAudioIndex].audioPlayStatus = "ready", o.setData({
        events: e
    });
}), r.onError(function(e) {
    clearInterval(s), r.stop(), wx.showToast({
        title: "播放音频出错",
        icon: "none"
    }), console.log(e.errMsg), console.log(e.errCode);
}), Page({
    data: {
        userId: wx.getStorageSync("userid"),
        pageUserId: -1,
        creatorId: -1,
        deletePermission: -1,
        user: {
            nick: "",
            avatar: "",
            point: "",
            cover: "",
            albumName: "",
            eventNumber: 0,
            photoNumber: 0,
            deletePermission: -1
        },
        events: [],
        eventLoadComplete: -1,
        loading: -1,
        isShowPlayer: !1,
        videoUrl: "",
        videoCoverUrl: "",
        showComInput: !1,
        placehold: "对ta说点啥...",
        inputfocus: !1,
        menuModalShow: !1,
        currentE: Object,
        playTime: Number,
        more: {
            download: !0,
            sync: !0,
            del: !0,
            stick: !0
        }
    },
    onLoad: function(e) {
        i.stat.statpv({
            route: this.route,
            options: e
        }), o = this, this.pageUserId = e.pageUserId, this.groupId = e.groupId, this.userId = wx.getStorageSync("userid"), 
        this.creator = e.creator, this.albumType = e.albumType, this.inBlacklist = -1, this.gOrigin = -1, 
        this.gType = -1, this.eventQRCodeCanPublish = -1, this.lastEid = "", this.type = "initialize", 
        this.disabled = -1, this.currentPlayAudioIndex = -1, this.setData({
            pageUserId: e.pageUserId
        }), this.deletedPhotos = {
            eid: -1,
            photoIds: []
        }, this.comment = {
            cid: -1,
            eid: -1,
            text: -1,
            replyUserId: -1,
            nick: -1
        }, this.multipleComment = [], this.delComment = {
            cid: -1,
            eid: -1
        }, this.delMultipleComment = {
            eid: -1,
            cids: []
        }, this.uLike = {
            eid: -1
        }, this.uStick = {
            eid: -1,
            isStick: -1
        }, this.getPageData();
    },
    onReady: function() {},
    onShow: function() {
        this.getIsInBlacklist(), this.setData({
            menuModalShow: !1
        }), -1 != this.deletedPhotos.eid && this.deletedPhotos.photoIds.length > 0 && (this.updateEvents(this.deletedPhotos.eid, this.deletedPhotos.photoIds), 
        this.deletedPhotos.eid = -1, this.deletedPhotos.photoIds.length = 0), -1 != this.comment.eid && (this.updateComment(this.comment), 
        this.comment.eid = -1, this.comment.text = -1, this.comment.replyUserId = -1), this.multipleComment.length > 0 && (this.updateMultipleComment(this.multipleComment), 
        this.multipleComment.length = 0), -1 != this.delComment.eid && (this.updateDeleteComment(this.delComment.eid, this.delComment.cid), 
        this.delComment.eid = -1, this.delComment.cid = -1), -1 != this.delMultipleComment.eid && (this.updateDeleteMultipleComment(this.delMultipleComment.eid, this.delMultipleComment.cids), 
        this.delMultipleComment.eid = -1, this.delMultipleComment.cids.length = 0), -1 != this.uLike.eid && (this.updateLike(this.uLike.eid), 
        this.uLike.eid = -1), -1 != this.uStick.eid && (this.updateStick(this.uStick.eid, this.uStick.isStick), 
        this.uStick.eid = -1, this.uStick.isStick = -1);
    },
    onHide: function() {
        r.stop();
    },
    onUnload: function() {
        r.stop();
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        1 !== this.data.eventLoadComplete && (this.data.events.length > 0 && (this.lastEid = this.data.events[this.data.events.length - 1].eid), 
        this.type = "loading", this.getPageData());
    },
    pullUpLoad: function() {
        1 !== this.data.eventLoadComplete && this.data.events.length > 0 && (this.lastEid = this.data.events[this.data.events.length - 1].eid, 
        this.type = "loading", this.getPageData());
    },
    getPageData: function() {
        var t = this;
        0 !== t.disabled && (t.disabled = 0, t.setData({
            loading: 0
        }), wx.request({
            url: e.host + "/YinianProject/newEvents/personalHomePage",
            method: "GET",
            data: {
                userid: t.pageUserId,
                groupid: t.groupId,
                type: t.type,
                eid: t.lastEid,
                albumType: t.albumType
            },
            success: function(e) {
                var a = e.data;
                if (0 === a.code) {
                    if ("initialize" == t.type) {
                        var i = t.formatUserInfo(a.data[0].users);
                        t.eventQRCodeCanPublish = a.data[0].users.eventQRCodeCanPublish, t.gOrigin = a.data[0].users.gOrigin, 
                        t.gtype = a.data[0].users.gtype, t.setData({
                            user: i
                        }), t.generatePermission(t);
                    }
                    var n = t.formatEventData(a.data[0].eventList, t.userId);
                    if (console.log("receivedEvents", n), 0 === n.length) return void t.setData({
                        eventLoadComplete: 1
                    });
                    var o = t.data.events.concat(n);
                    t.setData({
                        events: o
                    });
                } else wx.showToast({
                    title: "数据请求失败",
                    image: "/images/toast_warning.png",
                    duration: 2e3
                });
            },
            error: function(e) {
                wx.showToast({
                    title: "数据请求失败",
                    image: "/images/toast_warning.png",
                    duration: 2e3
                });
            },
            fail: function() {
                wx.showToast({
                    title: "数据请求失败",
                    image: "/images/toast_warning.png",
                    duration: 2e3
                });
            },
            complete: function() {
                t.disabled = 1, t.setData({
                    loading: 1
                });
            }
        }));
    },
    toIntegral: function() {
        wx.navigateTo({
            url: "/pages/integral/pages/mine/mine"
        });
    },
    openMore_old: function(e) {
        var t = this;
        -1 == t.creator && wx.showToast({
            title: "相册创建者非法",
            image: "/images/toast_warning.png",
            duration: 2e3
        });
        var a = e.currentTarget.dataset.eid, i = e.currentTarget.dataset.emain, n = e.currentTarget.dataset.piclist, o = e.currentTarget.dataset.stickstatus, s = 0 == o ? "置顶动态" : "取消置顶";
        console.log("stickStatus", o, s, a), t.userId == t.creator && t.userId == t.pageUserId && wx.showActionSheet({
            itemList: [ s, "删除动态" ],
            itemColor: "#333333",
            success: function(e) {
                0 === e.tapIndex && t.stickEvent(a, o, t.userId, t.groupId, t), 1 === e.tapIndex && t.openDeleteEvent(i, n);
            }
        }), t.userId === t.creator && t.userId != t.pageUserId && wx.showActionSheet({
            itemList: [ s ],
            itemColor: "#333333",
            success: function(e) {
                0 === e.tapIndex && t.stickEvent(a, o, t.userId, t.groupId, t);
            }
        }), t.userId != t.creator && t.userId == t.pageUserId && wx.showActionSheet({
            itemList: [ "删除动态" ],
            itemColor: "#333333",
            success: function(e) {
                0 === e.tapIndex && t.openDeleteEvent(i, n);
            }
        }), t.userId == t.creator || (t.userId, t.pageUserId);
    },
    openMore: function(e) {
        var t = this;
        -1 == t.creator && wx.showToast({
            title: "相册创建者非法",
            image: "/images/toast_warning.png",
            duration: 2e3
        });
        e.currentTarget.dataset.eid;
        var a = e.currentTarget.dataset.emain, i = (e.currentTarget.dataset.piclist, e.currentTarget.dataset.stickstatus, 
        t.data.more);
        0 == a ? (i.download = !0, i.sync = !0) : 4 == a ? (i.download = !0, i.sync = !1) : (i.download = !1, 
        i.sync = !1), t.userId == t.creator && t.userId == t.pageUserId && (i.del = !0, 
        i.stick = !0), t.userId === t.creator && t.userId != t.pageUserId && (i.del = !1, 
        i.stick = !0), t.userId != t.creator && t.userId == t.pageUserId && (i.del = !0, 
        i.stick = !1), t.userId != t.creator && t.userId != t.pageUserId && (i.del = !1, 
        i.stick = !1), t.setData({
            currentE: e,
            more: i,
            menuModalShow: !0
        });
    },
    openImagePreview: function(e) {
        var t = e.currentTarget.dataset.current_index, a = e.currentTarget.dataset.piclist;
        wx.setStorageSync("lookImgs", a), wx.navigateTo({
            url: "/pages/others/lookmidpic/lookmidpic?current=" + t
        });
    },
    openVideoPlayer: function(e) {
        var t = e.currentTarget.dataset;
        this.setData({
            isShowPlayer: !0,
            videoUrl: t.url,
            videoCoverUrl: t.cover
        });
    },
    closeVideoPlayer: function(e) {
        this.setData({
            isShowPlayer: !1,
            videoUrl: "",
            videoCoverUrl: ""
        });
    },
    preventTouchMove: function() {},
    openEventDetail: function(e) {
        var t = e.currentTarget.dataset.eid;
        wx.navigateTo({
            url: "/pages/eventdetail/eventdetail?lastPage=personalPage&eid=" + t + "&efrom=personalPage"
        });
    },
    seeBigVideo: function(e) {
        var t = e.currentTarget.dataset.url;
        wx.setStorageSync("videourl", t), wx.navigateTo({
            url: "/pages/viewscoll/bigvideo/bigvideo"
        });
    },
    openShare: function(e) {
        if (-1 !== this.eventQRCodeCanPublish) {
            var t = e.currentTarget.dataset.eid, a = e.currentTarget.dataset.emain, i = e.currentTarget.dataset.piclist;
            wx.setStorageSync("sharePagePic", i), wx.navigateTo({
                url: "/pages/others/sharepage/sharepage?lastPage=personalPage&clickfrom=eid&eid=" + t + "&eMain=" + a + "&groupid=" + this.groupId + "&eventQRCodeCanPublish=" + this.eventQRCodeCanPublish
            });
        } else wx.showToast({
            title: "跳转参数非法",
            image: "/images/toast_warning.png",
            duration: 2e3
        });
    },
    like: function(t) {
        if (this.disabled = 0, 1 !== t.currentTarget.dataset.like_status) {
            var a = this;
            a.isLikepushId(), n(a.userId, wx.getStorageSync("groupid"), "like");
            var i = t.currentTarget.dataset.eid, o = t.detail.formId, s = a.data.events;
            s.forEach(function(e) {
                if (e.eid == i) return e.isLike = 1, void e.likeCount++;
            }), a.setData({
                events: s
            }), wx.request({
                url: e.host + "/YinianProject/yinian/AttachOrRemoveExpressionByLkNew",
                method: "GET",
                data: {
                    userid: a.userId,
                    eid: i,
                    type: "like",
                    formID: o
                },
                success: function(e) {
                    e.data;
                },
                error: function(e) {},
                fail: function() {},
                complete: function() {
                    a.disabled = 1;
                }
            });
        } else this.disabled = 1;
    },
    openSyncEvent: function() {
        var e = o.data.currentE, t = e.currentTarget.dataset.emain, a = e.currentTarget.dataset.piclist, i = 4 == t ? "video" : "pic";
        -1 != this.inBlacklist ? 0 != this.inBlacklist ? (wx.setStorageSync("editPhotoArr", a), 
        wx.navigateTo({
            url: "/pages/others/editphotos/editphotos?photosource=photosync&isPicOrVideo=" + i
        })) : wx.showModal({
            title: "提示",
            content: "由于您先前操作已违反规定，已被限制操作，如有疑问可联系微信客服yiniankefu",
            showCancel: !1
        }) : wx.showToast({
            title: "黑名单状态非法"
        });
    },
    openDownload: function() {
        var e = o.data.currentE, t = e.currentTarget.dataset.emain, a = e.currentTarget.dataset.piclist, i = 4 == t ? "video" : "pic";
        wx.setStorageSync("editPhotoArr", a), wx.navigateTo({
            url: "/pages/others/editphotos/editphotos?photosource=download&isPicOrVideo=" + i
        });
    },
    stickEvent_old: function(t, a, i, n, o) {
        if (0 !== o.disabled) {
            o.disabled = 0;
            var s = 1 == a ? "cancel" : "stick", r = 1 == a ? "取消置顶" : "置顶";
            wx.showModal({
                title: "提示",
                content: "是否" + r + "此动态",
                success: function(d) {
                    d.confirm ? (wx.showLoading({
                        title: "处理中"
                    }), wx.request({
                        url: e.host + "/YinianProject/yinian/ModifyEventLevel",
                        data: {
                            userid: i,
                            groupid: n,
                            eid: t,
                            type: s
                        },
                        success: function(e) {
                            if (0 === e.data.code) {
                                wx.showToast({
                                    title: r + "成功"
                                });
                                var i = o.data.events;
                                i.forEach(function(e, i) {
                                    e.eid !== t || (e.stickStatus = 0 == a ? 1 : 0);
                                }), o.setData({
                                    events: i
                                });
                            } else wx.showToast({
                                title: "操作失败",
                                image: "/images/toast_warning.png",
                                duration: 2e3
                            });
                        },
                        error: function(e) {
                            wx.showToast({
                                title: "操作失败",
                                image: "/images/toast_warning.png",
                                duration: 2e3
                            });
                        },
                        fail: function() {
                            wx.showToast({
                                title: "操作失败",
                                image: "/images/toast_warning.png",
                                duration: 2e3
                            });
                        },
                        complete: function() {
                            o.disabled = 1, wx.hideLoading();
                        }
                    })) : o.disabled = 1;
                }
            });
        } else wx.showToast({
            title: "手速太快",
            image: "/images/toast_warning.png",
            duration: 2e3
        });
    },
    stickEvent: function() {
        var t = this;
        t.setData({
            menuModalShow: !1
        });
        var a = t.data.currentE, i = a.currentTarget.dataset.eid, n = a.currentTarget.dataset.stickstatus;
        if (0 !== t.disabled) {
            t.disabled = 0;
            var o = 1 == n ? "cancel" : "stick", s = 1 == n ? "取消置顶" : "置顶";
            wx.showModal({
                title: "提示",
                content: "是否" + s + "此动态",
                success: function(a) {
                    a.confirm ? (wx.showLoading({
                        title: "处理中"
                    }), wx.request({
                        url: e.host + "/YinianProject/yinian/ModifyEventLevel",
                        data: {
                            userid: t.userId,
                            groupid: t.groupId,
                            eid: i,
                            type: o
                        },
                        success: function(e) {
                            if (0 === e.data.code) {
                                wx.showToast({
                                    title: s + "成功"
                                });
                                var a = t.data.events;
                                a.forEach(function(e, t) {
                                    e.eid !== i || (e.stickStatus = 0 == n ? 1 : 0);
                                }), t.setData({
                                    events: a
                                });
                            } else wx.showToast({
                                title: "操作失败",
                                image: "/images/toast_warning.png",
                                duration: 2e3
                            });
                        },
                        error: function(e) {
                            wx.showToast({
                                title: "操作失败",
                                image: "/images/toast_warning.png",
                                duration: 2e3
                            });
                        },
                        fail: function() {
                            wx.showToast({
                                title: "操作失败",
                                image: "/images/toast_warning.png",
                                duration: 2e3
                            });
                        },
                        complete: function() {
                            t.disabled = 1, wx.hideLoading();
                        }
                    })) : t.disabled = 1;
                }
            });
        } else wx.showToast({
            title: "手速太快",
            image: "/images/toast_warning.png",
            duration: 2e3
        });
    },
    openDeleteEvent: function(e, t) {
        var a = 4 == e ? "video" : "pic";
        wx.setStorageSync("editPhotoArr", t), wx.navigateTo({
            url: "/pages/others/editphotos/editphotos?photosource=delete&isPicOrVideo=" + a + "&fromPage=presonalPage"
        });
    },
    deleteEventRequest: function(e) {
        var t = this;
        e && wx.showModal({
            title: "删除动态",
            content: "确定删除此条动态吗？",
            confirmColor: "#353535",
            success: function(i) {
                i.confirm && a.wxreq({
                    pathname: "YinianProject/yinian/DeleteEvent",
                    data: {
                        userid: wx.getStorageSync("userid"),
                        eventId: e
                    }
                }).then(function(a) {
                    if ("success" == a.msg) {
                        wx.showToast({
                            title: "删除成功",
                            icon: "success",
                            duration: 2e3
                        });
                        var i = t.data.events;
                        i = i.filter(function(t, a) {
                            return t.eid != e;
                        }), t.setData({
                            events: i
                        });
                    }
                });
            }
        });
    },
    deleteEvent: function() {
        var e = this;
        e.setData({
            menuModalShow: !1
        });
        var t = e.data.currentE, a = t.currentTarget.dataset.eid, i = t.currentTarget.dataset.emain, n = t.currentTarget.dataset.piclist;
        if (0 == i || 4 == i) {
            var o = 4 == i ? "video" : "pic";
            wx.setStorageSync("editPhotoArr", n), wx.navigateTo({
                url: "/pages/others/editphotos/editphotos?photosource=delete&isPicOrVideo=" + o + "&fromPage=presonalPage"
            });
        } else e.deleteEventRequest(a);
    },
    openComment: function(e) {
        var t = e.currentTarget.dataset.eid;
        this.commentEid = t, this.commentedUserid = 10, this.commentedname = "系统消息", this.setData({
            showComInput: !0,
            inputfocus: !0,
            placehold: "对ta说点啥...",
            contentCurrent: !1
        });
    },
    openReply: function(e) {
        var t = e.currentTarget.dataset.eid, a = e.currentTarget.dataset.nick, i = e.currentTarget.dataset.cuserid;
        i != this.userId ? (this.commentEid = t, this.commentedUserid = i, this.commentedname = a, 
        this.setData({
            showComInput: !0,
            inputfocus: !0,
            placehold: "@" + a + ":",
            contentCurrent: !1
        })) : this.deleteComment(e);
    },
    sendcomment: function(e) {
        var o = e.detail.formId, s = e.detail.value.content, r = wx.getStorageSync("userid") || i.globalData.userInfo.userid, d = this.commentEid, c = this.commentedUserid, u = this.commentedname;
        if (0 != s.length) if (t.testStr(s)) wx.showModal({
            title: "包含敏感词",
            content: "请勿输入敏感词汇",
            showCancel: !1
        }); else {
            var l = this;
            l.isCommentpushId(), n(r, wx.getStorageSync("groupid"), "comment");
            var m = a.formatTimeWithSecond(new Date()), h = {
                cid: -1,
                commentedUser: {
                    userid: c,
                    unickname: u
                },
                commentUser: {
                    userid: r,
                    unickname: i.globalData.userInfo.nickName,
                    upic: i.globalData.userInfo.avatarUrl
                },
                ccontent: s,
                ctime: m
            }, g = Array.from(l.data.events);
            l.data.events.forEach(function(e, t) {
                e.eid == d && (g[t].comments.unshift(h), g[t].commentCount = parseInt(g[t].commentCount) + 1);
            }), l.setData({
                showComInput: !1,
                events: g,
                value: "",
                contentCurrent: !1,
                placehold: "说点什么..."
            }), l.commentedUserid = 10, l.commentedname = "系统消息", wx.showToast({
                title: "发表成功",
                icon: "success",
                duration: 1e3
            }), a.wxreq({
                pathname: "YinianProject/yinian/SendComment1",
                data: {
                    commentUserId: r,
                    commentedUserId: c,
                    eventId: d,
                    content: s,
                    formID: o
                }
            }).then(function(e) {
                0 == e.code && (l.data.events.forEach(function(t) {
                    t.eid == d && t.comments.forEach(function(t) {
                        t.ctime === m && (t.cid = e.data[0].cid);
                    });
                }), l.setData({
                    events: l.data.events
                }));
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
    checkchange: function(e) {
        var t = e.detail.value.trim().length > 0;
        this.setData({
            contentCurrent: t
        });
    },
    stop: function() {},
    deleteComment: function(t) {
        var a = this, i = t.currentTarget.dataset.cid, n = t.currentTarget.dataset.eid, o = t.currentTarget.dataset.cuserid, s = a.gOrigin, r = a.gtype;
        o != a.userId && a.creator != a.userId || o != a.userId && a.creator == a.userId && 1 != s && 11 != r || wx.showModal({
            title: "提示",
            content: "是否删除该条评论",
            success: function(t) {
                t.confirm && wx.request({
                    url: e.getUrl("YinianProject/yinian/DeleteComment"),
                    method: "GET",
                    data: {
                        commentID: i
                    },
                    success: function(e) {
                        if (0 == e.data.code) {
                            var t = a.data.events;
                            t.forEach(function(e) {
                                if (e.eid == n) {
                                    var t = e.comments;
                                    t.forEach(function(e, a) {
                                        e.cid == i && t.splice(a, 1);
                                    });
                                }
                            }), a.setData({
                                events: t
                            });
                        } else wx.showToast({
                            title: "删除评论失败",
                            image: "/images/toast_warning.png",
                            duration: 2e3
                        });
                    },
                    error: function(e) {
                        wx.showToast({
                            title: "删除评论失败",
                            image: "/images/toast_warning.png",
                            duration: 2e3
                        });
                    },
                    fail: function() {
                        wx.showToast({
                            title: "删除评论失败",
                            image: "/images/toast_warning.png",
                            duration: 2e3
                        });
                    },
                    complete: function() {}
                });
            }
        });
    },
    getIsInBlacklist: function() {
        var t = this;
        wx.request({
            url: e.host + "/YinianProject/user/inBlackList",
            methods: "GET",
            data: {
                userid: t.userId
            },
            success: function(e) {
                var a = e.data;
                0 == a.code ? t.inBlacklist = a.data[0].inBlackList : console.log("调取黑名单失败");
            }
        });
    },
    formatUserInfo: function(e) {
        var t = this.data.user;
        return t.nick = e.unickname, t.avatar = e.upic, t.point = e.useablePoints || 0, 
        t.cover = e.gpic, t.albumName = e.gname, t.eventNumber = e.eventCnt, t.photoNumber = e.picCnt, 
        t;
    },
    formatEventData: function(e, t, a) {
        var i = this, n = [];
        return e.forEach(function(e) {
            var a = i.formatTime(e.euploadtime), s = 0;
            e.like.length > 0 && e.like.forEach(function(e) {
                e.likeUserID == t && (s = 1);
            });
            var r = {
                download: !0,
                sync: !0,
                comment: !0,
                like: !0,
                andFriends: !0
            };
            1 != e.eMain && 2 != e.eMain || (r.download = !1, r.sync = !1), 4 == e.eMain && (r.sync = !1), 
            3 == o.albumType && (r.comment = !1, r.like = !1), 3 != o.albumType && 1 != o.albumType && 5 != o.albumType || (r.andFriends = !1), 
            2 == o.albumType && 2 == e.eMain && (r.andFriends = !1);
            var d = {
                eid: e.eid,
                avatar: e.upic,
                nick: e.unickname,
                time: a,
                desc: e.etext,
                location: e.eplace,
                isLike: s,
                textTitle: e.textTitle,
                likeCount: e.likeCnt,
                stickStatus: e.elevel,
                eMain: e.eMain,
                photos: e.picList,
                audio: e.eaudio,
                audioDuration: e.eaudioDuration,
                audioPlayStatus: "ready",
                andFriends: e.attentionMember,
                comments: e.comments,
                commentCount: e.commentCnt,
                jurisdiction: r
            };
            n.push(d);
        }), n;
    },
    formatTime: function(e) {
        var t = Date.parse(e.replace(/-/gi, "/")) / 1e3, a = void 0, i = void 0, n = void 0, o = void 0, s = parseInt(new Date().getTime() / 1e3), r = void 0, d = new Date(1e3 * t), c = d.getFullYear(), u = d.getMonth() + 1, l = d.getDate(), m = d.getHours(), h = d.getMinutes(), g = d.getSeconds();
        return u < 10 && (u = "0" + u), l < 10 && (l = "0" + l), m < 10 && (m = "0" + m), 
        h < 10 && (h = "0" + h), g < 10 && (g = "0" + g), r = s - t, o = parseInt(r / 86400), 
        n = parseInt(r / 3600), i = parseInt(r / 60), a = parseInt(r), o > 0 && o < 3 ? o + "天前" : o <= 0 && n > 0 ? n + "小时前" : n <= 0 && i > 0 ? i + "分钟前" : a < 60 ? a <= 0 ? "刚刚发表" : a + "秒前" : o >= 3 && o < 30 ? u + "-" + l + " " + m + ":" + h : o >= 30 ? c + "-" + u + "-" + l + " " + m + ":" + h : void 0;
    },
    updateEvents: function(e, t) {
        var a = this, i = a.data.events;
        i.forEach(function(a) {
            if (a.eid == e) {
                var i;
                !function() {
                    var e = a.photos;
                    for (i = e.length - 1; i >= 0; i--) !function() {
                        var a = e[i];
                        t.forEach(function(t) {
                            a.pid == t && e.splice(i, 1);
                        });
                    }();
                }();
            }
        }), a.setData({
            events: i
        });
    },
    updateComment: function(e) {
        var t = this, a = t.data.events, i = wx.getStorageSync("userInfo"), n = {
            cid: e.cid,
            ceid: e.eid,
            ccontent: e.text,
            commentUser: {
                userid: i.userid,
                unickname: i.nickName
            },
            commentedUser: {}
        };
        -1 === e.replyUserId ? n.commentedUser = {
            userid: "10",
            unickname: "系统消息",
            upic: "http://7xlmtr.com1.z0.glb.clouddn.com/default.jpg"
        } : n.commentedUser = {
            userid: e.replyUserId,
            unickname: e.nick,
            upic: "http://7xlmtr.com1.z0.glb.clouddn.com/default.jpg"
        }, a.forEach(function(t) {
            t.eid === e.eid && (t.commentCount++, t.comments.unshift(n));
        }), t.setData({
            events: a
        });
    },
    updateMultipleComment: function(e) {
        var t = this, a = t.data.events, i = wx.getStorageSync("userInfo"), n = e.map(function(e) {
            var t = {
                cid: e.cid,
                ceid: e.eid,
                ccontent: e.text,
                commentUser: {
                    userid: i.userid,
                    unickname: i.nickName
                },
                commentedUser: {}
            };
            return e.replyUserId || e.nick ? t.commentedUser = {
                userid: e.replyUserId,
                unickname: e.nick,
                upic: "http://7xlmtr.com1.z0.glb.clouddn.com/default.jpg"
            } : t.commentedUser = {
                userid: "10",
                unickname: "系统消息",
                upic: "http://7xlmtr.com1.z0.glb.clouddn.com/default.jpg"
            }, t;
        });
        a.forEach(function(e) {
            n.forEach(function(t) {
                e.eid === t.ceid && (e.commentCount++, e.comments.unshift(t));
            });
        }), t.setData({
            events: a
        });
    },
    generatePermission: function(e) {
        e.pageUserId == e.userId && e.setData({
            deletePermission: 1
        }), e.pageUserId == e.userId || e.creator != e.userId || 1 != e.gOrigin && 11 != e.gtype || (console.log("看别人"), 
        e.setData({
            deletePermission: 1
        }));
    },
    updateDeleteComment: function(e, t) {
        var a = this, i = a.data.events;
        i.forEach(function(a) {
            if (a.eid == e) {
                var i = a.comments;
                i.forEach(function(e, a) {
                    e.cid == t && i.splice(a, 1);
                });
            }
        }), a.setData({
            events: i
        });
    },
    updateDeleteMultipleComment: function(e, t) {
        var a = this, i = a.data.events;
        i.forEach(function(a) {
            if (a.eid == e) {
                var i = void 0;
                i = a.comments.filter(function(e) {
                    var i = !0;
                    return t.forEach(function(t) {
                        i && e.cid == t && (a.commentCount--, i = !1);
                    }), i;
                }), a.comments = i;
            }
        }), a.setData({
            events: i
        });
    },
    updateStick: function(e, t) {
        var a = this, i = a.data.events;
        i.forEach(function(a) {
            a.eid !== e || (a.stickStatus = t);
        }), a.setData({
            events: i
        });
    },
    updateLike: function(e) {
        var t = this, a = t.data.events;
        a.forEach(function(t) {
            if (t.eid == e) return t.isLike = 1, void t.likeCount++;
        }), t.setData({
            events: a
        });
    },
    playAudio: function(e) {
        var t = o.data.events, a = o.currentPlayAudioIndex;
        -1 != a && (t[a].audioPlayStatus = "ready", o.setData({
            events: t
        }));
        var i = e.currentTarget.dataset.e_index, n = e.currentTarget.dataset.audio_src;
        e.currentTarget.dataset.audio_duration;
        o.currentPlayAudioIndex = i, r.src = n, r.play();
    },
    stopAudio: function(e) {
        e.currentTarget.dataset.e_index, e.currentTarget.dataset.audio_src, e.currentTarget.dataset.audio_duration;
        r.stop();
    },
    isLikepushId: function() {
        "" != i.pushId && void 0 != i.pushId && a.wxreq({
            pathname: "YinianProject/ep/isLike",
            data: {
                pushId: i.pushId,
                port: i.globalData.port
            }
        }).then(function(e) {}, function(e) {});
    },
    isCommentpushId: function() {
        "" != i.pushId && void 0 != i.pushId && a.wxreq({
            pathname: "YinianProject/ep/isComment",
            data: {
                pushId: i.pushId,
                port: i.globalData.port
            }
        }).then(function(e) {}, function(e) {});
    }
});