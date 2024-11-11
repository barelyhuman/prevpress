import mdx from '@mdx-js/esbuild'
import { defu } from 'defu'
import esbuild from 'esbuild'
import { createContext, CONSTANTS } from 'esbuild-multicontext'
import fs from 'node:fs'
import path, { dirname, join, resolve } from 'node:path'
import { Fragment, h } from 'preact'
import renderToString from 'preact-render-to-string'

import { marked } from 'marked'
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import glob from 'tiny-glob'

const __dirname = dirname(fileURLToPath(import.meta.url))

const html = String.raw
const defaultOptions = {
  baseURL: '/',
  dev: {
    enabled: false,
    port: 3000,
  },
  root: './content',
  outdir: './dist',
  template: html`
    <!doctype html>
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
        <!--scripts-->
      </body>
    </html>
  `,
}

/**
 * @param {typeof defaultOptions} options
 */
export async function compile(options = {}) {
  const config = defu(options, defaultOptions)
  const { root, template, outdir, baseURL, dev } = config

  const usableBaseURL = !baseURL.endsWith('/') ? join(baseURL, '/') : baseURL

  const mdxFiles = await glob('./**/*.mdx', {
    absolute: true,
    filesOnly: true,
    cwd: root,
  })

  const mdfiles = await glob('./**/*.md', {
    absolute: true,
    filesOnly: true,
    cwd: root,
  })

  const rootBuildOptions = {
    entryPoints: mdxFiles,
    format: 'esm',
    bundle: true,
    outdir: path.join(outdir, '.cache'),
    metafile: true,
    external: ['preact'],
    loader: {
      '.js': 'jsx',
    },
    jsx: 'automatic',
    jsxImportSource: 'preact',
    plugins: [
      mdx({
        jsxImportSource: 'preact',
      }),
    ],
  }

  const baseContext = await esbuild.context(rootBuildOptions)
  const output = await baseContext.rebuild()

  const markdownOutput = await Promise.all(
    mdfiles.map(async x => {
      const content = await fs.promises.readFile(x, 'utf8')
      const destPath = x
        .replace(path.normalize(root), path.join(outdir))
        .replace('.md', '.html')
      return {
        source: x,
        dest: destPath,
        raw: content,
        html: marked(content),
      }
    })
  )

  const metaFile = output.metafile.outputs
  const outputEntryKeys = Object.keys(metaFile)

  const buildContext = createContext()

  buildContext.hook(CONSTANTS.BUILD_ERROR, error => {
    console.error('[prevpress]: Building Module failed with error:', error)
  })

  buildContext.hook(CONSTANTS.WATCH_ERROR, error => {
    console.error('[prevpress]: Watching modules failed with error:', error)
  })

  const vendorLibs = [
    'preact',
    'preact/compat',
    'preact/debug',
    'preact/devtools',
    'preact/hooks',
    'preact/test-utils',
    'preact/jsx-runtime',
    'preact/jsx-dev-runtime',
    'preact/compat/client',
    'preact/compat/server',
    'preact/compat/jsx-runtime',
    'preact/compat/jsx-dev-runtime',
    'preact/compat/scheduler',
  ]
  const vendorFilterRegex = `(${vendorLibs
    .map(d => d.replace('/', '\\/'))
    .join('|')})`
  let vendorResolutions
  const vendorChunk = await esbuild.build({
    entryPoints: vendorLibs,
    format: 'esm',
    outdir: path.join(process.cwd(), '.prevpress/vendor'),
    entryNames: '[dir]/[name]',
    chunkNames: '[hash]',
    splitting: true,
    bundle: true,
    metafile: true,
    plugins: [
      {
        name: 'vendor-chunk-name-paths',
        setup(builder) {
          builder.onLoad(
            {
              filter: new RegExp(vendorFilterRegex),
            },
            async ctx => {
              if (vendorResolutions) return
              vendorResolutions =
                vendorResolutions ??
                Object.fromEntries(
                  await Promise.all(
                    vendorLibs.map(async d => {
                      const result = await builder.resolve(d, {
                        kind: 'entry-point',
                        resolveDir: 'node_modules',
                      })
                      return [
                        d,
                        {
                          original: result.path,
                          dist: path.join(outdir, 'vendor'),
                        },
                      ]
                    })
                  )
                )
            }
          )
        },
      },
    ],
  })

  for (const key of outputEntryKeys) {
    const _key = pathToKey(key)
    buildContext.add(`${_key}:esm`, {
      entryPoints: [path.join(__dirname, 'runtime/client.js')],
      format: 'esm',
      bundle: true,
      entryNames: '[name]-[hash]',
      assetNames: 'assets/[name]-[hash]',
      chunkNames: 'chunks/[name]-[hash]',
      outdir: path.join(outdir, 'public'),
      metafile: true,
      splitting: true,
      define: {
        __PPRESS_RENDERED_PAGE: JSON.stringify(path.resolve(key)),
      },
      loader: {
        '.js': 'jsx',
      },
      alias: Object.fromEntries(
        vendorLibs
          .map(d => {
            return [
              d,
              findInObj(
                vendorChunk.metafile.outputs,
                vendorResolutions[d].original
                  .replace(process.cwd(), '')
                  .slice(1),
                d => d.entryPoint
              ),
            ]
          })
          .filter(d => d[1])
          .map(d => [d[0], resolve('.', d[1])])
      ),
      jsx: 'automatic',
      jsxImportSource: 'preact',
    })
  }

  for (const mdOutput of markdownOutput) {
    const str = template
      .replace('<!--app-->', mdOutput.html)
      .replace('<!--scripts-->', '')
    await fs.promises.writeFile(mdOutput.dest, str, 'utf8')
  }

  outputEntryKeys.forEach(key => {
    const _key = pathToKey(key)
    buildContext.hook(`${_key}:esm:error`, async error => {
      console.error(`Error building \`${key}\`:`, error)
    })
    buildContext.hook(`${_key}:esm:complete`, async buildOutput => {
      const outputFile = Object.keys(buildOutput.metafile.outputs)[0]
      const cachePath = path.join(outdir, '.cache')
      const finalFile = key.replace(cachePath, outdir).replace(/.js$/, '.html')
      const mod = await import(path.resolve(key)).then(d => d.default)
      const node = h(Fragment, {}, h(mod))
      const str = template.replace('<!--app-->', renderToString(node)).replace(
        '<!--scripts-->',
        `
      <script src="${outputFile.replace(
        path.normalize(outdir) + '/',
        usableBaseURL
      )}" type="module"></script>
    `
      )
      await mkdir(dirname(finalFile), { recursive: true })
      await fs.promises.writeFile(finalFile, str, 'utf8')
      if (!dev.enabled) {
        await fs.promises.rm(path.join(outdir, '.cache'), {
          force: true,
          recursive: true,
        })
      }
    })
  })

  await buildContext.build()

  if (dev.enabled) {
    await buildContext.watch()
    await baseContext.watch()
    await baseContext.serve({
      servedir: outdir,
      port: dev.port,
    })
    console.log(`Serving assets on port: ${dev.port}`)
  } else {
    await baseContext.dispose()
    await buildContext.dispose()
  }
}

function pathToKey(toConvert) {
  return toConvert.replace('/', '__')
}

function findInObj(obj, value, extract = d => d) {
  return Object.keys(obj).find(k => {
    return extract(obj[k]) === value
  })
}
