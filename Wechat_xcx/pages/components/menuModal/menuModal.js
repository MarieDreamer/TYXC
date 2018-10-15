var o = void 0;

Component({
    properties: {
        title: {
            type: String,
            value: "更多功能"
        },
        modalShow: {
            type: Boolean,
            value: !1,
            observer: function(t, a) {
                t && setTimeout(function() {
                    o.setData({
                        modalAnimation: !0,
                        modalBodyAnimation: !0,
                        modalBodyShow: !0
                    });
                }, 100);
            }
        },
        modalBodyShow: {
            type: Boolean,
            value: !1,
            observer: function(t, a) {
                t || (o.setData({
                    modalAnimation: !1,
                    modalBodyAnimation: !1
                }), setTimeout(function() {
                    o.setData({
                        modalShow: !1
                    });
                }, 150));
            }
        }
    },
    data: {
        modalAnimation: !1,
        modalBodyAnimation: !1
    },
    created: function() {
        o = this;
    },
    methods: {
        closeModalBody: function() {
            o.setData({
                modalBodyShow: !1
            });
        },
        preventTouchMove: function() {}
    }
});