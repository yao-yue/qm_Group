手写Promise A+ 规范

js 回调 解决异步 出现了倒金字塔式的回调地狱
Promise A+ 规范
Promise 一个类 构造函数 resolve？ reject？
返回的就是一个Promise实例 then 方法

then   函数用箭头函数包装起来，防止this指向global

1. Promise 将executor封装在构造函数内部，并提供resolve reject两个函数给executor到时回调。
2. then 是同步的，跟Promise构造函数一样，属于语法的一方面。将onResolved onRejected存储起来并与this绑定
3. exector 高阶函数 才是真正的主战场 负责this.status this.reason this.value的处理