
# art-template

## Sub template（子模版）

`header.html`中的代码：
```html
<div class="header" style="background-color: pink;">
  <h1>This is header.</h1>
</div>
```

在要引用`header.html`的html页面中的相应位置写入如下代码，
即可把`header.html`页面引入其中。
```javascript
{{ include './header.html' }}
```
例如：
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>title</title>
</head>
<body>
  <!-- 引入头部公共文件 -->
  {{ include './header.html' }}

  <!-- 中间内容 -->
  {{ block 'content' }}
    <h1>{{ title }}</h1>
    <h3>中间主体内容</h3>
  {{ /block}}

  <!-- 引入底部公共文件 -->
  {{ include './footer.html'}}
</body>
</html>
```

## Template inheritance（模板继承）

母模板：
```javascript
  // layout.html
  {{ block 'content' }}
    <h3>这里是母模板中间的主体内容</h3>
  {{ /block }}
```

子模版：
```javascript
  // 在子页面中继承母页面时的语句
  {{extend './layout.html'}}

  {{ block 'content' }}
    <h3>这里是子模版中间的主体内容</h3>
  {{ /block }}
```

在子模版中，{{ block 'content' }}子模版内容{{ /block}}会主动替换掉母模板中的内容。
content是当前这个block的别名，

```html
<!--layout.html-->
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>{{block 'title'}}My Site{{/block}}</title>

    {{block 'head'}}
    <link rel="stylesheet" href="main.css">
    {{/block}}
</head>
<body>
    {{block 'content'}}{{/block}}
</body>
</html>

<!--index.html-->
{{extend './layout.html'}}

{{block 'title'}}{{title}}{{/block}}

{{block 'head'}}
    <link rel="stylesheet" href="custom.css">
{{/block}}

{{block 'content'}}
<p>This is just an awesome page.</p>
{{/block}}
```