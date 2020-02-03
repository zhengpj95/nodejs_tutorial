// ES6 module
// import data from './data.json';

// commonjs module
const data = require('./data.json');//读取json文件数据
const bar = require('./bar');
const foo = require('./foo.js');

console.log(data, data.data3);	//json数据，可直接读取使用
console.log(bar);
console.log(foo);	//js文件是一个模块，模块里面没有export数据，故输出{}
bar.fun1();
bar.fun2();
console.log(bar.fun1.name, bar.fun2.name);
