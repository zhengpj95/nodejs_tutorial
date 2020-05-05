# Express

## 1. 安装

> npm install express

## 2. 引入

> const express = require('express');
> const app = express();

## 3. 基本使用

app.get() 方法的第一个参数可以使用正则表达式

```javascript
// 在地址栏输入 `ip:port/`
app.get('/', (req, res) => {
    res.send('hello express');
})

// 在地址栏输入 `ip:port/help`
app.get('/help', (req, res) => {
    res.send('help page');
})
```

## 4. 监听端口

这样我们就能在浏览器输入 `localhost:${port}` 或 `localhost:${port}/`，就能看到 `hello express`。

再输入 `localhost:${port}/help`，就能看到 `help page`。

```javascript
app.listen(port, [host,] ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})
```

## 5. 开放静态资源

However, the path that you provide to the express.static function is relative to the directory from where you launch your node process. If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve.

最好使用绝对路劲形式，因为相对路径是相对于node的启动路径。

> app.use('/public', express.static(path.join(__dirname, 'public')));

## 6. 使用Router

首先创建 `router.js` 文件：

```javascript
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello world');
})

router.get('/help', (req, res) => {
    res.send('help page');
})

router.get('/ab*/', (req, res) => {
    res.send(req.url)
})

module.exports = router;
```

然后在我们的入口文件中导入 `router.js` 文件。

```javascript
// 首先引入路由文件
const router = require('./router');
// 在入口文件中使用
app.use(router);
```
