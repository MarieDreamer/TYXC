function t(t, a) {
    for (var e = [], n = t; n <= a; n++) n < 10 && (n = "0" + n), n >= 10 && (n = "" + n), 
    e.push(n);
    return e;
}

function a(t, a) {
    for (var e = new Date(t, a, 0).getDate(), n = [], r = 1; r <= e; r++) r < 10 && (r = "0" + r), 
    n.push(r);
    return n;
}

var e = void 0;

Component({
    properties: {
        show: {
            type: Boolean,
            value: !1,
            observer: function(t, a) {
                t && e.setData({
                    datetimePickerShow: t,
                    datetimeBackgroundShow: t
                });
            }
        },
        value: {
            type: Object,
            value: Array
        }
    },
    data: {
        years: Array,
        year: String,
        months: Array,
        month: String,
        days: Array,
        day: String,
        hours: Array,
        hour: String,
        minutes: Array,
        minute: String,
        value: Array,
        datetimePickerShow: !1,
        datetimeBackgroundShow: !1,
        flag: -1
    },
    created: function() {
        (e = this).oldMonth = -1;
    },
    attached: function() {
        e.initDatetime(), e.setDefaultDatetime();
    },
    methods: {
        bindChange: function(t) {
            var n = t.detail.value;
            e.setData({
                year: e.data.years[n[0]],
                month: e.data.months[n[1]],
                day: e.data.days[n[2]],
                hour: e.data.hours[n[3]],
                minute: e.data.minutes[n[4]]
            });
            var r = this.data.years[n[0]], o = this.data.months[n[1]];
            if (e.oldMonth != o) {
                e.oldMonth = o;
                var i = a(r, o);
                this.setData({
                    days: i
                });
            }
        },
        initDatetime: function() {
            var a = new Date(), n = t(a.getFullYear() - 18, a.getFullYear()), r = t(1, 12), o = t(1, 31), i = t(0, 23), u = t(0, 59);
            e.setData({
                years: n,
                months: r,
                days: o,
                hours: i,
                minutes: u
            });
        },
        setDefaultDatetime: function() {
            var t = new Date(), a = t.getFullYear(), n = e.data.years, r = t.getMonth() + 1, o = t.getDate(), i = t.getHours(), u = t.getMinutes(), s = parseInt(r);
            e.setData({
                value: [ n.length - 1, r - 1, o - 1, i, u ],
                year: a < 10 ? "0" + a : "" + a,
                month: s < 10 ? "0" + s : "" + s,
                day: o < 10 ? "0" + o : "" + o,
                hour: i < 10 ? "0" + i : "" + i,
                minute: u < 10 ? "0" + u : "" + u
            });
        },
        saveSelected: function() {
            var t = new Date(), a = e.data.year + "/" + e.data.month + "/" + e.data.day + " " + e.data.hour + ":" + e.data.minute + ":00";
            new Date(a).getTime() > t.getTime() ? wx.showToast({
                title: "选择的时间不能大于当前时间",
                icon: "none"
            }) : (e.cancleSelected(), setTimeout(function() {
                var t = e.data.years, a = e.data.year, n = e.data.month, r = e.data.day, o = e.data.hour, i = e.data.minute, u = parseInt(n);
                e.setData({
                    value: [ a - t[0], n - 1, r - 1, o, i ],
                    year: a < 10 ? "0" + a : "" + a,
                    month: u < 10 ? "0" + u : "" + u,
                    day: r < 10 ? "0" + r : "" + r,
                    hour: o < 10 ? "0" + o : "" + o,
                    minute: i < 10 ? "0" + i : "" + i
                }), e.triggerEvent("returnResult", {
                    year: a,
                    month: n,
                    day: r,
                    hour: o,
                    minute: i
                });
            }, 100));
        },
        cancleSelected: function() {
            e.setData({
                datetimePickerShow: !1,
                datetimeBackgroundShow: !1
            }), setTimeout(function() {
                e.setData({
                    show: !1
                });
            }, 100);
        },
        preventScroll: function() {}
    }
});