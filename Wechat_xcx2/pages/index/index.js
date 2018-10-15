//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    album_data: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    showDisposeModel: !1,
    btn_show:1,
    toView: 'red',
    scrollTop: 100,
    page: 1,
    is_onReachBottom:0,
  },
  changestart: function (t) {
    r = t.touches[0].pageX, u = t.touches[0].pageY;
  },
  changemove: function (t) { },
  changend: function (t) {
    var e = this;
    if (c = t.changedTouches[0].pageX, d = t.changedTouches[0].pageY, r - c > 30) {
      if ("pic2" == e.data.classArr[0]) return;
      e.data.classArr.unshift(e.data.classArr[e.data.classArr.length - 1]), e.data.classArr.pop(e.data.classArr[e.data.classArr.length - 1]),
        e.setData({
          classArr: e.data.classArr
        });
    } else if (c - r > 30) {
      if ("pic1" == e.data.classArr[0]) return;
      e.data.classArr.push(e.data.classArr[0]), e.data.classArr.shift(e.data.classArr[0]),
        e.setData({
          classArr: e.data.classArr
        });
    }
  },

  addgroup: function (t) {
    wx.navigateTo({
      url: "../makegroup/makegroup?lastPage=index",
      success: function (t) {
        // o.data.showNewUser && o.setData({
        //   showNewUser: !1
        // });
      }
    });
  },
  go_huodong: function (t) {
    wx.switchTab({
      url: '/pages/activityindex/activityindex'
    })
  },
  search_album: function (e) {
    let that = this;
    let user_id = wx.getStorageSync('userid');
    let name = e.detail.value;
    wx.request({
      url: 'https://photo.toyshare.cn/PhotoAlbum/get_person_album_do',
      data: {
        user_id: user_id,
        name: name,
      },
      success: function (res) {
        if (res.data.status == 1) {
          that.setData({
            album_data: res.data.data[1],
          });
        } else {
          wx.showToast({
            title: '添加失败',
            icon: 'success',
            duration: 1000
          });
        }
      }
    })
  },
  toGroupScoll: function (t) {
    let album_id=t.currentTarget.dataset.groupid;
    wx.navigateTo({
      url: "/pages/viewscoll/viewscoll?album_id="+album_id
    });
  },

  toMsgCenter: function (t) {
    wx.navigateTo({
      url: "/pages/mymemory/mymemory"
    });
  },

  fasttoknow: function (t) {
    wx.navigateTo({
      url: '/pages/text/text',
    })
  },

  usernumberchange: function () {
    var t = this;
    t.timerinterval = setInterval(function () {
      if (t.data.usernumber > t.data.maxnumber) {
        clearInterval(t.timerinterval), t.timerinterval = null;
        var e = t.toThousands(t.data.maxnumber);
        t.setData({
          usernumber: e
        });
      } else t.data.usernumber += 323456, t.setData({
        usernumber: t.data.usernumber
      });
    }, 100);
  },
  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (wx.getStorageSync('password')) {
      wx.navigateTo({
        url: '/pages/password/password?close=' + 2
      })
    }
    var username = wx.getStorageSync('username');
    if (!username) {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }
    let that = this;
    let user_id = wx.getStorageSync('userid');
    wx.request({
      url: 'https://photo.toyshare.cn/PhotoAlbum/get_person_album_do',
      data: {
        user_id: user_id,
      },
      success: function (res) {
        if (res.data.status == 1) {
          that.setData({
            album_data: res.data.data,
          });
        } else {
          wx.showToast({
            title: '添加失败',
            icon: 'success',
            duration: 1000
          });
        }
      }
    })
  },
  onShow: function () {
    let that = this;
    let user_id = wx.getStorageSync('userid');
    wx.request({
      url: 'https://photo.toyshare.cn/PhotoAlbum/get_person_album_do',
      data: {
        user_id: user_id,
      },
      success: function (res) {
        if (res.data.status == 1) {
          that.setData({
            page: 1,
            album_data: res.data.data,
          });
        } else {
          wx.showToast({
            title: '添加失败',
            icon: 'success',
            duration: 1000
          });
        }
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // //上拉刷新
  // onReachBottom: function () {
  //   var that = this;
  //   let user_id = wx.getStorageSync('userid');
  //   that.setData({
  //     page: that.data.page+1
  //   })
    
  //   //模拟加载
  //   if (that.data.is_onReachBottom==0){
  //     setTimeout(function () {
  //       // complete
        
  //       wx.request({
  //         url: 'https://photo.toyshare.cn/PhotoAlbum/get_person_album_do/page/' + that.data.page,
  //         data: {
  //           user_id: user_id,
  //         },
  //         success: function (res) {
  //           wx.stopPullDownRefresh() //停止下拉刷新
  //           if (res.data.data[1].length < 6) {
  //             that.setData({
  //               is_onReachBottom: 1
  //             });
  //           }
  //           if (res.data.status == 1) {
  //             let album_data = that.data.album_data;
  //             for (let i = 0; i < res.data.data[1].length; i++) {
  //               album_data.push(res.data.data[1][i])
  //             }
  //             that.setData({
  //               album_data: album_data,
  //             });
  //           } else {
  //             wx.showToast({
  //               title: '添加失败',
  //               icon: 'success',
  //               duration: 1000
  //             });
  //           }
  //         }
  //       })
  //     }, 500);
  //   }
  // },
  //下拉刷新
  // onPullDownRefresh: function () {
  //   wx.showNavigationBarLoading() //在标题栏中显示加载
  //   var that = this;
  //   let user_id = wx.getStorageSync('userid');
  //   //模拟加载
  //   setTimeout(function () {
  //     // complete
  //     wx.hideNavigationBarLoading() //完成停止加载
  //     wx.stopPullDownRefresh() //停止下拉刷新
  //     wx.request({
  //       url: 'https://photo.toyshare.cn/PhotoAlbum/get_person_album_do',
  //       data: {
  //         user_id: user_id,
  //       },
  //       success: function (res) {
  //         if (res.data.status == 1) {
  //           that.setData({
  //             page: 1,
  //             album_data: res.data.data[1],
  //           });
  //         } else {
  //           wx.showToast({
  //             title: '添加失败',
  //             icon: 'success',
  //             duration: 1000
  //           });
  //         }
  //       }
  //     })
  //   }, 500);
  // },
  
})
