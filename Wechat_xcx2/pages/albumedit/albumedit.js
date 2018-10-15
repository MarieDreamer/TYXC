// pages/albumedit/albumedit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    album_id: '',
    name: '',
    img_url: [],
    users_id: [],
    users_array: [],
    index:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    this.data.album_id = options.album_id;
    // // this.data.album_id = 1;
    // wx.request({
    //   url: 'https://photo.toyshare.cn/PhotoAlbum/get_other_user',
    //   data: {
    //     id: that.data.album_id,
    //   },
    //   success: function (res) {
    //     var users_array = [];
    //     var users_id = [];
    //     users_array.push('')
    //     users_id.push('')
    //     for (let i = 0; i < res.data.data.length; i++) {
    //       users_array.push(res.data.data[i].nickname)
    //       users_id.push(res.data.data[i].id)
    //     }
    //     that.data.users_array = users_array;
    //     that.setData({
    //       users_array: users_array
    //     })
    //     that.data.users_id = users_id;
    //   }
    // })
  },

  change_album_url_name: function (options) {
    // let that = this;
    // wx.chooseImage({
    //   count: 1,
    //   sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有
    //   sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    //   success: function (res) {
    //     let img_url = that.data.img_url;
    //     for (let i = 0; i < res.tempFilePaths.length; i++) {
    //       img_url.push(res.tempFilePaths[i])
    //     }
    //     that.setData({
    //       img_url: img_url
    //     })
    //   }
    // })
  },

  change_album_name: function (options) {
    this.data.name = options.detail.value;
  },

  album_exit: function () {
    let that = this;
    console.log(that.data.album_id)
    console.log(that.data.name)
    wx.request({
      url: 'https://photo.toyshare.cn/PhotoAlbum/change_edit',
      data: {
        id: that.data.album_id,
        name: that.data.name,
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.status == 1) {
          wx.showToast({
            title: '修改成功',
            icon: 'success',
            duration: 2000
          })
          var t1 = setTimeout(function () {
            wx.navigateBack({
              delta: 1
            })
          }, 1000);
        }
      }
    })
  },

  change_album_user_name: function (options) {
    this.setData({
      index: options.detail.value
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