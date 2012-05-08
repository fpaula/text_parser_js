var assert = require('assert');
var t = require('../../text_parser');

//simple usage
var result = t.parse("some text text", {});
assert.equal(result[0]['word'], 'some');
assert.equal(result[0]['hits'], 1);
assert.equal(result[1]['word'], 'text');
assert.equal(result[1]['hits'], 2);

//with special characters
var result = t.parse("*&%?!Hey$#%bro!$@\\'///[.](\")", {});
assert.equal(result[0]['word'], 'hey');
assert.equal(result[0]['hits'], 1);
assert.equal(result[1]['word'], 'bro');
assert.equal(result[1]['hits'], 1);

//dictionary
var args = {dictionary: ['this', 'test']}
var result = t.parse("This is a test with a dictionary. Nice test!", args);
assert.equal(result.length, 2);
assert.equal(result[0]['word'], 'this');
assert.equal(result[0]['hits'], 1);
assert.equal(result[1]['word'], 'test');
assert.equal(result[1]['hits'], 2);