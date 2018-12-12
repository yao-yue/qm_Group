function* listPeople() {
    let i = 0;
    yield i;
    i++;
    yield i;
    i++;
    yield i;
}
const people = listPeople();
// console.log(people.next())  //执行  遇到第一个yield停下来
// console.log(people.next())
// console.log(people.next())
// console.log(people.next())

// next()调用中的传参
// 参数值有注入的功能，可改变上一个yield的返回值，如

while(!people.next().done) {
    console.log(people.next())
}