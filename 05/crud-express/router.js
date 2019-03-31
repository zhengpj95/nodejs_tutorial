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
		<h4><a href="http://localhost:3000/students">Go to student page</a></h4>
		`)
})

/* 查询所有数据展示 */
router.get('/students', (req, res, next) => {
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

// POST 方式获取数据，添加到mongodb数据库中
router.post('/students/new', (req, res) => {
  new Student(req.body).save( function (err, ret) {
    if (err) {
      return res.status(500).send('Server error.')
    }
    res.redirect('/students')
  })
})

// 根据id查询对应数据，然后渲染edit.html
router.get('/students/edit', (req, res) => {
  var id = req.query.id.replace(/"/g, '')
  Student.findById(id, function(err, student) {
    if (err) {
      return res.status(500).send('Server error.')
    }
    res.render('edit.html', {
      student: student
    })
  })
})

// 更新数据
router.post('/students/edit', (req, res) => {
  var id = req.body.id.replace(/"/g, '')
  Student.findByIdAndUpdate(id, req.body, function(err) {
    if (err) {
      return res.status(500).send('Server error.')
    }
    res.redirect('/students')
  })
})
// 删除数据
router.get('/students/delete', (req, res) => {
  var id = req.query.id.replace(/"/g, '')
  Student.findByIdAndDelete(id, function(err) {
    if (err) {
      return res.status(500).send('Server error.')
    }
    res.redirect('/students')
  })
})

// 导出接口
module.exports = router
