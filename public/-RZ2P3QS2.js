import {
  g,
  l
} from "./chunk-PZAWEIKY.js";

// node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var f = 0;
var i = Array.isArray;
function u(e, t, n, o, i2, u2) {
  var a, c, p = {};
  for (c in t)
    "ref" == c ? a = t[c] : p[c] = t[c];
  var l2 = { type: e, props: p, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --f, __i: -1, __u: 0, __source: i2, __self: u2 };
  if ("function" == typeof e && (a = e.defaultProps))
    for (c in a)
      void 0 === p[c] && (p[c] = a[c]);
  return l.vnode && l.vnode(l2), l2;
}

// dist/.cache/index.js
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    p: "p",
    ...props.components
  };
  return u(g, {
    children: [u(_components.h1, {
      children: "PrevPress"
    }), "\n", u(_components.p, {
      children: "TBD"
    })]
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
