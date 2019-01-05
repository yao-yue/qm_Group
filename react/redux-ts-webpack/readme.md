-  webpack 
    --hot  热更新  当状态改变时只更新一部分，
    --open 自动打开浏览器

项目项目目录
.babelrc  
webpack.config.js
tsconfig.json

- tsconfig.json typescript
webpack.config.js 工作流 
    entry src/index.ts
    有多个入口 给打包后的文件命名
    {
        app: ,
        vendorStyle: ,
    }
    为何要有多个呢？ 打包要时间，bootstrap 样式绝对不会改变，没必要每次都打包
    css lib,react react-router-dom redux 没必要一个打包 可以分开来，减少打包时间
    打包出来  index.html 两个文件，http请求数是加了，但是加的不多，
    但是对于现代浏览器（chrome）同时并发少数的http对性能影响不大，反而有优势，
    静态资源是会缓存的，lib css js 不需要下载，而业务组件开发的src，
    components js 会经常修改的，分开打包只会让用户更新这一小部分js，打开页面会跟快
    不会改变的lib 部分会放到cdn去

    webpack-dev-server port
    html-plugin src/index.html

- typescript 在react中做加法，让项目强类型化，减少错误
1. members： MemberEntity[]
生命周期中请求，api方法返回值类型约束
interface MemberEntity
2. model 层 
3. api层 


