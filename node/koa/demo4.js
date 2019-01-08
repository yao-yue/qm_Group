const Koa = require('koa');
const app = new Koa();
const fs = require('fs.promised');

const main = async(ctx, next) => {
    ctx.response.type = 'html';
    // 去查数据库、文件处理、IO操作等后端异步操作
    ctx.response.body = await fs.readFile('./template.html', 'utf-8');
}
app.use(main)
app.listen(3000)