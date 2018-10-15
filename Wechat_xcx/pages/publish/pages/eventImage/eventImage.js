function e(e) {
    if (Array.isArray(e)) {
        for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
        return a;
    }
    return Array.from(e);
}

var t = require("../../icon.js"), a = require("../../publish.js"), n = getApp(), i = void 0;

Page({
    data: {
        ICON: Object,
        groupId: -1,
        albumType: -1,
        text: "",
        title: "",
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
        }), i = this;
        var s = wx.getStorageSync("uploadchoosedpic") || [];
        i.setData({
            ICON: t.ICON,
            groupId: e.groupId,
            images: s,
            albumType: e.albumType
        }), i.generatePermissions(e.albumType), (0, a.previousPageNoRefresh)();
    },
    onReady: function() {},
    onShow: function() {
        i.readSelectedSyncAlbum();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    inputTitle: function(e) {
        i.setData({
            title: e.detail.value
        });
    },
    getInputText: function(e) {
        i.setData({
            text: e.detail
        });
    },
    getLocation: function(e) {
        i.setData({
            location: e.detail.result
        });
    },
    getDatetime: function(e) {
        i.setData({
            publishTime: e.detail
        });
    },
    getAndFriends: function(e) {
        if (e.detail.length = 0) {
            var t = i.data.selectedFriends;
            t.length = 0, i.setData({
                selectedFriends: t
            }), console.log(i.data.selectedFriends);
        } else i.setData({
            selectedFriends: e.detail
        });
    },
    getSelectedSyncAlbums: function(e) {
        var t = i.data.selectedSyncAlbums;
        t.groupIds = e.detail.groupIds, t.groupNames = e.detail.result, i.setData({
            selectedSyncAlbums: t
        });
    },
    selectImages: function() {
        var t = i.data.images, a = 0;
        t.length < 18 ? a = 9 : t.length >= 18 && t.length < 28 ? a = 9 - t.length % 9 : wx.showToast({
            title: "最多上传27张",
            image: "/images/toast_warning.png"
        }), wx.chooseImage({
            count: a,
            sizeType: [ "original" ],
            sourceType: [ "album" ],
            success: function(a) {
                t.push.apply(t, e(a.tempFilePaths)), i.setData({
                    images: t
                });
            }
        });
    },
    deleteImage: function(e) {
        var t = e.currentTarget.dataset.index, a = i.data.images;
        a = a.filter(function(e, a) {
            return t != a;
        }), i.setData({
            images: a
        });
    },
    readSelectedSyncAlbum: function() {
        var e = i.data.selectedSyncAlbums;
        wx.getStorageSync("strName") && (e.groupNames = wx.getStorageSync("strName").replace(/\//g, "、"));
        var t = wx.getStorageSync("strId");
        e.groupIds = t || i.data.groupId, i.setData({
            selectedSyncAlbums: e
        });
    },
    generateAndFriendIds: function() {
        var e = i.data.selectedFriends, t = "";
        e.forEach(function(a, n) {
            n != e.length - 1 ? t += a.userid + "," : t += a.userid + "";
        }), i.setData({
            selectedFriendIds: t
        });
    },
    formSubmit: function(e) {
        i.generateAndFriendIds();
        var t = i.data.images;
        if (0 !== t.length) if (0 !== i.data.title.length) {
            var a = e.detail.formId, s = i.data.title, o = i.data.text, r = i.data.location, d = i.data.selectedFriendIds, l = i.data.publishTime, u = i.data.selectedSyncAlbums.groupIds;
            console.log(d), n.upState = 2, n.fromUp = "event", n.upObj = {
                formID: a,
                textTitle: s,
                content: o,
                place: r,
                attentionMember: d,
                publishedTime: l,
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
            title: "标题不能为空",
            image: "/images/toast_warning.png"
        }); else wx.showToast({
            title: "请添加图片",
            image: "/images/toast_warning.png"
        });
    },
    generatePermissions: function(e) {
        var t = [ 2, 3, 4, 5, 11 ], a = [ 2, 4 ], n = parseInt(e), s = i.data.jurisdiction;
        t.includes(n) && (s.publishedTime = !0), a.includes(n) && (s.andFriends = !0), i.setData({
            jurisdiction: s
        });
    }
});