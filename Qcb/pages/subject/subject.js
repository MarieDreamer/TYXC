var s = getApp();

require("../../js/global.js");

Page({
    data: {
        formData: {
            realname: "",
            mobile: "",
            is_assign: 0
        },
        show: "",
        before_request: 1
    },
    onLoad: function() {
        var t = this;
        s.sendRequest({
            url: "/index.php?m=Mobile&c=User&a=apply&t=" + Math.random(),
            success: function(a) {
                1 == a.status ? 0 == a.info.is_assign ? t.setData({
                    formData: {
                        realname: a.info.realname,
                        mobile: a.info.mobile,
                        is_assign: 0
                    }
                }) : 0 == a.info.is_distribut && 1 == a.info.is_assign ? s.showModal({
                    content: "已提交申请，等待管理员审核",
                    confirm: function() {
                        wx.reLaunch({
                            url: "/pages/user/user"
                        });
                    }
                }) : 1 == a.info.is_distribut && wx.redirectTo({
                    url: "/pages/distribut/distribut"
                }) : -100 == a.status ? (s.globalData.tUrl = "/pages/subject/subject", wx.redirectTo({
                    url: "/pages/login/login"
                })) : -4 == a.status ? s.showModal({
                    content: "" + a.msg,
                    confirm: function() {
                        wx.reLaunch({
                            url: "/pages/user/user"
                        });
                    }
                }) : s.showModal({
                    content: "" + a.msg
                });
            }
        });
    },
    KeyInput: function(s) {
        var t = s.detail.value, a = {};
        a["formData." + s.currentTarget.dataset.name] = t, this.setData(a);
    },
    SelectChange: function() {
        var s = {};
        1 == this.data.formData.is_assign ? s["formData.is_assign"] = 0 : s["formData.is_assign"] = 1, 
        this.setData(s);
    },
    formSubmit: function() {
        var t = this.data.formData;
        return "" == t.realname || "" == t.mobile ? (s.showToast({
            title: "请完善信息",
            icon: "none"
        }), !1) : 0 == t.is_assign ? (s.showToast({
            title: "请阅读代理协议后再试",
            icon: "none"
        }), !1) : void s.sendRequest({
            url: "/index.php?m=Mobile&c=User&a=apply&t=" + Math.random(),
            data: t,
            method: "POST",
            success: function(t) {
                1 == t.status ? s.showModal({
                    content: "提交成功",
                    confirm: function() {
                        wx.redirectTo({
                            url: "/pages/user/user"
                        });
                    }
                }) : -100 == t.status ? (s.globalData.tUrl = "/pages/subject/subject", wx.redirectTo({
                    url: "/pages/login/login"
                })) : s.showModal({
                    content: "" + t.msg
                });
            }
        });
    },
    HideTan: function() {
        var s = {};
        s["formData.is_assign"] = 1, s.show = "none", this.setData(s);
    },
    showTan: function() {
        this.setData({
            show: ""
        });
    }
});