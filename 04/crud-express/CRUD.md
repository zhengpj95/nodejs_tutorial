
# Express - CRUD案例

## 1. 案例功能

- 功能模块化
    + 功能单一
    + app.js
    + router.js
    + student.js
- 数据持久化
    + 存放在 json 文件中
- 读取 json 文件
    + fs.readFile()
    + 读取出来为字符串
    + 转换为对象 JSON.parse() 
- 写入 json 文件
    + 转换成字符串 JSON.stringify({data: data})
    + fs.writeFile()
- 添加学生
    + POST 提交
    + push 到数组里
- 编辑学生
    + 根据 id 获取当前记录信息
    + 渲染到 edit.html 中
    + POST 提交
    + 更新数组中对应的数据
- 删除学生
    + findIndex() 找到要删除的id
    + splice(deleteId, 1) 从deleteId开始删除一个元素


## 2. 回调函数

如果需要获取一个函数中异步操作的结果，则必须通过回调函数来获取
```javascript
function fn( callback ){
  // callback相当于
  // var callback = function (data) { console.log(data) }
  console.log('first ......')   // 首先输出
  setTimeout( function () {
    var data = 'hello'
    callback(data)              // 最后调用返回
  }, 1000)
  console.log("last ......")    // 然后输出
}

fn(function (data){
  console.log(data)             // 最后输出
})
```

## 3. 提取路由模块

创建路由容器 ==> (router.js)
```javascript
const express = require('express')
const router = express.Router()
```

把路由挂载到 router 中 ==> (router.js)
```javascript
router.get('/', (req, res) => {
    res.send('...')
})
router.get('...', (req, res) => {
  // ...
})
router.post('...', (req, res) => {
  // ...
})
```

把 router 导出 ==> (router.js)
```javascript
module.exports = router
```

把路由容器挂载到 app 服务中 ==> (app.js)
```javascript
const router = require('./router')
app.use(router)
```

## 4. 提取操作数据的 API 文件模块

```javascript
/*
    student.js
    数据操作文件模块
    职责：操作文件中的数据，只处理数据，不关心业务
*/

// 获取所有学生列表
exports.find = function () {
  // ...
}
// 根据id获取学生
exports.findStudentById = function () {
  // ...
}
// 添加保存学生
exports.save = function () {
  // ...
}
// 更新学生
exports.updateStudentById = function () {
  // ...
}
// 删除学生
exports.deleteStudentById = function () {
  // ...
}
```

使用：
```javascript
// 在要使用此模块的文件中导入
const Student = require('./student')
// 调用
Student.funcitionName
```

## 5. 补充

### find()

返回所查找元素

### findIndex()

返回所查找元素的下标

### splice()

删除或者添加元素

### JSON.parse(data)

转换成对象

### JSON.stringify({data: data})

转换成字符串



