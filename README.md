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
