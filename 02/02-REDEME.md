
# nodejs学习

## 代码风格

- JavaScript Standard Style
- Airbnb JavaScript Style
- 代码风格：
  - 无分号： **(   [  `**  前最好加; ，避免一些问题

## 模板引擎 art-template

- npm install art-template --save
- var template = require('art-template')
- var fs = require('fs')
- fs.readFile(dir,function(err,data{}))
  - data是二进制数据
  - data.toString()转换成字符串
- template.render(string,{})
  - 把从文件读取到的data.toString放到string处

## 服务器渲染和客户端渲染的区别

- 客户端渲染不利于 SEO 搜索引擎优化
- 服务端渲染是可以被爬虫抓取到的，客户端异步渲染是很难被爬虫抓取到的
- 真正的网站既不是纯异步也不是纯服务端渲染出来的，而是两者结合的
  - 京东的商品列表就是采用的是服务端渲染，目的为了 SEO 搜索引擎优化
  - 商品评论列表是为了用户体验，不需要 SEO 优化，所以采用是客户端渲染
- Search engine optimization (SEO)

## 练习-1

- 评论列表
- 发表评论
  - 新发表的评论展示在列表的上面，用unshift()添加
- `views` 里面是 html 代码
- `public` 里面是公共部分，css js img lib(里面包含其他库，框架)
