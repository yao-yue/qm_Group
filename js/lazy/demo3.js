// 把函数看成对象 Function {} 一切皆对象
function foo () {
    //foo.t也可
    if(this.t) return this.t;
    this.t = new Date();
    return this.t;
}
console.log(foo());
setTimeout(() => {
    console.log(foo());
}, 2000)