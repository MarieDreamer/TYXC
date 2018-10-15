var t = getApp();

Page({
    data: {
        page: 0
    },
    onLoad: function(t) {
        this.AjaxCollect();
    },
    onReachBottom: function() {
        this.AjaxCollect();
    },
    AjaxCollect: function() {
        // var e = this, s = e.data.page;
        // s += 1, t.sendRequest({
        //     url: "/index.php?m=Mobile&c=User&a=collect_list",
        //     data: {
        //         p: s
        //     },
        //     success: function(a) {
        //         1 == a.status ? e.setData({
        //             goods_list: a.goods_list,
        //             page: s
        //         }) : -100 == a.status && (t.globalData.tUrl = "/pages/collect/collect", wx.redirectTo({
        //             url: "/pages/login/login"
        //         }));
        //     }
        // });
    },
    DelGoods: function(e) {
        // var s = this, a = e.currentTarget.dataset.index, l = this.data.goods_list, o = l[a].collect_id;
        // t.sendRequest({
        //     url: "/index.php?m=Mobile&c=User&a=cancel_collect",
        //     data: {
        //         collect_id: o
        //     },
        //     success: function(e) {
        //         1 == e.status ? (l.splice(a, 1), s.setData({
        //             goods_list: l
        //         })) : -1 == e.status ? t.showModal({
        //             content: "" + e.msg
        //         }) : -100 == e.status && (t.globalData.tUrl = "/pages/collect/collect", wx.redirectTo({
        //             url: "/pages/login/login"
        //         }));
        //     }
        // });
    }
});