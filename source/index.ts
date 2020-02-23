import { red } from 'chalk'

type ErrorType = string | Error | TypeError

export function shoutError(error: ErrorType, label: string = '> Error!') {
  const message = error instanceof TypeError || error instanceof TypeError ? error.message : error

  return console.error(`${red(label)} ${message}`)
}
