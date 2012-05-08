var assert = require('assert');
var t = require('../../text_parser');

//testing simple usage
var result = t.parse("some text text", {});
assert.equal(result[0]['word'], 'some');
assert.equal(result[0]['hits'], 1);
assert.equal(result[1]['word'], 'text');
assert.equal(result[1]['hits'], 2);

//testing with special characters
var result = t.parse("*&%?!Hey$#%bro!$@\\'///[.](\")", {});
assert.equal(result[0]['word'], 'hey');
assert.equal(result[0]['hits'], 1);
assert.equal(result[1]['word'], 'bro');
assert.equal(result[1]['hits'], 1);