'use strict'

module.exports = class ExtendableError extends Error {
  constructor (input) {
    const isError = Object.prototype.toString.call(input) === '[object Error]' || input instanceof Error

    const message = (isError ? input.message : input) || ''

    super(message)
    this.message = message
    this.name = this.constructor.name

    // inherit properties
    if (isError) {
      Object.assign(this, input)
    }

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor)
    } else {
      this.stack = new Error(message).stack
    }
  }
}
