import { myPI, print, func } from './test.js';

/**
 * package.json 中的 type 为 module 则可以直接使用
 * 目前 nodejs 中使用 ES6 的 import/export 会有警告：
 * ExperimentalWarning: The ESM module loader is experimental.
 * 
 * Nodejs 中使用 ES6 的 import/export 的两种方式：
 * 1. package.json 文件的 type 设置为 module
 * 2. js 文件使用 mjs 后缀名
 */
console.log(myPI);
print()
console.log(func());
