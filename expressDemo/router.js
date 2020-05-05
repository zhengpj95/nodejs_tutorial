const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('hello world');
})

router.get('/help', (req, res) => {
	res.send('help page');
})

// 使用正则表达式
router.get('/ab*/', (req, res) => {
	res.send(req.url)
})

// 返回某页面和数据
router.get('/test', (req, res) => {
	res.render("test1.html", {
		mydata: 'mydata...'
	})
})

router.route('/users')
	.all((req, res, next) => {
		console.log(111);
		next();
	})
	.get((req, res, next) => {
		console.log(222)
		res.jsonp({ user: 'tj' })
	})
	.put((req, res, next) => {
		console.log(333)
		req.user.name = req.params.name
		res.json(req.user)
	})
	.post((req, res, next) => {
		console.log(444)
		next(new Error('not implemented'))
	})
	.delete((req, res, next) => {
		console.log(555)
		next(new Error('not implemented'))
	});

module.exports = router;