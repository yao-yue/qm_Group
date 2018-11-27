//宅
function Otaku(name, age) {
    this.name = name;
    this.age = age;
    this.habit = 'Games';
}
Otaku.prototype.strength = 60;
Otaku.prototype.sayYourName = function () {
    console.log('I am' + this.name);
}
var person = new Otaku('Kevin', '18');
console.log(person.name, person.age, person.habit);
person.sayYourName();