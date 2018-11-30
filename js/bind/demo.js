var foo = {
    value : 1,
}
var obj = {
    value: 2,
}
function bar (name, age) {
    console.log(this.value)
}
var bindObj = bar.bind(obj);
console.log(typeof bindObj);
// 新函数
var bindFoo = bar.bind(foo);
bindFoo();  //新生成的函数可以异步执行，不像call apply立即执行
console.log('bar.call(obj);:')
bar.call(obj);

