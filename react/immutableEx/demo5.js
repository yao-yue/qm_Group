var arr = [function() {   //JSON.strigifty  解决不了
    console.log(a)
},{
    a: function() {
        console.log(b);
    }
}]

var new_arr = JSON.parse(JSON.stringify(arr))
// JSON 两个方法对非函数子元素可进行深拷贝，性能开销比浅拷贝略大
console.log(new_arr, arr)