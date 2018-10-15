var t = getApp(), e = require("../template/tabbar.js");

require("../../js/global.js");

Page({
    data: {
        before_request: 1,
        page: 0,
        listend: 0,
        lists: []
    },
    onLoad: function() {
        e.tabbar("tabBar", 3, this), this.AjaxGet();
    },
    AjaxGet: function() {
        var e = this, a = e.data.page, s = e.data.listend, i = e.data.before_request;
        0 == s && 1 == i && (a += 1, e.setData({
            before_request: 0,
            more: ""
        }), t.sendNoRequest({
            url: "/index.php?m=Mobile&c=Index&a=articlelist&t=" + Math.random(),
            method: "POST",
            data: {
                p: a
            },
            success: function(t) {
                if (1 == t.status) {
                    var s;
                    s = 1 == a ? t.lists : e.data.lists.concat(t.lists), e.setData({
                        lists: s,
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
    }
});