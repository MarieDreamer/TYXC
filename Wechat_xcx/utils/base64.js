var r = new function() {
    var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", t = function(r) {
        r = r.replace(/\r\n/g, "\n");
        for (var t = "", e = 0; e < r.length; e++) {
            var o = r.charCodeAt(e);
            o < 128 ? t += String.fromCharCode(o) : o > 127 && o < 2048 ? (t += String.fromCharCode(o >> 6 | 192), 
            t += String.fromCharCode(63 & o | 128)) : (t += String.fromCharCode(o >> 12 | 224), 
            t += String.fromCharCode(o >> 6 & 63 | 128), t += String.fromCharCode(63 & o | 128));
        }
        return t;
    }, e = function(r) {
        for (var t = "", e = 0, o = c1 = c2 = 0; e < r.length; ) (o = r.charCodeAt(e)) < 128 ? (t += String.fromCharCode(o), 
        e++) : o > 191 && o < 224 ? (c2 = r.charCodeAt(e + 1), t += String.fromCharCode((31 & o) << 6 | 63 & c2), 
        e += 2) : (c2 = r.charCodeAt(e + 1), c3 = r.charCodeAt(e + 2), t += String.fromCharCode((15 & o) << 12 | (63 & c2) << 6 | 63 & c3), 
        e += 3);
        return t;
    };
    this.encode = function(e) {
        var o, a, n, c, h, C, d, i = "", f = 0;
        for (e = t(e); f < e.length; ) c = (o = e.charCodeAt(f++)) >> 2, h = (3 & o) << 4 | (a = e.charCodeAt(f++)) >> 4, 
        C = (15 & a) << 2 | (n = e.charCodeAt(f++)) >> 6, d = 63 & n, isNaN(a) ? C = d = 64 : isNaN(n) && (d = 64), 
        i = i + r.charAt(c) + r.charAt(h) + r.charAt(C) + r.charAt(d);
        return i;
    }, this.decode = function(t) {
        var o, a, n, c, h, C, d = "", i = 0;
        for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); i < t.length; ) o = r.indexOf(t.charAt(i++)) << 2 | (c = r.indexOf(t.charAt(i++))) >> 4, 
        a = (15 & c) << 4 | (h = r.indexOf(t.charAt(i++))) >> 2, n = (3 & h) << 6 | (C = r.indexOf(t.charAt(i++))), 
        d += String.fromCharCode(o), 64 != h && (d += String.fromCharCode(a)), 64 != C && (d += String.fromCharCode(n));
        return d = e(d);
    };
}();

module.exports = {
    Base64: r
};