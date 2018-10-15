function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e = function() {
    function t(t, e) {
        var a = [], n = !0, i = !1, s = void 0;
        try {
            for (var o, r = t[Symbol.iterator](); !(n = (o = r.next()).done) && (a.push(o.value), 
            !e || a.length !== e); n = !0) ;
        } catch (t) {
            i = !0, s = t;
        } finally {
            try {
                !n && r.return && r.return();
            } finally {
                if (i) throw s;
            }
        }
        return a;
    }
    return function(e, a) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, a);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), a = require("../../utils/util.js"), n = require("../../utils/config.js"), i = getApp(), s = require("../../utils/api.js"), o = require("../../utils/reg.js"), r = wx.createInnerAudioContext(), d = require("../../utils/hotActive.js").hotActive, l = require("../../utils/albumsjump.js").albumsjump, c = 0, u = 0, h = 0, g = 0;

Page({
    data: {
        showFunModel: !1,
        eventlist: [],
        showLoadingImg: !1,
        loadingImgOrText: !0,
        loadImgState: !0,
        textArr: [ "精彩内容正在赶来...", "稍等一下啦...", "小忆正在加载中..." ],
        showPlayVideoModal: !1,
        videoUrl: {
            url: "",
            pcover: ""
        },
        showDisposeModel: !1,
        classArr: [ "pic1", "pic2", "pic3" ],
        usernumber: 3006789,
        maxnumber: 5000009,
        showComInput: !1,
        placehold: "对ta说点啥...",
        inputfocus: !1
    },
    onLoad: function(t) {
        i.stat.statpv({
            route: this.route,
            options: t
        });
        var e = this;
        this.isloading = !1, this.deletedPhotos = {
            eid: -1,
            photoIds: []
        };
        var n = a.randomNum(0, 2);
        this.setData({
            loadImgState: !1,
            promptText: n
        }), e.getUserData(), wx.getStorage({
            key: "peopleCount",
            success: function(t) {
                console.log(t), 0 != t.data && t.data, console.log(t), e.setData({
                    maxnumber: t.data
                });
            }
        });
    },
    onShow: function() {
        var t = this;
        console.log(t.deletedPhotos), t.deletedPhotos.eid > 0 && this.resetEventlist(this.deletedPhotos);
    },
    onReady: function() {
        var t = this;
        r.onError(function(e) {
            wx.showToast({
                title: "语音播放错误",
                duration: 1e3
            }), t.closeAllAudio();
        }), r.onEnded(function(e) {
            t.closeAllAudio();
        });
    },
    onHide: function() {
        this.closeAllAudio();
    },
    onPageScroll: function(t) {
        this.data.showComInput && this.setData({
            showComInput: !1
        });
    },
    seeBigVideo: function(t) {
        var e = t.currentTarget.dataset.url;
        wx.setStorageSync("videourl", e), wx.navigateTo({
            url: "/pages/viewscoll/bigvideo/bigvideo"
        });
    },
    toGroup: function(t) {
        var a = t.currentTarget.dataset.id;
        if (a) {
            var n = a.split(","), i = e(n, 2), s = i[0], o = i[1];
            console.log(o), o = parseInt(o), console.log(o), l({
                groupNewType: o,
                data: {
                    lastPage: "mymemory",
                    from: "grouplist",
                    groupid: s
                },
                navigator: "navigate"
            });
        }
    },
    onReachBottom: function() {
        wx.getStorageSync("userid") && i.globalData.userInfo.userid && this.data.eventlist && 0 != this.data.eventlist.length && this.loadinged();
    },
    resetEventlist: function(t) {
        console.log(t);
        for (var e = this, n = 0, i = e.data.eventlist.length; n < i; n++) if (e.data.eventlist[n].eid == t.eid) {
            if (e.data.eventlist[n].picList.length == t.photoIds.length) e.data.eventlist.splice(n, 1), 
            e.setData({
                eventlist: e.data.eventlist
            }); else {
                var s = [];
                e.data.eventlist[n].picList.forEach(function(e) {
                    a.isInArray(e.pid, t.photoIds) || s.push(e);
                }), e.data.eventlist[n].picList = s, e.setData({
                    eventlist: e.data.eventlist
                });
            }
            return void (e.deletedPhotos = {
                eid: -1,
                photoIds: []
            });
        }
    },
    getUserData: function() {
        var t = this;
        wx.request({
            url: s.getUrl("YinianProject/newEvents/myActiveInfoCenter"),
            data: {
                userid: i.globalData.userInfo.userid,
                type: "initialize"
            },
            success: function(e) {
                console.log(i.globalData.userInfo.userid), console.log(e), 0 == e.data.code ? (e.data.data[0].eventList.forEach(function(t) {
                    t.time = a.timeRest(t.euploadtime), t.isAudioPlay = !1;
                }), t.setData({
                    userData: e.data.data[0].users,
                    eventlist: e.data.data[0].eventList,
                    loadImgState: !0,
                    showLoadingImg: !1,
                    loadingImgOrText: !0
                })) : wx.showModal({
                    title: "提示",
                    content: "数据获取失败，请稍后重试",
                    showCancel: !1,
                    success: function() {
                        wx.navigateBack({
                            delta: 1
                        });
                    }
                });
            },
            fail: function() {
                wx.showModal({
                    title: "提示",
                    content: "数据获取失败，请稍后重试",
                    showCancel: !1,
                    success: function() {
                        wx.navigateBack({
                            delta: 1
                        });
                    }
                });
            }
        });
    },
    stop: function() {},
    lookmine: function() {
        wx.navigateTo({
            url: "/pages/integral/pages/mine/mine"
        });
    },
    showlike: function(t) {
        if (wx.getStorageSync("userid")) {
            var e = this, a = t.currentTarget.dataset.parentindex, n = t.currentTarget.dataset.eid;
            this.a = a, this.tepEid = n;
            this.data.eventlist[a];
            e.setData({
                showFunModel: !0,
                selNumA: a
            });
        } else wx.showToast({
            title: "获取用户信息失败"
        });
    },
    closeFunModel: function() {
        this.setData({
            showFunModel: !1
        });
    },
    toEditPhotos: function(t) {
        var e = t.currentTarget.dataset.index, a = t.currentTarget.dataset.photosource, n = this.data.eventlist[e].picList, i = 4 == this.data.eventlist[e].eMain ? "video" : "pic";
        if ("photosync" == a) ; else if ("download" != a) return;
        wx.setStorageSync("editPhotoArr", n), wx.navigateTo({
            url: "/pages/others/editphotos/editphotos?photosource=" + a + "&isPicOrVideo=" + i
        });
    },
    toEditPhotosDelete: function(t) {
        var e = this, n = t.detail.formId;
        a.sendFormId(i.globalData.userInfo.userid, n);
        var s = t.currentTarget.dataset.photosource, o = this.data.eventlist[this.a].picList, r = this.data.eventlist[this.a].eMain, d = 4 == r ? "video" : "pic", l = this.tepEid;
        if ("photosync" == s) ; else if ("download" == s) ; else {
            if ("delete" != s) return;
            if (1 == r || 2 == r) return void this.delete_event(l);
        }
        wx.setStorageSync("editPhotoArr", o), wx.navigateTo({
            url: "/pages/others/editphotos/editphotos?sourcePage=mymemory&photosource=" + s + "&isPicOrVideo=" + d,
            success: function() {
                e.setData({
                    showFunModel: !1
                });
            }
        });
    },
    delete_event: function(e) {
        var n = this;
        if (e) {
            var i = e;
            wx.showModal({
                title: "删除动态",
                content: "确定删除此条动态吗？",
                confirmColor: "#353535",
                success: function(e) {
                    e.confirm && a.wxreq({
                        pathname: "YinianProject/yinian/DeleteEvent",
                        data: t({
                            userid: wx.getStorageSync("userid")
                        }, "eventId", i)
                    }).then(function(t) {
                        if ("success" == t.msg) {
                            wx.showToast({
                                title: "删除成功",
                                icon: "success",
                                duration: 2e3
                            });
                            var e = 0, a = !1;
                            n.data.eventlist.forEach(function(t, n) {
                                if (t.eid == i) return e = n, void (a = !0);
                            }), a && n.data.eventlist.splice(e, 1), n.setData({
                                eventlist: n.data.eventlist,
                                showFunModel: !1
                            });
                        }
                    });
                }
            });
        }
    },
    toSharePage: function(t) {
        var e = t.currentTarget.dataset.index, a = t.currentTarget.dataset.isdefault;
        console.log(a);
        var n = this.data.eventlist[e].picList, i = this.data.eventlist[e].eMain, s = this.data.eventlist[e].eid, o = this.data.eventlist[e].egroupid;
        1 == a ? (wx.setStorageSync("groupSharePagePic", n), wx.navigateTo({
            url: "/pages/groupsharepage/groupsharepage?eid=" + s + "&eMain=" + i
        })) : (wx.setStorageSync("sharePagePic", n), wx.navigateTo({
            url: "/pages/others/sharepage/sharepage?lastPage=albumDetail&clickfrom=eid&eid=" + s + "&eMain=" + i + "&groupid=" + o + "&gOrigin=0&eventQRCodeCanPublish=0"
        }));
    },
    toEventDetail: function(t) {
        var a = t.currentTarget.dataset.datas;
        if (a) {
            var n = a.split(","), i = e(n, 3), s = i[0], o = i[1], r = i[2];
            console.log(t), console.log(s, o, r), 1 == r ? wx.navigateTo({
                url: "/pages/eventdetail/eventdetail?lastPage=mymemory&fromSource=group&dateindex=" + o + "&rowindex=0&eid=" + s + "&efrom=mymemory"
            }) : wx.navigateTo({
                url: "/pages/eventdetail/eventdetail?lastPage=mymemory&dateindex=" + o + "&rowindex=0&eid=" + s + "&efrom=mymemory"
            });
        }
    },
    comment: function(t) {
        t.currentTarget.dataset.parentindex;
        var e = t.currentTarget.dataset.eid;
        this.commentEid = e, this.commentedUserid = 10, this.commentedname = "系统消息", this.setData({
            showComInput: !0,
            inputfocus: !0,
            placehold: "对ta说点啥...",
            contentCurrent: !1
        });
    },
    recomment: function(t) {
        if (void 0 != t.target.dataset.commentindex) {
            var e = this, n = t.target.dataset.commentindex, s = t.currentTarget.dataset.dataindex, o = this.data.eventlist[s].comments[n], r = o.commentUser.userid, d = o.commentUser.unickname, l = t.currentTarget.dataset.eid;
            r == i.globalData.userInfo.userid ? wx.showModal({
                title: "提示",
                content: "删除此条评论？",
                success: function(t) {
                    t.confirm && a.wxreq({
                        pathname: "YinianProject/yinian/DeleteComment",
                        data: {
                            commentID: o.cid
                        }
                    }).then(function(t) {
                        "success" == t.msg && (e.data.eventlist.forEach(function(t, e) {
                            t.eid == l && (t.comments.splice(n, 1), t.commentCnt--);
                        }), e.setData({
                            eventlist: e.data.eventlist
                        }));
                    });
                }
            }) : (this.commentEid = l, this.commentedUserid = r, this.commentedname = d, this.setData({
                showComInput: !0,
                inputfocus: !0,
                placehold: "@" + d + ":",
                contentCurrent: !1
            }));
        }
    },
    sendcomment: function(t) {
        var e = t.detail.formId, n = t.detail.value.content, s = this.data.userData.userid || wx.getStorageSync("userid"), r = this.commentEid, l = this.commentedUserid, c = this.commentedname;
        if (0 != n.length) if (o.testStr(n)) wx.showModal({
            title: "包含敏感词",
            content: "请勿输入敏感词汇",
            showCancel: !1
        }); else {
            var u = this;
            u.isCommentpushId(), d(s, wx.getStorageSync("groupid"), "comment");
            var h = a.formatTimeWithSecond(new Date()), g = {
                cid: -1,
                commentedUser: {
                    userid: l,
                    unickname: c
                },
                commentUser: {
                    userid: s,
                    unickname: i.globalData.userInfo.nickName,
                    upic: i.globalData.userInfo.avatarUrl
                },
                ccontent: n,
                ctime: h
            }, m = Array.from(u.data.eventlist);
            u.data.eventlist.forEach(function(t, e) {
                t.eid == r && (m[e].comments.unshift(g), m[e].commentCnt = parseInt(m[e].commentCnt) + 1);
            }), u.setData({
                showComInput: !1,
                eventlist: m,
                value: "",
                contentCurrent: !1,
                placehold: "说点什么..."
            }), u.commentedUserid = 10, u.commentedname = "系统消息", wx.showToast({
                title: "发表成功",
                icon: "success",
                duration: 1e3
            }), a.wxreq({
                pathname: "YinianProject/yinian/SendComment1",
                data: {
                    commentUserId: s,
                    commentedUserId: l,
                    eventId: r,
                    content: n,
                    formID: e
                }
            }).then(function(t) {
                0 == t.code && (u.data.eventlist.forEach(function(e) {
                    e.eid == r && e.comments.forEach(function(e) {
                        e.ctime === h && (e.cid = t.data[0].cid);
                    });
                }), u.setData({
                    eventlist: u.data.eventlist
                }));
            });
        } else wx.showModal({
            title: "提示",
            content: "请先输入评论内容",
            showCancel: !1
        });
    },
    checkchange: function(t) {
        var e = t.detail.value.trim().length > 0;
        this.setData({
            contentCurrent: e
        });
    },
    hiddenWrite: function() {
        this.setData({
            showComInput: !1
        });
    },
    enterpreview: function(t) {
        var e = t.currentTarget.dataset.parentindex, a = t.currentTarget.dataset.sel, n = this.data.eventlist;
        wx.setStorageSync("lookImgs", n[e].picList), wx.navigateTo({
            url: "/pages/others/lookmidpic/lookmidpic?current=" + a
        });
    },
    like: function(t) {
        if (wx.getStorageSync("userid")) {
            var e = t.detail.formId, a = t.currentTarget.dataset.likecatagry, n = t.currentTarget.dataset.parentindex, o = this.data.eventlist[n].eid, r = this;
            a && (r.isLikepushId(), d(wx.getStorageSync("userid"), wx.getStorageSync("groupid"), "like"), 
            r.data.eventlist[n].likeUser = 1, r.data.eventlist[n].likeCnt = parseInt(r.data.eventlist[n].likeCnt) + 1, 
            r.setData({
                eventlist: r.data.eventlist
            }), wx.showToast({
                title: "点赞成功",
                icon: "success",
                duration: 1e3
            }), wx.request({
                url: s.getUrl("YinianProject/yinian/AttachOrRemoveExpressionByLkNew"),
                data: {
                    type: a,
                    userid: i.globalData.userInfo.userid || wx.getStorageSync("userid"),
                    eid: o,
                    formID: e
                },
                success: function(t) {
                    console.log(t);
                }
            }));
        } else wx.showToast({
            title: "获取用户信息失败"
        });
    },
    loadinged: function() {
        var t = this;
        this.isloading || (this.isloading = !0, this.setData({
            showLoadingImg: !0,
            loadingImgOrText: !0
        }), wx.request({
            url: s.getUrl("YinianProject/newEvents/myActiveInfoCenter"),
            data: {
                userid: i.globalData.userInfo.userid || wx.getStorageSync("userid"),
                type: "loading",
                eid: t.data.eventlist[t.data.eventlist.length - 1].eid
            },
            success: function(e) {
                console.log(e), 0 == e.data.code ? 0 == (e = e.data).data[0].eventList.length ? t.setData({
                    showLoadingImg: !0,
                    loadingImgOrText: !1
                }) : (e.data[0].eventList.forEach(function(e) {
                    Object.assign(e, {
                        time: a.timeRest(e.euploadtime),
                        isAudioPlay: !1
                    }), t.data.eventlist.push(e);
                }), t.isloading = !1, t.setData({
                    eventlist: t.data.eventlist,
                    showLoadingImg: !1
                })) : (t.isloading = !1, t.setData({
                    showLoadingImg: !1
                }));
            },
            fail: function() {
                t.isloading = !1, t.setData({
                    showLoadingImg: !1
                });
            }
        }));
    },
    fasttoknow: function() {
        var t = this;
        console.log("fasttoknow"), t.setData({
            showDisposeModel: !0,
            usernumber: n.usernumber
        }), clearInterval(t.timerinterval), t.timerinterval = null, t.usernumberchange();
    },
    usernumberchange: function() {
        var t = this;
        t.timerinterval = setInterval(function() {
            if (t.data.usernumber > t.data.maxnumber) {
                clearInterval(t.timerinterval), t.timerinterval = null;
                var e = t.toThousands(t.data.maxnumber);
                console.log(e), t.setData({
                    usernumber: e
                });
            } else t.data.usernumber += 323456, t.setData({
                usernumber: t.data.usernumber
            });
        }, 100);
    },
    toThousands: function(t) {
        for (var t = (t || 0).toString(), e = ""; t.length > 3; ) e = "," + t.slice(-3) + e, 
        t = t.slice(0, t.length - 3);
        return t && (e = t + e), e;
    },
    closeModel: function() {
        console.log("closeModel"), this.setData({
            showDisposeModel: !1,
            classArr: [ "pic1", "pic2", "pic3" ]
        });
    },
    changestart: function(t) {
        c = t.touches[0].pageX, u = t.touches[0].pageY;
    },
    changemove: function(t) {},
    changend: function(t) {
        var e = this;
        if (h = t.changedTouches[0].pageX, g = t.changedTouches[0].pageY, c - h > 30) {
            if ("pic2" == e.data.classArr[0]) return;
            e.data.classArr.unshift(e.data.classArr[e.data.classArr.length - 1]), e.data.classArr.pop(e.data.classArr[e.data.classArr.length - 1]), 
            e.setData({
                classArr: e.data.classArr
            });
        } else if (h - c > 30) {
            if ("pic1" == e.data.classArr[0]) return;
            e.data.classArr.push(e.data.classArr[0]), e.data.classArr.shift(e.data.classArr[0]), 
            e.setData({
                classArr: e.data.classArr
            });
        }
    },
    addgroup: function() {
        if (wx.getStorageSync("userid")) {
            wx.navigateTo({
                url: "../makegroup/makegroup?lastPage=index",
                success: function(t) {
                    console.log(t);
                }
            });
        } else wx.showModal({
            title: "错误",
            content: "获取用户授权信息失败！创建相册功能不可用！",
            showCancel: !1
        });
    },
    audioPlay: function(t) {
        var e = t.currentTarget.dataset.audiourl;
        e && (console.log(e), r.src = e, r.play(), this.openThisAudio(e));
    },
    audioPause: function() {
        r.pause(), this.closeAllAudio();
    },
    openThisAudio: function(t) {
        this.data.eventlist.forEach(function(e) {
            e.eaudio === t ? e.isAudioPlay = !0 : e.isAudioPlay = !1;
        }), this.setData({
            eventlist: this.data.eventlist
        });
    },
    closeAllAudio: function() {
        this.data.eventlist.forEach(function(t) {
            t.isAudioPlay = !1;
        }), this.setData({
            eventlist: this.data.eventlist
        });
    },
    isLikepushId: function() {
        "" != i.pushId && void 0 != i.pushId && a.wxreq({
            pathname: "YinianProject/ep/isLike",
            data: {
                pushId: i.pushId,
                port: i.globalData.port
            }
        }).then(function(t) {}, function(t) {});
    },
    isCommentpushId: function() {
        "" != i.pushId && void 0 != i.pushId && a.wxreq({
            pathname: "YinianProject/ep/isComment",
            data: {
                pushId: i.pushId,
                port: i.globalData.port
            }
        }).then(function(t) {}, function(t) {});
    }
});