function Person(name) {
    this.name = name;
}
let p = new Person('张三');
console.log(typeof Person);  //Function
console.log(typeof p)        //object
console.log(Person.prototype); //指向原型链对象  Person {}
console.log(p.prototype);    //对象上没有这个属性 只属于构造函数
console.log(p.name)          //往原型链上查找
console.log(Person.prototype.constructor === Person)
console.log(Person.__proto__);   // [Function]
console.log(p.__proto__);       //Person {}