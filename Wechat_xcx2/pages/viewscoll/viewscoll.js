Page({

  /**
   * 页面的初始数据
   */
  data: {
    album_data: [],
    photo_data: {},
    tempFilePaths: '',
    album_id: '',
    in_the_album: 1,
    timeline_if: 0,
    po_id:'',//照片id
    user_id:'',
  },
  onLoad: function (e) {
    // console.log(e);
    let that = this;
    let user_id = wx.getStorageSync('userid');
    let album_id = e.album_id;
    var username = wx.getStorageSync('username');
    that.setData({
      user_id: user_id,
      album_id: album_id,
    })
    if (!username) {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }
    wx.request({
      url: 'https://photo.toyshare.cn/Photo/get_person_photo_do',
      data: {
        user_id: user_id,
        album_id: album_id,
      },
      success: function (res) {
        if (res.data.status == 1) {
          let in_the_album = 1;
          if (res.data.photo.user_id == user_id) {
            in_the_album = 0;
          } else {
            if (res.data.photo.other_user_id) {
              let user_ids = res.data.photo.other_user_id.split("_");
              for (let i = 0; i < user_ids.length; i++) {
                if (user_ids[i] == user_id) {
                  in_the_album = 0;
                }
              };
            }
          }
          console.log(res.data.data[1]);
          that.setData({
            album_data: res.data.photo,
            photo_data: res.data.data[1],
            album_id: album_id,
            in_the_album: in_the_album,
          });
          that.add_the_album();
        } else {
          wx.showToast({
            title: '加载失败',
            icon: 'success',
            duration: 1000
          });
        }
      }
    })
  },
  
  onShow: function (e) {
    let that = this;
    let user_id = wx.getStorageSync('userid');
    let album_id = that.data.album_id;
    if (album_id) {
      wx.request({
        url: 'https://photo.toyshare.cn/Photo/get_person_photo_do',
        data: {
          user_id: user_id,
          album_id: album_id,
        },
        success: function (res) {
          if (res.data.status == 1) {
            console.log(res);
            let in_the_album = 1;
            if (res.data.photo.user_id == user_id) {
              in_the_album = 0;
            } else {
              if (res.data.photo.other_user_id) {
                let user_ids = res.data.photo.other_user_id.split("_");
                for (let i = 0; i < user_ids.length; i++) {
                  if (user_ids[i] == user_id) {
                    in_the_album = 0;
                  }
                };
              }
            }
            console.log(in_the_album);
            that.setData({
              album_data: res.data.photo,
              photo_data: res.data.data[1],
              album_id: album_id,
              in_the_album: in_the_album,
            });
            that.add_the_album();
          } else {
            wx.showToast({
              title: '加载失败',
              icon: 'success',
              duration: 1000
            });
          }
        }
      })
    }
  },
  goHome: function () {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  donothing: function () {
    let album_id = this.data.album_id;
    wx.navigateTo({
      url: '/pages/photo_view/index?album_id=' + album_id
    })
  },
  stopreset: function () {
    this.setData({
      timeline_if: 1
    })
  },
  stopreset2: function () {
    this.setData({
      timeline_if: 0
    })
  },
  edit_album: function () {
    let album_id = this.data.album_id;
    wx.navigateTo({
      url: '/pages/albumedit/albumedit?album_id=' + album_id
    })
  },
  add_the_album: function () {
    let that = this;
    let user_id = wx.getStorageSync('userid');
    let album_id = that.data.album_id;
    wx.request({
      url: 'https://photo.toyshare.cn/PhotoAlbum/add_person_id',
      data: {
        user_id: user_id,
        album_id: album_id,
      },
      success: function (res) {
        if (res.data.status == 1) {
          that.setData({
            in_the_album: 0,
          });
        }
      }
    })
  },
  praise: function (e) {
    console.log(e);
    let that = this;
    let user_id = wx.getStorageSync('userid');
    let photo_id = e.currentTarget.dataset.photo_id;
    let praise_yes = e.currentTarget.dataset.praise_yes;
    let url = '';
    if (praise_yes){
      url = 'https://photo.toyshare.cn/Photo/move_praise_do';
    } else {
      url = 'https://photo.toyshare.cn/Photo/add_praise_do';
    }
    wx.request({
      url: url,
      data: {
        user_id: user_id,
        photo_id: photo_id,
      },
      success: function (res) {
        if(res.data.status==1){
          let photo_data = that.data.photo_data;
          for (let i = 0; i < photo_data.length; i++) {
            if (photo_data[i].id == photo_id) {
              if (praise_yes) {
                photo_data[i].praise = parseInt(photo_data[i].praise) - 1;
                photo_data[i].praise_yes = 0;
              } else {
                photo_data[i].praise = parseInt(photo_data[i].praise) + 1;
                photo_data[i].praise_yes = 1;
              }

              // if (res.data.data == "点赞成功") {
              //   photo_data[i].praise = parseInt(photo_data[i].praise) + 1;
              //   photo_data[i].praise_yes = 1;
              // }else{
              //   photo_data[i].praise = parseInt(photo_data[i].praise) - 1;
              //   photo_data[i].praise_yes = 0;
              // }
            }

            
          };
          that.setData({
            photo_data: photo_data,
          })
        }
      }
    })
  },
  showlike: function (t) {
    // console.log(t)
    var po_id = t.currentTarget.dataset.id;
    var e = this;
    e.setData({
      showFunModel: !0,
      po_id: po_id,
      // selNumA: a,
      // selNumB: o
    });
  },

  downloadimg: function (e) {
    var that = this;
    var urlarray =[];
    // console.log(e.currentTarget.dataset.idid);
    // console.log(e.currentTarget.dataset.id);
    for (var i = 0; i < e.currentTarget.dataset.id.length; i++){
      // console.log(i)
      if (e.currentTarget.dataset.id[i].id == e.currentTarget.dataset.idid){
        // console.log(e.currentTarget.dataset.id[i].url)
        urlarray = e.currentTarget.dataset.id[i].url;
      }
    }
    for (var o = 0; o < urlarray.length ; o++){
      // console.log(o)
      wx.downloadFile({
      
        url: 'https://photo.toyshare.cn' + urlarray[o], 
      success: function (res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        // console.log(res);
        // console.log(res.tempFilePath);
        var tempFilePath = res.tempFilePath;
        if (res.statusCode === 200) {
          
          // console.log(tempFilePath);
          wx.saveFile({
            tempFilePath: tempFilePath,
            success: function (ress) {
              console.log(ress.errMsg);
              var savedFilePath = ress.savedFilePath
              if (ress.errMsg =='saveFile:ok'){
                wx.showToast({
                  title: '下载成功',
                })
              }
            }
          })
        }
      }
    })

    }
    // console.log(i)
    // wx.downloadFile({
    //   url: 'https://photo.toyshare.cn//Uploads/Tmps/2018/07/12/5b47147d0a2b9.png', 
    //   url: 'https://photo.toyshare.cn//Uploads/Tmps/2018/07/12/5b47147cef8fa.png', 
    //   success: function (res) {
    //     // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
    //     console.log(res)
    //     // if (res.statusCode === 200) {
    //     //   wx.playVoice({
    //     //     filePath: res.tempFilePath
    //     //   })
    //     // }
    //   }
    // })

  },

  delete_photo:function(t){
      var that=this;
      var po_id = that.data.po_id;
      var photo_data = that.data.photo_data;
      let user_id = wx.getStorageSync('userid');
      var album_id = that.data.album_id;
      // console.log(album_id);
      wx.request({
        url: 'https://photo.toyshare.cn/Photo/delete_do',
        data:{
          id: po_id,
          user_id: user_id,
          albumid: album_id,
        },
        success:function(res){
          for (var i = 0; i < photo_data.length;i++){
            if (photo_data[i].id == po_id) {
              photo_data.splice(i, 1);
            }
          }
          that.setData({
            photo_data: photo_data,
            showFunModel:0,
          })
          wx.showToast({
            title: '删除成功',
          })
        }
      })
  },
  closeFunModel: function () {
    this.setData({
      showFunModel: !1
    });
  },
  showPvModel:function(e){

    let that = this;
    var userid = wx.getStorageSync('userid');
    //判断是否有权限上传图片
    wx.request({
      url: 'https://photo.toyshare.cn/PhotoAlbum/check',
      data: {
        album_id: that.data.album_id,
        user_id: userid
      },
      success: function (res) {
        console.log(res.data)
        //有权限进行上传图片
        if (res.data.data == '正在上传') {
          wx.navigateTo({
            url: '/pages/uploadpic/uploadpic?album_id=' + that.data.album_id
          })
        }
        //无权限上传图片
        if (res.data.data == '您没有该权限') {
          wx.showModal({
            title: '温馨提示',
            content: '您没有该相册的权限',
            showCancel: false,
          })
        }
      }
    })
    
  },
  onShareAppMessage: function (res) {
    let album_id = this.data.album_id;
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    let username=wx.getStorageSync('username');
    let album_name=this.data.album_data.name;
    let title= '"' + username + '"向你分享了他的相册《'+ album_name +'》';
    return {
      title: title,
      path: '/pages/viewscoll/viewscoll?album_id=' + album_id,
    }
  },
  toEventDetail: function (a) {
    console.log(a)
    wx.navigateTo({
      url: "/pages/eventdetail/eventdetail?id=" + a.currentTarget.dataset.id
    });
  },
})