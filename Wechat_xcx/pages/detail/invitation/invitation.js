var e = require("../../../utils/util.js"), s = getApp();

Page({
    data: {
        canIUse: !1
    },
    onLoad: function(e) {
        s.stat.statpv({
            route: this.route,
            options: e
        });
        var t = this;
        e.shareUserid && (t.shareUserid = e.shareUserid, console.log(t.shareUserid)), e.shCode && (t.shCode = e.shCode, 
        console.log(t.shCode)), wx.canIUse && wx.canIUse("button.open-type.share") && t.setData({
            canIUse: !0
        }), e.version && (this.version = e.version), e.port && (this.port = e.port, s.globalData.port = e.port), 
        e.fromUserID && (this.fromUserID = e.fromUserID), e.fromSpaceID && (this.fromSpaceID = e.fromSpaceID), 
        e.fromEventID && (this.fromEventID = e.fromEventID);
    },
    onShow: function() {
        var t = this, r = this.version ? this.version : "", o = this.port ? this.port : "", i = this.fromUserID ? this.fromUserID : 0, a = this.fromSpaceID ? this.fromSpaceID : 0, n = this.fromEventID ? this.fromEventID : 0;
        s.getUserInfo(function(r) {
            if ("新用户" != r.nickName) {
                t.userid = r.userid;
                var o = "yes" == r.isnew;
                s.globalData.userInfo.userid;
                t.shareUserid && o && e.wxreq({
                    pathname: "YinianProject/activity/SuccessInviteFriend",
                    data: {
                        userid: t.shareUserid
                    }
                }).then(function(e) {
                    console.log(e);
                }), t.setData({
                    userName: wx.getStorageSync("userInfo").nickName
                });
            } else wx.navigateTo({
                url: "/pages/creatlogin/creatlogin"
            });
        }, r, o, i, a, n, "invitation");
    },
    showIntro: function() {
        wx.showToast({
            title: "点击右上角分享"
        });
    },
    previewCode: function() {
        var e = this;
        e.userid && wx.previewImage({
            urls: [ e.data.codeUrl ]
        });
    },
    onShareAppMessage: function() {
        return {
            title: "分享得空间奖励",
            path: "/pages/index/index?port=小程序好友邀请&shareUserid=" + this.userid + "&shCode=yaoqin",
            success: function() {
                s.stat.request({
                    operation: "shareCallback"
                });
            }
        };
    }
});