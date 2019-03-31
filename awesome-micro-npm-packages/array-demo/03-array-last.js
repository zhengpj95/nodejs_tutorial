var last = require('array-last');

console.log(last(['a', 'b', 'c', 'd', 'e', 'f']))
//=> 'f'

console.log(last(['a', 'b', 'c', 'd', 'e', 'f'], 1))
//=> 'f'

console.log(last(['a', 'b', 'c', 'd', 'e', 'f'], 3))
//=> ['d', 'e', 'f']