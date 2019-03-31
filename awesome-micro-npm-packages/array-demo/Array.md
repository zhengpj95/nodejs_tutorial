
# Array

## is-sorted

检查是否排序，默认升序为true
若要降序，则传递一个函数function(a,b){return b-a;}
```javascript
// 默认升序
const sorted = require('is-sorted')
console.log(sorted([1,3,5]))    // true
console.log(sorted([3,2,1]))    // false
console.log(sorted([5,4,3], function (a, b) { // true
  return b-a
}))
```

## array-first

返回前面的n个元素
```javascript
var first = require('array-first');
first(['a', 'b', 'c', 'd', 'e', 'f'], 3)
//=> ['a', 'b', 'c']
```

## array-last

返回后面的n个元素
```javascript
var last = require('array-last');
last(['a', 'b', 'c', 'd', 'e', 'f'], 3)
//=> ['d', 'e', 'f']
```

## arr-flatten

扁平化数组
```javascript
var flatten = require('arr-flatten');

flatten(['a', ['b', ['c']], 'd', ['e']]);
//=> ['a', 'b', 'c', 'd', 'e']
```

## dedupe

去除重复的元素
```javascript
var dedupe = require('dedupe')

var a = [1, 2, 2, 3]
var b = dedupe(a)
console.log(b)

//result: [1, 2, 3]
```

## array-range

```javascript
var range = require('array-range')
range(3)       // -> [ 0, 1, 2 ]
range(1, 4)    // -> [ 1, 2, 3 ]

array(5).map( x => x*x )
// -> [ 0, 1, 4, 9, 16 ]

array(2, 10).filter( x => x%2===0 )
// -> [ 2, 4, 6, 8 ]
```

## arr-diff

Returns the difference between the first array and additional arrays.
返回不重复数据
```javascript
var diff = require('arr-diff');

var a = ['a', 'b', 'c', 'd'];
var b = ['b', 'c'];

console.log(diff(a, b))
//=> ['a', 'd']
```

## filled-array

用元素填满数组，第一个参数是元素，第二个参数是数组长度
```javascript
const filledArray = require('filled-array');

console.log(filledArray('x', 3))
//=> ['x', 'x', 'x']

console.log(filledArray(0, 3))
//=> [0, 0, 0]
```

## map-array

遍历数组
```javascript
const mapArray = require('map-array');
const obj = {
  giorgio: 'Bianchi',
  gino: 'Rossi'
};
console.log(mapArray(obj, (key, value) => key + ' ' + value));

// ['giorgio Bianchi', 'gino Rossi']
```

## in-array

元素是否在数组中
```javascript
var inArray = require('in-array');
console.log(inArray(['a', 'b', 'c'], 'a'));
//=> true

console.log(inArray(null, 'a'));
//=> false

console.log(inArray(null));
//=> false
```

## unordered-array-remove

## array-swap

## mirrarray

## group-array

## array.chunk

