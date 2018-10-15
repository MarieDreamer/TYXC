Page({
    data: {
        showFunModel: !1,
        eventlist: [],
        showLoadingImg: !1,
        loadingImgOrText: !0,
        loadImgState: !0,
        textArr: [ "精彩内容正在赶来...", "稍等一下啦...", "小忆正在加载中..." ],
        showPlayVideoModal: !1,
        videoUrl: {
            url: "",
            pcover: ""
        },
        showDisposeModel: !1,
        classArr: [ "pic1", "pic2", "pic3" ],
        usernumber: 3006789,
        maxnumber: 5000009,
        showComInput: !1,
        placehold: "对ta说点啥...",
        inputfocus: !1,
        album_num:0,
        photo_num:0,
        like_num:0
    },

    onLoad: function(){
      //获取相册数量
        var that = this;
        // var userid = wx.getStorageSync('userid');
        var userid = 36;
        
        //获取相册数量
        wx.request({
          url: 'https://photo.toyshare.cn/PhotoAlbum/get_album_num_do/userid/' + userid,
          data: {
          },
          success: function (res) {
            // console.log(res)
            that.setData({
              album_num: res.data.data
            })
          },
        })
        //获取照片数量
        wx.request({
          url: 'https://photo.toyshare.cn/Photo/get_photo_num_do/userid/' + userid,
          data: {
          },
          success: function (res) {
            // console.log(res)
            that.setData({
              photo_num: res.data.data
            })
          },
        })

        //获取点赞数量
        wx.request({
          url: 'https://photo.toyshare.cn/Photo/get_like_num_do/userid/' + userid,
          data: {
          },
          success: function (res) {
            // console.log(res)
            that.setData({
              like_num: res.data.data
            })
          },
        })

    }
});