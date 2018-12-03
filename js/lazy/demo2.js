var foo = (function() {
    var t;
    return function() {
        if(t) return t;
        t = new Date();
        return t;
    }
})();
//为什么要用立即函数包起来 不包起来输出为[Function]
console.log(foo())
setTimeout(() => {
    console.log(foo());
}, 2000)