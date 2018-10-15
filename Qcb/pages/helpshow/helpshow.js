var e = getApp(), s = (require("../../js/global.js"), require("../../js/wxParse/wxParse.js"));

Page({
    data: {},
    onLoad: function(t) {
        var a = this, n = t.id;
        e.sendRequest({
            url: "/index.php?m=Mobile&c=Index&a=article&id=" + n,
            success: function(e) {
                1 == e.status && (a.setData(e.info), s.wxParse("content", "html", e.info.content, a, 10));
            }
        });
    }
});