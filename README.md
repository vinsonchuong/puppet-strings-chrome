# puppet-strings-chrome
![npm](https://img.shields.io/npm/v/puppet-strings-chrome.svg)
[![Build Status](https://travis-ci.org/vinsonchuong/puppet-strings-chrome.svg?branch=master)](https://travis-ci.org/vinsonchuong/puppet-strings-chrome)
[![dependencies Status](https://david-dm.org/vinsonchuong/puppet-strings-chrome/status.svg)](https://david-dm.org/vinsonchuong/puppet-strings-chrome)
[![devDependencies Status](https://david-dm.org/vinsonchuong/puppet-strings-chrome/dev-status.svg)](https://david-dm.org/vinsonchuong/puppet-strings-chrome?type=dev)

An awesome package

## Usage
Install [puppet-strings-chrome](https://yarnpkg.com/en/package/puppet-strings-chrome)
by running:

```sh
yarn add puppet-strings-chrome
```

### `openChrome(options)`
Find a locally installed stable version of Chrome or download it if none
exists, and then
[launch it for use with puppet-strings](https://github.com/vinsonchuong/puppet-strings/tree/master/actions/open-browser)

```js
import { openChrome } from 'puppet-strings-chrome'
import { openTab } from 'puppet-strings'

async function run() {
  const browser = await openChrome()
  const tab = await openTab(browser, 'http:/example.com')
}

run()
```

`openChrome()` takes the same options as
[`openBrowser()`](https://github.com/vinsonchuong/puppet-strings/tree/master/actions/open-browser)

`openChrome()` uses [`findChrome()`](#findchrome) to detect a locally installed
version of Chrome or Chromium, falling back to using
[`downloadChrome()`](#downloadchrome) to download a usable version of Chromium.

### `findChrome()`
Find the path to a locally installed stable version of Chromium or Google
Chrome.

```js
import { findChrome } from 'puppet-strings-chrome'

async function run() {
  const chromePath = await findChrome()
  console.log(chromePath)
}

run()
```

`findChrome` returns `null` if it can't find an executable.

Only Linux and OSX are supported.

`findChrome` searches common paths such as:

* `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`
* `/usr/bin/chromium`
* `/usr/bin/chromium-browser`
* `/usr/bin/google-chrome`
* `/usr/bin/google-chrome-stable`

If no executables exist at any of these paths, `findChrome` returns `null`

### `downloadChrome()`
Download a version of Chromium that will work with puppet-strings.

```js
import { downloadChrome } from 'puppet-strings-chrome'

async function run() {
  const chromePath = await downloadChrome()
  console.log(chromePath)
}

run()
```

`downloadChrome()` downloads the
[version of Chromium](https://github.com/GoogleChrome/puppeteer/blob/084cf021195dbe125d26496796f590a4300fb844/package.json#L11)
compatible with the current version of Puppeteer. Downloads are cached in
`~/.chromium`. If the version of Chromium is already downloaded, it will not be
downloaded again.
