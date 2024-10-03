import process from 'node:process'
import test from 'ava'
import {openBrowser, closeBrowser, openTab, evalInTab} from 'puppet-strings'
import findChrome from './index.js'

test('finding the path to a locally installed version of Chrome', async (t) => {
  if (process.platform === 'darwin') {
    t.is(
      await findChrome(),
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    )
  } else if (process.platform === 'linux') {
    t.is(await findChrome(), '/usr/bin/chromium')
  } else {
    t.fail()
  }
})

test('launching the locally installed version of Chrome', async (t) => {
  const chromePath = await findChrome()
  if (!chromePath) {
    return t.fail()
  }

  const browser = await openBrowser(chromePath)
  t.teardown(() => {
    closeBrowser(browser)
  })

  const tab = await openTab(browser, 'http://example.com')
  t.is(await evalInTab(tab, [], `return document.title`), 'Example Domain')
})
