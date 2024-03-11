// @ts-check
import { test, expect } from '@playwright/test'

test('button island works', async ({ page }) => {
  await page.goto('/')
  const button = await page.waitForSelector('#root>button')
  expect(await button.innerText()).toBe('0')
  await button.click()
  expect(await button.innerText()).toBe('1')
})

test('redirection to sub page', async ({ page }) => {
  await page.goto('/')
  const nav = await page.waitForSelector('nav')
  const childElement = await nav.$('a')
  const href = await childElement?.getAttribute('href')
  if (!href) {
    throw new Error('No link in navigation')
  }
  await childElement?.click()
  const currentUrl = page.url().replace(/\/$/, '')
  const attributeLink = href.replace(/\/$/, '')
  expect(currentUrl).toContain(attributeLink)
})
