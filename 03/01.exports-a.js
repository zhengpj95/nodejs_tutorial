
var foo = 'bar'
var name = 'zpj'
var add = function (x, y){
	return x + y
}
var student = {
	a : 'aaa',
	b : 'bbb',
	c : 'ccc'
}


// 方式一
/*exports.foo = foo
exports.name = name
exports.add = add
exports.student = student
*/

// 方式二
/*module.exports = {
	foo : foo,
	name : name,
	add : add,
	student : student,
	chrome : 'chrome 浏览器'
}*/

// 方式三
// 导出的就是add函数，module.exports = add
// module.exports = add

// 方式四
// 导出的就是add函数，有个别名add
module.exports.add = add
