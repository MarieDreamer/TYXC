var e = getApp(), t = require("../../js/global.js");

Page({
    data: {
        submitData: {
            mobile: "",
            mobile_code: ""
        },
        before_request: 1,
        sendflag: !0,
        send_code: "获取验证码",
        wait: 120,
        flag: !0
    },
    onLoad: function(t) {
        var a = this;
        e.sendRequest({
            url: "/index.php?m=Mobile&c=User&a=info&t=" + Math.random(),
            success: function(e) {
                a.setData(e.user), a.setData({
                    submitData: {
                        mobile: e.user.mobile
                    }
                });
            }
        });
    },
    MobileInput: function(e) {
        this.setData({
            "submitData.mobile": e.detail.value
        });
    },
    MobileCodeInput: function(e) {
        this.setData({
            "submitData.mobile_code": e.detail.value
        });
    },
    formSubmit: function(t) {
        var a = this;
        a.data.submitData.mobile.length > 0 && a.data.submitData.mobile_code.length > 0 && 1 == a.data.before_request && e.sendRequest({
            url: "/index.php?m=Mobile&c=User&a=mobile_validate&t=" + Math.random(),
            data: {
                mobile: a.data.submitData.mobile,
                mobile_code: a.data.submitData.mobile_code
            },
            method: "POST",
            success: function(t) {
                1 == t.status ? e.showModal({
                    content: " " + t.msg,
                    confirm: function() {
                        wx.redirectTo({
                            url: "../user/user"
                        });
                    }
                }) : e.showModal({
                    content: " " + t.msg
                });
            }
        });
    },
    Sendsms: function() {
        var t = this;
        if (t.checkMobilePhone(), 1 == t.data.flag && t.data.sendflag) {
            var a = {
                type: "mobile",
                send: t.data.submitData.mobile,
                scene: 6
            };
            e.sendRequest({
                url: "/index.php?m=Home&c=Api&a=send_validate_code&t=" + Math.random(),
                data: a,
                success: function(a) {
                    1 == a.status ? (t.countdown(), e.showModal({
                        content: " " + a.msg
                    })) : e.showModal({
                        content: " " + a.msg
                    });
                }
            });
        }
    },
    countdown: function(e) {
        var t = this, a = t.data.wait;
        0 == a ? t.setData({
            send_code: e,
            wait: 120,
            sendflag: !0
        }) : (void 0 != e && null != e || (e = t.data.send_code), t.setData({
            send_code: a + "秒后重新获取",
            wait: a - 1,
            sendflag: !1
        }), setTimeout(function() {
            t.countdown(e);
        }, 1e3));
    },
    checkMobilePhone: function() {
        var a = this, o = this.data.submitData.mobile;
        if ("" == o) e.showModal({
            content: " 手机号码不能为空"
        }), a.setData({
            flag: !1
        }); else if (t.checkMobile(o)) {
            var s = {
                mobile: o
            };
            e.sendRequest({
                url: "/index.php?m=Home&c=Api&a=issetMobile",
                data: s,
                success: function(t) {
                    "0" == t ? a.setData({
                        flag: !0
                    }) : (e.showModal({
                        content: " 手机号已存在"
                    }), a.setData({
                        flag: !1
                    }));
                }
            });
        } else e.showModal({
            content: " 手机号码格式不正确"
        }), a.setData({
            flag: !1
        });
    }
});