const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const fs = require('fs');
var router = new Router();

// ctx 上下文环境  
const about = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = '<a href="/">Index Page</a>';
}

const main = ctx => {
  ctx.response.body = 'Hello World';
}


// template.html V  main C 
router
  .get('/', (ctx) => {
    ctx.response.body = 'Hello World';
  }).get('/about', (ctx) => {
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">Index Page</a><img src="a.jpg"></img>';
  })

app.use(router.routes())
  .use(router.allowedMethods());
app.listen(3000);
