var e = getApp(), t = require("../../js/global.js");

Page({
    data: {
        url: "/pages/index/index",
        userInfo: {
            nickname: "",
            sex: "",
            head_pic: ""
        },
        text: "微信授权登录"
    },
    agreeGetUser: function (e) {
      //设置用户信息本地存储
      console.log(e);
      //授权保存用户信息
      var userid = wx.getStorageSync('userid');
      var username = wx.getStorageSync('username');
      if (!username) {
        wx.request({
          url: 'https://square.jianfengweb.com/WechatUser/save_do',
          data: {
            id: userid,
            nickname: e.detail.userInfo.nickName,
            imageurl: e.detail.userInfo.avatarUrl,
            gender: e.detail.userInfo.gender,
            province: e.detail.userInfo.province,
            city: e.detail.userInfo.city,
            country: e.detail.userInfo.country,
          },
          success: function (res) {
            console.log(res);
            wx.setStorageSync('username', e.detail.userInfo.nickName);
          }
        })
      }
      var that = this;
      var msg = e.detail.errMsg;
      if (msg == 'getUserInfo:fail auth deny') {
        console.log('用户不允许授权')
      }
      if (msg == 'getUserInfo:ok') {
        console.log('用户允许授权')
        that.setData({
          userinfo: false
        })
      }
    },
   
    onLoad: function(t) {
      
        var o = this, n = o.data.url;
        // wx.redirectTo({
        //   url: o.data.url
        // })
        "" != e.globalData.tUrl && (n = e.globalData.tUrl, o.setData({
            url: n
        })), 
        wx.getSetting({
            success: function(e) {
                e.authSetting["scope.userInfo"] && wx.getUserInfo({
                    success: function(e) {
                        o.setData({
                            userInfo: e.userInfo
                        }), o.login();
                    }
                });
            }
        });
    },
    
    AuthLogin: function(t) {
        var o = this;
        "getUserInfo:ok" == t.detail.errMsg ? (o.setData({
            userInfo: t.detail.userInfo
        }), o.login()) : e.showModal({
            content: "获取您的用户信息授权失败",
            confirm: function() {
                wx.redirectTo({
                    url: o.data.url
                }), e.globalData.tUrl = "";
            }
        });
    },
    login: function() {
        var o = this, n = o.data.userInfo;
        o.setData({
            text: "微信授权登录中..."
        }), wx.login({
            success: function(s) {
                wx.getUserInfo({
                    success: function(a) {
                        s.code && (n.code = s.code, e.sendNoRequest({
                            url: "/index.php?m=Mobile&c=LoginApi&a=login&oauth=weixin",
                            data: n,
                            success: function(n) {
                                if (1 == n.status) {
                                    console.log(n.user), e.setSessionKey(n.session_key), e.setUserInfoStorage(n.user);
                                    var s = e.getUid();
                                    t.isBlank(s) || (e.loginBindParent(s), e.ShareBonus(s)), o.setData({
                                        text: "跳转页面..."
                                    }), e.globalData.tUrl = "", wx.redirectTo({
                                        url: o.data.url
                                    });
                                } else wx.showToast({
                                    title: "获取您的用户信息授权失败",
                                    icon: "none",
                                    duration: 3e3
                                });
                            },
                            complete: function(e) {}
                        }));
                    },
                    fail: function(t) {
                        console.log(2), e.showModal({
                            content: "获取您的用户信息授权失败"
                        });
                    },
                    complete: function(e) {}
                });
            }
        });
    }
});