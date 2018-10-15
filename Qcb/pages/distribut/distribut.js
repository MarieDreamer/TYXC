var t = getApp(), e = require("../../js/global.js");

Page({
    data: {
        before_request: 1,
        page: 0,
        listend: 0,
        lists: []
    },
    // onLoad: function(a) {
    //     var s = this, o = 1;
    //     e.isBlank(a.type) || (o = a.type), s.setData({
    //         type: o
    //     }), t.sendRequest({
    //         url: "/index.php?m=Mobile&c=Distribut&a=index&type=" + o + "&t=" + Math.random(),
    //         success: function(e) {
    //             1 == e.status ? (s.setData(e.user), s.setData({
    //                 allfans: e.allfans,
    //                 is_ok: e.is_ok,
    //                 persons: e.persons
    //             }), s.AjaxGet()) : -100 == e.status && (t.globalData.tUrl = "/pages/distribut/distribut&type=" + s.data.type + "&t=" + Math.random(), 
    //             wx.redirectTo({
    //                 url: "/pages/login/login"
    //             }));
    //         }
    //     });
    // },
    AjaxGet: function() {
        var e = this, a = e.data.page, s = e.data.listend, o = e.data.before_request;
        0 == s && 1 == o && (a += 1, e.setData({
            before_request: 0,
            more: ""
        }), t.sendNoRequest({
            url: "/index.php?m=Mobile&c=Distribut&a=index&type=" + e.data.type + "&t=" + Math.random(),
            method: "POST",
            data: {
                p: a
            },
            success: function(t) {
                if (1 == t.status) {
                    var s;
                    console.log(e.data.page), s = 1 == a ? t.lists : e.data.lists.concat(t.lists), e.setData({
                        lists: s,
                        page: a
                    });
                } else e.setData({
                    listend: 1
                });
            },
            complete: function(t) {
                e.setData({
                    before_request: 1,
                    more: "none"
                });
            }
        }));
    },
    onReachBottom: function() {
        this.AjaxGet();
    },
    Assgn: function() {
        var e = this;
        1 == e.data.is_ok ? wx.navigateTo({
            url: "/pages/subject/subject"
        }) : t.showModal({
            content: "您需要邀请" + e.data.persons + "个团队成员才能申请"
        });
    }
});