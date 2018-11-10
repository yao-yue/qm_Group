const fs = require('fs');
// try {
//     //异步的费时，用callback来实现
//     fs.readFile('./a.txt', 'utf8', function(err, data) {
//         console.log(data);
//         fs.readFile('./b.txt', 'utf8', function(err, data){
//             console.log(data);
//             fs.readFile('./c.txt', 'utf8', function(err, data){
//                 console.log(data);
//             })
//         })
//     })
// } catch(e) {
// }

// Async  sync同步的
try {
    // 阻塞型的,
    // const data = fs.readfileSync('./a.txt', 'utf8')
    //只要你要有想顺序执行的东西，就用promise把他包起来
    const fileAPromise = new Promise((resolve, reject) => {
        fs.readFile('./a.txt', 'utf8', function (err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
    const fileBPromise = new Promise((resolve, reject) => {
        fs.readFile('./b.txt', 'utf8', function (err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    });
    const fileCPromise = new Promise((resolve, reject) => {
        fs.readFile('./c.txt', 'utf8', function (err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    });
    //这个时候Promise就开始执行
    // fileAPromise
    //     .then(data => {
    //         return fileBPromise
    //     })
    //     .then(data => {
    //         console.log('文件B', data);
    //         return fileCPromise
    //     })
    //     .then(data => {
    //         console.log('文件C', data);
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })

    Promise.all([fileBPromise,fileAPromise , fileCPromise])
        .then(responses => {
            console.log(responses)
        })
} catch (e) {
    console.log('读取文章失败' + e.message);
}

