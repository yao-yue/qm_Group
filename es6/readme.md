-this 
指针
1.函数的行动方式有关
>如果是作为事件处理函数，this指向事件发生的对象
>如果是箭头函数，this指向父级this
>普通函数 this指向全局（window 前端) (global 后端) 
>作为对象的方法被执行， this 指向对象

JS 数据类型
基础类型六种：
    数值型,字符串,布尔值,undefine,null,Symbol
复杂数据类型:
    Object 
        数组 对象字面量 函数
    typeof 
    找个工具, call
    Object.prototype.toString.call(variable);
    [object Array];

    transition 变化.

    classList API:
    contains add remove toggle
        