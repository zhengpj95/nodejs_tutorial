const redis = require('redis');
const client = redis.createClient(6379, '192.168.120.128', {});

client.on('error', (error) => {
	console.log(`connect error...`, error);
	client.quit();
});

client.on('connect', () => {
	console.log('redis connect...');
});

client.on('ready', (err) => {
	if (err) {
		console.log(`ready.error --- `, err);
		return;
	}
	console.log(`redis ready...`);
})
client.set('key1', 'value1', redis.print)
client.get('key1', redis.print)

// client.quit(redis.print);