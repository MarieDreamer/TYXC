var t = require("../../icon.js"), e = void 0;

Component({
    properties: {},
    data: {
        datetime: {
            title: "设置发布时间",
            show: !1,
            result: ""
        }
    },
    created: function() {
        e = this;
    },
    attached: function() {
        e.setData({
            ICON: t.ICON
        });
    },
    ready: function() {},
    methods: {
        openDatetime: function() {
            var t = e.data.datetime;
            t.show = !0, e.setData({
                datetime: t
            });
        },
        showDatetime: function(t) {
            t.detail.datetime;
            console.log("e", t);
            var a = t.detail.year, i = t.detail.month, r = t.detail.day, d = t.detail.hour, n = t.detail.minute, o = e.data.datetime;
            o.title = "发布时间", o.show = !1, o.result = a + "年" + i + "月" + r + "日 " + d + ":" + n, 
            e.setData({
                datetime: o
            }), e.triggerEvent("returnResult", a + "-" + i + "-" + r + " " + d + ":" + n + ":00");
        },
        clearDatetime: function() {
            var t = e.data.datetime;
            t.title = "设置发布时间", t.result = "", e.setData({
                datetime: t
            }), e.triggerEvent("returnResult", "");
        }
    }
});