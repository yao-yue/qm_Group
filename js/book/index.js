// 'use strict'
var Book = function (isbn, title, author) {
    // 构造函数 constructor
    console.log(this);
    // isbn有一定的规则,需要做严谨的校验
    // if(isbn === undefined){
    //     throw new Error('Book constructor requires an isbn')
    // }
    if (!this.checkIsbn(isbn))
        throw new Error('Book: Invalid ISBN.');    
    this.isbn = isbn;
    this.title = title || 'No titile Specified';
    this.author = author;
}
Book.prototype = {
    checkIsbn: function (isbn) {
        if(isbn === undefined || typeof isbn !== 'string') {
            return false;
        }
        if(isbn.length != 10 && sibn.length != 13) {
            return false;
        }
        if(isbn.indexOf('\-') == -1 ){
            return false;
        }
        return true;
    },
    getIsbn: function(isbn) {
        return  this.isbn;
    },
    setIsbn: function(isbn) {
        //isbn不可以被随意设置  超级管理员
        console.log("您当前没有权限");
    },
    getTitle: function() {
        return this.title;
    },
    setTitle: function(title) {
        this.title = title;
    },
    getAuthor: function() {
        return this.author;
    },
    setAuthor: function(author) {
        this.author = author;
    }
}
/*在node端this指向global
函数的执行方式决定this的指向
1.作为普通函数， this指向全局(浏览器端window， node后端global)
 当启用严格模式后，undefined
2.作为对象的方法被调用时
*/
let book = new Book('123-123456');
console.log(book.getIsbn());

console.log(book instanceof Book);
//instanceof 判断机制  Book的显式原型是否在在book隐式原型链上
book.setTitle("你不知道的JavaScript");
book.setAuthor("momomo");
console.log(book.author, book.title, book.isbn);
// 如何将属性私有化



