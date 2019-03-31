
const express = require("express")
const bodyParser = require('body-parser')
const app = express()
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

/* 配置使用 art-template 模板引擎
第一个参数表示，当渲染以 .art 结尾的文件的时候，使用 art-template 模板引擎
express-art-template是专门用来再 Express 中把 art-template 整合到 Express 中
也必须安装
*/
/*
Express 为 Response 相应对象提供了一个方法 render
render方法默认是不可以使用，如果配置了模板引擎就可以使用了

res.render('html模板名', {模板数据})
第一个参数不能写路径，默认会去项目中的 views 目录查找改模板文件
Express有个约定：开发人员把所有的视图文件都放到 views 目录中
*/

// app.engine('art', require('express-art-template'))
app.engine('html', require('express-art-template'))

app.use('/public/', express.static('./public/'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
	res.render('home.html', {
		comments: comments
	})
})

app.get('/post', function (req, res) {
	res.render('post.html')
})

// 以 GET 方式请求
/*
app.get('/comment', function (req, res) {
	// req.query 获取 GET 提交的数据
	let comment = req.query // 获取表单GET提交的数据
	comment.dateTime = '2019-03-15 10:10:10'
	comments.unshift(comment)
	// 重定向
	res.redirect('/')
})
*/

// 以 POST 请求 /post的时候，执行指定的处理函数
// 可以利用不同的请求方式让一个请求路径使用多次
app.post('/post', (req, res) => {
	// console.log(req.body)
	// 1. 获取表单 POST 请求体数据
	// 2. 处理
	// 3. 发送响应
	let comment = req.body // 使用了body-parser插件，获取表单POST提交的数据
	comment.dateTime = '2019-03-15 10:10:10'
	comments.unshift(comment)
	// 重定向
	res.redirect('/')
})


app.listen(port, function () {
	console.log("server running...")
})
