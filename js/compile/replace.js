// var str =  'Visit Microsoft!';
// console.log(str.replace('Microsoft', 'alibaba'));
// var money = '$sadsakd$jkaljkl$';

// console.log(money.replace(/\$/g, '￥'));

let html = `abc{{username}}edf`;    
let reg = /\{\{(.*)\}\}/gm;
console.log(reg.test(html), RegExp.$1);