var t = getApp(), a = require("../../js/global.js");

Page({
    data: {
        star: {
            0: {
                t: "xx",
                val: 1
            },
            1: {
                t: "xx",
                val: 2
            },
            2: {
                t: "xx",
                val: 3
            },
            3: {
                t: "xx",
                val: 4
            },
            4: {
                t: "xx",
                val: 5
            }
        },
        allpic: 5,
        pics: [],
        rank: 5,
        content: "",
        show: "flex",
        uploadflag: !1
    },
    onLoad: function(a) {
        var e = a.id;
        if (e > 0) {
            var o = this;
            o.setData({
                id: e
            }), t.sendRequest({
                url: "/index.php?m=Mobile&c=User&a=add_comment&rec_id=" + e + "&t=" + Math.random(),
                success: function(a) {
                    1 == a.status ? o.setData(a.goods) : t.showModal({
                        content: "" + a.msg
                    });
                }
            });
        } else t.showModal({
            content: "参数错误"
        });
    },
    ChooseImage: function() {
        var t = this, a = (t.data.pics, t.data.allpic);
        wx.chooseImage({
            count: a,
            sizeType: [ "original" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                t.setData({
                    pics: a.tempFilePaths
                });
            }
        });
    },
    ChangeStar: function(t) {
        var a = t.currentTarget.dataset.index, e = this.data.star, o = {};
        for (var s in e) s <= parseInt(a) ? o["star." + s + ".t"] = "xx" : o["star." + s + ".t"] = "xxk";
        o.rank = e[a].val, this.setData(o);
    },
    ChangeArea: function(t) {
        var a = t.detail.value;
        this.setData({
            content: a
        });
    },
    ViewImages: function(t) {
        var a = t.currentTarget.dataset.index, e = this.data.pics;
        wx.previewImage({
            current: e[a],
            urls: e
        });
    },
    SubmitComment: function() {
        var a = this;
        if (0 == a.data.uploadflag) {
            if ("" == a.data.content) return t.showModal({
                content: "请填写评论内容"
            }), !1;
            a.UploadImg();
        } else t.sendRequest({
            url: "/index.php?m=Mobile&c=User&a=add_comment&t=" + Math.random(),
            data: {
                goods_rank: a.data.rank,
                content: a.data.content,
                goods_id: a.data.goods.goods_id,
                order_id: a.data.goods.order_id
            },
            method: "POST",
            success: function(e) {
                1 == e.status ? t.showToast({
                    title: "提交成功",
                    icon: "success",
                    duration: 2500,
                    success: function() {
                        wx.redirectTo({
                            url: "/pages/comment_list/comment_list?status=1"
                        });
                    }
                }) : -100 == e.status ? (t.globalData.tUrl = "/pages/comment/comment?id=" + a.data.id, 
                wx.redirectTo({
                    url: "/pages/login/login"
                })) : t.showModal({
                    content: "" + e.msg
                });
            }
        });
    },
    UploadImg: function() {
        var e = this, o = e.data.pics, s = t.getSessionid(), n = a.MathRand(6), i = 0;
        if (o.length > 0) {
            t.showToast({
                title: "正在上传",
                icon: "loading",
                duration: 1e5
            });
            for (var d = 0; d < o.length; d++) wx.uploadFile({
                url: t.getSiteBaseUrl() + "/index.php?m=Mobile&c=User&a=uploadImage&randnum=" + n,
                filePath: o[d],
                name: "comment_img_file",
                header: {
                    "Content-Type": "application/json",
                    Cookie: "PHPSESSID=" + s
                },
                success: function(a) {
                    var s = JSON.parse(a.data);
                    console.log(s), 1 == s.status ? (i += 1) == o.length && (t.hideToast(), e.setData({
                        uploadflag: !0
                    }), e.SubmitComment()) : (t.globalData.tUrl = "/pages/comment/comment?id=" + e.data.id, 
                    wx.redirectTo({
                        url: "/pages/login/login"
                    }));
                }
            });
        } else e.setData({
            uploadflag: !0
        }), e.SubmitComment();
    }
});