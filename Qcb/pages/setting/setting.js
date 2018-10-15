var e = getApp();

Page({
    data: {
        realname: "",
        sex: "",
        address: "",
        before_request: 1
    },
    onLoad: function() {},
    onShow: function() {
        var t = this;
        e.sendRequest({
            url: "/index.php?m=Mobile&c=User&a=info&t=" + Math.random(),
            success: function(e) {
                1 == e.status && (t.setData(e.user), t.setData({
                    bankinfo: e.bankinfo
                }));
            }
        });
    },
    GoUrl: function(e) {
        var t = e.target.dataset.url;
        wx.navigateTo({
            url: t
        });
    },
    InputKey: function(e) {
        var t = e.target.dataset.name, a = e.detail.value, s = {};
        s[t] = a, this.setData(s);
    },
    showSex: function() {
        var e = this, t = [ "女", "男" ];
        wx.showActionSheet({
            itemList: t,
            success: function(t) {
                e.setData({
                    sex: t.tapIndex
                });
            }
        });
    },
    Submit: function() {
        var t = this, a = t.data;
        "" != a.realname && "" != a.address ? 1 == t.data.before_request && e.sendRequest({
            url: "/index.php?m=Mobile&c=User&a=userinfo&t=" + Math.random(),
            data: {
                realname: a.realname,
                sex: a.sex,
                address: a.address
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
        }) : e.showModal({
            content: "请将信息填写完整"
        });
    }
});