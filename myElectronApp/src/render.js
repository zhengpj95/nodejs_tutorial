(function () {
	const $ = require('jquery');
	const redis = require('redis');
	let redisClient = null;

	//标识是redis，mongodb
	const ConnectType = {
		Redis: 1,
		Mongodb: 2
	}
	let currentType = ConnectType.Redis;

	let ipEle = $('#ipTxt');
	let portEle = $('#portTxt');
	let operationEle = $('#operationTxt');
	let resultEle = $('#resultTxt');

	let btnConnect = $('.btnConnect');
	let btnRedis = $('.btnRedis');
	let btnMongodb = $('.btnMongodb');
	let btnExec = $('.btnExec');

	//选择redis
	btnRedis.click(function () {
		btnMongodb.removeClass('active')
		if (btnRedis.hasClass('active')) {
			return;
		}
		currentType = ConnectType.Redis;
		btnRedis.addClass('active');
		clearText();
	})

	// 点击连接
	btnConnect.click(function () {
		if (currentType === ConnectType.Redis) {
			connectRedis();
		} else if (currentType === ConnectType.Mongodb) {
			connectMongodb();
		}
	})

	//点击操作
	btnExec.click(function () {
		let val = operationEle.val();
		if (!val) {
			return;
		}
		console.log(val)
	})

	function connectRedis() {
		let ip = ipEle.val();
		let port = portEle.val();
		if (!ip || !port || redisClient) {
			return;
		}
		redisClient = redis.createClient(port, ip, {});
		console.log('连接---', ip, port);

		redisClient.on('connect', () => {
			resultEle.val('redis connect...\n')
		});
		redisClient.on('ready', (err) => {
			if (err) {
				console.log(`ready.error --- `, err);
				return;
			}
			let value = resultEle.val();
			resultEle.val(value + 'redis ready...\n')
			windowNotification(ConnectType.Redis, 1);
		});
		redisClient.on('error', (error) => {
			redisClient.quit();
			resultEle.val('connect error...' + error);
			windowNotification(ConnectType.Redis, 0);
		});
	}

	function closeRedis() {
		if (redisClient) {
			redisClient.end(true);
			redisClient.quit(myCallback);
			redisClient = null;
		}
	}

	//=========================================================

	//选择mongodb
	btnMongodb.click(function () {
		btnRedis.removeClass('active')
		if (btnMongodb.hasClass('active')) {
			return;
		}
		currentType = ConnectType.Mongodb;
		btnMongodb.addClass('active');
		clearText();
		closeRedis();
	})


	function connectMongodb() {

	}

	//=========================================================

	function clearText() {
		operationEle.val('');
		resultEle.val('');
	}

	function myCallback(err, value) {
		if (err) {
			return;
		}
		resultEle.val(value + '\n');
	}

	function windowNotification(type, state) {
		let typeMsg = type === ConnectType.Redis ? 'redis' : 'mongodb';
		let stateMsg = state === 1 ? '成功' : '失败';
		let option = {
			title: '通知',
			body: `${typeMsg} 连接${stateMsg}`
		}
		new window.Notification(option.title, option);
	}
})();