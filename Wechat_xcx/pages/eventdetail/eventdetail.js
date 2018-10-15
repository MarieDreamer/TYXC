function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

function t(e) {
    var e = e.replace(/-/g, "/"), t = Date.parse(new Date(e));
    t /= 1e3;
    var a = new Date().getTime(), i = parseInt(a / 1e3) - parseInt(t);
    return 0 == i ? "刚刚" : i > 0 && i < 3600 ? Math.ceil(i / 60) + "分钟前" : i >= 3600 && i < 86400 ? Math.floor(i / 3600) + "小时前" : i >= 86400 && i < 259200 ? Math.floor(i / 86400) + "天前" : e.slice(0, 4) + "." + e.slice(5, 7) + "." + e.slice(8, 10);
}

var a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, n = getApp(), o = require("../../utils/util.js"), s = require("../../utils/api.js"), r = require("../../utils/reg.js"), d = require("../../utils/common.js"), l = require("../../utils/tripledes.js"), c = [], u = require("../../utils/hotActive.js").hotActive, g = require("../../utils/albumsjump.js").albumsjump, m = wx.createInnerAudioContext();

Page((a = {
    data: {
        showLikeSuccessModel: !1,
        isFirstLike: !1,
        eventinfo: "",
        bigpic: "",
        showLikeBoxState: !1,
        fromMon: !1,
        showPage: !0,
        waitingState: !0,
        showComInput: !1,
        scrollView: "",
        showPlayVideoModal: !1,
        showTop: !0,
        uploadnum: 0,
        totalnum: 0,
        upSteps: 1,
        sucImgNum: 0,
        fitImgNum: 0,
        showProgress: !1,
        progress: 0,
        isShowEnterAlbumButton: !0,
        showLoadingImg: !1,
        loadingImgOrText: !0,
        showFunModel: !1,
        showAuthPic: !1,
        authpic: {
            belowImgUrl: "http://oibl5dyji.bkt.clouddn.com/0408_default.png"
        },
        addpicModal: !1,
        clickGroups: [ {
            imgUrl: "http://oibl5dyji.bkt.clouddn.com/stories_cup_plus@2x.png",
            title: "故事集",
            openUrl: "/package/stories/pages/make/makeStory"
        } ],
        useid: wx.getStorageSync("userid")
    },
    onLoad: function(e) {
        t = this, n.stat.statpv({
            route: this.route,
            options: e
        }), this.fromSource = e.fromSource, this.fromState = !0;
        var t = this;
        if (!e.eid) {
            var a = decodeURIComponent(e.scene);
            if (e = {}, a.length > 0) for (var i = a.split("&"), s = 0; s < i.length; s++) e[i[s].split("=")[0]] = i[s].split("=")[1];
        }
        t.groupNewType = e.groupNewType, e.version && (this.version = e.version), e.port && (this.port = e.port, 
        n.globalData.port = e.port, this.setData({
            port: e.port
        })), e.fromUserID && (this.fromUserID = e.fromUserID), e.fromSpaceID && (this.fromSpaceID = e.fromSpaceID), 
        e.fromEventID && (this.fromEventID = e.fromEventID), wx.getStorageSync("userInfo") || (this.setData({
            showAuthPic: !0
        }), o.getAuthPic("event", 0, function(e) {
            t.setData({
                authpic: e
            });
        })), this.lastPage = e.lastPage, this.lastPage = this.lastPage || "null", this.isSubmit = 1, 
        e.efrom && (t.efrom = e.efrom, t.setData({
            efrom: e.efrom
        })), "share" != t.efrom && "moment" != t.efrom && "notification" != t.efrom && "StoriesLanding" != t.efrom || t.setData({
            fromMon: !0
        }), t.eid = e.eid, this.a = e.dateindex, this.b = e.rowindex, n.fromlast = 1, this.commentedUserid = 10, 
        e.fm && this.setData({
            fm: e.fm
        }), "homepage" !== e.lastPage && "mymemory" != this.efrom && "personalPage" !== e.lastPage && "commetmsg" != this.efrom && "likemsg" != this.efrom || this.setData({
            isShowEnterAlbumButton: !1
        });
    },
    onShow: function() {
        var e = this, t = this.version ? this.version : "", a = this.port ? this.port : "", i = this.fromUserID ? this.fromUserID : 0, r = this.fromSpaceID ? this.fromSpaceID : 0, d = this.fromEventID ? this.fromEventID : 0;
        (e = this).inBlackList = 1, n.getUserInfo(function(t) {
            if (e.setData({
                showAuthPic: !1
            }), 1 == e.isSubmit) {
                e.enterCurrentTimestamp = new Date().getTime();
                var i = "null";
                e.data.eventinfo && 1 == e.data.eventinfo.gOrigin ? i = "true" : e.data.eventinfo && 1 != e.data.eventinfo.gOrigin && (i = "false");
                var r = {
                    basicInfo: {
                        userid: t.userid,
                        source: a,
                        "isActivityAlbum ": i,
                        "lastPage ": e.lastPage,
                        timestamp: e.enterCurrentTimestamp,
                        identification: t.userid + "_" + n.enterTimestamp
                    },
                    type: "enter",
                    data: {
                        page: {
                            name: "eventDetail",
                            page_identification: t.userid + "_" + e.enterCurrentTimestamp
                        }
                    }
                };
                0 == n.sendValue && o.sendData(t.userid, r), e.button = [];
            } else e.isSubmit = 1;
            e.fromState ? ("yes" == t.isnew && (n.isNewUser = !0), null != wx.getStorageSync("userInfo").uLockPass && n.globalData.pwdState && wx.navigateTo({
                url: "/pages/others/password/password?setPwd=shuru"
            }), e.eid ? (e.isBlackList(t.userid), e.userid = t.userid, wx.request({
                url: s.getUrl("YinianProject/test/GetControllerValue"),
                data: {},
                success: function(i) {
                    if (0 == i.data.code && i.data.data[0].openloading) {
                        console.log(i.data.data[0].openloading);
                        var n = parseInt(5 * Math.random() + 5);
                        return e.setData({
                            waitingState: !1,
                            secondNum: n,
                            secondEnd: !0
                        }), void (e.timer3 = setInterval(function() {
                            var t = e.data.secondNum;
                            t <= 0 ? (clearInterval(e.timer3), e.timer3 = null, e.setData({
                                secondEnd: !1
                            })) : (t--, e.setData({
                                secondNum: t
                            }));
                        }, 1e3));
                    }
                    console.log("onShow:333"), e.getEventValue(t, a);
                }
            }), n.getshowState(function(t) {
                e.setData({
                    showpuzze: t
                });
            })) : wx.showModal({
                title: "提示",
                content: "获取动态详情id不成功，请重试",
                showCancel: !1,
                success: function(e) {
                    wx.reLaunch({
                        url: "/pages/index/index?lastPage=eventDetail"
                    });
                }
            })) : setTimeout(function() {
                e.fromState = !0;
            }, 100);
        }, t, a, i, r, d, "eventdetail", function() {
            e.setData({
                showAuthPic: !1
            });
        }), wx.getStorage({
            key: "firstJoin",
            success: function(e) {
                console.log(e.data);
            },
            fail: function(t) {
                wx.setStorage({
                    key: "firstJoin",
                    data: "value"
                }), e.setData({
                    isFirstLike: !0
                });
            }
        });
    },
    onReady: function() {
        var e = this;
        m.onError(function(t) {
            wx.showToast({
                title: "语音播放错误",
                duration: 1e3
            }), e.data.eventinfo.isAudioPlay = !1, e.setData({
                eventinfo: e.data.eventinfo
            });
        }), m.onEnded(function(t) {
            e.data.eventinfo.isAudioPlay = !1, e.setData({
                eventinfo: e.data.eventinfo
            });
        });
    },
    onHide: function() {
        1 == this.isSubmit && (console.log("event_hide"), this.sendLeaveData());
    },
    onUnload: function() {
        this.sendLeaveData();
    },
    sendLeaveData: function() {
        var e = this, t = this.port ? this.port : "", a = wx.getStorageSync("userid"), i = new Date().getTime() - e.enterCurrentTimestamp, s = "null";
        e.data.eventinfo && 1 == e.data.eventinfo.gOrigin ? s = "true" : e.data.eventinfo && 1 != e.data.eventinfo.gOrigin && (s = "false");
        var r = {
            basicInfo: {
                userid: a,
                source: t,
                " isActivityAlbum ": s,
                "lastPage ": e.lastPage,
                timestamp: new Date().getTime(),
                identification: a + "_" + n.enterTimestamp
            },
            type: "leave",
            data: {
                page: {
                    name: "eventDetail",
                    page_identification: a + "_" + e.enterCurrentTimestamp
                },
                botton: e.button,
                time: i
            }
        };
        0 == n.sendValue && o.sendData(a, r);
    },
    refresh: function() {
        var e = this.version ? this.version : "", t = this.port ? this.port : "", a = this.fromUserID ? this.fromUserID : 0, i = this.fromSpaceID ? this.fromSpaceID : 0, o = this.fromEventID ? this.fromEventID : 0, r = this;
        n.getUserInfo(function(e) {
            r.userid = e.userid, wx.request({
                url: s.getUrl("YinianProject/test/GetControllerValue"),
                data: {},
                success: function(a) {
                    if (console.log(a), 0 == a.data.code && a.data.data[0].canlogin) {
                        console.log(a.data.data[0].canlogin);
                        var i = parseInt(5 * Math.random() + 5);
                        return r.setData({
                            waitingState: !1,
                            secondNum: i,
                            secondEnd: !0
                        }), void (r.timer3 = setInterval(function() {
                            var e = r.data.secondNum;
                            e <= 0 ? (clearInterval(r.timer3), r.timer3 = null, r.setData({
                                secondEnd: !1
                            })) : (e--, r.setData({
                                secondNum: e
                            }));
                        }, 1e3));
                    }
                    r.setData({
                        waitingState: !0
                    }), console.log("refresh:111"), r.getEventValue(e, t);
                }
            }), n.getshowState(function(e) {
                r.setData({
                    showpuzze: e
                });
            });
        }, e, t, a, i, o, "eventdetail");
    },
    getEventValue: function(e, a) {
        var i = this;
        i.UserInfo = e, i.nb = a, wx.request({
            url: s.getUrl("YinianProject/newEvents/dynamicDetails"),
            data: {
                eid: i.eid,
                source: "小程序",
                userid: e.userid
            },
            success: function(n) {
                if (console.log("数据：", n), 200 == n.statusCode) {
                    if (1027 == n.data.code) {
                        i.setData({
                            showPage: !1
                        });
                        var s = "返回相册";
                        return "commetmsg" != i.efrom && "likemsg" != i.efrom || (s = "返回"), void wx.showModal({
                            title: "提示",
                            content: "动态已被删除",
                            showCancel: !1,
                            confirmText: s,
                            success: function(e) {
                                e.confirm && ("share" == i.efrom ? wx.reLaunch({
                                    url: "/pages/index/index?lastPage=eventDetail"
                                }) : wx.navigateBack({
                                    delta: 1
                                }));
                            }
                        });
                    }
                    if (0 == n.data.code) {
                        i.allPicList = n.data.data[0].picList;
                        var r = n.data.data[0];
                        if (r.comments.forEach(function(e) {
                            e.ctime = e.ctime.slice(5, 16);
                        }), 0 != r.eMain && 4 != r.eMain || (r.picList = i.allPicList.slice(0, 9)), 6 == r.eMain && (r.picList = i.allPicList.slice(0, 11), 
                        r.publishLength = r.publishUsers.length, r.publishUsers.length > 6 && (r.publishUsers = r.publishUsers.slice(0, 6))), 
                        i.groupid = r.egroupid, i.state = r.elevel, r.time = t(r.euploadtime), r.isAudioPlay = !1, 
                        i.setData({
                            allPicLength: i.allPicList.length || 0,
                            eventinfo: r,
                            state: i.state,
                            bigpic: 4 == r.eMain ? r.picList[0].poriginal : 0 == r.eMain ? r.picList[0].midThumbnail : "",
                            bigpic2: 0 == r.eMain ? r.picList[0].midThumbnail : "",
                            placehold: "对ta说点啥...",
                            inputfocus: !1,
                            gcreator: r.gcreator,
                            userid: e.userid,
                            scrollView: "",
                            showLoadingImg: !1,
                            loadingImgOrText: !0,
                            showProgress: !1,
                            groupNewType: r.groupNewType
                        }), i.isloading = !1, "share" == i.efrom) {
                            var d = r.groupNewType;
                            2 == d || 3 == d || 4 == d || 5 == d || 11 == d || o.wxreq({
                                pathname: "YinianProject/yinian/joinGroupWithEncryption",
                                data: {
                                    userid: l.encryptByDESModeCBC(e.userid),
                                    groupid: l.encryptByDESModeCBC(r.egroupid),
                                    port: a
                                }
                            });
                        }
                    }
                } else wx.showModal({
                    title: "提示",
                    content: "获取动态数据失败！请稍后重试",
                    showCancel: !1,
                    success: function(e) {
                        wx.reLaunch({
                            url: "/pages/index/index?lastPage=eventDetail"
                        });
                    }
                });
            }
        });
    },
    commentLoading: function() {
        if (this.data.eventinfo && this.data.eventinfo.comments.length > 0) {
            var e = this;
            if (this.isloading) return;
            this.isloading = !0, this.setData({
                showLoadingImg: !0,
                loadingImgOrText: !0
            }), wx.request({
                url: s.getUrl("YinianProject/event/GetCommentByPaged"),
                data: {
                    eid: e.eid,
                    type: "loading",
                    cid: e.data.eventinfo.comments[e.data.eventinfo.comments.length - 1].cid
                },
                success: function(t) {
                    console.log(t), 0 == t.data.code ? 0 == (t = t.data).data.length ? e.setData({
                        showLoadingImg: !0,
                        loadingImgOrText: !1
                    }) : (t.data.forEach(function(t) {
                        t.ctime = t.ctime.slice(5, 16), e.data.eventinfo.comments.push(t);
                    }), e.isloading = !1, e.setData({
                        eventinfo: e.data.eventinfo,
                        showLoadingImg: !1
                    })) : (e.isloading = !1, e.setData({
                        showLoadingImg: !1
                    }));
                },
                fail: function() {
                    e.isloading = !1, e.setData({
                        showLoadingImg: !1
                    });
                }
            });
        }
    },
    scrollTop: function(e) {
        var t = 750 / n.globalData.systemInfo.windowWidth, a = e.detail.scrollTop;
        a > 118 / t ? this.data.showTop && this.setData({
            showTop: !1
        }) : this.data.showTop || this.setData({
            showTop: !0
        });
    },
    laodMorePic: function(e) {
        var t = this, a = e.currentTarget.dataset.omain, i = t.data.eventinfo.picList.length;
        i >= t.data.allPicLength || (i += "6" == a ? 12 : 9, t.data.eventinfo.picList = t.allPicList.slice(0, i), 
        t.setData({
            eventinfo: t.data.eventinfo
        }));
    },
    isBlackList: function(e) {
        var t = this;
        o.wxreq({
            pathname: "YinianProject/user/inBlackList",
            data: {
                userid: e
            }
        }).then(function(e) {
            0 == e.code ? t.inBlackList = e.data[0].inBlackList : console.log("调取黑名单失败");
        });
    },
    closeFunModel: function() {
        this.setData({
            showLikeBoxState: !1
        });
    },
    prewBigImg: function(e) {
        var t = e.currentTarget.dataset.sel, a = this;
        !a.data.eventinfo || !a.data.eventinfo.picList || a.data.eventinfo.picList.length <= 0 || (wx.setStorageSync("lookImgs", a.data.eventinfo.picList), 
        this.fromState = !1, wx.navigateTo({
            url: "/pages/others/lookmidpic/lookmidpic?current=" + t
        }));
    },
    toAnotherApp: function() {
        wx.navigateToMiniProgram({
            appId: "wx228859fda649194f",
            path: "pages/index/index",
            success: function(e) {
                console.log(e);
            }
        });
    },
    showcode: function() {
        var e = this;
        e.eid ? (e.fromState = !1, wx.showToast({
            title: "正在获取二维码",
            icon: "loading",
            duration: 6e3,
            mask: !0
        }), wx.request({
            url: s.getUrl("YinianProject/yinian/CreateSmallAppPlan2QRCode"),
            data: {
                id: e.eid,
                type: "eventdetail2"
            },
            success: function(e) {
                console.log(e);
                var t = e.data.data[0].QRCodeURL;
                wx.hideToast(), wx.previewImage({
                    urls: [ t ]
                });
            }
        })) : wx.showModal({
            title: "提示",
            content: "获取动态数据不成功,请稍后再试",
            showCancel: !1
        });
    },
    setbigpic: function(e) {
        var t = this;
        this.setData({
            bigpic: t.data.eventinfo.picList[e.currentTarget.dataset.index].midThumbnail,
            bigpic2: t.data.eventinfo.picList[e.currentTarget.dataset.index].midThumbnail
        });
    },
    seeBigVideo: function(e) {
        var t = e.currentTarget.dataset.url;
        wx.setStorageSync("videourl", t), wx.navigateTo({
            url: "/pages/viewscoll/bigvideo/bigvideo",
            success: function() {
                this.fromState = !1;
            }.bind(this)
        });
    },
    showLikeBox: function() {
        this.data.eventinfo && (this.eid ? this.setData({
            showLikeBoxState: !this.data.showLikeBoxState
        }) : wx.showModal({
            title: "提示",
            content: "获取动态数据不成功,请稍后再试",
            showCancel: !1
        }));
    },
    toSharePage: function(e) {
        var t = this;
        this.fromState = !1;
        var a = this.data.eventinfo.picList, i = this.data.eventinfo.eMain, n = this.data.eventinfo.egroupid, s = this.data.eventinfo.eid, r = wx.getStorageSync("userid") || 0;
        o.countOperation("eventdetail", n, r, ""), wx.setStorageSync("sharePagePic", a), 
        wx.navigateTo({
            url: "/pages/others/sharepage/sharepage?lastPage=eventDetail&clickfrom=eid&clickRecord=eventdetail&eid=" + s + "&eMain=" + i + "&groupid=" + n + "&gOrigin=" + this.data.eventinfo.gOrigin + "&groupNewType=" + t.groupNewType
        });
    },
    like: function(e) {
        if (this.data.eventinfo) {
            var t = e.currentTarget.dataset.likecatagry, a = this.data.eventinfo.eid, i = this, s = e.detail.formId;
            if (console.log(s), t) {
                if (i.isLikepushId(), u(wx.getStorageSync("userid"), wx.getStorageSync("groupid"), "like"), 
                i.setData({
                    showLikeBoxState: !1
                }), i.data.eventinfo.like.push({
                    likeID: 0,
                    likeUserID: n.globalData.userInfo.userid,
                    likeStatus: "like",
                    upic: n.globalData.userInfo.avatarUrl,
                    unickname: n.globalData.userInfo.nickName
                }), i.data.eventinfo.likeCnt = parseInt(i.data.eventinfo.likeCnt) + 1, i.data.eventinfo.likeUser = 1, 
                i.setData({
                    eventinfo: i.data.eventinfo
                }), "viewscoll" == i.efrom || "grouptypescoll" == i.efrom) {
                    console.log("viewscoll");
                    var r = getCurrentPages(), d = r[r.length - 2].data.eventlist;
                    d && d.forEach(function(e) {
                        e.list[0].eid == i.eid && (e.list[0].like.push({
                            likeID: 0,
                            likeUserID: n.globalData.userInfo.userid,
                            likeStatus: "like",
                            upic: n.globalData.userInfo.avatarUrl,
                            unickname: n.globalData.userInfo.nickName
                        }), e.list[0].likeUser = 1, e.list[0].likeCnt = parseInt(e.list[0].likeCnt) + 1);
                    }), r[r.length - 2].setData({
                        eventlist: d
                    });
                } else if ("mymemory" == i.efrom) {
                    console.log("mymemory");
                    var l = getCurrentPages(), c = l[l.length - 2].data.eventlist;
                    c && (c.forEach(function(e) {
                        console.log(e), e.eid == i.eid && (e.likeUser = 1, e.likeCnt = parseInt(e.likeCnt) + 1);
                    }), l[l.length - 2].setData({
                        eventlist: c
                    }));
                } else if ("personalPage" == i.efrom) {
                    var g = getCurrentPages();
                    g[g.length - 2].uLike.eid = i.eid;
                }
                i.setData({
                    showLikeSuccessModel: !0
                }), o.wxreq({
                    pathname: "YinianProject/yinian/AttachOrRemoveExpressionByLkNew",
                    data: {
                        type: t,
                        userid: n.globalData.userInfo.userid,
                        eid: a,
                        formID: s
                    }
                }).then(function(e) {
                    console.log(e);
                });
            }
        }
    },
    comment: function(e) {
        var t = this, a = e.currentTarget.dataset.index, i = this.data.eventinfo.comments[a];
        i.commentUser.userid == this.userid ? (this.commentedUserid = 10, this.commentedname = "系统消息", 
        this.setData({
            placehold: "说点什么..."
        }), wx.showModal({
            title: "提示",
            content: "删除此条评论？",
            success: function(e) {
                e.confirm && o.wxreq({
                    pathname: "YinianProject/yinian/DeleteComment",
                    data: {
                        commentID: i.cid
                    }
                }).then(function(e) {
                    if ("success" == e.msg) {
                        t.data.eventinfo.comments.splice(a, 1), t.setData({
                            eventinfo: t.data.eventinfo
                        });
                        var i = t.data.eventinfo.comments.length;
                        if ("viewscoll" == t.efrom || "grouptypescoll" == t.efrom) {
                            var n = getCurrentPages(), o = n[n.length - 2].data.eventlist;
                            o.forEach(function(e, n) {
                                e.list[0].eid == t.data.eventinfo.eid && (e.list[0].comments.splice(i - a, 1), e.list[0].commentCnt--);
                            }), n[n.length - 2].setData({
                                eventlist: o
                            });
                        } else if ("mymemory" == t.efrom) {
                            var s = getCurrentPages(), r = s[s.length - 2].data.eventlist;
                            r.forEach(function(e, n) {
                                e.eid == t.data.eventinfo.eid && (e.comments.splice(i - a, 1), e.commentCnt--);
                            }), s[s.length - 2].setData({
                                eventlist: r
                            });
                        } else if ("personalPage" == t.efrom) {
                            var d = getCurrentPages(), l = d[d.length - 2];
                            l.delMultipleComment.eid = t.eid, l.delMultipleComment.cids.push(longCid);
                        }
                    }
                });
            }
        })) : (this.commentedUserid = i.commentUser.userid, this.commentedname = i.commentUser.unickname, 
        this.setData({
            showComInput: !0,
            placehold: "@" + i.commentUser.unickname,
            inputfocus: !0
        }));
    },
    longPressDelete: function(e) {
        var t = this, a = e.currentTarget.dataset.longcid, i = e.currentTarget.dataset.longeid, n = e.currentTarget.dataset.index;
        wx.showModal({
            title: "提示",
            content: "是否删除该条评论",
            success: function(e) {
                e.confirm && o.wxreq({
                    pathname: "YinianProject/yinian/DeleteComment",
                    data: {
                        commentID: a
                    }
                }).then(function(e) {
                    if ("success" == e.msg) if (t.data.eventinfo.comments.splice(n, 1), t.setData({
                        eventinfo: t.data.eventinfo
                    }), "viewscoll" == t.efrom || "grouptypescoll" == t.efrom) {
                        var o = getCurrentPages(), s = o[o.length - 2].data.eventlist;
                        s.forEach(function(e, t) {
                            e.list[0].eid == i && (e.list[0].comments.splice(n, 1), e.list[0].commentCnt--);
                        }), o[o.length - 2].setData({
                            eventlist: s
                        });
                    } else if ("mymemory" == t.efrom) {
                        var r = getCurrentPages(), d = r[r.length - 2].data.eventlist;
                        d.forEach(function(e, t) {
                            e.eid == i && (e.comments.splice(n, 1), e.commentCnt--);
                        }), r[r.length - 2].setData({
                            eventlist: d
                        });
                    } else if ("personalPage" == t.efrom) {
                        var l = getCurrentPages(), c = l[l.length - 2];
                        c.delMultipleComment.eid = t.eid, c.delMultipleComment.cids.push(a);
                    }
                });
            }
        });
    },
    delete_event: function() {
        if ((e = this).data.eventinfo) {
            var e = this;
            wx.showModal({
                title: "删除动态",
                content: "确定删除此条动态吗？",
                confirmColor: "#353535",
                success: function(t) {
                    t.confirm && (wx.showToast({
                        title: "正在删除",
                        icom: "loading",
                        duration: 1e4
                    }), o.wxreq({
                        pathname: "YinianProject/yinian/DeleteEvent",
                        data: {
                            userid: wx.getStorageSync("userid"),
                            eventId: e.data.eventinfo.eid
                        }
                    }).then(function(t) {
                        if (wx.hideToast(), "success" == t.msg) if (wx.showToast({
                            title: "删除成功",
                            icon: "success",
                            duration: 2e3
                        }), "share" != e.efrom) {
                            if ("grouptypescoll" == e.efrom) {
                                var a = getCurrentPages(), i = a[a.length - 2].data.eventlist;
                                i && i.forEach(function(t, a) {
                                    t.list[0].eid == e.eid && i.splice(a, 1);
                                }), a[a.length - 2].setData({
                                    eventlist: i
                                });
                            }
                            wx.navigateBack({
                                delta: 1
                            });
                        } else g({
                            groupNewType: e.data.eventinfo.groupNewType,
                            data: {
                                groupid: e.data.eventinfo.egroupid
                            },
                            navigator: "reLaunch"
                        });
                    }));
                }
            });
        }
    },
    maketop: function() {
        var e = this, t = 1 == this.state ? "cancel" : "stick", a = 1 == this.state ? "取消置顶" : "置顶";
        wx.showModal({
            title: "提示",
            content: "是否" + a + "此动态",
            success: function(i) {
                i.confirm && o.wxreq({
                    pathname: "YinianProject/yinian/ModifyEventLevel",
                    data: {
                        userid: e.userid,
                        groupid: wx.getStorageSync("groupid") || e.data.eventinfo.egroupid,
                        eid: e.eid,
                        type: t
                    }
                }).then(function(t) {
                    if ("success" == t.msg) {
                        wx.showToast({
                            title: a + "成功"
                        });
                        if (e.data.eventinfo.elevel = 1 == e.data.eventinfo.elevel ? "0" : "1", e.state = 1 == e.state ? "0" : "1", 
                        e.setData({
                            state: 1 == e.data.state ? "0" : "1",
                            showLikeBoxState: !1,
                            eventinfo: e.data.eventinfo,
                            showFunModel: !1
                        }), "viewscoll" == e.efrom || "grouptypescoll" == e.efrom) {
                            var i = getCurrentPages(), n = i[i.length - 2].data.eventlist;
                            n[e.a].list[e.b].elevel = e.data.eventinfo.elevel, i[i.length - 2].setData({
                                eventlist: n
                            });
                        } else if ("personalPage" == e.efrom) {
                            var o = getCurrentPages(), s = o[o.length - 2];
                            s.uStick.eid = e.eid, s.uStick.isStick = e.state;
                        }
                    }
                });
            }
        });
    },
    dorecommend: function() {
        var e = this, t = 1 == this.data.eventinfo.isRecommend ? "cancel" : "recommend", a = 1 == this.data.eventinfo.isRecommend ? "取消推荐" : "推荐";
        wx.showModal({
            title: "提示",
            content: "是否" + a + "此动态",
            success: function(i) {
                i.confirm && o.wxreq({
                    pathname: "YinianProject/space/RecommendAndCancel",
                    data: {
                        recommendUserID: e.userid,
                        fromGroupID: wx.getStorageSync("groupid"),
                        eid: e.eid,
                        type: t
                    }
                }).then(function(t) {
                    "success" == t.msg && (wx.showToast({
                        title: a + "成功"
                    }), e.data.eventinfo.isRecommend = 1 == e.data.eventinfo.isRecommend ? "0" : "1", 
                    e.setData({
                        eventinfo: e.data.eventinfo
                    }));
                });
            }
        });
    },
    checkchange: function(e) {
        var t = e.detail.value.trim().length > 0;
        this.setData({
            contentCurrent: t
        });
    },
    writeCom: function() {
        this.setData({
            showComInput: !0,
            inputfocus: !0,
            placehold: "对ta说点啥..."
        });
    },
    hiddenWrite: function() {
        this.setData({
            showComInput: !1
        });
    },
    toTalkBox: function() {
        this.setData({
            scrollView: "talkBox"
        });
    },
    sendcomment: function(e) {
        var a = e.detail.formId, i = e.detail.value.content;
        if (0 != i.length) if (r.testStr(i)) wx.showModal({
            title: "包含敏感词",
            content: "请勿输入敏感词汇",
            showCancel: !1
        }); else {
            wx.showToast({
                title: "正在发布",
                icon: "loading",
                duration: 2e3
            });
            var s = this;
            s.isCommentpushId(), u(s.userid, wx.getStorageSync("groupid"), "comment"), o.wxreq({
                pathname: "YinianProject/yinian/SendComment1",
                data: {
                    commentUserId: s.userid,
                    commentedUserId: s.commentedUserid,
                    eventId: s.eid,
                    content: i,
                    formID: a
                }
            }).then(function(e) {
                var a = s.data.eventinfo, r = o.formatTimeWithSecond(new Date()).slice(5, 16);
                if (0 == e.code) {
                    var d = {
                        cid: e.data[0].cid,
                        commentedUser: {
                            userid: s.commentedUserid,
                            unickname: s.commentedname
                        },
                        commentUser: {
                            userid: s.userid,
                            unickname: n.globalData.userInfo.nickName,
                            upic: n.globalData.userInfo.avatarUrl
                        },
                        ccontent: i,
                        resultTime: t(r),
                        ctime: r
                    };
                    if (a.comments.unshift(d), a.commentCnt = parseInt(a.commentCnt) + 1, wx.showToast({
                        title: "发表成功",
                        icon: "success",
                        duration: 2e3
                    }), s.setData({
                        showComInput: !1,
                        eventinfo: a,
                        value: "",
                        contentCurrent: !1,
                        placehold: "说点什么..."
                    }), "viewscoll" == s.efrom || "grouptypescoll" == s.efrom) {
                        var l = getCurrentPages(), c = l[l.length - 2].data.eventlist;
                        c && c.forEach(function(e) {
                            e.list[0].eid == s.eid && (e.list[0].comments.unshift(d), e.list[0].commentCnt++);
                        }), l[l.length - 2].setData({
                            eventlist: c
                        });
                    } else if ("mymemory" == s.efrom) {
                        var u = getCurrentPages(), g = u[u.length - 2].data.eventlist;
                        g && g.forEach(function(e) {
                            e.eid == s.eid && (e.comments.unshift(d), e.commentCnt++);
                        }), u[u.length - 2].setData({
                            eventlist: g
                        });
                    } else if ("personalPage" == s.efrom) {
                        var m = {};
                        m.eid = s.eid, m.text = i, m.cid = e.data[0].cid, console.log("_this.commentedUserid", s.commentedUserid), 
                        s.commentedUserid && 10 != s.commentedUserid && (m.replyUserId = s.commentedUserid, 
                        m.nick = s.commentedname);
                        var h = getCurrentPages();
                        h[h.length - 2].multipleComment.push(m);
                    }
                    s.commentedUserid = 10, s.commentedname = "系统消息";
                }
            });
        } else wx.showModal({
            title: "提示",
            content: "请先输入评论内容",
            showCancel: !1
        });
    },
    stop: function() {},
    prevent: function() {
        this.fromState = !1;
    },
    toBusinessGroup: function() {
        this.fromState = !1;
        var e = this;
        "object" == i(this.button) && this.button.push({
            name: "banner"
        }), 0 == e.data.eventinfo.joinGroupOrList ? wx.navigateTo({
            url: "/pages/others/businessgroup/businessgroup?lastPage=eventDetail&listid=" + e.data.eventinfo.listid
        }) : 1 == e.data.eventinfo.joinGroupOrList && wx.navigateTo({
            url: "/pages/viewscoll/viewscoll?lastPage=eventDetail&from=grouplist&groupid=" + e.data.eventinfo.joinGroupid
        });
    },
    goToBusinessGroup: function() {
        this.fromState = !1, "object" == i(this.button) && this.button.push({
            name: "watchMore"
        }), wx.navigateTo({
            url: "/pages/others/businessgroup/businessgroup?lastPage=eventDetail&listid=" + this.data.eventinfo.listid
        });
    },
    toBusinessViewscoll: function(e) {
        var t = e.currentTarget.dataset.selgroupid, a = e.currentTarget.dataset.grouptype;
        t ? g({
            groupNewType: a,
            data: {
                from: "grouplist",
                groupid: t
            },
            navigator: "navigate"
        }) : wx.showModal({
            title: "提示",
            content: "获取相册信息失败！请重试",
            showCancel: !1
        });
    },
    goGroup: function() {
        var e = this;
        if (e.data.fromMon) {
            var t = e.data.eventinfo.groupNewType;
            g({
                groupNewType: t,
                data: {
                    groupid: e.data.eventinfo.egroupid
                },
                navigator: "redirect"
            });
        } else wx.navigateBack({
            delta: 1
        });
    },
    toEditPhotos: function(e) {
        console.log(e.currentTarget.dataset), this.setData({
            showFunModel: !1
        });
        var t = e.currentTarget.dataset.photosource, a = this.allPicList, i = 4 == this.data.eventinfo.eMain ? "video" : "pic";
        if ("photosync" == t) {
            if (0 == this.inBlackList) return void wx.showModal({
                title: "提示",
                content: "由于您先前操作已违反规定，已被限制操作，如有疑问可联系微信客服yiniankefu",
                showCancel: !1
            });
            this.fromState = !1;
        } else if ("download" == t) this.fromState = !1; else {
            if ("delete" != t) return;
            var n = this.data.eventinfo.eMain;
            if (1 == n || 2 == n) return void this.delete_event();
        }
        wx.setStorageSync("editPhotoArr", a), wx.navigateTo({
            url: "/pages/others/editphotos/editphotos?photosource=" + t + "&isPicOrVideo=" + i
        });
    },
    playVideo: function() {
        this.setData({
            showPlayVideoModal: !0
        });
    },
    closePlayVideoModal: function() {
        this.setData({
            showPlayVideoModal: !1
        });
    },
    audioPlay: function(e) {
        var t = e.currentTarget.dataset.audiourl;
        t && (m.src = t, m.play(), this.data.eventinfo.isAudioPlay = !0, this.setData({
            eventinfo: this.data.eventinfo
        }));
    },
    audioPause: function() {
        m.pause(), this.data.eventinfo.isAudioPlay = !1, this.setData({
            eventinfo: this.data.eventinfo
        });
    },
    toMakeGroup: function() {
        wx.navigateTo({
            url: "/pages/makegroup/makegroup"
        });
    },
    toHomePage: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    onShareAppMessage: function() {
        var e = this;
        e.fromState = !1, this.isSubmit = 2;
        var t = this.eid || 0, a = wx.getStorageSync("userInfo").userid || 0;
        return {
            title: "您的好友" + wx.getStorageSync("userInfo").nickName + "为你分享了TA的照片,来看看吧!",
            desc: "这里面有几张我很喜欢的照片，快来看看你喜欢嘛？",
            path: "/pages/eventdetail/eventdetail?port=动态详情分享&efrom=share&eid=" + e.eid + "&fromEventID=" + t + "&fromUserID=" + a,
            success: function() {
                n.stat.request({
                    operation: "shareCallback"
                });
            }
        };
    },
    showlike: function(e) {
        wx.getStorageSync("userid") ? this.setData({
            showFunModel: !0
        }) : wx.showToast({
            title: "获取用户信息失败"
        });
    }
}, e(a, "closeFunModel", function() {
    this.setData({
        showFunModel: !1
    });
}), e(a, "isLikepushId", function() {
    "" != n.pushId && void 0 != n.pushId && o.wxreq({
        pathname: "YinianProject/ep/isLike",
        data: {
            pushId: n.pushId,
            port: n.globalData.port
        }
    }).then(function(e) {}, function(e) {});
}), e(a, "isCommentpushId", function() {
    "" != n.pushId && void 0 != n.pushId && o.wxreq({
        pathname: "YinianProject/ep/isComment",
        data: {
            pushId: n.pushId,
            port: n.globalData.port
        }
    }).then(function(e) {}, function(e) {});
}), e(a, "toStories", function() {
    var e = {
        userId: wx.getStorageSync("userid") || 0,
        operation: "eventDetailToStories",
        userLastLoginTime: n.enterTime
    };
    n.stat.request(e);
    this.data.eventinfo.groupNewType;
    var t = this.eid, a = this.data.eventinfo.egroupid;
    wx.navigateTo({
        url: "/pages/stories/pages/index/index?eId=" + t + "&groupId=" + a
    });
}), e(a, "enterpreview", function(e) {
    console.log(e);
    var t = e.currentTarget.dataset;
    wx.setStorageSync("lookImgs", t.arr), wx.navigateTo({
        url: "/pages/others/lookmidpic/lookmidpic?current=" + t.index
    });
}), e(a, "addImagess", function(e) {
    var t = this;
    console.log(e), t.oMain = e.currentTarget.dataset.emain, t.eid = e.currentTarget.dataset.eid, 
    t.setData({
        addpicModal: !0
    });
}), e(a, "uploadpic", function(e) {
    var t = this;
    if (wx.getStorageSync("userid")) {
        clearTimeout(t.timer), this.setData({
            fromlast: 1
        }), this.loadImgStateNo = !0;
        var a;
        a = "pai" == (e = e || event).currentTarget.dataset.pic ? "camera" : "album", t.fromState = !1, 
        wx.chooseImage({
            count: 9,
            sizeType: [ "original" ],
            sourceType: [ a ],
            success: function(e) {
                var a = e.tempFilePaths;
                wx.removeStorageSync("uploadchoosedpic"), wx.setStorage({
                    key: "uploadchoosedpic",
                    data: a,
                    success: function() {
                        t.setData({
                            addModalOn: !1,
                            fromlast: 1
                        }), t.loadImgStateNo = !0, t.closeModal(), t.addImgUploadevent();
                    },
                    fail: function() {
                        wx.showToast({
                            title: "保存图片临时数据失败"
                        });
                    }
                });
            }
        });
    } else wx.showModal({
        title: "错误",
        content: "获取用户授权信息失败！请稍后再试",
        showCancel: !1
    });
}), e(a, "addImgUploadevent", function() {
    var e = wx.getStorageSync("uploadchoosedpic"), t = this, a = [], i = e;
    t.setData({
        showProgress: !0,
        totalnum: e.length,
        uploadnum: 0,
        progress: 0,
        upSteps: 1,
        sucImgNum: 0,
        fitImgNum: 0,
        upViderOrPic: "pic"
    }), n.isUp = !0, c.length = 0;
    wx.request({
        url: s.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),
        data: {},
        method: "GET",
        success: function(e) {
            0 === e.data.code ? t.uploadFileEvent(e.data.data[0].token, i, a, "6") : (c.length = 0, 
            t.setData({
                upSteps: 3,
                showProgress: !0,
                uploadnum: 0,
                progress: 0
            }), n.isUp = !1);
        },
        fail: function(e) {
            c.length = 0, t.setData({
                upSteps: 3,
                showProgress: !0,
                uploadnum: 0,
                progress: 0
            }), n.isUp = !1;
        }
    });
}), e(a, "uploadFileEvent", function(e, t, a, i) {
    var s = this;
    if (0 == t.length) console.log(c), o.wxreq({
        pathname: "YinianProject/family/addPictureInIncident",
        data: {
            userid: wx.getStorageSync("userid"),
            groupid: s.groupid,
            eid: s.eid,
            picAddress: c.join(","),
            main: i
        }
    }).then(function(e) {
        console.log(e), 0 == e.code ? (c.length = 0, n.isUp = !1, s.setData({
            upSteps: 2,
            showProgress: !0,
            uploadnum: 0,
            progress: 0
        }), s.getEventValue(s.UserInfo, s.nb), setTimeout(function() {
            s.setData({
                upSteps: 1,
                showProgress: !1,
                uploadnum: 0,
                progress: 0
            });
        }, 2e3)) : (n.isUp = !1, c.length = 0);
    }).catch(function(e) {
        n.isUp = !1, c.length = 0;
    }); else {
        var r = t.splice(0, 1);
        s.uppic(e, r, t, a, i);
    }
}), e(a, "uppic", function(e, t, a, i, o) {
    var s = this, r = t[0], d = r.lastIndexOf("."), l = new Date().getTime() + "" + parseInt(1e8 * Math.random() + 1e8) + r.substring(d);
    wx.uploadFile({
        url: "https://upload.qiniup.com",
        filePath: r,
        name: "file",
        formData: {
            key: l,
            token: e
        },
        success: function(t) {
            if (200 != t.statusCode) return c.length = 0, n.isUp = !1, void s.setData({
                upSteps: 3,
                showProgress: !0,
                uploadnum: 0,
                progress: 0
            });
            var r = JSON.parse(t.data);
            c.push(r.key), s.setData({
                uploadnum: c.length,
                progress: parseInt(c.length / s.data.totalnum * 100)
            }), s.uploadFileEvent(e, a, i, o);
        },
        fail: function() {
            c.length = 0, n.isUp = !1, s.setData({
                upSteps: 3,
                showProgress: !0,
                uploadnum: 0,
                progress: 0
            });
        }
    });
}), e(a, "closeModal", function() {
    this.setData({
        addpicModal: !1
    });
}), e(a, "jumptoManGod", function(e) {
    var t = this;
    wx.navigateTo({
        url: "/pages/collegealbum/albumlist/index?gId=7200923"
    });
    var a = e.currentTarget.dataset.type, i = "", o = {
        operation: i = "banner" == a ? "likeBanner" : "more" == a ? "likeWatchMore" : "likeQuickContact",
        userId: t.userid,
        groupId: t.groupid,
        groupNewType: 40
    };
    n.stat.requestLove(o);
}), e(a, "closeFirstLikeModel", function() {
    this.setData({
        isFirstLike: !1
    });
}), e(a, "perent", function() {}), e(a, "closeLikeSuccessModel", function() {
    this.setData({
        showLikeSuccessModel: !1
    });
}), e(a, "gotoStory", function(e) {
    var t = this;
    console.log(e), "event" == e.currentTarget.event ? n.stat.request({
        operation: "eventDetailMakeStory",
        userId: wx.getStorageSync("userid"),
        groupId: e.currentTarget.dataset.groupid,
        groupNewType: t.data.groupNewType
    }) : n.stat.request({
        operation: "detailMakeStory",
        userId: wx.getStorageSync("userid"),
        groupId: e.currentTarget.dataset.groupid,
        groupNewType: t.data.groupNewType
    }), wx.request({
        url: s.host + "/YinianProject/story/createStory",
        data: {
            userId: wx.getStorageSync("userid")
        },
        success: function(a) {
            console.log(a), 0 == a.data.code && (wx.setStorageSync("storyId", a.data.data[0].storyId), 
            wx.request({
                url: s.host + "/YinianProject/story/eventGenerateStory",
                data: {
                    userId: wx.getStorageSync("userid"),
                    eId: e.currentTarget.dataset.eid,
                    storyId: wx.getStorageSync("storyId"),
                    groupId: e.currentTarget.dataset.groupid
                },
                method: "GET",
                success: function(a) {
                    if (console.log(a), 0 === a.data.code) {
                        t.setData({
                            playPhoto: !1
                        });
                        var i = d.getCurrentPageUrlWithArgs();
                        console.log(i), wx.setStorageSync("skipUrl", i), "event" == e.currentTarget.event ? wx.navigateTo({
                            url: e.currentTarget.dataset.open + "?eId=" + wx.getStorageSync("storyId") + "&groupid=" + e.currentTarget.dataset.groupid + "&index=1&groupType=" + t.data.groupNewType + "&action=4"
                        }) : wx.navigateTo({
                            url: e.currentTarget.dataset.open + "?eId=" + wx.getStorageSync("storyId") + "&groupid=" + e.currentTarget.dataset.groupid + "&index=1&groupType=" + t.data.groupNewType + "&action=1"
                        });
                    }
                },
                fail: function(e) {}
            }));
        },
        fail: function(e) {}
    });
}), a));