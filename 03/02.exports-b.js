
var aExports = require("./01.exports-a");


/* 方式三
若为 module.exports = add
此处引入的就是add函数
*/
// var t = aExports(10,20)
// console.log(t)
// console.log(aExports)


/* 方式四
若为 module.exports.add = add
*/
var t = aExports.add(10,20)
console.log(t)
console.log(aExports)
console.log(aExports.add)
