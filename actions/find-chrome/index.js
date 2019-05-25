/* @flow */
import * as os from 'os'
import * as path from 'path'
import fs, { promises as fsp } from 'fs'

export default async function(): Promise<?string> {
  if (process.platform === 'darwin') {
    const possiblePaths = [
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      path.join(os.homedir(), '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome')
    ]

    for (const possiblePath of possiblePaths) {
      try {
        await fsp.access(possiblePath, fs.constants.R_OK | fs.constants.X_OK)
        return possiblePath
      } catch (error) {}
    }

    return null
  }
}
