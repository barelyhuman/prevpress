// @ts-check
import { test, expect } from '@playwright/test'

test('button island works', async ({ page }) => {
  await page.goto('/')
  const button = await page.waitForSelector('#root>button')
  expect(await button.innerText()).toBe('0')
  await button.click()
  expect(await button.innerText()).toBe('1')
})
