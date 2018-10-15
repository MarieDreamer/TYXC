function e(e, a, l) {
    var t = "";
    switch (e = parseInt(e)) {
      case 2:
        t = "/pages/grouptypescoll/grouptypescoll", l && (t = t + "?" + l), o(a, t), console.log("type", 2);
        break;

      case 3:
        t = "/pages/grouptypescoll/grouptypescoll", l && (t = t + "?" + l), o(a, t), console.log("type", 3);
        break;

      case 4:
        t = "/pages/familyAlbum/index/index", l && (t = t + "?" + l), o(a, t), console.log("type", 4);
        break;

      case 5:
        t = "/pages/grouptypescoll/grouptypescoll", l && (t = t + "?" + l), o(a, t), console.log("type", 5);
        break;

      case 11:
        t = "/pages/loversalbum/index/index", l && (t = t + "?" + l), o(a, t), console.log("type", 11);
        break;

      case 40:
        t = "/pages/collegealbum/albumlist/index", l && (t = t + "?" + l), o(a, t), console.log("type", 30);
        break;

      default:
        t = "/pages/viewscoll/viewscoll", l && (t = t + "?" + l), o(a, t), console.log("type", e);
    }
}

function o(e, o) {
    switch (e) {
      case "navigate":
        wx.navigateTo({
            url: o
        });
        break;

      case "redirect":
        wx.redirectTo({
            url: o
        });
        break;

      case "switchTab":
        wx.switchTab({
            url: o
        });
        break;

      case "reLaunch":
        wx.reLaunch({
            url: o
        });
        break;

      case "navigateBack":
        wx.navigateBack({
            delta: 1
        });
        break;

      default:
        wx.switchTab({
            url: "/pages/index/index"
        });
    }
}

var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

module.exports = {
    albumsjump: function(o) {
        if ("object" === (void 0 === o ? "undefined" : a(o)) && "null" != o) {
            var l = o.navigator || "navigate", t = o.groupNewType || 0, c = o.data || {}, s = [];
            Object.keys(c).forEach(function(e) {
                s.push(e + "=" + c[e]);
            });
            var n = s.join("&");
            console.log(n), e(t, l, n);
        } else console.log(o);
    }
};