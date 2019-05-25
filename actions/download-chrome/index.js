/* @flow */
import puppeteer from 'puppeteer-core'
import puppeteerPackageJson from 'puppeteer-core/package.json'
import * as os from 'os'
import * as path from 'path'

const chromiumVersion = puppeteerPackageJson.puppeteer.chromium_revision

export default async function(): Promise<string> {
  const browserFetcher = puppeteer.createBrowserFetcher({
    path: path.join(os.homedir(), '.chromium')
  })

  const { executablePath } = await browserFetcher.download(chromiumVersion)

  return executablePath
}
