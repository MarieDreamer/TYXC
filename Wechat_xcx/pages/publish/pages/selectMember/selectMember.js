function e(e) {
    if (Array.isArray(e)) {
        for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
        return a;
    }
    return Array.from(e);
}

var t = require("../../icon.js"), a = require("../../api.js"), n = getApp(), r = void 0;

Page({
    data: {
        testImageUrl: "http://img06.tooopen.com/images/20160806/tooopen_sy_174396723841.jpg",
        memberList: [],
        memberNumber: 0,
        loading: -1,
        userId: wx.getStorageSync("userid"),
        ICON: Object
    },
    onLoad: function(e) {
        n.stat.statpv({
            route: this.route,
            options: e
        }), (r = this).groupId = e.groupId, r.selected = e.selected, console.log("that.selected", r.selected.length), 
        r.pageNumber = 1, r.loadComplete = !1, r.setData({
            ICON: t.ICON
        }), r._getAlbumMembers(), r._getAlbumBaseInfo();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        r._getAlbumMembers();
    },
    _getAlbumMembers: function() {
        if (!r.loadComplete && 0 !== r.data.loading) {
            r.setData({
                loading: 0
            });
            var t = {
                groupid: r.groupId,
                userid: r.data.userId,
                pagenum: r.pageNumber
            };
            (0, a.getAlbumMembers)(t).then(function(t) {
                if (0 !== t.length) {
                    var a = r.data.memberList;
                    r.selected.length > 0 && r.updateSelected(t), a.push.apply(a, e(t)), r.setData({
                        memberList: a,
                        loading: 1
                    }), r.pageNumber++;
                } else r.loadComplete = !0;
            }).catch(function(e) {
                wx.showToast({
                    title: e.msg,
                    image: "/images/toast_warning.png"
                }), r.disabled = 1, r.setData({
                    loading: 1
                });
            });
        }
    },
    _getAlbumBaseInfo: function() {
        (0, a.getAlbumBaseInfo)(r.groupId).then(function(e) {
            console.log("b", e), r.setData({
                memberNumber: e.gnum,
                adminId: e.userid
            });
        }).catch(function(e) {
            wx.showToast({
                title: e.msg,
                image: "/images/toast_warning.png"
            });
        });
    },
    selectMember: function(e) {
        var t = e.currentTarget.dataset.userid, a = e.currentTarget.dataset.selected;
        if (!r.getMoreThan5Selected() || a) for (var n = r.data.memberList, o = 0; o < n.length; o++) {
            var s = n[o];
            if (parseInt(s.user.userid) === t) return s.selected ? s.selected = !1 : s.selected = !0, 
            void r.setData({
                memberList: n
            });
        } else wx.showToast({
            title: "最多选择5个",
            image: "/images/toast_warning.png"
        });
    },
    getMoreThan5Selected: function() {
        for (var e = r.data.memberList, t = 0, a = 0; a < e.length; a++) {
            var n = e[a];
            if (!(t < 5)) return !0;
            n.selected && t++;
        }
        return !1;
    },
    saveSelected: function() {
        for (var e = r.data.memberList, t = [], a = 0; a < e.length; a++) {
            if (t.length > 5) return;
            var n = e[a];
            n.selected && t.push(n.user);
        }
        var o = getCurrentPages();
        o[o.length - 2].setData({
            selectedFriends: t
        }), wx.navigateBack({
            delta: 1
        });
    },
    updateSelected: function(e) {
        var t = r.selected.split(",");
        return e.map(function(e) {
            for (var a = e.user.userid, n = 0; n < t.length; n++) if (a == t[n]) return e.selected = !0, 
            e;
        }), console.log(e), e;
    }
});