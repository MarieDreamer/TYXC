var t = function() {
    function t(t, a) {
        var e = [], i = !0, o = !1, s = void 0;
        try {
            for (var n, r = t[Symbol.iterator](); !(i = (n = r.next()).done) && (e.push(n.value), 
            !a || e.length !== a); i = !0) ;
        } catch (t) {
            o = !0, s = t;
        } finally {
            try {
                !i && r.return && r.return();
            } finally {
                if (o) throw s;
            }
        }
        return e;
    }
    return function(a, e) {
        if (Array.isArray(a)) return a;
        if (Symbol.iterator in Object(a)) return t(a, e);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), a = require("../../utils/util.js"), e = require("../../utils/api.js"), i = 0, o = 0, s = 0, n = 0, r = 0, d = 0, c = 0, h = 0, l = getApp();

Page({
    data: {
        bpic: [],
        activeList: [],
        imgWidth: 345,
        loadImgState: !1,
        showLoadMore: !1,
        isactive: !1,
        animationData: {},
        pic1top: 0,
        pic1left: "75rpx",
        pic1opacity: 1,
        discoverData: [],
        discoverDataloading: !1,
        hasoperate: !1,
        iffirstappear: !0,
        showPlayVideoModal: !1,
        starttime: 0,
        endtime: 0,
        hasactiveList: !0,
        textArr: [ "精彩内容正在赶来...", "稍等一下啦...", "小忆正在加载中..." ]
    },
    onLoad: function(t) {
        // var a = this;
        // l.stat.statpv({
        //     route: this.route,
        //     options: t
        // }), this.commentList = [], wx.getSystemInfo({
        //     success: function(t) {
        //         var e = 750 / t.windowWidth, i = t.windowHeight * e;
        //         a.setData({
        //             rpp: e,
        //             minHeight: i
        //         });
        //     }
        // }), this.mgb = 68, this.fromDetail = !1, this.setData({
        //     loadImgState: !1,
        //     showLoadMore: !1
        // }), this.loadnewestData();
    },
    onShow: function() {
        // if (wx.getStorageSync("userid")) {
        //     var t = this, e = a.randomNum(0, 2);
        //     t.setData({
        //         promptText: e
        //     });
        //     var i = wx.createAnimation({
        //         duration: 0,
        //         timingFunction: "linear"
        //     });
        //     t.animation = i, this.fromDetail ? setTimeout(function() {
        //         t.fromDetail = !1;
        //     }, 150) : t.loadingPic = !1;
        // } 
        // else wx.showModal({
        //     title: "提示",
        //     content: "获取用户id不成功",
        //     showCancel: !1,
        //     success: function() {
        //         wx.switchTab({
        //             // url: "/pages/index/index"
        //         });
        //     }
        // });
    },
    onHide: function() {},
    onUnload: function() {},
    preRefresh: function() {
        this.fromDetail = !0;
    },
    onPullDownRefresh: function() {
        this.data.isactive ? wx.stopPullDownRefresh() : (this.loadnewestData(), wx.stopPullDownRefresh());
    },
    onReachBottom: function() {
        var t = this;
        t.data.isactive || t.loadingPic || (this.loadingPic = !0, (t = this).setData({
            showLoadMore: !0
        }), wx.request({
            url: e.getUrl("YinianProject/event/ShowMoments_sim"),
            data: {
                userid: wx.getStorageSync("userid"),
                eid: t.commentList[t.commentList.length - 1].eid,
                type: "loading"
            },
            success: function(a) {
                if (0 != a.data.code) return t.setData({

                    showLoadMore: !1
                }), 
                // wx.showModal({
                //     title: "提示",
                //     content: "网络错误，请稍后重试",
                //     showCancel: !1
                // }), 
                void (t.loadingPic = !1);
                if (0 == a.data.data.length) t.setData({
                    showLoadMore: !1
                }), wx.showToast({
                    title: "已加载全部照片",
                    duration: 2500
                }); else {
                    var e = a.data.data;
                    if (e.length > 0) for (var r = 0, d = e.length; r < d; r++) if (e[r].picList.length > 0) {
                        if (4 == e[r].eMain) {
                            e[r].height = t.data.imgWidth;
                            e[r].picList[0].thumbnail = e[r].picList[0].pcover ? e[r].picList[0].pcover : "http://oibl5dyji.bkt.clouddn.com/20170927144819.png";
                        } else {
                            var c = Math.floor(e[r].picList[0].height * t.data.imgWidth / e[r].picList[0].width);
                            e[r].height = c || t.data.imgWidth;
                        }
                        t.commentList.push(e[r]), (i = i || s) <= (o = o || n) ? (i += e[r].height + t.mgb, 
                        s += e[r].height + t.mgb, t.data.colLeft.push(e[r])) : (o += e[r].height + t.mgb, 
                        n += e[r].height + t.mgb, t.data.colRight.push(e[r]));
                    }
                    t.setData({
                        colLeft: t.data.colLeft,
                        colRight: t.data.colRight,
                        showLoadMore: !1
                    });
                }
                t.loadingPic = !1;
            },
            fail: function() {
                t.setData({
                    showLoadMore: !1
                }), t.loadingPic = !1;
            }
        }));
    },
    toEventDetail: function(a) {
        var e = a.currentTarget.dataset.mydata;
        if (e) {
            var i = e.split(","), o = t(i, 2), s = o[0], n = o[1];
            wx.navigateTo({
                url: "/pages/eventdetail/eventdetail?lastPage=moment&dateindex=0&rowindex=" + s + "&efrom=moment&eid=" + n
            });
        }
    },
    seeBigVideo: function(t) {
        var a = t.currentTarget.dataset.url;
        wx.setStorageSync("videourl", a), wx.navigateTo({
            url: "/pages/viewscoll/bigvideo/bigvideo",
            success: function() {
                this.fromDetail = !0;
            }.bind(this)
        });
    },
    toHuoDong: function() {
        wx.navigateTo({
            url: this.data.activeList[0].bdata
        });
    },
    discovertap: function() {
        wx.stopPullDownRefresh();
        var t = this;
        t.setData({
            isactive: !0,
            loadImgState: !0
        }), t.data.hasoperate && t.setData({
            hasoperate: !1
        });
    },
    newesttap: function() {
        wx.startPullDownRefresh();
        var t = this;
        t.setData({
            isactive: !1,
            loadImgState: !0
        }), t.data.hasoperate && t.leavediscover();
    },
    addgroup: function() {
        wx.navigateTo({
            url: "../makegroup/makegroup"
        });
    },
    changestart: function(t) {
        r = t.touches[0].pageX, d = t.touches[0].pageY;
    },
    changemove: function(t) {},
    changend: function(t) {
        var a = this, e = new Date();
        if (!(e - a.data.endtime < 800)) {
            a.data.endtime = e, c = t.changedTouches[0].pageX, h = t.changedTouches[0].pageY;
            var i = h - d;
            i < -50 ? (a.data.classArr.unshift("shang"), a.setData({
                classArr: a.data.classArr
            }), setTimeout(function() {
                a.data.discoverData.shift(a.data.discoverData[0]), a.data.classArr.shift("shang"), 
                a.setData({
                    classArr: a.data.classArr,
                    discoverData: a.data.discoverData
                });
            }, 300), a.data.discoverData.length <= 10 && !a.data.discoverDataloading && a.loadDiscoverMoreData(), 
            a.data.hasoperate || a.setData({
                hasoperate: !0,
                iffirstappear: !1
            })) : i > 50 && (a.data.classArr.unshift("xia"), a.setData({
                classArr: a.data.classArr
            }), setTimeout(function() {
                a.data.discoverData.shift(a.data.discoverData[0]), a.data.classArr.shift("xia"), 
                a.setData({
                    classArr: a.data.classArr,
                    discoverData: a.data.discoverData
                });
            }, 300), a.data.discoverData.length <= 10 && !a.data.discoverDataloading && a.loadDiscoverMoreData(), 
            a.data.hasoperate || a.setData({
                hasoperate: !0,
                iffirstappear: !1
            }));
        }
    },
    loadDiscoverMoreData: function() {
        var t = this;
        t.setData({
            discoverDataloading: !0
        }), a.wxreq({
            pathname: "YinianProject/newh5/setUserHotPic",
            data: {
                uid: wx.getStorageSync("userid"),
                hid: t.data.discoverData[t.data.discoverData.length - 1].hid
            }
        }).then(function(e) {
            a.wxreq({
                pathname: "YinianProject/newh5/getHotPic",
                data: {
                    uid: wx.getStorageSync("userid"),
                    hid: t.data.discoverData[t.data.discoverData.length - 1].hid
                }
            }).then(function(a) {
                if (0 == a.code) {
                    var e = t.data.discoverData.concat(a.data);
                    t.setData({
                        discoverData: e
                    });
                } else wx.showToast({
                    title: "获取图片失败"
                });
                t.setData({
                    discoverDataloading: !1
                });
            }, function(a) {
                wx.showToast({
                    title: "获取发现图片失败."
                }), t.setData({
                    discoverDataloading: !1
                });
            });
        }, function(t) {});
    },
    loadDiscoverData: function() {
        var t = this;
        a.wxreq({
            pathname: "YinianProject/newh5/getHotPic",
            data: {
                uid: wx.getStorageSync("userid")
            }
        }).then(function(a) {
            if (0 == a.code) {
                var e = t.data.discoverData.concat(a.data);
                t.setData({
                    discoverData: e
                });
            } else wx.showToast({
                title: "获取图片失败"
            });
        }, function(t) {
            wx.showToast({
                title: "获取图片失败."
            });
        });
    },
    leavediscover: function() {
        var t = this;
        a.wxreq({
            pathname: "YinianProject/newh5/setUserHotPic",
            data: {
                uid: wx.getStorageSync("userid"),
                hid: t.data.discoverData[0].hid
            }
        }).then(function(t) {}, function(t) {});
    },
    enterpreview: function(t) {
        var a = new Array();
        a[0] = t.currentTarget.dataset.hpic, wx.previewImage({
            urls: a
        });
    },
    loadnewestData: function() {
        var t = this;
        i = 0, o = 0, s = 0, n = 0, wx.request({
            url: e.getUrl("YinianProject/event/ShowMoments_sim"),
            data: {
                userid: wx.getStorageSync("userid"),
                eid: 0,
                type: "initialize"
            },
            success: function(a) {
                if (0 == a.data.code) {
                    var e = a.data.data;
                    this.commentList = [];
                    var r = [], d = [];
                    if (e.length > 0) {
                        for (var c = 0, h = e.length; c < h; c++) if (e[c].picList.length > 0) {
                            if (4 == e[c].eMain) {
                                e[c].height = t.data.imgWidth;
                                e[c].picList[0].thumbnail = e[c].picList[0].pcover ? e[c].picList[0].pcover : "http://oibl5dyji.bkt.clouddn.com/20170927144819.png";
                            } else {
                                var l = Math.floor(e[c].picList[0].height * t.data.imgWidth / e[c].picList[0].width);
                                e[c].height = l || t.data.imgWidth;
                            }
                            t.commentList.push(e[c]), i <= o ? (i += e[c].height + t.mgb, s += e[c].height + t.mgb, 
                            r.push(e[c])) : (o += e[c].height + t.mgb, n += e[c].height + t.mgb, d.push(e[c]));
                        }
                        t.setData({
                            hasactiveList: !0
                        });
                    } else t.setData({
                        hasactiveList: !1
                    });
                    t.setData({
                        colLeft: r,
                        colRight: d,
                        loadImgState: !0
                    });
                } 
                // else wx.showModal({
                //     title: "提示",
                //     content: "网络错误，请稍后重试",
                //     showCancel: !1,
                //     success: function() {
                //         wx.switchTab({
                //             // url: "/pages/index/index"
                //         });
                //     }
                // });
            }
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
    savetoablbum: function() {
        var t = this;
        wx.setStorage({
            key: "discoverdata",
            data: t.data.discoverData[0],
            success: function() {
                wx.navigateTo({
                    url: "/pages/others/groupsync2/groupsync2"
                });
            }
        });
    }
});