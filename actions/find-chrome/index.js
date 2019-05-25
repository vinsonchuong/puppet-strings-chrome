/* @flow */
import * as lsregister from 'lsregister'

export default async function(): Promise<string> {
  return JSON.stringify(await lsregister.dump(), null, 2)
}
