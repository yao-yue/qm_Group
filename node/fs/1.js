var fs = require('fs');                  //用FS模块操作本地文件
var data;
try {
    data = fs.readFileSync('./fileForRead11.txt', 'utf8');
    console.log(data);
} catch (err) {
    console.error('读取文件出错:' + err.message);
}
