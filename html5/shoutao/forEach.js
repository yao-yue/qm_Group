//书写代码，能够手写forEach 手写VUE

Array.prototype.forEach = function (fn) {
    if (typeof fn !== 'function') {
        throw new Error('参数必须为函数');
    }

    //方法作为对象的方法调用时，this指向当前对象
    let arr = this;
    //Array.isArray判断数组的推荐方法
    if (!Array.isArray(arr)) {
        throw new Error('只能对数组用forEach方法');
    }
};

const arr = new Array(1,2,3);

//forEach功能
for(let index = 0; index < arr.length; index++) {
    fn(arr[index], index, arr);
}



arr.forEach(function (i, index) {
    // arguments
    console.log(arguments[1] == index);
    console.log(`第${index}遍历值为${i}`);
})