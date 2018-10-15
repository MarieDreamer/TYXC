var t = getApp(), a = require("../../js/global.js"), e = require("../template/tabbar.js");

Page({
    data: {
        refresh: 0,
        before_request: 1,
        page: 0,
        listend: 0,
        lists: [],
        cat_id: 0,
        more: "",
        show: {
            all: "none",
            main: ""
        },
        sort_asc: "asc",
        inputShowed: !1,
        inputVal: ""
    },
    onLoad: function(t) {
        var s = this;
        e.tabbar("tabBar", 1, this);
        var o = 0, r = "";
        a.isBlank(t.id) || (o = t.id), a.isBlank(t.key) || (r = t.key), s.setData({
            key: r,
            cat_id: o
        }), s.AjaxGet().then(function(t) {
            wx.setNavigationBarTitle({
                title: s.data.catname
            });
        });
    },
    showCat: function() {
        this.setData({
            show: {
                all: "",
                main: "none"
            }
        });
    },
    closeCat: function() {
        this.setData({
            show: {
                all: "none",
                main: ""
            }
        });
    },
    setCat: function(t) {
        var a = t.currentTarget.dataset.id;
        this.setData({
            refresh: 1,
            cat_id: a
        }), this.closeCat(), this.AjaxGet();
    },
    setSort: function(t) {
        var a = t.currentTarget.dataset.sort, e = t.currentTarget.dataset.sort_asc;
        this.setData({
            refresh: 1,
            sort: a,
            sort_asc: e
        }), this.AjaxGet();
    },
    AjaxGet: function() {
        var a = this, e = a.data.page, s = a.data.listend, o = a.data.before_request;
        if (1 == a.data.refresh && (s = 0, e = 0, a.setData({
            listend: 0
        })), 0 == s && 1 == o) return e += 1, a.setData({
            before_request: 0,
            more: ""
        }), new Promise(function(s, o) {
            t.sendNoRequest({
                url: "/index.php?m=Mobile&c=Goods&a=goodsList&t=" + Math.random(),
                method: "POST",
                data: {
                    p: e,
                    id: a.data.cat_id,
                    sort: a.data.sort,
                    key: a.data.key,
                    sort_asc: a.data.sort_asc
                },
                success: function(t) {
                    if (1 == t.status) {
                        var s;
                        s = 1 == a.data.refresh ? t.goodsList.lists : a.data.lists.concat(t.goodsList.lists), 
                        a.setData({
                            lists: s,
                            page: e,
                            refresh: 0,
                            sort: t.sort,
                            cateArr: t.goodsList.cateArr,
                            catname: t.goodsList.catname
                        });
                    } else 1 == a.data.refresh && a.setData({
                        lists: []
                    }), a.setData({
                        listend: 1,
                        refresh: 0,
                        sort: t.sort,
                        cateArr: t.goodsList.cateArr,
                        catname: t.goodsList.catname
                    });
                },
                complete: function(t) {
                    a.setData({
                        before_request: 1,
                        more: "none"
                    }), s();
                }
            });
        });
    },
    SearchInput: function(t) {
        wx.redirectTo({
            url: "/pages/goodslist/goodslist?key=" + t.detail.value
        });
    },
    onReachBottom: function() {
        this.AjaxGet();
    },
    showInput: function() {
        this.setData({
            inputShowed: !0
        });
    },
    hideInput: function() {
        this.setData({
            inputVal: "",
            inputShowed: !1
        });
    },
    clearInput: function() {
        this.setData({
            inputVal: ""
        });
    }
});