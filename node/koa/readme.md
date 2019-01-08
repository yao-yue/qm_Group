- 启动web server
HTTP Server part 3000 伺服

用户request(n)   中间件(函数)   respone(访问结束)

图片/css/js/text，都给他们构建url 静态资源服务

中间件是有顺序的  next,
response.body

如果传到最后一个还没有response就返回传然后还没有就退出