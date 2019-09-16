/**
 * 路由模块
 */

function route(handle, pathname) {

    console.log(`Route a request for `, pathname);

    if(typeof handle[pathname] === 'function') {
        handle[pathname]();
    } else {
        console.log(`Request for `, pathname, `was no found!`);
    }
}

module.exports.route = route;