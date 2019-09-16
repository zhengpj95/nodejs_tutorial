/**
 * 服务器模块
 */
const http = require('http');
const url = require('url');
const port = process.env.port || 3000;

function startServer(route, handle) {
    const server = http.createServer(function(req,res) {

        let pathname = url.parse(req.url).pathname;

        if(pathname == `/favicon.ico`) return;
        console.log(`Request for `, pathname, `received.`);

        route(handle, pathname);

        res.writeHead(200, {"Content-Type":"text/plain"});
        res.end(`hello node.js`);
    });
    
    server.listen(port, () => {
        console.log(`server runs at http://localhost:${port}`);
    });
}

module.exports.startServer = startServer;
