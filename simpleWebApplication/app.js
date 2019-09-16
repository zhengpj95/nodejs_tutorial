/**
 * 主程序入口
 */
const server = require('./server');
const router = require('./router');
const requestHandlers = require('./requestHandlers');

var handle = {
    '/': requestHandlers.firstCall,
    '/start': requestHandlers.start,
    '/upload': requestHandlers.upload
}

console.log(handle);

server.startServer(router.route, handle);
