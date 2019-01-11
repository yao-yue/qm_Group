const inert = require('inert');  //静态资源处理库
const vision = require('vision');   //末班处理库
const packageInfo = require('package');
const hapiSwagger = require('hapi-swagger');

const swaggerOptions = {
    info: {
      title: '接口文档',
      version: packageInfo.version,
      description: '基于 hapi 框架的博客系统后台',
      contact: {
        name: 'hbw',
        url: 'https://github.com/g00d-morning',
        email: '754211506@qq.com',
      },
      license: {
        name: 'MIT',
        url: 'https://github.com/shunwuyu/hapiblog/blob/master/LICENSE',
      },
    },
    lang: 'zh-cn',
    grouping: 'tags',
    tags: [
      { name: 'tests', description: '测试相关' },
    ],
  };
  

module.exports = [
    inert,
    vision,
    {
        register: hapiSwagger,
        options: swaggerOptions
    }
]

