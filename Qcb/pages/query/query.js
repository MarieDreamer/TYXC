var s = getApp();

require("../../js/global.js");

Page({
    data: {},
    onLoad: function() {
        var t = this;
        s.sendRequest({
            url: "/index.php?m=Mobile&c=User&a=getQuery&&t=" + Math.random(),
            success: function(s) {
                1 == s.status && t.setData({
                    lists: s.lists
                });
            }
        });
    }
});