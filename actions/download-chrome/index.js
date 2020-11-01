import puppeteer from 'puppeteer-core'
import os from 'os'
import path from 'path'

const chromiumVersion = puppeteer._preferredRevision

export default async function () {
  const browserFetcher = puppeteer.createBrowserFetcher({
    path: path.join(os.homedir(), '.chromium')
  })

  const {executablePath} = await browserFetcher.download(chromiumVersion)

  return executablePath
}
