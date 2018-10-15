var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, e = require("../../utils/util.js"), o = getApp(), a = require("../../utils/reg.js");

Page({
    data: {
        choosevideo: "",
        videoPosterImg: "",
        nameString: "",
        idStr: ""
    },
    onLoad: function(t) {
        o.stat.statpv({
            route: this.route,
            options: t
        });
        var e = this;
        wx.setNavigationBarTitle({
            title: "上传视频"
        }), wx.removeStorageSync("place");
        var a = wx.getStorageSync("uploadchoosedvideo");
        e.setData({
            choosevideo: a,
            isIphonex: o.globalData.systemInfo.model.toLowerCase().indexOf("iphone x") >= 0
        }), this.lastPage = t.lastPage, this.lastPage = this.lastPage || "null", this.isSubmit = 1, 
        t.port && (this.port = t.port, o.globalData.port = t.port), wx.getStorageSync("strId") && wx.removeStorageSync("strId"), 
        wx.getStorageSync("strName") && wx.removeStorageSync("strName");
        var i = getCurrentPages();
        setTimeout(function() {
            i[i.length - 2].setData({
                fromlast: 1
            }), i[i.length - 2].fromlast = 1;
        }, 150);
    },
    prevent: function() {},
    onShow: function() {
        var t = this, a = wx.getStorageSync("place") || "所在位置";
        this.setData({
            place: a
        }), wx.getSystemInfo({
            success: function(e) {
                console.log(e);
                var o = e.system.slice(0, 3);
                t.setData({
                    sys: o
                });
            }
        }), wx.getStorageSync("strName") && t.setData({
            nameString: wx.getStorageSync("strName")
        });
        var i = wx.getStorageSync("strId"), s = i || wx.getStorageSync("groupid");
        if (t.setData({
            idStr: s
        }), 1 == t.isSubmit) {
            t.enterCurrentTimestamp = new Date().getTime();
            var n = wx.getStorageSync("userid"), r = {
                basicInfo: {
                    userid: n,
                    source: this.port ? this.port : "",
                    "isActivityAlbum ": "null",
                    "lastPage ": t.lastPage,
                    timestamp: t.enterCurrentTimestamp,
                    identification: n + "_" + o.enterTimestamp
                },
                type: "enter",
                data: {
                    page: {
                        name: "uploadPage",
                        page_identification: n + "_" + t.enterCurrentTimestamp
                    }
                }
            };
            0 == o.sendValue && e.sendData(n, r), t.button = [];
        } else t.isSubmit = 1;
    },
    onHide: function() {
        1 == this.isSubmit && (console.log("uploadvideo_hide"), this.sendLeaveData());
    },
    onUnload: function() {
        console.log("uploadvideo_unLoad"), this.sendLeaveData();
    },
    sendLeaveData: function() {
        var t = this, a = this.port ? this.port : "", i = wx.getStorageSync("userid"), s = new Date().getTime() - t.enterCurrentTimestamp, n = {
            basicInfo: {
                userid: i,
                source: a,
                " isActivityAlbum ": "null",
                "lastPage ": t.lastPage,
                timestamp: new Date().getTime(),
                identification: i + "_" + o.enterTimestamp
            },
            type: "leave",
            data: {
                page: {
                    name: "uploadPage",
                    page_identification: i + "_" + t.enterCurrentTimestamp
                },
                botton: t.button,
                time: s
            }
        };
        0 == o.sendValue && e.sendData(i, n);
    },
    toUploadSync: function() {
        wx.getStorageSync("groupid") ? wx.navigateTo({
            url: "/pages/others/uploadsync/uploadsync?groupid=" + wx.getStorageSync("groupid")
        }) : wx.showModal({
            title: "错误",
            content: "获取用户信息失败！请稍后再试",
            showCancel: !1
        });
    },
    deletVideo: function() {
        wx.removeStorageSync("uploadchoosedvideo"), this.setData({
            choosevideo: ""
        });
    },
    deletPic: function() {
        wx.removeStorageSync("videoPosterImg"), this.setData({
            videoPosterImg: ""
        });
    },
    uploadvideo: function() {
        var t = this;
        wx.getStorageSync("userid") ? wx.chooseVideo({
            sourceType: [ "album", "camera" ],
            maxDuration: 60,
            camera: "back",
            success: function(e) {
                var o = e.tempFilePath;
                wx.setStorage({
                    key: "uploadchoosedvideo",
                    data: o,
                    success: function() {
                        t.setData({
                            choosevideo: o
                        });
                    },
                    fail: function() {
                        wx.showToast({
                            title: "保存视频临时数据失败"
                        });
                    }
                });
            }
        }) : wx.showModal({
            title: "错误",
            content: "获取用户授权信息失败！请稍后再试",
            showCancel: !1
        });
    },
    uploadpic: function() {
        var t = this;
        wx.getStorageSync("userid") ? wx.chooseImage({
            count: 1,
            sizeType: [ "original" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                console.log(e);
                var o = e.tempFilePaths;
                wx.setStorage({
                    key: "videoPosterImg",
                    data: o,
                    success: function() {
                        t.setData({
                            videoPosterImg: o[0]
                        });
                    },
                    fail: function() {
                        wx.showToast({
                            title: "保存图片临时数据失败"
                        });
                    }
                });
            }
        }) : wx.showModal({
            title: "错误",
            content: "获取用户授权信息失败！请稍后再试",
            showCancel: !1
        });
    },
    formSubmit: function(e) {
        "object" == t(this.button) && this.button.push({
            name: "startUpload"
        });
        var i = this;
        if (i.data.choosevideo) {
            var s = e.detail.value.text.replace(/\n/g, "").trim();
            a.testStr(s) && (s = ""), wx.setStorage({
                key: "content",
                data: s
            });
            var n = wx.getStorageSync("place");
            void 0 != n && "不显示位置" != n || (n = ""), o.upState = 2, o.fromUp = "video", o.upObj = {
                mainIdStr: i.data.idStr,
                place: n,
                content: s,
                picarr: i.data.choosevideo,
                cover: i.data.videoPosterImg
            }, wx.getStorageSync("userid") ? wx.navigateBack({
                delta: 1
            }) : wx.showModal({
                title: "提示",
                content: "请先授权",
                showCancel: !1
            });
        } else wx.showModal({
            title: "提示",
            content: "请先添加视频"
        });
    }
});