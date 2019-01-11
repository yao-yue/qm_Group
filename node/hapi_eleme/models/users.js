const GROUP_NAME = 'users';

module.exports = [
  {
    method: 'POST',
    path: `/${GROUP_NAME}/wxLogin`,
    handler: async (req, reply) => {
      reply('fdff');
    },
    config: {
      tags: ['api', GROUP_NAME]
    }
  }
];
