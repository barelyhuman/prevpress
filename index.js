import mdx from '@mdx-js/esbuild'
import esbuild from 'esbuild'
import { Fragment, h } from 'preact'
import path, { dirname, join } from 'node:path'
import fs from 'node:fs'
import renderToString from 'preact-render-to-string'
import { defu } from 'defu'

import glob from 'tiny-glob'
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const html = String.raw
const defaultOptions = {
  baseURL: '/',
  root: './content',
  outdir: './dist',
  template: html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title></title>
      </head>
      <body>
        <div id="root">
          <!--app-->
        </div>
      </body>
    </html>
  `
}

/**
 * @param {typeof defaultOptions} options
 */
export async function compile (options = {}) {
  const config = defu(options, defaultOptions)
  const { root, template, outdir, baseURL } = config

  const usableBaseURL = !baseURL.endsWith('/') ? join(baseURL, '/') : baseURL

  const files = await glob('./**/*.mdx', {
    absolute: true,
    filesOnly: true,
    cwd: root
  })

  const output = await esbuild.build({
    entryPoints: files,
    format: 'esm',
    splitting: true,
    bundle: true,
    outdir: path.join(outdir, '.cache'),
    metafile: true,
    external: ['preact'],
    loader: {
      '.js': 'jsx'
    },
    jsx: 'automatic',
    jsxImportSource: 'preact',
    plugins: [mdx({
      jsxImportSource: 'preact'
    })]
  })

  const metaFile = output.metafile.outputs
  for (const key of Object.keys(metaFile)) {
    const scriptOut = await esbuild.build({
      entryPoints: [path.join(__dirname, 'runtime/client.js')],
      format: 'esm',
      bundle: true,
      entryNames: '[name]-[hash]',
      outdir: path.join(outdir, 'public'),
      metafile: true,
      splitting: true,
      define: {
        __PPRESS_RENDERED_PAGE: JSON.stringify(path.resolve(key))
      },
      loader: {
        '.js': 'jsx'
      },
      jsx: 'automatic',
      jsxImportSource: 'preact'
    })

    const outputFile = Object.keys(scriptOut.metafile.outputs)[0]

    const cachePath = path.join(outdir, '.cache')
    const finalFile = key
      .replace(cachePath, outdir)
      .replace(/.js$/, '.html')

    const mod = await import(path.resolve(key)).then((d) => d.default)
    const node = h(
      Fragment, {},
      h(mod),
      h('script', {
        type: 'module',
        src: outputFile.replace(path.normalize(outdir) + '/', usableBaseURL)
      })
    )
    const str = template.replace('<!--app-->', renderToString(node))
    await mkdir(dirname(finalFile), { recursive: true })
    await fs.promises.writeFile(finalFile, str, 'utf8')
    await fs.promises.rm(path.join(outdir, '.cache'), {
      force: true,
      recursive: true
    })
  }
}
