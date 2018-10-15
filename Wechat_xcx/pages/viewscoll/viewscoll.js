function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

function e(t) {
    var t = t.replace(/-/g, "/"), e = Date.parse(new Date(t));
    e /= 1e3;
    var a = new Date().getTime(), o = parseInt(a / 1e3) - parseInt(e);
    return 0 == o ? "刚刚" : o > 0 && o < 3600 ? Math.ceil(o / 60) + "分钟前" : o >= 3600 && o < 86400 ? Math.floor(o / 3600) + "小时前" : o >= 86400 && o < 259200 ? Math.floor(o / 86400) + "天前" : t.slice(0, 4) + "." + t.slice(5, 7) + "." + t.slice(8, 10);
}

var a, o = function() {
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
}(), i = require("../../utils/util.js"), s = require("../../utils/config.js"), n = require("../../utils/reg.js"), r = getApp(), u = require("../../utils/api.js"), l = require("../../utils/common.js"), d = [], c = require("../../utils/albumsjump.js").albumsjump, g = require("../../utils/tripledes.js"), p = require("../../utils/hotActive.js").hotActive, h = void 0, m = void 0, f = 0, w = 0, v = 0, S = 0, I = [ {
    maintitle: "每张照片都有一个故事",
    title: "从今天开始，记录你生活的点滴，分享你快乐的瞬间"
}, {
    maintitle: "每一张照片都是我们的样子",
    title: "记下我们那麽疯那麽热烈的曾经，是快乐或委屈"
}, {
    maintitle: "欢乐的时光无法永留",
    title: "但是在一起的时候当然是留下我们最开心的模样"
}, {
    maintitle: "我的故事",
    title: "专属于我的私密相册，每一次都是真实的蜕变"
}, {
    maintitle: "这里是我们的大家庭",
    title: "我们就是快乐的一家人，快来分享家庭的故事"
}, {
    maintitle: "记录宝宝的成长点滴",
    title: "今天开始，记录宝宝的每一次成长历程"
}, {
    maintitle: "旅行是体验不一样的人生",
    title: "每个地方都有它的历史，我来过也就成了它历史的一部分"
}, {
    maintitle: "我们是个团体",
    title: "我们有我们独有的故事，而故事就从这里开始"
}, {
    maintitle: "喜欢的事现在就要去做",
    title: "这是我的兴趣，也是我不一样的人生"
}, {
    maintitle: "美好的时光永远在校园",
    title: "从今天开始，记录你生活的点滴，分享你快乐的瞬间"
}, {
    maintitle: "我们的工作日常",
    title: "记录工作的琐事、加班的日子还有逗比的同事"
}, {
    maintitle: "陪伴是最长情的告白",
    title: "爱的旅程，只属于你和我，我会记下你的每一天"
}, {
    maintitle: "记录活动的精彩瞬间",
    title: "分享活动，记录活动"
}, {
    maintitle: "快上传这个卖萌小能手的照片",
    title: "用照片记录各种卖萌的样子，调皮的故事"
} ];

