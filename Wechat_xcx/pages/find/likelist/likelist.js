var t = require("../../../utils/util.js"), i = (require("../../../utils/api.js"), 
getApp());

Page({
    data: {
        likelist: "",
        liking: !1
    },
    onLoad: function(t) {
        if (i.stat.statpv({
            route: this.route,
            options: t
        }), wx.getStorageSync("groupid") && wx.getStorageSync("userid")) {
            this.searchLimit = t.searchLimit ? t.searchLimit : 100, this.urlTitle = t.urlTitle;
            var e = this;
            wx.setNavigationBarTitle({
                title: e.urlTitle
            }), wx.request({
                url: "https://api.zhuiyinanian.com/YinianProject/space/GetGroupLikeList",
                data: {
                    groupid: wx.getStorageSync("groupid"),
                    uid: wx.getStorageSync("userid"),
                    searchLimit: e.searchLimit
                },
                success: function(t) {
                    if (0 == t.data.code) {
                        var i = t.data.data;
                        e.setData({
                            likelist: i
                        });
                    }
                }
            });
        } else wx.showModal({
            title: "提示",
            content: "获取用户信息失败",
            showCancel: !1,
            success: function() {
                wx.navigateBack({
                    delta: 1
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    like: function(i) {
        var e = i.currentTarget.dataset.likecatagry, a = i.currentTarget.dataset.childindex, s = this.data.likelist[a].eid, n = this;
        e && (n.data.liking || (n.data.liking = !0, t.wxreq({
            pathname: "YinianProject/yinian/AttachOrRemoveExpressionByLkNew",
            data: {
                type: e,
                userid: wx.getStorageSync("userid"),
                eid: s
            }
        }).then(function(t) {
            0 == t.code && wx.showToast({
                title: "点赞成功",
                icon: "success",
                duration: 1e3
            }), n.data.likelist[a].like = [ 1 ], n.data.likelist[a].cnt++, n.setData({
                likelist: n.data.likelist
            }), setTimeout(function() {
                n.data.liking = !1;
            }, 500);
        })));
    },
    seebigpic: function(t) {
        console.log(t);
        var i = this, e = t.currentTarget.dataset.a, a = t.currentTarget.dataset.b, s = [];
        this.data.likelist[e].pictures.forEach(function(t) {
            s.push(t.midThumbnail);
        }), wx.previewImage({
            current: i.data.likelist[e].pictures[a].midThumbnail,
            urls: s
        });
    }
});