function Person() {
    this.name = 'kevin';
}
//父类子类  prototype 属性 原型式继承
// Person 函数 this指针 -> new Object js本没有类，只有对象 Object

// 原型链对象{} prototype 任何函数都可以有的属性
Person.prototype.getName = function() {
    console.log(this.name);
}


// 原型链继承
function Child () {
}
Child.prototype = new Person();
var child = new Child()
child.getName();
