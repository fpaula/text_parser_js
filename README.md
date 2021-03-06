[![Travis](https://secure.travis-ci.org/fpaula/text_parser_js.png)](http://travis-ci.org/#!/fpaula/text_parser_js)

parse(text, args)
 
Args
 dictionary (array)
 order (asc|desc)
 order_by (word|hits)

Simple usage

var t = require('text_parser');
t.parse("Simple, simple text!");
// => [{'word':'simple', 'hits':2}, {'word':'text', 'hits':1}]


Dictionary

var t = require('text_parser');
var args = {dictionary: ['this', 'test']}
t.parse("This is a test with a dictionary. Nice test!", args);
// => [{'word':'this', 'hits':1}, {'word':'test', 'hits':2}]

Ordering

var t = require('text_parser');
var args = {order: 'asc', order_by: 'word'}
t.parse("Banana Apple", args);
// => [{'word':'apple', 'hits':1}, {'word':'banana', 'hits':1}]

var t = require('text_parser');
var args = {order: 'desc', order_by: 'hits'}
t.parse("Apple Banana Banana", args);
// => [{'word':'banana', 'hits':2}, {'word':'apple', 'hits':1}]