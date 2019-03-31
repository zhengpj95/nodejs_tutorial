
const express = require("express");
const app = express()
const port = 3000


/*
app.get('/', function (req, res) {
	res.send('Hello Express!!!')
})
app.listen(port,function(){
	console.log("app running at http://127.0.0.1:3000")
})
*/

// 公开指定目录
app.use('/public/', express.static('./public/'))

app.get('/', (req, res) => {
	res.send('Hello world...')
})

app.get('/about', (req, res) => {
	// res.send('关于我的页面，about page ...')
	res.send(`
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>关于我</title>
		</head>
		<body>
			<h1>Hello Express.</h1>
			<h1>Hello Express.</h1>
			<h1>Hello Express.</h1>
		</body>
		</html>
	`)
})

app.listen(port, () => {
	console.log("app running at http://127.0.0.1:3000")
})
