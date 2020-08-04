# Extendable Error 

[![license][license-image]][license-url]
[![version][npm-image]][npm-url]
[![super linter][super-linter-image]][super-linter-url]
[![test][test-image]][test-url]
[![release][release-image]][release-url]

[license-url]: LICENSE
[license-image]: https://img.shields.io/github/license/ahmadnassri/node-error.svg?logo=circleci

[npm-url]: https://www.npmjs.com/package/@ahmadnassri/error
[npm-image]: https://img.shields.io/npm/v/@ahmadnassri/error.svg?logo=npm

[super-linter-url]: https://github.com/ahmadnassri/node-error/actions?query=workflow%3Asuper-linter
[super-linter-image]: https://github.com/ahmadnassri/node-error/workflows/super-linter/badge.svg

[test-url]: https://github.com/ahmadnassri/node-error/actions?query=workflow%3Atest
[test-image]: https://github.com/ahmadnassri/node-error/workflows/test/badge.svg

[release-url]: https://github.com/ahmadnassri/node-error/actions?query=workflow%3Arelease
[release-image]: https://github.com/ahmadnassri/node-error/workflows/release/badge.svg


> Extendable Error Class for use with `Node >= 4.x`

## Install

```bash
npm install --production --save @ahmadnassri/error
```

## Usage

```js
const ExtendableError = require('@ahmadnassri/error')

class MyError extends ExtendableError {
  // constructor is optionaly useful for adding custom arguments, or methods:
  constructor (code, message, extra) {
    super(message)

    this.code = code
    this.extra = extra
  }

  getCode () {
    return this.code
  }
}
```

----
> License: [ISC][license-url] &bull; 
> Copyright: [ahmadnassri.com](https://www.ahmadnassri.com) &bull; 
> Github: [@ahmadnassri](https://github.com/ahmadnassri) &bull; 
> Twitter: [@ahmadnassri](https://twitter.com/ahmadnassri)

[license-url]: http://choosealicense.com/licenses/isc/
[license-image]: https://img.shields.io/github/license/ahmadnassri/node-error.svg?style=flat-square

[travis-url]: https://travis-ci.org/ahmadnassri/node-error
[travis-image]: https://img.shields.io/travis/ahmadnassri/node-error.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/node-error
[npm-version]: https://img.shields.io/npm/v/node-error.svg?style=flat-square
[npm-downloads]: https://img.shields.io/npm/dm/node-error.svg?style=flat-square

[codeclimate-url]: https://codeclimate.com/github/ahmadnassri/node-error
[codeclimate-coverage]: https://api.codeclimate.com/v1/badges/2a5d985933028c4fc4c6/test_coverage?style=flat-square
