(function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
})(require("../../utils/pagehelper.js")).default.page({
    data: {},
    changetext: function() {
        console.log(this.from);
    }
});