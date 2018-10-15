var e = require("../../../../utils/util.js"), t = require("../../icon.js"), n = require("../../api.js"), i = void 0, o = getApp();

Page({
    data: {
        ICON: Object,
        title: "",
        text: "",
        location: "",
        publishTime: "",
        groupId: 0,
        albumType: -1,
        selectedFriends: [],
        selectedFriendIds: ""
    },
    onLoad: function(e) {
        o.stat.statpv({
            route: this.route,
            options: e
        }), console.log("options", e), (i = this).setData({
            ICON: t.ICON,
            groupId: e.groupId,
            albumType: e.albumType
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    inputTitle: function(e) {
        var t = e.detail.value;
        i.setData({
            title: t
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
    getAndFriends: function(e) {
        if (console.log("getAndFriends", e), e.detail.length = 0) {
            var t = i.data.selectedFriends;
            t.length = 0, i.setData({
                selectedFriends: t
            });
        } else i.setData({
            selectedFriends: e.detail
        });
    },
    generateAndFriendIds: function() {
        var e = i.data.selectedFriends, t = "";
        e.forEach(function(n, i) {
            i != e.length - 1 ? t += n.userid + "," : t += n.userid + "";
        }), i.setData({
            selectedFriendIds: t
        });
    },
    getDatetime: function(e) {
        console.log("e", e), i.setData({
            publishTime: e.detail
        });
    },
    formSubmit: function(t) {
        if (i.generateAndFriendIds(), 0 !== i.data.text.length) {
            var a = {
                formID: t.detail.formId,
                userId: wx.getStorageSync("userid"),
                groupId: i.data.groupId,
                title: i.data.title,
                content: i.data.text,
                attentionMember: i.data.selectedFriendIds,
                memorytime: (0, e.formatTime)(new Date()),
                publishTime: i.data.publishTime,
                place: i.data.location
            };
            (0, n.publishText)(a).then(function(e) {
                console.log("发布成功", e), wx.showToast({
                    title: "发布成功",
                    complete: function() {
                        o.fromUp = "text", console.log("res", e[0]), console.log("res.eid", e[0].eid), o.text = e, 
                        wx.navigateBack({
                            delta: 1
                        });
                    }
                });
            }).catch(function(e) {
                wx.showToast({
                    title: "发布失败"
                });
            });
        } else wx.showToast({
            title: "请输入文字内容",
            image: "/images/toast_warning.png"
        });
    }
});