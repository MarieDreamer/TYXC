function e(e) {
    if (Array.isArray(e)) {
        for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
        return a;
    }
    return Array.from(e);
}

var t = require("../../icon.js"), a = require("../../publish.js"), n = getApp(), s = void 0;

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
        images: [],
        jurisdiction: {
            andFriends: !1,
            publishedTime: !1
        }
    },
    onLoad: function(e) {
        n.stat.statpv({
            route: this.route,
            options: e
        }), s = this;
        var i = wx.getStorageSync("uploadchoosedpic") || [];
        s.setData({
            ICON: t.ICON,
            groupId: e.groupId,
            images: i,
            albumType: e.albumType
        }), s.generatePermissions(e.albumType), (0, a.previousPageNoRefresh)();
    },
    onReady: function() {},
    onShow: function() {
        s.readSelectedSyncAlbum();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getInputText: function(e) {
        s.setData({
            text: e.detail
        });
    },
    getLocation: function(e) {
        s.setData({
            location: e.detail.result
        });
    },
    getDatetime: function(e) {
        s.setData({
            publishTime: e.detail
        });
    },
    getAndFriends: function(e) {
        if (e.detail.length = 0) {
            var t = s.data.selectedFriends;
            t.length = 0, s.setData({
                selectedFriends: t
            }), console.log(s.data.selectedFriends);
        } else s.setData({
            selectedFriends: e.detail
        });
    },
    getSelectedSyncAlbums: function(e) {
        var t = s.data.selectedSyncAlbums;
        t.groupIds = e.detail.groupIds, t.groupNames = e.detail.result, s.setData({
            selectedSyncAlbums: t
        });
    },
    selectImages: function() {
        var t = s.data.images, a = 0;
        t.length < 18 ? a = 9 : t.length >= 18 && t.length < 28 ? a = 9 - t.length % 9 : wx.showToast({
            title: "最多上传27张",
            image: "/images/toast_warning.png"
        }), wx.chooseImage({
            count: a,
            sizeType: [ "original" ],
            sourceType: [ "album" ],
            success: function(a) {
                t.push.apply(t, e(a.tempFilePaths)), s.setData({
                    images: t
                });
            }
        });
    },
    deleteImage: function(e) {
        var t = e.currentTarget.dataset.index, a = s.data.images;
        a = a.filter(function(e, a) {
            return t != a;
        }), s.setData({
            images: a
        });
    },
    readSelectedSyncAlbum: function() {
        var e = s.data.selectedSyncAlbums;
        wx.getStorageSync("strName") && (e.groupNames = wx.getStorageSync("strName").replace(/\//g, "、"));
        var t = wx.getStorageSync("strId");
        e.groupIds = t || s.data.groupId, s.setData({
            selectedSyncAlbums: e
        });
    },
    generateAndFriendIds: function() {
        var e = s.data.selectedFriends, t = "";
        e.forEach(function(a, n) {
            n != e.length - 1 ? t += a.userid + "," : t += a.userid + "";
        }), s.setData({
            selectedFriendIds: t
        });
    },
    formSubmit: function(e) {
        s.generateAndFriendIds();
        var t = s.data.images;
        if (0 !== t.length) {
            var a = e.detail.formId, i = s.data.text, r = s.data.location, o = s.data.selectedFriendIds, d = s.data.publishTime, l = s.data.selectedSyncAlbums.groupIds;
            console.log(o), n.upState = 2, n.fromUp = "pic", n.upObj = {
                formID: a,
                content: i,
                place: r,
                attentionMember: o,
                publishedTime: d,
                mainIdStr: l,
                picarr: t
            }, wx.getStorageSync("userid") ? wx.navigateBack({
                delta: 1
            }) : wx.showModal({
                title: "提示",
                content: "请先授权",
                showCancel: !1
            });
        } else wx.showToast({
            title: "请添加图片",
            image: "/images/toast_warning.png"
        });
    },
    generatePermissions: function(e) {
        var t = [ 2, 3, 4, 5, 11 ], a = [ 2, 4 ], n = parseInt(e), i = s.data.jurisdiction;
        t.includes(n) && (i.publishedTime = !0), a.includes(n) && (i.andFriends = !0), s.setData({
            jurisdiction: i
        });
    }
});