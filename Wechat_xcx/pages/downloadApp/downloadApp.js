var o = void 0;

Page({
    data: {
        QRCodeUrl: "https://api.zhuiyinanian.com/web/image/download_app.png"
    },
    onLoad: function(t) {
        o = this;
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    saveQRCode: function() {
        wx.downloadFile({
            url: o.data.QRCodeUrl,
            success: function(t) {
                if (200 === t.statusCode) {
                    var n = t.tempFilePath;
                    o.save(n);
                } else wx.showToast({
                    title: "二维码保存失败",
                    icon: "none"
                });
            },
            fail: function() {
                wx.showToast({
                    title: "二维码下载错误",
                    icon: "none"
                });
            }
        });
    },
    save: function(t) {
        wx.saveImageToPhotosAlbum({
            filePath: t,
            success: function() {
                wx.showToast({
                    title: "保存到相册成功"
                });
            },
            fail: function(t) {
                o.getWritePhotosAlbum();
            }
        });
    },
    getWritePhotosAlbum: function() {
        wx.getSetting({
            success: function(t) {
                t.authSetting["scope.writePhotosAlbum"] || wx.showModal({
                    title: "权限提示",
                    content: '你未授权"忆年共享相册"保存图片到你的相册，需要去授权吗？',
                    success: function(t) {
                        t.confirm ? wx.openSetting({
                            success: function(t) {
                                console.log("ss", t), t.authSetting["scope.writePhotosAlbum"] ? o.saveQRCode() : wx.showToast({
                                    title: "未授权，无法保存",
                                    icon: "none"
                                });
                            },
                            fail: function() {
                                wx.showToast({
                                    title: "授权失败，无法保存",
                                    icon: "none"
                                });
                            }
                        }) : wx.showToast({
                            title: "没有授权，无法保存",
                            icon: "none"
                        });
                    }
                });
            }
        });
    },
    copyWebsite: function() {
        wx.setClipboardData({
            data: "http://www.zhuiyinanian.com",
            success: function(o) {
                wx.showToast({
                    title: "已复制到粘贴版",
                    icon: "success",
                    image: "/images/helpcenter_window_ok.png"
                });
            }
        });
    }
});