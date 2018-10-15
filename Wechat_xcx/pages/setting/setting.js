var e = require("../../utils/api.js"), t = getApp(), a = require("../../utils/reg.js"), o = require("../../utils/util.js"), s = void 0, i = void 0, n = void 0, c = [ "babyalbum", "familyalbum", "friendsalbum", "loversalbum", "personalalbum" ];

Page({
    data: {
        canIUse: !1,
        showsharemode: !1,
        showIt: !1,
        userId: -1,
        groupId: -1,
        createrId: -1,
        albumNameLength: 0,
        modal: 0,
        codeAuth: {
            groupQrCodeAuth: "0",
            eventQrCodeAuth: "0"
        }
    },
    onLoad: function(e) {
        t.stat.statpv({
            route: this.route,
            options: e
        });
        var a = e.gOrigin;
        this.clickFrom = e.clickFrom || "viewscoll";
        var n = e.albumType || "viewscoll", l = c.includes(n);
        s = wx.getStorageSync("userid"), i = wx.getStorageSync("groupid"), wx.setNavigationBarTitle({
            title: "相册设置"
        }), o.getQrCodeMakeAuth(function(e) {
            r.setData({
                codeAuth: e
            });
        }), this.disabled = -1;
        var r = this;
        wx.canIUse && wx.canIUse("button.open-type.share") && r.setData({
            canIUse: !0
        }), wx.getSystemInfo({
            success: function(e) {
                r.setData({
                    winWidth: e.windowWidth,
                    winHeight: e.windowHeight,
                    ganme: wx.getStorageSync("ganme")
                });
            }
        }), t.fromlast = 1, this.setData({
            userid: s,
            groupid: i,
            gOrigin: a,
            albumType: n,
            isSpecialAlbum: l,
            canNotExit: e.canNotExit || 0,
            isIphonex: t.globalData.systemInfo.model.toLowerCase().indexOf("iphone x") >= 0
        });
    },
    onShow: function() {
        var a = this;
        a.getAlbumBaseInfo(function(e) {
            e == s ? a.setData({
                showIt: !0
            }) : a.setData({
                showIt: !1
            });
        });
        var o;
        o = 1 == wx.getStorageSync("msgState"), this.setData({
            switchState: o
        }), t.getshowState(function(e) {
            a.setData({
                showpuzze: e
            });
        });
        getCurrentPages();
        wx.request({
            url: e.getUrl("YinianProject/space/ShowGroupMemberTop"),
            data: {
                groupid: i,
                userid: s,
                source: "",
                pagenum: 1
            },
            method: "GET",
            success: function(e) {
                if (0 == e.data.code) {
                    var t = e.data.data, o = t.slice(0, 4);
                    a.setData({
                        alluserlist: t,
                        userlist: o
                    }), console.log(a.data.userlist);
                }
            }
        });
    },
    toAddSet: function() {
        wx.redirectTo({
            url: "/pages/setting/addset/addset"
        });
    },
    loading: function() {
        var e = this;
        if (!this.isloading) {
            this.isloading = !0;
            var t = parseInt(e.data.userlist.length) + 18;
            wx.hideToast(), e.setData({
                userlist: e.data.alluserlist.slice(0, t)
            }), e.isloading = !1;
        }
    },
    switchChange: function(t) {
        var a = t.detail.value.toString();
        wx.request({
            url: e.getUrl("YinianProject/space/SpaceMemberSetIsPush"),
            data: {
                groupid: i,
                userid: s,
                isPush: a
            },
            success: function(e) {
                if (0 == e.data.code) {
                    "true" == a ? 1 : 0, wx.setStorageSync("msgState", a), wx.showToast({
                        title: "修改成功"
                    });
                }
            }
        });
    },
    deletegroup: function() {
        s ? wx.showModal({
            title: "解散相册",
            content: "是否确定解散相册",
            showCancel: !0,
            success: function(t) {
                t.confirm && (wx.showToast({
                    title: "请稍后"
                }), wx.request({
                    url: e.getUrl("YinianProject/yinian/DeleteGroup"),
                    data: {
                        userid: s,
                        groupid: i,
                        source: "smallApp"
                    },
                    success: function(e) {
                        "success" == e.data.msg && wx.showToast({
                            title: "相册已解散",
                            success: function() {
                                wx.switchTab({
                                    url: "/pages/index/index"
                                });
                            }
                        });
                    }
                }));
            }
        }) : wx.showModal({
            title: "错误",
            content: "获取用户授权信息失败！请稍后再试",
            showCancel: !1
        });
    },
    leavegroup: function() {
        s ? wx.showModal({
            title: "退出相册",
            content: "是否确定退出相册",
            showCancel: !0,
            success: function(t) {
                t.confirm && (wx.showToast({
                    title: "请稍后"
                }), wx.request({
                    url: e.getUrl("YinianProject/yinian/LeaveAlbum"),
                    data: {
                        userid: s,
                        groupid: i,
                        source: "smallApp"
                    },
                    success: function(e) {
                        "success" == e.data.msg && wx.showToast({
                            title: "已退出该相册",
                            success: function() {
                                wx.switchTab({
                                    url: "/pages/index/index"
                                });
                            }
                        });
                    }
                }));
            }
        }) : wx.showModal({
            title: "错误",
            content: "获取用户授权信息失败！请稍后再试",
            showCancel: !1
        });
    },
    editpic: function(t) {
        s ? s == n ? wx.request({
            url: e.getUrl("YinianProject/yinian/GetUploadToken"),
            data: {},
            method: "GET",
            success: function(t) {
                var a = t.data.data[0].token;
                wx.chooseImage({
                    count: 1,
                    sizeType: [ "original", "compressed" ],
                    sourceType: [ "album", "camera" ],
                    success: function(t) {
                        wx.showToast({
                            title: "正在上传",
                            icon: "loading",
                            duration: 2e3
                        }), wx.uploadFile({
                            url: "https://upload.qiniup.com",
                            filePath: t.tempFilePaths[0],
                            name: "file",
                            formData: {
                                key: t.tempFilePaths[0].split("//")[1],
                                token: a
                            },
                            success: function(t) {
                                var a = JSON.parse(t.data);
                                new Date();
                                wx.request({
                                    url: e.getUrl("YinianProject/yinian/ModifyGroupPic"),
                                    data: {
                                        url: a.key,
                                        userid: s,
                                        groupID: wx.getStorageSync("groupid")
                                    },
                                    success: function(e) {
                                        0 == e.data.code && wx.showToast({
                                            title: "修改成功",
                                            icon: "success",
                                            duration: 2e3,
                                            success: function() {
                                                setTimeout(function() {
                                                    wx.hideToast();
                                                }, 1500);
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }) : wx.showModal({
            title: "提示",
            content: "非相册管理员，无法修改相册封面",
            showCancel: !1
        }) : wx.showModal({
            title: "错误",
            content: "获取用户授权信息失败！请稍后再试",
            showCancel: !1
        });
    },
    modifyAlbumName: function(e) {
        this.setData({
            ganme: e.detail.value
        });
    },
    openAlbumCover: function() {
        s == n ? wx.navigateTo({
            url: "/pages/others/changbgpic/changbgpic"
        }) : wx.showModal({
            title: "提示",
            content: "非相册管理员，无法修改相册封面",
            showCancel: !1
        });
    },
    submitfun: function(t) {
        var o = this;
        if (0 !== o.disabled) if (s) if (s == n) {
            var c = this.data.ganme;
            if (c.trim().length > 0) {
                if (c.indexOf("忆年") >= 0) return void wx.showModal({
                    title: "包含敏感词",
                    content: "请勿使用包含敏感词汇的相册名称",
                    showCancel: !1
                });
                if (a.testStr(c)) return void wx.showModal({
                    title: "包含敏感词",
                    content: "请勿使用包含敏感词汇的相册名称",
                    showCancel: !1
                });
                wx.request({
                    url: e.getUrl("YinianProject/yinian/ModifyGroupName"),
                    data: {
                        groupid: i,
                        groupName: c,
                        userid: s
                    },
                    success: function(e) {
                        o.cancleModal(), 0 == e.data.code && (wx.showToast({
                            title: "修改成功",
                            icon: "success"
                        }), wx.setStorageSync("ganme", c));
                    },
                    complete: function() {
                        o.disabled = 1;
                    }
                });
            } else wx.showModal({
                title: "提示",
                content: "请输入正确的相册名称",
                showCancel: !1
            });
        } else wx.showModal({
            title: "提示",
            content: "非相册管理员，无法修改相册名称",
            showCancel: !1
        }); else wx.showModal({
            title: "错误",
            content: "获取用户授权信息失败！请稍后再试",
            showCancel: !1
        }); else wx.showToast({
            title: "操作太频繁",
            image: "/images/toast_warning.png",
            duration: 2e3
        });
    },
    showcode: function() {
        if (i) {
            var t = i || 0, a = s || 0;
            if (o.countOperation("settingCode", t, a, ""), wx.showToast({
                title: "正在生成二维码",
                icon: "loading",
                duration: 15e3
            }), "grouptypescoll" === this.clickFrom) {
                var n = s || 0;
                o.wxreq({
                    pathname: "YinianProject/qrCode/makeGroupQrCodeToSpacial",
                    data: {
                        userid: n,
                        groupid: i,
                        isJoinAblum: "yes"
                    }
                }).then(function(e) {
                    if (wx.hideToast(), 0 == e.code) {
                        var t = e.data[0].url;
                        wx.previewImage({
                            urls: [ t ]
                        });
                    } else wx.showModal({
                        title: "提示",
                        content: "获取二维码失败",
                        showCancel: !1
                    });
                }).catch(function() {
                    wx.hideToast(), wx.showModal({
                        title: "提示",
                        content: "网络错误，稍后重试",
                        showCancel: !1
                    });
                });
            } else {
                var c = "YinianProject/qrCode/makeGroupQrCode";
                "viewscoll" === this.clickFrom ? c = "YinianProject/qrCode/makeGroupQrCode" : "party" === this.clickFrom && (c = "YinianProject/qrCode/makeGroupQrCodeToParty"), 
                wx.request({
                    url: e.getUrl(c),
                    data: {
                        groupid: i,
                        userid: s
                    },
                    success: function(e) {
                        if (wx.hideToast(), 200 == e.statusCode) {
                            var t = e.data.data[0].url;
                            wx.previewImage({
                                urls: [ t ]
                            });
                        } else wx.showModal({
                            title: "提示",
                            content: "获取二维码失败",
                            showCancel: !1
                        });
                    },
                    fail: function() {
                        wx.hideToast(), wx.showModal({
                            title: "提示",
                            content: "网络错误，稍后重试",
                            showCancel: !1
                        });
                    }
                });
            }
        } else wx.showModal({
            title: "提示",
            content: "找不到空间信息，请退出该相册重进。。",
            showCancel: !1
        });
    },
    showshare: function() {
        wx.showModal({
            title: "添加好友",
            content: "将照片墙或时间轴分享给你的好友即可邀请对方加入",
            showCancel: !1,
            confirmColor: "#353535"
        });
    },
    modifyAlbumNameInput: function(e) {
        this.setData({
            ganme: e.detail.value,
            albumNameLength: e.detail.value.length
        });
    },
    cancleModal: function() {
        this.setData({
            modal: 0,
            gname: wx.getStorageSync("ganme"),
            albumNameLength: wx.getStorageSync("ganme").length
        });
    },
    openModal: function() {
        s == n ? this.setData({
            modal: 1,
            albumNameLength: wx.getStorageSync("ganme").length
        }) : wx.showModal({
            title: "提示",
            content: "非相册管理员，无法修改相册名称",
            showCancel: !1
        });
    },
    getAlbumBaseInfo: function(t) {
        var a = this;
        a.disabled = 0, wx.showToast({
            title: "获取数据中...",
            icon: "loading",
            duration: 1e4,
            mask: !0
        }), wx.request({
            url: e.getUrl("YinianProject/space/MembersNum"),
            data: {
                groupid: i
            },
            method: "GET",
            success: function(e) {
                0 == e.data.code && (a.setData({
                    createrid: e.data.data[0].userid
                }), n = e.data.data[0].userid, wx.hideToast(), "function" == typeof t && t(n));
            },
            complete: function() {
                a.disabled = 1;
            }
        });
    }
});