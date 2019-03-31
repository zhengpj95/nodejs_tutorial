// 引入模板引擎
var template = require('art-template');

var templateStr = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>{{title}}</title>
</head>
<body>
	{{ name }}
	{{ age }}
	{{each hobbies}}{{ $value }} {{/each}}
	<script>
		var title = '{{title}}'
	</script>
</body>
</html>
`
// templateStr 需为字符串
var ret = template.render(templateStr, {
	name : 'zpj',
	age  : 23,
	hobbies : [
		'敲代码',
		'幻想',
	],
	title : '模板引擎 art-template '
})
console.log(ret);