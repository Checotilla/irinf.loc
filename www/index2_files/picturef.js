﻿(function(n) {
    var t = [], u = function() {
        return typeof n.screen.systemXDPI != "undefined" && n.screen.systemXDPI >= n.screen.logicalXDPI ? n.screen.systemXDPI / n.screen.logicalXDPI : typeof n.devicePixelRatio != "undefined" ? n.devicePixelRatio : 1
    }, f = function() {
        var i = !1, t = i == !1 || n.screen.width > n.screen.height ? n.screen.width : n.screen.height, r = i == !1 || n.innerWidth > n.innerHeight ? n.innerWidth : n.innerHeight;
        return r > t && (t = r), t = t * u()
    }, e = function() {
        return navigator.userAgent.toLowerCase().indexOf("webkit") > -1 ? document.documentElement.clientWidth : n.innerWidth
    }, i = function(n) {
        return n = n.substring(0, n.length - 2), Number(n)
    }, s = function(n) {
        var o, r, s;
        if (n = $.trim(n), n.length > 0)
            for (n = n.toLowerCase(), n = n.substring(1, n.length - 1), o = n.split(") and ("), r = 0, s = o.length; r < s; r++) {
                var h = o[r].indexOf(":"), c = $.trim(o[r].substring(0, h)), t = $.trim(o[r].substring(h + 1));
                switch (c) {
                    case"min-width":
                        if (t = i(t), t > e())
                            return!1;
                        break;
                    case"max-width":
                        if (t = i(t), t < e())
                            return!1;
                        break;
                    case"min-device-pixel-width":
                        if (t = i(t), t > f())
                            return!1;
                        break;
                    case"max-device-pixel-width":
                        if (t = i(t), t < f())
                            return!1;
                        break;
                    case"min-device-pixel-ratio":
                        if (Number(t) > u())
                            return!1;
                        break;
                    default:
                        return!1
                    }
            }
        return!0
    }, o = function(t) {
        var f, e, r, u, l, i, c, o, a;
        t.setAttribute("data-resolved", "true"), f = $(t).find("div[data-src]").get();
        n:for (u = f.length - 1; u >= 0; u--)
            if (l = s(f[u].getAttribute("data-media")), l == !0) {
                e = f[u].getAttribute("data-src"), r = u;
                break
            }
        if (typeof e != "undefined") {
            if (i = t.getElementsByTagName("img")[0], c = !1, i) {
                if (o = i.getAttribute("data-source-index"), o == r || t.getAttribute("data-disable-swap-above") !== null && o >= r || t.getAttribute("data-disable-swap-below") !== null && o <= r)
                    return
            } else
                c = !0, i = n.document.createElement("img"), i.alt = t.getAttribute("data-alt"), t.appendChild(i);
            c ? (i.src = e, i.setAttribute("data-source-index", r)) : h(i, e, r)
        } else
            i || (a = t.getElementsByTagName("noscript")[0], t.innerHTML = a.innerText)
    }, h = function(n, i, u) {
        if (typeof t[i] == "object" && t[i].complete)
            r(n, i, u);
        else if (document.images) {
            var f = $("<img />");
            f.bind("load", function() {
                r(n, f.attr("src"), u)
            }).bind("error", function() {
                c(i, f)
            }), t[i] = f, f.attr("src", i)
        } else
            r(n, i, u)
    }, r = function(n, t, i) {
        n.src = t, n.setAttribute("data-source-index", i)
    }, c = function(n, i) {
        i.unbind("error").unbind("load"), i.get(0).src = "", t[n] = undefined
    };
    n.picturePolyfill = {}, n.picturePolyfill.resolveLast = function() {
        var n = $("div[data-picture]:not([data-resolved],[data-defer])").last().get()[0];
        o(n)
    }, n.picturePolyfill.init = function(n) {
        var i, t, r;
        for (typeof n != "boolean" && (n = !0), i = $("div[data-picture]").get(), t = 0, r = i.length; t < r; t++)
            (i[t].getAttribute("data-resolved") === null || i[t].getAttribute("data-disable-swap") === null) && (n === !0 || i[t].getAttribute("data-defer") === null) && o(i[t])
    }, n.addEventListener ? (n.addEventListener("resize", n.picturePolyfill.init, !1), n.addEventListener("DOMContentLoaded", function() {
        n.picturePolyfill.init(!1)
    }, !1), n.addEventListener("load", n.picturePolyfill.init, !1)) : n.attachEvent && n.attachEvent("onload", n.picturePolyfill.init)
})(window)