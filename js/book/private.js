// isbn title author 
// public 有问题
// 私有化
var Book = ( () => {
    // 闭包 闭合的空间
    var numOfBooks = 0;
    return  function (newIsbn, newTitile, newAuthor) {
        //constructor
        // 局部作用域内的变量
        console.log(newIsbn, newTitile, newAuthor, numOfBooks);
        var isbn, title, author;
        var checkIsbn = function(isbn) {
            if(!isbn || typeof isbn !== 'string') {
                throw new Error('isbn 有误');
            }
        }
        //public
        this.setTitle = function (newTitile) {
            title = newTitile || 'No Title specified';
        }
        this.getTitle = function () {
            return title;
        };
        this.getIsbn = function () {
            return isbn;
        };
        this.setIsbn = function () {
            if(checkIsbn(newIsbn))
                isbn = newIsbn;
        };
        this.setAuthor = function () {
            return author;
        };
        this.getAuthor = function () {
            author = newAuthor;
        };
        this.setAuthor(newAuthor);
        this.setIsbn(newIsbn);  
        this.setTitle(newTitile);
        numOfBooks++;
        console.log(`创建了${numOfBooks}本书`);
    }
})();
// 静态方法
Book.convertToTitleCase = function (inputString) {
    return inputString.toUpperCase();
}

Book.prototype = {
    display: function () {
        console.log(`这本书名是${this.getTitle()}, 作者是${this.getAuthor()}`);
    }
}

//new的过程发生了什么
var book = new Book('123', '道君', '泰戈尔');
var book2 = new Book('123', 'htmlCore', 'black');
book.setTitle('可以设置吗');
console.log(book.getTitle());
