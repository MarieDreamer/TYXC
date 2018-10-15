// pages/moment/moment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result1: [],
    result2: [],
  },

  addgroup: function () {
    wx.navigateTo({
      url: "../makegroup/makegroup"
    });
  },

  toEventDetail: function (a) {
    // console.log('dianji',a)
    wx.navigateTo({
      url: "/pages/eventdetail/eventdetail?id=" + a.currentTarget.dataset.id
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let user_id = wx.getStorageSync('userid');
    var username = wx.getStorageSync('username');
    if (!username) {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }
    wx.request({
      url: 'https://photo.toyshare.cn/PhotoAlbum/get_all_person_photo_do',
      data: {
        user_id: user_id,
      },
      success: function (res) {
        let result = res.data.data;
        console.log(res.data.data)
        let result1 = [];
        let result2 = [];
        let left = 1;
        for (let i = 0; i < result.length; i++) {
          // console.log(left)
          if (left == 1) {
            result1.push(result[i])
            left = 2;
          } else {
            result2.push(result[i])
            left = 1;
          }
        }
        // console.log(result)
        // console.log(result1)
        // console.log(result2)
        that.setData({
          result1: result1,
          result2: result2
        })
      }
    })
    
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
    wx.showNavigationBarLoading() //在标题栏中显示加载
    var that = this;
    let user_id = wx.getStorageSync('userid');
    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
      wx.request({
        url: 'https://photo.toyshare.cn/PhotoAlbum/get_all_person_photo_do',
        data: {
          user_id: user_id,
        },
        success: function (res) {
          let result = res.data.data;
          let result1 = [];
          let result2 = [];
          let left = 1;
          for (let i = 0; i < result.length; i++) {
            // console.log(left)
            if (left == 1) {
              result1.push(result[i])
              left = 2;
            } else {
              result2.push(result[i])
              left = 1;
            }
          }
          // console.log(result)
          // console.log(result1)
          // console.log(result2)
          that.setData({
            result1: result1,
            result2: result2
          })
        }
      })
    }, 500);
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