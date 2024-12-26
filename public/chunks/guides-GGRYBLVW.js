import {
  g,
  u
} from "./chunk-ECXJRNAZ.js";

// dist/.cache/guides/index.js
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    p: "p",
    ...props.components
  };
  return u(g, {
    children: [u(_components.h1, {
      children: "Guides"
    }), "\n", u(_components.p, {
      children: "Getting Started"
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