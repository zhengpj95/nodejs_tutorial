
# Node.js知识点


## 1、模块系统

### 1.1 什么是模块化

- 文件作用域
- 通信规则
  + 加载 require
  + 导出

### 1.2 CommonJS模块规范

在Node中的JavaScript有一个很重要的概念：模块系统
- 模块作用域
- 使用 require 方法来加载模块
- 使用 exports 接口对象来导出模块中的成员

#### 1.2.1 加载 `require`

语法：
```javascript
var 自定义变量名称 = require("模块");
```
两个作用：
- 执行被加载模块中的代码
- 得到被加载模块中的 `exports` 导出接口对象

#### 1.2.2 导出 `exports`

- Node中是模块作用域，默认文件中所有的成员只在当前文件模块内有效
- 对于希望可以被其他模块访问的成员，需将这些公开的成员都挂载到`exports`接口对象中

- 导出多个成员（必须在对象中）：
```javascript
    exports.a = 123
    exports.b = 'hello',
    exports.c = function () {

    }
    exports.d = {
        foo: 'bar'
    }
    // 另一个方式
    module.exports = {
        add: function () {

        },
        str: 'hello',
        ...
    }
    // 相当于
    // var exports = module.exports  两者一样的，可简写，前者为后者的一个引用
    // 最后会返回 return module.exports
    module.exports.add = function(){}
    module.exports.str = 'hello'
    module.exports.xxx = xxx
```

- 导出单个成员（函数，字符串等）：
```javascript
    module.exports = 'hello'
    // 只能有一个，多个的话，后者会覆盖前者
```

- 最终使用情况
    + 导出多个成员：`exports.XXX = XXX`
    + 导出多个成员：`module.exports = {XXX:XXX, ...}`
    + 导出单个成员：`module.exports = XXX`

#### 原理解析

##### `exports` 与 `module.exports` 的区别

exports 为 module.exports 的一个引用
```javascript
    console.log(exports === module.exports) // => true

    exports.foo = 'bar'
    // 等价于
    module.exports.foo = 'bar'
```

- 给 exports 赋值不会影响 module.exports 的值
- 最后返回的是 return module.exports
- exports 和 module.exports 指向同一个对象（同一个内容），重新赋值后会断开联系
- 给 exports 赋值会断开和 module.exports 的联系
- 同理，给 module.exports 赋值也会断开

##### `module.exports = XXX`有用，而`exports = XXX` 无用的原因：

1. 开始时，`var exports = module.exports`
2. 此时，`exports` 是 `module.exports` 的一个引用，两者建立了联系，指向同一内容
3. 当给其中一者赋值时，两者指向的内容发生了变化，两者不存在联系了
4. 当重新 `exports = module.exports` 时又建立了联系
5. 最后，返回的是 `return module.exports`
6. 如果 `exports` 与 `module.exports` 不存在关系，给`exports`怎么赋值都不管用


## 2、模块查找机制

- 优先从缓存加载
- 核心模块
- 路径形式的文件模块
- 第三方模块
    + node_modules/art-template/
    + node_modules/art-template/package.json
    + node_modules/art-template/package.json 下的 main 属性
    + index.js 备选项
    + 找不到，会进入上一级目录找 node_modules
    + 按照这个规则依次往上找，直到磁盘根目录还找不到
        * 最后报错：Can not find module xxx
- 一个项目有且仅有一个 node_modules ，放在根目录下

## 3、`npm` 

全称：node package manager

### 3.1 命令

- `npm --version`               // 查看版本号
- `npm install --global npm`    // 自己升级自己

### 3.2 常用命令

**注意：**`--save`可以在包名前，也可在后
- `npm init`
    + `npm init -y` 跳过向导，快速生成
- `npm install`
    + 一次性把`dependencies`选项中的依赖项全部安装
    + `npm i`
- `npm install 包名`
    + 只下载
    + `npm i 包名`
- `npm install 包名 --save` 
    + 下载并保存依赖项（package.json文件中的dependencies选项中）
    + `npm i 包名 -S`
- `npm uninstall 包名`
    + 只删除，如果有依赖项，依赖项会保存
    + `npm un 包名`
- `npm uninstall 包名 --save`
    + 删除的同时也会把依赖信息删除
    + `npm un 包名 -S`
- `npm help`
- `npm 命令 --help`
- `npm config list`     // 查看配置信息

## 4、`package.json`

- 建议每一个项目都要有 `package.json` 文件（包描述文件，就像产品说明书一样）
- `npm init` 初始化生成 `package.json`
- 其中有一个 `dependencies`，保存第三方包的信息
- 安装包时，添加`--save` 自动把依赖包添加到其中 `npm i 包名 --save`

最有用的是那个`dependencies`选项，可以用来帮我们保存第三方包的依赖信息。
1. 建议每个项目的根目录下都有一个 `package.json` 文件
2. 建议执行 `npm install 包名 --save`添加`--save`这个选项，目的是保存依赖项的信息
3. 有了这个`dependencies`选项后，删除`node_modules`后
    - 重新安装，就可以使用`npm install`，
    - npm会自动根据`dependencies`安装相关的包

## 5、`package-lock.json`

- 提升下载速度
- 锁定版本号，防止自动升级版本

## 6、Express

## 7、MongoDB

