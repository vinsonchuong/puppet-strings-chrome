/* @flow */
import test from 'ava'
import findChrome from './'

test('finding the path to a locally installed version of Chrome', async t => {
  if (process.platform === 'darwin') {
    t.true(await findChrome(), '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome')
  }

  t.pass()
})
