var t, e, s = getApp(), a = require("../../js/global.js");

Page({
    data: {
        animationData: {},
        rule: "",
        wait_txt: "距离开奖还剩",
        btn_bg: "",
        btn_img: "btn.png",
        Action: "Confirm",
        ActChoose: "",
        guess: {
            one: {
                key: "单",
                selected: 0
            },
            two: {
                key: "双",
                selected: 0
            }
        },
        key: "",
        expect: "",
        id: "",
        hour: "00",
        minute: "00",
        second: "00",
        status: 0,
        checked: !0,
        Tshow: "none"
    },
    onLoad: function(t) {
        var e = s.globalData.isIphoneX;
        this.setData({
            isIphoneX: e
        });
        var n = 0;
        a.isBlank(t.id) ? wx.redirectTo({
            url: "/pages/orderlist/orderlist"
        }) : n = t.id, this.setData({
            id: n
        });
    },
    onShow: function() {
        var e = this, a = e.data.id;
        s.sendNoRequest({
            url: "/index.php?m=Mobile&c=User&a=getguess&id=" + a + "&t=" + Math.random(),
            success: function(n) {
                if (console.log(n), 5 == n.status || 1 == n.status) {
                    var i = e.data.guess;
                    i[n.item].selected = 1, e.setData({
                        guess: i
                    }), e.setData({
                        expect: n.wait.expect,
                        endtime: n.wait.endtime,
                        ts: n.wait.ts,
                        btn_bg: "sub_gray_btn",
                        btn_img: "btn-act.png",
                        Action: "",
                        status: n.status,
                        checked: !0
                    }), t = setInterval(e.GetRTime2, 1e3);
                } else {
                    if (2 == n.status) return clearInterval(t), wx.redirectTo({
                        url: "/pages/cue/cue?id=" + a
                    }), !1;
                    3 == n.status ? (e.setData(n.guess), e.setData({
                        ActChoose: "chooseGuess"
                    }), t = setInterval(e.GetRTime2, 1e3)) : 4 == n.status ? (e.setData({
                        expect: n.wait.expect,
                        endtime: n.wait.endtime,
                        ts: n.wait.ts,
                        btn_bg: "sub_gray_btn",
                        btn_img: "btn-act.png",
                        ActChoose: "chooseGuess"
                    }), t = setInterval(e.GetRTime2, 1e3)) : -100 == n.status && (s.globalData.tUrl = "/pages/guess/guess?id=" + a, 
                    wx.redirectTo({
                        url: "/pages/login/login"
                    }));
                }
                e.setData({
                    rule: n.rule
                });
            }
        }), e.tdRoll();
    },
    onHide: function() {
        clearInterval(t), clearTimeout(e);
    },
    onUnload: function() {
        clearInterval(t), clearTimeout(e);
    },
    GetRTime2: function() {
        var e = this.data.ts, n = s.globalData.config.kai_time, i = new Array(), o = {};
        0 == (i = a.GetRTs(e)) ? (this.setData({
            minute: "00",
            second: "00"
        }), clearInterval(t), this.onShow()) : (e <= 60 * n && (o.btn_bg = "sub_gray_btn", 
        o.btn_txt = "等待开奖", o.Action = "", o.ActChoose = ""), o.hour = i[1], o.minute = i[2], 
        o.second = i[3], o.ts = e - 1, this.setData(o));
    },
    Confirm: function(t) {
        var e = this, a = e.data.key, n = e.data.expect, i = e.data.id, o = t.detail.formId;
        return "" == a ? (s.showModal({
            content: "请选择要猜奖的内容"
        }), !1) : 1 != e.data.checked ? (s.showModal({
            content: "请同意免单规则后再试"
        }), !1) : void s.showModal({
            content: "请确定您选择的猜奖项为【" + a + "】？",
            showCancel: !0,
            confirmText: "继续",
            confirm: function() {
                s.sendRequest({
                    url: "/index.php?m=Mobile&c=User&a=ConfirmGuess&t=" + Math.random(),
                    data: {
                        key: a,
                        expect: n,
                        order_id: i,
                        formId: o
                    },
                    method: "POST",
                    success: function(t) {
                        1 == t.status ? wx.redirectTo({
                            url: "/pages/guess/guess?id=" + i
                        }) : -100 == t.status ? (s.globalData.tUrl = "/pages/guess/guess?id=" + i, wx.redirectTo({
                            url: "/pages/login/login"
                        })) : s.showModal({
                            content: "" + t.msg
                        });
                    }
                });
            }
        });
    },
    chooseGuess: function(t) {
        var e = this, a = "", n = t.currentTarget.dataset.index, i = this.data.guess;
        if (1 != e.data.checked) return s.showToast({
            title: "请同意免单规则后再试",
            icon: "none",
            duration: 1e3
        }), !1;
        for (var o in i) o == n ? (i[o].selected = "1", a = i[o].key) : i[o].selected = "0";
        this.setData({
            guess: i,
            key: a,
            Tshow: ""
        });
    },
    CloseTan: function() {
        this.setData({
            Tshow: "none"
        });
    },
    ChangeCheck: function() {
        var t = this.data.checked;
        t = 1 != t, this.setData({
            checked: t
        });
    },
    tdRoll: function() {
        var t = this, s = wx.createAnimation({
            duration: 1e3,
            timingFunction: "linear"
        });
        this.animation = s, s.scale3d(1.2, 1.2, 1.2).step(), this.setData({
            animationData: s.export()
        }), setTimeout(function() {
            s.scale3d(1, 1, 1).step(), this.setData({
                animationData: s.export()
            });
        }.bind(this), 1e3), e = setTimeout(function() {
            t.tdRoll();
        }, 2500);
    }
});