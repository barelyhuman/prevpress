// .prevpress/vendor/QO6VCUNI.js
var n;
var l;
var u;
var t;
var i;
var r;
var o;
var e;
var f;
var c;
var s;
var a;
var h;
var p = {};
var v = [];
var y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var d = Array.isArray;
function w(n2, l22) {
  for (var u22 in l22)
    n2[u22] = l22[u22];
  return n2;
}
function _(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function g(l22, u22, t2) {
  var i22, r2, o2, e2 = {};
  for (o2 in u22)
    "key" == o2 ? i22 = u22[o2] : "ref" == o2 ? r2 = u22[o2] : e2[o2] = u22[o2];
  if (arguments.length > 2 && (e2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), "function" == typeof l22 && null != l22.defaultProps)
    for (o2 in l22.defaultProps)
      void 0 === e2[o2] && (e2[o2] = l22.defaultProps[o2]);
  return m(l22, e2, i22, r2, null);
}
function m(n2, t2, i22, r2, o2) {
  var e2 = { type: n2, props: t2, key: i22, ref: r2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o2 ? ++u : o2, __i: -1, __u: 0 };
  return null == o2 && null != l.vnode && l.vnode(e2), e2;
}
function k(n2) {
  return n2.children;
}
function x(n2, l22) {
  this.props = n2, this.context = l22;
}
function C(n2, l22) {
  if (null == l22)
    return n2.__ ? C(n2.__, n2.__i + 1) : null;
  for (var u22; l22 < n2.__k.length; l22++)
    if (null != (u22 = n2.__k[l22]) && null != u22.__e)
      return u22.__e;
  return "function" == typeof n2.type ? C(n2) : null;
}
function S(n2) {
  var l22, u22;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l22 = 0; l22 < n2.__k.length; l22++)
      if (null != (u22 = n2.__k[l22]) && null != u22.__e) {
        n2.__e = n2.__c.base = u22.__e;
        break;
      }
    return S(n2);
  }
}
function M(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !P.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(P);
}
function P() {
  var n2, u22, t2, r2, o2, f22, c2, s22;
  for (i.sort(e); n2 = i.shift(); )
    n2.__d && (u22 = i.length, r2 = void 0, f22 = (o2 = (t2 = n2).__v).__e, c2 = [], s22 = [], t2.__P && ((r2 = w({}, o2)).__v = o2.__v + 1, l.vnode && l.vnode(r2), j(t2.__P, r2, o2, t2.__n, t2.__P.namespaceURI, 32 & o2.__u ? [f22] : null, c2, null == f22 ? C(o2) : f22, !!(32 & o2.__u), s22), r2.__v = o2.__v, r2.__.__k[r2.__i] = r2, z(c2, r2, s22), r2.__e != f22 && S(r2)), i.length > u22 && i.sort(e));
  P.__r = 0;
}
function $(n2, l22, u22, t2, i22, r2, o2, e2, f22, c2, s22) {
  var a22, h2, y2, d2, w2, _2, g2 = t2 && t2.__k || v, m2 = l22.length;
  for (f22 = I(u22, l22, g2, f22, m2), a22 = 0; a22 < m2; a22++)
    null != (y2 = u22.__k[a22]) && (h2 = -1 === y2.__i ? p : g2[y2.__i] || p, y2.__i = a22, _2 = j(n2, y2, h2, i22, r2, o2, e2, f22, c2, s22), d2 = y2.__e, y2.ref && h2.ref != y2.ref && (h2.ref && V(h2.ref, null, y2), s22.push(y2.ref, y2.__c || d2, y2)), null == w2 && null != d2 && (w2 = d2), 4 & y2.__u || h2.__k === y2.__k ? f22 = A(y2, f22, n2) : "function" == typeof y2.type && void 0 !== _2 ? f22 = _2 : d2 && (f22 = d2.nextSibling), y2.__u &= -7);
  return u22.__e = w2, f22;
}
function I(n2, l22, u22, t2, i22) {
  var r2, o2, e2, f22, c2, s22 = u22.length, a22 = s22, h2 = 0;
  for (n2.__k = new Array(i22), r2 = 0; r2 < i22; r2++)
    null != (o2 = l22[r2]) && "boolean" != typeof o2 && "function" != typeof o2 ? (f22 = r2 + h2, (o2 = n2.__k[r2] = "string" == typeof o2 || "number" == typeof o2 || "bigint" == typeof o2 || o2.constructor == String ? m(null, o2, null, null, null) : d(o2) ? m(k, { children: o2 }, null, null, null) : void 0 === o2.constructor && o2.__b > 0 ? m(o2.type, o2.props, o2.key, o2.ref ? o2.ref : null, o2.__v) : o2).__ = n2, o2.__b = n2.__b + 1, e2 = null, -1 !== (c2 = o2.__i = L(o2, u22, f22, a22)) && (a22--, (e2 = u22[c2]) && (e2.__u |= 2)), null == e2 || null === e2.__v ? (-1 == c2 && h2--, "function" != typeof o2.type && (o2.__u |= 4)) : c2 != f22 && (c2 == f22 - 1 ? h2-- : c2 == f22 + 1 ? h2++ : (c2 > f22 ? h2-- : h2++, o2.__u |= 4))) : n2.__k[r2] = null;
  if (a22)
    for (r2 = 0; r2 < s22; r2++)
      null != (e2 = u22[r2]) && 0 == (2 & e2.__u) && (e2.__e == t2 && (t2 = C(e2)), q(e2, e2));
  return t2;
}
function A(n2, l22, u22) {
  var t2, i22;
  if ("function" == typeof n2.type) {
    for (t2 = n2.__k, i22 = 0; t2 && i22 < t2.length; i22++)
      t2[i22] && (t2[i22].__ = n2, l22 = A(t2[i22], l22, u22));
    return l22;
  }
  n2.__e != l22 && (l22 && n2.type && !u22.contains(l22) && (l22 = C(n2)), u22.insertBefore(n2.__e, l22 || null), l22 = n2.__e);
  do {
    l22 = l22 && l22.nextSibling;
  } while (null != l22 && 8 == l22.nodeType);
  return l22;
}
function L(n2, l22, u22, t2) {
  var i22, r2, o2 = n2.key, e2 = n2.type, f22 = l22[u22];
  if (null === f22 || f22 && o2 == f22.key && e2 === f22.type && 0 == (2 & f22.__u))
    return u22;
  if (t2 > (null != f22 && 0 == (2 & f22.__u) ? 1 : 0))
    for (i22 = u22 - 1, r2 = u22 + 1; i22 >= 0 || r2 < l22.length; ) {
      if (i22 >= 0) {
        if ((f22 = l22[i22]) && 0 == (2 & f22.__u) && o2 == f22.key && e2 === f22.type)
          return i22;
        i22--;
      }
      if (r2 < l22.length) {
        if ((f22 = l22[r2]) && 0 == (2 & f22.__u) && o2 == f22.key && e2 === f22.type)
          return r2;
        r2++;
      }
    }
  return -1;
}
function T(n2, l22, u22) {
  "-" == l22[0] ? n2.setProperty(l22, null == u22 ? "" : u22) : n2[l22] = null == u22 ? "" : "number" != typeof u22 || y.test(l22) ? u22 : u22 + "px";
}
function F(n2, l22, u22, t2, i22) {
  var r2;
  n:
    if ("style" == l22)
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
    else if ("o" == l22[0] && "n" == l22[1])
      r2 = l22 != (l22 = l22.replace(f, "$1")), l22 = l22.toLowerCase() in n2 || "onFocusOut" == l22 || "onFocusIn" == l22 ? l22.toLowerCase().slice(2) : l22.slice(2), n2.l || (n2.l = {}), n2.l[l22 + r2] = u22, u22 ? t2 ? u22.u = t2.u : (u22.u = c, n2.addEventListener(l22, r2 ? a : s, r2)) : n2.removeEventListener(l22, r2 ? a : s, r2);
    else {
      if ("http://www.w3.org/2000/svg" == i22)
        l22 = l22.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l22 && "height" != l22 && "href" != l22 && "list" != l22 && "form" != l22 && "tabIndex" != l22 && "download" != l22 && "rowSpan" != l22 && "colSpan" != l22 && "role" != l22 && "popover" != l22 && l22 in n2)
        try {
          n2[l22] = null == u22 ? "" : u22;
          break n;
        } catch (n3) {
        }
      "function" == typeof u22 || (null == u22 || false === u22 && "-" != l22[4] ? n2.removeAttribute(l22) : n2.setAttribute(l22, "popover" == l22 && 1 == u22 ? "" : u22));
    }
}
function O(n2) {
  return function(u22) {
    if (this.l) {
      var t2 = this.l[u22.type + n2];
      if (null == u22.t)
        u22.t = c++;
      else if (u22.t < t2.u)
        return;
      return t2(l.event ? l.event(u22) : u22);
    }
  };
}
function j(n2, u22, t2, i22, r2, o2, e2, f22, c2, s22) {
  var a22, h2, p2, v2, y2, g2, m2, b2, C2, S2, M2, P2, I2, A2, H2, L2, T2, F2 = u22.type;
  if (void 0 !== u22.constructor)
    return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), o2 = [f22 = u22.__e = t2.__e]), (a22 = l.__b) && a22(u22);
  n:
    if ("function" == typeof F2)
      try {
        if (b2 = u22.props, C2 = "prototype" in F2 && F2.prototype.render, S2 = (a22 = F2.contextType) && i22[a22.__c], M2 = a22 ? S2 ? S2.props.value : a22.__ : i22, t2.__c ? m2 = (h2 = u22.__c = t2.__c).__ = h2.__E : (C2 ? u22.__c = h2 = new F2(b2, M2) : (u22.__c = h2 = new x(b2, M2), h2.constructor = F2, h2.render = B), S2 && S2.sub(h2), h2.props = b2, h2.state || (h2.state = {}), h2.context = M2, h2.__n = i22, p2 = h2.__d = true, h2.__h = [], h2._sb = []), C2 && null == h2.__s && (h2.__s = h2.state), C2 && null != F2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = w({}, h2.__s)), w(h2.__s, F2.getDerivedStateFromProps(b2, h2.__s))), v2 = h2.props, y2 = h2.state, h2.__v = u22, p2)
          C2 && null == F2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), C2 && null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
        else {
          if (C2 && null == F2.getDerivedStateFromProps && b2 !== v2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(b2, M2), !h2.__e && (null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(b2, h2.__s, M2) || u22.__v == t2.__v)) {
            for (u22.__v != t2.__v && (h2.props = b2, h2.state = h2.__s, h2.__d = false), u22.__e = t2.__e, u22.__k = t2.__k, u22.__k.some(function(n3) {
              n3 && (n3.__ = u22);
            }), P2 = 0; P2 < h2._sb.length; P2++)
              h2.__h.push(h2._sb[P2]);
            h2._sb = [], h2.__h.length && e2.push(h2);
            break n;
          }
          null != h2.componentWillUpdate && h2.componentWillUpdate(b2, h2.__s, M2), C2 && null != h2.componentDidUpdate && h2.__h.push(function() {
            h2.componentDidUpdate(v2, y2, g2);
          });
        }
        if (h2.context = M2, h2.props = b2, h2.__P = n2, h2.__e = false, I2 = l.__r, A2 = 0, C2) {
          for (h2.state = h2.__s, h2.__d = false, I2 && I2(u22), a22 = h2.render(h2.props, h2.state, h2.context), H2 = 0; H2 < h2._sb.length; H2++)
            h2.__h.push(h2._sb[H2]);
          h2._sb = [];
        } else
          do {
            h2.__d = false, I2 && I2(u22), a22 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
          } while (h2.__d && ++A2 < 25);
        h2.state = h2.__s, null != h2.getChildContext && (i22 = w(w({}, i22), h2.getChildContext())), C2 && !p2 && null != h2.getSnapshotBeforeUpdate && (g2 = h2.getSnapshotBeforeUpdate(v2, y2)), f22 = $(n2, d(L2 = null != a22 && a22.type === k && null == a22.key ? a22.props.children : a22) ? L2 : [L2], u22, t2, i22, r2, o2, e2, f22, c2, s22), h2.base = u22.__e, u22.__u &= -161, h2.__h.length && e2.push(h2), m2 && (h2.__E = h2.__ = null);
      } catch (n3) {
        if (u22.__v = null, c2 || null != o2)
          if (n3.then) {
            for (u22.__u |= c2 ? 160 : 128; f22 && 8 == f22.nodeType && f22.nextSibling; )
              f22 = f22.nextSibling;
            o2[o2.indexOf(f22)] = null, u22.__e = f22;
          } else
            for (T2 = o2.length; T2--; )
              _(o2[T2]);
        else
          u22.__e = t2.__e, u22.__k = t2.__k;
        l.__e(n3, u22, t2);
      }
    else
      null == o2 && u22.__v == t2.__v ? (u22.__k = t2.__k, u22.__e = t2.__e) : f22 = u22.__e = N(t2.__e, u22, t2, i22, r2, o2, e2, c2, s22);
  return (a22 = l.diffed) && a22(u22), 128 & u22.__u ? void 0 : f22;
}
function z(n2, u22, t2) {
  for (var i22 = 0; i22 < t2.length; i22++)
    V(t2[i22], t2[++i22], t2[++i22]);
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
function N(u22, t2, i22, r2, o2, e2, f22, c2, s22) {
  var a22, h2, v2, y2, w2, g2, m2, b2 = i22.props, k2 = t2.props, x2 = t2.type;
  if ("svg" == x2 ? o2 = "http://www.w3.org/2000/svg" : "math" == x2 ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), null != e2) {
    for (a22 = 0; a22 < e2.length; a22++)
      if ((w2 = e2[a22]) && "setAttribute" in w2 == !!x2 && (x2 ? w2.localName == x2 : 3 == w2.nodeType)) {
        u22 = w2, e2[a22] = null;
        break;
      }
  }
  if (null == u22) {
    if (null == x2)
      return document.createTextNode(k2);
    u22 = document.createElementNS(o2, x2, k2.is && k2), c2 && (l.__m && l.__m(t2, e2), c2 = false), e2 = null;
  }
  if (null === x2)
    b2 === k2 || c2 && u22.data === k2 || (u22.data = k2);
  else {
    if (e2 = e2 && n.call(u22.childNodes), b2 = i22.props || p, !c2 && null != e2)
      for (b2 = {}, a22 = 0; a22 < u22.attributes.length; a22++)
        b2[(w2 = u22.attributes[a22]).name] = w2.value;
    for (a22 in b2)
      if (w2 = b2[a22], "children" == a22)
        ;
      else if ("dangerouslySetInnerHTML" == a22)
        v2 = w2;
      else if (!(a22 in k2)) {
        if ("value" == a22 && "defaultValue" in k2 || "checked" == a22 && "defaultChecked" in k2)
          continue;
        F(u22, a22, null, w2, o2);
      }
    for (a22 in k2)
      w2 = k2[a22], "children" == a22 ? y2 = w2 : "dangerouslySetInnerHTML" == a22 ? h2 = w2 : "value" == a22 ? g2 = w2 : "checked" == a22 ? m2 = w2 : c2 && "function" != typeof w2 || b2[a22] === w2 || F(u22, a22, w2, b2[a22], o2);
    if (h2)
      c2 || v2 && (h2.__html === v2.__html || h2.__html === u22.innerHTML) || (u22.innerHTML = h2.__html), t2.__k = [];
    else if (v2 && (u22.innerHTML = ""), $(u22, d(y2) ? y2 : [y2], t2, i22, r2, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : o2, e2, f22, e2 ? e2[0] : i22.__k && C(i22, 0), c2, s22), null != e2)
      for (a22 = e2.length; a22--; )
        _(e2[a22]);
    c2 || (a22 = "value", "progress" == x2 && null == g2 ? u22.removeAttribute("value") : void 0 !== g2 && (g2 !== u22[a22] || "progress" == x2 && !g2 || "option" == x2 && g2 !== b2[a22]) && F(u22, a22, g2, b2[a22], o2), a22 = "checked", void 0 !== m2 && m2 !== u22[a22] && F(u22, a22, m2, b2[a22], o2));
  }
  return u22;
}
function V(n2, u22, t2) {
  try {
    if ("function" == typeof n2) {
      var i22 = "function" == typeof n2.__u;
      i22 && n2.__u(), i22 && null == u22 || (n2.__u = n2(u22));
    } else
      n2.current = u22;
  } catch (n3) {
    l.__e(n3, t2);
  }
}
function q(n2, u22, t2) {
  var i22, r2;
  if (l.unmount && l.unmount(n2), (i22 = n2.ref) && (i22.current && i22.current !== n2.__e || V(i22, null, u22)), null != (i22 = n2.__c)) {
    if (i22.componentWillUnmount)
      try {
        i22.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u22);
      }
    i22.base = i22.__P = null;
  }
  if (i22 = n2.__k)
    for (r2 = 0; r2 < i22.length; r2++)
      i22[r2] && q(i22[r2], u22, t2 || "function" != typeof n2.type);
  t2 || _(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
}
function B(n2, l22, u22) {
  return this.constructor(n2, u22);
}
function D(u22, t2, i22) {
  var r2, o2, e2, f22;
  t2 == document && (t2 = document.documentElement), l.__ && l.__(u22, t2), o2 = (r2 = "function" == typeof i22) ? null : i22 && i22.__k || t2.__k, e2 = [], f22 = [], j(t2, u22 = (!r2 && i22 || t2).__k = g(k, null, [u22]), o2 || p, p, t2.namespaceURI, !r2 && i22 ? [i22] : o2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, e2, !r2 && i22 ? i22 : o2 ? o2.__e : t2.firstChild, r2, f22), z(e2, u22, f22);
}
function E(n2, l22) {
  D(n2, l22, E);
}
n = v.slice, l = { __e: function(n2, l22, u22, t2) {
  for (var i22, r2, o2; l22 = l22.__; )
    if ((i22 = l22.__c) && !i22.__)
      try {
        if ((r2 = i22.constructor) && null != r2.getDerivedStateFromError && (i22.setState(r2.getDerivedStateFromError(n2)), o2 = i22.__d), null != i22.componentDidCatch && (i22.componentDidCatch(n2, t2 || {}), o2 = i22.__d), o2)
          return i22.__E = i22;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u = 0, t = function(n2) {
  return null != n2 && null == n2.constructor;
}, x.prototype.setState = function(n2, l22) {
  var u22;
  u22 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = w({}, this.state), "function" == typeof n2 && (n2 = n2(w({}, u22), this.props)), n2 && w(u22, n2), null != n2 && this.__v && (l22 && this._sb.push(l22), M(this));
}, x.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
}, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l22) {
  return n2.__v.__b - l22.__v.__b;
}, P.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = O(false), a = O(true), h = 0;

// .prevpress/vendor/JWAD3DLJ.js
var f2 = 0;
var i2 = Array.isArray;
function u2(e2, t2, n2, o2, i22, u22) {
  t2 || (t2 = {});
  var a22, c2, p2 = t2;
  if ("ref" in p2)
    for (c2 in p2 = {}, t2)
      "ref" == c2 ? a22 = t2[c2] : p2[c2] = t2[c2];
  var l3 = { type: e2, props: p2, key: n2, ref: a22, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i22, __self: u22 };
  if ("function" == typeof e2 && (a22 = e2.defaultProps))
    for (c2 in a22)
      void 0 === p2[c2] && (p2[c2] = a22[c2]);
  return l.vnode && l.vnode(l3), l3;
}

export {
  g,
  k,
  E,
  u2 as u
};
