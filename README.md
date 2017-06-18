# shout-error [![Build Status](https://travis-ci.org/bukinoshita/shout-error.svg?branch=master)](https://travis-ci.org/bukinoshita/shout-error)

> An opinionated error message

## Install

```
$ npm install --save shout-error
```


## Usage
```js
const shoutError = require('shout-error')

shoutError('This is a error message')
//=> > Error! This is a error message
```

_Uses [chalk](https://github.com/chalk/chalk), will return a error message with a nice color._

## API

### shoutError(message)

Returns a `console.log`.

#### message

Type: `string`<br>
Required


## Related
- [shout-message](https://github.com/bukinoshita/shout-message) — An opinionated message
- [shout-success](https://github.com/bukinoshita/shout-success) — An opinionated success message  


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
