
# NODE.JS

## 1. node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

- Node.js不是JavaScript应用，不是语言，不是框架，不是服务器。
- 而是JavaScript运行时环境。
- 就像浏览器一样解析运行JavaScript语言，因为Node.js是建立在Chrome的V8引擎上的
- 特点
  - 事件驱动（event-driven）
  - 非阻塞I/O模型（non-blocking I/O model）
  - 每个函数都是异步的

> node --version  // 查看版本号
>
> node server.js  // 开启服务器

## 2. npm

node package manager

> npm --version
>
> npm install --global npm  // 自己升级自己
>
> npm init   ||    npm init -y  // 快速生成package.json
>
> npm install XXX --save  //把下载的包在package.json中创建依赖项
>
> npm uninstall XXX --save  // 删除的同时，把依赖项删除
>
> npm help   ||     npm 命令 --help
>
> npm config list

## 3. art-template

### 3.1 简介

模板引擎

> npm install --save art-template
>
> npm i -S art-template

### 3.2 子模版

把其他模块页面包含在主要页面中，以减少页面冗余
> {{ include './header.html' }}
> {{ include './footer.html' }}

### 3.3 模板继承

父模板：

```html
// template.html
// block 表示模板，'content'表示此模板的标识
{{ block 'content' }}
  // body
  // 此处内容可以被子模版替换
{{ /block }}

{{ block 'style'}}
{{ /block }}
```

继承父模板：

```html
// 首先说明继承
{{ extend './template.html'}}

// 再使用父模板中的内容
{{ block 'content'}}
  // 此处内容会替换父模板中的对应部分
  // 若不写则不会替换
{{ /block }}

```

模板实例：

```html
<!--template.html-->
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>{{ block 'title' }}My Site{{ /block }}</title>

    {{block 'head'}}
      <link rel="stylesheet" href="main.css">
      <!-- CSS -->
    {{/block}}
</head>
<body>
    {{ block 'content' }}
        <!-- 主体内容 -->
    {{ /block }}

    {{ block 'script' }}
      <!-- JavaScript -->
    {{ /block }}
</body>
</html>

<!-- 继承 tempalte.html 的页面 -->
{{extend './template.html'}}

{{ block 'title' }}
  {{title}}
{{ /block }}

{{block 'head'}}
    <link rel="stylesheet" href="custom.css">
{{/block}}

{{block 'content'}}
  <p>This is just an awesome page.</p>
{{/block}}

{{ block 'script' }}
  <!-- javascript -->
{{ /block }}
```

## 4. Express

Fast, unopinionated, minimalist web framework for Node.js.

安装：

> npm install -save express

使用：

```javascript
const express = require('express')
const app = express()
const port = 3000

// 公开指定的目录
app.use('/public/', express.static('./public/'))
// 当请求 / 时，发送响应的内容。使用了箭头函数
app.get('/', (req, res) => {
    res.send('')
})
// 监听端口号
app.listen(port, (req, res) => {
    console.log('server running...')
})
```

### 4.1 Express 中配置 art-template

安装：

> npm install art-template --save
>
> npm install express-art-template --save
>
> 或者
>
> npm i -S art-template express-art-template

配置：

```java
app.engine('html', require('express-art-template'))
```

使用：

```javascript
app.get('/', (req, res) => {
    res.render('xxx.html')
    // res.render('xxx.html', {xx:'xx', ...})
})
```

### 4.2 Express 获取表单 POST 请求体数据

借助第三方包`body-parser`

安装：

> npm install body-parser --save

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

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})
```

使用：

> req.body   // 获取POST提交的数据

```javascript
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})
```

### 4.3 Express 获取表单 GET 请求体数据

```javascript
req.query // 获取GET提交的数据
```

## 5. MongoDB

非关系型数据库

## 补充

### nodemon

Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development.

nodemon, reload, automatically.

第三方工具，会监视文件的变化，当文件发生变化时，自动重启服务器

> npm install -g nodemon  // 安装到全局
>
> nodemon server.js     // 开启服务器，server.js是入口文件，文件名称不重要

### nvm

管理Node.Js的版本号
> nvm ls

### nrm

查看下载源。
> nrm ls
