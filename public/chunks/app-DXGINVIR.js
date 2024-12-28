import {
  g,
  k,
  u
} from "./chunk-EEUMF7SJ.js";

// dist/.cache/app.js
function Page({
  children,
  sidebarItems = [],
  scripts,
  ...props
}) {
  const sidebarRendered = sidebarItems.sort((x, y) => x.order - y.order).map((x) => g("li", {}, g("a", { href: x.slug }, x.label)));
  return g(
    "html",
    {
      ...props
    },
    g("head", {}),
    g(
      "body",
      {},
      sidebarItems.length ? g("aside", {}, sidebarRendered) : null,
      g(
        "div",
        {
          id: "root"
        },
        children
      ),
      g(k, {}, scripts)
    )
  );
}
var baseURL = "/prevpress/";
var normalize = (url) => {
  return (baseURL + url).replace(/\/\//, "/");
};
function Navbar() {
  return /* @__PURE__ */ u("header", { class: "flex justify-between items-center p-4 border-b border-zinc-100", children: [
    /* @__PURE__ */ u("h3", { class: "font-semibold uppercase", children: "Prevpress" }),
    /* @__PURE__ */ u("nav", { children: /* @__PURE__ */ u("ul", { class: "flex gap-2 items-center", children: /* @__PURE__ */ u("li", { children: /* @__PURE__ */ u(
      "a",
      {
        class: "px-4 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900",
        href: normalize("/docs"),
        children: "Docs"
      }
    ) }) }) })
  ] });
}
function App({ headProps, pageProps }) {
  return /* @__PURE__ */ u("html", { children: [
    /* @__PURE__ */ u("head", { ...headProps, children: [
      /* @__PURE__ */ u("title", { children: "PrevPress" }),
      ...headProps.children
    ] }),
    /* @__PURE__ */ u("body", { children: [
      /* @__PURE__ */ u(Navbar, {}),
      /* @__PURE__ */ u("article", { class: "mx-auto mt-10 w-full max-w-3xl prose prose-zinc", children: /* @__PURE__ */ u(Page, { ...pageProps }) })
    ] })
  ] });
}
export {
  App as default
};