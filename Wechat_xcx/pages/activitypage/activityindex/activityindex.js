var t = require("../../../utils/util.js"), i = require("../../../utils/api.js"), a = require("../../../utils/albumsjump.js").albumsjump, e = getApp();

Page({
    data: {
        allActivityGroup: [],
        myActivityGroup: [],
        isAllGroup: !0,
        showLoadingImg: !1,
        loadingImgOrText: !0,
        showLoadingImgMy: !1,
        loadingImgOrTextMy: !0,
        clickGroups: [ {
            imgUrl: "http://oibl5dyji.bkt.clouddn.com/stories_cup_plus@2x.png",
            title: "故事集",
            openUrl: "/package/stories/pages/index/index"
        } ]
    },
    // onLoad: function(t) {
    //     e.stat.statpv({
    //         route: this.route,
    //         options: t
    //     }), e.getUserInfo(function(t) {
    //         "新用户" != t.nickName || wx.redirectTo({
    //             url: "/pages/activitypage/login/home"
    //         });
    //     }), this.getAllActivity(), this.getSpacialActivity();
    // },
    // onShow: function() {
    //     wx.getStorageSync("userInfo") && wx.getStorageSync("userInfo").userid ? this.userid = wx.getStorageSync("userInfo").userid : wx.showModal({
    //         title: "错误",
    //         content: "获取用户信息失败，请重试",
    //         showCancel: !1,
    //         success: function() {
    //             wx.reLaunch({
    //                 // url: "/pages/index/index"
    //             });
    //         }
    //     });
    // },
    // toGroupScoll: function(t) {
    //     var i = t.currentTarget.dataset.groupid, e = t.currentTarget.dataset.grouptype;
    //     a({
    //         groupNewType: e,
    //         data: {
    //             lastPage: "activityindex",
    //             from: "grouplist",
    //             groupid: i
    //         },
    //         navigator: "navigate"
    //     });
    // },
    // showAll: function() {
    //     this.data.isAllGroup || (this.setData({
    //         isAllGroup: !0
    //     }), this.data.allActivityGroup && 0 == this.data.allActivityGroup.length && this.getAllActivity());
    // },
    // gotoStory: function(t) {
    //     e.stat.request({
    //         operation: "activityStory",
    //         userId: wx.getStorageSync("userid")
    //     }), wx.navigateTo({
    //         url: t.currentTarget.dataset.open
    //     });
    // },
    // showMy: function() {
    //     this.data.isAllGroup && (this.setData({
    //         isAllGroup: !1
    //     }), this.data.myActivityGroup && this.getMyActivity());
    // },
    // toSpecailActivity: function(i) {
    //     if (0 != i.currentTarget.dataset.status) {
    //         var a = i.currentTarget.dataset.url;
    //         if (a) {
    //             wx.navigateTo({
    //                 url: "/" + a
    //             });
    //             var e = {
    //                 userId: this.userid
    //             };
    //             t.joinSpacialActivity(e);
    //         }
    //     } else wx.showModal({
    //         title: "提示",
    //         content: "活动将于5月2日开始，敬请期待喔",
    //         showCancel: !1
    //     });
    // },
    // getAllActivity: function() {
    //     var i = this;
    //     wx.showToast({
    //         title: "正在加载...",
    //         icon: "loading",
    //         duration: 3e4,
    //         mask: !0
    //     }), t.wxreq({
    //         pathname: "YinianProject/activity/GetActivitiGroups",
    //         data: {
    //             type: "initialize",
    //             number: 0
    //         }
    //     }).then(function(t) {
    //         0 == t.code ? (t.data.forEach(function(t) {
    //             t.activitiStartTime = t.activitiStartTime.slice(0, 10).replace(/-/g, "."), t.activitiEndTime = t.activitiEndTime.slice(0, 10).replace(/-/g, ".");
    //         }), i.setData({
    //             allActivityGroup: t.data,
    //             showLoadingImg: !1,
    //             loadingImgOrText: !0
    //         }), i.isloading = !1, wx.hideToast()) : (wx.hideToast(), wx.showModal({
    //             title: "提示",
    //             content: "获取相册不成功，请重试",
    //             showCancel: !1,
    //             success: function() {
    //                 wx.reLaunch({
    //                     // url: "/pages/index/index"
    //                 });
    //             }
    //         }));
    //     }).catch(function(t) {
    //         wx.hideToast(), wx.showModal({
    //             title: "提示",
    //             content: "获取相册不成功，请重试",
    //             showCancel: !1,
    //             success: function() {
    //                 wx.reLaunch({
    //                     // url: "/pages/index/index"
    //                 });
    //             }
    //         });
    //     });
    // },
    // getSpacialActivity: function() {
    //     var i = this;
    //     t.wxreq({
    //         pathname: "YinianProject/activitySpacial/selectAllSpacialActivity",
    //         data: {}
    //     }).then(function(t) {
    //         0 == t.code && i.setData({
    //             specialList: t.data
    //         });
    //     });
    // },
    // getMyActivity: function() {
    //     var i = this;
    //     wx.showToast({
    //         title: "正在加载...",
    //         icon: "loading",
    //         duration: 3e4,
    //         mask: !0
    //     }), t.wxreq({
    //         pathname: "YinianProject/activity/GetMyActivitiGroups",
    //         data: {
    //             type: "initialize",
    //             jointime: 0,
    //             userid: i.userid
    //         }
    //     }).then(function(t) {
    //         0 == t.code ? (t.data.forEach(function(t) {
    //             t.activitiStartTime = t.activitiStartTime.slice(0, 10).replace(/-/g, "."), t.activitiEndTime = t.activitiEndTime.slice(0, 10).replace(/-/g, ".");
    //         }), i.setData({
    //             myActivityGroup: t.data,
    //             showLoadingImgMy: !1,
    //             loadingImgOrTextMy: !0
    //         }), 
    //         i.ismyloading = !1, wx.hideToast()) : (wx.hideToast(), wx.showModal({
    //             title: "提示",
    //             content: "获取相册不成功，请重试",
    //             showCancel: !1,
    //             success: function() {}
    //         }));
    //     }).catch(function(t) {
    //         wx.hideToast(), wx.showModal({
    //             title: "提示",
    //             content: "获取相册不成功，请重试",
    //             showCancel: !1,
    //             success: function() {}
    //         });
    //     });
    // },
    // onReachBottom: function() {
    //     wx.getStorageSync("userInfo") && (0 == this.data.myActivityGroup.length && !this.data.isAllGroup || 0 == this.data.allActivityGroup.length && this.data.isAllGroup || this.loading());
    // },
    // loading: function() {
    //     var t = this.data.isAllGroup;
    //     if (this.data.myActivityGroup.length > 0 && !t || this.data.allActivityGroup.length > 0 && t) {
    //         var a = this;
    //         if (t) {
    //             if (this.isloading) return;
    //             this.isloading = !0, this.setData({
    //                 showLoadingImg: !0,
    //                 loadingImgOrText: !0
    //             });
    //         } else {
    //             if (this.ismyloading) return;
    //             this.ismyloading = !0, this.setData({
    //                 showLoadingImgMy: !0,
    //                 loadingImgOrTextMy: !0
    //             });
    //         }
    //         var e = t ? "YinianProject/activity/GetActivitiGroups" : "YinianProject/activity/GetMyActivitiGroups", o = null;
    //         o = t ? {
    //             type: "loading",
    //             number: this.data.allActivityGroup[this.data.allActivityGroup.length - 1].number,
    //             userid: a.userid
    //         } : {
    //             type: "loading",
    //             jointime: this.data.myActivityGroup[this.data.myActivityGroup.length - 1].joinTime,
    //             userid: a.userid
    //         }, wx.request({
    //             url: i.getUrl(e),
    //             data: o,
    //             success: function(i) {
    //                 0 == i.data.code ? 0 == (i = i.data).data.length ? t ? a.setData({
    //                     showLoadingImg: !0,
    //                     loadingImgOrText: !1
    //                 }) : a.setData({
    //                     showLoadingImgMy: !0,
    //                     loadingImgOrTextMy: !1
    //                 }) : (i.data.forEach(function(i) {
    //                     i.activitiStartTime = i.activitiStartTime.slice(0, 10).replace(/-/g, "."), i.activitiEndTime = i.activitiEndTime.slice(0, 10).replace(/-/g, "."), 
    //                     t ? a.data.allActivityGroup.push(i) : a.data.myActivityGroup.push(i);
    //                 }), t ? (a.isloading = !1, a.setData({
    //                     allActivityGroup: a.data.allActivityGroup,
    //                     showLoadingImg: !1
    //                 })) : (a.ismyloading = !1, a.setData({
    //                     myActivityGroup: a.data.myActivityGroup,
    //                     showLoadingImgMy: !1
    //                 }))) : t ? (a.isloading = !1, a.setData({
    //                     showLoadingImg: !1
    //                 })) : (a.ismyloading = !1, a.setData({
    //                     showLoadingImgMy: !1
    //                 }));
    //             },
    //             fail: function() {
    //                 t ? (a.isloading = !1, a.setData({
    //                     showLoadingImg: !1
    //                 })) : (a.ismyloading = !1, a.setData({
    //                     showLoadingImgMy: !1
    //                 }));
    //             }
    //         });
    //     }
    // }
});