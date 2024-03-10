import {
  g,
  u,
  y
} from "./chunk-VZMCABDY.js";

// page.js
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

// dist/.cache/app.js
function App({ headProps, pageProps }) {
  return /* @__PURE__ */ u("html", { children: [
    /* @__PURE__ */ u("head", { ...headProps }),
    /* @__PURE__ */ u("body", { children: /* @__PURE__ */ u(Page, { ...pageProps }) })
  ] });
}
export {
  App as default
};
