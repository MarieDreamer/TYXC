function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e, a = function() {
    function t(t, e) {
        var a = [], o = !0, i = !1, s = void 0;
        try {
            for (var n, r = t[Symbol.iterator](); !(o = (n = r.next()).done) && (a.push(n.value), 
            !e || a.length !== e); o = !0) ;
        } catch (t) {
            i = !0, s = t;
        } finally {
            try {
                !o && r.return && r.return();
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
}(), o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, i = require("../../utils/util.js"), s = require("../../utils/config.js"), n = require("../../utils/reg.js"), r = getApp(), l = require("../../utils/api.js"), u = require("../../utils/common.js"), d = [], c = require("../../utils/tripledes.js"), g = wx.createInnerAudioContext(), p = require("../../utils/albumsjump.js").albumsjump, h = require("../../utils/hotActive.js").hotActive, m = void 0, f = void 0, w = 0, v = 0, b = 0, I = 0;

Page((e = {
    data: {
        canIUse: !1,
        returnhomepic: "http://oibl5dyji.bkt.clouddn.com/20170605160928.png",
        ablumInfo: {},
        textNum: 0,
        fromlast: 0,
        showModelHidden: !1,
        pvShowModel: !1,
        showAudioModelBox: !1,
        eventlist: [],
        authorityList: [],
        showTop: !0,
        showFunModel: !1,
        loadImgState: !0,
        waitingState: !0,
        secondNum: 0,
        secondEnd: !0,
        showFooterIntro1: !0,
        showFooterIntro2: !0,
        alading: !1,
        aladingTwo: !0,
        progress: 0,
        showProgress: !1,
        uploadnum: 0,
        totalnum: 0,
        upSteps: 1,
        sucImgNum: 0,
        fitImgNum: 0,
        upViderOrPic: "pic",
        isUpPicState: !0,
        globalNewUser: !1,
        inBlackList: 1,
        showLoadingImg: !1,
        loadingImgOrText: !0,
        showmidifinenameModel: !1,
        showDisposeModel: !1,
        classArr: [ "pic1", "pic2", "pic3" ],
        activitySwitchhot: 1,
        inviteSwitchhot: 1,
        bottomUrl: "",
        isgcreator: !1,
        inviteBelowHint: "",
        alertButtonOne: "",
        alertHidePic: "",
        alertButtonTwo01: "",
        alertButtonTwo02: "",
        usernumber: 3006789,
        showcomeuserModel: !1,
        showfirstuploadModel: !1,
        firstUpPic: "http://oibl5dyji.bkt.clouddn.com/0509_firstUpPic.png",
        inventPerson: "",
        textArr: [ "精彩内容正在赶来...", "稍等一下啦...", "小忆正在加载中..." ],
        showActivityRules: !0,
        maxnumber: 0,
        showintroduce: !1,
        showAuthPic: !1,
        authpic: {
            belowImgUrl: ""
        },
        showComInput: !1,
        placehold: "对ta说点啥...",
        inputfocus: !1,
        loversBannerInfo: {
            bannerShowPic: "http://oibl5dyji.bkt.clouddn.com/0412_loveBanner.png",
            bannerSwitch: 0
        },
        showLoveFirstBox: !1,
        loversInvitePic: "http://7xlmtr.com1.z0.glb.clouddn.com/alertPictureOne_20180412.png",
        loversIntroPic: "http://7xlmtr.com1.z0.glb.clouddn.com/alertPictureTwo_20180412.png",
        addModalOn: !1,
        addModalAnimation: !1,
        addEventModalOn: !1,
        addEventModalAnimation: !1,
        addPhotoModalOn: !1,
        addPhotoModalAnimation: !1,
        modalTitle: "照片",
        icon: {
            arrow: "http://oibl5dyji.bkt.clouddn.com/myself_more@2x.png",
            photos: "http://oibl5dyji.bkt.clouddn.com/photos@2x.png",
            members: "http://oibl5dyji.bkt.clouddn.com/members@2x.png",
            photo_wall: "http://oibl5dyji.bkt.clouddn.com/photos_wall@2x.png",
            user: "http://oibl5dyji.bkt.clouddn.com/user@2x.png",
            camera: "http://oibl5dyji.bkt.clouddn.com/camera@2x.png",
            camera_l: "http://oibl5dyji.bkt.clouddn.com/camera_l@2x.png",
            photo_l: "http://oibl5dyji.bkt.clouddn.com/photo_l@2x.png",
            video_l: "http://oibl5dyji.bkt.clouddn.com/video_l@2x.png",
            write_l: "http://oibl5dyji.bkt.clouddn.com/write_l@2x.png",
            mike_l: "http://oibl5dyji.bkt.clouddn.com/mike_l@2x.png",
            close_l: "http://oibl5dyji.bkt.clouddn.com/close_l@2x.png",
            pose_add: "http://oibl5dyji.bkt.clouddn.com/PC_add@2x.png",
            pose_add_l: "http://oibl5dyji.bkt.clouddn.com/PC_add_l@2x.png",
            camera_dark: "http://oibl5dyji.bkt.clouddn.com/content_carema@2x.png"
        },
        loversInfo: {
            alertPicUrl: "http://7xlmtr.com1.z0.glb.clouddn.com/alert_for_lover_201804201820.png",
            dakahuodongPicUrl: "http://7xlmtr.com1.z0.glb.clouddn.com/dakahuodong_pic_201804201820.png",
            inviteText: "立即邀请",
            jilutianmiPicUrl: "http://7xlmtr.com1.z0.glb.clouddn.com/ji_lu_tian_mi_pic_201804201821.png",
            kongXiangCePicUrl: "http://7xlmtr.com1.z0.glb.clouddn.com/kong_xiang_tupian_pic_201804201822.png",
            uploadText: "上传甜蜜时刻",
            yaoQingPicUrl: "http://7xlmtr.com1.z0.glb.clouddn.com/yao_qing_ling_yi_ban_pic.png"
        },
        showMayDayActivity: !1,
        isActivitySwitch: {},
        showInviteModal: !1,
        publishMenu: !1,
        menuNames: ""
    },
    prevent: function() {
        this.setData({
            fromlast: 1
        });
    },
    stop: function() {},
    donothing: function() {},
    stopreset: function() {
        this.loadImgStateNo = !0, this.setData({
            fromlast: 1
        });
    },
    stopLoadImg: function() {
        this.loadImgStateNo = !0;
    },
    onLoad: function(t) {
        if (r.stat.statpv({
            route: this.route,
            options: t
        }), this.getAlbumCreater(), !t.groupid) {
            var e = decodeURIComponent(t.scene);
            if (t = {}, e.length > 0) for (var a = e.split("&"), o = 0; o < a.length; o++) t[a[o].split("=")[0]] = a[o].split("=")[1];
        }
        t.version && (this.version = t.version), t.port && (this.port = t.port, r.globalData.port = t.port, 
        this.setData({
            port: t.port
        })), t.fromUserID && (this.fromUserID = t.fromUserID), t.fromSpaceID && (this.fromSpaceID = t.fromSpaceID), 
        t.fromEventID && (this.fromEventID = t.fromEventID), this.isconfirm = t.isconfirm, 
        this.mayefrom = t.mayefrom || "", this.loadImgStateNo = !1, this.getActivitySwitch();
        var s = this;
        s.setData({
            fromlast: 0,
            loadImgState: !1
        }), this.groupid = t.groupid, this.from = t.from, this.mode = t.mode, this.type = t.type, 
        this.comeuserid = t.comeUserid;
        try {
            wx.setStorageSync("groupid", parseInt(s.groupid));
        } catch (t) {
            console.log(t);
        }
        this.zj = t.zj || "", this.lastPage = t.lastPage, this.lastPage = this.lastPage || "null", 
        this.isSubmit = 1;
        var n = "showLoad" + s.groupid, l = "showCreat" + s.groupid;
        wx.getStorageSync(n) ? s.setData({
            showFooterIntro1: !1
        }) : s.setData({
            showFooterIntro1: !0
        }), wx.getStorageSync(l) ? s.setData({
            showFooterIntro2: !1
        }) : s.setData({
            showFooterIntro2: !0
        }), this.loadImgStateNo = !1, wx.getStorageSync("userInfo") || (s.setData({
            showAuthPic: !0
        }), i.getAuthPic("timeLine", s.groupid, function(t) {
            s.setData({
                authpic: t
            });
        })), s.getBannerInfo(), wx.getStorage({
            key: "peopleCount",
            success: function(t) {
                0 != t.data && t.data ? s.setData({
                    maxnumber: t.data
                }) : (console.log(t), s.setData({
                    maxnumber: t.data
                }));
            }
        }), "newlovers" === t.makeFrom && (this.setData({
            showLoveFirstBox: !0
        }), i.getAuthPic("lovers_invite", 0, function(t) {
            s.setData({
                loversInvitePic: t.belowImgUrl
            });
        }));
    },
    onShow: function() {
        var t = this.version ? this.version : "", e = this.port ? this.port : "", a = this.fromUserID ? this.fromUserID : 0, o = this.fromSpaceID ? this.fromSpaceID : 0, s = this.fromEventID ? this.fromEventID : 0;
        this.nc = a;
        var n = this;
        if (n.flashSaleShowSwitch(), n.setData({
            groupid: n.groupid
        }), wx.setStorageSync("groupid", parseInt(n.groupid)), r.getshowState(function(t) {
            n.setData({
                showpuzze: t
            });
        }), n.retState = !1, 2 === r.upState) {
            var u = r.upObj;
            if (!u.picarr || 0 == u.picarr.length) return void console.log("获取上传的参数出错");
            r.isUp || ("pic" == r.fromUp ? n.startUpload() : "video" == r.fromUp ? n.startUpVideo() : "audio" == r.fromUp && n.startUpAudio(), 
            n.setData({
                isUpPicState: !1
            })), r.upState = 0;
        }
        "text" == r.fromUp && (n.isfirstUpload(r.text), r.fromUp = "");
        var d = i.randomNum(0, 2);
        n.setData({
            promptText: d
        }), r.getUserInfo(function(t) {
            if (1 == n.isSubmit) {
                n.enterCurrentTimestamp = new Date().getTime();
                var a = "null";
                n.data.ablumInfo && 1 == n.data.ablumInfo.gOrigin ? a = "true" : n.data.ablumInfo && 1 != n.data.ablumInfo.gOrigin && (a = "false");
                var o = {
                    basicInfo: {
                        userid: t.userid,
                        source: e,
                        "isActivityAlbum ": a,
                        "lastPage ": n.lastPage,
                        timestamp: n.enterCurrentTimestamp,
                        identification: t.userid + "_" + r.enterTimestamp
                    },
                    type: "enter",
                    data: {
                        page: {
                            name: "albumDetail",
                            page_identification: t.userid + "_" + n.enterCurrentTimestamp
                        }
                    }
                };
                0 == r.sendValue && i.sendData(t.userid, o), n.button = [];
            } else n.isSubmit = 1;
            r.globalData.utime || n.flashSalegetUserInfo(t.userid), r.stat.stathotmall({
                userId: t.userid,
                groupId: n.groupid,
                port: r.globalData.port,
                operation: "interalbum",
                registerTime: r.globalData.utime,
                inviteId: n.nc
            }), 1 != n.data.fromlast ? (n.loadImgStateNo || (n.setData({
                loadImgState: !1
            }), setTimeout(function() {
                n.loadImgStateNo = !1;
            }, 100)), "yes" == t.isnew && (n.setData({
                showintroduce: !0
            }), r.isNewUser = !0, n.comeuserid && wx.request({
                url: l.getUrl("YinianProject/points/SuccessInviteFriend"),
                data: {
                    userid: n.comeuserid
                },
                method: "GET",
                success: function(t) {
                    console.log(t), t.data.code;
                },
                fail: function(t) {}
            })), r.isNewUser && n.setData({
                globalNewUser: !0
            }), null != wx.getStorageSync("userInfo").uLockPass && r.globalData.pwdState && wx.navigateTo({
                url: "/pages/others/password/password?setPwd=shuru"
            }), n.setData({
                winHeight: r.globalData.systemInfo.windowHeight,
                isIphonex: r.globalData.systemInfo.model.toLowerCase().indexOf("iphone x") >= 0,
                r2p: r.globalData.systemInfo.windowWidth / 750,
                from: n.from || "",
                groupid: n.groupid,
                userid: t.userid,
                showAuthPic: !1
            }), n.groupid ? (n.nickname = t.nickName, wx.request({
                url: l.getUrl("YinianProject/test/GetControllerValue"),
                data: {},
                success: function(e) {
                    if (0 == e.data.code && e.data.data[0].openloading) {
                        var a = parseInt(5 * Math.random() + 5);
                        return n.setData({
                            waitingState: !1,
                            secondNum: a,
                            secondEnd: !0
                        }), void (n.timer3 = setInterval(function() {
                            var t = n.data.secondNum;
                            t <= 0 ? (clearInterval(n.timer3), n.timer3 = null, n.setData({
                                secondEnd: !1
                            })) : (t--, n.setData({
                                secondNum: t
                            }));
                        }, 1e3));
                    }
                    n.getAlbumInformation(t);
                }
            })) : wx.showModal({
                title: "提示",
                content: "页面找不到了，返回首页看看",
                showCancel: !1,
                success: function() {
                    wx.switchTab({
                        url: "/pages/index/index"
                    });
                }
            })) : n.timer = setTimeout(function() {
                n.setData({
                    fromlast: 0
                });
            }, 100);
        }, t, e, a, o, s, "viewscoll", function() {
            n.setData({
                showAuthPic: !1
            });
        });
    },
    onReady: function() {
        var t = this;
        g.onPlay(function(t) {}), g.onPause(function(t) {}), g.onError(function(e) {
            wx.showToast({
                title: "语音播放错误",
                duration: 1e3
            }), t.closeAllAudio();
        }), g.onEnded(function(e) {
            t.closeAllAudio();
        });
        var e = 0;
        r.globalData.userInfo && (e = r.globalData.userInfo.userid), wx.reportAnalytics("addmember", {
            userid: e,
            groupid: t.groupid,
            clicktime: i.formatTimeWithSecond(new Date())
        });
    },
    onHide: function() {
        1 == this.isSubmit && (console.log("viewscoll-hide"), this.sendLeaveData());
    },
    onUnload: function() {
        var t = this;
        console.log("viewscoll-onUnload"), this.sendLeaveData(), this.retState = !0, 3 == t.data.upSteps && (r.upState = 0, 
        r.upObj = {}, t.setData({
            progress: 0,
            showProgress: !1,
            uploadnum: 0,
            totalnum: 0,
            upSteps: 1,
            sucImgNum: 0,
            fitImgNum: 0
        }));
    },
    sendLeaveData: function() {
        var t = this, e = this.port ? this.port : "", a = wx.getStorageSync("userid"), o = new Date().getTime() - t.enterCurrentTimestamp, s = "null";
        t.data.ablumInfo && 1 == t.data.ablumInfo.gOrigin ? s = "true" : t.data.ablumInfo && 1 != t.data.ablumInfo.gOrigin && (s = "false");
        var n = {
            basicInfo: {
                userid: a,
                source: e,
                " isActivityAlbum ": s,
                "lastPage ": t.lastPage,
                timestamp: new Date().getTime(),
                identification: a + "_" + r.enterTimestamp
            },
            type: "leave",
            data: {
                page: {
                    name: "albumDetail",
                    page_identification: a + "_" + t.enterCurrentTimestamp
                },
                botton: t.button,
                time: o
            }
        };
        0 == r.sendValue && i.sendData(a, n);
    },
    uploadAgain: function() {
        "pic" == r.fromUp ? this.startUpload() : "video" == r.fromUp ? this.startUpVideo() : "audio" == r.fromUp && this.startUpAudio(), 
        this.setData({
            isUpPicState: !1
        });
    },
    startUpVideo: function() {
        console.log(r.upObj);
        var t = this, e = r.upObj;
        t.setData({
            showProgress: !0,
            totalnum: 1,
            uploadnum: 0,
            progress: 0,
            upSteps: 1,
            sucImgNum: 0,
            fitImgNum: 0,
            upViderOrPic: "video"
        }), r.isUp = !0, t.uploadvideosync(e);
    },
    uploadvideosync: function(t) {
        var e = this;
        wx.request({
            url: l.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),
            data: {},
            method: "GET",
            success: function(a) {
                if (console.log(a), 0 != a.data.code) return r.isUp = !1, void e.setData({
                    upSteps: 3,
                    showProgress: !0,
                    uploadnum: 0,
                    progress: 0
                });
                var o = a.data.data[0].token, i = t.picarr;
                wx.uploadFile({
                    url: "https://upload.qiniup.com",
                    filePath: i,
                    name: "file",
                    formData: {
                        key: i.split("//")[1],
                        token: o
                    },
                    success: function(a) {
                        if (console.log(a), 200 != a.statusCode) return r.isUp = !1, void e.setData({
                            upSteps: 3,
                            showProgress: !0,
                            uploadnum: 0,
                            progress: 0
                        });
                        e.setData({
                            uploadnum: 1,
                            progress: 100
                        });
                        var o = JSON.parse(a.data).key;
                        wx.request({
                            url: l.getUrl("YinianProject/event/UploadShortVideo"),
                            method: "GET",
                            data: {
                                userid: wx.getStorageSync("userid"),
                                groupid: t.mainIdStr,
                                content: t.content,
                                address: o,
                                storage: 6e3,
                                place: t.place,
                                attentionMember: t.attentionMember || "",
                                publishedTime: t.publishedTime || ""
                            },
                            success: function(a) {
                                if (console.log(a), 0 == a.data.code) {
                                    e.getCsTimeData(), r.isUp = !1, r.upState = 0, r.upObj = {}, e.setData({
                                        progress: 0,
                                        upSteps: 2
                                    }), e.timer5 = setTimeout(function() {
                                        e.setData({
                                            showProgress: !1,
                                            isUpPicState: !0
                                        });
                                    }, 3e3);
                                    var o = a.data.data;
                                    e.isfirstUpload(o), h(wx.getStorageSync("userid"), t.mainIdStr, "upload");
                                } else 1039 == a.data.code ? (e.getCsTimeData(), r.isUp = !1, r.upState = 0, r.upObj = {}, 
                                e.setData({
                                    progress: 0,
                                    upSteps: 4
                                }), e.timer5 = setTimeout(function() {
                                    e.setData({
                                        showProgress: !1,
                                        isUpPicState: !0
                                    });
                                }, 3e3)) : (r.isUp = !1, e.setData({
                                    upSteps: 3,
                                    showProgress: !0,
                                    uploadnum: 0,
                                    progress: 0
                                }));
                            },
                            fail: function() {
                                r.isUp = !1, e.setData({
                                    upSteps: 3,
                                    showProgress: !0,
                                    uploadnum: 0,
                                    progress: 0
                                });
                            }
                        });
                    },
                    fail: function(t) {
                        r.isUp = !1, e.setData({
                            upSteps: 3,
                            showProgress: !0,
                            uploadnum: 0,
                            progress: 0
                        });
                    }
                });
            },
            fail: function() {
                r.isUp = !1, e.setData({
                    upSteps: 3,
                    showProgress: !0,
                    uploadnum: 0,
                    progress: 0
                });
            }
        });
    },
    startUpAudio: function() {
        console.log(r.upObj);
        var t = this, e = r.upObj;
        t.setData({
            showProgress: !0,
            totalnum: 1,
            uploadnum: 0,
            progress: 0,
            upSteps: 1,
            sucImgNum: 0,
            fitImgNum: 0,
            upViderOrPic: "audio"
        }), r.isUp = !0, t.uploadAudio(e);
    },
    uploadAudio: function(t) {
        var e = this;
        wx.request({
            url: l.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),
            data: {},
            method: "GET",
            success: function(a) {
                if (console.log(a), 0 != a.data.code) return r.isUp = !1, void e.setData({
                    upSteps: 3,
                    showProgress: !0,
                    uploadnum: 0,
                    progress: 0
                });
                var o = a.data.data[0].token, i = t.picarr;
                wx.uploadFile({
                    url: "https://upload.qiniup.com",
                    filePath: i,
                    name: "file",
                    formData: {
                        key: i.split("//")[1],
                        token: o
                    },
                    success: function(a) {
                        if (console.log(a), 200 != a.statusCode) return r.isUp = !1, void e.setData({
                            upSteps: 3,
                            showProgress: !0,
                            uploadnum: 0,
                            progress: 0
                        });
                        e.setData({
                            uploadnum: 1,
                            progress: 100
                        });
                        var o = JSON.parse(a.data);
                        console.log("path", o);
                        var i = o.key;
                        console.log("userid", wx.getStorageSync("userid")), console.log("address", i), console.log("groupId", t.groupId), 
                        console.log("location", t.place), console.log("duration", t.duration), wx.request({
                            url: l.getUrl("YinianProject/event/UploadAudio"),
                            method: "GET",
                            data: {
                                userid: wx.getStorageSync("userid"),
                                groupid: t.groupId,
                                eaudio: i,
                                eaudioDuration: t.duration,
                                storage: 3e3,
                                place: t.place
                            },
                            success: function(a) {
                                if (console.log("lastres", a), 0 == a.data.code) {
                                    e.getCsTimeData(), r.isUp = !1, r.upState = 0, r.upObj = {}, e.setData({
                                        progress: 0,
                                        upSteps: 2
                                    }), e.timer5 = setTimeout(function() {
                                        e.setData({
                                            showProgress: !1,
                                            isUpPicState: !0
                                        });
                                    }, 3e3);
                                    var o = a.data.data;
                                    e.isfirstUpload(o), h(wx.getStorageSync("userid"), t.groupId, "upload");
                                } else 1039 == a.data.code ? (e.getCsTimeData(), r.isUp = !1, r.upState = 0, r.upObj = {}, 
                                e.setData({
                                    progress: 0,
                                    upSteps: 4
                                }), e.timer5 = setTimeout(function() {
                                    e.setData({
                                        showProgress: !1,
                                        isUpPicState: !0
                                    });
                                }, 3e3)) : (r.isUp = !1, e.setData({
                                    upSteps: 3,
                                    showProgress: !0,
                                    uploadnum: 0,
                                    progress: 0
                                }));
                            },
                            fail: function() {
                                r.isUp = !1, e.setData({
                                    upSteps: 3,
                                    showProgress: !0,
                                    uploadnum: 0,
                                    progress: 0
                                });
                            }
                        });
                    },
                    fail: function(t) {
                        r.isUp = !1, e.setData({
                            upSteps: 3,
                            showProgress: !0,
                            uploadnum: 0,
                            progress: 0
                        });
                    }
                });
            },
            fail: function() {
                r.isUp = !1, e.setData({
                    upSteps: 3,
                    showProgress: !0,
                    uploadnum: 0,
                    progress: 0
                });
            }
        });
    },
    closeProgress: function() {
        var t = this;
        clearTimeout(t.timer2), clearTimeout(t.timer4), clearTimeout(t.timer5), r.upState = 0, 
        r.upObj = {}, this.setData({
            progress: 0,
            showProgress: !1,
            uploadnum: 0,
            totalnum: 0,
            upSteps: 1,
            sucImgNum: 0,
            fitImgNum: 0,
            isUpPicState: !0
        });
    },
    startUpload: function() {
        var t = this, e = r.upObj, a = [].concat(e.picarr);
        t.setData({
            showProgress: !0,
            totalnum: e.picarr.length,
            uploadnum: 0,
            progress: 0,
            upSteps: 1,
            sucImgNum: 0,
            fitImgNum: 0,
            upViderOrPic: "pic"
        }), r.isUp = !0, d.length = 0, wx.request({
            url: l.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),
            data: {},
            method: "GET",
            success: function(o) {
                0 === o.data.code ? t.uploadpicasync(o.data.data[0].token, e, a) : (d.length = 0, 
                t.setData({
                    upSteps: 3,
                    showProgress: !0,
                    uploadnum: 0,
                    progress: 0
                }), r.isUp = !1);
            },
            fail: function(e) {
                d.length = 0, t.setData({
                    upSteps: 3,
                    showProgress: !0,
                    uploadnum: 0,
                    progress: 0
                }), r.isUp = !1;
            }
        });
    },
    uploadpicasync: function(t, e, a) {
        var o = this;
        if (0 == a.length) wx.request({
            url: l.getUrl("YinianProject/event/UploadEvent"),
            data: {
                userid: wx.getStorageSync("userid"),
                groupid: e.mainIdStr,
                content: e.content,
                picAddress: d.join(","),
                storage: 300 * d.length,
                memorytime: i.formatTime(new Date()),
                source: "小程序",
                place: e.place,
                formID: e.formID,
                isPush: "true",
                main: 0,
                attentionMember: e.attentionMember || "",
                publishedTime: e.publishedTime || ""
            },
            success: function(t) {
                if (console.log(t), 0 != t.data.code) return d.length = 0, r.isUp = !1, void o.setData({
                    upSteps: 3,
                    showProgress: !0,
                    uploadnum: 0,
                    progress: 0
                });
                if (h(wx.getStorageSync("userid"), e.mainIdStr, "upload"), o.getCsTimeData(), r.isUp = !1, 
                0 == o.data.isActivitySwitch.isDelete && 1 != o.data.ablumInfo.gOrigin && 11 != o.data.ablumInfo.gtype && o.getHeaderData(), 
                null == t.data.data) return d.length = 0, r.upState = 0, r.upObj = {}, void o.setData({
                    progress: 0,
                    upSteps: 2,
                    showProgress: !1,
                    isUpPicState: !0
                });
                if (t.data.data[0].picList.length > 0) {
                    var a = t.data.data;
                    o.isfirstUpload(a);
                }
                t.data.data[0].picList.length < d.length ? (o.setData({
                    sucImgNum: t.data.data[0].picList.length,
                    fitImgNum: d.length - t.data.data[0].picList.length,
                    upSteps: 4,
                    progress: 0
                }), d.length = 0, r.upState = 0, r.upObj = {}, o.timer4 = setTimeout(function() {
                    o.setData({
                        showProgress: !1,
                        isUpPicState: !0
                    });
                }, 8e3)) : (d.length = 0, r.upState = 0, r.upObj = {}, o.setData({
                    progress: 0,
                    upSteps: 2
                }), o.timer2 = setTimeout(function() {
                    o.setData({
                        showProgress: !1,
                        isUpPicState: !0
                    });
                }, 3e3));
            },
            fail: function() {
                d.length = 0, r.isUp = !1, o.setData({
                    upSteps: 3,
                    showProgress: !0,
                    uploadnum: 0,
                    progress: 0
                });
            }
        }); else {
            var s = a.splice(0, 1);
            o.uppic(t, s, a, e);
        }
    },
    uppic: function(t, e, a, o) {
        var i = this, s = e[0], n = s.lastIndexOf("."), l = new Date().getTime() + "" + parseInt(1e8 * Math.random() + 1e8) + s.substring(n);
        wx.uploadFile({
            url: "https://upload.qiniup.com",
            filePath: s,
            name: "file",
            formData: {
                key: l,
                token: t
            },
            success: function(e) {
                if (200 != e.statusCode) return d.length = 0, r.isUp = !1, void i.setData({
                    upSteps: 3,
                    showProgress: !0,
                    uploadnum: 0,
                    progress: 0
                });
                var s = JSON.parse(e.data);
                d.push(s.key), i.setData({
                    uploadnum: d.length,
                    progress: parseInt(d.length / i.data.totalnum * 100)
                }), i.uploadpicasync(t, o, a);
            },
            fail: function() {
                d.length = 0, r.isUp = !1, i.setData({
                    upSteps: 3,
                    showProgress: !0,
                    uploadnum: 0,
                    progress: 0
                });
            }
        });
    },
    getAlbumInformation: function(t) {
        var e = this, a = c.encryptByDESModeCBC(t.userid), o = c.encryptByDESModeCBC(e.groupid), s = this.port ? this.port : "", n = this.fromUserID ? this.fromUserID : 0, l = e.zj, u = e.comeuserid;
        i.wxreq({
            pathname: "YinianProject/newh5/ShowSmallAppAlbumInformationWithEncryption",
            data: {
                userid: a,
                groupid: o,
                port: s,
                fromUserID: n,
                zj: l,
                inviteuserid: u
            }
        }).then(function(a) {
            if (2 != a.code) if (1012 == a.code) wx.showModal({
                title: "提示",
                content: "相册已被解散",
                showCancel: !1,
                success: function(t) {
                    wx.reLaunch ? wx.reLaunch({
                        url: "../index/index"
                    }) : wx.navigateBack({
                        delta: 10
                    });
                }
            }); else if (1037 == a.code) wx.showModal({
                title: "提示",
                content: "相册已被封",
                showCancel: !1,
                success: function(t) {
                    wx.reLaunch ? wx.reLaunch({
                        url: "../index/index"
                    }) : wx.navigateBack({
                        delta: 10
                    });
                }
            }); else {
                if (0 != a.code) return void wx.showModal({
                    title: "提示",
                    content: "网络错误，请重试",
                    showCancel: !1,
                    success: function() {
                        wx.switchTab({
                            url: "/pages/index/index"
                        });
                    }
                });
                a.data[0].inviteusername && (console.log("yaoqingren", a.data[0].inviteusername, t.isnew), 
                u != t.userid && "0" != a.data[0].picNum && "yes" == t.isnew && e.setData({
                    showcomeuserModel: !0,
                    inventPerson: a.data[0].inviteusername
                }));
                var o = a.data[0].isPush ? a.data[0].isPush : 0;
                wx.setStorageSync("msgState", o);
                var s = a.data[0];
                s.joinStatus || wx.showToast({
                    title: "加入相册成功"
                }), wx.setStorage({
                    key: "createrid",
                    data: s.gcreator
                }), s.gcreator == t.userid && e.setData({
                    isgcreator: !0
                }), wx.setStorage({
                    key: "gAuthority",
                    data: s.gAuthority
                });
                var n = s.authorityList ? s.authorityList : [];
                wx.setStorage({
                    key: "authorityList",
                    data: n
                }), wx.setStorage({
                    key: "gnum",
                    data: s.gnum
                }), wx.setStorage({
                    key: "ganme",
                    data: s.gname
                }), e.gname = s.gname, r.globalData.gtype = s.gtype, r.globalData.gcreator = s.gcreator;
                var l = void 0;
                l = (10 == s.gtype || 11 == s.gtype) && t.userid == s.gcreator, e.setData({
                    ablumInfo: {
                        gcreator: s.gcreator,
                        canDelete: l,
                        gtype: s.gtype,
                        gnum: s.gnum,
                        picnum: s.picNum,
                        gname: s.gname,
                        list: s.memberList,
                        gpic: s.gpic,
                        gOrigin: s.gOrigin,
                        eventQRCodeCanPublish: s.eventQRCodeCanPublish,
                        dialogShow: s.dialogShow,
                        inBlackList: s.inBlackList,
                        advertisementsShow: s.advertisementsShow,
                        useablePoints: s.points,
                        upic: s.upic,
                        unickname: r.globalData.userInfo.nickName,
                        arTitle: s.arTitle,
                        arValue: s.arValue,
                        belowImgUrl: s.belowImgUrl,
                        canNotExit: s.canNotExit || 0,
                        groupNewType: s.groupNewType
                    }
                }), 1 == s.advertisementsShow && e.getBusiness(), 4 == s.groupNewType && (e.getLoversAuth(), 
                e.getLoversInfo(), i.getAuthPic("lovers_intro", 0, function(t) {
                    e.setData({
                        loversIntroPic: t.belowImgUrl
                    });
                })), e.getCsTimeData();
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
        });
    },
    getActivitySwitch: function() {
        var t = this;
        i.wxreq({
            pathname: "YinianProject/activitySpacial/selectActivityInfoById",
            data: {
                activitySpacialId: 1
            }
        }).then(function(e) {
            0 == e.code && (console.log(e), t.setData({
                isActivitySwitch: e.data[0]
            }));
        });
    },
    refresh: function() {
        var t = this.version ? this.version : "", e = this.port ? this.port : "", a = this.fromUserID ? this.fromUserID : 0, o = this.fromSpaceID ? this.fromSpaceID : 0, i = this.fromEventID ? this.fromEventID : 0, s = this;
        r.getUserInfo(function(t) {
            s.nickname = t.nickName, wx.request({
                url: l.getUrl("YinianProject/test/GetControllerValue"),
                data: {},
                success: function(e) {
                    var a;
                    if (0 == e.data.code && (a = e.data.data[0].setlikecnt, s.setlikecnt = a, e.data.data[0].canlogin)) {
                        var o = parseInt(5 * Math.random() + 5);
                        return s.setData({
                            waitingState: !1,
                            secondNum: o,
                            secondEnd: !0
                        }), void (s.timer2 = setInterval(function() {
                            var t = s.data.secondNum;
                            t <= 0 ? (clearInterval(s.timer2), s.timer2 = null, s.setData({
                                secondEnd: !1
                            })) : (t--, s.setData({
                                secondNum: t
                            }));
                        }, 1e3));
                    }
                    s.setData({
                        waitingState: !0
                    }), s.getAlbumInformation(t);
                }
            });
        }, t, e, a, o, i, "viewscoll");
    },
    onPageScroll: function(t) {
        var e = 750 / r.globalData.systemInfo.windowWidth;
        t.scrollTop > 372 / e ? this.data.showTop && this.setData({
            showTop: !1
        }) : this.data.showTop || this.setData({
            showTop: !0
        }), this.data.showComInput && this.setData({
            showComInput: !1
        });
    },
    showLoveIntro: function() {
        this.setData({
            showLoveIntroBox: !0
        });
        var t = this.groupid, e = this.data.userid, a = this.data.ablumInfo.gcreator;
        i.countLoversOperation("loversBanner", t, e, a);
    },
    closeLoversBox: function() {
        this.setData({
            showLoveIntroBox: !1
        });
    },
    closeLoversFirstUp: function() {
        this.setData({
            showLoveFirstBox: !1
        });
        var t = this.groupid, e = this.data.userid, a = this.data.ablumInfo.gcreator;
        i.countLoversOperation("closeInviteOther", t, e, a);
    },
    getLoversAuth: function() {
        var t = this;
        i.wxreq({
            pathname: "YinianProject/bannerDisplay/getLoversBannerInfo",
            data: {
                groupId: t.groupid
            }
        }).then(function(e) {
            console.log(e), 0 == e.code && t.setData({
                loversBannerInfo: e.data[0]
            });
        });
    },
    loversInviteBtn: function() {
        var t = this.groupid, e = this.data.userid, a = this.data.ablumInfo.gcreator;
        i.countLoversOperation("inviteOther", t, e, a);
    },
    getLoversInfo: function() {
        var t = this, e = t.groupid;
        i.wxreq({
            pathname: "YinianProject/groupConfig/getGroupConfig",
            data: {
                groupId: e,
                configName: "loverGroupContent"
            }
        }).then(function(e) {
            console.log(e), 0 == e.code && t.setData({
                loversInfo: e.data[0]
            });
        });
    },
    showcode: function() {
        var t = this;
        this.loadImgStateNo = !0, t.setData({
            fromlast: 1
        }), t.tepEid ? (wx.showToast({
            title: "正在获取二维码",
            icon: "loading",
            duration: 6e3,
            mask: !0
        }), wx.request({
            url: l.getUrl("YinianProject/yinian/CreateSmallAppPlan2QRCode"),
            data: {
                id: t.tepEid,
                type: "eventdetail2"
            },
            success: function(t) {
                var e = t.data.data[0].QRCodeURL;
                wx.hideToast(), wx.previewImage({
                    urls: [ e ]
                });
            }
        })) : wx.showModal({
            title: "提示",
            content: "获取动态数据不成功,请稍后再试",
            showCancel: !1
        });
    },
    toAnotherApp: function() {
        wx.navigateToMiniProgram({
            appId: "wx228859fda649194f",
            path: "pages/index/index",
            success: function(t) {}
        });
    },
    goHome: function() {
        var t = this;
        "object" == o(this.button) && this.button.push({
            name: "backToIndex"
        }), 1 == t.data.ablumInfo.gOrigin ? t.data.showintroduce ? t.fasttoknow() : (t.loadImgStateNo = !0, 
        wx.navigateTo({
            url: "/pages/makegroup/makegroup?lastPage=albumDetail"
        })) : wx.reLaunch ? wx.reLaunch({
            url: "/pages/index/index"
        }) : wx.switchTab({
            url: "/pages/index/index"
        }), r.isNewUser = !1, t.setData({
            globalNewUser: !1
        });
    },
    toLookPhoto: function(t) {
        this.loadImgStateNo = !0, this.setData({
            fromlast: 1
        });
        var e = t.currentTarget.dataset.userid, a = t.currentTarget.dataset.groupid, o = this.data.ablumInfo.groupNewType || 0;
        wx.navigateTo({
            url: "/pages/personalPage/personalPage?groupId=" + a + "&albumType=" + o + "&pageUserId=" + e + "&creator=" + this.data.ablumInfo.gcreator
        });
    },
    toSettingPage: function(t) {
        var e = t.currentTarget.dataset.albumtype, a = this.data.ablumInfo.gOrigin, o = this.data.ablumInfo.canNotExit, s = t.detail.formId;
        i.sendFormId(this.data.userid, s), console.log(e), this.loadImgStateNo = !0, wx.navigateTo({
            url: "/pages/setting/setting?clickFrom=grouptypescoll&gOrigin=" + a + "&canNotExit=" + o + "&albumType=" + e
        });
    },
    addmember: function(t) {
        var e = this, a = e.data.userid || 0;
        if (!e.data.inviteSwitchhot) {
            var s = "";
            s = "invite" == t.currentTarget.dataset.invite ? "notiflyInvite" : "albuminvite", 
            r.stat.stathotmall({
                userId: a,
                groupId: e.groupid,
                port: r.globalData.port,
                operation: s,
                registerTime: r.globalData.utime,
                inviteId: e.nc
            });
        }
        if (e.groupid) {
            if (this.loadImgStateNo = !0, this.setData({
                fromlast: 1
            }), "object" == o(this.button) && this.button.push({
                name: "invite"
            }), 4 == this.data.ablumInfo.groupNewType) {
                var n = this.groupid, l = this.data.userid, u = this.data.ablumInfo.gcreator;
                i.countLoversOperation("addmember", n, l, u);
            }
            var d = e.groupid || 0;
            i.countOperation("addmenber", d, a, "");
            var c = "";
            c = e.data.inviteSwitchhot ? "/pages/others/newsharepage/newsharepage" : "/pages/others/hot/invite/invite", 
            wx.navigateTo({
                url: c + "?lastPage=albumDetail&clickfrom=grouptypescoll&clickRecord=addmenber&groupid=" + e.groupid + "&gOrigin=" + this.data.ablumInfo.gOrigin + "&eventQRCodeCanPublish=" + this.data.ablumInfo.eventQRCodeCanPublish + "&gcreator=" + e.data.ablumInfo.gcreator + "&gname=" + e.data.ablumInfo.gname + "&groupNewType=" + e.data.ablumInfo.groupNewType
            }), this.isInvitepushId();
        } else wx.showModal({
            title: "提示",
            content: "获取该相册信息失败",
            showCancel: !1
        });
    },
    emptyListShare: function() {
        var t = this;
        if (t.groupid) {
            var e = t.groupid || 0, a = t.data.userid || 0;
            i.countOperation("emptylist_share", e, a, ""), t.loadImgStateNo = !0, t.setData({
                fromlast: 1
            }), "object" == o(t.button) && t.button.push({
                name: "invite"
            });
            var s = "";
            console.log(t.data.inviteSwitchhot), s = t.data.inviteSwitchhot ? "/pages/others/newsharepage/newsharepage" : "/pages/others/hot/invite/invite", 
            wx.navigateTo({
                url: s + "?lastPage=albumDetail&clickfrom=grouptypescoll&clickRecord=addmenber&groupid=" + t.groupid + "&gOrigin=" + this.data.ablumInfo.gOrigin + "&eventQRCodeCanPublish=" + this.data.ablumInfo.eventQRCodeCanPublish + "&gcreator=" + t.data.ablumInfo.gcreator + "&gname=" + t.data.ablumInfo.gname + "&groupNewType=" + t.data.ablumInfo.groupNewType
            });
        } else wx.showModal({
            title: "提示",
            content: "获取该相册信息失败",
            showCancel: !1
        });
    },
    loversToShare: function() {
        var t = this;
        t.groupid ? (this.loversInviteBtn(), this.loadImgStateNo = !0, this.setData({
            fromlast: 1
        }), wx.navigateTo({
            url: "/pages/others/newsharepage/newsharepage?lastPage=albumDetail&clickfrom=grouptypescoll&clickRecord=bannerinfo_share&groupid=" + t.groupid + "&gOrigin=" + this.data.ablumInfo.gOrigin + "&eventQRCodeCanPublish=" + this.data.ablumInfo.eventQRCodeCanPublish
        })) : wx.showModal({
            title: "提示",
            content: "获取该相册信息失败",
            showCancel: !1
        });
    },
    toShare: function(t) {
        var e = this;
        if (e.groupid) {
            if (e.loadImgStateNo = !0, e.setData({
                fromlast: 1
            }), console.log(t.currentTarget.dataset.info), "info" === t.currentTarget.dataset.info) {
                var a = e.groupid || 0, o = e.data.userid || 0;
                i.countOperation("bannerinfo_share", a, o, "");
            }
            var s = e.data.userid || 0;
            e.data.activitySwitchhot || r.stat.stathotmall({
                userId: s,
                groupId: e.groupid,
                port: r.globalData.port,
                operation: "clicknotify",
                registerTime: r.globalData.utime,
                inviteId: e.nc
            });
            var n = "";
            console.log(this.data.bannerInfo.bannerJump), n = this.data.bannerInfo.bannerJump ? "/pages/others/newsharepage/newsharepage" : "/pages/others/hot/invite/invite", 
            wx.navigateTo({
                url: n + "?lastPage=albumDetail&clickfrom=grouptypescoll&clickRecord=bannerinfo_share&groupid=" + e.groupid + "&gOrigin=" + this.data.ablumInfo.gOrigin + "&eventQRCodeCanPublish=" + this.data.ablumInfo.eventQRCodeCanPublish + "&gcreator=" + e.data.ablumInfo.gcreator + "&gname=" + e.data.ablumInfo.gname + "&groupNewType=" + e.data.ablumInfo.groupNewType
            });
        } else wx.showModal({
            title: "提示",
            content: "获取该相册信息失败",
            showCancel: !1
        });
    },
    toEditPhotos: function(t) {
        var e = this, a = t.currentTarget.dataset.index, o = t.currentTarget.dataset.photosource, i = this.data.eventlist[a].list[0].picList, s = 4 == this.data.eventlist[a].list[0].eMain ? "video" : "pic";
        if ("photosync" == o) {
            if (0 == this.data.ablumInfo.inBlackList) return void wx.showModal({
                title: "提示",
                content: "由于您先前操作已违反规定，已被限制操作，如有疑问可联系微信客服yiniankefu",
                showCancel: !1
            });
            var n = {
                operation: "ediSync",
                userId: e.data.userid,
                groupId: e.groupid
            };
            r.stat.request(n), this.loadImgStateNo = !0;
        } else {
            if ("download" != o) return;
            this.loadImgStateNo = !0, this.setData({
                fromlast: 1
            });
        }
        wx.setStorageSync("editPhotoArr", i), wx.navigateTo({
            url: "/pages/others/editphotos/editphotos?photosource=" + o + "&isPicOrVideo=" + s
        });
    },
    toEditPhotosDelete: function(t) {
        var e = this, a = t.detail.formId;
        i.sendFormId(this.data.userid, a);
        var o = t.currentTarget.dataset.photosource, s = this.data.eventlist[this.a].list[0].picList, n = this.data.eventlist[this.a].list[0].eMain, l = 4 == n ? "video" : "pic", u = this.tepEid;
        if ("photosync" == o) {
            if (0 == this.data.ablumInfo.inBlackList) return void wx.showModal({
                title: "提示",
                content: "由于您先前操作已违反规定，已被限制操作，如有疑问可联系微信客服yiniankefu",
                showCancel: !1
            });
            this.loadImgStateNo = !0;
            var d = {
                operation: "ediSync",
                userId: e.data.userid,
                groupId: e.groupid
            };
            r.stat.request(d);
        } else if ("download" == o) this.loadImgStateNo = !0, this.setData({
            fromlast: 1
        }); else {
            if ("delete" != o) return;
            if (1 == n || 2 == n) return void this.delete_event(u);
            this.loadImgStateNo = !0;
        }
        wx.setStorageSync("editPhotoArr", s), wx.navigateTo({
            url: "/pages/others/editphotos/editphotos?photosource=" + o + "&isPicOrVideo=" + l
        });
    },
    toChaneBgPic: function() {
        wx.getStorageSync("userid") ? wx.getStorageSync("userid") == wx.getStorageSync("createrid") ? (this.loadImgStateNo = !0, 
        wx.navigateTo({
            url: "/pages/others/changbgpic/changbgpic"
        })) : wx.showModal({
            title: "提示",
            content: "非相册管理员，无法修改背景图",
            showCancel: !1
        }) : wx.showModal({
            title: "错误",
            content: "获取用户授权信息失败！请稍后再试",
            showCancel: !1
        });
    },
    editpic: function(t) {
        var e = this;
        wx.getStorageSync("userid") ? wx.getStorageSync("userid") == wx.getStorageSync("createrid") ? (this.loadImgStateNo = !0, 
        this.setData({
            fromlast: 1
        }), wx.request({
            url: l.getUrl("YinianProject/yinian/GetUploadToken"),
            data: {},
            method: "GET",
            success: function(t) {
                var a = t.data.data[0].token;
                e.isSubmit = 2, wx.chooseImage({
                    count: 1,
                    sizeType: [ "compressed" ],
                    sourceType: [ "album", "camera" ],
                    success: function(t) {
                        wx.showToast({
                            title: "正在上传",
                            icon: "loading",
                            duration: 2e3
                        });
                        var o = t.tempFilePaths[0].split("//")[1];
                        wx.uploadFile({
                            url: "https://upload.qiniup.com",
                            filePath: t.tempFilePaths[0],
                            name: "file",
                            formData: {
                                key: t.tempFilePaths[0].split("//")[1],
                                token: a
                            },
                            success: function(t) {
                                var a = JSON.parse(t.data);
                                new Date();
                                wx.request({
                                    url: l.getUrl("YinianProject/yinian/ModifyGroupPic"),
                                    data: {
                                        url: a.key,
                                        userid: wx.getStorageSync("userid"),
                                        groupID: wx.getStorageSync("groupid")
                                    },
                                    success: function(t) {
                                        0 == t.data.code ? (e.data.ablumInfo.gpic = "http://7xlmtr.com1.z0.glb.clouddn.com/" + o, 
                                        e.setData({
                                            ablumInfo: e.data.ablumInfo
                                        }), wx.showToast({
                                            title: "修改成功",
                                            icon: "success",
                                            duration: 2e3,
                                            success: function() {
                                                setTimeout(function() {
                                                    wx.hideToast();
                                                }, 1500);
                                            }
                                        })) : wx.showToast({
                                            title: "设置失败"
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        })) : wx.showModal({
            title: "提示",
            content: "非相册管理员，无法修改背景图",
            showCancel: !1
        }) : wx.showModal({
            title: "错误",
            content: "获取用户授权信息失败！请稍后再试",
            showCancel: !1
        });
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
    recomment: function(t) {
        if (void 0 != t.target.dataset.commentindex) {
            var e = this, o = t.target.dataset.commentindex, s = t.currentTarget.dataset.dataindex.split(","), n = a(s, 2), l = n[0], u = n[1], d = this.data.eventlist[l].list[u].comments[o], c = d.commentUser.userid, g = d.commentUser.unickname, p = t.currentTarget.dataset.eid;
            c == r.globalData.userInfo.userid ? wx.showModal({
                title: "提示",
                content: "删除此条评论？",
                success: function(t) {
                    t.confirm && i.wxreq({
                        pathname: "YinianProject/yinian/DeleteComment",
                        data: {
                            commentID: d.cid
                        }
                    }).then(function(t) {
                        "success" == t.msg && (e.data.eventlist.forEach(function(t, e) {
                            t.list[0].eid == p && (t.list[0].comments.splice(o, 1), t.list[0].commentCnt--);
                        }), e.setData({
                            eventlist: e.data.eventlist
                        }));
                    });
                }
            }) : (this.commentEid = p, this.commentedUserid = c, this.commentedname = g, this.setData({
                showComInput: !0,
                inputfocus: !0,
                placehold: "@" + g + ":",
                contentCurrent: !1
            }));
        }
    },
    sendcomment: function(t) {
        var e = t.detail.formId, a = t.detail.value.content, o = this.data.userid, s = this.commentEid, l = this.commentedUserid, u = this.commentedname;
        if (0 != a.length) if (n.testStr(a)) wx.showModal({
            title: "包含敏感词",
            content: "请勿输入敏感词汇",
            showCancel: !1
        }); else {
            var d = this, c = i.formatTimeWithSecond(new Date()), g = {
                cid: -1,
                commentedUser: {
                    userid: l,
                    unickname: u
                },
                commentUser: {
                    userid: o,
                    unickname: r.globalData.userInfo.nickName,
                    upic: r.globalData.userInfo.avatarUrl
                },
                ccontent: a,
                ctime: c
            }, p = Array.from(d.data.eventlist);
            d.data.eventlist.forEach(function(t, e) {
                t.list[0].eid == s && (p[e].list[0].comments.unshift(g), p[e].list[0].commentCnt = parseInt(p[e].list[0].commentCnt) + 1);
            }), d.setData({
                showComInput: !1,
                eventlist: p,
                value: "",
                contentCurrent: !1,
                placehold: "说点什么..."
            }), d.commentedUserid = 10, d.commentedname = "系统消息", wx.showToast({
                title: "发表成功",
                icon: "success",
                duration: 1e3
            }), d.isCommentpushId(), h(o, wx.getStorageSync("groupid"), "comment"), i.wxreq({
                pathname: "YinianProject/yinian/SendComment1",
                data: {
                    commentUserId: o,
                    commentedUserId: l,
                    eventId: s,
                    content: a,
                    formID: e
                }
            }).then(function(t) {
                0 == t.code && (d.data.eventlist.forEach(function(e) {
                    e.list[0].eid == s && e.list[0].comments.forEach(function(e) {
                        e.ctime === c && (e.cid = t.data[0].cid);
                    });
                }), d.setData({
                    eventlist: d.data.eventlist
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
    checkchange: function(t) {
        var e = t.detail.value.trim().length > 0;
        this.setData({
            contentCurrent: e
        });
    },
    maketop: function(t) {
        var e = this.data.eventlist[this.a].list[0].eid;
        this.state = this.data.eventlist[this.a].list[0].elevel;
        var a = this, o = 1 == this.state ? "cancel" : "stick", s = 1 == this.state ? "取消置顶" : "置顶";
        wx.showModal({
            title: "提示",
            content: "是否" + s + "此动态",
            success: function(t) {
                t.confirm && i.wxreq({
                    pathname: "YinianProject/yinian/ModifyEventLevel",
                    data: {
                        userid: wx.getStorageSync("userid"),
                        groupid: wx.getStorageSync("groupid"),
                        eid: e,
                        type: o
                    }
                }).then(function(t) {
                    if ("success" == t.msg) {
                        wx.showToast({
                            title: s + "成功"
                        });
                        a.data.eventlist[a.a].list[0].elevel = 1 == a.data.eventlist[a.a].list[0].elevel ? "0" : "1", 
                        a.state = 1 == a.state ? "0" : "1", a.getCsTimeData();
                    }
                });
            }
        });
    },
    delete_event: function(e) {
        var a = this;
        if (e) {
            var o = e || this.data.eventlist[a.a].list[0].eid;
            wx.showModal({
                title: "删除动态",
                content: "确定删除此条动态吗？",
                confirmColor: "#353535",
                success: function(e) {
                    e.confirm && i.wxreq({
                        pathname: "YinianProject/yinian/DeleteEvent",
                        data: t({
                            userid: wx.getStorageSync("userid")
                        }, "eventId", o)
                    }).then(function(t) {
                        if ("success" == t.msg) {
                            wx.showToast({
                                title: "删除成功",
                                icon: "success",
                                duration: 2e3
                            });
                            var e = 0, i = !1;
                            a.data.eventlist.forEach(function(t, a) {
                                if (t.list[0].eid == o) return e = a, void (i = !0);
                            }), i && a.data.eventlist.splice(e, 1), a.setData({
                                eventlist: a.data.eventlist,
                                showFunModel: !1
                            });
                        }
                    });
                }
            });
        }
    },
    closeintroduce: function() {
        this.setData({
            showintroduce: !1
        });
    },
    uploadpic: function(t) {
        var e = this;
        if (wx.getStorageSync("userid")) {
            clearTimeout(e.timer), this.setData({
                fromlast: 1
            }), this.loadImgStateNo = !0;
            var a;
            a = "pai" == (t = t || event).currentTarget.dataset.pic ? "camera" : "album", this.isSubmit = 2, 
            wx.chooseImage({
                count: 9,
                sizeType: [ "original" ],
                sourceType: [ a ],
                success: function(t) {
                    var a = t.tempFilePaths;
                    wx.removeStorageSync("uploadchoosedpic"), wx.setStorage({
                        key: "uploadchoosedpic",
                        data: a,
                        success: function() {
                            e.setData({
                                addModalOn: !1,
                                fromlast: 1
                            });
                            var t = e.data.ablumInfo.groupNewType, a = e.groupid;
                            e.loadImgStateNo = !0, e.closeModal(), wx.navigateTo({
                                url: "/pages/publish/pages/image/image?lastPage=albumDetail&groupId=" + a + "&albumType=" + t
                            });
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
    },
    uploadvideo: function(t) {
        var e = this;
        if (wx.getStorageSync("userid")) {
            this.setData({
                fromlast: 1
            }), this.loadImgStateNo = !0;
            var a;
            a = "pai" == (t = t || event).currentTarget.dataset.video ? "camera" : "album", 
            this.isSubmit = 2, wx.chooseVideo({
                sourceType: [ a ],
                maxDuration: 60,
                camera: "back",
                success: function(t) {
                    wx.setStorage({
                        key: "uploadchoosedvideo",
                        data: t,
                        success: function() {
                            e.setData({
                                addModalOn: !1
                            });
                            var t = e.data.ablumInfo.groupNewType, a = e.groupid;
                            e.loadImgStateNo = !0, e.closeModal(), wx.navigateTo({
                                url: "/pages/publish/pages/video/video?lastPage=albumDetail&groupId=" + a + "&albumType=" + t
                            });
                        },
                        fail: function() {
                            wx.showToast({
                                title: "保存视频临时数据失败"
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
    },
    uploadText: function() {
        var t = this, e = t.data.ablumInfo.groupNewType, a = t.groupid;
        t.setData({
            addModalOn: !1
        }), t.loadImgStateNo = !0, t.closeModal(), wx.navigateTo({
            url: "/pages/publish/pages/text/text?lastPage=albumDetail&groupId=" + a + "&albumType=" + e
        });
    },
    toUploadAudio: function() {
        var t = this, e = t.data.ablumInfo.groupNewType, a = t.groupid;
        t.loadImgStateNo = !0, t.closeModal(), t.setData({
            addModalOn: !1,
            fromlast: 1
        }), wx.navigateTo({
            url: "/pages/publish/pages/audio/audio?lastPage=albumDetail&groupId=" + a + "&albumType=" + e
        });
    },
    getBusiness: function() {
        var t = this;
        wx.request({
            url: l.getUrl("YinianProject/adv/getTimeAxisAdv"),
            data: {
                groupid: t.groupid
            },
            success: function(e) {
                0 == e.data.code && t.setData({
                    businessList: e.data.data
                });
            }
        });
    },
    getBannerInfo: function() {
        var t = this;
        i.wxreq({
            pathname: "YinianProject/bannerDisplay/getBannerInfo",
            data: {
                groupId: t.groupid
            }
        }).then(function(e) {
            0 == e.code && t.setData({
                bannerInfo: e.data[0]
            });
        });
    },
    getCsTimeData: function() {
        this.setlikecnt;
        var t = this, e = this.data.ablumInfo.groupNewType || "";
        t.isloading = !1, wx.request({
            url: l.getUrl("YinianProject/event/ShowTimeAxis"),
            data: {
                userid: wx.getStorageSync("userid"),
                groupid: t.groupid,
                type: "initialize",
                source: "ynxc",
                eid: 0,
                albumType: e
            },
            success: function(e) {
                if (console.log(e), 0 == e.data.code) {
                    var a = e.data.data, o = wx.getStorageSync("userid");
                    t.templatearr = [], a.forEach(function(e) {
                        Object.assign(e, {
                            time: i.timeRest(e.euploadtime),
                            showlibox: !1,
                            isAudioPlay: !1
                        }), t.templatearr.push({
                            month: e.euploadtime.substring(0, 7).replace("-", "."),
                            list: [ e ]
                        });
                    }), t.setData({
                        eventlist: t.templatearr,
                        showFunModel: !1,
                        loadImgState: !0,
                        showLoadingImg: !1,
                        loadingImgOrText: !0
                    }), t.isShowLoverModal(o, t.groupid), "3687301" == t.groupid && t.data.aladingTwo && (t.setData({
                        alading: !0
                    }), setTimeout(function() {
                        t.setData({
                            alading: !1,
                            aladingTwo: !1
                        });
                    }, 2500));
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
            }
        });
    },
    enterpreview: function(t) {
        var e = t.currentTarget.dataset.parentindex, a = t.currentTarget.dataset.childindex, o = t.currentTarget.dataset.sel, i = this.data.eventlist, s = this;
        return console.log(i[e].list[a].picList), wx.setStorageSync("lookImgs", i[e].list[a].picList), 
        clearTimeout(s.timer), s.setData({
            fromlast: 1
        }), void wx.navigateTo({
            url: "/pages/others/lookmidpic/lookmidpic?current=" + o
        });
    },
    showlike: function(t) {
        if (wx.getStorageSync("userid")) {
            var e = this, a = t.currentTarget.dataset.parentindex, o = t.currentTarget.dataset.childindex, i = t.currentTarget.dataset.eid;
            this.a = a, this.b = o, this.tepEid = i;
            this.data.eventlist[a].list[0];
            e.setData({
                showFunModel: !0,
                selNumA: a,
                selNumB: o
            });
        } else wx.showToast({
            title: "获取用户信息失败"
        });
    },
    toDownLoad: function(t) {
        this.loadImgStateNo = !0, this.setData({
            fromlast: 1
        });
        var e = this.data.eventlist[this.a].list[0].picList;
        wx.setStorageSync("downPic", e);
        var a = 4 == this.data.eventlist[this.a].list[0].eMain ? "video" : "pic";
        wx.navigateTo({
            url: "/pages/others/download/download?downloadPicOrVideo=" + a
        });
    },
    tosharepage: function(t) {
        var e = this, a = {
            operation: "viewscoll_eid",
            groupId: e.groupid || 0,
            userId: e.data.userid || 0
        };
        r.stat.request(a), this.loadImgStateNo = !0, this.setData({
            fromlast: 1
        });
        var i = t.currentTarget.dataset.index, s = this.data.eventlist[i].list[0].picList, n = this.data.eventlist[i].list[0].eMain, l = this.data.eventlist[i].list[0].eid;
        r.sharePageUserPic = 0, wx.setStorageSync("sharePagePic", s), "object" == o(this.button) && this.button.push({
            name: "eventShare"
        }), wx.navigateTo({
            url: "/pages/others/sharepage/sharepage?lastPage=albumDetail&clickfrom=eid&clickRecord=viewscoll_eid&eid=" + l + "&eMain=" + n + "&groupid=" + this.groupid + "&gOrigin=" + this.data.ablumInfo.gOrigin + "&eventQRCodeCanPublish=" + this.data.ablumInfo.eventQRCodeCanPublish + "&gcreator=" + e.data.ablumInfo.gcreator + "&gname=" + e.data.ablumInfo.gname + "&groupNewType=" + this.data.ablumInfo.groupNewType
        });
    },
    like: function(t) {
        if (wx.getStorageSync("userid")) {
            var e = t.detail.formId, a = t.currentTarget.dataset.likecatagry, o = t.currentTarget.dataset.parentindex, i = t.currentTarget.dataset.childindex, s = this.data.eventlist[o].list[i].eid, n = this;
            a && 1 != n.data.eventlist[o].list[i].likeUser && (n.isLikepushId(), h(wx.getStorageSync("userid"), n.groupid, "like"), 
            n.data.eventlist[o].list[i].likeUser = 1, n.data.eventlist[o].list[i].likeCnt = parseInt(n.data.eventlist[o].list[i].likeCnt) + 1, 
            n.setData({
                eventlist: n.data.eventlist
            }), wx.showToast({
                title: "点赞成功",
                icon: "success",
                duration: 1e3
            }), wx.request({
                url: l.getUrl("YinianProject/yinian/AttachOrRemoveExpressionByLkNew"),
                data: {
                    type: a,
                    userid: r.globalData.userInfo.userid,
                    eid: s,
                    formID: e
                },
                success: function(t) {
                    t = t.data;
                }
            }));
        } else wx.showToast({
            title: "获取用户信息失败"
        });
    },
    likeState: function() {},
    onPullDownRefresh: function() {
        this.getCsTimeData(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {
        wx.getStorageSync("userid") && this.data.eventlist && 0 != this.data.eventlist.length && this.templatearr && 0 != this.templatearr.length && this.loadinged();
    },
    loadinged: function() {
        this.setlikecnt;
        var t = this, e = this.data.ablumInfo.groupNewType || "";
        this.isloading || (this.isloading = !0, this.setData({
            showLoadingImg: !0,
            loadingImgOrText: !0
        }), wx.request({
            url: l.getUrl("YinianProject/event/ShowTimeAxis"),
            data: {
                groupid: t.groupid,
                type: "loading",
                source: "ynxc",
                albumType: e,
                eid: t.templatearr[t.templatearr.length - 1].list[0].eid,
                userid: wx.getStorageSync("userid")
            },
            success: function(e) {
                console.log(e), 0 == e.data.code ? 0 == (e = e.data).data.length ? t.setData({
                    showLoadingImg: !0,
                    loadingImgOrText: !1
                }) : (e.data.forEach(function(e) {
                    t.retState || (Object.assign(e, {
                        time: i.timeRest(e.euploadtime),
                        showlibox: !1,
                        isAudioPlay: !1
                    }), t.templatearr.push({
                        month: e.euploadtime.substring(0, 7).replace("-", "."),
                        list: [ e ]
                    }));
                }), t.isloading = !1, t.setData({
                    eventlist: t.templatearr,
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
    toMakeGroup: function() {
        "object" == o(this.button) && this.button.push({
            name: "createAlbum"
        }), this.loadImgStateNo = !0, this.closeIntroCreate(), wx.navigateTo({
            url: "/pages/makegroup/makegroup?lastPage=albumDetail"
        });
    },
    showPvModel: function() {
        var t = this;
        if ("object" == o(this.button) && this.button.push({
            name: "upload"
        }), 0 != t.data.ablumInfo.inBlackList) if (r.isUp) wx.showToast({
            title: "正在上传中喔~"
        }); else if (2 == t.data.ablumInfo.gOrigin && t.closeIntroUpload(), 1 != wx.getStorageSync("gAuthority") || wx.getStorageSync("userid") == wx.getStorageSync("createrid")) {
            if (2 == wx.getStorageSync("gAuthority")) {
                var e = wx.getStorageSync("authorityList");
                if (0 == e.length) return;
                for (var a = 0; a < e.length; a++) e[a].userid == wx.getStorageSync("userid") && (t.quanxian = !0);
                if (!t.quanxian) return void wx.showModal({
                    title: "提示",
                    content: "没有上传照片的权限",
                    showCancel: !1
                });
            }
            if (t.setData({
                pvShowModel: !0
            }), 4 == this.data.ablumInfo.groupNewType) if ("cancel" === t.isconfirm) {
                var s = this.groupid, n = this.data.userid, l = this.data.ablumInfo.gcreator;
                i.countLoversOperation("cancelLoversUpBtn", s, n, l);
            } else {
                var u = this.groupid, d = this.data.userid, c = this.data.ablumInfo.gcreator;
                i.countLoversOperation("loversUpBtn", u, d, c);
            }
        } else wx.showModal({
            title: "提示",
            content: "只能创建者才能上传"
        }); else wx.showModal({
            title: "提示",
            content: "由于您先前操作已违反规定，已被限制操作，如有疑问可联系微信客服yiniankefu",
            showCancel: !1
        });
    },
    closepvModel: function() {
        this.setData({
            pvShowModel: !1
        });
    },
    closeFunModel: function() {
        this.setData({
            showFunModel: !1
        });
    },
    openAudioModel: function() {
        this.setData({
            showAudioModelBox: !0
        });
    },
    closeAudioBox: function() {
        this.setData({
            showAudioModelBox: !1
        });
    },
    preReset: function() {
        this.setData({
            fromlast: 1
        });
    },
    longPressDelete: function(t) {
        var e = this, a = t.currentTarget.dataset.longcid, o = t.currentTarget.dataset.longeid, s = t.currentTarget.dataset.longindex;
        wx.showModal({
            title: "提示",
            content: "是否删除该条评论",
            success: function(t) {
                t.confirm && i.wxreq({
                    pathname: "YinianProject/yinian/DeleteComment",
                    data: {
                        commentID: a
                    }
                }).then(function(t) {
                    "success" == t.msg && (e.data.eventlist.forEach(function(t, e) {
                        t.list[0].eid == o && (t.list[0].comments.splice(s, 1), t.list[0].commentCnt--);
                    }), e.setData({
                        eventlist: e.data.eventlist
                    }));
                });
            }
        });
    },
    activityRules: function() {
        this.data.ablumInfo && this.data.ablumInfo.arValue && this.data.ablumInfo.arValue.length > 0 && this.setData({
            showActivityRules: !1
        });
    },
    closeActivityRules: function() {
        this.setData({
            showActivityRules: !0
        });
    },
    returnhome: function() {
        "object" == o(this.button) && this.button.push({
            name: "backToIndex"
        }), wx.reLaunch ? wx.reLaunch({
            url: "/pages/index/index"
        }) : wx.switchTab({
            url: "/pages/index/index"
        });
    },
    openModel: function() {
        this.setData({
            showModelHidden: !0
        });
    },
    closeModel: function() {
        this.setData({
            showModelHidden: !1
        });
    },
    closeIntroUpload: function() {
        var t = "showLoad" + this.groupid;
        wx.setStorageSync(t, 1), this.setData({
            showFooterIntro1: !1
        });
    },
    closeIntroCreate: function() {
        var t = "showCreat" + this.groupid;
        wx.setStorageSync(t, 1), this.setData({
            showFooterIntro2: !1
        });
    },
    toBusinessGroup: function(t) {
        var e = this, a = t.detail.formId;
        if (i.sendFormId(e.data.userid, a), "object" == o(this.button) && this.button.push({
            name: "banner"
        }), 0 == e.data.businessList[0].joinGroupOrList) wx.navigateTo({
            url: "/pages/others/businessgroup/businessgroup?lastPage=albumDetail&listid=" + e.data.businessList[0].listid
        }); else if (1 == e.data.businessList[0].joinGroupOrList) {
            this.loadImgStateNo = !0;
            var s = e.data.businessList[0].groupNewType;
            console.log(s), p({
                groupNewType: s,
                data: {
                    lastPage: "albumDetail",
                    from: "grouplist",
                    groupid: e.data.businessList[0].joinGroupid
                },
                navigator: "navigate"
            });
        } else if (2 == e.data.businessList[0].joinGroupOrList) {
            if (11 == e.data.ablumInfo.groupNewType) return;
            this.loadImgStateNo = !0, this.setData({
                fromlast: 1
            });
            var n = e.groupid || 0, r = e.data.userid || 0;
            i.countOperation("bannerpic_share", n, r, ""), wx.navigateTo({
                url: "/pages/others/newsharepage/newsharepage?lastPage=albumDetail&clickfrom=grouptypescoll&clickRecord=bannerpic_share&groupid=" + e.groupid + "&gOrigin=" + e.data.ablumInfo.gOrigin
            });
        } else if (3 == e.data.businessList[0].joinGroupOrList) {
            var l = e.data.businessList[0].joinGroupid;
            if (!l) return;
            this.loadImgStateNo = !0, wx.navigateTo({
                url: "/" + l
            });
        }
    },
    seeBigVideo: function(t) {
        var e = t.currentTarget.dataset.url;
        wx.setStorageSync("videourl", e), wx.navigateTo({
            url: "/pages/viewscoll/bigvideo/bigvideo",
            success: function() {
                this.loadImgStateNo = !0, this.setData({
                    fromlast: 1
                });
            }.bind(this)
        });
    },
    loadmore: function(t) {
        this.setData({
            fromlast: 1
        }), wx.navigateTo({
            url: "/pages/eventdetail/eventdetail?lastPage=albumDetail&dateindex=" + t.currentTarget.dataset.sela + "&eid=" + t.currentTarget.dataset.eid + "&rowindex=" + t.currentTarget.dataset.selb + "&efrom=grouptypescoll&groupNewType=" + this.data.ablumInfo.groupNewType
        });
    },
    closeDispose: function() {
        console.log("closeDispose");
    },
    sureDispose: function() {
        console.log("sureDispose");
    },
    edit: function() {
        var t = this;
        wx.getStorageSync("createrid") == wx.getStorageSync("userid") ? t.setData({
            Mengcen: !0
        }) : wx.showModal({
            title: "提示",
            content: "非相册管理员，无法修改相册名",
            showCancel: !1
        });
    },
    setcolor: function(t) {
        var e = this, a = t.detail.value.length;
        e.setData({
            textNum: a
        }), t.detail.value.trim().length > 0 ? e.setData({
            buttonactive: !0
        }) : e.setData({
            buttonactive: !1
        });
    },
    Mengcen_cancel: function() {
        this.setData({
            textNum: 0,
            Mengcen: !1
        });
    },
    submitfun: function(t) {
        var e = this;
        if (wx.getStorageSync("userid")) {
            var a = t.detail.value.groupname;
            if (a.trim().length > 0) {
                if (n.testStr(a)) return void wx.showModal({
                    title: "包含敏感词",
                    content: "请勿使用包含敏感词汇的相册名称",
                    showCancel: !1
                });
                wx.request({
                    url: l.getUrl("YinianProject/yinian/ModifyGroupName"),
                    data: {
                        groupid: wx.getStorageSync("groupid"),
                        groupName: a,
                        userid: wx.getStorageSync("userid")
                    },
                    success: function(t) {
                        0 == t.data.code && (wx.showToast({
                            title: "修改成功",
                            icon: "success",
                            duration: 2e3
                        }), wx.setStorageSync("gname", a), e.data.ablumInfo.gname = a, wx.setStorageSync("ganme", a), 
                        e.setData({
                            textNum: 0,
                            Mengcen: !1,
                            ablumInfo: e.data.ablumInfo
                        }));
                    }
                });
            } else wx.showModal({
                title: "提示",
                content: "请输入正确的相册名称",
                showCancel: !1
            });
        } else wx.showModal({
            title: "错误",
            content: "获取用户授权信息失败！请稍后再试",
            showCancel: !1
        });
    },
    fasttoknow: function() {
        var t = this;
        t.setData({
            showDisposeModel: !0,
            usernumber: s.usernumber
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
    }
}, t(e, "closeModel", function() {
    this.setData({
        showDisposeModel: !1,
        classArr: [ "pic1", "pic2", "pic3" ]
    });
}), t(e, "changestart", function(t) {
    w = t.touches[0].pageX, v = t.touches[0].pageY;
}), t(e, "changemove", function(t) {}), t(e, "changend", function(t) {
    var e = this;
    if (b = t.changedTouches[0].pageX, I = t.changedTouches[0].pageY, w - b > 30) {
        if ("pic2" == e.data.classArr[0]) return;
        e.data.classArr.unshift(e.data.classArr[e.data.classArr.length - 1]), e.data.classArr.pop(e.data.classArr[e.data.classArr.length - 1]), 
        e.setData({
            classArr: e.data.classArr
        });
    } else if (b - w > 30) {
        if ("pic1" == e.data.classArr[0]) return;
        e.data.classArr.push(e.data.classArr[0]), e.data.classArr.shift(e.data.classArr[0]), 
        e.setData({
            classArr: e.data.classArr
        });
    }
}), t(e, "addgroup", function() {
    wx.getStorageSync("userid") ? ("object" == o(this.button) && this.button.push({
        name: "createAlbum"
    }), this.loadImgStateNo = !0, wx.navigateTo({
        url: "../makegroup/makegroup?lastPage=albumDetail"
    })) : wx.showModal({
        title: "错误",
        content: "获取用户授权信息失败！创建相册功能不可用！",
        showCancel: !1
    });
}), t(e, "isfirstUpload", function(t) {
    return;
}), t(e, "noLongerPrompt", function() {
    var t = this;
    wx.setStorageSync("noPrompt", 1), t.setData({
        showfirstuploadModel: !1
    });
    var e = {
        userId: wx.getStorageSync("userid") || 0,
        operation: "viewscollToStoriesNoPrompt",
        userLastLoginTime: r.enterTime
    };
    r.stat.request(e);
}), t(e, "getHeaderData", function() {
    var t = this, e = t.data.userid;
    i.wxreq({
        pathname: "YinianProject/activitySpacial/selectHasUploadNum",
        data: {
            activitySpacialId: 1,
            userId: e
        }
    }).then(function(a) {
        if (console.log(a), 0 == a.code) {
            var o = a.data[0].hasUploadPercent.split("/")[1];
            if (a.data[0].hasPicNum = parseInt(o), 0 == a.data[0].isReceive) {
                t.setData({
                    contentText: a.data[0],
                    showMayDayActivity: !0
                });
                var i = {
                    operation: "twice_page_popover",
                    userId: e,
                    remark: t.mayefrom,
                    groupId: t.groupid || 0
                };
                r.stat.request(i);
            }
        }
    });
}), t(e, "closeMayDayModal", function() {
    this.setData({
        showMayDayActivity: !1
    });
}), t(e, "goOnUpload", function() {
    var t = this;
    this.setData({
        showMayDayActivity: !1
    }), this.openAddEventModal();
    var e = {
        operation: "twice_page_reupload",
        userId: t.data.userid,
        remark: t.mayefrom,
        groupId: t.groupid || 0
    };
    r.stat.request(e);
}), t(e, "toGetPrize", function() {
    var t = this, e = this.data.userid;
    wx.redirectTo({
        url: "/pages/mayDayActivity/index/index"
    });
    var a = {
        operation: "twice_page_toreward",
        userId: e,
        remark: t.mayefrom,
        groupId: t.groupid || 0
    };
    r.stat.request(a);
}), t(e, "useablePointsclick", function(t) {
    console.log("跳转到 个人中心积分界面"), this.loadImgStateNo = !0, this.setData({
        fromlast: 1
    });
    var e = t.detail.formId;
    i.sendFormId(this.data.userid, e);
    var a = this.data.groupid, o = this.data.userid, s = this.data.ablumInfo.groupNewType || 0, n = this.data.ablumInfo.gcreator;
    wx.navigateTo({
        url: "/pages/personalPage/personalPage?groupId=" + a + "&pageUserId=" + o + "&creator=" + n + "&albumType=" + s
    });
}), t(e, "closeDispose", function() {
    this.setData({
        showcomeuserModel: !1
    });
}), t(e, "hurryupload", function() {
    var t = this;
    t.closeDispose(), t.showPvModel();
}), t(e, "closefirstuploadDispose", function() {
    var t = this, e = t.data.userid || 0;
    0 == t.data.activitySwitchhot && r.stat.stathotmall({
        userId: e,
        groupId: t.data.groupId,
        port: r.globalData.port,
        operation: "quitupload",
        registerTime: r.globalData.utime,
        inviteId: t.nc
    }), t.setData({
        showfirstuploadModel: !1
    });
    var a = {
        userId: wx.getStorageSync("userid") || 0,
        operation: "viewscollToStoriesAgainClose",
        userLastLoginTime: r.enterTime
    };
    "isFirst" == t.data.isFirstUpload && (a.operation = "viewscollToStoriesFirstClose"), 
    r.stat.request(a);
}), t(e, "firstuploadshare", function() {
    var t = this, e = t.groupid || 0, a = t.data.userid || 0;
    i.countOperation("firstup_share", e, a, ""), t.setData({
        showfirstuploadModel: !1
    });
    var o = t.data.thedata;
    console.log(o);
    var s = o[0].picList, n = o[0].eMain, r = o[0].eid;
    wx.setStorageSync("sharePagePic", s), wx.navigateTo({
        url: "/pages/others/sharepage/sharepage?lastPage=albumDetail&clickfrom=eid&clickRecord=firstup_share&eid=" + r + "&eMain=" + n + "&groupid=" + this.groupid + "&gOrigin=" + this.data.ablumInfo.gOrigin + "&eventQRCodeCanPublish=" + this.data.ablumInfo.eventQRCodeCanPublish
    });
}), t(e, "toStories", function(t) {
    var e = t.currentTarget.dataset.flag;
    console.log("flag", e);
    var a = {
        userId: wx.getStorageSync("userid") || 0,
        operation: "viewscollToStoriesAgain",
        userLastLoginTime: r.enterTime
    };
    "first" == e && (a.operation = "viewscollToStoriesFirst"), "again" == e && (a.operation = "viewscollToStoriesAgain"), 
    "share" == e && (a.operation = "viewscollToStoriesShare"), r.stat.request(a);
    var o = void 0;
    "first" != e && "again" != e || (o = this.data.thedata[0].eid), "share" == e && (o = t.currentTarget.dataset.eid);
    var i = this.groupid;
    wx.navigateTo({
        url: "/package/share/pages/shareindex/shareindex?eId=" + o + "&groupId=" + i
    });
}), t(e, "audioPlay", function(t) {
    var e = t.currentTarget.dataset.audiourl;
    e && (console.log(e), g.src = e, g.play(), this.openThisAudio(e));
}), t(e, "audioPause", function() {
    g.pause(), this.closeAllAudio();
}), t(e, "openThisAudio", function(t) {
    this.data.eventlist.forEach(function(e) {
        e.list[0].eaudio === t ? e.list[0].isAudioPlay = !0 : e.list[0].isAudioPlay = !1;
    }), this.setData({
        eventlist: this.data.eventlist
    });
}), t(e, "closeAllAudio", function() {
    this.data.eventlist.forEach(function(t) {
        t.list[0].isAudioPlay = !1;
    }), this.setData({
        eventlist: this.data.eventlist
    });
}), t(e, "openAddModal", function() {
    var t = this;
    t.setData({
        addModalOn: !0
    }), t.setData({
        addModalAnimation: !0
    });
}), t(e, "closeAddModal", function() {
    var t = this;
    t.setData({
        addModalOn: !1
    }), t.setData({
        addModalAnimation: !1
    });
}), t(e, "openAddEventModal", function() {
    var t = this;
    t.permission() && (t.openAddModal(), t.setData({
        addEventModalOn: !0
    }), t.setData({
        addEventModalAnimation: !0
    }), t.isUploadpushId());
}), t(e, "closeAddEventModal", function() {
    var t = this;
    t.setData({
        addEventModalOn: !1
    }), t.setData({
        addEventModalAnimation: !1
    }), t.closeAddModal();
}), t(e, "openAddPhotoModal", function(t) {
    var e = this;
    e.setData({
        addEventModalOn: !1
    }), e.setData({
        addEventModalAnimation: !1
    });
    var a = "";
    a = "photo" === t.currentTarget.dataset.type ? "照片" : "视频", e.setData({
        addPhotoModalOn: !0,
        modalTitle: a
    }), e.setData({
        addPhotoModalAnimation: !0
    });
}), t(e, "closeAddPhotoModal", function() {
    var t = this;
    t.setData({
        addPhotoModalOn: !1
    }), t.setData({
        addPhotoModalAnimation: !1
    }), t.closeAddModal();
}), t(e, "toPoseCamera", function() {
    var t = this;
    t.permission() && (t.setData({
        fromlast: 1
    }), wx.navigateTo({
        url: "/pages/poseCamera/pages/camera/camera?groupId=" + this.groupid,
        success: function(t) {
            console.log("跳转成功", t);
        },
        fail: function(t) {
            console.log("跳转失败", t);
        }
    }));
}), t(e, "preventTouchMove", function() {}), t(e, "closeModal", function() {
    var t = this;
    t.closeAddPhotoModal(), t.closeAddEventModal();
}), t(e, "permission", function() {
    var t = this, e = !0;
    if (0 == t.data.ablumInfo.inBlackList) return wx.showModal({
        title: "提示",
        content: "由于您先前操作已违反规定，已被限制操作，如有疑问可联系微信客服yiniankefu",
        showCancel: !1
    }), void (e = !1);
    if (1 == wx.getStorageSync("gAuthority") && wx.getStorageSync("userid") != wx.getStorageSync("createrid")) return wx.showModal({
        title: "提示",
        content: "只能创建者才能上传"
    }), void (e = !1);
    if (2 == wx.getStorageSync("gAuthority")) {
        var a = wx.getStorageSync("authorityList");
        if (0 == a.length) return;
        for (var o = 0; o < a.length; o++) a[o].userid == wx.getStorageSync("userid") && (t.quanxian = !0);
        if (!t.quanxian) return wx.showModal({
            title: "提示",
            content: "没有上传照片的权限",
            showCancel: !1
        }), void (e = !1);
    }
    return e;
}), t(e, "isUploadpushId", function() {
    "" != r.pushId && void 0 != r.pushId && i.wxreq({
        pathname: "YinianProject/ep/isUpload",
        data: {
            pushId: r.pushId,
            port: r.globalData.port
        }
    }).then(function(t) {}, function(t) {});
}), t(e, "isInvitepushId", function() {
    "" != r.pushId && void 0 != r.pushId && i.wxreq({
        pathname: "YinianProject/ep/isInvite",
        data: {
            pushId: r.pushId,
            port: r.globalData.port
        }
    }).then(function(t) {}, function(t) {});
}), t(e, "isLikepushId", function() {
    "" != r.pushId && void 0 != r.pushId && i.wxreq({
        pathname: "YinianProject/ep/isLike",
        data: {
            pushId: r.pushId,
            port: r.globalData.port
        }
    }).then(function(t) {}, function(t) {});
}), t(e, "isCommentpushId", function() {
    "" != r.pushId && void 0 != r.pushId && i.wxreq({
        pathname: "YinianProject/ep/isComment",
        data: {
            pushId: r.pushId,
            port: r.globalData.port
        }
    }).then(function(t) {}, function(t) {});
}), t(e, "flashSaleShowSwitch", function() {
    var t = this;
    i.wxreq({
        pathname: "YinianProject/flashSale/flashSaleShowSwitch",
        data: {}
    }).then(function(e) {
        console.log(e), 0 == e.code ? (t.setData({
            activitySwitchhot: e.data[0].activitySwitch,
            inviteSwitchhot: e.data[0].inviteSwitch,
            bottomUrl: e.data[0].bottomUrl,
            inviteBelowHint: e.data[0].inviteBelowHint
        }), r.globalData.activitySwitch = e.data[0].activitySwitch, r.globalData.shareUrl = e.data[0].shareUrl, 
        r.globalData.inviteSwitch = e.data[0].inviteSwitch, r.globalData.regulaUrl = e.data[0].regulaUrl) : wx.showToast({
            title: "hotshow请求失败!",
            duration: 2e3
        });
    }).catch(function(t) {
        wx.showToast({
            title: "hotshow请求失败!",
            duration: 2e3
        });
    });
}), t(e, "hotactiveNavgite", function() {
    var t = this;
    t.groupid ? t.joinSaleActivty() : wx.showModal({
        title: "提示",
        content: "获取该相册信息失败",
        showCancel: !1
    });
}), t(e, "joinSaleActivty", function() {
    var t = this;
    if (!t.isloadingactive) {
        t.isloadingactive = !0;
        var e = t.data.userid || 0;
        r.stat.stathotmall({
            userId: e,
            groupId: t.groupid,
            port: r.globalData.port,
            operation: "bottomhotClick",
            registerTime: r.globalData.utime,
            inviteId: t.nc
        }), i.wxreq({
            pathname: "YinianProject/flashSale/joinSaleActivty",
            data: {
                userId: t.data.ablumInfo.gcreator,
                groupId: t.groupid,
                groupName: t.data.ablumInfo.gname
            }
        }).then(function(e) {
            t.isloadingactive = !1, wx.navigateTo({
                url: "/pages/others/hot/index/index?lastPage=albumDetail&clickfrom=group&clickRecord=addmenber&groupid=" + t.groupid + "&gOrigin=" + t.data.ablumInfo.gOrigin + "&eventQRCodeCanPublish=" + t.data.ablumInfo.eventQRCodeCanPublish + "&gcreator=" + t.data.ablumInfo.gcreator + "&groupNewType=" + t.data.ablumInfo.groupNewType
            });
        }, function(t) {});
    }
}), t(e, "tocreateAlbum", function() {
    console.log("tocreateAlbum");
    var t = this, e = t.data.userid || 0;
    r.stat.stathotmall({
        userId: e,
        groupId: t.data.groupId,
        port: r.globalData.port,
        operation: "wantplayupload",
        registerTime: r.globalData.utime,
        inviteId: t.nc
    }), wx.navigateTo({
        url: "../makegroup/makegroup",
        success: function(t) {}
    });
}), t(e, "getAlbumCreater", function() {
    var t = this;
    i.wxreq({
        pathname: "YinianProject/flashSale/flashSaleTextContentSwitch",
        data: {}
    }).then(function(e) {
        console.log(e), 0 == e.code && (r.globalData.sharePicTextContent = e.data[0].sharePicTextContent, 
        r.globalData.sharePicUrlContent = e.data[0].sharePicUrlContent, r.globalData.alertButtonOne = e.data[0].alertButtonOne, 
        r.globalData.alertHidePic = e.data[0].alertHidePic, r.globalData.alertButtonTwo01 = e.data[0].alertButtonTwo01, 
        r.globalData.alertButtonTwo02 = e.data[0].alertButtonTwo02, r.globalData.shareButtonOne = e.data[0].shareButtonOne, 
        r.globalData.shareButtonTwo_1 = e.data[0].shareButtonTwo_1, r.globalData.shareButtonTwo_2 = e.data[0].shareButtonTwo_2, 
        r.globalData.hotRecordDetail = e.data[0].hotRecordDetail, t.setData({
            alertButtonOne: e.data[0].alertButtonOne,
            alertHidePic: e.data[0].alertHidePic,
            alertButtonTwo01: e.data[0].alertButtonTwo01,
            alertButtonTwo02: e.data[0].alertButtonTwo02
        }));
    }).catch(function(t) {});
}), t(e, "flashSalegetUserInfo", function(t) {
    i.wxreq({
        pathname: "YinianProject/flashSale/getUserInfo",
        data: {
            userId: t
        }
    }).then(function(t) {
        0 == t.code && (r.globalData.utime = t.data[0].utime);
    }, function(t) {});
}), t(e, "closeInviteBox", function() {
    this.setData({
        showInviteModal: !1
    });
}), t(e, "isShowLoverModal", function(t, e) {
    var a = this;
    if (t && "null" != t && "undefined" != t && e && "null" != e && "undefined" != e) {
        var o = "timeLine_" + t + "_" + e;
        wx.getStorageSync(o) || (wx.setStorageSync(o, 1), a.setData({
            showInviteModal: !0
        }));
    }
}), t(e, "openPublishMenu", function() {
    var t = this;
    t.permission() && (t.generateMenuNames(), t.setData({
        publishMenu: !0
    }), t.isUploadpushId());
}), t(e, "publishMenuClosed", function(t) {
    var e = this;
    e.setData({
        publishMenu: !1
    });
    var a = t.detail;
    "photo" === a && wx.showActionSheet({
        itemList: [ "系统相册选择", "拍照" ],
        itemColor: "#333",
        success: function(t) {
            var a = t.tapIndex, o = {
                currentTarget: {
                    dataset: {
                        pic: "phone"
                    }
                }
            };
            console.log("eee", o.currentTarget.dataset.pic), 0 == a && (o.currentTarget.dataset.pic = "phone"), 
            1 == a && (o.currentTarget.dataset.pic = "pai"), e.uploadpic(o);
        },
        fail: function(t) {
            console.log(t.errMsg);
        }
    }), "video" === a && wx.showActionSheet({
        itemList: [ "系统相册选择", "拍摄" ],
        itemColor: "#333",
        success: function(t) {
            var a = t.tapIndex, o = {
                currentTarget: {
                    dataset: {
                        video: "phone"
                    }
                }
            };
            console.log("eee", o.currentTarget.dataset.video), 0 == a && (o.currentTarget.dataset.video = "phone"), 
            1 == a && (o.currentTarget.dataset.video = "pai"), e.uploadvideo(o);
        },
        fail: function(t) {
            console.log(t.errMsg);
        }
    }), "audio" === a && e.toUploadAudio(), "text" === a && e.uploadText(), "import" === a && (e.stopreset(), 
    wx.navigateTo({
        url: "/pages/downloadApp/downloadApp"
    }));
}), t(e, "generateMenuNames", function() {
    var t = this, e = "photo,video,import,", a = t.data.ablumInfo.groupNewType;
    2 != a && 3 != a && 11 != a || (e += "audio,text"), 5 == a && (e += "text"), t.setData({
        menuNames: e
    });
}), t(e, "playPhoto", function(t) {
    var e = this;
    console.log(t), this.setData({
        playPhoto: !0
    }), m = t.currentTarget.dataset.eid, f = t.currentTarget.dataset.grouptype, r.stat.request({
        operation: "albumMakeMore",
        userId: wx.getStorageSync("userid"),
        groupId: e.groupid,
        groupNewType: f
    });
}), t(e, "makeStory", function() {
    var t = this;
    r.stat.request({
        operation: "albumMakeStory",
        userId: wx.getStorageSync("userid"),
        groupId: t.groupid,
        groupNewType: f
    }), wx.showLoading({
        title: "正在上传",
        mask: !0
    }), wx.request({
        url: l.host + "/YinianProject/story/createStory",
        data: {
            userId: wx.getStorageSync("userid")
        },
        success: function(e) {
            console.log(e), 0 == e.data.code && (wx.hideLoading(), wx.setStorageSync("storyId", e.data.data[0].storyId), 
            wx.request({
                url: l.host + "/YinianProject/story/eventGenerateStory",
                data: {
                    userId: wx.getStorageSync("userid"),
                    eId: m,
                    storyId: wx.getStorageSync("storyId"),
                    groupId: t.groupid
                },
                method: "GET",
                success: function(e) {
                    if (console.log(e), 0 === e.data.code) {
                        t.setData({
                            playPhoto: !1
                        });
                        var a = u.getCurrentPageUrlWithArgs();
                        console.log(a), wx.setStorageSync("skipUrl", a), wx.navigateTo({
                            url: "/package/stories/pages/make/makeStory?eId=" + wx.getStorageSync("storyId") + "&groupid=" + t.groupid + "&index=1&groupType=" + f
                        });
                    }
                },
                fail: function(t) {}
            }));
        },
        fail: function(t) {}
    });
}), e));