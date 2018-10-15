function t(t) {
    var e = new Date(), a = new Date(e.getTime() + 24 * t * 60 * 60 * 1e3), s = a.getFullYear(), n = a.getMonth() + 1, r = a.getDate(), i = s + "-";
    return i = n >= 10 ? i + n + "-" : i + "0" + n + "-", r >= 10 ? i += r : i = i + "0" + r, 
    i;
}

var e = getApp();

require("../../js/global.js");

Page({
    data: {
        start: t(-30),
        end: t(0),
        page: 0,
        before_request: 1,
        listend: 0,
        more: "none",
        lists: []
    },
    onLoad: function(t) {
        var a = this;
        e.sendRequest({
            url: "/index.php?m=Mobile&c=User&a=agent&t=" + Math.random(),
            success: function(t) {
                1 == t.status ? a.setData({
                    user: t.user
                }) : -100 == t.status && (e.globalData.tUrl = "/pages/agent/agent", wx.redirectTo({
                    url: "/pages/login/login"
                }));
            }
        }), this.AjaxGet();
    },
    onReachBottom: function() {
        this.AjaxGet();
    },
    bindDateChange: function(t) {
        var e = {};
        e[t.currentTarget.dataset.name] = t.detail.value, this.setData(e);
    },
    GetShai: function() {
        this.setData({
            page: 0,
            listend: 0
        }), this.AjaxGet();
    },
    AjaxGet: function() {
        var t = this, a = t.data.page, s = (t.data.type, t.data.listend), n = t.data.before_request;
        0 == s && 1 == n && (t.setData({
            before_request: 0,
            more: ""
        }), a += 1, e.sendRequest({
            url: "/index.php?m=Mobile&c=User&a=agent&is_ajax=1&t=" + Math.random(),
            data: {
                p: a,
                start: t.data.start,
                end: t.data.end
            },
            success: function(s) {
                if (1 == s.status) {
                    var n = [];
                    n = 1 == a ? s.lists : t.data.lists.concat(s.lists), t.setData({
                        lists: n,
                        page: a
                    });
                } else -100 == s.status ? (e.globalData.tUrl = "/pages/agent/agent", wx.redirectTo({
                    url: "/pages/login/login"
                })) : t.setData({
                    listend: 1
                });
            },
            complete: function() {
                t.setData({
                    before_request: 1,
                    more: "none"
                });
            }
        }));
    }
});