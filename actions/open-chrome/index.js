import {openBrowser} from 'puppet-strings'
import {findChrome, downloadChrome} from '../../index.js'

export default async function openChrome(options) {
  return openBrowser((await findChrome()) || (await downloadChrome()), options)
}
