http://localhost:3000/api                   web server
http://localhost:3000/api/data.json 
http://localhost:3000/  

跨域 A -> B 
A 8080   index.html  -> B 3000/api
同一个domain 但是因为port不同  也认为是跨域
Js同源（前端后端同源 信任）机制， 如果是跨域请求，不允许。

连端口不一样都会跨域。在一家公司，因为提供的服务或部门或项目不一样都会需要使用跨域的能力来联调。waimai.eleme.com   子域名专门处理饿了吗外面的产品  外卖部门
    jiudian.eleme.com  酒店部门，跨部门的技术服务
    music.qq.com       第三方服务
    同一个域名（1级，2级域名） 提供不同的服务
    前端 8080(react client 组件) 后端3000(server koa /api) ngnix  
    前后端分离来并行开发。
