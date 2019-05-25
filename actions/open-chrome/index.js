/* @flow */
import { openBrowser } from 'puppet-strings'
import { findChrome, downloadChrome } from '../../'

export default async function<Options: *>(
  options: Options
): $Call<typeof openBrowser, string, Options> {
  return openBrowser((await findChrome()) || (await downloadChrome()), options)
}
