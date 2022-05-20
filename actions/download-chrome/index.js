import os from 'node:os'
import path from 'node:path'
import puppeteer from 'puppeteer-core'

const chromiumVersion = puppeteer._preferredRevision

export default async function () {
  const browserFetcher = puppeteer.createBrowserFetcher({
    path: path.join(os.homedir(), '.chromium'),
  })

  const {executablePath} = await browserFetcher.download(chromiumVersion)

  return executablePath
}
