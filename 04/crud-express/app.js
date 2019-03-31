/**
	app.js 入口模块
	职责：
		创建服务
		做一些服务相关配置
			模板引擎
			body-parser 解析表单 post 请求体
			提供静态资源服务
		挂载路由
		监听端口启动服务
	*/

const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// 开放静态资源
app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

// 配置 art-template 模板引擎
app.engine('html', require('express-art-template'))

// 配置 body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 配置模板引擎和body-parser一定要在app.use(router) 挂载路由之前
// 把路由容器挂载到 app 服务中
app.use(router)

/*
Express 对于没有设定的请求路径，默认会返回 Can not get xxx
如果想要定制一个 404 页面，就需要通过中间件来配置
*/
/*app.use( (req, res) => {
	
})*/

app.listen(port, () => {
  console.log("server running at http://127.0.0.1:3000 ...")
})