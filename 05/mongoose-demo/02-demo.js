
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 1. 连接数据库
mongoose.connect('mongodb://localhost/mytest')

/*
2.设计集合结构（表结构）
字段名称就是表结构中的属性名称
约束的目的就是为了保证数据的完整性，不要有脏数据
*/

var userSchema = new Schema({
	username: {
		type: String,
		require: true  // not null
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

/*
3.将文档结构发布为模型
	mongoose.model 方法就是用来将一个架构发布为 model
	第一个参数： 传入一个大写名词单数字符串用来表示你的数据库名称
							mongoose 会自动将大写名称的字符串生成 小写复数 的集合名称
							User 最终会变成 users 集合名称
	第二个参数：	架构 Schema
	返回值：模型构造函数
*/
var User = mongoose.model('Student', userSchema)

// 4. 当我们有了模型构造函数之后，就可以使用这个构造函数对 
// users 集合中的数据为所欲为了


/* ==== 新增 ==== */
var admin = new User({
	username: 'zs10',
	gender: 0,
	age: 22,
	hobbies: "吃饭、睡觉、敲代码、看电影"
})

admin.save( (err, ret) => {
	if (err) {
		console.log("save error")
	} else {
		console.log("save success")
		console.log(ret)
	}
})


/* ==== 查询所有 ==== */
/*User.find( (err, ret) => {
	if (err) {
		console.log("find error")
	} else {
		console.log(ret)
	}
})*/


/* ==== 条件查询 ==== */
/*User.find({username: 'root'} ,(err, ret) => {
	if (err) {
		console.log("find error")
	} else {
		console.log(ret)
	}
})*/
// 查询一条，若不满足查询条件，则返回第一条
/*User.findOne({
	username: 'root',
	password: '123456'
} ,(err, ret) => {
	if (err) {
		console.log("find error")
	} else {
		console.log(ret)
	}
})*/

/* ==== 删除数据 ====*/
/*User.deleteOne({
	username: 'root'
}, (err, ret) => {
	if (err) {
		console.log("find error")
	} else {
		console.log(ret)
	}
})*/
/*User.deleteMany({
	username: 'zs'
}, (err, ret) => {
	if (err) {
		console.log("find error")
	} else {
		console.log(ret)
	}
})*/

/* ==== 更新数据 ====*/
/*User.findByIdAndUpdate('5c9355b178df350c685b70ac', {
	password: '123123'
}, (err, ret) => {
	if (err) {
		console.log("update error")
	} else {
		console.log(ret)
	}
})*/





