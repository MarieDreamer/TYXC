var e = "http://oibl5dyji.bkt.clouddn.com/", n = {
    PHOTOS: e + "PM_photos@2x.png",
    AUDIO: e + "PM_audio@2x.png",
    IMPORT: e + "PM_import@2x.png",
    WRITE: e + "PM_wirte@2x.png",
    CLOSE: e + "PM_close@2x.png",
    VIDEO: e + "PM_video@2x.png",
    MAKE_MV: e + "PM_make_mv@2x.png",
    EVENT: e + "PM_event@2x.png"
}, t = [ {
    id: 1,
    name: "photo",
    icon: n.PHOTOS,
    desc: "照片"
}, {
    id: 2,
    name: "video",
    icon: n.VIDEO,
    desc: "视频"
}, {
    id: 3,
    name: "text",
    icon: n.WRITE,
    desc: "文字"
}, {
    id: 4,
    name: "audio",
    icon: n.AUDIO,
    desc: "语音"
}, {
    id: 5,
    name: "event",
    icon: n.EVENT,
    desc: "事件"
}, {
    id: 6,
    name: "make_mv",
    icon: n.MAKE_MV,
    desc: "制作MV"
}, {
    id: 7,
    name: "import",
    icon: n.IMPORT,
    desc: "一键导入"
} ], a = void 0;

Component({
    properties: {
        on: {
            type: Boolean,
            value: !1,
            observer: function(e, n) {
                e && setTimeout(function() {
                    a.setData({
                        backgroundOn: !0,
                        selectedMenuName: ""
                    });
                }, 100);
            }
        },
        backgroundOn: {
            type: Boolean,
            value: !1,
            observer: function(e, n) {
                e && a.setData({
                    mainOn: !0
                }), e || setTimeout(function() {
                    a.setData({
                        on: !1
                    });
                }, 300);
            }
        },
        mainOn: {
            type: Boolean,
            value: !1,
            observer: function(e, n) {
                e || a.setData({
                    backgroundOn: !1
                });
            }
        },
        menuNames: {
            type: String,
            value: "",
            observer: function(e, n) {
                a.generateMenus();
            }
        }
    },
    data: {
        menus: Array,
        selectedMenuName: ""
    },
    created: function() {
        a = this;
    },
    ready: function() {
        a.setData({
            ICON: n
        }), a.generateMenus();
    },
    methods: {
        close: function() {
            a.setData({
                mainOn: !1
            }), setTimeout(function() {
                console.log("Close", a.data.selectedMenuName), a.triggerEvent("Close", a.data.selectedMenuName);
            }, 150);
        },
        generateMenus: function() {
            if (a.data.menuNames.length > 0) {
                var e = t.filter(function(e) {
                    return a.data.menuNames.search(e.name) >= 0;
                });
                a.setData({
                    menus: e
                });
            }
        },
        selectedOperation: function(e) {
            var n = e.currentTarget.dataset.menu_name;
            a.setData({
                selectedMenuName: n
            }), a.close();
        },
        prevent: function() {}
    }
});