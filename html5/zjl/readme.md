为了封装性，易用性，代码的可读性
将弹幕的业务逻辑(独立) 封装成一个类，并将其模块化
直接在浏览器端引入(执行)export default;
import 模块化关键字 浏览器目前还没有支持。
async 最近的浏览器版本才开始支持 syntax
如何用面向未来的编码风格，又能够编译通过，写的代码跟最后执行的代码不一样。compile babel
webpack -> 工作流 接管
    test.js
    babel-loader -> es5
webpack-dev-server -> http server  在这之前dev-server会compiler webpack
entry(入口会接受更深层次的的文件)
module test loader 
output(出口, )
