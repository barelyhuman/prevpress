import {
  u
} from "./chunk-SMJ6L4U6.js";

// dist/.cache/guides/styling.js
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    ...props.components
  };
  return u(_components.h1, {
    children: "Styling everything"
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
