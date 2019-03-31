
var http = require("http");
var url = require("url");

/*
传递匿名函数function(req,res){}
	- req 请求
	- res 响应
基于事件驱动的回调
/*
创建模块
*/


function start(route){
	http.createServer(function(req, res){
		var pathname = url.parse(req.url).pathname;
		console.log("Request for " + pathname + " received.");
		
		route(pathname);

		res.writeHead(200,{"Content-Type":"text/html"});
		res.write("<h2>Hello Nodejs</h2>");
		res.end();
	}).listen(3000, function(){
		console.log("server starts at http://localhost:3000");
	});
}
/* 
通过 `exports` 导出
左边的 `start` 是其他模块中调用的函数名
右边的 `start` 是本模块中的start()函数
*/
// 导出 start 方法
exports.start = start;

