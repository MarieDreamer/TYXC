var t = getApp(), e = require("../../js/global.js"), a = require("../template/tabbar.js");

Page({
    data: {
        page: 1,
        before_request: 1,
        listend: 0,
        status: "",
        show: {
            ALL: "topanv-this"
        }
    },
    onLoad: function(s) {
        var o = 0, r = 0;
        o = e.isBlank(s.status) ? -1 : s.status, e.isBlank(s.order_id) || (r = s.order_id);
        var i = this, n = {};
        t.sendRequest({
            url: "/index.php?m=Mobile&c=User&a=comment_list&status=" + o + "&order_id=" + r + "&t=" + Math.random(),
            success: function(e) {
                1 == e.status ? (i.setData(e.Comment), e.order && i.setData({
                    order: e.order
                })) : -100 == e.status ? (t.globalData.tUrl = "/pages/comment_list/comment_list?status=" + o, 
                wx.redirectTo({
                    url: "/pages/login/login"
                })) : i.setData({
                    listend: 1
                });
            }
        }), n.status = o, n.order_id = r, o > -1 && (n["show.type" + o] = "topanv-this", 
        n["show.ALL"] = ""), i.setData(n), a.tabbar("tabBar", 3, this);
    },
    onReachBottom: function() {
        this.AjaxCommentList();
    },
    AjaxCommentList: function() {
        var e = this, a = e.data.page, s = e.data.status, o = e.data.order_id, r = e.data.listend, i = e.data.before_request;
        0 == r && 1 == i && (e.setData({
            before_request: 0
        }), a += 1, t.sendRequest({
            url: "/index.php?m=Mobile&c=User&a=comment_list&status=" + s + "&order_id=" + o + "t=" + Math.random(),
            data: {
                p: a
            },
            success: function(o) {
                if (e.setData({
                    before_request: 1
                }), 1 == o.status) {
                    var r = e.data.comment_list.concat(o.Comment.comment_list);
                    e.setData({
                        comment_list: r,
                        page: a
                    });
                } else -100 == o.status ? (t.globalData.tUrl = "/pages/comment_list/comment_list?status=" + s, 
                wx.redirectTo({
                    url: "/pages/login/login"
                })) : e.setData({
                    listend: 1
                });
            }
        }));
    }
});