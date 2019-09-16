/**
 * 请求处理程序模块
 */

function firstCall() {
    console.log(`firstCall() was called.`);
}

function start() {
    console.log(`start() was called.`);
}

function upload() {
    console.log(`upload() was called.`);
}

module.exports.firstCall = firstCall;
module.exports.start = start;
module.exports.upload = upload;
