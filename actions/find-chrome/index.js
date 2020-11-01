import os from 'os'
import path from 'path'
import fs, {promises as fsp} from 'fs'

export default async function () {
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

  for (const possiblePath of possiblePaths) {
    try {
      // eslint-disable-next-line no-await-in-loop
      await fsp.access(possiblePath, fs.constants.R_OK | fs.constants.X_OK)
      return possiblePath
    } catch {}
  }

  return null
}
