// pages/photo_view/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: [],
    users: [],
    user2: [],
    users2: [],
    is_show: 0,
    album_id:'',
    img_url:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var album_id = options;
    this.setData({
      album_id: album_id
    })
    let that = this;
    this.data.album_id = options.album_id;
    let user_id = wx.getStorageSync('userid');
    this.data.user_id = user_id;
    // // this.data.album_id = 1;
    wx.request({
      url: 'https://photo.toyshare.cn/PhotoAlbum/get_other_user',
      data: {
        id: that.data.album_id,
      },
      success: function (res) {
        if (res.data.user.id == user_id) {
          that.setData({
            is_show: 1,
          })
        }
        for (var i = 0; i < res.data.data.length; i++){
          if (res.data.data[i]['is_selects']!=true) {
            res.data.data[i]['is_selects'] = false;
          }
        }
        console.log(res.data.data);
        that.setData({
          user: res.data.user,
          users: res.data.data,
          user2: res.data.user,
          users2: res.data.data,
        })

      }
    })
  },
  modifyfun: function (e) {
    var that = this;
    var album_id = that.data.album_id;
    console.log(album_id);
    wx.chooseImage({
      count: 1,
      sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        console.log(res.tempFilePaths[0]);
        if (res.tempFilePaths[0]){
          wx.uploadFile({
            url: 'https://photo.toyshare.cn/photo/upload_do',
            filePath: res.tempFilePaths[0],
            name: 'file',
            formData: {
              'user': 'test'
            },
            success: function (res) {
              console.log(res.data)
              if (res.data){
                var url = res.data;
                 wx.request({
                  url: 'https://photo.toyshare.cn/PhotoAlbum/edit_do',
                  data: {
                    id: album_id,
                    url: url,
                  },
                  success: function (res) {
                    console.log(res.data.message);

                    var messages = res.data.message

                    wx.showModal({
                      title: messages,
                      success: function (res) {
                      }
                    })
                    
                  }
                })
              }
            },
            fail: function (res) {
              // console.log('上传失败')
            }
          })
        }
      }
    })

  },
  stopreset: function (e) {
    console.log(e);
    var that = this;
    var u = that.data.users;
    var user_id = e.currentTarget.dataset.user_id;
    that.data.select_id = user_id;
    for (var i = 0; i < u.length; i++) {
      if (u[i].id == user_id) {
        u[i].is_select = true;
      } else {
        u[i].is_select = false;
      }
    }
    console.log(user_id)
    console.log(u)
    that.setData({
      users: u
    })
  },
  authority_select: function (e) {
    console.log("点击头像");
    var that = this;
    var u = that.data.users2;
    var user_id = e.currentTarget.dataset.user_id;
    that.data.select_id = user_id;
    // console.log(u);
    console.log(user_id);
    console.log(that.data.select_id);
    for (var i = 0; i < u.length; i ++){
      if (u[i].id == user_id){
        if (u[i].is_selects == false){
          u[i].is_selects = true;
        }
        else{
          u[i].is_selects = false;
        }
      }
    }
    console.log(u);
    that.setData({
      users2: u
    })
  },

  //上传权限
  authority:function(){
    var that=this;
    console.log(that.data.users)
    var u = that.data.users2;
    var album_id = that.data.album_id;
    var authority="";
    for(var i=0;i<u.length;i++){
      if(u[i].is_selects==true){
        authority = authority+'_'+u[i].id;
      }
    }
    console.log(authority)
    wx.request({
      url: 'https://photo.toyshare.cn/PhotoAlbum/authority',
      data: {
        album_id: album_id,
        authority: authority
      },
      success: function (res){
        console.log(res.data.message);
        if (res.data.message =="操作成功"){
          wx.showToast({
            icon: 'none',
            title: "成功",
          })
        }
      }
    })
  },
  move_user: function () {
    let that = this;
    if (that.data.select_id) {
      wx.showActionSheet({
        itemList: ['是否移交管理员'],
        success: function (res) {
          wx.request({
            url: 'https://photo.toyshare.cn/PhotoAlbum/move_user',
            data: {
              id: that.data.album_id,
              user_id: that.data.user_id,
              change_id: that.data.select_id
            },
            success: function (res) {
              console.log(res.data.data)
              wx.showToast({
                title: '移交成功',
                icon: 'success',
                duration: 2000
              })
              let user_id = wx.getStorageSync('userid');
              this.data.user_id = user_id;
              wx.request({
                url: 'https://photo.toyshare.cn/PhotoAlbum/get_other_user',
                data: {
                  id: that.data.album_id,
                },
                success: function (res) {
                  if (res.data.user.id == user_id) {
                    that.setData({
                      is_show: 1,
                    })
                  }
                  for (var i = 0; i < res.data.data.length; i++) {
                    if (res.data.data[i]) {
                      res.data.data[i]['is_select'] = false;
                    }
                  }
                  that.setData({
                    user: res.data.user,
                    users: res.data.data
                  })

                }
              })
              var t1 = setTimeout(function () {
                wx.switchTab({
                  url: '/pages/photo_view/index'
                })
              }, 1000);
            }
          })
        },
        fail: function (res) {
          console.log(res.errMsg)
        }
      })
    } else {
      wx.showToast({
        title: '请先点选新管理员',
        icon: 'success',
        duration: 2000
      })
    }
  },

  album_over: function () {
    let that = this;
    wx.showActionSheet({
      itemList: ['是否确定解散相册'],
      success: function (res) {
        wx.request({
          url: 'https://photo.toyshare.cn/PhotoAlbum/album_over',
          data: {
            id: that.data.album_id,
          },
          success: function (res) {
            wx.showToast({
              title: '解散成功',
              icon: 'success',
              duration: 2000
            })
            var t1 = setTimeout(function(){
              wx.switchTab({
                url: '/pages/index/index'
              })
            }, 1000);
          }
        })
      },
      fail: function (res) {
        console.log(res.errMsg)
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