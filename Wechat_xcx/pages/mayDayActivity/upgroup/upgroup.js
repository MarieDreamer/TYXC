var t = getApp(), e = require("../../../utils/util.js"), i = require("../../../utils/albumsjump.js").albumsjump;

Page({
    data: {
        groupList: []
    },
    onLoad: function(e) {
        var i = this, r = wx.getStorageSync("userid") || 0;
        r && "undefined" !== r && "null" !== r ? (this.getGroupList(r), t.stat.statpv({
            options: e,
            route: i.route
        })) : wx.showModal({
            title: "提示",
            content: "获取信息不成功，请稍后再试",
            showCancel: !1
        });
    },
    onShow: function() {},
    selectGroup: function(t) {
        var e = t.currentTarget.dataset.sel;
        1 != this.data.groupList[e].isActive && (this.data.groupList.forEach(function(t, i) {
            t.isActive = i == e ? 1 : 0;
        }), this.sel = e, this.setData({
            groupList: this.data.groupList
        }));
    },
    toMake: function() {
        wx.redirectTo({
            url: "/pages/makegroup/makegroup?efrom=upgroup"
        });
    },
    getGroupList: function(t) {
        if (t) {
            var i = this;
            e.wxreq({
                pathname: "YinianProject/album/showAllMyAlbums",
                data: {
                    userId: t,
                    groupMemberId: "",
                    isPage: 0
                }
            }).then(function(t) {
                0 == t.code && i.setData({
                    groupList: t.data
                });
            });
        } else console.log("没有传入userId");
    },
    getIsActive: function() {
        for (var t = this.data.groupList, e = 0, i = t.length; e < i; e++) if (1 == t[e].isActive) return !0;
        return !1;
    },
    uppic: function(e) {
        var r = this;
        if (this.getIsActive()) {
            var a = r.data.groupList[r.sel].groupid, o = r.data.groupList[r.sel].groupNewType, s = {
                operation: "twice_page_getin",
                userId: wx.getStorageSync("userid") || 0,
                groupNewType: o,
                groupId: a
            };
            t.stat.request(s), wx.chooseImage({
                sizeType: [ "original" ],
                sourceType: [ "album" ],
                success: function(e) {
                    var r = e.tempFilePaths;
                    t.upState = 2, t.fromUp = "pic", t.upObj = {
                        mainIdStr: a,
                        formID: "",
                        place: "",
                        content: "",
                        picarr: r,
                        attentionMember: "",
                        publishedTime: ""
                    }, i({
                        groupNewType: o,
                        data: {
                            lastPage: "upgroup",
                            from: "grouplist",
                            groupid: a,
                            makeFrom: "specialActivity"
                        },
                        navigator: "redirect"
                    });
                }
            });
        } else wx.showToast({
            title: "至少选择一个",
            duration: 1e3
        });
    }
});