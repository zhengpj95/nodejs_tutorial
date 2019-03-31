
// 导入 server router 模块
const server = require("./server");
const router = require("./router");

// 使用 server 模块中的方法开启服务器
server.start(router.route);