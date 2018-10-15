Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("grace.js")), e = t.default.page, a = getApp();

t.default.page = function(o) {
    t.default.mixin(o, {
        onLoad: function(t) {
            var e = this;
            Object.keys(t).forEach(function(a) {
                e[a] = t[a];
            }), t.port && (a.globalData.port = t.port), a.stat.statpv({
                route: this.route,
                options: t
            });
        }
    }), e.call(t.default, o);
}, exports.default = t.default;