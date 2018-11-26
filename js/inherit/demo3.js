function Parent(name) {
    this.name = name;
    this.color = ['red', 'green', 'yellow'];
}
Parent.prototype.getName = function() {
    console.log(this.name);
}

//子类 一定要满足父元素的属性
function Child(name, age) {
    Parent.call(this, name);  //  == es6 super
    this.age = age;
}

//原型链对象指向Parent的prototype  子类的constructor指向自身的prototype
Child.prototype = new Parent();
Child.prototype.constructor = Child;
Child.prototype.sayHello = function () {
    console.log(`hello world! I had coded ${this.age} years ~~`);
}
var child1 = new Child('Mary', 18);
console.log(child1.name, child1.age)
child1.getName();
child1.sayHello();
console.log(Child.prototype.constructor)