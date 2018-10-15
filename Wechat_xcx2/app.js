//app.js
App({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLaunch: function () {
    const updateManager = wx.getUpdateManager()

    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      console.log(res.hasUpdate)
    })

    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: function (res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })

    })

    updateManager.onUpdateFailed(function () {
      // 新的版本下载失败
    })
    
    var that = this;
    //wx.login获取code
    wx.login({
      success: function (res) {
        if (res.code) {
          //登录，保存用户openid
          wx.request({
            url: 'https://photo.toyshare.cn/WechatUser/login_do',
            data: {
              code: res.code
            },
            success: function (res) {
              wx.setStorageSync('userid', res.data.data.userid);
              let userid = res.data.data.userid;
              wx.getUserInfo({
                success: function (rs) {
                  wx.request({
                    url: 'https://photo.toyshare.cn/WechatUser/save_do',
                    data: {
                      id: userid,
                      nickname: rs.userInfo.nickName,
                      imageurl: rs.userInfo.avatarUrl,
                      gender: rs.userInfo.gender,
                      province: rs.userInfo.province,
                      city: rs.userInfo.city,
                      country: rs.userInfo.country,
                    },
                    success: function (ress) {
                      wx.setStorageSync('username', rs.userInfo.nickName);
                    }
                  })
                }
              })
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  },
  globalData: {
    userInfo: null
  }
})