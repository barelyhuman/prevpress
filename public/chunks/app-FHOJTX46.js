import {
  g,
  u,
  y
} from "./chunk-SY5NYGLA.js";

// dist/.cache/app.js
function Page({
  children,
  sidebarItems = [],
  scripts,
  ...props
}) {
  const sidebarRendered = sidebarItems.sort((x, y2) => x.order - y2.order).map((x) => y("li", {}, y("a", { href: x.slug }, x.label)));
  return y(
    "html",
    {
      ...props
    },
    y("head", {}),
    y(
      "body",
      {},
      sidebarItems.length ? y("aside", {}, sidebarRendered) : null,
      y(
        "div",
        {
          id: "root"
        },
        children
      ),
      y(g, {}, scripts)
    )
  );
}
var baseURL = "/prevpress/";
var normalize = (url) => {
  return (baseURL + url).replace(/\/\//, "/");
};
function Navbar() {
  return /* @__PURE__ */ u("header", { class: "border-b border-zinc-100 flex justify-between items-center p-4", children: [
    /* @__PURE__ */ u("h3", { class: "font-semibold uppercase", children: "Prevpress" }),
    /* @__PURE__ */ u("nav", { children: /* @__PURE__ */ u("ul", { class: "flex items-center gap-2", children: [
      /* @__PURE__ */ u("li", { children: /* @__PURE__ */ u(
        "a",
        {
          class: "hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900 rounded-md px-4 py-2 text-sm",
          href: normalize("/"),
          children: "Home"
        }
      ) }),
      /* @__PURE__ */ u("li", { children: /* @__PURE__ */ u(
        "a",
        {
          class: "hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900 rounded-md px-4 py-2 text-sm",
          href: normalize("/guides"),
          children: "Guides"
        }
      ) }),
      /* @__PURE__ */ u("li", { children: /* @__PURE__ */ u(
        "a",
        {
          class: "hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900 rounded-md px-4 py-2 text-sm",
          href: normalize("/guides/styling"),
          children: "Styling"
        }
      ) })
    ] }) })
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
      /* @__PURE__ */ u(Page, { ...pageProps })
    ] })
  ] });
}
export {
  App as default
};
