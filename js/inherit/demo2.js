function Person() {
    this.name = ['kevin', 'daisy'];
}
// 1 this 永远跟函数运行的方式有关
function Child() {
    // 得到Person的属性  this指向函数运行时的
    Person.call(this);
}
//子类拥有父类上的属性
var child1 = new Child();
child1.name.unshift('frunck')
console.log(child1);
var child2 = new Child();
console.log(child2);
//原型链对象
console.log(Person.prototype)