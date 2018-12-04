
var fileFinder= require('./demo1.js');
fileFinder('./src', function(err, filename) {
    if(err) {
        return console.log(err);
    }
    console.log(filename);
});

// 1. cb回调
// 2. then 
// 3. async await
// 4. generate
// 5. error