module.exports = [{
    method: 'GET',
    path: '/',
    handler: (resquest, reply) => {
        reply('hapi')
    },
    config: {
        tags: ['api', 'tests'],
        description: '测试hello-hapi',
    }
}]