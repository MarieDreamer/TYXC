var t = getApp();

Page({
    data: {
        before_request: 1,
        page: 0,
        listend: 0,
        account_log: []
    },
    // onLoad: function() {
    //     var a = this;
    //     t.sendRequest({
    //         url: "/index.php?m=Mobile&c=User&a=account&t=" + Math.random(),
    //         success: function(e) {
    //             1 == e.status ? a.setData({
    //                 user: e.user
    //             }) : -100 == e.status && (t.globalData.tUrl = "/pages/wallet/wallet", wx.redirectTo({
    //                 url: "/pages/login/login"
    //             }));
    //         }
    //     });
    // },
    onShow: function() {
        this.AjaxPoints();
    },
    onReachBottom: function() {
        this.AjaxPoints();
    },
    // AjaxPoints: function() {
    //     var a = this, e = a.data.page, s = a.data.listend, o = a.data.before_request;
    //     0 == s && 1 == o && (a.setData({
    //         before_request: 0
    //     }), e += 1, t.sendRequest({
    //         url: "/index.php?m=Mobile&c=User&a=points&t=" + Math.random(),
    //         data: {
    //             p: e
    //         },
    //         success: function(s) {
    //             if (a.setData({
    //                 before_request: 1
    //             }), 1 == s.status) {
    //                 var o = a.data.account_log.concat(s.account_log);
    //                 a.setData({
    //                     account_log: o,
    //                     page: e
    //                 });
    //             } else -100 == s.status ? (t.globalData.tUrl = "/pages/wallet/wallet", wx.redirectTo({
    //                 url: "/pages/login/login"
    //             })) : a.setData({
    //                 listend: 1
    //             });
    //         }
    //     }));
    // }
});