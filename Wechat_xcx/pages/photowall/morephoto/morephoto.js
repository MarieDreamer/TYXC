var t = require("../../../utils/util.js"), a = getApp();

require("../../../utils/api.js"), require("../../../utils/reg.js");

Page({
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
        showTimeData: !0,
        checkFeatures: !1,
        date: "2018-02",
        pagenum: 1,
        showMonthTimeData: !1,
        hasmorephoto: !0
    },
    onLoad: function(t) {
        a.stat.statpv({
            route: this.route,
            options: t
        });
        var o = this;
        this.looktodelete = !1, this.groupid = t.groupid, this.uploadtime = t.uploadtime, 
        this.setData({
            date: t.uploadtime
        }), this.groupid && wx.setStorageSync("groupid", this.groupid), this.looktodeletenum = 0, 
        o.setData({
            winHeight: a.globalData.systemInfo.screenHeight,
            r2p: a.globalData.systemInfo.windowWidth / 750,
            groupid: o.groupid
        }), wx.canIUse && wx.canIUse("button.open-type.share") && o.setData({
            canIUse: !0
        });
    },
    onShow: function() {
        var t = this;
        a.getshowState(function(a) {
            t.setData({
                showpuzze: a
            });
        }), this.groupid ? (wx.setStorageSync("groupid", this.groupid), 1 != t.fromlast ? t.getphotoWallDataByDay() : t.timer = setTimeout(function() {
            t.fromlast = 0;
        }, 100)) : wx.showModal({
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
    onUnload: function() {},
    scrollTop: function(t) {
        var o = 750 / a.globalData.systemInfo.windowWidth, e = t.detail.scrollTop;
        e > 462 / o ? this.data.showTop && this.setData({
            showTop: !1
        }) : this.data.showTop || this.setData({
            showTop: !0
        });
    },
    lookTimeData: function() {
        var t = this;
        this.setData({
            photopagedata_people: [],
            showTimeData: !0,
            showMonthTimeData: !0
        }), t.getphotoWallDataByDay();
    },
    getphotoWallDataByDay: function() {
        var a = this;
        this.loadingDataByDay = !1, wx.showToast({
            title: "加载中...",
            icon: "loading",
            duration: 6e4
        }), t.wxreq({
            pathname: "YinianProject/yinian/ShowPhotoAndVideoWallMore",
            data: {
                groupid: a.groupid,
                uploadtime: a.uploadtime,
                pagenum: 1,
                hasmorephoto: !0
            }
        }).then(function(t) {
            wx.hideToast();
            var o = t.data;
            a.setData({
                photopagedata_day: o
            }), wx.hideToast();
        });
    },
    lookbigpic: function(t) {
        console.log(t);
        for (var a = t.currentTarget.dataset.picindex, o = this.data.photopagedata_day, e = this, i = [], s = 0, n = 0; n < o.length; n++) {
            var d = o[n];
            4 != d.pMain ? i.push(d) : n < a && s++;
        }
        wx.setStorageSync("lookImgs", i), a -= s, clearTimeout(e.timer), e.fromlast = 1, 
        wx.navigateTo({
            url: "/pages/others/lookmidpic/lookmidpic?current=" + a
        });
    },
    photoageitem: function() {
        var a = this;
        a.data.hasmorephoto ? a.loadingDataByDay || (a.loadingDataByDay = !0, wx.showToast({
            title: "加载中",
            icon: "loading",
            duration: 6e4
        }), t.wxreq({
            pathname: "YinianProject/yinian/ShowPhotoAndVideoWallMore",
            data: {
                groupid: a.groupid,
                uploadtime: a.uploadtime,
                pagenum: a.data.pagenum + 1
            }
        }).then(function(t) {
            if (a.loadingDataByDay = !1, 0 == t.data.length) wx.showToast({
                title: "已加载全部照片",
                duration: 2500
            }), a.setData({
                hasmorephoto: !1
            }); else {
                a.setData({
                    pagenum: a.data.pagenum + 1
                });
                var o = t.data;
                a.setData({
                    photopagedata_day: a.data.photopagedata_day.concat(o)
                }), wx.hideToast();
            }
        })) : wx.showToast({
            title: "已加载全部照片",
            duration: 2500
        });
    },
    seeBigVideo: function(t) {
        var a = t.currentTarget.dataset.url;
        wx.setStorageSync("videourl", a), wx.navigateTo({
            url: "/pages/viewscoll/bigvideo/bigvideo"
        });
    }
});