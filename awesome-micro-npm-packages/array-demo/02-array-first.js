var first = require('array-first');
var isNumber = require('is-number')


console.log(first(['a', 'b', 'c', 'd', 'e', 'f']))
//=> 'a'

console.log(first(['a', 'b', 'c', 'd', 'e', 'f'], 1))
//=> 'a'

console.log(first(['a', 'b', 'c', 'd', 'e', 'f'], 3))
//=> ['a', 'b', 'c']

console.log(isNumber(15))
//=> true