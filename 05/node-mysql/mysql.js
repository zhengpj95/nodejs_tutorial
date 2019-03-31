
var mysql      = require('mysql');

// 创建连接
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123123',
  database : 'lostandfound2'
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