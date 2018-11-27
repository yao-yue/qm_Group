let a = {}
a[0]=1
a[2]=2
a[3]  = 3
a.length = 3

console.log(a); //{ length: 3 , '0': 1, '2': 2, '3': 3,}
// 伪数组后面要加一个length
let b ={ length: 3 , '0': 1, '2': 2, '3': 3,}.length 
console.log(b)