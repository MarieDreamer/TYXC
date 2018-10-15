var t = getApp();

Page({
    data: {},
    onLoad: function() {
        var a = this;
        t.sendRequest({
            url: "/index.php?m=Mobile&c=User&a=account&t=" + Math.random(),
            success: function(s) {
                1 == s.status ? a.setData(s.user) : -100 == s.status && (t.globalData.tUrl = "/pages/account/account", 
                wx.redirectTo({
                    url: "/pages/login/login"
                }));
            }
        });
    }
});