'use strict'

const ExtendableError = require('../lib')
const test = require('tap').test

class TestError extends ExtendableError {}
class SubTestError extends TestError {}

const regex = /(\w|\/)+test\/index\.js:\d{2}:\d{2}/

test('Empty ExtendableError', assert => {
  assert.plan(5)

  let err = new ExtendableError()

  assert.type(err, ExtendableError)

  assert.equal(err.name, 'ExtendableError')
  assert.equal(err.message, '')
  assert.match(err.stack, regex)
  assert.equal(err.toString(), 'ExtendableError')
})

test('ExtendableError instance of Error', assert => {
  assert.plan(6)

  let err = new ExtendableError('error occurred')

  assert.type(err, ExtendableError)
  assert.type(err, Error)

  assert.equal(err.name, 'ExtendableError')
  assert.equal(err.message, 'error occurred')
  assert.match(err.stack, regex)
  assert.equal(err.toString(), 'ExtendableError: error occurred')
})

test('TestError instance of ExtendableError', assert => {
  assert.plan(7)

  let err = new TestError('error occurred')

  assert.type(err, TestError)
  assert.type(err, ExtendableError)
  assert.type(err, Error)

  assert.equal(err.name, 'TestError')
  assert.equal(err.message, 'error occurred')
  assert.match(err.stack, regex)
  assert.equal(err.toString(), 'TestError: error occurred')
})

test('SubTestError instance of TestError', assert => {
  assert.plan(8)

  let err = new SubTestError('error occurred')

  assert.type(err, SubTestError)
  assert.type(err, TestError)
  assert.type(err, ExtendableError)
  assert.type(err, Error)

  assert.equal(err.name, 'SubTestError')
  assert.equal(err.message, 'error occurred')
  assert.match(err.stack, regex)
  assert.equal(err.toString(), 'SubTestError: error occurred')
})

test('Stacking Errors', assert => {
  assert.plan(6)

  let error = new Error('error occurred')
  error.code = 10
  error.foo = 'bar'

  let err = new ExtendableError(error)

  assert.type(err, ExtendableError)
  assert.type(err, Error)

  assert.equal(err.code, 10)
  assert.equal(err.foo, 'bar')
  assert.equal(err.name, 'ExtendableError')
  assert.equal(err.toString(), 'ExtendableError: error occurred')

  assert.end()
})

// must be last, breaks tap otherwise
test('Manual captureStackTrace', assert => {
  assert.plan(6)

  delete Error.captureStackTrace

  let err = new ExtendableError('error occurred')

  assert.type(err, ExtendableError)
  assert.type(err, Error)

  assert.equal(err.name, 'ExtendableError')
  assert.equal(err.message, 'error occurred')
  assert.match(err.stack, /at new ExtendableError/)
  assert.equal(err.toString(), 'ExtendableError: error occurred')
})
