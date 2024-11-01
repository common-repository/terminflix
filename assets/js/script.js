var BOOTSTRAP_NAMESPACE = "flix";if(typeof jQuery != "undefined") { $ = jQuery; }"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function (e, t) {
  var n,
      r,
      i = typeof t === "undefined" ? "undefined" : _typeof(t),
      o = e.location,
      a = e.document,
      s = a.documentElement,
      l = e.jQuery,
      u = e.$,
      c = {},
      p = [],
      f = "1.10.2",
      d = p.concat,
      h = p.push,
      g = p.slice,
      m = p.indexOf,
      y = c.toString,
      v = c.hasOwnProperty,
      b = f.trim,
      x = function x(e, t) {
    return new x.fn.init(e, t, r);
  },
      w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      T = /\S+/g,
      C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      E = /^[\],:{}\s]*$/,
      S = /(?:^|:|,)(?:\s*\[)+/g,
      A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
      j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
      D = /^-ms-/,
      L = /-([\da-z])/gi,
      H = function H(e, t) {
    return t.toUpperCase();
  },
      q = function q(e) {
    (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready());
  },
      _ = function _() {
    a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q));
  };x.fn = x.prototype = { jquery: f, constructor: x, init: function init(e, n, r) {
      var i, o;if (!e) return this;if ("string" == typeof e) {
        if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);if (i[1]) {
          if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n)) for (i in n) {
            x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
          }return this;
        }if (o = a.getElementById(i[2]), o && o.parentNode) {
          if (o.id !== i[2]) return r.find(e);this.length = 1, this[0] = o;
        }return this.context = a, this.selector = e, this;
      }return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this));
    }, selector: "", length: 0, toArray: function toArray() {
      return g.call(this);
    }, get: function get(e) {
      return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
    }, pushStack: function pushStack(e) {
      var t = x.merge(this.constructor(), e);return t.prevObject = this, t.context = this.context, t;
    }, each: function each(e, t) {
      return x.each(this, e, t);
    }, ready: function ready(e) {
      return x.ready.promise().done(e), this;
    }, slice: function slice() {
      return this.pushStack(g.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(e) {
      var t = this.length,
          n = +e + (0 > e ? t : 0);return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
    }, map: function map(e) {
      return this.pushStack(x.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    }, end: function end() {
      return this.prevObject || this.constructor(null);
    }, push: h, sort: [].sort, splice: [].splice }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () {
    var e,
        n,
        r,
        i,
        o,
        a,
        s = arguments[0] || {},
        l = 1,
        u = arguments.length,
        c = !1;for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == (typeof s === "undefined" ? "undefined" : _typeof(s)) || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++) {
      if (null != (o = arguments[l])) for (i in o) {
        e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
      }
    }return s;
  }, x.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), noConflict: function noConflict(t) {
      return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x;
    }, isReady: !1, readyWait: 1, holdReady: function holdReady(e) {
      e ? x.readyWait++ : x.ready(!0);
    }, ready: function ready(e) {
      if (e === !0 ? ! --x.readyWait : !x.isReady) {
        if (!a.body) return setTimeout(x.ready);x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"));
      }
    }, isFunction: function isFunction(e) {
      return "function" === x.type(e);
    }, isArray: Array.isArray || function (e) {
      return "array" === x.type(e);
    }, isWindow: function isWindow(e) {
      return null != e && e == e.window;
    }, isNumeric: function isNumeric(e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    }, type: function type(e) {
      return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? c[y.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
    }, isPlainObject: function isPlainObject(e) {
      var n;if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;try {
        if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (r) {
        return !1;
      }if (x.support.ownLast) for (n in e) {
        return v.call(e, n);
      }for (n in e) {}return n === t || v.call(e, n);
    }, isEmptyObject: function isEmptyObject(e) {
      var t;for (t in e) {
        return !1;
      }return !0;
    }, error: function error(e) {
      throw Error(e);
    }, parseHTML: function parseHTML(e, t, n) {
      if (!e || "string" != typeof e) return null;"boolean" == typeof t && (n = t, t = !1), t = t || a;var r = k.exec(e),
          i = !n && [];return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes));
    }, parseJSON: function parseJSON(n) {
      return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t);
    }, parseXML: function parseXML(n) {
      var r, i;if (!n || "string" != typeof n) return null;try {
        e.DOMParser ? (i = new DOMParser(), r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n));
      } catch (o) {
        r = t;
      }return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r;
    }, noop: function noop() {}, globalEval: function globalEval(t) {
      t && x.trim(t) && (e.execScript || function (t) {
        e.eval.call(e, t);
      })(t);
    }, camelCase: function camelCase(e) {
      return e.replace(D, "ms-").replace(L, H);
    }, nodeName: function nodeName(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }, each: function each(e, t, n) {
      var r,
          i = 0,
          o = e.length,
          a = M(e);if (n) {
        if (a) {
          for (; o > i; i++) {
            if (r = t.apply(e[i], n), r === !1) break;
          }
        } else for (i in e) {
          if (r = t.apply(e[i], n), r === !1) break;
        }
      } else if (a) {
        for (; o > i; i++) {
          if (r = t.call(e[i], i, e[i]), r === !1) break;
        }
      } else for (i in e) {
        if (r = t.call(e[i], i, e[i]), r === !1) break;
      }return e;
    }, trim: b && !b.call("\uFEFF\xA0") ? function (e) {
      return null == e ? "" : b.call(e);
    } : function (e) {
      return null == e ? "" : (e + "").replace(C, "");
    }, makeArray: function makeArray(e, t) {
      var n = t || [];return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n;
    }, inArray: function inArray(e, t, n) {
      var r;if (t) {
        if (m) return m.call(t, e, n);for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) {
          if (n in t && t[n] === e) return n;
        }
      }return -1;
    }, merge: function merge(e, n) {
      var r = n.length,
          i = e.length,
          o = 0;if ("number" == typeof r) for (; r > o; o++) {
        e[i++] = n[o];
      } else while (n[o] !== t) {
        e[i++] = n[o++];
      }return e.length = i, e;
    }, grep: function grep(e, t, n) {
      var r,
          i = [],
          o = 0,
          a = e.length;for (n = !!n; a > o; o++) {
        r = !!t(e[o], o), n !== r && i.push(e[o]);
      }return i;
    }, map: function map(e, t, n) {
      var r,
          i = 0,
          o = e.length,
          a = M(e),
          s = [];if (a) for (; o > i; i++) {
        r = t(e[i], i, n), null != r && (s[s.length] = r);
      } else for (i in e) {
        r = t(e[i], i, n), null != r && (s[s.length] = r);
      }return d.apply([], s);
    }, guid: 1, proxy: function proxy(e, n) {
      var r, i, o;return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function i() {
        return e.apply(n || this, r.concat(g.call(arguments)));
      }, i.guid = e.guid = e.guid || x.guid++, i) : t;
    }, access: function access(e, n, r, i, o, a, s) {
      var l = 0,
          u = e.length,
          c = null == r;if ("object" === x.type(r)) {
        o = !0;for (l in r) {
          x.access(e, n, l, r[l], !0, a, s);
        }
      } else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function n(e, t, _n2) {
        return c.call(x(e), _n2);
      })), n)) for (; u > l; l++) {
        n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
      }return o ? e : c ? n.call(e) : u ? n(e[0], r) : a;
    }, now: function now() {
      return new Date().getTime();
    }, swap: function swap(e, t, n, r) {
      var i,
          o,
          a = {};for (o in t) {
        a[o] = e.style[o], e.style[o] = t[o];
      }i = n.apply(e, r || []);for (o in t) {
        e.style[o] = a[o];
      }return i;
    } }), x.ready.promise = function (t) {
    if (!n) if (n = x.Deferred(), "complete" === a.readyState) setTimeout(x.ready);else if (a.addEventListener) a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1);else {
      a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);var r = !1;try {
        r = null == e.frameElement && a.documentElement;
      } catch (i) {}r && r.doScroll && function o() {
        if (!x.isReady) {
          try {
            r.doScroll("left");
          } catch (e) {
            return setTimeout(o, 50);
          }_(), x.ready();
        }
      }();
    }return n.promise(t);
  }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
    c["[object " + t + "]"] = t.toLowerCase();
  });function M(e) {
    var t = e.length,
        n = x.type(e);return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }r = x(a), function (e, t) {
    var n,
        r,
        i,
        o,
        a,
        s,
        l,
        u,
        c,
        p,
        f,
        d,
        h,
        g,
        m,
        y,
        v,
        b = "sizzle" + -new Date(),
        w = e.document,
        T = 0,
        C = 0,
        N = st(),
        k = st(),
        E = st(),
        S = !1,
        A = function A(e, t) {
      return e === t ? (S = !0, 0) : 0;
    },
        j = typeof t === "undefined" ? "undefined" : _typeof(t),
        D = 1 << 31,
        L = {}.hasOwnProperty,
        H = [],
        q = H.pop,
        _ = H.push,
        M = H.push,
        O = H.slice,
        F = H.indexOf || function (e) {
      var t = 0,
          n = this.length;for (; n > t; t++) {
        if (this[t] === e) return t;
      }return -1;
    },
        B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        P = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        W = R.replace("w", "w#"),
        $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]",
        I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)",
        z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
        X = RegExp("^" + P + "*," + P + "*"),
        U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
        V = RegExp(P + "*[+~]"),
        Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"),
        J = RegExp(I),
        G = RegExp("^" + W + "$"),
        Q = { ID: RegExp("^#(" + R + ")"), CLASS: RegExp("^\\.(" + R + ")"), TAG: RegExp("^(" + R.replace("w", "w*") + ")"), ATTR: RegExp("^" + $), PSEUDO: RegExp("^" + I), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"), bool: RegExp("^(?:" + B + ")$", "i"), needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i") },
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        et = /^(?:input|select|textarea|button)$/i,
        tt = /^h\d$/i,
        nt = /'|\\/g,
        rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
        it = function it(e, t, n) {
      var r = "0x" + t - 65536;return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r);
    };try {
      M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType;
    } catch (ot) {
      M = { apply: H.length ? function (e, t) {
          _.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;while (e[n++] = t[r++]) {}e.length = n - 1;
        } };
    }function at(e, t, n, i) {
      var o, a, s, l, u, c, d, m, y, x;if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) return n;if (1 !== (l = t.nodeType) && 9 !== l) return [];if (h && !i) {
        if (o = Z.exec(e)) if (s = o[1]) {
          if (9 === l) {
            if (a = t.getElementById(s), !a || !a.parentNode) return n;if (a.id === s) return n.push(a), n;
          } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) return n.push(a), n;
        } else {
          if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n;if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n;
        }if (r.qsa && (!g || !g.test(e))) {
          if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
            c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;while (u--) {
              c[u] = m + yt(c[u]);
            }y = V.test(e) && t.parentNode || t, x = c.join(",");
          }if (x) try {
            return M.apply(n, y.querySelectorAll(x)), n;
          } catch (T) {} finally {
            d || t.removeAttribute("id");
          }
        }
      }return kt(e.replace(z, "$1"), t, n, i);
    }function st() {
      var e = [];function t(n, r) {
        return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r;
      }return t;
    }function lt(e) {
      return e[b] = !0, e;
    }function ut(e) {
      var t = f.createElement("div");try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }function ct(e, t) {
      var n = e.split("|"),
          r = e.length;while (r--) {
        o.attrHandle[n[r]] = t;
      }
    }function pt(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);if (r) return r;if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }return e ? 1 : -1;
    }function ft(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return "input" === n && t.type === e;
      };
    }function dt(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
      };
    }function ht(e) {
      return lt(function (t) {
        return t = +t, lt(function (n, r) {
          var i,
              o = e([], n.length, t),
              a = o.length;while (a--) {
            n[i = o[a]] && (n[i] = !(r[i] = n[i]));
          }
        });
      });
    }s = at.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return t ? "HTML" !== t.nodeName : !1;
    }, r = at.support = {}, p = at.setDocument = function (e) {
      var n = e ? e.ownerDocument || e : w,
          i = n.defaultView;return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function () {
        p();
      }), r.attributes = ut(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), r.getElementsByTagName = ut(function (e) {
        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length;
      }), r.getElementsByClassName = ut(function (e) {
        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length;
      }), r.getById = ut(function (e) {
        return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length;
      }), r.getById ? (o.find.ID = function (e, t) {
        if (_typeof(t.getElementById) !== j && h) {
          var n = t.getElementById(e);return n && n.parentNode ? [n] : [];
        }
      }, o.filter.ID = function (e) {
        var t = e.replace(rt, it);return function (e) {
          return e.getAttribute("id") === t;
        };
      }) : (delete o.find.ID, o.filter.ID = function (e) {
        var t = e.replace(rt, it);return function (e) {
          var n = _typeof(e.getAttributeNode) !== j && e.getAttributeNode("id");return n && n.value === t;
        };
      }), o.find.TAG = r.getElementsByTagName ? function (e, n) {
        return _typeof(n.getElementsByTagName) !== j ? n.getElementsByTagName(e) : t;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }return r;
        }return o;
      }, o.find.CLASS = r.getElementsByClassName && function (e, n) {
        return _typeof(n.getElementsByClassName) !== j && h ? n.getElementsByClassName(e) : t;
      }, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function (e) {
        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked");
      }), ut(function (e) {
        var t = n.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:");
      })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function (e) {
        r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I);
      }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }return !1;
      }, A = d.compareDocumentPosition ? function (e, t) {
        if (e === t) return S = !0, 0;var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
      } : function (e, t) {
        var r,
            i = 0,
            o = e.parentNode,
            a = t.parentNode,
            s = [e],
            l = [t];if (e === t) return S = !0, 0;if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;if (o === a) return pt(e, t);r = e;while (r = r.parentNode) {
          s.unshift(r);
        }r = t;while (r = r.parentNode) {
          l.unshift(r);
        }while (s[i] === l[i]) {
          i++;
        }return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0;
      }, n) : f;
    }, at.matches = function (e, t) {
      return at(e, null, null, t);
    }, at.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try {
        var n = y.call(e, t);if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (i) {}return at(t, f, null, [e]).length > 0;
    }, at.contains = function (e, t) {
      return (e.ownerDocument || e) !== f && p(e), v(e, t);
    }, at.attr = function (e, n) {
      (e.ownerDocument || e) !== f && p(e);var i = o.attrHandle[n.toLowerCase()],
          a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a;
    }, at.error = function (e) {
      throw Error("Syntax error, unrecognized expression: " + e);
    }, at.uniqueSort = function (e) {
      var t,
          n = [],
          i = 0,
          o = 0;if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
        while (t = e[o++]) {
          t === e[o] && (i = n.push(o));
        }while (i--) {
          e.splice(n[i], 1);
        }
      }return e;
    }, a = at.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
            n += a(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else for (; t = e[r]; r++) {
        n += a(t);
      }return n;
    }, o = at.selectors = { cacheLength: 50, createPseudo: lt, match: Q, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
          return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e;
        }, PSEUDO: function PSEUDO(e) {
          var n,
              r = !e[5] && e[2];return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3));
        } }, filter: { TAG: function TAG(e) {
          var t = e.replace(rt, it).toLowerCase();return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function CLASS(e) {
          var t = N[e + " "];return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function (e) {
            return t.test("string" == typeof e.className && e.className || _typeof(e.getAttribute) !== j && e.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(e, t, n) {
          return function (r) {
            var i = at.attr(r, e);return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0;
          };
        }, CHILD: function CHILD(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, l) {
            var u,
                c,
                p,
                f,
                d,
                h,
                g = o !== a ? "nextSibling" : "previousSibling",
                m = t.parentNode,
                y = s && t.nodeName.toLowerCase(),
                v = !l && !s;if (m) {
              if (o) {
                while (g) {
                  p = t;while (p = p[g]) {
                    if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                  }h = g = "only" === e && !h && "nextSibling";
                }return !0;
              }if (h = [a ? m.firstChild : m.lastChild], a && v) {
                c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                  if (1 === p.nodeType && ++f && p === t) {
                    c[e] = [T, d, f];break;
                  }
                }
              } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1];else while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) break;
              }return f -= i, f === r || 0 === f % r && f / r >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(e, t) {
          var n,
              r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function (e, n) {
            var i,
                o = r(e, t),
                a = o.length;while (a--) {
              i = F.call(e, o[a]), e[i] = !(n[i] = o[a]);
            }
          }) : function (e) {
            return r(e, 0, n);
          }) : r;
        } }, pseudos: { not: lt(function (e) {
          var t = [],
              n = [],
              r = l(e.replace(z, "$1"));return r[b] ? lt(function (e, t, n, i) {
            var o,
                a = r(e, null, i, []),
                s = e.length;while (s--) {
              (o = a[s]) && (e[s] = !(t[s] = o));
            }
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), !n.pop();
          };
        }), has: lt(function (e) {
          return function (t) {
            return at(e, t).length > 0;
          };
        }), contains: lt(function (e) {
          return function (t) {
            return (t.textContent || t.innerText || a(t)).indexOf(e) > -1;
          };
        }), lang: lt(function (e) {
          return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(), function (t) {
            var n;do {
              if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function target(t) {
          var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
        }, root: function root(e) {
          return e === d;
        }, focus: function focus(e) {
          return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, enabled: function enabled(e) {
          return e.disabled === !1;
        }, disabled: function disabled(e) {
          return e.disabled === !0;
        }, checked: function checked(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
        }, selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
        }, empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
          }return !0;
        }, parent: function parent(e) {
          return !o.pseudos.empty(e);
        }, header: function header(e) {
          return tt.test(e.nodeName);
        }, input: function input(e) {
          return et.test(e.nodeName);
        }, button: function button(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
        }, text: function text(e) {
          var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type);
        }, first: ht(function () {
          return [0];
        }), last: ht(function (e, t) {
          return [t - 1];
        }), eq: ht(function (e, t, n) {
          return [0 > n ? n + t : n];
        }), even: ht(function (e, t) {
          var n = 0;for (; t > n; n += 2) {
            e.push(n);
          }return e;
        }), odd: ht(function (e, t) {
          var n = 1;for (; t > n; n += 2) {
            e.push(n);
          }return e;
        }), lt: ht(function (e, t, n) {
          var r = 0 > n ? n + t : n;for (; --r >= 0;) {
            e.push(r);
          }return e;
        }), gt: ht(function (e, t, n) {
          var r = 0 > n ? n + t : n;for (; t > ++r;) {
            e.push(r);
          }return e;
        }) } }, o.pseudos.nth = o.pseudos.eq;for (n in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      o.pseudos[n] = ft(n);
    }for (n in { submit: !0, reset: !0 }) {
      o.pseudos[n] = dt(n);
    }function gt() {}gt.prototype = o.filters = o.pseudos, o.setFilters = new gt();function mt(e, t) {
      var n,
          r,
          i,
          a,
          s,
          l,
          u,
          c = k[e + " "];if (c) return t ? 0 : c.slice(0);s = e, l = [], u = o.preFilter;while (s) {
        (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(z, " ") }), s = s.slice(n.length));for (a in o.filter) {
          !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({ value: n, type: a, matches: r }), s = s.slice(n.length));
        }if (!n) break;
      }return t ? s.length : s ? at.error(e) : k(e, l).slice(0);
    }function yt(e) {
      var t = 0,
          n = e.length,
          r = "";for (; n > t; t++) {
        r += e[t].value;
      }return r;
    }function vt(e, t, n) {
      var r = t.dir,
          o = n && "parentNode" === r,
          a = C++;return t.first ? function (t, n, i) {
        while (t = t[r]) {
          if (1 === t.nodeType || o) return e(t, n, i);
        }
      } : function (t, n, s) {
        var l,
            u,
            c,
            p = T + " " + a;if (s) {
          while (t = t[r]) {
            if ((1 === t.nodeType || o) && e(t, n, s)) return !0;
          }
        } else while (t = t[r]) {
          if (1 === t.nodeType || o) if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
            if ((l = u[1]) === !0 || l === i) return l === !0;
          } else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) return !0;
        }
      };
    }function bt(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;while (i--) {
          if (!e[i](t, n, r)) return !1;
        }return !0;
      } : e[0];
    }function xt(e, t, n, r, i) {
      var o,
          a = [],
          s = 0,
          l = e.length,
          u = null != t;for (; l > s; s++) {
        (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
      }return a;
    }function wt(e, t, n, r, i, o) {
      return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function (o, a, s, l) {
        var u,
            c,
            p,
            f = [],
            d = [],
            h = a.length,
            g = o || Nt(t || "*", s.nodeType ? [s] : s, []),
            m = !e || !o && t ? g : xt(g, f, e, s, l),
            y = n ? i || (o ? e : h || r) ? [] : a : m;if (n && n(m, y, s, l), r) {
          u = xt(y, d), r(u, [], s, l), c = u.length;while (c--) {
            (p = u[c]) && (y[d[c]] = !(m[d[c]] = p));
          }
        }if (o) {
          if (i || e) {
            if (i) {
              u = [], c = y.length;while (c--) {
                (p = y[c]) && u.push(m[c] = p);
              }i(null, y = [], u, l);
            }c = y.length;while (c--) {
              (p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p));
            }
          }
        } else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y);
      });
    }function Tt(e) {
      var t,
          n,
          r,
          i = e.length,
          a = o.relative[e[0].type],
          s = a || o.relative[" "],
          l = a ? 1 : 0,
          c = vt(function (e) {
        return e === t;
      }, s, !0),
          p = vt(function (e) {
        return F.call(t, e) > -1;
      }, s, !0),
          f = [function (e, n, r) {
        return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r));
      }];for (; i > l; l++) {
        if (n = o.relative[e[l].type]) f = [vt(bt(f), n)];else {
          if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
            for (r = ++l; i > r; r++) {
              if (o.relative[e[r].type]) break;
            }return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e));
          }f.push(n);
        }
      }return bt(f);
    }function Ct(e, t) {
      var n = 0,
          r = t.length > 0,
          a = e.length > 0,
          s = function s(_s, l, c, p, d) {
        var h,
            g,
            m,
            y = [],
            v = 0,
            b = "0",
            x = _s && [],
            w = null != d,
            C = u,
            N = _s || a && o.find.TAG("*", d && l.parentNode || l),
            k = T += null == C ? 1 : Math.random() || .1;for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
          if (a && h) {
            g = 0;while (m = e[g++]) {
              if (m(h, l, c)) {
                p.push(h);break;
              }
            }w && (T = k, i = ++n);
          }r && ((h = !m && h) && v--, _s && x.push(h));
        }if (v += b, r && b !== v) {
          g = 0;while (m = t[g++]) {
            m(x, y, l, c);
          }if (_s) {
            if (v > 0) while (b--) {
              x[b] || y[b] || (y[b] = q.call(p));
            }y = xt(y);
          }M.apply(p, y), w && !_s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p);
        }return w && (T = k, u = C), x;
      };return r ? lt(s) : s;
    }l = at.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          o = E[e + " "];if (!o) {
        t || (t = mt(e)), n = t.length;while (n--) {
          o = Tt(t[n]), o[b] ? r.push(o) : i.push(o);
        }o = E(e, Ct(i, r));
      }return o;
    };function Nt(e, t, n) {
      var r = 0,
          i = t.length;for (; i > r; r++) {
        at(e, t[r], n);
      }return n;
    }function kt(e, t, n, i) {
      var a,
          s,
          u,
          c,
          p,
          f = mt(e);if (!i && 1 === f.length) {
        if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
          if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) return n;e = e.slice(s.shift().value.length);
        }a = Q.needsContext.test(e) ? 0 : s.length;while (a--) {
          if (u = s[a], o.relative[c = u.type]) break;if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
            if (s.splice(a, 1), e = i.length && yt(s), !e) return M.apply(n, i), n;break;
          }
        }
      }return l(e, f)(i, t, !h, n, V.test(e)), n;
    }r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function (e) {
      return 1 & e.compareDocumentPosition(f.createElement("div"));
    }), ut(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || ct("type|href|height|width", function (e, n, r) {
      return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2);
    }), r.attributes && ut(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || ct("value", function (e, n, r) {
      return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue;
    }), ut(function (e) {
      return null == e.getAttribute("disabled");
    }) || ct(B, function (e, n, r) {
      var i;return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null;
    }), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains;
  }(e);var O = {};function F(e) {
    var t = O[e] = {};return x.each(e.match(T) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }x.Callbacks = function (e) {
    e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);var n,
        r,
        i,
        o,
        a,
        s,
        l = [],
        u = !e.once && [],
        c = function c(t) {
      for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++) {
        if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
          r = !1;break;
        }
      }n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable());
    },
        p = { add: function add() {
        if (l) {
          var t = l.length;(function i(t) {
            x.each(t, function (t, n) {
              var r = x.type(n);"function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n);
            });
          })(arguments), n ? o = l.length : r && (s = t, c(r));
        }return this;
      }, remove: function remove() {
        return l && x.each(arguments, function (e, t) {
          var r;while ((r = x.inArray(t, l, r)) > -1) {
            l.splice(r, 1), n && (o >= r && o--, a >= r && a--);
          }
        }), this;
      }, has: function has(e) {
        return e ? x.inArray(e, l) > -1 : !(!l || !l.length);
      }, empty: function empty() {
        return l = [], o = 0, this;
      }, disable: function disable() {
        return l = u = r = t, this;
      }, disabled: function disabled() {
        return !l;
      }, lock: function lock() {
        return u = t, r || p.disable(), this;
      }, locked: function locked() {
        return !u;
      }, fireWith: function fireWith(e, t) {
        return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this;
      }, fire: function fire() {
        return p.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!i;
      } };return p;
  }, x.extend({ Deferred: function Deferred(e) {
      var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]],
          n = "pending",
          r = { state: function state() {
          return n;
        }, always: function always() {
          return i.done(arguments).fail(arguments), this;
        }, then: function then() {
          var e = arguments;return x.Deferred(function (n) {
            x.each(t, function (t, o) {
              var a = o[0],
                  s = x.isFunction(e[t]) && e[t];i[o[1]](function () {
                var e = s && s.apply(this, arguments);e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        }, promise: function promise(e) {
          return null != e ? x.extend(e, r) : r;
        } },
          i = {};return r.pipe = r.then, x.each(t, function (e, o) {
        var a = o[2],
            s = o[3];r[o[1]] = a.add, s && a.add(function () {
          n = s;
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
          return i[o[0] + "With"](this === i ? r : this, arguments), this;
        }, i[o[0] + "With"] = a.fireWith;
      }), r.promise(i), e && e.call(i, i), i;
    }, when: function when(e) {
      var t = 0,
          n = g.call(arguments),
          r = n.length,
          i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
          o = 1 === i ? e : x.Deferred(),
          a = function a(e, t, n) {
        return function (r) {
          t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n);
        };
      },
          s,
          l,
          u;if (r > 1) for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) {
        n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
      }return i || o.resolveWith(u, n), o.promise();
    } }), x.support = function (t) {
    var n,
        r,
        o,
        s,
        l,
        u,
        c,
        p,
        f,
        d = a.createElement("div");if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;try {
      delete d.test;
    } catch (h) {
      t.deleteExpando = !1;
    }o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
      t.noCloneEvent = !1;
    }), d.cloneNode(!0).click());for (f in { submit: !0, change: !0, focusin: !0 }) {
      d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
    }d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;for (f in x(t)) {
      break;
    }return t.ownLast = "0" !== f, x(function () {
      var n,
          r,
          o,
          s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
          l = a.getElementsByTagName("body")[0];l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? { zoom: 1 } : {}, function () {
        t.boxSizing = 4 === d.offsetWidth;
      }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || { width: "4px" }).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), _typeof(d.style.zoom) !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null);
    }), n = s = l = u = r = o = null, t;
  }({});var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
      P = /([A-Z])/g;function R(e, n, r, i) {
    if (x.acceptData(e)) {
      var o,
          a,
          s = x.expando,
          l = e.nodeType,
          u = l ? x.cache : e,
          c = l ? e[s] : e[s] && s;if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : { toJSON: x.noop }), ("object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o;
    }
  }function W(e, t, n) {
    if (x.acceptData(e)) {
      var r,
          i,
          o = e.nodeType,
          a = o ? x.cache : e,
          s = o ? e[x.expando] : x.expando;if (a[s]) {
        if (t && (r = n ? a[s] : a[s].data)) {
          x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;while (i--) {
            delete r[t[i]];
          }if (n ? !I(r) : !x.isEmptyObject(r)) return;
        }(n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null);
      }
    }
  }x.extend({ cache: {}, noData: { applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function hasData(e) {
      return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e);
    }, data: function data(e, t, n) {
      return R(e, t, n);
    }, removeData: function removeData(e, t) {
      return W(e, t);
    }, _data: function _data(e, t, n) {
      return R(e, t, n, !0);
    }, _removeData: function _removeData(e, t) {
      return W(e, t, !0);
    }, acceptData: function acceptData(e) {
      if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];return !t || t !== !0 && e.getAttribute("classid") === t;
    } }), x.fn.extend({ data: function data(e, n) {
      var r,
          i,
          o = null,
          a = 0,
          s = this[0];if (e === t) {
        if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
          for (r = s.attributes; r.length > a; a++) {
            i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
          }x._data(s, "parsedAttrs", !0);
        }return o;
      }return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? this.each(function () {
        x.data(this, e);
      }) : arguments.length > 1 ? this.each(function () {
        x.data(this, e, n);
      }) : s ? $(s, e, x.data(s, e)) : null;
    }, removeData: function removeData(e) {
      return this.each(function () {
        x.removeData(this, e);
      });
    } });function $(e, n, r) {
    if (r === t && 1 === e.nodeType) {
      var i = "data-" + n.replace(P, "-$1").toLowerCase();if (r = e.getAttribute(i), "string" == typeof r) {
        try {
          r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r;
        } catch (o) {}x.data(e, n, r);
      } else r = t;
    }return r;
  }function I(e) {
    var t;for (t in e) {
      if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    }return !0;
  }x.extend({ queue: function queue(e, n, r) {
      var i;return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t;
    }, dequeue: function dequeue(e, t) {
      t = t || "fx";var n = x.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = x._queueHooks(e, t),
          a = function a() {
        x.dequeue(e, t);
      };"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    }, _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";return x._data(e, n) || x._data(e, n, { empty: x.Callbacks("once memory").add(function () {
          x._removeData(e, t + "queue"), x._removeData(e, n);
        }) });
    } }), x.fn.extend({ queue: function queue(e, n) {
      var r = 2;return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function () {
        var t = x.queue(this, e, n);x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e);
      });
    }, dequeue: function dequeue(e) {
      return this.each(function () {
        x.dequeue(this, e);
      });
    }, delay: function delay(e, t) {
      return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
        var r = setTimeout(t, e);n.stop = function () {
          clearTimeout(r);
        };
      });
    }, clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    }, promise: function promise(e, n) {
      var r,
          i = 1,
          o = x.Deferred(),
          a = this,
          s = this.length,
          l = function l() {
        --i || o.resolveWith(a, [a]);
      };"string" != typeof e && (n = e, e = t), e = e || "fx";while (s--) {
        r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
      }return l(), o.promise(n);
    } });var z,
      X,
      U = /[\t\r\n\f]/g,
      V = /\r/g,
      Y = /^(?:input|select|textarea|button|object)$/i,
      J = /^(?:a|area)$/i,
      G = /^(?:checked|selected)$/i,
      Q = x.support.getSetAttribute,
      K = x.support.input;x.fn.extend({ attr: function attr(e, t) {
      return x.access(this, x.attr, e, t, arguments.length > 1);
    }, removeAttr: function removeAttr(e) {
      return this.each(function () {
        x.removeAttr(this, e);
      });
    }, prop: function prop(e, t) {
      return x.access(this, x.prop, e, t, arguments.length > 1);
    }, removeProp: function removeProp(e) {
      return e = x.propFix[e] || e, this.each(function () {
        try {
          this[e] = t, delete this[e];
        } catch (n) {}
      });
    }, addClass: function addClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a = 0,
          s = this.length,
          l = "string" == typeof e && e;if (x.isFunction(e)) return this.each(function (t) {
        x(this).addClass(e.call(this, t, this.className));
      });if (l) for (t = (e || "").match(T) || []; s > a; a++) {
        if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
          o = 0;while (i = t[o++]) {
            0 > r.indexOf(" " + i + " ") && (r += i + " ");
          }n.className = x.trim(r);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a = 0,
          s = this.length,
          l = 0 === arguments.length || "string" == typeof e && e;if (x.isFunction(e)) return this.each(function (t) {
        x(this).removeClass(e.call(this, t, this.className));
      });if (l) for (t = (e || "").match(T) || []; s > a; a++) {
        if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
          o = 0;while (i = t[o++]) {
            while (r.indexOf(" " + i + " ") >= 0) {
              r = r.replace(" " + i + " ", " ");
            }
          }n.className = e ? x.trim(r) : "";
        }
      }return this;
    }, toggleClass: function toggleClass(e, t) {
      var n = typeof e === "undefined" ? "undefined" : _typeof(e);return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function (n) {
        x(this).toggleClass(e.call(this, n, this.className, t), t);
      }) : this.each(function () {
        if ("string" === n) {
          var t,
              r = 0,
              o = x(this),
              a = e.match(T) || [];while (t = a[r++]) {
            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
          }
        } else (n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "");
      });
    }, hasClass: function hasClass(e) {
      var t = " " + e + " ",
          n = 0,
          r = this.length;for (; r > n; n++) {
        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) return !0;
      }return !1;
    }, val: function val(e) {
      var n,
          r,
          i,
          o = this[0];{
        if (arguments.length) return i = x.isFunction(e), this.each(function (n) {
          var o;1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function (e) {
            return null == e ? "" : e + "";
          })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o));
        });if (o) return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n);
      }
    } }), x.extend({ valHooks: { option: { get: function get(e) {
          var t = x.find.attr(e, "value");return null != t ? t : e.text;
        } }, select: { get: function get(e) {
          var t,
              n,
              r = e.options,
              i = e.selectedIndex,
              o = "select-one" === e.type || 0 > i,
              a = o ? null : [],
              s = o ? i + 1 : r.length,
              l = 0 > i ? s : o ? i : 0;for (; s > l; l++) {
            if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
              if (t = x(n).val(), o) return t;a.push(t);
            }
          }return a;
        }, set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = x.makeArray(t),
              a = i.length;while (a--) {
            r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
          }return n || (e.selectedIndex = -1), o;
        } } }, attr: function attr(e, n, r) {
      var o,
          a,
          s = e.nodeType;if (e && 3 !== s && 8 !== s && 2 !== s) return _typeof(e.getAttribute) === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t));
    }, removeAttr: function removeAttr(e, t) {
      var n,
          r,
          i = 0,
          o = t && t.match(T);if (o && 1 === e.nodeType) while (n = o[i++]) {
        r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r);
      }
    }, attrHooks: { type: { set: function set(e, t) {
          if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
          }
        } } }, propFix: { "for": "htmlFor", "class": "className" }, prop: function prop(e, n, r) {
      var i,
          o,
          a,
          s = e.nodeType;if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n];
    }, propHooks: { tabIndex: { get: function get(e) {
          var t = x.find.attr(e, "tabindex");return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1;
        } } } }), X = { set: function set(e, t, n) {
      return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n;
    } }, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, n) {
    var r = x.expr.attrHandle[n] || x.find.attr;x.expr.attrHandle[n] = K && Q || !G.test(n) ? function (e, n, i) {
      var o = x.expr.attrHandle[n],
          a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;return x.expr.attrHandle[n] = o, a;
    } : function (e, n, r) {
      return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null;
    };
  }), K && Q || (x.attrHooks.value = { set: function set(e, n, r) {
      return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r);
    } }), Q || (z = { set: function set(e, n, r) {
      var i = e.getAttributeNode(r);return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t;
    } }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function (e, n, r) {
    var i;return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null;
  }, x.valHooks.button = { get: function get(e, n) {
      var r = e.getAttributeNode(n);return r && r.specified ? r.value : t;
    }, set: z.set }, x.attrHooks.contenteditable = { set: function set(e, t, n) {
      z.set(e, "" === t ? !1 : t, n);
    } }, x.each(["width", "height"], function (e, n) {
    x.attrHooks[n] = { set: function set(e, r) {
        return "" === r ? (e.setAttribute(n, "auto"), r) : t;
      } };
  })), x.support.hrefNormalized || x.each(["href", "src"], function (e, t) {
    x.propHooks[t] = { get: function get(e) {
        return e.getAttribute(t, 4);
      } };
  }), x.support.style || (x.attrHooks.style = { get: function get(e) {
      return e.style.cssText || t;
    }, set: function set(e, t) {
      return e.style.cssText = t + "";
    } }), x.support.optSelected || (x.propHooks.selected = { get: function get(e) {
      var t = e.parentNode;return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
    } }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    x.propFix[this.toLowerCase()] = this;
  }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function () {
    x.valHooks[this] = { set: function set(e, n) {
        return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t;
      } }, x.support.checkOn || (x.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  });var Z = /^(?:input|select|textarea)$/i,
      et = /^key/,
      tt = /^(?:mouse|contextmenu)|click/,
      nt = /^(?:focusinfocus|focusoutblur)$/,
      rt = /^([^.]*)(?:\.(.+)|)$/;function it() {
    return !0;
  }function ot() {
    return !1;
  }function at() {
    try {
      return a.activeElement;
    } catch (e) {}
  }x.event = { global: {}, add: function add(e, n, r, o, a) {
      var s,
          l,
          u,
          c,
          p,
          f,
          d,
          h,
          g,
          m,
          y,
          v = x._data(e);if (v) {
        r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function (e) {
          return (typeof x === "undefined" ? "undefined" : _typeof(x)) === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments);
        }, f.elem = e), n = (n || "").match(T) || [""], u = n.length;while (u--) {
          s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({ type: g, origType: y, data: o, handler: r, guid: r.guid, selector: a, needsContext: a && x.expr.match.needsContext.test(a), namespace: m.join(".") }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
        }e = null;
      }
    }, remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          l,
          u,
          c,
          p,
          f,
          d,
          h,
          g,
          m = x.hasData(e) && x._data(e);if (m && (c = m.events)) {
        t = (t || "").match(T) || [""], u = t.length;while (u--) {
          if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
            p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;while (o--) {
              a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
            }l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d]);
          } else for (d in c) {
            x.event.remove(e, d + t[u], n, r, !0);
          }
        }x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"));
      }
    }, trigger: function trigger(n, r, i, o) {
      var s,
          l,
          u,
          c,
          p,
          f,
          d,
          h = [i || a],
          g = v.call(n, "type") ? n.type : n,
          m = v.call(n, "namespace") ? n.namespace.split(".") : [];if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
        if (!o && !p.noBubble && !x.isWindow(i)) {
          for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) {
            h.push(u), f = u;
          }f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e);
        }d = 0;while ((u = h[d++]) && !n.isPropagationStopped()) {
          n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
        }if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
          f = i[l], f && (i[l] = null), x.event.triggered = g;try {
            i[g]();
          } catch (y) {}x.event.triggered = t, f && (i[l] = f);
        }return n.result;
      }
    }, dispatch: function dispatch(e) {
      e = x.event.fix(e);var n,
          r,
          i,
          o,
          a,
          s = [],
          l = g.call(arguments),
          u = (x._data(this, "events") || {})[e.type] || [],
          c = x.event.special[e.type] || {};if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
        s = x.event.handlers.call(this, e, u), n = 0;while ((o = s[n++]) && !e.isPropagationStopped()) {
          e.currentTarget = o.elem, a = 0;while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) {
            (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
          }
        }return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    }, handlers: function handlers(e, n) {
      var r,
          i,
          o,
          a,
          s = [],
          l = n.delegateCount,
          u = e.target;if (l && u.nodeType && (!e.button || "click" !== e.type)) for (; u != this; u = u.parentNode || this) {
        if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
          for (o = [], a = 0; l > a; a++) {
            i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
          }o.length && s.push({ elem: u, handlers: o });
        }
      }return n.length > l && s.push({ elem: this, handlers: n.slice(l) }), s;
    }, fix: function fix(e) {
      if (e[x.expando]) return e;var t,
          n,
          r,
          i = e.type,
          o = e,
          s = this.fixHooks[i];s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;while (t--) {
        n = r[t], e[n] = o[n];
      }return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e;
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
      } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(e, n) {
        var r,
            i,
            o,
            s = n.button,
            l = n.fromElement;return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e;
      } }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== at() && this.focus) try {
            return this.focus(), !1;
          } catch (e) {}
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          return this === at() && this.blur ? (this.blur(), !1) : t;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t;
        }, _default: function _default(e) {
          return x.nodeName(e.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(e) {
          e.result !== t && (e.originalEvent.returnValue = e.result);
        } } }, simulate: function simulate(e, t, n, r) {
      var i = x.extend(new x.Event(), n, { type: e, isSimulated: !0, originalEvent: {} });r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
    } }, x.removeEvent = a.removeEventListener ? function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1);
  } : function (e, t, n) {
    var r = "on" + t;e.detachEvent && (_typeof(e[r]) === i && (e[r] = null), e.detachEvent(r, n));
  }, x.Event = function (e, n) {
    return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n);
  }, x.Event.prototype = { isDefaultPrevented: ot, isPropagationStopped: ot, isImmediatePropagationStopped: ot, preventDefault: function preventDefault() {
      var e = this.originalEvent;this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
    }, stopPropagation: function stopPropagation() {
      var e = this.originalEvent;this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      this.isImmediatePropagationStopped = it, this.stopPropagation();
    } }, x.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (e, t) {
    x.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
        var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      } };
  }), x.support.submitBubbles || (x.event.special.submit = { setup: function setup() {
      return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function (e) {
        var n = e.target,
            r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function (e) {
          e._submit_bubble = !0;
        }), x._data(r, "submitBubbles", !0));
      }), t);
    }, postDispatch: function postDispatch(e) {
      e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0));
    }, teardown: function teardown() {
      return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t);
    } }), x.support.changeBubbles || (x.event.special.change = { setup: function setup() {
      return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function (e) {
        "checked" === e.originalEvent.propertyName && (this._just_changed = !0);
      }), x.event.add(this, "click._change", function (e) {
        this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0);
      })), !1) : (x.event.add(this, "beforeactivate._change", function (e) {
        var t = e.target;Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function (e) {
          !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0);
        }), x._data(t, "changeBubbles", !0));
      }), t);
    }, handle: function handle(e) {
      var n = e.target;return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t;
    }, teardown: function teardown() {
      return x.event.remove(this, "._change"), !Z.test(this.nodeName);
    } }), x.support.focusinBubbles || x.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = 0,
        r = function r(e) {
      x.event.simulate(t, e.target, x.event.fix(e), !0);
    };x.event.special[t] = { setup: function setup() {
        0 === n++ && a.addEventListener(e, r, !0);
      }, teardown: function teardown() {
        0 === --n && a.removeEventListener(e, r, !0);
      } };
  }), x.fn.extend({ on: function on(e, n, r, i, o) {
      var a, s;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
        "string" != typeof n && (r = r || n, n = t);for (a in e) {
          this.on(a, n, r, e[a], o);
        }return this;
      }if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;else if (!i) return this;return 1 === o && (s = i, i = function i(e) {
        return x().off(e), s.apply(this, arguments);
      }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function () {
        x.event.add(this, e, i, r, n);
      });
    }, one: function one(e, t, n, r) {
      return this.on(e, t, n, r, 1);
    }, off: function off(e, n, r) {
      var i, o;if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
        for (o in e) {
          this.off(o, n, e[o]);
        }return this;
      }return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () {
        x.event.remove(this, e, r, n);
      });
    }, trigger: function trigger(e, t) {
      return this.each(function () {
        x.event.trigger(e, t, this);
      });
    }, triggerHandler: function triggerHandler(e, n) {
      var r = this[0];return r ? x.event.trigger(e, n, r, !0) : t;
    } });var st = /^.[^:#\[\.,]*$/,
      lt = /^(?:parents|prev(?:Until|All))/,
      ut = x.expr.match.needsContext,
      ct = { children: !0, contents: !0, next: !0, prev: !0 };x.fn.extend({ find: function find(e) {
      var t,
          n = [],
          r = this,
          i = r.length;if ("string" != typeof e) return this.pushStack(x(e).filter(function () {
        for (t = 0; i > t; t++) {
          if (x.contains(r[t], this)) return !0;
        }
      }));for (t = 0; i > t; t++) {
        x.find(e, r[t], n);
      }return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n;
    }, has: function has(e) {
      var t,
          n = x(e, this),
          r = n.length;return this.filter(function () {
        for (t = 0; r > t; t++) {
          if (x.contains(this, n[t])) return !0;
        }
      });
    }, not: function not(e) {
      return this.pushStack(ft(this, e || [], !0));
    }, filter: function filter(e) {
      return this.pushStack(ft(this, e || [], !1));
    }, is: function is(e) {
      return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length;
    }, closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;for (; i > r; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
            n = o.push(n);break;
          }
        }
      }return this.pushStack(o.length > 1 ? x.unique(o) : o);
    }, index: function index(e) {
      return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(e, t) {
      var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
          r = x.merge(this.get(), n);return this.pushStack(x.unique(r));
    }, addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } });function pt(e, t) {
    do {
      e = e[t];
    } while (e && 1 !== e.nodeType);return e;
  }x.each({ parent: function parent(e) {
      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function parents(e) {
      return x.dir(e, "parentNode");
    }, parentsUntil: function parentsUntil(e, t, n) {
      return x.dir(e, "parentNode", n);
    }, next: function next(e) {
      return pt(e, "nextSibling");
    }, prev: function prev(e) {
      return pt(e, "previousSibling");
    }, nextAll: function nextAll(e) {
      return x.dir(e, "nextSibling");
    }, prevAll: function prevAll(e) {
      return x.dir(e, "previousSibling");
    }, nextUntil: function nextUntil(e, t, n) {
      return x.dir(e, "nextSibling", n);
    }, prevUntil: function prevUntil(e, t, n) {
      return x.dir(e, "previousSibling", n);
    }, siblings: function siblings(e) {
      return x.sibling((e.parentNode || {}).firstChild, e);
    }, children: function children(e) {
      return x.sibling(e.firstChild);
    }, contents: function contents(e) {
      return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes);
    } }, function (e, t) {
    x.fn[e] = function (n, r) {
      var i = x.map(this, t, n);return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i);
    };
  }), x.extend({ filter: function filter(e, t, n) {
      var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    }, dir: function dir(e, n, r) {
      var i = [],
          o = e[n];while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) {
        1 === o.nodeType && i.push(o), o = o[n];
      }return i;
    }, sibling: function sibling(e, t) {
      var n = [];for (; e; e = e.nextSibling) {
        1 === e.nodeType && e !== t && n.push(e);
      }return n;
    } });function ft(e, t, n) {
    if (x.isFunction(t)) return x.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    });if (t.nodeType) return x.grep(e, function (e) {
      return e === t !== n;
    });if ("string" == typeof t) {
      if (st.test(t)) return x.filter(t, e, n);t = x.filter(t, e);
    }return x.grep(e, function (e) {
      return x.inArray(e, t) >= 0 !== n;
    });
  }function dt(e) {
    var t = ht.split("|"),
        n = e.createDocumentFragment();if (n.createElement) while (t.length) {
      n.createElement(t.pop());
    }return n;
  }var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      gt = / jQuery\d+="(?:null|\d+)"/g,
      mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
      yt = /^\s+/,
      vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      bt = /<([\w:]+)/,
      xt = /<tbody/i,
      wt = /<|&#?\w+;/,
      Tt = /<(?:script|style|link)/i,
      Ct = /^(?:checkbox|radio)$/i,
      Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      kt = /^$|\/(?:java|ecma)script/i,
      Et = /^true\/(.*)/,
      St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      At = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
      jt = dt(a),
      Dt = jt.appendChild(a.createElement("div"));At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({ text: function text(e) {
      return x.access(this, function (e) {
        return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e));
      }, null, e, arguments.length);
    }, append: function append() {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Lt(this, e);t.appendChild(e);
        }
      });
    }, prepend: function prepend() {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Lt(this, e);t.insertBefore(e, t.firstChild);
        }
      });
    }, before: function before() {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function after() {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    }, remove: function remove(e, t) {
      var n,
          r = e ? x.filter(e, this) : this,
          i = 0;for (; null != (n = r[i]); i++) {
        t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
      }return this;
    }, empty: function empty() {
      var e,
          t = 0;for (; null != (e = this[t]); t++) {
        1 === e.nodeType && x.cleanData(Ft(e, !1));while (e.firstChild) {
          e.removeChild(e.firstChild);
        }e.options && x.nodeName(e, "select") && (e.options.length = 0);
      }return this;
    }, clone: function clone(e, t) {
      return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
        return x.clone(this, e, t);
      });
    }, html: function html(e) {
      return x.access(this, function (e) {
        var n = this[0] || {},
            r = 0,
            i = this.length;if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
          e = e.replace(vt, "<$1></$2>");try {
            for (; i > r; r++) {
              n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
            }n = 0;
          } catch (o) {}
        }n && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function replaceWith() {
      var e = x.map(this, function (e) {
        return [e.nextSibling, e.parentNode];
      }),
          t = 0;return this.domManip(arguments, function (n) {
        var r = e[t++],
            i = e[t++];i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r));
      }, !0), t ? this : this.remove();
    }, detach: function detach(e) {
      return this.remove(e, !0);
    }, domManip: function domManip(e, t, n) {
      e = d.apply([], e);var r,
          i,
          o,
          a,
          s,
          l,
          u = 0,
          c = this.length,
          p = this,
          f = c - 1,
          h = e[0],
          g = x.isFunction(h);if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) return this.each(function (r) {
        var i = p.eq(r);g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n);
      });if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
        for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) {
          i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
        }if (o) for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) {
          i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
        }l = r = null;
      }return this;
    } });function Lt(e, t) {
    return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
  }function Ht(e) {
    return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e;
  }function qt(e) {
    var t = Et.exec(e.type);return t ? e.type = t[1] : e.removeAttribute("type"), e;
  }function _t(e, t) {
    var n,
        r = 0;for (; null != (n = e[r]); r++) {
      x._data(n, "globalEval", !t || x._data(t[r], "globalEval"));
    }
  }function Mt(e, t) {
    if (1 === t.nodeType && x.hasData(e)) {
      var n,
          r,
          i,
          o = x._data(e),
          a = x._data(t, o),
          s = o.events;if (s) {
        delete a.handle, a.events = {};for (n in s) {
          for (r = 0, i = s[n].length; i > r; r++) {
            x.event.add(t, n, s[n][r]);
          }
        }
      }a.data && (a.data = x.extend({}, a.data));
    }
  }function Ot(e, t) {
    var n, r, i;if (1 === t.nodeType) {
      if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
        i = x._data(t);for (r in i.events) {
          x.removeEvent(t, r, i.handle);
        }t.removeAttribute(x.expando);
      }"script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
    }
  }x.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
    x.fn[e] = function (e) {
      var n,
          r = 0,
          i = [],
          o = x(e),
          a = o.length - 1;for (; a >= r; r++) {
        n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
      }return this.pushStack(i);
    };
  });function Ft(e, n) {
    var r,
        o,
        a = 0,
        s = _typeof(e.getElementsByTagName) !== i ? e.getElementsByTagName(n || "*") : _typeof(e.querySelectorAll) !== i ? e.querySelectorAll(n || "*") : t;if (!s) for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) {
      !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
    }return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s;
  }function Bt(e) {
    Ct.test(e.type) && (e.defaultChecked = e.checked);
  }x.extend({ clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          l = x.contains(e.ownerDocument, e);if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) {
        r[a] && Ot(i, r[a]);
      }if (t) if (n) for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) {
        Mt(i, r[a]);
      } else Mt(e, o);return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o;
    }, buildFragment: function buildFragment(e, t, n, r) {
      var i,
          o,
          a,
          s,
          l,
          u,
          c,
          p = e.length,
          f = dt(t),
          d = [],
          h = 0;for (; p > h; h++) {
        if (o = e[h], o || 0 === o) if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o);else if (wt.test(o)) {
          s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];while (i--) {
            s = s.lastChild;
          }if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
            o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;while (i--) {
              x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u);
            }
          }x.merge(d, s.childNodes), s.textContent = "";while (s.firstChild) {
            s.removeChild(s.firstChild);
          }s = f.lastChild;
        } else d.push(t.createTextNode(o));
      }s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;while (o = d[h++]) {
        if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
          i = 0;while (o = s[i++]) {
            kt.test(o.type || "") && n.push(o);
          }
        }
      }return s = null, f;
    }, cleanData: function cleanData(e, t) {
      var n,
          r,
          o,
          a,
          s = 0,
          l = x.expando,
          u = x.cache,
          c = x.support.deleteExpando,
          f = x.event.special;for (; null != (n = e[s]); s++) {
        if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
          if (a.events) for (r in a.events) {
            f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
          }u[o] && (delete u[o], c ? delete n[l] : _typeof(n.removeAttribute) !== i ? n.removeAttribute(l) : n[l] = null, p.push(o));
        }
      }
    }, _evalUrl: function _evalUrl(e) {
      return x.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
    } }), x.fn.extend({ wrapAll: function wrapAll(e) {
      if (x.isFunction(e)) return this.each(function (t) {
        x(this).wrapAll(e.call(this, t));
      });if (this[0]) {
        var t = x(e, this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          var e = this;while (e.firstChild && 1 === e.firstChild.nodeType) {
            e = e.firstChild;
          }return e;
        }).append(this);
      }return this;
    }, wrapInner: function wrapInner(e) {
      return x.isFunction(e) ? this.each(function (t) {
        x(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = x(this),
            n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
      });
    }, wrap: function wrap(e) {
      var t = x.isFunction(e);return this.each(function (n) {
        x(this).wrapAll(t ? e.call(this, n) : e);
      });
    }, unwrap: function unwrap() {
      return this.parent().each(function () {
        x.nodeName(this, "body") || x(this).replaceWith(this.childNodes);
      }).end();
    } });var Pt,
      Rt,
      Wt,
      $t = /alpha\([^)]*\)/i,
      It = /opacity\s*=\s*([^)]*)/,
      zt = /^(top|right|bottom|left)$/,
      Xt = /^(none|table(?!-c[ea]).+)/,
      Ut = /^margin/,
      Vt = RegExp("^(" + w + ")(.*)$", "i"),
      Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
      Jt = RegExp("^([+-])=(" + w + ")", "i"),
      Gt = { BODY: "block" },
      Qt = { position: "absolute", visibility: "hidden", display: "block" },
      Kt = { letterSpacing: 0, fontWeight: 400 },
      Zt = ["Top", "Right", "Bottom", "Left"],
      en = ["Webkit", "O", "Moz", "ms"];function tn(e, t) {
    if (t in e) return t;var n = t.charAt(0).toUpperCase() + t.slice(1),
        r = t,
        i = en.length;while (i--) {
      if (t = en[i] + n, t in e) return t;
    }return r;
  }function nn(e, t) {
    return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e);
  }function rn(e, t) {
    var n,
        r,
        i,
        o = [],
        a = 0,
        s = e.length;for (; s > a; a++) {
      r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
    }for (a = 0; s > a; a++) {
      r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
    }return e;
  }x.fn.extend({ css: function css(e, n) {
      return x.access(this, function (e, n, r) {
        var i,
            o,
            a = {},
            s = 0;if (x.isArray(n)) {
          for (o = Rt(e), i = n.length; i > s; s++) {
            a[n[s]] = x.css(e, n[s], !1, o);
          }return a;
        }return r !== t ? x.style(e, n, r) : x.css(e, n);
      }, e, n, arguments.length > 1);
    }, show: function show() {
      return rn(this, !0);
    }, hide: function hide() {
      return rn(this);
    }, toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        nn(this) ? x(this).show() : x(this).hide();
      });
    } }), x.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            var n = Wt(e, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": x.support.cssFloat ? "cssFloat" : "styleFloat" }, style: function style(e, n, r, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
            a,
            s,
            l = x.camelCase(n),
            u = e.style;if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];if (a = typeof r === "undefined" ? "undefined" : _typeof(r), "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
          u[n] = r;
        } catch (c) {}
      }
    }, css: function css(e, n, r, i) {
      var o,
          a,
          s,
          l = x.camelCase(n);return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a;
    } }), e.getComputedStyle ? (Rt = function Rt(t) {
    return e.getComputedStyle(t, null);
  }, Wt = function Wt(e, n, r) {
    var i,
        o,
        a,
        s = r || Rt(e),
        l = s ? s.getPropertyValue(n) || s[n] : t,
        u = e.style;return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l;
  }) : a.documentElement.currentStyle && (Rt = function Rt(e) {
    return e.currentStyle;
  }, Wt = function Wt(e, n, r) {
    var i,
        o,
        a,
        s = r || Rt(e),
        l = s ? s[n] : t,
        u = e.style;return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l;
  });function on(e, t, n) {
    var r = Vt.exec(t);return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }function an(e, t, n, r, i) {
    var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        a = 0;for (; 4 > o; o += 2) {
      "margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
    }return a;
  }function sn(e, t, n) {
    var r = !0,
        i = "width" === t ? e.offsetWidth : e.offsetHeight,
        o = Rt(e),
        a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);if (0 >= i || null == i) {
      if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
    }return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px";
  }function ln(e) {
    var t = a,
        n = Gt[e];return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n;
  }function un(e, t) {
    var n = x(t.createElement(e)).appendTo(t.body),
        r = x.css(n[0], "display");return n.remove(), r;
  }x.each(["height", "width"], function (e, n) {
    x.cssHooks[n] = { get: function get(e, r, i) {
        return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function () {
          return sn(e, n, i);
        }) : sn(e, n, i) : t;
      }, set: function set(e, t, r) {
        var i = r && Rt(e);return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0);
      } };
  }), x.support.opacity || (x.cssHooks.opacity = { get: function get(e, t) {
      return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
    }, set: function set(e, t) {
      var n = e.style,
          r = e.currentStyle,
          i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
          o = r && r.filter || n.filter || "";n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i);
    } }), x(function () {
    x.support.reliableMarginRight || (x.cssHooks.marginRight = { get: function get(e, n) {
        return n ? x.swap(e, { display: "inline-block" }, Wt, [e, "marginRight"]) : t;
      } }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function (e, n) {
      x.cssHooks[n] = { get: function get(e, r) {
          return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t;
        } };
    });
  }), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) {
    return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"));
  }, x.expr.filters.visible = function (e) {
    return !x.expr.filters.hidden(e);
  }), x.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    x.cssHooks[e + t] = { expand: function expand(n) {
        var r = 0,
            i = {},
            o = "string" == typeof n ? n.split(" ") : [n];for (; 4 > r; r++) {
          i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
        }return i;
      } }, Ut.test(e) || (x.cssHooks[e + t].set = on);
  });var cn = /%20/g,
      pn = /\[\]$/,
      fn = /\r?\n/g,
      dn = /^(?:submit|button|image|reset|file)$/i,
      hn = /^(?:input|select|textarea|keygen)/i;x.fn.extend({ serialize: function serialize() {
      return x.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var e = x.prop(this, "elements");return e ? x.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e));
      }).map(function (e, t) {
        var n = x(this).val();return null == n ? null : x.isArray(n) ? x.map(n, function (e) {
          return { name: t.name, value: e.replace(fn, "\r\n") };
        }) : { name: t.name, value: n.replace(fn, "\r\n") };
      }).get();
    } }), x.param = function (e, n) {
    var r,
        i = [],
        o = function o(e, t) {
      t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
    };if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function () {
      o(this.name, this.value);
    });else for (r in e) {
      gn(r, e[r], n, o);
    }return i.join("&").replace(cn, "+");
  };function gn(e, t, n, r) {
    var i;if (x.isArray(t)) x.each(t, function (t, i) {
      n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) ? t : "") + "]", i, n, r);
    });else if (n || "object" !== x.type(t)) r(e, t);else for (i in t) {
      gn(e + "[" + i + "]", t[i], n, r);
    }
  }x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
    x.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), x.fn.extend({ hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }, bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function unbind(e, t) {
      return this.off(e, null, t);
    }, delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    }, undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    } });var mn,
      yn,
      vn = x.now(),
      bn = /\?/,
      xn = /#.*$/,
      wn = /([?&])_=[^&]*/,
      Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Nn = /^(?:GET|HEAD)$/,
      kn = /^\/\//,
      En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
      Sn = x.fn.load,
      An = {},
      jn = {},
      Dn = "*/".concat("*");try {
    yn = o.href;
  } catch (Ln) {
    yn = a.createElement("a"), yn.href = "", yn = yn.href;
  }mn = En.exec(yn.toLowerCase()) || [];function Hn(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");var r,
          i = 0,
          o = t.toLowerCase().match(T) || [];if (x.isFunction(n)) while (r = o[i++]) {
        "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
      }
    };
  }function qn(e, n, r, i) {
    var o = {},
        a = e === jn;function s(l) {
      var u;return o[l] = !0, x.each(e[l] || [], function (e, l) {
        var c = l(n, r, i);return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1);
      }), u;
    }return s(n.dataTypes[0]) || !o["*"] && s("*");
  }function _n(e, n) {
    var r,
        i,
        o = x.ajaxSettings.flatOptions || {};for (i in n) {
      n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
    }return r && x.extend(!0, e, r), e;
  }x.fn.load = function (e, n, r) {
    if ("string" != typeof e && Sn) return Sn.apply(this, arguments);var i,
        o,
        a,
        s = this,
        l = e.indexOf(" ");return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && (a = "POST"), s.length > 0 && x.ajax({ url: e, type: a, dataType: "html", data: n }).done(function (e) {
      o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e);
    }).complete(r && function (e, t) {
      s.each(r, o || [e.responseText, t, e]);
    }), this;
  }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    x.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), x.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: yn, type: "GET", isLocal: Cn.test(mn[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Dn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": x.parseJSON, "text xml": x.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
      return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e);
    }, ajaxPrefilter: Hn(An), ajaxTransport: Hn(jn), ajax: function ajax(e, n) {
      "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (n = e, e = t), n = n || {};var r,
          i,
          o,
          a,
          s,
          l,
          u,
          c,
          p = x.ajaxSetup({}, n),
          f = p.context || p,
          d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
          h = x.Deferred(),
          g = x.Callbacks("once memory"),
          m = p.statusCode || {},
          y = {},
          v = {},
          b = 0,
          w = "canceled",
          C = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
          var t;if (2 === b) {
            if (!c) {
              c = {};while (t = Tn.exec(a)) {
                c[t[1].toLowerCase()] = t[2];
              }
            }t = c[e.toLowerCase()];
          }return null == t ? null : t;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === b ? a : null;
        }, setRequestHeader: function setRequestHeader(e, t) {
          var n = e.toLowerCase();return b || (e = v[n] = v[n] || e, y[e] = t), this;
        }, overrideMimeType: function overrideMimeType(e) {
          return b || (p.mimeType = e), this;
        }, statusCode: function statusCode(e) {
          var t;if (e) if (2 > b) for (t in e) {
            m[t] = [m[t], e[t]];
          } else C.always(e[C.status]);return this;
        }, abort: function abort(e) {
          var t = e || w;return u && u.abort(t), k(0, t), this;
        } };if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) return C;l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);for (i in p.headers) {
        C.setRequestHeader(i, p.headers[i]);
      }if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort();w = "abort";for (i in { success: 1, error: 1, complete: 1 }) {
        C[i](p[i]);
      }if (u = qn(jn, p, n, C)) {
        C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function () {
          C.abort("timeout");
        }, p.timeout));try {
          b = 1, u.send(y, k);
        } catch (N) {
          if (!(2 > b)) throw N;k(-1, N);
        }
      } else k(-1, "No Transport");function k(e, n, r, i) {
        var c,
            y,
            v,
            w,
            T,
            N = n;2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")));
      }return C;
    }, getJSON: function getJSON(e, t, n) {
      return x.get(e, t, n, "json");
    }, getScript: function getScript(e, n) {
      return x.get(e, t, n, "script");
    } }), x.each(["get", "post"], function (e, n) {
    x[n] = function (e, r, i, o) {
      return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({ url: e, type: n, dataType: o, data: r, success: i });
    };
  });function Mn(e, n, r) {
    var i,
        o,
        a,
        s,
        l = e.contents,
        u = e.dataTypes;while ("*" === u[0]) {
      u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
    }if (o) for (s in l) {
      if (l[s] && l[s].test(o)) {
        u.unshift(s);break;
      }
    }if (u[0] in r) a = u[0];else {
      for (s in r) {
        if (!u[0] || e.converters[s + " " + u[0]]) {
          a = s;break;
        }i || (i = s);
      }a = a || i;
    }return a ? (a !== u[0] && u.unshift(a), r[a]) : t;
  }function On(e, t, n, r) {
    var i,
        o,
        a,
        s,
        l,
        u = {},
        c = e.dataTypes.slice();if (c[1]) for (a in e.converters) {
      u[a.toLowerCase()] = e.converters[a];
    }o = c.shift();while (o) {
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;else if ("*" !== l && l !== o) {
        if (a = u[l + " " + o] || u["* " + o], !a) for (i in u) {
          if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
            a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));break;
          }
        }if (a !== !0) if (a && e["throws"]) t = a(t);else try {
          t = a(t);
        } catch (p) {
          return { state: "parsererror", error: a ? p : "No conversion from " + l + " to " + o };
        }
      }
    }return { state: "success", data: t };
  }x.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(e) {
        return x.globalEval(e), e;
      } } }), x.ajaxPrefilter("script", function (e) {
    e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
  }), x.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var n,
          r = a.head || x("head")[0] || a.documentElement;return { send: function send(t, i) {
          n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"));
          }, r.insertBefore(n, r.firstChild);
        }, abort: function abort() {
          n && n.onload(t, !0);
        } };
    }
  });var Fn = [],
      Bn = /(=)\?(?=&|$)|\?\?/;x.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var e = Fn.pop() || x.expando + "_" + vn++;return this[e] = !0, e;
    } }), x.ajaxPrefilter("json jsonp", function (n, r, i) {
    var o,
        a,
        s,
        l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
      return s || x.error(o + " was not called"), s[0];
    }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
      s = arguments;
    }, i.always(function () {
      e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t;
    }), "script") : t;
  });var Pn,
      Rn,
      Wn = 0,
      $n = e.ActiveXObject && function () {
    var e;for (e in Pn) {
      Pn[e](t, !0);
    }
  };function In() {
    try {
      return new e.XMLHttpRequest();
    } catch (t) {}
  }function zn() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP");
    } catch (t) {}
  }x.ajaxSettings.xhr = e.ActiveXObject ? function () {
    return !this.isLocal && In() || zn();
  } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials" in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function (n) {
    if (!n.crossDomain || x.support.cors) {
      var _r;return { send: function send(i, o) {
          var a,
              s,
              l = n.xhr();if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) {
            l[s] = n.xhrFields[s];
          }n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");try {
            for (s in i) {
              l.setRequestHeader(s, i[s]);
            }
          } catch (u) {}l.send(n.hasContent && n.data || null), _r = function r(e, i) {
            var s, u, c, p;try {
              if (_r && (i || 4 === l.readyState)) if (_r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) 4 !== l.readyState && l.abort();else {
                p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);try {
                  c = l.statusText;
                } catch (f) {
                  c = "";
                }s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404;
              }
            } catch (d) {
              i || o(-1, d);
            }p && o(s, c, p, u);
          }, n.async ? 4 === l.readyState ? setTimeout(_r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = _r), l.onreadystatechange = _r) : _r();
        }, abort: function abort() {
          _r && _r(t, !0);
        } };
    }
  });var Xn,
      Un,
      Vn = /^(?:toggle|show|hide)$/,
      Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
      Jn = /queueHooks$/,
      Gn = [nr],
      Qn = { "*": [function (e, t) {
      var n = this.createTween(e, t),
          r = n.cur(),
          i = Yn.exec(t),
          o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
          a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)),
          s = 1,
          l = 20;if (a && a[3] !== o) {
        o = o || a[3], i = i || [], a = +r || 1;do {
          s = s || ".5", a /= s, x.style(n.elem, e, a + o);
        } while (s !== (s = n.cur() / r) && 1 !== s && --l);
      }return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n;
    }] };function Kn() {
    return setTimeout(function () {
      Xn = t;
    }), Xn = x.now();
  }function Zn(e, t, n) {
    var r,
        i = (Qn[t] || []).concat(Qn["*"]),
        o = 0,
        a = i.length;for (; a > o; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }function er(e, t, n) {
    var r,
        i,
        o = 0,
        a = Gn.length,
        s = x.Deferred().always(function () {
      delete l.elem;
    }),
        l = function l() {
      if (i) return !1;var t = Xn || Kn(),
          n = Math.max(0, u.startTime + u.duration - t),
          r = n / u.duration || 0,
          o = 1 - r,
          a = 0,
          l = u.tweens.length;for (; l > a; a++) {
        u.tweens[a].run(o);
      }return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1);
    },
        u = s.promise({ elem: e, props: x.extend({}, t), opts: x.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: Xn || Kn(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
        var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);return u.tweens.push(r), r;
      }, stop: function stop(t) {
        var n = 0,
            r = t ? u.tweens.length : 0;if (i) return this;for (i = !0; r > n; n++) {
          u.tweens[n].run(1);
        }return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this;
      } }),
        c = u.props;for (tr(c, u.opts.specialEasing); a > o; o++) {
      if (r = Gn[o].call(u, e, c, u.opts)) return r;
    }return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, { elem: e, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
  }function tr(e, t) {
    var n, r, i, o, a;for (n in e) {
      if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) {
        o = a.expand(o), delete e[r];for (n in o) {
          n in e || (e[n] = o[n], t[n] = i);
        }
      } else t[r] = i;
    }
  }x.Animation = x.extend(er, { tweener: function tweener(e, t) {
      x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");var n,
          r = 0,
          i = e.length;for (; i > r; r++) {
        n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t);
      }
    }, prefilter: function prefilter(e, t) {
      t ? Gn.unshift(e) : Gn.push(e);
    } });function nr(e, t, n) {
    var r,
        i,
        o,
        a,
        s,
        l,
        u = this,
        c = {},
        p = e.style,
        f = e.nodeType && nn(e),
        d = x._data(e, "fxshow");n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
      s.unqueued || l();
    }), s.unqueued++, u.always(function () {
      u.always(function () {
        s.unqueued--, x.queue(e, "fx").length || s.empty.fire();
      });
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function () {
      p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
    }));for (r in t) {
      if (i = t[r], Vn.exec(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;c[r] = d && d[r] || x.style(e, r);
      }
    }if (!x.isEmptyObject(c)) {
      d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function () {
        x(e).hide();
      }), u.done(function () {
        var t;x._removeData(e, "fxshow");for (t in c) {
          x.style(e, t, c[t]);
        }
      });for (r in c) {
        a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0));
      }
    }
  }function rr(e, t, n, r, i) {
    return new rr.prototype.init(e, t, n, r, i);
  }x.Tween = rr, rr.prototype = { constructor: rr, init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px");
    }, cur: function cur() {
      var e = rr.propHooks[this.prop];return e && e.get ? e.get(this) : rr.propHooks._default.get(this);
    }, run: function run(e) {
      var t,
          n = rr.propHooks[this.prop];return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this;
    } }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = { _default: { get: function get(e) {
        var t;return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop];
      }, set: function set(e) {
        x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
      } } }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = { set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    } }, x.each(["toggle", "show", "hide"], function (e, t) {
    var n = x.fn[t];x.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i);
    };
  }), x.fn.extend({ fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(nn).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
    }, animate: function animate(e, t, n, r) {
      var i = x.isEmptyObject(e),
          o = x.speed(t, n, r),
          a = function a() {
        var t = er(this, x.extend({}, e), o);(i || x._data(this, "finish")) && t.stop(!0);
      };return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
    }, stop: function stop(e, n, r) {
      var i = function i(e) {
        var t = e.stop;delete e.stop, t(r);
      };return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            n = null != e && e + "queueHooks",
            o = x.timers,
            a = x._data(this);if (n) a[n] && a[n].stop && i(a[n]);else for (n in a) {
          a[n] && a[n].stop && Jn.test(n) && i(a[n]);
        }for (n = o.length; n--;) {
          o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
        }(t || !r) && x.dequeue(this, e);
      });
    }, finish: function finish(e) {
      return e !== !1 && (e = e || "fx"), this.each(function () {
        var t,
            n = x._data(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = x.timers,
            a = r ? r.length : 0;for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        }for (t = 0; a > t; t++) {
          r[t] && r[t].finish && r[t].finish.call(this);
        }delete n.finish;
      });
    } });function ir(e, t) {
    var n,
        r = { height: e },
        i = 0;for (t = t ? 1 : 0; 4 > i; i += 2 - t) {
      n = Zt[i], r["margin" + n] = r["padding" + n] = e;
    }return t && (r.opacity = r.width = e), r;
  }x.each({ slideDown: ir("show"), slideUp: ir("hide"), slideToggle: ir("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
    x.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), x.speed = function (e, t, n) {
    var r = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? x.extend({}, e) : { complete: n || !n && t || x.isFunction(e) && e, duration: e, easing: n && t || t && !x.isFunction(t) && t };return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue);
    }, r;
  }, x.easing = { linear: function linear(e) {
      return e;
    }, swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    } }, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function () {
    var e,
        n = x.timers,
        r = 0;for (Xn = x.now(); n.length > r; r++) {
      e = n[r], e() || n[r] !== e || n.splice(r--, 1);
    }n.length || x.fx.stop(), Xn = t;
  }, x.fx.timer = function (e) {
    e() && x.timers.push(e) && x.fx.start();
  }, x.fx.interval = 13, x.fx.start = function () {
    Un || (Un = setInterval(x.fx.tick, x.fx.interval));
  }, x.fx.stop = function () {
    clearInterval(Un), Un = null;
  }, x.fx.speeds = { slow: 600, fast: 200, _default: 400 }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) {
    return x.grep(x.timers, function (t) {
      return e === t.elem;
    }).length;
  }), x.fn.offset = function (e) {
    if (arguments.length) return e === t ? this : this.each(function (t) {
      x.offset.setOffset(this, e, t);
    });var n,
        r,
        o = { top: 0, left: 0 },
        a = this[0],
        s = a && a.ownerDocument;if (s) return n = s.documentElement, x.contains(n, a) ? (_typeof(a.getBoundingClientRect) !== i && (o = a.getBoundingClientRect()), r = or(s), { top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0) }) : o;
  }, x.offset = { setOffset: function setOffset(e, t, n) {
      var r = x.css(e, "position");"static" === r && (e.style.position = "relative");var i = x(e),
          o = i.offset(),
          a = x.css(e, "top"),
          s = x.css(e, "left"),
          l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1,
          u = {},
          c = {},
          p,
          f;l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u);
    } }, x.fn.extend({ position: function position() {
      if (this[0]) {
        var e,
            t,
            n = { top: 0, left: 0 },
            r = this[0];return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - x.css(r, "marginTop", !0), left: t.left - n.left - x.css(r, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent || s;while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) {
          e = e.offsetParent;
        }return e || s;
      });
    } }), x.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, n) {
    var r = /Y/.test(n);x.fn[e] = function (i) {
      return x.access(this, function (e, i, o) {
        var a = or(e);return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t);
      }, e, i, arguments.length, null);
    };
  });function or(e) {
    return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1;
  }x.each({ Height: "height", Width: "width" }, function (e, n) {
    x.each({ padding: "inner" + e, content: n, "": "outer" + e }, function (r, i) {
      x.fn[i] = function (i, o) {
        var a = arguments.length && (r || "boolean" != typeof i),
            s = r || (i === !0 || o === !0 ? "margin" : "border");return x.access(this, function (n, r, i) {
          var o;return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s);
        }, n, a ? i : t, a, null);
      };
    });
  }), x.fn.size = function () {
    return this.length;
  }, x.fn.andSelf = x.fn.addBack, "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module && "object" == _typeof(module.exports) ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function () {
    return x;
  }));
})(window);
"use strict";

var flix_automailer_container = function flix_automailer_container(that, flix_setup_code, flix_parent, attr) {

  var my_class = this;
  var post_url = flix_parent.post_url;
  var login = localStorage.getItem("flix_login");

  var language = {
    save: "speichern",
    start: "Start",
    continue: "weiter",
    total: "Insgesamt",
    "create new reminder": "Neue Terminerinnerung anlegen",
    "email reminder": "E-Mail Terminerinnerung",
    "mobile reminder": "SMS Terminerinnerung",
    "edit saved reminders": "Gespeicherte Terminerinnerungen editieren",
    "before": "vor",
    "after": "nach",
    "appointment begin": "Terminbeginn",
    "appointment end": "Terminende",
    minute: "Minute",
    minutes: "Minuten",
    hour: "Stunde",
    hours: "Stunden",
    day: "Tag",
    days: "Tage",
    week: "Woche",
    weeks: "Wochen",
    month: "Monat",
    months: "Monate",
    year: "Jahr",
    years: "Jahre",
    application: "Terminbuchung",
    commitment: "Zusage",
    cancellation: "Absage",
    "begin with commitment": "Terminbeginn + Zusage",
    "begin with cancellation": "Terminbeginn + Absage",
    "end with commitment": "Terminende + Zusage",
    "end with cancellation": "Terminende + Absage",
    message: "Nachricht",
    delete: "löschen",
    title: "Betreff",
    active: "aktiv",
    inactive: "inaktiv",
    "new automailer": "Neue Terminerinnerung",
    "additional settings": "Zusatzeinstellungen",
    preview: "Vorschau",
    "successfully saved": "erfolgreich gespeichert",
    "submit rules": "Sende-Regeln",
    "tel": "SMS",
    "email": "Email",
    "reminder": "Termin-Erinnerung",
    "follow up": "FollowUp-Nachrichten",
    "other messages": "Sonstige Mitteilungen",
    "new message": "Neue Nachricht",
    "back": "zurück",
    "mailtext": "Noch %s! Bestätigter Termin am %s. Alle Informationen, Stornierung / Datumsänderung unter %s",
    "Your appointment was %s ago (%s). More information under %s": "Der Termin ist %s her (%s). Weitere Infos unter %s",
    "LinkToApointmentBookingPage": "LinkZurTerminÜbersichtsSeite",
    "information": "Information"
  };

  this.build = function () {

    if ($(that).attr("data-flix-language")) post_url += "?l=" + $(that).attr("data-flix-language");

    flix_parent.set_post_url(post_url);

    if (typeof login != "string") return false;

    my_class.get_run();
  };

  this.get_run = function () {

    new flix_overhead(that, {
      onReady: function onReady(data) {
        my_class.get_mailer(data);
      },
      onChange: function onChange(data) {
        my_class.get_mailer(data);
      }
    }).build();
  };

  this.get_html = function () {

    var html = '';
    var fe = new flix_form_elements();

    html += '<div class="flix-builder-menu">';
    html += fe.get_select({ columnName: "4", id: "id", label: "", values: my_class.saved_assistents });
    html += '<div class="flix-builder-stage">';
    html += '</div>';

    return html;
  };

  this.presets = function () {

    var data = {
      language: language
    };

    new flix_automailer_presets(that, data).build();
  };

  this.get_mailer = function (ret) {

    var data = {
      view: "small",
      event_id: ret.id,
      language: language,

      onSave: function onSave(data) {

        $.post(FLIX_URLS.api + $(that).attr("data-flix-language") + "/reminder/save", { user: login, data: data.saved_data, ID: data.event_id }).success(function (ret) {

          $.post(FLIX_URLS.api + $(that).attr("data-flix-language") + "/reminder/set", { user: login, ID: data.event_id }).success(function (ret2) {

            swal.fire({ title: ret[1], html: ret2[1], type: "success", showConfirmButton: false, showCloseButton: true, timer: 2500 });
          });
        });
      }

    };

    $.post(FLIX_URLS.api + $(that).attr("data-flix-language") + "/reminder/get", { user: login, ID: ret.id }).success(function (ret2) {

      data = Object.assign(data, { saved_data: ret2 });

      new flix_automailer(ret.stage, data).build();
    });
  };
};
"use strict";

var flix_backup = function flix_backup(that, flix_setup_code, flix_parent, atts) {

	var my_class = this;
	flix_parent.my_subclass = my_class;

	var post_url = flix_parent.post_url;

	this.do = function () {

		flix_parent.get_styles();
		flix_parent.get_animateCSS();

		if ($(that).attr("data-flix-language")) post_url += "?l=" + $(that).attr("data-flix-language");

		flix_parent.set_post_url(post_url);

		$(that).html(flix_parent.get_loader());

		var html = $(that);

		$(that).html(flix_parent.get_login(html, function () {
			my_class.get_backup();
		}));
	};

	this.get_backup = function () {

		var send = {
			user: localStorage.getItem("flix_login"),
			class: "frontend/flix-backup.php",
			action: "get_backup_list"
		};

		$.post(post_url, send).success(function (data) {

			$(that).html(data);
			my_class.get_select_backup(send);
		});
	};

	this.get_select_backup = function (send) {

		$(that).find("select[name='backup']").unbind("change");

		$(that).find("select[name='backup']").change(function () {

			if ($(this).val() == "---") {
				$(that).find(".flix-stage").addClass("flix-hide");
				return false;
			}

			$(that).find(".flix-stage").removeClass("flix-hide");

			send.ID = $(this).val();

			$(that).find(".flix-stage .flix-backup-id").html(send.ID);
			$(that).find(".flix-stage .flix-backup-date").html($(that).find("select[name='backup'] option:selected").text().trim());

			my_class.get_handle_backup(send);

			return false;
		});
	};

	this.get_handle_backup = function (send) {

		$(that).find(".flix-btn-mailexport, .flix-btn-import").unbind("click");

		$(that).find(".flix-btn-mailexport, .flix-btn-import").click(function () {

			var btn = $(this);

			if (btn.hasClass("flix-btn-mailexport")) send.action = "get_mailexport";

			if (btn.hasClass("flix-btn-import")) send.action = "get_import";

			flix_parent.get_fullscreen_loader();

			$.post(post_url, send).success(function (data) {

				flix_parent.get_sweetalert(function () {

					data = $.parseJSON(data);

					swal.fire(data);

					flix_parent.rm_fullscreen_loader();
				});
			});

			return false;
		});
	};

	this.do();

	return this;
};
"use strict";

var flix_blacklist = function flix_blacklist(that, flix_setup_code, flix_parent, attr) {

  var my_class = this;
  var post_url = flix_parent.post_url;

  this.save_to_blacklist = function () {

    flix_parent.get_styles();
    flix_parent.get_animateCSS();

    if ($(that).attr("data-flix-language")) post_url += "?l=" + $(that).attr("data-flix-language");

    flix_parent.set_post_url(post_url);

    $(that).html(flix_parent.get_loader());

    my_class.get_blacklist();
  };

  this.list_black_list = function () {

    if ($(that).attr("data-flix-language") && post_url.indexOf("?l=") == -1) post_url += "?l=" + $(that).attr("data-flix-language");

    flix_parent.set_post_url(post_url);

    flix_parent.get_login($(that), function () {

      var send = {
        class: "frontend/flix-blacklist.php",
        action: "get_list_blacklist",
        user: localStorage.getItem("flix_login")
      };

      $.post(post_url, send).success(function (data) {

        $(that).html(data);

        $(that).find(".flix-btn-blacklist").unbind("click");

        $(that).find(".flix-btn-blacklist").click(function () {

          var to = $(this).attr("href").replace("#", "");

          flix_parent.get_new_section($(that), {

            html: '<div class="flix-show-entry" data-flix-language="' + $(that).attr("data-flix-language") + '"></div>',
            onReady: function onReady(det) {

              if (det.flix_parent.post_url.indexOf("?l=") == -1) det.flix_parent.post_url += "?l=" + det.container.find(".flix-show-entry").attr("data-flix-language");

              var bl = new flix_blacklist(det.container.find(".flix-show-entry"), det.flix_setup_code, det.flix_parent, { to: to });
              bl.get_blacklist();
            },
            onClose: function onClose(ret) {
              my_class.list_black_list();
            }

          });

          return false;
        });
      });
    });
  };

  this.get_blacklist = function () {

    var send = {
      class: "frontend/flix-blacklist.php",
      action: "get_blacklist",
      to: attr.to,
      user: localStorage.getItem("flix_login")
    };

    my_class.to = send.to;
    my_class.user = send.user;

    $.post(post_url, send).success(function (data) {

      $(that).html(data);
      my_class.click_all();
      my_class.save();
    });
  };

  this.save = function () {

    $(that).find(".flix-btn-save").unbind("click");

    $(that).find(".flix-btn-save").click(function () {

      var send = {
        to: my_class.to,
        user: my_class.user,
        group: [],
        class: "frontend/flix-blacklist.php",
        action: "set_to_blacklist"
      };

      $(that).find("input[type='checkbox']").each(function (k) {

        if ($(this).is(":checked")) {
          send.group.push($(this).attr("value"));

          if ($(this).attr("value") == "*") {
            delete send.group;
            send.group = "*";
            return false;
          }
        }
      });

      if (send.group.length == 0) {
        delete send.group;
        send.group = "";
      }

      $.post(post_url, send).success(function (data) {

        flix_parent.get_sweetalert(function () {

          data = $.parseJSON(data);
          swal.fire(data);
        });
      });

      return false;
    });
  };

  this.click_all = function () {

    $(that).find("input[type='checkbox']").unbind("change");

    $(that).find("input[type='checkbox']").change(function () {

      if (!$(this).is(":checked")) {
        $(that).find("input[type='checkbox']").eq(0).prop('checked', false);
        return false;
      }

      var i = 0;

      $(that).find("input[type='checkbox']").each(function (k) {

        if (k == 0) return true;

        $(that).find("input[type='checkbox']").eq(0).prop('checked', true);

        if (!$(this).is(":checked")) {
          $(that).find("input[type='checkbox']").eq(0).prop('checked', false);
          return false;
        }
      });
    });

    $(that).find("input[type='checkbox']").eq(0).unbind("change");

    $(that).find("input[type='checkbox']").eq(0).change(function () {

      if ($(this).is(":checked")) $(that).find("input[type='checkbox']").prop('checked', true);else $(that).find("input[type='checkbox']").prop('checked', false);
    });
  };

  return this;
};
"use strict";

var flix_chat = function flix_chat(that, flix_setup_code, flix_parent) {

  var my_class = this;

  my_class.responses = new chat_responses();

  $(that).html('<div id="flix_chat"></div>');

  flix_setup_code.flix_load_css(FLIX_URLS.flix + "assets/css/chat.css", function () {

    var settings = {

      "data": FLIX_URLS.api + $(that).attr("data-flix-language") + "/chat/data/",
      "translation": FLIX_URLS.api + $(that).attr("data-flix-language") + "/chat/settings/",
      "bot": {
        "name": "FLIX",
        "img": FLIX_URLS.flix + "/assets/img/flix_avatar.jpeg"
        /* "bg_color": "red", "color": "purple" */
      },
      "user": {
        "name": "Unbekannt",
        "img": FLIX_URLS.flix + "/assets/img/customer_avatar.jpg"
      },
      "response": function response(ret) {
        my_class.responses.responses_switch(ret);
      },
      "init": function init(ret) {
        my_class.responses.chat_init(ret);
      },
      "getTimeUK": function getTimeUK() {
        var date = new Date();
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();

        if (minutes < 10) minutes = "0" + minutes;

        var suffix = "AM";
        if (hours >= 12) {
          suffix = "PM";
          hours = hours - 12;
        }
        if (hours == 0) {
          hours = 12;
        }
        return hours + ":" + minutes + " " + suffix;
      }

    };

    var run_app = new chat($(that).find("#flix_chat"), settings);

    run_app.run();
  });

  setTimeout(function () {
    flix_parent.set_to_scroll_position($(that).find("#chat_stage"));
    $(".flix-btn-support-chat").hide();
  }, 2000);
};
"use strict";

var flix_chat_center = function flix_chat_center(that, flix_setup_code, flix_parent) {

  var my_class = this;
  my_class.lang = $(that).attr("data-flix-language");

  var post_url = flix_parent.post_url;

  this.do = function () {

    flix_parent.get_styles();
    flix_parent.get_animateCSS();

    if ($(that).attr("data-flix-language")) post_url += "?l=" + $(that).attr("data-flix-language");

    flix_parent.set_post_url(post_url);

    $(that).html(flix_parent.get_loader());

    var html = $(that);

    $(that).html(flix_parent.get_login(html, function () {
      $(that).html(flix_parent.get_loader());
      my_class.get_chat();
    }));
  };

  this.get_click_menu_btn = function () {

    var send = {
      user: localStorage.getItem("flix_login"),
      action: "get_chat_list",
      class: "frontend/flix-chat-center.php"
    };

    $(that).find(".flix-btn-menu button").unbind("click");

    $(that).find(".flix-btn-menu button").click(function () {

      $(that).find(".flix-chat-stage,.flix-chat-list").html("");

      if ($(this).hasClass("flix-btn-new-chat")) return my_class.get_new_chat();

      if ($(this).hasClass("flix-btn-unread-chats")) send.list = "unread";

      if ($(this).hasClass("flix-btn-unanswered-chats")) send.list = "unanswered";

      if ($(this).hasClass("flix-btn-all-chats")) send.list = "all";

      $.post(post_url, send).success(function (data) {

        if (typeof data == "string") $(that).find(".flix-chat-list").html(data);else my_class.get_create_list(data);
      });

      return false;
    });
  };

  this.get_new_chat = function () {

    var send = {
      user: localStorage.getItem("flix_login"),
      action: "get_new_chat",
      class: "frontend/flix-chat-center.php"
    };

    $.post(post_url, send).success(function (data) {

      data = $.parseJSON(data);
      var html = "";

      html += "<div class='flix-list-group'>";

      $.each(data, function (k, v) {

        html += "<a href='" + v.value + "' class='flix-list-group-item flix-html-a'>" + v.label + "</a>";
      });

      html += "</div>";

      $(that).find(".flix-chat-list").html(html);
      my_class.get_select_event(send);
    });
  };

  this.get_select_event = function (send) {

    $(that).find(".flix-chat-list a").unbind("click");

    $(that).find(".flix-chat-list a").click(function () {

      send.event_id = $(this).attr("href");
      send.action = "get_user_entries";

      $.post(post_url, send).success(function (data) {

        $(that).find(".flix-chat-stage").html(data);

        my_class.get_select_userchat(send);
        my_class.get_select_all(send);
        my_class.get_select_user_details(send);
      });

      return false;
    });
  };

  this.get_count_selected = function (send) {

    var count = 0;
    var submit_id = [];
    var event_id = send.event_id;

    $(that).find(".flix-chat-stage table td input[type='checkbox']").each(function () {

      if ($(this).is(":checked")) {
        count++;
        submit_id.push($(this).closest("tr").find("[data-flix-chat]").attr("data-flix-chat"));
      }
    });

    $(that).find(".flix-chat-stage button span").text(count);

    $(that).find(".flix-chat-stage button").unbind("click");
    $(that).find(".flix-chat-stage button").click(function () {

      if (!count) return false;

      var msg = $(that).find(".flix-chat-stage textarea").val();

      if (!msg.trim().length) return false;

      var send = {
        user: localStorage.getItem("flix_login"),
        action: "new_chat_msg_to_all",
        class: "frontend/flix-chat-center.php",
        ids: submit_id,
        msg: msg
      };

      $.post(post_url, send).success(function (data) {

        flix_parent.get_sweetalert(function () {

          data = $.parseJSON(data);

          swal.fire(data);
          $(that).find(".flix-chat-list a[href='" + event_id + "']").trigger("click");
        });
      });

      return false;
    });
  };

  this.get_select_all = function (send) {

    $(that).find(".flix-chat-stage table th input[type='checkbox']").change(function () {

      if ($(this).is(":checked")) {

        $(that).find(".flix-chat-stage table td input[type='checkbox']").prop('checked', true);
      } else {

        $(that).find(".flix-chat-stage table td input[type='checkbox']").prop('checked', false);
      }

      my_class.get_count_selected(send);
      return false;
    });

    $(that).find(".flix-chat-stage table td input[type='checkbox']").change(function () {

      my_class.get_count_selected(send);
    });
  };

  this.get_select_user_details = function (send) {

    $(that).find(".flix-chat-stage .flix-user-details").unbind("click");
    $(that).find(".flix-chat-stage .flix-user-details").click(function () {

      var id = ["", send.event_id, $(this).attr("data-flix-user-id")];

      my_class.get_show_user_details($(that).find(".flix-chat-stage .flix-table-container"), id, $(this).text());

      return false;
    });
  };

  this.get_select_userchat = function (send) {

    $(that).find(".flix-chat-stage [data-flix-chat]").unbind("click");
    $(that).find(".flix-chat-stage [data-flix-chat]").click(function () {

      flix_parent.get_new_section($(that).find(".flix-chat-stage .flix-table-container"), {

        title: $(this).closest("tr").find("td").eq(1).text(),
        html: '<div data-flix-language="' + $(that).attr("data-flix-language") + '" data-flix-userchat="' + $(this).attr("data-flix-chat") + '"></div>',
        onReady: function onReady(ret) {
          new flix_userchat(ret.container.find("[data-flix-userchat]"), ret.flix_setup_code, ret.flix_parent);
        },
        onClose: function onClose(ret) {
          $(that).find(".flix-chat-list a[href='" + send.event_id + "']").trigger("click");
        }
      });

      return false;
    });
  };

  this.get_click_list = function (data) {

    $(that).find(".flix-chat-list a").unbind("click");

    $(that).find(".flix-chat-list a").click(function () {

      var id = $(this).attr("href");

      var html = "";
      html += "<div class='flix-panel flix-panel-default'>";
      html += "<div class='flix-panel-heading'>";
      html += "<a href='#' class='flix-user-details flix-btn flix-btn-default'>" + $(this).text() + "</a>";
      html += "</div>";
      html += "<div class='flix-panel-body'>";
      html += "<div data-flix-userchat='" + data.base + id + "/' ></div>";
      html += "</div>";
      html += "</div>";

      $(that).find(".flix-chat-stage").html(html);

      new flix_userchat($(that).find(".flix-chat-stage [data-flix-userchat]"), flix_setup_code, flix_parent);

      my_class.get_user_details(id);

      return false;
    });
  };

  this.get_user_details = function (user_id) {

    $(that).find(".flix-user-details").unbind("click");

    $(that).find(".flix-user-details").click(function () {

      var id = user_id.split("/");
      var panel = $(this).closest(".flix-panel");

      my_class.get_show_user_details(panel, id, $(this).text());

      return false;
    });
  };

  this.get_show_user_details = function (panel, id, title) {

    flix_parent.get_new_section(panel, {
      title: title,
      html: '<div data-flix-list-events="' + id[1] + '" data-flix-language="' + $(that).attr("data-flix-language") + '"><div class="flix-dashboard"></div><div class="flix-status-stage"></div></div>', onReady: function onReady(ret) {

        var fem = new flix_entry_manager(ret.container.find("[data-flix-list-events]"), ret.flix_setup_code, ret.flix_parent, { post_url: post_url, run: false, entry_id: id[2] });

        fem.get_event_data(id[1]);
      } });
  };

  this.get_create_list = function (data) {

    var html = "";

    html += "<div class='flix-list-group'>";

    $.each(data.entries, function (k, v) {

      html += "<a href='" + v.link + "' class='flix-list-group-item flix-html-a'>" + v.label + "</a>";
    });

    html += "</div>";

    $(that).find(".flix-chat-list").html(html);

    my_class.get_click_list(data);
  };

  this.get_chat = function () {

    var send = {
      user: localStorage.getItem("flix_login"),
      action: "get_chats",
      class: "frontend/flix-chat-center.php"
    };

    $.post(post_url, send).success(function (data) {

      $(that).html(data);
      my_class.get_click_menu_btn();
    });
  };

  this.do();
  return this;
};
"use strict";

var chat_responses = function chat_responses() {

  this.send = {};
  var my_class = this;

  this.setSendUrl = function (ret) {

    this.send_url = FLIX_URLS.api + ret.chat_container.closest("[data-flix-language]").attr("data-flix-language");
  };

  this.setLoginUser = function (ret, callback_) {

    var user = localStorage.getItem("flix_login");

    if (typeof user == "undefined" || !user) {
      ret.chat_msg[0].msg = ret.chat_msg[0].msg.replace("%username", "");
      callback_();
      return false;
    }

    this.post({ url: this.send_url + "/user/get_user", data: { user: user }, callback: function callback(data) {

        var uname_old = ret.settings.user.name;

        if (typeof data != "undefined" && data[0]) ret.responses.user = { email: data[1].email, ID: data[1].ID };

        if (typeof data[1].avatar != "undefined" && data[1].avatar) ret.settings.user.img = data[1].avatar;

        if (typeof data[1].username != "undefined") ret.settings.user.name = data[1].username;

        if (typeof data[1].first_name != "undefined") ret.settings.user.name = data[1].first_name;

        if (uname_old != ret.settings.user.name) {
          ret.chat_msg[0].msg = ret.chat_msg[0].msg.replace("%username", ret.settings.user.name);
          ret.responses.user.name = ret.settings.user.name;
        } else ret.chat_msg[0].msg = ret.chat_msg[0].msg.replace("%username", "");

        callback_();
      }, type: "json" });
  };

  this.responses_switch = function (ret) {

    this.setSendUrl(ret);

    switch (ret.step) {

      case "Auswahl":
        {
          ret.step = ret.responses[ret.step];

          break;
        }

      case "Infos":
        {

          ret.step = ret.responses[ret.step];
          break;
        }
      case "Allgemein":
        {

          var html = ret.chat_container.closest("[data-flix-chat]").parent();
          var lang = ret.chat_container.closest("[data-flix-chat]").attr("data-flix-language");

          var flix_parent = new flix_termin_flix(html, flix_setup_code, {});

          var post_url = flix_parent.post_url;
          post_url += "?l=" + lang;

          flix_parent.set_post_url(post_url);

          //ret.step = ret.responses[ret.step];


          if (ret.responses[ret.step] == "Hilfebereich") {

            flix_parent.get_new_section(html, { title: ret.responses[ret.step],
              html: "<div data-flix-help-center data-flix-language='de'></div>",
              onReady: function onReady(r) {
                r.container.closest(".flix-window").wrap("<div class='flix-col-md-12'></div>");new flix_help_center(r.container.find("[data-flix-help-center]"), flix_setup_code, flix_parent);
              } });

            return false;
          } else ret.step = ret.responses[ret.step];

          break;
        }

      case "Individuell":

        if (ret.responses[ret.step] == "Nein") ret.step = "Nicht_Kunde_Email";else ret.step = "Kunde_Email";

        break;

      case "Terminflix":

        if (ret.responses[ret.step] == "Nein") ret.step = "Nicht_Kunde_Email";else ret.step = "Kunde_Email";

        break;

      case "Kunde_Email":
        ret.step = "Kunde_Passwort";
        break;

      case "Kunde_Passwort":
        ret.chat_container.closest("#chat_stage").find(".message").last().text("***");
        ret.step = "Kunde_Validierung";

        var send = {
          "username": ret.responses.Kunde_Email,
          "password": ret.responses.Kunde_Passwort
        };

        this.post({
          "url": this.send_url + "/user/get_login",
          "data": send,
          "callback": function callback(data) {
            setTimeout(function () {

              if (data[0]) {
                ret.responses.user = data[1];
                ret.step = "Login_Erfolgreich";
                ret.chat_msg.Login_Erfolgreich.next = "Gegencheck Frage";
                delete ret.responses.Kunde_Passwort;
                delete ret.responses.Kunde_Email;
                ret.scrollDwn();
                ret.start_app();
              }
              if (!data[0]) {
                ret.step = "Login_Fehler";
                ret.scrollDwn();
                ret.start_app();
              }
            }, 9000);
          },
          "type": "json" });

        break;

      case "Sonstige Frage":
        ret.step = "Gegencheck Frage";

        break;

      case "Gegencheck Frage":

        if (ret.responses[ret.step] == "Nein") ret.step = "Sonstige Frage";else if (typeof this.send.email != "undefined") {
          ret.step = "Danke";
          this.setSendChatQuestion(ret);
          return false;
        } else if (typeof ret.responses.user == "undefined") ret.step = "Terminflix";else {

          this.send = {};
          this.send.user = ret.responses.user.ID;
          this.send.email = ret.responses.user.email;

          if (typeof ret.responses.user.name != "undefined") this.send.name = ret.responses.user.name;

          this.setSendChatQuestion(ret);
          return false;
        }

        break;

      case "Nicht_Kunde_Email":

        this.send.user = "";
        this.send.email = ret.responses.Nicht_Kunde_Email;

        this.setSendChatQuestion(ret);

        break;

      case "Danke":

        ret.step = "Auswahl";
        break;
    }

    ret.loading();
    setTimeout(function () {

      ret.delLoading();
      ret.scrollDwn();
      ret.start_app();
    }, 2000);
  };

  this.setSendChatQuestion = function (ret) {

    this.send.question = ret.responses["Sonstige Frage"];

    var send = this.send;

    this.post({
      "url": this.send_url + "/chat/set_chat_question",
      "data": { "data": this.send, "error": "Email Fehler", "success": "Danke" },
      "callback": function callback(data) {

        ret.step = data[0];

        if (ret.step == "Danke") ret.chat_msg.Danke.msg = ret.chat_msg.Danke.msg.replace("%mail", send.email);

        ret.loading();
        setTimeout(function () {

          ret.delLoading();
          ret.scrollDwn();
          ret.start_app();
        }, 2000);
      },

      "type": "json" });
  };

  this.post = function (input) {

    $.ajax({
      type: "POST",
      url: input.url,
      data: input.data,
      success: function success(data) {

        input.callback(data);
      },
      dataType: input.type
    });
  };

  this.chat_init = function (ret) {

    ret.input_container.closest("#input").append("<div class='fullscreen' style='margin-top: 20px; text-align:right;'><a href='#' class='flix-html-a'>Vollbild</a></div>");
    my_class.getToggleFullscreen(ret);

    my_class.setSendUrl(ret);

    my_class.setLoginUser(ret, function () {

      ret.start_app();
    });
  };

  this.getToggleFullscreen = function (ret) {

    ret.input_container.closest("#input").find(".fullscreen").unbind("click");
    ret.input_container.closest("#input").find(".fullscreen").click(function () {

      $(this).toggleClass("open");

      if ($(this).hasClass("open")) {

        ret.input_container.closest("#jj_chat").parent().css({
          "position": "fixed",
          "top": 0,
          "left": 0,
          "z-index": 999,
          "width": "100%",
          "background-color": "white"

        });
      } else {
        ret.input_container.closest("#jj_chat").parent().attr("style", "");

        $('html, body').animate({
          scrollTop: ret.input_container.closest("#jj_chat").offset().top - 20
        }, 0);
      }

      return false;
    });
  };
};
"use strict";

var flix_credit = function flix_credit(that, flix_setup_code, flix_parent, atts) {

	var my_class = this;
	var post_url = flix_parent.post_url;

	this.do = function () {

		flix_parent.get_styles();
		flix_parent.get_animateCSS();

		if ($(that).attr("data-flix-language")) post_url += "?l=" + $(that).attr("data-flix-language");

		flix_parent.set_post_url(post_url);

		$(that).html(flix_parent.get_loader());

		var html = $(that);
		$(that).html(flix_parent.get_login(html, function () {
			my_class.get_credit();
		}));
	};

	this.get_credit = function () {

		var send = {
			"class": "frontend/flix-credits.php",
			"action": "get_credit",
			"user": localStorage.getItem("flix_login")
		};

		$.post(post_url, send).success(function (data) {

			$(that).html(data);
			my_class.get_buy_credits();
			my_class.get_show_inovoices();
		});
	};

	this.get_show_inovoices = function () {

		$(that).find(".flix-btn-inovoice").unbind("click");

		$(that).find(".flix-btn-inovoice").click(function () {

			var btn = $(this);

			atts = {};

			flix_parent.get_new_section($(that), {
				title: btn.text(),
				html: '<div data-flix-invoice data-flix-language="' + $(that).attr("data-flix-language") + '"></div>',
				onReady: function onReady(ret) {

					new flix_inovoice(ret.container.find("[data-flix-invoice]"), ret.flix_setup_code, ret.flix_parent, atts);
				} });

			return false;
		});
	};

	this.get_buy_credits = function () {

		$(that).find(".flix-btn-payment").unbind("click");

		$(that).find(".flix-btn-payment").click(function () {

			var send = {
				"user": localStorage.getItem("flix_login"),
				"class": "frontend/flix-credits.php",
				"action": "check_user_entries"
			};

			$.post(post_url, send).success(function (data) {

				if (data == false) my_class.get_load_payment($(this));else {
					data = $.parseJSON(data);
					flix_parent.get_sweetalert(function () {
						swal.fire(data);
					});
					my_class.get_load_user_settings($(this), data.html);
				}
			});

			return false;
		});
	};

	this.get_load_payment = function (btn) {

		var cont = my_class;

		var atts = {
			onSuccess: function onSuccess() {
				cont.get_credit();
			}
		};

		flix_parent.get_new_section($(that), {
			title: btn.text(),
			html: '<div data-flix-payment data-flix-language="' + $(that).attr("data-flix-language") + '"></div>',
			onReady: function onReady(ret) {

				new flix_payment(ret.container.find("[data-flix-payment]"), ret.flix_setup_code, ret.flix_parent, atts).build();
			} });
	};

	this.get_load_user_settings = function (btn, data) {

		var cont = my_class;

		var atts = {
			onSuccess: function onSuccess(ret) {
				ret.container.closest(".flix-window").remove();cont.get_load_payment(btn);
			}
		};

		flix_parent.get_new_section($(that), {
			title: data,
			html: '<div data-flix-user data-flix-language="' + $(that).attr("data-flix-language") + '"></div>',
			onReady: function onReady(ret) {

				new flix_user(ret.container.find("[data-flix-user]"), ret.flix_setup_code, ret.flix_parent, atts).build();
			} });
	};

	this.do();
	return this;
};
"use strict";

var flix_delete_account = function flix_delete_account(that, flix_setup_code, flix_parent, atts) {

  var my_class = this;
  var url = FLIX_URLS.api + $(that).attr("data-flix-language") + "/user/delete_user";
  var login = localStorage.getItem("flix_login");
  var post_url = flix_parent.post_url;

  this.build = function () {

    flix_parent.get_styles();
    flix_parent.get_animateCSS();

    if ($(that).attr("data-flix-language")) post_url += "?l=" + $(that).attr("data-flix-language");

    flix_parent.set_post_url(post_url);

    $(that).html(flix_parent.get_loader());

    var html = $(that);
    $(that).html(flix_parent.get_login(html, function () {
      my_class.get_deleter();
    }));
  };

  this.get_deleter = function () {

    var fe = new flix_form_elements();

    var html = "";

    $.post(url, { user: login, action: "confirm" }).success(function (data) {

      var lang = data[1];

      html += fe.get_header({ type: "header", subtype: "h3", label: lang.delete });
      html += fe.get_paragraph({ type: "header", subtype: "p", description: lang.msg });

      html += fe.get_header({ type: "header", subtype: "h4", label: lang.title });
      html += '<div class="flix-col-md-12">';
      html += fe.get_button({ type: "button", columnName: "", subtype: "button", className: "flix-btn flix-btn-success flix-btn-yes", label: lang.yes });
      html += fe.get_button({ type: "button", columnName: "", subtype: "button", className: "flix-btn flix-btn-danger flix-btn-no", label: lang.no });
      html += '</div>';

      $(that).html(html);
      my_class.get_confirm(lang);
    });
  };

  this.get_confirm = function (lang) {

    my_class.get_confirm_yes(lang);
    my_class.get_confirm_no(lang);
  };

  this.get_confirm_no = function () {

    $(that).find(".flix-btn-no").unbind("click");

    $(that).find(".flix-btn-no").click(function () {

      $(that).closest(".flix-window").find(".flix-close-section").trigger("click");

      return false;
    });
  };

  this.get_confirm_yes = function (lang) {

    $(that).find(".flix-btn-yes").unbind("click");

    $(that).find(".flix-btn-yes").click(function () {

      var swal_ = {
        input: "password",
        title: lang.check,
        type: "warning",
        confirmButtonText: lang.submit,
        cancelButtonText: lang.no,
        showCloseButton: true,
        showCancelButton: true
      };

      swal.fire(swal_).then(function (ret) {

        if (typeof ret.value == "undefined" || !ret.value) return false;

        $.post(url, { user: login, password: ret.value.trim(), action: "check_password" }).success(function (check) {

          if (check[0]) {

            $.post(url, { user: login, action: "delete" }).success(function (data) {

              localStorage.setItem("flix_login", "");
              localStorage.removeItem("flix_login");
              location.reload();
            });
          } else {

            swal.fire({ type: "error", timer: "1000", showConfirmButton: false });
          }
        });
      });
    });
  };
};
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var flix_embed = function flix_embed(that, flix_setup_code, flix_parent) {

  var my_class = this;

  this.build = function () {

    flix_parent.get_styles();

    $(that).html(flix_parent.get_loader());

    $.post(FLIX_URLS.api + "de/crypt/decrypt", { data: $(that).attr("data-flix") }).done(function (data) {

      $.post(FLIX_URLS.api + data.language + "/assistent/get_data", data).done(function (data2) {

        my_class.get_html(data2[1], data);
      });
    });
  };

  this.get_html = function (data2, data) {

    var fe = new flix_form_elements($(that));

    var html = "";

    html += '<div class="flix-pull-right">';
    html += '<div class="flix-form-group">';

    var view = "days";

    if (data2.view == "l") data2.view = "list";

    if (data2.view == "d") data2.view = "days";

    if (data2.view == "h") data2.view = "hours";

    if (data2.view == "m") data2.view = "month";

    if (data2.view == "y") data2.view = "years";

    if (data2.type == "eventpicker") data2.view = "hours";

    if (typeof data2.view == "undefined") data2.view = view;else if (data2.view != "list") {
      view = data2.view;

      if (typeof my_class.save_view != "undefined") {

        view = my_class.save_view;
        data2.view = view;
      }
    }

    data2.login = data.user;

    if (data2.type == "datepicker") {

      var select = data2.view;

      if (select != "list") select = view;

      html += fe.get_toggleswitch({
        id: "type",
        label: "",
        columnName: "",
        required: true,
        values: [{ label: "<div class='flix-tooltip' data-tooltip='Kalender Ansicht'><i class='flix-glyphicon flix-glyphicon-calendar'></i></div>", value: view }, { label: "<div class='flix-tooltip' data-tooltip='Listen Ansicht'><i class='flix-glyphicon flix-glyphicon-list'></i></div>", value: "list" }],
        value: select

      });
    }

    html += '</div>';
    html += '</div>';

    html += '<div class="flix-clearfix"></div>';
    html += '<div class="flix-cal"></div>';
    html += '<div class="flix-clearfix"></div>';

    $(that).html(html);

    new flix_toggleswitch($(that), { onChange: function onChange(val) {

        data2.view = val;

        $(that).find(".flix-cal").html(flix_parent.get_loader());my_class.get_calendar(data2, data, val);
      } }).build();

    my_class.get_calendar(data2, data, view);

    if (typeof data2.view == "undefined" || data2.view != "list") {

      if (data2.type != "eventpicker") my_class.get_helper();
    }
  };

  this.get_calendar = function (data2, data, view) {

    if (data2.view == "list" && typeof data2.date != "undefined") delete data2.date;

    my_class.calendar = new flix_booking_calendar($(that).find(".flix-cal"), { saved_form: data2 });
    my_class.calendar.build();

    my_class.get_handle_form(data2, my_class.calendar, data.ID, data.language, data.user);
  };

  this.get_current_date = function () {

    return my_class.calendar.get_current_date();
  };

  this.get_helper = function () {

    $(that).append("<div class='flix-form-group'></div><div class='flix-text-center'><a href='#' class='flix-html-a flix-help'><i class='flix-glyphicon flix-glyphicon-question-sign'></i> Schnellhilfe</a></div>");

    $(that).find(".flix-help").unbind("click");

    $(that).find(".flix-help").click(function () {

      my_class.show_help();

      return false;
    });
  };

  this.show_help = function () {

    var links = [$(that).find(".flix-demo-calendar a").eq(0), $(that).find(".flix-demo-calendar a").eq(1), $(that).find(".flix-demo-calendar a").eq(2), $(that).find("[data-flix-date]").eq(0)];
    var help = ["Zurück", "Übergeordnete Ansicht", "Vorwärts", "Gewünschtes Datum auswählen"];

    $.each(links, function (k, v) {

      setTimeout(function () {
        v.attr("data-tooltip", help[k]);
        v.addClass("flix-tooltip flix-active");

        setTimeout(function () {

          v.removeClass("flix-active");
        }, k * 500 + 2000);
      }, k * 500);
    });
  };

  this.get_handle_form = function (saved_data, bc, id, lang, user) {

    var ff = new flix_html_form($(that));

    ff.get_handle_form(function (data) {

      var insert = my_class.get_better_data(saved_data, data);
      insert.begin = bc.time.data.begin.split;
      insert.end = bc.time.data.end.split;
      insert.ID = id;
      insert.user = user;

      var c = bc.calendar.get_atts();

      if (_typeof(c.service) == "object") insert.service = c.service;

      $.post(FLIX_URLS.api + lang + "/booking/save", insert).done(function (data) {

        if (data[0]) swal.fire({ type: "success", title: data[1], html: $(that).find(".flix-demo-booking .flix-date").html(), showConfirmButton: false, showCloseButton: true });else swal.fire({ type: "error", title: data[1], html: $(that).find(".flix-demo-booking .flix-date").html(), showConfirmButton: false, showCloseButton: true });

        my_class.get_send_validation_mail(data, user, lang);
      });
    });
  };

  this.get_send_validation_mail = function (data, user, lang) {

    $.post(FLIX_URLS.api + lang + "/booking/validation_mail", { user: user, ID: data[2] });
  };

  this.get_better_data = function (sd, d) {

    var r = { data: {}, email: "", tel: "" };

    $.each(d, function (k, v) {

      $.each(sd.form, function (k1, v1) {

        if (v1.id == k && v1.subtype == "email") r.email = v;

        if (v1.id == k && v1.subtype == "tel") r.tel = v;

        if (v1.id == k) {
          r.data[v1.label] = v;
          return true;
        }
      });
    });

    return r;
  };
};
"use strict";

var flix_entry_manage = function flix_entry_manage(that, flix_setup_code, flix_parent, atts) {

  var my_class = this;
  flix_parent.my_subclass = my_class;

  var login = localStorage.getItem("flix_login");
  var fe = new flix_form_elements();

  var post_url = flix_parent.post_url;

  my_class.entry_manager = new flix_entry_manager($(that), flix_setup_code, flix_parent, {

    language: {
      "change date": "Datum ändern",
      "ical": "Termin in eigenen Kalender exportieren",
      "blacklist": "Auf Blacklist setzen",
      "change booking status": "Buchungsstatus ändern",
      cancellation: "Absage",
      commitment: "Zusage",
      open: "Offen",
      yes: "Ja",
      no: "Nein",
      "userchat": "Chatnachrichten",
      "internal notes": "Interne Notizen",
      "delete booking": "Terminbuchung löschen",
      delete: "Löschen",
      "no entries": "Keine Einträge",
      "all data will be deleted": "Alle Daten werden gelöscht",
      save: "speichern"
    }
  });

  this.build = function () {

    my_class.entry_manager.build();
  };
};
"use strict";

var flix_form_codegen = function flix_form_codegen(that, flix_setup_code, flix_parent, atts) {

	var my_class = this;
	flix_parent.my_subclass = my_class;

	var post_url = flix_parent.post_url;
	var fe = new flix_form_elements();
	var login = localStorage.getItem("flix_login");
	var wizard = new flix_termin_wizard(that, flix_setup_code, flix_parent);

	this.build = function () {

		flix_parent.get_styles();

		if ($(that).attr("data-flix-language")) post_url += "?l=" + $(that).attr("data-flix-language");

		flix_parent.set_post_url(post_url);

		$(that).html(flix_parent.get_loader());

		var html = $(that);

		$(that).html(flix_parent.get_login(html, function () {
			my_class.get_codegen();
		}));
	};

	this.get_codegen = function () {

		new flix_overhead(that, {
			onReady: function onReady(data) {
				my_class.get_functions(data);data.header.find(".flix-btn-embed").remove();
			},
			onChange: function onChange(data) {
				my_class.get_functions(data);
			}
		}).build();
	};

	this.get_functions = function (data) {

		var fo = new flix_overhead(false, {});

		fo.get_saved_data(function () {

			my_class.crypted = fo.crypted;

			my_class.get_html(data);
		});
	};

	this.get_html = function (data) {

		var fe = new flix_form_elements();

		var html = "";

		html += fe.get_select({ id: "calendar_view", label: "Kalender Ansicht", value: "days", values: [{ label: "Jahres-Überblick", value: "year" }, { label: "Monats-Überblick", value: "month" }, { label: "Tages-Überblick", value: "days" }, { label: "Stunden-Ansicht", value: "hours" }, { label: "Listen-Ansicht", value: "list" }], columnName: 12, required: true });

		html += fe.get_header({ type: "header", subtype: "h3", columnName: 12, label: "Einbettungs-Code" });
		html += fe.get_textarea({ id: "code", columnName: 12, readonly: true, description: "Bitte den Code auf der eigenen Website an der gewünschten Stelle einfügen" });

		html += fe.get_header({ type: "header", subtype: "h3", columnName: 12, label: "Demo-Ansicht" });

		html += '<div class="flix-col-md-12">';
		html += '<div class="flix-builder"></div>';
		html += '</div>';

		data.stage.html(html);

		my_class.pick_event(data);
		my_class.get_copy_to_clipboard();
		my_class.get_change_view(data);
	};

	this.get_change_view = function (data) {

		data.stage.find("#calendar_view").unbind("change");

		data.stage.find("#calendar_view").change(function () {

			my_class.calendar_data.view = $(this).val();

			var crypt = { ID: data.id, user: login, language: $(that).attr("data-flix-language"), view: my_class.calendar_data.view };

			$.post(FLIX_URLS.api + crypt.language + "/crypt/encrypt", crypt).success(function (encrypt) {

				my_class.update_textarea(data, encrypt.encrypt);

				my_class.update_calendar_view(encrypt.encrypt);
			});

			return false;
		});
	};

	this.pick_event = function (data) {

		my_class.update_textarea(data, my_class.crypted[data.id]);

		$.post(FLIX_URLS.api + $(that).attr("data-flix-language") + "/assistent/get_data", { user: login, ID: data.id }).success(function (ret) {

			my_class.calendar_data = ret[1];

			my_class.update_calendar_view(my_class.crypted[data.id]);
		});
	};

	this.update_textarea = function (data, crypt) {

		data.stage.find("textarea").val('<div data-flix="' + crypt + '"></div><script src="' + FLIX_URLS.flix + 'assets/js/dynamic/flix-setup.js?ver=1"></script>');
	};

	this.update_calendar_view = function (crypt) {

		$(that).find(".flix-builder").html(flix_parent.get_loader());

		new flix_ressources_embed($(that).find(".flix-builder"), flix_setup_code, flix_parent, { crypt: crypt, lang: $(that).attr("data-flix-language") }).build();

		//new flix_booking_calendar(, {saved_form: my_class.calendar_data}).build();

		var ff = new flix_html_form($(that).find(".flix-builder"));

		ff.get_handle_form(function (data) {

			swal.fire({ type: "success", title: "Demo! Jetzt würde speichern erfolgen." });
		});
	};

	this.get_copy_to_clipboard = function () {

		$(that).find("#code").unbind("click");

		$(that).find("#code").click(function () {

			$(this).select();
			document.execCommand('copy');

			swal.fire({ "type": "success", "timer": 2000, "title": "In Zwischenablage kopiert", "showConfirmButton": false, "showCloseButton": true });

			return false;
		}).css({ cursor: "pointer" });
	};

	return this;
};
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var flix_form_gen = function flix_form_gen(that, flix_setup_code, flix_parent, atts) {

	var my_class = this;
	flix_parent.my_subclass = my_class;

	var post_url = flix_parent.post_url;

	this.do = function () {

		if (typeof atts != "undefined" && typeof atts.lang != "undefined") my_class.language = atts.lang;else if (typeof $(that).attr("data-flix-language") != "undefined") my_class.language = $(that).attr("data-flix-language");

		post_url += "?l=" + my_class.language;

		flix_parent.set_post_url(post_url);

		flix_parent.get_styles();
		flix_parent.get_animateCSS();

		my_class.admin_mode = false;

		if (typeof $(that).attr("data-flix-formbuilder-admin") != "undefined") my_class.admin_mode = true;

		if ((typeof atts === "undefined" ? "undefined" : _typeof(atts)) == "object" && typeof atts.autorun != "undefined" && atts.autorun == false) return false;

		$(that).html(flix_parent.get_loader());

		setTimeout(function () {

			var html = $(that);

			$(that).html(flix_parent.get_login(html, function () {
				my_class.get_formbuilder_menu(false);my_class.get_formbuilder();
			}));
		}, 1000);
	};

	this.get_templates = function (fields) {

		var templates = {};

		$.each(fields, function (k, v) {

			templates[v.attrs.type] = function (fieldData) {

				return {
					field: '<span id="' + fieldData.name + '"></span>',
					onRender: function onRender() {

						var send = {};
						send.action = "get_field_render";
						send.field = v.attrs.type;
						send["class"] = "frontend/flix-form-builder.php";
						send.settings = fieldData;

						$.post(post_url, send).success(function (data) {

							$("#" + fieldData.name).html(data);
						});
					}

				};
			};
		});

		return templates;
	};

	this.get_delete_formbuilder = function () {

		$(that).find("[data-flix-delete-formbuilder]").unbind("click");

		$(that).find("[data-flix-delete-formbuilder]").click(function () {

			$(that).find(".flix_alert-delete-msg").remove();

			var btn = $(this);

			var send = {};
			send.action = "get_delete_alert";
			send["class"] = "frontend/flix-form-builder.php";
			send.title = $(that).find("[name='formbuilder_title']").val();
			send.form_id = $(that).find("[name='formbuilder_ID']").val();
			send.user = localStorage.getItem("flix_login");
			send.admin_mode = my_class.admin_mode;

			flix_parent.get_sweetalert(function () {

				$.post(post_url, send).success(function (data) {

					data = $.parseJSON(data);
					swal.fire(data).then(function (response) {

						if (typeof response.value == "undefined" || !response.value) return false;

						send.action = "set_delete_formbuilder";

						$.post(post_url, send).success(function (data) {

							data = $.parseJSON(data);

							if (data[0]) {

								btn.addClass("animated bounceOut");
								$(that).html(flix_parent.get_loader());

								setTimeout(function () {

									my_class.get_formbuilder();
									my_class.get_formbuilder_menu(false);
								}, 3000);

								return false;
							}

							btn.closest(".flix_form-group").after(data[1]);

							setTimeout(function () {
								$(that).find(".flix_alert-delete-msg").addClass("animated bounceOut");

								setTimeout(function () {

									$(that).find(".flix_alert-delete-msg").remove();
								}, 1000);
							}, 3000);
						});
					});
				});
			});

			return false;
		});
	};

	this.get_save_formbuilder = function () {

		$(that).find("[data-flix-save-formbuilder]").unbind("click");

		$(that).find("[data-flix-save-formbuilder]").click(function () {

			var btn = $(this);

			var send = {};
			send.action = "set_save_formbuilder";
			send["class"] = "frontend/flix-form-builder.php";
			send.title = $(that).find("[name='formbuilder_title']").val();
			send.form_id = $(that).find("[name='formbuilder_ID']").val();
			send.user = localStorage.getItem("flix_login");
			send.admin_mode = my_class.admin_mode;

			send.data = my_class.formBuilder.actions.getData('json', true);
			send.data = $.parseJSON(send.data);

			if (send.data.length == 0) {

				btn.addClass("animated shake");

				setTimeout(function () {
					btn.removeClass("animated shake");
				}, 1000);

				return false;
			}

			$.post(post_url, send).success(function (data) {

				data = $.parseJSON(data);

				my_class.addClass("animated bounceOut");

				setTimeout(function () {

					my_class.removeClass("animated bounceOut");

					$(that).html('<div class="flix_form-group">' + data[2] + '</div><div class="flix_preview"><div class="flix_panel flix_panel-default"><div class="flix_panel-heading">' + data[3] + '</div><div class="flix_panel-body">' + data[1] + '</div></div></div>');

					$(that).find(".flix_preview [data-flix]").flix_termin_flix({ preview: true });

					$(that).find("a.flix_btn-back").unbind("click");

					$(that).find("a.flix_btn-back").click(function () {

						my_class.get_formbuilder();
						my_class.get_formbuilder_menu($(that).find(".flix_preview [data-flix]").attr("data-flix"));

						return false;
					});
				}, 1000);
			});

			return false;
		});
	};

	this.set_clear_editor = function () {

		$(that).find(".flix_clear-form").unbind("click");

		$(that).find(".flix_clear-form").click(function () {

			var send = {};
			send["class"] = "frontend/flix-form-builder.php";
			send.action = "get_new_formbuilder_id";

			$.post(post_url, send).success(function (id) {

				$(that).find("input#formbuilder_ID").val(id);
				$(that).find("input#formbuilder_title").val("");
				$(that).find("[data-flix-delete-formbuilder]").addClass("flix_hide");

				my_class.formBuilder.actions.setData(false);
			});
		});
	};

	this.get_generate_editor = function () {

		$(that).find("form").submit(function () {

			var form_id = $(this).attr("id");

			var send = {};
			send.form_id = $(this).find("[name=" + form_id + "]").val();
			send.user = localStorage.getItem("flix_user");
			send.form = form_id;
			send["class"] = "frontend/flix-form-builder.php";
			send.action = "get_user_form_data";
			send.admin_mode = my_class.admin_mode;

			var stage = $(that).find("[data-flix-formbuilder-stage]");

			//stage.html( flix_parent.get_loader() );

			$.post(post_url, send).success(function (data) {

				data = $.parseJSON(data);

				$(that).find("[name='formbuilder_title']").val(data.title);
				$(that).find("[name='formbuilder_ID']").val(data.form_id);

				$(that).find("[data-flix-delete-formbuilder]").removeClass("flix_hide");

				if (data.btn_delete_hide) {
					$(that).find("[data-flix-delete-formbuilder]").addClass("flix_hide");
				}

				my_class.formBuilder.actions.setData(JSON.stringify(data.data_));

				flix_parent.set_to_scroll_position($(that).find(".flix_formbuilder-settings"));
			});

			return false;
		});
	};

	this.get_formbuilder_menu = function (id) {

		$(that).html(flix_parent.get_loader());

		var send = {};
		send.action = "get_formbuilder_menu";
		send["class"] = "frontend/flix-form-builder.php";
		send.user = localStorage.getItem("flix_login");
		send.editor = id;
		send.admin_mode = my_class.admin_mode;

		$.post(post_url, send).success(function (data) {

			flix_parent.get_select2(function () {

				$(that).html(data);
				$(that).find("select").select2({ language: my_class.language });

				my_class.get_generate_editor();
				my_class.set_clear_editor();
				my_class.get_save_formbuilder();
				my_class.get_delete_formbuilder();
				flix_parent.set_logout();

				if (id) {

					setTimeout(function () {
						$("select#user_form").val(id);
						$('select#user_form').trigger('change.select2');

						$("form#user_form").trigger("submit");
					}, 1000);
				}
			});
		});
	};

	this.set_push_data = function (formbuilder, data) {

		// data = JSON.stringify() !!! ///


		formbuilder.actions.setData(data[0].value);
	};

	this.get_formbuilder = function (callback) {

		flix_setup_code.flix_load_script('https://cdn.hit-or-shit.com/tools/jquery-ui/jquery-ui.js?v=' + $.now(), _typeof($.fn.sortable), function () {
			flix_setup_code.flix_load_script('https://cdn.hit-or-shit.com/tools/jquery-ui/jquery.ui.touch-punch.min.js?v=' + $.now(), _typeof($.fn.touchpunch), function () {
				flix_setup_code.flix_load_script(FLIX_URLS.cdn + 'js/form-builder/js/form-builder.min.js', _typeof($.fn.formBuilder), function () {

					var send = {};
					send.action = "get_formbuilder_data";
					send["class"] = "frontend/flix-form-builder.php";

					if ((typeof atts === "undefined" ? "undefined" : _typeof(atts)) == "object") send.settings = atts;

					$.post(post_url, send).success(function (fbOptions) {

						fbOptions = $.parseJSON(fbOptions);

						fbOptions.templates = my_class.get_templates(fbOptions.fields);

						my_class.formBuilder = $(that).find("[data-flix-formbuilder-stage]").formBuilder(fbOptions);

						my_class.formBuilder.promise.then(function (fb) {

							if (typeof callback == "function") callback(my_class.formBuilder);

							$(that).find(".cb-wrap").before("<div class='flix-alert flix-alert-info'>" + fbOptions.dragAndDropHint + "</div>");
						});

						my_class.editing = true;

						//my_class.set_save_form();
						//my_class.set_delete_form();
						//my_class.get_user_form_data();

					});
				});
			});
		});
	};

	this.do();
	return this;
};
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var flix_galery = function flix_galery(that, flix_setup_code, flix_parent, attr) {

	var my_class = this;
	flix_parent.my_subclass = my_class;

	var post_url = flix_parent.post_url;

	this.do = function () {

		flix_parent.get_styles();
		flix_parent.get_animateCSS();

		if ($(that).attr("data-flix-language")) post_url += "?l=" + $(that).attr("data-flix-language");

		flix_parent.set_post_url(post_url);

		$(that).html(flix_parent.get_loader());

		setTimeout(function () {

			var html = $(that);

			$(that).html(flix_parent.get_login(html, function () {
				$(that).html(flix_parent.get_loader());my_class.get_galery();
			}));
		}, 1000);
	};

	this.set_delete_image = function (btn) {

		var send = {};
		send.action = "delete_image";
		send["class"] = "frontend/flix-galery.php";
		send.img_id = btn.closest("[data-flix-galery-img]").attr("data-flix-galery-img");
		send.user = localStorage.getItem("flix_login");

		$.post(post_url, send).success(function (data) {

			btn.closest("[data-flix-galery-img]").addClass("animated bounceOut");

			setTimeout(function () {

				my_class.get_galery();
			}, 800);
		});
	};

	this.get_delete_image = function () {

		$(that).find("[data-flix-galery-img] .flix_btn-delete").unbind("click");

		$(that).find("[data-flix-galery-img] .flix_btn-delete").click(function () {

			var btn = $(this);

			flix_parent.get_sweetalert(function () {

				var send = {};
				send["class"] = "frontend/flix-galery.php";
				send.action = "get_delete_txt";

				$.post(post_url, send).success(function (data) {

					//console.log(data);

					data = $.parseJSON(data);

					swal.fire(data).then(function (willDelete) {

						if (typeof willDelete.value != "undefined" && willDelete.value == true) my_class.set_delete_image(btn);
					});
				});
			});

			return false;
		});
	};

	this.get_galery = function () {

		var send = {};
		send.action = "get_galery";
		send["class"] = "frontend/flix-galery.php";
		send.user = localStorage.getItem("flix_login");

		if (typeof attr != "undefined" && typeof attr.mode != "undefined") {
			send.mode = attr.mode;

			if (typeof attr != "undefined" && typeof attr.container != "undefined" && attr.container.find(".flix_upload_preview img").attr("src")) send.current_image = attr.container.find(".flix_upload_preview img").attr("src");
		}

		$(that).html(flix_parent.get_loader());

		$.post(post_url, send).success(function (data) {

			$(that).html(data);

			my_class.get_play_youtube();

			if (typeof attr != "undefined" && typeof attr.onReady == "function") attr.onReady();

			if (typeof attr != "undefined" && _typeof(attr.editor) == "object") {
				my_class.get_pick_editor(attr.editor);
				my_class.get_photosearch(attr.editor);
				return false;
			} else if (typeof attr != "undefined" && typeof attr.mode != "undefined" && attr.mode == "picker") {
				my_class.get_pick_image();

				return false;
			}

			flix_parent.set_upload({ "output": { "width": 300, "height": 300 }, "resize": 500, "callback": function callback() {
					my_class.get_galery();
				} });

			my_class.get_delete_image();

			my_class.get_add_youtube();
		});
	};

	this.get_pick_pexels_img = function (editor) {

		$("[data-flix-pexels-src]").unbind("click");

		$("[data-flix-pexels-src]").click(function () {

			var send = {

				"user": localStorage.getItem("flix_login"),
				"src": $(this).attr("data-flix-pexels-src"),
				"photographer": $(this).attr("data-flix-pexels-photographer"),
				"id": $(this).attr("data-flix-pexels-id"),
				"url": FLIX_URLS.flix

			};

			$.post(FLIX_URLS.api + $(that).attr("data-flix-language") + "/images/save_pexels", send).always(function (data) {
				console.log(data);
			}).success(function (url) {

				editor.insertContent('<img class="flix-img-responsive" style="width: 100%" src="' + url[0] + '"/><div class="flix-badge">Photo by: ' + send.photographer + ' on pexels.com</div>');
				swal.close();
			});

			return false;
		});
	};

	this.get_photosearch = function (editor) {

		$("#photosearch").submit(function () {

			var send = {
				"per_page": 8,
				"page": 1,
				"query": $(this).find("[name='search']").val()

			};

			$("[data-flix-pexels-src]").remove();

			$.post(FLIX_URLS.api + $(that).attr("data-flix-language") + "/images/pexels", send).always(function (data) {
				console.log(data);
			}).success(function (data) {

				if (typeof data.total_results == "undefined") {

					$("#photosearch").addClass("animated shake");

					setTimeout(function () {

						$("#photosearch").removeClass("animated shake");
					}, 1000);

					return false;
				}

				var header = $(that).find("[data-elem='get_elem_header']").closest("div");

				$.each(data.photos, function (k, v) {

					var src = v.src.square;

					var html = '<div class="flix-col-md-3" data-flix-pexels-src="' + v.src.medium + '" data-flix-pexels-id="' + v.id + '"" data-flix-pexels-photographer="' + v.photographer + '"><div class="flix-form-group"><div class="flix_upload_preview"><img src="' + src + '" class="flix_img_preview flix-img-responsive flix-img-thumbnail" style="cursor: pointer;"></div></div><div class="flix-form-group"><i class="flix-glyphicon flix-glyphicon-camera"></i> ' + v.photographer + ' by pexels.com<div class="flix-clearfix"></div></div>';

					header.after(html);
				});

				my_class.get_pick_pexels_img(editor);
			});

			return false;
		});
	};

	this.get_play_youtube = function () {

		$(".flix_btn-play_video").unbind("click");

		$(".flix_btn-play_video").click(function () {

			var btn = $(this);

			my_class.get_youtube_iframe(btn.closest("[data-flix-galery-img]").attr("data-flix-galery-img"), function (iframe) {

				flix_parent.get_sweetalert(function () {

					swal.fire({ "html": iframe, "showCloseButton": true, "showConfirmButton": false });
				});
				//btn.replaceWith(iframe);
			});

			return false;
		});
	};

	this.get_youtube_iframe = function (id, callback) {

		var send = {

			"action": "get_youtube_embed",
			"class": "frontend/flix-galery.php",
			"ID": id,
			"user": localStorage.getItem("flix_login")
		};

		$.post(post_url, send).success(function (data) {

			callback(data);
		});
	};

	this.get_add_youtube = function () {

		$(that).find(".flix_btn-add-youtube").unbind("click");

		$(that).find(".flix_btn-add-youtube").click(function () {

			var title = $(this).closest("[data-youtube-url]").attr("data-youtube-url");

			flix_parent.get_sweetalert(function () {

				swal.fire({
					"title": title,
					"input": "text",
					"inputPlaceholder": "https://www.youtube.com/watch?v=XXXX"

				}).then(function (response) {

					var send = {
						"action": "set_youtube",
						"youtube_url": response.value,
						"class": "frontend/flix-galery.php",
						"user": localStorage.getItem("flix_login")
					};

					$.post(post_url, send).success(function (data) {

						data = $.parseJSON(data);

						swal.fire(data[1]);

						if (data[0] == true) {

							setTimeout(function () {

								my_class.get_galery();
							}, data[1].timer + 500);
						}
					});
				});
			});

			return false;
		});
	};

	this.get_pick_editor = function (editor) {

		$(that).find("img").unbind("click");

		$(that).find("[data-flix-galery-img] img").css("cursor", "pointer").click(function () {

			var url = $(this).attr("src");

			if ($(this).hasClass("flix_youtube-placeholder")) {

				my_class.get_youtube_iframe($(this).closest("[data-flix-galery-img]").attr("data-flix-galery-img"), function (iframe) {

					editor.insertContent(iframe);
					swal.close();
				});
			} else {
				editor.insertContent('<img class="flix-img-responsive" style="width: 100%"  src="' + url + '"/>');
				swal.close();
			}

			return false;
		});
	};

	this.get_pick_image = function () {

		$(that).find("img").unbind("click");

		$(that).find("[data-flix-galery-img] img").css("cursor", "pointer").click(function () {

			var url = $(this).attr("src");

			attr.container.find(".flix_upload_preview .flix_img_preview").attr("src", url);

			var input = attr.container.find(".flix-upload-btn-wrapper input[type=hidden]");
			var key = input.attr("id");

			var array = {};
			array[key] = url;

			var val = JSON.stringify(array);

			input.attr("value", val);

			$(that).html("");

			flix_parent.set_to_scroll_position(attr.container.find(".flix_upload_preview"));

			swal.close();

			return false;
		});
	};

	this.do();
	return this;
};
"use strict";

var flix_help_center = function flix_help_center(that, flix_setup_code, flix_parent, atts) {

  var my_class = this;
  my_class.lang = $(that).attr("data-flix-language");

  var post_url = flix_parent.post_url;

  this.do = function () {

    flix_parent.get_styles();
    flix_parent.get_animateCSS();

    if ($(that).attr("data-flix-language")) post_url += "?l=" + $(that).attr("data-flix-language");

    flix_parent.set_post_url(post_url);

    $(that).html(flix_parent.get_loader());

    $(that).html(flix_parent.get_loader());

    var html = $(that);

    $(that).html(flix_parent.get_loader());
    my_class.get_center();
  };

  this.get_center = function () {

    var url = FLIX_URLS.api;

    $.post(url + $(that).attr("data-flix-language") + "/helpcenter/get_raw_pages_from_pagebuilder").success(function (data) {

      var pagination = "<div class='flix-text-right flix-html-html'><div class='flix-subpages'></div><div class='flix-clearfix'></div></div>";
      var html = "";

      html += '<div class="flix-well flix-html-html">';
      html += '<div class="flix-input-group">';
      html += '<span class="flix-input-group-addon"><i class="flix-glyphicon flix-glyphicon-search"></i></span>';
      html += '<input type="text" class="flix-form-control flix-search">';
      html += '</div>';
      html += '</div>';

      html += pagination;
      html += '<div class="flix-results"></div>';
      html += pagination;

      $(that).html(html);

      new flix_pagination($(that).find(".flix-subpages"), {

        data: data,
        onChange: function onChange(d, start, end) {
          my_class.get_list_rows(d, start, end);
        }

      }).build();

      my_class.get_search(data);

      my_class.get_preset_search();
    });
  };

  this.get_list_rows = function (data, start, end) {

    var html = "";

    var keys = Object.keys(data);

    for (var i = start; i <= end; i++) {

      if (typeof data[keys[i]] == "undefined" || typeof data[keys[i]].title == "undefined") continue;

      html += '<div class="flix-panel flix-panel-default flix-html-html">';
      html += '<a href="#" data-filter="' + keys[i] + '"><div class="flix-panel-heading">' + data[keys[i]].title + '</div></a>';
      html += '</div>';
    }

    $(that).find(".flix-results").html(html);

    my_class.get_filter(data);
  };

  this.get_preset_search = function () {

    if (typeof atts == "undefined") return false;

    if (typeof atts.search == "undefined") return false;

    $(that).find("input.flix-search").val(atts.search);

    $(that).find("input.flix-search").trigger("keyup");

    $(that).find("input.flix-search").prop("readonly", true);
  };

  this.get_filter = function (data) {

    $(that).find("[data-filter]").unbind("click");

    $(that).find("[data-filter]").click(function () {

      var id = data[$(this).attr("data-filter")];

      flix_parent.get_new_section($(that), { "html": '<div class="flix-html-html">' + id.html + '</div>', "onReady": function onReady() {} });

      return false;
    });
  };

  this.get_search = function (data) {

    $(that).find("input.flix-search").keyup(function () {

      var keyword = $(this).val().toLowerCase();

      var r = {};

      $.each(data, function (key, val) {

        if (val.txt.toLowerCase().indexOf(keyword) != -1) r[key] = val;
      });

      new flix_pagination($(that).find(".flix-subpages"), {

        data: r,
        onChange: function onChange(d, start, end) {
          my_class.get_list_rows(d, start, end);
        }

      }).build();

      return false;
    });
  };

  this.do();
};
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var flix_help_manager = function flix_help_manager(that, flix_setup_code, flix_parent) {

  var my_class = this;
  my_class.lang = $(that).attr("data-flix-language");

  var post_url = flix_parent.post_url;

  this.do = function () {

    flix_parent.get_styles();
    flix_parent.get_animateCSS();

    if ($(that).attr("data-flix-language")) post_url += "?l=" + $(that).attr("data-flix-language");

    flix_parent.set_post_url(post_url);

    $(that).html(flix_parent.get_loader());

    $(that).html(flix_parent.get_loader());

    var html = $(that);

    $(that).html(flix_parent.get_login(html, function () {
      $(that).html(flix_parent.get_loader());
      my_class.get_manager();
    }));
  };

  this.get_manager = function () {

    $.post(FLIX_URLS.api + my_class.lang + "/user/get_user", {
      user: localStorage.getItem("flix_login")
    }).success(function (user) {

      if (!user[0] || user[1].role != "flix_admin") {

        $(that).html("<h1>Zugriff verweigert.</h1>");
        localStorage.removeItem("flix_login");
        return false;
      }

      my_class.set_manager(user[1]);
    });
  };

  this.set_manager = function (user) {

    $(that).html(flix_parent.get_loader());

    flix_setup_code.flix_load_css('https://pagebuilder.terminflix.de/app/css/style-min.css', function () {
      flix_setup_code.flix_load_script('https://pagebuilder.terminflix.de/app/js/draggable.bundle-min.js', typeof Draggable === "undefined" ? "undefined" : _typeof(Draggable), function () {
        flix_setup_code.flix_load_script('https://pagebuilder.terminflix.de/app/js/ace2/src-min-noconflict/ace.js', typeof ace === "undefined" ? "undefined" : _typeof(ace), function () {
          flix_setup_code.flix_load_script('https://pagebuilder.terminflix.de/app/js/global-min.js', _typeof($.fn.page_builder), function () {

            var html = "";
            html += "<a href='#' class='flix-html-html flix-btn flix-btn-danger flix-btn-xs flix-logout' style='position: fixed; right:0; top:0; margin: 20px;'>Abmelden</a>";
            html += '<div id="help_builder_management" class="flix-html-html"></div>';
            html += '<div id="page_builder" class="flix-html-html"></div>';

            $(that).html(html);

            flix_parent.set_logout();

            $(that).find("#help_builder_management").page_manager({

              "documents": FLIX_URLS.api + my_class.lang + '/helpcenter/get_pages_from_pagebuilder',
              "document": {
                "title": "Demo",
                "language": my_class.lang,
                "author": user.username
              },
              "save_url": FLIX_URLS.api + my_class.lang + '/helpcenter/save_page_from_pagebuilder',
              "delete_url": FLIX_URLS.api + my_class.lang + '/helpcenter/delete_page_from_pagebuilder',
              "callback_after_save": function callback_after_save(data, b, page_builder) {
                var code = new page_builder_codeview(b, page_builder);
                code.showSuccessMsg(data[1]);
                $(that).find("#help_builder_management").html("");
                $(that).find("#help_builder_management").page_manager(page_builder.settings);
              },
              "imgs": "https://imgserver.terminflix.de/app/?get_json&user=" + localStorage.getItem("flix_login") + "&url=" + FLIX_URLS.api + my_class.lang,
              "embedCode": [FLIX_URLS.api + my_class.lang + "/embedcode/get_code", false],
              "blocks": "https://pagebuilder.terminflix.de/app/php/json.php?f=blocks",
              "blocks_img": "https://pagebuilder.terminflix.de/app/img",
              "blocks_url": "https://pagebuilder.terminflix.de/app/php/html.php?f=",
              "preview_url": FLIX_URLS.flix + my_class.lang + "/",
              "icons": FLIX_URLS.api + my_class.lang + "/images/icons",
              "tinycss": FLIX_URLS.cdn + 'php/page_builder/app/css/style-min.css',
              "menu_builder": {
                "load": FLIX_URLS.api + my_class.lang + "/helpcenter/get_menu_from_pagebuilder",
                "save": FLIX_URLS.api + my_class.lang + "/helpcenter/save_menu_from_pagebuilder"
              }
            });
          });
        });
      });
    });
  };

  this.do();
};
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var flix_hit_dashboard = function flix_hit_dashboard(that, flix_setup_code, flix_parent, atts) {

  var my_class = this;
  var post_url = flix_parent.post_url;

  this.build = function () {

    flix_parent.get_styles();
    flix_parent.get_animateCSS();

    if ($(that).attr("data-flix-language")) post_url += "?l=" + $(that).attr("data-flix-language");

    flix_parent.set_post_url(post_url);

    $(that).html(flix_parent.get_loader());

    var html = $(that);

    $(that).html(flix_parent.get_login(html, function () {
      my_class.get_codegen(false);
    }));
  };

  this.get_codegen = function () {

    $(that).html(flix_parent.get_loader());

    flix_setup_code.flix_load_script(FLIX_URLS.hit_url + 'assets/js/dynamic/hit-setup.js?ver=1', typeof hit_setup === "undefined" ? "undefined" : _typeof(hit_setup), function () {

      flix_parent.get_sweetalert(function () {

        new flix_overhead(that, {
          onReady: function onReady(data) {
            my_class.get_change_event(data);
          },
          onChange: function onChange(data) {
            my_class.get_change_event(data);
          }
        }).build();
      });
    });
  };

  this.get_change_event = function (data) {

    $(that).find(".flix-survey-container").html("<div data-hit-codegen data-hit-language='" + $(that).attr("data-flix-language") + "'></div>");
    my_class.get_survey(data);
  };

  this.get_survey = function (ret) {

    localStorage.setItem("hit_login", localStorage.getItem("flix_login"));

    var settings = { settings: { style: "button", label: "save", classes: "hit-btn hit-btn-success hit-btn-block" }, onSave: function onSave(ret2) {
        my_class.get_save_code(ret.id, ret2.code);
      } };

    var send = {
      "user": localStorage.getItem("flix_login"),
      "event": ret.id,
      "action": "get_saved_code",
      "class": "frontend/hit-survey-connection.php"
    };

    $.post(post_url, send).success(function (code) {

      settings.settings.code = false;

      if (code) settings.settings.code = code;

      new hit_codegen(ret.stage, hit_setup_code, new hit_survey_hit(false, hit_setup_code), settings);
    });
  };

  this.get_save_code = function (id, code) {

    var send = {

      "user": localStorage.getItem("flix_login"),
      "survey": code,
      "event": id,
      "action": "save_survey",
      "class": "frontend/hit-survey-connection.php"

    };

    $.post(post_url, send).success(function (data) {

      swal.fire({ title: data, type: "success", timer: 2500, showConfirmButton: false });
    });
  };

  return this;
};
"use strict";

var flix_inovoice = function flix_inovoice(that, flix_setup_code, flix_parent, atts) {

  var my_class = this;
  flix_parent.my_subclass = my_class;

  var post_url = flix_parent.post_url;

  this.do = function () {

    flix_parent.get_styles();
    flix_parent.get_animateCSS();

    if ($(that).attr("data-flix-language")) post_url += "?l=" + $(that).attr("data-flix-language");

    flix_parent.set_post_url(post_url);

    $(that).html(flix_parent.get_loader());

    var html = $(that);

    $(that).html(flix_parent.get_login(html, function () {
      my_class.get_inovoice();
    }));
  };

  this.get_inovoice = function () {

    var send = {
      user: localStorage.getItem("flix_login"),
      class: "frontend/flix-inovoice.php",
      action: "get_inovoice"
    };

    $.post(post_url, send).success(function (data) {

      $(that).html(data);
    });
  };

  this.do();

  return this;
};
"use strict";

var chat = function chat(that, settings) {

  var my_class = this;

  my_class.settings = settings;

  my_class.step = 0;
  my_class.responses = {};

  this.run = function () {

    my_class.getData(my_class.settings.translation, function (data) {
      my_class.translate = data;my_class.getContainer();my_class.msg = new chat_msg(my_class.settings, data);

      my_class.getData(my_class.settings.data, function (data) {

        my_class.chat_msg = data;

        if (typeof my_class.settings.init == "function") my_class.settings.init(my_class);else my_class.start_app();
      });
    });
  };

  this.start_app = function () {

    my_class.try(function () {
      my_class.chat_container.append(my_class.msg.setSendMsg("bot", my_class.chat_msg[my_class.step]));
    });

    my_class.try(function () {
      my_class.getAutoNext(my_class.chat_msg[my_class.step]);
    });
    my_class.try(function () {
      my_class.getAnswerType(my_class.chat_msg[my_class.step]);
    });
    my_class.try(function () {
      my_class.input_container.attr("placeholder", my_class.chat_msg[my_class.step].placeholder);
    });

    my_class.getMsgListener(function (response) {

      my_class.responses[my_class.step] = response;

      my_class.settings.response(my_class);
    });
  };

  this.getAnswerType = function (part) {

    if (typeof part.type == "undefined") return false;

    switch (part.type) {

      case "select":
        $(that).find("#input #msg").replaceWith('<select name="msg" id="msg"></select>');

        $.each(part.select, function (k, v) {
          $(that).find("#input #msg").append("<option value='" + k + "'>" + v + "</option>");
        });
        my_class.input_container = $(that).find("#input select");

        break;

      case "password":
        $(that).find("#input #msg").replaceWith('<input type="password" name="msg" id="msg"/>');
        break;

      case "textarea":
        $(that).find("#input #msg").replaceWith('<textarea name="msg" id="msg" style="width: 100%; height: 200px;"></textarea>');
        break;

      default:

        $(that).find("#input #msg").replaceWith('<input type="text" name="msg" id="msg"/>');
        my_class.input_container = $(that).find("#input input");

    }
  };

  this.try = function (tryme) {

    try {
      tryme();
    } catch (error) {

      //console.log(error);
    }
  };

  this.getAutoNext = function (data) {

    if (typeof data.next == "undefined") return false;

    my_class.step = data.next;
    my_class.loading();

    setTimeout(function () {

      my_class.start_app();
      my_class.scrollDwn();
      my_class.delLoading();
    }, data.timer);
  };

  this.user_input = function (resp) {

    my_class.responses[my_class.step] = resp;

    //my_class.step++;
    my_class.scrollDwn();
  };

  this.scrollDwn = function () {

    my_class.chat_container.closest("#chat_stage").animate({
      scrollTop: my_class.chat_container.closest("#chat_stage")[0].scrollHeight
    }, 'slow');
  };

  this.loading = function () {
    my_class.input_container.prop("disabled", "true");
    my_class.chat_container.closest("#chat_stage").append(my_class.msg.getSpinner());
  };

  this.delLoading = function () {

    my_class.chat_container.closest("#chat_stage").find(".chat-loading").remove();
    my_class.input_container.removeAttr("disabled");

    if ($(that).width() > 500) my_class.input_container.focus();
  };

  this.getMsgListener = function (callback) {

    my_class.input_container.closest("#input").find("form.input").submit(function () {

      var msg = $(this).find("#msg").val();
      var msg_show = msg;

      if (typeof msg == "undefined" || msg == null || typeof msg.length == "undefined" || msg.length == null || msg.length == 0) return false;

      if ($(this).find("#msg").is("select")) msg_show = $(this).find("#msg option:selected").text().trim();

      my_class.chat_container.find(".chat_action").remove();
      my_class.chat_container.append(my_class.msg.setSendMsg("user", msg_show));

      my_class.scrollDwn();

      $(this).find("#msg").val("");

      if (typeof callback == "function") callback(msg);

      return false;
    });
  };

  this.getData = function (url, callback) {

    $.ajax({
      dataType: "json",
      url: url,
      success: function success(data) {

        if (typeof callback == "function") callback(data);
      }
    });
  };

  this.getContainer = function () {

    var html = '';

    html += '<style>';

    try {
      html += '#' + $(that).attr("id") + ' #jj_chat .chat ul li.other .message { background-color: ' + settings.bot.bg_color + ';}';
      html += '#' + $(that).attr("id") + ' #jj_chat .chat ul li.other .message:after { border-top-color: ' + settings.bot.bg_color + ';}';
    } catch (error) {}

    try {
      html += '#' + $(that).attr("id") + ' #jj_chat .chat ul li.other .message { color: ' + settings.bot.color + ';}';
    } catch (error) {}

    try {
      html += '#' + $(that).attr("id") + ' #jj_chat .chat ul li.you .message { background-color: ' + settings.user.bg_color + ';}';
      html += '#' + $(that).attr("id") + ' #jj_chat .chat ul li.you .message:after { border-top-color: ' + settings.user.bg_color + ';}';
    } catch (error) {}

    try {
      html += '#' + $(that).attr("id") + ' #jj_chat .chat ul li.you .message { color: ' + settings.user.color + ';}';
    } catch (error) {}

    html += '</style>';

    html += '<div id="jj_chat">';
    html += '<div id="chat_stage">';
    html += '<div class="chat">';
    html += '<ul>';
    html += '</ul>';
    html += '</div>';
    html += '</div>';
    html += '<div id="input">';
    html += '<form class="input">';
    html += '<label for="msg">' + my_class.translate.message + '</label>';
    html += '<input type="text" name="msg" id="msg"/>';
    html += '<button type="submit">' + my_class.translate.submit + '</button>';
    html += '</form>';
    html += '</div>';
    html += '</div>';

    $(that).html("");
    $(that).append(html);

    my_class.chat_container = $(that).find("#chat_stage .chat ul");
    my_class.input_container = $(that).find("#input input");
  };
};

var chat_msg = function chat_msg(settings, translation) {

  var my_class = this;

  this.setSendMsg = function (user, content) {

    var ret = "";

    switch (user) {

      case "user":
        ret = my_class.getMsgUser(content, my_class.getTime());

        break;

      case "bot":
        ret = my_class.getMsgBot(content, my_class.getTime());
        break;

    }

    return ret;
  };

  this.getTime = function () {

    if (typeof settings.getTime == "function") return settings.getTime();

    var date = new Date();

    var time = [date.getHours(), date.getMinutes()];

    if (time[0] <= 9) time[0] = "0" + time[0];

    if (time[1] <= 9) time[1] = "0" + time[1];

    return time[0] + ":" + time[1] + " Uhr";
  };

  this.getMergeContent = function (content) {

    if (typeof content == "string") return content;

    var txt = "";

    if (typeof content.msg != "undefined") txt += content.msg;

    if (typeof content.action != "undefined") txt += '<p><span class="chat_action">' + content.action + '</span></p>';

    return txt;
  };

  this.getMsgUser = function (content, date) {

    var html = '';

    html += '<li class="you bounceIn">';
    html += '<span class="user"><img src="' + settings.user.img + '" title="' + settings.user.name + '" /></span>';
    html += '<div class="date">';
    html += date;
    html += '</div>';
    html += '<div class="message">';
    html += '<p>';
    html += my_class.getMergeContent(content);
    html += '</p>';
    html += '</div>';
    html += '</li>';

    return html;
  };

  this.getMsgBot = function (content, date) {

    var html = '';

    html += '<li class="other bounceIn" >';
    html += '<span class="user"><img src="' + settings.bot.img + '" title="' + settings.bot.name + '" /></span>';
    html += '<div class="date">';
    html += date;
    html += '</div>';
    html += '<div class="message">';

    html += '<p>';
    html += my_class.getMergeContent(content);
    html += '</p>';
    html += '</div>';
    html += '</li>';

    return html;
  };

  this.getSpinner = function () {

    var html = '';

    html += "<span class='spinme-right chat-loading'>";
    html += settings.bot.name + " " + translation.is_writing;
    html += "<div class='spinner'>";
    html += "<div class='bounce1'></div>";
    html += "<div class='bounce2'></div>";
    html += "<div class='bounce3'></div>";
    html += "</div>";
    html += "</span>";

    return html;
  };
};
"use strict";

var flix_next_appointments = function flix_next_appointments(that, flix_setup_code, flix_parent, atts) {

  var my_class = this;
  var post_url = flix_parent.post_url;
  var login = localStorage.getItem("flix_login");

  this.build = function () {

    if ($(that).attr("data-flix-language")) post_url += "?l=" + $(that).attr("data-flix-language");

    flix_parent.set_post_url(post_url);

    var html = $(that);

    $(that).html(flix_parent.get_login(html, function () {

      my_class.get_appointment_details();
    }));
  };

  this.get_appointment_details = function () {

    var send = {
      user: login
    };

    $(that).html(flix_parent.get_loader());

    $.post(FLIX_URLS.api + $(that).attr("data-flix-language") + "/booking/view/" + atts.filter, send).success(function (ret) {

      if (!ret[0]) {
        $(that).html('<div class="flix-alert flix-alert-danger">' + ret[1] + '</div>');
        return false;
      }

      $(that).html("<div class='flix-header'></div><div class='flix-stage'></div>");

      var html = "<div class='flix-clearfix flix-form-group'></div>";

      html += '<div class="flix-col-md-12">';
      html += '<div class="flix-stage-container">';
      html += '</div>';
      html += '</div>';

      $(that).find(".flix-stage").html(html);
      //$(that).find(".flix-header").html('<select name="id" id="id"><option value="123456">123456</option></select>');

      var data = {
        stage: $(that).find(".flix-stage"),
        header: $(that).find(".flix-header")
      };

      var em = new flix_entry_manage($(that), flix_setup_code, flix_parent, {});
      em = em.entry_manager;
      em.data = ret[1];
      em.get_order_data();
      em.get_menu(data);

      $(that).find(".flix-count-" + em.data[0].status).closest("a").trigger("click");
    });
  };

  return this;
};
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var flix_overhead = function flix_overhead(that, settings) {

  var my_class = this;
  my_class.login = localStorage.getItem("flix_login");
  var fe = new flix_form_elements();

  my_class.lang = $(that).attr("data-flix-language");

  this.build = function () {

    my_class.get_saved_data(function () {

      my_class.get_header();
    });
  };

  this.get_header = function () {

    my_class.no_elements = false;

    if (typeof my_class.saved_assistents == "undefined" || my_class.saved_assistents.length == 0) {
      my_class.no_elements = true;
      my_class.saved_assistents = [{ value: "", label: "" }];
    }

    var val = my_class.saved_assistents[0].value;

    if (localStorage.getItem("flix-id") != "undefined" && localStorage.getItem("flix-id")) {

      $.each(my_class.saved_assistents, function (k, v) {

        if (v.value == localStorage.getItem("flix-id")) val = localStorage.getItem("flix-id");
      });
    }

    var html = '';

    html += '<div class="flix-header">';
    html += '<div class="flix-col-md-4 flix-col-xs-9"> ';
    html += fe.get_select({ columnName: "", id: "id", label: "", values: my_class.saved_assistents, value: val });
    html += '</div> ';
    html += '<div class="flix-col-md-8 flix-col-xs-3"> ';

    var hide = "";

    if (my_class.no_elements) hide = "flix-hide";

    html += '<div class="flix-dropdown flix-form-group ' + hide + '">';
    html += '<a href="#" data-tooltip="Direkte Funktionen zum ausgewählten Termin" class="flix-btn flix-btn-default flix-btn-block flix-dropdown-toggle flix-tooltip" data-toggle="dropdown"><i class="flix-glyphicon flix-glyphicon-cogwheel"></i> <span class="flix-hidden-xs">Optionen für dieses Formular anzeigen</span>';
    html += '</a>';

    html += my_class.get_ul_menu();

    html += '</div>';

    html += '</div>';
    html += '<div class="flix-clearfix"></div>';

    html += '</div>';

    html += '<div class="flix-stage"></div>';

    $(that).html(html);

    my_class.atts = {

      container: $(that),
      stage: $(that).find(".flix-stage"),
      header: $(that).find(".flix-header"),
      id: my_class.get_id()

    };

    if ((typeof settings === "undefined" ? "undefined" : _typeof(settings)) == "object" && typeof settings.onReady == "function") settings.onReady(my_class.atts);

    if (my_class.get_id() == "" || my_class.get_id() == null) return false;

    my_class.get_change_id();
    my_class.get_toolbar();
  };

  this.get_ul_menu = function () {

    var html = "";

    html += '<ul class="flix-dropdown-menu flix-dropdown-menu-right">';
    html += '<li class="flix-dropdown-header">Termin-Kalender nutzen</li>';
    html += '<li class="flix-html-li"><a href="#" target="" class="flix-html-a flix-btn-embed"><i class="flix-glyphicon flix-glyphicon-embed"></i> Einbetten auf eigener Website</a></li>';
    html += '<li class="flix-html-li"><a href="#" target="_blank" class="flix-html-a flix-btn-landingpage "><i class="flix-glyphicon flix-glyphicon-globe"></i> Termin-Website öffnen</a></li>';
    html += '<li class="flix-html-li"><a href="#" target="" class="flix-html-a flix-btn-qr"><i class="flix-glyphicon flix-glyphicon-qrcode"></i> QR-Code zur Termin-Website anzeigen</a></li>';

    html += '<li role="separator" class="flix-divider"></li>';
    html += '<li class="flix-dropdown-header">Terminbuchungen</li>';
    html += '<li class="flix-html-li"><a href="#" target="_blank" class="flix-html-a flix-btn-holiday"><i class="flix-glyphicon flix-glyphicon-plane"></i> Ferien / Urlaubstage hinterlegen</a></li>';
    html += '<li class="flix-html-li"><a href="#" target="" class="flix-html-a flix-btn-newentry"><i class="flix-icon flix-icon-appointment-by-phone"></i> Neuen Termin-Eintrag beifügen</a></li>';
    html += '<li class="flix-html-li"><a href="#" target="_blank" class="flix-html-a flix-btn-print"><i class="flix-glyphicon flix-glyphicon-print"></i> Bestätigte Termine ausdrucken</a></li>';
    html += '<li role="separator" class="flix-divider"></li>';

    html += my_class.get_edit_assistent_menu();
    html += '<li class="flix-html-li"><a href="#" class="flix-html-a flix-btn-delete" title="Löschen"><i class="flix-glyphicon flix-glyphicon-bin"></i> Löschen starten (unwiederbringlich)</a></li>';

    html += '</ul>';

    return html;
  };

  this.get_edit_assistent_menu = function () {

    var html = "";

    html += '<li class="flix-dropdown-header">Termin-Kalender editieren</li>';
    html += '<li class="flix-html-li"><a href="#" target="" class="flix-html-a flix-btn-edit"><i class="flix-glyphicon flix-glyphicon-wrench"></i> Terminformular bearbeiten</a></li>';
    html += '<li class="flix-html-li"><a href="#" target="" class="flix-html-a flix-btn-namechange"><i class="flix-glyphicon flix-glyphicon-pencil"></i> Terminformular umbenennen</a></li>';
    html += '<li class="flix-html-li"><a href="#" target="" class="flix-html-a flix-btn-copy"><i class="flix-glyphicon flix-glyphicon-copy"></i> Terminformular duplizieren</a></li>';
    html += '<li role="separator" class="flix-divider"></li>';
    html += '<li class="flix-dropdown-header">Termin-Kalender und -Buchungen löschen</li>';

    return html;
  };

  this.get_change_id = function () {

    $(that).find("select#id").unbind("change");

    $(that).find("select#id").change(function () {

      my_class.atts.id = my_class.get_id();
      localStorage.setItem("flix-id", my_class.atts.id);

      my_class.get_toolbar();

      $(that).find(".flix-stage").slideUp(500, function () {

        if ((typeof settings === "undefined" ? "undefined" : _typeof(settings)) == "object" && typeof settings.onChange == "function") {

          settings.onChange(my_class.atts);

          setTimeout(function () {

            $(that).find(".flix-stage").slideDown(500);
          }, 500);
        }
      });

      return false;
    });
  };

  this.get_delete = function () {

    $(that).find(".flix-btn-delete").unbind("click");

    $(that).find(".flix-btn-delete").click(function () {

      swal.fire({
        type: "question",
        title: $(this).text() + "?",
        confirmButtonText: "Ja",
        cancelButtonText: "Nein",
        showCancelButton: true

      }).then(function (ret) {

        if (typeof ret.value == "undefined") return false;

        var send = {
          user: my_class.login,
          ID: my_class.get_id()
        };

        $.post(FLIX_URLS.api + my_class.lang + "/assistent/delete", send).success(function (data) {

          swal.fire({
            type: "success",
            title: data[1],
            showConfirmButton: false,
            showCancelButton: false,

            timer: 2000
          });

          my_class.build();
        });
      });

      return false;
    });
  };

  this.get_qr_code = function () {

    $(that).find(".flix-header .flix-btn-qr").unbind("click");

    $(that).find(".flix-header .flix-btn-qr").click(function () {

      var btn = $(this);

      var send = {
        user: my_class.login,
        ID: my_class.get_id()
      };

      $.post(FLIX_URLS.api + my_class.lang + "/landingpage/base64_url", send).success(function (data) {

        var src = FLIX_URLS.flix + "events/" + my_class.lang + '/qr/' + data[1] + '/qr_code_' + send.ID + '.png';

        swal.fire({
          title: btn.attr("title"),
          html: '<div class="flix-form-group">' + "<a target='_blank' href='" + src + "' download='qr_code_" + send.ID + ".png'>" + '<img src="' + src + '" class="flix-img-responsive"></a></div>',
          showConfirmButton: false,
          showCloseButton: true
        });

        var fp = new flix_termin_flix();

        $(".swal2-content").prepend("<div class='flix-img-loader'>" + fp.get_loader() + "</div>");

        $(".swal2-content").find("img").load(function () {
          $(".swal2-content .flix-img-loader").remove();
        });

        $(that).find(".flix-header .flix-btn-landingpage").clone().appendTo(".swal2-content");

        //$(".swal2-content").append(btn.html());
      });

      return false;
    });
  };

  this.get_url = function () {

    var send = {
      user: my_class.login,
      ID: my_class.get_id()
    };

    $.post(FLIX_URLS.api + my_class.lang + "/landingpage/url", send).success(function (data) {

      $(that).find(".flix-btn-landingpage").attr("href", data[1]);
    });
  };

  this.get_id = function () {

    return $(that).find("select#id").val();
  };

  this.get_print = function () {

    var send = {
      user: my_class.login,
      ID: my_class.get_id()
    };

    $(that).find(".flix-btn-print").attr("href", FLIX_URLS.flix + "events/" + my_class.lang + "/bookings/" + send.user + "/" + send.ID + "/bookings-" + send.ID + ".pdf");
  };

  this.get_embed_code = function () {

    $(that).find(".flix-header .flix-btn-embed").unbind("click");

    $(that).find(".flix-header .flix-btn-embed").click(function () {

      var fe = new flix_form_elements();

      var btn = $(this);

      swal.fire({
        title: btn.text(),
        html: fe.get_textarea({ id: "code", columnName: "12", readonly: true, description: "Bitte den Code auf der eigenen Website an der gewünschten Stelle einfügen", value: '<div data-flix="' + my_class.crypted[my_class.get_id()] + '"></div><script src="' + FLIX_URLS.flix + 'assets/js/dynamic/flix-setup.js?ver=1"></script>' }),
        showConfirmButton: false,
        showCloseButton: true
      });

      $(".swal2-content #code").click(function () {

        $(this).select();
        document.execCommand('copy');

        swal.fire({ "type": "success", "timer": 2000, "title": "In Zwischenablage kopiert", "showConfirmButton": false, "showCloseButton": true });

        return false;
      }).css({ cursor: "pointer" });

      return false;
    });
  };

  this.get_rename_calendar = function () {

    $(that).find(".flix-header .flix-btn-namechange").unbind("click");

    $(that).find(".flix-header .flix-btn-namechange").click(function () {

      var fe = new flix_form_elements();

      var btn = $(this);
      var id = $(that).find("select#id").find("option:selected");

      swal.fire({
        type: "question",
        input: "text",
        title: btn.text(),
        confirmButtonText: "Ja",
        cancelButtonText: "Nein",
        showConfirmButton: true,
        showCancelButton: true,
        showCloseButton: true
      }).then(function (val) {

        if (typeof val == "undefined" || typeof val.value == "undefined" || val.value.trim() == "") return false;

        var send = {
          "title": val.value,
          "ID": id.attr("value"),
          user: my_class.login
        };

        $.post(FLIX_URLS.api + my_class.lang + "/assistent/change_title", send).success(function (data) {

          swal.fire({
            type: "success",
            title: data[1],
            showConfirmButton: false,
            showCloseButton: false,
            timer: 2500
          });

          id.text(val.value);
        });
      });

      $(".swal2-content").find("input[type='text']").val(id.text());

      return false;
    });
  };

  this.get_toolbar = function () {

    $(that).find(".flix-header").find(".flix-dropdown").addClass("flix-hide");

    $(that).find(".flix-btn-landingpage").attr("href", "#");

    if (my_class.get_id() == "new" || my_class.get_id() == "") return false;

    $(that).find(".flix-header").find(".flix-dropdown").removeClass("flix-hide");

    my_class.get_toolbar_functions();
  };

  this.get_toolbar_functions = function () {

    my_class.get_url();
    my_class.get_print();
    my_class.get_delete();
    my_class.get_qr_code();
    my_class.get_embed_code();
    my_class.get_rename_calendar();
    my_class.get_new_entry();
    my_class.get_manage_holidays();
    my_class.get_duplicate();
    my_class.get_edit();
  };

  this.get_edit = function () {

    $(that).find(".flix-header .flix-btn-edit").unbind("click");

    $(that).find(".flix-header .flix-btn-edit").click(function () {

      var btn = $(this);

      swal.fire({
        title: btn.text(),
        width: "95%",
        showCloseButton: true,
        showConfirmButton: false,
        html: '<div data-flix-language="' + my_class.lang + '" style="text-align:left;"></div>',
        allowOutsideClick: false
      });

      var data = {
        id: $(that).find(".flix-header #id").val(),
        stage: $(".swal2-content").find("[data-flix-language]")
      };

      var wz = new flix_termin_wizard(data.stage, flix_setup_code, new flix_termin_flix(data.stage, flix_setup_code));

      wz.login = my_class.login;
      wz.success_msg = false;

      wz.get_save = function (container, atts, alert) {

        var send = {
          user: my_class.login,
          data: JSON.stringify(atts.saved_form),
          ID: data.id
        };

        $.post(FLIX_URLS.api + my_class.lang + "/assistent/save", send).success(function (data) {
          my_class.build();
        });
      };

      wz.get_change_assistents(data);

      return false;
    });
  };

  this.get_duplicate = function () {

    $(that).find(".flix-header .flix-btn-copy").unbind("click");

    $(that).find(".flix-header .flix-btn-copy").click(function () {

      var btn = $(this);

      swal.fire({

        title: btn.text(),
        input: "text",
        inputPlaceholder: $(that).find(".flix-header #id option:selected").text(),
        html: "Bitte neuen Titel eingeben",
        confirmButtonText: "Duplizierung starten",
        showConfirmButton: true,
        showCloseButton: true,
        showCancelButton: false

      }).then(function (val) {

        if (typeof val.value == "undefined" || val.value == "") {
          return false;
        }

        var send = {
          user: my_class.login,
          ID: $(that).find(".flix-header #id").val(),
          title: val.value
        };

        $.post(FLIX_URLS.api + my_class.lang + "/assistent/duplicate", send).success(function (data) {

          if (!data[0]) {
            swal.fire({ type: "error", title: data[1], showConfirmButton: false, timer: 3000 });
            return false;
          }

          swal.fire({ type: "success", title: data[1], showConfirmButton: false, timer: 2000 });

          localStorage.setItem("flix-id", data[2]);

          my_class.build();
        });
      });

      return false;
    });
  };

  this.get_manage_holidays = function () {

    $(that).find(".flix-header .flix-btn-holiday").unbind("click");

    $(that).find(".flix-header .flix-btn-holiday").click(function () {

      var btn = $(this);

      swal.fire({

        title: btn.text(),
        html: "<div data-flix-language='" + my_class.lang + "' style='text-align: left;'></div>",
        showConfirmButton: false,
        showCloseButton: true,
        showCancelButton: false,
        width: "80%"
      });

      var sc = new flix_setup(false, false);
      var fp = new flix_termin_flix($(".swal2-container"), sc);

      var h = new flix_holiday($(".swal2-container").find("[data-flix-language]"), sc, fp);
      h.filter = my_class.get_id();
      h.lang = my_class.lang;

      h.build();

      return false;
    });
  };

  this.get_new_entry = function () {

    $(that).find(".flix-header .flix-btn-newentry").unbind("click");

    $(that).find(".flix-header .flix-btn-newentry").click(function () {

      var btn = $(this);

      swal.fire({

        title: btn.text(),
        html: "<div data-flix-language='" + my_class.lang + "'></div>",
        showConfirmButton: false,
        showCloseButton: true,
        showCancelButton: false
      });

      $.post(FLIX_URLS.api + my_class.lang + "/assistent/get_data", { user: my_class.login, ID: my_class.get_id() }).success(function (data) {

        data[1].get_click_me = function (event) {
          my_class.get_new_entry_form(dp.get_event_by_id(event), btn.text(), dp);
        };

        var dp = new flix_datepicker($(".swal2-container").find("[data-flix-language]"), data[1]);

        dp.build();
      });

      return false;
    });
  };

  this.get_new_entry_form = function (event, title, dp) {

    var html = "";
    html += '<div class="flix-text-left">';

    html += "<div class='flix-col-md-12'><div class='flix-alert flix-alert-info'><div>Wird im Kalender mit folgendem Symbol gekennzeichnet: <i class='flix-icon flix-icon-appointment-by-phone' ></i></div></div></div>";

    html += fe.get_header({ subtype: "h3", label: "Interne Notiz" });
    html += fe.get_textarea({ label: "Notiz zum Termin-Buchenden", id: "notice", "placeholder": "Telefonmitschrift etc.", "description": "Hinweis zum Termin-Buchenden", required: true });
    html += fe.get_header({ subtype: "h3", label: "Termin-Erinnerungen" });
    html += fe.get_text({ columnName: "6", label: "E-Mailadresse des Termin-Buchenden (optional)", subtype: "email", id: "email" });
    html += fe.get_text({ columnName: "6", label: "Handynummer des Termin-Buchenden (optional)", subtype: "tel", id: "tel" });

    html += fe.get_paragraph({ description: "E-Mailadresse/Handynummer muss via Validationslink bestätigt werden. Die Eingabe ist notwendig für Terminerinnerungen." });
    html += '</div>';

    swal.fire({
      title: title,
      html: html,
      showCancelButton: true,
      showConfirmButton: true,
      showCloseButton: true,
      confirmButtonText: "Speichern",
      cancelButtonText: "Schließen",
      preConfirm: function preConfirm(ret) {

        var c = $(".swal2-content");

        if (!c.find("[name='notice']").val().trim()) return false;

        if (c.find("[name='tel']").val().trim() && !c.find("[name='email']").val().trim()) return false;
      }
    }).then(function (ret) {

      if (typeof ret == "undefined" || typeof ret.value == "undefined" || !ret.value) return false;

      var a = dp.get_atts();

      var send = {
        user: my_class.login,
        ID: my_class.get_id(),
        begin: event.data.begin.split,
        end: event.data.end.split,
        email: $(".swal2-content").find("[name='email']").val(),
        tel: $(".swal2-content").find("[name='tel']").val(),
        data: { "Notiz": $(".swal2-content").find("[name='notice']").val() },
        admin: my_class.login
      };

      if (_typeof(a.service) == "object") send.service = a.service;

      if (send.email) {

        $.post(FLIX_URLS.api + my_class.lang + "/booking/doublettes", { user: send.user, form: send.ID, email: send.email }).success(function (data) {

          if (data[0]) {
            swal.fire({ type: "error", title: data[1] });
            return false;
          }

          my_class.get_save_new_entry(send);
        });
      } else {

        my_class.get_save_new_entry(send);
      }
    });
  };

  this.get_save_new_entry = function (send) {

    $.post(FLIX_URLS.api + my_class.lang + "/booking/save", send).success(function (data) {

      var swal_ = {
        type: "error",
        title: data[1],
        showConfirmButton: false,
        timer: 2000,
        showCancelButton: false,
        showCloseButton: true
      };

      if (data[0]) {
        swal_.type = "success";
        swal_.title += " #" + data[2];
      }

      swal.fire(swal_);

      if (send.email && data[0]) {

        $.post(FLIX_URLS.api + my_class.lang + "/booking/validation_mail", { user: send.user, ID: data[2] }).success(function (ret) {
          console.log(ret);
        });

        $.post(FLIX_URLS.api + my_class.lang + "/reminder/change_status", { status: "commitment", user: send.user, ID: data[2], event_id: send.ID });
      }
    });
  };

  this.get_saved_data = function (callback) {

    my_class.saved_assistents = [];
    my_class.crypted = {};

    if (typeof my_class.login != "string") callback();

    $.post(FLIX_URLS.api + my_class.lang + "/assistent/get_assistents", { user: my_class.login }).success(function (data) {

      $.each(data[1], function (k, v) {

        var label = "#" + v.ID;

        if (typeof v.title == "string" || typeof v.title == "number") label = v.title;

        my_class.saved_assistents.push({ label: label, value: v.ID, crypted: v.crypted });
        my_class.crypted[v.ID] = v.crypted;
      });

      callback();
    });
  };
};
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var page_builder = function page_builder(that, flix_setup_code, flix_parent) {

	var my_class = this;
	flix_parent.my_subclass = my_class;

	var login = localStorage.getItem("flix_login");
	var fe = new flix_form_elements();

	var post_url = flix_parent.post_url;

	this.build = function () {

		flix_parent.get_styles();
		flix_parent.get_animateCSS();

		if ($(that).attr("data-flix-language")) post_url += "?l=" + $(that).attr("data-flix-language");

		flix_parent.set_post_url(post_url);

		$(that).html(flix_parent.get_loader());

		var html = $(that);
		//$(that).html( flix_parent.get_login(html, function(){ my_class.get_fonts( function(){ my_class.get_page_builder(); }); }) );

		my_class.get_fonts(function () {

			new flix_overhead(that, {
				onReady: function onReady(data) {
					my_class.get_html(data);my_class.get_page_builder(data);
				},
				onChange: function onChange(data) {
					my_class.get_page_builder(data);
				}
			}).build();
		});
	};

	this.get_page_builder = function (ret) {

		var send = {
			user: login,
			ID: ret.id
		};

		$.post(FLIX_URLS.api + $(that).attr("data-flix-language") + "/landingpage/get", send).success(function (data) {
			//console.log(data);
			my_class.get_values(ret, data);
		});
	};

	this.get_values = function (data, value) {

		$.each(value.page, function (k, v) {

			data.stage.find("#" + k).val(v);
		});

		data.stage.find("[data-flix-colorpicker='font_color']").css("background-color", value.page.font_color);
		data.stage.find("[data-flix-colorpicker='bg_color']").css("background-color", value.page.bg_color);
		data.stage.find("[data-flix-colorpicker='accent_color']").css("background-color", value.page.accent_color);

		if (_typeof(value.content["contact.html"]) == "object") {
			data.stage.find(".flix-btn-contact").addClass("flix-btn-info").removeClass("flix-btn-default");
		}

		if (_typeof(value.content["hitclick.html"]) == "object") {
			data.stage.find(".flix-btn-hitclick").addClass("flix-btn-info").removeClass("flix-btn-default");
		}

		var imprint = "Impressum beifügen";

		if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == "object" && _typeof(value.content) == "object" && _typeof(value.content["imprint.html"]) == "object") imprint = value.content["imprint.html"].content;

		var datenschutz = "Datenschutz-Hinweise beifügen";

		if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == "object" && _typeof(value.content) == "object" && _typeof(value.content["privacy.html"]) == "object") datenschutz = value.content["privacy.html"].content;

		data.stage.find("textarea#datenschutz, textarea#impressum").removeClass("flix-hide");
		data.stage.find("div#datenschutz, div#impressum").remove();

		data.stage.find("#impressum").val(imprint);
		data.stage.find("#datenschutz").val(datenschutz);

		data.stage.find("#datenschutz").before('<div id="datenschutz" class="flix-form-control flix-prev" style="width: 100%; overflow: auto;height: 90px;">' + data.stage.find("#datenschutz").val() + '</div>');
		data.stage.find("#impressum").before('<div id="impressum" class="flix-form-control flix-prev" style="width: 100%; overflow: auto;  height: 90px;">' + data.stage.find("#impressum").val() + '</div>');

		data.stage.find("textarea#datenschutz, textarea#impressum").addClass("flix-hide");
		data.stage.find("div#datenschutz, div#impressum").css("cursor", "pointer");

		setTimeout(function () {

			data.stage.find("#domain").val(data.header.find(".flix-btn-landingpage").attr("href"));
		}, 1000);

		my_class.set_imprint(data, value);

		my_class.get_text(data);
		my_class.get_preview(data);
		//my_class.get_tinymce(data);
	};

	this.set_imprint = function (data, value) {

		$(that).find("div#impressum, div#datenschutz").unbind("click");

		$(that).find("div#impressum, div#datenschutz").click(function () {

			var form = $(this).closest(".flix-form-group").parent();
			var clone = $(this).closest(".flix-form-group").parent().clone();
			var label = $(this).closest(".flix-form-group").parent().find("label").clone();

			clone.find("label").remove();
			clone.find("div#impressum, div#datenschutz").remove();

			flix_parent.get_new_section($(that), {
				title: label.text(),
				html: '<div class="flix-col-md-12">' + clone.html() + '</div>' + fe.get_button({ subtype: "button", "label": "Übernehmen", columnName: 12, className: "flix-btn flix-btn-success flix-btn-update" }),
				onReady: function onReady(ret) {
					ret.container.find("textarea").val(clone.find("textarea").val());flix_parent.set_tinymce(ret.container.find("textarea"), $(that).attr("data-flix-language"));ret.container.find(".flix-btn-update").click(function () {
						tinyMCE.triggerSave();form.find("textarea").val(ret.container.find("textarea").val());form.find("div#impressum, div#datenschutz").html(ret.container.find("textarea").val());ret.container.find(".flix-close-section").trigger("click");
					});
				}

			});

			return false;
		});
	};

	this.get_html = function (data, value) {

		var html = "";

		var btn = "";

		btn += '<div class="flix-col-md-12">';
		btn += '<div class="flix-form-group">';

		btn += fe.get_button({ label: "Speichern", subtype: "button", columnName: "", className: "flix-btn flix-btn-success flix-btn-save" });
		btn += fe.get_button({ label: "Vorschau", subtype: "button", columnName: "", className: "flix-btn flix-btn-default flix-btn-preview" });

		btn += '</div>';
		btn += '</div>';

		//html += '<div class="flix-col-md-12">';
		html += fe.get_header({ subtype: "h3", label: "Terminbuchungs-Website-URL", columnName: 12 });
		html += '<div class="flix-col-md-12"><label class="flix-html-label" for="domain">Domain</label></div>';
		html += fe.get_text({ id: "domain", label: "", value: "", columnName: 12, readonly: true, required: true });
		//html += fe.get_button({ label: "Domain ändern", subtype: "button", columnName: 4, className: "flix-btn flix-btn-default flix-btn-block flix-change-domain" });

		html += fe.get_header({ subtype: "h3", label: "Design-Einstellungen", columnName: 12 });
		//html += '<div class="flix-col-md-12"><div class="flix-form-group"><hr class="flix-hr"></div></div>';
		html += fe.get_colorpicker({ label: "Hintergrund-Farbe", id: "bg_color", columnName: 4 });
		html += fe.get_colorpicker({ label: "Text-Farbe", id: "font_color", columnName: 4 });
		html += fe.get_colorpicker({ label: "Akzent-Farbe", id: "accent_color", columnName: 4 });

		html += fe.get_select({ id: "font_family", label: "Schriftart", values: my_class.fonts_select(), columnName: 6, required: true });

		html += '<div class="flix-col-md-6">';
		html += '<div class="flix-form-group">';
		html += '<label class="flix-html-label flix-html-html" for="preview_text">Text-Vorschau</label>';
		html += '<div id="preview_text" class="flix-form-control">Hier eine <b>Vorschauansicht</b> des Textes</div>';
		html += '</div>';
		html += '</div>';

		html += fe.get_header({ subtype: "h3", label: "Terminbuchungs-Einstellungen", columnName: 12 });

		html += fe.get_select({ id: "calendar_view", label: "Kalender Ansicht", values: [{ label: "Jahres-Überblick", value: "year" }, { label: "Monats-Überblick", value: "month" }, { label: "Tages-Überblick", value: "days" }, { label: "Stunden-Ansicht", value: "hours" }, { label: "Listen-Ansicht", value: "list" }], columnName: 12, required: true });

		html += fe.get_button({ label: "<i class='flix-glyphicon flix-glyphicon-question-sign'></i> Kundenbefragung beifügen / editieren", columnName: 3, className: "flix-btn flix-btn-default flix-btn-block flix-btn-hitclick", required: true });
		html += fe.get_button({ label: "<i class='flix-glyphicon flix-glyphicon-map'></i> Kontaktadresse hinterlegen", columnName: 3, className: "flix-btn flix-btn-default flix-btn-block flix-btn-contact", required: true });

		//html += btn;

		//html += '<div class="flix-col-md-12"><div class="flix-form-group"><hr class="flix-hr"></div></div>';
		html += fe.get_header({ subtype: "h3", label: "Rechtliche Pflichtangaben", columnName: 12 });

		html += fe.get_textarea({ id: "impressum", label: "Impressum", columnName: 6, required: true, className: "flix-tinymce" });
		html += fe.get_textarea({ id: "datenschutz", label: "Datenschutz-Hinweise", columnName: 6, required: true, className: "flix-tinymce" });
		html += fe.get_paragraph({ subtype: "p", type: "paragraph", description: "<i class='flix-glyphicon flix-glyphicon-warning-sign'></i> Impressum und Datenschutzhinweise sind Pflicht. Bitte eintragen oder einen Link beifügen." });
		//html += '</div>';

		html += btn;

		html += '<div class="flix-clearfix"></div>';

		data.stage.html(html);

		//fe.get_functions(that);


		my_class.get_save(data);

		my_class.get_change_view(data);

		my_class.get_hitclick(data);
		my_class.get_contact(data);
	};

	this.get_contact = function (data) {

		data.stage.find(".flix-btn-contact").unbind("click");

		data.stage.find(".flix-btn-contact").click(function () {

			var btn = $(this);

			$.post(FLIX_URLS.api + $(that).attr("data-flix-language") + "/landingpage/get", { user: login, ID: data.header.find("#id").val() }).success(function (ret3) {

				var include = {
					adress: "",
					city: "",
					contact: "",
					country: "",
					infos: "",
					zip: ""
				};

				if (_typeof(ret3.content["contact.html"]) == "object") {

					include = $.parseJSON(ret3.content["contact.html"].content);
				}

				var html = "";

				html += '<form>';
				html += fe.get_textarea({ label: "Ansprechpartner", id: "contact", columnName: 12, required: true, value: include.contact });
				html += fe.get_text({ label: "Strasse", id: "adress", columnName: 5, required: true, value: include.adress });
				html += fe.get_text({ label: "PLZ", id: "zip", columnName: 2, required: true, value: include.zip });
				html += fe.get_text({ label: "Ort", id: "city", columnName: 5, required: true, value: include.city });
				html += fe.get_text({ label: "Land", id: "country", columnName: 12, required: true, value: include.country });
				html += fe.get_textarea({ label: "Weitere Infos zum Kontakt", id: "infos", columnName: 12, required: false, value: include.infos });
				html += fe.get_button({ subtype: "submit", label: "Speichern", columnName: 12, className: "flix-btn flix-btn-success" });
				html += '</form>';

				flix_parent.get_new_section(data.stage, {

					title: $(this).text(),
					html: html,
					onReady: function onReady(ret) {

						var ff = new flix_html_form(ret.container);
						ff.get_handle_form(function (contact) {

							var send = {
								ID: data.header.find("#id").val(),
								user: login,

								content: {
									"contact.html": {
										content: JSON.stringify(contact)
									}
								}

							};

							$.post(FLIX_URLS.api + $(that).attr("data-flix-language") + "/landingpage/update", send).always(function (ret2) {

								btn.addClass("flix-btn-info").removeClass("flix-btn-default");

								ret.container.find(".flix-close-section").trigger("click");
							});
						});
					}

				});
			});
		});

		return false;
	};

	this.get_hitclick = function (data) {

		flix_setup_code.flix_load_script(FLIX_URLS.hit_url + "/assets/js/dynamic/hit-setup.js", typeof hit_setup === "undefined" ? "undefined" : _typeof(hit_setup), function () {

			$(that).find(".flix-btn-hitclick").unbind("click");

			$(that).find(".flix-btn-hitclick").click(function () {

				swal.fire({
					title: $(this).text(),
					html: "<div class='hit-menu-stage' data-hit-language='" + $(that).attr("data-flix-language") + "'><div class='flix-hitclick-container flix-text-left' data-flix-language='" + $(that).attr("data-flix-language") + "'></div></div>",
					showConfirmButton: false,
					showCloseButton: true,
					width: "90%"
				});

				setTimeout(function () {

					$("#swal2-content").css({ "text-align": "left" });

					var c = new flix_hit_new_connect($(".swal2-content").find(".flix-hitclick-container"), flix_setup_code, flix_parent);

					var send = $.parseJSON(JSON.stringify(data));

					send.stage = $(".swal2-content").find(".flix-hitclick-container");
					c.get_connect = function (d) {

						$.post(FLIX_URLS.api + $(that).attr("data-flix-language") + "/landingpage/get_hitclick", { user: login, ID: d.id }).success(function (ret) {

							if (!ret[0]) {

								ret[1] = {
									board: "",
									password: "",
									settings: {
										design: "",
										style: "",
										vote: "",
										position: "",
										colors: {
											accent: $(that).find("[name='accent_color']").val(),
											text: $(that).find("[name='font_color']").val()
										}
									}
								};
							}

							c.get_html(send, ret[1]);
						});
					};
					c.get_save_code = function (id, code, data2) {
						my_class.get_save_code(id, code, send);
					};
					c.get_connect(data);
				}, 100);

				return false;
			});
		});
	};

	this.get_save_code = function (id, code, data) {

		var ret = data.stage.find("form").serializeArray();

		var send = {};

		send.user = login;

		var data_ = {};

		$.each(ret, function (k, v) {

			data_[v.name] = v.value;
		});

		send.board = data_.survey;
		send.password = data_.hit_password;
		send.settings = {
			language: $(that).attr("data-flix-language"),
			design: data_.hit_design,
			style: data_.hit_style,
			vote: data_.hit_vote,
			position: data_.position,
			colors: {
				accent: data_.hit_bg_color,
				text: data_.hit_text_color
			}
		};

		$.post(FLIX_URLS.hit_api + $(that).attr("data-flix-language") + "/code/generate_code", send).success(function (code) {

			var send2 = {
				user: login,
				ID: id,
				content: { "hitclick.html": { meta: send.settings.position, content: '<div data-hitclick="' + code.encrypt + '"></div><script src="' + FLIX_URLS.hit_url + 'assets/js/dynamic/hit-setup.js"></script>' } },
				language: $(that).attr("data-flix-language")
			};

			$.post(FLIX_URLS.api + $(that).attr("data-flix-language") + "/landingpage/update_hitclick", send2).success(function (ret) {

				//swal.fire({showConfirmButton: false, timer: 2000, title: ret[1], type: "success"});

				$(that).find(".flix-btn-preview").trigger("click");
			});
		});
	};

	this.get_text = function (data) {

		new flix_colorpicker(that, { onChange: function onChange(col) {
				my_class.get_preview_text(data);
			} }).build();

		data.stage.find("#font_family").change(function () {
			my_class.get_preview_text(data);
		});

		my_class.get_preview_text(data);
	};

	this.get_preview_text = function (data) {

		var font = data.stage.find("#font_family").val();

		var css = {
			color: data.stage.find("#font_color").val(),
			"background-color": data.stage.find("#bg_color").val(),
			"font-family": font
		};

		data.stage.find("#preview_text").find("style").remove();
		data.stage.find("#preview_text").prepend("<style>@import url('https://fonts.googleapis.com/css?family=" + font.replace(" ", "+") + "');</style>");

		data.stage.find("#preview_text").css(css);

		data.stage.find("#preview_text b").css({ color: data.stage.find("#accent_color").val() });
	};

	this.get_preview = function (data) {

		data.stage.find(".flix-btn-preview").unbind("click");

		data.stage.find(".flix-btn-preview").click(function () {

			var link = data.header.find(".flix-btn-landingpage").attr("href");

			swal.fire({
				title: $(this).text(),
				width: "80%",
				html: "<iframe src='" + link + "' style='width: 100%; height: 80vh; border:0; '></iframe>",
				showConfirmButton: false,
				showCloseButton: true

			});
			return false;
		});
	};

	this.get_change_view = function (data) {

		data.stage.find("select#calendar_view").unbind("change");

		data.stage.find("select#calendar_view").change(function () {

			data.stage.find(".flix-btn-save").trigger("click");
			return false;
		});
	};

	this.get_save = function (data) {

		data.stage.find(".flix-btn-save").unbind("click");

		data.stage.find(".flix-btn-save").click(function () {

			var send = {
				ID: data.header.find("#id").val(),
				user: login,
				page: {
					design: "flix",
					bg_color: data.stage.find("#bg_color").val(),
					accent_color: data.stage.find("#accent_color").val(),
					font_color: data.stage.find("#font_color").val(),
					font_family: data.stage.find("#font_family").val()
				},
				content: {
					"imprint.html": {
						content: data.stage.find("textarea#impressum").val()
					},
					"privacy.html": {
						content: data.stage.find("textarea#datenschutz").val()
					}
				},
				calendar_view: data.stage.find("#calendar_view").val()
			};

			$.post(FLIX_URLS.api + $(that).attr("data-flix-language") + "/landingpage/update", send).always(function (ret) {

				swal.fire({ type: "success", title: "Erfolgreich gespeichert", showConfirmButton: false, timer: 2000 });

				//data.header.find("#id").trigger("change");
			});

			return false;
		});
	};

	this.get_tinymce = function (data) {

		//my_class.par = new flix_termin_flix( that, flix_setup_code );

		//my_class.par.set_tinymce(data.stage.find("textarea"), $(that).attr("data-flix-language"));


	};

	this.fonts_select = function () {

		var r = [];

		//r.push( {label: "Montserrat", value: v} );

		$.each(my_class.google_fonts, function (k, v) {

			r.push({ label: k, value: k });
		});

		return r;
	};

	this.get_fonts = function (callback) {

		$.post(FLIX_URLS.api + $(that).attr("data-flix-language") + "/fonts/google_fonts").success(function (data) {

			my_class.google_fonts = data;
			callback();
		});
	};

	return this;
};
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var flix_payment = function flix_payment(that, flix_setup_code, flix_parent, atts) {

	var my_class = this;

	my_class.paypal_access = {
		sandbox: "AWuTJsThZ2o_1CffWZYaefeMLPtpwM7IkMcgF9nRRDB4ko61Kw2p-Cl5M0nuFV9oqhird0PTZk5nCqx3",
		production: "AZJUOV0SedQQzu-dYhzGb8b9qSCMZ-TZdgNDhbWh25mS6cCmJGk0smabiymoekzGvK9ESsK_nzWz_pKy"
	};

	my_class.client_id = my_class.paypal_access.production;

	my_class.plans = {

		unit: 0.19,
		tax: 0.19,
		currency: "EUR",
		locale: "de_DE",
		prices: [{ amount: 10 }, { amount: 50, discount: 10 }, { amount: 500, discount: 20 }]

	};

	my_class.login = localStorage.getItem("flix_login");
	my_class.lang = $(that).attr("data-flix-language");

	var post_url = flix_parent.post_url;

	this.build = function () {

		flix_parent.get_styles();
		flix_parent.get_animateCSS();

		if (typeof my_class.lang == "string") post_url += "?l=" + my_class.lang;

		flix_parent.set_post_url(post_url);

		$(that).html(flix_parent.get_loader());

		var html = $(that);

		$(that).html(flix_parent.get_login(html, function () {
			my_class.get_payment();
		}));
	};

	this.get_payment = function () {

		$(that).html(flix_parent.get_loader());

		var html = "";

		var settings = my_class.plans;

		html += '<div class="flix-col-md-12"><div class="flix-well flix-text-center"><h1 class="flix-html-h1 flix-current-credit"></h1>Aktuelles Guthaben</div></div>';

		$.each(settings.prices, function (k, v) {

			v = my_class.get_calculate_tax(v, settings.tax, settings.unit);

			html += my_class.get_cell(k, v, settings.unit);
		});

		flix_setup_code.flix_load_script("https://www.paypal.com/sdk/js?client-id=" + my_class.client_id + "&currency=" + settings.currency + "&locale=" + settings.locale + "&vault=false", typeof paypal === "undefined" ? "undefined" : _typeof(paypal), function () {

			$(that).html(html);

			my_class.get_paypal_buttons(settings);

			my_class.get_hover_panel();
			my_class.get_current_credits();
		});
	};

	this.get_current_credits = function () {

		$(".flix-current-credit").html(flix_parent.get_loader());

		var send = {
			user: my_class.login
		};

		$.post(FLIX_URLS.api + my_class.lang + "/dashboard/credits", send).success(function (data) {

			if (!data[0]) return false;

			$(".flix-current-credit").html(data[1].available).addClass("flix-text-success");

			setTimeout(function () {
				$(".flix-current-credit").removeClass("flix-text-success");
			}, 2000);
		});
	};

	this.get_hover_panel = function () {

		$(that).find(".flix-panel").mouseenter(function () {

			$(this).css({ transition: "all ease-in-out 0.2s", transform: "scale(1.05)" }).toggleClass("flix-panel-default flix-panel-primary");
		}).mouseleave(function () {

			$(this).css({ transform: "scale(1)" }).toggleClass("flix-panel-default flix-panel-primary");
		});
	};

	this.get_paypal_buttons = function (settings) {

		$.each(settings.prices, function (k, v) {
			my_class.get_paypal(".data-flix-plan-" + k, v, settings, v.amount + " Guthaben");
		});

		my_class.get_check_user();
	};

	this.get_calculate_tax = function (v, tax, unit) {

		v.price = v.amount * unit;

		if (typeof v.discount != "undefined") v.price = v.price - v.price * (v.discount / 100);

		if (typeof v.discount == "undefined") v.discount = 0;

		v.tax = v.price * tax;

		v.price = Math.round(v.price * 10) / 10;

		v.price = v.price.toFixed(2);
		return v;
	};

	this.get_cell = function (k, i, unit) {

		var v = $.parseJSON(JSON.stringify(i));

		var html = "";

		html += '<div class="flix-col-md-4">';
		html += '<div class="flix-panel flix-text-center flix-panel-default">';
		html += '<div class="flix-panel-heading">+ <div class="flix-panel-title">' + v.amount + ' </div>Guthaben</div>';
		html += '<div class="flix-panel-body">';
		html += '<ul class="flix-list-group">';
		html += '<li class="flix-list-group-item"><strong>' + v.price.replace(".", ",") + ' EUR</strong><br>' + v.discount + '% Rabatt</li>';
		html += '<li class="flix-list-group-item">';
		html += '<i class="flix-glyphicon flix-glyphicon-ok"></i> Kontingent erweitern</li>';
		html += '<li class="flix-list-group-item"><i class="flix-glyphicon flix-glyphicon-ok"></i> SMS-Terminerinnerungen freischalten</li>';
		html += '<li class="flix-list-group-item"><i class="flix-glyphicon flix-glyphicon-ok"></i> Direkt nutzbar</li>';
		html += '<li class="flix-list-group-item"><i class="flix-glyphicon flix-glyphicon-ok"></i> Sichere Bezahlung</li>';
		html += '</ul>';
		html += '</div>';
		html += '<div class="flix-panel-footer"><div class="data-flix-plan data-flix-plan-' + k + '"></div><div class="flix-user-alert"></div></div>';
		html += '</div></div>';

		return html;
	};

	this.get_check_user = function () {

		$.post(FLIX_URLS.api + my_class.lang + "/user/get_user", { user: my_class.login }).success(function (data) {

			$(that).find(".flix-panel-footer").find(".data-flix-plan").removeClass("flix-hide");
			$(that).find(".flix-panel-footer").find(".flix-user-alert").html("");

			if (typeof data[1].first_name == "string" && data[1].first_name != "") return false;

			$(that).find(".flix-panel-footer").find(".data-flix-plan").addClass("flix-hide");
			$(that).find(".flix-panel-footer").find(".flix-user-alert").html("<a href='#' class='flix-btn flix-btn-warning flix-btn-block flix-btn-userdata'>Rechnungsdaten hinterlegen</a>");

			$(that).find(".flix-panel-footer .flix-user-alert .flix-btn-userdata").unbind("click");

			$(that).find(".flix-panel-footer .flix-user-alert .flix-btn-userdata").click(function () {

				flix_parent.get_new_section($(that), {
					title: $(this).text(),
					html: '<div class="userprofile" data-flix-language="' + my_class.lang + '"></div>',
					onReady: function onReady(ret) {
						new flix_user(ret.container.find(".userprofile"), flix_setup_code, flix_parent).build();
					},
					onClose: function onClose(ret) {
						my_class.get_check_user();
					}
				});

				return false;
			});
		});
	};

	this.get_paypal = function (btn, v, set, description) {

		var settings = {

			createOrder: function createOrder(data, actions) {

				return actions.order.create({
					purchase_units: [{

						description: description,

						amount: {
							value: v.price
						}

					}]
				});
			},

			onApprove: function onApprove(data, actions) {

				return actions.order.capture().then(function (details) {

					my_class.get_handle_pay({
						amount: v.amount,
						price: v.price,
						tax: v.tax,
						tax_percent: set.tax, //
						currency: set.currency,
						discount: v.discount,
						cost_per_unit: set.unit,
						server_response: details
					}, function () {
						my_class.get_current_credits();
					});
				});
			}

		};

		paypal.Buttons(settings).render(btn);
	};

	this.get_handle_pay = function (data, callback) {

		var send = {

			user: my_class.login,

			data: data

		};

		$.post(FLIX_URLS.api + my_class.lang + "/credit/pay", send).success(function (pay) {

			if (!pay[0]) return false;

			$.post(FLIX_URLS.api + my_class.lang + "/credit/create_innovoice", { user: send.user, ID: pay[1].ID }).success(function (pdf) {

				$.post(FLIX_URLS.api + my_class.lang + "/credit/send_innovoice", { user: send.user, ID: pay[1].ID }).success(function (email) {

					callback();
				});
			});
		});
	};

	return this;
};
"use strict";

var flix_pricing = function flix_pricing(that, flix_setup_code, flix_parent, atts) {

	var my_class = this;
	var post_url = flix_parent.post_url;

	this.do = function () {

		flix_parent.get_styles();
		flix_parent.get_animateCSS();

		if ($(that).attr("data-flix-language")) post_url += "?l=" + $(that).attr("data-flix-language");

		flix_parent.set_post_url(post_url);

		$(that).html(flix_parent.get_loader());

		var html = $(that);
		my_class.get_pricing();
	};

	this.get_scenarios = function () {

		var calc = $(that).find("[data-calculate]");

		$(that).find("input[type='range']").val(calc.eq(0).attr("data-calculate"));

		calc.eq(0).find(".flix-btn").toggleClass("flix-btn-default flix-btn-primary");

		calc.find(".flix-btn").unbind("click");

		calc.find(".flix-btn").click(function () {

			my_class.clean_calc_btns();
			$(this).toggleClass("flix-btn-default flix-btn-primary");

			$(that).find("input[type='range']").val($(this).closest("[data-calculate]").attr("data-calculate"));
			my_class.get_range_value($(this).closest("[data-calculate]").attr("data-calculate"));

			return false;
		});
	};

	this.clean_calc_btns = function () {

		$(that).find("[data-calculate]").find(".flix-btn").removeClass("flix-btn-primary").addClass("flix-btn-default");
	};

	this.get_range = function () {

		$(that).find("input[type='range']").on("input", function () {
			my_class.get_range_value($(this).val());
		}).on("change", function () {
			my_class.get_range_value($(this).val());my_class.clean_calc_btns();
		});

		my_class.get_range_value($(that).find("input[type='range']").val());
	};

	this.get_range_value = function (val) {

		$(that).find(".flix-range-value").html(val);
		$(that).find(".flix_calc").html(val * 0.10);
	};

	this.get_pricing = function () {

		var send = {
			"class": "frontend/flix-pricing.php",
			"action": "get_pricing",
			"user": localStorage.getItem("flix_login")
		};

		$.post(post_url, send).success(function (data) {

			$(that).html(data);
			my_class.get_scenarios();
			my_class.get_range();
		});
	};

	this.do();
	return this;
};
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var flix_product_designer = function flix_product_designer(that, flix_setup_code, flix_parent) {

  var my_class = this;
  my_class.lang = $(that).attr("data-flix-language");

  var post_url = flix_parent.post_url;

  this.do = function () {

    flix_parent.get_styles();
    flix_parent.get_animateCSS();

    if ($(that).attr("data-flix-language")) post_url += "?l=" + $(that).attr("data-flix-language");

    flix_parent.set_post_url(post_url);

    $(that).html(flix_parent.get_loader());

    $(that).html(flix_parent.get_loader());

    var html = $(that);

    $(that).html(flix_parent.get_login(html, function () {

      my_class.get_menu();
    }));
  };

  this.get_menu = function () {

    $(that).html(flix_parent.get_loader());

    flix_setup_code.flix_load_css('https://productdesigner.terminflix.de/css/style-min.css', function () {

      flix_setup_code.flix_load_script('https://productdesigner.terminflix.de/js/global-min.js', _typeof($.fn.product_designer), function () {

        new flix_overhead(that, {
          onReady: function onReady(data) {
            my_class.get_change_event(data);
          },
          onChange: function onChange(data) {
            my_class.get_change_event(data);
          }
        }).build();
      });
    });
  };

  this.get_change_event = function (ret) {

    var send = {};

    send.class = "frontend/flix-product-designer.php";
    send.user = localStorage.getItem("flix_login");
    send.event_id = ret.id;
    send.action = "get_replace_data";
    my_class.get_manager(send, ret);
  };

  this.get_manager = function (send, ret) {

    ret.stage.html("");

    $.post(post_url, send).success(function (data) {

      data = $.parseJSON(data);

      if (!data[0]) {
        ret.stage.html(data[1]);
        return false;
      }

      ret.stage.product_designer({

        "document": { "title": data[1].title },
        "imgs": "https://imgserver.terminflix.de/app/?get_json",
        "blocks": "https://productdesigner.terminflix.de/php/json.php?f=blocks",
        "blocks_url": "https://productdesigner.terminflix.de/php/html.php?f=",
        "svg_url": "https://productdesigner.terminflix.de/img/",
        "save": { "url": FLIX_URLS.api + $(that).attr("data-flix-language") + "/images/save_prints", "user": send.user, "event_id": ret.id },
        "replace": data[1].replace,
        "blocks_saved": { "url": FLIX_URLS.api + $(that).attr("data-flix-language") + "/images/get_prints", "user": send.user, "event_id": ret.id }

      });
    });
  };

  this.do();
};
'use strict';

var flix_setup = function flix_setup(attr) {

  var my_class = this;
  var flix_parent = new flix_termin_flix(false, my_class);

  this.do = function () {

    jQuery.noConflict();
    $ = jQuery;

    flix_parent.get_sweetalert(function () {
      my_class.run();
    });
  };

  this.get_pageleave = function () {

    $(window).unbind('beforeunload.terminflix');

    $(window).bind('beforeunload.terminflix', function () {
      return 'Are you sure you want to leave?';
    });

    $(window).on('beforeunload.terminflix', function () {
      return 'Are you sure you want to leave?';
    });

    return false;
  };

  this.run = function () {

    my_class.load_part($("[data-flix]"), function (attr) {
      new flix_ressources_embed(attr, my_class, flix_parent, { crypt: attr.attr("data-flix"), lang: "de" }).build();
    });
    my_class.load_part($("[data-flix-menu]"), function (attr) {
      new flix_dashboard(attr, my_class, flix_parent).build();
    });
    my_class.load_part($("[data-flix-galery]"), function (attr) {
      new flix_galery(attr, my_class, flix_parent);
    });
    my_class.load_part($("[data-flix-page-manager]"), function (attr) {
      new flix_page_manager(attr, my_class, flix_parent);
    });
    my_class.load_part($("[data-flix-help-manager]"), function (attr) {
      new flix_help_manager(attr, my_class, flix_parent);
    });
    my_class.load_part($("[data-flix-help-center]"), function (attr) {
      new flix_help_center(attr, my_class, flix_parent);
    });
    my_class.load_part($("[data-flix-sign-up]"), function (attr) {
      new flix_sign_up(attr, my_class, flix_parent);
    });
    my_class.load_part($("[data-flix-termin-wizard]"), function (attr) {
      new flix_termin_wizard(attr, my_class, flix_parent).build();
    });
    my_class.load_part($("[data-flix-automailer]"), function (attr) {
      new flix_automailer_container(attr, my_class, flix_parent).presets();
    });
    my_class.load_part($("[data-flix-entry-manager]"), function (attr) {
      new flix_entry_manage(attr, my_class, flix_parent).build();
    });
    my_class.load_part($("[data-flix-list]"), function (attr) {
      new flix_list_events(attr, my_class, flix_parent);
    });
    my_class.load_part($("[data-flix-list-events]"), function (attr) {
      new flix_list_events(attr, my_class, flix_parent);
    });
    my_class.load_part($("[data-flix-user]"), function (attr) {
      new flix_user(attr, my_class, flix_parent).build();
    });
    my_class.load_part($("[data-flix-manual-generator]"), function (attr) {
      new flix_manual_generator(attr, my_class, flix_parent);
    });

    //my_class.load_part( $("[data-flix-hit-survey]"), function(attr){  new flix_hit_survey( attr, my_class, flix_parent ); }  );
    my_class.load_part($("[data-flix-hit-survey]"), function (attr) {
      new flix_hit_survey(attr, my_class, flix_parent);
    });
    my_class.load_part($("[data-flix-hitclick-connect]"), function (attr) {
      new flix_hit_connect(attr, my_class, flix_parent);
    });
    my_class.load_part($("[data-page-builder]"), function (attr) {
      new flix_landingpage_manager(attr, {}).build();
    });
    my_class.load_part($("[data-flix-chat]"), function (attr) {
      new flix_chat(attr, my_class, flix_parent);
    });
    my_class.load_part($("[data-flix-chat-center]"), function (attr) {
      new flix_chat_center(attr, my_class, flix_parent);
    });
    my_class.load_part($("[data-flix-support-center]"), function (attr) {
      new flix_support_center(attr, my_class, flix_parent).build();
    });
    my_class.load_part($("[data-flix-delete-account]"), function (attr) {
      new flix_delete_account(attr, my_class, flix_parent).build();
    });
    my_class.load_part($("[data-flix-payment]"), function (attr) {
      new flix_credit(attr, my_class, flix_parent);
    });
    my_class.load_part($("[data-flix-invoice]"), function (attr) {
      new flix_inovoice(attr, my_class, flix_parent);
    });
    //my_class.load_part( $("[data-flix-membership]"), function(attr){  new flix_membership( attr, my_class, flix_parent ); }  );
    //my_class.load_part( $("[data-flix-team]"), function(attr){  new flix_team( attr, my_class, flix_parent ); }  );
    my_class.load_part($("[data-flix-admin]"), function (attr) {
      new flix_admin(attr, my_class, flix_parent);
    });
    my_class.load_part($("[data-flix-codegen]"), function (attr) {
      new flix_form_codegen(attr, my_class, flix_parent).build();
    });
    my_class.load_part($("[data-flix-product-designer]"), function (attr) {
      new flix_product_designer(attr, my_class, flix_parent);
    });
    my_class.load_part($("[data-flix-dashboard]"), function (attr) {
      new flix_dashboard(attr, my_class, flix_parent).build();
    });
    my_class.load_part($("[data-flix-holiday]"), function (attr) {

      var hp = new flix_holiday(attr, my_class, flix_parent).build();
    });

    my_class.load_part($("[data-flix-serial]"), function (attr) {
      new flix_calendar(attr, my_class, flix_parent);
    });
    my_class.load_part($("[data-flix-text-editor]"), function (attr) {
      new flix_text_editor(attr, my_class, flix_parent);
    });
    my_class.load_part($("[data-flix-backup]"), function (attr) {
      new flix_backup(attr, my_class, flix_parent);
    });
    my_class.load_part($("[data-flix-pricing]"), function (attr) {
      new flix_pricing(attr, my_class, flix_parent);
    });
    my_class.load_part($("[data-flix-blacklist]"), function (attr) {
      var bl = new flix_blacklist(attr, my_class, flix_parent);bl.list_black_list();
    });

    my_class.load_part($("[data-flix-attendance]"), function (attr) {
      new flix_attendance(attr, my_class, flix_parent).build();
    });
    my_class.load_part($("[data-flix-ressources]"), function (attr) {
      new flix_ressources(attr, my_class, flix_parent).build();
    });
    my_class.load_part($("[data-flix-shares]"), function (attr) {
      new flix_shares(attr, my_class, flix_parent).build();
    });
    my_class.load_part($("[data-flix-service]"), function (attr) {
      new flix_booking_service(attr, my_class, flix_parent).build();
    });
  };

  this.load_part = function (attr, callback, force) {

    if (typeof force == "undefined") force = false;

    if (attr.length == 0) return false;

    attr.each(function () {

      if (force == false && $(this).html().length > 0) return false;

      callback($(this), my_class, flix_parent);
    });
  };

  this.flix_load_css = function (url, callback) {

    if ($("link[href='" + url + "']").length * 1 > 0) {

      if (typeof callback == "function") callback();

      return false;
    }

    $('<link/>', {
      rel: 'stylesheet',
      type: 'text/css',
      href: url
    }).appendTo('head');

    if (typeof callback == "function") callback($(this), my_class, flix_parent);
  };

  this.flix_load_script = function (url, typeof_check, callback, async_) {

    if (typeof async_ == "undefined") async_ = true;

    if (typeof $ != "undefined" && $(document).find("script[src='" + url + "']").length > 0) {

      callback();
      return false;
    }

    if (typeof_check == "undefined") {

      var headTag = document.getElementsByTagName("head")[0];

      var jqTag = document.createElement('script');

      jqTag.type = 'text/javascript';
      jqTag.async = async_;
      jqTag.src = url;

      jqTag.onload = callback;

      headTag.appendChild(jqTag);
    } else {

      if (typeof callback == "function") callback();
    }
  };

  if (typeof attr != "undefined" && attr == false) return false;else this.do();

  return this;
};
"use strict";

var flix_sign_up = function flix_sign_up(that, flix_setup_code, flix_parent) {

	var my_class = this;
	var post_url = flix_parent.post_url;

	this.do = function () {

		flix_parent.get_styles();
		flix_parent.get_animateCSS();

		if ($(that).attr("data-flix-language")) post_url += "?l=" + $(that).attr("data-flix-language");

		flix_parent.set_post_url(post_url);

		var html = $(that);

		$(that).html(flix_parent.get_loader());

		my_class.mode = "standard";

		my_class.get_sign_up();
	};

	this.get_sign_up = function () {

		flix_parent.get_register_form($(that), function (data) {

			var login = localStorage.getItem("flix_login");

			if (typeof login == "undefined" || login == null || !login) return false;

			new flix_dashboard($(that), flix_setup_code, flix_parent).build();

			//flix_setup_code.flix_load_script( FLIX_URLS.embed+'/flix_menu.js?v='+$.now(), typeof $.fn.flix_menu, function(){  $( my_class ).flix_menu(); });

		});
	};

	this.do();

	return this;
};
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var flix_hit_survey = function flix_hit_survey(that, flix_setup_code, flix_parent) {

	var my_class = this;
	flix_parent.my_subclass = my_class;

	var post_url = flix_parent.post_url;

	this.do = function () {

		flix_parent.get_styles();

		if ($(that).attr("data-flix-language")) post_url += "?l=" + $(that).attr("data-flix-language");

		flix_parent.set_post_url(post_url);

		$(that).html(flix_parent.get_loader());

		var html = $(that);

		my_class.get_survey_menu();
	};

	this.get_survey_menu = function () {

		$(that).html("<div data-hit-dashboard data-hit-language='" + that.attr("data-flix-language") + "'></div>");
		my_class.get_survey();
	};

	this.get_survey = function () {

		localStorage.setItem("hit_login", localStorage.getItem("flix_login"));
		//localStorage.removeItem("hit_login");


		flix_setup_code.flix_load_script(FLIX_URLS.hit_url + 'assets/js/dynamic/hit-setup.js?ver=1', typeof hit_setup === "undefined" ? "undefined" : _typeof(hit_setup), function () {
			new hit_setup();
		}, false);
	};

	this.do();
	return this;
};
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var flix_termin_flix = function flix_termin_flix(that, flix_setup_code, atts) {

	var my_class = this;
	var post_url = FLIX_URLS.flix + 'assets/php/post/post.php';
	var upload_url = FLIX_URLS.flix + 'assets/php/post/upload.php';
	var lang = "de";
	var loadedScripts = [];

	this.do = function () {

		if (typeof $(that).attr("data-flix") == "undefined" || $(that).attr("data-flix").length == 0) return false;

		if (typeof my_class[0] == "undefined") return false;

		if ($(that).attr("data-language")) {
			post_url = post_url + "?l=" + $(that).attr("data-language");
		}

		if ($(that).attr("data-flix-language")) {
			post_url = post_url + "?l=" + $(that).attr("data-flix-language");
		}

		if (typeof atts != "undefined" && typeof atts.output_filter != "undefined" && atts.output_filter == "get_entries") return my_class.get_entries();

		my_class.get_form();
	};

	this.set_logout = function () {

		$("[data-flix-resend-confirm-message]").unbind("click");

		$("[data-flix-resend-confirm-message]").click(function () {

			var btn = $(this);
			var send = {};

			send.action = "resend_confirm_message";
			send["class"] = "frontend/flix-form-login.php";
			send.user = localStorage.getItem("flix_login");

			$.post(post_url, send).success(function (data) {

				btn.closest(".flix-alert").html(data);
			});

			return false;
		});

		$(".flix-logout, [data-flix-menu-item='logout']").unbind("click");

		$(".flix-logout, [data-flix-menu-item='logout']").click(function () {

			var send = {};
			send["class"] = "frontend/flix-form-admin.php";
			send.action = "get_logout_msg";

			my_class.get_sweetalert(function () {

				$.post(post_url, send).success(function (data) {

					data = $.parseJSON(data);

					swal.fire(data).then(function (response) {

						if (typeof response.value == "undefined" || !response.value) return false;

						send.action = "set_logout";

						localStorage.removeItem("flix_login");

						$.post(post_url, send).success(function (data) {

							location.reload();
						});
					});
				});
			});

			return false;
		});
	};

	this.get_entries = function () {

		my_class.get_styles();
		my_class.get_animateCSS();

		$(that).html(my_class.get_loader());

		var send = {};
		send.action = "get_entry_list";
		send["class"] = "frontend/flix-form-api.php";
		send.form_id = $(that).attr("data-flix");

		$.post(post_url, send).success(function (data) {

			setTimeout(function () {

				$(that).html(data);

				my_class.get_show_settings();
				my_class.set_delete_entry();
			}, 2000);
		});
	};

	this.set_delete_entry = function () {

		$(that).find(".btn-delete").unbind("click");

		$(that).find(".btn-delete").click(function () {

			my_class.set_submit_setting_action($(this).closest(".flix_panel"), "delete");

			return false;
		});

		$(that).find(".btn-commitment").unbind("click");

		$(that).find(".btn-commitment").click(function () {

			my_class.set_submit_setting_action($(this).closest(".flix_panel"), "commitment");

			return false;
		});

		$(that).find(".btn-cancellation").unbind("click");

		$(that).find(".btn-cancellation").click(function () {

			my_class.set_submit_setting_action($(this).closest(".flix_panel"), "cancellation");

			return false;
		});
	};

	this.set_submit_setting_action = function (panel, action) {

		var send = {};

		send.action = "set_entry_action";

		send.subaction = action;

		send["class"] = "frontend/flix-form-api.php";
		send.form_id = $(that).attr("data-flix");
		send.entry_id = panel.find("[data-flix-entry-id]").attr("data-flix-entry-id");

		$.post(post_url, send).success(function (data) {

			if (send.subaction == "delete") {

				panel.addClass("flix-animated flix-fadeOutDown");

				setTimeout(function () {

					my_class.get_entries();
				}, 800);
			} else my_class.get_entries();
		});
	};

	this.get_show_settings = function () {

		$(that).find(".btn-settings").unbind("click");

		$(that).find(".btn-settings").click(function () {

			$(this).toggleClass("flix-btn-default flix-btn-primary");
			$(this).closest(".flix_panel").find(".settings_panel").toggleClass("flix_hide flix-animated flix-bounceIn");

			return false;
		});
	};

	this.get_submit_form = function (settings) {

		settings.form.unbind("submit");

		settings.form.submit(function () {

			settings.form.find(".flix_alert_validation").remove();

			//my_class.set_to_scroll_position( settings.form.find(".sk-cube-grid") );

			var form = $(that);

			var send = {};
			send.data = $(this).serializeArray();
			send.data = JSON.stringify(send.data);
			send.class = settings.target;

			if (_typeof(settings.settings) == "object") send.settings = settings.settings;

			send.action = "get_check_send_form";

			send.required = {};

			settings.form.find("[data-required='1']").each(function (k) {

				send.required[$(this).attr("name")] = $(this).closest("[data-elem]").attr("data-elem");
			});

			send.required = JSON.stringify(send.required);

			if (typeof $(that).attr("data-flix-time") != "undefined" && $(that).attr("data-flix-time").length > 0) send.timestamp = $(that).attr("data-flix-time");

			if (typeof $(that).attr("data-flix-event") != "undefined" && $(that).attr("data-flix-event").length > 0) send.event_id = $(that).attr("data-flix-event");

			if (typeof settings != "undefined" && typeof settings.settings != "undefined" && typeof settings.settings.preSubmit == "function") {
				settings.settings.preSubmit({ settings: settings, send: send, sendForm: function sendForm(settings, send) {
						my_class.set_send_form(settings, send);
					} });
				return false;
			} else my_class.set_send_form(settings, send);

			return false;
		});
	};

	this.set_send_form = function (settings, send) {

		my_class.get_fullscreen_loader();

		$.post(post_url, send).success(function (resp) {

			resp = JSON.parse(resp);

			my_class.rm_fullscreen_loader();
			my_class.set_form_validation_msg(resp, settings);
			my_class.set_to_scroll_position(settings.form);
		});
	};

	this.set_form_validation_msg = function (resp, settings) {

		if (resp[0] === true) {

			if (typeof settings.onSuccess == "function") {

				settings.onSuccess(resp);
				return false;
			}

			settings.form.html('<div class="flix-alert flix-alert-success"><i class="flix_glyphicon flix_glyphicon-ok"></i> ' + resp[1] + '</div>');

			return false;
		}

		if (resp[0] === false) {

			if (typeof settings.onError == "function") {

				settings.onError(resp);
			}

			settings.form.prepend('<div class="flix-alert flix-alert-danger flix_alert_validation">' + resp[1] + '</div>');
			settings.form.append('<div class="flix-alert flix-alert-danger flix_alert_validation">' + resp[1] + '</div>');

			$.each(resp[2], function (k, v) {

				settings.form.find("[name='" + k + "']").closest(".flix-form-group").append('<div class="flix-alert flix-alert-warning flix_alert_validation"> ' + v + '</div>');
			});
		}
	};

	this.set_to_scroll_position = function (selector, settings) {

		if (typeof selector == "undefined" || $(selector).length == 0) return false;

		var pos = "";

		var atts = {};

		if (typeof settings != "undefined" && typeof settings.axis != "undefined" && settings.axis == "x") {
			pos = $(settings.selector).offset().left - $(selector).offset().left;

			if (typeof settings.margin != "undefined") pos = pos + settings.margin;

			atts = { scrollLeft: pos };
			$(selector).animate(atts, 800);
		} else {
			pos = $(selector).offset().top;
			pos = pos - 150;
			atts = { scrollTop: pos };
			$('html, body').animate(atts, 800);
		}
	};

	this.set_tinymce = function (attr, lang, settings) {

		if ((typeof settings === 'undefined' ? 'undefined' : _typeof(settings)) != "object") settings = { language: lang };

		if (typeof settings.language == "undefined") settings.language = lang;

		if (typeof attr == "undefined") return false;

		settings.setup = function (editor) {

			editor.on('change', function () {
				editor.save();
			});
		};

		if (attr.length > 0) {

			my_class.get_tinymce(function () {

				my_class.tinymce_editors = {};

				attr.each(function () {

					my_class.tinymce_editors[$(this).attr("id")] = $(this);

					if (typeof tinyMCE == "undefined") return true;

					my_class.tinymce_editors[$(this).attr("id")].addClass("tinymce");

					if ((typeof tinyMCE === 'undefined' ? 'undefined' : _typeof(tinyMCE)) == "object") {
						my_class.tinymce_editors[$(this).attr("id")].tinymce_main(settings);
					}
				});
			});
		}
	};

	this.get_tinymce = function (callback) {

		flix_setup_code.flix_load_script(FLIX_URLS.tinymce, typeof tinymce === 'undefined' ? 'undefined' : _typeof(tinymce), function () {

			$("script[src='" + FLIX_URLS.tinymce_jquery + "']").remove();

			flix_setup_code.flix_load_script(FLIX_URLS.tinymce_jquery, _typeof($.fn.tinymce_main), function () {

				setTimeout(function () {

					if (typeof $.fn.tinymce_main == "undefined") my_class.get_tinymce(callback);else if (typeof callback == "function") {
						callback();
					}
				}, 1000);
			});
		});
	};

	this.set_colorpicker = function (attr, settings) {

		if (typeof attr == "undefined" || $(attr).length == 0 || typeof $.fn.spectrum != "function") return false;

		$(attr).each(function () {

			var id = $(this).attr("id");

			$('label[for="' + id + '"]').unbind("click");
			$('label[for="' + id + '"]').click(function () {

				return false;
			});
		});

		var defaults = {
			clickoutFiresChange: true,
			showPalette: true,
			showPaletteOnly: false,
			//togglePaletteOnly: true,
			//togglePaletteMoreText: 'mehr',
			//togglePaletteLessText: 'weniger',
			showSelectionPalette: true,
			palette: [["#000", "#444", "#666", "#999", "#ccc", "#eee", "#f3f3f3", "#fff"], ["#f00", "#f90", "#ff0", "#0f0", "#0ff", "#00f", "#90f", "#f0f"], ["#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#cfe2f3", "#d9d2e9", "#ead1dc"], ["#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#9fc5e8", "#b4a7d6", "#d5a6bd"], ["#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6fa8dc", "#8e7cc3", "#c27ba0"], ["#c00", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3d85c6", "#674ea7", "#a64d79"], ["#900", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#0b5394", "#351c75", "#741b47"], ["#600", "#783f04", "#7f6000", "#274e13", "#0c343d", "#073763", "#20124d", "#4c1130"]],
			localStorageKey: "spectrum.terminflix"
		};

		if ((typeof settings === 'undefined' ? 'undefined' : _typeof(settings)) == "object") {

			$.each(settings, function (k, v) {

				defaults[k] = v;
			});
		}

		$(attr).spectrum(defaults);

		$(attr).on("change.spectrum", function (e, color) {

			$(this).val(color.toHexString());
		});
	};

	this.get_colorpicker = function (attr, settings) {

		if (typeof my_class.set_load_colorpicker == "undefined") my_class.set_load_colorpicker = _typeof($.fn.spectrum);

		flix_setup_code.flix_load_css("https://cdn.hit-or-shit.com/tools/colorpicker/spectrum.css", function () {

			flix_setup_code.flix_load_script("https://cdn.hit-or-shit.com/tools/colorpicker/spectrum.min.js", my_class.set_load_colorpicker, function () {

				my_class.set_colorpicker(attr, settings);
			});
		});

		my_class.set_load_colorpicker = "function";
	};

	this.get_datepicker = function (attr, callback) {

		if (typeof attr == "undefined") attr = my_class;

		if (typeof my_class.my_subclass != "undefined") attr = my_class.my_subclass;

		flix_setup_code.flix_load_css("https://cdn.hit-or-shit.com/tools/datepicker2/datepicker.css", function () {

			flix_setup_code.flix_load_script("https://cdn.hit-or-shit.com/tools/datepicker2/datepicker2.min.js", _typeof($.fn.datepicker2), function () {

				my_class.set_datepicker(attr);

				if (typeof callback == "function") callback();
			});
		});
	};

	this.get_hammer = function (callback) {

		flix_setup_code.flix_load_script("https://cdn.hit-or-shit.com/tools/hammer/hammer.min.js", typeof hammer === 'undefined' ? 'undefined' : _typeof(hammer), function () {

			flix_setup_code.flix_load_script("https://cdn.hit-or-shit.com/tools/hammer/jquery.hammer.js", _typeof($.fn.hammer), function () {

				if (typeof callback == "function") callback();
			});
		});
	};

	this.get_ace = function (callback) {

		flix_setup_code.flix_load_script("https://cdn.vorbild-unternehmer.de/tools/source_code/src-noconflict/ace.js", typeof ace === 'undefined' ? 'undefined' : _typeof(ace), function () {

			if (typeof callback == "function") callback();
		});
	};

	this.get_sweetalert = function (callback) {

		flix_setup_code.flix_load_script(FLIX_URLS.swal, typeof swal === 'undefined' ? 'undefined' : _typeof(swal), function () {

			if (typeof callback == "function") callback();
		});
	};

	this.get_animateCSS = function () {

		//flix_setup_code.flix_load_css( FLIX_URLS.flix+"assets/css/animate.css" );

	};

	this.get_chartist = function (callback) {

		flix_setup_code.flix_load_css(FLIX_URLS.cdn + "/vendors/bower_components/chartist/dist/chartist.min.css", function () {

			flix_setup_code.flix_load_script(FLIX_URLS.cdn + "/vendors/bower_components/chartist/dist/chartist.js", typeof Chartist === 'undefined' ? 'undefined' : _typeof(Chartist), function () {

				if (typeof callback == "function") callback();
			});
		});
	};

	this.set_post_url = function (url) {

		post_url = url;
	};

	this.set_hidden_upload_field = function (container, resp) {

		if (!resp) {

			return false;
		}

		resp = $.parseJSON(resp);

		if (!resp[0]) return false;

		$.each(resp[2], function (k, v) {

			container.find(".set_upload_waiting").html(v);
		});

		$.each(container.find(".set_upload_waiting").find("img"), function (i) {

			$(this).attr("src", $(this).attr("src") + "?" + $.now());
		});

		$.each(resp[1], function (k, v) {
			container.find("input[type=hidden][name=" + k + "]").val(JSON.stringify(resp[1]));
		});
	};

	this.get_galery = function () {

		var send = {};
		send.action = "get_galery_picker";
		send["class"] = "frontend/flix-galery.php";
		send.user = localStorage.getItem("flix_login");

		$.post(post_url, send).success(function (data) {

			data = $.parseJSON(data);

			$('.flix-upload-btn-wrapper').each(function () {

				var wrapper = $(this);

				var container = wrapper.closest("[data-elem]").parent();

				container.after(data[1]);

				container.closest(".galery-wrapper").remove();

				container.next().find(".flix_btn-galery").unbind("click");

				container.next().find(".flix_btn-galery").click(function () {

					my_class.get_sweetalert(function () {

						swal.fire(data[0]);

						//container.next().append("<div class='show_images' data-flix-galery='"+localStorage.getItem("flix_login")+"' data-flix-language='"+lang[1]+"'></div>");

						new flix_galery($(".swal2-content").find("[data-flix-galery]"), flix_setup_code, my_class, { mode: "picker", "container": container });

						//my_class.set_to_scroll_position( container.next().find("[data-flix-galery]") );

					});

					return false;
				});
			});
		});
	};

	this.set_upload_resize = function (container, input_img, settings) {

		my_class.get_sweetalert(function () {

			img = $.parseJSON(input_img);
			var img_url = img;

			img_url = img_url[2][Object.keys(img_url[2])[0]];

			swal.fire({ "title": "Resize image", "html": img_url, "width": "80vw" }).then(function () {

				var send = {};
				send.action = "get_img_crop";
				send.crop = my_class.temp_crop;
				send.crop.output = settings.output;

				$.post(upload_url, send).success(function (data) {

					if ((typeof settings === 'undefined' ? 'undefined' : _typeof(settings)) == "object" && typeof settings.callback == "function") settings.callback();

					my_class.set_hidden_upload_field(container, input_img);
				});
			});

			my_class.temp_crop = { "url": img[1][Object.keys(img[1])[0]] };

			$("img[src='" + my_class.temp_crop.url + "']").load(function () {

				var img_container = $(this);

				flix_setup_code.flix_load_css("https://cdn.hit-or-shit.com/tools/chop/cropper.css", function () {

					flix_setup_code.flix_load_script("https://cdn.hit-or-shit.com/tools/chop/cropper.js", typeof Cropper === 'undefined' ? 'undefined' : _typeof(Cropper), function () {

						my_class.get_crop_image(img_container, settings);
					});
				});
			});
		});
	};

	this.get_crop_image = function (img_, settings) {

		var id = "img-crop" + $.now();

		img_.addClass(id);

		var img = document.querySelector("." + id);

		var elem = $("." + id);

		var send = {};
		send.resizeW = elem.width();
		send.resizeH = elem.height();
		var previewWidth = elem.outerWidth();

		var cropper = new Cropper(img, {

			aspectRatio: settings.output.width / settings.output.height,
			autoCropArea: 1,
			background: true,
			movable: false,
			rotatable: false,
			zoomable: false,
			scalable: false,
			cropBoxMovable: true,
			cropBoxResizable: true,
			viewMode: 1,
			crop: function crop(e) {

				var data = e.detail;
				var cropper = this.cropper;

				var imageData = cropper.getImageData();

				var Skalierungsfaktor = send.resizeW / imageData.naturalWidth;

				send.width = imageData.naturalWidth;
				send.height = imageData.naturalHeight;

				send.resizeW = data.width;
				send.resizeH = data.height;
				send.startX = data.x;
				send.startY = data.y;

				my_class.temp_crop.data = send;
			} });
	};

	this.set_upload = function (settings) {

		var allowed_filetypes = ['gif', 'png', 'jpg', 'jpeg'];

		if (_typeof(settings.allowed_filetypes) == "object") allowed_filetypes = settings.allowed_filetypes;

		if (typeof settings != "undefined" && typeof settings.galery != "undefined" && settings.galery == true) my_class.get_galery();

		$('.flix-upload-btn-wrapper input[type=file]').change(function () {

			var container = $(this).closest(".flix-form-group");
			var file_input = container.find("input[type=file]");

			var file_data = file_input.prop('files')[0];

			var upload_url_new = upload_url + "?usr=" + localStorage.getItem("flix_login");

			if (typeof settings.resize != "undefined") upload_url_new += "&resize=" + settings.resize;

			container.find(".set_upload_waiting").remove();

			container.prepend("<div class='set_upload_waiting'>" + my_class.get_loader() + "</div>");

			var send = {};
			send.allowed_filetypes = allowed_filetypes;
			send.file_name = file_input.val();
			send.action = "get_check_filetype";
			send["class"] = "frontend/flix-form-api.php";

			$.post(post_url, send).success(function (data) {

				data = $.parseJSON(data);

				setTimeout(function () {

					if (!data[0]) {

						container.find(".set_upload_waiting").html(data[1]);

						return false;
					}

					var send = new FormData();
					send.append(container.find("input[type=hidden]").attr("name"), file_data);

					$.ajax({
						url: upload_url_new,
						dataType: 'text',
						cache: false,
						contentType: false,
						processData: false,
						data: send,
						type: 'POST',
						success: function success(php_script_response) {

							if (_typeof(settings.output) == "object") return my_class.set_upload_resize(container, php_script_response, settings);

							if ((typeof settings === 'undefined' ? 'undefined' : _typeof(settings)) == "object" && typeof settings.callback == "function") settings.callback();

							my_class.set_hidden_upload_field(container, php_script_response);
						}

					});
				}, 1000);
			});

			return false;
		});

		$(".flix-upload-btn-wrapper").find("input[type=file]").addClass("flix-hide");

		$(".flix-upload_btn").unbind("click");
		$(".flix-upload_btn").click(function () {

			$(this).closest(".flix-upload-btn-wrapper").find("input[type=file]").trigger("click");
			return false;
		});
	};

	this.set_datepicker = function (attr) {

		var send = {};
		send.action = "get_datepicker_descriptions";
		send["class"] = 'frontend/flix-form-api.php';

		$.post(post_url, send).success(function (data) {

			data = $.parseJSON(data);

			$(attr).find("input[type=date]").each(function () {

				$(this).attr("type", "text").attr("readonly", true).datepicker2({
					format: 'yyyy-mm-dd',
					days: data.days,
					daysMin: data.daysMin,
					daysShort: data.daysShort,
					monthsShort: data.monthsShort,
					months: data.months,
					autoHide: true,
					'zIndex': 2000,
					/// startView: 2
					startView: 0
				}).css("cursor", "pointer");
			});
		});
	};

	this.get_styles = function () {

		flix_setup_code.flix_load_css(FLIX_URLS.cdn + "css/api_flix_styles.min.css?ver=13");
	};

	this.get_loader = function () {

		var loader_ = '<div class="sk-cube-grid">';
		loader_ += '<div class="sk-cube sk-cube1"></div>';
		loader_ += '<div class="sk-cube sk-cube2"></div>';
		loader_ += '<div class="sk-cube sk-cube3"></div>';
		loader_ += '<div class="sk-cube sk-cube4"></div>';
		loader_ += '<div class="sk-cube sk-cube5"></div>';
		loader_ += '<div class="sk-cube sk-cube6"></div>';
		loader_ += '<div class="sk-cube sk-cube7"></div>';
		loader_ += '<div class="sk-cube sk-cube8"></div>';
		loader_ += '<div class="sk-cube sk-cube9"></div>';
		loader_ += '</div>';

		loader_ = '<div class="sk-loader-grid">';
		loader_ += FLIX_LOGO;
		loader_ += '</div>';

		return loader_;
	};

	this.get_fullscreen_loader = function () {

		my_class.rm_fullscreen_loader();

		$("body").append('<div class="flix-fullscreen-loader">' + my_class.get_loader() + '</div>');
	};

	this.rm_fullscreen_loader = function () {

		$(".flix-fullscreen-loader").remove();
	};

	this.get_register_form = function (container, callback) {

		var user_id = localStorage.getItem("flix_login");

		if (typeof user_id == "string" && user_id) {
			callback();
			return false;
		}
		var login = new flix_login(container);
		login.lang = lang;

		if (container.attr("data-flix-language")) login.lang = container.attr("data-flix-language");

		login.callback = function (data) {
			callback(data);
		};
		login.register();
	};

	this.get_login = function (container, callback) {

		var user_id = localStorage.getItem("flix_login");

		if (user_id == null || user_id == undefined) {

			my_class.get_login_form(container, function (data) {
				callback(data);
			});
			my_class.rm_fullscreen_loader();
			return false;
		} else if (user_id) {

			if (typeof callback == "function") {

				container.html(my_class.get_loader());

				setTimeout(function () {

					callback();
				}, 1000);
			}

			return false;
		}
	};

	this.get_login_form = function (container, callback) {

		var login = new flix_login(container);
		login.lang = lang;

		if (container.attr("data-flix-language")) login.lang = container.attr("data-flix-language");

		login.callback = function (data) {
			callback(data);
		};
		login.login();
	};

	this.set_log_login = function () {

		var send = {};

		send.action = "set_log_login";
		send["class"] = "frontend/flix-form-login.php";

		send.user = localStorage.getItem("flix_login");

		send.data = {};

		send.data.device = $("[data-flix-device]").attr("data-flix-device");

		send.data.OS = "Unknown OS";

		if (navigator.appVersion.indexOf("Win") != -1) send.data.OS = "Windows";
		if (navigator.appVersion.indexOf("Mac") != -1) send.data.OS = "MacOS";
		if (navigator.appVersion.indexOf("X11") != -1) send.data.OS = "UNIX";
		if (navigator.appVersion.indexOf("Linux") != -1) send.data.OS = "Linux";

		if (navigator.userAgent.search("MSIE") >= 0) send.data.Browser = "MSIE";else if (navigator.userAgent.search("Chrome") >= 0) send.data.Browser = "Chrome";else if (navigator.userAgent.search("Firefox") >= 0) send.data.Browser = "Firefox";else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) send.data.Browser = "Safari";else if (navigator.userAgent.search("Opera") >= 0) send.data.Browser = "Opera";

		send.data.url = window.location.href;

		send.data.isMobile = 0;

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Opera Mobile|Kindle|Windows Phone|PSP|AvantGo|Atomic Web Browser|Blazer|Chrome Mobile|Dolphin|Dolfin|Doris|GO Browser|Jasmine|MicroB|Mobile Firefox|Mobile Safari|Mobile Silk|Motorola Internet Browser|NetFront|NineSky|Nokia Web Browser|Obigo|Openwave Mobile Browser|Palm Pre web browser|Polaris|PS Vita browser|Puffin|QQbrowser|SEMC Browser|Skyfire|Tear|TeaShark|UC Browser|uZard Web|wOSBrowser|Yandex.Browser mobile/i.test(navigator.userAgent)) {
			send.data.isMobile = 1;
		}

		$.post(post_url, send);
	};

	this.post_url = post_url;

	this.get_new_section = function (attr, settings) {

		var id = "" + $.now();

		var html = "";

		html += '<div class="flix-window flix-window-' + id + '">';
		html += '<div class="flix-panel flix-panel-default">';
		html += '<div class="flix-panel-heading flix-text-right">';
		html += '<a href="#" class="flix-html-html flix-html-a flix-close-section"><i class="flix-glyphicon flix-glyphicon-remove"></i></a>';

		if (typeof settings.title == "string") html += '<div class="flix-pull-left">' + settings.title + '</div>';

		html += '<div class="flix-clearfix"></div>';
		html += '</div>';
		html += '<div class="flix-panel-body">';
		html += settings.html;
		html += '</div>';
		html += '<div class="flix-panel-footer">';
		html += '<a href="#" class="flix-btn flix-btn-default flix-close-section flix-html-html"></a>';
		html += '</div>';
		html += '</div>';
		html += '</div>';

		if ((typeof settings.force_position != "boolean" || settings.force_position != true) && attr.closest(".flix-window").length > 0) attr = attr.closest(".flix-window");

		attr.css({ "pointer-events": "none" });

		attr.fadeOut(500, function () {
			$(this).addClass("flix-hide");

			attr.before(html).hide().fadeIn(500);

			if (attr.hasClass("flix-fullscreen")) $(".flix-window-" + id).addClass("flix-fullscreen");

			$.post(post_url, { class: "frontend/flix-form-api.php", action: "get_back_button_text" }).success(function (data) {

				$('div.flix-window.flix-window-' + id).find(".flix-btn.flix-close-section").html(data);
			});

			$('div.flix-window.flix-window-' + id).find(".flix-close-section").unbind("click");

			$('div.flix-window.flix-window-' + id).find(".flix-close-section").click(function () {

				$(this).closest('div.flix-window.flix-window-' + id).fadeOut(500, function () {

					$(this).remove();

					attr.removeClass("flix-hide").hide().fadeIn(500, function () {

						attr.css({ "pointer-events": "inherit" });

						my_class.set_to_scroll_position(attr);

						if (typeof settings.onClose == "function") settings.onClose({ container: $('div.flix-window.flix-window-' + id), flix_setup_code: flix_setup_code, flix_parent: my_class, attr: attr });
					});
				});

				return false;
			});

			if (typeof settings.onReady == "function") settings.onReady({ container: $('div.flix-window.flix-window-' + id), flix_setup_code: flix_setup_code, flix_parent: my_class });
		});
	};

	return this;
};
"use strict";

var flix_termin_wizard = function flix_termin_wizard(that, flix_setup_code, flix_parent) {

  var my_class = this;

  var post_url = flix_parent.post_url;

  my_class.login = localStorage.getItem("flix_login");

  this.build = function () {

    if ($(that).attr("data-flix-language")) post_url += "?l=" + $(that).attr("data-flix-language");

    flix_parent.set_post_url(post_url);

    if (typeof my_class.login != "string") return my_class.get_functions({ id: "new", stage: $(that) });

    my_class.get_container();
  };

  this.get_container = function () {

    var ov = new flix_overhead(that, {
      onReady: function onReady(data) {
        data.header.find("select#id").prepend("<option value='new'>Neu</option>");if (typeof $(that).attr("data-flix-wizard-new") !== "undefined" && $(that).attr("data-flix-wizard-new") !== false) {
          data.header.find("select#id").val("new");data.id = "new";
        }my_class.get_functions(data);
      },
      onChange: function onChange(data) {
        my_class.get_functions(data);
      }
    });
    ov.get_edit_assistent_menu = function () {
      return "";
    };
    ov.build();
  };

  this.get_functions = function (data) {

    my_class.get_change_assistents(data);
  };

  this.get_change_assistents = function (data) {

    //data.header.find("select#id").unbind("change");


    if (data.id == "new") {
      my_class.assistent_data = {};
      my_class.get_check_available_assistents(data, function (data) {
        my_class.get_assistent(data);
      });

      return false;
    }

    $.post(FLIX_URLS.api + $(that).attr("data-flix-language") + "/assistent/get_data", { user: my_class.login, ID: data.id }).success(function (ret) {

      my_class.assistent_data = ret[1];
      my_class.get_assistent(data);
    });
  };

  this.get_check_available_assistents = function (data, callback) {

    $.post(FLIX_URLS.api + $(that).attr("data-flix-language") + "/assistent/check", { user: my_class.login }).success(function (ret) {

      if (ret.assistents) {
        callback(data);
        return false;
      }

      data.stage.html("<div class='flix-col-md-12'><div class='flix-alert flix-alert-danger'>" + ret.msg + "</div></div>");
    });
  };

  this.get_assistent = function (data) {

    var settings = {

      quick: false,
      weekdays: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
      language: {
        "set breaks now": "Pausen jetzt festlegen",
        "break saved": "Pause gespeichert",
        "breaks saved": "Pausen gespeichert"

      },
      form: [{ id: $.now() + "head", type: "header", subtype: "h2", label: "Termin-Buchungs-Formular", "columnName": "12", "description": "", required: false }, { id: $.now() + "para", type: "paragraph", subtype: "p", description: "Um eine Terminbuchung vormerken zu lassen, werden folgende Angaben benötigt. Alle Pflichtfelder sind mit Sternchen markiert. Nach dem Ausfüllen des Formulars wird direkt vom System eine Verifizierungs-Email gesendet. Eine endgültige Terminzusage / Absage kann erst nach erfolgreicher Verifizierung erfolgen.", "columnName": "12", required: false }, { id: $.now() + "head3", type: "header", subtype: "h3", label: "Die benötigten Angaben", "columnName": "12", "description": "", required: false }, { id: $.now() + "txt1", type: "text", subtype: "text", label: "Vorname", "columnName": "6", "description": "", required: true }, { id: $.now() + "txt2", type: "text", subtype: "text", label: "Nachname", "columnName": "6", "description": "", required: true }, { id: $.now() + "txt3", type: "text", subtype: "email", label: "E-Mailadresse", "columnName": "6", "description": "für Terminerinnerungen", required: true }, { id: $.now() + "txt4", type: "text", subtype: "tel", label: "Handynummer", "columnName": "6", "description": "für Terminerinnerungen (optional)", required: false }, { id: $.now() + "area", type: "textarea", label: "Freitextfeld für Anmerkungen / Infos an den Dienstleister", "columnName": "12", "description": "optional", required: false }, { id: $.now() + "head3", type: "header", subtype: "h3", label: "Datenschutz", "columnName": "12", "description": "", required: false }, { id: $.now() + "terms", type: "terms", label: "Datenschutz-Informationen (Bitte bestätigen)", "columnName": "12", required: true, description: "Sie haben die Möglichkeit jederzeit Ihre Einwilligung zur Verwendung der persönlichen Daten zu widerrufen.", values: [{ label: "Ich stimme der Erhebung meiner personenbezogenen Daten (siehe Formular) zu", value: "Einwilligung personenbezogener Daten" }, { label: "Ich stimme der Kontaktaufnahme zwecks Terminerinnerungen zu", value: "Kontaktaufnahme Terminerinnerungen" }, { label: "Ich bestätige die Richtigkeit meiner Angaben", value: "Richtigkeit Angaben" }] }],

      onSave: function onSave(that, atts, alert) {
        my_class.get_login(that, atts, alert);
      },
      saved_form: my_class.assistent_data

    };

    if (typeof my_class.login != "string") settings.quick = true;

    var assistent = new flix_appointment_assistent(data.stage, flix_setup_code, flix_parent, settings);
    assistent.id = data.id;
    assistent.lang = $(that).attr("data-flix-language");
    assistent.login = my_class.login;
    assistent.build();
  };

  this.get_login = function (container, atts, alert) {

    if (typeof my_class.login == "string") return my_class.get_save(container, atts, alert, my_class.login);

    $(container).find(".flix-stage").html(flix_parent.get_register_form($(container).find(".flix-stage"), function (user) {

      my_class.get_save(container, atts, alert, user.md5_id);
    }));
  };

  this.get_save = function (container, atts, alert, user_id) {

    var send = {
      user: user_id,
      data: JSON.stringify(atts.saved_form),
      ID: $(that).find("select#id").val()
    };

    if (typeof $(that).find("select#id") == "undefined" || $(that).find("select#id").length == 0) send.ID = "new";

    $.post(FLIX_URLS.api + $(that).attr("data-flix-language") + "/assistent/save", send).success(function (data) {

      if (typeof alert != "undefined") swal.fire({ type: "success", title: data[1].msg, showConfirmButton: false, showCloseButton: true, timer: 2500 });

      if (data[1].status == "new") {

        $(that).find("select#id option").eq(0).after("<option value='" + data[1].ID + "'>" + data[1].title + "</option>");
        $(that).find("select#id").val(data[1].ID);

        send.ID = data[1].ID;

        my_class.set_new_landingpage(send);
        my_class.set_standard_automailer(send);

        if (typeof atts.quick != "undefined" && atts.quick) {

          var id = "flix-new-menu-" + $.now();
          var login = localStorage.getItem("flix_login");

          if (typeof login == "undefined" || login == null || !login) return false;

          $(that).replaceWith("<div class='" + id + "' data-flix-language='" + $(that).attr("data-flix-language") + "'></div>");

          //var menu = new flix_menu( $("."+id), flix_setup_code, new flix_termin_flix(false, flix_setup_code) );
          //menu.ID = send.ID;
          //menu.build();

          var dash = new flix_dashboard($("." + id), flix_setup_code, new flix_termin_flix(false, flix_setup_code));
          dash.ID = send.ID;
          dash.build();
        }
      } else {

        $(that).find("select#id option:selected").text(data[1].title);
      }
    });
  };

  this.set_standard_automailer = function (send) {

    $.post(FLIX_URLS.api + $(that).attr("data-flix-language") + "/reminder/standard", { user: send.user, ID: send.ID });
  };

  this.set_new_landingpage = function (send) {

    $.post(FLIX_URLS.api + $(that).attr("data-flix-language") + "/landingpage/create", { user: send.user, ID: send.ID });
  };

  return this;
};
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var flix_text_editor = function flix_text_editor(that, flix_setup_code, flix_parent) {

  var my_class = this;

  flix_parent.my_subclass = my_class;

  var post_url = flix_parent.post_url;

  this.do = function () {

    flix_parent.get_styles();

    if ($(that).attr("data-flix-language")) post_url += "?l=" + $(that).attr("data-flix-language");

    flix_parent.set_post_url(post_url);

    $(that).html(flix_parent.get_loader());

    var html = $(that);

    setTimeout(function () {

      $(that).html(flix_parent.get_login(html, function () {
        my_class.get_text_editor();
      }));
    }, 0);
  };

  this.get_text_editor = function (settings) {

    var send = {

      "user": localStorage.getItem("flix_login"),
      "action": "get_text_editor",
      "class": "frontend/flix-text-editor.php"

    };

    if ((typeof settings === "undefined" ? "undefined" : _typeof(settings)) == 'object') send.settings = settings;

    $.post(post_url, send).success(function (data) {

      $(that).html(data);
      //$(that).find("textarea").addClass("tinymce-");

      flix_parent.set_tinymce($(that).find("textarea"), $(that).attr("data-flix-language"));

      flix_parent.get_select2(function () {

        $(that).find(".flix-use").find("option").prop("selected", "selected");

        $(that).find(".flix-use").select2({
          tags: true,
          tokenSeparators: [',', ' ']

        });
      });

      my_class.get_save_data();
      my_class.get_live_search();
      my_class.get_clear_data();
    });
  };

  this.get_live_search = function () {

    $(that).find("input[name='livesearch']").keyup(function () {

      $(that).find(".flix-search-results").html("");

      var send = {
        "search_string": $(this).val(),
        "language": $(that).find("select[name=language]").val(),
        "max_results": 5,
        "action": "get_live_search",
        "class": "frontend/flix-text-editor.php"
      };

      $.post(post_url, send).success(function (data) {

        data = $.parseJSON(data);

        if (data[0] == false) return false;

        var html = "";
        html += '<div class="flix-list-group">';

        $.each(data, function (k, v) {

          html += '<a class="flix-list-group-item flix-html-a flix-html-html" href="#" data-edit-text="' + v[0] + '">';
          html += v[1];
          html += '</a>';
        });

        html += '</div>';

        $(that).find(".flix-search-results").html(html);

        my_class.get_edit_text();
      });

      return false;
    });
  };

  this.get_edit_text = function () {

    $(that).find("[data-edit-text]").unbind("click");

    $(that).find("[data-edit-text]").click(function () {

      my_class.get_text_editor({ "ID": $(this).attr("data-edit-text"), "language": $(that).find("select[name=language]").val() });

      return false;
    });
  };

  this.get_clear_data = function () {

    $(that).find(".flix-btn-clear").unbind("click");

    $(that).find(".flix-btn-clear").click(function () {

      my_class.get_text_editor();
    });
  };

  this.get_save_data = function () {

    $(that).find("form#flix_text_editor").submit(function () {

      var send = {

        "user": localStorage.getItem("flix_login"),
        "data": $(this).serializeArray(),
        "action": "get_save_data",
        "class": "frontend/flix-text-editor.php"

      };

      send.data.push({ "name": "use", "value": JSON.stringify($(that).find("select.flix-use").select2().val()) });

      $.post(post_url, send).success(function (data) {

        data = $.parseJSON(data);

        flix_parent.get_sweetalert(function () {

          swal.fire(data);
        });
      });

      return false;
    });
  };

  this.do();
  return this;
};
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var flix_user = function flix_user(that, flix_setup_code, flix_parent, atts) {

  var my_class = this;
  var post_url = flix_parent.post_url;
  my_class.login = localStorage.getItem("flix_login");
  var fe = new flix_form_elements($(that));
  var ff = new flix_html_form($(that));

  my_class.language = $(that).attr("data-flix-language");

  this.build = function () {

    flix_parent.get_styles();
    flix_parent.get_animateCSS();

    if (my_class.language) post_url += "?l=" + my_class.language;

    flix_parent.set_post_url(post_url);

    var html = $(that);

    $(that).html(flix_parent.get_loader());

    $(that).html(flix_parent.get_login(html, function () {
      my_class.get_languages(function () {
        my_class.get_user_form();
      });
    }));
  };

  this.get_languages = function (callback) {

    $.post(FLIX_URLS.flix + "assets/json/countries_langs/" + my_class.language + ".json").success(function (data) {

      my_class.languages = [];

      $.each(data.countries, function (k, v) {

        my_class.languages.push({ label: v, value: k.toLowerCase() });
      });

      callback();
    });
  };

  this.get_user_form = function () {

    $.post(FLIX_URLS.api + my_class.language + "/user/get_user", { user: my_class.login }).success(function (data) {

      var user = data[1];

      if (_typeof(user.vat) != "object") user.vat = { vat_number: "" };

      if (typeof user.vat.vat_number == "undefined" && typeof user.vat.vatNumber == "undefined") user.vat = { vat_number: "" };

      var html = "";

      $.each(["company", "first_name", "last_name", "country", "adress", "zip", "city", "tel"], function (k, v) {

        if (typeof user[v] == "undefined") user[v] = "";
      });

      html += '<form>';

      var val = "n";

      if (user.first_name != "") val = "y";

      html += fe.get_header({ type: "header", subtype: "h3", label: '<i class="flix-glyphicon flix-glyphicon-user"></i> ' + user.username });
      html += fe.get_radio_group({ id: "company_", label: "Hiermit bestätige ich die Nutzung von Terminflix im unternehmerischen Zusammenhang", value: val, values: [{ label: "Ja", value: "y" }, { label: "Nein", value: "" }], columnName: "12", required: true });
      html += fe.get_text({ id: "company", label: "Firma", value: user.company, columnName: "6", required: true });
      html += fe.get_select({ id: "vat_", description: "<a href='#' class='flix-html-a chg-ustid' style='text-decoration: underline;'>Umsatzsteuer-ID beifügen/ändern</a>", label: "Umsatzsteuer-ID", value: user.vat.vat_number, values: [{ label: user.vat.vat_number, value: user.vat.vat_number }], columnName: "6" });

      html += '<div class="flix-hide">';
      html += fe.get_textarea({ id: "vat", value: JSON.stringify(user.vat), columnName: "12" });
      html += '</div>';

      html += fe.get_text({ id: "first_name", label: "Vorname", value: user.first_name, columnName: "6", required: true });
      html += fe.get_text({ id: "last_name", label: "Nachname", value: user.last_name, columnName: "6", required: true });
      html += fe.get_select({ id: "country", label: "Land", value: user.country, values: my_class.languages, columnName: "3", required: true });
      html += fe.get_text({ id: "adress", label: "Adresse", value: user.adress, columnName: "3", required: true });
      html += fe.get_text({ id: "zip", subtype: "number", label: "Postleitzahl", value: user.zip, columnName: "3", required: true });
      html += fe.get_text({ id: "city", label: "Ort", value: user.city, columnName: "3", required: true });

      html += fe.get_select({ id: "tel", description: "<a href='#' class='flix-html-a chg-tel' style='text-decoration: underline;'>Telefonnummer beifügen/ändern</a>", label: "Telefonnummer", value: user.tel, values: [{ label: user.tel, value: user.tel }], columnName: "6" });

      html += fe.get_select({ id: "email", label: "E-Mail", value: user.email, values: [{ label: user.email, value: user.email }], columnName: "6", required: true });

      html += '<div class="flix-clearfix"></div>';

      if (typeof user.imprint == "undefined") user.imprint = "Vom Dienstleister noch nicht eingetragen.";

      if (typeof user.privacy == "undefined") user.privacy = "Vom Dienstleister noch nicht eingetragen.";

      var imprint = new flix_landingpage_manager_imprint(that, flix_setup_code, new flix_termin_flix(that, flix_setup_code), {});
      imprint.login = my_class.login;
      imprint.lang = my_class.language;

      html += imprint.get_form(user, { save_button: false, form: false });
      html += fe.get_paragraph({ subtype: "p", type: "paragraph", description: "<div class='flix-alert flix-alert-info'>Impressum sowie die Angaben zum Datenschutz werden automatisch für Ihre Termin-Buchungs-Website übernommen. Über den Menüpunkt --Termin-Buchungs-Website bearbeiten-- können Sie die Impressum- und Datenschutz-Angaben, für jede Website individuell, ändern.</div>" });

      html += fe.get_button({ subtype: "submit", label: "Speichern", columnName: "9", className: "flix-btn flix-btn-success flix-btn-block" });
      html += fe.get_button({ subtype: "button", label: "Passwort ändern", columnName: "3", className: "flix-btn flix-btn-default flix-btn-block flix-btn-pwd" });

      html += '</form>';

      $(that).html(html);

      my_class.get_change_tel();
      my_class.get_change_ustid();
      my_class.get_change_pwd();

      imprint.set_imprint(that);

      //my_class.par = new flix_termin_flix( that, flix_setup_code );
      //my_class.par.set_tinymce($(that).find("textarea#imprint,textarea#privacy"), $(that).attr("data-flix-language"));

      fe.get_functions($(that));
      ff.get_handle_form(function (ret) {

        tinyMCE.triggerSave();

        delete ret.vat_;
        delete ret.company_;

        $.post(FLIX_URLS.api + my_class.language + "/user/update", { user: my_class.login, data: ret }).success(function (data) {

          swal.fire({ type: "success", timer: 2000, showConfirmButton: false, title: data[1] });

          $(that).find(".flix-text-danger,.flix-text-success").removeClass("flix-text-danger flix-text-success");
        });
      });
    });
  };

  this.get_change_pwd = function () {

    $(that).find(".flix-btn-pwd").unbind("click");

    $(that).find(".flix-btn-pwd").click(function () {

      var url = FLIX_URLS.api + my_class.language + "/user/change_password";

      $.post(url, { user: my_class.login, action: "swal" }).success(function (data) {

        swal.fire(data).then(function (ret) {

          if (typeof ret.value == "undefined" || ret.value == "") return false;

          $.post(url, { user: my_class.login, action: "change_password" }).success(function (data2) {

            swal.fire(data2);
          });
        });
      });

      return false;
    });
  };

  this.get_change_ustid = function () {

    $(that).find(".chg-ustid").unbind("click");

    $(that).find(".chg-ustid").click(function () {

      swal.fire({
        title: $(this).text(),
        input: "text",

        confirmButtonText: "prüfen",
        cancelButtonText: "zurück",
        showCancelButton: true
      }).then(function (ret) {

        if (typeof ret.value == "undefined" || ret.value == "") return false;

        $.post(FLIX_URLS.api + my_class.language + "/user/validate_ustid", { vat: ret.value, user: my_class.login }).success(function (data) {

          if (!data[0] || !data[1].valid) {
            swal.fire({ type: "error", showConfirmButton: false, timer: 2000 });
            return false;
          }

          swal.fire({ type: "success", showConfirmButton: false, timer: 2000 });

          data[1].vat_number = ret.value;

          $(that).find("select#vat_ option").eq(0).attr("value", ret.value);
          $(that).find("select#vat_ option").eq(0).text(ret.value);

          $(that).find("textarea#vat").val(JSON.stringify(data[1]));
        });
      });

      return false;
    });
  };

  this.get_change_tel = function () {

    $(that).find(".chg-tel").unbind("click");

    $(that).find(".chg-tel").click(function () {

      swal.fire({
        title: $(this).text(),
        input: "text",

        confirmButtonText: "Bestätigungscode anfordern",
        cancelButtonText: "zurück",
        showCancelButton: true
      }).then(function (ret) {

        if (typeof ret.value == "undefined" || ret.value == "") return false;

        $.post(FLIX_URLS.api + my_class.language + "/user/validate_tel", { number: ret.value }).success(function (data) {

          if (!data[0]) {
            swal.fire({ type: "error", showConfirmButton: false, timer: 2000 });
            return false;
          }

          my_class.get_activate_tel(ret.value, data);
        });
      });

      return false;
    });
  };

  this.get_activate_tel = function (tel, data) {

    console.log(data);

    swal.fire({
      title: "Jetzt Bestätigungscode eintragen",
      input: "text",
      type: "warning",
      confirmButtonText: "Telefonnummer aktivieren",
      cancelButtonText: "zurück",
      showCancelButton: true
    }).then(function (ret) {

      if (typeof ret.value == "undefined" || ret.value == "") {
        return false;
      }

      if (data[1] != ret.value) {
        swal.fire({ type: "error", showConfirmButton: false, timer: 2000, title: "Bestätigungscode nicht korrekt" });

        setTimeout(function () {

          my_class.get_activate_tel(tel, data);
        }, 2100);

        return false;
      }

      swal.fire({ type: "success", showConfirmButton: false, timer: 2000 });
      $(that).find("select#tel option").eq(0).attr("value", tel);
      $(that).find("select#tel option").eq(0).text(tel);
    });
  };

  this.get_countries = function () {};
};
"use strict";

var flix_userchat = function flix_userchat(that, flix_setup_code, flix_parent) {

  var my_class = this;
  var url = $(that).attr("data-flix-userchat");

  my_class.responses = new chat_responses();

  $(that).html('<div id="flix_chat"></div>');

  flix_setup_code.flix_load_css(FLIX_URLS.flix + "assets/css/chat.css", function () {

    my_class.user = "user";

    if (typeof localStorage.getItem("flix_login") != "undefined" && localStorage.getItem("flix_login")) my_class.user = localStorage.getItem("flix_login");

    var settings = {

      "data": url + "get_" + my_class.user + "_chat.html",
      "translation": FLIX_URLS.api + $(that).attr("data-flix-language") + "/chat/settings/",
      "bot": {
        "name": "FLIX",
        "img": FLIX_URLS.flix + "/assets/img/flix_avatar.jpeg"
        /* "bg_color": "red", "color": "purple" */
      },
      "user": {
        "name": "Unbekannt",
        "img": FLIX_URLS.flix + "/assets/img/customer_avatar.jpg"
      },
      "response": function response(ret) {},
      "init": function init(ret) {
        my_class.get_init(ret);my_class.get_chat_listener(ret);my_class.get_update_chat(ret);
      }

    };

    var run_app = new chat($(that).find("#flix_chat"), settings);
    run_app.run();
  });

  this.get_update_chat = function (ret) {

    if (typeof my_class.time == "undefined") {
      my_class.time = ret.chat_msg.time;
      delete ret.chat_msg.time;
    }

    $.post(url + "get_update_" + my_class.user + "_msg.html", { user: my_class.user, time: my_class.time }).success(function (data) {

      my_class.time = data.time;

      if (data.entries) {

        $.each(data.entries, function (k1, v) {
          var k = ret.chat_container.find("li").length;
          my_class.generate_msg(ret, k, v);
        });

        setTimeout(function () {

          ret.scrollDwn();
        }, 1000);
      }

      setTimeout(function () {

        if (!$("[data-flix-userchat='" + $(that).attr("data-flix-userchat") + "']").length) return false;

        my_class.get_update_chat(ret);
      }, 5000);
    });
  };

  this.get_init = function (ret) {

    $.each(ret.chat_msg.entries, function (k, v) {

      my_class.generate_msg(ret, k, v);
    });

    setTimeout(function () {

      ret.scrollDwn();
    }, 1000);
  };

  this.generate_msg = function (ret, k, v) {

    ret.chat_container.append(ret.msg.setSendMsg(v.user, v.msg));

    ret.chat_container.find(".date").eq(k).html(v.date);
    ret.chat_container.find(".user img").eq(k).attr("src", v.img);
    ret.chat_container.find(".user img").eq(k).attr("title", v.name);
  };

  this.get_chat_listener = function (ret) {

    ret.input_container.closest("#input").find("form.input").submit(function () {

      var k = ret.chat_container.find("li").length;

      $.post(url + "set_user_msg.html", { user: my_class.user, msg: $(this).find("#msg").val() }).success(function (data) {

        my_class.generate_msg(ret, k, data);

        ret.input_container.val("");

        ret.scrollDwn();
      });

      return false;
    });
  };
};
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
},
    flix_admin_inovoice_actions = function flix_admin_inovoice_actions(e, t, n) {
  var i = this;this.build = function () {
    i.get_functions({}), $(e).find("[name='ID']").unbind("change"), $(e).find("[name='ID']").change(function () {
      if (i.index = $(e).find("[name='ID'] option").index($(this).find("option:selected")), i.index--, i.index < 0) return i.get_functions({}), !1;var t = i.data[i.index];return i.get_functions(t), !1;
    });
  }, this.get_functions = function (l) {
    i.push_data(l), i.get_inovoice(l), i.send_inovoice(l), i.delete_inovoice(l), i.find_client(l), i.save_inovoice(l);var o = new flix_admin_inovoice_presets(e, t, n);o.data = l, o.lang = i.lang, o.user = i.user, o.build();
  }, this.push_data = function (t) {
    $.each(["cost_per_unit", "amount", "type", "price", "tax_percent", "discount", "date", "user", "payment_method", "receipt_of_payment", "paid"], function (n, i) {
      void 0 !== t[i] ? $(e).find("[name='" + i + "']").val(t[i]) : $(e).find("[name='" + i + "']").val("");
    });
  }, this.save_inovoice = function () {
    var l = new flix_html_form($(e)),
        o = new flix_admin_inovoice_check(e, t, n);o.lang = i.lang, o.user = i.user, $(e).find("form").unbind("submit"), l.get_handle_form(function (e) {
      o.data = e, o.check_client(function () {
        i.get_handle_form(e, o);
      });
    });
  }, this.get_handle_form = function (l, o) {
    swal.fire({ type: "question", title: $(e).find("button[type='submit']").text() + "?", confirmButtonText: "Ja", showCancelButton: !0, cancelButtonText: "Nein" }).then(function (a) {
      if (void 0 === a || void 0 === a.value) return !1;n.get_fullscreen_loader(), $.post(FLIX_URLS.api + i.lang + "/credit/update_innovoice", { user: i.user, data: l }).success(function (a) {
        n.rm_fullscreen_loader(), swal.fire({ title: a[1], type: "success", timer: 2e3, showConfirmButton: !1 }), o.after_billing_function();var u = new flix_admin_inovoice(e, t, n);u.lang = i.lang, u.user = i.user, u.get_data(function (e) {
          i.data = e[1];
        }), void 0 !== l.ID && "" != l.ID || setTimeout(function () {
          new flix_admin_inovoice(e, t, new flix_termin_flix(!1, !1)).build();
        }, 2500);
      });
    });
  }, this.find_client = function () {
    $(e).find(".flix-btn-client").unbind("click"), $(e).find(".flix-btn-client").click(function () {
      return n.get_new_section($(e), { title: $(this).text(), html: '<div class="flix-admin-users" data-flix-language="' + i.lang + '"></div>', onReady: function onReady(e) {
          new flix_admin_users(e.container.find(".flix-admin-users"), t, n).build();
        } }), !1;
    });
  }, this.delete_inovoice = function (t) {
    if ($(e).find(".flix-btn-delete").unbind("click"), "object" != (void 0 === t ? "undefined" : _typeof(t)) || void 0 === t.inovoice) return !1;$(e).find(".flix-btn-delete").click(function () {
      return swal.fire({ type: "question", title: $(this).text() + "?", confirmButtonText: "Ja", showCancelButton: !0, cancelButtonText: "Nein" }).then(function (n) {
        if (void 0 === n || void 0 === n.value) return !1;$.post(FLIX_URLS.api + i.lang + "/credit/delete_innovoice", { user: i.user, ID: t.inovoice }).success(function (t) {
          swal.fire({ title: t[1], type: "success", timer: 2e3, showConfirmButton: !1 }), $(e).find("[name='ID'] option:selected").addClass("flix-hide"), $(e).find("[name='ID']").val(""), i.push_data({});
        });
      }), !1;
    });
  }, this.send_inovoice = function (t) {
    if ($(e).find(".flix-btn-send").unbind("click"), "object" != (void 0 === t ? "undefined" : _typeof(t)) || void 0 === t.inovoice) return !1;$(e).find(".flix-btn-send").click(function () {
      swal.fire({ type: "question", title: $(this).text() + "?", confirmButtonText: "Ja", showCancelButton: !0, cancelButtonText: "Nein" }).then(function (e) {
        if (void 0 === e || void 0 === e.value) return !1;$.post(FLIX_URLS.api + i.lang + "/credit/send_innovoice", { user: t.user_md5, ID: t.inovoice }).success(function (e) {
          swal.fire({ title: e[1].response.out, type: "success", timer: 2e3, showConfirmButton: !1 });
        });
      });
    });
  }, this.get_inovoice = function (t) {
    $(e).find(".flix-btn-view").unbind("click"), $(e).find(".flix-btn-view").click(function () {
      if ("object" != (void 0 === t ? "undefined" : _typeof(t)) || void 0 === t.inovoice) return !1;$(this).attr("href", FLIX_URLS.flix + "events/" + i.lang + "/inovoice/" + t.inovoice + "/download.pdf");
    });
  };
},
    flix_admin_inovoice_check = (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
}, function (e, t, n) {
  var i = this;this.check_client = function (e) {
    $.post(FLIX_URLS.api + i.lang + "/user/check_by_id", { user: i.user, check: i.data.user }).success(function (t) {
      t[0] ? (i.client = t[3], e()) : "user" == t[2] ? swal.fire({ type: "error", title: "Kunden-ID #" + i.data.user + " existiert nicht (mehr)!", timer: 2e3, showConfirmButton: !1 }) : "userdata" == t[2] && swal.fire({ type: "warning", title: "Noch keine Kundendaten hinterlegt!", confirmButtonText: "Kundendaten hinterlegen" }).then(function () {
        i.client = t[3], i.update_client_data(t);
      });
    });
  }, this.update_client_data = function (l) {
    n.get_new_section($(e), { html: "<div class='flix-client' data-flix-language='" + i.lang + "'></div>", onReady: function onReady(e) {
        var o = new flix_user(e.container.find(".flix-client"), t, n);o.language = i.lang, o.login = l[3], o.get_languages(function () {
          o.get_user_form();
        });
      } });
  }, this.after_billing_function = function () {
    switch (i.data.type) {case "premium membership":
        i.case_membership();break;case "credit":
        i.case_credit();}
  }, this.case_credit = function () {
    swal.fire({ type: "question", title: "+" + i.data.amount + " Credits jetzt gutschreiben?", showCancelButton: !0, showConfirmButton: !0, confirmButtonText: "ja", cancelButtonText: "nein" }).then(function (e) {
      if ("object" != (void 0 === e ? "undefined" : _typeof(e)) || void 0 === e.value || !e.value) return !1;var t = { user: i.user, data: { user: i.client, credits: i.data.amount } };$.post(FLIX_URLS.api + i.lang + "/credit/update_credit", t).success(function (e) {
        swal.fire({ type: "success", title: e[1], showCancelButton: !1, showConfirmButton: !1, timer: 2e3 });
      });
    });
  }, this.case_membership = function () {
    var t = new flix_form_elements($(e));n.get_new_section($(e), { title: "Premium-Zeitraum hinterlegen", html: "<div class='flix-membership' data-flix-language='" + i.lang + "'></div>", onReady: function onReady(e) {
        for (var n = new flix_html_form(e.container), l = [], o = 1; o < 12; o++) {
          l.push({ label: o, value: o });
        }var a = "";a += "<form>", a += t.get_select({ columnName: 6, id: "int", values: l }), a += t.get_select({ columnName: 6, id: "cat", values: [{ label: "Monate", value: "months" }, { label: "Jahre", value: "years" }] }), a += t.get_button({ columnName: 12, type: "submit", label: "Speichern" }), a += "</form>", e.container.find(".flix-membership").html(a), n.get_handle_form(function (e) {
          $.post(FLIX_URLS.api + i.lang + "/user/membership", { user: i.client, no_payment: !0, data: { membership: "+ " + e.int + " " + e.cat } }).success(function (e) {
            swal.fire({ type: "success", title: e[1], showCancelButton: !1, showConfirmButton: !1, timer: 2e3 });
          });
        });
      } });
  };
}),
    flix_admin_inovoice_form = function flix_admin_inovoice_form() {
  var e = this,
      t = new flix_form_elements();this.get_html = function () {
    var t = [];return t.push({ label: "Neu", value: "" }), $.each(e.data, function (e, n) {
      t.push({ label: n.user + "-" + n.ID, value: n.inovoice });
    }), e.get_form(t, [], [{ label: "Ja", value: 1 }, { label: "Nein", value: 0 }]);
  }, this.get_form = function (e, n, i) {
    var l = "";return l += "<form>", l += t.get_select({ id: "ID", values: e, label: "ID", columnName: 6 }), l += t.get_text({ required: !0, id: "user", label: "Kunden-ID", columnName: 4 }), l += '<div class="flix-col-md-2">', l += '<label class="flix-html-label flix-html-html">&nbsp;</label>', l += t.get_button({ subtype: "button", label: "Kunden-ID suchen", className: "flix-btn flix-btn-block flix-btn-default flix-btn-client", columnName: "" }), l += "</div>", l += t.get_select({ required: !0, id: "type", label: "Artikel", columnName: 6, values: [{ value: "premium membership", label: "Premium-Mitgliedschaft" }, { value: "credit", label: "Guthaben" }] }), l += t.get_text({ required: !0, id: "amount", subtype: "number", label: "Menge", columnName: 3 }), l += t.get_text({ required: !0, id: "cost_per_unit", subtype: "text", label: "Kosten pro Einheit", columnName: 3 }), l += t.get_text({ required: !0, id: "price", subtype: "text", label: "Brutto-Betrag", columnName: 6 }), l += t.get_text({ required: !0, id: "tax_percent", subtype: "number", label: "Ust (%)", columnName: 3, value: "19" }), l += t.get_text({ id: "discount", subtype: "number", label: "Rabatt in %", columnName: 3, value: "0" }), l += t.get_text({ required: !0, id: "date", label: "Rechnungs-Datum", columnName: 4 }), l += t.get_select({ required: !0, id: "paid", label: "Bezahlt", columnName: 2, values: i }), l += t.get_select({ required: !0, id: "payment_method", label: "Zahlungsweise", columnName: 2, values: [{ value: "paypal", label: "Paypal" }, { value: "debit", label: "Lastschrift" }, { value: "inovoice", label: "Rechnung" }] }), l += t.get_text({ id: "receipt_of_payment", label: "Zahlungseingang", columnName: 4 }), l += t.get_button({ label: "Speichern", subtype: "submit", className: "flix-btn flix-btn-block flix-btn-success flix-btn-save", columnName: 6 }), l += '<div class="flix-col-md-2"><div class="flix-form-group"><a class="flix-btn flix-btn-default flix-btn-block flix-btn-view" href="" target="_blank">Download</a></div></div>', l += t.get_button({ label: "Senden", subtype: "button", className: "flix-btn flix-btn-default flix-btn-block flix-btn-send", columnName: 2 }), l += t.get_button({ label: "Löschen", subtype: "button", className: "flix-btn flix-btn-danger flix-btn-block flix-btn-delete", columnName: 2 }), l += "</form>";
  };
},
    flix_admin_inovoice = function flix_admin_inovoice(e, t, n) {
  var i = this;i.lang = $(e).attr("data-flix-language"), i.user = localStorage.getItem("flix_login"), this.build = function () {
    n.set_post_url(n.post_url + "?l=" + i.lang), i.get_data(function (l) {
      var o = new flix_admin_inovoice_form(e, t, n),
          a = new flix_admin_inovoice_actions(e, t, n);o.data = l[1], a.data = l[1], a.lang = i.lang, a.user = i.user, $(e).html(o.get_html()), a.build();
    });
  }, this.get_data = function (e) {
    $.post(FLIX_URLS.api + i.lang + "/inovoice/all", { user: i.user }).success(function (t) {
      e(t);
    });
  };
},
    flix_admin_inovoice_presets = function flix_admin_inovoice_presets(e, t, n) {
  var i = this,
      l = new Date();i.preset = { credit: { amount: 100, cost_per_unit: "0,19", price: 19, tax_percent: 19, discount: 0, date: l.getFullYear() + "-" + (l.getMonth() + 1) + "-" + l.getDate() + " " + l.getHours() + ":" + l.getMinutes() + ":00", paid: 0, payment_method: "inovoice" }, "premium membership": { amount: 1, cost_per_unit: 200, price: 200, tax_percent: 19, discount: 0, date: l.getFullYear() + "-" + (l.getMonth() + 1) + "-" + l.getDate() + " " + l.getHours() + ":" + l.getMinutes() + ":00", paid: 0, payment_method: "inovoice" } }, this.build = function () {
    var t = $(e).find("select[name='type']");if (t.unbind("change"), Object.keys(i.data).length > 0) return !1;t.change(function () {
      if (void 0 === i.preset[$(this).val()]) return !1;$.each(i.preset[$(this).val()], function (t, n) {
        $(e).find("[name='" + t + "']").val(n);
      });
    });
  };
};
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var flix_admin_support = function flix_admin_support(t, e, i) {
  this.build = function () {
    var a = new flix_admin_support_menu(t, e, i),
        n = new flix_messenger(t, e, i);n.left_menu = a, n.build();
  };
},
    flix_admin_support_chat = function flix_admin_support_chat(t, e, i) {
  var a = this,
      n = $(t).attr("data-flix-userchat");a.responses = new chat_responses(), $(t).html('<div id="flix_chat" data-flix-language="' + $(t).attr("data-flix-language") + '"></div>'), e.flix_load_css(FLIX_URLS.flix + "assets/css/chat.css", function () {
    a.user = "user", void 0 !== localStorage.getItem("flix_login") && localStorage.getItem("flix_login") && (a.user = localStorage.getItem("flix_login"));var e = { data: n + "get_" + a.user + "_chat.html", translation: FLIX_URLS.api + $(t).attr("data-flix-language") + "/chat/settings/", bot: { name: "FLIX", img: FLIX_URLS.flix + "/assets/img/flix_avatar.jpeg", bg_color: "#defabb", color: "#008b00" }, user: { name: "Unbekannt", img: FLIX_URLS.flix + "/assets/img/customer_avatar.jpg", bg_color: "#efe5fd", color: "#0000d6" }, response: function response(t) {}, init: function init(t) {
        a.get_init(t), a.get_chat_listener(t), a.get_update_chat(t);
      } };new chat($(t).find("#flix_chat"), e).run();
  }), this.get_update_chat = function (e) {
    void 0 === a.time && (a.time = e.chat_msg.time, delete e.chat_msg.time), $.post(n + "get_update_" + a.user + "_msg.html", { user: a.user, time: a.time }).success(function (i) {
      a.time = i.time, i.entries && ($.each(i.entries, function (t, i) {
        var n = e.chat_container.find("li").length;a.generate_msg(e, n, i);
      }), setTimeout(function () {
        e.scrollDwn();
      }, 1e3)), setTimeout(function () {
        if (!$("[data-flix-userchat='" + $(t).attr("data-flix-userchat") + "']").length) return !1;a.get_update_chat(e);
      }, 5e3);
    });
  }, this.get_init = function (t) {
    $(t.input_container).hide().after("<textarea id='msg' name='msg' placeholder='Support-Antwort' style='width: 100%; height: 150px; padding: 10px; box-sizing: border-box;'></textarea>"), $.each(t.chat_msg.entries, function (e, i) {
      a.generate_msg(t, e, i);
    }), setTimeout(function () {
      t.scrollDwn();
    }, 1e3);
  }, this.generate_msg = function (t, e, i) {
    "user" != i.user && (i.user = "bot"), t.chat_container.append(t.msg.setSendMsg(i.user, i.msg)), t.chat_container.find(".date").eq(e).html(i.date), t.chat_container.find(".user img").eq(e).attr("src", i.img), t.chat_container.find(".user img").eq(e).attr("title", i.name);
  }, this.get_chat_listener = function (t) {
    t.input_container.closest("#input").find("form.input").submit(function () {
      var e = t.chat_container.find("li").length,
          i = $(this).find("textarea#msg");return $.post(n + "set_user_msg.html", { user: a.user, msg: i.val() }).success(function (n) {
        a.generate_msg(t, e, n), i.val(""), t.scrollDwn();
      }), !1;
    });
  };
},
    flix_admin_support_menu = function flix_admin_support_menu(t, e, i) {
  var a = localStorage.getItem("flix_login"),
      n = new flix_messenger_left_menu(t, e, i);return n.list = new flix_admin_support_list(t, e, i), n.get_count_msg = function () {
    $.post(FLIX_URLS.api + $(t).attr("data-flix-language") + "/support_chats/count", { user: a }).success(function (t) {
      n.data = t[1], n.get_generate_navs();
    });
  }, n;
},
    _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
  return typeof t === "undefined" ? "undefined" : _typeof2(t);
} : function (t) {
  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof2(t);
},
    flix_admin_support_list = function flix_admin_support_list(t, e, i) {
  var a = localStorage.getItem("flix_login"),
      n = {},
      s = new flix_messenger_list(t, e, i, n);return s.get_messages = function (e, n) {
    $.post(FLIX_URLS.api + $(t).attr("data-flix-language") + "/newscenter/view/" + e, { user: a }).success(function (a) {
      if (s.filter = {}, s.filter[e] = n, void 0 === a[0] || !a[0]) return s.get_error_msg(a);s.data = a[1], $(t).find("table.flix-html-table tbody").html(i.get_loader()), s.get_paginations();
    });
  }, s.get_row = function (e, i) {
    var a = new flix_form_elements(t),
        n = $.parseJSON(JSON.stringify(e)),
        s = new flix_messenger_icons().build("client"),
        l = "";return l += "<tr class='flix-html-tr'>", l += "<td class='flix-html-td'>", l += "<div class='flix-row'>", l += '<div class="flix-col-xs-1">', l += a.get_checkbox_group({ id: "ID", columnName: "", values: [{ label: i + 1, value: i }] }), l += "</div>", l += '<div class="flix-col-xs-4" >', l += '<a href="#" class="flix-html-a flix-open"><i class="' + s.icon + '"></i> <strong>' + n.ticket + '</strong><br><span class="flix-html-small">' + n.email + "</span></a>", l += "</div>", l += '<div class="flix-col-xs-3 flix-cs-5" style="overflow-x:auto; overflow-y: hidden;">', n.text.length > 20 && (n.text = n.text.substring(0, 20) + "..."), l += n.text, l += "</div>", l += '<div class="flix-col-xs-3" style="overflow-x:auto; overflow-y: hidden;">', l += '<small class="flix-small">' + n.date + "</small>", l += "</div>", l += '<div class="flix-col-xs-1" style="overflow-x:auto; overflow-y: hidden;">', 0 != n.ID ? l += '<i class="flix-glyphicon flix-glyphicon-user"></i> #' + n.ID : l += "---", l += "</div>", l += "</div>", l += '<hr class="flix-html-hr2" style="margin: 5px 0 20px 0;">', l += "</td>", l += "</tr>";
  }, s.get_delete = function (e) {
    var i = { user: a, data: [] };$.each(e, function (t, e) {
      i.data.push(e.ticket);
    }), $.post(FLIX_URLS.api + $(t).attr("data-flix-language") + "/support_chats/delete", i).success(function () {
      s.onClose();
    });
  }, s.get_click_message = function () {
    $(t).find("table.flix-html-table tbody a.flix-open").unbind("click"), $(t).find("table.flix-html-table tbody a.flix-open").click(function () {
      var a = $(this).closest("td").find("[name='ID[]']").val();if ("object" != (void 0 === n ? "undefined" : _typeof(n)) && (n = {}), n.onClose = function () {
        s.get_close_popup();
      }, -1 != Object.keys(s.filter)[0].indexOf("chat")) {
        var l = new flix_termin_flix(e);return l.set_post_url(l.post_url + "?l=" + $(t).attr("data-flix-language")), l.get_new_section($(t), { title: $(this).html(), html: "<div data-flix-userchat='" + FLIX_URLS.flix + "events/" + $(t).attr("data-flix-language") + "/supportchat/" + s.data[a].ticket + "/' data-flix-language='" + $(t).attr("data-flix-language") + "'></div>", onReady: function onReady(t) {
            new flix_admin_support_chat(t.container.find("[data-flix-userchat]"), e, i, n);
          }, onClose: function onClose() {
            s.get_close_popup();
          } }), !1;
      }var o = $.parseJSON(JSON.stringify(s.data[a]));return o.html = o.text, o.showCloseButton = !0, o.showConfirmButton = !1, o.onClose = function () {
        s.get_close_popup();
      }, delete o.text, delete o.date, delete o.ID, swal.fire(o), !1;
    });
  }, s;
};
"use strict";
var flix_admin_users = function flix_admin_users(t, l, i) {
  var e = this;e.login = localStorage.getItem("flix_login"), e.lang = $(t).attr("data-flix-language");var s = new flix_form_elements($(t));i.set_post_url(i.post_url + "?l=" + e.lang), this.build = function () {
    e.get_data(function () {
      e.get_handle_data();
    });
  }, this.get_handle_data = function () {
    $(t).html(e.get_html(e.data));var a = "";$.each(e.data, function (t, l) {
      a += e.get_row({ ID: l.ID, email: l.email, title: l.username, status: l.status, date: l.registration, user: l.ID, text: l.role + " (" + l.language + ")", md5_user: l.md5_user }, t);
    }), $(t).find(".flix-html-table tbody").html(a), s.get_functions($(t)), e.get_delete_user();var n = new flix_admin_users_info(t, l, i);n.lang = e.lang, n.login = e.login, n.build();
  }, this.get_data = function (t) {
    var l = { user: e.login };$.post(FLIX_URLS.api + e.lang + "/user/get_all_user", l).success(function (l) {
      e.data = l[1], t();
    });
  }, this.get_delete_user = function () {
    $(t).find(".flix-user-delete").unbind("click"), $(t).find(".flix-user-delete").click(function () {
      var t = $(this),
          l = $(this).attr("href").replace("#", "").substring(0, 4);return swal.fire({ title: "Wirklich löschen?", text: "Alle Userdaten werden endgültig gelöscht. Bitte Passkey - " + l + " - eingeben.", input: "text", inputPlaceholder: l, showCloseButton: !0, showConfirmButton: !0, showCancelButton: !0, confirmButtonText: "Ja", cancelButtonText: "Nein" }).then(function (i) {
        if (void 0 === i || void 0 === i.value || i.value != l) return !1;var s = t.closest("tbody").find("tr").index(t.closest("tr"));delete e.data[s], e.data = Object.values(e.data), t.closest("tr").fadeOut(1e3, function () {
          $(this).remove(), e.get_handle_data();
        }), $.post(FLIX_URLS.api + e.lang + "/user/delete_user", { user: t.attr("href").replace("#", "") });
      }), !1;
    });
  }, this.get_html = function (t) {
    var l = "",
        i = "<div class='flix-text-right'><div class='flix-subpages'>" + t.length + " Einträge</div><div class='flix-clearfix'></div></div>";return l += i, l += "<div class='flix-panel flix-panel-default'>", l += "<div class='flix-panel-body'>", l += "<div class='flix-action-buttons'></div>", l += "<div class='flix-html-table flix-table'>", l += "<table class='flix-html-table flix-table'>", l += "<tbody>", l += "</tbody>", l += "</table>", l += "</div>", l += "<div class='flix-action-buttons'></div>", l += "</div>", l += "</div>", l += i;
  }, this.get_row = function (t, l) {
    var i = $.parseJSON(JSON.stringify(t)),
        e = "";return e += "<tr class='flix-html-tr'>", e += "<td class='flix-html-td'>", e += "<div class='flix-row'>", e += '<div class="flix-col-xs-1">', e += s.get_checkbox_group({ id: "ID", columnName: "", values: [{ label: l + 1, value: l }] }), e += "</div>", e += '<div class="flix-col-xs-3" >', e += '<i class="flix-glyphicon flix-glyphicon-user"></i>#' + i.ID + " <strong>" + i.title + "</strong>", "validated" == i.status && (e += "<br/><small>" + i.email + "</small>"), e += "</div>", e += '<div class="flix-col-xs-2" style="overflow-x:auto; overflow-y: hidden;">', e += i.text, e += "</div>", e += '<div class="flix-col-xs-2" style="overflow-x:auto; overflow-y: hidden;">', e += i.status, e += "</div>", e += '<div class="flix-col-xs-3" style="overflow-x:auto; overflow-y: hidden;">', e += '<small class="flix-small">' + i.date + "</small>", e += "</div>", void 0 !== i.user && (e += '<div class="flix-col-xs-1">', "validated" == i.status && (e += '<a href="#' + i.md5_user + '" class="flix-btn flix-btn-xs flix-btn-default flix-user-info"><i class="flix-glyphicon flix-glyphicon-info-sign"></i></a>'), e += '<a href="#' + i.md5_user + '" class="flix-btn flix-btn-xs flix-btn-default flix-user-delete"><i class="flix-glyphicon flix-glyphicon-remove"></i></a>', e += "</div>"), e += "</div>", e += '<hr class="flix-html-hr2" style="margin: 5px 0 20px 0;">', e += "</td>", e += "</tr>";
  };
},
    flix_admin_users_info = function flix_admin_users_info(t, l, i) {
  var e = this;e.lang = $(t).attr("data-flix-language"), this.build = function () {
    $(t).find(".flix-user-info").unbind("click"), $(t).find(".flix-user-info").click(function () {
      var t = { user: $(this).attr("href").replace("#", "") };return $.post(FLIX_URLS.api + e.lang + "/user/get_user", t).success(function (l) {
        $.post(FLIX_URLS.api + e.lang + "/assistent/get_assistents", t).success(function (t) {
          e.get_summary(l[1], t[1]);
        });
      }), !1;
    });
  }, this.get_summary = function (l, s) {
    var a = "";a += "ID <b>" + l.ID + "</b>", a += "<hr>", a += "Username <b>" + l.username + "</b>", a += "<hr>", void 0 !== l.first_name && "" != l.first_name && (a += "Firma <b>" + l.company + "</b>", a += "<br />", a += "Anschrift <b>" + l.adress + ", " + l.zip + " " + l.city + " (" + l.country + ")</b>", a += "<hr>", a += "Name <b>" + l.first_name + " " + l.last_name + "</b>", a += "<hr>", a += "Email <b>" + l.email + "</b>", a += "<br />", a += "Telefon <b>" + l.tel + "</b>", a += "<hr>"), a += "Registration <b>" + l.registration + "</b>", a += "<hr>", a += s.length + " Termin-Formulare<br />", s.length && (a += '<ul class="flix-html-ul flix-text-left">', void 0 !== l.country && "undefined" != l.country || (l.country = e.lang), $.each(s, function (t, i) {
      a += '<li class="flix-html-li"><a class="flix-html-a flix-html-strong" href="' + FLIX_URLS.flix + l.country + "/" + l.username + "/" + i.ID + '/index.html" target="_blank">' + i.title + "</a></li>";
    }), a += "</ul>"), i.get_new_section(t, { title: "Übersicht", html: a });
  };
};
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
},
    flix_appointment_assistent = function flix_appointment_assistent(e, t, n, i) {
  var l = this;new flix_form_elements();return i.menubar = {}, i.get_next_step = function (t, n) {
    n.saved_form = Object.assign(n.saved_form, t), n.menubar.step++, n.menubar.functions.get_highlight_menu(n.menubar.step), n.menubar.steps[n.menubar.step].onClick(), n.menubar.animation(), "object" == _typeof(n.saved_form) && "object" == _typeof(n.saved_form.form) && n.onSave($(e), n, !1);
  }, i.btn = { save: "Speichern", continue: "Nächster Schritt", back: "Zurück ohne Speichern" }, i.calendar_list = { days: "Tage", weeks: "Wochen", months: "Monate", month: "Monat", years: "Jahre", year: "Jahr", hours: "Stunden", day: "Tag", week: "Woche", hour: "Stunde", minutes: "Minuten", minute: "Minute" }, i.btn.current = i.btn.save, i.menubar.step_back = function () {
    $(e).find(".flix-btn-step-back").unbind("click"), $(e).find(".flix-btn-step-back").click(function () {
      i.menubar.step--;var t = $(e).find(".wizard-nav-menu ul li").eq(i.menubar.step).find("a");l.menu.change_menu(t);
    });
  }, i.menubar.steps = [{ title: "Start", onClick: function onClick() {
      l.get_check_current_btn(), new flix_appointment_assistent_1($(e), i).build();
    }, onClickBefore: function onClickBefore(e) {
      return void 0 === i.saved_form.type ? e(!1) : e(!0);
    } }, { title: "Zeitraum", onClick: function onClick() {
      l.get_check_current_btn(), t.get_pageleave(), "eventpicker" == i.saved_form.type ? new flix_appointment_assistent_2B_1($(e), i).build() : new flix_appointment_assistent_2A_1($(e), i).build(), i.menubar.functions.get_click_menu(i);
    }, onClickBefore: function onClickBefore(e) {
      var t = !0;return "object" == _typeof(i.saved_form.include) && 0 != Object.keys(i.saved_form.include).length && (t = !1), void 0 === i.saved_form.events && 1 == t ? e(!1) : e(!0);
    } }, { title: "Termin-Anfragen", onClick: function onClick() {
      l.get_check_current_btn(), "datepicker" == i.saved_form.type ? new flix_appointment_assistent_2A_2($(e), i).build() : new flix_appointment_assistent_2B_2($(e), i).build(), i.menubar.functions.get_click_menu(i);
    }, onClickBefore: function onClickBefore(e) {
      return void 0 === i.saved_form.max_applicants ? e(!1) : e(!0);
    } }, { title: "Zusatzeinstellungen", onClick: function onClick() {
      l.get_check_current_btn(), "datepicker" == i.saved_form.type ? new flix_appointment_assistent_2A_3($(e), i).build() : new flix_appointment_assistent_2B_3($(e), i).build(), i.menubar.functions.get_click_menu(i);
    } }, { title: "Buchungs-Formular", onClick: function onClick() {
      l.get_check_current_btn(), new flix_appointment_assistent_3($(e), i).build(), i.menubar.functions.get_click_menu(i);
    } }, { title: "Vorschau", onClick: function onClick() {
      if (l.get_check_current_btn(), "string" != typeof localStorage.getItem("flix_login")) i.onSave($(e), i, !1);else {
        var t = new flix_appointment_assistent_preview($(e), i);t.id = l.id, t.login = l.login, t.lang = l.lang, t.build(), i.menubar.functions.get_click_menu(i);
      }
    } }], this.get_check_current_btn = function () {
    i.btn.current = i.btn.continue, "object" == _typeof(i.saved_form) && "object" == _typeof(i.saved_form.form) && (i.btn.current = i.btn.save);
  }, this.build = function () {
    n.get_styles(), n.get_animateCSS();$(e).html('<div class="flix-row flix-steps"></div>'), l.menu = new flix_menubar($(e), i), l.menu.build();
  }, this;
},
    flix_appointment_assistent_preview = function flix_appointment_assistent_preview(e, t) {
  var n = this;new flix_form_elements();this.build = function () {
    var t = new flix_termin_flix(!1, flix_setup_code);if ($(e).find(".flix-steps").html(t.get_loader()), "new" != n.id) return n.get_preview(), !1;setTimeout(function () {
      n.get_preview();
    }, 2e3);
  }, this.get_preview1 = function () {
    new flix_datepicker($(e).find(".flix-steps"), t.saved_form).build();
  }, this.get_preview = function () {
    n.id;var t = new flix_overhead($(e).find(".flix-steps"), {});t.lang = n.lang, t.login = n.login, t.get_saved_data(function () {
      if ("new" == n.id) {
        var i = Object.keys(t.crypted);n.id = i[i.length - 1];
      }t.get_id = function () {
        return n.id;
      }, t.get_edit_assistent_menu = function () {
        return "";
      }, $(e).find(".flix-steps").html('<div class="flix-header">' + t.get_ul_menu() + "</div>"), $(e).find(".flix-steps").find(".flix-dropdown-menu").attr("class", "flix-list-group"), $(e).find(".flix-steps").find("li").attr("class", "flix-list-group-item flix-text-center"), $(e).find(".flix-steps").find("li[role='separator']").remove(), $(e).find(".flix-steps").find("a.flix-btn-delete").closest("li").remove(), t.get_toolbar_functions();
    });
  };
},
    flix_appointment_assistent_1 = function flix_appointment_assistent_1(e, t) {
  var n = this,
      i = new flix_form_elements(),
      l = new flix_html_form($(e));this.build = function () {
    var i = "datepicker";void 0 !== t.saved_form.type && (i = t.saved_form.type), $(e).find(".flix-steps").html(n.get_html(i)), n.get_msg(i), new flix_toggleswitch($(e), { onChange: function onChange(e) {
        n.get_msg(e);
      } }).build(), l.get_handle_form(function (e) {
      "string" == typeof t.saved_form.type && t.saved_form.type != e.type && (t.saved_form = {}), t.get_next_step(e, t);
    });
  }, this.get_msg = function (t) {
    var n = $(e).find('[data-flix-toggleswitch="type"]').find(".flix-btn-info");$(e).find(".flix-infobox").html('<i class="flix-glyphicon flix-glyphicon-warning-sign"></i> <b>' + n.text().trim() + "</b> ist ideal für: " + { datepicker: "Ladengeschäft mit regelmäßigen Öffnungszeiten. Dienstleister wie Friseure, Foto-Studios etc.", eventpicker: "Einmalig datiertes Event ohne Wiederholung wie Workshop, Tag der offnenen Tür etc." }[t]);
  }, this.get_html = function (e) {
    var n = "";return n += "<form>", n += '<div class="flix-row">', n += i.get_toggleswitch({ id: "type", label: "Wofür wird ein Terminformular benötigt?", columnName: "12", required: !0, values: [{ label: "<i class='flix-glyphicon flix-glyphicon-shop' style='font-size: 3em; display: block; margin-bottom: 10px;'></i> Feste Öffnungszeiten", value: "datepicker" }, { label: "<i class='flix-glyphicon flix-glyphicon-calendar' style='font-size: 3em; display: block; margin-bottom: 10px;'></i> Konkretes Event", value: "eventpicker" }], value: e }), n += '<div class="flix-col-md-12"><div class="flix-infobox flix-form-group"></div></div>', n += i.get_button({ label: t.btn.current, columnName: "12", className: "flix-btn flix-btn-primary flix-btn-lg" }), n += "</div>", n += "</form>";
  };
},
    flix_appointment_assistent_2A_1 = (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
}, function (e, t) {
  var n = this,
      i = new flix_form_elements(),
      l = new flix_html_form($(e));this.build = function () {
    void 0 === t.saved_form.exclude && (t.saved_form.exclude = { weekdays: {} }), void 0 === t.saved_form.exclude.weekdays && (t.saved_form.exclude.weekdays = {}), void 0 === t.saved_form.include && (t.saved_form.include = {}), $(e).find(".flix-steps").html(n.get_html()), n.get_functions(), n.get_pause_end();
  }, this.get_functions = function () {
    i.get_functions($(e)), t.menubar.step_back(), n.get_pause(), l.get_handle_form(function (e) {
      var n = {};$.each(e.weekdays, function (i, l) {
        var a = 60;"object" == _typeof(t.saved_form.include) && "object" == _typeof(t.saved_form.include.weekdays) && "object" == _typeof(t.saved_form.include.weekdays[l]) && void 0 !== t.saved_form.include.weekdays[l][2] && (a = t.saved_form.include.weekdays[l][2]), n[l] = [e[l + "_begin"], e[l + "_end"], a];
      }), t.saved_form.include.weekdays = {}, t.saved_form.include.weekdays = n, t.get_next_step({}, t);
    }), n.get_count_pause(), n.get_insert_values();
  }, this.get_insert_values = function () {
    if ("object" != _typeof(n.data)) return !1;var t = {};$.each(n.data, function (n, i) {
      -1 != i.name.indexOf("[]") ? (void 0 === t[i.name] && (t[i.name] = []), t[i.name].push(i.value)) : $(e).find("[name='" + i.name + "']").val(i.value);
    }), $.each(t, function (t, n) {
      $(e).find("[name='" + t + "']").val(n);
    });
  }, this.get_pause = function () {
    $(e).find(".flix-pause").unbind("click"), $(e).find(".flix-pause").click(function () {
      var t = $(e).find(".flix-steps").clone();return n.data = $(e).find("form").serializeArray(), $(e).find(".flix-steps").html(n.get_html_pause($(this))), i.get_functions($(e)), n.get_pause_functions(t.html(), $(this)), !1;
    });
  }, this.get_pause_functions = function (l, a) {
    $(e).find(".flix-btn-new-row").unbind("click"), $(e).find(".flix-btn-new-row").click(function () {
      return $(e).find("table").append('<tr class="flix-html-tr">' + n.get_pause_row(["12:00", "13:00"]) + "</tr>"), new flix_checkbox_radio($(e)).build_checkbox(), n.get_pause_end(), !1;
    }), $(e).find(".flix-btn-back").unbind("click"), $(e).find(".flix-btn-back").click(function () {
      $(e).find(".flix-steps").html(l), n.get_functions(), n.get_count_pause(a.attr("href").replace("#", ""));
    }), $(e).find(".flix-btn-save").unbind("click"), $(e).find(".flix-btn-save").click(function () {
      var s = [],
          o = {};$(e).find(".flix-steps").find("table tr").each(function () {
        $(this).find("input[type='checkbox']").is(":checked") && void 0 === o[$(this).find("select").eq(0).val() + $(this).find("select").eq(1).val()] && (s.push([$(this).find("select").eq(0).val(), $(this).find("select").eq(1).val()]), o[$(this).find("select").eq(0).val() + $(this).find("select").eq(1).val()] = 1);
      });var r = [];$.each(t.weekdays, function (e, t) {
        r.push({ label: t, value: e });
      });var f = "";return f += i.get_checkbox_group({ id: "weekdays", value: a.attr("href").replace("#", ""), values: r }), f += '<div class="flix-col-md-12">', f += i.get_button({ type: "button", columnName: "", subtype: "button", label: t.btn.back, className: "flix-btn flix-btn-default flix-btn-back" }), f += i.get_button({ type: "button", columnName: "", subtype: "button", label: t.btn.save, className: "flix-btn flix-btn-primary flix-btn-lg flix-btn-save" }), f += "</div>", swal.fire({ title: "Übernehmen für ...", html: f, allowOutsideClick: !1, showConfirmButton: !1, showCancelButton: !1, showCloseButton: !1 }), i.get_functions($(".swal2-content")), $(".swal2-content").find(".flix-btn-save, .flix-btn-back").unbind("click"), $(".swal2-content").find(".flix-btn-back").click(function () {
        return swal.close(), !1;
      }), $(".swal2-content").find(".flix-btn-save").click(function () {
        $(".swal2-content").find("[name='weekdays[]']").each(function () {
          $(this).is(":checked") && (t.saved_form.exclude.weekdays[$(this).val()] = s);
        });return $(e).find(".flix-steps").html(l), n.get_functions(), $.each(t.saved_form.exclude.weekdays, function (e, t) {
          n.get_count_pause(e);
        }), swal.close(), !1;
      }), !1;
    }), n.get_pause_from_other(l, a), n.get_pause_end();
  }, this.get_pause_end = function () {
    $(e).find("table tr select").unbind("change"), $(e).find("table tr select").change(function () {
      return n.get_pause_end(), !0;
    }), $(e).find("table tr").each(function () {
      if (!$(this).html().length) return !0;var e = $(this).find("select").eq(0),
          t = $(this).find("select").eq(1),
          n = e.find("option").index(e.find("option:selected")),
          i = t.find("option").index(t.find("option:selected"));$(this).find("select").eq(1).find("option").removeClass("flix-hide"), $.each(t.find("option"), function () {
        if ($(this).attr("value") == e.val()) return !1;$(this).addClass("flix-hide");
      }), i < n && t.val(e.val());
    });
  }, this.get_html_pause = function (e) {
    var l = "";return l += '<div class="flix-row">', l += i.get_header({ type: "header", subtype: "h3", label: '<i class="flix-glyphicon flix-glyphicon-cutlery"></i> Pause(n): <b>' + t.weekdays[e.attr("href").replace("#", "")] + "</b>" }), l += '<div class="flix-col-md-12">', l += '<table class="flix-html-table flix-table">', void 0 !== t.saved_form && void 0 !== t.saved_form.exclude && void 0 !== t.saved_form.exclude.weekdays && void 0 !== t.saved_form.exclude.weekdays[e.attr("href").replace("#", "")] && $.each(t.saved_form.exclude.weekdays[e.attr("href").replace("#", "")], function (e, t) {
      l += n.get_pause_row(t);
    }), l += "</table>", l += "</div>", l += '<div class="flix-col-md-6">', l += '<div class="flix-form-group">', n.get_pause_from_other_pause(e.attr("href").replace("#", "")).length && (l += i.get_button({ label: "Pausen von anderem Wochentag übernehmen", columnName: "", className: "flix-btn flix-btn-default flix-btn-import-pause" })), l += i.get_button({ label: "Neue Pause einfügen", columnName: "", className: "flix-btn flix-btn-info flix-btn-new-row" }), l += "</div>", l += "</div>", l += '<div class="flix-col-md-12">', l += '<div class="flix-form-group">', l += i.get_button({ label: t.btn.back, columnName: "", className: "flix-btn flix-btn-default flix-btn-back" }), l += i.get_button({ label: t.btn.save, columnName: "", className: "flix-btn flix-btn-primary flix-btn-lg flix-btn-save" }), l += "</div>", l += "</div>", l += "</div>";
  }, this.get_pause_from_other = function (l, a) {
    $(e).find(".flix-btn-import-pause").unbind("click"), $(e).find(".flix-btn-import-pause").click(function () {
      var l = "";return l += i.get_select({ id: "weekdays", values: n.get_pause_from_other_pause(a.attr("href").replace("#", "")) }), swal.fire({ html: l, showConfirmButton: !0, confirmButtonText: t.btn.save, showCloseButton: !0 }).then(function (i) {
        i = $(".swal2-content").find("select").val(), $.each(t.saved_form.exclude.weekdays[i], function (t, i) {
          $(e).find(".flix-html-table.flix-table").append(n.get_pause_row(i));
        }), n.get_pause_end();
      }), !1;
    });
  }, this.get_pause_from_other_pause = function (e) {
    var n = [];return void 0 === t.saved_form.exclude || void 0 === t.saved_form.exclude.weekdays || 0 == t.saved_form.exclude.weekdays.length ? n : ($.each(t.saved_form.exclude.weekdays, function (i, l) {
      i != e && n.push({ label: t.weekdays[i], value: i });
    }), n);
  }, this.get_pause_row = function (e) {
    var t = n.get_time_values(),
        l = $.now(),
        a = "";return a += '<tr class="flix-html-tr">', a += '<td class="flix-html-td" style="padding-right: 10px;">', a += i.get_checkbox_group({ id: l + "status", label: "", columnName: "", description: "", required: !0, values: [{ label: "aktiviert", value: 1 }], value: [1] }), a += "</td>", a += '<td class="flix-html-td">', a += i.get_select({ id: l + "begin", label: "", values: t, value: e[0], columnName: "", required: !0 }), a += "</td>", a += '<td class="flix-html-td">', a += '<div class="flix-form-control flix-text-center" style="border: transparent; box-shadow: none; padding:0 5px;">–</div>', a += "</td>", a += '<td class="flix-html-td">', a += i.get_select({ id: l + "end", label: "", values: t, value: e[1], columnName: "", required: !0 }), a += "</td>", a += "</tr>";
  }, this.get_html = function () {
    var e = n.get_time_values(),
        l = "";return l += "<form>", l += '<div class="flix-row">', l += '<div class="flix-col-md-12">', l += '<table class="flix-html-table flix-table">', l += '<tr class="flix-html-tr">', l += '<th class="flix-html-th" style="padding-bottom: 10px; padding-right: 10px;">', l += "An welchen Tagen ist Ihr Geschäft geöffnet?", l += "</th>", l += '<th class="flix-html-th" colspan="3" style="padding-bottom: 10px; text-align: center; padding-right: 10px;">', l += "Zu welcher Uhrzeit (von-bis) ist Ihr Geschäft geöffnet?", l += "</th>", l += '<th class="flix-html-th" style="padding-bottom: 10px;">', l += "Legen Sie die täglichen Pausenzeiten fest", l += "</th>", l += "</tr>", $.each(t.weekdays, function (a, s) {
      var o = "",
          r = ["08:00", "18:00"];"object" != _typeof(t.saved_form.include) || "object" != _typeof(t.saved_form.include.weekdays) || 0 == t.saved_form.include.weekdays.length ? a <= 4 && (o = a) : "object" == _typeof(t.saved_form.include) && "object" == _typeof(t.saved_form.include.weekdays) && "object" == _typeof(t.saved_form.include.weekdays[a]) && (o = a, r = t.saved_form.include.weekdays[a]), l += '<tr class="flix-html-tr">', l += '<td class="flix-html-td" style="padding-right: 10px;">', l += i.get_checkbox_group({ id: "weekdays", label: "", columnName: "", description: "", required: !0, values: [{ label: s, value: a }], value: [o] }), l += "</td>", l += '<td class="flix-html-td">', l += i.get_select({ id: a + "_begin", label: "", values: e, value: r[0], columnName: "", required: !0 }), l += "</td>", l += '<td class="flix-html-td">', l += '<div class="flix-form-control flix-text-center" style="border: transparent; box-shadow: none; padding:0 5px;">–</div>', l += "</td>", l += '<td class="flix-html-td">', l += i.get_select({ id: a + "_end", label: "", values: e, value: r[1], columnName: "", required: !0 }), l += "</td>", l += '<td class="flix-html-td" >', l += '<div class="flix-form-control flix-text-center" style="margin-top:-18px; border: transparent; box-shadow: none; padding:0 0 0 10px; vertical-align:text-top;"><a href="#' + a + '" class="flix-btn flix-btn-info flix-btn-block flix-pause">' + n.get_pause_label(a) + "</a></div>", l += "</td>", l += "</tr>";
    }), l += "</table>", l += i.get_text({ id: "pause", subtype: "hidden", description: "", columnName: "", required: !1 }), l += "</div>", l += '<div class="flix-col-md-12">', l += i.get_button({ subtype: "button", label: t.btn.back, columnName: "", className: "flix-btn flix-btn-default flix-btn-step-back" }), l += i.get_button({ label: t.btn.current, columnName: "", className: "flix-btn flix-btn-primary flix-btn-lg" }), l += "</div>", l += "</div>", l += "</form>";
  }, this.get_pause_label = function (e) {
    var n = 0;return "object" == _typeof(t.saved_form.exclude) && "object" == _typeof(t.saved_form.exclude.weekdays) && "object" == _typeof(t.saved_form.exclude.weekdays[e]) && (n = Object.keys(t.saved_form.exclude.weekdays[e]).length), '<i class="flix-glyphicon flix-glyphicon-cutlery"></i> ' + (0 === n ? t.language["set breaks now"] : 1 === n ? n + " " + t.language["break saved"] : n + " " + t.language["breaks saved"]);
  }, this.get_time_values = function () {
    var e,
        t,
        n = [];for (e = 0; e < 24; e++) {
      for (t = 0; t < 60; t += 15) {
        var i = e;i < 10 && (i = "0" + i), i = t < 10 ? i + ":0" + t : i + ":" + t, n.push({ label: i + " Uhr", value: i });
      }
    }return n.push({ label: "23:59 Uhr", value: "23:59" }), n;
  }, this.get_count_pause = function () {
    $.each(t.weekdays, function (i, l) {
      var a = n.get_pause_label(i),
          s = $(e).find("table").find("tr").eq(i + 1).find(".flix-pause");s.html(a), s.removeClass("flix-btn-success").addClass("flix-btn-info"), s.text().trim() != t.language["set breaks now"] && s.removeClass("flix-btn-info").addClass("flix-btn-success");
    });
  };
}),
    flix_appointment_assistent_2A_2 = (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
}, function (e, t) {
  var n = this,
      i = new flix_form_elements(),
      l = new flix_html_form($(e));n.login = localStorage.getItem("flix_login"), n.lang = $(e).attr("data-flix-language"), n.time_values = { "pro Zeit": { "jede Stunde": 60, "jede halbe Stunde": 30, "jede 15 Minuten": 15, "jede 90 Minuten": 90, "jede 2 Stunden": 120, "jede 3 Stunden": 180, "jede 4 Stunden": 240 } }, this.build = function () {
    n.get_services(function () {
      n.run();
    });
  }, this.get_services = function (e) {
    $.post(FLIX_URLS.api + n.lang + "/assistent/get_services", { user: n.login }).success(function (t) {
      var i = {};if ("object" != _typeof(t[1]) || 0 == t[1].length) return e(), !1;$.each(t[1], function (e, t) {
        $.each(t.short, function (e, t) {
          i[t] = t;
        });
      }), n.time_values["pro Leistungsgruppe"] = {}, Object.assign(n.time_values["pro Leistungsgruppe"], i), e();
    });
  }, this.run = function () {
    $(e).find(".flix-steps").html(n.get_html()), n.get_preview(), t.menubar.step_back(), l.get_handle_form(function (e) {
      n.get_save_data(e, function (e) {
        var i = "";$.each(e.include.weekdays, function (l, a) {
          var s;i += "<b>", i += t.weekdays[l], i += "</b>", i += " (", i += a[0], i += " - ", i += a[1], i += ") ", i += "<br>", "number" == typeof a[2] ? i += "bis zu " : i += "jeweils ", i += e.max_applicants[l], i += " Termine ", s = "number" == typeof a[2] ? Object.values(n.time_values["pro Zeit"]) : Object.values(n.time_values["pro Leistungsgruppe"]);var o = {};$.each(s, function (e, t) {
            o[t] = e;
          }), "number" == typeof a[2] ? i += Object.keys(n.time_values["pro Zeit"])[o[a[2]]] : i += "<br>in Leistungsgruppe - " + Object.keys(n.time_values["pro Leistungsgruppe"])[o[a[2]]] + " -", i += " buchbar", e.include.buffer[l] && (i += "<br>+ " + e.include.buffer[l] + " Minuten Zeitpuffer zwischen Terminen"), "object" == _typeof(t.saved_form.exclude) && "object" == _typeof(t.saved_form.exclude.weekdays) && "object" == _typeof(t.saved_form.exclude.weekdays[l]) && (i += n.get_show_pause(t.saved_form.exclude.weekdays[l])), i += '<hr class="flix-html-hr">';
        }), swal.fire({ title: "Eingaben korrekt?", html: i, showCancelButton: !0, cancelButtonText: "Nein", confirmButtonText: "Ja" }).then(function (t) {
          if (void 0 === t.value) return !1;n.get_next_step(e);
        });
      });
    });
  }, this.get_show_pause = function (e) {
    var t = [];$.each(e, function (e, n) {
      var i = n[0] + " - " + n[1] + " Uhr";n[0] == n[1] && (i = n[1] + " Uhr"), -1 == t.indexOf(i) && t.push(i);
    });var n = "";return n += "<br><br>", n += "<small class='flix-html-small'>" + t.length + " Pause(n): ", t.sort(), n += t.join(", "), n += "</small>";
  }, this.get_next_step = function (e) {
    t.get_next_step(e, t);
  }, this.get_save_data = function (n, i) {
    var l = {};l.include = { buffer: {}, weekdays: t.saved_form.include.weekdays }, l.max_applicants = {}, $(e).find(".flix-steps").find("table tr").each(function () {
      var e = $(this).find("input[type='text']").attr("id");if ("number" != typeof e && "string" != typeof e) return !0;l.include.weekdays[e][2] = $(this).find("#" + e + "_period").val(), $.isNumeric($(this).find("#" + e + "_period").val()) && (l.include.weekdays[e][2] = 1 * $(this).find("#" + e + "_period").val()), l.include.buffer[e] = 1 * $(this).find("#" + e + "_buffer").val(), l.max_applicants[e] = 1 * $(this).find("#" + e + "_max_applicants").val();
    }), i(l);
  }, this.get_html = function () {
    var e = "";return e += "<form>", e += '<div class="flix-row">', e += '<div class="flix-col-md-12">', e += '<table class="flix-html-table flix-table">', e += '<tr class="flix-html-tr">', e += '<th class="flix-html-th"  colspan="3"style="padding-bottom: 10px; padding-right: 10px;">', e += "Wählen Sie die maximale Anzahl an Terminvereinbarungen", e += "</th>", e += '<th class="flix-html-th flix-hide" style="padding-bottom: 10px; padding-right: 10px;">', e += "Optional können Sie auch einen Zeitpuffer zwischen den Terminen festlegen", e += "</th>", e += "</tr>", $.each(t.saved_form.include.weekdays, function (l, a) {
      var s = [1, 60, 0];"object" == _typeof(t.saved_form.max_applicants) && (s = [t.saved_form.max_applicants[l], a[2], t.saved_form.include.buffer[l]]), void 0 !== a[2] && "undefined" != a[2] || (s[1] = 60);e += '<tr class="flix-html-tr">', e += '<td class="flix-html-td" style="padding-right: 10px;">', e += i.get_text({ id: l, readonly: !0, label: "", columnName: "", description: "", required: !0, value: t.weekdays[l] + " (" + t.saved_form.include.weekdays[l][0] + " - " + t.saved_form.include.weekdays[l][1] + " Uhr)" }), e += "</td>", e += '<td class="flix-html-td" style="padding-right: 10px;">', e += i.get_select({ id: l + "_max_applicants", label: "", values: n.get_appointment_values(), value: s[0], columnName: "", required: !0 }), e += "</td>", e += '<td class="flix-html-td" style="padding-right: 10px;">', e += i.get_select({ id: l + "_period", label: "", values: n.get_time_values(), value: s[1], columnName: "", required: !0 }), e += "</td>", e += '<td class="flix-html-td flix-hide">', e += i.get_select({ id: l + "_buffer", label: "", values: n.get_buffer(), value: s[2], columnName: "", required: !0 }), e += "</td>", e += "</tr>";
    }), e += "</table>", e += '<div class="flix-form-group"><i class="flix-glyphicon flix-glyphicon-warning-sign"></i> Pausenzeiten werden automatisch ausgeschlossen.</div>', e += "</div>", e += '<div class="flix-col-md-12">', e += i.get_button({ subtype: "button", label: t.btn.back, columnName: "", className: "flix-btn flix-btn-default flix-btn-step-back" }), e += i.get_button({ subtype: "button", label: "Vorschau", columnName: "", className: "flix-btn flix-btn-default flix-btn-preview" }), e += i.get_button({ label: t.btn.current, columnName: "", className: "flix-btn flix-btn-primary flix-btn-lg" }), e += "</div>", e += "</div>", e += "</form>";
  }, this.get_preview = function () {
    $(e).find(".flix-btn-preview").unbind("click"), $(e).find(".flix-btn-preview").click(function () {
      var e = $(this),
          l = "",
          a = [];$.each(t.saved_form.include.weekdays, function (e, n) {
        a.push({ label: t.weekdays[e], value: e });
      }), l += i.get_select({ id: "weekdays", values: a, columnName: 12 }), l += '<div class="flix-preview-calendar"></div>', swal.fire({ title: e.html(), html: l, showConfirmButton: !1, showCloseButton: !0 }), n.get_preview_specific(), $(".swal2-content").find("select").trigger("change");
    });
  }, this.get_preview_specific = function () {
    $(".swal2-content").find("select").unbind("change"), $(".swal2-content").find("select").change(function () {
      var n = $(this).val(),
          i = { include: { weekdays: {}, buffer: {} } };i.include.weekdays[n] = t.saved_form.include.weekdays[n], i.include.weekdays[n][2] = $(e).find("select#" + n + "_period").val(), i.include.buffer[n] = $(e).find("select#" + n + "_buffer").val();var l = new Date();l.setDate(l.getDate() + 7 + (1 * n + 1 + 7 - l.getDay()) % 7), i.date = l.getFullYear() + "-" + (l.getMonth() + 1) + "-" + l.getDate(), i.exclude = t.saved_form.exclude, i.settings = { default_label: "max. " + $(e).find("select#" + n + "_max_applicants option:selected").text() }, i.pop = !1, i.events = {}, i.view = "h", i.fixed_view = !0, new flix_datepicker($(".swal2-content").find(".flix-preview-calendar"), i).build(), $(".swal2-content").find(".flix-preview-calendar").hide().fadeIn(1e3), $(".swal2-content").find(".flix-preview-calendar .flix-html-h4").eq(0).text(t.weekdays[n]);
    });
  }, this.get_appointment_values = function () {
    var e,
        t = [{ value: 1, label: "1 Terminvereinbarung" }];for (e = 2; e <= 5; e++) {
      t.push({ label: e + " Terminvereinbarungen", value: e });
    }return t;
  }, this.get_time_values = function () {
    var e = n.time_values,
        t = [];return $.each(e, function (e, n) {
      t.push({ label: e, value: n });
    }), t;
  }, this.get_buffer = function () {
    var e = [{ label: "ohne Zeitpuffer zwischen den Terminen", value: 0 }];return $.each([5, 10, 15, 20, 30], function (t, n) {
      e.push({ label: "+ " + n + " Minuten Zeitpuffer", value: n });
    }), e;
  };
}),
    flix_appointment_assistent_2A_3 = (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
}, function (e, t) {
  var n = this,
      i = new flix_form_elements(),
      l = new flix_html_form($(e));this.build = function () {
    $.post(FLIX_URLS.api + $(e).attr("data-flix-language") + "/assistent/check", { user: localStorage.getItem("flix_login") }).success(function (e) {
      n.user = e, n.show();
    });
  }, this.show = function () {
    n.get_period(), $(e).find(".flix-steps").html(n.get_html()), n.get_calendar($(e).find("input#start"), "Datum wählen"), n.get_calendar($(e).find("input#end"), "Datum wählen"), n.get_clear_btn(), t.menubar.step_back(), l.get_handle_form(function (e) {
      if ("" != e.start) {
        var n = e.start.split(" ");e.date = n[0];
      } else e.date = !1;e.period = e.period.split(" "), t.saved_form.include.period = $.parseJSON(JSON.stringify(e.period)), delete e.period, t.get_next_step(e, t);
    });
  }, this.get_calendar = function (i, l) {
    var a = $.parseJSON(JSON.stringify(t.saved_form));void 0 !== a.include.period && delete a.include.period, void 0 !== a.end && delete a.end, void 0 !== a.start && delete a.start, a.settings = { default_label: l }, a.pop = !0, a.events = {}, a.view = "m", a.get_click_me = function (t, l) {
      var a = new flix_datepicker(i, l).get_event_by_id(t);i.val(a.data.begin.split.Y + "-" + l.functions.get_nulls_before(a.data.begin.split.m) + "-" + l.functions.get_nulls_before(a.data.begin.split.d) + " " + l.functions.get_nulls_before(a.data.begin.split.H) + ":" + l.functions.get_nulls_before(a.data.begin.split.i)), n.get_clear_btn(), n.get_check_end({ start: $(e).find("input#start").val(), end: $(e).find("input#end").val(), msg: "Letztmögliches Datum muss hinter dem frühstmöglichen Datum liegen." });
    }, new flix_datepicker(i, a).build();
  }, this.get_check_end = function (t) {
    var n = t.start,
        i = t.end;return $(e).find("button[type=submit]").removeClass("flix-hide"), void 0 !== n && void 0 !== i && 0 != n.length && 0 != i.length && (n = (n = (n = n.replace(new RegExp(" ", "g"), "")).replace(new RegExp(":", "g"), "")).replace(new RegExp("-", "g"), ""), void (1 * (i = (i = (i = i.replace(new RegExp(" ", "g"), "")).replace(new RegExp(":", "g"), "")).replace(new RegExp("-", "g"), "")) < 1 * n && (swal.fire({ type: "error", showConfirmButton: !0, confirmButtonText: "Alles klar", showCloseButton: !0, title: t.msg }), $(e).find("button[type=submit]").addClass("flix-hide"))));
  }, this.get_next_step = function (n) {
    new flix_appointment_assistent_3($(e), t).build();
  }, this.get_clear_btn = function () {
    $(e).find("input#start, input#end").each(function () {
      $(this).closest(".flix-form-group").find(".flix-delete-cal").remove(), "" != $(this).val() && $(this).closest(".flix-form-group").find(".flix-html-small").append(" <a href='#' class='flix-html-a flix-delete-cal'>(Eintrag leeren)</a>");
    }), $(e).find("input#start, input#end").closest(".flix-form-group").find(".flix-delete-cal").unbind("click"), $(e).find("input#start, input#end").closest(".flix-form-group").find(".flix-delete-cal").click(function () {
      return $(this).closest(".flix-form-group").find("input").val(""), t.saved_form[$(this).closest(".flix-form-group").find("input").attr("id")] = "", n.get_calendar($(this).closest(".flix-form-group").find("input"), "Datum wählen"), $(this).remove(), !1;
    });
  }, this.get_html = function () {
    var e = ["", ""];void 0 !== t.saved_form.start && (e[0] = t.saved_form.start), void 0 !== t.saved_form.end && (e[1] = t.saved_form.end), e[3] = n.get_period_select();var l = "",
        a = 4;void 0 !== t.quick && 1 == t.quick && (a = 6), l += "<form>", l += '<div class="flix-row">';var s = "";return void 0 !== t.saved_form.title && (s = t.saved_form.title), l += i.get_text({ id: "title", label: "Unter welchem Namen soll das Termin-Buchungs-Formular gespeichert werden?", columnName: "12", required: !0, value: s }), l += '<div class="flix-col-md-12"><div class="flix-form-group"><i class="flix-glyphicon flix-glyphicon-warning-sign"></i> Sofern gewünscht, kann hier einen Datumsbereich definiert werden. Außerhalb dieses Datumsbereichs sind keine Terminbuchungen möglich.</div></div>', l += i.get_text({ id: "start", readonly: !0, label: "Frühstmögliches Datum einer Terminbuchung", columnName: a, description: "Optional", required: !1, placeholder: "sofort", value: e[0] }), l += i.get_select({ id: "period", label: "Zeitraum, um Termine im Voraus zu Buchen", columnName: a, required: !1, value: e[3][1], values: e[3][0] }), void 0 !== t.quick && 1 == t.quick || (l += i.get_text({ id: "end", readonly: !0, label: "Absolutes letztmögliches Datum einer Terminbuchung", columnName: a, description: "Optional", placeholder: "kein Enddatum", required: !1, value: e[1] })), l += '<div class="flix-col-md-12">', l += i.get_button({ subtype: "button", label: t.btn.back, columnName: "", className: "flix-btn flix-btn-default flix-btn-step-back" }), l += i.get_button({ label: t.btn.current, columnName: "", className: "flix-btn flix-btn-primary flix-btn-lg" }), l += "</div>", l += "</div>", l += "</form>";
  }, this.get_period_select = function () {
    var e = [],
        i = "";return $.each(n.periods, function (n, l) {
      "object" == _typeof(t.saved_form.include) && "object" == _typeof(t.saved_form.include.period) && l[0] == t.saved_form.include.period[0] && l[1] == t.saved_form.include.period[1] && (i = l[0] + " " + l[1]), e.push({ label: n, value: l[0] + " " + l[1] });
    }), "" == i && (i = "1 months"), [e, i];
  }, this.get_period = function () {
    if (n.periods = {}, n.periods["2 " + t.calendar_list.days] = [2, "days"], n.periods["7 " + t.calendar_list.days] = [7, "days"], n.periods["2 " + t.calendar_list.weeks] = [2, "weeks"], "premium" != n.user.membership) return !1;n.periods["1 " + t.calendar_list.month] = [1, "months"], n.periods["2 " + t.calendar_list.months] = [2, "months"], n.periods["3 " + t.calendar_list.months] = [3, "months"], n.periods["4 " + t.calendar_list.months] = [4, "months"], n.periods["5 " + t.calendar_list.months] = [5, "months"], n.periods["6 " + t.calendar_list.months] = [6, "months"], n.periods["1 " + t.calendar_list.year] = [1, "years"];
  };
}),
    flix_appointment_assistent_2B_1 = (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
}, function (e, t) {
  var n = this,
      i = new flix_form_elements(),
      l = new flix_html_form($(e));this.build = function () {
    $(e).find(".flix-steps").html(n.get_html()), t.menubar.step_back(), n.get_calendar($(e).find("input#start"), "Startpunkt setzen"), n.get_calendar($(e).find("input#end"), "Endpunkt setzen"), n.get_calculate_time(), l.get_handle_form(function (e) {
      var n = {};n.events = [{ begin: e.start, end: e.end, style: "", value: { ID: "fixed" } }];var i = e.start.split(" ");n.date = i[0], n.view = "d", t.get_next_step(n, t);
    });
  }, this.get_calendar = function (e, t) {
    var i = { view: "m", fixed_view: !1, booking_range: !1, pop: !0, color: "green", include: { weekdays: [["00:00", "23:59", 15], ["00:00", "23:59", 15], ["00:00", "23:59", 15], ["00:00", "23:59", 15], ["00:00", "23:59", 15], ["00:00", "23:59", 15], ["00:00", "23:59", 15]] }, type: "datepicker" };i.settings = { default_label: t }, i.pop = !0, i.events = {}, i.view = "m", i.get_click_me = function (t, i) {
      n.get_click_calendar(t, i, e), n.get_check_end();
    }, new flix_datepicker(e, i).build();
  }, this.get_check_end = function () {
    new flix_appointment_assistent_2A_3(e, {}).get_check_end({ start: $(e).find("input#start").val(), end: $(e).find("input#end").val(), msg: "Veranstaltungsende liegt vor dem Beginn." }), n.get_calculate_time();
  }, this.get_click_calendar = function (e, t, n) {
    var i = new flix_datepicker(n, t).get_event_by_id(e);n.val(i.data.begin.split.Y + "-" + t.functions.get_nulls_before(i.data.begin.split.m) + "-" + t.functions.get_nulls_before(i.data.begin.split.d) + " " + t.functions.get_nulls_before(i.data.begin.split.H) + ":" + t.functions.get_nulls_before(i.data.begin.split.i));
  }, this.get_calculate_time = function () {
    var t = $(e).find("input#start").val(),
        i = $(e).find("input#end").val();if ($(e).find("button[type='submit']").removeClass("flix-hide"), $(e).find(".flix-html-html.flix-html-p").html(""), "" == t || "" == i) return $(e).find("button[type='submit']").addClass("flix-hide"), n.get_warning("Bitte Start und Enzeitraum bestimmen.");
  }, this.get_warning = function (t) {
    $(e).find(".flix-html-html.flix-html-p").html('<i class="flix-glyphicon flix-glyphicon-warning-sign"></i> ' + t), $(e).find("button[type='submit']").addClass("flix-hide");
  }, this.get_html = function () {
    var e = ["", ""];"object" == _typeof(t.saved_form.events) && "object" == _typeof(t.saved_form.events[0]) && (e = [t.saved_form.events[0].begin, t.saved_form.events[0].end]);var n = "";return n += "<form>", n += '<div class="flix-row">', n += i.get_text({ id: "start", readonly: !0, label: "Veranstaltungsbeginn", columnName: "6", description: "", required: !0, placeholder: "", value: e[0] }), n += i.get_text({ id: "end", readonly: !0, label: "Veranstaltungsende", columnName: "6", description: "", placeholder: "", required: !0, value: e[1] }), n += '<div class="flix-col-md-12">', n += i.get_button({ subtype: "button", label: t.btn.back, columnName: "", className: "flix-btn flix-btn-default flix-btn-step-back" }), n += i.get_button({ label: t.btn.current, columnName: "", className: "flix-btn flix-btn-primary flix-btn-lg" }), n += "</div>", n += i.get_paragraph({ type: "paragraph", id: "alert", subtype: "p", description: "", columnName: "12" }), n += "</div>", n += "</form>";
  };
}),
    flix_appointment_assistent_2B_2 = (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
}, function (e, t) {
  var n = this,
      i = new flix_form_elements(),
      l = new flix_html_form($(e));this.build = function () {
    $(e).find(".flix-steps").html(n.get_html()), t.menubar.step_back(), l.get_handle_form(function (e) {
      var n = {};n.max_applicants = [e.max_applicants], t.get_next_step(n, t);
    });
  }, this.get_html = function () {
    var e = n.get_appointment_values(),
        l = [""];"object" == _typeof(t.saved_form.max_applicants) && (l = [t.saved_form.max_applicants[0]]);var a = "";return a += "<form>", a += '<div class="flix-row">', a += i.get_select({ id: "max_applicants", label: "Maximale Veranstaltungsteilnehmer", values: e, value: l[0], columnName: "12", required: !0 }), a += '<div class="flix-col-md-12">', a += i.get_button({ subtype: "button", label: t.btn.back, columnName: "", className: "flix-btn flix-btn-default flix-btn-step-back" }), a += i.get_button({ label: t.btn.current, columnName: "", className: "flix-btn flix-btn-primary flix-btn-lg" }), a += "</div>", a += i.get_paragraph({ type: "paragraph", id: "alert", subtype: "p", description: "", columnName: "12" }), a += "</div>", a += "</form>";
  }, this.get_appointment_values = function () {
    var e,
        t = [{ value: 1, label: "1 Veranstaltungsteilnehmer" }];for (e = 2; e <= 50; e++) {
      t.push({ label: e + " Veranstaltungsteilnehmer", value: e });
    }for (e = 100; e <= 1e3; e += 100) {
      t.push({ label: e + " Veranstaltungsteilnehmer", value: e });
    }for (e = 1e3; e <= 5e3; e += 500) {
      t.push({ label: e + " Veranstaltungsteilnehmer", value: e });
    }return t;
  };
}),
    flix_appointment_assistent_2B_3 = function flix_appointment_assistent_2B_3(e, t) {
  var n = this,
      i = new flix_form_elements(),
      l = new flix_html_form($(e));this.build = function () {
    $(e).find(".flix-steps").html(n.get_html()), t.menubar.step_back(), l.get_handle_form(function (e) {
      var n = { events: [t.saved_form.events[0]] };n.events[0].value.name = e.title, n.events[0].value.label = e.title, n.events[0].value.description = e.description, n.title = e.title, t.get_next_step(n, t);
    });
  }, this.get_html = function () {
    new flix_appointment_assistent_2A_2().get_appointment_values();var e = ["", ""];void 0 !== t.saved_form.title && (e = [t.saved_form.title, ""]);var n = "";return n += "<form>", n += '<div class="flix-row">', n += i.get_text({ id: "title", label: "Veranstaltungstitel", value: e[0], columnName: "12", required: !0 }), n += '<div class="flix-col-md-12">', n += i.get_button({ subtype: "button", label: t.btn.back, columnName: "", className: "flix-btn flix-btn-default flix-btn-step-back" }), n += i.get_button({ label: t.btn.current, columnName: "", className: "flix-btn flix-btn-primary flix-btn-lg" }), n += "</div>", n += "</div>", n += "</form>";
  };
},
    flix_appointment_assistent_3 = (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
}, function (e, t) {
  var n = this,
      i = new flix_form_elements(),
      l = (new flix_html_form($(e)), { save_btn: t.btn.current, saved_component: [], get_save_form: function get_save_form(e) {
      $.each(e.saved_component, function (t, i) {
        e.saved_component[t].id = n.get_new_id();
      }), t.get_next_step({ form: e.saved_component }, t);
    } });"object" == (void 0 === t ? "undefined" : _typeof(t)) && "object" == _typeof(t.form) && (l.saved_component = t.form), this.build = function () {
    if (void 0 !== t.quick && 1 == t.quick) return n.build_quick();$(e).find(".flix-steps").html(""), "object" == _typeof(t.saved_form.form) && (l.saved_component = t.saved_form.form), new flix_form_builder($(e).find(".flix-steps"), l).build(), t.menubar.step_back();
  }, this.build_quick = function () {
    $(e).find(".flix-steps").html(n.get_html()), t.menubar.step_back();var a = "",
        s = $.parseJSON(JSON.stringify(l.saved_component));$.each(s, function (e, t) {
      t.label = t.label + " (Nicht ausfüllen! Nur Voransicht)", a += i.get_form_element(t);
    }), $(e).find(".flix-formbuilder-container").html(a), i.get_functions($(e).find(".flix-formbuilder-container")), $(e).find("form").submit(function () {
      return n.get_next_step(), !1;
    }), n.get_open_container();
  }, this.get_new_id = function () {
    return Math.floor(500 * Math.random() + 1) + $.now() + Math.floor(1e4 * Math.random() + 1);
  }, this.get_open_container = function () {
    $(e).find(".flix-steps .flix-panel .flix-panel-body").addClass("flix-hide"), $(e).find(".flix-steps .flix-panel .flix-panel-heading a").unbind("click"), $(e).find(".flix-steps .flix-panel .flix-panel-heading a").click(function () {
      var e = $(this).closest(".flix-panel");return 0 == e.find(".flix-panel-body").eq(0).hasClass("flix-hide") ? e.find(".flix-panel-body").show().slideUp(300, function () {
        $(this).addClass("flix-hide");
      }) : (e.find(".flix-panel-body").removeClass("flix-hide"), e.find(".flix-panel-body").hide().slideDown(300)), !1;
    });
  }, this.get_next_step = function (e) {
    "object" == (void 0 === e ? "undefined" : _typeof(e)) && (l.saved_component = e), t.get_next_step({ form: l.saved_component }, t);
  }, this.get_html = function () {
    var e = "",
        n = "<div class='flix-form-group' style='margin-bottom: 60px;'>";return n += i.get_button({ subtype: "button", label: t.btn.back, columnName: "", className: "flix-btn flix-btn-default flix-btn-step-back" }), n += "<button class='flix-btn flix-btn-primary flix-btn-lg' type='submit'>Jetzt Registrierung abschließen</button>", n += "</div>", e += "<form>", void 0 !== t.quick && 1 == t.quick && (e += "<div class='flix-form-group flix-html-html'>", e += '<i class="flix-glyphicon flix-glyphicon-warning-sign"></i> ', e += "Das nachfolgende Online-Termin-Formular ist standardmäßig voreingestellt.", e += " Nach der ", e += "<button class='flix-html-a' type='submit'>Registrierung</button>", e += " und dem Login können Sie das Formular individuell anpassen und sofort nutzen. Sie können z.B. individuelle Felder für Abfragen einfügen.", e += "<hr>", e += "Erklär-Videos zur Bearbeitung und Einbindung des Termin-Formulars auf Ihrer Website: <a target='__blank' href='" + FLIX_URLS.flix + "de/videos.html' class='flix-html-a'>" + FLIX_URLS.flix + "de/videos.html</a> (neues Fenster)", e += "</div>"), e += n, e += "</form>", e += '<div class="flix-panel flix-panel-default flix-form-group">', void 0 !== t.quick && 1 == t.quick && (e += '<div class="flix-panel-heading">', e += '<a href="#" class="flix-html-a">', e += "Standard Termin-Buchungs-Formular anzeigen (Nicht ausfüllen! Nur Voransicht)", e += "</a>", e += "</div>", e += '<div class="flix-panel-body">', e += "</div>"), e += '<div class="flix-panel-body">', e += '<div class="flix-formbuilder-container"></div>', e += "</div>", e += "</div>";
  };
}),
    flix_appointment_assistent_4 = function flix_appointment_assistent_4(e, t) {
  var n = this;new flix_form_elements();this.build = function () {
    $(e).find(".flix-steps").html(n.get_html()), new flix_booking_calendar($(e).find(".flix-steps .flix-calendar"), t).build(), new flix_html_form($(e).find(".flix-steps .flix-calendar")).get_handle_form(function (e) {
      swal.fire({ type: "success", title: "An die E-Mailadresse " });
    }), n.get_btn_save();
  }, this.get_btn_save = function () {
    $(e).find(".flix-save-calendar").unbind("click"), $(e).find(".flix-save-calendar").click(function () {
      return t.onSave($(e), t), !1;
    });
  }, this.get_html = function () {
    var e = "",
        n = "";return n += '<div class="flix-row flix-html-html">', n += '<div class="flix-col-md-12"><div class="flix-form-group"><a href="#" class="flix-btn flix-btn-block flix-btn-primary flix-save-calendar flix-btn-lg">Diesen Kalender speichern</a></div></div>', n += "</div>", t.btn.current == t.btn.save && (n = ""), e += n, e += '<div class="flix-calendar">', e += "</div>", e += n;
  };
},
    flix_appointment_assistent_5 = function flix_appointment_assistent_5(e, t) {
  var n = this,
      i = new flix_form_elements(),
      l = new flix_html_form($(e));this.build = function () {
    $(e).find(".flix-steps").html(n.get_html()), n.get_form(), n.get_change_form(), n.get_handle_form();
  }, n.get_handle_form = function () {
    l.get_handle_form(function (e) {
      console.log(e);
    });
  }, this.get_change_form = function () {
    $(e).find(".flix-panel-heading a").unbind("click"), $(e).find(".flix-panel-heading a").click(function () {
      return $(".flix-panel").find(".flix-panel-body").addClass("flix-hide"), $(this).closest(".flix-panel").find(".flix-panel-body").removeClass("flix-hide"), n.get_form(), n.get_handle_form(), !1;
    });
  }, this.get_form = function () {
    var t = $(e).find(".flix-panel-body").index($(e).find(".flix-panel-body").not(".flix-hide")),
        n = "",
        l = "";(l = ["", ""])[0] += i.get_text({ id: "username", label: "Benutzername", subtype: "text", columnName: "12", description: "", required: !0 }), l[0] += i.get_text({ id: "email", label: "E-Mailadresse", subtype: "text", columnName: "12", description: "", required: !0 }), l[0] += i.get_text({ id: "pass", label: "Passwort", subtype: "password", columnName: "6", description: "", required: !0 }), l[0] += i.get_text({ id: "pass2", label: "Passwort wiederholen", subtype: "password", columnName: "6", description: "", required: !0 }), l[0] += i.get_terms({ id: "terms", type: "terms", label: "Datenschutz-Informationen (Bitte bestätigen)", columnName: "12", required: !0, description: "Sie haben die Möglichkeit jederzeit Ihre Einwilligung zur Verwendung der persönlichen Daten zu widerrufen.", values: [{ label: "Ich stimme der Erhebung meiner personenbezogenen Daten (siehe Formular) zu", value: "Einwilligung personenbezogener Daten" }, { label: "Ich stimme der Kontaktaufnahme zu", value: "Kontaktaufnahme Terminerinnerungen" }, { label: "Ich bestätige die Richtigkeit meiner Angaben", value: "Richtigkeit Angaben" }] }), l[0] += i.get_button({ id: "save", label: "Account erstellen", subtype: "submit", columnName: "12", className: "flix-btn flix-btn-primary flix-btn-save flix-btn-lg", description: "" }), l[1] += i.get_text({ id: "username", label: "Benutzername / E-Mailadresse", subtype: "text", columnName: "6", description: "", required: !0 }), l[1] += i.get_text({ id: "password", label: "Passwort", subtype: "password", columnName: "6", description: "", required: !0 }), l[1] += i.get_button({ id: "save", label: "Einloggen & speichern", subtype: "submit", columnName: "12", className: "flix-btn flix-btn-primary flix-btn-save flix-btn-lg", description: "" }), n += "<form>", n += l[t], n += "</form>", $(e).find(".flix-panel-body").html(""), $(e).find(".flix-panel-body").not(".flix-hide").html(n), i.get_functions($(e));
  }, this.get_html = function () {
    var e = "";return e += i.get_paragraph({ subtype: "p", description: "<i class='flix-glyphicon flix-glyphicon-warning-sign'></i> Um das Termin-Buchungs-Formular abzuspeichern, ist ein Account nötig.", columnName: "12" }), e += '<div class="flix-col-md-12">', e += '<div class="flix-panel flix-panel-default">', e += '<div class="flix-panel-heading">', e += '<a href="#" class="flix-html-a">Registieren</a>', e += "</div>", e += '<div class="flix-panel-body flix-hide">', e += "</div>", e += "</div>", e += '<div class="flix-panel flix-panel-default">', e += '<div class="flix-panel-heading">', e += '<a href="#" class="flix-html-a">Einloggen</a>', e += "</div>", e += '<div class="flix-panel-body">', e += "</div>", e += "</div>", e += "</div>";
  };
};
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
},
    flix_assigment_plan = function flix_assigment_plan(e, t) {
  var a = this,
      n = new flix_termin_flix(e, flix_setup_code),
      i = localStorage.getItem("flix_login"),
      l = (new flix_form_elements(), $(e).attr("data-flix-language"));a.legend = { commitment: ["Termin zugesagt", "border-left: 6px solid #33691E; background-color: #AED581; color: #33691E;"], cancellation: ["Termin abgesagt", "border-left: 6px solid #B71C1C; background-color:  #E57373; color: #B71C1C; text-decoration: line-through;"], open: ["Kunde wartet auf Zusage", "border-left: 6px solid #E65100; background-color:  #FFB74D; color: #E65100;"], not_validated: ["E-Mailadresse noch nicht verifiziert", "border-left: 6px solid #01579B; background-color: #4FC3F7; color: #01579B"] };var d = n.post_url;l && (d += "?l=" + l), n.set_post_url(d), this.build = function () {
    new flix_overhead(e, { onReady: function onReady(e) {
        a.get_data(e);
      }, onChange: function onChange(e) {
        "object" == _typeof(a.calendar_atts) && delete a.calendar_atts, a.get_data(e);
      } }).build();
  }, this.get_legend = function () {
    var e = "";return e += '<div class="flix-btn flix-btn-xs flix-disabled flix-btn-default"><i class="flix-icon flix-icon-appointment-by-phone"></i> = Von Admin beigefügt</div> ', $.each(a.legend, function (t, a) {
      e += '<div class="flix-btn flix-btn-xs flix-disabled flix-btn-default" style="' + a[1] + '">' + a[0] + "</div> ";
    }), e += "";
  }, this.get_data = function (e) {
    $.post(FLIX_URLS.api + l + "/booking/get", { user: i, ID: e.id, options: { not_validated: 1, future: !0 } }).success(function (t) {
      if (e.stage.html("<div class='flix-col-md-12'><div class='flix-alert flix-alert-danger'>Keine Einträge</div></div>"), !t[0]) return !1;a.booking_data = t[1], a.events = [], $.each(t[1], function (e, n) {
        var i = a.legend[n.status][1];n.validated || (i = a.legend.not_validated[1]), t[1] && a.events.push({ begin: n.begin, end: n.end, value: { ID: n.ID, name: n.form, label: n.email }, style: i, booking_data: n });
      }), a.show_calendar(e);
    });
  }, this.show_calendar = function (e) {
    var t = "d";void 0 !== a.calendar_atts && (t = a.calendar_atts.view), e.stage.html("<div class='flix-calendar flix-form-group'></div><div class='flix-clearfix'></div><div class='flix-legend flix-text-right' style='margin-top: 30px;'></div>"), a.calendar = new flix_datepicker(e.stage.find(".flix-calendar"), { type: "eventpicker", date: a.get_calendar_date(), view: t, fixed_view: !1, pop: !1, events: a.events, settings: { style: { success_color: "black", cell_element: '<br><hr style="border:0; border-top: 2px dashed %s; margin:0;">' } }, get_click_me: function get_click_me(t) {
        var i = a.calendar.get_event_by_id(t);new n.get_new_section(e.stage, { title: i.value.label, html: '<div data-entry-manager data-flix-language="' + l + '"></div>', onReady: function onReady(t) {
            a.get_entry_manager(t, i, e);
          }, onClose: function onClose(t) {
            a.calendar_atts = a.calendar.get_atts(), a.get_data(e);
          } });
      } }), a.calendar.build(), e.stage.find(".flix-legend").html(a.get_legend());
  }, this.get_calendar_date = function () {
    if (void 0 !== a.calendar_atts) return a.calendar_atts.date.getFullYear() + "-" + (a.calendar_atts.date.getMonth() + 1) + "-" + a.calendar_atts.date.getDate();var e = $.parseJSON(JSON.stringify(a.events[0]));return e.begin = e.begin.split(" "), new Date(e.begin[0]).getTime() < new Date().getTime() && (e.begin[0] = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-01"), e.begin[0];
  }, this.get_entry_manager = function (e, t, a) {
    $(e.container).find("[data-entry-manager]").html("<div class='flix-header'></div><div class='flix-stage'></div>");$(e.container).find("[data-entry-manager]").find(".flix-stage").html('<div class=\'flix-clearfix flix-form-group\'></div><div class="flix-col-md-12"><div class="flix-stage-container"></div></div>');var i = { stage: $(e.container).find("[data-entry-manager]").find(".flix-stage"), header: $(e.container).find("[data-entry-manager]").find(".flix-header"), id: a.id },
        l = new flix_entry_manage($(e.container).find("[data-entry-manager]"), flix_setup_code, n, {});(l = l.entry_manager).data = [t.booking_data], l.ret = i, l.get_order_data(), l.get_menu(i), $(e.container).find("[data-entry-manager]").find(".flix-count-" + l.data[0].status).closest("a").trigger("click");
  };
};
"use strict";
var flix_attendance = function flix_attendance(t, l, e) {
  var i = this,
      s = localStorage.getItem("flix_login"),
      a = $(t).attr("data-flix-language"),
      n = new flix_form_elements(),
      f = e.post_url,
      o = '<div class="flix-col-md-12"><div class="flix-alert flix-alert-danger">Keine Einträge</div></div> ';this.build = function () {
    e.get_styles(), e.get_animateCSS(), $(t).attr("data-flix-language") && (f += "?l=" + $(t).attr("data-flix-language")), e.set_post_url(f), i.get_html();
  }, this.get_html = function () {
    new flix_overhead(t, { onReady: function onReady(t) {
        i.get_functions(t);
      }, onChange: function onChange(t) {
        i.get_functions(t);
      } }).build();
  }, this.get_functions = function (t) {
    var l = { user: s, ID: t.id, options: { past: !0 } };$.post(FLIX_URLS.api + a + "/booking/get", l).success(function (l) {
      if (!l[0]) return t.stage.html(o), !1;i.get_show_table(t, l[1]);
    });
  }, this.get_show_table = function (t, l) {
    var e = "";e += '<div style="overflow-x:auto;">', e += '<div class="flix-col-md-12" >', e += '<table class="flix-table flix-html-table" style="border-collapse:separate; border-spacing: 0 1em;">', e += '<tr class="flix-html-tr" >', e += '<th class="flix-html-th">', e += "Anwesenheit", e += "</th>", e += '<th class="flix-html-th">', e += "E-Mail", e += "</th>", e += '<th class="flix-html-th">', e += "Termin-Datum", e += "</th>", e += '<th class="flix-html-th">', e += "Details", e += "</th>", e += "</tr>";var s = 0;if (l.reverse(), $.each(l, function (t, l) {
      if ("commitment" != l.status) return !0;var i = [l.ID + "-0", "flix-hide flix-toggle", " <a href='#' class='flix-btn flix-btn-default flix-btn-show'>beifügen</a>"];void 0 !== l.logs.attendance && (i = [l.ID + "-" + l.logs.attendance, "", "", ""]), e += '<tr class="flix-html-tr">', e += '<td class="flix-html-td" >', e += i[2], e += '<span class="' + i[1] + '">', e += n.get_toggleswitch({ label: "", columnName: "", value: i[0], values: [{ value: l.ID + "-1" }, { value: l.ID + "-0" }] }), e += "</span>", e += " #", e += l.booking_id, e += "</td>", e += '<td class="flix-html-td" >', e += '<small class="flix-html-small">', e += l.email, e += "</small>", e += "</td>", e += '<td class="flix-html-td" >', e += '<small class="flix-html-small">', e += l.booking_date, e += "</small>", e += "</td>", e += '<td class="flix-html-td">', e += '<a href="#' + l.ID + '" data-booking-id="' + l.email + '" class="flix-btn flix-btn-default flix-btn-user"><i class="flix-glyphicon flix-glyphicon-user"></i></a>', e += "</td>", e += "</tr>", s++;
    }), e += "</table>", e += "</div>", e += "</div>", !s) return t.stage.html(o), !1;t.stage.html(e), t.stage.find(".flix-btn").addClass("flix-btn-xs"), new flix_toggleswitch(t.stage, { onChange: function onChange(t) {
        i.get_change_toggle(t);
      } }).build(), i.get_show_user(t, l), i.get_show_click(t, l);
  }, this.get_show_click = function (t, l) {
    t.stage.find(".flix-btn-show").unbind("click"), t.stage.find(".flix-btn-show").click(function () {
      return $(this).closest("td").find(".flix-toggle").removeClass("flix-hide"), $(this).remove(), !1;
    });
  }, this.get_change_toggle = function (t) {
    t = t.split("-");var l = { user: s, ID: t[0], attendance: t[1] };$.post(FLIX_URLS.api + a + "/attendance/save", l);
  }, this.get_show_user = function (i, a) {
    i.stage.find(".flix-btn-user").unbind("click"), i.stage.find(".flix-btn-user").click(function () {
      var i = { user: s, ID: $(this).attr("href").replace("#", "") };return e.get_new_section($(t), { title: "" + $(this).attr("data-booking-id"), html: "<div data-flix-list-events></div>", onReady: function onReady(s) {
          new flix_messenger_list(t, l, e, {}).get_show_entry({ container: s.container }, !1, i);
        } }), !1;
    });
  };
};
"use strict";
var flix_booking_list = function flix_booking_list(t, i, n) {
  var e = this,
      a = localStorage.getItem("flix_login");this.build = function () {
    e.get_html();
  }, this.get_html = function () {
    new flix_overhead(t, { onReady: function onReady(t) {
        e.get_functions(t);
      }, onChange: function onChange(t) {
        e.get_functions(t);
      } }).build();
  }, this.get_functions = function (i) {
    var e = { ID: i.id, user: a };i.stage.html(n.get_loader()), $.post(FLIX_URLS.api + $(t).attr("data-flix-language") + "/assistent/get_data", e).success(function (t) {
      t[1].view = "list", new flix_booking_calendar(i.stage, { saved_form: t[1] }).build();
    });
  };
};
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
  return typeof t === "undefined" ? "undefined" : _typeof2(t);
} : function (t) {
  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof2(t);
},
    flix_booking_service = function flix_booking_service(t, i, e) {
  var l = this,
      n = new flix_form_elements($(t)),
      o = new flix_html_form($(t));l.login = localStorage.getItem("flix_login"), l.lang = $(t).attr("data-flix-language"), this.get_form = function (i) {
    var e = n.get_button({ label: "Speichern", className: "flix-btn flix-btn-success" }),
        o = "<form>";o += '<div class="flix-clearfix"></div>', "object" != (void 0 === i ? "undefined" : _typeof(i)) || 0 == Object.keys(i).length ? o += l.get_html({}) : $.each(i, function (t, i) {
      o += l.get_html(i);
    }), o += '<div class="flix-clearfix"></div>', o += e, o += "</form>", $(t).html(o), l.get_function(), l.get_handle_form(), n.get_functions($(t));
  }, this.build = function () {
    $.post(FLIX_URLS.api + l.lang + "/assistent/get_services", { user: l.login }).success(function (t) {
      "object" == _typeof(t[1]) && 0 != typeof Object.keys(t[1]).length || (t[1] = {}), l.get_form(t[1]);
    });
  }, this.get_handle_form = function () {
    o.get_handle_form(function (t) {
      var i = { user: l.login, data: {} };$.each(t, function (t, e) {
        var l = t.split("_");void 0 === i.data[l[1]] && (i.data[l[1]] = {}), "object" == (void 0 === e ? "undefined" : _typeof(e)) && (e = JSON.stringify(e)), i.data[l[1]][l[0]] = e;
      }), i.data = Object.values(i.data), o.get_mark_form(!1, !1), $.post(FLIX_URLS.api + l.lang + "/assistent/save_services", i).success(function (t) {
        void 0 !== t[0] && t[0] && swal.fire({ type: "success", timer: 2e3, showConfirmButton: !1, title: t[1] });
      });
    });
  }, this.get_function = function () {
    $(t).find(".flix-btn-add").unbind("click"), $(t).find(".flix-btn-add").click(function () {
      return $(this).closest(".flix-html-row").after(l.get_html()).hide().slideDown(), l.get_function(), n.get_functions($(t)), !1;
    }), $(t).find(".flix-btn-remove").unbind("click"), $(t).find(".flix-btn-remove").click(function () {
      if (1 == $(t).find(".flix-html-row").length) {
        var i = $(this).closest(".flix-html-row");return i.addClass("flix-animated flix-shake"), setTimeout(function () {
          i.removeClass("flix-animated flix-shake");
        }, 1e3), !1;
      }return $(this).closest(".flix-html-row").slideUp(function () {
        $(this).remove(), n.get_functions($(t));
      }), l.get_function(), !1;
    });
  }, this.get_html = function (t) {
    var i = $.now() + "" + 100 * Math.random() + 100,
        e = "<div class='flix-html-row'>";return $.each([{ id: "title", label: "Leistung", columnName: 3, required: !0 }, { id: "description", label: "Info", columnName: 3 }, { id: "time", subtype: "number", label: "Zeit-Std.", columnName: 1, required: !0 }, { id: "price", subtype: "number", label: "Preis", columnName: 1 }, { type: "select2", id: "short", label: "Gruppe", columnName: 1 }], function (l, o) {
      "object" == (void 0 === t ? "undefined" : _typeof(t)) && void 0 !== t[o.id] && (o.value = t[o.id]), o.id = o.id + "_" + i, "select2" == o.type ? e += n.get_select2(o) : e += n.get_text(o);
    }), e += '<div class="flix-col-md-3">', e += '<div class="flix-form-group">', e += '<label class="flix-html-label flix-html-html flix-hidden-xs">&nbsp;</label>', e += '<a class="flix-btn flix-btn-success flix-btn-add"><i class="flix-glyphicon flix-glyphicon-plus"></i></a>', e += '<a class="flix-btn flix-btn-danger flix-btn-remove"><i class="flix-glyphicon flix-glyphicon-minus"></i></a>', e += "</div>", e += "</div>", e += '<div class="flix-clearfix"></div>', e += "</div>";
  };
};
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (i) {
  return typeof i === "undefined" ? "undefined" : _typeof2(i);
} : function (i) {
  return i && "function" == typeof Symbol && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i === "undefined" ? "undefined" : _typeof2(i);
},
    flix_dashboard_admin = function flix_dashboard_admin(i, l) {
  var t = this,
      e = new flix_termin_flix(i, flix_setup_code);e.set_post_url(e.post_url + "?l=" + l.language), this.build = function () {
    var e = { user: l.login };$.post(FLIX_URLS.api + l.language + "/dashboard/admin", e).success(function (l) {
      if (!l[0]) return !1;var e = '<div class="flix-col-md-12"><div class="flix-dropdown flix-form-group"><a href="#" data-tooltip="Nur für Admins sichtbar" class="flix-btn flix-btn-default flix-dropdown-toggle flix-tooltip" data-toggle="dropdown"><i class="flix-glyphicon flix-glyphicon-lock"></i> <span class="flix-hidden-xs">Website-Administration</span></a>';e += '<ul class="flix-dropdown-menu">', e += '<li class="flix-dropdown-header">Support-Anfragen</li>', e += '<li class="flix-html-li"><a href="#" target="" class="flix-html-a flix-btn-supportchats"><i class="flix-glyphicon flix-glyphicon-comments"></i> ', e += l[1].support_chats.supportchats_open.count + " " + l[1].support_chats.supportchats_open.title, e += "</a></li>", e += '<li class="flix-html-li"><a href="#" target="" class="flix-html-a flix-btn-useraccounts"><i class="flix-glyphicon flix-glyphicon-user"></i> ', e += "User-Accounts verwalten", e += "</a></li>", e += '<li class="flix-html-li"><a href="#" target="" class="flix-html-a flix-btn-inovoice"><i class="flix-glyphicon flix-glyphicon-credit-card"></i> ', e += "Rechnungen verwalten", e += "</a></li>", e += "</ul></div></div>", $(i).html(e), t.get_open_supportchats(), t.get_page_manager(), t.get_user_accounts(), t.get_open_inovoice();
    });
  }, this.get_open_inovoice = function () {
    $(i).find(".flix-btn-inovoice").unbind("click"), $(i).find(".flix-btn-inovoice").click(function () {
      return e.get_new_section(l.container, { title: "Rechnungen", html: '<div data-flix-inovoices data-flix-language="' + l.language + '"></div>', onReady: function onReady(i) {
          new flix_admin_inovoice(i.container.find("[data-flix-language]"), flix_setup_code, e).build();
        } }), !1;
    });
  }, this.get_user_accounts = function () {
    $(i).find(".flix-btn-useraccounts").unbind("click"), $(i).find(".flix-btn-useraccounts").click(function () {
      return e.get_new_section(l.container, { title: "User-Accounts", html: '<div  data-flix-useraccounts data-flix-language="' + l.language + '"></div>', onReady: function onReady(i) {
          new flix_admin_users(i.container.find("[data-flix-language]"), flix_setup_code, e).build();
        } }), !1;
    });
  }, this.get_page_manager = function () {
    flix_setup_code.flix_load_script(FLIX_URLS.flix + "assets/js/flix/page_manager.js", "undefined" == typeof flix_page_manager ? "undefined" : _typeof(flix_page_manager), function () {
      $(i).find(".flix-btn-pagemanager").unbind("click"), $(i).find(".flix-btn-pagemanager").click(function () {
        return e.get_new_section(l.container, { title: "Website bearbeiten", html: '<div  data-flix-page-manager  data-flix-language="' + l.language + '"></div>', onReady: function onReady(i) {
            new flix_page_manager(i.container.find("[data-flix-language]"), flix_setup_code, e);
          } }), !1;
      });
    });
  }, this.get_open_supportchats = function () {
    $(i).find(".flix-btn-supportchats").unbind("click"), $(i).find(".flix-btn-supportchats").click(function () {
      return e.get_new_section(l.container, { title: "Support-Chat", html: '<div data-flix-language="' + l.language + '"></div>', onReady: function onReady(i) {
          new flix_admin_support(i.container.find("[data-flix-language]"), flix_setup_code, e).build();
        }, onClose: function onClose(i) {
          new flix_dashboard(i.container, flix_setup_code, e).get_functions();
        } }), !1;
    });
  };
},
    flix_dashboard_alert = function flix_dashboard_alert(i, l) {
  var t = this;this.build = function () {
    t.get_alert();
  }, this.get_alert = function () {
    $.post(FLIX_URLS.api + l.language + "/dashboard/alert", { user: l.login }).success(function (t) {
      i.html(t[1].html), i.attr("data-flix-language", l.language);var e = new flix_termin_flix(i, flix_setup_code),
          n = e.post_url;n += "?l=" + l.language, e.set_post_url(n), e.set_logout();
    });
  };
},
    flix_dashboard_applications = function flix_dashboard_applications(i, l) {
  var t = this;this.build = function () {
    t.get_count_applications();
  }, this.get_count_applications = function () {
    $.post(FLIX_URLS.api + l.language + "/dashboard/applicants", { user: l.login }).success(function (e) {
      var n = "",
          a = new flix_dashboard_functions(l.container);n += a.get_panel({ col: 4, title: '<a href="#" class="flix-appointments-open flix-text-warning flix-html-a flix-tooltip" data-tooltip="' + e[1].language.tooltip1 + '">' + e[1].language["open appointment applications"] + "</a>", subtitle: "<br><small class='flix-html-small '>(" + e[1].language["client waiting for confirmation"] + ")</small>", body: '<h1 class="flix-html-h1 flix-text-warning " style="margin-top: 5px;">' + e[1].open + "</h1>" }), n += a.get_panel({ col: 4, title: '<a href="#" class="flix-appointments-commitment flix-text-success flix-html-a flix-tooltip" data-tooltip="' + e[1].language.tooltip2 + '">' + e[1].language["fixed appointments"] + "</a>", subtitle: "<br><small class='flix-html-small'>(" + e[1].language["confirmation to client is done"] + ")</small>", body: '<h2 class="flix-html-h1 flix-text-success" style="margin-top: 5px;">' + e[1].commitment + "</h2>" }), n += a.get_panel({ col: 4, title: '<a href="#" class="flix-appointments-canceled flix-text-danger flix-html-a flix-tooltip" data-tooltip="' + e[1].language.tooltip3 + '">' + e[1].language["canceled appointment applications"] + "</a>", subtitle: "<br><small class='flix-html-small'>(" + e[1].language["client has canceled the appointment"] + ")</small>", body: '<h2 class="flix-html-h1 flix-text-danger" style="margin-top: 5px;">' + e[1].cancellation + "</h2>" }), n += '<div class="flix-clearfix"></div>', void 0 !== e[1] && i.html(n), t.get_open_appointments(), t.get_flix_animation(e);
    });
  }, this.get_flix_animation = function (l) {
    l[1].open > 0 && new flix_dashboard_animation().open_appointments(i);
  }, this.get_open_appointments = function () {
    var t = new flix_dashboard_next_appointment(i, l),
        e = new flix_termin_flix(i, flix_setup_code),
        n = e.post_url;n += "?l=" + l.language, e.set_post_url(n), t.get_click_container(i, e, ".flix-appointments-open, .flix-appointments-commitment, .flix-appointments-canceled", { open: "flix-appointments-open", commitment: "flix-appointments-commitment", canceled: "flix-appointments-canceled" });
  };
},
    flix_dashboard_applications_canceled = function flix_dashboard_applications_canceled(i, l) {
  var t = this;this.build = function () {
    t.get_count_applications();
  }, this.get_count_applications = function () {
    $.post(FLIX_URLS.api + l.language + "/dashboard/applicants", { user: l.login }).success(function (e) {
      var n = "";n += new flix_dashboard_functions(l.container).get_panel({ col: 12, title: '<a href="#" class="flix-text-danger flix-appointments-canceled flix-html-a flix-tooltip" data-tooltip="' + e[1].language.tooltip3 + '">' + e[1].language["canceled appointment applications"] + "</a>", subtitle: "<br><small class='flix-html-small'>(" + e[1].language["client has canceled the appointment"] + ")</small>", body: '<h2 class="flix-html-h1 flix-text-danger" style="margin-top: 5px;">' + e[1].cancellation + "</h2>" }), n += '<div class="flix-clearfix"></div>', void 0 !== e[1] && i.html(n), t.get_open_appointments();
    });
  }, this.get_open_appointments = function () {
    var t = new flix_dashboard_next_appointment(i, l),
        e = new flix_termin_flix(i, flix_setup_code),
        n = e.post_url;n += "?l=" + l.language, e.set_post_url(n), t.get_click(i, e, ".flix-appointments-canceled", { canceled: "flix-appointments-canceled" });
  };
},
    flix_dashboard_credit = function flix_dashboard_credit(i, l) {
  var t = this;this.build = function () {
    t.get_credit();
  }, this.get_credit = function () {
    $.post(FLIX_URLS.api + l.language + "/dashboard/credits", { user: l.login }).success(function (t) {
      var e = "",
          n = '<a class="flix-btn flix-btn-block flix-btn-default flix-tooltip" data-tooltip="' + t[1].language.tooltip1 + '" href="#" data-code="data-flix-payment data-flix-language=' + l.language + '" style="white-space: inherit;">' + t[1].language["charge credit"] + "</a>";e += new flix_dashboard_functions(l.container).get_panel({ col: 12, title: t[1].language.credit, subtitle: "<br><small class='flix-html-small'>(" + t[1].language["buy new credits for appointment reminders"] + ")</small>", body: '<h4 class="flix-html-h4" style="margin-top: 10px;">' + t[1].language.credit + ": " + t[1].available + "</h4>" + n }), e += '<div class="flix-clearfix"></div>', void 0 !== t[1] && i.html(e), new flix_dashboard_functions(l.container).get_open_container(i);
    });
  };
},
    flix_dashboard = function flix_dashboard(i, l, t) {
  var e = this;t.my_subclass = e, e.login = localStorage.getItem("flix_login");var n = t.post_url;return this.build = function () {
    t.get_styles(), t.get_animateCSS(), $(i).attr("data-flix-language") && (n += "?l=" + $(i).attr("data-flix-language")), t.set_post_url(n), $(i).html(t.get_loader());var a = $(i);$(i).html(t.get_login(a, function () {
      if (e.login = localStorage.getItem("flix_login"), !e.login || null == e.login) return !1;e.get_dashboard(), l.get_pageleave();
    }));
  }, this.get_dashboard = function () {
    $(i).html(t.get_loader());var l = { user: e.login };void 0 !== e.ID && (l.ID = e.ID), e.get_menu();
  }, this.get_menu = function () {
    var l = "";l += '<div class="flix-col-md-12 flix-col-sm-12" >', l += '<div class="flix-well flix-text-center flix-title-bar" style="background-color: #8DC044; color: white;">', l += t.get_loader(), l += "</div>", l += "</div>", l += '<div class="flix-alert-container">' + t.get_loader() + "</div>", l += '<div class="flix-admin-container"></div>', l += '<div class="flix-col-md-12 flix-col-sm-12" >', l += '<div class="flix-well" style="background-color: #d9edf7;">', l += '<div class="flix-count-applicants">' + t.get_loader() + "</div>", l += "</div>", l += "</div>", l += '<div class="flix-col-md-3 flix-col-sm-3" >', l += '<div class="flix-well" style="background-color: #CFD8DC;">';var n = $(i).attr("data-flix-noFullscren");void 0 === n && (l += '<div class="flix-fullscreen-click">' + t.get_loader() + "</div>", l += '<div class="flix-clearfix"></div>'), l += '<div class="flix-support-messages">' + t.get_loader() + "</div>", l += '<div class="flix-clearfix"></div>', l += "</div>", l += '<div class="flix-clearfix"></div>', l += "</div>", l += "</div>", l += '<div class="flix-col-md-6 flix-col-sm-6" >', l += '<div class="flix-well" style="background-color: #d4bff9;">', l += '<div class="flix-col-md-12"><div class="flix-panel flix-panel-default"><div class="flix-panel-body flix-text-center" ><b>Meine gespeicherten Termin-Formulare</b><br><br><div class="flix-assistents" data-flix-language="' + $(i).attr("data-flix-language") + '">' + t.get_loader() + "</div></div></div></div>", l += '<div class="flix-next-appointment">' + t.get_loader() + "</div>", l += "</div>", l += '<div class="flix-well flix-main-functions" style="background-color: #ffddb0;">' + t.get_loader() + "</div>", l += '<div class="flix-well flix-optional-functions" style="background-color: #B2DFDB;">' + t.get_loader() + "</div>", l += '<div class="flix-clearfix"></div>', l += "</div>", l += '<div class="flix-col-md-3 flix-col-sm-3" >', l += '<div class="flix-well" style="background-color: #CFD8DC;">', l += '<div class="flix-news-center">' + t.get_loader() + "</div>", l += '<div class="flix-credits">' + t.get_loader() + "</div>", l += '<div class="flix-membership">' + t.get_loader() + "</div>", l += "</div>", l += '<div class="flix-clearfix"></div>', l += '<div class="flix-well" style="background-color: #D7CCC8;">', l += '<div class="flix-help">' + t.get_loader() + "</div>", l += "</div>", l += '<div class="flix-clearfix"></div>', l += "</div>", l += "</div>", $(i).html(l), e.get_functions(), void 0 === n && e.get_fullscreen();
  }, this.get_fullscreen = function () {
    $(i).toggleClass("flix-fullscreen"), $(i).closest("body").toggleClass("flix-body-fullscreen"), $(i).hasClass("flix-fullscreen") ? $(i).before('<div class="flix-fullscreen-bg" style="width: 100vw; height: 100vh; background-color: white; position: fixed; top: 0; left: 0; z-index: 998; overflow: hidden;"></div>') : $(".flix-fullscreen-bg").remove();
  }, this.get_functions = function () {
    t.set_logout();var l = { language: $(i).attr("data-flix-language"), login: e.login, container: i };new flix_dashboard_alert($(i).find(".flix-alert-container"), l).build(), new flix_dashboard_credit($(i).find(".flix-credits"), l).build(), new flix_dashboard_membership($(i).find(".flix-membership"), l).build(), new flix_dashboard_applications($(i).find(".flix-count-applicants"), l).build(), new flix_dashboard_applications_canceled($(i).find(".flix-count-applicants-canceled"), l).build(), new flix_dashboard_next_appointment($(i).find(".flix-next-appointment"), l).build(), new flix_dashboard_news_center($(i).find(".flix-news-center"), l).build(), new flix_dashboard_title_bar($(i).find(".flix-title-bar"), l).build(), new flix_dashboard_support_messages($(i).find(".flix-support-messages"), l).build(), new flix_dashboard_admin($(i).find(".flix-admin-container"), l).build(), new flix_overhead($(i).find(".flix-assistents")).build();var n = new flix_dashboard_functions(l.container);n.get_list($(i).find(".flix-main-functions"), "main_functions", l), n.get_list($(i).find(".flix-optional-functions"), "optional_functions", l), n.get_list($(i).find(".flix-help"), "help_functions", l), e.get_fullscreen_btn();
  }, this.get_fullscreen_btn = function () {
    $.post(FLIX_URLS.api + $(i).attr("data-flix-language") + "/dashboard/fullscreen", {}).success(function (l) {
      var t = l[1]["open fullscreen"];$(i).hasClass("flix-fullscreen") && (t = l[1]["close fullscreen"]);var n = "";n += '<div class="flix-col-md-12 flix-col-sm-12 ">', n += '<div class="flix-panel flix-panel-default flix-text-center">', n += '<div class="flix-panel-body flix-text-center">', n += '<a href="#" class="flix-html-a flix-btn-fullscreen" style="white-space: inherit;">' + t + "</a>", n += "</div>", n += "</div>", n += "</div>", $(i).find(".flix-fullscreen-click").html(n), $(i).find(".flix-btn-fullscreen").unbind("click"), $(i).find(".flix-btn-fullscreen").click(function () {
        var t = l[1]["close fullscreen"];return $(i).hasClass("flix-fullscreen") && (t = l[1]["open fullscreen"]), $(this).text(t), e.get_fullscreen(), !1;
      });
    });
  }, this;
},
    flix_dashboard_animation = function flix_dashboard_animation() {
  this.open_appointments = function (i) {
    var l = i.find(".flix-appointments-open").closest(".flix-panel");l.find("h1").hide(), setTimeout(function () {
      var t = '<img style="width: 200px; position: absolute; top:0; right:10px;" src="' + (FLIX_URLS.flix + "assets/img/flix_magic.gif") + '">';l.append(t), (t = i.find("img")).css({ "z-Index": 10 }), t.hide().fadeIn(300), l.find("h1").fadeIn(4e3), setTimeout(function () {
        t.fadeOut(300, function () {
          $(this).remove();
        });
      }, 4e3);
    }, 500);
  };
},
    flix_dashboard_functions = function flix_dashboard_functions(i) {
  var l = this,
      t = new flix_termin_flix(!1, flix_setup_code);this.get_open_container = function (l) {
    var e = t.post_url;e += "?l=" + $(i).attr("data-flix-language"), t.set_post_url(e), l.find("a").unbind("click"), l.find("a").click(function () {
      return t.get_new_section($(i), { html: "<div " + $(this).attr("data-code") + "></div>", title: $(this).text(), onReady: function onReady(i) {
          flix_setup_code.run();
        }, onClose: function onClose(l) {
          new flix_dashboard($(i), flix_setup_code, t).get_functions();
        } }), !1;
    });
  }, this.get_panel = function (i) {
    var l = "";return l += '<div class="flix-col-md-' + i.col + " flix-col-sm-" + i.col + ' ">', l += '<div class="flix-panel flix-panel-default flix-text-center">', l += '<div class="flix-panel-body flix-text-center">', l += "<b>" + i.title + "</b>", l += i.subtitle, l += i.body, l += "</div>", l += "</div>", l += "</div>";
  }, this.get_list = function (i, t, e) {
    $.post(FLIX_URLS.api + e.language + "/dashboard/" + t, { user: e.login }).success(function (t) {
      var e = "",
          n = "<br><br>",
          a = ["", ""];$.each(t[1].menu, function (i, l) {
        l[2] && (a = ["flix-tooltip", 'data-tooltip="' + l[2] + '"']), n += '<a class="flix-btn flix-btn-block flix-btn-default ' + a[0] + '" ' + a[1] + ' href="#" data-code="' + l[1] + '" style="white-space: inherit;">' + l[0] + "</a>";
      }), e += l.get_panel({ col: 12, title: t[1].language.title, subtitle: "", body: n }), e += '<div class="flix-clearfix"></div>', void 0 !== t[1] && i.html(e), l.get_open_container(i);
    });
  };
},
    flix_dashboard_membership = function flix_dashboard_membership(i, l) {
  var t = this;this.build = function () {
    t.get_membership();
  }, this.get_membership = function () {
    var t = "";t += '<div class="flix-list-membership" data-flix-language="' + l.language + '" ></div><div class="flix-clearfix"></div>', i.html(t);var e = new flix_termin_flix(i, flix_setup_code);e.set_post_url(e.post_url + "?l=" + l.language), new flix_membership_list(i.find(".flix-list-membership"), flix_setup_code, e).build(), i.find(".flix-list-membership").unbind("click"), i.find(".flix-list-membership").click(function () {
      e.get_new_section(l.container, { title: "Mitgliedschaft", html: '<div class="flix-membership-section" data-flix-language="' + l.language + '"></div>', onReady: function onReady(i) {
          new flix_membership(i.container.find(".flix-membership-section"), flix_setup_code, e).build();
        } });
    }).css({ cursor: "pointer" });
  };
},
    flix_dashboard_news_center = function flix_dashboard_news_center(i, l) {
  var t = this;this.build = function () {
    t.get_count_applications();
  }, this.get_count_applications = function () {
    $.post(FLIX_URLS.api + l.language + "/dashboard/news_center", { user: l.login }).success(function (e) {
      var n = "",
          a = new flix_dashboard_functions(l.container),
          s = "";s += "<br><br><small class='flix-html-small flix-html-a'>" + e[1].language.subtitle1 + "</small>", s += '<h2 class="flix-html-h1 flix-text-warning" style="margin-top: 5px;">' + e[1].count1 + "</h2>", s += "<hr class='flix-html-hr'><small class='flix-html-small flix-html-a'>" + e[1].language.subtitle2 + "</small>", s += '<h2 class="flix-html-h1 flix-text-warning" style="margin-top: 5px;">' + e[1].count2 + "</h2>", n += a.get_panel({ col: 12, title: e[1].language.title, subtitle: "", body: s }), n += '<div class="flix-clearfix"></div>', void 0 !== e[1] && i.html(n), i.find(".flix-html-small").eq(0).addClass("flix-tooltip"), i.find(".flix-html-small").eq(0).attr("data-tooltip", e[1].language.tooltip1), i.find(".flix-html-small").eq(1).addClass("flix-tooltip"), i.find(".flix-html-small").eq(1).attr("data-tooltip", e[1].language.tooltip2), t.get_click_container(), t.get_alert(e);
    });
  }, this.get_alert = function (l) {
    var t = $(".flix-alert-container").find(".flix-alert-info").eq(0),
        e = l[1].count1 + l[1].count2;if (t.find(".flix-msg-hint").remove(), !e) return !1;t.append("<div class='flix-msg-hint' style='margin-left: 10px;'><a href='#' class='flix-badge'><i class='flix-glyphicon flix-glyphicon-envelope'></i> " + e + "</a></div>"), $(".flix-msg-hint").unbind("click"), $(".flix-msg-hint").click(function () {
      return i.trigger("click"), !1;
    });
  }, this.get_click_container = function () {
    i.unbind("click"), i.click(function () {
      var i = new flix_termin_flix(!1, flix_setup_code),
          t = i.post_url;return t += "?l=" + l.language, i.set_post_url(t), i.get_new_section(l.container, { html: "<div class='run' data-flix-language='" + l.language + "'></div>", title: $(this).find("b").text(), onReady: function onReady(t) {
          new flix_messenger(t.container.find(".run"), flix_setup_code, i, l).build();
        }, onClose: function onClose(t) {
          new flix_dashboard(l.container, flix_setup_code, i).get_functions();
        } }), !1;
    }).css("cursor", "pointer");
  };
},
    flix_dashboard_next_appointment = function flix_dashboard_next_appointment(i, l) {
  var t = this;this.build = function () {
    t.get_next_appoitment();
  }, this.get_next_appoitment = function () {
    $.post(FLIX_URLS.api + l.language + "/dashboard/next_appointment", { user: l.login }).success(function (e) {
      var n = "",
          a = new flix_dashboard_functions(l.container),
          s = '<br><br><a class="flix-btn flix-btn-block flix-btn-default flix-appointment-details" href="#" style="white-space: inherit;">' + e[1].button_text + "</a>";s += '<br><br><small class="flix-html-small"><a href="#" class="flix-html-a flix-appointments-today">' + e[1].language["appointments today"] + "</a>", s += '<br><a href="#" class="flix-html-a flix-appointments-tomorrow">' + e[1].language["appointments tomorrow"] + "</a>", s += '<br><br><a href="#" class=" flix-btn flix-btn-block flix-btn-primary flix-appointments-all">' + e[1].language["all appointments"] + "</a>", n += a.get_panel({ col: 12, title: e[1].title, subtitle: "<br><small class='flix-html-small'>(" + e[1].next_appointment + ")</small>", body: s }), n += '<div class="flix-clearfix"></div>';var o = new flix_termin_flix(i, flix_setup_code),
          c = o.post_url;c += "?l=" + l.language, o.set_post_url(c), i.html(n), t.get_click(i, o, ".flix-appointments-today, .flix-appointments-tomorrow, .flix-appointment-details, .flix-appointments-all", { all: "flix-appointments-all", today: "flix-appointments-today", tomorrow: "flix-appointments-tomorrow", details: "flix-appointment-details" });
    });
  }, this.get_click_container = function (i, l, e, n) {
    i.find(e).closest(".flix-panel").unbind("click"), i.find(e).closest(".flix-panel").click(function () {
      var a = $(this).find("a");t.get_click(i, l, e, n), a.trigger("click");
    }).css("cursor", "pointer");
  }, this.get_click = function (i, t, e, n) {
    i.find(e).unbind("click"), i.find(e).click(function () {
      var i = l,
          e = $(this);return $.each(n, function (l, t) {
        if (e.hasClass(t)) return i.filter = l, !1;
      }), t.get_new_section(l.container, { html: "<div class='flix-sections' data-flix-language='" + l.language + "'></div>", title: $(this).text(), onReady: function onReady(l) {
          "all" == i.filter ? new flix_assigment_plan(l.container.find(".flix-sections"), {}).build() : new flix_next_appointments(l.container.find(".flix-sections"), flix_setup_code, new flix_termin_flix(!1, flix_setup_code), i).build();
        }, onClose: function onClose(i) {
          new flix_dashboard(l.container, flix_setup_code, t).get_functions();
        } }), !1;
    });
  };
},
    flix_dashboard_support_messages = function flix_dashboard_support_messages(i, l) {
  var t = this;this.build = function () {
    t.get_support_messages();
  }, this.get_support_messages = function () {
    $.post(FLIX_URLS.api + l.language + "/dashboard/support_messages", { user: l.login }).success(function (e) {
      var n = "";n += '<div class="flix-col-md-12">', n += '<div class="flix-panel flix-panel-default"><div class="flix-panel-body"><div class="flix-text-center"><div style="display: block"><i class="flix-icon flix-icon-Start" style="font-size: 3em;"></i></div><b>' + e[1].language.title + "</b></div><br>", n += '<ul class="flix-list-group flix-html-ul">';var a = ["flix-glyphicon-ok", "flix-text-success"],
          s = a,
          o = 0;$.each(e[1].menu, function (i, l) {
        o++, s = a, l[2] || (s = ["flix-glyphicon-remove", "flix-text-danger"]), n += '<li class="flix-list-group-item flix-html-li flix-text-center"><a href="#" data-code="' + l[1] + '" class="flix-html-a ' + s[1] + '"><div style="display: block;"><i class="' + l[3] + '" style="font-size:3em;"></i></div><small class="flix-text-small">' + o + ". " + l[0] + '</small></a> <i class="flix-glyphicon ' + s[0] + " " + s[1] + '"></i></li>';
      }), n += "</ul>", n += "</div></div>", n += "</div>", i.html(n), i.attr("data-flix-language", l.language), new flix_dashboard_functions(l.container).get_open_container(i), t.first_container_functions(e);
    });
  }, this.first_container_functions = function (t) {
    if (t[1].menu[0][2]) return i.find("[data-code]").eq(0).replaceWith(i.find("[data-code]").html()), !1;i.find("[data-code]").eq(0).unbind("click"), i.find("[data-code]").eq(0).click(function () {
      $(this);var t = { action: "resend_confirm_message", class: "frontend/flix-form-login.php" };t.user = localStorage.getItem("flix_login");var e = new flix_termin_flix(i, flix_setup_code).post_url;return e += "?l=" + l.language, $.post(e, t).success(function (i) {
        swal.fire({ title: i, type: "success", showConfirmButton: !1, timer: 2e3 });
      }), !1;
    });
  };
},
    flix_dashboard_title_bar = function flix_dashboard_title_bar(i, l) {
  this.build = function () {
    var t = new flix_termin_flix(i, flix_setup_code),
        e = t.post_url;e += "?l=" + l.language, t.set_post_url(e), $.post(FLIX_URLS.api + l.language + "/dashboard/title_bar", {}).success(function (l) {
      var e = "";e += '<div class="flix-pull-right">', e += '<a href="#" class="flix-logout flix-html-a" style="color: white;">' + l[1].language.logout + "</a>", e += "</div>", e += '<i class="flix-logo flix-Logo-Terminflix_sw flix-html-h1" style="color: white;"></i>', e += "<br>", e += "<br>", e += l[1].language.welcome, i.html(e), t.set_logout();
    });
  };
};
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
},
    flix_hit_new_connect = function flix_hit_new_connect(e, t, i, l) {
  var n = this,
      s = new flix_form_elements(),
      a = $(e).attr("data-flix-language"),
      o = localStorage.getItem("flix_login"),
      c = new hit_setup($(e).find(".flix-preview").find("[data-hitclick]")),
      u = new flix_html_form($(e));this.build = function () {
    new flix_overhead(e, { onReady: function onReady(e) {
        n.get_connect(e);
      }, onChange: function onChange(e) {
        n.get_connect(e);
      } }).build();
  }, this.get_connect = function (e) {
    $.post(FLIX_URLS.api + a + "/hitclick/get_connection", { user: o, assistent: e.id }).success(function (t) {
      t[0] || (t[1] = { board: "", password: "", settings: { language: a, design: "", style: "", vote: "", position: "", colors: { accent: "", text: "" } } }), n.get_html(e, t[1]);
    });
  }, this.get_html = function (e, t) {
    n.get_hit(e, t, function (i) {
      var l = "";l += "<form>", l += i, l += '<div class="flix-settings flix-hide">', l += n.get_settings(e, t), l += s.get_header({ type: "header", subtype: "h3", label: "Vorschau" }), l += '<div class="flix-col-md-12 flix-preview">', l += "</div>", l += "</div>", l += "</form>", e.stage.html(l), n.toggle_hit_btn(e), e.stage.find(".flix-settings").find("select").change(function () {
        n.get_preview(e);
      }), new flix_colorpicker(e.stage, { onChange: function onChange() {
          n.get_preview(e);
        } }).build(), new flix_toggleswitch(e.stage, { onChange: function onChange() {
          n.get_preview(e);
        } }).build(), u.get_handle_form(function (t) {
        n.get_save_code(e.id, e.stage.find(".flix-preview").find("[data-hitclick]").attr("data-hitclick"), t);
      });
    });
  }, this.get_preview = function (e) {
    var t = e.stage.find("form").serializeArray(),
        i = {};i.user = o;var l = {};if ("object" != (void 0 === t ? "undefined" : _typeof(t))) return !1;$.each(t, function (e, t) {
      l[t.name] = t.value;
    }), i.board = l.survey, i.password = l.hit_password, i.settings = { language: a, design: l.hit_design, style: l.hit_style, vote: l.hit_vote, position: l.position, colors: { accent: l.hit_bg_color, text: l.hit_text_color } }, $.post(FLIX_URLS.hit_api + a + "/code/generate_code", i).success(function (t) {
      e.stage.find(".flix-preview").html('<div data-hitclick="' + t.encrypt + '"></div>'), new hit_click(e.stage.find(".flix-preview").find("[data-hitclick]"), c, new hit_survey_hit(!1, c));
    });
  }, this.get_settings = function (e, t) {
    var i = "";return i += s.get_select({ id: "position", value: t.settings.position, columnName: "4", label: "Position", values: [{ label: "oben", value: "top" }, { label: "unten", value: "bottom" }, { label: "links", value: "left" }, { label: "rechts", value: "right" }] }), i += '<div class="flix-clearfix"></div>', i += s.get_select({ id: "hit_design", value: t.settings.design, columnName: "3", label: "Stil", values: [{ label: "Stil 1", value: "1" }, { label: "2", value: "2" }, { label: "3", value: "3" }, { label: "4", value: "4" }, { label: "5", value: "5" }] }), i += s.get_select({ id: "hit_style", value: t.settings.style, columnName: "3", label: "Darstellung", values: [{ label: "Kompakt", value: "small" }, { label: "Vollständig", value: "full" }] }), i += '<div class="flix-col-md-6">', i += '<div class="flix-pull-left flix-form-group" style="margin-right: 12px;">', i += s.get_toggleswitch({ id: "hit_vote", value: t.settings.vote, columnName: "", label: "Bewertung erlauben", values: [{ label: "Ja", value: "yes" }, { label: "Nein", value: "no" }] }), i += "</div>", i += '<div class="flix-pull-left flix-form-group" style="margin-right: 12px;">', i += s.get_toggleswitch({ id: "hit_password", value: t.settings.password, columnName: "", label: "Passwortschutz", values: [{ label: "Ja", value: "yes" }, { label: "Nein", value: "no" }] }), i += "</div>", i += '<div class="flix-pull-left flix-form-group" style="margin-right: 12px;">', i += s.get_colorpicker({ id: "hit_bg_color", value: t.settings.colors.accent, columnName: "", label: "Farbakzent" }), i += "</div>", i += '<div class="flix-pull-left flix-form-group" style="margin-right: 12px;">', i += s.get_colorpicker({ id: "hit_text_color", value: t.settings.colors.text, columnName: "", label: "Text-Farbe" }), i += "</div>", i += "</div>", i += '<div class="flix-clearfix"></div>', i += s.get_button({ columnName: "12", label: "Speichern", className: "flix-btn flix-btn-success flix-btn-block" });
  }, this.toggle_hit_btn = function (e) {
    e.stage.find("select#survey").unbind("change"), e.stage.find("select#survey").change(function () {
      return e.stage.find(".flix-settings").removeClass("flix-hide").hide().fadeIn(300, function () {}), $(this).val() ? n.get_preview(e) : e.stage.find(".flix-settings").fadeOut(300, function () {
        $(this).addClass("flix-hide");
      }), !1;
    }), e.stage.find("select#survey").trigger("change"), e.stage.find(".flix-edit-survey").unbind("click"), e.stage.find(".flix-edit-survey").click(function () {
      return n.get_edit_forms($(this)), !1;
    });
  }, this.get_edit_forms = function (t) {
    localStorage.setItem("hit_login", o), i.get_new_section($(e), { title: t.text(), html: "<div data-hit-language='" + a + "' class='flix-text-left;'></div>", onReady: function onReady(e) {
        new hit_survey(e.container.find("[data-hit-language]"), c, new hit_survey_hit(!1, c));
      } });
  }, this.get_hit = function (e, t, i) {
    $.post(FLIX_URLS.hit_api + a + "/user/get_boards", { user: o }).success(function (e) {
      var l = [];l.push({ label: "-- Bitte auswählen --", value: "" }), e[0] && "object" == _typeof(e.result) && $.each(e.result, function (e, t) {
        l.push({ label: t.name, value: t.ID });
      }), i(s.get_select({ id: "survey", value: t.board, description: "<a href='#' class='flix-html-a flix-edit-survey' style='text-decoration: underline;'>Kunden-Befragungen bearbeiten</a>", columnName: "8", label: "Kunden-Befragungen", values: l }));
    });
  }, this.get_save_code = function (e, t, i) {
    var l = { user: o, settings: { board: i.survey, password: i.hit_password, settings: { language: a, design: i.hit_design, style: i.hit_style, vote: i.hit_vote, position: i.position, colors: { accent: i.hit_bg_color, text: i.hit_text_color } } }, assistent: e, survey: i.survey };l.settings = JSON.stringify(l.settings), $.post(FLIX_URLS.api + a + "/hitclick/save_connection", l).success(function (e) {
      swal.fire({ title: e[1], type: "success", timer: 2500, showConfirmButton: !1 });
    });
  };
};
"use strict";
var flix_holiday_change_status = function flix_holiday_change_status(i, t, e, l) {
  new flix_form_elements();var n = this;this.build = function () {
    n.get_change_status();
  }, this.get_change_status = function () {
    $(i).find(".flix-btn-change-status").unbind("click"), $(i).find(".flix-btn-change-status").click(function () {
      $(this).toggleClass("flix-btn-primary flix-btn-warning");var i = "active";$(this).hasClass("flix-btn-warning") && (i = "inactive");var t = { user: l.login, ID: $(this).attr("href").replace("#", ""), status: i };return l.get_save_new_status(t), !1;
    });
  };
},
    flix_holiday_edit = function flix_holiday_edit(i, t, e, l) {
  var n = new flix_form_elements(),
      a = this;this.build = function () {
    $(i).find(".flix-btn-edit").unbind("click"), $(i).find(".flix-btn-edit").click(function () {
      var n = $(this).closest(".flix-form-group").find(".flix-btn-change-status").attr("href").replace("#", ""),
          d = {};return $.each(l.data, function (i, t) {
        if (t.ID == n) return d = t, !1;
      }), e.get_new_section($(i), { title: $(this).text(), html: "<div class='flix-edit' style='text-align: left;'></div>", onReady: function onReady(i) {
          var n = new flix_holiday_new(i.container.find(".flix-edit"), t, e, l);n.get_html = function () {
            a.get_html(d, i);
          }, n.get_save = function (t) {
            l.get_save_new_date(t), i.container.find(".flix-close-section").trigger("click"), l.get_date_list();
          }, n.build();
        } }), !1;
    });
  }, this.get_html = function (i, t) {
    var e = "";e += "<form>", e += n.get_text({ id: "ID", value: i.ID, readonly: !0, subtype: "hidden", required: !0 }), e += '<div class="flix-col-md-12">', e += '<label class="flix-html-label flix-html-html">Zeitraum</label>', e += '<div class="flix-cal flix-html-html flix-form-group" style="float: left; margin-right: 10px;">', e += '<a href="#" class="flix-btn flix-btn-default flix-btn-add-begin">Von <i class="flix-glyphicon flix-glyphicon-calendar"></i> <span>..-..-..</span>, <i class="flix-glyphicon flix-glyphicon-clock"></i> <span>.. : ..</span> Uhr</a>', e += '<div class="flix-hide">', e += n.get_text({ id: "begin", readonly: !0, subtype: "hidden", required: !0, value: i.begin }), e += "</div>", e += "</div>", e += '<div class="flix-cal flix-form-group" style="float: left; margin-right: 10px;">', e += '<a href="#" class="flix-btn flix-btn-default flix-btn-add-end">Bis <i class="flix-glyphicon flix-glyphicon-calendar"></i> <span>..-..-..</span>, <i class="flix-glyphicon flix-glyphicon-clock"></i> <span>.. : ..</span> Uhr</a>', e += '<div class="flix-hide">', e += n.get_text({ id: "end", readonly: !0, subtype: "hidden", required: !0, value: i.end }), e += "</div>", e += "</div>", e += '<a href="#" class="flix-btn flix-btn-default flix-all-day"><i class="flix-glyphicon flix-glyphicon-unchecked"></i> ganztags</a>', e += "</div>", e += n.get_text({ label: "Beschreibung", id: "title", required: !0, value: i.title }), e += '<div class="flix-col-md-12">', e += n.get_button({ subtype: "submit", label: "Speichern", className: "flix-btn flix-btn-primary", columnName: "" }), e += '<div class="flix-pull-right">', e += n.get_button({ subtype: "button", label: "Löschen", className: "flix-btn flix-btn-danger", columnName: "" }), e += "</div>", e += "</div>", e += "</form>", t.container.find(".flix-edit").html(e), a.get_show_calendar(t, i), a.get_delete_calendar(t, i);
  }, this.get_delete_calendar = function (i, t) {
    i.container.find(".flix-btn-danger").unbind("click"), i.container.find(".flix-btn-danger").click(function () {
      var e = { user: l.login, ID: t.ID };return l.get_delete_cal(e), i.container.find(".flix-close-section").trigger("click"), l.get_date_list(), !1;
    });
  }, this.get_show_calendar = function (i, n) {
    var a = new flix_datepicker(i.container.find(".flix-edit"), {}),
        d = a.get_date_object(n.begin, !0),
        s = a.get_date_object(n.end, !0),
        f = new flix_holiday_new(i.container, t, e, l);f.get_cal_dates(i.container.find(".flix-cal").eq(0), { data: { begin: d, end: d } }), f.get_cal_dates(i.container.find(".flix-cal").eq(1), { data: { begin: s, end: s } });
  };
},
    flix_holiday = function flix_holiday(i, t, e) {
  var l = this;l.login = localStorage.getItem("flix_login"), l.lang = $(i).attr("data-flix-language"), l.filter = "*";new flix_form_elements();var n = e.post_url;this.build = function () {
    (e.get_styles(), e.get_animateCSS(), l.lang && (n += "?l=" + l.lang), e.set_post_url(n), "*" == l.filter) ? new flix_holiday_overhead($(i), t, e, l).build() : l.get_html();
  }, this.get_html = function (t) {
    $(i).html("<div class='flix-panel flix-panel-default'><div class='flix-panel-body'><div class='flix-new-cal'></div></div></div><div class='flix-cal-list'></div>"), l.get_new_cal(), l.get_date_list();
  }, this.get_new_cal = function () {
    new flix_holiday_new($(i).find(".flix-new-cal"), t, e, l).build();
  }, this.get_date_list = function () {
    new flix_holiday_list($(i).find(".flix-cal-list"), t, e, l).build();
  }, this.get_edit_cal = function (n) {
    new flix_holiday_edit($(i), t, e, Object.assign(l, { data: n })).build();
  }, this.get_change_status = function () {
    new flix_holiday_change_status($(i).find(".flix-cal-list"), t, e, l).build();
  }, this.get_delete_cal = function (i) {
    i.filter = l.filter, $.post(FLIX_URLS.api + l.lang + "/holidays/delete", i);
  }, this.get_save_new_status = function (i) {
    i.filter = l.filter, $.post(FLIX_URLS.api + l.lang + "/holidays/change_status", i);
  }, this.get_save_standard = function (i) {
    i.filter = l.filter, $.post(FLIX_URLS.api + l.lang + "/holidays/standard", i).success(function () {
      l.get_date_list();
    }), l.get_clean_old();
  }, this.get_clean_old = function () {
    $.post(FLIX_URLS.api + l.lang + "/holidays/clean", { user: l.login });
  }, this.get_save_new_date = function (t) {
    new flix_datepicker($(i), {});var e = {};if (e.user = l.login, t.status = "active", !t.begin) return !1;t.end || (t.end = t.begin), e.data = t, e.data.filter = l.filter, $.post(FLIX_URLS.api + l.lang + "/holidays/save", e).success(function (i) {
      l.get_new_cal(), l.get_date_list();
    }), l.get_clean_old();
  };
},
    flix_holiday_list = function flix_holiday_list(i, t, e, l) {
  var n = new flix_form_elements(),
      a = this;this.build = function () {
    $(i).html(e.get_loader()), a.get_holidays();
  }, this.get_holidays = function () {
    $.post(FLIX_URLS.api + l.lang + "/holidays/get", { user: l.login, filter: l.filter }).success(function (i) {
      if (!i[0]) return !1;a.get_list_holidays(i[1]);
    });
  }, this.get_list_holidays = function (t) {
    var e = "";$.each(t, function (i, t) {
      e += '<div class="flix-col-lg-3 flix-col-md-6">', e += '<div class="flix-form-group">';var n = "flix-btn-warning";"active" == t.status && (n = "flix-btn-primary"), t.to == l.filter ? (e += '<a href="#' + t.ID + '" class="flix-btn ' + n + ' flix-btn-block flix-btn-change-status flix-tooltip" data-tooltip="aktiv=grün, deaktiviert=gelb" >', e += "<b>" + t.title + "</b><br>" + a.get_beautify_date(t), e += "</a>", e += '<a href="#" class="flix-btn flix-btn-default flix-btn-block flix-btn-edit">', e += '<i class="flix-glyphicon flix-glyphicon-edit"></i> editieren', e += "</a>") : (e += '<a href="#' + t.ID + '" class="flix-btn ' + n + ' flix-btn-block flix-disabled">', e += "<b>" + t.title + "</b><br>" + a.get_beautify_date(t), e += "</a>", e += '<div class="flix-btn flix-btn-default flix-btn-block flix-disabled">', e += "Übergeordnete Speicherung", e += "</div>"), e += "</div>", e += "</div>";
    }), $(i).html(e), n.get_functions($(i)), l.get_change_status(), l.get_edit_cal(t);
  }, this.get_beautify_date = function (t) {
    var e = new flix_datepicker($(i), {}),
        l = t.begin.split(" ");l[0] = l[0].split("-"), l[1] = l[1].split(":");var n = t.end.split(" ");n[0] = n[0].split("-"), n[1] = n[1].split(":");e.get_atts();var a = e.get_event_period({ Y: l[0][0], m: l[0][1], d: l[0][2], H: l[1][0], i: l[1][1], s: "00" }, { Y: n[0][0], m: n[0][1], d: n[0][2], H: n[1][0], i: n[1][1], s: "00" });return -1 == a.indexOf(".") && (a = l[0][2] + "." + l[0][1] + "." + l[0][0] + ", " + a), a = a.replace("" + new Date().getFullYear(), "");
  };
},
    flix_holiday_new = function flix_holiday_new(i, t, e, l) {
  var n = new flix_form_elements(),
      a = this;this.build = function () {
    a.get_html(), a.get_calendar($(i).find(".flix-btn-add-begin")), a.get_calendar($(i).find(".flix-btn-add-end")), a.get_save_new(), a.get_standard(), a.get_all_day();
  }, this.get_html = function () {
    var t = "";t += "<form>", t += '<div class="flix-col-md-12">', t += '<label class="flix-html-label flix-html-html">Zeitraum</label>', t += '<div class="flix-cal flix-html-html flix-form-group" style="float: left; margin-right: 10px;">', t += '<a href="#" class="flix-btn flix-btn-default flix-btn-add-begin">Von <i class="flix-glyphicon flix-glyphicon-calendar"></i> <span>..-..-..</span>, <i class="flix-glyphicon flix-glyphicon-clock"></i> <span>.. : ..</span> Uhr</a>', t += '<div class="flix-hide">', t += n.get_text({ id: "begin", readonly: !0, subtype: "hidden", required: !0 }), t += "</div>", t += "</div>", t += '<div class="flix-cal flix-form-group" style="float: left; margin-right: 10px;">', t += '<a href="#" class="flix-btn flix-btn-default flix-btn-add-end">Bis <i class="flix-glyphicon flix-glyphicon-calendar"></i> <span>..-..-..</span>, <i class="flix-glyphicon flix-glyphicon-clock"></i> <span>.. : ..</span> Uhr</a>', t += '<div class="flix-hide">', t += n.get_text({ id: "end", readonly: !0, subtype: "hidden", required: !0 }), t += "</div>", t += "</div>", t += '<a href="#" class="flix-btn flix-btn-default flix-all-day"><i class="flix-glyphicon flix-glyphicon-unchecked"></i> ganztags</a>', t += "</div>", t += n.get_text({ label: "Beschreibung", id: "title", required: !0 }), t += '<div class="flix-col-md-12">', t += n.get_button({ subtype: "submit", label: "Speichern", className: "flix-btn flix-btn-primary", columnName: "" }), t += '<div class="flix-pull-right">';var e = new Date().getFullYear();t += n.get_button({ subtype: "button", label: "Feiertage hinzufügen (" + e + " - " + (e + 1) + ")", className: "flix-btn flix-btn-default flix-btn-standard", columnName: "" }), t += "</div>", t += "</div>", t += "</form>", $(i).html(t);
  }, this.get_all_day = function () {
    $(i).find(".flix-all-day").unbind("click"), $(i).find(".flix-all-day").click(function () {
      return $(this).toggleClass("flix-btn-default flix-btn-primary"), $(this).find("i").toggleClass("flix-glyphicon-unchecked flix-glyphicon-check"), $(i).find("#begin").val() || $(i).find(".flix-btn-add-begin").trigger("click"), a.get_calculate_end({ data: { begin: {} } }), !1;
    });
  }, this.get_calculate_end = function (t) {
    if (!$(i).find(".flix-all-day").hasClass("flix-btn-primary")) return t;var e = $(i).find("#begin").val();if (!e) return t;var l = e.split(" "),
        n = l[0] + " 23:59:59";e = l[0] + " 00:00:00";var d = new flix_datepicker($(i), {});return t.data.begin = d.get_date_object(n, !0), a.get_cal_dates($(i).find(".flix-btn-add-end"), t), t.data.begin = d.get_date_object(e, !0), a.get_cal_dates($(i).find(".flix-btn-add-begin"), t), t;
  }, this.get_standard = function () {
    $(i).find(".flix-btn-standard").unbind("click"), $(i).find(".flix-btn-standard").click(function () {
      var i = { user: l.login };return l.get_save_standard(i), !1;
    });
  }, this.get_save_new = function () {
    new flix_html_form($(i)).get_handle_form(function (t) {
      $(i).find(".flix-alert.flix-alert-danger").closest("flix-col-md-12").remove();var e = new Date(t.begin),
          l = new Date(t.end);if (e.getTime() > l.getTime()) return $(i).append('<div class="flix-col-md-12" style="margin-top: 20px;"><div class="flix-form-group"><div class="flix-alert flix-alert-danger">Zeitraum ungültig - Bitte Daten überprüfen</div></div></div>'), !1;a.get_save(t);
    });
  }, this.get_save = function (i) {
    l.get_save_new_date(i);
  }, this.get_calendar = function (i) {
    var t = new flix_datepicker(i, { type: "datepicker", view: "d", fixed_view: !1, pop: !0, include: { weekdays: [["00:00", "24:00", 30], ["00:00", "24:00", 30], ["00:00", "24:00", 30], ["00:00", "24:00", 30], ["00:00", "24:00", 30], ["00:00", "24:00", 30], ["00:00", "24:00", 30]] }, get_click_me: function get_click_me(e) {
        var l = t.get_event_by_id(e);a.get_cal_dates(i, l), a.get_calculate_end(l);
      } });t.build();
  }, this.get_cal_dates = function (i, t) {
    var e = new flix_datepicker(i, {});i.find("span").eq(0).text(e.get_nulls_before(t.data.begin.split.d) + "." + e.get_nulls_before(t.data.begin.split.m) + "." + t.data.begin.split.Y), i.find("span").eq(1).text(e.get_nulls_before(t.data.begin.split.H) + ":" + e.get_nulls_before(t.data.begin.split.i)), i.closest(".flix-cal").find("input").val(t.data.begin.split.Y + "-" + e.get_nulls_before(t.data.begin.split.m) + "-" + e.get_nulls_before(t.data.begin.split.d) + " " + e.get_nulls_before(t.data.begin.split.H) + ":" + e.get_nulls_before(t.data.begin.split.i) + ":00");
  };
},
    flix_holiday_overhead = function flix_holiday_overhead(i, t, e, l) {
  var n = this;this.build = function () {
    new flix_overhead($(i), { onReady: function onReady(i) {
        i.header.find("#id").prepend("<option value='*'>* Für alle Kalender</option>"), i.header.find("#id").val("*"), i.id = "*", n.get_holidays(i);
      }, onChange: function onChange(i) {
        n.get_holidays(i);
      } }).build();
  }, this.get_holidays = function (i) {
    i.stage.html("<div class='flix-col-md-12'></div>");var l = new flix_holiday(i.stage.find(".flix-col-md-12"), t, e);l.filter = i.id, l.get_html();
  };
};
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var flix_landingpage_manager_calendar = function flix_landingpage_manager_calendar(e, t, i, n) {
  var l = new flix_form_elements(),
      a = localStorage.getItem("flix_login");this.build = function (t) {
    return t.stage.find(".flix-btn-calendar").unbind("click"), t.stage.find(".flix-btn-calendar").click(function () {
      var n = $(this);$.post(FLIX_URLS.api + $(e).attr("data-flix-language") + "/landingpage/get", { user: a, ID: t.header.find("#id").val() }).success(function (o) {
        console.log(o);var r = "";"string" == typeof o.calendar_view && o.calendar_view, r += "<form>", r += " ", r += l.get_select({ id: "calendar_view", label: "Kalender Ansicht", value: o.calendar_view, values: [{ label: "Jahres-Überblick", value: "year" }, { label: "Monats-Überblick", value: "month" }, { label: "Tages-Überblick", value: "days" }, { label: "Stunden-Ansicht", value: "hours" }, { label: "Listen-Ansicht", value: "list" }], columnName: 12, required: !0 }), r += '<div class="flix-clearfix"></div>', r += l.get_button({ subtype: "submit", label: "Speichern", className: "flix-btn flix-btn-success" }), r += "</form>", i.get_new_section($(e), { title: n.text(), html: r, onReady: function onReady(i) {
            new flix_html_form(i.container).get_handle_form(function (l) {
              var o = { ID: t.header.find("#id").val(), user: a, calendar_view: i.container.find("#calendar_view").val() };$.post(FLIX_URLS.api + $(e).attr("data-flix-language") + "/landingpage/update", o).always(function (e) {
                n.addClass("flix-btn-info").removeClass("flix-btn-default"), i.container.find(".flix-close-section").trigger("click");
              });
            });
          } });
      });
    }), !1;
  };
},
    _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
},
    flix_landingpage_manager_contact = function flix_landingpage_manager_contact(e, t, i, n) {
  var l = new flix_form_elements(),
      a = this,
      o = localStorage.getItem("flix_login");this.build = function (t) {
    return t.stage.find(".flix-btn-contact").unbind("click"), t.stage.find(".flix-btn-contact").click(function () {
      var n = $(this);$.post(FLIX_URLS.api + $(e).attr("data-flix-language") + "/landingpage/get", { user: o, ID: t.header.find("#id").val() }).success(function (r) {
        var c = { adress: "", city: "", contact: "", country: "", openings: "", infos: "", zip: "" };"object" == _typeof(r.content["contact.html"]) && void 0 === (c = $.parseJSON(r.content["contact.html"].content)).openings && (c.openings = "");var s = "";s += "<form>", s += l.get_textarea({ label: "Ansprechpartner", id: "contact", columnName: 12, required: !0, value: c.contact }), s += l.get_text({ label: "Strasse", id: "adress", columnName: 5, required: !0, value: c.adress }), s += l.get_text({ label: "PLZ", id: "zip", columnName: 2, required: !0, value: c.zip }), s += l.get_text({ label: "Ort", id: "city", columnName: 5, required: !0, value: c.city }), s += l.get_text({ label: "Land", id: "country", columnName: 12, required: !0, value: c.country }), s += l.get_textarea({ label: "Öffnungszeiten", id: "openings", columnName: 12, required: !1, value: c.openings, description: "z.B. bei einem Ladengeschäft" }), s += l.get_textarea({ label: "Weitere Infos zum Kontakt", id: "infos", columnName: 12, required: !1, value: c.infos, description: "z.B. Telefonnumer, Mobilnummer, Fax, ..." }), s += '<div class="flix-col-md-12">', s += l.get_button({ subtype: "button", label: "Vorschau auf Google-Maps", columnName: "", className: "flix-btn flix-btn-default flix-btn-prev" }), s += " ", s += l.get_button({ subtype: "submit", label: "Speichern", columnName: "", className: "flix-btn flix-btn-success" }), s += "</div>", s += "</form>", i.get_new_section($(e), { title: n.text(), html: s, onReady: function onReady(i) {
            a.get_preview(i), new flix_html_form(i.container).get_handle_form(function (l) {
              var a = { ID: t.header.find("#id").val(), user: o, content: { "contact.html": { content: JSON.stringify(l) } } };$.post(FLIX_URLS.api + $(e).attr("data-flix-language") + "/landingpage/update", a).always(function (e) {
                n.addClass("flix-btn-info").removeClass("flix-btn-default"), i.container.find(".flix-close-section").trigger("click");
              });
            });
          } });
      });
    }), !1;
  }, this.get_preview = function (t) {
    t.container.find(".flix-btn-prev").click(function () {
      var i = t.container.find("#adress").val() + ",+" + t.container.find("#zip").val() + "+" + t.container.find("#city").val();$.post(FLIX_URLS.api + $(e).attr("data-flix-language") + "/landingpage/get_maps_url", { url: i }).success(function (e) {
        swal.fire({ showConfirmButton: !1, showCloseButton: !0, title: i.replace("+", " ").replace("+", " "), html: "<div class='flix-embed-responsive flix-embed-responsive-16by9'><iframe class='flix-embed-responsive-item' src='https://www.google.com/maps/embed/v1/place?key=AIzaSyAuj74dp5grLKbH1lWLOra5c50Pcoe0z34&q=" + e[1].url + "'></iframe></div>" });
      });
    });
  };
},
    flix_landingpage_manager_design = function flix_landingpage_manager_design(e, t, i, n) {
  var l = new flix_form_elements(),
      a = this,
      o = localStorage.getItem("flix_login");this.build = function (t) {
    a.get_fonts(function () {
      return t.stage.find(".flix-btn-design").unbind("click"), t.stage.find(".flix-btn-design").click(function () {
        var n = $(this);$.post(FLIX_URLS.api + $(e).attr("data-flix-language") + "/landingpage/get", { user: o, ID: t.header.find("#id").val() }).success(function (r) {
          console.log(r);var c = "",
              s = { bg_color: "", font_color: "", accent_color: "", font_family: "" };$.each(s, function (e, t) {
            "string" == typeof r.page[e] && (s[e] = r.page[e]);
          }), c += "<form>", c += " ", c += l.get_colorpicker({ label: "Hintergrund-Farbe", id: "bg_color", columnName: 4, value: s.bg_color }), c += l.get_colorpicker({ label: "Text-Farbe", id: "font_color", columnName: 4, value: s.font_color }), c += l.get_colorpicker({ label: "Akzent-Farbe", id: "accent_color", columnName: 4, value: s.accent_color }), c += l.get_select({ id: "font_family", label: "Schriftart", values: a.fonts_select(), columnName: 6, required: !0, value: s.font_family }), c += '<div class="flix-col-md-6">', c += '<div class="flix-form-group">', c += '<label class="flix-html-label flix-html-html" for="preview_text">Text-Vorschau</label>', c += '<div id="preview_text" class="flix-form-control">Hier eine <b>Vorschauansicht</b> des Textes</div>', c += "</div>", c += "</div>", c += '<div class="flix-clearfix"></div>', c += l.get_button({ subtype: "submit", label: "Speichern", className: "flix-btn flix-btn-success" }), c += "</form>", i.get_new_section($(e), { title: n.text(), html: c, onReady: function onReady(i) {
              a.get_text(i.container), new flix_html_form(i.container).get_handle_form(function (l) {
                var a = { ID: t.header.find("#id").val(), user: o, page: { design: "flix", bg_color: i.container.find("#bg_color").val(), accent_color: i.container.find("#accent_color").val(), font_color: i.container.find("#font_color").val(), font_family: i.container.find("#font_family").val() } };$.post(FLIX_URLS.api + $(e).attr("data-flix-language") + "/landingpage/update", a).always(function (e) {
                  n.addClass("flix-btn-info").removeClass("flix-btn-default"), i.container.find(".flix-close-section").trigger("click");
                });
              });
            } });
        });
      }), !1;
    });
  }, this.fonts_select = function () {
    var e = [];return $.each(a.google_fonts, function (t, i) {
      e.push({ label: t, value: t });
    }), e;
  }, this.get_fonts = function (t) {
    $.post(FLIX_URLS.api + $(e).attr("data-flix-language") + "/fonts/google_fonts").success(function (e) {
      a.google_fonts = e, t();
    });
  }, this.get_text = function (e) {
    new flix_colorpicker(e, { onChange: function onChange(t) {
        a.get_preview_text(e);
      } }).build(), e.find("#font_family").change(function () {
      a.get_preview_text(e);
    }), a.get_preview_text(e);
  }, this.get_preview_text = function (e) {
    var t = e.find("#font_family").val(),
        i = { color: e.find("#font_color").val(), "background-color": e.find("#bg_color").val(), "font-family": t };e.find("#preview_text").find("style").remove(), e.find("#preview_text").prepend("<style>@import url('https://fonts.googleapis.com/css?family=" + t.replace(" ", "+") + "');</style>"), e.find("#preview_text").css(i), e.find("#preview_text b").css({ color: e.find("#accent_color").val() });
  };
},
    flix_landingpage_manager_hitclick = (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
}, function (e, t, i, n) {
  new flix_form_elements();var l = this,
      a = localStorage.getItem("flix_login");this.build = function (e) {
    t.flix_load_script(FLIX_URLS.hit_url + "/assets/js/dynamic/hit-setup.js", "undefined" == typeof hit_setup ? "undefined" : _typeof(hit_setup), function () {
      l.get_hitclick_btn(e);
    });
  }, this.get_hitclick_btn = function (t) {
    $(e).find(".flix-btn-hitclick").unbind("click"), $(e).find(".flix-btn-hitclick").click(function () {
      return l.btn = $(this), l.get_hitclick(t), !1;
    });
  }, this.get_hitclick = function (n) {
    i.get_new_section($(e), { title: l.btn.text(), html: "<div class='hit-menu-stage' data-hit-language='" + $(e).attr("data-flix-language") + "'><div class='flix-hitclick-container flix-text-left' data-flix-language='" + $(e).attr("data-flix-language") + "'></div></div>", onReady: function onReady(o) {
        console.log(o);var r = new flix_hit_new_connect(o.container.find(".flix-hitclick-container"), t, i),
            c = $.parseJSON(JSON.stringify(n));c.stage = o.container.find(".flix-hitclick-container"), r.get_connect = function (t) {
          $.post(FLIX_URLS.api + $(e).attr("data-flix-language") + "/landingpage/get_hitclick", { user: a, ID: t.id }).success(function (t) {
            t[0] || (t[1] = { board: "", password: "", settings: { design: "", style: "", vote: "", position: "", colors: { accent: $(e).find("[name='accent_color']").val(), text: $(e).find("[name='font_color']").val() } } }), r.get_html(c, t[1]);
          });
        }, r.get_save_code = function (e, t, i) {
          l.get_save_code(e, t, c);
        }, r.get_connect(n);
      } });
  }, this.get_save_code = function (t, i, n) {
    var o = n.stage.find("form").serializeArray(),
        r = {};r.user = a;var c = {};$.each(o, function (e, t) {
      c[t.name] = t.value;
    }), r.board = c.survey, r.password = c.hit_password, r.settings = { language: $(e).attr("data-flix-language"), design: c.hit_design, style: c.hit_style, vote: c.hit_vote, position: c.position, colors: { accent: c.hit_bg_color, text: c.hit_text_color } }, $.post(FLIX_URLS.hit_api + $(e).attr("data-flix-language") + "/code/generate_code", r).success(function (i) {
      var n = { user: a, ID: t, content: { "hitclick.html": { meta: r.settings.position, content: '<div data-hitclick="' + i.encrypt + '"></div><script src="' + FLIX_URLS.hit_url + 'assets/js/dynamic/hit-setup.js"><\/script>' } }, language: $(e).attr("data-flix-language") };$.post(FLIX_URLS.api + $(e).attr("data-flix-language") + "/landingpage/update_hitclick", n).success(function (t) {
        l.btn.addClass("flix-btn-info").removeClass("flix-btn-default"), $(e).find(".flix-btn-preview").trigger("click");
      });
    });
  };
}),
    flix_landingpage_manager_html = function flix_landingpage_manager_html() {
  var e = new flix_form_elements();return this.build = function (t, i) {
    var n = "",
        l = "";return l += '<div class="flix-col-md-12">', l += e.get_button({ label: "Vorschau", subtype: "button", columnName: "", className: "flix-btn flix-btn-success flix-btn-preview" }), l += "</div>", n += '<div class="flix-col-md-12"><label class="flix-html-label" for="domain">Domain</label></div>', n += e.get_text({ id: "domain", label: "", value: "", columnName: 12, readonly: !0, required: !0 }), n += e.get_button({ label: "<i class='flix-glyphicon flix-glyphicon-brush'></i> Design ändern", columnName: 4, className: "flix-btn flix-btn-default flix-btn-block flix-btn-design", required: !0 }), n += e.get_button({ label: "<i class='flix-glyphicon flix-glyphicon-calendar'></i> Kalenderansicht verändern", columnName: 4, className: "flix-btn flix-btn-default flix-btn-block flix-btn-calendar", required: !0 }), n += e.get_button({ label: "<i class='flix-glyphicon flix-glyphicon-question-sign'></i> Kundenbefragung beifügen", columnName: 4, className: "flix-btn flix-btn-default flix-btn-block flix-btn-hitclick", required: !0 }), n += e.get_button({ label: "<i class='flix-glyphicon flix-glyphicon-map'></i> Kontaktadresse hinterlegen", columnName: 4, className: "flix-btn flix-btn-default flix-btn-block flix-btn-contact", required: !0 }), n += e.get_button({ label: "<i class='flix-glyphicon flix-glyphicon-share'></i> Social Media-Accounts beifügen", columnName: 4, className: "flix-btn flix-btn-default flix-btn-block flix-btn-social", required: !0 }), n += e.get_button({ label: "<i class='flix-glyphicon flix-glyphicon-warning-sign'></i> Rechtliche Pflichtangaben", columnName: 4, className: "flix-btn flix-btn-default flix-btn-block flix-btn-imprint", required: !0 }), n += l, n += '<div class="flix-clearfix"></div>';
  }, this;
},
    flix_landingpage_manager_imprint = (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
}, function (e, t, i, n) {
  var l = new flix_form_elements(),
      a = this;a.login = localStorage.getItem("flix_login"), a.lang = $(e).attr("data-flix-language"), a.msg = "Wichtig: Es besteht eine Verpflichtung zur Angabe eines gültigen Impressums sowie der Datenschutzhinweise. Sonst drohen Abmahnungen von z. B. Mitbewerbern.", this.build = function (t) {
    return t.stage.find(".flix-btn-imprint").unbind("click"), t.stage.find(".flix-btn-imprint").click(function () {
      var n = $(this);$.post(FLIX_URLS.api + a.lang + "/landingpage/get", { user: a.login, ID: t.header.find("#id").val() }).success(function (l) {
        var o = { imprint: "Vom Dienstleister noch nicht eingetragen.", privacy: "Vom Dienstleister noch nicht eingetragen." };"object" == _typeof(l.content) && ("object" == _typeof(l.content["imprint.html"]) && "string" == typeof l.content["imprint.html"].content && (o.imprint = l.content["imprint.html"].content), "object" == _typeof(l.content["privacy.html"]) && "string" == typeof l.content["privacy.html"].content && (o.privacy = l.content["privacy.html"].content));var r = a.get_form(o);i.get_new_section($(e), { title: n.text(), html: r, onReady: function onReady(e) {
            a.set_imprint(e.container), new flix_html_form(e.container).get_handle_form(function (i) {
              tinyMCE.triggerSave();var l = { ID: t.header.find("#id").val(), user: a.login, content: { "imprint.html": { content: e.container.find("textarea#imprint").val() }, "privacy.html": { content: e.container.find("textarea#privacy").val() } } };$.post(FLIX_URLS.api + a.lang + "/landingpage/update", l).always(function (t) {
                n.addClass("flix-btn-info").removeClass("flix-btn-default"), e.container.find(".flix-close-section").trigger("click");
              });
            });
          } });
      });
    }), !1;
  }, this.get_form = function (e, t) {
    var i = "",
        n = { imprint: "Vom Dienstleister noch nicht eingetragen.", privacy: "Vom Dienstleister noch nicht eingetragen." };void 0 !== e && ("string" == typeof e.imprint && e.imprint.length > 0 && (n.imprint = e.imprint), "string" == typeof e.privacy && e.privacy.length > 0 && (n.privacy = e.privacy)), "object" == (void 0 === t ? "undefined" : _typeof(t)) && void 0 !== t.form && 0 == t.form || (i += "<form>");var o = "<div class='flix-alert flix-alert-warning'>" + a.msg + "</div>";return i += " ", i += l.get_paragraph({ subtype: "p", type: "paragraph", description: o }), i += '<div class="flix-col-md-6">', i += '<div class="flix-form-group">', i += l.get_textarea({ id: "imprint", label: "Impressum", columnName: "", required: !0, className: "flix-tinymce", value: n.imprint }), i += l.get_button({ subtype: "button", columnName: "", label: "<i class='flix-glyphicon flix-glyphicon-question-sign'></i> Hilfe zum Impressum", className: "flix-btn flix-btn-default flix-btn-xs flix-btn-block flix-btn-help flix-btn-imprint" }), i += "</div>", i += "</div>", i += '<div class="flix-col-md-6">', i += '<div class="flix-form-group">', i += l.get_textarea({ id: "privacy", label: "Datenschutz-Hinweise", columnName: "", required: !0, className: "flix-tinymce", value: n.privacy }), i += l.get_button({ subtype: "button", columnName: "", label: "<i class='flix-glyphicon flix-glyphicon-question-sign'></i> Hilfe zum Datenschutz", className: "flix-btn flix-btn-default flix-btn-xs flix-btn-block flix-btn-help flix-btn-privacy" }), i += "</div>", i += "</div>", i += '<div class="flix-clearfix"></div>', "object" == (void 0 === t ? "undefined" : _typeof(t)) && void 0 !== t.save_button && 0 == t.save_button || (i += l.get_button({ subtype: "submit", label: "Speichern", className: "flix-btn flix-btn-success" })), "object" == (void 0 === t ? "undefined" : _typeof(t)) && void 0 !== t.form && 0 == t.form || (i += "</form>"), i;
  }, this.set_imprint = function (i, n) {
    a.par = new flix_termin_flix(e, t);var l = a.par.post_url;l += "?l=" + a.lang, a.par.set_post_url(l), a.par.set_tinymce(i.find("textarea"), a.lang), a.get_help(i);
  }, this.get_help = function (e) {
    e.find(".flix-btn-help").unbind("click"), e.find(".flix-btn-help").click(function () {
      var t = $(this),
          i = "",
          n = { imprint: ["Auf folgenden Seiten finden Sie weiterführende Informationen sowie Generatoren für ein Impressum (Auflistung ohne Empfehlung bzw. Priorisierung)", "https://www.it-recht-kanzlei.de/Thema/impressum-tmg.html?page=1", "https://www.e-recht24.de/artikel/datenschutz/209.html", "https://www.e-recht24.de/impressum-generator.html", "https://www.impressum-generator.de/impressum-generator/", "http://www.impressum-recht.de/impressum-generator/"], privacy: ["Hier eine Auswahl kostenfreier und kostenpflichtiger Datenschutz-Generatoren (Auflistung ohne Empfehlung bzw. Priorisierung)", "https://www.activemind.de/datenschutz/generatoren/datenschutzerklaerung/", "https://www.ratgeberrecht.eu/leistungen/muster-datenschutzerklaerung.html", "https://www.e-recht24.de/muster-datenschutzerklaerung.html", "https://www.adsimple.de/datenschutz-generator/", "https://www.mein-datenschutzbeauftragter.de/datenschutzerklaerung-konfigurator/"] },
          l = "imprint";t.hasClass("flix-btn-privacy") && (l = "privacy"), i += n[l][0], i += '<ul class="flix-list-group">';for (var o = 1; o < n[l].length; o++) {
        i += "<li class='flix-list-group-item'><a class='flix-html-a' target='_blank' href='" + n[l][o] + "'>" + n[l][o] + "</a> (öffnet neue Seite)</li>";
      }return i += "<ul>", a.par.get_new_section(e, { title: t.text(), html: i, onReady: function onReady(e) {} }), !1;
    });
  };
}),
    flix_landingpage_manager = function flix_landingpage_manager(e, t) {
  var i = this,
      n = new flix_termin_flix(e, flix_setup_code),
      l = (localStorage.getItem("flix_login"), new flix_form_elements(), n.post_url);return this.build = function () {
    $(e).attr("data-flix-language") && i.set_post_url($(e).attr("data-flix-language")), $(e).html(n.get_loader());$(e);new flix_overhead(e, { onReady: function onReady(e) {
        i.get_html(e);
      }, onChange: function onChange(e) {} }).build();
  }, this.set_post_url = function (e) {
    l += "?l=" + e, n.set_post_url(l), n.my_subclass = i;
  }, this.get_html = function (l) {
    var a = new flix_landingpage_manager_html(e, t);l.stage.html(a.build(l)), i.get_preview(l), new flix_landingpage_manager_hitclick(e, flix_setup_code, n, t).build(l), new flix_landingpage_manager_contact(e, flix_setup_code, n, t).build(l), new flix_landingpage_manager_social(e, flix_setup_code, n, t).build(l), new flix_landingpage_manager_design(e, flix_setup_code, n, t).build(l), new flix_landingpage_manager_imprint(e, flix_setup_code, n, t).build(l), new flix_landingpage_manager_calendar(e, flix_setup_code, n, t).build(l), setTimeout(function () {
      l.stage.find("#domain").val(l.header.find(".flix-btn-landingpage").attr("href"));
    }, 1e3);
  }, this.get_preview = function (e) {
    e.stage.find(".flix-btn-preview").unbind("click"), e.stage.find(".flix-btn-preview").click(function () {
      var t = e.header.find(".flix-btn-landingpage").attr("href");return swal.fire({ title: $(this).text(), width: "80%", html: "<iframe src='" + t + "' style='width: 100%; height: 80vh; border:0; '></iframe>", showConfirmButton: !1, showCloseButton: !0 }), !1;
    });
  }, this;
},
    flix_landingpage_manager_social = (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
}, function (e, t, i, n) {
  var l = new flix_form_elements(),
      a = localStorage.getItem("flix_login");this.build = function (t) {
    return t.stage.find(".flix-btn-social").unbind("click"), t.stage.find(".flix-btn-social").click(function () {
      var n = $(this);$.post(FLIX_URLS.api + $(e).attr("data-flix-language") + "/landingpage/get", { user: a, ID: t.header.find("#id").val() }).success(function (o) {
        var r = { facebook: "", twitter: "", youtube: "", instagram: "", sonstige: "" };"object" == _typeof(o.content["social.html"]) && (r = $.parseJSON(o.content["social.html"].content));var c = "";c += "<form>", c += l.get_text({ label: "facebook", id: "facebook", columnName: 6, required: !1, value: r.facebook, description: "facebook-ID hier eintragen (OHNE https://facebook.com/)" }), c += l.get_text({ label: "twitter", id: "twitter", columnName: 6, required: !1, value: r.twitter, description: "twitter-ID hier eintragen (OHNE https://twitter.com/)" }), c += l.get_text({ label: "youtube", id: "youtube", columnName: 6, required: !1, value: r.youtube, description: "youtube-ID hier eintragen (OHNE https://youtube.com/channel/)" }), c += l.get_text({ label: "instagram", id: "instagram", columnName: 6, required: !1, value: r.instagram, description: "instagram-ID hier eintragen (OHNE https://instagram.com/)" }), c += l.get_textarea({ label: "sonstige", id: "sonstige", columnName: 12, required: !1, value: r.sonstige, description: "Bitte einen Link pro Zeile" }), c += l.get_button({ subtype: "submit", label: "Speichern", columnName: 12, className: "flix-btn flix-btn-success" }), c += "</form>", i.get_new_section($(e), { title: n.text(), html: c, onReady: function onReady(i) {
            new flix_html_form(i.container).get_handle_form(function (l) {
              var o = { ID: t.header.find("#id").val(), user: a, content: { "social.html": { content: JSON.stringify(l) } } };$.post(FLIX_URLS.api + $(e).attr("data-flix-language") + "/landingpage/update", o).always(function (e) {
                n.addClass("flix-btn-info").removeClass("flix-btn-default"), i.container.find(".flix-close-section").trigger("click");
              });
            });
          } });
      });
    }), !1;
  };
});
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var flix_landingpage = function flix_landingpage(t) {
  var n = this,
      i = new flix_termin_flix(t, flix_setup_code);new flix_form_elements();n.login = $(t).attr("data-flix-user"), n.page_id = $(t).attr("data-flix-landingpage"), n.lang = $(t).attr("data-flix-language");var e = i.post_url;n.lang && (e += "?l=" + n.lang), i.set_post_url(e), n.menu = { "Termin buchen": ["homepage.html", "flix-glyphicon flix-glyphicon-important-day"], Kontakt: ["contact.html", "flix-glyphicon flix-glyphicon-phone-alt"], "Social-Media Links": ["social.html", "flix-glyphicon flix-glyphicon-share-alt"], Impressum: ["imprint.html", "flix-glyphicon flix-glyphicon-paragraph-alt"], Datenschutz: ["privacy.html", "flix-glyphicon flix-glyphicon-lock"] }, this.build = function () {
    n.get_data(function (t) {
      n.data = t, n.show();
    });
  }, this.show = function () {
    flix_setup_code.flix_load_css(FLIX_URLS.flix + "assets/css/custom/" + n.login + "/" + n.page_id + "/page.css", function () {}), $(t).css({ padding: 0, margin: 0 }), $(t).html(n.grid());var i = new flix_landingpage_nav($(t).find(".lp_nav"));i.data = n.data, i.menu = n.menu, i.html();var e = new flix_landingpage_click($(t).find(".lp_container"), $(t).find("#flix-navbar-top"));e.data = n.data, e.menu = n.menu, e.login = n.login, e.lang = n.lang, e.build(), new flix_landingpage_title($(t).find(".lp_title"), { lang: n.lang, login: n.login, ID: n.data.page.page_id, title: n.data.page.title }).html();
  }, this.grid = function () {
    var t = "";return t += '<div class="lp_nav flix-form-group">' + i.get_loader() + "</div>", t += '<div class="flix-container flix-html-html"><div class="lp_title">' + i.get_loader() + "</div></div>", t += '<div class="flix-container flix-html-html"><div class="lp_container">' + i.get_loader() + "</div></div>";
  }, this.get_data = function (t) {
    var i = { user: n.login, ID: n.page_id };$.post(FLIX_URLS.api + n.lang + "/landingpage/get", i).success(function (n) {
      t(n);
    });
  };
},
    _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
  return typeof t === "undefined" ? "undefined" : _typeof2(t);
} : function (t) {
  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof2(t);
},
    flix_landingpage_booking_details = function flix_landingpage_booking_details(t) {
  var n = this;this.build = function (t) {
    t.content = n.get_html(t), n.onReady(t), n.on_change();
  }, this.on_change = function () {
    $(t).find(".flix-btn-change").unbind("click"), $(t).find(".flix-btn-change").click(function () {
      return $("#flix-navbar-top").find('a[href="change-appointment.html"]').trigger("click"), !1;
    });
  }, this.get_html = function (t) {
    var i = "";i += '<div class="flix-text-left">', i += '<div class="flix-alert flix-alert-success"><span>Die <b>Verifizierung</b> der eingegebenen Kontaktdaten war erfolgreich. Nachfolgend alle <b>Infos zum Bearbeitungsstand</b>.</span></div>', i += n.get_container({ title: "Bearbeitungs-Nummer (bei Rückfragen etc.)", content: t.content.booking_id }), i += n.get_container({ title: "Bearbeitungs-Status", content: n.get_status(t.content.status) + " " + t.content.status_beauty });var e = n.get_service(t.content.service);return e && (i += n.get_container({ title: "Gewünschte Leistung", content: e })), i += n.get_container({ title: "Wunschtermin", content: t.content.booking_date + "<br><br><a href='#change' class='flix-btn flix-btn-default flix-btn-xs flix-btn-change'>Wunschtermin bearbeiten / stornieren</a>" }), i += "</div>";
  }, this.get_service = function (t) {
    if ("object" != (void 0 === t ? "undefined" : _typeof(t)) || null == t || "string" != typeof t.title) return !1;var n = "";return n += t.title, n += '<span class="flix-pull-right">', t.price && (n += '<i class="flix-glyphicon flix-glyphicon-money"></i> ', n += t.price, n += " € "), n += '<i class="flix-glyphicon flix-glyphicon-clock"></i> ', n += t.time, n += " Std.", n += "</span>", t.description && (n += '<div style="margin-top: 7px;" class="flix-html-html flix-small flix-html-small">' + t.description + "</div>"), n;
  }, this.get_status = function (t) {
    var n = "";switch (t) {case "commitment":
        n = "thumbs-up";break;case "cancellation":
        n = "thumbs-down";break;case "open":
        n = "warning-sign";}return '<i class="flix-glyphicon flix-glyphicon-' + n + '"></i>';
  }, this.get_container = function (t) {
    var n = "";return n += '<div class="flix-col-md-12">', n += '<div class="flix-form-group">', n += '<h5 class="flix-html-h5"> ' + t.title + "</h5>", n += '<h4 class="flix-html-h4">' + t.content + "</h4>", n += "</div>", n += "<hr>", n += "</div>";
  };
},
    flix_landingpage_change_appointment = (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
  return typeof t === "undefined" ? "undefined" : _typeof2(t);
} : function (t) {
  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof2(t);
}, function (t, n) {
  var i = this;this.build = function (t) {
    i.content = t;var n = $.parseJSON(JSON.stringify(t));n.content = i.get_html(n), i.onReady(n), i.get_change_status(n);
  }, this.get_change_status = function (n) {
    $(t).find("a[href='#change_appointment'],a[href='#unset_appointment'],a[href='#delete_data']").unbind("click"), $(t).find("a[href='#change_appointment'],a[href='#unset_appointment'],a[href='#delete_data']").click(function () {
      var t = $(this).attr("href").replace("#", ""),
          e = $(this);return swal.fire({ type: "question", title: e.text(), showConfirmButton: !0, showCancelButton: !0, cancelButtonText: "Nein", confirmButtonText: "Ja" }).then(function (l) {
        if (void 0 === l.value) return !1;i[t](e, n);
      }), !1;
    });
  }, this.unset_appointment = function (t, e) {
    var l = { user: n.login, ID: i.content.content.ID, event_id: e.page_id, status: "cancellation" };$.post(FLIX_URLS.api + n.lang + "/booking/change_status", l).success(function (t) {
      swal.fire({ type: "success", timer: 1500, title: t[1], showConfirmButton: !1 }), setTimeout(function () {
        location.reload();
      }, 2500);
    });
  }, this.delete_data = function (t, e) {
    var l = { user: n.login, ID: i.content.content.ID, event_id: e.page_id };$.post(FLIX_URLS.api + n.lang + "/booking/delete", l).success(function (t) {
      swal.fire({ type: "success", timer: 1500, title: t[1], showConfirmButton: !1 }), setTimeout(function () {
        location.reload();
      }, 2500);
    });
  }, this.change_appointment = function (t, e) {
    swal.fire({ title: t.text(), html: '<div class="flix-calendar" data-flix-languge="' + n.lang + '"></div>', showConfirmButton: !1, showCancelButton: !1, showCloseButton: !0 });var l = { user: n.login, ID: e.page_id };i.new_appointment(l, t);
  }, this.new_appointment = function (t, e) {
    $.post(FLIX_URLS.api + n.lang + "/assistent/get_data", t).success(function (e) {
      var l = new flix_datepicker("", {}),
          a = new flix_booking_calendar($(".swal2-content"), { saved_form: e[1] });a.get_booking_form = function (e, o) {
        var c = a.calendar.get_atts();c = "object" == _typeof(c.service) ? c.service : "", swal.fire({ type: "question", title: +l.get_nulls_before(e.data.begin.split.d) + "." + l.get_nulls_before(e.data.begin.split.m) + "." + e.data.begin.split.Y + ", " + l.get_nulls_before(e.data.begin.split.H) + ":" + l.get_nulls_before(e.data.begin.split.i) + " Uhr", showCancelButton: !0, cancelButtonText: "Nein", confirmButtonText: "Ja" }).then(function (l) {
          if (void 0 === l || void 0 === l.value) return !1;var a = { user: t.user, event_id: t.ID, ID: i.content.content.ID, begin: e.data.begin.split, end: e.data.end.split, service: c };void 0 !== i.admin && (a.admin = i.admin), $.post(FLIX_URLS.api + n.lang + "/booking/change_date", a).success(function (t) {
            swal.fire({ type: "success", timer: 1500, title: t[1], showConfirmButton: !1 }), "function" == typeof i.change_callback ? i.change_callback(t, a) : setTimeout(function () {
              location.reload();
            }, 2500);
          });
        });
      }, a.build();
    });
  }, this.get_html = function (t) {
    var n = "";n += '<div class="flix-text-left">', n += i.get_container({ title: "Wunschtermin (" + t.content.status_beauty + ")", content: t.content.booking_date });var e = 6;return "commitment" == t.content.status && (e = 4), n += '<div class="flix-col-md-' + e + '">', n += '<div class="flix-form-group">', n += '<a href="#change_appointment" class="flix-btn flix-btn-block flix-btn-info">Wunschtermin ändern</a>', n += "</div>", n += "</div>", "commitment" == t.content.status && (n += '<div class="flix-col-md-' + e + '">', n += '<div class="flix-form-group">', n += '<a href="#unset_appointment" class="flix-btn flix-btn-block flix-btn-info">Termin absagen</a>', n += "</div>", n += "</div>"), n += '<div class="flix-col-md-' + e + '">', n += '<div class="flix-form-group">', n += '<a href="#delete_data" class="flix-btn flix-btn-block  flix-btn-info">Alle meine Daten löschen</a>', n += "</div>", n += "</div>", n += "</div>";
  }, this.get_container = function (t) {
    var n = "";return n += '<div class="flix-col-md-12" style="margin-bottom: 15px;">', n += '<div class="flix-form-group">', n += '<h5 class="flix-html-h5"> ' + t.title + "</h5>", n += '<h4 class="flix-html-h4">' + t.content + "</h4>", n += "</div>", n += "</div>";
  };
}),
    flix_landingpage_chat = function flix_landingpage_chat(t, n) {
  var i = this;this.build = function (t) {
    i.content = t;var n = $.parseJSON(JSON.stringify(t));n.content = i.get_html(n), i.onReady(n), i.get_chat(n);
  }, this.get_html = function (t) {
    var e = "";return e += '<div data-flix-userchat="' + (FLIX_URLS.flix + "events/" + n.lang + "/userchat/" + n.login + "/" + t.page_id + "/" + i.content.content.md5ID + "/") + '" data-flix-languge="' + n.lang + '"></div>';
  }, this.get_chat = function (n) {
    var i = new flix_termin_flix(t, flix_setup_code),
        e = i.post_url;if (e += "?l=" + $(t).find("[data-flix-userchat]").attr("data-flix-language"), i.set_post_url(e), $(t).find("[data-flix-userchat][data-flix-userchat-bot]").length) {
      var l = container.find("[data-flix-userchat]");return i.get_login(l, function () {
        new flix_userchat($(t).find("[data-flix-userchat]"), flix_setup_code, i);
      }), !1;
    }new flix_userchat($(t).find("[data-flix-userchat]"), flix_setup_code, i);
  };
},
    flix_landingpage_click = function flix_landingpage_click(t, n) {
  var i = this;this.build = function () {
    $(n).find("a").unbind("click"), $(n).find("a").click(function () {
      i.filter = $(this).attr("href"), i.btn = $(this);var t = $.parseJSON(JSON.stringify(i.data.content[i.filter]));return "function" == typeof i[i.filter] ? i[i.filter](t) : i.get_handle_click(t), !1;
    }), i.hash = location.hash, i.hash = i.hash.replace("#", ""), i.hash && $(n).find("a[href='" + i.hash + "']").length ? $(n).find("a[href='" + i.hash + "']").trigger("click") : $(n).find("a").eq(0).trigger("click");
  }, this.get_handle_click = function (e) {
    $(t).html('<div class="flix-form-group"><h3 class="flix-html-h3">' + i.btn.text() + "</h3><hr></div>" + e.content), $(n).find("a").attr("style", ""), i.btn.css({ "font-weight": "bold", "text-transform": "uppercase" }), $(n).slideUp(500, function () {
      $(this).removeClass("flix-in hit-in"), $(n).css({ display: "" });
    }), window.location.hash = i.filter;
  }, this["homepage.html"] = function (n) {
    var e = new flix_landingpage_homepage(t);e.onReady = function (t) {
      i.get_handle_click(t);
    }, e.build(i.data.content);
  }, this["contact.html"] = function (n) {
    var e = new flix_landingpage_contact(t);e.onReady = function (t) {
      i.get_handle_click(t);
    }, e.build(n);
  }, this["booking-details.html"] = function (n) {
    var e = new flix_landingpage_booking_details(t);e.onReady = function (t) {
      i.get_handle_click(t);
    }, e.build(n);
  }, this["change-appointment.html"] = function (n) {
    var e = new flix_landingpage_change_appointment(t, i);e.onReady = function (t) {
      i.get_handle_click(t);
    }, e.build(n);
  }, this["chat.html"] = function (n) {
    var e = new flix_landingpage_chat(t, i);e.onReady = function (t) {
      i.get_handle_click(t);
    }, e.build(n);
  }, this["entry.html"] = function (n) {
    var e = new flix_landingpage_entry(t, i);e.onReady = function (t) {
      i.get_handle_click(t);
    }, e.build(n);
  }, this["social.html"] = function (n) {
    var e = new flix_landingpage_social(t);e.onReady = function (t) {
      i.get_handle_click(t);
    }, e.build(n);
  };
},
    flix_landingpage_contact = function flix_landingpage_contact(t) {
  var n = this;this.build = function (t) {
    t.content = $.parseJSON(t.content), n.get_google_maps_link(t, function () {
      t.content = n.get_html(t), n.onReady(t);
    });
  }, this.get_google_maps_link = function (i, e) {
    var l = i.content.adress + ",+" + i.content.zip + "+" + i.content.city;$.post(FLIX_URLS.api + $(t).attr("data-flix-language") + "/landingpage/get_maps_url", { url: l }).success(function (t) {
      n.maps_link = t[1].url, e();
    });
  }, this.get_html = function (t) {
    var i = "";return i += '<div class="flix-text-left">', t.content.contact && (i += '<h5 class="flix-html-h5"><i class="flix-glyphicon flix-glyphicon-user"></i> Ansprechpartner</h5>', i += t.content.contact), (t.content.adress || t.content.zip || t.content.city || t.content.info) && (i += "<br />", i += '<h5 class="flix-html-h5"><i class="flix-glyphicon flix-glyphicon-map"></i> Adresse</h5>'), t.content.adress && (i += t.content.adress), t.content.adress && (t.content.zip || t.content.city || t.content.info) && (i += "<br />"), t.content.zip && (i += t.content.zip), t.content.city && t.content.zip && (i += " "), t.content.city && (i += t.content.city), "string" == typeof t.content.openings && t.content.openings && (i += "<br />", i += '<h5 class="flix-html-h5"><i class="flix-glyphicon flix-glyphicon-info-sign"></i> Öffnungszeiten</h5>', i += n.nl2br(t.content.openings)), t.content.infos && (i += "<br />", i += '<h5 class="flix-html-h5"><i class="flix-glyphicon flix-glyphicon-info-sign"></i> Weite Infos</h5>', i += n.nl2br(t.content.infos)), i += '<br /><br /><a target="_blank" href="https://www.google.com/maps/place/?q=' + n.maps_link + '" class="flix-btn flix-btn-default">Adresse auf Google Maps öffnen (neues Fenster)</a>', i += "</div>";
  }, this.nl2br = function (t, n) {
    return null == t ? "" : (t + "").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1" + (n || void 0 === n ? "<br />" : "<br>") + "$2");
  };
},
    flix_landingpage_entry = function flix_landingpage_entry(t, n) {
  var i = this;this.build = function (t) {
    i.content = t;var n = $.parseJSON(JSON.stringify(t));n.content = i.get_html(n), i.onReady(n);
  }, this.get_html = function (t) {
    var n = "";return $.each(i.content.content.data, function (t, e) {
      e || (e = "---"), n += i.get_container({ title: t, content: e });
    }), n;
  }, this.get_container = function (t) {
    var n = "";return n += '<div class="flix-col-md-12">', n += '<div class="flix-form-group">', n += '<h5 class="flix-html-h5"> ' + t.title + "</h5>", n += '<h4 class="flix-html-h4">' + t.content + "</h4>", n += "</div>", n += "<hr>", n += "</div>";
  };
},
    flix_landingpage_homepage = (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
  return typeof t === "undefined" ? "undefined" : _typeof2(t);
} : function (t) {
  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof2(t);
}, function (t) {
  var n = this;this.build = function (t) {
    var i = { content: "<div class='flix-form-group' style='margin-top: 50px;'>" + n.get_html(t) + "</div>" };n.onReady(i);
  }, this.get_html = function (t) {
    var n = "";return "object" != _typeof(t["hitclick.html"]) ? "<div class='flix-col-md-12 flix-form-group'>" + t["homepage.html"].content + "</div>" : "top" == t["hitclick.html"].meta ? (n += "<div class='flix-col-md-12 flix-form-group'>" + t["hitclick.html"].content + "</div>", n += "<div class='flix-col-md-12 flix-form-group'>" + t["homepage.html"].content + "</div>") : "bottom" == t["hitclick.html"].meta ? (n += "<div class='flix-col-md-12 flix-form-group'>" + t["homepage.html"].content + "</div>", n += "<div class='flix-col-md-12 flix-form-group'>" + t["hitclick.html"].content + "</div>") : "left" == t["hitclick.html"].meta ? (n += "<div class='flix-col-md-4 flix-form-group'>" + t["hitclick.html"].content + "</div>", n += "<div class='flix-col-md-8 flix-form-group'>" + t["homepage.html"].content + "</div>") : "right" == t["hitclick.html"].meta ? (n += "<div class='flix-col-md-8'>" + t["homepage.html"].content + "</div>", n += "<div class='flix-col-md-4'>" + t["hitclick.html"].content + "</div>") : void 0;
  };
}),
    flix_landingpage_nav = (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
  return typeof t === "undefined" ? "undefined" : _typeof2(t);
} : function (t) {
  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof2(t);
}, function (t) {
  var n = this;this.html = function () {
    var i = "";i += '<nav class="flix-navbar flix-navbar-inverse flix-navbar-small">', i += '<div class="flix-container flix-html-html flix-text-center" style="font-size:inherit; padding-top: 5px; padding-bottom: 5px; border:0;">', i += '<div class="flix-navbar-header">', i += '<button type="button" class="flix-navbar-toggle flix-collapsed"  data-toggle="collapse" data-target="#flix-navbar-top" aria-expanded="false" aria-controls="navbar">', i += '<span class="flix-sr-only">Toggle navigation</span>', i += '<span class="flix-glyphicon flix-glyphicon-menu-hamburger"></span>', i += " Menü", i += "</button>", i += "</div>", i += '<div id="flix-navbar-top" class="flix-collapse flix-navbar-collapse" style="border:0; box-shadow: none;">', i += '<ul class="flix-nav flix-navbar-nav flix-navbar-left">', $.each(n.menu, function (t, e) {
      "object" == _typeof(n.data.content) && "object" == _typeof(n.data.content[e[0]]) && (i += '<li class="flix-html-li"><a href="' + e[0] + '" class="flix-html-a"><i class="' + e[1] + '"></i>&nbsp;&nbsp;' + t + "</a></li>");
    }), i += "</ul>", i += '<ul class="flix-nav flix-navbar-nav flix-navbar-right">', i += '<li class="flix-html-li "><a href="' + FLIX_URLS.flix + '" class="flix-html-a"><i class="flix-Logo-Terminflix_sw"></i></a></li>', i += "</ul>", i += "</div>", i += "</nav>", $(t).html(i);
  };
}),
    flix_landingpage_social = function flix_landingpage_social(t) {
  var n = this;this.build = function (t) {
    t.content = $.parseJSON(t.content);var i = "",
        e = "",
        l = { youtube: "channel/" };$.each(["facebook", "twitter", "youtube", "instagram"], function (n, a) {
      if (void 0 === t.content[a] || !t.content[a]) return !0;var o = "";"string" == typeof l[a] && (o = l[a]), e = "https://" + a + ".com/" + o + t.content[a], i += '<a href="' + e + '" target="_blank" class="flix-btn flix-btn-default">' + a + "-Profil</a> ";
    }), i += n.get_other_links(t), i += "<br /><br />", i += "Mit Klick auf den Link öffnet sich ein neues Fenster zur jeweiligen Website.", t.content = i, n.onReady(t);
  }, this.get_other_links = function (t) {
    if ("string" != typeof t.content.sonstige || !t.content.sonstige) return "";var n = "";n += "<br /><br />", n += '<div class="flix-form-group">', n += '<h3 class="flix-html-h3">Sonstige Links</h3>', n += "<hr>", n += "</div>";var i = t.content.sonstige;return i = i.split("\n"), $.each(i, function (t, i) {
      i = (i = (i = (i = (i = i.toLowerCase()).trim()).replace("http://", "")).replace("https://", "")).replace("www.", ""), n += '<a target="_blank" class="flix-btn flix-btn-default" href="http://' + i + '">' + i + "</a> ";
    }), n;
  };
},
    flix_landingpage_title = function flix_landingpage_title(t, n) {
  new flix_form_elements();this.html = function () {
    var i = "";if (-1 != n.ID.indexOf("ressource_")) return i += '<div class="flix-form-group"><h2 class="flix-html-h2">' + n.title + "</h2></div>", $(t).html(i), !1;$.post(FLIX_URLS.api + n.lang + "/assistent/get_data", { user: n.login, ID: n.ID }).success(function (n) {
      i += '<div class="flix-form-group"><h2 class="flix-html-h2">' + n[1].title + "</h2></div>", $(t).html(i);
    });
  };
};
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (l) {
  return typeof l === "undefined" ? "undefined" : _typeof2(l);
} : function (l) {
  return l && "function" == typeof Symbol && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l === "undefined" ? "undefined" : _typeof2(l);
},
    flix_login = function flix_login(l) {
  var a = this;a.lang = "de", a.callback = function (l) {
    console.log(l);
  }, this.get_translation = function (l) {
    if ("object" == _typeof(a.translation)) return l(), !1;$.post(FLIX_URLS.api + a.lang + "/user/get_login", { type: "language" }).success(function (i) {
      a.translation = i, l();
    });
  }, this.register = function () {
    a.get_translation(function () {
      var i = new flix_login_register($(l));i.callback = function (l) {
        a.callback(l);
      }, i.lang = a.lang, i.translation = a.translation, i.get_html();
    });
  }, this.lost_password = function () {
    a.get_translation(function () {
      var i = new flix_login_password($(l));i.callback = function (l) {
        a.callback(l);
      }, i.lang = a.lang, i.translation = a.translation, i.get_html();
    });
  }, this.login = function () {
    a.get_translation(function () {
      a.get_html();
    });
  }, this.get_html = function () {
    var i = new flix_form_elements(l),
        n = "";n += '<div class="flix-col-md-8 flix-col-md-flix-offset-2">', n += '<div class="flix-panel flix-panel-primary flix-animated flix-bounceIn">', n += '<div class="flix-panel-heading">', n += '<div class="flix-panel-title"><i class="flix-icon flix-icon-User-Login" style="margin-right: 5px;"></i></div>', n += a.translation["sign in"], n += "</div>", n += '<div class="flix-panel-body">', n += "<form>", n += i.get_text({ id: "username", subtype: "text", column_name: "12", label: a.translation.username + " / " + a.translation["Email adress"], placeholder: a.translation.username + " / " + a.translation["Email adress"], required: !0 }), n += i.get_text({ id: "password", subtype: "password", column_name: "12", label: a.translation.password, placeholder: a.translation["Enter password"], required: !0 }), n += i.get_button({ type: "submit", column_name: "12", label: a.translation["sign in"], className: "flix-btn flix-btn-block flix-btn-success" }), n += "</form>", n += "</div>", n += '<div class="flix-panel-footer">', n += '<div class="flix-form-group flix-text-center">', n += '<span class="flix-pull-left">', n += '<a href="#" class="flix-btn flix-btn-default flix-btn-xs" data-flix-lost-pw="">' + a.translation["lost password"] + "?</a>", n += "</span>", n += '<span class="flix-pull-right">', n += '<a href="#" class="flix-btn flix-btn-primary flix-btn-xs" data-flix-sign-up="">' + a.translation["sign up"] + "</a>", n += "</span>", n += '<div class="flix-clearfix"></div>', n += "</div>", n += "</div>", n += "</div>", n += "</div>", $(l).html(n), a.get_submit(), a.get_change_btn();
  }, this.get_submit = function () {
    var i = new flix_html_form($(l));i.get_handle_form(function (n) {
      $.post(FLIX_URLS.api + a.lang + "/user/get_login", n).success(function (n) {
        if (!n[0]) return i.get_animation_false(), i.get_mark_form(["username"], ["username"]), !1;var t = "";t += '<div class="flix-col-md-12">', t += '<div class="flix-alert flix-alert-success"><span>' + n[1].username + "</span></div>", t += "</div>", $(l).find(".flix-panel-body").html(t), localStorage.setItem("flix_login", n[1].md5_id), "function" == typeof a.callback && a.callback(n[1]);
      });
    });
  }, this.get_change_btn = function () {
    $(l).find("[data-flix-sign-up]").unbind("click"), $(l).find("[data-flix-sign-up]").click(function () {
      return a.register(), !1;
    }), $(l).find("[data-flix-lost-pw]").unbind("click"), $(l).find("[data-flix-lost-pw]").click(function () {
      return a.lost_password(), !1;
    }), $(l).find("[data-flix-sign-in]").unbind("click"), $(l).find("[data-flix-sign-in]").click(function () {
      return a.login(), !1;
    });
  };
},
    flix_login_password = function flix_login_password(l) {
  var a = this;this.get_html = function () {
    var i = new flix_form_elements(l),
        n = "";n += '<div class="flix-col-md-8 flix-col-md-flix-offset-2">', n += '<div class="flix-panel flix-panel-primary flix-animated flix-bounceIn">', n += '<div class="flix-panel-heading">', n += '<div class="flix-panel-title"><i class="flix-glyphicon flix-glyphicon-user-lock"></i></div>', n += a.translation["lost password"], n += "</div>", n += '<div class="flix-panel-body">', n += "<form>", n += i.get_text({ id: "username", description: a.translation["We will send an e-mail with a link to change the password"], subtype: "text", columnName: "12", label: a.translation.username + " / " + a.translation["Email adress"], placeholder: a.translation.username + " / " + a.translation["Email adress"], required: !0 }), n += i.get_button({ subtype: "submit", columnName: "12", label: a.translation.submit, className: "flix-btn flix-btn-block flix-btn-success" }), n += "</form>", n += "</div>", n += '<div class="flix-panel-footer">', n += '<div class="flix-form-group flix-text-center">', n += '<span class="flix-pull-left">', n += '<a href="#" class="flix-btn flix-btn-primary flix-btn-xs" data-flix-sign-up="">' + a.translation["sign up"] + "</a>", n += "</span>", n += '<span class="flix-pull-right">', n += a.translation["Already have an account?"] + "&nbsp;", n += '<a href="#" class="flix-btn flix-btn-primary flix-btn-xs" data-flix-sign-in="">' + a.translation["sign in"] + "</a>", n += "</span>", n += '<div class="flix-clearfix"></div>', n += "</div>", n += "</div>", n += "</div>", n += "</div>", $(l).html(n), a.get_submit();var t = new flix_login($(l));t.lang = a.lang, t.translation = a.translation, t.callback = function (l) {
      a.callback(l);
    }, t.get_change_btn(), i.get_functions($(l));
  }, this.get_submit = function () {
    var i = new flix_html_form($(l));i.get_handle_form(function (n) {
      $.post(FLIX_URLS.api + a.lang + "/user/lost_password", n).success(function (a) {
        if (!a[0]) return i.get_animation_false(), i.get_mark_form(["username"], ["username"]), !1;var n = "";n += '<div class="flix-col-md-12">', n += '<div class="flix-alert flix-alert-success">' + a[1] + "</div>", n += "</div>", $(l).find(".flix-panel-body").html(n);
      });
    });
  };
},
    flix_login_register = function flix_login_register(l) {
  var a = this;this.get_html = function () {
    var i = new flix_form_elements(l),
        n = "";n += '<div class="flix-col-md-8 flix-col-md-flix-offset-2">', n += '<div class="flix-panel flix-panel-primary flix-animated flix-bounceIn">', n += '<div class="flix-panel-heading">', n += '<div class="flix-panel-title"><i class="flix-glyphicon flix-glyphicon-user-key"></i></div>', n += a.translation["sign up"], n += "</div>", n += '<div class="flix-panel-body">', n += "<form>", n += i.get_text({ id: "username", subtype: "text", columnName: "12", label: a.translation.username, placeholder: a.translation.username, required: !0 }), n += i.get_text({ id: "email", subtype: "email", columnName: "12", label: a.translation["Email adress"], placeholder: a.translation["Email adress"], required: !0 }), n += i.get_text({ id: "password", subtype: "password", columnName: "6", label: a.translation.password, placeholder: a.translation["Enter password"], required: !0 }), n += i.get_text({ id: "password2", subtype: "password", columnName: "6", label: a.translation["Confirm password"], placeholder: a.translation["Enter password"], required: !0 }), n += i.get_checkbox_group({ id: "terms", label: a.translation["I agree to all Terms"], description: "<a target='_blank' class='flix-html-a' href='" + FLIX_URLS.flix + a.lang + "/terms.html'>" + a.translation["view terms"] + "</a>", required: !0, value: 0, values: [{ label: a.translation.yes, value: "1" }] }), n += i.get_button({ subtype: "submit", columnName: "12", label: a.translation["sign up"], className: "flix-btn flix-btn-block flix-btn-success" }), n += "</form>", n += "</div>", n += '<div class="flix-panel-footer">', n += '<div class="flix-form-group flix-text-center">', n += '<span class="flix-pull-left">', n += '<a href="#" class="flix-btn flix-btn-default flix-btn-xs" data-flix-lost-pw="">' + a.translation["lost password"] + "?</a>", n += "</span>", n += '<span class="flix-pull-right">', n += a.translation["Already have an account?"] + "&nbsp;", n += '<a href="#" class="flix-btn flix-btn-primary flix-btn-xs" data-flix-sign-in="">' + a.translation["sign in"] + "</a>", n += "</span>", n += '<div class="flix-clearfix"></div>', n += "</div>", n += "</div>", n += "</div>", n += "</div>", $(l).html(n), a.get_submit();var t = new flix_login($(l));t.lang = a.lang, t.translation = a.translation, t.callback = function (l) {
      a.callback(l);
    }, t.get_change_btn(), i.get_functions($(l));
  }, this.get_submit = function () {
    var i = new flix_html_form($(l));i.get_handle_form(function (n) {
      if (n.password != n.password2) return i.get_animation_false(), i.get_mark_form(["password", "password2"], ["password", "password2"]), !1;delete n.password2, delete n.terms, $.post(FLIX_URLS.api + a.lang + "/user/register", n).success(function (n) {
        if (!n[0]) return i.get_animation_false(), i.get_mark_form(["username"], ["username"]), !1;var t = "";t += '<div class="flix-col-md-12">', t += '<div class="flix-alert flix-alert-info"><span>' + n[2] + "</span></div>", t += "</div>", $(l).find(".flix-panel-body").html(t), "function" == typeof a.callback && a.callback(n[1]);
      });
    });
  };
};
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
},
    flix_booking_calendar = function flix_booking_calendar(e, t) {
  var i = this,
      n = new flix_form_elements();new flix_html_form($(e));this.build = function () {
    var l = "";l += '<div class="flix-row flix-html-html">', l += '<div class="flix-demo-calendar flix-col-md-12 flix-form-group"></div>', l += '<div class="flix-demo-booking flix-col-md-12 flix-hide flix-form-group">', l += '<div class="flix-panel flix-panel-default">', l += '<div class="flix-panel-heading flix-date">', l += "</div>", l += '<div class="flix-panel-heading">', l += '<a href="#" class="flix-btn-back flix-html-a flix-hide"><i class="flix-glyphicon flix-glyphicon-arrow-left"></i> Zurück zur Terminauswahl</a>', l += "</div>", l += '<div class="flix-panel-body">', l += "<form>", "object" == _typeof(t.saved_form.form) && 0 != t.saved_form.form.length || (t.saved_form.form = t.form), $.each(t.saved_form.form, function (e, t) {
      l += n.get_form_element(t);
    }), l += n.get_form_element({ type: "button", subtype: "submit", label: "Absenden", columnName: "12", className: "flix-btn flix-btn-primary flix-btn-block" }), l += "</form>", l += "</div>", l += "</div>", l += "</div>", l += "</div>", $(e).html(l), n.get_functions($(e).find(".flix-demo-booking")), i.get_calendar($(e).find(".flix-demo-calendar"), "Terminwunsch speichern");
  }, this.get_booking_form = function (t, n) {
    i.time = t;var l = "";"datepicker" == n.type && (l = t.data.begin.split.d + "." + t.data.begin.split.m + "." + t.data.begin.split.Y + ": "), $(e).find(".flix-demo-booking .flix-date").html("<i class='flix-glyphicon flix-glyphicon-calendar'></i> " + l + new flix_datepicker($(e), {}).get_event_period(t.data.begin.split, t.data.end.split)), $(e).find(".flix-demo-calendar").slideUp(500, function () {
      $(this).addClass("flix-hide"), $(e).find(".flix-demo-booking, .flix-btn-back").removeClass("flix-hide").hide().slideDown(500), i.get_btn_back();
    });
  }, this.get_btn_back = function () {
    $(e).find(".flix-btn-back").unbind("click"), $(e).find(".flix-btn-back").click(function () {
      return $(e).find(".flix-btn-back, .flix-demo-booking").slideUp(500, function () {
        $(this).addClass("flix-hide"), $(e).find(".flix-demo-calendar").removeClass("flix-hide").hide().slideDown(500);
      }), !1;
    });
  }, this.get_calendar = function (e, n) {
    var l = $.parseJSON(JSON.stringify(t.saved_form));l.settings = { default_label: n }, l.pop = !1, l.get_click_me = function (t, n) {
      var l = new flix_datepicker(e, n).get_event_by_id(t);i.get_booking_form(l, n);
    }, i.calendar = new flix_datepicker(e, l), i.calendar.build();
  }, this.get_current_date = function () {
    return i.calendar.get_current_date();
  };
},
    flix_menubar = function flix_menubar(e, t) {
  void 0 === t.saved_form && (t.saved_form = {}), t.menubar.functions = {};var i = this;return this.build = function () {
    $(e).html(t.menubar.functions.get_menubar()), t.menubar.step = 0, t.menubar.functions.get_click_menu(t), t.menubar.steps[t.menubar.step].onClick(), t.menubar.functions.get_highlight_menu(t.menubar.step), t.menubar.animation();
  }, t.menubar.animation = function () {
    $(e).find(".flix-steps").hide().slideDown(300);
  }, t.menubar.functions.get_click_menu = function (t) {
    $(e).find(".wizard-nav-menu .flix-nav li a").unbind("click"), $(e).find(".wizard-nav-menu .flix-nav li a").click(function () {
      var e = $(this);return "function" == typeof t.menubar.steps[t.menubar.step].onClickBefore ? t.menubar.steps[t.menubar.step].onClickBefore(function (i) {
        if (!i) return !1;t.menubar.functions.get_change_menu(e);
      }) : t.menubar.functions.get_change_menu(e), !1;
    });
  }, t.menubar.functions.get_change_menu = function (e) {
    i.change_menu(e);
  }, t.menubar.functions.get_highlight_menu = function (t) {
    $(e).find(".wizard-nav-menu .flix-nav li a").closest("li").removeClass("flix-active"), $(e).find(".wizard-nav-menu .flix-nav li a").eq(t).closest("li").addClass("flix-active");
  }, t.menubar.functions.get_menubar = function () {
    var e = "";return e += '<div class="flix-row">', e += '<div class="flix-col-md-12 wizard-nav-menu">', e += '<ul class="flix-nav flix-nav-tabs flix-clearfix flix-html-ul">', $.each(t.menubar.steps, function (t, i) {
      e += '<li role="presentation" class="flix-html-li"><a class="flix-html-a" href="#"><span class="flix-circle">' + (t + 1) + "</span> " + i.title + "</a></li>";
    }), e += "</ul>", e += "</div>", e += "</div>", e += '<div class="flix-stage flix-steps" style="margin-top: 20px;">', e += "</div>";
  }, this.change_menu = function (i) {
    $(e).find(".wizard-nav-menu .flix-nav li a").closest("li").removeClass("flix-active"), i.closest("li").addClass("flix-active"), t.menubar.step = $(e).find(".wizard-nav-menu .flix-nav li a").index(i), t.menubar.steps[t.menubar.step].onClick(), t.menubar.animation();
  }, this;
},
    flix_automailer = function flix_automailer(e, t) {
  new flix_form_elements();var i = { menubar: {}, saved_form: {} };if (i.btn = { save: t.language.save, continue: t.language.continue, current: t.language.save, back: t.language.back }, i.get_next_step = function (e, t) {
    t.saved_form = Object.assign(t.saved_form, e), t.menubar.step++, t.menubar.functions.get_highlight_menu(t.menubar.step), t.menubar.steps[t.menubar.step].onClick(), t.menubar.animation();
  }, i.menubar.steps = [{ title: t.language.reminder, onClick: function onClick() {
      new flix_automailer_1($(e), i).build();
    }, onClickBefore: function onClickBefore(e) {
      return e(!0);
    } }, { title: t.language["follow up"], onClick: function onClick() {
      new flix_automailer_2($(e), i).build(), i.menubar.functions.get_click_menu(i);
    }, onClickBefore: function onClickBefore(e) {
      return e(!0);
    } }, { title: t.language["other messages"], onClick: function onClick() {
      new flix_automailer_3($(e), i).build(), i.menubar.functions.get_click_menu(i);
    }, onClickBefore: function onClickBefore(e) {
      return e(!0);
    } }], "string" == typeof t.view && "small" == t.view) {
    var n = i.menubar.steps[0];i.menubar.steps = [n];
  }return t = Object.assign(i, t), this.build = function () {
    $(e).html('<div class="flix-row flix-steps"></div>'), new flix_menubar($(e), i).build();
  }, this;
},
    flix_automailer_check_credits = function flix_automailer_check_credits(e, t) {
  var i = this,
      n = (new flix_form_elements(), new flix_termin_flix(e, flix_setup_code)),
      l = n.post_url;l += "?l=" + $(e).attr("data-flix-language"), n.set_post_url(l), this.build = function (e) {
    if (void 0 === e.preset.tel || 0 == e.preset.tel.length) return i.get_callback(e);i.get_check_inovoice(e);
  }, this.get_check_inovoice = function (t) {
    $.post(FLIX_URLS.api + $(e).attr("data-flix-language") + "/inovoice/get_inovoice", { user: localStorage.getItem("flix_login") }).success(function (e) {
      e[0] && e.result && e.result.inovoices.length > 0 ? i.get_check_credits(t) : i.get_new_section(t);
    });
  }, this.get_check_credits = function (t) {
    $.post(FLIX_URLS.api + $(e).attr("data-flix-language") + "/dashboard/credits", { user: localStorage.getItem("flix_login") }).success(function (e) {
      if (e[1].available < 50) return i.get_new_section(t);i.get_callback(t);
    });
  }, this.get_callback = function (e) {
    e.callback();
  }, this.get_new_section = function (i) {
    swal.fire({ type: "warning", title: "Für SMS-Terminerinnerungen werden Credits benötigt", showCloseButton: !0, showCancelButton: !0, cancelButtonText: "zurück", confirmButtonText: "weiter" }).then(function (l) {
      if (void 0 === l.value) return !1;var a = { html: "<div class='flix-credit-container' data-flix-language='" + $(e).attr("data-flix-language") + "'></div>", title: "Für SMS-Terminerinnerungen werden Credits benötigt", onReady: function onReady(e) {
          t.onSuccess = function () {
            i.callback(), e.container.find(".flix-credit-container").closest(".flix-window").remove();
          }, new flix_payment(e.container.find(".flix-credit-container"), flix_setup_code, new flix_termin_flix(e.container.find(".flix-credit-container"), flix_setup_code), t).build();
        } };n.get_new_section($(e), a);
    });
  };
},
    flix_automailer_presets = function flix_automailer_presets(e, t) {
  var i = this,
      n = new flix_form_elements();this.build = function () {
    t.presets = { SELTEN: { email: [["3", "days"]] }, MODERAT: { email: [["7", "days"], ["2", "days"]], tel: [["1", "day"]] }, "HÄUFIG": { email: [["14", "days"], ["7", "days"], ["2", "days"]], tel: [["4", "days"], ["1", "day"]] } }, t.figures = { SELTEN: { img: FLIX_URLS.flix + "assets/img/flix_fant.gif", txt: "Für Kunden mit Elefanten-Langzeitgedächtnis" }, MODERAT: { img: FLIX_URLS.flix + "assets/img/flix_hoernchen.gif", txt: "Für vergessliche Kunden und hohle Nüsse" }, "HÄUFIG": { img: FLIX_URLS.flix + "assets/img/flix_mingo.gif", txt: "Für Kunden mit Flamingo-Kurzzeitgedächtnis" } }, i.get_select();
  }, this.get_select = function () {
    var t = new flix_overhead(!1, !1);t.get_saved_data(function () {
      $(e).html(i.get_html()), $(e).find(".flix-select").html(n.get_select({ id: "select", columnName: "", values: t.saved_assistents })), t.saved_assistents.length > 1 && ($(e).find(".flix-select").find("select").prepend("<option value=''>-- Terminformular --</option>"), $(e).find(".flix-select").find("select").val("")), $(e).find(".flix-select").find("select").change(function () {
        $(e).find(".flix-select").find("select").val($(this).val()), i.get_show_btn();
      }), i.get_show_btn(), i.get_quick_edit();
    });
  }, this.get_quick_edit = function () {
    $(e).find(".flix-btn-edit-automailer").unbind("click"), $(e).find(".flix-btn-edit-automailer").click(function () {
      return i.get_open_all(!1, !1), !1;
    });
  }, this.get_show_btn = function () {
    var n = $(e).find(".flix-btn-choice"),
        l = $(e).find(".flix-select").find("select").eq(0).val();n.removeClass("flix-disabled"), l || n.addClass("flix-disabled"), n.unbind("click"), n.click(function () {
      var n = $(this),
          a = $(e).find(".flix-btn-choice").index($(this)),
          o = Object.keys(t.presets)[a],
          s = t.presets[o],
          r = { id: l, preset: s, name: o, callback: function callback() {
          i.get_old_reminders(r, n);
        } };return new flix_automailer_check_credits(e, t).build(r), !1;
    }), $(e).find(".flix-btn.flix-disabled").unbind("click"), $(e).find(".flix-btn.flix-disabled").click(function () {
      return !1;
    });
  }, this.get_old_reminders = function (n, l) {
    $.post(FLIX_URLS.api + $(e).attr("data-flix-language") + "/reminder/get", { user: localStorage.getItem("flix_login"), ID: n.id }).success(function (a) {
      t.saved_data = a;var o = new flix_automailer_1(e, t).get_saved_data();if (0 == o || 0 == o[0].length) return i.get_save_new_automailer(n, l);swal.fire({ type: "warning", title: "Es gibt bereits " + o[0].length + " " + i.get_wording(o[0].length) + ".", html: '<a href="#" class="flix-btn flix-btn-default flix-btn-edit">bearbeiten</a>&nbsp;&nbsp;<a href="#" class="flix-btn flix-btn-success flix-btn-overwrite">überschreiben</a>', showCloseButton: !0, showConfirmButton: !1 }), $(".swal2-content").find(".flix-btn-edit,.flix-btn-overwrite").unbind("click"), $(".swal2-content").find(".flix-btn-overwrite").click(function () {
        return i.get_save_new_automailer(n, l), swal.close(), !1;
      }), $(".swal2-content").find(".flix-btn-edit").click(function () {
        return i.get_open_details(n, l), swal.close(), !1;
      });
    });
  }, this.get_save_new_automailer = function (n, l) {
    var a,
        o = {};o.data = [], o.user = localStorage.getItem("flix_login"), o.ID = n.id;var s = $.parseJSON(JSON.stringify(n.preset));$.each(s, function (e, i) {
      $.each(i, function (i, n) {
        $.now(), a = [t.language.reminder, t.language.mailtext], 1 == n[0] && (n[1] = n[1] + "s"), o.data.push({ format: e, to: o.ID, title: a[0], msg: a[1], survey: "", manual: "", trigger_int: n[0], trigger_format: n[1], trigger_prepend: "before", trigger_target: "appointment begin", trigger_specific_date: "", status: "active" }), o.filter = { trigger_prepend: "before", trigger_target: "appointment begin" };
      });
    }), $.post(FLIX_URLS.api + $(e).attr("data-flix-language") + "/reminder/save", o).success(function (t) {
      $.post(FLIX_URLS.api + $(e).attr("data-flix-language") + "/reminder/set", o).success(function (e) {
        swal.fire({ type: "success", title: t[1], html: e[1], showConfirmButton: !1, timer: 2e3 }), i.get_open_details(n, l);
      });
    });
  }, this.get_open_details = function (i, n) {
    var l = { html: "<div data-flix-language='" + $(e).attr("data-flix-language") + "'></div>", title: t.language["create new reminder"], onReady: function onReady(e) {
        var n = new flix_automailer_container(e.container.find("[data-flix-language]"), flix_setup_code, new flix_termin_flix(e.container.find("[data-flix-language]"), flix_setup_code), t),
            l = new flix_overhead(e.container.find("[data-flix-language]"), { onReady: function onReady(e) {
            n.get_mailer({ id: i.id, stage: e.stage });
          }, onChange: function onChange(e) {
            n.get_mailer({ id: i.id, stage: e.stage });
          } });l.get_saved_data(function () {
          $.each(l.saved_assistents, function (e, t) {
            if (t.value == i.id) {
              var n = [t];l.saved_assistents = n, l.get_header();
            }
          });
        });
      } },
        a = new flix_termin_flix(e, flix_setup_code),
        o = a.post_url;o += "?l=" + $(e).attr("data-flix-language"), a.set_post_url(o), a.get_new_section($(e), l);
  }, this.get_open_all = function (i, n) {
    var l = { html: "<div data-flix-language='" + $(e).attr("data-flix-language") + "'></div>", title: t.language["create new reminder"], onReady: function onReady(e) {
        var i = new flix_automailer_container(e.container.find("[data-flix-language]"), flix_setup_code, new flix_termin_flix(e.container.find("[data-flix-language]"), flix_setup_code), t),
            n = new flix_overhead(e.container.find("[data-flix-language]"), { onReady: function onReady(e) {
            i.build();
          }, onChange: function onChange(e) {
            i.build();
          } });n.get_saved_data(function () {
          n.get_header();
        });
      } },
        a = new flix_termin_flix(e, flix_setup_code),
        o = a.post_url;o += "?l=" + $(e).attr("data-flix-language"), a.set_post_url(o), a.get_new_section($(e), l);
  }, this.get_html = function () {
    var e = "";return e += '<div class="flix-col-md-flix-offset-1-and-half flix-col-md-10 flix-html-html flix-text-center">', e += "</div>", e += '<div class="flix-col-md-12 flix-html-html">', e += '<div class="flix-form-group flix-text-center">', e += '<h3 class="flix-text-center flix-html-h3">Voreinstellung für automatische Termin-Erinnerungen</h3>', e += "</div>", e += "</div>", e += '<div class="flix-col-md-flix-offset-1-and-half flix-col-md-9 flix-html-html">', e += '<div class="flix-col-md-6" style="padding: 0;">', e += '<div class="flix-form-group">', e += '<a href="#" class="flix-html-a flix-btn-edit-automailer flix-btn flix-btn-default flix-btn-block">Terminerinnerungen manuell einrichten</a>', e += "</div>", e += "</div>", e += '<div class="flix-col-md-6" style="padding: 0;">', e += '<div class="flix-form-group">', e += '<a href="#" class="flix-html-a flix-btn-edit-automailer flix-btn flix-btn-default flix-btn-block">Vorhandene Terminerinnerungen bearbeiten</a>', e += "</div>", e += "</div>", e += '<div class="flix-clearfix"></div>', e += "</div>", e += '<div class="flix-col-md-flix-offset-1-and-half flix-col-md-9 flix-html-html">', e += '<div class="flix-form-group flix-text-center">', e += '<div class="flix-alert flix-alert-info">Die nachfolgenden Voreinstellungen können später individuell bearbeitet werden.</div>', e += "</div>", e += "</div>", $.each(t.presets, function (n, l) {
      Object.keys(t.presets)[0] == n ? e += '<div class="flix-col-md-3 flix-col-md-flix-offset-1-and-half">' : e += '<div class="flix-col-md-3">', e += '<div  style="background-color: #eee; padding-top: 10px; border-bottom: 3px solid darkgrey;">', e += '<div class="flix-embed-responsive flix-embed-responsive-16by9">', e += '<div class="flix-embed-responsive-item" style=" padding:0; text-align: center;">', e += '<img style="height: 100%;" src="' + t.figures[n].img + '">', e += "</div>", e += "</div>", e += "</div>", e += "<div class='flix-text-center' style='background-color: lightgrey; padding: 10px;'><small class='flix-html-small'>" + t.figures[n].txt + "</small></div>", e += '<div class="flix-well">';var a = l.email.length;void 0 !== l.tel && l.tel.length > 0 && (a += l.tel.length);e += '<div class="flix-badge flix-form-group"><i class="flix-glyphicon flix-glyphicon-ok"></i> ' + a + " " + i.get_wording(a) + "</div>", e += '<hr class="flix-html-hr">', e += '<p class="flix-html-html pb_txt"><i class="flix-glyphicon flix-glyphicon-envelope"></i> <strong>' + l.email.length + " " + i.get_wording(l.email.length) + "<br>per E-Mail</strong><br>", e += '</p><ul class="flix-list-group">', $.each(l.email, function (i, n) {
        e += '<li class="flix-list-group-item"><i class="flix-glyphicon flix-glyphicon-bell"></i> ' + n[0] + " " + t.language[n[1]] + " vor Termin</li>";
      }), e += "</ul>", void 0 !== l.tel && l.tel.length > 0 && (e += '<hr class="flix-html-hr">', e += '<i class="flix-glyphicon flix-glyphicon-iphone"></i> <strong>' + l.tel.length + " " + i.get_wording(l.tel.length) + "<br>per SMS</strong><br>", e += '<ul class="flix-list-group">', $.each(l.tel, function (i, n) {
        e += '<li class="flix-list-group-item"><i class="flix-glyphicon flix-glyphicon-bell"></i> ' + n[0] + " " + t.language[n[1]] + " vor Termin</li>";
      }), e += "</ul><p></p>"), e += '<div class="flix-select"></div>', e += '<a href="#" class="flix-btn flix-btn-success flix-btn-block flix-btn-choice" target="">jetzt übernehmen</a>', void 0 !== l.tel && l.tel.length > 0 && (e += '<p class="flix-html-small flix-small"><i class="flix-glyphicon flix-glyphicon-warning-sign"></i> SMS-Freischaltung wird benötigt.</p>'), e += "</div>", e += "</div>";
    }), e += '<div class="flix-clearfix"></div>';
  }, this.get_wording = function (e) {
    return 1 == e ? "Termin-Erinnerung" : "Termin-Erinnerungen";
  };
},
    flix_automailer_1 = (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
}, function (e, t) {
  var i = this,
      n = new flix_form_elements(),
      l = new flix_html_form($(e)),
      a = $(e).find(".flix-steps");i.filter = ["before", "appointment begin"], this.build = function () {
    i.data = {}, a.html(i.get_html()), i.get_saved_mailer(), i.get_new_message(), i.get_delete_message(), i.get_preview_message(), l.get_handle_form(function (e) {
      t.onSave(t);
    });
  }, this.get_html = function (e) {
    var i = "";return i += "<form>", i += '<div class="flix-row">', i += '<div class="flix-counter">', i += "</div>", i += '<div class="flix-col-md-6">', i += '<div class="flix-saved-mailer">', i += "</div>", i += "</div>", i += '<div class="flix-col-md-6">', i += '<div class="flix-config-area">', i += n.get_toggleswitch({ id: "status", label: "", columnName: "", values: [{ label: t.language.active, value: "active" }, { label: t.language.inactive, value: "inactive" }] }), i += n.get_button({ label: '<i class="flix-glyphicon flix-glyphicon-eye-open"></i>', columnName: "", className: "flix-btn flix-btn-default flix-btn-preview" }), i += n.get_button({ label: '<i class="flix-glyphicon flix-glyphicon-bin"></i>', columnName: "", className: "flix-btn flix-btn-danger flix-btn-delete" }), i += "</div>", i += "</div>", i += '<div class="flix-col-md-12"><div class="flix-infobox flix-form-group"></div></div>', i += '<div class="flix-col-md-12">', i += '<div class="flix-dropdown" style="display:inline-block;">', i += '<a href="#" class="flix-btn flix-btn-default flix-dropdown-toggle" data-toggle="dropdown">', i += '<i class="flix-glyphicon flix-glyphicon-plus"></i> ', i += '<span class="flix-hidden-xs">' + t.language["new automailer"] + "</span>", i += "</a>", i += '<ul class="flix-dropdown-menu">', i += '<li class="flix-dropdown-header">' + t.language["create new reminder"] + "</li>", i += '<li class="flix-html-li"><a href="#" target="" class="flix-html-a flix-btn-new flix-btn-new-sms"><i class="flix-glyphicon flix-glyphicon-iphone"></i> ' + t.language["mobile reminder"] + "</a></li>", i += '<li class="flix-html-li"><a href="#" target="" class="flix-html-a flix-btn-new flix-btn-new-email"><i class="flix-glyphicon flix-glyphicon-envelope"></i> ' + t.language["email reminder"] + "</a></li>", i += "</ul>", i += "</div>&nbsp;", i += "</div>", i += "</div>", i += "</form>";
  }, this.get_preview_message = function () {
    a.find(".flix-config-area .flix-btn-preview").unbind("click"), a.find(".flix-config-area .flix-btn-preview").click(function () {
      var e = a.find("select#ID").val(),
          n = { trigger_int: i.data[e].trigger_int, trigger_prepend: i.data[e].trigger_prepend, trigger_format: i.data[e].trigger_format, container: "" },
          l = (i.get_preview_data(n), i.get_preview_text(n));return swal.fire({ title: t.language.preview, html: l, showConfirmButton: !1, showCloseButton: !0, showCancelButton: !0, cancelButtonText: t.btn.back }), !1;
    });
  }, this.get_delete_message = function () {
    a.find(".flix-config-area .flix-btn-delete").unbind("click"), a.find(".flix-config-area .flix-btn-delete").click(function () {
      return swal.fire({ type: "question", title: a.find("select#ID option:selected").text(), confirmButtonText: t.language.delete, cancelButtonText: t.btn.back, showCancelButton: !0 }).then(function (e) {
        if (void 0 === e.value) return !1;var n = a.find("select#ID").val();a.find("select#ID option:selected").remove(), delete i.data[n], $.each(t.saved_data, function (e, i) {
          if (i.ID == n) return delete t.saved_data[e], t.saved_data = Object.values(t.saved_data), !1;
        }), i.get_count_messages(), i.get_counter(), i.get_save(), 0 != Object.keys(i.data).length && i.get_config();
      }), !1;
    });
  }, this.get_count_messages = function () {
    a.find(".flix-config-area,.flix-saved-mailer").removeClass("flix-hide"), 0 == Object.keys(i.data).length && a.find(".flix-config-area,.flix-saved-mailer").addClass("flix-hide");
  }, this.get_new_message = function () {
    a.find(".flix-btn-new").unbind("click"), a.find(".flix-btn-new").click(function () {
      var n = $(this),
          l = "email";if (n.hasClass("flix-btn-new-sms") && (l = "tel"), "tel" == l) {
        var a = { preset: { tel: [["1", "day"]] }, callback: function callback() {
            i.get_popup_new_entry(l);
          } };$(e).attr("data-flix-language", $(e).closest("[data-flix-language]").attr("data-flix-language")), new flix_automailer_check_credits($(e), t).build(a);
      } else i.get_popup_new_entry(l);return !1;
    });
  }, this.get_popup_new_entry = function (e) {
    var l = "";l += n.get_select({ id: "format", label: "", columnName: "12", required: !0, values: [{ label: t.language[e], value: e }] }), l += n.get_select({ id: "trigger_int", label: "", columnName: "6", required: !0, values: i.get_trigger_int(), value: 2 }), l += n.get_select({ id: "trigger_format", label: "", columnName: "6", required: !0, values: i.get_trigger_format(), value: "days" }), l += n.get_select({ id: "1", readonly: !0, columnName: "12", values: [{ label: t.language[i.filter[0]] + " " + t.language[i.filter[1]], value: "" }] }), l += '<div class="flix-col-md-12 flix-html-code flix-preview">', l += "</div>", swal.fire({ title: $(this).text(), html: l, showCancelButton: !0, cancelButtonText: t.btn.back, confirmButtonText: t.btn.save }).then(function (e) {
      if (void 0 === e || void 0 === e.value) return !1;var n = $(".swal2-container"),
          l = $.now(),
          o = i.get_preview_data({ trigger_prepend: i.filter[0], trigger_int: $(".swal2-container").find("select#trigger_int").val(), trigger_format: $(".swal2-container").find("select#trigger_format").val(), container: $(".swal2-container").find(".flix-preview") }),
          s = { ID: l, format: n.find("select#format").val(), to: t.event_id, title: o[0], msg: o[1], survey: "", manual: "", trigger_int: n.find("select#trigger_int").val(), trigger_format: n.find("select#trigger_format").val(), trigger_prepend: i.filter[0], trigger_target: i.filter[1], trigger_specific_date: "", date: "2019-04-09 21:00:46", status: "active" };(l = i.get_check_existing_data(s)) == s.ID && (t.saved_data.push(s), i.get_saved_mailer(), i.get_count_messages()), i.get_save(), a.find(".flix-saved-mailer").find("#ID").val(l), a.find(".flix-saved-mailer").find("#ID").trigger("change");
    }), i.get_preview_text({ trigger_prepend: i.filter[0], trigger_int: 2, trigger_format: "days", container: $(".swal2-container").find(".flix-preview") }), $(".swal2-container").find("select").change(function () {
      i.get_preview_text({ trigger_prepend: i.filter[0], trigger_int: $(".swal2-container").find("select#trigger_int").val(), trigger_format: $(".swal2-container").find("select#trigger_format").val(), container: $(".swal2-container").find(".flix-preview") });
    });
  }, this.get_save = function () {
    $(e).find("form").trigger("submit");
  }, this.get_check_existing_data = function (e) {
    var t = e.ID;return $.each(i.data, function (i, n) {
      if (n.trigger_int == e.trigger_int && n.trigger_prepend == e.trigger_prepend && n.trigger_format == e.trigger_format && n.format == e.format) return t = i, !1;
    }), t;
  }, this.get_preview_text = function (e) {
    var t = i.get_preview_data(e),
        n = i.get_generate_fake_date(e),
        l = "<b>" + t[0] + ":</b><br />";return l += t[1].replace("%s", n.getDate() + "." + (n.getMonth() + 1) + "." + n.getFullYear() + ", " + n.getHours() + ":" + n.getMinutes() + " Uhr").replace("%s", "https://terminflix.de/XXXXX.go"), "object" == _typeof(e.container) && e.container.html(l), l;
  }, this.get_generate_fake_date = function (e) {
    new flix_datepicker(t, {});var i = new Date($.now());switch (e.trigger_int = 1 * e.trigger_int, "after" == e.trigger_prepend && (e.trigger_int *= -1), e.trigger_format) {case "years":case "year":
        i.setYear(i.getFullYear() + e.trigger_int);break;case "weeks":case "week":
        i.setDate(i.getDate() + 7 * e.trigger_int);break;case "days":case "day":
        i.setDate(i.getDate() + e.trigger_int);break;case "hours":case "hour":
        i.setHours(i.getHours() + e.trigger_int);}return "after" == e.trigger_prepend && (e.trigger_int *= -1), i;
  }, this.get_preview_data = function (e) {
    var i = t.language.mailtext,
        n = $.parseJSON(JSON.stringify(e));return n = n.trigger_format, 1 == e.trigger_int && (n = n.substring(0, n.length - 1)), [t.language.reminder, i.replace("%s", e.trigger_int + " " + t.language[n])];
  }, this.get_saved_mailer = function () {
    var e = i.get_saved_data();if (!e) return !1;a.find(".flix-saved-mailer").html(n.get_select({ id: "ID", label: "", columnName: "", required: !0, values: e[0], value: e[1] })), i.get_config(), a.find(".flix-saved-mailer").find("#ID").change(function () {
      i.get_config();
    });
  }, this.get_counter = function () {
    var e = { active: 0, inactive: 0 };$.each(i.data, function (t, i) {
      e[i.status] += 1;
    });var l = "";l += t.language.total, l += ": " + (e.active + e.inactive), l += " | ", l += t.language.active, l += ": " + e.active, l += " | ", l += t.language.inactive, l += ": " + e.inactive, a.find(".flix-counter").html(n.get_header({ type: "header", subtype: "h4", label: l, columnName: "12" }));
  }, this.get_config = function () {
    var e = a.find(".flix-saved-mailer").find("#ID").val(),
        t = i.data[e],
        n = a.find("[data-flix-toggleswitch='status']"),
        l = new flix_toggleswitch(n, { onReady: function onReady(t) {
        i.get_change_status(t, e);
      }, onChange: function onChange(t) {
        i.get_change_status(t, e, function () {
          i.get_save();
        });
      } });l.set_status(t.status), l.get_switch_function(n);
  }, this.get_change_status = function (e, n, l) {
    var o = i.data[n],
        s = a.find(".flix-saved-mailer").find("#ID option:selected"),
        r = s.text();s.text(r.replace(t.language[o.status], t.language[e])), i.data[n].status = e, $.each(t.saved_data, function (e, i) {
      if (i.ID == n) return t.saved_data[e] = i, !1;
    }), i.get_counter(), "function" == typeof l && l();
  }, this.get_saved_data = function () {
    var e = [];return i.data = {}, $.each(t.saved_data, function (n, l) {
      if (l.trigger_prepend == i.filter[0] && l.trigger_target == i.filter[1]) {
        var a = l.trigger_format;1 == l.trigger_int && (a = a.substring(0, a.length - 1)), e.push({ label: t.language[l.format] + ": " + l.trigger_int + " " + t.language[a] + " " + t.language[l.trigger_prepend] + " " + t.language[l.trigger_target] + " (" + t.language[l.status] + ")", value: l.ID, trigger: { int: l.trigger_int, format: l.trigger_format } }), i.data[l.ID] = l;
      }
    }), i.get_count_messages(), 0 != e.length && [i.get_order(e), []];
  }, this.get_order = function (e) {
    var t = { minutes: 1, hours: 60, days: 1440, weeks: 10080, years: 525600 },
        i = [];$.each(e, function (e, n) {
      i[e] = n.trigger.int * t[n.trigger.format] + e;
    });var n = Object.values(i).sort(function (e, t) {
      return 1 * e - 1 * t;
    }),
        l = [];return n.reverse(), $.each(n, function (t, n) {
      $.each(i, function (t, i) {
        if (n == i) return l.push(e[t]), !1;
      });
    }), l;
  }, this.get_trigger_int = function () {
    for (var e = [], t = 1; t <= 30; t++) {
      e.push({ label: t, value: t });
    }return e;
  }, this.get_trigger_format = function () {
    var e = { hours: t.language.hours, days: t.language.days },
        i = [];return $.each(e, function (e, t) {
      i.push({ label: t, value: e });
    }), i;
  };
}),
    flix_automailer_2 = function flix_automailer_2(e, t) {
  new flix_form_elements(), new flix_html_form($(e)), $(e).find(".flix-steps");var i = new flix_automailer_1(e, t);i.filter = ["after", "appointment end"], this.build = function () {
    i.build();
  }, i.get_preview_data = function (e) {
    var i = t.language["Your appointment was %s ago (%s). More information under %s"],
        n = $.parseJSON(JSON.stringify(e));return n = n.trigger_format, 1 == e.trigger_int && (n = n.substring(0, n.length - 1)), [t.language.information, i.replace("%s", e.trigger_int + " " + t.language[n])];
  };
},
    flix_automailer_3 = function flix_automailer_3(e, t) {
  var i = this,
      n = new flix_form_elements(),
      l = (new flix_html_form($(e)), $(e).find(".flix-steps")),
      a = new flix_automailer_1(e, t);i.filter = ["appointment end", "appointment begin"], this.build = function () {
    l.html(i.get_html());var e = i.get_saved_data();l.find(".flix-saved-mailer").html(n.get_select({ id: "ID", label: "", columnName: "", required: !0, values: e[0], value: e[1] })), a.data = i.data, a.get_preview_message();
  }, this.get_saved_data = function () {
    var e = [];return i.data = {}, $.each(t.saved_data, function (n, l) {
      if (-1 == i.filter.indexOf(l.trigger_target)) {
        var a = l.trigger_format;1 == l.trigger_int && (a = a.substring(0, a.length - 1)), e.push({ label: t.language[l.format] + ": " + l.trigger_int + " " + t.language[a] + " " + t.language[l.trigger_prepend] + " " + t.language[l.trigger_target] + " (" + t.language[l.status] + ")", value: l.ID, trigger: { int: l.trigger_int, format: l.trigger_format } }), i.data[l.ID] = l;
      }
    }), [a.get_order(e), []];
  }, a.get_preview_data = function (e) {
    var t = i.data[l.find("select#ID").val()],
        n = a.get_generate_fake_date(i.data);return [t.title, t.msg.replace("%s", n.getDate() + "." + (n.getMonth() + 1) + "." + n.getFullYear() + ", " + n.getHours() + ":" + n.getMinutes() + " Uhr").replace("%s", "https://terminflix.de/XXXXX.go")];
  }, this.get_html = function (e) {
    var t = "";return t += "<form>", t += '<div class="flix-row">', t += '<div class="flix-counter">', t += "</div>", t += '<div class="flix-col-md-6">', t += '<div class="flix-saved-mailer">', t += "</div>", t += "</div>", t += '<div class="flix-col-md-6">', t += '<div class="flix-config-area">', t += n.get_button({ label: '<i class="flix-glyphicon flix-glyphicon-eye-open"></i>', columnName: "", className: "flix-btn flix-btn-default flix-btn-preview" }), t += "</div>", t += "</div>", t += '<div class="flix-col-md-12"><div class="flix-infobox flix-form-group"></div></div>', t += "</div>", t += "</form>";
  };
},
    flix_datepicker = (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
}, function (e, t) {
  var i = this;void 0 !== t && "object" == (void 0 === t ? "undefined" : _typeof(t)) || (t = {}), this.build = function () {
    if (new flix_date_picker_events($(e), n).get_events(), n.pop) return new flix_date_picker_pop($(e), n).get_pop(), !1;i.get_start_view();
  }, this.get_start_view = function () {
    switch (n.view.toLowerCase().substr(0, 1)) {case "h":
        i.build_hour_view();break;case "d":
        i.build_day_view();break;case "m":
        i.build_month_view();break;case "y":
        i.build_year_view();break;case "l":
        i.build_list_view();}
  }, this.build_list_view = function () {
    n.view = "l", n.onChangeView = function () {
      i.get_day_view();
    }, n.clickEvent = function () {
      i.get_click_hour();
    }, new flix_datepicker_list($(e), n).build();
  }, this.build_hour_view = function () {
    n.view = "h", n.onChangeView = function () {
      i.get_day_view();
    }, n.clickEvent = function () {
      i.get_click_hour();
    }, new flix_datepicker_hours($(e), n).build();
  }, this.build_day_view = function () {
    n.view = "d", n.onChangeView = function () {
      i.get_month_view();
    }, n.clickEvent = function () {
      i.get_click_day();
    }, new flix_datepicker_days($(e), n).build();
  }, this.build_month_view = function () {
    n.view = "m", n.clickEvent = function () {
      i.get_click_month();
    }, n.onChangeView = function () {
      i.get_year_view();
    }, new flix_datepicker_months($(e), n).build();
  }, this.build_year_view = function () {
    n.view = "y", n.clickEvent = function () {
      i.get_click_year();
    }, new flix_datepicker_years($(e), n).build();
  }, this.get_click_day = function () {
    $(e).find("[data-flix-date]").unbind("click"), $(e).find("[data-flix-date]").click(function () {
      return void 0 !== n.fixed_view && 1 == n.fixed_view ? (void 0 !== n.pop_ID && $("#" + n.pop_ID).remove(), n.get_click_me($(this).attr("data-flix-date"), $(this)), !1) : (n.date = $(this).attr("data-flix-date"), i.build_hour_view(), !1);
    });
  }, this.get_click_year = function () {
    $(e).find("[data-flix-date]").unbind("click"), $(e).find("[data-flix-date]").click(function () {
      return void 0 !== n.fixed_view && 1 == n.fixed_view ? (void 0 !== n.pop_ID && $("#" + n.pop_ID).remove(), n.get_click_me($(this).attr("data-flix-date"), $(this)), !1) : (n.date = $(this).attr("data-flix-date"), i.build_month_view(), !1);
    });
  }, this.get_click_month = function () {
    $(e).find("[data-flix-date]").unbind("click"), $(e).find("[data-flix-date]").click(function () {
      return void 0 !== n.fixed_view && 1 == n.fixed_view ? (void 0 !== n.pop_ID && $("#" + n.pop_ID).remove(), n.get_click_me($(this).attr("data-flix-date"), $(this)), !1) : (n.date = $(this).attr("data-flix-date"), i.build_day_view(), !1);
    });
  }, this.get_year_view = function () {
    $(e).find("[flix-quickchange-year]").unbind("click"), $(e).find("[flix-quickchange-year]").click(function () {
      return n.date = $(this).attr("flix-quickchange-year"), i.build_year_view(), !1;
    });
  }, this.get_month_view = function () {
    $(e).find("[flix-quickchange-month]").unbind("click"), $(e).find("[flix-quickchange-month]").click(function () {
      return n.date = $(this).attr("flix-quickchange-month"), i.build_month_view(), !1;
    });
  }, this.get_day_view = function () {
    $(e).find("[flix-quickchange-day]").unbind("click"), $(e).find("[flix-quickchange-day]").click(function () {
      return n.date = $(this).attr("flix-quickchange-day"), i.build_day_view(), !1;
    });
  }, this.get_generate_date = function (e) {
    e = e.split("-"), $.each(e, function (t, i) {
      e[t] = 1 * i;
    }), 2 == e.length && e.push(1), 1 == e.length && (e.push(1), e.push(1));var t = new Date(e[0], e[1] - 1, e[2]),
        n = { Y: t.getFullYear(), m: t.getMonth() + 1, d: t.getDate(), dayOfWeek: new Date(e[0], e[1] - 1, e[2]).getDay(), daysOfMonth: new Date(e[0], e[1] - 1, 0).getDate() };return 0 == n.dayOfWeek ? n.dayOfWeek = 6 : n.dayOfWeek = n.dayOfWeek - 1, 0 == n.m && (n.m = 12, n.Y = n.Y - 1), n.firstDayOfMonthDayOfWeek = i.get_day_of_week([n.Y, n.m, n.d]), { date_object: t, object: n };
  }, this.get_days_in_month = function (e) {
    return new Date(e.getFullYear(), e.getMonth() - 1, 0).getDate();
  }, this.get_day_of_week = function (e) {
    var t = new Date(e[0], e[1] - 1, 1).getDay();return 0 == t ? 7 : t;
  }, this.get_nulls_before = function (e) {
    return "number" != typeof e ? e : ((e *= 1) < 10 && (e = "0" + e), e);
  }, this.get_clean_date = function (e) {
    return e.m += 1, e.m > 12 && (e.Y += 1, e.m = 1), e.m = n.functions.get_nulls_before(e.m), e.d = n.functions.get_nulls_before(e.d), e;
  }, this.get_date_object = function (e, t) {
    void 0 === t && (t = !0);var i = {};return i.dateobject = new Date(e), i.timestamp = i.dateobject.getTime(), i.split = n.functions.get_clean_date({ Y: i.dateobject.getFullYear(), m: i.dateobject.getMonth(), d: i.dateobject.getDate(), H: i.dateobject.getHours(), i: i.dateobject.getMinutes() }), t && delete i.dateobject, i;
  }, this.get_show_event = function (e) {
    var t = "",
        l = "";return "string" == typeof e.style && (l = e.style), t += '<div class="flix-list-group">', t += '<a data-flix-date="' + e.value.ID + '" href="#" class="flix-list-group-item flix-html-html flix-html-a" style="' + l + '">', t += '<div style="font-size: 0.75em; border-bottom: 0.5px solid ' + n.settings.style.disabled_color + '; margin-bottom: 10px;">', t += i.get_event_period(e.data.begin.split, e.data.end.split), t += "</div>", t += "<b>", t += e.value.label, t += "</b>", t += "</a>", t += "</div>";
  }, this.get_event_period = function (e, t) {
    var i = [" ", " "];return 1 * ("" + e.H + e.i) != 0 && 1 * ("" + t.H + t.i) != 0 && (i = [", " + n.functions.get_nulls_before(e.H) + ":" + n.functions.get_nulls_before(e.i) + " " + n.settings.clock, ", " + n.functions.get_nulls_before(t.H) + ":" + n.functions.get_nulls_before(t.i) + " " + n.settings.clock]), e.Y != t.Y ? n.functions.get_nulls_before(e.d) + "." + n.functions.get_nulls_before(e.m) + "." + e.Y + i[0] + " - " + n.functions.get_nulls_before(t.d) + "." + n.functions.get_nulls_before(t.m) + "." + t.Y + i[1] : e.m != t.m || e.d != t.d ? n.functions.get_nulls_before(e.d) + "." + n.functions.get_nulls_before(e.m) + "." + i[0] + " - " + n.functions.get_nulls_before(t.d) + "." + n.functions.get_nulls_before(t.m) + "." + i[1] : 1 * ("" + e.H + e.i) == 0 && 1 * ("" + t.H + t.i) == 2359 ? n.settings.all_day : e.H + e.i != t.H + t.i ? n.functions.get_nulls_before(e.H) + ":" + n.functions.get_nulls_before(e.i) + " - " + n.functions.get_nulls_before(t.H) + ":" + n.functions.get_nulls_before(t.i) : n.functions.get_nulls_before(e.H) + ":" + n.functions.get_nulls_before(e.i);
  }, this.get_event_by_id = function (e) {
    var t = {};return $.each(n.events, function (i, n) {
      if (n.value.ID + "" == e + "") return t = n, !1;
    }), t;
  }, this.get_datestring_to_number = function (e) {
    return -1 != e.indexOf(" ") && (e = e.replace(new RegExp(" ", "g"), "")), -1 != e.indexOf(":") && (e = e.replace(new RegExp(":", "g"), "")), -1 != e.indexOf("-") && (e = e.replace(new RegExp("-", "g"), "")), e;
  }, this.get_current_date = function () {
    return n;
  }, this.get_atts = function () {
    return n;
  };var n = { get_click_me: function get_click_me(e) {
      i.get_event_by_id(e);
    } };n.functions = { get_generate_date: function get_generate_date(e) {
      return i.get_generate_date(e);
    }, get_datestring_to_number: function get_datestring_to_number(e) {
      return i.get_datestring_to_number(e);
    }, get_nulls_before: function get_nulls_before(e) {
      return i.get_nulls_before(e);
    }, get_clean_date: function get_clean_date(e) {
      return i.get_clean_date(e);
    }, get_date_object: function get_date_object(e) {
      return i.get_date_object(e);
    }, get_date_status: function get_date_status(t) {
      return new flix_date_picker_events($(e), n).get_date_status(t);
    }, get_show_event: function get_show_event(e) {
      return i.get_show_event(e);
    }, get_check_availibility: function get_check_availibility(e) {
      return !0;
    }, get_animation_events: function get_animation_events(e) {
      $(e).find("[data-flix-date],[flix-change-year],[flix-quickchange-year],[flix-change-month],[flix-quickchange-month],[flix-change-day],[flix-quickchange-day]").mouseenter(function () {
        if ($(this).css({ "z-index": 100, transform: "scale(1.2)", transition: "all 0.1s ease-in-out" }), !$(this).find("hr").length) return !1;$(this).css({ "background-color": $(this).find("hr").css("border-top-color"), color: "#fff" });
      }).mouseleave(function () {
        if ($(this).css({ "z-index": "auto", transform: "none" }), !$(this).find("hr").length) return !1;$(this).css({ "background-color": "inherit", color: "inherit" });
      });
    } }, n.color = "orangered", n.type = "datepicker", void 0 !== t.date && 0 != t.date && "" != t.date && "list" != n.view && "l" != n.view || (n.date = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate(), delete t.date), n.view = "d", n.pop = !1, n.fixed_view = !1, n.events = {}, n.booking_range = !0, n.start = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate() + " " + new Date().getHours() + ":" + new Date().getMinutes(), n.settings = { month_list: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"], month_list_short: ["Jan.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sept.", "Okt.", "Nov.", "Dez."], weekdays_list_short: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"], weekdays_list: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"], all_day: "ganztags", clock: "Uhr", no_entries: "keine Einträge", open_calendar: "Kalender öffnen", default_label: "Speichern", style: { navbar: "margin-bottom: 12px; padding: 10px; display: -webkit-flex; display: -ms-flexbox;  display: flex; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between;", navbar_highlight: "border-bottom: 2px solid " + n.color + ";", column: "border: 0; cursor: pointer; font-weight: bold;", disabled_color: "lightgrey", primary_color: n.color, success_color: "#8bc34a", cell_element: '<br><hr style="border:0; border-top: 3px solid %s; margin:0;">', today: "color: #9575CD; background-color: rgba(0,0,0,0.07) !important;" } }, "object" == _typeof(t.functions) && (t.functions = Object.assign(n.functions, t.functions)), "object" == _typeof(t.settings) && "object" == _typeof(t.settings.style) && (t.settings.style = Object.assign(n.settings.style, t.settings.style)), "object" == _typeof(t.settings) && (t.settings = Object.assign(n.settings, t.settings)), void 0 !== t.start && "" == t.start && delete t.start, void 0 !== t.end && "" == t.end && delete t.end, n = Object.assign(n, t);
}),
    flix_datepicker_days = function flix_datepicker_days(e, t) {
  var i = this;void 0 === t && (t = {}), this.build = function () {
    var n = t.functions.get_generate_date(t.date);t.date = n.date_object, $(e).html(i.get_construct_calendar(n.object)), i.get_change_month(), t.onChangeView(), t.clickEvent(), t.functions.get_animation_events(e);
  }, this.get_construct_calendar = function (e) {
    var t = "";return t += i.get_calendar_navbar(e), t += i.get_week_top_bar(e), t += i.get_first_row(e), t += i.get_default_row(e), t += i.get_last_row(e);
  }, this.get_change_month = function () {
    $(e).find("[flix-change-month]").unbind("click"), $(e).find("[flix-change-month]").click(function () {
      return delete t.date, t.date = $(this).attr("flix-change-month"), i.build(), !1;
    });
  }, this.get_calendar_navbar = function (e) {
    var i = t.settings.month_list,
        n = e.m,
        l = n + 1,
        a = n - 1,
        o = e.Y,
        s = o,
        r = o;l > 12 && (l = 1, s += 1), a < 1 && (a = 12, r -= 1), a = t.functions.get_nulls_before(a), l = t.functions.get_nulls_before(l);var c = t.functions.get_nulls_before(n),
        f = "";return f += '<div class="flix-html-html" style="' + t.settings.style.navbar_highlight + t.settings.style.navbar + '">', void 0 === t.fixed_view || !0 !== t.fixed_view ? (f += '<a href="#" flix-change-month="' + r + "-" + a + '-01" class="flix-btn flix-btn-xs flix-btn-default"><i class="flix-glyphicon flix-glyphicon-arrow-left"></i></a>', f += '<a href="#" flix-quickchange-month="' + o + "-" + c + '" class="flix-btn flix-btn-xs flix-btn-default" style="border:transparent; background-color:inherit;">' + i[n - 1] + " " + e.Y + "</a>", f += '<a href="#" flix-change-month="' + s + "-" + l + '-01" class="flix-btn flix-btn-xs flix-btn-default"><i class="flix-glyphicon flix-glyphicon-arrow-right"></i></a>') : f += '<div class="flix-html-h4" style="border:transparent; text-align: center; width: 100%;">' + i[n - 1] + " " + e.Y + "</div>", f += "</div>";
  }, this.get_default_row = function (e) {
    for (var t = new Date(e.Y, e.m, 0).getDate(), n = "", l = 1; l <= t; l++) {
      n += i.get_table_cell({ value: l, month: 0 });
    }return n;
  }, this.get_last_row = function (e) {
    var n = new Date(e.Y, e.m, 0).getDate(),
        l = new Date(e.Y, e.m - 1, n);if (e.lastDayOfMonthDayOfWeek = l.getDay(), 7 == e.lastDayOfMonthDayOfWeek || 0 == e.lastDayOfMonthDayOfWeek) return "";for (var a = "", o = e.lastDayOfMonthDayOfWeek + 1, s = 1; o <= 7; o++) {
      var r = new Date(e.Y, e.m, s);a += i.get_table_cell({ value: r.getDate(), month: 1, color: t.settings.style.disabled_color }), s++;
    }return a;
  }, this.get_first_row = function (e) {
    if (1 == e.firstDayOfMonthDayOfWeek) return "";for (var n = "", l = -1 * e.firstDayOfMonthDayOfWeek + 1; l < 0; l++) {
      var a = new Date(e.Y, e.m - 1, l + 1);n += i.get_table_cell({ value: a.getDate(), month: -1, color: t.settings.style.disabled_color });
    }return n;
  }, this.get_table_cell = function (e) {
    var i = { value: 0, month: !1, color: "inherit", link: !0, btn: "flix-btn-default" };(i = Object.assign(i, e)).value = t.functions.get_nulls_before(i.value);var n = { date: new Date(t.date.getFullYear(), t.date.getMonth() + 1 + i.month, 1) };n.Y = n.date.getFullYear(), n.m = n.date.getMonth(), n.d = i.value, 0 == n.m && (n.Y -= 1, n.m = 12), n.m = t.functions.get_nulls_before(n.m), i.month = 'data-flix-date="' + n.Y + "-" + n.m + "-" + n.d + '"', i.time = new Date(1 * n.Y, 1 * n.m - 1, 1 * n.d);var l = ["", ""];return i.time.getTime() == new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0).getTime() && (l = [t.settings.style.today, "flix-btn-today"]), i.link && (i.value = '<div class="flix-btn ' + i.btn + " " + l[1] + ' flix-btn-block" style="background-color:inherit; ' + t.settings.style.column + " color: " + i.color + "; " + l[0] + '" ' + i.month + ">" + i.value + t.functions.get_date_status(n.Y + "-" + n.m + "-" + n.d) + "</div>"), '<div class="flix-html-html" style="width:' + 1 / 7 * 100 + "%; float:left; text-align: center; color: " + i.color + '; font-weight: bold;">' + i.value + "</div>";
  }, this.get_week_top_bar = function (e) {
    var n = t.settings.weekdays_list_short,
        l = "";return $.each(n, function (e, n) {
      l += i.get_table_cell({ value: n, color: t.settings.style.primary_color, link: !1 });
    }), l;
  };
},
    flix_date_picker_events = (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
}, function (e, t) {
  var i = this;return this.get_events = function () {
    if (void 0 === t.events) return !1;var e = [];return $.each(t.events, function (i, n) {
      e[i] = n, e[i].data = {}, e[i].data.begin = t.functions.get_date_object(n.begin), e[i].data.end = t.functions.get_date_object(n.end);
    }), e;
  }, this.get_events_by_date = function (e) {
    var i,
        n = "" + e.Y + t.functions.get_nulls_before(e.m) + t.functions.get_nulls_before(e.d),
        l = [],
        a = {},
        o = [];return $.each(t.events, function (e, t) {
      1 * n >= "" + t.data.begin.split.Y + t.data.begin.split.m + t.data.begin.split.d && 1 * n <= "" + t.data.end.split.Y + t.data.end.split.m + t.data.end.split.d && l.push(t);
    }), $.each(l, function (e, t) {
      i = "" + t.data.begin.timestamp + t.data.end.timestamp, void 0 === a[i] && (a[i] = []), a[i].push(t);
    }), Object.keys(a).sort().forEach(function (e, t) {
      a[e].forEach(function (e, t) {
        o.push(e);
      });
    }), o;
  }, this.get_date_status = function (e) {
    return "datepicker" == t.type ? i.get_date_status_datepicker(e) : i.get_date_status_eventpicker(e);
  }, this.get_date_status_datepicker = function (n) {
    var l,
        a,
        o,
        s,
        r = t.settings.style.cell_element,
        c = t.settings.style.disabled_color;switch ("string" == typeof n && -1 != n.indexOf("-") ? l = n.split("-") : "number" == typeof n && (l = [n]), l.length) {case 3:
        a = t.functions.get_generate_date(n), new flix_date_picker_rules($(e), t).get_check_date(a.object) && (c = t.settings.style.success_color);break;case 2:
        if (o = t.functions.get_generate_date(n), 1 == i.get_month_entries(o, n)) {
          c = t.settings.style.success_color;break;
        }break;case 1:
        for (s = 1; s <= 12; s++) {
          if (o = t.functions.get_generate_date(n + "-" + t.functions.get_nulls_before(s) + "-01"), 1 == i.get_month_entries(o, n + "-" + t.functions.get_nulls_before(s))) {
            c = t.settings.style.success_color;break;
          }
        }}return r.replace("%s", c);
  }, this.get_month_entries = function (i, n) {
    for (var l = 1; l <= i.object.daysOfMonth; l++) {
      var a = t.functions.get_generate_date(n + "-" + t.functions.get_nulls_before(l));if (new flix_date_picker_rules($(e), t).get_check_date(a.object)) return !0;
    }return !1;
  }, this.get_date_status_eventpicker = function (e) {
    var i,
        n = t.settings.style.cell_element,
        l = t.settings.style.disabled_color;"string" == typeof e && -1 != e.indexOf("-") ? i = e.split("-") : "number" == typeof e && (i = [e]), "object" == (void 0 === i ? "undefined" : _typeof(i)) && void 0 !== i[1] && (i[1] = 1 * i[1] - 1);var a,
        o = t.functions.get_date_object(e);switch (i.length) {case 3:
        a = "" + o.split.Y + o.split.m + o.split.d, $.each(t.events, function (e, i) {
          if (1 * a >= "" + i.data.begin.split.Y + i.data.begin.split.m + i.data.begin.split.d && 1 * a <= "" + i.data.end.split.Y + i.data.end.split.m + i.data.end.split.d) return l = t.settings.style.success_color, !1;
        });break;case 2:
        a = "" + o.split.Y + o.split.m, $.each(t.events, function (e, i) {
          if (1 * a >= "" + i.data.begin.split.Y + i.data.begin.split.m && 1 * a <= "" + i.data.end.split.Y + i.data.end.split.m) return l = t.settings.style.success_color, !1;
        });break;case 1:
        a = "" + i[0], $.each(t.events, function (e, i) {
          if (1 * a >= "" + i.data.begin.split.Y && 1 * a <= "" + i.data.end.split.Y) return l = t.settings.style.success_color, !1;
        });}return n.replace("%s", l);
  }, this;
}),
    flix_datepicker_hours = (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
}, function (e, t) {
  var i = this;void 0 === t && (t = {}), this.build = function () {
    var n = t.functions.get_generate_date(t.date);t.date = n.date_object;var l = "";l += i.get_calendar_navbar(n.object), void 0 !== t.service && delete t.service;var a = !1;"datepicker" == t.type ? void 0 === t.include.weekdays[n.object.dayOfWeek] || $.isNumeric(t.include.weekdays[n.object.dayOfWeek][2]) ? l += new flix_date_picker_rules($(e), t).get_event_hours(n.object) : ((a = new flix_date_picker_services($(e), t)).build(n.object), l += '<div class="flix-services"></div>') : l += i.get_event_hours(n.object), $(e).html(l), "object" == (void 0 === a ? "undefined" : _typeof(a)) && (a.get_click_hour = function (e) {
      i.get_click_hour(e);
    }, a.set_html($(e).find(".flix-services"))), i.get_change_day(), i.get_click_hour(t), t.functions.get_animation_events($(e).find("[flix-change-day]").parent()), t.onChangeView();
  }, this.get_click_hour = function (t) {
    $(e).find("[data-flix-date]").unbind("click"), $(e).find("[data-flix-date]").click(function () {
      return void 0 !== t.pop_ID && $("#" + t.pop_ID).remove(), t.get_click_me($(this).attr("data-flix-date"), t), !1;
    });
  }, this.get_event_hours = function (e) {
    var i = new flix_date_picker_events($(this), t).get_events_by_date(e);if ("object" != (void 0 === i ? "undefined" : _typeof(i))) return '<div class="flix-alert flix-alert-info flix-html-html">' + t.settings.no_entries + "</div>";var n = "<div style='width: 100%;'>";void 0 !== t.pop_ID && (n = "<div style='width: 100%; overflow: auto; max-height: 80vh;'>");var l = 0;return $.each(i, function (e, i) {
      n += t.functions.get_show_event(i), l++;
    }), l || (n += '<div class="flix-alert flix-alert-info flix-html-html">' + t.settings.no_entries + "</div>"), n += "</div>";
  }, this.get_calendar_navbar = function (e) {
    e.Y;var i = e.Y + "-" + e.m + "-" + (e.d - 1),
        n = e.Y + "-" + e.m + "-" + (e.d + 1);n = t.functions.get_generate_date(n), i = t.functions.get_generate_date(i), n = n.object, i = i.object;var l = "";return l += '<div class="flix-html-html" style="' + t.settings.style.navbar_highlight + t.settings.style.navbar + '">', void 0 === t.fixed_view || !0 !== t.fixed_view ? (l += '<a href="#" flix-change-day="' + i.Y + "-" + i.m + "-" + i.d + '" class="flix-btn flix-btn-xs flix-btn-default"><i class="flix-glyphicon flix-glyphicon-arrow-left"></i></a>', l += '<a href="#" flix-quickchange-day="' + e.Y + "-" + e.m + "-" + e.d + '" class="flix-btn flix-btn-xs flix-btn-default" style="background-color:inherit; border:transparent;">' + t.settings.weekdays_list[e.dayOfWeek] + ", " + t.functions.get_nulls_before(e.d) + "." + t.functions.get_nulls_before(e.m) + "." + e.Y + "</a>", l += '<a href="#" flix-change-day="' + n.Y + "-" + n.m + "-" + n.d + '" class="flix-btn flix-btn-xs flix-btn-default"><i class="flix-glyphicon flix-glyphicon-arrow-right"></i></a>') : l += '<div class="flix-html-h4" style="border:transparent; text-align: center; width: 100%;">' + t.settings.weekdays_list[e.dayOfWeek] + ", " + t.functions.get_nulls_before(e.d) + "." + t.functions.get_nulls_before(e.m) + "." + e.Y + "</div>", l += "</div>";
  }, this.get_change_day = function () {
    $(e).find("[flix-change-day]").unbind("click"), $(e).find("[flix-change-day]").click(function () {
      return delete t.date, t.date = $(this).attr("flix-change-day"), i.build(), !1;
    });
  };
}),
    flix_datepicker_list = function flix_datepicker_list(e, t) {
  var i = this;void 0 === t && (t = {});var n = new flix_date_picker_rules($(e), t);this.build = function () {
    var n = t.functions.get_generate_date(t.date);t.date = n.date_object;var l = "";l += i.get_list(n.object), $(e).html(l), $.each(i.services, function (t, i) {
      i.set_html($(e).find(".flix-services[data-service='" + t + "']"));
    }), i.get_click_hour(t), t.onChangeView();
  }, this.get_click_hour = function (t) {
    $(e).find("[data-flix-date]").unbind("click"), $(e).find("[data-flix-date]").click(function () {
      return void 0 !== t.pop_ID && $("#" + t.pop_ID).remove(), t.get_click_me($(this).attr("data-flix-date"), t), !1;
    });
  }, this.get_list = function (l) {
    l.Y;var a,
        o = "";o += "<div>", i.services = {};for (var s = function s(e) {
      i.get_click_hour(e);
    }, r = 0; r < 1e3; r++) {
      if (a = t.functions.get_generate_date(l.Y + "-" + l.m + "-" + (1 * l.d + r)), 0 != n.get_calculate_events(a.object, "once")) {
        var c = n.get_calculate_events(a.object, "all");o += '<div class="flix-col-md-12">', o += "<h3 class='flix-html-h3'>", o += t.settings.weekdays_list[a.object.dayOfWeek] + ", " + t.functions.get_nulls_before(a.object.d) + "." + t.functions.get_nulls_before(a.object.m) + "." + a.object.Y, o += "</h3>", o += "</div>", "datepicker" == t.type ? void 0 === t.include.weekdays[a.object.dayOfWeek] || $.isNumeric(t.include.weekdays[a.object.dayOfWeek][2]) ? o += i.get_events(c) : (i.services[r] = new flix_date_picker_services($(e), t), i.services[r].build(a.object), i.services[r].get_click_hour = s, o += '<div class="flix-col-md-12"><div class="flix-services" data-service="' + r + '"></div></div>') : o += i.get_events(c);
      }
    }return o += "</div>";
  }, this.get_events = function (e) {
    var i = "";return $.each(e, function (e, n) {
      i += '<div class="flix-col-md-3 flix-col-xs-6">', i += t.functions.get_show_event(n), i += "</div>";
    }), i += '<div class="flix-clearfix"></div>';
  };
},
    flix_datepicker_months = function flix_datepicker_months(e, t) {
  var i = this;void 0 === t && (t = {}), this.build = function () {
    var n = t.functions.get_generate_date(t.date);t.date = n.date_object;var l = "";l += i.get_calendar_navbar(n.object), l += i.get_months(n.object), $(e).html(l), i.get_change_year(), t.clickEvent(), t.functions.get_animation_events(e), t.onChangeView();
  }, this.get_months = function (e) {
    var i,
        n = "",
        l = "";return $.each(t.settings.month_list_short, function (a, o) {
      i = t.functions.get_nulls_before(a + 1), l = '<div class="flix-btn flix-btn-default flix-btn-block" data-flix-date="' + e.Y + "-" + i + '" style="background-color:inherit; ' + t.settings.style.column + '">' + o + t.functions.get_date_status(e.Y + "-" + i) + "</div>", n += '<div class="flix-html-html" style="width:' + 1 / 3 * 100 + '%; float:left; text-align: center; font-weight: bold;">' + l + "</div>";
    }), n;
  }, this.get_calendar_navbar = function (e) {
    var i = e.Y,
        n = i - 1,
        l = i + 1,
        a = "";return a += '<div class="flix-html-html" style="' + t.settings.style.navbar_highlight + t.settings.style.navbar + '">', void 0 === t.fixed_view || !0 !== t.fixed_view ? (a += '<a href="#" flix-change-year="' + n + '" class="flix-btn flix-btn-xs flix-btn-default"><i class="flix-glyphicon flix-glyphicon-arrow-left"></i></a>', a += '<a href="#" flix-quickchange-year="' + i + '" class="flix-btn flix-btn-xs flix-btn-default" style="border:transparent; background-color:inherit;">' + e.Y + "</a>", a += '<a href="#" flix-change-year="' + l + '" class="flix-btn flix-btn-xs flix-btn-default"><i class="flix-glyphicon flix-glyphicon-arrow-right"></i></a>') : a += '<div class="flix-html-h4" style="border:transparent; text-align: center; width: 100%;">' + e.Y + "</div>", a += "</div>";
  }, this.get_change_year = function () {
    $(e).find("[flix-change-year]").unbind("click"), $(e).find("[flix-change-year]").click(function () {
      return delete t.date, t.date = $(this).attr("flix-change-year"), i.build(), !1;
    });
  };
},
    flix_date_picker_pop = function flix_date_picker_pop(e, t) {
  var i = this;this.get_pop = function () {
    "" == $(e).html() && $(e).html(t.settings.open_calendar), $(e).unbind("click"), $(e).click(function () {
      return $("body").append(i.get_container()), new flix_datepicker($("#" + i.ID + " .flix-get-picker"), t).get_start_view(), i.get_close_container(), !1;
    }).css("cursor", "pointer");
  }, this.get_close_container = function () {
    $("#" + i.ID).find("div").eq(0).find(".flix-btn-close").click(function () {
      return $("#" + i.ID).remove(), !1;
    });
  }, this.get_container = function () {
    i.ID = "flix-datepicker-" + new Date().getTime(), t.pop_ID = i.ID;var e = "<div id='" + i.ID + "' style='z-index: 99999; position: fixed; top:0; left:0; width: 100vw; height: 100vh; overflow: auto; display: flex; justify-content:flex-start;  align-items: center; align-content: center; background-color: rgba(0,0,0,0.75);  flex-flow: column; margin:0; padding:20px 0; '>";return e += '<div style="width: 100%; max-width: 500px; background-color: white; padding: 5px; text-align:right;"><a href="#" style="font-size: 1.4em;" class="flix-html-a flix-btn-close"><i class="flix-glyphicon flix-glyphicon-remove"</a></div>', e += '<div style="width: 100%; max-width: 500px; background-color: white; padding: 5px;" class="flix-get-picker"></div>', e += "</div>";
  };
},
    flix_date_picker_rules = (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
}, function (e, t) {
  var i = this;this.get_check_date = function (e) {
    var t = i.get_calculate_events(e, "once");return ("object" != (void 0 === t ? "undefined" : _typeof(t)) || 0 != t.length) && t;
  }, this.get_event_hours = function (e) {
    if (i.events = i.get_calculate_events(e, "all"), !i.events.length) return '<div class="flix-alert flix-alert-info flix-html-html">' + t.settings.no_entries + "</div>";var n = "<div style='width: 100%;'>";return void 0 !== t.pop_ID && (n = "<div style='width: 100%; overflow: auto; max-height: 80vh;'>"), $.each(i.events, function (e, i) {
      n += t.functions.get_show_event(i);
    }), n += "</div>";
  }, this.get_calculate_events = function (e, n) {
    var l = 0,
        a = [];if ("object" != _typeof(t.include) || "object" != _typeof(t.include.weekdays)) return a;if (!t.include.weekdays[e.dayOfWeek]) return a;var o = t.include.weekdays[e.dayOfWeek][0].split(":"),
        s = t.include.weekdays[e.dayOfWeek][1].split(":");if (!$.isNumeric(t.include.weekdays[e.dayOfWeek][2])) {
      if (new Date(e.Y, e.m - 1, e.d, s[0], s[1]).getTime() > new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 23, 59)) {
        var r = { begin: { Y: e.Y, m: e.m, d: e.d, H: 0, i: 0 } };if (1 == i.get_check_total_end(r)) return a;if (1 == i.get_check_period_range(r)) return a;if ("once" == n) return 1;
      }return a;
    }0 == t.include.weekdays[e.dayOfWeek][2] && (t.include.weekdays[e.dayOfWeek][2] = (new Date(e.Y, e.m, e.d, s[0], s[1]) - new Date(e.Y, e.m, e.d, o[0], o[1])) / 1e3 / 60);var c = 0;"object" == _typeof(t.include.buffer) && void 0 !== t.include.buffer[e.dayOfWeek] && (c = 1 * t.include.buffer[e.dayOfWeek]);var f = e,
        d = 0,
        u = -1,
        g = (t.functions.get_nulls_before(o[0]), t.functions.get_nulls_before(o[1]), t.functions.get_nulls_before(s[0]), t.functions.get_nulls_before(s[1]), 1 * t.include.weekdays[e.dayOfWeek][2]);for (d = 0; d <= 1e3; d++) {
      u++;var _ = 1 * o[1] + u * c + u * g,
          h = 1 * o[1] + u * c + g + u * g;!1 === t.booking_range && (h = _);var b = { begin: i.get_better_date({ Y: f.Y, m: f.m, d: f.d, H: o[0], i: _ }), end: i.get_better_date({ Y: f.Y, m: f.m, d: f.d, H: o[0], i: h }), obj: e };if (1 == i.get_check_end(b, s, e)) break;if (1 != i.get_check_total_start(b) && 1 != i.get_check_total_end(b) && 1 != i.get_check_period_range(b) && 1 != i.get_check_exclude_weekdays(b) && 1 != i.get_check_exclude_dates(b) && 100 != i.get_check_exclude_bookings(b)) {
        if (l++, "once" == n) return l;t.events[Object.values(b.begin).join("")] = { value: { ID: Object.values(b.begin).join(""), label: t.settings.default_label }, data: { begin: { split: b.begin }, end: { split: b.end } } }, a.push(t.events[Object.values(b.begin).join("")]);
      }
    }return "once" == n ? l : a;
  }, this.get_check_period_range = function (e) {
    if ("object" != _typeof(t.include) || "object" != _typeof(t.include.period)) return !1;var n,
        l = new Date();if ("string" == typeof t.start) {
      var a = t.start;a = a.split(" "), (a = t.functions.get_generate_date(a[0])).date_object > l && (l = a.date_object);
    }switch (t.include.period[1]) {case "days":
        l.setDate(l.getDate() + 1 * t.include.period[0]);break;case "weeks":
        l.setDate(l.getDate() + 1 * t.include.period[0] * 7);break;case "months":
        n = i.get_better_date({ Y: l.getFullYear(), m: l.getMonth() + 1 * t.include.period[0] + 1, d: l.getDate(), H: 0, i: 0 }), l = new Date(n.Y + "-" + n.m + "-" + n.d);break;case "years":
        n = i.get_better_date({ Y: l.getFullYear() + 1 * t.include.period[0], m: l.getMonth() + 1, d: l.getDate(), H: 0, i: 0 }), l = new Date(n.Y + "-" + n.m + "-" + n.d);}return 1 * (e.begin.Y + "" + t.functions.get_nulls_before(e.begin.m) + t.functions.get_nulls_before(e.begin.d) + "0000") > 1 * (l.getFullYear() + "" + t.functions.get_nulls_before(l.getMonth() + 1) + t.functions.get_nulls_before(l.getDate()) + "0000");
  }, this.get_check_total_end = function (e) {
    if ("string" != typeof t.end) return !1;var i = t.end.split(" "),
        n = i[0].split("-"),
        l = i[1].split(":");$.each(n, function (e, t) {
      n[e] = 1 * t;
    }), $.each(l, function (e, t) {
      l[e] = 1 * t;
    });var a = "" + n[0] + t.functions.get_nulls_before(n[1]) + t.functions.get_nulls_before(n[2]) + t.functions.get_nulls_before(l[0]) + t.functions.get_nulls_before(l[1]);return 1 * ("" + e.begin.Y + t.functions.get_nulls_before(e.begin.m) + t.functions.get_nulls_before(e.begin.d) + t.functions.get_nulls_before(e.begin.H) + t.functions.get_nulls_before(e.begin.i)) > 1 * a;
  }, this.get_check_total_start = function (e) {
    var i = t.start.split(" "),
        n = i[0].split("-"),
        l = i[1].split(":");$.each(n, function (e, t) {
      n[e] = 1 * t;
    }), $.each(l, function (e, t) {
      l[e] = 1 * t;
    });var a = "" + n[0] + t.functions.get_nulls_before(n[1]) + t.functions.get_nulls_before(n[2]) + t.functions.get_nulls_before(l[0]) + t.functions.get_nulls_before(l[1]);return 1 * ("" + e.begin.Y + t.functions.get_nulls_before(e.begin.m) + t.functions.get_nulls_before(e.begin.d) + t.functions.get_nulls_before(e.begin.H) + t.functions.get_nulls_before(e.begin.i)) < 1 * a;
  }, this.get_check_end = function (e, t, i) {
    var n = e.end;return n.m > i.m || n.d > i.d || 1 * n.H > 1 * t[0] || 1 * n.H == 1 * t[0] && 1 * n.i > 1 * t[1];
  }, this.get_check_exclude_bookings = function (e) {
    if ("object" != _typeof(t.exclude)) return !1;if ("object" != _typeof(t.exclude.bookings)) return !1;var i,
        n,
        l,
        a,
        o = !1;return t.exclude.bookings.forEach(function (s) {
      if (i = t.functions.get_datestring_to_number(s[0]), n = t.functions.get_datestring_to_number(s[4]), l = "" + e.begin.Y + t.functions.get_nulls_before(e.begin.m) + t.functions.get_nulls_before(e.begin.d) + t.functions.get_nulls_before(e.begin.H) + t.functions.get_nulls_before(e.begin.i) + "00", a = "" + e.end.Y + t.functions.get_nulls_before(e.end.m) + t.functions.get_nulls_before(e.end.d) + t.functions.get_nulls_before(e.end.H) + t.functions.get_nulls_before(e.end.i) + "00", 1 * i < 1 * a && 1 * n > 1 * l) return o = s[3], !1;
    }), o;
  }, this.get_check_exclude_dates = function (e) {
    if ("object" != _typeof(t.exclude) || null == t.exclude) return !1;if ("object" != _typeof(t.exclude.dates) || null == t.exclude.dates) return !1;var i,
        n,
        l,
        a = !1;return t.exclude.dates.forEach(function (o) {
      return i = t.functions.get_datestring_to_number(o[0]), n = t.functions.get_datestring_to_number(o[1]), l = "" + e.begin.Y + t.functions.get_nulls_before(e.begin.m) + t.functions.get_nulls_before(e.begin.d) + t.functions.get_nulls_before(e.begin.H) + t.functions.get_nulls_before(e.begin.i), i <= l && n >= l ? (a = !0, !1) : (l = "" + e.end.Y + t.functions.get_nulls_before(e.end.m) + t.functions.get_nulls_before(e.end.d) + t.functions.get_nulls_before(e.end.H) + t.functions.get_nulls_before(e.end.i), i <= l && n >= l ? (a = !0, !1) : void 0);
    }), a;
  }, this.get_check_exclude_weekdays = function (e) {
    var i;if ("object" != _typeof(t.exclude)) return !1;if ("object" != _typeof(t.exclude.weekdays)) return !1;if ("object" != _typeof(t.exclude.weekdays[e.obj.dayOfWeek])) return !1;var n = !1;return t.exclude.weekdays[e.obj.dayOfWeek].forEach(function (l) {
      return i = "" + t.functions.get_nulls_before(e.begin.H) + t.functions.get_nulls_before(e.begin.i), (i *= 1) >= l[0].replace(":", "") && i <= l[1].replace(":", "") ? (n = !0, !1) : (i = "" + t.functions.get_nulls_before(e.end.H) + t.functions.get_nulls_before(e.end.i), (i *= 1) >= l[0].replace(":", "") && i <= l[1].replace(":", "") ? (n = !0, !1) : void 0);
    }), n;
  }, this.get_better_date = function (e) {
    var t;$.each(e, function (t, i) {
      e[t] = 1 * i;
    }), e.i >= 60 && (t = Math.floor(e.i / 60), e.i = e.i - 60 * t, e.H += t), e.H >= 24 && (t = Math.floor(e.H / 24), e.H = e.H - 24 * t, e.d += t);var i = new Date(e.Y, e.m, 0).getDate();return e.d > i && (e.d = 1, e.m += 1), e.m > 12 && (t = Math.floor(e.m / 12), e.m = e.m - 12 * t, e.Y += t), e;
  };
}),
    flix_date_picker_services = function flix_date_picker_services(e, t) {
  var i = this;i.login = localStorage.getItem("flix_login"), i.lang = $(e).attr("data-flix-language"), void 0 !== t.login && (i.login = t.login);var n = new flix_form_elements($(e));this.build = function (e) {
    i.obj = e, i.filter = t.include.weekdays[e.dayOfWeek][2];
  }, this.set_html = function (n) {
    var l = "",
        a = "",
        o = '<div class="flix-alert flix-alert-info flix-html-html">' + t.settings.no_entries + "</div>";if (new Date(i.obj.Y, i.obj.m - 1, i.obj.d, 0, 0).getTime() < new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 23, 59)) return n.html(o), !1;var s = { begin: { Y: i.obj.Y, m: i.obj.m, d: i.obj.d, H: 0, i: 0 } },
        r = new flix_date_picker_rules($(e), t);if (1 == r.get_check_total_end(s) || 1 == r.get_check_period_range(s)) return n.html(o), !1;$.post(FLIX_URLS.api + i.lang + "/assistent/get_services", { user: i.login }).success(function (e) {
      i.data = {}, $.each(e[1], function (e, t) {
        -1 != t.short.indexOf(i.filter) && (i.data[t.ID] = t, a += '<a class="flix-list-group-item flix-html-a" href="#' + t.ID + '" style="margin-bottom: 10px;">', a += "<b>", a += t.title, a += "</b>", a += '<span class="flix-pull-right">', t.price && (a += '<i class="flix-glyphicon flix-glyphicon-money"></i> ', a += t.price, a += " €", a += " | "), a += '<i class="flix-glyphicon flix-glyphicon-clock"></i> ', a += t.time, a += " Std.", a += "</span>", t.description && (a += '<hr style="border:0; border-bottom: 0.5px solid lightgrey;">', a += t.description), a += "</a>");
      }), l += "<div class='flix-list-group'>", l += a, l += "</div>", n.html(l), i.get_click_service(n);
    });
  }, this.get_click_service = function (e) {
    e.find(".flix-list-group-item").unbind("click"), e.find(".flix-list-group-item").click(function () {
      var n = i.data[$(this).attr("href").replace("#", "")],
          l = $.parseJSON(JSON.stringify(t));l.include.weekdays[i.obj.dayOfWeek][2] = 60 * n.time, l.service = n, t.service = n;var a = "";a += n.title, n.price && (a += '<span class="flix-pull-right">', a += '<i class="flix-glyphicon flix-glyphicon-money"></i> ', a += n.price, a += " €", a += "</span>"), l.settings.default_label = a, l.functions = t.functions, "function" == typeof t.get_click_me && (l.get_click_me = t.get_click_me), "function" == typeof t.clickEvent && (l.clickEvent = t.clickEvent);var o = i.get_start_form(l);return o += '<div class="flix-dates"></div>', e.html(o), i.get_change_start(e, l), i.get_show_rules(l, e), !1;
    });
  }, this.get_show_rules = function (n, l) {
    var a = new flix_date_picker_rules($(e), n),
        o = "";o += a.get_event_hours(i.obj), l.find(".flix-dates").html(o), n.events = a.events, t.events = a.events, i.get_click_hour(n);
  }, this.get_change_start = function (e, t) {
    $(e).find("select[name='flix-change-start']").unbind("change"), $(e).find("select[name='flix-change-start']").change(function () {
      return t.include.weekdays[i.obj.dayOfWeek][0] = $(this).val(), i.get_show_rules(t, e), !1;
    });
  }, this.get_start_form = function (e) {
    var l = e.include.weekdays[i.obj.dayOfWeek][0].split(":"),
        a = e.include.weekdays[i.obj.dayOfWeek][1].split(":");a[0] = 1 * a[0] - e.include.weekdays[i.obj.dayOfWeek][2] / 60 * 1;var o = 1 * l[0] + 1,
        s = [],
        r = 0;for (r = 0; r < 60; r += 15) {
      t.functions.get_nulls_before(l[0]) + 1 * t.functions.get_nulls_before(r) > t.functions.get_nulls_before(a[0]) + t.functions.get_nulls_before(a[1]) || s.push({ value: t.functions.get_nulls_before(l[0]) + ":" + t.functions.get_nulls_before(r), label: t.functions.get_nulls_before(l[0]) + ":" + t.functions.get_nulls_before(r) });
    }for (; o < a[0]; o++) {
      for (r = 0; r < 60; r += 15) {
        t.functions.get_nulls_before(o) + 1 * t.functions.get_nulls_before(r) > t.functions.get_nulls_before(a[0]) + t.functions.get_nulls_before(a[1]) || s.push({ value: t.functions.get_nulls_before(o) + ":" + t.functions.get_nulls_before(r), label: t.functions.get_nulls_before(o) + ":" + t.functions.get_nulls_before(r) });
      }
    }if (l[0] != a[0]) for (r = 0; r <= a[1]; r += 15) {
      s.push({ value: t.functions.get_nulls_before(a[0]) + ":" + t.functions.get_nulls_before(r), label: t.functions.get_nulls_before(a[0]) + ":" + t.functions.get_nulls_before(r) });
    }return s.length <= 1 ? "" : n.get_select({ id: "flix-change-start", values: s, columnName: "", label: "Startzeit anpassen" });
  };
},
    flix_datepicker_years = function flix_datepicker_years(e, t) {
  var i = this;void 0 === t && (t = {}), this.build = function () {
    var n = t.functions.get_generate_date(t.date);t.date = n.date_object;var l = "";l += i.get_calendar_navbar(n.object), l += i.get_years(n.object), $(e).html(l), i.get_change_year(), t.functions.get_animation_events(e), t.clickEvent();
  }, this.get_years = function (e) {
    for (var i, n = "", l = e.Y + "", a = (t.functions.get_nulls_before(e.m), 1 * ((l = l.substr(0, 3)) + 0)), o = 1 * (l + 9), s = o + 1, r = a - 1; r <= s; r++) {
      i = r >= a && r <= o ? "" : t.settings.style.disabled_color, n += '<div class="flix-html-html" style="width:25%; float:left; text-align: center; font-weight: bold;">' + ('<div class="flix-btn flix-btn-default flix-btn-block" data-flix-date="' + r + '" style="background-color:inherit; ' + t.settings.style.column + "; color: " + i + '"">' + r + t.functions.get_date_status(r) + "</div>") + "</div>";
    }return n;
  }, this.get_calendar_navbar = function (e) {
    var i = e.Y + "",
        n = (t.functions.get_nulls_before(e.m), 1 * ((i = i.substr(0, 3)) + 0) - 1),
        l = 1 * (i + 9) + 1,
        a = "";return a += '<div class="flix-html-html" style="' + t.settings.style.navbar_highlight + t.settings.style.navbar + '">', void 0 === t.fixed_view || !0 !== t.fixed_view ? (a += '<a href="#" flix-change-year="' + n + '" class="flix-btn flix-btn-xs flix-btn-default"><i class="flix-glyphicon flix-glyphicon-arrow-left"></i></a>', a += '<div class="flix-btn flix-btn-xs flix-disabled" style="background-color:inherit; border:transparent;">' + i + "0 - " + i + "9</div>", a += '<a href="#" flix-change-year="' + l + '" class="flix-btn flix-btn-xs flix-btn-default"><i class="flix-glyphicon flix-glyphicon-arrow-right"></i></a>') : a += '<div class="flix-html-h4" style="border:transparent; text-align: center; width: 100%;">' + i + "0 - " + i + "9</div>", a += "</div>";
  }, this.get_change_year = function () {
    $(e).find("[flix-change-year]").unbind("click"), $(e).find("[flix-change-year]").click(function () {
      return delete t.date, t.date = $(this).attr("flix-change-year"), i.build(), !1;
    });
  };
},
    flix_entry_manager_change_booking_status = function flix_entry_manager_change_booking_status(e, t) {
  var i = this,
      n = ["commitment", "cancellation"],
      l = { commitment: "ok", cancellation: "remove" };this.build = function () {}, this.get_change_status = function (e, i) {
    var n = e.find("[data-entry-id]");n.find("a").unbind("click"), n.find("a").click(function () {
      var e = $(this),
          n = e.attr("href").replace("#", "");return swal.fire({ type: "question", title: $(this).text(), confirmButtonText: t.language.yes, cancelButtonText: t.language.no, showCancelButton: !0, html: t.language["change booking status"] }).then(function (t) {
        if (void 0 === t || void 0 === t.value) return !1;i.onChange({ ID: e.closest("[data-entry-id]").attr("data-entry-id"), container: e.closest(".flix-panel"), new_status: n });
      }), !1;
    });
  }, this.get_dropdown = function (e) {
    var n = "";return n += '<span class="flix-dropdown flix-booking-status" style="display: inline-block;">', n += '<a href="#" data-tooltip="' + t.language["change booking status"] + '" class="flix-btn flix-btn-info flix-change-status flix-dropdown-toggle flix-tooltip" data-toggle="dropdown"><i class="flix-glyphicon flix-glyphicon-heart"></i></a>', n += '<ul class="flix-dropdown-menu" data-entry-id="' + e.ID + '"><li class="flix-dropdown-header">' + t.language["change booking status"] + '</li><li role="separator" class="flix-divider"></li>' + i.get_dropdown_options(e) + "</ul>", n += "</span>";
  }, this.get_dropdown_options = function (e) {
    var i = "";return $.each(n, function (n, a) {
      if (a == e.status) return !0;i += '<li class="flix-html-li"><a class="flix-html-a" href="#' + a + '"><i class="flix-glyphicon flix-glyphicon-' + l[a] + '"></i> ' + t.language[a] + "</a></li>";
    }), i;
  };
},
    flix_entry_manager_change_date = function flix_entry_manager_change_date(e, t, i, n) {
  var l = this;l.login = localStorage.getItem("flix_login"), l.lang = $(e).attr("data-flix-language"), this.get_html = function (e) {
    return '<a href="#" data-tooltip="' + n.language["change date"] + '" class="flix-btn flix-btn-default flix-open-datechange flix-tooltip"><i class="flix-glyphicon flix-glyphicon-calendar"></i></a>';
  }, this.get_change_date = function (e, t) {
    $(e).click(function () {
      var e = $(this),
          i = e.closest("[data-entry-id]").find("[data-booking-id]").attr("data-booking-id");i = (i = i.split("-"))[1];e.attr("data-tooltip");var n = { user: l.login };return $.each(t, function (e, t) {
        if (t.ID === i) return n.ID = t.form, !1;
      }), l.get_click_new_date(!1, { event_id: n.ID, ID: i, user: n.user }, !1, e), !1;
    });
  }, this.get_click_new_date = function (a, o, s, r) {
    var c = new flix_landingpage_change_appointment(e, { login: l.login, lang: l.lang });c.admin = l.login, c.change_appointment(r, { page_id: o.event_id }), c.content = { content: { ID: o.ID } }, c.change_callback = function (l, a) {
      $(r).closest(".flix-panel").find(".flix-panel-heading").find("span").eq(0).html(l[2]), $(r).closest(".flix-panel").find(".flix-panel-body").find("span").eq(0).html(l[2]), $(r).closest(".flix-panel").find(".flix-list-service").remove();var o = new flix_entry_manager(e, t, i, n).get_service_info(a);o && $(r).closest(".flix-panel").find(".flix-panel-body").append(o), $(r).closest(".flix-panel").toggleClass("flix-panel-default flix-panel-primary"), setTimeout(function () {
        $(r).closest(".flix-panel").toggleClass("flix-panel-default flix-panel-primary");
      }, 3e3);
    };
  };
},
    flix_entry_manager_delete = function flix_entry_manager_delete(e, t) {
  this.build = function (e, i) {
    e.unbind("click"), e.click(function () {
      var e = $(this),
          n = e.closest("[data-entry-id]").find("[data-booking-id]").attr("data-booking-id");return n = n.split("-"), swal.fire({ type: "question", text: e.attr("data-tooltip") + "?", title: t.language["all data will be deleted"], showCancelButton: !0, cancelButtonText: t.language.no, confirmButtonText: t.language.yes }).then(function (t) {
        if (void 0 === t || void 0 === t.value) return !1;i.onClick({ container: e.closest(".flix-panel"), ID: n[1] });
      }), !1;
    });
  };
},
    flix_entry_manager = function flix_entry_manager(e, t, i, n) {
  var l = this;l.login = localStorage.getItem("flix_login"), l.lang = $(e).attr("data-flix-language");var a = new flix_form_elements(),
      o = new flix_entry_manager_change_booking_status($(e), n),
      s = new flix_entry_manager_change_date($(e), t, i, n),
      r = i.post_url;this.build = function () {
    i.get_styles(), i.get_animateCSS(), l.lang && (r += "?l=" + l.lang), i.set_post_url(r), $(e).html(i.get_loader());$(e);new flix_overhead(e, { onReady: function onReady(e) {
        l.ret = e, l.get_manager(e);
      }, onChange: function onChange(e) {
        l.ret = e, l.get_manager(e);
      } }).build();
  }, this.get_userchat = function () {
    $(e).find(".flix-open-chat").unbind("click"), $(e).find(".flix-open-chat").click(function () {
      var e = $(this).closest("[data-entry-id").find("[data-booking-id]").attr("data-booking-id").split("-"),
          n = FLIX_URLS.flix + "events/" + l.lang + "/userchat/" + l.login + "/" + l.get_event_id_by_id(e[1]) + "/" + $(this).closest("[data-entry-id]").attr("data-entry-id") + "/",
          a = $(this);return t.flix_load_css(FLIX_URLS.flix + "assets/css/chat.css", function () {
        swal.fire({ title: a.attr("title"), html: "<div data-flix-language='" + l.lang + "' data-flix-userchat='" + n + "'></div>", showCloseButton: !0, showConfirmButton: !1 }), new flix_userchat($(".swal2-content").find("[data-flix-userchat]"), t, i);
      }), !1;
    });
  }, this.get_manager = function (e) {
    l.ret = e, e.stage.html('<div class=\'flix-clearfix flix-form-group\'></div><div class="flix-col-md-12"><div class="flix-stage-container"></div></div>'), e.stage.find(".flix-stage-container").html(i.get_loader()), l.get_data(e, function () {
      l.get_menu(e);
    });
  }, this.get_data = function (e, t) {
    $.post(FLIX_URLS.api + l.lang + "/booking/get", { user: l.login, ID: e.id }).success(function (i) {
      if (0 == i[0]) return e.stage.find(".flix-stage-container").html('<div class="flix-alert flix-alert-danger">' + n.language["no entries"] + "</div>"), !1;l.data = i[1], l.get_order_data(), t();
    });
  }, this.get_order_data = function () {
    l.count = { open: 0, commitment: 0, cancellation: 0 }, $.each(l.data, function (e, t) {
      l.count[t.status] += 1;
    });
  }, this.get_entries = function (e) {
    if (!l.count[e]) return "<div class='flix-alert flix-alert-danger'>" + n.language["no entries"] + "</div>";var t = "";return $.each(l.data, function (i, n) {
      n.status === e && (t += l.get_user_entry_data(n.data, n));
    }), t;
  }, this.get_open_panel = function () {
    $(e).find(".flix-stage.flix-steps .flix-panel-body").addClass("flix-hide"), $(e).find(".flix-stage.flix-steps .flix-panel-heading a").unbind("click"), $(e).find(".flix-stage.flix-steps .flix-panel-heading a").click(function () {
      var t = $(this).closest(".flix-panel").find(".flix-panel-body");return $(e).find(".flix-stage.flix-steps .flix-panel").find(".flix-panel-body").not(t).slideUp(300, function () {
        $(this).addClass("flix-hide");
      }), t.hasClass("flix-hide") ? t.removeClass("flix-hide").hide().slideDown(300) : t.show().slideUp(300, function () {
        $(this).addClass("flix-hide");
      }), !1;
    }), 1 == $(e).find(".flix-stage.flix-steps .flix-panel-heading a").length && $(e).find(".flix-stage.flix-steps .flix-panel-heading a").eq(0).trigger("click");
  }, this.get_user_entry_data = function (e, t) {
    var i = "";return i += '<div class="flix-panel flix-panel-default">', i += '<div class="flix-panel-heading flix-text-center">', i += '<a href="#" class="flix-btn flix-btn-default flix-btn-xs" style="display: inline-block;">', i += '<i class="flix-glyphicon flix-glyphicon-menu-hamburger"></i> Termin-Infos anzeigen', i += "</a>", i += '<span class="flix-pull-left flix-html-small flix-small flix-form-group flix-hidden-xs">', i += " ", i += t.booking_date, i += "</span>", i += '<div class="flix-form-group flix-hidden-sm flix-hidden-lg" style="margin-top:20px;">', i += " ", i += t.booking_date, i += "</div>", i += '<span class="flix-hidden-xs flix-pull-right flix-html-small flix-small flix-form-group">', i += t.email, i += "</span>", i += "<div class='flix-clearfix'></div>", i += '<div class="flix-clearfix"></div>', i += "</div>", i += '<div class="flix-panel-body flix-hide">', $.each(e, function (e, l) {
      l || (l = "---"), (l === t.email || l === t.tel && "" != t.tel) && (l = l + ' <a href="#' + l + '" data-tooltip="' + n.language.blacklist + '" class="flix-btn flix-btn-xs flix-btn-danger flix-btn-unsubscribe flix-tooltip"><i class="flix-glyphicon flix-glyphicon-ban-circle"></i></a>'), i += '<div class="flix-row">', i += a.get_paragraph({ type: "paragraph", subtype: "p", description: "<b>" + e + "</b>:<br>" + l, columnName: 12 }), i += "</div>";
    }), i += l.get_service_info(t), i += "</div>", i += '<div class="flix-panel-footer" data-entry-id="' + t.md5ID + '">', i += '<span class="flix-pull-left">', new Date(t.begin).getTime() > new Date().getTime() && new Date(t.end).getTime() > new Date().getTime() ? t.validated ? i += l.get_edit_buttons(t) : i += '<a href="#" data-tooltip="' + t.count_notes + " " + n.language["internal notes"] + '" class="flix-btn flix-btn-default flix-open-note flix-tooltip">' + t.count_notes + ' <i class="flix-glyphicon flix-glyphicon-note"></i></a>' : (i += '<a href="#" data-tooltip="' + n.language.userchat + '" class="flix-btn flix-btn-default flix-open-chat flix-tooltip"><i class="flix-glyphicon flix-glyphicon-comments"></i></a>', i += '<a href="#" data-tooltip="' + t.count_notes + " " + n.language["internal notes"] + '" class="flix-btn flix-btn-default flix-open-note flix-tooltip">' + t.count_notes + ' <i class="flix-glyphicon flix-glyphicon-note"></i></a>'), i += "</span>", i += '<span class="flix-pull-right">', i += '<span class="flix-badge" style="display: inline-block;" data-booking-id="' + t.booking_id + '">', i += t.assistent_title, i += "<br>", i += "#" + t.booking_id, i += "</span>", i += "</span>", i += "<div class='flix-clearfix'></div>", i += "</div>", i += "</div>";
  }, this.get_service_info = function (t) {
    var i = new flix_landingpage_booking_details(e).get_service(t.service),
        n = "";return i && (n += '<div class="flix-list-group flix-list-service">', n += '<div class="flix-list-group-item">', n += "<b>Gewünschte Leistung:</b><br><br>", n += i, n += "</div>", n += "</div>"), n;
  }, this.get_edit_buttons = function (e) {
    var t = "";return t += o.get_dropdown(e), t += s.get_html(e), t += '<a href="#" data-tooltip="' + n.language.userchat + '" class="flix-btn flix-btn-default flix-open-chat flix-tooltip"><i class="flix-glyphicon flix-glyphicon-comments"></i></a>', t += '<a href="#" data-tooltip="' + e.count_notes + " " + n.language["internal notes"] + '" class="flix-btn flix-btn-default flix-open-note flix-tooltip">' + e.count_notes + ' <i class="flix-glyphicon flix-glyphicon-note"></i></a>', "commitment" == e.status && (t += '<a href="' + FLIX_URLS.flix + "events/" + l.lang + "/ics/" + l.login + "/" + l.get_event_id_by_id(e.ID) + "/" + e.md5ID + '/event.ics" target="_blank" data-tooltip="' + n.language.ical + '" class="flix-btn flix-btn-default flix-tooltip"><i class="flix-glyphicon flix-glyphicon-download-alt"></i></a>'), t += '<a href="#" data-tooltip="' + n.language["delete booking"] + '" class="flix-btn flix-btn-danger flix-open-remove flix-tooltip"><i class="flix-glyphicon flix-glyphicon-bin"></i></a>';
  }, this.get_unsubscribe = function () {
    $(e).find(".flix-btn-unsubscribe").unbind("click"), $(e).find(".flix-btn-unsubscribe").click(function () {
      var e = $(this).attr("href").replace("#", "");return i.get_new_section($(this).closest(".flix-panel-body"), { html: '<div data-flix-language="' + l.lang + '" data-flix-blacklist=></div>', onReady: function onReady(n) {
          new flix_blacklist(n.container.find("[data-flix-blacklist]"), t, i, { to: e }).save_to_blacklist(), n.flix_parent.set_to_scroll_position(n.container);
        }, onClose: function onClose(e) {
          e.flix_parent.set_to_scroll_position(e.attr);
        } }), !1;
    });
  }, this.show_entries = function (t) {
    $(e).find(".flix-stage.flix-steps").html(l.get_entries(t)), l.get_open_panel(), l.get_unsubscribe(), l.get_userchat(), l.get_notes(), new flix_entry_manager_delete(e, n).build($(e).find(".flix-open-remove"), { onClick: function onClick(t) {
        $.post(FLIX_URLS.api + l.lang + "/booking/delete", { user: l.login, event_id: l.get_event_id_by_id(t.ID), ID: t.ID }), t.container.fadeOut(500, function () {
          1 == $(this).closest(".flix-stage.flix-steps").find(".flix-panel").length ? $(this).closest(".flix-stage.flix-steps").html("<div class='flix-alert flix-alert-danger'>" + n.language["no entries"] + "</div>") : $(this).remove(), $.each(l.data, function (i, n) {
            if (n.ID === t.ID) {
              l.count[l.data[i].status] -= 1;var a = $(e).find(".wizard-nav-menu span.flix-count-" + l.data[i].status);return a.text(1 * a.text() - 1), !1;
            }
          });
        });
      } }), s.get_change_date($(e).find(".flix-open-datechange"), l.data), o.get_change_status($(e).find(".flix-booking-status"), { onChange: function onChange(t) {
        var i = $(e).find(".wizard-nav-menu span.flix-count-" + t.new_status);i.text(1 * i.text() + 1);var a = { status: t.new_status, user: l.login, event_id: l.get_event_id_by_id(t.ID), ID: t.ID };$.post(FLIX_URLS.api + l.lang + "/booking/change_status", a).success(function () {
          $.post(FLIX_URLS.api + l.lang + "/reminder/change_status", a), t.container.slideUp(300, function () {
            1 == $(this).closest(".flix-stage.flix-steps").find(".flix-panel").length ? $(this).closest(".flix-stage.flix-steps").html("<div class='flix-alert flix-alert-danger'>" + n.language["no entries"] + "</div>") : $(this).remove();
          });
        }), $.each(l.data, function (i, n) {
          if (1 * n.ID == 1 * t.ID) {
            l.count[l.data[i].status] -= 1;var a = $(e).find(".wizard-nav-menu span.flix-count-" + l.data[i].status);return a.text(1 * a.text() - 1), l.data[i].status = t.new_status, l.count[l.data[i].status] += 1, !1;
          }
        });
      } });
  }, this.get_notes = function () {
    $.post(FLIX_URLS.api + l.lang + "/user/get_user", { user: l.login }).success(function (a) {
      (a = a[1]).img = "https://api.adorable.io/avatars/80/" + a.username + ".png", a.avatar && (a.img = a.avatar), new flix_entry_manager_notes(e, t, i, n).get_event_note({ name: a.name, img: a.img, ID: a.ID }, l, { onInsert: function onInsert(e) {
          $.each(l.data, function (e, t) {
            if (t.ID === entry_id[1]) return l.data[e].count_notes = 1 * l.data[e].count_notes + 1, !1;
          });
        } });
    });
  }, this.get_event_id_by_id = function (e) {
    var t = "";return $.each(l.data, function (i, n) {
      if (n.ID == e) return t = n.form, !1;
    }), t;
  }, this.get_menu = function (e) {
    var t = { menubar: {} };t.menubar.steps = [{ title: n.language.open + " (<span class='flix-html-strong flix-count-open'>" + l.count.open + "</span>)", onClick: function onClick() {
        l.show_entries("open");
      }, onClickBefore: function onClickBefore(e) {
        return e(!0);
      } }, { title: n.language.commitment + " (<span class='flix-html-strong flix-count-commitment'>" + l.count.commitment + "</span>)", onClick: function onClick() {
        l.show_entries("commitment");
      }, onClickBefore: function onClickBefore(e) {
        return e(!0);
      } }, { title: n.language.cancellation + " (<span class='flix-html-strong flix-count-cancellation'>" + l.count.cancellation + "</span>)", onClick: function onClick() {
        l.show_entries("cancellation");
      }, onClickBefore: function onClickBefore(e) {
        return e(!0);
      } }], new flix_menubar(e.stage.find(".flix-stage-container"), t).build();
  };
},
    flix_entry_manager_notes = function flix_entry_manager_notes(e, t, i, n) {
  this.get_event_note = function (n, l, a) {
    $(e).find(".flix-open-note").unbind("click"), $(e).find(".flix-open-note").click(function () {
      var o = $(this),
          s = $(this).closest("[data-entry-id]"),
          r = s.attr("data-entry-id"),
          c = s.find("[data-booking-id]").attr("data-booking-id").split("-");return c = l.get_event_id_by_id(c[1]), t.flix_load_css(FLIX_URLS.flix + "assets/css/chat.css", function () {
        swal.fire({ title: o.attr("title"), showCloseButton: !0, showConfirmButton: !1 }), $(".swal2-content").html(i.get_loader()), new chat($(".swal2-content"), { data: FLIX_URLS.flix + "events/" + $(e).attr("data-flix-language") + "/entry_chat/" + localStorage.getItem("flix_login") + "/" + c + "/" + r + "/get_chat.html", translation: FLIX_URLS.api + $(e).attr("data-flix-language") + "/chat/settings/", bot: { name: "FLIX", img: FLIX_URLS.flix + "/assets/img/flix_avatar.jpeg" }, user: n, response: function response(t) {
            $.post(FLIX_URLS.flix + "events/" + $(e).attr("data-flix-language") + "/entry_chat/" + localStorage.getItem("flix_login") + "/" + c + "/" + r + "/set_chat.html", t.responses).success(function (e) {
              var t = o.text().trim();t *= 1, o.html(o.html().replace(t, t + 1)), $(".swal2-title").html($(".swal2-title").html().replace(t, t + 1)), o.attr("title", o.attr("title").replace(t, t + 1)), a.onInsert({ ID: r });
            });
          }, init: function init(e) {
            var t = 0;$.each(e.chat_msg, function (i, n) {
              var l = "user";n.user_id || (l = "bot"), Number.isInteger(1 * i) && (l = "bot"), e.chat_container.append(e.msg.setSendMsg(l, n.msg)), void 0 !== n.date && ($(".swal2-content").find("ul").find("li").eq(t).find(".date").html(n.date), $(".swal2-content").find("ul").find("li").eq(t).find(".user img").attr("title", n.user), n.user_id || $(".swal2-content").find("ul").find("li").eq(t).find(".user img").attr("src", n.img)), t++;
            }), e.scrollDwn(), e.getMsgListener(function (t) {
              e.responses[0] = t, e.responses.user = e.settings.user, e.settings.response(e);
            });
          } }).run();
      }), !1;
    });
  };
},
    flix_form_builder_edit_menu = function flix_form_builder_edit_menu(e, t) {
  var i = this;this.build = function () {
    i.element = $(e).clone();var t = $(e).html();$(e).html("<div class='flix-edit-menu flix-row flix-html-html' style='padding: 20px;'>" + i.get_edit_menu() + "</div><div class='flix-hide'>" + t + "</div>"), i.get_edit_btn(), i.get_delete_btn(), i.get_copy_btn(), i.get_back_btn($(e).clone()), i.get_change_position();
  }, this.get_change_position = function () {
    $(e).find(".flix-btn-up,.flix-btn-down").unbind("click"), $(e).find(".flix-btn-up,.flix-btn-down").click(function () {
      var e = "down";return $(this).hasClass("flix-btn-up") && (e = "up"), t.onChangePositionComponent(t.current_component, e), t.get_close_editor(), !1;
    });
  }, this.get_delete_btn = function () {
    $(e).find(".flix-btn-delete").unbind("click"), $(e).find(".flix-btn-delete").click(function () {
      return $(e).slideUp(500, function () {
        $(this).html("").show(), t.onDeleteComponent(t.current_component);
      }), t.get_close_editor(), !1;
    });
  }, this.get_copy_btn = function () {
    $(e).find(".flix-btn-copy").unbind("click"), $(e).find(".flix-btn-copy").click(function () {
      return t.onCopyComponent(t.current_component), $(e).html(i.element.html()), t.get_close_editor(), !1;
    });
  }, this.get_edit_btn = function () {
    $(e).find(".flix-btn-edit").unbind("click"), $(e).find(".flix-btn-edit").click(function () {
      return $(e).html(""), t.container.addClass("flix-hide"), new flix_form_builder_editor(t.editor, { saved_component: t.saved_component, current_component: t.current_component }).build(function (e) {
        t.onSaveComponent(e);
      }), !1;
    });
  }, this.get_back_btn = function (n) {
    $(e).find(".flix-btn-back").unbind("click"), $(e).find(".flix-btn-back").click(function () {
      return $(e).html(i.element.html()), t.get_close_editor(), !1;
    });
  }, this.get_edit_menu = function () {
    var e = "",
        t = new flix_form_elements();return i.element.find("label").length && (e += t.get_header({ type: "header", subtype: "h5", label: i.element.find("label").html(), columnName: "12", description: "", required: !1 })), e += '<div class="flix-col-md-12">', e += t.get_button({ subtype: "button", className: "flix-btn flix-btn-default flix-btn-xs flix-btn-back", label: "<i class='flix-glyphicon flix-glyphicon-eye-open'></i>", columnName: "", description: "" }), e += t.get_button({ subtype: "button", className: "flix-btn flix-btn-info flix-btn-xs flix-btn-edit", label: "<i class='flix-glyphicon flix-glyphicon-pen'></i>", columnName: "", description: "" }), e += t.get_button({ subtype: "button", className: "flix-btn flix-btn-info flix-btn-xs flix-btn-copy", label: "<i class='flix-glyphicon flix-glyphicon-copy'></i>", columnName: "", description: "" }), e += i.get_updown_btns(), e += '<div class="flix-pull-right">', e += t.get_button({ subtype: "button", className: "flix-btn flix-btn-danger flix-btn-xs flix-btn-delete", label: "<i class='flix-glyphicon flix-glyphicon-bin'></i>", columnName: "", description: "" }), e += "</div>", e += "</div>";
  }, this.get_updown_btns = function () {
    var e = new flix_form_elements(),
        i = "";return 0 != t.current_component.id && 1 != Object.values(t.saved_component).length && (i += e.get_button({ subtype: "button", className: "flix-btn flix-btn-default flix-btn-xs flix-btn-up", label: "<i class='flix-glyphicon flix-glyphicon-arrow-up'></i>", columnName: "", description: "" })), t.current_component.id != t.saved_component.length - 1 && 1 != Object.values(t.saved_component).length && (i += e.get_button({ subtype: "button", className: "flix-btn flix-btn-default flix-btn-xs flix-btn-down", label: "<i class='flix-glyphicon flix-glyphicon-arrow-down'></i>", columnName: "", description: "" })), i;
  };
},
    flix_form_builder_editor = (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
}, function (e, t) {
  var i = this,
      n = new flix_form_elements();this.build = function (l) {
    var a = t.current_component.value;void 0 === a.value && (a.value = ""), $(e).removeClass("flix-hide");var o = "";o += "<form>", "terms" == a.type ? o += i.get_terms(a) : "header" == a.type ? o += i.get_header(a) : "paragraph" == a.type ? o += i.get_paragraph(a) : "textarea" == a.type ? o += i.get_textarea(a) : "select" == a.type || "radio_group" == a.type ? o += i.get_select(a, !1) : "checkbox_group" == a.type ? o += i.get_select(a, !0) : o += i.get_default(a), o += n.get_button({ id: "submit", subtype: "submit", label: "Einstellungen übernehmen" }), o += "</form>", $(e).html(o);var s = new flix_form_builder($(e), t);s.get_functions(), new flix_html_form($(e), t).get_handle_form(function (e) {
      i.get_save_form(e, l);
    }), i.get_select_functions(s);
  }, this.get_select_add_row = function (t) {
    $(e).find(".flix-panel-select-manager .flix-glyphicon-plus").closest("button").unbind("click"), $(e).find(".flix-panel-select-manager .flix-glyphicon-plus").closest("button").click(function () {
      var e = {};e[$.now()] = { label: "" };var n = $(this).closest(".flix-panel-select-manager").find(".flix-row").index($(this).closest(".flix-row"));return $(this).closest(".flix-row").after(i.get_select_row(e)), $(this).closest(".flix-panel-select-manager").find(".flix-row").eq(n + 1).hide().slideDown(300), i.get_select_functions(t), !1;
    });
  }, this.get_select_remove_row = function () {
    $(e).find(".flix-panel-select-manager .flix-glyphicon-minus").closest("button").unbind("click"), $(e).find(".flix-panel-select-manager .flix-glyphicon-minus").closest("button").click(function () {
      return 1 != $(this).closest(".flix-panel-select-manager").find(".flix-row").length && ($(this).closest(".flix-row").slideUp(300, function () {
        $(this).remove();
      }), !1);
    });
  }, this.get_select_functions = function (e) {
    i.get_select_add_row(e), i.get_select_remove_row(), e.get_functions();
  }, this.get_select = function (e, t) {
    var l = "";return l += n.get_toggleswitch({ id: "required", value: e.required, label: "Pflichtfeld", columnName: "6", description: "", required: !1, values: [{ value: !0 }, { value: !1 }] }), l += n.get_select({ id: "columnName", value: e.columnName, label: "Feld-Breite", columnName: "6", values: [{ label: "100%", value: "12" }, { label: "50%", value: "6" }, { label: "33%", value: "4" }, { label: "25%", value: "3" }, { label: "20%", value: "2" }] }), l += n.get_text({ id: "label", label: "Überschrift", value: e.label, subtype: "text", columnName: "12", description: "", required: !0 }), l += n.get_text({ id: "description", label: "Beschreibung / Infotext", value: e.description, columnName: "12", description: "" }), l += '<div class="flix-clearfix"></div>', l += "<div class='flix-panel flix-panel-default flix-panel-select-manager'>", l += "<div class='flix-panel-body'>", l += i.get_select_row(e.values, e.value, t), l += "</div>", l += "</div>";
  }, this.get_select_row = function (e, t, i) {
    var l = "";return $.each(e, function (e, a) {
      var o = { id: "choosen[]", label: "Aktiv", values: [{ label: "", value: e }], columnName: "", description: "", value: "defaultValue" };"object" == (void 0 === t ? "undefined" : _typeof(t)) && -1 != t.indexOf(a.label) && (o.value = e + ""), l += '<div class="flix-row">', l += '<div class="flix-col-md-1">', l += i ? n.get_checkbox_group(o) : n.get_radio_group(o), l += "</div>", l += '<div class="flix-col-md-5">', l += n.get_text({ id: "value_" + e, label: "Wert", value: a.label, columnName: "", description: "", required: !0 }), l += "</div>", l += '<div class="flix-col-md-6">', l += '<label class="flix-html-label flix-html-html">&nbsp;</label>', l += n.get_button({ id: e + "btn", subtype: "button", label: "<i class='flix-glyphicon flix-glyphicon-plus'></i>", columnName: "", description: "" }), l += n.get_button({ id: e + "btn", subtype: "button", label: "<i class='flix-glyphicon flix-glyphicon-minus'></i>", columnName: "", description: "" }), l += "</div>", l += "</div>";
    }), l;
  }, this.get_paragraph = function (e) {
    var t = "";return t += n.get_select({ id: "columnName", value: e.columnName, label: "Feld-Breite", columnName: "12", values: [{ label: "100%", value: "12" }, { label: "50%", value: "6" }, { label: "33%", value: "4" }, { label: "25%", value: "3" }, { label: "20%", value: "2" }] }), t += n.get_textarea({ id: "description", label: "Beschreibung / Infotext", value: e.description, columnName: "12", description: "", required: !0 });
  }, this.get_header = function (e) {
    var t = "";return t += n.get_select({ id: "columnName", value: e.columnName, label: "Feld-Breite", columnName: "12", values: [{ label: "100%", value: "12" }, { label: "50%", value: "6" }, { label: "33%", value: "4" }, { label: "25%", value: "3" }, { label: "20%", value: "2" }] }), t += n.get_text({ id: "label", label: "Überschrift", value: e.label, subtype: "text", columnName: "6", description: "", required: !0 }), t += n.get_select({ id: "subtype", label: "Größe", value: e.subtype, columnName: "6", description: "", required: !0, values: [{ label: "sehr groß", value: "h1" }, { label: "Mittelgroß", value: "h3" }, { label: "Klein", value: "h5" }] });
  }, this.get_terms = function (e) {
    var t = "";return t += n.get_select({ id: "columnName", value: e.columnName, label: "Feld-Breite", columnName: "12", values: [{ label: "100%", value: "12" }, { label: "50%", value: "6" }, { label: "33%", value: "4" }, { label: "25%", value: "3" }, { label: "20%", value: "2" }] });
  }, this.get_textarea = function (e) {
    var t = "";return t += n.get_toggleswitch({ id: "required", value: e.required, label: "Pflichtfeld", columnName: "6", description: "", required: !1, values: [{ value: !0 }, { value: !1 }] }), t += n.get_select({ id: "columnName", value: e.columnName, label: "Feld-Breite", columnName: "6", values: [{ label: "100%", value: "12" }, { label: "50%", value: "6" }, { label: "33%", value: "4" }, { label: "25%", value: "3" }, { label: "20%", value: "2" }] }), t += n.get_text({ id: "label", label: "Überschrift", value: e.label, subtype: "text", columnName: "12", description: "", required: !0 }), t += n.get_textarea({ id: "value", label: "Vorgabewert", value: e.value, subtype: "text", columnName: "12", description: "" }), t += n.get_text({ id: "description", label: "Beschreibung / Infotext", value: e.description, columnName: "12", description: "" });
  }, this.get_default = function (e) {
    var t = "";return t += n.get_toggleswitch({ id: "required", value: e.required, label: "Pflichtfeld", columnName: "6", description: "", required: !1, values: [{ value: !0 }, { value: !1 }] }), t += n.get_select({ id: "columnName", value: e.columnName, label: "Feld-Breite", columnName: "6", values: [{ label: "100%", value: "12" }, { label: "50%", value: "6" }, { label: "33%", value: "4" }, { label: "25%", value: "3" }, { label: "20%", value: "2" }] }), t += n.get_text({ id: "label", label: "Überschrift", value: e.label, subtype: "text", columnName: "12", description: "", required: !0 }), t += n.get_text({ id: "value", label: "Vorgabewert", value: e.value, subtype: "text", columnName: "12", description: "" }), t += n.get_text({ id: "description", label: "Beschreibung / Infotext", value: e.description, columnName: "12", description: "" });
  }, this.get_save_form = function (n, l) {
    n = i.get_save_select(n);var a = { id: t.current_component.id, value: t.saved_component[t.current_component.id] };$.each(n, function (e, t) {
      a.value[e] = t;
    }), void 0 !== a.value.required && 0 != a.value.required && "false" != a.value.required || (a.value.required = !1), l(a), $(e).addClass("flix-hide");
  }, i.get_save_select = function (e) {
    var i = t.saved_component[t.current_component.id];return "select" != i.type && "radio_group" != i.type && "checkbox_group" != i.type ? e : (e.values = [], e.value = [], $.each(e, function (t, i) {
      if (-1 == t.indexOf("value_")) return !0;e.values.push({ label: i, value: i }), "object" == _typeof(e.choosen) && -1 != e.choosen.indexOf(t.replace("value_", "")) && e.value.push(i), delete e[t];
    }), delete e.choosen, e);
  };
}),
    flix_form_builder = function flix_form_builder(e, t) {
  var i = this,
      n = new flix_form_elements();this.build = function () {
    $(e).html(i.get_container()), i.get_stage(), l.editor = $(e).find(".flix-formbuilder-editor"), i.get_functions();
  }, this.get_stage = function () {
    l.container = $(e).find(".flix-formbuilder-container"), $.each(l.saved_component, function (e, t) {
      l.container.append(i.get_insert_component(JSON.parse(JSON.stringify(t))));
    });
  }, this.get_functions = function () {
    i.get_toggle_menu(), i.get_add_new_item(), i.get_edit_item(), l.get_form_status(), n.get_functions($(e));
  }, this.get_edit_item = function () {
    if (void 0 === l.container || 0 == l.container.html().length) return !1;l.container.find("span.flix-data-component").unbind("click"), l.container.find("span.flix-data-component").unbind("mouseenter"), l.container.find("span.flix-data-component").unbind("mouseleave"), l.container.find("span.flix-data-component").mouseenter(function () {
      $(this).find("div").eq(0).css({ "box-shadow": "0px 0px 30px lightgrey inset", opacity: 1 }), $(this).find(".flix-form-control").css({ "pointer-events": "none" });
    }).mouseleave(function () {
      $(this).find("div").eq(0).css({ border: "none", "box-shadow": "none", opacity: 1 }), $(this).find(".flix-form-control").css({ "pointer-events": "all" });
    }), l.container.find("span.flix-data-component").click(function () {
      var e = l.container.find("span.flix-data-component").index($(this));return l.get_open_editor(), (void 0 === l.container.find("span.flix-data-component").eq(e).find(".flix-edit-menu").html() || "" == l.container.find("span.flix-data-component").eq(e).find(".flix-edit-menu").html()) && (l.current_component = { id: e, value: l.saved_component[e] }, new flix_form_builder_edit_menu(l.container.find("span.flix-data-component").eq(e), l).build(), !1);
    }).css("cursor", "pointer");
  }, this.get_add_new_item = function () {
    $(e).find(".flix-dropdown-menu a").unbind("click"), $(e).find(".flix-dropdown-menu a").click(function () {
      $(this).closest(".flix-btn-group").toggleClass("flix-open");var e = l.components()[$(this).attr("href").replace("#", "")];return l.saved_component.push(e), l.container.append(i.get_insert_component(JSON.parse(JSON.stringify(e)))), l.container.find("span.flix-data-component").eq(l.container.find("span.flix-data-component").length - 1).hide().slideDown(500), i.get_functions(), !1;
    });
  }, this.get_toggle_menu = function () {
    $(e).find(".flix-dropdown-toggle").unbind("click"), $(e).find(".flix-dropdown-toggle").click(function () {
      return $(this).closest(".flix-btn-group").toggleClass("flix-open"), !1;
    });
  }, this.get_add_menu = function () {
    var e = "";return e += "<div class='flix-form-group'>", e += '<div class="flix-btn-group " role="group">', e += '<button type="button" class="flix-btn flix-btn-default flix-dropdown-toggle" data-flix-toggle="dropdown" aria-haspopup="true" aria-expanded="false">', e += "Neues Formular-Element", e += ' <span class="flix-caret"></span>', e += "</button>", e += '<ul class="flix-dropdown-menu flix-html-html">', $.each(l.components(), function (t, i) {
      e += '<li class="flix-html-li"><a href="#' + t + '" class="flix-html-a">' + i.label + "</a></li>";
    }), e += "</ul>", e += "</div>", e += "</div>";
  }, this.get_save_form = function () {
    $(e).find(".flix-form-status").find("button.flix-btn-save-form").unbind("click"), $(e).find(".flix-form-status").find("button.flix-btn-save-form").click(function () {
      return l.get_save_form(l), !1;
    });
  }, this.get_insert_component = function (e, t) {
    ("string" != typeof e.id && "number" != typeof e.id || "boolean" == typeof t && 1 == t) && (e.id = i.get_new_id());var a = "<span class='flix-data-component flix-col-md-" + e.columnName + "' title='" + l.edit_msg + "'>";return e.columnName = 12, a += n.get_form_element(e), a += '<div class="flix-clearfix"></div></span>';
  }, this.get_new_id = function () {
    return Math.floor(500 * Math.random() + 1) + $.now() + Math.floor(1e4 * Math.random() + 1);
  }, this.get_container = function () {
    var e = "";return e += '<div class="flix-container-fluid flix-html-html">', e += '<div class="flix-row">', e += '<div class="flix-col-md-12">', e += '<div class="flix-panel flix-panel-default">', e += '<div class="flix-panel-body">', e += i.get_add_menu(), e += "</div>", e += "</div>", e += "</div>", e += "</div>", e += '<div class="flix-row">', e += '<div class="flix-col-md-12">', e += '<div class="flix-form-group">', e += '<div class="flix-formbuilder-container" style="border: 3px dashed lightgrey; padding: 5px; display: table; width: 100%;"></div>', e += '<div class="flix-formbuilder-editor flix-hide" style="border: 3px dashed lightgrey; padding: 5px; display: table; width: 100%;"></div>', e += "</div>", e += "</div>", e += '<div class="flix-col-md-12">', e += '<div class="flix-form-group">', e += '<div class="flix-form-status">', e += "</div>", e += "</div>", e += "</div>", e += "</div>", e += "</div>";
  };var l = { save_btn: "Formular speichern", edit_msg: "Formular-Element bearbeiten", saved_component: [{ id: i.get_new_id(), type: "radio_group", label: "Häkchen-Abfrage (Einfachauswahl)", columnName: "12", description: "", required: !0, values: [{ label: "Auswahl 1", value: "Auswahl 1" }, { label: "Auswahl 2", value: "Auswahl 2" }, { label: "Auswahl 3", value: "Auswahl 3" }] }, { id: i.get_new_id(), type: "select", label: "Häkchen-Abfrage (Einfachauswahl)", columnName: "12", description: "", required: !0, values: [{ label: "Auswahl 1", value: "Auswahl 1" }, { label: "Auswahl 2", value: "Auswahl 2" }, { label: "Auswahl 3", value: "Auswahl 3" }] }, { id: i.get_new_id(), type: "checkbox_group", label: "Häkchen-Abfrage (Einfachauswahl)", columnName: "12", description: "", required: !0, values: [{ label: "Auswahl 1", value: "Auswahl 1" }, { label: "Auswahl 2", value: "Auswahl 2" }, { label: "Auswahl 3", value: "Auswahl 3" }] }, { id: i.get_new_id(), type: "text", subtype: "text", label: "Vorname", columnName: "6", description: "", required: !0 }, { id: i.get_new_id(), type: "text", subtype: "text", label: "Nachname", columnName: "6", description: "", required: !0 }, { id: i.get_new_id(), type: "text", subtype: "email", label: "E-Mailadresse", columnName: "6", description: "für Terminerinnerungen", required: !0 }, { id: i.get_new_id(), type: "text", subtype: "tel", label: "Handynummer", columnName: "6", description: "für Terminerinnerungen (optional)", required: !1 }, { id: i.get_new_id(), type: "terms", label: "Infos zum Datenschutz", columnName: "12", required: !0, description: "Sie haben die Möglichkeit jederzeit Ihre Einwilligung zur Verwendung der persönlichen Daten zu widerrufen.", values: [{ label: "Ich stimme der Erhebung meiner personenbezogenen Daten (siehe Formular) zu", value: "Einwilligung personenbezogener Daten" }, { label: "Ich stimme der Kontaktaufnahme zwecks Terminerinnerungen zu", value: "Kontaktaufnahme Terminerinnerungen" }, { label: "Ich bestätige die Richtigkeit meiner Angaben", value: "Richtigkeit Angaben" }] }], components: function components() {
      return [{ type: "text", subtype: "text", label: "Textabfrage (kurze Eingabe)", columnName: "12", description: "z.B. für Vorname, Nachname", required: !0 }, { type: "textarea", subtype: "textarea", label: "Textabfrage (lange Eingabe)", columnName: "12", description: "", required: !0 }, { type: "text", subtype: "email", label: "Email-Abfrage", columnName: "12", description: "für Termin-Erinnerungen", required: !0 }, { type: "text", subtype: "tel", label: "Handynummer-Abfrage", columnName: "12", description: "für Termin-Erinnerungen", required: !0 }, { type: "select", label: "Auswahlbox-Abfrage (Einfachauswahl)", columnName: "12", description: "", required: !0, values: [{ label: "Auswahl 1", value: "Auswahl 1" }, { label: "Auswahl 2", value: "Auswahl 2" }, { label: "Auswahl 3", value: "Auswahl 3" }] }, { type: "radio_group", label: "Häkchen-Abfrage (Einfachauswahl)", columnName: "12", description: "", required: !0, values: [{ label: "Auswahl 1", value: "Auswahl 1" }, { label: "Auswahl 2", value: "Auswahl 2" }, { label: "Auswahl 3", value: "Auswahl 3" }] }, { type: "checkbox_group", label: "Häkchen-Abfrage (Mehrfachauswahl)", columnName: "12", description: "", required: !0, values: [{ label: "Auswahl 1", value: "Auswahl 1" }, { label: "Auswahl 2", value: "Auswahl 2" }, { label: "Auswahl 3", value: "Auswahl 3" }] }, { type: "text", subtype: "number", label: "Zahlen-Abfrage", columnName: "12", description: "", required: !0 }, { type: "terms", label: "Infos zum Datenschutz", columnName: "12", required: !0, description: "Sie haben die Möglichkeit jederzeit Ihre Einwilligung zur Verwendung der persönlichen Daten zu widerrufen.", values: [{ label: "Ich stimme der Erhebung meiner personenbezogenen Daten (siehe Formular) zu", value: "Einwilligung personenbezogener Daten" }, { label: "Ich stimme der Kontaktaufnahme zwecks Terminerinnerungen zu", value: "Kontaktaufnahme Terminerinnerungen" }, { label: "Ich bestätige die Richtigkeit meiner Angaben", value: "Richtigkeit Angaben" }] }, { type: "header", subtype: "h3", label: "Überschrift beifügen", columnName: "12", description: "" }, { type: "paragraph", subtype: "p", label: "Beschreibung beifügen", description: "Beschreibungstext", columnName: "12", required: !0 }];
    }, get_open_editor: function get_open_editor() {
      $(e).find(".flix-btn-save-form").css("opacity", 0);
    }, get_close_editor: function get_close_editor() {
      $(e).find(".flix-btn-save-form").css("opacity", 1);
    }, onSaveComponent: function onSaveComponent(e) {
      l.get_close_editor(), l.saved_component[e.id] = JSON.parse(JSON.stringify(e.value)), l.editor.html(""), l.container.removeClass("flix-hide"), l.container.find("span.flix-data-component").eq(e.id).replaceWith(i.get_insert_component(JSON.parse(JSON.stringify(e.value)))), i.get_functions();
    }, onDeleteComponent: function onDeleteComponent(e) {
      var t = JSON.parse(JSON.stringify(l.saved_component));delete t[e.id], l.saved_component = Object.values(l.saved_component), l.container.find("span.flix-data-component").eq(e.id).remove(), l.saved_component = Object.values(t), l.get_form_status();
    }, onCopyComponent: function onCopyComponent(e) {
      var t = JSON.parse(JSON.stringify(l.saved_component));t.splice(e.id + 1, 0, e.value), l.container.find("span.flix-data-component").eq(e.id).after(i.get_insert_component(JSON.parse(JSON.stringify(e.value)), !0)), l.container.find("span.flix-data-component").eq(e.id + 1).hide().slideDown(500), l.saved_component = t, i.get_functions();
    }, onChangePositionComponent: function onChangePositionComponent(e, t) {
      var n = JSON.parse(JSON.stringify(l.saved_component));delete n[e.id], l.container.find("span.flix-data-component").eq(e.id).remove(), n = Object.values(n), "down" == t && (n.splice(e.id + 1, 0, e.value), l.container.find("span.flix-data-component").eq(e.id).after(i.get_insert_component(JSON.parse(JSON.stringify(e.value)))), l.container.find("span.flix-data-component").eq(e.id + 1).hide().slideDown(500)), "up" == t && (n.splice(e.id - 1, 0, e.value), l.container.find("span.flix-data-component").eq(e.id - 1).before(i.get_insert_component(JSON.parse(JSON.stringify(e.value)))), l.container.find("span.flix-data-component").eq(e.id - 1).hide().slideDown(500)), n = Object.values(n), l.saved_component = n, i.get_functions();
    }, get_form_status: function get_form_status() {
      var t = "",
          a = [],
          o = Object.values(l.saved_component).length;o >= 2 && a.push("anzahl");var s = 0,
          r = 0,
          c = 0,
          f = 0;$.each(l.saved_component, function (e, t) {
        "email" == t.subtype && (s += 1, "true" != t.required && 1 != t.required || (c += 1)), "tel" == t.subtype && (r += 1), "terms" == t.type && (f += 1);
      }), 1 == s && a.push("email"), 1 == c && a.push("email_pflicht"), 1 == r && a.push("mobile"), 1 == f && a.push("terms");var d = o + "/2";o >= 2 && (d = o), -1 != a.indexOf("email") && -1 != a.indexOf("email_pflicht") && -1 != a.indexOf("anzahl") && r < 2 && 1 == f && (t += n.get_button({ label: l.save_btn, className: "flix-btn flix-btn-primary flix-btn-save-form", columnName: "12" })), t += '<div style="pointer-events: none">', t += n.get_checkbox_group({ id: "check", label: "Check-Liste für ein Formular", columnName: "12", required: !1, value: a, values: [{ label: "Mind. 2 Formular-Elemente (" + d + ")", value: "anzahl" }, { label: "1x E-Mailabfrage für Terminerinnerungen (" + s + ")", value: "email" }, { label: "1x E-Mailabfrage als Pflichtfeld (" + c + ")", value: "email_pflicht" }, { label: "1x Infos zum Datenschutz (" + f + ")", value: "terms" }, { label: "Optional 1x Handynummer-Abfrage für SMS Terminerinnerungen (" + r + ")", value: "mobile" }] }), t += "</div>", $(e).find(".flix-form-status").html(t), i.get_save_form();
    }, get_save_form: function get_save_form(e) {
      console.log(e);
    } };return l = Object.assign(l, t), this;
},
    flix_checkbox_radio = function flix_checkbox_radio(e) {
  this.build_checkbox = function () {
    $(e).find("input[type='checkbox']").unbind("change"), $(e).find("input[type='checkbox']").change(function () {
      $(this).attr("name");$(this).closest("label").find("i").toggleClass("flix-glyphicon-unchecked flix-glyphicon-check");
    });
  }, this.build_radio = function () {
    $(e).find("input[type='radio']").unbind("change"), $(e).find("input[type='radio']").change(function () {
      var t = $(this).attr("name");$(e).find("input[type='radio'][name='" + t + "']").closest("label").find("i").removeClass("flix-glyphicon-check").addClass("flix-glyphicon-unchecked"), $(this).closest("label").find("i").toggleClass("flix-glyphicon-unchecked flix-glyphicon-check");
    });
  };
},
    flix_colorpicker = (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
}, function (e, t) {
  var i = this;this.build = function () {
    $(e).find("[data-flix-colorpicker]").unbind("click"), $(e).find("[data-flix-colorpicker]").click(function () {
      return $("#flix-colorpicker").remove(), i.btn = $(this), i.form_elem = $(e).find("input[type='hidden'][name='" + i.btn.attr("data-flix-colorpicker") + "']"), i.selection = $(this).attr("data-flix-color-palette"), $("body").append(i.get_color_picker_container()), i.get_pick_color(), !1;
    });
  }, this.get_animate_color_picker = function () {
    var e = 100;$("#flix-colorpicker").find("a").each(function (t) {
      setTimeout(function () {
        $("#flix-colorpicker").find("a").eq(t).css("opacity", .5);
      }, e), setTimeout(function () {
        $("#flix-colorpicker").find("a").eq(t).css("opacity", 1);
      }, e + 50), e += 50;
    });
  }, this.get_pick_color = function () {
    $("#flix-colorpicker").find("a").unbind("click"), $("#flix-colorpicker").find("a").click(function () {
      var e = $(this).attr("data-flix-color");return i.btn.css("background-color", e), i.form_elem.val(e), "object" == (void 0 === t ? "undefined" : _typeof(t)) && "function" == typeof t.onChange && t.onChange(e), $("#flix-colorpicker").remove(), !1;
    }).mouseenter(function () {
      var e = $("#flix-colorpicker").find("a").index($(this));$("#flix-colorpicker").find("a").eq(e - 1).css({ transform: "scale(1.2)", "z-index": 2, transition: "transform 0.1s ease-in-out" }), $(this).css({ transform: "scale(1.5)", "z-index": 3, transition: "transform 0.1s ease-in-out" }), $("#flix-colorpicker").find("a").eq(e + 1).css({ transform: "scale(1.2)", "z-index": 2, transition: "transform 0.1s ease-in-out" });
    }).mouseleave(function () {
      var e = $("#flix-colorpicker").find("a").index($(this));$("#flix-colorpicker").find("a").eq(e - 1).css({ transform: "scale(1)", "z-index": 1 }), $(this).css({ transform: "scale(1)", "z-index": 1 }), $("#flix-colorpicker").find("a").eq(e + 1).css({ transform: "scale(1)", "z-index": 1 });
    });
  }, this.get_color_picker_container = function () {
    var e = "<div id='flix-colorpicker' style='z-index: 99999; position: fixed; top:0; left:0; width: 100vw; height: 100vh; overflow: auto; display: flex; justify-content:center;  align-items: center; align-content: flex-start; background-color: rgba(0,0,0,0.75);  flex-flow: row wrap; margin:0;'>",
        t = "";return $.each(i.settings.colors[i.selection], function (n, l) {
      t = "", l == i.form_elem.val() && (t = "transform: scale(1.5);"), e += '<a href="#" class="flix-form-control" data-flix-color="' + l + '" style=" ' + t + " width: calc(2.25rem + 2px); height: calc(2.25rem + 2px); background-color:" + l + '; margin:0; margin-top: 5px; margin-right: 5px; "></a>';
    }), e += "</div>";
  }, this.get_material = function () {
    var e = [];return $.each({ red: { 50: "#ffebee", 100: "#ffcdd2", 200: "#ef9a9a", 300: "#e57373", 400: "#ef5350", 500: "#f44336", 600: "#e53935", 700: "#d32f2f", 800: "#c62828", 900: "#b71c1c", a100: "#ff8a80", a200: "#ff5252", a400: "#ff1744", a700: "#d50000" }, pink: { 50: "#fce4ec", 100: "#f8bbd0", 200: "#f48fb1", 300: "#f06292", 400: "#ec407a", 500: "#e91e63", 600: "#d81b60", 700: "#c2185b", 800: "#ad1457", 900: "#880e4f", a100: "#ff80ab", a200: "#ff4081", a400: "#f50057", a700: "#c51162" }, purple: { 50: "#f3e5f5", 100: "#e1bee7", 200: "#ce93d8", 300: "#ba68c8", 400: "#ab47bc", 500: "#9c27b0", 600: "#8e24aa", 700: "#7b1fa2", 800: "#6a1b9a", 900: "#4a148c", a100: "#ea80fc", a200: "#e040fb", a400: "#d500f9", a700: "#aa00ff" }, deeppurple: { 50: "#ede7f6", 100: "#d1c4e9", 200: "#b39ddb", 300: "#9575cd", 400: "#7e57c2", 500: "#673ab7", 600: "#5e35b1", 700: "#512da8", 800: "#4527a0", 900: "#311b92", a100: "#b388ff", a200: "#7c4dff", a400: "#651fff", a700: "#6200ea" }, indigo: { 50: "#e8eaf6", 100: "#c5cae9", 200: "#9fa8da", 300: "#7986cb", 400: "#5c6bc0", 500: "#3f51b5", 600: "#3949ab", 700: "#303f9f", 800: "#283593", 900: "#1a237e", a100: "#8c9eff", a200: "#536dfe", a400: "#3d5afe", a700: "#304ffe" }, blue: { 50: "#e3f2fd", 100: "#bbdefb", 200: "#90caf9", 300: "#64b5f6", 400: "#42a5f5", 500: "#2196f3", 600: "#1e88e5", 700: "#1976d2", 800: "#1565c0", 900: "#0d47a1", a100: "#82b1ff", a200: "#448aff", a400: "#2979ff", a700: "#2962ff" }, lightblue: { 50: "#e1f5fe", 100: "#b3e5fc", 200: "#81d4fa", 300: "#4fc3f7", 400: "#29b6f6", 500: "#03a9f4", 600: "#039be5", 700: "#0288d1", 800: "#0277bd", 900: "#01579b", a100: "#80d8ff", a200: "#40c4ff", a400: "#00b0ff", a700: "#0091ea" }, cyan: { 50: "#e0f7fa", 100: "#b2ebf2", 200: "#80deea", 300: "#4dd0e1", 400: "#26c6da", 500: "#00bcd4", 600: "#00acc1", 700: "#0097a7", 800: "#00838f", 900: "#006064", a100: "#84ffff", a200: "#18ffff", a400: "#00e5ff", a700: "#00b8d4" }, teal: { 50: "#e0f2f1", 100: "#b2dfdb", 200: "#80cbc4", 300: "#4db6ac", 400: "#26a69a", 500: "#009688", 600: "#00897b", 700: "#00796b", 800: "#00695c", 900: "#004d40", a100: "#a7ffeb", a200: "#64ffda", a400: "#1de9b6", a700: "#00bfa5" }, green: { 50: "#e8f5e9", 100: "#c8e6c9", 200: "#a5d6a7", 300: "#81c784", 400: "#66bb6a", 500: "#4caf50", 600: "#43a047", 700: "#388e3c", 800: "#2e7d32", 900: "#1b5e20", a100: "#b9f6ca", a200: "#69f0ae", a400: "#00e676", a700: "#00c853" }, lightgreen: { 50: "#f1f8e9", 100: "#dcedc8", 200: "#c5e1a5", 300: "#aed581", 400: "#9ccc65", 500: "#8bc34a", 600: "#7cb342", 700: "#689f38", 800: "#558b2f", 900: "#33691e", a100: "#ccff90", a200: "#b2ff59", a400: "#76ff03", a700: "#64dd17" }, lime: { 50: "#f9fbe7", 100: "#f0f4c3", 200: "#e6ee9c", 300: "#dce775", 400: "#d4e157", 500: "#cddc39", 600: "#c0ca33", 700: "#afb42b", 800: "#9e9d24", 900: "#827717", a100: "#f4ff81", a200: "#eeff41", a400: "#c6ff00", a700: "#aeea00" }, yellow: { 50: "#fffde7", 100: "#fff9c4", 200: "#fff59d", 300: "#fff176", 400: "#ffee58", 500: "#ffeb3b", 600: "#fdd835", 700: "#fbc02d", 800: "#f9a825", 900: "#f57f17", a100: "#ffff8d", a200: "#ffff00", a400: "#ffea00", a700: "#ffd600" }, amber: { 50: "#fff8e1", 100: "#ffecb3", 200: "#ffe082", 300: "#ffd54f", 400: "#ffca28", 500: "#ffc107", 600: "#ffb300", 700: "#ffa000", 800: "#ff8f00", 900: "#ff6f00", a100: "#ffe57f", a200: "#ffd740", a400: "#ffc400", a700: "#ffab00" }, orange: { 50: "#fff3e0", 100: "#ffe0b2", 200: "#ffcc80", 300: "#ffb74d", 400: "#ffa726", 500: "#ff9800", 600: "#fb8c00", 700: "#f57c00", 800: "#ef6c00", 900: "#e65100", a100: "#ffd180", a200: "#ffab40", a400: "#ff9100", a700: "#ff6d00" }, deeporange: { 50: "#fbe9e7", 100: "#ffccbc", 200: "#ffab91", 300: "#ff8a65", 400: "#ff7043", 500: "#ff5722", 600: "#f4511e", 700: "#e64a19", 800: "#d84315", 900: "#bf360c", a100: "#ff9e80", a200: "#ff6e40", a400: "#ff3d00", a700: "#dd2c00" }, brown: { 50: "#efebe9", 100: "#d7ccc8", 200: "#bcaaa4", 300: "#a1887f", 400: "#8d6e63", 500: "#795548", 600: "#6d4c41", 700: "#5d4037", 800: "#4e342e", 900: "#3e2723" }, grey: { 50: "#fafafa", 100: "#f5f5f5", 200: "#eeeeee", 300: "#e0e0e0", 400: "#bdbdbd", 500: "#9e9e9e", 600: "#757575", 700: "#616161", 800: "#424242", 900: "#212121" }, bluegrey: { 50: "#eceff1", 100: "#cfd8dc", 200: "#b0bec5", 300: "#90a4ae", 400: "#78909c", 500: "#607d8b", 600: "#546e7a", 700: "#455a64", 800: "#37474f", 900: "#263238" } }, function (t, i) {
      $.each(i, function (t, i) {
        e.push(i);
      });
    }), e;
  }, i.settings = { colors: { material_tiny: ["#FFFFFF", "#D32F2F", "#C2185B", "#7B1FA2", "#512DA8", "#303F9F", "#1976D2", "#0288D1", "#0097A7", "#00796B", "#388E3C", "#689F38", "#AFB42B", "#FBC02D", "#FFA000", "#F57C00", "#E64A19", "#5D4037", "#616161", "#455A64", "#000000"], material: i.get_material() } };
}),
    flix_html_form = function flix_html_form(e) {
  var t = this;this.build = function () {
    var t = new flix_form_elements(),
        i = "<div class='flix-container'><div class='flix-row'>";i += '<div class="flix-calendar">Pop-Container</div>', i += '<div class="flix-calendar-2" data-flix-language="de"></div>', i += "</div>", i += "<form>", i += '<div class="flix-row">', i += t.get_text({ id: "Test", label: "Test1234", subtype: "email", columnName: "6", description: "", required: !0 }), i += t.get_toggleswitch({ value: 1, values: [{ label: "Ja", value: "yes" }, { label: "Nein", value: "no" }], id: "Test2", placeholder: "Tedasddsa", label: "Test1234", columnName: "2", description: "", required: !0 }), i += t.get_select({ id: "Test33", placeholder: "Tedasddsa", label: "Test1234", columnName: "3", description: "", required: !1, values: [{ label: "Test1234", value: "test" }, { label: "Super", value: "adsdsa" }] }), i += t.get_select({ id: "Test33", placeholder: "Tedasddsa", label: "Test1234", columnName: "3", description: "", required: !1, values: [{ label: "Test1234", value: "test" }, { label: "Super", value: "adsdsa" }] }), i += t.get_select({ id: "Test33", placeholder: "Tedasddsa", label: "Test1234", columnName: "3", description: "", required: !1, values: [{ label: "Test1234", value: "test" }, { label: "Super", value: "adsdsa" }] }), i += t.get_checkbox_group({ id: "Btn_Grp", placeholder: "Tedasddsa", label: "Test1234", columnName: "3", description: "", required: !1, values: [{ label: "Test1234", value: "test" }, { label: "Super", value: "adsdsa" }] }), i += t.get_radio_group({ id: "Btn_Grp_opt", placeholder: "Tedasddsa", label: "Option", columnName: "3", description: "", required: !0, values: [{ label: "Test1234", value: "opt1" }, { label: "Super", value: "opt2" }, { label: "Super 1234", value: "opt2232" }] }), i += t.get_colorpicker({ id: "col", placeholder: "Tedasddsa", label: "Test1234", columnName: "3", description: "", required: !1, value: "#ff0000" }), i += t.get_textarea({ id: "Textarea", placeholder: "Tedasddsa", label: "Test1234", columnName: "3", description: "", required: !1 }), i += t.get_button({ label: "Absenden", subtype: "submit", columnName: "12", description: "" }), i += "</div>", i += "</form>", i += "</div>", i += "</div>", $(e).html(i), new flix_colorpicker($(e)).build();var n = new flix_checkbox_radio($(e));n.build_checkbox(), n.build_radio(), new flix_toggleswitch($(e)).build();var l = new flix_datepicker($(e).find(".flix-calendar"), { type: "eventpicker", date: "2019-12-01", view: "h", fixed_view: !1, pop: !0, events: [{ begin: "2019-12-01 07:00:00", end: "2019-12-03 14:00:00", style: "border-left: 3px solid red;", value: { ID: 1, name: "test", label: "hallo" } }, { begin: "2019-12-05 09:00:00", end: "2019-12-06 09:45:00", style: "border-left: 3px solid green;", value: { ID: 2, name: "test", label: "hallo 123" } }, { begin: "2019-12-05 08:00:00", end: "2019-12-06 09:45:00", style: "border-left: 3px solid yellow;", value: { ID: 3, name: "test", label: "hallo 458" } }, { begin: "2018-01-07 00:00:00", end: "2018-01-07 23:59:00", value: { ID: 4, name: "test", label: "super" } }], get_click_me: function get_click_me(t) {
        var i = l.get_event_by_id(t);console.log(i), $(e).find(".flix-calendar").html(i.value.label);
      } });l.build();var a = new flix_datepicker($(e).find(".flix-calendar-2"), { type: "datepicker", date: "2020-08-06", view: "d", fixed_view: !1, start: "2020-08-06 00:00:00", pop: !1, color: "green", settings: { default_label: "<div class='flix-btn flix-btn-xs flix-btn-default'>Termin vormerken</div>", no_entries: "Keine Termine verfügbar", style: {} }, include: { weekdays: [["23:00", "24:00", 40], ["06:00", "12:00", 30], ["10:00", "19:00", 30], ["05:00", "20:00", 30], ["07:00", "14:00", 30]], buffer: [15, 10, 0, 30, 10], period: [3, "weeks"] }, exclude: { weekdays: [[["12:00", "13:00"]], [["12:00", "13:00"]], [["00:00", "09:00"], ["12:00", "13:00"]], [["12:00", "13:00"]], [["12:00", "13:00"]]], dates: [["2020-08-27 00:00", "2020-08-27 10:00"], ["2020-08-27 18:00", "2020-08-27 23:59"]] }, get_click_me: function get_click_me(e) {
        var t = a.get_event_by_id(e);console.log(t), alert("TEST");
      } });(a = new flix_datepicker($(e).find(".flix-calendar-2"), { type: "datepicker", view: "l", exclude: { weekdays: [], dates: [["2019-12-06 00:00:00", "2019-12-06 23:59:59"], ["2019-12-24 00:00:00", "2019-12-24 23:59:59"], ["2019-12-25 00:00:00", "2019-12-25 23:59:59"], ["2019-12-26 00:00:00", "2019-12-26 23:59:59"], ["2019-12-31 00:00:00", "2019-12-31 23:59:59"], ["2020-01-01 00:00:00", "2020-01-01 23:59:59"], ["2020-02-24 00:00:00", "2020-02-24 23:59:59"], ["2020-02-25 00:00:00", "2020-02-25 23:59:59"], ["2020-02-26 00:00:00", "2020-02-26 23:59:59"], ["2020-04-05 00:00:00", "2020-04-05 23:59:59"], ["2020-04-09 00:00:00", "2020-04-09 23:59:59"], ["2020-04-10 00:00:00", "2020-04-10 23:59:59"], ["2020-04-11 00:00:00", "2020-04-11 23:59:59"], ["2020-04-12 00:00:00", "2020-04-12 23:59:59"], ["2020-05-01 00:00:00", "2020-05-01 23:59:59"], ["2020-05-21 00:00:00", "2020-05-21 23:59:59"], ["2020-06-01 00:00:00", "2020-06-01 23:59:59"], ["2020-06-11 00:00:00", "2020-06-11 23:59:59"], ["2020-10-03 00:00:00", "2020-10-03 23:59:59"], ["2020-12-06 00:00:00", "2020-12-06 23:59:59"], ["2020-12-24 00:00:00", "2020-12-24 23:59:59"], ["2020-12-25 00:00:00", "2020-12-25 23:59:59"], ["2020-12-26 00:00:00", "2020-12-26 23:59:59"], ["2020-12-31 00:00:00", "2020-12-31 23:59:59"]] }, include: { period: ["2", "weeks"], buffer: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 }, weekdays: [["08:00", "18:00", "Danke"], ["08:00", "18:00", "Danke"], ["08:00", "18:00", "Danke"], ["08:00", "18:00", 60], ["08:00", "18:00", 60]] }, max_applicants: { 0: 1, 1: 1, 2: 1, 3: 1, 4: 1 }, title: "adsdas", start: "", end: "", form: [{ id: 1568892013881, type: "header", subtype: "h2", label: "Termin-Buchungs-Formular", columnName: "12", description: "", required: !1 }, { id: 1568892015112, type: "paragraph", subtype: "p", description: "Um eine Terminbuchung vormerken zu lassen, werden folgende Angaben benötigt. Alle Pflichtfelder sind mit Sternchen markiert. Nach dem Ausfüllen des Formulars wird direkt vom System eine Verifizierungs-Email gesendet. Eine endgültige Terminzusage / Absage kann erst nach erfolgreicher Verifizierung erfolgen.", columnName: "12", required: !1 }, { id: 1568892014991, type: "header", subtype: "h3", label: "Die benötigten Angaben", columnName: "12", description: "", required: !1 }, { id: 1568892017842, type: "text", subtype: "text", label: "Vorname", columnName: "6", description: "", required: !0 }, { id: 1568892021385, type: "text", subtype: "text", label: "Nachname", columnName: "6", description: "", required: !0 }, { id: 1568892015185, type: "text", subtype: "email", label: "E-Mailadresse", columnName: "6", description: "für Terminerinnerungen", required: !0 }, { id: 1568892019555, type: "text", subtype: "tel", label: "Handynummer", columnName: "6", description: "für Terminerinnerungen (optional)", required: !1 }, { id: 1568892018421, type: "textarea", label: "Freitextfeld für Anmerkungen / Infos an den Dienstleister", columnName: "12", description: "optional", required: !1 }, { id: 1568892014589, type: "header", subtype: "h3", label: "Datenschutz", columnName: "12", description: "", required: !1 }, { id: 1568892016557, type: "terms", label: "Datenschutz-Informationen (Bitte bestätigen)", columnName: "12", required: !0, description: "Sie haben die Möglichkeit jederzeit Ihre Einwilligung zur Verwendung der persönlichen Daten zu widerrufen.", values: [{ label: "Ich stimme der Erhebung meiner personenbezogenen Daten (siehe Formular) zu", value: "Einwilligung personenbezogener Daten" }, { label: "Ich stimme der Kontaktaufnahme zwecks Terminerinnerungen zu", value: "Kontaktaufnahme Terminerinnerungen" }, { label: "Ich bestätige die Richtigkeit meiner Angaben", value: "Richtigkeit Angaben" }] }] })).build();
  }, this.get_handle_form = function (i) {
    $(e).find("form").submit(function () {
      var e = $(this).serializeArray();e = t.get_generate_data(e);var n = t.get_check_required(e);return 0 == (n = t.get_check_terms(e, n)) ? i(e) : (t.get_mark_form(e, n), t.get_animation_false()), !1;
    });
  }, this.get_animation_false = function () {
    $(e).addClass("flix-animated flix-shake"), setTimeout(function () {
      $(e).removeClass("flix-animated flix-shake");
    }, 1e3);
  }, this.get_mark_form = function (t, i) {
    return $(e).find("label.flix-text-success,label.flix-text-danger").removeClass("flix-text-success flix-text-danger"), !!i && ($.each(t, function (t, i) {
      i && i.length && $(e).find("label[for='" + t + "']").addClass("flix-text-success");
    }), $.each(i, function (t, i) {
      $(e).find("label[for='" + i + "']").addClass("flix-text-danger");
    }), !0);
  }, this.get_check_terms = function (t, i) {
    var n = $(e).find("form").find("[data-flix-terms]");return 0 == n.length ? i : (0 == i && (i = []), n.each(function () {
      0 == $(this).is(":checked") && i.push($(this).attr("data-flix-terms"));
    }), 0 != i.length && i);
  }, this.get_check_required = function (e) {
    var i = t.get_required_data(),
        n = [];return $.each(i, function (t, i) {
      void 0 !== e[i] && "" != e[i] || n.push(i);
    }), !!n.length && n;
  }, this.get_generate_data = function (e) {
    var t = {};return $.each(e, function (e, i) {
      "false" == i.value && (i.value = !1), "true" == i.value && (i.value = !0), -1 != i.name.indexOf("[]") ? (void 0 === t[i.name.replace("[]", "")] && (t[i.name.replace("[]", "")] = []), t[i.name.replace("[]", "")].push(i.value)) : t[i.name] = i.value;
    }), t;
  }, this.get_required_data = function () {
    var t = [];return $(e).find("label [data-flix-required]").each(function () {
      t.push($(this).attr("data-flix-required"));
    }), t;
  };
},
    flix_form_elements = (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
}, function () {
  var e = this;this.get_functions = function (e) {
    new flix_colorpicker($(e)).build();var t = new flix_checkbox_radio($(e));t.build_checkbox(), t.build_radio(), new flix_toggleswitch($(e)).build(), new flix_select2($(e)).build();
  }, this.get_form_element = function (t) {
    var i = "";switch (t.type) {case "text":
        i += e.get_text(t);break;case "textarea":
        i += e.get_textarea(t);break;case "radio_group":
        i += e.get_radio_group(t);break;case "checkbox_group":
        i += e.get_checkbox_group(t);break;case "select":
        i += e.get_select(t);break;case "header":
        i += e.get_header(t);break;case "paragraph":
        i += e.get_paragraph(t);break;case "terms":
        i += e.get_terms(t);break;case "button":
        i += e.get_button(t);}return i;
  }, this.get_text = function (t) {
    var i = e.get_default_settings(t),
        n = "";return n += e.get_label(i), n += '<input id="' + i.id + '" name="' + i.id + '" type="' + i.subtype + '" value="' + i.value + '" class="flix-form-control" placeholder="' + i.placeholder + '" ' + e.get_readonly(i) + ">", n += e.get_description(i), n = e.get_column(i, n);
  }, this.get_button = function (t) {
    void 0 === t.subtype && (t.subtype = "submit");var i = e.get_default_settings(t);i.className && "" != i.className || (i.className = "flix-btn flix-btn-default");var n = "";return n += '<button type="' + i.subtype + '" class="' + i.className + '">' + i.label + "</button>", n += e.get_description(i), n = e.get_column(i, n);
  }, this.get_header = function (t) {
    var i = e.get_default_settings(t),
        n = "";return n += "<" + i.subtype + ' class="flix-html-html flix-html-' + i.subtype + '">' + i.label + "</" + i.subtype + ">", n += e.get_description(i), n = e.get_column(i, n);
  }, this.get_paragraph = function (t) {
    var i = e.get_default_settings(t),
        n = "";return n += "<" + i.subtype + ' class="flix-html-html flix-html-' + i.subtype + '">' + e.nl2br(i.description) + "</" + i.subtype + ">", n = e.get_column(i, n);
  }, this.get_checkbox_group = function (t) {
    var i = e.get_default_settings(t),
        n = "",
        l = [];return n += e.get_label(i), $.each(t.values, function (e, t) {
      l = ["unchecked", ""], "string" != typeof i.value && "number" != typeof i.value || i.value != t.value || (l = ["check", "checked='true'"]), "object" == _typeof(i.value) && -1 != i.value.indexOf(t.value) && (l = ["check", "checked='true'"]), "string" == typeof i.id && -1 != i.id.indexOf("[]") && (i.id = i.id.replace("[]", "")), n += "<div>", n += '<label class="flix-html-html"><i class="flix-glyphicon flix-glyphicon-' + l[0] + '" style="vertical-align:text-top;"></i> ' + t.label + '<input type="checkbox" class="flix-hide" name="' + i.id + '[]" value="' + t.value + '" ' + l[1] + "></label>", n += "</div>";
    }), n += e.get_description(i), n = e.get_column(i, n);
  }, this.get_terms = function (t) {
    var i = e.get_default_settings(t),
        n = "",
        l = [];return n += e.get_label(i), $.each(t.values, function (e, t) {
      l = ["unchecked", ""], "string" != typeof i.value && "number" != typeof i.value || i.value != t.value || (l = ["check", "checked='true'"]), "object" == _typeof(i.value) && -1 != i.value.indexOf(t.value) && (l = ["check", "checked='true'"]), "string" == typeof i.id && -1 != i.id.indexOf("[]") && (i.id = i.id.replace("[]", "")), n += "<div>", n += '<label class="flix-html-html"><i class="flix-glyphicon flix-glyphicon-' + l[0] + '" style="vertical-align:text-top;"></i> ' + t.label + '<input type="checkbox" data-flix-terms="' + i.id + '" class="flix-hide" name="' + i.id + '[]" value="' + t.value + '" ' + l[1] + "></label>", n += "</div>";
    }), n += e.get_description(i), n = e.get_column(i, n);
  }, this.get_radio_group = function (t) {
    var i,
        n = e.get_default_settings(t),
        l = "";return l += e.get_label(n), $.each(t.values, function (e, t) {
      i = ["unchecked", ""], "string" != typeof n.value && "number" != typeof n.value || n.value != t.value || (i = ["check", "checked='checked'"]), "object" == _typeof(n.value) && -1 != n.value.indexOf(t.value) && (i = ["check", "checked='checked'"]), l += "<div>", l += '<label class="flix-html-html"><i class="flix-glyphicon flix-glyphicon-' + i[0] + '" style="vertical-align:text-top;"></i> ' + t.label + '<input type="radio" class="flix-hide" name="' + n.id + '" value="' + t.value + '" ' + i[1] + "></label>", l += "</div>";
    }), l += e.get_description(n), l = e.get_column(n, l);
  }, this.get_textarea = function (t) {
    var i = e.get_default_settings(t),
        n = "";return n += e.get_label(i), n += '<textarea id="' + i.id + '" name="' + i.id + '" class="flix-form-control" placeholder="' + i.placeholder + '" ' + e.get_readonly(i) + ">" + i.value + "</textarea>", n += e.get_description(i), n = e.get_column(i, n);
  }, this.get_select2 = function (t) {
    var i = e.get_default_settings(t),
        n = "";n += e.get_label(i);var l = new flix_select2();return l.data = i, n += l.get_html(), n += e.get_description(i), n = e.get_column(i, n);
  }, this.get_select = function (t) {
    var i = e.get_default_settings(t),
        n = "";return n += e.get_label(i), n += '<select id="' + i.id + '" name="' + i.id + '" class="flix-form-control" placeholder="' + i.placeholder + '" ' + e.get_readonly(i) + ">", $.each(i.values, function (t, l) {
      if ("object" == (void 0 === l ? "undefined" : _typeof(l)) && "object" == _typeof(l.value)) return t != Object.keys(i.values)[0] && (n += "</optgroup>"), n += '<optgroup label="' + l.label + '">', $.each(l.value, function (t, l) {
        n += e.get_select_option(i, { label: t, value: l });
      }), !0;n += e.get_select_option(i, l);
    }), n += "</select>", n += e.get_description(i), n = e.get_column(i, n);
  }, this.get_select_option = function (e, t) {
    var i = "",
        n = "";return "string" != typeof e.value && "number" != typeof e.value || e.value != t.value || (i = "selected='true'"), "object" == _typeof(e.value) && -1 != e.value.indexOf(t.value) && (i = "selected='true'"), n += '<option value="' + t.value + '" ' + i + ">" + t.label + "</option>";
  }, this.get_toggleswitch = function (t) {
    var i = e.get_default_settings(t),
        n = "";n += e.get_label(i), n += '<div class="flix-btn-group flix-html-html" data-flix-toggleswitch="' + i.id + '">';var l = ['<i class="flix-glyphicon flix-glyphicon-ok"></i>', '<i class="flix-glyphicon flix-glyphicon-remove"></i>'],
        a = [1, 0];"object" == _typeof(t.values) && "object" == _typeof(t.values[0]) && void 0 !== t.values[0].label && (l[0] = t.values[0].label), "object" == _typeof(t.values) && "object" == _typeof(t.values[1]) && void 0 !== t.values[1].label && (l[1] = t.values[1].label), "object" == _typeof(t.values) && "object" == _typeof(t.values[0]) && void 0 !== t.values[0].value && (a[0] = t.values[0].value), "object" == _typeof(t.values) && "object" == _typeof(t.values[1]) && void 0 !== t.values[1].value && (a[1] = t.values[1].value);var o = "flix-btn flix-btn-default",
        s = o;return t.value == a[0] && (s = "flix-btn flix-btn-info"), n += '<span class="' + s + '" data-flix-value="' + a[0] + '">' + l[0] + "</span>", s = o, t.value != a[0] && (s = "flix-btn flix-btn-info"), n += '<span class="' + s + '" data-flix-value="' + a[1] + '">' + l[1] + "</span>", n += '<input id="' + i.id + '" name="' + i.id + '" type="hidden" value="' + i.value + '">', n += "</div>", n += e.get_description(i), n = e.get_column(i, n);
  }, this.get_toggleswitch_ = function (t) {
    var i = e.get_default_settings(t),
        n = "";return "border: transparent; background-color: transparent; webkit-box-shadow: none; box-shadow: none; margin:0;", n += e.get_label(i), n += '<div class="flix-input-group">', n += '<span class="flix-input-group-addon flix-html-html" style="border: transparent; background-color: transparent; ">Ja</span>', n += '<input id="' + i.id + '" name="' + i.id + '" type="range" min="0" max="1" step="1" value="' + i.value + '" class="flix-html-html flix-form-control" style="border: transparent; background-color: transparent; webkit-box-shadow: none; box-shadow: none; margin:0;" placeholder="' + i.placeholder + '" ' + e.get_readonly(i) + ">", n += '<span class="flix-input-group-addon flix-html-html" style="border: transparent; background-color: transparent; ">Nein</span>', n += "</div>", n += e.get_description(i), n = e.get_column(i, n);
  }, this.build_toggleswitch = function () {
    $(that).find("input[type='range']").each(function () {
      $(this).removeClass("active"), 1 == $(this).val() && $(this).addClass("active");
    }), $(that).find("input[type='range']").change(function () {
      $(this).removeClass("active"), 1 == $(this).val() && $(this).addClass("active");
    });
  }, this.get_colorpicker = function (t) {
    var i = "",
        n = e.get_default_settings(t);return i += e.get_label(n), i += '<a href="#" class="flix-form-control" data-flix-colorpicker="' + n.id + '" data-flix-color-palette="material" style="width: calc(2.25rem + 2px); background-color:' + t.value + ';"></a>', i += '<input id="' + n.id + '" name="' + n.id + '" type="hidden" value="' + n.value + '">', i += e.get_description(n), i = e.get_column(n, i);
  }, this.get_column = function (e, t) {
    if (!e.columnName || "" == e.columnName) return t;e.columnName = 1 * e.columnName, e.columnName < 0 && (e.columnName = -1 * e.columnName);var i = "";switch (i += '<div class="flix-col-md-' + e.columnName + '">', e.type) {case "header":
        i += t;break;default:
        i += '<div class="flix-form-group">', i += t, i += "</div>";}return i += "</div>";
  }, this.get_readonly = function (e) {
    var t = "";return e.readonly && (t = "readonly='true'"), t;
  }, this.get_label = function (e) {
    if (!e.label) return "";var t = "";return e.required && "" != e.required && 0 != e.required && (t = ' <span data-flix-required="' + e.id + '" style="color: red;">*</span>'), '<label class="flix-html-label flix-html-html" for="' + e.id + '">' + e.label + t + "</label>";
  }, this.get_description = function (e) {
    return e.description && "" != e.description ? (e.description = '<i class="flix-glyphicon flix-glyphicon-info-sign"></i> ' + e.description, '<div style="margin-top: 7px;"><small class="flix-html-small flix-small flix-html-html">' + e.description + "</small></div>") : "&nbsp;";
  }, this.get_default_settings = function (e) {
    var t = { id: !1, type: "text", subtype: "text", value: "", readonly: !1, values: !1, label: "", columnName: "12", className: "", required: !1, description: "", placeholder: "" };return t = Object.assign(t, e);
  }, this.nl2br = function (e, t) {
    return null == e ? "" : (e + "").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1" + (t || void 0 === t ? "<br />" : "<br>") + "$2");
  };
}),
    flix_select2 = (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
}, function (e) {
  var t = this;this.build = function () {
    $(e).find(".flix-select2").click(function () {
      var e = $(this);setTimeout(function () {
        e.find("input[type='text']").focus();
      }, 500);
    }), $(e).find(".flix-select2").find("input[type='text']").unbind("keypress"), $(e).find(".flix-select2").find("input[type='text']").keypress(function (i) {
      if (13 == i.which) {
        var n = $(this).val(),
            l = $(this).closest(".flix-select2"),
            a = $(e).find(".flix-select2").index(l);return t.data = {}, t.data.value = [], void 0 === t.data.id && (t.data.id = l.attr("data-id")), l.find("input[type='checkbox']").each(function () {
          t.data.value.push($(this).val());
        }), t.data.value.push(n), l.replaceWith(t.get_html({ open: !0 })), $(e).find(".flix-select2").eq(a).addClass("flix-open"), setTimeout(function () {
          $(e).find(".flix-select2").eq(a).find("input[type='text']").focus();
        }, 500), t.build(), !1;
      }
    }), $(e).find(".flix-select2").find(".flix-glyphicon-remove").unbind("click"), $(e).find(".flix-select2").find(".flix-glyphicon-remove").click(function () {
      var i = $(this).closest(".flix-select2"),
          n = $(e).find(".flix-select2").index(i),
          l = $(this).attr("data-remove");return t.data = {}, t.data.value = [], void 0 === t.data.id && (t.data.id = i.attr("data-id")), i.find("input[type='checkbox']").each(function () {
        $(this).val() != l && t.data.value.push($(this).val());
      }), i = i.replaceWith(t.get_html({ open: !0 })), $(e).find(".flix-select2").eq(n).addClass("flix-open"), setTimeout(function () {
        $(e).find(".flix-select2").eq(n).find("input[type='text']").focus();
      }, 500), t.build(), !1;
    });
  }, this.get_html = function (e) {
    var i = "",
        n = [];n = "" == t.data.value ? [] : "string" == typeof t.data.value ? [t.data.value] : "object" != t.data.value ? Object.values(t.data.value) : [t.data.value];var l = "";return "object" == (void 0 === e ? "undefined" : _typeof(e)) && void 0 !== e.open && 1 == e.open && (l = "flix-open"), i += '<div class="flix-dropdown flix-select2 ' + l + '" data-id="' + t.data.id + '">', i += "<a href='#' class='flix-btn flix-btn-default flix-btn-block flix-dropdown-toggle flix-tooltip' data-tooltip='" + n.length + " Einträge' data-toggle='dropdown' aria-expanded='false'>", i += "<span class='flix-pull-left flix-html-small flix-small'>" + n.length + "</span>", i += "<span class='flix-pull-right'><i class='flix-glyphicon flix-glyphicon-chevron-down'></i></span>", i += "<div class='flix-clearfix'></div>", i += "</a>", i += "<div class='flix-clearfix'></div>", i += '<ul class="flix-dropdown-menu">', $.each(n, function (e, t) {
      i += '<li class="flix-html-li"><a href="#" class="flix-html-small flix-html-a" style="white-space: normal;"><i class="flix-glyphicon flix-glyphicon-remove" data-remove="' + t + '"></i> ' + t + "</a></li>";
    }), i += '<li class="flix-dropdown-header"><input type="text" class="flix-form-control" placeholder="Eintrag"></li>', i += "</ul>", i += '<div class="flix-hide">', $.each(n, function (e, n) {
      n.length && (i += '<input type="checkbox" name="' + t.data.id + '[]" value="' + n + '" checked="true">');
    }), i += "</div>", i += "</div>";
  };
}),
    flix_toggleswitch = (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
}, function (e, t) {
  var i = this;this.build = function () {
    $(e).find("[data-flix-toggleswitch]").each(function () {
      i.get_switch_function($(this));
    });
  }, this.get_switch_function = function (e) {
    e.find("span.flix-btn").unbind("click"), e.find("span.flix-btn").click(function () {
      return e.find("span.flix-btn").toggleClass("flix-btn-default flix-btn-info"), e.find("input[type='hidden']").val(e.find("span.flix-btn.flix-btn-info").attr("data-flix-value")), "object" == (void 0 === t ? "undefined" : _typeof(t)) && "function" == typeof t.onChange && t.onChange(e.find("input[type='hidden']").val()), !1;
    });
  }, this.set_status = function (i) {
    var n = $(e);n.find("[data-flix-value]").removeClass("flix-btn-info").addClass("flix-btn-default"), n.find("[data-flix-value='" + i + "']").addClass("flix-btn-info").removeClass("flix-btn-default"), n.find("input[type='hidden']").val(i), "object" == (void 0 === t ? "undefined" : _typeof(t)) && "function" == typeof t.onReady && t.onReady(n.find("input[type='hidden']").val());
  };
});
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var flix_membership_check = function flix_membership_check(e, i, t) {
  var n = this;n.lang = $(e).attr("data-flix-language");var l = t.post_url + "?l=" + n.lang;t.set_post_url(l), this.build = function () {
    var e = { user: localStorage.getItem("flix_login") };$.post(FLIX_URLS.api + n.lang + "/assistent/check", e).success(function (e) {
      e.first_name ? n.callback() : (t.get_sweetalert(function () {
        swal.fire({ title: "Bitte vorerst Profilinformationen vervollständigen", type: "warning", timer: 3e3, showConfirmButton: !1 });
      }), n.get_load_user_settings($(this), e.html));
    });
  }, this.get_load_user_settings = function (i, l) {
    var a = { onSuccess: function onSuccess(e) {
        e.container.closest(".flix-window").remove(), n.callback();
      } };t.get_new_section($(e), { html: '<div data-flix-user data-flix-language="' + $(e).attr("data-flix-language") + '"></div>', onReady: function onReady(e) {
        new flix_user(e.container.find("[data-flix-user]"), e.flix_setup_code, e.flix_parent, a).build();
      } });
  };
},
    flix_membership_list = function flix_membership_list(e, i, t) {
  var n = this;this.build = function () {
    n.get_membership(function (e) {
      n.user = e, n.show();
    });
  }, this.show = function () {
    n.filter = 0, "premium" == n.user.membership && (n.filter = 1);var l = new flix_form_elements($(e)),
        a = "";a += '<div class="flix-text-center">', n.filter ? a += l.get_header({ subtype: "h4", label: "Aktuelle Mitgliedschaft<br>bis " + n.user.end_date }) : a += l.get_header({ subtype: "h4", label: "Aktuelle Mitgliedschaft" }), a += "</div>", a += '<div class="flix-col-md-12 flix-membership-overview" data-flix-language="' + $(e).attr("data-flix-language") + '"></div>', $(e).html(a);var r = new flix_membership_pay($(e).find(".flix-membership-overview"), i, t);r.filter = n.filter, r.payment = !1, r.get_plans(), r.get_cell(12), r.get_payment(), r.get_click_payment(), r.run();
  }, this.get_membership = function (i) {
    $.post(FLIX_URLS.api + $(e).attr("data-flix-language") + "/assistent/check", { user: localStorage.getItem("flix_login") }).success(function (e) {
      i(e);
    });
  };
},
    flix_membership = function flix_membership(e, i, t) {
  var n = $(e).attr("data-flix-language");this.build = function () {
    $(e).html(t.get_loader()), $.post(FLIX_URLS.api + n + "/assistent/check", { user: localStorage.getItem("flix_login") }).success(function (n) {
      "premium" != n.membership ? new flix_membership_pay(e, i, t).build() : new flix_membership_list(e, i, t).build();
    });
  };
},
    _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
},
    flix_membership_pay = function flix_membership_pay(e, i, t) {
  var n = this,
      l = $(e).attr("data-flix-language"),
      a = new flix_payment(e, i, t);return a.client_id = a.paypal_access.production, this.build = function () {
    n.get_plans(), n.get_payment(), n.get_click_payment(), n.get_cell(6), n.get_calculate_tax(), n.get_handle_pay(), n.run();
  }, this.run = function () {
    a.build();
  }, this.get_plans = function () {
    return a.plans = { unit: .19, tax: .19, currency: "EUR", locale: "de_DE", prices: [{ amount: 0, name: "Freemium", info: ["Basis-Funktionen von Terminflix nutzbar", "maximal <b>ein Terminformular</b> je Account / Firma / Unternehmung", "Termine maximal <b>zwei</b> Wochen im Voraus buchbar für Kunden", "kein persönlicher Support", "kein Ressourcen-Management", "kein Gastzugang für Mitarbeiter", "keine Frei-Credits für automatische Termin-Erinnerungen inklusive"] }, { amount: 20, name: "Premium", discount: 0, tax: 0, membership: "+ 1 months", info: ["alle Funktionen von Terminflix nutzbar", "bis zu <b>fünf Terminformulare</b> je Account/ Firma/ Unternehmung", "Termine, für Ihre Kunden, bis <b>12 Monate</b> im Voraus buchbar", "Persönlicher Support per Telefon, Email und Support-Chat", "<b>Einrichtungs-Service</b> per Telefon", "<b>Design-Service</b> für Visitenkarten- und Aufklebererstellung", "<b>50</b> Flix-Credits für automatische Termin-Erinnerungen inklusive"] }, { amount: 200, name: "Premium", discount: 0, tax: 0, membership: "+ 1 years", info: ["alle Funktionen von Terminflix nutzbar", "bis zu <b>fünf Terminformulare</b> je Account/ Firma/ Unternehmung", "Termine, für Ihre Kunden, bis <b>12 Monate</b> im Voraus buchbar", "Persönlicher Support per Telefon, Email und Support-Chat", "<b>Einrichtungs-Service</b> per Telefon", "<b>Design-Service</b> für Visitenkarten- und Aufklebererstellung", "<b>50</b> Flix-Credits für automatische Termin-Erinnerungen inklusive"] }] }, a.plans;
  }, this.get_payment = function () {
    a.get_payment = function () {
      $(e).html(t.get_loader());for (var l = "", r = a.plans, s = 0; s <= 2; s++) {
        r.prices[s] = a.get_calculate_tax(r.prices[s], r.tax, r.unit);
      }if (void 0 === n.filter) for (s = 0; s <= 1; s++) {
        l += a.get_cell(s, r.prices[s], r.unit);
      } else l += a.get_cell(n.filter, r.prices[n.filter], r.unit);i.flix_load_script("https://www.paypal.com/sdk/js?client-id=" + a.client_id + "&currency=" + r.currency + "&locale=" + r.locale + "&vault=false", "undefined" == typeof paypal ? "undefined" : _typeof(paypal), function () {
        $(e).html(l), a.get_hover_panel(), a.get_click_payment(r);
      });
    };
  }, this.get_click_payment = function () {
    a.get_click_payment = function (n) {
      $(e).find(".flix-panel a").unbind("click"), $(e).find(".flix-panel a").click(function () {
        var l = $(this),
            r = $(e).find(".flix-panel a").index(l),
            s = new flix_membership_check(e, i, t);return s.callback = function () {
          if (0 == r) return !1;t.get_new_section(l.closest(".flix-panel-body"), { force_position: !0, title: l.text(), html: '<div class="flix-panel-body flix-text-left"><div class="data-flix-plan flix-text-left"></div></div>', onReady: function onReady(e) {
              a.get_paypal(".data-flix-plan", a.plans.prices[r], n, "Premium-Mitgliedschaft " + l.text());
            } });
        }, s.build(), !1;
      });
    };
  }, this.get_cell = function (e) {
    a.get_cell = function (i, t, l) {
      var a = $.parseJSON(JSON.stringify(t)),
          r = "";return r += '<div class="flix-col-md-' + e + '">', r += '<div class="flix-panel flix-text-center flix-panel-default">', r += '<div class="flix-panel-heading"><div class="flix-panel-title">' + a.name + "</div> Mitgliedschaft</div>", r += '<div class="flix-panel-body">', r += '<ul class="flix-list-group">', $.each(a.info, function (e, i) {
        r += '<li class="flix-list-group-item">', r += '<i class="flix-glyphicon flix-glyphicon-ok"></i> ' + i + "</li>";
      }), "boolean" == typeof n.payment && 0 == n.payment ? r += "</div></div>" : (0 != a.amount ? (r += '<li class="flix-list-group-item">', r += "<strong>Kosten pro Monat oder Jahr:</strong>", r += "<hr>", r += '<div class="flix-row">', r += '<div class="flix-col-md-6">', r += '<a href="#" class="flix-btn flix-btn-primary flix-btn-block">', a.price = 1 * a.price + "", r += a.price.replace(".", ",") + " EUR netto, monatlich", r += "</a>", r += "</div>", r += '<div class="flix-col-md-6">', a.price2 = 1 * a.price * 12 - 40 + "", r += '<a href="#" class="flix-btn flix-btn-primary flix-btn-block">', r += a.price2.replace(".", ",") + " EUR netto, jährlich", r += "</a>", r += "</div>", r += "</div>", r += "</li>") : (r += '<li class="flix-list-group-item">', r += "<strong>Kosten:</strong>", r += "<hr>", r += '<div class="flix-row">', r += '<div class="flix-col-md-12">', r += '<a href="#" class="flix-btn flix-btn-default flix-btn-block flix-disabled">', r += "kostenfrei", r += "</a>", r += "</div>", r += "</div>", r += "</li>"), r += "</ul>", r += "</div>", r += "</div></div>");
    };
  }, this.get_calculate_tax = function () {
    a.get_calculate_tax = function (e, i, t) {
      return e.price = e.amount, e.tax = e.price * i, e.price = Math.round(10 * e.price) / 10, e.price = e.price.toFixed(2), e;
    };
  }, this.get_handle_pay = function () {
    a.get_handle_pay = function (n, r) {
      var s = { user: a.login, data: n };$.each(a.plans.prices, function (e, i) {
        i.amount == s.data.amount && (s.data.membership = i.membership);
      }), $.post(FLIX_URLS.api + l + "/user/membership", s).success(function (n) {
        $(e).html(t.get_loader()), s.ID = n[2], $.post(FLIX_URLS.api + l + "/credit/create_innovoice", s).success(function (n) {
          $.post(FLIX_URLS.api + l + "/credit/send_innovoice", s).success(function (n) {
            new flix_membership_list(e, i, t).build();
          });
        });
      });
    };
  }, this;
};
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var flix_messenger = function flix_messenger(i, t, l, n) {
  var a = this;a.list = new flix_messenger_list(i, t, l, n), a.left_menu = new flix_messenger_left_menu(i, t, l, n), this.build = function () {
    a.get_html();
  }, this.get_html = function () {
    var t = "";t += "<div class='flix-col-sm-3'><div class='flix-form-group'>" + a.left_menu.get_html() + "</div></div>", t += "<div class='flix-col-sm-9'><div class='flix-form-group'>" + a.list.get_html() + "</div></div>", $(i).html(t), new flix_form_elements($(i)).get_functions($(i)), a.left_menu.get_count_msg();
  };
},
    flix_pagination = function flix_pagination(i, t) {
  var l = this;t = Object.assign({ limit: 10, data: {}, onChange: function onChange(i, t, l) {}, pagination: 1 }, t), l.pagination = t.pagination, this.build = function () {
    l.get_paginations();
  }, this.set_data = function (i) {
    t.data = i;
  }, this.get_paginations = function () {
    var n = Math.ceil(Object.keys(t.data).length / t.limit),
        a = "";a += '<nav class="flix-html-nav flix-nav" aria-label="Page navigation">', a += '<ul class="flix-pagination flix-html-ul">', a += '<li class="flix-html-li">', a += '<a href="#" aria-label="Previous" class="flix-html-a">', a += '<span aria-hidden="true">&laquo;</span>', a += "</a>", a += "</li>";var e = t.limit;n <= e - 2 && (a += l.get_pagination_numbers(1, n)), n > e && l.pagination < e - 2 && (a += l.get_pagination_numbers(1, e - 2), a += '<li class="flix-html-li flix-disable"><div" class="flix-html-a">...</div></li>', a += l.get_pagination_numbers(n, n)), l.pagination >= e - 2 && (a += l.get_pagination_numbers(1, 1), a += '<li class="flix-html-li flix-disable"><div" class="flix-html-a">...</div></li>', n > l.pagination + (e - 3) ? (a += l.get_pagination_numbers(l.pagination, l.pagination + (e - 5)), a += '<li class="flix-html-li flix-disable"><div" class="flix-html-a">...</div></li>', a += l.get_pagination_numbers(n, n)) : n - l.pagination >= e - 3 ? a += l.get_pagination_numbers(l.pagination, n) : a += l.get_pagination_numbers(n - (e - 4), n)), a += '<li class="flix-html-li">', a += '<a href="#" aria-label="Next" class="flix-html-a">', a += '<span aria-hidden="true">&raquo;</span>', a += "</a>", a += "</li>", a += "</ul>", a += "</nav>", $(i).html(a), l.get_change_pagination(), l.get_click_arrow_buttons(n), l.onChange();
  }, this.get_click_arrow_buttons = function (t) {
    $(i).find('[aria-label="Previous"]').unbind("click"), $(i).find('[aria-label="Previous"]').click(function () {
      return l.pagination = l.pagination - 1, l.pagination < 1 && (l.pagination = 1), l.onChange(), l.get_paginations(), !1;
    }), $(i).find('[aria-label="Next"]').unbind("click"), $(i).find('[aria-label="Next"]').click(function () {
      return l.pagination = l.pagination + 1, l.pagination > t && (l.pagination = t), l.onChange(), l.get_paginations(), !1;
    });
  }, this.get_change_pagination = function () {
    $(i).find(".flix-change").unbind("click"), $(i).find(".flix-change").click(function () {
      return l.pagination = 1 * $(this).text(), l.onChange(), l.get_paginations(), !1;
    });
  }, this.get_pagination_numbers = function (i, t) {
    for (var n = "", a = ""; i <= t; i++) {
      a = "", i == l.pagination && (a = "flix-active"), n += '<li class="flix-html-li ' + a + '"><a href="#" class="flix-html-a flix-change">' + i + "</a></li>";
    }return n;
  }, this.onChange = function () {
    var i = (l.pagination - 1) * t.limit,
        n = i + t.limit;t.onChange(t.data, i, n);
  };
},
    flix_messenger_chat = function flix_messenger_chat(i, t, l, n) {
  var a = this,
      e = localStorage.getItem("flix_login");this.build = function (e) {
    a.data = e;var s = "";s += "<div data-flix-language='" + $(i).attr("data-flix-language") + "' data-flix-userchat='" + FLIX_URLS.flix + "events/de/userchat/" + a.data.ID + "/' ></div>", s += "</div>";var o = "<div style='display: inline; margin-right: 5px;'><a href='#' class='flix-btn flix-btn-default'><i class='flix-glyphicon flix-glyphicon-user'></i> " + a.data.title + "</a></div>";swal.fire({ title: o, html: s, showCloseButton: !0, showConfirmButton: !1, onClose: function onClose() {
        n.onClose();
      } }), new flix_userchat($(".swal2-content").find("[data-flix-userchat]"), t, l), a.show_user_details(e);
  }, this.show_user_details = function (l) {
    $(".swal2-title").find(".flix-btn").unbind("click"), $(".swal2-title").find(".flix-btn").click(function () {
      if ($(".swal2-content").find(".flix-window .flix-panel-heading a").length) return $(".swal2-content").find(".flix-window .flix-panel-heading a").trigger("click"), !1;var a = new flix_termin_flix($(".swal2-content").find("[data-flix-userchat]"), t),
          s = a.post_url;return s += "?l=" + $(i).attr("data-flix-language"), a.set_post_url(s), a.get_new_section($(".swal2-content").find("[data-flix-userchat]"), { html: '<div data-flix-list-events data-flix-language="' + $(i).attr("data-flix-language") + '"></div>', onReady: function onReady(i) {
          new flix_messenger_list(i.container.find("[data-flix-list-events]"), t, a, n).get_show_entry({ container: i.container }, { close: function close() {} }, { user: e, ID: l.user });
        } }), !1;
    });
  };
},
    flix_messenger_icons = function flix_messenger_icons() {
  this.build = function (i) {
    return { client: { icon: "flix-glyphicon flix-glyphicon-vcard" }, system: { icon: "flix-Logo-Terminflix_icon_sw" } }[i];
  };
},
    flix_messenger_left_menu = function flix_messenger_left_menu(i, t, l, n) {
  var a = this,
      e = localStorage.getItem("flix_login");a.list = new flix_messenger_list(i, t, l, n), this.build = function () {}, this.get_html = function () {
    return "<ul class='flix-nav flix-nav-pills flix-nav-stacked flix-nav-menu'>", "</ul>", "<ul class='flix-nav flix-nav-pills flix-nav-stacked flix-nav-menu'></ul>";
  }, this.get_count_msg = function () {
    $.post(FLIX_URLS.api + $(i).attr("data-flix-language") + "/dashboard/messages", { user: e }).success(function (i) {
      a.data = i[1], a.get_generate_navs();
    });
  }, this.get_generate_navs = function () {
    var t = "";$.each(a.data, function (i, l) {
      t += "<li class='flix-html-li'><a href='#" + i + "' class='flix-html-a '><i class='" + new flix_messenger_icons().build(l.category).icon + "'></i>&nbsp;&nbsp;" + l.title + " <span class='flix-badge flix-badge-logs' style='display: inline-block;'>" + l.count + "</span></a></li>";
    }), $(i).find(".flix-nav.flix-nav-menu").html(t), a.get_open_folder();
  }, this.get_open_folder = function () {
    $(i).find(".flix-nav.flix-nav-menu").find("li a").unbind("click"), $(i).find(".flix-nav.flix-nav-menu").find("li a").click(function () {
      $(this).closest("ul").find("li").removeClass("flix-active"), $(this).closest("li").addClass("flix-active");var i = $(this).closest("ul").find("li a").index($(this));a.open_menu = i;var t = Object.keys(a.data)[i],
          l = a.data[t],
          n = Object.assign(a.list, {});return (n = a.exclude_buttons(t, n)).onClose = function () {
        a.get_count_msg();
      }, n.get_messages(t, l), !1;
    }), void 0 === a.open_menu ? $(i).find(".flix-nav.flix-nav-menu").find("li a").eq(0).trigger("click") : $(i).find(".flix-nav.flix-nav-menu").find("li a").eq(a.open_menu).closest("li").addClass("flix-active");
  }, this.exclude_buttons = function (i, t) {
    return -1 != ["logs"].indexOf(i) && (t.get_action_buttons = function (i, t) {
      return "";
    }), t;
  };
},
    _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (i) {
  return typeof i === "undefined" ? "undefined" : _typeof2(i);
} : function (i) {
  return i && "function" == typeof Symbol && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i === "undefined" ? "undefined" : _typeof2(i);
},
    flix_messenger_list = function flix_messenger_list(i, t, l, n) {
  var a = this,
      e = new flix_form_elements($(i)),
      s = localStorage.getItem("flix_login");this.build = function () {}, this.get_html = function () {
    var i = "<div class='flix-text-right'><div class='flix-subpages'></div><div class='flix-clearfix'></div></div>";return i, "<div class='flix-panel flix-panel-default'>", "<div class='flix-panel-body'>", "<div class='flix-action-buttons'></div>", "<div class='flix-html-table flix-table'>", "<table class='flix-html-table flix-table'>", "<tbody>", "</tbody>", "</table>", "</div>", "<div class='flix-action-buttons'></div>", "</div>", "</div>", i, "<div class='flix-text-right'><div class='flix-subpages'></div><div class='flix-clearfix'></div></div><div class='flix-panel flix-panel-default'><div class='flix-panel-body'><div class='flix-action-buttons'></div><div class='flix-html-table flix-table'><table class='flix-html-table flix-table'><tbody></tbody></table></div><div class='flix-action-buttons'></div></div></div><div class='flix-text-right'><div class='flix-subpages'></div><div class='flix-clearfix'></div></div>";
  }, this.get_action_buttons = function (i, t) {
    if (-1 == Object.keys(a.filter)[0].indexOf("chat")) return $(i).html('<div class="flix-pull-right"><div class="flix-form-group"><div class="flix-html-small flix-small">Löschen nicht möglich</div></div></div>'), !1;$(i).html('<div class="flix-pull-right"><div class="flix-form-group"><div class="flix-dropdown"><a href="#" data-tooltip="Nur für Admins sichtbar" class="flix-btn flix-btn-xs flix-btn-default flix-dropdown-toggle flix-tooltip" data-toggle="dropdown">Aktionen</a><ul class="flix-dropdown-menu flix-dropdown-menu-right"><li class="flix-dropdown-header">Ausgewählte Chats</li><li class="flix-html-li"><a href="#" target="" class="flix-html-a flix-btn-delete"><i class="flix-glyphicon flix-glyphicon-bin"></i> löschen</a></li></ul></div></div></div>'), $(i).find(".flix-btn-delete").click(function () {
      return swal.fire({ type: "question", showCancelButton: !0, confirmButtonText: "Ja", cancelButtonText: "Nein", title: $(this).text() }).then(function (i) {
        if (void 0 === i.value) return !1;a.get_delete_action(t);
      }), !1;
    });
  }, this.get_delete_action = function (t) {
    var l = [];if ($(i).find("table.flix-html-table tbody input[type='checkbox'][name='ID[]']").each(function () {
      $(this).is(":checked") && (l.push(t[$(this).val()]), $(this).closest("tr").fadeOut(1e3, function () {
        $(this).remove();
      }), delete a.data[$(this).val()]);
    }), 0 == l.length) return !1;0 == a.data.length && a.get_error_msg(a.data), a.pagination.set_data(a.data), a.get_delete(l);
  }, this.get_delete = function (t) {
    var l = { user: s, data: [] };$.each(t, function (i, t) {
      l.data.push(t.ID);
    }), $.post(FLIX_URLS.api + $(i).attr("data-flix-language") + "/chat/delete", l).success(function () {
      a.onClose();
    });
  }, this.get_messages = function (t, n) {
    $.post(FLIX_URLS.api + $(i).attr("data-flix-language") + "/newscenter/view/" + t, { user: s }).success(function (e) {
      if (a.filter = {}, a.filter[t] = n, void 0 === e[0] || !e[0]) return a.get_error_msg(e);a.data = e[1], $(i).find("table.flix-html-table tbody").html(l.get_loader()), a.get_paginations();
    });
  }, this.get_close_popup = function () {
    a.onClose();
  }, this.get_error_msg = function (t) {
    if (void 0 === t[1] || !t[1]) return $(i).find("table.flix-html-table tbody").html(""), !1;$(i).find("table.flix-html-table tbody").html("<div class='flix-alert flix-alert-danger'>" + t[1] + "</div>"), $(i).find(".flix-subpages").html(""), $(i).find(".flix-action-buttons").html("");
  }, this.get_paginations = function () {
    a.pagination = new flix_pagination($(i).find(".flix-subpages"), { data: a.data, onChange: function onChange(i, t, l) {
        a.get_list_rows(i, t, l);
      } }), a.pagination.build();
  }, this.get_list_rows = function (t, l, n) {
    for (var s = "", o = Object.keys(t), f = l; f < n; f++) {
      void 0 === o[f] || void 0 === t[o[f]] ? s += "" : s += a.get_row(t[o[f]], f);
    }$(i).find("table.flix-html-table tbody").html(s), e.get_functions($(i)), a.get_click_message(), a.get_click_user_status(), a.get_action_buttons($(i).find(".flix-action-buttons"), t);
  }, this.get_click_user_status = function () {
    $(i).find("table.flix-html-table tbody a.flix-user-status").unbind("click"), $(i).find("table.flix-html-table tbody a.flix-user-status").click(function () {
      var t = $(this).attr("href").replace("#", "");return a.get_show_user_details($(i).find("table.flix-html-table"), t), !1;
    });
  }, this.get_show_user_details = function (t, l) {
    var n = { user: s, ID: l };swal.fire({ html: '<div data-flix-list-events data-flix-language="' + $(i).attr("data-flix-language") + '"></div>', width: "80%", showCloseButton: !0, showConfirmButton: !1, onClose: function onClose() {
        a.get_close_popup();
      } });var e = { container: $(".swal2-content") };a.get_show_entry(e, swal, n);
  }, this.get_show_entry = function (n, a, e) {
    n.container.find("[data-flix-list-events]").html("<div class='flix-header'></div><div class='flix-stage'></div>");n.container.find("[data-flix-list-events]").find(".flix-stage").html('<div class=\'flix-clearfix flix-form-group\'></div><div class="flix-col-md-12"><div class="flix-stage-container"></div></div>');var s = { stage: n.container.find(".flix-stage"), header: n.container.find(".flix-header") };$.post(FLIX_URLS.api + $(i).attr("data-flix-language") + "/booking/view/user", e).success(function (i) {
      if (void 0 === i[0] || !i[0]) return "function" == typeof a.close && a.close(), !1;var e = new flix_entry_manage(n.container.find("[data-flix-list-events]"), t, l, {});(e = e.entry_manager).data = i[1], e.get_order_data(), e.get_menu(s), n.container.find(".flix-count-" + e.data[0].status).closest("a").trigger("click");
    });
  }, this.get_click_message = function () {
    $(i).find("table.flix-html-table tbody a.flix-open").unbind("click"), $(i).find("table.flix-html-table tbody a.flix-open").click(function () {
      var e = $(this).closest("td").find("[name='ID[]']").val();if ("object" != (void 0 === n ? "undefined" : _typeof(n)) && (n = {}), n.onClose = function () {
        a.get_close_popup();
      }, -1 != Object.keys(a.filter)[0].indexOf("chat")) return new flix_messenger_chat(i, t, l, n).build(a.data[e]), !1;var s = $.parseJSON(JSON.stringify(a.data[e]));return s.html = s.text, s.showCloseButton = !0, s.showConfirmButton = !1, s.onClose = function () {
        a.get_close_popup();
      }, delete s.text, delete s.date, delete s.ID, swal.fire(s), !1;
    });
  }, this.get_row = function (i, t) {
    var l = $.parseJSON(JSON.stringify(i)),
        n = new flix_messenger_icons().build(a.filter[Object.keys(a.filter)[0]].category),
        s = "";return s += "<tr class='flix-html-tr'>", s += "<td class='flix-html-td'>", s += "<div class='flix-row'>", s += '<div class="flix-col-xs-1">', s += e.get_checkbox_group({ id: "ID", columnName: "", values: [{ label: t + 1, value: t }] }), s += "</div>", s += '<div class="flix-col-xs-3" >', s += '<a href="#" class="flix-html-a flix-open"><i class="' + n.icon + '"></i> <strong>' + l.title + "</strong></a>", s += "</div>", s += '<div class="flix-col-xs-4 flix-cs-5" style="overflow-x:auto; overflow-y: hidden;">', l.text.length > 20 && (l.text = l.text.substring(0, 20) + "..."), s += l.text, s += "</div>", s += '<div class="flix-col-xs-3" style="overflow-x:auto; overflow-y: hidden;">', s += '<small class="flix-small">' + l.date + "</small>", s += "</div>", void 0 !== l.user && (s += '<div class="flix-col-xs-1">', s += '<a href="#' + l.user + '" class="flix-btn flix-btn-xs flix-btn-default flix-user-status"><i class="flix-glyphicon flix-glyphicon-user"></i></a>', s += "</div>"), s += "</div>", s += '<hr class="flix-html-hr2" style="margin: 5px 0 20px 0;">', s += "</td>", s += "</tr>";
  };
};
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
},
    flix_ressources_calendar = function flix_ressources_calendar(e, t, i) {
  var n = this,
      a = localStorage.getItem("flix_login"),
      l = new flix_form_elements();this.build = function () {
    i.get_new_section($(e), { title: "Kalender beifügen", html: "<div class='flix-calendar'></div>", onReady: function onReady(e) {
        n.get_calendar(e);
      }, onClose: function onClose() {
        n.callback();
      } });
  }, this.get_calendar = function (e) {
    $.post(FLIX_URLS.api + n.lang + "/assistent/get_assistents", { user: a }).success(function (s) {
      if (!s[0]) return n.callback(), !1;var c = [];$.each(s[1], function (e, t) {
        c.push({ label: t.title, value: t.ID });
      });var o = !1;"object" == _typeof(n.data[1]) && "object" == _typeof(n.data[1][n.data[0].ID]) && "object" == _typeof(n.data[1][n.data[0].ID].calendar) && (o = n.data[1][n.data[0].ID].calendar, c = n.get_sort_values(c, n.data[1][n.data[0].ID].calendar), n.data[1][n.data[0].ID].calendar.length > 1 && l.get_button({ subtype: "button", label: "Reihenfolge ändern", className: "flix-btn flix-btn-default flix-btn-change-order", columnName: "" }));var r = "";r += "<form>", r += l.get_checkbox_group({ id: "calendar", values: c, value: o }), r += l.get_button({ subtype: "submit", label: "Speichern", className: "flix-btn flix-btn-success", columnName: "12" }), r += "</form>", e.container.find(".flix-calendar").html(r), new flix_ressources_calendar_sort(e.container.find(".flix-calendar"), t, i).build(), l.get_functions(e.container.find(".flix-calendar")), new flix_html_form(e.container.find(".flix-calendar")).get_handle_form(function (t) {
        var i = { user: a, ID: n.data[0].ID, data: t };$.post(FLIX_URLS.api + n.lang + "/ressources/connect/save_calendar", i).success(function (t) {
          e.container.find(".flix-close-section").trigger("click");
        });
      });
    });
  }, this.get_sort_values = function (e, t) {
    var i = [],
        n = [];return $.each(t, function (t, a) {
      $.each(e, function (e, t) {
        if (t.value === a) return i.push(t), n.push(e), !0;
      });
    }), $.each(e, function (e, t) {
      if (-1 === n.indexOf(e)) return i.push(t), !0;
    }), i;
  };
},
    flix_ressources_calendar_sort = function flix_ressources_calendar_sort(e, t, i) {
  var n = this;this.build = function () {
    if ($(e).find("label").length <= 1) return !1;$(e).append("<div class='flix-col-md-12'><i class='flix-glyphicon flix-glyphicon-info-sign'></i> Mit den Pfeilen kann die Reihenfolge festgelegt werden, in der die ausgewählten Termin-Buchungs-Formulare den Kunden angezeigt werden.</div>"), n.get_generate_buttons();
  }, this.get_click_buttons = function () {
    $(e).find("label").find("[href='#up'],[href='#down']").unbind("click"), $(e).find("label").find("[href='#up'],[href='#down']").click(function () {
      var t = $(this).attr("href").replace("#", ""),
          i = $(e).find("label").index($(this).closest("label"));return "down" == t ? $(this).closest("label").closest("div").insertAfter($(e).find("label").eq(i + 1).closest("div")) : $(this).closest("label").closest("div").insertBefore($(e).find("label").eq(i - 1).closest("div")), n.get_generate_buttons(), !1;
    });
  }, this.get_generate_buttons = function () {
    $(e).find("label").find("[href='#up'],[href='#down']").remove(), $(e).find("label").each(function (t) {
      var i = " " + n.up() + n.down();0 == t && (i = n.down()), t == $(e).find("label").length - 1 && (i = n.up()), $(this).append(i);
    }), n.get_click_buttons();
  }, this.up = function () {
    return '<a href="#up" class="flix-html-a"><i class="flix-glyphicon flix-glyphicon-arrow-up"></i></a>';
  }, this.down = function () {
    return '<a href="#down" class="flix-html-a"><i class="flix-glyphicon flix-glyphicon-arrow-down"></i></a>';
  };
},
    flix_ressources_codegen = function flix_ressources_codegen(e, t, i) {
  var n = this,
      a = localStorage.getItem("flix_login");new flix_form_elements();this.build = function () {
    i.get_new_section($(e), { title: "Einbettungscode generieren", html: "<div class='flix-header'><input type='hidden' ID='id' value='ressource_" + n.data[0].ID + "'><a class='flix-btn-landingpage' href='" + n.data[1][n.data[0].ID].url + "'></a></div><div class='flix-codegen' data-flix-language='" + n.lang + "'></div>", onReady: function onReady(e) {
        n.get_crypt(e);
      }, onClose: function onClose() {
        n.callback();
      } });
  }, this.get_crypt = function (e) {
    var t = { user: a, view: "day", ID: "ressource_" + n.data[0].ID, language: n.lang };$.post(FLIX_URLS.api + n.lang + "/crypt/encrypt", t).success(function (i) {
      n.crypt = {}, n.crypt[t.ID] = i.encrypt, n.get_codegen(e);
    });
  }, this.get_codegen = function (e) {
    var a = new flix_form_codegen(e.container.find(".flix-codegen"), t, i, {}),
        l = { header: e.container.find(".flix-header"), id: "ressource_" + n.data[0].ID, stage: e.container.find(".flix-codegen") };a.crypted = n.crypt, a.get_html(l);
  };
},
    flix_ressources_embed = (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
}, function (e, t, i, n) {
  var a = this;this.build = function () {
    i.get_styles(), $(e).html(i.get_loader()), $.post(FLIX_URLS.api + n.lang + "/crypt/decrypt", { data: n.crypt }).success(function (n) {
      a.decrypted = n, -1 != a.decrypted.ID.indexOf("ressource_") ? a.get_ressource_calendar(function () {
        a.get_list_calendars();
      }) : $.post(FLIX_URLS.api + a.lang + "/assistent/get_data", a.decrypted).done(function (n) {
        $(e).html("<div class='flix-html-html'></div>");var l = "list";void 0 !== a.embed && (l = a.saved_view), a.embed = new flix_embed($(e).find(".flix-html-html"), t, i), a.embed.save_view = l, a.embed.get_html(n[1], a.decrypted);
      });
    });
  }, this.get_list_calendars = function () {
    $(e).html("<div class='flix-html-html'><div class='flix-list-calendars'></div><div class='flix-calendar-stage'></div></div>"), a.calendar_data = {}, $.each(a.calendar, function (t, i) {
      a.get_decrypt_calendar(t, i, function (t, i) {
        if (1 == a.calendar.length) return $(e).find(".flix-list-calendars").remove(), a.get_calendar_now(i), !1;$(e).find(".flix-list-calendars a[href='#" + i + "']").append(" " + a.calendar_data[i].title), t == Object.keys(a.calendar)[Object.keys(a.calendar).length - 1] && $(e).find(".flix-list-calendars").find("a").eq(0).trigger("click"), a.get_activate_calendar();
      });
    });
  }, this.get_decrypt_calendar = function (t, i, l) {
    $(e).find(".flix-list-calendars").append('<a href="#' + i + '" class="flix-btn flix-btn-default"><i class="flix-glyphicon flix-glyphicon-calendar"></i></a>'), $.post(FLIX_URLS.api + n.lang + "/assistent/get_data", Object.assign(a.decrypted, { user: a.decrypted.user, ID: i })).success(function (e) {
      a.calendar_data[i] = e[1], l(t, i);
    });
  }, this.get_calendar_now = function (n) {
    if (void 0 === a.decrypted) return !1;if (void 0 === a.calendar_data || void 0 === a.calendar_data[n]) return !1;var l = a.calendar_data[n];if (void 0 !== a.decrypted.view && (l.view = a.decrypted.view), l.login = a.decrypted.user, "object" == _typeof(a.current_calendar)) {
      var s = a.current_calendar.get_current_date();l.view = s.view, l.date = s.date.getFullYear() + "-" + (s.date.getMonth() + 1) + "-" + s.date.getDate();
    }$(e).find(".flix-calendar-stage").html(i.get_loader()), setTimeout(function () {
      a.current_calendar = new flix_embed($(e).find(".flix-calendar-stage"), t, i), a.current_calendar.get_html(l, { ID: n, language: a.lang, user: a.decrypted.user });
    }, 500);
  }, this.get_activate_calendar = function () {
    $(e).find(".flix-list-calendars a").unbind("click"), $(e).find(".flix-list-calendars a").click(function () {
      $(e).find(".flix-list-calendars").find("a").removeClass("flix-btn-primary").addClass("flix-btn-default"), $(this).toggleClass("flix-btn-default flix-btn-primary");var t = $(this).attr("href").replace("#", "");return a.get_calendar_now(t), !1;
    }), $(e).find(".flix-list-calendars").find("a").eq(0).trigger("click");
  }, this.get_ressource_calendar = function (e) {
    var t = a.decrypted.ID.split("_"),
        i = { user: a.decrypted.user, ID: t[1] };$.post(FLIX_URLS.api + n.lang + "/ressources/connect/get", i).success(function (t) {
      a.calendar = t[1][i.ID].calendar, e();
    });
  };
}),
    flix_ressources_list = (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
}, function (e, t, i) {
  var n = this,
      a = localStorage.getItem("flix_login");this.build = function () {
    var t = { user: a };$(e).find(".flix-pagination-container").html(""), $(e).find(".flix-stage").html(""), $.post(FLIX_URLS.api + n.lang + "/ressources/get", t).success(function (i) {
      if (!i[0]) return !1;$.post(FLIX_URLS.api + n.lang + "/ressources/connect/get", t).success(function (t) {
        n.connect = !1, void 0 !== t[1] && (n.connect = t[1]), i[1].length < 20 ? n.get_list_rows(i[1], 0, i[1].length) : new flix_pagination($(e).find(".flix-pagination-container"), { limit: 10, data: i[1], onChange: function onChange(e, t, i) {
            n.get_list_rows(e, t, i);
          } }).build();
      });
    });
  }, this.get_list_rows = function (t, i, a) {
    var l = "";l += "<div class='flix-panel flix-panel-default'>", l += "<div class='flix-panel-body'>";for (var s = i; s < a; s++) {
      if (void 0 !== t[s]) {
        l += "<div class='flix-ressource' data-id='" + s + "'>", l += "<div class='flix-col-md-12'>", l += "<div class='flix-form-group'>", l += "<div class='flix-btn flix-btn-default' style='cursor: inherit; background-color: " + t[s].color + "'>&nbsp;&nbsp;</div>", l += "<a class='flix-btn flix-btn-default flix-disabled' data-tooltip='Ressource bearbeiten' style='cursor: inherit;'>", l += t[s].ID, l += "&nbsp;", l += "&nbsp;", l += t[s].title, l += "</a>", l += "<a href='#' class='flix-btn flix-btn-default flix-tooltip flix-btn-edit' data-tooltip='Ressource bearbeiten'>", l += "<i class='flix-glyphicon flix-glyphicon-pen'></i>", l += "</a>", l += "<a href='#' class='flix-btn flix-btn-default flix-tooltip flix-btn-calendar' data-tooltip='Kalender beifügen / bearbeiten'>", l += "<i class='flix-glyphicon flix-glyphicon-calendar'></i> ";var c = !1;"object" == _typeof(n.connect) && "object" == _typeof(n.connect) && "object" == _typeof(n.connect[t[s].ID]) && "object" == _typeof(n.connect[t[s].ID].calendar) && n.connect[t[s].ID].calendar.length > 0 && (c = !0), l += c ? n.connect[t[s].ID].calendar.length : 0, l += "</a>", c && (l += "<a href='#' class='flix-btn flix-btn-default flix-tooltip flix-btn-share' data-tooltip='Ressource freigeben'>", l += "<i class='flix-glyphicon flix-glyphicon-share'></i> ", "object" == _typeof(n.connect) && "object" == _typeof(n.connect[t[s].ID]) && "object" == _typeof(n.connect[t[s].ID].shares) ? l += n.connect[t[s].ID].shares.length : l += 0, l += "</a>"), c && (l += "<a href='#' class='flix-btn flix-btn-default flix-tooltip flix-btn-website' data-tooltip='Ressourcen-Website bearbeiten'>", l += "<i class='flix-glyphicon flix-glyphicon-globe'></i> ", l += "</a>"), c && (l += "<a href='#' class='flix-btn flix-btn-default flix-tooltip flix-btn-codegen' data-tooltip='Einbettungscode'>", l += "<i class='flix-icon flix-icon-formular_einbinden'></i> ", l += "</a>"), l += "</div>", l += "</div>", l += "<hr class='flix-html-hr'>", l += "<div class='flix-clearfix'></div>", l += "</div>";
      }
    }return l += "</div>", l += "</div>", $(e).find(".flix-stage").html(l), n.get_edit_ressource(t), n.get_edit_share(t), n.get_edit_calendar(t), n.get_edit_website(t), n.get_edit_codegen(t), !1;
  }, this.get_edit_codegen = function (a) {
    $(e).find(".flix-stage").find(".flix-btn-codegen").unbind("click"), $(e).find(".flix-stage").find(".flix-btn-codegen").click(function () {
      var l = new flix_ressources_codegen(e, t, i);return l.data = [a[$(this).closest("[data-id]").attr("data-id")], n.connect], l.lang = n.lang, l.callback = function () {
        n.build();
      }, l.build(), !1;
    });
  }, this.get_edit_website = function (a) {
    $(e).find(".flix-stage").find(".flix-btn-website").unbind("click"), $(e).find(".flix-stage").find(".flix-btn-website").click(function () {
      var l = new flix_ressources_website(e, t, i);return l.data = [a[$(this).closest("[data-id]").attr("data-id")], n.connect], l.lang = n.lang, l.callback = function () {
        n.build();
      }, l.build(), !1;
    });
  }, this.get_edit_share = function (a) {
    $(e).find(".flix-stage").find(".flix-btn-share").unbind("click"), $(e).find(".flix-stage").find(".flix-btn-share").click(function () {
      var l = new flix_ressources_share(e, t, i);return l.data = [a[$(this).closest("[data-id]").attr("data-id")], n.connect], l.lang = n.lang, l.callback = function () {
        n.build();
      }, l.build(), !1;
    });
  }, this.get_edit_calendar = function (a) {
    $(e).find(".flix-stage").find(".flix-btn-calendar").unbind("click"), $(e).find(".flix-stage").find(".flix-btn-calendar").click(function () {
      var l = new flix_ressources_calendar(e, t, i);return l.data = [a[$(this).closest("[data-id]").attr("data-id")], n.connect], l.lang = n.lang, l.callback = function () {
        n.build();
      }, l.build(), !1;
    });
  }, this.get_edit_ressource = function (a) {
    $(e).find(".flix-stage").find(".flix-btn-edit").unbind("click"), $(e).find(".flix-stage").find(".flix-btn-edit").click(function () {
      var l = $(this),
          s = new flix_ressources_new(e, t, i);return s.lang = n.lang, s.data = a[$(this).closest("[data-id]").attr("data-id")], s.callback = function () {
        n.build();
      }, s.get_html({ text: function text() {
          return l.closest("[data-tooltip]").attr("data-tooltip");
        } }), !1;
    });
  };
}),
    flix_ressources_new = (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
}, function (e, t, i) {
  var n = this,
      a = localStorage.getItem("flix_login"),
      l = new flix_form_elements();this.build = function () {
    $(e).find(".flix-btn-new-ressource").unbind("click"), $(e).find(".flix-btn-new-ressource").click(function () {
      return n.get_html($(this)), !1;
    });
  }, this.get_html = function (t) {
    i.get_new_section($(e), { title: t.text(), html: "<div class='flix-new-ressource'></div>", onReady: function onReady(e) {
        n.get_new_ressource(e);
      }, onClose: function onClose() {
        n.callback();
      } });
  }, this.get_new_ressource = function (e) {
    var t = "",
        i = { title: "", description: "", color: "", ID: "" };"object" == _typeof(n.data) && (i = n.data), t += "<form>", _typeof(i.ID) && i.ID && (t += l.get_text({ subtype: "hidden", id: "ID", columnName: 12, required: !0, value: i.ID })), t += l.get_colorpicker({ label: "Farbe", id: "color", columnName: 12, value: i.color }), t += l.get_text({ label: "Titel", id: "title", columnName: 12, required: !0, value: i.title }), t += l.get_textarea({ label: "Beschreibung", id: "description", value: i.description }), t += l.get_button({ subtype: "submit", label: "Speichern", className: "flix-btn flix-btn-success", columnName: 6 }), _typeof(i.ID) && i.ID && (t += l.get_button({ subtype: "button", label: "Löschen", className: "flix-btn flix-btn-xs flix-btn-danger flix-pull-right flix-btn-delete", columnName: 6 })), t += "</form>", e.container.find(".flix-new-ressource").html(t), l.get_functions(e.container), n.get_save_ressource(e), n.get_delete_ressource(e);
  }, this.get_delete_ressource = function (e) {
    e.container.find(".flix-new-ressource").find(".flix-btn-delete").unbind("click"), e.container.find(".flix-new-ressource").find(".flix-btn-delete").click(function () {
      var t = $(this),
          i = { user: a, data: { ID: e.container.find(".flix-new-ressource").find("#ID").val() } };swal.fire({ type: "question", title: t.text() + "?", showCancelButton: !0, confirmButtonText: "Ja", cancelButtonText: "Nein" }).then(function (t) {
        if (void 0 === t.value || !t.value) return !1;$.post(FLIX_URLS.api + n.lang + "/ressources/delete", i).success(function (t) {
          swal.fire({ type: "success", title: t[1], timer: 2e3, showConfirmButton: !1 }), e.container.find(".flix-close-section").trigger("click");
        });
      });
    });
  }, this.get_save_ressource = function (e) {
    new flix_html_form(e.container.find(".flix-new-ressource")).get_handle_form(function (t) {
      var i = { user: a, data: t };$.post(FLIX_URLS.api + n.lang + "/ressources/save", i).success(function (t) {
        swal.fire({ type: "success", title: t[1], timer: 2e3, showConfirmButton: !1 }), e.container.find(".flix-close-section").trigger("click");
      });
    });
  };
}),
    flix_ressources = function flix_ressources(e, t, i) {
  var n = this,
      a = (localStorage.getItem("flix_login"), $(e).attr("data-flix-language")),
      l = (new flix_form_elements(), i.post_url);this.build = function () {
    i.get_styles(), i.get_animateCSS(), $(e).attr("data-flix-language") && (l += "?l=" + $(e).attr("data-flix-language")), i.set_post_url(l), n.get_html();
  }, this.get_html = function () {
    $(e).html("<div class='flix-col-md-6'><div class='flix-form-group'><a href='#' class='flix-btn flix-btn-default flix-btn-new-ressource'><i class='flix-glyphicon flix-glyphicon-plus'></i> Neue Ressource anlegen</a></div></div><div class='flix-col-md-12'><div class='flix-pagination-container'></div></div><div class='flix-col-md-12'><div class='flix-clearfix'></div><div class='flix-stage'></div></div><div class='flix-col-md-12'><div class='flix-pagination-container'></div></div>"), n.get_ressource(!1), n.get_list();
  }, this.get_ressource = function (l) {
    var s = new flix_ressources_new(e, t, i);s.lang = a, s.data = l, s.callback = function () {
      n.get_list();
    }, s.build();
  }, this.get_list = function () {
    var l = new flix_ressources_list(e, t, i);l.lang = a, l.parent_class = n, l.build();
  };
},
    flix_ressources_share = (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
}, function (e, t, i) {
  var n = this,
      a = localStorage.getItem("flix_login"),
      l = new flix_form_elements();this.build = function () {
    i.get_new_section($(e), { title: "Ressource freigeben", html: "<div class='flix-calendar'></div>", onReady: function onReady(e) {
        n.get_share(e);
      }, onClose: function onClose() {
        n.callback();
      } });
  }, this.get_share = function (e) {
    n.get_calendar(function () {
      n.get_list_shares(e);
    });
  }, this.get_list_shares = function (e) {
    var t = "";t += '<div id="share">', t += "<form>", t += l.get_text({ subtype: "email", required: !0, placeholder: "E-Mailadresse", id: "email", columnName: 4, label: "" }), t += l.get_button({ subtype: "submit", columnName: 2, className: "flix-btn flix-btn-default flix-btn-block", label: "Jetzt freigeben" }), t += "</form>", t += "</div>", t += '<div class="flix-col-md-12">', t += '<div class="list"></div>', t += "</div>", e.container.find(".flix-calendar").html(t), new flix_html_form(e.container.find(".flix-calendar div#share")).get_handle_form(function (t) {
      if (e.container.find(".flix-calendar #share #email").val(""), !t.email) return !1;void 0 === n.data[1][n.data[0].ID] && (n.data[1][n.data[0].ID] = { shares: [] }), void 0 === n.data[1][n.data[0].ID].shares && (n.data[1][n.data[0].ID].shares = []), n.data[1][n.data[0].ID].shares.push({ email: t.email, shares: ["*"] }), n.get_save_shares(), n.get_list(e);
    }), n.get_list(e);
  }, this.get_list = function (e) {
    if (e.container.find(".list").html(""), void 0 === n.data[1][n.data[0].ID] || void 0 === n.data[1][n.data[0].ID].shares) return !1;var t = "";t += '<div class="flix-list-group">', $.each(n.data[1][n.data[0].ID].shares, function (e, i) {
      t += '<div class="flix-list-group-item">', t += "<table>", t += "<tr>", t += "<td>", t += '<a href="#' + e + '" class="flix-html-a flix-text-danger"><i class="flix-glyphicon flix-glyphicon-remove"></i></a>', t += "</td>", t += '<td style="font-weight: bold;">', t += i.email, t += "</td>", t += "</tr>", t += "<tr>", t += "<td>", t += "</td>", t += "<td>", t += l.get_checkbox_group({ id: e, value: i.shares, values: n.get_ressource_calendars(n.data[1][n.data[0].ID]), columnName: "" }), t += "<td>", t += "</tr>", t += "</table>", t += "</div>";
    }), t += "</div>", e.container.find(".list").html(t), n.get_remove_item(e), l.get_functions(e.container.find(".list")), n.get_handle_checkboxes(e);
  }, this.get_handle_checkboxes = function (e) {
    var t = e.container.find(".list input[type='checkbox']");t.closest("label").closest("div").each(function () {
      $(this).css({ float: "left", "margin-right": "7px" });
    }), t.change(function () {
      var t = [];"*" == $(this).val() && $(this).is(":checked") ? ($(this).closest("td").find("input").prop("checked", !1), $(this).closest("td").find("input").closest("label").find("i").addClass("flix-glyphicon-unchecked").removeClass("flix-glyphicon-check"), $(this).closest("td").find("input").eq(0).prop("checked", !0), $(this).closest("td").find("input").eq(0).closest("label").find("i").removeClass("flix-glyphicon-unchecked").addClass("flix-glyphicon-check")) : $(this).is(":checked") && ($(this).closest("td").find("input").eq(0).prop("checked", !1), $(this).closest("td").find("input").eq(0).closest("label").find("i").addClass("flix-glyphicon-unchecked").removeClass("flix-glyphicon-check")), $(this).closest("td").find("input").each(function () {
        $(this).is(":checked") && t.push($(this).attr("value"));
      }), t.length ? (n.data[1][n.data[0].ID].shares[e.container.find(".flix-list-group-item").index($(this).closest(".flix-list-group-item"))].shares = t, n.get_save_shares()) : $(this).closest("td").find("input").eq(0).prop("checked", !0).trigger("change");
    });
  }, this.get_ressource_calendars = function (e) {
    var t = [{ value: "*", label: "ALLE" }];return "object" == _typeof(e.calendar) && 0 != e.calendar.length && ($.each(n.calendars, function (i, n) {
      -1 != e.calendar.indexOf(n.value) && t.push(n);
    }), t);
  }, this.get_calendar = function (e) {
    $.post(FLIX_URLS.api + n.lang + "/assistent/get_assistents", { user: a }).success(function (t) {
      if (!t[0]) return e(), !1;var i = [];$.each(t[1], function (e, t) {
        i.push({ label: t.title, value: t.ID });
      }), n.calendars = i, e();
    });
  }, this.get_save_shares = function () {
    var e = n.data[1][n.data[0].ID].shares,
        t = { user: a, data: { shares: e }, ID: n.data[0].ID };$.post(FLIX_URLS.api + n.lang + "/ressources/connect/save_shares", t);
  }, this.get_remove_item = function (e) {
    e.container.find(".list").find("a").unbind("click"), e.container.find(".list").find("a").click(function () {
      var e = $(this).attr("href").replace("#", "");return delete n.data[1][n.data[0].ID].shares[e], n.data[1][n.data[0].ID].shares = Object.values(n.data[1][n.data[0].ID].shares), $(this).closest(".flix-list-group-item").fadeOut(300, function () {
        $(this).remove();
      }), n.get_save_shares(), !1;
    });
  };
}),
    flix_ressources_website = function flix_ressources_website(e, t, i) {
  var n = this;localStorage.getItem("flix_login"), new flix_form_elements();this.build = function () {
    i.get_new_section($(e), { title: "Website editieren", html: "<div class='flix-header'><input type='hidden' ID='id' value='ressource_" + n.data[0].ID + "'><a class='flix-btn-landingpage' href='" + n.data[1][n.data[0].ID].url + "'></a></div><div class='flix-website'></div>", onReady: function onReady(e) {
        n.get_website(e);
      }, onClose: function onClose() {
        n.callback();
      } });
  }, this.get_website = function (e) {
    var t = new flix_landingpage_manager(e.container.find(".flix-website"), {});t.set_post_url(n.lang), t.get_html({ header: e.container.find(".flix-header"), id: "ressource_" + n.data[0].ID, stage: e.container.find(".flix-website") });
  };
};
"use strict";
var flix_shares = function flix_shares(e, t, n) {
  var i = this,
      l = localStorage.getItem("flix_login"),
      s = $(e).attr("data-flix-language"),
      a = new flix_form_elements(),
      r = n.post_url;this.build = function () {
    n.get_styles(), n.get_animateCSS(), s && (r += "?l=" + s), n.set_post_url(r), i.get_html();
  }, this.get_html = function () {
    var t = { user: l };$.post(FLIX_URLS.api + s + "/shares/get", t).success(function (t) {
      if (!t[0]) return $(e).html("<div class='flix-col-md-12'><div class='flix-alert flix-alert-danger'>Keine geteilten Ressourcen</div></div>"), !1;i.data = t[1], i.get_list_ressources();
    });
  }, this.get_list_ressources = function () {
    var t = "";t += '<div class="flix-list-group flix-html-html">', $.each(i.data, function (e, n) {
      t += '<a href="#' + e + '" class="flix-list-group-item flix-share" style="background-color: ' + n.info.ressource.color + ';" >', t += '<b class="flix-tooltip"  data-tooltip="' + n.info.ressource.description + '">', t += n.info.ressource.title, t += "</b>", t += "<br>", t += '<span style="font-size: 9pt;">', t += "geteilt von ", t += "<i class='flix-glyphicon flix-glyphicon-user'></i> ", t += n.info.username, t += "</span>", t += "</a>";
    }), t += "</div>", $(e).html(t), i.get_click_ressource();
  }, this.get_click_ressource = function () {
    $(e).find(".flix-share").unbind("click"), $(e).find(".flix-share").click(function () {
      var t = $(this),
          l = $(this).attr("href").replace("#", ""),
          r = i.data[l],
          c = "";return r.info.ressource.description && (c += '<div class="flix-col-md-12"><div class="flix-well">' + r.info.ressource.description + "</div></div>"), c += a.get_header({ subtype: "h4", label: "Freigegebene Kalender:" }), c += "<div class='flix-share' data-flix-language='" + s + "'></div>", n.get_new_section($(e), { title: t.find("b").text(), html: c, onReady: function onReady(e) {
          i.get_show_calendar_select(e, r);
        } }), !1;
    });
  }, this.get_show_calendar_select = function (e, t) {
    if (void 0 === t.calendar) return e.container.find(".flix-share").html("<div class='flix-col-md-12'><div class='flix-alert flix-alert-danger'>Keine Kalender hinterlegt</div></div>"), !1;var n = new flix_overhead(e.container.find(".flix-share"), { onChange: function onChange(e) {
        i.get_entry_manager(e, t);
      }, onReady: function onReady(e) {
        e.header.find(".flix-btn-delete, .flix-btn-copy").css({ "text-decoration": "line-through", "pointer-events": "none" }), i.get_entry_manager(e, t);
      } });n.login = t.info.user, n.crypted = t.crypted, n.saved_assistents = t.calendar, n.get_header();
  }, this.get_entry_manager = function (e, i) {
    var l = new flix_entry_manager(e.stage, t, n, { language: { "change date": "Datum ändern", ical: "Termin in eigenen Kalender exportieren", blacklist: "Auf Blacklist setzen", "change booking status": "Buchungsstatus ändern", cancellation: "Absage", commitment: "Zusage", open: "Offen", yes: "Ja", no: "Nein", userchat: "Chatnachrichten", "internal notes": "Interne Notizen", "delete booking": "Terminbuchung löschen", delete: "Löschen", "no entries": "Keine Einträge", "all data will be deleted": "Alle Daten werden gelöscht", save: "speichern" } });l.lang = s, l.ret = e, l.get_manager(e);
  };
};
"use strict";
var flix_support_center = function flix_support_center(t, l, i, e) {
  var a = this,
      n = i.post_url;this.build = function () {
    i.get_styles(), i.get_animateCSS(), a.get_menu();
  }, this.get_menu = function () {
    $(t).attr("data-flix-language") && (n += "?l=" + $(t).attr("data-flix-language")), i.set_post_url(n), $.post(FLIX_URLS.api + $(t).attr("data-flix-language") + "/support_center/get_buttons", {}).success(function (l) {
      var e = "";e += '<h3 class="flix-html-h3 flix-text-center">' + l.title + "</h3>", e += '<div class="flix-col-md-8 flix-col-md-flix-offset-2">', $.each(l.buttons, function (t, l) {
        e += '<div class="flix-col-md-6 flix-col-sm-6">', e += '<div class="flix-well" style="background-color: #CFD8DC;"><a href="#' + t + '" class="flix-html-a flix-support flix-support-' + t + '">' + i.get_loader() + '</a><div class="flix-clearfix"></div></div>', e += "</div>";
      }), e += "</div>", e += '<div class="flix-clearfix"></div>', $(t).html(e), a.get_buttons(l), a.get_functions(l);
    });
  }, this.get_functions = function (e) {
    $(t).find(".flix-support").unbind("click"), $(t).find(".flix-support").click(function () {
      var a = $(this).attr("href").replace("#", ""),
          n = "";switch (a) {case "faq":
          i.get_new_section(t, { html: '<div data-flix-help-center data-flix-language="' + $(t).attr("data-flix-language") + '"></div>', title: e.buttons[a].title + " - " + e.buttons[a].subtitle, onReady: function onReady(t) {
              new flix_help_center(t.container.find("[data-flix-help-center]"), l, i);
            } });break;case "chat":
          i.get_new_section(t, { html: '<div data-flix-chat data-flix-language="' + $(t).attr("data-flix-language") + '"></div>', title: e.buttons[a].title + " - " + e.buttons[a].subtitle, onReady: function onReady(t) {
              new flix_chat(t.container.find("[data-flix-chat]"), l, i);
            } });break;case "contact":
          $.post(FLIX_URLS.api + $(t).attr("data-flix-language") + "/page/imprint", {}).success(function (t) {
            n += '<h3 class="flix-html-h3 flix-text-center">' + t.result.company + "</h3>", n += '<b class=" flix-text-center">' + t.result.slogan + "</b>", n += "<br>", n += "<br>", n += '<i class="flix-glyphicon flix-glyphicon-iphone"></i> <a class="flix-html-a" href="tel:' + t.result.tel + '">' + t.result.tel + "</a>", n += "<br>", n += '<i class="flix-glyphicon flix-glyphicon-envelope"></i> <a class="flix-html-a" href="mailto:' + t.result.email + '" target="_blank">' + t.result.email + "</a>", swal.fire({ title: e.buttons[a].title + " - " + e.buttons[a].subtitle, html: n, showCloseButton: !0, showConfirmButton: !1 });
          });break;case "video":
          $.post(FLIX_URLS.api + $(t).attr("data-flix-language") + "/page/video", {}).success(function (l) {
            i.get_new_section(t, { html: "<div class='video'></div>", title: e.buttons[a].title + " - " + e.buttons[a].subtitle, onReady: function onReady(t) {
                t.container.find(".video").html(l[1]);
              } });
          });}return !1;
    });
  }, this.get_buttons = function (l) {
    $.each(l.buttons, function (l, i) {
      $(t).find(".flix-support-" + l).html(new flix_dashboard_functions($(t).find(".flix-support-" + l)).get_panel({ col: 12, title: i.title, subtitle: "<br><small class='flix-html-small'>(" + i.subtitle + ")</small>", body: "" }));
    });
  };
};
"use strict";
var flix_usercenter_landingpage = function flix_usercenter_landingpage(t) {
  var n = this;n.menu = { Termindetails: ["booking-details.html", "flix-glyphicon flix-glyphicon-important-day"], "Eigene Angaben": ["entry.html", "flix-glyphicon flix-glyphicon-list-numbered"], "Termin ändern": ["change-appointment.html", "flix-glyphicon flix-glyphicon-git-delete"], Kontakt: ["contact.html", "flix-glyphicon flix-glyphicon-phone-alt"], Chat: ["chat.html", "flix-glyphicon flix-glyphicon-conversation"], "Social-Media": ["social.html", "flix-glyphicon flix-glyphicon-share-alt"], Impressum: ["imprint.html", "flix-glyphicon flix-glyphicon-paragraph-alt"], Datenschutz: ["privacy.html", "flix-glyphicon flix-glyphicon-lock"] }, this.build = function () {
    n.lp = new flix_landingpage(t), n.lp.login = n.login, n.lp.page_id = n.data.form, n.lp.lang = n.lang, n.lp.menu = n.menu, n.lp.get_data = function (l) {
      var e = { user: n.lp.login, ID: n.lp.page_id };$.post(FLIX_URLS.api + n.lp.lang + "/landingpage/get", e).success(function (e) {
        e.content["booking-details.html"] = $.parseJSON(JSON.stringify(e.content["homepage.html"])), e.content["booking-details.html"].url = "contact.html", e.content["booking-details.html"].content = n.data, e.content["entry.html"] = $.parseJSON(JSON.stringify(e.content["homepage.html"])), e.content["entry.html"].url = "entry.html", e.content["entry.html"].content = n.data, e.content["chat.html"] = $.parseJSON(JSON.stringify(e.content["homepage.html"])), e.content["chat.html"].url = "chat.html", e.content["chat.html"].content = n.data, e.content["change-appointment.html"] = $.parseJSON(JSON.stringify(e.content["homepage.html"])), e.content["change-appointment.html"].url = "change-appointment.html", e.content["change-appointment.html"].content = n.data, l(e), setTimeout(function () {
          $(t).find(".flix-navbar-toggle.flix-collapsed").trigger("click");
        }, 500);
      });
    }, n.lp.build(t);
  };
},
    flix_usercenter = function flix_usercenter(t) {
  var n = this;n.user = "", n.lang = "", n.entry = "";var l = new flix_termin_flix(t, flix_setup_code),
      e = l.post_url;this.build = function () {
    n.get_data(function (l) {
      n.data = l;var e = new flix_usercenter_landingpage(t);e.login = n.user, e.data = n.data, e.lang = n.lang, e.build();
    });
  }, this.build2 = function () {
    n.lang && (e += "?l=" + n.lang), l.set_post_url(e);
  }, this.get_data = function (t) {
    var l = new flix_usercenter_userentry(!1);l.lang = n.lang, l.user = n.user, l.ID = n.entry, l.callback = t, l.build();
  };
},
    flix_usercenter_userentry = function flix_usercenter_userentry(t) {
  var n = this;this.build = function () {
    $.post(FLIX_URLS.api + n.lang + "/booking/validate", { user: n.user, ID: n.ID }).success(function (t) {
      $.post(FLIX_URLS.api + n.lang + "/booking/get_by_id", { user: n.user, ID: n.ID }).success(function (t) {
        n.callback(t[1][0]);
      });
    });
  };
};var flix_setup_code = new flix_setup();flix_setup_code.flix_load_script(FLIX_URLS.embed + 'bootstrap/bootstrap.min.js', typeof $.fn.collapse, function() {});
