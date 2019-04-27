/* @flow */
import test from 'ava'
import greeting from 'puppet-strings-chrome'

test('exporting "Hello World!"', t => {
  t.is(greeting, 'Hello World!')
})
