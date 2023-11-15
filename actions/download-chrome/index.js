import os from 'node:os'
import path from 'node:path'
import {
  install,
  Browser,
  resolveBuildId,
  detectBrowserPlatform,
} from '@puppeteer/browsers'
import {PUPPETEER_REVISIONS} from 'puppeteer-core/internal/revisions.js'

export default async function () {
  const result = await install({
    cacheDir: path.join(os.homedir(), '.chromium'),
    browser: Browser.CHROME,
    buildId: await resolveBuildId(
      Browser.CHROME,
      detectBrowserPlatform(),
      PUPPETEER_REVISIONS.chrome,
    ),
  })

  return result.executablePath
}