Page((a = {
    data: {
        playPhoto: !1,
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
        newState: !0,
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
        activitySwitchhot: 0,
        inviteSwitchhot: 0,
        inviteBelowHint: "",
        alertButtonOne: "",
        alertHidePic: "",
        alertButtonTwo01: "",
        alertButtonTwo02: "",
        showmidifinenameModel: !1,
        maintitle: "每张照片都有一个故事",
        titlestr: "从今天开始，记录你生活的点滴，分享你快乐的瞬间",
        showDisposeModel: !1,
        classArr: [ "pic1", "pic2", "pic3" ],
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
        showMayDayActivity: !1,
        isActivitySwitch: {},
        loversInfo: {
            alertPicUrl: "http://7xlmtr.com1.z0.glb.clouddn.com/alert_for_lover_201804201820.png",
            dakahuodongPicUrl: "http://7xlmtr.com1.z0.glb.clouddn.com/ji_lu_tian_mi_shi_ke_201804232201.png",
            inviteText: "立即邀请",
            jilutianmiPicUrl: "http://7xlmtr.com1.z0.glb.clouddn.com/upload_pic_201804232232.png",
            kongXiangCePicUrl: "http://7xlmtr.com1.z0.glb.clouddn.com/emptyGroup201805091005.png",
            uploadText: "上传图片",
            yaoQingPicUrl: "http://7xlmtr.com1.z0.glb.clouddn.com/yao_qing_ling_yi_ban_pic.png"
        }
    },
    prevent: function() {
        this.setData({
            fromlast: 1
        });
    },
    stop: function() {},
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
        this.imgUrl = "", this.zj = t.zj || "", this.lastPage = t.lastPage, this.lastPage = this.lastPage || "null";
        var n = "showLoad" + s.groupid, u = "showCreat" + s.groupid;
        wx.getStorageSync(n) ? s.setData({
            showFooterIntro1: !1
        }) : s.setData({
            showFooterIntro1: !0
        }), wx.getStorageSync(u) ? s.setData({
            showFooterIntro2: !1
        }) : s.setData({
            showFooterIntro2: !0
        }), this.newState = !0, this.loadImgStateNo = !1, wx.getStorageSync("userInfo") || (s.setData({
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
                showpuzze: t,
                newState: n.newState
            });
        }), n.retState = !1, 2 === r.upState) {
            var l = r.upObj;
            if (!l.picarr || 0 == l.picarr.length) return void console.log("获取上传的参数出错");
            r.isUp || ("pic" == r.fromUp ? n.startUpload() : "video" == r.fromUp ? n.startUpVideo() : "audio" == r.fromUp ? n.startUpAudio() : "event" == r.fromUp ? n.eventUpload() : n.setData({
                isUpPicState: !1
            }), r.upState = 0);
        }
        "text" == r.fromUp && (n.isfirstUpload(r.text), r.fromUp = "");
        var d = i.randomNum(0, 2);
        n.setData({
            promptText: d
        }), r.getUserInfo(function(t) {
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
                url: u.getUrl("YinianProject/points/SuccessInviteFriend"),
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
            }), console.log(n.groupid), n.groupid ? (n.nickname = t.nickName, wx.request({
                url: u.getUrl("YinianProject/test/GetControllerValue"),
                data: {},
                success: function(o) {
                    if (0 == o.data.code && o.data.data[0].openloading) {
                        var s = parseInt(5 * Math.random() + 5);
                        return n.setData({
                            waitingState: !1,
                            secondNum: s,
                            secondEnd: !0
                        }), n.timer3 = setInterval(function() {
                            var t = n.data.secondNum;
                            t <= 0 ? (clearInterval(n.timer3), n.timer3 = null, n.setData({
                                secondEnd: !1
                            })) : (t--, n.setData({
                                secondNum: t
                            }));
                        }, 1e3), void console.log("return");
                    }
                    var u = g.encryptByDESModeCBC(t.userid), l = g.encryptByDESModeCBC(n.groupid);
                    i.wxreq({
                        pathname: "YinianProject/newh5/ShowSmallAppAlbumInformationWithEncryption",
                        data: {
                            userid: u,
                            groupid: l,
                            port: e,
                            fromUserID: a,
                            zj: n.zj,
                            inviteuserid: n.comeuserid
                        }
                    }).then(function(e) {
                        if (2 != e.code) if (1012 == e.code) wx.showModal({
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
                        }); else if (1037 == e.code) wx.showModal({
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
                            e.data[0].inviteusername && (console.log("yaoqingren", e.data[0].inviteusername, t.isnew), 
                            n.comeuserid != t.userid && "0" != e.data[0].picNum && "yes" == t.isnew && n.setData({
                                showcomeuserModel: !0,
                                inventPerson: e.data[0].inviteusername
                            }));
                            var a = e.data[0].isPush ? e.data[0].isPush : 0;
                            wx.setStorageSync("msgState", a);
                            var o = e.data[0];
                            o.joinStatus || wx.showToast({
                                title: "加入相册成功"
                            }), wx.setStorage({
                                key: "createrid",
                                data: o.gcreator
                            }), wx.setStorage({
                                key: "gAuthority",
                                data: o.gAuthority
                            });
                            var s = o.authorityList ? o.authorityList : [];
                            wx.setStorage({
                                key: "authorityList",
                                data: s
                            }), wx.setStorage({
                                key: "gnum",
                                data: o.gnum
                            }), wx.setStorage({
                                key: "ganme",
                                data: o.gname
                            }), n.gname = o.gname, r.globalData.gtype = o.gtype, r.globalData.gcreator = o.gcreator;
                            var u = void 0;
                            u = (10 == o.gtype || 11 == o.gtype) && t.userid == o.gcreator, n.setData({
                                ablumInfo: {
                                    gcreator: o.gcreator,
                                    canDelete: u,
                                    gtype: o.gtype,
                                    gnum: o.gnum,
                                    picnum: o.picNum,
                                    gname: o.gname,
                                    list: o.memberList,
                                    gpic: o.gpic,
                                    gOrigin: o.gOrigin,
                                    eventQRCodeCanPublish: o.eventQRCodeCanPublish,
                                    dialogShow: o.dialogShow,
                                    inBlackList: o.inBlackList,
                                    advertisementsShow: o.advertisementsShow,
                                    useablePoints: o.points,
                                    upic: o.upic,
                                    unickname: r.globalData.userInfo.nickName,
                                    arTitle: o.arTitle,
                                    arValue: o.arValue,
                                    belowImgUrl: o.belowImgUrl,
                                    canNotExit: o.canNotExit || 0,
                                    groupNewType: o.groupNewType
                                }
                            }), n.imgUrl = o.gpic, 1 == o.advertisementsShow && n.getBusiness(), 30 == o.groupNewType && (n.getLoversAuth(), 
                            n.getLoversInfo(), i.getAuthPic("lovers_intro", 0, function(t) {
                                n.setData({
                                    loversIntroPic: t.belowImgUrl
                                });
                            })), n.getCsTimeData(), null == o.groupNewType || 13 == o.groupNewType || (14 == o.groupNewType ? n.setData({
                                maintitle: I[o.groupNewType - 1].maintitle,
                                titlestr: I[o.groupNewType - 1].title
                            }) : n.setData({
                                maintitle: I[o.groupNewType].maintitle,
                                titlestr: I[o.groupNewType].title
                            }));
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
        var t = this, e = 0;
        r.globalData.userInfo && (e = r.globalData.userInfo.userid), wx.reportAnalytics("addmember", {
            userid: e,
            groupid: t.groupid,
            clicktime: i.formatTimeWithSecond(new Date())
        });
    },
    onHide: function() {},
    onUnload: function() {
        var t = this;
        console.log("viewscoll-onUnload"), this.retState = !0, 3 == t.data.upSteps && (r.upState = 0, 
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
        t.cover ? wx.request({
            url: u.getUrl("YinianProject/yinian/GetUploadToken"),
            data: {},
            method: "GET",
            success: function(a) {
                if (0 != a.data.code) return r.isUp = !1, void e.setData({
                    upSteps: 3,
                    showProgress: !0,
                    uploadnum: 0,
                    progress: 0
                });
                var o = a.data.data[0].token, i = t.cover;
                wx.uploadFile({
                    url: "https://upload.qiniup.com",
                    filePath: i,
                    name: "file",
                    formData: {
                        key: i.split("//")[1],
                        token: o
                    },
                    success: function(a) {
                        200 != a.statusCode && (r.isUp = !1, e.setData({
                            upSteps: 3,
                            showProgress: !0,
                            uploadnum: 0,
                            progress: 0
                        }));
                        var o = "http://7xlmtr.com1.z0.glb.clouddn.com/" + i.split("//")[1];
                        wx.request({
                            url: u.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),
                            data: {},
                            method: "GET",
                            success: function(a) {
                                if (0 != a.data.code) return r.isUp = !1, void e.setData({
                                    upSteps: 3,
                                    showProgress: !0,
                                    uploadnum: 0,
                                    progress: 0
                                });
                                var i = a.data.data[0].token, s = t.picarr;
                                wx.uploadFile({
                                    url: "https://upload.qiniup.com",
                                    filePath: s,
                                    name: "file",
                                    formData: {
                                        key: s.split("//")[1],
                                        token: i
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
                                        var i = JSON.parse(a.data).key;
                                        wx.request({
                                            url: u.getUrl("YinianProject/event/UploadShortVideo"),
                                            method: "GET",
                                            data: {
                                                userid: wx.getStorageSync("userid"),
                                                groupid: t.mainIdStr,
                                                content: t.content,
                                                address: i,
                                                storage: 6e3,
                                                place: t.place,
                                                cover: o,
                                                attentionMember: t.attentionMember || "",
                                                publishedTime: t.publishedTime || ""
                                            },
                                            success: function(a) {
                                                if (0 == a.data.code) {
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
                                                    e.isfirstUpload(o), p(wx.getStorageSync("userid"), t.mainIdStr, "upload");
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
            fail: function(t) {
                r.isUp = !1, e.setData({
                    upSteps: 3,
                    showProgress: !0,
                    uploadnum: 0,
                    progress: 0
                });
            }
        }) : wx.request({
            url: u.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),
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
                            url: u.getUrl("YinianProject/event/UploadShortVideo"),
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
                                    e.isfirstUpload(o), p(wx.getStorageSync("userid"), t.mainIdStr, "upload");
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
            url: u.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),
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
                            url: u.getUrl("YinianProject/event/UploadAudio"),
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
                                    e.isfirstUpload(o), p(wx.getStorageSync("userid"), t.groupId, "upload");
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
            url: u.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),
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
            url: u.getUrl("YinianProject/event/UploadEvent"),
            data: {
                userid: wx.getStorageSync("userid"),
                groupid: e.mainIdStr,
                content: e.content,
                picAddress: d.join(","),
                storage: 300 * d.length,
                memorytime: i.formatTime(new Date()),
                attentionMember: e.attentionMember || "",
                publishedTime: e.publishedTime || "",
                source: "小程序",
                place: e.place,
                formID: e.formID,
                isPush: "true",
                main: 0
            },
            success: function(t) {
                if (console.log(t), 0 != t.data.code) return d.length = 0, r.isUp = !1, void o.setData({
                    upSteps: 3,
                    showProgress: !0,
                    uploadnum: 0,
                    progress: 0
                });
                if (p(wx.getStorageSync("userid"), e.mainIdStr, "upload"), o.getCsTimeData(), r.isUp = !1, 
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
    eventUpload: function(t, e, a) {
        var o = this;
        if (0 == a.length) wx.request({
            url: u.getUrl("YinianProject/family/addIncident"),
            data: {
                userid: wx.getStorageSync("userid"),
                groupid: e.mainIdStr,
                content: e.content,
                picAddress: d.join(","),
                storage: 300 * d.length,
                memorytime: i.formatTime(new Date()),
                attentionMember: e.attentionMember || "",
                publishedTime: e.publishedTime || "",
                source: "小程序",
                place: e.place,
                formID: e.formID,
                isPush: "true",
                main: 5
            },
            success: function(t) {
                if (console.log(t), 0 != t.data.code) return d.length = 0, r.isUp = !1, void o.setData({
                    upSteps: 3,
                    showProgress: !0,
                    uploadnum: 0,
                    progress: 0
                });
                if (p(wx.getStorageSync("userid"), e.mainIdStr, "upload"), o.getCsTimeData(), r.isUp = !1, 
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
        var i = this, s = e[0], n = s.lastIndexOf("."), u = new Date().getTime() + "" + parseInt(1e8 * Math.random() + 1e8) + s.substring(n);
        wx.uploadFile({
            url: "https://upload.qiniup.com",
            filePath: s,
            name: "file",
            formData: {
                key: u,
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
        var t = this.version ? this.version : "", e = this.port ? this.port : "", a = this.fromUserID ? this.fromUserID : 0, o = this.fromSpaceID ? this.fromSpaceID : 0, s = this.fromEventID ? this.fromEventID : 0, n = this;
        r.getUserInfo(function(t) {
            n.nickname = t.nickName, wx.request({
                url: u.getUrl("YinianProject/test/GetControllerValue"),
                data: {},
                success: function(o) {
                    var s;
                    if (0 == o.data.code && (s = o.data.data[0].setlikecnt, n.setlikecnt = s, o.data.data[0].canlogin)) {
                        var u = parseInt(5 * Math.random() + 5);
                        return n.setData({
                            waitingState: !1,
                            secondNum: u,
                            secondEnd: !0
                        }), void (n.timer2 = setInterval(function() {
                            var t = n.data.secondNum;
                            t <= 0 ? (clearInterval(n.timer2), n.timer2 = null, n.setData({
                                secondEnd: !1
                            })) : (t--, n.setData({
                                secondNum: t
                            }));
                        }, 1e3));
                    }
                    n.setData({
                        waitingState: !0
                    });
                    var l = g.encryptByDESModeCBC(t.userid), d = g.encryptByDESModeCBC(n.groupid);
                    i.wxreq({
                        pathname: "YinianProject/newh5/ShowSmallAppAlbumInformationWithEncryption",
                        data: {
                            userid: l,
                            groupid: d,
                            port: e,
                            fromUserID: a,
                            zj: n.zj
                        }
                    }).then(function(e) {
                        if (2 != e.code) if (1012 == e.code) wx.showModal({
                            title: "提示",
                            content: "相册已被删除",
                            showCancel: !1,
                            success: function(t) {
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
                            success: function(t) {
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
                            var a = e.data[0].isPush ? e.data[0].isPush : 0;
                            wx.setStorageSync("msgState", a);
                            var o = e.data[0];
                            o.joinStatus || wx.showToast({
                                title: "加入相册成功"
                            }), wx.setStorage({
                                key: "createrid",
                                data: o.gcreator
                            }), wx.setStorage({
                                key: "gAuthority",
                                data: o.gAuthority
                            });
                            var s = o.authorityList ? o.authorityList : [];
                            wx.setStorage({
                                key: "authorityList",
                                data: s
                            }), wx.setStorage({
                                key: "gnum",
                                data: o.gnum
                            }), wx.setStorage({
                                key: "ganme",
                                data: o.gname
                            }), n.gname = o.gname, r.globalData.gtype = o.gtype, r.globalData.gcreator = o.gcreator;
                            var u = void 0;
                            u = (10 == o.gtype || 11 == o.gtype) && t.userid == o.gcreator, n.setData({
                                ablumInfo: {
                                    gcreator: o.gcreator,
                                    canDelete: u,
                                    gtype: o.gtype,
                                    gnum: o.gnum,
                                    picnum: o.picNum,
                                    gname: o.gname,
                                    list: o.memberList,
                                    gpic: o.gpic,
                                    gOrigin: o.gOrigin,
                                    eventQRCodeCanPublish: o.eventQRCodeCanPublish,
                                    dialogShow: o.dialogShow,
                                    inBlackList: o.inBlackList,
                                    advertisementsShow: o.advertisementsShow,
                                    useablePoints: o.points,
                                    upic: r.globalData.userInfo.avatarUrl,
                                    unickname: r.globalData.userInfo.nickName,
                                    arTitle: o.arTitle,
                                    arValue: o.arValue,
                                    belowImgUrl: o.belowImgUrl,
                                    canNotExit: o.canNotExit || 0,
                                    groupNewType: o.groupNewType
                                }
                            }), n.imgUrl = o.gpic, 1 == o.advertisementsShow && n.getBusiness(), 30 == o.groupNewType && (n.getLoversAuth(), 
                            n.getLoversInfo(), i.getAuthPic("lovers_intro", 0, function(t) {
                                n.setData({
                                    loversIntroPic: t.belowImgUrl
                                });
                            })), n.getCsTimeData(), null == o.groupNewType || 13 == o.groupNewType || (14 == o.groupNewType ? n.setData({
                                maintitle: I[o.groupNewType - 1].maintitle,
                                titlestr: I[o.groupNewType - 1].title
                            }) : n.setData({
                                maintitle: I[o.groupNewType].maintitle,
                                titlestr: I[o.groupNewType].title
                            }));
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
                }
            });
        }, t, e, a, o, s, "viewscoll");
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
    showLoveIntro: function(t) {
        var e = t.detail.formId;
        i.sendFormId(this.data.userid, e), this.setData({
            showLoveIntroBox: !0
        });
        var a = this.groupid, o = this.data.userid, s = this.data.ablumInfo.gcreator;
        i.countLoversOperation("loversBanner", a, o, s);
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
            url: u.getUrl("YinianProject/yinian/CreateSmallAppPlan2QRCode"),
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
        1 == t.data.ablumInfo.gOrigin ? t.data.showintroduce ? t.fasttoknow() : (t.loadImgStateNo = !0, 
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
        var e = this.data.groupid, a = t.currentTarget.dataset.userid, o = this.data.ablumInfo.gcreator, i = this.data.ablumInfo.groupNewType;
        wx.navigateTo({
            url: "/pages/personalPage/personalPage?groupId=" + e + "&pageUserId=" + a + "&creator=" + o + "&albumType=" + i
        });
    },
    toSettingPage: function(t) {
        var e = t.currentTarget.dataset.albumtype, a = this.data.ablumInfo.gOrigin, o = this.data.ablumInfo.canNotExit, s = t.detail.formId;
        i.sendFormId(this.data.userid, s), this.loadImgStateNo = !0, wx.navigateTo({
            url: "/pages/setting/setting?clickFrom=viewscoll&gOrigin=" + a + "&canNotExit=" + o + "&albumType=" + e
        });
    },
    addmember: function(t) {
        console.log(t);
        var e = this, a = e.data.userid || 0;
        if (!e.data.inviteSwitchhot) {
            var o = "";
            o = "invite" == t.currentTarget.dataset.invite ? "notiflyInvite" : "albuminvite", 
            r.stat.stathotmall({
                userId: a,
                groupId: e.groupid,
                port: r.globalData.port,
                operation: o,
                registerTime: r.globalData.utime,
                inviteId: e.nc
            });
        }
        var s = t.detail.formId;
        if (i.sendFormId(e.data.userid, s), e.groupid) {
            if (this.loadImgStateNo = !0, this.setData({
                fromlast: 1
            }), 30 == this.data.ablumInfo.groupNewType) {
                var n = this.groupid, u = this.data.userid, l = this.data.ablumInfo.gcreator;
                i.countLoversOperation("addmember", n, u, l);
            }
            var d = {
                operation: "addmenber",
                groupId: e.groupid || 0,
                userId: a
            };
            r.stat.request(d);
            var c = "";
            c = this.data.inviteSwitchhot ? "/pages/others/sharepage/sharepage" : "/pages/others/hot/invite/invite", 
            wx.navigateTo({
                url: c + "?lastPage=albumDetail&clickfrom=group&clickRecord=addmenber&groupid=" + e.groupid + "&gOrigin=" + this.data.ablumInfo.gOrigin + "&eventQRCodeCanPublish=" + this.data.ablumInfo.eventQRCodeCanPublish + "&gcreator=" + e.data.ablumInfo.gcreator + "&gname=" + e.data.ablumInfo.gname + "&groupNewType=" + e.data.ablumInfo.groupNewType
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
            var e = {
                operation: "emptylist_share",
                groupId: t.groupid || 0,
                userId: t.data.userid || 0
            };
            r.stat.request(e), this.loadImgStateNo = !0, this.setData({
                fromlast: 1
            });
            var a = "";
            console.log(this.data.inviteSwitchhot), a = this.data.inviteSwitchhot ? "/pages/others/sharepage/sharepage" : "/pages/others/hot/invite/invite", 
            wx.navigateTo({
                url: a + "?lastPage=albumDetail&clickfrom=group&clickRecord=emptylist_share&groupid=" + t.groupid + "&gOrigin=" + this.data.ablumInfo.gOrigin + "&eventQRCodeCanPublish=" + this.data.ablumInfo.eventQRCodeCanPublish + "&gcreator=" + t.data.ablumInfo.gcreator + "&gname=" + t.data.ablumInfo.gname + "&groupNewType=" + t.data.ablumInfo.groupNewType
            });
        } else wx.showModal({
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
            console.log(this.data.bannerInfo.bannerJump), n = this.data.bannerInfo.bannerJump ? "/pages/others/sharepage/sharepage" : "/pages/others/hot/invite/invite", 
            wx.navigateTo({
                url: n + "?lastPage=albumDetail&clickfrom=group&clickRecord=bannerinfo_share&groupid=" + e.groupid + "&gOrigin=" + this.data.ablumInfo.gOrigin + "&eventQRCodeCanPublish=" + this.data.ablumInfo.eventQRCodeCanPublish + "&gcreator=" + e.data.ablumInfo.gcreator + "&gname=" + e.data.ablumInfo.gname + "&groupNewType=" + e.data.ablumInfo.groupNewType
            });
        } else wx.showModal({
            title: "提示",
            content: "获取该相册信息失败",
            showCancel: !1
        });
    },
    toEditPhotos: function(t) {
        var e = t.detail.formId;
        i.sendFormId(this.data.userid, e);
        var a = this, o = t.currentTarget.dataset.index, s = t.currentTarget.dataset.photosource, n = this.data.eventlist[o].list[0].picList, u = 4 == this.data.eventlist[o].list[0].eMain ? "video" : "pic";
        if ("photosync" == s) {
            if (0 == this.data.ablumInfo.inBlackList) return void wx.showModal({
                title: "提示",
                content: "由于您先前操作已违反规定，已被限制操作，如有疑问可联系微信客服yiniankefu",
                showCancel: !1
            });
            this.loadImgStateNo = !0;
            var l = {
                operation: "ediSync",
                userId: a.data.userid,
                groupId: a.groupid
            };
            r.stat.request(l);
        } else {
            if ("download" != s) return;
            this.loadImgStateNo = !0, this.setData({
                fromlast: 1
            });
        }
        wx.setStorageSync("editPhotoArr", n), wx.navigateTo({
            url: "/pages/others/editphotos/editphotos?photosource=" + s + "&isPicOrVideo=" + u
        });
    },
    toEditPhotosDelete: function(t) {
        var e = this, a = t.detail.formId;
        i.sendFormId(this.data.userid, a);
        var o = t.currentTarget.dataset.photosource, s = this.data.eventlist[this.a].list[0].picList, n = 4 == this.data.eventlist[this.a].list[0].eMain ? "video" : "pic";
        if ("photosync" == o) {
            if (0 == this.data.ablumInfo.inBlackList) return void wx.showModal({
                title: "提示",
                content: "由于您先前操作已违反规定，已被限制操作，如有疑问可联系微信客服yiniankefu",
                showCancel: !1
            });
            this.loadImgStateNo = !0;
            var u = {
                operation: "ediSync",
                userId: e.data.userid,
                groupId: e.groupid
            };
            r.stat.request(u);
        } else if ("download" == o) this.loadImgStateNo = !0, this.setData({
            fromlast: 1
        }); else {
            if ("delete" != o) return;
            this.loadImgStateNo = !0;
        }
        wx.setStorageSync("editPhotoArr", s), wx.navigateTo({
            url: "/pages/others/editphotos/editphotos?photosource=" + o + "&isPicOrVideo=" + n
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
            url: u.getUrl("YinianProject/yinian/GetUploadToken"),
            data: {},
            method: "GET",
            success: function(t) {
                var a = t.data.data[0].token;
                wx.chooseImage({
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
                                    url: u.getUrl("YinianProject/yinian/ModifyGroupPic"),
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
            var e = this, a = t.target.dataset.commentindex, s = t.currentTarget.dataset.dataindex.split(","), n = o(s, 2), u = n[0], l = n[1], d = this.data.eventlist[u].list[l].comments[a], c = d.commentUser.userid, g = d.commentUser.unickname, p = t.currentTarget.dataset.eid;
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
                            t.list[0].eid == p && (t.list[0].comments.splice(a, 1), t.list[0].commentCnt--);
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
        var e = t.detail.formId, a = t.detail.value.content, o = this.data.userid, s = this.commentEid, u = this.commentedUserid, l = this.commentedname;
        if (0 != a.length) if (n.testStr(a)) wx.showModal({
            title: "包含敏感词",
            content: "请勿输入敏感词汇",
            showCancel: !1
        }); else {
            var d = this;
            d.isCommentpushId(), p(o, wx.getStorageSync("groupid"), "comment");
            var c = i.formatTimeWithSecond(new Date()), g = {
                cid: -1,
                commentedUser: {
                    userid: u,
                    unickname: l
                },
                commentUser: {
                    userid: o,
                    unickname: r.globalData.userInfo.nickName,
                    upic: r.globalData.userInfo.avatarUrl
                },
                ccontent: a,
                ctime: c
            }, h = Array.from(d.data.eventlist);
            d.data.eventlist.forEach(function(t, e) {
                t.list[0].eid == s && (h[e].list[0].comments.unshift(g), h[e].list[0].commentCnt = parseInt(h[e].list[0].commentCnt) + 1);
            }), d.setData({
                showComInput: !1,
                eventlist: h,
                value: "",
                contentCurrent: !1,
                placehold: "说点什么..."
            }), d.commentedUserid = 10, d.commentedname = "系统消息", wx.showToast({
                title: "发表成功",
                icon: "success",
                duration: 1e3
            }), i.wxreq({
                pathname: "YinianProject/yinian/SendComment1",
                data: {
                    commentUserId: o,
                    commentedUserId: u,
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
        var a = this, o = t.detail.formId;
        i.sendFormId(a.data.userid, o);
        var s = 1 == this.state ? "cancel" : "stick", n = 1 == this.state ? "取消置顶" : "置顶";
        wx.showModal({
            title: "提示",
            content: "是否" + n + "此动态",
            success: function(t) {
                t.confirm && i.wxreq({
                    pathname: "YinianProject/yinian/ModifyEventLevel",
                    data: {
                        userid: wx.getStorageSync("userid"),
                        groupid: wx.getStorageSync("groupid"),
                        eid: e,
                        type: s
                    }
                }).then(function(t) {
                    if ("success" == t.msg) {
                        wx.showToast({
                            title: n + "成功"
                        });
                        a.data.eventlist[a.a].list[0].elevel = 1 == a.data.eventlist[a.a].list[0].elevel ? "0" : "1", 
                        a.state = 1 == a.state ? "0" : "1", a.getCsTimeData();
                    }
                });
            }
        });
    },
    delete_event: function() {
        var e = this, a = this.data.eventlist[e.a].list[0].eid, o = 10 == this.data.ablumInfo.gtype || 11 == this.data.ablumInfo.gtype ? "YinianProject/yinian/DeleteEvent" : "YinianProject/yinian/DeleteEventWithUserVerify", s = 10 == this.data.ablumInfo.gtype || 11 == this.data.ablumInfo.gtype ? "eventId" : "eventID";
        wx.showModal({
            title: "删除动态",
            content: "确定删除此条动态吗？",
            confirmColor: "#353535",
            success: function(n) {
                n.confirm && i.wxreq({
                    pathname: o,
                    data: t({
                        userid: wx.getStorageSync("userid")
                    }, s, a)
                }).then(function(t) {
                    if ("success" == t.msg) {
                        wx.showToast({
                            title: "删除成功",
                            icon: "success",
                            duration: 2e3
                        });
                        var o = 0, i = !1;
                        e.data.eventlist.forEach(function(t, e) {
                            if (t.list[0].eid == a) return o = e, void (i = !0);
                        }), i && e.data.eventlist.splice(o, 1), e.setData({
                            eventlist: e.data.eventlist,
                            showFunModel: !1
                        });
                    }
                });
            }
        });
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
            a = "pai" == (t = t || event).currentTarget.dataset.pic ? "camera" : "album", wx.chooseImage({
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
                                pvShowModel: !1,
                                fromlast: 1
                            }), wx.navigateTo({
                                url: "/pages/uploadpic/uploadpic?lastPage=albumDetail"
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
            wx.chooseVideo({
                sourceType: [ a ],
                maxDuration: 60,
                camera: "back",
                success: function(t) {
                    var a = t.tempFilePath;
                    wx.setStorage({
                        key: "uploadchoosedvideo",
                        data: a,
                        success: function() {
                            e.setData({
                                pvShowModel: !1
                            }), wx.navigateTo({
                                url: "/pages/uploadvideo/uploadvideo?lastPage=albumDetail"
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
    getBusiness: function() {
        var t = this;
        wx.request({
            url: u.getUrl("YinianProject/adv/getTimeAxisAdv"),
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
        var t = this;
        t.isloading = !1, wx.request({
            url: u.host + "/YinianProject/event/ShowTimeAxis",
            data: {
                userid: wx.getStorageSync("userid"),
                groupid: t.groupid,
                type: "initialize",
                source: "ynxc",
                eid: 0
            },
            success: function(a) {
                if (console.log(a), 0 == a.data.code) {
                    var o = a.data.data;
                    wx.getStorageSync("userid");
                    t.templatearr = [], o.forEach(function(a) {
                        Object.assign(a, {
                            time: e(a.euploadtime),
                            showlibox: !1
                        }), t.templatearr.push({
                            month: a.euploadtime.substring(0, 7).replace("-", "."),
                            list: [ a ]
                        });
                    }), t.setData({
                        eventlist: t.templatearr,
                        showFunModel: !1,
                        loadImgState: !0,
                        showLoadingImg: !1,
                        loadingImgOrText: !0
                    }), "3687301" == t.groupid && t.data.aladingTwo && (t.setData({
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
            var s = this.data.eventlist[a].list[0];
            this.imgUrl = 4 == s.eMain ? this.data.ablumInfo.gpic : s.picList[0].thumbnail, 
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
        console.log(t);
        var e = this, a = t.detail.formId;
        i.sendFormId(e.data.userid, a);
        var o = e.groupid || 0, s = e.data.userid || 0;
        i.countOperation("viewscoll_eid", o, s, ""), this.loadImgStateNo = !0, this.setData({
            fromlast: 1
        });
        var n = t.currentTarget.dataset.index, u = this.data.eventlist[n].list[0].picList, l = this.data.eventlist[n].list[0].eMain, d = this.data.eventlist[n].list[0].eid;
        r.sharePageUserPic = 0, wx.setStorageSync("sharePagePic", u);
        wx.navigateTo({
            url: "/pages/others/sharepage/sharepage?lastPage=albumDetail&clickfrom=eid&clickRecord=viewscoll_eid&eid=" + d + "&eMain=" + l + "&groupid=" + this.groupid + "&gOrigin=" + this.data.ablumInfo.gOrigin + "&eventQRCodeCanPublish=" + this.data.ablumInfo.eventQRCodeCanPublish
        });
    },
    like: function(t) {
        if (wx.getStorageSync("userid")) {
            var e = t.detail.formId, a = t.currentTarget.dataset.likecatagry, o = t.currentTarget.dataset.parentindex, i = t.currentTarget.dataset.childindex, s = this.data.eventlist[o].list[i].eid, n = this;
            a && (n.data.eventlist[o].list[i].likeUser = 1, n.data.eventlist[o].list[i].likeCnt = parseInt(n.data.eventlist[o].list[i].likeCnt) + 1, 
            n.setData({
                eventlist: n.data.eventlist
            }), wx.showToast({
                title: "点赞成功",
                icon: "success",
                duration: 1e3
            }), wx.request({
                url: u.getUrl("YinianProject/yinian/AttachOrRemoveExpressionByLkNew"),
                data: {
                    type: a,
                    userid: r.globalData.userInfo.userid,
                    eid: s,
                    formID: e
                },
                success: function(t) {
                    t = t.data, n.isLikepushId(), p(wx.getStorageSync("userid"), n.groupid, "like");
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
        var t = this;
        this.isloading || (this.isloading = !0, this.setData({
            showLoadingImg: !0,
            loadingImgOrText: !0
        }), wx.request({
            url: u.host + "/YinianProject/event/ShowTimeAxis",
            data: {
                groupid: t.groupid,
                type: "loading",
                source: "ynxc",
                eid: t.templatearr[t.templatearr.length - 1].list[0].eid,
                userid: wx.getStorageSync("userid")
            },
            success: function(a) {
                console.log(a), 0 == a.data.code ? 0 == (a = a.data).data.length ? t.setData({
                    showLoadingImg: !0,
                    loadingImgOrText: !1
                }) : (a.data.forEach(function(a) {
                    t.retState || (Object.assign(a, {
                        time: e(a.euploadtime),
                        showlibox: !1
                    }), t.templatearr.push({
                        month: a.euploadtime.substring(0, 7).replace("-", "."),
                        list: [ a ]
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
        this.loadImgStateNo = !0, this.closeIntroCreate(), wx.navigateTo({
            url: "/pages/makegroup/makegroup?lastPage=albumDetail"
        });
    },
    showPvModel: function() {
        var t = this;
        if (0 != t.data.ablumInfo.inBlackList) if (r.isUp) wx.showToast({
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
            }), 30 == this.data.ablumInfo.groupNewType) if ("cancel" === t.isconfirm) {
                var o = this.groupid, s = this.data.userid, n = this.data.ablumInfo.gcreator;
                i.countLoversOperation("cancelLoversUpBtn", o, s, n);
            } else {
                var u = this.groupid, l = this.data.userid, d = this.data.ablumInfo.gcreator;
                i.countLoversOperation("loversUpBtn", u, l, d);
            }
            this.isUploadpushId();
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
        this.imgUrl = this.data.ablumInfo.gpic, this.setData({
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
    onShareAppMessage: function() {
        this.setData({
            fromlast: 1
        });
        var t = this;
        t.nickname = t.nickname ? t.nickname : "", t.gname = t.gname ? t.gname : "";
        var e = wx.getStorageSync("userInfo").userid || 0;
        return {
            title: t.nickname + "邀请你加入“" + t.gname + "”相册",
            desc: "这里面有几张我很喜欢的照片，快来看看你喜欢嘛？",
            imageUrl: t.imgUrl,
            path: "/pages/timelinelogin/timelinelogin?port=小程序空间分享&groupid=" + t.groupid + "&fromUserID=" + e,
            success: function() {
                r.stat.request({
                    operation: "shareCallback"
                });
            }
        };
    },
    returnhome: function(t) {
        var e = t.detail.formId;
        i.sendFormId(this.data.userid, e), wx.reLaunch ? wx.reLaunch({
            url: "/pages/index/index"
        }) : wx.switchTab({
            url: "/pages/index/index"
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
        if (i.sendFormId(e.data.userid, a), 0 == e.data.businessList[0].joinGroupOrList) wx.navigateTo({
            url: "/pages/others/businessgroup/businessgroup?lastPage=albumDetail&listid=" + e.data.businessList[0].listid
        }); else if (1 == e.data.businessList[0].joinGroupOrList) {
            this.loadImgStateNo = !0;
            var o = e.data.businessList[0].groupNewType, s = e.data.businessList[0].joinGroupid;
            c({
                groupNewType: o,
                data: {
                    from: "grouplist",
                    groupid: s
                },
                navigator: "redirect"
            });
        } else if (2 == e.data.businessList[0].joinGroupOrList) {
            this.loadImgStateNo = !0, this.setData({
                fromlast: 1
            });
            var n = e.groupid || 0, r = e.data.userid || 0;
            i.countOperation("bannerpic_share", n, r, ""), wx.navigateTo({
                url: "/pages/others/sharepage/sharepage?lastPage=albumDetail&clickfrom=group&clickRecord=bannerpic_share&groupid=" + e.groupid + "&gOrigin=" + e.data.ablumInfo.gOrigin
            });
        } else if (3 == e.data.businessList[0].joinGroupOrList) {
            var u = e.data.businessList[0].joinGroupid;
            if (!u) return;
            this.loadImgStateNo = !0, wx.navigateTo({
                url: "/" + u
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
            url: "/pages/eventdetail/eventdetail?lastPage=albumDetail&dateindex=" + t.currentTarget.dataset.sela + "&eid=" + t.currentTarget.dataset.eid + "&rowindex=" + t.currentTarget.dataset.selb + "&efrom=viewscoll"
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
                    url: u.getUrl("YinianProject/yinian/ModifyGroupName"),
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
    },
    closeModel: function() {
        this.setData({
            showDisposeModel: !1,
            classArr: [ "pic1", "pic2", "pic3" ]
        });
    },
    changestart: function(t) {
        f = t.touches[0].pageX, w = t.touches[0].pageY;
    },
    changemove: function(t) {},
    changend: function(t) {
        var e = this;
        if (v = t.changedTouches[0].pageX, S = t.changedTouches[0].pageY, f - v > 30) {
            if ("pic2" == e.data.classArr[0]) return;
            e.data.classArr.unshift(e.data.classArr[e.data.classArr.length - 1]), e.data.classArr.pop(e.data.classArr[e.data.classArr.length - 1]), 
            e.setData({
                classArr: e.data.classArr
            });
        } else if (v - f > 30) {
            if ("pic1" == e.data.classArr[0]) return;
            e.data.classArr.push(e.data.classArr[0]), e.data.classArr.shift(e.data.classArr[0]), 
            e.setData({
                classArr: e.data.classArr
            });
        }
    },
    addgroup: function() {
        wx.getStorageSync("userid") ? (this.loadImgStateNo = !0, wx.navigateTo({
            url: "../makegroup/makegroup?lastPage=albumDetail"
        })) : wx.showModal({
            title: "错误",
            content: "获取用户授权信息失败！创建相册功能不可用！",
            showCancel: !1
        });
    },
    isfirstUpload: function(t) {
        return;
    },
    noLongerPrompt: function() {
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
    },
    getHeaderData: function() {
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
    },
    closeMayDayModal: function() {
        this.setData({
            showMayDayActivity: !1
        });
    },
    goOnUpload: function() {
        var t = this;
        this.setData({
            showMayDayActivity: !1
        }), this.showPvModel();
        var e = {
            operation: "twice_page_reupload",
            userId: t.data.userid,
            remark: t.mayefrom,
            groupId: t.groupid || 0
        };
        r.stat.request(e);
    },
    toGetPrize: function() {
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
    },
    useablePointsclick: function(t) {
        console.log("跳转到 个人中心积分界面");
        var e = t.detail.formId;
        i.sendFormId(this.data.userid, e), this.loadImgStateNo = !0, this.setData({
            fromlast: 1
        });
        var a = this.data.groupid, o = this.data.userid, s = this.data.ablumInfo.groupNewType || 0, n = this.data.ablumInfo.gcreator;
        wx.navigateTo({
            url: "/pages/personalPage/personalPage?groupId=" + a + "&pageUserId=" + o + "&creator=" + n + "&albumType=" + s
        });
    }
}, t(a, "closeDispose", function() {
    this.setData({
        showcomeuserModel: !1
    });
}), t(a, "hurryupload", function() {
    var t = this;
    t.closeDispose(), t.showPvModel();
}), t(a, "closefirstuploadDispose", function() {
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
    "first" == t.data.isFirstUpload && (a.operation = "viewscollToStoriesFirstClose"), 
    r.stat.request(a);
}), t(a, "firstuploadshare", function() {
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
}), t(a, "toStories", function(t) {
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
}), t(a, "flashSaleShowSwitch", function() {
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
            title: "hot请求失败!",
            duration: 2e3
        });
    }).catch(function(t) {
        wx.showToast({
            title: "hot请求失败!",
            duration: 2e3
        });
    });
}), t(a, "donothing", function() {}), t(a, "isUploadpushId", function() {
    "" != r.pushId && void 0 != r.pushId && i.wxreq({
        pathname: "YinianProject/ep/isUpload",
        data: {
            pushId: r.pushId,
            port: r.globalData.port
        }
    }).then(function(t) {}, function(t) {});
}), t(a, "isInvitepushId", function() {
    "" != r.pushId && void 0 != r.pushId && i.wxreq({
        pathname: "YinianProject/ep/isInvite",
        data: {
            pushId: r.pushId,
            port: r.globalData.port
        }
    }).then(function(t) {}, function(t) {});
}), t(a, "getAlbumCreater", function() {
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
}), t(a, "hotactiveNavgite", function() {
    console.log("抢购活动的界面跳转");
    var t = this;
    t.groupid ? t.joinSaleActivty() : wx.showModal({
        title: "提示",
        content: "获取该相册信息失败",
        showCancel: !1
    });
}), t(a, "isLikepushId", function() {
    "" != r.pushId && void 0 != r.pushId && i.wxreq({
        pathname: "YinianProject/ep/isLike",
        data: {
            pushId: r.pushId,
            port: r.globalData.port
        }
    }).then(function(t) {}, function(t) {});
}), t(a, "isCommentpushId", function() {
    "" != r.pushId && void 0 != r.pushId && i.wxreq({
        pathname: "YinianProject/ep/isComment",
        data: {
            pushId: r.pushId,
            port: r.globalData.port
        }
    }).then(function(t) {}, function(t) {});
}), t(a, "flashSalegetUserInfo", function(t) {
    i.wxreq({
        pathname: "YinianProject/flashSale/getUserInfo",
        data: {
            userId: t
        }
    }).then(function(t) {
        0 == t.code && (r.globalData.utime = t.data[0].utime);
    }, function(t) {});
}), t(a, "tocreateAlbum", function() {
    var t = this, e = t.data.userid || 0;
    r.stat.stathotmall({
        userId: e,
        groupId: t.data.groupId,
        port: r.globalData.port,
        operation: "wantplayupload",
        registerTime: r.globalData.utime,
        inviteId: t.nc
    }), wx.navigateTo({
        url: "../../../makegroup/makegroup",
        success: function(t) {}
    });
}), t(a, "loversToShare", function() {
    var t = this;
    t.groupid ? (this.loversInviteBtn(), this.loadImgStateNo = !0, this.setData({
        fromlast: 1,
        showLoveFirstBox: !1
    }), wx.navigateTo({
        url: "/pages/others/sharepage/sharepage?lastPage=albumDetail&clickfrom=group&clickRecord=inviteOther&groupid=" + t.groupid + "&gOrigin=" + this.data.ablumInfo.gOrigin + "&eventQRCodeCanPublish=" + this.data.ablumInfo.eventQRCodeCanPublish
    })) : wx.showModal({
        title: "提示",
        content: "获取该相册信息失败",
        showCancel: !1
    });
}), t(a, "playPhoto", function(t) {
    var e = this;
    console.log(t), this.setData({
        playPhoto: !0
    }), h = t.currentTarget.dataset.eid, m = t.currentTarget.dataset.grouptype, r.stat.request({
        operation: "albumMakeMore",
        userId: wx.getStorageSync("userid"),
        groupId: e.groupid,
        groupNewType: m
    });
}), t(a, "makeStory", function() {
    var t = this;
    r.stat.request({
        operation: "albumMakeStory",
        userId: wx.getStorageSync("userid"),
        groupId: t.groupid,
        groupNewType: m
    }), wx.showLoading({
        title: "正在上传",
        mask: !0
    }), wx.request({
        url: u.host + "/YinianProject/story/createStory",
        data: {
            userId: wx.getStorageSync("userid")
        },
        success: function(e) {
            console.log(e), 0 == e.data.code && (wx.hideLoading(), wx.setStorageSync("storyId", e.data.data[0].storyId), 
            wx.request({
                url: u.host + "/YinianProject/story/eventGenerateStory",
                data: {
                    userId: wx.getStorageSync("userid"),
                    eId: h,
                    storyId: wx.getStorageSync("storyId"),
                    groupId: t.groupid
                },
                method: "GET",
                success: function(e) {
                    if (console.log(e), 0 === e.data.code) {
                        t.setData({
                            playPhoto: !1
                        });
                        var a = l.getCurrentPageUrlWithArgs();
                        console.log(a), wx.setStorageSync("skipUrl", a), wx.navigateTo({
                            url: "/package/stories/pages/make/makeStory?eId=" + wx.getStorageSync("storyId") + "&groupid=" + t.groupid + "&index=1&groupType=" + m
                        });
                    }
                },
                fail: function(t) {}
            }));
        },
        fail: function(t) {}
    });
}), a));