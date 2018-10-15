var t = require("../../icon.js"), e = void 0;

Component({
    properties: {
        maxLength: {
            type: Number,
            value: 120
        },
        placeholder: {
            type: String,
            value: "留下美好回忆"
        }
    },
    data: {
        ICON: Object,
        text: "",
        IOSHack: !1
    },
    created: function() {
        e = this;
    },
    attached: function() {
        if ("ios" == wx.getSystemInfoSync().platform) {
            e.setData({
                IOSHack: !0
            });
        }
        e.setData({
            ICON: t.ICON
        });
    },
    methods: {
        inputText: function(t) {
            var a = t.detail.value;
            a = a.replace(/(^\s*)|(\s*$)/g, ""), e.setData({
                text: a
            }), e.triggerEvent("returnResult", a);
        }
    }
});