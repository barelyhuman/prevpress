import {
  g,
  l,
  u
} from "./chunk-ZQXBMIZ5.js";

// .prevpress/vendor/DC7NJEFQ.js
var t;
var r;
var u2;
var i;
var o = 0;
var f = [];
var c = [];
var e = l;
var a = e.__b;
var v = e.__r;
var l2 = e.diffed;
var m = e.__c;
var s = e.unmount;
var d = e.__;
function h(n, t2) {
  e.__h && e.__h(r, n, o || t2), o = 0;
  var u22 = r.__H || (r.__H = { __: [], __h: [] });
  return n >= u22.__.length && u22.__.push({ __V: c }), u22.__[n];
}
function p(n) {
  return o = 1, y(D, n);
}
function y(n, u22, i2) {
  var o2 = h(t++, 2);
  if (o2.t = n, !o2.__c && (o2.__ = [i2 ? i2(u22) : D(void 0, u22), function(n2) {
    var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n2);
    t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
  }], o2.__c = r, !r.u)) {
    var f2 = function(n2, t2, r2) {
      if (!o2.__c.__H)
        return true;
      var u3 = o2.__c.__H.__.filter(function(n3) {
        return !!n3.__c;
      });
      if (u3.every(function(n3) {
        return !n3.__N;
      }))
        return !c2 || c2.call(this, n2, t2, r2);
      var i3 = false;
      return u3.forEach(function(n3) {
        if (n3.__N) {
          var t3 = n3.__[0];
          n3.__ = n3.__N, n3.__N = void 0, t3 !== n3.__[0] && (i3 = true);
        }
      }), !(!i3 && o2.__c.props === n2) && (!c2 || c2.call(this, n2, t2, r2));
    };
    r.u = true;
    var c2 = r.shouldComponentUpdate, e2 = r.componentWillUpdate;
    r.componentWillUpdate = function(n2, t2, r2) {
      if (this.__e) {
        var u3 = c2;
        c2 = void 0, f2(n2, t2, r2), c2 = u3;
      }
      e2 && e2.call(this, n2, t2, r2);
    }, r.shouldComponentUpdate = f2;
  }
  return o2.__N || o2.__;
}
function j() {
  for (var n; n = f.shift(); )
    if (n.__P && n.__H)
      try {
        n.__H.__h.forEach(z), n.__H.__h.forEach(B), n.__H.__h = [];
      } catch (t2) {
        n.__H.__h = [], e.__e(t2, n.__v);
      }
}
e.__b = function(n) {
  r = null, a && a(n);
}, e.__ = function(n, t2) {
  n && t2.__k && t2.__k.__m && (n.__m = t2.__k.__m), d && d(n, t2);
}, e.__r = function(n) {
  v && v(n), t = 0;
  var i2 = (r = n.__c).__H;
  i2 && (u2 === r ? (i2.__h = [], r.__h = [], i2.__.forEach(function(n2) {
    n2.__N && (n2.__ = n2.__N), n2.__V = c, n2.__N = n2.i = void 0;
  })) : (i2.__h.forEach(z), i2.__h.forEach(B), i2.__h = [], t = 0)), u2 = r;
}, e.diffed = function(n) {
  l2 && l2(n);
  var t2 = n.__c;
  t2 && t2.__H && (t2.__H.__h.length && (1 !== f.push(t2) && i === e.requestAnimationFrame || ((i = e.requestAnimationFrame) || w)(j)), t2.__H.__.forEach(function(n2) {
    n2.i && (n2.__H = n2.i), n2.__V !== c && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c;
  })), u2 = r = null;
}, e.__c = function(n, t2) {
  t2.some(function(n2) {
    try {
      n2.__h.forEach(z), n2.__h = n2.__h.filter(function(n3) {
        return !n3.__ || B(n3);
      });
    } catch (r2) {
      t2.some(function(n3) {
        n3.__h && (n3.__h = []);
      }), t2 = [], e.__e(r2, n2.__v);
    }
  }), m && m(n, t2);
}, e.unmount = function(n) {
  s && s(n);
  var t2, r2 = n.__c;
  r2 && r2.__H && (r2.__H.__.forEach(function(n2) {
    try {
      z(n2);
    } catch (n3) {
      t2 = n3;
    }
  }), r2.__H = void 0, t2 && e.__e(t2, r2.__v));
};
var k = "function" == typeof requestAnimationFrame;
function w(n) {
  var t2, r2 = function() {
    clearTimeout(u22), k && cancelAnimationFrame(t2), setTimeout(n);
  }, u22 = setTimeout(r2, 100);
  k && (t2 = requestAnimationFrame(r2));
}
function z(n) {
  var t2 = r, u22 = n.__c;
  "function" == typeof u22 && (n.__c = void 0, u22()), r = t2;
}
function B(n) {
  var t2 = r;
  n.__c = n.__(), r = t2;
}
function D(n, t2) {
  return "function" == typeof t2 ? t2(n) : t2;
}

// dist/.cache/index.js
var counter_default = {
  buttonStyle: "counter_buttonStyle"
};
function Counter() {
  const [count, setCount] = p(0);
  return /* @__PURE__ */ u(
    "button",
    {
      class: counter_default.buttonStyle,
      onClick: () => {
        setCount(count + 1);
      },
      children: count
    }
  );
}
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    p: "p",
    ...props.components
  };
  return u(g, {
    children: [u(_components.h1, {
      children: "PrevPress"
    }), "\n", u(_components.p, {
      children: "TBD"
    }), "\n", u(_components.h2, {
      children: "Demo"
    }), "\n", u(Counter, {})]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? u(MDXLayout, {
    ...props,
    children: u(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
export {
  MDXContent as default
};
