module.exports = (GROUP_NAME, options) => ({
    method: 'GET',
    path: `/${GROUP_NAME}`,
    handler: async (request, reply) => {
      reply('list');
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取文章列表',
      validate: {
        query: {
          ...options.paginationDefine
        }
      }
    }
  })
  