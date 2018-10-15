//paes/makegroup/makegroup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    album_class: [
      ['朋友', 0, 1],
      ['个人', 0, 2],
      ['家人', 0, 3],
      ['宝宝', 0, 4],
      ['同学', 0, 5],
      ['同事', 0, 6],
      ['情侣', 0, 7],
      ['萌宠', 0, 8],
      ['旅游', 0, 9],
      ['摄影', 0, 10],
      ['粉丝', 0, 11],
      ['其他', 0, 12],
    ],
    dataId: 0,
    album_name: '',
  },

  onLoad: function (options) {
    var username = wx.getStorageSync('username');
    if (!username) {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }
  },

  setname: function (e) {
    let that = this;
    let id = e.currentTarget.dataset.id;
    let album_class = that.data.album_class;
    for (let i = 0; i < 12; i++) {
      if (album_class[i][2]==id){
        album_class[i][1] = 1;
      } else {
        album_class[i][1] = 0;
      }
    }
    that.setData({
      album_class: album_class,
      dataId: 1,
    })
  },
  album_name: function (e) {
    this.setData({
      album_name: e.detail.value
    })
  },
  creategroup: function () {
    let that = this;
    let user_id = wx.getStorageSync('userid');
    let album_class_s = that.data.album_class;
    let album_class = '';
    for (let i = 0; i < album_class.lenght; i++) {
      if (album_class[i][1]==1){
        album_class = album_class[i][2];
      }
    }
    wx.request({
      url: 'https://photo.toyshare.cn/PhotoAlbum/adds_do',
      data: {
        user_id: user_id,
        album_class: album_class,
        name: that.data.album_name,
      },
      success: function (res) {
        if(res.data.status==1){
          wx.navigateTo({
            url: '/pages/viewscoll/viewscoll?album_id=' + res.data.user
          })
        }else{
          wx.showToast({
            title: '添加失败',
            icon: 'success',
            duration: 1000
          })
        }
      }
    })
  },

})