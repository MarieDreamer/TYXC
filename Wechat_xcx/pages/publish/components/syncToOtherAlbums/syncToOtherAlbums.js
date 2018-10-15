var t = require("../../icon.js"), e = void 0;

Component({
    properties: {
        groupId: {
            type: String,
            value: ""
        },
        selectedSyncAlbums: {
            type: Object,
            observer: function(t, r) {
                var a = e.data.sync;
                t.groupNames.length > 0 ? (a.title = "同步到相册", a.result = t.groupNames, a.groupIds = t.groupIds) : a.title = "同步到其它相册", 
                e.setData({
                    sync: a
                });
            }
        }
    },
    data: {
        sync: {
            title: "同步到其它相册",
            result: "",
            groupIds: ""
        }
    },
    created: function() {
        (e = this).clearSyncAlbumStorage();
    },
    attached: function() {
        e.setData({
            ICON: t.ICON
        });
    },
    ready: function() {},
    methods: {
        toSyncPage: function() {
            wx.navigateTo({
                url: "/pages/others/uploadsync/uploadsync?groupid=" + e.data.groupId
            });
        },
        clearSyncAlbumStorage: function() {
            wx.getStorageSync("strId") && wx.removeStorageSync("strId"), wx.getStorageSync("strName") && wx.removeStorageSync("strName");
        },
        clearSyncResult: function() {
            var t = e.data.sync;
            t.title = "同步到其它相册", t.result = "", t.groupIds = "", e.setData({
                sync: t
            }), e.clearSyncAlbumStorage(), e.triggerEvent("returnResult", t);
        }
    }
});