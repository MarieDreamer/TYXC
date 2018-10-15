var e, t = getApp(), a = require("../template/tabbar.js"), n = require("../../js/global.js");

Page({
    data: {
        before_request: 1,
        page: 0,
        listend: 0,
        lists: "",
        more: "",
        bshow: "none",
        item: 0
    },
    onLoad: function(e) {
        a.tabbar("tabBar", 0, this);
        var s = this, o = 0;
        if (this.setData({
            options: e
        }), n.isBlank(e.uid)) {
            if (!n.isBlank(e.scene)) {
                var i = decodeURIComponent(e.scene);
                "user" == i.substr(0, 4) && (o = i.substr(5));
            }
        } else o = e.uid;
        if (0 != o && t.setUid(o), void 0 != e.url && "" != e.url && null != e.url) {
            var r = e.url, u = e.id;
            return console.log("/pages/" + r + "/" + r + "?id=" + u), wx.redirectTo({
                url: "/pages/" + r + "/" + r + "?id=" + u
            }), !1;
        }
        t.login().then(function(e) {
            console.log(o), t.loginBindParent(o), t.ShareBonus(o);
        }), t.sendRequest({
            url: "/index.php?m=Mobile&c=Index&a=index",
            success: function(e) {
                1 == e.status && (s.setData(e.Index), s.Tan());
            }
        }), console.log(t.globalData), s.AjaxGet();
    },
    onHide: function() {
        clearTimeout(e);
    },
    onUnload: function() {
        clearTimeout(e);
    },
    SearchInput: function(e) {
        wx.redirectTo({
            url: "/pages/goodslist/goodslist?key=" + e.detail.value
        });
    },
    AjaxGet: function() {
        var e = this, a = e.data.page, n = e.data.listend, s = e.data.before_request;
        0 == n && 1 == s && (e.setData({
            before_request: 0,
            more: ""
        }), a += 1, t.sendNoRequest({
            url: "/index.php?m=Mobile&c=Index&a=index&t=" + Math.random(),
            method: "POST",
            data: {
                p: a
            },
            success: function(t) {
                if (1 == t.status) {
                    if ("" != e.data.lists) n = e.data.lists.concat(t.lists); else var n = t.lists;
                    e.setData({
                        lists: n,
                        page: a
                    });
                } else e.setData({
                    listend: 1
                });
            },
            complete: function(t) {
                e.setData({
                    before_request: 1,
                    more: "none"
                });
            }
        }));
    },
    onReachBottom: function() {
        this.AjaxGet();
    },
    onShareAppMessage: function() {
        return {
            title: "去猜吧",
            path: "/pages/index/index?uid=" + t.globalData.userInfo.user_id
        };
    },
    openAlert: function() {
        wx.showToast({
            title: "正在开发中",
            icon: "none",
            duration: 2e3
        });
    },
    Tan: function() {
        var t = this, a = t.data.item + 1, n = t.data.prize;
        a > n.length - 1 && (a = 0);
        for (var s in n) n[s].show = s == a ? "" : "none";
        t.setData({
            prize: n,
            item: a,
            bshow: ""
        }), setTimeout(function() {
            t.setData({
                bshow: "none"
            });
        }, 2e3), e = setTimeout(function() {
            t.Tan();
        }, 5e3);
    }
});