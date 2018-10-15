'use strict';

// es6 => es5
//let const => var 

var num = 9;
var isMarried = false;

var yourTurn = ['好工作', '找老板谈', '驴妈妈网'].map(function (task, index) {
    return index + '-' + task;
});

console.log(yourTurn);
