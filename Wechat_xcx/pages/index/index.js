var t = function() {
    function t(t, e) {
        var a = [], i = !0, s = !1, o = void 0;
        try {
            for (var n, r = t[Symbol.iterator](); !(i = (n = r.next()).done) && (a.push(n.value), 
            !e || a.length !== e); i = !0) ;
        } catch (t) {
            s = !0, o = t;
        } finally {
            try {
                !i && r.return && r.return();
            } finally {
                if (s) throw o;
            }
        }
        return a;
    }
    return function(e, a) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, a);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, a = getApp(), i = require("../../utils/util.js"), s = require("../../utils/config.js"), o = require("../../utils/api.js"), n = (require("../../utils/promise.js"), 
require("../../utils/albumsjump.js").albumsjump), r = 0, u = 0, c = 0, d = 0;

Page({
    data: {
        showfuli: !0,
        show: !0,
        showpuzze: !1,
        searchState: !1,
        showintroduce: !1,
        page: "index",
        animationDataed: {},
        newPerState: !1,
        loadImgState: !0,
        showVersion: !0,
        GetActivityMsg: {},
        hasCreated: {},
        showDisposeModel: !1,
        classArr: [ "pic1", "pic2", "pic3" ],
        textArr: [ "精彩内容正在赶来...", "稍等一下啦...", "小忆正在加载中..." ],
        pagenum: 1,
        showLoadingImg: !1,
        loadingImgOrText: !0,
        usernumber: 3006789,
        maxnumber: 10000009,
        activityBanner: {},
        showDelete: !1,
        isGroupCreator: !1,
        showAuthPic: !1,
        authpic: {
            belowImgUrl: "http://oibl5dyji.bkt.clouddn.com/0408_default.png"
        },
        showNewUser: !1,
        newUserPic: "http://oibl5dyji.bkt.clouddn.com/0408_newShow.png",
        showMsg: {
            dz: 1,
            tz: 1,
            pl: 1,
            jf: 1,
            tx: 1
        }
    },
    onLoad: function(t) {
        // a.stat.statpv({
        //     route: this.route,
        //     options: t
        // }), this.setData({
        //     loadImgState: !1
        // });
        // var e = this;
        // e.toastState = !0, t.shareUserid && (e.shareUserid = t.shareUserid), t.shCode && (e.shCode = t.shCode);
        // t.q && t.q.indexOf("api.uboxsale.com") > 0 && (this.setData({
        //     ufApiImgUrl: "https://api.uboxsale.com/Miniapp/Coupon/ufcode/" + t.q
        // }), this.port = "友粉导流", wx.setStorage({
        //     key: "hasGetTicket",
        //     data: "yes"
        // })), t.version && (this.version = t.version), t.port && (this.port = t.port, a.globalData.port = t.port), 
        // t.fromUserID && (this.fromUserID = t.fromUserID), t.fromSpaceID && (this.fromSpaceID = t.fromSpaceID), 
        // t.fromEventID && (this.fromEventID = t.fromEventID), this.lastPage = t.lastPage, 
        // this.lastPage = this.lastPage || "null", this.isSubmit = 1, wx.getStorageSync("userInfo") || (this.setData({
        //     showAuthPic: !0
        // }), i.getAuthPic("home", 0, function(t) {
        //     e.setData({
        //         authpic: t
        //     });
        // })), wx.getStorage({
        //     key: "peopleCount",
        //     success: function(t) {
        //         0 != t.data && t.data, e.setData({
        //             maxnumber: t.data
        //         });
        //     }
        // });
    },
    addgroup: function(t) {
      wx.navigateTo({
        url: "../makegroup/makegroup?lastPage=index",
        success: function (t) {
          o.data.showNewUser && o.setData({
            showNewUser: !1
          });
        }
      });
    },
    ufApiSuccess: function() {
        wx.showModal({
            title: "领券成功",
            content: "成功领取友宝优惠券",
            showCancel: !0,
            cancelText: "继续领券",
            confirmText: "知道了",
            complete: function(t) {
                t.cancel && wx.navigateBack({
                    delta: -999
                });
            }
        });
    },
    ufApiError: function() {
        console.log("发券失败");
    },
    changepage: function(t) {
        var e = t.target.dataset.type;
        e != this.data.page && this.setData({
            page: e
        });
    },
    hiddenmodel: function() {
        var t = wx.createAnimation({
            transformOrigin: "50% 50%",
            duration: 300,
            timingFunction: "ease",
            delay: 0
        });
        t.scale(0, 0).rotate(90).step(), this.setData({
            animationData: t.export()
        });
    },
    showmodel: function() {
        var t = wx.createAnimation({
            transformOrigin: "50% 50%",
            duration: 300,
            timingFunction: "ease",
            delay: 0
        });
        t.scale(1, 1).rotate(360).step(), this.setData({
            animationData: t.export()
        });
    },
    makepingtu: function() {
        wx.navigateTo({
            url: "../makepingtu/makepingtu"
        });
    },
    onShow: function() {
        var t = this, e = this.version ? this.version : "", s = this.port ? this.port : "", n = this.fromUserID ? this.fromUserID : 0, r = this.fromSpaceID ? this.fromSpaceID : 0, u = this.fromEventID ? this.fromEventID : 0, c = i.randomNum(0, 2);
        t.setData({
            promptText: c,
            showDelete: !1,
            isGroupCreator: !1
        }), t.delGroupid = 0, a.getUserInfo(function(e) {
            t.setData({
                showAuthPic: !1,
                switchState: null != wx.getStorageSync("userInfo").uLockPass
            }), null != wx.getStorageSync("userInfo").uLockPass && a.globalData.pwdState && wx.navigateTo({
                url: "/pages/others/password/password?setPwd=shuru"
            });
            var n = "yes" == e.isnew;
            if ("yes" == e.isnew && (t.setData({
                showNewUser: !0
            }), i.getAuthPic("homeGuidance", 0, function(e) {
                t.setData({
                    newUserPic: e.belowImgUrl
                });
            })), 1 == t.isSubmit) {
                t.enterCurrentTimestamp = new Date().getTime();
                var r = {
                    basicInfo: {
                        userid: e.userid,
                        source: s,
                        "isActivityAlbum ": "null",
                        "lastPage ": t.lastPage,
                        timestamp: t.enterCurrentTimestamp,
                        identification: e.userid + "_" + a.enterTimestamp
                    },
                    type: "enter",
                    data: {
                        page: {
                            name: "index",
                            page_identification: e.userid + "_" + t.enterCurrentTimestamp
                        }
                    }
                };
                0 == a.sendValue && i.sendData(e.userid, r), t.button = [];
            } else t.isSubmit = 1;
            a.globalData.utime || t.flashSalegetUserInfo(e.userid), t.getgrouplist(), t.getActivityBanner(), 
            t.getIsHasMsg(), t.everCreated(e.userid), t.data.showVersion && wx.request({
                url: o.getUrl("YinianProject/h5/GetActivityMsg"),
                data: {
                    userid: e.userid
                },
                success: function(a) {
                    0 == a.data.code && (t.setData({
                        GetActivityMsg: a.data.data[0],
                        showintroduce: n
                    }), t.activityId = a.data.data[0].id, n && wx.request({
                        url: o.getUrl("YinianProject/h5/SetUserJoinActivity"),
                        data: {
                            activityId: t.activityId,
                            userid: e.userid
                        },
                        success: function(t) {}
                    }));
                }
            }), a.getshowState(function(e) {
                t.setData({
                    showpuzze: e,
                    showintroduce: n,
                    userpic: a.globalData.userInfo.upic
                });
            });
            a.globalData.userInfo.userid;
            t.shareUserid && n && i.wxreq({
                pathname: "YinianProject/points/SuccessInviteFriend",
                data: {
                    userid: t.shareUserid
                }
            }).then(function(t) {
                console.log(t);
            }), t.shareUserid && t.shCode && n && ("wx" == t.shCode ? i.wxreq({
                pathname: "YinianProject/activity/ReceiveEncourageReward",
                data: {
                    userid: t.shareUserid,
                    type: "shareToWechatGroup"
                }
            }).then(function(t) {
                console.log(t);
            }) : "friend" == t.shCode && i.wxreq({
                pathname: "YinianProject/activity/ReceiveEncourageReward",
                data: {
                    userid: t.shareUserid,
                    type: "shareToMoments"
                }
            }).then(function(t) {
                console.log(t);
            }));
        }, e, s, n, r, u, "index", function() {
            t.setData({
                showAuthPic: !1
            });
        });
    },
    onHide: function() {
        1 == this.isSubmit && this.sendLeaveData();
    },
    onUnload: function() {},
    sendLeaveData: function() {
        var t = this, e = this.port ? this.port : "", s = wx.getStorageSync("userid"), o = new Date().getTime() - t.enterCurrentTimestamp, n = {
            basicInfo: {
                userid: s,
                source: e,
                " isActivityAlbum ": "null",
                "lastPage ": t.lastPage,
                timestamp: new Date().getTime(),
                identification: s + "_" + a.enterTimestamp
            },
            type: "leave",
            data: {
                page: {
                    name: "index",
                    page_identification: s + "_" + t.enterCurrentTimestamp
                },
                botton: t.button,
                time: o
            }
        };
        0 == a.sendValue && i.sendData(s, n);
    },
    prevent: function() {},
    afterReadShow: function() {
        wx.navigateTo({
            url: "../commonpage/makeBurnAfterRead/make"
        });
    },
    getIsHasMsg: function() {
        var t = this;
        i.wxreq({
            pathname: "YinianProject/msgCenter/getAllMsgStatus",
            data: {
                userId: wx.getStorageSync("userid")
            }
        }).then(function(e) {
            console.log(e), 0 == e.code && t.setData({
                showMsg: e.data[0]
            });
        });
    },
    toMsgCenter: function(t) {
        var e = t.detail.formId;
        i.sendFormId(a.globalData.userInfo.userid, e), wx.navigateTo({
            url: "/pages/msgcenter/msgcenter?from=myself&showMsg=" + JSON.stringify(this.data.showMsg)
        });
    },
    showDelete: function(e) {
        var a = e.currentTarget.dataset.mydata;
        if (a) {
            var i = this, s = a.split(","), o = t(s, 2);
            i.delCreator = o[0], i.delGroupid = o[1];
            var n = wx.getStorageSync("userInfo");
            n && (n.userid == i.delCreator ? this.setData({
                isGroupCreator: !0,
                showDelete: !0
            }) : this.setData({
                isGroupCreator: !1,
                showDelete: !0
            }));
        }
    },
    closeDelete: function() {
        this.setData({
            showDelete: !1
        });
    },
    leaveGroup: function() {
        var t = wx.getStorageSync("userInfo");
        if (t && t.userid) {
            var e = this, a = e.data.isGroupCreator ? "解散相册" : "退出相册", i = e.data.isGroupCreator ? "是否确定解散相册" : "是否确定退出相册", s = e.data.isGroupCreator ? "已解散该相册" : "已退出该相册", n = e.data.isGroupCreator ? "YinianProject/yinian/DeleteGroup" : "YinianProject/yinian/LeaveAlbum";
            wx.showModal({
                title: a,
                content: i,
                showCancel: !0,
                success: function(i) {
                    i.confirm && (wx.showToast({
                        title: "请稍后",
                        icon: "loading",
                        duration: 15e3,
                        mask: !0
                    }), wx.request({
                        url: o.getUrl(n),
                        data: {
                            userid: t.userid,
                            groupid: e.delGroupid,
                            source: "smallApp"
                        },
                        success: function(t) {
                            "success" == t.data.msg ? (wx.showToast({
                                title: s,
                                success: function() {}
                            }), [].concat(e.data.grouplist).forEach(function(t, a) {
                                t.groupid == e.delGroupid && e.data.grouplist.splice(a, 1);
                            }), e.setData({
                                grouplist: e.data.grouplist,
                                showDelete: !1,
                                isGroupCreator: !1
                            }), e.delGroupid = 0) : (wx.showToast({
                                title: a + "失败"
                            }), e.setData({
                                showDelete: !1,
                                isGroupCreator: !1
                            }), e.delGroupid = 0);
                        },
                        fail: function() {
                            wx.showToast({
                                title: a + "失败"
                            }), e.setData({
                                showDelete: !1,
                                isGroupCreator: !1
                            }), e.delGroupid = 0;
                        }
                    }));
                }
            });
        }
    },
    everCreated: function(t) {
        var e = this;
        wx.request({
            url: o.getUrl("YinianProject/h5/getUserCreateGroupCnt"),
            data: {
                userid: t
            },
            success: function(t) {
                0 == t.data.code && e.setData({
                    hasCreated: t.data.data[0]
                });
            }
        });
    },
    getgrouplist: function() {
        var t = this;
        i.wxreq({
            pathname: "YinianProject/yinian/ShowNoPicCntGroupWithTopNew",
            data: {
                userid: a.globalData.userInfo.userid,
                pagenum: 10 * t.data.pagenum,
                type: "refresh"
            }
        }).then(function(e) {
            t.isLoading = !1, 0 == e.code ? (e.data.forEach(function(t) {
                t.gnum >= 1e4 && (t.gnum = parseInt(t.gnum / 1e4) + "w+");
            }), t.setData({
                grouplist: e.data,
                newPerState: !0,
                loadImgState: !0,
                showLoadingImg: !1,
                loadingImgOrText: !0
            }), wx.setStorage({
                key: "groupListDetail",
                data: e.data
            })) : wx.showModal({
                title: "提示",
                content: "网络错误，请稍后重试",
                showCancel: !1,
                success: function() {
                    t.setData({
                        loadImgState: !0
                    });
                }
            });
        }).catch(function(e) {
            wx.showModal({
                title: "提示",
                content: "网络忙,请检查网络重试",
                showCancel: !1,
                success: function() {
                    t.setData({
                        loadImgState: !0
                    });
                }
            });
        });
    },
    getActivityBanner: function() {
        var t = this;
        i.wxreq({
            pathname: "YinianProject/activity/getBanner",
            data: {}
        }).then(function(e) {
            0 == e.code && t.setData({
                activityBanner: e.data[0]
            });
        });
    },
    toActivityPage: function(t) {
        var e = t.detail.formId;
        i.sendFormId(a.globalData.userInfo.userid, e), wx.switchTab({
            url: "/pages/activitypage/activityindex/activityindex"
        });
    },
    onReachBottom: function() {
        wx.getStorageSync("userid") && this.data.grouplist && 0 != this.data.grouplist.length && (this.isLoading || this.loadmoregroup());
    },
    loadmoregroup: function() {
        var t = this;
        t.setData({
            showLoadingImg: !0,
            loadingImgOrText: !0
        }), this.isLoading = !0, i.wxreq({
            pathname: "YinianProject/yinian/ShowNoPicCntGroupWithTopNew",
            data: {
                userid: a.globalData.userInfo.userid,
                pagenum: t.data.pagenum + 1,
                type: ""
            }
        }).then(function(e) {
            if (0 != e.code) return t.isLoading = !1, void wx.showModal({
                title: "提示",
                content: "网络错误，请稍后重试",
                showCancel: !1,
                success: function() {
                    t.setData({
                        loadImgState: !0,
                        showLoadingImg: !1
                    });
                }
            });
            0 != e.data.length ? (e.data.forEach(function(t) {
                t.gnum >= 1e4 && (t.gnum = parseInt(t.gnum / 1e4) + "w+");
            }), t.data.grouplist = t.data.grouplist.concat(e.data), t.setData({
                grouplist: t.data.grouplist,
                newPerState: !0,
                loadImgState: !0,
                pagenum: t.data.pagenum + 1,
                showLoadingImg: !1
            }), t.isLoading = !1, wx.setStorage({
                key: "groupListDetail",
                data: e.data
            })) : t.setData({
                showLoadingImg: !0,
                loadingImgOrText: !1
            });
        }).catch(function(e) {
            t.setData({
                showLoadingImg: !1
            }), t.isLoading = !1, wx.showModal({
                title: "提示",
                content: "网络忙,请检查网络重试",
                showCancel: !1,
                success: function() {
                    t.setData({
                        loadImgState: !0
                    });
                }
            });
        });
    },
    makeTop: function(t) {
        var e = t.detail.formId;
        i.sendFormId(a.globalData.userInfo.userid, e);
        var s = this, n = t.currentTarget.dataset.index, r = s.data.grouplist[n], u = r.isTop;
        s.text = u ? "取消置顶" : "置顶", wx.showModal({
            title: "提示",
            content: "是否" + s.text + "该相册",
            success: function(t) {
                if (t.confirm) {
                    var e = 1 == u ? "no" : "yes";
                    wx.request({
                        url: o.getUrl("YinianProject/yinian/SetGroupIsTopNew"),
                        data: {
                            userid: wx.getStorageSync("userid"),
                            groupid: r.groupid,
                            isTop: e
                        },
                        success: function(t) {
                            0 == t.data.code && wx.showToast({
                                title: s.text + "成功",
                                icon: "success",
                                success: function(t) {
                                    s.getgrouplist();
                                }
                            });
                        }
                    });
                }
            }
        });
    },
    closeNewUser: function() {
        this.setData({
            showNewUser: !1
        });
    },
    modelsession: function() {},
    showfuli: function() {
        this.setData({
            showfuli: !1
        });
    },
    photoalbum: function() {
        this.setData({
            show: !0
        });
    },
    toSearch: function(t) {
        var e = t.detail.formId;
        i.sendFormId(a.globalData.userInfo.userid, e), wx.navigateTo({
            url: "/pages/others/search/search"
        });
    },
    userInfoHandler: function(t) {
        a.ger;
    },
    closeVersion: function(t) {
        var e = this, i = this.version ? this.version : "", s = this.port ? this.port : "", o = this.fromUserID ? this.fromUserID : 0, n = this.fromSpaceID ? this.fromSpaceID : 0, r = this.fromEventID ? this.fromEventID : 0;
        a.getUserInfo(function(u) {
            "新用户" != u.nickName ? e.closeVersionHttp() : "getUserInfo:fail auth deny" == t.detail.errMsg ? wx.showModal({
                title: "提示",
                content: "只有授权之后才能使用相册哦！",
                showCancel: !1
            }) : a.newAuthfunction(function(t) {
                "新用户" != t.nickName && e.closeVersionHttp();
            }, i, s, o, n, r, t.detail, "", function() {});
        }, i, s, o, n, r, "index", function() {});
    },
    closeVersionHttp: function() {
        var t = this;
        this.setData({
            showVersion: !1
        }), wx.getStorageSync("userid") && wx.request({
            url: o.getUrl("YinianProject/h5/SetUserJoinActivity"),
            data: {
                activityId: t.activityId,
                userid: wx.getStorageSync("userid")
            },
            success: function(t) {}
        });
    },
    toGroupScoll: function(t) {
        console.log(122);
        var e = t.currentTarget.dataset.groupid, a = t.currentTarget.dataset.grouptype;
        n({
            groupNewType: a,
            data: {
                lastPage: "index",
                from: "grouplist",
                groupid: e
            },
            navigator: "navigate"
        });
    },
    ToActivityGroup: function(t) {
        var e = this, i = this.version ? this.version : "", s = this.port ? this.port : "", o = this.fromUserID ? this.fromUserID : 0, n = this.fromSpaceID ? this.fromSpaceID : 0, r = this.fromEventID ? this.fromEventID : 0;
        a.getUserInfo(function(t) {
            "新用户" != t.nickName ? e.ToActivityGroupHttp() : "getUserInfo:fail auth deny" == res.detail.errMsg ? wx.showModal({
                title: "提示",
                content: "只有授权之后才能使用相册哦！",
                showCancel: !1
            }) : a.newAuthfunction(function(t) {
                "新用户" != t.nickName && e.ToActivityGroupHttp();
            }, i, s, o, n, r, res.detail, "", function() {});
        }, i, s, o, n, r, "index", function() {});
    },
    ToActivityGroupHttp: function() {
        var t = this, e = t.data.GetActivityMsg.groupid, a = t.data.GetActivityMsg.groupNewType;
        wx.getStorageSync("userid") && wx.request({
            url: o.getUrl("YinianProject/h5/SetUserJoinActivity"),
            data: {
                activityId: t.activityId,
                userid: wx.getStorageSync("userid")
            },
            success: function(t) {}
        }), e && n({
            groupNewType: a,
            data: {
                lastPage: "index",
                from: "grouplist",
                groupid: e
            },
            navigator: "redirect"
        });
    },
    toSpecailActivity: function() {
        var t = this, e = this.version ? this.version : "", i = this.port ? this.port : "", s = this.fromUserID ? this.fromUserID : 0, o = this.fromSpaceID ? this.fromSpaceID : 0, n = this.fromEventID ? this.fromEventID : 0;
        a.getUserInfo(function(r) {
            "新用户" != r.nickName ? t.toSpecailActivityHttp() : "getUserInfo:fail auth deny" == res.detail.errMsg ? wx.showModal({
                title: "提示",
                content: "只有授权之后才能使用相册哦！",
                showCancel: !1
            }) : a.newAuthfunction(function(e) {
                "新用户" != e.nickName && t.toSpecailActivityHttp();
            }, e, i, s, o, n, res.detail, "", function() {});
        }, e, i, s, o, n, "index", function() {});
    },
    toSpecailActivityHttp: function(t) {
        var e = this.data.GetActivityMsg.title, a = this;
        if (e) {
            wx.navigateTo({
                url: "/" + e
            });
            var s = wx.getStorageSync("userid") || 0, n = {
                userId: s
            };
            i.joinSpacialActivity(n), s && wx.request({
                url: o.getUrl("YinianProject/h5/SetUserJoinActivity"),
                data: {
                    activityId: a.activityId,
                    userid: s
                },
                success: function(t) {}
            });
        }
    },
    onShareAppMessage: function() {
        this.isSubmit = 2;
        var t = wx.getStorageSync("userInfo").userid || 0;
        return {
            title: a.globalData.userInfo.nickName + "和你分享了几段时光",
            desc: "这里面有几张我很喜欢的照片，快来看看你喜欢嘛？",
            path: "/pages/index/index?port=小程序分享&fromUserID=" + t,
            success: function() {
                a.stat.request({
                    operation: "shareCallback"
                });
            }
        };
    },
    fasttoknow: function(t) {
        var e = t.detail.formId;
        i.sendFormId(a.globalData.userInfo.userid, e);
        var o = this;
        o.setData({
            showDisposeModel: !0,
            usernumber: s.usernumber
        }), clearInterval(o.timerinterval), o.timerinterval = null, o.usernumberchange();
    },
    usernumberchange: function() {
        var t = this;
        t.timerinterval = setInterval(function() {
            if (t.data.usernumber > t.data.maxnumber) {
                clearInterval(t.timerinterval), t.timerinterval = null;
                var e = t.toThousands(t.data.maxnumber);
                t.setData({
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
        this.setData({
            showDisposeModel: !1,
            classArr: [ "pic1", "pic2", "pic3" ]
        });
    },
    changestart: function(t) {
        r = t.touches[0].pageX, u = t.touches[0].pageY;
    },
    changemove: function(t) {},
    changend: function(t) {
        var e = this;
        if (c = t.changedTouches[0].pageX, d = t.changedTouches[0].pageY, r - c > 30) {
            if ("pic2" == e.data.classArr[0]) return;
            e.data.classArr.unshift(e.data.classArr[e.data.classArr.length - 1]), e.data.classArr.pop(e.data.classArr[e.data.classArr.length - 1]), 
            e.setData({
                classArr: e.data.classArr
            });
        } else if (c - r > 30) {
            if ("pic1" == e.data.classArr[0]) return;
            e.data.classArr.push(e.data.classArr[0]), e.data.classArr.shift(e.data.classArr[0]), 
            e.setData({
                classArr: e.data.classArr
            });
        }
    }, 
    donothing: function() {},
    flashSalegetUserInfo: function(t) {
        i.wxreq({
            pathname: "YinianProject/flashSale/getUserInfo",
            data: {
                userId: t
            }
        }).then(function(t) {
            0 == t.code && (a.globalData.utime = t.data[0].utime);
        }, function(t) {});
    }
});