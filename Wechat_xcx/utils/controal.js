var a = require("./util.js").wxreq;

module.exports = {
    hotmallSharePic: function() {
        return a({
            pathname: "YinianProject/flashSale/flashSaleShowSwitch",
            data: {}
        });
    }
};