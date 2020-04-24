/**
 * 全局函数
 */
class GlobalFunc {
	callback(error, value) {
		if (error) {
			console.log(`error --- `, error);
			return;
		}
		console.log(value);
	}
}

module.exports = new GlobalFunc();