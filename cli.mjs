#!/usr/bin/env node

import sade from 'sade'
import { compile } from './index.js'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { existsSync, readFileSync } from 'node:fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const prog = sade('prevpress')
const version = (() =>
  JSON.parse(readFileSync(join(__dirname, 'package.json'), 'utf8')).version)()

prog
  .version(version)
  .option('--help, -h', 'An example global flag')
  .option('--config,-c', 'Config to use', 'prevpress.config.js')

prog
  .command('dev [content]')
  .describe('Serve the content directory')
  .option('--port, -p', 'Port to serve on', 3000)
  .example('dev ./content')
  .action(async (content, opts) => {
    const contentSource = content || './content'
    const destSource = './dist'

    const userConfig = await readConfig(opts.config)

    console.log(`> Serving ${contentSource}`)
    await compile({
      root: contentSource,
      outdir: destSource,
      baseURL: opts['base-url'],
      userOptions: userConfig,
      dev: {
        enabled: true,
        port: +opts.port || 3000
      }
    })
  })

prog
  .command('build [content] [dest]')
  .describe('Build the content directory')
  .option('--base-url', 'Base URL to use for assets', '/')
  .example('build ./content ./dist')
  .action(async (content, dest, opts) => {
    try {
      const contentSource = content || './content'
      const destSource = dest || './dist'

      const userConfig = await readConfig(opts.config)

      console.log(`> building from ${contentSource} to ${destSource}`)
      await compile({
        root: contentSource,
        outdir: destSource,
        userOptions: userConfig,
        baseURL: opts['base-url']
      })
      console.log('Done!')
      process.exit(0)
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  })

prog.parse(process.argv)

async function readConfig (configPath) {
  let config = {}
  const resolvedConfigPath = join(process.cwd(), configPath)
  if (existsSync(resolvedConfigPath)) {
    config = await import(resolvedConfigPath).then((d) =>
      'default' in d ? d.default : d
    )
  }
  return config
}
