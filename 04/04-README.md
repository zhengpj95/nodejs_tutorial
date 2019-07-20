
# Express

## 安装

> npm install express --save
> 或者
> npm i -S express
> npm i express -S
> 最新版的node不需要使用--save了

## 一个小Demo

```javascript
const express = require("express")
const app = express()
const port = 3000

app.get('/', function(req, res){
  res.send('Hello World')
})
app.listen(port, function(){
  console.log("http://localhost:3000");
})
```

## 基本路由

路由器

- 请求方法
- 请求路径
- 请求处理函数

get:

```javascript
// 当以 GET 方法请求 / 的时候，执行对应的处理函数
app.get('/', (req, res) => {
  res.send('...')
})
// ......
```

post:

```javascript
// 当以 POST 方法请求 / 的时候，执行对应的处理函数
app.post('/', (req, res) => {
  res.send('...')
})
// ......
```

## 静态资源服务

```javascript
// 当以 /public/ 开头的时候，去 ./public/ 目录中找到对应的资源
// 左边的public是访问时的url路径，右边的public是文件路径。最好用public
// 127.0.0.1:port/public/...
app.use('/public/', express.static('./public/'))

// 当省略第一个参数时，可以通过省略 /public 访问其目录下的资源
// 127.0.0.1:port/...
app.use(express.static('./public/'))

```

## 配置使用`art-template`模板引擎

安装：

```shell
    npm install art-template --save
    npm install express-art-template --save
```

配置：

```javascript
    // 以 .html 结尾的文件  
    app.engine('html', require('express-art-template'))
```

使用：

```javascript
    app.get('/', function(req, res) {
      // 以 .html 结尾的文件
      res.render('xxx.html', {
          title: 'hello world'
      })
    })
```

如果希望修改默认的 `views` 视图渲染存储目录，可以：

```javascript
    // views 是固定默认的
    app.set('views', 目录路径)
```

## 获取表单 POST 请求体数据

借助第三方包 `body-parser`

安装：
> npm install --save body-parser

配置：

```javascript
var express = require('express')
// 引包
var bodyParser = require('body-parser')

var app = express()

// 配置body-parser
// 只要加入这个配置，则在 req 请求对象上会多出一个属性 body
// 也就是说你就可以直接通过 req.body 来获取表单 POST 请求体数据
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
```

使用

> req.body   // 获取POST提交的数据

```javascript
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})
```

## 获取表单 GET 请求体数据

Express 内置了一个API，可以直接通过 `req.query`来获取

> req.query   // 获取GET提交的数据

## Express - 学生CRUD案例

### 起步

- 初始化
- 模板处理

### 路由设计

| 请求方法  |   请求路径       | get 参数  |  post 参数                 | 备注             |
| :------- | ---------------- | -------- | -------------------------- | :-------------- |
| GET      | /students        |          |                            | 渲染首页，展示学生数据 |
| GET      | /students/new    |          |                            | 渲染添加学生页面 |
| POST     | /students/new    |          | name, age, gender, hobbies | 处理添加学生请求 |
| GET      | /students/edit   | id       |                            | 渲染编辑页面     |
| POST     | /students/edit   |          | id, age, gender, hobbies   | 处理编辑学生请求 |
| GET      | /students/delete | id       |                            | 处理删除数据     |

### 提取路由模块

创建路由容器 ==> (router.js)

```javascript
const express = require('express')
const router = express.Router()
```

把路由挂载到 router 中 ==> (router.js)

```javascript
router.get('/', (req, res) => {
  res.send('...')
})
router.get('...', (req, res) => {
  // ...
})
router.post('...', (req, res) => {
  // ...
})
```

把 router 导出 ==> (router.js)

```javascript
module.exports = router
```

把路由容器挂载到 app 服务中 ==> (app.js)

```javascript
const router = require('./router')
app.use(router)
```

### 设计操作数据的  API 文件模块

```javascript
/*
 * student.js
 * 数据操作文件模块
 * 职责：操作文件中的数据，只处理数据，不关心业务
*/

// 获取所有学生列表
exports.find = function ([args, function]) {
  // ...
}
// 根据id获取学生
exports.findStudentById = function ([args, function]) {
  // ...
}
// 添加保存学生
exports.save = function ([args, function]) {
  // ...
}
// 更新学生
exports.updateStudentById = function ([args, function]) {
  // ...
}
// 删除学生
exports.deleteStudentById = function ([args, function]) {
  // ...
}
```

使用：

```javascript
// 在要使用此模块的文件中导入
const Student = require('./student')
// 调用
Student.funcitionName([args, function])
```

## 补充

### 自动重启

修改完代码保存后，自动重启服务器

第三方工具 `nodemon`
> npm install --global nodemon // 安装在全局

使用
> node app.js
> // 换成
> nodemon app.js

只要通过`nodemon app.js` 启动的服务，则它会监视文件的变化，
当文件发生变化时，自动重启服务器

### 回调函数

如果需要获取一个函数中异步操作的结果，则必须通过回调函数来获取

异步操作的：（往往异步 API 都伴随一个回调函数）

- setTimeout
- readFile
- writeFile
- ajax

```javascript
function fn( callback ){
  // callback相当于
  // var callback = function (data) { console.log(data) }

  setTimeout( function () {
    var data = 'hello'
    callback(data)
  }, 1000)
}

fn(function (data){
  console.log(data)
})
```
