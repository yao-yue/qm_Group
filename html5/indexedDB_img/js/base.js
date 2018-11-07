(function() {
    // 前端数据库，新的html5，兼容性
    const indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexDB
    IDBTransaction = window.IDBTransaction || window.webkitTransaction ,
    dbVersion = 2.0;
    //利用客户端去存储去计算
    let request = indexedDB.open("elephantFiles", dbVersion);
    const createObjectStore = function(database) {
        database.createObjectStore("elephants");
    };
    let db;
    const getImageFile = () => {
        // 图片？ 不在库里，根目录，存到库里  让文件成为一个json文件流
        // 找到图片XMLHttpRequest  数据库主动拉
        const xhr = new XMLHttpRequest();
        let blob = null;
        xhr.open('GET', 'elephant.png', true);
        xhr.responseType = 'blob'; //blob二进制流  返回内容格式 text/JSON  text/html
        xhr.addEventListener('load', function() {
            if (xhr.status === 200) {
                blob = xhr.response;
                console.log(blob);
                putElephantInDb(blob);
            }
        }, false);
        xhr.send();
    }
    const putElephantInDb = function(blob) {
        const readWriteMode = typeof IDBTransaction.READ_WRITE == 'undefined' ? 'readwrite' : IDBTransaction.READ_WRITE;
        //事物
        const transaction = db.transaction(["elephants"], readWriteMode);
        //put不会重复添加  add会重复添加
        transaction.objectStore("elephants").put(blob,"image"); 
        transaction.objectStore("elephants").get("image").onsuccess = function(event) {
            const imgFile = event.target.result;
            // blob文件, img src url 本地，blob://支持本地打开文件
            const URL = window.URL || window.webkitURL;
            //二进制文件变成一个URL  能够得到一个访问地址
            const imgURL = URL.createObjectURL(imgFile);
            console.log(imgURL);
            document.getElementById('elephant').src = imgURL;
            document.getElementById('elephant').onload = function() {
                window.URL.revokeObjectURL(this.src);
            }
        }
    }
    request.onerror = function(event) {
        console.log('err creating/accessing IndexedDB database');
    }
    request.onsuccess = function() {
        db = request.result;
        db.onerror = function(event) {
            console.log('error')
        }
        getImageFile();
    }
    //版本更新了之后
    request.onupgradeneeded = function(event) {
        console.log(event.target.result);
        createObjectStore(event.target.result);
    }
})()