// pages/photoalbum/photoalbum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    album_id: '',
  },
  //创建相册按钮
  goHome:function(res){
    wx.navigateTo({
      url: '/pages/makegroup/makegroup',
    })
  },
  //返回首页
  return_index:function(res){
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  showPvModel: function (e) {
    let that = this;
    wx.navigateTo({
      url: '/pages/uploadpic/uploadpic?album_id=' + that.data.album_id
    })
  },
  //图片上传
  upload_image:function(res){
    wx.navigateTo({
      url: '/pages/uploadpic/uploadpic',
    })
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
  add_activity:function(){
    let user_id = wx.getStorageSync('userid');
    let album_id = that.data.album_id;
    console.log('加入活动')
      wx.request({
        url: '',
        data:{
          album_id: album_id,
          user_id: user_id,
          is_activity:1,
        },
        success:function(res){
          console.log('success:', res)
        },fail:function(res){
          console.log('fail:',res)
        }
      })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    console.log('邀请');
    let album_id = this.data.album_id;
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '给萌娃的照片安个家，老了在拿出来看看',
      path: '/pages/viewscoll/viewscoll?id=' + album_id,
    }
  }
})