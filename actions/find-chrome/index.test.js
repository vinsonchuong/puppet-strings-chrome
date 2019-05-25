/* @flow */
import test from 'ava'
import findChrome from './'

test('finding the path to a locally installed version of Chrome', async t => {
  if (process.platform === 'darwin') {
    t.is(await findChrome(), '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome')
  } else if (process.platform === 'linux') {
    t.is(await findChrome(), '/usr/bin/chromium')
  } else if (process.platform === 'win32') {
    t.is(await findChrome(), 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
  } else {
    t.fail()
  }
})
