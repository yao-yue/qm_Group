// 1. 全局执行上下文 全局执行上下文压入执行上下文栈
// 2. 全局执行上下文初始化
// 3. 创建函数执行上下文，checkscope入栈
// 4. 函数被运行后，this，创建变量，作用域链

var scope = 'global scope';

function checkscope() {
    var scope = 'local scpoe';
    //上下文环境 context
    //在创建时形成了上下文环境，在环境中的自由变量可以在调用时找到

    // 5. checkscope函数执行完毕，checkscope执行上下文 from 执行上下文栈中弹出
    // 6. 执行f函数 创建了f函数执行上下文，f函数执行上下文被压入执行上下文栈
    // 7. f 执行上下文变量，作用域链this

    // f 创建的作用域链时， scope--保持了对checkscope函数作用域【上下文环境】的引用
    // 科学的理解-----闭包背后发生了什么
    function f() {
        return f;
    }
    return f;
}

var foo = checkscope();  // 生成了函数
console.log(foo());    //调用了

fContext = {
    Scope: [AO , checkscope.AO, globalContext.VO ] //作用域链
}
// AO  Active Object
// VO  Variable Object
checkscopeContext = {
    Scope: [AO, globalContext.VO]
}
