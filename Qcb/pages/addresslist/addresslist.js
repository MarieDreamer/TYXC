var s = getApp(), t = require("../../js/global.js");

Page({
    data: {
        source: "",
        address_lists: {},
        show_no_data: 0
    },
    onLoad: function(s) {
        var a = this;
        t.isBlank(s.source) || a.setData({
            source: s.source
        });
    },
    onShow: function() {
        // var t = this;
        // s.sendRequest({
        //     url: "/index.php?m=Mobile&c=User&a=address_list&t=" + Math.random(),
        //     success: function(a) {
        //         1 == a.status ? t.setData({
        //             address_lists: a.address_lists
        //         }) : -100 == a.status ? (s.globalData.tUrl = "/pages/addresslist/addresslist", wx.redirectTo({
        //             url: "/pages/login/login"
        //         })) : t.setData({
        //             show_no_data: 1
        //         });
        //     }
        // });
    },
    DefaultAddr: function(t) {
        var a, e = this, d = t.currentTarget.dataset.index, r = e.data.address_lists, i = {};
        for (var o in r) i["address_lists[" + o + "].is_default"] = 0;
        i["address_lists[" + d + "].is_default"] = 1, a = r[d].address_id, s.sendNoRequest({
            url: "/index.php?m=Mobile&c=User&a=set_default&id=" + a,
            success: function(s) {
                1 == s.status && ("cart2" == e.data.source ? wx.redirectTo({
                    url: "/pages/cart2/cart2"
                }) : e.setData(i));
            }
        });
    },
    DelAddress: function(t) {
        var a = this, e = t.currentTarget.dataset.index, d = a.data.address_lists, r = d[e].address_id;
        s.sendRequest({
            url: "/index.php?m=Mobile&c=User&a=del_address&id=" + r,
            success: function(t) {
                1 == t.status ? (s.showToast({
                    title: t.msg
                }), d.splice(e), a.setData({
                    address_lists: d
                })) : s.showModal({
                    content: t.msg
                });
            }
        });
    }
});