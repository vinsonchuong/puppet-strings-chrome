/* @flow */
import test from 'ava'
import findChrome from './'

test('finding the path to a locally installed version of Chrome', async t => {
  if (process.platform === 'darwin') {
    t.is(
      await findChrome(),
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    )
  } else if (process.platform === 'linux' && process.env.TRAVIS) {
    t.is(await findChrome(), '/usr/bin/google-chrome')
  } else if (process.platform === 'linux') {
    t.is(await findChrome(), '/usr/bin/chromium')
  } else {
    t.fail()
  }
})
