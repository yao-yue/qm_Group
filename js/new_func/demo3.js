function Parent(name) {
    this.name = name;
}
let p = new Parent('张三');
console.log(Parent.prototype);     //原型对象
console.log(p.__proto__ == Parent.prototype);  //true
console.log(Parent.__proto__);    //[Function]   可以被执行的对象
console.log(Function.__proto__);   //[Function]