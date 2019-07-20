
# Nodejs (2019-03-21)

## MongoDB

### 关系型与非关系型数据库

- 表就是关系，表与表之间存在关系
- 非关系型数据库非常的灵活
- 有的非关系型数据库就是 key-value 对
- MongoDB就是长得最像关系型数据库的非关系型数据库
- MongoDB不需要设计表结构

### 启动和关闭数据库

打开：

```shell
 # mongodb 默认使用执行 mongod 命令所处盘符根目录下的 /data/db 作为自己的数据存储目录
 # 所以第一次指定该命令之前先创建 /data/db
```

如果想要修改默认的数据存储目录，可以：
> mongod --dbpath=数据存储目录路径

关闭：
> Ctrl + C
> 直接右上角关闭

### 连接数据库

> mongo

### 退出

> exit

### 基本命令

- `show dbs`
  - 查看显示所有数据库
- `db`
  - 查看当前操作额数据库
- `use 数据库名称`
  - 切换到指定的数据库
  - 如果没有则会创建，但不会马上查看得到，需要向其中插入数据后才能查看到
- 插入数据
  - `db.表名.insertOne({"xxx":"xxx", ...})`
- 查看数据表
  - `show collections`
- 查看数据
  - `db.表名.find()`

### MongoDB基本概念

- 可以有多个数据库
- 一个数据库中可以有多个集合（表）
- 一个集合中可以有多个文档（表记录）
- 文档结构很灵活，没有任何限制
- MongoDB非常灵活，不需要像MySQL一样先创建数据库、表、设计表结构
  - 在这里只需要：当你需要插入数据的时候，只需要指定往那个数据库的哪个集合操作就可以了
  - 一切都有 MongoDB 来帮你自动完成建库建表这件事儿

### 在 Node 中操作 MongoDB 数据库

#### 使用官方的 mongodb 包来操作

这个包确实很强大，但是比较原始，比较麻烦，所以不适用它

#### 使用第三方 mongoose 来操作

真正在公司进行开发的，使用moogoose
它是基于 MongoDB 官方的 mongodb 包进一步做了封装
可以提高开发效率，让操作 MongoDB 数据库更加方便

```javascript
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
    password: {
        : String,
        require: true
    },
    email: {
        type: String
    }
})

/*
3.将文档结构发布为模型
    mongoose.model 方法就是用来将一个架构发布为 model
    第一个参数： 传入一个大写名词单数字符串用来表示你的数据库名称
                mongoose 会自动将大写名称的字符串生成 小写复数 的集合名称
                User 最终会变成 users 集合名称
    第二个参数：架构 Schema
    返回值：模型构造函数
*/
var User = mongoose.model('User', userSchema)

// 4. 当我们有了模型构造函数之后，就可以使用这个构造函数对
// users 集合中的数据为所欲为了
```

插入数据：

```javascript
var admin = new User({
    username: 'admin',
    password: '123456',
    email: 'admin@qq.com'
})
// 保存
admin.save( (err, ret) => {
    if (err) {
        console.log("save error")
    } else {
        console.log("save success")
        console.log(ret)
    }
})
```

查询所有：

```javascript
User.find( (err, ret) => {
    if (err) {
        console.log("find error")
    } else {
        console.log(ret)
    }
})
```

条件查询所有：

```javascript
User.find({username: 'root'} ,(err, ret) => {
    if (err) {
        console.log("find error")
    } else {
        console.log(ret)
    }
})
```

条件查询单个：

```javascript
// 查询一条，若不满足查询条件，则返回第一条
User.findOne({
    username: 'root',
    password: '123456'
} ,(err, ret) => {
    if (err) {
        console.log("find error")
    } else {
        console.log(ret)
    }
})
```

删除单个：

```javascript
// 删除第一个
User.deleteOne({
    username: 'zs'
}, (err, ret) => {
    if (err) {
        console.log("find error")
    } else {
        console.log(ret)
    }
})
```

