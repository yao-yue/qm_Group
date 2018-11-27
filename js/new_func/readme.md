new 到底做了什么？
let p = new Person();
p => Object类型, Person 函数类型 typeof 
1. Parent被执行,加了new后，Parent函数会在p的作用域下执行
    this 指向p 构造函数里的属性被当做P的属性被创建
2. p.__proto__ 指向Person.prototype p继承了Parent.prototype中的属性及方法
