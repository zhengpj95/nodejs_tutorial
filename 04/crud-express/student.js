/*
	student.js
	数据操作文件模块
	职责：操作文件中的数据，只处理数据，不关心业务
*/

const fs = require('fs')
const dbPath = './db.json'

/* 获取所有学生列表
	callback 中的参数
		第一个参数是 err
			成功 null
			错误 错误对象
		第二个参数是 结果
			成功 数组
			错误 undefined
*/
exports.find = function(callback) {
  // callback 是回调函数
  // var callback = function (err, students){ ... }
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      return callback(err)
    }
    callback(null, JSON.parse(data).students)
  })
}

// 根据id查询学生
exports.findStudentById = function(id, callback) {
  fs.readFile(dbPath, 'utf8', function(err, data) {
    if (err) {
      return callback(err)
    }
    var stu = JSON.parse(data).students.find(function(item) {
      return item.id === parseInt(id)
    })
    callback(null, stu)
  })
}

// 添加学生
exports.save = function(student, callback) {
  fs.readFile(dbPath, 'utf8', function(err, data) {
    // 错误就返回
    if (err) {
      return callback(err)
    }
    // 获取文件中的数据，转换成json对象
    var students = JSON.parse(data).students
    // 设置 id
    student.id = students[students.length - 1].id + 1
    // push到数组中
    students.push(student)
    // 转成字符串
    var fileData = JSON.stringify({
      students: students
    })
    // 保存到文件中
    fs.writeFile(dbPath, fileData, function(err) {
      if (err) {
        // 有错误就把错误对象传递回
        return callback(err)
      }
      // 成功就没有错误，所以错误对象是 null
      callback(null)
    })
  })
}

// 更新学生
exports.updateStudentById = function(student, callback) {
  fs.readFile(dbPath, 'utf8', function(err, data) {
    if (err) {
      return callback(err)
    }
    var students = JSON.parse(data).students
    // 把 id 统一转换成数字类型
    student.id = parseInt(student.id)

    var stu = students.find(function(item) {
      return item.id === student.id
    })
    for (var key in student) {
      stu[key] = student[key]
    }

    // 转成字符串
    var fileData = JSON.stringify({
      students: students
    })
    // 保存到文件中
    fs.writeFile(dbPath, fileData, function(err) {
      if (err) {
        // 有错误就把错误对象传递回
        return callback(err)
      }
      // 成功就没有错误，所以错误对象是 null
      callback(null)
    })
  })
}

// 删除学生
exports.deleteStudentById = function(id, callback) {
  fs.readFile(dbPath, 'utf8', function(err, data) {
    if (err) {
      return callback(err)
    }
    var students = JSON.parse(data).students

    // findIndex 根据条件查询元素的下标
    var deleteId = students.findIndex(function(item) {
      return item.id === id
    })
    // 根据下标删除数据，删除一个
    students.splice(deleteId, 1)
    // 转成字符串
    var fileData = JSON.stringify({
      students: students
    })
    // 保存到文件中
    fs.writeFile(dbPath, fileData, function(err) {
      if (err) {
        // 有错误就把错误对象传递回
        return callback(err)
      }
      // 成功就没有错误，所以错误对象是 null
      callback(null)
    })
  })
}