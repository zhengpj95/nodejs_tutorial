
var bExports = require("./b")

// 使用 b 模块中的属性和方法
console.log(bExports.foo)
console.log("message in a.js")
console.log("result = " + bExports.add(10,400))