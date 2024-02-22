// node_modules/preact/dist/preact.module.js
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
function v(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function p(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function y(l2, u2, t2) {
  var i2, o2, r2, f2 = {};
  for (r2 in u2)
    "key" == r2 ? i2 = u2[r2] : "ref" == r2 ? o2 = u2[r2] : f2[r2] = u2[r2];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), "function" == typeof l2 && null != l2.defaultProps)
    for (r2 in l2.defaultProps)
      void 0 === f2[r2] && (f2[r2] = l2.defaultProps[r2]);
  return d(l2, f2, i2, o2, null);
}
function d(n2, t2, i2, o2, r2) {
  var f2 = { type: n2, props: t2, key: i2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r2 ? ++u : r2, __i: -1, __u: 0 };
  return null == r2 && null != l.vnode && l.vnode(f2), f2;
}
function g(n2) {
  return n2.children;
}
function b(n2, l2) {
  this.props = n2, this.context = l2;
}
function m(n2, l2) {
  if (null == l2)
    return n2.__ ? m(n2.__, n2.__i + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if (null != (u2 = n2.__k[l2]) && null != u2.__e)
      return u2.__e;
  return "function" == typeof n2.type ? m(n2) : null;
}
function w(n2, u2, t2) {
  var i2, o2 = n2.__v, r2 = o2.__e, f2 = n2.__P;
  if (f2)
    return (i2 = v({}, o2)).__v = o2.__v + 1, l.vnode && l.vnode(i2), M(f2, i2, o2, n2.__n, void 0 !== f2.ownerSVGElement, 32 & o2.__u ? [r2] : null, u2, null == r2 ? m(o2) : r2, !!(32 & o2.__u), t2), i2.__v = o2.__v, i2.__.__k[i2.__i] = i2, i2.__d = void 0, i2.__e != r2 && k(i2), i2;
}
function k(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return k(n2);
  }
}
function x(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !C.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(C);
}
function C() {
  var n2, u2, t2, o2 = [], r2 = [];
  for (i.sort(f); n2 = i.shift(); )
    n2.__d && (t2 = i.length, u2 = w(n2, o2, r2) || u2, 0 === t2 || i.length > t2 ? (j(o2, u2, r2), r2.length = o2.length = 0, u2 = void 0, i.sort(f)) : u2 && l.__c && l.__c(u2, s));
  u2 && j(o2, u2, r2), C.__r = 0;
}
function P(n2, l2, u2, t2, i2, o2, r2, f2, e2, a2, h2) {
  var v2, p2, y2, d2, _, g2 = t2 && t2.__k || s, b2 = l2.length;
  for (u2.__d = e2, S(u2, l2, g2), e2 = u2.__d, v2 = 0; v2 < b2; v2++)
    null != (y2 = u2.__k[v2]) && "boolean" != typeof y2 && "function" != typeof y2 && (p2 = -1 === y2.__i ? c : g2[y2.__i] || c, y2.__i = v2, M(n2, y2, p2, i2, o2, r2, f2, e2, a2, h2), d2 = y2.__e, y2.ref && p2.ref != y2.ref && (p2.ref && N(p2.ref, null, y2), h2.push(y2.ref, y2.__c || d2, y2)), null == _ && null != d2 && (_ = d2), 65536 & y2.__u || p2.__k === y2.__k ? e2 = $(y2, e2, n2) : "function" == typeof y2.type && void 0 !== y2.__d ? e2 = y2.__d : d2 && (e2 = d2.nextSibling), y2.__d = void 0, y2.__u &= -196609);
  u2.__d = e2, u2.__e = _;
}
function S(n2, l2, u2) {
  var t2, i2, o2, r2, f2, e2 = l2.length, c2 = u2.length, s2 = c2, a2 = 0;
  for (n2.__k = [], t2 = 0; t2 < e2; t2++)
    null != (i2 = n2.__k[t2] = null == (i2 = l2[t2]) || "boolean" == typeof i2 || "function" == typeof i2 ? null : "string" == typeof i2 || "number" == typeof i2 || "bigint" == typeof i2 || i2.constructor == String ? d(null, i2, null, null, i2) : h(i2) ? d(g, { children: i2 }, null, null, null) : void 0 === i2.constructor && i2.__b > 0 ? d(i2.type, i2.props, i2.key, i2.ref ? i2.ref : null, i2.__v) : i2) ? (i2.__ = n2, i2.__b = n2.__b + 1, f2 = I(i2, u2, r2 = t2 + a2, s2), i2.__i = f2, o2 = null, -1 !== f2 && (s2--, (o2 = u2[f2]) && (o2.__u |= 131072)), null == o2 || null === o2.__v ? (-1 == f2 && a2--, "function" != typeof i2.type && (i2.__u |= 65536)) : f2 !== r2 && (f2 === r2 + 1 ? a2++ : f2 > r2 ? s2 > e2 - r2 ? a2 += f2 - r2 : a2-- : a2 = f2 < r2 && f2 == r2 - 1 ? f2 - r2 : 0, f2 !== t2 + a2 && (i2.__u |= 65536))) : (o2 = u2[t2]) && null == o2.key && o2.__e && 0 == (131072 & o2.__u) && (o2.__e == n2.__d && (n2.__d = m(o2)), O(o2, o2, false), u2[t2] = null, s2--);
  if (s2)
    for (t2 = 0; t2 < c2; t2++)
      null != (o2 = u2[t2]) && 0 == (131072 & o2.__u) && (o2.__e == n2.__d && (n2.__d = m(o2)), O(o2, o2));
}
function $(n2, l2, u2) {
  var t2, i2;
  if ("function" == typeof n2.type) {
    for (t2 = n2.__k, i2 = 0; t2 && i2 < t2.length; i2++)
      t2[i2] && (t2[i2].__ = n2, l2 = $(t2[i2], l2, u2));
    return l2;
  }
  n2.__e != l2 && (u2.insertBefore(n2.__e, l2 || null), l2 = n2.__e);
  do {
    l2 = l2 && l2.nextSibling;
  } while (null != l2 && 8 === l2.nodeType);
  return l2;
}
function I(n2, l2, u2, t2) {
  var i2 = n2.key, o2 = n2.type, r2 = u2 - 1, f2 = u2 + 1, e2 = l2[u2];
  if (null === e2 || e2 && i2 == e2.key && o2 === e2.type)
    return u2;
  if (t2 > (null != e2 && 0 == (131072 & e2.__u) ? 1 : 0))
    for (; r2 >= 0 || f2 < l2.length; ) {
      if (r2 >= 0) {
        if ((e2 = l2[r2]) && 0 == (131072 & e2.__u) && i2 == e2.key && o2 === e2.type)
          return r2;
        r2--;
      }
      if (f2 < l2.length) {
        if ((e2 = l2[f2]) && 0 == (131072 & e2.__u) && i2 == e2.key && o2 === e2.type)
          return f2;
        f2++;
      }
    }
  return -1;
}
function T(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || a.test(l2) ? u2 : u2 + "px";
}
function A(n2, l2, u2, t2, i2) {
  var o2;
  n:
    if ("style" === l2)
      if ("string" == typeof u2)
        n2.style.cssText = u2;
      else {
        if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2)
          for (l2 in t2)
            u2 && l2 in u2 || T(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            t2 && u2[l2] === t2[l2] || T(n2.style, l2, u2[l2]);
      }
    else if ("o" === l2[0] && "n" === l2[1])
      o2 = l2 !== (l2 = l2.replace(/(PointerCapture)$|Capture$/i, "$1")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? t2 ? u2.u = t2.u : (u2.u = Date.now(), n2.addEventListener(l2, o2 ? L : D, o2)) : n2.removeEventListener(l2, o2 ? L : D, o2);
    else {
      if (i2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" !== l2 && "height" !== l2 && "href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && "rowSpan" !== l2 && "colSpan" !== l2 && "role" !== l2 && l2 in n2)
        try {
          n2[l2] = null == u2 ? "" : u2;
          break n;
        } catch (n3) {
        }
      "function" == typeof u2 || (null == u2 || false === u2 && "-" !== l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
    }
}
function D(n2) {
  if (this.l) {
    var u2 = this.l[n2.type + false];
    if (n2.t) {
      if (n2.t <= u2.u)
        return;
    } else
      n2.t = Date.now();
    return u2(l.event ? l.event(n2) : n2);
  }
}
function L(n2) {
  if (this.l)
    return this.l[n2.type + true](l.event ? l.event(n2) : n2);
}
function M(n2, u2, t2, i2, o2, r2, f2, e2, c2, s2) {
  var a2, p2, y2, d2, _, m2, w2, k2, x2, C2, S2, $2, H, I2, T2, A2 = u2.type;
  if (void 0 !== u2.constructor)
    return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), r2 = [e2 = u2.__e = t2.__e]), (a2 = l.__b) && a2(u2);
  n:
    if ("function" == typeof A2)
      try {
        if (k2 = u2.props, x2 = (a2 = A2.contextType) && i2[a2.__c], C2 = a2 ? x2 ? x2.props.value : a2.__ : i2, t2.__c ? w2 = (p2 = u2.__c = t2.__c).__ = p2.__E : ("prototype" in A2 && A2.prototype.render ? u2.__c = p2 = new A2(k2, C2) : (u2.__c = p2 = new b(k2, C2), p2.constructor = A2, p2.render = q), x2 && x2.sub(p2), p2.props = k2, p2.state || (p2.state = {}), p2.context = C2, p2.__n = i2, y2 = p2.__d = true, p2.__h = [], p2._sb = []), null == p2.__s && (p2.__s = p2.state), null != A2.getDerivedStateFromProps && (p2.__s == p2.state && (p2.__s = v({}, p2.__s)), v(p2.__s, A2.getDerivedStateFromProps(k2, p2.__s))), d2 = p2.props, _ = p2.state, p2.__v = u2, y2)
          null == A2.getDerivedStateFromProps && null != p2.componentWillMount && p2.componentWillMount(), null != p2.componentDidMount && p2.__h.push(p2.componentDidMount);
        else {
          if (null == A2.getDerivedStateFromProps && k2 !== d2 && null != p2.componentWillReceiveProps && p2.componentWillReceiveProps(k2, C2), !p2.__e && (null != p2.shouldComponentUpdate && false === p2.shouldComponentUpdate(k2, p2.__s, C2) || u2.__v === t2.__v)) {
            for (u2.__v !== t2.__v && (p2.props = k2, p2.state = p2.__s, p2.__d = false), u2.__e = t2.__e, u2.__k = t2.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), S2 = 0; S2 < p2._sb.length; S2++)
              p2.__h.push(p2._sb[S2]);
            p2._sb = [], p2.__h.length && f2.push(p2);
            break n;
          }
          null != p2.componentWillUpdate && p2.componentWillUpdate(k2, p2.__s, C2), null != p2.componentDidUpdate && p2.__h.push(function() {
            p2.componentDidUpdate(d2, _, m2);
          });
        }
        if (p2.context = C2, p2.props = k2, p2.__P = n2, p2.__e = false, $2 = l.__r, H = 0, "prototype" in A2 && A2.prototype.render) {
          for (p2.state = p2.__s, p2.__d = false, $2 && $2(u2), a2 = p2.render(p2.props, p2.state, p2.context), I2 = 0; I2 < p2._sb.length; I2++)
            p2.__h.push(p2._sb[I2]);
          p2._sb = [];
        } else
          do {
            p2.__d = false, $2 && $2(u2), a2 = p2.render(p2.props, p2.state, p2.context), p2.state = p2.__s;
          } while (p2.__d && ++H < 25);
        p2.state = p2.__s, null != p2.getChildContext && (i2 = v(v({}, i2), p2.getChildContext())), y2 || null == p2.getSnapshotBeforeUpdate || (m2 = p2.getSnapshotBeforeUpdate(d2, _)), P(n2, h(T2 = null != a2 && a2.type === g && null == a2.key ? a2.props.children : a2) ? T2 : [T2], u2, t2, i2, o2, r2, f2, e2, c2, s2), p2.base = u2.__e, u2.__u &= -161, p2.__h.length && f2.push(p2), w2 && (p2.__E = p2.__ = null);
      } catch (n3) {
        u2.__v = null, c2 || null != r2 ? (u2.__e = e2, u2.__u |= c2 ? 160 : 32, r2[r2.indexOf(e2)] = null) : (u2.__e = t2.__e, u2.__k = t2.__k), l.__e(n3, u2, t2);
      }
    else
      null == r2 && u2.__v === t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : u2.__e = z(t2.__e, u2, t2, i2, o2, r2, f2, c2, s2);
  (a2 = l.diffed) && a2(u2);
}
function j(n2, u2, t2) {
  for (var i2 = 0; i2 < t2.length; i2++)
    N(t2[i2], t2[++i2], t2[++i2]);
  l.__c && l.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l.__e(n3, u3.__v);
    }
  });
}
function z(l2, u2, t2, i2, o2, r2, f2, e2, s2) {
  var a2, v2, y2, d2, _, g2, b2, w2 = t2.props, k2 = u2.props, x2 = u2.type;
  if ("svg" === x2 && (o2 = true), null != r2) {
    for (a2 = 0; a2 < r2.length; a2++)
      if ((_ = r2[a2]) && "setAttribute" in _ == !!x2 && (x2 ? _.localName === x2 : 3 === _.nodeType)) {
        l2 = _, r2[a2] = null;
        break;
      }
  }
  if (null == l2) {
    if (null === x2)
      return document.createTextNode(k2);
    l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", x2) : document.createElement(x2, k2.is && k2), r2 = null, e2 = false;
  }
  if (null === x2)
    w2 === k2 || e2 && l2.data === k2 || (l2.data = k2);
  else {
    if (r2 = r2 && n.call(l2.childNodes), w2 = t2.props || c, !e2 && null != r2)
      for (w2 = {}, a2 = 0; a2 < l2.attributes.length; a2++)
        w2[(_ = l2.attributes[a2]).name] = _.value;
    for (a2 in w2)
      _ = w2[a2], "children" == a2 || ("dangerouslySetInnerHTML" == a2 ? y2 = _ : "key" === a2 || a2 in k2 || A(l2, a2, null, _, o2));
    for (a2 in k2)
      _ = k2[a2], "children" == a2 ? d2 = _ : "dangerouslySetInnerHTML" == a2 ? v2 = _ : "value" == a2 ? g2 = _ : "checked" == a2 ? b2 = _ : "key" === a2 || e2 && "function" != typeof _ || w2[a2] === _ || A(l2, a2, _, w2[a2], o2);
    if (v2)
      e2 || y2 && (v2.__html === y2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2.__html), u2.__k = [];
    else if (y2 && (l2.innerHTML = ""), P(l2, h(d2) ? d2 : [d2], u2, t2, i2, o2 && "foreignObject" !== x2, r2, f2, r2 ? r2[0] : t2.__k && m(t2, 0), e2, s2), null != r2)
      for (a2 = r2.length; a2--; )
        null != r2[a2] && p(r2[a2]);
    e2 || (a2 = "value", void 0 !== g2 && (g2 !== l2[a2] || "progress" === x2 && !g2 || "option" === x2 && g2 !== w2[a2]) && A(l2, a2, g2, w2[a2], false), a2 = "checked", void 0 !== b2 && b2 !== l2[a2] && A(l2, a2, b2, w2[a2], false));
  }
  return l2;
}
function N(n2, u2, t2) {
  try {
    "function" == typeof n2 ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l.__e(n3, t2);
  }
}
function O(n2, u2, t2) {
  var i2, o2;
  if (l.unmount && l.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current !== n2.__e || N(i2, null, u2)), null != (i2 = n2.__c)) {
    if (i2.componentWillUnmount)
      try {
        i2.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u2);
      }
    i2.base = i2.__P = null, n2.__c = void 0;
  }
  if (i2 = n2.__k)
    for (o2 = 0; o2 < i2.length; o2++)
      i2[o2] && O(i2[o2], u2, t2 || "function" != typeof n2.type);
  t2 || null == n2.__e || p(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
function q(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function B(u2, t2, i2) {
  var o2, r2, f2, e2;
  l.__ && l.__(u2, t2), r2 = (o2 = "function" == typeof i2) ? null : i2 && i2.__k || t2.__k, f2 = [], e2 = [], M(t2, u2 = (!o2 && i2 || t2).__k = y(g, null, [u2]), r2 || c, c, void 0 !== t2.ownerSVGElement, !o2 && i2 ? [i2] : r2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, f2, !o2 && i2 ? i2 : r2 ? r2.__e : t2.firstChild, o2, e2), u2.__d = void 0, j(f2, u2, e2);
}
n = s.slice, l = { __e: function(n2, l2, u2, t2) {
  for (var i2, o2, r2; l2 = l2.__; )
    if ((i2 = l2.__c) && !i2.__)
      try {
        if ((o2 = i2.constructor) && null != o2.getDerivedStateFromError && (i2.setState(o2.getDerivedStateFromError(n2)), r2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), r2 = i2.__d), r2)
          return i2.__E = i2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u = 0, t = function(n2) {
  return null != n2 && null == n2.constructor;
}, b.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), "function" == typeof n2 && (n2 = n2(v({}, u2), this.props)), n2 && v(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), x(this));
}, b.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), x(this));
}, b.prototype.render = g, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, C.__r = 0, e = 0;

export {
  l,
  y,
  g,
  B
};
