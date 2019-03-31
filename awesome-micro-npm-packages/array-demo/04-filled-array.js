const filledArray = require('filled-array');

console.log(filledArray('x', 3))
//=> ['x', 'x', 'x']

console.log(filledArray(0, 3))
//=> [0, 0, 0]

console.log(filledArray(i => {
	return (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i;
}, 15))
//=> [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']