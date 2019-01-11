Function.prototype.bind2 = function(context) {
    // 1.返回被绑的函数
    // 2.新函数运行的时候，this指向context
    // this指向--->调用bind2的函数foo
    
    var self = this;  // 此时this指向当前函数 
    //获取到参数   slice(start, end)   参数this.arguments 调用slice(1)
    var args = Array.prototype.slice.call(this.arguments, 1);
    return function() {    
        // arguments --()这个返回的函数的传入的参数  a(18);
        var bindArgs = Array.prototype.slice.call(arguments);    //arguments 是一个伪数组 他call真数组的slice方法
        self.apply(context, args.concat(bindArgs));   //context可以调用self的方法，及this指向self->function->调用bind的函数
    }
}
var obj = {
    value: 1
}
const foo = function(name, age) {
    console.log('name', 'age');
    console.log(this.value);
}
// 硬绑定-防止this的丢失

const a = foo.bind2(obj, 'mark');
// 利用bind   手动绑定obj的this绑定到foo上
a(18);



// apply：调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.apply(A, arguments);即A对象应用B对象的方法。
// call：调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.call(A, args1,args2);即A对象调用B对象的方法

// apply的一些其他巧妙用法
// （1）Math.max 可以实现得到数组中最大的一项：
// 因为Math.max不支持Math.max([param1,param2])也就是数组，但是它支持Math.max(param1,param2...)，
// 所以可以根据apply的特点来解决 var max=Math.max.apply(null,array)，这样就轻易的可以得到一个数组中的最大项（apply会将一个数组转换为一个参数接一个参
// 数的方式传递给方法）
// 这块在调用的时候第一个参数给了null，这是因为没有对象去调用这个方法，我只需要用这个方法帮我运算，
// 得到返回的结果就行，所以直接传递了一个null过去。
// 用这种方法也可以实现得到数组中的最小项：Math.min.apply(null,array)
// （2）Array.prototype.push可以实现两个数组的合并
// 同样push方法没有提供push一个数组，但是它提供了push(param1,param2...paramN)，同样也可以用apply来转换一下这个数组，即：
// var arr1=new Array("1","2","3");
// var arr2=new Array("4","5","6");
// Array.prototype.push.apply(arr1,arr2);    //得到合并后数组的长度，因为push就是返回一个数组的长度
// 也可以这样理解，arr1调用了push方法，参数是通过apply将数组转换为参数列表的集合
// 通常在什么情况下，可以使用apply类似Math.max等之类的特殊用法：
// 一般在目标函数只需要n个参数列表，而不接收一个数组的形式，可以通过apply的方式巧妙地解决这个问题。