删除所有：

```javascript
User.deleteMany({
    username: 'zs'
}, (err, ret) => {
    if (err) {
        console.log("find error")
    } else {
        console.log(ret)
    }
})
```

更新数据：

```javascript
// 设置这个，促使使用findOneAndUpdate等函数，而不转换成findAndModify方法使用
// mongoose.set('useFindAndModify', false)

User.findByIdAndUpdate('5c9355b178df350c685b70ac', {
    password: '123123'
}, (err, ret) => {
    if (err) {
        console.log("update error")
    } else {
        console.log(ret)
    }
})
```

## Nodejs操作MySQL数据库

安装：

> npm install mysql

使用：

```javascript
var mysql = require('mysql');
// 创建连接
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});

// 启动连接
connection.connect();

// 操作
// 所有的增删改查都在 query 中
connection.query('SELECT * FROM `user`', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

// 关闭连接
connection.end();
```

## Promise

promise 不是node的，是JavaScript的，为了处理回调地狱（callback hell）的问题，在 ECMAScript 6 中新增加的一个 API，转么处理回调地狱问题。

```javascript
/* Promise 是一个构造函数
 * Promise 容器一旦创建，就开始执行里面的代码
 * 创建 Promise 容器
 */
/*
 * Promise 容器中存放了一个异步任务，开始为 Pending 状态，
 * 可以转变为 Resolved 或 Rejected 状态，只能转变为其中之一。
 * Promise 本身不是异步的，但是内部往往都是封装一个异步任务
 */
var p1 = new Promise( （resolve, reject) => {
    fs.readFile('./data/a.txt', 'utf8', (err, data) => {
        if (err) {
            // 把容器的 Pending 状态变为 Rejected
            // 调用 reject 就相当于调用了 then 方法的第二个参数函数
            reject(err)
        } else {
            // 把容器的 Pending 状态改为成功 Resolved
            // 调用 reject 就相当于调用了 then 方法传递的第一个 function
            resolve(data)
        }
    })  
})
// 调用
p1.then(function (data) {
    console.log(data)
}, function (err) {
    console.log(err)
})

```

![1553180641373](E:\self_study\nodejs_tutorial\05\1553180641373.png)

![1553180989155](E:\self_study\nodejs_tutorial\05\1553180989155.png)

解决 回调地狱 问题：

```javascript
var p1 = new Promise((resolve, reject) => {
        // a.text => hello AAA
    fs.readFile('./data/a.txt', 'utf8', (err, data) => {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })  
})

var p2 = new Promise( (resolve, reject) => {
    // b.text => hello BBB
    fs.readFile('./data/b.txt', 'utf8', (err, data) => {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})

var p3 = new Promise( (resolve, reject) => {
    // c.text => hello CCC
    fs.readFile('./data/c.txt', 'utf8', (err, data) => {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})
// 使用情况
p1
  .then(function (data) {
    // 成功的处理
    console.log(data)    // hello AAA
    return p2
    }, function (err) {
    // 错误的处理，错误这个函数可以不写
      console.log("read file error")
    })
    .then(function (data) {
    console.log(data)    // hello BBB
    return p3
    })
    .then(function (data) {
    console.log(data)    // hello CCC
    })
// 最后输出结果一定是顺序出现
// hello AAA
// hello BBB
// hello CCC
```

![1553182749722](E:\self_study\nodejs_tutorial\05\1553182749722.png)

封装readFile方法：

```javascript
var fs = require('fs')
function pReadFile(filePath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, 'utf8', function (err, data) {
            if (err){
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

pReadFile('./data/a.txt')
    .then(function (data) {
    console.log(data)
    return pReadFile('./data/b.txt')
    })
    .then(function (data) {
    console.log(data)
    return pReadFile('./data/c.txt')
    })
    .then(function (data) {
    console.log(data)
    // ...
    })
```
