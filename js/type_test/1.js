var und = undefined;    //简单类型
var nul = null;
var boo = true;
var num = 1;
var str = 'xys';
// symbol 

// 复杂数据类型 引用类型
var obj = {a: 1};   
var func = function() {};
var arr = [1, 2, 3];    
var myDate = new Date();
            
// // var obj1 = obj;                 //引用式赋值,拿一个指针指向其地址，没有重新创建一个物理空间
// var obj1 = {};
// for(var key in obj) {
//     obj1[key] = obj [key];
// }
// obj1.a = 2;                            
// console.log(obj1);
// console.log('-----------');
// console.log(obj);

console.log(typeof str);
console.log(typeof num);
console.log(typeof und);
console.log(typeof boo);
console.log(typeof nul);
console.log(typeof func);
console.log(typeof obj);
console.log(typeof arr);
console.log(myDate.getTime()); 
