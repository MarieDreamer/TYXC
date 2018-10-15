var e = require("../../icon.js"), t = void 0;

Component({
    properties: {
        groupId: {
            type: String,
            value: ""
        },
        selectedFriends: {
            type: Array,
            value: [],
            observer: function(e, r) {
                console.log("nv", e);
                var n = t.data.andFriends;
                e.length > 0 ? (n.title = "提醒", n.result = e, t.setData({
                    andFriends: n
                })) : 0 != r.length && t.clearAndFriends();
            }
        }
    },
    created: function() {
        t = this;
    },
    attached: function() {
        t.setData({
            ICON: e.ICON
        });
    },
    data: {
        andFriends: {
            title: "提醒谁看",
            result: []
        }
    },
    methods: {
        toSelectMember: function() {
            var e = "", r = t.data.andFriends.result, n = r.length;
            n > 0 && r.forEach(function(t, r) {
                r == n - 1 ? e += t.userid : e = e + t.userid + ",";
            }), wx.navigateTo({
                url: "../selectMember/selectMember?groupId=" + t.data.groupId + "&selected=" + e
            });
        },
        clearAndFriends: function() {
            var e = t.data.andFriends;
            e.title = "提醒谁看", e.result.length = 0, t.setData({
                andFriends: e
            }), t.triggerEvent("returnResult", e.result);
        }
    }
});