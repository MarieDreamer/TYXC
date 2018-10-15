var t = getApp();

require("../../js/global.js");

Page({
    data: {
        down: "滑动加载更多",
        p: 0,
        goods_id: 0,
        canget: !0,
        before_request: 1,
        comment_list: ""
    },
    onLoad: function(t) {
        var a = t.id;
        this.setData({
            goods_id: a
        }), this.AjaxComment();
    },
    onReachBottom: function() {
        this.AjaxComment();
    },
    AjaxComment: function() {
        var a = this, e = a.data.p, o = a.data.goods_id;
        1 == a.data.canget && (a.setData({
            down: "数据加载中"
        }), a.setData({
            canget: !1
        }), e++, t.sendRequest({
            url: "/index.php?m=Mobile&c=Goods&a=ajaxComment&goods_id=" + o,
            data: {
                p: e,
                goods_id: o
            },
            success: function(t) {
                if (1 == t.status) if (a.setData(t.comment), "" == t.comment_list) a.setData({
                    canget: !1,
                    down: "没有数据了"
                }); else {
                    if (0 == a.data.comment_list.length) o = t.comment_list; else var o = a.data.commentlist.concat(t.comment_list);
                    a.setData({
                        commentlist: o,
                        canget: !0,
                        down: "滑动加载更多",
                        p: e
                    });
                }
            }
        }));
    }
});