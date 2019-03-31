/**
	router.js 路由模块
	职责：
		处理路由
		根据不同的请求方法+请求路径设置具体的请求函数
	
	模块职责要单一，不要乱写
	我们划分模块的目的就是为了增强项目代码的可维护性，提升开发效率
 */

const fs = require('fs')
const Student = require('./student')

// Express 提供了一种更好的方法，专门用来包装路由的
// 1. 创建一个路由容器
// 2. 把路由都挂载到 router 中
// 3. 把 router 导出
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send(`
		<h1>home page...</h1>
		<h4><a href="http://127.0.0.1:3000/students">Go to student page</a></h4>
		`)
})

// 方法一：原来的方法，直接在此函数中操作
// router.get('/students', (req, res) => {
// 	/*
// 	第二个参数 utf8 就是把读取到的文件直接按照 utf8 编码转码
// 	还可以使用data.toString()
// 	*/
// 	fs.readFile('./db.json', 'utf8', (err, data) => {
// 		if (err) {
// 			return res.status(500).send('Server error.')
// 		}
// 		/* 
// 		文件中读到的一定是字符串，需进行转换
// 		JSON.parse(data).students ==> 取出这个json对象中的students对象
// 		*/
// 		res.render('index.html', {
// 			students: JSON.parse(data).students
// 		})
// 	})
// })

// 方法二：封装了student.js，调用其中的find()方法，有回调函数
router.get('/students', (req, res) => {
  Student.find(function(err, students) {
    if (err) {
      return res.status(500).send('Server error.')
    }
    res.render('index.html', {
      students: students
    })
  })
})


// 跳转到添加学生页面
router.get('/students/new', (req, res) => {
  res.render('new.html')
})

// POST 方式获取数据
router.post('/students/new', (req, res) => {
  // 1. 获取表单数据
  // 2. 处理 ==> 将数据保存到 db.json 文件中用以持久化
  // 3. 发送响应
  // 有回调函数，有错误，就发出错误信号；否则跳转到 /students 页面展示数据
  Student.save(req.body, function(err) {
    if (err) {
      return res.status(500).send('Server error.')
    }
    res.redirect('/students')
  })
})

router.get('/students/edit', (req, res) => {
  Student.findStudentById(parseInt(req.query.id), function(err, student) {
    if (err) {
      return res.status(500).send('Server error.')
    }
    res.render('edit.html', {
      student: student
    })
  })
})

router.post('/students/edit', (req, res) => {
  // 1. 获取表单数据
  // 2. 更新
  // 3. 发送响应
  Student.updateStudentById(req.body, function(err) {
    if (err) {
      return res.status(500).send('Server error.')
    }
    res.redirect('/students')
  })
})

router.get('/students/delete', (req, res) => {
  Student.deleteStudentById(parseInt(req.query.id), function(err) {
    if (err) {
      return res.status(500).send('Server error.')
    }
    res.redirect('/students')
  })
})


// 导出接口
module.exports = router