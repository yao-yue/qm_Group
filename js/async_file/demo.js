const fs = require('fs');
const path = require('path');   //构建文件的物理路径
const dir = './src';            //目录

fs.readdir(dir, (err, files) => {
    //容错处理 没有目录怎么办
    if(err) {
        console.error(err);
        return;
    }
    files.forEach(file => {
        //stat  文件对象的状态
        fs.stat(path.join(dir, file), (err, stat) => {
            console.log(stat.isFile());
        })
    }) 
})