// pages/password/password.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    password_1: '-',
    password_2: '-',
    password_3: '-',
    password_4: '-',
    password: '',
    password_res: '',
    restart: 0,
    close:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.close){
      this.data.close = options.close;
    }
  },

  click_1: function (options) {
    let that = this;
    let password_number = options.target.dataset.number;
    if (password_number == 10) {
      that.data.password = that.data.password.substr(0, that.data.password.length-1)
      let a = [];
      for (var i = 0; i < 4; i++) {
        if (that.data.password.length > i) {
          a[i] = "*";
        } else {
          a[i] = "-";
        }
      }
      that.setData({
        password_1: a[0],
        password_2: a[1],
        password_3: a[2],
        password_4: a[3],
      })
    } else {
      if (that.data.close == 0) {
        if (that.data.password.length < 4) {
          that.data.password = that.data.password + password_number;
          let a = [];
          for (var i = 0; i < 4; i++) {
            if (that.data.password.length > i) {
              a[i] = "*";
            } else {
              a[i] = "-";
            }
          }
          that.setData({
            password_1: a[0],
            password_2: a[1],
            password_3: a[2],
            password_4: a[3],
          })
        }
        if (that.data.password.length == 4) {
          wx.showToast({
            title: '再次输入',
            icon: 'success',
            duration: 1000
          })
          if (that.data.restart == 0) {
            that.setData({
              password_1: '-',
              password_2: '-',
              password_3: '-',
              password_4: '-',
              password_res: that.data.password,
              password: '',
              restart: 1,
            })
          } else {
            if (that.data.password == that.data.password_res) {
              wx.showToast({
                title: '设置成功',
                icon: 'success',
                duration: 1000,
              })
              wx.setStorageSync('password', that.data.password);
              wx.navigateBack({
                delta: 1
              })
            } else {
              wx.showToast({
                title: '两次密码不一致',
                icon: 'success',
                duration: 1000
              })
              that.setData({
                password_1: '-',
                password_2: '-',
                password_3: '-',
                password_4: '-',
                password_res: '',
                password: '',
                restart: 0,
              })
            }
          }
        }
      }
      if (that.data.close == 1) {
        if (that.data.password.length < 4) {
          that.data.password = that.data.password + password_number;
          let a = [];
          for (var i = 0; i < 4; i++) {
            if (that.data.password.length > i) {
              a[i] = "*";
            } else {
              a[i] = "-";
            }
          }
          that.setData({
            password_1: a[0],
            password_2: a[1],
            password_3: a[2],
            password_4: a[3],
          })
        }
        if (that.data.password.length == 4) {
          if (wx.getStorageSync('password') == that.data.password) {
            wx.removeStorageSync('password');
            wx.showToast({
              title: '解除成功',
              icon: 'success',
              duration: 1000
            })
            wx.navigateBack({
              delta: 1
            })
          } else {
            console.log(wx.getStorageSync('password'))
            wx.showToast({
              title: '密码错误',
              icon: 'success',
              duration: 1000
            })
            that.setData({
              password_1: '-',
              password_2: '-',
              password_3: '-',
              password_4: '-',
              password: '',
            })
          }
        }
      }
      if (that.data.close == 2) {
        if (that.data.password.length < 4) {
          that.data.password = that.data.password + password_number;
          let a = [];
          for (var i = 0; i < 4; i++) {
            if (that.data.password.length > i) {
              a[i] = "*";
            } else {
              a[i] = "-";
            }
          }
          that.setData({
            password_1: a[0],
            password_2: a[1],
            password_3: a[2],
            password_4: a[3],
          })
        }
        if (that.data.password.length == 4) {
          if (wx.getStorageSync('password') == that.data.password) {
            wx.removeStorageSync('password');
            wx.showToast({
              title: '密码正确',
              icon: 'success',
              duration: 1000
            })
            wx.navigateBack({
              delta: 1
            })
          } else {
            console.log(wx.getStorageSync('password'))
            wx.showToast({
              title: '密码错误',
              icon: 'success',
              duration: 1000
            })
            that.setData({
              password_1: '-',
              password_2: '-',
              password_3: '-',
              password_4: '-',
              password: '',
            })
          }
        }
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})