
# Node 操作 MySQL 数据库

安装：
> npm i mysql

创建：
```javascript
var mysql = require('mysql');

// 创建连接
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});

// 打开连接
connection.connect();

// 所有的增删查改都在此处
connection.query('SELECT * FROM USER', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

// 关闭连接
connection.end();
```