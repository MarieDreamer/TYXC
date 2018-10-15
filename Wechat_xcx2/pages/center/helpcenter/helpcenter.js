var e = getApp();

Page({
    data: {
        problemArr: [ {
            problem: "童忆共享相册是什么？",
            answer: "童忆共享相册是和家人、朋友、同事共享并存储照片和短视频，根据主题创建相册、原图保存、永不过期",
            isActive: !1
        }, {
            problem: "如何创建相册？",
            answer: "进入童忆小程序 > 点击创建相册 > 选择相册类型 > 点击创建共享相册",
            isActive: !1
        }, {
            problem: "如何上传照片和视频？",
            answer: "点击相册封面 > 进入相册 > 选择+号 > 选择要上传或拍摄的照片视频，点击确定即可上传照片与视频",
            isActive: !1
        }, {
            problem: "如何邀请成员？",
            answer: "进入相册 > 点击顶部栏邀请按钮 > 分享微信群/好友",
            isActive: !1
        }, {
            problem: "如何原图下载/视频下载？",
            answer: "进入相册 > 点击左下角下载按钮 > 原图下载/视频下载",
            isActive: !1
        }, {
            problem: "上传的图片如何分享给好友？",
            answer: "进入相册 > 点击左下角分享按钮 > 分享",
            isActive: !1
        }, {
            problem: "如何同步照片？",
            answer: "进入相册 > 点击左下角同步按钮 > 同步",
            isActive: !1
        }, {
            problem: "什么是管理员？管理员有什么权限？",
            answer: "相册创建者即是管理员。管理员可置顶动态，修改相册名称，修改相册封面，还可以删除相册成员等",
            isActive: !1
        }, {
            problem: "什么是时刻？",
            answer: "是用户对创建相册与加入相册的好友和自己上传的最新动态列表进行查看浏览",
            isActive: !1
        } ]
    },
    onLoad: function(t) {
    },
    onShow: function() {},
    copytext: function(e) {
        var t, r = e.currentTarget.dataset.name;
        if ("wx" == r) t = "yiniankefu"; else {
            if ("qq" != r) return;
            t = "133229";
        }
        wx.setClipboardData({
            data: t,
            success: function(e) {
                wx.showToast({
                    title: "已复制到粘贴版",
                    icon: "success",
                    image: "/images/helpcenter_window_ok.png"
                });
            }
        });
    },
    expand: function(e) {
        var t = e.currentTarget.dataset.sel;
        this.data.problemArr[t].isActive ? (this.data.problemArr[t].isActive = !1, this.setData({
            problemArr: this.data.problemArr
        })) : (this.data.problemArr.forEach(function(e, r) {
            e.isActive = r == t;
        }), this.setData({
            problemArr: this.data.problemArr
        }));
    }
});