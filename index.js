import mdx from '@mdx-js/esbuild'
import { defu } from 'defu'
import esbuild from 'esbuild'
import { CONSTANTS, createContext } from 'esbuild-multicontext'
import { createContextWatcher } from 'esbuild-multicontext/watcher'
import fs from 'node:fs'
import path, { dirname, join } from 'node:path'
import { h, render } from 'preact'
import renderToString from 'preact-render-to-string'

import { marked } from 'marked'
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import glob from 'tiny-glob'

const __dirname = dirname(fileURLToPath(import.meta.url))

const defaultOptions = {
  baseURL: '/',
  dev: {
    enabled: false,
    port: 3000
  },
  root: './content',
  outdir: './dist'
}

/**
 * @param {typeof defaultOptions} options
 */
export async function compile (options = {}) {
  const config = defu(options, defaultOptions)
  const { root, template, outdir, baseURL, dev } = config

  const usableBaseURL = !baseURL.endsWith('/') ? join(baseURL, '/') : baseURL

  const mdxFiles = await glob('./**/*.mdx', {
    absolute: true,
    filesOnly: true,
    cwd: root
  })

  const mdfiles = await glob('./**/*.md', {
    absolute: true,
    filesOnly: true,
    cwd: root
  })

  const folderGroups = {}

  mdxFiles.forEach((file) => {
    const key = dirname(file)
    if (!folderGroups[key]) {
      folderGroups[key] = []
    }
    folderGroups[key].push(file)
  })

  mdfiles.forEach((file) => {
    const key = dirname(file)
    if (!folderGroups[key]) {
      folderGroups[key] = []
    }
    folderGroups[key].push(file)
  })

  const dirOrderData = {}
  Object.keys(folderGroups).map(async (dir) => {
    const orderFilePath = path.join(dir, '_order.json')
    const hasOrderFile = fs.existsSync(orderFilePath)
    if (!hasOrderFile) return
    const data = fs.readFileSync(orderFilePath, 'utf8')
    const orderArray = JSON.parse(data)
    dirOrderData[dir] = orderArray
  })

  const rootBuildOptions = {
    entryPoints: [...mdxFiles, path.resolve(root, 'app.jsx')],
    format: 'esm',
    bundle: true,
    outdir: path.join(outdir, '.cache'),
    metafile: true,
    external: ['preact'],
    loader: {
      '.js': 'jsx'
    },
    define: {
      __PPRESS_BASE_URL: JSON.stringify(usableBaseURL)
    },
    jsx: 'automatic',
    jsxImportSource: 'preact',
    plugins: [
      mdx({
        jsxImportSource: 'preact'
      })
    ]
  }

  const baseContext = await esbuild.context(rootBuildOptions)

  // patch a `build` method since `contextWatcher` expects it.
  baseContext.build = baseContext.rebuild

  const output = await baseContext.rebuild()

  const markdownOutput = await Promise.all(
    mdfiles.map(async (x) => {
      const content = await fs.promises.readFile(x, 'utf8')
      const destPath = x
        .replace(path.normalize(root), path.join(outdir))
        .replace('.md', '.html')
      return {
        source: x,
        dest: destPath,
        raw: content,
        html: marked(content)
      }
    })
  )

  const metaFile = output.metafile.outputs
  const outputEntryKeys = Object.keys(metaFile)

  const buildContext = createContext()

  // Watch the context and decide if needs to rebuild itself on
  // any additional files that we decide to watch and react too.
  // in this case the mdx result that's generated
  const baseContextWatcher = createContextWatcher(baseContext)
  const watcherHandler = {
    root: process.cwd(),
    onEvent (event) {
      if (event.type !== 'change') {
        return false
      }
      return true
    },
    onBuild () {
      buildContext.build()
    }
  }

  baseContextWatcher(path.join(root, 'app.js'), watcherHandler)
  baseContextWatcher('**/*.css', watcherHandler)

  for (const file of mdxFiles) {
    baseContextWatcher(file, watcherHandler)
  }

  buildContext.hook(CONSTANTS.BUILD_ERROR, (error) => {
    console.error('[prevpress]: Building Module failed with error:', error)
  })

  buildContext.hook(CONSTANTS.WATCH_ERROR, (error) => {
    console.error('[prevpress]: Watching modules failed with error:', error)
  })

  let entryComponentPath

  const mappedItems = new Map()

  const pageOutputEntryKeys = outputEntryKeys
    .map((d, i, source) => {
      const match = source.findIndex((x) => d.replace('.js', '.css') === x)
      if (match > -1) {
        mappedItems.set(d, d.replace('.js', '.css'))
      }
      if (d.endsWith(path.join(outdir, '.cache', 'app.js'))) {
        entryComponentPath = d
      }
      return d
    })
    .filter((x) => {
      if (x.endsWith('.css')) return false
      if (x.endsWith(path.join(outdir, '.cache', 'app.js'))) return false
      return true
    })

  for (const key of outputEntryKeys) {
    const _key = pathToKey(key)

    if (key.endsWith('.css')) {
      buildContext.add(`${_key}:esm`, {
        entryPoints: [key],
        bundle: true,
        entryNames: '[name]',
        assetNames: 'assets/[name]-[hash]',
        chunkNames: 'chunks/[name]-[hash]',
        outdir: path.join(outdir, 'public'),
        loader: {
          '.css': 'css'
        }
      })

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
      define: {
        __PPRESS_BASE_URL: JSON.stringify(usableBaseURL),
        __PPRESS_RENDERED_PAGE: JSON.stringify(path.resolve(key))
      },
      loader: {
        '.js': 'jsx'
      },
      jsx: 'automatic',
      jsxImportSource: 'preact'
    })
  }

  for (const mdOutput of markdownOutput) {
    const str = template
      .replace('<!--app-->', mdOutput.html)
      .replace('<!--scripts-->', '')
    await fs.promises.writeFile(mdOutput.dest, str, 'utf8')
  }

  pageOutputEntryKeys.forEach((key) => {
    const _key = pathToKey(key)

    buildContext.hook(`${_key}:esm:error`, async (error) => {
      console.error(`Error building \`${key}\`:`, error)
    })

    buildContext.hook(`${_key}:esm:complete`, async (buildOutput) => {
      const outputFile = Object.keys(buildOutput.metafile.outputs)[0]
      const cachePath = path.join(outdir, '.cache')
      const finalFile = key.replace(cachePath, outdir).replace(/.js$/, '.html')
      const App = await import(path.resolve(entryComponentPath)).then(
        (d) => d.default
      )
      const mod = await import(path.resolve(key)).then((d) => d.default)

      const links = []
      const cssForKey = mappedItems.get(key)

      if (cssForKey) {
        links.push(
          h('link', {
            rel: 'stylesheet',
            href: path.join(
              cssForKey.replace(path.join(outdir, '.cache'), `${usableBaseURL}/public/`)
            )
          })
        )
      }

      const node = h(
        App,
        {
          headProps: {
            children: links
          },
          pageProps: {
            children: [
              h(mod)
            ],
            scripts: [
              h('script', {
                type: 'module',
                src: outputFile.replace(
                  path.normalize(outdir) + '/',
                  usableBaseURL
                )
              })
            ]
          }
        }
      )

      const str = renderToString(node)
      await mkdir(dirname(finalFile), { recursive: true })
      await fs.promises.writeFile(finalFile, str, 'utf8')

      if (!dev.enabled) {
        await fs.promises.rm(path.join(outdir, '.cache'), {
          force: true,
          recursive: true
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
      port: dev.port
    })
    console.log(`Serving assets on port: ${dev.port}`)
  } else {
    await baseContext.dispose()
    await buildContext.dispose()
  }
}

function pathToKey (toConvert) {
  return toConvert.replace('/', '__')
}
