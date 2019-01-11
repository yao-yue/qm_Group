const Hapi = require('hapi');
require('env2')('./.env');
const { env } = process;
const routesBlogs = require('./routes/blogs');
const pluginHapiSwagger = require('./plugins/hapi-swagger');
const pluginHapiPagination = require('./plugins/hapi-pagination')
const pluginHapiRedis = require('./plugins/hapi-redis');
const server = new Hapi.Server();
server.connection({
  host: env.HOST,
  port: env.PORT
});

const start = async () => {
  await server.register([
    ...pluginHapiSwagger,
    pluginHapiRedis,
    pluginHapiPagination
  ]);
  server.route([
    ...routesBlogs
  ]);
  await server.start();
  console.log(`Server running at : ${server.info.uri}`);
}

start();
