// pages/myself/myself.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: true,
    userinfo_data: [],
    password_is_open: 0,
  },
  agreeGetUser: function (e) {
    //设置用户信息本地存储
    // console.log(e);
    //授权保存用户信息
    var userid = wx.getStorageSync('userid');

    var username = wx.getStorageSync('username');
    if (!username) {
      wx.request({
        url: 'https://photo.toyshare.cn/WechatUser/save_do',
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
      }),
        wx.switchTab({
          url: '/pages/index/index'
          // url: '/pages/login/login'
        });
    }
  },
  changeLoadUserInfo: function () {
    this.isLoadUserInfo = 0;
  },
  switchChange: function () {
    if (wx.getStorageSync('password')) {
      wx.navigateTo({
        url: '/pages/password/password?close=' + 1
      })
    } else {
      wx.navigateTo({
        url: '/pages/password/password'
      })
    }
  },
  onLoad: function () {
    // 打印用户id
    console.log('userid: ' + wx.getStorageSync('userid'));
    let that = this;
    var username = wx.getStorageSync('username');
    if (!username) {
      wx.showToast({
        title: '请先登录',
        icon: 'success',
        duration: 2000
      })
    } else {
      wx.getSetting({
        success: function (res) {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function (res) {
                // console.log(res.userInfo)
                that.setData({
                  userinfo: false,
                  userinfo_data: res.userInfo
                });
              }
            })
          }
        }
      })
    }
    if (wx.getStorageSync('password')) {
      that.setData({
        password_is_open: 1
      })
    }
  },
})