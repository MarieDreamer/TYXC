function t(t) {
    return t < 10 ? t = "00:0" + t : t >= 10 && t < 60 ? "00:" + t : "01:00";
}

var o = require("../../icon.js"), a = require("../../publish.js"), e = getApp(), n = null, i = null, r = wx.getRecorderManager(), l = wx.createInnerAudioContext(), c = void 0;

Page({
    data: {
        recordStatus: "ready",
        recordMax: 120,
        recordStep: 0,
        recordTiming: "00:00",
        recordMaxTiming: "01:00",
        playStatus: "ready",
        playMax: 120,
        palyStep: 0,
        playTiming: "00:00",
        playMaxTiming: "01:00",
        location: "",
        publishTime: "",
        groupId: 0,
        audio: {
            tempFilePath: "",
            duration: 0,
            fileSize: 0
        }
    },
    onLoad: function(t) {
        e.stat.statpv({
            route: this.route,
            options: t
        }), (c = this).setData({
            ICON: o.ICON,
            groupId: t.groupId
        }), (0, a.previousPageNoRefresh)();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {
        console.log("页面隐藏"), r.stop();
    },
    onUnload: function() {
        console.log("页面卸载"), r.stop();
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getLocation: function(t) {
        c.setData({
            location: t.detail.result
        });
    },
    getDatetime: function(t) {
        c.setData({
            publishTime: t.detail
        });
    },
    startRecord: function(t) {
        r.start();
    },
    stopRecord: function(t) {
        r.stop();
    },
    reRecord: function(t) {
        r.start();
    },
    startPlay: function(t) {
        l.play();
    },
    stopPlay: function(t) {
        l.stop();
    },
    formSubmit: function(t) {
        var o = c.data.audio.tempFilePath;
        if (0 !== o.length) {
            var a = t.detail.formId, n = c.data.groupId, i = c.data.location, r = c.data.publishTime, l = Math.ceil(c.data.audio.duration / 1e3);
            e.upState = 2, e.fromUp = "audio", e.upObj = {
                formID: a,
                groupId: n,
                place: i,
                publishedTime: r,
                duration: l,
                picarr: o
            }, console.log("appobj", e.upObj), wx.getStorageSync("userid") ? wx.navigateBack({
                delta: 1
            }) : wx.showModal({
                title: "提示",
                content: "请先授权",
                showCancel: !1
            });
        } else wx.showToast({
            title: "没有声音文件",
            image: "/images/toast_warning.png"
        });
    }
}), r.onStart(function() {
    c.setData({
        recordStatus: "recording",
        recordTiming: "00:00",
        recordStep: 0,
        playTiming: "00:00",
        playStep: 0
    }), console.log("录音开始");
    var o = 0, a = 0;
    n = setInterval(function() {
        o++, a = Math.floor(o / 2), a = t(a), c.setData({
            recordStep: o,
            recordTiming: a
        });
    }, 500);
}), r.onStop(function(o) {
    console.log("录音结束", o), clearInterval(n), l.src = o.tempFilePath;
    var a = c.data.audio;
    a.tempFilePath = o.tempFilePath, a.fileSize = o.fileSize, a.duration = o.duration, 
    console.log("e", o);
    var e = 2 * Math.floor(o.duration / 1e3), i = t(e / 2);
    c.setData({
        recordStatus: "completed",
        playMax: e,
        playMaxTiming: i,
        audio: a
    });
}), l.onPlay(function() {
    console.log("正在播放", l.duration), c.setData({
        playStatus: "playing",
        playTiming: "00:00"
    });
    var o = 0, a = 0;
    i = setInterval(function() {
        o++, a = Math.floor(o / 2), a = t(a), c.setData({
            playStep: o,
            playTiming: a
        });
    }, 500);
}), l.onCanplay(function() {
    console.log("音频进入可播放状态");
}), l.onError(function(t) {
    console.log("播放发生错误", t);
}), l.onEnded(function() {
    console.log("音频自然播放结束"), clearInterval(i), c.setData({
        playStatus: "ready"
    });
}), l.onStop(function() {
    console.log("播放结束"), clearInterval(i), c.setData({
        playStatus: "ready",
        playStep: 0,
        playTiming: "00:00"
    });
});