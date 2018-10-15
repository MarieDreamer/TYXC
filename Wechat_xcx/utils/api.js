require("./config.js");

var t = "https://api.zhuiyinanian.com", i = "https://api.zhuiyinanian.com";

module.exports = {
    getUrl: function(i) {
        return t + "/" + i;
    },
    getUrl_test: function(t) {
        return i + "/" + t;
    },
    host: t,
    host_test: i
};