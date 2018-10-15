function t() {
    return new Promise(function(t, o) {
        new n({
            key: "PS3BZ-7WVKG-NMSQO-IA43X-OY5B7-WTFBC"
        }).reverseGeocoder({
            success: function(o) {
                var e = o.result.formatted_addresses.recommend;
                t(e);
            },
            fail: function(t) {
                wx.showToast({
                    title: "默认地址获取失败",
                    icon: "none"
                }), o({
                    msg: "默认地址获取失败",
                    code: -1
                });
            }
        });
    });
}

function o() {
    return new Promise(function(t, o) {
        wx.getSetting({
            success: function(e) {
                e.authSetting["scope.userLocation"] ? t(!0) : o(!1);
            },
            fail: function(t) {
                o(!1), console.log("wx.getSettingFail", t);
            }
        });
    });
}

var e = require("../../icon.js"), n = require("../../../../utils/qqmap-wx-jssdk.min.js"), c = void 0;

Component({
    properties: {},
    data: {
        location: {
            title: "所在位置",
            result: ""
        }
    },
    created: function() {
        c = this;
    },
    ready: function() {
        o().then(function() {
            c.setDefaultLocation();
        }).catch(function() {
            wx.authorize({
                scope: "scope.userLocation",
                success: function(t) {
                    c.setDefaultLocation();
                },
                fail: function(t) {
                    console.log("授权失败1", t);
                }
            });
        }), c.setData({
            ICON: e.ICON
        });
    },
    methods: {
        setDefaultLocation: function() {
            t().then(function(t) {
                var o = c.data.location;
                o.title = "发布于", o.result = t, c.setData({
                    location: o
                }), c.triggerEvent("returnResult", o);
            }).catch(function(t) {
                console.log("err"), location.title = "所在位置", location.result = "", c.setData({
                    location: location
                }), c.triggerEvent("returnResult", location);
            });
        },
        deleteLocation: function() {
            var t = c.data.location;
            t.title = "所在位置", t.result = "", c.setData({
                location: t
            }), c.triggerEvent("returnResult", t);
        },
        openChooseLocation: function() {
            o().then(function() {
                wx.chooseLocation({
                    success: function(t) {
                        var o = c.data.location;
                        o.title = "发布于", o.result = t.name, c.setData({
                            location: o
                        }), c.triggerEvent("returnResult", o);
                    },
                    fail: function(t) {
                        console.log("chooseLocation-fail", t);
                    }
                });
            }).catch(function() {
                wx.showModal({
                    title: "地理位置授权提示",
                    content: "你当前没有授权忆年小程序使用地理位置功能，是否需要授权？",
                    success: function(t) {
                        t.confirm && wx.openSetting({
                            success: function(t) {
                                c.setDefaultLocation();
                            }
                        });
                    }
                });
            });
        }
    }
});