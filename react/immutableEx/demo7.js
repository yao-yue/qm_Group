
var deepCopy = function (obj) {
    if (typeof obj !== 'object') return;
    var newObject = obj instanceof Array ? [] : {}  
    // 没有基础循环性能好  但是适用性强
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {   //如果是自己自身的拷贝
            newObject[key] = typeof obj[key] === 'object'? deepCopy(obj[key]): obj[key];
        }
    }
    return newObject;
}

var arr = ['old', 1, true, [2, 3],function a() { function b() {} }];
var new_arr = deepCopy(arr);
new_arr[3][0] = 4;    
console.log(new_arr, arr);