// 通用的拷贝的计算方法，   JSON方案 排除
//一维浅拷贝方案  有限制   递归
// 1 递归  降维 将一个多维的对象拷贝变成n个一维的浅拷贝。
// 2 深拷贝 
// 3 slice or concat？[] {} function() {}
    // 4回溯

var shallowCopy = function(obj) {
    if(typeof obj !== 'object') return ;
    var newObject = obj instanceof Array? []:{}  //实例是数组吗
    // 没有基础循环性能好  但是适用性强
    for(var key in obj) {
        if(obj.hasOwnProperty(key)) {   //如果是自己自身的拷贝
            newObject[key] = obj[key];
        }
    }
    return newObject;
}

var arr = ['old', 1, true, [2,3]];
var new_arr = shallowCopy(arr);
new_arr[3][0] = 4;    //[ 'old', 1, true, [ 4, 3 ] ] [ 'old', 1, true, [ 4, 3 ] ]  这里就没有实现 只是拷贝了引用
console.log(new_arr, arr);