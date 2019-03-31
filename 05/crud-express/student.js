
const mongoose = require('mongoose')

// DeprecationWarning: collection.findAndModify is deprecated. 
// Use findOneAndUpdate, findOneAndReplace or findOneAndDelete instead.
// 设置这个，促使使用findOneAndUpdate，而不转换成findAndModify方法使用
mongoose.set('useFindAndModify', false)

// 新版中 { useNewUrlParser: true } 不可缺少
mongoose.connect('mongodb://localhost:27017/mytest', { useNewUrlParser: true })

const Schema = mongoose.Schema

const studentSchema = new Schema({
	username: {
		type: String,
		require: true
	},
	gender: {
		type: Number,
		enum: [0,1],
		default: 0
	},
	age: {
		type: Number,
	},
	hobbies: {
		type: String
	}
})

// 直接导出模型构造函数
module.exports = mongoose.model('Students', studentSchema)
