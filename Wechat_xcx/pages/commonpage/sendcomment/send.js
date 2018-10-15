var e = require("../../../utils/util.js"), t = require("../../../utils/reg.js"), n = (require("../../../utils/api.js"), 
getApp());

Page({
    data: {
        commentLegitimate: !1
    },
    onLoad: function(e) {
        n.stat.statpv({
            route: this.route,
            options: e
        });
        var t = this;
        this.formID = "", t.eid = e.eid, t.state = e.state, t.prevFrom = e.prevFrom, t.userid = n.globalData.userInfo.userid || wx.getStorageSync("userid"), 
        n.fromlast = 1, t.commentedUserid = e.commeneduserid || 10, t.commentedNickname = e.commentedNickname || "", 
        "sendmaincomment" === e.state && t.setData({
            placecontent: "请输入评论内容...."
        }), "personalPage" === t.prevFrom && "sendusercomment" === e.state && t.setData({
            placecontent: "@" + t.commentedNickname + ":"
        });
    },
    setcolor: function(e) {
        var t = e.detail.value.trim().length > 0;
        this.setData({
            commentLegitimate: t
        });
    },
    onShow: function() {},
    back: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    sendcomment: function(a) {
        var i = this;
        this.formID = a.detail.formId;
        var m = a.detail.value.content.replace(/\n/g, "");
        if (i.userid) if (m.trim().length > 0) {
            if (t.testStr(m)) return void wx.showModal({
                title: "包含敏感词",
                content: "请勿输入敏感词汇",
                showCancel: !1
            });
            wx.showToast({
                title: "正在发表",
                icon: "loading",
                duration: 5e3,
                mask: !0
            }), e.wxreq({
                pathname: "YinianProject/yinian/SendComment1",
                data: {
                    commentUserId: i.userid,
                    commentedUserId: i.commentedUserid,
                    eventId: i.eid,
                    content: m,
                    formID: i.formID
                }
            }).then(function(t) {
                if (0 == t.code) {
                    if (wx.showToast({
                        title: "评论成功",
                        icon: "loading",
                        duration: 5e3,
                        mask: !0
                    }), "mymemory" == i.prevFrom) {
                        var a = getCurrentPages(), o = a.length, r = a[o - 2].data.eventlist;
                        r && (r.forEach(function(a) {
                            a.eid == i.eid && (a.commentCnt++, a.comments.unshift({
                                cid: t.data[0].cid,
                                commentedUser: {
                                    userid: i.commentedUserid,
                                    unickname: i.commentedname || "系统消息"
                                },
                                commentUser: {
                                    userid: i.userid,
                                    unickname: n.globalData.userInfo.nickName,
                                    upic: n.globalData.userInfo.avatarUrl
                                },
                                ccontent: m,
                                ctime: e.formatTimeWithSecond(new Date())
                            }));
                        }), a[o - 2].setData({
                            eventlist: r
                        }));
                    } else if ("personalPage" === i.prevFrom) {
                        var s = getCurrentPages(), c = s[s.length - 2];
                        c.comment.eid = i.eid, c.comment.text = m, c.comment.cid = t.data[0].cid, i.commentedUserid && 10 != i.commentedUserid && (c.comment.replyUserId = i.commentedUserid, 
                        c.comment.nick = i.commentedNickname);
                    } else if ("party" === i.prevFrom) {
                        var d = getCurrentPages(), l = d.length, u = d[l - 2].data.currentTab, f = void 0;
                        1 == u && (f = d[l - 2].data.eventlist), 2 == u && (f = d[l - 2].data.partyEventlist), 
                        f && f.forEach(function(a) {
                            a.list[0].eid == i.eid && (a.list[0].commentCnt++, a.list[0].comments.unshift({
                                cid: t.data[0].cid,
                                commentedUser: {
                                    userid: i.commentedUserid,
                                    unickname: i.commentedname || "系统消息"
                                },
                                commentUser: {
                                    userid: i.userid,
                                    unickname: n.globalData.userInfo.nickName,
                                    upic: n.globalData.userInfo.avatarUrl
                                },
                                ccontent: m,
                                ctime: e.formatTimeWithSecond(new Date())
                            }));
                        }), 1 == u && d[l - 2].setData({
                            eventlist: f
                        }), 2 == u && d[l - 2].setData({
                            partyEventlist: f
                        });
                    } else {
                        var g = getCurrentPages(), v = g.length, h = g[v - 2].data.eventlist;
                        h && h.forEach(function(a) {
                            a.list[0].eid == i.eid && (a.list[0].commentCnt++, a.list[0].comments.unshift({
                                cid: t.data[0].cid,
                                commentedUser: {
                                    userid: i.commentedUserid,
                                    unickname: i.commentedname || "系统消息"
                                },
                                commentUser: {
                                    userid: i.userid,
                                    unickname: n.globalData.userInfo.nickName,
                                    upic: n.globalData.userInfo.avatarUrl
                                },
                                ccontent: m,
                                ctime: e.formatTimeWithSecond(new Date())
                            }));
                        }), g[v - 2].setData({
                            eventlist: h
                        });
                    }
                    wx.navigateBack({
                        delta: 1
                    }), wx.hideToast();
                }
            });
        } else wx.showModal({
            title: "提示",
            content: "请输入正确的评论内容！",
            showCancel: !1
        });
    }
});