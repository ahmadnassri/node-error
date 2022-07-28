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
