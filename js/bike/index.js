
//首字母大写， 构造函数
// function BicycleShop () {
// }
// js BicycleShop 变量名 值
// 变量 = 变量名 + 值 + 类型
// 变量没有赋值之前 undefined,变量的类型由值来决定,类型可以确定变量的职责和功能


//函数表达式
var BicycleShop;
BicycleShop = function (name) {
    this.name = name;
}
BicycleShop.prototype = {
    //对象字面量
    sellBicycle: function (model) {
        // 有很多的车型
        var bicycle = BicycleFactory.createBicycle(model);
        //switch (model)缺点，新增品牌时，软件要下线   
        bicycle.assemble();
        bicycle.wash();
        return bicycle;
    }
}

var BicycleFactory = function () {

}
//剥离选择自行车的业务  工厂模式
// 静态方法
BicycleFactory.createBicycle = function(model) {
    let bicycle;
    switch (model) {
        case 'The Speedster': bicycle = new Speedster();
            break;
        case 'The Lowrider': bicycle = new Lowrider();
            break;
        case 'The Comfort Crusier': bicycle = new ComfortCrusier();
            break;
        default: bicycle = new Giant();
    }
    return bicycle;
}

function Speedster() {
}
Speedster.prototype = {
    assemble: function() {

    },
    wash: function () {

    }
}
function Lowrider() {
}
Lowrider.prototype = {

}
function ComfortCrusier() {
};
ComfortCrusier.prototype = {
    assemble: function() {
        console.log('组装出一部ComfortCrusier');
    },
    wash: function () {
        console.log('为您清洗好了，感谢你购买ComfortCrusier');
    }
}
function Giant() {
}
Giant.prototype = {
    assemble: function() {

    },
    wash: function () {

    }
}

var bicycleShop = new BicycleShop("特安捷—自行车店");
console.log(bicycleShop.name);
bicycleShop.sellBicycle('The Comfort Crusier');