// .prevpress/vendor/3VJX64FM.js
var n;
var l;
var u;
var t;
var i;
var o;
var r;
var f;
var e;
var c = {};
var s = [];
var a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var h = Array.isArray;
function v(n2, l22) {
  for (var u22 in l22)
    n2[u22] = l22[u22];
  return n2;
}
function p(n2) {
  var l22 = n2.parentNode;
  l22 && l22.removeChild(n2);
}
function y(l22, u22, t2) {
  var i22, o2, r2, f22 = {};
  for (r2 in u22)
    "key" == r2 ? i22 = u22[r2] : "ref" == r2 ? o2 = u22[r2] : f22[r2] = u22[r2];
  if (arguments.length > 2 && (f22.children = arguments.length > 3 ? n.call(arguments, 2) : t2), "function" == typeof l22 && null != l22.defaultProps)
    for (r2 in l22.defaultProps)
      void 0 === f22[r2] && (f22[r2] = l22.defaultProps[r2]);
  return d(l22, f22, i22, o2, null);
}
function d(n2, t2, i22, o2, r2) {
  var f22 = { type: n2, props: t2, key: i22, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r2 ? ++u : r2, __i: -1, __u: 0 };
  return null == r2 && null != l.vnode && l.vnode(f22), f22;
}
function g(n2) {
  return n2.children;
}
function b(n2, l22) {
  this.props = n2, this.context = l22;
}
function m(n2, l22) {
  if (null == l22)
    return n2.__ ? m(n2.__, n2.__i + 1) : null;
  for (var u22; l22 < n2.__k.length; l22++)
    if (null != (u22 = n2.__k[l22]) && null != u22.__e)
      return u22.__e;
  return "function" == typeof n2.type ? m(n2) : null;
}
function w(n2, u22, t2) {
  var i22, o2 = n2.__v, r2 = o2.__e, f22 = n2.__P;
  if (f22)
    return (i22 = v({}, o2)).__v = o2.__v + 1, l.vnode && l.vnode(i22), M(f22, i22, o2, n2.__n, void 0 !== f22.ownerSVGElement, 32 & o2.__u ? [r2] : null, u22, null == r2 ? m(o2) : r2, !!(32 & o2.__u), t2), i22.__v = o2.__v, i22.__.__k[i22.__i] = i22, i22.__d = void 0, i22.__e != r2 && k(i22), i22;
}
function k(n2) {
  var l22, u22;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l22 = 0; l22 < n2.__k.length; l22++)
      if (null != (u22 = n2.__k[l22]) && null != u22.__e) {
        n2.__e = n2.__c.base = u22.__e;
        break;
      }
    return k(n2);
  }
}
function x(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !C.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(C);
}
function C() {
  var n2, u22, t2, o2 = [], r2 = [];
  for (i.sort(f); n2 = i.shift(); )
    n2.__d && (t2 = i.length, u22 = w(n2, o2, r2) || u22, 0 === t2 || i.length > t2 ? (j(o2, u22, r2), r2.length = o2.length = 0, u22 = void 0, i.sort(f)) : u22 && l.__c && l.__c(u22, s));
  u22 && j(o2, u22, r2), C.__r = 0;
}
function P(n2, l22, u22, t2, i22, o2, r2, f22, e2, a22, h2) {
  var v2, p2, y2, d2, _2, g2 = t2 && t2.__k || s, b2 = l22.length;
  for (u22.__d = e2, S(u22, l22, g2), e2 = u22.__d, v2 = 0; v2 < b2; v2++)
    null != (y2 = u22.__k[v2]) && "boolean" != typeof y2 && "function" != typeof y2 && (p2 = -1 === y2.__i ? c : g2[y2.__i] || c, y2.__i = v2, M(n2, y2, p2, i22, o2, r2, f22, e2, a22, h2), d2 = y2.__e, y2.ref && p2.ref != y2.ref && (p2.ref && N(p2.ref, null, y2), h2.push(y2.ref, y2.__c || d2, y2)), null == _2 && null != d2 && (_2 = d2), 65536 & y2.__u || p2.__k === y2.__k ? e2 = $(y2, e2, n2) : "function" == typeof y2.type && void 0 !== y2.__d ? e2 = y2.__d : d2 && (e2 = d2.nextSibling), y2.__d = void 0, y2.__u &= -196609);
  u22.__d = e2, u22.__e = _2;
}
function S(n2, l22, u22) {
  var t2, i22, o2, r2, f22, e2 = l22.length, c2 = u22.length, s2 = c2, a22 = 0;
  for (n2.__k = [], t2 = 0; t2 < e2; t2++)
    null != (i22 = n2.__k[t2] = null == (i22 = l22[t2]) || "boolean" == typeof i22 || "function" == typeof i22 ? null : "string" == typeof i22 || "number" == typeof i22 || "bigint" == typeof i22 || i22.constructor == String ? d(null, i22, null, null, i22) : h(i22) ? d(g, { children: i22 }, null, null, null) : void 0 === i22.constructor && i22.__b > 0 ? d(i22.type, i22.props, i22.key, i22.ref ? i22.ref : null, i22.__v) : i22) ? (i22.__ = n2, i22.__b = n2.__b + 1, f22 = I(i22, u22, r2 = t2 + a22, s2), i22.__i = f22, o2 = null, -1 !== f22 && (s2--, (o2 = u22[f22]) && (o2.__u |= 131072)), null == o2 || null === o2.__v ? (-1 == f22 && a22--, "function" != typeof i22.type && (i22.__u |= 65536)) : f22 !== r2 && (f22 === r2 + 1 ? a22++ : f22 > r2 ? s2 > e2 - r2 ? a22 += f22 - r2 : a22-- : a22 = f22 < r2 && f22 == r2 - 1 ? f22 - r2 : 0, f22 !== t2 + a22 && (i22.__u |= 65536))) : (o2 = u22[t2]) && null == o2.key && o2.__e && 0 == (131072 & o2.__u) && (o2.__e == n2.__d && (n2.__d = m(o2)), O(o2, o2, false), u22[t2] = null, s2--);
  if (s2)
    for (t2 = 0; t2 < c2; t2++)
      null != (o2 = u22[t2]) && 0 == (131072 & o2.__u) && (o2.__e == n2.__d && (n2.__d = m(o2)), O(o2, o2));
}
function $(n2, l22, u22) {
  var t2, i22;
  if ("function" == typeof n2.type) {
    for (t2 = n2.__k, i22 = 0; t2 && i22 < t2.length; i22++)
      t2[i22] && (t2[i22].__ = n2, l22 = $(t2[i22], l22, u22));
    return l22;
  }
  n2.__e != l22 && (u22.insertBefore(n2.__e, l22 || null), l22 = n2.__e);
  do {
    l22 = l22 && l22.nextSibling;
  } while (null != l22 && 8 === l22.nodeType);
  return l22;
}
function I(n2, l22, u22, t2) {
  var i22 = n2.key, o2 = n2.type, r2 = u22 - 1, f22 = u22 + 1, e2 = l22[u22];
  if (null === e2 || e2 && i22 == e2.key && o2 === e2.type)
    return u22;
  if (t2 > (null != e2 && 0 == (131072 & e2.__u) ? 1 : 0))
    for (; r2 >= 0 || f22 < l22.length; ) {
      if (r2 >= 0) {
        if ((e2 = l22[r2]) && 0 == (131072 & e2.__u) && i22 == e2.key && o2 === e2.type)
          return r2;
        r2--;
      }
      if (f22 < l22.length) {
        if ((e2 = l22[f22]) && 0 == (131072 & e2.__u) && i22 == e2.key && o2 === e2.type)
          return f22;
        f22++;
      }
    }
  return -1;
}
function T(n2, l22, u22) {
  "-" === l22[0] ? n2.setProperty(l22, null == u22 ? "" : u22) : n2[l22] = null == u22 ? "" : "number" != typeof u22 || a.test(l22) ? u22 : u22 + "px";
}
function A(n2, l22, u22, t2, i22) {
  var o2;
  n:
    if ("style" === l22)
      if ("string" == typeof u22)
        n2.style.cssText = u22;
      else {
        if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2)
          for (l22 in t2)
            u22 && l22 in u22 || T(n2.style, l22, "");
        if (u22)
          for (l22 in u22)
            t2 && u22[l22] === t2[l22] || T(n2.style, l22, u22[l22]);
      }
    else if ("o" === l22[0] && "n" === l22[1])
      o2 = l22 !== (l22 = l22.replace(/(PointerCapture)$|Capture$/i, "$1")), l22 = l22.toLowerCase() in n2 ? l22.toLowerCase().slice(2) : l22.slice(2), n2.l || (n2.l = {}), n2.l[l22 + o2] = u22, u22 ? t2 ? u22.u = t2.u : (u22.u = Date.now(), n2.addEventListener(l22, o2 ? L : D, o2)) : n2.removeEventListener(l22, o2 ? L : D, o2);
    else {
      if (i22)
        l22 = l22.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" !== l22 && "height" !== l22 && "href" !== l22 && "list" !== l22 && "form" !== l22 && "tabIndex" !== l22 && "download" !== l22 && "rowSpan" !== l22 && "colSpan" !== l22 && "role" !== l22 && l22 in n2)
        try {
          n2[l22] = null == u22 ? "" : u22;
          break n;
        } catch (n3) {
        }
      "function" == typeof u22 || (null == u22 || false === u22 && "-" !== l22[4] ? n2.removeAttribute(l22) : n2.setAttribute(l22, u22));
    }
}
function D(n2) {
  if (this.l) {
    var u22 = this.l[n2.type + false];
    if (n2.t) {
      if (n2.t <= u22.u)
        return;
    } else
      n2.t = Date.now();
    return u22(l.event ? l.event(n2) : n2);
  }
}
function L(n2) {
  if (this.l)
    return this.l[n2.type + true](l.event ? l.event(n2) : n2);
}
function M(n2, u22, t2, i22, o2, r2, f22, e2, c2, s2) {
  var a22, p2, y2, d2, _2, m2, w2, k2, x2, C2, S2, $2, H2, I2, T2, A2 = u22.type;
  if (void 0 !== u22.constructor)
    return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), r2 = [e2 = u22.__e = t2.__e]), (a22 = l.__b) && a22(u22);
  n:
    if ("function" == typeof A2)
      try {
        if (k2 = u22.props, x2 = (a22 = A2.contextType) && i22[a22.__c], C2 = a22 ? x2 ? x2.props.value : a22.__ : i22, t2.__c ? w2 = (p2 = u22.__c = t2.__c).__ = p2.__E : ("prototype" in A2 && A2.prototype.render ? u22.__c = p2 = new A2(k2, C2) : (u22.__c = p2 = new b(k2, C2), p2.constructor = A2, p2.render = q), x2 && x2.sub(p2), p2.props = k2, p2.state || (p2.state = {}), p2.context = C2, p2.__n = i22, y2 = p2.__d = true, p2.__h = [], p2._sb = []), null == p2.__s && (p2.__s = p2.state), null != A2.getDerivedStateFromProps && (p2.__s == p2.state && (p2.__s = v({}, p2.__s)), v(p2.__s, A2.getDerivedStateFromProps(k2, p2.__s))), d2 = p2.props, _2 = p2.state, p2.__v = u22, y2)
          null == A2.getDerivedStateFromProps && null != p2.componentWillMount && p2.componentWillMount(), null != p2.componentDidMount && p2.__h.push(p2.componentDidMount);
        else {
          if (null == A2.getDerivedStateFromProps && k2 !== d2 && null != p2.componentWillReceiveProps && p2.componentWillReceiveProps(k2, C2), !p2.__e && (null != p2.shouldComponentUpdate && false === p2.shouldComponentUpdate(k2, p2.__s, C2) || u22.__v === t2.__v)) {
            for (u22.__v !== t2.__v && (p2.props = k2, p2.state = p2.__s, p2.__d = false), u22.__e = t2.__e, u22.__k = t2.__k, u22.__k.forEach(function(n3) {
              n3 && (n3.__ = u22);
            }), S2 = 0; S2 < p2._sb.length; S2++)
              p2.__h.push(p2._sb[S2]);
            p2._sb = [], p2.__h.length && f22.push(p2);
            break n;
          }
          null != p2.componentWillUpdate && p2.componentWillUpdate(k2, p2.__s, C2), null != p2.componentDidUpdate && p2.__h.push(function() {
            p2.componentDidUpdate(d2, _2, m2);
          });
        }
        if (p2.context = C2, p2.props = k2, p2.__P = n2, p2.__e = false, $2 = l.__r, H2 = 0, "prototype" in A2 && A2.prototype.render) {
          for (p2.state = p2.__s, p2.__d = false, $2 && $2(u22), a22 = p2.render(p2.props, p2.state, p2.context), I2 = 0; I2 < p2._sb.length; I2++)
            p2.__h.push(p2._sb[I2]);
          p2._sb = [];
        } else
          do {
            p2.__d = false, $2 && $2(u22), a22 = p2.render(p2.props, p2.state, p2.context), p2.state = p2.__s;
          } while (p2.__d && ++H2 < 25);
        p2.state = p2.__s, null != p2.getChildContext && (i22 = v(v({}, i22), p2.getChildContext())), y2 || null == p2.getSnapshotBeforeUpdate || (m2 = p2.getSnapshotBeforeUpdate(d2, _2)), P(n2, h(T2 = null != a22 && a22.type === g && null == a22.key ? a22.props.children : a22) ? T2 : [T2], u22, t2, i22, o2, r2, f22, e2, c2, s2), p2.base = u22.__e, u22.__u &= -161, p2.__h.length && f22.push(p2), w2 && (p2.__E = p2.__ = null);
      } catch (n3) {
        u22.__v = null, c2 || null != r2 ? (u22.__e = e2, u22.__u |= c2 ? 160 : 32, r2[r2.indexOf(e2)] = null) : (u22.__e = t2.__e, u22.__k = t2.__k), l.__e(n3, u22, t2);
      }
    else
      null == r2 && u22.__v === t2.__v ? (u22.__k = t2.__k, u22.__e = t2.__e) : u22.__e = z(t2.__e, u22, t2, i22, o2, r2, f22, c2, s2);
  (a22 = l.diffed) && a22(u22);
}
function j(n2, u22, t2) {
  for (var i22 = 0; i22 < t2.length; i22++)
    N(t2[i22], t2[++i22], t2[++i22]);
  l.__c && l.__c(u22, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l.__e(n3, u3.__v);
    }
  });
}
function z(l22, u22, t2, i22, o2, r2, f22, e2, s2) {
  var a22, v2, y2, d2, _2, g2, b2, w2 = t2.props, k2 = u22.props, x2 = u22.type;
  if ("svg" === x2 && (o2 = true), null != r2) {
    for (a22 = 0; a22 < r2.length; a22++)
      if ((_2 = r2[a22]) && "setAttribute" in _2 == !!x2 && (x2 ? _2.localName === x2 : 3 === _2.nodeType)) {
        l22 = _2, r2[a22] = null;
        break;
      }
  }
  if (null == l22) {
    if (null === x2)
      return document.createTextNode(k2);
    l22 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", x2) : document.createElement(x2, k2.is && k2), r2 = null, e2 = false;
  }
  if (null === x2)
    w2 === k2 || e2 && l22.data === k2 || (l22.data = k2);
  else {
    if (r2 = r2 && n.call(l22.childNodes), w2 = t2.props || c, !e2 && null != r2)
      for (w2 = {}, a22 = 0; a22 < l22.attributes.length; a22++)
        w2[(_2 = l22.attributes[a22]).name] = _2.value;
    for (a22 in w2)
      _2 = w2[a22], "children" == a22 || ("dangerouslySetInnerHTML" == a22 ? y2 = _2 : "key" === a22 || a22 in k2 || A(l22, a22, null, _2, o2));
    for (a22 in k2)
      _2 = k2[a22], "children" == a22 ? d2 = _2 : "dangerouslySetInnerHTML" == a22 ? v2 = _2 : "value" == a22 ? g2 = _2 : "checked" == a22 ? b2 = _2 : "key" === a22 || e2 && "function" != typeof _2 || w2[a22] === _2 || A(l22, a22, _2, w2[a22], o2);
    if (v2)
      e2 || y2 && (v2.__html === y2.__html || v2.__html === l22.innerHTML) || (l22.innerHTML = v2.__html), u22.__k = [];
    else if (y2 && (l22.innerHTML = ""), P(l22, h(d2) ? d2 : [d2], u22, t2, i22, o2 && "foreignObject" !== x2, r2, f22, r2 ? r2[0] : t2.__k && m(t2, 0), e2, s2), null != r2)
      for (a22 = r2.length; a22--; )
        null != r2[a22] && p(r2[a22]);
    e2 || (a22 = "value", void 0 !== g2 && (g2 !== l22[a22] || "progress" === x2 && !g2 || "option" === x2 && g2 !== w2[a22]) && A(l22, a22, g2, w2[a22], false), a22 = "checked", void 0 !== b2 && b2 !== l22[a22] && A(l22, a22, b2, w2[a22], false));
  }
  return l22;
}
function N(n2, u22, t2) {
  try {
    "function" == typeof n2 ? n2(u22) : n2.current = u22;
  } catch (n3) {
    l.__e(n3, t2);
  }
}
function O(n2, u22, t2) {
  var i22, o2;
  if (l.unmount && l.unmount(n2), (i22 = n2.ref) && (i22.current && i22.current !== n2.__e || N(i22, null, u22)), null != (i22 = n2.__c)) {
    if (i22.componentWillUnmount)
      try {
        i22.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u22);
      }
    i22.base = i22.__P = null, n2.__c = void 0;
  }
  if (i22 = n2.__k)
    for (o2 = 0; o2 < i22.length; o2++)
      i22[o2] && O(i22[o2], u22, t2 || "function" != typeof n2.type);
  t2 || null == n2.__e || p(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
function q(n2, l22, u22) {
  return this.constructor(n2, u22);
}
function B(u22, t2, i22) {
  var o2, r2, f22, e2;
  l.__ && l.__(u22, t2), r2 = (o2 = "function" == typeof i22) ? null : i22 && i22.__k || t2.__k, f22 = [], e2 = [], M(t2, u22 = (!o2 && i22 || t2).__k = y(g, null, [u22]), r2 || c, c, void 0 !== t2.ownerSVGElement, !o2 && i22 ? [i22] : r2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, f22, !o2 && i22 ? i22 : r2 ? r2.__e : t2.firstChild, o2, e2), u22.__d = void 0, j(f22, u22, e2);
}
function E(n2, l22) {
  B(n2, l22, E);
}
n = s.slice, l = { __e: function(n2, l22, u22, t2) {
  for (var i22, o2, r2; l22 = l22.__; )
    if ((i22 = l22.__c) && !i22.__)
      try {
        if ((o2 = i22.constructor) && null != o2.getDerivedStateFromError && (i22.setState(o2.getDerivedStateFromError(n2)), r2 = i22.__d), null != i22.componentDidCatch && (i22.componentDidCatch(n2, t2 || {}), r2 = i22.__d), r2)
          return i22.__E = i22;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u = 0, t = function(n2) {
  return null != n2 && null == n2.constructor;
}, b.prototype.setState = function(n2, l22) {
  var u22;
  u22 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), "function" == typeof n2 && (n2 = n2(v({}, u22), this.props)), n2 && v(u22, n2), null != n2 && this.__v && (l22 && this._sb.push(l22), x(this));
}, b.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), x(this));
}, b.prototype.render = g, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l22) {
  return n2.__v.__b - l22.__v.__b;
}, C.__r = 0, e = 0;

// .prevpress/vendor/TD7LBBVB.js
var f2 = 0;
var i2 = Array.isArray;
function u2(e2, t2, n2, o2, i22, u22) {
  var a22, c2, p2 = {};
  for (c2 in t2)
    "ref" == c2 ? a22 = t2[c2] : p2[c2] = t2[c2];
  var l3 = { type: e2, props: p2, key: n2, ref: a22, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i22, __self: u22 };
  if ("function" == typeof e2 && (a22 = e2.defaultProps))
    for (c2 in a22)
      void 0 === p2[c2] && (p2[c2] = a22[c2]);
  return l.vnode && l.vnode(l3), l3;
}

export {
  l,
  g,
  E,
  u2 as u
};
