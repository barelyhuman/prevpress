import { hydrate } from 'preact'

// eslint-disable-next-line
const Component = await import(__PPRESS_RENDERED_PAGE).then(mod =>
  'default' in mod ? mod.default : mod
)

hydrate(<Component />, document.getElementById('root'))
