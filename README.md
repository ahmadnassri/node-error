# Extendable Error

Extendable Error Class for use with Node.js

[![license][license-img]][license-url]
[![release][release-img]][release-url]
[![semantic][semantic-img]][semantic-url]

## Install

``` bash
npm install @ahmadnassri/error
```

## Usage

``` js
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
> Author: [Ahmad Nassri](https://www.ahmadnassri.com/) &bull;
> Twitter: [@AhmadNassri](https://twitter.com/AhmadNassri)

[license-url]: LICENSE
[license-img]: https://badgen.net/github/license/ahmadnassri/node-error

[release-url]: https://github.com/ahmadnassri/node-error/releases
[release-img]: https://badgen.net/github/release/ahmadnassri/node-error

[semantic-url]: https://github.com/ahmadnassri/node-error/actions?query=workflow%3Arelease
[semantic-img]: https://badgen.net/badge/📦/semantically%20released/blue
