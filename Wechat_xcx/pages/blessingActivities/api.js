function e() {
    return new Promise(function(e, t) {
        wx.showLoading({
            title: "准备上传照片",
            icon: "none"
        }), wx.request({
            url: o.host + "/YinianProject/yinian/GetPrivateSpaceUploadToken",
            method: "GET",
            success: function(t) {
                e(t);
            },
            fail: function(e) {
                t({
                    code: -100,
                    msg: "请求失败"
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    });
}

function t(e, t, n) {
    var o = e.lastIndexOf("."), i = new Date().getTime() + "" + parseInt(1e8 * Math.random() + 1e8) + e.substring(o);
    return new Promise(function(n, o) {
        wx.uploadFile({
            url: "https://upload.qiniup.com",
            filePath: e,
            name: "file",
            formData: {
                key: i,
                token: t
            },
            success: function(e) {
                var t = JSON.parse(e.data).key;
                n(t);
            },
            fail: function(e) {
                o({
                    code: -100,
                    msg: "请求失败"
                });
            },
            complete: function() {}
        });
    });
}

function n(e) {
    return wx.hideLoading(), console.log("uploadEvent", e), new Promise(function(t, n) {
        wx.showLoading({
            title: "正在发布"
        }), wx.request({
            url: o.host + "/YinianProject/activity201805WorkHonor/uploadEvent",
            data: {
                userId: e.userId,
                groupId: e.groupId,
                picAddress: e.picAddress,
                storage: 3e3
            },
            success: function(e) {
                0 === e.data.code ? t(e.data) : n(e.data);
            },
            fail: function(e) {
                n(e);
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getBlessingList = exports.getComment = exports.comment = exports.getMyBlessing = exports.getDetail = exports.getMyRanking = exports.getRankingList = exports.getBlessedUser = exports.sendBlessing = exports.getOthersEvent = exports.getMyEvent = exports.upload = void 0;

require("../../utils/util.js");

var o = require("../../utils/api.js");

exports.upload = function(o) {
    console.log("接收到的参数", o);
    var i = "", a = void 0;
    if (0 !== o.paths.length) return e().then(function(e) {
        return console.log("获取七牛云TOKEN:", e.data.data[0].token), a = e.data.data[0].token, 
        wx.showLoading({
            title: "正在上传照片"
        }), o.paths[0], t(o.paths[0], a, 1);
    }).then(function(e) {
        var n = o.paths[1];
        if (n) return console.log("第二张-有数据", e), e && (i += e + ","), t(n, a, 2);
        e && (i += e), console.log("第二张-无", e);
    }).then(function(e) {
        var n = o.paths[2];
        if (n) return console.log("第三张-有数据", e), e && (i += e + ","), t(n, a, 3);
        console.log("第三张-无", e), e && (i += e);
    }).then(function(e) {
        var n = o.paths[3];
        if (n) return console.log("第四张-有数据", e), e && (i += e + ","), t(n, a, 4);
        console.log("第四张-无", e), e && (i += e);
    }).then(function(e) {
        e && (i += e + ",");
        var n = o.paths[4];
        if (n) return console.log("第五张-有数据", e), e && (i += e + ","), t(n, a, 5);
        console.log("第五张-无", e), e && (i += e);
    }).then(function(e) {
        var n = o.paths[5];
        if (n) return console.log("第六张-有数据", e), e && (i += e + ","), t(n, a, 6);
        console.log("第六张-无", e), e && (i += e);
    }).then(function(e) {
        var n = o.paths[6];
        if (n) return console.log("第七张-有数据", e), e && (i += e + ","), t(n, a, 7);
        console.log("第七张-无", e), e && (i += e);
    }).then(function(e) {
        var n = o.paths[7];
        if (n) return console.log("第八张-有数据", e), e && (i += e + ","), t(n, a, 8);
        console.log("第八张-无", e), e && (i += e);
    }).then(function(e) {
        var n = o.paths[8];
        if (n) return console.log("第九张-有数据", e), e && (i += e), t(n, a, 9);
        console.log("第九张-无", e), e && (i += e);
    }).then(function(e) {
        return wx.hideLoading(), console.log("最后结果", i), o.picAddress = i, n(o);
    });
    wx.showToast({
        title: "没有选择照片"
    });
}, exports.getMyEvent = function(e) {
    var t = e.userId, n = e.groupId;
    return new Promise(function(e, i) {
        wx.request({
            url: o.host + "/YinianProject/activity201805WorkHonor/homePageMySelfBaseInfo",
            data: {
                loginUserId: t,
                groupId: n
            },
            success: function(t) {
                0 === t.data.code ? e(t.data) : i(t.data);
            },
            fail: function(e) {
                i(e);
            },
            complete: function() {}
        });
    });
}, exports.getOthersEvent = function(e) {
    var t = e.userId, n = e.groupId, i = e.pageNumber;
    return new Promise(function(e, a) {
        wx.request({
            url: o.host + "/YinianProject/activity201805WorkHonor/homePageOtherUserInfo",
            data: {
                loginUserId: t,
                groupId: n,
                pageNumber: i
            },
            success: function(t) {
                0 === t.data.code ? e(t.data) : a(t.data);
            },
            fail: function(e) {
                a(e);
            },
            complete: function() {}
        });
    });
}, exports.sendBlessing = function(e) {
    var t = e.userId, n = e.eventId, i = e.blessContent;
    return new Promise(function(e, a) {
        wx.request({
            url: o.host + "/YinianProject/activity201805WorkHonor/sendBless",
            data: {
                loginUserId: t,
                eventId: n,
                blessContent: i
            },
            success: function(t) {
                0 === t.data.code ? e(t.data) : a(t.data);
            },
            fail: function(e) {
                a(e);
            },
            complete: function() {}
        });
    });
}, exports.getBlessedUser = function(e) {
    return new Promise(function(e, t) {
        wx.request({
            url: o.host + "/YinianProject/activity201805WorkHonor/homePageBlessNickNames",
            success: function(n) {
                0 === n.data.code ? e(n.data) : t(n.data);
            },
            fail: function(e) {
                t(e);
            },
            complete: function() {}
        });
    });
}, exports.getRankingList = function(e) {
    var t = e.pageSize, n = e.pageNumber;
    return new Promise(function(e, i) {
        wx.request({
            url: o.host + "/YinianProject/activity201805WorkHonor/orderPageOtherInfo",
            data: {
                pageSize: t,
                pageNumber: n
            },
            success: function(t) {
                0 === t.data.code ? e(t.data) : i(t.data);
            },
            fail: function(e) {
                i(e);
            },
            complete: function() {}
        });
    });
}, exports.getMyRanking = function(e) {
    return new Promise(function(t, n) {
        wx.request({
            url: o.host + "/YinianProject/activity201805WorkHonor/orderPageMySelfInfo",
            data: {
                loginUserId: e
            },
            success: function(e) {
                0 === e.data.code ? t(e.data) : n(e.data);
            },
            fail: function(e) {
                n(e);
            },
            complete: function() {}
        });
    });
}, exports.getDetail = function(e) {
    var t = e.eventId, n = e.userId;
    return new Promise(function(e, i) {
        wx.request({
            url: o.host + "/YinianProject/activity201805WorkHonor/detailPageMySelfPictures",
            data: {
                eventId: t,
                loginUserId: n
            },
            success: function(t) {
                0 === t.data.code ? e(t.data) : i(t.data);
            },
            fail: function(e) {
                i(e);
            },
            complete: function() {}
        });
    });
}, exports.getMyBlessing = function(e) {
    return new Promise(function(t, n) {
        wx.request({
            url: o.host + "/YinianProject/activity201805WorkHonor/detailPageMySelfBlessInfo",
            data: {
                detailUserId: e
            },
            success: function(e) {
                0 === e.data.code ? t(e.data) : n(e.data);
            },
            fail: function(e) {
                n(e);
            },
            complete: function() {}
        });
    });
}, exports.comment = function(e) {
    var t = e.userId, n = e.eventId, i = e.content, a = e.formID;
    return new Promise(function(e, r) {
        wx.request({
            url: o.host + "/YinianProject/yinian/SendComment1",
            data: {
                commentUserId: t,
                commentedUserId: 10,
                eventId: n,
                content: i,
                formID: a
            },
            success: function(t) {
                0 === t.data.code ? e(t.data) : r(t.data);
            },
            fail: function(e) {
                r(e);
            },
            complete: function() {}
        });
    });
}, exports.getComment = function(e) {
    var t = e.eventId, n = e.pageSize, i = e.pageNumber;
    return new Promise(function(e, a) {
        wx.request({
            url: o.host + "/YinianProject/activity201805WorkHonor/detailPageShowComments",
            data: {
                eventId: t,
                pageSize: n,
                pageNumber: i
            },
            success: function(t) {
                0 === t.data.code ? e(t.data) : a(t.data);
            },
            fail: function(e) {
                a(e);
            },
            complete: function() {}
        });
    });
}, exports.getBlessingList = function(e) {
    return new Promise(function(e, t) {
        wx.request({
            url: o.host + "/YinianProject/activity201805WorkHonor/showBlessForSelect",
            success: function(n) {
                0 === n.data.code ? e(n.data) : t(n.data);
            },
            fail: function(e) {
                t(e);
            },
            complete: function() {}
        });
    });
};