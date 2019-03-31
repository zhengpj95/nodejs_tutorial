
const http = require("http");
const fs = require("fs");
const url = require("url");
const mime = require("mime");
const template = require("art-template");

var comments = [
	{
		name : 'zpj',
		message : '今天我寒夜里看雪飘过......',
		dateTime : '2019-03-13 22:22:22'
	},
	{
		name : 'zpj2',
		message : '今天我寒夜里看雪飘过......',
		dateTime : '2019-03-13 22:22:22'
	},
	{
		name : 'zpj3',
		message : '今天我寒夜里看雪飘过......',
		dateTime : '2019-03-13 22:22:22'
	},
	{
		name : 'zpj4',
		message : '今天我寒夜里看雪飘过......',
		dateTime : '2019-03-13 22:22:22'
	},
	{
		name : 'zpj5',
		message : '今天我寒夜里看雪飘过......',
		dateTime : '2019-03-13 22:22:22'
	}
]


http.createServer(function (req, res) {
	// 使用 url.parse 方法将路径解析位一个方便操作的对象
	// 第二个参数 true 表示转换为 对象 形式
	var parseObj = url.parse(req.url, true);
	// 此为不包含查询字符串的路径部分，就是没有？name=xx&content=xx部分
	var pathname = parseObj.pathname;
	
	if( pathname === '/'){
		// 设置首页
		fs.readFile('views/03.home.html', function(err, data){
			if(err){
				res.writeHeader(200, {'Content-Type' : 'text/html;charset=utf-8'});
				return res.end("<h2 style='color:#f00;'>File not found!  404 </h2>");
			}
			var htmlStr = template.render(data.toString(), {
				comments : comments
			})
			res.end(htmlStr);
		})
	} else if( pathname === '/post' ) {
		// 发表评论
		fs.readFile('views/04.post.html', function(err, data){
			if(err){
				res.writeHeader(200, {'Content-Type' : 'text/html;charset=utf-8'});
				return res.end("<h2 style='color:#f00;'>File not found!  404 </h2>");
			}
			res.end(data);
		})
	} else if( pathname.indexOf('/public') === 0 ){
		// 读取 public 下的文件
		fs.readFile('.' + pathname, function(err, data){
			if(err){
				res.writeHeader(200, {'Content-Type' : 'text/html;charset=utf-8'});
				return res.end("<h2 style='color:#f00;'>File not found!  404 </h2>");
			}
			// mime.getType()返回所读取文件的类型
			res.setHeader('Content-Type', mime.getType('.' + pathname));
			res.end(data);
		})
	} else if(pathname === '/comment'){
		// 添加评论
		// res.end(JSON.stringify(parseObj.query));
		/*
			获取数据，添加到 comments 中
		*/
		let comment = parseObj.query;
		comment.dateTime = '2019-03-14 10:10:10';
		comments.unshift(comment);
		/*跳转路径
			状态码设置为 302 临时重定向，浏览器不记忆
									301 永久重定向，浏览器记住
			响应头中通过 Location 告诉客户端往哪儿重定向
		*/
		res.statusCode = 302
		res.setHeader('Location', '/')
		res.end()
	}else {
		// 读取 404 文件
		fs.readFile('views/05.404.html', function(err, data){
			if(err){
				res.writeHeader(200, {'Content-Type' : 'text/html;charset=utf-8'});
				return res.end("<h2 style='color:#f00;'>File not found!  404 </h2>");
			}
			res.end(data);
		})
	}
}).listen(3000,function(){
	console.log("http://localhost:3000");
});