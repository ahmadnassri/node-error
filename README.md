# Extendable Error [![version][npm-version]][npm-url] [![License][license-image]][license-url]

> Extendable Error Class for use with `Node >= 4.x`

[![Build Status][travis-image]][travis-url]
[![Downloads][npm-downloads]][npm-url]
[![Code Climate][codeclimate-quality]][codeclimate-url]
[![Coverage Status][codeclimate-coverage]][codeclimate-url]
[![Dependency Status][dependencyci-image]][dependencyci-url]
[![Dependencies][david-image]][david-url]

## Install

```bash
npm install --only=production --save @ahmadnassri/error
```

## Usage

```js
import ExtendableError from '@ahmadnassri/error';

class MyError extends ExtendableError {
  // constructor is optionaly useful for adding custom arguments, or methods:
  constructor(code, message, extra) {
    super(message)

    this.code = code
    this.extra = extra
  }

  getCode() {
    return this.code
  }
}
```

----
> :copyright: [ahmadnassri.com](https://www.ahmadnassri.com/) &nbsp;&middot;&nbsp;
> License: [ISC][license-url] &nbsp;&middot;&nbsp;
> Github: [@ahmadnassri](https://github.com/ahmadnassri) &nbsp;&middot;&nbsp;
> Twitter: [@ahmadnassri](https://twitter.com/ahmadnassri)

[license-url]: http://choosealicense.com/licenses/isc/
[license-image]: https://img.shields.io/github/license/ahmadnassri/node-error.svg?style=flat-square

[travis-url]: https://travis-ci.org/ahmadnassri/node-error
[travis-image]: https://img.shields.io/travis/ahmadnassri/node-error.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/@ahmadnassri/node-error
[npm-version]: https://img.shields.io/npm/v/@ahmadnassri/node-error.svg?style=flat-square
[npm-downloads]: https://img.shields.io/npm/dm/@ahmadnassri/node-error.svg?style=flat-square

[codeclimate-url]: https://codeclimate.com/github/ahmadnassri/node-error
[codeclimate-quality]: https://img.shields.io/codeclimate/github/ahmadnassri/node-error.svg?style=flat-square
[codeclimate-coverage]: https://img.shields.io/codeclimate/coverage/github/ahmadnassri/node-error.svg?style=flat-square

[david-url]: https://david-dm.org/ahmadnassri/node-error
[david-image]: https://img.shields.io/david/ahmadnassri/node-error.svg?style=flat-square

[dependencyci-url]: https://dependencyci.com/github/ahmadnassri/node-error
[dependencyci-image]: https://dependencyci.com/github/ahmadnassri/node-error/badge?style=flat-square
