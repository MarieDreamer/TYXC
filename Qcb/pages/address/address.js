function t(t, i, a) {
    console.log("moveY:" + i + "\nshow:" + a), t.animation = wx.createAnimation({
        transformOrigin: "50% 50%",
        duration: 400,
        timingFunction: "ease",
        delay: 0
    }), t.animation.translateY(i + "vh").step(), t.setData({
        animation: t.animation.export(),
        show: a
    });
}

function i(t, i, s) {
    return new Promise(function(e, d) {
        a.sendNoRequest({
            url: "/index.php?m=Mobile&c=Api&a=getRegion&parent_id=" + s,
            success: function(a) {
                var s = {};
                1 == a.status && (s[i] = a.data, t.setData(s), e());
            }
        });
    });
}

var a = getApp(), s = (require("../../js/global.js"), [ 0, 0, 0 ]), e = 0, d = !1, n = 200, r = [], c = [], o = [];

Page({
    data: {
        address_id: "",
        consignee: "",
        mobile: "",
        is_default: 1,
        province: "",
        city: "",
        district: "",
        address: "",
        btnName: "保存",
        source: "",
        region: "",
        show: d,
        provinces: r,
        citys: c,
        districts: o,
        value: [ 0, 0, 0 ]
    },
    onLoad: function(t) {
        var e = this, d = t.id;
        d > 0 ? a.sendRequest({
            url: "/index.php?m=Mobile&c=User&a=edit_address&id=" + d,
            success: function(t) {
                if (1 == t.status) {
                    var i = t.address;
                    e.setData({
                        address_id: i.address_id,
                        consignee: i.consignee,
                        mobile: i.mobile,
                        is_default: i.is_default,
                        province: i.province,
                        city: i.city,
                        district: i.district,
                        area: i.area,
                        address: i.address,
                        provinces: t.provinces,
                        citys: t.citys,
                        districts: t.districts
                    });
                    for (var d in e.data.provinces) e.data.provinces[d].id == e.data.province && (s[0] = d);
                    for (var d in e.data.citys) e.data.citys[d].id == e.data.city && (s[1] = d);
                    for (var d in e.data.districts) e.data.districts[d].id == e.data.district && (s[2] = d);
                    e.setData({
                        value: s,
                        region: e.data.provinces[s[0]].name + " " + e.data.citys[s[1]].name + " " + e.data.districts[s[2]].name
                    });
                } else a.showModal({
                    content: " " + t.msg
                });
            }
        }) : (e.setData({
            btnName: "新增地址"
        }), wx.setNavigationBarTitle({
            title: "新增地址"
        }), i(e, "provinces", 0).then(function(t) {
            i(e, "citys", e.data.provinces[0].id).then(function(t) {
                i(e, "districts", e.data.citys[0].id);
            });
        })), e.setData({
            source: t.source
        });
    },
    onReady: function() {
        this.animation = wx.createAnimation({
            transformOrigin: "50% 50%",
            duration: 0,
            timingFunction: "ease",
            delay: 0
        }), this.animation.translateY("200vh").step(), this.setData({
            animation: this.animation.export(),
            show: d
        });
    },
    hiddenFloatView: function(i) {
        e = 0, t(this, n = 200, d = !0), "confirm" == i.target.dataset.act && (this.setData({
            province: this.data.provinces[s[0]].id,
            city: this.data.citys[s[1]].id,
            district: this.data.districts[s[2]].id
        }), this.setData({
            region: this.data.provinces[s[0]].name + " " + this.data.citys[s[1]].name + " " + this.data.districts[s[2]].name
        }));
    },
    InputChanged: function(t) {
        var i = {};
        i[t.currentTarget.dataset.name] = t.detail.value, this.setData(i);
    },
    SelectChange: function() {
        1 == this.data.is_default ? this.setData({
            is_default: 0
        }) : this.setData({
            is_default: 1
        });
    },
    formSubmit: function(t) {
        var i = this;
        if ("" != i.data.consignee && "" != i.data.mobile && "" != i.data.district && "" != i.data.address) {
            var s;
            s = i.data.address_id > 0 ? "/index.php?m=Mobile&c=User&a=edit_address&id=" + i.data.address_id + "&t=" + Math.random() : "/index.php?m=Mobile&c=User&a=add_address&t=" + Math.random(), 
            a.sendRequest({
                url: s,
                data: i.data,
                method: "POST",
                success: function(t) {
                    1 == t.status ? a.showToast({
                        title: t.msg,
                        icon: "success",
                        success: function() {
                            "cart2" == i.data.source ? wx.redirectTo({
                                url: "/pages/cart2/cart2"
                            }) : wx.redirectTo({
                                url: "/pages/addresslist/addresslist"
                            });
                        }
                    }) : a.showModal({
                        content: " " + t.msg
                    });
                }
            });
        } else a.showModal({
            content: "请完善收货人信息"
        });
    },
    translate: function(i) {
        0 == e ? (n = 0, d = !1, e = 1) : (n = 200, d = !0, e = 0), t(this, n, d);
    },
    bindChange: function(t) {
        var a = this, e = t.detail.value;
        console.log(e), s[0] != e[0] ? (e[1] = 0, e[2] = 0, i(this, "citys", this.data.provinces[e[0]].id).then(function(t) {
            i(a, "districts", a.data.citys[e[1]].id);
        })) : s[1] != e[1] && (e[2] = 0, i(this, "districts", this.data.citys[e[1]].id)), 
        s = e, this.setData({
            value: [ e[0], e[1], e[2] ],
            province: this.data.provinces[e[0]].id,
            city: this.data.citys[e[1]].id,
            district: this.data.districts[e[2]].id
        });
    }
});