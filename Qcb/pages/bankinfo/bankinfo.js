function a(a) {
    return "" != a && (!(a.length < 16 || a.length > 19) && !!/^\d*$/.exec(a));
}

var t = getApp();

Page({
    data: {
        account_name: "",
        account_bank: "",
        bankname: "",
        bank_code: "",
        before_request: 1
    },
    onLoad: function(a) {
        var n = this;
        t.sendRequest({
            url: "/index.php?m=Mobile&c=User&a=bankinfo&t=" + Math.random(),
            method: "GET",
            success: function(a) {
                1 == a.status && n.setData(a.bank);
            }
        });
    },
    InputKey: function(a) {
        var t = a.target.dataset.name, n = a.detail.value, e = {};
        e[t] = n, this.setData(e);
    },
    CheckBank: function() {
        a(this.data.account_bank) || t.showModal({
            content: "银行卡号格式不正确"
        });
    },
    Submit: function() {
        var n = this, e = n.data;
        if ("" != e.account_name && "" != e.account_bank && "" != e.bankname) {
            if (!a(e.account_bank)) return !1;
            1 == n.data.before_request && (n.setData({
                before_request: 0
            }), t.sendRequest({
                url: "/index.php?m=Mobile&c=User&a=bankinfo&t=" + Math.random(),
                data: {
                    account_name: e.account_name,
                    account_bank: e.account_bank,
                    bankname: e.bankname
                },
                method: "POST",
                success: function(a) {
                    1 == a.status ? t.showModal({
                        content: " " + a.msg,
                        confirm: function() {
                            wx.navigateBack({
                                delta: 1
                            });
                        }
                    }) : t.showModal({
                        content: " " + a.msg
                    });
                },
                complete: function() {
                    n.setData({
                        before_request: 1
                    });
                }
            }));
        } else t.showModal({
            content: "请将信息填写完整"
        });
    }
});