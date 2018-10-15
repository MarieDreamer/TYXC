var t = getApp();

Page({
    data: {
        before_request: 1,
        page: 0,
        listend: 0,
        lists: [],
        more: "none"
    },
    onLoad: function() {
        var e = this;
        t.sendRequest({
            url: "/index.php?m=Mobile&c=User&a=account&t=" + Math.random(),
            success: function(a) {
                1 == a.status ? e.setData(a.user) : -100 == a.status && (t.globalData.tUrl = "/pages/orderaccount/orderaccount", 
                wx.redirectTo({
                    url: "/pages/login/login"
                }));
            }
        });
    },
    onShow: function() {
        this.AjaxGet();
    },
    onReachBottom: function() {
        this.AjaxGet();
    },
    AjaxGet: function() {
        var e = this, a = e.data.page, s = e.data.listend, o = e.data.before_request;
        0 == s && 1 == o && (a += 1, e.setData({
            before_request: 0,
            more: ""
        }), t.sendNoRequest({
            url: "/index.php?m=Mobile&c=Distribut&a=order_list&t=" + Math.random(),
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
    }
});