Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.previousPageNoRefresh = function() {
    var e = getCurrentPages();
    setTimeout(function() {
        e[e.length - 2].setData({
            fromlast: 1
        }), e[e.length - 2].fromlast = 1;
    }, 150);
};