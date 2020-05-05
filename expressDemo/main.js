const express = require('express');
const path = require('path');
const router = require('./router');
const app = express();
const port = 3000;

// 开放静态资源，可以通过 public/resourceName 访问对应的资源。
// 第一个参数自定义，第二个参数就是我们想要对外开放的资源
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(router);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
})
