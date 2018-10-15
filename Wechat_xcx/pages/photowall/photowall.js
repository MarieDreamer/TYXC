function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a, e = require("../../utils/util.js"), o = require("../../utils/config.js"), s = getApp(), i = require("../../utils/api.js"), n = (require("../../utils/reg.js"), 
[]), r = require("../../utils/tripledes.js"), p = require("../../utils/hotActive.js").hotActive, l = 0, u = 0, d = 0, c = 0;

Page((a = {
    data: {
        canIUse: !1,
        lookway: "day",
        looktodelete: !1,
        looktodeletenum: 0,
        returnhomepic: "http://oibl5dyji.bkt.clouddn.com/20170605160928.png",
        showModelHidden: !1,
        pvShowModel: !1,
        photopagedata_day: [],
        showTop: !0,
        showFooterIntro1: !0,
        showFooterIntro2: !0,
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
        showDisposeModel: !1,
        classArr: [ "pic1", "pic2", "pic3" ],
        usernumber: 3006789,
        checkFeatures: !1,
        date: "全部照片",
        firstdate: "2018-01",
        picturenumber: "(0)",
        pagenum: 1,
        showTimeData: !0,
        showMonthTimeData: !1,
        timeloading: !1,
        showActivityRules: !0,
        maxnumber: 0,
        hasmorephoto: !0
    },
    onLoad: function(t) {
        s.stat.statpv({
            route: this.route,
            options: t
        });
        var a = this;
        this.looktodelete = !1, this.groupid = t.groupid, this.clickFrom = t.clickFrom || "viewscoll", 
        this.groupid && wx.setStorageSync("groupid", this.groupid), this.looktodeletenum = 0, 
        a.setData({
            winHeight: s.globalData.systemInfo.screenHeight,
            isIphonex: s.globalData.systemInfo.model.toLowerCase().indexOf("iphone x") >= 0,
            r2p: s.globalData.systemInfo.windowWidth / 750,
            groupid: a.groupid
        }), wx.canIUse && wx.canIUse("button.open-type.share") && a.setData({
            canIUse: !0
        });
        var e = "showLoad" + a.groupid, o = "showCreat" + a.groupid;
        wx.getStorageSync(e) ? a.setData({
            showFooterIntro1: !1
        }) : a.setData({
            showFooterIntro1: !0
        }), wx.getStorageSync(o) ? a.setData({
            showFooterIntro2: !1
        }) : a.setData({
            showFooterIntro2: !0
        });
        var i = new Date(), n = i.getFullYear(), r = i.getMonth() + 1;
        r < 10 && (r = "0" + r);
        var p = n + "-" + r;
        a.setData({
            firstdate: p
        }), wx.getStorage({
            key: "peopleCount",
            success: function(t) {
                0 != t.data && t.data ? a.setData({
                    maxnumber: t.data
                }) : (console.log(t), a.setData({
                    maxnumber: t.data
                }));
            }
        });
    },
    onShow: function() {
        var t = this;
        if (s.getshowState(function(a) {
            t.setData({
                showpuzze: a
            });
        }), this.groupid) {
            if (wx.setStorageSync("groupid", this.groupid), 2 === s.upState) {
                var a = s.upObj;
                if (console.log(a), !a.picarr || 0 == a.picarr.length) return void console.log("获取上传的参数出错");
                s.isUp || ("pic" == s.fromUp ? t.startUpload() : "video" == s.fromUp && t.startUpVideo(), 
                t.setData({
                    isUpPicState: !1
                })), s.upState = 0;
            }
            if (1 != s.fromS) if (1 != t.fromlast) if (this.looktodelete = !1, this.looktodeletenum = 0, 
            this.setData({
                looktodeletenum: 0
            }), wx.getStorageSync("userid")) {
                s.isNewUser && t.setData({
                    globalNewUser: !0
                }), t.lookTimeData();
                var o = r.encryptByDESModeCBC(wx.getStorageSync("userid")), i = r.encryptByDESModeCBC(t.groupid);
                e.wxreq({
                    pathname: "YinianProject/newh5/ShowSmallAppAlbumInformationWithEncryption",
                    data: {
                        userid: o,
                        groupid: i
                    }
                }).then(function(a) {
                    if (0 == a.code) {
                        var e = a.data[0];
                        wx.setStorage({
                            key: "createrid",
                            data: e.gcreator
                        }), wx.setStorage({
                            key: "gAuthority",
                            data: e.gAuthority
                        });
                        var o = e.authorityList ? e.authorityList : [];
                        wx.setStorage({
                            key: "authorityList",
                            data: o
                        }), t.setData({
                            ablumInfo: {
                                gnum: e.gnum,
                                picnum: e.picNum,
                                gname: e.gname,
                                list: e.memberList,
                                gpic: e.gpic,
                                gOrigin: e.gOrigin,
                                dialogShow: e.dialogShow,
                                inBlackList: e.inBlackList,
                                gcreator: e.gcreator,
                                eventQRCodeCanPublish: e.eventQRCodeCanPublish,
                                arTitle: e.arTitle,
                                arValue: e.arValue,
                                groupNewType: e.groupNewType
                            },
                            picturenumber: "(" + e.picNum + ")"
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
                });
            } else wx.showModal({
                title: "提示",
                content: "服务器忙,请稍后重试"
            }); else t.timer = setTimeout(function() {
                t.fromlast = 0;
            }, 100); else setTimeout(function() {
                s.fromS = 0;
            }, 1e3);
        } else wx.showModal({
            title: "提示",
            content: "获取相册详情失败",
            showCancel: !1,
            success: function() {
                wx.switchTab({
                    url: "/pages/index/index"
                });
            }
        });
    },
    prevent: function() {
        this.fromlast = 1;
    },
    onUnload: function() {
        var t = this;
        3 == t.data.upSteps && (s.upState = 0, s.upObj = {}, t.setData({
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
        "pic" == s.fromUp ? this.startUpload() : "video" == s.fromUp && this.startUpVideo(), 
        this.setData({
            isUpPicState: !1
        });
    },
    startUpVideo: function() {
        console.log(s.upObj);
        var t = this, a = s.upObj;
        t.setData({
            showProgress: !0,
            totalnum: 1,
            uploadnum: 0,
            progress: 0,
            upSteps: 1,
            sucImgNum: 0,
            fitImgNum: 0,
            upViderOrPic: "video"
        }), s.isUp = !0, t.uploadvideosync(a);
    },
    uploadvideosync: function(t) {
        var a = this;
        t.cover ? wx.request({
            url: i.getUrl("YinianProject/yinian/GetUploadToken"),
            data: {},
            method: "GET",
            success: function(e) {
                if (0 != e.data.code) return s.isUp = !1, void a.setData({
                    upSteps: 3,
                    showProgress: !0,
                    uploadnum: 0,
                    progress: 0
                });
                var o = e.data.data[0].token, n = t.cover;
                wx.uploadFile({
                    url: "https://upload.qiniup.com",
                    filePath: n,
                    name: "file",
                    formData: {
                        key: n.split("//")[1],
                        token: o
                    },
                    success: function(e) {
                        200 != e.statusCode && (s.isUp = !1, a.setData({
                            upSteps: 3,
                            showProgress: !0,
                            uploadnum: 0,
                            progress: 0
                        }));
                        var o = "http://7xlmtr.com1.z0.glb.clouddn.com/" + n.split("//")[1];
                        wx.request({
                            url: i.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),
                            data: {},
                            method: "GET",
                            success: function(e) {
                                if (0 != e.data.code) return s.isUp = !1, void a.setData({
                                    upSteps: 3,
                                    showProgress: !0,
                                    uploadnum: 0,
                                    progress: 0
                                });
                                var n = e.data.data[0].token, r = t.picarr;
                                wx.uploadFile({
                                    url: "https://upload.qiniup.com",
                                    filePath: r,
                                    name: "file",
                                    formData: {
                                        key: r.split("//")[1],
                                        token: n
                                    },
                                    success: function(e) {
                                        if (200 != e.statusCode) return s.isUp = !1, void a.setData({
                                            upSteps: 3,
                                            showProgress: !0,
                                            uploadnum: 0,
                                            progress: 0
                                        });
                                        a.setData({
                                            uploadnum: 1,
                                            progress: 100
                                        });
                                        var n = JSON.parse(e.data).key;
                                        wx.request({
                                            url: i.getUrl("YinianProject/event/UploadShortVideo"),
                                            method: "GET",
                                            data: {
                                                userid: wx.getStorageSync("userid"),
                                                groupid: t.mainIdStr,
                                                content: t.content,
                                                address: n,
                                                storage: 6e3,
                                                place: t.place,
                                                cover: o
                                            },
                                            success: function(e) {
                                                0 == e.data.code ? (a.setData({
                                                    photopagedata_people: [],
                                                    showTimeData: !0
                                                }), a.getphotoWallDataByDay(), s.isUp = !1, s.upState = 0, s.upObj = {}, a.setData({
                                                    progress: 0,
                                                    upSteps: 2
                                                }), a.timer5 = setTimeout(function() {
                                                    a.setData({
                                                        showProgress: !1,
                                                        isUpPicState: !0
                                                    });
                                                }, 3e3), p(wx.getStorageSync("userid"), t.mainIdStr, "upload")) : 1039 == e.data.code ? (a.setData({
                                                    photopagedata_people: [],
                                                    showTimeData: !0
                                                }), a.getphotoWallDataByDay(), s.isUp = !1, s.upState = 0, s.upObj = {}, a.setData({
                                                    progress: 0,
                                                    upSteps: 4
                                                }), a.timer5 = setTimeout(function() {
                                                    a.setData({
                                                        showProgress: !1,
                                                        isUpPicState: !0
                                                    });
                                                }, 3e3)) : (s.isUp = !1, a.setData({
                                                    upSteps: 3,
                                                    showProgress: !0,
                                                    uploadnum: 0,
                                                    progress: 0
                                                }));
                                            },
                                            fail: function(t) {
                                                s.isUp = !1, a.setData({
                                                    upSteps: 3,
                                                    showProgress: !0,
                                                    uploadnum: 0,
                                                    progress: 0
                                                });
                                            }
                                        });
                                    },
                                    fail: function(t) {
                                        s.isUp = !1, a.setData({
                                            upSteps: 3,
                                            showProgress: !0,
                                            uploadnum: 0,
                                            progress: 0
                                        });
                                    }
                                });
                            },
                            fail: function(t) {
                                s.isUp = !1, a.setData({
                                    upSteps: 3,
                                    showProgress: !0,
                                    uploadnum: 0,
                                    progress: 0
                                });
                            }
                        });
                    },
                    fail: function(t) {
                        s.isUp = !1, a.setData({
                            upSteps: 3,
                            showProgress: !0,
                            uploadnum: 0,
                            progress: 0
                        });
                    }
                });
            },
            fail: function(t) {
                s.isUp = !1, a.setData({
                    upSteps: 3,
                    showProgress: !0,
                    uploadnum: 0,
                    progress: 0
                });
            }
        }) : wx.request({
            url: i.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),
            data: {},
            method: "GET",
            success: function(e) {
                if (0 != e.data.code) return s.isUp = !1, void a.setData({
                    upSteps: 3,
                    showProgress: !0,
                    uploadnum: 0,
                    progress: 0
                });
                var o = e.data.data[0].token, n = t.picarr;
                wx.uploadFile({
                    url: "https://upload.qiniup.com",
                    filePath: n,
                    name: "file",
                    formData: {
                        key: n.split("//")[1],
                        token: o
                    },
                    success: function(e) {
                        if (200 != e.statusCode) return s.isUp = !1, void a.setData({
                            upSteps: 3,
                            showProgress: !0,
                            uploadnum: 0,
                            progress: 0
                        });
                        a.setData({
                            uploadnum: 1,
                            progress: 100
                        });
                        var o = JSON.parse(e.data).key;
                        wx.request({
                            url: i.getUrl("YinianProject/event/UploadShortVideo"),
                            method: "GET",
                            data: {
                                userid: wx.getStorageSync("userid"),
                                groupid: t.mainIdStr,
                                content: t.content,
                                address: o,
                                storage: 6e3,
                                place: t.place
                            },
                            success: function(e) {
                                0 == e.data.code ? (a.setData({
                                    photopagedata_people: [],
                                    showTimeData: !0
                                }), a.getphotoWallDataByDay(), s.isUp = !1, s.upState = 0, s.upObj = {}, a.setData({
                                    progress: 0,
                                    upSteps: 2
                                }), a.timer5 = setTimeout(function() {
                                    a.setData({
                                        showProgress: !1,
                                        isUpPicState: !0
                                    });
                                }, 3e3), p(wx.getStorageSync("userid"), t.mainIdStr, "upload")) : 1039 == e.data.code ? (a.getphotoWallDataByDay(), 
                                a.setData({
                                    photopagedata_people: [],
                                    showTimeData: !0
                                }), s.isUp = !1, s.upState = 0, s.upObj = {}, a.setData({
                                    progress: 0,
                                    upSteps: 4
                                }), a.timer5 = setTimeout(function() {
                                    a.setData({
                                        showProgress: !1,
                                        isUpPicState: !0
                                    });
                                }, 3e3)) : (s.isUp = !1, a.setData({
                                    upSteps: 3,
                                    showProgress: !0,
                                    uploadnum: 0,
                                    progress: 0
                                }));
                            },
                            fail: function() {
                                s.isUp = !1, a.setData({
                                    upSteps: 3,
                                    showProgress: !0,
                                    uploadnum: 0,
                                    progress: 0
                                });
                            }
                        });
                    },
                    fail: function(t) {
                        s.isUp = !1, a.setData({
                            upSteps: 3,
                            showProgress: !0,
                            uploadnum: 0,
                            progress: 0
                        });
                    }
                });
            },
            fail: function() {
                s.isUp = !1, a.setData({
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
        clearTimeout(t.timer2), clearTimeout(t.timer4), clearTimeout(t.timer5), s.upState = 0, 
        s.upObj = {}, this.setData({
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
        var t = this, a = s.upObj, e = [].concat(a.picarr);
        t.setData({
            showProgress: !0,
            totalnum: a.picarr.length,
            uploadnum: 0,
            progress: 0,
            upSteps: 1,
            sucImgNum: 0,
            fitImgNum: 0,
            upViderOrPic: "pic"
        }), s.isUp = !0, n.length = 0, wx.request({
            url: i.getUrl("YinianProject/yinian/GetPrivateSpaceUploadToken"),
            data: {},
            method: "GET",
            success: function(o) {
                0 === o.data.code ? t.uploadpicasync(o.data.data[0].token, a, e) : (n.length = 0, 
                t.setData({
                    upSteps: 3,
                    showProgress: !0,
                    uploadnum: 0,
                    progress: 0
                }), s.isUp = !1);
            },
            fail: function(a) {
                n.length = 0, t.setData({
                    upSteps: 3,
                    showProgress: !0,
                    uploadnum: 0,
                    progress: 0
                }), s.isUp = !1;
            }
        });
    },
    uploadpicasync: function(t, a, o) {
        var r = this;
        if (0 == o.length) wx.request({
            url: i.getUrl("YinianProject/event/UploadEvent"),
            data: {
                userid: wx.getStorageSync("userid"),
                groupid: a.mainIdStr,
                content: a.content,
                picAddress: n.join(","),
                storage: 300 * n.length,
                memorytime: e.formatTime(new Date()),
                source: "小程序",
                place: a.place,
                formID: a.formID,
                isPush: "true",
                main: 0
            },
            success: function(t) {
                return 0 != t.data.code ? (n.length = 0, s.isUp = !1, void r.setData({
                    upSteps: 3,
                    showProgress: !0,
                    uploadnum: 0,
                    progress: 0
                })) : (r.setData({
                    photopagedata_people: [],
                    showTimeData: !0
                }), r.getphotoWallDataByDay(), s.isUp = !1, p(wx.getStorageSync("userid"), a.mainIdStr, "upload"), 
                null == t.data.data ? (n.length = 0, s.upState = 0, s.upObj = {}, void r.setData({
                    progress: 0,
                    upSteps: 2,
                    showProgress: !1,
                    isUpPicState: !0
                })) : void (t.data.data[0].picList.length < n.length ? (r.setData({
                    sucImgNum: t.data.data[0].picList.length,
                    fitImgNum: n.length - t.data.data[0].picList.length,
                    upSteps: 4,
                    progress: 0
                }), n.length = 0, s.upState = 0, s.upObj = {}, r.timer4 = setTimeout(function() {
                    r.setData({
                        showProgress: !1,
                        isUpPicState: !0
                    });
                }, 8e3)) : (n.length = 0, s.upState = 0, s.upObj = {}, r.setData({
                    progress: 0,
                    upSteps: 2
                }), r.timer2 = setTimeout(function() {
                    r.setData({
                        showProgress: !1,
                        isUpPicState: !0
                    });
                }, 3e3))));
            },
            fail: function() {
                n.length = 0, s.isUp = !1, r.setData({
                    upSteps: 3,
                    showProgress: !0,
                    uploadnum: 0,
                    progress: 0
                });
            }
        }); else {
            var l = o.splice(0, 1);
            r.uppic(t, l, o, a);
        }
    },
    uppic: function(t, a, e, o) {
        var i = this, r = a[0], p = r.lastIndexOf("."), l = new Date().getTime() + "" + parseInt(1e8 * Math.random() + 1e8) + r.substring(p);
        wx.uploadFile({
            url: "https://upload.qiniup.com",
            filePath: r,
            name: "file",
            formData: {
                key: l,
                token: t
            },
            success: function(a) {
                if (200 != a.statusCode) return n.length = 0, s.isUp = !1, void i.setData({
                    upSteps: 3,
                    showProgress: !0,
                    uploadnum: 0,
                    progress: 0
                });
                var r = JSON.parse(a.data);
                n.push(r.key), i.setData({
                    uploadnum: n.length,
                    progress: parseInt(n.length / i.data.totalnum * 100)
                }), i.uploadpicasync(t, o, e);
            },
            fail: function() {
                n.length = 0, s.isUp = !1, i.setData({
                    upSteps: 3,
                    showProgress: !0,
                    uploadnum: 0,
                    progress: 0
                });
            }
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
    toMakeGroup: function() {
        this.fromlast = 1, this.closeIntroCreate(), wx.navigateTo({
            url: "/pages/makegroup/makegroup?lastPage=photowall"
        });
    },
    scrollTop: function(t) {
        var a = 750 / s.globalData.systemInfo.windowWidth, e = t.detail.scrollTop;
        e > 462 / a ? this.data.showTop && this.setData({
            showTop: !1
        }) : this.data.showTop || this.setData({
            showTop: !0
        });
    },
    goHome: function() {
        var t = this;
        1 == t.data.ablumInfo.gOrigin ? wx.navigateTo({
            url: "/pages/makegroup/makegroup?lastPage=photowall"
        }) : wx.reLaunch ? wx.reLaunch({
            url: "/pages/index/index"
        }) : wx.switchTab({
            url: "/pages/index/index"
        }), s.isNewUser = !1, t.setData({
            globalNewUser: !1
        });
    },
    toLookPhoto: function(t) {
        var a = t.currentTarget.dataset.userid, e = t.currentTarget.dataset.groupid, o = this.data.ablumInfo.groupNewType || 0;
        11 != o && 3 != o && (this.fromlast = 1, wx.navigateTo({
            url: "/pages/personalPage/personalPage?groupId=" + e + "&albumType=" + o + "&pageUserId=" + a + "&creator=" + this.data.ablumInfo.gcreator
        }));
    },
    lookTimeData: function() {
        var t = this;
        t.data.timeloading || (t.setData({
            timeloading: !0
        }), t.data.ablumInfo ? t.setData({
            photopagedata_people: [],
            showTimeData: !0,
            showMonthTimeData: !1,
            checkFeatures: !1,
            date: "全部照片",
            picturenumber: "(" + t.data.ablumInfo.picnum + ")"
        }) : t.setData({
            photopagedata_people: [],
            showTimeData: !0,
            showMonthTimeData: !1,
            checkFeatures: !1,
            date: "全部照片",
            picturenumber: "(0)"
        }), t.getphotoWallDataByDay());
    },
    lookPeopleData: function() {
        var t = this;
        console.log(t.data.timeloading), t.data.timeloading || (t.setData({
            timeloading: !0
        }), t.setData({
            photopagedata_day: [],
            showTimeData: !1,
            date: "全部照片",
            picturenumber: "(" + t.data.ablumInfo.picnum + ")"
        }), wx.showToast({
            title: "加载中...",
            icon: "loading",
            duration: 6e3
        }), e.wxreq({
            pathname: "YinianProject/yinian/ShowPhotoAndVideoWallByUserNew",
            data: {
                groupid: t.groupid,
                uploadTime: e.formatTime(new Date()).substr(0, 10),
                type: "initialize"
            }
        }).then(function(a) {
            var e = a.data;
            if (e.length > 0) for (var o = 0, s = e.length; o < s; o++) {
                e[o].uploadtime = e[o].uploadtime.split(" ")[0];
                for (var i = 0, n = e[o].picList.length; i < n; i++) {
                    var r = e[o].picList[i], p = r.thumbnail;
                    new RegExp("(mp4|MP4|3gp|3GP|.avi)").test(p) ? (r.thumbnail = r.pcover ? r.pcover : "http://oibl5dyji.bkt.clouddn.com/20170927095849.png", 
                    r.myMain = 4) : r.myMain = 0;
                }
            }
            wx.hideToast(), t.setData({
                photopagedata_people: e,
                timeloading: !1
            }), console.log("照片墙 ren");
        }));
    },
    getphotoWallDataByDay: function() {
        var t = this;
        t.setData({
            showTimeData: !0,
            hasmorephoto: !0
        }), wx.showToast({
            title: "加载中...",
            icon: "loading",
            duration: 6e4
        }), e.wxreq({
            pathname: "YinianProject/yinian/ShowPhotoAndVideoWallNew",
            data: {
                groupid: t.groupid,
                date: e.formatTime(new Date()).substr(0, 10),
                type: "initialize"
            }
        }).then(function(a) {
            var e = a.data;
            if (e.length > 0) for (var o = 0, s = e.length; o < s; o++) for (var i = 0, n = e[o].picture.length; i < n; i++) {
                var r = e[o].picture[i], p = r.thumbnail;
                new RegExp("(mp4|MP4|3gp|3GP|.avi)").test(p) ? (r.thumbnail = r.pcover ? r.pcover : "http://oibl5dyji.bkt.clouddn.com/20170927095849.png", 
                r.myMain = 4) : r.myMain = 0;
            }
            t.setData({
                photopagedata_day: e,
                timeloading: !1
            }), wx.hideToast();
        });
    },
    getphotoWallDataByMonth: function() {
        var t = this;
        if (!t.data.timeloading) {
            t.setData({
                timeloading: !0,
                hasmorephoto: !0
            }), t.setData({
                photopagedata_day: [],
                picturenumber: "(0)",
                pagenum: 1,
                showTimeData: !0
            });
            var a = parseInt(t.data.date.substr(0, 4)), o = parseInt(t.data.date.substr(5, 2)), s = parseInt(t.data.firstdate.substr(0, 4)), i = parseInt(t.data.firstdate.substr(5, 2));
            if (console.log(a, o, s, i), a > s || a == s && o > i) return t.setData({
                timeloading: !1
            }), void console.log("yearsel > yearnow || (yearsel == yearnow && monthsel > monthnow");
            wx.showToast({
                title: "加载中...",
                icon: "loading",
                duration: 6e4
            }), e.wxreq({
                pathname: "YinianProject/yinian/ShowPhotoAndVideoWallByTime",
                data: {
                    groupid: t.groupid,
                    date: t.data.date,
                    pagenum: t.data.pagenum
                }
            }).then(function(a) {
                var e = a.data;
                if (e.length > 1) for (var o = 0, s = e.length - 1; o < s; o++) for (var i = 0, n = e[o].picture.length; i < n; i++) {
                    var r = e[o].picture[i], p = r.thumbnail;
                    new RegExp("(mp4|MP4|3gp|3GP|.avi)").test(p) ? (r.thumbnail = r.pcover ? r.pcover : "http://oibl5dyji.bkt.clouddn.com/20170927095849.png", 
                    r.myMain = 4) : r.myMain = 0;
                }
                var l = a.data.pop();
                console.log(l, l.picnum), t.setData({
                    photopagedata_day: e,
                    picturenumber: "(" + l.picnum + ")",
                    timeloading: !1
                }), console.log("照片墙 月份"), wx.hideToast();
            });
        }
    },
    photoageitem: function() {
        var t = this;
        t.data.hasmorephoto ? t.data.timeloading || (t.setData({
            timeloading: !0
        }), wx.showToast({
            title: "加载中",
            icon: "loading",
            duration: 6e4
        }), e.wxreq({
            pathname: "YinianProject/yinian/ShowPhotoAndVideoWallNew",
            data: {
                groupid: wx.getStorageSync("groupid"),
                date: t.data.photopagedata_day[t.data.photopagedata_day.length - 1].euploadtime,
                type: "loading"
            }
        }).then(function(a) {
            if (t.setData({
                timeloading: !1
            }), 0 == a.data.length) wx.showToast({
                title: "已加载全部照片",
                duration: 2500
            }), t.setData({
                hasmorephoto: !1
            }); else {
                var e = a.data;
                if (e.length > 0) for (var o = 0, s = e.length; o < s; o++) for (var i = 0, n = e[o].picture.length; i < n; i++) {
                    var r = e[o].picture[i], p = r.thumbnail;
                    new RegExp("(mp4|MP4|3gp|3GP)").test(p) ? (r.thumbnail = r.pcover ? r.pcover : "http://oibl5dyji.bkt.clouddn.com/20170927095849.png", 
                    r.myMain = 4) : r.myMain = 0;
                }
                t.setData({
                    photopagedata_day: t.data.photopagedata_day.concat(e)
                }), wx.hideToast();
            }
        })) : wx.showToast({
            title: "已加载全部照片",
            duration: 2500
        });
    },
    photopeople: function() {
        var t = this;
        console.log(t.data.hasmorephoto, t.data.timeloading), t.data.hasmorephoto ? t.data.timeloading || (t.setData({
            timeloading: !0
        }), wx.showToast({
            title: "加载中",
            icon: "loading"
        }), e.wxreq({
            pathname: "YinianProject/yinian/ShowPhotoAndVideoWallByUserNew",
            data: {
                groupid: wx.getStorageSync("groupid"),
                uploadTime: t.data.photopagedata_people[t.data.photopagedata_people.length - 1].uploadtime,
                type: "loading"
            }
        }).then(function(a) {
            if (0 == a.data.length) wx.showToast({
                title: "已加载全部照片",
                duration: 2500
            }), t.setData({
                hasmorephoto: !1
            }); else {
                var e = a.data;
                if (e.length > 0) for (var o = 0, s = e.length; o < s; o++) {
                    e[o].uploadtime = e[o].uploadtime.split(" ")[0];
                    for (var i = 0, n = e[o].picList.length; i < n; i++) {
                        var r = e[o].picList[i], p = r.thumbnail;
                        new RegExp("(mp4|MP4|3gp|3GP)").test(p) ? (r.thumbnail = r.pcover ? r.pcover : "http://oibl5dyji.bkt.clouddn.com/20170927095849.png", 
                        r.myMain = 4) : r.myMain = 0;
                    }
                }
                t.setData({
                    photopagedata_people: t.data.photopagedata_people.concat(e)
                });
            }
            t.setData({
                timeloading: !1
            });
        })) : wx.showToast({
            title: "已加载全部照片",
            duration: 2500
        });
    },
    photoageitemBymonth: function() {
        var t = this;
        t.data.hasmorephoto ? t.data.timeloading || (t.setData({
            timeloading: !0
        }), wx.showToast({
            title: "加载中",
            icon: "loading",
            duration: 6e4
        }), e.wxreq({
            pathname: "YinianProject/yinian/ShowPhotoAndVideoWallByTime",
            data: {
                groupid: t.groupid,
                date: t.data.date,
                pagenum: t.data.pagenum + 1
            }
        }).then(function(a) {
            if (t.setData({
                timeloading: !1
            }), console.log(a.data.length), 0 == a.data.length) wx.showToast({
                title: "已加载全部照片",
                duration: 2500
            }), t.setData({
                hasmorephoto: !1
            }); else {
                t.setData({
                    pagenum: t.data.pagenum + 1
                });
                var e = a.data;
                if (e.length > 0) for (var o = 0, s = e.length; o < s; o++) for (var i = 0, n = e[o].picture.length; i < n; i++) {
                    var r = e[o].picture[i], p = r.thumbnail;
                    new RegExp("(mp4|MP4|3gp|3GP)").test(p) ? (r.thumbnail = r.pcover ? r.pcover : "http://oibl5dyji.bkt.clouddn.com/20170927095849.png", 
                    r.myMain = 4) : r.myMain = 0;
                }
                t.setData({
                    photopagedata_day: t.data.photopagedata_day.concat(e)
                }), wx.hideToast();
            }
        })) : wx.showToast({
            title: "已加载全部照片",
            duration: 2500
        });
    },
    photopeopleBymonthFirst: function() {
        var t = this;
        if (!t.data.timeloading) {
            t.setData({
                timeloading: !0,
                hasmorephoto: !0
            }), t.setData({
                pagenum: 1,
                picturenumber: "",
                showTimeData: !1
            });
            var a = parseInt(t.data.date.substr(0, 4)), o = parseInt(t.data.date.substr(5, 2)), s = parseInt(t.data.firstdate.substr(0, 4)), i = parseInt(t.data.firstdate.substr(5, 2));
            if (console.log(a, o, s, i), a > s || a == s && o > i) return t.setData({
                timeloading: !1
            }), void console.log("yearsel > yearnow || (yearsel == yearnow && monthsel > monthnow");
            wx.showToast({
                title: "加载中",
                icon: "loading",
                duration: 6e4
            }), e.wxreq({
                pathname: "YinianProject/yinian/ShowPhotoAndVideoWallByUserTime",
                data: {
                    groupid: wx.getStorageSync("groupid"),
                    uploadTime: t.data.date,
                    pagenum: t.data.pagenum
                }
            }).then(function(a) {
                if (0 == a.data.length) wx.showToast({
                    title: "已加载全部照片",
                    duration: 2500
                }), t.setData({
                    timeloading: !1
                }); else {
                    var e = a.data;
                    if (e.length > 0) for (var o = 0, s = e.length; o < s; o++) {
                        e[o].uploadtime = e[o].uploadtime.split(" ")[0];
                        for (var i = 0, n = e[o].picList.length; i < n; i++) {
                            var r = e[o].picList[i], p = r.thumbnail;
                            new RegExp("(mp4|MP4|3gp|3GP)").test(p) ? (r.thumbnail = r.pcover ? r.pcover : "http://oibl5dyji.bkt.clouddn.com/20170927095849.png", 
                            r.myMain = 4) : r.myMain = 0;
                        }
                    }
                    t.setData({
                        photopagedata_people: e,
                        timeloading: !1
                    }), wx.hideToast();
                }
            });
        }
    },
    photopeopleBymonth: function() {
        var t = this;
        console.log(t.data.hasmorephoto, t.data.timeloading), t.data.hasmorephoto ? t.data.timeloading || (t.setData({
            timeloading: !0
        }), wx.showToast({
            title: "加载中",
            icon: "loading",
            duration: 6e4
        }), e.wxreq({
            pathname: "YinianProject/yinian/ShowPhotoAndVideoWallByUserTime",
            data: {
                groupid: wx.getStorageSync("groupid"),
                uploadTime: t.data.date,
                pagenum: t.data.pagenum + 1
            }
        }).then(function(a) {
            if (t.setData({
                timeloading: !1
            }), 0 == a.data.length) wx.showToast({
                title: "已加载全部照片",
                duration: 2500
            }), t.setData({
                hasmorephoto: !1
            }); else {
                t.setData({
                    pagenum: t.data.pagenum + 1
                });
                var e = a.data;
                if (e.length > 0) for (var o = 0, s = e.length; o < s; o++) {
                    e[o].uploadtime = e[o].uploadtime.split(" ")[0];
                    for (var i = 0, n = e[o].picList.length; i < n; i++) {
                        var r = e[o].picList[i], p = r.thumbnail;
                        new RegExp("(mp4|MP4|3gp|3GP)").test(p) ? (r.thumbnail = r.pcover ? r.pcover : "http://oibl5dyji.bkt.clouddn.com/20170927095849.png", 
                        r.myMain = 4) : r.myMain = 0;
                    }
                }
                t.setData({
                    photopagedata_people: t.data.photopagedata_people.concat(e)
                }), wx.hideToast();
            }
        })) : wx.showToast({
            title: "已加载全部照片",
            duration: 2500
        });
    },
    lookbigpic: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.picitemindex, e = t.currentTarget.dataset.picindex, o = void 0;
        if (this.data.showTimeData) {
            o = this.data.photopagedata_day;
            for (var s = this, i = [], n = 0, r = 0; r < o[a].picture.length; r++) {
                var p = o[a].picture[r];
                4 != p.eMain ? i.push(p) : r < e && n++;
            }
            return wx.setStorageSync("lookImgs", i), e -= n, clearTimeout(s.timer), s.fromlast = 1, 
            void wx.navigateTo({
                url: "/pages/others/lookmidpic/lookmidpic?current=" + e
            });
        }
        o = this.data.photopagedata_people;
        for (var l = this, u = [], d = 0, c = 0; c < o[a].picList.length; c++) {
            var h = o[a].picList[c];
            4 != h.myMain ? u.push(h) : c < e && d++;
        }
        return wx.setStorageSync("lookImgs", u), e -= d, clearTimeout(l.timer), l.fromlast = 1, 
        void wx.navigateTo({
            url: "/pages/others/lookmidpic/lookmidpic?current=" + e
        });
    },
    clicloadkmore: function(t) {
        var a = this;
        a.fromlast = 1, wx.navigateTo({
            url: "/pages/photowall/morephoto/morephoto?groupid=" + a.data.groupid + "&uploadtime=" + t.currentTarget.dataset.euploadtime
        });
    },
    uploadpic: function(t) {
        var a = this;
        if (wx.getStorageSync("userid")) {
            var e;
            e = "pai" == (t = t || event).currentTarget.dataset.pic ? "camera" : "album", this.fromlast = 1, 
            wx.chooseImage({
                count: 9,
                sizeType: [ "original" ],
                sourceType: [ e ],
                success: function(t) {
                    var e = t.tempFilePaths;
                    wx.removeStorageSync("uploadchoosedpic"), wx.setStorage({
                        key: "uploadchoosedpic",
                        data: e,
                        success: function() {
                            a.setData({
                                pvShowModel: !1
                            }), wx.navigateTo({
                                url: "/pages/uploadpic/uploadpic?lastPage=photowall"
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
        var a = this;
        if (wx.getStorageSync("userid")) {
            var e;
            e = "pai" == (t = t || event).currentTarget.dataset.video ? "camera" : "album", 
            this.fromlast = 1, wx.chooseVideo({
                sourceType: [ e ],
                maxDuration: 60,
                camera: "back",
                success: function(t) {
                    var e = t.tempFilePath;
                    wx.setStorage({
                        key: "uploadchoosedvideo",
                        data: e,
                        success: function() {
                            a.setData({
                                pvShowModel: !1
                            }), wx.navigateTo({
                                url: "/pages/uploadvideo/uploadvideo?lastPage=photowall"
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
    chooselookToDelete: function() {
        var t = this;
        0 != t.data.photopagedata_day.length ? (this.looktodelete = !this.looktodelete, 
        this.setData({
            looktodelete: t.looktodelete
        })) : wx.showModal({
            title: "提示",
            content: "上传照片以后就能正常使用了！",
            showCancel: !1
        });
    },
    selectpic: function(a) {
        var e, o = a.target.dataset.itemindex, s = a.target.dataset.picindex, i = this, n = this.data.photopagedata_day;
        console.log(n), n[o].picture[s].selected ? i.looktodeletenum-- : i.looktodeletenum++, 
        n[o].picture[s].selected = !n[o].picture[s].selected, this.setData((e = {}, t(e, "photopagedata_day", n), 
        t(e, "looktodeletenum", i.looktodeletenum), e));
    },
    makelooktodeletepic: function() {
        var t = this;
        if (0 !== t.data.looktodeletenum) {
            if ("month" == t.data.lookway) a = t.data.photopagedata; else var a = t.data.photopagedata_day;
            wx.navigateTo({
                url: "../commonpage/makeBurnAfterRead/make",
                success: function(e) {
                    var o = [];
                    setTimeout(function() {
                        var e = getCurrentPages();
                        a.forEach(function(t) {
                            t.picture.forEach(function(t) {
                                t.selected && o.push(t.pid);
                            });
                        }), t.setData({
                            looktodelete: !1
                        });
                        var s = t.looktodeletenum;
                        e[e.length - 1].setData({
                            pid: o,
                            picnum: s
                        });
                    }, 1e3);
                }
            });
        } else wx.showModal({
            title: "错误",
            content: "上传照片以后就能正常使用了！",
            showCancel: !1
        });
    },
    returnhome: function() {
        wx.reLaunch ? wx.reLaunch({
            url: "/pages/index/index"
        }) : wx.navigateBack({
            delta: 10
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
    showPvModel: function() {
        var t = this;
        if (0 != t.data.ablumInfo.inBlackList) if (s.isUp) wx.showToast({
            title: "正在上传中喔~"
        }); else if (2 == t.data.ablumInfo.gOrigin && t.closeIntroUpload(), 1 != wx.getStorageSync("gAuthority") || wx.getStorageSync("userid") == wx.getStorageSync("createrid")) {
            if (2 == wx.getStorageSync("gAuthority")) {
                var a = wx.getStorageSync("authorityList");
                if (0 == a.length) return;
                for (var e = 0; e < a.length; e++) a[e].userid == wx.getStorageSync("userid") && (t.quanxian = !0);
                if (!t.quanxian) return void wx.showModal({
                    title: "提示",
                    content: "没有上传照片的权限",
                    showCancel: !1
                });
            }
            t.setData({
                pvShowModel: !0
            });
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
    seeBigVideo: function(t) {
        var a = t.currentTarget.dataset.url;
        wx.setStorageSync("videourl", a), wx.navigateTo({
            url: "/pages/viewscoll/bigvideo/bigvideo"
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
    fasttoknow: function() {
        var t = this;
        console.log("fasttoknow"), t.setData({
            showDisposeModel: !0,
            usernumber: o.usernumber
        }), clearInterval(t.timerinterval), t.timerinterval = null, t.usernumberchange();
    },
    usernumberchange: function() {
        var t = this;
        t.timerinterval = setInterval(function() {
            if (t.data.usernumber > t.data.maxnumber) {
                clearInterval(t.timerinterval), t.timerinterval = null;
                var a = t.toThousands(t.data.maxnumber);
                console.log(a), t.setData({
                    usernumber: a
                });
            } else t.data.usernumber += 323456, t.setData({
                usernumber: t.data.usernumber
            });
        }, 100);
    },
    toThousands: function(t) {
        for (var t = (t || 0).toString(), a = ""; t.length > 3; ) a = "," + t.slice(-3) + a, 
        t = t.slice(0, t.length - 3);
        return t && (a = t + a), a;
    }
}, t(a, "closeModel", function() {
    console.log("closeModel"), this.setData({
        showDisposeModel: !1,
        classArr: [ "pic1", "pic2", "pic3" ]
    });
}), t(a, "changestart", function(t) {
    console.log(t.changedTouches[0], t), l = t.touches[0].pageX, u = t.touches[0].pageY;
}), t(a, "changemove", function(t) {}), t(a, "changend", function(t) {
    console.log("changend");
    var a = this;
    if (d = t.changedTouches[0].pageX, c = t.changedTouches[0].pageY, console.log(d, c), 
    l - d > 30) {
        if ("pic2" == a.data.classArr[0]) return;
        a.data.classArr.unshift(a.data.classArr[a.data.classArr.length - 1]), a.data.classArr.pop(a.data.classArr[a.data.classArr.length - 1]), 
        a.setData({
            classArr: a.data.classArr
        });
    } else if (d - l > 30) {
        if ("pic1" == a.data.classArr[0]) return;
        a.data.classArr.push(a.data.classArr[0]), a.data.classArr.shift(a.data.classArr[0]), 
        a.setData({
            classArr: a.data.classArr
        });
    }
}), t(a, "addgroup", function() {
    wx.getStorageSync("userid") ? wx.navigateTo({
        url: "../makegroup/makegroup?lastPage=photowall"
    }) : wx.showModal({
        title: "错误",
        content: "获取用户授权信息失败！创建相册功能不可用！",
        showCancel: !1
    });
}), t(a, "alertCheckData", function() {
    var t = this;
    t.data.timeloading || t.setData({
        checkFeatures: !0
    });
}), t(a, "cancelCheck", function() {
    this.setData({
        checkFeatures: !1
    });
}), t(a, "bindDateChange", function(t) {
    var a = this;
    console.log("picker发送选择改变，携带值为", t.detail.value, a.data.firstdate), a.setData({
        showMonthTimeData: !0,
        date: t.detail.value
    }), a.data.showTimeData ? (a.getphotoWallDataByMonth(), a.setData({
        photopagedata_day: []
    })) : (a.photopeopleBymonthFirst(), a.setData({
        photopagedata_people: []
    }));
}), a));