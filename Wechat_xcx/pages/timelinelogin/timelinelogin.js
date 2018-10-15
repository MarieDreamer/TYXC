var e = getApp(), i = require("../../utils/util.js"), r = require("../../utils/config.js").newGroupType, o = require("../../utils/config.js").nweGroupTypeNoLover;

Page({
    data: {
        upic: "",
        userName: "",
        groupName: ""
    },
    onLoad: function(i) {
        i.version && (this.version = i.version), i.port && (this.port = i.port, e.globalData.port = i.port, 
        this.setData({
            port: i.port
        })), i.fromUserID && (this.fromUserID = i.fromUserID), i.fromSpaceID && (this.fromSpaceID = i.fromSpaceID), 
        i.fromEventID && (this.fromEventID = i.fromEventID), this.na = this.version ? this.version : "", 
        this.nb = this.port ? this.port : "", this.nc = this.fromUserID ? this.fromUserID : 0, 
        this.nd = this.fromSpaceID ? this.fromSpaceID : 0, this.ne = this.fromEventID ? this.fromEventID : 0;
        var t = this, n = Object.keys(i);
        if (this.query = [], t.clickfrom = i.clickfrom, n.forEach(function(e) {
            t.query.push(e + "=" + i[e]);
        }), this.grouptype = i.groupNewType ? parseInt(i.groupNewType) : 0, r.indexOf(t.grouptype) > -1 && "eid" == t.clickfrom) wx.redirectTo({
            url: "/pages/eventdetail/eventdetail?" + t.query.join("&")
        }); else {
            e.getUserInfo(function(e) {
                if ("新用户" != e.nickName) if (o.indexOf(t.grouptype) > -1) wx.redirectTo({
                    url: "/pages/grouptypescoll/grouptypescoll?" + t.query.join("&")
                }); else if (11 == t.grouptype) wx.redirectTo({
                    url: "/pages/loversalbum/index/index?" + t.query.join("&")
                }); else if (4 == t.grouptype) wx.redirectTo({
                    url: "/pages/familyAlbum/index/index?" + t.query.join("&")
                }); else {
                    var i = "";
                    i = "group" == t.clickfrom ? "/pages/viewscoll/viewscoll?" + t.query.join("&") : "eid" == t.clickfrom ? "/pages/eventdetail/eventdetail?" + t.query.join("&") : "party" == t.clickfrom ? "/pages/party/party?" + t.query.join("&") : "grouptypescoll" == t.clickfrom ? "/pages/grouptypescoll/grouptypescoll?" + t.query.join("&") : "storiesIndex" == t.clickfrom ? "/pages/stories/pages/landing/landing?" + t.query.join("&") : "/pages/viewscoll/viewscoll?" + t.query.join("&"), 
                    wx.redirectTo({
                        url: i
                    });
                }
            }, this.na, this.nb, this.nc, this.nd, this.ne, function() {});
            var s = i.groupid || i.gId;
            this.getShareInformation(i.fromUserID, s);
        }
    },
    onReady: function() {},
    userInfoHandler: function(i) {
        var r = this;
        "getUserInfo:fail auth deny" == i.detail.errMsg ? wx.switchTab({
            url: "/pages/index/index"
        }) : e.newAuthfunction(function(e) {
            if ("新用户" != e.nickName) if (o.indexOf(r.grouptype) > -1) wx.redirectTo({
                url: "/pages/grouptypescoll/grouptypescoll?" + r.query.join("&")
            }); else if (11 == r.grouptype || "11" == r.grouptype) wx.redirectTo({
                url: "/pages/loversalbum/index/index?" + r.query.join("&")
            }); else if (4 == r.grouptype) wx.redirectTo({
                url: "/pages/familyAlbum/index/index?" + r.query.join("&")
            }); else {
                var i = "";
                i = "group" == r.clickfrom ? "/pages/viewscoll/viewscoll?" + r.query.join("&") : "eid" == r.clickfrom ? "/pages/eventdetail/eventdetail?" + r.query.join("&") : "party" == r.clickfrom ? "/pages/party/party?" + r.query.join("&") : "grouptypescoll" == r.clickfrom ? "/pages/grouptypescoll/grouptypescoll?" + r.query.join("&") : "storiesIndex" == r.clickfrom ? "/pages/stories/pages/landing/landing?" + r.query.join("&") : "/pages/viewscoll/viewscoll?" + r.query.join("&"), 
                wx.redirectTo({
                    url: i
                });
            }
        }, this.na, this.nb, this.nc, this.nd, this.ne, i.detail, "", function() {});
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    getShareInformation: function(e, r) {
        wx.showLoading({
            title: "加载中"
        });
        var o = this;
        i.wxreq({
            pathname: "YinianProject/h5/getUserAndGroupName",
            data: {
                userId: e,
                groupId: r
            }
        }).then(function(e) {
            wx.hideLoading(), 0 == e.code && o.setData({
                upic: e.data[0].pic,
                userName: e.data[0].userName,
                groupName: e.data[0].groupName
            });
        }, function(e) {
            wx.hideLoading();
        });
    }
});