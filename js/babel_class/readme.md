- babelrc  babel配置
    "presets": ["env"] 预处理\

    yarn add babel-core babel-presets-env

    babel demo.js -o demo-es5.js

1. babel class 编译
    .babelrc 不可少,presets数组  env
     - js 面向对象是原型式的
     function Person() {} 构造函数
     Person.prototype = {}
     es6 class constructor 语法糖
     - es5的构造函数可以作为普通函数来执行
        class es6 babel 编译时杜绝？
        _callClassCheck()
    - es6的prototype 属性不可枚举 enumerable
    Object.keys()
    Object.getOwnPropertyNames() 得到对象的自身属性