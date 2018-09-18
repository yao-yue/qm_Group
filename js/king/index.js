const chior =[];   //乐队

//只有会咯咯咯叫的鸡才要   check
// 代码 流程 组成乐队 办事流程

var chicken ={
    chickenSing:function(){
        console.log('咯咯咯');
    }
}

// js 动态类型语言
var duck = {
    duckSing: function(){
        console.log('嘎嘎嘎');
    },
    // chickenSing: function(){
    //     console.log('咯咯咯');
    // }
}

// 如果他走起路来想鸡，叫起来也像鸡，那么就是鸡， chicken type is 弱类型

/*
*功能: 加入合唱团
*params: animal 动物对象
*chior 加入新成员
*/
function joinChior(animal){
    if(animal && typeof animal.chickenSing == 'function'){             //bug修复 严谨的判断这个对象是否有
        chior.push(animal);
    }
}

// 函数式编程，将编程目的分成一个或多个函数，取代逐行式编程，将流程式开发，函数式，完成封装
for(var i = 0; i < 999; i++){
    joinChior(chicken);
}

// 现学 js类，对象，动态的
duck.chickenSing = function(){
    console.log('咯咯咯');
}

joinChior(duck);
console.log(chior.length);

// 只有999只鸭子


