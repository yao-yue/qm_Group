var fetch = require('node-fetch');

function* gen() {
    var url = 'https://api.github.com/users/github';
    var result = yield fetch(url);
    console.log(result);
}

//依靠next来给值得迭代过程

var run = gen();
var result = run.next()
result.value.then(function(data) {
    return data.json();   //二进制转换成json
}).then(data => {
    // console.log(data)
    //把data传给上一次yeild 左边的变量
    run.next(data);
})
// console.log(run.next());
// console.log(run.next({ bio: '定海神针'}));
// console.log(run.next());