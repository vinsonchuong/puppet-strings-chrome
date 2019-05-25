/* @flow */
import test from 'ava'
import findChrome from './'

test('finding the path to a locally installed version of Chrome', async t => {
  t.log(await findChrome())
  t.pass()
})
