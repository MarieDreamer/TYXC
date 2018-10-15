var e = getApp(), a = require("../template/tabbar.js");

require("../../js/global.js");

Page({
    data: {},
    onLoad: function() {
        var t = e.globalData.isIphoneX;
        this.setData({
            isIphoneX: t
        }), a.tabbar("tabBar", 3, this);
        var s = this;
        // e.sendRequest({
        //     url: "/index.php?m=Mobile&c=User&a=index",
        //     success: function(a) {
        //         if (1 == a.status) {
        //             if (s.setData(a.Info), 1 == a.Info.is_ok) {
        //                 var t = wx.getStorageSync("alerttimes");
        //                 t || (t = 0), t < 3 && (e.showModal({
        //                     content: "您已具备申请个人代理权限，立即前往申请",
        //                     showCancel: !0,
        //                     cancelText: "暂不申请",
        //                     confirmText: "前往申请",
        //                     confirm: function() {
        //                         wx.navigateTo({
        //                             url: "/pages/subject/subject"
        //                         });
        //                     }
        //                 }), wx.setStorageSync("alerttimes", t + 1));
        //             }
        //         } else -100 == a.status && (e.globalData.tUrl = "/pages/user/user", wx.redirectTo({
        //             url: "/pages/login/login"
        //         }));
        //     }
        // }), 
        this.setData({
            is_comment: e.globalData.config.is_comment
        });
    },
    TelCall: function() {
        var e = this;
        wx.makePhoneCall({
            phoneNumber: e.data.phone
        });
    },
    GoUrl: function(e) {
        var a = e.currentTarget.dataset.url;
        wx.navigateTo({
            url: a
        });
    }
});