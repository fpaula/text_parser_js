var assert = require('assert');
var t = require('../text_parser');

//simple usage
var result = t.parse("some text text");
assert.equal(result.length, 2);
assert.equal(result[0]['word'], 'some');
assert.equal(result[0]['hits'], 1);
assert.equal(result[1]['word'], 'text');
assert.equal(result[1]['hits'], 2);

//letter case
var result = t.parse("CaLifOrniA", {});
assert.equal(result.length, 1);
assert.equal(result[0]['word'], 'california');
assert.equal(result[0]['hits'], 1);

//accentuation
var result = t.parse("Pão", {});
assert.equal(result.length, 1);
assert.equal(result[0]['word'], 'pão');
assert.equal(result[0]['hits'], 1);

//numbers
var result = t.parse("999", {});
assert.equal(result.length, 1);
assert.equal(result[0]['word'], '999');
assert.equal(result[0]['hits'], 1);

//special characters
var result = t.parse("*&%?!Hey$#%bro!$@\\'///[.](\")", {});
assert.equal(result.length, 2);
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

//dictionary with double word
var args = {dictionary: ['forrest gump']}
var result = t.parse("Forrest Gump is a nice movie", args);
assert.equal(result.length, 1);
assert.equal(result[0]['word'], 'forrest gump');
assert.equal(result[0]['hits'], 1);

//dictionary letter case and spaces
var args = {dictionary: ['    fOrresT gump ']}
var result = t.parse("FORREST GUMP is a nice movie", args);
assert.equal(result.length, 1);
assert.equal(result[0]['word'], 'forrest gump');
assert.equal(result[0]['hits'], 1);

//dictionary with hifen
var args = {dictionary: ['forrest-gump']}
var result = t.parse("forresT-gump", args);
assert.equal(result.length, 1);
assert.equal(result[0]['word'], 'forrest-gump');
assert.equal(result[0]['hits'], 1);

//order by word asc
var args = {order: 'asc', order_by: 'word'}
var result = t.parse("moto bike car", args);
assert.equal(result.length, 3);
assert.equal(result[0]['word'], 'bike');
assert.equal(result[1]['word'], 'car');
assert.equal(result[2]['word'], 'moto');

//order by word desc
var args = {order: 'desc', order_by: 'word'}
var result = t.parse("moto bike car", args);
assert.equal(result.length, 3);
assert.equal(result[0]['word'], 'moto');
assert.equal(result[1]['word'], 'car');
assert.equal(result[2]['word'], 'bike');

//order by hits asc
var args = {order: 'asc', order_by: 'hits'}
var result = t.parse("moto moto bike bike moto car", args);
assert.equal(result.length, 3);
assert.equal(result[0]['word'], 'car');
assert.equal(result[1]['word'], 'bike');
assert.equal(result[2]['word'], 'moto');

//order by hits desc
var args = {order: 'desc', order_by: 'hits'}
var result = t.parse("moto moto bike bike moto car", args);
assert.equal(result.length, 3);
assert.equal(result[0]['word'], 'moto');
assert.equal(result[1]['word'], 'bike');
assert.equal(result[2]['word'], 'car');