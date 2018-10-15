module.exports.AMapWX = function(e) {
    this.key = e.key, this.requestConfig = {
        s: "rsx",
        platform: "WXJS",
        appname: e.key,
        sdkversion: "1.1.0",
        logversion: "2.0"
    }, this.getRegeo = function(e) {
        function t(t) {
            var a = s.requestConfig;
            wx.request({
                url: "https://restapi.amap.com/v3/geocode/regeo",
                data: {
                    key: s.key,
                    location: t,
                    extensions: "all",
                    s: a.s,
                    platform: a.platform,
                    appname: s.key,
                    sdkversion: a.sdkversion,
                    logversion: a.logversion
                },
                method: "GET",
                header: {
                    "content-type": "application/json"
                },
                success: function(s) {
                    var a, o, i, r, n, c, d, p;
                    s.data.status && "1" == s.data.status ? (a = s.data.regeocode, o = a.addressComponent, 
                    i = [], r = a.roads[0].name + "附近", n = t.split(",")[0], c = t.split(",")[1], a.pois && a.pois[0] && (r = a.pois[0].name + "附近", 
                    (d = a.pois[0].location) && (n = parseFloat(d.split(",")[0]), c = parseFloat(d.split(",")[1]))), 
                    o.provice && i.push(o.provice), o.city && i.push(o.city), o.district && i.push(o.district), 
                    o.streetNumber && o.streetNumber.street && o.streetNumber.number ? (i.push(o.streetNumber.street), 
                    i.push(o.streetNumber.number)) : i.push(a.roads[0].name), i = i.join(""), p = [ {
                        iconPath: e.iconPath,
                        width: e.iconWidth,
                        height: e.iconHeight,
                        name: i,
                        desc: r,
                        longitude: n,
                        latitude: c,
                        id: 0,
                        regeocodeData: a
                    } ], e.success(p)) : e.fail({
                        errCode: s.data.infocode,
                        errMsg: s.data.info
                    });
                },
                fail: function(t) {
                    e.fail({
                        errCode: "0",
                        errMsg: t.errMsg || ""
                    });
                }
            });
        }
        var s = this;
        e.location ? t(e.location) : wx.getLocation({
            type: "gcj02",
            success: function(e) {
                t(e.longitude + "," + e.latitude);
            },
            fail: function(t) {
                e.fail({
                    errCode: "0",
                    errMsg: t.errMsg || ""
                });
            }
        });
    }, this.getWeather = function(e) {
        function t(t) {
            var o = "base";
            e.type && "forecast" == e.type && (o = "all"), wx.request({
                url: "https://restapi.amap.com/v3/weather/weatherInfo",
                data: {
                    key: s.key,
                    city: t,
                    extensions: o,
                    s: a.s,
                    platform: a.platform,
                    appname: s.key,
                    sdkversion: a.sdkversion,
                    logversion: a.logversion
                },
                method: "GET",
                header: {
                    "content-type": "application/json"
                },
                success: function(t) {
                    var s, a;
                    t.data.status && "1" == t.data.status ? t.data.lives ? (s = t.data.lives) && s.length > 0 && (s = s[0], 
                    a = function(e) {
                        return {
                            city: {
                                text: "城市",
                                data: e.city
                            },
                            weather: {
                                text: "天气",
                                data: e.weather
                            },
                            temperature: {
                                text: "温度",
                                data: e.temperature
                            },
                            winddirection: {
                                text: "风向",
                                data: e.winddirection + "风"
                            },
                            windpower: {
                                text: "风力",
                                data: e.windpower + "级"
                            },
                            humidity: {
                                text: "湿度",
                                data: e.humidity + "%"
                            }
                        };
                    }(s), a.liveData = s, e.success(a)) : t.data.forecasts && t.data.forecasts[0] && e.success({
                        forecast: t.data.forecasts[0]
                    }) : e.fail({
                        errCode: t.data.infocode,
                        errMsg: t.data.info
                    });
                },
                fail: function(t) {
                    e.fail({
                        errCode: "0",
                        errMsg: t.errMsg || ""
                    });
                }
            });
        }
        var s = this, a = s.requestConfig;
        e.city ? t(e.city) : wx.getLocation({
            type: "gcj02",
            success: function(o) {
                var i = o.longitude + "," + o.latitude;
                wx.request({
                    url: "https://restapi.amap.com/v3/geocode/regeo",
                    data: {
                        key: s.key,
                        location: i,
                        extensions: "all",
                        s: a.s,
                        platform: a.platform,
                        appname: s.key,
                        sdkversion: a.sdkversion,
                        logversion: a.logversion
                    },
                    method: "GET",
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(s) {
                        var a, o;
                        s.data.status && "1" == s.data.status ? ((o = s.data.regeocode).addressComponent ? a = o.addressComponent.adcode : o.aois && o.aois.length > 0 && (a = o.aois[0].adcode), 
                        t(a)) : e.fail({
                            errCode: s.data.infocode,
                            errMsg: s.data.info
                        });
                    },
                    fail: function(t) {
                        e.fail({
                            errCode: "0",
                            errMsg: t.errMsg || ""
                        });
                    }
                });
            },
            fail: function(t) {
                e.fail({
                    errCode: "0",
                    errMsg: t.errMsg || ""
                });
            }
        });
    }, this.getPoiAround = function(e) {
        function t(t) {
            var o = {
                key: s.key,
                location: t,
                s: a.s,
                platform: a.platform,
                appname: s.key,
                sdkversion: a.sdkversion,
                logversion: a.logversion
            };
            e.querytypes && (o.types = e.querytypes), e.querykeywords && (o.keywords = e.querykeywords), 
            wx.request({
                url: "https://restapi.amap.com/v3/place/around",
                data: o,
                method: "GET",
                header: {
                    "content-type": "application/json"
                },
                success: function(t) {
                    var s, a, o, i;
                    if (t.data.status && "1" == t.data.status) {
                        if ((t = t.data) && t.pois) {
                            for (s = [], a = 0; a < t.pois.length; a++) o = 0 == a ? e.iconPathSelected : e.iconPath, 
                            s.push({
                                latitude: parseFloat(t.pois[a].location.split(",")[1]),
                                longitude: parseFloat(t.pois[a].location.split(",")[0]),
                                iconPath: o,
                                width: 22,
                                height: 32,
                                id: a,
                                name: t.pois[a].name,
                                address: t.pois[a].address
                            });
                            i = {
                                markers: s,
                                poisData: t.pois
                            }, e.success(i);
                        }
                    } else e.fail({
                        errCode: t.data.infocode,
                        errMsg: t.data.info
                    });
                },
                fail: function(t) {
                    e.fail({
                        errCode: "0",
                        errMsg: t.errMsg || ""
                    });
                }
            });
        }
        var s = this, a = s.requestConfig;
        e.location ? t(e.location) : wx.getLocation({
            type: "gcj02",
            success: function(e) {
                t(e.longitude + "," + e.latitude);
            },
            fail: function(t) {
                e.fail({
                    errCode: "0",
                    errMsg: t.errMsg || ""
                });
            }
        });
    }, this.getStaticmap = function(e) {
        function t(t) {
            o.push("location=" + t), e.zoom && o.push("zoom=" + e.zoom), e.size && o.push("size=" + e.size), 
            e.scale && o.push("scale=" + e.scale), e.markers && o.push("markers=" + e.markers), 
            e.labels && o.push("labels=" + e.labels), e.paths && o.push("paths=" + e.paths), 
            e.traffic && o.push("traffic=" + e.traffic);
            var s = i + o.join("&");
            e.success({
                url: s
            });
        }
        var s, a = this, o = [], i = "https://restapi.amap.com/v3/staticmap?";
        o.push("key=" + a.key), s = a.requestConfig, o.push("s=" + s.s), o.push("platform=" + s.platform), 
        o.push("appname=" + s.appname), o.push("sdkversion=" + s.sdkversion), o.push("logversion=" + s.logversion), 
        e.location ? t(e.location) : wx.getLocation({
            type: "gcj02",
            success: function(e) {
                t(e.longitude + "," + e.latitude);
            },
            fail: function(t) {
                e.fail({
                    errCode: "0",
                    errMsg: t.errMsg || ""
                });
            }
        });
    };
};