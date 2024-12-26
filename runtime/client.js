import { hydrate } from 'preact'
const modDef = mod => ('default' in mod ? mod.default : mod)

// eslint-disable-next-line
const Component = modDef(await import(__PPRESS_RENDERED_PAGE))

hydrate(<Component />, document.getElementById('root'))
