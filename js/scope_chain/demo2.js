globalContext = {
    VO: {
        data: [],
        i: 3
    }
}
var data = [];

for(var i = 0; i < 3; i++) {
    // data[0]Context = {
    //     Scope: [AO, globalContext]
    // }
    // data[1]Context = {
    //     Scope: [AO, globalContext]
    // }
    // data[2]Context = {
    //     Scope: [AO, globalContext]
    // }
    // 执行的时候自己作用域里面找不到，于是往上一级里面去找。此时的globalContext里面的值已经经过三次改变了

    //立即执行函数产生闭包
    //自由变量 除了函数的参数及其内部变量的 变量
    data[i] = (function(i) {
        return a = function() {
            console.log(i);
        }
    })(i)
}

data[0]();
data[1]();
data[2]();
