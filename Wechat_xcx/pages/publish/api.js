Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.publishText = exports.getAlbumBaseInfo = exports.getAlbumMembers = void 0;

var e = require("../../utils/api.js"), t = require("../../utils/hotActive.js").hotActive;

exports.getAlbumMembers = function(t) {
    var o = t.groupid, i = t.userid, u = t.pagenum, r = void 0 === u ? 1 : u;
    return new Promise(function(t, u) {
        wx.request({
            url: e.host + "/YinianProject/space/ShowGroupMemberTop",
            data: {
                groupid: o,
                userid: i,
                pagenum: r,
                source: ""
            },
            method: "GET",
            success: function(e) {
                0 == e.data.code ? t(e.data.data) : u({
                    msg: "获取数据失败",
                    code: -1
                });
            },
            fail: function() {
                u({
                    msg: "请求发送失败",
                    code: -1
                });
            }
        });
    });
}, exports.getAlbumBaseInfo = function(t) {
    return new Promise(function(o, i) {
        wx.request({
            url: e.host + "/YinianProject/space/MembersNum",
            data: {
                groupid: t
            },
            method: "GET",
            success: function(e) {
                0 == e.data.code ? o(e.data.data[0]) : i({
                    msg: "获取数据失败",
                    code: -1
                });
            },
            fail: function() {
                i({
                    msg: "请求发送失败",
                    code: -1
                });
            }
        });
    });
}, exports.publishText = function(o) {
    return wx.showLoading({
        title: "正在发布..."
    }), new Promise(function(i, u) {
        wx.request({
            url: e.host + "/YinianProject/event/UploadEvent",
            data: {
                formID: o.formID,
                userid: o.userId,
                groupid: o.groupId,
                textTitle: o.title,
                content: o.content,
                attentionMember: o.attentionMember || "",
                memorytime: o.memorytime,
                publishedTime: o.publishTime || "",
                place: o.place,
                source: "小程序",
                isPush: "true",
                main: 1
            },
            success: function(e) {
                0 === e.data.code ? (i(e.data.data), t(o.userId, o.groupId, "upload")) : u({
                    msg: "请求返回错误",
                    code: -1
                });
            },
            fail: function() {
                u({
                    msg: "请求发送失败",
                    code: -1
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    });
};