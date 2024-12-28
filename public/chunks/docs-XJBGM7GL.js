import {
  k,
  u
} from "./chunk-4M25HWUF.js";

// dist/.cache/docs/index.js
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    pre: "pre",
    ...props.components
  };
  return u(k, {
    children: [u(_components.h2, {
      children: "Introduction"
    }), "\n", u(_components.p, {
      children: [u(_components.code, {
        children: "prevpress"
      }), " is a tiny engine with utils to write content first websites with preact."]
    }), "\n", u(_components.p, {
      children: ["It's built to be able to convert all ", u(_components.code, {
        children: ".md"
      }), " and ", u(_components.code, {
        children: ".mdx"
      }), " files to their respective html files."]
    }), "\n", u(_components.h3, {
      children: "Quickstart"
    }), "\n", u(_components.h4, {
      children: "Installation"
    }), "\n", u(_components.pre, {
      children: u(_components.code, {
        className: "language-sh",
        children: "npm i prevpress\n"
      })
    }), "\n", u(_components.pre, {
      children: u(_components.code, {
        className: "language-sh",
        children: "npx pre\n"
      })
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
