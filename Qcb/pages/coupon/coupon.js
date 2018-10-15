var t = getApp();

Page({
    data: {
        page: 1,
        before_request: 1,
        listend: 0,
        type: 0,
        show: {},
        more: "none"
    },
    onLoad: function(e) {
        // var a = this, o = e.type;
        // "" != e.type && null != e.type || (o = 0);
        // var s = {};
        // t.sendRequest({
        //     url: "/index.php?m=Mobile&c=User&a=share_coupon&type=" + o + "&t=" + Math.random(),
        //     success: function(e) {
        //         1 == e.status ? a.setData(e.Coupon) : -100 == e.status ? (t.globalData.tUrl = "/pages/coupon/coupon", 
        //         wx.redirectTo({
        //             url: "/pages/login/login"
        //         })) : a.setData({
        //             listend: 1
        //         });
        //     }
        // }), s.type = o, s["show.type" + o] = "topanv-this", a.setData(s);
    },
    onReachBottom: function() {
        this.AjaxCoupon();
    },
    AjaxCoupon: function() {
        var e = this, a = e.data.page, o = e.data.type, s = e.data.listend, n = e.data.before_request;
        0 == s && 1 == n && (e.setData({
            before_request: 0,
            more: ""
        }), a += 1, t.sendRequest({
            url: "/index.php?m=Mobile&c=User&a=share_coupon&type=" + o + "&t=" + Math.random(),
            data: {
                p: a
            },
            success: function(o) {
                if (1 == o.status) {
                    var s = e.data.coupon_list.concat(o.Coupon.coupon_list);
                    e.setData({
                        coupon_list: s,
                        page: a
                    });
                } else -100 == o.status ? (t.globalData.tUrl = "/pages/coupon/coupon", wx.redirectTo({
                    url: "/pages/login/login"
                })) : e.setData({
                    listend: 1
                });
            },
            complete: function() {
                e.setData({
                    before_request: 1,
                    more: "none"
                });
            }
        }));
    }
});