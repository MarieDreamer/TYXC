var t = getApp(), e = parseInt((t.globalData.systemInfo.windowWidth - 36) / 3), o = [], a = require("../../utils/api.js"), i = require("../../utils/util.js"), r = void 0, s = void 0, n = void 0, h = void 0, u = void 0, c = void 0, d = void 0, p = void 0;

Page({
    data: {
        picwid: e,
        bgarr: [],
        state: [],
        img: "",
        showstartbtn: !0,
        blur: !0,
        showcover: !0,
        showlongtapcover: !1,
        showModelHidden: !1,
        canIUse: !1
    },
    onLoad: function(a) {
        t.stat.statpv({
            route: this.route,
            options: a
        });
        var i = this;
        o = [], this.audioCtx = wx.createAudioContext("myAudio"), this.audioCtx_good = wx.createAudioContext("myAudio_good");
        for (var r = [], s = 0; s < 3; s++) for (var n = 0; n < 3; n++) o.push([ s * e, n * e ]), 
        r.push(!1);
        i.setData({
            puzzid: a.id || 3,
            state: r,
            bgarr: o
        }), wx.canIUse && wx.canIUse("button.open-type.share") && i.setData({
            canIUse: !0
        }), a.version && (this.version = a.version), a.port && (this.port = a.port, t.globalData.port = a.port), 
        a.fromUserID && (this.fromUserID = a.fromUserID), a.fromSpaceID && (this.fromSpaceID = a.fromSpaceID), 
        a.fromEventID && (this.fromEventID = a.fromEventID);
    },
    onShow: function() {
        var e = this.version ? this.version : "", r = this.port ? this.port : "", s = this.fromUserID ? this.fromUserID : 0, n = this.fromSpaceID ? this.fromSpaceID : 0, h = this.fromEventID ? this.fromEventID : 0, u = this;
        t.getUserInfo(function(t) {
            "新用户" != t.nickName ? wx.request({
                url: a.getUrl("YinianProject/activity/ShowPuzzle"),
                data: {
                    userid: t.userid,
                    puzzleID: u.data.puzzid || 266
                },
                method: "GET",
                success: function(t) {
                    var e = t.data.data[0];
                    if (i.wxreq({
                        pathname: "YinianProject/yinian/GetDownloadToken",
                        data: {
                            url: e.puzzlePicture + "?imageView2/1/w/500/h/500"
                        }
                    }).then(function(t) {
                        u.setData({
                            img: t.data[0].url,
                            joiner: e.joiner,
                            content: e.puzzleContent
                        });
                    }), "no" == e.isJoin) u.disturb(); else {
                        var a = e.joiner.filter(function(t) {
                            return t.userid == wx.getStorageSync("userid");
                        });
                        u.setData({
                            posArr: o,
                            alltime: a[0].joinScore,
                            showcover: !0,
                            showresult: !0,
                            showstartbtn: !1,
                            showlongtapcover: !1
                        });
                    }
                }
            }) : wx.navigateTo({
                url: "/pages/creatlogin/creatlogin"
            });
        }, e, r, s, n, h, "pingtu");
    },
    start: function(t) {
        this.startTime = new Date().getTime(), this.setData({
            showstartbtn: !1,
            blur: !1,
            showcover: !1
        });
    },
    disturb: function() {
        var t = [];
        o.forEach(function(e) {
            t.push(e);
        });
        for (var e, a = 1; a < 9; a++) {
            e = ~~(Math.random() * (9 - a) + a);
            var i = t[a - 1];
            t[a - 1] = t[e], t[e] = i;
        }
        this.setData({
            posArr: t
        });
    },
    startmove: function(t) {
        if (!(t.touches.length > 1)) {
            var e = t.touches[0].clientX, o = t.touches[0].clientY;
            d = t.currentTarget.offsetLeft, p = t.currentTarget.offsetTop, h = t.target.offsetLeft, 
            n = t.target.offsetTop, r = e - d - h, s = o - p - n, u = t.target.dataset.index, 
            this.setData({
                dargindex: u
            });
        }
    },
    end: function(t) {
        if (t.touches.length > 0) {
            this.moveLi(u, n, h, n, n, !1);
        } else {
            var e = this, o = t.changedTouches[0].clientX, a = t.changedTouches[0].clientY, i = o - d, r = a - p;
            c = this.findNearestLi(r, i), t.touches.length > 0 && (c = !1);
            var s = c ? parseInt(e.data.posArr[c - 1][0]) : n, f = c ? parseInt(e.data.posArr[c - 1][1]) : h;
            this.moveLi(u, n, h, s, f, c);
        }
    },
    move: function(t) {
        var e = t.touches[0].clientX, o = t.touches[0].clientY - p - s, a = e - d - r;
        this.data.posArr[u] = [ o, a ], this.setData({
            posArr: this.data.posArr
        });
    },
    findNearestLi: function(t, o) {
        var a = [];
        this.data.posArr.forEach(function(t) {
            a.push(t);
        });
        var i = parseInt(Math.floor(t / e) * e), r = parseInt(Math.floor(o / e) * e);
        if (i == n && r == h) return !1;
        for (var s = 0; s < a.length; s++) {
            var u = parseInt(a[s][0]), c = parseInt(a[s][1]);
            if (u == i && c == r) return s + 1;
        }
    },
    moveLi: function(t, e, o, a, i, r) {
        var s = this, n = [];
        s.data.posArr.forEach(function(t) {
            n.push(t);
        }), n[t] = [ a, i ], this.data.posArr[t] = [ a, i ], r && (n[r - 1] = [ e, o ], 
        n[t].join("-") == this.data.bgarr[t].join("-") || n[r - 1].join("-") == this.data.bgarr[r - 1].join("-") ? this.play("ok") : this.play("no")), 
        s.setData({
            posArr: n
        }), this.setcorrectposition(), this.checkComplate();
    },
    checkComplate: function() {
        for (var t = this, e = !1, o = 0; o < t.data.posArr.length; o++) {
            if (t.data.posArr[o].join("-") != t.data.bgarr[o].join("-")) return !1;
            e = !0;
        }
        if (e) {
            this.canmove = !1;
            var i = ((new Date().getTime() - this.startTime) / 1e3).toFixed(2);
            wx.request({
                url: a.getUrl("YinianProject/activity/FinishPuzzling"),
                data: {
                    userid: wx.getStorageSync("userid"),
                    score: i,
                    puzzleID: t.data.puzzid
                },
                method: "GET",
                success: function(e) {
                    t.setData({
                        showresult: !0,
                        showcover: !0,
                        alltime: i,
                        joiner: e.data.data
                    });
                }
            });
        }
    },
    closeresult: function() {
        this.setData({
            showresult: !1,
            blur: !0,
            showlongtapcover: !0
        });
    },
    showpic: function() {
        this.setData({
            blur: !1,
            showlongtapcover: !1
        });
    },
    hiddenpic: function() {
        this.setData({
            blur: !0,
            showlongtapcover: !0
        });
    },
    none: function() {},
    play: function(t) {
        "ok" == t ? this.audioCtx_good.play() : this.audioCtx.play();
    },
    makepuzzle: function() {
        wx.redirectTo({
            url: "/pages/makepingtu/makepingtu"
        });
    },
    setcorrectposition: function() {
        var t = this;
        t.data.posArr.forEach(function(e, o) {
            e.join("-") == t.data.bgarr[o].join("-") ? t.data.state[o] = !0 : t.data.state[o] = !1;
        }), t.setData({
            state: t.data.state
        });
    },
    openModel: function() {
        this.setData({
            showModelHidden: !0
        });
    },
    closeModel: function() {
        this.setData({
            showModelHidden: !1
        });
    },
    returnhome: function() {
        wx.reLaunch ? wx.reLaunch({
            url: "/pages/index/index"
        }) : wx.navigateBack({
            delta: 10
        });
    },
    showIntro: function() {
        wx.showToast({
            title: "点击右上角分享"
        });
    },
    onShareAppMessage: function() {
        return {
            title: "我用一张照片做了个拼图游戏，一起来玩！",
            desc: "完成拼图，可以看看TA的神秘照片",
            path: "/pages/pingtu/pingtu?port=拼图&id=" + this.data.puzzid,
            success: function() {
                t.stat.request({
                    operation: "shareCallback"
                });
            }
        };
    }
});