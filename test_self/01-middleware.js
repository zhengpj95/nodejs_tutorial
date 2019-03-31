
const express = require("express")
const app = express()
const port = 4000

// 中间件，开放静态资源
app.use('/public/',express.static(__dirname + '/public/'));

var myLogger = function (req, res, next) {
  console.log('LOGGED' + req.url)
  next()  // 交出控制权
}

app.use(myLogger)

app.get('/', (req, res, next) => {
	res.send('Hello World!')
})

// 中间件测试
app.get('/user', (req, res, next) => {
	console.log(req.url)
	next()  // 若没有结束请求-响应循环体，就必须调用next()，让下一个中间件处理
})
app.get('/user', (req, res, next) => {
	console.log("middleware")
	res.send('Hello User Page!')
})


// 中间件，错误统一处理
app.use( (req, res, next) => {
	res.send("404...======>" + req.url)
})

app.listen(port, () => {
	console.log(`server running at http://localhost:${port}`)
})

