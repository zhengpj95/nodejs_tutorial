function fn(callback) {

  // 相当于
  // var callback = function(data){console.log(data)}
  console.log("...") // 先输出

  setTimeout(function() {
    var data = 'hello'
    callback(data) // 最后调用返回
  }, 2000)

  callback('callback...') // 然后输出
}


/* 要获取一个函数中异步操作的结果，必须通过回调函数来获取
	function(data){console.log(data)}就是回调函数
*/
fn(function(data) {
  console.log(data) // 最后输出
})