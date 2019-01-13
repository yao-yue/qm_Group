let st = 'aaaa'; console.log(typeof st);         //string
let num = 1; console.log(typeof num)             //number
let bool = true; console.log(typeof bool)        //boolean
let n = null; console.log(typeof n)              //object
let u = undefined; console.log(typeof u)         //underfined
let arrary = []; console.log(typeof arrary)      //object
let object = {}; console.log(typeof object)      //object
let fn = function() {}; console.log(typeof fn)   //function
let regexp = /^\d+$/; console.log(typeof regxp)  //undefined
let date = new Date(); console.log(typeof date)  //object


// 关于null为什么type of 为object
// 因为type of  判断类型是通过他们底层的二进制数来判断的.判断object的规则是二进制前三位为000,而
// null 底层全是0000000,匹配了object的规则,所以typeof 为 object

// 数组 对象  日期 都是object类型