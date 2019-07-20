
# Node.js学习 (2019-03-14)

## 知识点

- 模块系统
  - 核心模块
  - 第三方模块
  - 自定义模块
  - 加载规则以及加载机制
  - 循环加载规则
- npm
  - node package manager
- package.json
  - 建议每一个项目都要有 `package.json` 文件（包描述文件，就像产品说明书一样）
  - `npm init` 初始化生成 `package.json`
  - 其中有一个 `dependencies`，保存第三方包的信息
  - 安装包时，添加`--save` 自动把依赖包添加到其中
  - `npm i 包名 --save`
- package-lock.json
  - 绑定包的版本号
  - 避免一些包更新后，使用不了
  - 当删除node_modules后，重新下载能提高下载速度
- Express
  - 第三方 web 开发框架
  - 高度封装了 http 模块
  - 更加专注于业务， 而非底层细节
  - 知其所以然
- 增删查改
  - 使用文件来保存数据（联系异步编码）
- MongoDB
  - 所有方法都封装好的了

## 补充知识点

- forEach 与 each

    ```javascript
    // 原生方法
    ;['abc','def','ghi'].forEach(function (item, index)) {
        // index是序号，item是元素
        console.log(item)
    }

    // 遍历jQuery元素，注意function内的index和item不同
    // each 是在 jQuery 的原型链中
    $.each(['abc','def','ghi'], function(index, item) {
        // index是序号，item是元素
        console.log(item)
    })

    /*
    jQuery 不是专门用来遍历 jQuery 元素的
      - 方便的遍历 jQuery 元素
      - 可以在不兼容 forEach 的低版本浏览器中使用 jQuery 的 each 方法
    */

    // ;[].slice.call($('div')).forEach(function(item){...})
    ```

- `exports` 是一个对象
  - 如果一个模块需要直接导出某个成员
    - module.exports = 函数名|字符串|数组|...
    - exports = 函数名|字符串|数组|... 是不行的
      - exports 只是 module.exports 的一个引用
      - 给 exports 赋值不会影响 module.exports 的值
      - 最后返回的是 return module.exports
  - exports.XXX = XXX 是挂载方式，把右边的XXX挂载到exports对象上

## 总结

- jQuery的each和原生的JavaS方法forEach
  - jQuery 的实例对象不能使用原生的forEach方法，如果想要使用必须转为数组才可以使用
  - `[].slice.call(jQuery实例对象)`
- 模块中导出多个成员和导出单个成员
- 301 和 302 状态码区别
  - 301 永久重定向，浏览器记住
  - 302 临时重定向，浏览器不记住
- exports 和 module.exports 的区别
  - 每个模块中都有一个 module 对象，module 对象中有一个 exports 对象
  - 可以把需要导出的成员都挂载到 module.exports 接口对象中
    - 也就是`module.exports.xxx = xxx`的方式
  - node为了方便，同时在每一个模块中都提供了一个成员叫 `exports`
    - `exports === module.exports` 结果为 `true`
  - 所以 `module.exports.xxx = xxx`的方式完全可以 `exports.xxx = xxx`
  - 当导出单个成员时，必须使用`module.exports.xxx = xxx`，不能使用`exports = xxx`
    - 因为每个模块最终向外 `return module.exports`
    - 而 `exports` 只是 `module.exports` 的一个引用
    - 即便为 `exports = xx` 重新赋值，也不会影响 `module.exports`
    - 除非又重新建立引用关系 `exports = module.exports`
- require 方法加载规则
  - 优先从缓存加载
  - 核心模块
  - 路径形式的模块
  - 第三方模块
  - package.json
    - dependencies
- npm
- express
