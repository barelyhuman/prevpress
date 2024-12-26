import { resolve } from 'path'
import { access, readFile } from 'fs/promises'
import postcss from 'postcss'
import loadConfig from 'postcss-load-config'

/**
 * @type {import("esbuild").BuildOptions}
 */
export default {
  baseURL: '/',
  plugins: [
    esbuildPostcss({
      root: './docs',
    }),
  ],
}

/**
 *
 * @returns {import("esbuild").Plugin}
 */
function esbuildPostcss({ root = '.' } = {}) {
  let loadedConfig
  async function getConfig() {
    if (loadedConfig) return loadedConfig
    const configToRead = (
      await Promise.all(
        [
          resolve(root, 'postcss.config.js'),
          resolve(root, 'postcss.config.cjs'),
          resolve(root, 'postcss.config.mjs'),
        ].map(async d => {
          return {
            file: d,
            exists: await access(d)
              .then(() => true)
              .catch(() => false),
          }
        })
      )
    ).find(d => d.exists)
    const ctx = { map: 'inline' }
    const config = await loadConfig(ctx, configToRead?.file)
    return (loadedConfig = config)
  }

  return {
    name: 'postcss',
    setup(builder) {
      builder.onLoad({ filter: /\.css$/ }, async args => {
        const source = await readFile(args.path, 'utf8')
        const config = await getConfig()
        const output = await postcss(config.plugins ?? {}).process(source, {
          ...config.options,
          from: args.path,
        })

        return {
          contents: output.css,
          loader: 'css',
        }
      })
    },
  }
}
