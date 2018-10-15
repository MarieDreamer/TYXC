var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, e = (require("../../utils/api.js"), require("../../utils/util.js")), a = require("../../utils/reg.js"), o = getApp(), n = void 0, i = "";

Page({
    data: {
        choosepic: [],
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
            title: "上传图片"
        }), wx.removeStorageSync("place");
        var a = wx.getStorageSync("uploadchoosedpic") || [];
        e.setData({
            choosepic: a,
            isIphonex: o.globalData.systemInfo.model.toLowerCase().indexOf("iphone x") >= 0
        }), this.lastPage = t.lastPage, this.lastPage = this.lastPage || "null", this.isSubmit = 1, 
        t.port && (this.port = t.port, o.globalData.port = t.port), wx.getStorageSync("strId") && wx.removeStorageSync("strId"), 
        wx.getStorageSync("strName") && wx.removeStorageSync("strName");
        var n = getCurrentPages();
        setTimeout(function() {
            n[n.length - 2].setData({
                fromlast: 1
            }), n[n.length - 2].fromlast = 1;
        }, 150);
    },
    prevent: function() {},
    onShow: function() {
        var t = this, a = wx.getStorageSync("place") || "所在位置";
        wx.getSystemInfo({
            success: function(e) {
                var a = e.system.slice(0, 3);
                t.setData({
                    sys: a
                });
            }
        }), this.setData({
            place: a
        }), wx.getStorageSync("strName") && t.setData({
            nameString: wx.getStorageSync("strName")
        });
        var i = wx.getStorageSync("strId"), s = i || wx.getStorageSync("groupid");
        if (n = s, t.setData({
            idStr: s
        }), 1 == t.isSubmit) {
            t.enterCurrentTimestamp = new Date().getTime();
            var r = wx.getStorageSync("userid"), c = {
                basicInfo: {
                    userid: r,
                    source: this.port ? this.port : "",
                    "isActivityAlbum ": "null",
                    "lastPage ": t.lastPage,
                    timestamp: t.enterCurrentTimestamp,
                    identification: r + "_" + o.enterTimestamp
                },
                type: "enter",
                data: {
                    page: {
                        name: "uploadPage",
                        page_identification: r + "_" + t.enterCurrentTimestamp
                    }
                }
            };
            0 == o.sendValue && e.sendData(r, c), t.button = [];
        } else t.isSubmit = 1;
    },
    onHide: function() {
        1 == this.isSubmit && (console.log("upload_hide"), this.sendLeaveData());
    },
    onUnload: function() {
        wx.removeStorageSync("uploadchoosedpic"), wx.removeStorageSync("place"), wx.removeStorageSync("content"), 
        console.log("upload_unLoad"), this.sendLeaveData();
    },
    sendLeaveData: function() {
        var t = this, a = this.port ? this.port : "", n = wx.getStorageSync("userid"), i = new Date().getTime() - t.enterCurrentTimestamp, s = {
            basicInfo: {
                userid: n,
                source: a,
                " isActivityAlbum ": "null",
                "lastPage ": t.lastPage,
                timestamp: new Date().getTime(),
                identification: n + "_" + o.enterTimestamp
            },
            type: "leave",
            data: {
                page: {
                    name: "uploadPage",
                    page_identification: n + "_" + t.enterCurrentTimestamp
                },
                botton: t.button,
                time: i
            }
        };
        0 == o.sendValue && e.sendData(n, s);
    },
    toUploadSync: function() {
        wx.navigateTo({
            url: "/pages/others/uploadsync/uploadsync?groupid=" + wx.getStorageSync("groupid")
        });
    },
    addpic: function() {
        var t = this;
        t.data.choosepic.length >= 27 ? wx.showModal({
            title: "提示",
            content: "单条动态照片数已达上限",
            showCancel: !1
        }) : wx.chooseImage({
            count: 9,
            sizeType: [ "original" ],
            sourceType: [ "album" ],
            success: function(e) {
                var a = e.tempFilePaths, o = [];
                t.data.choosepic.forEach(function(t) {
                    o.push(t);
                }), a.forEach(function(t) {
                    o.push(t);
                }), t.setData({
                    choosepic: o
                });
            }
        });
    },
    picpdelete: function(t) {
        var e = t.currentTarget.dataset.index, a = [];
        this.data.choosepic.forEach(function(t) {
            a.push(t);
        }), a.splice(e, 1), this.setData({
            choosepic: a
        });
    },
    formSubmit: function(e) {
        console.log(e), "object" == t(this.button) && this.button.push({
            name: "startUpload"
        });
        var s = this;
        if (wx.getStorageSync("userid") && wx.getStorageSync("groupid")) if (i = e.detail.formId, 
        console.log(i), s.data.choosepic.length <= 0) wx.showModal({
            title: "提示",
            content: "至少有一张图片才能上传",
            showCancel: !1
        }); else {
            var r = e.detail.value.text.replace(/\n/g, "").trim();
            a.testStr(r) && (r = ""), wx.setStorage({
                key: "content",
                data: r
            });
            var c = [];
            if (s.data.choosepic.forEach(function(t) {
                c.push(t);
            }), c.length > 90) wx.showModal({
                title: "提示",
                content: "一次上传张数超出限制",
                showCancel: !1
            }); else {
                var l = wx.getStorageSync("place");
                void 0 != l && "不显示位置" != l || (l = ""), o.upState = 2, o.fromUp = "pic", o.upObj = {
                    mainIdStr: n,
                    formID: i,
                    place: l,
                    content: r,
                    picarr: c
                }, wx.getStorageSync("userid") ? wx.navigateBack({
                    delta: 1
                }) : wx.showModal({
                    title: "提示",
                    content: "请先授权",
                    showCancel: !1
                });
            }
        } else wx.showModal({
            title: "提示",
            content: "获取用户信息失败，请稍后重试",
            showCancel: !1
        });
    }
});