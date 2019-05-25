/* @flow */
import * as os from 'os'
import * as path from 'path'
import fs, { promises as fsp } from 'fs'

export default async function(): Promise<?string> {
  const possiblePaths = []

  if (process.platform === 'darwin') {
    possiblePaths.push(
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      path.join(
        os.homedir(),
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
      )
    )
  }

  if (process.platform === 'linux') {
    possiblePaths.push(
      '/usr/bin/chromium',
      '/usr/bin/chromium-browser',
      '/usr/bin/google-chrome',
      '/usr/bin/google-chrome-stable'
    )
  }

  if (process.platform === 'win32') {
    possiblePaths.push(
      'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    )
  }

  for (const possiblePath of possiblePaths) {
    try {
      await fsp.access(possiblePath, fs.constants.R_OK | fs.constants.X_OK)
      return possiblePath
    } catch (error) {}
  }

  return null
}
