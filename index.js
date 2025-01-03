import fs from 'node:fs'
import path, { dirname, join, resolve } from 'node:path'
import mdx from '@mdx-js/esbuild'
import chokidar from 'chokidar'
import { defu } from 'defu'
import esbuild from 'esbuild'
import { CONSTANTS, createContext } from 'esbuild-multicontext'
import kleur from 'kleur'
import { h } from 'preact'
import renderToString from 'preact-render-to-string'

import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { marked } from 'marked'
import glob from 'tiny-glob'

const __dirname = dirname(fileURLToPath(import.meta.url))

const defaultOptions = {
  baseURL: '/',
  dev: {
    enabled: false,
    port: 3000,
  },
  root: './content',
  outdir: './dist',
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

  const folderGroups = {}

  mdxFiles.forEach(file => {
    const key = dirname(file)
    if (!folderGroups[key]) {
      folderGroups[key] = []
    }
    folderGroups[key].push(file)
  })

  mdfiles.forEach(file => {
    const key = dirname(file)
    if (!folderGroups[key]) {
      folderGroups[key] = []
    }
    folderGroups[key].push(file)
  })

  const rootBuildOptions = Object.assign({}, config.esbuild, {
    entryPoints: [...mdxFiles, path.resolve(root, 'app.jsx')],
    format: 'esm',
    bundle: true,
    outdir: path.join(outdir, '.cache'),
    metafile: true,
    external: ['preact'],
    loader: {
      '.js': 'jsx',
    },
    define: {
      __PPRESS_BASE_URL: JSON.stringify(usableBaseURL),
    },
    jsx: 'automatic',
    jsxImportSource: 'preact',
    plugins: [
      ...(config.esbuild?.plugins ?? []),
      mdx({
        jsxImportSource: 'preact',
      }),
    ],
  })

  const baseContext = await esbuild.context(rootBuildOptions)

  // patch a `build` method since `contextWatcher` expects it.
  baseContext.build = baseContext.rebuild

  const output = await baseContext.rebuild()
  const hasCssBundle = Object.keys(output.metafile.outputs).find(d => {
    return !!output.metafile.outputs[d].cssBundle
  })
  const rootCSSBundlePath = hasCssBundle
    ? output.metafile.outputs[hasCssBundle].cssBundle
    : undefined

  const markdownOutput = await Promise.all(
    mdfiles.map(async x => {
      const content = await fs.promises.readFile(x, 'utf8')
      const fileName = path.basename(x).replace(path.extname(x), '')
      let destPath = x
        .replace(path.normalize(root), path.join(outdir))
        .replace('.md', '.html')
      if (fileName !== 'index') {
        const basicSplit = x.split(path.sep)
        const pushAtIndex = basicSplit.length - 1
        destPath = [
          ...basicSplit.slice(0, pushAtIndex),
          fileName,
          'index.html',
        ].join(path.sep)
      }
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

  const watcher = chokidar.watch(config.root, {
    atomic: true,
    ignoreInitial: true,
    ignored: file => {
      return (
        file.startsWith('node_modules') ||
        file.startsWith(join(config.outdir)) ||
        file.startsWith('.prevpress')
      )
    },
  })

  watcher.on('change', file => {
    console.log(kleur.dim('[prevpress] File Changed:'), kleur.white(file))
    buildContext.build()
    baseContext.build()
  })

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

  let entryComponentPath

  const mappedItems = new Map()

  const pageOutputEntryKeys = outputEntryKeys
    .map((d, i, source) => {
      const match = source.findIndex(x => d.replace('.js', '.css') === x)
      if (match > -1) {
        mappedItems.set(d, d.replace('.js', '.css'))
      }

      if (d.endsWith(path.join(outdir, '.cache', 'app.js'))) {
        entryComponentPath = d
      }
      return d
    })
    .filter(x => {
      if (x.endsWith('.css')) return false
      if (x.endsWith(path.join(outdir, '.cache', 'app.js'))) return false
      return true
    })

  for (const key of outputEntryKeys) {
    const _key = pathToKey(key)

    if (key.endsWith('.css')) {
      continue
    }

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
      plugins: [...(config.esbuild?.plugins ?? [])],
      define: {
        __PPRESS_BASE_URL: JSON.stringify(usableBaseURL),
        __PPRESS_RENDERED_PAGE: JSON.stringify(path.resolve(key)),
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
      loader: {
        '.js': 'jsx',
        '.css': 'local-css',
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

  pageOutputEntryKeys.forEach(key => {
    const _key = pathToKey(key)

    buildContext.hook(`${_key}:esm:error`, async error => {
      console.error(`Error building \`${key}\`:`, error)
    })

    buildContext.hook(`${_key}:esm:complete`, async buildOutput => {
      const outputFile = Object.keys(buildOutput.metafile.outputs)[0]
      const cachePath = path.join(outdir, '.cache')

      const fileName = path.basename(key).replace(path.extname(key), '')
      let finalFile = key.replace(cachePath, outdir).replace(/.js$/, '.html')

      if (fileName !== 'index') {
        const basicSplit = finalFile.split(path.sep)
        const pushAtIndex = basicSplit.length - 1
        finalFile = [
          ...basicSplit.slice(0, pushAtIndex),
          fileName,
          'index.html',
        ].join(path.sep)
      }

      const App = await import(path.resolve(entryComponentPath)).then(
        d => d.default
      )
      const mod = await import(path.resolve(key)).then(d => d.default)

      const links = []
      const cssForKey = mappedItems.get(key)

      if (cssForKey) {
        links.push(
          h('link', {
            rel: 'stylesheet',
            href: path.join(
              cssForKey.replace(
                path.join(outdir, '.cache'),
                `${usableBaseURL}/public/`
              )
            ),
          })
        )
      }

      if (rootCSSBundlePath) {
        const publicURL = rootCSSBundlePath
          .replace(path.join(outdir, '.cache'), `${usableBaseURL}/public/`)
          .replace(/\/{2,}/g, '/')

        links.push(
          h('link', {
            rel: 'stylesheet',
            href: publicURL,
          })
        )
      }

      const node = h(App, {
        headProps: {
          children: links,
        },
        pageProps: {
          children: [h(mod)],
          scripts: [
            h('script', {
              type: 'module',
              src: outputFile.replace(
                path.normalize(outdir) + '/',
                usableBaseURL
              ),
            }),
          ],
        },
      })

      const str = renderToString(node)

      if (cssForKey) {
        const cssOutpath = path.join(
          cssForKey.replace(
            path.join(outdir, '.cache'),
            path.join(outdir, 'public')
          )
        )
        await mkdir(dirname(resolve(cssOutpath)), { recursive: true })
        await fs.promises.copyFile(resolve(cssForKey), resolve(cssOutpath))
      }

      if (rootCSSBundlePath) {
        const cssOutpath = path.join(
          rootCSSBundlePath.replace(
            path.join(outdir, '.cache'),
            path.join(outdir, 'public')
          )
        )
        await mkdir(dirname(resolve(cssOutpath)), { recursive: true })
        await fs.promises.copyFile(
          resolve(rootCSSBundlePath),
          resolve(cssOutpath)
        )
      }

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
