
// 全局作用域
var a = 1;
function foo() {
    // scope 有点像protoype
    // 函数作用域
    var a = 2;
    console.log(a);
}
foo();