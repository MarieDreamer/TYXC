var e = require("../../icon.js"), t = require("../../publish.js"), a = void 0, i = getApp();

Page({
    data: {
        ICON: Object,
        groupId: -1,
        albumType: -1,
        text: "",
        location: "",
        publishTime: "",
        selectedFriends: [],
        selectedFriendIds: "",
        selectedSyncAlbums: {
            groupNames: "",
            groupIds: ""
        },
        video: {
            tempFilePath: "",
            thumbTempFilePath: "",
            width: 0,
            height: 0,
            size: 0,
            duration: 0
        },
        jurisdiction: {
            andFriends: !1,
            publishedTime: !1
        }
    },
    onLoad: function(n) {
        i.stat.statpv({
            route: this.route,
            options: n
        }), a = this;
        var d = wx.getStorageSync("uploadchoosedvideo");
        d && a.setData({
            video: d
        }), a.setData({
            ICON: e.ICON,
            groupId: n.groupId,
            albumType: n.albumType
        }), a.generatePermissions(n.albumType), (0, t.previousPageNoRefresh)();
    },
    onReady: function() {},
    onShow: function() {
        a.readSelectedSyncAlbum();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getInputText: function(e) {
        a.setData({
            text: e.detail
        });
    },
    getLocation: function(e) {
        a.setData({
            location: e.detail.result
        });
    },
    getDatetime: function(e) {
        a.setData({
            publishTime: e.detail
        });
    },
    getAndFriends: function(e) {
        if (e.detail.length = 0) {
            var t = a.data.selectedFriends;
            t.length = 0, a.setData({
                selectedFriends: t
            }), console.log(a.data.selectedFriends);
        } else a.setData({
            selectedFriends: e.detail
        });
    },
    getSelectedSyncAlbums: function(e) {
        var t = a.data.selectedSyncAlbums;
        t.groupIds = e.detail.groupIds, t.groupNames = e.detail.result, a.setData({
            selectedSyncAlbums: t
        });
    },
    selectVideo: function() {
        a.data.video;
        wx.chooseVideo({
            count: 1,
            sizeType: [ "original" ],
            sourceType: [ "album" ],
            success: function(e) {
                a.setData({
                    video: e
                });
            }
        });
    },
    deleteVideo: function(e) {
        var t = a.data.video;
        t.tempFilePath = "", t.thumbTempFilePath = "", t.width = 0, t.height = 0, t.size = 0, 
        t.duration = 0, a.setData({
            video: t
        });
    },
    readSelectedSyncAlbum: function() {
        var e = a.data.selectedSyncAlbums;
        wx.getStorageSync("strName") && (e.groupNames = wx.getStorageSync("strName").replace(/\//g, "、"));
        var t = wx.getStorageSync("strId");
        e.groupIds = t || a.data.groupId, a.setData({
            selectedSyncAlbums: e
        });
    },
    generateAndFriendIds: function() {
        var e = a.data.selectedFriends, t = "";
        e.forEach(function(a, i) {
            i != e.length - 1 ? t += a.userid + "," : t += a.userid + "";
        }), a.setData({
            selectedFriendIds: t
        });
    },
    formSubmit: function(e) {
        a.generateAndFriendIds();
        var t = a.data.video.tempFilePath;
        if (0 !== t.length) {
            var n = e.detail.formId, d = a.data.text, s = a.data.location, o = a.data.selectedFriendIds, r = a.data.publishTime, u = a.data.selectedSyncAlbums.groupIds;
            i.upState = 2, i.fromUp = "video", i.upObj = {
                formID: n,
                content: d,
                place: s,
                attentionMember: o,
                publishedTime: r,
                mainIdStr: u,
                picarr: t
            }, wx.getStorageSync("userid") ? wx.navigateBack({
                delta: 1
            }) : wx.showModal({
                title: "提示",
                content: "请先授权",
                showCancel: !1
            });
        } else wx.showToast({
            title: "请添加视频",
            image: "/images/toast_warning.png"
        });
    },
    generatePermissions: function(e) {
        var t = [ 2, 3, 4, 5, 11 ], i = [ 2, 4 ], n = parseInt(e), d = a.data.jurisdiction;
        t.includes(n) && (d.publishedTime = !0), i.includes(n) && (d.andFriends = !0), a.setData({
            jurisdiction: d
        });
    }
});