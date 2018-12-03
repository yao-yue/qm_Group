// 惰性函数？
// 比如支付包里面的很多功能。不必要一进去就执行，可以推迟到第一次去使用之后
//浏览器嗅探 兼容性  适配性
//点开一次后，之后都可以用  相当于人工选择开启

// 函数的真正功能，等到执行了一次再决定
var foo = function() {
    var t = new Date();

    //生成了一个惰性函数 重新定义这个函数，利用闭包记忆，返回第一次产生的函数
    foo = function() {
        return t;
    }    
    return foo();
}
console.log(foo());
setTimeout(() => {
    console.log(foo());
}, 2000)

// js 里的函数是可以重写的