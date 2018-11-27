- npm init -y
- yarn add webpack -D
- yarn add webpack-cli -D
- "scripts": {
    "build": "webpack --mode production"
  },
- wbepack.config.js
- .babelrc
- yarn add @babel/core babel-loader @babel/preset-env @babel/preset-react -D
- yarn add react react-dom
- yarn add html-webpack-plugin html-loader -D
- yarn add webpack-dev-server -D

babel-loader 将文件引入内存
-D  运行时依赖

SPA single Page Application
#root MVVM 组件式开发
Component 
页面只有一个， react就是一个完全实践MVVM组件开发的NO.1框架
Component es6 modules
webpack 来做开发流程 开发文件全在src目录下
webpack 编译及分派工作-load
webpack-cli 接受脚本，进行编译或dev
react 相比于小程序MVVM   小程序抄的react
不同的地方在与组件开发思想更加的专业，

- 容器组件
    FormComponent  容器组件 slot 分发数据 子组件接受数据发生数据报告父组件
        InputComponent 表现式组件

