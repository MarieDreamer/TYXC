var a = getApp();

Page({
    data: {
        order_id: 0
    },
    onLoad: function(t) {
        var i = t.id;
        this.setData({
            order_id: i,
            is_comment: a.globalData.config.is_comment
        });
    }
});