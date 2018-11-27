// new ? 实例化过程是怎么底层？
// Otaku类  抽象的概念  等待被new
function Otaku(name, age) {
    this.name = name;
    this.age = age;
    this.habit = 'Games';
}
Otaku.prototype.strength = 60;
Otaku.prototype.sayYourName = function () {
    console.log('I am' + this.name);
}
var person = new Otaku('Kevin', '18');
console.log(person.name, person.age, person.habit);
person.sayYourName();

// new  类生产出对象
// 1. 返回一个实例{} 声明， 拥有Otaku 函数中加的那些属性
// 2. 实例可以访问到Otaku.prototype中的属性

// new? js关键字
function objectFactor (fn, ...args) {
    console.log(arguments);

    var obj = new Object(); //new 第一步 返回新的空对象
    //      this 第二步 要指向新的对象
    //    第三步 让Constructor执行
    
    //借用下[]的方法进行shift 因为argument是伪数组 参数去头
    Constructor = [].shift.call(arguments);
    console.log(Constructor);
     console.log(arguments);
    //obj 向Constructor借                        
    Constructor.apply(obj, arguments);
    // obj 上拥有Constructor 上所有属性？
    // 函数也是对象
    // obj.__proto__ = fn.prototype;
    obj.__proto__ = Constructor.prototype;
    return obj;
}
// 1. 构造函数
// 2. 其余是构造函数需要的参数
const feizai = objectFactor(Otaku,'xinyuan', 19);
console.log(feizai.name);
console.log(feizai);

const aa = new Otaku('xinyuan', 19);
console.log(aa)

// apply：调用一个对象的一个方法，用另一个对象替换当前对象。
// 例如：B.apply(A, arguments);即A对象应用B对象的方法。

// call：调用一个对象的一个方法，用另一个对象替换当前对象。
// 例如：B.call(A, args1,args2);即A对象调用B对象的方法。