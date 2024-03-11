import {
  g,
  u,
  y
} from "./chunk-VZMCABDY.js";

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
  return /* @__PURE__ */ u("header", { children: /* @__PURE__ */ u("nav", { children: /* @__PURE__ */ u("ul", { children: [
    /* @__PURE__ */ u("li", { children: /* @__PURE__ */ u("a", { href: normalize("/"), children: "Home" }) }),
    /* @__PURE__ */ u("li", { children: /* @__PURE__ */ u("a", { href: normalize("/guides"), children: "Guides" }) }),
    /* @__PURE__ */ u("li", { children: /* @__PURE__ */ u("a", { href: normalize("/guides/styling"), children: "Styling" }) })
  ] }) }) });
}
function App({ headProps, pageProps }) {
  return /* @__PURE__ */ u("html", { children: [
    /* @__PURE__ */ u("head", { ...headProps }),
    /* @__PURE__ */ u("body", { children: [
      /* @__PURE__ */ u(Navbar, {}),
      /* @__PURE__ */ u(Page, { ...pageProps })
    ] })
  ] });
}
export {
  App as default
};
