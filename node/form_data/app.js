const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const infos = {
    "123": {
        username: "rhino",
        sex = '666'
    },
    "789": {
        username: "dragron",
        sex = '000'
    },
}
//web server  自带http模块
// node 如何提供http服务？
const server = http.createServer((req, res) => {
    // 提供访问的， 方法都会被执行 进入待命状态 在server被访问的每一刻都会被执行
    // 两大管家 req 请求对象 request url  querystring query body 
    //         res 服务结果对象 response
    // 对内linux 操作系统

    if(req.url === '/rhino.png') {
        const png = fs.readFileSync('./rhino.png');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/png');
        res.end(png);
        return ;
    }
    if(req.url.indexOf('./getInfo') >=0) {
        const qs = req.url.split('?')[1];
        console.log(qs);
        //转化成json对象
        const params = querystring.parse(qs);
        console.log(params);
        const id = params.id;
        console.log(id);

        const info = infos[id] || {};

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/json');
        res.end(info);
        return;
    }
    const index = fs.readFileSync('./index.html', 'utf8');
    req.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end(index);
})
// addEventListener server像原来的dom server是http访问的最大对象
// 3000是端口
server.listen(3000, '127.0.0.1', () => {
    console.log('服务跑起来了')
})