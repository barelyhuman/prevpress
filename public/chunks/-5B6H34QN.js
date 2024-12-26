import {
  u
} from "./chunk-4MLCTB66.js";

// dist/.cache/index.js
function Hero() {
  return /* @__PURE__ */ u("section", { class: "p-2 md:p-20 flex flex-col items-center justify-center gap-4 min-h-[80vh] w-full", children: [
    /* @__PURE__ */ u("h2", { class: "text-2xl font-semibold", children: "Minimal Static Site Engine for Preact" }),
    /* @__PURE__ */ u("div", { class: "flex items-center gap-4", children: /* @__PURE__ */ u("button", { class: "bg-black rounded text-zinc-200  hover:text-white hover:bg-zinc-900 px-4 py-2", children: "Get Started \u2192" }) })
  ] });
}
function _createMdxContent(props) {
  return u(Hero, {});
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
