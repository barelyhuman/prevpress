import { h, render } from 'preact'

// eslint-disable-next-line
const ComponentMod = await import(__PPRESS_RENDERED_PAGE)

render(
  h(ComponentMod.default, {}),
  document.getElementById('root')
)
