const Promise = require('./promise.js');

const p = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('b');
    },2000);
});
p.then((data) => {
    console.log('a');
    console.log(data);
})
