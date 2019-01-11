const redis = require('../../redis/index');

module.exports = (GROUP_NAME, options) => ({
    method: 'GET',
    path: `/${GROUP_NAME}`,
    handler: async (request, reply) => {
      const {limit, page } = request.query;
      const offset = (page - 1) * limit;
      const { client, getAsync, setAsync } = redis(request);
      // mysql 有IO压力,用户量一大不做缓存是不行的.redis或早期的memorycache来做内存数据库,
      // 优势:读取速度快,没有IO压力
      // 读数据 redis(key) 有吗? 有就直接返回,没有的话去mysql里查找 set redis
      const redisResName = `postlimit${limit}offset${offset}list`;
      const redisRes = await getAsync(redisResName);
      console.log(redisResName);
      console.log('-------------',redisRes);
      if(redisRes) {
        reply(JSON.parse(redisRes))
      } else {
        const { rows: results, count: totalCount } = await options.models.blogs.findAndCountAll({
          limit,
          offset
        })
        await setAsync(redisResName, JSON.stringify({ results, totalCount }))
        client.EXPIRE(redisResName, 50);   //在50秒内都往redis走,一个过期时间
        reply({ results, totalCount });
      }
     
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
  