var fs = require('fs');
var path = require('path');

const fileFinder = (dir, cb) => {
    console.log(dir);
    fs.readdir(dir, (err, files) => {
        //容错处理
        if (err) {
            return cb(err);
            //dir不存在 怎么处理？ 告诉cb
        }
        // 找到最大文件 算法：把所有文件大小放入一个数组。
        var counter = files.length;
        var errored = false; //未出错
        var stats = [];
        files.forEach((file, index) => {
            fs.stat(path.join(dir, file), (err, stat) => {
                // 文件的循环处理有先后，只要有一个文件出现问题就停止
                if (errored) return;
                if (err) {
                    errored = true;
                    return cb(err);
                }
                stats[index] = stat;
                if (--counter == 0) {
                    //?什么时候文件信息都获取完
                    //这个时候比较谁最大
                    //reduce 遍历每一项 将数组每一项逐渐缩减
                    // reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。

                    // 假设函数有4个传入参数，prev和next，index和array。 Prev和next是你必须要了解的。
                    // 当没有传入初始值时，prev是从数组中第一个元素开始的，next是第二个函数。
                    // 但是当传入初始值（initiaValue）后,第一个prev将是initivalValue，next将是数组中的第一个元素

                    var largest = stats.filter(stat => stat.isFile()).reduce((prev, next) => {
                        if (prev.size > next.size) {
                            return prev;
                        } else {
                            return next
                        };
                    })
                    cb(null, files[stats.indexOf(largest)]);
                }
            })
        })
        // 什么时候是个尽头。拿到所有文件的stat
        // 异步


        // 遍历文件时，文件打开失败
    });
}

//commonJS的规范
module.exports = fileFinder;