1. 一切资源皆可打包 webpack bundle
css.loader -> 依赖
style.loader ->

2. 路由接管一切，配置在最前面
<Router>
    <Route path="" component=""/>
</Router>
- HashRouter  &  BrowserRouter
- http://localhost:3000/#/dashboard/monitor
- #/path~~

3. 有两种路由 
- BrowserRouter(高级浏览器 mobile， 移动端手机应用，URL更好理解，跟后端的路由方式更加相似) 
- HashRouter(兼容性好,支持ie8以上的所有浏览器,react支持ie9以上的浏览器 PC端选择)
- history.pushState(data(state), title, url);