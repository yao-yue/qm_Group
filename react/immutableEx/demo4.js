var arr = [{old: 'old'}, ['old']];
// var new_arr = arr.slice();   //浅拷贝在这种情况的时候是搞不定的

var new_arr = JSON.parse(JSON.stringify(arr));
new_arr[0].old = 'new'
new_arr[1][0] = 'new';


// 深浅自知，浅拷贝有他的应用场景，更高效
console.log(arr, new_arr);