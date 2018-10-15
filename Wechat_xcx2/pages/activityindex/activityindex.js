// pages/activityindex/activityindex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      data_number:0,
      activity:[],
      page:1,
      is_onReachBottom:0,
  },

  toGroupScoll: function (t) {
    wx.navigateTo({
      url: "../photoalbum/photoalbum",
      success: function (t) {
        // o.data.showNewUser && o.setData({
        //   showNewUser: !1
        // });
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var username = wx.getStorageSync('username');
    if (!username) {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }
    
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    wx.request({
      url: 'https://photo.toyshare.cn/PhotoAlbum/get_activity_album_do/page/0',
      success: function (res) {
        // console.log('success')
        console.log(res)
        var activity = [];
        for (var i = 0; i < res.data.data[1].length;i++){
          activity[i] = res.data.data[1][i]
        }
        that.setData({
          activity: activity
        })
        
      }, fail: function (res) {
        console.log(res)
      }
    })
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
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
      wx.request({
        url: 'https://photo.toyshare.cn/PhotoAlbum/get_activity_album_do/page/0',
        success: function (res) {
          // console.log('success')
          // console.log(res)
          var data = [];
          for (var i = 0; i < res.data.data[1].length; i++) {
            data[i] = res.data.data[1][i]
          }
          that.setData({
            activity: data
          })

        }, fail: function (res) {
          console.log(res)
        }
      })
    }, 500);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    that.setData({
      page: that.data.page + 1
    })
    //模拟加载
    if (that.data.is_onReachBottom == 0) {
      setTimeout(function () {
        wx.request({
          url: 'https://photo.toyshare.cn/PhotoAlbum/get_activity_album_do/page/'+that.data.page,
          success: function (res) {
            if (res.data.data[1].length < 6) {
              that.setData({
                is_onReachBottom: 1
              });
            }
            // console.log(res)
            let activity =that.data.activity;
            for (var i = 0; i < res.data.data[1].length; i++) {
              activity.push(res.data.data[1][i])
            }
            that.setData({
              activity: activity
            })

          }, fail: function (res) {
            console.log(res)
          }
        })
      }, 500);
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})