var e = require("../../utils/api.js"), t = require("../../utils/reg.js"), a = getApp(), i = require("../../utils/util.js"), s = require("../../utils/albumsjump.js").albumsjump, r = [ {
    id: 2,
    tag: "朋友",
    name: [ "最佳损友", "我和闺蜜", "友谊长存", "快乐组合", "我们的圈子" ]
}, {
    id: 3,
    tag: "个人",
    name: [ "青葱岁月", "那些年", "私人相册", "我的每一天" ]
}, {
    id: 4,
    tag: "家人",
    name: [ "全家福", "我们这一家人", "快乐家族", "Family", "Home" ]
}, {
    id: 5,
    tag: "宝宝",
    name: [ "宝宝成长日记", "我们的宝宝", "宝宝相册", "萌宝成长记" ]
}, {
    id: 9,
    tag: "同学",
    name: [ "校园时光", "校园的日子", "校园记忆", "葱葱校园", "那些年", "我们的故事" ]
}, {
    id: 10,
    tag: "同事",
    name: [ "公司活动", "公司日常", "同事日记", "关于我们" ]
}, {
    id: 11,
    tag: "情侣",
    name: [ "我们的爱", "陪伴是最长情的告白", "恋恋笔记", "幸福日记", "关于我爱你" ]
}, {
    id: 14,
    tag: "萌宠",
    name: [ "猫猫狗狗", "小萌屋", "汪星人和喵星人", "家有萌宠", "呆萌宝宝", "萌宠" ]
}, {
    id: 15,
    tag: "组织",
    name: [ "我们的组织", "兴趣小组", "组织相册" ]
}, {
    id: 20,
    tag: "摄影",
    name: [ "摄影小组", "摄影作品" ]
}, {
    id: 25,
    tag: "粉丝",
    name: [ "粉丝团", "粉丝部落" ]
}, {
    id: 13,
    tag: "其它",
    name: [ "未命名相册" ]
} ];

