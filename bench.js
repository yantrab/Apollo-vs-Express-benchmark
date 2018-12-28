'use strict'

const autocannon = require('autocannon')

autocannon({
  url: 'http://localhost:4000',
  connections: 10, //default
  pipelining: 1, // default
  duration: 10, // default
  method:'POST',
  body :`{"operationName":null,"variables":{},"query":"{\n  hello\n}\n"}`
}, console.log)