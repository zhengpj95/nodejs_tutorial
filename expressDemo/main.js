const express = require('express');
const path = require('path');
const router = require('./router');
const app = express();
const port = 3000;

// 开放静态资源，可以通过 public/resourceName 访问对应的资源。
// 第一个参数自定义，第二个参数就是我们想要对外开放的资源
app.use('/public', express.static(path.join(__dirname, 'public')));

app.engine('html', require('express-art-template'));

app.set('view options', {
	debug: process.env.NODE_ENV !== 'production'
});

app.use(router);

// 404的统一处理
app.use(function (req, res) {
	res.status(404).render("404.html")
})


app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
})
