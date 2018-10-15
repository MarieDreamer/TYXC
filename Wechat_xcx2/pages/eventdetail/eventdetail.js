Page({
  data: {
    photo_dataid: 0,
    photo_data: {},
    photo:[],
    praisefrequency: 0,
    user_id:'',
    pinglunarray:[],
    pinglunzt:'pinglundivnone',
    shuruqk: "",
    pinglunnumber:'',
  },
  onLoad: function (options) {
    let that = this;
    let user_id = wx.getStorageSync('userid');
    let id = options.id;
    // that.data.photo_dataid=id;
    var username = wx.getStorageSync('username');
    that.setData({
      user_id: user_id
    })
    if (!username) {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }
    that.setData({
      photo_dataid: id
    })
    wx.request({
      url: 'https://photo.toyshare.cn/Photo/person_in',
      data: {
        user_id: user_id,
        id: id,
      },
      success: function (res) {
        // console.log(res.data.Photo);
        if (res.data.status == 1) {
          that.setData({
            photo: res.data.Photo,
          })

          
          
          // that.setData({
          //   photo: res.data.praise,
          // })
        }
      }
    })


    //加载评论
    let photo_id = that.data.photo_dataid;
    console.log(photo_id);
    wx.request({
      url: 'https://photo.toyshare.cn/Comment/lists',
      data: {
        photoid: photo_id,
      },
      success: function (res) {
        console.log(res.data.lists[1]);
        var pinglunarray = res.data.lists[0];
        that.setData({
          pinglunarray: pinglunarray,
          pinglunnumber: res.data.lists[1],
        })

      }
    })


  },

  pinglunsendfun: function (e) {
    var that = this;
    console.log(e.detail.value);
    let content = e.detail.value;
    let user_id = that.data.user_id;
    let photo_id = that.data.photo_dataid;
    // console.log(user_id);
    // console.log(photo_id);
    wx.request({
      url: 'https://photo.toyshare.cn/Comment/adds_do',
      data: {
        userid: user_id,
        photoid: photo_id,
        content: content,
      },
      success: function (res) {
        console.log(res)
        if (res.data.message == "操作成功"){
          that.setData({
            pinglunzt: '.pinglundivnone',
            shuruqk: "",
          })
          wx.request({
            url: 'https://photo.toyshare.cn/Comment/lists',
            data: {
              photoid: photo_id,
            },
            success: function (res) {
              console.log(res.data.lists);
              var pinglunarray = res.data.lists[0];
              that.setData({
                pinglunarray: pinglunarray,
                pinglunnumber: res.data.lists[1],
              })

            }
          })
        }else{
          wx.showToast({
            title: res.data.message ,
          })
        }
      }
    })
  }, 

  praise: function (e) {
    console.log(e);
    let that = this;
    let user_id = wx.getStorageSync('userid');
    let photo_id = that.data.photo_dataid;
    // that.data.photo_dataid = id;
    let praise_yes = e.currentTarget.dataset.praise_yes;
    let photo = that.data.photo;
    let url = '';
    // let praisefrequency = that.data.praisefrequency;
    // console.log(user_id);
    // console.log(photo_id);
    // console.log(praise_yes);
    if (praise_yes) {
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
        if (res.data.status == 1) {
          // console.log(+1);
          // that.data.photo.praise_yes=1;
          // photo.praise = parseInt(photo.praise) + 1;
          // that.setData({
          //   photo: that.data.photo,
          // })
        }

        if (res.data.data == "点赞成功") {
          console.log("加");
          that.data.photo.praise_yes = 1;
          photo.praise = parseInt(photo.praise) + 1;
          that.setData({
            photo: that.data.photo,

            // photo_data: photo_data,
          })
        }


        if (res.data.data == "取消成功") {
          console.log("减");
          that.data.photo.praise_yes = 0;
          photo.praise = parseInt(photo.praise) - 1;
          that.setData({
            photo: that.data.photo,
            
            // photo_data: photo_data,
          })
        }

        // if (praise_yes) {
        //   photo_data[i].praise = parseInt(photo_data[i].praise) - 1;
        //   photo_data[i].praise_yes = 0;
        // } else {
        //   photo_data[i].praise = parseInt(photo_data[i].praise) + 1;
        //   photo_data[i].praise_yes = 1;
        // }
      }
    })
  },
  

  pinglundivgo: function () {
    let that = this;
    that.setData({
      pinglunzt: 'pinglundiv',

    })

  },

  goGroup: function (options) {
    wx.navigateTo({
      url: "/pages/viewscoll/viewscoll?album_id=" + options.currentTarget.dataset.album_id
    });
  },
})