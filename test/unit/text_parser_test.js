var assert = require('assert');
var t = require('../../text_parser');
var result = t.parse("some text text");
assert.equal(result[0]['word'], 'some');
assert.equal(result[0]['hits'], 1);
assert.equal(result[1]['word'], 'text');
assert.equal(result[1]['hits'], 2);