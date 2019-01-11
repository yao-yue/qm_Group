const { promisify } = require('util');

module.exports = (request) => {
    const { client } = request.server.plugins['hapi-redis'];   //注意这是一个数组
    const getAsync = promisify(client.GET).bind(client);
    const setAsync = promisify(client.SET).bind(client);
    return {
        client,
        getAsync,
        setAsync
    }
}