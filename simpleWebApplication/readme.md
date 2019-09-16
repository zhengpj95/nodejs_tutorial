# SimpleWebApplication

> <https://www.nodebeginner.org/index-zh-cn.html#a-full-blown-web-application-with-nodejs>

## Example

- 用户可以通过浏览器使用我们的应用
- 当用户请求 `http://domain/start` 时，可以看到一个欢迎页面，页面上有一个文件上传的表单
- 用户可以选择一个图片并提交表单，随后文件将被上传到 `http://domain/upload` ，该页面完成上传后会把图片显示在页面上。

## 分析

- 我们需要提供 Web 页面，因此需要一个 HTTP 服务器
- 对于不同的请求，根据请求的 URL ，我们的服务器需要给予不同的响应，因此我们需要一个路由，用于把请求对应到请求处理程序（request handler）
- 当请求被服务器接收并通过路由传递之后，需要可以对其进行处理，因此我们需要最终的请求处理程序
- 路由还应该能处理 POST 数据，并且把数据封装成更友好的格式传递给请求处理入程序，因此需要请求数据处理功能
- 我们不仅仅要处理 URL 对应的请求，还要把内容显示出来，这意味着我们需要一些视图逻辑供请求处理程序使用，以便将内容发送给用户的浏览器
- 最后，用户需要上传图片，所以我们需要上传处理功能来处理这方面的细节

## 目录树

- app.js        入口主文件
- server.js     服务器
- router.js     路由
- requestHandlers.js    请求处理函数
- README.md
