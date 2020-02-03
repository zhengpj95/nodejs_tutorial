const DEFAULT_LENGTH = 999;

let fun1 = function () {
	console.log('This is fun1.');
}

let fun2 = () => console.log(`This is fun2.`);

module.exports = {
	DEFAULT_LENGTH,
	fun1,
	fun2
}
