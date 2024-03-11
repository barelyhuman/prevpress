import { Fragment, h } from 'preact'

export default function Page ({
  children,
  sidebarItems = [],
  scripts,
  ...props
}) {
  const sidebarRendered = sidebarItems
    .sort((x, y) => x.order - y.order)
    .map((x) => h('li', {}, h('a', { href: x.slug }, x.label)))

  return h(
    'html',
    {
      ...props
    },
    h('head', {}),
    h(
      'body',
      {},
      sidebarItems.length ? h('aside', {}, sidebarRendered) : null,
      h(
        'div',
        {
          id: 'root'
        },
        children
      ),
      h(Fragment, {}, scripts)
    )
  )
}
