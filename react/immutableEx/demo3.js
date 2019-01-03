var arr =['old', 1 ,true, null, undefined];
var new_arr = arr.concat();  //浅拷贝   返回一个新的方法
new_arr[0] = 'new';
console.log(new_arr, arr);
// slice concat  数组里面少数返回新数组的方法  称为浅拷贝

// 未来是不可预测的
// js bad parts

// Immutable  让结果一定 对未来可知