Page({
    data: {
        tags: [],
        textNum: 0
    },
    onLoad: function(e) {
        a.stat.statpv({
            route: this.route,
            options: e
        }), wx.setNavigationBarTitle({
            title: "创建相册"
        }), e.version && (this.version = e.version), e.port && (this.port = e.port, a.globalData.port = e.port), 
        e.fromUserID && (this.fromUserID = e.fromUserID), e.fromSpaceID && (this.fromSpaceID = e.fromSpaceID), 
        e.fromEventID && (this.fromEventID = e.fromEventID), this.efrom = e.efrom, this.lastPage = e.lastPage, 
        this.lastPage = this.lastPage || "null", this.isSubmit = 1, this.selectTag = {
            id: null,
            index: null
        }, this.setData({
            tags: r
        });
    },
    onShow: function() {
        this.isMake = !0;
        var e = this, t = this.version ? this.version : "", s = this.port ? this.port : "", r = this.fromUserID ? this.fromUserID : 0, o = this.fromSpaceID ? this.fromSpaceID : 0, n = this.fromEventID ? this.fromEventID : 0;
        a.getUserInfo(function(t) {
            if (1 == e.isSubmit) {
                e.enterCurrentTimestamp = new Date().getTime();
                var r = t.userid, o = {
                    basicInfo: {
                        userid: r,
                        source: s,
                        "isActivityAlbum ": "null",
                        "lastPage ": e.lastPage,
                        timestamp: e.enterCurrentTimestamp,
                        identification: r + "_" + a.enterTimestamp
                    },
                    type: "enter",
                    data: {
                        page: {
                            name: "albumCreatePage",
                            page_identification: r + "_" + e.enterCurrentTimestamp
                        }
                    }
                };
                0 == a.sendValue && i.sendData(r, o), e.button = [];
            } else e.isSubmit = 1;
        }, t, s, r, o, n, "makegroup", function() {});
    },
    onHide: function() {},
    onUnload: function() {
        console.log("make_hide"), this.sendLeaveData();
    },
    sendLeaveData: function() {
        var e = this, t = this.port ? this.port : "", s = wx.getStorageSync("userid"), r = new Date().getTime() - e.enterCurrentTimestamp, o = {
            basicInfo: {
                userid: s,
                source: t,
                " isActivityAlbum ": "null",
                "lastPage ": e.lastPage,
                timestamp: new Date().getTime(),
                identification: s + "_" + a.enterTimestamp
            },
            type: "leave",
            data: {
                page: {
                    name: "albumCreatePage",
                    page_identification: s + "_" + e.enterCurrentTimestamp
                },
                botton: e.button,
                time: r
            }
        };
        0 == a.sendValue && i.sendData(s, o);
    },
    creategroup: function(i) {
        var r = this;
        if (r.data.dataId) if (r.isNewpushId(), "新用户" != a.globalData.userInfo.nickName) if (wx.getStorageSync("userid")) {
            var o = i.detail.formId, n = r.data.value;
            n || (n = "未命名相册", r.data.dataId = 13), t.testStr(n) ? wx.showModal({
                title: "包含敏感词",
                content: "请勿使用包含敏感词汇的相册名称",
                showCancel: !1
            }) : r.isMake && (r.isMake = !1, wx.showToast({
                title: "正在创建",
                icon: "loading",
                duration: 1e4,
                mask: !0
            }), console.log("make"), wx.request({
                url: e.getUrl("YinianProject/newh5/CreateDefaultAlbum"),
                data: {
                    userid: wx.getStorageSync("userid"),
                    groupType: 4,
                    groupName: n,
                    url: "",
                    source: "小程序",
                    formID: o,
                    isDefault: 0,
                    groupNewType: r.data.dataId
                },
                method: "GET",
                success: function(e) {
                    if (console.log(333, e), 0 != e.data.code) return wx.showModal({
                        title: "提示",
                        content: "创建相册失败",
                        showCancel: !1
                    }), r.isMake = !0, void wx.hideToast();
                    var t = e.data.data[0], i = r.data.dataId;
                    if (i = parseInt(i), "upgroup" == r.efrom) {
                        r.selPicToUp(t.groupid, i);
                        var o = {
                            operation: "twice_page_create",
                            userId: wx.getStorageSync("userid") || 0,
                            groupNewType: i,
                            groupId: t.groupid
                        };
                        a.stat.request(o);
                    } else s({
                        groupNewType: i,
                        data: {
                            lastPage: "albumCreatePage",
                            from: "grouplist",
                            groupid: t.groupid
                        },
                        navigator: "redirect"
                    }), r.isMake = !0, wx.hideToast();
                },
                fail: function() {
                    wx.hideToast(), r.isMake = !0;
                }
            }));
        } 
        // else wx.showToast({
        //     title: "获取数据中..."
        // }); 
        else wx.navigateTo({
          url: "/pages/familyAlbum/index/index"
        });
    },
    selPicToUp: function(e, t) {
        wx.chooseImage({
            sizeType: [ "original" ],
            sourceType: [ "album" ],
            success: function(i) {
                console.log(i);
                var r = i.tempFilePaths;
                a.upState = 2, a.fromUp = "pic", a.upObj = {
                    mainIdStr: e,
                    formID: "",
                    place: "",
                    content: "",
                    picarr: r,
                    attentionMember: "",
                    publishedTime: ""
                }, s({
                    groupNewType: t,
                    data: {
                        lastPage: "albumCreatePage",
                        from: "grouplist",
                        groupid: e,
                        mayefrom: "specialActivity"
                    },
                    navigator: "redirect"
                });
            },
            fail: function() {
                wx.navigateBack({
                    delta: 1
                });
            }
        });
    },
    setname: function(e) {
        var t = this, a = e.target.dataset.index, i = r[a].name.length, s = parseInt(Math.random() * i, 10);
        this.data.tags.forEach(function(e, t) {
            e.back = t == a;
        }), this.setData({
            value: r[a].name[s],
            dataId: e.target.dataset.id,
            tags: t.data.tags
        });
    },
    onShareAppMessage: function() {
        this.isSubmit = 2;
        var e = wx.getStorageSync("userid") || 0;
        return {
            title: a.globalData.userInfo.nickName + "邀请你创建相册",
            path: "/pages/makegroup/makegroup?port=创建相册页分享&fromUserID=" + e,
            success: function() {
                a.stat.request({
                    operation: "shareCallback"
                });
            }
        };
    },
    isNewpushId: function() {
        "" != a.pushId && void 0 != a.pushId && i.wxreq({
            pathname: "YinianProject/ep/isNew",
            data: {
                pushId: a.pushId,
                port: a.globalData.port
            }
        }).then(function(e) {}, function(e) {});
    }
});