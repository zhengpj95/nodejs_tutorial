# node.js

## 修改源地址

> `npm config set registry http://registry.npm.taobao.org/`
> `npm config set registry https://registry.npmjs.org/`

## nrm -- 快速切换 NPM 源

```javascript
npm install -g nrm

nrm ls

nrm use taobao

nrm test // 测试响应时间

nrm test cnpm

nrm add <registry> <url> [home]

nrm del <registry>
```

## nvm -- 管理node版本

## 全局安装的包

> npm list -g --depth 0
