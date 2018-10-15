var e = getApp(), t = require("../../js/global.js");

Page({
    data: {
        type: "",
        before_request: 1,
        page: 0,
        listend: 0,
        more: "none",
        lists: ""
    },
    onLoad: function(e) {
        var a = "";
        t.isBlank(e.type) || (a = e.type), this.setData({
            type: a
        }), this.AjaxGet();
    },
    AjaxGet: function() {
        var t = this, a = t.data.page, s = t.data.listend, r = t.data.before_request;
        0 == s && 1 == r && (a += 1, t.setData({
            before_request: 0,
            more: ""
        }), e.sendNoRequest({
            url: "/index.php?m=Mobile&c=User&a=myquery&t=" + Math.random(),
            method: "POST",
            data: {
                p: a,
                type: t.data.type
            },
            success: function(e) {
                if (1 == e.status) {
                    var s = {};
                    s = "" == t.data.lists ? e.lists : t.data.lists.concat(e.lists), t.setData({
                        lists: s,
                        page: a
                    });
                } else t.setData({
                    listend: 1
                });
            },
            complete: function(e) {
                t.setData({
                    before_request: 1,
                    more: "none"
                });
            }
        }));
    },
    onReachBottom: function() {
        this.AjaxGet();
    },
    GoUrl: function(e) {
        var t = e.currentTarget.dataset.type;
        wx.redirectTo({
            url: "/pages/myquery/myquery?type=" + t
        });
    }
});