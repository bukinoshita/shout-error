import { shoutError } from '../source'

global.console = { ...console, error: jest.fn() }

test('shout error message', () => {
  shoutError('Ops, something wrong happened.')
  expect(console.error).toBeCalled()
})

test('shout error instance', () => {
  const error = new TypeError('Ops, something wrong happened.')
  shoutError(error)
  expect(console.error).toBeCalled()
})
