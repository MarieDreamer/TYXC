var t = require("../../../utils/util.js"), o = getApp();

Page({
    data: {
        showAudioModelBox: !1,
        sucessState: !1,
        showpuzze: !1
    },
    onLoad: function(t) {
        o.stat.statpv({
            route: this.route,
            options: t
        });
        var e = this;
        e.fromState = 0, t.eid && (e.eid = t.eid, e.groupid = t.groupid);
    },
    onShow: function() {
        var e = this;
        o.getshowState(function(t) {
            e.setData({
                showpuzze: t
            });
        }), e.eid ? e.fromState ? setTimeout(function() {
            e.fromState = 0;
        }, 1e3) : t.wxreq({
            pathname: "YinianProject/event/GetActivitySpaceSingleEventContent",
            data: {
                eid: e.eid
            }
        }).then(function(t) {
            console.log(t);
            var o = t.data[0];
            e.setData({
                dataList: o
            });
        }) : wx.showToast({
            title: "没有获取到参数"
        });
    },
    introAlert: function() {
        wx.showModal({
            title: "提示",
            content: "下载忆年APP查看详情",
            showCancel: !1
        });
    },
    showAudioModel: function() {
        this.setData({
            showAudioModelBox: !0
        });
    },
    closeAudioBox: function() {
        this.setData({
            showAudioModelBox: !1
        });
    },
    prewImg: function() {
        var t = this;
        t.fromState = 1;
        var o = [];
        t.data.dataList.picList.forEach(function(t, e) {
            o.push(t.midThumbnail);
        }), wx.previewImage({
            urls: o
        });
    },
    takePic: function() {
        var t = this;
        t.groupid ? (t.fromState = 1, wx.chooseImage({
            count: 1,
            sizeType: [ "original" ],
            sourceType: [ "camera" ],
            success: function(o) {
                var e = o.tempFilePaths[0];
                wx.showToast({
                    title: "图片对比中",
                    icon: "loading",
                    duration: 12e4
                }), wx.uploadFile({
                    url: "https://api.zhuiyinanian.com/YinianProject/event/ScanForEvent",
                    filePath: e,
                    name: "uploadFile",
                    formData: {
                        groupid: t.groupid || 16876
                    },
                    success: function(o) {
                        var e = JSON.parse(o.data);
                        wx.hideToast(), console.log(e), e.data.length > 0 ? (wx.showModal({
                            title: "提示",
                            content: "匹配成功",
                            showCancel: !1
                        }), t.setData({
                            sucessState: !0
                        })) : wx.showModal({
                            title: "提示",
                            content: "匹配失败，请重新拍照",
                            showCancel: !1
                        });
                    },
                    fail: function(t) {
                        wx.hideToast(), wx.showModal({
                            title: "提示",
                            content: t.errMsg,
                            showCancel: !1
                        });
                    }
                });
            }
        })) : wx.showToast({
            title: "没有获取到相册id"
        });
    }
});