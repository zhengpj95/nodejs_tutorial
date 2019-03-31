
const express = require("express");
const http = require("http");
const fs = require("fs");
const url = require("url");
const mime = require("mime");
const template = require("art-template");
const app = express();
const port = 3000

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

// 公开指定目录
app.use('/public/', express.static('./public/'))

app.get('/', function (req, res) {
	fs.readFile('views/home.html', function(err, data){
		if(err){
			res.writeHeader(200, {'Content-Type' : 'text/html;charset=utf-8'});
			return res.end("<h2 style='color:#f00;'>File not found!  404 </h2>");
		}
		var htmlStr = template.render(data.toString(), {
			comments : comments
		})
		res.send(htmlStr);
	})
})

app.get('/post', function(req, res) {
	res.sendFile(__dirname + '/views/post.html')
})

app.get('/comment', function(req, res) {
	let comment = req.query;
	comment.dateTime = '2019-03-14 10:10:10';
	comments.unshift(comment);

	// 此处估计可以更加简化点
	// res.statusCode = 302
	// res.setHeader('Location', '/')
	// res.send()
	res.status(302).setHeader('Location','/')
	res.send();
})

// 错误的总处理，发送4040.html
app.use(function (req, res, next) {
  res.sendFile(__dirname + '/views/404.html')
})

app.listen(port, function(){
	console.log("http://localhost:3000");
})

