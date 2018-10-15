var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
var qqmapsdk;
Page({
  data: {
    img_url: [],
    choosepic: [],
    address: '请选择地址',
    nameString: "",
    idStr: "",
    album_id:1,
    flag:0,
  },
  onLoad: function (t) {
    let that = this;
    that.setData({
      album_id: t.album_id,
    })
    qqmapsdk = new QQMapWX({
      key: 'KRQBZ-QHPC2-26FU2-CXFAL-M2JM5-O3FXX'
    });
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude,
          },
          success: function (res) {
            console.log(res);
            that.setData({
              address: res.result.address,
            })
          },
        });
      }
    })
  },
  prevent: function () { },
  onShow: function () {

  },
  onHide: function () { },
  onUnload: function () {
  },
  sendLeaveData: function () {
  },
  toUploadSync: function () {
  },
  addpic: function () {
    let that=this;
    wx.chooseImage({
      count: 9,
      sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        let img_url=that.data.img_url;
        for (let i = 0; i < res.tempFilePaths.length; i++) {
          img_url.push(res.tempFilePaths[i])
        }
        that.setData({
          img_url: img_url
        })
      }
    })
  },
  picpdelete: function (t) {
    let that = this;
    let img_url= that.data.img_url;
    img_url = that.remove_data(img_url,t.currentTarget.dataset.index);
    that.setData({
      img_url: img_url
    })
  },
  remove_data: function (array, dx){
    if (isNaN(dx) || dx > array.length) { return false; }
    for (var i = 0, n = 0; i < array.length; i++) {
      if (array[i] != array[dx]) {
        array[n++] = array[i]
      }
    }
    array.length -= 1
    return array;
  },
  formSubmit: function (e) {
    console.log(e);
    let that = this;
    var userid = wx.getStorageSync('userid');
    //判断是否有权限上传图片
    wx.request({
      url: 'https://photo.toyshare.cn/PhotoAlbum/check',
      data:{
        album_id: that.data.album_id,
        user_id: userid
      },
      success:function(res){
        console.log(res.data)
        //有权限进行上传图片
        if (res.data.data =='正在上传'){
          wx.showLoading({
            title: '上传中',
          })
          that.img_upload(e)
        }
        //无权限上传图片
        if (res.data.data == '您没有该权限'){
          that.setData({
            flag: 0
          })
          wx.showModal({
            title: '温馨提示',
            content: '您没有该相册的权限',
            showCancel: false,
          })
        }
      }
    })
  },
  img_upload: function (e){
    let that = this;
    let img_url = that.data.img_url;
    let img_url_ok = [];
    for (let i = 0; i < img_url.length; i++) {
      wx.uploadFile({
        url: 'https://photo.toyshare.cn/photo/upload_do',
        filePath: img_url[i],
        name: 'file',
        formData: {
          'user': 'test'
        },
        success: function (res) {
          console.log('上传成功');
          img_url_ok.push(res.data)
          if (img_url_ok.length == img_url.length) {
            var userid = wx.getStorageSync('userid');
            var title = e.detail.value.title;
            var content = e.detail.value.text;
            var album_id = that.data.album_id;
            var address = that.data.address;
            wx.request({
              url: 'https://photo.toyshare.cn/photo/adds_do',
              data: {
                timeStamp: e.detail.formId,
                user_id: userid,
                album_id: album_id,
                url: img_url_ok,
                title: title,
                content: content,
                address: address,
              },
              success: function (res) {
                if (res.data.status == 1) {
                  wx.hideLoading()
                  wx.showModal({
                    title: '提交成功',
                    showCancel: false,
                    success: function (res) {
                      if (res.confirm) {
                        wx.navigateBack({
                          delta: 1
                        })
                      }
                    }
                  })
                }
              }
            })
          }
        },
        fail: function (res) {
          // console.log('上传失败')
        }
      })
    }
  }, 
});