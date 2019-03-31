
const sorted = require('is-sorted')

console.log(sorted([1,3,5]))

console.log(sorted([3,2,1]))

console.log(sorted([5,4,3], function (a, b) {
	return b-a
}))