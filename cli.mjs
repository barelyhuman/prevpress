#!/usr/bin/env node

import sade from 'sade'
import { compile } from './index.js'

const prog = sade('prevpress')

prog.version('1.0.5').option('--help, -h', 'An example global flag')

prog
  .command('build [content] [dest]')
  .describe('Build the content directory')
  .option('--base-url', 'Base URL to use for assets', '/')
  .example('build content dist')
  .action(async (content, dest, opts) => {
    const contentSource = content || './content'
    const destSource = dest || './dist'

    console.log(`> building from ${contentSource} to ${destSource}`)
    await compile({
      root: contentSource,
      outdir: destSource,
      baseURL: opts['base-url']
    })
    console.log('Done!')
  })

prog.parse(process.argv)
