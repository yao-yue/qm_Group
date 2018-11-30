1. this 由函数调用方式
    普通函数 对象的方法 事件处理函数 闭包

2. this 作用域手动指定
    call apply 区别：参数 arguments不一样
        call(fn, item,item,item)
        apply(fn, arguments)

3. bind 可以实现延后执行   返回一个新函数，并且内部的this指定为第一个参数

4. 手写一个bind
    Funciton.prototype.bind = 

5. bind 是展示this闭包函数式编程 原型链最直接的例子
this: 
-  apply
    手动指定函数执行中的this为第一个参数
    bind是基于apply手动指定this为绑定对象
-  闭包区域
    this 由调用方式决定为被绑定的函数  -->this
    self = this 在闭合空间内一直存在
闭包：
- 函数嵌套函数，闭包中的变量一直可以被访问
函数式编程
- bind 返回一个新函数，解决了事件函数的this丢失问题。
    一般的事件listen this 指向了事件对象target 
    在react 组件式开发或是面对对象有需求，将事件的处理函数作为
    组件内的方法，即延迟调用，同时又手动指定this
    apply + 函数式编程
    return function() {
        self.apply(context)
    }

6. 原型链
    Function.prototype.bind
    

    