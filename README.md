# Extendable Error [![version][npm-version]][npm-url] [![License][license-image]][license-url] [![Build Status][travis-image]][travis-url] [![Downloads][npm-downloads]][npm-url] [![Coverage Status][codeclimate-coverage]][codeclimate-url]

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
