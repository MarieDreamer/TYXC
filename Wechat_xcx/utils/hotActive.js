var t = require("./util.js");

module.exports = {
    hotActive: function(e, o, a) {
        console.log(e, o, a), t.wxreq({
            pathname: "YinianProject/flashSale/calculateHotForUser",
            data: {
                userId: e,
                groupId: o,
                operation: a
            }
        }).then(function(t) {}).catch(function(t) {});
    }
};