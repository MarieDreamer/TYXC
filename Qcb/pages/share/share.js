var e = getApp();

Page({
    data: {
        qrcode: "",
        user_id: ""
    },
    onLoad: function() {
        // var t = this;
        // e.sendRequest({
        //     url: "/index.php?m=Mobile&c=Distribut&a=getqrcode",
        //     success: function(a) {
        //         1 == a.status ? t.setData({
        //             qrcode: a.filename,
        //             user_id: a.user_id
        //         }) : -100 == a.status && (e.globalData.tUrl = "/pages/share/share", wx.redirectTo({
        //             url: "/pages/login/login"
        //         }));
        //     }
        // });
    },
    viewImg: function() {
        var e = this;
        wx.previewImage({
            current: "",
            urls: [ e.data.qrcode ]
        });
    },
    onShareAppMessage: function(e) {
        return {
            title: "去猜吧",
            path: "/pages/index/index?uid=" + this.data.user_id
        };
    }
});