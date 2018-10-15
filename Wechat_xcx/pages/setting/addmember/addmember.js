var t = require("../../../utils/util.js"), e = getApp();

Page({
    data: {
        createList: [],
        selectList: [],
        restList: [],
        searchList: [],
        start: !1
    },
    onLoad: function(t) {
        e.stat.statpv({
            route: this.route,
            options: t
        });
    },
    onShow: function() {
        var e = this, a = wx.getStorageSync("gnum");
        if (e.setData({
            gnum: a
        }), a > 100) {
            var s = [], i = [], r = [], c = [];
            t.wxreq({
                pathname: "YinianProject/yinian/ShowInfo",
                data: {
                    userid: wx.getStorageSync("createrid")
                }
            }).then(function(t) {
                s.push({
                    unickname: t.data[0].unickname,
                    upic: t.data[0].upic,
                    userid: wx.getStorageSync("createrid"),
                    select: !0
                }), e.setData({
                    createList: s
                });
            }), t.wxreq({
                pathname: "YinianProject/space/GetSpaceMemberAuthorityList",
                data: {
                    groupid: wx.getStorageSync("groupid"),
                    type: "bigger"
                }
            }).then(function(t) {
                var a = t.data;
                a.length > 0 && a.forEach(function(t) {
                    1 == t.gmauthority && t.userid != wx.getStorageSync("createrid") && i.push({
                        gmauthority: t.gmauthority,
                        unickname: t.unickname,
                        upic: t.upic,
                        userid: t.userid,
                        select: !0
                    });
                }), e.setData({
                    selectList: i,
                    restList: r,
                    searchList: c
                });
            });
        } else {
            var s = [], i = [], r = [];
            t.wxreq({
                pathname: "YinianProject/space/GetSpaceMemberAuthorityList",
                data: {
                    groupid: wx.getStorageSync("groupid"),
                    type: "smaller"
                }
            }).then(function(t) {
                var a = t.data;
                a.length > 0 && a.forEach(function(t) {
                    t.userid == wx.getStorageSync("userid") && s.push({
                        gmauthority: t.gmauthority,
                        unickname: t.unickname,
                        upic: t.upic,
                        userid: t.userid,
                        select: !0
                    }), 1 == t.gmauthority && t.userid != wx.getStorageSync("userid") && i.push({
                        gmauthority: t.gmauthority,
                        unickname: t.unickname,
                        upic: t.upic,
                        userid: t.userid,
                        select: !0
                    }), 0 == t.gmauthority && t.userid != wx.getStorageSync("userid") && r.push({
                        gmauthority: t.gmauthority,
                        unickname: t.unickname,
                        upic: t.upic,
                        userid: t.userid,
                        select: !1
                    });
                }), e.setData({
                    createList: s,
                    selectList: i,
                    restList: r
                });
            });
        }
    },
    searchList: function(e) {
        var a = this, e = e || event;
        if (wx.getStorageSync("userid")) {
            var s = e.detail.value.trim();
            "" != s ? (wx.showToast({
                title: "搜索中...",
                icon: "loading",
                duration: 6e3,
                mask: !0
            }), t.wxreq({
                pathname: "YinianProject/space/SearchSpaceMembers",
                data: {
                    groupid: wx.getStorageSync("groupid"),
                    name: s
                },
                reqtype: "GET"
            }).then(function(t) {
                var e = a.data.selectList, s = [];
                a.data.restList.forEach(function(t) {
                    s.push(t);
                });
                for (var i = t.data, r = t.data, c = 0; c < e.length; c++) s.push(e[c]);
                for (var n = i.length - 1; n >= 0; n--) for (var u = 0; u < s.length; u++) s[u].userid == i[n].userid && r.splice(n, 1);
                a.setData({
                    start: !0,
                    searchList: r
                }), wx.hideToast();
            })) : wx.showToast({
                title: "请输入用户名称"
            });
        } else wx.showModal({
            title: "错误",
            content: "获取用户授权信息失败！请稍后再试",
            showCancel: !1
        });
    },
    addRest: function(t) {
        var e = this, a = (e.data.searchList, t.currentTarget.dataset.add), s = e.data.restList;
        if (e.data.searchList[a].select = !e.data.searchList[a].select, e.setData({
            searchList: e.data.searchList
        }), e.data.searchList[a].select) s.push(e.data.searchList[a]); else for (var i = 0; i < s.length; i++) s[i].userid == e.data.searchList[a].userid && s.splice(i, 1);
        e.setData({
            restList: s
        });
    },
    closeReset: function() {
        this.setData({
            start: !1,
            searchList: [],
            value: ""
        });
    },
    changeSelList: function(t) {
        var e = this, a = t.currentTarget.dataset.sel;
        e.data.selectList[a].select = !e.data.selectList[a].select, e.setData({
            selectList: e.data.selectList
        });
    },
    changeRestList: function(t) {
        var e = this, a = t.currentTarget.dataset.rest;
        e.data.restList[a].select = !e.data.restList[a].select, e.setData({
            restList: e.data.restList
        });
    },
    release: function() {
        var e = this;
        if (e.data.selectList.length > 0) {
            var a = [];
            e.data.selectList.forEach(function(t) {
                t.select || a.push(t.userid);
            }), a.length > 0 && t.wxreq({
                pathname: "YinianProject/space/SetUploadAuthority",
                data: {
                    groupid: wx.getStorageSync("groupid"),
                    userid: a.join(","),
                    authorityType: "part",
                    type: "remove"
                }
            }).then(function(t) {});
        }
        if (e.data.restList.length > 0) {
            var s = [];
            e.data.restList.forEach(function(t) {
                t.select && s.push(t.userid);
            }), s.push(e.data.createList[0].userid), s.push(wx.getStorageSync("createrid")), 
            s.length > 0 && t.wxreq({
                pathname: "YinianProject/space/SetUploadAuthority",
                data: {
                    groupid: wx.getStorageSync("groupid"),
                    userid: s.join(","),
                    authorityType: "part",
                    type: "add"
                }
            }).then(function(t) {});
        }
        wx.navigateBack({
            delta: 1
        });
    }
});