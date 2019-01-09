// swagger 大摇大摆

const inert = require('inert');    //hapi静态文件或目录
const vision = require('vision');  //hapi专用模板显示npm

const packageMoudle = require('package'); //拿到package.json里的数据项
const hapiSwagger = require('hapi-swagger');
module.exports = [
    inert,
    vision,
    {
        register: hapiSwagger,
        options: {
            info: {
                title: '接口文档',
                version: packageMoudle.vision
            },
            grouping: 'tags',
            tags: [
                {
                    name: 'tests',
                    description: '测试相关'
                }
            ]
        }
    }
]