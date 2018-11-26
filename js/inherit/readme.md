1. js 本身没有类 除了基本数据类型外，只有对象。
将对象的protoyepe链指向要继承的类。
2. prototype 是函数的属性
3. 继承三步
- 父类的构造函数执行以下，相当于 super()
- prototype属性指向 父类的实例
- 将prototype.constructor 指向构造函数

类 Parent 三部分 prototype是方法上的属性
1. 构造函数 new Fn() {} <= this
2. 构造函数 prototype 属性 方法
    对象沿着原型链去查找方法
3. 构造函数和原型链关联
    Parent.prototype.constructor  谁是构造函数的原型


- type of 其实复杂数据类型只有function 和 object是语法原生支持的，其他的都只是变种而已
Function Vs Object
函数 一等对象，js才是真正的面对对象
函数可以被执行， 一个可以被执行的对象
可以当做Object的构造函数

- prototype 属性只属于函数
__proto__  函数或方法都有此私有属性

一个对象A的__proto__属性指向对象B，B就是A的原型对象(父对象),A拿到B里的所有的属性和方法，也可以拿到B的原型对象C上的属性和方法，以此递归，就是之原型链.
