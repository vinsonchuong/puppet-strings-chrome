import test from 'ava'
import {openTab, evalInTab} from 'puppet-strings'
import openChrome from './index.js'

test('opening some version of Chrome', async (t) => {
  const browser = await openChrome()
  const tab = await openTab(browser, 'http://example.com')
  t.is(await evalInTab(tab, [], `return document.title`), 'Example Domain')
})
