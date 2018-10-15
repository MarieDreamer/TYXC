function t() {
    return [ {
        current: 0,
        pagePath: "/pages/index/index",
        iconPath: "https://cc.hohiw.com/xcximg/foot-1-2.png",
        selectedIconPath: "https://cc.hohiw.com/xcximg/foot-1.png",
        text: "首页"
    }, {
        current: 0,
        pagePath: "/pages/category/category",
        iconPath: "https://cc.hohiw.com/xcximg/foot-2-2.png",
        selectedIconPath: "https://cc.hohiw.com/xcximg/foot-2.png",
        text: "分类"
    }, {
        current: 0,
        pagePath: "/pages/cart/cart",
        iconPath: "https://cc.hohiw.com/xcximg/foot-3-21.png",
        selectedIconPath: "https://cc.hohiw.com/xcximg/foot-31.png",
        text: "购物车"
    }, {
        current: 0,
        pagePath: "/pages/user/user",
        iconPath: "https://cc.hohiw.com/xcximg/foot-4-2.png",
        selectedIconPath: "https://cc.hohiw.com/xcximg/foot-4.png",
        text: "我的"
    } ];
}

module.exports = {
    tabbar: function() {
        var c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "tabdata", o = arguments[1], e = arguments[2], h = {}, a = t();
        a[o].iconPath = a[o].selectedIconPath, a[o].current = 1, h[c] = a, e.setData({
            bindData: h
        });
    }
};