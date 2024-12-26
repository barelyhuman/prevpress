import {
  k,
  u
} from "./chunk-4M25HWUF.js";

// dist/.cache/about/index.js
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...props.components
  };
  return u(k, {
    children: [u(_components.h2, {
      children: "About"
    }), "\n", u(_components.p, {
      children: [u(_components.code, {
        children: "prevpress"
      }), " in theory is just a layer that converts MDX files into HTML files.\nWhich could be done by just using the mdx cli helper but wait, there's more."]
    }), "\n", u(_components.h3, {
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
