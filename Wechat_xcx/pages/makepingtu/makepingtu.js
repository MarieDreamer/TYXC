var t = getApp(), e = require("../../utils/util.js"), i = require("../../utils/api.js"), a = require("../../utils/promise.js");

Page({
    data: {
        imgPath: "",
        puzzid: 0
    },
    onLoad: function(e) {
        t.stat.statpv({
            route: this.route,
            options: e
        });
        var i = this;
        e.id && i.setData({
            imgPath: wx.getStorageSync("ptUrl"),
            puzzid: e.id
        });
    },
    onShow: function() {},
    chooseImg: function() {
        var t = this, i = void 0, n = new a(function(t, i) {
            e.wxreq({
                pathname: "YinianProject/yinian/GetUploadToken"
            }).then(function(e) {
                t(e.data[0].token);
            });
        });
        e.wxpromise(wx.chooseImage)({
            count: 1,
            sizeType: [ "original" ],
            sourceType: [ "album", "camera" ]
        }).then(function(e) {
            return wx.showToast({
                title: "正在上传",
                icon: "loading",
                duration: 1e4
            }), i = e.tempFilePaths[0], t.setData({
                imgPath: i
            }), n;
        }).then(function(t) {
            return e.wxpromise(wx.uploadFile)({
                url: "https://upload.qiniup.com",
                filePath: i,
                name: "file",
                formData: {
                    key: i.split("//")[1],
                    token: t
                }
            });
        }).then(function(t) {
            return e.wxreq({
                pathname: "YinianProject/activity/MakePuzzle",
                data: {
                    userid: wx.getStorageSync("userid"),
                    picture: JSON.parse(t.data).key,
                    content: ""
                }
            });
        }).then(function(e) {
            wx.hideToast(), t.setData({
                puzzid: e.data[0].puzzleID
            });
        });
    },
    modifypuzz: function(t) {
        var e = t.detail.value.text, a = this;
        wx.request({
            url: i.getUrl("YinianProject/activity/ModifyPuzzleInfo"),
            data: {
                userid: wx.getStorageSync("userid"),
                puzzleID: a.data.puzzid,
                content: e
            },
            success: function(t) {
                t.data.data;
                wx.redirectTo({
                    url: "../../pages/pingtu/pingtu?id=" + a.data.puzzid
                });
            }
        });
    }
});