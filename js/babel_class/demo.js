// class Person {
//     constructor () {
//         this.name = name;
//     }
//     sayHello () {
//         return this.name;
//     }
// }



// es5 构造函数
// 让我们的构造函数不可以当做一般的函数来运行
function Person(name) {
    // 将Person 函数作为普通函数来调用
    _classCallCheck(this, Person);
    this.name = name;
}
console.log(Object.keys(Person.prototype));
console.log(Object.getOwnPropertyNames(Person.prototype));
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
Person.prototype = {
    sayHello: function() {
        return this.name;
    }
}
// var boos = new Person('马云');   //作为构造函数执行 会返回一个包含this的属性的对象
// console.log(boos);
// var boos2 = Person('马化腾');   //作为普通函数来执行 不会返回一个对象 undefined
// console.log(boos2);

