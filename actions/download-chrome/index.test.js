import test from 'ava'
import {openBrowser, openTab, evalInTab} from 'puppet-strings'
import downloadChrome from './index.js'

test('downloading Chrome', async (t) => {
  const browser = await openBrowser(await downloadChrome())
  const tab = await openTab(browser, 'http://example.com')
  t.is(await evalInTab(tab, [], `return document.title`), 'Example Domain')
})
