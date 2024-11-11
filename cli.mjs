#!/usr/bin/env node

import sade from 'sade'
import { compile } from './index.js'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { readFileSync } from 'node:fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const prog = sade('prevpress')
const version = (() =>
  JSON.parse(readFileSync(join(__dirname, 'package.json'), 'utf8')).version)()

prog.version(version).option('--help, -h', 'An example global flag')

prog
  .command('dev [content]')
  .describe('Serve the content directory')
  .option('--port, -p', 'Port to serve on', 3000)
  .example('dev ./content')
  .action(async (content, opts) => {
    const contentSource = content || './content'
    const destSource = './dist'

    console.log(`> Serving ${contentSource}`)
    await compile({
      root: contentSource,
      outdir: destSource,
      baseURL: opts['base-url'],
      dev: {
        enabled: true,
        port: +opts.port || 3000,
      },
    })
  })

prog
  .command('build [content] [dest]')
  .describe('Build the content directory')
  .option('--base-url', 'Base URL to use for assets', '/')
  .example('build ./content ./dist')
  .action(async (content, dest, opts) => {
    const contentSource = content || './content'
    const destSource = dest || './dist'

    console.log(`> building from ${contentSource} to ${destSource}`)
    await compile({
      root: contentSource,
      outdir: destSource,
      baseURL: opts['base-url'],
    })
    console.log('Done!')
  })

prog.parse(process.argv)
