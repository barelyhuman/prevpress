import { Fragment, h } from 'preact'

export default function Document ({ children, scripts, ...props }) {
  return h(
    'html',
    {
      ...props
    },
    h('head', {}),
    h(
      'body',
      {},
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
